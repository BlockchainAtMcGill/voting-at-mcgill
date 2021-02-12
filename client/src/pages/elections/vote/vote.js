import React, {useEffect, useState} from 'react';
import { Header } from '../../../components/header'
import getWeb3 from "../../../getWeb3";
import VoteContract from "../../../contracts/Vote.json";
import 'semantic-ui-css/semantic.min.css';
import { Link } from '../../../../routes'
const Vote = () => {
    var web3Instance;
    const [web3, setWeb3] = useState('');
    const [voteAddress, setVoteAddress] = useState('')
    const [currentVote, setCurrentVote] = useState('')
    const [candidates, setCandidates ] = useState('')
    useEffect(() => {
        async function initWeb3() {
            web3Instance = await getWeb3();
            setWeb3(web3Instance);
        }
        var getElectionAddress = async() =>{
            const url=window.location.href;
            const pos=url.indexOf('vote')+5;
            setVoteAddress(url.slice(pos));
            console.log(voteAddress);
          };
        initWeb3();
        getElectionAddress();
    },[]);

    useEffect(() => {
        async function setupVote() {
            if(web3 == '') {
                return;
            }
            try {
                // Get the contract instance.
                const instance = await new web3.eth.Contract(
                    VoteContract.abi,
                    voteAddress
                );
                setCurrentVote(await instance.methods.currentElection().call());
                // Set web3, accounts, and contract to the state, and then proceed with an
            } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
            }
        }
        setupVote();
    },[web3])
    useEffect(()=>{console.log(currentVote)},[currentVote])

    const long = {
        width: '90%',
        texAlign:'center',
        margin: 'auto'
    }
    function formatVote() {
        if (currentVote){
            return <>
                <div className="ui card" style={long}>
                    <div className="content">
                        <div className="header" style= {{color: '#f00000'}}>{currentVote.title}</div>
                        <div className="meta">{Date(currentVote.startDate).slice(0,-42)} to {Date(currentVote.endDate).slice(0,-42) }</div>
                        <div className="ui card" style= {{width: '100%'}}>
                            <div className="description" >
                            <p>{currentVote.description}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign:'center', margin:'50px', color: '#f00000'}}>
                    <i className="user icon large"></i>
                    <i className="user icon large"></i>
                    <i className="user icon large"></i>
                    <Link route ={`/elections/apply/${voteAddress}`}><i className="plus icon large"></i></Link>
                    </div>
                    <div>            
                </div>
                    <div className="extra content" style= {{color: '#f00000'}}>
                        <i className="check icon"></i>
                        {currentVote.numVotes} Votes
                    </div>
                </div>
            </>
        }
        else{
            return<div> loading vote ...</div>
        }
    }

    return (
        <>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            <h1>{formatVote()}</h1>
        </>
    )
}
export default Vote;