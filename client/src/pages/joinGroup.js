import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import getWeb3 from "../getWeb3";
import 'semantic-ui-css/semantic.min.css';

require("regenerator-runtime/runtime");

const useStyles = makeStyles({
  card: {
    width:'80%'
  }
});

const JoinGroup = () => {
    const [web3, setWeb3] = useState('');
  const [groupsID, setGroupsID] = useState('');
  const [contract, setContract] = useState('');
  const [renderedGroups, renderGroups] = useState([]);

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

  var convertStrArrayToIntArray = function(str, sep) {
	sep = typeof sep !== 'undefined' ? sep : " ";
	return str.split(sep).map(function(val) {
		return parseInt(val, 10);
	});
}

  useEffect(()=> {//display available votes addresses
    var displayVotes = async () => {
      if(contract == ''){
        return;
      }
      const response = await contract.methods.getExistingGroups().call();
      // Update state with the result.
      const temp = [];
      for (var i = 0; i < response.length; i++) {
        temp[i] = parseInt(response[i]);
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
        await groupsID.forEach(identification => {
            displayInfo(identification).then(newGroup => {
              renderGroups([...renderedGroups, newGroup]);
          });
        });
      }
    renderVotes();
  },[groupsID]);

  useEffect(()=> {
    if(renderedGroups != []) {
      console.log(renderedGroups);
    }
  },[renderedGroups]);

    //return <a>Hello World</a>;
    return renderedGroups ? renderedGroups.map((group, index) => 
        //<Link className="ui button" route ={`/elections/vote/${vote}`} key={index}>
        <li key={index}>
          {group[1]}
        </li>
        // <div className="ui link card" style={{width:"80%", color: '#f00000'}}>
        // <div className="card">
        // <div className="content">
        //     <div className="header">{group[0][0]}</div>
        //     <div className="description">hello</div>
        // </div>
        // </div>
        // </div>
  ) : <></>
};

export default JoinGroup;