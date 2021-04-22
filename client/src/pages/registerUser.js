import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import { Form, Loader  } from "semantic-ui-react";
import getWeb3 from "../getWeb3";
import 'semantic-ui-css/semantic.min.css';
import Router from "next/router";

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
 * Register User Page - a Page where user can see all existing group and/or join a new group
 * DISCLAMER - majority of the code is based on vote.js written by Simon Wang
 * 
 * @author Brandon Wong
 * @author Simon Wang
 */
const RegisterUser = () => {
    // Basic
    var web3Instance;
    const [web3, setWeb3] = useState('');
    const [Load, setLoad] = useState(true);
    const [registeringUser, setRegisteringUser] = useState(false);
    const [errorRegister, setErrorRegister] = useState(false);

    // Call the contract
    const [currentUser, setCurrentUser] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [studentID, setStudentID] = useState('');

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

        // Initializes VoteFactory Contract
        var setupVoteFactory = async () => {
            if(web3 == '') {
                return;
            }
            try {
                const [user] = (await web3.eth.getAccounts());
                setCurrentUser(user);
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
        var registerUser = async () => {
            setRegisteringUser(true);
            var error = ``;

            if(factoryContract == ''){
                return;
            }
            // Calls the method createGroup from VoteFactory.sol
            // TO FIX Verify that is a valid email
            var temp = email.split("@");
            if (!(temp[1] === "mcgill.ca") && !(temp[1] === "mail.mcgill.ca")) {
                error += `Wrong email format. Make sure to use a McGill email e.g., @mcgill.ca or @mail.mcgill.ca \n`;
            }

            if (studentID.length != 9) {
                error += `Wrong student ID format. Make sure that the student ID has a length of 9 digits`;
            }

            if (error.length != 0) {
                alert(error);
                setErrorRegister(true);
            }

            try {
                await factoryContract.methods.registerUser(username, email, studentID, password).send({
                    from: currentUser
                });
            } catch (error) {
                alert(error);
            }

            setRegisteringUser(false);
            setLoad(!Load);
        };

        // Verify the values of the newly created instance of Group
        var displayUser = async () => {
            if (!errorRegister) {
                const summary = await factoryContract.methods.getUser().call({
                    from: currentUser
                });
                console.log(summary);
            }
        };

        var displayDefaultGroup = async () => {
            if (!errorRegister) {
                const summary = await factoryContract.methods.getGroup(0).call();
                console.log(summary);
            }
        };

        var  displayGroups = async () => {
            if (!errorRegister) {
                const summary = await factoryContract.methods.getExistingGroups().call();
                console.log(summary);
            }
        };

        await setupVoteFactory();
        await registerUser();
        await displayUser();
        await displayDefaultGroup();
        await displayGroups();
        Router.push("/index");
    };

    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={adminTitle}>Register</h1>

            <Form onSubmit={onSubmit} style={adminFields}>
                <div>
                    <Form.Input required label="Username"
                                 value={username}
                                 onChange={event => setUsername(event.target.value)}
                    >

                    </Form.Input>
                </div>
                <br></br>
                <div>
                    <Form.Input required label="Email"
                                 value={email}
                                 onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <Form.Input required label="StudentID"
                                 value={studentID}
                                 onChange={event => setStudentID(event.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <Form.Input required label="Password"
                                 type="password"
                                 value={password}
                                 onChange={event => setPassword(event.target.value)}
                    >

                    </Form.Input>
                </div>
                <br></br>
                <Loader
                        active={registeringUser}
                        inline='centered'
                />
                <br></br>
                <div>
                    <Form.Button>Cancel</Form.Button>
                    <Form.Button type="submit" onSubmit={onSubmit}>Register</Form.Button>
                </div>
            </Form>
        </>
    )
};
export default RegisterUser;
