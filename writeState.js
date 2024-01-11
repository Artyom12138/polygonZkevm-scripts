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

async function acceptAdminRole() {
    const { contractInstance } = await init();
    const tx = await contractInstance.acceptAdminRole();
    await tx.wait();
    console.log(`Successful acceptAdminRole!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function activateEmergencyState(sequencedBatchNum) {
    const { contractInstance } = await init();
    const tx = await contractInstance.activateEmergencyState(sequencedBatchNum);
    await tx.wait();
    console.log(`Successful activateEmergencyState!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function activateForceBatches() {
    const { contractInstance } = await init();
    const tx = await contractInstance.activateForceBatches();
    await tx.wait();
    console.log(`Successful activateForceBatches!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function consolidatePendingState(pendingStateNum) {
    const { contractInstance } = await init();
    const tx = await contractInstance.consolidatePendingState(pendingStateNum);
    await tx.wait();
    console.log(`Successful consolidatePendingState!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function deactivateEmergencyState() {
    const { contractInstance } = await init();
    const tx = await contractInstance.deactivateEmergencyState();
    await tx.wait();
    console.log(`Successful deactivateEmergencyState!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function forceBatch(transations, maticAmount) {
    const { contractInstance } = await init();
    const tx = await contractInstance.forceBatch(transations, maticAmount);
    await tx.wait();
    console.log(`Successful forceBatch!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function initialize(initializePackedParameters, genesisRoot, _trustedSequencerURL, _networkName, _version) {
    const { contractInstance } = await init();
    const tx = await contractInstance.initialize(initializePackedParameters, genesisRoot, _trustedSequencerURL, _networkName, _version);
    await tx.wait();
    console.log(`Successful initialize!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function overridePendingstate(initPendingStateNum, finalPendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof) {
    const { contractInstance } = await init();
    const tx = await contractInstance.overridePendingstate(initPendingStateNum, finalPendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof);
    await tx.wait();
    console.log(`Successful overridePendingstate!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function proveNonDeterministicPendingState(initPendingStateNum, finalPendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof) {
    const { contractInstance } = await init();
    const tx = await contractInstance.proveNonDeterministicPendingState(initPendingStateNum, finalPendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof);
    await tx.wait();
    console.log(`Successful proveNonDeterministicPendingState!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function renounceOwnership() {
    const { contractInstance } = await init();
    const tx = await contractInstance.renounceOwnership();
    await tx.wait();
    console.log(`Successful renounceOwnership!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function sequenceBatches(batches, l2Coinbase) {
    const { contractInstance } = await init();
    const tx = await contractInstance.sequenceBatches(batches, l2Coinbase);
    await tx.wait();
    console.log(`Successful sequenceBatches!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function sequenceForceBatches(batches) {
    const { contractInstance } = await init();
    const tx = await contractInstance.sequenceForceBatches(batches);
    await tx.wait();
    console.log(`Successful sequenceForceBatches!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function setForceBatchTimeout(newforceBatchTimeout) {
    const { contractInstance } = await init();
    const tx = await contractInstance.setForceBatchTimeout(newforceBatchTimeout);
    await tx.wait();
    console.log(`Successful setForceBatchTimeout!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function setMultiplierBatchFee(newMultiplierBatchFee) {
    const { contractInstance } = await init();
    const oldMultiplierBatchfee = await contractInstance.multiplierBatchFee();
    const tx = await contractInstance.setMultiplierBatchFee(newMultiplierBatchFee);
    await tx.wait();
    console.log(`Successful setMultiplierBatchFee!`);
    console.log(`Transaction hash is ${tx.hash}`);
    console.log(`Old multiplierBatchfee is ${oldMultiplierBatchfee}`);
    const newMultiplierBatchfee = await contractInstance.multiplierBatchFee();
    console.log(`New multiplierBatchfee is ${newMultiplierBatchfee}`);
}

async function setPendingStateTimeout(newPendingStateTimeout) {
    const { contractInstance } = await init();
    const tx = await contractInstance.setPendingStateTimeout(newPendingStateTimeout);
    await tx.wait();
    console.log(`Successful setPendingStateTimeout!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function setTrustedAggregator(newTrustedAggregator) {
    const { contractInstance } = await init();
    const tx = await contractInstance.setTrustedAggregator(newTrustedAggregator);
    await tx.wait();
    console.log(`Successful setTrustedAggregator!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function setTrustedAggregatorTimeout(newTrustedAggregatorTimeout) {
    const { contractInstance } = await init();
    const tx = await contractInstance.setTrustedAggregatorTimeout(newTrustedAggregatorTimeout);
    await tx.wait();
    console.log(`Successful setTrustedAggregatorTimeout!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function setTrustedSequencer(newTrustedSequencer) {
    const { contractInstance } = await init();
    const tx = await contractInstance.setTrustedSequencer(newTrustedSequencer);
    await tx.wait();
    console.log(`Successful setTrustedSequencer!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function setTrustedSequencerURL(newTrustedSequencerURL) {
    const { contractInstance } = await init();
    const tx = await contractInstance.setTrustedSequencerURL(newTrustedSequencerURL);
    await tx.wait();
    console.log(`Successful setTrustedSequencerURL!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function setVerifyBatchTimeTarget(newVerifyBatchTimeTarget) {
    const { contractInstance } = await init();
    const tx = await contractInstance.setVerifyBatchTimeTarget(newVerifyBatchTimeTarget);
    await tx.wait();
    console.log(`Successful setVerifyBatchTimeTarget!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function transferAdminRole(newPendingAdmin) {
    const { contractInstance } = await init();
    const tx = await contractInstance.transferAdminRole(newPendingAdmin);
    await tx.wait();
    console.log(`Successful transferAdminRole!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function transferOwnership(newOwner) {
    const { contractInstance } = await init();
    const tx = await contractInstance.transferOwnership(newOwner);
    await tx.wait();
    console.log(`Successful transferOwnership!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function verifyBatches(pendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof) {
    const { contractInstance } = await init();
    const tx = await contractInstance.verifyBatches(pendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof);
    await tx.wait();
    console.log(`Successful verifyBatches!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function verifyBatchesTrustedAggregator(pendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof) {
    const { contractInstance } = await init();
    const tx = await contractInstance.verifyBatchesTrustedAggregator(pendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof);
    await tx.wait();
    console.log(`Successful verifyBatchesTrustedAggregator!`);
    console.log(`Transaction hash is ${tx.hash}`);
}

async function main() {
    const command = process.argv[2];
    const params = process.argv.slice(3);
    switch (command) {
        case "acceptAdminRole":
            await acceptAdminRole();
            break;
        case "activateEmergencyState":
            if (params.length != 1) {
                console.log("Please provide the sequencedBatchNum as a parameter.");
            } else {
                await activateEmergencyState(...params);
            }
            break;
        case "activateForceBatches":
            await activateForceBatches();
            break;
        case "consolidatePendingState":
            if (params.length != 1) {
                console.log("Please provide the pendingStateNum as a parameter.");
            } else {
                await consolidatePendingState(...params);
            }
            break;
        case "deactivateEmergencyState":
            await deactivateEmergencyState();
            break;
        case "forceBatch":
            if (params.length != 2) {
                console.log("Please provide the transations, maticAmount as parameters.");
            } else {
                await forceBatch(...params);
            }
            break;
        case "initialize":
            if (params.length != 5) {
                console.log("Please provide the initializePackedParameters, genesisRoot, _trustedSequencerURL, _networkName, _version as parameters.");
            } else {
                await initialize(...params);
            }
            break;
        case "overridePendingstate":
            if (params.length != 7) {
                console.log("Please provide the initPendingStateNum, finalPendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof as parameters.");
            } else {
                await overridePendingstate(...params);
            }
            break;
        case "proveNonDeterministicPendingState":
            if (params.length != 7) {
                console.log("Please provide the initPendingStateNum, finalPendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof as parameters.");
            } else {
                await proveNonDeterministicPendingState(...params);
            }
            break;
        case "renounceOwnership":
            await renounceOwnership();
            break;
        case "sequenceBatches":
            if (params.length != 2) {
                console.log("Please provide the batches, l2Coinbae as parameters.");
            } else {
                await sequenceBatches(...params);
            }
            break;
        case "sequenceForceBatches":
            if (params.length != 1) {
                console.log("Please provide the batches as a parameter.");
            } else {
                await sequenceForceBatches(...params);
            }
            break;
        case "setForceBatchTimeout":
            if (params.length != 1) {
                console.log("Please provide the newforceBatchTimeout as a parameter.");
            } else {
                await setForceBatchTimeout(...params);
            }
            break;
        case "setMultiplierBatchFee":
            if (params.length != 1) {
                console.log("Please provide the newMultiplierBatchFee as a parameter.");
            } else {
                await setMultiplierBatchFee(...params);
            }
            break;
        case "setPendingStateTimeout":
            if (params.length != 1) {
                console.log("Please provide the newPendingStateTimeout as a parameter.");
            } else {
                await setPendingStateTimeout(...params);
            }
            break;
        case "setTrustedAggregator":
            if (params.length != 1) {
                console.log("Please provide the newTrustedAggregator as a parameter.");
            } else {
                await setTrustedAggregator(...params);
            }
            break;
        case "setTrustedAggregatorTimeout":
            if (params.length != 1) {
                console.log("Please provide the newTrustedAggregatorTimeout as a parameter.");
            } else {
                await setTrustedAggregatorTimeout(...params);
            }
            break;
        case "setTrustedSequencer":
            if (params.length != 1) {
                console.log("Please provide the newTrustedSequencer as a parameter.");
            } else {
                await setTrustedSequencer(...params);
            }
            break;
        case "setTrustedSequencerURL":
            if (params.length != 1) {
                console.log("Please provide the newTrustedSequencerURL as a parameter.");
            } else {
                await setTrustedSequencerURL(...params);
            }
            break;
        case "setVerifyBatchTimeTarget":
            if (params.length != 1) {
                console.log("Please provide the newVerifyBatchTimeTarget as a parameter.");
            } else {
                await setVerifyBatchTimeTarget(...params);
            }
            break;
        case "transferAdminRole":
            if (params.length != 1) {
                console.log("Please provide the newPendingAdmin as a parameter.");
            } else {
                await transferAdminRole(...params);
            }
            break;
        case "transferOwnership":
            if (params.length != 1) {
                console.log("Please provide the newOwner as a parameter.");
            } else {
                await transferOwnership(...params);
            }
            break;
        case "verifyBatches":
            if (params.length != 6) {
                console.log("Please provide the pendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof as parameters.");
            } else {
                await verifyBatches(...params);
            }
            break;
        case "verifyBatchesTrustedAggregator":
            if (params.length != 6) {
                console.log("Please provide the pendingStateNum, initNumBatch, finalNewBatch, newLocalExitRoot, newStateRoot, proof as parameters.");
            } else {
                await verifyBatchesTrustedAggregator(...params);
            }
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