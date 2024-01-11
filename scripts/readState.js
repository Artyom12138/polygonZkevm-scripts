const { ethers } = require("ethers");
const config = require("./config.json");
const fs = require("fs");

async function init() {
  const tmp = fs.readFileSync(__dirname + '/PolygonZkEVM.json', 'utf-8');
  const artifact = JSON.parse(tmp);
  const provider = new ethers.JsonRpcProvider(config.PROVIDER);
  const signer = new ethers.Wallet(config.PRIVATE_KEY, provider);
  const contractInstance = new ethers.Contract(config.CONTRACT_ADDRESS, artifact.abi, signer);
  return { contractAddress: config.CONTRACT_ADDRESS, contractInstance };
}

async function admin() {
  const { contractInstance } = await init();
  const res = await contractInstance.admin();
  console.log(`Admin is ${res}`);
}

async function batchFee() {
  const { contractInstance } = await init();
  const res = await contractInstance.batchFee();
  console.log(`BatchFee is ${res}`);
}

async function batchNumToStateRoot(batchNum) {
  const { contractInstance } = await init();
  const res = await contractInstance.batchNumToStateRoot(batchNum);
  console.log(`BatchNumToStateRoot is ${res}`);
}

async function bridgeAddress() {
  const { contractInstance } = await init();
  const res = await contractInstance.bridgeAddress();
  console.log(`BridgeAddress is ${res}`);
}

async function calculateRewardPerBatch() {
  const { contractInstance } = await init();
  const res = await contractInstance.calculateRewardPerBatch();
  console.log(`RewardPerBatch is ${res}`);
}

async function chainID() {
  const { contractInstance } = await init();
  const res = await contractInstance.chainID();
  console.log(`ChainID is ${res}`);
}

async function checkStateRootInsidePrime(newStateRoot) {
  const { contractInstance } = await init();
  const res = await contractInstance.checkStateRootInsidePrime(newStateRoot);
  console.log(`StateRootInsidePrime is ${res}`);
}

async function forceBatchTimeout() {
  const { contractInstance } = await init();
  const res = await contractInstance.forceBatchTimeout();
  console.log(`ForceBatchTimeout is ${res}`);
}

async function forkID() {
  const { contractInstance } = await init();
  const res = await contractInstance.forkID();
  console.log(`ForkID is ${res}`);
}

async function forkID() {
  const { contractInstance } = await init();
  const res = await contractInstance.forkID();
  console.log(`ForkID is ${res}`);
}

async function getForcedBatchFee() {
  const { contractInstance } = await init();
  const res = await contractInstance.getForcedBatchFee();
  console.log(`ForcedBatchFee is ${res}`);
}

async function getInputSnarkBytes(initNumBatch, finalNewBatch, newLocalExitRoot, oldStateRoot, newStateRoot) {
  const { contractInstance } = await init();
  const res = await contractInstance.getInputSnarkBytes(initNumBatch, finalNewBatch, newLocalExitRoot, oldStateRoot, newStateRoot);
  console.log(`InputSnarkBytes is ${res}`);
}

async function getLastVerifiedBatch() {
  const { contractInstance } = await init();
  const res = await contractInstance.getLastVerifiedBatch();
  console.log(`LastVerifiedBatch is ${res}`);
}

async function globalExitRootManager() {
  const { contractInstance } = await init();
  const res = await contractInstance.globalExitRootManager();
  console.log(`GlobalExitRootManager is ${res}`);
}

async function isEmergencyState() {
  const { contractInstance } = await init();
  const res = await contractInstance.isEmergencyState();
  console.log(`EmergencyState is ${res}`);
}

async function isForcedBatchDisallowed() {
  const { contractInstance } = await init();
  const res = await contractInstance.isForcedBatchDisallowed();
  console.log(`ForcedBatchDisallowed is ${res}`);
}

async function isPendingStateConsolidable(pendingStateNum) {
  const { contractInstance } = await init();
  const res = await contractInstance.isPendingStateConsolidable(pendingStateNum);
  console.log(`PendingStateConsolidable is ${res}`);
}

