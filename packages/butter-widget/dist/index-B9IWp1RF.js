import { T as Pe, M as rt, R as k, a as ne, E as ho, C as O, b as z, O as K, c as me } from "./index-DceSb2mQ.js";
import { g as mo } from "./index-jFQGGD_v.js";
import { r as fo } from "./dijkstra-CnN2IfZC.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt = window, Er = nt.ShadowRoot && (nt.ShadyCSS === void 0 || nt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ar = Symbol(), Br = /* @__PURE__ */ new WeakMap();
let Dn = class {
  constructor(e, r, o) {
    if (this._$cssResult$ = !0, o !== Ar) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Er && e === void 0) {
      const o = r !== void 0 && r.length === 1;
      o && (e = Br.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), o && Br.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const po = (t) => new Dn(typeof t == "string" ? t : t + "", void 0, Ar), B = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((o, n, i) => o + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[i + 1], t[0]);
  return new Dn(r, t, Ar);
}, go = (t, e) => {
  Er ? t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet) : e.forEach((r) => {
    const o = document.createElement("style"), n = nt.litNonce;
    n !== void 0 && o.setAttribute("nonce", n), o.textContent = r.cssText, t.appendChild(o);
  });
}, Wr = Er ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const o of e.cssRules) r += o.cssText;
  return po(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var xt;
const ot = window, Ur = ot.trustedTypes, wo = Ur ? Ur.emptyScript : "", jr = ot.reactiveElementPolyfillSupport, nr = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? wo : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, Nn = (t, e) => e !== t && (e == e || t == t), $t = { attribute: !0, type: String, converter: nr, reflect: !1, hasChanged: Nn }, or = "finalized";
let _e = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
  }
  static addInitializer(e) {
    var r;
    this.finalize(), ((r = this.h) !== null && r !== void 0 ? r : this.h = []).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((r, o) => {
      const n = this._$Ep(o, r);
      n !== void 0 && (this._$Ev.set(n, o), e.push(n));
    }), e;
  }
  static createProperty(e, r = $t) {
    if (r.state && (r.attribute = !1), this.finalize(), this.elementProperties.set(e, r), !r.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const o = typeof e == "symbol" ? Symbol() : "__" + e, n = this.getPropertyDescriptor(e, o, r);
      n !== void 0 && Object.defineProperty(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, r, o) {
    return { get() {
      return this[r];
    }, set(n) {
      const i = this[e];
      this[r] = n, this.requestUpdate(e, i, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || $t;
  }
  static finalize() {
    if (this.hasOwnProperty(or)) return !1;
    this[or] = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const r = this.properties, o = [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)];
      for (const n of o) this.createProperty(n, r[n]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const o = new Set(e.flat(1 / 0).reverse());
      for (const n of o) r.unshift(Wr(n));
    } else e !== void 0 && r.push(Wr(e));
    return r;
  }
  static _$Ep(e, r) {
    const o = r.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  _$Eu() {
    var e;
    this._$E_ = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((r) => r(this));
  }
  addController(e) {
    var r, o;
    ((r = this._$ES) !== null && r !== void 0 ? r : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((o = e.hostConnected) === null || o === void 0 || o.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$ES) === null || r === void 0 || r.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, r) => {
      this.hasOwnProperty(r) && (this._$Ei.set(r, this[r]), delete this[r]);
    });
  }
  createRenderRoot() {
    var e;
    const r = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return go(r, this.constructor.elementStyles), r;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((r) => {
      var o;
      return (o = r.hostConnected) === null || o === void 0 ? void 0 : o.call(r);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((r) => {
      var o;
      return (o = r.hostDisconnected) === null || o === void 0 ? void 0 : o.call(r);
    });
  }
  attributeChangedCallback(e, r, o) {
    this._$AK(e, o);
  }
  _$EO(e, r, o = $t) {
    var n;
    const i = this.constructor._$Ep(e, o);
    if (i !== void 0 && o.reflect === !0) {
      const s = (((n = o.converter) === null || n === void 0 ? void 0 : n.toAttribute) !== void 0 ? o.converter : nr).toAttribute(r, o.type);
      this._$El = e, s == null ? this.removeAttribute(i) : this.setAttribute(i, s), this._$El = null;
    }
  }
  _$AK(e, r) {
    var o;
    const n = this.constructor, i = n._$Ev.get(e);
    if (i !== void 0 && this._$El !== i) {
      const s = n.getPropertyOptions(i), l = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((o = s.converter) === null || o === void 0 ? void 0 : o.fromAttribute) !== void 0 ? s.converter : nr;
      this._$El = i, this[i] = l.fromAttribute(r, s.type), this._$El = null;
    }
  }
  requestUpdate(e, r, o) {
    let n = !0;
    e !== void 0 && (((o = o || this.constructor.getPropertyOptions(e)).hasChanged || Nn)(this[e], r) ? (this._$AL.has(e) || this._$AL.set(e, r), o.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, o))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (r) {
      Promise.reject(r);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((n, i) => this[i] = n), this._$Ei = void 0);
    let r = !1;
    const o = this._$AL;
    try {
      r = this.shouldUpdate(o), r ? (this.willUpdate(o), (e = this._$ES) === null || e === void 0 || e.forEach((n) => {
        var i;
        return (i = n.hostUpdate) === null || i === void 0 ? void 0 : i.call(n);
      }), this.update(o)) : this._$Ek();
    } catch (n) {
      throw r = !1, this._$Ek(), n;
    }
    r && this._$AE(o);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$ES) === null || r === void 0 || r.forEach((o) => {
      var n;
      return (n = o.hostUpdated) === null || n === void 0 ? void 0 : n.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((r, o) => this._$EO(o, this[o], r)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
_e[or] = !0, _e.elementProperties = /* @__PURE__ */ new Map(), _e.elementStyles = [], _e.shadowRootOptions = { mode: "open" }, jr == null || jr({ ReactiveElement: _e }), ((xt = ot.reactiveElementVersions) !== null && xt !== void 0 ? xt : ot.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _t;
const it = window, Oe = it.trustedTypes, kr = Oe ? Oe.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, ir = "$lit$", re = `lit$${(Math.random() + "").slice(9)}$`, Ln = "?" + re, vo = `<${Ln}>`, fe = document, ke = () => fe.createComment(""), He = (t) => t === null || typeof t != "object" && typeof t != "function", Bn = Array.isArray, bo = (t) => Bn(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", Ct = `[ 	
\f\r]`, Be = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Hr = /-->/g, Fr = />/g, de = RegExp(`>|${Ct}(?:([^\\s"'>=/]+)(${Ct}*=${Ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), zr = /'/g, qr = /"/g, Wn = /^(?:script|style|textarea|title)$/i, Un = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), m = Un(1), j = Un(2), pe = Symbol.for("lit-noChange"), H = Symbol.for("lit-nothing"), Vr = /* @__PURE__ */ new WeakMap(), ue = fe.createTreeWalker(fe, 129, null, !1);
function jn(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return kr !== void 0 ? kr.createHTML(e) : e;
}
const yo = (t, e) => {
  const r = t.length - 1, o = [];
  let n, i = e === 2 ? "<svg>" : "", s = Be;
  for (let l = 0; l < r; l++) {
    const a = t[l];
    let c, h, w = -1, d = 0;
    for (; d < a.length && (s.lastIndex = d, h = s.exec(a), h !== null); ) d = s.lastIndex, s === Be ? h[1] === "!--" ? s = Hr : h[1] !== void 0 ? s = Fr : h[2] !== void 0 ? (Wn.test(h[2]) && (n = RegExp("</" + h[2], "g")), s = de) : h[3] !== void 0 && (s = de) : s === de ? h[0] === ">" ? (s = n ?? Be, w = -1) : h[1] === void 0 ? w = -2 : (w = s.lastIndex - h[2].length, c = h[1], s = h[3] === void 0 ? de : h[3] === '"' ? qr : zr) : s === qr || s === zr ? s = de : s === Hr || s === Fr ? s = Be : (s = de, n = void 0);
    const u = s === de && t[l + 1].startsWith("/>") ? " " : "";
    i += s === Be ? a + vo : w >= 0 ? (o.push(c), a.slice(0, w) + ir + a.slice(w) + re + u) : a + re + (w === -2 ? (o.push(void 0), l) : u);
  }
  return [jn(t, i + (t[r] || "<?>") + (e === 2 ? "</svg>" : "")), o];
};
class Fe {
  constructor({ strings: e, _$litType$: r }, o) {
    let n;
    this.parts = [];
    let i = 0, s = 0;
    const l = e.length - 1, a = this.parts, [c, h] = yo(e, r);
    if (this.el = Fe.createElement(c, o), ue.currentNode = this.el.content, r === 2) {
      const w = this.el.content, d = w.firstChild;
      d.remove(), w.append(...d.childNodes);
    }
    for (; (n = ue.nextNode()) !== null && a.length < l; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const w = [];
          for (const d of n.getAttributeNames()) if (d.endsWith(ir) || d.startsWith(re)) {
            const u = h[s++];
            if (w.push(d), u !== void 0) {
              const b = n.getAttribute(u.toLowerCase() + ir).split(re), g = /([.?@])?(.*)/.exec(u);
              a.push({ type: 1, index: i, name: g[2], strings: b, ctor: g[1] === "." ? $o : g[1] === "?" ? Co : g[1] === "@" ? Eo : ft });
            } else a.push({ type: 6, index: i });
          }
          for (const d of w) n.removeAttribute(d);
        }
        if (Wn.test(n.tagName)) {
          const w = n.textContent.split(re), d = w.length - 1;
          if (d > 0) {
            n.textContent = Oe ? Oe.emptyScript : "";
            for (let u = 0; u < d; u++) n.append(w[u], ke()), ue.nextNode(), a.push({ type: 2, index: ++i });
            n.append(w[d], ke());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Ln) a.push({ type: 2, index: i });
      else {
        let w = -1;
        for (; (w = n.data.indexOf(re, w + 1)) !== -1; ) a.push({ type: 7, index: i }), w += re.length - 1;
      }
      i++;
    }
  }
  static createElement(e, r) {
    const o = fe.createElement("template");
    return o.innerHTML = e, o;
  }
}
function Ie(t, e, r = t, o) {
  var n, i, s, l;
  if (e === pe) return e;
  let a = o !== void 0 ? (n = r._$Co) === null || n === void 0 ? void 0 : n[o] : r._$Cl;
  const c = He(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== c && ((i = a == null ? void 0 : a._$AO) === null || i === void 0 || i.call(a, !1), c === void 0 ? a = void 0 : (a = new c(t), a._$AT(t, r, o)), o !== void 0 ? ((s = (l = r)._$Co) !== null && s !== void 0 ? s : l._$Co = [])[o] = a : r._$Cl = a), a !== void 0 && (e = Ie(t, a._$AS(t, e.values), a, o)), e;
}
class xo {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    var r;
    const { el: { content: o }, parts: n } = this._$AD, i = ((r = e == null ? void 0 : e.creationScope) !== null && r !== void 0 ? r : fe).importNode(o, !0);
    ue.currentNode = i;
    let s = ue.nextNode(), l = 0, a = 0, c = n[0];
    for (; c !== void 0; ) {
      if (l === c.index) {
        let h;
        c.type === 2 ? h = new Ye(s, s.nextSibling, this, e) : c.type === 1 ? h = new c.ctor(s, c.name, c.strings, this, e) : c.type === 6 && (h = new Ao(s, this, e)), this._$AV.push(h), c = n[++a];
      }
      l !== (c == null ? void 0 : c.index) && (s = ue.nextNode(), l++);
    }
    return ue.currentNode = fe, i;
  }
  v(e) {
    let r = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, r), r += o.strings.length - 2) : o._$AI(e[r])), r++;
  }
}
class Ye {
  constructor(e, r, o, n) {
    var i;
    this.type = 2, this._$AH = H, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = o, this.options = n, this._$Cp = (i = n == null ? void 0 : n.isConnected) === null || i === void 0 || i;
  }
  get _$AU() {
    var e, r;
    return (r = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && r !== void 0 ? r : this._$Cp;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = Ie(this, e, r), He(e) ? e === H || e == null || e === "" ? (this._$AH !== H && this._$AR(), this._$AH = H) : e !== this._$AH && e !== pe && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : bo(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== H && He(this._$AH) ? this._$AA.nextSibling.data = e : this.$(fe.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var r;
    const { values: o, _$litType$: n } = e, i = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Fe.createElement(jn(n.h, n.h[0]), this.options)), n);
    if (((r = this._$AH) === null || r === void 0 ? void 0 : r._$AD) === i) this._$AH.v(o);
    else {
      const s = new xo(i, this), l = s.u(this.options);
      s.v(o), this.$(l), this._$AH = s;
    }
  }
  _$AC(e) {
    let r = Vr.get(e.strings);
    return r === void 0 && Vr.set(e.strings, r = new Fe(e)), r;
  }
  T(e) {
    Bn(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let o, n = 0;
    for (const i of e) n === r.length ? r.push(o = new Ye(this.k(ke()), this.k(ke()), this, this.options)) : o = r[n], o._$AI(i), n++;
    n < r.length && (this._$AR(o && o._$AB.nextSibling, n), r.length = n);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var o;
    for ((o = this._$AP) === null || o === void 0 || o.call(this, !1, !0, r); e && e !== this._$AB; ) {
      const n = e.nextSibling;
      e.remove(), e = n;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cp = e, (r = this._$AP) === null || r === void 0 || r.call(this, e));
  }
}
class ft {
  constructor(e, r, o, n, i) {
    this.type = 1, this._$AH = H, this._$AN = void 0, this.element = e, this.name = r, this._$AM = n, this.options = i, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = H;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, r = this, o, n) {
    const i = this.strings;
    let s = !1;
    if (i === void 0) e = Ie(this, e, r, 0), s = !He(e) || e !== this._$AH && e !== pe, s && (this._$AH = e);
    else {
      const l = e;
      let a, c;
      for (e = i[0], a = 0; a < i.length - 1; a++) c = Ie(this, l[o + a], r, a), c === pe && (c = this._$AH[a]), s || (s = !He(c) || c !== this._$AH[a]), c === H ? e = H : e !== H && (e += (c ?? "") + i[a + 1]), this._$AH[a] = c;
    }
    s && !n && this.j(e);
  }
  j(e) {
    e === H ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class $o extends ft {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === H ? void 0 : e;
  }
}
const _o = Oe ? Oe.emptyScript : "";
class Co extends ft {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== H ? this.element.setAttribute(this.name, _o) : this.element.removeAttribute(this.name);
  }
}
class Eo extends ft {
  constructor(e, r, o, n, i) {
    super(e, r, o, n, i), this.type = 5;
  }
  _$AI(e, r = this) {
    var o;
    if ((e = (o = Ie(this, e, r, 0)) !== null && o !== void 0 ? o : H) === pe) return;
    const n = this._$AH, i = e === H && n !== H || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, s = e !== H && (n === H || i);
    i && this.element.removeEventListener(this.name, this, n), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r, o;
    typeof this._$AH == "function" ? this._$AH.call((o = (r = this.options) === null || r === void 0 ? void 0 : r.host) !== null && o !== void 0 ? o : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Ao {
  constructor(e, r, o) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Ie(this, e);
  }
}
const Zr = it.litHtmlPolyfillSupport;
Zr == null || Zr(Fe, Ye), ((_t = it.litHtmlVersions) !== null && _t !== void 0 ? _t : it.litHtmlVersions = []).push("2.8.0");
const Po = (t, e, r) => {
  var o, n;
  const i = (o = r == null ? void 0 : r.renderBefore) !== null && o !== void 0 ? o : e;
  let s = i._$litPart$;
  if (s === void 0) {
    const l = (n = r == null ? void 0 : r.renderBefore) !== null && n !== void 0 ? n : null;
    i._$litPart$ = s = new Ye(e.insertBefore(ke(), l), l, void 0, r ?? {});
  }
  return s._$AI(t), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Et, At;
class S extends _e {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, r;
    const o = super.createRenderRoot();
    return (e = (r = this.renderOptions).renderBefore) !== null && e !== void 0 || (r.renderBefore = o.firstChild), o;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Po(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return pe;
  }
}
S.finalized = !0, S._$litElement$ = !0, (Et = globalThis.litElementHydrateSupport) === null || Et === void 0 || Et.call(globalThis, { LitElement: S });
const Kr = globalThis.litElementPolyfillSupport;
Kr == null || Kr({ LitElement: S });
((At = globalThis.litElementVersions) !== null && At !== void 0 ? At : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = (t) => (e) => typeof e == "function" ? ((r, o) => (customElements.define(r, o), o))(t, e) : ((r, o) => {
  const { kind: n, elements: i } = o;
  return { kind: n, elements: i, finisher(s) {
    customElements.define(r, s);
  } };
})(t, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oo = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(r) {
  r.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(r) {
  r.createProperty(e.key, t);
} }, Io = (t, e, r) => {
  e.constructor.createProperty(r, t);
};
function M(t) {
  return (e, r) => r !== void 0 ? Io(t, e, r) : Oo(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function q(t) {
  return M({ ...t, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Pt;
((Pt = window.HTMLSlotElement) === null || Pt === void 0 ? void 0 : Pt.prototype.assignedElements) != null;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const To = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Ro = (t) => (...e) => ({ _$litDirective$: t, values: e });
class Mo {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, r, o) {
    this._$Ct = e, this._$AM = r, this._$Ci = o;
  }
  _$AS(e, r) {
    return this.update(e, r);
  }
  update(e, r) {
    return this.render(...r);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = Ro(class extends Mo {
  constructor(t) {
    var e;
    if (super(t), t.type !== To.ATTRIBUTE || t.name !== "class" || ((e = t.strings) === null || e === void 0 ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return " " + Object.keys(t).filter((e) => t[e]).join(" ") + " ";
  }
  update(t, [e]) {
    var r, o;
    if (this.it === void 0) {
      this.it = /* @__PURE__ */ new Set(), t.strings !== void 0 && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((i) => i !== "")));
      for (const i in e) e[i] && !(!((r = this.nt) === null || r === void 0) && r.has(i)) && this.it.add(i);
      return this.render(e);
    }
    const n = t.element.classList;
    this.it.forEach((i) => {
      i in e || (n.remove(i), this.it.delete(i));
    });
    for (const i in e) {
      const s = !!e[i];
      s === this.it.has(i) || !((o = this.nt) === null || o === void 0) && o.has(i) || (s ? (n.add(i), this.it.add(i)) : (n.remove(i), this.it.delete(i)));
    }
    return pe;
  }
});
function So(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
const kn = (t, e, r) => Math.min(Math.max(r, t), e), V = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
}, st = (t) => typeof t == "number", Ee = (t) => Array.isArray(t) && !st(t[0]), Do = (t, e, r) => {
  const o = e - t;
  return ((r - t) % o + o) % o + t;
};
function No(t, e) {
  return Ee(t) ? t[Do(0, t.length, e)] : t;
}
const Hn = (t, e, r) => -r * t + r * e + t, Fn = () => {
}, oe = (t) => t, Pr = (t, e, r) => e - t === 0 ? 1 : (r - t) / (e - t);
function zn(t, e) {
  const r = t[t.length - 1];
  for (let o = 1; o <= e; o++) {
    const n = Pr(0, e, o);
    t.push(Hn(r, 1, n));
  }
}
function Lo(t) {
  const e = [0];
  return zn(e, t - 1), e;
}
function Bo(t, e = Lo(t.length), r = oe) {
  const o = t.length, n = o - e.length;
  return n > 0 && zn(e, n), (i) => {
    let s = 0;
    for (; s < o - 2 && !(i < e[s + 1]); s++)
      ;
    let l = kn(0, 1, Pr(e[s], e[s + 1], i));
    return l = No(r, s)(l), Hn(t[s], t[s + 1], l);
  };
}
const qn = (t) => Array.isArray(t) && st(t[0]), sr = (t) => typeof t == "object" && !!t.createAnimation, Te = (t) => typeof t == "function", Wo = (t) => typeof t == "string", je = {
  ms: (t) => t * 1e3,
  s: (t) => t / 1e3
}, Vn = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t, Uo = 1e-7, jo = 12;
function ko(t, e, r, o, n) {
  let i, s, l = 0;
  do
    s = e + (r - e) / 2, i = Vn(s, o, n) - t, i > 0 ? r = s : e = s;
  while (Math.abs(i) > Uo && ++l < jo);
  return s;
}
function Ue(t, e, r, o) {
  if (t === e && r === o)
    return oe;
  const n = (i) => ko(i, 0, 1, t, r);
  return (i) => i === 0 || i === 1 ? i : Vn(n(i), e, o);
}
const Ho = (t, e = "end") => (r) => {
  r = e === "end" ? Math.min(r, 0.999) : Math.max(r, 1e-3);
  const o = r * t, n = e === "end" ? Math.floor(o) : Math.ceil(o);
  return kn(0, 1, n / t);
}, Fo = {
  ease: Ue(0.25, 0.1, 0.25, 1),
  "ease-in": Ue(0.42, 0, 1, 1),
  "ease-in-out": Ue(0.42, 0, 0.58, 1),
  "ease-out": Ue(0, 0, 0.58, 1)
}, zo = /\((.*?)\)/;
function Yr(t) {
  if (Te(t))
    return t;
  if (qn(t))
    return Ue(...t);
  const e = Fo[t];
  if (e)
    return e;
  if (t.startsWith("steps")) {
    const r = zo.exec(t);
    if (r) {
      const o = r[1].split(",");
      return Ho(parseFloat(o[0]), o[1].trim());
    }
  }
  return oe;
}
class Zn {
  constructor(e, r = [0, 1], { easing: o, duration: n = V.duration, delay: i = V.delay, endDelay: s = V.endDelay, repeat: l = V.repeat, offset: a, direction: c = "normal", autoplay: h = !0 } = {}) {
    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = oe, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((d, u) => {
      this.resolve = d, this.reject = u;
    }), o = o || V.easing, sr(o)) {
      const d = o.createAnimation(r);
      o = d.easing, r = d.keyframes || r, n = d.duration || n;
    }
    this.repeat = l, this.easing = Ee(o) ? oe : Yr(o), this.updateDuration(n);
    const w = Bo(r, a, Ee(o) ? o.map(Yr) : oe);
    this.tick = (d) => {
      var u;
      i = i;
      let b = 0;
      this.pauseTime !== void 0 ? b = this.pauseTime : b = (d - this.startTime) * this.rate, this.t = b, b /= 1e3, b = Math.max(b - i, 0), this.playState === "finished" && this.pauseTime === void 0 && (b = this.totalDuration);
      const g = b / this.duration;
      let D = Math.floor(g), p = g % 1;
      !p && g >= 1 && (p = 1), p === 1 && D--;
      const E = D % 2;
      (c === "reverse" || c === "alternate" && E || c === "alternate-reverse" && !E) && (p = 1 - p);
      const y = b >= this.totalDuration ? 1 : Math.min(p, 1), $ = w(this.easing(y));
      e($), this.pauseTime === void 0 && (this.playState === "finished" || b >= this.totalDuration + s) ? (this.playState = "finished", (u = this.resolve) === null || u === void 0 || u.call(this, $)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick));
    }, h && this.play();
  }
  play() {
    const e = performance.now();
    this.playState = "running", this.pauseTime !== void 0 ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused", this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished", this.tick(0);
  }
  stop() {
    var e;
    this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (e = this.reject) === null || e === void 0 || e.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(e) {
    this.duration = e, this.totalDuration = e * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(e) {
    this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate;
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(e) {
    this.rate = e;
  }
}
var qo = {}, lr = function() {
};
qo.NODE_ENV !== "production" && (lr = function(t, e) {
  if (!t)
    throw new Error(e);
});
class Vo {
  setAnimation(e) {
    this.animation = e, e == null || e.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const Ot = /* @__PURE__ */ new WeakMap();
function Kn(t) {
  return Ot.has(t) || Ot.set(t, {
    transforms: [],
    values: /* @__PURE__ */ new Map()
  }), Ot.get(t);
}
function Zo(t, e) {
  return t.has(e) || t.set(e, new Vo()), t.get(e);
}
const Ko = ["", "X", "Y", "Z"], Yo = ["translate", "scale", "rotate", "skew"], lt = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
}, Gr = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (t) => t + "deg"
}, Go = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (t) => t + "px"
  },
  rotate: Gr,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: oe
  },
  skew: Gr
}, ze = /* @__PURE__ */ new Map(), Or = (t) => `--motion-${t}`, at = ["x", "y", "z"];
Yo.forEach((t) => {
  Ko.forEach((e) => {
    at.push(t + e), ze.set(Or(t + e), Go[t]);
  });
});
const Qo = (t, e) => at.indexOf(t) - at.indexOf(e), Jo = new Set(at), Yn = (t) => Jo.has(t), Xo = (t, e) => {
  lt[e] && (e = lt[e]);
  const { transforms: r } = Kn(t);
  So(r, e), t.style.transform = ei(r);
}, ei = (t) => t.sort(Qo).reduce(ti, "").trim(), ti = (t, e) => `${t} ${e}(var(${Or(e)}))`, ar = (t) => t.startsWith("--"), Qr = /* @__PURE__ */ new Set();
function ri(t) {
  if (!Qr.has(t)) {
    Qr.add(t);
    try {
      const { syntax: e, initialValue: r } = ze.has(t) ? ze.get(t) : {};
      CSS.registerProperty({
        name: t,
        inherits: !1,
        syntax: e,
        initialValue: r
      });
    } catch {
    }
  }
}
const It = (t, e) => document.createElement("div").animate(t, e), Jr = {
  cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      It({ opacity: [1] });
    } catch {
      return !1;
    }
    return !0;
  },
  finished: () => !!It({ opacity: [0, 1] }, { duration: 1e-3 }).finished,
  linearEasing: () => {
    try {
      It({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }
}, Tt = {}, Ce = {};
for (const t in Jr)
  Ce[t] = () => (Tt[t] === void 0 && (Tt[t] = Jr[t]()), Tt[t]);
const ni = 0.015, oi = (t, e) => {
  let r = "";
  const o = Math.round(e / ni);
  for (let n = 0; n < o; n++)
    r += t(Pr(0, o - 1, n)) + ", ";
  return r.substring(0, r.length - 2);
}, Xr = (t, e) => Te(t) ? Ce.linearEasing() ? `linear(${oi(t, e)})` : V.easing : qn(t) ? ii(t) : t, ii = ([t, e, r, o]) => `cubic-bezier(${t}, ${e}, ${r}, ${o})`;
function si(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] === null && (t[r] = r ? t[r - 1] : e());
  return t;
}
const li = (t) => Array.isArray(t) ? t : [t];
function cr(t) {
  return lt[t] && (t = lt[t]), Yn(t) ? Or(t) : t;
}
const et = {
  get: (t, e) => {
    e = cr(e);
    let r = ar(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
    if (!r && r !== 0) {
      const o = ze.get(e);
      o && (r = o.initialValue);
    }
    return r;
  },
  set: (t, e, r) => {
    e = cr(e), ar(e) ? t.style.setProperty(e, r) : t.style[e] = r;
  }
};
function Gn(t, e = !0) {
  if (!(!t || t.playState === "finished"))
    try {
      t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
    } catch {
    }
}
function ai(t, e) {
  var r;
  let o = (e == null ? void 0 : e.toDefaultUnit) || oe;
  const n = t[t.length - 1];
  if (Wo(n)) {
    const i = ((r = n.match(/(-?[\d.]+)([a-z%]*)/)) === null || r === void 0 ? void 0 : r[2]) || "";
    i && (o = (s) => s + i);
  }
  return o;
}
function ci() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function di(t, e, r, o = {}, n) {
  const i = ci(), s = o.record !== !1 && i;
  let l, { duration: a = V.duration, delay: c = V.delay, endDelay: h = V.endDelay, repeat: w = V.repeat, easing: d = V.easing, persist: u = !1, direction: b, offset: g, allowWebkitAcceleration: D = !1, autoplay: p = !0 } = o;
  const E = Kn(t), y = Yn(e);
  let $ = Ce.waapi();
  y && Xo(t, e);
  const W = cr(e), x = Zo(E.values, W), C = ze.get(W);
  return Gn(x.animation, !(sr(d) && x.generator) && o.record !== !1), () => {
    const A = () => {
      var v, P;
      return (P = (v = et.get(t, W)) !== null && v !== void 0 ? v : C == null ? void 0 : C.initialValue) !== null && P !== void 0 ? P : 0;
    };
    let f = si(li(r), A);
    const I = ai(f, C);
    if (sr(d)) {
      const v = d.createAnimation(f, e !== "opacity", A, W, x);
      d = v.easing, f = v.keyframes || f, a = v.duration || a;
    }
    if (ar(W) && (Ce.cssRegisterProperty() ? ri(W) : $ = !1), y && !Ce.linearEasing() && (Te(d) || Ee(d) && d.some(Te)) && ($ = !1), $) {
      C && (f = f.map((_) => st(_) ? C.toDefaultUnit(_) : _)), f.length === 1 && (!Ce.partialKeyframes() || s) && f.unshift(A());
      const v = {
        delay: je.ms(c),
        duration: je.ms(a),
        endDelay: je.ms(h),
        easing: Ee(d) ? void 0 : Xr(d, a),
        direction: b,
        iterations: w + 1,
        fill: "both"
      };
      l = t.animate({
        [W]: f,
        offset: g,
        easing: Ee(d) ? d.map((_) => Xr(_, a)) : void 0
      }, v), l.finished || (l.finished = new Promise((_, R) => {
        l.onfinish = _, l.oncancel = R;
      }));
      const P = f[f.length - 1];
      l.finished.then(() => {
        u || (et.set(t, W, P), l.cancel());
      }).catch(Fn), D || (l.playbackRate = 1.000001);
    } else if (y)
      f = f.map((v) => typeof v == "string" ? parseFloat(v) : v), f.length === 1 && f.unshift(parseFloat(A())), l = new n((v) => {
        et.set(t, W, I ? I(v) : v);
      }, f, Object.assign(Object.assign({}, o), {
        duration: a,
        easing: d
      }));
    else {
      const v = f[f.length - 1];
      et.set(t, W, C && st(v) ? C.toDefaultUnit(v) : v);
    }
    return s && i(t, e, f, {
      duration: a,
      delay: c,
      easing: d,
      repeat: w,
      offset: g
    }, "motion-one"), x.setAnimation(l), l && !p && l.pause(), l;
  };
}
const ui = (t, e) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t)
);
function hi(t, e) {
  return typeof t == "string" ? t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || []);
}
const mi = (t) => t(), Qn = (t, e, r = V.duration) => new Proxy({
  animations: t.map(mi).filter(Boolean),
  duration: r,
  options: e
}, pi), fi = (t) => t.animations[0], pi = {
  get: (t, e) => {
    const r = fi(t);
    switch (e) {
      case "duration":
        return t.duration;
      case "currentTime":
        return je.s((r == null ? void 0 : r[e]) || 0);
      case "playbackRate":
      case "playState":
        return r == null ? void 0 : r[e];
      case "finished":
        return t.finished || (t.finished = Promise.all(t.animations.map(gi)).catch(Fn)), t.finished;
      case "stop":
        return () => {
          t.animations.forEach((o) => Gn(o));
        };
      case "forEachNative":
        return (o) => {
          t.animations.forEach((n) => o(n, t));
        };
      default:
        return typeof (r == null ? void 0 : r[e]) > "u" ? void 0 : () => t.animations.forEach((o) => o[e]());
    }
  },
  set: (t, e, r) => {
    switch (e) {
      case "currentTime":
        r = je.ms(r);
      // Fall-through
      case "playbackRate":
        for (let o = 0; o < t.animations.length; o++)
          t.animations[o][e] = r;
        return !0;
    }
    return !1;
  }
}, gi = (t) => t.finished;
function wi(t, e, r) {
  return Te(t) ? t(e, r) : t;
}
function vi(t) {
  return function(r, o, n = {}) {
    r = hi(r);
    const i = r.length;
    lr(!!i, "No valid element provided."), lr(!!o, "No keyframes defined.");
    const s = [];
    for (let l = 0; l < i; l++) {
      const a = r[l];
      for (const c in o) {
        const h = ui(n, c);
        h.delay = wi(h.delay, l, i);
        const w = di(a, c, o[c], h, t);
        s.push(w);
      }
    }
    return Qn(
      s,
      n,
      /**
       * TODO:
       * If easing is set to spring or glide, duration will be dynamically
       * generated. Ideally we would dynamically generate this from
       * animation.effect.getComputedTiming().duration but this isn't
       * supported in iOS13 or our number polyfill. Perhaps it's possible
       * to Proxy animations returned from animateStyle that has duration
       * as a getter.
       */
      n.duration
    );
  };
}
const bi = vi(Zn);
function yi(t, e = {}) {
  return Qn([
    () => {
      const r = new Zn(t, [0, 1], e);
      return r.finished.catch(() => {
      }), r;
    }
  ], e, e.duration);
}
function he(t, e, r) {
  return (Te(t) ? yi : bi)(t, e, r);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = (t) => t ?? H;
var $e = {}, Rt, en;
function xi() {
  return en || (en = 1, Rt = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  }), Rt;
}
var Mt = {}, te = {}, tn;
function be() {
  if (tn) return te;
  tn = 1;
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
  return te.getSymbolSize = function(o) {
    if (!o) throw new Error('"version" cannot be null or undefined');
    if (o < 1 || o > 40) throw new Error('"version" should be in range from 1 to 40');
    return o * 4 + 17;
  }, te.getSymbolTotalCodewords = function(o) {
    return e[o];
  }, te.getBCHDigit = function(r) {
    let o = 0;
    for (; r !== 0; )
      o++, r >>>= 1;
    return o;
  }, te.setToSJISFunction = function(o) {
    if (typeof o != "function")
      throw new Error('"toSJISFunc" is not a valid function.');
    t = o;
  }, te.isKanjiModeEnabled = function() {
    return typeof t < "u";
  }, te.toSJIS = function(o) {
    return t(o);
  }, te;
}
var St = {}, rn;
function Ir() {
  return rn || (rn = 1, function(t) {
    t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
    function e(r) {
      if (typeof r != "string")
        throw new Error("Param is not a string");
      switch (r.toLowerCase()) {
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
          throw new Error("Unknown EC Level: " + r);
      }
    }
    t.isValid = function(o) {
      return o && typeof o.bit < "u" && o.bit >= 0 && o.bit < 4;
    }, t.from = function(o, n) {
      if (t.isValid(o))
        return o;
      try {
        return e(o);
      } catch {
        return n;
      }
    };
  }(St)), St;
}
var Dt, nn;
function $i() {
  if (nn) return Dt;
  nn = 1;
  function t() {
    this.buffer = [], this.length = 0;
  }
  return t.prototype = {
    get: function(e) {
      const r = Math.floor(e / 8);
      return (this.buffer[r] >>> 7 - e % 8 & 1) === 1;
    },
    put: function(e, r) {
      for (let o = 0; o < r; o++)
        this.putBit((e >>> r - o - 1 & 1) === 1);
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(e) {
      const r = Math.floor(this.length / 8);
      this.buffer.length <= r && this.buffer.push(0), e && (this.buffer[r] |= 128 >>> this.length % 8), this.length++;
    }
  }, Dt = t, Dt;
}
var Nt, on;
function _i() {
  if (on) return Nt;
  on = 1;
  function t(e) {
    if (!e || e < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
  }
  return t.prototype.set = function(e, r, o, n) {
    const i = e * this.size + r;
    this.data[i] = o, n && (this.reservedBit[i] = !0);
  }, t.prototype.get = function(e, r) {
    return this.data[e * this.size + r];
  }, t.prototype.xor = function(e, r, o) {
    this.data[e * this.size + r] ^= o;
  }, t.prototype.isReserved = function(e, r) {
    return this.reservedBit[e * this.size + r];
  }, Nt = t, Nt;
}
var Lt = {}, sn;
function Ci() {
  return sn || (sn = 1, function(t) {
    const e = be().getSymbolSize;
    t.getRowColCoords = function(o) {
      if (o === 1) return [];
      const n = Math.floor(o / 7) + 2, i = e(o), s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * n - 2)) * 2, l = [i - 7];
      for (let a = 1; a < n - 1; a++)
        l[a] = l[a - 1] - s;
      return l.push(6), l.reverse();
    }, t.getPositions = function(o) {
      const n = [], i = t.getRowColCoords(o), s = i.length;
      for (let l = 0; l < s; l++)
        for (let a = 0; a < s; a++)
          l === 0 && a === 0 || // top-left
          l === 0 && a === s - 1 || // bottom-left
          l === s - 1 && a === 0 || n.push([i[l], i[a]]);
      return n;
    };
  }(Lt)), Lt;
}
var Bt = {}, ln;
function Ei() {
  if (ln) return Bt;
  ln = 1;
  const t = be().getSymbolSize, e = 7;
  return Bt.getPositions = function(o) {
    const n = t(o);
    return [
      // top-left
      [0, 0],
      // top-right
      [n - e, 0],
      // bottom-left
      [0, n - e]
    ];
  }, Bt;
}
var Wt = {}, an;
function Ai() {
  return an || (an = 1, function(t) {
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
    t.isValid = function(n) {
      return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7;
    }, t.from = function(n) {
      return t.isValid(n) ? parseInt(n, 10) : void 0;
    }, t.getPenaltyN1 = function(n) {
      const i = n.size;
      let s = 0, l = 0, a = 0, c = null, h = null;
      for (let w = 0; w < i; w++) {
        l = a = 0, c = h = null;
        for (let d = 0; d < i; d++) {
          let u = n.get(w, d);
          u === c ? l++ : (l >= 5 && (s += e.N1 + (l - 5)), c = u, l = 1), u = n.get(d, w), u === h ? a++ : (a >= 5 && (s += e.N1 + (a - 5)), h = u, a = 1);
        }
        l >= 5 && (s += e.N1 + (l - 5)), a >= 5 && (s += e.N1 + (a - 5));
      }
      return s;
    }, t.getPenaltyN2 = function(n) {
      const i = n.size;
      let s = 0;
      for (let l = 0; l < i - 1; l++)
        for (let a = 0; a < i - 1; a++) {
          const c = n.get(l, a) + n.get(l, a + 1) + n.get(l + 1, a) + n.get(l + 1, a + 1);
          (c === 4 || c === 0) && s++;
        }
      return s * e.N2;
    }, t.getPenaltyN3 = function(n) {
      const i = n.size;
      let s = 0, l = 0, a = 0;
      for (let c = 0; c < i; c++) {
        l = a = 0;
        for (let h = 0; h < i; h++)
          l = l << 1 & 2047 | n.get(c, h), h >= 10 && (l === 1488 || l === 93) && s++, a = a << 1 & 2047 | n.get(h, c), h >= 10 && (a === 1488 || a === 93) && s++;
      }
      return s * e.N3;
    }, t.getPenaltyN4 = function(n) {
      let i = 0;
      const s = n.data.length;
      for (let a = 0; a < s; a++) i += n.data[a];
      return Math.abs(Math.ceil(i * 100 / s / 5) - 10) * e.N4;
    };
    function r(o, n, i) {
      switch (o) {
        case t.Patterns.PATTERN000:
          return (n + i) % 2 === 0;
        case t.Patterns.PATTERN001:
          return n % 2 === 0;
        case t.Patterns.PATTERN010:
          return i % 3 === 0;
        case t.Patterns.PATTERN011:
          return (n + i) % 3 === 0;
        case t.Patterns.PATTERN100:
          return (Math.floor(n / 2) + Math.floor(i / 3)) % 2 === 0;
        case t.Patterns.PATTERN101:
          return n * i % 2 + n * i % 3 === 0;
        case t.Patterns.PATTERN110:
          return (n * i % 2 + n * i % 3) % 2 === 0;
        case t.Patterns.PATTERN111:
          return (n * i % 3 + (n + i) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + o);
      }
    }
    t.applyMask = function(n, i) {
      const s = i.size;
      for (let l = 0; l < s; l++)
        for (let a = 0; a < s; a++)
          i.isReserved(a, l) || i.xor(a, l, r(n, a, l));
    }, t.getBestMask = function(n, i) {
      const s = Object.keys(t.Patterns).length;
      let l = 0, a = 1 / 0;
      for (let c = 0; c < s; c++) {
        i(c), t.applyMask(c, n);
        const h = t.getPenaltyN1(n) + t.getPenaltyN2(n) + t.getPenaltyN3(n) + t.getPenaltyN4(n);
        t.applyMask(c, n), h < a && (a = h, l = c);
      }
      return l;
    };
  }(Wt)), Wt;
}
var tt = {}, cn;
function Jn() {
  if (cn) return tt;
  cn = 1;
  const t = Ir(), e = [
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
  ], r = [
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
  return tt.getBlocksCount = function(n, i) {
    switch (i) {
      case t.L:
        return e[(n - 1) * 4 + 0];
      case t.M:
        return e[(n - 1) * 4 + 1];
      case t.Q:
        return e[(n - 1) * 4 + 2];
      case t.H:
        return e[(n - 1) * 4 + 3];
      default:
        return;
    }
  }, tt.getTotalCodewordsCount = function(n, i) {
    switch (i) {
      case t.L:
        return r[(n - 1) * 4 + 0];
      case t.M:
        return r[(n - 1) * 4 + 1];
      case t.Q:
        return r[(n - 1) * 4 + 2];
      case t.H:
        return r[(n - 1) * 4 + 3];
      default:
        return;
    }
  }, tt;
}
var Ut = {}, We = {}, dn;
function Pi() {
  if (dn) return We;
  dn = 1;
  const t = new Uint8Array(512), e = new Uint8Array(256);
  return function() {
    let o = 1;
    for (let n = 0; n < 255; n++)
      t[n] = o, e[o] = n, o <<= 1, o & 256 && (o ^= 285);
    for (let n = 255; n < 512; n++)
      t[n] = t[n - 255];
  }(), We.log = function(o) {
    if (o < 1) throw new Error("log(" + o + ")");
    return e[o];
  }, We.exp = function(o) {
    return t[o];
  }, We.mul = function(o, n) {
    return o === 0 || n === 0 ? 0 : t[e[o] + e[n]];
  }, We;
}
var un;
function Oi() {
  return un || (un = 1, function(t) {
    const e = Pi();
    t.mul = function(o, n) {
      const i = new Uint8Array(o.length + n.length - 1);
      for (let s = 0; s < o.length; s++)
        for (let l = 0; l < n.length; l++)
          i[s + l] ^= e.mul(o[s], n[l]);
      return i;
    }, t.mod = function(o, n) {
      let i = new Uint8Array(o);
      for (; i.length - n.length >= 0; ) {
        const s = i[0];
        for (let a = 0; a < n.length; a++)
          i[a] ^= e.mul(n[a], s);
        let l = 0;
        for (; l < i.length && i[l] === 0; ) l++;
        i = i.slice(l);
      }
      return i;
    }, t.generateECPolynomial = function(o) {
      let n = new Uint8Array([1]);
      for (let i = 0; i < o; i++)
        n = t.mul(n, new Uint8Array([1, e.exp(i)]));
      return n;
    };
  }(Ut)), Ut;
}
var jt, hn;
function Ii() {
  if (hn) return jt;
  hn = 1;
  const t = Oi();
  function e(r) {
    this.genPoly = void 0, this.degree = r, this.degree && this.initialize(this.degree);
  }
  return e.prototype.initialize = function(o) {
    this.degree = o, this.genPoly = t.generateECPolynomial(this.degree);
  }, e.prototype.encode = function(o) {
    if (!this.genPoly)
      throw new Error("Encoder not initialized");
    const n = new Uint8Array(o.length + this.degree);
    n.set(o);
    const i = t.mod(n, this.genPoly), s = this.degree - i.length;
    if (s > 0) {
      const l = new Uint8Array(this.degree);
      return l.set(i, s), l;
    }
    return i;
  }, jt = e, jt;
}
var kt = {}, Ht = {}, Ft = {}, mn;
function Xn() {
  return mn || (mn = 1, Ft.isValid = function(e) {
    return !isNaN(e) && e >= 1 && e <= 40;
  }), Ft;
}
var Z = {}, fn;
function eo() {
  if (fn) return Z;
  fn = 1;
  const t = "[0-9]+", e = "[A-Z $%*+\\-./:]+";
  let r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  r = r.replace(/u/g, "\\u");
  const o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + `)(?:.|[\r
]))+`;
  Z.KANJI = new RegExp(r, "g"), Z.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), Z.BYTE = new RegExp(o, "g"), Z.NUMERIC = new RegExp(t, "g"), Z.ALPHANUMERIC = new RegExp(e, "g");
  const n = new RegExp("^" + r + "$"), i = new RegExp("^" + t + "$"), s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return Z.testKanji = function(a) {
    return n.test(a);
  }, Z.testNumeric = function(a) {
    return i.test(a);
  }, Z.testAlphanumeric = function(a) {
    return s.test(a);
  }, Z;
}
var pn;
function ye() {
  return pn || (pn = 1, function(t) {
    const e = Xn(), r = eo();
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
      return r.testNumeric(i) ? t.NUMERIC : r.testAlphanumeric(i) ? t.ALPHANUMERIC : r.testKanji(i) ? t.KANJI : t.BYTE;
    }, t.toString = function(i) {
      if (i && i.id) return i.id;
      throw new Error("Invalid mode");
    }, t.isValid = function(i) {
      return i && i.bit && i.ccBits;
    };
    function o(n) {
      if (typeof n != "string")
        throw new Error("Param is not a string");
      switch (n.toLowerCase()) {
        case "numeric":
          return t.NUMERIC;
        case "alphanumeric":
          return t.ALPHANUMERIC;
        case "kanji":
          return t.KANJI;
        case "byte":
          return t.BYTE;
        default:
          throw new Error("Unknown mode: " + n);
      }
    }
    t.from = function(i, s) {
      if (t.isValid(i))
        return i;
      try {
        return o(i);
      } catch {
        return s;
      }
    };
  }(Ht)), Ht;
}
var gn;
function Ti() {
  return gn || (gn = 1, function(t) {
    const e = be(), r = Jn(), o = Ir(), n = ye(), i = Xn(), s = 7973, l = e.getBCHDigit(s);
    function a(d, u, b) {
      for (let g = 1; g <= 40; g++)
        if (u <= t.getCapacity(g, b, d))
          return g;
    }
    function c(d, u) {
      return n.getCharCountIndicator(d, u) + 4;
    }
    function h(d, u) {
      let b = 0;
      return d.forEach(function(g) {
        const D = c(g.mode, u);
        b += D + g.getBitsLength();
      }), b;
    }
    function w(d, u) {
      for (let b = 1; b <= 40; b++)
        if (h(d, b) <= t.getCapacity(b, u, n.MIXED))
          return b;
    }
    t.from = function(u, b) {
      return i.isValid(u) ? parseInt(u, 10) : b;
    }, t.getCapacity = function(u, b, g) {
      if (!i.isValid(u))
        throw new Error("Invalid QR Code version");
      typeof g > "u" && (g = n.BYTE);
      const D = e.getSymbolTotalCodewords(u), p = r.getTotalCodewordsCount(u, b), E = (D - p) * 8;
      if (g === n.MIXED) return E;
      const y = E - c(g, u);
      switch (g) {
        case n.NUMERIC:
          return Math.floor(y / 10 * 3);
        case n.ALPHANUMERIC:
          return Math.floor(y / 11 * 2);
        case n.KANJI:
          return Math.floor(y / 13);
        case n.BYTE:
        default:
          return Math.floor(y / 8);
      }
    }, t.getBestVersionForData = function(u, b) {
      let g;
      const D = o.from(b, o.M);
      if (Array.isArray(u)) {
        if (u.length > 1)
          return w(u, D);
        if (u.length === 0)
          return 1;
        g = u[0];
      } else
        g = u;
      return a(g.mode, g.getLength(), D);
    }, t.getEncodedBits = function(u) {
      if (!i.isValid(u) || u < 7)
        throw new Error("Invalid QR Code version");
      let b = u << 12;
      for (; e.getBCHDigit(b) - l >= 0; )
        b ^= s << e.getBCHDigit(b) - l;
      return u << 12 | b;
    };
  }(kt)), kt;
}
var zt = {}, wn;
function Ri() {
  if (wn) return zt;
  wn = 1;
  const t = be(), e = 1335, r = 21522, o = t.getBCHDigit(e);
  return zt.getEncodedBits = function(i, s) {
    const l = i.bit << 3 | s;
    let a = l << 10;
    for (; t.getBCHDigit(a) - o >= 0; )
      a ^= e << t.getBCHDigit(a) - o;
    return (l << 10 | a) ^ r;
  }, zt;
}
var qt = {}, Vt, vn;
function Mi() {
  if (vn) return Vt;
  vn = 1;
  const t = ye();
  function e(r) {
    this.mode = t.NUMERIC, this.data = r.toString();
  }
  return e.getBitsLength = function(o) {
    return 10 * Math.floor(o / 3) + (o % 3 ? o % 3 * 3 + 1 : 0);
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(o) {
    let n, i, s;
    for (n = 0; n + 3 <= this.data.length; n += 3)
      i = this.data.substr(n, 3), s = parseInt(i, 10), o.put(s, 10);
    const l = this.data.length - n;
    l > 0 && (i = this.data.substr(n), s = parseInt(i, 10), o.put(s, l * 3 + 1));
  }, Vt = e, Vt;
}
var Zt, bn;
function Si() {
  if (bn) return Zt;
  bn = 1;
  const t = ye(), e = [
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
  function r(o) {
    this.mode = t.ALPHANUMERIC, this.data = o;
  }
  return r.getBitsLength = function(n) {
    return 11 * Math.floor(n / 2) + 6 * (n % 2);
  }, r.prototype.getLength = function() {
    return this.data.length;
  }, r.prototype.getBitsLength = function() {
    return r.getBitsLength(this.data.length);
  }, r.prototype.write = function(n) {
    let i;
    for (i = 0; i + 2 <= this.data.length; i += 2) {
      let s = e.indexOf(this.data[i]) * 45;
      s += e.indexOf(this.data[i + 1]), n.put(s, 11);
    }
    this.data.length % 2 && n.put(e.indexOf(this.data[i]), 6);
  }, Zt = r, Zt;
}
var Kt, yn;
function Di() {
  return yn || (yn = 1, Kt = function(e) {
    for (var r = [], o = e.length, n = 0; n < o; n++) {
      var i = e.charCodeAt(n);
      if (i >= 55296 && i <= 56319 && o > n + 1) {
        var s = e.charCodeAt(n + 1);
        s >= 56320 && s <= 57343 && (i = (i - 55296) * 1024 + s - 56320 + 65536, n += 1);
      }
      if (i < 128) {
        r.push(i);
        continue;
      }
      if (i < 2048) {
        r.push(i >> 6 | 192), r.push(i & 63 | 128);
        continue;
      }
      if (i < 55296 || i >= 57344 && i < 65536) {
        r.push(i >> 12 | 224), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
        continue;
      }
      if (i >= 65536 && i <= 1114111) {
        r.push(i >> 18 | 240), r.push(i >> 12 & 63 | 128), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
        continue;
      }
      r.push(239, 191, 189);
    }
    return new Uint8Array(r).buffer;
  }), Kt;
}
var Yt, xn;
function Ni() {
  if (xn) return Yt;
  xn = 1;
  const t = Di(), e = ye();
  function r(o) {
    this.mode = e.BYTE, typeof o == "string" && (o = t(o)), this.data = new Uint8Array(o);
  }
  return r.getBitsLength = function(n) {
    return n * 8;
  }, r.prototype.getLength = function() {
    return this.data.length;
  }, r.prototype.getBitsLength = function() {
    return r.getBitsLength(this.data.length);
  }, r.prototype.write = function(o) {
    for (let n = 0, i = this.data.length; n < i; n++)
      o.put(this.data[n], 8);
  }, Yt = r, Yt;
}
var Gt, $n;
function Li() {
  if ($n) return Gt;
  $n = 1;
  const t = ye(), e = be();
  function r(o) {
    this.mode = t.KANJI, this.data = o;
  }
  return r.getBitsLength = function(n) {
    return n * 13;
  }, r.prototype.getLength = function() {
    return this.data.length;
  }, r.prototype.getBitsLength = function() {
    return r.getBitsLength(this.data.length);
  }, r.prototype.write = function(o) {
    let n;
    for (n = 0; n < this.data.length; n++) {
      let i = e.toSJIS(this.data[n]);
      if (i >= 33088 && i <= 40956)
        i -= 33088;
      else if (i >= 57408 && i <= 60351)
        i -= 49472;
      else
        throw new Error(
          "Invalid SJIS character: " + this.data[n] + `
Make sure your charset is UTF-8`
        );
      i = (i >>> 8 & 255) * 192 + (i & 255), o.put(i, 13);
    }
  }, Gt = r, Gt;
}
var _n;
function Bi() {
  return _n || (_n = 1, function(t) {
    const e = ye(), r = Mi(), o = Si(), n = Ni(), i = Li(), s = eo(), l = be(), a = fo();
    function c(p) {
      return unescape(encodeURIComponent(p)).length;
    }
    function h(p, E, y) {
      const $ = [];
      let W;
      for (; (W = p.exec(y)) !== null; )
        $.push({
          data: W[0],
          index: W.index,
          mode: E,
          length: W[0].length
        });
      return $;
    }
    function w(p) {
      const E = h(s.NUMERIC, e.NUMERIC, p), y = h(s.ALPHANUMERIC, e.ALPHANUMERIC, p);
      let $, W;
      return l.isKanjiModeEnabled() ? ($ = h(s.BYTE, e.BYTE, p), W = h(s.KANJI, e.KANJI, p)) : ($ = h(s.BYTE_KANJI, e.BYTE, p), W = []), E.concat(y, $, W).sort(function(C, A) {
        return C.index - A.index;
      }).map(function(C) {
        return {
          data: C.data,
          mode: C.mode,
          length: C.length
        };
      });
    }
    function d(p, E) {
      switch (E) {
        case e.NUMERIC:
          return r.getBitsLength(p);
        case e.ALPHANUMERIC:
          return o.getBitsLength(p);
        case e.KANJI:
          return i.getBitsLength(p);
        case e.BYTE:
          return n.getBitsLength(p);
      }
    }
    function u(p) {
      return p.reduce(function(E, y) {
        const $ = E.length - 1 >= 0 ? E[E.length - 1] : null;
        return $ && $.mode === y.mode ? (E[E.length - 1].data += y.data, E) : (E.push(y), E);
      }, []);
    }
    function b(p) {
      const E = [];
      for (let y = 0; y < p.length; y++) {
        const $ = p[y];
        switch ($.mode) {
          case e.NUMERIC:
            E.push([
              $,
              { data: $.data, mode: e.ALPHANUMERIC, length: $.length },
              { data: $.data, mode: e.BYTE, length: $.length }
            ]);
            break;
          case e.ALPHANUMERIC:
            E.push([
              $,
              { data: $.data, mode: e.BYTE, length: $.length }
            ]);
            break;
          case e.KANJI:
            E.push([
              $,
              { data: $.data, mode: e.BYTE, length: c($.data) }
            ]);
            break;
          case e.BYTE:
            E.push([
              { data: $.data, mode: e.BYTE, length: c($.data) }
            ]);
        }
      }
      return E;
    }
    function g(p, E) {
      const y = {}, $ = { start: {} };
      let W = ["start"];
      for (let x = 0; x < p.length; x++) {
        const C = p[x], A = [];
        for (let f = 0; f < C.length; f++) {
          const I = C[f], v = "" + x + f;
          A.push(v), y[v] = { node: I, lastCount: 0 }, $[v] = {};
          for (let P = 0; P < W.length; P++) {
            const _ = W[P];
            y[_] && y[_].node.mode === I.mode ? ($[_][v] = d(y[_].lastCount + I.length, I.mode) - d(y[_].lastCount, I.mode), y[_].lastCount += I.length) : (y[_] && (y[_].lastCount = I.length), $[_][v] = d(I.length, I.mode) + 4 + e.getCharCountIndicator(I.mode, E));
          }
        }
        W = A;
      }
      for (let x = 0; x < W.length; x++)
        $[W[x]].end = 0;
      return { map: $, table: y };
    }
    function D(p, E) {
      let y;
      const $ = e.getBestModeForData(p);
      if (y = e.from(E, $), y !== e.BYTE && y.bit < $.bit)
        throw new Error('"' + p + '" cannot be encoded with mode ' + e.toString(y) + `.
 Suggested mode is: ` + e.toString($));
      switch (y === e.KANJI && !l.isKanjiModeEnabled() && (y = e.BYTE), y) {
        case e.NUMERIC:
          return new r(p);
        case e.ALPHANUMERIC:
          return new o(p);
        case e.KANJI:
          return new i(p);
        case e.BYTE:
          return new n(p);
      }
    }
    t.fromArray = function(E) {
      return E.reduce(function(y, $) {
        return typeof $ == "string" ? y.push(D($, null)) : $.data && y.push(D($.data, $.mode)), y;
      }, []);
    }, t.fromString = function(E, y) {
      const $ = w(E, l.isKanjiModeEnabled()), W = b($), x = g(W, y), C = a.find_path(x.map, "start", "end"), A = [];
      for (let f = 1; f < C.length - 1; f++)
        A.push(x.table[C[f]].node);
      return t.fromArray(u(A));
    }, t.rawSplit = function(E) {
      return t.fromArray(
        w(E, l.isKanjiModeEnabled())
      );
    };
  }(qt)), qt;
}
var Cn;
function Wi() {
  if (Cn) return Mt;
  Cn = 1;
  const t = be(), e = Ir(), r = $i(), o = _i(), n = Ci(), i = Ei(), s = Ai(), l = Jn(), a = Ii(), c = Ti(), h = Ri(), w = ye(), d = Bi();
  function u(x, C) {
    const A = x.size, f = i.getPositions(C);
    for (let I = 0; I < f.length; I++) {
      const v = f[I][0], P = f[I][1];
      for (let _ = -1; _ <= 7; _++)
        if (!(v + _ <= -1 || A <= v + _))
          for (let R = -1; R <= 7; R++)
            P + R <= -1 || A <= P + R || (_ >= 0 && _ <= 6 && (R === 0 || R === 6) || R >= 0 && R <= 6 && (_ === 0 || _ === 6) || _ >= 2 && _ <= 4 && R >= 2 && R <= 4 ? x.set(v + _, P + R, !0, !0) : x.set(v + _, P + R, !1, !0));
    }
  }
  function b(x) {
    const C = x.size;
    for (let A = 8; A < C - 8; A++) {
      const f = A % 2 === 0;
      x.set(A, 6, f, !0), x.set(6, A, f, !0);
    }
  }
  function g(x, C) {
    const A = n.getPositions(C);
    for (let f = 0; f < A.length; f++) {
      const I = A[f][0], v = A[f][1];
      for (let P = -2; P <= 2; P++)
        for (let _ = -2; _ <= 2; _++)
          P === -2 || P === 2 || _ === -2 || _ === 2 || P === 0 && _ === 0 ? x.set(I + P, v + _, !0, !0) : x.set(I + P, v + _, !1, !0);
    }
  }
  function D(x, C) {
    const A = x.size, f = c.getEncodedBits(C);
    let I, v, P;
    for (let _ = 0; _ < 18; _++)
      I = Math.floor(_ / 3), v = _ % 3 + A - 8 - 3, P = (f >> _ & 1) === 1, x.set(I, v, P, !0), x.set(v, I, P, !0);
  }
  function p(x, C, A) {
    const f = x.size, I = h.getEncodedBits(C, A);
    let v, P;
    for (v = 0; v < 15; v++)
      P = (I >> v & 1) === 1, v < 6 ? x.set(v, 8, P, !0) : v < 8 ? x.set(v + 1, 8, P, !0) : x.set(f - 15 + v, 8, P, !0), v < 8 ? x.set(8, f - v - 1, P, !0) : v < 9 ? x.set(8, 15 - v - 1 + 1, P, !0) : x.set(8, 15 - v - 1, P, !0);
    x.set(f - 8, 8, 1, !0);
  }
  function E(x, C) {
    const A = x.size;
    let f = -1, I = A - 1, v = 7, P = 0;
    for (let _ = A - 1; _ > 0; _ -= 2)
      for (_ === 6 && _--; ; ) {
        for (let R = 0; R < 2; R++)
          if (!x.isReserved(I, _ - R)) {
            let ee = !1;
            P < C.length && (ee = (C[P] >>> v & 1) === 1), x.set(I, _ - R, ee), v--, v === -1 && (P++, v = 7);
          }
        if (I += f, I < 0 || A <= I) {
          I -= f, f = -f;
          break;
        }
      }
  }
  function y(x, C, A) {
    const f = new r();
    A.forEach(function(R) {
      f.put(R.mode.bit, 4), f.put(R.getLength(), w.getCharCountIndicator(R.mode, x)), R.write(f);
    });
    const I = t.getSymbolTotalCodewords(x), v = l.getTotalCodewordsCount(x, C), P = (I - v) * 8;
    for (f.getLengthInBits() + 4 <= P && f.put(0, 4); f.getLengthInBits() % 8 !== 0; )
      f.putBit(0);
    const _ = (P - f.getLengthInBits()) / 8;
    for (let R = 0; R < _; R++)
      f.put(R % 2 ? 17 : 236, 8);
    return $(f, x, C);
  }
  function $(x, C, A) {
    const f = t.getSymbolTotalCodewords(C), I = l.getTotalCodewordsCount(C, A), v = f - I, P = l.getBlocksCount(C, A), _ = f % P, R = P - _, ee = Math.floor(f / P), Le = Math.floor(v / P), ao = Le + 1, Dr = ee - Le, co = new a(Dr);
    let wt = 0;
    const Xe = new Array(P), Nr = new Array(P);
    let vt = 0;
    const uo = new Uint8Array(x.buffer);
    for (let xe = 0; xe < P; xe++) {
      const yt = xe < R ? Le : ao;
      Xe[xe] = uo.slice(wt, wt + yt), Nr[xe] = co.encode(Xe[xe]), wt += yt, vt = Math.max(vt, yt);
    }
    const bt = new Uint8Array(f);
    let Lr = 0, G, Q;
    for (G = 0; G < vt; G++)
      for (Q = 0; Q < P; Q++)
        G < Xe[Q].length && (bt[Lr++] = Xe[Q][G]);
    for (G = 0; G < Dr; G++)
      for (Q = 0; Q < P; Q++)
        bt[Lr++] = Nr[Q][G];
    return bt;
  }
  function W(x, C, A, f) {
    let I;
    if (Array.isArray(x))
      I = d.fromArray(x);
    else if (typeof x == "string") {
      let ee = C;
      if (!ee) {
        const Le = d.rawSplit(x);
        ee = c.getBestVersionForData(Le, A);
      }
      I = d.fromString(x, ee || 40);
    } else
      throw new Error("Invalid data");
    const v = c.getBestVersionForData(I, A);
    if (!v)
      throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!C)
      C = v;
    else if (C < v)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + v + `.
`
      );
    const P = y(C, A, I), _ = t.getSymbolSize(C), R = new o(_);
    return u(R, C), b(R), g(R, C), p(R, A, 0), C >= 7 && D(R, C), E(R, P), isNaN(f) && (f = s.getBestMask(
      R,
      p.bind(null, R, A)
    )), s.applyMask(f, R), p(R, A, f), {
      modules: R,
      version: C,
      errorCorrectionLevel: A,
      maskPattern: f,
      segments: I
    };
  }
  return Mt.create = function(C, A) {
    if (typeof C > "u" || C === "")
      throw new Error("No input text");
    let f = e.M, I, v;
    return typeof A < "u" && (f = e.from(A.errorCorrectionLevel, e.M), I = c.from(A.version), v = s.from(A.maskPattern), A.toSJISFunc && t.setToSJISFunction(A.toSJISFunc)), W(C, I, f, v);
  }, Mt;
}
var Qt = {}, Jt = {}, En;
function to() {
  return En || (En = 1, function(t) {
    function e(r) {
      if (typeof r == "number" && (r = r.toString()), typeof r != "string")
        throw new Error("Color should be defined as hex string");
      let o = r.slice().replace("#", "").split("");
      if (o.length < 3 || o.length === 5 || o.length > 8)
        throw new Error("Invalid hex color: " + r);
      (o.length === 3 || o.length === 4) && (o = Array.prototype.concat.apply([], o.map(function(i) {
        return [i, i];
      }))), o.length === 6 && o.push("F", "F");
      const n = parseInt(o.join(""), 16);
      return {
        r: n >> 24 & 255,
        g: n >> 16 & 255,
        b: n >> 8 & 255,
        a: n & 255,
        hex: "#" + o.slice(0, 6).join("")
      };
    }
    t.getOptions = function(o) {
      o || (o = {}), o.color || (o.color = {});
      const n = typeof o.margin > "u" || o.margin === null || o.margin < 0 ? 4 : o.margin, i = o.width && o.width >= 21 ? o.width : void 0, s = o.scale || 4;
      return {
        width: i,
        scale: i ? 4 : s,
        margin: n,
        color: {
          dark: e(o.color.dark || "#000000ff"),
          light: e(o.color.light || "#ffffffff")
        },
        type: o.type,
        rendererOpts: o.rendererOpts || {}
      };
    }, t.getScale = function(o, n) {
      return n.width && n.width >= o + n.margin * 2 ? n.width / (o + n.margin * 2) : n.scale;
    }, t.getImageWidth = function(o, n) {
      const i = t.getScale(o, n);
      return Math.floor((o + n.margin * 2) * i);
    }, t.qrToImageData = function(o, n, i) {
      const s = n.modules.size, l = n.modules.data, a = t.getScale(s, i), c = Math.floor((s + i.margin * 2) * a), h = i.margin * a, w = [i.color.light, i.color.dark];
      for (let d = 0; d < c; d++)
        for (let u = 0; u < c; u++) {
          let b = (d * c + u) * 4, g = i.color.light;
          if (d >= h && u >= h && d < c - h && u < c - h) {
            const D = Math.floor((d - h) / a), p = Math.floor((u - h) / a);
            g = w[l[D * s + p] ? 1 : 0];
          }
          o[b++] = g.r, o[b++] = g.g, o[b++] = g.b, o[b] = g.a;
        }
    };
  }(Jt)), Jt;
}
var An;
function Ui() {
  return An || (An = 1, function(t) {
    const e = to();
    function r(n, i, s) {
      n.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = s, i.width = s, i.style.height = s + "px", i.style.width = s + "px";
    }
    function o() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }
    t.render = function(i, s, l) {
      let a = l, c = s;
      typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), s || (c = o()), a = e.getOptions(a);
      const h = e.getImageWidth(i.modules.size, a), w = c.getContext("2d"), d = w.createImageData(h, h);
      return e.qrToImageData(d.data, i, a), r(w, c, h), w.putImageData(d, 0, 0), c;
    }, t.renderToDataURL = function(i, s, l) {
      let a = l;
      typeof a > "u" && (!s || !s.getContext) && (a = s, s = void 0), a || (a = {});
      const c = t.render(i, s, a), h = a.type || "image/png", w = a.rendererOpts || {};
      return c.toDataURL(h, w.quality);
    };
  }(Qt)), Qt;
}
var Xt = {}, Pn;
function ji() {
  if (Pn) return Xt;
  Pn = 1;
  const t = to();
  function e(n, i) {
    const s = n.a / 255, l = i + '="' + n.hex + '"';
    return s < 1 ? l + " " + i + '-opacity="' + s.toFixed(2).slice(1) + '"' : l;
  }
  function r(n, i, s) {
    let l = n + i;
    return typeof s < "u" && (l += " " + s), l;
  }
  function o(n, i, s) {
    let l = "", a = 0, c = !1, h = 0;
    for (let w = 0; w < n.length; w++) {
      const d = Math.floor(w % i), u = Math.floor(w / i);
      !d && !c && (c = !0), n[w] ? (h++, w > 0 && d > 0 && n[w - 1] || (l += c ? r("M", d + s, 0.5 + u + s) : r("m", a, 0), a = 0, c = !1), d + 1 < i && n[w + 1] || (l += r("h", h), h = 0)) : a++;
    }
    return l;
  }
  return Xt.render = function(i, s, l) {
    const a = t.getOptions(s), c = i.modules.size, h = i.modules.data, w = c + a.margin * 2, d = a.color.light.a ? "<path " + e(a.color.light, "fill") + ' d="M0 0h' + w + "v" + w + 'H0z"/>' : "", u = "<path " + e(a.color.dark, "stroke") + ' d="' + o(h, c, a.margin) + '"/>', b = 'viewBox="0 0 ' + w + " " + w + '"', D = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + b + ' shape-rendering="crispEdges">' + d + u + `</svg>
`;
    return typeof l == "function" && l(null, D), D;
  }, Xt;
}
var On;
function ki() {
  if (On) return $e;
  On = 1;
  const t = xi(), e = Wi(), r = Ui(), o = ji();
  function n(i, s, l, a, c) {
    const h = [].slice.call(arguments, 1), w = h.length, d = typeof h[w - 1] == "function";
    if (!d && !t())
      throw new Error("Callback required as last argument");
    if (d) {
      if (w < 2)
        throw new Error("Too few arguments provided");
      w === 2 ? (c = l, l = s, s = a = void 0) : w === 3 && (s.getContext && typeof c > "u" ? (c = a, a = void 0) : (c = a, a = l, l = s, s = void 0));
    } else {
      if (w < 1)
        throw new Error("Too few arguments provided");
      return w === 1 ? (l = s, s = a = void 0) : w === 2 && !s.getContext && (a = l, l = s, s = void 0), new Promise(function(u, b) {
        try {
          const g = e.create(l, a);
          u(i(g, s, a));
        } catch (g) {
          b(g);
        }
      });
    }
    try {
      const u = e.create(l, a);
      c(null, i(u, s, a));
    } catch (u) {
      c(u);
    }
  }
  return $e.create = e.create, $e.toCanvas = n.bind(null, r.render), $e.toDataURL = n.bind(null, r.renderToDataURL), $e.toString = n.bind(null, function(i, s, l) {
    return o.render(i, l);
  }), $e;
}
var Hi = ki();
const Fi = /* @__PURE__ */ mo(Hi);
var zi = Object.defineProperty, In = Object.getOwnPropertySymbols, qi = Object.prototype.hasOwnProperty, Vi = Object.prototype.propertyIsEnumerable, Tn = (t, e, r) => e in t ? zi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, er = (t, e) => {
  for (var r in e || (e = {}))
    qi.call(e, r) && Tn(t, r, e[r]);
  if (In)
    for (var r of In(e))
      Vi.call(e, r) && Tn(t, r, e[r]);
  return t;
};
function Zi() {
  var t;
  const e = (t = Pe.state.themeMode) != null ? t : "dark", o = {
    light: {
      foreground: { 1: "rgb(20,20,20)", 2: "rgb(121,134,134)", 3: "rgb(158,169,169)" },
      background: { 1: "rgb(255,255,255)", 2: "rgb(241,243,243)", 3: "rgb(228,231,231)" },
      overlay: "rgba(0,0,0,0.1)"
    },
    dark: {
      foreground: { 1: "rgb(228,231,231)", 2: "rgb(148,158,158)", 3: "rgb(110,119,119)" },
      background: { 1: "rgb(20,20,20)", 2: "rgb(39,42,42)", 3: "rgb(59,64,64)" },
      overlay: "rgba(255,255,255,0.1)"
    }
  }[e];
  return {
    "--wcm-color-fg-1": o.foreground[1],
    "--wcm-color-fg-2": o.foreground[2],
    "--wcm-color-fg-3": o.foreground[3],
    "--wcm-color-bg-1": o.background[1],
    "--wcm-color-bg-2": o.background[2],
    "--wcm-color-bg-3": o.background[3],
    "--wcm-color-overlay": o.overlay
  };
}
function Rn() {
  return {
    "--wcm-accent-color": "#3396FF",
    "--wcm-accent-fill-color": "#FFFFFF",
    "--wcm-z-index": "89",
    "--wcm-background-color": "#3396FF",
    "--wcm-background-border-radius": "8px",
    "--wcm-container-border-radius": "30px",
    "--wcm-wallet-icon-border-radius": "15px",
    "--wcm-wallet-icon-large-border-radius": "30px",
    "--wcm-wallet-icon-small-border-radius": "7px",
    "--wcm-input-border-radius": "28px",
    "--wcm-button-border-radius": "10px",
    "--wcm-notification-border-radius": "36px",
    "--wcm-secondary-button-border-radius": "28px",
    "--wcm-icon-button-border-radius": "50%",
    "--wcm-button-hover-highlight-border-radius": "10px",
    "--wcm-text-big-bold-size": "20px",
    "--wcm-text-big-bold-weight": "600",
    "--wcm-text-big-bold-line-height": "24px",
    "--wcm-text-big-bold-letter-spacing": "-0.03em",
    "--wcm-text-big-bold-text-transform": "none",
    "--wcm-text-xsmall-bold-size": "10px",
    "--wcm-text-xsmall-bold-weight": "700",
    "--wcm-text-xsmall-bold-line-height": "12px",
    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
    "--wcm-text-xsmall-bold-text-transform": "uppercase",
    "--wcm-text-xsmall-regular-size": "12px",
    "--wcm-text-xsmall-regular-weight": "600",
    "--wcm-text-xsmall-regular-line-height": "14px",
    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
    "--wcm-text-xsmall-regular-text-transform": "none",
    "--wcm-text-small-thin-size": "14px",
    "--wcm-text-small-thin-weight": "500",
    "--wcm-text-small-thin-line-height": "16px",
    "--wcm-text-small-thin-letter-spacing": "-0.03em",
    "--wcm-text-small-thin-text-transform": "none",
    "--wcm-text-small-regular-size": "14px",
    "--wcm-text-small-regular-weight": "600",
    "--wcm-text-small-regular-line-height": "16px",
    "--wcm-text-small-regular-letter-spacing": "-0.03em",
    "--wcm-text-small-regular-text-transform": "none",
    "--wcm-text-medium-regular-size": "16px",
    "--wcm-text-medium-regular-weight": "600",
    "--wcm-text-medium-regular-line-height": "20px",
    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
    "--wcm-text-medium-regular-text-transform": "none",
    "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
    "--wcm-success-color": "rgb(38,181,98)",
    "--wcm-error-color": "rgb(242, 90, 103)",
    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
    "--wcm-overlay-backdrop-filter": "none"
  };
}
const N = {
  getPreset(t) {
    return Rn()[t];
  },
  setTheme() {
    const t = document.querySelector(":root"), { themeVariables: e } = Pe.state;
    if (t) {
      const r = er(er(er({}, Zi()), Rn()), e);
      Object.entries(r).forEach(([o, n]) => t.style.setProperty(o, n));
    }
  },
  globalCss: B`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
}, Ki = B`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
var Yi = Object.defineProperty, Gi = Object.getOwnPropertyDescriptor, Se = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Gi(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Yi(e, r, n), n;
};
let se = class extends S {
  constructor() {
    super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default";
  }
  // -- render ------------------------------------------------------- //
  render() {
    const t = {
      "wcm-icon-left": this.iconLeft !== void 0,
      "wcm-icon-right": this.iconRight !== void 0,
      "wcm-ghost": this.variant === "ghost",
      "wcm-outline": this.variant === "outline"
    };
    let e = "inverse";
    return this.variant === "ghost" && (e = "secondary"), this.variant === "outline" && (e = "accent"), m`<button class="${X(t)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${e}"><slot></slot></wcm-text>${this.iconRight}</button>`;
  }
};
se.styles = [N.globalCss, Ki];
Se([
  M({ type: Boolean })
], se.prototype, "disabled", 2);
Se([
  M()
], se.prototype, "iconLeft", 2);
Se([
  M()
], se.prototype, "iconRight", 2);
Se([
  M()
], se.prototype, "onClick", 2);
Se([
  M()
], se.prototype, "variant", 2);
se = Se([
  L("wcm-button")
], se);
const Qi = B`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
var Ji = Object.defineProperty, Xi = Object.getOwnPropertyDescriptor, Tr = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Xi(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Ji(e, r, n), n;
};
let qe = class extends S {
  constructor() {
    super(...arguments), this.disabled = !1, this.variant = "primary";
  }
  // -- render ------------------------------------------------------- //
  render() {
    const t = {
      "wcm-secondary": this.variant === "secondary"
    };
    return m`<button ?disabled="${this.disabled}" class="${X(t)}"><slot></slot></button>`;
  }
};
qe.styles = [N.globalCss, Qi];
Tr([
  M({ type: Boolean })
], qe.prototype, "disabled", 2);
Tr([
  M()
], qe.prototype, "variant", 2);
qe = Tr([
  L("wcm-button-big")
], qe);
const es = B`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
var ts = Object.defineProperty, rs = Object.getOwnPropertyDescriptor, ns = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? rs(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && ts(e, r, n), n;
};
let dr = class extends S {
  // -- render ------------------------------------------------------- //
  render() {
    return m`<div><slot></slot></div>`;
  }
};
dr.styles = [N.globalCss, es];
dr = ns([
  L("wcm-info-footer")
], dr);
const U = {
  CROSS_ICON: j`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
  WALLET_CONNECT_LOGO: j`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
  WALLET_CONNECT_ICON: j`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
  WALLET_CONNECT_ICON_COLORED: j`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
  BACK_ICON: j`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
  COPY_ICON: j`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
  RETRY_ICON: j`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
  DESKTOP_ICON: j`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
  MOBILE_ICON: j`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
  ARROW_DOWN_ICON: j`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
  ARROW_UP_RIGHT_ICON: j`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
  ARROW_RIGHT_ICON: j`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
  QRCODE_ICON: j`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
  SCAN_ICON: j`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
  CHECKMARK_ICON: j`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
  SEARCH_ICON: j`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
  WALLET_PLACEHOLDER: j`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
  GLOBE_ICON: j`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
}, os = B`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
var is = Object.defineProperty, ss = Object.getOwnPropertyDescriptor, ls = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? ss(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && is(e, r, n), n;
};
let ur = class extends S {
  // -- render ------------------------------------------------------- //
  render() {
    return m`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${U.WALLET_CONNECT_LOGO} <button @click="${rt.close}">${U.CROSS_ICON}</button></div>`;
  }
};
ur.styles = [N.globalCss, os];
ur = ls([
  L("wcm-modal-backcard")
], ur);
const as = B`main{padding:20px;padding-top:0;width:100%}`;
var cs = Object.defineProperty, ds = Object.getOwnPropertyDescriptor, us = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? ds(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && cs(e, r, n), n;
};
let hr = class extends S {
  // -- render ------------------------------------------------------- //
  render() {
    return m`<main><slot></slot></main>`;
  }
};
hr.styles = [N.globalCss, as];
hr = us([
  L("wcm-modal-content")
], hr);
const hs = B`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
var ms = Object.defineProperty, fs = Object.getOwnPropertyDescriptor, ps = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? fs(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && ms(e, r, n), n;
};
let mr = class extends S {
  // -- render ------------------------------------------------------- //
  render() {
    return m`<footer><slot></slot></footer>`;
  }
};
mr.styles = [N.globalCss, hs];
mr = ps([
  L("wcm-modal-footer")
], mr);
const gs = B`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
var ws = Object.defineProperty, vs = Object.getOwnPropertyDescriptor, Ge = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? vs(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && ws(e, r, n), n;
};
let ge = class extends S {
  constructor() {
    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1;
  }
  // -- private ------------------------------------------------------ //
  backBtnTemplate() {
    return m`<button class="wcm-back-btn" @click="${k.goBack}">${U.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return m`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  // -- render ------------------------------------------------------- //
  render() {
    const t = {
      "wcm-border": this.border
    }, e = k.state.history.length > 1, r = this.title ? m`<wcm-text variant="big-bold">${this.title}</wcm-text>` : m`<slot></slot>`;
    return m`<header class="${X(t)}">${e ? this.backBtnTemplate() : null} ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
ge.styles = [N.globalCss, gs];
Ge([
  M()
], ge.prototype, "title", 2);
Ge([
  M()
], ge.prototype, "onAction", 2);
Ge([
  M()
], ge.prototype, "actionIcon", 2);
Ge([
  M({ type: Boolean })
], ge.prototype, "border", 2);
ge = Ge([
  L("wcm-modal-header")
], ge);
const T = {
  MOBILE_BREAKPOINT: 600,
  WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
  EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
  getShadowRootElement(t, e) {
    const r = t.renderRoot.querySelector(e);
    if (!r)
      throw new Error(`${e} not found`);
    return r;
  },
  getWalletIcon({ id: t, image_id: e }) {
    const { walletImages: r } = me.state;
    return r != null && r[t] ? r[t] : e ? z.getWalletImageUrl(e) : "";
  },
  getWalletName(t, e = !1) {
    return e && t.length > 8 ? `${t.substring(0, 8)}..` : t;
  },
  isMobileAnimation() {
    return window.innerWidth <= T.MOBILE_BREAKPOINT;
  },
  async preloadImage(t) {
    const e = new Promise((r, o) => {
      const n = new Image();
      n.onload = r, n.onerror = o, n.crossOrigin = "anonymous", n.src = t;
    });
    return Promise.race([e, O.wait(3e3)]);
  },
  getErrorMessage(t) {
    return t instanceof Error ? t.message : "Unknown Error";
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debounce(t, e = 500) {
    let r;
    return (...o) => {
      function n() {
        t(...o);
      }
      r && clearTimeout(r), r = setTimeout(n, e);
    };
  },
  handleMobileLinking(t, e = "_self") {
    const { walletConnectUri: r } = K.state, { mobile: o, name: n } = t, i = o == null ? void 0 : o.native, s = o == null ? void 0 : o.universal;
    T.setRecentWallet(t);
    function l(a) {
      if (i) {
        const c = O.formatNativeUrl(i, a, n);
        O.openHref(c, e);
      } else if (s) {
        const c = O.formatUniversalUrl(s, a, n);
        O.openHref(c, e);
      }
    }
    r && l(r);
  },
  handleAndroidLinking() {
    const { walletConnectUri: t } = K.state;
    t && (O.setWalletConnectAndroidDeepLink(t), O.openHref(t, O.isTelegram() ? "_blank" : "_self"));
  },
  async handleUriCopy() {
    const { walletConnectUri: t } = K.state;
    if (t)
      try {
        await navigator.clipboard.writeText(t), ne.openToast("Link copied", "success");
      } catch {
        ne.openToast("Failed to copy", "error");
      }
  },
  getCustomImageUrls() {
    const { walletImages: t } = me.state, e = Object.values(t ?? {});
    return Object.values(e);
  },
  truncate(t, e = 8) {
    return t.length <= e ? t : `${t.substring(0, 4)}...${t.substring(t.length - 4)}`;
  },
  setRecentWallet(t) {
    try {
      localStorage.setItem(T.WCM_RECENT_WALLET_DATA, JSON.stringify(t));
    } catch {
      console.info("Unable to set recent wallet");
    }
  },
  getRecentWallet() {
    try {
      const t = localStorage.getItem(T.WCM_RECENT_WALLET_DATA);
      return t ? JSON.parse(t) : void 0;
    } catch {
      console.info("Unable to get recent wallet");
    }
  },
  caseSafeIncludes(t, e) {
    return t.toUpperCase().includes(e.toUpperCase());
  },
  openWalletExplorerUrl() {
    O.openHref(T.EXPLORER_WALLET_URL, "_blank");
  },
  getCachedRouterWalletPlatforms() {
    const { desktop: t, mobile: e } = O.getWalletRouterData(), r = !!(t != null && t.native), o = !!(t != null && t.universal), n = !!(e != null && e.native) || !!(e != null && e.universal);
    return { isDesktop: r, isMobile: n, isWeb: o };
  },
  goToConnectingView(t) {
    k.setData({ Wallet: t });
    const e = O.isMobile(), { isDesktop: r, isWeb: o, isMobile: n } = T.getCachedRouterWalletPlatforms();
    e ? n ? (k.push("MobileConnecting"), !O.isAndroid() && O.isTelegram() && this.handleMobileLinking(t, "_blank")) : o ? k.push("WebConnecting") : k.push("InstallWallet") : r ? k.push("DesktopConnecting") : o ? k.push("WebConnecting") : n ? k.push("MobileQrcodeConnecting") : k.push("InstallWallet");
  }
}, bs = B`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
var ys = Object.defineProperty, xs = Object.getOwnPropertyDescriptor, Rr = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? xs(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && ys(e, r, n), n;
};
let Ve = class extends S {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super(), this.view = k.state.view, this.prevView = k.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = k.subscribe((t) => {
      this.view !== t.view && this.onChangeRoute();
    });
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(([t]) => {
      const e = `${t.contentRect.height}px`;
      this.oldHeight !== "0px" && he(this.routerEl, { height: [this.oldHeight, e] }, { duration: 0.2 }), this.oldHeight = e;
    }), this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var t, e;
    (t = this.unsubscribe) == null || t.call(this), (e = this.resizeObserver) == null || e.disconnect();
  }
  get routerEl() {
    return T.getShadowRootElement(this, ".wcm-router");
  }
  get contentEl() {
    return T.getShadowRootElement(this, ".wcm-content");
  }
  viewTemplate() {
    switch (this.view) {
      case "ConnectWallet":
        return m`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
      case "DesktopConnecting":
        return m`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
      case "MobileConnecting":
        return m`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
      case "WebConnecting":
        return m`<wcm-web-connecting-view></wcm-web-connecting-view>`;
      case "MobileQrcodeConnecting":
        return m`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
      case "WalletExplorer":
        return m`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
      case "Qrcode":
        return m`<wcm-qrcode-view></wcm-qrcode-view>`;
      case "InstallWallet":
        return m`<wcm-install-wallet-view></wcm-install-wallet-view>`;
      default:
        return m`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await he(
      this.routerEl,
      { opacity: [1, 0], scale: [1, 1.02] },
      { duration: 0.15, delay: 0.1 }
    ).finished, this.view = k.state.view, he(this.routerEl, { opacity: [0, 1], scale: [0.99, 1] }, { duration: 0.37, delay: 0.05 });
  }
  // -- render ------------------------------------------------------- //
  render() {
    return m`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
  }
};
Ve.styles = [N.globalCss, bs];
Rr([
  q()
], Ve.prototype, "view", 2);
Rr([
  q()
], Ve.prototype, "prevView", 2);
Ve = Rr([
  L("wcm-modal-router")
], Ve);
const $s = B`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
var _s = Object.defineProperty, Cs = Object.getOwnPropertyDescriptor, ro = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Cs(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && _s(e, r, n), n;
};
let ct = class extends S {
  constructor() {
    super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = ne.subscribe((t) => {
      t.open ? (this.open = !0, this.timeout = setTimeout(() => ne.closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout));
    });
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribe) == null || t.call(this), clearTimeout(this.timeout), ne.closeToast();
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { message: t, variant: e } = ne.state, r = {
      "wcm-success": e === "success",
      "wcm-error": e === "error"
    };
    return this.open ? m`<div class="${X(r)}">${e === "success" ? U.CHECKMARK_ICON : null} ${e === "error" ? U.CROSS_ICON : null}<wcm-text variant="small-regular">${t}</wcm-text></div>` : null;
  }
};
ct.styles = [N.globalCss, $s];
ro([
  q()
], ct.prototype, "open", 2);
ct = ro([
  L("wcm-modal-toast")
], ct);
const Es = 0.1, Mn = 2.5, J = 7;
function tr(t, e, r) {
  return t === e ? !1 : (t - e < 0 ? e - t : t - e) <= r + Es;
}
function As(t, e) {
  const r = Array.prototype.slice.call(
    Fi.create(t, { errorCorrectionLevel: e }).modules.data,
    0
  ), o = Math.sqrt(r.length);
  return r.reduce(
    (n, i, s) => (s % o === 0 ? n.push([i]) : n[n.length - 1].push(i)) && n,
    []
  );
}
const Ps = {
  generate(t, e, r) {
    const o = "#141414", n = "#ffffff", i = [], s = As(t, "Q"), l = e / s.length, a = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ];
    a.forEach(({ x: b, y: g }) => {
      const D = (s.length - J) * l * b, p = (s.length - J) * l * g, E = 0.45;
      for (let y = 0; y < a.length; y += 1) {
        const $ = l * (J - y * 2);
        i.push(
          j`<rect fill="${y % 2 === 0 ? o : n}" height="${$}" rx="${$ * E}" ry="${$ * E}" width="${$}" x="${D + l * y}" y="${p + l * y}">`
        );
      }
    });
    const c = Math.floor((r + 25) / l), h = s.length / 2 - c / 2, w = s.length / 2 + c / 2 - 1, d = [];
    s.forEach((b, g) => {
      b.forEach((D, p) => {
        if (s[g][p] && !(g < J && p < J || g > s.length - (J + 1) && p < J || g < J && p > s.length - (J + 1)) && !(g > h && g < w && p > h && p < w)) {
          const E = g * l + l / 2, y = p * l + l / 2;
          d.push([E, y]);
        }
      });
    });
    const u = {};
    return d.forEach(([b, g]) => {
      u[b] ? u[b].push(g) : u[b] = [g];
    }), Object.entries(u).map(([b, g]) => {
      const D = g.filter(
        (p) => g.every((E) => !tr(p, E, l))
      );
      return [Number(b), D];
    }).forEach(([b, g]) => {
      g.forEach((D) => {
        i.push(
          j`<circle cx="${b}" cy="${D}" fill="${o}" r="${l / Mn}">`
        );
      });
    }), Object.entries(u).filter(([b, g]) => g.length > 1).map(([b, g]) => {
      const D = g.filter((p) => g.some((E) => tr(p, E, l)));
      return [Number(b), D];
    }).map(([b, g]) => {
      g.sort((p, E) => p < E ? -1 : 1);
      const D = [];
      for (const p of g) {
        const E = D.find(
          (y) => y.some(($) => tr(p, $, l))
        );
        E ? E.push(p) : D.push([p]);
      }
      return [b, D.map((p) => [p[0], p[p.length - 1]])];
    }).forEach(([b, g]) => {
      g.forEach(([D, p]) => {
        i.push(
          j`<line x1="${b}" x2="${b}" y1="${D}" y2="${p}" stroke="${o}" stroke-width="${l / (Mn / 2)}" stroke-linecap="round">`
        );
      });
    }), i;
  }
}, Os = B`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
var Is = Object.defineProperty, Ts = Object.getOwnPropertyDescriptor, De = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Ts(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Is(e, r, n), n;
};
let le = class extends S {
  constructor() {
    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0;
  }
  // -- private ------------------------------------------------------ //
  svgTemplate() {
    const e = Pe.state.themeMode === "light" ? this.size : this.size - 18 * 2;
    return j`<svg height="${e}" width="${e}">${Ps.generate(this.uri, e, e / 4)}</svg>`;
  }
  // -- render ------------------------------------------------------- //
  render() {
    const t = {
      "wcm-dark": Pe.state.themeMode === "dark"
    };
    return m`<div style="${`width: ${this.size}px`}" class="${X(t)}">${this.walletId || this.imageUrl ? m`<wcm-wallet-image walletId="${F(this.walletId)}" imageId="${F(this.imageId)}" imageUrl="${F(this.imageUrl)}"></wcm-wallet-image>` : U.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
  }
};
le.styles = [N.globalCss, Os];
De([
  M()
], le.prototype, "uri", 2);
De([
  M({ type: Number })
], le.prototype, "size", 2);
De([
  M()
], le.prototype, "imageId", 2);
De([
  M()
], le.prototype, "walletId", 2);
De([
  M()
], le.prototype, "imageUrl", 2);
le = De([
  L("wcm-qrcode")
], le);
const Rs = B`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
var Ms = Object.defineProperty, Ss = Object.getOwnPropertyDescriptor, no = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Ss(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Ms(e, r, n), n;
};
let dt = class extends S {
  constructor() {
    super(...arguments), this.onChange = () => null;
  }
  // -- render ------------------------------------------------------- //
  render() {
    return m`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${U.SEARCH_ICON}`;
  }
};
dt.styles = [N.globalCss, Rs];
no([
  M()
], dt.prototype, "onChange", 2);
dt = no([
  L("wcm-search-input")
], dt);
const Ds = B`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
var Ns = Object.defineProperty, Ls = Object.getOwnPropertyDescriptor, Bs = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Ls(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Ns(e, r, n), n;
};
let fr = class extends S {
  // -- render ------------------------------------------------------- //
  render() {
    return m`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
fr.styles = [N.globalCss, Ds];
fr = Bs([
  L("wcm-spinner")
], fr);
const Ws = B`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
var Us = Object.defineProperty, js = Object.getOwnPropertyDescriptor, Mr = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? js(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Us(e, r, n), n;
};
let Ze = class extends S {
  constructor() {
    super(...arguments), this.variant = "medium-regular", this.color = "primary";
  }
  // -- render ------------------------------------------------------- //
  render() {
    const t = {
      "wcm-big-bold": this.variant === "big-bold",
      "wcm-medium-regular": this.variant === "medium-regular",
      "wcm-small-regular": this.variant === "small-regular",
      "wcm-small-thin": this.variant === "small-thin",
      "wcm-xsmall-regular": this.variant === "xsmall-regular",
      "wcm-xsmall-bold": this.variant === "xsmall-bold",
      "wcm-color-primary": this.color === "primary",
      "wcm-color-secondary": this.color === "secondary",
      "wcm-color-tertiary": this.color === "tertiary",
      "wcm-color-inverse": this.color === "inverse",
      "wcm-color-accnt": this.color === "accent",
      "wcm-color-error": this.color === "error"
    };
    return m`<span><slot class="${X(t)}"></slot></span>`;
  }
};
Ze.styles = [N.globalCss, Ws];
Mr([
  M()
], Ze.prototype, "variant", 2);
Mr([
  M()
], Ze.prototype, "color", 2);
Ze = Mr([
  L("wcm-text")
], Ze);
const ks = B`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
var Hs = Object.defineProperty, Fs = Object.getOwnPropertyDescriptor, ce = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Fs(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Hs(e, r, n), n;
};
let Y = class extends S {
  constructor() {
    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1;
  }
  // -- private ------------------------------------------------------ //
  sublabelTemplate() {
    return this.recent ? m`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? m`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null;
  }
  handleClick() {
    ho.click({ name: "WALLET_BUTTON", walletId: this.walletId }), this.onClick();
  }
  // -- render ------------------------------------------------------- //
  render() {
    var t;
    return m`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${F(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(t = this.label) != null ? t : T.getWalletName(this.name, !0)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
  }
};
Y.styles = [N.globalCss, ks];
ce([
  M()
], Y.prototype, "onClick", 2);
ce([
  M()
], Y.prototype, "name", 2);
ce([
  M()
], Y.prototype, "walletId", 2);
ce([
  M()
], Y.prototype, "label", 2);
ce([
  M()
], Y.prototype, "imageId", 2);
ce([
  M({ type: Boolean })
], Y.prototype, "installed", 2);
ce([
  M({ type: Boolean })
], Y.prototype, "recent", 2);
Y = ce([
  L("wcm-wallet-button")
], Y);
const zs = B`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var qs = Object.defineProperty, Vs = Object.getOwnPropertyDescriptor, pt = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Vs(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && qs(e, r, n), n;
};
let Re = class extends S {
  constructor() {
    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0;
  }
  // -- render ------------------------------------------------------- //
  render() {
    var t;
    const e = (t = this.imageUrl) != null && t.length ? this.imageUrl : T.getWalletIcon({ id: this.walletId, image_id: this.imageId });
    return m`${e.length ? m`<div><img crossorigin="anonymous" src="${e}" alt="${this.id}"></div>` : U.WALLET_PLACEHOLDER}`;
  }
};
Re.styles = [N.globalCss, zs];
pt([
  M()
], Re.prototype, "walletId", 2);
pt([
  M()
], Re.prototype, "imageId", 2);
pt([
  M()
], Re.prototype, "imageUrl", 2);
Re = pt([
  L("wcm-wallet-image")
], Re);
var Zs = Object.defineProperty, Ks = Object.getOwnPropertyDescriptor, oo = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Ks(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Zs(e, r, n), n;
};
let pr = class extends S {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super(), this.preload = !0, this.preloadData();
  }
  // -- private ------------------------------------------------------ //
  async loadImages(t) {
    try {
      t != null && t.length && await Promise.all(t.map(async (e) => T.preloadImage(e)));
    } catch {
      console.info("Unsuccessful attempt at preloading some images", t);
    }
  }
  async preloadListings() {
    if (me.state.enableExplorer) {
      await z.getRecomendedWallets(), K.setIsDataLoaded(!0);
      const { recomendedWallets: t } = z.state, e = t.map((r) => T.getWalletIcon(r));
      await this.loadImages(e);
    } else
      K.setIsDataLoaded(!0);
  }
  async preloadCustomImages() {
    const t = T.getCustomImageUrls();
    await this.loadImages(t);
  }
  async preloadData() {
    try {
      this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]));
    } catch (t) {
      console.error(t), ne.openToast("Failed preloading", "error");
    }
  }
};
oo([
  q()
], pr.prototype, "preload", 2);
pr = oo([
  L("wcm-explorer-context")
], pr);
var Ys = Object.defineProperty, Gs = Object.getOwnPropertyDescriptor, Qs = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Gs(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Ys(e, r, n), n;
};
let Sn = class extends S {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super(), this.unsubscribeTheme = void 0, N.setTheme(), this.unsubscribeTheme = Pe.subscribe(N.setTheme);
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeTheme) == null || t.call(this);
  }
};
Sn = Qs([
  L("wcm-theme-context")
], Sn);
const Js = B`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var Xs = Object.defineProperty, el = Object.getOwnPropertyDescriptor, tl = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? el(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Xs(e, r, n), n;
};
let gr = class extends S {
  // -- private ------------------------------------------------------ //
  onGoToQrcode() {
    k.push("Qrcode");
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { recomendedWallets: t } = z.state, e = [...t, ...t], r = O.RECOMMENDED_WALLET_AMOUNT * 2;
    return m`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${U.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${U.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(r)].map((o, n) => {
      const i = e[n % e.length];
      return i ? m`<wcm-wallet-image walletId="${i.id}" imageId="${i.image_id}"></wcm-wallet-image>` : U.WALLET_PLACEHOLDER;
    })}</div><wcm-button-big @click="${T.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
  }
};
gr.styles = [N.globalCss, Js];
gr = tl([
  L("wcm-android-wallet-selection")
], gr);
const rl = B`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
var nl = Object.defineProperty, ol = Object.getOwnPropertyDescriptor, Ne = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? ol(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && nl(e, r, n), n;
};
let ae = class extends S {
  constructor() {
    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = "";
  }
  // -- private ------------------------------------------------------ //
  svgLoaderTemplate() {
    var t, e;
    const i = (e = (t = Pe.state.themeVariables) == null ? void 0 : t["--wcm-wallet-icon-large-border-radius"]) != null ? e : N.getPreset("--wcm-wallet-icon-large-border-radius");
    let s = 0;
    i.includes("%") ? s = 88 / 100 * parseInt(i, 10) : s = parseInt(i, 10), s *= 1.17;
    const l = 317 - s * 1.57, a = 425 - s * 1.8;
    return m`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${s}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${l}" stroke-dashoffset="${a}"></use></svg>`;
  }
  // -- render ------------------------------------------------------- //
  render() {
    const t = {
      "wcm-error": this.isError,
      "wcm-stale": this.isStale
    };
    return m`<div class="${X(t)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${F(this.walletId)}" imageId="${F(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
  }
};
ae.styles = [N.globalCss, rl];
Ne([
  M()
], ae.prototype, "walletId", 2);
Ne([
  M()
], ae.prototype, "imageId", 2);
Ne([
  M({ type: Boolean })
], ae.prototype, "isError", 2);
Ne([
  M({ type: Boolean })
], ae.prototype, "isStale", 2);
Ne([
  M()
], ae.prototype, "label", 2);
ae = Ne([
  L("wcm-connector-waiting")
], ae);
const Ae = {
  manualWallets() {
    var t, e;
    const { mobileWallets: r, desktopWallets: o } = me.state, n = (t = Ae.recentWallet()) == null ? void 0 : t.id, i = O.isMobile() ? r : o, s = i == null ? void 0 : i.filter((l) => n !== l.id);
    return (e = O.isMobile() ? s == null ? void 0 : s.map(({ id: l, name: a, links: c }) => ({ id: l, name: a, mobile: c, links: c })) : s == null ? void 0 : s.map(({ id: l, name: a, links: c }) => ({ id: l, name: a, desktop: c, links: c }))) != null ? e : [];
  },
  recentWallet() {
    return T.getRecentWallet();
  },
  recomendedWallets(t = !1) {
    var e;
    const r = t || (e = Ae.recentWallet()) == null ? void 0 : e.id, { recomendedWallets: o } = z.state;
    return o.filter((i) => r !== i.id);
  }
}, ie = {
  onConnecting(t) {
    T.goToConnectingView(t);
  },
  manualWalletsTemplate() {
    return Ae.manualWallets().map(
      (e) => m`<wcm-wallet-button walletId="${e.id}" name="${e.name}" .onClick="${() => this.onConnecting(e)}"></wcm-wallet-button>`
    );
  },
  recomendedWalletsTemplate(t = !1) {
    return Ae.recomendedWallets(t).map(
      (r) => m`<wcm-wallet-button name="${r.name}" walletId="${r.id}" imageId="${r.image_id}" .onClick="${() => this.onConnecting(r)}"></wcm-wallet-button>`
    );
  },
  recentWalletTemplate() {
    const t = Ae.recentWallet();
    if (t)
      return m`<wcm-wallet-button name="${t.name}" walletId="${t.id}" imageId="${F(t.image_id)}" .recent="${!0}" .onClick="${() => this.onConnecting(t)}"></wcm-wallet-button>`;
  }
}, il = B`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
var sl = Object.defineProperty, ll = Object.getOwnPropertyDescriptor, al = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? ll(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && sl(e, r, n), n;
};
let wr = class extends S {
  // -- render ------------------------------------------------------- //
  render() {
    const { explorerExcludedWalletIds: t, enableExplorer: e } = me.state, r = t !== "ALL" && e, o = ie.manualWalletsTemplate(), n = ie.recomendedWalletsTemplate();
    let s = [ie.recentWalletTemplate(), ...o, ...n];
    s = s.filter(Boolean);
    const l = s.length > 4 || r;
    let a = [];
    l ? a = s.slice(0, 3) : a = s;
    const c = !!a.length;
    return m`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${T.handleUriCopy}" .actionIcon="${U.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${U.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${U.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${c ? m`<wcm-modal-footer><div class="wcm-desktop-title">${U.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${a} ${l ? m`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
  }
};
wr.styles = [N.globalCss, il];
wr = al([
  L("wcm-desktop-wallet-selection")
], wr);
const cl = B`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
var dl = Object.defineProperty, ul = Object.getOwnPropertyDescriptor, hl = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? ul(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && dl(e, r, n), n;
};
let vr = class extends S {
  // -- render ------------------------------------------------------- //
  render() {
    const { termsOfServiceUrl: t, privacyPolicyUrl: e } = me.state;
    return t ?? e ? m`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${t ? m`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${t && e ? "and" : null} ${e ? m`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>` : null;
  }
};
vr.styles = [N.globalCss, cl];
vr = hl([
  L("wcm-legal-notice")
], vr);
const ml = B`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var fl = Object.defineProperty, pl = Object.getOwnPropertyDescriptor, gl = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? pl(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && fl(e, r, n), n;
};
let br = class extends S {
  // -- private ------------------------------------------------------ //
  onQrcode() {
    k.push("Qrcode");
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { explorerExcludedWalletIds: t, enableExplorer: e } = me.state, r = t !== "ALL" && e, o = ie.manualWalletsTemplate(), n = ie.recomendedWalletsTemplate();
    let s = [ie.recentWalletTemplate(), ...o, ...n];
    s = s.filter(Boolean);
    const l = s.length > 8 || r;
    let a = [];
    l ? a = s.slice(0, 7) : a = s;
    const c = !!a.length;
    return m`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${U.QRCODE_ICON}"></wcm-modal-header>${c ? m`<wcm-modal-content><div>${a} ${l ? m`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
  }
};
br.styles = [N.globalCss, ml];
br = gl([
  L("wcm-mobile-wallet-selection")
], br);
const wl = B`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
var vl = Object.defineProperty, bl = Object.getOwnPropertyDescriptor, Sr = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? bl(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && vl(e, r, n), n;
};
let Ke = class extends S {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = rt.subscribe((t) => {
      t.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
    });
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeModal) == null || t.call(this);
  }
  get overlayEl() {
    return T.getShadowRootElement(this, ".wcm-overlay");
  }
  get containerEl() {
    return T.getShadowRootElement(this, ".wcm-container");
  }
  toggleBodyScroll(t) {
    if (document.querySelector("body"))
      if (t) {
        const r = document.getElementById("wcm-styles");
        r == null || r.remove();
      } else
        document.head.insertAdjacentHTML(
          "beforeend",
          '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
        );
  }
  onCloseModal(t) {
    t.target === t.currentTarget && rt.close();
  }
  onOpenModalEvent() {
    this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout(async () => {
      const t = T.isMobileAnimation() ? { y: ["50vh", "0vh"] } : { scale: [0.98, 1] }, e = 0.1, r = 0.2;
      await Promise.all([
        he(this.overlayEl, { opacity: [0, 1] }, { delay: e, duration: r }).finished,
        he(this.containerEl, t, { delay: e, duration: r }).finished
      ]), this.active = !0;
    }, 0);
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
    const t = T.isMobileAnimation() ? { y: ["0vh", "50vh"] } : { scale: [1, 0.98] }, e = 0.2;
    await Promise.all([
      he(this.overlayEl, { opacity: [1, 0] }, { duration: e }).finished,
      he(this.containerEl, t, { duration: e }).finished
    ]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1;
  }
  addKeyboardEvents() {
    this.abortController = new AbortController(), window.addEventListener(
      "keydown",
      (t) => {
        var e;
        t.key === "Escape" ? rt.close() : t.key === "Tab" && ((e = t.target) != null && e.tagName.includes("wcm-") || this.containerEl.focus());
      },
      this.abortController
    ), this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var t;
    (t = this.abortController) == null || t.abort(), this.abortController = void 0;
  }
  // -- render ------------------------------------------------------- //
  render() {
    const t = {
      "wcm-overlay": !0,
      "wcm-active": this.active
    };
    return m`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${X(t)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? m`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
  }
};
Ke.styles = [N.globalCss, wl];
Sr([
  q()
], Ke.prototype, "open", 2);
Sr([
  q()
], Ke.prototype, "active", 2);
Ke = Sr([
  L("wcm-modal")
], Ke);
const yl = B`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
var xl = Object.defineProperty, $l = Object.getOwnPropertyDescriptor, Qe = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? $l(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && xl(e, r, n), n;
};
let we = class extends S {
  constructor() {
    super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1;
  }
  // -- private ------------------------------------------------------ //
  onMobile() {
    O.isMobile() ? k.replace("MobileConnecting") : k.replace("MobileQrcodeConnecting");
  }
  onDesktop() {
    k.replace("DesktopConnecting");
  }
  onWeb() {
    k.replace("WebConnecting");
  }
  // -- render ------------------------------------------------------- //
  render() {
    return m`<div>${this.isRetry ? m`<slot></slot>` : null} ${this.isMobile ? m`<wcm-button .onClick="${this.onMobile}" .iconLeft="${U.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? m`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${U.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? m`<wcm-button .onClick="${this.onWeb}" .iconLeft="${U.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
  }
};
we.styles = [N.globalCss, yl];
Qe([
  M({ type: Boolean })
], we.prototype, "isMobile", 2);
Qe([
  M({ type: Boolean })
], we.prototype, "isDesktop", 2);
Qe([
  M({ type: Boolean })
], we.prototype, "isWeb", 2);
Qe([
  M({ type: Boolean })
], we.prototype, "isRetry", 2);
we = Qe([
  L("wcm-platform-selection")
], we);
const _l = B`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var Cl = Object.defineProperty, El = Object.getOwnPropertyDescriptor, Al = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? El(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Cl(e, r, n), n;
};
let yr = class extends S {
  // -- render ------------------------------------------------------- //
  onClick() {
    k.push("WalletExplorer");
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { recomendedWallets: t } = z.state, e = Ae.manualWallets(), r = [...t, ...e].reverse().slice(0, 4);
    return m`<button @click="${this.onClick}"><div class="wcm-icons">${r.map((o) => {
      const n = T.getWalletIcon(o);
      if (n)
        return m`<img crossorigin="anonymous" src="${n}">`;
      const i = T.getWalletIcon({ id: o.id });
      return i ? m`<img crossorigin="anonymous" src="${i}">` : U.WALLET_PLACEHOLDER;
    })} ${[...Array(4 - r.length)].map(() => U.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
  }
};
yr.styles = [N.globalCss, _l];
yr = Al([
  L("wcm-view-all-wallets-button")
], yr);
const Pl = B`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var Ol = Object.defineProperty, Il = Object.getOwnPropertyDescriptor, gt = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Il(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Ol(e, r, n), n;
};
let Me = class extends S {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
      const { walletConnectUri: t } = K.state;
      this.uri = t;
    }, 0);
  }
  // -- private ------------------------------------------------------ //
  get overlayEl() {
    return T.getShadowRootElement(this, ".wcm-qr-container");
  }
  // -- render ------------------------------------------------------- //
  render() {
    return m`<div class="wcm-qr-container">${this.uri ? m`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${F(this.walletId)}" imageId="${F(this.imageId)}"></wcm-qrcode>` : m`<wcm-spinner></wcm-spinner>`}</div>`;
  }
};
Me.styles = [N.globalCss, Pl];
gt([
  M()
], Me.prototype, "walletId", 2);
gt([
  M()
], Me.prototype, "imageId", 2);
gt([
  q()
], Me.prototype, "uri", 2);
Me = gt([
  L("wcm-walletconnect-qr")
], Me);
var Tl = Object.defineProperty, Rl = Object.getOwnPropertyDescriptor, Ml = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Rl(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Tl(e, r, n), n;
};
let xr = class extends S {
  // -- private ------------------------------------------------------ //
  viewTemplate() {
    return O.isAndroid() && !O.isTelegram() ? m`<wcm-android-wallet-selection></wcm-android-wallet-selection>` : O.isMobile() ? m`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : m`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
  }
  // -- render ------------------------------------------------------- //
  render() {
    return m`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
  }
};
xr.styles = [N.globalCss];
xr = Ml([
  L("wcm-connect-wallet-view")
], xr);
const Sl = B`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Dl = Object.defineProperty, Nl = Object.getOwnPropertyDescriptor, io = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Nl(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Dl(e, r, n), n;
};
let ut = class extends S {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super(), this.isError = !1, this.openDesktopApp();
  }
  // -- private ------------------------------------------------------ //
  onFormatAndRedirect(t) {
    const { desktop: e, name: r } = O.getWalletRouterData(), o = e == null ? void 0 : e.native, n = e == null ? void 0 : e.universal;
    if (o) {
      const i = O.formatNativeUrl(o, t, r);
      O.openHref(i, "_self");
    } else if (n) {
      const i = O.formatUniversalUrl(n, t, r);
      O.openHref(i, "_blank");
    }
  }
  openDesktopApp() {
    const { walletConnectUri: t } = K.state, e = O.getWalletRouterData();
    T.setRecentWallet(e), t && this.onFormatAndRedirect(t);
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { name: t, id: e, image_id: r } = O.getWalletRouterData(), { isMobile: o, isWeb: n } = T.getCachedRouterWalletPlatforms();
    return m`<wcm-modal-header title="${t}" .onAction="${T.handleUriCopy}" .actionIcon="${U.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${F(r)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isWeb="${n}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${U.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
ut.styles = [N.globalCss, Sl];
io([
  q()
], ut.prototype, "isError", 2);
ut = io([
  L("wcm-desktop-connecting-view")
], ut);
const Ll = B`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
var Bl = Object.defineProperty, Wl = Object.getOwnPropertyDescriptor, Ul = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Wl(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Bl(e, r, n), n;
};
let $r = class extends S {
  // -- private ------------------------------------------------------ //
  onInstall(t) {
    t && O.openHref(t, "_blank");
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { name: t, id: e, image_id: r, homepage: o } = O.getWalletRouterData();
    return m`<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${F(r)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</wcm-text><wcm-button .onClick="${() => this.onInstall(o)}" .iconLeft="${U.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
  }
};
$r.styles = [N.globalCss, Ll];
$r = Ul([
  L("wcm-install-wallet-view")
], $r);
const jl = B`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
var kl = Object.defineProperty, Hl = Object.getOwnPropertyDescriptor, so = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Hl(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && kl(e, r, n), n;
};
let ht = class extends S {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super(), this.isError = !1, this.openMobileApp();
  }
  // -- private ------------------------------------------------------ //
  onFormatAndRedirect(t, e = !1) {
    const { mobile: r, name: o } = O.getWalletRouterData(), n = r == null ? void 0 : r.native, i = r == null ? void 0 : r.universal, s = O.isTelegram() ? "_blank" : "_self";
    if (t = O.isTelegram() && O.isAndroid() ? encodeURIComponent(t) : t, n && !e) {
      const l = O.formatNativeUrl(n, t, o);
      O.openHref(l, s);
    } else if (i) {
      const l = O.formatUniversalUrl(i, t, o);
      O.openHref(l, s);
    }
  }
  openMobileApp(t = !1) {
    const { walletConnectUri: e } = K.state, r = O.getWalletRouterData();
    e && this.onFormatAndRedirect(e, t), T.setRecentWallet(r);
  }
  onGoToAppStore(t) {
    t && O.openHref(t, "_blank");
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { name: t, id: e, image_id: r, app: o, mobile: n } = O.getWalletRouterData(), { isWeb: i } = T.getCachedRouterWalletPlatforms(), s = o == null ? void 0 : o.ios, l = n == null ? void 0 : n.universal;
    return m`<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${F(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${i}" .isRetry="${!0}"><wcm-button .onClick="${() => this.openMobileApp(!1)}" .iconRight="${U.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${l ? m`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() => this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${e}" imageId="${F(r)}"></wcm-wallet-image><wcm-text>${`Get ${t}`}</wcm-text></div><wcm-button .iconRight="${U.ARROW_RIGHT_ICON}" .onClick="${() => this.onGoToAppStore(s)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
  }
};
ht.styles = [N.globalCss, jl];
so([
  q()
], ht.prototype, "isError", 2);
ht = so([
  L("wcm-mobile-connecting-view")
], ht);
const Fl = B`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var zl = Object.defineProperty, ql = Object.getOwnPropertyDescriptor, Vl = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? ql(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && zl(e, r, n), n;
};
let _r = class extends S {
  // -- render ------------------------------------------------------- //
  render() {
    const { name: t, id: e, image_id: r } = O.getWalletRouterData(), { isDesktop: o, isWeb: n } = T.getCachedRouterWalletPlatforms();
    return m`<wcm-modal-header title="${t}" .onAction="${T.handleUriCopy}" .actionIcon="${U.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${e}" imageId="${F(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</wcm-text><wcm-platform-selection .isDesktop="${o}" .isWeb="${n}"></wcm-platform-selection></wcm-info-footer>`;
  }
};
_r.styles = [N.globalCss, Fl];
_r = Vl([
  L("wcm-mobile-qr-connecting-view")
], _r);
var Zl = Object.defineProperty, Kl = Object.getOwnPropertyDescriptor, Yl = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Kl(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Zl(e, r, n), n;
};
let Cr = class extends S {
  // -- render ------------------------------------------------------- //
  render() {
    return m`<wcm-modal-header title="Scan the code" .onAction="${T.handleUriCopy}" .actionIcon="${U.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
  }
};
Cr.styles = [N.globalCss];
Cr = Yl([
  L("wcm-qrcode-view")
], Cr);
const Gl = B`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var Ql = Object.defineProperty, Jl = Object.getOwnPropertyDescriptor, Je = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? Jl(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && Ql(e, r, n), n;
};
const rr = 40;
let ve = class extends S {
  constructor() {
    super(...arguments), this.loading = !z.state.wallets.listings.length, this.firstFetch = !z.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = T.debounce((t) => {
      t.length >= 1 ? (this.firstFetch = !0, this.endReached = !1, this.search = t, z.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), z.resetSearch());
    });
  }
  // -- lifecycle ---------------------------------------------------- //
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var t;
    (t = this.intersectionObserver) == null || t.disconnect();
  }
  // -- private ------------------------------------------------------ //
  get placeholderEl() {
    return T.getShadowRootElement(this, ".wcm-placeholder-block");
  }
  createPaginationObserver() {
    this.intersectionObserver = new IntersectionObserver(([t]) => {
      t.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
    }), this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const { wallets: t, search: e } = z.state, { listings: r, total: o } = this.search ? e : t;
    return o <= rr || r.length >= o;
  }
  async fetchWallets() {
    var t;
    const { wallets: e, search: r } = z.state, { listings: o, total: n, page: i } = this.search ? r : e;
    if (!this.endReached && (this.firstFetch || n > rr && o.length < n))
      try {
        this.loading = !0;
        const s = (t = K.state.chains) == null ? void 0 : t.join(","), { listings: l } = await z.getWallets({
          page: this.firstFetch ? 1 : i + 1,
          entries: rr,
          search: this.search,
          version: 2,
          chains: s
        }), a = l.map((c) => T.getWalletIcon(c));
        await Promise.all([
          ...a.map(async (c) => T.preloadImage(c)),
          O.wait(300)
        ]), this.endReached = this.isLastPage();
      } catch (s) {
        console.error(s), ne.openToast(T.getErrorMessage(s), "error");
      } finally {
        this.loading = !1, this.firstFetch = !1;
      }
  }
  onConnect(t) {
    O.isAndroid() ? T.handleMobileLinking(t) : T.goToConnectingView(t);
  }
  onSearchChange(t) {
    const { value: e } = t.target;
    this.searchDebounce(e);
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { wallets: t, search: e } = z.state, { listings: r } = this.search ? e : t, o = this.loading && !r.length, n = this.search.length >= 3;
    let i = ie.manualWalletsTemplate(), s = ie.recomendedWalletsTemplate(!0);
    n && (i = i.filter(
      ({ values: c }) => T.caseSafeIncludes(c[0], this.search)
    ), s = s.filter(
      ({ values: c }) => T.caseSafeIncludes(c[0], this.search)
    ));
    const l = !this.loading && !r.length && !s.length, a = {
      "wcm-loading": o,
      "wcm-end-reached": this.endReached || !this.loading,
      "wcm-empty": l
    };
    return m`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${X(a)}"><div class="wcm-grid">${o ? null : i} ${o ? null : s} ${o ? null : r.map(
      (c) => m`${c ? m`<wcm-wallet-button imageId="${c.image_id}" name="${c.name}" walletId="${c.id}" .onClick="${() => this.onConnect(c)}"></wcm-wallet-button>` : null}`
    )}</div><div class="wcm-placeholder-block">${l ? m`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!l && this.loading ? m`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
  }
};
ve.styles = [N.globalCss, Gl];
Je([
  q()
], ve.prototype, "loading", 2);
Je([
  q()
], ve.prototype, "firstFetch", 2);
Je([
  q()
], ve.prototype, "search", 2);
Je([
  q()
], ve.prototype, "endReached", 2);
ve = Je([
  L("wcm-wallet-explorer-view")
], ve);
const Xl = B`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var ea = Object.defineProperty, ta = Object.getOwnPropertyDescriptor, lo = (t, e, r, o) => {
  for (var n = o > 1 ? void 0 : o ? ta(e, r) : e, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (n = (o ? s(e, r, n) : s(n)) || n);
  return o && n && ea(e, r, n), n;
};
let mt = class extends S {
  // -- lifecycle ---------------------------------------------------- //
  constructor() {
    super(), this.isError = !1, this.openWebWallet();
  }
  // -- private ------------------------------------------------------ //
  onFormatAndRedirect(t) {
    const { desktop: e, name: r } = O.getWalletRouterData(), o = e == null ? void 0 : e.universal;
    if (o) {
      const n = O.formatUniversalUrl(o, t, r);
      O.openHref(n, "_blank");
    }
  }
  openWebWallet() {
    const { walletConnectUri: t } = K.state, e = O.getWalletRouterData();
    T.setRecentWallet(e), t && this.onFormatAndRedirect(t);
  }
  // -- render ------------------------------------------------------- //
  render() {
    const { name: t, id: e, image_id: r } = O.getWalletRouterData(), { isMobile: o, isDesktop: n } = T.getCachedRouterWalletPlatforms(), i = O.isMobile();
    return m`<wcm-modal-header title="${t}" .onAction="${T.handleUriCopy}" .actionIcon="${U.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${F(r)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isDesktop="${i ? !1 : n}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${U.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
mt.styles = [N.globalCss, Xl];
lo([
  q()
], mt.prototype, "isError", 2);
mt = lo([
  L("wcm-web-connecting-view")
], mt);
export {
  Ke as WcmModal,
  le as WcmQrCode
};
