pragma solidity ^0.7.4;

//"SPDX-License-Identifier: UNLICENSED"
import "./Vote.sol";

contract VoteFactory{
    
    // Representation of an instance of Group
    struct groupStruct {
        string name;
        string description;
        address[] members;
        // uint groupID;
    }
    
    // Representation of an instance of User
    struct userStruct {
        address userAddress;
        string name;
        string email;
        uint256 studentID;
        string password;
        uint32[] groups;
        bool isAdmin;
        bool isLogin;
    }
    
    mapping(uint => groupStruct) public groupInfo; // KEY: groupID Value: group
    uint32 groupCount;
    address[] public deployedVotes;
    mapping(address => userStruct) userInfo;
    uint32 defaultGroupID = 0; // Use the getGroup(uint id) to access the default group
    uint32[] public existingGroups; // Access all groups in the UI

// GROUP
    // UPDATED Creates an instance of group and Updates the groupInfo mapping
    // The Group ID is based on the number of existing groups (generated)
    function createGroup(string memory name, string memory description) public {
        userStruct storage u = userInfo[msg.sender];
        groupStruct storage g = groupInfo[groupCount];
        
        require(!compareStrings(groupInfo[0].name, ""));
        g.name = name;
        g.description = description;
        existingGroups.push(groupCount);
        // Add Current User to the Group
        u.groups.push(groupCount++);
        g.members.push(u.userAddress);
        
    }

    // UPDATED Adds the groupID to the user's array of groups and Adds the user's address to the group's array of members
    function registerGroup(uint32 groupID) public {
        userStruct storage u = userInfo[msg.sender];
        groupStruct storage g = groupInfo[groupID];
        
        require(groupID != 0);
        require(!compareStrings(g.name, "")); // Validates the group's existence
        require(!isUserGroup(groupID));
        
        // Update User
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

// USER   
    // UPDATED Registers the user and add the user to the default group
    function registerUser(string memory name, string memory email, uint256 studentID, string memory password) public {
        userStruct storage u = userInfo[msg.sender]; //innitialize
        groupStruct storage studentGroup = groupInfo[defaultGroupID];
        if (!isGroup(0)) {
            studentGroup.name = "Student";
            studentGroup.description = "Default Group";
            existingGroups.push(groupCount++);
        }
        require(compareStrings(u.name, ""));
        //require(!compareStrings(groupInfo[0].name, ""));
        u.name = name;
        u.email = email;
        u.studentID = studentID;
        u.password = password;
        u.userAddress =  msg.sender;
        u.isAdmin = true;
        u.isLogin = false;
        
        // Join the default group
        u.groups.push(defaultGroupID);
        studentGroup.members.push(u.userAddress);
        
    }
    
    // UPDATED Logins the user
    function loginUser(uint256 studentID, string memory password) public returns (string memory, string memory, uint32[] memory, bool) { // add username
       userStruct storage u = userInfo[msg.sender];
       require(studentID == u.studentID);
       require(compareStrings(password, u.password)); // NEW implemented the helper method
       require(!u.isLogin);
       u.isLogin = true;
       return(u.name, u.email, u.groups, u.isAdmin);
    }
    
    // NEW logout the user from the system
    function logoutUser() public {
        userStruct storage u = userInfo[msg.sender];
        require(u.isLogin);
        u.isLogin = false;
    }
    
    // Creates a new Vote
    function createVote(uint typeOf) public{
        address newVote = address(new Vote(msg.sender, typeOf));
        deployedVotes.push(newVote);
    }
    
    /**
     * OTHER METHODS
     */
    // Verify that the user is logged in 
    function isUserLoggedIn() public view returns (bool) {
        userStruct storage u = userInfo[msg.sender];
        return u.isLogin;
    }
    // Verify if the user is part of the group
    function isUserGroup(uint32 groupID) public view returns (bool) {
        bool isStatus = false;
        userStruct storage u = userInfo[msg.sender];
        for (uint i = 0; i < u.groups.length; i++) {
            if (u.groups[i] == groupID) {
                isStatus = true;
                break;
            }
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
    function getGroup(uint8 id) public view returns(string memory aName, string memory aDescription, address[] memory aMembers, uint aMembersLength) {
        groupStruct storage g = groupInfo[id];
        return (g.name, g.description, g.members, g.members.length); // remove members length
    }
    
    function getExistingGroups() public view returns(uint32[] memory) {
        return existingGroups;
    }

    function getNumOfGroups() public view returns(uint256) {
        return existingGroups.length;
    }

    //NEED TO BE FIX (u.groups) FOLLOW VOTE.SOL SYNTAX
    function getUser() public view returns (string memory aName, string memory aEmail, uint256 aStudentID, uint32[] memory aGroups, bool aIsAdmin, bool aIsLogin) {
        userStruct storage u = userInfo[msg.sender];
        return(u.name, 
               u.email, 
               u.studentID, 
               u.groups, 
               u.isAdmin,
               u.isLogin);
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