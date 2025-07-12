import {
  disconnectWalletConnectSession,
  getSessions,
  saveSession
} from "./chunk-S2Y3R76M.js";
import "./chunk-PA42ET2J.js";
import "./chunk-TOBIHJ7G.js";
import "./chunk-53G7QH6O.js";
import "./chunk-WE7GTWOF.js";
import "./chunk-7D6G3EL5.js";
import "./chunk-IXILO7AP.js";
import "./chunk-XB34LHR5.js";
import "./chunk-CYVKJMZE.js";
import "./chunk-7TFKVTFH.js";
import "./chunk-6J7DXZMD.js";
import "./chunk-ACMOF3FM.js";
import "./chunk-PPBEOXQH.js";
import "./chunk-T2B5SAMX.js";
import "./chunk-SYRCOOVG.js";
import "./chunk-7RUSW4Y7.js";
import "./chunk-3DGGFYQ2.js";
import "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-HRHEYRBD.js";
import "./chunk-PG5X2BYF.js";
import "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import "./chunk-NBODG3QK.js";
import "./chunk-UY2SRO54.js";
import "./chunk-JJDFOOW3.js";
import "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import "./chunk-IVVESS3J.js";
import "./chunk-DJWGHHK5.js";
import "./chunk-AHXBSVDN.js";
import "./chunk-7QWN2SRQ.js";
import "./chunk-637RNUYD.js";
import "./chunk-ZBHRR2VO.js";
import "./chunk-LZWAEAXR.js";
import "./chunk-RKJ7S5H4.js";
import "./chunk-YIVCHQGZ.js";
import "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import "./chunk-CYZDLLAL.js";
import "./chunk-Z5XIAL4H.js";
import "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-UQSP5VHN.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-proposal.js
async function onSessionProposal(options) {
  var _a, _b;
  const { wallet, walletConnectClient, event, chains, onConnect } = options;
  const account = wallet.getAccount();
  if (!account) {
    throw new Error("No account connected to provided wallet");
  }
  const origin = (_b = (_a = event.verifyContext) == null ? void 0 : _a.verified) == null ? void 0 : _b.origin;
  if (origin) {
    await disconnectExistingSessions({ origin, walletConnectClient });
  }
  const session = await acceptSessionProposal({
    account,
    chains,
    sessionProposal: event,
    walletConnectClient
  });
  await saveSession(session);
  wallet.subscribe("disconnect", () => {
    disconnectWalletConnectSession({ session, walletConnectClient });
  });
  onConnect == null ? void 0 : onConnect(session);
}
async function disconnectExistingSessions({ walletConnectClient, origin }) {
  const sessions = await getSessions();
  for (const session of sessions) {
    if (session.origin === origin) {
      await disconnectWalletConnectSession({ session, walletConnectClient });
    }
  }
}
async function acceptSessionProposal({ account, walletConnectClient, sessionProposal, chains }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  if (!((_a = sessionProposal.params.requiredNamespaces) == null ? void 0 : _a.eip155) && !((_b = sessionProposal.params.optionalNamespaces) == null ? void 0 : _b.eip155)) {
    throw new Error("No EIP155 namespace found in Wallet Connect session proposal");
  }
  const namespaces = {
    chains: [
      ...Array.from(/* @__PURE__ */ new Set([
        ...((_e = (_d = (_c = sessionProposal.params.requiredNamespaces) == null ? void 0 : _c.eip155) == null ? void 0 : _d.chains) == null ? void 0 : _e.map((chain) => `${chain}:${account.address}`)) ?? [],
        ...((_h = (_g = (_f = sessionProposal.params.optionalNamespaces) == null ? void 0 : _f.eip155) == null ? void 0 : _g.chains) == null ? void 0 : _h.map((chain) => `${chain}:${account.address}`)) ?? [],
        ...(chains == null ? void 0 : chains.map((chain) => `eip155:${chain.id}:${account.address}`)) ?? []
      ]))
    ],
    events: [
      ...((_j = (_i = sessionProposal.params.requiredNamespaces) == null ? void 0 : _i.eip155) == null ? void 0 : _j.events) ?? [],
      ...((_l = (_k = sessionProposal.params.optionalNamespaces) == null ? void 0 : _k.eip155) == null ? void 0 : _l.events) ?? []
    ],
    methods: [
      ...((_n = (_m = sessionProposal.params.requiredNamespaces) == null ? void 0 : _m.eip155) == null ? void 0 : _n.methods) ?? [],
      ...((_p = (_o = sessionProposal.params.optionalNamespaces) == null ? void 0 : _o.eip155) == null ? void 0 : _p.methods) ?? []
    ]
  };
  const approval = await walletConnectClient.approve({
    id: sessionProposal.id,
    namespaces: {
      eip155: {
        accounts: namespaces.chains,
        events: namespaces.events,
        methods: namespaces.methods
      }
    }
  });
  const session = await approval.acknowledged();
  return {
    origin: ((_r = (_q = sessionProposal.verifyContext) == null ? void 0 : _q.verified) == null ? void 0 : _r.origin) || "Unknown origin",
    topic: session.topic
  };
}
export {
  acceptSessionProposal,
  disconnectExistingSessions,
  onSessionProposal
};
//# sourceMappingURL=session-proposal-EXIBQQ6U.js.map