async function lastBatchSequenced() {
  const { contractInstance } = await init();
  const res = await contractInstance.lastBatchSequenced();
  console.log(`LastBatchSequenced is ${res}`);
}

async function lastForceBatch() {
  const { contractInstance } = await init();
  const res = await contractInstance.lastForceBatch();
  console.log(`LastForceBatch is ${res}`);
}

async function lastForceBatchSequenced() {
  const { contractInstance } = await init();
  const res = await contractInstance.lastForceBatchSequenced();
  console.log(`LastForceBatchSequenced is ${res}`);
}

async function lastPendingState() {
  const { contractInstance } = await init();
  const res = await contractInstance.lastPendingState();
  console.log(`LastPendingState is ${res}`);
}

async function lastPendingStateConsolidated() {
  const { contractInstance } = await init();
  const res = await contractInstance.lastPendingStateConsolidated();
  console.log(`LastPendingStateConsolidated is ${res}`);
}

async function lastTimestamp() {
  const { contractInstance } = await init();
  const res = await contractInstance.lastTimestamp();
  console.log(`LastTimestamp is ${res}`);
}

async function lastVerifiedBatch() {
  const { contractInstance } = await init();
  const res = await contractInstance.lastVerifiedBatch();
  console.log(`LastVerifiedBatch is ${res}`);
}

async function matic() {
  const { contractInstance } = await init();
  const res = await contractInstance.matic();
  console.log(`Matic is ${res}`);
}

async function multiplierBatchFee() {
  const { contractInstance } = await init();
  const res = await contractInstance.multiplierBatchFee();
  console.log(`MultiplierBatchFee is ${res}`);
}

async function networkName() {
  const { contractInstance } = await init();
  const res = await contractInstance.networkName();
  console.log(`NetworkName is ${res}`);
}

async function owner() {
  const { contractInstance } = await init();
  const res = await contractInstance.owner();
  console.log(`Owner is ${res}`);
}

async function pendingAdmin() {
  const { contractInstance } = await init();
  const res = await contractInstance.pendingAdmin();
  console.log(`PendingAdmin is ${res}`);
}

async function pendingStateTimeout() {
  const { contractInstance } = await init();
  const res = await contractInstance.pendingStateTimeout();
  console.log(`PendingStateTimeout is ${res}`);
}

async function pendingStateTransitions(index) {
  const { contractInstance } = await init();
  const res = await contractInstance.pendingStateTransitions(index);
  const [timestamp, lastVerifiedBatch, exitRoot, stateRoot] = res;
  console.log(`PendingStateTransitions:
    timestamp: ${timestamp}
    lastVerifiedBatch: ${lastVerifiedBatch}
    exitRoot: ${exitRoot}
    stateRoot: ${stateRoot}`);
}

async function rollupVerifier() {
  const { contractInstance } = await init();
  const res = await contractInstance.rollupVerifier();
  console.log(`RollupVerifier is ${res}`);
}

async function sequencedBatches(index) {
  const { contractInstance } = await init();
  const res = await contractInstance.sequencedBatches(index);
  const [accInputHash, sequencedTimestamp, previousLastBatchSequenced] = res;
  console.log(`SequencedBatches:
    accInputHash: ${accInputHash}
    sequencedTimestamp: ${sequencedTimestamp}
    previousLastBatchSequenced: ${previousLastBatchSequenced}`);
}

async function trustedAggregator() {
  const { contractInstance } = await init();
  const res = await contractInstance.trustedAggregator();
  console.log(`TrustedAggregator is ${res}`);
}

async function trustedAggregatorTimeout() {
  const { contractInstance } = await init();
  const res = await contractInstance.trustedAggregatorTimeout();
  console.log(`TrustedAggregatorTimeout is ${res}`);
}

async function trustedSequencer() {
  const { contractInstance } = await init();
  const res = await contractInstance.trustedSequencer();
  console.log(`TrustedSequencer is ${res}`);
}

