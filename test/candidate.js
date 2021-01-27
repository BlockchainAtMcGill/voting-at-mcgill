//  const Vote = artifacts.require("./Vote.sol");

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
