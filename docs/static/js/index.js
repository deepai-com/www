function t() {
    this.handlers = {}
}

function e() {
    var t = $(window).scrollTop(), e = t - c;
    c = t, e < 0 ? $("#navbar").removeClass("navbar-bg") : e > 0 && $("#navbar").addClass("navbar-bg")
}

function i() {
    u = document.documentElement.clientHeight, h = -u / 2, $("#bg-fix").css("height", u + "px"), $("#section-slogan").css("height", u + "px")
}

function n(t) {
    i(), d.offset(h), m.offset(h), g.offset(h), v.offset(h), _.offset(h), y.offset(h), p.removeTween(!0), "tablet" !== t && "phone" !== t || (p.duration(u), p.offset(h), p.setTween("#bg-fix", {opacity: "0"}))
}

if (!function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function i(t) {
            var e = t.length, i = rt.type(t);
            return "function" !== i && !rt.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }

        function n(t, e, i) {
            if (rt.isFunction(e)) return rt.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return rt.grep(t, function (t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (ft.test(e)) return rt.filter(e, t, i);
                e = rt.filter(e, t)
            }
            return rt.grep(t, function (t) {
                return rt.inArray(t, e) >= 0 !== i
            })
        }

        function r(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function o(t) {
            var e = bt[t] = {};
            return rt.each(t.match(yt) || [], function (t, i) {
                e[i] = !0
            }), e
        }

        function s() {
            dt.addEventListener ? (dt.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (dt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (dt.addEventListener || "load" === event.type || "complete" === dt.readyState) && (s(), rt.ready())
        }

        function l(t, e, i) {
            if (void 0 === i && 1 === t.nodeType) {
                var n = "data-" + e.replace(Ct, "-$1").toLowerCase();
                if (i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : St.test(i) ? rt.parseJSON(i) : i)
                    } catch (r) {
                    }
                    rt.data(t, e, i)
                } else i = void 0
            }
            return i
        }

        function c(t) {
            var e;
            for (e in t) if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function u(t, e, i, n) {
            if (rt.acceptData(t)) {
                var r, o, s = rt.expando, a = t.nodeType, l = a ? rt.cache : t, c = a ? t[s] : t[s] && s;
                if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e) return c || (c = a ? t[s] = V.pop() || rt.guid++ : s), l[c] || (l[c] = a ? {} : {toJSON: rt.noop}), ("object" == typeof e || "function" == typeof e) && (n ? l[c] = rt.extend(l[c], e) : l[c].data = rt.extend(l[c].data, e)), o = l[c], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[rt.camelCase(e)] = i), "string" == typeof e ? (r = o[e], null == r && (r = o[rt.camelCase(e)])) : r = o, r
            }
        }

        function h(t, e, i) {
            if (rt.acceptData(t)) {
                var n, r, o = t.nodeType, s = o ? rt.cache : t, a = o ? t[rt.expando] : rt.expando;
                if (s[a]) {
                    if (e && (n = i ? s[a] : s[a].data)) {
                        rt.isArray(e) ? e = e.concat(rt.map(e, rt.camelCase)) : e in n ? e = [e] : (e = rt.camelCase(e), e = e in n ? [e] : e.split(" ")), r = e.length;
                        for (; r--;) delete n[e[r]];
                        if (i ? !c(n) : !rt.isEmptyObject(n)) return
                    }
                    (i || (delete s[a].data, c(s[a]))) && (o ? rt.cleanData([t], !0) : it.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
                }
            }
        }

        function f() {
            return !0
        }

        function p() {
            return !1
        }

        function d() {
            try {
                return dt.activeElement
            } catch (t) {
            }
        }

        function m(t) {
            var e = Mt.split("|"), i = t.createDocumentFragment();
            if (i.createElement) for (; e.length;) i.createElement(e.pop());
            return i
        }

        function g(t, e) {
            var i, n, r = 0,
                o = typeof t.getElementsByTagName !== Tt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Tt ? t.querySelectorAll(e || "*") : void 0;
            if (!o) for (o = [], i = t.childNodes || t; null != (n = i[r]); r++) !e || rt.nodeName(n, e) ? o.push(n) : rt.merge(o, g(n, e));
            return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], o) : o
        }

        function v(t) {
            Dt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function _(t, e) {
            return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function y(t) {
            return t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type, t
        }

        function b(t) {
            var e = Yt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function w(t, e) {
            for (var i, n = 0; null != (i = t[n]); n++) rt._data(i, "globalEval", !e || rt._data(e[n], "globalEval"))
        }

        function x(t, e) {
            if (1 === e.nodeType && rt.hasData(t)) {
                var i, n, r, o = rt._data(t), s = rt._data(e, o), a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (i in a) for (n = 0, r = a[i].length; r > n; n++) rt.event.add(e, i, a[i][n])
                }
                s.data && (s.data = rt.extend({}, s.data))
            }
        }

        function T(t, e) {
            var i, n, r;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !it.noCloneEvent && e[rt.expando]) {
                    r = rt._data(e);
                    for (n in r.events) rt.removeEvent(e, n, r.handle);
                    e.removeAttribute(rt.expando)
                }
                "script" === i && e.text !== t.text ? (y(e).text = t.text, b(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), it.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Dt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
            }
        }

        function S(e, i) {
            var n, r = rt(i.createElement(e)).appendTo(i.body),
                o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : rt.css(r[0], "display");
            return r.detach(), o
        }

        function C(t) {
            var e = dt, i = Kt[t];
            return i || (i = S(t, e), "none" !== i && i || (Jt = (Jt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), i = S(t, e), Jt.detach()), Kt[t] = i), i
        }

        function k(t, e) {
            return {
                get: function () {
                    var i = t();
                    if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function A(t, e) {
            if (e in t) return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = fe.length; r--;) if (e = fe[r] + i, e in t) return e;
            return n
        }

        function E(t, e) {
            for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (o[s] = rt._data(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Et(n) && (o[s] = rt._data(n, "olddisplay", C(n.nodeName)))) : (r = Et(n), (i && "none" !== i || !r) && rt._data(n, "olddisplay", r ? i : rt.css(n, "display"))));
            for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function P(t, e, i) {
            var n = le.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function D(t, e, i, n, r) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === i && (s += rt.css(t, i + At[o], !0, r)), n ? ("content" === i && (s -= rt.css(t, "padding" + At[o], !0, r)), "margin" !== i && (s -= rt.css(t, "border" + At[o] + "Width", !0, r))) : (s += rt.css(t, "padding" + At[o], !0, r), "padding" !== i && (s += rt.css(t, "border" + At[o] + "Width", !0, r)));
            return s
        }

        function N(t, e, i) {
            var n = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = te(t),
                s = it.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = ee(t, e, o), (0 > r || null == r) && (r = t.style[e]), ne.test(r)) return r;
                n = s && (it.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + D(t, e, i || (s ? "border" : "content"), n, o) + "px"
        }

        function O(t, e, i, n, r) {
            return new O.prototype.init(t, e, i, n, r)
        }

        function R() {
            return setTimeout(function () {
                pe = void 0
            }), pe = rt.now()
        }

        function $(t, e) {
            var i, n = {height: t}, r = 0;
            for (e = e ? 1 : 0; 4 > r; r += 2 - e) i = At[r], n["margin" + i] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t), n
        }

        function L(t, e, i) {
            for (var n, r = (ye[e] || []).concat(ye["*"]), o = 0, s = r.length; s > o; o++) if (n = r[o].call(i, e, t)) return n
        }

        function M(t, e, i) {
            var n, r, o, s, a, l, c, u, h = this, f = {}, p = t.style, d = t.nodeType && Et(t),
                m = rt._data(t, "fxshow");
            i.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, h.always(function () {
                h.always(function () {
                    a.unqueued--, rt.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = rt.css(t, "display"), u = "none" === c ? rt._data(t, "olddisplay") || C(t.nodeName) : c, "inline" === u && "none" === rt.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", it.shrinkWrapBlocks() || h.always(function () {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            }));
            for (n in e) if (r = e[n], me.exec(r)) {
                if (delete e[n], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n]) continue;
                    d = !0
                }
                f[n] = m && m[n] || rt.style(t, n)
            } else c = void 0;
            if (rt.isEmptyObject(f)) "inline" === ("none" === c ? C(t.nodeName) : c) && (p.display = c); else {
                m ? "hidden" in m && (d = m.hidden) : m = rt._data(t, "fxshow", {}), o && (m.hidden = !d), d ? rt(t).show() : h.done(function () {
                    rt(t).hide()
                }), h.done(function () {
                    var e;
                    rt._removeData(t, "fxshow");
                    for (e in f) rt.style(t, e, f[e])
                });
                for (n in f) s = L(d ? m[n] : 0, n, h), n in m || (m[n] = s.start, d && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function I(t, e) {
            var i, n, r, o, s;
            for (i in t) if (n = rt.camelCase(i), r = e[n], o = t[i], rt.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), s = rt.cssHooks[n], s && "expand" in s) {
                o = s.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = r)
            } else e[n] = r
        }

        function j(t, e, i) {
            var n, r, o = 0, s = _e.length, a = rt.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (r) return !1;
                for (var e = pe || R(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1)
            }, c = a.promise({
                elem: t,
                props: rt.extend({}, e),
                opts: rt.extend(!0, {specialEasing: {}}, i),
                originalProperties: e,
                originalOptions: i,
                startTime: pe || R(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = rt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (e) {
                    var i = 0, n = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (I(u, c.opts.specialEasing); s > o; o++) if (n = _e[o].call(c, t, u, c.opts)) return n;
            return rt.map(u, L, c), rt.isFunction(c.opts.start) && c.opts.start.call(t, c), rt.fx.timer(rt.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function F(t) {
            return function (e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0, o = e.toLowerCase().match(yt) || [];
                if (rt.isFunction(i)) for (; n = o[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function z(t, e, i, n) {
            function r(a) {
                var l;
                return o[a] = !0, rt.each(t[a] || [], function (t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), l
            }

            var o = {}, s = t === qe;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function B(t, e) {
            var i, n, r = rt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && rt.extend(!0, t, i), t
        }

        function H(t, e, i) {
            for (var n, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r) for (s in a) if (a[s] && a[s].test(r)) {
                l.unshift(s);
                break
            }
            if (l[0] in i) o = l[0]; else {
                for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        o = s;
                        break
                    }
                    n || (n = s)
                }
                o = o || n
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
        }

        function q(t, e, i, n) {
            var r, o, s, a, l, c = {}, u = t.dataTypes.slice();
            if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (o = u.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                if (s = c[l + " " + o] || c["* " + o], !s) for (r in c) if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                    break
                }
                if (s !== !0) if (s && t["throws"]) e = s(e); else try {
                    e = s(e)
                } catch (h) {
                    return {state: "parsererror", error: s ? h : "No conversion from " + l + " to " + o}
                }
            }
            return {state: "success", data: e}
        }

        function U(t, e, i, n) {
            var r;
            if (rt.isArray(e)) rt.each(e, function (e, r) {
                i || Ye.test(t) ? n(t, r) : U(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
            }); else if (i || "object" !== rt.type(e)) n(t, e); else for (r in e) U(t + "[" + r + "]", e[r], i, n)
        }

        function X() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {
            }
        }

        function W() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function Y(t) {
            return rt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }

        var V = [], Q = V.slice, G = V.concat, Z = V.push, J = V.indexOf, K = {}, tt = K.toString,
            et = K.hasOwnProperty, it = {}, nt = "1.11.2", rt = function (t, e) {
                return new rt.fn.init(t, e)
            }, ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, st = /^-ms-/, at = /-([\da-z])/gi, lt = function (t, e) {
                return e.toUpperCase()
            };
        rt.fn = rt.prototype = {
            jquery: nt, constructor: rt, selector: "", length: 0, toArray: function () {
                return Q.call(this)
            }, get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
            }, pushStack: function (t) {
                var e = rt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t, e) {
                return rt.each(this, t, e)
            }, map: function (t) {
                return this.pushStack(rt.map(this, function (e, i) {
                    return t.call(e, i, e)
                }))
            }, slice: function () {
                return this.pushStack(Q.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: Z, sort: V.sort, splice: V.splice
        }, rt.extend = rt.fn.extend = function () {
            var t, e, i, n, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (r = arguments[a])) for (n in r) t = s[n], i = r[n], s !== i && (c && i && (rt.isPlainObject(i) || (e = rt.isArray(i))) ? (e ? (e = !1, o = t && rt.isArray(t) ? t : []) : o = t && rt.isPlainObject(t) ? t : {}, s[n] = rt.extend(c, o, i)) : void 0 !== i && (s[n] = i));
            return s
        }, rt.extend({
            expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === rt.type(t)
            }, isArray: Array.isArray || function (t) {
                return "array" === rt.type(t)
            }, isWindow: function (t) {
                return null != t && t == t.window
            }, isNumeric: function (t) {
                return !rt.isArray(t) && t - parseFloat(t) + 1 >= 0
            }, isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }, isPlainObject: function (t) {
                var e;
                if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (i) {
                    return !1
                }
                if (it.ownLast) for (e in t) return et.call(t, e);
                for (e in t) ;
                return void 0 === e || et.call(t, e)
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[tt.call(t)] || "object" : typeof t
            }, globalEval: function (e) {
                e && rt.trim(e) && (t.execScript || function (e) {
                    t.eval.call(t, e)
                })(e)
            }, camelCase: function (t) {
                return t.replace(st, "ms-").replace(at, lt)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e, n) {
                var r, o = 0, s = t.length, a = i(t);
                if (n) {
                    if (a) for (; s > o && (r = e.apply(t[o], n), r !== !1); o++) ; else for (o in t) if (r = e.apply(t[o], n), r === !1) break
                } else if (a) for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++) ; else for (o in t) if (r = e.call(t[o], o, t[o]), r === !1) break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(ot, "")
            }, makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? rt.merge(n, "string" == typeof t ? [t] : t) : Z.call(n, t)), n
            }, inArray: function (t, e, i) {
                var n;
                if (e) {
                    if (J) return J.call(e, t, i);
                    for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++) if (i in e && e[i] === t) return i
                }
                return -1
            }, merge: function (t, e) {
                for (var i = +e.length, n = 0, r = t.length; i > n;) t[r++] = e[n++];
                if (i !== i) for (; void 0 !== e[n];) t[r++] = e[n++];
                return t.length = r, t
            }, grep: function (t, e, i) {
                for (var n, r = [], o = 0, s = t.length, a = !i; s > o; o++) n = !e(t[o], o), n !== a && r.push(t[o]);
                return r
            }, map: function (t, e, n) {
                var r, o = 0, s = t.length, a = i(t), l = [];
                if (a) for (; s > o; o++) r = e(t[o], o, n), null != r && l.push(r); else for (o in t) r = e(t[o], o, n), null != r && l.push(r);
                return G.apply([], l)
            }, guid: 1, proxy: function (t, e) {
                var i, n, r;
                return "string" == typeof e && (r = t[e], e = t, t = r), rt.isFunction(t) ? (i = Q.call(arguments, 2), n = function () {
                    return t.apply(e || this, i.concat(Q.call(arguments)))
                }, n.guid = t.guid = t.guid || rt.guid++, n) : void 0
            }, now: function () {
                return +new Date
            }, support: it
        }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            K["[object " + e + "]"] = e.toLowerCase()
        });
        var ct = function (t) {
            function e(t, e, i, n) {
                var r, o, s, a, l, c, h, p, d, m;
                if ((e ? e.ownerDocument || e : z) !== O && N(e), e = e || O, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && $) {
                    if (11 !== a && (r = _t.exec(t))) if (s = r[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o || !o.parentNode) return i;
                            if (o.id === s) return i.push(o), i
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && j(e, o) && o.id === s) return i.push(o), i
                    } else {
                        if (r[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = r[3]) && w.getElementsByClassName) return J.apply(i, e.getElementsByClassName(s)), i
                    }
                    if (w.qsa && (!L || !L.test(t))) {
                        if (p = h = F, d = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = C(t), (h = e.getAttribute("id")) ? p = h.replace(bt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
                            d = yt.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m) try {
                            return J.apply(i, d.querySelectorAll(m)), i
                        } catch (g) {
                        } finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return A(t.replace(lt, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                }

                var e = [];
                return t
            }

            function n(t) {
                return t[F] = !0, t
            }

            function r(t) {
                var e = O.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
            }

            function s(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                if (n) return n;
                if (i) for (; i = i.nextSibling;) if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function c(t) {
                return n(function (e) {
                    return e = +e, n(function (i, n) {
                        for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function h() {
            }

            function f(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir, r = i && "parentNode" === n, o = H++;
                return e.first ? function (e, i, o) {
                    for (; e = e[n];) if (1 === e.nodeType || r) return t(e, i, o)
                } : function (e, i, s) {
                    var a, l, c = [B, o];
                    if (s) {
                        for (; e = e[n];) if ((1 === e.nodeType || r) && t(e, i, s)) return !0
                    } else for (; e = e[n];) if (1 === e.nodeType || r) {
                        if (l = e[F] || (e[F] = {}), (a = l[n]) && a[0] === B && a[1] === o) return c[2] = a[2];
                        if (l[n] = c, c[2] = t(e, i, s)) return !0
                    }
                }
            }

            function d(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var r = t.length; r--;) if (!t[r](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
                return n
            }

            function g(t, e, i, n, r) {
                for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++) (o = t[a]) && (!i || i(o, n, r)) && (s.push(o), c && e.push(a));
                return s
            }

            function v(t, e, i, r, o, s) {
                return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, s)), n(function (n, s, a, l) {
                    var c, u, h, f = [], p = [], d = s.length, v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        _ = !t || !n && e ? v : g(v, f, t, a, l), y = i ? o || (n ? t : d || r) ? [] : s : _;
                    if (i && i(_, y, a, l), r) for (c = g(y, p), r(c, [], a, l), u = c.length; u--;) (h = c[u]) && (y[p[u]] = !(_[p[u]] = h));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = y.length; u--;) (h = y[u]) && c.push(_[u] = h);
                                o(null, y = [], c, l)
                            }
                            for (u = y.length; u--;) (h = y[u]) && (c = o ? tt(n, h) : f[u]) > -1 && (n[c] = !(s[c] = h))
                        }
                    } else y = g(y === s ? y.splice(d, y.length) : y), o ? o(null, s, y, l) : J.apply(s, y)
                })
            }

            function _(t) {
                for (var e, i, n, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = p(function (t) {
                    return t === e
                }, s, !0), c = p(function (t) {
                    return tt(e, t) > -1
                }, s, !0), u = [function (t, i, n) {
                    var r = !o && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                    return e = null, r
                }]; r > a; a++) if (i = x.relative[t[a].type]) u = [p(d(u), i)]; else {
                    if (i = x.filter[t[a].type].apply(null, t[a].matches), i[F]) {
                        for (n = ++a; r > n && !x.relative[t[n].type]; n++) ;
                        return v(a > 1 && d(u), a > 1 && f(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(lt, "$1"), i, n > a && _(t.slice(a, n)), r > n && _(t = t.slice(n)), r > n && f(t))
                    }
                    u.push(i)
                }
                return d(u)
            }

            function y(t, i) {
                var r = i.length > 0, o = t.length > 0, s = function (n, s, a, l, c) {
                    var u, h, f, p = 0, d = "0", m = n && [], v = [], _ = E, y = n || o && x.find.TAG("*", c),
                        b = B += null == _ ? 1 : Math.random() || .1, w = y.length;
                    for (c && (E = s !== O && s); d !== w && null != (u = y[d]); d++) {
                        if (o && u) {
                            for (h = 0; f = t[h++];) if (f(u, s, a)) {
                                l.push(u);
                                break
                            }
                            c && (B = b)
                        }
                        r && ((u = !f && u) && p--, n && m.push(u))
                    }
                    if (p += d, r && d !== p) {
                        for (h = 0; f = i[h++];) f(m, v, s, a);
                        if (n) {
                            if (p > 0) for (; d--;) m[d] || v[d] || (v[d] = G.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (B = b, E = _), m
                };
                return r ? n(s) : s
            }

            var b, w, x, T, S, C, k, A, E, P, D, N, O, R, $, L, M, I, j, F = "sizzle" + 1 * new Date, z = t.document,
                B = 0, H = 0, q = i(), U = i(), X = i(), W = function (t, e) {
                    return t === e && (D = !0), 0
                }, Y = 1 << 31, V = {}.hasOwnProperty, Q = [], G = Q.pop, Z = Q.push, J = Q.push, K = Q.slice,
                tt = function (t, e) {
                    for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = nt.replace("w", "w#"),
                ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
                st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                at = new RegExp(it + "+", "g"),
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ct = new RegExp("^" + it + "*," + it + "*"),
                ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), ft = new RegExp(st),
                pt = new RegExp("^" + rt + "$"), dt = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/,
                _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, bt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), xt = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                }, Tt = function () {
                    N()
                };
            try {
                J.apply(Q = K.call(z.childNodes), z.childNodes), Q[z.childNodes.length].nodeType
            } catch (St) {
                J = {
                    apply: Q.length ? function (t, e) {
                        Z.apply(t, K.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                        t.length = i - 1
                    }
                }
            }
            w = e.support = {}, S = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, N = e.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : z;
                return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, R = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), $ = !S(n), w.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function (t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = vt.test(n.getElementsByClassName), w.getById = r(function (t) {
                    return R.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
                }), w.getById ? (x.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && $) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, x.filter.ID = function (t) {
                    var e = t.replace(wt, xt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function (t) {
                    var e = t.replace(wt, xt);
                    return function (t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), x.find.TAG = w.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [], r = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, x.find.CLASS = w.getElementsByClassName && function (t, e) {
                    return $ ? e.getElementsByClassName(t) : void 0
                }, M = [], L = [], (w.qsa = vt.test(n.querySelectorAll)) && (r(function (t) {
                    R.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || L.push(".#.+[+~]")
                }), r(function (t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (w.matchesSelector = vt.test(I = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function (t) {
                    w.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), M.push("!=", st)
                }), L = L.length && new RegExp(L.join("|")), M = M.length && new RegExp(M.join("|")), e = vt.test(R.compareDocumentPosition), j = e || vt.test(R.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e) for (; e = e.parentNode;) if (e === t) return !0;
                    return !1
                }, W = e ? function (t, e) {
                    if (t === e) return D = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === z && j(z, t) ? -1 : e === n || e.ownerDocument === z && j(z, e) ? 1 : P ? tt(P, t) - tt(P, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return D = !0, 0;
                    var i, r = 0, o = t.parentNode, a = e.parentNode, l = [t], c = [e];
                    if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : P ? tt(P, t) - tt(P, e) : 0;
                    if (o === a) return s(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) c.unshift(i);
                    for (; l[r] === c[r];) r++;
                    return r ? s(l[r], c[r]) : l[r] === z ? -1 : c[r] === z ? 1 : 0
                }, n) : O
            }, e.matches = function (t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== O && N(t), i = i.replace(ht, "='$1']"), !(!w.matchesSelector || !$ || M && M.test(i) || L && L.test(i))) try {
                    var n = I.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (r) {
                }
                return e(i, O, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== O && N(t), j(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== O && N(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && V.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !$) : void 0;
                return void 0 !== n ? n : w.attributes || !$ ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, i = [], n = 0, r = 0;
                if (D = !w.detectDuplicates, P = !w.sortStable && t.slice(0), t.sort(W), D) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return P = null, t
            }, T = e.getText = function (t) {
                var e, i = "", n = 0, r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else for (; e = t[n++];) i += T(e);
                return i
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ft.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(wt, xt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = q[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && q(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    }, ATTR: function (t, i, n) {
                        return function (r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    }, CHILD: function (t, e, i, n, r) {
                        var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === n && 0 === r ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, l) {
                            var c, u, h, f, p, d, m = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(), _ = !l && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (h = e; h = h[m];) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        d = m = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [s ? g.firstChild : g.lastChild], s && _) {
                                    for (u = g[F] || (g[F] = {}), c = u[t] || [], p = c[0] === B && c[1], f = c[0] === B && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (f = p = 0) || d.pop();) if (1 === h.nodeType && ++f && h === e) {
                                        u[t] = [B, p, f];
                                        break
                                    }
                                } else if (_ && (c = (e[F] || (e[F] = {}))[t]) && c[0] === B) f = c[1]; else for (; (h = ++p && h && h[m] || (f = p = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++f || (_ && ((h[F] || (h[F] = {}))[t] = [B, f]), h !== e));) ;
                                return f -= r, f === n || f % n === 0 && f / n >= 0
                            }
                        }
                    }, PSEUDO: function (t, i) {
                        var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[F] ? o(i) : o.length > 1 ? (r = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, r = o(t, i), s = r.length; s--;) n = tt(t, r[s]), t[n] = !(e[n] = r[s])
                        }) : function (t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [], i = [], r = k(t.replace(lt, "$1"));
                        return r[F] ? n(function (t, e, i, n) {
                            for (var o, s = r(t, null, n, []), a = t.length; a--;) (o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function (t, n, o) {
                            return e[0] = t, r(e, null, o, i), e[0] = null, !i.pop()
                        }
                    }), has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0
                        }
                    }), contains: n(function (t) {
                        return t = t.replace(wt, xt), function (e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }), lang: n(function (t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(), function (e) {
                            var i;
                            do if (i = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    }, root: function (t) {
                        return t === R
                    }, focus: function (t) {
                        return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0
                    }, parent: function (t) {
                        return !x.pseudos.empty(t)
                    }, header: function (t) {
                        return gt.test(t.nodeName)
                    }, input: function (t) {
                        return mt.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: c(function () {
                        return [0]
                    }), last: c(function (t, e) {
                        return [e - 1]
                    }), eq: c(function (t, e, i) {
                        return [0 > i ? i + e : i]
                    }), even: c(function (t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }), odd: c(function (t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }), lt: c(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }), gt: c(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (b in{
                radio: !0,
                checkbox: !0, file: !0, password: !0, image: !0
            }) x.pseudos[b] = a(b);
            for (b in{submit: !0, reset: !0}) x.pseudos[b] = l(b);
            return h.prototype = x.filters = x.pseudos, x.setFilters = new h, C = e.tokenize = function (t, i) {
                var n, r, o, s, a, l, c, u = U[t + " "];
                if (u) return i ? 0 : u.slice(0);
                for (a = t, l = [], c = x.preFilter; a;) {
                    (!n || (r = ct.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = ut.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(lt, " ")
                    }), a = a.slice(n.length));
                    for (s in x.filter) !(r = dt[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: s,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : U(t, l).slice(0)
            }, k = e.compile = function (t, e) {
                var i, n = [], r = [], o = X[t + " "];
                if (!o) {
                    for (e || (e = C(t)), i = e.length; i--;) o = _(e[i]), o[F] ? n.push(o) : r.push(o);
                    o = X(t, y(r, n)), o.selector = t
                }
                return o
            }, A = e.select = function (t, e, i, n) {
                var r, o, s, a, l, c = "function" == typeof t && t, h = !n && C(t = c.selector || t);
                if (i = i || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && $ && x.relative[o[1].type]) {
                        if (e = (x.find.ID(s.matches[0].replace(wt, xt), e) || [])[0], !e) return i;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);) if ((l = x.find[a]) && (n = l(s.matches[0].replace(wt, xt), yt.test(o[0].type) && u(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = n.length && f(o), !t) return J.apply(i, n), i;
                        break
                    }
                }
                return (c || k(t, h))(n, e, !$, i, yt.test(t) && u(e.parentNode) || e), i
            }, w.sortStable = F.split("").sort(W).join("") === F, w.detectDuplicates = !!D, N(), w.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition(O.createElement("div"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function (t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || o(et, function (t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        rt.find = ct, rt.expr = ct.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ct.uniqueSort, rt.text = ct.getText, rt.isXMLDoc = ct.isXML, rt.contains = ct.contains;
        var ut = rt.expr.match.needsContext, ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ft = /^.[^:#\[\.,]*$/;
        rt.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? rt.find.matchesSelector(n, t) ? [n] : [] : rt.find.matches(t, rt.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, rt.fn.extend({
            find: function (t) {
                var e, i = [], n = this, r = n.length;
                if ("string" != typeof t) return this.pushStack(rt(t).filter(function () {
                    for (e = 0; r > e; e++) if (rt.contains(n[e], this)) return !0
                }));
                for (e = 0; r > e; e++) rt.find(t, n[e], i);
                return i = this.pushStack(r > 1 ? rt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            }, filter: function (t) {
                return this.pushStack(n(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(n(this, t || [], !0))
            }, is: function (t) {
                return !!n(this, "string" == typeof t && ut.test(t) ? rt(t) : t || [], !1).length
            }
        });
        var pt, dt = t.document, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = rt.fn.init = function (t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : dt, !0)), ht.test(i[1]) && rt.isPlainObject(e)) for (i in e) rt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (n = dt.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return pt.find(t);
                    this.length = 1, this[0] = n
                }
                return this.context = dt, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
        };
        gt.prototype = rt.fn, pt = rt(dt);
        var vt = /^(?:parents|prev(?:Until|All))/, _t = {children: !0, contents: !0, next: !0, prev: !0};
        rt.extend({
            dir: function (t, e, i) {
                for (var n = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !rt(r).is(i));) 1 === r.nodeType && n.push(r), r = r[e];
                return n
            }, sibling: function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), rt.fn.extend({
            has: function (t) {
                var e, i = rt(t, this), n = i.length;
                return this.filter(function () {
                    for (e = 0; n > e; e++) if (rt.contains(this, i[e])) return !0
                })
            }, closest: function (t, e) {
                for (var i, n = 0, r = this.length, o = [], s = ut.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > n; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, t))) {
                    o.push(i);
                    break
                }
                return this.pushStack(o.length > 1 ? rt.unique(o) : o)
            }, index: function (t) {
                return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), rt.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return rt.dir(t, "parentNode")
            }, parentsUntil: function (t, e, i) {
                return rt.dir(t, "parentNode", i)
            }, next: function (t) {
                return r(t, "nextSibling")
            }, prev: function (t) {
                return r(t, "previousSibling")
            }, nextAll: function (t) {
                return rt.dir(t, "nextSibling")
            }, prevAll: function (t) {
                return rt.dir(t, "previousSibling")
            }, nextUntil: function (t, e, i) {
                return rt.dir(t, "nextSibling", i)
            }, prevUntil: function (t, e, i) {
                return rt.dir(t, "previousSibling", i)
            }, siblings: function (t) {
                return rt.sibling((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return rt.sibling(t.firstChild)
            }, contents: function (t) {
                return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes)
            }
        }, function (t, e) {
            rt.fn[t] = function (i, n) {
                var r = rt.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = rt.filter(n, r)), this.length > 1 && (_t[t] || (r = rt.unique(r)), vt.test(t) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var yt = /\S+/g, bt = {};
        rt.Callbacks = function (t) {
            t = "string" == typeof t ? bt[t] || o(t) : rt.extend({}, t);
            var e, i, n, r, s, a, l = [], c = !t.once && [], u = function (o) {
                for (i = t.memory && o, n = !0, s = a || 0, a = 0, r = l.length, e = !0; l && r > s; s++) if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                    i = !1;
                    break
                }
                e = !1, l && (c ? c.length && u(c.shift()) : i ? l = [] : h.disable())
            }, h = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        !function o(e) {
                            rt.each(e, function (e, i) {
                                var n = rt.type(i);
                                "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                            })
                        }(arguments), e ? r = l.length : i && (a = n, u(i))
                    }
                    return this
                }, remove: function () {
                    return l && rt.each(arguments, function (t, i) {
                        for (var n; (n = rt.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (r >= n && r--, s >= n && s--)
                    }), this
                }, has: function (t) {
                    return t ? rt.inArray(t, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], r = 0, this
                }, disable: function () {
                    return l = c = i = void 0, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = void 0, i || h.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (t, i) {
                    return !l || n && !c || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? c.push(i) : u(i)), this
                }, fire: function () {
                    return h.fireWith(this, arguments), this
                }, fired: function () {
                    return !!n
                }
            };
            return h
        }, rt.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", rt.Callbacks("once memory"), "resolved"], ["reject", "fail", rt.Callbacks("once memory"), "rejected"], ["notify", "progress", rt.Callbacks("memory")]],
                    i = "pending", n = {
                        state: function () {
                            return i
                        }, always: function () {
                            return r.done(arguments).fail(arguments), this
                        }, then: function () {
                            var t = arguments;
                            return rt.Deferred(function (i) {
                                rt.each(e, function (e, o) {
                                    var s = rt.isFunction(t[e]) && t[e];
                                    r[o[1]](function () {
                                        var t = s && s.apply(this, arguments);
                                        t && rt.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? rt.extend(t, n) : n
                        }
                    }, r = {};
                return n.pipe = n.then, rt.each(e, function (t, o) {
                    var s = o[2], a = o[3];
                    n[o[1]] = s.add, a && s.add(function () {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                        return r[o[0] + "With"](this === r ? n : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), n.promise(r), t && t.call(r, r), r
            }, when: function (t) {
                var e, i, n, r = 0, o = Q.call(arguments), s = o.length,
                    a = 1 !== s || t && rt.isFunction(t.promise) ? s : 0, l = 1 === a ? t : rt.Deferred(),
                    c = function (t, i, n) {
                        return function (r) {
                            i[t] = this, n[t] = arguments.length > 1 ? Q.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (s > 1) for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(c(r, n, o)).fail(l.reject).progress(c(r, i, e)) : --a;
                return a || l.resolveWith(n, o), l.promise()
            }
        });
        var wt;
        rt.fn.ready = function (t) {
            return rt.ready.promise().done(t), this
        }, rt.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? rt.readyWait++ : rt.ready(!0)
            }, ready: function (t) {
                if (t === !0 ? !--rt.readyWait : !rt.isReady) {
                    if (!dt.body) return setTimeout(rt.ready);
                    rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (wt.resolveWith(dt, [rt]), rt.fn.triggerHandler && (rt(dt).triggerHandler("ready"), rt(dt).off("ready")))
                }
            }
        }), rt.ready.promise = function (e) {
            if (!wt) if (wt = rt.Deferred(), "complete" === dt.readyState) setTimeout(rt.ready); else if (dt.addEventListener) dt.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1); else {
                dt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var i = !1;
                try {
                    i = null == t.frameElement && dt.documentElement
                } catch (n) {
                }
                i && i.doScroll && !function r() {
                    if (!rt.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(r, 50)
                        }
                        s(), rt.ready()
                    }
                }()
            }
            return wt.promise(e)
        };
        var xt, Tt = "undefined";
        for (xt in rt(it)) break;
        it.ownLast = "0" !== xt, it.inlineBlockNeedsLayout = !1, rt(function () {
            var t, e, i, n;
            i = dt.getElementsByTagName("body")[0], i && i.style && (e = dt.createElement("div"), n = dt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
        }), function () {
            var t = dt.createElement("div");
            if (null == it.deleteExpando) {
                it.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    it.deleteExpando = !1
                }
            }
            t = null
        }(), rt.acceptData = function (t) {
            var e = rt.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
            return (1 === i || 9 === i) && (!e || e !== !0 && t.getAttribute("classid") === e)
        };
        var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ct = /([A-Z])/g;
        rt.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (t) {
                return t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando], !!t && !c(t)
            },
            data: function (t, e, i) {
                return u(t, e, i)
            },
            removeData: function (t, e) {
                return h(t, e)
            },
            _data: function (t, e, i) {
                return u(t, e, i, !0)
            },
            _removeData: function (t, e) {
                return h(t, e, !0)
            }
        }), rt.fn.extend({
            data: function (t, e) {
                var i, n, r, o = this[0], s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
                        for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = rt.camelCase(n.slice(5)), l(o, n, r[n])));
                        rt._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    rt.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    rt.data(this, t, e)
                }) : o ? l(o, t, rt.data(o, t)) : void 0
            }, removeData: function (t) {
                return this.each(function () {
                    rt.removeData(this, t)
                })
            }
        }), rt.extend({
            queue: function (t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = rt._data(t, e), i && (!n || rt.isArray(i) ? n = rt._data(t, e, rt.makeArray(i)) : n.push(i)), n || []) : void 0
            }, dequeue: function (t, e) {
                e = e || "fx";
                var i = rt.queue(t, e), n = i.length, r = i.shift(), o = rt._queueHooks(t, e), s = function () {
                    rt.dequeue(t, e)
                };
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire()
            }, _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return rt._data(t, i) || rt._data(t, i, {
                    empty: rt.Callbacks("once memory").add(function () {
                        rt._removeData(t, e + "queue"), rt._removeData(t, i)
                    })
                })
            }
        }), rt.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var i = rt.queue(this, t, e);
                    rt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && rt.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    rt.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var i, n = 1, r = rt.Deferred(), o = this, s = this.length, a = function () {
                    --n || r.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = rt._data(o[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, At = ["Top", "Right", "Bottom", "Left"],
            Et = function (t, e) {
                return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
            }, Pt = rt.access = function (t, e, i, n, r, o, s) {
                var a = 0, l = t.length, c = null == i;
                if ("object" === rt.type(i)) {
                    r = !0;
                    for (a in i) rt.access(t, e, a, i[a], !0, o, s)
                } else if (void 0 !== n && (r = !0, rt.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                        return c.call(rt(t), i)
                    })), e)) for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : c ? e.call(t) : l ? e(t[0], i) : o
            }, Dt = /^(?:checkbox|radio)$/i;
        !function () {
            var t = dt.createElement("input"), e = dt.createElement("div"), i = dt.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = 3 === e.firstChild.nodeType, it.tbody = !e.getElementsByTagName("tbody").length, it.htmlSerialize = !!e.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== dt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), it.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                    it.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == it.deleteExpando) {
                it.deleteExpando = !0;
                try {
                    delete e.test
                } catch (n) {
                    it.deleteExpando = !1
                }
            }
        }(), function () {
            var e, i, n = dt.createElement("div");
            for (e in{
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + e, (it[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), it[e + "Bubbles"] = n.attributes[i].expando === !1);
            n = null
        }();
        var Nt = /^(?:input|select|textarea)$/i, Ot = /^key/, Rt = /^(?:mouse|pointer|contextmenu)|click/,
            $t = /^(?:focusinfocus|focusoutblur)$/, Lt = /^([^.]*)(?:\.(.+)|)$/;
        rt.event = {
            global: {},
            add: function (t, e, i, n, r) {
                var o, s, a, l, c, u, h, f, p, d, m, g = rt._data(t);
                if (g) {
                    for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = rt.guid++), (s = g.events) || (s = g.events = {}), (u = g.handle) || (u = g.handle = function (t) {
                        return typeof rt === Tt || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = t), e = (e || "").match(yt) || [""], a = e.length; a--;) o = Lt.exec(e[a]) || [], p = m = o[1], d = (o[2] || "").split(".").sort(), p && (c = rt.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = rt.event.special[p] || {}, h = rt.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && rt.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, l), (f = s[p]) || (f = s[p] = [], f.delegateCount = 0, c.setup && c.setup.call(t, n, d, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, h) : f.push(h), rt.event.global[p] = !0);
                    t = null
                }
            },
            remove: function (t, e, i, n, r) {
                var o, s, a, l, c, u, h, f, p, d, m, g = rt.hasData(t) && rt._data(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(yt) || [""], c = e.length; c--;) if (a = Lt.exec(e[c]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p) {
                        for (h = rt.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, f = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) s = f[o], !r && m !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (f.splice(o, 1), s.selector && f.delegateCount--, h.remove && h.remove.call(t, s));
                        l && !f.length && (h.teardown && h.teardown.call(t, d, g.handle) !== !1 || rt.removeEvent(t, p, g.handle), delete u[p])
                    } else for (p in u) rt.event.remove(t, p + e[c], i, n, !0);
                    rt.isEmptyObject(u) && (delete g.handle, rt._removeData(t, "events"))
                }
            },
            trigger: function (e, i, n, r) {
                var o, s, a, l, c, u, h, f = [n || dt], p = et.call(e, "type") ? e.type : e,
                    d = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = u = n = n || dt, 3 !== n.nodeType && 8 !== n.nodeType && !$t.test(p + rt.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[rt.expando] ? e : new rt.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : rt.makeArray(i, [e]), c = rt.event.special[p] || {}, r || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                    if (!r && !c.noBubble && !rt.isWindow(n)) {
                        for (l = c.delegateType || p, $t.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), u = a;
                        u === (n.ownerDocument || dt) && f.push(u.defaultView || u.parentWindow || t)
                    }
                    for (h = 0; (a = f[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : c.bindType || p, o = (rt._data(a, "events") || {})[e.type] && rt._data(a, "handle"), o && o.apply(a, i), o = s && a[s], o && o.apply && rt.acceptData(a) && (e.result = o.apply(a, i), e.result === !1 && e.preventDefault());
                    if (e.type = p, !r && !e.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), i) === !1) && rt.acceptData(n) && s && n[p] && !rt.isWindow(n)) {
                        u = n[s], u && (n[s] = null), rt.event.triggered = p;
                        try {
                            n[p]()
                        } catch (m) {
                        }
                        rt.event.triggered = void 0, u && (n[s] = u)
                    }
                    return e.result
                }
            },
            dispatch: function (t) {
                t = rt.event.fix(t);
                var e, i, n, r, o, s = [], a = Q.call(arguments), l = (rt._data(this, "events") || {})[t.type] || [],
                    c = rt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = rt.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = r.elem, o = 0; (n = r.handlers[o++]) && !t.isImmediatePropagationStopped();) (!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((rt.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var i, n, r, o, s = [], a = e.delegateCount, l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (r = [], o = 0; a > o; o++) n = e[o], i = n.selector + " ", void 0 === r[i] && (r[i] = n.needsContext ? rt(i, this).index(l) >= 0 : rt.find(i, this, null, [l]).length), r[i] && r.push(n);
                    r.length && s.push({elem: l, handlers: r})
                }
                return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
            },
            fix: function (t) {
                if (t[rt.expando]) return t;
                var e, i, n, r = t.type, o = t, s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Rt.test(r) ? this.mouseHooks : Ot.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = o.srcElement || dt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var i, n, r, o = e.button, s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || dt, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== d() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === d() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (t) {
                        return rt.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, i, n) {
                var r = rt.extend(new rt.Event, i, {type: t, isSimulated: !0, originalEvent: {}});
                n ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
            }
        }, rt.removeEvent = dt.removeEventListener ? function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function (t, e, i) {
            var n = "on" + e;
            t.detachEvent && (typeof t[n] === Tt && (t[n] = null), t.detachEvent(n, i))
        }, rt.Event = function (t, e) {
            return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : p) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
        }, rt.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = f, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = f, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, rt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            rt.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var i, n = this, r = t.relatedTarget, o = t.handleObj;
                    return (!r || r !== n && !rt.contains(n, r)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), it.submitBubbles || (rt.event.special.submit = {
            setup: function () {
                return !rt.nodeName(this, "form") && void rt.event.add(this, "click._submit keypress._submit", function (t) {
                    var e = t.target, i = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : void 0;
                    i && !rt._data(i, "submitBubbles") && (rt.event.add(i, "submit._submit", function (t) {
                        t._submit_bubble = !0
                    }), rt._data(i, "submitBubbles", !0))
                })
            }, postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
            }, teardown: function () {
                return !rt.nodeName(this, "form") && void rt.event.remove(this, "._submit")
            }
        }), it.changeBubbles || (rt.event.special.change = {
            setup: function () {
                return Nt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), rt.event.add(this, "click._change", function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, t, !0)
                })), !1) : void rt.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    Nt.test(e.nodeName) && !rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
                    }), rt._data(e, "changeBubbles", !0))
                })
            }, handle: function (t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return rt.event.remove(this, "._change"), !Nt.test(this.nodeName)
            }
        }), it.focusinBubbles || rt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var i = function (t) {
                rt.event.simulate(e, t.target, rt.event.fix(t), !0)
            };
            rt.event.special[e] = {
                setup: function () {
                    var n = this.ownerDocument || this, r = rt._data(n, e);
                    r || n.addEventListener(t, i, !0), rt._data(n, e, (r || 0) + 1)
                }, teardown: function () {
                    var n = this.ownerDocument || this, r = rt._data(n, e) - 1;
                    r ? rt._data(n, e, r) : (n.removeEventListener(t, i, !0), rt._removeData(n, e))
                }
            }
        }), rt.fn.extend({
            on: function (t, e, i, n, r) {
                var o, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (o in t) this.on(o, e, i, t[o], r);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p; else if (!n) return this;
                return 1 === r && (s = n, n = function (t) {
                    return rt().off(t), s.apply(this, arguments)
                }, n.guid = s.guid || (s.guid = rt.guid++)), this.each(function () {
                    rt.event.add(this, t, n, i, e)
                })
            }, one: function (t, e, i, n) {
                return this.on(t, e, i, n, 1)
            }, off: function (t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, rt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function () {
                    rt.event.remove(this, t, i, e)
                })
            }, trigger: function (t, e) {
                return this.each(function () {
                    rt.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var i = this[0];
                return i ? rt.event.trigger(t, e, i, !0) : void 0
            }
        });
        var Mt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            It = / jQuery\d+="(?:null|\d+)"/g, jt = new RegExp("<(?:" + Mt + ")[\\s/>]", "i"), Ft = /^\s+/,
            zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Bt = /<([\w:]+)/,
            Ht = /<tbody/i, qt = /<|&#?\w+;/, Ut = /<(?:script|style|link)/i, Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Wt = /^$|\/(?:java|ecma)script/i, Yt = /^true\/(.*)/, Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Qt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            }, Gt = m(dt), Zt = Gt.appendChild(dt.createElement("div"));
        Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, rt.extend({
            clone: function (t, e, i) {
                var n, r, o, s, a, l = rt.contains(t.ownerDocument, t);
                if (it.html5Clone || rt.isXMLDoc(t) || !jt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Zt.innerHTML = t.outerHTML, Zt.removeChild(o = Zt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t))) for (n = g(o), a = g(t), s = 0; null != (r = a[s]); ++s) n[s] && T(r, n[s]);
                if (e) if (i) for (a = a || g(t), n = n || g(o), s = 0; null != (r = a[s]); s++) x(r, n[s]); else x(t, o);
                return n = g(o, "script"), n.length > 0 && w(n, !l && g(t, "script")), n = a = r = null, o
            }, buildFragment: function (t, e, i, n) {
                for (var r, o, s, a, l, c, u, h = t.length, f = m(e), p = [], d = 0; h > d; d++) if (o = t[d], o || 0 === o) if ("object" === rt.type(o)) rt.merge(p, o.nodeType ? [o] : o); else if (qt.test(o)) {
                    for (a = a || f.appendChild(e.createElement("div")), l = (Bt.exec(o) || ["", ""])[1].toLowerCase(), u = Qt[l] || Qt._default, a.innerHTML = u[1] + o.replace(zt, "<$1></$2>") + u[2], r = u[0]; r--;) a = a.lastChild;
                    if (!it.leadingWhitespace && Ft.test(o) && p.push(e.createTextNode(Ft.exec(o)[0])), !it.tbody) for (o = "table" !== l || Ht.test(o) ? "<table>" !== u[1] || Ht.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                    for (rt.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = f.lastChild
                } else p.push(e.createTextNode(o));
                for (a && f.removeChild(a), it.appendChecked || rt.grep(g(p, "input"), v), d = 0; o = p[d++];) if ((!n || -1 === rt.inArray(o, n)) && (s = rt.contains(o.ownerDocument, o), a = g(f.appendChild(o), "script"), s && w(a), i)) for (r = 0; o = a[r++];) Wt.test(o.type || "") && i.push(o);
                return a = null, f
            }, cleanData: function (t, e) {
                for (var i, n, r, o, s = 0, a = rt.expando, l = rt.cache, c = it.deleteExpando, u = rt.event.special; null != (i = t[s]); s++) if ((e || rt.acceptData(i)) && (r = i[a], o = r && l[r])) {
                    if (o.events) for (n in o.events) u[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, o.handle);
                    l[r] && (delete l[r], c ? delete i[a] : typeof i.removeAttribute !== Tt ? i.removeAttribute(a) : i[a] = null, V.push(r))
                }
            }
        }), rt.fn.extend({
            text: function (t) {
                return Pt(this, function (t) {
                    return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || dt).createTextNode(t))
                }, null, t, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = _(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = _(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, remove: function (t, e) {
                for (var i, n = t ? rt.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || rt.cleanData(g(i)), i.parentNode && (e && rt.contains(i.ownerDocument, i) && w(g(i, "script")), i.parentNode.removeChild(i));
                return this
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && rt.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && rt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return rt.clone(this, t, e)
                })
            }, html: function (t) {
                return Pt(this, function (t) {
                    var e = this[0] || {}, i = 0, n = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(It, "") : void 0;
                    if (!("string" != typeof t || Ut.test(t) || !it.htmlSerialize && jt.test(t) || !it.leadingWhitespace && Ft.test(t) || Qt[(Bt.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(zt, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (rt.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, rt.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            }, detach: function (t) {
                return this.remove(t, !0)
            }, domManip: function (t, e) {
                t = G.apply([], t);
                var i, n, r, o, s, a, l = 0, c = this.length, u = this, h = c - 1, f = t[0], p = rt.isFunction(f);
                if (p || c > 1 && "string" == typeof f && !it.checkClone && Xt.test(f)) return this.each(function (i) {
                    var n = u.eq(i);
                    p && (t[0] = f.call(this, i, n.html())), n.domManip(t, e)
                });
                if (c && (a = rt.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                    for (o = rt.map(g(a, "script"), y), r = o.length; c > l; l++) n = a, l !== h && (n = rt.clone(n, !0, !0), r && rt.merge(o, g(n, "script"))), e.call(this[l], n, l);
                    if (r) for (s = o[o.length - 1].ownerDocument, rt.map(o, b), l = 0; r > l; l++) n = o[l], Wt.test(n.type || "") && !rt._data(n, "globalEval") && rt.contains(s, n) && (n.src ? rt._evalUrl && rt._evalUrl(n.src) : rt.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Vt, "")));
                    a = i = null
                }
                return this
            }
        }), rt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            rt.fn[t] = function (t) {
                for (var i, n = 0, r = [], o = rt(t), s = o.length - 1; s >= n; n++) i = n === s ? this : this.clone(!0), rt(o[n])[e](i), Z.apply(r, i.get());
                return this.pushStack(r)
            }
        });
        var Jt, Kt = {};
        !function () {
            var t;
            it.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return i = dt.getElementsByTagName("body")[0], i && i.style ? (e = dt.createElement("div"), n = dt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(dt.createElement("div")).style.width = "5px",
                    t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
            }
        }();
        var te, ee, ie = /^margin/, ne = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
            re = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (te = function (e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, ee = function (t, e, i) {
            var n, r, o, s, a = t.style;
            return i = i || te(t), s = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), ne.test(s) && ie.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
        }) : dt.documentElement.currentStyle && (te = function (t) {
            return t.currentStyle
        }, ee = function (t, e, i) {
            var n, r, o, s, a = t.style;
            return i = i || te(t), s = i ? i[e] : void 0, null == s && a && a[e] && (s = a[e]), ne.test(s) && !re.test(e) && (n = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = n, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
        }), !function () {
            function e() {
                var e, i, n, r;
                i = dt.getElementsByTagName("body")[0], i && i.style && (e = dt.createElement("div"), n = dt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, r = e.appendChild(dt.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), i.removeChild(n))
            }

            var i, n, r, o, s, a, l;
            i = dt.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = i.getElementsByTagName("a")[0], (n = r && r.style) && (n.cssText = "float:left;opacity:.5", it.opacity = "0.5" === n.opacity, it.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === i.style.backgroundClip, it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, rt.extend(it, {
                reliableHiddenOffsets: function () {
                    return null == a && e(), a
                }, boxSizingReliable: function () {
                    return null == s && e(), s
                }, pixelPosition: function () {
                    return null == o && e(), o
                }, reliableMarginRight: function () {
                    return null == l && e(), l
                }
            }))
        }(), rt.swap = function (t, e, i, n) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = i.apply(t, n || []);
            for (o in e) t.style[o] = s[o];
            return r
        };
        var oe = /alpha\([^)]*\)/i, se = /opacity\s*=\s*([^)]*)/, ae = /^(none|table(?!-c[ea]).+)/,
            le = new RegExp("^(" + kt + ")(.*)$", "i"), ce = new RegExp("^([+-])=(" + kt + ")", "i"),
            ue = {position: "absolute", visibility: "hidden", display: "block"},
            he = {letterSpacing: "0", fontWeight: "400"}, fe = ["Webkit", "O", "Moz", "ms"];
        rt.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = ee(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": it.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = rt.camelCase(e), l = t.style;
                    if (e = rt.cssProps[a] || (rt.cssProps[a] = A(l, a)), s = rt.cssHooks[e] || rt.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e];
                    if (o = typeof i, "string" === o && (r = ce.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || rt.cssNumber[a] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (i = s.set(t, i, n))))) try {
                        l[e] = i
                    } catch (c) {
                    }
                }
            },
            css: function (t, e, i, n) {
                var r, o, s, a = rt.camelCase(e);
                return e = rt.cssProps[a] || (rt.cssProps[a] = A(t.style, a)), s = rt.cssHooks[e] || rt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = ee(t, e, n)), "normal" === o && e in he && (o = he[e]), "" === i || i ? (r = parseFloat(o), i === !0 || rt.isNumeric(r) ? r || 0 : o) : o
            }
        }), rt.each(["height", "width"], function (t, e) {
            rt.cssHooks[e] = {
                get: function (t, i, n) {
                    return i ? ae.test(rt.css(t, "display")) && 0 === t.offsetWidth ? rt.swap(t, ue, function () {
                        return N(t, e, n)
                    }) : N(t, e, n) : void 0
                }, set: function (t, i, n) {
                    var r = n && te(t);
                    return P(t, i, n ? D(t, e, n, it.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), it.opacity || (rt.cssHooks.opacity = {
            get: function (t, e) {
                return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            }, set: function (t, e) {
                var i = t.style, n = t.currentStyle, r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = n && n.filter || i.filter || "";
                i.zoom = 1, (e >= 1 || "" === e) && "" === rt.trim(o.replace(oe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oe.test(o) ? o.replace(oe, r) : o + " " + r)
            }
        }), rt.cssHooks.marginRight = k(it.reliableMarginRight, function (t, e) {
            return e ? rt.swap(t, {display: "inline-block"}, ee, [t, "marginRight"]) : void 0
        }), rt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            rt.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + At[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            }, ie.test(t) || (rt.cssHooks[t + e].set = P)
        }), rt.fn.extend({
            css: function (t, e) {
                return Pt(this, function (t, e, i) {
                    var n, r, o = {}, s = 0;
                    if (rt.isArray(e)) {
                        for (n = te(t), r = e.length; r > s; s++) o[e[s]] = rt.css(t, e[s], !1, n);
                        return o
                    }
                    return void 0 !== i ? rt.style(t, e, i) : rt.css(t, e)
                }, t, e, arguments.length > 1)
            }, show: function () {
                return E(this, !0)
            }, hide: function () {
                return E(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Et(this) ? rt(this).show() : rt(this).hide()
                })
            }
        }), rt.Tween = O, O.prototype = {
            constructor: O, init: function (t, e, i, n, r, o) {
                this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (rt.cssNumber[i] ? "" : "px")
            }, cur: function () {
                var t = O.propHooks[this.prop];
                return t && t.get ? t.get(this) : O.propHooks._default.get(this)
            }, run: function (t) {
                var e, i = O.propHooks[this.prop];
                return this.pos = e = this.options.duration ? rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                }, set: function (t) {
                    rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, rt.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, rt.fx = O.prototype.init, rt.fx.step = {};
        var pe, de, me = /^(?:toggle|show|hide)$/, ge = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
            ve = /queueHooks$/, _e = [M], ye = {
                "*": [function (t, e) {
                    var i = this.createTween(t, e), n = i.cur(), r = ge.exec(e),
                        o = r && r[3] || (rt.cssNumber[t] ? "" : "px"),
                        s = (rt.cssNumber[t] || "px" !== o && +n) && ge.exec(rt.css(i.elem, t)), a = 1, l = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +n || 1;
                        do a = a || ".5", s /= a, rt.style(i.elem, t, s + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return r && (s = i.start = +s || +n || 0, i.unit = o, i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), i
                }]
            };
        rt.Animation = rt.extend(j, {
            tweener: function (t, e) {
                rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ye[i] = ye[i] || [], ye[i].unshift(e)
            }, prefilter: function (t, e) {
                e ? _e.unshift(t) : _e.push(t)
            }
        }), rt.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? rt.extend({}, t) : {
                complete: i || !i && e || rt.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !rt.isFunction(e) && e
            };
            return n.duration = rt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue)
            }, n
        }, rt.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(Et).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
            }, animate: function (t, e, i, n) {
                var r = rt.isEmptyObject(t), o = rt.speed(e, i, n), s = function () {
                    var e = j(this, rt.extend({}, t), o);
                    (r || rt._data(this, "finish")) && e.stop(!0)
                };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            }, stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, r = null != t && t + "queueHooks", o = rt.timers, s = rt._data(this);
                    if (r) s[r] && s[r].stop && n(s[r]); else for (r in s) s[r] && s[r].stop && ve.test(r) && n(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                    (e || !i) && rt.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, i = rt._data(this), n = i[t + "queue"], r = i[t + "queueHooks"], o = rt.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), rt.each(["toggle", "show", "hide"], function (t, e) {
            var i = rt.fn[e];
            rt.fn[e] = function (t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate($(e, !0), t, n, r)
            }
        }), rt.each({
            slideDown: $("show"),
            slideUp: $("hide"),
            slideToggle: $("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            rt.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), rt.timers = [], rt.fx.tick = function () {
            var t, e = rt.timers, i = 0;
            for (pe = rt.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
            e.length || rt.fx.stop(), pe = void 0
        }, rt.fx.timer = function (t) {
            rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
        }, rt.fx.interval = 13, rt.fx.start = function () {
            de || (de = setInterval(rt.fx.tick, rt.fx.interval))
        }, rt.fx.stop = function () {
            clearInterval(de), de = null
        }, rt.fx.speeds = {slow: 600, fast: 200, _default: 400}, rt.fn.delay = function (t, e) {
            return t = rt.fx ? rt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                var n = setTimeout(e, t);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        }, function () {
            var t, e, i, n, r;
            e = dt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = dt.createElement("select"), r = i.appendChild(dt.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", it.getSetAttribute = "t" !== e.className, it.style = /top/.test(n.getAttribute("style")), it.hrefNormalized = "/a" === n.getAttribute("href"), it.checkOn = !!t.value, it.optSelected = r.selected, it.enctype = !!dt.createElement("form").enctype, i.disabled = !0, it.optDisabled = !r.disabled, t = dt.createElement("input"), t.setAttribute("value", ""), it.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), it.radioValue = "t" === t.value
        }();
        var be = /\r/g;
        rt.fn.extend({
            val: function (t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = rt.isFunction(t), this.each(function (i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, rt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(be, "") : null == i ? "" : i)) : void 0
            }
        }), rt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = rt.find.attr(t, "value");
                        return null != e ? e : rt.trim(rt.text(t))
                    }
                }, select: {
                    get: function (t) {
                        for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++) if (i = n[l], !(!i.selected && l !== r || (it.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && rt.nodeName(i.parentNode, "optgroup"))) {
                            if (e = rt(i).val(), o) return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var i, n, r = t.options, o = rt.makeArray(e), s = r.length; s--;) if (n = r[s], rt.inArray(rt.valHooks.option.get(n), o) >= 0) try {
                            n.selected = i = !0
                        } catch (a) {
                            n.scrollHeight
                        } else n.selected = !1;
                        return i || (t.selectedIndex = -1), r
                    }
                }
            }
        }), rt.each(["radio", "checkbox"], function () {
            rt.valHooks[this] = {
                set: function (t, e) {
                    return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0
                }
            }, it.checkOn || (rt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var we, xe, Te = rt.expr.attrHandle, Se = /^(?:checked|selected)$/i, Ce = it.getSetAttribute, ke = it.input;
        rt.fn.extend({
            attr: function (t, e) {
                return Pt(this, rt.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    rt.removeAttr(this, t)
                })
            }
        }), rt.extend({
            attr: function (t, e, i) {
                var n, r, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Tt ? rt.prop(t, e, i) : (1 === o && rt.isXMLDoc(t) || (e = e.toLowerCase(), n = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? xe : we)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = rt.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void rt.removeAttr(t, e))
            }, removeAttr: function (t, e) {
                var i, n, r = 0, o = e && e.match(yt);
                if (o && 1 === t.nodeType) for (; i = o[r++];) n = rt.propFix[i] || i, rt.expr.match.bool.test(i) ? ke && Ce || !Se.test(i) ? t[n] = !1 : t[rt.camelCase("default-" + i)] = t[n] = !1 : rt.attr(t, i, ""), t.removeAttribute(Ce ? i : n)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!it.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), xe = {
            set: function (t, e, i) {
                return e === !1 ? rt.removeAttr(t, i) : ke && Ce || !Se.test(i) ? t.setAttribute(!Ce && rt.propFix[i] || i, i) : t[rt.camelCase("default-" + i)] = t[i] = !0, i
            }
        }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = Te[e] || rt.find.attr;
            Te[e] = ke && Ce || !Se.test(e) ? function (t, e, n) {
                var r, o;
                return n || (o = Te[e], Te[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, Te[e] = o), r
            } : function (t, e, i) {
                return i ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), ke && Ce || (rt.attrHooks.value = {
            set: function (t, e, i) {
                return rt.nodeName(t, "input") ? void(t.defaultValue = e) : we && we.set(t, e, i)
            }
        }), Ce || (we = {
            set: function (t, e, i) {
                var n = t.getAttributeNode(i);
                return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
            }
        }, Te.id = Te.name = Te.coords = function (t, e, i) {
            var n;
            return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
        }, rt.valHooks.button = {
            get: function (t, e) {
                var i = t.getAttributeNode(e);
                return i && i.specified ? i.value : void 0
            }, set: we.set
        }, rt.attrHooks.contenteditable = {
            set: function (t, e, i) {
                we.set(t, "" !== e && e, i)
            }
        }, rt.each(["width", "height"], function (t, e) {
            rt.attrHooks[e] = {
                set: function (t, i) {
                    return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
                }
            }
        })), it.style || (rt.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            }, set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Ae = /^(?:input|select|textarea|button|object)$/i, Ee = /^(?:a|area)$/i;
        rt.fn.extend({
            prop: function (t, e) {
                return Pt(this, rt.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return t = rt.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {
                    }
                })
            }
        }), rt.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, i) {
                var n, r, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !rt.isXMLDoc(t), o && (e = rt.propFix[e] || e, r = rt.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = rt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ae.test(t.nodeName) || Ee.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), it.hrefNormalized || rt.each(["href", "src"], function (t, e) {
            rt.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), it.optSelected || (rt.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            rt.propFix[this.toLowerCase()] = this
        }), it.enctype || (rt.propFix.enctype = "encoding");
        var Pe = /[\t\r\n\f]/g;
        rt.fn.extend({
            addClass: function (t) {
                var e, i, n, r, o, s, a = 0, l = this.length, c = "string" == typeof t && t;
                if (rt.isFunction(t)) return this.each(function (e) {
                    rt(this).addClass(t.call(this, e, this.className))
                });
                if (c) for (e = (t || "").match(yt) || []; l > a; a++) if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Pe, " ") : " ")) {
                    for (o = 0; r = e[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                    s = rt.trim(n), i.className !== s && (i.className = s)
                }
                return this
            }, removeClass: function (t) {
                var e, i, n, r, o, s, a = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
                if (rt.isFunction(t)) return this.each(function (e) {
                    rt(this).removeClass(t.call(this, e, this.className))
                });
                if (c) for (e = (t || "").match(yt) || []; l > a; a++) if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Pe, " ") : "")) {
                    for (o = 0; r = e[o++];) for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                    s = t ? rt.trim(n) : "", i.className !== s && (i.className = s)
                }
                return this
            }, toggleClass: function (t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(rt.isFunction(t) ? function (i) {
                    rt(this).toggleClass(t.call(this, i, this.className, e), e)
                } : function () {
                    if ("string" === i) for (var e, n = 0, r = rt(this), o = t.match(yt) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else (i === Tt || "boolean" === i) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : rt._data(this, "__className__") || "")
                })
            }, hasClass: function (t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Pe, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            rt.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), rt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }, bind: function (t, e, i) {
                return this.on(t, null, e, i)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            }, undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var De = rt.now(), Ne = /\?/,
            Oe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        rt.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var i, n = null, r = rt.trim(e + "");
            return r && !rt.trim(r.replace(Oe, function (t, e, r, o) {
                return i && e && (n = 0), 0 === n ? t : (i = r || e, n += !o - !r, "")
            })) ? Function("return " + r)() : rt.error("Invalid JSON: " + e)
        }, rt.parseXML = function (e) {
            var i, n;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
            } catch (r) {
                i = void 0
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), i
        };
        var Re, $e, Le = /#.*$/, Me = /([?&])_=[^&]*/, Ie = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            je = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fe = /^(?:GET|HEAD)$/, ze = /^\/\//,
            Be = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, He = {}, qe = {}, Ue = "*/".concat("*");
        try {
            $e = location.href
        } catch (Xe) {
            $e = dt.createElement("a"), $e.href = "", $e = $e.href
        }
        Re = Be.exec($e.toLowerCase()) || [], rt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: $e,
                type: "GET",
                isLocal: je.test(Re[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ue,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": rt.parseJSON, "text xml": rt.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? B(B(t, rt.ajaxSettings), e) : B(rt.ajaxSettings, t)
            },
            ajaxPrefilter: F(He),
            ajaxTransport: F(qe),
            ajax: function (t, e) {
                function i(t, e, i, n) {
                    var r, u, v, _, b, x = e;
                    2 !== y && (y = 2, a && clearTimeout(a), c = void 0, s = n || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (_ = H(h, w, i)), _ = q(h, _, w, r), r ? (h.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (rt.lastModified[o] = b), b = w.getResponseHeader("etag"), b && (rt.etag[o] = b)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, u = _.data, v = _.error, r = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", r ? d.resolveWith(f, [u, x, w]) : d.rejectWith(f, [w, x, v]), w.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [w, h, r ? u : v]), m.fireWith(f, [w, x]), l && (p.trigger("ajaxComplete", [w, h]), --rt.active || rt.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r, o, s, a, l, c, u, h = rt.ajaxSetup({}, e), f = h.context || h,
                    p = h.context && (f.nodeType || f.jquery) ? rt(f) : rt.event, d = rt.Deferred(),
                    m = rt.Callbacks("once memory"), g = h.statusCode || {}, v = {}, _ = {}, y = 0, b = "canceled",
                    w = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (2 === y) {
                                if (!u) for (u = {}; e = Ie.exec(s);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        }, getAllResponseHeaders: function () {
                            return 2 === y ? s : null
                        }, setRequestHeader: function (t, e) {
                            var i = t.toLowerCase();
                            return y || (t = _[i] = _[i] || t, v[t] = e), this
                        }, overrideMimeType: function (t) {
                            return y || (h.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t) if (2 > y) for (e in t) g[e] = [g[e], t[e]]; else w.always(t[w.status]);
                            return this
                        }, abort: function (t) {
                            var e = t || b;
                            return c && c.abort(e), i(0, e), this
                        }
                    };
                if (d.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || $e) + "").replace(Le, "").replace(ze, Re[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = rt.trim(h.dataType || "*").toLowerCase().match(yt) || [""], null == h.crossDomain && (n = Be.exec(h.url.toLowerCase()), h.crossDomain = !(!n || n[1] === Re[1] && n[2] === Re[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Re[3] || ("http:" === Re[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = rt.param(h.data, h.traditional)), z(He, h, e, w), 2 === y) return w;
                l = rt.event && h.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Fe.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Ne.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Me.test(o) ? o.replace(Me, "$1_=" + De++) : o + (Ne.test(o) ? "&" : "?") + "_=" + De++)), h.ifModified && (rt.lastModified[o] && w.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && w.setRequestHeader("If-None-Match", rt.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : h.accepts["*"]);
                for (r in h.headers) w.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (h.beforeSend.call(f, w, h) === !1 || 2 === y)) return w.abort();
                b = "abort";
                for (r in{success: 1, error: 1, complete: 1}) w[r](h[r]);
                if (c = z(qe, h, e, w)) {
                    w.readyState = 1, l && p.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function () {
                        w.abort("timeout")
                    }, h.timeout));
                    try {
                        y = 1, c.send(v, i)
                    } catch (x) {
                        if (!(2 > y)) throw x;
                        i(-1, x)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getJSON: function (t, e, i) {
                return rt.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return rt.get(t, void 0, e, "script")
            }
        }), rt.each(["get", "post"], function (t, e) {
            rt[e] = function (t, i, n, r) {
                return rt.isFunction(i) && (r = r || n, n = i, i = void 0), rt.ajax({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                })
            }
        }), rt._evalUrl = function (t) {
            return rt.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, rt.fn.extend({
            wrapAll: function (t) {
                if (rt.isFunction(t)) return this.each(function (e) {
                    rt(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            }, wrapInner: function (t) {
                return this.each(rt.isFunction(t) ? function (e) {
                    rt(this).wrapInner(t.call(this, e))
                } : function () {
                    var e = rt(this), i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = rt.isFunction(t);
                return this.each(function (i) {
                    rt(this).wrapAll(e ? t.call(this, i) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), rt.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"))
        }, rt.expr.filters.visible = function (t) {
            return !rt.expr.filters.hidden(t)
        };
        var We = /%20/g, Ye = /\[\]$/, Ve = /\r?\n/g, Qe = /^(?:submit|button|image|reset|file)$/i,
            Ge = /^(?:input|select|textarea|keygen)/i;
        rt.param = function (t, e) {
            var i, n = [], r = function (t, e) {
                e = rt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function () {
                r(this.name, this.value)
            }); else for (i in t) U(i, t[i], e, r);
            return n.join("&").replace(We, "+")
        }, rt.fn.extend({
            serialize: function () {
                return rt.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = rt.prop(this, "elements");
                    return t ? rt.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !rt(this).is(":disabled") && Ge.test(this.nodeName) && !Qe.test(t) && (this.checked || !Dt.test(t))
                }).map(function (t, e) {
                    var i = rt(this).val();
                    return null == i ? null : rt.isArray(i) ? rt.map(i, function (t) {
                        return {name: e.name, value: t.replace(Ve, "\r\n")}
                    }) : {name: e.name, value: i.replace(Ve, "\r\n")}
                }).get()
            }
        }), rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || W()
        } : X;
        var Ze = 0, Je = {}, Ke = rt.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in Je) Je[t](void 0, !0)
        }), it.cors = !!Ke && "withCredentials" in Ke, Ke = it.ajax = !!Ke, Ke && rt.ajaxTransport(function (t) {
            if (!t.crossDomain || it.cors) {
                var e;
                return {
                    send: function (i, n) {
                        var r, o = t.xhr(), s = ++Ze;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) o[r] = t.xhrFields[r];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (r in i) void 0 !== i[r] && o.setRequestHeader(r, i[r] + "");
                        o.send(t.hasContent && t.data || null), e = function (i, r) {
                            var a, l, c;
                            if (e && (r || 4 === o.readyState)) if (delete Je[s], e = void 0, o.onreadystatechange = rt.noop, r) 4 !== o.readyState && o.abort(); else {
                                c = {}, a = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (u) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                            c && n(a, l, c, o.getAllResponseHeaders())
                        }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Je[s] = e : e()
                    }, abort: function () {
                        e && e(void 0, !0)
                    }
                }
            }
        }), rt.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (t) {
                    return rt.globalEval(t), t
                }
            }
        }), rt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), rt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, i = dt.head || rt("head")[0] || dt.documentElement;
                return {
                    send: function (n, r) {
                        e = dt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                            (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || r(200, "success"))
                        }, i.insertBefore(e, i.firstChild)
                    }, abort: function () {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var ti = [], ei = /(=)\?(?=&|$)|\?\?/;
        rt.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = ti.pop() || rt.expando + "_" + De++;
                return this[t] = !0, t
            }
        }), rt.ajaxPrefilter("json jsonp", function (e, i, n) {
            var r, o, s,
                a = e.jsonp !== !1 && (ei.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ei, "$1" + r) : e.jsonp !== !1 && (e.url += (Ne.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                return s || rt.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
                s = arguments
            }, n.always(function () {
                t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, ti.push(r)), s && rt.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), rt.parseHTML = function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || dt;
            var n = ht.exec(t), r = !i && [];
            return n ? [e.createElement(n[1])] : (n = rt.buildFragment([t], e, r), r && r.length && rt(r).remove(), rt.merge([], n.childNodes))
        };
        var ii = rt.fn.load;
        rt.fn.load = function (t, e, i) {
            if ("string" != typeof t && ii) return ii.apply(this, arguments);
            var n, r, o, s = this, a = t.indexOf(" ");
            return a >= 0 && (n = rt.trim(t.slice(a, t.length)), t = t.slice(0, a)), rt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && rt.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function (t) {
                r = arguments, s.html(n ? rt("<div>").append(rt.parseHTML(t)).find(n) : t)
            }).complete(i && function (t, e) {
                s.each(i, r || [t.responseText, e, t])
            }), this
        }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            rt.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), rt.expr.filters.animated = function (t) {
            return rt.grep(rt.timers, function (e) {
                return t === e.elem
            }).length
        };
        var ni = t.document.documentElement;
        rt.offset = {
            setOffset: function (t, e, i) {
                var n, r, o, s, a, l, c, u = rt.css(t, "position"), h = rt(t), f = {};
                "static" === u && (t.style.position = "relative"), a = h.offset(), o = rt.css(t, "top"), l = rt.css(t, "left"), c = ("absolute" === u || "fixed" === u) && rt.inArray("auto", [o, l]) > -1, c ? (n = h.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : h.css(f)
            }
        }, rt.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    rt.offset.setOffset(this, t, e)
                });
                var e, i, n = {top: 0, left: 0}, r = this[0], o = r && r.ownerDocument;
                return o ? (e = o.documentElement, rt.contains(e, r) ? (typeof r.getBoundingClientRect !== Tt && (n = r.getBoundingClientRect()), i = Y(o), {
                    top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : n) : void 0
            }, position: function () {
                if (this[0]) {
                    var t, e, i = {top: 0, left: 0}, n = this[0];
                    return "fixed" === rt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (i = t.offset()), i.top += rt.css(t[0], "borderTopWidth", !0), i.left += rt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - rt.css(n, "marginTop", !0),
                        left: e.left - i.left - rt.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || ni; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");) t = t.offsetParent;
                    return t || ni
                })
            }
        }), rt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var i = /Y/.test(e);
            rt.fn[t] = function (n) {
                return Pt(this, function (t, n, r) {
                    var o = Y(t);
                    return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? rt(o).scrollLeft() : r, i ? r : rt(o).scrollTop()) : t[n] = r);
                }, t, n, arguments.length, null)
            }
        }), rt.each(["top", "left"], function (t, e) {
            rt.cssHooks[e] = k(it.pixelPosition, function (t, i) {
                return i ? (i = ee(t, e), ne.test(i) ? rt(t).position()[e] + "px" : i) : void 0
            })
        }), rt.each({Height: "height", Width: "width"}, function (t, e) {
            rt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
                rt.fn[n] = function (n, r) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        s = i || (n === !0 || r === !0 ? "margin" : "border");
                    return Pt(this, function (e, i, n) {
                        var r;
                        return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? rt.css(e, i, s) : rt.style(e, i, n, s)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), rt.fn.size = function () {
            return this.length
        }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return rt
        });
        var ri = t.jQuery, oi = t.$;
        return rt.noConflict = function (e) {
            return t.$ === rt && (t.$ = oi), e && t.jQuery === rt && (t.jQuery = ri), rt
        }, typeof e === Tt && (t.jQuery = t.$ = rt), rt
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), +function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e) if (void 0 !== t.style[i]) return {end: e[i]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var i = !1, n = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var r = function () {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }

    var i = '[data-dismiss="alert"]', n = function (e) {
        t(e).on("click", i, this.close)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
        function i() {
            s.detach().trigger("closed.bs.alert").remove()
        }

        var r = t(this), o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === o ? [] : o);
        e && e.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.button"), o = "object" == typeof e && e;
            r || n.data("bs.button", r = new i(this, o)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }

    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
        var i = "disabled", n = this.$element, r = n.is("input") ? "val" : "html", o = n.data();
        e += "Text", null == o.resetText && n.data("resetText", n[r]()), setTimeout(t.proxy(function () {
            n[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var n = t(i.target).closest(".btn");
        e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.carousel"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : o.slide;
            r || n.data("bs.carousel", r = new i(this, o)), "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e), n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var r = "prev" == t ? -1 : 1, o = (i + r) % this.$items.length;
        return this.$items.eq(o)
    }, i.prototype.to = function (t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function (e, n) {
        var r = this.$element.find(".item.active"), o = n || this.getItemForDirection(e, r), s = this.interval,
            a = "next" == e ? "left" : "right", l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var c = o[0], u = t.Event("slide.bs.carousel", {relatedTarget: c, direction: a});
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", {relatedTarget: c, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function () {
                o.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    };
    var r = function (i) {
        var n, r = t(this), o = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), r.data()), a = r.attr("data-slide-to");
            a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.collapse"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1), r || i.data("bs.collapse", r = new n(this, o)), "string" == typeof e && r[e]()
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {toggle: !0}, n.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (i.call(r, "hide"), e || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, n) {
            var r = t(n);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var r = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
        var r = t(this);
        r.attr("data-target") || n.preventDefault();
        var o = e(r), s = o.data("bs.collapse"), a = s ? "toggle" : r.data();
        i.call(o, a)
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(r).remove(), t(o).each(function () {
            var n = t(this), r = e(n), o = {relatedTarget: this};
            r.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(r[0], i.target) || (r.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function n(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
        })
    }

    var r = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.7", s.prototype.toggle = function (n) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = e(r), s = o.hasClass("open");
            if (i(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {relatedTarget: this};
                if (o.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var r = e(n), s = r.hasClass("open");
                if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && r.find(o).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a", l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(i.target);
                    38 == i.which && c > 0 && c--, 40 == i.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";

    function e(e, n) {
        return this.each(function () {
            var r = t(this), o = r.data("bs.modal"), s = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new i(this, s)), "string" == typeof e ? o[e](n) : s.show && o.show(n)
        })
    }

    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var n = this, r = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            n.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var r = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), r && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var o = t.Event("shown.bs.modal", {relatedTarget: e});
            r ? n.$dialog.one("bsTransitionEnd", function () {
                n.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var n = this, r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var n = t(this), r = n.attr("href"), o = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(r) && r}, o.data(), n.data());
        n.is("a") && i.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.tooltip"), o = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || n.data("bs.tooltip", r = new i(this, o)), "string" == typeof e && r[e]())
        })
    }

    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, i.prototype.init = function (e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function (t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var r = this, o = this.tip(), s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i, c = l.test(a);
            c && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(), h = o[0].offsetWidth, f = o[0].offsetHeight;
            if (c) {
                var p = a, d = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + f > d.bottom ? "top" : "top" == a && u.top - f < d.top ? "bottom" : "right" == a && u.right + h > d.width ? "left" : "left" == a && u.left - h < d.left ? "right" : a, o.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, h, f);
            this.applyPlacement(m, a);
            var g = function () {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var n = this.tip(), r = n[0].offsetWidth, o = n[0].offsetHeight, s = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function (t) {
                n.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth, c = n[0].offsetHeight;
        "top" == i && c != o && (e.top = e.top + o - c);
        var u = this.getViewportAdjustedDelta(i, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var h = /top|bottom/.test(i), f = h ? 2 * u.left - r + l : 2 * u.top - o + c,
            p = h ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(f, n[0][p], h)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function n() {
            "in" != r.hoverState && o.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }

        var r = this, o = t(this.$tip), s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0], n = "BODY" == i.tagName, r = i.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {width: r.right - r.left, height: r.bottom - r.top}));
        var o = window.SVGElement && i instanceof window.SVGElement, s = n ? {top: 0, left: 0} : o ? null : e.offset(),
            a = {scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
            l = n ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, r, a, l, s)
    }, i.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {top: e.top + e.height / 2 - n / 2, left: e.left - i} : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
        var r = {top: 0, left: 0};
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll, l = e.top + o - s.scroll + n;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var c = e.left - o, u = e.left + o + i;
            c < s.left ? r.left = s.left - c : u > s.right && (r.left = s.left + s.width - u)
        }
        return r
    }, i.prototype.getTitle = function () {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.popover"), o = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || n.data("bs.popover", r = new i(this, o)), "string" == typeof e && r[e]())
        })
    }

    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(jQuery), +function (t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.scrollspy"), o = "object" == typeof i && i;
            r || n.data("bs.scrollspy", r = new e(this, o)), "string" == typeof i && r[i]()
        })
    }

    e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, e.prototype.refresh = function () {
        var e = this, i = "offset", n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), r = e.data("target") || e.attr("href"), o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [[o[i]().top + n, r]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(), r = this.offsets, o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) s != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.tab");
            r || n.data("bs.tab", r = new i(this)), "string" == typeof e && r[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = i.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                s = t.Event("show.bs.tab", {relatedTarget: r[0]});
            if (r.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                    r.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, n, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }

        var s = n.find("> .active"),
            a = r && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    };
    var r = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.affix"), o = "object" == typeof e && e;
            r || n.data("bs.affix", r = new i(this, o)), "string" == typeof e && r[e]()
        })
    }

    var i = function (e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, n) {
        var r = this.$target.scrollTop(), o = this.$element.offset(), s = this.$target.height();
        if (null != i && "top" == this.affixed) return r < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= t - n) && "bottom";
        var a = null == this.affixed, l = a ? r : o.top, c = a ? s : e;
        return null != i && r <= i ? "top" : null != n && l + c >= t - n && "bottom"
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), n = this.options.offset, r = n.top, o = n.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (o = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
            var a = this.getState(s, e, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: s - e - o})
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this), n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery), !function (t, e, i, n) {
    var r = t(e);
    t.fn.lazyload = function (o) {
        function s() {
            var e = 0;
            l.each(function () {
                var i = t(this);
                if (!c.skip_invisible || i.is(":visible")) if (t.abovethetop(this, c) || t.leftofbegin(this, c)) ; else if (t.belowthefold(this, c) || t.rightoffold(this, c)) {
                    if (++e > c.failure_limit) return !1
                } else i.trigger("appear"), e = 0
            })
        }

        var a, l = this, c = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: e,
            data_attribute: "original",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return o && (n !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), n !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), t.extend(c, o)), a = c.container === n || c.container === e ? r : t(c.container), 0 === c.event.indexOf("scroll") && a.bind(c.event, function () {
            return s()
        }), this.each(function () {
            var e = this, i = t(e);
            e.loaded = !1, (i.attr("src") === n || i.attr("src") === !1) && i.is("img") && i.attr("src", c.placeholder), i.one("appear", function () {
                if (!this.loaded) {
                    if (c.appear) {
                        var n = l.length;
                        c.appear.call(e, n, c)
                    }
                    t("<img />").bind("load", function () {
                        var n = i.attr("data-" + c.data_attribute);
                        i.hide(), i.is("img") ? i.attr("src", n) : i.css("background-image", "url('" + n + "')"), i[c.effect](c.effect_speed), e.loaded = !0;
                        var r = t.grep(l, function (t) {
                            return !t.loaded
                        });
                        if (l = t(r), c.load) {
                            var o = l.length;
                            c.load.call(e, o, c)
                        }
                    }).attr("src", i.attr("data-" + c.data_attribute))
                }
            }), 0 !== c.event.indexOf("scroll") && i.bind(c.event, function () {
                e.loaded || i.trigger("appear")
            })
        }), r.bind("resize", function () {
            s()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function (e) {
            e.originalEvent && e.originalEvent.persisted && l.each(function () {
                t(this).trigger("appear")
            })
        }), t(i).ready(function () {
            s()
        }), this
    }, t.belowthefold = function (i, o) {
        var s;
        return s = o.container === n || o.container === e ? (e.innerHeight ? e.innerHeight : r.height()) + r.scrollTop() : t(o.container).offset().top + t(o.container).height(), s <= t(i).offset().top - o.threshold
    }, t.rightoffold = function (i, o) {
        var s;
        return s = o.container === n || o.container === e ? r.width() + r.scrollLeft() : t(o.container).offset().left + t(o.container).width(), s <= t(i).offset().left - o.threshold
    }, t.abovethetop = function (i, o) {
        var s;
        return s = o.container === n || o.container === e ? r.scrollTop() : t(o.container).offset().top, s >= t(i).offset().top + o.threshold + t(i).height()
    }, t.leftofbegin = function (i, o) {
        var s;
        return s = o.container === n || o.container === e ? r.scrollLeft() : t(o.container).offset().left, s >= t(i).offset().left + o.threshold + t(i).width()
    }, t.inviewport = function (e, i) {
        return !(t.rightoffold(e, i) || t.leftofbegin(e, i) || t.belowthefold(e, i) || t.abovethetop(e, i))
    }, t.extend(t.expr[":"], {
        "below-the-fold": function (e) {
            return t.belowthefold(e, {threshold: 0})
        }, "above-the-top": function (e) {
            return !t.belowthefold(e, {threshold: 0})
        }, "right-of-screen": function (e) {
            return t.rightoffold(e, {threshold: 0})
        }, "left-of-screen": function (e) {
            return !t.rightoffold(e, {threshold: 0})
        }, "in-viewport": function (e) {
            return t.inviewport(e, {threshold: 0})
        }, "above-the-fold": function (e) {
            return !t.belowthefold(e, {threshold: 0})
        }, "right-of-fold": function (e) {
            return t.rightoffold(e, {threshold: 0})
        }, "left-of-fold": function (e) {
            return !t.rightoffold(e, {threshold: 0})
        }
    })
}(jQuery, window, document), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function (t) {
    var e = "2.2.0", i = {}, n = {
        exclude: [],
        excludeWithin: [],
        offset: 0,
        direction: "top",
        delegateSelector: null,
        scrollElement: null,
        scrollTarget: null,
        autoFocus: !1,
        beforeScroll: function () {
        },
        afterScroll: function () {
        },
        easing: "swing",
        speed: 400,
        autoCoefficient: 2,
        preventDefault: !0
    }, r = function (e) {
        var i = [], n = !1, r = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
        return this.each(function () {
            var e = t(this);
            if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void(e[r]() > 0 ? i.push(this) : (e[r](1), n = e[r]() > 0, n && i.push(this), e[r](0))) : (i.push(document.scrollingElement), !1)
        }), i.length || this.each(function () {
            this === document.documentElement && "smooth" === t(this).css("scrollBehavior") && (i = [this]), i.length || "BODY" !== this.nodeName || (i = [this])
        }), "first" === e.el && i.length > 1 && (i = [i[0]]), i
    }, o = /^([\-\+]=)(\d+)/;
    t.fn.extend({
        scrollable: function (t) {
            var e = r.call(this, {dir: t});
            return this.pushStack(e)
        }, firstScrollable: function (t) {
            var e = r.call(this, {el: "first", dir: t});
            return this.pushStack(e)
        }, smoothScroll: function (e, i) {
            if (e = e || {}, "options" === e) return i ? this.each(function () {
                var e = t(this), n = t.extend(e.data("ssOpts") || {}, i);
                t(this).data("ssOpts", n)
            }) : this.first().data("ssOpts");
            var n = t.extend({}, t.fn.smoothScroll.defaults, e), r = function (e) {
                var i = function (t) {
                        return t.replace(/(:|\.|\/)/g, "\\$1")
                    }, r = this, o = t(this), s = t.extend({}, n, o.data("ssOpts") || {}), a = n.exclude,
                    l = s.excludeWithin, c = 0, u = 0, h = !0, f = {}, p = t.smoothScroll.filterPath(location.pathname),
                    d = t.smoothScroll.filterPath(r.pathname), m = location.hostname === r.hostname || !r.hostname,
                    g = s.scrollTarget || d === p, v = i(r.hash);
                if (v && !t(v).length && (h = !1), s.scrollTarget || m && g && v) {
                    for (; h && c < a.length;) o.is(i(a[c++])) && (h = !1);
                    for (; h && u < l.length;) o.closest(l[u++]).length && (h = !1)
                } else h = !1;
                h && (s.preventDefault && e.preventDefault(), t.extend(f, s, {
                    scrollTarget: s.scrollTarget || v,
                    link: r
                }), t.smoothScroll(f))
            };
            return null !== e.delegateSelector ? this.off("click.smoothscroll", e.delegateSelector).on("click.smoothscroll", e.delegateSelector, r) : this.off("click.smoothscroll").on("click.smoothscroll", r), this
        }
    });
    var s = function (t) {
        var e = {relative: ""}, i = "string" == typeof t && o.exec(t);
        return "number" == typeof t ? e.px = t : i && (e.relative = i[1], e.px = parseFloat(i[2]) || 0), e
    }, a = function (e) {
        var i = t(e.scrollTarget);
        e.autoFocus && i.length && (i[0].focus(), i.is(document.activeElement) || (i.prop({tabIndex: -1}), i[0].focus())), e.afterScroll.call(e.link, e)
    };
    t.smoothScroll = function (e, n) {
        if ("options" === e && "object" == typeof n) return t.extend(i, n);
        var r, o, l, c, u = s(e), h = {}, f = 0, p = "offset", d = "scrollTop", m = {}, g = {};
        u.px ? r = t.extend({link: null}, t.fn.smoothScroll.defaults, i) : (r = t.extend({link: null}, t.fn.smoothScroll.defaults, e || {}, i), r.scrollElement && (p = "position", "static" === r.scrollElement.css("position") && r.scrollElement.css("position", "relative")), n && (u = s(n))), d = "left" === r.direction ? "scrollLeft" : d, r.scrollElement ? (o = r.scrollElement, u.px || /^(?:HTML|BODY)$/.test(o[0].nodeName) || (f = o[d]())) : o = t("html, body").firstScrollable(r.direction), r.beforeScroll.call(o, r), h = u.px ? u : {
            relative: "",
            px: t(r.scrollTarget)[p]() && t(r.scrollTarget)[p]()[r.direction] || 0
        }, m[d] = h.relative + (h.px + f + r.offset), l = r.speed, "auto" === l && (c = Math.abs(m[d] - o[d]()), l = c / r.autoCoefficient), g = {
            duration: l,
            easing: r.easing,
            complete: function () {
                a(r)
            }
        }, r.step && (g.step = r.step), o.length ? o.stop().animate(m, g) : a(r)
    }, t.smoothScroll.version = e, t.smoothScroll.filterPath = function (t) {
        return t = t || "", t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }, t.fn.smoothScroll.defaults = n
}), !function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
}(this, function () {
    "use strict";
    var t = function () {
    };
    t.version = "2.0.5", window.addEventListener("mousewheel", function () {
    });
    var e = "data-scrollmagic-pin-spacer";
    t.Controller = function (n) {
        var o, s, a = "ScrollMagic.Controller", l = "FORWARD", c = "REVERSE", u = "PAUSED", h = i.defaults, f = this,
            p = r.extend({}, h, n), d = [], m = !1, g = 0, v = u, _ = !0, y = 0, b = !0, w = function () {
                for (var t in p) h.hasOwnProperty(t) || delete p[t];
                if (p.container = r.get.elements(p.container)[0], !p.container) throw a + " init failed.";
                _ = p.container === window || p.container === document.body || !document.body.contains(p.container), _ && (p.container = window), y = S(), p.container.addEventListener("resize", E), p.container.addEventListener("scroll", E), p.refreshInterval = parseInt(p.refreshInterval) || h.refreshInterval, x()
            }, x = function () {
                p.refreshInterval > 0 && (s = window.setTimeout(P, p.refreshInterval))
            }, T = function () {
                return p.vertical ? r.get.scrollTop(p.container) : r.get.scrollLeft(p.container)
            }, S = function () {
                return p.vertical ? r.get.height(p.container) : r.get.width(p.container)
            }, C = this._setScrollPos = function (t) {
                p.vertical ? _ ? window.scrollTo(r.get.scrollLeft(), t) : p.container.scrollTop = t : _ ? window.scrollTo(t, r.get.scrollTop()) : p.container.scrollLeft = t
            }, k = function () {
                if (b && m) {
                    var t = r.type.Array(m) ? m : d.slice(0);
                    m = !1;
                    var e = g;
                    g = f.scrollPos();
                    var i = g - e;
                    0 !== i && (v = i > 0 ? l : c), v === c && t.reverse(), t.forEach(function (t) {
                        t.update(!0)
                    })
                }
            }, A = function () {
                o = r.rAF(k)
            }, E = function (t) {
                "resize" == t.type && (y = S(), v = u), m !== !0 && (m = !0, A())
            }, P = function () {
                if (!_ && y != S()) {
                    var t;
                    try {
                        t = new Event("resize", {bubbles: !1, cancelable: !1})
                    } catch (e) {
                        t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                    }
                    p.container.dispatchEvent(t)
                }
                d.forEach(function (t) {
                    t.refresh()
                }), x()
            };
        this._options = p;
        var D = function (t) {
            if (t.length <= 1) return t;
            var e = t.slice(0);
            return e.sort(function (t, e) {
                return t.scrollOffset() > e.scrollOffset() ? 1 : -1
            }), e
        };
        return this.addScene = function (e) {
            if (r.type.Array(e)) e.forEach(function (t) {
                f.addScene(t)
            }); else if (e instanceof t.Scene) if (e.controller() !== f) e.addTo(f); else if (d.indexOf(e) < 0) {
                d.push(e), d = D(d), e.on("shift.controller_sort", function () {
                    d = D(d)
                });
                for (var i in p.globalSceneOptions) e[i] && e[i].call(e, p.globalSceneOptions[i])
            }
            return f
        }, this.removeScene = function (t) {
            if (r.type.Array(t)) t.forEach(function (t) {
                f.removeScene(t)
            }); else {
                var e = d.indexOf(t);
                e > -1 && (t.off("shift.controller_sort"), d.splice(e, 1), t.remove())
            }
            return f
        }, this.updateScene = function (e, i) {
            return r.type.Array(e) ? e.forEach(function (t) {
                f.updateScene(t, i)
            }) : i ? e.update(!0) : m !== !0 && e instanceof t.Scene && (m = m || [], -1 == m.indexOf(e) && m.push(e), m = D(m), A()), f
        }, this.update = function (t) {
            return E({type: "resize"}), t && k(), f
        }, this.scrollTo = function (i, n) {
            if (r.type.Number(i)) C.call(p.container, i, n); else if (i instanceof t.Scene) i.controller() === f && f.scrollTo(i.scrollOffset(), n); else if (r.type.Function(i)) C = i; else {
                var o = r.get.elements(i)[0];
                if (o) {
                    for (; o.parentNode.hasAttribute(e);) o = o.parentNode;
                    var s = p.vertical ? "top" : "left", a = r.get.offset(p.container), l = r.get.offset(o);
                    _ || (a[s] -= f.scrollPos()), f.scrollTo(l[s] - a[s], n)
                }
            }
            return f
        }, this.scrollPos = function (t) {
            return arguments.length ? (r.type.Function(t) && (T = t), f) : T.call(f)
        }, this.info = function (t) {
            var e = {
                size: y,
                vertical: p.vertical,
                scrollPos: g,
                scrollDirection: v,
                container: p.container,
                isDocument: _
            };
            return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
        }, this.loglevel = function () {
            return f
        }, this.enabled = function (t) {
            return arguments.length ? (b != t && (b = !!t, f.updateScene(d, !0)), f) : b
        }, this.destroy = function (t) {
            window.clearTimeout(s);
            for (var e = d.length; e--;) d[e].destroy(t);
            return p.container.removeEventListener("resize", E), p.container.removeEventListener("scroll", E), r.cAF(o), null
        }, w(), f
    };
    var i = {defaults: {container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100}};
    t.Controller.addOption = function (t, e) {
        i.defaults[t] = e
    }, t.Controller.extend = function (e) {
        var i = this;
        t.Controller = function () {
            return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
        }, r.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
    }, t.Scene = function (i) {
        var o, s, a = "BEFORE", l = "DURING", c = "AFTER", u = n.defaults, h = this, f = r.extend({}, u, i), p = a,
            d = 0, m = {start: 0, end: 0}, g = 0, v = !0, _ = function () {
                for (var t in f) u.hasOwnProperty(t) || delete f[t];
                for (var e in u) A(e);
                C()
            }, y = {};
        this.on = function (t, e) {
            return r.type.Function(e) && (t = t.trim().split(" "), t.forEach(function (t) {
                var i = t.split("."), n = i[0], r = i[1];
                "*" != n && (y[n] || (y[n] = []), y[n].push({namespace: r || "", callback: e}))
            })), h
        }, this.off = function (t, e) {
            return t ? (t = t.trim().split(" "), t.forEach(function (t) {
                var i = t.split("."), n = i[0], r = i[1] || "", o = "*" === n ? Object.keys(y) : [n];
                o.forEach(function (t) {
                    for (var i = y[t] || [], n = i.length; n--;) {
                        var o = i[n];
                        !o || r !== o.namespace && "*" !== r || e && e != o.callback || i.splice(n, 1)
                    }
                    i.length || delete y[t]
                })
            }), h) : h
        }, this.trigger = function (e, i) {
            if (e) {
                var n = e.trim().split("."), r = n[0], o = n[1], s = y[r];
                s && s.forEach(function (e) {
                    o && o !== e.namespace || e.callback.call(h, new t.Event(r, e.namespace, h, i))
                })
            }
            return h
        }, h.on("change.internal", function (t) {
            "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? x() : "reverse" === t.what && h.update())
        }).on("shift.internal", function () {
            b(), h.update()
        }), this.addTo = function (e) {
            return e instanceof t.Controller && s != e && (s && s.removeScene(h), s = e, C(), w(!0), x(!0), b(), s.info("container").addEventListener("resize", T), e.addScene(h), h.trigger("add", {controller: s}), h.update()), h
        }, this.enabled = function (t) {
            return arguments.length ? (v != t && (v = !!t, h.update(!0)), h) : v
        }, this.remove = function () {
            if (s) {
                s.info("container").removeEventListener("resize", T);
                var t = s;
                s = void 0, t.removeScene(h), h.trigger("remove")
            }
            return h
        }, this.destroy = function (t) {
            return h.trigger("destroy", {reset: t}), h.remove(), h.off("*.*"), null
        }, this.update = function (t) {
            if (s) if (t) if (s.enabled() && v) {
                var e, i = s.info("scrollPos");
                e = f.duration > 0 ? (i - m.start) / (m.end - m.start) : i >= m.start ? 1 : 0, h.trigger("update", {
                    startPos: m.start,
                    endPos: m.end,
                    scrollPos: i
                }), h.progress(e)
            } else E && p === l && D(!0); else s.updateScene(h, !1);
            return h
        }, this.refresh = function () {
            return w(), x(), h
        }, this.progress = function (t) {
            if (arguments.length) {
                var e = !1, i = p, n = s ? s.info("scrollDirection") : "PAUSED", r = f.reverse || t >= d;
                if (0 === f.duration ? (e = d != t, d = 1 > t && r ? 0 : 1, p = 0 === d ? a : l) : 0 > t && p !== a && r ? (d = 0, p = a, e = !0) : t >= 0 && 1 > t && r ? (d = t, p = l, e = !0) : t >= 1 && p !== c ? (d = 1, p = c, e = !0) : p !== l || r || D(), e) {
                    var o = {progress: d, state: p, scrollDirection: n}, u = p != i, m = function (t) {
                        h.trigger(t, o)
                    };
                    u && i !== l && (m("enter"), m(i === a ? "start" : "end")), m("progress"), u && p !== l && (m(p === a ? "start" : "end"), m("leave"))
                }
                return h
            }
            return d
        };
        var b = function () {
            m = {start: g + f.offset}, s && f.triggerElement && (m.start -= s.info("size") * f.triggerHook), m.end = m.start + f.duration
        }, w = function (t) {
            if (o) {
                var e = "duration";
                k(e, o.call(h)) && !t && (h.trigger("change", {what: e, newval: f[e]}), h.trigger("shift", {reason: e}))
            }
        }, x = function (t) {
            var i = 0, n = f.triggerElement;
            if (s && n) {
                for (var o = s.info(), a = r.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(e);) n = n.parentNode;
                var c = r.get.offset(n);
                o.isDocument || (a[l] -= s.scrollPos()), i = c[l] - a[l]
            }
            var u = i != g;
            g = i, u && !t && h.trigger("shift", {reason: "triggerElementPosition"})
        }, T = function () {
            f.triggerHook > 0 && h.trigger("shift", {reason: "containerResize"})
        }, S = r.extend(n.validate, {
            duration: function (t) {
                if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                    var e = parseFloat(t) / 100;
                    t = function () {
                        return s ? s.info("size") * e : 0
                    }
                }
                if (r.type.Function(t)) {
                    o = t;
                    try {
                        t = parseFloat(o())
                    } catch (i) {
                        t = -1
                    }
                }
                if (t = parseFloat(t), !r.type.Number(t) || 0 > t) throw o ? (o = void 0, 0) : 0;
                return t
            }
        }), C = function (t) {
            t = arguments.length ? [t] : Object.keys(S), t.forEach(function (t) {
                var e;
                if (S[t]) try {
                    e = S[t](f[t])
                } catch (i) {
                    e = u[t]
                } finally {
                    f[t] = e
                }
            })
        }, k = function (t, e) {
            var i = !1, n = f[t];
            return f[t] != e && (f[t] = e, C(t), i = n != f[t]), i
        }, A = function (t) {
            h[t] || (h[t] = function (e) {
                return arguments.length ? ("duration" === t && (o = void 0), k(t, e) && (h.trigger("change", {
                    what: t,
                    newval: f[t]
                }), n.shifts.indexOf(t) > -1 && h.trigger("shift", {reason: t})), h) : f[t]
            })
        };
        this.controller = function () {
            return s
        }, this.state = function () {
            return p
        }, this.scrollOffset = function () {
            return m.start
        }, this.triggerPosition = function () {
            var t = f.offset;
            return s && (t += f.triggerElement ? g : s.info("size") * h.triggerHook()), t
        };
        var E, P;
        h.on("shift.internal", function (t) {
            var e = "duration" === t.reason;
            (p === c && e || p === l && 0 === f.duration) && D(), e && N()
        }).on("progress.internal", function () {
            D()
        }).on("add.internal", function () {
            N()
        }).on("destroy.internal", function (t) {
            h.removePin(t.reset)
        });
        var D = function (t) {
            if (E && s) {
                var e = s.info(), i = P.spacer.firstChild;
                if (t || p !== l) {
                    var n = {position: P.inFlow ? "relative" : "absolute", top: 0, left: 0},
                        o = r.css(i, "position") != n.position;
                    P.pushFollowers ? f.duration > 0 && (p === c && 0 === parseFloat(r.css(P.spacer, "padding-top")) ? o = !0 : p === a && 0 === parseFloat(r.css(P.spacer, "padding-bottom")) && (o = !0)) : n[e.vertical ? "top" : "left"] = f.duration * d, r.css(i, n), o && N()
                } else {
                    "fixed" != r.css(i, "position") && (r.css(i, {position: "fixed"}), N());
                    var u = r.get.offset(P.spacer, !0),
                        h = f.reverse || 0 === f.duration ? e.scrollPos - m.start : Math.round(d * f.duration * 10) / 10;
                    u[e.vertical ? "top" : "left"] += h, r.css(P.spacer.firstChild, {top: u.top, left: u.left})
                }
            }
        }, N = function () {
            if (E && s && P.inFlow) {
                var t = p === l, e = s.info("vertical"), i = P.spacer.firstChild,
                    n = r.isMarginCollapseType(r.css(P.spacer, "display")), o = {};
                P.relSize.width || P.relSize.autoFullWidth ? t ? r.css(E, {width: r.get.width(P.spacer)}) : r.css(E, {width: "100%"}) : (o["min-width"] = r.get.width(e ? E : i, !0, !0), o.width = t ? o["min-width"] : "auto"), P.relSize.height ? t ? r.css(E, {height: r.get.height(P.spacer) - (P.pushFollowers ? f.duration : 0)}) : r.css(E, {height: "100%"}) : (o["min-height"] = r.get.height(e ? i : E, !0, !n), o.height = t ? o["min-height"] : "auto"), P.pushFollowers && (o["padding" + (e ? "Top" : "Left")] = f.duration * d, o["padding" + (e ? "Bottom" : "Right")] = f.duration * (1 - d)), r.css(P.spacer, o)
            }
        }, O = function () {
            s && E && p === l && !s.info("isDocument") && D()
        }, R = function () {
            s && E && p === l && ((P.relSize.width || P.relSize.autoFullWidth) && r.get.width(window) != r.get.width(P.spacer.parentNode) || P.relSize.height && r.get.height(window) != r.get.height(P.spacer.parentNode)) && N()
        }, $ = function (t) {
            s && E && p === l && !s.info("isDocument") && (t.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((t.wheelDelta || t[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
        };
        this.setPin = function (t, i) {
            var n = {pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer"};
            if (i = r.extend({}, n, i), t = r.get.elements(t)[0], !t) return h;
            if ("fixed" === r.css(t, "position")) return h;
            if (E) {
                if (E === t) return h;
                h.removePin()
            }
            E = t;
            var o = E.parentNode.style.display,
                s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            E.parentNode.style.display = "none";
            var a = "absolute" != r.css(E, "position"), l = r.css(E, s.concat(["display"])),
                c = r.css(E, ["width", "height"]);
            E.parentNode.style.display = o, !a && i.pushFollowers && (i.pushFollowers = !1);
            var u = E.parentNode.insertBefore(document.createElement("div"), E), f = r.extend(l, {
                position: a ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (a || r.extend(f, r.css(E, ["width", "height"])), r.css(u, f), u.setAttribute(e, ""), r.addClass(u, i.spacerClass), P = {
                    spacer: u,
                    relSize: {
                        width: "%" === c.width.slice(-1),
                        height: "%" === c.height.slice(-1),
                        autoFullWidth: "auto" === c.width && a && r.isMarginCollapseType(l.display)
                    },
                    pushFollowers: i.pushFollowers,
                    inFlow: a
                }, !E.___origStyle) {
                E.___origStyle = {};
                var p = E.style,
                    d = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                d.forEach(function (t) {
                    E.___origStyle[t] = p[t] || ""
                })
            }
            return P.relSize.width && r.css(u, {width: c.width}), P.relSize.height && r.css(u, {height: c.height}), u.appendChild(E), r.css(E, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (P.relSize.width || P.relSize.autoFullWidth) && r.css(E, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", O), window.addEventListener("resize", O), window.addEventListener("resize", R), E.addEventListener("mousewheel", $), E.addEventListener("DOMMouseScroll", $), D(), h
        }, this.removePin = function (t) {
            if (E) {
                if (p === l && D(!0), t || !s) {
                    var i = P.spacer.firstChild;
                    if (i.hasAttribute(e)) {
                        var n = P.spacer.style,
                            o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {}, o.forEach(function (t) {
                            margins[t] = n[t] || ""
                        }), r.css(i, margins)
                    }
                    P.spacer.parentNode.insertBefore(i, P.spacer), P.spacer.parentNode.removeChild(P.spacer), E.parentNode.hasAttribute(e) || (r.css(E, E.___origStyle), delete E.___origStyle)
                }
                window.removeEventListener("scroll", O), window.removeEventListener("resize", O), window.removeEventListener("resize", R), E.removeEventListener("mousewheel", $), E.removeEventListener("DOMMouseScroll", $), E = void 0
            }
            return h
        };
        var L, M = [];
        return h.on("destroy.internal", function (t) {
            h.removeClassToggle(t.reset)
        }), this.setClassToggle = function (t, e) {
            var i = r.get.elements(t);
            return 0 !== i.length && r.type.String(e) ? (M.length > 0 && h.removeClassToggle(), L = e, M = i, h.on("enter.internal_class leave.internal_class", function (t) {
                var e = "enter" === t.type ? r.addClass : r.removeClass;
                M.forEach(function (t) {
                    e(t, L)
                })
            }), h) : h
        }, this.removeClassToggle = function (t) {
            return t && M.forEach(function (t) {
                r.removeClass(t, L)
            }), h.off("start.internal_class end.internal_class"), L = void 0, M = [], h
        }, _(), h
    };
    var n = {
        defaults: {duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2},
        validate: {
            offset: function (t) {
                if (t = parseFloat(t), !r.type.Number(t)) throw 0;
                return t
            }, triggerElement: function (t) {
                if (t = t || void 0) {
                    var e = r.get.elements(t)[0];
                    if (!e) throw 0;
                    t = e
                }
                return t
            }, triggerHook: function (t) {
                var e = {onCenter: .5, onEnter: 1, onLeave: 0};
                if (r.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1)); else {
                    if (!(t in e)) throw 0;
                    t = e[t]
                }
                return t
            }, reverse: function (t) {
                return !!t
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    t.Scene.addOption = function (t, e, i, r) {
        t in n.defaults || (n.defaults[t] = e, n.validate[t] = i, r && n.shifts.push(t))
    }, t.Scene.extend = function (e) {
        var i = this;
        t.Scene = function () {
            return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
        }, r.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
    }, t.Event = function (t, e, i, n) {
        n = n || {};
        for (var r in n) this[r] = n[r];
        return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var r = t._util = function (t) {
        var e, i = {}, n = function (t) {
            return parseFloat(t) || 0
        }, r = function (e) {
            return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
        }, o = function (e, i, o, s) {
            if (i = i === document ? t : i, i === t) s = !1; else if (!h.DomElement(i)) return 0;
            e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
            var a = (o ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
            if (o && s) {
                var l = r(i);
                a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
            }
            return a
        }, s = function (t) {
            return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (t) {
                return t[1].toUpperCase()
            })
        };
        i.extend = function (t) {
            for (t = t || {}, e = 1; e < arguments.length; e++) if (arguments[e]) for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t
        }, i.isMarginCollapseType = function (t) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
        };
        var a = 0, l = ["ms", "moz", "webkit", "o"], c = t.requestAnimationFrame, u = t.cancelAnimationFrame;
        for (e = 0; !c && e < l.length; ++e) c = t[l[e] + "RequestAnimationFrame"], u = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
        c || (c = function (e) {
            var i = (new Date).getTime(), n = Math.max(0, 16 - (i - a)), r = t.setTimeout(function () {
                e(i + n)
            }, n);
            return a = i + n, r
        }), u || (u = function (e) {
            t.clearTimeout(e)
        }), i.rAF = c.bind(t), i.cAF = u.bind(t);
        var h = i.type = function (t) {
            return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        h.String = function (t) {
            return "string" === h(t)
        }, h.Function = function (t) {
            return "function" === h(t)
        }, h.Array = function (t) {
            return Array.isArray(t)
        }, h.Number = function (t) {
            return !h.Array(t) && t - parseFloat(t) + 1 >= 0
        }, h.DomElement = function (t) {
            return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
        };
        var f = i.get = {};
        return f.elements = function (e) {
            var i = [];
            if (h.String(e)) try {
                e = document.querySelectorAll(e)
            } catch (n) {
                return i
            }
            if ("nodelist" === h(e) || h.Array(e)) for (var r = 0, o = i.length = e.length; o > r; r++) {
                var s = e[r];
                i[r] = h.DomElement(s) ? s : f.elements(s)
            } else (h.DomElement(e) || e === document || e === t) && (i = [e]);
            return i
        }, f.scrollTop = function (e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
        }, f.scrollLeft = function (e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
        }, f.width = function (t, e, i) {
            return o("width", t, e, i)
        }, f.height = function (t, e, i) {
            return o("height", t, e, i)
        }, f.offset = function (t, e) {
            var i = {top: 0, left: 0};
            if (t && t.getBoundingClientRect) {
                var n = t.getBoundingClientRect();
                i.top = n.top, i.left = n.left, e || (i.top += f.scrollTop(), i.left += f.scrollLeft())
            }
            return i
        }, i.addClass = function (t, e) {
            e && (t.classList ? t.classList.add(e) : t.className += " " + e)
        }, i.removeClass = function (t, e) {
            e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, i.css = function (t, e) {
            if (h.String(e)) return r(t)[s(e)];
            if (h.Array(e)) {
                var i = {}, n = r(t);
                return e.forEach(function (t) {
                    i[t] = n[s(t)]
                }), i
            }
            for (var o in e) {
                var a = e[o];
                a == parseFloat(a) && (a += "px"), t.style[s(o)] = a
            }
        }, i
    }(window || {});
    return t
});
var r = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(r._gsQueue || (r._gsQueue = [])).push(function () {
    "use strict";
    r._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++])) ;
            return i
        }, r = function (t, e, n) {
            i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
        }, o = 1e-10, s = i._internals, a = s.isSelector, l = s.isArray, c = r.prototype = i.to({}, .1, {}), u = [];
        r.version = "1.15.1", c.constructor = r, c.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, c.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, c.updateTo = function (t, e) {
            var n, r = this.ratio, o = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t) this.vars[n] = t[n];
            if (this._initted || o) if (e) this._initted = !1, o && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var s = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
            } else if (this._time > 0 || o) {
                this._initted = !1, this._init();
                for (var a, l = 1 / (1 - r), c = this._firstPT; c;) a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next
            }
            return this
        }, c.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, r, a, l, c, h, f, p, d = this._dirty ? this.totalDuration() : this._totalDuration, m = this._time,
                g = this._totalTime, v = this._cycle, _ = this._duration, y = this._rawPrevTime;
            if (t >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete"), 0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === o) && y !== t && (i = !0, y > o && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || y === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === _ && y > 0 && y !== o) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = p = !e || t || y === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _ : 0 > this._time && (this._time = 0)), this._easeType ? (c = this._time / _, h = this._easeType, f = this._easePower, (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : .5 > this._time / _ ? c / 2 : 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / _)), m === this._time && !i && v === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = y, this._cycle = v, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                this._time && !n ? this.ratio = this._ease.getRatio(this._time / _) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== g || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || u), 0 === _ && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
        }, r.to = function (t, e, i) {
            return new r(t, e, i)
        }, r.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
        }, r.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
        }, r.staggerTo = r.allTo = function (t, e, o, s, c, h, f) {
            s = s || 0;
            var p, d, m, g, v = o.delay || 0, _ = [], y = function () {
                o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(f || this, h || u)
            };
            for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > s && (t = n(t), t.reverse(), s *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                d = {};
                for (g in o) d[g] = o[g];
                d.delay = v, m === p && c && (d.onComplete = y), _[m] = new r(t[m], e, d), v += s
            }
            return _
        }, r.staggerFrom = r.allFrom = function (t, e, i, n, o, s, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, o, s, a)
        }, r.staggerFromTo = r.allFromTo = function (t, e, i, n, o, s, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, o, s, a, l)
        }, r.delayedCall = function (t, e, i, n, o) {
            return new r(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: o,
                overwrite: 0
            })
        }, r.set = function (t, e) {
            return new r(t, 0, e)
        }, r.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var h = function (t, e) {
            for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(h(o, e)), r = n.length), o = o._next;
            return n
        }, f = r.getAllTweens = function (e) {
            return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
        };
        r.killAll = function (t, i, n, r) {
            null == i && (i = !0), null == n && (n = !0);
            var o, s, a, l = f(0 != r), c = l.length, u = i && n && r;
            for (a = 0; c > a; a++) s = l[a], (u || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
        }, r.killChildTweensOf = function (t, e) {
            if (null != t) {
                var o, c, u, h, f, p = s.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t)) for (h = t.length; --h > -1;) r.killChildTweensOf(t[h], e); else {
                    o = [];
                    for (u in p) for (c = p[u].target.parentNode; c;) c === t && (o = o.concat(p[u].tweens)), c = c.parentNode;
                    for (f = o.length, h = 0; f > h; h++) e && o[h].totalTime(o[h].totalDuration()), o[h]._enabled(!1, !1)
                }
            }
        };
        var p = function (t, i, n, r) {
            i = i !== !1, n = n !== !1, r = r !== !1;
            for (var o, s, a = f(r), l = i && n && r, c = a.length; --c > -1;) s = a[c], (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
        };
        return r.pauseAll = function (t, e, i) {
            p(!0, t, e, i)
        }, r.resumeAll = function (t, e, i) {
            p(!1, t, e, i)
        }, r.globalTimeScale = function (e) {
            var n = t._rootTimeline, r = i.ticker.time;
            return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
        }, c.progress = function (t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, c.totalProgress = function (t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, c.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, c.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, c.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, c.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, c.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, c.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r
    }, !0), r._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
                e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var i, n, r = this.vars;
                for (n in r) i = r[n], c(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                c(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
            }, o = 1e-10, s = i._internals, a = n._internals = {}, l = s.isSelector, c = s.isArray, u = s.lazyTweens,
            h = s.lazyRender, f = [], p = r._gsDefine.globals, d = function (t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            }, m = a.pauseCallback = function (t, e, i, n) {
                var r = t._timeline, o = r._totalTime;
                !e && this._forcingPlayhead || r._rawPrevTime === t._startTime || (r.pause(t._startTime), e && e.apply(n || r, i || f), this._forcingPlayhead && r.seek(o))
            }, g = function (t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++])) ;
                return i
            }, v = n.prototype = new e;
        return n.version = "1.15.1", v.constructor = n, v.kill()._gc = v._forcingPlayhead = !1, v.to = function (t, e, n, r) {
            var o = n.repeat && p.TweenMax || i;
            return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
        }, v.from = function (t, e, n, r) {
            return this.add((n.repeat && p.TweenMax || i).from(t, e, n), r)
        }, v.fromTo = function (t, e, n, r, o) {
            var s = r.repeat && p.TweenMax || i;
            return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
        }, v.staggerTo = function (t, e, r, o, s, a, c, u) {
            var h, f = new n({
                onComplete: a,
                onCompleteParams: c,
                onCompleteScope: u,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], l(t) && (t = g(t)), o = o || 0, 0 > o && (t = g(t), t.reverse(), o *= -1), h = 0; t.length > h; h++) r.startAt && (r.startAt = d(r.startAt)), f.to(t[h], e, d(r), h * o);
            return this.add(f, s)
        }, v.staggerFrom = function (t, e, i, n, r, o, s, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, s, a)
        }, v.staggerFromTo = function (t, e, i, n, r, o, s, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, s, a, l)
        }, v.call = function (t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r)
        }, v.set = function (t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
        }, n.exportRoot = function (t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, o, s = new n(t), a = s._timeline;
            for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
            return a.add(s, 0), s
        }, v.add = function (r, o, s, a) {
            var l, u, h, f, p, d;
            if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && c(r)) {
                    for (s = s || "normal", a = a || 0, l = o, u = r.length, h = 0; u > h; h++) c(f = r[h]) && (f = new n({tweens: f})), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === s ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), l += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof r) return this.addLabel(r, o);
                if ("function" != typeof r) throw"Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
            return this
        }, v.remove = function (e) {
            if (e instanceof t) return this._remove(e, !1);
            if (e instanceof Array || e && e.push && c(e)) {
                for (var i = e.length; --i > -1;) this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, v._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, v.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, v.insert = v.insertMultiple = function (t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, v.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, v.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, v.addPause = function (t, e, n, r) {
            var o = i.delayedCall(0, m, ["{self}", e, n, r], this);
            return o.data = "isPause", this.add(o, t)
        }, v.removeLabel = function (t) {
            return delete this._labels[t], this
        }, v.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, v._parseTimeOrLabel = function (e, i, n, r) {
            var o;
            if (r instanceof t && r.timeline === this) this.remove(r); else if (r && (r instanceof Array || r.push && c(r))) for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration()); else {
                if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }, v.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, v.stop = function () {
            return this.paused(!0)
        }, v.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, v.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, v.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, a, l, c = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time,
                d = this._startTime, m = this._timeScale, g = this._paused;
            if (t >= c ? (this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === o) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > o && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : o, t = c + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== o && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : o, t = 0, this._initted || (l = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f)), this._time >= p) for (n = this._first; n && (s = n._next, !this._paused || g);) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s; else for (n = this._last; n && (s = n._prev, !this._paused || g);) (n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                this._onUpdate && (e || (u.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f))), a && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (u.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || f)))
            }
        }, v._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, v.getChildren = function (t, e, n, r) {
            r = r || -9999999999;
            for (var o = [], s = this._first, a = 0; s;) r > s._startTime || (s instanceof i ? e !== !1 && (o[a++] = s) : (n !== !1 && (o[a++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))), s = s._next;
            return o
        }, v.getTweensOf = function (t, e) {
            var n, r, o = this._gc, s = [], a = 0;
            for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;) (n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
            return o && this._enabled(!1, !0), s
        }, v.recent = function () {
            return this._recent
        }, v._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, v.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
            if (e) for (n in o) o[n] >= i && (o[n] += t);
            return this._uncache(!0)
        }, v._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
            return r
        }, v.clear = function (t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, v.invalidate = function () {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, v._enabled = function (t, i) {
            if (t === this._gc) for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }, v.totalTime = function () {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e
        }, v.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, v.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, v.usesFrames = function () {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        }, v.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, n
    }, !0), r._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var n = function (e) {
                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
            }, r = 1e-10, o = [], s = e._internals, a = s.lazyTweens, l = s.lazyRender, c = new i(null, null, 1, 0),
            u = n.prototype = new t;
        return u.constructor = n, u.kill()._gc = !1, n.version = "1.15.1", u.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, u.addCallback = function (t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i)
        }, u.removeCallback = function (t, e) {
            if (t) if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, u.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }, u.tweenTo = function (t, i) {
            i = i || {};
            var n, r, s, a = {ease: c, useFrames: this.usesFrames(), immediateRender: !1};
            for (r in i) a[r] = i[r];
            return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, s = new e(this, n, a), a.onStart = function () {
                s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || s, i.onStartParams || o)
            }, s
        }, u.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this
            }, i.immediateRender = i.immediateRender !== !1;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, u.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, s, c, u, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._duration,
                m = this._time, g = this._totalTime, v = this._startTime, _ = this._timeScale, y = this._rawPrevTime,
                b = this._paused, w = this._cycle;
            if (t >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (h = !0, y > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (h = !0))) : (0 === d && 0 > y && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (f = d + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
                var x = this._yoyo && 0 !== (1 & w), T = x === (this._yoyo && 0 !== (1 & this._cycle)),
                    S = this._totalTime, C = this._cycle, k = this._rawPrevTime, A = this._time;
                if (this._totalTime = w * d, w > this._cycle ? x = !x : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o), T && (m = x ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !b) return;
                this._time = A, this._totalTime = S, this._cycle = C, this._rawPrevTime = k
            }
            if (!(this._time !== m && this._first || i || h)) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)), this._time >= m) for (n = this._first; n && (c = n._next, !this._paused || b);) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = c; else for (n = this._last; n && (c = n._prev, !this._paused || b);) (n._active || m >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = c;
            this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o))), u && (this._locked || this._gc || (v === this._startTime || _ !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || o)))
        }, u.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, r, o = [], s = this.getChildren(t, e, i), a = 0, l = s.length;
            for (n = 0; l > n; n++) r = s[n], r.isActive() && (o[a++] = r);
            return o
        }, u.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++) if (i[e].time > t) return i[e].name;
            return null
        }, u.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (t > e[i].time) return e[i].name;
            return null
        }, u.getLabelsArray = function () {
            var t, e = [], i = 0;
            for (t in this._labels) e[i++] = {time: this._labels[t], name: t};
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, u.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, u.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, u.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, u.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, u.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, u.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
    }, !0), function () {
        var t = 180 / Math.PI, e = [], i = [], n = [], o = {}, s = r._gsDefine.globals, a = function (t, e, i, n) {
                this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
            },
            l = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            c = function (t, e, i, n) {
                var r = {a: t}, o = {}, s = {}, a = {c: n}, l = (t + e) / 2, c = (e + i) / 2, u = (i + n) / 2,
                    h = (l + c) / 2, f = (c + u) / 2, p = (f - h) / 8;
                return r.b = l + (t - l) / 4, o.b = h + p, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (h + f) / 2, s.b = f - p, a.b = u + (n - u) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
            }, u = function (t, r, o, s, a) {
                var l, u, h, f, p, d, m, g, v, _, y, b, w, x = t.length - 1, T = 0, S = t[0].a;
                for (l = 0; x > l; l++) p = t[T], u = p.a, h = p.d, f = t[T + 1].d, a ? (y = e[l], b = i[l], w = .25 * (b + y) * r / (s ? .5 : n[l] || .5), d = h - (h - u) * (s ? .5 * r : 0 !== y ? w / y : 0), m = h + (f - h) * (s ? .5 * r : 0 !== b ? w / b : 0), g = h - (d + ((m - d) * (3 * y / (y + b) + .5) / 4 || 0))) : (d = h - .5 * (h - u) * r, m = h + .5 * (f - h) * r, g = h - (d + m) / 2), d += g, m += g, p.c = v = d, p.b = 0 !== l ? S : S = p.a + .6 * (p.c - p.a), p.da = h - u, p.ca = v - u, p.ba = S - u, o ? (_ = c(u, S, v, h), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, S = m;
                p = t[T], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, o && (_ = c(p.a, S, p.c, p.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
            }, h = function (t, n, r, o) {
                var s, l, c, u, h, f, p = [];
                if (o) for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = o[n] + Number(f.charAt(0) + f.substr(2)));
                if (s = t.length - 2, 0 > s) return p[0] = new a(t[0][n], 0, 0, t[-1 > s ? 0 : 1][n]), p;
                for (l = 0; s > l; l++) c = t[l][n], u = t[l + 1][n], p[l] = new a(c, 0, 0, u), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (h - u) * (h - u));
                return p[l] = new a(t[l][n], 0, 0, t[l + 1][n]), p
            }, f = function (t, r, s, a, c, f) {
                var p, d, m, g, v, _, y, b, w = {}, x = [], T = f || t[0];
                c = "string" == typeof c ? "," + c + "," : l, null == r && (r = 1);
                for (d in t[0]) x.push(d);
                if (t.length > 1) {
                    for (b = t[t.length - 1], y = !0, p = x.length; --p > -1;) if (d = x[p], Math.abs(T[d] - b[d]) > .05) {
                        y = !1;
                        break
                    }
                    y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                }
                for (e.length = i.length = n.length = 0, p = x.length; --p > -1;) d = x[p], o[d] = -1 !== c.indexOf("," + d + ","), w[d] = h(t, d, o[d], f);
                for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                if (!a) {
                    for (p = x.length; --p > -1;) if (o[d]) for (m = w[x[p]], _ = m.length - 1, g = 0; _ > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + v * v;
                    for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                }
                for (p = x.length, g = s ? 4 : 1; --p > -1;) d = x[p], m = w[d], u(m, r, s, a, o[d]), y && (m.splice(0, g), m.splice(m.length - g, g));
                return w
            }, p = function (t, e, i) {
                e = e || "soft";
                var n, r, o, s, l, c, u, h, f, p, d, m = {}, g = "cubic" === e ? 3 : 2, v = "soft" === e, _ = [];
                if (v && i && (t = [i].concat(t)), null == t || g + 1 > t.length) throw"invalid Bezier data";
                for (f in t[0]) _.push(f);
                for (c = _.length; --c > -1;) {
                    for (f = _[c], m[f] = l = [], p = 0, h = t.length, u = 0; h > u; u++) n = null == i ? t[u][f] : "string" == typeof(d = t[u][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), v && u > 1 && h - 1 > u && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                    for (h = p - g + 1, p = 0, u = 0; h > u; u += g) n = l[u], r = l[u + 1], o = l[u + 2], s = 2 === g ? 0 : l[u + 3], l[p++] = d = 3 === g ? new a(n, r, o, s) : new a(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                    l.length = p
                }
                return m
            }, d = function (t, e, i) {
                for (var n, r, o, s, a, l, c, u, h, f, p, d = 1 / i, m = t.length; --m > -1;) for (f = t[m], o = f.a, s = f.d - o, a = f.c - o, l = f.b - o, n = r = 0, u = 1; i >= u; u++) c = d * u, h = 1 - c, n = r - (r = (c * c * s + 3 * h * (c * a + h * l)) * c), p = m * i + u - 1, e[p] = (e[p] || 0) + n * n
            }, m = function (t, e) {
                e = e >> 0 || 6;
                var i, n, r, o, s = [], a = [], l = 0, c = 0, u = e - 1, h = [], f = [];
                for (i in t) d(t[i], s, e);
                for (r = s.length, n = 0; r > n; n++) l += Math.sqrt(s[n]), o = n % e, f[o] = l, o === u && (c += l, o = n / e >> 0, h[o] = f, a[o] = c, l = 0, f = []);
                return {length: c, lengths: a, segments: h}
            }, g = r._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.4",
                API: 2,
                global: !0,
                init: function (t, e, i) {
                    this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var n, r, o, s, a, l = e.values || [], c = {}, u = l[0], h = e.autoRotate || i.vars.orientToBezier;
                    this._autoRotate = h ? h instanceof Array ? h : [["x", "y", "rotation", h === !0 ? 0 : Number(h) || 0]] : null;
                    for (n in u) this._props.push(n);
                    for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : p(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                        var d = m(this._beziers, this._timeRes);
                        this._length = d.length, this._lengths = d.lengths, this._segments = d.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (h = this._autoRotate) for (this._initialRotations = [], h[0] instanceof Array || (this._autoRotate = h = [h]), o = h.length; --o > -1;) {
                        for (s = 0; 3 > s; s++) n = h[o][s], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = h[o][2], this._initialRotations[o] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                    }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function (e) {
                    var i, n, r, o, s, a, l, c, u, h, f = this._segCount, p = this._func, d = this._target,
                        m = e !== this._startRatio;
                    if (this._timeRes) {
                        if (u = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                            for (c = f - 1; c > r && e >= (this._l2 = u[++r]);) ;
                            this._l1 = u[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                        } else if (this._l1 > e && r > 0) {
                            for (; r > 0 && (this._l1 = u[--r]) >= e;) ;
                            0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                        }
                        if (i = r, e -= this._l1, r = this._si, e > this._s2 && h.length - 1 > r) {
                            for (c = h.length - 1; c > r && e >= (this._s2 = h[++r]);) ;
                            this._s1 = h[r - 1], this._si = r
                        } else if (this._s1 > e && r > 0) {
                            for (; r > 0 && (this._s1 = h[--r]) >= e;) ;
                            0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                        }
                        a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f;
                    for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][i], l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._round[o] && (l = Math.round(l)), p[o] ? d[o](l) : d[o] = l;
                    if (this._autoRotate) {
                        var g, v, _, y, b, w, x, T = this._autoRotate;
                        for (r = T.length; --r > -1;) o = T[r][2], w = T[r][3] || 0, x = T[r][4] === !0 ? 1 : t, s = this._beziers[T[r][0]], g = this._beziers[T[r][1]], s && g && (s = s[i], g = g[i], v = s.a + (s.b - s.a) * a, y = s.b + (s.c - s.b) * a, v += (y - v) * a, y += (s.c + (s.d - s.c) * a - y) * a, _ = g.a + (g.b - g.a) * a, b = g.b + (g.c - g.b) * a, _ += (b - _) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - _, y - v) * x + w : this._initialRotations[r], p[o] ? d[o](l) : d[o] = l)
                    }
                }
            }), v = g.prototype;
        g.bezierThrough = f, g.cubicToQuadratic = c, g._autoCSS = !0, g.quadraticToCubic = function (t, e, i) {
            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, g._cssRegister = function () {
            var t = s.CSSPlugin;
            if (t) {
                var e = t._internals, i = e._parseToProxy, n = e._setPluginRatio, r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, o, s, a, l) {
                        e instanceof Array && (e = {values: e}), l = new g;
                        var c, u, h, f = e.values, p = f.length - 1, d = [], m = {};
                        if (0 > p) return a;
                        for (c = 0; p >= c; c++) h = i(t, f[c], s, a, l, p !== c), d[c] = h.end;
                        for (u in e) m[u] = e[u];
                        return m.values = d, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (c = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != h.end.left ? [["left", "top", "rotation", c, !1]] : null != h.end.x && [["x", "y", "rotation", c, !1]]), m.autoRotate && (s._transform || s._enableTransforms(!1), h.autoRotate = s._target._gsTransform), l._onInitTween(h.proxy, m, s._tween), a
                    }
                })
            }
        }, v._roundProps = function (t, e) {
            for (var i = this._overwriteProps, n = i.length; --n > -1;) (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e);
        }, v._kill = function (t) {
            var e, i, n = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), r._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i, n, o, s, a = function () {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
        }, l = r._gsDefine.globals, c = {}, u = a.prototype = new t("css");
        u.constructor = a, a.version = "1.15.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", u = "px", a.suffixMap = {
            top: u,
            right: u,
            bottom: u,
            left: u,
            width: u,
            height: u,
            fontSize: u,
            padding: u,
            margin: u,
            perspective: u,
            lineHeight: ""
        };
        var h, f, p, d, m, g, v = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            w = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, T = /opacity:([^;]*)/i,
            S = /alpha\(opacity *=.+?\)/i, C = /^(rgb|hsl)/, k = /([A-Z])/g, A = /-([a-z])/gi,
            E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, P = function (t, e) {
                return e.toUpperCase()
            }, D = /(?:Left|Right|Width)/i, N = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, R = /,(?=[^\)]*(?:\(|$))/gi, $ = Math.PI / 180,
            L = 180 / Math.PI, M = {}, I = document, j = function (t) {
                return I.createElementNS ? I.createElementNS("http://www.w3.org/1999/xhtml", t) : I.createElement(t)
            }, F = j("div"), z = j("img"), B = a._internals = {_specialProps: c}, H = navigator.userAgent, q = function () {
                var t = H.indexOf("Android"), e = j("a");
                return p = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === t || Number(H.substr(t + 8, 1)) > 3), m = p && 6 > Number(H.substr(H.indexOf("Version/") + 8, 1)), d = -1 !== H.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
            }(), U = function (t) {
                return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, X = function (t) {
                window.console && console.log(t)
            }, W = "", Y = "", V = function (t, e) {
                e = e || F;
                var i, n, r = e.style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];) ;
                return n >= 0 ? (Y = 3 === n ? "ms" : i[n], W = "-" + Y.toLowerCase() + "-", Y + t) : null
            }, Q = I.defaultView ? I.defaultView.getComputedStyle : function () {
            }, G = a.getStyle = function (t, e, i, n, r) {
                var o;
                return q || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || Q(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : U(t)
            }, Z = B.convertToPixels = function (t, i, n, r, o) {
                if ("px" === r || !r) return n;
                if ("auto" === r || !n) return 0;
                var s, l, c, u = D.test(i), h = t, f = F.style, p = 0 > n;
                if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) s = n / 100 * (u ? t.clientWidth : t.clientHeight); else {
                    if (f.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== r && h.appendChild) f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r; else {
                        if (h = t.parentNode || I.body, l = h._gsCache, c = e.ticker.frame, l && u && l.time === c) return l.width * n / 100;
                        f[u ? "width" : "height"] = n + r
                    }
                    h.appendChild(F), s = parseFloat(F[u ? "offsetWidth" : "offsetHeight"]), h.removeChild(F), u && "%" === r && a.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = c, l.width = 100 * (s / n)), 0 !== s || o || (s = Z(t, i, n, r, !0))
                }
                return p ? -s : s
            }, J = B.calculateOffset = function (t, e, i) {
                if ("absolute" !== G(t, "position", i)) return 0;
                var n = "left" === e ? "Left" : "Top", r = G(t, "margin" + n, i);
                return t["offset" + n] - (Z(t, e, parseFloat(r), r.replace(w, "")) || 0)
            }, K = function (t, e) {
                var i, n, r = {};
                if (e = e || Q(t, null)) for (i in e) (-1 === i.indexOf("Transform") || Tt === i) && (r[i] = e[i]); else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(A, P)] = e[i]);
                return q || (r.opacity = U(t)), n = Rt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, kt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
            }, tt = function (t, e, i, n, r) {
                var o, s, a, l = {}, c = t.style;
                for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(b, "") ? o : 0 : J(t, s), void 0 !== c[s] && (a = new dt(c, s, c[s], a)));
                if (n) for (s in n) "className" !== s && (l[s] = n[s]);
                return {difs: l, firstMPT: a}
            }, et = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            it = ["marginLeft", "marginRight", "marginTop", "marginBottom"], nt = function (t, e, i) {
                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = et[e], o = r.length;
                for (i = i || Q(t, null); --o > -1;) n -= parseFloat(G(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(G(t, "border" + r[o] + "Width", i, !0)) || 0;
                return n
            }, rt = function (t, e) {
                (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                var i = t.split(" "), n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                    r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(b, "")), e.oy = parseFloat(r.replace(b, ""))), n + " " + r + (i.length > 2 ? " " + i[2] : "")
            }, ot = function (t, e) {
                return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
            }, st = function (t, e) {
                return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
            }, at = function (t, e, i, n) {
                var r, o, s, a, l, c = 1e-6;
                return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (l ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (0 | s / r) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (0 | s / r) * r)), a = e + s), c > a && a > -c && (a = 0), a
            }, lt = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, ct = function (t, e, i) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
            }, ut = a.parseColor = function (t) {
                var e, i, n, r, o, s;
                return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), lt[t] ? lt[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(v), r = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, s = Number(t[2]) / 100, i = .5 >= s ? s * (o + 1) : s + o - s * o, e = 2 * s - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ct(r + 1 / 3, e, i), t[1] = ct(r, e, i), t[2] = ct(r - 1 / 3, e, i), t) : (t = t.match(v) || lt.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : lt.black
            }, ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (u in lt) ht += "|" + u + "\\b";
        ht = RegExp(ht + ")", "gi");
        var ft = function (t, e, i, n) {
            if (null == t) return function (t) {
                return t
            };
            var r, o = e ? (t.match(ht) || [""])[0] : "", s = t.split(o).join("").match(y) || [],
                a = t.substr(0, t.indexOf(s[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "",
                c = -1 !== t.indexOf(" ") ? " " : ",", u = s.length, h = u > 0 ? s[0].replace(v, "") : "";
            return u ? r = e ? function (t) {
                var e, f, p, d;
                if ("number" == typeof t) t += h; else if (n && R.test(t)) {
                    for (d = t.replace(R, "|").split("|"), p = 0; d.length > p; p++) d[p] = r(d[p]);
                    return d.join(",")
                }
                if (e = (t.match(ht) || [o])[0], f = t.split(e).join("").match(y) || [], p = f.length, u > p--) for (; u > ++p;) f[p] = i ? f[0 | (p - 1) / 2] : s[p];
                return a + f.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
                var e, o, f;
                if ("number" == typeof t) t += h; else if (n && R.test(t)) {
                    for (o = t.replace(R, "|").split("|"), f = 0; o.length > f; f++) o[f] = r(o[f]);
                    return o.join(",")
                }
                if (e = t.match(y) || [], f = e.length, u > f--) for (; u > ++f;) e[f] = i ? e[0 | (f - 1) / 2] : s[f];
                return a + e.join(c) + l
            } : function (t) {
                return t
            }
        }, pt = function (t) {
            return t = t.split(","), function (e, i, n, r, o, s, a) {
                var l, c = (i + "").split(" ");
                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                return r.parse(e, a, o, s)
            }
        }, dt = (B._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, n, r, o = this.data, s = o.proxy, a = o.firstMPT, l = 1e-6; a;) e = s[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
            if (o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === t) for (a = o.firstMPT; a;) {
                if (i = a.t, i.type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                        i.e = r
                    }
                } else i.e = i.s + i.xs0;
                a = a._next
            }
        }, function (t, e, i, n, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
        }), mt = (B._parseToProxy = function (t, e, i, n, r, o) {
            var s, a, l, c, u, h = n, f = {}, p = {}, d = i._transform, m = M;
            for (i._transform = null, M = e, n = u = i.parse(t, e, n, r), M = m, o && (i._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                if (1 >= n.type && (a = n.p, p[a] = n.s + n.c, f[a] = n.s, o || (c = new dt(n, "s", a, c, n.r), n.c = 0), 1 === n.type)) for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, p[a] = n.data[l], f[a] = n[l], o || (c = new dt(n, l, a, c, n.rxp[l]));
                n = n._next
            }
            return {proxy: f, end: p, firstMPT: c, pt: u}
        }, B.CSSPropTween = function (t, e, n, r, o, a, l, c, u, h, f) {
            this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof mt || s.push(this.n), this.r = c, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === f ? n + r : f, o && (this._next = o, o._prev = this)
        }), gt = a.parseComplex = function (t, e, i, n, r, o, s, a, l, c) {
            i = i || o || "", s = new mt(t, e, 0, 0, s, c ? 2 : 1, null, (!1), a, i, n), n += "";
            var u, f, p, d, m, g, y, b, w, x, T, S, k = i.split(", ").join(",").split(" "),
                A = n.split(", ").join(",").split(" "), E = k.length, P = h !== !1;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(R, ", ").split(" "), A = A.join(" ").replace(R, ", ").split(" "), E = k.length), E !== A.length && (k = (o || "").split(" "), E = k.length), s.plugin = l, s.setRatio = c, u = 0; E > u; u++) if (d = k[u], m = A[u], b = parseFloat(d), b || 0 === b) s.appendXtra("", b, ot(m, b), m.replace(_, ""), P && -1 !== m.indexOf("px"), !0); else if (r && ("#" === d.charAt(0) || lt[d] || C.test(d))) S = "," === m.charAt(m.length - 1) ? ")," : ")", d = ut(d), m = ut(m), w = d.length + m.length > 6, w && !q && 0 === m[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(A[u]).join("transparent")) : (q || (w = !1), s.appendXtra(w ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], w ? "," : S, !0), w && (d = 4 > d.length ? 1 : d[3], s.appendXtra("", d, (4 > m.length ? 1 : m[3]) - d, S, !1))); else if (g = d.match(v)) {
                if (y = m.match(_), !y || y.length !== g.length) return s;
                for (p = 0, f = 0; g.length > f; f++) T = g[f], x = d.indexOf(T, p), s.appendXtra(d.substr(p, x - p), Number(T), ot(y[f], T), "", P && "px" === d.substr(x + T.length, 2), 0 === f), p = x + T.length;
                s["xs" + s.l] += d.substr(p)
            } else s["xs" + s.l] += s.l ? " " + d : d;
            if (-1 !== n.indexOf("=") && s.data) {
                for (S = s.xs0 + s.data.s, u = 1; s.l > u; u++) S += s["xs" + u] + s.data["xn" + u];
                s.e = S + s["xs" + u]
            }
            return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
        }, vt = 9;
        for (u = mt.prototype, u.l = u.pr = 0; --vt > 0;) u["xn" + vt] = 0, u["xs" + vt] = "";
        u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function (t, e, i, n, r, o) {
            var s = this, a = s.l;
            return s["xs" + a] += o && a ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new mt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {s: e + i}, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
        };
        var _t = function (t, e) {
            e = e || {}, this.p = e.prefix ? V(t) || t : t, c[t] = c[this.p] = this, this.format = e.formatter || ft(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, yt = B._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var n, r, o = t.split(","), s = e.defaultValue;
            for (i = i || [s], n = 0; o.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new _t(o[n], e)
        }, bt = function (t) {
            if (!c[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                yt(t, {
                    parser: function (t, i, n, r, o, s, a) {
                        var u = l.com.greensock.plugins[e];
                        return u ? (u._cssRegister(), c[n].parse(t, i, n, r, o, s, a)) : (X("Error: " + e + " js file not loaded."), o)
                    }
                })
            }
        };
        u = _t.prototype, u.parseComplex = function (t, e, i, n, r, o) {
            var s, a, l, c, u, h, f = this.keyword;
            if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : f && (a = [e], l = [i])), l) {
                for (c = l.length > a.length ? l.length : a.length, s = 0; c > s; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, f && (u = e.indexOf(f), h = i.indexOf(f), u !== h && (i = -1 === h ? l : a, i[s] += " " + f));
                e = a.join(", "), i = l.join(", ")
            }
            return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
        }, u.parse = function (t, e, i, n, r, s) {
            return this.parseComplex(t.style, this.format(G(t, this.p, o, !1, this.dflt)), this.format(e), r, s)
        }, a.registerSpecialProp = function (t, e, i) {
            yt(t, {
                parser: function (t, n, r, o, s, a) {
                    var l = new mt(t, r, 0, 0, s, 2, r, (!1), i);
                    return l.plugin = a, l.setRatio = e(t, n, o._tween, r), l
                }, priority: i
            })
        };
        var wt,
            xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Tt = V("transform"), St = W + "transform", Ct = V("transformOrigin"), kt = null !== V("perspective"),
            At = B.Transform = function () {
                this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(a.defaultForce3D === !1 || !kt) && (a.defaultForce3D || "auto")
            }, Et = window.SVGElement, Pt = function (t, e, i) {
                var n, r = I.createElementNS("http://www.w3.org/2000/svg", t), o = /([a-z])([A-Z])/g;
                for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                return e.appendChild(r), r
            }, Dt = document.documentElement, Nt = function () {
                var t, e, i, n = g || /Android/i.test(H) && !window.chrome;
                return I.createElementNS && !n && (t = Pt("svg", Dt), e = Pt("rect", t, {
                    width: 100,
                    height: 50,
                    x: 100
                }), i = e.getBoundingClientRect().width, e.style[Ct] = "50% 50%", e.style[Tt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(d && kt), Dt.removeChild(t)), n
            }(), Ot = function (t, e, i) {
                var n = t.getBBox();
                e = rt(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
            }, Rt = B.getTransform = function (t, e, i, n) {
                if (t._gsTransform && i && !n) return t._gsTransform;
                var r, s, l, c, u, h, f, p, d, m, g = i ? t._gsTransform || new At : new At, v = 0 > g.scaleX, _ = 2e-5,
                    y = 1e5, b = kt ? parseFloat(G(t, Ct, e, !1, "0 0 0").split(" ")[2]) || g.zOrigin || 0 : 0,
                    w = parseFloat(a.defaultTransformPerspective) || 0;
                if (Tt ? s = G(t, St, e, !0) : t.currentStyle && (s = t.currentStyle.filter.match(N), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), g.x || 0, g.y || 0].join(",") : ""), r = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, g.svg = !!(Et && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), g.svg && (Ot(t, G(t, Ct, o, !1, "50% 50%") + "", g), wt = a.useSVGTransformAttr || Nt, l = t.getAttribute("transform"), r && l && -1 !== l.indexOf("matrix") && (s = l, r = 0)), !r) {
                    for (l = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], c = l.length; --c > -1;) u = Number(l[c]), l[c] = (h = u - (u |= 0)) ? (0 | h * y + (0 > h ? -.5 : .5)) / y + u : u;
                    if (16 === l.length) {
                        var x, T, S, C, k, A = l[0], E = l[1], P = l[2], D = l[3], O = l[4], R = l[5], $ = l[6], M = l[7],
                            I = l[8], j = l[9], F = l[10], z = l[12], B = l[13], H = l[14], q = l[11], U = Math.atan2($, F);
                        g.zOrigin && (H = -g.zOrigin, z = I * H - l[12], B = j * H - l[13], H = F * H + g.zOrigin - l[14]), g.rotationX = U * L, U && (C = Math.cos(-U), k = Math.sin(-U), x = O * C + I * k, T = R * C + j * k, S = $ * C + F * k, I = O * -k + I * C, j = R * -k + j * C, F = $ * -k + F * C, q = M * -k + q * C, O = x, R = T, $ = S), U = Math.atan2(I, F), g.rotationY = U * L, U && (C = Math.cos(-U), k = Math.sin(-U), x = A * C - I * k, T = E * C - j * k, S = P * C - F * k, j = E * k + j * C, F = P * k + F * C, q = D * k + q * C, A = x, E = T, P = S), U = Math.atan2(E, A), g.rotation = U * L, U && (C = Math.cos(-U), k = Math.sin(-U), A = A * C + O * k, T = E * C + R * k, R = E * -k + R * C, $ = P * -k + $ * C, E = T), g.rotationX && Math.abs(g.rotationX) + Math.abs(g.rotation) > 359.9 && (g.rotationX = g.rotation = 0, g.rotationY += 180), g.scaleX = (0 | Math.sqrt(A * A + E * E) * y + .5) / y, g.scaleY = (0 | Math.sqrt(R * R + j * j) * y + .5) / y, g.scaleZ = (0 | Math.sqrt($ * $ + F * F) * y + .5) / y, g.skewX = 0, g.perspective = q ? 1 / (0 > q ? -q : q) : 0, g.x = z, g.y = B, g.z = H
                    } else if (!(kt && !n && l.length && g.x === l[4] && g.y === l[5] && (g.rotationX || g.rotationY) || void 0 !== g.x && "none" === G(t, "display", e))) {
                        var X = l.length >= 6, W = X ? l[0] : 1, Y = l[1] || 0, V = l[2] || 0, Q = X ? l[3] : 1;
                        g.x = l[4] || 0, g.y = l[5] || 0, f = Math.sqrt(W * W + Y * Y), p = Math.sqrt(Q * Q + V * V), d = W || Y ? Math.atan2(Y, W) * L : g.rotation || 0, m = V || Q ? Math.atan2(V, Q) * L + d : g.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (v ? (f *= -1, m += 0 >= d ? 180 : -180, d += 0 >= d ? 180 : -180) : (p *= -1, m += 0 >= m ? 180 : -180)), g.scaleX = f, g.scaleY = p, g.rotation = d, g.skewX = m, kt && (g.rotationX = g.rotationY = g.z = 0, g.perspective = w, g.scaleZ = 1)
                    }
                    g.zOrigin = b;
                    for (c in g) _ > g[c] && g[c] > -_ && (g[c] = 0)
                }
                return i && (t._gsTransform = g), g
            }, $t = function (t) {
                var e, i, n = this.data, r = -n.rotation * $, o = r + n.skewX * $, s = 1e5,
                    a = (0 | Math.cos(r) * n.scaleX * s) / s, l = (0 | Math.sin(r) * n.scaleX * s) / s,
                    c = (0 | Math.sin(o) * -n.scaleY * s) / s, u = (0 | Math.cos(o) * n.scaleY * s) / s, h = this.t.style,
                    f = this.t.currentStyle;
                if (f) {
                    i = l, l = -c, c = -i, e = f.filter, h.filter = "";
                    var p, d, m = this.t.offsetWidth, v = this.t.offsetHeight, _ = "absolute" !== f.position,
                        y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                        b = n.x + m * n.xPercent / 100, T = n.y + v * n.yPercent / 100;
                    if (null != n.ox && (p = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2, d = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, b += p - (p * a + d * l), T += d - (p * c + d * u)), _ ? (p = m / 2, d = v / 2, y += ", Dx=" + (p - (p * a + d * l) + b) + ", Dy=" + (d - (p * c + d * u) + T) + ")") : y += ", sizingMethod='auto expand')", h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, y) : y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === u && (_ && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !_) {
                        var S, C, k, A = 8 > g ? 1 : -1;
                        for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + b), n.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > c ? -c : c) * m)) / 2 + T), vt = 0; 4 > vt; vt++) C = it[vt], S = f[C], i = -1 !== S.indexOf("px") ? parseFloat(S) : Z(this.t, C, parseFloat(S), S.replace(w, "")) || 0, k = i !== n[C] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? p - n.ieOffsetX : d - n.ieOffsetY, h[C] = (n[C] = Math.round(i - k * (0 === vt || 2 === vt ? 1 : A))) + "px"
                    }
                }
            }, Lt = B.set3DTransformRatio = function (t) {
                var e, i, n, r, o, s, a, l, c, u, h, f, p, m, g, v, _, y, b, w, x, T = this.data, S = this.t.style,
                    C = T.rotation * $, k = T.scaleX, A = T.scaleY, E = T.scaleZ, P = T.x, D = T.y, N = T.z,
                    O = T.perspective;
                if (!(1 !== t && 0 !== t && T.force3D || T.force3D === !0 || T.rotationY || T.rotationX || 1 !== E || O || N)) return void Mt.call(this, t);
                if (d && (m = 1e-4, m > k && k > -m && (k = E = 2e-5), m > A && A > -m && (A = E = 2e-5), !O || T.z || T.rotationX || T.rotationY || (O = 0)), C || T.skewX) g = e = Math.cos(C), v = r = Math.sin(C), T.skewX && (C -= T.skewX * $, g = Math.cos(C), v = Math.sin(C), "simple" === T.skewType && (_ = Math.tan(T.skewX * $), _ = Math.sqrt(1 + _ * _), g *= _, v *= _)), i = -v, o = g; else {
                    if (!(T.rotationY || T.rotationX || 1 !== E || O || T.svg)) return void(S[Tt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + P + "px," + D + "px," + N + "px)" + (1 !== k || 1 !== A ? " scale(" + k + "," + A + ")" : ""));
                    e = o = 1, i = r = 0
                }
                c = 1, n = s = a = l = u = h = 0, f = O ? -1 / O : 0, p = T.zOrigin, m = 1e-6, w = ",", x = "0", C = T.rotationY * $, C && (g = Math.cos(C), v = Math.sin(C), a = -v, u = f * -v, n = e * v, s = r * v, c = g, f *= g, e *= g, r *= g), C = T.rotationX * $, C && (g = Math.cos(C), v = Math.sin(C), _ = i * g + n * v, y = o * g + s * v, l = c * v, h = f * v, n = i * -v + n * g, s = o * -v + s * g, c *= g, f *= g, i = _, o = y), 1 !== E && (n *= E, s *= E, c *= E, f *= E), 1 !== A && (i *= A, o *= A, l *= A, h *= A), 1 !== k && (e *= k, r *= k, a *= k, u *= k), (p || T.svg) && (p && (P += n * -p, D += s * -p, N += c * -p + p), T.svg && (P += T.xOrigin - (T.xOrigin * e + T.yOrigin * i), D += T.yOrigin - (T.xOrigin * r + T.yOrigin * o)), m > P && P > -m && (P = x), m > D && D > -m && (D = x), m > N && N > -m && (N = 0)), b = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > a && a > -m ? x : a), b += w + (m > u && u > -m ? x : u) + w + (m > i && i > -m ? x : i) + w + (m > o && o > -m ? x : o), T.rotationX || T.rotationY ? (b += w + (m > l && l > -m ? x : l) + w + (m > h && h > -m ? x : h) + w + (m > n && n > -m ? x : n), b += w + (m > s && s > -m ? x : s) + w + (m > c && c > -m ? x : c) + w + (m > f && f > -m ? x : f) + w) : b += ",0,0,0,0,1,0,", b += P + w + D + w + N + w + (O ? 1 + -N / O : 1) + ")", S[Tt] = b
            }, Mt = B.set2DTransformRatio = function (t) {
                var e, i, n, r, o, s, a, l, c, u, h, f = this.data, p = this.t, d = p.style, m = f.x, g = f.y;
                return !(f.rotationX || f.rotationY || f.z || f.force3D === !0 || "auto" === f.force3D && 1 !== t && 0 !== t) || f.svg && wt || !kt ? (r = f.scaleX, o = f.scaleY, void(f.rotation || f.skewX || f.svg ? (e = f.rotation * $, i = e - f.skewX * $, n = 1e5, s = Math.cos(e) * r, a = Math.sin(e) * r, l = Math.sin(i) * -o, c = Math.cos(i) * o, f.svg && (m += f.xOrigin - (f.xOrigin * s + f.yOrigin * l), g += f.yOrigin - (f.xOrigin * a + f.yOrigin * c), h = 1e-6, h > m && m > -h && (m = 0), h > g && g > -h && (g = 0)), u = (0 | s * n) / n + "," + (0 | a * n) / n + "," + (0 | l * n) / n + "," + (0 | c * n) / n + "," + m + "," + g + ")", f.svg && wt ? p.setAttribute("transform", "matrix(" + u) : d[Tt] = (f.xPercent || f.yPercent ? "translate(" + f.xPercent + "%," + f.yPercent + "%) matrix(" : "matrix(") + u) : d[Tt] = (f.xPercent || f.yPercent ? "translate(" + f.xPercent + "%," + f.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + o + "," + m + "," + g + ")")) : (this.setRatio = Lt, void Lt.call(this, t))
            };
        u = At.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = 0, u.scaleX = u.scaleY = u.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function (t, e, i, n, r, s, l) {
                if (n._lastParsedTransform === l) return r;
                n._lastParsedTransform = l;
                var c, u, h, f, p, d, m, g = n._transform = Rt(t, o, !0, l.parseTransform), v = t.style, _ = 1e-6,
                    y = xt.length, b = l, w = {};
                if ("string" == typeof b.transform && Tt) h = F.style, h[Tt] = b.transform, h.display = "block", h.position = "absolute", I.body.appendChild(F), c = Rt(F, null, !1), I.body.removeChild(F); else if ("object" == typeof b) {
                    if (c = {
                            scaleX: st(null != b.scaleX ? b.scaleX : b.scale, g.scaleX),
                            scaleY: st(null != b.scaleY ? b.scaleY : b.scale, g.scaleY),
                            scaleZ: st(b.scaleZ, g.scaleZ),
                            x: st(b.x, g.x),
                            y: st(b.y, g.y),
                            z: st(b.z, g.z),
                            xPercent: st(b.xPercent, g.xPercent),
                            yPercent: st(b.yPercent, g.yPercent),
                            perspective: st(b.transformPerspective, g.perspective)
                        }, m = b.directionalRotation, null != m) if ("object" == typeof m) for (h in m) b[h] = m[h]; else b.rotation = m;
                    "string" == typeof b.x && -1 !== b.x.indexOf("%") && (c.x = 0, c.xPercent = st(b.x, g.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (c.y = 0, c.yPercent = st(b.y, g.yPercent)), c.rotation = at("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : g.rotation, g.rotation, "rotation", w), kt && (c.rotationX = at("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", w), c.rotationY = at("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", w)), c.skewX = null == b.skewX ? g.skewX : at(b.skewX, g.skewX), c.skewY = null == b.skewY ? g.skewY : at(b.skewY, g.skewY), (u = c.skewY - g.skewY) && (c.skewX += u, c.rotation += u)
                }
                for (kt && null != b.force3D && (g.force3D = b.force3D, d = !0), g.skewType = b.skewType || g.skewType || a.defaultSkewType, p = g.force3D || g.z || g.rotationX || g.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == b.scale || (c.scaleZ = 1); --y > -1;) i = xt[y], f = c[i] - g[i], (f > _ || -_ > f || null != b[i] || null != M[i]) && (d = !0, r = new mt(g, i, g[i], f, r), i in w && (r.e = w[i]), r.xs0 = 0, r.plugin = s, n._overwriteProps.push(r.n));
                return f = b.transformOrigin, f && g.svg && (Ot(t, rt(f), c), r = new mt(g, "xOrigin", g.xOrigin, c.xOrigin - g.xOrigin, r, (-1), "transformOrigin"), r.b = g.xOrigin, r.e = r.xs0 = c.xOrigin, r = new mt(g, "yOrigin", g.yOrigin, c.yOrigin - g.yOrigin, r, (-1), "transformOrigin"), r.b = g.yOrigin, r.e = r.xs0 = c.yOrigin, f = "0px 0px"), (f || kt && p && g.zOrigin) && (Tt ? (d = !0, i = Ct, f = (f || G(t, i, o, !1, "50% 50%")) + "", r = new mt(v, i, 0, 0, r, (-1), "transformOrigin"), r.b = v[i], r.plugin = s, kt ? (h = g.zOrigin, f = f.split(" "), g.zOrigin = (f.length > 2 && (0 === h || "0px" !== f[2]) ? parseFloat(f[2]) : h) || 0, r.xs0 = r.e = f[0] + " " + (f[1] || "50%") + " 0px", r = new mt(g, "zOrigin", 0, 0, r, (-1), r.n), r.b = h, r.xs0 = r.e = g.zOrigin) : r.xs0 = r.e = f) : rt(f + "", g)), d && (n._transformType = g.svg && wt || !p && 3 !== this._transformType ? 2 : 3), r
            }, prefix: !0
        }), yt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), yt("borderRadius", {
            defaultValue: "0px", parser: function (t, e, i, r, s) {
                e = this.format(e);
                var a, l, c, u, h, f, p, d, m, g, v, _, y, b, w, x,
                    T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    S = t.style;
                for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = V(T[l])), h = u = G(t, T[l], o, !1, "0px"), -1 !== h.indexOf(" ") && (u = h.split(" "), h = u[0], u = u[1]), f = c = a[l], p = parseFloat(h), _ = h.substr((p + "").length), y = "=" === f.charAt(1), y ? (d = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), d *= parseFloat(f), v = f.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(f), v = f.substr((d + "").length)), "" === v && (v = n[i] || _), v !== _ && (b = Z(t, "borderLeft", p, _), w = Z(t, "borderTop", p, _), "%" === v ? (h = 100 * (b / m) + "%", u = 100 * (w / g) + "%") : "em" === v ? (x = Z(t, "borderLeft", 1, "em"), h = b / x + "em", u = w / x + "em") : (h = b + "px", u = w + "px"), y && (f = parseFloat(h) + d + v, c = parseFloat(u) + d + v)), s = gt(S, T[l], h + " " + u, f + " " + c, !1, "0px", s);
                return s
            }, prefix: !0, formatter: ft("0px 0px 0px 0px", !1, !0)
        }), yt("backgroundPosition", {
            defaultValue: "0 0", parser: function (t, e, i, n, r, s) {
                var a, l, c, u, h, f, p = "background-position", d = o || Q(t, null),
                    m = this.format((d ? g ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    v = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (f = G(t, "backgroundImage").replace(E, ""), f && "none" !== f)) {
                    for (a = m.split(" "), l = v.split(" "), z.setAttribute("src", f), c = 2; --c > -1;) m = a[c], u = -1 !== m.indexOf("%"), u !== (-1 !== l[c].indexOf("%")) && (h = 0 === c ? t.offsetWidth - z.width : t.offsetHeight - z.height, a[c] = u ? parseFloat(m) / 100 * h + "px" : 100 * (parseFloat(m) / h) + "%");
                    m = a.join(" ")
                }
                return this.parseComplex(t.style, m, v, r, s)
            }, formatter: rt
        }), yt("backgroundSize", {defaultValue: "0 0", formatter: rt}), yt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), yt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), yt("transformStyle", {prefix: !0}), yt("backfaceVisibility", {prefix: !0}), yt("userSelect", {prefix: !0}), yt("margin", {parser: pt("marginTop,marginRight,marginBottom,marginLeft")}), yt("padding", {parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")}), yt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, n, r, s) {
                var a, l, c;
                return 9 > g ? (l = t.currentStyle, c = 8 > g ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(G(t, this.p, o, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, s)
            }
        }), yt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), yt("autoRound,strictUnits", {
            parser: function (t, e, i, n, r) {
                return r
            }
        }), yt("border", {
            defaultValue: "0px solid #000", parser: function (t, e, i, n, r, s) {
                return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", o, !1, "0px") + " " + G(t, "borderTopStyle", o, !1, "solid") + " " + G(t, "borderTopColor", o, !1, "#000")), this.format(e), r, s)
            }, color: !0, formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
            }
        }), yt("borderWidth", {parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), yt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, r) {
                var o = t.style, s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new mt(o, s, 0, 0, r, (-1), i, (!1), 0, o[s], e)
            }
        });
        var It = function (t) {
            var e, i = this.t, n = i.filter || G(this.data, "filter") || "", r = 0 | this.s + this.c * t;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = n.replace(S, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r))
        };
        yt("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (t, e, i, n, r, s) {
                var a = parseFloat(G(t, "opacity", o, !1, "1")), l = t.style, c = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === G(t, "visibility", o) && 0 !== e && (a = 0), q ? r = new mt(l, "opacity", a, e - a, r) : (r = new mt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = c ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = s, r.setRatio = It), c && (r = new mt(l, "visibility", 0, 0, r, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
            }
        });
        var jt = function (t, e) {
            e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, Ft = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : jt(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        yt("className", {
            parser: function (t, e, n, r, s, a, l) {
                var c, u, h, f, p, d = t.getAttribute("class") || "", m = t.style.cssText;
                if (s = r._classNamePT = new mt(t, n, 0, 0, s, 2), s.setRatio = Ft, s.pr = -11, i = !0, s.b = d, u = K(t, o), h = t._gsClassPT) {
                    for (f = {}, p = h.data; p;) f[p.p] = 1, p = p._next;
                    h.setRatio(1)
                }
                return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), r._tween._duration && (t.setAttribute("class", s.e), c = tt(t, u, K(t), l, f), t.setAttribute("class", d), s.data = c.firstMPT, t.style.cssText = m, s = s.xfirst = r.parse(t, c.difs, s, a)), s
            }
        });
        var zt = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, o = this.t.style, s = c.transform.parse;
                if ("all" === this.e) o.cssText = "", r = !0; else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], c[i] && (c[i].parse === s ? r = !0 : i = "transformOrigin" === i ? Ct : c[i].p), jt(o, i);
                r && (jt(o, Tt), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (yt("clearProps", {
            parser: function (t, e, n, r, o) {
                return o = new mt(t, n, 0, 0, o, 2), o.setRatio = zt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
            }
        }), u = "bezier,throwProps,physicsProps,physics2D".split(","), vt = u.length; vt--;) bt(u[vt]);
        u = a.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function (t, e, r) {
            if (!t.nodeType) return !1;
            this._target = t, this._tween = r, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, o = Q(t, ""), s = this._overwriteProps;
            var l, c, u, d, g, v, _, y, b, w = t.style;
            if (f && "" === w.zIndex && (l = G(t, "zIndex", o), ("auto" === l || "" === l) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (d = w.cssText, l = K(t, o), w.cssText = d + ";" + e, l = tt(t, l, K(t)).difs, !q && T.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = d), this._firstPT = c = this.parse(t, e, null), this._transformType) {
                for (b = 3 === this._transformType, Tt ? p && (f = !0, "" === w.zIndex && (_ = G(t, "zIndex", o), ("auto" === _ || "" === _) && this._addLazySet(w, "zIndex", 0)), m && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : w.zoom = 1, u = c; u && u._next;) u = u._next;
                y = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, u), y.setRatio = b && kt ? Lt : Tt ? Mt : $t, y.data = this._transform || Rt(t, o, !0), s.pop()
            }
            if (i) {
                for (; c;) {
                    for (v = c._next, u = d; u && u.pr > c.pr;) u = u._next;
                    (c._prev = u ? u._prev : g) ? c._prev._next = c : d = c, (c._next = u) ? u._prev = c : g = c, c = v
                }
                this._firstPT = d
            }
            return !0
        }, u.parse = function (t, e, i, r) {
            var s, a, l, u, f, p, d, m, g, v, _ = t.style;
            for (s in e) p = e[s], a = c[s], a ? i = a.parse(t, p, s, this, i, r, e) : (f = G(t, s, o) + "", g = "string" == typeof p, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || g && C.test(p) ? (g || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = gt(_, s, f, p, !0, "transparent", i, 0, r)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (l = parseFloat(f), d = l || 0 === l ? f.substr((l + "").length) : "", ("" === f || "auto" === f) && ("width" === s || "height" === s ? (l = nt(t, s, o), d = "px") : "left" === s || "top" === s ? (l = J(t, s, o), d = "px") : (l = "opacity" !== s ? 0 : 1, d = "")), v = g && "=" === p.charAt(1), v ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(w, "")) : (u = parseFloat(p), m = g ? p.replace(w, "") : ""), "" === m && (m = s in n ? n[s] : d), p = u || 0 === u ? (v ? u + l : u) + m : e[s], d !== m && "" !== m && (u || 0 === u) && l && (l = Z(t, s, l, d), "%" === m ? (l /= Z(t, s, 100, "%") / 100, e.strictUnits !== !0 && (f = l + "%")) : "em" === m ? l /= Z(t, s, 1, "em") : "px" !== m && (u = Z(t, s, u, m),
                m = "px"), v && (u || 0 === u) && (p = u + l + m)), v && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== _[s] && (p || "NaN" != p + "" && null != p) ? (i = new mt(_, s, u || l || 0, 0, i, (-1), s, (!1), 0, f, p), i.xs0 = "none" !== p || "display" !== s && -1 === s.indexOf("Style") ? p : f) : X("invalid " + s + " tween value: " + e[s]) : (i = new mt(_, s, l, u - l, i, 0, s, h !== !1 && ("px" === m || "zIndex" === s), 0, f, p), i.xs0 = m)) : i = gt(_, s, f, p, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
            return i
        }, u.setRatio = function (t) {
            var e, i, n, r = this._firstPT, o = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : o > e && e > -o && (e = 0), r.type) if (1 === r.type) if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
                    for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                    r.t[r.p] = i
                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, u._enableTransforms = function (t) {
            this._transform = this._transform || Rt(this._target, o, !0), this._transformType = this._transform.svg && wt || !t && 3 !== this._transformType ? 2 : 3
        };
        var Bt = function () {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        u._addLazySet = function (t, e, i) {
            var n = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = Bt, n.data = this
        }, u._linkCSSP = function (t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, u._kill = function (e) {
            var i, n, r, o = e;
            if (e.autoAlpha || e.alpha) {
                o = {};
                for (n in e) o[n] = e[n];
                o.opacity = 1, o.autoAlpha && (o.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
        };
        var Ht = function (t, e, i) {
            var n, r, o, s;
            if (t.slice) for (r = t.length; --r > -1;) Ht(t[r], e, i); else for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(K(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Ht(o, e, i)
        };
        return a.cascadeTo = function (t, i, n) {
            var r, o, s, a = e.to(t, i, n), l = [a], c = [], u = [], h = [], f = e._internals.reservedProps;
            for (t = a._targets || a.target, Ht(t, c, h), a.render(i, !0), Ht(t, u), a.render(0, !0), a._enabled(!0), r = h.length; --r > -1;) if (o = tt(h[r], c[r], u[r]), o.firstMPT) {
                o = o.difs;
                for (s in n) f[s] && (o[s] = n[s]);
                l.push(e.to(h[r], i, o))
            }
            return l
        }, t.activate([a]), a
    }, !0), function () {
        var t = r._gsDefine.plugin({
            propName: "roundProps", priority: -1, API: 2, init: function (t, e, i) {
                return this._tween = i, !0
            }
        }), e = t.prototype;
        e._onInitAllProps = function () {
            for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), o = r.length, s = {}, a = n._propLookup.roundProps; --o > -1;) s[r[o]] = 1;
            for (o = r.length; --o > -1;) for (t = r[o], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(s, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
            return !1
        }, e._add = function (t, e, i, n) {
            this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
        }
    }(), r._gsDefine.plugin({
        propName: "attr", API: 2, version: "0.3.3", init: function (t, e) {
            var i, n, r;
            if ("function" != typeof t.setAttribute) return !1;
            this._target = t, this._proxy = {}, this._start = {}, this._end = {};
            for (i in e) this._start[i] = this._proxy[i] = n = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(n), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
            return !0
        }, set: function (t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1;) e = i[n], this._target.setAttribute(e, r[e] + "")
        }
    }), r._gsDefine.plugin({
        propName: "directionalRotation", version: "0.2.1", API: 2, init: function (t, e) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var i, n, r, o, s, a, l = e.useRadians === !0 ? 2 * Math.PI : 360, c = 1e-6;
            for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), o = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, s = o - r, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (s %= l, s !== s % (l / 2) && (s = 0 > s ? s + l : s - l)), -1 !== n.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * l) % l - (0 | s / l) * l : -1 !== n.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * l) % l - (0 | s / l) * l)), (s > c || -c > s) && (this._addTween(t, i, r, r + s, i), this._overwriteProps.push(i)));
            return !0
        }, set: function (t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, r._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, i, n, o = r.GreenSockGlobals || r, s = o.com.greensock, a = 2 * Math.PI, l = Math.PI / 2, c = s._class,
            u = function (e, i) {
                var n = c("easing." + e, function () {
                }, !0), r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, n
            }, h = t.register || function () {
            }, f = function (t, e, i, n) {
                var r = c("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new n}, !0);
                return h(r, t), r
            }, p = function (t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            }, d = function (e, i) {
                var n = c("easing." + e, function (t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                }, !0), r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, r.config = function (t) {
                    return new n(t)
                }, n
            }, m = f("Back", d("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), d("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), d("BackInOut", function (t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), g = c("easing.SlowMo", function (t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0), v = g.prototype = new t;
        return v.constructor = g, v.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, g.ease = new g(.7, .7), v.config = g.config = function (t, e, i) {
            return new g(t, e, i)
        }, e = c("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), v = e.prototype = new t, v.constructor = e, v.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, v.config = e.config = function (t) {
            return new e(t)
        }, i = c("easing.RoughEase", function (e) {
            e = e || {};
            for (var i, n, r, o, s, a, l = e.taper || "none", c = [], u = 0, h = 0 | (e.points || 20), f = h, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / h * f, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (o = 1 - i, r = o * o * v) : "in" === l ? r = i * i * v : .5 > i ? (o = 2 * i, r = .5 * o * o * v) : (o = 2 * (1 - i), r = .5 * o * o * v), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[u++] = {
                x: i,
                y: n
            };
            for (c.sort(function (t, e) {
                return t.x - e.x
            }), a = new p(1, 1, null), f = h; --f > -1;) s = c[f], a = new p(s.x, s.y, a);
            this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
        }, !0), v = i.prototype = new t, v.constructor = i, v.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, v.config = function (t) {
            return new i(t)
        }, i.ease = new i, f("Bounce", u("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), u("BounceIn", function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), u("BounceInOut", function (t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), f("Circ", u("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), u("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), u("CircInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), n = function (e, i, n) {
            var r = c("easing." + e, function (t, e) {
                this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            }, !0), o = r.prototype = new t;
            return o.constructor = r, o.getRatio = i, o.config = function (t, e) {
                return new r(t, e)
            }, r
        }, f("Elastic", n("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), n("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), n("ElasticInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)), f("Expo", u("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), u("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), u("ExpoInOut", function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), f("Sine", u("SineOut", function (t) {
            return Math.sin(t * l)
        }), u("SineIn", function (t) {
            return -Math.cos(t * l) + 1
        }), u("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), c("easing.EaseLookup", {
            find: function (e) {
                return t.map[e]
            }
        }, !0), h(o.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), m
    }, !0)
}), r._gsDefine && r._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, r, o, s, a, l = function (t) {
            var e, n = t.split("."), r = i;
            for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
            return r
        }, c = l("com.greensock"), u = 1e-10, h = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++])) ;
            return i
        }, f = function () {
        }, p = function () {
            var t = Object.prototype.toString, e = t.call([]);
            return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), d = {}, m = function (n, r, o, s) {
            this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = o;
            var a = [];
            this.check = function (c) {
                for (var u, h, f, p, g = r.length, v = g; --g > -1;) (u = d[r[g]] || new m(r[g], [])).gsClass ? (a[g] = u.gsClass, v--) : c && u.sc.push(this);
                if (0 === v && o) for (h = ("com.greensock." + n).split("."), f = h.pop(), p = l(h.join("."))[f] = this.gsClass = o.apply(o, a), s && (i[f] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                    return p
                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), g = 0; this.sc.length > g; g++) this.sc[g].check()
            }, this.check(!0)
        }, g = t._gsDefine = function (t, e, i, n) {
            return new m(t, e, i, n)
        }, v = c._class = function (t, e, i) {
            return e = e || function () {
            }, g(t, [], function () {
                return e
            }, i), e
        };
        g.globals = i;
        var _ = [0, 0, 1, 1], y = [], b = v("easing.Ease", function (t, e, i, n) {
            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? _.concat(e) : _
        }, !0), w = b.map = {}, x = b.register = function (t, e, i, n) {
            for (var r, o, s, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;) for (o = l[u], r = n ? v("easing." + o, null, !0) : c.easing[o] || {}, s = h.length; --s > -1;) a = h[s], w[o + "." + a] = w[a + o] = r[a] = t.getRatio ? t : t[a] || new t
        };
        for (o = b.prototype, o._calcEnd = !1, o.getRatio = function (t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) o = n[r] + ",Power" + r, x(new b(null, null, 1, r), o, "easeOut", !0), x(new b(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), x(new b(null, null, 3, r), o, "easeInOut");
        w.linear = c.easing.Linear.easeIn, w.swing = c.easing.Quad.easeInOut;
        var T = v("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        o = T.prototype, o.addEventListener = function (t, e, i, n, r) {
            r = r || 0;
            var o, l, c = this._listeners[t], u = 0;
            for (null == c && (this._listeners[t] = c = []), l = c.length; --l > -1;) o = c[l], o.c === e && o.s === i ? c.splice(l, 1) : 0 === u && r > o.pr && (u = l + 1);
            c.splice(u, 0, {c: e, s: i, up: n, pr: r}), this !== s || a || s.wake()
        }, o.removeEventListener = function (t, e) {
            var i, n = this._listeners[t];
            if (n) for (i = n.length; --i > -1;) if (n[i].c === e) return void n.splice(i, 1)
        }, o.dispatchEvent = function (t) {
            var e, i, n, r = this._listeners[t];
            if (r) for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                type: t,
                target: i
            }) : n.c.call(n.s || i))
        };
        var S = t.requestAnimationFrame, C = t.cancelAnimationFrame, k = Date.now || function () {
            return (new Date).getTime()
        }, A = k();
        for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S;) S = t[n[r] + "RequestAnimationFrame"], C = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
        v("Ticker", function (t, e) {
            var i, n, r, o, l, c = this, h = k(), p = e !== !1 && S, d = 500, m = 33, g = "tick", v = function (t) {
                var e, s, a = k() - A;
                a > d && (h += a - m), A += a, c.time = (A - h) / 1e3, e = c.time - l, (!i || e > 0 || t === !0) && (c.frame++, l += e + (e >= o ? .004 : o - e), s = !0), t !== !0 && (r = n(v)), s && c.dispatchEvent(g)
            };
            T.call(c), c.time = c.frame = 0, c.tick = function () {
                v(!0)
            }, c.lagSmoothing = function (t, e) {
                d = t || 1 / u, m = Math.min(e, d, 0)
            }, c.sleep = function () {
                null != r && (p && C ? C(r) : clearTimeout(r), n = f, r = null, c === s && (a = !1))
            }, c.wake = function () {
                null !== r ? c.sleep() : c.frame > 10 && (A = k() - d + 5), n = 0 === i ? f : p && S ? S : function (t) {
                    return setTimeout(t, 0 | 1e3 * (l - c.time) + 1)
                }, c === s && (a = !0), v(2)
            }, c.fps = function (t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void c.wake()) : i
            }, c.useRAF = function (t) {
                return arguments.length ? (c.sleep(), p = t, void c.fps(i)) : p
            }, c.fps(t), setTimeout(function () {
                p && (!r || 5 > c.frame) && c.useRAF(!1)
            }, 1500)
        }), o = c.Ticker.prototype = new c.events.EventDispatcher, o.constructor = c.Ticker;
        var E = v("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, q) {
                a || s.wake();
                var i = this.vars.useFrames ? H : q;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        s = E.ticker = new c.Ticker, o = E.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
        var P = function () {
            a && k() - A > 2e3 && s.wake(), setTimeout(P, 2e3)
        };
        P(), o.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, o.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, o.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, o.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, o.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, o.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, o.render = function () {
        }, o.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, o.isActive = function () {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, o._enabled = function (t, e) {
            return a || s.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, o._kill = function () {
            return this._enabled(!1, !1)
        }, o.kill = function (t, e) {
            return this._kill(t, e), this
        }, o._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, o._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, o.eventCallback = function (t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, o.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, o.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, o.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, o.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, o.totalTime = function (t, e, i) {
            if (a || s.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration, r = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), $.length && U())
            }
            return this
        }, o.progress = o.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, o.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, o.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, o.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, o.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, o.paused = function (t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                a || t || s.wake();
                var e = this._timeline, i = e.rawTime(), n = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var D = v("core.SimpleTimeline", function (t) {
            E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        o = D.prototype = new E, o.constructor = D, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function (t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (n = t._startTime; i && i._startTime > n;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, o._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, o.render = function (t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, o.rawTime = function () {
            return a || s.wake(), this._totalTime
        };
        var N = v("TweenLite", function (e, i, n) {
            if (E.call(this, i, n), this.render = N.prototype.render, null == e) throw"Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : N.selector(e) || e;
            var r, o, s,
                a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? B[N.defaultOverwrite] : "number" == typeof l ? l >> 0 : B[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0]) for (this._targets = s = h(e), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(h(o))) : (this._siblings[r] = X(o, this, !1), 1 === l && this._siblings[r].length > 1 && Y(o, this, null, 1, this._siblings[r])) : (o = s[r--] = N.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1); else this._propLookup = {}, this._siblings = X(e, this, !1), 1 === l && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay))
        }, !0), O = function (e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, R = function (t, e) {
            var i, n = {};
            for (i in t) z[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
            t.css = n
        };
        o = N.prototype = new E, o.constructor = N, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, N.version = "1.15.1", N.defaultEase = o._ease = new b(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = s, N.autoSleep = !0, N.lagSmoothing = function (t, e) {
            s.lagSmoothing(t, e)
        }, N.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;
            return i ? (N.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var $ = [], L = {}, M = N._internals = {isArray: p, isSelector: O, lazyTweens: $}, I = N._plugins = {},
            j = M.tweenLookup = {}, F = 0, z = M.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1
            }, B = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0},
            H = E._rootFramesTimeline = new D, q = E._rootTimeline = new D, U = M.lazyRender = function () {
                var t, e = $.length;
                for (L = {}; --e > -1;) t = $[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                $.length = 0
            };
        q._startTime = s.time, H._startTime = s.frame, q._active = H._active = !0, setTimeout(U, 1), E._updateRoot = N.render = function () {
            var t, e, i;
            if ($.length && U(), q.render((s.time - q._startTime) * q._timeScale, !1, !1), H.render((s.frame - H._startTime) * H._timeScale, !1, !1), $.length && U(), !(s.frame % 120)) {
                for (i in j) {
                    for (e = j[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete j[i]
                }
                if (i = q._first, (!i || i._paused) && N.autoSleep && !H._first && 1 === s._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || s.sleep()
                }
            }
        }, s.addEventListener("tick", E._updateRoot);
        var X = function (t, e, i) {
            var n, r, o = t._gsTweenID;
            if (j[o || (t._gsTweenID = o = "t" + F++)] || (j[o] = {
                    target: t,
                    tweens: []
                }), e && (n = j[o].tweens, n[r = n.length] = e, i)) for (; --r > -1;) n[r] === e && n.splice(r, 1);
            return j[o].tweens
        }, W = function (t, e, i, n) {
            var r, o, s = t.vars.onOverwrite;
            return s && (r = s(t, e, i, n)), s = N.onOverwrite, s && (o = s(t, e, i, n)), r !== !1 && o !== !1
        }, Y = function (t, e, i, n, r) {
            var o, s, a, l;
            if (1 === n || n >= 4) {
                for (l = r.length, o = 0; l > o; o++) if ((a = r[o]) !== e) a._gc || W(a, e) && a._enabled(!1, !1) && (s = !0); else if (5 === n) break;
                return s
            }
            var c, h = e._startTime + u, f = [], p = 0, d = 0 === e._duration;
            for (o = r.length; --o > -1;) (a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || V(e, 0, d), 0 === V(a, c, d) && (f[p++] = a)) : h >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > h && ((d || !a._initted) && 2e-10 >= h - a._startTime || (f[p++] = a)));
            for (o = p; --o > -1;) if (a = f[o], 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                if (2 !== n && !W(a, e)) continue;
                a._enabled(!1, !1) && (s = !0)
            }
            return s
        }, V = function (t, e, i) {
            for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                n = n._timeline
            }
            return o /= r, o > e ? o - e : i && o === e || !t._initted && 2 * u > o - e ? u : (o += t.totalDuration() / t._timeScale / r) > e + u ? 0 : o - e - u
        };
        o._init = function () {
            var t, e, i, n, r, o = this.vars, s = this._overwrittenProps, a = this._duration, l = !!o.immediateRender,
                c = o.ease;
            if (o.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (n in o.startAt) r[n] = o.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = N.to(this.target, 0, r), l) if (this._time > 0) this._startAt = null; else if (0 !== a) return
            } else if (o.runBackwards && 0 !== a) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (l = !1), i = {};
                for (n in o) z[n] && "autoCSS" !== n || (i[n] = o[n]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = N.to(this.target, 0, i), l) {
                    if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = c = c ? c instanceof b ? c : "function" == typeof c ? new b(c, o.easeParams) : w[c] || N.defaultEase : N.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, s);
            if (e && N._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = o.onUpdate, this._initted = !0
        }, o._initProps = function (e, i, n, r) {
            var o, s, a, l, c, u;
            if (null == e) return !1;
            L[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && R(this.vars, e);
            for (o in this.vars) {
                if (u = this.vars[o], z[o]) u && (u instanceof Array || u.push && p(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this)); else if (I[o] && (l = new I[o])._onInitTween(e, this.vars[o], this)) {
                    for (this._firstPT = c = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: o,
                        pg: !0,
                        pr: l._priority
                    }, s = l._overwriteProps.length; --s > -1;) i[l._overwriteProps[s]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[o] = c = {
                    _next: this._firstPT,
                    t: e,
                    p: o,
                    f: "function" == typeof e[o],
                    n: o,
                    pg: !1,
                    pr: 0
                }, c.s = c.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), c.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - c.s || 0;
                c && c._next && (c._next._prev = c)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Y(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), a)
        }, o.render = function (t, e, i) {
            var n, r, o, s, a = this._time, l = this._duration, c = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > c || c === u && "isPause" !== this.data) && c !== t && (i = !0, c > u && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || c === t ? t : u); else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0 && c !== u) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || c === t ? t : u)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                var h = t / l, f = this._easeType, p = this._easePower;
                (1 === f || 3 === f && h >= .5) && (h = 1 - h), 3 === f && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === f ? 1 - h : 2 === f ? h : .5 > t / l ? h / 2 : 1 - h / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, $.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === l && this._rawPrevTime === u && s !== u && (this._rawPrevTime = 0))
            }
        }, o._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
            var n, r, o, s, a, l, c, u, h;
            if ((p(e) || O(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1;) this._kill(t, e[n]) && (l = !0); else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;) if (e === this._targets[n]) {
                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (c = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (N.onOverwrite || this.vars.onOverwrite)) {
                        for (o in c) a[o] && (h || (h = []), h.push(o));
                        if (!W(this, i, e, h)) return !1
                    }
                    for (o in c) (s = a[o]) && (s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, o.invalidate = function () {
            return this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this
        }, o._enabled = function (t, e) {
            if (a || s.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n) for (i = n.length; --i > -1;) this._siblings[i] = X(n[i], this, !0); else this._siblings = X(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, N.to = function (t, e, i) {
            return new N(t, e, i)
        }, N.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new N(t, e, i);
        }, N.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new N(t, e, n)
        }, N.delayedCall = function (t, e, i, n, r) {
            return new N(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, N.set = function (t, e) {
            return new N(t, 0, e)
        }, N.getTweensOf = function (t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : N.selector(t) || t;
            var i, n, r, o;
            if ((p(t) || O(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(N.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;) for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
            } else for (n = X(t).concat(), i = n.length; --i > -1;) (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, N.killTweensOf = N.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = N.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
        };
        var Q = v("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
        }, !0);
        if (o = Q.prototype, Q.version = "1.10.1", Q.API = 2, o._firstPT = null, o._addTween = function (t, e, i, n, r, o) {
                var s, a;
                return null != n && (s = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: s,
                    f: "function" == typeof t[e],
                    n: r || e,
                    r: o
                }, a._next && (a._next._prev = a), a) : void 0
            }, o.setRatio = function (t) {
                for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, o._kill = function (t) {
                var e, i = this._overwriteProps, n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, o._roundProps = function (t, e) {
                for (var i = this._firstPT; i;) (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, N._onPluginEvent = function (t, e) {
                var i, n, r, o, s, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : o) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : o = a, a = s
                    }
                    a = e._firstPT = r
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, Q.activate = function (t) {
                for (var e = t.length; --e > -1;) t[e].API === Q.API && (I[(new t[e])._propName] = t[e]);
                return !0
            }, g.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw"illegal plugin definition.";
                var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, o = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, s = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                    Q.call(this, i, n), this._overwriteProps = r || []
                }, t.global === !0), a = s.prototype = new Q(i);
                a.constructor = s, s.API = t.API;
                for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                return s.version = t.version, Q.activate([s]), s
            }, n = t._gsQueue) {
            for (r = 0; n.length > r; r++) n[r]();
            for (o in d) d[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
        }
        a = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), !function (t, e) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
}(this, function (t, e, i) {
    "use strict";
    t.Scene.addOption("tweenChanges", !1, function (t) {
        return !!t
    }), t.Scene.extend(function () {
        var t, n = this;
        n.on("progress.plugin_gsap", function () {
            r()
        }), n.on("destroy.plugin_gsap", function (t) {
            n.removeTween(t.reset)
        });
        var r = function () {
            if (t) {
                var e = n.progress(), i = n.state();
                t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === n.duration() ? e > 0 ? t.play() : t.reverse() : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
            }
        };
        n.setTween = function (o, s, a) {
            var l;
            arguments.length > 1 && (arguments.length < 3 && (a = s, s = 1), o = e.to(o, s, a));
            try {
                l = i ? new i({smoothChildTiming: !0}).add(o) : o, l.pause()
            } catch (c) {
                return n
            }
            return t && n.removeTween(), t = l, o.repeat && -1 === o.repeat() && (t.repeat(-1), t.yoyo(o.yoyo())), r(), n
        }, n.removeTween = function (e) {
            return t && (e && t.progress(0).pause(), t.kill(), t = void 0), n
        }
    })
});
var o = {
    getLocal: function (t) {
        if (!t) return !1;
        if (!window.localStorage) return !1;
        var e = window.localStorage.getItem(t);
        if (!e) return !1;
        try {
            return JSON.parse(e)
        } catch (i) {
            return e
        }
    },
    setLocal: function (t, e) {
        return !(!t || !e) && (!!window.localStorage && (window.localStorage.setItem(t, JSON.stringify(e)), !0))
    },
    deleteLocal: function (t) {
        return !!t && (!!window.localStorage && void window.localStorage.removeItem(t))
    },
    getDeviceState: function () {
        var t = parseInt(window.getComputedStyle(s).getPropertyValue("z-index"), 10),
            e = {1: "desktop", 2: "small-desktop", 3: "tablet", 4: "phone"};
        return e[t]
    },
    isWX: /micromessenger/i.test(window.navigator.userAgent),
    isMobile: /(iphone|ipad|ipod|android|ios|symbianos|windows phone|windows ce|windows mobile|ucweb|midp|rv:1.2.3.4)/i.test(window.navigator.userAgent)
};
t.prototype = {
    on: function (t, e) {
        var i = this;
        return t in i.handlers || (i.handlers[t] = []), i.handlers[t].push(e), this
    }, emit: function (t) {
        var e = this;
        if (e.handlers[t]) {
            for (var i = Array.prototype.slice.call(arguments, 1), n = 0; n < e.handlers[t].length; n++) e.handlers[t][n].apply(e, i);
            return e
        }
    }, off: function (t, e) {
        var i = this.handlers[t], n = 0;
        if (i) {
            n = i.length;
            for (var r = n - 1; r >= 0; r--) i[r] === e && i.splice(r, 1)
        }
        return this
    }
};
var s = document.createElement("div");
s.className = "state-indicator", document.body.appendChild(s);
var a = o.getDeviceState(), l = new t;
window.addEventListener("resize", function () {
    var t = o.getDeviceState();
    l.emit("device-resize", t), t !== a && (a = t, l.emit("device-state-change", t))
}), document.addEventListener("DOMContentLoaded", function () {
    if (o.isWX) {
        var t = window.location.href, e = encodeURIComponent(t.split("#")[0]), i = document.createElement("script");
        document.body.appendChild(i), i.onload = function () {
            var t = window.wx, i = new XMLHttpRequest;
            i.onreadystatechange = function () {
                if (200 === i.status && 4 === i.readyState) {
                    var e = JSON.parse(i.response);
                    t.config({
                        debug: !1,
                        appId: e.appid,
                        timestamp: e.timestamp,
                        nonceStr: e.noncestr,
                        signature: e.signature,
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
                    })
                }
            }, i.open("GET", "https://www.deepai.com/api/wx/services/getJssdkSignature?url=" + e, !0), i.send(null);
            var n = {
                title: "deepai - Secure Bitcoin Payment Solutions",
                desc: "deepai - Secure Bitcoin Payment Solutions",
                link: "https://www.deepai.com",
                imgUrl: "https://www.deepai.com/shared/images/wx_share_300x300.png"
            };
            t.ready(function () {
                t.onMenuShareAppMessage(n), t.onMenuShareTimeline(n), t.onMenuShareQQ(n), t.onMenuShareQZone(n), t.onMenuShareWeibo(n)
            })
        }, i.src = "https://res.wx.qq.com/open/js/jweixin-1.2.0.js"
    }
}, !1);
var c = 0;
$(document).ready(function () {
    $("img.lazy").lazyload({
        threshold: 200,
        placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC",
        effect: "fadeIn"
    }), $("#navbar-btn").click(function () {
        $(this).hasClass("nav-close") ? ($("#navbar-collapse").removeClass("ds-block fadeIn"), $("#navbar-nav").removeClass("fadeInDown"), $(this).removeClass("nav-close"), $("body").removeClass("of-hidden")) : ($("body").addClass("of-hidden"), $("#navbar-collapse").addClass("ds-block fadeIn"), $("#navbar-nav").addClass("fadeInDown"), $(this).addClass("nav-close"))
    }), $(".prevent-scroll").on("touchmove", function (t) {
        t.preventDefault()
    })
}), $(window).on("scroll", function () {
    $(window).scrollTop() > 0 ? $("#navbar").addClass("navbar-bg") : $("#navbar").removeClass("navbar-bg")
});
var u = 0, h = 0, f = null, p = null, d = null, m = null, g = null, v = null, _ = null, y = null;
f = new ScrollMagic.Controller, $(document).ready(function () {
    i(), $(".section-platform-advantage").click(function () {
        $(".section-platform-advantage").removeClass("click"), $(this).addClass("click")
    }), $(".smooth-scroll").click(function (t) {
        var e = this;
        e.hash && (t.preventDefault(), $.smoothScroll({
            scrollTarget: e.hash,
            speed: 600,
            autoCoefficient: 3,
            offset: -40
        }))
    }), d = new ScrollMagic.Scene({
        triggerElement: "#advantage-wrap",
        offset: h
    }).setClassToggle(".safe-wrap", "fadeInUp").addTo(f), m = new ScrollMagic.Scene({
        triggerElement: "#advantage-wrap",
        offset: h
    }).setClassToggle(".free-wrap", "fadeInUp").addTo(f), g = new ScrollMagic.Scene({
        triggerElement: "#advantage-wrap",
        offset: h
    }).setClassToggle(".profession-wrap", "fadeInUp").addTo(f), v = new ScrollMagic.Scene({
        triggerElement: "#section-technology",
        offset: h
    }).setClassToggle(".signature", "fadeInUp").addTo(f), _ = new ScrollMagic.Scene({
        triggerElement: "#section-technology",
        offset: h
    }).setClassToggle(".backup", "fadeInUp").addTo(f), y = new ScrollMagic.Scene({
        triggerElement: "#section-technology",
        offset: h
    }).setClassToggle(".integrity", "fadeInUp").addTo(f), p = new ScrollMagic.Scene({
        triggerElement: "#advantage-wrap",
        duration: u,
        offset: 0
    }).addTo(f);
    var t = o.getDeviceState();
    "tablet" !== t && "phone" !== t || p.setTween("#bg-fix", {opacity: "0"}), l.on("device-resize", n)
}), $(window).load(function () {
});