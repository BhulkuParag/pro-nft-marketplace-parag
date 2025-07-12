import {
  handleSendRawTransactionRequest,
  handleSendTransactionRequest,
  handleSignRequest,
  handleSignTransactionRequest,
  handleSignTypedDataRequest,
  parseEip155ChainId
} from "./chunk-TOBIHJ7G.js";
import "./chunk-6J7DXZMD.js";
import "./chunk-ACMOF3FM.js";
import "./chunk-PPBEOXQH.js";
import "./chunk-T2B5SAMX.js";
import "./chunk-SYRCOOVG.js";
import "./chunk-7RUSW4Y7.js";
import "./chunk-3DGGFYQ2.js";
import "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-HRHEYRBD.js";
import "./chunk-PG5X2BYF.js";
import "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import "./chunk-NBODG3QK.js";
import "./chunk-UY2SRO54.js";
import "./chunk-JJDFOOW3.js";
import "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import "./chunk-IVVESS3J.js";
import "./chunk-DJWGHHK5.js";
import "./chunk-AHXBSVDN.js";
import "./chunk-7QWN2SRQ.js";
import "./chunk-637RNUYD.js";
import "./chunk-ZBHRR2VO.js";
import "./chunk-LZWAEAXR.js";
import "./chunk-RKJ7S5H4.js";
import "./chunk-YIVCHQGZ.js";
import "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import "./chunk-CYZDLLAL.js";
import "./chunk-Z5XIAL4H.js";
import "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-UQSP5VHN.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-request.js
async function fulfillRequest(options) {
  const { wallet, walletConnectClient, thirdwebClient, event: { topic, id, params: { chainId: rawChainId, request } }, handlers } = options;
  const account = wallet.getAccount();
  if (!account) {
    throw new Error("No account connected to provided wallet");
  }
  let result;
  try {
    switch (request.method) {
      case "personal_sign": {
        if (handlers == null ? void 0 : handlers.personal_sign) {
          result = await handlers.personal_sign({
            account,
            params: request.params
          });
        } else {
          result = await handleSignRequest({
            account,
            params: request.params
          });
        }
        break;
      }
      case "eth_sign": {
        if (handlers == null ? void 0 : handlers.eth_sign) {
          result = await handlers.eth_sign({
            account,
            params: request.params
          });
        } else {
          result = await handleSignRequest({
            account,
            params: request.params
          });
        }
        break;
      }
      case "eth_signTypedData": {
        if (handlers == null ? void 0 : handlers.eth_signTypedData) {
          result = await handlers.eth_signTypedData({
            account,
            params: request.params
          });
        } else {
          result = await handleSignTypedDataRequest({
            account,
            params: request.params
          });
        }
        break;
      }
      case "eth_signTypedData_v4": {
        if (handlers == null ? void 0 : handlers.eth_signTypedData_v4) {
          result = await handlers.eth_signTypedData_v4({
            account,
            params: request.params
          });
        } else {
          result = await handleSignTypedDataRequest({
            account,
            params: request.params
          });
        }
        break;
      }
      case "eth_signTransaction": {
        if (handlers == null ? void 0 : handlers.eth_signTransaction) {
          result = await handlers.eth_signTransaction({
            account,
            params: request.params
          });
        } else {
          result = await handleSignTransactionRequest({
            account,
            params: request.params
          });
        }
        break;
      }
      case "eth_sendTransaction": {
        const chainId = parseEip155ChainId(rawChainId);
        if (handlers == null ? void 0 : handlers.eth_sendTransaction) {
          result = await handlers.eth_sendTransaction({
            account,
            chainId,
            params: request.params
          });
        } else {
          result = await handleSendTransactionRequest({
            account,
            chainId,
            params: request.params,
            thirdwebClient
          });
        }
        break;
      }
      case "eth_sendRawTransaction": {
        const chainId = parseEip155ChainId(rawChainId);
        if (handlers == null ? void 0 : handlers.eth_sendRawTransaction) {
          result = await handlers.eth_sendRawTransaction({
            account,
            chainId,
            params: request.params
          });
        } else {
          result = await handleSendRawTransactionRequest({
            account,
            chainId,
            params: request.params
          });
        }
        break;
      }
      case "wallet_addEthereumChain": {
        if (handlers == null ? void 0 : handlers.wallet_addEthereumChain) {
          result = await handlers.wallet_addEthereumChain({
            params: request.params,
            wallet
          });
        } else {
          throw new Error("Unsupported request method: wallet_addEthereumChain");
        }
        break;
      }
      case "wallet_switchEthereumChain": {
        if (handlers == null ? void 0 : handlers.wallet_switchEthereumChain) {
          result = await handlers.wallet_switchEthereumChain({
            params: request.params,
            wallet
          });
        } else {
          const { handleSwitchChain } = await import("./switch-chain-45G4CCUF.js");
          result = await handleSwitchChain({
            params: request.params,
            wallet
          });
        }
        break;
      }
      default: {
        const potentialHandler = handlers == null ? void 0 : handlers[request.method];
        if (potentialHandler) {
          result = await potentialHandler({
            account,
            chainId: parseEip155ChainId(rawChainId),
            params: request.params
          });
        } else {
          throw new Error(`Unsupported request method: ${request.method}`);
        }
      }
    }
  } catch (error) {
    result = {
      code: typeof error === "object" && error !== null && "code" in error ? error.code : 500,
      message: typeof error === "object" && error !== null && "message" in error ? error.message : "Unknown error"
    };
  }
  walletConnectClient.respond({
    response: {
      id,
      jsonrpc: "2.0",
      result
    },
    topic
  });
}
export {
  fulfillRequest
};
//# sourceMappingURL=session-request-WXC7EHTB.js.map
