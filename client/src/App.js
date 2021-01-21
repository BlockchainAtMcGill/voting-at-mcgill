import React, { Component } from "react";
import VoteFactoryContract from "./contracts/VoteFactory.json";
import getWeb3 from "./getWeb3";
import { General } from './components/general';
import { Header } from './components/header'
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

class App extends Component {
  state = { testValue: '', web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = VoteFactoryContract.networks[networkId];
      const instance = new web3.eth.Contract(
        VoteFactoryContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;
    // Get the value from the contract to prove it worked.
//uncomment for testing purposes
    // await contract.methods.createVote(0).send({
    //   from: accounts[0]
    // });

    const response = await contract.methods.getDeployedVotes().call();
    // Update state with the result.
    this.setState({ testValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Header></Header>
        <br></br>
        <p> uncomment "runExample" above for testing purposes</p>
        <div>{this.state.testValue}</div>
        <General></General>
      </div>
    );
  }
}

export default App;
