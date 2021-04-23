import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import { Form, Loader  } from "semantic-ui-react";
import getWeb3 from "../getWeb3";
import Router from "next/router";
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

/**
 * New Group Page - a Page where user can see all existing group and/or join a new group
 * DISCLAMER - majority of the code is based on vote.js written by Simon Wang
 * 
 * @author Brandon Wong
 * @author Simon Wang
 */
const NewGroup = () => {
    // Basic
    var web3Instance;
    const [web3, setWeb3] = useState('');
    const [Load, setLoad] = useState(true);
    const [creatingGroup, setCreatingGroup] = useState(false);

    // Call the contract
    const [userLogin, setUserLogin] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        async function initWeb3() {
            web3Instance = await getWeb3();
            setWeb3(web3Instance);
        }
        initWeb3();
    },[Load]);

    var onSubmit = async (event) => {
        event.preventDefault();
        var factoryContract;
        var user;
        
        // Initializes VoteFactory Contract
        var setupVoteFactory = async () => {
            if(web3 == '') {
                return;
            }
            try {
                [user] = (await web3.eth.getAccounts());
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
            var isLogin = await factoryContract.methods.isUserLoggedIn().call();
            setUserLogin(isLogin);
            setCreatingGroup(true);
            if(factoryContract == ''){
                return;
            }

            try {
                if (isLogin) {
                    await factoryContract.methods.createGroup(groupName, description).send({
                        from: user
                    });
                    setCreatingGroup(false);
                    setLoad(!Load);
                }
            } catch (error) {
                alert (
                    `Failed to create new group.`
                );
            }
        };

        // Verify the values of the newly created instance of Group
        var displayGroup = async () => {
            var groupID = await factoryContract.methods.getNumOfGroups().call();
            var group = await factoryContract.methods.getGroup(groupID - 1).call();
            console.log(group);
        };

        await setupVoteFactory();
        await createGroup();
        await displayGroup();
        Router.push("/joinGroup");
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
