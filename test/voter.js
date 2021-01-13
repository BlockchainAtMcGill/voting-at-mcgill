const Vote = artifacts.require("./Vote.sol");

contract("Vote", accounts => {
  let voteInstance;
  before(async() => {
    voteInstance = await Vote.deployed();
  });
  describe('Voter tests', async () =>{
    it('deploys a contract',() =>{
      assert.ok(voteInstance.address);
    })
  });
});
