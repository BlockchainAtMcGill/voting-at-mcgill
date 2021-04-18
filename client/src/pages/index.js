import React, { useState, useEffect } from "react";
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import getWeb3 from "../getWeb3";
import { Header } from '../components/header';
import { Link } from '../../routes'
import 'semantic-ui-css/semantic.min.css';
// CommonJS
require("regenerator-runtime/runtime");


const styles = {
  card: {
    width: '90%',
    margin: 'auto',
    color: '#f00000',
    maxHeight: 200,
    minHeight: 200,
    cursor: "pointer",
  },
  title : {
    fontSize: 36,
    color: '#ED1B2F',
    marginLeft: 10,
    marginTop: 15,
    marginBottom:15
  },
  access:{
    position:"relative",
    height:36,
    fontSize: 16,
  }
};

function App() {
  const [web3, setWeb3] = useState('');
  const [votesAddresses, setVotesAddresses] = useState('');
  const [contract, setContract] = useState('');
  const [votes, setVotes] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [youVoted, setYouVoted] = useState([]);

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
        const [user] = await web3.eth.getAccounts();
        setCurrentUser(user);
    
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
    try {// Get the contract instance.
      const instance = new web3.eth.Contract(
        VoteContract.abi,
        address
      );
      if((await instance.methods.voteType().call()) == 0) {
        return [await instance.methods.getElection().call(), await instance.methods.getVoted(currentUser).call()];
      }
      else{
        return [await instance.methods.getPetition().call(), await instance.methods.getVoted(currentUser).call()]
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(()=> {//render votes
    var renderVotes = async () => {
        if (!votesAddresses || !currentUser){
          return;
        }
        var tempVotes  = [];
        var tempVoted = [];
        await votesAddresses.forEach(address => {
            displayInfo(address).then(voteInfo => {
              tempVotes.push(voteInfo[0]);
              tempVoted.push(voteInfo[1]);
          })
        })
        setTimeout(function(){
            setVotes(tempVotes);
            setYouVoted(tempVoted);
          }, 1000);

      }
    renderVotes();
  },[votesAddresses]);

  useEffect(()=> {
    console.log(votes);
  },[votes])

  function displayElectionsList() {
    if(web3 == ""){
      return "waiting for votes to display..."
    }
    else if(votesAddresses == ""){
      return "no votes to display"
    }
    return votes ? votes.map((vote, index) => 
          <Link className="ui button" route ={`/${vote.aTypeOfElection ? "elections" : "petitions" }/vote/${vote.aVoteAddress}`} key={index}>
            <div className="ui card" style={styles.card}>
              <div className="card">
                <span className="right floated">
                  {vote.aNumVotes}
                  <i className="user icon" style={{margin: 3}}></i>
                  {youVoted[index] ? <i className="check circle icon" style={{margin: 3}}></i>  : <i className="circle outline icon" style={{margin: 3}}></i>}
                  
                </span>

                <div className="content">
                  <div className="header" style={styles.title}>
                      {vote.aTitle} - 
                      { vote.aVoteStatus == 0 ? " starts on " + new Date(vote.aStartDate * 1).toUTCString().slice(0,17) : 
                      ( vote.aVoteStatus == 1 ? " ends on " + new Date(vote.aEndDate * 1).toUTCString().slice(0,17):
                       "archived: " + new Date(vote.aEndDate * 1).toUTCString().slice(0,17)
                      )
                      }
                  </div>
                </div>
                <div className="content">

                  <span className="right floated">
                    <span style={styles.access} >access vote</span>
                    <i className="angle right icon huge"></i>
                  </span>

                  <div className="ui sub header" style={{marginLeft:10}}>
                    <i className="checkmark icon small"></i>  
                    {vote.aTypeOfElection ?  "Election" : "Petition" }  | typeof vote : {vote.aVoteType == "0" ? "Majority" : "Two-Thirds"}
                  </div>
                  <div className="ui feed" style={{marginLeft:10}}>{ vote.aDescription }</div>
                </div>
              </div>
            </div>
          </Link>
      ) : <div> no votes found </div>
    }

  return( 
    <>
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="App">
        <div>{ displayElectionsList() }</div>
      </div>
    </>
  );
}

export default App;
