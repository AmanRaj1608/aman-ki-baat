---
title: Ethereum India Fellowship 2021
abstract: Documenting my journey with blockchain started with Devfolio Eth India Fellowship.
date: 1621635837719
---

Also at [Notion](https://www.notion.so/amanraj1608/EIF-2-0-Aman-Raj-bb37eb3ba1b54fc186fa7dfd4b5599be)

This is my journey with blockchain started due to [Devfolio Eth India Fellowship](https://devfolio.co/blog/devfolio-ethereum-india-fellowship-2-0-is-here/).

EthIndia fellowship is an 8-week mentor-led format, to help Web2 developers make the transition to Web3! help the next generation of developer talent in India to discover, learn, and engage with Ethereum. There were around 2k+ applications from which 30 were selected.

Here, I have combined all of my learning during the fellowship ↓ ✨

We started with an introductory session, where we discussed the plan and course layout for the fellowship and then we were assigned in a team of 4 students to one mentor. So for the first 4 weeks, we were supposed to get one assignment at the start of the week and we have to learn and complete that by end of the weekend.

# Week 1: Running a blockchain

### **Objective:**

The goal of this week was to give some familiarity with interacting with an Ethereum node. Even though we might use a service like [infura](https://infura.io/) to abstract node interactions away for most projects, it’s valuable to understand what’s going on under the hood when debugging contracts.

We used goerli testnet to

1. run and sync a goerli geth node
2. manage an account and send transactions with your node
3. use your node to retrieve data from goerli Ethereum
4. (optional challenge) learn about merkle trees

### 1: Running geth on [goerli](https://goerli.net/)

I downloaded and installed the [geth client](https://geth.ethereum.org/docs/install-and-build/installing-geth) and installed it on my Win 10 PC. After installation, we can interact with our terminal. We can run un geth with the RPC API open:

`geth --goerli --rpc --rpcapi="eth,web3,personal,web3"`

So as we are now one of the nodes of the goerli testnet we are syncing all data available on other nodes running. For me, it took around 20hrs to sync all the data.

After syncing finished we are one of the nodes of the Ethereum blockchain (goerli testent). Now we can interact with it.

### 2. Sending Transactions

In this task had to use interface with the newly synced Geth Node, using one of the several libraries available for this, I chose to do it using [web3js](https://web3js.readthedocs.io/en/v1.2.8/index.html) with Node.

I created a new Ethereum wallet, gave myself from Ethereum on the Testnet, used the management API to sign the message, and sent a transaction to another public address. Basically we figured out how to write data to the blockchain.

### 3. Reading data

In this module, we had to

- Retrieve the first 128 block hashes and put them in a text file

This was easy to do with JavaScipt. I wrote a script loop through all

- Next, we were supposed to find the first block on the goerli node to which a smart contract is deployed to.

This was quite complicated. Here's the solution.

```jsx
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545/");

const all_128_block_hash = async () => {
    for (let i = 0; i < 129; i++) {
        const block = await web3.eth.getBlock(i);
        console.log(`block ${i} hash: ${block.hash}`);
    }
}
all_128_block_hash();

const find_first_smartcontract_block = async () {
	var value = 0;
	while (value !== null) {
	  var toHash = web3.eth.getBlock(value).transactions;
	  if (toHash.length == 0) {
	    value++;
	  } else {
	    var getTxHash = web3.eth.getTransactionReceipt(toHash[0]);
	    if (getTxHash.to == null) {
	      console.log(value);
	      console.log(tx);
	      value = null;
    } else {
      value++;
    }
  }
}
find_first_smartcontract_block();
```

### Summary [What I learned this week]

So, I learned about testnets, there are many more like rposten, rinkeby, kovan. We used goerli because it’s relatively small and quick to sync.

I learned about the difference between RPC and IPC. [Read here](https://stackoverflow.com/questions/2161674/is-there-a-difference-between-rpc-and-ipc)

Reading and writing data to the a local RPC running node.

# Week 2: Smart contract development

### Objective

This week we learned about the intricacies of smart contracts and the Solidity programming language.

### 1: Introduction to Remix IDE & Solidity

Remix IDE is an open-source web and desktop application. It fosters a fast development cycle and has a rich set of plugins with intuitive GUIs. The remix is used for the entire journey of contract development as well as being a playground for learning and teaching Ethereum.

I went through basic [guide](https://remix-learneth-plugin.readthedocs.io/en/latest/ui.html) of Remix.

Then I went to the [Crypto Zombies course](https://cryptozombies.io/en/course/). I solved the first 3 courses there. It was super helpful, I got to know how we can write solidity and event compile, deploy and use it with javascript.

### 2: Exploring Remix

In this task we learned about compiling, deployment and write unit test on Remix.

So on the I easily compiled one contract and then I explored the testing part.

I used the [docs](https://remix-ide.readthedocs.io/en/latest/unittesting.html) to learn and write test files. Using Unit Testing plugin then tested the contract.

### 3: Using Web3.js or ethers.js scripts

Here I explored both web3.js and ether.js. I found Web.js community to big and moved ahead with it. We learned how to interact with using contract, calling functions using web3.

### 4: Create your own ERC20 token

In this task we were supposed to create our own ERC20 token on a testnet, then create an exchange for your token with Uniswap so that anyone can buy your token with Eth.

I explored and learned about the ERC20 tokens and industry standard. I wrote my own token and named it AMR. I created a pool on Uniswap of ETH to AMR on goerli testnet. You can checkout here-
`Pool created on UniSwap ETH -> AMR (AmanRaj1608)`

![](https://user-images.githubusercontent.com/42104907/119202453-70887900-baae-11eb-8a3f-ed7c6d94461a.png)

`https://goerli.etherscan.io/tx/0xd95d32a867efdcbb0044a27f6f05edf88cb96a804360f219bb2430ce926d75f1`

### 5. DIY smart contract

Here we were expected to write a smart contract that will send all of its balance to a pre-set address if the owner of that contract has not called a still_alive function on the contract in the last 10 blocks.

Here I learned about the SELFDESTRUCT opcode uses negative gas because the operation frees up space on the blockchain by clearing all of the contract's data.

I wrote the smart contract that keep track that 10 block not passed adn if 10 block passed use selfdestruct to send all contract's current balance to address.

This “Dead-man’s switch” assignment was best way to reinforce our knowledge of solidity.

### 6. Create a simple multi-sig wallet

In simple multi-sig wallets, we require two or more private keys to sign and send a transaction.
I learned how these works and tried to write a smart contract on this.

### Summary [What I learned this week]

This week was intense, I learned about Solidity language and Remix IDE to compile and deploy contracts. Used web3.js to interact with smart contracts deployed on testnet. I created my own ERC20 token.

I also tried to interact with contracts deployed on the mainnet. We can call read-only functions deployed on the mainnet without a gas fee.

After finishing all these I started to learn more about web3.js. I tried the truffle tool which is an alternative to deploying using Remix.

# Week 3: Modern Eth Developement & getting started with DeFi

### Objective

This week we had to start developing with the development environment that's fast becoming essential for the modern Ethereum developer. Later we deep-dived into the most popular use case of Ethereum out there (Defi) and putting our skills to use by building a basic decentralized application end-to-end.

### 1. Exploring Hardhat

So as I used Remix IDE and truffle last week, Hardhat is also a development environment to compile, deploy, test, and debug your Ethereum software. Some features to be noted -

- Automate the recurring tasks like compiling, running, and testing smart contracts at the very core.
- Hardhat comes built-in with Hardhat Network, a local Ethereum network designed for development.
- console.log() and explicit error messages for debugging.

I completed the [tutorial](https://hardhat.org/tutorial/) and was able to understand all of the features it offers. Used hardhat to deploy on different testnets.
Deployed the same contract on Kovan, Rinkeby, Goerli, and Ropsten. The deployment process is the same in all we just have to configure the hardhat `config.js` with networks and hardhat handles everything.

```
Ropsten 0x544f5086fd0006582f05ec1f298bfb261aa07244
Rinkeby 0xf6071df658a7a70c3581d23162ca95d282c869d0
Goerli 0x586fac8b05e524e23b0429e31fe6fc3fed9164db
Kovan 0x762c9df60bddff3d8affc4151ee7c0b63af3944d
```

Scaffold.eth integrates with Hardhat to provide a frontend to interact with our smart contract. I tried installing but it was giving errors to all other fellow mates too, so I moved on to the next task.

### 2. Dive into DeFi

In this module, we explored Decentralized finance. With a $39 billion worth of value locked in Ethereum smart contracts, decentralized finance has emerged as the most active sector in the blockchain space, with a wide range of use cases for individuals, developers, and institutions.

I watched few videos from YouTube and read few blogs on Defi.

- [\*Defi Pulse](https://defipulse.com/) is a site where you can find the latest analytics and rankings of Defi protocols.\*
- [\*DeFiprime.com](http://defiprime.com/) is a media outlet and analytical services provider for the Defi community.\*

In this module, we were assigned a Defi to which we needed to research, explore and present to everyone on weekend.
All the Defi protocols/projects were:

1. [Derivatives](https://defiprime.com/derivatives) + [Insurance](https://defiprime.com/insurance) (Synthetix, Opyn, Yearn.finance, Nexus Mutual)
2. [Decentralised Exchanges](https://defiprime.com/exchanges#ethereum) (Uniswap, Curve, Balancer, 1inch.exchange)
3. [Lending & Borrowing](https://defiprime.com/decentralized-lending) + [Stablecoins](https://defiprime.com/stablecoins) (AAVE, Compound, Maker, DefiDollar)
4. [Asset Mangment Tools](https://defiprime.com/assets-management-tools#ethereum) (Instadapp, Zapper, Furucombo, Set Protocol)
5. [Prediction Markets](https://defiprime.com/prediction-markets) + [Alternate Savings](https://defiprime.com/alternative-savings)/[Payments](https://defiprime.com/payments) (Augur, Pooltogether, Superfluid, Polymarket)

So I got assigned to Instadapp, I went through the project and learned how they build their EthIndia hackathon project into a $2.4M funded startup.

I made one presentation - [here](notion://www.notion.so/amanraj1608/d5c750eb4226471fba8b6406985fb79a?v=02c84a5233d5464ca473d019eafa3623&p=2b69d11f5ad14b118180c600b315aba0)

### Summary [What I learned this week]

This week I learned about new development tool hardhat. It was quite similar to truffle but have some advantage over it. I researched Instadapp a lot. I got familiar with concepts like flash loans, arbitrage and how instadapp helps web2 developers to use their platfor to take advantage of it.

I also learned a lot when other fellow mates presented and told about their protocols.

# Week 4: Making Defi product

From this week we focused more on learning different protocols. Every week sessions were conducted. In these sessions speakers tell about what they do and and speaks about protocols. They also cleared our doubts and curiosity during the session.

This week we had three sessions on:

- Oracles by Patrick Collins
- Meta transaction by Divya, and Sachin from Biconomy
- L2 Scaling by Pranav from Matic

This week I also teamed up with one of my cohort teammates to create a Defi project named [Crypto PortFolio](https://github.com/AmanRaj1608/crypto-portfolio) submitted in [EtherPunk](https://devfolio.co/submissions/cryptoportfolio-along-with-safer-loans-1b0b)

# Week 5: Peer Learning

This week was a break from learning as we focused more on polishing what we have already learned.

We had sessions where track 2 fellows presented on what they are working on.
This week I explored more Graph Protocol.

# Week 6: Decentralized Storage

This week we had sessions on storage solutions.

The first session was on IPFS by Protocol Labs, Used IPFS client cli and Desktop version to deploy an image. Learned about Pinata cloud to store things permanently. Everyone's uploaded an image and all of ours did was then compiled and stored in this [HTML file](https://ipfs.io/ipfs/QmdESoQEiji3xhkbrrGbpZc3HZf3xgVbDQwAmjgPPzpkTp?filename=class.html).

Later had sessions on Ceramic, Fleek too. Fleek is awesome tool. It's decentralized firebase.

# Week 7: Storage and NFT

This week we followed the last week topic. Learned about Filecoin. Created a react app and deployed on fleek.

Later this week we get explored to NFT.

### Got internship in Polygon (Matic Network) 🥳

This week I applied to 2-3 blockchain companies for an internship. Cleared the interview and assignment task and got an offer from Polygon.

# Week 8: NFT

This week we had sessions from [James](https://medium.com/metacartel/meet-james-young-captain-dao-2be5c5726b89) , he talked about NFT's and cleared out doubts.

Now as we had learned a lot in blockchain, we had to build a Final project.

# Final Project

[Decentralized Blog](https://www.notion.so/Decentralized-Blog-b21771b7bfeb4c04bf38eb10fbc14235)

[Decentralized Clubhouse](https://www.notion.so/Decentralized-Clubhouse-324b3e1ea4fe4dadbc8c4276ae20391f)

[Decentralized Bug Bounty](https://www.notion.so/Decentralized-Bug-Bounty-077a3575f2e1451fb13458a8c157a100)
