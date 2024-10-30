# QA Libre Challenge

## Table of Contents

- [Requirements](#requirements)
  - [Test Suite Structure](#test-suite-structure)
  - [Expectations](#expectations)
- [Project Information](#project-information)
  - [Environment Setup](#environment-setup)
  - [Smart Contract Tests](#smart-contract-tests)
  - [Example ERC20 Token](#example-erc20-token)
- [Local Environment Setup](#local-environment-setup)
  - [Run with Docker Compose](#run-with-docker-compose)
  - [Run with Node.js](#run-with-nodejs)

## Requirements

Create a comprehensive suite of end-to-end (e2e) tests for a decentralized application (DApp) that interacts with a smart contract on the Sepolia Testnet. The DApp consists of a smart contract and a Next.js frontend application.

### Test Suite Structure

Organize the e2e tests into feature files within the `e2e` folder, following the Gherkin syntax for behavior-driven development (BDD). Use the following existing feature files as a basis:

- `01-app-access.feature`
- `02-search-erc20-token.feature`
- `03-deposit-erc20-token.feature`

### Expectations

- Test the connection to the user's wallet (e.g., MetaMask)
- Verify that the ERC20 token address input field works correctly
- Test the display of the current token balance
- Verify the deposit amount input field functions properly
- Test the token transfer process from the wallet to the smart contract
- [Bonus] Verify the correct display of deposit history
- [Bonus+] Execute the e2e tests using a GitHub Actions workflow

## Project Information

This is a Next.js project that uses the Web3 library to interact with the MetaMask wallet and perform actions by calling smart contract methods.

To use this application, you need to:

1. Install MetaMask on your browser ([Download MetaMask](https://metamask.io/download/))
2. Connect MetaMask to the Sepolia testnet

### Environment Setup

- Set up a testing environment that can interact with the Sepolia Testnet
- Ensure the ability to deploy and interact with smart contracts programmatically
- Configure a headless browser for frontend testing

### Smart Contract Tests

- Test the deployment of the DepositContract
- Verify the contract's address and ABI are correct
- Test the deposit function with various valid and invalid inputs
- Verify that the Deposit event is emitted correctly

### Example ERC20 Token

The application allows interaction with ERC20 tokens deployed on the Sepolia testnet. For testing purposes, you can use our example ERC20 token deployed at:

```text
0x9982f9A3bA28c34aD03737745d956EC0668ea440
```

By selecting this token, the application will allow you to mint 100 tokens at a time.

## Local Environment Setup

### Run with Docker Compose

1. Open a terminal at the root path of this project
2. Execute the following command:

   ```bash
   docker-compose up -d
   ```

3. Access the application at [http://localhost:3000](http://localhost:3000) using your browser

### Run app with Node.js

1. Open a terminal at the root path of this project
2. Execute the following commands:

   ```bash
   npm install
   npm run build && npm run start
   ```

3. Access the application at [http://localhost:3000](http://localhost:3000) using your browser


### Run e2e-test with Node.js

1. Open a terminal at the root path of this project
2. cd into e2e folder
2. Execute the following commands:

   ```bash
   npm install
   npm run wdio
   ```