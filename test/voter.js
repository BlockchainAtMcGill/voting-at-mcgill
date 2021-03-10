const VoteFactory = artifacts.require("./VoteFactory.sol");
const Vote = artifacts.require("./Vote.sol");

contract("VoteFactory", accounts => {
  let factory;
  let electionAddress;
  let petitionAddress;
  let election;
  let petition;
  let user;
  let member;

  before(async() => {
    factory = await VoteFactory.deployed();
    // Initialize Votes
    await factory.createVote(0, {
      from: accounts[0]
    });
    await factory.createVote(1, {
      from: accounts[0]
    });
    [electionAddress] = await factory.getDeployedVotes();
    election = await Vote.at(electionAddress);
    petitionAddress = (await factory.getDeployedVotes())[1];
    petition = await Vote.at(petitionAddress);

    // Initialize Groups
    await factory.createGroup("SSMU", "For The Students", 123);
    await factory.createGroup("BAM", "Blockchain", 133);

    // Initialize Users
    await factory.registerUser("name", "email", "password", {
      from: accounts[0]
    });

    await factory.registerUser("member1", "email", "password", {
      from: accounts[1]
    });
    await factory.registerUser("member2", "email", "password", {
      from: accounts[2]
    });

    user = await factory.getUser({
      from: accounts[0]
    });

    member = await factory.getUser({
      from: accounts[1]
    });

    await factory.registerGroup(123, {
      from: accounts[1]
    });

    await factory.registerGroup(123, {
      from: accounts[2]
    });

  });
  describe('Factory tests', async () =>{
    it('creates an empty election and returns it',() =>{
      assert.ok(electionAddress);
    })
    it('creates an empty petition and returns it',() =>{
      assert.ok(petitionAddress);
    })

  });
  describe('Election', async () =>{
    it('marks caller as election manager', async() => {
      const manager = await election.manager();
      assert.equal(accounts[0],manager);
    })
    it('edits existing election and outputs it', async() => {
      await election.editElection("title", 1, 2, "description",'two-thirds');
      const currentElection = await (election.currentElection());
      const expectedElection = {
        title: "title",
        startDate: 1,
        endDate: 2,
        description: "description",
        numVotes: 0,
        typeOfElection: 'two-thirds'
      }
      assert.equal(expectedElection.title, currentElection['0']);
      assert.equal(expectedElection.startDate, (currentElection['1'])['words'][0]);
      assert.equal(expectedElection.endDate, (currentElection['2'])['words'][0]);
      assert.equal(expectedElection.description, (currentElection['3']));
      assert.equal(expectedElection.numVotes, (currentElection['4'])['words'][0]);
      assert.equal(expectedElection.typeOfElection, (currentElection['5']));
    })
    it('users can vote for a certain candidate',async() => {
      await election.editElection("title", 1, 10, "description",'two-thirds');
      await election.enterElection('user', 'party1', 0, {from: accounts[0]} );
      await election.voteFor(accounts[0],{from:accounts[0]})//someone voting for themselves
      const electionVotes = ((await (election.currentElection()))['4']['words'][0])
      // console.log(await election.candidateArray(0))//won't work because array isn't linked to mapping
      const candidateInfo = await election.candidates(accounts[0]);
      const candidateVoters = await election.getCandidateVoters(accounts[0]);
      const hasVoted = await election.getElectionVoter(accounts[0]);

      assert.equal(1, electionVotes)
      assert.equal(1, ((candidateInfo['1'])['words'])[0]);
      assert.equal(accounts[0], [candidateVoters])
      assert.equal(true, hasVoted )
    })
    it('users cannot vote more than once for a given election',async() => {
      await election.editElection("title", 1, 10, "description",'two-thirds');
      await election.enterElection('user', 'party1', 0, {from: accounts[0]} );
      await election.enterElection('user2', 'party2', 0, {from: accounts[1]} );
      await election.voteFor(accounts[0],{from:accounts[0]})//someone voting for themselves
      await election.voteFor(accounts[1],{from:accounts[0]})//someone that already voted voted for someone else
      const electionVotes = ((await (election.currentElection()))['4']['words'][0])
      const candidateInfo1 = await election.candidates(accounts[0]);
      const candidateInfo2 = await election.candidates(accounts[1]);
      const candidateVoters = await election.getCandidateVoters(accounts[0]);
      assert.equal(1, electionVotes)
      assert.equal(1, ((candidateInfo1['1'])['words'])[0]);
      assert.equal(0, ((candidateInfo2['1'])['words'])[0]);
      assert.equal(accounts[0], [candidateVoters])
    })
  })

  describe('Petition', async () =>{
    it('marks caller as petition manager', async() => {
      const manager = await election.manager();
      assert.equal(accounts[0],manager);
    })
    it('edits existing petition and outputs it', async() => {
      await petition.editPetition("title", 1, 2, "description");
      const currentPetition = await (petition.currentPetition());
      const expectedPetition = {
        title: "title",
        startDate: 1,
        endDate: 2,
        description: "description",
        numVotes: 0,
      }
      assert.equal(expectedPetition.title, currentPetition['0']);
      assert.equal(expectedPetition.startDate, (currentPetition['1'])['words'][0]);
      assert.equal(expectedPetition.endDate, (currentPetition['2'])['words'][0]);
      assert.equal(expectedPetition.description, (currentPetition['3']));
      assert.equal(expectedPetition.numVotes, (currentPetition['4'])['words'][0]);
    });

  });

  describe('Groups', async () => {
    it('deploys a group', async () => {
      const group = await factory.createGroup("MariHacks", "Open to all Levels", 101);
      assert.ok(group);
    });

    it('outputs a group', async () => {
      const group = await factory.getGroup(123);
      assert.equal(group[0], "SSMU");
      assert.equal(group[1], "For The Students");
      assert.equal(group[3], 2);
    });
    
    it('registers to a group', async () => {
      await factory.registerGroup(133, {
        from: accounts[1]
      });

      const group = await factory.getGroup(133);
      const memberGroups = await factory.getUserAllGroups({
        from: accounts[1]
      });
      assert.equal(memberGroups.length, 3);
      assert.equal(group[3], 1);
    });

    it('leave a group', async () => {
      await factory.leaveGroup(1, 0, 123, {
        from: accounts[1]
      });
      const group = await factory.getGroup(123);
      assert.equal(member[2].length, 1);
      assert.equal(group[3], 1);
    });
 });

  describe('User', async () =>{
    it('creates user instance', async() => {
      assert.ok(user);
    });

    it('outputs created user successfully', async() => {
      assert.equal("name", user['0']);
      assert.equal("email", user['1']);
      assert.equal(1, (((user)['2'])[0])['words'][0]);
      assert.equal(true, user['3']);
    });

    it("gets groups from user", async() => {
      let userGroups = await factory.getUserAllGroups(
        {from:accounts[0]}
      );
      assert.strictEqual(1, userGroups[0]['words'][0]);
    });

    it("able to login once registered", async () => {
      let loggedIn = await factory.loginUser("password",(
        {from:accounts[0]})
      );
      assert.equal("name", loggedIn['0']);
      assert.equal("email", loggedIn['1']);
      assert.equal(1, (((loggedIn)['2'])[0])['words'][0]);
      assert.equal(true, loggedIn['3']);
    });

    it("throws error with wrong password", async () => {
      try {
        await factory.loginUser("wrongPassword",({from:accounts[0]}));
      } catch (error) {
        assert.ok(error);
        return;
      }
      assert.fail("should have raised an error");
    })
  });
});
