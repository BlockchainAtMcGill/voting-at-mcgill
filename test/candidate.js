const VoteFactory = artifacts.require("./VoteFactory.sol");
const Vote = artifacts.require("./Vote.sol");

<<<<<<< HEAD
=======
//  contract("Vote", accounts => {
//    let voteInstance;
//    before(async() => {
//      voteInstance = await Vote.deployed();
//    });
//    describe('candidate tests', async () =>{
//      it('allows user to enter an election', async() => {
//        await election.editElection("title", 1, 2, "description", [1,2,3]);
//        const currentElection = await (election.currentElection());
//        await Vote.methods.enterElection('Luai', 'democrat', 01252021).send({
//          from: accounts[0],
//          value: web3.utils.toWei('0.02', 'ether')
//        });
//        assert.equal(candidateArray[0].candidateAddr,accounts[0]);
//        assert.equal(candidateArray.length,1);
//       });
//      })
//    });
//  });
const VoteFactory = artifacts.require("./VoteFactory.sol");
const Vote = artifacts.require("./Vote.sol");

>>>>>>> origin/working_main
contract("Vote", accounts => {
  let factory;
  let electionAddress;
  let petitionAddress;
  let election;
  let petition;
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
<<<<<<< HEAD
      await election.editElection("title", 1, 3, "description", [1,2,3]);
      const currentElection = await (election.currentElection());
      const currentCandidate= await (election.enterElection('user', 'party1', 2 ));
      //const currentCandidate = election.candidates[accounts[0]];

      //assert.ok(election.candidates[accounts[0]]);
    })
    it('Existing candidate can leave', async() => {
      await election.leaveElection(2);
      assert.equal(election.candidates.length,0);
=======
      await election.editVote("title" ,1,2, 3, "description", 0,[0]);
      await election.enterElection('user', 'party1', 0, {from: accounts[0]} );
      const add = await (election.get_candidate(accounts[0]));
      assert.equal(add[0],'user');
      assert.equal(await election.candidatesCount(),1);
    })
    it('Existing candidate can leave', async() => {
      await election.leaveElection();
      assert.equal(election.candidates.length,0);
      assert.equal(await election.candidatesCount(),0);
>>>>>>> origin/working_main
      })
    })
  });
