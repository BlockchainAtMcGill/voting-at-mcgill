import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import * as m from "@material-ui/core";
import getWeb3 from "../getWeb3";



const NewElection = () => {

    const [votesAddresses, setVotesAddresses] = useState('');
    const [web3, setWeb3] = useState('');
    const [accounts, setAccounts] = useState('');
    const [contract, setContract] = useState('');
    const [voteContract, setVoteContract] = useState('');
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


    // var onSubmit = async () => {
    //
    // };

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
                setAccounts(await web3.eth.getAccounts());
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

    useEffect(() => {//just get Vote contract
        async function setup() {
            if(web3 == '') {
                return;
            }
            try {
                // Get the contract instance.
                const instance = new web3.eth.Contract(
                    VoteContract.abi,
                    votesAddresses[0],
                );
                setVoteContract(instance);
                //console.log(voteContract);
                //console.log(instance);
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
    },[contract,votesAddresses]);

    useEffect(() => {
        var createVote = async () => {
            if(contract == ''){
                return;
            }
            // Get the value from the contract to prove it worked.
            // uncomment to create votes, note that second await call wont run if first is run.
            await contract.methods.createVote(0).send({
                from: accounts[0]
            });
        };
        var displayVotes = async () => {
            if(contract == ''){
                return;
            }
            const response = await contract.methods.getDeployedVotes().call();

            // Update state with the result.
            //console.log("response is" + response);
            setVotesAddresses(response);
        };
        createVote();
        displayVotes();
    },[contract]);


    var onSubmit = async (event) => {
        event.preventDefault();

        console.log("in onSubmit");
        //console.log(voteContract);

        let election;
        var setUpElection = async() => {
            /*
            if (voteContract == '') {
                console.log("voteContract dne");
                return;
            }
            */

            //await voteContract.methods.editElection("title", 123, 234, "hhh", [1,2,3]);
            await voteContract.methods.editElection(title, new Date(startDate).getTime(), new Date(endDate).getTime(), description, [0]);
            //setVoteContract(voteContract);
            //console.log(voteContract);

        };

            var displayVote = async () => {
                const summary = await voteContract.methods.currentElection().call();
                console.log(summary);
            };

            //await createVote();
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
            {/*
                <div>
                    <div>
                        Election Title:
                        <m.TextField label="Election title"/>
                    </div>
                    <div>Choose Dates:</div>
                    <div>Choose type of election:</div>
                    <div>Choose groups (optional):</div>
                    <div>Add description:</div>
                    <div>
                        <div>Cancel</div>
                        <div>Publish Election</div>
                    </div>
                </div>
                */
            }
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
