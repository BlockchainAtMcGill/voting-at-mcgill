import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import { Form } from "semantic-ui-react";
import getWeb3 from "../getWeb3";
import 'semantic-ui-css/semantic.min.css';
import Router from 'next/router';
import { Dropdown } from 'semantic-ui-react'

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
    const [title, setTitle] = useState('');
    const [manager, setManager] = useState('');
    const [voteFactory, setVoteFactory] = useState('');
    const [startDate, setStartDate] = useState(0);
    const [groupsID, setGroupsID] = useState('');
    const [selectedGroups, setSelectedGroups] = useState('');
    const [endDate, setEndDate] = useState(0);
    const [description, setDescription] = useState('');
    
    
    var web3Instance;
    useEffect(() => {
        async function initWeb3() {
            web3Instance = await getWeb3();
            setWeb3(web3Instance);
        }
        initWeb3();
    },[]);

    // Return all group IDs of a user as an array
    useEffect(()=> {
        async function setup() {
            if(web3 == "") {
              console.log('unable to get factory')
              return;
            }
            try {
              var [user] = await web3.eth.getAccounts();
              setManager(user);
              const networkId = await web3.eth.net.getId();
              const deployedNetwork = VoteFactoryContract.networks[networkId];
              const instance = new web3.eth.Contract(
                VoteFactoryContract.abi,
                deployedNetwork && deployedNetwork.address,
              );
              setVoteFactory(instance);
          
            } catch (error) {
              alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
              );
              console.error(error);
            }
          }
            setup();

    },[web3])

    useEffect(()=> {
        var displayVotes = async () => {
        if(voteFactory == '') {
            return;
        }
        const response = await voteFactory.methods.getUserAllGroups().call();
        const temp = [];
        for (var i = 0; i < response.length; i++) {
            temp[i] = { key: parseInt(response[i]), text: parseInt(response[i]), value: parseInt(response[i])};
        }
        setGroupsID(temp);
        };
        displayVotes();
    },[voteFactory]);

    var onSubmit = async (event) => {
        event.preventDefault();
        var voteContract;
        var addressOfVote;
        var createVote = async () => {//uses voteFactory to create Vote
            if(voteFactory == ''){
                return;
            }
            // Get the value from the contract to prove it worked.
            await voteFactory.methods.createVote(1).send({
                from: manager
            });
        };
        var getPetitionAddress = async () => {//calls voteFactory method to get new Vote address
            const response = await voteFactory.methods.getDeployedVotes().call();
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
        const electionType="";
        var setUpPetition = async() => {//call to vote contract to edit petition
            if (!voteContract) {
                console.log("voteContract dne");
                return;
            }
            await voteContract.methods
                .editVote(title, new Date(startDate).getTime(), new Date().getTime(),new Date(endDate).getTime(), description, electionType, selectedGroups)
                .send({
                    from: manager
                })
        };

        var displayVote = async () => { // testing purposes
            const summary = await voteContract.methods.getPetition().call();
            console.log(summary);
        };
        await createVote();
        await getPetitionAddress();
        await initializePetition();
        await setUpPetition();
        await displayVote();
        Router.push("/");
    };

    const onChange = (event, result) => {
        const { name, value } = result || event.target;
        setSelectedGroups(value)
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
                <br></br>
                <Dropdown placeholder='group IDs' fluid multiple selection options={groupsID} onChange = {onChange}/>
                <br></br>
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
