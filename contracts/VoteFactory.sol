pragma solidity ^0.7.4;

//"SPDX-License-Identifier: UNLICENSED"
import "./Vote.sol";

contract VoteFactory{
    
    // Representation of an instance of Group
    struct groupStruct {
        string name;
        string description;
        address[] members; // NEW Assumption that members rarely quit      
    }
    
    // Representation of an instance of User
    struct userStruct {
        address userAddress;
        string name;
        string email;
        string password;
        // address[] running;
        // address[] createdElection;
        // address[] createdPetition;
        uint[] groups; // NEW Assumption that users rarely quit
        bool isAdmin;
    }
    
    mapping(uint => groupStruct) groupInfo; // KEY: groupID Value: group
    uint groupCount;
    address[] public deployedVotes;
    mapping(address => userStruct) userInfo;
    
    // Creates an instance of group and Updates the groupInfo mapping
    // It also takes groupID as an input since the groupStruct(VALUE) is identified with a groupId(KEY)
    function createGroup(string memory name, string memory description, uint groupID) public {
        groupStruct storage g = groupInfo[groupID];
        g.name = name;
        g.description = description;
        groupCount++;
    }

    // Adds the groupID to the user's array of groups and Adds the user's address to the group's array of members
    function registerGroup(uint groupID) public {
        userStruct storage u = userInfo[msg.sender];
        groupStruct storage g = groupInfo[groupID];
        
        require(groupID != 0);
        require(!compareStrings(g.name, "")); // Validates the group's existence
        // TODO add requirement to prevent the user to enter twice
        
        //Update User
        u.groups.push(groupID);
        
        // Update Group
        g.members.push(u.userAddress);
    }
    
    // Removes the groupID in the user's groups array and Removes the address in the group's member array
    // using the Swap & Delete method (swaps the last element)
    // Resources https://stackoverflow.com/questions/49051856/is-there-a-pop-functionality-for-solidity-arrays
    // The inputs are very specific to prevent large computations (TO CHANGE DEPENDING ON PROJECT MANAGER'S CHOICE)
    function leaveGroup(uint indexGroup, uint indexMember, uint groupID) public {
        userStruct storage u = userInfo[msg.sender];
        groupStruct storage g = groupInfo[groupID];
        
        // Remove the group from user
        u.groups[indexGroup] = u.groups[u.groups.length - 1];
        delete u.groups[u.groups.length - 1];
        u.groups.pop();
        
        // Remove user from the group
        g.members[indexMember] = g.members[g.members.length - 1];
        delete g.members[g.members.length - 1];
        g.members.pop();
    }
    
    // Returns a specific group of the user
    function getUserGroup(uint index) public view returns (uint) {
        userStruct storage u = userInfo[msg.sender];
        return u.groups[index];
    }
    
    // Returns the user's array of groups
    function getUserAllGroups() public view returns (uint[] memory) {
        userStruct storage u = userInfo[msg.sender];
        return u.groups;
    }
    
    // Returns all members of the group
    function getAllMembers(uint groupID) public view returns (address[] memory) {
        groupStruct storage g = groupInfo[groupID];
        return g.members;
    }
    
    // Returns a specific group of the website
    function getGroup(uint id) public view returns(string memory, string memory, address[] memory, uint) {
        groupStruct storage g = groupInfo[id];
        return (g.name, g.description, g.members, g.members.length);
    }
    
    function registerUser(string memory name, string memory email, string memory password) public {
        userStruct storage u = userInfo[msg.sender]; //innitialize
        u.name = name;
        u.email = email;
        u.password = password;
        u.userAddress =  msg.sender;
        u.isAdmin = true;
        u.groups.push(1); // TODO  Adds a default group (INSTANTIATE THE GROUP IN LATER COMMIT)
    }

    function createVote(uint typeOf) public{
        address newVote = address(new Vote(msg.sender, typeOf));
        deployedVotes.push(newVote);
    }
    function loginUser(string memory password) public view returns (string memory, string memory, uint[] memory, bool) {
       userStruct storage u = userInfo[msg.sender];
       require(compareStrings(password, u.password)); // NEW implemented the helper method
       return(u.name, u.email, u.groups, u.isAdmin);
    }
    function getUser() public view returns (string memory, string memory, uint[] memory, bool){
        userStruct storage u = userInfo[msg.sender];
        return(u.name, u.email, u.groups, u.isAdmin);
    }
    
    function getDeployedVotes() public view returns (address[] memory) {
        return deployedVotes;
    }
    
    // Returns a boolean value of the comparison (HELPER METHOD)
    // Based on https://ethereum.stackexchange.com/questions/30912/how-to-compare-strings-in-solidity/82739
    function compareStrings(string memory a, string memory b) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
    
    
}

