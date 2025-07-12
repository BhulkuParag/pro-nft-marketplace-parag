import {
  stringify
} from "./chunk-LZWAEAXR.js";
import {
  getClientFetch
} from "./chunk-LPEXUG4Y.js";
import {
  getThirdwebBaseUrl
} from "./chunk-UQSP5VHN.js";

// node_modules/thirdweb/dist/esm/analytics/track/index.js
async function track({ client, ecosystem, data }) {
  const fetch = getClientFetch(client, ecosystem);
  const event = {
    source: "sdk",
    ...data
  };
  return fetch(`${getThirdwebBaseUrl("analytics")}/event`, {
    body: stringify(event),
    method: "POST"
  }).catch(() => {
  });
}

export {
  track
};
//# sourceMappingURL=chunk-CZLU53MF.js.map
