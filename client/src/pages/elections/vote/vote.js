import React, {useEffect, useState} from 'react';
import { Header } from '../../../components/header'
import getWeb3 from "../../../getWeb3";
import VoteContract from "../../../contracts/Vote.json";
import 'semantic-ui-css/semantic.min.css';
import { Link } from '../../../../routes';
import { Modal, Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

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
    const [load, setLoad] = useState(true)
    const [cAddresses, setCAddresses] = useState([])

    useEffect(() => {
        async function initWeb3() {
            web3Instance = await getWeb3();
            setWeb3(web3Instance);
        }
        var getElectionAddress = async() =>{
            const url=window.location.href;
            const pos=url.indexOf('vote')+5;
            setVoteAddress(url.slice(pos));
          };
        initWeb3();
        getElectionAddress();
    },[load]);

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

                const candidatesAddresses = await instance.methods.getCandidatesAddresses().call();
                setCAddresses(candidatesAddresses);
                const candidatesCount = await instance.methods.candidatesCount().call();
                var array = []

                
                for (var i = 0; i < candidatesCount; i++){
                    console.log(candidatesAddresses[i]);
                    array.push(await instance.methods.get_candidate(candidatesAddresses[i]).call());
                }
                setCandidates(array);
                console.log(array)
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
                setLoad(!load)
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
          var startDate = new Date(currentVote.startDate * 1)
          var currDate= new Date()
          var leavethis = async () => {
              if(voteInstance){
                setVoting(true)
                await voteInstance.methods.leaveElection().send({
                    from: currentUser
                })
                setVoting(false)
                setLoad(!load)
              }
          }
          if(currDate<startDate){
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
    }
    function applyELection(){
      var startDate = new Date(currentVote.startDate * 1)
      var currDate= new Date()
    //   if(currDate<startDate){
        return(
          <Link route ={`/elections/apply/${voteAddress}`}>
              <button className="extra content ui inverted red button" >
                  <div><i className="plus icon"></i> Apply as Candidate</div>
              </button>
          </Link>
        )
    //   }
    }
    const data=[];
    /*
    <div className="content ui container">
        <div className="header clearing segment">

          {candidate.name} {VoteModal(candidate.name, candidate.candidateAddr)}:        {candidate.numVotes/currentVote.numVotes*100}%

        </div>
    </div>
    */
    function displayPer() {
          var newrow={};
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

              <div style= {{color: '#FFFFFF'}}>
              {
              newrow={},
              newrow[candidate.name]=candidate.numVotes,
              data.push(newrow)}
              </div>
          </div>

        )
    }
    function chart(){
      return(
        <div style={{textAlign:"center"}}>
            <PieChart width={400} height={400}>
                     <Pie
                       dataKey="users"
                       isAnimationActive={false}
                       data={data}
                       cx={200}
                       cy={200}
                       outerRadius={80}
                       fill="#8884d8"
                       label
                     />
                     <Tooltip />
            </PieChart>
        </div>
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
                    {candidate[0]} {VoteModal(candidate[0], cAddresses[index])} 
                </div>
                <div className="header clearing segment">
                    {leaveElection()}
                </div>
                <div className="meta">
                    {cAddresses[index]}
                </div>
                <div className="description">
                    {candidate[1]}
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
            var startDate = new Date(currentVote.startDate * 1)
            var endDate = new Date(currentVote.endDate * 1)
            return <>
                <div className="ui card" style={long}>
                    <div className="content">
                        <div className="header container" style= {{color: '#f00000'}}>
                            {currentVote.title}
                            <span className="floated right">{voted}</span>
                        </div>
                        <div className="meta">{startDate.toUTCString().slice(0,17)} to {endDate.toUTCString().slice(0,17)}</div>
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
                    {applyELection()}
                    <br></br>
                    <br></br>
                    <br></br>
                    {displayPer()}
                    {chart()}
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
            <br></br>
            <br></br>


        </>
    )

}
export default Vote;
