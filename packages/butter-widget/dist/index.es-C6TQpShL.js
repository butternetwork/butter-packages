import { i as sb, b as nb, a as ob, c as ab, d as cb, e as ub, f as hb, h as lb, j as fb, k as pb, B as Tf, l as Nf, r as Af, m as db, g as Wc, n as gb, o as $f, q as yb, s as Jc, t as re, u as vb, w as Qc, x as en, p as hc, y as Cf, z as mb, A as Df, C as So, D as Qr, E as wb, F as Yc } from "./index-jFQGGD_v.js";
import { s as sn, a as $o, d as bb, r as _b, f as ms, g as jf, i as Jr, b as Co, c as pl, e as Eb, h as Ib, j as Zc, p as xb, k as Xc, l as Do, m as xi, n as Pb, o as Ri } from "./index.es-CvWhUDx1.js";
const Oo = {
  ...sb,
  ...nb,
  ...ob,
  ...ab,
  ...cb,
  ...ub,
  ...hb,
  ...lb,
  ...fb,
  ...pb
}, Sb = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };
function Ob(n, t = []) {
  const r = [];
  return Object.keys(n).forEach((s) => {
    if (t.length && !t.includes(s)) return;
    const a = n[s];
    r.push(...a.accounts);
  }), r;
}
const Rb = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function Tb(n, t) {
  const { message: r, code: s } = Rb[n];
  return { message: r, code: s };
}
function Cc(n, t) {
  return !!Array.isArray(n);
}
const Nb = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Ab = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, $b = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Cb(n, t) {
  if (n === "__proto__" || n === "constructor" && t && typeof t == "object" && "prototype" in t) {
    Db(n);
    return;
  }
  return t;
}
function Db(n) {
  console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`);
}
function yo(n, t = {}) {
  if (typeof n != "string")
    return n;
  const r = n.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    n[0] === '"' && n.endsWith('"') && !n.includes("\\")
  )
    return r.slice(1, -1);
  if (r.length <= 9) {
    const s = r.toLowerCase();
    if (s === "true")
      return !0;
    if (s === "false")
      return !1;
    if (s === "undefined")
      return;
    if (s === "null")
      return null;
    if (s === "nan")
      return Number.NaN;
    if (s === "infinity")
      return Number.POSITIVE_INFINITY;
    if (s === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!$b.test(n)) {
    if (t.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return n;
  }
  try {
    if (Nb.test(n) || Ab.test(n)) {
      if (t.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(n, Cb);
    }
    return JSON.parse(n);
  } catch (s) {
    if (t.strict)
      throw s;
    return n;
  }
}
function jb(n) {
  return !n || typeof n.then != "function" ? Promise.resolve(n) : n;
}
function zt(n, ...t) {
  try {
    return jb(n(...t));
  } catch (r) {
    return Promise.reject(r);
  }
}
function Ub(n) {
  const t = typeof n;
  return n === null || t !== "object" && t !== "function";
}
function qb(n) {
  const t = Object.getPrototypeOf(n);
  return !t || t.isPrototypeOf(Object);
}
function Eo(n) {
  if (Ub(n))
    return String(n);
  if (qb(n) || Array.isArray(n))
    return JSON.stringify(n);
  if (typeof n.toJSON == "function")
    return Eo(n.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
const Dc = "base64:";
function Mb(n) {
  return typeof n == "string" ? n : Dc + kb(n);
}
function Lb(n) {
  return typeof n != "string" || !n.startsWith(Dc) ? n : zb(n.slice(Dc.length));
}
function zb(n) {
  return globalThis.Buffer ? Tf.from(n, "base64") : Uint8Array.from(
    globalThis.atob(n),
    (t) => t.codePointAt(0)
  );
}
function kb(n) {
  return globalThis.Buffer ? Tf.from(n).toString("base64") : globalThis.btoa(String.fromCodePoint(...n));
}
function hr(n) {
  var t;
  return n && ((t = n.split("?")[0]) == null ? void 0 : t.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "")) || "";
}
function Hb(...n) {
  return hr(n.join(":"));
}
function vo(n) {
  return n = hr(n), n ? n + ":" : "";
}
const Kb = "memory", Vb = () => {
  const n = /* @__PURE__ */ new Map();
  return {
    name: Kb,
    getInstance: () => n,
    hasItem(t) {
      return n.has(t);
    },
    getItem(t) {
      return n.get(t) ?? null;
    },
    getItemRaw(t) {
      return n.get(t) ?? null;
    },
    setItem(t, r) {
      n.set(t, r);
    },
    setItemRaw(t, r) {
      n.set(t, r);
    },
    removeItem(t) {
      n.delete(t);
    },
    getKeys() {
      return [...n.keys()];
    },
    clear() {
      n.clear();
    },
    dispose() {
      n.clear();
    }
  };
};
function Bb(n = {}) {
  const t = {
    mounts: { "": n.driver || Vb() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (g) => {
    for (const b of t.mountpoints)
      if (g.startsWith(b))
        return {
          base: b,
          relativeKey: g.slice(b.length),
          driver: t.mounts[b]
        };
    return {
      base: "",
      relativeKey: g,
      driver: t.mounts[""]
    };
  }, s = (g, b) => t.mountpoints.filter(
    (P) => P.startsWith(g) || b && g.startsWith(P)
  ).map((P) => ({
    relativeBase: g.length > P.length ? g.slice(P.length) : void 0,
    mountpoint: P,
    driver: t.mounts[P]
  })), a = (g, b) => {
    if (t.watching) {
      b = hr(b);
      for (const P of t.watchListeners)
        P(g, b);
    }
  }, u = async () => {
    if (!t.watching) {
      t.watching = !0;
      for (const g in t.mounts)
        t.unwatch[g] = await dl(
          t.mounts[g],
          a,
          g
        );
    }
  }, f = async () => {
    if (t.watching) {
      for (const g in t.unwatch)
        await t.unwatch[g]();
      t.unwatch = {}, t.watching = !1;
    }
  }, y = (g, b, P) => {
    const O = /* @__PURE__ */ new Map(), U = ($) => {
      let V = O.get($.base);
      return V || (V = {
        driver: $.driver,
        base: $.base,
        items: []
      }, O.set($.base, V)), V;
    };
    for (const $ of g) {
      const V = typeof $ == "string", te = hr(V ? $ : $.key), ge = V ? void 0 : $.value, ce = V || !$.options ? b : { ...b, ...$.options }, ue = r(te);
      U(ue).items.push({
        key: te,
        value: ge,
        relativeKey: ue.relativeKey,
        options: ce
      });
    }
    return Promise.all([...O.values()].map(($) => P($))).then(
      ($) => $.flat()
    );
  }, w = {
    // Item
    hasItem(g, b = {}) {
      g = hr(g);
      const { relativeKey: P, driver: O } = r(g);
      return zt(O.hasItem, P, b);
    },
    getItem(g, b = {}) {
      g = hr(g);
      const { relativeKey: P, driver: O } = r(g);
      return zt(O.getItem, P, b).then(
        (U) => yo(U)
      );
    },
    getItems(g, b = {}) {
      return y(g, b, (P) => P.driver.getItems ? zt(
        P.driver.getItems,
        P.items.map((O) => ({
          key: O.relativeKey,
          options: O.options
        })),
        b
      ).then(
        (O) => O.map((U) => ({
          key: Hb(P.base, U.key),
          value: yo(U.value)
        }))
      ) : Promise.all(
        P.items.map((O) => zt(
          P.driver.getItem,
          O.relativeKey,
          O.options
        ).then((U) => ({
          key: O.key,
          value: yo(U)
        })))
      ));
    },
    getItemRaw(g, b = {}) {
      g = hr(g);
      const { relativeKey: P, driver: O } = r(g);
      return O.getItemRaw ? zt(O.getItemRaw, P, b) : zt(O.getItem, P, b).then(
        (U) => Lb(U)
      );
    },
    async setItem(g, b, P = {}) {
      if (b === void 0)
        return w.removeItem(g);
      g = hr(g);
      const { relativeKey: O, driver: U } = r(g);
      U.setItem && (await zt(U.setItem, O, Eo(b), P), U.watch || a("update", g));
    },
    async setItems(g, b) {
      await y(g, b, async (P) => {
        if (P.driver.setItems)
          return zt(
            P.driver.setItems,
            P.items.map((O) => ({
              key: O.relativeKey,
              value: Eo(O.value),
              options: O.options
            })),
            b
          );
        P.driver.setItem && await Promise.all(
          P.items.map((O) => zt(
            P.driver.setItem,
            O.relativeKey,
            Eo(O.value),
            O.options
          ))
        );
      });
    },
    async setItemRaw(g, b, P = {}) {
      if (b === void 0)
        return w.removeItem(g, P);
      g = hr(g);
      const { relativeKey: O, driver: U } = r(g);
      if (U.setItemRaw)
        await zt(U.setItemRaw, O, b, P);
      else if (U.setItem)
        await zt(U.setItem, O, Mb(b), P);
      else
        return;
      U.watch || a("update", g);
    },
    async removeItem(g, b = {}) {
      typeof b == "boolean" && (b = { removeMeta: b }), g = hr(g);
      const { relativeKey: P, driver: O } = r(g);
      O.removeItem && (await zt(O.removeItem, P, b), (b.removeMeta || b.removeMata) && await zt(O.removeItem, P + "$", b), O.watch || a("remove", g));
    },
    // Meta
    async getMeta(g, b = {}) {
      typeof b == "boolean" && (b = { nativeOnly: b }), g = hr(g);
      const { relativeKey: P, driver: O } = r(g), U = /* @__PURE__ */ Object.create(null);
      if (O.getMeta && Object.assign(U, await zt(O.getMeta, P, b)), !b.nativeOnly) {
        const $ = await zt(
          O.getItem,
          P + "$",
          b
        ).then((V) => yo(V));
        $ && typeof $ == "object" && (typeof $.atime == "string" && ($.atime = new Date($.atime)), typeof $.mtime == "string" && ($.mtime = new Date($.mtime)), Object.assign(U, $));
      }
      return U;
    },
    setMeta(g, b, P = {}) {
      return this.setItem(g + "$", b, P);
    },
    removeMeta(g, b = {}) {
      return this.removeItem(g + "$", b);
    },
    // Keys
    async getKeys(g, b = {}) {
      g = vo(g);
      const P = s(g, !0);
      let O = [];
      const U = [];
      for (const $ of P) {
        const V = await zt(
          $.driver.getKeys,
          $.relativeBase,
          b
        );
        for (const te of V) {
          const ge = $.mountpoint + hr(te);
          O.some((ce) => ge.startsWith(ce)) || U.push(ge);
        }
        O = [
          $.mountpoint,
          ...O.filter((te) => !te.startsWith($.mountpoint))
        ];
      }
      return g ? U.filter(
        ($) => $.startsWith(g) && $[$.length - 1] !== "$"
      ) : U.filter(($) => $[$.length - 1] !== "$");
    },
    // Utils
    async clear(g, b = {}) {
      g = vo(g), await Promise.all(
        s(g, !1).map(async (P) => {
          if (P.driver.clear)
            return zt(P.driver.clear, P.relativeBase, b);
          if (P.driver.removeItem) {
            const O = await P.driver.getKeys(P.relativeBase || "", b);
            return Promise.all(
              O.map((U) => P.driver.removeItem(U, b))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(t.mounts).map((g) => gl(g))
      );
    },
    async watch(g) {
      return await u(), t.watchListeners.push(g), async () => {
        t.watchListeners = t.watchListeners.filter(
          (b) => b !== g
        ), t.watchListeners.length === 0 && await f();
      };
    },
    async unwatch() {
      t.watchListeners = [], await f();
    },
    // Mount
    mount(g, b) {
      if (g = vo(g), g && t.mounts[g])
        throw new Error(`already mounted at ${g}`);
      return g && (t.mountpoints.push(g), t.mountpoints.sort((P, O) => O.length - P.length)), t.mounts[g] = b, t.watching && Promise.resolve(dl(b, a, g)).then((P) => {
        t.unwatch[g] = P;
      }).catch(console.error), w;
    },
    async unmount(g, b = !0) {
      var P, O;
      g = vo(g), !(!g || !t.mounts[g]) && (t.watching && g in t.unwatch && ((O = (P = t.unwatch)[g]) == null || O.call(P), delete t.unwatch[g]), b && await gl(t.mounts[g]), t.mountpoints = t.mountpoints.filter((U) => U !== g), delete t.mounts[g]);
    },
    getMount(g = "") {
      g = hr(g) + ":";
      const b = r(g);
      return {
        driver: b.driver,
        base: b.base
      };
    },
    getMounts(g = "", b = {}) {
      return g = hr(g), s(g, b.parents).map((O) => ({
        driver: O.driver,
        base: O.mountpoint
      }));
    },
    // Aliases
    keys: (g, b = {}) => w.getKeys(g, b),
    get: (g, b = {}) => w.getItem(g, b),
    set: (g, b, P = {}) => w.setItem(g, b, P),
    has: (g, b = {}) => w.hasItem(g, b),
    del: (g, b = {}) => w.removeItem(g, b),
    remove: (g, b = {}) => w.removeItem(g, b)
  };
  return w;
}
function dl(n, t, r) {
  return n.watch ? n.watch((s, a) => t(s, r + a)) : () => {
  };
}
async function gl(n) {
  typeof n.dispose == "function" && await zt(n.dispose);
}
function Fi(n) {
  return new Promise((t, r) => {
    n.oncomplete = n.onsuccess = () => t(n.result), n.onabort = n.onerror = () => r(n.error);
  });
}
function Uf(n, t) {
  const r = indexedDB.open(n);
  r.onupgradeneeded = () => r.result.createObjectStore(t);
  const s = Fi(r);
  return (a, u) => s.then((f) => u(f.transaction(t, a).objectStore(t)));
}
let lc;
function nn() {
  return lc || (lc = Uf("keyval-store", "keyval")), lc;
}
function yl(n, t = nn()) {
  return t("readonly", (r) => Fi(r.get(n)));
}
function Fb(n, t, r = nn()) {
  return r("readwrite", (s) => (s.put(t, n), Fi(s.transaction)));
}
function Gb(n, t = nn()) {
  return t("readwrite", (r) => (r.delete(n), Fi(r.transaction)));
}
function Wb(n = nn()) {
  return n("readwrite", (t) => (t.clear(), Fi(t.transaction)));
}
function Jb(n, t) {
  return n.openCursor().onsuccess = function() {
    this.result && (t(this.result), this.result.continue());
  }, Fi(n.transaction);
}
function Qb(n = nn()) {
  return n("readonly", (t) => {
    if (t.getAllKeys)
      return Fi(t.getAllKeys());
    const r = [];
    return Jb(t, (s) => r.push(s.key)).then(() => r);
  });
}
const Yb = "idb-keyval";
var Zb = (n = {}) => {
  const t = n.base && n.base.length > 0 ? `${n.base}:` : "", r = (a) => t + a;
  let s;
  return n.dbName && n.storeName && (s = Uf(n.dbName, n.storeName)), { name: Yb, options: n, async hasItem(a) {
    return !(typeof await yl(r(a), s) > "u");
  }, async getItem(a) {
    return await yl(r(a), s) ?? null;
  }, setItem(a, u) {
    return Fb(r(a), u, s);
  }, removeItem(a) {
    return Gb(r(a), s);
  }, getKeys() {
    return Qb(s);
  }, clear() {
    return Wb(s);
  } };
};
const Xb = "WALLET_CONNECT_V2_INDEXED_DB", e0 = "keyvaluestorage";
let t0 = class {
  constructor() {
    this.indexedDb = Bb({ driver: Zb({ dbName: Xb, storeName: e0 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const r = await this.indexedDb.getItem(t);
    if (r !== null) return r;
  }
  async setItem(t, r) {
    await this.indexedDb.setItem(t, sn(r));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var fc = typeof globalThis < "u" ? globalThis : typeof window < "u" || typeof window < "u" ? window : typeof self < "u" ? self : {}, Io = { exports: {} };
(function() {
  let n;
  function t() {
  }
  n = t, n.prototype.getItem = function(r) {
    return this.hasOwnProperty(r) ? String(this[r]) : null;
  }, n.prototype.setItem = function(r, s) {
    this[r] = String(s);
  }, n.prototype.removeItem = function(r) {
    delete this[r];
  }, n.prototype.clear = function() {
    const r = this;
    Object.keys(r).forEach(function(s) {
      r[s] = void 0, delete r[s];
    });
  }, n.prototype.key = function(r) {
    return r = r || 0, Object.keys(this)[r];
  }, n.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof fc < "u" && fc.localStorage ? Io.exports = fc.localStorage : typeof window < "u" && window.localStorage ? Io.exports = window.localStorage : Io.exports = new t();
})();
function r0(n) {
  var t;
  return [n[0], $o((t = n[1]) != null ? t : "")];
}
let i0 = class {
  constructor() {
    this.localStorage = Io.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(r0);
  }
  async getItem(t) {
    const r = this.localStorage.getItem(t);
    if (r !== null) return $o(r);
  }
  async setItem(t, r) {
    this.localStorage.setItem(t, sn(r));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
const s0 = "wc_storage_version", vl = 1, n0 = async (n, t, r) => {
  const s = s0, a = await t.getItem(s);
  if (a && a >= vl) {
    r(t);
    return;
  }
  const u = await n.getKeys();
  if (!u.length) {
    r(t);
    return;
  }
  const f = [];
  for (; u.length; ) {
    const y = u.shift();
    if (!y) continue;
    const w = y.toLowerCase();
    if (w.includes("wc@") || w.includes("walletconnect") || w.includes("wc_") || w.includes("wallet_connect")) {
      const g = await n.getItem(y);
      await t.setItem(y, g), f.push(y);
    }
  }
  await t.setItem(s, vl), r(t), o0(n, f);
}, o0 = async (n, t) => {
  t.length && t.forEach(async (r) => {
    await n.removeItem(r);
  });
};
let a0 = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const t = new i0();
    this.storage = t;
    try {
      const r = new t0();
      n0(t, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, r) {
    return await this.initialize(), this.storage.setItem(t, r);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const r = setInterval(() => {
        this.initialized && (clearInterval(r), t());
      }, 20);
    });
  }
};
var pc = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var jc = function(n, t) {
  return jc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
    r.__proto__ = s;
  } || function(r, s) {
    for (var a in s) s.hasOwnProperty(a) && (r[a] = s[a]);
  }, jc(n, t);
};
function c0(n, t) {
  jc(n, t);
  function r() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Uc = function() {
  return Uc = Object.assign || function(t) {
    for (var r, s = 1, a = arguments.length; s < a; s++) {
      r = arguments[s];
      for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (t[u] = r[u]);
    }
    return t;
  }, Uc.apply(this, arguments);
};
function u0(n, t) {
  var r = {};
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && t.indexOf(s) < 0 && (r[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, s = Object.getOwnPropertySymbols(n); a < s.length; a++)
      t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[a]) && (r[s[a]] = n[s[a]]);
  return r;
}
function h0(n, t, r, s) {
  var a = arguments.length, u = a < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, r) : s, f;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") u = Reflect.decorate(n, t, r, s);
  else for (var y = n.length - 1; y >= 0; y--) (f = n[y]) && (u = (a < 3 ? f(u) : a > 3 ? f(t, r, u) : f(t, r)) || u);
  return a > 3 && u && Object.defineProperty(t, r, u), u;
}
function l0(n, t) {
  return function(r, s) {
    t(r, s, n);
  };
}
function f0(n, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(n, t);
}
function p0(n, t, r, s) {
  function a(u) {
    return u instanceof r ? u : new r(function(f) {
      f(u);
    });
  }
  return new (r || (r = Promise))(function(u, f) {
    function y(b) {
      try {
        g(s.next(b));
      } catch (P) {
        f(P);
      }
    }
    function w(b) {
      try {
        g(s.throw(b));
      } catch (P) {
        f(P);
      }
    }
    function g(b) {
      b.done ? u(b.value) : a(b.value).then(y, w);
    }
    g((s = s.apply(n, t || [])).next());
  });
}
function d0(n, t) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, s, a, u, f;
  return f = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
    return this;
  }), f;
  function y(g) {
    return function(b) {
      return w([g, b]);
    };
  }
  function w(g) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (s = 1, a && (u = g[0] & 2 ? a.return : g[0] ? a.throw || ((u = a.return) && u.call(a), 0) : a.next) && !(u = u.call(a, g[1])).done) return u;
      switch (a = 0, u && (g = [g[0] & 2, u.value]), g[0]) {
        case 0:
        case 1:
          u = g;
          break;
        case 4:
          return r.label++, { value: g[1], done: !1 };
        case 5:
          r.label++, a = g[1], g = [0];
          continue;
        case 7:
          g = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (g[0] === 6 || g[0] === 2)) {
            r = 0;
            continue;
          }
          if (g[0] === 3 && (!u || g[1] > u[0] && g[1] < u[3])) {
            r.label = g[1];
            break;
          }
          if (g[0] === 6 && r.label < u[1]) {
            r.label = u[1], u = g;
            break;
          }
          if (u && r.label < u[2]) {
            r.label = u[2], r.ops.push(g);
            break;
          }
          u[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      g = t.call(n, r);
    } catch (b) {
      g = [6, b], a = 0;
    } finally {
      s = u = 0;
    }
    if (g[0] & 5) throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}
function g0(n, t, r, s) {
  s === void 0 && (s = r), n[s] = t[r];
}
function y0(n, t) {
  for (var r in n) r !== "default" && !t.hasOwnProperty(r) && (t[r] = n[r]);
}
function qc(n) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && n[t], s = 0;
  if (r) return r.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && s >= n.length && (n = void 0), { value: n && n[s++], done: !n };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function qf(n, t) {
  var r = typeof Symbol == "function" && n[Symbol.iterator];
  if (!r) return n;
  var s = r.call(n), a, u = [], f;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = s.next()).done; ) u.push(a.value);
  } catch (y) {
    f = { error: y };
  } finally {
    try {
      a && !a.done && (r = s.return) && r.call(s);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}
function v0() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n = n.concat(qf(arguments[t]));
  return n;
}
function m0() {
  for (var n = 0, t = 0, r = arguments.length; t < r; t++) n += arguments[t].length;
  for (var s = Array(n), a = 0, t = 0; t < r; t++)
    for (var u = arguments[t], f = 0, y = u.length; f < y; f++, a++)
      s[a] = u[f];
  return s;
}
function tn(n) {
  return this instanceof tn ? (this.v = n, this) : new tn(n);
}
function w0(n, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = r.apply(n, t || []), a, u = [];
  return a = {}, f("next"), f("throw"), f("return"), a[Symbol.asyncIterator] = function() {
    return this;
  }, a;
  function f(O) {
    s[O] && (a[O] = function(U) {
      return new Promise(function($, V) {
        u.push([O, U, $, V]) > 1 || y(O, U);
      });
    });
  }
  function y(O, U) {
    try {
      w(s[O](U));
    } catch ($) {
      P(u[0][3], $);
    }
  }
  function w(O) {
    O.value instanceof tn ? Promise.resolve(O.value.v).then(g, b) : P(u[0][2], O);
  }
  function g(O) {
    y("next", O);
  }
  function b(O) {
    y("throw", O);
  }
  function P(O, U) {
    O(U), u.shift(), u.length && y(u[0][0], u[0][1]);
  }
}
function b0(n) {
  var t, r;
  return t = {}, s("next"), s("throw", function(a) {
    throw a;
  }), s("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function s(a, u) {
    t[a] = n[a] ? function(f) {
      return (r = !r) ? { value: tn(n[a](f)), done: a === "return" } : u ? u(f) : f;
    } : u;
  }
}
function _0(n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = n[Symbol.asyncIterator], r;
  return t ? t.call(n) : (n = typeof qc == "function" ? qc(n) : n[Symbol.iterator](), r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function s(u) {
    r[u] = n[u] && function(f) {
      return new Promise(function(y, w) {
        f = n[u](f), a(y, w, f.done, f.value);
      });
    };
  }
  function a(u, f, y, w) {
    Promise.resolve(w).then(function(g) {
      u({ value: g, done: y });
    }, f);
  }
}
function E0(n, t) {
  return Object.defineProperty ? Object.defineProperty(n, "raw", { value: t }) : n.raw = t, n;
}
function I0(n) {
  if (n && n.__esModule) return n;
  var t = {};
  if (n != null)
    for (var r in n) Object.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  return t.default = n, t;
}
function x0(n) {
  return n && n.__esModule ? n : { default: n };
}
function P0(n, t) {
  if (!t.has(n))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(n);
}
function S0(n, t, r) {
  if (!t.has(n))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(n, r), r;
}
const O0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Uc;
  },
  __asyncDelegator: b0,
  __asyncGenerator: w0,
  __asyncValues: _0,
  __await: tn,
  __awaiter: p0,
  __classPrivateFieldGet: P0,
  __classPrivateFieldSet: S0,
  __createBinding: g0,
  __decorate: h0,
  __exportStar: y0,
  __extends: c0,
  __generator: d0,
  __importDefault: x0,
  __importStar: I0,
  __makeTemplateObject: E0,
  __metadata: f0,
  __param: l0,
  __read: qf,
  __rest: u0,
  __spread: v0,
  __spreadArrays: m0,
  __values: qc
}, Symbol.toStringTag, { value: "Module" })), jo = /* @__PURE__ */ Nf(O0);
var Ks = {}, dc = {}, Vs = {};
class Gi {
}
const R0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Gi
}, Symbol.toStringTag, { value: "Module" })), T0 = /* @__PURE__ */ Nf(R0);
var ml;
function N0() {
  if (ml) return Vs;
  ml = 1, Object.defineProperty(Vs, "__esModule", { value: !0 }), Vs.IHeartBeat = void 0;
  const n = T0;
  class t extends n.IEvents {
    constructor(s) {
      super();
    }
  }
  return Vs.IHeartBeat = t, Vs;
}
var wl;
function Mf() {
  return wl || (wl = 1, function(n) {
    Object.defineProperty(n, "__esModule", { value: !0 }), jo.__exportStar(N0(), n);
  }(dc)), dc;
}
var gc = {}, Ki = {}, bl;
function A0() {
  if (bl) return Ki;
  bl = 1, Object.defineProperty(Ki, "__esModule", { value: !0 }), Ki.HEARTBEAT_EVENTS = Ki.HEARTBEAT_INTERVAL = void 0;
  const n = Af();
  return Ki.HEARTBEAT_INTERVAL = n.FIVE_SECONDS, Ki.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Ki;
}
var _l;
function Lf() {
  return _l || (_l = 1, function(n) {
    Object.defineProperty(n, "__esModule", { value: !0 }), jo.__exportStar(A0(), n);
  }(gc)), gc;
}
var El;
function $0() {
  if (El) return Ks;
  El = 1, Object.defineProperty(Ks, "__esModule", { value: !0 }), Ks.HeartBeat = void 0;
  const n = jo, t = db(), r = Af(), s = Mf(), a = Lf();
  class u extends s.IHeartBeat {
    constructor(y) {
      super(y), this.events = new t.EventEmitter(), this.interval = a.HEARTBEAT_INTERVAL, this.interval = (y == null ? void 0 : y.interval) || a.HEARTBEAT_INTERVAL;
    }
    static init(y) {
      return n.__awaiter(this, void 0, void 0, function* () {
        const w = new u(y);
        return yield w.init(), w;
      });
    }
    init() {
      return n.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(y, w) {
      this.events.on(y, w);
    }
    once(y, w) {
      this.events.once(y, w);
    }
    off(y, w) {
      this.events.off(y, w);
    }
    removeListener(y, w) {
      this.events.removeListener(y, w);
    }
    initialize() {
      return n.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(a.HEARTBEAT_EVENTS.pulse);
    }
  }
  return Ks.HeartBeat = u, Ks;
}
var Il;
function C0() {
  return Il || (Il = 1, function(n) {
    Object.defineProperty(n, "__esModule", { value: !0 });
    const t = jo;
    t.__exportStar($0(), n), t.__exportStar(Mf(), n), t.__exportStar(Lf(), n);
  }(pc)), pc;
}
var on = C0(), yc, xl;
function D0() {
  if (xl) return yc;
  xl = 1;
  function n(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  yc = t;
  function t(r, s, a) {
    var u = a && a.stringify || n, f = 1;
    if (typeof r == "object" && r !== null) {
      var y = s.length + f;
      if (y === 1) return r;
      var w = new Array(y);
      w[0] = u(r);
      for (var g = 1; g < y; g++)
        w[g] = u(s[g]);
      return w.join(" ");
    }
    if (typeof r != "string")
      return r;
    var b = s.length;
    if (b === 0) return r;
    for (var P = "", O = 1 - f, U = -1, $ = r && r.length || 0, V = 0; V < $; ) {
      if (r.charCodeAt(V) === 37 && V + 1 < $) {
        switch (U = U > -1 ? U : 0, r.charCodeAt(V + 1)) {
          case 100:
          // 'd'
          case 102:
            if (O >= b || s[O] == null) break;
            U < V && (P += r.slice(U, V)), P += Number(s[O]), U = V + 2, V++;
            break;
          case 105:
            if (O >= b || s[O] == null) break;
            U < V && (P += r.slice(U, V)), P += Math.floor(Number(s[O])), U = V + 2, V++;
            break;
          case 79:
          // 'O'
          case 111:
          // 'o'
          case 106:
            if (O >= b || s[O] === void 0) break;
            U < V && (P += r.slice(U, V));
            var te = typeof s[O];
            if (te === "string") {
              P += "'" + s[O] + "'", U = V + 2, V++;
              break;
            }
            if (te === "function") {
              P += s[O].name || "<anonymous>", U = V + 2, V++;
              break;
            }
            P += u(s[O]), U = V + 2, V++;
            break;
          case 115:
            if (O >= b)
              break;
            U < V && (P += r.slice(U, V)), P += String(s[O]), U = V + 2, V++;
            break;
          case 37:
            U < V && (P += r.slice(U, V)), P += "%", U = V + 2, V++, O--;
            break;
        }
        ++O;
      }
      ++V;
    }
    return U === -1 ? r : (U < $ && (P += r.slice(U)), P);
  }
  return yc;
}
var vc, Pl;
function j0() {
  if (Pl) return vc;
  Pl = 1;
  const n = D0();
  vc = a;
  const t = fe().console || {}, r = {
    mapHttpRequest: $,
    mapHttpResponse: $,
    wrapRequestSerializer: V,
    wrapResponseSerializer: V,
    wrapErrorSerializer: V,
    req: $,
    res: $,
    err: O
  };
  function s(D, H) {
    return Array.isArray(D) ? D.filter(function(ye) {
      return ye !== "!stdSerializers.err";
    }) : D === !0 ? Object.keys(H) : !1;
  }
  function a(D) {
    D = D || {}, D.browser = D.browser || {};
    const H = D.browser.transmit;
    if (H && typeof H.send != "function")
      throw Error("pino: transmit option must have a send function");
    const J = D.browser.write || t;
    D.browser.write && (D.browser.asObject = !0);
    const ye = D.serializers || {}, ie = s(D.browser.serialize, ye);
    let Ee = D.browser.serialize;
    Array.isArray(D.browser.serialize) && D.browser.serialize.indexOf("!stdSerializers.err") > -1 && (Ee = !1);
    const Re = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof J == "function" && (J.error = J.fatal = J.warn = J.info = J.debug = J.trace = J), D.enabled === !1 && (D.level = "silent");
    const Xe = D.level || "info", N = Object.create(J);
    N.log || (N.log = te), Object.defineProperty(N, "levelVal", {
      get: Me
    }), Object.defineProperty(N, "level", {
      get: Te,
      set: Q
    });
    const L = {
      transmit: H,
      serialize: ie,
      asObject: D.browser.asObject,
      levels: Re,
      timestamp: U(D)
    };
    N.levels = a.levels, N.level = Xe, N.setMaxListeners = N.getMaxListeners = N.emit = N.addListener = N.on = N.prependListener = N.once = N.prependOnceListener = N.removeListener = N.removeAllListeners = N.listeners = N.listenerCount = N.eventNames = N.write = N.flush = te, N.serializers = ye, N._serialize = ie, N._stdErrSerialize = Ee, N.child = B, H && (N._logEvent = P());
    function Me() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function Te() {
      return this._level;
    }
    function Q(K) {
      if (K !== "silent" && !this.levels.values[K])
        throw Error("unknown level " + K);
      this._level = K, u(L, N, "error", "log"), u(L, N, "fatal", "error"), u(L, N, "warn", "error"), u(L, N, "info", "log"), u(L, N, "debug", "log"), u(L, N, "trace", "log");
    }
    function B(K, F) {
      if (!K)
        throw new Error("missing bindings for child Pino");
      F = F || {}, ie && K.serializers && (F.serializers = K.serializers);
      const ct = F.serializers;
      if (ie && ct) {
        var ke = Object.assign({}, ye, ct), kr = D.browser.serialize === !0 ? Object.keys(ke) : ie;
        delete K.serializers, w([K], kr, ke, this._stdErrSerialize);
      }
      function be(It) {
        this._childLevel = (It._childLevel | 0) + 1, this.error = g(It, K, "error"), this.fatal = g(It, K, "fatal"), this.warn = g(It, K, "warn"), this.info = g(It, K, "info"), this.debug = g(It, K, "debug"), this.trace = g(It, K, "trace"), ke && (this.serializers = ke, this._serialize = kr), H && (this._logEvent = P(
          [].concat(It._logEvent.bindings, K)
        ));
      }
      return be.prototype = this, new be(this);
    }
    return N;
  }
  a.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  }, a.stdSerializers = r, a.stdTimeFunctions = Object.assign({}, { nullTime: ge, epochTime: ce, unixTime: ue, isoTime: le });
  function u(D, H, J, ye) {
    const ie = Object.getPrototypeOf(H);
    H[J] = H.levelVal > H.levels.values[J] ? te : ie[J] ? ie[J] : t[J] || t[ye] || te, f(D, H, J);
  }
  function f(D, H, J) {
    !D.transmit && H[J] === te || (H[J] = /* @__PURE__ */ function(ye) {
      return function() {
        const Ee = D.timestamp(), Re = new Array(arguments.length), Xe = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
        for (var N = 0; N < Re.length; N++) Re[N] = arguments[N];
        if (D.serialize && !D.asObject && w(Re, this._serialize, this.serializers, this._stdErrSerialize), D.asObject ? ye.call(Xe, y(this, J, Re, Ee)) : ye.apply(Xe, Re), D.transmit) {
          const L = D.transmit.level || H.level, Me = a.levels.values[L], Te = a.levels.values[J];
          if (Te < Me) return;
          b(this, {
            ts: Ee,
            methodLevel: J,
            methodValue: Te,
            transmitLevel: L,
            transmitValue: a.levels.values[D.transmit.level || H.level],
            send: D.transmit.send,
            val: H.levelVal
          }, Re);
        }
      };
    }(H[J]));
  }
  function y(D, H, J, ye) {
    D._serialize && w(J, D._serialize, D.serializers, D._stdErrSerialize);
    const ie = J.slice();
    let Ee = ie[0];
    const Re = {};
    ye && (Re.time = ye), Re.level = a.levels.values[H];
    let Xe = (D._childLevel | 0) + 1;
    if (Xe < 1 && (Xe = 1), Ee !== null && typeof Ee == "object") {
      for (; Xe-- && typeof ie[0] == "object"; )
        Object.assign(Re, ie.shift());
      Ee = ie.length ? n(ie.shift(), ie) : void 0;
    } else typeof Ee == "string" && (Ee = n(ie.shift(), ie));
    return Ee !== void 0 && (Re.msg = Ee), Re;
  }
  function w(D, H, J, ye) {
    for (const ie in D)
      if (ye && D[ie] instanceof Error)
        D[ie] = a.stdSerializers.err(D[ie]);
      else if (typeof D[ie] == "object" && !Array.isArray(D[ie]))
        for (const Ee in D[ie])
          H && H.indexOf(Ee) > -1 && Ee in J && (D[ie][Ee] = J[Ee](D[ie][Ee]));
  }
  function g(D, H, J) {
    return function() {
      const ye = new Array(1 + arguments.length);
      ye[0] = H;
      for (var ie = 1; ie < ye.length; ie++)
        ye[ie] = arguments[ie - 1];
      return D[J].apply(this, ye);
    };
  }
  function b(D, H, J) {
    const ye = H.send, ie = H.ts, Ee = H.methodLevel, Re = H.methodValue, Xe = H.val, N = D._logEvent.bindings;
    w(
      J,
      D._serialize || Object.keys(D.serializers),
      D.serializers,
      D._stdErrSerialize === void 0 ? !0 : D._stdErrSerialize
    ), D._logEvent.ts = ie, D._logEvent.messages = J.filter(function(L) {
      return N.indexOf(L) === -1;
    }), D._logEvent.level.label = Ee, D._logEvent.level.value = Re, ye(Ee, D._logEvent, Xe), D._logEvent = P(N);
  }
  function P(D) {
    return {
      ts: 0,
      messages: [],
      bindings: D || [],
      level: { label: "", value: 0 }
    };
  }
  function O(D) {
    const H = {
      type: D.constructor.name,
      msg: D.message,
      stack: D.stack
    };
    for (const J in D)
      H[J] === void 0 && (H[J] = D[J]);
    return H;
  }
  function U(D) {
    return typeof D.timestamp == "function" ? D.timestamp : D.timestamp === !1 ? ge : ce;
  }
  function $() {
    return {};
  }
  function V(D) {
    return D;
  }
  function te() {
  }
  function ge() {
    return !1;
  }
  function ce() {
    return Date.now();
  }
  function ue() {
    return Math.round(Date.now() / 1e3);
  }
  function le() {
    return new Date(Date.now()).toISOString();
  }
  function fe() {
    function D(H) {
      return typeof H < "u" && H;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return D(self) || D(window) || D(this) || {};
    }
  }
  return vc;
}
var U0 = j0();
const Uo = /* @__PURE__ */ Wc(U0), q0 = { level: "info" }, an = "custom_context";
var M0 = Object.defineProperty, L0 = Object.defineProperties, z0 = Object.getOwnPropertyDescriptors, Sl = Object.getOwnPropertySymbols, k0 = Object.prototype.hasOwnProperty, H0 = Object.prototype.propertyIsEnumerable, Ol = (n, t, r) => t in n ? M0(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, K0 = (n, t) => {
  for (var r in t || (t = {})) k0.call(t, r) && Ol(n, r, t[r]);
  if (Sl) for (var r of Sl(t)) H0.call(t, r) && Ol(n, r, t[r]);
  return n;
}, V0 = (n, t) => L0(n, z0(t));
function qo(n) {
  return V0(K0({}, n), { level: (n == null ? void 0 : n.level) || q0.level });
}
function B0(n, t = an) {
  return n[t] || "";
}
function F0(n, t, r = an) {
  return n[r] = t, n;
}
function fr(n, t = an) {
  let r = "";
  return typeof n.bindings > "u" ? r = B0(n, t) : r = n.bindings().context || "", r;
}
function G0(n, t, r = an) {
  const s = fr(n, r);
  return s.trim() ? `${s}/${t}` : t;
}
function pr(n, t, r = an) {
  const s = G0(n, t, r), a = n.child({ context: s });
  return F0(a, s, r);
}
class W0 extends Gi {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}
let J0 = class extends Gi {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Q0 = class {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}, Y0 = class extends Gi {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, Z0 = class extends Gi {
  constructor(t) {
    super();
  }
}, X0 = class {
  constructor(t, r, s, a) {
    this.core = t, this.logger = r, this.name = s;
  }
};
class e_ extends Gi {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}
let t_ = class extends Gi {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, r_ = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, i_ = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, s_ = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, n_ = class {
  constructor(t) {
    this.client = t;
  }
};
var mc = {}, wc = {}, Rl;
function o_() {
  return Rl || (Rl = 1, function(n) {
    Object.defineProperty(n, "__esModule", { value: !0 });
    var t = gb(), r = $f();
    n.DIGEST_LENGTH = 64, n.BLOCK_SIZE = 128;
    var s = (
      /** @class */
      function() {
        function y() {
          this.digestLength = n.DIGEST_LENGTH, this.blockSize = n.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
        }
        return y.prototype._initState = function() {
          this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
        }, y.prototype.reset = function() {
          return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
        }, y.prototype.clean = function() {
          r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
        }, y.prototype.update = function(w, g) {
          if (g === void 0 && (g = w.length), this._finished)
            throw new Error("SHA512: can't update because hash was finished.");
          var b = 0;
          if (this._bytesHashed += g, this._bufferLength > 0) {
            for (; this._bufferLength < n.BLOCK_SIZE && g > 0; )
              this._buffer[this._bufferLength++] = w[b++], g--;
            this._bufferLength === this.blockSize && (u(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
          }
          for (g >= this.blockSize && (b = u(this._tempHi, this._tempLo, this._stateHi, this._stateLo, w, b, g), g %= this.blockSize); g > 0; )
            this._buffer[this._bufferLength++] = w[b++], g--;
          return this;
        }, y.prototype.finish = function(w) {
          if (!this._finished) {
            var g = this._bytesHashed, b = this._bufferLength, P = g / 536870912 | 0, O = g << 3, U = g % 128 < 112 ? 128 : 256;
            this._buffer[b] = 128;
            for (var $ = b + 1; $ < U - 8; $++)
              this._buffer[$] = 0;
            t.writeUint32BE(P, this._buffer, U - 8), t.writeUint32BE(O, this._buffer, U - 4), u(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, U), this._finished = !0;
          }
          for (var $ = 0; $ < this.digestLength / 8; $++)
            t.writeUint32BE(this._stateHi[$], w, $ * 8), t.writeUint32BE(this._stateLo[$], w, $ * 8 + 4);
          return this;
        }, y.prototype.digest = function() {
          var w = new Uint8Array(this.digestLength);
          return this.finish(w), w;
        }, y.prototype.saveState = function() {
          if (this._finished)
            throw new Error("SHA256: cannot save finished state");
          return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          };
        }, y.prototype.restoreState = function(w) {
          return this._stateHi.set(w.stateHi), this._stateLo.set(w.stateLo), this._bufferLength = w.bufferLength, w.buffer && this._buffer.set(w.buffer), this._bytesHashed = w.bytesHashed, this._finished = !1, this;
        }, y.prototype.cleanSavedState = function(w) {
          r.wipe(w.stateHi), r.wipe(w.stateLo), w.buffer && r.wipe(w.buffer), w.bufferLength = 0, w.bytesHashed = 0;
        }, y;
      }()
    );
    n.SHA512 = s;
    var a = new Int32Array([
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ]);
    function u(y, w, g, b, P, O, U) {
      for (var $ = g[0], V = g[1], te = g[2], ge = g[3], ce = g[4], ue = g[5], le = g[6], fe = g[7], D = b[0], H = b[1], J = b[2], ye = b[3], ie = b[4], Ee = b[5], Re = b[6], Xe = b[7], N, L, Me, Te, Q, B, K, F; U >= 128; ) {
        for (var ct = 0; ct < 16; ct++) {
          var ke = 8 * ct + O;
          y[ct] = t.readUint32BE(P, ke), w[ct] = t.readUint32BE(P, ke + 4);
        }
        for (var ct = 0; ct < 80; ct++) {
          var kr = $, be = V, It = te, C = ge, A = ce, R = ue, h = le, E = fe, X = D, ae = H, me = J, Ne = ye, $e = ie, xe = Ee, xt = Re, vt = Xe;
          if (N = fe, L = Xe, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = (ce >>> 14 | ie << 18) ^ (ce >>> 18 | ie << 14) ^ (ie >>> 9 | ce << 23), L = (ie >>> 14 | ce << 18) ^ (ie >>> 18 | ce << 14) ^ (ce >>> 9 | ie << 23), Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, N = ce & ue ^ ~ce & le, L = ie & Ee ^ ~ie & Re, Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, N = a[ct * 2], L = a[ct * 2 + 1], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, N = y[ct % 16], L = w[ct % 16], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, Me = K & 65535 | F << 16, Te = Q & 65535 | B << 16, N = Me, L = Te, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = ($ >>> 28 | D << 4) ^ (D >>> 2 | $ << 30) ^ (D >>> 7 | $ << 25), L = (D >>> 28 | $ << 4) ^ ($ >>> 2 | D << 30) ^ ($ >>> 7 | D << 25), Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, N = $ & V ^ $ & te ^ V & te, L = D & H ^ D & J ^ H & J, Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, E = K & 65535 | F << 16, vt = Q & 65535 | B << 16, N = C, L = Ne, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = Me, L = Te, Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, C = K & 65535 | F << 16, Ne = Q & 65535 | B << 16, V = kr, te = be, ge = It, ce = C, ue = A, le = R, fe = h, $ = E, H = X, J = ae, ye = me, ie = Ne, Ee = $e, Re = xe, Xe = xt, D = vt, ct % 16 === 15)
            for (var ke = 0; ke < 16; ke++)
              N = y[ke], L = w[ke], Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = y[(ke + 9) % 16], L = w[(ke + 9) % 16], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, Me = y[(ke + 1) % 16], Te = w[(ke + 1) % 16], N = (Me >>> 1 | Te << 31) ^ (Me >>> 8 | Te << 24) ^ Me >>> 7, L = (Te >>> 1 | Me << 31) ^ (Te >>> 8 | Me << 24) ^ (Te >>> 7 | Me << 25), Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, Me = y[(ke + 14) % 16], Te = w[(ke + 14) % 16], N = (Me >>> 19 | Te << 13) ^ (Te >>> 29 | Me << 3) ^ Me >>> 6, L = (Te >>> 19 | Me << 13) ^ (Me >>> 29 | Te << 3) ^ (Te >>> 6 | Me << 26), Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, y[ke] = K & 65535 | F << 16, w[ke] = Q & 65535 | B << 16;
        }
        N = $, L = D, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = g[0], L = b[0], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, g[0] = $ = K & 65535 | F << 16, b[0] = D = Q & 65535 | B << 16, N = V, L = H, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = g[1], L = b[1], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, g[1] = V = K & 65535 | F << 16, b[1] = H = Q & 65535 | B << 16, N = te, L = J, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = g[2], L = b[2], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, g[2] = te = K & 65535 | F << 16, b[2] = J = Q & 65535 | B << 16, N = ge, L = ye, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = g[3], L = b[3], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, g[3] = ge = K & 65535 | F << 16, b[3] = ye = Q & 65535 | B << 16, N = ce, L = ie, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = g[4], L = b[4], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, g[4] = ce = K & 65535 | F << 16, b[4] = ie = Q & 65535 | B << 16, N = ue, L = Ee, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = g[5], L = b[5], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, g[5] = ue = K & 65535 | F << 16, b[5] = Ee = Q & 65535 | B << 16, N = le, L = Re, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = g[6], L = b[6], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, g[6] = le = K & 65535 | F << 16, b[6] = Re = Q & 65535 | B << 16, N = fe, L = Xe, Q = L & 65535, B = L >>> 16, K = N & 65535, F = N >>> 16, N = g[7], L = b[7], Q += L & 65535, B += L >>> 16, K += N & 65535, F += N >>> 16, B += Q >>> 16, K += B >>> 16, F += K >>> 16, g[7] = fe = K & 65535 | F << 16, b[7] = Xe = Q & 65535 | B << 16, O += 128, U -= 128;
      }
      return O;
    }
    function f(y) {
      var w = new s();
      w.update(y);
      var g = w.digest();
      return w.clean(), g;
    }
    n.hash = f;
  }(wc)), wc;
}
var Tl;
function a_() {
  return Tl || (Tl = 1, function(n) {
    Object.defineProperty(n, "__esModule", { value: !0 }), n.convertSecretKeyToX25519 = n.convertPublicKeyToX25519 = n.verify = n.sign = n.extractPublicKeyFromSecretKey = n.generateKeyPair = n.generateKeyPairFromSeed = n.SEED_LENGTH = n.SECRET_KEY_LENGTH = n.PUBLIC_KEY_LENGTH = n.SIGNATURE_LENGTH = void 0;
    const t = yb(), r = o_(), s = $f();
    n.SIGNATURE_LENGTH = 64, n.PUBLIC_KEY_LENGTH = 32, n.SECRET_KEY_LENGTH = 64, n.SEED_LENGTH = 32;
    function a(C) {
      const A = new Float64Array(16);
      if (C)
        for (let R = 0; R < C.length; R++)
          A[R] = C[R];
      return A;
    }
    const u = new Uint8Array(32);
    u[0] = 9;
    const f = a(), y = a([1]), w = a([
      30883,
      4953,
      19914,
      30187,
      55467,
      16705,
      2637,
      112,
      59544,
      30585,
      16505,
      36039,
      65139,
      11119,
      27886,
      20995
    ]), g = a([
      61785,
      9906,
      39828,
      60374,
      45398,
      33411,
      5274,
      224,
      53552,
      61171,
      33010,
      6542,
      64743,
      22239,
      55772,
      9222
    ]), b = a([
      54554,
      36645,
      11616,
      51542,
      42930,
      38181,
      51040,
      26924,
      56412,
      64982,
      57905,
      49316,
      21502,
      52590,
      14035,
      8553
    ]), P = a([
      26200,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214
    ]), O = a([
      41136,
      18958,
      6951,
      50414,
      58488,
      44335,
      6150,
      12099,
      55207,
      15867,
      153,
      11085,
      57099,
      20417,
      9344,
      11139
    ]);
    function U(C, A) {
      for (let R = 0; R < 16; R++)
        C[R] = A[R] | 0;
    }
    function $(C) {
      let A = 1;
      for (let R = 0; R < 16; R++) {
        let h = C[R] + A + 65535;
        A = Math.floor(h / 65536), C[R] = h - A * 65536;
      }
      C[0] += A - 1 + 37 * (A - 1);
    }
    function V(C, A, R) {
      const h = ~(R - 1);
      for (let E = 0; E < 16; E++) {
        const X = h & (C[E] ^ A[E]);
        C[E] ^= X, A[E] ^= X;
      }
    }
    function te(C, A) {
      const R = a(), h = a();
      for (let E = 0; E < 16; E++)
        h[E] = A[E];
      $(h), $(h), $(h);
      for (let E = 0; E < 2; E++) {
        R[0] = h[0] - 65517;
        for (let ae = 1; ae < 15; ae++)
          R[ae] = h[ae] - 65535 - (R[ae - 1] >> 16 & 1), R[ae - 1] &= 65535;
        R[15] = h[15] - 32767 - (R[14] >> 16 & 1);
        const X = R[15] >> 16 & 1;
        R[14] &= 65535, V(h, R, 1 - X);
      }
      for (let E = 0; E < 16; E++)
        C[2 * E] = h[E] & 255, C[2 * E + 1] = h[E] >> 8;
    }
    function ge(C, A) {
      let R = 0;
      for (let h = 0; h < 32; h++)
        R |= C[h] ^ A[h];
      return (1 & R - 1 >>> 8) - 1;
    }
    function ce(C, A) {
      const R = new Uint8Array(32), h = new Uint8Array(32);
      return te(R, C), te(h, A), ge(R, h);
    }
    function ue(C) {
      const A = new Uint8Array(32);
      return te(A, C), A[0] & 1;
    }
    function le(C, A) {
      for (let R = 0; R < 16; R++)
        C[R] = A[2 * R] + (A[2 * R + 1] << 8);
      C[15] &= 32767;
    }
    function fe(C, A, R) {
      for (let h = 0; h < 16; h++)
        C[h] = A[h] + R[h];
    }
    function D(C, A, R) {
      for (let h = 0; h < 16; h++)
        C[h] = A[h] - R[h];
    }
    function H(C, A, R) {
      let h, E, X = 0, ae = 0, me = 0, Ne = 0, $e = 0, xe = 0, xt = 0, vt = 0, st = 0, De = 0, We = 0, Je = 0, nt = 0, Le = 0, Qe = 0, Ae = 0, He = 0, ut = 0, Ue = 0, Pt = 0, Dt = 0, Ht = 0, Kt = 0, qt = 0, Jt = 0, ir = 0, Hr = 0, Qt = 0, Yr = 0, pi = 0, Ti = 0, ht = R[0], et = R[1], lt = R[2], ft = R[3], ot = R[4], tt = R[5], St = R[6], Ot = R[7], pt = R[8], Rt = R[9], dt = R[10], mt = R[11], gt = R[12], Ge = R[13], Tt = R[14], Nt = R[15];
      h = A[0], X += h * ht, ae += h * et, me += h * lt, Ne += h * ft, $e += h * ot, xe += h * tt, xt += h * St, vt += h * Ot, st += h * pt, De += h * Rt, We += h * dt, Je += h * mt, nt += h * gt, Le += h * Ge, Qe += h * Tt, Ae += h * Nt, h = A[1], ae += h * ht, me += h * et, Ne += h * lt, $e += h * ft, xe += h * ot, xt += h * tt, vt += h * St, st += h * Ot, De += h * pt, We += h * Rt, Je += h * dt, nt += h * mt, Le += h * gt, Qe += h * Ge, Ae += h * Tt, He += h * Nt, h = A[2], me += h * ht, Ne += h * et, $e += h * lt, xe += h * ft, xt += h * ot, vt += h * tt, st += h * St, De += h * Ot, We += h * pt, Je += h * Rt, nt += h * dt, Le += h * mt, Qe += h * gt, Ae += h * Ge, He += h * Tt, ut += h * Nt, h = A[3], Ne += h * ht, $e += h * et, xe += h * lt, xt += h * ft, vt += h * ot, st += h * tt, De += h * St, We += h * Ot, Je += h * pt, nt += h * Rt, Le += h * dt, Qe += h * mt, Ae += h * gt, He += h * Ge, ut += h * Tt, Ue += h * Nt, h = A[4], $e += h * ht, xe += h * et, xt += h * lt, vt += h * ft, st += h * ot, De += h * tt, We += h * St, Je += h * Ot, nt += h * pt, Le += h * Rt, Qe += h * dt, Ae += h * mt, He += h * gt, ut += h * Ge, Ue += h * Tt, Pt += h * Nt, h = A[5], xe += h * ht, xt += h * et, vt += h * lt, st += h * ft, De += h * ot, We += h * tt, Je += h * St, nt += h * Ot, Le += h * pt, Qe += h * Rt, Ae += h * dt, He += h * mt, ut += h * gt, Ue += h * Ge, Pt += h * Tt, Dt += h * Nt, h = A[6], xt += h * ht, vt += h * et, st += h * lt, De += h * ft, We += h * ot, Je += h * tt, nt += h * St, Le += h * Ot, Qe += h * pt, Ae += h * Rt, He += h * dt, ut += h * mt, Ue += h * gt, Pt += h * Ge, Dt += h * Tt, Ht += h * Nt, h = A[7], vt += h * ht, st += h * et, De += h * lt, We += h * ft, Je += h * ot, nt += h * tt, Le += h * St, Qe += h * Ot, Ae += h * pt, He += h * Rt, ut += h * dt, Ue += h * mt, Pt += h * gt, Dt += h * Ge, Ht += h * Tt, Kt += h * Nt, h = A[8], st += h * ht, De += h * et, We += h * lt, Je += h * ft, nt += h * ot, Le += h * tt, Qe += h * St, Ae += h * Ot, He += h * pt, ut += h * Rt, Ue += h * dt, Pt += h * mt, Dt += h * gt, Ht += h * Ge, Kt += h * Tt, qt += h * Nt, h = A[9], De += h * ht, We += h * et, Je += h * lt, nt += h * ft, Le += h * ot, Qe += h * tt, Ae += h * St, He += h * Ot, ut += h * pt, Ue += h * Rt, Pt += h * dt, Dt += h * mt, Ht += h * gt, Kt += h * Ge, qt += h * Tt, Jt += h * Nt, h = A[10], We += h * ht, Je += h * et, nt += h * lt, Le += h * ft, Qe += h * ot, Ae += h * tt, He += h * St, ut += h * Ot, Ue += h * pt, Pt += h * Rt, Dt += h * dt, Ht += h * mt, Kt += h * gt, qt += h * Ge, Jt += h * Tt, ir += h * Nt, h = A[11], Je += h * ht, nt += h * et, Le += h * lt, Qe += h * ft, Ae += h * ot, He += h * tt, ut += h * St, Ue += h * Ot, Pt += h * pt, Dt += h * Rt, Ht += h * dt, Kt += h * mt, qt += h * gt, Jt += h * Ge, ir += h * Tt, Hr += h * Nt, h = A[12], nt += h * ht, Le += h * et, Qe += h * lt, Ae += h * ft, He += h * ot, ut += h * tt, Ue += h * St, Pt += h * Ot, Dt += h * pt, Ht += h * Rt, Kt += h * dt, qt += h * mt, Jt += h * gt, ir += h * Ge, Hr += h * Tt, Qt += h * Nt, h = A[13], Le += h * ht, Qe += h * et, Ae += h * lt, He += h * ft, ut += h * ot, Ue += h * tt, Pt += h * St, Dt += h * Ot, Ht += h * pt, Kt += h * Rt, qt += h * dt, Jt += h * mt, ir += h * gt, Hr += h * Ge, Qt += h * Tt, Yr += h * Nt, h = A[14], Qe += h * ht, Ae += h * et, He += h * lt, ut += h * ft, Ue += h * ot, Pt += h * tt, Dt += h * St, Ht += h * Ot, Kt += h * pt, qt += h * Rt, Jt += h * dt, ir += h * mt, Hr += h * gt, Qt += h * Ge, Yr += h * Tt, pi += h * Nt, h = A[15], Ae += h * ht, He += h * et, ut += h * lt, Ue += h * ft, Pt += h * ot, Dt += h * tt, Ht += h * St, Kt += h * Ot, qt += h * pt, Jt += h * Rt, ir += h * dt, Hr += h * mt, Qt += h * gt, Yr += h * Ge, pi += h * Tt, Ti += h * Nt, X += 38 * He, ae += 38 * ut, me += 38 * Ue, Ne += 38 * Pt, $e += 38 * Dt, xe += 38 * Ht, xt += 38 * Kt, vt += 38 * qt, st += 38 * Jt, De += 38 * ir, We += 38 * Hr, Je += 38 * Qt, nt += 38 * Yr, Le += 38 * pi, Qe += 38 * Ti, E = 1, h = X + E + 65535, E = Math.floor(h / 65536), X = h - E * 65536, h = ae + E + 65535, E = Math.floor(h / 65536), ae = h - E * 65536, h = me + E + 65535, E = Math.floor(h / 65536), me = h - E * 65536, h = Ne + E + 65535, E = Math.floor(h / 65536), Ne = h - E * 65536, h = $e + E + 65535, E = Math.floor(h / 65536), $e = h - E * 65536, h = xe + E + 65535, E = Math.floor(h / 65536), xe = h - E * 65536, h = xt + E + 65535, E = Math.floor(h / 65536), xt = h - E * 65536, h = vt + E + 65535, E = Math.floor(h / 65536), vt = h - E * 65536, h = st + E + 65535, E = Math.floor(h / 65536), st = h - E * 65536, h = De + E + 65535, E = Math.floor(h / 65536), De = h - E * 65536, h = We + E + 65535, E = Math.floor(h / 65536), We = h - E * 65536, h = Je + E + 65535, E = Math.floor(h / 65536), Je = h - E * 65536, h = nt + E + 65535, E = Math.floor(h / 65536), nt = h - E * 65536, h = Le + E + 65535, E = Math.floor(h / 65536), Le = h - E * 65536, h = Qe + E + 65535, E = Math.floor(h / 65536), Qe = h - E * 65536, h = Ae + E + 65535, E = Math.floor(h / 65536), Ae = h - E * 65536, X += E - 1 + 37 * (E - 1), E = 1, h = X + E + 65535, E = Math.floor(h / 65536), X = h - E * 65536, h = ae + E + 65535, E = Math.floor(h / 65536), ae = h - E * 65536, h = me + E + 65535, E = Math.floor(h / 65536), me = h - E * 65536, h = Ne + E + 65535, E = Math.floor(h / 65536), Ne = h - E * 65536, h = $e + E + 65535, E = Math.floor(h / 65536), $e = h - E * 65536, h = xe + E + 65535, E = Math.floor(h / 65536), xe = h - E * 65536, h = xt + E + 65535, E = Math.floor(h / 65536), xt = h - E * 65536, h = vt + E + 65535, E = Math.floor(h / 65536), vt = h - E * 65536, h = st + E + 65535, E = Math.floor(h / 65536), st = h - E * 65536, h = De + E + 65535, E = Math.floor(h / 65536), De = h - E * 65536, h = We + E + 65535, E = Math.floor(h / 65536), We = h - E * 65536, h = Je + E + 65535, E = Math.floor(h / 65536), Je = h - E * 65536, h = nt + E + 65535, E = Math.floor(h / 65536), nt = h - E * 65536, h = Le + E + 65535, E = Math.floor(h / 65536), Le = h - E * 65536, h = Qe + E + 65535, E = Math.floor(h / 65536), Qe = h - E * 65536, h = Ae + E + 65535, E = Math.floor(h / 65536), Ae = h - E * 65536, X += E - 1 + 37 * (E - 1), C[0] = X, C[1] = ae, C[2] = me, C[3] = Ne, C[4] = $e, C[5] = xe, C[6] = xt, C[7] = vt, C[8] = st, C[9] = De, C[10] = We, C[11] = Je, C[12] = nt, C[13] = Le, C[14] = Qe, C[15] = Ae;
    }
    function J(C, A) {
      H(C, A, A);
    }
    function ye(C, A) {
      const R = a();
      let h;
      for (h = 0; h < 16; h++)
        R[h] = A[h];
      for (h = 253; h >= 0; h--)
        J(R, R), h !== 2 && h !== 4 && H(R, R, A);
      for (h = 0; h < 16; h++)
        C[h] = R[h];
    }
    function ie(C, A) {
      const R = a();
      let h;
      for (h = 0; h < 16; h++)
        R[h] = A[h];
      for (h = 250; h >= 0; h--)
        J(R, R), h !== 1 && H(R, R, A);
      for (h = 0; h < 16; h++)
        C[h] = R[h];
    }
    function Ee(C, A) {
      const R = a(), h = a(), E = a(), X = a(), ae = a(), me = a(), Ne = a(), $e = a(), xe = a();
      D(R, C[1], C[0]), D(xe, A[1], A[0]), H(R, R, xe), fe(h, C[0], C[1]), fe(xe, A[0], A[1]), H(h, h, xe), H(E, C[3], A[3]), H(E, E, g), H(X, C[2], A[2]), fe(X, X, X), D(ae, h, R), D(me, X, E), fe(Ne, X, E), fe($e, h, R), H(C[0], ae, me), H(C[1], $e, Ne), H(C[2], Ne, me), H(C[3], ae, $e);
    }
    function Re(C, A, R) {
      for (let h = 0; h < 4; h++)
        V(C[h], A[h], R);
    }
    function Xe(C, A) {
      const R = a(), h = a(), E = a();
      ye(E, A[2]), H(R, A[0], E), H(h, A[1], E), te(C, h), C[31] ^= ue(R) << 7;
    }
    function N(C, A, R) {
      U(C[0], f), U(C[1], y), U(C[2], y), U(C[3], f);
      for (let h = 255; h >= 0; --h) {
        const E = R[h / 8 | 0] >> (h & 7) & 1;
        Re(C, A, E), Ee(A, C), Ee(C, C), Re(C, A, E);
      }
    }
    function L(C, A) {
      const R = [a(), a(), a(), a()];
      U(R[0], b), U(R[1], P), U(R[2], y), H(R[3], b, P), N(C, R, A);
    }
    function Me(C) {
      if (C.length !== n.SEED_LENGTH)
        throw new Error(`ed25519: seed must be ${n.SEED_LENGTH} bytes`);
      const A = (0, r.hash)(C);
      A[0] &= 248, A[31] &= 127, A[31] |= 64;
      const R = new Uint8Array(32), h = [a(), a(), a(), a()];
      L(h, A), Xe(R, h);
      const E = new Uint8Array(64);
      return E.set(C), E.set(R, 32), {
        publicKey: R,
        secretKey: E
      };
    }
    n.generateKeyPairFromSeed = Me;
    function Te(C) {
      const A = (0, t.randomBytes)(32, C), R = Me(A);
      return (0, s.wipe)(A), R;
    }
    n.generateKeyPair = Te;
    function Q(C) {
      if (C.length !== n.SECRET_KEY_LENGTH)
        throw new Error(`ed25519: secret key must be ${n.SECRET_KEY_LENGTH} bytes`);
      return new Uint8Array(C.subarray(32));
    }
    n.extractPublicKeyFromSecretKey = Q;
    const B = new Float64Array([
      237,
      211,
      245,
      92,
      26,
      99,
      18,
      88,
      214,
      156,
      247,
      162,
      222,
      249,
      222,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      16
    ]);
    function K(C, A) {
      let R, h, E, X;
      for (h = 63; h >= 32; --h) {
        for (R = 0, E = h - 32, X = h - 12; E < X; ++E)
          A[E] += R - 16 * A[h] * B[E - (h - 32)], R = Math.floor((A[E] + 128) / 256), A[E] -= R * 256;
        A[E] += R, A[h] = 0;
      }
      for (R = 0, E = 0; E < 32; E++)
        A[E] += R - (A[31] >> 4) * B[E], R = A[E] >> 8, A[E] &= 255;
      for (E = 0; E < 32; E++)
        A[E] -= R * B[E];
      for (h = 0; h < 32; h++)
        A[h + 1] += A[h] >> 8, C[h] = A[h] & 255;
    }
    function F(C) {
      const A = new Float64Array(64);
      for (let R = 0; R < 64; R++)
        A[R] = C[R];
      for (let R = 0; R < 64; R++)
        C[R] = 0;
      K(C, A);
    }
    function ct(C, A) {
      const R = new Float64Array(64), h = [a(), a(), a(), a()], E = (0, r.hash)(C.subarray(0, 32));
      E[0] &= 248, E[31] &= 127, E[31] |= 64;
      const X = new Uint8Array(64);
      X.set(E.subarray(32), 32);
      const ae = new r.SHA512();
      ae.update(X.subarray(32)), ae.update(A);
      const me = ae.digest();
      ae.clean(), F(me), L(h, me), Xe(X, h), ae.reset(), ae.update(X.subarray(0, 32)), ae.update(C.subarray(32)), ae.update(A);
      const Ne = ae.digest();
      F(Ne);
      for (let $e = 0; $e < 32; $e++)
        R[$e] = me[$e];
      for (let $e = 0; $e < 32; $e++)
        for (let xe = 0; xe < 32; xe++)
          R[$e + xe] += Ne[$e] * E[xe];
      return K(X.subarray(32), R), X;
    }
    n.sign = ct;
    function ke(C, A) {
      const R = a(), h = a(), E = a(), X = a(), ae = a(), me = a(), Ne = a();
      return U(C[2], y), le(C[1], A), J(E, C[1]), H(X, E, w), D(E, E, C[2]), fe(X, C[2], X), J(ae, X), J(me, ae), H(Ne, me, ae), H(R, Ne, E), H(R, R, X), ie(R, R), H(R, R, E), H(R, R, X), H(R, R, X), H(C[0], R, X), J(h, C[0]), H(h, h, X), ce(h, E) && H(C[0], C[0], O), J(h, C[0]), H(h, h, X), ce(h, E) ? -1 : (ue(C[0]) === A[31] >> 7 && D(C[0], f, C[0]), H(C[3], C[0], C[1]), 0);
    }
    function kr(C, A, R) {
      const h = new Uint8Array(32), E = [a(), a(), a(), a()], X = [a(), a(), a(), a()];
      if (R.length !== n.SIGNATURE_LENGTH)
        throw new Error(`ed25519: signature must be ${n.SIGNATURE_LENGTH} bytes`);
      if (ke(X, C))
        return !1;
      const ae = new r.SHA512();
      ae.update(R.subarray(0, 32)), ae.update(C), ae.update(A);
      const me = ae.digest();
      return F(me), N(E, X, me), L(X, R.subarray(32)), Ee(E, X), Xe(h, E), !ge(R, h);
    }
    n.verify = kr;
    function be(C) {
      let A = [a(), a(), a(), a()];
      if (ke(A, C))
        throw new Error("Ed25519: invalid public key");
      let R = a(), h = a(), E = A[1];
      fe(R, y, E), D(h, y, E), ye(h, h), H(R, R, h);
      let X = new Uint8Array(32);
      return te(X, R), X;
    }
    n.convertPublicKeyToX25519 = be;
    function It(C) {
      const A = (0, r.hash)(C.subarray(0, 32));
      A[0] &= 248, A[31] &= 127, A[31] |= 64;
      const R = new Uint8Array(A.subarray(0, 32));
      return (0, s.wipe)(A), R;
    }
    n.convertSecretKeyToX25519 = It;
  }(mc)), mc;
}
var zf = a_();
const c_ = "EdDSA", u_ = "JWT", kf = ".", Hf = "base64url", h_ = "utf8", l_ = "utf8", f_ = ":", p_ = "did", d_ = "key", Nl = "base58btc", g_ = "z", y_ = "K36", v_ = 32;
function eu(n) {
  return globalThis.Buffer != null ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n;
}
function Kf(n = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? eu(globalThis.Buffer.allocUnsafe(n)) : new Uint8Array(n);
}
function m_(n, t) {
  t || (t = n.reduce((a, u) => a + u.length, 0));
  const r = Kf(t);
  let s = 0;
  for (const a of n)
    r.set(a, s), s += a.length;
  return eu(r);
}
function Vf(n, t, r, s) {
  return {
    name: n,
    prefix: t,
    encoder: {
      name: n,
      prefix: t,
      encode: r
    },
    decoder: { decode: s }
  };
}
const Al = Vf("utf8", "u", (n) => "u" + new TextDecoder("utf8").decode(n), (n) => new TextEncoder().encode(n.substring(1))), bc = Vf("ascii", "a", (n) => {
  let t = "a";
  for (let r = 0; r < n.length; r++)
    t += String.fromCharCode(n[r]);
  return t;
}, (n) => {
  n = n.substring(1);
  const t = Kf(n.length);
  for (let r = 0; r < n.length; r++)
    t[r] = n.charCodeAt(r);
  return t;
}), Bf = {
  utf8: Al,
  "utf-8": Al,
  hex: Oo.base16,
  latin1: bc,
  ascii: bc,
  binary: bc,
  ...Oo
};
function tu(n, t = "utf8") {
  const r = Bf[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString("utf8") : r.encoder.encode(n).substring(1);
}
function ru(n, t = "utf8") {
  const r = Bf[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? eu(globalThis.Buffer.from(n, "utf-8")) : r.decoder.decode(`${r.prefix}${n}`);
}
function Ro(n) {
  return tu(ru(sn(n), h_), Hf);
}
function Ff(n) {
  const t = ru(y_, Nl), r = g_ + tu(m_([t, n]), Nl);
  return [p_, d_, r].join(f_);
}
function w_(n) {
  return tu(n, Hf);
}
function b_(n) {
  return ru([Ro(n.header), Ro(n.payload)].join(kf), l_);
}
function __(n) {
  return [
    Ro(n.header),
    Ro(n.payload),
    w_(n.signature)
  ].join(kf);
}
function $l(n = Jc.randomBytes(v_)) {
  return zf.generateKeyPairFromSeed(n);
}
async function E_(n, t, r, s, a = re.fromMiliseconds(Date.now())) {
  const u = { alg: c_, typ: u_ }, f = Ff(s.publicKey), y = a + r, w = { iss: f, sub: n, aud: t, iat: a, exp: y }, g = b_({ header: u, payload: w }), b = zf.sign(s.secretKey, g);
  return __({ header: u, payload: w, signature: b });
}
function iu(n) {
  return globalThis.Buffer != null ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n;
}
function Gf(n = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? iu(globalThis.Buffer.allocUnsafe(n)) : new Uint8Array(n);
}
function Cl(n, t) {
  t || (t = n.reduce((a, u) => a + u.length, 0));
  const r = Gf(t);
  let s = 0;
  for (const a of n)
    r.set(a, s), s += a.length;
  return iu(r);
}
function Wf(n, t, r, s) {
  return {
    name: n,
    prefix: t,
    encoder: {
      name: n,
      prefix: t,
      encode: r
    },
    decoder: { decode: s }
  };
}
const Dl = Wf("utf8", "u", (n) => "u" + new TextDecoder("utf8").decode(n), (n) => new TextEncoder().encode(n.substring(1))), _c = Wf("ascii", "a", (n) => {
  let t = "a";
  for (let r = 0; r < n.length; r++)
    t += String.fromCharCode(n[r]);
  return t;
}, (n) => {
  n = n.substring(1);
  const t = Gf(n.length);
  for (let r = 0; r < n.length; r++)
    t[r] = n.charCodeAt(r);
  return t;
}), Jf = {
  utf8: Dl,
  "utf-8": Dl,
  hex: Oo.base16,
  latin1: _c,
  ascii: _c,
  binary: _c,
  ...Oo
};
function zr(n, t = "utf8") {
  const r = Jf[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? iu(globalThis.Buffer.from(n, "utf-8")) : r.decoder.decode(`${r.prefix}${n}`);
}
function Ar(n, t = "utf8") {
  const r = Jf[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString("utf8") : r.encoder.encode(n).substring(1);
}
const I_ = ":";
function x_(n) {
  const [t, r] = n.split(I_);
  return { namespace: t, reference: r };
}
function Qf(n, t) {
  return n.includes(":") ? [n] : t.chains || [];
}
const Yf = "base10", rr = "base16", Mc = "base64pad", su = "utf8", Zf = 0, Wi = 1, P_ = 0, jl = 1, Lc = 12, nu = 32;
function S_() {
  const n = Cf.generateKeyPair();
  return { privateKey: Ar(n.secretKey, rr), publicKey: Ar(n.publicKey, rr) };
}
function zc() {
  const n = Jc.randomBytes(nu);
  return Ar(n, rr);
}
function O_(n, t) {
  const r = Cf.sharedKey(zr(n, rr), zr(t, rr), !0), s = new mb.HKDF(Qc.SHA256, r).expand(nu);
  return Ar(s, rr);
}
function R_(n) {
  const t = Qc.hash(zr(n, rr));
  return Ar(t, rr);
}
function ws(n) {
  const t = Qc.hash(zr(n, su));
  return Ar(t, rr);
}
function T_(n) {
  return zr(`${n}`, Yf);
}
function cn(n) {
  return Number(Ar(n, Yf));
}
function N_(n) {
  const t = T_(typeof n.type < "u" ? n.type : Zf);
  if (cn(t) === Wi && typeof n.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof n.senderPublicKey < "u" ? zr(n.senderPublicKey, rr) : void 0, s = typeof n.iv < "u" ? zr(n.iv, rr) : Jc.randomBytes(Lc), a = new Df.ChaCha20Poly1305(zr(n.symKey, rr)).seal(s, zr(n.message, su));
  return $_({ type: t, sealed: a, iv: s, senderPublicKey: r });
}
function A_(n) {
  const t = new Df.ChaCha20Poly1305(zr(n.symKey, rr)), { sealed: r, iv: s } = To(n.encoded), a = t.open(s, r);
  if (a === null) throw new Error("Failed to decrypt");
  return Ar(a, su);
}
function $_(n) {
  if (cn(n.type) === Wi) {
    if (typeof n.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return Ar(Cl([n.type, n.senderPublicKey, n.iv, n.sealed]), Mc);
  }
  return Ar(Cl([n.type, n.iv, n.sealed]), Mc);
}
function To(n) {
  const t = zr(n, Mc), r = t.slice(P_, jl), s = jl;
  if (cn(r) === Wi) {
    const y = s + nu, w = y + Lc, g = t.slice(s, y), b = t.slice(y, w), P = t.slice(w);
    return { type: r, sealed: P, iv: b, senderPublicKey: g };
  }
  const a = s + Lc, u = t.slice(s, a), f = t.slice(a);
  return { type: r, sealed: f, iv: u };
}
function C_(n, t) {
  const r = To(n);
  return Xf({ type: cn(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Ar(r.senderPublicKey, rr) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function Xf(n) {
  const t = (n == null ? void 0 : n.type) || Zf;
  if (t === Wi) {
    if (typeof (n == null ? void 0 : n.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (n == null ? void 0 : n.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: n == null ? void 0 : n.senderPublicKey, receiverPublicKey: n == null ? void 0 : n.receiverPublicKey };
}
function Ul(n) {
  return n.type === Wi && typeof n.senderPublicKey == "string" && typeof n.receiverPublicKey == "string";
}
var D_ = Object.defineProperty, ql = Object.getOwnPropertySymbols, j_ = Object.prototype.hasOwnProperty, U_ = Object.prototype.propertyIsEnumerable, Ml = (n, t, r) => t in n ? D_(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, Ll = (n, t) => {
  for (var r in t || (t = {})) j_.call(t, r) && Ml(n, r, t[r]);
  if (ql) for (var r of ql(t)) U_.call(t, r) && Ml(n, r, t[r]);
  return n;
};
const q_ = "ReactNative", br = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, M_ = "js";
function ou() {
  return typeof hc < "u" && typeof hc.versions < "u" && typeof hc.versions.node < "u";
}
function _s() {
  return !en.getDocument() && !!en.getNavigator() && navigator.product === q_;
}
function Es() {
  return !ou() && !!en.getNavigator() && !!en.getDocument();
}
function un() {
  return _s() ? br.reactNative : ou() ? br.node : Es() ? br.browser : br.unknown;
}
function L_() {
  var n;
  try {
    return _s() && typeof window < "u" && typeof (window == null ? void 0 : window.Application) < "u" ? (n = window.Application) == null ? void 0 : n.applicationId : void 0;
  } catch {
    return;
  }
}
function z_(n, t) {
  let r = So.parse(n);
  return r = Ll(Ll({}, r), t), n = So.stringify(r), n;
}
function k_() {
  return vb.getWindowMetadata() || { name: "", description: "", url: "", icons: [""] };
}
function H_() {
  if (un() === br.reactNative && typeof window < "u" && typeof (window == null ? void 0 : window.Platform) < "u") {
    const { OS: r, Version: s } = window.Platform;
    return [r, s].join("-");
  }
  const n = bb();
  if (n === null) return "unknown";
  const t = n.os ? n.os.replace(" ", "").toLowerCase() : "unknown";
  return n.type === "browser" ? [t, n.name, n.version].join("-") : [t, n.version].join("-");
}
function K_() {
  var n;
  const t = un();
  return t === br.browser ? [t, ((n = en.getLocation()) == null ? void 0 : n.host) || "unknown"].join(":") : t;
}
function V_(n, t, r) {
  const s = H_(), a = K_();
  return [[n, t].join("-"), [M_, r].join("-"), s, a].join("/");
}
function B_({ protocol: n, version: t, relayUrl: r, sdkVersion: s, auth: a, projectId: u, useOnCloseEvent: f, bundleId: y }) {
  const w = r.split("?"), g = V_(n, t, s), b = { auth: a, ua: g, projectId: u, useOnCloseEvent: f || void 0, origin: y || void 0 }, P = z_(w[1] || "", b);
  return w[0] + "?" + P;
}
function Vi(n, t) {
  return n.filter((r) => t.includes(r)).length === n.length;
}
function ep(n) {
  return Object.fromEntries(n.entries());
}
function tp(n) {
  return new Map(Object.entries(n));
}
function ys(n = re.FIVE_MINUTES, t) {
  const r = re.toMiliseconds(n || re.FIVE_MINUTES);
  let s, a, u;
  return { resolve: (f) => {
    u && s && (clearTimeout(u), s(f));
  }, reject: (f) => {
    u && a && (clearTimeout(u), a(f));
  }, done: () => new Promise((f, y) => {
    u = setTimeout(() => {
      y(new Error(t));
    }, r), s = f, a = y;
  }) };
}
function rn(n, t, r) {
  return new Promise(async (s, a) => {
    const u = setTimeout(() => a(new Error(r)), t);
    try {
      const f = await n;
      s(f);
    } catch (f) {
      a(f);
    }
    clearTimeout(u);
  });
}
function rp(n, t) {
  if (typeof t == "string" && t.startsWith(`${n}:`)) return t;
  if (n.toLowerCase() === "topic") {
    if (typeof t != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (n.toLowerCase() === "id") {
    if (typeof t != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${n}`);
}
function F_(n) {
  return rp("topic", n);
}
function G_(n) {
  return rp("id", n);
}
function ip(n) {
  const [t, r] = n.split(":"), s = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string") s.topic = r;
  else if (t === "id" && Number.isInteger(Number(r))) s.id = Number(r);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
  return s;
}
function Lr(n, t) {
  return re.fromMiliseconds(Date.now() + re.toMiliseconds(n));
}
function Pi(n) {
  return Date.now() >= re.toMiliseconds(n);
}
function Ct(n, t) {
  return `${n}${t ? `:${t}` : ""}`;
}
function Ec(n = [], t = []) {
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
async function W_({ id: n, topic: t, wcDeepLink: r }) {
  try {
    if (!r) return;
    const s = typeof r == "string" ? JSON.parse(r) : r;
    let a = s == null ? void 0 : s.href;
    if (typeof a != "string") return;
    a.endsWith("/") && (a = a.slice(0, -1));
    const u = `${a}/wc?requestId=${n}&sessionTopic=${t}`, f = un();
    f === br.browser ? u.startsWith("https://") ? window.open(u, "_blank", "noreferrer noopener") : window.open(u, "_self", "noreferrer noopener") : f === br.reactNative && typeof (window == null ? void 0 : window.Linking) < "u" && await window.Linking.openURL(u);
  } catch (s) {
    console.error(s);
  }
}
async function J_(n, t) {
  try {
    return await n.getItem(t) || (Es() ? localStorage.getItem(t) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const Q_ = "irn";
function kc(n) {
  return (n == null ? void 0 : n.relay) || { protocol: Q_ };
}
function xo(n) {
  const t = Sb[n];
  if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${n}`);
  return t;
}
var Y_ = Object.defineProperty, zl = Object.getOwnPropertySymbols, Z_ = Object.prototype.hasOwnProperty, X_ = Object.prototype.propertyIsEnumerable, kl = (n, t, r) => t in n ? Y_(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, e1 = (n, t) => {
  for (var r in t || (t = {})) Z_.call(t, r) && kl(n, r, t[r]);
  if (zl) for (var r of zl(t)) X_.call(t, r) && kl(n, r, t[r]);
  return n;
};
function t1(n, t = "-") {
  const r = {}, s = "relay" + t;
  return Object.keys(n).forEach((a) => {
    if (a.startsWith(s)) {
      const u = a.replace(s, ""), f = n[a];
      r[u] = f;
    }
  }), r;
}
function Hl(n) {
  n = n.includes("wc://") ? n.replace("wc://", "") : n, n = n.includes("wc:") ? n.replace("wc:", "") : n;
  const t = n.indexOf(":"), r = n.indexOf("?") !== -1 ? n.indexOf("?") : void 0, s = n.substring(0, t), a = n.substring(t + 1, r).split("@"), u = typeof r < "u" ? n.substring(r) : "", f = So.parse(u);
  return { protocol: s, topic: r1(a[0]), version: parseInt(a[1], 10), symKey: f.symKey, relay: t1(f) };
}
function r1(n) {
  return n.startsWith("//") ? n.substring(2) : n;
}
function i1(n, t = "-") {
  const r = "relay", s = {};
  return Object.keys(n).forEach((a) => {
    const u = r + t + a;
    n[a] && (s[u] = n[a]);
  }), s;
}
function s1(n) {
  return `${n.protocol}:${n.topic}@${n.version}?` + So.stringify(e1({ symKey: n.symKey }, i1(n.relay)));
}
function Is(n) {
  const t = [];
  return n.forEach((r) => {
    const [s, a] = r.split(":");
    t.push(`${s}:${a}`);
  }), t;
}
function n1(n) {
  const t = [];
  return Object.values(n).forEach((r) => {
    t.push(...Is(r.accounts));
  }), t;
}
function o1(n, t) {
  const r = [];
  return Object.values(n).forEach((s) => {
    Is(s.accounts).includes(t) && r.push(...s.methods);
  }), r;
}
function a1(n, t) {
  const r = [];
  return Object.values(n).forEach((s) => {
    Is(s.accounts).includes(t) && r.push(...s.events);
  }), r;
}
function c1(n, t) {
  const r = Po(n, t);
  if (r) throw new Error(r.message);
  const s = {};
  for (const [a, u] of Object.entries(n)) s[a] = { methods: u.methods, events: u.events, chains: u.accounts.map((f) => `${f.split(":")[0]}:${f.split(":")[1]}`) };
  return s;
}
function au(n) {
  return n.includes(":");
}
function Qs(n) {
  return au(n) ? n.split(":")[0] : n;
}
const u1 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, h1 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function G(n, t) {
  const { message: r, code: s } = h1[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function Et(n, t) {
  const { message: r, code: s } = u1[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function Bi(n, t) {
  return !!Array.isArray(n);
}
function bs(n) {
  return Object.getPrototypeOf(n) === Object.prototype && Object.keys(n).length;
}
function tr(n) {
  return typeof n > "u";
}
function kt(n, t) {
  return t && tr(n) ? !0 : typeof n == "string" && !!n.trim().length;
}
function cu(n, t) {
  return t && tr(n) ? !0 : typeof n == "number" && !isNaN(n);
}
function l1(n, t) {
  const { requiredNamespaces: r } = t, s = Object.keys(n.namespaces), a = Object.keys(r);
  let u = !0;
  return Vi(a, s) ? (s.forEach((f) => {
    const { accounts: y, methods: w, events: g } = n.namespaces[f], b = Is(y), P = r[f];
    (!Vi(Qf(f, P), b) || !Vi(P.methods, w) || !Vi(P.events, g)) && (u = !1);
  }), u) : !1;
}
function No(n) {
  return kt(n, !1) && n.includes(":") ? n.split(":").length === 2 : !1;
}
function f1(n) {
  if (kt(n, !1) && n.includes(":")) {
    const t = n.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && No(r);
    }
  }
  return !1;
}
function p1(n) {
  if (kt(n, !1)) try {
    return typeof new URL(n) < "u";
  } catch {
    return !1;
  }
  return !1;
}
function d1(n) {
  var t;
  return (t = n == null ? void 0 : n.proposer) == null ? void 0 : t.publicKey;
}
function g1(n) {
  return n == null ? void 0 : n.topic;
}
function y1(n, t) {
  let r = null;
  return kt(n == null ? void 0 : n.publicKey, !1) || (r = G("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function Kl(n) {
  let t = !0;
  return Bi(n) ? n.length && (t = n.every((r) => kt(r, !1))) : t = !1, t;
}
function v1(n, t, r) {
  let s = null;
  return Bi(t) && t.length ? t.forEach((a) => {
    s || No(a) || (s = Et("UNSUPPORTED_CHAINS", `${r}, chain ${a} should be a string and conform to "namespace:chainId" format`));
  }) : No(n) || (s = Et("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s;
}
function m1(n, t, r) {
  let s = null;
  return Object.entries(n).forEach(([a, u]) => {
    if (s) return;
    const f = v1(a, Qf(a, u), `${t} ${r}`);
    f && (s = f);
  }), s;
}
function w1(n, t) {
  let r = null;
  return Bi(n) ? n.forEach((s) => {
    r || f1(s) || (r = Et("UNSUPPORTED_ACCOUNTS", `${t}, account ${s} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = Et("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function b1(n, t) {
  let r = null;
  return Object.values(n).forEach((s) => {
    if (r) return;
    const a = w1(s == null ? void 0 : s.accounts, `${t} namespace`);
    a && (r = a);
  }), r;
}
function _1(n, t) {
  let r = null;
  return Kl(n == null ? void 0 : n.methods) ? Kl(n == null ? void 0 : n.events) || (r = Et("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = Et("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function sp(n, t) {
  let r = null;
  return Object.values(n).forEach((s) => {
    if (r) return;
    const a = _1(s, `${t}, namespace`);
    a && (r = a);
  }), r;
}
function E1(n, t, r) {
  let s = null;
  if (n && bs(n)) {
    const a = sp(n, t);
    a && (s = a);
    const u = m1(n, t, r);
    u && (s = u);
  } else s = G("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return s;
}
function Po(n, t) {
  let r = null;
  if (n && bs(n)) {
    const s = sp(n, t);
    s && (r = s);
    const a = b1(n, t);
    a && (r = a);
  } else r = G("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function np(n) {
  return kt(n.protocol, !0);
}
function I1(n, t) {
  let r = !1;
  return n ? n && Bi(n) && n.length && n.forEach((s) => {
    r = np(s);
  }) : r = !0, r;
}
function x1(n) {
  return typeof n == "number";
}
function lr(n) {
  return typeof n < "u" && typeof n !== null;
}
function P1(n) {
  return !(!n || typeof n != "object" || !n.code || !cu(n.code, !1) || !n.message || !kt(n.message, !1));
}
function S1(n) {
  return !(tr(n) || !kt(n.method, !1));
}
function O1(n) {
  return !(tr(n) || tr(n.result) && tr(n.error) || !cu(n.id, !1) || !kt(n.jsonrpc, !1));
}
function R1(n) {
  return !(tr(n) || !kt(n.name, !1));
}
function Vl(n, t) {
  return !(!No(t) || !n1(n).includes(t));
}
function T1(n, t, r) {
  return kt(r, !1) ? o1(n, t).includes(r) : !1;
}
function N1(n, t, r) {
  return kt(r, !1) ? a1(n, t).includes(r) : !1;
}
function Bl(n, t, r) {
  let s = null;
  const a = A1(n), u = $1(t), f = Object.keys(a), y = Object.keys(u), w = Fl(Object.keys(n)), g = Fl(Object.keys(t)), b = w.filter((P) => !g.includes(P));
  return b.length && (s = G("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${b.toString()}
      Received: ${Object.keys(t).toString()}`)), Vi(f, y) || (s = G("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${f.toString()}
      Approved: ${y.toString()}`)), Object.keys(t).forEach((P) => {
    if (!P.includes(":") || s) return;
    const O = Is(t[P].accounts);
    O.includes(P) || (s = G("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${P}
        Required: ${P}
        Approved: ${O.toString()}`));
  }), f.forEach((P) => {
    s || (Vi(a[P].methods, u[P].methods) ? Vi(a[P].events, u[P].events) || (s = G("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${P}`)) : s = G("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${P}`));
  }), s;
}
function A1(n) {
  const t = {};
  return Object.keys(n).forEach((r) => {
    var s;
    r.includes(":") ? t[r] = n[r] : (s = n[r].chains) == null || s.forEach((a) => {
      t[a] = { methods: n[r].methods, events: n[r].events };
    });
  }), t;
}
function Fl(n) {
  return [...new Set(n.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function $1(n) {
  const t = {};
  return Object.keys(n).forEach((r) => {
    if (r.includes(":")) t[r] = n[r];
    else {
      const s = Is(n[r].accounts);
      s == null || s.forEach((a) => {
        t[a] = { accounts: n[r].accounts.filter((u) => u.includes(`${a}:`)), methods: n[r].methods, events: n[r].events };
      });
    }
  }), t;
}
function C1(n, t) {
  return cu(n, !1) && n <= t.max && n >= t.min;
}
function Gl() {
  const n = un();
  return new Promise((t) => {
    switch (n) {
      case br.browser:
        t(D1());
        break;
      case br.reactNative:
        t(j1());
        break;
      case br.node:
        t(U1());
        break;
      default:
        t(!0);
    }
  });
}
function D1() {
  return Es() && (navigator == null ? void 0 : navigator.onLine);
}
async function j1() {
  if (_s() && typeof window < "u" && window != null && window.NetInfo) {
    const n = await (window == null ? void 0 : window.NetInfo.fetch());
    return n == null ? void 0 : n.isConnected;
  }
  return !0;
}
function U1() {
  return !0;
}
function q1(n) {
  switch (un()) {
    case br.browser:
      M1(n);
      break;
    case br.reactNative:
      L1(n);
      break;
  }
}
function M1(n) {
  !_s() && Es() && (window.addEventListener("online", () => n(!0)), window.addEventListener("offline", () => n(!1)));
}
function L1(n) {
  _s() && typeof window < "u" && window != null && window.NetInfo && (window == null || window.NetInfo.addEventListener((t) => n(t == null ? void 0 : t.isConnected)));
}
const Ic = {};
let mo = class {
  static get(t) {
    return Ic[t];
  }
  static set(t, r) {
    Ic[t] = r;
  }
  static delete(t) {
    delete Ic[t];
  }
};
class li extends _b {
  constructor(t) {
    super(t), this.events = new Qr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(ms(t.method, t.params || [], t.id || jf().toString()), r);
  }
  async requestStrict(t, r) {
    return new Promise(async (s, a) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (u) {
          a(u);
        }
      this.events.on(`${t.id}`, (u) => {
        Jr(u) ? a(u.error) : s(u.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (u) {
        a(u);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), Co(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
      type: t.method,
      data: t.params
    });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
const z1 = () => typeof WebSocket < "u" ? WebSocket : typeof window < "u" && typeof window.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), k1 = () => typeof WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Wl = (n) => n.split("?")[0], Jl = 10, H1 = z1();
let K1 = class {
  constructor(t) {
    if (this.url = t, this.events = new Qr.EventEmitter(), this.registering = !1, !pl(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    this.url = t;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    return new Promise((t, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (s) => {
        this.onClose(s), t();
      }, this.socket.close();
    });
  }
  async send(t) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(sn(t));
    } catch (r) {
      this.onError(t.id, r);
    }
  }
  register(t = this.url) {
    if (!pl(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((s, a) => {
        this.events.once("register_error", (u) => {
          this.resetMaxListeners(), a(u);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return a(new Error("WebSocket connection is missing or invalid"));
          s(this.socket);
        });
      });
    }
    return this.url = t, this.registering = !0, new Promise((r, s) => {
      const a = new URLSearchParams(t).get("origin"), u = Eb.isReactNative() ? { headers: { origin: a } } : { rejectUnauthorized: !Ib(t) }, f = new H1(t, [], u);
      k1() ? f.onerror = (y) => {
        const w = y;
        s(this.emitError(w.error));
      } : f.on("error", (y) => {
        s(this.emitError(y));
      }), f.onopen = () => {
        this.onOpen(f), r(f);
      };
    });
  }
  onOpen(t) {
    t.onmessage = (r) => this.onPayload(r), t.onclose = (r) => this.onClose(r), this.socket = t, this.registering = !1, this.events.emit("open");
  }
  onClose(t) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", t);
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? $o(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const s = this.parseError(r), a = s.message || s.toString(), u = Zc(t, a);
    this.events.emit("payload", u);
  }
  parseError(t, r = this.url) {
    return xb(t, Wl(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Jl && this.events.setMaxListeners(Jl);
  }
  emitError(t) {
    const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${Wl(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
};
var Ys = { exports: {} };
Ys.exports;
var Ql;
function V1() {
  return Ql || (Ql = 1, function(n, t) {
    var r = 200, s = "__lodash_hash_undefined__", a = 1, u = 2, f = 9007199254740991, y = "[object Arguments]", w = "[object Array]", g = "[object AsyncFunction]", b = "[object Boolean]", P = "[object Date]", O = "[object Error]", U = "[object Function]", $ = "[object GeneratorFunction]", V = "[object Map]", te = "[object Number]", ge = "[object Null]", ce = "[object Object]", ue = "[object Promise]", le = "[object Proxy]", fe = "[object RegExp]", D = "[object Set]", H = "[object String]", J = "[object Symbol]", ye = "[object Undefined]", ie = "[object WeakMap]", Ee = "[object ArrayBuffer]", Re = "[object DataView]", Xe = "[object Float32Array]", N = "[object Float64Array]", L = "[object Int8Array]", Me = "[object Int16Array]", Te = "[object Int32Array]", Q = "[object Uint8Array]", B = "[object Uint8ClampedArray]", K = "[object Uint16Array]", F = "[object Uint32Array]", ct = /[\\^$.*+?()[\]{}|]/g, ke = /^\[object .+?Constructor\]$/, kr = /^(?:0|[1-9]\d*)$/, be = {};
    be[Xe] = be[N] = be[L] = be[Me] = be[Te] = be[Q] = be[B] = be[K] = be[F] = !0, be[y] = be[w] = be[Ee] = be[b] = be[Re] = be[P] = be[O] = be[U] = be[V] = be[te] = be[ce] = be[fe] = be[D] = be[H] = be[ie] = !1;
    var It = typeof window == "object" && window && window.Object === Object && window, C = typeof self == "object" && self && self.Object === Object && self, A = It || C || Function("return this")(), R = t && !t.nodeType && t, h = R && !0 && n && !n.nodeType && n, E = h && h.exports === R, X = E && It.process, ae = function() {
      try {
        return X && X.binding && X.binding("util");
      } catch {
      }
    }(), me = ae && ae.isTypedArray;
    function Ne(v, I) {
      for (var z = -1, Y = v == null ? 0 : v.length, Ve = 0, pe = []; ++z < Y; ) {
        var Ye = v[z];
        I(Ye, z, v) && (pe[Ve++] = Ye);
      }
      return pe;
    }
    function $e(v, I) {
      for (var z = -1, Y = I.length, Ve = v.length; ++z < Y; )
        v[Ve + z] = I[z];
      return v;
    }
    function xe(v, I) {
      for (var z = -1, Y = v == null ? 0 : v.length; ++z < Y; )
        if (I(v[z], z, v))
          return !0;
      return !1;
    }
    function xt(v, I) {
      for (var z = -1, Y = Array(v); ++z < v; )
        Y[z] = I(z);
      return Y;
    }
    function vt(v) {
      return function(I) {
        return v(I);
      };
    }
    function st(v, I) {
      return v.has(I);
    }
    function De(v, I) {
      return v == null ? void 0 : v[I];
    }
    function We(v) {
      var I = -1, z = Array(v.size);
      return v.forEach(function(Y, Ve) {
        z[++I] = [Ve, Y];
      }), z;
    }
    function Je(v, I) {
      return function(z) {
        return v(I(z));
      };
    }
    function nt(v) {
      var I = -1, z = Array(v.size);
      return v.forEach(function(Y) {
        z[++I] = Y;
      }), z;
    }
    var Le = Array.prototype, Qe = Function.prototype, Ae = Object.prototype, He = A["__core-js_shared__"], ut = Qe.toString, Ue = Ae.hasOwnProperty, Pt = function() {
      var v = /[^.]+$/.exec(He && He.keys && He.keys.IE_PROTO || "");
      return v ? "Symbol(src)_1." + v : "";
    }(), Dt = Ae.toString, Ht = RegExp(
      "^" + ut.call(Ue).replace(ct, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Kt = E ? A.Buffer : void 0, qt = A.Symbol, Jt = A.Uint8Array, ir = Ae.propertyIsEnumerable, Hr = Le.splice, Qt = qt ? qt.toStringTag : void 0, Yr = Object.getOwnPropertySymbols, pi = Kt ? Kt.isBuffer : void 0, Ti = Je(Object.keys, Object), ht = dr(A, "DataView"), et = dr(A, "Map"), lt = dr(A, "Promise"), ft = dr(A, "Set"), ot = dr(A, "WeakMap"), tt = dr(Object, "create"), St = Xr(ht), Ot = Xr(et), pt = Xr(lt), Rt = Xr(ft), dt = Xr(ot), mt = qt ? qt.prototype : void 0, gt = mt ? mt.valueOf : void 0;
    function Ge(v) {
      var I = -1, z = v == null ? 0 : v.length;
      for (this.clear(); ++I < z; ) {
        var Y = v[I];
        this.set(Y[0], Y[1]);
      }
    }
    function Tt() {
      this.__data__ = tt ? tt(null) : {}, this.size = 0;
    }
    function Nt(v) {
      var I = this.has(v) && delete this.__data__[v];
      return this.size -= I ? 1 : 0, I;
    }
    function zo(v) {
      var I = this.__data__;
      if (tt) {
        var z = I[v];
        return z === s ? void 0 : z;
      }
      return Ue.call(I, v) ? I[v] : void 0;
    }
    function ko(v) {
      var I = this.__data__;
      return tt ? I[v] !== void 0 : Ue.call(I, v);
    }
    function Ho(v, I) {
      var z = this.__data__;
      return this.size += this.has(v) ? 0 : 1, z[v] = tt && I === void 0 ? s : I, this;
    }
    Ge.prototype.clear = Tt, Ge.prototype.delete = Nt, Ge.prototype.get = zo, Ge.prototype.has = ko, Ge.prototype.set = Ho;
    function _r(v) {
      var I = -1, z = v == null ? 0 : v.length;
      for (this.clear(); ++I < z; ) {
        var Y = v[I];
        this.set(Y[0], Y[1]);
      }
    }
    function Ko() {
      this.__data__ = [], this.size = 0;
    }
    function Vo(v) {
      var I = this.__data__, z = Ni(I, v);
      if (z < 0)
        return !1;
      var Y = I.length - 1;
      return z == Y ? I.pop() : Hr.call(I, z, 1), --this.size, !0;
    }
    function Bo(v) {
      var I = this.__data__, z = Ni(I, v);
      return z < 0 ? void 0 : I[z][1];
    }
    function Fo(v) {
      return Ni(this.__data__, v) > -1;
    }
    function Go(v, I) {
      var z = this.__data__, Y = Ni(z, v);
      return Y < 0 ? (++this.size, z.push([v, I])) : z[Y][1] = I, this;
    }
    _r.prototype.clear = Ko, _r.prototype.delete = Vo, _r.prototype.get = Bo, _r.prototype.has = Fo, _r.prototype.set = Go;
    function Zr(v) {
      var I = -1, z = v == null ? 0 : v.length;
      for (this.clear(); ++I < z; ) {
        var Y = v[I];
        this.set(Y[0], Y[1]);
      }
    }
    function Qi() {
      this.size = 0, this.__data__ = {
        hash: new Ge(),
        map: new (et || _r)(),
        string: new Ge()
      };
    }
    function Wo(v) {
      var I = di(this, v).delete(v);
      return this.size -= I ? 1 : 0, I;
    }
    function Yi(v) {
      return di(this, v).get(v);
    }
    function Jo(v) {
      return di(this, v).has(v);
    }
    function Qo(v, I) {
      var z = di(this, v), Y = z.size;
      return z.set(v, I), this.size += z.size == Y ? 0 : 1, this;
    }
    Zr.prototype.clear = Qi, Zr.prototype.delete = Wo, Zr.prototype.get = Yi, Zr.prototype.has = Jo, Zr.prototype.set = Qo;
    function Zi(v) {
      var I = -1, z = v == null ? 0 : v.length;
      for (this.__data__ = new Zr(); ++I < z; )
        this.add(v[I]);
    }
    function ln(v) {
      return this.__data__.set(v, s), this;
    }
    function fn(v) {
      return this.__data__.has(v);
    }
    Zi.prototype.add = Zi.prototype.push = ln, Zi.prototype.has = fn;
    function $r(v) {
      var I = this.__data__ = new _r(v);
      this.size = I.size;
    }
    function Yo() {
      this.__data__ = new _r(), this.size = 0;
    }
    function Zo(v) {
      var I = this.__data__, z = I.delete(v);
      return this.size = I.size, z;
    }
    function Xo(v) {
      return this.__data__.get(v);
    }
    function ea(v) {
      return this.__data__.has(v);
    }
    function pn(v, I) {
      var z = this.__data__;
      if (z instanceof _r) {
        var Y = z.__data__;
        if (!et || Y.length < r - 1)
          return Y.push([v, I]), this.size = ++z.size, this;
        z = this.__data__ = new Zr(Y);
      }
      return z.set(v, I), this.size = z.size, this;
    }
    $r.prototype.clear = Yo, $r.prototype.delete = Zo, $r.prototype.get = Xo, $r.prototype.has = ea, $r.prototype.set = pn;
    function dn(v, I) {
      var z = ts(v), Y = !z && Sn(v), Ve = !z && !Y && Ss(v), pe = !z && !Y && !Ve && Tn(v), Ye = z || Y || Ve || pe, At = Ye ? xt(v.length, String) : [], Se = At.length;
      for (var Be in v)
        Ue.call(v, Be) && !(Ye && // Safari 9 has enumerable `arguments.length` in strict mode.
        (Be == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        Ve && (Be == "offset" || Be == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        pe && (Be == "buffer" || Be == "byteLength" || Be == "byteOffset") || // Skip index properties.
        _n(Be, Se))) && At.push(Be);
      return At;
    }
    function Ni(v, I) {
      for (var z = v.length; z--; )
        if (Pn(v[z][0], I))
          return z;
      return -1;
    }
    function xs(v, I, z) {
      var Y = I(v);
      return ts(v) ? Y : $e(Y, z(v));
    }
    function Ai(v) {
      return v == null ? v === void 0 ? ye : ge : Qt && Qt in Object(v) ? wn(v) : ia(v);
    }
    function Ps(v) {
      return Ci(v) && Ai(v) == y;
    }
    function $i(v, I, z, Y, Ve) {
      return v === I ? !0 : v == null || I == null || !Ci(v) && !Ci(I) ? v !== v && I !== I : gn(v, I, z, Y, $i, Ve);
    }
    function gn(v, I, z, Y, Ve, pe) {
      var Ye = ts(v), At = ts(I), Se = Ye ? w : Kr(v), Be = At ? w : Kr(I);
      Se = Se == y ? ce : Se, Be = Be == y ? ce : Be;
      var wt = Se == ce, sr = Be == ce, $t = Se == Be;
      if ($t && Ss(v)) {
        if (!Ss(I))
          return !1;
        Ye = !0, wt = !1;
      }
      if ($t && !wt)
        return pe || (pe = new $r()), Ye || Tn(v) ? Xi(v, I, z, Y, Ve, pe) : ra(v, I, Se, z, Y, Ve, pe);
      if (!(z & a)) {
        var Ze = wt && Ue.call(v, "__wrapped__"), Yt = sr && Ue.call(I, "__wrapped__");
        if (Ze || Yt) {
          var Cr = Ze ? v.value() : v, Er = Yt ? I.value() : I;
          return pe || (pe = new $r()), Ve(Cr, Er, z, Y, pe);
        }
      }
      return $t ? (pe || (pe = new $r()), mn(v, I, z, Y, Ve, pe)) : !1;
    }
    function ta(v) {
      if (!Rn(v) || In(v))
        return !1;
      var I = rs(v) ? Ht : ke;
      return I.test(Xr(v));
    }
    function yn(v) {
      return Ci(v) && On(v.length) && !!be[Ai(v)];
    }
    function vn(v) {
      if (!xn(v))
        return Ti(v);
      var I = [];
      for (var z in Object(v))
        Ue.call(v, z) && z != "constructor" && I.push(z);
      return I;
    }
    function Xi(v, I, z, Y, Ve, pe) {
      var Ye = z & a, At = v.length, Se = I.length;
      if (At != Se && !(Ye && Se > At))
        return !1;
      var Be = pe.get(v);
      if (Be && pe.get(I))
        return Be == I;
      var wt = -1, sr = !0, $t = z & u ? new Zi() : void 0;
      for (pe.set(v, I), pe.set(I, v); ++wt < At; ) {
        var Ze = v[wt], Yt = I[wt];
        if (Y)
          var Cr = Ye ? Y(Yt, Ze, wt, I, v, pe) : Y(Ze, Yt, wt, v, I, pe);
        if (Cr !== void 0) {
          if (Cr)
            continue;
          sr = !1;
          break;
        }
        if ($t) {
          if (!xe(I, function(Er, Vr) {
            if (!st($t, Vr) && (Ze === Er || Ve(Ze, Er, z, Y, pe)))
              return $t.push(Vr);
          })) {
            sr = !1;
            break;
          }
        } else if (!(Ze === Yt || Ve(Ze, Yt, z, Y, pe))) {
          sr = !1;
          break;
        }
      }
      return pe.delete(v), pe.delete(I), sr;
    }
    function ra(v, I, z, Y, Ve, pe, Ye) {
      switch (z) {
        case Re:
          if (v.byteLength != I.byteLength || v.byteOffset != I.byteOffset)
            return !1;
          v = v.buffer, I = I.buffer;
        case Ee:
          return !(v.byteLength != I.byteLength || !pe(new Jt(v), new Jt(I)));
        case b:
        case P:
        case te:
          return Pn(+v, +I);
        case O:
          return v.name == I.name && v.message == I.message;
        case fe:
        case H:
          return v == I + "";
        case V:
          var At = We;
        case D:
          var Se = Y & a;
          if (At || (At = nt), v.size != I.size && !Se)
            return !1;
          var Be = Ye.get(v);
          if (Be)
            return Be == I;
          Y |= u, Ye.set(v, I);
          var wt = Xi(At(v), At(I), Y, Ve, pe, Ye);
          return Ye.delete(v), wt;
        case J:
          if (gt)
            return gt.call(v) == gt.call(I);
      }
      return !1;
    }
    function mn(v, I, z, Y, Ve, pe) {
      var Ye = z & a, At = es(v), Se = At.length, Be = es(I), wt = Be.length;
      if (Se != wt && !Ye)
        return !1;
      for (var sr = Se; sr--; ) {
        var $t = At[sr];
        if (!(Ye ? $t in I : Ue.call(I, $t)))
          return !1;
      }
      var Ze = pe.get(v);
      if (Ze && pe.get(I))
        return Ze == I;
      var Yt = !0;
      pe.set(v, I), pe.set(I, v);
      for (var Cr = Ye; ++sr < Se; ) {
        $t = At[sr];
        var Er = v[$t], Vr = I[$t];
        if (Y)
          var Os = Ye ? Y(Vr, Er, $t, I, v, pe) : Y(Er, Vr, $t, v, I, pe);
        if (!(Os === void 0 ? Er === Vr || Ve(Er, Vr, z, Y, pe) : Os)) {
          Yt = !1;
          break;
        }
        Cr || (Cr = $t == "constructor");
      }
      if (Yt && !Cr) {
        var Di = v.constructor, Mt = I.constructor;
        Di != Mt && "constructor" in v && "constructor" in I && !(typeof Di == "function" && Di instanceof Di && typeof Mt == "function" && Mt instanceof Mt) && (Yt = !1);
      }
      return pe.delete(v), pe.delete(I), Yt;
    }
    function es(v) {
      return xs(v, oa, bn);
    }
    function di(v, I) {
      var z = v.__data__;
      return En(I) ? z[typeof I == "string" ? "string" : "hash"] : z.map;
    }
    function dr(v, I) {
      var z = De(v, I);
      return ta(z) ? z : void 0;
    }
    function wn(v) {
      var I = Ue.call(v, Qt), z = v[Qt];
      try {
        v[Qt] = void 0;
        var Y = !0;
      } catch {
      }
      var Ve = Dt.call(v);
      return Y && (I ? v[Qt] = z : delete v[Qt]), Ve;
    }
    var bn = Yr ? function(v) {
      return v == null ? [] : (v = Object(v), Ne(Yr(v), function(I) {
        return ir.call(v, I);
      }));
    } : Ke, Kr = Ai;
    (ht && Kr(new ht(new ArrayBuffer(1))) != Re || et && Kr(new et()) != V || lt && Kr(lt.resolve()) != ue || ft && Kr(new ft()) != D || ot && Kr(new ot()) != ie) && (Kr = function(v) {
      var I = Ai(v), z = I == ce ? v.constructor : void 0, Y = z ? Xr(z) : "";
      if (Y)
        switch (Y) {
          case St:
            return Re;
          case Ot:
            return V;
          case pt:
            return ue;
          case Rt:
            return D;
          case dt:
            return ie;
        }
      return I;
    });
    function _n(v, I) {
      return I = I ?? f, !!I && (typeof v == "number" || kr.test(v)) && v > -1 && v % 1 == 0 && v < I;
    }
    function En(v) {
      var I = typeof v;
      return I == "string" || I == "number" || I == "symbol" || I == "boolean" ? v !== "__proto__" : v === null;
    }
    function In(v) {
      return !!Pt && Pt in v;
    }
    function xn(v) {
      var I = v && v.constructor, z = typeof I == "function" && I.prototype || Ae;
      return v === z;
    }
    function ia(v) {
      return Dt.call(v);
    }
    function Xr(v) {
      if (v != null) {
        try {
          return ut.call(v);
        } catch {
        }
        try {
          return v + "";
        } catch {
        }
      }
      return "";
    }
    function Pn(v, I) {
      return v === I || v !== v && I !== I;
    }
    var Sn = Ps(/* @__PURE__ */ function() {
      return arguments;
    }()) ? Ps : function(v) {
      return Ci(v) && Ue.call(v, "callee") && !ir.call(v, "callee");
    }, ts = Array.isArray;
    function sa(v) {
      return v != null && On(v.length) && !rs(v);
    }
    var Ss = pi || ze;
    function na(v, I) {
      return $i(v, I);
    }
    function rs(v) {
      if (!Rn(v))
        return !1;
      var I = Ai(v);
      return I == U || I == $ || I == g || I == le;
    }
    function On(v) {
      return typeof v == "number" && v > -1 && v % 1 == 0 && v <= f;
    }
    function Rn(v) {
      var I = typeof v;
      return v != null && (I == "object" || I == "function");
    }
    function Ci(v) {
      return v != null && typeof v == "object";
    }
    var Tn = me ? vt(me) : yn;
    function oa(v) {
      return sa(v) ? dn(v) : vn(v);
    }
    function Ke() {
      return [];
    }
    function ze() {
      return !1;
    }
    n.exports = na;
  }(Ys, Ys.exports)), Ys.exports;
}
var B1 = V1();
const F1 = /* @__PURE__ */ Wc(B1);
var G1 = wb();
const W1 = /* @__PURE__ */ Wc(G1);
var J1 = {};
function Q1(n, t) {
  if (n.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), s = 0; s < r.length; s++) r[s] = 255;
  for (var a = 0; a < n.length; a++) {
    var u = n.charAt(a), f = u.charCodeAt(0);
    if (r[f] !== 255) throw new TypeError(u + " is ambiguous");
    r[f] = a;
  }
  var y = n.length, w = n.charAt(0), g = Math.log(y) / Math.log(256), b = Math.log(256) / Math.log(y);
  function P($) {
    if ($ instanceof Uint8Array || (ArrayBuffer.isView($) ? $ = new Uint8Array($.buffer, $.byteOffset, $.byteLength) : Array.isArray($) && ($ = Uint8Array.from($))), !($ instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if ($.length === 0) return "";
    for (var V = 0, te = 0, ge = 0, ce = $.length; ge !== ce && $[ge] === 0; ) ge++, V++;
    for (var ue = (ce - ge) * b + 1 >>> 0, le = new Uint8Array(ue); ge !== ce; ) {
      for (var fe = $[ge], D = 0, H = ue - 1; (fe !== 0 || D < te) && H !== -1; H--, D++) fe += 256 * le[H] >>> 0, le[H] = fe % y >>> 0, fe = fe / y >>> 0;
      if (fe !== 0) throw new Error("Non-zero carry");
      te = D, ge++;
    }
    for (var J = ue - te; J !== ue && le[J] === 0; ) J++;
    for (var ye = w.repeat(V); J < ue; ++J) ye += n.charAt(le[J]);
    return ye;
  }
  function O($) {
    if (typeof $ != "string") throw new TypeError("Expected String");
    if ($.length === 0) return new Uint8Array();
    var V = 0;
    if ($[V] !== " ") {
      for (var te = 0, ge = 0; $[V] === w; ) te++, V++;
      for (var ce = ($.length - V) * g + 1 >>> 0, ue = new Uint8Array(ce); $[V]; ) {
        var le = r[$.charCodeAt(V)];
        if (le === 255) return;
        for (var fe = 0, D = ce - 1; (le !== 0 || fe < ge) && D !== -1; D--, fe++) le += y * ue[D] >>> 0, ue[D] = le % 256 >>> 0, le = le / 256 >>> 0;
        if (le !== 0) throw new Error("Non-zero carry");
        ge = fe, V++;
      }
      if ($[V] !== " ") {
        for (var H = ce - ge; H !== ce && ue[H] === 0; ) H++;
        for (var J = new Uint8Array(te + (ce - H)), ye = te; H !== ce; ) J[ye++] = ue[H++];
        return J;
      }
    }
  }
  function U($) {
    var V = O($);
    if (V) return V;
    throw new Error(`Non-${t} character`);
  }
  return { encode: P, decodeUnsafe: O, decode: U };
}
var Y1 = Q1, Z1 = Y1;
const op = (n) => {
  if (n instanceof Uint8Array && n.constructor.name === "Uint8Array") return n;
  if (n instanceof ArrayBuffer) return new Uint8Array(n);
  if (ArrayBuffer.isView(n)) return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
  throw new Error("Unknown type, must be binary type");
}, X1 = (n) => new TextEncoder().encode(n), eE = (n) => new TextDecoder().decode(n);
class tE {
  constructor(t, r, s) {
    this.name = t, this.prefix = r, this.baseEncode = s;
  }
  encode(t) {
    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class rE {
  constructor(t, r, s) {
    if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = s;
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(t.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(t) {
    return ap(this, t);
  }
}
class iE {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return ap(this, t);
  }
  decode(t) {
    const r = t[0], s = this.decoders[r];
    if (s) return s.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const ap = (n, t) => new iE({ ...n.decoders || { [n.prefix]: n }, ...t.decoders || { [t.prefix]: t } });
class sE {
  constructor(t, r, s, a) {
    this.name = t, this.prefix = r, this.baseEncode = s, this.baseDecode = a, this.encoder = new tE(t, r, s), this.decoder = new rE(t, r, a);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Mo = ({ name: n, prefix: t, encode: r, decode: s }) => new sE(n, t, r, s), hn = ({ prefix: n, name: t, alphabet: r }) => {
  const { encode: s, decode: a } = Z1(r, t);
  return Mo({ prefix: n, name: t, encode: s, decode: (u) => op(a(u)) });
}, nE = (n, t, r, s) => {
  const a = {};
  for (let b = 0; b < t.length; ++b) a[t[b]] = b;
  let u = n.length;
  for (; n[u - 1] === "="; ) --u;
  const f = new Uint8Array(u * r / 8 | 0);
  let y = 0, w = 0, g = 0;
  for (let b = 0; b < u; ++b) {
    const P = a[n[b]];
    if (P === void 0) throw new SyntaxError(`Non-${s} character`);
    w = w << r | P, y += r, y >= 8 && (y -= 8, f[g++] = 255 & w >> y);
  }
  if (y >= r || 255 & w << 8 - y) throw new SyntaxError("Unexpected end of data");
  return f;
}, oE = (n, t, r) => {
  const s = t[t.length - 1] === "=", a = (1 << r) - 1;
  let u = "", f = 0, y = 0;
  for (let w = 0; w < n.length; ++w) for (y = y << 8 | n[w], f += 8; f > r; ) f -= r, u += t[a & y >> f];
  if (f && (u += t[a & y << r - f]), s) for (; u.length * r & 7; ) u += "=";
  return u;
}, Bt = ({ name: n, prefix: t, bitsPerChar: r, alphabet: s }) => Mo({ prefix: t, name: n, encode(a) {
  return oE(a, s, r);
}, decode(a) {
  return nE(a, s, r, n);
} }), aE = Mo({ prefix: "\0", name: "identity", encode: (n) => eE(n), decode: (n) => X1(n) });
var cE = Object.freeze({ __proto__: null, identity: aE });
const uE = Bt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var hE = Object.freeze({ __proto__: null, base2: uE });
const lE = Bt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var fE = Object.freeze({ __proto__: null, base8: lE });
const pE = hn({ prefix: "9", name: "base10", alphabet: "0123456789" });
var dE = Object.freeze({ __proto__: null, base10: pE });
const gE = Bt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), yE = Bt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var vE = Object.freeze({ __proto__: null, base16: gE, base16upper: yE });
const mE = Bt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), wE = Bt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), bE = Bt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), _E = Bt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), EE = Bt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), IE = Bt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), xE = Bt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), PE = Bt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), SE = Bt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var OE = Object.freeze({ __proto__: null, base32: mE, base32upper: wE, base32pad: bE, base32padupper: _E, base32hex: EE, base32hexupper: IE, base32hexpad: xE, base32hexpadupper: PE, base32z: SE });
const RE = hn({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), TE = hn({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var NE = Object.freeze({ __proto__: null, base36: RE, base36upper: TE });
const AE = hn({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), $E = hn({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var CE = Object.freeze({ __proto__: null, base58btc: AE, base58flickr: $E });
const DE = Bt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), jE = Bt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), UE = Bt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), qE = Bt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var ME = Object.freeze({ __proto__: null, base64: DE, base64pad: jE, base64url: UE, base64urlpad: qE });
const cp = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), LE = cp.reduce((n, t, r) => (n[r] = t, n), []), zE = cp.reduce((n, t, r) => (n[t.codePointAt(0)] = r, n), []);
function kE(n) {
  return n.reduce((t, r) => (t += LE[r], t), "");
}
function HE(n) {
  const t = [];
  for (const r of n) {
    const s = zE[r.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    t.push(s);
  }
  return new Uint8Array(t);
}
const KE = Mo({ prefix: "🚀", name: "base256emoji", encode: kE, decode: HE });
var VE = Object.freeze({ __proto__: null, base256emoji: KE }), BE = up, Yl = 128, FE = 127, GE = ~FE, WE = Math.pow(2, 31);
function up(n, t, r) {
  t = t || [], r = r || 0;
  for (var s = r; n >= WE; ) t[r++] = n & 255 | Yl, n /= 128;
  for (; n & GE; ) t[r++] = n & 255 | Yl, n >>>= 7;
  return t[r] = n | 0, up.bytes = r - s + 1, t;
}
var JE = Hc, QE = 128, Zl = 127;
function Hc(n, s) {
  var r = 0, s = s || 0, a = 0, u = s, f, y = n.length;
  do {
    if (u >= y) throw Hc.bytes = 0, new RangeError("Could not decode varint");
    f = n[u++], r += a < 28 ? (f & Zl) << a : (f & Zl) * Math.pow(2, a), a += 7;
  } while (f >= QE);
  return Hc.bytes = u - s, r;
}
var YE = Math.pow(2, 7), ZE = Math.pow(2, 14), XE = Math.pow(2, 21), eI = Math.pow(2, 28), tI = Math.pow(2, 35), rI = Math.pow(2, 42), iI = Math.pow(2, 49), sI = Math.pow(2, 56), nI = Math.pow(2, 63), oI = function(n) {
  return n < YE ? 1 : n < ZE ? 2 : n < XE ? 3 : n < eI ? 4 : n < tI ? 5 : n < rI ? 6 : n < iI ? 7 : n < sI ? 8 : n < nI ? 9 : 10;
}, aI = { encode: BE, decode: JE, encodingLength: oI }, hp = aI;
const Xl = (n, t, r = 0) => (hp.encode(n, t, r), t), ef = (n) => hp.encodingLength(n), Kc = (n, t) => {
  const r = t.byteLength, s = ef(n), a = s + ef(r), u = new Uint8Array(a + r);
  return Xl(n, u, 0), Xl(r, u, s), u.set(t, a), new cI(n, r, t, u);
};
class cI {
  constructor(t, r, s, a) {
    this.code = t, this.size = r, this.digest = s, this.bytes = a;
  }
}
const lp = ({ name: n, code: t, encode: r }) => new uI(n, t, r);
class uI {
  constructor(t, r, s) {
    this.name = t, this.code = r, this.encode = s;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? Kc(this.code, r) : r.then((s) => Kc(this.code, s));
    } else throw Error("Unknown type, must be binary type");
  }
}
const fp = (n) => async (t) => new Uint8Array(await crypto.subtle.digest(n, t)), hI = lp({ name: "sha2-256", code: 18, encode: fp("SHA-256") }), lI = lp({ name: "sha2-512", code: 19, encode: fp("SHA-512") });
var fI = Object.freeze({ __proto__: null, sha256: hI, sha512: lI });
const pp = 0, pI = "identity", dp = op, dI = (n) => Kc(pp, dp(n)), gI = { code: pp, name: pI, encode: dp, digest: dI };
var yI = Object.freeze({ __proto__: null, identity: gI });
new TextEncoder(), new TextDecoder();
const tf = { ...cE, ...hE, ...fE, ...dE, ...vE, ...OE, ...NE, ...CE, ...ME, ...VE };
({ ...fI, ...yI });
function gp(n) {
  return globalThis.Buffer != null ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n;
}
function vI(n = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? gp(globalThis.Buffer.allocUnsafe(n)) : new Uint8Array(n);
}
function yp(n, t, r, s) {
  return { name: n, prefix: t, encoder: { name: n, prefix: t, encode: r }, decoder: { decode: s } };
}
const rf = yp("utf8", "u", (n) => "u" + new TextDecoder("utf8").decode(n), (n) => new TextEncoder().encode(n.substring(1))), xc = yp("ascii", "a", (n) => {
  let t = "a";
  for (let r = 0; r < n.length; r++) t += String.fromCharCode(n[r]);
  return t;
}, (n) => {
  n = n.substring(1);
  const t = vI(n.length);
  for (let r = 0; r < n.length; r++) t[r] = n.charCodeAt(r);
  return t;
}), mI = { utf8: rf, "utf-8": rf, hex: tf.base16, latin1: xc, ascii: xc, binary: xc, ...tf };
function wI(n, t = "utf8") {
  const r = mI[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? gp(globalThis.Buffer.from(n, "utf-8")) : r.decoder.decode(`${r.prefix}${n}`);
}
const vp = "wc", bI = 2, uu = "core", Si = `${vp}@2:${uu}:`, _I = { name: uu, logger: "error" }, EI = { database: ":memory:" }, II = "crypto", sf = "client_ed25519_seed", xI = re.ONE_DAY, PI = "keychain", SI = "0.3", OI = "messages", RI = "0.3", TI = re.SIX_HOURS, NI = "publisher", mp = "irn", AI = "error", wp = "wss://relay.walletconnect.com", nf = "wss://relay.walletconnect.org", $I = "relayer", Wt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, CI = "_subscription", ui = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, DI = re.ONE_SECOND, jI = "2.11.0", UI = 1e4, qI = "0.3", MI = "WALLETCONNECT_CLIENT_ID", Mr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, LI = "subscription", zI = "0.3", kI = re.FIVE_SECONDS * 1e3, HI = "pairing", KI = "0.3", Bs = { wc_pairingDelete: { req: { ttl: re.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: re.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: re.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: re.ONE_DAY, prompt: !1, tag: 0 } } }, Zs = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Wr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, VI = "history", BI = "0.3", FI = "expirer", Nr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, GI = "0.3", Pc = "verify-api", vs = "https://verify.walletconnect.com", Vc = "https://verify.walletconnect.org", WI = [vs, Vc], JI = "echo", QI = "https://echo.walletconnect.com";
class YI {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = PI, this.version = SI, this.initialized = !1, this.storagePrefix = Si, this.init = async () => {
      if (!this.initialized) {
        const s = await this.getKeyChain();
        typeof s < "u" && (this.keychain = s), this.initialized = !0;
      }
    }, this.has = (s) => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, a) => {
      this.isInitialized(), this.keychain.set(s, a), await this.persist();
    }, this.get = (s) => {
      this.isInitialized();
      const a = this.keychain.get(s);
      if (typeof a > "u") {
        const { message: u } = G("NO_MATCHING_KEY", `${this.name}: ${s}`);
        throw new Error(u);
      }
      return a;
    }, this.del = async (s) => {
      this.isInitialized(), this.keychain.delete(s), await this.persist();
    }, this.core = t, this.logger = pr(r, this.name);
  }
  get context() {
    return fr(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, ep(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? tp(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class ZI {
  constructor(t, r, s) {
    this.core = t, this.logger = r, this.name = II, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (a) => (this.isInitialized(), this.keychain.has(a)), this.getClientId = async () => {
      this.isInitialized();
      const a = await this.getClientSeed(), u = $l(a);
      return Ff(u.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const a = S_();
      return this.setPrivateKey(a.publicKey, a.privateKey);
    }, this.signJWT = async (a) => {
      this.isInitialized();
      const u = await this.getClientSeed(), f = $l(u), y = zc();
      return await E_(y, a, xI, f);
    }, this.generateSharedKey = (a, u, f) => {
      this.isInitialized();
      const y = this.getPrivateKey(a), w = O_(y, u);
      return this.setSymKey(w, f);
    }, this.setSymKey = async (a, u) => {
      this.isInitialized();
      const f = u || R_(a);
      return await this.keychain.set(f, a), f;
    }, this.deleteKeyPair = async (a) => {
      this.isInitialized(), await this.keychain.del(a);
    }, this.deleteSymKey = async (a) => {
      this.isInitialized(), await this.keychain.del(a);
    }, this.encode = async (a, u, f) => {
      this.isInitialized();
      const y = Xf(f), w = sn(u);
      if (Ul(y)) {
        const O = y.senderPublicKey, U = y.receiverPublicKey;
        a = await this.generateSharedKey(O, U);
      }
      const g = this.getSymKey(a), { type: b, senderPublicKey: P } = y;
      return N_({ type: b, symKey: g, message: w, senderPublicKey: P });
    }, this.decode = async (a, u, f) => {
      this.isInitialized();
      const y = C_(u, f);
      if (Ul(y)) {
        const w = y.receiverPublicKey, g = y.senderPublicKey;
        a = await this.generateSharedKey(w, g);
      }
      try {
        const w = this.getSymKey(a), g = A_({ symKey: w, encoded: u });
        return $o(g);
      } catch (w) {
        this.logger.error(`Failed to decode message from topic: '${a}', clientId: '${await this.getClientId()}'`), this.logger.error(w);
      }
    }, this.getPayloadType = (a) => {
      const u = To(a);
      return cn(u.type);
    }, this.getPayloadSenderPublicKey = (a) => {
      const u = To(a);
      return u.senderPublicKey ? Ar(u.senderPublicKey, rr) : void 0;
    }, this.core = t, this.logger = pr(r, this.name), this.keychain = s || new YI(this.core, this.logger);
  }
  get context() {
    return fr(this.logger);
  }
  async setPrivateKey(t, r) {
    return await this.keychain.set(t, r), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = "";
    try {
      t = this.keychain.get(sf);
    } catch {
      t = zc(), await this.keychain.set(sf, t);
    }
    return wI(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class XI extends Q0 {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = OI, this.version = RI, this.initialized = !1, this.storagePrefix = Si, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s = await this.getRelayerMessages();
          typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (s, a) => {
      this.isInitialized();
      const u = ws(a);
      let f = this.messages.get(s);
      return typeof f > "u" && (f = {}), typeof f[u] < "u" || (f[u] = a, this.messages.set(s, f), await this.persist()), u;
    }, this.get = (s) => {
      this.isInitialized();
      let a = this.messages.get(s);
      return typeof a > "u" && (a = {}), a;
    }, this.has = (s, a) => {
      this.isInitialized();
      const u = this.get(s), f = ws(a);
      return typeof u[f] < "u";
    }, this.del = async (s) => {
      this.isInitialized(), this.messages.delete(s), await this.persist();
    }, this.logger = pr(t, this.name), this.core = r;
  }
  get context() {
    return fr(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, ep(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? tp(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class ex extends Y0 {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new Qr.EventEmitter(), this.name = NI, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = re.toMiliseconds(re.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (s, a, u) => {
      var f;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: a, opts: u } });
      try {
        const y = (u == null ? void 0 : u.ttl) || TI, w = kc(u), g = (u == null ? void 0 : u.prompt) || !1, b = (u == null ? void 0 : u.tag) || 0, P = (u == null ? void 0 : u.id) || jf().toString(), O = { topic: s, message: a, opts: { ttl: y, relay: w, prompt: g, tag: b, id: P } }, U = setTimeout(() => this.queue.set(P, O), this.publishTimeout);
        try {
          await await rn(this.rpcPublish(s, a, y, w, g, b, P), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(P), this.relayer.events.emit(Wt.publish, O);
        } catch ($) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (f = u == null ? void 0 : u.internal) != null && f.throwOnFailedPublish) throw this.removeRequestFromQueue(P), $;
          return;
        } finally {
          clearTimeout(U);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: a, opts: u } });
      } catch (y) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(y), y;
      }
    }, this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.relayer = t, this.logger = pr(r, this.name), this.registerEventListeners();
  }
  get context() {
    return fr(this.logger);
  }
  rpcPublish(t, r, s, a, u, f, y) {
    var w, g, b, P;
    const O = { method: xo(a.protocol).publish, params: { topic: t, message: r, ttl: s, prompt: u, tag: f }, id: y };
    return tr((w = O.params) == null ? void 0 : w.prompt) && ((g = O.params) == null || delete g.prompt), tr((b = O.params) == null ? void 0 : b.tag) && ((P = O.params) == null || delete P.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: O }), this.relayer.request(O);
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: s, opts: a } = t;
      await this.publish(r, s, a);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(on.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Wt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Wt.message_ack, (t) => {
      this.removeRequestFromQueue(t.id.toString());
    });
  }
}
class tx {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (t, r) => {
      const s = this.get(t);
      this.exists(t, r) || this.map.set(t, [...s, r]);
    }, this.get = (t) => this.map.get(t) || [], this.exists = (t, r) => this.get(t).includes(r), this.delete = (t, r) => {
      if (typeof r > "u") {
        this.map.delete(t);
        return;
      }
      if (!this.map.has(t)) return;
      const s = this.get(t);
      if (!this.exists(t, r)) return;
      const a = s.filter((u) => u !== r);
      if (!a.length) {
        this.map.delete(t);
        return;
      }
      this.map.set(t, a);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var rx = Object.defineProperty, ix = Object.defineProperties, sx = Object.getOwnPropertyDescriptors, of = Object.getOwnPropertySymbols, nx = Object.prototype.hasOwnProperty, ox = Object.prototype.propertyIsEnumerable, af = (n, t, r) => t in n ? rx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, Fs = (n, t) => {
  for (var r in t || (t = {})) nx.call(t, r) && af(n, r, t[r]);
  if (of) for (var r of of(t)) ox.call(t, r) && af(n, r, t[r]);
  return n;
}, Sc = (n, t) => ix(n, sx(t));
class ax extends e_ {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new tx(), this.events = new Qr.EventEmitter(), this.name = LI, this.version = zI, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Si, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (s, a) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: a } });
      try {
        const u = kc(a), f = { topic: s, relay: u };
        this.pending.set(s, f);
        const y = await this.rpcSubscribe(s, u);
        return this.onSubscribe(y, f), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: a } }), y;
      } catch (u) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(u), u;
      }
    }, this.unsubscribe = async (s, a) => {
      await this.restartToComplete(), this.isInitialized(), typeof (a == null ? void 0 : a.id) < "u" ? await this.unsubscribeById(s, a.id, a) : await this.unsubscribeByTopic(s, a);
    }, this.isSubscribed = async (s) => this.topics.includes(s) ? !0 : await new Promise((a, u) => {
      const f = new re.Watch();
      f.start(this.pendingSubscriptionWatchLabel);
      const y = setInterval(() => {
        !this.pending.has(s) && this.topics.includes(s) && (clearInterval(y), f.stop(this.pendingSubscriptionWatchLabel), a(!0)), f.elapsed(this.pendingSubscriptionWatchLabel) >= kI && (clearInterval(y), f.stop(this.pendingSubscriptionWatchLabel), u(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = t, this.logger = pr(r, this.name), this.clientId = "";
  }
  get context() {
    return fr(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(t, r) {
    let s = !1;
    try {
      s = this.getSubscription(t).topic === r;
    } catch {
    }
    return s;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(t, r) {
    const s = this.topicMap.get(t);
    await Promise.all(s.map(async (a) => await this.unsubscribeById(t, a, r)));
  }
  async unsubscribeById(t, r, s) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: s } });
    try {
      const a = kc(s);
      await this.rpcUnsubscribe(t, r, a);
      const u = Et("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, u), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: s } });
    } catch (a) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(a), a;
    }
  }
  async rpcSubscribe(t, r) {
    const s = { method: xo(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await rn(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Wt.connection_stalled);
    }
    return ws(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length) return;
    const r = t[0].relay, s = { method: xo(r.protocol).batchSubscribe, params: { topics: t.map((a) => a.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await rn(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Wt.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, s) {
    const a = { method: xo(s.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: a }), this.relayer.request(a);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Sc(Fs({}, r), { id: t })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length && t.forEach((r) => {
      this.setSubscription(r.id, Fs({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(t, r, s) {
    this.events.removeAllListeners(r), this.hasSubscription(r, t) && this.deleteSubscription(r, s), await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, r) {
    this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: t, subscription: r }), this.addSubscription(t, r));
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, Fs({}, r)), this.topicMap.set(r.topic, t), this.events.emit(Mr.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: t, reason: r });
    const s = this.getSubscription(t);
    this.subscriptions.delete(t), this.topicMap.delete(s.topic, t), this.events.emit(Mr.deleted, Sc(Fs({}, s), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Mr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(Mr.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > "u" || !t.length) return;
      if (this.subscriptions.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length) return;
    const r = await this.rpcBatchSubscribe(t);
    Bi(r) && this.onBatchSubscribe(r.map((s, a) => Sc(Fs({}, t[a]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }), await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(on.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Wt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Wt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Mr.created, async (t) => {
      const r = Mr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    }), this.events.on(Mr.deleted, async (t) => {
      const r = Mr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((t) => {
      const r = setInterval(() => {
        this.restartInProgress || (clearInterval(r), t());
      }, this.pollingInterval);
    });
  }
}
var cx = Object.defineProperty, cf = Object.getOwnPropertySymbols, ux = Object.prototype.hasOwnProperty, hx = Object.prototype.propertyIsEnumerable, uf = (n, t, r) => t in n ? cx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, lx = (n, t) => {
  for (var r in t) ux.call(t, r) && uf(n, r, t[r]);
  if (cf) for (var r of cf(t)) hx.call(t, r) && uf(n, r, t[r]);
  return n;
};
class fx extends Z0 {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new Qr.EventEmitter(), this.name = $I, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (s) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(Wt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Wt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(ui.payload, this.onPayloadHandler), this.provider.on(ui.connect, this.onConnectHandler), this.provider.on(ui.disconnect, this.onDisconnectHandler), this.provider.on(ui.error, this.onProviderErrorHandler);
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? pr(t.logger, this.name) : Uo(qo({ level: t.logger || AI })), this.messages = new XI(this.logger, t.core), this.subscriber = new ax(this, this.logger), this.publisher = new ex(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || wp, this.projectId = t.projectId, this.bundleId = L_(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${nf}...`), await this.restartTransport(nf);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, UI);
  }
  get context() {
    return fr(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(t, r, s) {
    this.isInitialized(), await this.publisher.publish(t, r, s), await this.recordMessageEvent({ topic: t, message: r, publishedAt: Date.now() });
  }
  async subscribe(t, r) {
    var s;
    this.isInitialized();
    let a = ((s = this.subscriber.topicMap.get(t)) == null ? void 0 : s[0]) || "";
    if (a) return a;
    let u;
    const f = (y) => {
      y.topic === t && (this.subscriber.off(Mr.created, f), u());
    };
    return await Promise.all([new Promise((y) => {
      u = y, this.subscriber.on(Mr.created, f);
    }), new Promise(async (y) => {
      a = await this.subscriber.subscribe(t, r), y();
    })]), a;
  }
  async unsubscribe(t, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, r);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await rn(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(t) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      t && t !== this.relayUrl && (this.relayUrl = t, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized) return r();
          this.subscriber.once(Mr.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, s) => {
          try {
            await rn(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (a) {
            s(a);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const s = r;
        if (!this.isConnectionStalled(s.message)) throw r;
        this.provider.events.emit(ui.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(t) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Gl()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new li(new K1(B_({ sdkVersion: jI, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: s } = t;
    await this.messages.set(r, s);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: s } = t;
    if (!s || s.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!await this.subscriber.isSubscribed(r)) return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const a = this.messages.has(r, s);
    return a && this.logger.debug(`Ignoring duplicate message: ${s}`), a;
  }
  async onProviderPayload(t) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), Xc(t)) {
      if (!t.method.endsWith(CI)) return;
      const r = t.params, { topic: s, message: a, publishedAt: u } = r.data, f = { topic: s, message: a, publishedAt: u };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(lx({ type: "event", event: r.id }, f)), this.events.emit(r.id, f), await this.acknowledgePayload(t), await this.onMessageEvent(f);
    } else Co(t) && this.events.emit(Wt.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Wt.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Do(t.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(ui.payload, this.onPayloadHandler), this.provider.off(ui.connect, this.onConnectHandler), this.provider.off(ui.disconnect, this.onDisconnectHandler), this.provider.off(ui.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Wt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let t = await Gl();
    q1(async (r) => {
      this.initialized && t !== r && (t = r, r ? await this.restartTransport().catch((s) => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Wt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((t) => this.logger.error(t));
    }, re.toMiliseconds(DI)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress) return await new Promise((t) => {
        const r = setInterval(() => {
          this.connected && (clearInterval(r), t());
        }, this.connectionStatusPollingInterval);
      });
      await this.restartTransport();
    }
  }
}
var px = Object.defineProperty, hf = Object.getOwnPropertySymbols, dx = Object.prototype.hasOwnProperty, gx = Object.prototype.propertyIsEnumerable, lf = (n, t, r) => t in n ? px(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, ff = (n, t) => {
  for (var r in t || (t = {})) dx.call(t, r) && lf(n, r, t[r]);
  if (hf) for (var r of hf(t)) gx.call(t, r) && lf(n, r, t[r]);
  return n;
};
class Lo extends X0 {
  constructor(t, r, s, a = Si, u = void 0) {
    super(t, r, s, a), this.core = t, this.logger = r, this.name = s, this.map = /* @__PURE__ */ new Map(), this.version = qI, this.cached = [], this.initialized = !1, this.storagePrefix = Si, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((f) => {
        this.getKey && f !== null && !tr(f) ? this.map.set(this.getKey(f), f) : d1(f) ? this.map.set(f.id, f) : g1(f) && this.map.set(f.topic, f);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (f, y) => {
      this.isInitialized(), this.map.has(f) ? await this.update(f, y) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: f, value: y }), this.map.set(f, y), await this.persist());
    }, this.get = (f) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: f }), this.getData(f)), this.getAll = (f) => (this.isInitialized(), f ? this.values.filter((y) => Object.keys(f).every((w) => F1(y[w], f[w]))) : this.values), this.update = async (f, y) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: f, update: y });
      const w = ff(ff({}, this.getData(f)), y);
      this.map.set(f, w), await this.persist();
    }, this.delete = async (f, y) => {
      this.isInitialized(), this.map.has(f) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: f, reason: y }), this.map.delete(f), await this.persist());
    }, this.logger = pr(r, this.name), this.storagePrefix = a, this.getKey = u;
  }
  get context() {
    return fr(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(s), new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > "u" || !t.length) return;
      if (this.map.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class yx {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = HI, this.version = KI, this.events = new Yc(), this.initialized = !1, this.storagePrefix = Si, this.ignoredPayloadTypes = [Wi], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s])];
    }, this.create = async () => {
      this.isInitialized();
      const s = zc(), a = await this.core.crypto.setSymKey(s), u = Lr(re.FIVE_MINUTES), f = { protocol: mp }, y = { topic: a, expiry: u, relay: f, active: !1 }, w = s1({ protocol: this.core.protocol, version: this.core.version, topic: a, symKey: s, relay: f });
      return await this.pairings.set(a, y), await this.core.relayer.subscribe(a), this.core.expirer.set(a, u), { topic: a, uri: w };
    }, this.pair = async (s) => {
      this.isInitialized(), this.isValidPair(s);
      const { topic: a, symKey: u, relay: f } = Hl(s.uri);
      let y;
      if (this.pairings.keys.includes(a) && (y = this.pairings.get(a), y.active)) throw new Error(`Pairing already exists: ${a}. Please try again with a new connection URI.`);
      const w = Lr(re.FIVE_MINUTES), g = { topic: a, relay: f, expiry: w, active: !1 };
      return await this.pairings.set(a, g), this.core.expirer.set(a, w), s.activatePairing && await this.activate({ topic: a }), this.events.emit(Zs.create, g), this.core.crypto.keychain.has(a) || (await this.core.crypto.setSymKey(u, a), await this.core.relayer.subscribe(a, { relay: f })), g;
    }, this.activate = async ({ topic: s }) => {
      this.isInitialized();
      const a = Lr(re.THIRTY_DAYS);
      await this.pairings.update(s, { active: !0, expiry: a }), this.core.expirer.set(s, a);
    }, this.ping = async (s) => {
      this.isInitialized(), await this.isValidPing(s);
      const { topic: a } = s;
      if (this.pairings.keys.includes(a)) {
        const u = await this.sendRequest(a, "wc_pairingPing", {}), { done: f, resolve: y, reject: w } = ys();
        this.events.once(Ct("pairing_ping", u), ({ error: g }) => {
          g ? w(g) : y();
        }), await f();
      }
    }, this.updateExpiry = async ({ topic: s, expiry: a }) => {
      this.isInitialized(), await this.pairings.update(s, { expiry: a });
    }, this.updateMetadata = async ({ topic: s, metadata: a }) => {
      this.isInitialized(), await this.pairings.update(s, { peerMetadata: a });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s) => {
      this.isInitialized(), await this.isValidDisconnect(s);
      const { topic: a } = s;
      this.pairings.keys.includes(a) && (await this.sendRequest(a, "wc_pairingDelete", Et("USER_DISCONNECTED")), await this.deletePairing(a));
    }, this.sendRequest = async (s, a, u) => {
      const f = ms(a, u), y = await this.core.crypto.encode(s, f), w = Bs[a].req;
      return this.core.history.set(s, f), this.core.relayer.publish(s, y, w), f.id;
    }, this.sendResult = async (s, a, u) => {
      const f = Do(s, u), y = await this.core.crypto.encode(a, f), w = await this.core.history.get(a, s), g = Bs[w.request.method].res;
      await this.core.relayer.publish(a, y, g), await this.core.history.resolve(f);
    }, this.sendError = async (s, a, u) => {
      const f = Zc(s, u), y = await this.core.crypto.encode(a, f), w = await this.core.history.get(a, s), g = Bs[w.request.method] ? Bs[w.request.method].res : Bs.unregistered_method.res;
      await this.core.relayer.publish(a, y, g), await this.core.history.resolve(f);
    }, this.deletePairing = async (s, a) => {
      await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, Et("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), a ? Promise.resolve() : this.core.expirer.del(s)]);
    }, this.cleanup = async () => {
      const s = this.pairings.getAll().filter((a) => Pi(a.expiry));
      await Promise.all(s.map((a) => this.deletePairing(a.topic)));
    }, this.onRelayEventRequest = (s) => {
      const { topic: a, payload: u } = s;
      switch (u.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(a, u);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(a, u);
        default:
          return this.onUnknownRpcMethodRequest(a, u);
      }
    }, this.onRelayEventResponse = async (s) => {
      const { topic: a, payload: u } = s, f = (await this.core.history.get(a, u.id)).request.method;
      switch (f) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(a, u);
        default:
          return this.onUnknownRpcMethodResponse(f);
      }
    }, this.onPairingPingRequest = async (s, a) => {
      const { id: u } = a;
      try {
        this.isValidPing({ topic: s }), await this.sendResult(u, s, !0), this.events.emit(Zs.ping, { id: u, topic: s });
      } catch (f) {
        await this.sendError(u, s, f), this.logger.error(f);
      }
    }, this.onPairingPingResponse = (s, a) => {
      const { id: u } = a;
      setTimeout(() => {
        xi(a) ? this.events.emit(Ct("pairing_ping", u), {}) : Jr(a) && this.events.emit(Ct("pairing_ping", u), { error: a.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s, a) => {
      const { id: u } = a;
      try {
        this.isValidDisconnect({ topic: s }), await this.deletePairing(s), this.events.emit(Zs.delete, { id: u, topic: s });
      } catch (f) {
        await this.sendError(u, s, f), this.logger.error(f);
      }
    }, this.onUnknownRpcMethodRequest = async (s, a) => {
      const { id: u, method: f } = a;
      try {
        if (this.registeredMethods.includes(f)) return;
        const y = Et("WC_METHOD_UNSUPPORTED", f);
        await this.sendError(u, s, y), this.logger.error(y);
      } catch (y) {
        await this.sendError(u, s, y), this.logger.error(y);
      }
    }, this.onUnknownRpcMethodResponse = (s) => {
      this.registeredMethods.includes(s) || this.logger.error(Et("WC_METHOD_UNSUPPORTED", s));
    }, this.isValidPair = (s) => {
      var a;
      if (!lr(s)) {
        const { message: f } = G("MISSING_OR_INVALID", `pair() params: ${s}`);
        throw new Error(f);
      }
      if (!p1(s.uri)) {
        const { message: f } = G("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
        throw new Error(f);
      }
      const u = Hl(s.uri);
      if (!((a = u == null ? void 0 : u.relay) != null && a.protocol)) {
        const { message: f } = G("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(f);
      }
      if (!(u != null && u.symKey)) {
        const { message: f } = G("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(f);
      }
    }, this.isValidPing = async (s) => {
      if (!lr(s)) {
        const { message: u } = G("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(u);
      }
      const { topic: a } = s;
      await this.isValidPairingTopic(a);
    }, this.isValidDisconnect = async (s) => {
      if (!lr(s)) {
        const { message: u } = G("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(u);
      }
      const { topic: a } = s;
      await this.isValidPairingTopic(a);
    }, this.isValidPairingTopic = async (s) => {
      if (!kt(s, !1)) {
        const { message: a } = G("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
        throw new Error(a);
      }
      if (!this.pairings.keys.includes(s)) {
        const { message: a } = G("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
        throw new Error(a);
      }
      if (Pi(this.pairings.get(s).expiry)) {
        await this.deletePairing(s);
        const { message: a } = G("EXPIRED", `pairing topic: ${s}`);
        throw new Error(a);
      }
    }, this.core = t, this.logger = pr(r, this.name), this.pairings = new Lo(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return fr(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Wt.message, async (t) => {
      const { topic: r, message: s } = t;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))) return;
      const a = await this.core.crypto.decode(r, s);
      try {
        Xc(a) ? (this.core.history.set(r, a), this.onRelayEventRequest({ topic: r, payload: a })) : Co(a) && (await this.core.history.resolve(a), await this.onRelayEventResponse({ topic: r, payload: a }), this.core.history.delete(r, a.id));
      } catch (u) {
        this.logger.error(u);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Nr.expired, async (t) => {
      const { topic: r } = ip(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Zs.expire, { topic: r }));
    });
  }
}
class vx extends J0 {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Qr.EventEmitter(), this.name = VI, this.version = BI, this.cached = [], this.initialized = !1, this.storagePrefix = Si, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (s, a, u) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s, request: a, chainId: u }), this.records.has(a.id)) return;
      const f = { id: a.id, topic: s, request: { method: a.method, params: a.params || null }, chainId: u, expiry: Lr(re.THIRTY_DAYS) };
      this.records.set(f.id, f), this.events.emit(Wr.created, f);
    }, this.resolve = async (s) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s }), !this.records.has(s.id)) return;
      const a = await this.getRecord(s.id);
      typeof a.response > "u" && (a.response = Jr(s) ? { error: s.error } : { result: s.result }, this.records.set(a.id, a), this.events.emit(Wr.updated, a));
    }, this.get = async (s, a) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s, id: a }), await this.getRecord(a)), this.delete = (s, a) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: a }), this.values.forEach((u) => {
        if (u.topic === s) {
          if (typeof a < "u" && u.id !== a) return;
          this.records.delete(u.id), this.events.emit(Wr.deleted, u);
        }
      });
    }, this.exists = async (s, a) => (this.isInitialized(), this.records.has(a) ? (await this.getRecord(a)).topic === s : !1), this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.logger = pr(r, this.name);
  }
  get context() {
    return fr(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const t = [];
    return this.values.forEach((r) => {
      if (typeof r.response < "u") return;
      const s = { topic: r.topic, request: ms(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return t.push(s);
    }), t;
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Wr.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > "u" || !t.length) return;
      if (this.records.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(Wr.created, (t) => {
      const r = Wr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(Wr.updated, (t) => {
      const r = Wr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(Wr.deleted, (t) => {
      const r = Wr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.core.heartbeat.on(on.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((t) => {
        re.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id));
      });
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class mx extends t_ {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Qr.EventEmitter(), this.name = FI, this.version = GI, this.cached = [], this.initialized = !1, this.storagePrefix = Si, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (s) => {
      try {
        const a = this.formatTarget(s);
        return typeof this.getExpiration(a) < "u";
      } catch {
        return !1;
      }
    }, this.set = (s, a) => {
      this.isInitialized();
      const u = this.formatTarget(s), f = { target: u, expiry: a };
      this.expirations.set(u, f), this.checkExpiry(u, f), this.events.emit(Nr.created, { target: u, expiration: f });
    }, this.get = (s) => {
      this.isInitialized();
      const a = this.formatTarget(s);
      return this.getExpiration(a);
    }, this.del = (s) => {
      if (this.isInitialized(), this.has(s)) {
        const a = this.formatTarget(s), u = this.getExpiration(a);
        this.expirations.delete(a), this.events.emit(Nr.deleted, { target: a, expiration: u });
      }
    }, this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.logger = pr(r, this.name);
  }
  get context() {
    return fr(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(t) {
    if (typeof t == "string") return F_(t);
    if (typeof t == "number") return G_(t);
    const { message: r } = G("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Nr.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length) return;
      if (this.expirations.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t);
    }
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(s), new Error(s);
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: s } = r;
    re.toMiliseconds(s) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t), this.events.emit(Nr.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(on.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Nr.created, (t) => {
      const r = Nr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Nr.expired, (t) => {
      const r = Nr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Nr.deleted, (t) => {
      const r = Nr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class wx extends r_ {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = Pc, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (s) => {
      if (this.verifyDisabled || _s() || !Es()) return;
      const a = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      this.verifyUrl !== a && this.removeIframe(), this.verifyUrl = a;
      try {
        await this.createIframe();
      } catch (u) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(u);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Vc;
        try {
          await this.createIframe();
        } catch (u) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(u), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (s) => {
      this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId), await this.init());
    }, this.resolve = async (s) => {
      if (this.isDevEnv) return "";
      const a = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      let u;
      try {
        u = await this.fetchAttestation(s.attestationId, a);
      } catch (f) {
        this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${a}`), this.logger.info(f), u = await this.fetchAttestation(s.attestationId, Vc);
      }
      return u;
    }, this.fetchAttestation = async (s, a) => {
      this.logger.info(`resolving attestation: ${s} from url: ${a}`);
      const u = this.startAbortTimer(re.ONE_SECOND * 2), f = await fetch(`${a}/attestation/${s}`, { signal: this.abortController.signal });
      return clearTimeout(u), f.status === 200 ? await f.json() : void 0;
    }, this.addToQueue = (s) => {
      this.queue.push(s);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((s) => this.sendPost(s)), this.queue = []);
    }, this.sendPost = (s) => {
      var a;
      try {
        if (!this.iframe) return;
        (a = this.iframe.contentWindow) == null || a.postMessage(s, "*"), this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let s;
      const a = (u) => {
        u.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", a), s());
      };
      await Promise.race([new Promise((u) => {
        if (document.getElementById(Pc)) return u();
        window.addEventListener("message", a);
        const f = document.createElement("iframe");
        f.id = Pc, f.src = `${this.verifyUrl}/${this.projectId}`, f.style.display = "none", document.body.append(f), this.iframe = f, s = u;
      }), new Promise((u, f) => setTimeout(() => {
        window.removeEventListener("message", a), f("verify iframe load timeout");
      }, re.toMiliseconds(re.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (s) => {
      let a = s || vs;
      return WI.includes(a) || (this.logger.info(`verify url: ${a}, not included in trusted list, assigning default: ${vs}`), a = vs), a;
    }, this.logger = pr(r, this.name), this.verifyUrl = vs, this.abortController = new AbortController(), this.isDevEnv = ou() && J1.IS_VITEST;
  }
  get context() {
    return fr(this.logger);
  }
  startAbortTimer(t) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), re.toMiliseconds(t));
  }
}
class bx extends i_ {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.context = JI, this.registerDeviceToken = async (s) => {
      const { clientId: a, token: u, notificationType: f, enableEncrypted: y = !1 } = s, w = `${QI}/${this.projectId}/clients`;
      await W1(w, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: a, type: f, token: u, always_raw: y }) });
    }, this.logger = pr(r, this.context);
  }
}
var _x = Object.defineProperty, pf = Object.getOwnPropertySymbols, Ex = Object.prototype.hasOwnProperty, Ix = Object.prototype.propertyIsEnumerable, df = (n, t, r) => t in n ? _x(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, gf = (n, t) => {
  for (var r in t || (t = {})) Ex.call(t, r) && df(n, r, t[r]);
  if (pf) for (var r of pf(t)) Ix.call(t, r) && df(n, r, t[r]);
  return n;
};
class hu extends W0 {
  constructor(t) {
    super(t), this.protocol = vp, this.version = bI, this.name = uu, this.events = new Qr.EventEmitter(), this.initialized = !1, this.on = (s, a) => this.events.on(s, a), this.once = (s, a) => this.events.once(s, a), this.off = (s, a) => this.events.off(s, a), this.removeListener = (s, a) => this.events.removeListener(s, a), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || wp, this.customStoragePrefix = t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Uo(qo({ level: (t == null ? void 0 : t.logger) || _I.logger }));
    this.logger = pr(r, this.name), this.heartbeat = new on.HeartBeat(), this.crypto = new ZI(this, this.logger, t == null ? void 0 : t.keychain), this.history = new vx(this, this.logger), this.expirer = new mx(this, this.logger), this.storage = t != null && t.storage ? t.storage : new a0(gf(gf({}, EI), t == null ? void 0 : t.storageOptions)), this.relayer = new fx({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new yx(this, this.logger), this.verify = new wx(this.projectId || "", this.logger), this.echoClient = new bx(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new hu(t);
    await r.initialize();
    const s = await r.crypto.getClientId();
    return await r.storage.setItem(MI, s), r;
  }
  get context() {
    return fr(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (t) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t;
    }
  }
}
const xx = hu, bp = "wc", _p = 2, Ep = "client", lu = `${bp}@${_p}:${Ep}:`, Oc = { name: Ep, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, yf = "WALLETCONNECT_DEEPLINK_CHOICE", Px = "proposal", Ip = "Proposal expired", Sx = "session", wo = re.SEVEN_DAYS, Ox = "engine", Gs = { wc_sessionPropose: { req: { ttl: re.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: re.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: re.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: re.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: re.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: re.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: re.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: re.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: re.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Rc = { min: re.FIVE_MINUTES, max: re.SEVEN_DAYS }, hi = { idle: "IDLE", active: "ACTIVE" }, Rx = "request", Tx = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Nx = Object.defineProperty, Ax = Object.defineProperties, $x = Object.getOwnPropertyDescriptors, vf = Object.getOwnPropertySymbols, Cx = Object.prototype.hasOwnProperty, Dx = Object.prototype.propertyIsEnumerable, mf = (n, t, r) => t in n ? Nx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, ur = (n, t) => {
  for (var r in t || (t = {})) Cx.call(t, r) && mf(n, r, t[r]);
  if (vf) for (var r of vf(t)) Dx.call(t, r) && mf(n, r, t[r]);
  return n;
}, Ws = (n, t) => Ax(n, $x(t));
class jx extends n_ {
  constructor(t) {
    super(t), this.name = Ox, this.events = new Yc(), this.initialized = !1, this.ignoredPayloadTypes = [Wi], this.requestQueue = { state: hi.idle, queue: [] }, this.sessionRequestQueue = { state: hi.idle, queue: [] }, this.requestQueueDelay = re.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(Gs) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, re.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const s = Ws(ur({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: a, requiredNamespaces: u, optionalNamespaces: f, sessionProperties: y, relays: w } = s;
      let g = a, b, P = !1;
      if (g && (P = this.client.core.pairing.pairings.get(g).active), !g || !P) {
        const { topic: ue, uri: le } = await this.client.core.pairing.create();
        g = ue, b = le;
      }
      const O = await this.client.core.crypto.generateKeyPair(), U = ur({ requiredNamespaces: u, optionalNamespaces: f, relays: w ?? [{ protocol: mp }], proposer: { publicKey: O, metadata: this.client.metadata } }, y && { sessionProperties: y }), { reject: $, resolve: V, done: te } = ys(re.FIVE_MINUTES, Ip);
      if (this.events.once(Ct("session_connect"), async ({ error: ue, session: le }) => {
        if (ue) $(ue);
        else if (le) {
          le.self.publicKey = O;
          const fe = Ws(ur({}, le), { requiredNamespaces: le.requiredNamespaces, optionalNamespaces: le.optionalNamespaces });
          await this.client.session.set(le.topic, fe), await this.setExpiry(le.topic, le.expiry), g && await this.client.core.pairing.updateMetadata({ topic: g, metadata: le.peer.metadata }), V(fe);
        }
      }), !g) {
        const { message: ue } = G("NO_MATCHING_KEY", `connect() pairing topic: ${g}`);
        throw new Error(ue);
      }
      const ge = await this.sendRequest({ topic: g, method: "wc_sessionPropose", params: U }), ce = Lr(re.FIVE_MINUTES);
      return await this.setProposal(ge, ur({ id: ge, expiry: ce }, U)), { uri: b, approval: te };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: s, relayProtocol: a, namespaces: u, sessionProperties: f } = r, y = this.client.proposal.get(s);
      let { pairingTopic: w, proposer: g, requiredNamespaces: b, optionalNamespaces: P } = y;
      w = w || "", bs(b) || (b = c1(u, "approve()"));
      const O = await this.client.core.crypto.generateKeyPair(), U = g.publicKey, $ = await this.client.core.crypto.generateSharedKey(O, U);
      w && s && (await this.client.core.pairing.updateMetadata({ topic: w, metadata: g.metadata }), await this.sendResult({ id: s, topic: w, result: { relay: { protocol: a ?? "irn" }, responderPublicKey: O } }), await this.client.proposal.delete(s, Et("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: w }));
      const V = ur({ relay: { protocol: a ?? "irn" }, namespaces: u, requiredNamespaces: b, optionalNamespaces: P, pairingTopic: w, controller: { publicKey: O, metadata: this.client.metadata }, expiry: Lr(wo) }, f && { sessionProperties: f });
      await this.client.core.relayer.subscribe($), await this.sendRequest({ topic: $, method: "wc_sessionSettle", params: V, throwOnFailedPublish: !0 });
      const te = Ws(ur({}, V), { topic: $, pairingTopic: w, acknowledged: !1, self: V.controller, peer: { publicKey: g.publicKey, metadata: g.metadata }, controller: O });
      return await this.client.session.set($, te), await this.setExpiry($, Lr(wo)), { topic: $, acknowledged: () => new Promise((ge) => setTimeout(() => ge(this.client.session.get($)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: s, reason: a } = r, { pairingTopic: u } = this.client.proposal.get(s);
      u && (await this.sendError(s, u, a), await this.client.proposal.delete(s, Et("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: s, namespaces: a } = r, u = await this.sendRequest({ topic: s, method: "wc_sessionUpdate", params: { namespaces: a } }), { done: f, resolve: y, reject: w } = ys();
      return this.events.once(Ct("session_update", u), ({ error: g }) => {
        g ? w(g) : y();
      }), await this.client.session.update(s, { namespaces: a }), { acknowledged: f };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: s } = r, a = await this.sendRequest({ topic: s, method: "wc_sessionExtend", params: {} }), { done: u, resolve: f, reject: y } = ys();
      return this.events.once(Ct("session_extend", a), ({ error: w }) => {
        w ? y(w) : f();
      }), await this.setExpiry(s, Lr(wo)), { acknowledged: u };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: s, request: a, topic: u, expiry: f } = r, y = Pb(), { done: w, resolve: g, reject: b } = ys(f, "Request expired. Please try again.");
      return this.events.once(Ct("session_request", y), ({ error: P, result: O }) => {
        P ? b(P) : g(O);
      }), await Promise.all([new Promise(async (P) => {
        await this.sendRequest({ clientRpcId: y, topic: u, method: "wc_sessionRequest", params: { request: a, chainId: s }, expiry: f, throwOnFailedPublish: !0 }).catch((O) => b(O)), this.client.events.emit("session_request_sent", { topic: u, request: a, chainId: s, id: y }), P();
      }), new Promise(async (P) => {
        const O = await J_(this.client.core.storage, yf);
        W_({ id: y, topic: u, wcDeepLink: O }), P();
      }), w()]).then((P) => P[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: s, response: a } = r, { id: u } = a;
      xi(a) ? await this.sendResult({ id: u, topic: s, result: a.result, throwOnFailedPublish: !0 }) : Jr(a) && await this.sendError(u, s, a.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: s } = r;
      if (this.client.session.keys.includes(s)) {
        const a = await this.sendRequest({ topic: s, method: "wc_sessionPing", params: {} }), { done: u, resolve: f, reject: y } = ys();
        this.events.once(Ct("session_ping", a), ({ error: w }) => {
          w ? y(w) : f();
        }), await u();
      } else this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: s, event: a, chainId: u } = r;
      await this.sendRequest({ topic: s, method: "wc_sessionEvent", params: { event: a, chainId: u } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: s } = r;
      this.client.session.keys.includes(s) ? (await this.sendRequest({ topic: s, method: "wc_sessionDelete", params: Et("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({ topic: s });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((s) => l1(s, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic) try {
        const s = this.client.core.pairing.pairings.get(r.pairingTopic), a = this.client.core.pairing.pairings.getAll().filter((u) => {
          var f, y;
          return ((f = u.peerMetadata) == null ? void 0 : f.url) && ((y = u.peerMetadata) == null ? void 0 : y.url) === r.peer.metadata.url && u.topic && u.topic !== s.topic;
        });
        if (a.length === 0) return;
        this.client.logger.info(`Cleaning up ${a.length} duplicate pairing(s)`), await Promise.all(a.map((u) => this.client.core.pairing.disconnect({ topic: u.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.deleteSession = async (r, s) => {
      const { self: a } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, Et("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), s || this.client.core.expirer.del(r), this.client.core.storage.removeItem(yf).catch((u) => this.client.logger.warn(u)), this.getPendingSessionRequests().forEach((u) => {
        u.topic === r && this.deletePendingSessionRequest(u.id, Et("USER_DISCONNECTED"));
      });
    }, this.deleteProposal = async (r, s) => {
      await Promise.all([this.client.proposal.delete(r, Et("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, s, a = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, s), a ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((u) => u.id !== r), a && (this.sessionRequestQueue.state = hi.idle);
    }, this.setExpiry = async (r, s) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: s }), this.client.core.expirer.set(r, s);
    }, this.setProposal = async (r, s) => {
      await this.client.proposal.set(r, s), this.client.core.expirer.set(r, s.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const s = Gs.wc_sessionRequest.req.ttl, { id: a, topic: u, params: f, verifyContext: y } = r;
      await this.client.pendingRequest.set(a, { id: a, topic: u, params: f, verifyContext: y }), s && this.client.core.expirer.set(a, Lr(s));
    }, this.sendRequest = async (r) => {
      const { topic: s, method: a, params: u, expiry: f, relayRpcId: y, clientRpcId: w, throwOnFailedPublish: g } = r, b = ms(a, u, w);
      if (Es() && Tx.includes(a)) {
        const U = ws(JSON.stringify(b));
        this.client.core.verify.register({ attestationId: U });
      }
      const P = await this.client.core.crypto.encode(s, b), O = Gs[a].req;
      return f && (O.ttl = f), y && (O.id = y), this.client.core.history.set(s, b), g ? (O.internal = Ws(ur({}, O.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, P, O)) : this.client.core.relayer.publish(s, P, O).catch((U) => this.client.logger.error(U)), b.id;
    }, this.sendResult = async (r) => {
      const { id: s, topic: a, result: u, throwOnFailedPublish: f } = r, y = Do(s, u), w = await this.client.core.crypto.encode(a, y), g = await this.client.core.history.get(a, s), b = Gs[g.request.method].res;
      f ? (b.internal = Ws(ur({}, b.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(a, w, b)) : this.client.core.relayer.publish(a, w, b).catch((P) => this.client.logger.error(P)), await this.client.core.history.resolve(y);
    }, this.sendError = async (r, s, a) => {
      const u = Zc(r, a), f = await this.client.core.crypto.encode(s, u), y = await this.client.core.history.get(s, r), w = Gs[y.request.method].res;
      this.client.core.relayer.publish(s, f, w), await this.client.core.history.resolve(u);
    }, this.cleanup = async () => {
      const r = [], s = [];
      this.client.session.getAll().forEach((a) => {
        Pi(a.expiry) && r.push(a.topic);
      }), this.client.proposal.getAll().forEach((a) => {
        Pi(a.expiry) && s.push(a.id);
      }), await Promise.all([...r.map((a) => this.deleteSession(a)), ...s.map((a) => this.deleteProposal(a))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === hi.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = hi.active;
        const r = this.requestQueue.queue.shift();
        if (r) try {
          this.processRequest(r), await new Promise((s) => setTimeout(s, 300));
        } catch (s) {
          this.client.logger.warn(s);
        }
      }
      this.requestQueue.state = hi.idle;
    }, this.processRequest = (r) => {
      const { topic: s, payload: a } = r, u = a.method;
      switch (u) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, a);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, a);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, a);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, a);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, a);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, a);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, a);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, a);
        default:
          return this.client.logger.info(`Unsupported request method ${u}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: s, payload: a } = r, u = (await this.client.core.history.get(s, a.id)).request.method;
      switch (u) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, a);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, a);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, a);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, a);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, a);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, a);
        default:
          return this.client.logger.info(`Unsupported response method ${u}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: s } = r, { message: a } = G("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(a);
    }, this.onSessionProposeRequest = async (r, s) => {
      const { params: a, id: u } = s;
      try {
        this.isValidConnect(ur({}, s.params));
        const f = Lr(re.FIVE_MINUTES), y = ur({ id: u, pairingTopic: r, expiry: f }, a);
        await this.setProposal(u, y);
        const w = ws(JSON.stringify(s)), g = await this.getVerifyContext(w, y.proposer.metadata);
        this.client.events.emit("session_proposal", { id: u, params: y, verifyContext: g });
      } catch (f) {
        await this.sendError(u, r, f), this.client.logger.error(f);
      }
    }, this.onSessionProposeResponse = async (r, s) => {
      const { id: a } = s;
      if (xi(s)) {
        const { result: u } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: u });
        const f = this.client.proposal.get(a);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: f });
        const y = f.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: y });
        const w = u.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: w });
        const g = await this.client.core.crypto.generateSharedKey(y, w);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: g });
        const b = await this.client.core.relayer.subscribe(g);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: b }), await this.client.core.pairing.activate({ topic: r });
      } else Jr(s) && (await this.client.proposal.delete(a, Et("USER_DISCONNECTED")), this.events.emit(Ct("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (r, s) => {
      const { id: a, params: u } = s;
      try {
        this.isValidSessionSettleRequest(u);
        const { relay: f, controller: y, expiry: w, namespaces: g, requiredNamespaces: b, optionalNamespaces: P, sessionProperties: O, pairingTopic: U } = s.params, $ = ur({ topic: r, relay: f, expiry: w, namespaces: g, acknowledged: !0, pairingTopic: U, requiredNamespaces: b, optionalNamespaces: P, controller: y.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: y.publicKey, metadata: y.metadata } }, O && { sessionProperties: O });
        await this.sendResult({ id: s.id, topic: r, result: !0 }), this.events.emit(Ct("session_connect"), { session: $ }), this.cleanupDuplicatePairings($);
      } catch (f) {
        await this.sendError(a, r, f), this.client.logger.error(f);
      }
    }, this.onSessionSettleResponse = async (r, s) => {
      const { id: a } = s;
      xi(s) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Ct("session_approve", a), {})) : Jr(s) && (await this.client.session.delete(r, Et("USER_DISCONNECTED")), this.events.emit(Ct("session_approve", a), { error: s.error }));
    }, this.onSessionUpdateRequest = async (r, s) => {
      const { params: a, id: u } = s;
      try {
        const f = `${r}_session_update`, y = mo.get(f);
        if (y && this.isRequestOutOfSync(y, u)) {
          this.client.logger.info(`Discarding out of sync request - ${u}`);
          return;
        }
        this.isValidUpdate(ur({ topic: r }, a)), await this.client.session.update(r, { namespaces: a.namespaces }), await this.sendResult({ id: u, topic: r, result: !0 }), this.client.events.emit("session_update", { id: u, topic: r, params: a }), mo.set(f, u);
      } catch (f) {
        await this.sendError(u, r, f), this.client.logger.error(f);
      }
    }, this.isRequestOutOfSync = (r, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, s) => {
      const { id: a } = s;
      xi(s) ? this.events.emit(Ct("session_update", a), {}) : Jr(s) && this.events.emit(Ct("session_update", a), { error: s.error });
    }, this.onSessionExtendRequest = async (r, s) => {
      const { id: a } = s;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Lr(wo)), await this.sendResult({ id: a, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: a, topic: r });
      } catch (u) {
        await this.sendError(a, r, u), this.client.logger.error(u);
      }
    }, this.onSessionExtendResponse = (r, s) => {
      const { id: a } = s;
      xi(s) ? this.events.emit(Ct("session_extend", a), {}) : Jr(s) && this.events.emit(Ct("session_extend", a), { error: s.error });
    }, this.onSessionPingRequest = async (r, s) => {
      const { id: a } = s;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: a, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: a, topic: r });
      } catch (u) {
        await this.sendError(a, r, u), this.client.logger.error(u);
      }
    }, this.onSessionPingResponse = (r, s) => {
      const { id: a } = s;
      setTimeout(() => {
        xi(s) ? this.events.emit(Ct("session_ping", a), {}) : Jr(s) && this.events.emit(Ct("session_ping", a), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, s) => {
      const { id: a } = s;
      try {
        this.isValidDisconnect({ topic: r, reason: s.params }), await Promise.all([new Promise((u) => {
          this.client.core.relayer.once(Wt.publish, async () => {
            u(await this.deleteSession(r));
          });
        }), this.sendResult({ id: a, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: a, topic: r });
      } catch (u) {
        this.client.logger.error(u);
      }
    }, this.onSessionRequest = async (r, s) => {
      const { id: a, params: u } = s;
      try {
        this.isValidRequest(ur({ topic: r }, u));
        const f = ws(JSON.stringify(ms("wc_sessionRequest", u, a))), y = this.client.session.get(r), w = await this.getVerifyContext(f, y.peer.metadata), g = { id: a, topic: r, params: u, verifyContext: w };
        await this.setPendingSessionRequest(g), this.addSessionRequestToSessionRequestQueue(g), this.processSessionRequestQueue();
      } catch (f) {
        await this.sendError(a, r, f), this.client.logger.error(f);
      }
    }, this.onSessionRequestResponse = (r, s) => {
      const { id: a } = s;
      xi(s) ? this.events.emit(Ct("session_request", a), { result: s.result }) : Jr(s) && this.events.emit(Ct("session_request", a), { error: s.error });
    }, this.onSessionEventRequest = async (r, s) => {
      const { id: a, params: u } = s;
      try {
        const f = `${r}_session_event_${u.event.name}`, y = mo.get(f);
        if (y && this.isRequestOutOfSync(y, a)) {
          this.client.logger.info(`Discarding out of sync request - ${a}`);
          return;
        }
        this.isValidEmit(ur({ topic: r }, u)), this.client.events.emit("session_event", { id: a, topic: r, params: u }), mo.set(f, a);
      } catch (f) {
        await this.sendError(a, r, f), this.client.logger.error(f);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = hi.idle, this.processSessionRequestQueue();
      }, re.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === hi.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = hi.active, this.client.events.emit("session_request", r);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active) return;
      const s = this.client.proposal.getAll().find((a) => a.pairingTopic === r.topic);
      s && this.onSessionProposeRequest(r.topic, ms("wc_sessionPropose", { requiredNamespaces: s.requiredNamespaces, optionalNamespaces: s.optionalNamespaces, relays: s.relays, proposer: s.proposer, sessionProperties: s.sessionProperties }, s.id));
    }, this.isValidConnect = async (r) => {
      if (!lr(r)) {
        const { message: w } = G("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(w);
      }
      const { pairingTopic: s, requiredNamespaces: a, optionalNamespaces: u, sessionProperties: f, relays: y } = r;
      if (tr(s) || await this.isValidPairingTopic(s), !I1(y)) {
        const { message: w } = G("MISSING_OR_INVALID", `connect() relays: ${y}`);
        throw new Error(w);
      }
      !tr(a) && bs(a) !== 0 && this.validateNamespaces(a, "requiredNamespaces"), !tr(u) && bs(u) !== 0 && this.validateNamespaces(u, "optionalNamespaces"), tr(f) || this.validateSessionProps(f, "sessionProperties");
    }, this.validateNamespaces = (r, s) => {
      const a = E1(r, "connect()", s);
      if (a) throw new Error(a.message);
    }, this.isValidApprove = async (r) => {
      if (!lr(r)) throw new Error(G("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: s, namespaces: a, relayProtocol: u, sessionProperties: f } = r;
      await this.isValidProposalId(s);
      const y = this.client.proposal.get(s), w = Po(a, "approve()");
      if (w) throw new Error(w.message);
      const g = Bl(y.requiredNamespaces, a, "approve()");
      if (g) throw new Error(g.message);
      if (!kt(u, !0)) {
        const { message: b } = G("MISSING_OR_INVALID", `approve() relayProtocol: ${u}`);
        throw new Error(b);
      }
      tr(f) || this.validateSessionProps(f, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!lr(r)) {
        const { message: u } = G("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(u);
      }
      const { id: s, reason: a } = r;
      if (await this.isValidProposalId(s), !P1(a)) {
        const { message: u } = G("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(a)}`);
        throw new Error(u);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!lr(r)) {
        const { message: g } = G("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(g);
      }
      const { relay: s, controller: a, namespaces: u, expiry: f } = r;
      if (!np(s)) {
        const { message: g } = G("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(g);
      }
      const y = y1(a, "onSessionSettleRequest()");
      if (y) throw new Error(y.message);
      const w = Po(u, "onSessionSettleRequest()");
      if (w) throw new Error(w.message);
      if (Pi(f)) {
        const { message: g } = G("EXPIRED", "onSessionSettleRequest()");
        throw new Error(g);
      }
    }, this.isValidUpdate = async (r) => {
      if (!lr(r)) {
        const { message: w } = G("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(w);
      }
      const { topic: s, namespaces: a } = r;
      await this.isValidSessionTopic(s);
      const u = this.client.session.get(s), f = Po(a, "update()");
      if (f) throw new Error(f.message);
      const y = Bl(u.requiredNamespaces, a, "update()");
      if (y) throw new Error(y.message);
    }, this.isValidExtend = async (r) => {
      if (!lr(r)) {
        const { message: a } = G("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s } = r;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (r) => {
      if (!lr(r)) {
        const { message: w } = G("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(w);
      }
      const { topic: s, request: a, chainId: u, expiry: f } = r;
      await this.isValidSessionTopic(s);
      const { namespaces: y } = this.client.session.get(s);
      if (!Vl(y, u)) {
        const { message: w } = G("MISSING_OR_INVALID", `request() chainId: ${u}`);
        throw new Error(w);
      }
      if (!S1(a)) {
        const { message: w } = G("MISSING_OR_INVALID", `request() ${JSON.stringify(a)}`);
        throw new Error(w);
      }
      if (!T1(y, u, a.method)) {
        const { message: w } = G("MISSING_OR_INVALID", `request() method: ${a.method}`);
        throw new Error(w);
      }
      if (f && !C1(f, Rc)) {
        const { message: w } = G("MISSING_OR_INVALID", `request() expiry: ${f}. Expiry must be a number (in seconds) between ${Rc.min} and ${Rc.max}`);
        throw new Error(w);
      }
    }, this.isValidRespond = async (r) => {
      var s;
      if (!lr(r)) {
        const { message: f } = G("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(f);
      }
      const { topic: a, response: u } = r;
      try {
        await this.isValidSessionTopic(a);
      } catch (f) {
        throw (s = r == null ? void 0 : r.response) != null && s.id && this.cleanupAfterResponse(r), f;
      }
      if (!O1(u)) {
        const { message: f } = G("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(u)}`);
        throw new Error(f);
      }
    }, this.isValidPing = async (r) => {
      if (!lr(r)) {
        const { message: a } = G("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s } = r;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (r) => {
      if (!lr(r)) {
        const { message: y } = G("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(y);
      }
      const { topic: s, event: a, chainId: u } = r;
      await this.isValidSessionTopic(s);
      const { namespaces: f } = this.client.session.get(s);
      if (!Vl(f, u)) {
        const { message: y } = G("MISSING_OR_INVALID", `emit() chainId: ${u}`);
        throw new Error(y);
      }
      if (!R1(a)) {
        const { message: y } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
        throw new Error(y);
      }
      if (!N1(f, u, a.name)) {
        const { message: y } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
        throw new Error(y);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!lr(r)) {
        const { message: a } = G("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s } = r;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (r, s) => {
      const a = { verified: { verifyUrl: s.verifyUrl || vs, validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const u = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: s.verifyUrl });
        u && (a.verified.origin = u.origin, a.verified.isScam = u.isScam, a.verified.validation = u.origin === new URL(s.url).origin ? "VALID" : "INVALID");
      } catch (u) {
        this.client.logger.info(u);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(a)}`), a;
    }, this.validateSessionProps = (r, s) => {
      Object.values(r).forEach((a) => {
        if (!kt(a, !1)) {
          const { message: u } = G("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(a)}`);
          throw new Error(u);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = G("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Wt.message, async (t) => {
      const { topic: r, message: s } = t;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s))) return;
      const a = await this.client.core.crypto.decode(r, s);
      try {
        Xc(a) ? (this.client.core.history.set(r, a), this.onRelayEventRequest({ topic: r, payload: a })) : Co(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({ topic: r, payload: a }), this.client.core.history.delete(r, a.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: a });
      } catch (u) {
        this.client.logger.error(u);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Nr.expired, async (t) => {
      const { topic: r, id: s } = ip(t.target);
      if (s && this.client.pendingRequest.keys.includes(s)) return await this.deletePendingSessionRequest(s, G("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : s && (await this.deleteProposal(s, !0), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Zs.create, (t) => this.onPairingCreated(t));
  }
  isValidPairingTopic(t) {
    if (!kt(t, !1)) {
      const { message: r } = G("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = G("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (Pi(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = G("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!kt(t, !1)) {
      const { message: r } = G("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = G("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (Pi(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = G("EXPIRED", `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t)) this.isValidPairingTopic(t);
    else if (kt(t, !1)) {
      const { message: r } = G("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    } else {
      const { message: r } = G("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!x1(t)) {
      const { message: r } = G("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = G("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (Pi(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = G("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class Ux extends Lo {
  constructor(t, r) {
    super(t, r, Px, lu), this.core = t, this.logger = r;
  }
}
class qx extends Lo {
  constructor(t, r) {
    super(t, r, Sx, lu), this.core = t, this.logger = r;
  }
}
class Mx extends Lo {
  constructor(t, r) {
    super(t, r, Rx, lu, (s) => s.id), this.core = t, this.logger = r;
  }
}
let Lx = class xp extends s_ {
  constructor(t) {
    super(t), this.protocol = bp, this.version = _p, this.name = Oc.name, this.events = new Qr.EventEmitter(), this.on = (s, a) => this.events.on(s, a), this.once = (s, a) => this.events.once(s, a), this.off = (s, a) => this.events.off(s, a), this.removeListener = (s, a) => this.events.removeListener(s, a), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (t == null ? void 0 : t.name) || Oc.name, this.metadata = (t == null ? void 0 : t.metadata) || k_();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Uo(qo({ level: (t == null ? void 0 : t.logger) || Oc.logger }));
    this.core = (t == null ? void 0 : t.core) || new xx(t), this.logger = pr(r, this.name), this.session = new qx(this.core, this.logger), this.proposal = new Ux(this.core, this.logger), this.pendingRequest = new Mx(this.core, this.logger), this.engine = new jx(this);
  }
  static async init(t) {
    const r = new xp(t);
    return await r.initialize(), r;
  }
  get context() {
    return fr(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (t) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t;
    }
  }
};
const wf = "error", zx = "wss://relay.walletconnect.com", kx = "wc", Hx = "universal_provider", bf = `${kx}@2:${Hx}:`, Kx = "https://rpc.walletconnect.com/v1/", fi = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var Js = typeof globalThis < "u" ? globalThis : typeof window < "u" || typeof window < "u" ? window : typeof self < "u" ? self : {}, Bc = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(n, t) {
  (function() {
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", y = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", g = 500, b = "__lodash_placeholder__", P = 1, O = 2, U = 4, $ = 1, V = 2, te = 1, ge = 2, ce = 4, ue = 8, le = 16, fe = 32, D = 64, H = 128, J = 256, ye = 512, ie = 30, Ee = "...", Re = 800, Xe = 16, N = 1, L = 2, Me = 3, Te = 1 / 0, Q = 9007199254740991, B = 17976931348623157e292, K = NaN, F = 4294967295, ct = F - 1, ke = F >>> 1, kr = [["ary", H], ["bind", te], ["bindKey", ge], ["curry", ue], ["curryRight", le], ["flip", ye], ["partial", fe], ["partialRight", D], ["rearg", J]], be = "[object Arguments]", It = "[object Array]", C = "[object AsyncFunction]", A = "[object Boolean]", R = "[object Date]", h = "[object DOMException]", E = "[object Error]", X = "[object Function]", ae = "[object GeneratorFunction]", me = "[object Map]", Ne = "[object Number]", $e = "[object Null]", xe = "[object Object]", xt = "[object Promise]", vt = "[object Proxy]", st = "[object RegExp]", De = "[object Set]", We = "[object String]", Je = "[object Symbol]", nt = "[object Undefined]", Le = "[object WeakMap]", Qe = "[object WeakSet]", Ae = "[object ArrayBuffer]", He = "[object DataView]", ut = "[object Float32Array]", Ue = "[object Float64Array]", Pt = "[object Int8Array]", Dt = "[object Int16Array]", Ht = "[object Int32Array]", Kt = "[object Uint8Array]", qt = "[object Uint8ClampedArray]", Jt = "[object Uint16Array]", ir = "[object Uint32Array]", Hr = /\b__p \+= '';/g, Qt = /\b(__p \+=) '' \+/g, Yr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, pi = /&(?:amp|lt|gt|quot|#39);/g, Ti = /[&<>"']/g, ht = RegExp(pi.source), et = RegExp(Ti.source), lt = /<%-([\s\S]+?)%>/g, ft = /<%([\s\S]+?)%>/g, ot = /<%=([\s\S]+?)%>/g, tt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, St = /^\w*$/, Ot = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pt = /[\\^$.*+?()[\]{}|]/g, Rt = RegExp(pt.source), dt = /^\s+/, mt = /\s/, gt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ge = /\{\n\/\* \[wrapped with (.+)\] \*/, Tt = /,? & /, Nt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, zo = /[()=,{}\[\]\/\s]/, ko = /\\(\\)?/g, Ho = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _r = /\w*$/, Ko = /^[-+]0x[0-9a-f]+$/i, Vo = /^0b[01]+$/i, Bo = /^\[object .+?Constructor\]$/, Fo = /^0o[0-7]+$/i, Go = /^(?:0|[1-9]\d*)$/, Zr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Qi = /($^)/, Wo = /['\n\r\u2028\u2029\\]/g, Yi = "\\ud800-\\udfff", Jo = "\\u0300-\\u036f", Qo = "\\ufe20-\\ufe2f", Zi = "\\u20d0-\\u20ff", ln = Jo + Qo + Zi, fn = "\\u2700-\\u27bf", $r = "a-z\\xdf-\\xf6\\xf8-\\xff", Yo = "\\xac\\xb1\\xd7\\xf7", Zo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Xo = "\\u2000-\\u206f", ea = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", pn = "A-Z\\xc0-\\xd6\\xd8-\\xde", dn = "\\ufe0e\\ufe0f", Ni = Yo + Zo + Xo + ea, xs = "['’]", Ai = "[" + Yi + "]", Ps = "[" + Ni + "]", $i = "[" + ln + "]", gn = "\\d+", ta = "[" + fn + "]", yn = "[" + $r + "]", vn = "[^" + Yi + Ni + gn + fn + $r + pn + "]", Xi = "\\ud83c[\\udffb-\\udfff]", ra = "(?:" + $i + "|" + Xi + ")", mn = "[^" + Yi + "]", es = "(?:\\ud83c[\\udde6-\\uddff]){2}", di = "[\\ud800-\\udbff][\\udc00-\\udfff]", dr = "[" + pn + "]", wn = "\\u200d", bn = "(?:" + yn + "|" + vn + ")", Kr = "(?:" + dr + "|" + vn + ")", _n = "(?:" + xs + "(?:d|ll|m|re|s|t|ve))?", En = "(?:" + xs + "(?:D|LL|M|RE|S|T|VE))?", In = ra + "?", xn = "[" + dn + "]?", ia = "(?:" + wn + "(?:" + [mn, es, di].join("|") + ")" + xn + In + ")*", Xr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Pn = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Sn = xn + In + ia, ts = "(?:" + [ta, es, di].join("|") + ")" + Sn, sa = "(?:" + [mn + $i + "?", $i, es, di, Ai].join("|") + ")", Ss = RegExp(xs, "g"), na = RegExp($i, "g"), rs = RegExp(Xi + "(?=" + Xi + ")|" + sa + Sn, "g"), On = RegExp([dr + "?" + yn + "+" + _n + "(?=" + [Ps, dr, "$"].join("|") + ")", Kr + "+" + En + "(?=" + [Ps, dr + bn, "$"].join("|") + ")", dr + "?" + bn + "+" + _n, dr + "+" + En, Pn, Xr, gn, ts].join("|"), "g"), Rn = RegExp("[" + wn + Yi + ln + dn + "]"), Ci = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Tn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], oa = -1, Ke = {};
    Ke[ut] = Ke[Ue] = Ke[Pt] = Ke[Dt] = Ke[Ht] = Ke[Kt] = Ke[qt] = Ke[Jt] = Ke[ir] = !0, Ke[be] = Ke[It] = Ke[Ae] = Ke[A] = Ke[He] = Ke[R] = Ke[E] = Ke[X] = Ke[me] = Ke[Ne] = Ke[xe] = Ke[st] = Ke[De] = Ke[We] = Ke[Le] = !1;
    var ze = {};
    ze[be] = ze[It] = ze[Ae] = ze[He] = ze[A] = ze[R] = ze[ut] = ze[Ue] = ze[Pt] = ze[Dt] = ze[Ht] = ze[me] = ze[Ne] = ze[xe] = ze[st] = ze[De] = ze[We] = ze[Je] = ze[Kt] = ze[qt] = ze[Jt] = ze[ir] = !0, ze[E] = ze[X] = ze[Le] = !1;
    var v = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, I = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, z = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Y = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Ve = parseFloat, pe = parseInt, Ye = typeof Js == "object" && Js && Js.Object === Object && Js, At = typeof self == "object" && self && self.Object === Object && self, Se = Ye || At || Function("return this")(), Be = t && !t.nodeType && t, wt = Be && !0 && n && !n.nodeType && n, sr = wt && wt.exports === Be, $t = sr && Ye.process, Ze = function() {
      try {
        var x = wt && wt.require && wt.require("util").types;
        return x || $t && $t.binding && $t.binding("util");
      } catch {
      }
    }(), Yt = Ze && Ze.isArrayBuffer, Cr = Ze && Ze.isDate, Er = Ze && Ze.isMap, Vr = Ze && Ze.isRegExp, Os = Ze && Ze.isSet, Di = Ze && Ze.isTypedArray;
    function Mt(x, j, T) {
      switch (T.length) {
        case 0:
          return x.call(j);
        case 1:
          return x.call(j, T[0]);
        case 2:
          return x.call(j, T[0], T[1]);
        case 3:
          return x.call(j, T[0], T[1], T[2]);
      }
      return x.apply(j, T);
    }
    function Op(x, j, T, Z) {
      for (var he = -1, Ce = x == null ? 0 : x.length; ++he < Ce; ) {
        var jt = x[he];
        j(Z, jt, T(jt), x);
      }
      return Z;
    }
    function Ir(x, j) {
      for (var T = -1, Z = x == null ? 0 : x.length; ++T < Z && j(x[T], T, x) !== !1; ) ;
      return x;
    }
    function Rp(x, j) {
      for (var T = x == null ? 0 : x.length; T-- && j(x[T], T, x) !== !1; ) ;
      return x;
    }
    function du(x, j) {
      for (var T = -1, Z = x == null ? 0 : x.length; ++T < Z; ) if (!j(x[T], T, x)) return !1;
      return !0;
    }
    function gi(x, j) {
      for (var T = -1, Z = x == null ? 0 : x.length, he = 0, Ce = []; ++T < Z; ) {
        var jt = x[T];
        j(jt, T, x) && (Ce[he++] = jt);
      }
      return Ce;
    }
    function Nn(x, j) {
      var T = x == null ? 0 : x.length;
      return !!T && is(x, j, 0) > -1;
    }
    function aa(x, j, T) {
      for (var Z = -1, he = x == null ? 0 : x.length; ++Z < he; ) if (T(j, x[Z])) return !0;
      return !1;
    }
    function rt(x, j) {
      for (var T = -1, Z = x == null ? 0 : x.length, he = Array(Z); ++T < Z; ) he[T] = j(x[T], T, x);
      return he;
    }
    function yi(x, j) {
      for (var T = -1, Z = j.length, he = x.length; ++T < Z; ) x[he + T] = j[T];
      return x;
    }
    function ca(x, j, T, Z) {
      var he = -1, Ce = x == null ? 0 : x.length;
      for (Z && Ce && (T = x[++he]); ++he < Ce; ) T = j(T, x[he], he, x);
      return T;
    }
    function Tp(x, j, T, Z) {
      var he = x == null ? 0 : x.length;
      for (Z && he && (T = x[--he]); he--; ) T = j(T, x[he], he, x);
      return T;
    }
    function ua(x, j) {
      for (var T = -1, Z = x == null ? 0 : x.length; ++T < Z; ) if (j(x[T], T, x)) return !0;
      return !1;
    }
    var Np = ha("length");
    function Ap(x) {
      return x.split("");
    }
    function $p(x) {
      return x.match(Nt) || [];
    }
    function gu(x, j, T) {
      var Z;
      return T(x, function(he, Ce, jt) {
        if (j(he, Ce, jt)) return Z = Ce, !1;
      }), Z;
    }
    function An(x, j, T, Z) {
      for (var he = x.length, Ce = T + (Z ? 1 : -1); Z ? Ce-- : ++Ce < he; ) if (j(x[Ce], Ce, x)) return Ce;
      return -1;
    }
    function is(x, j, T) {
      return j === j ? Vp(x, j, T) : An(x, yu, T);
    }
    function Cp(x, j, T, Z) {
      for (var he = T - 1, Ce = x.length; ++he < Ce; ) if (Z(x[he], j)) return he;
      return -1;
    }
    function yu(x) {
      return x !== x;
    }
    function vu(x, j) {
      var T = x == null ? 0 : x.length;
      return T ? fa(x, j) / T : K;
    }
    function ha(x) {
      return function(j) {
        return j == null ? r : j[x];
      };
    }
    function la(x) {
      return function(j) {
        return x == null ? r : x[j];
      };
    }
    function mu(x, j, T, Z, he) {
      return he(x, function(Ce, jt, Fe) {
        T = Z ? (Z = !1, Ce) : j(T, Ce, jt, Fe);
      }), T;
    }
    function Dp(x, j) {
      var T = x.length;
      for (x.sort(j); T--; ) x[T] = x[T].value;
      return x;
    }
    function fa(x, j) {
      for (var T, Z = -1, he = x.length; ++Z < he; ) {
        var Ce = j(x[Z]);
        Ce !== r && (T = T === r ? Ce : T + Ce);
      }
      return T;
    }
    function pa(x, j) {
      for (var T = -1, Z = Array(x); ++T < x; ) Z[T] = j(T);
      return Z;
    }
    function jp(x, j) {
      return rt(j, function(T) {
        return [T, x[T]];
      });
    }
    function wu(x) {
      return x && x.slice(0, Iu(x) + 1).replace(dt, "");
    }
    function gr(x) {
      return function(j) {
        return x(j);
      };
    }
    function da(x, j) {
      return rt(j, function(T) {
        return x[T];
      });
    }
    function Rs(x, j) {
      return x.has(j);
    }
    function bu(x, j) {
      for (var T = -1, Z = x.length; ++T < Z && is(j, x[T], 0) > -1; ) ;
      return T;
    }
    function _u(x, j) {
      for (var T = x.length; T-- && is(j, x[T], 0) > -1; ) ;
      return T;
    }
    function Up(x, j) {
      for (var T = x.length, Z = 0; T--; ) x[T] === j && ++Z;
      return Z;
    }
    var qp = la(v), Mp = la(I);
    function Lp(x) {
      return "\\" + Y[x];
    }
    function zp(x, j) {
      return x == null ? r : x[j];
    }
    function ss(x) {
      return Rn.test(x);
    }
    function kp(x) {
      return Ci.test(x);
    }
    function Hp(x) {
      for (var j, T = []; !(j = x.next()).done; ) T.push(j.value);
      return T;
    }
    function ga(x) {
      var j = -1, T = Array(x.size);
      return x.forEach(function(Z, he) {
        T[++j] = [he, Z];
      }), T;
    }
    function Eu(x, j) {
      return function(T) {
        return x(j(T));
      };
    }
    function vi(x, j) {
      for (var T = -1, Z = x.length, he = 0, Ce = []; ++T < Z; ) {
        var jt = x[T];
        (jt === j || jt === b) && (x[T] = b, Ce[he++] = T);
      }
      return Ce;
    }
    function $n(x) {
      var j = -1, T = Array(x.size);
      return x.forEach(function(Z) {
        T[++j] = Z;
      }), T;
    }
    function Kp(x) {
      var j = -1, T = Array(x.size);
      return x.forEach(function(Z) {
        T[++j] = [Z, Z];
      }), T;
    }
    function Vp(x, j, T) {
      for (var Z = T - 1, he = x.length; ++Z < he; ) if (x[Z] === j) return Z;
      return -1;
    }
    function Bp(x, j, T) {
      for (var Z = T + 1; Z--; ) if (x[Z] === j) return Z;
      return Z;
    }
    function ns(x) {
      return ss(x) ? Gp(x) : Np(x);
    }
    function Dr(x) {
      return ss(x) ? Wp(x) : Ap(x);
    }
    function Iu(x) {
      for (var j = x.length; j-- && mt.test(x.charAt(j)); ) ;
      return j;
    }
    var Fp = la(z);
    function Gp(x) {
      for (var j = rs.lastIndex = 0; rs.test(x); ) ++j;
      return j;
    }
    function Wp(x) {
      return x.match(rs) || [];
    }
    function Jp(x) {
      return x.match(On) || [];
    }
    var Qp = function x(j) {
      j = j == null ? Se : os.defaults(Se.Object(), j, os.pick(Se, Tn));
      var T = j.Array, Z = j.Date, he = j.Error, Ce = j.Function, jt = j.Math, Fe = j.Object, ya = j.RegExp, Yp = j.String, xr = j.TypeError, Cn = T.prototype, Zp = Ce.prototype, as = Fe.prototype, Dn = j["__core-js_shared__"], jn = Zp.toString, qe = as.hasOwnProperty, Xp = 0, xu = function() {
        var e = /[^.]+$/.exec(Dn && Dn.keys && Dn.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Un = as.toString, ed = jn.call(Fe), td = Se._, rd = ya("^" + jn.call(qe).replace(pt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), qn = sr ? j.Buffer : r, mi = j.Symbol, Mn = j.Uint8Array, Pu = qn ? qn.allocUnsafe : r, Ln = Eu(Fe.getPrototypeOf, Fe), Su = Fe.create, Ou = as.propertyIsEnumerable, zn = Cn.splice, Ru = mi ? mi.isConcatSpreadable : r, Ts = mi ? mi.iterator : r, ji = mi ? mi.toStringTag : r, kn = function() {
        try {
          var e = zi(Fe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), id = j.clearTimeout !== Se.clearTimeout && j.clearTimeout, sd = Z && Z.now !== Se.Date.now && Z.now, nd = j.setTimeout !== Se.setTimeout && j.setTimeout, Hn = jt.ceil, Kn = jt.floor, va = Fe.getOwnPropertySymbols, od = qn ? qn.isBuffer : r, Tu = j.isFinite, ad = Cn.join, cd = Eu(Fe.keys, Fe), Ut = jt.max, Ft = jt.min, ud = Z.now, hd = j.parseInt, Nu = jt.random, ld = Cn.reverse, ma = zi(j, "DataView"), Ns = zi(j, "Map"), wa = zi(j, "Promise"), cs = zi(j, "Set"), As = zi(j, "WeakMap"), $s = zi(Fe, "create"), Vn = As && new As(), us = {}, fd = ki(ma), pd = ki(Ns), dd = ki(wa), gd = ki(cs), yd = ki(As), Bn = mi ? mi.prototype : r, Cs = Bn ? Bn.valueOf : r, Au = Bn ? Bn.toString : r;
      function p(e) {
        if (yt(e) && !de(e) && !(e instanceof Pe)) {
          if (e instanceof Pr) return e;
          if (qe.call(e, "__wrapped__")) return $h(e);
        }
        return new Pr(e);
      }
      var hs = /* @__PURE__ */ function() {
        function e() {
        }
        return function(i) {
          if (!at(i)) return {};
          if (Su) return Su(i);
          e.prototype = i;
          var o = new e();
          return e.prototype = r, o;
        };
      }();
      function Fn() {
      }
      function Pr(e, i) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = { escape: lt, evaluate: ft, interpolate: ot, variable: "", imports: { _: p } }, p.prototype = Fn.prototype, p.prototype.constructor = p, Pr.prototype = hs(Fn.prototype), Pr.prototype.constructor = Pr;
      function Pe(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = F, this.__views__ = [];
      }
      function vd() {
        var e = new Pe(this.__wrapped__);
        return e.__actions__ = nr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = nr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = nr(this.__views__), e;
      }
      function md() {
        if (this.__filtered__) {
          var e = new Pe(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function wd() {
        var e = this.__wrapped__.value(), i = this.__dir__, o = de(e), c = i < 0, l = o ? e.length : 0, d = Ag(0, l, this.__views__), m = d.start, _ = d.end, S = _ - m, q = c ? _ : m - 1, M = this.__iteratees__, k = M.length, W = 0, ee = Ft(S, this.__takeCount__);
        if (!o || !c && l == S && ee == S) return th(e, this.__actions__);
        var ne = [];
        e: for (; S-- && W < ee; ) {
          q += i;
          for (var we = -1, oe = e[q]; ++we < k; ) {
            var Ie = M[we], Oe = Ie.iteratee, mr = Ie.type, er = Oe(oe);
            if (mr == L) oe = er;
            else if (!er) {
              if (mr == N) continue e;
              break e;
            }
          }
          ne[W++] = oe;
        }
        return ne;
      }
      Pe.prototype = hs(Fn.prototype), Pe.prototype.constructor = Pe;
      function Ui(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var c = e[i];
          this.set(c[0], c[1]);
        }
      }
      function bd() {
        this.__data__ = $s ? $s(null) : {}, this.size = 0;
      }
      function _d(e) {
        var i = this.has(e) && delete this.__data__[e];
        return this.size -= i ? 1 : 0, i;
      }
      function Ed(e) {
        var i = this.__data__;
        if ($s) {
          var o = i[e];
          return o === w ? r : o;
        }
        return qe.call(i, e) ? i[e] : r;
      }
      function Id(e) {
        var i = this.__data__;
        return $s ? i[e] !== r : qe.call(i, e);
      }
      function xd(e, i) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = $s && i === r ? w : i, this;
      }
      Ui.prototype.clear = bd, Ui.prototype.delete = _d, Ui.prototype.get = Ed, Ui.prototype.has = Id, Ui.prototype.set = xd;
      function ei(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var c = e[i];
          this.set(c[0], c[1]);
        }
      }
      function Pd() {
        this.__data__ = [], this.size = 0;
      }
      function Sd(e) {
        var i = this.__data__, o = Gn(i, e);
        if (o < 0) return !1;
        var c = i.length - 1;
        return o == c ? i.pop() : zn.call(i, o, 1), --this.size, !0;
      }
      function Od(e) {
        var i = this.__data__, o = Gn(i, e);
        return o < 0 ? r : i[o][1];
      }
      function Rd(e) {
        return Gn(this.__data__, e) > -1;
      }
      function Td(e, i) {
        var o = this.__data__, c = Gn(o, e);
        return c < 0 ? (++this.size, o.push([e, i])) : o[c][1] = i, this;
      }
      ei.prototype.clear = Pd, ei.prototype.delete = Sd, ei.prototype.get = Od, ei.prototype.has = Rd, ei.prototype.set = Td;
      function ti(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var c = e[i];
          this.set(c[0], c[1]);
        }
      }
      function Nd() {
        this.size = 0, this.__data__ = { hash: new Ui(), map: new (Ns || ei)(), string: new Ui() };
      }
      function Ad(e) {
        var i = no(this, e).delete(e);
        return this.size -= i ? 1 : 0, i;
      }
      function $d(e) {
        return no(this, e).get(e);
      }
      function Cd(e) {
        return no(this, e).has(e);
      }
      function Dd(e, i) {
        var o = no(this, e), c = o.size;
        return o.set(e, i), this.size += o.size == c ? 0 : 1, this;
      }
      ti.prototype.clear = Nd, ti.prototype.delete = Ad, ti.prototype.get = $d, ti.prototype.has = Cd, ti.prototype.set = Dd;
      function qi(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new ti(); ++i < o; ) this.add(e[i]);
      }
      function jd(e) {
        return this.__data__.set(e, w), this;
      }
      function Ud(e) {
        return this.__data__.has(e);
      }
      qi.prototype.add = qi.prototype.push = jd, qi.prototype.has = Ud;
      function jr(e) {
        var i = this.__data__ = new ei(e);
        this.size = i.size;
      }
      function qd() {
        this.__data__ = new ei(), this.size = 0;
      }
      function Md(e) {
        var i = this.__data__, o = i.delete(e);
        return this.size = i.size, o;
      }
      function Ld(e) {
        return this.__data__.get(e);
      }
      function zd(e) {
        return this.__data__.has(e);
      }
      function kd(e, i) {
        var o = this.__data__;
        if (o instanceof ei) {
          var c = o.__data__;
          if (!Ns || c.length < a - 1) return c.push([e, i]), this.size = ++o.size, this;
          o = this.__data__ = new ti(c);
        }
        return o.set(e, i), this.size = o.size, this;
      }
      jr.prototype.clear = qd, jr.prototype.delete = Md, jr.prototype.get = Ld, jr.prototype.has = zd, jr.prototype.set = kd;
      function $u(e, i) {
        var o = de(e), c = !o && Hi(e), l = !o && !c && Ii(e), d = !o && !c && !l && ds(e), m = o || c || l || d, _ = m ? pa(e.length, Yp) : [], S = _.length;
        for (var q in e) (i || qe.call(e, q)) && !(m && (q == "length" || l && (q == "offset" || q == "parent") || d && (q == "buffer" || q == "byteLength" || q == "byteOffset") || ni(q, S))) && _.push(q);
        return _;
      }
      function Cu(e) {
        var i = e.length;
        return i ? e[Na(0, i - 1)] : r;
      }
      function Hd(e, i) {
        return oo(nr(e), Mi(i, 0, e.length));
      }
      function Kd(e) {
        return oo(nr(e));
      }
      function ba(e, i, o) {
        (o !== r && !Ur(e[i], o) || o === r && !(i in e)) && ri(e, i, o);
      }
      function Ds(e, i, o) {
        var c = e[i];
        (!(qe.call(e, i) && Ur(c, o)) || o === r && !(i in e)) && ri(e, i, o);
      }
      function Gn(e, i) {
        for (var o = e.length; o--; ) if (Ur(e[o][0], i)) return o;
        return -1;
      }
      function Vd(e, i, o, c) {
        return wi(e, function(l, d, m) {
          i(c, l, o(l), m);
        }), c;
      }
      function Du(e, i) {
        return e && Fr(i, Lt(i), e);
      }
      function Bd(e, i) {
        return e && Fr(i, ar(i), e);
      }
      function ri(e, i, o) {
        i == "__proto__" && kn ? kn(e, i, { configurable: !0, enumerable: !0, value: o, writable: !0 }) : e[i] = o;
      }
      function _a(e, i) {
        for (var o = -1, c = i.length, l = T(c), d = e == null; ++o < c; ) l[o] = d ? r : tc(e, i[o]);
        return l;
      }
      function Mi(e, i, o) {
        return e === e && (o !== r && (e = e <= o ? e : o), i !== r && (e = e >= i ? e : i)), e;
      }
      function Sr(e, i, o, c, l, d) {
        var m, _ = i & P, S = i & O, q = i & U;
        if (o && (m = l ? o(e, c, l, d) : o(e)), m !== r) return m;
        if (!at(e)) return e;
        var M = de(e);
        if (M) {
          if (m = Cg(e), !_) return nr(e, m);
        } else {
          var k = Gt(e), W = k == X || k == ae;
          if (Ii(e)) return sh(e, _);
          if (k == xe || k == be || W && !l) {
            if (m = S || W ? {} : Ih(e), !_) return S ? Eg(e, Bd(m, e)) : _g(e, Du(m, e));
          } else {
            if (!ze[k]) return l ? e : {};
            m = Dg(e, k, _);
          }
        }
        d || (d = new jr());
        var ee = d.get(e);
        if (ee) return ee;
        d.set(e, m), Zh(e) ? e.forEach(function(oe) {
          m.add(Sr(oe, i, o, oe, e, d));
        }) : Qh(e) && e.forEach(function(oe, Ie) {
          m.set(Ie, Sr(oe, i, o, Ie, e, d));
        });
        var ne = q ? S ? ka : za : S ? ar : Lt, we = M ? r : ne(e);
        return Ir(we || e, function(oe, Ie) {
          we && (Ie = oe, oe = e[Ie]), Ds(m, Ie, Sr(oe, i, o, Ie, e, d));
        }), m;
      }
      function Fd(e) {
        var i = Lt(e);
        return function(o) {
          return ju(o, e, i);
        };
      }
      function ju(e, i, o) {
        var c = o.length;
        if (e == null) return !c;
        for (e = Fe(e); c--; ) {
          var l = o[c], d = i[l], m = e[l];
          if (m === r && !(l in e) || !d(m)) return !1;
        }
        return !0;
      }
      function Uu(e, i, o) {
        if (typeof e != "function") throw new xr(f);
        return ks(function() {
          e.apply(r, o);
        }, i);
      }
      function js(e, i, o, c) {
        var l = -1, d = Nn, m = !0, _ = e.length, S = [], q = i.length;
        if (!_) return S;
        o && (i = rt(i, gr(o))), c ? (d = aa, m = !1) : i.length >= a && (d = Rs, m = !1, i = new qi(i));
        e: for (; ++l < _; ) {
          var M = e[l], k = o == null ? M : o(M);
          if (M = c || M !== 0 ? M : 0, m && k === k) {
            for (var W = q; W--; ) if (i[W] === k) continue e;
            S.push(M);
          } else d(i, k, c) || S.push(M);
        }
        return S;
      }
      var wi = uh(Br), qu = uh(Ia, !0);
      function Gd(e, i) {
        var o = !0;
        return wi(e, function(c, l, d) {
          return o = !!i(c, l, d), o;
        }), o;
      }
      function Wn(e, i, o) {
        for (var c = -1, l = e.length; ++c < l; ) {
          var d = e[c], m = i(d);
          if (m != null && (_ === r ? m === m && !vr(m) : o(m, _))) var _ = m, S = d;
        }
        return S;
      }
      function Wd(e, i, o, c) {
        var l = e.length;
        for (o = ve(o), o < 0 && (o = -o > l ? 0 : l + o), c = c === r || c > l ? l : ve(c), c < 0 && (c += l), c = o > c ? 0 : el(c); o < c; ) e[o++] = i;
        return e;
      }
      function Mu(e, i) {
        var o = [];
        return wi(e, function(c, l, d) {
          i(c, l, d) && o.push(c);
        }), o;
      }
      function Vt(e, i, o, c, l) {
        var d = -1, m = e.length;
        for (o || (o = Ug), l || (l = []); ++d < m; ) {
          var _ = e[d];
          i > 0 && o(_) ? i > 1 ? Vt(_, i - 1, o, c, l) : yi(l, _) : c || (l[l.length] = _);
        }
        return l;
      }
      var Ea = hh(), Lu = hh(!0);
      function Br(e, i) {
        return e && Ea(e, i, Lt);
      }
      function Ia(e, i) {
        return e && Lu(e, i, Lt);
      }
      function Jn(e, i) {
        return gi(i, function(o) {
          return oi(e[o]);
        });
      }
      function Li(e, i) {
        i = _i(i, e);
        for (var o = 0, c = i.length; e != null && o < c; ) e = e[Gr(i[o++])];
        return o && o == c ? e : r;
      }
      function zu(e, i, o) {
        var c = i(e);
        return de(e) ? c : yi(c, o(e));
      }
      function Zt(e) {
        return e == null ? e === r ? nt : $e : ji && ji in Fe(e) ? Ng(e) : Kg(e);
      }
      function xa(e, i) {
        return e > i;
      }
      function Jd(e, i) {
        return e != null && qe.call(e, i);
      }
      function Qd(e, i) {
        return e != null && i in Fe(e);
      }
      function Yd(e, i, o) {
        return e >= Ft(i, o) && e < Ut(i, o);
      }
      function Pa(e, i, o) {
        for (var c = o ? aa : Nn, l = e[0].length, d = e.length, m = d, _ = T(d), S = 1 / 0, q = []; m--; ) {
          var M = e[m];
          m && i && (M = rt(M, gr(i))), S = Ft(M.length, S), _[m] = !o && (i || l >= 120 && M.length >= 120) ? new qi(m && M) : r;
        }
        M = e[0];
        var k = -1, W = _[0];
        e: for (; ++k < l && q.length < S; ) {
          var ee = M[k], ne = i ? i(ee) : ee;
          if (ee = o || ee !== 0 ? ee : 0, !(W ? Rs(W, ne) : c(q, ne, o))) {
            for (m = d; --m; ) {
              var we = _[m];
              if (!(we ? Rs(we, ne) : c(e[m], ne, o))) continue e;
            }
            W && W.push(ne), q.push(ee);
          }
        }
        return q;
      }
      function Zd(e, i, o, c) {
        return Br(e, function(l, d, m) {
          i(c, o(l), d, m);
        }), c;
      }
      function Us(e, i, o) {
        i = _i(i, e), e = Oh(e, i);
        var c = e == null ? e : e[Gr(Rr(i))];
        return c == null ? r : Mt(c, e, o);
      }
      function ku(e) {
        return yt(e) && Zt(e) == be;
      }
      function Xd(e) {
        return yt(e) && Zt(e) == Ae;
      }
      function eg(e) {
        return yt(e) && Zt(e) == R;
      }
      function qs(e, i, o, c, l) {
        return e === i ? !0 : e == null || i == null || !yt(e) && !yt(i) ? e !== e && i !== i : tg(e, i, o, c, qs, l);
      }
      function tg(e, i, o, c, l, d) {
        var m = de(e), _ = de(i), S = m ? It : Gt(e), q = _ ? It : Gt(i);
        S = S == be ? xe : S, q = q == be ? xe : q;
        var M = S == xe, k = q == xe, W = S == q;
        if (W && Ii(e)) {
          if (!Ii(i)) return !1;
          m = !0, M = !1;
        }
        if (W && !M) return d || (d = new jr()), m || ds(e) ? bh(e, i, o, c, l, d) : Rg(e, i, S, o, c, l, d);
        if (!(o & $)) {
          var ee = M && qe.call(e, "__wrapped__"), ne = k && qe.call(i, "__wrapped__");
          if (ee || ne) {
            var we = ee ? e.value() : e, oe = ne ? i.value() : i;
            return d || (d = new jr()), l(we, oe, o, c, d);
          }
        }
        return W ? (d || (d = new jr()), Tg(e, i, o, c, l, d)) : !1;
      }
      function rg(e) {
        return yt(e) && Gt(e) == me;
      }
      function Sa(e, i, o, c) {
        var l = o.length, d = l, m = !c;
        if (e == null) return !d;
        for (e = Fe(e); l--; ) {
          var _ = o[l];
          if (m && _[2] ? _[1] !== e[_[0]] : !(_[0] in e)) return !1;
        }
        for (; ++l < d; ) {
          _ = o[l];
          var S = _[0], q = e[S], M = _[1];
          if (m && _[2]) {
            if (q === r && !(S in e)) return !1;
          } else {
            var k = new jr();
            if (c) var W = c(q, M, S, e, i, k);
            if (!(W === r ? qs(M, q, $ | V, c, k) : W)) return !1;
          }
        }
        return !0;
      }
      function Hu(e) {
        if (!at(e) || Mg(e)) return !1;
        var i = oi(e) ? rd : Bo;
        return i.test(ki(e));
      }
      function ig(e) {
        return yt(e) && Zt(e) == st;
      }
      function sg(e) {
        return yt(e) && Gt(e) == De;
      }
      function ng(e) {
        return yt(e) && fo(e.length) && !!Ke[Zt(e)];
      }
      function Ku(e) {
        return typeof e == "function" ? e : e == null ? cr : typeof e == "object" ? de(e) ? Fu(e[0], e[1]) : Bu(e) : ll(e);
      }
      function Oa(e) {
        if (!zs(e)) return cd(e);
        var i = [];
        for (var o in Fe(e)) qe.call(e, o) && o != "constructor" && i.push(o);
        return i;
      }
      function og(e) {
        if (!at(e)) return Hg(e);
        var i = zs(e), o = [];
        for (var c in e) c == "constructor" && (i || !qe.call(e, c)) || o.push(c);
        return o;
      }
      function Ra(e, i) {
        return e < i;
      }
      function Vu(e, i) {
        var o = -1, c = or(e) ? T(e.length) : [];
        return wi(e, function(l, d, m) {
          c[++o] = i(l, d, m);
        }), c;
      }
      function Bu(e) {
        var i = Ka(e);
        return i.length == 1 && i[0][2] ? Ph(i[0][0], i[0][1]) : function(o) {
          return o === e || Sa(o, e, i);
        };
      }
      function Fu(e, i) {
        return Ba(e) && xh(i) ? Ph(Gr(e), i) : function(o) {
          var c = tc(o, e);
          return c === r && c === i ? rc(o, e) : qs(i, c, $ | V);
        };
      }
      function Qn(e, i, o, c, l) {
        e !== i && Ea(i, function(d, m) {
          if (l || (l = new jr()), at(d)) ag(e, i, m, o, Qn, c, l);
          else {
            var _ = c ? c(Ga(e, m), d, m + "", e, i, l) : r;
            _ === r && (_ = d), ba(e, m, _);
          }
        }, ar);
      }
      function ag(e, i, o, c, l, d, m) {
        var _ = Ga(e, o), S = Ga(i, o), q = m.get(S);
        if (q) {
          ba(e, o, q);
          return;
        }
        var M = d ? d(_, S, o + "", e, i, m) : r, k = M === r;
        if (k) {
          var W = de(S), ee = !W && Ii(S), ne = !W && !ee && ds(S);
          M = S, W || ee || ne ? de(_) ? M = _ : bt(_) ? M = nr(_) : ee ? (k = !1, M = sh(S, !0)) : ne ? (k = !1, M = nh(S, !0)) : M = [] : Hs(S) || Hi(S) ? (M = _, Hi(_) ? M = tl(_) : (!at(_) || oi(_)) && (M = Ih(S))) : k = !1;
        }
        k && (m.set(S, M), l(M, S, c, d, m), m.delete(S)), ba(e, o, M);
      }
      function Gu(e, i) {
        var o = e.length;
        if (o) return i += i < 0 ? o : 0, ni(i, o) ? e[i] : r;
      }
      function Wu(e, i, o) {
        i.length ? i = rt(i, function(d) {
          return de(d) ? function(m) {
            return Li(m, d.length === 1 ? d[0] : d);
          } : d;
        }) : i = [cr];
        var c = -1;
        i = rt(i, gr(se()));
        var l = Vu(e, function(d, m, _) {
          var S = rt(i, function(q) {
            return q(d);
          });
          return { criteria: S, index: ++c, value: d };
        });
        return Dp(l, function(d, m) {
          return bg(d, m, o);
        });
      }
      function cg(e, i) {
        return Ju(e, i, function(o, c) {
          return rc(e, c);
        });
      }
      function Ju(e, i, o) {
        for (var c = -1, l = i.length, d = {}; ++c < l; ) {
          var m = i[c], _ = Li(e, m);
          o(_, m) && Ms(d, _i(m, e), _);
        }
        return d;
      }
      function ug(e) {
        return function(i) {
          return Li(i, e);
        };
      }
      function Ta(e, i, o, c) {
        var l = c ? Cp : is, d = -1, m = i.length, _ = e;
        for (e === i && (i = nr(i)), o && (_ = rt(e, gr(o))); ++d < m; ) for (var S = 0, q = i[d], M = o ? o(q) : q; (S = l(_, M, S, c)) > -1; ) _ !== e && zn.call(_, S, 1), zn.call(e, S, 1);
        return e;
      }
      function Qu(e, i) {
        for (var o = e ? i.length : 0, c = o - 1; o--; ) {
          var l = i[o];
          if (o == c || l !== d) {
            var d = l;
            ni(l) ? zn.call(e, l, 1) : Ca(e, l);
          }
        }
        return e;
      }
      function Na(e, i) {
        return e + Kn(Nu() * (i - e + 1));
      }
      function hg(e, i, o, c) {
        for (var l = -1, d = Ut(Hn((i - e) / (o || 1)), 0), m = T(d); d--; ) m[c ? d : ++l] = e, e += o;
        return m;
      }
      function Aa(e, i) {
        var o = "";
        if (!e || i < 1 || i > Q) return o;
        do
          i % 2 && (o += e), i = Kn(i / 2), i && (e += e);
        while (i);
        return o;
      }
      function _e(e, i) {
        return Wa(Sh(e, i, cr), e + "");
      }
      function lg(e) {
        return Cu(gs(e));
      }
      function fg(e, i) {
        var o = gs(e);
        return oo(o, Mi(i, 0, o.length));
      }
      function Ms(e, i, o, c) {
        if (!at(e)) return e;
        i = _i(i, e);
        for (var l = -1, d = i.length, m = d - 1, _ = e; _ != null && ++l < d; ) {
          var S = Gr(i[l]), q = o;
          if (S === "__proto__" || S === "constructor" || S === "prototype") return e;
          if (l != m) {
            var M = _[S];
            q = c ? c(M, S, _) : r, q === r && (q = at(M) ? M : ni(i[l + 1]) ? [] : {});
          }
          Ds(_, S, q), _ = _[S];
        }
        return e;
      }
      var Yu = Vn ? function(e, i) {
        return Vn.set(e, i), e;
      } : cr, pg = kn ? function(e, i) {
        return kn(e, "toString", { configurable: !0, enumerable: !1, value: sc(i), writable: !0 });
      } : cr;
      function dg(e) {
        return oo(gs(e));
      }
      function Or(e, i, o) {
        var c = -1, l = e.length;
        i < 0 && (i = -i > l ? 0 : l + i), o = o > l ? l : o, o < 0 && (o += l), l = i > o ? 0 : o - i >>> 0, i >>>= 0;
        for (var d = T(l); ++c < l; ) d[c] = e[c + i];
        return d;
      }
      function gg(e, i) {
        var o;
        return wi(e, function(c, l, d) {
          return o = i(c, l, d), !o;
        }), !!o;
      }
      function Yn(e, i, o) {
        var c = 0, l = e == null ? c : e.length;
        if (typeof i == "number" && i === i && l <= ke) {
          for (; c < l; ) {
            var d = c + l >>> 1, m = e[d];
            m !== null && !vr(m) && (o ? m <= i : m < i) ? c = d + 1 : l = d;
          }
          return l;
        }
        return $a(e, i, cr, o);
      }
      function $a(e, i, o, c) {
        var l = 0, d = e == null ? 0 : e.length;
        if (d === 0) return 0;
        i = o(i);
        for (var m = i !== i, _ = i === null, S = vr(i), q = i === r; l < d; ) {
          var M = Kn((l + d) / 2), k = o(e[M]), W = k !== r, ee = k === null, ne = k === k, we = vr(k);
          if (m) var oe = c || ne;
          else q ? oe = ne && (c || W) : _ ? oe = ne && W && (c || !ee) : S ? oe = ne && W && !ee && (c || !we) : ee || we ? oe = !1 : oe = c ? k <= i : k < i;
          oe ? l = M + 1 : d = M;
        }
        return Ft(d, ct);
      }
      function Zu(e, i) {
        for (var o = -1, c = e.length, l = 0, d = []; ++o < c; ) {
          var m = e[o], _ = i ? i(m) : m;
          if (!o || !Ur(_, S)) {
            var S = _;
            d[l++] = m === 0 ? 0 : m;
          }
        }
        return d;
      }
      function Xu(e) {
        return typeof e == "number" ? e : vr(e) ? K : +e;
      }
      function yr(e) {
        if (typeof e == "string") return e;
        if (de(e)) return rt(e, yr) + "";
        if (vr(e)) return Au ? Au.call(e) : "";
        var i = e + "";
        return i == "0" && 1 / e == -Te ? "-0" : i;
      }
      function bi(e, i, o) {
        var c = -1, l = Nn, d = e.length, m = !0, _ = [], S = _;
        if (o) m = !1, l = aa;
        else if (d >= a) {
          var q = i ? null : Sg(e);
          if (q) return $n(q);
          m = !1, l = Rs, S = new qi();
        } else S = i ? [] : _;
        e: for (; ++c < d; ) {
          var M = e[c], k = i ? i(M) : M;
          if (M = o || M !== 0 ? M : 0, m && k === k) {
            for (var W = S.length; W--; ) if (S[W] === k) continue e;
            i && S.push(k), _.push(M);
          } else l(S, k, o) || (S !== _ && S.push(k), _.push(M));
        }
        return _;
      }
      function Ca(e, i) {
        return i = _i(i, e), e = Oh(e, i), e == null || delete e[Gr(Rr(i))];
      }
      function eh(e, i, o, c) {
        return Ms(e, i, o(Li(e, i)), c);
      }
      function Zn(e, i, o, c) {
        for (var l = e.length, d = c ? l : -1; (c ? d-- : ++d < l) && i(e[d], d, e); ) ;
        return o ? Or(e, c ? 0 : d, c ? d + 1 : l) : Or(e, c ? d + 1 : 0, c ? l : d);
      }
      function th(e, i) {
        var o = e;
        return o instanceof Pe && (o = o.value()), ca(i, function(c, l) {
          return l.func.apply(l.thisArg, yi([c], l.args));
        }, o);
      }
      function Da(e, i, o) {
        var c = e.length;
        if (c < 2) return c ? bi(e[0]) : [];
        for (var l = -1, d = T(c); ++l < c; ) for (var m = e[l], _ = -1; ++_ < c; ) _ != l && (d[l] = js(d[l] || m, e[_], i, o));
        return bi(Vt(d, 1), i, o);
      }
      function rh(e, i, o) {
        for (var c = -1, l = e.length, d = i.length, m = {}; ++c < l; ) {
          var _ = c < d ? i[c] : r;
          o(m, e[c], _);
        }
        return m;
      }
      function ja(e) {
        return bt(e) ? e : [];
      }
      function Ua(e) {
        return typeof e == "function" ? e : cr;
      }
      function _i(e, i) {
        return de(e) ? e : Ba(e, i) ? [e] : Ah(je(e));
      }
      var yg = _e;
      function Ei(e, i, o) {
        var c = e.length;
        return o = o === r ? c : o, !i && o >= c ? e : Or(e, i, o);
      }
      var ih = id || function(e) {
        return Se.clearTimeout(e);
      };
      function sh(e, i) {
        if (i) return e.slice();
        var o = e.length, c = Pu ? Pu(o) : new e.constructor(o);
        return e.copy(c), c;
      }
      function qa(e) {
        var i = new e.constructor(e.byteLength);
        return new Mn(i).set(new Mn(e)), i;
      }
      function vg(e, i) {
        var o = i ? qa(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function mg(e) {
        var i = new e.constructor(e.source, _r.exec(e));
        return i.lastIndex = e.lastIndex, i;
      }
      function wg(e) {
        return Cs ? Fe(Cs.call(e)) : {};
      }
      function nh(e, i) {
        var o = i ? qa(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function oh(e, i) {
        if (e !== i) {
          var o = e !== r, c = e === null, l = e === e, d = vr(e), m = i !== r, _ = i === null, S = i === i, q = vr(i);
          if (!_ && !q && !d && e > i || d && m && S && !_ && !q || c && m && S || !o && S || !l) return 1;
          if (!c && !d && !q && e < i || q && o && l && !c && !d || _ && o && l || !m && l || !S) return -1;
        }
        return 0;
      }
      function bg(e, i, o) {
        for (var c = -1, l = e.criteria, d = i.criteria, m = l.length, _ = o.length; ++c < m; ) {
          var S = oh(l[c], d[c]);
          if (S) {
            if (c >= _) return S;
            var q = o[c];
            return S * (q == "desc" ? -1 : 1);
          }
        }
        return e.index - i.index;
      }
      function ah(e, i, o, c) {
        for (var l = -1, d = e.length, m = o.length, _ = -1, S = i.length, q = Ut(d - m, 0), M = T(S + q), k = !c; ++_ < S; ) M[_] = i[_];
        for (; ++l < m; ) (k || l < d) && (M[o[l]] = e[l]);
        for (; q--; ) M[_++] = e[l++];
        return M;
      }
      function ch(e, i, o, c) {
        for (var l = -1, d = e.length, m = -1, _ = o.length, S = -1, q = i.length, M = Ut(d - _, 0), k = T(M + q), W = !c; ++l < M; ) k[l] = e[l];
        for (var ee = l; ++S < q; ) k[ee + S] = i[S];
        for (; ++m < _; ) (W || l < d) && (k[ee + o[m]] = e[l++]);
        return k;
      }
      function nr(e, i) {
        var o = -1, c = e.length;
        for (i || (i = T(c)); ++o < c; ) i[o] = e[o];
        return i;
      }
      function Fr(e, i, o, c) {
        var l = !o;
        o || (o = {});
        for (var d = -1, m = i.length; ++d < m; ) {
          var _ = i[d], S = c ? c(o[_], e[_], _, o, e) : r;
          S === r && (S = e[_]), l ? ri(o, _, S) : Ds(o, _, S);
        }
        return o;
      }
      function _g(e, i) {
        return Fr(e, Va(e), i);
      }
      function Eg(e, i) {
        return Fr(e, _h(e), i);
      }
      function Xn(e, i) {
        return function(o, c) {
          var l = de(o) ? Op : Vd, d = i ? i() : {};
          return l(o, e, se(c, 2), d);
        };
      }
      function ls(e) {
        return _e(function(i, o) {
          var c = -1, l = o.length, d = l > 1 ? o[l - 1] : r, m = l > 2 ? o[2] : r;
          for (d = e.length > 3 && typeof d == "function" ? (l--, d) : r, m && Xt(o[0], o[1], m) && (d = l < 3 ? r : d, l = 1), i = Fe(i); ++c < l; ) {
            var _ = o[c];
            _ && e(i, _, c, d);
          }
          return i;
        });
      }
      function uh(e, i) {
        return function(o, c) {
          if (o == null) return o;
          if (!or(o)) return e(o, c);
          for (var l = o.length, d = i ? l : -1, m = Fe(o); (i ? d-- : ++d < l) && c(m[d], d, m) !== !1; ) ;
          return o;
        };
      }
      function hh(e) {
        return function(i, o, c) {
          for (var l = -1, d = Fe(i), m = c(i), _ = m.length; _--; ) {
            var S = m[e ? _ : ++l];
            if (o(d[S], S, d) === !1) break;
          }
          return i;
        };
      }
      function Ig(e, i, o) {
        var c = i & te, l = Ls(e);
        function d() {
          var m = this && this !== Se && this instanceof d ? l : e;
          return m.apply(c ? o : this, arguments);
        }
        return d;
      }
      function lh(e) {
        return function(i) {
          i = je(i);
          var o = ss(i) ? Dr(i) : r, c = o ? o[0] : i.charAt(0), l = o ? Ei(o, 1).join("") : i.slice(1);
          return c[e]() + l;
        };
      }
      function fs(e) {
        return function(i) {
          return ca(ul(cl(i).replace(Ss, "")), e, "");
        };
      }
      function Ls(e) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new e();
            case 1:
              return new e(i[0]);
            case 2:
              return new e(i[0], i[1]);
            case 3:
              return new e(i[0], i[1], i[2]);
            case 4:
              return new e(i[0], i[1], i[2], i[3]);
            case 5:
              return new e(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var o = hs(e.prototype), c = e.apply(o, i);
          return at(c) ? c : o;
        };
      }
      function xg(e, i, o) {
        var c = Ls(e);
        function l() {
          for (var d = arguments.length, m = T(d), _ = d, S = ps(l); _--; ) m[_] = arguments[_];
          var q = d < 3 && m[0] !== S && m[d - 1] !== S ? [] : vi(m, S);
          if (d -= q.length, d < o) return yh(e, i, eo, l.placeholder, r, m, q, r, r, o - d);
          var M = this && this !== Se && this instanceof l ? c : e;
          return Mt(M, this, m);
        }
        return l;
      }
      function fh(e) {
        return function(i, o, c) {
          var l = Fe(i);
          if (!or(i)) {
            var d = se(o, 3);
            i = Lt(i), o = function(_) {
              return d(l[_], _, l);
            };
          }
          var m = e(i, o, c);
          return m > -1 ? l[d ? i[m] : m] : r;
        };
      }
      function ph(e) {
        return si(function(i) {
          var o = i.length, c = o, l = Pr.prototype.thru;
          for (e && i.reverse(); c--; ) {
            var d = i[c];
            if (typeof d != "function") throw new xr(f);
            if (l && !m && so(d) == "wrapper") var m = new Pr([], !0);
          }
          for (c = m ? c : o; ++c < o; ) {
            d = i[c];
            var _ = so(d), S = _ == "wrapper" ? Ha(d) : r;
            S && Fa(S[0]) && S[1] == (H | ue | fe | J) && !S[4].length && S[9] == 1 ? m = m[so(S[0])].apply(m, S[3]) : m = d.length == 1 && Fa(d) ? m[_]() : m.thru(d);
          }
          return function() {
            var q = arguments, M = q[0];
            if (m && q.length == 1 && de(M)) return m.plant(M).value();
            for (var k = 0, W = o ? i[k].apply(this, q) : M; ++k < o; ) W = i[k].call(this, W);
            return W;
          };
        });
      }
      function eo(e, i, o, c, l, d, m, _, S, q) {
        var M = i & H, k = i & te, W = i & ge, ee = i & (ue | le), ne = i & ye, we = W ? r : Ls(e);
        function oe() {
          for (var Ie = arguments.length, Oe = T(Ie), mr = Ie; mr--; ) Oe[mr] = arguments[mr];
          if (ee) var er = ps(oe), wr = Up(Oe, er);
          if (c && (Oe = ah(Oe, c, l, ee)), d && (Oe = ch(Oe, d, m, ee)), Ie -= wr, ee && Ie < q) {
            var _t = vi(Oe, er);
            return yh(e, i, eo, oe.placeholder, o, Oe, _t, _, S, q - Ie);
          }
          var qr = k ? o : this, ci = W ? qr[e] : e;
          return Ie = Oe.length, _ ? Oe = Vg(Oe, _) : ne && Ie > 1 && Oe.reverse(), M && S < Ie && (Oe.length = S), this && this !== Se && this instanceof oe && (ci = we || Ls(ci)), ci.apply(qr, Oe);
        }
        return oe;
      }
      function dh(e, i) {
        return function(o, c) {
          return Zd(o, e, i(c), {});
        };
      }
      function to(e, i) {
        return function(o, c) {
          var l;
          if (o === r && c === r) return i;
          if (o !== r && (l = o), c !== r) {
            if (l === r) return c;
            typeof o == "string" || typeof c == "string" ? (o = yr(o), c = yr(c)) : (o = Xu(o), c = Xu(c)), l = e(o, c);
          }
          return l;
        };
      }
      function Ma(e) {
        return si(function(i) {
          return i = rt(i, gr(se())), _e(function(o) {
            var c = this;
            return e(i, function(l) {
              return Mt(l, c, o);
            });
          });
        });
      }
      function ro(e, i) {
        i = i === r ? " " : yr(i);
        var o = i.length;
        if (o < 2) return o ? Aa(i, e) : i;
        var c = Aa(i, Hn(e / ns(i)));
        return ss(i) ? Ei(Dr(c), 0, e).join("") : c.slice(0, e);
      }
      function Pg(e, i, o, c) {
        var l = i & te, d = Ls(e);
        function m() {
          for (var _ = -1, S = arguments.length, q = -1, M = c.length, k = T(M + S), W = this && this !== Se && this instanceof m ? d : e; ++q < M; ) k[q] = c[q];
          for (; S--; ) k[q++] = arguments[++_];
          return Mt(W, l ? o : this, k);
        }
        return m;
      }
      function gh(e) {
        return function(i, o, c) {
          return c && typeof c != "number" && Xt(i, o, c) && (o = c = r), i = ai(i), o === r ? (o = i, i = 0) : o = ai(o), c = c === r ? i < o ? 1 : -1 : ai(c), hg(i, o, c, e);
        };
      }
      function io(e) {
        return function(i, o) {
          return typeof i == "string" && typeof o == "string" || (i = Tr(i), o = Tr(o)), e(i, o);
        };
      }
      function yh(e, i, o, c, l, d, m, _, S, q) {
        var M = i & ue, k = M ? m : r, W = M ? r : m, ee = M ? d : r, ne = M ? r : d;
        i |= M ? fe : D, i &= ~(M ? D : fe), i & ce || (i &= ~(te | ge));
        var we = [e, i, l, ee, k, ne, W, _, S, q], oe = o.apply(r, we);
        return Fa(e) && Rh(oe, we), oe.placeholder = c, Th(oe, e, i);
      }
      function La(e) {
        var i = jt[e];
        return function(o, c) {
          if (o = Tr(o), c = c == null ? 0 : Ft(ve(c), 292), c && Tu(o)) {
            var l = (je(o) + "e").split("e"), d = i(l[0] + "e" + (+l[1] + c));
            return l = (je(d) + "e").split("e"), +(l[0] + "e" + (+l[1] - c));
          }
          return i(o);
        };
      }
      var Sg = cs && 1 / $n(new cs([, -0]))[1] == Te ? function(e) {
        return new cs(e);
      } : ac;
      function vh(e) {
        return function(i) {
          var o = Gt(i);
          return o == me ? ga(i) : o == De ? Kp(i) : jp(i, e(i));
        };
      }
      function ii(e, i, o, c, l, d, m, _) {
        var S = i & ge;
        if (!S && typeof e != "function") throw new xr(f);
        var q = c ? c.length : 0;
        if (q || (i &= ~(fe | D), c = l = r), m = m === r ? m : Ut(ve(m), 0), _ = _ === r ? _ : ve(_), q -= l ? l.length : 0, i & D) {
          var M = c, k = l;
          c = l = r;
        }
        var W = S ? r : Ha(e), ee = [e, i, o, c, l, M, k, d, m, _];
        if (W && kg(ee, W), e = ee[0], i = ee[1], o = ee[2], c = ee[3], l = ee[4], _ = ee[9] = ee[9] === r ? S ? 0 : e.length : Ut(ee[9] - q, 0), !_ && i & (ue | le) && (i &= ~(ue | le)), !i || i == te) var ne = Ig(e, i, o);
        else i == ue || i == le ? ne = xg(e, i, _) : (i == fe || i == (te | fe)) && !l.length ? ne = Pg(e, i, o, c) : ne = eo.apply(r, ee);
        var we = W ? Yu : Rh;
        return Th(we(ne, ee), e, i);
      }
      function mh(e, i, o, c) {
        return e === r || Ur(e, as[o]) && !qe.call(c, o) ? i : e;
      }
      function wh(e, i, o, c, l, d) {
        return at(e) && at(i) && (d.set(i, e), Qn(e, i, r, wh, d), d.delete(i)), e;
      }
      function Og(e) {
        return Hs(e) ? r : e;
      }
      function bh(e, i, o, c, l, d) {
        var m = o & $, _ = e.length, S = i.length;
        if (_ != S && !(m && S > _)) return !1;
        var q = d.get(e), M = d.get(i);
        if (q && M) return q == i && M == e;
        var k = -1, W = !0, ee = o & V ? new qi() : r;
        for (d.set(e, i), d.set(i, e); ++k < _; ) {
          var ne = e[k], we = i[k];
          if (c) var oe = m ? c(we, ne, k, i, e, d) : c(ne, we, k, e, i, d);
          if (oe !== r) {
            if (oe) continue;
            W = !1;
            break;
          }
          if (ee) {
            if (!ua(i, function(Ie, Oe) {
              if (!Rs(ee, Oe) && (ne === Ie || l(ne, Ie, o, c, d))) return ee.push(Oe);
            })) {
              W = !1;
              break;
            }
          } else if (!(ne === we || l(ne, we, o, c, d))) {
            W = !1;
            break;
          }
        }
        return d.delete(e), d.delete(i), W;
      }
      function Rg(e, i, o, c, l, d, m) {
        switch (o) {
          case He:
            if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset) return !1;
            e = e.buffer, i = i.buffer;
          case Ae:
            return !(e.byteLength != i.byteLength || !d(new Mn(e), new Mn(i)));
          case A:
          case R:
          case Ne:
            return Ur(+e, +i);
          case E:
            return e.name == i.name && e.message == i.message;
          case st:
          case We:
            return e == i + "";
          case me:
            var _ = ga;
          case De:
            var S = c & $;
            if (_ || (_ = $n), e.size != i.size && !S) return !1;
            var q = m.get(e);
            if (q) return q == i;
            c |= V, m.set(e, i);
            var M = bh(_(e), _(i), c, l, d, m);
            return m.delete(e), M;
          case Je:
            if (Cs) return Cs.call(e) == Cs.call(i);
        }
        return !1;
      }
      function Tg(e, i, o, c, l, d) {
        var m = o & $, _ = za(e), S = _.length, q = za(i), M = q.length;
        if (S != M && !m) return !1;
        for (var k = S; k--; ) {
          var W = _[k];
          if (!(m ? W in i : qe.call(i, W))) return !1;
        }
        var ee = d.get(e), ne = d.get(i);
        if (ee && ne) return ee == i && ne == e;
        var we = !0;
        d.set(e, i), d.set(i, e);
        for (var oe = m; ++k < S; ) {
          W = _[k];
          var Ie = e[W], Oe = i[W];
          if (c) var mr = m ? c(Oe, Ie, W, i, e, d) : c(Ie, Oe, W, e, i, d);
          if (!(mr === r ? Ie === Oe || l(Ie, Oe, o, c, d) : mr)) {
            we = !1;
            break;
          }
          oe || (oe = W == "constructor");
        }
        if (we && !oe) {
          var er = e.constructor, wr = i.constructor;
          er != wr && "constructor" in e && "constructor" in i && !(typeof er == "function" && er instanceof er && typeof wr == "function" && wr instanceof wr) && (we = !1);
        }
        return d.delete(e), d.delete(i), we;
      }
      function si(e) {
        return Wa(Sh(e, r, jh), e + "");
      }
      function za(e) {
        return zu(e, Lt, Va);
      }
      function ka(e) {
        return zu(e, ar, _h);
      }
      var Ha = Vn ? function(e) {
        return Vn.get(e);
      } : ac;
      function so(e) {
        for (var i = e.name + "", o = us[i], c = qe.call(us, i) ? o.length : 0; c--; ) {
          var l = o[c], d = l.func;
          if (d == null || d == e) return l.name;
        }
        return i;
      }
      function ps(e) {
        var i = qe.call(p, "placeholder") ? p : e;
        return i.placeholder;
      }
      function se() {
        var e = p.iteratee || nc;
        return e = e === nc ? Ku : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function no(e, i) {
        var o = e.__data__;
        return qg(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map;
      }
      function Ka(e) {
        for (var i = Lt(e), o = i.length; o--; ) {
          var c = i[o], l = e[c];
          i[o] = [c, l, xh(l)];
        }
        return i;
      }
      function zi(e, i) {
        var o = zp(e, i);
        return Hu(o) ? o : r;
      }
      function Ng(e) {
        var i = qe.call(e, ji), o = e[ji];
        try {
          e[ji] = r;
          var c = !0;
        } catch {
        }
        var l = Un.call(e);
        return c && (i ? e[ji] = o : delete e[ji]), l;
      }
      var Va = va ? function(e) {
        return e == null ? [] : (e = Fe(e), gi(va(e), function(i) {
          return Ou.call(e, i);
        }));
      } : cc, _h = va ? function(e) {
        for (var i = []; e; ) yi(i, Va(e)), e = Ln(e);
        return i;
      } : cc, Gt = Zt;
      (ma && Gt(new ma(new ArrayBuffer(1))) != He || Ns && Gt(new Ns()) != me || wa && Gt(wa.resolve()) != xt || cs && Gt(new cs()) != De || As && Gt(new As()) != Le) && (Gt = function(e) {
        var i = Zt(e), o = i == xe ? e.constructor : r, c = o ? ki(o) : "";
        if (c) switch (c) {
          case fd:
            return He;
          case pd:
            return me;
          case dd:
            return xt;
          case gd:
            return De;
          case yd:
            return Le;
        }
        return i;
      });
      function Ag(e, i, o) {
        for (var c = -1, l = o.length; ++c < l; ) {
          var d = o[c], m = d.size;
          switch (d.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              i -= m;
              break;
            case "take":
              i = Ft(i, e + m);
              break;
            case "takeRight":
              e = Ut(e, i - m);
              break;
          }
        }
        return { start: e, end: i };
      }
      function $g(e) {
        var i = e.match(Ge);
        return i ? i[1].split(Tt) : [];
      }
      function Eh(e, i, o) {
        i = _i(i, e);
        for (var c = -1, l = i.length, d = !1; ++c < l; ) {
          var m = Gr(i[c]);
          if (!(d = e != null && o(e, m))) break;
          e = e[m];
        }
        return d || ++c != l ? d : (l = e == null ? 0 : e.length, !!l && fo(l) && ni(m, l) && (de(e) || Hi(e)));
      }
      function Cg(e) {
        var i = e.length, o = new e.constructor(i);
        return i && typeof e[0] == "string" && qe.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function Ih(e) {
        return typeof e.constructor == "function" && !zs(e) ? hs(Ln(e)) : {};
      }
      function Dg(e, i, o) {
        var c = e.constructor;
        switch (i) {
          case Ae:
            return qa(e);
          case A:
          case R:
            return new c(+e);
          case He:
            return vg(e, o);
          case ut:
          case Ue:
          case Pt:
          case Dt:
          case Ht:
          case Kt:
          case qt:
          case Jt:
          case ir:
            return nh(e, o);
          case me:
            return new c();
          case Ne:
          case We:
            return new c(e);
          case st:
            return mg(e);
          case De:
            return new c();
          case Je:
            return wg(e);
        }
      }
      function jg(e, i) {
        var o = i.length;
        if (!o) return e;
        var c = o - 1;
        return i[c] = (o > 1 ? "& " : "") + i[c], i = i.join(o > 2 ? ", " : " "), e.replace(gt, `{
/* [wrapped with ` + i + `] */
`);
      }
      function Ug(e) {
        return de(e) || Hi(e) || !!(Ru && e && e[Ru]);
      }
      function ni(e, i) {
        var o = typeof e;
        return i = i ?? Q, !!i && (o == "number" || o != "symbol" && Go.test(e)) && e > -1 && e % 1 == 0 && e < i;
      }
      function Xt(e, i, o) {
        if (!at(o)) return !1;
        var c = typeof i;
        return (c == "number" ? or(o) && ni(i, o.length) : c == "string" && i in o) ? Ur(o[i], e) : !1;
      }
      function Ba(e, i) {
        if (de(e)) return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || vr(e) ? !0 : St.test(e) || !tt.test(e) || i != null && e in Fe(i);
      }
      function qg(e) {
        var i = typeof e;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null;
      }
      function Fa(e) {
        var i = so(e), o = p[i];
        if (typeof o != "function" || !(i in Pe.prototype)) return !1;
        if (e === o) return !0;
        var c = Ha(o);
        return !!c && e === c[0];
      }
      function Mg(e) {
        return !!xu && xu in e;
      }
      var Lg = Dn ? oi : uc;
      function zs(e) {
        var i = e && e.constructor, o = typeof i == "function" && i.prototype || as;
        return e === o;
      }
      function xh(e) {
        return e === e && !at(e);
      }
      function Ph(e, i) {
        return function(o) {
          return o == null ? !1 : o[e] === i && (i !== r || e in Fe(o));
        };
      }
      function zg(e) {
        var i = ho(e, function(c) {
          return o.size === g && o.clear(), c;
        }), o = i.cache;
        return i;
      }
      function kg(e, i) {
        var o = e[1], c = i[1], l = o | c, d = l < (te | ge | H), m = c == H && o == ue || c == H && o == J && e[7].length <= i[8] || c == (H | J) && i[7].length <= i[8] && o == ue;
        if (!(d || m)) return e;
        c & te && (e[2] = i[2], l |= o & te ? 0 : ce);
        var _ = i[3];
        if (_) {
          var S = e[3];
          e[3] = S ? ah(S, _, i[4]) : _, e[4] = S ? vi(e[3], b) : i[4];
        }
        return _ = i[5], _ && (S = e[5], e[5] = S ? ch(S, _, i[6]) : _, e[6] = S ? vi(e[5], b) : i[6]), _ = i[7], _ && (e[7] = _), c & H && (e[8] = e[8] == null ? i[8] : Ft(e[8], i[8])), e[9] == null && (e[9] = i[9]), e[0] = i[0], e[1] = l, e;
      }
      function Hg(e) {
        var i = [];
        if (e != null) for (var o in Fe(e)) i.push(o);
        return i;
      }
      function Kg(e) {
        return Un.call(e);
      }
      function Sh(e, i, o) {
        return i = Ut(i === r ? e.length - 1 : i, 0), function() {
          for (var c = arguments, l = -1, d = Ut(c.length - i, 0), m = T(d); ++l < d; ) m[l] = c[i + l];
          l = -1;
          for (var _ = T(i + 1); ++l < i; ) _[l] = c[l];
          return _[i] = o(m), Mt(e, this, _);
        };
      }
      function Oh(e, i) {
        return i.length < 2 ? e : Li(e, Or(i, 0, -1));
      }
      function Vg(e, i) {
        for (var o = e.length, c = Ft(i.length, o), l = nr(e); c--; ) {
          var d = i[c];
          e[c] = ni(d, o) ? l[d] : r;
        }
        return e;
      }
      function Ga(e, i) {
        if (!(i === "constructor" && typeof e[i] == "function") && i != "__proto__") return e[i];
      }
      var Rh = Nh(Yu), ks = nd || function(e, i) {
        return Se.setTimeout(e, i);
      }, Wa = Nh(pg);
      function Th(e, i, o) {
        var c = i + "";
        return Wa(e, jg(c, Bg($g(c), o)));
      }
      function Nh(e) {
        var i = 0, o = 0;
        return function() {
          var c = ud(), l = Xe - (c - o);
          if (o = c, l > 0) {
            if (++i >= Re) return arguments[0];
          } else i = 0;
          return e.apply(r, arguments);
        };
      }
      function oo(e, i) {
        var o = -1, c = e.length, l = c - 1;
        for (i = i === r ? c : i; ++o < i; ) {
          var d = Na(o, l), m = e[d];
          e[d] = e[o], e[o] = m;
        }
        return e.length = i, e;
      }
      var Ah = zg(function(e) {
        var i = [];
        return e.charCodeAt(0) === 46 && i.push(""), e.replace(Ot, function(o, c, l, d) {
          i.push(l ? d.replace(ko, "$1") : c || o);
        }), i;
      });
      function Gr(e) {
        if (typeof e == "string" || vr(e)) return e;
        var i = e + "";
        return i == "0" && 1 / e == -Te ? "-0" : i;
      }
      function ki(e) {
        if (e != null) {
          try {
            return jn.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Bg(e, i) {
        return Ir(kr, function(o) {
          var c = "_." + o[0];
          i & o[1] && !Nn(e, c) && e.push(c);
        }), e.sort();
      }
      function $h(e) {
        if (e instanceof Pe) return e.clone();
        var i = new Pr(e.__wrapped__, e.__chain__);
        return i.__actions__ = nr(e.__actions__), i.__index__ = e.__index__, i.__values__ = e.__values__, i;
      }
      function Fg(e, i, o) {
        (o ? Xt(e, i, o) : i === r) ? i = 1 : i = Ut(ve(i), 0);
        var c = e == null ? 0 : e.length;
        if (!c || i < 1) return [];
        for (var l = 0, d = 0, m = T(Hn(c / i)); l < c; ) m[d++] = Or(e, l, l += i);
        return m;
      }
      function Gg(e) {
        for (var i = -1, o = e == null ? 0 : e.length, c = 0, l = []; ++i < o; ) {
          var d = e[i];
          d && (l[c++] = d);
        }
        return l;
      }
      function Wg() {
        var e = arguments.length;
        if (!e) return [];
        for (var i = T(e - 1), o = arguments[0], c = e; c--; ) i[c - 1] = arguments[c];
        return yi(de(o) ? nr(o) : [o], Vt(i, 1));
      }
      var Jg = _e(function(e, i) {
        return bt(e) ? js(e, Vt(i, 1, bt, !0)) : [];
      }), Qg = _e(function(e, i) {
        var o = Rr(i);
        return bt(o) && (o = r), bt(e) ? js(e, Vt(i, 1, bt, !0), se(o, 2)) : [];
      }), Yg = _e(function(e, i) {
        var o = Rr(i);
        return bt(o) && (o = r), bt(e) ? js(e, Vt(i, 1, bt, !0), r, o) : [];
      });
      function Zg(e, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (i = o || i === r ? 1 : ve(i), Or(e, i < 0 ? 0 : i, c)) : [];
      }
      function Xg(e, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (i = o || i === r ? 1 : ve(i), i = c - i, Or(e, 0, i < 0 ? 0 : i)) : [];
      }
      function ey(e, i) {
        return e && e.length ? Zn(e, se(i, 3), !0, !0) : [];
      }
      function ty(e, i) {
        return e && e.length ? Zn(e, se(i, 3), !0) : [];
      }
      function ry(e, i, o, c) {
        var l = e == null ? 0 : e.length;
        return l ? (o && typeof o != "number" && Xt(e, i, o) && (o = 0, c = l), Wd(e, i, o, c)) : [];
      }
      function Ch(e, i, o) {
        var c = e == null ? 0 : e.length;
        if (!c) return -1;
        var l = o == null ? 0 : ve(o);
        return l < 0 && (l = Ut(c + l, 0)), An(e, se(i, 3), l);
      }
      function Dh(e, i, o) {
        var c = e == null ? 0 : e.length;
        if (!c) return -1;
        var l = c - 1;
        return o !== r && (l = ve(o), l = o < 0 ? Ut(c + l, 0) : Ft(l, c - 1)), An(e, se(i, 3), l, !0);
      }
      function jh(e) {
        var i = e == null ? 0 : e.length;
        return i ? Vt(e, 1) : [];
      }
      function iy(e) {
        var i = e == null ? 0 : e.length;
        return i ? Vt(e, Te) : [];
      }
      function sy(e, i) {
        var o = e == null ? 0 : e.length;
        return o ? (i = i === r ? 1 : ve(i), Vt(e, i)) : [];
      }
      function ny(e) {
        for (var i = -1, o = e == null ? 0 : e.length, c = {}; ++i < o; ) {
          var l = e[i];
          c[l[0]] = l[1];
        }
        return c;
      }
      function Uh(e) {
        return e && e.length ? e[0] : r;
      }
      function oy(e, i, o) {
        var c = e == null ? 0 : e.length;
        if (!c) return -1;
        var l = o == null ? 0 : ve(o);
        return l < 0 && (l = Ut(c + l, 0)), is(e, i, l);
      }
      function ay(e) {
        var i = e == null ? 0 : e.length;
        return i ? Or(e, 0, -1) : [];
      }
      var cy = _e(function(e) {
        var i = rt(e, ja);
        return i.length && i[0] === e[0] ? Pa(i) : [];
      }), uy = _e(function(e) {
        var i = Rr(e), o = rt(e, ja);
        return i === Rr(o) ? i = r : o.pop(), o.length && o[0] === e[0] ? Pa(o, se(i, 2)) : [];
      }), hy = _e(function(e) {
        var i = Rr(e), o = rt(e, ja);
        return i = typeof i == "function" ? i : r, i && o.pop(), o.length && o[0] === e[0] ? Pa(o, r, i) : [];
      });
      function ly(e, i) {
        return e == null ? "" : ad.call(e, i);
      }
      function Rr(e) {
        var i = e == null ? 0 : e.length;
        return i ? e[i - 1] : r;
      }
      function fy(e, i, o) {
        var c = e == null ? 0 : e.length;
        if (!c) return -1;
        var l = c;
        return o !== r && (l = ve(o), l = l < 0 ? Ut(c + l, 0) : Ft(l, c - 1)), i === i ? Bp(e, i, l) : An(e, yu, l, !0);
      }
      function py(e, i) {
        return e && e.length ? Gu(e, ve(i)) : r;
      }
      var dy = _e(qh);
      function qh(e, i) {
        return e && e.length && i && i.length ? Ta(e, i) : e;
      }
      function gy(e, i, o) {
        return e && e.length && i && i.length ? Ta(e, i, se(o, 2)) : e;
      }
      function yy(e, i, o) {
        return e && e.length && i && i.length ? Ta(e, i, r, o) : e;
      }
      var vy = si(function(e, i) {
        var o = e == null ? 0 : e.length, c = _a(e, i);
        return Qu(e, rt(i, function(l) {
          return ni(l, o) ? +l : l;
        }).sort(oh)), c;
      });
      function my(e, i) {
        var o = [];
        if (!(e && e.length)) return o;
        var c = -1, l = [], d = e.length;
        for (i = se(i, 3); ++c < d; ) {
          var m = e[c];
          i(m, c, e) && (o.push(m), l.push(c));
        }
        return Qu(e, l), o;
      }
      function Ja(e) {
        return e == null ? e : ld.call(e);
      }
      function wy(e, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (o && typeof o != "number" && Xt(e, i, o) ? (i = 0, o = c) : (i = i == null ? 0 : ve(i), o = o === r ? c : ve(o)), Or(e, i, o)) : [];
      }
      function by(e, i) {
        return Yn(e, i);
      }
      function _y(e, i, o) {
        return $a(e, i, se(o, 2));
      }
      function Ey(e, i) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var c = Yn(e, i);
          if (c < o && Ur(e[c], i)) return c;
        }
        return -1;
      }
      function Iy(e, i) {
        return Yn(e, i, !0);
      }
      function xy(e, i, o) {
        return $a(e, i, se(o, 2), !0);
      }
      function Py(e, i) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var c = Yn(e, i, !0) - 1;
          if (Ur(e[c], i)) return c;
        }
        return -1;
      }
      function Sy(e) {
        return e && e.length ? Zu(e) : [];
      }
      function Oy(e, i) {
        return e && e.length ? Zu(e, se(i, 2)) : [];
      }
      function Ry(e) {
        var i = e == null ? 0 : e.length;
        return i ? Or(e, 1, i) : [];
      }
      function Ty(e, i, o) {
        return e && e.length ? (i = o || i === r ? 1 : ve(i), Or(e, 0, i < 0 ? 0 : i)) : [];
      }
      function Ny(e, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (i = o || i === r ? 1 : ve(i), i = c - i, Or(e, i < 0 ? 0 : i, c)) : [];
      }
      function Ay(e, i) {
        return e && e.length ? Zn(e, se(i, 3), !1, !0) : [];
      }
      function $y(e, i) {
        return e && e.length ? Zn(e, se(i, 3)) : [];
      }
      var Cy = _e(function(e) {
        return bi(Vt(e, 1, bt, !0));
      }), Dy = _e(function(e) {
        var i = Rr(e);
        return bt(i) && (i = r), bi(Vt(e, 1, bt, !0), se(i, 2));
      }), jy = _e(function(e) {
        var i = Rr(e);
        return i = typeof i == "function" ? i : r, bi(Vt(e, 1, bt, !0), r, i);
      });
      function Uy(e) {
        return e && e.length ? bi(e) : [];
      }
      function qy(e, i) {
        return e && e.length ? bi(e, se(i, 2)) : [];
      }
      function My(e, i) {
        return i = typeof i == "function" ? i : r, e && e.length ? bi(e, r, i) : [];
      }
      function Qa(e) {
        if (!(e && e.length)) return [];
        var i = 0;
        return e = gi(e, function(o) {
          if (bt(o)) return i = Ut(o.length, i), !0;
        }), pa(i, function(o) {
          return rt(e, ha(o));
        });
      }
      function Mh(e, i) {
        if (!(e && e.length)) return [];
        var o = Qa(e);
        return i == null ? o : rt(o, function(c) {
          return Mt(i, r, c);
        });
      }
      var Ly = _e(function(e, i) {
        return bt(e) ? js(e, i) : [];
      }), zy = _e(function(e) {
        return Da(gi(e, bt));
      }), ky = _e(function(e) {
        var i = Rr(e);
        return bt(i) && (i = r), Da(gi(e, bt), se(i, 2));
      }), Hy = _e(function(e) {
        var i = Rr(e);
        return i = typeof i == "function" ? i : r, Da(gi(e, bt), r, i);
      }), Ky = _e(Qa);
      function Vy(e, i) {
        return rh(e || [], i || [], Ds);
      }
      function By(e, i) {
        return rh(e || [], i || [], Ms);
      }
      var Fy = _e(function(e) {
        var i = e.length, o = i > 1 ? e[i - 1] : r;
        return o = typeof o == "function" ? (e.pop(), o) : r, Mh(e, o);
      });
      function Lh(e) {
        var i = p(e);
        return i.__chain__ = !0, i;
      }
      function Gy(e, i) {
        return i(e), e;
      }
      function ao(e, i) {
        return i(e);
      }
      var Wy = si(function(e) {
        var i = e.length, o = i ? e[0] : 0, c = this.__wrapped__, l = function(d) {
          return _a(d, e);
        };
        return i > 1 || this.__actions__.length || !(c instanceof Pe) || !ni(o) ? this.thru(l) : (c = c.slice(o, +o + (i ? 1 : 0)), c.__actions__.push({ func: ao, args: [l], thisArg: r }), new Pr(c, this.__chain__).thru(function(d) {
          return i && !d.length && d.push(r), d;
        }));
      });
      function Jy() {
        return Lh(this);
      }
      function Qy() {
        return new Pr(this.value(), this.__chain__);
      }
      function Yy() {
        this.__values__ === r && (this.__values__ = Xh(this.value()));
        var e = this.__index__ >= this.__values__.length, i = e ? r : this.__values__[this.__index__++];
        return { done: e, value: i };
      }
      function Zy() {
        return this;
      }
      function Xy(e) {
        for (var i, o = this; o instanceof Fn; ) {
          var c = $h(o);
          c.__index__ = 0, c.__values__ = r, i ? l.__wrapped__ = c : i = c;
          var l = c;
          o = o.__wrapped__;
        }
        return l.__wrapped__ = e, i;
      }
      function ev() {
        var e = this.__wrapped__;
        if (e instanceof Pe) {
          var i = e;
          return this.__actions__.length && (i = new Pe(this)), i = i.reverse(), i.__actions__.push({ func: ao, args: [Ja], thisArg: r }), new Pr(i, this.__chain__);
        }
        return this.thru(Ja);
      }
      function tv() {
        return th(this.__wrapped__, this.__actions__);
      }
      var rv = Xn(function(e, i, o) {
        qe.call(e, o) ? ++e[o] : ri(e, o, 1);
      });
      function iv(e, i, o) {
        var c = de(e) ? du : Gd;
        return o && Xt(e, i, o) && (i = r), c(e, se(i, 3));
      }
      function sv(e, i) {
        var o = de(e) ? gi : Mu;
        return o(e, se(i, 3));
      }
      var nv = fh(Ch), ov = fh(Dh);
      function av(e, i) {
        return Vt(co(e, i), 1);
      }
      function cv(e, i) {
        return Vt(co(e, i), Te);
      }
      function uv(e, i, o) {
        return o = o === r ? 1 : ve(o), Vt(co(e, i), o);
      }
      function zh(e, i) {
        var o = de(e) ? Ir : wi;
        return o(e, se(i, 3));
      }
      function kh(e, i) {
        var o = de(e) ? Rp : qu;
        return o(e, se(i, 3));
      }
      var hv = Xn(function(e, i, o) {
        qe.call(e, o) ? e[o].push(i) : ri(e, o, [i]);
      });
      function lv(e, i, o, c) {
        e = or(e) ? e : gs(e), o = o && !c ? ve(o) : 0;
        var l = e.length;
        return o < 0 && (o = Ut(l + o, 0)), po(e) ? o <= l && e.indexOf(i, o) > -1 : !!l && is(e, i, o) > -1;
      }
      var fv = _e(function(e, i, o) {
        var c = -1, l = typeof i == "function", d = or(e) ? T(e.length) : [];
        return wi(e, function(m) {
          d[++c] = l ? Mt(i, m, o) : Us(m, i, o);
        }), d;
      }), pv = Xn(function(e, i, o) {
        ri(e, o, i);
      });
      function co(e, i) {
        var o = de(e) ? rt : Vu;
        return o(e, se(i, 3));
      }
      function dv(e, i, o, c) {
        return e == null ? [] : (de(i) || (i = i == null ? [] : [i]), o = c ? r : o, de(o) || (o = o == null ? [] : [o]), Wu(e, i, o));
      }
      var gv = Xn(function(e, i, o) {
        e[o ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function yv(e, i, o) {
        var c = de(e) ? ca : mu, l = arguments.length < 3;
        return c(e, se(i, 4), o, l, wi);
      }
      function vv(e, i, o) {
        var c = de(e) ? Tp : mu, l = arguments.length < 3;
        return c(e, se(i, 4), o, l, qu);
      }
      function mv(e, i) {
        var o = de(e) ? gi : Mu;
        return o(e, lo(se(i, 3)));
      }
      function wv(e) {
        var i = de(e) ? Cu : lg;
        return i(e);
      }
      function bv(e, i, o) {
        (o ? Xt(e, i, o) : i === r) ? i = 1 : i = ve(i);
        var c = de(e) ? Hd : fg;
        return c(e, i);
      }
      function _v(e) {
        var i = de(e) ? Kd : dg;
        return i(e);
      }
      function Ev(e) {
        if (e == null) return 0;
        if (or(e)) return po(e) ? ns(e) : e.length;
        var i = Gt(e);
        return i == me || i == De ? e.size : Oa(e).length;
      }
      function Iv(e, i, o) {
        var c = de(e) ? ua : gg;
        return o && Xt(e, i, o) && (i = r), c(e, se(i, 3));
      }
      var xv = _e(function(e, i) {
        if (e == null) return [];
        var o = i.length;
        return o > 1 && Xt(e, i[0], i[1]) ? i = [] : o > 2 && Xt(i[0], i[1], i[2]) && (i = [i[0]]), Wu(e, Vt(i, 1), []);
      }), uo = sd || function() {
        return Se.Date.now();
      };
      function Pv(e, i) {
        if (typeof i != "function") throw new xr(f);
        return e = ve(e), function() {
          if (--e < 1) return i.apply(this, arguments);
        };
      }
      function Hh(e, i, o) {
        return i = o ? r : i, i = e && i == null ? e.length : i, ii(e, H, r, r, r, r, i);
      }
      function Kh(e, i) {
        var o;
        if (typeof i != "function") throw new xr(f);
        return e = ve(e), function() {
          return --e > 0 && (o = i.apply(this, arguments)), e <= 1 && (i = r), o;
        };
      }
      var Ya = _e(function(e, i, o) {
        var c = te;
        if (o.length) {
          var l = vi(o, ps(Ya));
          c |= fe;
        }
        return ii(e, c, i, o, l);
      }), Vh = _e(function(e, i, o) {
        var c = te | ge;
        if (o.length) {
          var l = vi(o, ps(Vh));
          c |= fe;
        }
        return ii(i, c, e, o, l);
      });
      function Bh(e, i, o) {
        i = o ? r : i;
        var c = ii(e, ue, r, r, r, r, r, i);
        return c.placeholder = Bh.placeholder, c;
      }
      function Fh(e, i, o) {
        i = o ? r : i;
        var c = ii(e, le, r, r, r, r, r, i);
        return c.placeholder = Fh.placeholder, c;
      }
      function Gh(e, i, o) {
        var c, l, d, m, _, S, q = 0, M = !1, k = !1, W = !0;
        if (typeof e != "function") throw new xr(f);
        i = Tr(i) || 0, at(o) && (M = !!o.leading, k = "maxWait" in o, d = k ? Ut(Tr(o.maxWait) || 0, i) : d, W = "trailing" in o ? !!o.trailing : W);
        function ee(_t) {
          var qr = c, ci = l;
          return c = l = r, q = _t, m = e.apply(ci, qr), m;
        }
        function ne(_t) {
          return q = _t, _ = ks(Ie, i), M ? ee(_t) : m;
        }
        function we(_t) {
          var qr = _t - S, ci = _t - q, fl = i - qr;
          return k ? Ft(fl, d - ci) : fl;
        }
        function oe(_t) {
          var qr = _t - S, ci = _t - q;
          return S === r || qr >= i || qr < 0 || k && ci >= d;
        }
        function Ie() {
          var _t = uo();
          if (oe(_t)) return Oe(_t);
          _ = ks(Ie, we(_t));
        }
        function Oe(_t) {
          return _ = r, W && c ? ee(_t) : (c = l = r, m);
        }
        function mr() {
          _ !== r && ih(_), q = 0, c = S = l = _ = r;
        }
        function er() {
          return _ === r ? m : Oe(uo());
        }
        function wr() {
          var _t = uo(), qr = oe(_t);
          if (c = arguments, l = this, S = _t, qr) {
            if (_ === r) return ne(S);
            if (k) return ih(_), _ = ks(Ie, i), ee(S);
          }
          return _ === r && (_ = ks(Ie, i)), m;
        }
        return wr.cancel = mr, wr.flush = er, wr;
      }
      var Sv = _e(function(e, i) {
        return Uu(e, 1, i);
      }), Ov = _e(function(e, i, o) {
        return Uu(e, Tr(i) || 0, o);
      });
      function Rv(e) {
        return ii(e, ye);
      }
      function ho(e, i) {
        if (typeof e != "function" || i != null && typeof i != "function") throw new xr(f);
        var o = function() {
          var c = arguments, l = i ? i.apply(this, c) : c[0], d = o.cache;
          if (d.has(l)) return d.get(l);
          var m = e.apply(this, c);
          return o.cache = d.set(l, m) || d, m;
        };
        return o.cache = new (ho.Cache || ti)(), o;
      }
      ho.Cache = ti;
      function lo(e) {
        if (typeof e != "function") throw new xr(f);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, i[0]);
            case 2:
              return !e.call(this, i[0], i[1]);
            case 3:
              return !e.call(this, i[0], i[1], i[2]);
          }
          return !e.apply(this, i);
        };
      }
      function Tv(e) {
        return Kh(2, e);
      }
      var Nv = yg(function(e, i) {
        i = i.length == 1 && de(i[0]) ? rt(i[0], gr(se())) : rt(Vt(i, 1), gr(se()));
        var o = i.length;
        return _e(function(c) {
          for (var l = -1, d = Ft(c.length, o); ++l < d; ) c[l] = i[l].call(this, c[l]);
          return Mt(e, this, c);
        });
      }), Za = _e(function(e, i) {
        var o = vi(i, ps(Za));
        return ii(e, fe, r, i, o);
      }), Wh = _e(function(e, i) {
        var o = vi(i, ps(Wh));
        return ii(e, D, r, i, o);
      }), Av = si(function(e, i) {
        return ii(e, J, r, r, r, i);
      });
      function $v(e, i) {
        if (typeof e != "function") throw new xr(f);
        return i = i === r ? i : ve(i), _e(e, i);
      }
      function Cv(e, i) {
        if (typeof e != "function") throw new xr(f);
        return i = i == null ? 0 : Ut(ve(i), 0), _e(function(o) {
          var c = o[i], l = Ei(o, 0, i);
          return c && yi(l, c), Mt(e, this, l);
        });
      }
      function Dv(e, i, o) {
        var c = !0, l = !0;
        if (typeof e != "function") throw new xr(f);
        return at(o) && (c = "leading" in o ? !!o.leading : c, l = "trailing" in o ? !!o.trailing : l), Gh(e, i, { leading: c, maxWait: i, trailing: l });
      }
      function jv(e) {
        return Hh(e, 1);
      }
      function Uv(e, i) {
        return Za(Ua(i), e);
      }
      function qv() {
        if (!arguments.length) return [];
        var e = arguments[0];
        return de(e) ? e : [e];
      }
      function Mv(e) {
        return Sr(e, U);
      }
      function Lv(e, i) {
        return i = typeof i == "function" ? i : r, Sr(e, U, i);
      }
      function zv(e) {
        return Sr(e, P | U);
      }
      function kv(e, i) {
        return i = typeof i == "function" ? i : r, Sr(e, P | U, i);
      }
      function Hv(e, i) {
        return i == null || ju(e, i, Lt(i));
      }
      function Ur(e, i) {
        return e === i || e !== e && i !== i;
      }
      var Kv = io(xa), Vv = io(function(e, i) {
        return e >= i;
      }), Hi = ku(/* @__PURE__ */ function() {
        return arguments;
      }()) ? ku : function(e) {
        return yt(e) && qe.call(e, "callee") && !Ou.call(e, "callee");
      }, de = T.isArray, Bv = Yt ? gr(Yt) : Xd;
      function or(e) {
        return e != null && fo(e.length) && !oi(e);
      }
      function bt(e) {
        return yt(e) && or(e);
      }
      function Fv(e) {
        return e === !0 || e === !1 || yt(e) && Zt(e) == A;
      }
      var Ii = od || uc, Gv = Cr ? gr(Cr) : eg;
      function Wv(e) {
        return yt(e) && e.nodeType === 1 && !Hs(e);
      }
      function Jv(e) {
        if (e == null) return !0;
        if (or(e) && (de(e) || typeof e == "string" || typeof e.splice == "function" || Ii(e) || ds(e) || Hi(e))) return !e.length;
        var i = Gt(e);
        if (i == me || i == De) return !e.size;
        if (zs(e)) return !Oa(e).length;
        for (var o in e) if (qe.call(e, o)) return !1;
        return !0;
      }
      function Qv(e, i) {
        return qs(e, i);
      }
      function Yv(e, i, o) {
        o = typeof o == "function" ? o : r;
        var c = o ? o(e, i) : r;
        return c === r ? qs(e, i, r, o) : !!c;
      }
      function Xa(e) {
        if (!yt(e)) return !1;
        var i = Zt(e);
        return i == E || i == h || typeof e.message == "string" && typeof e.name == "string" && !Hs(e);
      }
      function Zv(e) {
        return typeof e == "number" && Tu(e);
      }
      function oi(e) {
        if (!at(e)) return !1;
        var i = Zt(e);
        return i == X || i == ae || i == C || i == vt;
      }
      function Jh(e) {
        return typeof e == "number" && e == ve(e);
      }
      function fo(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Q;
      }
      function at(e) {
        var i = typeof e;
        return e != null && (i == "object" || i == "function");
      }
      function yt(e) {
        return e != null && typeof e == "object";
      }
      var Qh = Er ? gr(Er) : rg;
      function Xv(e, i) {
        return e === i || Sa(e, i, Ka(i));
      }
      function em(e, i, o) {
        return o = typeof o == "function" ? o : r, Sa(e, i, Ka(i), o);
      }
      function tm(e) {
        return Yh(e) && e != +e;
      }
      function rm(e) {
        if (Lg(e)) throw new he(u);
        return Hu(e);
      }
      function im(e) {
        return e === null;
      }
      function sm(e) {
        return e == null;
      }
      function Yh(e) {
        return typeof e == "number" || yt(e) && Zt(e) == Ne;
      }
      function Hs(e) {
        if (!yt(e) || Zt(e) != xe) return !1;
        var i = Ln(e);
        if (i === null) return !0;
        var o = qe.call(i, "constructor") && i.constructor;
        return typeof o == "function" && o instanceof o && jn.call(o) == ed;
      }
      var ec = Vr ? gr(Vr) : ig;
      function nm(e) {
        return Jh(e) && e >= -Q && e <= Q;
      }
      var Zh = Os ? gr(Os) : sg;
      function po(e) {
        return typeof e == "string" || !de(e) && yt(e) && Zt(e) == We;
      }
      function vr(e) {
        return typeof e == "symbol" || yt(e) && Zt(e) == Je;
      }
      var ds = Di ? gr(Di) : ng;
      function om(e) {
        return e === r;
      }
      function am(e) {
        return yt(e) && Gt(e) == Le;
      }
      function cm(e) {
        return yt(e) && Zt(e) == Qe;
      }
      var um = io(Ra), hm = io(function(e, i) {
        return e <= i;
      });
      function Xh(e) {
        if (!e) return [];
        if (or(e)) return po(e) ? Dr(e) : nr(e);
        if (Ts && e[Ts]) return Hp(e[Ts]());
        var i = Gt(e), o = i == me ? ga : i == De ? $n : gs;
        return o(e);
      }
      function ai(e) {
        if (!e) return e === 0 ? e : 0;
        if (e = Tr(e), e === Te || e === -Te) {
          var i = e < 0 ? -1 : 1;
          return i * B;
        }
        return e === e ? e : 0;
      }
      function ve(e) {
        var i = ai(e), o = i % 1;
        return i === i ? o ? i - o : i : 0;
      }
      function el(e) {
        return e ? Mi(ve(e), 0, F) : 0;
      }
      function Tr(e) {
        if (typeof e == "number") return e;
        if (vr(e)) return K;
        if (at(e)) {
          var i = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = at(i) ? i + "" : i;
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = wu(e);
        var o = Vo.test(e);
        return o || Fo.test(e) ? pe(e.slice(2), o ? 2 : 8) : Ko.test(e) ? K : +e;
      }
      function tl(e) {
        return Fr(e, ar(e));
      }
      function lm(e) {
        return e ? Mi(ve(e), -Q, Q) : e === 0 ? e : 0;
      }
      function je(e) {
        return e == null ? "" : yr(e);
      }
      var fm = ls(function(e, i) {
        if (zs(i) || or(i)) {
          Fr(i, Lt(i), e);
          return;
        }
        for (var o in i) qe.call(i, o) && Ds(e, o, i[o]);
      }), rl = ls(function(e, i) {
        Fr(i, ar(i), e);
      }), go = ls(function(e, i, o, c) {
        Fr(i, ar(i), e, c);
      }), pm = ls(function(e, i, o, c) {
        Fr(i, Lt(i), e, c);
      }), dm = si(_a);
      function gm(e, i) {
        var o = hs(e);
        return i == null ? o : Du(o, i);
      }
      var ym = _e(function(e, i) {
        e = Fe(e);
        var o = -1, c = i.length, l = c > 2 ? i[2] : r;
        for (l && Xt(i[0], i[1], l) && (c = 1); ++o < c; ) for (var d = i[o], m = ar(d), _ = -1, S = m.length; ++_ < S; ) {
          var q = m[_], M = e[q];
          (M === r || Ur(M, as[q]) && !qe.call(e, q)) && (e[q] = d[q]);
        }
        return e;
      }), vm = _e(function(e) {
        return e.push(r, wh), Mt(il, r, e);
      });
      function mm(e, i) {
        return gu(e, se(i, 3), Br);
      }
      function wm(e, i) {
        return gu(e, se(i, 3), Ia);
      }
      function bm(e, i) {
        return e == null ? e : Ea(e, se(i, 3), ar);
      }
      function _m(e, i) {
        return e == null ? e : Lu(e, se(i, 3), ar);
      }
      function Em(e, i) {
        return e && Br(e, se(i, 3));
      }
      function Im(e, i) {
        return e && Ia(e, se(i, 3));
      }
      function xm(e) {
        return e == null ? [] : Jn(e, Lt(e));
      }
      function Pm(e) {
        return e == null ? [] : Jn(e, ar(e));
      }
      function tc(e, i, o) {
        var c = e == null ? r : Li(e, i);
        return c === r ? o : c;
      }
      function Sm(e, i) {
        return e != null && Eh(e, i, Jd);
      }
      function rc(e, i) {
        return e != null && Eh(e, i, Qd);
      }
      var Om = dh(function(e, i, o) {
        i != null && typeof i.toString != "function" && (i = Un.call(i)), e[i] = o;
      }, sc(cr)), Rm = dh(function(e, i, o) {
        i != null && typeof i.toString != "function" && (i = Un.call(i)), qe.call(e, i) ? e[i].push(o) : e[i] = [o];
      }, se), Tm = _e(Us);
      function Lt(e) {
        return or(e) ? $u(e) : Oa(e);
      }
      function ar(e) {
        return or(e) ? $u(e, !0) : og(e);
      }
      function Nm(e, i) {
        var o = {};
        return i = se(i, 3), Br(e, function(c, l, d) {
          ri(o, i(c, l, d), c);
        }), o;
      }
      function Am(e, i) {
        var o = {};
        return i = se(i, 3), Br(e, function(c, l, d) {
          ri(o, l, i(c, l, d));
        }), o;
      }
      var $m = ls(function(e, i, o) {
        Qn(e, i, o);
      }), il = ls(function(e, i, o, c) {
        Qn(e, i, o, c);
      }), Cm = si(function(e, i) {
        var o = {};
        if (e == null) return o;
        var c = !1;
        i = rt(i, function(d) {
          return d = _i(d, e), c || (c = d.length > 1), d;
        }), Fr(e, ka(e), o), c && (o = Sr(o, P | O | U, Og));
        for (var l = i.length; l--; ) Ca(o, i[l]);
        return o;
      });
      function Dm(e, i) {
        return sl(e, lo(se(i)));
      }
      var jm = si(function(e, i) {
        return e == null ? {} : cg(e, i);
      });
      function sl(e, i) {
        if (e == null) return {};
        var o = rt(ka(e), function(c) {
          return [c];
        });
        return i = se(i), Ju(e, o, function(c, l) {
          return i(c, l[0]);
        });
      }
      function Um(e, i, o) {
        i = _i(i, e);
        var c = -1, l = i.length;
        for (l || (l = 1, e = r); ++c < l; ) {
          var d = e == null ? r : e[Gr(i[c])];
          d === r && (c = l, d = o), e = oi(d) ? d.call(e) : d;
        }
        return e;
      }
      function qm(e, i, o) {
        return e == null ? e : Ms(e, i, o);
      }
      function Mm(e, i, o, c) {
        return c = typeof c == "function" ? c : r, e == null ? e : Ms(e, i, o, c);
      }
      var nl = vh(Lt), ol = vh(ar);
      function Lm(e, i, o) {
        var c = de(e), l = c || Ii(e) || ds(e);
        if (i = se(i, 4), o == null) {
          var d = e && e.constructor;
          l ? o = c ? new d() : [] : at(e) ? o = oi(d) ? hs(Ln(e)) : {} : o = {};
        }
        return (l ? Ir : Br)(e, function(m, _, S) {
          return i(o, m, _, S);
        }), o;
      }
      function zm(e, i) {
        return e == null ? !0 : Ca(e, i);
      }
      function km(e, i, o) {
        return e == null ? e : eh(e, i, Ua(o));
      }
      function Hm(e, i, o, c) {
        return c = typeof c == "function" ? c : r, e == null ? e : eh(e, i, Ua(o), c);
      }
      function gs(e) {
        return e == null ? [] : da(e, Lt(e));
      }
      function Km(e) {
        return e == null ? [] : da(e, ar(e));
      }
      function Vm(e, i, o) {
        return o === r && (o = i, i = r), o !== r && (o = Tr(o), o = o === o ? o : 0), i !== r && (i = Tr(i), i = i === i ? i : 0), Mi(Tr(e), i, o);
      }
      function Bm(e, i, o) {
        return i = ai(i), o === r ? (o = i, i = 0) : o = ai(o), e = Tr(e), Yd(e, i, o);
      }
      function Fm(e, i, o) {
        if (o && typeof o != "boolean" && Xt(e, i, o) && (i = o = r), o === r && (typeof i == "boolean" ? (o = i, i = r) : typeof e == "boolean" && (o = e, e = r)), e === r && i === r ? (e = 0, i = 1) : (e = ai(e), i === r ? (i = e, e = 0) : i = ai(i)), e > i) {
          var c = e;
          e = i, i = c;
        }
        if (o || e % 1 || i % 1) {
          var l = Nu();
          return Ft(e + l * (i - e + Ve("1e-" + ((l + "").length - 1))), i);
        }
        return Na(e, i);
      }
      var Gm = fs(function(e, i, o) {
        return i = i.toLowerCase(), e + (o ? al(i) : i);
      });
      function al(e) {
        return ic(je(e).toLowerCase());
      }
      function cl(e) {
        return e = je(e), e && e.replace(Zr, qp).replace(na, "");
      }
      function Wm(e, i, o) {
        e = je(e), i = yr(i);
        var c = e.length;
        o = o === r ? c : Mi(ve(o), 0, c);
        var l = o;
        return o -= i.length, o >= 0 && e.slice(o, l) == i;
      }
      function Jm(e) {
        return e = je(e), e && et.test(e) ? e.replace(Ti, Mp) : e;
      }
      function Qm(e) {
        return e = je(e), e && Rt.test(e) ? e.replace(pt, "\\$&") : e;
      }
      var Ym = fs(function(e, i, o) {
        return e + (o ? "-" : "") + i.toLowerCase();
      }), Zm = fs(function(e, i, o) {
        return e + (o ? " " : "") + i.toLowerCase();
      }), Xm = lh("toLowerCase");
      function ew(e, i, o) {
        e = je(e), i = ve(i);
        var c = i ? ns(e) : 0;
        if (!i || c >= i) return e;
        var l = (i - c) / 2;
        return ro(Kn(l), o) + e + ro(Hn(l), o);
      }
      function tw(e, i, o) {
        e = je(e), i = ve(i);
        var c = i ? ns(e) : 0;
        return i && c < i ? e + ro(i - c, o) : e;
      }
      function rw(e, i, o) {
        e = je(e), i = ve(i);
        var c = i ? ns(e) : 0;
        return i && c < i ? ro(i - c, o) + e : e;
      }
      function iw(e, i, o) {
        return o || i == null ? i = 0 : i && (i = +i), hd(je(e).replace(dt, ""), i || 0);
      }
      function sw(e, i, o) {
        return (o ? Xt(e, i, o) : i === r) ? i = 1 : i = ve(i), Aa(je(e), i);
      }
      function nw() {
        var e = arguments, i = je(e[0]);
        return e.length < 3 ? i : i.replace(e[1], e[2]);
      }
      var ow = fs(function(e, i, o) {
        return e + (o ? "_" : "") + i.toLowerCase();
      });
      function aw(e, i, o) {
        return o && typeof o != "number" && Xt(e, i, o) && (i = o = r), o = o === r ? F : o >>> 0, o ? (e = je(e), e && (typeof i == "string" || i != null && !ec(i)) && (i = yr(i), !i && ss(e)) ? Ei(Dr(e), 0, o) : e.split(i, o)) : [];
      }
      var cw = fs(function(e, i, o) {
        return e + (o ? " " : "") + ic(i);
      });
      function uw(e, i, o) {
        return e = je(e), o = o == null ? 0 : Mi(ve(o), 0, e.length), i = yr(i), e.slice(o, o + i.length) == i;
      }
      function hw(e, i, o) {
        var c = p.templateSettings;
        o && Xt(e, i, o) && (i = r), e = je(e), i = go({}, i, c, mh);
        var l = go({}, i.imports, c.imports, mh), d = Lt(l), m = da(l, d), _, S, q = 0, M = i.interpolate || Qi, k = "__p += '", W = ya((i.escape || Qi).source + "|" + M.source + "|" + (M === ot ? Ho : Qi).source + "|" + (i.evaluate || Qi).source + "|$", "g"), ee = "//# sourceURL=" + (qe.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++oa + "]") + `
`;
        e.replace(W, function(oe, Ie, Oe, mr, er, wr) {
          return Oe || (Oe = mr), k += e.slice(q, wr).replace(Wo, Lp), Ie && (_ = !0, k += `' +
__e(` + Ie + `) +
'`), er && (S = !0, k += `';
` + er + `;
__p += '`), Oe && (k += `' +
((__t = (` + Oe + `)) == null ? '' : __t) +
'`), q = wr + oe.length, oe;
        }), k += `';
`;
        var ne = qe.call(i, "variable") && i.variable;
        if (!ne) k = `with (obj) {
` + k + `
}
`;
        else if (zo.test(ne)) throw new he(y);
        k = (S ? k.replace(Hr, "") : k).replace(Qt, "$1").replace(Yr, "$1;"), k = "function(" + (ne || "obj") + `) {
` + (ne ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (_ ? ", __e = _.escape" : "") + (S ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + k + `return __p
}`;
        var we = hl(function() {
          return Ce(d, ee + "return " + k).apply(r, m);
        });
        if (we.source = k, Xa(we)) throw we;
        return we;
      }
      function lw(e) {
        return je(e).toLowerCase();
      }
      function fw(e) {
        return je(e).toUpperCase();
      }
      function pw(e, i, o) {
        if (e = je(e), e && (o || i === r)) return wu(e);
        if (!e || !(i = yr(i))) return e;
        var c = Dr(e), l = Dr(i), d = bu(c, l), m = _u(c, l) + 1;
        return Ei(c, d, m).join("");
      }
      function dw(e, i, o) {
        if (e = je(e), e && (o || i === r)) return e.slice(0, Iu(e) + 1);
        if (!e || !(i = yr(i))) return e;
        var c = Dr(e), l = _u(c, Dr(i)) + 1;
        return Ei(c, 0, l).join("");
      }
      function gw(e, i, o) {
        if (e = je(e), e && (o || i === r)) return e.replace(dt, "");
        if (!e || !(i = yr(i))) return e;
        var c = Dr(e), l = bu(c, Dr(i));
        return Ei(c, l).join("");
      }
      function yw(e, i) {
        var o = ie, c = Ee;
        if (at(i)) {
          var l = "separator" in i ? i.separator : l;
          o = "length" in i ? ve(i.length) : o, c = "omission" in i ? yr(i.omission) : c;
        }
        e = je(e);
        var d = e.length;
        if (ss(e)) {
          var m = Dr(e);
          d = m.length;
        }
        if (o >= d) return e;
        var _ = o - ns(c);
        if (_ < 1) return c;
        var S = m ? Ei(m, 0, _).join("") : e.slice(0, _);
        if (l === r) return S + c;
        if (m && (_ += S.length - _), ec(l)) {
          if (e.slice(_).search(l)) {
            var q, M = S;
            for (l.global || (l = ya(l.source, je(_r.exec(l)) + "g")), l.lastIndex = 0; q = l.exec(M); ) var k = q.index;
            S = S.slice(0, k === r ? _ : k);
          }
        } else if (e.indexOf(yr(l), _) != _) {
          var W = S.lastIndexOf(l);
          W > -1 && (S = S.slice(0, W));
        }
        return S + c;
      }
      function vw(e) {
        return e = je(e), e && ht.test(e) ? e.replace(pi, Fp) : e;
      }
      var mw = fs(function(e, i, o) {
        return e + (o ? " " : "") + i.toUpperCase();
      }), ic = lh("toUpperCase");
      function ul(e, i, o) {
        return e = je(e), i = o ? r : i, i === r ? kp(e) ? Jp(e) : $p(e) : e.match(i) || [];
      }
      var hl = _e(function(e, i) {
        try {
          return Mt(e, r, i);
        } catch (o) {
          return Xa(o) ? o : new he(o);
        }
      }), ww = si(function(e, i) {
        return Ir(i, function(o) {
          o = Gr(o), ri(e, o, Ya(e[o], e));
        }), e;
      });
      function bw(e) {
        var i = e == null ? 0 : e.length, o = se();
        return e = i ? rt(e, function(c) {
          if (typeof c[1] != "function") throw new xr(f);
          return [o(c[0]), c[1]];
        }) : [], _e(function(c) {
          for (var l = -1; ++l < i; ) {
            var d = e[l];
            if (Mt(d[0], this, c)) return Mt(d[1], this, c);
          }
        });
      }
      function _w(e) {
        return Fd(Sr(e, P));
      }
      function sc(e) {
        return function() {
          return e;
        };
      }
      function Ew(e, i) {
        return e == null || e !== e ? i : e;
      }
      var Iw = ph(), xw = ph(!0);
      function cr(e) {
        return e;
      }
      function nc(e) {
        return Ku(typeof e == "function" ? e : Sr(e, P));
      }
      function Pw(e) {
        return Bu(Sr(e, P));
      }
      function Sw(e, i) {
        return Fu(e, Sr(i, P));
      }
      var Ow = _e(function(e, i) {
        return function(o) {
          return Us(o, e, i);
        };
      }), Rw = _e(function(e, i) {
        return function(o) {
          return Us(e, o, i);
        };
      });
      function oc(e, i, o) {
        var c = Lt(i), l = Jn(i, c);
        o == null && !(at(i) && (l.length || !c.length)) && (o = i, i = e, e = this, l = Jn(i, Lt(i)));
        var d = !(at(o) && "chain" in o) || !!o.chain, m = oi(e);
        return Ir(l, function(_) {
          var S = i[_];
          e[_] = S, m && (e.prototype[_] = function() {
            var q = this.__chain__;
            if (d || q) {
              var M = e(this.__wrapped__), k = M.__actions__ = nr(this.__actions__);
              return k.push({ func: S, args: arguments, thisArg: e }), M.__chain__ = q, M;
            }
            return S.apply(e, yi([this.value()], arguments));
          });
        }), e;
      }
      function Tw() {
        return Se._ === this && (Se._ = td), this;
      }
      function ac() {
      }
      function Nw(e) {
        return e = ve(e), _e(function(i) {
          return Gu(i, e);
        });
      }
      var Aw = Ma(rt), $w = Ma(du), Cw = Ma(ua);
      function ll(e) {
        return Ba(e) ? ha(Gr(e)) : ug(e);
      }
      function Dw(e) {
        return function(i) {
          return e == null ? r : Li(e, i);
        };
      }
      var jw = gh(), Uw = gh(!0);
      function cc() {
        return [];
      }
      function uc() {
        return !1;
      }
      function qw() {
        return {};
      }
      function Mw() {
        return "";
      }
      function Lw() {
        return !0;
      }
      function zw(e, i) {
        if (e = ve(e), e < 1 || e > Q) return [];
        var o = F, c = Ft(e, F);
        i = se(i), e -= F;
        for (var l = pa(c, i); ++o < e; ) i(o);
        return l;
      }
      function kw(e) {
        return de(e) ? rt(e, Gr) : vr(e) ? [e] : nr(Ah(je(e)));
      }
      function Hw(e) {
        var i = ++Xp;
        return je(e) + i;
      }
      var Kw = to(function(e, i) {
        return e + i;
      }, 0), Vw = La("ceil"), Bw = to(function(e, i) {
        return e / i;
      }, 1), Fw = La("floor");
      function Gw(e) {
        return e && e.length ? Wn(e, cr, xa) : r;
      }
      function Ww(e, i) {
        return e && e.length ? Wn(e, se(i, 2), xa) : r;
      }
      function Jw(e) {
        return vu(e, cr);
      }
      function Qw(e, i) {
        return vu(e, se(i, 2));
      }
      function Yw(e) {
        return e && e.length ? Wn(e, cr, Ra) : r;
      }
      function Zw(e, i) {
        return e && e.length ? Wn(e, se(i, 2), Ra) : r;
      }
      var Xw = to(function(e, i) {
        return e * i;
      }, 1), eb = La("round"), tb = to(function(e, i) {
        return e - i;
      }, 0);
      function rb(e) {
        return e && e.length ? fa(e, cr) : 0;
      }
      function ib(e, i) {
        return e && e.length ? fa(e, se(i, 2)) : 0;
      }
      return p.after = Pv, p.ary = Hh, p.assign = fm, p.assignIn = rl, p.assignInWith = go, p.assignWith = pm, p.at = dm, p.before = Kh, p.bind = Ya, p.bindAll = ww, p.bindKey = Vh, p.castArray = qv, p.chain = Lh, p.chunk = Fg, p.compact = Gg, p.concat = Wg, p.cond = bw, p.conforms = _w, p.constant = sc, p.countBy = rv, p.create = gm, p.curry = Bh, p.curryRight = Fh, p.debounce = Gh, p.defaults = ym, p.defaultsDeep = vm, p.defer = Sv, p.delay = Ov, p.difference = Jg, p.differenceBy = Qg, p.differenceWith = Yg, p.drop = Zg, p.dropRight = Xg, p.dropRightWhile = ey, p.dropWhile = ty, p.fill = ry, p.filter = sv, p.flatMap = av, p.flatMapDeep = cv, p.flatMapDepth = uv, p.flatten = jh, p.flattenDeep = iy, p.flattenDepth = sy, p.flip = Rv, p.flow = Iw, p.flowRight = xw, p.fromPairs = ny, p.functions = xm, p.functionsIn = Pm, p.groupBy = hv, p.initial = ay, p.intersection = cy, p.intersectionBy = uy, p.intersectionWith = hy, p.invert = Om, p.invertBy = Rm, p.invokeMap = fv, p.iteratee = nc, p.keyBy = pv, p.keys = Lt, p.keysIn = ar, p.map = co, p.mapKeys = Nm, p.mapValues = Am, p.matches = Pw, p.matchesProperty = Sw, p.memoize = ho, p.merge = $m, p.mergeWith = il, p.method = Ow, p.methodOf = Rw, p.mixin = oc, p.negate = lo, p.nthArg = Nw, p.omit = Cm, p.omitBy = Dm, p.once = Tv, p.orderBy = dv, p.over = Aw, p.overArgs = Nv, p.overEvery = $w, p.overSome = Cw, p.partial = Za, p.partialRight = Wh, p.partition = gv, p.pick = jm, p.pickBy = sl, p.property = ll, p.propertyOf = Dw, p.pull = dy, p.pullAll = qh, p.pullAllBy = gy, p.pullAllWith = yy, p.pullAt = vy, p.range = jw, p.rangeRight = Uw, p.rearg = Av, p.reject = mv, p.remove = my, p.rest = $v, p.reverse = Ja, p.sampleSize = bv, p.set = qm, p.setWith = Mm, p.shuffle = _v, p.slice = wy, p.sortBy = xv, p.sortedUniq = Sy, p.sortedUniqBy = Oy, p.split = aw, p.spread = Cv, p.tail = Ry, p.take = Ty, p.takeRight = Ny, p.takeRightWhile = Ay, p.takeWhile = $y, p.tap = Gy, p.throttle = Dv, p.thru = ao, p.toArray = Xh, p.toPairs = nl, p.toPairsIn = ol, p.toPath = kw, p.toPlainObject = tl, p.transform = Lm, p.unary = jv, p.union = Cy, p.unionBy = Dy, p.unionWith = jy, p.uniq = Uy, p.uniqBy = qy, p.uniqWith = My, p.unset = zm, p.unzip = Qa, p.unzipWith = Mh, p.update = km, p.updateWith = Hm, p.values = gs, p.valuesIn = Km, p.without = Ly, p.words = ul, p.wrap = Uv, p.xor = zy, p.xorBy = ky, p.xorWith = Hy, p.zip = Ky, p.zipObject = Vy, p.zipObjectDeep = By, p.zipWith = Fy, p.entries = nl, p.entriesIn = ol, p.extend = rl, p.extendWith = go, oc(p, p), p.add = Kw, p.attempt = hl, p.camelCase = Gm, p.capitalize = al, p.ceil = Vw, p.clamp = Vm, p.clone = Mv, p.cloneDeep = zv, p.cloneDeepWith = kv, p.cloneWith = Lv, p.conformsTo = Hv, p.deburr = cl, p.defaultTo = Ew, p.divide = Bw, p.endsWith = Wm, p.eq = Ur, p.escape = Jm, p.escapeRegExp = Qm, p.every = iv, p.find = nv, p.findIndex = Ch, p.findKey = mm, p.findLast = ov, p.findLastIndex = Dh, p.findLastKey = wm, p.floor = Fw, p.forEach = zh, p.forEachRight = kh, p.forIn = bm, p.forInRight = _m, p.forOwn = Em, p.forOwnRight = Im, p.get = tc, p.gt = Kv, p.gte = Vv, p.has = Sm, p.hasIn = rc, p.head = Uh, p.identity = cr, p.includes = lv, p.indexOf = oy, p.inRange = Bm, p.invoke = Tm, p.isArguments = Hi, p.isArray = de, p.isArrayBuffer = Bv, p.isArrayLike = or, p.isArrayLikeObject = bt, p.isBoolean = Fv, p.isBuffer = Ii, p.isDate = Gv, p.isElement = Wv, p.isEmpty = Jv, p.isEqual = Qv, p.isEqualWith = Yv, p.isError = Xa, p.isFinite = Zv, p.isFunction = oi, p.isInteger = Jh, p.isLength = fo, p.isMap = Qh, p.isMatch = Xv, p.isMatchWith = em, p.isNaN = tm, p.isNative = rm, p.isNil = sm, p.isNull = im, p.isNumber = Yh, p.isObject = at, p.isObjectLike = yt, p.isPlainObject = Hs, p.isRegExp = ec, p.isSafeInteger = nm, p.isSet = Zh, p.isString = po, p.isSymbol = vr, p.isTypedArray = ds, p.isUndefined = om, p.isWeakMap = am, p.isWeakSet = cm, p.join = ly, p.kebabCase = Ym, p.last = Rr, p.lastIndexOf = fy, p.lowerCase = Zm, p.lowerFirst = Xm, p.lt = um, p.lte = hm, p.max = Gw, p.maxBy = Ww, p.mean = Jw, p.meanBy = Qw, p.min = Yw, p.minBy = Zw, p.stubArray = cc, p.stubFalse = uc, p.stubObject = qw, p.stubString = Mw, p.stubTrue = Lw, p.multiply = Xw, p.nth = py, p.noConflict = Tw, p.noop = ac, p.now = uo, p.pad = ew, p.padEnd = tw, p.padStart = rw, p.parseInt = iw, p.random = Fm, p.reduce = yv, p.reduceRight = vv, p.repeat = sw, p.replace = nw, p.result = Um, p.round = eb, p.runInContext = x, p.sample = wv, p.size = Ev, p.snakeCase = ow, p.some = Iv, p.sortedIndex = by, p.sortedIndexBy = _y, p.sortedIndexOf = Ey, p.sortedLastIndex = Iy, p.sortedLastIndexBy = xy, p.sortedLastIndexOf = Py, p.startCase = cw, p.startsWith = uw, p.subtract = tb, p.sum = rb, p.sumBy = ib, p.template = hw, p.times = zw, p.toFinite = ai, p.toInteger = ve, p.toLength = el, p.toLower = lw, p.toNumber = Tr, p.toSafeInteger = lm, p.toString = je, p.toUpper = fw, p.trim = pw, p.trimEnd = dw, p.trimStart = gw, p.truncate = yw, p.unescape = vw, p.uniqueId = Hw, p.upperCase = mw, p.upperFirst = ic, p.each = zh, p.eachRight = kh, p.first = Uh, oc(p, function() {
        var e = {};
        return Br(p, function(i, o) {
          qe.call(p.prototype, o) || (e[o] = i);
        }), e;
      }(), { chain: !1 }), p.VERSION = s, Ir(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        p[e].placeholder = p;
      }), Ir(["drop", "take"], function(e, i) {
        Pe.prototype[e] = function(o) {
          o = o === r ? 1 : Ut(ve(o), 0);
          var c = this.__filtered__ && !i ? new Pe(this) : this.clone();
          return c.__filtered__ ? c.__takeCount__ = Ft(o, c.__takeCount__) : c.__views__.push({ size: Ft(o, F), type: e + (c.__dir__ < 0 ? "Right" : "") }), c;
        }, Pe.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), Ir(["filter", "map", "takeWhile"], function(e, i) {
        var o = i + 1, c = o == N || o == Me;
        Pe.prototype[e] = function(l) {
          var d = this.clone();
          return d.__iteratees__.push({ iteratee: se(l, 3), type: o }), d.__filtered__ = d.__filtered__ || c, d;
        };
      }), Ir(["head", "last"], function(e, i) {
        var o = "take" + (i ? "Right" : "");
        Pe.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), Ir(["initial", "tail"], function(e, i) {
        var o = "drop" + (i ? "" : "Right");
        Pe.prototype[e] = function() {
          return this.__filtered__ ? new Pe(this) : this[o](1);
        };
      }), Pe.prototype.compact = function() {
        return this.filter(cr);
      }, Pe.prototype.find = function(e) {
        return this.filter(e).head();
      }, Pe.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, Pe.prototype.invokeMap = _e(function(e, i) {
        return typeof e == "function" ? new Pe(this) : this.map(function(o) {
          return Us(o, e, i);
        });
      }), Pe.prototype.reject = function(e) {
        return this.filter(lo(se(e)));
      }, Pe.prototype.slice = function(e, i) {
        e = ve(e);
        var o = this;
        return o.__filtered__ && (e > 0 || i < 0) ? new Pe(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), i !== r && (i = ve(i), o = i < 0 ? o.dropRight(-i) : o.take(i - e)), o);
      }, Pe.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, Pe.prototype.toArray = function() {
        return this.take(F);
      }, Br(Pe.prototype, function(e, i) {
        var o = /^(?:filter|find|map|reject)|While$/.test(i), c = /^(?:head|last)$/.test(i), l = p[c ? "take" + (i == "last" ? "Right" : "") : i], d = c || /^find/.test(i);
        l && (p.prototype[i] = function() {
          var m = this.__wrapped__, _ = c ? [1] : arguments, S = m instanceof Pe, q = _[0], M = S || de(m), k = function(Ie) {
            var Oe = l.apply(p, yi([Ie], _));
            return c && W ? Oe[0] : Oe;
          };
          M && o && typeof q == "function" && q.length != 1 && (S = M = !1);
          var W = this.__chain__, ee = !!this.__actions__.length, ne = d && !W, we = S && !ee;
          if (!d && M) {
            m = we ? m : new Pe(this);
            var oe = e.apply(m, _);
            return oe.__actions__.push({ func: ao, args: [k], thisArg: r }), new Pr(oe, W);
          }
          return ne && we ? e.apply(this, _) : (oe = this.thru(k), ne ? c ? oe.value()[0] : oe.value() : oe);
        });
      }), Ir(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var i = Cn[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", c = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var l = arguments;
          if (c && !this.__chain__) {
            var d = this.value();
            return i.apply(de(d) ? d : [], l);
          }
          return this[o](function(m) {
            return i.apply(de(m) ? m : [], l);
          });
        };
      }), Br(Pe.prototype, function(e, i) {
        var o = p[i];
        if (o) {
          var c = o.name + "";
          qe.call(us, c) || (us[c] = []), us[c].push({ name: i, func: o });
        }
      }), us[eo(r, ge).name] = [{ name: "wrapper", func: r }], Pe.prototype.clone = vd, Pe.prototype.reverse = md, Pe.prototype.value = wd, p.prototype.at = Wy, p.prototype.chain = Jy, p.prototype.commit = Qy, p.prototype.next = Yy, p.prototype.plant = Xy, p.prototype.reverse = ev, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = tv, p.prototype.first = p.prototype.head, Ts && (p.prototype[Ts] = Zy), p;
    }, os = Qp();
    wt ? ((wt.exports = os)._ = os, Be._ = os) : Se._ = os;
  }).call(Js);
})(Bc, Bc.exports);
var Vx = Object.defineProperty, Bx = Object.defineProperties, Fx = Object.getOwnPropertyDescriptors, _f = Object.getOwnPropertySymbols, Gx = Object.prototype.hasOwnProperty, Wx = Object.prototype.propertyIsEnumerable, Ef = (n, t, r) => t in n ? Vx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, bo = (n, t) => {
  for (var r in t || (t = {})) Gx.call(t, r) && Ef(n, r, t[r]);
  if (_f) for (var r of _f(t)) Wx.call(t, r) && Ef(n, r, t[r]);
  return n;
}, Jx = (n, t) => Bx(n, Fx(t));
function Oi(n, t, r) {
  var s;
  const a = x_(n);
  return ((s = t.rpcMap) == null ? void 0 : s[a.reference]) || `${Kx}?chainId=${a.namespace}:${a.reference}&projectId=${r}`;
}
function Ji(n) {
  return n.includes(":") ? n.split(":")[1] : n;
}
function Pp(n) {
  return n.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function Qx(n, t) {
  const r = Object.keys(t.namespaces).filter((a) => a.includes(n));
  if (!r.length) return [];
  const s = [];
  return r.forEach((a) => {
    const u = t.namespaces[a].accounts;
    s.push(...u);
  }), s;
}
function Yx(n = {}, t = {}) {
  const r = If(n), s = If(t);
  return Bc.exports.merge(r, s);
}
function If(n) {
  var t, r, s, a;
  const u = {};
  if (!bs(n)) return u;
  for (const [f, y] of Object.entries(n)) {
    const w = au(f) ? [f] : y.chains, g = y.methods || [], b = y.events || [], P = y.rpcMap || {}, O = Qs(f);
    u[O] = Jx(bo(bo({}, u[O]), y), { chains: Ec(w, (t = u[O]) == null ? void 0 : t.chains), methods: Ec(g, (r = u[O]) == null ? void 0 : r.methods), events: Ec(b, (s = u[O]) == null ? void 0 : s.events), rpcMap: bo(bo({}, P), (a = u[O]) == null ? void 0 : a.rpcMap) });
  }
  return u;
}
function Zx(n) {
  return n.includes(":") ? n.split(":")[2] : n;
}
function Xx(n) {
  const t = {};
  for (const [r, s] of Object.entries(n)) {
    const a = s.methods || [], u = s.events || [], f = s.accounts || [], y = au(r) ? [r] : s.chains ? s.chains : Pp(s.accounts);
    t[r] = { chains: y, methods: a, events: u, accounts: f };
  }
  return t;
}
function Tc(n) {
  return typeof n == "number" ? n : n.includes("0x") ? parseInt(n, 16) : n.includes(":") ? Number(n.split(":")[1]) : Number(n);
}
const Sp = {}, it = (n) => Sp[n], Nc = (n, t) => {
  Sp[n] = t;
};
class eP {
  constructor(t) {
    this.name = "polkadot", this.namespace = t.namespace, this.events = it("events"), this.client = it("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = Ji(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Oi(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new li(new Ri(s, it("disableProviderPing")));
  }
}
class tP {
  constructor(t) {
    this.name = "eip155", this.namespace = t.namespace, this.events = it("events"), this.client = it("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), r), this.chainId = parseInt(t), this.events.emit(fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, r) {
    const s = r || Oi(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new li(new Ri(s, it("disableProviderPing")));
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = parseInt(Ji(r));
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const t = this.chainId, r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  async handleSwitchChain(t) {
    var r, s;
    let a = t.request.params ? (r = t.request.params[0]) == null ? void 0 : r.chainId : "0x0";
    a = a.startsWith("0x") ? a : `0x${a}`;
    const u = parseInt(a, 16);
    if (this.isChainApproved(u)) this.setDefaultChain(`${u}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: t.topic, request: { method: t.request.method, params: [{ chainId: a }] }, chainId: (s = this.namespace.chains) == null ? void 0 : s[0] }), this.setDefaultChain(`${u}`);
    else throw new Error(`Failed to switch to chain 'eip155:${u}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
}
class rP {
  constructor(t) {
    this.name = "solana", this.namespace = t.namespace, this.events = it("events"), this.client = it("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = Ji(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Oi(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new li(new Ri(s, it("disableProviderPing")));
  }
}
class iP {
  constructor(t) {
    this.name = "cosmos", this.namespace = t.namespace, this.events = it("events"), this.client = it("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = Ji(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Oi(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new li(new Ri(s, it("disableProviderPing")));
  }
}
class sP {
  constructor(t) {
    this.name = "cip34", this.namespace = t.namespace, this.events = it("events"), this.client = it("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      const s = this.getCardanoRPCUrl(r), a = Ji(r);
      t[a] = this.createHttpProvider(a, s);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  getCardanoRPCUrl(t) {
    const r = this.namespace.rpcMap;
    if (r) return r[t];
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || this.getCardanoRPCUrl(t);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new li(new Ri(s, it("disableProviderPing")));
  }
}
class nP {
  constructor(t) {
    this.name = "elrond", this.namespace = t.namespace, this.events = it("events"), this.client = it("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = Ji(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Oi(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new li(new Ri(s, it("disableProviderPing")));
  }
}
class oP {
  constructor(t) {
    this.name = "multiversx", this.namespace = t.namespace, this.events = it("events"), this.client = it("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = Ji(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Oi(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new li(new Ri(s, it("disableProviderPing")));
  }
}
class aP {
  constructor(t) {
    this.name = "near", this.namespace = t.namespace, this.events = it("events"), this.client = it("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const s = r || Oi(`${this.name}:${t}`, this.namespace);
      if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit(fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      t[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Oi(t, this.namespace);
    return typeof s > "u" ? void 0 : new li(new Ri(s, it("disableProviderPing")));
  }
}
var cP = Object.defineProperty, uP = Object.defineProperties, hP = Object.getOwnPropertyDescriptors, xf = Object.getOwnPropertySymbols, lP = Object.prototype.hasOwnProperty, fP = Object.prototype.propertyIsEnumerable, Pf = (n, t, r) => t in n ? cP(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, _o = (n, t) => {
  for (var r in t || (t = {})) lP.call(t, r) && Pf(n, r, t[r]);
  if (xf) for (var r of xf(t)) fP.call(t, r) && Pf(n, r, t[r]);
  return n;
}, Ac = (n, t) => uP(n, hP(t));
class fu {
  constructor(t) {
    this.events = new Yc(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Uo(qo({ level: (t == null ? void 0 : t.logger) || wf })), this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || !1;
  }
  static async init(t) {
    const r = new fu(t);
    return await r.initialize(), r;
  }
  async request(t, r) {
    const [s, a] = this.validateChain(r);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({ request: _o({}, t), chainId: `${s}:${a}`, topic: this.session.topic });
  }
  sendAsync(t, r, s) {
    const a = (/* @__PURE__ */ new Date()).getTime();
    this.request(t, s).then((u) => r(null, Do(a, u))).catch((u) => r(u, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var t;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (t = this.session) == null ? void 0 : t.topic, reason: Et("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(t) {
    this.shouldAbortPairingAttempt = !1;
    let r = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (r >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: a } = await this.client.connect({ pairingTopic: t, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      s && (this.uri = s, this.events.emit("display_uri", s)), await a().then((u) => {
        this.session = u, this.namespaces || (this.namespaces = Xx(u.namespaces), this.persist("namespaces", this.namespaces));
      }).catch((u) => {
        if (u.message !== Ip) throw u;
        r++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(t, r) {
    try {
      if (!this.session) return;
      const [s, a] = this.validateChain(t);
      this.getProvider(s).setDefaultChain(a, r);
    } catch (s) {
      if (!/Please call connect/.test(s.message)) throw s;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const r = this.client.pairing.getAll();
    if (Bi(r)) {
      for (const s of r) t.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${r.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const t = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await Lx.init({ logger: this.providerOpts.logger || wf, relayUrl: this.providerOpts.relayUrl || zx, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const t = [...new Set(Object.keys(this.session.namespaces).map((r) => Qs(r)))];
    Nc("client", this.client), Nc("events", this.events), Nc("disableProviderPing", this.disableProviderPing), t.forEach((r) => {
      if (!this.session) return;
      const s = Qx(r, this.session), a = Pp(s), u = Yx(this.namespaces, this.optionalNamespaces), f = Ac(_o({}, u[r]), { accounts: s, chains: a });
      switch (r) {
        case "eip155":
          this.rpcProviders[r] = new tP({ namespace: f });
          break;
        case "solana":
          this.rpcProviders[r] = new rP({ namespace: f });
          break;
        case "cosmos":
          this.rpcProviders[r] = new iP({ namespace: f });
          break;
        case "polkadot":
          this.rpcProviders[r] = new eP({ namespace: f });
          break;
        case "cip34":
          this.rpcProviders[r] = new sP({ namespace: f });
          break;
        case "elrond":
          this.rpcProviders[r] = new nP({ namespace: f });
          break;
        case "multiversx":
          this.rpcProviders[r] = new oP({ namespace: f });
          break;
        case "near":
          this.rpcProviders[r] = new aP({ namespace: f });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      this.events.emit("session_ping", t);
    }), this.client.on("session_event", (t) => {
      const { params: r } = t, { event: s } = r;
      if (s.name === "accountsChanged") {
        const a = s.data;
        a && Bi(a) && this.events.emit("accountsChanged", a.map(Zx));
      } else if (s.name === "chainChanged") {
        const a = r.chainId, u = r.event.data, f = Qs(a), y = Tc(a) !== Tc(u) ? `${f}:${Tc(u)}` : a;
        this.onChainChanged(y);
      } else this.events.emit(s.name, s.data);
      this.events.emit("session_event", t);
    }), this.client.on("session_update", ({ topic: t, params: r }) => {
      var s;
      const { namespaces: a } = r, u = (s = this.client) == null ? void 0 : s.session.get(t);
      this.session = Ac(_o({}, u), { namespaces: a }), this.onSessionUpdate(), this.events.emit("session_update", { topic: t, params: r });
    }), this.client.on("session_delete", async (t) => {
      await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", Ac(_o({}, Et("USER_DISCONNECTED")), { data: t.topic }));
    }), this.on(fi.DEFAULT_CHAIN_CHANGED, (t) => {
      this.onChainChanged(t, !0);
    });
  }
  getProvider(t) {
    if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
    return this.rpcProviders[t];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var r;
      this.getProvider(t).updateNamespace((r = this.session) == null ? void 0 : r.namespaces[t]);
    });
  }
  setNamespaces(t) {
    const { namespaces: r, optionalNamespaces: s, sessionProperties: a } = t;
    r && Object.keys(r).length && (this.namespaces = r), s && Object.keys(s).length && (this.optionalNamespaces = s), this.sessionProperties = a, this.persist("namespaces", r), this.persist("optionalNamespaces", s);
  }
  validateChain(t) {
    const [r, s] = (t == null ? void 0 : t.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [r, s];
    if (r && !Object.keys(this.namespaces || {}).map((f) => Qs(f)).includes(r)) throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);
    if (r && s) return [r, s];
    const a = Qs(Object.keys(this.namespaces)[0]), u = this.rpcProviders[a].getDefaultChain();
    return [a, u];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  onChainChanged(t, r = !1) {
    var s;
    if (!this.namespaces) return;
    const [a, u] = this.validateChain(t);
    r || this.getProvider(a).setDefaultChain(u), ((s = this.namespaces[a]) != null ? s : this.namespaces[`${a}:${u}`]).defaultChain = u, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", u);
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(t, r) {
    this.client.core.storage.setItem(`${bf}/${t}`, r);
  }
  async getFromStore(t) {
    return await this.client.core.storage.getItem(`${bf}/${t}`);
  }
}
const pP = fu, dP = "wc", gP = "ethereum_provider", yP = `${dP}@2:${gP}:`, vP = "https://rpc.walletconnect.com/v1/", Fc = ["eth_sendTransaction", "personal_sign"], mP = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"], Gc = ["chainChanged", "accountsChanged"], wP = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var bP = Object.defineProperty, _P = Object.defineProperties, EP = Object.getOwnPropertyDescriptors, Sf = Object.getOwnPropertySymbols, IP = Object.prototype.hasOwnProperty, xP = Object.prototype.propertyIsEnumerable, Of = (n, t, r) => t in n ? bP(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, Xs = (n, t) => {
  for (var r in t || (t = {})) IP.call(t, r) && Of(n, r, t[r]);
  if (Sf) for (var r of Sf(t)) xP.call(t, r) && Of(n, r, t[r]);
  return n;
}, Rf = (n, t) => _P(n, EP(t));
function Ao(n) {
  return Number(n[0].split(":")[1]);
}
function $c(n) {
  return `0x${n.toString(16)}`;
}
function PP(n) {
  const { chains: t, optionalChains: r, methods: s, optionalMethods: a, events: u, optionalEvents: f, rpcMap: y } = n;
  if (!Cc(t)) throw new Error("Invalid chains");
  const w = { chains: t, methods: s || Fc, events: u || Gc, rpcMap: Xs({}, t.length ? { [Ao(t)]: y[Ao(t)] } : {}) }, g = u == null ? void 0 : u.filter((U) => !Gc.includes(U)), b = s == null ? void 0 : s.filter((U) => !Fc.includes(U));
  if (!r && !f && !a && !(g != null && g.length) && !(b != null && b.length)) return { required: t.length ? w : void 0 };
  const P = (g == null ? void 0 : g.length) && (b == null ? void 0 : b.length) || !r, O = { chains: [...new Set(P ? w.chains.concat(r || []) : r)], methods: [...new Set(w.methods.concat(a != null && a.length ? a : mP))], events: [...new Set(w.events.concat(f != null && f.length ? f : wP))], rpcMap: y };
  return { required: t.length ? w : void 0, optional: r.length ? O : void 0 };
}
class pu {
  constructor() {
    this.events = new Qr.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = yP, this.on = (t, r) => (this.events.on(t, r), this), this.once = (t, r) => (this.events.once(t, r), this), this.removeListener = (t, r) => (this.events.removeListener(t, r), this), this.off = (t, r) => (this.events.off(t, r), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const r = new pu();
    return await r.initialize(t), r;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, r) {
    this.signer.sendAsync(t, r, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: r, optional: s } = PP(this.rpc);
    try {
      const a = await new Promise(async (f, y) => {
        var w;
        this.rpc.showQrModal && ((w = this.modal) == null || w.subscribeModal((g) => {
          !g.open && !this.signer.session && (this.signer.abortPairingAttempt(), y(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(Rf(Xs({ namespaces: Xs({}, r && { [this.namespace]: r }) }, s && { optionalNamespaces: { [this.namespace]: s } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((g) => {
          f(g);
        }).catch((g) => {
          y(new Error(g.message));
        });
      });
      if (!a) return;
      const u = Ob(a.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : u), this.setAccounts(u), this.events.emit("connect", { chainId: $c(this.chainId) });
    } catch (a) {
      throw this.signer.logger.error(a), a;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: r } = t, { event: s } = r;
      s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data), this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const r = parseInt(t);
      this.chainId = r, this.events.emit("chainChanged", $c(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", Rf(Xs({}, Tb("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var r, s;
      this.rpc.showQrModal && ((r = this.modal) == null || r.closeModal(), (s = this.modal) == null || s.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const r = t.filter((s) => this.isCompatibleChainId(s)).map((s) => this.parseChainId(s));
    r.length && (this.chainId = r[0], this.events.emit("chainChanged", $c(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const r = this.parseChainId(t);
      this.chainId = r, this.switchEthereumChain(r);
    }
  }
  parseAccountId(t) {
    const [r, s, a] = t.split(":");
    return { chainId: `${r}:${s}`, address: a };
  }
  setAccounts(t) {
    this.accounts = t.filter((r) => this.parseChainId(this.parseAccountId(r).chainId) === this.chainId).map((r) => this.parseAccountId(r).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var r, s;
    const a = (r = t == null ? void 0 : t.chains) != null ? r : [], u = (s = t == null ? void 0 : t.optionalChains) != null ? s : [], f = a.concat(u);
    if (!f.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const y = a.length ? (t == null ? void 0 : t.methods) || Fc : [], w = a.length ? (t == null ? void 0 : t.events) || Gc : [], g = (t == null ? void 0 : t.optionalMethods) || [], b = (t == null ? void 0 : t.optionalEvents) || [], P = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(f, t.projectId), O = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: a == null ? void 0 : a.map((U) => this.formatChainId(U)), optionalChains: u.map((U) => this.formatChainId(U)), methods: y, events: w, optionalMethods: g, optionalEvents: b, rpcMap: P, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: O, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, r) {
    const s = {};
    return t.forEach((a) => {
      s[a] = this.getRpcUrl(a, r);
    }), s;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? Ao(this.rpc.chains) : Ao(this.rpc.optionalChains), this.signer = await pP.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let r;
      try {
        const { WalletConnectModal: s } = await import("./index-DceSb2mQ.js").then((a) => a.i);
        r = s;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (r) try {
        this.modal = new r(Xs({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
      } catch (s) {
        throw this.signer.logger.error(s), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: r, optionalChains: s, rpcMap: a } = t;
    r && Cc(r) && (this.rpc.chains = r.map((u) => this.formatChainId(u)), r.forEach((u) => {
      this.rpc.rpcMap[u] = (a == null ? void 0 : a[u]) || this.getRpcUrl(u);
    })), s && Cc(s) && (this.rpc.optionalChains = [], this.rpc.optionalChains = s == null ? void 0 : s.map((u) => this.formatChainId(u)), s.forEach((u) => {
      this.rpc.rpcMap[u] = (a == null ? void 0 : a[u]) || this.getRpcUrl(u);
    }));
  }
  getRpcUrl(t, r) {
    var s;
    return ((s = this.rpc.rpcMap) == null ? void 0 : s[t]) || `${vP}?chainId=eip155:${t}&projectId=${r || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), r = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
    this.setChainIds(t ? [this.formatChainId(t)] : r == null ? void 0 : r.accounts), this.setAccounts(r == null ? void 0 : r.accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((r) => this.parseAccount(r));
  }
}
const KP = pu;
export {
  KP as EthereumProvider,
  wP as OPTIONAL_EVENTS,
  mP as OPTIONAL_METHODS,
  Gc as REQUIRED_EVENTS,
  Fc as REQUIRED_METHODS,
  pu as default
};
