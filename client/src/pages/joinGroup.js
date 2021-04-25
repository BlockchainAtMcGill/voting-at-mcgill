import React, { useState, useEffect } from "react";
import VoteFactoryContract from "../contracts/VoteFactory.json";
import getWeb3 from "../getWeb3";
import { Form} from "semantic-ui-react";
import { Header } from '../components/header';
import 'semantic-ui-css/semantic.min.css';
import Router from "next/router";

require("regenerator-runtime/runtime");

// Style UI Cards
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

/**
 * Join Group Page - a Page where user can see all existing group and/or join a new group
 * DISCLAMER - majority of the code is based on index.js written by Simon Wang
 * 
 * @author Brandon Wong
 * @author Simon Wang
 */
const JoinGroup = () => {
  // Initialize necessary values for the Join Group Page

  const [web3, setWeb3] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [groupsID, setGroupsID] = useState('');
  const [contract, setContract] = useState('');
  const [renderedGroups, setRenderGroups] = useState([]);
  const [groupJoined, setGroupJoined] = useState([]);

  // Setup Web3
  useEffect(() => {
    async function initWeb3() {
      console.log('initializing web3');
      const web3Instance = await getWeb3();
      setWeb3(web3Instance)
    }
    initWeb3();
  },[]);

  // Initializeing VoteFactory contract and the current user
  useEffect(() => {
    async function setup() {
      if(web3 == "") {
        console.log('unable to get factory')
        return;
      }
      try {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = VoteFactoryContract.networks[networkId];
        const instance = new web3.eth.Contract(
          VoteFactoryContract.abi,
          deployedNetwork && deployedNetwork.address,
        );
        setContract(instance);

        const [user] = await web3.eth.getAccounts();
        setCurrentUser(user);
    
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    }
    setup();
  },[web3]);

  // Initialize all existing groups
  useEffect(()=> {
    var displayGroups = async () => {
      if(contract == '') {
        return;
      }

      try {
        const response = await contract.methods.getExistingGroups().call();
        setGroupsID(response);
      } catch (error) {
        alert(
          `Failed to initialize all existing groups.`
        );
      }
    };
    displayGroups();
  },[contract]);
  
  // Initialize the content of each group and verify if the user is part of the current group
  var displayInfo = async (identification) => { 
    if(groupsID == '') {
      return;
    }
    try {

      return [await contract.methods.getGroup(identification).call(), await contract.methods.isUserGroup(identification).call({
        from: currentUser
      })];
    } catch (error) {
      alert(
        `Failed to initialize the info of each group.`
      );
    }
  };

  // Render an array of all existing groups and an array that corresponds to whether they have joined
  useEffect(()=> {
    var renderGroups = async () => {
        if (!groupsID || !currentUser) {
          return;
        }

        try {
          var tempGroups = [];
          var tempJoined = [];
            await groupsID.forEach(identification => {
              displayInfo(identification).then(newGroup => {
                // Check if user has joined the group
                tempGroups.push(newGroup[0]);
                tempJoined.push(newGroup[1]);
              });
            });
            setTimeout(function(){
              setRenderGroups(tempGroups);
              setGroupJoined(tempJoined);

            }, 1000);
        } catch (error) {
          alert(
            `Failed to display groups.`
          );
        }
      }
    renderGroups();
  },[groupsID]);

  // Function that adds the current user to the group
  var onClick = async(groupID) => {
    console.log(groupID);
    if (contract == '') {
      return;
    }

    try {
      await contract.methods.registerGroup(groupID).send({
        from: currentUser
      });
      window.location.reload();
    } catch (error) {
      alert(
        `Failed to join group.`
      );
    }
  }

  // Display in the console the two arrays above to verify its consistency (testing purposes)
  useEffect(()=> {
    if(renderedGroups) {
      console.log(renderedGroups);
      console.log(groupJoined);
    }
  },[renderedGroups]);

  // Displays the list of all exisiting groups as UI Cards
  function displayGroupList() {
    if (web3 == "") {
      return "waiting for votes to display...";
    }

    else if (groupsID == "") {
      return "no groups to display";
    }

    return renderedGroups ? renderedGroups.map((group, index) =>
    <div className="ui card" style={styles.card} key={index}>
      <div className="card">
        <span className="right floated">
          {group[3]}
          <i className="user icon" style={{margin: 3}}></i>
          {groupJoined[index] ? <i className="check circle icon" style={{margin: 3}}></i>  : <i className="circle outline icon" style={{margin: 3}}></i>}
        </span>
        <div className="content">
          <div className="header" style={styles.title}>
              {group[0]}
          </div>
        </div>
        <div className="content">
          <span className="right floated">
          {groupJoined[index] ? <span></span> : <span className="float right" style={styles.access}>join group</span>}
          {groupJoined[index] ? <i></i> : <i className="angle right icon huge" type="button" onClick={() => onClick(index)}></i>}
          </span>
          <div className="ui sub header" style={{marginLeft:10}}>
            <i className="checkmark icon small"></i>
          </div>
          <div className="ui feed" style={{marginLeft:10}}>{ group[1] }</div>
        </div>
      </div>
    </div>
    ) : <div> no groups found </div>
  }

  return( 
    <>
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="App">
        <div>{ displayGroupList() }</div>
      </div>
    </>
  ); 
};

export default JoinGroup;