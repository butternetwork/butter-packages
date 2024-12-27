import { D as Hi, g as gn, B as ke, x as H, u as ji, G as Wi, H as zi, I as Vi, J as Ji, l as Xr, p as Rt, F as eo } from "./index-jFQGGD_v.js";
import { r as Qi, f as Ki, g as Gi, i as Yi, b as Zi, d as Xi, a as es, s as ts, n as ns, e as Ke, q as rs, j as Yn, o as os } from "./index.es-CvWhUDx1.js";
import { r as is } from "./dijkstra-CnN2IfZC.js";
let Zn = class extends Qi {
  constructor(e) {
    super(e), this.events = new Hi.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, n) {
    this.events.on(e, n);
  }
  once(e, n) {
    this.events.once(e, n);
  }
  off(e, n) {
    this.events.off(e, n);
  }
  removeListener(e, n) {
    this.events.removeListener(e, n);
  }
  async request(e, n) {
    return this.requestStrict(Ki(e.method, e.params || [], e.id || Gi().toString()), n);
  }
  async requestStrict(e, n) {
    return new Promise(async (r, o) => {
      if (!this.connection.connected) try {
        await this.open();
      } catch (i) {
        o(i);
      }
      this.events.on(`${e.id}`, (i) => {
        Yi(i) ? o(i.error) : r(i.result);
      });
      try {
        await this.connection.send(e, n);
      } catch (i) {
        o(i);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Zi(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
};
const kt = "Session currently connected", de = "Session currently disconnected", ss = "Session Rejected", as = "Missing JSON RPC response", cs = 'JSON-RPC success response must include "result" field', ls = 'JSON-RPC error response must include "error" field', us = 'JSON RPC request must have valid "method" value', ds = 'JSON RPC request must have valid "id" value', fs = "Missing one of the required parameters: bridge / uri / session", Xn = "JSON RPC response format is invalid", hs = "URI format is invalid", _s = "QRCode Modal not provided", er = "User close QRCode Modal", gs = [
  "session_request",
  "session_update",
  "exchange_key",
  "connect",
  "disconnect",
  "display_uri",
  "modal_closed",
  "transport_open",
  "transport_close",
  "transport_error"
], ps = [
  "wallet_addEthereumChain",
  "wallet_switchEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode"
], pn = [
  "eth_sendTransaction",
  "eth_signTransaction",
  "eth_sign",
  "eth_signTypedData",
  "eth_signTypedData_v1",
  "eth_signTypedData_v2",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "personal_sign",
  ...ps
], on = "WALLETCONNECT_DEEPLINK_CHOICE", ms = {
  1: "mainnet",
  3: "ropsten",
  4: "rinkeby",
  5: "goerli",
  42: "kovan"
};
var Tt, tr;
function to() {
  if (tr) return Tt;
  tr = 1, Tt = n, n.strict = r, n.loose = o;
  var t = Object.prototype.toString, e = {
    "[object Int8Array]": !0,
    "[object Int16Array]": !0,
    "[object Int32Array]": !0,
    "[object Uint8Array]": !0,
    "[object Uint8ClampedArray]": !0,
    "[object Uint16Array]": !0,
    "[object Uint32Array]": !0,
    "[object Float32Array]": !0,
    "[object Float64Array]": !0
  };
  function n(i) {
    return r(i) || o(i);
  }
  function r(i) {
    return i instanceof Int8Array || i instanceof Int16Array || i instanceof Int32Array || i instanceof Uint8Array || i instanceof Uint8ClampedArray || i instanceof Uint16Array || i instanceof Uint32Array || i instanceof Float32Array || i instanceof Float64Array;
  }
  function o(i) {
    return e[t.call(i)];
  }
  return Tt;
}
var ws = to();
const ys = /* @__PURE__ */ gn(ws);
var xt, nr;
function vs() {
  if (nr) return xt;
  nr = 1;
  var t = to().strict;
  return xt = function(n) {
    if (t(n)) {
      var r = ke.from(n.buffer);
      return n.byteLength !== n.buffer.byteLength && (r = r.slice(n.byteOffset, n.byteOffset + n.byteLength)), r;
    } else
      return ke.from(n);
  }, xt;
}
var bs = vs();
const Es = /* @__PURE__ */ gn(bs), mn = "hex", wn = "utf8", Cs = "binary", Ss = "buffer", Is = "array", Rs = "typed-array", ks = "array-buffer", ht = "0";
function Te(t) {
  return new Uint8Array(t);
}
function yn(t, e = !1) {
  const n = t.toString(mn);
  return e ? Ge(n) : n;
}
function vn(t) {
  return t.toString(wn);
}
function no(t) {
  return t.readUIntBE(0, t.length);
}
function Ae(t) {
  return Es(t);
}
function ie(t, e = !1) {
  return yn(Ae(t), e);
}
function ro(t) {
  return vn(Ae(t));
}
function oo(t) {
  return no(Ae(t));
}
function bn(t) {
  return ke.from(xe(t), mn);
}
function se(t) {
  return Te(bn(t));
}
function Ts(t) {
  return vn(bn(t));
}
function xs(t) {
  return oo(se(t));
}
function En(t) {
  return ke.from(t, wn);
}
function io(t) {
  return Te(En(t));
}
function Ns(t, e = !1) {
  return yn(En(t), e);
}
function Ms(t) {
  const e = parseInt(t, 10);
  return Ks(Qs(e), "Number can only safely store up to 53 bits"), e;
}
function As(t) {
  return Ps(Cn(t));
}
function Ls(t) {
  return Sn(Cn(t));
}
function Os(t, e) {
  return Bs(Cn(t), e);
}
function qs(t) {
  return `${t}`;
}
function Cn(t) {
  const e = (t >>> 0).toString(2);
  return Rn(e);
}
function Ps(t) {
  return Ae(Sn(t));
}
function Sn(t) {
  return new Uint8Array(js(t).map((e) => parseInt(e, 2)));
}
function Bs(t, e) {
  return ie(Sn(t), e);
}
function Us(t) {
  return !(typeof t != "string" || !new RegExp(/^[01]+$/).test(t) || t.length % 8 !== 0);
}
function so(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
}
function _t(t) {
  return ke.isBuffer(t);
}
function In(t) {
  return ys.strict(t) && !_t(t);
}
function ao(t) {
  return !In(t) && !_t(t) && typeof t.byteLength < "u";
}
function Ds(t) {
  return _t(t) ? Ss : In(t) ? Rs : ao(t) ? ks : Array.isArray(t) ? Is : typeof t;
}
function $s(t) {
  return Us(t) ? Cs : so(t) ? mn : wn;
}
function Fs(...t) {
  return ke.concat(t);
}
function co(...t) {
  let e = [];
  return t.forEach((n) => e = e.concat(Array.from(n))), new Uint8Array([...e]);
}
function Hs(t, e = 8) {
  const n = t % e;
  return n ? (t - n) / e * e + e : t;
}
function js(t, e = 8) {
  const n = Rn(t).match(new RegExp(`.{${e}}`, "gi"));
  return Array.from(n || []);
}
function Rn(t, e = 8, n = ht) {
  return Ws(t, Hs(t.length, e), n);
}
function Ws(t, e, n = ht) {
  return Gs(t, e, !0, n);
}
function xe(t) {
  return t.replace(/^0x/, "");
}
function Ge(t) {
  return t.startsWith("0x") ? t : `0x${t}`;
}
function zs(t) {
  return t = xe(t), t = Rn(t, 2), t && (t = Ge(t)), t;
}
function Vs(t) {
  const e = t.startsWith("0x");
  return t = xe(t), t = t.startsWith(ht) ? t.substring(1) : t, e ? Ge(t) : t;
}
function Js(t) {
  return typeof t > "u";
}
function Qs(t) {
  return !Js(t);
}
function Ks(t, e) {
  if (!t)
    throw new Error(e);
}
function Gs(t, e, n, r = ht) {
  const o = e - t.length;
  let i = t;
  return o > 0 && (i = r.repeat(o) + t), i;
}
function ut(t) {
  return Ae(new Uint8Array(t));
}
function Ys(t) {
  return ro(new Uint8Array(t));
}
function lo(t, e) {
  return ie(new Uint8Array(t), !e);
}
function Zs(t) {
  return oo(new Uint8Array(t));
}
function Xs(...t) {
  return se(t.map((e) => ie(new Uint8Array(e))).join("")).buffer;
}
function uo(t) {
  return Te(t).buffer;
}
function ea(t) {
  return vn(t);
}
function ta(t, e) {
  return yn(t, !e);
}
function na(t) {
  return no(t);
}
function ra(...t) {
  return Fs(...t);
}
function oa(t) {
  return io(t).buffer;
}
function ia(t) {
  return En(t);
}
function sa(t, e) {
  return Ns(t, !e);
}
function aa(t) {
  return Ms(t);
}
function ca(t) {
  return bn(t);
}
function fo(t) {
  return se(t).buffer;
}
function la(t) {
  return Ts(t);
}
function ua(t) {
  return xs(t);
}
function da(t) {
  return As(t);
}
function fa(t) {
  return Ls(t).buffer;
}
function ha(t) {
  return qs(t);
}
function ho(t, e) {
  return Os(Number(t), !e);
}
const _a = H.getFromWindow, ga = H.getFromWindowOrThrow, pa = H.getDocumentOrThrow, ma = H.getDocument, wa = H.getNavigatorOrThrow, _o = H.getNavigator, ya = H.getLocationOrThrow, go = H.getLocation, va = H.getCryptoOrThrow, ba = H.getCrypto, Ea = H.getLocalStorageOrThrow, gt = H.getLocalStorage;
function pt(t) {
  return Xi(t);
}
function mt() {
  const t = pt();
  return t && t.os ? t.os : void 0;
}
function po() {
  const t = mt();
  return t ? t.toLowerCase().includes("android") : !1;
}
function mo() {
  const t = mt();
  return t ? t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : !1;
}
function wo() {
  return mt() ? po() || mo() : !1;
}
function yo() {
  const t = pt();
  return t && t.name ? t.name.toLowerCase() === "node" : !1;
}
function vo() {
  return !yo() && !!_o();
}
const bo = es, Eo = ts;
function kn(t, e) {
  const n = Eo(e), r = gt();
  r && r.setItem(t, n);
}
function Tn(t) {
  let e = null, n = null;
  const r = gt();
  return r && (n = r.getItem(t)), e = n && bo(n), e;
}
function xn(t) {
  const e = gt();
  e && e.removeItem(t);
}
function sn() {
  return ji.getWindowMetadata();
}
function Ca(t) {
  return zs(t);
}
function Sa(t) {
  return Ge(t);
}
function Ia(t) {
  return xe(t);
}
function Ra(t) {
  return Vs(Ge(t));
}
const Co = ns;
function ct() {
  return ((e, n) => {
    for (n = e = ""; e++ < 36; n += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-")
      ;
    return n;
  })();
}
function ka() {
  console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
}
function So(t, e) {
  let n;
  const r = ms[t];
  return r && (n = `https://${r}.infura.io/v3/${e}`), n;
}
function Io(t, e) {
  let n;
  const r = So(t, e.infuraId);
  return e.custom && e.custom[t] ? n = e.custom[t] : r && (n = r), n;
}
function Ta(t, e) {
  const n = encodeURIComponent(t);
  return e.universalLink ? `${e.universalLink}/wc?uri=${n}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${n}` : "";
}
function xa(t) {
  const e = t.href.split("?")[0];
  kn(on, Object.assign(Object.assign({}, t), { href: e }));
}
function Ro(t, e) {
  return t.filter((n) => n.name.toLowerCase().includes(e.toLowerCase()))[0];
}
function Na(t, e) {
  let n = t;
  return e && (n = e.map((r) => Ro(t, r)).filter(Boolean)), n;
}
function Ma(t, e) {
  return async (...r) => new Promise((o, i) => {
    const s = (a, c) => {
      (a === null || typeof a > "u") && i(a), o(c);
    };
    t.apply(e, [...r, s]);
  });
}
function ko(t) {
  const e = t.message || "Failed or Rejected Request";
  let n = -32e3;
  if (t && !t.code)
    switch (e) {
      case "Parse error":
        n = -32700;
        break;
      case "Invalid request":
        n = -32600;
        break;
      case "Method not found":
        n = -32601;
        break;
      case "Invalid params":
        n = -32602;
        break;
      case "Internal error":
        n = -32603;
        break;
      default:
        n = -32e3;
        break;
    }
  const r = {
    code: n,
    message: e
  };
  return t.data && (r.data = t.data), r;
}
const To = "https://registry.walletconnect.com";
function Aa() {
  return To + "/api/v2/wallets";
}
function La() {
  return To + "/api/v2/dapps";
}
function xo(t, e = "mobile") {
  var n;
  return {
    name: t.name || "",
    shortName: t.metadata.shortName || "",
    color: t.metadata.colors.primary || "",
    logo: (n = t.image_url.sm) !== null && n !== void 0 ? n : "",
    universalLink: t[e].universal || "",
    deepLink: t[e].native || ""
  };
}
function Oa(t, e = "mobile") {
  return Object.values(t).filter((n) => !!n[e].universal || !!n[e].native).map((n) => xo(n, e));
}
var Nt = {}, rr;
function qa() {
  return rr || (rr = 1, function(t) {
    const e = Wi(), n = zi(), r = Vi(), o = Ji(), i = (l) => l == null;
    function s(l) {
      switch (l.arrayFormat) {
        case "index":
          return (f) => (g, h) => {
            const b = g.length;
            return h === void 0 || l.skipNull && h === null || l.skipEmptyString && h === "" ? g : h === null ? [...g, [d(f, l), "[", b, "]"].join("")] : [
              ...g,
              [d(f, l), "[", d(b, l), "]=", d(h, l)].join("")
            ];
          };
        case "bracket":
          return (f) => (g, h) => h === void 0 || l.skipNull && h === null || l.skipEmptyString && h === "" ? g : h === null ? [...g, [d(f, l), "[]"].join("")] : [...g, [d(f, l), "[]=", d(h, l)].join("")];
        case "comma":
        case "separator":
          return (f) => (g, h) => h == null || h.length === 0 ? g : g.length === 0 ? [[d(f, l), "=", d(h, l)].join("")] : [[g, d(h, l)].join(l.arrayFormatSeparator)];
        default:
          return (f) => (g, h) => h === void 0 || l.skipNull && h === null || l.skipEmptyString && h === "" ? g : h === null ? [...g, d(f, l)] : [...g, [d(f, l), "=", d(h, l)].join("")];
      }
    }
    function a(l) {
      let f;
      switch (l.arrayFormat) {
        case "index":
          return (g, h, b) => {
            if (f = /\[(\d*)\]$/.exec(g), g = g.replace(/\[\d*\]$/, ""), !f) {
              b[g] = h;
              return;
            }
            b[g] === void 0 && (b[g] = {}), b[g][f[1]] = h;
          };
        case "bracket":
          return (g, h, b) => {
            if (f = /(\[\])$/.exec(g), g = g.replace(/\[\]$/, ""), !f) {
              b[g] = h;
              return;
            }
            if (b[g] === void 0) {
              b[g] = [h];
              return;
            }
            b[g] = [].concat(b[g], h);
          };
        case "comma":
        case "separator":
          return (g, h, b) => {
            const v = typeof h == "string" && h.includes(l.arrayFormatSeparator), y = typeof h == "string" && !v && w(h, l).includes(l.arrayFormatSeparator);
            h = y ? w(h, l) : h;
            const E = v || y ? h.split(l.arrayFormatSeparator).map((C) => w(C, l)) : h === null ? h : w(h, l);
            b[g] = E;
          };
        default:
          return (g, h, b) => {
            if (b[g] === void 0) {
              b[g] = h;
              return;
            }
            b[g] = [].concat(b[g], h);
          };
      }
    }
    function c(l) {
      if (typeof l != "string" || l.length !== 1)
        throw new TypeError("arrayFormatSeparator must be single character string");
    }
    function d(l, f) {
      return f.encode ? f.strict ? e(l) : encodeURIComponent(l) : l;
    }
    function w(l, f) {
      return f.decode ? n(l) : l;
    }
    function u(l) {
      return Array.isArray(l) ? l.sort() : typeof l == "object" ? u(Object.keys(l)).sort((f, g) => Number(f) - Number(g)).map((f) => l[f]) : l;
    }
    function p(l) {
      const f = l.indexOf("#");
      return f !== -1 && (l = l.slice(0, f)), l;
    }
    function _(l) {
      let f = "";
      const g = l.indexOf("#");
      return g !== -1 && (f = l.slice(g)), f;
    }
    function S(l) {
      l = p(l);
      const f = l.indexOf("?");
      return f === -1 ? "" : l.slice(f + 1);
    }
    function R(l, f) {
      return f.parseNumbers && !Number.isNaN(Number(l)) && typeof l == "string" && l.trim() !== "" ? l = Number(l) : f.parseBooleans && l !== null && (l.toLowerCase() === "true" || l.toLowerCase() === "false") && (l = l.toLowerCase() === "true"), l;
    }
    function N(l, f) {
      f = Object.assign({
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1
      }, f), c(f.arrayFormatSeparator);
      const g = a(f), h = /* @__PURE__ */ Object.create(null);
      if (typeof l != "string" || (l = l.trim().replace(/^[?#&]/, ""), !l))
        return h;
      for (const b of l.split("&")) {
        if (b === "")
          continue;
        let [v, y] = r(f.decode ? b.replace(/\+/g, " ") : b, "=");
        y = y === void 0 ? null : ["comma", "separator"].includes(f.arrayFormat) ? y : w(y, f), g(w(v, f), y, h);
      }
      for (const b of Object.keys(h)) {
        const v = h[b];
        if (typeof v == "object" && v !== null)
          for (const y of Object.keys(v))
            v[y] = R(v[y], f);
        else
          h[b] = R(v, f);
      }
      return f.sort === !1 ? h : (f.sort === !0 ? Object.keys(h).sort() : Object.keys(h).sort(f.sort)).reduce((b, v) => {
        const y = h[v];
        return y && typeof y == "object" && !Array.isArray(y) ? b[v] = u(y) : b[v] = y, b;
      }, /* @__PURE__ */ Object.create(null));
    }
    t.extract = S, t.parse = N, t.stringify = (l, f) => {
      if (!l)
        return "";
      f = Object.assign({
        encode: !0,
        strict: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ","
      }, f), c(f.arrayFormatSeparator);
      const g = (y) => f.skipNull && i(l[y]) || f.skipEmptyString && l[y] === "", h = s(f), b = {};
      for (const y of Object.keys(l))
        g(y) || (b[y] = l[y]);
      const v = Object.keys(b);
      return f.sort !== !1 && v.sort(f.sort), v.map((y) => {
        const E = l[y];
        return E === void 0 ? "" : E === null ? d(y, f) : Array.isArray(E) ? E.reduce(h(y), []).join("&") : d(y, f) + "=" + d(E, f);
      }).filter((y) => y.length > 0).join("&");
    }, t.parseUrl = (l, f) => {
      f = Object.assign({
        decode: !0
      }, f);
      const [g, h] = r(l, "#");
      return Object.assign(
        {
          url: g.split("?")[0] || "",
          query: N(S(l), f)
        },
        f && f.parseFragmentIdentifier && h ? { fragmentIdentifier: w(h, f) } : {}
      );
    }, t.stringifyUrl = (l, f) => {
      f = Object.assign({
        encode: !0,
        strict: !0
      }, f);
      const g = p(l.url).split("?")[0] || "", h = t.extract(l.url), b = t.parse(h, { sort: !1 }), v = Object.assign(b, l.query);
      let y = t.stringify(v, f);
      y && (y = `?${y}`);
      let E = _(l.url);
      return l.fragmentIdentifier && (E = `#${d(l.fragmentIdentifier, f)}`), `${g}${y}${E}`;
    }, t.pick = (l, f, g) => {
      g = Object.assign({
        parseFragmentIdentifier: !0
      }, g);
      const { url: h, query: b, fragmentIdentifier: v } = t.parseUrl(l, g);
      return t.stringifyUrl({
        url: h,
        query: o(b, f),
        fragmentIdentifier: v
      }, g);
    }, t.exclude = (l, f, g) => {
      const h = Array.isArray(f) ? (b) => !f.includes(b) : (b, v) => !f(b, v);
      return t.pick(l, h, g);
    };
  }(Nt)), Nt;
}
var No = qa();
function Mo(t) {
  const e = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0;
  return typeof e < "u" ? t.substr(e) : "";
}
function Ao(t, e) {
  let n = Nn(t);
  return n = Object.assign(Object.assign({}, n), e), t = Lo(n), t;
}
function Nn(t) {
  return No.parse(t);
}
function Lo(t) {
  return No.stringify(t);
}
function Oo(t) {
  return typeof t.bridge < "u";
}
function qo(t) {
  const e = t.indexOf(":"), n = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r = t.substring(0, e), o = t.substring(e + 1, n);
  function i(u) {
    const _ = u.split("@");
    return {
      handshakeTopic: _[0],
      version: parseInt(_[1], 10)
    };
  }
  const s = i(o), a = typeof n < "u" ? t.substr(n) : "";
  function c(u) {
    const p = Nn(u);
    return {
      key: p.key || "",
      bridge: p.bridge || ""
    };
  }
  const d = c(a);
  return Object.assign(Object.assign({ protocol: r }, s), d);
}
function Pa(t) {
  return t === "" || typeof t == "string" && t.trim() === "";
}
function Ba(t) {
  return !(t && t.length);
}
function Ua(t) {
  return _t(t);
}
function Da(t) {
  return In(t);
}
function $a(t) {
  return ao(t);
}
function Fa(t) {
  return Ds(t);
}
function Ha(t) {
  return $s(t);
}
function ja(t, e) {
  return so(t, e);
}
function Wa(t) {
  return typeof t.params == "object";
}
function Po(t) {
  return typeof t.method < "u";
}
function Ie(t) {
  return typeof t.result < "u";
}
function Ve(t) {
  return typeof t.error < "u";
}
function an(t) {
  return typeof t.event < "u";
}
function Bo(t) {
  return gs.includes(t) || t.startsWith("wc_");
}
function Uo(t) {
  return t.method.startsWith("wc_") ? !0 : !pn.includes(t.method);
}
const za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addHexPrefix: Sa,
  appendToQueryString: Ao,
  concatArrayBuffers: Xs,
  concatBuffers: ra,
  convertArrayBufferToBuffer: ut,
  convertArrayBufferToHex: lo,
  convertArrayBufferToNumber: Zs,
  convertArrayBufferToUtf8: Ys,
  convertBufferToArrayBuffer: uo,
  convertBufferToHex: ta,
  convertBufferToNumber: na,
  convertBufferToUtf8: ea,
  convertHexToArrayBuffer: fo,
  convertHexToBuffer: ca,
  convertHexToNumber: ua,
  convertHexToUtf8: la,
  convertNumberToArrayBuffer: fa,
  convertNumberToBuffer: da,
  convertNumberToHex: ho,
  convertNumberToUtf8: ha,
  convertUtf8ToArrayBuffer: oa,
  convertUtf8ToBuffer: ia,
  convertUtf8ToHex: sa,
  convertUtf8ToNumber: aa,
  detectEnv: pt,
  detectOS: mt,
  formatIOSMobile: Ta,
  formatMobileRegistry: Oa,
  formatMobileRegistryEntry: xo,
  formatQueryString: Lo,
  formatRpcError: ko,
  getClientMeta: sn,
  getCrypto: ba,
  getCryptoOrThrow: va,
  getDappRegistryUrl: La,
  getDocument: ma,
  getDocumentOrThrow: pa,
  getEncoding: Ha,
  getFromWindow: _a,
  getFromWindowOrThrow: ga,
  getInfuraRpcUrl: So,
  getLocal: Tn,
  getLocalStorage: gt,
  getLocalStorageOrThrow: Ea,
  getLocation: go,
  getLocationOrThrow: ya,
  getMobileLinkRegistry: Na,
  getMobileRegistryEntry: Ro,
  getNavigator: _o,
  getNavigatorOrThrow: wa,
  getQueryString: Mo,
  getRpcUrl: Io,
  getType: Fa,
  getWalletRegistryUrl: Aa,
  isAndroid: po,
  isArrayBuffer: $a,
  isBrowser: vo,
  isBuffer: Ua,
  isEmptyArray: Ba,
  isEmptyString: Pa,
  isHexString: ja,
  isIOS: mo,
  isInternalEvent: an,
  isJsonRpcRequest: Po,
  isJsonRpcResponseError: Ve,
  isJsonRpcResponseSuccess: Ie,
  isJsonRpcSubscription: Wa,
  isMobile: wo,
  isNode: yo,
  isReservedEvent: Bo,
  isSilentPayload: Uo,
  isTypedArray: Da,
  isWalletConnectSession: Oo,
  logDeprecationWarning: ka,
  parseQueryString: Nn,
  parseWalletConnectUri: qo,
  payloadId: Co,
  promisify: Ma,
  removeHexLeadingZeros: Ra,
  removeHexPrefix: Ia,
  removeLocal: xn,
  safeJsonParse: bo,
  safeJsonStringify: Eo,
  sanitizeHex: Ca,
  saveMobileLinkInfo: xa,
  setLocal: kn,
  uuid: ct
}, Symbol.toStringTag, { value: "Module" }));
class Va {
  constructor() {
    this._eventEmitters = [], typeof window < "u" && typeof window.addEventListener < "u" && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")));
  }
  on(e, n) {
    this._eventEmitters.push({
      event: e,
      callback: n
    });
  }
  trigger(e) {
    let n = [];
    e && (n = this._eventEmitters.filter((r) => r.event === e)), n.forEach((r) => {
      r.callback();
    });
  }
}
const Ja = typeof window.WebSocket < "u" ? window.WebSocket : require("ws");
class Qa {
  constructor(e) {
    if (this.opts = e, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = e.protocol, this._version = e.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = e.subscriptions || [], this._netMonitor = e.netMonitor || new Va(), !e.url || typeof e.url != "string")
      throw new Error("Missing or invalid WebSocket url");
    this._url = e.url, this._netMonitor.on("online", () => this._socketCreate());
  }
  set readyState(e) {
  }
  get readyState() {
    return this._socket ? this._socket.readyState : -1;
  }
  set connecting(e) {
  }
  get connecting() {
    return this.readyState === 0;
  }
  set connected(e) {
  }
  get connected() {
    return this.readyState === 1;
  }
  set closing(e) {
  }
  get closing() {
    return this.readyState === 2;
  }
  set closed(e) {
  }
  get closed() {
    return this.readyState === 3;
  }
  open() {
    this._socketCreate();
  }
  close() {
    this._socketClose();
  }
  send(e, n, r) {
    if (!n || typeof n != "string")
      throw new Error("Missing or invalid topic field");
    this._socketSend({
      topic: n,
      type: "pub",
      payload: e,
      silent: !!r
    });
  }
  subscribe(e) {
    this._socketSend({
      topic: e,
      type: "sub",
      payload: "",
      silent: !0
    });
  }
  on(e, n) {
    this._events.push({ event: e, callback: n });
  }
  _socketCreate() {
    if (this._nextSocket)
      return;
    const e = Ka(this._url, this._protocol, this._version);
    if (this._nextSocket = new Ja(e), !this._nextSocket)
      throw new Error("Failed to create socket");
    this._nextSocket.onmessage = (n) => this._socketReceive(n), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = (n) => this._socketError(n), this._nextSocket.onclose = () => {
      setTimeout(() => {
        this._nextSocket = null, this._socketCreate();
      }, 1e3);
    };
  }
  _socketOpen() {
    this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue();
  }
  _socketClose() {
    this._socket && (this._socket.onclose = () => {
    }, this._socket.close());
  }
  _socketSend(e) {
    const n = JSON.stringify(e);
    this._socket && this._socket.readyState === 1 ? this._socket.send(n) : (this._setToQueue(e), this._socketCreate());
  }
  async _socketReceive(e) {
    let n;
    try {
      n = JSON.parse(e.data);
    } catch {
      return;
    }
    if (this._socketSend({
      topic: n.topic,
      type: "ack",
      payload: "",
      silent: !0
    }), this._socket && this._socket.readyState === 1) {
      const r = this._events.filter((o) => o.event === "message");
      r && r.length && r.forEach((o) => o.callback(n));
    }
  }
  _socketError(e) {
    const n = this._events.filter((r) => r.event === "error");
    n && n.length && n.forEach((r) => r.callback(e));
  }
  _queueSubscriptions() {
    this._subscriptions.forEach((n) => this._queue.push({
      topic: n,
      type: "sub",
      payload: "",
      silent: !0
    })), this._subscriptions = this.opts.subscriptions || [];
  }
  _setToQueue(e) {
    this._queue.push(e);
  }
  _pushQueue() {
    this._queue.forEach((n) => this._socketSend(n)), this._queue = [];
  }
}
function Ka(t, e, n) {
  var r, o;
  const s = (t.startsWith("https") ? t.replace("https", "wss") : t.startsWith("http") ? t.replace("http", "ws") : t).split("?"), a = vo() ? {
    protocol: e,
    version: n,
    env: "browser",
    host: ((r = go()) === null || r === void 0 ? void 0 : r.host) || ""
  } : {
    protocol: e,
    version: n,
    env: ((o = pt()) === null || o === void 0 ? void 0 : o.name) || ""
  }, c = Ao(Mo(s[1] || ""), a);
  return s[0] + "?" + c;
}
class Ga {
  constructor() {
    this._eventEmitters = [];
  }
  subscribe(e) {
    this._eventEmitters.push(e);
  }
  unsubscribe(e) {
    this._eventEmitters = this._eventEmitters.filter((n) => n.event !== e);
  }
  trigger(e) {
    let n = [], r;
    Po(e) ? r = e.method : Ie(e) || Ve(e) ? r = `response:${e.id}` : an(e) ? r = e.event : r = "", r && (n = this._eventEmitters.filter((o) => o.event === r)), (!n || !n.length) && !Bo(r) && !an(r) && (n = this._eventEmitters.filter((o) => o.event === "call_request")), n.forEach((o) => {
      if (Ve(e)) {
        const i = new Error(e.error.message);
        o.callback(i, null);
      } else
        o.callback(null, e);
    });
  }
}
class Ya {
  constructor(e = "walletconnect") {
    this.storageId = e;
  }
  getSession() {
    let e = null;
    const n = Tn(this.storageId);
    return n && Oo(n) && (e = n), e;
  }
  setSession(e) {
    return kn(this.storageId, e), e;
  }
  removeSession() {
    xn(this.storageId);
  }
}
const Za = "walletconnect.org", Xa = "abcdefghijklmnopqrstuvwxyz0123456789", Do = Xa.split("").map((t) => `https://${t}.bridge.walletconnect.org`);
function ec(t) {
  let e = t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0];
  return e = e.split(":")[0], e = e.split("?")[0], e;
}
function tc(t) {
  return ec(t).split(".").slice(-2).join(".");
}
function nc() {
  return Math.floor(Math.random() * Do.length);
}
function rc() {
  return Do[nc()];
}
function oc(t) {
  return tc(t) === Za;
}
function ic(t) {
  return oc(t) ? rc() : t;
}
class sc {
  constructor(e) {
    if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new Ga(), this._clientMeta = sn() || e.connectorOpts.clientMeta || null, this._cryptoLib = e.cryptoLib, this._sessionStorage = e.sessionStorage || new Ya(e.connectorOpts.storageId), this._qrcodeModal = e.connectorOpts.qrcodeModal, this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions, this._signingMethods = [...pn, ...e.connectorOpts.signingMethods || []], !e.connectorOpts.bridge && !e.connectorOpts.uri && !e.connectorOpts.session)
      throw new Error(fs);
    e.connectorOpts.bridge && (this.bridge = ic(e.connectorOpts.bridge)), e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
    const n = e.connectorOpts.session || this._getStorageSession();
    n && (this.session = n), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = e.transport || new Qa({
      protocol: this.protocol,
      version: this.version,
      url: this.bridge,
      subscriptions: [this.clientId]
    }), this._subscribeToInternalEvents(), this._initTransport(), e.connectorOpts.uri && this._subscribeToSessionRequest(), e.pushServerOpts && this._registerPushServer(e.pushServerOpts);
  }
  set bridge(e) {
    e && (this._bridge = e);
  }
  get bridge() {
    return this._bridge;
  }
  set key(e) {
    if (!e)
      return;
    const n = fo(e);
    this._key = n;
  }
  get key() {
    return this._key ? lo(this._key, !0) : "";
  }
  set clientId(e) {
    e && (this._clientId = e);
  }
  get clientId() {
    let e = this._clientId;
    return e || (e = this._clientId = ct()), this._clientId;
  }
  set peerId(e) {
    e && (this._peerId = e);
  }
  get peerId() {
    return this._peerId;
  }
  set clientMeta(e) {
  }
  get clientMeta() {
    let e = this._clientMeta;
    return e || (e = this._clientMeta = sn()), e;
  }
  set peerMeta(e) {
    this._peerMeta = e;
  }
  get peerMeta() {
    return this._peerMeta;
  }
  set handshakeTopic(e) {
    e && (this._handshakeTopic = e);
  }
  get handshakeTopic() {
    return this._handshakeTopic;
  }
  set handshakeId(e) {
    e && (this._handshakeId = e);
  }
  get handshakeId() {
    return this._handshakeId;
  }
  get uri() {
    return this._formatUri();
  }
  set uri(e) {
    if (!e)
      return;
    const { handshakeTopic: n, bridge: r, key: o } = this._parseUri(e);
    this.handshakeTopic = n, this.bridge = r, this.key = o;
  }
  set chainId(e) {
    this._chainId = e;
  }
  get chainId() {
    return this._chainId;
  }
  set networkId(e) {
    this._networkId = e;
  }
  get networkId() {
    return this._networkId;
  }
  set accounts(e) {
    this._accounts = e;
  }
  get accounts() {
    return this._accounts;
  }
  set rpcUrl(e) {
    this._rpcUrl = e;
  }
  get rpcUrl() {
    return this._rpcUrl;
  }
  set connected(e) {
  }
  get connected() {
    return this._connected;
  }
  set pending(e) {
  }
  get pending() {
    return !!this._handshakeTopic;
  }
  get session() {
    return {
      connected: this.connected,
      accounts: this.accounts,
      chainId: this.chainId,
      bridge: this.bridge,
      key: this.key,
      clientId: this.clientId,
      clientMeta: this.clientMeta,
      peerId: this.peerId,
      peerMeta: this.peerMeta,
      handshakeId: this.handshakeId,
      handshakeTopic: this.handshakeTopic
    };
  }
  set session(e) {
    e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic);
  }
  on(e, n) {
    const r = {
      event: e,
      callback: n
    };
    this._eventManager.subscribe(r);
  }
  off(e) {
    this._eventManager.unsubscribe(e);
  }
  async createInstantRequest(e) {
    this._key = await this._generateKey();
    const n = this._formatRequest({
      method: "wc_instantRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          request: this._formatRequest(e)
        }
      ]
    });
    this.handshakeId = n.id, this.handshakeTopic = ct(), this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    }), this.on("modal_closed", () => {
      throw new Error(er);
    });
    const r = () => {
      this.killSession();
    };
    try {
      const o = await this._sendCallRequest(n);
      return o && r(), o;
    } catch (o) {
      throw r(), o;
    }
  }
  async connect(e) {
    if (!this._qrcodeModal)
      throw new Error(_s);
    return this.connected ? {
      chainId: this.chainId,
      accounts: this.accounts
    } : (await this.createSession(e), new Promise(async (n, r) => {
      this.on("modal_closed", () => r(new Error(er))), this.on("connect", (o, i) => {
        if (o)
          return r(o);
        n(i.params[0]);
      });
    }));
  }
  async createSession(e) {
    if (this._connected)
      throw new Error(kt);
    if (this.pending)
      return;
    this._key = await this._generateKey();
    const n = this._formatRequest({
      method: "wc_sessionRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          chainId: e && e.chainId ? e.chainId : null
        }
      ]
    });
    this.handshakeId = n.id, this.handshakeTopic = ct(), this._sendSessionRequest(n, "Session update rejected", {
      topic: this.handshakeTopic
    }), this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
  }
  approveSession(e) {
    if (this._connected)
      throw new Error(kt);
    this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
    const n = {
      approved: !0,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl,
      peerId: this.clientId,
      peerMeta: this.clientMeta
    }, r = {
      id: this.handshakeId,
      jsonrpc: "2.0",
      result: n
    };
    this._sendResponse(r), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    });
  }
  rejectSession(e) {
    if (this._connected)
      throw new Error(kt);
    const n = e && e.message ? e.message : ss, r = this._formatResponse({
      id: this.handshakeId,
      error: { message: n }
    });
    this._sendResponse(r), this._connected = !1, this._eventManager.trigger({
      event: "disconnect",
      params: [{ message: n }]
    }), this._removeStorageSession();
  }
  updateSession(e) {
    if (!this._connected)
      throw new Error(de);
    this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
    const n = {
      approved: !0,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl
    }, r = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [n]
    });
    this._sendSessionRequest(r, "Session update rejected"), this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    }), this._manageStorageSession();
  }
  async killSession(e) {
    const n = e ? e.message : "Session Disconnected", r = {
      approved: !1,
      chainId: null,
      networkId: null,
      accounts: null
    }, o = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [r]
    });
    await this._sendRequest(o), this._handleSessionDisconnect(n);
  }
  async sendTransaction(e) {
    if (!this._connected)
      throw new Error(de);
    const n = e, r = this._formatRequest({
      method: "eth_sendTransaction",
      params: [n]
    });
    return await this._sendCallRequest(r);
  }
  async signTransaction(e) {
    if (!this._connected)
      throw new Error(de);
    const n = e, r = this._formatRequest({
      method: "eth_signTransaction",
      params: [n]
    });
    return await this._sendCallRequest(r);
  }
  async signMessage(e) {
    if (!this._connected)
      throw new Error(de);
    const n = this._formatRequest({
      method: "eth_sign",
      params: e
    });
    return await this._sendCallRequest(n);
  }
  async signPersonalMessage(e) {
    if (!this._connected)
      throw new Error(de);
    const n = this._formatRequest({
      method: "personal_sign",
      params: e
    });
    return await this._sendCallRequest(n);
  }
  async signTypedData(e) {
    if (!this._connected)
      throw new Error(de);
    const n = this._formatRequest({
      method: "eth_signTypedData",
      params: e
    });
    return await this._sendCallRequest(n);
  }
  async updateChain(e) {
    if (!this._connected)
      throw new Error("Session currently disconnected");
    const n = this._formatRequest({
      method: "wallet_updateChain",
      params: [e]
    });
    return await this._sendCallRequest(n);
  }
  unsafeSend(e, n) {
    return this._sendRequest(e, n), this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request: e, options: n }]
    }), new Promise((r, o) => {
      this._subscribeToResponse(e.id, (i, s) => {
        if (i) {
          o(i);
          return;
        }
        if (!s)
          throw new Error(as);
        r(s);
      });
    });
  }
  async sendCustomRequest(e, n) {
    if (!this._connected)
      throw new Error(de);
    switch (e.method) {
      case "eth_accounts":
        return this.accounts;
      case "eth_chainId":
        return ho(this.chainId);
      case "eth_sendTransaction":
      case "eth_signTransaction":
        e.params;
        break;
      case "personal_sign":
        e.params;
        break;
    }
    const r = this._formatRequest(e);
    return await this._sendCallRequest(r, n);
  }
  approveRequest(e) {
    if (Ie(e)) {
      const n = this._formatResponse(e);
      this._sendResponse(n);
    } else
      throw new Error(cs);
  }
  rejectRequest(e) {
    if (Ve(e)) {
      const n = this._formatResponse(e);
      this._sendResponse(n);
    } else
      throw new Error(ls);
  }
  transportClose() {
    this._transport.close();
  }
  async _sendRequest(e, n) {
    const r = this._formatRequest(e), o = await this._encrypt(r), i = typeof (n == null ? void 0 : n.topic) < "u" ? n.topic : this.peerId, s = JSON.stringify(o), a = typeof (n == null ? void 0 : n.forcePushNotification) < "u" ? !n.forcePushNotification : Uo(r);
    this._transport.send(s, i, a);
  }
  async _sendResponse(e) {
    const n = await this._encrypt(e), r = this.peerId, o = JSON.stringify(n);
    this._transport.send(o, r, !0);
  }
  async _sendSessionRequest(e, n, r) {
    this._sendRequest(e, r), this._subscribeToSessionResponse(e.id, n);
  }
  _sendCallRequest(e, n) {
    return this._sendRequest(e, n), this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request: e, options: n }]
    }), this._subscribeToCallResponse(e.id);
  }
  _formatRequest(e) {
    if (typeof e.method > "u")
      throw new Error(us);
    return {
      id: typeof e.id > "u" ? Co() : e.id,
      jsonrpc: "2.0",
      method: e.method,
      params: typeof e.params > "u" ? [] : e.params
    };
  }
  _formatResponse(e) {
    if (typeof e.id > "u")
      throw new Error(ds);
    const n = { id: e.id, jsonrpc: "2.0" };
    if (Ve(e)) {
      const r = ko(e.error);
      return Object.assign(Object.assign(Object.assign({}, n), e), { error: r });
    } else if (Ie(e))
      return Object.assign(Object.assign({}, n), e);
    throw new Error(Xn);
  }
  _handleSessionDisconnect(e) {
    const n = e || "Session Disconnected";
    this._connected || (this._qrcodeModal && this._qrcodeModal.close(), xn(on)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
      event: "disconnect",
      params: [{ message: n }]
    }), this._removeStorageSession(), this.transportClose();
  }
  _handleSessionResponse(e, n) {
    n ? n.approved ? (this._connected ? (n.chainId && (this.chainId = n.chainId), n.accounts && (this.accounts = n.accounts), this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    })) : (this._connected = !0, n.chainId && (this.chainId = n.chainId), n.accounts && (this.accounts = n.accounts), n.peerId && !this.peerId && (this.peerId = n.peerId), n.peerMeta && !this.peerMeta && (this.peerMeta = n.peerMeta), this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    })), this._manageStorageSession()) : this._handleSessionDisconnect(e) : this._handleSessionDisconnect(e);
  }
  async _handleIncomingMessages(e) {
    if (![this.clientId, this.handshakeTopic].includes(e.topic))
      return;
    let r;
    try {
      r = JSON.parse(e.payload);
    } catch {
      return;
    }
    const o = await this._decrypt(r);
    o && this._eventManager.trigger(o);
  }
  _subscribeToSessionRequest() {
    this._transport.subscribe(this.handshakeTopic);
  }
  _subscribeToResponse(e, n) {
    this.on(`response:${e}`, n);
  }
  _subscribeToSessionResponse(e, n) {
    this._subscribeToResponse(e, (r, o) => {
      if (r) {
        this._handleSessionResponse(r.message);
        return;
      }
      Ie(o) ? this._handleSessionResponse(n, o.result) : o.error && o.error.message ? this._handleSessionResponse(o.error.message) : this._handleSessionResponse(n);
    });
  }
  _subscribeToCallResponse(e) {
    return new Promise((n, r) => {
      this._subscribeToResponse(e, (o, i) => {
        if (o) {
          r(o);
          return;
        }
        Ie(i) ? n(i.result) : i.error && i.error.message ? r(i.error) : r(new Error(Xn));
      });
    });
  }
  _subscribeToInternalEvents() {
    this.on("display_uri", () => {
      this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
        this._eventManager.trigger({
          event: "modal_closed",
          params: []
        });
      }, this._qrcodeModalOptions);
    }), this.on("connect", () => {
      this._qrcodeModal && this._qrcodeModal.close();
    }), this.on("call_request_sent", (e, n) => {
      const { request: r } = n.params[0];
      if (wo() && this._signingMethods.includes(r.method)) {
        const o = Tn(on);
        o && (window.location.href = o.href);
      }
    }), this.on("wc_sessionRequest", (e, n) => {
      e && this._eventManager.trigger({
        event: "error",
        params: [
          {
            code: "SESSION_REQUEST_ERROR",
            message: e.toString()
          }
        ]
      }), this.handshakeId = n.id, this.peerId = n.params[0].peerId, this.peerMeta = n.params[0].peerMeta;
      const r = Object.assign(Object.assign({}, n), { method: "session_request" });
      this._eventManager.trigger(r);
    }), this.on("wc_sessionUpdate", (e, n) => {
      e && this._handleSessionResponse(e.message), this._handleSessionResponse("Session disconnected", n.params[0]);
    });
  }
  _initTransport() {
    this._transport.on("message", (e) => this._handleIncomingMessages(e)), this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] })), this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] })), this._transport.on("error", () => this._eventManager.trigger({
      event: "transport_error",
      params: ["Websocket connection failed"]
    })), this._transport.open();
  }
  _formatUri() {
    const e = this.protocol, n = this.handshakeTopic, r = this.version, o = encodeURIComponent(this.bridge), i = this.key;
    return `${e}:${n}@${r}?bridge=${o}&key=${i}`;
  }
  _parseUri(e) {
    const n = qo(e);
    if (n.protocol === this.protocol) {
      if (!n.handshakeTopic)
        throw Error("Invalid or missing handshakeTopic parameter value");
      const r = n.handshakeTopic;
      if (!n.bridge)
        throw Error("Invalid or missing bridge url parameter value");
      const o = decodeURIComponent(n.bridge);
      if (!n.key)
        throw Error("Invalid or missing key parameter value");
      const i = n.key;
      return { handshakeTopic: r, bridge: o, key: i };
    } else
      throw new Error(hs);
  }
  async _generateKey() {
    return this._cryptoLib ? await this._cryptoLib.generateKey() : null;
  }
  async _encrypt(e) {
    const n = this._key;
    return this._cryptoLib && n ? await this._cryptoLib.encrypt(e, n) : null;
  }
  async _decrypt(e) {
    const n = this._key;
    return this._cryptoLib && n ? await this._cryptoLib.decrypt(e, n) : null;
  }
  _getStorageSession() {
    let e = null;
    return this._sessionStorage && (e = this._sessionStorage.getSession()), e;
  }
  _setStorageSession() {
    this._sessionStorage && this._sessionStorage.setSession(this.session);
  }
  _removeStorageSession() {
    this._sessionStorage && this._sessionStorage.removeSession();
  }
  _manageStorageSession() {
    this._connected ? this._setStorageSession() : this._removeStorageSession();
  }
  _registerPushServer(e) {
    if (!e.url || typeof e.url != "string")
      throw Error("Invalid or missing pushServerOpts.url parameter value");
    if (!e.type || typeof e.type != "string")
      throw Error("Invalid or missing pushServerOpts.type parameter value");
    if (!e.token || typeof e.token != "string")
      throw Error("Invalid or missing pushServerOpts.token parameter value");
    const n = {
      bridge: this.bridge,
      topic: this.clientId,
      type: e.type,
      token: e.token,
      peerName: "",
      language: e.language || ""
    };
    this.on("connect", async (r, o) => {
      if (r)
        throw r;
      if (e.peerMeta) {
        const i = o.params[0].peerMeta.name;
        n.peerName = i;
      }
      try {
        if (!(await (await fetch(`${e.url}/new`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(n)
        })).json()).success)
          throw Error("Failed to register in Push Server");
      } catch {
        throw Error("Failed to register in Push Server");
      }
    });
  }
}
function ac(t) {
  return Ke.getBrowerCrypto().getRandomValues(new Uint8Array(t));
}
const $o = 256, Fo = $o, cc = $o, ae = "AES-CBC", lc = `SHA-${Fo}`, cn = "HMAC", uc = "encrypt", dc = "decrypt", fc = "sign", hc = "verify";
function _c(t) {
  return t === ae ? { length: Fo, name: ae } : {
    hash: { name: lc },
    name: cn
  };
}
function gc(t) {
  return t === ae ? [uc, dc] : [fc, hc];
}
async function Mn(t, e = ae) {
  return Ke.getSubtleCrypto().importKey("raw", t, _c(e), !0, gc(e));
}
async function pc(t, e, n) {
  const r = Ke.getSubtleCrypto(), o = await Mn(e, ae), i = await r.encrypt({
    iv: t,
    name: ae
  }, o, n);
  return new Uint8Array(i);
}
async function mc(t, e, n) {
  const r = Ke.getSubtleCrypto(), o = await Mn(e, ae), i = await r.decrypt({
    iv: t,
    name: ae
  }, o, n);
  return new Uint8Array(i);
}
async function wc(t, e) {
  const n = Ke.getSubtleCrypto(), r = await Mn(t, cn), o = await n.sign({
    length: cc,
    name: cn
  }, r, e);
  return new Uint8Array(o);
}
function yc(t, e, n) {
  return pc(t, e, n);
}
function vc(t, e, n) {
  return mc(t, e, n);
}
async function Ho(t, e) {
  return await wc(t, e);
}
async function jo(t) {
  const e = (t || 256) / 8, n = ac(e);
  return uo(Ae(n));
}
async function Wo(t, e) {
  const n = se(t.data), r = se(t.iv), o = se(t.hmac), i = ie(o, !1), s = co(n, r), a = await Ho(e, s), c = ie(a, !1);
  return xe(i) === xe(c);
}
async function bc(t, e, n) {
  const r = Te(ut(e)), o = n || await jo(128), i = Te(ut(o)), s = ie(i, !1), a = JSON.stringify(t), c = io(a), d = await yc(i, r, c), w = ie(d, !1), u = co(d, i), p = await Ho(r, u), _ = ie(p, !1);
  return {
    data: w,
    hmac: _,
    iv: s
  };
}
async function Ec(t, e) {
  const n = Te(ut(e));
  if (!n)
    throw new Error("Missing key: required for decryption");
  if (!await Wo(t, n))
    return null;
  const o = se(t.data), i = se(t.iv), s = await vc(i, n, o), a = ro(s);
  let c;
  try {
    c = JSON.parse(a);
  } catch {
    return null;
  }
  return c;
}
const Cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decrypt: Ec,
  encrypt: bc,
  generateKey: jo,
  verifyHmac: Wo
}, Symbol.toStringTag, { value: "Module" }));
class Sc extends sc {
  constructor(e, n) {
    super({
      cryptoLib: Cc,
      connectorOpts: e,
      pushServerOpts: n
    });
  }
}
const Ic = /* @__PURE__ */ Xr(za);
var Se = {}, Mt, or;
function Rc() {
  return or || (or = 1, Mt = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  }), Mt;
}
var At = {}, oe = {}, ir;
function he() {
  if (ir) return oe;
  ir = 1;
  let t;
  const e = [
    0,
    // Not used
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
  ];
  return oe.getSymbolSize = function(r) {
    if (!r) throw new Error('"version" cannot be null or undefined');
    if (r < 1 || r > 40) throw new Error('"version" should be in range from 1 to 40');
    return r * 4 + 17;
  }, oe.getSymbolTotalCodewords = function(r) {
    return e[r];
  }, oe.getBCHDigit = function(n) {
    let r = 0;
    for (; n !== 0; )
      r++, n >>>= 1;
    return r;
  }, oe.setToSJISFunction = function(r) {
    if (typeof r != "function")
      throw new Error('"toSJISFunc" is not a valid function.');
    t = r;
  }, oe.isKanjiModeEnabled = function() {
    return typeof t < "u";
  }, oe.toSJIS = function(r) {
    return t(r);
  }, oe;
}
var Lt = {}, sr;
function An() {
  return sr || (sr = 1, function(t) {
    t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
    function e(n) {
      if (typeof n != "string")
        throw new Error("Param is not a string");
      switch (n.toLowerCase()) {
        case "l":
        case "low":
          return t.L;
        case "m":
        case "medium":
          return t.M;
        case "q":
        case "quartile":
          return t.Q;
        case "h":
        case "high":
          return t.H;
        default:
          throw new Error("Unknown EC Level: " + n);
      }
    }
    t.isValid = function(r) {
      return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
    }, t.from = function(r, o) {
      if (t.isValid(r))
        return r;
      try {
        return e(r);
      } catch {
        return o;
      }
    };
  }(Lt)), Lt;
}
var Ot, ar;
function kc() {
  if (ar) return Ot;
  ar = 1;
  function t() {
    this.buffer = [], this.length = 0;
  }
  return t.prototype = {
    get: function(e) {
      const n = Math.floor(e / 8);
      return (this.buffer[n] >>> 7 - e % 8 & 1) === 1;
    },
    put: function(e, n) {
      for (let r = 0; r < n; r++)
        this.putBit((e >>> n - r - 1 & 1) === 1);
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(e) {
      const n = Math.floor(this.length / 8);
      this.buffer.length <= n && this.buffer.push(0), e && (this.buffer[n] |= 128 >>> this.length % 8), this.length++;
    }
  }, Ot = t, Ot;
}
var qt, cr;
function Tc() {
  if (cr) return qt;
  cr = 1;
  function t(e) {
    if (!e || e < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
  }
  return t.prototype.set = function(e, n, r, o) {
    const i = e * this.size + n;
    this.data[i] = r, o && (this.reservedBit[i] = !0);
  }, t.prototype.get = function(e, n) {
    return this.data[e * this.size + n];
  }, t.prototype.xor = function(e, n, r) {
    this.data[e * this.size + n] ^= r;
  }, t.prototype.isReserved = function(e, n) {
    return this.reservedBit[e * this.size + n];
  }, qt = t, qt;
}
var Pt = {}, lr;
function xc() {
  return lr || (lr = 1, function(t) {
    const e = he().getSymbolSize;
    t.getRowColCoords = function(r) {
      if (r === 1) return [];
      const o = Math.floor(r / 7) + 2, i = e(r), s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2, a = [i - 7];
      for (let c = 1; c < o - 1; c++)
        a[c] = a[c - 1] - s;
      return a.push(6), a.reverse();
    }, t.getPositions = function(r) {
      const o = [], i = t.getRowColCoords(r), s = i.length;
      for (let a = 0; a < s; a++)
        for (let c = 0; c < s; c++)
          a === 0 && c === 0 || // top-left
          a === 0 && c === s - 1 || // bottom-left
          a === s - 1 && c === 0 || o.push([i[a], i[c]]);
      return o;
    };
  }(Pt)), Pt;
}
var Bt = {}, ur;
function Nc() {
  if (ur) return Bt;
  ur = 1;
  const t = he().getSymbolSize, e = 7;
  return Bt.getPositions = function(r) {
    const o = t(r);
    return [
      // top-left
      [0, 0],
      // top-right
      [o - e, 0],
      // bottom-left
      [0, o - e]
    ];
  }, Bt;
}
var Ut = {}, dr;
function Mc() {
  return dr || (dr = 1, function(t) {
    t.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    const e = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    t.isValid = function(o) {
      return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
    }, t.from = function(o) {
      return t.isValid(o) ? parseInt(o, 10) : void 0;
    }, t.getPenaltyN1 = function(o) {
      const i = o.size;
      let s = 0, a = 0, c = 0, d = null, w = null;
      for (let u = 0; u < i; u++) {
        a = c = 0, d = w = null;
        for (let p = 0; p < i; p++) {
          let _ = o.get(u, p);
          _ === d ? a++ : (a >= 5 && (s += e.N1 + (a - 5)), d = _, a = 1), _ = o.get(p, u), _ === w ? c++ : (c >= 5 && (s += e.N1 + (c - 5)), w = _, c = 1);
        }
        a >= 5 && (s += e.N1 + (a - 5)), c >= 5 && (s += e.N1 + (c - 5));
      }
      return s;
    }, t.getPenaltyN2 = function(o) {
      const i = o.size;
      let s = 0;
      for (let a = 0; a < i - 1; a++)
        for (let c = 0; c < i - 1; c++) {
          const d = o.get(a, c) + o.get(a, c + 1) + o.get(a + 1, c) + o.get(a + 1, c + 1);
          (d === 4 || d === 0) && s++;
        }
      return s * e.N2;
    }, t.getPenaltyN3 = function(o) {
      const i = o.size;
      let s = 0, a = 0, c = 0;
      for (let d = 0; d < i; d++) {
        a = c = 0;
        for (let w = 0; w < i; w++)
          a = a << 1 & 2047 | o.get(d, w), w >= 10 && (a === 1488 || a === 93) && s++, c = c << 1 & 2047 | o.get(w, d), w >= 10 && (c === 1488 || c === 93) && s++;
      }
      return s * e.N3;
    }, t.getPenaltyN4 = function(o) {
      let i = 0;
      const s = o.data.length;
      for (let c = 0; c < s; c++) i += o.data[c];
      return Math.abs(Math.ceil(i * 100 / s / 5) - 10) * e.N4;
    };
    function n(r, o, i) {
      switch (r) {
        case t.Patterns.PATTERN000:
          return (o + i) % 2 === 0;
        case t.Patterns.PATTERN001:
          return o % 2 === 0;
        case t.Patterns.PATTERN010:
          return i % 3 === 0;
        case t.Patterns.PATTERN011:
          return (o + i) % 3 === 0;
        case t.Patterns.PATTERN100:
          return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
        case t.Patterns.PATTERN101:
          return o * i % 2 + o * i % 3 === 0;
        case t.Patterns.PATTERN110:
          return (o * i % 2 + o * i % 3) % 2 === 0;
        case t.Patterns.PATTERN111:
          return (o * i % 3 + (o + i) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + r);
      }
    }
    t.applyMask = function(o, i) {
      const s = i.size;
      for (let a = 0; a < s; a++)
        for (let c = 0; c < s; c++)
          i.isReserved(c, a) || i.xor(c, a, n(o, c, a));
    }, t.getBestMask = function(o, i) {
      const s = Object.keys(t.Patterns).length;
      let a = 0, c = 1 / 0;
      for (let d = 0; d < s; d++) {
        i(d), t.applyMask(d, o);
        const w = t.getPenaltyN1(o) + t.getPenaltyN2(o) + t.getPenaltyN3(o) + t.getPenaltyN4(o);
        t.applyMask(d, o), w < c && (c = w, a = d);
      }
      return a;
    };
  }(Ut)), Ut;
}
var st = {}, fr;
function zo() {
  if (fr) return st;
  fr = 1;
  const t = An(), e = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
  ], n = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
  ];
  return st.getBlocksCount = function(o, i) {
    switch (i) {
      case t.L:
        return e[(o - 1) * 4 + 0];
      case t.M:
        return e[(o - 1) * 4 + 1];
      case t.Q:
        return e[(o - 1) * 4 + 2];
      case t.H:
        return e[(o - 1) * 4 + 3];
      default:
        return;
    }
  }, st.getTotalCodewordsCount = function(o, i) {
    switch (i) {
      case t.L:
        return n[(o - 1) * 4 + 0];
      case t.M:
        return n[(o - 1) * 4 + 1];
      case t.Q:
        return n[(o - 1) * 4 + 2];
      case t.H:
        return n[(o - 1) * 4 + 3];
      default:
        return;
    }
  }, st;
}
var Dt = {}, je = {}, hr;
function Ac() {
  if (hr) return je;
  hr = 1;
  const t = new Uint8Array(512), e = new Uint8Array(256);
  return function() {
    let r = 1;
    for (let o = 0; o < 255; o++)
      t[o] = r, e[r] = o, r <<= 1, r & 256 && (r ^= 285);
    for (let o = 255; o < 512; o++)
      t[o] = t[o - 255];
  }(), je.log = function(r) {
    if (r < 1) throw new Error("log(" + r + ")");
    return e[r];
  }, je.exp = function(r) {
    return t[r];
  }, je.mul = function(r, o) {
    return r === 0 || o === 0 ? 0 : t[e[r] + e[o]];
  }, je;
}
var _r;
function Lc() {
  return _r || (_r = 1, function(t) {
    const e = Ac();
    t.mul = function(r, o) {
      const i = new Uint8Array(r.length + o.length - 1);
      for (let s = 0; s < r.length; s++)
        for (let a = 0; a < o.length; a++)
          i[s + a] ^= e.mul(r[s], o[a]);
      return i;
    }, t.mod = function(r, o) {
      let i = new Uint8Array(r);
      for (; i.length - o.length >= 0; ) {
        const s = i[0];
        for (let c = 0; c < o.length; c++)
          i[c] ^= e.mul(o[c], s);
        let a = 0;
        for (; a < i.length && i[a] === 0; ) a++;
        i = i.slice(a);
      }
      return i;
    }, t.generateECPolynomial = function(r) {
      let o = new Uint8Array([1]);
      for (let i = 0; i < r; i++)
        o = t.mul(o, new Uint8Array([1, e.exp(i)]));
      return o;
    };
  }(Dt)), Dt;
}
var $t, gr;
function Oc() {
  if (gr) return $t;
  gr = 1;
  const t = Lc();
  function e(n) {
    this.genPoly = void 0, this.degree = n, this.degree && this.initialize(this.degree);
  }
  return e.prototype.initialize = function(r) {
    this.degree = r, this.genPoly = t.generateECPolynomial(this.degree);
  }, e.prototype.encode = function(r) {
    if (!this.genPoly)
      throw new Error("Encoder not initialized");
    const o = new Uint8Array(r.length + this.degree);
    o.set(r);
    const i = t.mod(o, this.genPoly), s = this.degree - i.length;
    if (s > 0) {
      const a = new Uint8Array(this.degree);
      return a.set(i, s), a;
    }
    return i;
  }, $t = e, $t;
}
var Ft = {}, Ht = {}, jt = {}, pr;
function Vo() {
  return pr || (pr = 1, jt.isValid = function(e) {
    return !isNaN(e) && e >= 1 && e <= 40;
  }), jt;
}
var G = {}, mr;
function Jo() {
  if (mr) return G;
  mr = 1;
  const t = "[0-9]+", e = "[A-Z $%*+\\-./:]+";
  let n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  n = n.replace(/u/g, "\\u");
  const r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + n + `)(?:.|[\r
]))+`;
  G.KANJI = new RegExp(n, "g"), G.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), G.BYTE = new RegExp(r, "g"), G.NUMERIC = new RegExp(t, "g"), G.ALPHANUMERIC = new RegExp(e, "g");
  const o = new RegExp("^" + n + "$"), i = new RegExp("^" + t + "$"), s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return G.testKanji = function(c) {
    return o.test(c);
  }, G.testNumeric = function(c) {
    return i.test(c);
  }, G.testAlphanumeric = function(c) {
    return s.test(c);
  }, G;
}
var wr;
function _e() {
  return wr || (wr = 1, function(t) {
    const e = Vo(), n = Jo();
    t.NUMERIC = {
      id: "Numeric",
      bit: 1,
      ccBits: [10, 12, 14]
    }, t.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 2,
      ccBits: [9, 11, 13]
    }, t.BYTE = {
      id: "Byte",
      bit: 4,
      ccBits: [8, 16, 16]
    }, t.KANJI = {
      id: "Kanji",
      bit: 8,
      ccBits: [8, 10, 12]
    }, t.MIXED = {
      bit: -1
    }, t.getCharCountIndicator = function(i, s) {
      if (!i.ccBits) throw new Error("Invalid mode: " + i);
      if (!e.isValid(s))
        throw new Error("Invalid version: " + s);
      return s >= 1 && s < 10 ? i.ccBits[0] : s < 27 ? i.ccBits[1] : i.ccBits[2];
    }, t.getBestModeForData = function(i) {
      return n.testNumeric(i) ? t.NUMERIC : n.testAlphanumeric(i) ? t.ALPHANUMERIC : n.testKanji(i) ? t.KANJI : t.BYTE;
    }, t.toString = function(i) {
      if (i && i.id) return i.id;
      throw new Error("Invalid mode");
    }, t.isValid = function(i) {
      return i && i.bit && i.ccBits;
    };
    function r(o) {
      if (typeof o != "string")
        throw new Error("Param is not a string");
      switch (o.toLowerCase()) {
        case "numeric":
          return t.NUMERIC;
        case "alphanumeric":
          return t.ALPHANUMERIC;
        case "kanji":
          return t.KANJI;
        case "byte":
          return t.BYTE;
        default:
          throw new Error("Unknown mode: " + o);
      }
    }
    t.from = function(i, s) {
      if (t.isValid(i))
        return i;
      try {
        return r(i);
      } catch {
        return s;
      }
    };
  }(Ht)), Ht;
}
var yr;
function qc() {
  return yr || (yr = 1, function(t) {
    const e = he(), n = zo(), r = An(), o = _e(), i = Vo(), s = 7973, a = e.getBCHDigit(s);
    function c(p, _, S) {
      for (let R = 1; R <= 40; R++)
        if (_ <= t.getCapacity(R, S, p))
          return R;
    }
    function d(p, _) {
      return o.getCharCountIndicator(p, _) + 4;
    }
    function w(p, _) {
      let S = 0;
      return p.forEach(function(R) {
        const N = d(R.mode, _);
        S += N + R.getBitsLength();
      }), S;
    }
    function u(p, _) {
      for (let S = 1; S <= 40; S++)
        if (w(p, S) <= t.getCapacity(S, _, o.MIXED))
          return S;
    }
    t.from = function(_, S) {
      return i.isValid(_) ? parseInt(_, 10) : S;
    }, t.getCapacity = function(_, S, R) {
      if (!i.isValid(_))
        throw new Error("Invalid QR Code version");
      typeof R > "u" && (R = o.BYTE);
      const N = e.getSymbolTotalCodewords(_), l = n.getTotalCodewordsCount(_, S), f = (N - l) * 8;
      if (R === o.MIXED) return f;
      const g = f - d(R, _);
      switch (R) {
        case o.NUMERIC:
          return Math.floor(g / 10 * 3);
        case o.ALPHANUMERIC:
          return Math.floor(g / 11 * 2);
        case o.KANJI:
          return Math.floor(g / 13);
        case o.BYTE:
        default:
          return Math.floor(g / 8);
      }
    }, t.getBestVersionForData = function(_, S) {
      let R;
      const N = r.from(S, r.M);
      if (Array.isArray(_)) {
        if (_.length > 1)
          return u(_, N);
        if (_.length === 0)
          return 1;
        R = _[0];
      } else
        R = _;
      return c(R.mode, R.getLength(), N);
    }, t.getEncodedBits = function(_) {
      if (!i.isValid(_) || _ < 7)
        throw new Error("Invalid QR Code version");
      let S = _ << 12;
      for (; e.getBCHDigit(S) - a >= 0; )
        S ^= s << e.getBCHDigit(S) - a;
      return _ << 12 | S;
    };
  }(Ft)), Ft;
}
var Wt = {}, vr;
function Pc() {
  if (vr) return Wt;
  vr = 1;
  const t = he(), e = 1335, n = 21522, r = t.getBCHDigit(e);
  return Wt.getEncodedBits = function(i, s) {
    const a = i.bit << 3 | s;
    let c = a << 10;
    for (; t.getBCHDigit(c) - r >= 0; )
      c ^= e << t.getBCHDigit(c) - r;
    return (a << 10 | c) ^ n;
  }, Wt;
}
var zt = {}, Vt, br;
function Bc() {
  if (br) return Vt;
  br = 1;
  const t = _e();
  function e(n) {
    this.mode = t.NUMERIC, this.data = n.toString();
  }
  return e.getBitsLength = function(r) {
    return 10 * Math.floor(r / 3) + (r % 3 ? r % 3 * 3 + 1 : 0);
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(r) {
    let o, i, s;
    for (o = 0; o + 3 <= this.data.length; o += 3)
      i = this.data.substr(o, 3), s = parseInt(i, 10), r.put(s, 10);
    const a = this.data.length - o;
    a > 0 && (i = this.data.substr(o), s = parseInt(i, 10), r.put(s, a * 3 + 1));
  }, Vt = e, Vt;
}
var Jt, Er;
function Uc() {
  if (Er) return Jt;
  Er = 1;
  const t = _e(), e = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
  ];
  function n(r) {
    this.mode = t.ALPHANUMERIC, this.data = r;
  }
  return n.getBitsLength = function(o) {
    return 11 * Math.floor(o / 2) + 6 * (o % 2);
  }, n.prototype.getLength = function() {
    return this.data.length;
  }, n.prototype.getBitsLength = function() {
    return n.getBitsLength(this.data.length);
  }, n.prototype.write = function(o) {
    let i;
    for (i = 0; i + 2 <= this.data.length; i += 2) {
      let s = e.indexOf(this.data[i]) * 45;
      s += e.indexOf(this.data[i + 1]), o.put(s, 11);
    }
    this.data.length % 2 && o.put(e.indexOf(this.data[i]), 6);
  }, Jt = n, Jt;
}
var Qt, Cr;
function Dc() {
  if (Cr) return Qt;
  Cr = 1;
  const t = _e();
  function e(n) {
    this.mode = t.BYTE, typeof n == "string" ? this.data = new TextEncoder().encode(n) : this.data = new Uint8Array(n);
  }
  return e.getBitsLength = function(r) {
    return r * 8;
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(n) {
    for (let r = 0, o = this.data.length; r < o; r++)
      n.put(this.data[r], 8);
  }, Qt = e, Qt;
}
var Kt, Sr;
function $c() {
  if (Sr) return Kt;
  Sr = 1;
  const t = _e(), e = he();
  function n(r) {
    this.mode = t.KANJI, this.data = r;
  }
  return n.getBitsLength = function(o) {
    return o * 13;
  }, n.prototype.getLength = function() {
    return this.data.length;
  }, n.prototype.getBitsLength = function() {
    return n.getBitsLength(this.data.length);
  }, n.prototype.write = function(r) {
    let o;
    for (o = 0; o < this.data.length; o++) {
      let i = e.toSJIS(this.data[o]);
      if (i >= 33088 && i <= 40956)
        i -= 33088;
      else if (i >= 57408 && i <= 60351)
        i -= 49472;
      else
        throw new Error(
          "Invalid SJIS character: " + this.data[o] + `
Make sure your charset is UTF-8`
        );
      i = (i >>> 8 & 255) * 192 + (i & 255), r.put(i, 13);
    }
  }, Kt = n, Kt;
}
var Ir;
function Fc() {
  return Ir || (Ir = 1, function(t) {
    const e = _e(), n = Bc(), r = Uc(), o = Dc(), i = $c(), s = Jo(), a = he(), c = is();
    function d(l) {
      return unescape(encodeURIComponent(l)).length;
    }
    function w(l, f, g) {
      const h = [];
      let b;
      for (; (b = l.exec(g)) !== null; )
        h.push({
          data: b[0],
          index: b.index,
          mode: f,
          length: b[0].length
        });
      return h;
    }
    function u(l) {
      const f = w(s.NUMERIC, e.NUMERIC, l), g = w(s.ALPHANUMERIC, e.ALPHANUMERIC, l);
      let h, b;
      return a.isKanjiModeEnabled() ? (h = w(s.BYTE, e.BYTE, l), b = w(s.KANJI, e.KANJI, l)) : (h = w(s.BYTE_KANJI, e.BYTE, l), b = []), f.concat(g, h, b).sort(function(y, E) {
        return y.index - E.index;
      }).map(function(y) {
        return {
          data: y.data,
          mode: y.mode,
          length: y.length
        };
      });
    }
    function p(l, f) {
      switch (f) {
        case e.NUMERIC:
          return n.getBitsLength(l);
        case e.ALPHANUMERIC:
          return r.getBitsLength(l);
        case e.KANJI:
          return i.getBitsLength(l);
        case e.BYTE:
          return o.getBitsLength(l);
      }
    }
    function _(l) {
      return l.reduce(function(f, g) {
        const h = f.length - 1 >= 0 ? f[f.length - 1] : null;
        return h && h.mode === g.mode ? (f[f.length - 1].data += g.data, f) : (f.push(g), f);
      }, []);
    }
    function S(l) {
      const f = [];
      for (let g = 0; g < l.length; g++) {
        const h = l[g];
        switch (h.mode) {
          case e.NUMERIC:
            f.push([
              h,
              { data: h.data, mode: e.ALPHANUMERIC, length: h.length },
              { data: h.data, mode: e.BYTE, length: h.length }
            ]);
            break;
          case e.ALPHANUMERIC:
            f.push([
              h,
              { data: h.data, mode: e.BYTE, length: h.length }
            ]);
            break;
          case e.KANJI:
            f.push([
              h,
              { data: h.data, mode: e.BYTE, length: d(h.data) }
            ]);
            break;
          case e.BYTE:
            f.push([
              { data: h.data, mode: e.BYTE, length: d(h.data) }
            ]);
        }
      }
      return f;
    }
    function R(l, f) {
      const g = {}, h = { start: {} };
      let b = ["start"];
      for (let v = 0; v < l.length; v++) {
        const y = l[v], E = [];
        for (let C = 0; C < y.length; C++) {
          const x = y[C], I = "" + v + C;
          E.push(I), g[I] = { node: x, lastCount: 0 }, h[I] = {};
          for (let k = 0; k < b.length; k++) {
            const T = b[k];
            g[T] && g[T].node.mode === x.mode ? (h[T][I] = p(g[T].lastCount + x.length, x.mode) - p(g[T].lastCount, x.mode), g[T].lastCount += x.length) : (g[T] && (g[T].lastCount = x.length), h[T][I] = p(x.length, x.mode) + 4 + e.getCharCountIndicator(x.mode, f));
          }
        }
        b = E;
      }
      for (let v = 0; v < b.length; v++)
        h[b[v]].end = 0;
      return { map: h, table: g };
    }
    function N(l, f) {
      let g;
      const h = e.getBestModeForData(l);
      if (g = e.from(f, h), g !== e.BYTE && g.bit < h.bit)
        throw new Error('"' + l + '" cannot be encoded with mode ' + e.toString(g) + `.
 Suggested mode is: ` + e.toString(h));
      switch (g === e.KANJI && !a.isKanjiModeEnabled() && (g = e.BYTE), g) {
        case e.NUMERIC:
          return new n(l);
        case e.ALPHANUMERIC:
          return new r(l);
        case e.KANJI:
          return new i(l);
        case e.BYTE:
          return new o(l);
      }
    }
    t.fromArray = function(f) {
      return f.reduce(function(g, h) {
        return typeof h == "string" ? g.push(N(h, null)) : h.data && g.push(N(h.data, h.mode)), g;
      }, []);
    }, t.fromString = function(f, g) {
      const h = u(f, a.isKanjiModeEnabled()), b = S(h), v = R(b, g), y = c.find_path(v.map, "start", "end"), E = [];
      for (let C = 1; C < y.length - 1; C++)
        E.push(v.table[y[C]].node);
      return t.fromArray(_(E));
    }, t.rawSplit = function(f) {
      return t.fromArray(
        u(f, a.isKanjiModeEnabled())
      );
    };
  }(zt)), zt;
}
var Rr;
function Hc() {
  if (Rr) return At;
  Rr = 1;
  const t = he(), e = An(), n = kc(), r = Tc(), o = xc(), i = Nc(), s = Mc(), a = zo(), c = Oc(), d = qc(), w = Pc(), u = _e(), p = Fc();
  function _(v, y) {
    const E = v.size, C = i.getPositions(y);
    for (let x = 0; x < C.length; x++) {
      const I = C[x][0], k = C[x][1];
      for (let T = -1; T <= 7; T++)
        if (!(I + T <= -1 || E <= I + T))
          for (let M = -1; M <= 7; M++)
            k + M <= -1 || E <= k + M || (T >= 0 && T <= 6 && (M === 0 || M === 6) || M >= 0 && M <= 6 && (T === 0 || T === 6) || T >= 2 && T <= 4 && M >= 2 && M <= 4 ? v.set(I + T, k + M, !0, !0) : v.set(I + T, k + M, !1, !0));
    }
  }
  function S(v) {
    const y = v.size;
    for (let E = 8; E < y - 8; E++) {
      const C = E % 2 === 0;
      v.set(E, 6, C, !0), v.set(6, E, C, !0);
    }
  }
  function R(v, y) {
    const E = o.getPositions(y);
    for (let C = 0; C < E.length; C++) {
      const x = E[C][0], I = E[C][1];
      for (let k = -2; k <= 2; k++)
        for (let T = -2; T <= 2; T++)
          k === -2 || k === 2 || T === -2 || T === 2 || k === 0 && T === 0 ? v.set(x + k, I + T, !0, !0) : v.set(x + k, I + T, !1, !0);
    }
  }
  function N(v, y) {
    const E = v.size, C = d.getEncodedBits(y);
    let x, I, k;
    for (let T = 0; T < 18; T++)
      x = Math.floor(T / 3), I = T % 3 + E - 8 - 3, k = (C >> T & 1) === 1, v.set(x, I, k, !0), v.set(I, x, k, !0);
  }
  function l(v, y, E) {
    const C = v.size, x = w.getEncodedBits(y, E);
    let I, k;
    for (I = 0; I < 15; I++)
      k = (x >> I & 1) === 1, I < 6 ? v.set(I, 8, k, !0) : I < 8 ? v.set(I + 1, 8, k, !0) : v.set(C - 15 + I, 8, k, !0), I < 8 ? v.set(8, C - I - 1, k, !0) : I < 9 ? v.set(8, 15 - I - 1 + 1, k, !0) : v.set(8, 15 - I - 1, k, !0);
    v.set(C - 8, 8, 1, !0);
  }
  function f(v, y) {
    const E = v.size;
    let C = -1, x = E - 1, I = 7, k = 0;
    for (let T = E - 1; T > 0; T -= 2)
      for (T === 6 && T--; ; ) {
        for (let M = 0; M < 2; M++)
          if (!v.isReserved(x, T - M)) {
            let Q = !1;
            k < y.length && (Q = (y[k] >>> I & 1) === 1), v.set(x, T - M, Q), I--, I === -1 && (k++, I = 7);
          }
        if (x += C, x < 0 || E <= x) {
          x -= C, C = -C;
          break;
        }
      }
  }
  function g(v, y, E) {
    const C = new n();
    E.forEach(function(M) {
      C.put(M.mode.bit, 4), C.put(M.getLength(), u.getCharCountIndicator(M.mode, v)), M.write(C);
    });
    const x = t.getSymbolTotalCodewords(v), I = a.getTotalCodewordsCount(v, y), k = (x - I) * 8;
    for (C.getLengthInBits() + 4 <= k && C.put(0, 4); C.getLengthInBits() % 8 !== 0; )
      C.putBit(0);
    const T = (k - C.getLengthInBits()) / 8;
    for (let M = 0; M < T; M++)
      C.put(M % 2 ? 17 : 236, 8);
    return h(C, v, y);
  }
  function h(v, y, E) {
    const C = t.getSymbolTotalCodewords(y), x = a.getTotalCodewordsCount(y, E), I = C - x, k = a.getBlocksCount(y, E), T = C % k, M = k - T, Q = Math.floor(C / k), ce = Math.floor(I / k), bt = ce + 1, tt = Q - ce, Et = new c(tt);
    let Oe = 0;
    const pe = new Array(k), qe = new Array(k);
    let Pe = 0;
    const Ct = new Uint8Array(v.buffer);
    for (let re = 0; re < k; re++) {
      const we = re < M ? ce : bt;
      pe[re] = Ct.slice(Oe, Oe + we), qe[re] = Et.encode(pe[re]), Oe += we, Pe = Math.max(Pe, we);
    }
    const me = new Uint8Array(C);
    let nt = 0, j, W;
    for (j = 0; j < Pe; j++)
      for (W = 0; W < k; W++)
        j < pe[W].length && (me[nt++] = pe[W][j]);
    for (j = 0; j < tt; j++)
      for (W = 0; W < k; W++)
        me[nt++] = qe[W][j];
    return me;
  }
  function b(v, y, E, C) {
    let x;
    if (Array.isArray(v))
      x = p.fromArray(v);
    else if (typeof v == "string") {
      let Q = y;
      if (!Q) {
        const ce = p.rawSplit(v);
        Q = d.getBestVersionForData(ce, E);
      }
      x = p.fromString(v, Q || 40);
    } else
      throw new Error("Invalid data");
    const I = d.getBestVersionForData(x, E);
    if (!I)
      throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!y)
      y = I;
    else if (y < I)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + I + `.
`
      );
    const k = g(y, E, x), T = t.getSymbolSize(y), M = new r(T);
    return _(M, y), S(M), R(M, y), l(M, E, 0), y >= 7 && N(M, y), f(M, k), isNaN(C) && (C = s.getBestMask(
      M,
      l.bind(null, M, E)
    )), s.applyMask(C, M), l(M, E, C), {
      modules: M,
      version: y,
      errorCorrectionLevel: E,
      maskPattern: C,
      segments: x
    };
  }
  return At.create = function(y, E) {
    if (typeof y > "u" || y === "")
      throw new Error("No input text");
    let C = e.M, x, I;
    return typeof E < "u" && (C = e.from(E.errorCorrectionLevel, e.M), x = d.from(E.version), I = s.from(E.maskPattern), E.toSJISFunc && t.setToSJISFunction(E.toSJISFunc)), b(y, x, C, I);
  }, At;
}
var Gt = {}, Yt = {}, kr;
function Qo() {
  return kr || (kr = 1, function(t) {
    function e(n) {
      if (typeof n == "number" && (n = n.toString()), typeof n != "string")
        throw new Error("Color should be defined as hex string");
      let r = n.slice().replace("#", "").split("");
      if (r.length < 3 || r.length === 5 || r.length > 8)
        throw new Error("Invalid hex color: " + n);
      (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(i) {
        return [i, i];
      }))), r.length === 6 && r.push("F", "F");
      const o = parseInt(r.join(""), 16);
      return {
        r: o >> 24 & 255,
        g: o >> 16 & 255,
        b: o >> 8 & 255,
        a: o & 255,
        hex: "#" + r.slice(0, 6).join("")
      };
    }
    t.getOptions = function(r) {
      r || (r = {}), r.color || (r.color = {});
      const o = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, i = r.width && r.width >= 21 ? r.width : void 0, s = r.scale || 4;
      return {
        width: i,
        scale: i ? 4 : s,
        margin: o,
        color: {
          dark: e(r.color.dark || "#000000ff"),
          light: e(r.color.light || "#ffffffff")
        },
        type: r.type,
        rendererOpts: r.rendererOpts || {}
      };
    }, t.getScale = function(r, o) {
      return o.width && o.width >= r + o.margin * 2 ? o.width / (r + o.margin * 2) : o.scale;
    }, t.getImageWidth = function(r, o) {
      const i = t.getScale(r, o);
      return Math.floor((r + o.margin * 2) * i);
    }, t.qrToImageData = function(r, o, i) {
      const s = o.modules.size, a = o.modules.data, c = t.getScale(s, i), d = Math.floor((s + i.margin * 2) * c), w = i.margin * c, u = [i.color.light, i.color.dark];
      for (let p = 0; p < d; p++)
        for (let _ = 0; _ < d; _++) {
          let S = (p * d + _) * 4, R = i.color.light;
          if (p >= w && _ >= w && p < d - w && _ < d - w) {
            const N = Math.floor((p - w) / c), l = Math.floor((_ - w) / c);
            R = u[a[N * s + l] ? 1 : 0];
          }
          r[S++] = R.r, r[S++] = R.g, r[S++] = R.b, r[S] = R.a;
        }
    };
  }(Yt)), Yt;
}
var Tr;
function jc() {
  return Tr || (Tr = 1, function(t) {
    const e = Qo();
    function n(o, i, s) {
      o.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = s, i.width = s, i.style.height = s + "px", i.style.width = s + "px";
    }
    function r() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }
    t.render = function(i, s, a) {
      let c = a, d = s;
      typeof c > "u" && (!s || !s.getContext) && (c = s, s = void 0), s || (d = r()), c = e.getOptions(c);
      const w = e.getImageWidth(i.modules.size, c), u = d.getContext("2d"), p = u.createImageData(w, w);
      return e.qrToImageData(p.data, i, c), n(u, d, w), u.putImageData(p, 0, 0), d;
    }, t.renderToDataURL = function(i, s, a) {
      let c = a;
      typeof c > "u" && (!s || !s.getContext) && (c = s, s = void 0), c || (c = {});
      const d = t.render(i, s, c), w = c.type || "image/png", u = c.rendererOpts || {};
      return d.toDataURL(w, u.quality);
    };
  }(Gt)), Gt;
}
var Zt = {}, xr;
function Wc() {
  if (xr) return Zt;
  xr = 1;
  const t = Qo();
  function e(o, i) {
    const s = o.a / 255, a = i + '="' + o.hex + '"';
    return s < 1 ? a + " " + i + '-opacity="' + s.toFixed(2).slice(1) + '"' : a;
  }
  function n(o, i, s) {
    let a = o + i;
    return typeof s < "u" && (a += " " + s), a;
  }
  function r(o, i, s) {
    let a = "", c = 0, d = !1, w = 0;
    for (let u = 0; u < o.length; u++) {
      const p = Math.floor(u % i), _ = Math.floor(u / i);
      !p && !d && (d = !0), o[u] ? (w++, u > 0 && p > 0 && o[u - 1] || (a += d ? n("M", p + s, 0.5 + _ + s) : n("m", c, 0), c = 0, d = !1), p + 1 < i && o[u + 1] || (a += n("h", w), w = 0)) : c++;
    }
    return a;
  }
  return Zt.render = function(i, s, a) {
    const c = t.getOptions(s), d = i.modules.size, w = i.modules.data, u = d + c.margin * 2, p = c.color.light.a ? "<path " + e(c.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "", _ = "<path " + e(c.color.dark, "stroke") + ' d="' + r(w, d, c.margin) + '"/>', S = 'viewBox="0 0 ' + u + " " + u + '"', N = '<svg xmlns="http://www.w3.org/2000/svg" ' + (c.width ? 'width="' + c.width + '" height="' + c.width + '" ' : "") + S + ' shape-rendering="crispEdges">' + p + _ + `</svg>
`;
    return typeof a == "function" && a(null, N), N;
  }, Zt;
}
var Nr;
function zc() {
  if (Nr) return Se;
  Nr = 1;
  const t = Rc(), e = Hc(), n = jc(), r = Wc();
  function o(i, s, a, c, d) {
    const w = [].slice.call(arguments, 1), u = w.length, p = typeof w[u - 1] == "function";
    if (!p && !t())
      throw new Error("Callback required as last argument");
    if (p) {
      if (u < 2)
        throw new Error("Too few arguments provided");
      u === 2 ? (d = a, a = s, s = c = void 0) : u === 3 && (s.getContext && typeof d > "u" ? (d = c, c = void 0) : (d = c, c = a, a = s, s = void 0));
    } else {
      if (u < 1)
        throw new Error("Too few arguments provided");
      return u === 1 ? (a = s, s = c = void 0) : u === 2 && !s.getContext && (c = a, a = s, s = void 0), new Promise(function(_, S) {
        try {
          const R = e.create(a, c);
          _(i(R, s, c));
        } catch (R) {
          S(R);
        }
      });
    }
    try {
      const _ = e.create(a, c);
      d(null, i(_, s, c));
    } catch (_) {
      d(_);
    }
  }
  return Se.create = e.create, Se.toCanvas = o.bind(null, n.render), Se.toDataURL = o.bind(null, n.renderToDataURL), Se.toString = o.bind(null, function(i, s, a) {
    return r.render(i, a);
  }), Se;
}
var Xt, Mr;
function Vc() {
  return Mr || (Mr = 1, Xt = function() {
    var t = document.getSelection();
    if (!t.rangeCount)
      return function() {
      };
    for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++)
      n.push(t.getRangeAt(r));
    switch (e.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        e.blur();
        break;
      default:
        e = null;
        break;
    }
    return t.removeAllRanges(), function() {
      t.type === "Caret" && t.removeAllRanges(), t.rangeCount || n.forEach(function(o) {
        t.addRange(o);
      }), e && e.focus();
    };
  }), Xt;
}
var en, Ar;
function Jc() {
  if (Ar) return en;
  Ar = 1;
  var t = Vc(), e = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, n = "Copy to clipboard: #{key}, Enter";
  function r(i) {
    var s = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return i.replace(/#{\s*key\s*}/g, s);
  }
  function o(i, s) {
    var a, c, d, w, u, p, _ = !1;
    s || (s = {}), a = s.debug || !1;
    try {
      d = t(), w = document.createRange(), u = document.getSelection(), p = document.createElement("span"), p.textContent = i, p.ariaHidden = "true", p.style.all = "unset", p.style.position = "fixed", p.style.top = 0, p.style.clip = "rect(0, 0, 0, 0)", p.style.whiteSpace = "pre", p.style.webkitUserSelect = "text", p.style.MozUserSelect = "text", p.style.msUserSelect = "text", p.style.userSelect = "text", p.addEventListener("copy", function(R) {
        if (R.stopPropagation(), s.format)
          if (R.preventDefault(), typeof R.clipboardData > "u") {
            a && console.warn("unable to use e.clipboardData"), a && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var N = e[s.format] || e.default;
            window.clipboardData.setData(N, i);
          } else
            R.clipboardData.clearData(), R.clipboardData.setData(s.format, i);
        s.onCopy && (R.preventDefault(), s.onCopy(R.clipboardData));
      }), document.body.appendChild(p), w.selectNodeContents(p), u.addRange(w);
      var S = document.execCommand("copy");
      if (!S)
        throw new Error("copy command was unsuccessful");
      _ = !0;
    } catch (R) {
      a && console.error("unable to copy using execCommand: ", R), a && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(s.format || "text", i), s.onCopy && s.onCopy(window.clipboardData), _ = !0;
      } catch (N) {
        a && console.error("unable to copy using clipboardData: ", N), a && console.error("falling back to prompt"), c = r("message" in s ? s.message : n), window.prompt(c, i);
      }
    } finally {
      u && (typeof u.removeRange == "function" ? u.removeRange(w) : u.removeAllRanges()), p && document.body.removeChild(p), d();
    }
    return _;
  }
  return en = o, en;
}
var Ye, L, Ko, fe, Lr, Go, ln, Yo, Ln, un, dn, Zo, Je = {}, Xo = [], Qc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, wt = Array.isArray;
function ee(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function On(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Y(t, e, n) {
  var r, o, i, s = {};
  for (i in e) i == "key" ? r = e[i] : i == "ref" ? o = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ye.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return We(t, s, r, o, null);
}
function We(t, e, n, r, o) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Ko, __i: -1, __u: 0 };
  return o == null && L.vnode != null && L.vnode(i), i;
}
function ei() {
  return { current: null };
}
function Z(t) {
  return t.children;
}
function J(t, e) {
  this.props = t, this.context = e;
}
function Ne(t, e) {
  if (e == null) return t.__ ? Ne(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? Ne(t) : null;
}
function ti(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) {
      t.__e = t.__c.base = n.__e;
      break;
    }
    return ti(t);
  }
}
function fn(t) {
  (!t.__d && (t.__d = !0) && fe.push(t) && !dt.__r++ || Lr !== L.debounceRendering) && ((Lr = L.debounceRendering) || Go)(dt);
}
function dt() {
  var t, e, n, r, o, i, s, a;
  for (fe.sort(ln); t = fe.shift(); ) t.__d && (e = fe.length, r = void 0, i = (o = (n = t).__v).__e, s = [], a = [], n.__P && ((r = ee({}, o)).__v = o.__v + 1, L.vnode && L.vnode(r), qn(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, s, i ?? Ne(o), !!(32 & o.__u), a), r.__v = o.__v, r.__.__k[r.__i] = r, oi(s, r, a), r.__e != i && ti(r)), fe.length > e && fe.sort(ln));
  dt.__r = 0;
}
function ni(t, e, n, r, o, i, s, a, c, d, w) {
  var u, p, _, S, R, N, l = r && r.__k || Xo, f = e.length;
  for (c = Kc(n, e, l, c, f), u = 0; u < f; u++) (_ = n.__k[u]) != null && (p = _.__i === -1 ? Je : l[_.__i] || Je, _.__i = u, N = qn(t, _, p, o, i, s, a, c, d, w), S = _.__e, _.ref && p.ref != _.ref && (p.ref && Pn(p.ref, null, _), w.push(_.ref, _.__c || S, _)), R == null && S != null && (R = S), 4 & _.__u || p.__k === _.__k ? c = ri(_, c, t) : typeof _.type == "function" && N !== void 0 ? c = N : S && (c = S.nextSibling), _.__u &= -7);
  return n.__e = R, c;
}
function Kc(t, e, n, r, o) {
  var i, s, a, c, d, w = n.length, u = w, p = 0;
  for (t.__k = new Array(o), i = 0; i < o; i++) (s = e[i]) != null && typeof s != "boolean" && typeof s != "function" ? (c = i + p, (s = t.__k[i] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? We(null, s, null, null, null) : wt(s) ? We(Z, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? We(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = t, s.__b = t.__b + 1, a = null, (d = s.__i = Gc(s, n, c, u)) !== -1 && (u--, (a = n[d]) && (a.__u |= 2)), a == null || a.__v === null ? (d == -1 && p--, typeof s.type != "function" && (s.__u |= 4)) : d != c && (d == c - 1 ? p-- : d == c + 1 ? p++ : (d > c ? p-- : p++, s.__u |= 4))) : t.__k[i] = null;
  if (u) for (i = 0; i < w; i++) (a = n[i]) != null && !(2 & a.__u) && (a.__e == r && (r = Ne(a)), ii(a, a));
  return r;
}
function ri(t, e, n) {
  var r, o;
  if (typeof t.type == "function") {
    for (r = t.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = t, e = ri(r[o], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !n.contains(e) && (e = Ne(t)), n.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function te(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (wt(t) ? t.some(function(n) {
    te(n, e);
  }) : e.push(t)), e;
}
function Gc(t, e, n, r) {
  var o, i, s = t.key, a = t.type, c = e[n];
  if (c === null || c && s == c.key && a === c.type && !(2 & c.__u)) return n;
  if (r > (c != null && !(2 & c.__u) ? 1 : 0)) for (o = n - 1, i = n + 1; o >= 0 || i < e.length; ) {
    if (o >= 0) {
      if ((c = e[o]) && !(2 & c.__u) && s == c.key && a === c.type) return o;
      o--;
    }
    if (i < e.length) {
      if ((c = e[i]) && !(2 & c.__u) && s == c.key && a === c.type) return i;
      i++;
    }
  }
  return -1;
}
function Or(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Qc.test(e) ? n : n + "px";
}
function at(t, e, n, r, o) {
  var i;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || Or(t.style, e, "");
    if (n) for (e in n) r && n[e] === r[e] || Or(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(Yo, "$1")), e = e.toLowerCase() in t || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r ? n.u = r.u : (n.u = Ln, t.addEventListener(e, i ? dn : un, i)) : t.removeEventListener(e, i ? dn : un, i);
  else {
    if (o == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function qr(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e.t == null) e.t = Ln++;
      else if (e.t < n.u) return;
      return n(L.event ? L.event(e) : e);
    }
  };
}
function qn(t, e, n, r, o, i, s, a, c, d) {
  var w, u, p, _, S, R, N, l, f, g, h, b, v, y, E, C, x, I = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [a = e.__e = n.__e]), (w = L.__b) && w(e);
  e: if (typeof I == "function") try {
    if (l = e.props, f = "prototype" in I && I.prototype.render, g = (w = I.contextType) && r[w.__c], h = w ? g ? g.props.value : w.__ : r, n.__c ? N = (u = e.__c = n.__c).__ = u.__E : (f ? e.__c = u = new I(l, h) : (e.__c = u = new J(l, h), u.constructor = I, u.render = Zc), g && g.sub(u), u.props = l, u.state || (u.state = {}), u.context = h, u.__n = r, p = u.__d = !0, u.__h = [], u._sb = []), f && u.__s == null && (u.__s = u.state), f && I.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = ee({}, u.__s)), ee(u.__s, I.getDerivedStateFromProps(l, u.__s))), _ = u.props, S = u.state, u.__v = e, p) f && I.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), f && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (f && I.getDerivedStateFromProps == null && l !== _ && u.componentWillReceiveProps != null && u.componentWillReceiveProps(l, h), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(l, u.__s, h) === !1 || e.__v == n.__v)) {
        for (e.__v != n.__v && (u.props = l, u.state = u.__s, u.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(k) {
          k && (k.__ = e);
        }), b = 0; b < u._sb.length; b++) u.__h.push(u._sb[b]);
        u._sb = [], u.__h.length && s.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(l, u.__s, h), f && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(_, S, R);
      });
    }
    if (u.context = h, u.props = l, u.__P = t, u.__e = !1, v = L.__r, y = 0, f) {
      for (u.state = u.__s, u.__d = !1, v && v(e), w = u.render(u.props, u.state, u.context), E = 0; E < u._sb.length; E++) u.__h.push(u._sb[E]);
      u._sb = [];
    } else do
      u.__d = !1, v && v(e), w = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++y < 25);
    u.state = u.__s, u.getChildContext != null && (r = ee(ee({}, r), u.getChildContext())), f && !p && u.getSnapshotBeforeUpdate != null && (R = u.getSnapshotBeforeUpdate(_, S)), a = ni(t, wt(C = w != null && w.type === Z && w.key == null ? w.props.children : w) ? C : [C], e, n, r, o, i, s, a, c, d), u.base = e.__e, e.__u &= -161, u.__h.length && s.push(u), N && (u.__E = u.__ = null);
  } catch (k) {
    if (e.__v = null, c || i != null) if (k.then) {
      for (e.__u |= c ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
      i[i.indexOf(a)] = null, e.__e = a;
    } else for (x = i.length; x--; ) On(i[x]);
    else e.__e = n.__e, e.__k = n.__k;
    L.__e(k, e, n);
  }
  else i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : a = e.__e = Yc(n.__e, e, n, r, o, i, s, c, d);
  return (w = L.diffed) && w(e), 128 & e.__u ? void 0 : a;
}
function oi(t, e, n) {
  for (var r = 0; r < n.length; r++) Pn(n[r], n[++r], n[++r]);
  L.__c && L.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      L.__e(i, o.__v);
    }
  });
}
function Yc(t, e, n, r, o, i, s, a, c) {
  var d, w, u, p, _, S, R, N = n.props, l = e.props, f = e.type;
  if (f == "svg" ? o = "http://www.w3.org/2000/svg" : f == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (d = 0; d < i.length; d++) if ((_ = i[d]) && "setAttribute" in _ == !!f && (f ? _.localName == f : _.nodeType == 3)) {
      t = _, i[d] = null;
      break;
    }
  }
  if (t == null) {
    if (f == null) return document.createTextNode(l);
    t = document.createElementNS(o, f, l.is && l), a && (L.__m && L.__m(e, i), a = !1), i = null;
  }
  if (f === null) N === l || a && t.data === l || (t.data = l);
  else {
    if (i = i && Ye.call(t.childNodes), N = n.props || Je, !a && i != null) for (N = {}, d = 0; d < t.attributes.length; d++) N[(_ = t.attributes[d]).name] = _.value;
    for (d in N) if (_ = N[d], d != "children") {
      if (d == "dangerouslySetInnerHTML") u = _;
      else if (!(d in l)) {
        if (d == "value" && "defaultValue" in l || d == "checked" && "defaultChecked" in l) continue;
        at(t, d, null, _, o);
      }
    }
    for (d in l) _ = l[d], d == "children" ? p = _ : d == "dangerouslySetInnerHTML" ? w = _ : d == "value" ? S = _ : d == "checked" ? R = _ : a && typeof _ != "function" || N[d] === _ || at(t, d, _, N[d], o);
    if (w) a || u && (w.__html === u.__html || w.__html === t.innerHTML) || (t.innerHTML = w.__html), e.__k = [];
    else if (u && (t.innerHTML = ""), ni(t, wt(p) ? p : [p], e, n, r, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && Ne(n, 0), a, c), i != null) for (d = i.length; d--; ) On(i[d]);
    a || (d = "value", f == "progress" && S == null ? t.removeAttribute("value") : S !== void 0 && (S !== t[d] || f == "progress" && !S || f == "option" && S !== N[d]) && at(t, d, S, N[d], o), d = "checked", R !== void 0 && R !== t[d] && at(t, d, R, N[d], o));
  }
  return t;
}
function Pn(t, e, n) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    L.__e(o, n);
  }
}
function ii(t, e, n) {
  var r, o;
  if (L.unmount && L.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Pn(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      L.__e(i, e);
    }
    r.base = r.__P = null;
  }
  if (r = t.__k) for (o = 0; o < r.length; o++) r[o] && ii(r[o], e, n || typeof t.type != "function");
  n || On(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Zc(t, e, n) {
  return this.constructor(t, n);
}
function Qe(t, e, n) {
  var r, o, i, s;
  e == document && (e = document.documentElement), L.__ && L.__(t, e), o = (r = typeof n == "function") ? null : n && n.__k || e.__k, i = [], s = [], qn(e, t = (!r && n || e).__k = Y(Z, null, [t]), o || Je, Je, e.namespaceURI, !r && n ? [n] : o ? null : e.firstChild ? Ye.call(e.childNodes) : null, i, !r && n ? n : o ? o.__e : e.firstChild, r, s), oi(i, t, s);
}
function si(t, e) {
  Qe(t, e, si);
}
function Xc(t, e, n) {
  var r, o, i, s, a = ee({}, t.props);
  for (i in t.type && t.type.defaultProps && (s = t.type.defaultProps), e) i == "key" ? r = e[i] : i == "ref" ? o = e[i] : a[i] = e[i] === void 0 && s !== void 0 ? s[i] : e[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? Ye.call(arguments, 2) : n), We(t.type, a, r || t.key, o || t.ref, null);
}
function ai(t, e) {
  var n = { __c: e = "__cC" + Zo++, __: t, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.forEach(function(a) {
        a.__e = !0, fn(a);
      });
    }, this.sub = function(s) {
      o.add(s);
      var a = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o && o.delete(s), a && a.call(s);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Ye = Xo.slice, L = { __e: function(t, e, n, r) {
  for (var o, i, s; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), s = o.__d), s) return o.__E = o;
  } catch (a) {
    t = a;
  }
  throw t;
} }, Ko = 0, J.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof t == "function" && (t = t(ee({}, n), this.props)), t && ee(n, t), t != null && this.__v && (e && this._sb.push(e), fn(this));
}, J.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), fn(this));
}, J.prototype.render = Z, fe = [], Go = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ln = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, dt.__r = 0, Yo = /(PointerCapture)$|Capture$/i, Ln = 0, un = qr(!1), dn = qr(!0), Zo = 0;
var ne, q, tn, Pr, Me = 0, ci = [], P = L, Br = P.__b, Ur = P.__r, Dr = P.diffed, $r = P.__c, Fr = P.unmount, Hr = P.__;
function ge(t, e) {
  P.__h && P.__h(q, t, Me || e), Me = 0;
  var n = q.__H || (q.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function Ze(t) {
  return Me = 1, yt(li, t);
}
function yt(t, e, n) {
  var r = ge(ne++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : li(void 0, e), function(a) {
    var c = r.__N ? r.__N[0] : r.__[0], d = r.t(c, a);
    c !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = q, !q.u)) {
    var o = function(a, c, d) {
      if (!r.__c.__H) return !0;
      var w = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (w.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, a, c, d);
      var u = r.__c.props !== a;
      return w.forEach(function(p) {
        if (p.__N) {
          var _ = p.__[0];
          p.__ = p.__N, p.__N = void 0, _ !== p.__[0] && (u = !0);
        }
      }), i && i.call(this, a, c, d) || u;
    };
    q.u = !0;
    var i = q.shouldComponentUpdate, s = q.componentWillUpdate;
    q.componentWillUpdate = function(a, c, d) {
      if (this.__e) {
        var w = i;
        i = void 0, o(a, c, d), i = w;
      }
      s && s.call(this, a, c, d);
    }, q.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function vt(t, e) {
  var n = ge(ne++, 3);
  !P.__s && jn(n.__H, e) && (n.__ = t, n.i = e, q.__H.__h.push(n));
}
function Le(t, e) {
  var n = ge(ne++, 4);
  !P.__s && jn(n.__H, e) && (n.__ = t, n.i = e, q.__h.push(n));
}
function Bn(t) {
  return Me = 5, Xe(function() {
    return { current: t };
  }, []);
}
function Un(t, e, n) {
  Me = 6, Le(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(t));
}
function Xe(t, e) {
  var n = ge(ne++, 7);
  return jn(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function Dn(t, e) {
  return Me = 8, Xe(function() {
    return t;
  }, e);
}
function $n(t) {
  var e = q.context[t.__c], n = ge(ne++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(q)), e.props.value) : t.__;
}
function Fn(t, e) {
  P.useDebugValue && P.useDebugValue(e ? e(t) : t);
}
function el(t) {
  var e = ge(ne++, 10), n = Ze();
  return e.__ = t, q.componentDidCatch || (q.componentDidCatch = function(r, o) {
    e.__ && e.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Hn() {
  var t = ge(ne++, 11);
  if (!t.__) {
    for (var e = q.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function tl() {
  for (var t; t = ci.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(lt), t.__H.__h.forEach(hn), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], P.__e(e, t.__v);
  }
}
P.__b = function(t) {
  q = null, Br && Br(t);
}, P.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Hr && Hr(t, e);
}, P.__r = function(t) {
  Ur && Ur(t), ne = 0;
  var e = (q = t.__c).__H;
  e && (tn === q ? (e.__h = [], q.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (e.__h.forEach(lt), e.__h.forEach(hn), e.__h = [], ne = 0)), tn = q;
}, P.diffed = function(t) {
  Dr && Dr(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (ci.push(e) !== 1 && Pr === P.requestAnimationFrame || ((Pr = P.requestAnimationFrame) || nl)(tl)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), tn = q = null;
}, P.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(lt), n.__h = n.__h.filter(function(r) {
        return !r.__ || hn(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], P.__e(r, n.__v);
    }
  }), $r && $r(t, e);
}, P.unmount = function(t) {
  Fr && Fr(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      lt(r);
    } catch (o) {
      e = o;
    }
  }), n.__H = void 0, e && P.__e(e, n.__v));
};
var jr = typeof requestAnimationFrame == "function";
function nl(t) {
  var e, n = function() {
    clearTimeout(r), jr && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  jr && (e = requestAnimationFrame(n));
}
function lt(t) {
  var e = q, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), q = e;
}
function hn(t) {
  var e = q;
  t.__c = t.__(), q = e;
}
function jn(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function li(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function ui(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function _n(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
  return !1;
}
function Wn(t, e) {
  var n = e(), r = Ze({ t: { __: n, u: e } }), o = r[0].t, i = r[1];
  return Le(function() {
    o.__ = n, o.u = e, nn(o) && i({ t: o });
  }, [t, n, e]), vt(function() {
    return nn(o) && i({ t: o }), t(function() {
      nn(o) && i({ t: o });
    });
  }, [t]), n;
}
function nn(t) {
  var e, n, r = t.u, o = t.__;
  try {
    var i = r();
    return !((e = o) === (n = i) && (e !== 0 || 1 / e == 1 / n) || e != e && n != n);
  } catch {
    return !0;
  }
}
function zn(t) {
  t();
}
function Vn(t) {
  return t;
}
function Jn() {
  return [!1, zn];
}
var Qn = Le;
function ft(t, e) {
  this.props = t, this.context = e;
}
function di(t, e) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), e ? !e(this.props, o) || !s : _n(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, Y(t, o);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(ft.prototype = new J()).isPureReactComponent = !0, ft.prototype.shouldComponentUpdate = function(t, e) {
  return _n(this.props, t) || _n(this.state, e);
};
var Wr = L.__b;
L.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Wr && Wr(t);
};
var rl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function fi(t) {
  function e(n) {
    var r = ui({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = rl, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var zr = function(t, e) {
  return t == null ? null : te(te(t).map(e));
}, hi = { map: zr, forEach: zr, count: function(t) {
  return t ? te(t).length : 0;
}, only: function(t) {
  var e = te(t);
  if (e.length !== 1) throw "Children.only";
  return e[0];
}, toArray: te }, ol = L.__e;
L.__e = function(t, e, n, r) {
  if (t.then) {
    for (var o, i = e; i = i.__; ) if ((o = i.__c) && o.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k), o.__c(t, e);
  }
  ol(t, e, n, r);
};
var Vr = L.unmount;
function _i(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = ui({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return _i(r, e, n);
  })), t;
}
function gi(t, e, n) {
  return t && n && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return gi(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t;
}
function ze() {
  this.__u = 0, this.o = null, this.__b = null;
}
function pi(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function mi(t) {
  var e, n, r;
  function o(i) {
    if (e || (e = t()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
    }), r) throw r;
    if (!n) throw e;
    return Y(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Re() {
  this.i = null, this.l = null;
}
L.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Vr && Vr(t);
}, (ze.prototype = new J()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = pi(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = gi(c, c.__c.__P, c.__c.__O);
      }
      var d;
      for (r.setState({ __a: r.__b = null }); d = r.o.pop(); ) d.forceUpdate();
    }
  };
  r.__u++ || 32 & e.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(s, s);
}, ze.prototype.componentWillUnmount = function() {
  this.o = [];
}, ze.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = _i(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = e.__a && Y(Z, null, t.fallback);
  return o && (o.__u &= -33), [Y(Z, null, e.__a ? null : t.children), o];
};
var Jr = function(t, e, n) {
  if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size)) for (n = t.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    t.i = n = n[2];
  }
};
function il(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function sl(t) {
  var e = this, n = t.h;
  e.componentWillUnmount = function() {
    Qe(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== n && e.componentWillUnmount(), e.v || (e.h = n, e.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), e.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), e.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.h.removeChild(r);
  } }), Qe(Y(il, { context: e.context }, t.__v), e.v);
}
function wi(t, e) {
  var n = Y(sl, { __v: t, h: e });
  return n.containerInfo = e, n;
}
(Re.prototype = new J()).__a = function(t) {
  var e = this, n = pi(e.__v), r = e.l.get(t);
  return r[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (r.push(o), Jr(e, t, r)) : o();
    };
    n ? n(i) : i();
  };
}, Re.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = te(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; ) this.l.set(e[n], this.i = [1, 0, this.i]);
  return t.children;
}, Re.prototype.componentDidUpdate = Re.prototype.componentDidMount = function() {
  var t = this;
  this.l.forEach(function(e, n) {
    Jr(t, n, e);
  });
};
var yi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, al = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, cl = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ll = /[A-Z0-9]/g, ul = typeof document < "u", dl = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function vi(t, e, n) {
  return e.__k == null && (e.textContent = ""), Qe(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function bi(t, e, n) {
  return si(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
J.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(J.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Qr = L.event;
function fl() {
}
function hl() {
  return this.cancelBubble;
}
function _l() {
  return this.defaultPrevented;
}
L.event = function(t) {
  return Qr && (t = Qr(t)), t.persist = fl, t.isPropagationStopped = hl, t.isDefaultPrevented = _l, t.nativeEvent = t;
};
var Kn, gl = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Kr = L.vnode;
L.vnode = function(t) {
  typeof t.type == "string" && function(e) {
    var n = e.props, r = e.type, o = {}, i = r.indexOf("-") === -1;
    for (var s in n) {
      var a = n[s];
      if (!(s === "value" && "defaultValue" in n && a == null || ul && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var c = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && a === !0 ? a = "" : c === "translate" && a === "no" ? a = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? s = "ondblclick" : c !== "onchange" || r !== "input" && r !== "textarea" || dl(n.type) ? c === "onfocus" ? s = "onfocusin" : c === "onblur" ? s = "onfocusout" : cl.test(s) && (s = c) : c = s = "oninput" : i && al.test(s) ? s = s.replace(ll, "-$&").toLowerCase() : a === null && (a = void 0), c === "oninput" && o[s = c] && (s = "oninputCapture"), o[s] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = te(n.children).forEach(function(d) {
      d.props.selected = o.value.indexOf(d.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = te(n.children).forEach(function(d) {
      d.props.selected = o.multiple ? o.defaultValue.indexOf(d.props.value) != -1 : o.defaultValue == d.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", gl)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), e.props = o;
  }(t), t.$$typeof = yi, Kr && Kr(t);
};
var Gr = L.__r;
L.__r = function(t) {
  Gr && Gr(t), Kn = t.__c;
};
var Yr = L.diffed;
L.diffed = function(t) {
  Yr && Yr(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), Kn = null;
};
var Ei = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return Kn.__n[t.__c].props.value;
}, useCallback: Dn, useContext: $n, useDebugValue: Fn, useDeferredValue: Vn, useEffect: vt, useId: Hn, useImperativeHandle: Un, useInsertionEffect: Qn, useLayoutEffect: Le, useMemo: Xe, useReducer: yt, useRef: Bn, useState: Ze, useSyncExternalStore: Wn, useTransition: Jn } } }, pl = "18.3.1";
function Ci(t) {
  return Y.bind(null, t);
}
function et(t) {
  return !!t && t.$$typeof === yi;
}
function Si(t) {
  return et(t) && t.type === Z;
}
function Ii(t) {
  return !!t && !!t.displayName && (typeof t.displayName == "string" || t.displayName instanceof String) && t.displayName.startsWith("Memo(");
}
function Ri(t) {
  return et(t) ? Xc.apply(null, arguments) : t;
}
function ki(t) {
  return !!t.__k && (Qe(null, t), !0);
}
function Ti(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var xi = function(t, e) {
  return t(e);
}, Ni = function(t, e) {
  return t(e);
}, Mi = Z, Ai = et, ml = { useState: Ze, useId: Hn, useReducer: yt, useEffect: vt, useLayoutEffect: Le, useInsertionEffect: Qn, useTransition: Jn, useDeferredValue: Vn, useSyncExternalStore: Wn, startTransition: zn, useRef: Bn, useImperativeHandle: Un, useMemo: Xe, useCallback: Dn, useContext: $n, useDebugValue: Fn, version: "18.3.1", Children: hi, render: vi, hydrate: bi, unmountComponentAtNode: ki, createPortal: wi, createElement: Y, createContext: ai, createFactory: Ci, cloneElement: Ri, createRef: ei, Fragment: Z, isValidElement: et, isElement: Ai, isFragment: Si, isMemo: Ii, findDOMNode: Ti, Component: J, PureComponent: ft, memo: di, forwardRef: fi, flushSync: Ni, unstable_batchedUpdates: xi, StrictMode: Mi, Suspense: ze, SuspenseList: Re, lazy: mi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ei };
const wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: hi,
  Component: J,
  Fragment: Z,
  PureComponent: ft,
  StrictMode: Mi,
  Suspense: ze,
  SuspenseList: Re,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ei,
  cloneElement: Ri,
  createContext: ai,
  createElement: Y,
  createFactory: Ci,
  createPortal: wi,
  createRef: ei,
  default: ml,
  findDOMNode: Ti,
  flushSync: Ni,
  forwardRef: fi,
  hydrate: bi,
  isElement: Ai,
  isFragment: Si,
  isMemo: Ii,
  isValidElement: et,
  lazy: mi,
  memo: di,
  render: vi,
  startTransition: zn,
  unmountComponentAtNode: ki,
  unstable_batchedUpdates: xi,
  useCallback: Dn,
  useContext: $n,
  useDebugValue: Fn,
  useDeferredValue: Vn,
  useEffect: vt,
  useErrorBoundary: el,
  useId: Hn,
  useImperativeHandle: Un,
  useInsertionEffect: Qn,
  useLayoutEffect: Le,
  useMemo: Xe,
  useReducer: yt,
  useRef: Bn,
  useState: Ze,
  useSyncExternalStore: Wn,
  useTransition: Jn,
  version: pl
}, Symbol.toStringTag, { value: "Module" })), yl = /* @__PURE__ */ Xr(wl);
var rn, Zr;
function vl() {
  if (Zr) return rn;
  Zr = 1;
  function t(m) {
    return m && typeof m == "object" && "default" in m ? m.default : m;
  }
  var e = Ic, n = t(zc()), r = t(Jc()), o = yl;
  function i(m) {
    n.toString(m, {
      type: "terminal"
    }).then(console.log);
  }
  var s = `:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;
  typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
  function a(m, A) {
    try {
      var O = m();
    } catch (B) {
      return A(B);
    }
    return O && O.then ? O.then(void 0, A) : O;
  }
  var c = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E", d = "WalletConnect", w = 300, u = "rgb(64, 153, 255)", p = "walletconnect-wrapper", _ = "walletconnect-style-sheet", S = "walletconnect-qrcode-modal", R = "walletconnect-qrcode-close", N = "walletconnect-qrcode-text", l = "walletconnect-connect-button";
  function f(m) {
    return o.createElement("div", {
      className: "walletconnect-modal__header"
    }, o.createElement("img", {
      src: c,
      className: "walletconnect-modal__headerLogo"
    }), o.createElement("p", null, d), o.createElement("div", {
      className: "walletconnect-modal__close__wrapper",
      onClick: m.onClose
    }, o.createElement("div", {
      id: R,
      className: "walletconnect-modal__close__icon"
    }, o.createElement("div", {
      className: "walletconnect-modal__close__line1"
    }), o.createElement("div", {
      className: "walletconnect-modal__close__line2"
    }))));
  }
  function g(m) {
    return o.createElement("a", {
      className: "walletconnect-connect__button",
      href: m.href,
      id: l + "-" + m.name,
      onClick: m.onClick,
      rel: "noopener noreferrer",
      style: {
        backgroundColor: m.color
      },
      target: "_blank"
    }, m.name);
  }
  var h = "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";
  function b(m) {
    var A = m.color, O = m.href, B = m.name, F = m.logo, $ = m.onClick;
    return o.createElement("a", {
      className: "walletconnect-modal__base__row",
      href: O,
      onClick: $,
      rel: "noopener noreferrer",
      target: "_blank"
    }, o.createElement("h3", {
      className: "walletconnect-modal__base__row__h3"
    }, B), o.createElement("div", {
      className: "walletconnect-modal__base__row__right"
    }, o.createElement("div", {
      className: "walletconnect-modal__base__row__right__app-icon",
      style: {
        background: "url('" + F + "') " + A,
        backgroundSize: "100%"
      }
    }), o.createElement("img", {
      src: h,
      className: "walletconnect-modal__base__row__right__caret"
    })));
  }
  function v(m) {
    var A = m.color, O = m.href, B = m.name, F = m.logo, $ = m.onClick, z = window.innerWidth < 768 ? (B.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
    return o.createElement("a", {
      className: "walletconnect-connect__button__icon_anchor",
      href: O,
      onClick: $,
      rel: "noopener noreferrer",
      target: "_blank"
    }, o.createElement("div", {
      className: "walletconnect-connect__button__icon",
      style: {
        background: "url('" + F + "') " + A,
        backgroundSize: "100%"
      }
    }), o.createElement("div", {
      style: {
        fontSize: z
      },
      className: "walletconnect-connect__button__text"
    }, B));
  }
  var y = 5, E = 12;
  function C(m) {
    var A = e.isAndroid(), O = o.useState(""), B = O[0], F = O[1], $ = o.useState(""), z = $[0], le = $[1], K = o.useState(1), ye = K[0], ve = K[1], V = z ? m.links.filter(function(U) {
      return U.name.toLowerCase().includes(z.toLowerCase());
    }) : m.links, ue = m.errorMessage, Be = z || V.length > y, Ue = Math.ceil(V.length / E), De = [(ye - 1) * E + 1, ye * E], $e = V.length ? V.filter(function(U, D) {
      return D + 1 >= De[0] && D + 1 <= De[1];
    }) : [], rt = !A && Ue > 1, Fe = void 0;
    function St(U) {
      F(U.target.value), clearTimeout(Fe), U.target.value ? Fe = setTimeout(function() {
        le(U.target.value), ve(1);
      }, 1e3) : (F(""), le(""), ve(1));
    }
    return o.createElement("div", null, o.createElement("p", {
      id: N,
      className: "walletconnect-qrcode__text"
    }, A ? m.text.connect_mobile_wallet : m.text.choose_preferred_wallet), !A && o.createElement("input", {
      className: "walletconnect-search__input",
      placeholder: "Search",
      value: B,
      onChange: St
    }), o.createElement("div", {
      className: "walletconnect-connect__buttons__wrapper" + (A ? "__android" : Be && V.length ? "__wrap" : "")
    }, A ? o.createElement(g, {
      name: m.text.connect,
      color: u,
      href: m.uri,
      onClick: o.useCallback(function() {
        e.saveMobileLinkInfo({
          name: "Unknown",
          href: m.uri
        });
      }, [])
    }) : $e.length ? $e.map(function(U) {
      var D = U.color, X = U.name, be = U.shortName, ot = U.logo, Ee = e.formatIOSMobile(m.uri, U), Ce = o.useCallback(function() {
        e.saveMobileLinkInfo({
          name: X,
          href: Ee
        });
      }, [$e]);
      return Be ? o.createElement(v, {
        color: D,
        href: Ee,
        name: be || X,
        logo: ot,
        onClick: Ce
      }) : o.createElement(b, {
        color: D,
        href: Ee,
        name: X,
        logo: ot,
        onClick: Ce
      });
    }) : o.createElement(o.Fragment, null, o.createElement("p", null, ue.length ? m.errorMessage : m.links.length && !V.length ? m.text.no_wallets_found : m.text.loading))), rt && o.createElement("div", {
      className: "walletconnect-modal__footer"
    }, Array(Ue).fill(0).map(function(U, D) {
      var X = D + 1, be = ye === X;
      return o.createElement("a", {
        style: {
          margin: "auto 10px",
          fontWeight: be ? "bold" : "normal"
        },
        onClick: function() {
          return ve(X);
        }
      }, X);
    })));
  }
  function x(m) {
    var A = !!m.message.trim();
    return o.createElement("div", {
      className: "walletconnect-qrcode__notification" + (A ? " notification__show" : "")
    }, m.message);
  }
  var I = function(m) {
    try {
      var A = "";
      return Promise.resolve(n.toString(m, {
        margin: 0,
        type: "svg"
      })).then(function(O) {
        return typeof O == "string" && (A = O.replace("<svg", '<svg class="walletconnect-qrcode__image"')), A;
      });
    } catch (O) {
      return Promise.reject(O);
    }
  };
  function k(m) {
    var A = o.useState(""), O = A[0], B = A[1], F = o.useState(""), $ = F[0], z = F[1];
    o.useEffect(function() {
      try {
        return Promise.resolve(I(m.uri)).then(function(K) {
          z(K);
        });
      } catch (K) {
        Promise.reject(K);
      }
    }, []);
    var le = function() {
      var K = r(m.uri);
      K ? (B(m.text.copied_to_clipboard), setInterval(function() {
        return B("");
      }, 1200)) : (B("Error"), setInterval(function() {
        return B("");
      }, 1200));
    };
    return o.createElement("div", null, o.createElement("p", {
      id: N,
      className: "walletconnect-qrcode__text"
    }, m.text.scan_qrcode_with_wallet), o.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: $
      }
    }), o.createElement("div", {
      className: "walletconnect-modal__footer"
    }, o.createElement("a", {
      onClick: le
    }, m.text.copy_to_clipboard)), o.createElement(x, {
      message: O
    }));
  }
  function T(m) {
    var A = e.isAndroid(), O = e.isMobile(), B = O ? m.qrcodeModalOptions && m.qrcodeModalOptions.mobileLinks ? m.qrcodeModalOptions.mobileLinks : void 0 : m.qrcodeModalOptions && m.qrcodeModalOptions.desktopLinks ? m.qrcodeModalOptions.desktopLinks : void 0, F = o.useState(!1), $ = F[0], z = F[1], le = o.useState(!1), K = le[0], ye = le[1], ve = o.useState(!O), V = ve[0], ue = ve[1], Be = {
      mobile: O,
      text: m.text,
      uri: m.uri,
      qrcodeModalOptions: m.qrcodeModalOptions
    }, Ue = o.useState(""), De = Ue[0], $e = Ue[1], rt = o.useState(!1), Fe = rt[0], St = rt[1], U = o.useState([]), D = U[0], X = U[1], be = o.useState(""), ot = be[0], Ee = be[1], Ce = function() {
      K || $ || B && !B.length || D.length > 0 || o.useEffect(function() {
        var Bi = function() {
          try {
            if (A)
              return Promise.resolve();
            z(!0);
            var It = a(function() {
              var He = m.qrcodeModalOptions && m.qrcodeModalOptions.registryUrl ? m.qrcodeModalOptions.registryUrl : e.getWalletRegistryUrl();
              return Promise.resolve(fetch(He)).then(function(Ui) {
                return Promise.resolve(Ui.json()).then(function(Di) {
                  var $i = Di.listings, Fi = O ? "mobile" : "desktop", it = e.getMobileLinkRegistry(e.formatMobileRegistry($i, Fi), B);
                  z(!1), ye(!0), Ee(it.length ? "" : m.text.no_supported_wallets), X(it);
                  var Gn = it.length === 1;
                  Gn && ($e(e.formatIOSMobile(m.uri, it[0])), ue(!0)), St(Gn);
                });
              });
            }, function(He) {
              z(!1), ye(!0), Ee(m.text.something_went_wrong), console.error(He);
            });
            return Promise.resolve(It && It.then ? It.then(function() {
            }) : void 0);
          } catch (He) {
            return Promise.reject(He);
          }
        };
        Bi();
      });
    };
    Ce();
    var Pi = O ? V : !V;
    return o.createElement("div", {
      id: S,
      className: "walletconnect-qrcode__base animated fadeIn"
    }, o.createElement("div", {
      className: "walletconnect-modal__base"
    }, o.createElement(f, {
      onClose: m.onClose
    }), Fe && V ? o.createElement("div", {
      className: "walletconnect-modal__single_wallet"
    }, o.createElement("a", {
      onClick: function() {
        return e.saveMobileLinkInfo({
          name: D[0].name,
          href: De
        });
      },
      href: De,
      rel: "noopener noreferrer",
      target: "_blank"
    }, m.text.connect_with + " " + (Fe ? D[0].name : "") + " ›")) : A || $ || !$ && D.length ? o.createElement("div", {
      className: "walletconnect-modal__mobile__toggle" + (Pi ? " right__selected" : "")
    }, o.createElement("div", {
      className: "walletconnect-modal__mobile__toggle_selector"
    }), O ? o.createElement(o.Fragment, null, o.createElement("a", {
      onClick: function() {
        return ue(!1), Ce();
      }
    }, m.text.mobile), o.createElement("a", {
      onClick: function() {
        return ue(!0);
      }
    }, m.text.qrcode)) : o.createElement(o.Fragment, null, o.createElement("a", {
      onClick: function() {
        return ue(!0);
      }
    }, m.text.qrcode), o.createElement("a", {
      onClick: function() {
        return ue(!1), Ce();
      }
    }, m.text.desktop))) : null, o.createElement("div", null, V || !A && !$ && !D.length ? o.createElement(k, Object.assign({}, Be)) : o.createElement(C, Object.assign({}, Be, {
      links: D,
      errorMessage: ot
    })))));
  }
  var M = {
    choose_preferred_wallet: "Wähle bevorzugte Wallet",
    connect_mobile_wallet: "Verbinde mit Mobile Wallet",
    scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
    connect: "Verbinden",
    qrcode: "QR-Code",
    mobile: "Mobile",
    desktop: "Desktop",
    copy_to_clipboard: "In die Zwischenablage kopieren",
    copied_to_clipboard: "In die Zwischenablage kopiert!",
    connect_with: "Verbinden mit Hilfe von",
    loading: "Laden...",
    something_went_wrong: "Etwas ist schief gelaufen",
    no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
    no_wallets_found: "keine Wallet gefunden"
  }, Q = {
    choose_preferred_wallet: "Choose your preferred wallet",
    connect_mobile_wallet: "Connect to Mobile Wallet",
    scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
    connect: "Connect",
    qrcode: "QR Code",
    mobile: "Mobile",
    desktop: "Desktop",
    copy_to_clipboard: "Copy to clipboard",
    copied_to_clipboard: "Copied to clipboard!",
    connect_with: "Connect with",
    loading: "Loading...",
    something_went_wrong: "Something went wrong",
    no_supported_wallets: "There are no supported wallets yet",
    no_wallets_found: "No wallets found"
  }, ce = {
    choose_preferred_wallet: "Elige tu billetera preferida",
    connect_mobile_wallet: "Conectar a billetera móvil",
    scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
    connect: "Conectar",
    qrcode: "Código QR",
    mobile: "Móvil",
    desktop: "Desktop",
    copy_to_clipboard: "Copiar",
    copied_to_clipboard: "Copiado!",
    connect_with: "Conectar mediante",
    loading: "Cargando...",
    something_went_wrong: "Algo salió mal",
    no_supported_wallets: "Todavía no hay billeteras compatibles",
    no_wallets_found: "No se encontraron billeteras"
  }, bt = {
    choose_preferred_wallet: "Choisissez votre portefeuille préféré",
    connect_mobile_wallet: "Se connecter au portefeuille mobile",
    scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
    connect: "Se connecter",
    qrcode: "QR Code",
    mobile: "Mobile",
    desktop: "Desktop",
    copy_to_clipboard: "Copier",
    copied_to_clipboard: "Copié!",
    connect_with: "Connectez-vous à l'aide de",
    loading: "Chargement...",
    something_went_wrong: "Quelque chose a mal tourné",
    no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
    no_wallets_found: "Aucun portefeuille trouvé"
  }, tt = {
    choose_preferred_wallet: "원하는 지갑을 선택하세요",
    connect_mobile_wallet: "모바일 지갑과 연결",
    scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
    connect: "연결",
    qrcode: "QR 코드",
    mobile: "모바일",
    desktop: "데스크탑",
    copy_to_clipboard: "클립보드에 복사",
    copied_to_clipboard: "클립보드에 복사되었습니다!",
    connect_with: "와 연결하다",
    loading: "로드 중...",
    something_went_wrong: "문제가 발생했습니다.",
    no_supported_wallets: "아직 지원되는 지갑이 없습니다",
    no_wallets_found: "지갑을 찾을 수 없습니다"
  }, Et = {
    choose_preferred_wallet: "Escolha sua carteira preferida",
    connect_mobile_wallet: "Conectar-se à carteira móvel",
    scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
    connect: "Conectar",
    qrcode: "Código QR",
    mobile: "Móvel",
    desktop: "Desktop",
    copy_to_clipboard: "Copiar",
    copied_to_clipboard: "Copiado!",
    connect_with: "Ligar por meio de",
    loading: "Carregamento...",
    something_went_wrong: "Algo correu mal",
    no_supported_wallets: "Ainda não há carteiras suportadas",
    no_wallets_found: "Nenhuma carteira encontrada"
  }, Oe = {
    choose_preferred_wallet: "选择你的钱包",
    connect_mobile_wallet: "连接至移动端钱包",
    scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
    connect: "连接",
    qrcode: "二维码",
    mobile: "移动",
    desktop: "桌面",
    copy_to_clipboard: "复制到剪贴板",
    copied_to_clipboard: "复制到剪贴板成功！",
    connect_with: "通过以下方式连接",
    loading: "正在加载...",
    something_went_wrong: "出了问题",
    no_supported_wallets: "目前还没有支持的钱包",
    no_wallets_found: "没有找到钱包"
  }, pe = {
    choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
    connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
    scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
    connect: "اتصال",
    qrcode: "کد QR",
    mobile: "سیار",
    desktop: "دسکتاپ",
    copy_to_clipboard: "کپی به کلیپ بورد",
    copied_to_clipboard: "در کلیپ بورد کپی شد!",
    connect_with: "ارتباط با",
    loading: "...بارگذاری",
    something_went_wrong: "مشکلی پیش آمد",
    no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
    no_wallets_found: "هیچ کیف پولی پیدا نشد"
  }, qe = {
    de: M,
    en: Q,
    es: ce,
    fr: bt,
    ko: tt,
    pt: Et,
    zh: Oe,
    fa: pe
  };
  function Pe() {
    var m = e.getDocumentOrThrow(), A = m.getElementById(_);
    A && m.head.removeChild(A);
    var O = m.createElement("style");
    O.setAttribute("id", _), O.innerText = s, m.head.appendChild(O);
  }
  function Ct() {
    var m = e.getDocumentOrThrow(), A = m.createElement("div");
    return A.setAttribute("id", p), m.body.appendChild(A), A;
  }
  function me() {
    var m = e.getDocumentOrThrow(), A = m.getElementById(S);
    A && (A.className = A.className.replace("fadeIn", "fadeOut"), setTimeout(function() {
      var O = m.getElementById(p);
      O && m.body.removeChild(O);
    }, w));
  }
  function nt(m) {
    return function() {
      me(), m && m();
    };
  }
  function j() {
    var m = e.getNavigatorOrThrow().language.split("-")[0] || "en";
    return qe[m] || qe.en;
  }
  function W(m, A, O) {
    Pe();
    var B = Ct();
    o.render(o.createElement(T, {
      text: j(),
      uri: m,
      onClose: nt(A),
      qrcodeModalOptions: O
    }), B);
  }
  function re() {
    me();
  }
  var we = function() {
    return typeof Rt < "u" && typeof Rt.versions < "u" && typeof Rt.versions.node < "u";
  };
  function Li(m, A, O) {
    console.log(m), we() ? i(m) : W(m, A, O);
  }
  function Oi() {
    we() || re();
  }
  var qi = {
    open: Li,
    close: Oi
  };
  return rn = qi, rn;
}
var bl = vl();
const El = /* @__PURE__ */ gn(bl);
class Cl extends rs {
  constructor(e) {
    super(), this.events = new eo(), this.accounts = [], this.chainId = 1, this.pending = !1, this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModalOptions = void 0, this.opts = e, this.chainId = (e == null ? void 0 : e.chainId) || this.chainId, this.wc = this.register(e);
  }
  get connected() {
    return typeof this.wc < "u" && this.wc.connected;
  }
  get connecting() {
    return this.pending;
  }
  get connector() {
    return this.wc = this.register(this.opts), this.wc;
  }
  on(e, n) {
    this.events.on(e, n);
  }
  once(e, n) {
    this.events.once(e, n);
  }
  off(e, n) {
    this.events.off(e, n);
  }
  removeListener(e, n) {
    this.events.removeListener(e, n);
  }
  async open(e) {
    if (this.connected) {
      this.onOpen();
      return;
    }
    return new Promise((n, r) => {
      this.on("error", (o) => {
        r(o);
      }), this.on("open", () => {
        n();
      }), this.create(e);
    });
  }
  async close() {
    typeof this.wc > "u" || (this.wc.connected && this.wc.killSession(), this.onClose());
  }
  async send(e) {
    this.wc = this.register(this.opts), this.connected || await this.open(), this.sendPayload(e).then((n) => this.events.emit("payload", n)).catch((n) => this.events.emit("payload", Yn(e.id, n.message)));
  }
  register(e) {
    if (this.wc)
      return this.wc;
    this.opts = e || this.opts, this.bridge = e != null && e.connector ? e.connector.bridge : (e == null ? void 0 : e.bridge) || "https://bridge.walletconnect.org", this.qrcode = typeof (e == null ? void 0 : e.qrcode) > "u" || e.qrcode !== !1, this.chainId = typeof (e == null ? void 0 : e.chainId) < "u" ? e.chainId : this.chainId, this.qrcodeModalOptions = e == null ? void 0 : e.qrcodeModalOptions;
    const n = {
      bridge: this.bridge,
      qrcodeModal: this.qrcode ? El : void 0,
      qrcodeModalOptions: this.qrcodeModalOptions,
      storageId: e == null ? void 0 : e.storageId,
      signingMethods: e == null ? void 0 : e.signingMethods,
      clientMeta: e == null ? void 0 : e.clientMeta
    };
    if (this.wc = typeof (e == null ? void 0 : e.connector) < "u" ? e.connector : new Sc(n), typeof this.wc > "u")
      throw new Error("Failed to register WalletConnect connector");
    return this.wc.accounts.length && (this.accounts = this.wc.accounts), this.wc.chainId && (this.chainId = this.wc.chainId), this.registerConnectorEvents(), this.wc;
  }
  onOpen(e) {
    this.pending = !1, e && (this.wc = e), this.events.emit("open");
  }
  onClose() {
    this.pending = !1, this.wc && (this.wc = void 0), this.events.emit("close");
  }
  onError(e, n = "Failed or Rejected Request", r = -32e3) {
    const o = {
      id: e.id,
      jsonrpc: e.jsonrpc,
      error: { code: r, message: n }
    };
    return this.events.emit("payload", o), o;
  }
  create(e) {
    this.wc = this.register(this.opts), this.chainId = e || this.chainId, !(this.connected || this.pending) && (this.pending = !0, this.registerConnectorEvents(), this.wc.createSession({ chainId: this.chainId }).then(() => this.events.emit("created")).catch((n) => this.events.emit("error", n)));
  }
  registerConnectorEvents() {
    this.wc = this.register(this.opts), this.wc.on("connect", (e) => {
      var n, r;
      if (e) {
        this.events.emit("error", e);
        return;
      }
      this.accounts = ((n = this.wc) === null || n === void 0 ? void 0 : n.accounts) || [], this.chainId = ((r = this.wc) === null || r === void 0 ? void 0 : r.chainId) || this.chainId, this.onOpen();
    }), this.wc.on("disconnect", (e) => {
      if (e) {
        this.events.emit("error", e);
        return;
      }
      this.onClose();
    }), this.wc.on("modal_closed", () => {
      this.events.emit("error", new Error("User closed modal"));
    }), this.wc.on("session_update", (e, n) => {
      const { accounts: r, chainId: o } = n.params[0];
      (!this.accounts || r && this.accounts !== r) && (this.accounts = r, this.events.emit("accountsChanged", r)), (!this.chainId || o && this.chainId !== o) && (this.chainId = o, this.events.emit("chainChanged", o));
    });
  }
  async sendPayload(e) {
    this.wc = this.register(this.opts);
    try {
      const n = await this.wc.unsafeSend(e);
      return this.sanitizeResponse(n);
    } catch (n) {
      return this.onError(e, n.message);
    }
  }
  sanitizeResponse(e) {
    return typeof e.error < "u" && typeof e.error.code > "u" ? Yn(e.id, e.error.message, e.error.data) : e;
  }
}
class Tl {
  constructor(e) {
    this.events = new eo(), this.rpc = { infuraId: e == null ? void 0 : e.infuraId, custom: e == null ? void 0 : e.rpc }, this.signer = new Zn(new Cl(e));
    const n = this.signer.connection.chainId || (e == null ? void 0 : e.chainId) || 1;
    this.http = this.setHttpProvider(n), this.registerEventListeners();
  }
  get connected() {
    return this.signer.connection.connected;
  }
  get connector() {
    return this.signer.connection.connector;
  }
  get accounts() {
    return this.signer.connection.accounts;
  }
  get chainId() {
    return this.signer.connection.chainId;
  }
  get rpcUrl() {
    var e;
    return ((e = this.http) === null || e === void 0 ? void 0 : e.connection).url || "";
  }
  async request(e) {
    switch (e.method) {
      case "eth_requestAccounts":
        return await this.connect(), this.signer.connection.accounts;
      case "eth_accounts":
        return this.signer.connection.accounts;
      case "eth_chainId":
        return this.signer.connection.chainId;
    }
    if (pn.includes(e.method))
      return this.signer.request(e);
    if (typeof this.http > "u")
      throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);
    return this.http.request(e);
  }
  sendAsync(e, n) {
    this.request(e).then((r) => n(null, r)).catch((r) => n(r, void 0));
  }
  async enable() {
    return await this.request({ method: "eth_requestAccounts" });
  }
  async connect() {
    this.signer.connection.connected || await this.signer.connect();
  }
  async disconnect() {
    this.signer.connection.connected && await this.signer.disconnect();
  }
  on(e, n) {
    this.events.on(e, n);
  }
  once(e, n) {
    this.events.once(e, n);
  }
  removeListener(e, n) {
    this.events.removeListener(e, n);
  }
  off(e, n) {
    this.events.off(e, n);
  }
  get isWalletConnect() {
    return !0;
  }
  registerEventListeners() {
    this.signer.connection.on("accountsChanged", (e) => {
      this.events.emit("accountsChanged", e);
    }), this.signer.connection.on("chainChanged", (e) => {
      this.http = this.setHttpProvider(e), this.events.emit("chainChanged", e);
    }), this.signer.on("disconnect", () => {
      this.events.emit("disconnect");
    });
  }
  setHttpProvider(e) {
    const n = Io(e, this.rpc);
    return typeof n > "u" ? void 0 : new Zn(new os(n));
  }
}
export {
  Tl as default
};
