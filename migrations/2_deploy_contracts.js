var VoteFactory = artifacts.require("./VoteFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(VoteFactory);
};
