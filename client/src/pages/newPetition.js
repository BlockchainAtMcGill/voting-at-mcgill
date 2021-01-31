import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import * as m from "@material-ui/core";
import getWeb3 from "../getWeb3";



const NewPetition = () => {

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
    const [title, setTitle] = useState('');
    const changeTitle = (event) => {
        setTitle(event.target.value);
    };
    const [startDate, setStartDate] = useState(0);
    const changeStartDate = (event) => {
        setStartDate(event.target.value);
    };
    const [endDate, setEndDate] = useState(0);
    const changeEndDate = (event) => {
        setEndDate(event.target.value);
    };

    const [description, setDescription] = useState('');
    const changeDescription = (event) => {
        setDescription(event.target.value);
    };


    var onSubmit = async (event) => {
        event.preventDefault();
        var manager;
        var factoryContract;
        var voteContract;
        var addressOfVote;
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
        var createVote = async () => {//uses voteFactory to create Vote
            if(factoryContract == ''){
                return;
            }
            // Get the value from the contract to prove it worked.
            await factoryContract.methods.createVote(1).send({
                from: manager
            });
        };
        var getPetitionAddress = async () => {//calls voteFactory method to get new Vote address
            const response = await factoryContract.methods.getDeployedVotes().call();
            addressOfVote = response[response.length - 1];
        };
        var initializePetition = async () => {//initializes vote contract
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
        var setUpPetition = async() => {//call to vote contract to edit petition
            if (!voteContract) {
                console.log("voteContract dne");
                return;
            }
            await voteContract.methods
                .editPetition(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, [0])
                .send({
                    from: manager
                })
        };

        var displayVote = async () => { // testing purposes
            const summary = await voteContract.methods.currentPetition().call();
            console.log(summary);
        };
        await setupVoteFactory();
        await createVote();
        await getPetitionAddress();
        await initializePetition();
        await setUpPetition();
        await displayVote();
    };

    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1>New Petition</h1>

            <form onSubmit={onSubmit} noValidate autoComplete="off">
                <div>
                    <m.TextField required fullWidth label="Petition title"
                                 variant="outlined"
                                 value={title}
                                 onChange={changeTitle}
                    >

                    </m.TextField>
                </div>
                <br></br>
                <div>
                    <m.TextField label="Start date" type="date"
                                 variant="outlined"
                                 InputLabelProps={{
                                     shrink: true,
                                 }}
                                 value={startDate}
                                 onChange={changeStartDate}
                    >

                    </m.TextField>
                </div>
                <br></br>
                <div>
                    <m.TextField label="End date (optional)" type="date"
                                 variant="outlined"
                                 InputLabelProps={{
                                     shrink: true,
                                 }}
                                 value={endDate}
                                 onChange={changeEndDate}
                    />
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
                    <m.Button type="submit" onSubmit={onSubmit}>Publish Petition</m.Button>
                </div>


            </form>
        </>
    )
}
export default NewPetition;