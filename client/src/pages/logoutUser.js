import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import { Form } from "semantic-ui-react";
import getWeb3 from "../getWeb3";
import Router from "next/router";
import 'semantic-ui-css/semantic.min.css';

const logoutButton = {
    elevation: 8,
    backgroundColor: "red",
    borderRadius: 1000,
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: "white",
    fontSize: "3em",
    textAlign: "center"
};

const adminFields = {
    position: 'absolute', left: '50%', top: '20%',
    transform: 'translate(-50%, -50%)'
};

const LogoutUser = () => {
    // Basic
    var web3Instance;
    const [web3, setWeb3] = useState('');
    const [Load, setLoad] = useState(true);
    const [userLogin, setUserLogin] = useState(false);

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
        var logOutUser = async () => {
            var isLogin = await factoryContract.methods.isUserLoggedIn().call({
                from: user
            });
            setUserLogin(isLogin);
            if(factoryContract == ''){
                return;
            }

            try {
                if (userLogin) {
                    // Calls the method createGroup from VoteFactory.sol
                    await factoryContract.methods.logoutUser().send({
                        from: user
                    });
                }
            } catch (error) {
                alert(error);
            }
            setLoad(!Load);
        };

        await setupVoteFactory();
        await logOutUser();
    };

    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>

            <Form onSubmit={onSubmit} style={adminFields}>
                <div>
                    <Form.Button style={logoutButton} type="submit" onSubmit={onSubmit}>Log Out</Form.Button>
                </div>
            </Form>
        </>
    )
};
export default LogoutUser;
