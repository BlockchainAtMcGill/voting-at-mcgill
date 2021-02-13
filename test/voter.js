const VoteFactory = artifacts.require("./VoteFactory.sol");
const Vote = artifacts.require("./Vote.sol");

contract("VoteFactory", accounts => {
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
    petitionAddress = (await factory.getDeployedVotes())[1];
    petition = await Vote.at(petitionAddress);

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
    })
  
  })
});

