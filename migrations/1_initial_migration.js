var Migrations = artifacts.require("./Migrations.sol");
var VoteFactory = artifacts.require("./VoteFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(VoteFactory);
};
