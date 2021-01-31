import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import getWeb3 from "../getWeb3";
import { Header } from '../components/header';
import { Link } from '../../routes'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// CommonJS
require("regenerator-runtime/runtime");

const useStyles = makeStyles({
  card: {
    width:'80%'
  }
});

function App() {
  const classes = useStyles();
  const [votesAddresses, setVotesAddresses] = useState('');
  const [web3, setWeb3] = useState('');
  const [accounts, setAccounts] = useState('');
  const [contract, setContract] = useState('');
  const [voteContract, setVoteContract] = useState('');
  const [renderedAddresses, renderAddresses] = useState([]);

  useEffect(() => {// get web3
    async function initWeb3() {
      const web3Instance = await getWeb3()
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
          votesAddresses[votesAddresses.length-1],
        );
        setVoteContract(instance);
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

  useEffect(()=> {//display available votes
    var displayVotes = async () => {
      if(contract == ''){
        return;
      }
      const response = await contract.methods.getDeployedVotes().call();
      // Update state with the result.
      setVotesAddresses(response);
    };
    displayVotes();
  },[contract]);

  useEffect(()=> {//render votes
    var displayInfo = async (address) => { 
      if(web3 == '') {
        return;
      }
      try {
        // Get the contract instance.
        const instance = new web3.eth.Contract(
          VoteContract.abi,
          address
        );
        return (await instance.methods.currentElection().call());
        // Set web3, accounts, and contract to the state, and then proceed with an
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    };
    var renderVotes = async () => {
      if (!votesAddresses){
        return;
      }
      var temp = []
      votesAddresses.forEach(address => {
          displayInfo(address).then(newAddress =>
          temp.push(newAddress)
        )
      })
      renderAddresses(temp);
    }
    renderVotes();
  },[votesAddresses]);


  function displayVoteList() {
    if(web3 == ""){
      return "waiting for votes to display..."
    }
    else if(votesAddresses == ""){
      return "no votes to display"
    }
    // setTimeout(function(){
    //   //
    // }, 2000);
    // setTimeout(1000)
    // console.log(JSON.stringify(renderedAddresses));
    return votesAddresses.map((vote, index) => 
        <Card key={index} variant="outlined" className ={classes.card}>
          <CardContent >
            <Grid container>
              <Grid item xs ={10}><span>{vote}</span></Grid>
              <Grid item xs ={2}>
                <div>            
                  <Link route ={`/elections/apply/${vote}`}> 
                    Apply as Candidate
                  </Link>
                </div>
                <div>  
                  <Link route ={`/elections/vote/${vote}`}> 
                    Vote
                  </Link>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    )
  }

  
  return( 
    <>
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="App">
        <div>{ displayVoteList() }</div>
      </div>
    </>
  );
}

export default App;
