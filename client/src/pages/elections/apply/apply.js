import React, { useState, useEffect } from 'react';
import { Header } from '../../../components/header';
import VoteFactoryContract from "../../../contracts/VoteFactory.json";
import VoteContract from "../../../contracts/Vote.json";
import * as m from "@material-ui/core";
import getWeb3 from "../../../getWeb3";

const Apply = () => {

    const [web3, setWeb3] = useState('');
    var web3Instance;
    useEffect(() => {
        async function initWeb3() {
            web3Instance = await getWeb3();
            setWeb3(web3Instance);
        }
        initWeb3();
    },[]);

    //please follow the course for a better implementation @Jing
    const [candidateName, setName] = useState('');
    const changeName = (event) => {
        setName(event.target.value);
    };
    const [currentDate, setCurrentDate] = useState(0);
    const changeCurrentDate = (event) => {
        setCurrentDate(event.target.value);
    };

    const [description, setDescription] = useState('');
    const changeDescription = (event) => {
        setDescription(event.target.value);
    };


    var onSubmit = async (event) => {
        event.preventDefault();
        var candidateAddr
        var addressOfVote
        var manager
        var factoryContract
        var voteContract;
        var getElectionAddress = async() =>{
          const url=window.location.href;
          const pos=url.indexOf('y')+2;
          addressOfVote= url.slice(pos);
          console.log(addressOfVote);
        };
        var setupVoteFactory = async () => { //initializes voteFactory
            if(web3 == '') {
                return;
            }
            try {
                [manager] = (await web3.eth.getAccounts());
                // Get the contract instance.
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = VoteFactoryContract.networks[networkId];
                const instance = new web3.eth.Contract(
                    VoteFactoryContract.abi,
                    deployedNetwork && deployedNetwork.address,
                );
                factoryContract = instance;

                // Set web3, accounts, and contract to the state, and then proceed with an
            } catch (error) {
                // Catch any errors for any of the above operations.
                alert(
                    `Failed to load web3, accounts, or contract. Check console for details.`,
                );
                console.error(error);
            }
        }
        var initializeElection = async () => {//initializes vote contract
            try {
                // Get the contract instance.
                const instance = await new web3.eth.Contract(
                    VoteContract.abi,
                    addressOfVote,
                );
                voteContract = instance;
            } catch (error) {
                // Catch any errors for any of the above operations.
                alert(
                    `Failed to load web3, accounts, or contract. Check console for details.`,
                );
                console.error(error);
            }
        }
        var setCandidate = async () => {
          [candidateAddr]= (await web3.eth.getAccounts());
          await voteContract.methods
          .enterElection(candidateName, description ,new Date(currentDate).getTime())
          .send({
            from: candidateAddr
          })

        };
        await setupVoteFactory();
        await getElectionAddress();
        await initializeElection();
        await setCandidate();
    };
    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1>Run for Election</h1>
            <h3 style={{color: "red"}}> </h3>
            <form onSubmit={onSubmit} noValidate autoComplete="off">
                <div>
                    <m.TextField required fullWidth label="Name"
                                 variant="outlined"
                                 value={candidateName}
                                 onChange={changeName}
                    >

                    </m.TextField>
                </div>
                <br></br>
                <div>
                    <m.TextField label="Current date" type="date"
                                 variant="outlined"
                                 InputLabelProps={{
                                    shrink: true,
                                    }}
                                 value={currentDate}
                                 onChange={changeCurrentDate}
                    >

                    </m.TextField>
                </div>

                <br></br>
                <div>
                    {/*<m.TextField label="Select groups (someone help with the search and select multiple plz)" variant="outlined" /> */}
                </div>
                <br></br>
                <div>
                    <m.TextField required multiline fullWidth
                                 label="Description"
                                 rows={4}
                                 variant="outlined"
                                 value={description}
                                 onChange={changeDescription}
                    />
                </div>

                <br></br>
                <div>
                    <m.Button>Cancel</m.Button>
                    <m.Button type="submit" onSubmit={onSubmit}>Run for Election</m.Button>
                </div>


            </form>
        </>
    )
}

/*Apply.getInitialProps = async (props) => {
    console.log(props.query.address)
    return {VoteContract: props.query.address}
  };
*/
export default Apply;
