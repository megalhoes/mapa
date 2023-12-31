//R é o número do arquivo 5187

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.L = {})
}(this, function(t) {
    "use strict";

    function e(t) {
        var e, i, n, o;
        for (i = 1, n = arguments.length; i < n; i++) {
            o = arguments[i];
            for (e in o) t[e] = o[e]
        }
        return t
    }

    function i(t, e) {
        var i = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
            return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
        }
    }

    function n(t) {
        return t._leaflet_id = t._leaflet_id || ++me, t._leaflet_id
    }

    function o(t, e, i) {
        var n, o, s, r;
        return r = function() {
            n = !1, o && (s.apply(i, o), o = !1)
        }, s = function() {
            n ? o = arguments : (t.apply(i, arguments), setTimeout(r, e), n = !0)
        }
    }

    function s(t, e, i) {
        var n = e[1],
            o = e[0],
            s = n - o;
        return t === n && i ? t : ((t - o) % s + s) % s + o
    }

    function r() {
        return !1
    }

    function a(t, e) {
        var i = Math.pow(10, e || 5);
        return Math.round(t * i) / i
    }

    function h(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }

    function l(t) {
        return h(t).split(/\s+/)
    }

    function u(t, e) {
        t.hasOwnProperty("options") || (t.options = t.options ? pe(t.options) : {});
        for (var i in e) t.options[i] = e[i];
        return t.options
    }

    function c(t, e, i) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (e && e.indexOf("?") !== -1 ? "&" : "?") + n.join("&")
    }

    function d(t, e) {
        return t.replace(fe, function(t, i) {
            var n = e[i];
            if (void 0 === n) throw new Error("No value provided for variable " + t);
            return "function" == typeof n && (n = n(e)), n
        })
    }

    function _(t, e) {
        for (var i = 0; i < t.length; i++)
            if (t[i] === e) return i;
        return -1
    }

    function p(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }

    function m(t) {
        var e = +new Date,
            i = Math.max(0, 16 - (e - ye));
        return ye = e + i, window.setTimeout(t, i)
    }

    function f(t, e, n) {
        return n && Le === m ? void t.call(e) : Le.call(window, i(t, e))
    }

    function v(t) {
        t && xe.call(window, t)
    }

    function g() {}

    function y(t) {
        if (L && L.Mixin) {
            t = ve(t) ? t : [t];
            for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
        }
    }

    function x(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
    }

    function w(t, e, i) {
        return t instanceof x ? t : ve(t) ? new x(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new x(t.x, t.y) : new x(t, e, i)
    }

    function b(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }

    function P(t, e) {
        return !t || t instanceof b ? t : new b(t, e)
    }

    function T(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }

    function M(t, e) {
        return t instanceof T ? t : new T(t, e)
    }

    function C(t, e, i) {
        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i)
    }

    function z(t, e, i) {
        return t instanceof C ? t : ve(t) && "object" != typeof t[0] ? 3 === t.length ? new C(t[0], t[1], t[2]) : 2 === t.length ? new C(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new C(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new C(t, e, i)
    }

    function E(t, e, i, n) {
        return ve(t) ? (this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3])) : (this._a = t, this._b = e, this._c = i, void(this._d = n))
    }

    function k(t, e, i, n) {
        return new E(t, e, i, n)
    }

    function S(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function Z(t, e) {
        var i, n, o, s, r, a, h = "";
        for (i = 0, o = t.length; i < o; i++) {
            for (r = t[i], n = 0, s = r.length; n < s; n++) a = r[n], h += (n ? "L" : "M") + a.x + " " + a.y;
            h += e ? hi ? "z" : "x" : ""
        }
        return h || "M0 0"
    }

    function B(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0
    }

    function I(t, e, i, n) {
        return "touchstart" === e ? O(t, i, n) : "touchmove" === e ? N(t, i, n) : "touchend" === e && U(t, i, n), this
    }

    function A(t, e, i) {
        var n = t["_leaflet_" + e + i];
        return "touchstart" === e ? t.removeEventListener(ci, n, !1) : "touchmove" === e ? t.removeEventListener(di, n, !1) : "touchend" === e && (t.removeEventListener(_i, n, !1), t.removeEventListener(pi, n, !1)), this
    }

    function O(t, e, n) {
        var o = i(function(t) {
            if ("mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (!(mi.indexOf(t.target.tagName) < 0)) return;
                $(t)
            }
            j(t, e)
        });
        t["_leaflet_touchstart" + n] = o, t.addEventListener(ci, o, !1), vi || (document.documentElement.addEventListener(ci, D, !0), document.documentElement.addEventListener(di, F, !0), document.documentElement.addEventListener(_i, R, !0), document.documentElement.addEventListener(pi, R, !0), vi = !0)
    }

    function D(t) {
        fi[t.pointerId] = t, gi++
    }

    function F(t) {
        fi[t.pointerId] && (fi[t.pointerId] = t)
    }

    function R(t) {
        delete fi[t.pointerId], gi--
    }

    function j(t, e) {
        t.touches = [];
        for (var i in fi) t.touches.push(fi[i]);
        t.changedTouches = [t], e(t)
    }

    function N(t, e, i) {
        var n = function(t) {
            (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && j(t, e)
        };
        t["_leaflet_touchmove" + i] = n, t.addEventListener(di, n, !1)
    }

    function U(t, e, i) {
        var n = function(t) {
            j(t, e)
        };
        t["_leaflet_touchend" + i] = n, t.addEventListener(_i, n, !1), t.addEventListener(pi, n, !1)
    }

    function H(t, e, i) {
        function n(t) {
            var e;
            if (ii) {
                if (!De || "mouse" === t.pointerType) return;
                e = gi
            } else e = t.touches.length;
            if (!(e > 1)) {
                var i = Date.now(),
                    n = i - (s || i);
                r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = i
            }
        }

        function o(t) {
            if (a && !r.cancelBubble) {
                if (ii) {
                    if (!De || "mouse" === t.pointerType) return;
                    var i, n, o = {};
                    for (n in r) i = r[n], o[n] = i && i.bind ? i.bind(r) : i;
                    r = o
                }
                r.type = "dblclick", e(r), s = null
            }
        }
        var s, r, a = !1,
            h = 250;
        return t[xi + yi + i] = n, t[xi + Li + i] = o, t[xi + "dblclick" + i] = e, t.addEventListener(yi, n, !1), t.addEventListener(Li, o, !1), t.addEventListener("dblclick", e, !1), this
    }

    function W(t, e) {
        var i = t[xi + yi + e],
            n = t[xi + Li + e],
            o = t[xi + "dblclick" + e];
        return t.removeEventListener(yi, i, !1), t.removeEventListener(Li, n, !1), De || t.removeEventListener("dblclick", o, !1), this
    }

    function V(t, e, i, n) {
        if ("object" == typeof e)
            for (var o in e) G(t, o, e[o], i);
        else {
            e = l(e);
            for (var s = 0, r = e.length; s < r; s++) G(t, e[s], i, n)
        }
        return this
    }

    function q(t, e, i, n) {
        if ("object" == typeof e)
            for (var o in e) Y(t, o, e[o], i);
        else if (e) {
            e = l(e);
            for (var s = 0, r = e.length; s < r; s++) Y(t, e[s], i, n)
        } else {
            for (var a in t[wi]) Y(t, a, t[wi][a]);
            delete t[wi]
        }
        return this
    }

    function G(t, e, i, o) {
        var s = e + n(i) + (o ? "_" + n(o) : "");
        if (t[wi] && t[wi][s]) return this;
        var r = function(e) {
                return i.call(o || t, e || window.event)
            },
            a = r;
        ii && 0 === e.indexOf("touch") ? I(t, e, r, s) : !ni || "dblclick" !== e || !H || ii && Ue ? "addEventListener" in t ? "mousewheel" === e ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === e || "mouseleave" === e ? (r = function(e) {
            e = e || window.event, ot(t, e) && a(e)
        }, t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", r, !1)) : ("click" === e && Re && (r = function(t) {
            st(t, a)
        }), t.addEventListener(e, r, !1)) : "attachEvent" in t && t.attachEvent("on" + e, r) : H(t, r, s), t[wi] = t[wi] || {}, t[wi][s] = r
    }

    function Y(t, e, i, o) {
        var s = e + n(i) + (o ? "_" + n(o) : ""),
            r = t[wi] && t[wi][s];
        return r ? (ii && 0 === e.indexOf("touch") ? A(t, e, s) : ni && "dblclick" === e && W ? W(t, s) : "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, r, !1) : "detachEvent" in t && t.detachEvent("on" + e, r), void(t[wi][s] = null)) : this
    }

    function K(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, nt(t), this
    }

    function X(t) {
        return G(t, "mousewheel", K), this
    }

    function J(t) {
        return V(t, "mousedown touchstart dblclick", K), G(t, "click", it), this
    }

    function $(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
    }

    function Q(t) {
        return $(t), K(t), this
    }

    function tt(t, e) {
        if (!e) return new x(t.clientX, t.clientY);
        var i = e.getBoundingClientRect();
        return new x(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
    }

    function et(t) {
        return De ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / bi : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }

    function it(t) {
        Pi[t.type] = !0
    }

    function nt(t) {
        var e = Pi[t.type];
        return Pi[t.type] = !1, e
    }

    function ot(t, e) {
        var i = e.relatedTarget;
        if (!i) return !0;
        try {
            for (; i && i !== t;) i = i.parentNode
        } catch (n) {
            return !1
        }
        return i !== t
    }

    function st(t, e) {
        var i = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
            n = ze && i - ze;
        return n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? void Q(t) : (ze = i, void e(t))
    }

    function rt(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function at(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || "auto" === i) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            i = n ? n[e] : null
        }
        return "auto" === i ? null : i
    }

    function ht(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "", i && i.appendChild(n), n
    }

    function lt(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }

    function ut(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function ct(t) {
        var e = t.parentNode;
        e.lastChild !== t && e.appendChild(t)
    }

    function dt(t) {
        var e = t.parentNode;
        e.firstChild !== t && e.insertBefore(t, e.firstChild)
    }

    function _t(t, e) {
        if (void 0 !== t.classList) return t.classList.contains(e);
        var i = vt(t);
        return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
    }

    function pt(t, e) {
        if (void 0 !== t.classList)
            for (var i = l(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
        else if (!_t(t, e)) {
            var s = vt(t);
            ft(t, (s ? s + " " : "") + e)
        }
    }

    function mt(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : ft(t, h((" " + vt(t) + " ").replace(" " + e + " ", " ")))
    }

    function ft(t, e) {
        void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
    }

    function vt(t) {
        return void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }

    function gt(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && yt(t, e)
    }

    function yt(t, e) {
        var i = !1,
            n = "DXImageTransform.Microsoft.Alpha";
        try {
            i = t.filters.item(n)
        } catch (o) {
            if (1 === e) return
        }
        e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
    }

    function Lt(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
            if (t[i] in e) return t[i];
        return !1
    }

    function xt(t, e, i) {
        var n = e || new x(0, 0);
        t.style[Mi] = (Ye ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
    }

    function wt(t, e) {
        t._leaflet_pos = e, Je ? xt(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
    }

    function bt(t) {
        return t._leaflet_pos || new x(0, 0)
    }

    function Pt() {
        V(window, "dragstart", $)
    }

    function Tt() {
        q(window, "dragstart", $)
    }

    function Mt(t) {
        for (; t.tabIndex === -1;) t = t.parentNode;
        t.style && (Ct(), ki = t, Si = t.style.outline, t.style.outline = "none", V(window, "keydown", Ct))
    }

    function Ct() {
        ki && (ki.style.outline = Si, ki = void 0, Si = void 0, q(window, "keydown", Ct))
    }

    function zt(t, e) {
        return new Ii(t, e)
    }

    function Et(t, e) {
        if (!e || !t.length) return t.slice();
        var i = e * e;
        return t = It(t, i), t = Zt(t, i)
    }

    function kt(t, e, i) {
        return Math.sqrt(Rt(t, e, i, !0))
    }

    function St(t, e, i) {
        return Rt(t, e, i)
    }

    function Zt(t, e) {
        var i = t.length,
            n = typeof Uint8Array != void 0 + "" ? Uint8Array : Array,
            o = new n(i);
        o[0] = o[i - 1] = 1, Bt(t, o, e, 0, i - 1);
        var s, r = [];
        for (s = 0; s < i; s++) o[s] && r.push(t[s]);
        return r
    }

    function Bt(t, e, i, n, o) {
        var s, r, a, h = 0;
        for (r = n + 1; r <= o - 1; r++) a = Rt(t[r], t[n], t[o], !0), a > h && (s = r, h = a);
        h > i && (e[s] = 1, Bt(t, e, i, n, s), Bt(t, e, i, s, o))
    }

    function It(t, e) {
        for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) Ft(t[n], t[o]) > e && (i.push(t[n]), o = n);
        return o < s - 1 && i.push(t[s - 1]), i
    }

    function At(t, e, i, n, o) {
        var s, r, a, h = n ? Vi : Dt(t, i),
            l = Dt(e, i);
        for (Vi = l;;) {
            if (!(h | l)) return [t, e];
            if (h & l) return !1;
            s = h || l, r = Ot(t, e, s, i, o), a = Dt(r, i), s === h ? (t = r, h = a) : (e = r, l = a)
        }
    }

    function Ot(t, e, i, n, o) {
        var s, r, a = e.x - t.x,
            h = e.y - t.y,
            l = n.min,
            u = n.max;
        return 8 & i ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 4 & i ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 2 & i ? (s = u.x, r = t.y + h * (u.x - t.x) / a) : 1 & i && (s = l.x, r = t.y + h * (l.x - t.x) / a), new x(s, r, o)
    }

    function Dt(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
    }

    function Ft(t, e) {
        var i = e.x - t.x,
            n = e.y - t.y;
        return i * i + n * n
    }

    function Rt(t, e, i, n) {
        var o, s = e.x,
            r = e.y,
            a = i.x - s,
            h = i.y - r,
            l = a * a + h * h;
        return l > 0 && (o = ((t.x - s) * a + (t.y - r) * h) / l, o > 1 ? (s = i.x, r = i.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new x(s, r)
    }

    function jt(t) {
        return !ve(t[0]) || "object" != typeof t[0][0] && "undefined" != typeof t[0][0]
    }

    function Nt(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), jt(t)
    }

    function Ut(t, e, i) {
        var n, o, s, r, a, h, l, u, c, d = [1, 4, 2, 8];
        for (o = 0, l = t.length; o < l; o++) t[o]._code = Dt(t[o], e);
        for (r = 0; r < 4; r++) {
            for (u = d[r], n = [], o = 0, l = t.length, s = l - 1; o < l; s = o++) a = t[o], h = t[s], a._code & u ? h._code & u || (c = Ot(h, a, u, e, i), c._code = Dt(c, e), n.push(c)) : (h._code & u && (c = Ot(h, a, u, e, i), c._code = Dt(c, e), n.push(c)), n.push(a));
            t = n
        }
        return t
    }

    function Ht(t) {
        return new dn(t)
    }

    function Wt(t, e) {
        return new mn(t, e)
    }

    function Vt(t, e) {
        return new vn(t, e)
    }

    function qt(t, e, i) {
        return new gn(t, e, i)
    }

    function Gt(t, e) {
        return new yn(t, e)
    }

    function Yt(t, e) {
        return new Ln(t, e)
    }

    function Kt(t, e) {
        var i, n, o, s, r = "Feature" === t.type ? t.geometry : t,
            a = r ? r.coordinates : null,
            h = [],
            l = e && e.pointToLayer,
            u = e && e.coordsToLatLng || Xt;
        if (!a && !r) return null;
        switch (r.type) {
            case "Point":
                return i = u(a), l ? l(t, i) : new mn(i);
            case "MultiPoint":
                for (o = 0, s = a.length; o < s; o++) i = u(a[o]), h.push(l ? l(t, i) : new mn(i));
                return new un(h);
            case "LineString":
            case "MultiLineString":
                return n = Jt(a, "LineString" === r.type ? 0 : 1, u), new yn(n, e);
            case "Polygon":
            case "MultiPolygon":
                return n = Jt(a, "Polygon" === r.type ? 1 : 2, u), new Ln(n, e);
            case "GeometryCollection":
                for (o = 0, s = r.geometries.length; o < s; o++) {
                    var c = Kt({
                        geometry: r.geometries[o],
                        type: "Feature",
                        properties: t.properties
                    }, e);
                    c && h.push(c)
                }
                return new un(h);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    }

    function Xt(t) {
        return new C(t[1], t[0], t[2])
    }

    function Jt(t, e, i) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++) n = e ? Jt(t[s], e - 1, i) : (i || Xt)(t[s]), o.push(n);
        return o
    }

    function $t(t, e) {
        return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [a(t.lng, e), a(t.lat, e), a(t.alt, e)] : [a(t.lng, e), a(t.lat, e)]
    }

    function Qt(t, e, i, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++) o.push(e ? Qt(t[s], e - 1, i, n) : $t(t[s], n));
        return !e && i && o.push(o[0]), o
    }

    function te(t, i) {
        return t.feature ? e({}, t.feature, {
            geometry: i
        }) : ee(i)
    }

    function ee(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }

    function ie(t, e) {
        return new xn(t, e)
    }

    function ne(t, e, i) {
        return new Mn(t, e, i)
    }

    function oe(t) {
        return new Zn(t)
    }

    function se(t) {
        return new Bn(t)
    }

    function re(t, e) {
        return new In(t, e)
    }

    function ae(t, e) {
        return new An(t, e)
    }

    function he(t) {
        return ai ? new Dn(t) : null
    }

    function le(t) {
        return hi || li ? new Nn(t) : null
    }

    function ue(t, e) {
        return new Un(t, e)
    }

    function ce() {
        return window.L = Xn, this
    }
    var de = "1.2.0",
        _e = Object.freeze;
    Object.freeze = function(t) {
        return t
    };
    var pe = Object.create || function() {
            function t() {}
            return function(e) {
                return t.prototype = e, new t
            }
        }(),
        me = 0,
        fe = /\{ *([\w_\-]+) *\}/g,
        ve = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        ge = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        ye = 0,
        Le = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
        xe = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function(t) {
            window.clearTimeout(t)
        },
        we = (Object.freeze || Object)({
            freeze: _e,
            extend: e,
            create: pe,
            bind: i,
            lastId: me,
            stamp: n,
            throttle: o,
            wrapNum: s,
            falseFn: r,
            formatNum: a,
            trim: h,
            splitWords: l,
            setOptions: u,
            getParamString: c,
            template: d,
            isArray: ve,
            indexOf: _,
            emptyImageUrl: ge,
            requestFn: Le,
            cancelFn: xe,
            requestAnimFrame: f,
            cancelAnimFrame: v
        });
    g.extend = function(t) {
        var i = function() {
                this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
            },
            n = i.__super__ = this.prototype,
            o = pe(n);
        o.constructor = i, i.prototype = o;
        for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (i[s] = this[s]);
        return t.statics && (e(i, t.statics), delete t.statics), t.includes && (y(t.includes), e.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = e(pe(o.options), t.options)), e(o, t), o._initHooks = [], o.callInitHooks = function() {
            if (!this._initHooksCalled) {
                n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, e = o._initHooks.length; t < e; t++) o._initHooks[t].call(this)
            }
        }, i
    }, g.include = function(t) {
        return e(this.prototype, t), this
    }, g.mergeOptions = function(t) {
        return e(this.prototype.options, t), this
    }, g.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1),
            i = "function" == typeof t ? t : function() {
                this[t].apply(this, e)
            };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
    };
    var be = {
        on: function(t, e, i) {
            if ("object" == typeof t)
                for (var n in t) this._on(n, t[n], e);
            else {
                t = l(t);
                for (var o = 0, s = t.length; o < s; o++) this._on(t[o], e, i)
            }
            return this
        },
        off: function(t, e, i) {
            if (t)
                if ("object" == typeof t)
                    for (var n in t) this._off(n, t[n], e);
                else {
                    t = l(t);
                    for (var o = 0, s = t.length; o < s; o++) this._off(t[o], e, i)
                }
            else delete this._events;
            return this
        },
        _on: function(t, e, i) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (n = [], this._events[t] = n), i === this && (i = void 0);
            for (var o = {
                    fn: e,
                    ctx: i
                }, s = n, r = 0, a = s.length; r < a; r++)
                if (s[r].fn === e && s[r].ctx === i) return;
            s.push(o)
        },
        _off: function(t, e, i) {
            var n, o, s;
            if (this._events && (n = this._events[t])) {
                if (!e) {
                    for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
                    return void delete this._events[t]
                }
                if (i === this && (i = void 0), n)
                    for (o = 0, s = n.length; o < s; o++) {
                        var a = n[o];
                        if (a.ctx === i && a.fn === e) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                    }
            }
        },
        fire: function(t, i, n) {
            if (!this.listens(t, n)) return this;
            var o = e({}, i, {
                type: t,
                target: this
            });
            if (this._events) {
                var s = this._events[t];
                if (s) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var r = 0, a = s.length; r < a; r++) {
                        var h = s[r];
                        h.fn.call(h.ctx || this, o)
                    }
                    this._firingCount--
                }
            }
            return n && this._propagateEvent(o), this
        },
        listens: function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) return !0;
            if (e)
                for (var n in this._eventParents)
                    if (this._eventParents[n].listens(t, e)) return !0;
            return !1
        },
        once: function(t, e, n) {
            if ("object" == typeof t) {
                for (var o in t) this.once(o, t[o], e);
                return this
            }
            var s = i(function() {
                this.off(t, e, n).off(t, s, n)
            }, this);
            return this.on(t, e, n).on(t, s, n)
        },
        addEventParent: function(t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this
        },
        removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[n(t)], this
        },
        _propagateEvent: function(t) {
            for (var i in this._eventParents) this._eventParents[i].fire(t.type, e({
                layer: t.target
            }, t), !0)
        }
    };
    be.addEventListener = be.on, be.removeEventListener = be.clearAllEventListeners = be.off, be.addOneTimeEventListener = be.once, be.fireEvent = be.fire, be.hasEventListeners = be.listens;
    var Pe = g.extend(be);
    x.prototype = {
        clone: function() {
            return new x(this.x, this.y)
        },
        add: function(t) {
            return this.clone()._add(w(t))
        },
        _add: function(t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function(t) {
            return this.clone()._subtract(w(t))
        },
        _subtract: function(t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x /= t, this.y /= t, this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x *= t, this.y *= t, this
        },
        scaleBy: function(t) {
            return new x(this.x * t.x, this.y * t.y)
        },
        unscaleBy: function(t) {
            return new x(this.x / t.x, this.y / t.y)
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.clone()._ceil()
        },
        _ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        distanceTo: function(t) {
            t = w(t);
            var e = t.x - this.x,
                i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
        },
        equals: function(t) {
            return t = w(t), t.x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = w(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + a(this.x) + ", " + a(this.y) + ")"
        }
    }, b.prototype = {
        extend: function(t) {
            return t = w(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        },
        getCenter: function(t) {
            return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function() {
            return new x(this.min.x, this.max.y)
        },
        getTopRight: function() {
            return new x(this.max.x, this.min.y)
        },
        getTopLeft: function() {
            return this.min
        },
        getBottomRight: function() {
            return this.max
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var e, i;
            return t = "number" == typeof t[0] || t instanceof x ? w(t) : P(t), t instanceof b ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        },
        intersects: function(t) {
            t = P(t);
            var e = this.min,
                i = this.max,
                n = t.min,
                o = t.max,
                s = o.x >= e.x && n.x <= i.x,
                r = o.y >= e.y && n.y <= i.y;
            return s && r
        },
        overlaps: function(t) {
            t = P(t);
            var e = this.min,
                i = this.max,
                n = t.min,
                o = t.max,
                s = o.x > e.x && n.x < i.x,
                r = o.y > e.y && n.y < i.y;
            return s && r
        },
        isValid: function() {
            return !(!this.min || !this.max)
        }
    }, T.prototype = {
        extend: function(t) {
            var e, i, n = this._southWest,
                o = this._northEast;
            if (t instanceof C) e = t, i = t;
            else {
                if (!(t instanceof T)) return t ? this.extend(z(t) || M(t)) : this;
                if (e = t._southWest, i = t._northEast, !e || !i) return this
            }
            return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new C(e.lat, e.lng), this._northEast = new C(i.lat, i.lng)), this
        },
        pad: function(t) {
            var e = this._southWest,
                i = this._northEast,
                n = Math.abs(e.lat - i.lat) * t,
                o = Math.abs(e.lng - i.lng) * t;
            return new T(new C(e.lat - n, e.lng - o), new C(i.lat + n, i.lng + o))
        },
        getCenter: function() {
            return new C((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new C(this.getNorth(), this.getWest())
        },
        getSouthEast: function() {
            return new C(this.getSouth(), this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = "number" == typeof t[0] || t instanceof C || "lat" in t ? z(t) : M(t);
            var e, i, n = this._southWest,
                o = this._northEast;
            return t instanceof T ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
        },
        intersects: function(t) {
            t = M(t);
            var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat >= e.lat && n.lat <= i.lat,
                r = o.lng >= e.lng && n.lng <= i.lng;
            return s && r
        },
        overlaps: function(t) {
            t = M(t);
            var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat > e.lat && n.lat < i.lat,
                r = o.lng > e.lng && n.lng < i.lng;
            return s && r
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t, e) {
            return !!t && (t = M(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
        },
        isValid: function() {
            return !(!this._southWest || !this._northEast)
        }
    }, C.prototype = {
        equals: function(t, e) {
            if (!t) return !1;
            t = z(t);
            var i = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
            return i <= (void 0 === e ? 1e-9 : e)
        },
        toString: function(t) {
            return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")"
        },
        distanceTo: function(t) {
            return Me.distance(this, z(t))
        },
        wrap: function() {
            return Me.wrapLatLng(this)
        },
        toBounds: function(t) {
            var e = 180 * t / 40075017,
                i = e / Math.cos(Math.PI / 180 * this.lat);
            return M([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
        },
        clone: function() {
            return new C(this.lat, this.lng, this.alt)
        }
    };
    var Te = {
            latLngToPoint: function(t, e) {
                var i = this.projection.project(t),
                    n = this.scale(e);
                return this.transformation._transform(i, n)
            },
            pointToLatLng: function(t, e) {
                var i = this.scale(e),
                    n = this.transformation.untransform(t, i);
                return this.projection.unproject(n)
            },
            project: function(t) {
                return this.projection.project(t)
            },
            unproject: function(t) {
                return this.projection.unproject(t)
            },
            scale: function(t) {
                return 256 * Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t / 256) / Math.LN2
            },
            getProjectedBounds: function(t) {
                if (this.infinite) return null;
                var e = this.projection.bounds,
                    i = this.scale(t),
                    n = this.transformation.transform(e.min, i),
                    o = this.transformation.transform(e.max, i);
                return new b(n, o)
            },
            infinite: !1,
            wrapLatLng: function(t) {
                var e = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng,
                    i = this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat,
                    n = t.alt;
                return new C(i, e, n)
            },
            wrapLatLngBounds: function(t) {
                var e = t.getCenter(),
                    i = this.wrapLatLng(e),
                    n = e.lat - i.lat,
                    o = e.lng - i.lng;
                if (0 === n && 0 === o) return t;
                var s = t.getSouthWest(),
                    r = t.getNorthEast(),
                    a = new C(s.lat - n, s.lng - o),
                    h = new C(r.lat - n, r.lng - o);
                return new T(a, h)
            }
        },
        Me = e({}, Te, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function(t, e) {
                var i = Math.PI / 180,
                    n = t.lat * i,
                    o = e.lat * i,
                    s = Math.sin(n) * Math.sin(o) + Math.cos(n) * Math.cos(o) * Math.cos((e.lng - t.lng) * i);
                return this.R * Math.acos(Math.min(s, 1))
            }
        }),
        Ce = {
            R: 6378137,
            MAX_LATITUDE: 85.0511287798,
            project: function(t) {
                var e = Math.PI / 180,
                    i = this.MAX_LATITUDE,
                    n = Math.max(Math.min(i, t.lat), -i),
                    o = Math.sin(n * e);
                return new x(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
            },
            unproject: function(t) {
                var e = 180 / Math.PI;
                return new C((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
            },
            bounds: function() {
                var t = 6378137 * Math.PI;
                return new b([-t, -t], [t, t])
            }()
        };
    E.prototype = {
        transform: function(t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function(t, e) {
            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
        },
        untransform: function(t, e) {
            return e = e || 1, new x((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    };
    var ze, Ee, ke, Se, Ze = e({}, Me, {
            code: "EPSG:3857",
            projection: Ce,
            transformation: function() {
                var t = .5 / (Math.PI * Ce.R);
                return k(t, .5, -t, .5)
            }()
        }),
        Be = e({}, Ze, {
            code: "EPSG:900913"
        }),
        Ie = document.documentElement.style,
        Ae = "ActiveXObject" in window,
        Oe = Ae && !document.addEventListener,
        De = "msLaunchUri" in navigator && !("documentMode" in document),
        Fe = B("webkit"),
        Re = B("android"),
        je = B("android 2") || B("android 3"),
        Ne = !!window.opera,
        Ue = B("chrome"),
        He = B("gecko") && !Fe && !Ne && !Ae,
        We = !Ue && B("safari"),
        Ve = B("phantom"),
        qe = "OTransition" in Ie,
        Ge = 0 === navigator.platform.indexOf("Win"),
        Ye = Ae && "transition" in Ie,
        Ke = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !je,
        Xe = "MozPerspective" in Ie,
        Je = !window.L_DISABLE_3D && (Ye || Ke || Xe) && !qe && !Ve,
        $e = "undefined" != typeof orientation || B("mobile"),
        Qe = $e && Fe,
        ti = $e && Ke,
        ei = !window.PointerEvent && window.MSPointerEvent,
        ii = !(!window.PointerEvent && !ei),
        ni = !window.L_NO_TOUCH && (ii || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        oi = $e && Ne,
        si = $e && He,
        ri = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
        ai = function() {
            return !!document.createElement("canvas").getContext
        }(),
        hi = !(!document.createElementNS || !S("svg").createSVGRect),
        li = !hi && function() {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var e = t.firstChild;
                return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
            } catch (i) {
                return !1
            }
        }(),
        ui = (Object.freeze || Object)({
            ie: Ae,
            ielt9: Oe,
            edge: De,
            webkit: Fe,
            android: Re,
            android23: je,
            opera: Ne,
            chrome: Ue,
            gecko: He,
            safari: We,
            phantom: Ve,
            opera12: qe,
            win: Ge,
            ie3d: Ye,
            webkit3d: Ke,
            gecko3d: Xe,
            any3d: Je,
            mobile: $e,
            mobileWebkit: Qe,
            mobileWebkit3d: ti,
            msPointer: ei,
            pointer: ii,
            touch: ni,
            mobileOpera: oi,
            mobileGecko: si,
            retina: ri,
            canvas: ai,
            svg: hi,
            vml: li
        }),
        ci = ei ? "MSPointerDown" : "pointerdown",
        di = ei ? "MSPointerMove" : "pointermove",
        _i = ei ? "MSPointerUp" : "pointerup",
        pi = ei ? "MSPointerCancel" : "pointercancel",
        mi = ["INPUT", "SELECT", "OPTION"],
        fi = {},
        vi = !1,
        gi = 0,
        yi = ei ? "MSPointerDown" : ii ? "pointerdown" : "touchstart",
        Li = ei ? "MSPointerUp" : ii ? "pointerup" : "touchend",
        xi = "_leaflet_",
        wi = "_leaflet_events",
        bi = Ge && Ue ? 2 * window.devicePixelRatio : He ? window.devicePixelRatio : 1,
        Pi = {},
        Ti = (Object.freeze || Object)({
            on: V,
            off: q,
            stopPropagation: K,
            disableScrollPropagation: X,
            disableClickPropagation: J,
            preventDefault: $,
            stop: Q,
            getMousePosition: tt,
            getWheelDelta: et,
            fakeStop: it,
            skipped: nt,
            isExternalTarget: ot,
            addListener: V,
            removeListener: q
        }),
        Mi = Lt(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
        Ci = Lt(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        zi = "webkitTransition" === Ci || "OTransition" === Ci ? Ci + "End" : "transitionend";
    if ("onselectstart" in document) Ee = function() {
        V(window, "selectstart", $)
    }, ke = function() {
        q(window, "selectstart", $)
    };
    else {
        var Ei = Lt(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        Ee = function() {
            if (Ei) {
                var t = document.documentElement.style;
                Se = t[Ei], t[Ei] = "none"
            }
        }, ke = function() {
            Ei && (document.documentElement.style[Ei] = Se, Se = void 0)
        }
    }
    var ki, Si, Zi = (Object.freeze || Object)({
            TRANSFORM: Mi,
            TRANSITION: Ci,
            TRANSITION_END: zi,
            get: rt,
            getStyle: at,
            create: ht,
            remove: lt,
            empty: ut,
            toFront: ct,
            toBack: dt,
            hasClass: _t,
            addClass: pt,
            removeClass: mt,
            setClass: ft,
            getClass: vt,
            setOpacity: gt,
            testProp: Lt,
            setTransform: xt,
            setPosition: wt,
            getPosition: bt,
            disableTextSelection: Ee,
            enableTextSelection: ke,
            disableImageDrag: Pt,
            enableImageDrag: Tt,
            preventOutline: Mt,
            restoreOutline: Ct
        }),
        Bi = Pe.extend({
            run: function(t, e, i, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = bt(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            },
            stop: function() {
                this._inProgress && (this._step(!0), this._complete())
            },
            _animate: function() {
                this._animId = f(this._animate, this), this._step()
            },
            _step: function(t) {
                var e = +new Date - this._startTime,
                    i = 1e3 * this._duration;
                e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
            },
            _runFrame: function(t, e) {
                var i = this._startPos.add(this._offset.multiplyBy(t));
                e && i._round(), wt(this._el, i), this.fire("step")
            },
            _complete: function() {
                v(this._animId), this._inProgress = !1, this.fire("end")
            },
            _easeOut: function(t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }),
        Ii = Pe.extend({
            options: {
                crs: Ze,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
            },
            initialize: function(t, e) {
                e = u(this, e), this._initContainer(t), this._initLayout(), this._onResize = i(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(z(e.center), e.zoom, {
                    reset: !0
                }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = Ci && Je && !oi && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), V(this._proxy, zi, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
            },
            setView: function(t, i, n) {
                if (i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(z(t), i, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && n !== !0) {
                    void 0 !== n.animate && (n.zoom = e({
                        animate: n.animate
                    }, n.zoom), n.pan = e({
                        animate: n.animate,
                        duration: n.duration
                    }, n.pan));
                    var o = this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom) : this._tryAnimatedPan(t, n.pan);
                    if (o) return clearTimeout(this._sizeTimer), this
                }
                return this._resetView(t, i), this
            },
            setZoom: function(t, e) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: e
                }) : (this._zoom = t, this)
            },
            zoomIn: function(t, e) {
                return t = t || (Je ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
            },
            zoomOut: function(t, e) {
                return t = t || (Je ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
            },
            setZoomAround: function(t, e, i) {
                var n = this.getZoomScale(e),
                    o = this.getSize().divideBy(2),
                    s = t instanceof x ? t : this.latLngToContainerPoint(t),
                    r = s.subtract(o).multiplyBy(1 - 1 / n),
                    a = this.containerPointToLatLng(o.add(r));
                return this.setView(a, e, {
                    zoom: i
                })
            },
            _getBoundsCenterZoom: function(t, e) {
                e = e || {}, t = t.getBounds ? t.getBounds() : M(t);
                var i = w(e.paddingTopLeft || e.padding || [0, 0]),
                    n = w(e.paddingBottomRight || e.padding || [0, 0]),
                    o = this.getBoundsZoom(t, !1, i.add(n));
                if (o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o, o === 1 / 0) return {
                    center: t.getCenter(),
                    zoom: o
                };
                var s = n.subtract(i).divideBy(2),
                    r = this.project(t.getSouthWest(), o),
                    a = this.project(t.getNorthEast(), o),
                    h = this.unproject(r.add(a).divideBy(2).add(s), o);
                return {
                    center: h,
                    zoom: o
                }
            },
            fitBounds: function(t, e) {
                if (t = M(t), !t.isValid()) throw new Error("Bounds are not valid.");
                var i = this._getBoundsCenterZoom(t, e);
                return this.setView(i.center, i.zoom, e)
            },
            fitWorld: function(t) {
                return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t)
            },
            panTo: function(t, e) {
                return this.setView(t, this._zoom, {
                    pan: e
                })
            },
            panBy: function(t, e) {
                if (t = w(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
                if (e.animate !== !0 && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
                    this;
                if (this._panAnim || (this._panAnim = new Bi, this._panAnim.on({
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd
                    }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
                    pt(this._mapPane, "leaflet-pan-anim");
                    var i = this._getMapPanePos().subtract(t).round();
                    this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
            },
            flyTo: function(t, e, i) {
                function n(t) {
                    var e = t ? -1 : 1,
                        i = t ? v : m,
                        n = v * v - m * m + e * L * L * g * g,
                        o = 2 * i * L * g,
                        s = n / o,
                        r = Math.sqrt(s * s + 1) - s,
                        a = r < 1e-9 ? -18 : Math.log(r);
                    return a
                }

                function o(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function s(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2
                }

                function r(t) {
                    return o(t) / s(t)
                }

                function a(t) {
                    return m * (s(x) / s(x + y * t))
                }

                function h(t) {
                    return m * (s(x) * r(x + y * t) - o(x)) / L
                }

                function l(t) {
                    return 1 - Math.pow(1 - t, 1.5)
                }

                function u() {
                    var i = (Date.now() - w) / P,
                        n = l(i) * b;
                    i <= 1 ? (this._flyToFrame = f(u, this), this._move(this.unproject(c.add(d.subtract(c).multiplyBy(h(n) / g)), p), this.getScaleZoom(m / a(n), p), {
                        flyTo: !0
                    })) : this._move(t, e)._moveEnd(!0)
                }
                if (i = i || {}, i.animate === !1 || !Je) return this.setView(t, e, i);
                this._stop();
                var c = this.project(this.getCenter()),
                    d = this.project(t),
                    _ = this.getSize(),
                    p = this._zoom;
                t = z(t), e = void 0 === e ? p : e;
                var m = Math.max(_.x, _.y),
                    v = m * this.getZoomScale(p, e),
                    g = d.distanceTo(c) || 1,
                    y = 1.42,
                    L = y * y,
                    x = n(0),
                    w = Date.now(),
                    b = (n(1) - x) / y,
                    P = i.duration ? 1e3 * i.duration : 1e3 * b * .8;
                return this._moveStart(!0), u.call(this), this
            },
            flyToBounds: function(t, e) {
                var i = this._getBoundsCenterZoom(t, e);
                return this.flyTo(i.center, i.zoom, e)
            },
            setMaxBounds: function(t) {
                return t = M(t), t.isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function(t) {
                return this.options.minZoom = t, this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) : this
            },
            setMaxZoom: function(t) {
                return this.options.maxZoom = t, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(t) : this
            },
            panInsideBounds: function(t, e) {
                this._enforcingBounds = !0;
                var i = this.getCenter(),
                    n = this._limitCenter(i, this._zoom, M(t));
                return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this
            },
            invalidateSize: function(t) {
                if (!this._loaded) return this;
                t = e({
                    animate: !1,
                    pan: !0
                }, t === !0 ? {
                    animate: !0
                } : t);
                var n = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var o = this.getSize(),
                    s = n.divideBy(2).round(),
                    r = o.divideBy(2).round(),
                    a = s.subtract(r);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(i(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: n,
                    newSize: o
                })) : this
            },
            stop: function() {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
            },
            locate: function(t) {
                if (t = this._locateOptions = e({
                        timeout: 1e4,
                        watch: !1
                    }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var n = i(this._handleGeolocationResponse, this),
                    o = i(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this
            },
            stopLocate: function() {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function(t) {
                var e = t.code,
                    i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: e,
                    message: "Geolocation error: " + i + "."
                })
            },
            _handleGeolocationResponse: function(t) {
                var e = t.coords.latitude,
                    i = t.coords.longitude,
                    n = new C(e, i),
                    o = n.toBounds(t.coords.accuracy),
                    s = this._locateOptions;
                if (s.setView) {
                    var r = this.getBoundsZoom(o);
                    this.setView(n, s.maxZoom ? Math.min(r, s.maxZoom) : r)
                }
                var a = {
                    latlng: n,
                    bounds: o,
                    timestamp: t.timestamp
                };
                for (var h in t.coords) "number" == typeof t.coords[h] && (a[h] = t.coords[h]);
                this.fire("locationfound", a)
            },
            addHandler: function(t, e) {
                if (!e) return this;
                var i = this[t] = new e(this);
                return this._handlers.push(i), this.options[t] && i.enable(), this
            },
            remove: function() {
                if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                try {
                    delete this._container._leaflet_id, delete this._containerId
                } catch (t) {
                    this._container._leaflet_id = void 0, this._containerId = void 0
                }
                lt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload");
                var e;
                for (e in this._layers) this._layers[e].remove();
                for (e in this._panes) lt(this._panes[e]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
            },
            createPane: function(t, e) {
                var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
                    n = ht("div", i, e || this._mapPane);
                return t && (this._panes[t] = n), n
            },
            getCenter: function() {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function() {
                return this._zoom
            },
            getBounds: function() {
                var t = this.getPixelBounds(),
                    e = this.unproject(t.getBottomLeft()),
                    i = this.unproject(t.getTopRight());
                return new T(e, i)
            },
            getMinZoom: function() {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function() {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function(t, e, i) {
                t = M(t), i = w(i || [0, 0]);
                var n = this.getZoom() || 0,
                    o = this.getMinZoom(),
                    s = this.getMaxZoom(),
                    r = t.getNorthWest(),
                    a = t.getSouthEast(),
                    h = this.getSize().subtract(i),
                    l = P(this.project(a, n), this.project(r, n)).getSize(),
                    u = Je ? this.options.zoomSnap : 1,
                    c = h.x / l.x,
                    d = h.y / l.y,
                    _ = e ? Math.max(c, d) : Math.min(c, d);
                return n = this.getScaleZoom(_, n), u && (n = Math.round(n / (u / 100)) * (u / 100), n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u), Math.max(o, Math.min(s, n))
            },
            getSize: function() {
                return this._size && !this._sizeChanged || (this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function(t, e) {
                var i = this._getTopLeftPoint(t, e);
                return new b(i, i.add(this.getSize()))
            },
            getPixelOrigin: function() {
                return this._checkIfLoaded(), this._pixelOrigin
            },
            getPixelWorldBounds: function(t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function(t) {
                return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function() {
                return this._panes
            },
            getContainer: function() {
                return this._container
            },
            getZoomScale: function(t, e) {
                var i = this.options.crs;
                return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e)
            },
            getScaleZoom: function(t, e) {
                var i = this.options.crs;
                e = void 0 === e ? this._zoom : e;
                var n = i.zoom(t * i.scale(e));
                return isNaN(n) ? 1 / 0 : n
            },
            project: function(t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(z(t), e)
            },
            unproject: function(t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(w(t), e)
            },
            layerPointToLatLng: function(t) {
                var e = w(t).add(this.getPixelOrigin());
                return this.unproject(e)
            },
            latLngToLayerPoint: function(t) {
                var e = this.project(z(t))._round();
                return e._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function(t) {
                return this.options.crs.wrapLatLng(z(t))
            },
            wrapLatLngBounds: function(t) {
                return this.options.crs.wrapLatLngBounds(M(t))
            },
            distance: function(t, e) {
                return this.options.crs.distance(z(t), z(e))
            },
            containerPointToLayerPoint: function(t) {
                return w(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function(t) {
                return w(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function(t) {
                var e = this.containerPointToLayerPoint(w(t));
                return this.layerPointToLatLng(e)
            },
            latLngToContainerPoint: function(t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(z(t)))
            },
            mouseEventToContainerPoint: function(t) {
                return tt(t, this._container)
            },
            mouseEventToLayerPoint: function(t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function(t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function(t) {
                var e = this._container = rt(t);
                if (!e) throw new Error("Map container not found.");
                if (e._leaflet_id) throw new Error("Map container is already initialized.");
                V(e, "scroll", this._onScroll, this), this._containerId = n(e)
            },
            _initLayout: function() {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && Je, pt(t, "leaflet-container" + (ni ? " leaflet-touch" : "") + (ri ? " leaflet-retina" : "") + (Oe ? " leaflet-oldie" : "") + (We ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var e = at(t, "position");
                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function() {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), wt(this._mapPane, new x(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (pt(t.markerPane, "leaflet-zoom-hide"), pt(t.shadowPane, "leaflet-zoom-hide"))
            },
            _resetView: function(t, e) {
                wt(this._mapPane, new x(0, 0));
                var i = !this._loaded;
                this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                var n = this._zoom !== e;
                this._moveStart(n)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load")
            },
            _moveStart: function(t) {
                return t && this.fire("zoomstart"), this.fire("movestart")
            },
            _move: function(t, e, i) {
                void 0 === e && (e = this._zoom);
                var n = this._zoom !== e;
                return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)
            },
            _moveEnd: function(t) {
                return t && this.fire("zoomend"), this.fire("moveend")
            },
            _stop: function() {
                return v(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
            },
            _rawPanBy: function(t) {
                wt(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function() {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function() {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function() {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function(t) {
                this._targets = {}, this._targets[n(this._container)] = this;
                var e = t ? q : V;
                e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), Je && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
            },
            _onResize: function() {
                v(this._resizeRequest), this._resizeRequest = f(function() {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }, this)
            },
            _onScroll: function() {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
            },
            _onMoveEnd: function() {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function(t, e) {
                for (var i, o = [], s = "mouseout" === e || "mouseover" === e, r = t.target || t.srcElement, a = !1; r;) {
                    if (i = this._targets[n(r)], i && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                        a = !0;
                        break
                    }
                    if (i && i.listens(e, !0)) {
                        if (s && !ot(r, t)) break;
                        if (o.push(i), s) break
                    }
                    if (r === this._container) break;
                    r = r.parentNode
                }
                return o.length || a || s || !ot(r, t) || (o = [this]), o
            },
            _handleDOMEvent: function(t) {
                if (this._loaded && !nt(t)) {
                    var e = t.type;
                    "mousedown" !== e && "keypress" !== e || Mt(t.target || t.srcElement), this._fireDOMEvent(t, e)
                }
            },
            _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
            _fireDOMEvent: function(t, i, n) {
                if ("click" === t.type) {
                    var o = e({}, t);
                    o.type = "preclick", this._fireDOMEvent(o, o.type, n)
                }
                if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, i)), n.length)) {
                    var s = n[0];
                    "contextmenu" === i && s.listens(i, !0) && $(t);
                    var r = {
                        originalEvent: t
                    };
                    if ("keypress" !== t.type) {
                        var a = s.options && "icon" in s.options;
                        r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)
                    }
                    for (var h = 0; h < n.length; h++)
                        if (n[h].fire(i, r, !0), r.originalEvent._stopped || n[h].options.bubblingMouseEvents === !1 && _(this._mouseEvents, i) !== -1) return
                }
            },
            _draggableMoved: function(t) {
                return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function() {
                for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
            },
            whenReady: function(t, e) {
                return this._loaded ? t.call(e || this, {
                    target: this
                }) : this.on("load", t, e), this
            },
            _getMapPanePos: function() {
                return bt(this._mapPane) || new x(0, 0)
            },
            _moved: function() {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function(t, e) {
                var i = t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
                return i.subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function(t, e) {
                var i = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function(t, e, i) {
                var n = this._getNewPixelOrigin(i, e);
                return this.project(t, e)._subtract(n)
            },
            _latLngBoundsToNewLayerBounds: function(t, e, i) {
                var n = this._getNewPixelOrigin(i, e);
                return P([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
            },
            _getCenterLayerPoint: function() {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function(t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function(t, e, i) {
                if (!i) return t;
                var n = this.project(t, e),
                    o = this.getSize().divideBy(2),
                    s = new b(n.subtract(o), n.add(o)),
                    r = this._getBoundsOffset(s, i, e);
                return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), e)
            },
            _limitOffset: function(t, e) {
                if (!e) return t;
                var i = this.getPixelBounds(),
                    n = new b(i.min.add(t), i.max.add(t));
                return t.add(this._getBoundsOffset(n, e))
            },
            _getBoundsOffset: function(t, e, i) {
                var n = P(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                    o = n.min.subtract(t.min),
                    s = n.max.subtract(t.max),
                    r = this._rebound(o.x, -s.x),
                    a = this._rebound(o.y, -s.y);
                return new x(r, a)
            },
            _rebound: function(t, e) {
                return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
            },
            _limitZoom: function(t) {
                var e = this.getMinZoom(),
                    i = this.getMaxZoom(),
                    n = Je ? this.options.zoomSnap : 1;
                return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t))
            },
            _onPanTransitionStep: function() {
                this.fire("move")
            },
            _onPanTransitionEnd: function() {
                mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function(t, e) {
                var i = this._getCenterOffset(t)._floor();
                return !((e && e.animate) !== !0 && !this.getSize().contains(i)) && (this.panBy(i, e), !0)
            },
            _createAnimProxy: function() {
                var t = this._proxy = ht("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", function(t) {
                    var e = Mi,
                        i = this._proxy.style[e];
                    xt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                }, this), this.on("load moveend", function() {
                    var t = this.getCenter(),
                        e = this.getZoom();
                    xt(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
                }, this), this._on("unload", this._destroyAnimProxy, this)
            },
            _destroyAnimProxy: function() {
                lt(this._proxy), delete this._proxy
            },
            _catchTransitionEnd: function(t) {
                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function() {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function(t, e, i) {
                if (this._animatingZoom) return !0;
                if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var n = this.getZoomScale(e),
                    o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                return !(i.animate !== !0 && !this.getSize().contains(o)) && (f(function() {
                    this._moveStart(!0)._animateZoom(t, e, !0)
                }, this), !0)
            },
            _animateZoom: function(t, e, n, o) {
                n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, pt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                    center: t,
                    zoom: e,
                    noUpdate: o
                }), setTimeout(i(this._onZoomTransitionEnd, this), 250)
            },
            _onZoomTransitionEnd: function() {
                this._animatingZoom && (mt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function() {
                    this._moveEnd(!0)
                }, this))
            }
        }),
        Ai = g.extend({
            options: {
                position: "topright"
            },
            initialize: function(t) {
                u(this, t)
            },
            getPosition: function() {
                return this.options.position
            },
            setPosition: function(t) {
                var e = this._map;
                return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
            },
            getContainer: function() {
                return this._container
            },
            addTo: function(t) {
                this.remove(), this._map = t;
                var e = this._container = this.onAdd(t),
                    i = this.getPosition(),
                    n = t._controlCorners[i];
                return pt(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
            },
            remove: function() {
                return this._map ? (lt(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
            },
            _refocusOnMap: function(t) {
                this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
            }
        }),
        Oi = function(t) {
            return new Ai(t)
        };
    Ii.include({
        addControl: function(t) {
            return t.addTo(this), this
        },
        removeControl: function(t) {
            return t.remove(), this
        },
        _initControlPos: function() {
            function t(t, o) {
                var s = i + t + " " + i + o;
                e[t + o] = ht("div", s, n)
            }
            var e = this._controlCorners = {},
                i = "leaflet-",
                n = this._controlContainer = ht("div", i + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        },
        _clearControlPos: function() {
            for (var t in this._controlCorners) lt(this._controlCorners[t]);
            lt(this._controlContainer), delete this._controlCorners, delete this._controlContainer
        }
    });
    var Di = Ai.extend({
            options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function(t, e, i, n) {
                    return i < n ? -1 : n < i ? 1 : 0
                }
            },
            initialize: function(t, e, i) {
                u(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
                for (var n in t) this._addLayer(t[n], n);
                for (n in e) this._addLayer(e[n], n, !0)
            },
            onAdd: function(t) {
                this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                return this._container
            },
            addTo: function(t) {
                return Ai.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
            },
            onRemove: function() {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
            },
            addBaseLayer: function(t, e) {
                return this._addLayer(t, e), this._map ? this._update() : this
            },
            addOverlay: function(t, e) {
                return this._addLayer(t, e, !0), this._map ? this._update() : this
            },
            removeLayer: function(t) {
                t.off("add remove", this._onLayerChange, this);
                var e = this._getLayer(n(t));
                return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
            },
            expand: function() {
                pt(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return t < this._form.clientHeight ? (pt(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : mt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
            },
            collapse: function() {
                return mt(this._container, "leaflet-control-layers-expanded"), this
            },
            _initLayout: function() {
                var t = "leaflet-control-layers",
                    e = this._container = ht("div", t),
                    i = this.options.collapsed;
                e.setAttribute("aria-haspopup", !0), J(e), X(e);
                var n = this._form = ht("form", t + "-list");
                i && (this._map.on("click", this.collapse, this), Re || V(e, {
                    mouseenter: this.expand,
                    mouseleave: this.collapse
                }, this));
                var o = this._layersLink = ht("a", t + "-toggle", e);
                o.href = "#", o.title = "Layers", ni ? (V(o, "click", Q), V(o, "click", this.expand, this)) : V(o, "focus", this.expand, this), i || this.expand(), this._baseLayersList = ht("div", t + "-base", n), this._separator = ht("div", t + "-separator", n), this._overlaysList = ht("div", t + "-overlays", n), e.appendChild(n)
            },
            _getLayer: function(t) {
                for (var e = 0; e < this._layers.length; e++)
                    if (this._layers[e] && n(this._layers[e].layer) === t) return this._layers[e]
            },
            _addLayer: function(t, e, n) {
                this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                    layer: t,
                    name: e,
                    overlay: n
                }), this.options.sortLayers && this._layers.sort(i(function(t, e) {
                    return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
            },
            _update: function() {
                if (!this._container) return this;
                ut(this._baseLayersList), ut(this._overlaysList), this._layerControlInputs = [];
                var t, e, i, n, o = 0;
                for (i = 0; i < this._layers.length; i++) n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
                return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
            },
            _onLayerChange: function(t) {
                this._handlingClick || this._update();
                var e = this._getLayer(n(t.target)),
                    i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                i && this._map.fire(i, e)
            },
            _createRadioElement: function(t, e) {
                var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                    n = document.createElement("div");
                return n.innerHTML = i, n.firstChild
            },
            _addItem: function(t) {
                var e, i = document.createElement("label"),
                    o = this._map.hasLayer(t.layer);
                t.overlay ? (e = document.createElement("input"), e.type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = o) : e = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(e), e.layerId = n(t.layer), V(e, "click", this._onInputClick, this);
                var s = document.createElement("span");
                s.innerHTML = " " + t.name;
                var r = document.createElement("div");
                i.appendChild(r), r.appendChild(e), r.appendChild(s);
                var a = t.overlay ? this._overlaysList : this._baseLayersList;
                return a.appendChild(i), this._checkDisabledLayers(), i
            },
            _onInputClick: function() {
                var t, e, i = this._layerControlInputs,
                    n = [],
                    o = [];
                this._handlingClick = !0;
                for (var s = i.length - 1; s >= 0; s--) t = i[s], e = this._getLayer(t.layerId).layer, t.checked ? n.push(e) : t.checked || o.push(e);
                for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                this._handlingClick = !1, this._refocusOnMap()
            },
            _checkDisabledLayers: function() {
                for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--) t = i[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
            },
            _expandIfNotCollapsed: function() {
                return this._map && !this.options.collapsed && this.expand(), this
            },
            _expand: function() {
                return this.expand()
            },
            _collapse: function() {
                return this.collapse()
            }
        }),
        Fi = function(t, e, i) {
            return new Di(t, e, i)
        },
        Ri = Ai.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function(t) {
                var e = "leaflet-control-zoom",
                    i = ht("div", e + " leaflet-bar"),
                    n = this.options;
                return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
            },
            onRemove: function(t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            disable: function() {
                return this._disabled = !0, this._updateDisabled(), this
            },
            enable: function() {
                return this._disabled = !1, this._updateDisabled(), this
            },
            _zoomIn: function(t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _zoomOut: function(t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _createButton: function(t, e, i, n, o) {
                var s = ht("a", i, n);
                return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), J(s), V(s, "click", Q), V(s, "click", o, this), V(s, "click", this._refocusOnMap, this), s
            },
            _updateDisabled: function() {
                var t = this._map,
                    e = "leaflet-disabled";
                mt(this._zoomInButton, e), mt(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && pt(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && pt(this._zoomInButton, e)
            }
        });
    Ii.mergeOptions({
        zoomControl: !0
    }), Ii.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new Ri, this.addControl(this.zoomControl))
    });
    var ji = function(t) {
            return new Ri(t)
        },
        Ni = Ai.extend({
            options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0
            },
            onAdd: function(t) {
                var e = "leaflet-control-scale",
                    i = ht("div", e),
                    n = this.options;
                return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
            },
            onRemove: function(t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
            },
            _addScales: function(t, e, i) {
                t.metric && (this._mScale = ht("div", e, i)), t.imperial && (this._iScale = ht("div", e, i))
            },
            _update: function() {
                var t = this._map,
                    e = t.getSize().y / 2,
                    i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                this._updateScales(i)
            },
            _updateScales: function(t) {
                this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
            },
            _updateMetric: function(t) {
                var e = this._getRoundNum(t),
                    i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                this._updateScale(this._mScale, i, e / t)
            },
            _updateImperial: function(t) {
                var e, i, n, o = 3.2808399 * t;
                o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
            },
            _updateScale: function(t, e, i) {
                t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
            },
            _getRoundNum: function(t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                    i = t / e;
                return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
            }
        }),
        Ui = function(t) {
            return new Ni(t)
        },
        Hi = Ai.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function(t) {
                u(this, t), this._attributions = {}
            },
            onAdd: function(t) {
                t.attributionControl = this, this._container = ht("div", "leaflet-control-attribution"), J(this._container);
                for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return this._update(), this._container
            },
            setPrefix: function(t) {
                return this.options.prefix = t, this._update(), this
            },
            addAttribution: function(t) {
                return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
            },
            removeAttribution: function(t) {
                return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
            },
            _update: function() {
                if (this._map) {
                    var t = [];
                    for (var e in this._attributions) this._attributions[e] && t.push(e);
                    var i = [];
                    this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                }
            }
        });
    Ii.mergeOptions({
        attributionControl: !0
    }), Ii.addInitHook(function() {
        this.options.attributionControl && (new Hi).addTo(this)
    });
    var Wi = function(t) {
        return new Hi(t)
    };
    Ai.Layers = Di, Ai.Zoom = Ri, Ai.Scale = Ni, Ai.Attribution = Hi, Oi.layers = Fi, Oi.zoom = ji, Oi.scale = Ui, Oi.attribution = Wi;
    var Vi, qi = g.extend({
            initialize: function(t) {
                this._map = t
            },
            enable: function() {
                return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
            },
            disable: function() {
                return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
            },
            enabled: function() {
                return !!this._enabled
            }
        }),
        Gi = {
            Events: be
        },
        Yi = ni ? "touchstart mousedown" : "mousedown",
        Ki = {
            mousedown: "mouseup",
            touchstart: "touchend",
            pointerdown: "touchend",
            MSPointerDown: "touchend"
        },
        Xi = {
            mousedown: "mousemove",
            touchstart: "touchmove",
            pointerdown: "touchmove",
            MSPointerDown: "touchmove"
        },
        Ji = Pe.extend({
            options: {
                clickTolerance: 3
            },
            initialize: function(t, e, i, n) {
                u(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
            },
            enable: function() {
                this._enabled || (V(this._dragStartTarget, Yi, this._onDown, this), this._enabled = !0)
            },
            disable: function() {
                this._enabled && (Ji._dragging === this && this.finishDrag(), q(this._dragStartTarget, Yi, this._onDown, this), this._enabled = !1, this._moved = !1)
            },
            _onDown: function(t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !_t(this._element, "leaflet-zoom-anim") && !(Ji._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (Ji._dragging = this, this._preventOutline && Mt(this._element), Pt(), Ee(), this._moving)))) {
                    this.fire("down");
                    var e = t.touches ? t.touches[0] : t;
                    this._startPoint = new x(e.clientX, e.clientY), V(document, Xi[t.type], this._onMove, this), V(document, Ki[t.type], this._onUp, this)
                }
            },
            _onMove: function(t) {
                if (!t._simulated && this._enabled) {
                    if (t.touches && t.touches.length > 1) return void(this._moved = !0);
                    var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                        i = new x(e.clientX, e.clientY),
                        n = i.subtract(this._startPoint);
                    (n.x || n.y) && (Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance || ($(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = bt(this._element).subtract(n), pt(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), pt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(n), this._moving = !0, v(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0)))
                }
            },
            _updatePosition: function() {
                var t = {
                    originalEvent: this._lastEvent
                };
                this.fire("predrag", t), wt(this._element, this._newPos), this.fire("drag", t)
            },
            _onUp: function(t) {
                !t._simulated && this._enabled && this.finishDrag()
            },
            finishDrag: function() {
                mt(document.body, "leaflet-dragging"), this._lastTarget && (mt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
                for (var t in Xi) q(document, Xi[t], this._onMove, this), q(document, Ki[t], this._onUp, this);
                Tt(), ke(), this._moved && this._moving && (v(this._animRequest), this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1, Ji._dragging = !1
            }
        }),
        $i = (Object.freeze || Object)({
            simplify: Et,
            pointToSegmentDistance: kt,
            closestPointOnSegment: St,
            clipSegment: At,
            _getEdgeIntersection: Ot,
            _getBitCode: Dt,
            _sqClosestPointOnSegment: Rt,
            isFlat: jt,
            _flat: Nt
        }),
        Qi = (Object.freeze || Object)({
            clipPolygon: Ut
        }),
        tn = {
            project: function(t) {
                return new x(t.lng, t.lat)
            },
            unproject: function(t) {
                return new C(t.y, t.x)
            },
            bounds: new b([-180, -90], [180, 90])
        },
        en = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new b([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function(t) {
                var e = Math.PI / 180,
                    i = this.R,
                    n = t.lat * e,
                    o = this.R_MINOR / i,
                    s = Math.sqrt(1 - o * o),
                    r = s * Math.sin(n),
                    a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
                return n = -i * Math.log(Math.max(a, 1e-10)), new x(t.lng * e * i, n)
            },
            unproject: function(t) {
                for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = .1; h < 15 && Math.abs(l) > 1e-7; h++) e = s * Math.sin(a), e = Math.pow((1 - e) / (1 + e), s / 2), l = Math.PI / 2 - 2 * Math.atan(r * e) - a, a += l;
                return new C(a * i, t.x * i / n)
            }
        },
        nn = (Object.freeze || Object)({
            LonLat: tn,
            Mercator: en,
            SphericalMercator: Ce
        }),
        on = e({}, Me, {
            code: "EPSG:3395",
            projection: en,
            transformation: function() {
                var t = .5 / (Math.PI * en.R);
                return k(t, .5, -t, .5)
            }()
        }),
        sn = e({}, Me, {
            code: "EPSG:4326",
            projection: tn,
            transformation: k(1 / 180, 1, -1 / 180, .5)
        }),
        rn = e({}, Te, {
            projection: tn,
            transformation: k(1, 0, -1, 0),
            scale: function(t) {
                return Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t) / Math.LN2
            },
            distance: function(t, e) {
                var i = e.lng - t.lng,
                    n = e.lat - t.lat;
                return Math.sqrt(i * i + n * n)
            },
            infinite: !0
        });
    Te.Earth = Me, Te.EPSG3395 = on, Te.EPSG3857 = Ze, Te.EPSG900913 = Be, Te.EPSG4326 = sn, Te.Simple = rn;
    var an = Pe.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function(t) {
            return t && t.removeLayer(this),
                this
        },
        getPane: function(t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function(t) {
            return this._map._targets[n(t)] = this, this
        },
        removeInteractiveTarget: function(t) {
            return delete this._map._targets[n(t)], this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        _layerAdd: function(t) {
            var e = t.target;
            if (e.hasLayer(this)) {
                if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                    var i = this.getEvents();
                    e.on(i, this), this.once("remove", function() {
                        e.off(i, this)
                    }, this)
                }
                this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                    layer: this
                })
            }
        }
    });
    Ii.include({
        addLayer: function(t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var e = n(t);
            return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
        },
        removeLayer: function(t) {
            var e = n(t);
            return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                layer: t
            }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
        },
        hasLayer: function(t) {
            return !!t && n(t) in this._layers
        },
        eachLayer: function(t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this
        },
        _addLayers: function(t) {
            t = t ? ve(t) ? t : [t] : [];
            for (var e = 0, i = t.length; e < i; e++) this.addLayer(t[e])
        },
        _addZoomLimit: function(t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels())
        },
        _removeZoomLimit: function(t) {
            var e = n(t);
            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
        },
        _updateZoomLevels: function() {
            var t = 1 / 0,
                e = -(1 / 0),
                i = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[n].options;
                t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
            }
            this._layersMaxZoom = e === -(1 / 0) ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var hn = an.extend({
            initialize: function(t) {
                this._layers = {};
                var e, i;
                if (t)
                    for (e = 0, i = t.length; e < i; e++) this.addLayer(t[e])
            },
            addLayer: function(t) {
                var e = this.getLayerId(t);
                return this._layers[e] = t, this._map && this._map.addLayer(t), this
            },
            removeLayer: function(t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
            },
            hasLayer: function(t) {
                return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
            },
            clearLayers: function() {
                for (var t in this._layers) this.removeLayer(this._layers[t]);
                return this
            },
            invoke: function(t) {
                var e, i, n = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers) i = this._layers[e], i[t] && i[t].apply(i, n);
                return this
            },
            onAdd: function(t) {
                for (var e in this._layers) t.addLayer(this._layers[e])
            },
            onRemove: function(t) {
                for (var e in this._layers) t.removeLayer(this._layers[e])
            },
            eachLayer: function(t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this
            },
            getLayer: function(t) {
                return this._layers[t]
            },
            getLayers: function() {
                var t = [];
                for (var e in this._layers) t.push(this._layers[e]);
                return t
            },
            setZIndex: function(t) {
                return this.invoke("setZIndex", t)
            },
            getLayerId: function(t) {
                return n(t)
            }
        }),
        ln = function(t) {
            return new hn(t)
        },
        un = hn.extend({
            addLayer: function(t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this), hn.prototype.addLayer.call(this, t), this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function(t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), hn.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                    layer: t
                })) : this
            },
            setStyle: function(t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function() {
                return this.invoke("bringToFront")
            },
            bringToBack: function() {
                return this.invoke("bringToBack")
            },
            getBounds: function() {
                var t = new T;
                for (var e in this._layers) {
                    var i = this._layers[e];
                    t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
                }
                return t
            }
        }),
        cn = function(t) {
            return new un(t)
        },
        dn = g.extend({
            initialize: function(t) {
                u(this, t)
            },
            createIcon: function(t) {
                return this._createIcon("icon", t)
            },
            createShadow: function(t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function(t, e) {
                var i = this._getIconUrl(t);
                if (!i) {
                    if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
                return this._setIconStyles(n, t), n
            },
            _setIconStyles: function(t, e) {
                var i = this.options,
                    n = i[e + "Size"];
                "number" == typeof n && (n = [n, n]);
                var o = w(n),
                    s = w("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
                t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
            },
            _createImg: function(t, e) {
                return e = e || document.createElement("img"), e.src = t, e
            },
            _getIconUrl: function(t) {
                return ri && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
            }
        }),
        _n = dn.extend({
            options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            },
            _getIconUrl: function(t) {
                return _n.imagePath || (_n.imagePath = this._detectIconPath()), (this.options.imagePath || _n.imagePath) + dn.prototype._getIconUrl.call(this, t)
            },
            _detectIconPath: function() {
                var t = ht("div", "leaflet-default-icon-path", document.body),
                    e = at(t, "background-image") || at(t, "backgroundImage");
                return document.body.removeChild(t), e = null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\([\"\']?/, "").replace(/marker-icon\.png[\"\']?\)$/, "")
            }
        }),
        pn = qi.extend({
            initialize: function(t) {
                this._marker = t
            },
            addHooks: function() {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new Ji(t, t, (!0))), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).enable(), pt(t, "leaflet-marker-draggable")
            },
            removeHooks: function() {
                this._draggable.off({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).disable(), this._marker._icon && mt(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _onDragStart: function() {
                this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onDrag: function(t) {
                var e = this._marker,
                    i = e._shadow,
                    n = bt(e._icon),
                    o = e._map.layerPointToLatLng(n);
                i && wt(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
            },
            _onDragEnd: function(t) {
                delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
            }
        }),
        mn = an.extend({
            options: {
                icon: new _n,
                interactive: !0,
                draggable: !1,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                bubblingMouseEvents: !1
            },
            initialize: function(t, e) {
                u(this, e), this._latlng = z(t)
            },
            onAdd: function(t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
            },
            onRemove: function(t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
            },
            getEvents: function() {
                return {
                    zoom: this.update,
                    viewreset: this.update
                }
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                var e = this._latlng;
                return this._latlng = z(t), this.update(), this.fire("move", {
                    oldLatLng: e,
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function(t) {
                return this.options.zIndexOffset = t, this.update()
            },
            setIcon: function(t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
            },
            getElement: function() {
                return this._icon
            },
            update: function() {
                if (this._icon) {
                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(t)
                }
                return this
            },
            _initIcon: function() {
                var t = this.options,
                    e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                    i = t.icon.createIcon(this._icon),
                    n = !1;
                i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), t.alt && (i.alt = t.alt)), pt(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                });
                var o = t.icon.createShadow(this._shadow),
                    s = !1;
                o !== this._shadow && (this._removeShadow(), s = !0), o && (pt(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
            },
            _removeIcon: function() {
                this.options.riseOnHover && this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                }), lt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
            },
            _removeShadow: function() {
                this._shadow && lt(this._shadow), this._shadow = null
            },
            _setPos: function(t) {
                wt(this._icon, t), this._shadow && wt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function(t) {
                this._icon.style.zIndex = this._zIndex + t
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e)
            },
            _initInteraction: function() {
                if (this.options.interactive && (pt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), pn)) {
                    var t = this.options.draggable;
                    this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new pn(this), t && this.dragging.enable()
                }
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function() {
                var t = this.options.opacity;
                gt(this._icon, t), this._shadow && gt(this._shadow, t)
            },
            _bringToFront: function() {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function() {
                this._updateZIndex(0)
            },
            _getPopupAnchor: function() {
                return this.options.icon.options.popupAnchor || [0, 0]
            },
            _getTooltipAnchor: function() {
                return this.options.icon.options.tooltipAnchor || [0, 0]
            }
        }),
        fn = an.extend({
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0
            },
            beforeAdd: function(t) {
                this._renderer = t.getRenderer(this)
            },
            onAdd: function() {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
            },
            onRemove: function() {
                this._renderer._removePath(this)
            },
            redraw: function() {
                return this._map && this._renderer._updatePath(this), this
            },
            setStyle: function(t) {
                return u(this, t), this._renderer && this._renderer._updateStyle(this), this
            },
            bringToFront: function() {
                return this._renderer && this._renderer._bringToFront(this), this
            },
            bringToBack: function() {
                return this._renderer && this._renderer._bringToBack(this), this
            },
            getElement: function() {
                return this._path
            },
            _reset: function() {
                this._project(), this._update()
            },
            _clickTolerance: function() {
                return (this.options.stroke ? this.options.weight / 2 : 0) + (ni ? 10 : 0)
            }
        }),
        vn = fn.extend({
            options: {
                fill: !0,
                radius: 10
            },
            initialize: function(t, e) {
                u(this, e), this._latlng = z(t), this._radius = this.options.radius
            },
            setLatLng: function(t) {
                return this._latlng = z(t), this.redraw(), this.fire("move", {
                    latlng: this._latlng
                })
            },
            getLatLng: function() {
                return this._latlng
            },
            setRadius: function(t) {
                return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function() {
                return this._radius
            },
            setStyle: function(t) {
                var e = t && t.radius || this._radius;
                return fn.prototype.setStyle.call(this, t), this.setRadius(e), this
            },
            _project: function() {
                this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
            },
            _updateBounds: function() {
                var t = this._radius,
                    e = this._radiusY || t,
                    i = this._clickTolerance(),
                    n = [t + i, e + i];
                this._pxBounds = new b(this._point.subtract(n), this._point.add(n))
            },
            _update: function() {
                this._map && this._updatePath()
            },
            _updatePath: function() {
                this._renderer._updateCircle(this)
            },
            _empty: function() {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
            },
            _containsPoint: function(t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
            }
        }),
        gn = vn.extend({
            initialize: function(t, i, n) {
                if ("number" == typeof i && (i = e({}, n, {
                        radius: i
                    })), u(this, i), this._latlng = z(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
            },
            setRadius: function(t) {
                return this._mRadius = t, this.redraw()
            },
            getRadius: function() {
                return this._mRadius
            },
            getBounds: function() {
                var t = [this._radius, this._radiusY || this._radius];
                return new T(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: fn.prototype.setStyle,
            _project: function() {
                var t = this._latlng.lng,
                    e = this._latlng.lat,
                    i = this._map,
                    n = i.options.crs;
                if (n.distance === Me.distance) {
                    var o = Math.PI / 180,
                        s = this._mRadius / Me.R / o,
                        r = i.project([e + s, t]),
                        a = i.project([e - s, t]),
                        h = r.add(a).divideBy(2),
                        l = i.unproject(h).lat,
                        u = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(l * o)) / (Math.cos(e * o) * Math.cos(l * o))) / o;
                    (isNaN(u) || 0 === u) && (u = s / Math.cos(Math.PI / 180 * e)), this._point = h.subtract(i.getPixelOrigin()), this._radius = isNaN(u) ? 0 : Math.max(Math.round(h.x - i.project([l, t - u]).x), 1), this._radiusY = Math.max(Math.round(h.y - r.y), 1)
                } else {
                    var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                    this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(c).x
                }
                this._updateBounds()
            }
        }),
        yn = fn.extend({
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            initialize: function(t, e) {
                u(this, e), this._setLatLngs(t)
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(t) {
                return this._setLatLngs(t), this.redraw()
            },
            isEmpty: function() {
                return !this._latlngs.length
            },
            closestLayerPoint: function(t) {
                for (var e, i, n = 1 / 0, o = null, s = Rt, r = 0, a = this._parts.length; r < a; r++)
                    for (var h = this._parts[r], l = 1, u = h.length; l < u; l++) {
                        e = h[l - 1], i = h[l];
                        var c = s(t, e, i, !0);
                        c < n && (n = c, o = s(t, e, i))
                    }
                return o && (o.distance = Math.sqrt(n)), o
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, i, n, o, s, r, a = this._rings[0],
                    h = a.length;
                if (!h) return null;
                for (t = 0, e = 0; t < h - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
                if (0 === e) return this._map.layerPointToLatLng(a[0]);
                for (t = 0, n = 0; t < h - 1; t++)
                    if (o = a[t], s = a[t + 1], i = o.distanceTo(s), n += i, n > e) return r = (n - e) / i, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
            },
            getBounds: function() {
                return this._bounds
            },
            addLatLng: function(t, e) {
                return e = e || this._defaultShape(), t = z(t), e.push(t), this._bounds.extend(t), this.redraw()
            },
            _setLatLngs: function(t) {
                this._bounds = new T, this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function() {
                return jt(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function(t) {
                for (var e = [], i = jt(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = z(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
                return e
            },
            _project: function() {
                var t = new b;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
                var e = this._clickTolerance(),
                    i = new x(e, e);
                this._bounds.isValid() && t.isValid() && (t.min._subtract(i), t.max._add(i), this._pxBounds = t)
            },
            _projectLatlngs: function(t, e, i) {
                var n, o, s = t[0] instanceof C,
                    r = t.length;
                if (s) {
                    for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
                    e.push(o)
                } else
                    for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i)
            },
            _clipPoints: function() {
                var t = this._renderer._bounds;
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
                    if (this.options.noClip) return void(this._parts = this._rings);
                    var e, i, n, o, s, r, a, h = this._parts;
                    for (e = 0, n = 0, o = this._rings.length; e < o; e++)
                        for (a = this._rings[e], i = 0, s = a.length; i < s - 1; i++) r = At(a[i], a[i + 1], t, i, !0), r && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[i + 1] && i !== s - 2 || (h[n].push(r[1]), n++))
                }
            },
            _simplifyPoints: function() {
                for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = Et(t[i], e)
            },
            _update: function() {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
            },
            _updatePath: function() {
                this._renderer._updatePoly(this)
            },
            _containsPoint: function(t, e) {
                var i, n, o, s, r, a, h = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (i = 0, s = this._parts.length; i < s; i++)
                    for (a = this._parts[i], n = 0, r = a.length, o = r - 1; n < r; o = n++)
                        if ((e || 0 !== n) && kt(t, a[o], a[n]) <= h) return !0;
                return !1
            }
        });
    yn._flat = Nt;
    var Ln = yn.extend({
            options: {
                fill: !0
            },
            isEmpty: function() {
                return !this._latlngs.length || !this._latlngs[0].length
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, i, n, o, s, r, a, h, l = this._rings[0],
                    u = l.length;
                if (!u) return null;
                for (s = r = a = 0, t = 0, e = u - 1; t < u; e = t++) i = l[t], n = l[e], o = i.y * n.x - n.y * i.x, r += (i.x + n.x) * o, a += (i.y + n.y) * o, s += 3 * o;
                return h = 0 === s ? l[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
            },
            _convertLatLngs: function(t) {
                var e = yn.prototype._convertLatLngs.call(this, t),
                    i = e.length;
                return i >= 2 && e[0] instanceof C && e[0].equals(e[i - 1]) && e.pop(), e
            },
            _setLatLngs: function(t) {
                yn.prototype._setLatLngs.call(this, t), jt(this._latlngs) && (this._latlngs = [this._latlngs])
            },
            _defaultShape: function() {
                return jt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
            },
            _clipPoints: function() {
                var t = this._renderer._bounds,
                    e = this.options.weight,
                    i = new x(e, e);
                if (t = new b(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
                    if (this.options.noClip) return void(this._parts = this._rings);
                    for (var n, o = 0, s = this._rings.length; o < s; o++) n = Ut(this._rings[o], t, !0), n.length && this._parts.push(n)
                }
            },
            _updatePath: function() {
                this._renderer._updatePoly(this, !0)
            },
            _containsPoint: function(t) {
                var e, i, n, o, s, r, a, h, l = !1;
                if (!this._pxBounds.contains(t)) return !1;
                for (o = 0, a = this._parts.length; o < a; o++)
                    for (e = this._parts[o], s = 0, h = e.length, r = h - 1; s < h; r = s++) i = e[s], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
                return l || yn.prototype._containsPoint.call(this, t, !0)
            }
        }),
        xn = un.extend({
            initialize: function(t, e) {
                u(this, e), this._layers = {}, t && this.addData(t)
            },
            addData: function(t) {
                var e, i, n, o = ve(t) ? t : t.features;
                if (o) {
                    for (e = 0, i = o.length; e < i; e++) n = o[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                    return this
                }
                var s = this.options;
                if (s.filter && !s.filter(t)) return this;
                var r = Kt(t, s);
                return r ? (r.feature = ee(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
            },
            resetStyle: function(t) {
                return t.options = e({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
            },
            setStyle: function(t) {
                return this.eachLayer(function(e) {
                    this._setLayerStyle(e, t)
                }, this)
            },
            _setLayerStyle: function(t, e) {
                "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
            }
        }),
        wn = {
            toGeoJSON: function(t) {
                return te(this, {
                    type: "Point",
                    coordinates: $t(this.getLatLng(), t)
                })
            }
        };
    mn.include(wn), gn.include(wn), vn.include(wn), yn.include({
        toGeoJSON: function(t) {
            var e = !jt(this._latlngs),
                i = Qt(this._latlngs, e ? 1 : 0, !1, t);
            return te(this, {
                type: (e ? "Multi" : "") + "LineString",
                coordinates: i
            })
        }
    }), Ln.include({
        toGeoJSON: function(t) {
            var e = !jt(this._latlngs),
                i = e && !jt(this._latlngs[0]),
                n = Qt(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
            return e || (n = [n]), te(this, {
                type: (i ? "Multi" : "") + "Polygon",
                coordinates: n
            })
        }
    }), hn.include({
        toMultiPoint: function(t) {
            var e = [];
            return this.eachLayer(function(i) {
                e.push(i.toGeoJSON(t).geometry.coordinates)
            }), te(this, {
                type: "MultiPoint",
                coordinates: e
            })
        },
        toGeoJSON: function(t) {
            var e = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === e) return this.toMultiPoint(t);
            var i = "GeometryCollection" === e,
                n = [];
            return this.eachLayer(function(e) {
                if (e.toGeoJSON) {
                    var o = e.toGeoJSON(t);
                    if (i) n.push(o.geometry);
                    else {
                        var s = ee(o);
                        "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
                    }
                }
            }), i ? te(this, {
                geometries: n,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: n
            }
        }
    });
    var bn = ie,
        Pn = an.extend({
            options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
            },
            initialize: function(t, e, i) {
                this._url = t, this._bounds = M(e), u(this, i)
            },
            onAdd: function() {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (pt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
            },
            onRemove: function() {
                lt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._image && this._updateOpacity(), this
            },
            setStyle: function(t) {
                return t.opacity && this.setOpacity(t.opacity), this
            },
            bringToFront: function() {
                return this._map && ct(this._image), this
            },
            bringToBack: function() {
                return this._map && dt(this._image), this
            },
            setUrl: function(t) {
                return this._url = t, this._image && (this._image.src = t), this
            },
            setBounds: function(t) {
                return this._bounds = M(t), this._map && this._reset(), this
            },
            getEvents: function() {
                var t = {
                    zoom: this._reset,
                    viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            getBounds: function() {
                return this._bounds
            },
            getElement: function() {
                return this._image
            },
            _initImage: function() {
                var t = this._image = ht("img", "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : "") + (this.options.className || ""));
                t.onselectstart = r, t.onmousemove = r, t.onload = i(this.fire, this, "load"), t.onerror = i(this._overlayOnError, this, "error"), this.options.crossOrigin && (t.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t.src = this._url, t.alt = this.options.alt
            },
            _animateZoom: function(t) {
                var e = this._map.getZoomScale(t.zoom),
                    i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                xt(this._image, i, e)
            },
            _reset: function() {
                var t = this._image,
                    e = new b(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                    i = e.getSize();
                wt(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
            },
            _updateOpacity: function() {
                gt(this._image, this.options.opacity)
            },
            _updateZIndex: function() {
                this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
            },
            _overlayOnError: function() {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t)
            }
        }),
        Tn = function(t, e, i) {
            return new Pn(t, e, i)
        },
        Mn = Pn.extend({
            options: {
                autoplay: !0,
                loop: !0
            },
            _initImage: function() {
                var t = "VIDEO" === this._url.tagName,
                    e = this._image = t ? this._url : ht("video");
                if (e["class"] = e["class"] || "", e["class"] += "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : ""), e.onselectstart = r, e.onmousemove = r, e.onloadeddata = i(this.fire, this, "load"), !t) {
                    ve(this._url) || (this._url = [this._url]), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop;
                    for (var n = 0; n < this._url.length; n++) {
                        var o = ht("source");
                        o.src = this._url[n], e.appendChild(o)
                    }
                }
            }
        }),
        Cn = an.extend({
            options: {
                offset: [0, 7],
                className: "",
                pane: "popupPane"
            },
            initialize: function(t, e) {
                u(this, t), this._source = e
            },
            onAdd: function(t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && gt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && gt(this._container, 1), this.bringToFront()
            },
            onRemove: function(t) {
                t._fadeAnimated ? (gt(this._container, 0), this._removeTimeout = setTimeout(i(lt, void 0, this._container), 200)) : lt(this._container)
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = z(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                return this._content = t, this.update(), this
            },
            getElement: function() {
                return this._container
            },
            update: function() {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            getEvents: function() {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            isOpen: function() {
                return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function() {
                return this._map && ct(this._container), this
            },
            bringToBack: function() {
                return this._map && dt(this._container), this
            },
            _updateContent: function() {
                if (this._content) {
                    var t = this._contentNode,
                        e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                    if ("string" == typeof e) t.innerHTML = e;
                    else {
                        for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.appendChild(e)
                    }
                    this.fire("contentupdate")
                }
            },
            _updatePosition: function() {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        e = w(this.options.offset),
                        i = this._getAnchor();
                    this._zoomAnimated ? wt(this._container, t.add(i)) : e = e.add(t).add(i);
                    var n = this._containerBottom = -e.y,
                        o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                    this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                }
            },
            _getAnchor: function() {
                return [0, 0]
            }
        }),
        zn = Cn.extend({
            options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                className: ""
            },
            openOn: function(t) {
                return t.openPopup(this), this
            },
            onAdd: function(t) {
                Cn.prototype.onAdd.call(this, t), t.fire("popupopen", {
                    popup: this
                }), this._source && (this._source.fire("popupopen", {
                    popup: this
                }, !0), this._source instanceof fn || this._source.on("preclick", K))
            },
            onRemove: function(t) {
                Cn.prototype.onRemove.call(this, t), t.fire("popupclose", {
                    popup: this
                }), this._source && (this._source.fire("popupclose", {
                    popup: this
                }, !0), this._source instanceof fn || this._source.off("preclick", K))
            },
            getEvents: function() {
                var t = Cn.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function() {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function() {
                var t = "leaflet-popup",
                    e = this._container = ht("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                    i = this._wrapper = ht("div", t + "-content-wrapper", e);
                if (this._contentNode = ht("div", t + "-content", i), J(i), X(this._contentNode), V(i, "contextmenu", K), this._tipContainer = ht("div", t + "-tip-container", e), this._tip = ht("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                    var n = this._closeButton = ht("a", t + "-close-button", e);
                    n.href = "#close", n.innerHTML = "&#215;", V(n, "click", this._onCloseButtonClick, this)
                }
            },
            _updateLayout: function() {
                var t = this._contentNode,
                    e = t.style;
                e.width = "", e.whiteSpace = "nowrap";
                var i = t.offsetWidth;
                i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                var n = t.offsetHeight,
                    o = this.options.maxHeight,
                    s = "leaflet-popup-scrolled";
                o && n > o ? (e.height = o + "px", pt(t, s)) : mt(t, s), this._containerWidth = this._container.offsetWidth
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                    i = this._getAnchor();
                wt(this._container, e.add(i))
            },
            _adjustPan: function() {
                if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                    var t = this._map,
                        e = parseInt(at(this._container, "marginBottom"), 10) || 0,
                        i = this._container.offsetHeight + e,
                        n = this._containerWidth,
                        o = new x(this._containerLeft, -i - this._containerBottom);
                    o._add(bt(this._container));
                    var s = t.layerPointToContainerPoint(o),
                        r = w(this.options.autoPanPadding),
                        a = w(this.options.autoPanPaddingTopLeft || r),
                        h = w(this.options.autoPanPaddingBottomRight || r),
                        l = t.getSize(),
                        u = 0,
                        c = 0;
                    s.x + n + h.x > l.x && (u = s.x + n - l.x + h.x), s.x - u - a.x < 0 && (u = s.x - a.x), s.y + i + h.y > l.y && (c = s.y + i - l.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (u || c) && t.fire("autopanstart").panBy([u, c])
                }
            },
            _onCloseButtonClick: function(t) {
                this._close(), Q(t)
            },
            _getAnchor: function() {
                return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
            }
        }),
        En = function(t, e) {
            return new zn(t, e)
        };
    Ii.mergeOptions({
        closePopupOnClick: !0
    }), Ii.include({
        openPopup: function(t, e, i) {
            return t instanceof zn || (t = new zn(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        },
        closePopup: function(t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), an.include({
        bindPopup: function(t, e) {
            return t instanceof zn ? (u(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new zn(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        },
        unbindPopup: function() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        },
        openPopup: function(t, e) {
            if (t instanceof an || (e = t, t = this), t instanceof un)
                for (var i in this._layers) {
                    t = this._layers[i];
                    break
                }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this
        },
        closePopup: function() {
            return this._popup && this._popup._close(), this
        },
        togglePopup: function(t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        },
        isPopupOpen: function() {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t), this
        },
        getPopup: function() {
            return this._popup
        },
        _openPopup: function(t) {
            var e = t.layer || t.target;
            if (this._popup && this._map) return Q(t), e instanceof fn ? void this.openPopup(t.layer || t.target, t.latlng) : void(this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function(t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var kn = Cn.extend({
            options: {
                pane: "tooltipPane",
                offset: [0, 0],
                direction: "auto",
                permanent: !1,
                sticky: !1,
                interactive: !1,
                opacity: .9
            },
            onAdd: function(t) {
                Cn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                    tooltip: this
                }), this._source && this._source.fire("tooltipopen", {
                    tooltip: this
                }, !0)
            },
            onRemove: function(t) {
                Cn.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                    tooltip: this
                }), this._source && this._source.fire("tooltipclose", {
                    tooltip: this
                }, !0)
            },
            getEvents: function() {
                var t = Cn.prototype.getEvents.call(this);
                return ni && !this.options.permanent && (t.preclick = this._close), t
            },
            _close: function() {
                this._map && this._map.closeTooltip(this)
            },
            _initLayout: function() {
                var t = "leaflet-tooltip",
                    e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                this._contentNode = this._container = ht("div", e)
            },
            _updateLayout: function() {},
            _adjustPan: function() {},
            _setPosition: function(t) {
                var e = this._map,
                    i = this._container,
                    n = e.latLngToContainerPoint(e.getCenter()),
                    o = e.layerPointToContainerPoint(t),
                    s = this.options.direction,
                    r = i.offsetWidth,
                    a = i.offsetHeight,
                    h = w(this.options.offset),
                    l = this._getAnchor();
                "top" === s ? t = t.add(w(-r / 2 + h.x, -a + h.y + l.y, !0)) : "bottom" === s ? t = t.subtract(w(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(w(r / 2 + h.x, a / 2 - l.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(w(h.x + l.x, l.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(w(r + l.x - h.x, a / 2 - l.y - h.y, !0))), mt(i, "leaflet-tooltip-right"), mt(i, "leaflet-tooltip-left"), mt(i, "leaflet-tooltip-top"), mt(i, "leaflet-tooltip-bottom"), pt(i, "leaflet-tooltip-" + s), wt(i, t)
            },
            _updatePosition: function() {
                var t = this._map.latLngToLayerPoint(this._latlng);
                this._setPosition(t)
            },
            setOpacity: function(t) {
                this.options.opacity = t, this._container && gt(this._container, t)
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                this._setPosition(e)
            },
            _getAnchor: function() {
                return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
            }
        }),
        Sn = function(t, e) {
            return new kn(t, e)
        };
    Ii.include({
        openTooltip: function(t, e, i) {
            return t instanceof kn || (t = new kn(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
        },
        closeTooltip: function(t) {
            return t && this.removeLayer(t), this
        }
    }), an.include({
        bindTooltip: function(t, e) {
            return t instanceof kn ? (u(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = new kn(e, this)),
                this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
        },
        unbindTooltip: function() {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
        },
        _initTooltipInteractions: function(t) {
            if (t || !this._tooltipHandlersAdded) {
                var e = t ? "off" : "on",
                    i = {
                        remove: this.closeTooltip,
                        move: this._moveTooltip
                    };
                this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), ni && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t
            }
        },
        openTooltip: function(t, e) {
            if (t instanceof an || (e = t, t = this), t instanceof un)
                for (var i in this._layers) {
                    t = this._layers[i];
                    break
                }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (pt(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
        },
        closeTooltip: function() {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (mt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
        },
        toggleTooltip: function(t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        },
        isTooltipOpen: function() {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function(t) {
            return this._tooltip && this._tooltip.setContent(t), this
        },
        getTooltip: function() {
            return this._tooltip
        },
        _openTooltip: function(t) {
            var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
        },
        _moveTooltip: function(t) {
            var e, i, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n)
        }
    });
    var Zn = dn.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(t) {
            var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                i = this.options;
            if (e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
                var n = w(i.bgPos);
                e.style.backgroundPosition = -n.x + "px " + -n.y + "px"
            }
            return this._setIconStyles(e, "icon"), e
        },
        createShadow: function() {
            return null
        }
    });
    dn.Default = _n;
    var Bn = an.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: $e,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
            },
            initialize: function(t) {
                u(this, t)
            },
            onAdd: function() {
                this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
            },
            beforeAdd: function(t) {
                t._addZoomLimit(this)
            },
            onRemove: function(t) {
                this._removeAllTiles(), lt(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null
            },
            bringToFront: function() {
                return this._map && (ct(this._container), this._setAutoZIndex(Math.max)), this
            },
            bringToBack: function() {
                return this._map && (dt(this._container), this._setAutoZIndex(Math.min)), this
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._updateOpacity(), this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            isLoading: function() {
                return this._loading
            },
            redraw: function() {
                return this._map && (this._removeAllTiles(), this._update()), this
            },
            getEvents: function() {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            createTile: function() {
                return document.createElement("div")
            },
            getTileSize: function() {
                var t = this.options.tileSize;
                return t instanceof x ? t : new x(t, t)
            },
            _updateZIndex: function() {
                this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t) {
                for (var e, i = this.getPane().children, n = -t(-(1 / 0), 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
                isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
            },
            _updateOpacity: function() {
                if (this._map && !Oe) {
                    gt(this._container, this.options.opacity);
                    var t = +new Date,
                        e = !1,
                        i = !1;
                    for (var n in this._tiles) {
                        var o = this._tiles[n];
                        if (o.current && o.loaded) {
                            var s = Math.min(1, (t - o.loaded) / 200);
                            gt(o.el, s), s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0)
                        }
                    }
                    i && !this._noPrune && this._pruneTiles(), e && (v(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this))
                }
            },
            _onOpaqueTile: r,
            _initContainer: function() {
                this._container || (this._container = ht("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
            },
            _updateLevels: function() {
                var t = this._tileZoom,
                    e = this.options.maxZoom;
                if (void 0 !== t) {
                    for (var i in this._levels) this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (lt(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
                    var n = this._levels[t],
                        o = this._map;
                    return n || (n = this._levels[t] = {}, n.el = ht("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), r(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n
                }
            },
            _onUpdateLevel: r,
            _onRemoveLevel: r,
            _onCreateLevel: r,
            _pruneTiles: function() {
                if (this._map) {
                    var t, e, i = this._map.getZoom();
                    if (i > this.options.maxZoom || i < this.options.minZoom) return void this._removeAllTiles();
                    for (t in this._tiles) e = this._tiles[t], e.retain = e.current;
                    for (t in this._tiles)
                        if (e = this._tiles[t], e.current && !e.active) {
                            var n = e.coords;
                            this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                        }
                    for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                }
            },
            _removeTilesAtZoom: function(t) {
                for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
            },
            _removeAllTiles: function() {
                for (var t in this._tiles) this._removeTile(t)
            },
            _invalidateAll: function() {
                for (var t in this._levels) lt(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = null
            },
            _retainParent: function(t, e, i, n) {
                var o = Math.floor(t / 2),
                    s = Math.floor(e / 2),
                    r = i - 1,
                    a = new x((+o), (+s));
                a.z = +r;
                var h = this._tileCoordsToKey(a),
                    l = this._tiles[h];
                return l && l.active ? (l.retain = !0, !0) : (l && l.loaded && (l.retain = !0), r > n && this._retainParent(o, s, r, n))
            },
            _retainChildren: function(t, e, i, n) {
                for (var o = 2 * t; o < 2 * t + 2; o++)
                    for (var s = 2 * e; s < 2 * e + 2; s++) {
                        var r = new x(o, s);
                        r.z = i + 1;
                        var a = this._tileCoordsToKey(r),
                            h = this._tiles[a];
                        h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n))
                    }
            },
            _resetView: function(t) {
                var e = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
            },
            _animateZoom: function(t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
            },
            _clampZoom: function(t) {
                var e = this.options;
                return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
            },
            _setView: function(t, e, i, n) {
                var o = this._clampZoom(Math.round(e));
                (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
                var s = this.options.updateWhenZooming && o !== this._tileZoom;
                n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e)
            },
            _setZoomTransforms: function(t, e) {
                for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
            },
            _setZoomTransform: function(t, e, i) {
                var n = this._map.getZoomScale(i, t.zoom),
                    o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                Je ? xt(t.el, o, n) : wt(t.el, o)
            },
            _resetGrid: function() {
                var t = this._map,
                    e = t.options.crs,
                    i = this._tileSize = this.getTileSize(),
                    n = this._tileZoom,
                    o = this._map.getPixelWorldBounds(this._tileZoom);
                o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
            },
            _onMoveEnd: function() {
                this._map && !this._map._animatingZoom && this._update()
            },
            _getTiledPixelBounds: function(t) {
                var e = this._map,
                    i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                    n = e.getZoomScale(i, this._tileZoom),
                    o = e.project(t, this._tileZoom).floor(),
                    s = e.getSize().divideBy(2 * n);
                return new b(o.subtract(s), o.add(s))
            },
            _update: function(t) {
                var e = this._map;
                if (e) {
                    var i = this._clampZoom(e.getZoom());
                    if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                        var n = this._getTiledPixelBounds(t),
                            o = this._pxBoundsToTileRange(n),
                            s = o.getCenter(),
                            r = [],
                            a = this.options.keepBuffer,
                            h = new b(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                        if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                        for (var l in this._tiles) {
                            var u = this._tiles[l].coords;
                            u.z === this._tileZoom && h.contains(new x(u.x, u.y)) || (this._tiles[l].current = !1)
                        }
                        if (Math.abs(i - this._tileZoom) > 1) return void this._setView(t, i);
                        for (var c = o.min.y; c <= o.max.y; c++)
                            for (var d = o.min.x; d <= o.max.x; d++) {
                                var _ = new x(d, c);
                                _.z = this._tileZoom, this._isValidTile(_) && (this._tiles[this._tileCoordsToKey(_)] || r.push(_))
                            }
                        if (r.sort(function(t, e) {
                                return t.distanceTo(s) - e.distanceTo(s)
                            }), 0 !== r.length) {
                            this._loading || (this._loading = !0, this.fire("loading"));
                            var p = document.createDocumentFragment();
                            for (d = 0; d < r.length; d++) this._addTile(r[d], p);
                            this._level.el.appendChild(p)
                        }
                    }
                }
            },
            _isValidTile: function(t) {
                var e = this._map.options.crs;
                if (!e.infinite) {
                    var i = this._globalTileRange;
                    if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var n = this._tileCoordsToBounds(t);
                return M(this.options.bounds).overlaps(n)
            },
            _keyToBounds: function(t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
            },
            _tileCoordsToBounds: function(t) {
                var e = this._map,
                    i = this.getTileSize(),
                    n = t.scaleBy(i),
                    o = n.add(i),
                    s = e.unproject(n, t.z),
                    r = e.unproject(o, t.z),
                    a = new T(s, r);
                return this.options.noWrap || e.wrapLatLngBounds(a), a
            },
            _tileCoordsToKey: function(t) {
                return t.x + ":" + t.y + ":" + t.z
            },
            _keyToTileCoords: function(t) {
                var e = t.split(":"),
                    i = new x((+e[0]), (+e[1]));
                return i.z = +e[2], i
            },
            _removeTile: function(t) {
                var e = this._tiles[t];
                e && (lt(e.el), delete this._tiles[t], this.fire("tileunload", {
                    tile: e.el,
                    coords: this._keyToTileCoords(t)
                }))
            },
            _initTile: function(t) {
                pt(t, "leaflet-tile");
                var e = this.getTileSize();
                t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = r, t.onmousemove = r, Oe && this.options.opacity < 1 && gt(t, this.options.opacity), Re && !je && (t.style.WebkitBackfaceVisibility = "hidden")
            },
            _addTile: function(t, e) {
                var n = this._getTilePos(t),
                    o = this._tileCoordsToKey(t),
                    s = this.createTile(this._wrapCoords(t), i(this._tileReady, this, t));
                this._initTile(s), this.createTile.length < 2 && f(i(this._tileReady, this, t, null, s)), wt(s, n), this._tiles[o] = {
                    el: s,
                    coords: t,
                    current: !0
                }, e.appendChild(s), this.fire("tileloadstart", {
                    tile: s,
                    coords: t
                })
            },
            _tileReady: function(t, e, n) {
                if (this._map) {
                    e && this.fire("tileerror", {
                        error: e,
                        tile: n,
                        coords: t
                    });
                    var o = this._tileCoordsToKey(t);
                    n = this._tiles[o], n && (n.loaded = +new Date, this._map._fadeAnimated ? (gt(n.el, 0), v(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), e || (pt(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
                        tile: n.el,
                        coords: t
                    })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Oe || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(i(this._pruneTiles, this), 250)))
                }
            },
            _getTilePos: function(t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
            },
            _wrapCoords: function(t) {
                var e = new x(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
                return e.z = t.z, e
            },
            _pxBoundsToTileRange: function(t) {
                var e = this.getTileSize();
                return new b(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
            },
            _noTilesToLoad: function() {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0
            }
        }),
        In = Bn.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1
            },
            initialize: function(t, e) {
                this._url = t, e = u(this, e), e.detectRetina && ri && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), Re || this.on("tileunload", this._onTileRemove)
            },
            setUrl: function(t, e) {
                return this._url = t, e || this.redraw(), this
            },
            createTile: function(t, e) {
                var n = document.createElement("img");
                return V(n, "load", i(this._tileOnLoad, this, e, n)), V(n, "error", i(this._tileOnError, this, e, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
            },
            getTileUrl: function(t) {
                var i = {
                    r: ri ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var n = this._globalTileRange.max.y - t.y;
                    this.options.tms && (i.y = n), i["-y"] = n
                }
                return d(this._url, e(i, this.options))
            },
            _tileOnLoad: function(t, e) {
                Oe ? setTimeout(i(t, this, null, e), 0) : t(null, e)
            },
            _tileOnError: function(t, e, i) {
                var n = this.options.errorTileUrl;
                n && e.src !== n && (e.src = n), t(i, e)
            },
            _onTileRemove: function(t) {
                t.tile.onload = null
            },
            _getZoomForUrl: function() {
                var t = this._tileZoom,
                    e = this.options.maxZoom,
                    i = this.options.zoomReverse,
                    n = this.options.zoomOffset;
                return i && (t = e - t), t + n
            },
            _getSubdomain: function(t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e]
            },
            _abortLoading: function() {
                var t, e;
                for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = r, e.onerror = r, e.complete || (e.src = ge, lt(e)))
            }
        }),
        An = In.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1,
                version: "1.1.1"
            },
            options: {
                crs: null,
                uppercase: !1
            },
            initialize: function(t, i) {
                this._url = t;
                var n = e({}, this.defaultWmsParams);
                for (var o in i) o in this.options || (n[o] = i[o]);
                i = u(this, i), n.width = n.height = i.tileSize * (i.detectRetina && ri ? 2 : 1), this.wmsParams = n
            },
            onAdd: function(t) {
                this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[e] = this._crs.code, In.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
                var e = this._tileCoordsToBounds(t),
                    i = this._crs.project(e.getNorthWest()),
                    n = this._crs.project(e.getSouthEast()),
                    o = (this._wmsVersion >= 1.3 && this._crs === sn ? [n.y, i.x, i.y, n.x] : [i.x, n.y, n.x, i.y]).join(","),
                    s = In.prototype.getTileUrl.call(this, t);
                return s + c(this.wmsParams, s, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + o
            },
            setParams: function(t, i) {
                return e(this.wmsParams, t), i || this.redraw(), this
            }
        });
    In.WMS = An, re.wms = ae;
    var On = an.extend({
            options: {
                padding: .1
            },
            initialize: function(t) {
                u(this, t), n(this), this._layers = this._layers || {}
            },
            onAdd: function() {
                this._container || (this._initContainer(), this._zoomAnimated && pt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
            },
            onRemove: function() {
                this.off("update", this._updatePaths, this), this._destroyContainer()
            },
            getEvents: function() {
                var t = {
                    viewreset: this._reset,
                    zoom: this._onZoom,
                    moveend: this._update,
                    zoomend: this._onZoomEnd
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
            },
            _onAnimZoom: function(t) {
                this._updateTransform(t.center, t.zoom)
            },
            _onZoom: function() {
                this._updateTransform(this._map.getCenter(), this._map.getZoom())
            },
            _updateTransform: function(t, e) {
                var i = this._map.getZoomScale(e, this._zoom),
                    n = bt(this._container),
                    o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                    s = this._map.project(this._center, e),
                    r = this._map.project(t, e),
                    a = r.subtract(s),
                    h = o.multiplyBy(-i).add(n).add(o).subtract(a);
                Je ? xt(this._container, h, i) : wt(this._container, h)
            },
            _reset: function() {
                this._update(), this._updateTransform(this._center, this._zoom);
                for (var t in this._layers) this._layers[t]._reset()
            },
            _onZoomEnd: function() {
                for (var t in this._layers) this._layers[t]._project()
            },
            _updatePaths: function() {
                for (var t in this._layers) this._layers[t]._update()
            },
            _update: function() {
                var t = this.options.padding,
                    e = this._map.getSize(),
                    i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                this._bounds = new b(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
            }
        }),
        Dn = On.extend({
            getEvents: function() {
                var t = On.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset, t
            },
            _onViewPreReset: function() {
                this._postponeUpdatePaths = !0
            },
            onAdd: function() {
                On.prototype.onAdd.call(this), this._draw()
            },
            _initContainer: function() {
                var t = this._container = document.createElement("canvas");
                V(t, "mousemove", o(this._onMouseMove, 32, this), this), V(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), V(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
            },
            _destroyContainer: function() {
                delete this._ctx, lt(this._container), q(this._container), delete this._container
            },
            _updatePaths: function() {
                if (!this._postponeUpdatePaths) {
                    var t;
                    this._redrawBounds = null;
                    for (var e in this._layers) t = this._layers[e], t._update();
                    this._redraw()
                }
            },
            _update: function() {
                if (!this._map._animatingZoom || !this._bounds) {
                    this._drawnLayers = {}, On.prototype._update.call(this);
                    var t = this._bounds,
                        e = this._container,
                        i = t.getSize(),
                        n = ri ? 2 : 1;
                    wt(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", ri && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                }
            },
            _reset: function() {
                On.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
            },
            _initPath: function(t) {
                this._updateDashArray(t), this._layers[n(t)] = t;
                var e = t._order = {
                    layer: t,
                    prev: this._drawLast,
                    next: null
                };
                this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
            },
            _addPath: function(t) {
                this._requestRedraw(t)
            },
            _removePath: function(t) {
                var e = t._order,
                    i = e.next,
                    n = e.prev;
                i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[L.stamp(t)], this._requestRedraw(t)
            },
            _updatePath: function(t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
            },
            _updateStyle: function(t) {
                this._updateDashArray(t), this._requestRedraw(t)
            },
            _updateDashArray: function(t) {
                if (t.options.dashArray) {
                    var e, i = t.options.dashArray.split(","),
                        n = [];
                    for (e = 0; e < i.length; e++) n.push(Number(i[e]));
                    t.options._dashArray = n
                }
            },
            _requestRedraw: function(t) {
                this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this))
            },
            _extendRedrawBounds: function(t) {
                if (t._pxBounds) {
                    var e = (t.options.weight || 0) + 1;
                    this._redrawBounds = this._redrawBounds || new b, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                }
            },
            _redraw: function() {
                this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
            },
            _clear: function() {
                var t = this._redrawBounds;
                if (t) {
                    var e = t.getSize();
                    this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
            },
            _draw: function() {
                var t, e = this._redrawBounds;
                if (this._ctx.save(), e) {
                    var i = e.getSize();
                    this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()
                }
                this._drawing = !0;
                for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                this._drawing = !1, this._ctx.restore()
            },
            _updatePoly: function(t, e) {
                if (this._drawing) {
                    var i, n, o, s, r = t._parts,
                        a = r.length,
                        h = this._ctx;
                    if (a) {
                        for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), i = 0; i < a; i++) {
                            for (n = 0, o = r[i].length; n < o; n++) s = r[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                            e && h.closePath()
                        }
                        this._fillStroke(h, t)
                    }
                }
            },
            _updateCircle: function(t) {
                if (this._drawing && !t._empty()) {
                    var e = t._point,
                        i = this._ctx,
                        n = t._radius,
                        o = (t._radiusY || n) / n;
                    this._drawnLayers[t._leaflet_id] = t, 1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t)
                }
            },
            _fillStroke: function(t, e) {
                var i = e.options;
                i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
            },
            _onClick: function(t) {
                for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) e = o.layer, e.options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
                i && (it(t), this._fireEvent([i], t))
            },
            _onMouseMove: function(t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                    var e = this._map.mouseEventToLayerPoint(t);
                    this._handleMouseHover(t, e)
                }
            },
            _handleMouseOut: function(t) {
                var e = this._hoveredLayer;
                e && (mt(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null)
            },
            _handleMouseHover: function(t, e) {
                for (var i, n, o = this._drawFirst; o; o = o.next) i = o.layer, i.options.interactive && i._containsPoint(e) && (n = i);
                n !== this._hoveredLayer && (this._handleMouseOut(t), n && (pt(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
            },
            _fireEvent: function(t, e, i) {
                this._map._fireDOMEvent(e, i || e.type, t)
            },
            _bringToFront: function(t) {
                var e = t._order,
                    i = e.next,
                    n = e.prev;
                i && (i.prev = n, n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t))
            },
            _bringToBack: function(t) {
                var e = t._order,
                    i = e.next,
                    n = e.prev;
                n && (n.next = i, i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
            }
        }),
        Fn = function() {
            try {
                return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                    function(t) {
                        return document.createElement("<lvml:" + t + ' class="lvml">')
                    }
            } catch (t) {
                return function(t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        Rn = {
            _initContainer: function() {
                this._container = ht("div", "leaflet-vml-container")
            },
            _update: function() {
                this._map._animatingZoom || (On.prototype._update.call(this), this.fire("update"))
            },
            _initPath: function(t) {
                var e = t._container = Fn("shape");
                pt(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = Fn("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t
            },
            _addPath: function(t) {
                var e = t._container;
                this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
            },
            _removePath: function(t) {
                var e = t._container;
                lt(e), t.removeInteractiveTarget(e), delete this._layers[n(t)]
            },
            _updateStyle: function(t) {
                var e = t._stroke,
                    i = t._fill,
                    n = t.options,
                    o = t._container;
                o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = Fn("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = ve(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = Fn("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null)
            },
            _updateCircle: function(t) {
                var e = t._point.round(),
                    i = Math.round(t._radius),
                    n = Math.round(t._radiusY || i);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
            },
            _setPath: function(t, e) {
                t._path.v = e
            },
            _bringToFront: function(t) {
                ct(t._container)
            },
            _bringToBack: function(t) {
                dt(t._container)
            }
        },
        jn = li ? Fn : S,
        Nn = On.extend({
            getEvents: function() {
                var t = On.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart, t
            },
            _initContainer: function() {
                this._container = jn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = jn("g"), this._container.appendChild(this._rootGroup)
            },
            _destroyContainer: function() {
                lt(this._container), q(this._container), delete this._container, delete this._rootGroup
            },
            _onZoomStart: function() {
                this._update()
            },
            _update: function() {
                if (!this._map._animatingZoom || !this._bounds) {
                    On.prototype._update.call(this);
                    var t = this._bounds,
                        e = t.getSize(),
                        i = this._container;
                    this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), wt(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                }
            },
            _initPath: function(t) {
                var e = t._path = jn("path");
                t.options.className && pt(e, t.options.className), t.options.interactive && pt(e, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t
            },
            _addPath: function(t) {
                this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
            },
            _removePath: function(t) {
                lt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)]
            },
            _updatePath: function(t) {
                t._project(), t._update()
            },
            _updateStyle: function(t) {
                var e = t._path,
                    i = t.options;
                e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
            },
            _updatePoly: function(t, e) {
                this._setPath(t, Z(t._parts, e))
            },
            _updateCircle: function(t) {
                var e = t._point,
                    i = t._radius,
                    n = t._radiusY || i,
                    o = "a" + i + "," + n + " 0 1,0 ",
                    s = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + 2 * i + ",0 " + o + 2 * -i + ",0 ";
                this._setPath(t, s)
            },
            _setPath: function(t, e) {
                t._path.setAttribute("d", e)
            },
            _bringToFront: function(t) {
                ct(t._path)
            },
            _bringToBack: function(t) {
                dt(t._path)
            }
        });
    li && Nn.include(Rn), Ii.include({
        getRenderer: function(t) {
            var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return e || (e = this._renderer = this.options.preferCanvas && he() || le()), this.hasLayer(e) || this.addLayer(e), e
        },
        _getPaneRenderer: function(t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var e = this._paneRenderers[t];
            return void 0 === e && (e = Nn && le({
                pane: t
            }) || Dn && he({
                pane: t
            }), this._paneRenderers[t] = e), e
        }
    });
    var Un = Ln.extend({
        initialize: function(t, e) {
            Ln.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function(t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return t = M(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    Nn.create = jn, Nn.pointsToPath = Z, xn.geometryToLayer = Kt, xn.coordsToLatLng = Xt, xn.coordsToLatLngs = Jt, xn.latLngToCoords = $t, xn.latLngsToCoords = Qt, xn.getFeature = te, xn.asFeature = ee, Ii.mergeOptions({
        boxZoom: !0
    });
    var Hn = qi.extend({
        initialize: function(t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
        },
        addHooks: function() {
            V(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            q(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function() {
            return this._moved
        },
        _destroy: function() {
            lt(this._pane), delete this._pane
        },
        _resetState: function() {
            this._resetStateTimeout = 0, this._moved = !1
        },
        _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        },
        _onMouseDown: function(t) {
            return !(!t.shiftKey || 1 !== t.which && 1 !== t.button) && (this._clearDeferredResetState(), this._resetState(), Ee(), Pt(), this._startPoint = this._map.mouseEventToContainerPoint(t), void V(document, {
                contextmenu: Q,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this))
        },
        _onMouseMove: function(t) {
            this._moved || (this._moved = !0, this._box = ht("div", "leaflet-zoom-box", this._container), pt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var e = new b(this._point, this._startPoint),
                i = e.getSize();
            wt(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px"
        },
        _finish: function() {
            this._moved && (lt(this._box), mt(this._container, "leaflet-crosshair")), ke(), Tt(), q(document, {
                contextmenu: Q,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function(t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(i(this._resetState, this), 0);
                var e = new T(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(e).fire("boxzoomend", {
                    boxZoomBounds: e
                })
            }
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
        }
    });
    Ii.addInitHook("addHandler", "boxZoom", Hn), Ii.mergeOptions({
        doubleClickZoom: !0
    });
    var Wn = qi.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function(t) {
            var e = this._map,
                i = e.getZoom(),
                n = e.options.zoomDelta,
                o = t.originalEvent.shiftKey ? i - n : i + n;
            "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
        }
    });
    Ii.addInitHook("addHandler", "doubleClickZoom", Wn), Ii.mergeOptions({
        dragging: !0,
        inertia: !je,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var Vn = qi.extend({
        addHooks: function() {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new Ji(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            pt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
        },
        removeHooks: function() {
            mt(this._map._container, "leaflet-grab"), mt(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        moving: function() {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function() {
            var t = this._map;
            if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var e = M(this._map.options.maxBounds);
                this._offsetLimit = P(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function(t) {
            if (this._map.options.inertia) {
                var e = this._lastTime = +new Date,
                    i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(i), this._times.push(e), e - this._times[0] > 50 && (this._positions.shift(), this._times.shift())
            }
            this._map.fire("move", t).fire("drag", t)
        },
        _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function(t, e) {
            return t - (t - e) * this._viscosity
        },
        _onPreDragLimit: function() {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                    e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
        },
        _onPreDragWrap: function() {
            var t = this._worldWidth,
                e = Math.round(t / 2),
                i = this._initialWorldOffset,
                n = this._draggable._newPos.x,
                o = (n - e + i) % t + e - i,
                s = (n + e + i) % t - e - i,
                r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
        },
        _onDragEnd: function(t) {
            var e = this._map,
                i = e.options,
                n = !i.inertia || this._times.length < 2;
            if (e.fire("dragend", t), n) e.fire("moveend");
            else {
                var o = this._lastPos.subtract(this._positions[0]),
                    s = (this._lastTime - this._times[0]) / 1e3,
                    r = i.easeLinearity,
                    a = o.multiplyBy(r / s),
                    h = a.distanceTo([0, 0]),
                    l = Math.min(i.inertiaMaxSpeed, h),
                    u = a.multiplyBy(l / h),
                    c = l / (i.inertiaDeceleration * r),
                    d = u.multiplyBy(-c / 2).round();
                d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds), f(function() {
                    e.panBy(d, {
                        duration: c,
                        easeLinearity: r,
                        noMoveStart: !0,
                        animate: !0
                    })
                })) : e.fire("moveend")
            }
        }
    });
    Ii.addInitHook("addHandler", "dragging", Vn), Ii.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    var qn = qi.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), V(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function() {
            this._removeHooks(), q(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function() {
            if (!this._focused) {
                var t = document.body,
                    e = document.documentElement,
                    i = t.scrollTop || e.scrollTop,
                    n = t.scrollLeft || e.scrollLeft;
                this._map._container.focus(), window.scrollTo(n, i)
            }
        },
        _onFocus: function() {
            this._focused = !0, this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused = !1, this._map.fire("blur")
        },
        _setPanDelta: function(t) {
            var e, i, n = this._panKeys = {},
                o = this.keyCodes;
            for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
            for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
            for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
            for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t]
        },
        _setZoomDelta: function(t) {
            var e, i, n = this._zoomKeys = {},
                o = this.keyCodes;
            for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
            for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t
        },
        _addHooks: function() {
            V(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            q(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, i = t.keyCode,
                    n = this._map;
                if (i in this._panKeys) {
                    if (n._panAnim && n._panAnim._inProgress) return;
                    e = this._panKeys[i], t.shiftKey && (e = w(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
                } else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                else {
                    if (27 !== i || !n._popup) return;
                    n.closePopup()
                }
                Q(t)
            }
        }
    });
    Ii.addInitHook("addHandler", "keyboard", qn), Ii.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var Gn = qi.extend({
        addHooks: function() {
            V(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function() {
            q(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function(t) {
            var e = et(t),
                n = this._map.options.wheelDebounceTime;
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var o = Math.max(n - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(i(this._performZoom, this), o), Q(t)
        },
        _performZoom: function() {
            var t = this._map,
                e = t.getZoom(),
                i = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                s = i ? Math.ceil(o / i) * i : o,
                r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
            this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r))
        }
    });
    Ii.addInitHook("addHandler", "scrollWheelZoom", Gn), Ii.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    var Yn = qi.extend({
        addHooks: function() {
            V(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function() {
            q(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function(t) {
            if (t.touches) {
                if ($(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var e = t.touches[0],
                    n = e.target;
                this._startPos = this._newPos = new x(e.clientX, e.clientY), n.tagName && "a" === n.tagName.toLowerCase() && pt(n, "leaflet-active"), this._holdTimeout = setTimeout(i(function() {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                }, this), 1e3), this._simulateEvent("mousedown", e), V(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        },
        _onUp: function(t) {
            if (clearTimeout(this._holdTimeout), q(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this), this._fireClick && t && t.changedTouches) {
                var e = t.changedTouches[0],
                    i = e.target;
                i && i.tagName && "a" === i.tagName.toLowerCase() && mt(i, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
            }
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function(t) {
            var e = t.touches[0];
            this._newPos = new x(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
        },
        _simulateEvent: function(t, e) {
            var i = document.createEvent("MouseEvents");
            i._simulated = !0, e.target._simulatedClick = !0, i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i)
        }
    });
    ni && !ii && Ii.addInitHook("addHandler", "tap", Yn), Ii.mergeOptions({
        touchZoom: ni && !je,
        bounceAtZoomLimits: !0
    });
    var Kn = qi.extend({
        addHooks: function() {
            pt(this._map._container, "leaflet-touch-zoom"), V(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            mt(this._map._container, "leaflet-touch-zoom"), q(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                var i = e.mouseEventToContainerPoint(t.touches[0]),
                    n = e.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), V(document, "touchmove", this._onTouchMove, this), V(document, "touchend", this._onTouchEnd, this), $(t)
            }
        },
        _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                    n = e.mouseEventToContainerPoint(t.touches[0]),
                    o = e.mouseEventToContainerPoint(t.touches[1]),
                    s = n.distanceTo(o) / this._startDist;
                if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 === s) return
                } else {
                    var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
                    if (1 === s && 0 === r.x && 0 === r.y) return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
                }
                this._moved || (e._moveStart(!0), this._moved = !0), v(this._animRequest);
                var a = i(e._move, e, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = f(a, this, !0), $(t)
            }
        },
        _onTouchEnd: function() {
            return this._moved && this._zooming ? (this._zooming = !1, v(this._animRequest), q(document, "touchmove", this._onTouchMove), q(document, "touchend", this._onTouchEnd), void(this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))) : void(this._zooming = !1)
        }
    });
    Ii.addInitHook("addHandler", "touchZoom", Kn), Ii.BoxZoom = Hn, Ii.DoubleClickZoom = Wn, Ii.Drag = Vn, Ii.Keyboard = qn, Ii.ScrollWheelZoom = Gn, Ii.Tap = Yn, Ii.TouchZoom = Kn;
    var Xn = window.L;
    window.L = t, Object.freeze = _e, t.version = de, t.noConflict = ce, t.Control = Ai, t.control = Oi, t.Browser = ui, t.Evented = Pe, t.Mixin = Gi, t.Util = we, t.Class = g, t.Handler = qi, t.extend = e, t.bind = i, t.stamp = n, t.setOptions = u, t.DomEvent = Ti, t.DomUtil = Zi, t.PosAnimation = Bi, t.Draggable = Ji, t.LineUtil = $i, t.PolyUtil = Qi, t.Point = x, t.point = w, t.Bounds = b, t.bounds = P, t.Transformation = E, t.transformation = k, t.Projection = nn, t.LatLng = C, t.latLng = z, t.LatLngBounds = T, t.latLngBounds = M, t.CRS = Te, t.GeoJSON = xn, t.geoJSON = ie, t.geoJson = bn, t.Layer = an, t.LayerGroup = hn, t.layerGroup = ln, t.FeatureGroup = un, t.featureGroup = cn, t.ImageOverlay = Pn, t.imageOverlay = Tn, t.VideoOverlay = Mn, t.videoOverlay = ne, t.DivOverlay = Cn, t.Popup = zn, t.popup = En, t.Tooltip = kn, t.tooltip = Sn, t.Icon = dn, t.icon = Ht, t.DivIcon = Zn, t.divIcon = oe, t.Marker = mn, t.marker = Wt, t.TileLayer = In, t.tileLayer = re, t.GridLayer = Bn, t.gridLayer = se, t.SVG = Nn, t.svg = le, t.Renderer = On, t.Canvas = Dn, t.canvas = he, t.Path = fn, t.CircleMarker = vn, t.circleMarker = Vt, t.Circle = gn, t.circle = qt, t.Polyline = yn, t.polyline = Gt, t.Polygon = Ln, t.polygon = Yt, t.Rectangle = Un, t.rectangle = ue, t.Map = Ii, t.map = zt
}), L.Control.Coordinates = L.Control.extend({
        options: {
            position: "bottomright",
            decimals: 4,
            decimalSeperator: ".",
            labelTemplateLat: "X: {y}",
            labelTemplateLng: "Y: {x}",
            labelFormatterLat: void 0,
            labelFormatterLng: void 0,
            enableUserInput: !0,
            useLatLngOrder: !1,
            centerUserCoordinates: !1
        },
        onAdd: function(t) {
            this._map = t;
            var e = "leaflet-control-coordinates",
                i = this._container = L.DomUtil.create("div", e),
                n = this.options;
            this._labelcontainer = L.DomUtil.create("div", "uiElement label", i), this._label = L.DomUtil.create("span", "labelFirst", this._labelcontainer), this._inputcontainer = L.DomUtil.create("div", "uiElement input uiHidden", i);
            var o, s;
            return n.useLatLngOrder ? (s = L.DomUtil.create("span", "", this._inputcontainer), this._inputY = this._createInput("inputY", this._inputcontainer), o = L.DomUtil.create("span", "", this._inputcontainer), this._inputX = this._createInput("inputX", this._inputcontainer)) : (o = L.DomUtil.create("span", "", this._inputcontainer), this._inputX = this._createInput("inputX", this._inputcontainer), s = L.DomUtil.create("span", "", this._inputcontainer), this._inputY = this._createInput("inputY", this._inputcontainer)), o.innerHTML = n.labelTemplateLng.replace("{x}", ""), s.innerHTML = n.labelTemplateLat.replace("{y}", ""), L.DomEvent.on(this._inputX, "keyup", this._handleKeypress, this), L.DomEvent.on(this._inputY, "keyup", this._handleKeypress, this), t.on("mousemove", this._update, this), t.on("dragstart", this.collapse, this), t.whenReady(this._update, this), this._showsCoordinates = !0, n.enableUserInput && L.DomEvent.addListener(this._container, "click", this._switchUI, this), i
        },
        _createInput: function(t, e) {
            var i = L.DomUtil.create("input", t, e);
            return i.type = "text", L.DomEvent.disableClickPropagation(i), i
        },
        _clearMarker: function() {
            this._map.removeLayer(this._marker)
        },
        _handleKeypress: function(t) {
            switch (t.keyCode) {
                case 27:
                    this.collapse();
                    break;
                case 13:
                    this._handleSubmit(), this.collapse();
                    break;
                default:
                    this._handleSubmit()
            }
        },
        _handleSubmit: function() {
            var t = L.NumberFormatter.createValidNumber(this._inputX.value, this.options.decimalSeperator),
                e = L.NumberFormatter.createValidNumber(this._inputY.value, this.options.decimalSeperator);
            if (void 0 !== t && void 0 !== e) {
                var i = this._marker;
                i || (i = this._marker = L.marker(), i.on("click", this._clearMarker, this));
                var n = new L.LatLng(e, t);
                i.setLatLng(n), i.addTo(this._map), this.options.centerUserCoordinates && this._map.setView(n, this._map.getZoom())
            }
        },
        expand: function() {
            this._showsCoordinates = !1, this._map.off("mousemove", this._update, this), L.DomEvent.addListener(this._container, "mousemove", L.DomEvent.stop), L.DomEvent.removeListener(this._container, "click", this._switchUI, this), L.DomUtil.addClass(this._labelcontainer, "uiHidden"), L.DomUtil.removeClass(this._inputcontainer, "uiHidden")
        },
        _createCoordinateLabel: function(t) {
            var e, i, n = this.options;
            return e = n.labelFormatterLng ? n.labelFormatterLng(t.lng) : L.Util.template(n.labelTemplateLng, {
                x: this._getNumber(t.lng, n)
            }), i = n.labelFormatterLat ? n.labelFormatterLat(t.lat) : L.Util.template(n.labelTemplateLat, {
                y: this._getNumber(t.lat, n)
            }), n.useLatLngOrder ? i + " " + e : e + " " + i
        },
        _getNumber: function(t, e) {
            return L.NumberFormatter.round(t, e.decimals, e.decimalSeperator)
        },
        collapse: function() {
            if (!this._showsCoordinates) {
                this._map.on("mousemove", this._update, this), this._showsCoordinates = !0;
                this.options;
                if (L.DomEvent.addListener(this._container, "click", this._switchUI, this), L.DomEvent.removeListener(this._container, "mousemove", L.DomEvent.stop), L.DomUtil.addClass(this._inputcontainer, "uiHidden"), L.DomUtil.removeClass(this._labelcontainer, "uiHidden"), this._marker) {
                    var t = L.marker(),
                        e = this._marker.getLatLng();
                    t.setLatLng(e);
                    var i = L.DomUtil.create("div", ""),
                        n = L.DomUtil.create("div", "", i);
                    n.innerHTML = this._createCoordinateLabel(e);
                    var o = L.DomUtil.create("a", "", i);
                    o.innerHTML = "Remove", o.href = "#";
                    var s = L.DomEvent.stopPropagation;
                    L.DomEvent.on(o, "click", s).on(o, "mousedown", s).on(o, "dblclick", s).on(o, "click", L.DomEvent.preventDefault).on(o, "click", function() {
                        this._map.removeLayer(t)
                    }, this), t.bindPopup(i), t.addTo(this._map), this._map.removeLayer(this._marker), this._marker = null
                }
            }
        },
        _switchUI: function(t) {
            L.DomEvent.stop(t), L.DomEvent.stopPropagation(t), L.DomEvent.preventDefault(t), this._showsCoordinates ? this.expand() : this.collapse()
        },
        onRemove: function(t) {
            t.off("mousemove", this._update, this)
        },
        _update: function(t) {
            var e = t.latlng,
                i = this.options;
            e && (e = e.wrap(), this._currentPos = e, this._inputY.value = L.NumberFormatter.round(e.lat, i.decimals, i.decimalSeperator), this._inputX.value = L.NumberFormatter.round(e.lng, i.decimals, i.decimalSeperator), this._label.innerHTML = this._createCoordinateLabel(e))
        }
    }), L.control.coordinates = function(t) {
        return new L.Control.Coordinates(t)
    }, L.Map.mergeOptions({
        coordinateControl: !1
    }), L.Map.addInitHook(function() {
        this.options.coordinateControl && (this.coordinateControl = new L.Control.Coordinates, this.addControl(this.coordinateControl))
    }), L.NumberFormatter = {
        round: function(t, e, i) {
            var n = L.Util.formatNum(t, e) + "",
                o = n.split(".");
            if (o[1]) {
                for (var s = e - o[1].length; s > 0; s--) o[1] += "0";
                n = o.join(i || ".")
            }
            return n
        },
        createValidNumber: function(t, e) {
            if (t && t.length > 0) {
                var i = t.split(e || ".");
                try {
                    var n = Number(i.join("."));
                    if (isNaN(n)) return;
                    return n
                } catch (o) {
                    return
                }
            }
        }
    }, L.Crosshairs = L.LayerGroup.extend({
        options: {
            style: {
                opacity: 1,
                fillOpacity: 0,
                weight: 2,
                color: "#333",
                clickable: !1,
                pointerEvents: "none"
            }
        },
        initialize: function(t) {
            L.LayerGroup.prototype.initialize.call(this), L.Util.setOptions(this, t), this.crosshair = {
                rectangle: L.rectangle([
                    [0, 0],
                    [1, 1]
                ], this.options.style),
                longitude_line_north: L.polyline([], this.options.style),
                longitude_line_south: L.polyline([], this.options.style),
                latitude_line_east: L.polyline([], this.options.style),
                latitude_line_west: L.polyline([], this.options.style)
            };
            for (var e in this.crosshair) this.addLayer(this.crosshair[e])
        },
        onAdd: function(t) {
            this._map = t, this._moveCrosshairs({
                latlng: this._map.getCenter()
            }), this._map.on("click", this._moveCrosshairs.bind(this)), this._map.on("move", this._moveCrosshairs.bind(this)), this._map.on("zoomend", this._moveCrosshairs.bind(this)), this._map.on("mouseover", this._show.bind(this)), this.eachLayer(t.addLayer, t)
        },
        onRemove: function(t) {
            this._map.off("click", this._moveCrosshairs), this._map.off("zoomend", this._moveCrosshairs), this.eachLayer(this.removeLayer, this)
        },
        _show: function() {
            this.eachLayer(function(t) {
                this._map.addLayer(t)
            }, this)
        },
        _hide: function() {
            this.eachLayer(function(t) {
                this._map.removeLayer(t)
            }, this)
        },
        _moveCrosshairs: function(t) {
            var e;
            if (t.latlng) {
                var i = this._map.project(t.latlng, 0),
                    n = Math.floor(i.x),
                    o = Math.floor(i.y);
                e = L.latLngBounds(this._map.unproject([n, o], 0), this._map.unproject([n + 1, o + 1], 0))
            } else e = this.crosshair.rectangle.getBounds();
            var s = e.getCenter();
            this.crosshair.rectangle.setBounds(e);
            var r = this._map.project(s);
            this.crosshair.longitude_line_north.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([r.x, this._map.getPixelBounds().min.y])]), this.crosshair.longitude_line_south.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([r.x, this._map.getPixelBounds().max.y])]), this.crosshair.latitude_line_east.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([this._map.getPixelBounds().min.x, r.y])]), this.crosshair.latitude_line_west.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([this._map.getPixelBounds().max.x, r.y])])
        }
    }), L.crosshairs = function(t) {
        return new L.Crosshairs(t)
    }, L.LevelButtons = L.Control.extend({
        options: {
            position: "topleft",
            autoZIndex: !0
        },
        onAdd: function(t) {
            this._map = t;
            var e = L.DomUtil.create("div", "leaflet-control-level-buttons-panel leaflet-bar"),
                i = L.DomUtil.create("a", "leaflet-control-level-buttons-a", e);
            i.textContent = "▲", i.href = "#", L.DomEvent.addListener(i, "click", this._onUpButton, this), L.DomEvent.disableClickPropagation(i), e.appendChild(i);
            var n = L.DomUtil.create("a", "leaflet-control-level-buttons-a", e);
            return n.textContent = "▼", n.href = "#", L.DomEvent.addListener(n, "click", this._onDownButton, this), L.DomEvent.disableClickPropagation(n), e.appendChild(n), e
        },
        onRemove: function() {},
        _onUpButton: function(t) {
            var e = this._tibia_map_obj.floor - 1;
            e >= 0 && this._bringToFront(e), t.preventDefault()
        },
        _onDownButton: function(t) {
            var e = this._tibia_map_obj.floor + 1;
            e <= 15 && this._bringToFront(e), t.preventDefault()
        },
        setTibiaMap: function(t) {
            this._tibia_map_obj = t
        },
        _bringToFront: function(t) {
            this.options.layers_widget._form[t].click()
        }
    }), L.levelButtons = function(t) {
        return new L.LevelButtons(t)
    }, L.Control.Fullscreen = L.Control.extend({
        options: {
            position: "topleft",
            title: {
                "false": "View Fullscreen",
                "true": "Exit Fullscreen"
            }
        },
        onAdd: function(t) {
            var e = L.DomUtil.create("div", "leaflet-control-fullscreen leaflet-bar leaflet-control");
            return this.link = L.DomUtil.create("a", "leaflet-control-fullscreen-button leaflet-bar-part", e), this.link.href = "#", this._map = t, this._map.on("fullscreenchange", this._toggleTitle, this), this._toggleTitle(), L.DomEvent.on(this.link, "click", this._click, this), e
        },
        _click: function(t) {
            L.DomEvent.stopPropagation(t), L.DomEvent.preventDefault(t), this._map.toggleFullscreen(this.options)
        },
        _toggleTitle: function() {
            this.link.title = this.options.title[this._map.isFullscreen()]
        }
    }), L.Map.include({
        isFullscreen: function() {
            return this._isFullscreen || !1
        },
        toggleFullscreen: function(t) {
            var e = this.getContainer();
            this.isFullscreen() ? t && t.pseudoFullscreen ? this._disablePseudoFullscreen(e) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : this._disablePseudoFullscreen(e) : t && t.pseudoFullscreen ? this._enablePseudoFullscreen(e) : e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : e.msRequestFullscreen ? e.msRequestFullscreen() : this._enablePseudoFullscreen(e)
        },
        _enablePseudoFullscreen: function(t) {
            L.DomUtil.addClass(t, "leaflet-pseudo-fullscreen"), this._setFullscreen(!0), this.fire("fullscreenchange")
        },
        _disablePseudoFullscreen: function(t) {
            L.DomUtil.removeClass(t, "leaflet-pseudo-fullscreen"), this._setFullscreen(!1), this.fire("fullscreenchange")
        },
        _setFullscreen: function(t) {
            this._isFullscreen = t;
            var e = this.getContainer();
            t ? L.DomUtil.addClass(e, "leaflet-fullscreen-on") : L.DomUtil.removeClass(e, "leaflet-fullscreen-on"), this.invalidateSize()
        },
        _onFullscreenChange: function(t) {
            var e = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
            e !== this.getContainer() || this._isFullscreen ? e !== this.getContainer() && this._isFullscreen && (this._setFullscreen(!1), this.fire("fullscreenchange")) : (this._setFullscreen(!0), this.fire("fullscreenchange"))
        }
    }), L.Map.mergeOptions({
        fullscreenControl: !1
    }), L.Map.addInitHook(function() {
        this.options.fullscreenControl && (this.fullscreenControl = new L.Control.Fullscreen(this.options.fullscreenControl), this.addControl(this.fullscreenControl));
        var t;
        if ("onfullscreenchange" in document ? t = "fullscreenchange" : "onmozfullscreenchange" in document ? t = "mozfullscreenchange" : "onwebkitfullscreenchange" in document ? t = "webkitfullscreenchange" : "onmsfullscreenchange" in document && (t = "MSFullscreenChange"), t) {
            var e = L.bind(this._onFullscreenChange, this);
            this.whenReady(function() {
                L.DomEvent.on(document, t, e)
            }), this.on("unload", function() {
                L.DomEvent.off(document, t, e)
            })
        }
    }), L.control.fullscreen = function(t) {
        return new L.Control.Fullscreen(t)
    },
    function() {
        function t() {
            this.map = null, this.floor = 7, this.mapFloors = [], this.mapDataStore = [], this.waypoints = []
        }
        var e = "./mapas/",
            i = null,
            n = function() {
                var t = new XMLHttpRequest;
                t.open("GET", e + "./js/tiles.json", !0), t.responseType = "json", t.onload = function() {
                    200 == t.status && (i = new Set(t.response))
                }, t.send()
            };
        n();
        var o = location.pathname.indexOf("/embed") != -1,
            s = function(t, e) {
                var i = "#" + t.x + "," + t.y + "," + t.floor + ":" + t.zoom;
                e && location.hash != i && window.history.pushState(null, null, i)
            },
            r = function() {
                var t = {
                        x: 33080, //Coordenada X padrão
                        y: 32104, //Coordenada Y padrão
                        floor: 7, //Andar padrão
                        zoom: 0   //Zoom do mapa
                    },
                    e = window.location.hash.slice(1).split(":");
                if (e[0]) {
                    var i = e[0].split(",");
                    3 == i.length && (t.x = parseInt(i[0], 10), t.y = parseInt(i[1], 10), t.floor = parseInt(i[2], 10))
                }
                return e[1] && (t.zoom = parseInt(e[1], 10)), t
            },
            a = function() {
                L.CRS.CustomZoom = L.extend({}, L.CRS.Simple, {
                    scale: function(t) {
                        switch (t) {
                            case 0:
                                return 256;
                            case 1:
                                return 512;
                            case 2:
                                return 1792;
                            case 3:
                                return 5120;
                            case 4:
                                return 10240;
                            default:
                                return 256
                        }
                    },
                    latLngToPoint: function(t, e) {
                        var i = this.projection.project(t),
                            n = this.scale(e);
                        return this.transformation._transform(i, n)
                    },
                    pointToLatLng: function(t, e) {
                        var i = this.scale(e),
                            n = this.transformation.untransform(t, i);
                        return this.projection.unproject(n)
                    }
                })
            };
        t.prototype._createMapFloorLayer = function(t) {
            var n = this.mapFloors[t] = new L.GridLayer({
                floor: t
            });
            this.map;
            return n.getTileSize = function() {
                var t = L.GridLayer.prototype.getTileSize.call(this),
                    e = this._tileZoom;
                return e > 0 ? t.divideBy(this._map.getZoomScale(0, e)).round() : t
            }, n._setZoomTransform = function(t, e, i) {
                var n = r();
                n.zoom = i, s(n, !1);
                var o = this._map.getZoomScale(i, t.zoom),
                    a = t.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(e, i)).round();
                L.DomUtil.setTransform(t.el, a, o)
            }, n.createTile = function(t, n) {
                var o = document.createElement("canvas"),
                    s = o.getContext("2d");
                o.width = o.height = 256;
                var r = 256 * t.x + "_" + 256 * t.y + "_" + this.options.floor;
                if (i && !i.has(r)) return s.fillStyle = "#000", s.fillRect(0, 0, 256, 256), o;
                s.imageSmoothingEnabled = !1;
                var a = new Image;
                return a.onload = function() {
                    s.drawImage(a, 0, 0, 256, 256), n(null, o)
                }, a.src = e + "Minimap_Color_" + r + ".png", o
            }, n
        }, t.prototype._showHoverTile = function() {
            var t = this.map,
                e = this;
            t.on("mouseout", function(t) {
                e.hoverTile.setBounds([
                    [0, 0],
                    [0, 0]
                ])
            }), t.on("mousemove", function(i) {
                var n = t.project(i.latlng, 0),
                    o = Math.floor(n.x),
                    s = Math.floor(n.y),
                    r = [t.unproject([o, s], 0), t.unproject([o + 1, s + 1], 0)];
                e.hoverTile ? e.hoverTile.setBounds(r) : e.hoverTile = L.rectangle(r, {
                    color: "#009eff",
                    weight: 1,
                    clickable: !1,
                    pointerEvents: "none"
                }).addTo(t)
            })
        }, t.prototype.init = function() {
            var t = this;
            a();
            var e = {
                    xMin: 124,
                    xMax: 132,
                    yMin: 121,
                    yMax: 128
                },
                i = window.innerWidth / 256 / 2,
                n = window.innerHeight / 256 / 2,
                h = e.yMin - n,
                l = e.xMin - i,
                u = e.yMax + 1 + n,
                c = e.xMax + 1 + i,
                d = L.latLngBounds(L.latLng(-h, l), L.latLng(-u, c)),
                _ = t.map = L.map("map", {
                    attributionControl: !1,
                    crs: L.CRS.CustomZoom,
                    fadeAnimation: !1,
                    keyboardPanOffset: 400,
                    maxBounds: d,
                    maxNativeZoom: 0,
                    maxZoom: 4,
                    minZoom: 0,
                    scrollWheelZoom: !o,
                    unloadInvisibleTiles: !1,
                    updateWhenIdle: !0,
                    zoomAnimationThreshold: 4
                });
            L.control.fullscreen({
                title: {
                    "false": o ? "Explore this area in the map viewer" : "View fullscreen",
                    "true": "Exit fullscreen"
                },
                pseudoFullscreen: !0
            }).addTo(_);
            var p = {
                    "Floor +7": t._createMapFloorLayer(0),
                    "Floor +6": t._createMapFloorLayer(1),
                    "Floor +5": t._createMapFloorLayer(2),
                    "Floor +4": t._createMapFloorLayer(3),
                    "Floor +3": t._createMapFloorLayer(4),
                    "Floor +2": t._createMapFloorLayer(5),
                    "Floor +1": t._createMapFloorLayer(6),
                    "Ground floor": t._createMapFloorLayer(7),
                    "Floor -1": t._createMapFloorLayer(8),
                    "Floor -2": t._createMapFloorLayer(9),
                    "Floor -3": t._createMapFloorLayer(10),
                    "Floor -4": t._createMapFloorLayer(11),
                    "Floor -5": t._createMapFloorLayer(12),
                    "Floor -6": t._createMapFloorLayer(13),
                    "Floor -7": t._createMapFloorLayer(14),
                    "Floor -8": t._createMapFloorLayer(15)
                },
                m = L.control.layers(p, {}).addTo(_),
                f = r();
            t.floor = f.floor, _.setView(_.unproject([f.x, f.y], 0), f.zoom), t.mapFloors[f.floor].addTo(_), window.addEventListener("popstate", function(e) {
                var i = r();
                i.floor !== t.floor && (t.floor = i.floor, t.mapFloors[t.floor].addTo(_)), i.zoom !== _.getZoom() && _.setZoom(i.zoom), _.panTo(_.unproject([i.x, i.y], 0))
            }), _.on("baselayerchange", function(e) {
                t.floor = e.layer.options.floor
            }), _.on("click", function(e) {
                var i = L.CRS.CustomZoom.latLngToPoint(e.latlng, 0),
                    n = _.getZoom(),
                    o = Math.floor(Math.abs(i.x)),
                    r = Math.floor(Math.abs(i.y));
                s({
                    x: o,
                    y: r,
                    floor: t.floor,
                    zoom: n
                }, !0)
            }), L.crosshairs().addTo(_), L.control.coordinates({
                position: "bottomleft",
                enableUserInput: !1,
                labelFormatterLat: function(e) {
                    var i = Math.floor(Math.abs(256 * e));
                    return "<b>Y</b>: " + i + " <b>Z</b>: " + t.floor
                },
                labelFormatterLng: function(t) {
                    var e = Math.floor(Math.abs(256 * t));
                    return "<b>X</b>: " + e
                }
            }).addTo(_), L.LevelButtons.btns = L.levelButtons({
                layers_widget: m
            }).addTo(_), t._showHoverTile()
        };
        var h = new t;
        h.init(), L.LevelButtons.btns.setTibiaMap(h);
        var l = function(t) {
                var e = document.createEvent("MouseEvents");
                e.initMouseEvent("click"), t.dispatchEvent(e)
            },
            u = function(t) {
                return t.replace("/embed", "")
            },
            c = document.querySelector(".leaflet-control-fullscreen-button");
        o ? (c.href = u(location.href), c.addEventListener("click", function(t) {
            window.top.location = u(location.href), t.stopPropagation()
        })) : (c.href = "javascript:null", document.documentElement.addEventListener("keydown", function(t) {
            var e = h.map;
            if ((70 == t.keyCode || 27 == t.keyCode && e.isFullscreen()) && l(c), 67 == t.keyCode) {
                var i = r();
                e.panTo(e.unproject([i.x, i.y], 0))
            }
        }))
    }()