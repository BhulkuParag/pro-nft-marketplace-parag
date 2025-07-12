import {
  waitForReceipt
} from "./chunk-E2LANL2Y.js";
import {
  sendTransaction
} from "./chunk-ACMOF3FM.js";

// node_modules/thirdweb/dist/esm/transaction/actions/send-and-confirm-transaction.js
async function sendAndConfirmTransaction(options) {
  const submittedTx = await sendTransaction(options);
  return waitForReceipt(submittedTx);
}

export {
  sendAndConfirmTransaction
};
//# sourceMappingURL=chunk-LUJKADEG.js.map
