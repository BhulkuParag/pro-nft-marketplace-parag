import {
  getChainServices
} from "./chunk-CYZDLLAL.js";

// node_modules/thirdweb/dist/esm/insight/common.js
async function assertInsightEnabled(chains) {
  const chainData = await Promise.all(chains.map((chain) => isInsightEnabled(chain).then((enabled) => ({
    chain,
    enabled
  }))));
  const insightEnabled = chainData.every((c) => c.enabled);
  if (!insightEnabled) {
    throw new Error(`Insight is not available for chains ${chainData.filter((c) => !c.enabled).map((c) => c.chain.id).join(", ")}`);
  }
}
async function isInsightEnabled(chain) {
  const chainData = await getChainServices(chain);
  return chainData.some((c) => c.service === "insight" && c.enabled);
}

export {
  assertInsightEnabled,
  isInsightEnabled
};
//# sourceMappingURL=chunk-HDHHYE6C.js.map
