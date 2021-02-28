pragma solidity ^0.7.4;
//"SPDX-License-Identifier: UNLICENSED"

contract Vote{
    //admin address
    address public manager;
    uint public candidatesCount;

    struct user{
        string name;
        string email;
        string password;
        address userAddress;
        address[] running;
        address[] createdElection;
        address[] createdPetition;
        string userType;
    }

    struct candidate {
        address candidateAddr;
        uint numVotes;
        address[] voters;
        string name;
        string description;
    }

    struct election {
        string title;
        uint startDate;
        uint endDate;
        string description;
        //think about mapping?
        uint numVotes;
        string typeOfElection;
        mapping(address => bool) voters ; //see if a voter has voted
    }
    struct petition{
        string title;
        uint startDate;
        uint endDate;
        string description;
        uint numSigned;
        mapping(address=>bool) signed; //see if a user has signed
    }
    uint typeOfVote; //0 for election and 1 for petition
    // mapping(uint => election) public elections;
    mapping(address => candidate) public candidates; //maps a candidate's address to the candidate
    candidate[] public candidateArray;
    address[] public candidatesAddresses;//should replace candidateArray
    election public currentElection;
    petition public currentPetition;

    constructor (address managerOfVote, uint typeOf){   //how does one become an admin?
        // constructor
        manager = managerOfVote;
        typeOfVote = (0 == typeOf) ? 0 : 1;
    }

    function editElection (string memory title, uint256 startDate, uint256 endDate, string memory description, string memory typeOfElection)
    public restricted typeElection {
        election storage e = currentElection;
        e.title = title;
        e.startDate = startDate;
        e.endDate = endDate;
        e.description = description;
        e.typeOfElection = typeOfElection;
    }

    function editPetition (string memory title, uint256 startDate, uint256 endDate, string memory description)
    public restricted typePetition {
        petition storage p = currentPetition;
        p.title = title;
        p.startDate = startDate;
        p.endDate = endDate;
        p.description = description;
    }
 //vote for a candidate
    function voteFor(address candidateAddress) public typeElection{
        if(currentElection.voters[msg.sender] == false){
            if(candidates[candidateAddress].candidateAddr != address(0)){
                currentElection.voters[msg.sender]  = true;
                currentElection.numVotes++; 
                (candidates[candidateAddress]).numVotes++;
                (candidates[candidateAddress]).voters.push(msg.sender);
            }
        }
    }
    //enter as a candidate
    function enterElection(string memory name, string memory description, uint256 current_date)
    public typeElection {
        //Check if the registration is before the required deadline
        require(current_date > currentElection.startDate && current_date < currentElection.endDate);
        //enter candidate
        candidate storage currentCandidate = candidates[msg.sender];
        currentCandidate.name = name;
        currentCandidate.description = description;
        currentCandidate.candidateAddr= msg.sender;
        currentCandidate.voters;
        candidateArray.push(currentCandidate);
        candidatesCount++;
        //candidateAddrs.push(msg.sender);
    }

    //leave the election
    function leaveElection(uint256 current_date)
    public typeElection {
        //Check if the registration is before the required deadline
        require(current_date > currentElection.startDate && current_date <= currentElection.endDate);
        //remove candidate
        candidate storage currentCandidate = candidates[msg.sender];
        currentCandidate.name = "";
        currentCandidate.description = "";
        //currentCandidate.candidateAddr= ;
        //remove from array
        delete candidates[msg.sender];
        for (uint i = 0; i<candidateArray.length; i++){
            if(msg.sender==candidateArray[i].candidateAddr){
                candidateArray[i]=candidateArray[candidateArray.length-1];
                candidateArray.pop();
                break;
            }
        }
        candidatesCount--;
    }

    //GETTERS

    //get election
    function get_election() public view typeElection returns (string memory,uint,uint,string memory,uint, string memory) {
        return (currentElection.title, currentElection.startDate, currentElection.endDate, currentElection.description, currentElection.numVotes, currentElection.typeOfElection);
    }
    //get petition
    function get_petition() public view typePetition returns (string memory,uint,uint,string memory,uint){
        return (currentPetition.title, currentPetition.startDate, currentPetition.endDate, currentPetition.description, currentPetition.numSigned);
    }
    function get_candidates(address candaddr) public view typeElection returns (string memory, string memory) {
        return(candidates[candaddr].name, candidates[candaddr].description);
    }
    function getCandidateVoters(address candAddr) public view typeElection returns (address[] memory) {
        return((candidates[candAddr]).voters);
    }
    function getElectionVoter(address voterAddr) public view typeElection returns (bool) {
        return ((currentElection.voters)[voterAddr]);
    }           
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    modifier typeElection() {
        require(typeOfVote == 0);
        _;
    }
    modifier typePetition() {
        require(typeOfVote == 1);
        _;
    }

}
