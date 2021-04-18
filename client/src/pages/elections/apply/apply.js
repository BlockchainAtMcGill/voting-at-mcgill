import React, { useState, useEffect } from 'react';
import { Header } from '../../../components/header';
import VoteFactoryContract from "../../../contracts/VoteFactory.json";
import VoteContract from "../../../contracts/Vote.json";
import { Form } from "semantic-ui-react";
import getWeb3 from "../../../getWeb3";
import 'semantic-ui-css/semantic.min.css';
import Router from 'next/router';

const candFields = {
    margin: "auto 5% auto 5%"
};
const candTitle = {
    color: "red",
    marginBottom: "5%",
    fontSize: "3em",
    textAlign: "center"
};

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
    const [currentDate, setCurrentDate] = useState(0);
    const [description, setDescription] = useState('');

    var onSubmit = async (event) => {
        event.preventDefault();

        var manager
        var factoryContract
        var voteContract;
        var addressOfVote;
        var currDate= new Date();
        setCurrentDate(currDate);
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
        };
        var getElectionAddress = async() =>{
            const url=window.location.href;
            const pos=url.indexOf('y')+2;
            addressOfVote= url.slice(pos);
            console.log(addressOfVote);
        };
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
        };


        var setCandidate = async () => {
            const userinfo = await factoryContract.methods.getUser().call({
                from: manager
              });
            await voteContract.methods.enterElection(userinfo[0], description ,new Date(currentDate).getTime()).send({from: manager});
        };

        var displayCand = async () => { // testing purposes
            const summary = await voteContract.methods.get_candidate(manager).call();
            console.log(summary);
        };
        await setupVoteFactory();
        await getElectionAddress();
        await initializeElection();
        await setCandidate();
        await displayCand();
        const votePage= "/elections/vote/"+ addressOfVote;
        Router.push(votePage);
    };
    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1 style= {candTitle}>Run for Election</h1>
            <h3 style={{color: "red"}}> </h3>
            <Form onSubmit={onSubmit} style={candFields}>

                <br></br>



                <br></br>

                <div>
                    <Form.TextArea required
                                 label="Enter candidate blurb here"

                                 value={description}
                                 onChange={event => setDescription(event.target.value)}
                    />
                </div>

                <br></br>
                <div>
                    <Form.Button>Cancel</Form.Button>
                    <Form.Button type="submit" onSubmit={onSubmit}>Run for Election</Form.Button>
                </div>


            </Form>

        </>
      )
};
/*Apply.getInitialProps = async (props) => {
    console.log(props.query.address)
    return {VoteContract: props.query.address}
  };
*/
export default Apply;
