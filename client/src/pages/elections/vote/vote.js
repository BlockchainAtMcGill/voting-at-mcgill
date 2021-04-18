import React, {useEffect, useState, Component} from 'react';
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
  Bar, ResponsiveContainer,Cell,AnswerRef
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
    const [data, setData] = useState([])
    const [state, setState] = useState(false)
    const [winner, setWinner] = useState("")
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
                var current
                [current] = await web3.eth.getAccounts()
                setCurrentUser(current);
                setHasVoted(await instance.methods.getVoted(current).call());

                const candidatesAddresses = await instance.methods.getCandidatesAddresses().call();
                setCAddresses(candidatesAddresses);
                const candidatesCount = await instance.methods.candidatesCount().call();
                var array = []

                for (var i = 0; i < candidatesCount; i++){
                    console.log(candidatesAddresses[i]);
                    var currcand=await instance.methods.get_candidate(candidatesAddresses[i]).call();
                    data.push({ name: currcand[0], value:parseInt(currcand[2]) });
                    array.push(await instance.methods.get_candidate(candidatesAddresses[i]).call());

                }
                setData(data);
                setCandidates(array);
                console.log(array)
                setCurrentVote(await instance.methods.getElection().call())
                setWinner(await instance.methods.get_Winner().call());
                console.log(currentVote)
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
          var startDate = new Date(parseInt(currentVote[4]) * 1)
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
                  <button key={1} className="ui inverted green button" onClick={leavethis}>yes</button>,
                  <button key={2} className="ui inverted red button" >no</button>]}
              />
            )
          }
    }
    function applyELection(){
      var startDate = new Date(parseInt(currentVote[4])* 1)
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
    var endVote = async () => {
        await voteInstance.methods.updateVoteStatus(2).send({
            from: currentUser
        });
        setWinner(await voteInstance.methods.get_Winner().call());
    }

    function getWinner(){
        return currentVote && winner ? <div>{"winner of vote: " +winner.aName}</div>  : <div>no winner yet</div>
    }

    /*
    <div className="content ui container">
        <div className="header clearing segment">

          {candidate.name} {VoteModal(candidate.name, candidate.candidateAddr)}:        {candidate.numVotes/currentVote.numVotes*100}%

        </div>
    </div>
    */

    function displayPer() {
          var newrow={};
          var fewrow={};
          if (candidates == ""){
              return <div  className="card" style={long}>
                          <div className="content">
                              <div className="header">
                                  No Results to Display
                              </div>
                          </div>
                      </div>

          }
          else{
                return <div  className="card" style={long}>
                            <div className="content">
                                <div className="header">
                                    Results:
                                </div>
                                <br></br>
                                <br></br>
                                {checkyboi()}
                            </div>
                        </div>
          }
    }
    // console.log('here');
    // console.log(data);



    function checkyboi(){
      var onChange = e =>{setState(e.target.checked)}
      return(
        <div class="ui center floated compact segment">
        <h1>Change your view to a {state ? "Bar Chart" : "Pie Chart"} </h1>
            <div class="ui fitted slider checkbox">
          <label>
            <input type="checkbox"
                  checked={state}
                  onChange={onChange}
                  />
          </label>
          </div>
          {chart()}
        </div>
      )
    }


    function chart(){
      if (state==true){

      return(
        <ResponsiveContainer width="100%" height={300}>
            <PieChart height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#FF0000"
                dataKey="value"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index
                }) => {
                  console.log("handling label?");
                  const RADIAN = Math.PI / 180;
                  // eslint-disable-next-line
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  // eslint-disable-next-line
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  // eslint-disable-next-line
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="FF0000"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {data[index].name} ({value})
                    </text>
                  );
                }}
              />
            </PieChart>
        </ResponsiveContainer>
      )

    }

      if(state==false){
      return(
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width ={600} height={400} data={data}>
            <XAxis datakey="name"/>
            <YAxis />
            <Tooltip/>
            <Bar dataKey="value" fill="#FF0000"/>
          </BarChart>
        </ResponsiveContainer>
      )
    }
  }

    function SimpleBarChart(){
              const fata = [
            {
              "AnswerRef": "one",
              "Text": "5 out of 50 throws",
              "Score": 0,
              "RespondentPercentage": 12,
              "Rank": 1
            },
            {
              "AnswerRef": "two",
              "Text": "25 out of 50 throws",
              "Score": 0,
              "RespondentPercentage": 32,
              "Rank": 2
            },
            {
              "AnswerRef": "three",
              "Text": "30 out of 50 throws",
              "Score": 1,
              "RespondentPercentage": 41,
              "Rank": 3
            },
            {
              "AnswerRef": "four",
              "Text": "None of the above",
              "Score": 0,
              "RespondentPercentage": 16,
              "Rank": 4
            }
        ]
      return(
              	<BarChart
                      width="100%"
                      height={260}
                      data={fata}
                      margin={{top: 0, right: 0, left: 0, bottom: 25}}>
                 <XAxis
                     dataKey="Text"
                     fontFamily="sans-serif"
                     tickSize
                     dy='25'
                 />
                 <YAxis hide/>
                 <CartesianGrid
                     vertical={false}
                     stroke="#ebf3f0"
                 />
                 <Bar
                     dataKey="RespondentPercentage"
                     barSize ={170}
                     fontFamily="sans-serif"
                     >
                      {
                          fata.map((entry, index) => (
                              <Cell fill={fata[index].AnswerRef === "three" ? '#61bf93' : '#ededed'} />
                          ))
                      }
                  </Bar>
                </BarChart>

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
        if (currentVote[3]==currentVote[3]) {
            var startDate = new Date(parseInt(currentVote[4]) * 1)
            var endDate = new Date(parseInt(currentVote[5]) * 1)
            return <>
                <div className="ui card" style={long}>
                    <div className="content">
                        <div className="header container" style= {{color: '#f00000'}}>
                            {currentVote.aTitle} type of election : {currentVote.aVoteType == "0" ? "Majority" : "Two-Thirds"}
                            <span className="floated right">{voted}</span>
                        </div>
                        <div className="meta">{startDate.toUTCString().slice(0,17)} to {endDate.toUTCString().slice(0,17)}</div>
                        <div>{getWinner()}</div>
                        <div className="ui card" style= {{width: '100%'}}>
                            <div className="description" >
                            <p>{currentVote[6]}</p>
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
                        {parseInt(currentVote[7])} Votes
                    </div>
                    {applyELection()}
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className="ui right floated inverted red button" onClick={endVote}>end vote</button>
                    <br></br>

                    {displayPer()}
                    <br></br>
                    <br></br>

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

            <h1 >{formatVote()}</h1>

            <br></br>
            <br></br>


        </>
    )

}
export default Vote;
