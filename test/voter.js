const VoteFactory = artifacts.require("./VoteFactory.sol");
const Vote = artifacts.require("./Vote.sol");

contract("VoteFactory", accounts => {
  let factory;
  let electionAddress;
  let petitionAddress;
  let election;
  let petition;
  let user;
  let member1;
  let member2;
  let testUser;

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
    /**
     * User Setup
     */
    // Initialize Users
    await factory.registerUser("name", "email", 123, "password", {
      from: accounts[0]
    });
    await factory.registerUser("member1", "email", 456, "password", {
      from: accounts[1]
    });
    await factory.registerUser("member2", "email", 789, "password", {
      from: accounts[2]
    });

    // Login Users
    await factory.loginUser(123, "password", {
      from: accounts[0]
    });

    await factory.loginUser(456, "password", {
      from: accounts[1]
    });

    // Get existing Users
    user = await factory.getUser(accounts[0]);
    member1 = await factory.getUser(accounts[1]);
    member2 = await factory.getUser(accounts[2]);

    /**
     * Groups Setup
     */
    // Initialize Groups
    await factory.createGroup("SSMU", "For The Students", {
      from: accounts[0]
    });
    await factory.createGroup("BAM", "Blockchain", {
      from: accounts[0]
    });

    // Assign existing users to groups
    await factory.registerGroup(1, {
      from: accounts[1]
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
      await election.editVote("title", 0, 1, 2, "description", 0, [0,1]);
      const currentElection = await (election.getElection());
      const expectedElection = {
        aManager: accounts[0],
        aVoteType: 0,
        aVoteStatus: 1,
        aTitle: "title",
        aStartDate: 0,
        aEndDate: 2,
        aDescription: "description",
        aNumVotes: 0,
        aVoteAddress: "something",
        aCandidateCount: 0,
        aTypeOfElection: 0,
        aGroupIDs: [0,1]
      }
      assert.equal(expectedElection.aManager, currentElection.aManager);
      assert.equal(expectedElection.aVoteType, (currentElection.aVoteType)['words'][0]);
      assert.equal(expectedElection.aVoteStatus, (currentElection.aVoteStatus)['words'][0]);
      assert.equal(expectedElection.aTitle, currentElection.aTitle);
      assert.equal(expectedElection.aStartDate, (currentElection.aStartDate)['words'][0]);
      assert.equal(expectedElection.aEndDate, (currentElection.aEndDate)['words'][0]);
      assert.equal(expectedElection.aDescription, (currentElection.aDescription));
      assert.equal(expectedElection.aNumVotes, (currentElection.aNumVotes)['words'][0]);
      assert.ok(currentElection.aVoteAddress);
      assert.equal(expectedElection.aCandidateCount, (currentElection.aCandidateCount)['words'][0]);
      assert.equal(expectedElection.aTypeOfElection, (currentElection.aTypeOfElection)['words'][0]);
      for(var i=0; i<expectedElection.aGroupIDs.length; i++) {
        assert.equal(expectedElection.aGroupIDs[i], (currentElection.aGroupIDs)[i]['words'][0]);
      }
    })
    it('users can vote for a certain candidate',async() => {
      await election.editVote("title", 0, 1, 2, "description", 0, [0,1]);
      await election.enterElection('user', 'party1', 0, {from: accounts[0]} );
      await election.voteFor(accounts[0],{from:accounts[0]})//someone voting for themselves
      const currentElection = await (election.getElection());
      const electionVotes =  (currentElection.aNumVotes)['words'][0];
      const candidateInfo = await election.get_candidate(accounts[0]);
      const candidateVoters = await election.getCandidateVoters(accounts[0]);
      const hasVoted = await election.getVoted(accounts[0]);
      // console.log(electionVotes)
      // console.log(candidateInfo)
      // console.log(candidateVoters)
      // console.log(hasVoted)
      assert.equal(1, electionVotes)
      assert.equal(1, ((candidateInfo.aNumVotes)['words'])[0]);
      assert.equal(accounts[0], [candidateVoters])
      assert.equal(true, hasVoted )
    })
    it('users cannot vote more than once for a given election',async() => {
      try{
      await election.editVote("title", 0, 1, 2, "description", 0, [0,1]);
      await election.enterElection('user', 'party1', 0, {from: accounts[0]} );
      await election.enterElection('user2', 'party2', 0, {from: accounts[1]} );
      await election.voteFor(accounts[0],{from:accounts[0]})//someone voting for themselves
      await election.voteFor(accounts[1],{from:accounts[0]})//someone that already voted voted for someone else
      } catch(e){
        const currentElection = await (election.getElection());
        const electionVotes =  (currentElection.aNumVotes)['words'][0];
        const candidateVoters = await election.getCandidateVoters(accounts[0]);

        const candidateInfo1 = await election.get_candidate(accounts[0]);
        const candidateInfo2 = await election.get_candidate(accounts[1]);

        assert.equal(1, electionVotes)
        assert.equal(1, ((candidateInfo1.aNumVotes)['words'])[0]);
        assert.equal(0, ((candidateInfo2.aNumVotes)['words'])[0]);
        assert.equal(accounts[0], [candidateVoters])
      }
    })
    // it('correct winner is displayed in majority election',async() => {
    //   await election.editVote("title", 0, 1, 2, "description", 0, [0,1]);
    //   await election.enterElection('user', 'party1', 0, {from: accounts[0]} );
    //   await election.enterElection('user2', 'party2', 0, {from: accounts[1]} );
      
    //   await election.voteFor(accounts[0],{from:accounts[0]});//someone voting for themselves
      // await election.updateVoteStatus(2,{from: accounts[0]});
      // const winner = await election.get_Winner()
      // asser.ok(1)
      // assert.equal('user', winner.aName)
      // assert.equal('party1', winner.aDescription)
      // assert.equal(1, ((winner.aNumVotes)['words'])[0]);
    })
  })

  describe('Petition', async () =>{
    it('marks caller as petition manager', async() => {
      const manager = await petition.manager();
      assert.equal(accounts[0],manager);
    })
    it('edits existing petition and outputs it', async() => {
      await petition.editVote("title", 0, 1, 2, "description", 1, [0,1]);
      const currentPetition = await (petition.getPetition());
      const expectedPetition = {
        aManager: accounts[0],
        aVoteType: 1,
        aVoteStatus: 1,
        aTitle: "title",
        aStartDate: 0,
        aEndDate: 2,
        aDescription: "description",
        aNumVotes: 0,
        aVoteAddress: "something",
        aGroupIDs: [0,1]
      }
      assert.equal(expectedPetition.aManager, currentPetition.aManager);
      assert.equal(expectedPetition.aVoteType, (currentPetition.aVoteType)['words'][0]);
      assert.equal(expectedPetition.aVoteStatus, (currentPetition.aVoteStatus)['words'][0]);
      assert.equal(expectedPetition.aTitle, currentPetition.aTitle);
      assert.equal(expectedPetition.aStartDate, (currentPetition.aStartDate)['words'][0]);
      assert.equal(expectedPetition.aEndDate, (currentPetition.aEndDate)['words'][0]);
      assert.equal(expectedPetition.aDescription, (currentPetition.aDescription));
      assert.equal(expectedPetition.aNumVotes, (currentPetition.aNumVotes)['words'][0]);
      assert.ok(currentPetition.aVoteAddress);
      for(var i=0; i<expectedPetition.aGroupIDs.length; i++) {
        assert.equal(expectedPetition.aGroupIDs[i], (currentPetition.aGroupIDs)[i]['words'][0]);
      }
    });

  });
  describe('User', async () =>{
    it('creates user successfully', async() => {
      await factory.registerUser("test", "test@mcgill.ca", "012", "password", {
        from: accounts[3]
      });
      testUser = await factory.getUser(accounts[3]);
      assert.ok(testUser);
    });
    it('attempts to create user with empty username', async() => {
      try {
        await factory.registerUser("", "test@mcgill.ca", "013", "password", {
          from: accounts[3]
        });
        testUser = await factory.getUser(accounts[3]);
      } catch (error) {
        assert.ok(error);
        return;
      }
      assert.fail("should have raised an error");
    });
    it("able to login once registered", async () => {
      await factory.loginUser(789, "password", {
        from: accounts[2]
      });
      let isLog = await factory.isUserLoggedIn(accounts[2]);
      assert.equal(true, isLog);
    });
    it("attempt to login with incorrect student ID once registered", async () => {
      try {
        await factory.loginUser("790", "password",(
          {from:accounts[2]})
        );
      } catch (error) {
        assert.ok(error);
        return;
      }
      assert.fail("should have raised an error");
    });
    it("attempt to login with incorrect password once registered", async () => {
      try {
        await factory.loginUser("789", "pass",(
          {from:accounts[2]})
        );
      } catch (error) {
        assert.ok(error);
        return;
      }
      assert.fail("should have raised an error");
    });
    it("attempt to login once logged in", async () => {
      try {
        await factory.loginUser("789", "password",(
          {from:accounts[2]})
        );
        await factory.loginUser("789", "password",(
          {from:accounts[2]})
        );
      } catch (error) {
        assert.ok(error);
        return;
      }
      assert.fail("should have raised an error");
    });
    it("able to logout once logged in", async () => {
      await factory.logoutUser({
        from: accounts[0]
      });
      let isLog = await factory.isUserLoggedIn(accounts[0]);
      assert.equal(false, isLog);
    });
    it("attempt to login once logged in", async () => {
      try {
        await factory.logoutUser((
          {from:accounts[0]})
        );
        await factory.logoutUser((
          {from:accounts[0]})
        );
      } catch (error) {
        assert.ok(error);
        return;
      }
      assert.fail("should have raised an error");
    });
    it("verify if user is part of the group", async() => {
      let isGroup = await factory.isUserGroup(accounts[0], 0);
      assert.equal(true, isGroup);
    });
    it("verify if user is not part of the group", async() => {
      let isGroup = await factory.isUserGroup(accounts[0], 5);
      assert.equal(false, isGroup);
    });
    it("gets specific group from user", async() => {
      let groupID = await factory.getUserGroup(accounts[0], 0);

      assert.equal(0, groupID);
    });
    it("gets all groups from user", async() => {
      let userGroups = await factory.getUserAllGroups(accounts[0]);
      assert.strictEqual(3, userGroups.length);
    });
  });
  describe('Groups', async () => {
    it('deploys a group', async () => {
      await factory.createGroup("MariHacks", "All Levels", {
        from: accounts[0]
      });
      
      let group = await factory.getGroup(3);
      assert.equal("MariHacks", group['0']);
      assert.equal("All Levels", group['1']);
      assert.equal(1, group['3']);
    });
    it('outputs a group', async () => {
      let group = await factory.getGroup(1);
      assert.equal(group[0], "SSMU");
      assert.equal(group[1], "For The Students");
      assert.equal(group[3], 2);
    });
    it('registers to a group', async () => {
      await factory.registerGroup(2, {
        from: accounts[1]
      });

      let user = await factory.getUser(accounts[1]);
      assert.equal(user['3'].length, 3);
    });
    it('register to a group with invalid parameters', async () => {
      try {
        await factory.registerGroup("hello", {
          from: accounts[1]
        });
      } catch (error) {
        assert.ok(error);
        return;
      }
    });
    it('register to an invalid group', async () => {
      try {
        await factory.registerGroup(6, {
          from: accounts[1]
        });
      } catch (error) {
        assert.ok(error);
        return;
      }
    });
    it('register to a concurrent group', async () => {
      try {
        await factory.registerGroup(1, {
          from: accounts[1]
        });
      } catch (error) {
        assert.ok(error);
        return;
      }
    });
    it('leave to a non-registered group', async () => {
      try {
        await factory.leaveGroup(2, 0, 133, {
          from: accounts[1]
        });
      } catch (error) {
        assert.ok(error);
        return;
      }
    });
    it('leave to a group with invalid group ID', async () => {
      try {
        await factory.leaveGroup(1, 0, "do not leave", {
          from: accounts[1]
        });
      } catch (error) {
        assert.ok(error);
        return;
      }
    });
    it('leave to a non-existent group', async () => {
      try {
        await factory.leaveGroup(3, 0, 2, {
          from: accounts[1]
        });
      } catch (error) {
        assert.ok(error);
        return;
      }
    });
    it('leave to the default group', async () => {
      try {
        await factory.leaveGroup(0, 1, 1, {
          from: accounts[1]
        });
      } catch (error) {
        assert.ok(error);
        return;
      }
    });
 });
});
