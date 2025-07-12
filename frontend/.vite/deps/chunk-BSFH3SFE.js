import {
  toNumber2 as toNumber,
  validate2 as validate
} from "./chunk-44GEKRHH.js";

// node_modules/thirdweb/dist/esm/utils/signatures/helpers/parse-typed-data.js
function parseTypedData(typedData) {
  const domain = typedData.domain;
  if ((domain == null ? void 0 : domain.chainId) !== void 0 && validate(domain.chainId)) {
    typedData.domain = {
      ...typedData.domain,
      chainId: toNumber(typedData.domain.chainId)
    };
  }
  return typedData;
}

export {
  parseTypedData
};
//# sourceMappingURL=chunk-BSFH3SFE.js.map
