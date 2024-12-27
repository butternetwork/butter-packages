import { PublicKey as Q, Transaction as q, VersionedTransaction as C } from "@solana/web3.js";
import { E as X } from "./index-CY91ZQ8Z.js";
import { g as Y, S as Z, K as ee, L as te, v as ne } from "./index-jFQGGD_v.js";
var H, D;
function ie() {
  if (D) return H;
  D = 1;
  function s(n) {
    if (n.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
      e[t] = 255;
    for (var i = 0; i < n.length; i++) {
      var r = n.charAt(i), a = r.charCodeAt(0);
      if (e[a] !== 255)
        throw new TypeError(r + " is ambiguous");
      e[a] = i;
    }
    var d = n.length, A = n.charAt(0), f = Math.log(d) / Math.log(256), c = Math.log(256) / Math.log(d);
    function u(o) {
      if (o instanceof Uint8Array || (ArrayBuffer.isView(o) ? o = new Uint8Array(o.buffer, o.byteOffset, o.byteLength) : Array.isArray(o) && (o = Uint8Array.from(o))), !(o instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (o.length === 0)
        return "";
      for (var l = 0, S = 0, _ = 0, w = o.length; _ !== w && o[_] === 0; )
        _++, l++;
      for (var g = (w - _) * c + 1 >>> 0, h = new Uint8Array(g); _ !== w; ) {
        for (var p = o[_], E = 0, m = g - 1; (p !== 0 || E < S) && m !== -1; m--, E++)
          p += 256 * h[m] >>> 0, h[m] = p % d >>> 0, p = p / d >>> 0;
        if (p !== 0)
          throw new Error("Non-zero carry");
        S = E, _++;
      }
      for (var b = g - S; b !== g && h[b] === 0; )
        b++;
      for (var z = A.repeat(l); b < g; ++b)
        z += n.charAt(h[b]);
      return z;
    }
    function $(o) {
      if (typeof o != "string")
        throw new TypeError("Expected String");
      if (o.length === 0)
        return new Uint8Array();
      for (var l = 0, S = 0, _ = 0; o[l] === A; )
        S++, l++;
      for (var w = (o.length - l) * f + 1 >>> 0, g = new Uint8Array(w); o[l]; ) {
        var h = e[o.charCodeAt(l)];
        if (h === 255)
          return;
        for (var p = 0, E = w - 1; (h !== 0 || p < _) && E !== -1; E--, p++)
          h += d * g[E] >>> 0, g[E] = h % 256 >>> 0, h = h / 256 >>> 0;
        if (h !== 0)
          throw new Error("Non-zero carry");
        _ = p, l++;
      }
      for (var m = w - _; m !== w && g[m] === 0; )
        m++;
      for (var b = new Uint8Array(S + (w - m)), z = S; m !== w; )
        b[z++] = g[m++];
      return b;
    }
    function J(o) {
      var l = $(o);
      if (l)
        return l;
      throw new Error("Non-base" + d + " character");
    }
    return {
      encode: u,
      decodeUnsafe: $,
      decode: J
    };
  }
  return H = s, H;
}
var k, V;
function re() {
  return V || (V = 1, k = ie()("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")), k;
}
var se = re();
const y = /* @__PURE__ */ Y(se);
function P(s) {
  return s.version === void 0;
}
function j(s) {
  return P(s) ? s.serialize({
    verifySignatures: !1,
    requireAllSignatures: !1
  }) : s.serialize();
}
var B = function(s, n, e, t) {
  function i(r) {
    return r instanceof e ? r : new e(function(a) {
      a(r);
    });
  }
  return new (e || (e = Promise))(function(r, a) {
    function d(c) {
      try {
        f(t.next(c));
      } catch (u) {
        a(u);
      }
    }
    function A(c) {
      try {
        f(t.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function f(c) {
      c.done ? r(c.value) : i(c.value).then(d, A);
    }
    f((t = t.apply(s, n || [])).next());
  });
};
function O(s) {
  return B(this, void 0, void 0, function* () {
    try {
      return yield s.request({ method: "wallet_getSnaps" }), !0;
    } catch {
      return !1;
    }
  });
}
function ae() {
  return B(this, void 0, void 0, function* () {
    try {
      const s = window.ethereum;
      if (!s)
        return null;
      if (s.providers && Array.isArray(s.providers)) {
        const n = s.providers;
        for (const e of n)
          if (yield O(e))
            return e;
      }
      if (s.detected && Array.isArray(s.detected)) {
        const n = s.detected;
        for (const e of n)
          if (yield O(e))
            return e;
      }
      return (yield O(s)) ? s : null;
    } catch (s) {
      return console.error(s), null;
    }
  });
}
const oe = "solana:mainnet", ce = "solana:devnet", de = "solana:testnet", le = "solana:localnet", G = [
  oe,
  ce,
  de,
  le
];
function U(s) {
  return G.includes(s);
}
var M = function(s, n, e, t) {
  if (e === "a" && !t) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? s !== n || !t : !n.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? t : e === "a" ? t.call(s) : t ? t.value : n.get(s);
}, T = function(s, n, e, t, i) {
  if (t === "m") throw new TypeError("Private method is not writable");
  if (t === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof n == "function" ? s !== n || !i : !n.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t === "a" ? i.call(s, e) : i ? i.value = e : n.set(s, e), e;
}, x, K, I, N, W, F;
const he = G, fe = [Z, ee, te];
class L {
  get address() {
    return M(this, x, "f");
  }
  get publicKey() {
    return M(this, K, "f").slice();
  }
  get chains() {
    return M(this, I, "f").slice();
  }
  get features() {
    return M(this, N, "f").slice();
  }
  get label() {
    return M(this, W, "f");
  }
  get icon() {
    return M(this, F, "f");
  }
  constructor({ address: n, publicKey: e, label: t, icon: i }) {
    x.set(this, void 0), K.set(this, void 0), I.set(this, void 0), N.set(this, void 0), W.set(this, void 0), F.set(this, void 0), new.target === L && Object.freeze(this), T(this, x, n, "f"), T(this, K, e, "f"), T(this, I, he, "f"), T(this, N, fe, "f"), T(this, W, t, "f"), T(this, F, i, "f");
  }
}
x = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap();
var v = function(s, n, e, t) {
  function i(r) {
    return r instanceof e ? r : new e(function(a) {
      a(r);
    });
  }
  return new (e || (e = Promise))(function(r, a) {
    function d(c) {
      try {
        f(t.next(c));
      } catch (u) {
        a(u);
      }
    }
    function A(c) {
      try {
        f(t.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function f(c) {
      c.done ? r(c.value) : i(c.value).then(d, A);
    }
    f((t = t.apply(s, n || [])).next());
  });
};
class R extends X {
  constructor(n) {
    super(), this._network = "mainnet-beta", this._iframeParams = {}, this._element = null, this._iframe = null, this._publicKey = null, this._account = null, this._isConnected = !1, this._connectHandler = null, this._messageHandlers = {}, this._handleEvent = (e) => {
      var t, i;
      switch (e.type) {
        case "connect": {
          this._collapseIframe(), !((t = e.data) === null || t === void 0) && t.publicKey ? (this._publicKey = e.data.publicKey, this._isConnected = !0, this._connectHandler && (this._connectHandler.resolve(), this._connectHandler = null), this._connected()) : (this._connectHandler && (this._connectHandler.reject(), this._connectHandler = null), this._disconnected());
          return;
        }
        case "disconnect": {
          this._connectHandler && (this._connectHandler.reject(), this._connectHandler = null), this._disconnected();
          return;
        }
        case "accountChanged": {
          !((i = e.data) === null || i === void 0) && i.publicKey ? (this._publicKey = e.data.publicKey, this.emit("accountChanged", this.publicKey), this._standardConnected()) : (this.emit("accountChanged", void 0), this._standardDisconnected());
          return;
        }
        default:
          return;
      }
    }, this._handleResize = (e) => {
      e.resizeMode === "full" ? e.params.mode === "fullscreen" ? this._expandIframe() : e.params.mode === "hide" && this._collapseIframe() : e.resizeMode === "coordinates" && this._resizeIframe(e.params);
    }, this._handleMessage = (e) => {
      var t;
      if (((t = e.data) === null || t === void 0 ? void 0 : t.channel) !== "solflareIframeToWalletAdapter")
        return;
      const i = e.data.data || {};
      if (i.type === "event")
        this._handleEvent(i.event);
      else if (i.type === "resize")
        this._handleResize(i);
      else if (i.type === "response" && this._messageHandlers[i.id]) {
        const { resolve: r, reject: a } = this._messageHandlers[i.id];
        delete this._messageHandlers[i.id], i.error ? a(i.error) : r(i.result);
      }
    }, this._removeElement = () => {
      this._element && (this._element.remove(), this._element = null);
    }, this._removeDanglingElements = () => {
      const e = document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");
      for (const t of e)
        t.parentElement && t.remove();
    }, this._injectElement = () => {
      this._removeElement(), this._removeDanglingElements();
      const e = Object.assign(Object.assign({}, this._iframeParams), { mm: !0, v: 1, cluster: this._network || "mainnet-beta", origin: window.location.origin || "", title: document.title || "" }), t = Object.keys(e).map((r) => `${r}=${encodeURIComponent(e[r])}`).join("&"), i = `${R.IFRAME_URL}?${t}`;
      this._element = document.createElement("div"), this._element.className = "solflare-metamask-wallet-adapter-iframe", this._element.innerHTML = `
      <iframe src='${i}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `, document.body.appendChild(this._element), this._iframe = this._element.querySelector("iframe"), window.addEventListener("message", this._handleMessage, !1);
    }, this._collapseIframe = () => {
      this._iframe && (this._iframe.style.top = "", this._iframe.style.right = "", this._iframe.style.height = "2px", this._iframe.style.width = "2px");
    }, this._expandIframe = () => {
      this._iframe && (this._iframe.style.top = "0px", this._iframe.style.bottom = "0px", this._iframe.style.left = "0px", this._iframe.style.right = "0px", this._iframe.style.width = "100%", this._iframe.style.height = "100%");
    }, this._resizeIframe = (e) => {
      this._iframe && (this._iframe.style.top = isFinite(e.top) ? `${e.top}px` : "", this._iframe.style.bottom = isFinite(e.bottom) ? `${e.bottom}px` : "", this._iframe.style.left = isFinite(e.left) ? `${e.left}px` : "", this._iframe.style.right = isFinite(e.right) ? `${e.right}px` : "", this._iframe.style.width = isFinite(e.width) ? `${e.width}px` : e.width, this._iframe.style.height = isFinite(e.height) ? `${e.height}px` : e.height);
    }, this._sendIframeMessage = (e) => {
      if (!this.connected || !this.publicKey)
        throw new Error("Wallet not connected");
      return new Promise((t, i) => {
        var r, a;
        const d = ne();
        this._messageHandlers[d] = { resolve: t, reject: i }, (a = (r = this._iframe) === null || r === void 0 ? void 0 : r.contentWindow) === null || a === void 0 || a.postMessage({
          channel: "solflareWalletAdapterToIframe",
          data: Object.assign({ id: d }, e)
        }, "*");
      });
    }, this._connected = () => {
      this._isConnected = !0, this.emit("connect", this.publicKey), this._standardConnected();
    }, this._disconnected = () => {
      this._publicKey = null, this._isConnected = !1, window.removeEventListener("message", this._handleMessage, !1), this._removeElement(), this.emit("disconnect"), this._standardDisconnected();
    }, this._standardConnected = () => {
      if (!this.publicKey)
        return;
      const e = this.publicKey.toString();
      (!this._account || this._account.address !== e) && (this._account = new L({
        address: e,
        publicKey: this.publicKey.toBytes()
      }), this.emit("standard_change", { accounts: this.standardAccounts }));
    }, this._standardDisconnected = () => {
      this._account && (this._account = null, this.emit("standard_change", { accounts: this.standardAccounts }));
    }, n != null && n.network && (this._network = n == null ? void 0 : n.network), window.SolflareMetaMaskParams && (this._iframeParams = Object.assign(Object.assign({}, this._iframeParams), window.SolflareMetaMaskParams)), n != null && n.params && (this._iframeParams = Object.assign(Object.assign({}, this._iframeParams), n == null ? void 0 : n.params));
  }
  get publicKey() {
    return this._publicKey ? new Q(this._publicKey) : null;
  }
  get standardAccount() {
    return this._account;
  }
  get standardAccounts() {
    return this._account ? [this._account] : [];
  }
  get isConnected() {
    return this._isConnected;
  }
  get connected() {
    return this.isConnected;
  }
  get autoApprove() {
    return !1;
  }
  connect() {
    return v(this, void 0, void 0, function* () {
      this.connected || (this._injectElement(), yield new Promise((n, e) => {
        this._connectHandler = { resolve: n, reject: e };
      }));
    });
  }
  disconnect() {
    return v(this, void 0, void 0, function* () {
      yield this._sendIframeMessage({
        method: "disconnect"
      }), this._disconnected();
    });
  }
  signTransaction(n) {
    var e;
    return v(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey)
        throw new Error("Wallet not connected");
      try {
        const t = j(n), i = yield this._sendIframeMessage({
          method: "signTransactionV2",
          params: {
            transaction: y.encode(t)
          }
        }), { transaction: r } = i;
        return P(n) ? q.from(y.decode(r)) : C.deserialize(y.decode(r));
      } catch (t) {
        throw new Error(((e = t == null ? void 0 : t.toString) === null || e === void 0 ? void 0 : e.call(t)) || "Failed to sign transaction");
      }
    });
  }
  signAllTransactions(n) {
    var e;
    return v(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey)
        throw new Error("Wallet not connected");
      try {
        const t = n.map((r) => j(r)), { transactions: i } = yield this._sendIframeMessage({
          method: "signAllTransactionsV2",
          params: {
            transactions: t.map((r) => y.encode(r))
          }
        });
        return i.map((r, a) => P(n[a]) ? q.from(y.decode(r)) : C.deserialize(y.decode(r)));
      } catch (t) {
        throw new Error(((e = t == null ? void 0 : t.toString) === null || e === void 0 ? void 0 : e.call(t)) || "Failed to sign transactions");
      }
    });
  }
  signAndSendTransaction(n, e) {
    var t;
    return v(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey)
        throw new Error("Wallet not connected");
      try {
        const i = j(n), { signature: r } = yield this._sendIframeMessage({
          method: "signAndSendTransaction",
          params: {
            transaction: y.encode(i),
            options: e
          }
        });
        return r;
      } catch (i) {
        throw new Error(((t = i == null ? void 0 : i.toString) === null || t === void 0 ? void 0 : t.call(i)) || "Failed to sign and send transaction");
      }
    });
  }
  signMessage(n, e = "utf8") {
    var t;
    return v(this, void 0, void 0, function* () {
      if (!this.connected || !this.publicKey)
        throw new Error("Wallet not connected");
      try {
        const { signature: i } = yield this._sendIframeMessage({
          method: "signMessage",
          params: {
            data: y.encode(n),
            display: e
          }
        });
        return Uint8Array.from(y.decode(i));
      } catch (i) {
        throw new Error(((t = i == null ? void 0 : i.toString) === null || t === void 0 ? void 0 : t.call(i)) || "Failed to sign message");
      }
    });
  }
  sign(n, e = "utf8") {
    return v(this, void 0, void 0, function* () {
      return yield this.signMessage(n, e);
    });
  }
  static isSupported() {
    return v(this, void 0, void 0, function* () {
      return !!(yield ae());
    });
  }
  standardSignAndSendTransaction(...n) {
    return v(this, void 0, void 0, function* () {
      if (!this.connected)
        throw new Error("not connected");
      const e = [];
      if (n.length === 1) {
        const { transaction: t, account: i, chain: r, options: a } = n[0], { minContextSlot: d, preflightCommitment: A, skipPreflight: f, maxRetries: c } = a || {};
        if (i !== this._account)
          throw new Error("invalid account");
        if (!U(r))
          throw new Error("invalid chain");
        const u = yield this.signAndSendTransaction(C.deserialize(t), {
          preflightCommitment: A,
          minContextSlot: d,
          maxRetries: c,
          skipPreflight: f
        });
        e.push({ signature: y.decode(u) });
      } else if (n.length > 1)
        for (const t of n)
          e.push(...yield this.standardSignAndSendTransaction(t));
      return e;
    });
  }
  standardSignTransaction(...n) {
    return v(this, void 0, void 0, function* () {
      if (!this.connected)
        throw new Error("not connected");
      const e = [];
      if (n.length === 1) {
        const { transaction: t, account: i, chain: r } = n[0];
        if (i !== this._account)
          throw new Error("invalid account");
        if (r && !U(r))
          throw new Error("invalid chain");
        const a = yield this.signTransaction(C.deserialize(t));
        e.push({ signedTransaction: a.serialize() });
      } else if (n.length > 1) {
        let t;
        for (const a of n) {
          if (a.account !== this._account)
            throw new Error("invalid account");
          if (a.chain) {
            if (!U(a.chain))
              throw new Error("invalid chain");
            if (t) {
              if (a.chain !== t)
                throw new Error("conflicting chain");
            } else
              t = a.chain;
          }
        }
        const i = n.map(({ transaction: a }) => C.deserialize(a)), r = yield this.signAllTransactions(i);
        e.push(...r.map((a) => ({
          signedTransaction: a.serialize()
        })));
      }
      return e;
    });
  }
  standardSignMessage(...n) {
    return v(this, void 0, void 0, function* () {
      if (!this.connected)
        throw new Error("not connected");
      const e = [];
      if (n.length === 1) {
        const { message: t, account: i } = n[0];
        if (i !== this._account)
          throw new Error("invalid account");
        const r = yield this.signMessage(t);
        e.push({ signedMessage: t, signature: r });
      } else if (n.length > 1)
        for (const t of n)
          e.push(...yield this.standardSignMessage(t));
      return e;
    });
  }
}
R.IFRAME_URL = "https://widget.solflare.com/";
export {
  L as StandardSolflareMetaMaskWalletAccount,
  R as default
};
