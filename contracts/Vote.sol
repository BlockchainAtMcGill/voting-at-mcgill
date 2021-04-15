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

    enum voteStatus {
        before,
        onGoing,
        archived,
        inconclusive
    }
    voteStatus public voteState;

    mapping(address=>bool) voted; //see if a user has signed
    string title;
    uint startDate;
    uint endDate;
    string description;
    uint numVotes = 0;



    //election only
    uint public candidatesCount = 0;
    enum electionType {
        majority,
        twoThirds
    }
    electionType public typeOfElection;
    candidate winner;
    struct candidate {
        address candidateAddr;
        uint numVotes;
        address[] voters;
        string name;
        string description;
    }


    mapping(address => candidate) public candidates; //maps a candidate's address to the candidate
    address[] public candidatesAddresses;//should replace candidateArray


    constructor (address managerOfVote, uint typeOf){   //how does one become an admin?
        manager = managerOfVote;
        voteType = typeOfVote(typeOf);
    }

    //Setters
    function editVote (string memory aTitle, uint256 aStartDate, uint256 aCurrentDate, uint256 aEndDate, string memory aDescription, uint aTypeOfElection)
    public {
        title = aTitle;
        startDate = aStartDate;
        endDate = aEndDate;
        description = aDescription;
        voteState  = aCurrentDate < aStartDate ? voteStatus.before :  (aCurrentDate < aEndDate ? voteStatus.onGoing : voteStatus.archived);
        if(voteType == typeOfVote.election) {
            typeOfElection = electionType(aTypeOfElection);
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
                return;
            }
        }
        revert();
    }

    function signThis() public typePetition{
        //needs to be between start end end
        if(voted[msg.sender] == false){
                voted[msg.sender]  = true;
                numVotes++;
                return;}
        revert();}
    

    //enter as a candidate
    function enterElection(string memory aName, string memory aDescription,uint256 aCurrentDate)// should check if user with current address already exists
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

    function getElection() public view typeElection returns(address aManager, uint aVoteType, uint aVoteStatus, string memory aTitle, uint aStartDate, uint aEndDate, string memory aDescription, uint aNumVotes, address aVoteAddress, uint aCandidateCount, uint256 aTypeOfElection) {
        return(
            manager,
            uint(voteType),
            uint(voteState),
            title,
            startDate,
            endDate,
            description,
            numVotes,
            address(this),
            candidatesCount,
            uint(typeOfElection)
        );
    }
    function getPetition() public view typePetition returns(address aManager, uint aVoteType, uint aVoteStatus, string memory aTitle, uint aStartDate, uint aEndDate, string memory aDescription, uint aNumVotes, address aVoteAddress) {
        return(
            manager,
            uint(voteType),
            uint(voteState),
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
    function get_Winner() public view typeElection returns (string memory aName, string memory aDescription, uint aNumVotes) { //should be afterElection
        return(winner.name, winner.description, winner.numVotes);
    }
    function getCandidateVoters(address candAddr) public view typeElection returns (address[] memory) {
        return((candidates[candAddr]).voters);
    }
    function getVoted(address voterAddr) public view returns (bool) {
        return voted[voterAddr];
    }

    //ElectionWinner
    function setElectionWinner() typeElection public {
        if(typeOfElection == electionType.twoThirds) {
            setTwoThirdsWinner();
        }
        else if (typeOfElection == electionType.majority) {
            setMajorityWinner();
        }
        else{
            voteState = voteStatus.inconclusive;
        }
    }

    function setTwoThirdsWinner() public typeElection twoThirds {//see if a user has more than 2/3 of total votes
        require(numVotes != 0);
        for( uint i = 0; i < candidatesAddresses.length; i++) {
            if((uint(3) * (candidates[candidatesAddresses[i]]).numVotes) >= uint(2) * numVotes) {// user/totalvotes <= 2/3
                winner = candidates[candidatesAddresses[i]];
                voteState = voteStatus.archived;
                return;
            }
        }
        voteState = voteStatus.inconclusive;
    }

    function setMajorityWinner() public typeElection majority {//find user with most votes
        uint maxVoters = 0;
        candidate memory currentWinner;
        bool tie = false;
        for( uint i = 0; i < candidatesAddresses.length; i++) {
            if(candidates[candidatesAddresses[i]].numVotes > maxVoters) { // maxNumber of moves
                tie = false;
                currentWinner = candidates[candidatesAddresses[i]];
                maxVoters = currentWinner.numVotes;
            }
            else if (candidates[candidatesAddresses[i]].numVotes == maxVoters) {
                tie = true;
            }
        }
        if(tie) {
            voteState = voteStatus.inconclusive;
        }
        else {
            winner = currentWinner;
            voteState = voteStatus.archived;
        }
    }



    //MISC.
    function updateVoteStatus(uint256 aCurrentDate) public {
        if (aCurrentDate < startDate && voteState != voteStatus.before) {
            voteState = voteStatus.before;
        }
        else if (aCurrentDate < endDate && voteState != voteStatus.onGoing) {
            voteState = voteStatus.onGoing;
        }
        else if (aCurrentDate > endDate && (voteState != voteStatus.archived || voteState != voteStatus.inconclusive)) {
            if(voteType == typeOfVote.election) {
                setElectionWinner();
            }
            else {
                voteState = voteStatus.archived; // if it is an archived petition
            }
        }
    }
    //modifiers
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
    modifier beforeElection() {
        require(voteState == voteStatus.before);
        _;
    }
    modifier duringElection() {
        require(voteState == voteStatus.onGoing);
        _;
    }
    modifier afterElection() {
        require(voteState == voteStatus.archived);
        _;
    }
    modifier twoThirds() {
        require(typeOfElection == electionType.twoThirds);
        _;
    }
    modifier majority() {
        require(typeOfElection == electionType.majority);
        _;
    }
}
