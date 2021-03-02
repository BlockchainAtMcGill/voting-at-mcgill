pragma solidity ^0.7.4;
//"SPDX-License-Identifier: UNLICENSED"
import "./Vote.sol";
contract Factory{
    struct groupStruct{
        string name;
        string description;
        address[] members;
        uint membersCount; 
    }
    struct userStruct{
        address userAddress;
        string name;
        string email;
        string password;
        // address[] running;
        // address[] createdElection;
        // address[] createdPetition;
        uint[] groups;
        bool isAdmin;
    }
    
    address[] public deployedVotes;
    mapping(address=>userStruct) userInfo;
    mapping(uint=>groupStruct) groupInfo;
    uint groupCount;
    
    
    function createGroup(string memory name, string memory description)
    public {
        groupStruct storage g = groupInfo[groupCount++]; //innitialize group
        g.name = name;
        g.description = description;
    }
    
    function registerUser(string memory name, string memory email, string memory password) public {
        // require (((userInfo[msg.sender]).userAddress) != address(0));
            userStruct storage u = userInfo[msg.sender]; //innitialize
            u.name = name;
            u.email = email;
            u.password = password;
            u.userAddress =  msg.sender;
            u.groups.push(0);// needs to increment groupCount and group members
            u.isAdmin = true;
    }
    function createVote(uint typeOf) public{
        address newVote = address(new Vote(msg.sender, typeOf));
        deployedVotes.push(newVote);
    }
    function loginUser(string memory password) public view returns (string memory, string memory, uint[] memory, bool) {
       userStruct storage u = userInfo[msg.sender];
       require( (keccak256(abi.encodePacked(password))) == (keccak256(abi.encodePacked(u.password))) );
       return(u.name, u.email, u.groups, u.isAdmin);
    }
    function getUser() public view returns (string memory, string memory, uint[] memory, bool){
        userStruct storage u = userInfo[msg.sender];
        return(u.name, u.email, u.groups, u.isAdmin);
    }
    
    function getUserGroups() public view returns (uint[] memory) {
        return (userInfo[msg.sender]).groups;
    }
    
    function getDeployedVotes() public view returns (address[] memory) {
        return deployedVotes;
    }
    function getGroup(uint id) public view returns(string memory, string memory, address[] memory, uint) {
        groupStruct storage g = groupInfo[id];
        return (g.name,g.description,g.members,g.membersCount);
    }
}

