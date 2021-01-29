// const Vote = artifacts.require("./Vote.sol");

// contract("Vote", accounts => {
//   let voteInstance;
//   before(async() => {
//     voteInstance = await Vote.deployed();
//   });
//   describe('Admin tests', async () =>{
//     //write tests here
//   });
// });
const VoteFactory = artifacts.require("./VoteFactory.sol");
const Vote = artifacts.require("./Vote.sol");

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
        petitionAddress = (await factory.getDeployedVotes())[1];
        petition = await Vote.at(petitionAddress);

    });

    describe('Election', async () =>{
        it('only admin can edit the election', async() => {
            const manager = await election.manager();
            assert.equal(accounts[0],manager);
            assert.notEqual(manager, accounts[1]);
        });
        it('admin can add an election and output it', async() => {
            await election.editElection("sample", 1, 2, "description", [1,2,3]);
            const currentElection = await (election.currentElection());
            const expectedElection = {
                title: "sample",
                startDate: 1,
                endDate: 2,
                description: "description",
                numVotes: 0,
            };
            assert.equal(expectedElection.title, currentElection['0']);
            assert.equal(expectedElection.startDate, (currentElection['1'])['words'][0]);
            assert.equal(expectedElection.endDate, (currentElection['2'])['words'][0]);
            assert.equal(expectedElection.description, (currentElection['3']));
            assert.equal(expectedElection.numVotes, (currentElection['4'])['words'][0]);
        });

    });

    describe('Petition', async () =>{
        it('only admin can edit the petition', async() => {
            const manager = await petition.manager();
            assert.equal(accounts[0],manager);
            assert.notEqual(manager, accounts[1]);
        });
        it('admin can add a petition and output it', async() => {
            await petition.editPetition("sample", 1, 2, "description", [1,2,3]);
            const currentPetition = await (petition.currentPetition());
            const expectedPetition = {
                title: "sample",
                startDate: 1,
                endDate: 2,
                description: "description",
                numVotes: 0,
            };
            assert.equal(expectedPetition.title, currentPetition['0']);
            assert.equal(expectedPetition.startDate, (currentPetition['1'])['words'][0]);
            assert.equal(expectedPetition.endDate, (currentPetition['2'])['words'][0]);
            assert.equal(expectedPetition.description, (currentPetition['3']));
            assert.equal(expectedPetition.numVotes, (currentPetition['4'])['words'][0]);
        });

    });
});