import {
  isEcosystemWallet
} from "./chunk-OUUVSEDB.js";

// node_modules/thirdweb/dist/esm/wallets/__generated__/getWalletInfo.js
async function getWalletInfo(id, image) {
  if (isEcosystemWallet(id)) {
    const { getEcosystemWalletInfo } = await import("./get-ecosystem-wallet-info-ATML6DYM.js");
    return image ? getEcosystemWalletInfo(id).then((info) => info.image_id) : getEcosystemWalletInfo(id);
  }
  switch (id) {
    case "smart": {
      return image ? import("./image-NCO4MWPM.js").then((img) => img.default) : import("./smart-4VXW33YR.js").then((w) => w.wallet);
    }
    case "inApp": {
      return image ? import("./image-WCPCIKCX.js").then((img) => img.default) : import("./inApp-O5B36MQR.js").then((w) => w.wallet);
    }
    case "walletConnect": {
      return image ? import("./image-QBJ756CI.js").then((img) => img.default) : import("./walletConnect-24HUDXXA.js").then((w) => w.wallet);
    }
    case "embedded": {
      return image ? import("./image-TDRJ7R7A.js").then((img) => img.default) : import("./embedded-MNQFCZ7Y.js").then((w) => w.wallet);
    }
    case "adapter": {
      return image ? import("./image-7HKLS6OD.js").then((img) => img.default) : import("./adapter-EEEWYV6S.js").then((w) => w.wallet);
    }
    case "io.metamask": {
      return image ? import("./image-OW7DK5KV.js").then((img) => img.default) : import("./io-AJD3L2K3.js").then((w) => w.wallet);
    }
    case "com.trustwallet.app": {
      return image ? import("./image-4HJ3O237.js").then((img) => img.default) : import("./com.trustwallet-KILUFNY6.js").then((w) => w.wallet);
    }
    case "com.bitget.web3": {
      return image ? import("./image-TRT3OFDF.js").then((img) => img.default) : import("./com.bitget-RKIAUJQ2.js").then((w) => w.wallet);
    }
    case "com.okex.wallet": {
      return image ? import("./image-6H3WL5AO.js").then((img) => img.default) : import("./com.okex-OJMZZQLV.js").then((w) => w.wallet);
    }
    case "com.binance.wallet": {
      return image ? import("./image-X7EB4TM3.js").then((img) => img.default) : import("./com.binance-ALNNFSEX.js").then((w) => w.wallet);
    }
    case "com.safepal": {
      return image ? import("./image-RWSCC74O.js").then((img) => img.default) : import("./com-ASLTFSMA.js").then((w) => w.wallet);
    }
    case "pro.tokenpocket": {
      return image ? import("./image-RMYAPBFA.js").then((img) => img.default) : import("./pro-63OJB4KJ.js").then((w) => w.wallet);
    }
    case "com.bybit": {
      return image ? import("./image-B55L7CXC.js").then((img) => img.default) : import("./com-KG5KZMMA.js").then((w) => w.wallet);
    }
    case "org.uniswap": {
      return image ? import("./image-OP2WPL7L.js").then((img) => img.default) : import("./org-AAHZTUFB.js").then((w) => w.wallet);
    }
    case "io.zerion.wallet": {
      return image ? import("./image-FKRAEUYW.js").then((img) => img.default) : import("./io.zerion-TZUOU2KC.js").then((w) => w.wallet);
    }
    case "me.rainbow": {
      return image ? import("./image-SLPC2G3I.js").then((img) => img.default) : import("./me-ECABFZXB.js").then((w) => w.wallet);
    }
    case "com.ledger": {
      return image ? import("./image-E6SAQJQW.js").then((img) => img.default) : import("./com-MVFMPGNI.js").then((w) => w.wallet);
    }
    case "com.crypto.wallet": {
      return image ? import("./image-OX4YHIBF.js").then((img) => img.default) : import("./com.crypto-OLETPB3T.js").then((w) => w.wallet);
    }
    case "com.kraken": {
      return image ? import("./image-776ADATW.js").then((img) => img.default) : import("./com-VZLVIX4C.js").then((w) => w.wallet);
    }
    case "io.1inch.wallet": {
      return image ? import("./image-RAMCOL6F.js").then((img) => img.default) : import("./io.1inch-AP37Z5IJ.js").then((w) => w.wallet);
    }
    case "im.token": {
      return image ? import("./image-2YS2AG27.js").then((img) => img.default) : import("./im-REVUEOGQ.js").then((w) => w.wallet);
    }
    case "global.safe": {
      return image ? import("./image-CMW4W7NS.js").then((img) => img.default) : import("./global-OHVCPF7F.js").then((w) => w.wallet);
    }
    case "xyz.timelesswallet": {
      return image ? import("./image-I7LQIS7S.js").then((img) => img.default) : import("./xyz-AN66TH3E.js").then((w) => w.wallet);
    }
    case "com.roninchain.wallet": {
      return image ? import("./image-OGSAIKKX.js").then((img) => img.default) : import("./com.roninchain-AMZ7G3P7.js").then((w) => w.wallet);
    }
    case "com.elrond.maiar.wallet": {
      return image ? import("./image-GQTQLYA3.js").then((img) => img.default) : import("./com.elrond.maiar-3CAP3FQP.js").then((w) => w.wallet);
    }
    case "app.backpack": {
      return image ? import("./image-BVDHJHRF.js").then((img) => img.default) : import("./app-AYFWFVTZ.js").then((w) => w.wallet);
    }
    case "com.exodus": {
      return image ? import("./image-4A6DREON.js").then((img) => img.default) : import("./com-JR5REAQW.js").then((w) => w.wallet);
    }
    case "com.fireblocks": {
      return image ? import("./image-HI7H45AR.js").then((img) => img.default) : import("./com-YRFC3FSX.js").then((w) => w.wallet);
    }
    case "ag.jup": {
      return image ? import("./image-GIOY3H2G.js").then((img) => img.default) : import("./ag-LEMBEBS5.js").then((w) => w.wallet);
    }
    case "com.blockchain": {
      return image ? import("./image-5GIE7UW5.js").then((img) => img.default) : import("./com-KJNCIFFX.js").then((w) => w.wallet);
    }
    case "io.magiceden.wallet": {
      return image ? import("./image-3FUI74WG.js").then((img) => img.default) : import("./io.magiceden-LECWFA66.js").then((w) => w.wallet);
    }
    case "com.bifrostwallet": {
      return image ? import("./image-TCCJBQTF.js").then((img) => img.default) : import("./com-WEYXJJQV.js").then((w) => w.wallet);
    }
    case "com.tangem": {
      return image ? import("./image-57KWKRIK.js").then((img) => img.default) : import("./com-54QZHDLI.js").then((w) => w.wallet);
    }
    case "com.wemixplay": {
      return image ? import("./image-NFDR6VJB.js").then((img) => img.default) : import("./com-DXQC44UE.js").then((w) => w.wallet);
    }
    case "com.robinhood.wallet": {
      return image ? import("./image-4XADZTXK.js").then((img) => img.default) : import("./com.robinhood-Z4QHZG42.js").then((w) => w.wallet);
    }
    case "com.bitcoin": {
      return image ? import("./image-PIXOH4YC.js").then((img) => img.default) : import("./com-2BI7HSRM.js").then((w) => w.wallet);
    }
    case "org.mathwallet": {
      return image ? import("./image-5P6SF2ZJ.js").then((img) => img.default) : import("./org-3SDGX3HJ.js").then((w) => w.wallet);
    }
    case "network.blackfort": {
      return image ? import("./image-BARRZB6N.js").then((img) => img.default) : import("./network-OHGIZYPB.js").then((w) => w.wallet);
    }
    case "app.keplr": {
      return image ? import("./image-FSX27QA7.js").then((img) => img.default) : import("./app-QUNAMEPJ.js").then((w) => w.wallet);
    }
    case "com.bee": {
      return image ? import("./image-ML36MA7D.js").then((img) => img.default) : import("./com-FNZDOXNO.js").then((w) => w.wallet);
    }
    case "com.veworld": {
      return image ? import("./image-RBKAWCSW.js").then((img) => img.default) : import("./com-L6C2PS6N.js").then((w) => w.wallet);
    }
    case "com.bestwallet": {
      return image ? import("./image-VXXFKJOG.js").then((img) => img.default) : import("./com-U4ALJOWU.js").then((w) => w.wallet);
    }
    case "com.fastex.wallet": {
      return image ? import("./image-GK7ZXWPT.js").then((img) => img.default) : import("./com.fastex-3KHUWTYB.js").then((w) => w.wallet);
    }
    case "com.valoraapp": {
      return image ? import("./image-QFIOIQYO.js").then((img) => img.default) : import("./com-CDEIHDAO.js").then((w) => w.wallet);
    }
    case "id.co.pintu": {
      return image ? import("./image-G54ST6DQ.js").then((img) => img.default) : import("./id.co-X6FAJTP6.js").then((w) => w.wallet);
    }
    case "app.core.extension": {
      return image ? import("./image-CB7SNYBF.js").then((img) => img.default) : import("./app.core-BU6QTO72.js").then((w) => w.wallet);
    }
    case "com.opera": {
      return image ? import("./image-EYKDVESP.js").then((img) => img.default) : import("./com-XBCR2VFJ.js").then((w) => w.wallet);
    }
    case "app.girin": {
      return image ? import("./image-3QVCULGQ.js").then((img) => img.default) : import("./app-KZ2NJOV7.js").then((w) => w.wallet);
    }
    case "dev.auroracloud": {
      return image ? import("./image-ZQE2ZSOH.js").then((img) => img.default) : import("./dev-2HUSMRCQ.js").then((w) => w.wallet);
    }
    case "com.chain": {
      return image ? import("./image-FGF4Z3KK.js").then((img) => img.default) : import("./com-HMHS4TX3.js").then((w) => w.wallet);
    }
    case "app.wombat": {
      return image ? import("./image-NKDY4EE6.js").then((img) => img.default) : import("./app-UK5D3TMA.js").then((w) => w.wallet);
    }
    case "me.haha": {
      return image ? import("./image-Q3TINE5N.js").then((img) => img.default) : import("./me-QIFD7KKH.js").then((w) => w.wallet);
    }
    case "io.huddln": {
      return image ? import("./image-ARXCVEXB.js").then((img) => img.default) : import("./io-HLKHQT3D.js").then((w) => w.wallet);
    }
    case "so.onekey.app.wallet": {
      return image ? import("./image-RBVHZMNM.js").then((img) => img.default) : import("./so.onekey.app-M3ZI2QZU.js").then((w) => w.wallet);
    }
    case "app.subwallet": {
      return image ? import("./image-NORUH6TT.js").then((img) => img.default) : import("./app-2AEHDD3Q.js").then((w) => w.wallet);
    }
    case "pk.modular": {
      return image ? import("./image-EKEUOIOJ.js").then((img) => img.default) : import("./pk-RPCR7M4X.js").then((w) => w.wallet);
    }
    case "com.dcentwallet": {
      return image ? import("./image-SUIC3ETG.js").then((img) => img.default) : import("./com-N57SAMYB.js").then((w) => w.wallet);
    }
    case "io.internetmoney": {
      return image ? import("./image-H37475QL.js").then((img) => img.default) : import("./io-LHCD4GCX.js").then((w) => w.wallet);
    }
    case "com.hashpack.wallet": {
      return image ? import("./image-ZYBE4SQC.js").then((img) => img.default) : import("./com.hashpack-F7YWYVF3.js").then((w) => w.wallet);
    }
    case "app.kabila": {
      return image ? import("./image-PXKWNNXJ.js").then((img) => img.default) : import("./app-RUFFF4Z6.js").then((w) => w.wallet);
    }
    case "com.sabay.wallet": {
      return image ? import("./image-IZJBWKED.js").then((img) => img.default) : import("./com.sabay-CVBE5SWF.js").then((w) => w.wallet);
    }
    case "com.mewwallet": {
      return image ? import("./image-A36YKC3H.js").then((img) => img.default) : import("./com-DP4TXD66.js").then((w) => w.wallet);
    }
    case "io.tokoin": {
      return image ? import("./image-HD42U3AF.js").then((img) => img.default) : import("./io-FPGNKP6O.js").then((w) => w.wallet);
    }
    case "io.atomicwallet": {
      return image ? import("./image-HMG6R2FP.js").then((img) => img.default) : import("./io-XHPGP2UW.js").then((w) => w.wallet);
    }
    case "io.leapwallet": {
      return image ? import("./image-NNX5G3U6.js").then((img) => img.default) : import("./io-HI7PKINZ.js").then((w) => w.wallet);
    }
    case "io.novawallet": {
      return image ? import("./image-QPB67VN3.js").then((img) => img.default) : import("./io-T2NRWPP3.js").then((w) => w.wallet);
    }
    case "com.flowfoundation.wallet": {
      return image ? import("./image-TSNZM74R.js").then((img) => img.default) : import("./com.flowfoundation-VZAS6VSA.js").then((w) => w.wallet);
    }
    case "org.gooddollar": {
      return image ? import("./image-7ULSNBFH.js").then((img) => img.default) : import("./org-V2K7X355.js").then((w) => w.wallet);
    }
    case "network.cvl": {
      return image ? import("./image-JCZ2ADHY.js").then((img) => img.default) : import("./network-LS6AAAIL.js").then((w) => w.wallet);
    }
    case "com.bitso": {
      return image ? import("./image-W3RG2FWK.js").then((img) => img.default) : import("./com-7OSOT4JQ.js").then((w) => w.wallet);
    }
    case "com.zengo": {
      return image ? import("./image-6UPLZQKZ.js").then((img) => img.default) : import("./com-6AZFRHNY.js").then((w) => w.wallet);
    }
    case "com.klipwallet": {
      return image ? import("./image-M4ND4UVQ.js").then((img) => img.default) : import("./com-5TRGKE7P.js").then((w) => w.wallet);
    }
    case "xyz.argent": {
      return image ? import("./image-6ZJ6QHSJ.js").then((img) => img.default) : import("./xyz-YAYP7OV5.js").then((w) => w.wallet);
    }
    case "app.everspace": {
      return image ? import("./image-LCXQD5E7.js").then((img) => img.default) : import("./app-URQBTUUN.js").then((w) => w.wallet);
    }
    case "io.enjin": {
      return image ? import("./image-5VGSMULN.js").then((img) => img.default) : import("./io-YVGINF4U.js").then((w) => w.wallet);
    }
    case "xyz.uniultra.wallet": {
      return image ? import("./image-Z2L5R2A2.js").then((img) => img.default) : import("./xyz.uniultra-CT6O4FOR.js").then((w) => w.wallet);
    }
    case "social.halo": {
      return image ? import("./image-TEJK2ZV7.js").then((img) => img.default) : import("./social-W57VBBD6.js").then((w) => w.wallet);
    }
    case "tech.okto": {
      return image ? import("./image-VPBHP3UP.js").then((img) => img.default) : import("./tech-VCL2YN3O.js").then((w) => w.wallet);
    }
    case "io.kriptomat": {
      return image ? import("./image-TPXZ6V5S.js").then((img) => img.default) : import("./io-B6R2AVVR.js").then((w) => w.wallet);
    }
    case "co.xellar": {
      return image ? import("./image-SIYTWYZ6.js").then((img) => img.default) : import("./co-CSJ74UX4.js").then((w) => w.wallet);
    }
    case "network.haqq": {
      return image ? import("./image-P456U7K7.js").then((img) => img.default) : import("./network-FQKZ645H.js").then((w) => w.wallet);
    }
    case "io.oxalus": {
      return image ? import("./image-CWXSP7CD.js").then((img) => img.default) : import("./io-QU4C4RAP.js").then((w) => w.wallet);
    }
    case "com.ullapay": {
      return image ? import("./image-NABABFYJ.js").then((img) => img.default) : import("./com-KEBL23LM.js").then((w) => w.wallet);
    }
    case "org.alephium": {
      return image ? import("./image-R5SUARYR.js").then((img) => img.default) : import("./org-JZ3NPVSP.js").then((w) => w.wallet);
    }
    case "xyz.frontier.wallet": {
      return image ? import("./image-CBQWRD6J.js").then((img) => img.default) : import("./xyz.frontier-DYSOXCR2.js").then((w) => w.wallet);
    }
    case "network.over": {
      return image ? import("./image-PRLNIGZW.js").then((img) => img.default) : import("./network-5M3ZY6UZ.js").then((w) => w.wallet);
    }
    case "money.unstoppable": {
      return image ? import("./image-CRFTS773.js").then((img) => img.default) : import("./money-7DAI4W5K.js").then((w) => w.wallet);
    }
    case "me.iopay": {
      return image ? import("./image-DY2XKYO7.js").then((img) => img.default) : import("./me-KI3OSF24.js").then((w) => w.wallet);
    }
    case "com.tomi": {
      return image ? import("./image-M2FYKVDQ.js").then((img) => img.default) : import("./com-OOF3Q2R7.js").then((w) => w.wallet);
    }
    case "xyz.coca": {
      return image ? import("./image-LPJESUCY.js").then((img) => img.default) : import("./xyz-UI4XNYNS.js").then((w) => w.wallet);
    }
    case "com.coin98": {
      return image ? import("./image-VOJJ2Y7Y.js").then((img) => img.default) : import("./com-45KNWW7G.js").then((w) => w.wallet);
    }
    case "org.thorwallet": {
      return image ? import("./image-JLDG4M3X.js").then((img) => img.default) : import("./org-ZVO2MJIL.js").then((w) => w.wallet);
    }
    case "com.monarchwallet": {
      return image ? import("./image-OZAT7O55.js").then((img) => img.default) : import("./com-4RLKOTPN.js").then((w) => w.wallet);
    }
    case "io.loopring.wallet": {
      return image ? import("./image-EJNFDGSM.js").then((img) => img.default) : import("./io.loopring-QVUO5B6A.js").then((w) => w.wallet);
    }
    case "one.metapro.wallet": {
      return image ? import("./image-CTTZ7QQA.js").then((img) => img.default) : import("./one.metapro-AEX7O3J6.js").then((w) => w.wallet);
    }
    case "com.burritowallet": {
      return image ? import("./image-PIVMDI6R.js").then((img) => img.default) : import("./com-MYDZAG7I.js").then((w) => w.wallet);
    }
    case "com.mtpelerin": {
      return image ? import("./image-MQEZDOGB.js").then((img) => img.default) : import("./com-MIOQDBJY.js").then((w) => w.wallet);
    }
    case "app.pluswallet": {
      return image ? import("./image-URPBESOA.js").then((img) => img.default) : import("./app-FSZ7NASE.js").then((w) => w.wallet);
    }
    case "cc.localtrade.lab": {
      return image ? import("./image-HKCD5DQ7.js").then((img) => img.default) : import("./cc.localtrade-GYRSH4N5.js").then((w) => w.wallet);
    }
    case "io.uptn.dapp-web": {
      return image ? import("./image-6EEHKVJ7.js").then((img) => img.default) : import("./io.uptn-YKXZANPZ.js").then((w) => w.wallet);
    }
    case "app.herewallet": {
      return image ? import("./image-RV5QCX4N.js").then((img) => img.default) : import("./app-E2YQDZS3.js").then((w) => w.wallet);
    }
    case "com.xcapit": {
      return image ? import("./image-22XB7NTD.js").then((img) => img.default) : import("./com-JVZQCOSA.js").then((w) => w.wallet);
    }
    case "app.zeal": {
      return image ? import("./image-RX3ZAQ53.js").then((img) => img.default) : import("./app-YULMSNEK.js").then((w) => w.wallet);
    }
    case "com.oasys-wallet": {
      return image ? import("./image-DLNNVJ6X.js").then((img) => img.default) : import("./com-WSI3NDBG.js").then((w) => w.wallet);
    }
    case "com.coolbitx.cwsapp": {
      return image ? import("./image-22WJNJQY.js").then((img) => img.default) : import("./com.coolbitx-4P3BJCJN.js").then((w) => w.wallet);
    }
    case "app.linen": {
      return image ? import("./image-UKKWUBTZ.js").then((img) => img.default) : import("./app-4K43RTWU.js").then((w) => w.wallet);
    }
    case "io.nabox": {
      return image ? import("./image-X7F3N655.js").then((img) => img.default) : import("./io-RPNX6QEM.js").then((w) => w.wallet);
    }
    case "co.family.wallet": {
      return image ? import("./image-4LTJB32X.js").then((img) => img.default) : import("./co.family-YQNA3OUP.js").then((w) => w.wallet);
    }
    case "app.krystal": {
      return image ? import("./image-Q5UMPJCM.js").then((img) => img.default) : import("./app-7MHJEHJY.js").then((w) => w.wallet);
    }
    case "com.ellipal": {
      return image ? import("./image-IV66ENTK.js").then((img) => img.default) : import("./com-ZMAYKZ7L.js").then((w) => w.wallet);
    }
    case "io.yusetoken": {
      return image ? import("./image-L4XO7U4M.js").then((img) => img.default) : import("./io-SXUFYSJH.js").then((w) => w.wallet);
    }
    case "app.walletnow": {
      return image ? import("./image-AYNY54GL.js").then((img) => img.default) : import("./app-PZRUMXLR.js").then((w) => w.wallet);
    }
    case "com.saakuru.app": {
      return image ? import("./image-EB63VJWX.js").then((img) => img.default) : import("./com.saakuru-NDBKJ7RH.js").then((w) => w.wallet);
    }
    case "com.foxwallet": {
      return image ? import("./image-PF7JZYRT.js").then((img) => img.default) : import("./com-LCVCM5NF.js").then((w) => w.wallet);
    }
    case "com.withpaper": {
      return image ? import("./image-R4QKE2EO.js").then((img) => img.default) : import("./com-P5T5SGXQ.js").then((w) => w.wallet);
    }
    case "io.ricewallet": {
      return image ? import("./image-Q3YHXLFH.js").then((img) => img.default) : import("./io-66MX4SWB.js").then((w) => w.wallet);
    }
    case "io.okse": {
      return image ? import("./image-F3223NOG.js").then((img) => img.default) : import("./io-IF2MHIAV.js").then((w) => w.wallet);
    }
    case "com.aktionariat": {
      return image ? import("./image-HDL3S5FC.js").then((img) => img.default) : import("./com-T4SB2AWG.js").then((w) => w.wallet);
    }
    case "io.cypherhq": {
      return image ? import("./image-6DE6NDRA.js").then((img) => img.default) : import("./io-CIDUH5NI.js").then((w) => w.wallet);
    }
    case "com.paybolt": {
      return image ? import("./image-CDBMC3MR.js").then((img) => img.default) : import("./com-IMU6RQYF.js").then((w) => w.wallet);
    }
    case "io.compasswallet": {
      return image ? import("./image-G3HAVSIL.js").then((img) => img.default) : import("./io-7CRZIN7Z.js").then((w) => w.wallet);
    }
    case "com.plasma-wallet": {
      return image ? import("./image-W7JK2DBC.js").then((img) => img.default) : import("./com-XLBI6XK6.js").then((w) => w.wallet);
    }
    case "io.cosmostation": {
      return image ? import("./image-RHFJI2S7.js").then((img) => img.default) : import("./io-GDHWECDJ.js").then((w) => w.wallet);
    }
    case "org.bytebank": {
      return image ? import("./image-IDDS2DOR.js").then((img) => img.default) : import("./org-SP2QQC2I.js").then((w) => w.wallet);
    }
    case "com.unstoppabledomains": {
      return image ? import("./image-PSAXND3U.js").then((img) => img.default) : import("./com-U5IJJMII.js").then((w) => w.wallet);
    }
    case "io.koalawallet": {
      return image ? import("./image-NGBTKOYC.js").then((img) => img.default) : import("./io-RM7UTM2D.js").then((w) => w.wallet);
    }
    case "com.optowallet": {
      return image ? import("./image-2YF4CJRJ.js").then((img) => img.default) : import("./com-BNOOSGN7.js").then((w) => w.wallet);
    }
    case "io.miraiapp": {
      return image ? import("./image-PINYA5RB.js").then((img) => img.default) : import("./io-OAIVF5JR.js").then((w) => w.wallet);
    }
    case "app.beewallet": {
      return image ? import("./image-VIX3V7J7.js").then((img) => img.default) : import("./app-V3QDKDUH.js").then((w) => w.wallet);
    }
    case "xyz.sequence": {
      return image ? import("./image-W6VXGBPU.js").then((img) => img.default) : import("./xyz-JG47KEYA.js").then((w) => w.wallet);
    }
    case "io.fizen": {
      return image ? import("./image-M6OFT7GM.js").then((img) => img.default) : import("./io-PUJ546UM.js").then((w) => w.wallet);
    }
    case "it.airgap": {
      return image ? import("./image-Y5HLZJAV.js").then((img) => img.default) : import("./it-JEV7R55L.js").then((w) => w.wallet);
    }
    case "org.thepulsewallet": {
      return image ? import("./image-QKV32OF2.js").then((img) => img.default) : import("./org-HBULDZQX.js").then((w) => w.wallet);
    }
    case "com.holdstation": {
      return image ? import("./image-7HSU6RUW.js").then((img) => img.default) : import("./com-A7IUYPZ2.js").then((w) => w.wallet);
    }
    case "com.coinomi": {
      return image ? import("./image-7NUJHU3R.js").then((img) => img.default) : import("./com-AIAVOJVK.js").then((w) => w.wallet);
    }
    case "com.trusteeglobal": {
      return image ? import("./image-TRIMFJUX.js").then((img) => img.default) : import("./com-5FY4HMYE.js").then((w) => w.wallet);
    }
    case "io.wallacy": {
      return image ? import("./image-ECODSRYB.js").then((img) => img.default) : import("./io-KB4ELSFO.js").then((w) => w.wallet);
    }
    case "technology.jambo": {
      return image ? import("./image-UUT6OM3I.js").then((img) => img.default) : import("./technology-5AFM6L46.js").then((w) => w.wallet);
    }
    case "io.bladewallet": {
      return image ? import("./image-EIX4GHEE.js").then((img) => img.default) : import("./io-ZYQ3Z3OF.js").then((w) => w.wallet);
    }
    case "app.keyring": {
      return image ? import("./image-XH25YPXE.js").then((img) => img.default) : import("./app-P6DG4DTV.js").then((w) => w.wallet);
    }
    case "com.abra": {
      return image ? import("./image-YC7CRMZI.js").then((img) => img.default) : import("./com-EZRE42LJ.js").then((w) => w.wallet);
    }
    case "com.premanft": {
      return image ? import("./image-UYPFOKLQ.js").then((img) => img.default) : import("./com-QHB5TKHH.js").then((w) => w.wallet);
    }
    case "finance.voltage": {
      return image ? import("./image-PAXYK4LM.js").then((img) => img.default) : import("./finance-U6VORVDA.js").then((w) => w.wallet);
    }
    case "org.bitizen": {
      return image ? import("./image-DLN7P3KD.js").then((img) => img.default) : import("./org-MBK5ZC47.js").then((w) => w.wallet);
    }
    case "com.wigwam.wallet": {
      return image ? import("./image-D5YHJNXP.js").then((img) => img.default) : import("./com.wigwam-BZIKMSHD.js").then((w) => w.wallet);
    }
    case "app.ultimate": {
      return image ? import("./image-YUMRZGFL.js").then((img) => img.default) : import("./app-5GW6NY7A.js").then((w) => w.wallet);
    }
    case "com.cakewallet": {
      return image ? import("./image-2EBKXNXI.js").then((img) => img.default) : import("./com-4DW2GMJD.js").then((w) => w.wallet);
    }
    case "app.fizzwallet": {
      return image ? import("./image-JSBUBTU6.js").then((img) => img.default) : import("./app-DHQUIYUA.js").then((w) => w.wallet);
    }
    case "com.kucoin": {
      return image ? import("./image-Y5RW6BAZ.js").then((img) => img.default) : import("./com-D26EMKV5.js").then((w) => w.wallet);
    }
    case "app.stickey": {
      return image ? import("./image-4VERUFQN.js").then((img) => img.default) : import("./app-DABVPKMD.js").then((w) => w.wallet);
    }
    case "com.neonwallet": {
      return image ? import("./image-3SS2ILXU.js").then((img) => img.default) : import("./com-5HK3O6UJ.js").then((w) => w.wallet);
    }
    case "app.coinstats": {
      return image ? import("./image-HZ6TYI2B.js").then((img) => img.default) : import("./app-2XUSJYAA.js").then((w) => w.wallet);
    }
    case "ai.pundi": {
      return image ? import("./image-OEZ4BSU2.js").then((img) => img.default) : import("./ai-AXQOJWUL.js").then((w) => w.wallet);
    }
    case "com.ripio": {
      return image ? import("./image-U3ZE7TI7.js").then((img) => img.default) : import("./com-TVYR56DL.js").then((w) => w.wallet);
    }
    case "co.arculus": {
      return image ? import("./image-T4U522NV.js").then((img) => img.default) : import("./co-ZE7RETRX.js").then((w) => w.wallet);
    }
    case "io.harti": {
      return image ? import("./image-WEWQ62E5.js").then((img) => img.default) : import("./io-W53UJG4F.js").then((w) => w.wallet);
    }
    case "com.gemwallet": {
      return image ? import("./image-EQUDNTLQ.js").then((img) => img.default) : import("./com-UMB4H6AB.js").then((w) => w.wallet);
    }
    case "io.dttd": {
      return image ? import("./image-Z7ILGQ3E.js").then((img) => img.default) : import("./io-7IYIQW5H.js").then((w) => w.wallet);
    }
    case "io.zelcore": {
      return image ? import("./image-CDJ6QUNO.js").then((img) => img.default) : import("./io-GUOLN34D.js").then((w) => w.wallet);
    }
    case "org.thetatoken": {
      return image ? import("./image-CKZMFQJ5.js").then((img) => img.default) : import("./org-ICNZYSTR.js").then((w) => w.wallet);
    }
    case "io.blocto": {
      return image ? import("./image-DDDS4E63.js").then((img) => img.default) : import("./io-G5AKC473.js").then((w) => w.wallet);
    }
    case "com.tellaw": {
      return image ? import("./image-LM3QLGZ7.js").then((img) => img.default) : import("./com-OAKPACNX.js").then((w) => w.wallet);
    }
    case "xyz.ctrl": {
      return image ? import("./image-U6AZZXQV.js").then((img) => img.default) : import("./xyz-YX7IOHWL.js").then((w) => w.wallet);
    }
    case "is.callback": {
      return image ? import("./image-R2NFTJO7.js").then((img) => img.default) : import("./is-PIOJMTJC.js").then((w) => w.wallet);
    }
    case "io.summonersarena": {
      return image ? import("./image-PX5IC2NA.js").then((img) => img.default) : import("./io-PLW3YOTX.js").then((w) => w.wallet);
    }
    case "com.safemoon": {
      return image ? import("./image-G3EL764K.js").then((img) => img.default) : import("./com-LDJGRUNX.js").then((w) => w.wallet);
    }
    case "world.ixo": {
      return image ? import("./image-BRFRTNZE.js").then((img) => img.default) : import("./world-KA4YCKRJ.js").then((w) => w.wallet);
    }
    case "com.bitpie": {
      return image ? import("./image-IKAEPEZR.js").then((img) => img.default) : import("./com-TN4CXVMH.js").then((w) => w.wallet);
    }
    case "net.gateweb3": {
      return image ? import("./image-BWCCRFGQ.js").then((img) => img.default) : import("./net-A6RMLGS6.js").then((w) => w.wallet);
    }
    case "io.wallypto": {
      return image ? import("./image-6F64AIL2.js").then((img) => img.default) : import("./io-MNJQYQUW.js").then((w) => w.wallet);
    }
    case "io.alpha-u.wallet.web": {
      return image ? import("./image-5A2O6SSP.js").then((img) => img.default) : import("./io.alpha-u.wallet-HCCQJ2QO.js").then((w) => w.wallet);
    }
    case "com.lif3": {
      return image ? import("./image-IJ6W7IZS.js").then((img) => img.default) : import("./com-SVM7LXSN.js").then((w) => w.wallet);
    }
    case "app.ammer": {
      return image ? import("./image-IPLJQFSS.js").then((img) => img.default) : import("./app-7OX5EBQI.js").then((w) => w.wallet);
    }
    case "us.binance": {
      return image ? import("./image-Y5YPZGP2.js").then((img) => img.default) : import("./us-2BLDPENJ.js").then((w) => w.wallet);
    }
    case "com.bitpay": {
      return image ? import("./image-CR5QGG42.js").then((img) => img.default) : import("./com-ZAGUEEVW.js").then((w) => w.wallet);
    }
    case "co.muza": {
      return image ? import("./image-B7F2E76K.js").then((img) => img.default) : import("./co-KXMF34QP.js").then((w) => w.wallet);
    }
    case "jp.co.rakuten-wallet": {
      return image ? import("./image-IIVWK575.js").then((img) => img.default) : import("./jp.co-JQG34M3C.js").then((w) => w.wallet);
    }
    case "app.ryipay": {
      return image ? import("./image-6N5H5BAB.js").then((img) => img.default) : import("./app-6U2LIAFE.js").then((w) => w.wallet);
    }
    case "org.dota168": {
      return image ? import("./image-NFM7CHRY.js").then((img) => img.default) : import("./org-6UMCF2HX.js").then((w) => w.wallet);
    }
    case "com.alphawallet": {
      return image ? import("./image-KKF6U6QA.js").then((img) => img.default) : import("./com-FHRDHPRX.js").then((w) => w.wallet);
    }
    case "io.noone": {
      return image ? import("./image-MYSYOLYK.js").then((img) => img.default) : import("./io-6LQJX4RL.js").then((w) => w.wallet);
    }
    case "io.myabcwallet": {
      return image ? import("./image-LIUHPVDM.js").then((img) => img.default) : import("./io-4AFKBHMH.js").then((w) => w.wallet);
    }
    case "io.wallet3": {
      return image ? import("./image-JSLNXAZE.js").then((img) => img.default) : import("./io-ZGKWKCYI.js").then((w) => w.wallet);
    }
    case "com.coininn": {
      return image ? import("./image-KQAYDZM5.js").then((img) => img.default) : import("./com-5M5S2QPM.js").then((w) => w.wallet);
    }
    case "com.ambire": {
      return image ? import("./image-MFOV2QYG.js").then((img) => img.default) : import("./com-MJOF3JBO.js").then((w) => w.wallet);
    }
    case "cc.avacus": {
      return image ? import("./image-GQ4UTTKE.js").then((img) => img.default) : import("./cc-JWU2YN2O.js").then((w) => w.wallet);
    }
    case "me.easy": {
      return image ? import("./image-KUBKQYKR.js").then((img) => img.default) : import("./me-BUDPDHKH.js").then((w) => w.wallet);
    }
    case "app.utorg": {
      return image ? import("./image-DU4GSUVF.js").then((img) => img.default) : import("./app-YDYYOLV2.js").then((w) => w.wallet);
    }
    case "io.scramberry": {
      return image ? import("./image-CBDHLCMY.js").then((img) => img.default) : import("./io-O62YU7PJ.js").then((w) => w.wallet);
    }
    case "com.saitamatoken": {
      return image ? import("./image-XSBAQAJ7.js").then((img) => img.default) : import("./com-NAZBFHAR.js").then((w) => w.wallet);
    }
    case "com.secuxtech": {
      return image ? import("./image-HKBHJLUX.js").then((img) => img.default) : import("./com-AYIQMCIS.js").then((w) => w.wallet);
    }
    case "finance.openwallet": {
      return image ? import("./image-MVKBXY6D.js").then((img) => img.default) : import("./finance-OSK2FQXS.js").then((w) => w.wallet);
    }
    case "io.shido": {
      return image ? import("./image-UOABTIIJ.js").then((img) => img.default) : import("./io-AAQHQ5LK.js").then((w) => w.wallet);
    }
    case "com.unitywallet": {
      return image ? import("./image-EKYIHDI5.js").then((img) => img.default) : import("./com-ZLM6VBZZ.js").then((w) => w.wallet);
    }
    case "app.onto": {
      return image ? import("./image-M2YT7TIH.js").then((img) => img.default) : import("./app-INXPFRYL.js").then((w) => w.wallet);
    }
    case "com.companyname.swaptobe": {
      return image ? import("./image-5IJLR2W4.js").then((img) => img.default) : import("./com.companyname-PECCFRNG.js").then((w) => w.wallet);
    }
    case "com.midoin": {
      return image ? import("./image-HGPBDOZG.js").then((img) => img.default) : import("./com-GJG4LPGE.js").then((w) => w.wallet);
    }
    case "io.hyperpay": {
      return image ? import("./image-JCIFBAYJ.js").then((img) => img.default) : import("./io-4GM5EKCJ.js").then((w) => w.wallet);
    }
    case "id.competence": {
      return image ? import("./image-54SBMIQ7.js").then((img) => img.default) : import("./id-6K3PKGEA.js").then((w) => w.wallet);
    }
    case "io.tradestrike": {
      return image ? import("./image-MRXAK57Z.js").then((img) => img.default) : import("./io-TIWOYDGW.js").then((w) => w.wallet);
    }
    case "llc.besc": {
      return image ? import("./image-NEBDAXSB.js").then((img) => img.default) : import("./llc-CCVGUKD5.js").then((w) => w.wallet);
    }
    case "baby.smart": {
      return image ? import("./image-Q4F3R6VW.js").then((img) => img.default) : import("./baby-CVSU2RS7.js").then((w) => w.wallet);
    }
    case "com.coinsdo": {
      return image ? import("./image-UULCG3ZQ.js").then((img) => img.default) : import("./com-T743B5FP.js").then((w) => w.wallet);
    }
    case "com.ivirse": {
      return image ? import("./image-BOB7AAZN.js").then((img) => img.default) : import("./com-WQE3K4D4.js").then((w) => w.wallet);
    }
    case "ch.dssecurity": {
      return image ? import("./image-FLQWI6Z7.js").then((img) => img.default) : import("./ch-QNCOG2WV.js").then((w) => w.wallet);
    }
    case "com.concordium": {
      return image ? import("./image-DO53S64G.js").then((img) => img.default) : import("./com-BYAPLMUR.js").then((w) => w.wallet);
    }
    case "io.zkape": {
      return image ? import("./image-QGACOIS6.js").then((img) => img.default) : import("./io-ZI4AL3TU.js").then((w) => w.wallet);
    }
    case "app.status": {
      return image ? import("./image-F7CESYU2.js").then((img) => img.default) : import("./app-6HZXYTN5.js").then((w) => w.wallet);
    }
    case "io.pitaka": {
      return image ? import("./image-Y4EC7K6N.js").then((img) => img.default) : import("./io-G6FG6JEN.js").then((w) => w.wallet);
    }
    case "io.ozonewallet": {
      return image ? import("./image-HUGGPLSB.js").then((img) => img.default) : import("./io-J24IDI7M.js").then((w) => w.wallet);
    }
    case "org.mugambo": {
      return image ? import("./image-MT6B3DLP.js").then((img) => img.default) : import("./org-MDXSJPCY.js").then((w) => w.wallet);
    }
    case "network.mrhb": {
      return image ? import("./image-63TXGL7V.js").then((img) => img.default) : import("./network-PA7RG3O6.js").then((w) => w.wallet);
    }
    case "com.crossmint": {
      return image ? import("./image-ZTMYQIM6.js").then((img) => img.default) : import("./com-6YGYWGA5.js").then((w) => w.wallet);
    }
    case "io.konio": {
      return image ? import("./image-OFKRF4YA.js").then((img) => img.default) : import("./io-G5JWNV7G.js").then((w) => w.wallet);
    }
    case "io.legionnetwork": {
      return image ? import("./image-BQ2VPP6A.js").then((img) => img.default) : import("./io-PYKM24LW.js").then((w) => w.wallet);
    }
    case "com.meld.app": {
      return image ? import("./image-5FOY6UYP.js").then((img) => img.default) : import("./com.meld-SWVSSLCC.js").then((w) => w.wallet);
    }
    case "io.pltwallet": {
      return image ? import("./image-HJODJQQ7.js").then((img) => img.default) : import("./io-XWQP7OHF.js").then((w) => w.wallet);
    }
    case "com.authentrend": {
      return image ? import("./image-PEN7WEQI.js").then((img) => img.default) : import("./com-HLOWF7JF.js").then((w) => w.wallet);
    }
    case "io.pockie": {
      return image ? import("./image-GS7FLJXW.js").then((img) => img.default) : import("./io-ILRRWCN7.js").then((w) => w.wallet);
    }
    case "io.klever": {
      return image ? import("./image-2L5VJIRM.js").then((img) => img.default) : import("./io-K3QMHLDF.js").then((w) => w.wallet);
    }
    case "org.kelp": {
      return image ? import("./image-S4E2BBCN.js").then((img) => img.default) : import("./org-GSHSRZGT.js").then((w) => w.wallet);
    }
    case "io.ethermail": {
      return image ? import("./image-3PBBQUVQ.js").then((img) => img.default) : import("./io-OWB7REWX.js").then((w) => w.wallet);
    }
    case "pro.fintoken": {
      return image ? import("./image-7OWAIRDJ.js").then((img) => img.default) : import("./pro-DRLISJ6O.js").then((w) => w.wallet);
    }
    case "com.paliwallet": {
      return image ? import("./image-72N65EU4.js").then((img) => img.default) : import("./com-YE6HVUSC.js").then((w) => w.wallet);
    }
    case "vc.uincubator.api": {
      return image ? import("./image-YN7SX5TA.js").then((img) => img.default) : import("./vc.uincubator-RLLDVZ47.js").then((w) => w.wallet);
    }
    case "io.unagi.unawallet": {
      return image ? import("./image-ZBJXV3KG.js").then((img) => img.default) : import("./io.unagi-FRJLSQ4D.js").then((w) => w.wallet);
    }
    case "com.liberawallet": {
      return image ? import("./image-GV6P4OHD.js").then((img) => img.default) : import("./com-OISE7MAR.js").then((w) => w.wallet);
    }
    case "io.armana.portal": {
      return image ? import("./image-CSKSTJQS.js").then((img) => img.default) : import("./io.armana-5ENBDAA4.js").then((w) => w.wallet);
    }
    case "io.nash": {
      return image ? import("./image-V7C7ZHS2.js").then((img) => img.default) : import("./io-KTSOTPNZ.js").then((w) => w.wallet);
    }
    case "com.x9wallet": {
      return image ? import("./image-F74GLI4X.js").then((img) => img.default) : import("./com-CXCCLXMD.js").then((w) => w.wallet);
    }
    case "io.kigo": {
      return image ? import("./image-3T2AHDXP.js").then((img) => img.default) : import("./io-LE4LEBXA.js").then((w) => w.wallet);
    }
    case "world.dosi.vault": {
      return image ? import("./image-NEVPTWKP.js").then((img) => img.default) : import("./world.dosi-JRU4O6NS.js").then((w) => w.wallet);
    }
    case "io.nonbank": {
      return image ? import("./image-54WISM3G.js").then((img) => img.default) : import("./io-R7GSCGXY.js").then((w) => w.wallet);
    }
    case "app.hbwallet": {
      return image ? import("./image-IVLOVEU3.js").then((img) => img.default) : import("./app-H7FK2IQ7.js").then((w) => w.wallet);
    }
    case "com.getcogni": {
      return image ? import("./image-5LFJL6HA.js").then((img) => img.default) : import("./com-ZXUNM7YO.js").then((w) => w.wallet);
    }
    case "gg.indi": {
      return image ? import("./image-FIKHTKZ4.js").then((img) => img.default) : import("./gg-IZXGJOFZ.js").then((w) => w.wallet);
    }
    case "app.qubic.wallet": {
      return image ? import("./image-BJVPU5G5.js").then((img) => img.default) : import("./app.qubic-W3VNTGUQ.js").then((w) => w.wallet);
    }
    case "com.fxwallet": {
      return image ? import("./image-HJFFTXIT.js").then((img) => img.default) : import("./com-H5EISYSB.js").then((w) => w.wallet);
    }
    case "app.sinum": {
      return image ? import("./image-IN2KGUOL.js").then((img) => img.default) : import("./app-SVKHGRG4.js").then((w) => w.wallet);
    }
    case "com.kryptogo": {
      return image ? import("./image-JSGAXPIN.js").then((img) => img.default) : import("./com-CEM5DFNK.js").then((w) => w.wallet);
    }
    case "finance.soulswap.app": {
      return image ? import("./image-HSSL7ABS.js").then((img) => img.default) : import("./finance.soulswap-5ICVZZHR.js").then((w) => w.wallet);
    }
    case "com.shapeshift": {
      return image ? import("./image-I24ZPJIQ.js").then((img) => img.default) : import("./com-QXPELSW5.js").then((w) => w.wallet);
    }
    case "io.ready": {
      return image ? import("./image-XKG6AGS4.js").then((img) => img.default) : import("./io-WUT6NFGG.js").then((w) => w.wallet);
    }
    case "org.shefi": {
      return image ? import("./image-25Y7MN3V.js").then((img) => img.default) : import("./org-4WZRT5QQ.js").then((w) => w.wallet);
    }
    case "money.keychain": {
      return image ? import("./image-Z23NE6LC.js").then((img) => img.default) : import("./money-TBK5J3W4.js").then((w) => w.wallet);
    }
    case "com.beexo": {
      return image ? import("./image-P7UEYKZJ.js").then((img) => img.default) : import("./com-OKMKK4HD.js").then((w) => w.wallet);
    }
    case "live.superex": {
      return image ? import("./image-GSSFBLNY.js").then((img) => img.default) : import("./live-5KOMI5BZ.js").then((w) => w.wallet);
    }
    case "io.getclave": {
      return image ? import("./image-SA7L4OWX.js").then((img) => img.default) : import("./io-ORPEKAMY.js").then((w) => w.wallet);
    }
    case "com.bettatrade": {
      return image ? import("./image-IC5YSWUK.js").then((img) => img.default) : import("./com-GRPSEF4D.js").then((w) => w.wallet);
    }
    case "io.neopin": {
      return image ? import("./image-QJ4L2KRN.js").then((img) => img.default) : import("./io-FXH7GQZB.js").then((w) => w.wallet);
    }
    case "online.puzzle": {
      return image ? import("./image-LML4UWQ3.js").then((img) => img.default) : import("./online-X67NL3KD.js").then((w) => w.wallet);
    }
    case "xyz.echooo": {
      return image ? import("./image-FPGTIJ33.js").then((img) => img.default) : import("./xyz-LBL3EBA2.js").then((w) => w.wallet);
    }
    case "com.get-verso": {
      return image ? import("./image-WDQFLD3T.js").then((img) => img.default) : import("./com-4DWETZ7V.js").then((w) => w.wallet);
    }
    case "com.wemix": {
      return image ? import("./image-YNJAKD4V.js").then((img) => img.default) : import("./com-ATUHNW7H.js").then((w) => w.wallet);
    }
    case "io.trinity-tech": {
      return image ? import("./image-TARTVETL.js").then((img) => img.default) : import("./io-XSZ6HGD2.js").then((w) => w.wallet);
    }
    case "io.trustasset": {
      return image ? import("./image-MMTUTAG7.js").then((img) => img.default) : import("./io-74FKPOBM.js").then((w) => w.wallet);
    }
    case "app.dfinnwallet": {
      return image ? import("./image-UESP6OQH.js").then((img) => img.default) : import("./app-DPGC2PB7.js").then((w) => w.wallet);
    }
    case "com.bmawallet": {
      return image ? import("./image-VE4AQY5B.js").then((img) => img.default) : import("./com-6XOWYNJI.js").then((w) => w.wallet);
    }
    case "io.transi": {
      return image ? import("./image-3NDXPTJN.js").then((img) => img.default) : import("./io-ET4GMAAB.js").then((w) => w.wallet);
    }
    case "io.safecryptowallet": {
      return image ? import("./image-Z5NUSON4.js").then((img) => img.default) : import("./io-VYRZDFBV.js").then((w) => w.wallet);
    }
    case "finance.plena": {
      return image ? import("./image-P55Q4GD5.js").then((img) => img.default) : import("./finance-QEKJHWDU.js").then((w) => w.wallet);
    }
    case "io.certhis": {
      return image ? import("./image-HXV5N4HV.js").then((img) => img.default) : import("./io-GMBJ4GQQ.js").then((w) => w.wallet);
    }
    case "inc.tomo": {
      return image ? import("./image-QJE56ATO.js").then((img) => img.default) : import("./inc-FUYVFJRQ.js").then((w) => w.wallet);
    }
    case "me.komet.app": {
      return image ? import("./image-CJTIANUY.js").then((img) => img.default) : import("./me.komet-T4FSKAQZ.js").then((w) => w.wallet);
    }
    case "com.pandoshi": {
      return image ? import("./image-QKZBKDZX.js").then((img) => img.default) : import("./com-6FL5V5XF.js").then((w) => w.wallet);
    }
    case "io.guardiianwallet": {
      return image ? import("./image-ETMWBX2I.js").then((img) => img.default) : import("./io-6N2J4F2V.js").then((w) => w.wallet);
    }
    case "com.bscecowallet": {
      return image ? import("./image-JPB47HSX.js").then((img) => img.default) : import("./com-EDPZ7E4E.js").then((w) => w.wallet);
    }
    case "co.lifedefi": {
      return image ? import("./image-REKEFQ5L.js").then((img) => img.default) : import("./co-3PCOU2C7.js").then((w) => w.wallet);
    }
    case "com.zypto": {
      return image ? import("./image-P4YPRAEJ.js").then((img) => img.default) : import("./com-WV2PFNS4.js").then((w) => w.wallet);
    }
    case "com.broearn": {
      return image ? import("./image-JIJ4PCVE.js").then((img) => img.default) : import("./com-7TH2OYS5.js").then((w) => w.wallet);
    }
    case "io.ttmwallet": {
      return image ? import("./image-ANBTWKHX.js").then((img) => img.default) : import("./io-GOH2EAO4.js").then((w) => w.wallet);
    }
    case "com.tastycrypto": {
      return image ? import("./image-AUCCFVA5.js").then((img) => img.default) : import("./com-SHPFFYBN.js").then((w) => w.wallet);
    }
    case "com.ipmb": {
      return image ? import("./image-S4GF6GD3.js").then((img) => img.default) : import("./com-V5XKKJZU.js").then((w) => w.wallet);
    }
    case "xyz.nestwallet": {
      return image ? import("./image-KHPZELXX.js").then((img) => img.default) : import("./xyz-URJPCSWC.js").then((w) => w.wallet);
    }
    case "app.nicegram": {
      return image ? import("./image-6SBBNLHG.js").then((img) => img.default) : import("./app-KB5LAKEO.js").then((w) => w.wallet);
    }
    case "com.ballet": {
      return image ? import("./image-RHN56SVM.js").then((img) => img.default) : import("./com-Y24TQ33J.js").then((w) => w.wallet);
    }
    case "app.omni": {
      return image ? import("./image-TRTHVULY.js").then((img) => img.default) : import("./app-HVXH7KPZ.js").then((w) => w.wallet);
    }
    case "io.paraswap": {
      return image ? import("./image-5IQ7ZLXC.js").then((img) => img.default) : import("./io-ZEY2PUCS.js").then((w) => w.wallet);
    }
    case "one.mixin.messenger": {
      return image ? import("./image-YPE3HDDF.js").then((img) => img.default) : import("./one.mixin-LA4YMQBO.js").then((w) => w.wallet);
    }
    case "com.cryptokara": {
      return image ? import("./image-EGYLT3FG.js").then((img) => img.default) : import("./com-G7R6M3S5.js").then((w) => w.wallet);
    }
    case "com.caesiumlab": {
      return image ? import("./image-UMHAQ7TG.js").then((img) => img.default) : import("./com-H5ASLKXN.js").then((w) => w.wallet);
    }
    case "com.nodle": {
      return image ? import("./image-4ORZBEN7.js").then((img) => img.default) : import("./com-EWFDHIGZ.js").then((w) => w.wallet);
    }
    case "io.universaleverything": {
      return image ? import("./image-IQDTTZOA.js").then((img) => img.default) : import("./io-HRUDHDKY.js").then((w) => w.wallet);
    }
    case "finance.islamicoin": {
      return image ? import("./image-BT3NUO3P.js").then((img) => img.default) : import("./finance-UNKBRC5B.js").then((w) => w.wallet);
    }
    case "com.thirdweb": {
      return image ? import("./image-TEXCWLRX.js").then((img) => img.default) : import("./com-GVZXSRVG.js").then((w) => w.wallet);
    }
    case "com.opz": {
      return image ? import("./image-AWWNAXUV.js").then((img) => img.default) : import("./com-KCOTTFSG.js").then((w) => w.wallet);
    }
    case "fun.tobi": {
      return image ? import("./image-BIZAYYOP.js").then((img) => img.default) : import("./fun-KFPRIADH.js").then((w) => w.wallet);
    }
    case "trade.flooz.wallet": {
      return image ? import("./image-MSX22SFL.js").then((img) => img.default) : import("./trade.flooz-XB2UEIHY.js").then((w) => w.wallet);
    }
    case "org.talkapp": {
      return image ? import("./image-VR24MXTS.js").then((img) => img.default) : import("./org-4QGXWXFC.js").then((w) => w.wallet);
    }
    case "io.plutope": {
      return image ? import("./image-M52AMZPI.js").then((img) => img.default) : import("./io-GN5SB5Y2.js").then((w) => w.wallet);
    }
    case "org.ecoinwallet": {
      return image ? import("./image-JAUWQR7Q.js").then((img) => img.default) : import("./org-MRYT3STU.js").then((w) => w.wallet);
    }
    case "com.poolsmobility.wallet": {
      return image ? import("./image-CVPXBYNZ.js").then((img) => img.default) : import("./com.poolsmobility-BETYOWWI.js").then((w) => w.wallet);
    }
    case "xyz.roam.wallet": {
      return image ? import("./image-X3TG4ST6.js").then((img) => img.default) : import("./xyz.roam-DK5GJ6N4.js").then((w) => w.wallet);
    }
    case "com.dextrade": {
      return image ? import("./image-WL22E7X3.js").then((img) => img.default) : import("./com-GNFRWXF7.js").then((w) => w.wallet);
    }
    case "app.gamic": {
      return image ? import("./image-3ZQO22W4.js").then((img) => img.default) : import("./app-LMRLBNSV.js").then((w) => w.wallet);
    }
    case "world.fncy": {
      return image ? import("./image-M2JVKWPS.js").then((img) => img.default) : import("./world-LRWIX3A2.js").then((w) => w.wallet);
    }
    case "app.m1nty": {
      return image ? import("./image-AWIFZNRY.js").then((img) => img.default) : import("./app-2PI2UK44.js").then((w) => w.wallet);
    }
    case "com.3swallet": {
      return image ? import("./image-RK4IF7KF.js").then((img) => img.default) : import("./com-J34RPSIU.js").then((w) => w.wallet);
    }
    case "app.catecoin": {
      return image ? import("./image-5OLIIUNZ.js").then((img) => img.default) : import("./app-NOU3SQM5.js").then((w) => w.wallet);
    }
    case "com.payperless": {
      return image ? import("./image-34TBS2H4.js").then((img) => img.default) : import("./com-XE7T2HYR.js").then((w) => w.wallet);
    }
    case "com.coincircle": {
      return image ? import("./image-USBHWWUU.js").then((img) => img.default) : import("./com-YOITY2L5.js").then((w) => w.wallet);
    }
    case "io.helixid": {
      return image ? import("./image-HYXGQXEQ.js").then((img) => img.default) : import("./io-3B7JI2B5.js").then((w) => w.wallet);
    }
    case "io.passpay": {
      return image ? import("./image-ZEGWH6TK.js").then((img) => img.default) : import("./io-UWA65G2J.js").then((w) => w.wallet);
    }
    case "com.kresus": {
      return image ? import("./image-UDO6XO7T.js").then((img) => img.default) : import("./com-LWFKGEF5.js").then((w) => w.wallet);
    }
    case "com.nufinetes": {
      return image ? import("./image-PBPI4UWX.js").then((img) => img.default) : import("./com-MD6LQNAS.js").then((w) => w.wallet);
    }
    case "world.qoin": {
      return image ? import("./image-JSNRT4AJ.js").then((img) => img.default) : import("./world-W7YISO63.js").then((w) => w.wallet);
    }
    case "io.copiosa": {
      return image ? import("./image-VBDYFQZZ.js").then((img) => img.default) : import("./io-DNPSFGEN.js").then((w) => w.wallet);
    }
    case "io.ancrypto": {
      return image ? import("./image-3ZBXDKCT.js").then((img) => img.default) : import("./io-CHPCHFEB.js").then((w) => w.wallet);
    }
    case "app.keeper-wallet": {
      return image ? import("./image-2X7JWOCM.js").then((img) => img.default) : import("./app-RRUC2C53.js").then((w) => w.wallet);
    }
    case "io.bharatbox": {
      return image ? import("./image-KZIASBPS.js").then((img) => img.default) : import("./io-ZQ7ANMNQ.js").then((w) => w.wallet);
    }
    case "xyz.orion": {
      return image ? import("./image-DKXHJCAM.js").then((img) => img.default) : import("./xyz-6NW6RKXN.js").then((w) => w.wallet);
    }
    case "com.cryptnox": {
      return image ? import("./image-YFTCXC67.js").then((img) => img.default) : import("./com-PFBQY7DY.js").then((w) => w.wallet);
    }
    case "zone.bitverse": {
      return image ? import("./image-GDDOXSC4.js").then((img) => img.default) : import("./zone-UTNYPX6I.js").then((w) => w.wallet);
    }
    case "cc.dropp": {
      return image ? import("./image-6VS445Q7.js").then((img) => img.default) : import("./cc-FSCRRECP.js").then((w) => w.wallet);
    }
    case "com.sinohope": {
      return image ? import("./image-CPP46DZY.js").then((img) => img.default) : import("./com-W46JGUQM.js").then((w) => w.wallet);
    }
    case "ai.hacken": {
      return image ? import("./image-4MUZX7XX.js").then((img) => img.default) : import("./ai-VTZWZX36.js").then((w) => w.wallet);
    }
    case "net.spatium": {
      return image ? import("./image-RHYC6YAQ.js").then((img) => img.default) : import("./net-6NV65BL4.js").then((w) => w.wallet);
    }
    case "com.bitnovo": {
      return image ? import("./image-XE45BT7A.js").then((img) => img.default) : import("./com-7XKZPCAO.js").then((w) => w.wallet);
    }
    case "co.swopme": {
      return image ? import("./image-YQD6ZSYP.js").then((img) => img.default) : import("./co-HUWQHHZK.js").then((w) => w.wallet);
    }
    case "land.liker": {
      return image ? import("./image-LBCUYWLT.js").then((img) => img.default) : import("./land-GTBZ4TJX.js").then((w) => w.wallet);
    }
    case "io.owallet": {
      return image ? import("./image-SYOFDALX.js").then((img) => img.default) : import("./io-OOFNYVD6.js").then((w) => w.wallet);
    }
    case "com.dolletwallet": {
      return image ? import("./image-D2KUKIOW.js").then((img) => img.default) : import("./com-DEL5QRQ3.js").then((w) => w.wallet);
    }
    case "net.shinobi-wallet": {
      return image ? import("./image-4QSDEFYI.js").then((img) => img.default) : import("./net-WSTVCLHX.js").then((w) => w.wallet);
    }
    case "com.azcoiner": {
      return image ? import("./image-7AZ2KAMP.js").then((img) => img.default) : import("./com-SE7HE7WA.js").then((w) => w.wallet);
    }
    case "com.pierwallet": {
      return image ? import("./image-VB775AQ4.js").then((img) => img.default) : import("./com-Z4XAV5FP.js").then((w) => w.wallet);
    }
    case "io.talken": {
      return image ? import("./image-3O4L753S.js").then((img) => img.default) : import("./io-A6UK2FS5.js").then((w) => w.wallet);
    }
    case "com.passwallet.app": {
      return image ? import("./image-HY6LNIC6.js").then((img) => img.default) : import("./com.passwallet-S5ZTA7K7.js").then((w) => w.wallet);
    }
    case "com.coinex.wallet": {
      return image ? import("./image-7YXSCB7S.js").then((img) => img.default) : import("./com.coinex-G4BM33FD.js").then((w) => w.wallet);
    }
    case "pub.dg": {
      return image ? import("./image-7KFRKCEA.js").then((img) => img.default) : import("./pub-YKWKURBL.js").then((w) => w.wallet);
    }
    case "app.xverse": {
      return image ? import("./image-TT2MJOA3.js").then((img) => img.default) : import("./app-V4GVW2II.js").then((w) => w.wallet);
    }
    case "nl.greenhood.wallet": {
      return image ? import("./image-5RLXPKYJ.js").then((img) => img.default) : import("./nl.greenhood-7IBGD7ZT.js").then((w) => w.wallet);
    }
    case "com.flash-wallet": {
      return image ? import("./image-NVL76GKJ.js").then((img) => img.default) : import("./com-RNHTWI7N.js").then((w) => w.wallet);
    }
    case "com.vgxfoundation": {
      return image ? import("./image-KWYA5EVH.js").then((img) => img.default) : import("./com-FJTLK752.js").then((w) => w.wallet);
    }
    case "org.arianee": {
      return image ? import("./image-PJQSDGIA.js").then((img) => img.default) : import("./org-ZG6QYAFM.js").then((w) => w.wallet);
    }
    case "ai.spotonchain.platform": {
      return image ? import("./image-TNEYSMFG.js").then((img) => img.default) : import("./ai.spotonchain-BYQT76DA.js").then((w) => w.wallet);
    }
    case "com.tiduswallet": {
      return image ? import("./image-23CYORND.js").then((img) => img.default) : import("./com-TA7VIVT2.js").then((w) => w.wallet);
    }
    case "technology.obvious": {
      return image ? import("./image-HNVE3IUC.js").then((img) => img.default) : import("./technology-HHGHRL3Q.js").then((w) => w.wallet);
    }
    case "com.daffione": {
      return image ? import("./image-PO6LFMQ7.js").then((img) => img.default) : import("./com-ZQEKHO44.js").then((w) => w.wallet);
    }
    case "com.webauth": {
      return image ? import("./image-YZKSJK7O.js").then((img) => img.default) : import("./com-K5XNRIZQ.js").then((w) => w.wallet);
    }
    case "app.tofee": {
      return image ? import("./image-ZD36JOMP.js").then((img) => img.default) : import("./app-3I46TXZF.js").then((w) => w.wallet);
    }
    case "io.didwallet": {
      return image ? import("./image-M77F43TX.js").then((img) => img.default) : import("./io-2C3WEC6B.js").then((w) => w.wallet);
    }
    case "xyz.bonuz": {
      return image ? import("./image-NQYW4BW6.js").then((img) => img.default) : import("./xyz-VNJNM6CU.js").then((w) => w.wallet);
    }
    case "social.gm2": {
      return image ? import("./image-MSSD5QMI.js").then((img) => img.default) : import("./social-QKFHBBDY.js").then((w) => w.wallet);
    }
    case "co.cyber.wallet": {
      return image ? import("./image-WLC6LCE3.js").then((img) => img.default) : import("./co.cyber-E4ZPOHQZ.js").then((w) => w.wallet);
    }
    case "me.astrox": {
      return image ? import("./image-NEUKOI7R.js").then((img) => img.default) : import("./me-SENOTU6K.js").then((w) => w.wallet);
    }
    case "fi.pillar": {
      return image ? import("./image-E2FRY3VG.js").then((img) => img.default) : import("./fi-B6J2WZWB.js").then((w) => w.wallet);
    }
    case "io.buzz-up": {
      return image ? import("./image-OC4LFCDQ.js").then((img) => img.default) : import("./io-YTAGQKRM.js").then((w) => w.wallet);
    }
    case "io.moonstake": {
      return image ? import("./image-ZZLDYA5L.js").then((img) => img.default) : import("./io-LFJLTP6L.js").then((w) => w.wallet);
    }
    case "io.hippowallet": {
      return image ? import("./image-WIQEMDEX.js").then((img) => img.default) : import("./io-3O6BWKOM.js").then((w) => w.wallet);
    }
    case "com.amazewallet": {
      return image ? import("./image-DARRCGOT.js").then((img) => img.default) : import("./com-HHJIRRXF.js").then((w) => w.wallet);
    }
    case "com.kriptonio": {
      return image ? import("./image-BETGEKF2.js").then((img) => img.default) : import("./com-EJWTPD74.js").then((w) => w.wallet);
    }
    case "io.altme": {
      return image ? import("./image-PKPAQQHW.js").then((img) => img.default) : import("./io-BNZJKOQR.js").then((w) => w.wallet);
    }
    case "io.ukiss": {
      return image ? import("./image-VUJLAWKJ.js").then((img) => img.default) : import("./io-OXFMDZC6.js").then((w) => w.wallet);
    }
    case "fi.dropmate": {
      return image ? import("./image-62D3ETRK.js").then((img) => img.default) : import("./fi-TCSEX4WY.js").then((w) => w.wallet);
    }
    case "io.zelus": {
      return image ? import("./image-JVITPIDN.js").then((img) => img.default) : import("./io-5JPD3ANR.js").then((w) => w.wallet);
    }
    case "io.xucre": {
      return image ? import("./image-5PIU6EVA.js").then((img) => img.default) : import("./io-ZHICSLZJ.js").then((w) => w.wallet);
    }
    case "net.myrenegade": {
      return image ? import("./image-RJTT33XV.js").then((img) => img.default) : import("./net-EKQYAGFO.js").then((w) => w.wallet);
    }
    case "net.stasis": {
      return image ? import("./image-QOYC7K7G.js").then((img) => img.default) : import("./net-7OTNNKJO.js").then((w) => w.wallet);
    }
    case "io.clingon": {
      return image ? import("./image-ZLM77U4R.js").then((img) => img.default) : import("./io-QIC2LO5R.js").then((w) => w.wallet);
    }
    case "com.humbl": {
      return image ? import("./image-NW65JUIT.js").then((img) => img.default) : import("./com-H5LZU5O5.js").then((w) => w.wallet);
    }
    case "com.peakdefi": {
      return image ? import("./image-RXAVLXGH.js").then((img) => img.default) : import("./com-WOZYQNKO.js").then((w) => w.wallet);
    }
    case "network.dgg": {
      return image ? import("./image-IOKJVY4X.js").then((img) => img.default) : import("./network-4T2RLTFS.js").then((w) => w.wallet);
    }
    case "finance.panaroma": {
      return image ? import("./image-ZHAQO6IU.js").then((img) => img.default) : import("./finance-D66PDLMF.js").then((w) => w.wallet);
    }
    case "com.icewal": {
      return image ? import("./image-ASNGSRUU.js").then((img) => img.default) : import("./com-EL5XD5IL.js").then((w) => w.wallet);
    }
    case "io.streakk": {
      return image ? import("./image-H4OXNLAK.js").then((img) => img.default) : import("./io-SBRLBZ2F.js").then((w) => w.wallet);
    }
    case "network.gridlock": {
      return image ? import("./image-HEMLAXP2.js").then((img) => img.default) : import("./network-OPIGOI3S.js").then((w) => w.wallet);
    }
    case "network.trustkeys": {
      return image ? import("./image-3N33XDD5.js").then((img) => img.default) : import("./network-7IREAIDJ.js").then((w) => w.wallet);
    }
    case "finance.slingshot": {
      return image ? import("./image-7KHIE34J.js").then((img) => img.default) : import("./finance-F7FZ47VD.js").then((w) => w.wallet);
    }
    case "com.mpcvault.broswerplugin": {
      return image ? import("./image-F6IMDPIU.js").then((img) => img.default) : import("./com.mpcvault-KIKMBXR3.js").then((w) => w.wallet);
    }
    case "digital.minerva": {
      return image ? import("./image-BOGCB7J4.js").then((img) => img.default) : import("./digital-54ODTBUI.js").then((w) => w.wallet);
    }
    case "finance.porta": {
      return image ? import("./image-AK76LDZW.js").then((img) => img.default) : import("./finance-VT6HPYVH.js").then((w) => w.wallet);
    }
    case "io.earthwallet": {
      return image ? import("./image-FIRWXG7P.js").then((img) => img.default) : import("./io-S5HGMFXV.js").then((w) => w.wallet);
    }
    case "app.clot": {
      return image ? import("./image-Z5L5KRZU.js").then((img) => img.default) : import("./app-5IDB7KAU.js").then((w) => w.wallet);
    }
    case "com.alicebob": {
      return image ? import("./image-NJ4TJ4FL.js").then((img) => img.default) : import("./com-PLU5JWJM.js").then((w) => w.wallet);
    }
    case "net.spatium.wallet": {
      return image ? import("./image-ZYSDISOS.js").then((img) => img.default) : import("./net.spatium-5FGECFS7.js").then((w) => w.wallet);
    }
    case "id.plumaa": {
      return image ? import("./image-S4F7VWKI.js").then((img) => img.default) : import("./id-42FN4XJL.js").then((w) => w.wallet);
    }
    case "com.apollox": {
      return image ? import("./image-WXH3SK2R.js").then((img) => img.default) : import("./com-YHI3KRUO.js").then((w) => w.wallet);
    }
    case "io.legacynetwork": {
      return image ? import("./image-MJAPGYN2.js").then((img) => img.default) : import("./io-FWOLHI6B.js").then((w) => w.wallet);
    }
    case "io.ethos": {
      return image ? import("./image-QUZIS5EW.js").then((img) => img.default) : import("./io-E3JAUF2Z.js").then((w) => w.wallet);
    }
    case "com.rktechworks": {
      return image ? import("./image-T4GRVO54.js").then((img) => img.default) : import("./com-WUGEDXBC.js").then((w) => w.wallet);
    }
    case "com.greengloryglobal": {
      return image ? import("./image-WJ37UKMG.js").then((img) => img.default) : import("./com-EWY5UIPJ.js").then((w) => w.wallet);
    }
    case "co.filwallet": {
      return image ? import("./image-6KXJWMUT.js").then((img) => img.default) : import("./co-XCFIYEKQ.js").then((w) => w.wallet);
    }
    case "money.snowball": {
      return image ? import("./image-BNXMADJH.js").then((img) => img.default) : import("./money-R2DH4MSK.js").then((w) => w.wallet);
    }
    case "com.ennowallet": {
      return image ? import("./image-QSPHN6J2.js").then((img) => img.default) : import("./com-CV6IFQHJ.js").then((w) => w.wallet);
    }
    case "io.safematrix": {
      return image ? import("./image-72373MMA.js").then((img) => img.default) : import("./io-EVNDHV7K.js").then((w) => w.wallet);
    }
    case "pro.assure": {
      return image ? import("./image-3T2Z5EFU.js").then((img) => img.default) : import("./pro-WGGSTWF4.js").then((w) => w.wallet);
    }
    case "app.edge": {
      return image ? import("./image-YC3JFFZK.js").then((img) => img.default) : import("./app-GR3OYUPZ.js").then((w) => w.wallet);
    }
    case "com.neftipedia": {
      return image ? import("./image-VPQB7V2E.js").then((img) => img.default) : import("./com-TS2VMAKL.js").then((w) => w.wallet);
    }
    case "io.goldbit": {
      return image ? import("./image-U2EC6NY4.js").then((img) => img.default) : import("./io-V23IQLRW.js").then((w) => w.wallet);
    }
    case "com.coingrig": {
      return image ? import("./image-YQVZQEL7.js").then((img) => img.default) : import("./com-MLHVT6B4.js").then((w) => w.wallet);
    }
    case "io.xfun": {
      return image ? import("./image-HTC32SQB.js").then((img) => img.default) : import("./io-MPUSSNDJ.js").then((w) => w.wallet);
    }
    case "com.antiersolutions": {
      return image ? import("./image-U2HEMOVE.js").then((img) => img.default) : import("./com-J4QNUXDQ.js").then((w) => w.wallet);
    }
    case "com.itoken": {
      return image ? import("./image-QW6DEEWW.js").then((img) => img.default) : import("./com-BFV7375R.js").then((w) => w.wallet);
    }
    case "com.cardstack": {
      return image ? import("./image-NGJVNZFH.js").then((img) => img.default) : import("./com-MA2LLACQ.js").then((w) => w.wallet);
    }
    case "io.slavi": {
      return image ? import("./image-PRRLTYXO.js").then((img) => img.default) : import("./io-TOBGTJI6.js").then((w) => w.wallet);
    }
    case "tech.defiantapp": {
      return image ? import("./image-SH6KGYJG.js").then((img) => img.default) : import("./tech-TENV5NZO.js").then((w) => w.wallet);
    }
    case "app.imem": {
      return image ? import("./image-S22HQBAM.js").then((img) => img.default) : import("./app-YDKD3DCY.js").then((w) => w.wallet);
    }
    case "com.socios.app": {
      return image ? import("./image-HJMIHKWL.js").then((img) => img.default) : import("./com.socios-CWZI2KYQ.js").then((w) => w.wallet);
    }
    case "io.bimwallet": {
      return image ? import("./image-5MMQTXW2.js").then((img) => img.default) : import("./io-7LPRCZKC.js").then((w) => w.wallet);
    }
    case "com.adftechnology": {
      return image ? import("./image-D2F32RS6.js").then((img) => img.default) : import("./com-O65LLULK.js").then((w) => w.wallet);
    }
    case "com.reown.appkit-lab": {
      return image ? import("./image-CSCCPQ5Z.js").then((img) => img.default) : import("./com.reown-2WRWQZUO.js").then((w) => w.wallet);
    }
    case "com.reown": {
      return image ? import("./image-GQLO2CTL.js").then((img) => img.default) : import("./com-DXUCD3OB.js").then((w) => w.wallet);
    }
    case "com.reown.docs": {
      return image ? import("./image-ACZ2BIUI.js").then((img) => img.default) : import("./com.reown-TO4IV7S2.js").then((w) => w.wallet);
    }
    case "io.yowallet": {
      return image ? import("./image-CISL5JNA.js").then((img) => img.default) : import("./io-RBXECE6T.js").then((w) => w.wallet);
    }
    case "org.hot-labs": {
      return image ? import("./image-ZSUJZ5E3.js").then((img) => img.default) : import("./org-4LGTGZHD.js").then((w) => w.wallet);
    }
    case "ai.purewallet": {
      return image ? import("./image-LURPML75.js").then((img) => img.default) : import("./ai-UV73ONY5.js").then((w) => w.wallet);
    }
    case "io.walletverse": {
      return image ? import("./image-MAL5XGZQ.js").then((img) => img.default) : import("./io-6OWDA6YM.js").then((w) => w.wallet);
    }
    case "com.berasig": {
      return image ? import("./image-G4L7GXO5.js").then((img) => img.default) : import("./com-44UBNQGG.js").then((w) => w.wallet);
    }
    case "app.phantom": {
      return image ? import("./image-KHN6NRIK.js").then((img) => img.default) : import("./app-SBTP2D4U.js").then((w) => w.wallet);
    }
    case "com.coinbase.wallet": {
      return image ? import("./image-SUO77LSB.js").then((img) => img.default) : import("./com.coinbase-2HSGDX3C.js").then((w) => w.wallet);
    }
    case "io.rabby": {
      return image ? import("./image-2VR6FLDH.js").then((img) => img.default) : import("./io-FADAWI4K.js").then((w) => w.wallet);
    }
    case "com.brave.wallet": {
      return image ? import("./image-PSUV4JXG.js").then((img) => img.default) : import("./com.brave-KHSYQEEJ.js").then((w) => w.wallet);
    }
    case "com.moongate.one": {
      return image ? import("./image-BOZV2VKF.js").then((img) => img.default) : import("./com.moongate-4NKG7N3N.js").then((w) => w.wallet);
    }
    case "tech.levain": {
      return image ? import("./image-6CE52KP4.js").then((img) => img.default) : import("./tech-4QUMNLCP.js").then((w) => w.wallet);
    }
    case "com.enkrypt": {
      return image ? import("./image-46PILSS2.js").then((img) => img.default) : import("./com-XQ2DZIS4.js").then((w) => w.wallet);
    }
    case "com.scramble": {
      return image ? import("./image-WAA5KPOK.js").then((img) => img.default) : import("./com-HWA5P2AV.js").then((w) => w.wallet);
    }
    case "io.finoa": {
      return image ? import("./image-3RNMRNCE.js").then((img) => img.default) : import("./io-NEW2Q3V2.js").then((w) => w.wallet);
    }
    case "com.blanqlabs.wallet": {
      return image ? import("./image-COSPJFWP.js").then((img) => img.default) : import("./com.blanqlabs-EOVRUB7U.js").then((w) => w.wallet);
    }
    case "com.walletconnect.com": {
      return image ? import("./image-LRYHEDIU.js").then((img) => img.default) : import("./com.walletconnect-ZQDFFVBL.js").then((w) => w.wallet);
    }
    case "app.nightly": {
      return image ? import("./image-PGQ4OE4K.js").then((img) => img.default) : import("./app-VJ4CBFA7.js").then((w) => w.wallet);
    }
    case "com.blazpay.wallet": {
      return image ? import("./image-RCFPVASX.js").then((img) => img.default) : import("./com.blazpay-BVG2KE3S.js").then((w) => w.wallet);
    }
    case "io.getjoin.prd": {
      return image ? import("./image-S42CXTXT.js").then((img) => img.default) : import("./io.getjoin-RAT4B5QM.js").then((w) => w.wallet);
    }
    case "xyz.talisman": {
      return image ? import("./image-HNFKVQM7.js").then((img) => img.default) : import("./xyz-57CIY6XD.js").then((w) => w.wallet);
    }
    case "eu.flashsoft.clear-wallet": {
      return image ? import("./image-XR622RPG.js").then((img) => img.default) : import("./eu.flashsoft-SPMP3P33.js").then((w) => w.wallet);
    }
    case "app.berasig": {
      return image ? import("./image-XDGLLW2G.js").then((img) => img.default) : import("./app-VBOOFFYD.js").then((w) => w.wallet);
    }
    case "com.wallet.reown": {
      return image ? import("./image-EYY6SRMS.js").then((img) => img.default) : import("./com.wallet-C2D4VX6E.js").then((w) => w.wallet);
    }
    case "com.lootrush": {
      return image ? import("./image-JZC2TB6T.js").then((img) => img.default) : import("./com-LFFOJG73.js").then((w) => w.wallet);
    }
    case "xyz.dawnwallet": {
      return image ? import("./image-6MS7YGDO.js").then((img) => img.default) : import("./xyz-72XBCICR.js").then((w) => w.wallet);
    }
    case "xyz.abs": {
      return image ? import("./image-B2VZ5MJO.js").then((img) => img.default) : import("./xyz-RSQL5OWG.js").then((w) => w.wallet);
    }
    default: {
      throw new Error(`Wallet with id ${id} not found`);
    }
  }
}

export {
  getWalletInfo
};
//# sourceMappingURL=chunk-23JZQXRW.js.map
