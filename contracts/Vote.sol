pragma solidity ^0.7.4;
 
contract voteFactory{
    address[] public deployedElections;
    address[] public deployedPetitions;
    
    function createElection() public{
        address newElection = address(new Vote(msg.sender, 0));
        deployedElections.push(newElection);
    }
    function createPetition() public{
        address newPetition = address(new Vote(msg.sender, 1));
        deployedPetitions.push(newPetition);
    }
    //add edit function for created eletions

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
    address manager;
    //array of voters
    address[] voters;
    
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

    /*struct candidate {
        string name;
        address userAddress;
        string description;
    }*/
    struct group {
        string name;
        string password;
        address[] members;
        address[] admins;

    }

    struct election {
        string title;
        string startDate;
        string endDate;
        mapping(uint=>group) groups;
        string description;
        //think about mapping?
        mapping(address=>uint) candidates; //number of current votes for each candidate
        mapping(address=>bool) voters; //see if a voter has voted

    }
    struct petition{
        string title;
        string startDate;
        string endDate;
        mapping(uint=>group) groups;
        string description;
        mapping(address=>bool) signed; //see if a user has signed

    }
    constructor (address managerOfVote, uint typeOf) restricted {   //how does one become an admin?
        // constructor
        manager = managerOfVote;
        if (typeOf == 0) {
            //create an election
        }
        else if (typeOf == 1) {
            //create an petition
        }
    
    }
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

}
