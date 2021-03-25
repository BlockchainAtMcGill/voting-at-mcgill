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
  const [renderedAddresses, renderAddresses] = useState([]);
  const [allVotes, getAllVotes] = useState([]);

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
        var temp  = []
        await votesAddresses.forEach(address => {
            displayInfo(address).then(newAddress => {
              temp.push(newAddress);
              // renderAddresses([...renderedAddresses, newAddress])
          })
        })
        setTimeout(function(){
            renderAddresses(temp)
          }, 100);

      }
    renderVotes();
  },[votesAddresses]);

  useEffect(()=> {
    if(renderedAddresses) {
      console.log(renderedAddresses)
    }
  },[renderedAddresses])

  function renderDate(aStartDate, aEndDate) {
    if(startDate){
      console.log("start date is " + startDate)
      var startDate = new Date(startDate * 1);
      var endDate = new Date(endDate * 1);
      var currentDate= new Date();
      if(currentDate < startDate) {
        return "starts on " + startDate.toUTCString().slice(0,17);
        }
      else if(currentDate >= startDate && currentDate < endDate){
        return "ends on " + endDate.toUTCString().slice(0,17);
      }
      else{
        return "archived: " + endDate.toUTCString().slice(0,17);
      }
    }
  }
  function displayVoteList() {
    if(web3 == ""){
      return "waiting for votes to display..."
    }
    else if(votesAddresses == ""){
      return "no votes to display"
    }

    return renderedAddresses ? renderedAddresses.map((vote, index) => 
          <Link className="ui button" route ={`/elections/vote/${votesAddresses[index]}`} key={index}>
            <div className="ui card" style={styles.card}>
              <div className="card">
                <span className="right floated">
                  {vote.numVotes}
                  <i className="user icon" style={{margin: 3}}></i>
                  <i className="circle outline icon" style={{margin: 3}}></i>
                </span>

                <div className="content">
                  <div className="header" style={styles.title}>
                      {vote.title} - 
                      { new Date() < new Date(vote.startDate * 1) ? "starts on " + new Date(vote.startDate * 1).toUTCString().slice(0,17) : 
                      (new Date() >= new Date(vote.startDate * 1) && new Date() <= new Date(vote.endDate * 1) ? "ends on " + new Date(vote.endDate * 1).toUTCString().slice(0,17):
                       "archived: " + new Date(vote.endDate * 1).toUTCString().slice(0,17)
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
                    election 
                  </div>
                  <div className="ui feed" style={{marginLeft:10}}>{ vote.description }</div>
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
        <div>{ displayVoteList() }</div>
      </div>
    </>
  );
}

export default App;
