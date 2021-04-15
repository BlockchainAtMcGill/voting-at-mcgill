import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import { Form, Loader  } from "semantic-ui-react";
import getWeb3 from "../getWeb3";
import 'semantic-ui-css/semantic.min.css';

const adminTitle = {
    color: "red",
    marginBottom: "5%",
    fontSize: "3em",
    textAlign: "center"
};

const adminFields = {
    margin: "auto 5% auto 5%"
};

const NewGroup = () => {
    // Basic
    var web3Instance;
    const [web3, setWeb3] = useState('');
    const [Load, setLoad] = useState(true);
    const [creatingGroup, setCreatingGroup] = useState(false);

    // Call the contract
    const [groupName, setGroupName] = useState('');
    const [description, setDescription] = useState('');
    const [groupID, setGroupID] = useState('');

    useEffect(() => {
        async function initWeb3() {
            web3Instance = await getWeb3();
            setWeb3(web3Instance);
        }
        initWeb3();
    },[Load]);

    var onSubmit = async (event) => {
        event.preventDefault();
        var manager;
        var factoryContract;
        
        // Initializes VoteFactory Contract
        var setupVoteFactory = async () => {
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
        // Calls VoteFactory Contract to create a new instance of Group
        var createGroup = async () => {
            setCreatingGroup(true);
            if(factoryContract == ''){
                return;
            }
            // Calls the method createGroup from VoteFactory.sol
            await factoryContract.methods.createGroup(groupName, description).send({
                from: manager
            });
            setCreatingGroup(false);
            setLoad(!Load);
        };

        // Verify the values of the newly created instance of Group
        var displayGroup = async () => {
            var groupID = await factoryContract.methods.getNumOfGroups().call();
            console.log(groupID);
            // const summary = await factoryContract.methods.getGroup(groupID - 1).call();
            // console.log(summary);
        };

        await setupVoteFactory();
        await createGroup();
        await displayGroup();
    };

    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={adminTitle}>New Group</h1>
            
            <Form onSubmit={onSubmit} style={adminFields}>
                <div>
                    <Form.Input required label="Group name"
                                 value={groupName}
                                 onChange={event => setGroupName(event.target.value)}
                    >

                    </Form.Input>
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
                <br></br>
                <Loader
                        active={creatingGroup}
                        inline='centered'
                />                     
                <br></br>
                <div>
                    <Form.Button>Cancel</Form.Button>
                    <Form.Button type="submit" onSubmit={onSubmit}>Create Group</Form.Button>
                </div>
            </Form>
        </>
    )
};
export default NewGroup;
