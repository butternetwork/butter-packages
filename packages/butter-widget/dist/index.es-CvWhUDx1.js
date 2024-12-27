import { p as T, l as Re, g as Se, D as Ae } from "./index-jFQGGD_v.js";
var k = function(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, a = t.length, i; o < a; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}, Pe = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r, o) {
      this.name = t, this.version = r, this.os = o, this.type = "browser";
    }
    return e;
  }()
), Te = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = T.platform;
    }
    return e;
  }()
), Be = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r, o, a) {
      this.name = t, this.version = r, this.os = o, this.bot = a, this.type = "bot-device";
    }
    return e;
  }()
), xe = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), je = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), Ie = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, De = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, J = 3, Ce = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", Ie]
], G = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function Wt(e) {
  return e ? X(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new je() : typeof navigator < "u" ? X(navigator.userAgent) : Ue();
}
function Me(e) {
  return e !== "" && Ce.reduce(function(t, r) {
    var o = r[0], a = r[1];
    if (t)
      return t;
    var i = a.exec(e);
    return !!i && [o, i];
  }, !1);
}
function X(e) {
  var t = Me(e);
  if (!t)
    return null;
  var r = t[0], o = t[1];
  if (r === "searchbot")
    return new xe();
  var a = o[1] && o[1].split(".").join("_").split("_").slice(0, 3);
  a ? a.length < J && (a = k(k([], a, !0), We(J - a.length), !0)) : a = [];
  var i = a.join("."), u = Ne(e), f = De.exec(e);
  return f && f[1] ? new Be(r, i, u, f[1]) : new Pe(r, i, u);
}
function Ne(e) {
  for (var t = 0, r = G.length; t < r; t++) {
    var o = G[t], a = o[0], i = o[1], u = i.exec(e);
    if (u)
      return a;
  }
  return null;
}
function Ue() {
  var e = typeof T < "u" && T.version;
  return e ? new Te(T.version.slice(1)) : null;
}
function We(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
const Le = (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), Fe = (e) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = e.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (o, a) => typeof a == "string" && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a);
};
function He(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return Fe(e);
  } catch {
    return e;
  }
}
function z(e) {
  return typeof e == "string" ? e : Le(e) || "";
}
const qe = "PARSE_ERROR", $e = "INVALID_REQUEST", Ve = "METHOD_NOT_FOUND", ke = "INVALID_PARAMS", fe = "INTERNAL_ERROR", F = "SERVER_ERROR", Je = [-32700, -32600, -32601, -32602, -32603], B = {
  [qe]: { code: -32700, message: "Parse error" },
  [$e]: { code: -32600, message: "Invalid Request" },
  [Ve]: { code: -32601, message: "Method not found" },
  [ke]: { code: -32602, message: "Invalid params" },
  [fe]: { code: -32603, message: "Internal error" },
  [F]: { code: -32e3, message: "Server error" }
}, ce = F;
function Ge(e) {
  return Je.includes(e);
}
function K(e) {
  return Object.keys(B).includes(e) ? B[e] : B[ce];
}
function Xe(e) {
  const t = Object.values(B).find((r) => r.code === e);
  return t || B[ce];
}
function ze(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
}
var N = {};
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
var U = function(e, t) {
  return U = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
    r.__proto__ = o;
  } || function(r, o) {
    for (var a in o) o.hasOwnProperty(a) && (r[a] = o[a]);
  }, U(e, t);
};
function Ke(e, t) {
  U(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var W = function() {
  return W = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, W.apply(this, arguments);
};
function Qe(e, t) {
  var r = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (r[o[a]] = e[o[a]]);
  return r;
}
function Ye(e, t, r, o) {
  var a = arguments.length, i = a < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, r) : o, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(e, t, r, o);
  else for (var f = e.length - 1; f >= 0; f--) (u = e[f]) && (i = (a < 3 ? u(i) : a > 3 ? u(t, r, i) : u(t, r)) || i);
  return a > 3 && i && Object.defineProperty(t, r, i), i;
}
function Ze(e, t) {
  return function(r, o) {
    t(r, o, e);
  };
}
function et(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function tt(e, t, r, o) {
  function a(i) {
    return i instanceof r ? i : new r(function(u) {
      u(i);
    });
  }
  return new (r || (r = Promise))(function(i, u) {
    function f(g) {
      try {
        c(o.next(g));
      } catch (R) {
        u(R);
      }
    }
    function p(g) {
      try {
        c(o.throw(g));
      } catch (R) {
        u(R);
      }
    }
    function c(g) {
      g.done ? i(g.value) : a(g.value).then(f, p);
    }
    c((o = o.apply(e, t || [])).next());
  });
}
function rt(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, o, a, i, u;
  return u = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function f(c) {
    return function(g) {
      return p([c, g]);
    };
  }
  function p(c) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (o = 1, a && (i = c[0] & 2 ? a.return : c[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, c[1])).done) return i;
      switch (a = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
        case 0:
        case 1:
          i = c;
          break;
        case 4:
          return r.label++, { value: c[1], done: !1 };
        case 5:
          r.label++, a = c[1], c = [0];
          continue;
        case 7:
          c = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            r = 0;
            continue;
          }
          if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
            r.label = c[1];
            break;
          }
          if (c[0] === 6 && r.label < i[1]) {
            r.label = i[1], i = c;
            break;
          }
          if (i && r.label < i[2]) {
            r.label = i[2], r.ops.push(c);
            break;
          }
          i[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      c = t.call(e, r);
    } catch (g) {
      c = [6, g], a = 0;
    } finally {
      o = i = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function nt(e, t, r, o) {
  o === void 0 && (o = r), e[o] = t[r];
}
function ot(e, t) {
  for (var r in e) r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function L(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], o = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function le(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var o = r.call(e), a, i = [], u;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = o.next()).done; ) i.push(a.value);
  } catch (f) {
    u = { error: f };
  } finally {
    try {
      a && !a.done && (r = o.return) && r.call(o);
    } finally {
      if (u) throw u.error;
    }
  }
  return i;
}
function it() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(le(arguments[t]));
  return e;
}
function st() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var o = Array(e), a = 0, t = 0; t < r; t++)
    for (var i = arguments[t], u = 0, f = i.length; u < f; u++, a++)
      o[a] = i[u];
  return o;
}
function x(e) {
  return this instanceof x ? (this.v = e, this) : new x(e);
}
function at(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = r.apply(e, t || []), a, i = [];
  return a = {}, u("next"), u("throw"), u("return"), a[Symbol.asyncIterator] = function() {
    return this;
  }, a;
  function u(y) {
    o[y] && (a[y] = function(_) {
      return new Promise(function(A, w) {
        i.push([y, _, A, w]) > 1 || f(y, _);
      });
    });
  }
  function f(y, _) {
    try {
      p(o[y](_));
    } catch (A) {
      R(i[0][3], A);
    }
  }
  function p(y) {
    y.value instanceof x ? Promise.resolve(y.value.v).then(c, g) : R(i[0][2], y);
  }
  function c(y) {
    f("next", y);
  }
  function g(y) {
    f("throw", y);
  }
  function R(y, _) {
    y(_), i.shift(), i.length && f(i[0][0], i[0][1]);
  }
}
function ut(e) {
  var t, r;
  return t = {}, o("next"), o("throw", function(a) {
    throw a;
  }), o("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function o(a, i) {
    t[a] = e[a] ? function(u) {
      return (r = !r) ? { value: x(e[a](u)), done: a === "return" } : i ? i(u) : u;
    } : i;
  }
}
function ft(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof L == "function" ? L(e) : e[Symbol.iterator](), r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function o(i) {
    r[i] = e[i] && function(u) {
      return new Promise(function(f, p) {
        u = e[i](u), a(f, p, u.done, u.value);
      });
    };
  }
  function a(i, u, f, p) {
    Promise.resolve(p).then(function(c) {
      i({ value: c, done: f });
    }, u);
  }
}
function ct(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function lt(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function ht(e) {
  return e && e.__esModule ? e : { default: e };
}
function dt(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function pt(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return W;
  },
  __asyncDelegator: ut,
  __asyncGenerator: at,
  __asyncValues: ft,
  __await: x,
  __awaiter: tt,
  __classPrivateFieldGet: dt,
  __classPrivateFieldSet: pt,
  __createBinding: nt,
  __decorate: Ye,
  __exportStar: ot,
  __extends: Ke,
  __generator: rt,
  __importDefault: ht,
  __importStar: lt,
  __makeTemplateObject: ct,
  __metadata: et,
  __param: Ze,
  __read: le,
  __rest: Qe,
  __spread: it,
  __spreadArrays: st,
  __values: L
}, Symbol.toStringTag, { value: "Module" })), bt = /* @__PURE__ */ Re(yt);
var E = {}, Q;
function wt() {
  if (Q) return E;
  Q = 1, Object.defineProperty(E, "__esModule", { value: !0 }), E.isBrowserCryptoAvailable = E.getSubtleCrypto = E.getBrowerCrypto = void 0;
  function e() {
    return (window == null ? void 0 : window.crypto) || (window == null ? void 0 : window.msCrypto) || {};
  }
  E.getBrowerCrypto = e;
  function t() {
    const o = e();
    return o.subtle || o.webkitSubtle;
  }
  E.getSubtleCrypto = t;
  function r() {
    return !!e() && !!t();
  }
  return E.isBrowserCryptoAvailable = r, E;
}
var O = {}, Y;
function vt() {
  if (Y) return O;
  Y = 1, Object.defineProperty(O, "__esModule", { value: !0 }), O.isBrowser = O.isNode = O.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  O.isReactNative = e;
  function t() {
    return typeof T < "u" && typeof T.versions < "u" && typeof T.versions.node < "u";
  }
  O.isNode = t;
  function r() {
    return !e() && !t();
  }
  return O.isBrowser = r, O;
}
var Z;
function gt() {
  return Z || (Z = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = bt;
    t.__exportStar(wt(), e), t.__exportStar(vt(), e);
  }(N)), N;
}
var Lt = gt();
function he(e = 3) {
  const t = Date.now() * Math.pow(10, e), r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function Ft(e = 6) {
  return BigInt(he(e));
}
function Ht(e, t, r) {
  return {
    id: r || he(),
    jsonrpc: "2.0",
    method: e,
    params: t
  };
}
function qt(e, t) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: t
  };
}
function mt(e, t, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: _t(t, r)
  };
}
function _t(e, t) {
  return typeof e > "u" ? K(fe) : (typeof e == "string" && (e = Object.assign(Object.assign({}, K(F)), { message: e })), typeof t < "u" && (e.data = t), Ge(e.code) && (e = Xe(e.code)), e);
}
class de {
}
let $t = class extends de {
  constructor(t) {
    super();
  }
};
class Et extends de {
  constructor() {
    super();
  }
}
class kt extends Et {
  constructor(t) {
    super();
  }
}
const Ot = "^https?:", Rt = "^wss?:";
function St(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function pe(e, t) {
  const r = St(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function ee(e) {
  return pe(e, Ot);
}
function Jt(e) {
  return pe(e, Rt);
}
function Gt(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function ye(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function Xt(e) {
  return ye(e) && "method" in e;
}
function zt(e) {
  return ye(e) && (At(e) || Pt(e));
}
function At(e) {
  return "result" in e;
}
function Pt(e) {
  return "error" in e;
}
var I = { exports: {} }, te;
function Tt() {
  return te || (te = 1, function(e, t) {
    var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof window < "u" && window, o = function() {
      function i() {
        this.fetch = !1, this.DOMException = r.DOMException;
      }
      return i.prototype = r, new i();
    }();
    (function(i) {
      (function(u) {
        var f = typeof i < "u" && i || typeof self < "u" && self || // eslint-disable-next-line no-undef
        typeof window < "u" && window || {}, p = {
          searchParams: "URLSearchParams" in f,
          iterable: "Symbol" in f && "iterator" in Symbol,
          blob: "FileReader" in f && "Blob" in f && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in f,
          arrayBuffer: "ArrayBuffer" in f
        };
        function c(n) {
          return n && DataView.prototype.isPrototypeOf(n);
        }
        if (p.arrayBuffer)
          var g = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ], R = ArrayBuffer.isView || function(n) {
            return n && g.indexOf(Object.prototype.toString.call(n)) > -1;
          };
        function y(n) {
          if (typeof n != "string" && (n = String(n)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(n) || n === "")
            throw new TypeError('Invalid character in header field name: "' + n + '"');
          return n.toLowerCase();
        }
        function _(n) {
          return typeof n != "string" && (n = String(n)), n;
        }
        function A(n) {
          var s = {
            next: function() {
              var l = n.shift();
              return { done: l === void 0, value: l };
            }
          };
          return p.iterable && (s[Symbol.iterator] = function() {
            return s;
          }), s;
        }
        function w(n) {
          this.map = {}, n instanceof w ? n.forEach(function(s, l) {
            this.append(l, s);
          }, this) : Array.isArray(n) ? n.forEach(function(s) {
            if (s.length != 2)
              throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + s.length);
            this.append(s[0], s[1]);
          }, this) : n && Object.getOwnPropertyNames(n).forEach(function(s) {
            this.append(s, n[s]);
          }, this);
        }
        w.prototype.append = function(n, s) {
          n = y(n), s = _(s);
          var l = this.map[n];
          this.map[n] = l ? l + ", " + s : s;
        }, w.prototype.delete = function(n) {
          delete this.map[y(n)];
        }, w.prototype.get = function(n) {
          return n = y(n), this.has(n) ? this.map[n] : null;
        }, w.prototype.has = function(n) {
          return this.map.hasOwnProperty(y(n));
        }, w.prototype.set = function(n, s) {
          this.map[y(n)] = _(s);
        }, w.prototype.forEach = function(n, s) {
          for (var l in this.map)
            this.map.hasOwnProperty(l) && n.call(s, this.map[l], l, this);
        }, w.prototype.keys = function() {
          var n = [];
          return this.forEach(function(s, l) {
            n.push(l);
          }), A(n);
        }, w.prototype.values = function() {
          var n = [];
          return this.forEach(function(s) {
            n.push(s);
          }), A(n);
        }, w.prototype.entries = function() {
          var n = [];
          return this.forEach(function(s, l) {
            n.push([l, s]);
          }), A(n);
        }, p.iterable && (w.prototype[Symbol.iterator] = w.prototype.entries);
        function D(n) {
          if (!n._noBody) {
            if (n.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            n.bodyUsed = !0;
          }
        }
        function H(n) {
          return new Promise(function(s, l) {
            n.onload = function() {
              s(n.result);
            }, n.onerror = function() {
              l(n.error);
            };
          });
        }
        function be(n) {
          var s = new FileReader(), l = H(s);
          return s.readAsArrayBuffer(n), l;
        }
        function we(n) {
          var s = new FileReader(), l = H(s), d = /charset=([A-Za-z0-9_-]+)/.exec(n.type), b = d ? d[1] : "utf-8";
          return s.readAsText(n, b), l;
        }
        function ve(n) {
          for (var s = new Uint8Array(n), l = new Array(s.length), d = 0; d < s.length; d++)
            l[d] = String.fromCharCode(s[d]);
          return l.join("");
        }
        function q(n) {
          if (n.slice)
            return n.slice(0);
          var s = new Uint8Array(n.byteLength);
          return s.set(new Uint8Array(n)), s.buffer;
        }
        function $() {
          return this.bodyUsed = !1, this._initBody = function(n) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = n, n ? typeof n == "string" ? this._bodyText = n : p.blob && Blob.prototype.isPrototypeOf(n) ? this._bodyBlob = n : p.formData && FormData.prototype.isPrototypeOf(n) ? this._bodyFormData = n : p.searchParams && URLSearchParams.prototype.isPrototypeOf(n) ? this._bodyText = n.toString() : p.arrayBuffer && p.blob && c(n) ? (this._bodyArrayBuffer = q(n.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : p.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(n) || R(n)) ? this._bodyArrayBuffer = q(n) : this._bodyText = n = Object.prototype.toString.call(n) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof n == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : p.searchParams && URLSearchParams.prototype.isPrototypeOf(n) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, p.blob && (this.blob = function() {
            var n = D(this);
            if (n)
              return n;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }), this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var n = D(this);
              return n || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
                this._bodyArrayBuffer.buffer.slice(
                  this._bodyArrayBuffer.byteOffset,
                  this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                )
              ) : Promise.resolve(this._bodyArrayBuffer));
            } else {
              if (p.blob)
                return this.blob().then(be);
              throw new Error("could not read as ArrayBuffer");
            }
          }, this.text = function() {
            var n = D(this);
            if (n)
              return n;
            if (this._bodyBlob)
              return we(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(ve(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, p.formData && (this.formData = function() {
            return this.text().then(_e);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var ge = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
        function me(n) {
          var s = n.toUpperCase();
          return ge.indexOf(s) > -1 ? s : n;
        }
        function S(n, s) {
          if (!(this instanceof S))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          s = s || {};
          var l = s.body;
          if (n instanceof S) {
            if (n.bodyUsed)
              throw new TypeError("Already read");
            this.url = n.url, this.credentials = n.credentials, s.headers || (this.headers = new w(n.headers)), this.method = n.method, this.mode = n.mode, this.signal = n.signal, !l && n._bodyInit != null && (l = n._bodyInit, n.bodyUsed = !0);
          } else
            this.url = String(n);
          if (this.credentials = s.credentials || this.credentials || "same-origin", (s.headers || !this.headers) && (this.headers = new w(s.headers)), this.method = me(s.method || this.method || "GET"), this.mode = s.mode || this.mode || null, this.signal = s.signal || this.signal || function() {
            if ("AbortController" in f) {
              var h = new AbortController();
              return h.signal;
            }
          }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && l)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (this._initBody(l), (this.method === "GET" || this.method === "HEAD") && (s.cache === "no-store" || s.cache === "no-cache")) {
            var d = /([?&])_=[^&]*/;
            if (d.test(this.url))
              this.url = this.url.replace(d, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
            else {
              var b = /\?/;
              this.url += (b.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
            }
          }
        }
        S.prototype.clone = function() {
          return new S(this, { body: this._bodyInit });
        };
        function _e(n) {
          var s = new FormData();
          return n.trim().split("&").forEach(function(l) {
            if (l) {
              var d = l.split("="), b = d.shift().replace(/\+/g, " "), h = d.join("=").replace(/\+/g, " ");
              s.append(decodeURIComponent(b), decodeURIComponent(h));
            }
          }), s;
        }
        function Ee(n) {
          var s = new w(), l = n.replace(/\r?\n[\t ]+/g, " ");
          return l.split("\r").map(function(d) {
            return d.indexOf(`
`) === 0 ? d.substr(1, d.length) : d;
          }).forEach(function(d) {
            var b = d.split(":"), h = b.shift().trim();
            if (h) {
              var j = b.join(":").trim();
              try {
                s.append(h, j);
              } catch (M) {
                console.warn("Response " + M.message);
              }
            }
          }), s;
        }
        $.call(S.prototype);
        function m(n, s) {
          if (!(this instanceof m))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          if (s || (s = {}), this.type = "default", this.status = s.status === void 0 ? 200 : s.status, this.status < 200 || this.status > 599)
            throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          this.ok = this.status >= 200 && this.status < 300, this.statusText = s.statusText === void 0 ? "" : "" + s.statusText, this.headers = new w(s.headers), this.url = s.url || "", this._initBody(n);
        }
        $.call(m.prototype), m.prototype.clone = function() {
          return new m(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new w(this.headers),
            url: this.url
          });
        }, m.error = function() {
          var n = new m(null, { status: 200, statusText: "" });
          return n.ok = !1, n.status = 0, n.type = "error", n;
        };
        var Oe = [301, 302, 303, 307, 308];
        m.redirect = function(n, s) {
          if (Oe.indexOf(s) === -1)
            throw new RangeError("Invalid status code");
          return new m(null, { status: s, headers: { location: n } });
        }, u.DOMException = f.DOMException;
        try {
          new u.DOMException();
        } catch {
          u.DOMException = function(s, l) {
            this.message = s, this.name = l;
            var d = Error(s);
            this.stack = d.stack;
          }, u.DOMException.prototype = Object.create(Error.prototype), u.DOMException.prototype.constructor = u.DOMException;
        }
        function C(n, s) {
          return new Promise(function(l, d) {
            var b = new S(n, s);
            if (b.signal && b.signal.aborted)
              return d(new u.DOMException("Aborted", "AbortError"));
            var h = new XMLHttpRequest();
            function j() {
              h.abort();
            }
            h.onload = function() {
              var v = {
                statusText: h.statusText,
                headers: Ee(h.getAllResponseHeaders() || "")
              };
              b.url.indexOf("file://") === 0 && (h.status < 200 || h.status > 599) ? v.status = 200 : v.status = h.status, v.url = "responseURL" in h ? h.responseURL : v.headers.get("X-Request-URL");
              var P = "response" in h ? h.response : h.responseText;
              setTimeout(function() {
                l(new m(P, v));
              }, 0);
            }, h.onerror = function() {
              setTimeout(function() {
                d(new TypeError("Network request failed"));
              }, 0);
            }, h.ontimeout = function() {
              setTimeout(function() {
                d(new TypeError("Network request timed out"));
              }, 0);
            }, h.onabort = function() {
              setTimeout(function() {
                d(new u.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function M(v) {
              try {
                return v === "" && f.location.href ? f.location.href : v;
              } catch {
                return v;
              }
            }
            if (h.open(b.method, M(b.url), !0), b.credentials === "include" ? h.withCredentials = !0 : b.credentials === "omit" && (h.withCredentials = !1), "responseType" in h && (p.blob ? h.responseType = "blob" : p.arrayBuffer && (h.responseType = "arraybuffer")), s && typeof s.headers == "object" && !(s.headers instanceof w || f.Headers && s.headers instanceof f.Headers)) {
              var V = [];
              Object.getOwnPropertyNames(s.headers).forEach(function(v) {
                V.push(y(v)), h.setRequestHeader(v, _(s.headers[v]));
              }), b.headers.forEach(function(v, P) {
                V.indexOf(P) === -1 && h.setRequestHeader(P, v);
              });
            } else
              b.headers.forEach(function(v, P) {
                h.setRequestHeader(P, v);
              });
            b.signal && (b.signal.addEventListener("abort", j), h.onreadystatechange = function() {
              h.readyState === 4 && b.signal.removeEventListener("abort", j);
            }), h.send(typeof b._bodyInit > "u" ? null : b._bodyInit);
          });
        }
        return C.polyfill = !0, f.fetch || (f.fetch = C, f.Headers = w, f.Request = S, f.Response = m), u.Headers = w, u.Request = S, u.Response = m, u.fetch = C, Object.defineProperty(u, "__esModule", { value: !0 }), u;
      })({});
    })(o), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
    var a = r.fetch ? r : o;
    t = a.fetch, t.default = a.fetch, t.fetch = a.fetch, t.Headers = a.Headers, t.Request = a.Request, t.Response = a.Response, e.exports = t;
  }(I, I.exports)), I.exports;
}
var Bt = Tt();
const re = /* @__PURE__ */ Se(Bt);
var xt = Object.defineProperty, jt = Object.defineProperties, It = Object.getOwnPropertyDescriptors, ne = Object.getOwnPropertySymbols, Dt = Object.prototype.hasOwnProperty, Ct = Object.prototype.propertyIsEnumerable, oe = (e, t, r) => t in e ? xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ie = (e, t) => {
  for (var r in t) Dt.call(t, r) && oe(e, r, t[r]);
  if (ne) for (var r of ne(t)) Ct.call(t, r) && oe(e, r, t[r]);
  return e;
}, se = (e, t) => jt(e, It(t));
const Mt = { Accept: "application/json", "Content-Type": "application/json" }, Nt = "POST", ae = { headers: Mt, method: Nt }, ue = 10;
class Kt {
  constructor(t, r = !1) {
    if (this.url = t, this.disableProviderPing = r, this.events = new Ae.EventEmitter(), this.isAvailable = !1, this.registering = !1, !ee(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    this.url = t, this.disableProviderPing = r;
  }
  get connected() {
    return this.isAvailable;
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
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || await this.register();
    try {
      const r = z(t), o = await (await re(this.url, se(ie({}, ae), { body: r }))).json();
      this.onPayload({ data: o });
    } catch (r) {
      this.onError(t.id, r);
    }
  }
  async register(t = this.url) {
    if (!ee(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((o, a) => {
        this.events.once("register_error", (i) => {
          this.resetMaxListeners(), a(i);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u") return a(new Error("HTTP connection is missing or invalid"));
          o();
        });
      });
    }
    this.url = t, this.registering = !0;
    try {
      if (!this.disableProviderPing) {
        const r = z({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await re(t, se(ie({}, ae), { body: r }));
      }
      this.onOpen();
    } catch (r) {
      const o = this.parseError(r);
      throw this.events.emit("register_error", o), this.onClose(), o;
    }
  }
  onOpen() {
    this.isAvailable = !0, this.registering = !1, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = !1, this.registering = !1, this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? He(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const o = this.parseError(r), a = o.message || o.toString(), i = mt(t, a);
    this.events.emit("payload", i);
  }
  parseError(t, r = this.url) {
    return ze(t, r, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > ue && this.events.setMaxListeners(ue);
  }
}
export {
  He as a,
  zt as b,
  Jt as c,
  Wt as d,
  Lt as e,
  Ht as f,
  Ft as g,
  Gt as h,
  Pt as i,
  mt as j,
  Xt as k,
  qt as l,
  At as m,
  he as n,
  Kt as o,
  ze as p,
  $t as q,
  kt as r,
  z as s
};
