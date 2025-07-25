// node_modules/thirdweb/dist/esm/utils/promise/once.js
function once(fn) {
  let result;
  return () => {
    if (!result) {
      result = fn();
    }
    return result;
  };
}

export {
  once
};
//# sourceMappingURL=chunk-XS3SQPWF.js.map
