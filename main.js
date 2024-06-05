const path = require('node:path');
const fs = require('node:fs');
const { ethers } = require('ethers');

//-------------------- RPC AND GAS PRICE CONFIG --------------------//

const MAX_FEE_PER_GAS = ethers.parseUnits('5.1', 'gwei');
const MAX_PRIORITY_FEE_PER_GAS = ethers.parseUnits('4.1', 'gwei');

const RPC_URLS = [
  'https://rpc.blast.io',
  'https://rpc.ankr.com/blast',
];

//-------------------- RPC AND GAS PRICE CONFIG --------------------//

const MINT_CONTRACT = '0x0cd7e55f61D393866db74afd6fdf49D81b82b9Be';
const MINT_CONTRACT_ABI = JSON.parse('[{"inputs":[{"internalType":"address","name":"nonfungiblePositionManager","type":"address"},{"internalType":"address","name":"weth","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyLinked","type":"error"},{"inputs":[],"name":"CannotLink","type":"error"},{"inputs":[],"name":"DepositAlreadyExists","type":"error"},{"inputs":[],"name":"InsufficientAmountForMint","type":"error"},{"inputs":[],"name":"InvalidMinter","type":"error"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"InvalidStage","type":"error"},{"inputs":[],"name":"LiquidityLocked","type":"error"},{"inputs":[],"name":"MaxMintExceeded","type":"error"},{"inputs":[],"name":"NotLinked","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"SenderNotBase","type":"error"},{"inputs":[],"name":"SenderNotDeployer","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"isApproved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"Bid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"Bought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"}],"name":"CancelBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"CancelOffer","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"idX","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"idY","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"exchangeFee","type":"uint256"}],"name":"Exchange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"minPrice","type":"uint256"}],"name":"Offer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"bool","name":"lockStatus","type":"bool"}],"name":"UpdateLockState","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToNumMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseERC20","outputs":[{"internalType":"address","name":"base","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectFees","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"createLpPosition","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPhase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"extendLiquidityLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"floorLockDeposit","outputs":[{"internalType":"uint256","name":"positionId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftOwner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityLockedUntil","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"begin","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"lockedIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"phase","type":"uint256"}],"internalType":"struct SignatureWhitelist.Whitelist","name":"_whitelist","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct SignatureWhitelist.Signature","name":"_signature","type":"tuple"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"result","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nonfungiblePositionManager","outputs":[{"internalType":"contract INonfungiblePositionManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"begin","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"ownedIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"ownerAt","outputs":[{"internalType":"address","name":"result","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"result","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pullOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"phase","type":"uint256"}],"name":"setPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"supplyDeposit","outputs":[{"internalType":"uint256","name":"positionId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"supplyMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"result","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"result","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"bool","name":"lock","type":"bool"}],"name":"updateLockState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
const MINT_PRICE = 69000000000000000n;
const MINT_START_TIME = 1717610400000 - 60000;
let resolveMintStart;
let waitForMintStart = new Promise((resolve) => resolveMintStart = resolve);
let watchCurrentPhaseIntervalId = setInterval(watchCurrentPhase, 1000);

start();

function start() {
  if (MAX_PRIORITY_FEE_PER_GAS > MAX_FEE_PER_GAS) {
    console.error('\x1b[31mMAX_PRIORITY_FEE_PER_GAS cannot be greater than MAX_FEE_PER_GAS\x1b[0m');
    return;
  }

  const wallets = fs.readFileSync(path.resolve(__dirname, 'wallets.txt'), 'utf8').split(/\r?\n/);
  let walletsIsEmpty = true;

  for (let line of wallets) {
    line = line.trim();

    if (!line || line.startsWith('#')) continue;

    walletsIsEmpty = false;

    const [privateKey, quantity] = line.split(';');

    prepareForMint(privateKey, parseInt(quantity, 10) || 1)
      .catch((err) => {
        console.error('\x1b[31m' + err.message + '\x1b[0m');
      });
  }

  if (walletsIsEmpty) {
    console.error('\x1b[31mNo wallets\x1b[0m');
  }
}

async function prepareForMint(privateKey, quantity) {
  const provider = new ethers.JsonRpcProvider(RPC_URLS[Math.floor(Math.random() * RPC_URLS.length)]);
  const wallet = new ethers.Wallet(privateKey, provider);
  const balance = await provider.getBalance(wallet.address);
  const cost = MINT_PRICE * BigInt(quantity);

  if (balance < cost) {
    throw new Error(`[${wallet.address}] Insufficient ETH balance for ${quantity} NFT`);
  }

  console.log(`[${wallet.address}] Ready and waiting for mint to start...`);

  await waitForMintStart;

  for (let attempts = 9; attempts >= 0; attempts--) {
    try {
      await mintNft(wallet, quantity, cost);

      break;
    } catch (e) {
      if (attempts) {
        console.error('\x1b[31m' + e.message + '\x1b[0m');
        console.error(`\x1b[31m[${wallet.address}] Mint error. Try again in 1 sec \x1b[0m`);

        await sleep(1000);

        continue;
      }

      throw e;
    }
  }
}

async function mintNft(wallet, quantity, cost) {
  const contract = new ethers.Contract(MINT_CONTRACT, MINT_CONTRACT_ABI, wallet);
  const rawTx = await contract.publicMint.populateTransaction(quantity, {
    value: cost,
    maxFeePerGas: MAX_FEE_PER_GAS,
    maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,
  });
  const populatedTx = await wallet.populateTransaction(rawTx);
  const signedTx = await wallet.signTransaction(populatedTx);

  for (let attempts = 2; attempts >= 0; attempts--) {
    try {
      const transaction = await wallet.provider.broadcastTransaction(signedTx);

      await transaction.wait(1, 30_000);

      console.log(`\x1b[32m[${wallet.address}] ${quantity} NFT minted successfully\x1b[0m`);

      break;
    } catch (e) {
      if (attempts) {
        console.error('\x1b[31m' + e.message + '\x1b[0m');
        console.error(`\x1b[31m[${wallet.address}] Mint error. Try again in 1 sec \x1b[0m`);

        await sleep(1000);

        continue;
      }

      throw e;
    }
  }
}

async function watchCurrentPhase() {
  if (Date.now() < MINT_START_TIME) return;

  const provider = new ethers.JsonRpcProvider(RPC_URLS[Math.floor(Math.random() * RPC_URLS.length)]);
  const contract = new ethers.Contract(MINT_CONTRACT, MINT_CONTRACT_ABI, provider);

  try {
    const currentPhase = await contract.currentPhase.staticCall();

    if (currentPhase === 3n) {
      resolveMintStart();
      clearInterval(watchCurrentPhaseIntervalId);
    }
  } catch (e) {
    console.error('\x1b[31m' + e.message + '\x1b[0m');
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
