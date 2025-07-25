import {
  addToMockStorage
} from "./chunk-RKJ7S5H4.js";
import "./chunk-YIVCHQGZ.js";
import "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import {
  IS_TEST,
  getClientFetch
} from "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import {
  getThirdwebDomains
} from "./chunk-UQSP5VHN.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/storage/upload/web-node.js
async function uploadBatch(client, form, fileNames, options) {
  var _a, _b, _c;
  if (IS_TEST) {
    return addToMockStorage(form);
  }
  const headers = {};
  const res = await getClientFetch(client)(`https://${getThirdwebDomains().storage}/ipfs/upload`, {
    body: form,
    headers,
    method: "POST",
    requestTimeoutMs: ((_c = (_b = (_a = client.config) == null ? void 0 : _a.storage) == null ? void 0 : _b.fetch) == null ? void 0 : _c.requestTimeoutMs) || 12e4,
    // force auth token usage for storage uploads
    useAuthToken: true
  });
  if (!res.ok) {
    if (res.status === 401) {
      throw new Error("Unauthorized - You don't have permission to use this service.");
    }
    if (res.status === 402) {
      throw new Error("You have reached your storage limit. Please add a valid payment method to continue using the service.");
    }
    if (res.status === 403) {
      throw new Error("Forbidden - You don't have permission to use this service.");
    }
    throw new Error(`Failed to upload files to IPFS - ${res.status} - ${res.statusText}`);
  }
  const body = await res.json();
  const cid = body.IpfsHash;
  if (!cid) {
    throw new Error("Failed to upload files to IPFS - Bad CID");
  }
  if (options == null ? void 0 : options.uploadWithoutDirectory) {
    return [`ipfs://${cid}`];
  }
  return fileNames.map((name) => `ipfs://${cid}/${name}`);
}
export {
  uploadBatch
};
//# sourceMappingURL=web-node-7KFM4YTR.js.map
