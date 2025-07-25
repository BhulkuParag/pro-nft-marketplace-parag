import {
  getContractMetadata
} from "./chunk-5ZVY7E4T.js";
import {
  ZERO_ADDRESS,
  isNativeTokenAddress
} from "./chunk-673YCYST.js";
import {
  maxUint256,
  padHex
} from "./chunk-DJWGHHK5.js";

// node_modules/thirdweb/dist/esm/utils/extensions/drops/get-claim-params.js
async function getClaimParams(options) {
  const cc = await (async () => {
    if (options.type === "erc1155") {
      const { getActiveClaimCondition: getActiveClaimCondition2 } = await import("./getActiveClaimCondition-WSG7HCNK.js");
      return await getActiveClaimCondition2({
        contract: options.contract,
        tokenId: options.tokenId
      });
    }
    if (options.type === "erc721") {
      if (options.singlePhaseDrop) {
        const { claimCondition } = await import("./claimCondition-T2ADCCYI.js");
        return await claimCondition({
          contract: options.contract
        });
      }
      const { getActiveClaimCondition: getActiveClaimCondition2 } = await import("./getActiveClaimCondition-WTRUQNSV.js");
      return await getActiveClaimCondition2({
        contract: options.contract
      });
    }
    if (options.singlePhaseDrop) {
      const { claimCondition } = await import("./claimCondition-T2ADCCYI.js");
      return await claimCondition({
        contract: options.contract
      });
    }
    const { getActiveClaimCondition } = await import("./getActiveClaimCondition-3BXSTBKE.js");
    return await getActiveClaimCondition({
      contract: options.contract
    });
  })();
  const tokenDecimals = options.type === "erc20" ? options.tokenDecimals : 0;
  const allowlistProof = await (async () => {
    if (!cc.merkleRoot || cc.merkleRoot === padHex("0x", { size: 32 })) {
      return {
        currency: ZERO_ADDRESS,
        pricePerToken: maxUint256,
        proof: [],
        quantityLimitPerWallet: 0n
      };
    }
    const { fetchProofsForClaimer } = await import("./fetch-proofs-for-claimers-YKEOHISY.js");
    const metadata = await getContractMetadata({
      contract: options.contract
    });
    const merkleData = metadata.merkle || {};
    const snapshotUri = merkleData[cc.merkleRoot];
    if (!snapshotUri) {
      return {
        currency: ZERO_ADDRESS,
        pricePerToken: maxUint256,
        proof: [],
        quantityLimitPerWallet: 0n
      };
    }
    const allowListProof = await fetchProofsForClaimer({
      claimer: options.from || options.to,
      contract: options.contract,
      // receiver and claimer can be different, always prioritize the claimer for allowlists
      merkleTreeUri: snapshotUri,
      tokenDecimals
    });
    if (!allowListProof) {
      return {
        currency: ZERO_ADDRESS,
        pricePerToken: maxUint256,
        proof: [],
        quantityLimitPerWallet: 0n
      };
    }
    return allowListProof;
  })();
  const currency = allowlistProof.currency && allowlistProof.currency !== ZERO_ADDRESS ? allowlistProof.currency : cc.currency;
  const pricePerToken = allowlistProof.pricePerToken !== void 0 && allowlistProof.pricePerToken !== maxUint256 ? allowlistProof.pricePerToken : cc.pricePerToken;
  const totalPrice = pricePerToken * options.quantity / BigInt(10 ** tokenDecimals);
  const value = isNativeTokenAddress(currency) ? totalPrice : 0n;
  const erc20Value = !isNativeTokenAddress(currency) && pricePerToken > 0n ? {
    amountWei: totalPrice,
    tokenAddress: currency
  } : void 0;
  return {
    allowlistProof,
    currency,
    data: "0x",
    overrides: {
      erc20Value,
      value
    },
    pricePerToken,
    quantity: options.quantity,
    receiver: options.to,
    tokenId: options.type === "erc1155" ? options.tokenId : void 0
  };
}

export {
  getClaimParams
};
//# sourceMappingURL=chunk-TEZYXEFG.js.map