async function trustedSequencerURL() {
  const { contractInstance } = await init();
  const res = await contractInstance.trustedSequencerURL();
  console.log(`TrustedSequencerURL is ${res}`);
}

async function verifyBatchTimeTarget() {
  const { contractInstance } = await init();
  const res = await contractInstance.verifyBatchTimeTarget();
  console.log(`VerifyBatchTimeTarget is ${res}`);
}



async function main() {
  const command = process.argv[2];
  const params = process.argv.slice(3);
  switch (command) {
    case "admin":
      await admin();
      break;
    case "batchFee":
      await batchFee();
      break;
    case "batchNumToStateRoot":
      if (params.length != 1) {
        console.log("Please provide the batchNum as a parameter.");
      } else {
        await batchNumToStateRoot(...params);
      }
      break;
    case "bridgeAddress":
      await bridgeAddress();
      break;
    case "calculateRewardPerBatch":
      await calculateRewardPerBatch();
      break;
    case "chainID":
      await chainID();
      break;
    case "checkStateRootInsidePrime":
      if (params.length != 1) {
        console.log("Please provide the newStateRoot as a parameter.");
      } else {
        await checkStateRootInsidePrime(...params);
      }
      break;
    case "forceBatchTimeout":
      await forceBatchTimeout();
      break;
    case "forkID":
      await forkID();
      break;
    case "getForcedBatchFee":
      await getForcedBatchFee();
      break;
    case "getInputSnarkBytes":
      if (params.length != 5) {
        console.log("Please provide the initNumBatch, finalNewBatch, newLocalExitRoot, oldStateRoot, newStateRoot as parameters.");
      } else {
        await getInputSnarkBytes(...params);
      }
      break;
    case "getLastVerifiedBatch":
      await getLastVerifiedBatch();
      break;
    case "globalExitRootManager":
      await globalExitRootManager();
      break;
    case "isEmergencyState":
      await isEmergencyState();
      break;
    case "isForcedBatchDisallowed":
      await isForcedBatchDisallowed();
      break;
    case "isPendingStateConsolidable":
      if (params.length != 1) {
        console.log("Please provide the pendingStateNum as a parameter.");
      } else {
        await isPendingStateConsolidable(...params);
      }
      break;
    case "lastBatchSequenced":
      await lastBatchSequenced();
      break;
    case "lastForceBatch":
      await lastForceBatch();
      break;
    case "lastForceBatchSequenced":
      await lastForceBatchSequenced();
      break;
    case "lastPendingState":
      await lastPendingState();
      break;
    case "lastPendingStateConsolidated":
      await lastPendingStateConsolidated();
      break;
    case "lastTimestamp":
      await lastTimestamp();
      break;
    case "lastVerifiedBatch":
      await lastVerifiedBatch();
      break;
    case "matic":
      await matic();
      break;
    case "multiplierBatchFee":
      await multiplierBatchFee();
      break;
    case "networkName":
      await networkName();
      break;
    case "owner":
      await owner();
      break;
    case "pendingAdmin":
      await pendingAdmin();
      break;
    case "pendingStateTimeout":
      await pendingStateTimeout();
      break;
    case "pendingStateTransitions":
      if (params.length != 1) {
        console.log("Please provide the index as a parameter.");
      } else {
        await pendingStateTransitions(...params);
      }
      break;
    case "rollupVerifier":
      await rollupVerifier();
      break;
    case "sequencedBatches":
      if (params.length != 1) {
        console.log("Please provide the index as a parameter.");
      } else {
        await sequencedBatches(...params);
      }
      break;
    case "trustedAggregator":
      await trustedAggregator();
      break;
    case "trustedAggregatorTimeout":
      await trustedAggregatorTimeout();
      break;
    case "trustedSequencer":
      await trustedSequencer();
      break;
    case "trustedSequencerURL":
      await trustedSequencerURL();
      break;
    case "verifyBatchTimeTarget":
      await verifyBatchTimeTarget();
      break;
    default:
      console.log("Invalid command");
      break;
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });