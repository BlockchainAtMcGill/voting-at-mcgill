import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import * as m from "@material-ui/core";
import getWeb3 from "../getWeb3";



const NewElection = () => {

    const [web3, setWeb3] = useState('');
    const [accounts, setAccounts] = useState('');
    const [contract, setContract] = useState('');
    const electionTypes = [
        {
            value: 'majority',
            label: 'simple majority'
        },
        {
            value: 'twoThirds',
            label: 'two thirds'
        }
    ];

    var web3Instance;
    useEffect(() => {
        async function initWeb3() {
            web3Instance = await getWeb3();
            setWeb3(web3Instance);
        }
        initWeb3();
    },[]);

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
    const [electionType, setElectionType] = useState('majority');
    const changeElectionType = (event) => {
        setElectionType(event.target.value);
    };
    const [description, setDescription] = useState('');
    const changeDescription = (event) => {
        setDescription(event.target.value);
    };

    useEffect(() => {// get Factory contract
        async function setup() {
            if(web3 == '') {
                return;
            }
            try {
                setAccounts(await web3.eth.getAccounts());
                // Get the contract instance.
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = VoteFactoryContract.networks[networkId];
                const instance = new web3.eth.Contract(
                    VoteFactoryContract.abi,
                    deployedNetwork && deployedNetwork.address,
                );
                setContract(instance);

                // Set web3, accounts, and contract to the state, and then proceed with an
            } catch (error) {
                // Catch any errors for any of the above operations.
                alert(
                    `Failed to load web3, accounts, or contract. Check console for details.`,
                );
                console.error(error);
            }
        }
        setup();
    },[web3]);

    var onSubmit = async (event) => {
        event.preventDefault();
        var vote;
        var addressOfVote

        var createVote = async () => {//uses voteFactory to create Vote
            if(contract == ''){
                return;
            }
            // Get the value from the contract to prove it worked.
            await contract.methods.createVote(0).send({
                from: accounts[0]
            });
        };
        var getElectionAddress = async () => {//calls voteFactory method to get new Vote address
            if(contract == ''){
                return;
            }
            const response = await contract.methods.getDeployedVotes().call();
            addressOfVote = response[response.length - 1];
        };
        var initializeElection = async () => {//initializes vote contract
            try {
                // Get the contract instance.
                const instance = await new web3.eth.Contract(
                    VoteContract.abi,
                    addressOfVote,
                );
                vote = instance;
            } catch (error) {
                // Catch any errors for any of the above operations.
                alert(
                    `Failed to load web3, accounts, or contract. Check console for details.`,
                );
                console.error(error);
            }
        }
        var setUpElection = async() => {//call to vote contract to edit election
            if (vote == '') {
                console.log("voteContract dne");
                return;
            }
            await vote.methods.editElection(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, [0]);
        };
        var displayVote = async () => { // testing purposes
            const summary = await vote.methods.currentElection().call();
            console.log(summary);
        };

        await createVote();
        await getElectionAddress();
        await initializeElection();
        await setUpElection();
        await displayVote();
    };

    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1>New Election</h1>
            <form onSubmit={onSubmit} noValidate autoComplete="off">
                <div>
                    <m.TextField required fullWidth label="Election title"
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
                    <m.TextField required label="End date" type="date"
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
                    <m.TextField required select label="Type of election"
                                 variant="outlined"
                                 value={electionType}
                                 onChange={changeElectionType}>
                        {electionTypes.map((option) => (
                            <m.MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </m.MenuItem>
                        ))}
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
                    <m.Button type="submit" onSubmit={onSubmit}>Publish Election</m.Button>
                </div>


            </form>
        </>
    )
}
export default NewElection;
