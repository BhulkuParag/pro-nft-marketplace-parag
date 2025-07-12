import {
  readContract
} from "./chunk-WHDWYZBU.js";
import "./chunk-SD26YTCZ.js";
import "./chunk-3DGGFYQ2.js";
import "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-HRHEYRBD.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import "./chunk-NBODG3QK.js";
import "./chunk-UY2SRO54.js";
import "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import "./chunk-IVVESS3J.js";
import "./chunk-DJWGHHK5.js";
import "./chunk-AHXBSVDN.js";
import "./chunk-7QWN2SRQ.js";
import "./chunk-637RNUYD.js";
import "./chunk-ZBHRR2VO.js";
import {
  stringify
} from "./chunk-LZWAEAXR.js";
import "./chunk-RKJ7S5H4.js";
import "./chunk-YIVCHQGZ.js";
import {
  isHex
} from "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import "./chunk-JGXNTIIP.js";
import "./chunk-CYZDLLAL.js";
import "./chunk-Z5XIAL4H.js";
import "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-UQSP5VHN.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/openzeppelin.js
async function prepareOpenZeppelinTransaction({ account, serializableTransaction, transaction, gasless }) {
  const forrwaderContract = getContract({
    address: gasless.relayerForwarderAddress,
    chain: transaction.chain,
    client: transaction.client
  });
  const nonce = await readContract({
    contract: forrwaderContract,
    method: "function getNonce(address) view returns (uint256)",
    params: [account.address]
  });
  const [signature, message] = await (async () => {
    if (!serializableTransaction.to) {
      throw new Error("OpenZeppelin transactions must have a 'to' address");
    }
    if (!serializableTransaction.gas) {
      throw new Error("OpenZeppelin transactions must have a 'gas' value");
    }
    if (!serializableTransaction.data) {
      throw new Error("OpenZeppelin transactions must have a 'data' value");
    }
    if (gasless.experimentalChainlessSupport) {
      const message3 = {
        chainid: BigInt(transaction.chain.id),
        data: serializableTransaction.data,
        from: account.address,
        gas: serializableTransaction.gas,
        nonce,
        to: serializableTransaction.to,
        value: 0n
      };
      return [
        await account.signTypedData({
          domain: {
            name: "GSNv2 Forwarder",
            verifyingContract: forrwaderContract.address,
            version: "0.0.1"
          },
          message: message3,
          primaryType: "ForwardRequest",
          types: { ForwardRequest: ChainAwareForwardRequest }
        }),
        message3
      ];
    }
    const message2 = {
      data: serializableTransaction.data,
      from: account.address,
      gas: serializableTransaction.gas,
      nonce,
      to: serializableTransaction.to,
      value: 0n
    };
    return [
      await account.signTypedData({
        domain: {
          chainId: transaction.chain.id,
          name: gasless.domainName ?? "GSNv2 Forwarder",
          verifyingContract: forrwaderContract.address,
          version: gasless.domainVersion ?? "0.0.1"
        },
        message: message2,
        primaryType: "ForwardRequest",
        types: { ForwardRequest }
      }),
      message2
    ];
  })();
  const messageType = "forward";
  return { message, messageType, signature };
}
var ForwardRequest = [
  { name: "from", type: "address" },
  { name: "to", type: "address" },
  { name: "value", type: "uint256" },
  { name: "gas", type: "uint256" },
  { name: "nonce", type: "uint256" },
  { name: "data", type: "bytes" }
];
var ChainAwareForwardRequest = [
  { name: "from", type: "address" },
  { name: "to", type: "address" },
  { name: "value", type: "uint256" },
  { name: "gas", type: "uint256" },
  { name: "nonce", type: "uint256" },
  { name: "data", type: "bytes" },
  { name: "chainid", type: "uint256" }
];
async function relayOpenZeppelinTransaction(options) {
  const { message, messageType, signature } = await prepareOpenZeppelinTransaction(options);
  const response = await fetch(options.gasless.relayerUrl, {
    body: stringify({
      forwarderAddress: options.gasless.relayerForwarderAddress,
      request: message,
      signature,
      type: messageType
    }),
    method: "POST"
  });
  if (!response.ok) {
    throw new Error(`Failed to send transaction: ${await response.text()}`);
  }
  const json = await response.json();
  if (!json.result) {
    throw new Error(`Relay transaction failed: ${json.message}`);
  }
  const transactionHash = JSON.parse(json.result).txHash;
  if (isHex(transactionHash)) {
    return {
      chain: options.transaction.chain,
      client: options.transaction.client,
      transactionHash
    };
  }
  throw new Error(`Failed to send transaction: ${stringify(json)}`);
}
export {
  prepareOpenZeppelinTransaction,
  relayOpenZeppelinTransaction
};
//# sourceMappingURL=openzeppelin-OVRHF6OW.js.map
