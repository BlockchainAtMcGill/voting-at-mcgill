import React, { useState, useEffect } from "react";
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import getWeb3 from "../getWeb3";
import { Header } from '../components/header';


function App() {
  const [votesAddresses, setVotesAddresses] = useState('');
  const [web3, setWeb3] = useState('');
  const [accounts, setAccounts] = useState('');
  const [contract, setContract] = useState('');
  const [voteContract, setVoteContract] = useState('');
  var web3Instance;
  useEffect(() => {// get web3
    async function initWeb3() {
      web3Instance = await getWeb3()
      setWeb3(web3Instance);
    }
    initWeb3();
  },[]);

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
        console.log(instance);
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

  useEffect(()=> {//testing code for factory contract
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
      console.log("first vote is " + response[0]);
      setVotesAddresses(response);
    };
    // createVote();
    displayVotes();
  },[contract]);

  // useEffect(()=> {//testing code for vote contract
  //   var displayVotes = async () => {
  //     if(votesAddresses == []){
  //       return;
  //     }
  //     const vote = voteContract.at(votesAddresses[0]);
  //     console.log(vote);
  //     // Update state with the result.
  //     console.log('works!')
  //   };
  //   displayVotes();
  // },[votesAddresses, voteContract]);

  return( 
    <>
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="App">
        <div>test value: {votesAddresses}</div>
      </div>
    </>
  );
}

export default App;
