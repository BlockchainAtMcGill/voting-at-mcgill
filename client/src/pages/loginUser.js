import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import { Form, Loader  } from "semantic-ui-react";
import getWeb3 from "../getWeb3";
import { Link } from '../../routes';
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

const LoginUser = () => {
    // Basic
    var web3Instance;
    const [web3, setWeb3] = useState('');
    const [Load, setLoad] = useState(true);
    const [userLogin, setUserLogin] = useState(false);

    // Call the contract
    const [studentID, setStudentID] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        async function initWeb3() {
            web3Instance = await getWeb3();
            setWeb3(web3Instance);
        }
        initWeb3();
    },[Load]);

    var onSubmit = async (event) => {
        event.preventDefault();
        var user;
        var factoryContract;

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
        var logInUser = async () => {
            var isLogin = await factoryContract.methods.isUserLoggedIn().call();
            setUserLogin(isLogin);
            var error = ``;
            if(factoryContract == ''){
                return;
            }

            if (studentID.length != 9) {
                error += `Wrong student ID format. Make sure that the student ID has a length of 9 digits`;
            }

            if (error.length != 0) {
                alert(error);
            }

            try {
                if (!userLogin) {
                    // Calls the method createGroup from VoteFactory.sol
                    await factoryContract.methods.loginUser(studentID, password).send({
                        from: user
                    });
                }
            } catch (error) {
                alert(error);
            }
            setLoad(!Load);
        };

        // Verify the values of the newly created instance of Group
        var displayUser = async () => {
            const summary = await factoryContract.methods.getUser().call();
            console.log(summary);
        };

        await setupVoteFactory();
        await logInUser();
        await displayUser();
        Router.push("/");
    };

    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={adminTitle}>Log In</h1>

            <Form onSubmit={onSubmit} style={adminFields}>
                <div>
                    <Form.Input required label="StudentID"
                                 value={studentID}
                                 onChange={event => setStudentID(event.target.value)}
                    >

                    </Form.Input>
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
                        active={userLogin}
                        inline='centered'
                />
                <br></br>
                <div>
                    <Form.Button>Cancel</Form.Button>
                    <Form.Button type="submit" onSubmit={onSubmit}>Login</Form.Button>
                </div>
            </Form>
        </>
    )
};
export default LoginUser;
