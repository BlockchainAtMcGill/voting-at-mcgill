import React, {useEffect, useState} from 'react';
import { Header } from '../../../components/header'
import getWeb3 from "../../../getWeb3";
import VoteContract from "../../../contracts/Vote.json";
import { Form } from "semantic-ui-react";
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
  Bar, ResponsiveContainer
} from "recharts";

const Vote = () => {

    var web3Instance;
    const [web3, setWeb3] = useState('');
    const [voteAddress, setVoteAddress] = useState('')
    const [currentVote, setCurrentVote] = useState('')
    const [voteInstance, setVoteInstance] = useState('')
    const [currentUser, setCurrentUser ] = useState('');
    const [voting, setVoting ] = useState(false)
    const [hasVoted, setHasVoted] = useState(false)
    const [load, setLoad] = useState(true)
    const [cAddresses, setCAddresses] = useState([])
    const [signerName, setName] = useState('');

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
                setCurrentUser(current)
                setHasVoted(await instance.methods.getVoted(current).call())


                setCurrentVote(await instance.methods.getPetition().call())
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

    function VoteModal() {
        var voteFor = async () => {
            if(voteInstance){
                setVoting(true)
                await voteInstance.methods.signThis().send({
                    from: currentUser
                })
                setVoting(false)
                setLoad(!load)
            }
        }
        if(!hasVoted){
            return (
                <Modal
                    trigger={<button className="extra content ui inverted red button" >
                        <div><i className="plus icon"></i> Sign This Petition</div>
                    </button>}
                    header="Sign!"
                    content={"are you sure you want to sign this petition"}
                    actions={[
                    <button key={1} className="ui inverted green button" onClick={voteFor}>yes</button>,
                    <button key={2} className="ui inverted red button" >no</button>]}
                />
            )
        }
        else return (<></>)
    }

    const data=[];


    var voted;
    if(hasVoted) {
        voted = <span><i className="floated check icon right"></i> You have already Voted</span>;
    } else {
        voted = <></>
    }
    var voted;
    if(hasVoted) {
        voted = <span><i className="floated check icon right"></i> Thank you for signing!</span>;
    } else {
        voted = <></>
    }

    function endVoteButton() {
        return currentVote.aVoteStatus == "1" ? <button className="ui right floated inverted red button" onClick={endVote}>end vote</button> : <></>
    }
    var endVote = async () => {
        await voteInstance.methods.updateVoteStatus(2).send({
            from: currentUser
        });
    }

    function formatVote() {
        if (currentVote[3]==currentVote[3]){
            var startDate = new Date(parseInt(currentVote[4]) * 1)
            var endDate = new Date(parseInt(currentVote[5]) * 1)
            return <>
                <div className="ui card" style={long}>
                    <div className="content">
                        <div className="header container" style= {{color: '#f00000'}}>
                            {currentVote[3]}
                            - 
                            { currentVote.aVoteStatus == 0 ? " starts on " + new Date(currentVote.aStartDate * 1).toUTCString().slice(0,17) : 
                            ( currentVote.aVoteStatus == 1 ? " ends on " + new Date(currentVote.aEndDate * 1).toUTCString().slice(0,17):
                            " archived: " + new Date(currentVote.aEndDate * 1).toUTCString().slice(0,17)
                            )}
                            <span className="floated right">{voted}</span>
                        </div>
                        <div className="meta">{startDate.toUTCString().slice(0,17)} to {endDate.toUTCString().slice(0,17)}</div>
                        <div className="ui card" style= {{width: '100%'}}>
                            <div className="description" >
                            <p>{currentVote[6]}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign:'center', margin:'50px', color: '#f00000'}}>
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
                        {parseInt(currentVote[7])} People Signed This Petition
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                      {VoteModal()}
                    <span className="floated right">{voted}</span>
                    <br></br>
                    {endVoteButton()}
                    <h2 style={long}></h2>
                    <br></br>

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
