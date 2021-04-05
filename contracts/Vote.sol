pragma solidity ^0.7.4;
//"SPDX-License-Identifier: UNLICENSED"

contract Vote{
    //admin address
    address public manager;
    uint public candidatesCount;
    uint public typeOfVote; //0 for election and 1 for petition
    string public state; // pre, during, and post
    mapping(address=>bool) voted; //see if a user has signed

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
    }
    struct petition{
        string title;
        uint startDate;
        uint endDate;
        string description;
        uint numSigned;
    }
    // mapping(uint => election) public elections;
    mapping(address => candidate) public candidates; //maps a candidate's address to the candidate
    // candidate[] public candidateArray;// redundent but necessary
    address[] public candidatesAddresses;//should replace candidateArray
    election public currentElection;
    petition public currentPetition;

    constructor (address managerOfVote, uint typeOf){   //how does one become an admin?
        // constructor
        manager = managerOfVote;
        typeOfVote = typeOf;
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
        //needs to be between start end end
        if(voted[msg.sender] == false){
            if(candidates[candidateAddress].candidateAddr != address(0)){
                voted[msg.sender]  = true;
                currentElection.numVotes++;
                (candidates[candidateAddress]).numVotes++;
                (candidates[candidateAddress]).voters.push(msg.sender);
            }
        }
    }
    //enter as a candidate
    function enterElection(string memory name, string memory description,uint256 current_date)
    public typeElection {
        //Check if the registration is before the required deadline
        // require(current_date < currentElection.startDate);
        //enter candidate
        candidate storage currentCandidate = candidates[msg.sender];
        currentCandidate.name = name;
        currentCandidate.description = description;
        currentCandidate.candidateAddr= msg.sender;
        currentCandidate.voters;
        // candidateArray.push(currentCandidate);
        candidatesCount++;
        candidatesAddresses.push(msg.sender);
    }

    // ? current_date is not being used
    //leave the election
    function leaveElection()//uint256 current_date)
    public typeElection {
        //Check if the registration is before the required deadline
        //require(current_date < currentElection.startDate);
        //remove candidate
        //remove from array
        delete candidates[msg.sender];
        for (uint i = 0; i<candidatesAddresses.length; i++){
            if(msg.sender==candidatesAddresses[i]){
                candidatesAddresses[i]=candidatesAddresses[candidatesAddresses.length-1];
                candidatesAddresses.pop();
                break;
            }
        }
        candidatesCount--;
    }

    //GETTERS
    function getCandidatesAddresses() public view typeElection returns (address[] memory) {
        return candidatesAddresses;
    }
    function get_candidate(address candaddr) public view typeElection returns (string memory, string memory, uint ) {
        return(candidates[candaddr].name, candidates[candaddr].description, candidates[candaddr].numVotes);
    }
    function getCandidateVoters(address candAddr) public view typeElection returns (address[] memory) {
        return((candidates[candAddr]).voters);
    }
    function getVoted(address voterAddr) public view returns (bool) {
        return voted[voterAddr];
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
