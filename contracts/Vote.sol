pragma solidity ^0.7.4;

contract voteFactory{
    address[] public deployedElections;
    address[] public deployedPetitions;

    function createElection(uint minimum) public{
        address newElection = address new Vote(msg.sender, "election");
        deployedElections.push(newElection);
    }
    function createPetition(uint minimum) public{
        address newPetition = address new Vote(msg.sender, "petition");
        deployedPetitions.push(newPetition);
    }
    function getDeployedElections() public view returns (address[] memory) {
        return deployedElections;
    }
    function getDeployedPetitions() public view returns (address[] memory) {
        return deployedPetitions;
    }

}

contract Vote{
    //fields
    //admin address
    //array of voters

    struct user{
        string name;
        string email;
        string password;
        address userAddress;
        address[] running;
        address[] createdElection;
        address[] createdPetition;
        bool userType;
    }
    struct election{
        string title;
        string deadline;
        address[] candidates;
        //Election
    }
    struct candidateDescription{
        address candidate;
        string name;
        string position;
        string description;

    }
    struct petition{
        string title;
        // Petition
    }
    constructor(address manager, string type) {
        //
    }

    // function getElections() public view returns(address[] memory){
    //     return elections;
    // }
    // function getPetitions() public view returns(address[] memory){
    //     return petitions;
    // }

    //enter as a candidate
    function enter_election( address election, string position, string current_date) public payable {

        //Check if the registration is before the required deadline
        require(current_date<=deadline);

        //Check if the candidate is not already in the election
        require(msg.sender not in candidates);

        candidates.push(msg.sender);
    }

    //leave the election
    function leave_election(address election, string current_date) public payable{

        //Check if the registration is before the required deadline
        require(current_date<=deadline)

        //Check if the candidate is already in the election
        require(msg.sender in candidates);

        //removes candidate from the list of adresses
        for (uint i = 0; i<candidates.length; i++){
          if(msg.sender.equals(candidates[i])){
            candidates[i]=candidates[candidates.length-1];
            candidates.pop();
          }

        }
    }
