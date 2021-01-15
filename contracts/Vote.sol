pragma solidity ^0.7.4;

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
    address[] elections;
    address[] petitions;
    
    function getElections() public view returns(address[] memory){
        return elections;
    }
    function getPetitions() public view returns(address[] memory){
        return petitions;
    }
}