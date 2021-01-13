// SPDX-License-Identifier: MIT
pragma solidity = 0.7.4;

contract Vote {
    int test = 0;
    constructor(){
        test = 1;
    }
    function getTest() public view returns (int){
        return test;
    }
}
