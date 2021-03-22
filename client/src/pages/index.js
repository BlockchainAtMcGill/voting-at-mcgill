import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import getWeb3 from "../getWeb3";
import { Header } from '../components/header';
import { Link } from '../../routes'
import 'semantic-ui-css/semantic.min.css';
// CommonJS
require("regenerator-runtime/runtime");

const useStyles = makeStyles({
  card: {
    width:'80%'
  }
});

function App() {
  const [web3, setWeb3] = useState('');
  const [votesAddresses, setVotesAddresses] = useState('');
  const [contract, setContract] = useState('');
  const [renderedAddresses, renderAddresses] = useState([]);

  useEffect(() => {// get web3
    async function initWeb3() {
      console.log('initializing web3');
      const web3Instance = await getWeb3();
      setWeb3(web3Instance)
    }
    initWeb3();
  },[]);

  useEffect(() => {// get Factory contract
    async function setup() {
      if(web3 == "") {
        console.log('unable to get factory')
        return;
      }
      try {
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
      // console.log('ok')
  },[web3]);

  useEffect(()=> {//display available votes addresses
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

  var displayInfo = async (address) => { 
    if(votesAddresses == '') {
      return;
    }
    try {// Get the contract instance.
      const instance = new web3.eth.Contract(
        VoteContract.abi,
        address
      );
      return (await instance.methods.currentElection().call());
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=> {//render votes
    var renderVotes = async () => {
        if (!votesAddresses){
          return;
        }
        await votesAddresses.forEach(address => {
            displayInfo(address).then(newAddress => {
              renderAddresses([...renderedAddresses, newAddress])
          })
        })
      }
    renderVotes();
  },[votesAddresses]);

  useEffect(()=> {
    if(renderedAddresses != []) {
      console.log(renderedAddresses)
    }
  },[renderedAddresses])


  function displayVoteList() {
    if(web3 == ""){
      return "waiting for votes to display..."
    }
    else if(votesAddresses == ""){
      return "no votes to display"
    }
    return votesAddresses ? votesAddresses.map((vote, index) => 
        <Link className="ui button" route ={`/elections/vote/${vote}`} key={index}>
        <div className="ui link card" style={{width:"80%", color: '#f00000'}}>
        <div className="card">
        <div className="content">
          <div className="header">Election</div>
          <div className="meta">
            <a>{vote}</a>
          </div>
          <div className="description">
            Click to Vote
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="user icon"></i>
            0 votes
          </span>
        </div>
        </div></div></Link>
      ) : <></>
    }

  function clicked() {
    console.log(renderedAddresses)
    console.log(renderedAddresses[0].title)
  }

  return( 
    <>
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="App">
        <button onClick={clicked}>view rendered votes</button>
        <div>{ displayVoteList() }</div>
        <div>{renderedAddresses.length != 0 ? renderedAddresses[0].title : "not found" }</div>
      </div>
    </>
  );
}

export default App;
