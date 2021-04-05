import React, { useState, useEffect } from "react";
import VoteFactoryContract from "../contracts/VoteFactory.json";
import getWeb3 from "../getWeb3";
import { Form} from "semantic-ui-react";
import { Header } from '../components/header';
import 'semantic-ui-css/semantic.min.css';

require("regenerator-runtime/runtime");

// Card UI details
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

// Initialize Join Group page
const JoinGroup = () => {
  const [web3, setWeb3] = useState('');
  const [groupsID, setGroupsID] = useState('');
  const [contract, setContract] = useState('');
  const [renderedGroups, renderGroups] = useState([]);
  const [joiningGroup, setJoiningGroup] = useState(false);

  var user;

  // Setup Web3 on the current page
  useEffect(() => {
    async function initWeb3() {
      console.log('initializing web3');
      const web3Instance = await getWeb3();
      setWeb3(web3Instance)
    }
    initWeb3();
  },[]);

  // Initializeing VoteFactory contract
  useEffect(() => {
    async function setup() {
      if(web3 == "") {
        console.log('unable to get factory')
        return;
      }
      try {
        [user] = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = VoteFactoryContract.networks[networkId];
        const instance = new web3.eth.Contract(
          VoteFactoryContract.abi,
          deployedNetwork && deployedNetwork.address,
        );
        setContract(instance);
    
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    }
      setup();
  },[web3]);

  // Return all group IDs as an array
  useEffect(()=> {
    var displayVotes = async () => {
      if(contract == '') {
        return;
      }
      const response = await contract.methods.getExistingGroups().call();
      const joinedGroups = await contract.methods.getUserAllGroups().call();
      const temp = [];
      for (var i = 0; i < response.length; i++) {
        for (var j = 0; j < joinedGroups.length; j++) {
          if (response[i] == joinedGroups[j]) {
            // GROUPS TO NOT ADD
          }
        }
      }
      console.log(temp);
      setGroupsID(temp);
    };
    displayVotes();
  },[contract]);
  


  var displayInfo = async (identification) => { 
    if(groupsID == '') {
      return;
    }
    try {
      return await contract.methods.getGroup(identification).call();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=> {//render votes
    var renderVotes = async () => {
        if (!groupsID) {
          return;
        }
        var temp = [];
        await groupsID.forEach(identification => {
            displayInfo(identification).then(newGroup => {
              // Check if user has joined the group
              temp.push(newGroup);
          });
        });
        setTimeout(function(){
          renderGroups(temp);
        }, 1000);
      }
    renderVotes();
  },[groupsID]);

  useEffect(()=> {
    if(renderedGroups) {
      console.log(renderedGroups);
    }
  },[renderedGroups]);

  var onSubmit = async (event) => {
    event.preventDefault();
    
    // Calls VoteFactory Contract to create a new instance of Group
    var joinGroup = async () => {
      
        setJoiningGroup(true);
        if(contract == ''){
            return;
        }
        // Calls the method createGroup from VoteFactory.sol
        await contract.methods.joinGroup(groupID).send({
            from: user
        });
        setJoiningGroup(false);
        setLoad(!Load);
    };

    var displayJoin = async () => {
      const summary = await contract.methods.getUserGroup(groupID).call();
      console.log(summary);
    };
    await joinGroup();
    await displayJoin();
  };
  
  function displayGroupList() {
    if (web3 == "") {
      return "waiting for votes to display...";
    }

    else if (groupsID == "") {
      return "no groups to display";
    }

    return renderedGroups ? renderedGroups.map((group, index) =>
    <div className="ui card" style={styles.card}>
      <div className="card">
        <span className="right floated" key={index}>
          {group[3]}
          <i className="user icon" style={{margin: 3}}></i>
          <i className="circle outline icon" style={{margin: 3}}></i>
        </span>

        <div className="content">
          <div className="header" style={styles.title} key={index}>
              {group[0]}
          </div>
        </div>
        <div className="content">

          <span className="right floated">
            <Form.Button onSubmit={onSubmit}>Join Group</Form.Button>
          </span>

          <div className="ui sub header" style={{marginLeft:10}}>
            <i className="checkmark icon small"></i>  
            group 
          </div>
          <div className="ui feed" style={{marginLeft:10}} key={index}>{ group[1] }</div>
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