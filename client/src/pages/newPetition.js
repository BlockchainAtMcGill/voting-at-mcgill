import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import { Form } from "semantic-ui-react";
import getWeb3 from "../getWeb3";
import 'semantic-ui-css/semantic.min.css';
import Router from 'next/router';

const adminTitle = {
    color: "red",
    marginBottom: "5%",
    fontSize: "3em",
    textAlign: "center"
};

const adminFields = {
    margin: "auto 5% auto 5%"
};

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
    const [startDate, setStartDate] = useState(0);
    const [endDate, setEndDate] = useState(0);
    const [description, setDescription] = useState('');

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
        };
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
        };
        var setUpPetition = async() => {//call to vote contract to edit petition
            if (!voteContract) {
                console.log("voteContract dne");
                return;
            }
            await voteContract.methods
                .editPetition(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description)
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
        Router.push("/");
    };

    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={adminTitle}>New Petition</h1>

            <Form onSubmit={onSubmit} style={adminFields}>
                <div>
                    <Form.Input required label="Petition title"
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                    >

                    </Form.Input>
                </div>
                <br></br>
                <div>
                    <Form.Input label="Start date" type="date"

                                value={startDate}
                                onChange={event => setStartDate(event.target.value)}
                    >

                    </Form.Input>
                </div>
                <br></br>
                <div>
                    <Form.Input required label="End date" type="date"

                                value={endDate}
                                onChange={event => setEndDate(event.target.value)}
                    />
                </div>
                <br></br>
                <div>

                </div>
                <br></br>
                <div>
                    <Form.TextArea required
                                   label="Description"

                                   value={description}
                                   onChange={event => setDescription(event.target.value)}
                    />
                </div>

                <br></br>
                <div>
                    <Form.Button>Cancel</Form.Button>
                    <Form.Button type="submit" onSubmit={onSubmit}>Publish Petition</Form.Button>
                </div>


            </Form>
        </>
    )
};
export default NewPetition;