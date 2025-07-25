import {
  randomBytesHex
} from "./chunk-YIVCHQGZ.js";

// node_modules/thirdweb/dist/esm/storage/mock.js
var mockStorage = /* @__PURE__ */ new Map();
async function addToMockStorage(value) {
  const key = randomBytesHex();
  const files = value.getAll("file");
  if (!files) {
    throw new Error("No file found in FormData");
  }
  return Promise.all(files.map(async (file) => {
    const text = await file.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("File contents must be valid JSON");
    }
    const filename = "name" in file && file.name ? file.name.replace("files/", "") : "";
    const hash = `${key}${filename ? `/${filename}` : ""}`;
    mockStorage.set(hash, data);
    return `ipfs://${hash}`;
  }));
}
function getFromMockStorage(key) {
  const data = mockStorage.get(key);
  return data;
}

export {
  addToMockStorage,
  getFromMockStorage
};
//# sourceMappingURL=chunk-RKJ7S5H4.js.map
