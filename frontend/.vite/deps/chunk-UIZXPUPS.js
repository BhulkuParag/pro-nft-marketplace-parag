import {
  assert,
  assert2,
  assert3,
  assert4,
  serialize,
  serialize2,
  serialize3,
  serialize4
} from "./chunk-EGFCSO5B.js";
import {
  fromLegacy,
  vToYParity
} from "./chunk-3YR3TNSC.js";
import {
  toBigInt2 as toBigInt
} from "./chunk-44GEKRHH.js";

// node_modules/thirdweb/dist/esm/transaction/serialize-transaction.js
function serializeTransaction(options) {
  const { transaction } = options;
  const type = getTransactionEnvelopeType(transaction);
  const signature = (() => {
    if (options.signature) {
      if ("v" in options.signature && typeof options.signature.v !== "undefined") {
        return fromLegacy({
          r: toBigInt(options.signature.r),
          s: toBigInt(options.signature.s),
          v: Number(options.signature.v)
        });
      }
      return {
        r: toBigInt(options.signature.r),
        s: toBigInt(options.signature.s),
        // We force the Signature type here because we filter for legacy type above
        yParity: options.signature.yParity
      };
    }
    if (typeof transaction.v === "undefined" && typeof transaction.yParity === "undefined") {
      return void 0;
    }
    if (transaction.r === void 0 || transaction.s === void 0) {
      throw new Error("Invalid signature provided with transaction");
    }
    return {
      r: typeof transaction.r === "bigint" ? transaction.r : toBigInt(transaction.r),
      s: typeof transaction.s === "bigint" ? transaction.s : toBigInt(transaction.s),
      yParity: typeof transaction.v !== "undefined" && typeof transaction.yParity === "undefined" ? vToYParity(Number(transaction.v)) : Number(transaction.yParity)
    };
  })();
  if (type === "eip1559") {
    const typedTransaction = transaction;
    assert(typedTransaction);
    return serialize(typedTransaction, {
      signature
    });
  }
  if (type === "legacy") {
    const typedTransaction = transaction;
    assert4(typedTransaction);
    return serialize4(typedTransaction, {
      signature
    });
  }
  if (type === "eip2930") {
    const typedTransaction = transaction;
    assert2(typedTransaction);
    return serialize2(typedTransaction, {
      signature
    });
  }
  if (type === "eip7702") {
    const typedTransaction = transaction;
    assert3(typedTransaction);
    return serialize3(typedTransaction, {
      signature
    });
  }
  throw new Error("Invalid transaction type");
}
function getTransactionEnvelopeType(transactionEnvelope) {
  if (typeof transactionEnvelope.type !== "undefined") {
    return transactionEnvelope.type;
  }
  if (typeof transactionEnvelope.authorizationList !== "undefined") {
    return "eip7702";
  }
  if (typeof transactionEnvelope.maxFeePerGas !== "undefined" || typeof transactionEnvelope.maxPriorityFeePerGas !== "undefined") {
    return "eip1559";
  }
  if (typeof transactionEnvelope.gasPrice !== "undefined") {
    if (typeof transactionEnvelope.accessList !== "undefined") {
      return "eip2930";
    }
    return "legacy";
  }
  throw new Error("Invalid transaction type");
}

export {
  serializeTransaction
};
//# sourceMappingURL=chunk-UIZXPUPS.js.map
