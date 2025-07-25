import {
  encodeEventTopics,
  parseEventLogs
} from "./chunk-QMJBBKA5.js";
import {
  toSignatureHash
} from "./chunk-DJWGHHK5.js";
import {
  parseAbiItem
} from "./chunk-AHXBSVDN.js";

// node_modules/thirdweb/dist/esm/event/utils.js
function isAbiEvent(item) {
  return !!(item && typeof item === "object" && "type" in item && item.type === "event");
}

// node_modules/thirdweb/dist/esm/event/prepare-event.js
function prepareEvent(options) {
  const { signature } = options;
  let resolvedSignature;
  if (isAbiEvent(signature)) {
    resolvedSignature = signature;
  } else {
    resolvedSignature = parseAbiItem(signature);
  }
  return {
    abiEvent: resolvedSignature,
    hash: toSignatureHash(resolvedSignature),
    // @ts-expect-error - TODO: investiagte why this complains, it works fine however
    topics: encodeEventTopics({
      abi: [resolvedSignature],
      args: options.filters
    })
  };
}

// node_modules/thirdweb/dist/esm/event/actions/parse-logs.js
function parseEventLogs2(options) {
  const { logs, events, strict } = options;
  return parseEventLogs({
    abi: events.map((e) => e.abiEvent),
    logs,
    strict
  });
}

export {
  isAbiEvent,
  prepareEvent,
  parseEventLogs2 as parseEventLogs
};
//# sourceMappingURL=chunk-VVRYDJAL.js.map
