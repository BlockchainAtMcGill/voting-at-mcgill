const VoteFactory = artifacts.require("./VoteFactory.sol");
const Vote = artifacts.require("./Vote.sol");

contract("Vote", accounts => {
  let factory;
  let electionAddress;
  let petitionAddress;
  let election;
  let petition;
  let candidates
  before(async() => {
    factory = await VoteFactory.deployed();
    await factory.createVote(0, {
      from: accounts[0]
    });
    await factory.createVote(1, {
      from: accounts[0]
    });
    [electionAddress] = await factory.getDeployedVotes();
    election = await Vote.at(electionAddress);
  });
  describe('candidate', async () =>{
    it('candidate can enter', async() => {
      await election.editElection("title", 1, 3, "description", [1,2,3]);
      const currentElection = await (election.currentElection());
      const currentCandidate= await (election.enterElection('user', 'party1', 2 ));
      assert.ok(candidates[accounts[0]]);
    })
    it('Existing candidate can leave', async() => {
        //await election.editElection("title", 1, 3, "description", [1,2,3]);
        //const currentElection = await (election.currentElection());
        //await currentElection.enterElection("user", "party1", 2 )
        //const currentCandidate = await (election.candidates[accounts[0]])
        //console.log(election.candidates)
        console.log('hey');
      })
    })
  });
