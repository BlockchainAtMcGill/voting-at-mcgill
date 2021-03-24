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
        uint32[] groups; // NEW Assumption that users rarely quit
        bool isAdmin;
    }
    
    mapping(uint => groupStruct) public groupInfo; // KEY: groupID Value: group
    uint32 groupCount;
    address[] public deployedVotes;
    mapping(address => userStruct) userInfo;
    uint32 defaultGroupID = 1; // Use the getGroup(uint id) to access the default group
    uint32[] public existingGroups; // NEW: Access all groups in the UI
    
    // Creates an instance of group and Updates the groupInfo mapping
    // It also takes groupID as an input since the groupStruct(VALUE) is identified with a groupId(KEY)
    function createGroup(string memory name, string memory description, uint32 groupID) public {
        // IF statement to create a default group
        if (!isGroup(1)) {
            groupStruct storage studentGroup = groupInfo[1];
            studentGroup.name = "Student";
            studentGroup.description = "Default Group";
            groupCount++;
            existingGroups.push(defaultGroupID);
        }
        groupStruct storage g = groupInfo[groupID];
        g.name = name;
        g.description = description;
        groupCount++;
        existingGroups.push(groupID);
    }

    // Adds the groupID to the user's array of groups and Adds the user's address to the group's array of members
    function registerGroup(uint32 groupID) public {
        userStruct storage u = userInfo[msg.sender];
        groupStruct storage g = groupInfo[groupID];
        
        require(groupID != 0);
        require(!compareStrings(g.name, "")); // Validates the group's existence
        require(!isUserGroup(groupID));
        
        //Update User
        u.groups.push(groupID);
        
        // Update Group
        g.members.push(u.userAddress);
    }
    
    // Removes the groupID in the user's groups array and Removes the address in the group's member array
    // using the Swap & Delete method (swaps the last element)
    // Resources https://stackoverflow.com/questions/49051856/is-there-a-pop-functionality-for-solidity-arrays
    // The inputs are very specific to prevent large computations (TO CHANGE DEPENDING ON PROJECT MANAGER'S CHOICE)
    function leaveGroup(uint32 indexGroup, uint32 indexMember, uint32 groupID) public {
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

    // Verify if the user is part of the group
    function isUserGroup(uint32 groupID) public view returns (bool) {
        bool isStatus = false;
        userStruct storage u = userInfo[msg.sender];
        for (uint i = 0; i < u.groups.length; i++) {
            isStatus = (u.groups[i] == groupID);
        }
        return isStatus;
    }
    
    // Verify that the group exists in the mapping
    function isGroup(uint32 groupID) public view returns (bool) {
        groupStruct storage g = groupInfo[groupID];
        bool isExist = !(compareStrings(g.name, ""));
        return isExist;
    }
    
    // Returns a specific group of the user
    function getUserGroup(uint32 index) public view returns (uint32) {
        userStruct storage u = userInfo[msg.sender];
        return u.groups[index];
    }
    
    // Returns the user's array of groups
    function getUserAllGroups() public view returns (uint32[] memory) {
        userStruct storage u = userInfo[msg.sender];
        return u.groups;
    }
    
    // Returns all members of the group
    function getAllMembers(uint32 groupID) public view returns (address[] memory) {
        groupStruct storage g = groupInfo[groupID];
        return g.members;
    }
    
    // Returns a specific group of the website
    function getGroup(uint8 id) public view returns(string memory, string memory, address[] memory, uint) {
        groupStruct storage g = groupInfo[id];
        return (g.name, g.description, g.members, g.members.length);
    }
    
    function getExistingGroups() public view returns(uint32[] memory) {
        return existingGroups;
    }
    
    function registerUser(string memory name, string memory email, string memory password) public {
        userStruct storage u = userInfo[msg.sender]; //innitialize
        u.name = name;
        u.email = email;
        u.password = password;
        u.userAddress =  msg.sender;
        u.isAdmin = true;
        if (isGroup(1)) {
            registerGroup(1);
        }
    }

    function createVote(uint typeOf) public{
        address newVote = address(new Vote(msg.sender, typeOf));
        deployedVotes.push(newVote);
    }
    function loginUser(string memory password) public view returns (string memory, string memory, uint32[] memory, bool) {
       userStruct storage u = userInfo[msg.sender];
       require(compareStrings(password, u.password)); // NEW implemented the helper method
       return(u.name, u.email, u.groups, u.isAdmin);
    }

    //NEED TO BE FIX (u.groups)
    function getUser() public view returns (string memory, string memory, uint32[] memory, bool){
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