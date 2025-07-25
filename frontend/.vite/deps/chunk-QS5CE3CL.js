import {
  useForkRef
} from "./chunk-7BG3UTHV.js";
import {
  useEnhancedEffect_default
} from "./chunk-S652P6HC.js";
import {
  require_react
} from "./chunk-NQM6PSUW.js";
import {
  __toESM
} from "./chunk-OS7ZSSJM.js";

// node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var React = __toESM(require_react(), 1);
function useEventCallback(fn) {
  const ref = React.useRef(fn);
  useEnhancedEffect_default(() => {
    ref.current = fn;
  });
  return React.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var useEventCallback_default = useEventCallback;

// node_modules/@mui/material/esm/utils/useEventCallback.js
var useEventCallback_default2 = useEventCallback_default;

// node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef_default = useForkRef;

export {
  useEventCallback_default,
  useEventCallback_default2,
  useForkRef_default
};
//# sourceMappingURL=chunk-QS5CE3CL.js.map
