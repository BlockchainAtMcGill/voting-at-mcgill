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
        //Election
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
}