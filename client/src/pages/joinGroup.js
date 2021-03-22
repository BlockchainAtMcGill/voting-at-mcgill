import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import VoteFactoryContract from "../contracts/VoteFactory.json";
import VoteContract from "../contracts/Vote.json";
import getWeb3 from "../getWeb3";
import { Header } from '../components/header';
import { Link } from '../../routes'
import 'semantic-ui-css/semantic.min.css';

require("regenerator-runtime/runtime");

const useStyles = makeStyles({
  card: {
    width:'80%'
  }
});

const JoinGroup = () => {
    var web3Instance;
    var factoryContract;

    const [web3, setWeb3] = useState('');
    const [Load, setLoad] = useState(true);
    const [contract, setContract] = useState('');
    const [groupID, setGroupID] = useState('');
    const [groupList, setGroups] = useState([]);
    const [members, getMembers] = useState([]);

    // Initialize Web3
    useEffect(() => {

        async function initWeb3() {
            web3Instance = await getWeb3();
            setWeb3(web3Instance);
        }
        initWeb3();
    });

    // Initialize VoteFactory Contract
    useEffect(() => {
        async function setupVoteFactory() {
            if (web3 == '') {
                console.log('unable to get factory');
                return;
            }

            try {
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = VoteFactoryContract.networks[networkId];
                const instance = new web3.eth.Contract(
                    VoteFactoryContract.abi,
                    deployedNetwork && deployedNetwork.address
                );
                factoryContract = instance;
            } catch (error) {
                alert(`Failed to load web3, accounts, or contract. Check console for details.`)
                console.error(error);
            }
        }

        setupVoteFactory();
    }, [web3]);

    // Display all Groups
    useEffect(() => {
        var displayGroups = async () => {
            if (contract == '') {
                return;
            }
            const response = await contract.methods.getExistingGroups().call();
            setGroups(response);
        };

        displayGroups();
    }, [contract]);

    // Display the information of a Group
    useEffect(() => {
        var displayInfo = async (groupID) => {
            if (groupList == '') {
                return;
            }

            try {
                const instance = new web3.eth.Contract(
                    VoteFactoryContract.abi, 
                    groupID
                );

                return (await instance.methods.getGroup(groupID).call());
            } catch (error) {
                console.error(error);
            }
        };

        var renderGroups = async () => {
            if (groupList == '') {
                return;
            }

            var temp = [];
            await groupList.forEach(groupID => {
                displayInfo(groupID).then(newGroup => {
                    temp.push(newGroup);
                });
            });

            setGroups(temp);
        }

        renderGroups();
    }, [groupList]);

    return <a>Hello World</a>;
//     return groupList ? groupList.map((group) => 
//         //<Link className="ui button" route ={`/elections/vote/${vote}`} key={index}>
//         <div className="ui link card" style={{width:"80%", color: '#f00000'}}>
//         <div className="card">
//         <div className="content">
//             <div className="header">Group</div>
//             <div className="meta">
//                 <a>{group.groupName}</a>
//             </div>
//             <div className="description">
//                 {group.description}
//             </div>
//         </div>
//             <div className="extra content">
//                 <span>
//                     <i className="user icon"></i>
//                     {group.getMembers.size()}
//                 </span>
//             </div>
//         </div>
//         </div>
//   ) : <></>
};

export default JoinGroup;