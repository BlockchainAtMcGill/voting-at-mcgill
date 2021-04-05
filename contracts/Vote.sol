pragma solidity ^0.7.4;
//"SPDX-License-Identifier: UNLICENSED"

contract Vote{
    //admin address
    
    address public manager;
    
    enum typeOfVote {
        election,
        petition
    }
    typeOfVote public voteType;  //0 for election and 1 for petition
    
    mapping(address=>bool) voted; //see if a user has signed
    string title;
    uint startDate;
    uint endDate;
    string description;
    uint numVotes = 0;
        
    enum state {
        PreVote,
        ongGoing,
        Archived
    }

    //election only
    uint public candidatesCount = 0;
    string typeOfElection;
    struct candidate {
        address candidateAddr;
        uint numVotes;
        address[] voters;
        string name;
        string description;
    }

    
    mapping(address => candidate) public candidates; //maps a candidate's address to the candidate
    address[] public candidatesAddresses;//should replace candidateArray
    //election public currentElection;
    //petition public currentPetition;

    constructor (address managerOfVote, uint typeOf){   //how does one become an admin?
        manager = managerOfVote;
        voteType = typeOfVote(typeOf);
    }
    
    function editVote (string memory aTitle, uint256 aStartDate, uint256 aEndDate, string memory aDescription, string memory aTypeOfElection)
    public {
        title = aTitle;
        startDate = aStartDate;
        endDate = aEndDate;
        description = aDescription;
        if(voteType == typeOfVote.election) {
            typeOfElection = aTypeOfElection;
        }
    }

    //vote for a candidate
    function voteFor(address aCandidateAddress) public typeElection{
        //needs to be between start end end
        if(voted[msg.sender] == false){
            if(candidates[aCandidateAddress].candidateAddr != address(0)){
                voted[msg.sender]  = true;
                numVotes++;
                (candidates[aCandidateAddress]).numVotes++;
                (candidates[aCandidateAddress]).voters.push(msg.sender);
            }
        }
    }
    
    //enter as a candidate
    function enterElection(string memory aName, string memory aDescription,uint256 aCurrentDate)
    public typeElection {
        
        //Check if the registration is before the required deadline
        
        // require(aCurrentDate < currentElection.startDate);
        
        //enter candidate
        candidate storage currentCandidate = candidates[msg.sender];
        currentCandidate.name = aName;
        currentCandidate.description = aDescription;
        currentCandidate.candidateAddr= msg.sender;
        currentCandidate.voters;
        candidatesCount++;
        candidatesAddresses.push(msg.sender);
    }

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
    
    function getElection() public view typeElection returns(address aManager, uint aVoteType, string memory aTitle, uint aStartDate, uint aEndDate, string memory aDescription, uint aNumVotes, address aVoteAddress, uint aCandidateCount, string memory aTypeOfElection) {
        return(
            manager,
            uint(voteType),
            title,
            startDate,
            endDate,
            description,
            numVotes,
            address(this),
            candidatesCount,
            typeOfElection
        );
    }
    function getPetition() public view typePetition returns(address aManager, uint aVoteType, string memory aTitle, uint aStartDate, uint aEndDate, string memory aDescription, uint aNumVotes, address aVoteAddress) {
        return(
            manager,
            uint(voteType),
            title,
            startDate,
            endDate,
            description,
            numVotes,
            address(this)
        );
    }
    
    
    function getCandidatesAddresses() public view typeElection returns (address[] memory) {
        return candidatesAddresses;
    }
    function get_candidate(address candaddr) public view typeElection returns (string memory aName, string memory aDescription, uint aNumVotes) {
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
        require(voteType == typeOfVote.election);
        _;
    }
    modifier typePetition() {
        require(voteType == typeOfVote.petition);
        _;
    }

}
