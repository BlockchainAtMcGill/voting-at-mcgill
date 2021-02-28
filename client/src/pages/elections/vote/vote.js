import React, {useEffect, useState} from 'react';
import { Header } from '../../../components/header'
import getWeb3 from "../../../getWeb3";
import VoteContract from "../../../contracts/Vote.json";
import 'semantic-ui-css/semantic.min.css';
import { Link } from '../../../../routes';
import { Modal, Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
const Vote = () => {
    var web3Instance;
    const [web3, setWeb3] = useState('');
    const [voteAddress, setVoteAddress] = useState('')
    const [currentVote, setCurrentVote] = useState('')
    const [voteInstance, setVoteInstance] = useState('')
    const [candidates, setCandidates ] = useState('');
    const [currentUser, setCurrentUser ] = useState('');
    const [voting, setVoting ] = useState(false)
    const [hasVoted, setHasVoted] = useState(false)
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
                setVoteInstance(instance);
                setCurrentVote(await instance.methods.currentElection().call());
                var current
                [current] = await web3.eth.getAccounts()
                setCurrentUser(current)
                setHasVoted(await instance.methods.getElectionVoter(current).call())
                const candidatesCount = await instance.methods.candidatesCount().call();
                var array = []
                for (var i = 0; i < candidatesCount; i++){
                    array.push(await instance.methods.candidateArray(i).call())
                }
                setCandidates(array);
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

    const long = {
        width: '90%',
        texAlign:'center',
        margin: 'auto',
        color: '#f00000',
    }

    function VoteModal(name,address) {
        var voteFor = async () => {
            if(voteInstance){
                setVoting(true)
                await voteInstance.methods.voteFor(address).send({
                    from: currentUser
                })
                setVoting(false)
                location.reload()
            }
        }
        if(!hasVoted){
            return (
                <Modal
                    trigger={<button className="ui right floated inverted red button">Vote</button>}
                    header="Vote!"
                    content={"are you sure you want to vote for "+ name+" ?"}
                    actions={[
                    <button key={1} className="ui inverted green button" onClick={voteFor}>yes</button>,
                    <button key={2} className="ui inverted red button" >no</button>]}
                />
            )
        }
        else return (<></>)
    }
    function  leaveElection(){
          var leavethis = async () => {
              if(voteInstance){
                  await voteInstance.methods.leaveElection(0).send({
                      from: currentUser
                  })
                  location.reload()
              }
          }
          return (
            <Modal
                trigger={<button className="ui right floated inverted red button">Leave Election</button>}
                header="Leave Election"
                content={"are you sure you want to no longer be a candidate"}
                actions={[
                <button key={1} className="ui inverted green button"onClick={leavethis}>yes</button>,
                <button key={2} className="ui inverted red button" >no</button>]}
            />
        )
    }
    function displayCandidates() {
        if (candidates == ""){
            return <div  className="card" style={long}>
                        <div className="content">
                            <div className="header">
                                no candidates yet
                            </div>
                        </div>
                    </div>
        }

        return candidates.map((candidate,index) =>
        <div className="card"  style={long} key={index}>
            <div className="content ui container">
                <div className="header clearing segment">
                    {candidate.name} {VoteModal(candidate.name, candidate.candidateAddr)}
                </div>
                <div className="header clearing segment">
                    {leaveElection()}
                </div>
                <div className="meta">
                    {candidate.candidateAddr}
                </div>
                <div className="description">
                    {candidate.description}
                </div>

            </div>
        </div>

        )
    }
    var voted;
    if(hasVoted) {
        voted = <span><i className="floated check icon right"></i> You have already Voted</span>;
    } else {
        voted = <></>
    }

    function formatVote() {
        if (currentVote){
            return <>
                <div className="ui card" style={long}>
                    <div className="content">
                        <div className="header container" style= {{color: '#f00000'}}>
                            {currentVote.title}
                            <span className="floated right">{voted}</span>
                        </div>
                        <div className="meta">{Date(currentVote.startDate).slice(0,-42)} to {Date(currentVote.endDate).slice(0,-42) }</div>
                        <div className="ui card" style= {{width: '100%'}}>
                            <div className="description" >
                            <p>{currentVote.description}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign:'center', margin:'50px', color: '#f00000'}}>
                    <div className ="ui cards">{displayCandidates()}</div>
                    <br></br>
                    <Loader
                        active={voting}
                        inline='centered'
                    />
                    </div>
                    <div>
                </div>

                    <div className="extra content" style= {{color: '#f00000'}}>
                        <i className="check icon"></i>
                        {currentVote.numVotes} Votes
                    </div>
                    <Link route ={`/elections/apply/${voteAddress}`}>
                        <button className="extra content ui inverted red button" >
                            <div><i className="plus icon"></i> Apply as Candidate</div>
                        </button>
                    </Link>

                </div>
            </>
        }
        else{
            return <div> loading vote ...</div>
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
