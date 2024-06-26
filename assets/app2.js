!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length"in t && t.length
          , n = ft.type(t);
        return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function r(t, e, n) {
        if (ft.isFunction(e))
            return ft.grep(t, function(t, r) {
                return !!e.call(t, r, t) !== n
            });
        if (e.nodeType)
            return ft.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (kt.test(e))
                return ft.filter(e, t, n);
            e = ft.filter(e, t)
        }
        return ft.grep(t, function(t) {
            return ft.inArray(t, e) > -1 !== n
        })
    }
    function i(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = {};
        return ft.each(t.match(Dt) || [], function(t, n) {
            e[n] = !0
        }),
        e
    }
    function s() {
        rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", a),
        t.removeEventListener("load", a)) : (rt.detachEvent("onreadystatechange", a),
        t.detachEvent("onload", a))
    }
    function a() {
        (rt.addEventListener || "load" === t.event.type || "complete" === rt.readyState) && (s(),
        ft.ready())
    }
    function u(t, e, n) {
        if (n === undefined && 1 === t.nodeType) {
            var r = "data-" + e.replace(Pt, "-$1").toLowerCase();
            if ("string" == typeof (n = t.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : qt.test(n) ? ft.parseJSON(n) : n)
                } catch (i) {}
                ft.data(t, e, n)
            } else
                n = undefined
        }
        return n
    }
    function l(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function c(t, e, n, r) {
        if (jt(t)) {
            var i, o, s = ft.expando, a = t.nodeType, u = a ? ft.cache : t, l = a ? t[s] : t[s] && s;
            if (l && u[l] && (r || u[l].data) || n !== undefined || "string" != typeof e)
                return l || (l = a ? t[s] = nt.pop() || ft.guid++ : s),
                u[l] || (u[l] = a ? {} : {
                    toJSON: ft.noop
                }),
                "object" != typeof e && "function" != typeof e || (r ? u[l] = ft.extend(u[l], e) : u[l].data = ft.extend(u[l].data, e)),
                o = u[l],
                r || (o.data || (o.data = {}),
                o = o.data),
                n !== undefined && (o[ft.camelCase(e)] = n),
                "string" == typeof e ? null == (i = o[e]) && (i = o[ft.camelCase(e)]) : i = o,
                i
        }
    }
    function d(t, e, n) {
        if (jt(t)) {
            var r, i, o = t.nodeType, s = o ? ft.cache : t, a = o ? t[ft.expando] : ft.expando;
            if (s[a]) {
                if (e && (r = n ? s[a] : s[a].data)) {
                    i = (e = ft.isArray(e) ? e.concat(ft.map(e, ft.camelCase)) : e in r ? [e] : (e = ft.camelCase(e))in r ? [e] : e.split(" ")).length;
                    for (; i--; )
                        delete r[e[i]];
                    if (n ? !l(r) : !ft.isEmptyObject(r))
                        return
                }
                (n || (delete s[a].data,
                l(s[a]))) && (o ? ft.cleanData([t], !0) : dt.deleteExpando || s != s.window ? delete s[a] : s[a] = undefined)
            }
        }
    }
    function p(t, e, n, r) {
        var i, o = 1, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return ft.css(t, e, "")
        }
        , u = a(), l = n && n[3] || (ft.cssNumber[e] ? "" : "px"), c = (ft.cssNumber[e] || "px" !== l && +u) && Bt.exec(ft.css(t, e));
        if (c && c[3] !== l) {
            l = l || c[3],
            n = n || [],
            c = +u || 1;
            do {
                c /= o = o || ".5",
                ft.style(t, e, c + l)
            } while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    function f(t) {
        var e = Xt.split("|")
          , n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length; )
                n.createElement(e.pop());
        return n
    }
    function h(t, e) {
        var n, r, i = 0, o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
        if (!o)
            for (o = [],
            n = t.childNodes || t; null != (r = n[i]); i++)
                !e || ft.nodeName(r, e) ? o.push(r) : ft.merge(o, h(r, e));
        return e === undefined || e && ft.nodeName(t, e) ? ft.merge([t], o) : o
    }
    function m(t, e) {
        for (var n, r = 0; null != (n = t[r]); r++)
            ft._data(n, "globalEval", !e || ft._data(e[r], "globalEval"))
    }
    function g(t) {
        $t.test(t.type) && (t.defaultChecked = t.checked)
    }
    function y(t, e, n, r, i) {
        for (var o, s, a, u, l, c, d, p = t.length, y = f(e), v = [], b = 0; b < p; b++)
            if ((s = t[b]) || 0 === s)
                if ("object" === ft.type(s))
                    ft.merge(v, s.nodeType ? [s] : s);
                else if (Kt.test(s)) {
                    for (u = u || y.appendChild(e.createElement("div")),
                    l = (zt.exec(s) || ["", ""])[1].toLowerCase(),
                    d = Qt[l] || Qt._default,
                    u.innerHTML = d[1] + ft.htmlPrefilter(s) + d[2],
                    o = d[0]; o--; )
                        u = u.lastChild;
                    if (!dt.leadingWhitespace && Ut.test(s) && v.push(e.createTextNode(Ut.exec(s)[0])),
                    !dt.tbody)
                        for (o = (s = "table" !== l || Jt.test(s) ? "<table>" !== d[1] || Jt.test(s) ? 0 : u : u.firstChild) && s.childNodes.length; o--; )
                            ft.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                    for (ft.merge(v, u.childNodes),
                    u.textContent = ""; u.firstChild; )
                        u.removeChild(u.firstChild);
                    u = y.lastChild
                } else
                    v.push(e.createTextNode(s));
        for (u && y.removeChild(u),
        dt.appendChecked || ft.grep(h(v, "input"), g),
        b = 0; s = v[b++]; )
            if (r && ft.inArray(s, r) > -1)
                i && i.push(s);
            else if (a = ft.contains(s.ownerDocument, s),
            u = h(y.appendChild(s), "script"),
            a && m(u),
            n)
                for (o = 0; s = u[o++]; )
                    Vt.test(s.type || "") && n.push(s);
        return u = null,
        y
    }
    function v() {
        return !0
    }
    function b() {
        return !1
    }
    function x() {
        try {
            return rt.activeElement
        } catch (t) {}
    }
    function w(t, e, n, r, i, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (r = r || n,
            n = undefined),
            e)
                w(t, a, n, r, e[a], o);
            return t
        }
        if (null == r && null == i ? (i = n,
        r = n = undefined) : null == i && ("string" == typeof n ? (i = r,
        r = undefined) : (i = r,
        r = n,
        n = undefined)),
        !1 === i)
            i = b;
        else if (!i)
            return t;
        return 1 === o && (s = i,
        (i = function(t) {
            return ft().off(t),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = ft.guid++)),
        t.each(function() {
            ft.event.add(this, e, i, r, n)
        })
    }
    function T(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function k(t) {
        return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function S(t) {
        var e = ae.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function C(t, e) {
        if (1 === e.nodeType && ft.hasData(t)) {
            var n, r, i, o = ft._data(t), s = ft._data(e, o), a = o.events;
            if (a)
                for (n in delete s.handle,
                s.events = {},
                a)
                    for (r = 0,
                    i = a[n].length; r < i; r++)
                        ft.event.add(e, n, a[n][r]);
            s.data && (s.data = ft.extend({}, s.data))
        }
    }
    function E(t, e) {
        var n, r, i;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(),
            !dt.noCloneEvent && e[ft.expando]) {
                for (r in (i = ft._data(e)).events)
                    ft.removeEvent(e, r, i.handle);
                e.removeAttribute(ft.expando)
            }
            "script" === n && e.text !== t.text ? (k(e).text = t.text,
            S(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML),
            dt.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && $t.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
            e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }
    function A(t, e, n, r) {
        e = ot.apply([], e);
        var i, o, s, a, u, l, c = 0, d = t.length, p = d - 1, f = e[0], m = ft.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !dt.checkClone && se.test(f))
            return t.each(function(i) {
                var o = t.eq(i);
                m && (e[0] = f.call(this, i, o.html())),
                A(o, e, n, r)
            });
        if (d && (i = (l = y(e, t[0].ownerDocument, !1, t, r)).firstChild,
        1 === l.childNodes.length && (l = i),
        i || r)) {
            for (s = (a = ft.map(h(l, "script"), k)).length; c < d; c++)
                o = l,
                c !== p && (o = ft.clone(o, !0, !0),
                s && ft.merge(a, h(o, "script"))),
                n.call(t[c], o, c);
            if (s)
                for (u = a[a.length - 1].ownerDocument,
                ft.map(a, S),
                c = 0; c < s; c++)
                    o = a[c],
                    Vt.test(o.type || "") && !ft._data(o, "globalEval") && ft.contains(u, o) && (o.src ? ft._evalUrl && ft._evalUrl(o.src) : ft.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ue, "")));
            l = i = null
        }
        return t
    }
    function L(t, e, n) {
        for (var r, i = e ? ft.filter(e, t) : t, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || ft.cleanData(h(r)),
            r.parentNode && (n && ft.contains(r.ownerDocument, r) && m(h(r, "script")),
            r.parentNode.removeChild(r));
        return t
    }
    function N(t, e) {
        var n = ft(e.createElement(t)).appendTo(e.body)
          , r = ft.css(n[0], "display");
        return n.detach(),
        r
    }
    function D(t) {
        var e = rt
          , n = de[t];
        return n || ("none" !== (n = N(t, e)) && n || ((e = ((ce = (ce || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || ce[0].contentDocument).document).write(),
        e.close(),
        n = N(t, e),
        ce.detach()),
        de[t] = n),
        n
    }
    function R(t, e) {
        return {
            get: function() {
                if (!t())
                    return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }
    function j(t) {
        if (t in Ee)
            return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--; )
            if ((t = Ce[n] + e)in Ee)
                return t
    }
    function q(t, e) {
        for (var n, r, i, o = [], s = 0, a = t.length; s < a; s++)
            (r = t[s]).style && (o[s] = ft._data(r, "olddisplay"),
            n = r.style.display,
            e ? (o[s] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Ot(r) && (o[s] = ft._data(r, "olddisplay", D(r.nodeName)))) : (i = Ot(r),
            (n && "none" !== n || !i) && ft._data(r, "olddisplay", i ? n : ft.css(r, "display"))));
        for (s = 0; s < a; s++)
            (r = t[s]).style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function P(t, e, n) {
        var r = Te.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }
    function H(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2)
            "margin" === n && (s += ft.css(t, n + _t[o], !0, i)),
            r ? ("content" === n && (s -= ft.css(t, "padding" + _t[o], !0, i)),
            "margin" !== n && (s -= ft.css(t, "border" + _t[o] + "Width", !0, i))) : (s += ft.css(t, "padding" + _t[o], !0, i),
            "padding" !== n && (s += ft.css(t, "border" + _t[o] + "Width", !0, i)));
        return s
    }
    function M(t, e, n) {
        var r = !0
          , i = "width" === e ? t.offsetWidth : t.offsetHeight
          , o = ge(t)
          , s = dt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = ye(t, e, o)) < 0 || null == i) && (i = t.style[e]),
            fe.test(i))
                return i;
            r = s && (dt.boxSizingReliable() || i === t.style[e]),
            i = parseFloat(i) || 0
        }
        return i + H(t, e, n || (s ? "border" : "content"), r, o) + "px"
    }
    function I(t, e, n, r, i) {
        return new I.prototype.init(t,e,n,r,i)
    }
    function F() {
        return t.setTimeout(function() {
            Ae = undefined
        }),
        Ae = ft.now()
    }
    function B(t, e) {
        var n, r = {
            height: t
        }, i = 0;
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
            r["margin" + (n = _t[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t),
        r
    }
    function _(t, e, n) {
        for (var r, i = ($.tweeners[e] || []).concat($.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, e, t))
                return r
    }
    function O(t, e, n) {
        var r, i, o, s, a, u, l, c = this, d = {}, p = t.style, f = t.nodeType && Ot(t), h = ft._data(t, "fxshow");
        for (r in n.queue || (null == (a = ft._queueHooks(t, "fx")).unqueued && (a.unqueued = 0,
        u = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || u()
        }
        ),
        a.unqueued++,
        c.always(function() {
            c.always(function() {
                a.unqueued--,
                ft.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === ("none" === (l = ft.css(t, "display")) ? ft._data(t, "olddisplay") || D(t.nodeName) : l) && "none" === ft.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== D(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        dt.shrinkWrapBlocks() || c.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        })),
        e)
            if (i = e[r],
            Pe.exec(i)) {
                if (delete e[r],
                o = o || "toggle" === i,
                i === (f ? "hide" : "show")) {
                    if ("show" !== i || !h || h[r] === undefined)
                        continue;
                    f = !0
                }
                d[r] = h && h[r] || ft.style(t, r)
            } else
                l = undefined;
        if (ft.isEmptyObject(d))
            "inline" === ("none" === l ? D(t.nodeName) : l) && (p.display = l);
        else
            for (r in h ? "hidden"in h && (f = h.hidden) : h = ft._data(t, "fxshow", {}),
            o && (h.hidden = !f),
            f ? ft(t).show() : c.done(function() {
                ft(t).hide()
            }),
            c.done(function() {
                var e;
                for (e in ft._removeData(t, "fxshow"),
                d)
                    ft.style(t, e, d[e])
            }),
            d)
                s = _(f ? h[r] : 0, r, c),
                r in h || (h[r] = s.start,
                f && (s.end = s.start,
                s.start = "width" === r || "height" === r ? 1 : 0))
    }
    function W(t, e) {
        var n, r, i, o, s;
        for (n in t)
            if (i = e[r = ft.camelCase(n)],
            o = t[n],
            ft.isArray(o) && (i = o[1],
            o = t[n] = o[0]),
            n !== r && (t[r] = o,
            delete t[n]),
            (s = ft.cssHooks[r]) && "expand"in s)
                for (n in o = s.expand(o),
                delete t[r],
                o)
                    n in t || (t[n] = o[n],
                    e[n] = i);
            else
                e[r] = i
    }
    function $(t, e, n) {
        var r, i, o = 0, s = $.prefilters.length, a = ft.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var e = Ae || F(), n = Math.max(0, l.startTime + l.duration - e), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++)
                l.tweens[o].run(r);
            return a.notifyWith(t, [l, r, n]),
            r < 1 && s ? n : (a.resolveWith(t, [l]),
            !1)
        }, l = a.promise({
            elem: t,
            props: ft.extend({}, e),
            opts: ft.extend(!0, {
                specialEasing: {},
                easing: ft.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Ae || F(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var r = ft.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(e) {
                var n = 0
                  , r = e ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return e ? (a.notifyWith(t, [l, 1, 0]),
                a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]),
                this
            }
        }), c = l.props;
        for (W(c, l.opts.specialEasing); o < s; o++)
            if (r = $.prefilters[o].call(l, t, c, l.opts))
                return ft.isFunction(r.stop) && (ft._queueHooks(l.elem, l.opts.queue).stop = ft.proxy(r.stop, r)),
                r;
        return ft.map(c, _, l),
        ft.isFunction(l.opts.start) && l.opts.start.call(t, l),
        ft.fx.timer(ft.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function z(t) {
        return ft.attr(t, "class") || ""
    }
    function V(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var r, i = 0, o = e.toLowerCase().match(Dt) || [];
            if (ft.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                    (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }
    function U(t, e, n, r) {
        function i(a) {
            var u;
            return o[a] = !0,
            ft.each(t[a] || [], function(t, a) {
                var l = a(e, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l),
                i(l),
                !1)
            }),
            u
        }
        var o = {}
          , s = t === sn;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }
    function X(t, e) {
        var n, r, i = ft.ajaxSettings.flatOptions || {};
        for (r in e)
            e[r] !== undefined && ((i[r] ? t : n || (n = {}))[r] = e[r]);
        return n && ft.extend(!0, t, n),
        t
    }
    function Q(t, e, n) {
        for (var r, i, o, s, a = t.contents, u = t.dataTypes; "*" === u[0]; )
            u.shift(),
            i === undefined && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    u.unshift(s);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (s in n) {
                if (!u[0] || t.converters[s + " " + u[0]]) {
                    o = s;
                    break
                }
                r || (r = s)
            }
            o = o || r
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function K(t, e, n, r) {
        var i, o, s, a, u, l = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                l[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o; )
            if (t.responseFields[o] && (n[t.responseFields[o]] = e),
            !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && t["throws"])
                            e = s(e);
                        else
                            try {
                                e = s(e)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: s ? d : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function J(t) {
        return t.style && t.style.display || ft.css(t, "display")
    }
    function G(t) {
        if (!ft.contains(t.ownerDocument || rt, t))
            return !0;
        for (; t && 1 === t.nodeType; ) {
            if ("none" === J(t) || "hidden" === t.type)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function Y(t, e, n, r) {
        var i;
        if (ft.isArray(e))
            ft.each(e, function(e, i) {
                n || dn.test(t) ? r(t, i) : Y(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
            });
        else if (n || "object" !== ft.type(e))
            r(t, e);
        else
            for (i in e)
                Y(t + "[" + i + "]", e[i], n, r)
    }
    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }
    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function et(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = []
      , rt = t.document
      , it = nt.slice
      , ot = nt.concat
      , st = nt.push
      , at = nt.indexOf
      , ut = {}
      , lt = ut.toString
      , ct = ut.hasOwnProperty
      , dt = {}
      , pt = "1.12.4"
      , ft = function(t, e) {
        return new ft.fn.init(t,e)
    }
      , ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , mt = /^-ms-/
      , gt = /-([\da-z])/gi
      , yt = function(t, e) {
        return e.toUpperCase()
    };
    ft.fn = ft.prototype = {
        jquery: pt,
        constructor: ft,
        selector: "",
        length: 0,
        toArray: function() {
            return it.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : it.call(this)
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t) {
            return ft.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ft.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: st,
        sort: nt.sort,
        splice: nt.splice
    },
    ft.extend = ft.fn.extend = function() {
        var t, e, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || ft.isFunction(s) || (s = {}),
        a === u && (s = this,
        a--); a < u; a++)
            if (null != (i = arguments[a]))
                for (r in i)
                    t = s[r],
                    s !== (n = i[r]) && (l && n && (ft.isPlainObject(n) || (e = ft.isArray(n))) ? (e ? (e = !1,
                    o = t && ft.isArray(t) ? t : []) : o = t && ft.isPlainObject(t) ? t : {},
                    s[r] = ft.extend(l, o, n)) : n !== undefined && (s[r] = n));
        return s
    }
    ,
    ft.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === ft.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ft.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t))
                return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (!dt.ownFirst)
                for (e in t)
                    return ct.call(t, e);
            for (e in t)
                ;
            return e === undefined || ct.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ut[lt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && ft.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            }
            )(e)
        },
        camelCase: function(t) {
            return t.replace(mt, "ms-").replace(gt, yt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var r, i = 0;
            if (n(t))
                for (r = t.length; i < r && !1 !== e.call(t[i], i, t[i]); i++)
                    ;
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(ht, "")
        },
        makeArray: function(t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? ft.merge(r, "string" == typeof t ? [t] : t) : st.call(r, t)),
            r
        },
        inArray: function(t, e, n) {
            var r;
            if (e) {
                if (at)
                    return at.call(e, t, n);
                for (r = e.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; )
                t[i++] = e[r++];
            if (n != n)
                for (; e[r] !== undefined; )
                    t[i++] = e[r++];
            return t.length = i,
            t
        },
        grep: function(t, e, n) {
            for (var r = [], i = 0, o = t.length, s = !n; i < o; i++)
                !e(t[i], i) !== s && r.push(t[i]);
            return r
        },
        map: function(t, e, r) {
            var i, o, s = 0, a = [];
            if (n(t))
                for (i = t.length; s < i; s++)
                    null != (o = e(t[s], s, r)) && a.push(o);
            else
                for (s in t)
                    null != (o = e(t[s], s, r)) && a.push(o);
            return ot.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, i;
            return "string" == typeof e && (i = t[e],
            e = t,
            t = i),
            ft.isFunction(t) ? (n = it.call(arguments, 2),
            (r = function() {
                return t.apply(e || this, n.concat(it.call(arguments)))
            }
            ).guid = t.guid = t.guid || ft.guid++,
            r) : undefined
        },
        now: function() {
            return +new Date
        },
        support: dt
    }),
    "function" == typeof Symbol && (ft.fn[Symbol.iterator] = nt[Symbol.iterator]),
    ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        ut["[object " + e + "]"] = e.toLowerCase()
    });
    var vt = function(t) {
        function e(t, e, n, r) {
            var i, o, s, a, u, l, d, f, h = e && e.ownerDocument, m = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!r && ((e ? e.ownerDocument || e : _) !== j && R(e),
            e = e || j,
            P)) {
                if (11 !== m && (l = yt.exec(t)))
                    if (i = l[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return n.push(s),
                                n
                        } else if (h && (s = h.getElementById(i)) && F(e, s) && s.id === i)
                            return n.push(s),
                            n
                    } else {
                        if (l[2])
                            return Y.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = l[3]) && w.getElementsByClassName && e.getElementsByClassName)
                            return Y.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (w.qsa && !V[t + " "] && (!H || !H.test(t))) {
                    if (1 !== m)
                        h = e,
                        f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = B),
                        o = (d = C(t)).length,
                        u = pt.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                            d[o] = u + " " + p(d[o]);
                        f = d.join(","),
                        h = vt.test(t) && c(e.parentNode) || e
                    }
                    if (f)
                        try {
                            return Y.apply(n, h.querySelectorAll(f)),
                            n
                        } catch (g) {} finally {
                            a === B && e.removeAttribute("id")
                        }
                }
            }
            return A(t.replace(at, "$1"), e, n, r)
        }
        function n() {
            function t(n, r) {
                return e.push(n + " ") > T.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
            var e = [];
            return t
        }
        function r(t) {
            return t[B] = !0,
            t
        }
        function i(t) {
            var e = j.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), r = n.length; r--; )
                T.attrHandle[n[r]] = e
        }
        function s(t, e) {
            var n = e && t
              , r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function l(t) {
            return r(function(e) {
                return e = +e,
                r(function(n, r) {
                    for (var i, o = t([], n.length, e), s = o.length; s--; )
                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function d() {}
        function p(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++)
                r += t[e].value;
            return r
        }
        function f(t, e, n) {
            var r = e.dir
              , i = n && "parentNode" === r
              , o = W++;
            return e.first ? function(e, n, o) {
                for (; e = e[r]; )
                    if (1 === e.nodeType || i)
                        return t(e, n, o)
            }
            : function(e, n, s) {
                var a, u, l, c = [O, o];
                if (s) {
                    for (; e = e[r]; )
                        if ((1 === e.nodeType || i) && t(e, n, s))
                            return !0
                } else
                    for (; e = e[r]; )
                        if (1 === e.nodeType || i) {
                            if ((a = (u = (l = e[B] || (e[B] = {}))[e.uniqueID] || (l[e.uniqueID] = {}))[r]) && a[0] === O && a[1] === o)
                                return c[2] = a[2];
                            if (u[r] = c,
                            c[2] = t(e, n, s))
                                return !0
                        }
            }
        }
        function h(t) {
            return t.length > 1 ? function(e, n, r) {
                for (var i = t.length; i--; )
                    if (!t[i](e, n, r))
                        return !1;
                return !0
            }
            : t[0]
        }
        function m(t, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                e(t, n[i], r);
            return r
        }
        function g(t, e, n, r, i) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++)
                (o = t[a]) && (n && !n(o, r, i) || (s.push(o),
                l && e.push(a)));
            return s
        }
        function y(t, e, n, i, o, s) {
            return i && !i[B] && (i = y(i)),
            o && !o[B] && (o = y(o, s)),
            r(function(r, s, a, u) {
                var l, c, d, p = [], f = [], h = s.length, y = r || m(e || "*", a.nodeType ? [a] : a, []), v = !t || !r && e ? y : g(y, p, t, a, u), b = n ? o || (r ? t : h || i) ? [] : s : v;
                if (n && n(v, b, a, u),
                i)
                    for (l = g(b, f),
                    i(l, [], a, u),
                    c = l.length; c--; )
                        (d = l[c]) && (b[f[c]] = !(v[f[c]] = d));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (l = [],
                            c = b.length; c--; )
                                (d = b[c]) && l.push(v[c] = d);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--; )
                            (d = b[c]) && (l = o ? tt(r, d) : p[c]) > -1 && (r[l] = !(s[l] = d))
                    }
                } else
                    b = g(b === s ? b.splice(h, b.length) : b),
                    o ? o(null, s, b, u) : Y.apply(s, b)
            })
        }
        function v(t) {
            for (var e, n, r, i = t.length, o = T.relative[t[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = f(function(t) {
                return t === e
            }, s, !0), l = f(function(t) {
                return tt(e, t) > -1
            }, s, !0), c = [function(t, n, r) {
                var i = !o && (r || n !== L) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
                return e = null,
                i
            }
            ]; a < i; a++)
                if (n = T.relative[t[a].type])
                    c = [f(h(c), n)];
                else {
                    if ((n = T.filter[t[a].type].apply(null, t[a].matches))[B]) {
                        for (r = ++a; r < i && !T.relative[t[r].type]; r++)
                            ;
                        return y(a > 1 && h(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, a < r && v(t.slice(a, r)), r < i && v(t = t.slice(r)), r < i && p(t))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function b(t, n) {
            var i = n.length > 0
              , o = t.length > 0
              , s = function(r, s, a, u, l) {
                var c, d, p, f = 0, h = "0", m = r && [], y = [], v = L, b = r || o && T.find.TAG("*", l), x = O += null == v ? 1 : Math.random() || .1, w = b.length;
                for (l && (L = s === j || s || l); h !== w && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (d = 0,
                        s || c.ownerDocument === j || (R(c),
                        a = !P); p = t[d++]; )
                            if (p(c, s || j, a)) {
                                u.push(c);
                                break
                            }
                        l && (O = x)
                    }
                    i && ((c = !p && c) && f--,
                    r && m.push(c))
                }
                if (f += h,
                i && h !== f) {
                    for (d = 0; p = n[d++]; )
                        p(m, y, s, a);
                    if (r) {
                        if (f > 0)
                            for (; h--; )
                                m[h] || y[h] || (y[h] = J.call(u));
                        y = g(y)
                    }
                    Y.apply(u, y),
                    l && !r && y.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                }
                return l && (O = x,
                L = v),
                m
            };
            return i ? r(s) : s
        }
        var x, w, T, k, S, C, E, A, L, N, D, R, j, q, P, H, M, I, F, B = "sizzle" + 1 * new Date, _ = t.document, O = 0, W = 0, $ = n(), z = n(), V = n(), U = function(t, e) {
            return t === e && (D = !0),
            0
        }, X = 1 << 31, Q = {}.hasOwnProperty, K = [], J = K.pop, G = K.push, Y = K.push, Z = K.slice, tt = function(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]", ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", st = new RegExp(nt + "+","g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), ut = new RegExp("^" + nt + "*," + nt + "*"), lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), dt = new RegExp(ot), pt = new RegExp("^" + rt + "$"), ft = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + et + ")$","i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
        }, ht = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, bt = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), wt = function(t, e, n) {
            var r = "0x" + e - 65536;
            return r != r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Tt = function() {
            R()
        };
        try {
            Y.apply(K = Z.call(_.childNodes), _.childNodes),
            K[_.childNodes.length].nodeType
        } catch (kt) {
            Y = {
                apply: K.length ? function(t, e) {
                    G.apply(t, Z.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        for (x in w = e.support = {},
        S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        R = e.setDocument = function(t) {
            var e, n, r = t ? t.ownerDocument || t : _;
            return r !== j && 9 === r.nodeType && r.documentElement ? (q = (j = r).documentElement,
            P = !S(j),
            (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)),
            w.attributes = i(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            w.getElementsByTagName = i(function(t) {
                return t.appendChild(j.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = gt.test(j.getElementsByClassName),
            w.getById = i(function(t) {
                return q.appendChild(t).id = B,
                !j.getElementsByName || !j.getElementsByName(B).length
            }),
            w.getById ? (T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && P) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ,
            T.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ) : (delete T.find.ID,
            T.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }
            ),
            T.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, r = [], i = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            T.find.CLASS = w.getElementsByClassName && function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && P)
                    return e.getElementsByClassName(t)
            }
            ,
            M = [],
            H = [],
            (w.qsa = gt.test(j.querySelectorAll)) && (i(function(t) {
                q.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + nt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || H.push("\\[" + nt + "*(?:value|" + et + ")"),
                t.querySelectorAll("[id~=" + B + "-]").length || H.push("~="),
                t.querySelectorAll(":checked").length || H.push(":checked"),
                t.querySelectorAll("a#" + B + "+*").length || H.push(".#.+[+~]")
            }),
            i(function(t) {
                var e = j.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && H.push("name" + nt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                H.push(",.*:")
            })),
            (w.matchesSelector = gt.test(I = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(t) {
                w.disconnectedMatch = I.call(t, "div"),
                I.call(t, "[s!='']:x"),
                M.push("!=", ot)
            }),
            H = H.length && new RegExp(H.join("|")),
            M = M.length && new RegExp(M.join("|")),
            e = gt.test(q.compareDocumentPosition),
            F = e || gt.test(q.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            U = e ? function(t, e) {
                if (t === e)
                    return D = !0,
                    0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === j || t.ownerDocument === _ && F(_, t) ? -1 : e === j || e.ownerDocument === _ && F(_, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return D = !0,
                    0;
                var n, r = 0, i = t.parentNode, o = e.parentNode, a = [t], u = [e];
                if (!i || !o)
                    return t === j ? -1 : e === j ? 1 : i ? -1 : o ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                if (i === o)
                    return s(t, e);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (n = e; n = n.parentNode; )
                    u.unshift(n);
                for (; a[r] === u[r]; )
                    r++;
                return r ? s(a[r], u[r]) : a[r] === _ ? -1 : u[r] === _ ? 1 : 0
            }
            ,
            j) : j
        }
        ,
        e.matches = function(t, n) {
            return e(t, null, null, n)
        }
        ,
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== j && R(t),
            n = n.replace(ct, "='$1']"),
            w.matchesSelector && P && !V[n + " "] && (!M || !M.test(n)) && (!H || !H.test(n)))
                try {
                    var r = I.call(t, n);
                    if (r || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return r
                } catch (kt) {}
            return e(n, j, null, [t]).length > 0
        }
        ,
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== j && R(t),
            F(t, e)
        }
        ,
        e.attr = function(t, e) {
            (t.ownerDocument || t) !== j && R(t);
            var n = T.attrHandle[e.toLowerCase()]
              , r = n && Q.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !P) : undefined;
            return r !== undefined ? r : w.attributes || !P ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }
        ,
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        e.uniqueSort = function(t) {
            var e, n = [], r = 0, i = 0;
            if (D = !w.detectDuplicates,
            N = !w.sortStable && t.slice(0),
            t.sort(U),
            D) {
                for (; e = t[i++]; )
                    e === t[i] && (r = n.push(i));
                for (; r--; )
                    t.splice(n[r], 1)
            }
            return N = null,
            t
        }
        ,
        k = e.getText = function(t) {
            var e, n = "", r = 0, i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += k(t)
                } else if (3 === i || 4 === i)
                    return t.nodeValue
            } else
                for (; e = t[r++]; )
                    n += k(e);
            return n
        }
        ,
        (T = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, wt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = $[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && $(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3)
                      , s = "last" !== t.slice(-4)
                      , a = "of-type" === e;
                    return 1 === r && 0 === i ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, n, u) {
                        var l, c, d, p, f, h, m = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode, y = a && e.nodeName.toLowerCase(), v = !u && !a, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (p = e; p = p[m]; )
                                        if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                            return !1;
                                    h = m = "only" === t && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild],
                            s && v) {
                                for (b = (f = (l = (c = (d = (p = g)[B] || (p[B] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === O && l[1]) && l[2],
                                p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++b && p === e) {
                                        c[t] = [O, f, b];
                                        break
                                    }
                            } else if (v && (b = f = (l = (c = (d = (p = e)[B] || (p[B] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === O && l[1]),
                            !1 === b)
                                for (; (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (v && ((c = (d = p[B] || (p[B] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [O, b]),
                                p !== e)); )
                                    ;
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var i, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[B] ? o(n) : o.length > 1 ? (i = [t, t, "", n],
                    T.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                        for (var r, i = o(t, n), s = i.length; s--; )
                            t[r = tt(t, i[s])] = !(e[r] = i[s])
                    }) : function(t) {
                        return o(t, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(t) {
                    var e = []
                      , n = []
                      , i = E(t.replace(at, "$1"));
                    return i[B] ? r(function(t, e, n, r) {
                        for (var o, s = i(t, null, r, []), a = t.length; a--; )
                            (o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, r, o) {
                        return e[0] = t,
                        i(e, null, o, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function(t) {
                    return t = t.replace(xt, wt),
                    function(e) {
                        return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                    }
                }),
                lang: r(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(xt, wt).toLowerCase(),
                    function(e) {
                        var n;
                        do {
                            if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === q
                },
                focus: function(t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !T.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return ht.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; --r >= 0; )
                        t.push(r);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e; )
                        t.push(r);
                    return t
                })
            }
        }).pseudos.nth = T.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            T.pseudos[x] = u(x);
        return d.prototype = T.filters = T.pseudos,
        T.setFilters = new d,
        C = e.tokenize = function(t, n) {
            var r, i, o, s, a, u, l, c = z[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = t,
            u = [],
            l = T.preFilter; a; ) {
                for (s in r && !(i = ut.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                u.push(o = [])),
                r = !1,
                (i = lt.exec(a)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(at, " ")
                }),
                a = a.slice(r.length)),
                T.filter)
                    !(i = ft[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: s,
                        matches: i
                    }),
                    a = a.slice(r.length));
                if (!r)
                    break
            }
            return n ? a.length : a ? e.error(t) : z(t, u).slice(0)
        }
        ,
        E = e.compile = function(t, e) {
            var n, r = [], i = [], o = V[t + " "];
            if (!o) {
                for (e || (e = C(t)),
                n = e.length; n--; )
                    (o = v(e[n]))[B] ? r.push(o) : i.push(o);
                (o = V(t, b(i, r))).selector = t
            }
            return o
        }
        ,
        A = e.select = function(t, e, n, r) {
            var i, o, s, a, u, l = "function" == typeof t && t, d = !r && C(t = l.selector || t);
            if (n = n || [],
            1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && P && T.relative[o[1].type]) {
                    if (!(e = (T.find.ID(s.matches[0].replace(xt, wt), e) || [])[0]))
                        return n;
                    l && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (i = ft.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i],
                !T.relative[a = s.type]); )
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(xt, wt), vt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(i, 1),
                        !(t = r.length && p(o)))
                            return Y.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || E(t, d))(r, e, !P, n, !e || vt.test(t) && c(e.parentNode) || e),
            n
        }
        ,
        w.sortStable = B.split("").sort(U).join("") === B,
        w.detectDuplicates = !!D,
        R(),
        w.sortDetached = i(function(t) {
            return 1 & t.compareDocumentPosition(j.createElement("div"))
        }),
        i(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        i(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var r;
            if (!n)
                return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }),
        e
    }(t);
    ft.find = vt,
    ft.expr = vt.selectors,
    ft.expr[":"] = ft.expr.pseudos,
    ft.uniqueSort = ft.unique = vt.uniqueSort,
    ft.text = vt.getText,
    ft.isXMLDoc = vt.isXML,
    ft.contains = vt.contains;
    var bt = function(t, e, n) {
        for (var r = [], i = n !== undefined; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (i && ft(t).is(n))
                    break;
                r.push(t)
            }
        return r
    }
      , xt = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , wt = ft.expr.match.needsContext
      , Tt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , kt = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === r.nodeType ? ft.find.matchesSelector(r, t) ? [r] : [] : ft.find.matches(t, ft.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    ft.fn.extend({
        find: function(t) {
            var e, n = [], r = this, i = r.length;
            if ("string" != typeof t)
                return this.pushStack(ft(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (ft.contains(r[e], this))
                            return !0
                }));
            for (e = 0; e < i; e++)
                ft.find(t, r[e], n);
            return (n = this.pushStack(i > 1 ? ft.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t,
            n
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && wt.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var St, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ft.fn.init = function(t, e, n) {
        var r, i;
        if (!t)
            return this;
        if (n = n || St,
        "string" == typeof t) {
            if (!(r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Ct.exec(t)) || !r[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof ft ? e[0] : e,
                ft.merge(this, ft.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)),
                Tt.test(r[1]) && ft.isPlainObject(e))
                    for (r in e)
                        ft.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            if ((i = rt.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2])
                    return St.find(t);
                this.length = 1,
                this[0] = i
            }
            return this.context = rt,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (t.selector !== undefined && (this.selector = t.selector,
        this.context = t.context),
        ft.makeArray(t, this))
    }
    ).prototype = ft.fn,
    St = ft(rt);
    var Et = /^(?:parents|prev(?:Until|All))/
      , At = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ft.fn.extend({
        has: function(t) {
            var e, n = ft(t, this), r = n.length;
            return this.filter(function() {
                for (e = 0; e < r; e++)
                    if (ft.contains(this, n[e]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0, i = this.length, o = [], s = wt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ft.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return bt(t, "parentNode", n)
        },
        next: function(t) {
            return i(t, "nextSibling")
        },
        prev: function(t) {
            return i(t, "previousSibling")
        },
        nextAll: function(t) {
            return bt(t, "nextSibling")
        },
        prevAll: function(t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return bt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return bt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
        }
    }, function(t, e) {
        ft.fn[t] = function(n, r) {
            var i = ft.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n),
            r && "string" == typeof r && (i = ft.filter(r, i)),
            this.length > 1 && (At[t] || (i = ft.uniqueSort(i)),
            Et.test(t) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var Lt, Nt, Dt = /\S+/g;
    for (Nt in ft.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : ft.extend({}, t);
        var e, n, r, i, s = [], a = [], u = -1, l = function() {
            for (i = t.once,
            r = e = !0; a.length; u = -1)
                for (n = a.shift(); ++u < s.length; )
                    !1 === s[u].apply(n[0], n[1]) && t.stopOnFalse && (u = s.length,
                    n = !1);
            t.memory || (n = !1),
            e = !1,
            i && (s = n ? [] : "")
        }, c = {
            add: function() {
                return s && (n && !e && (u = s.length - 1,
                a.push(n)),
                function r(e) {
                    ft.each(e, function(e, n) {
                        ft.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ft.type(n) && r(n)
                    })
                }(arguments),
                n && !e && l()),
                this
            },
            remove: function() {
                return ft.each(arguments, function(t, e) {
                    for (var n; (n = ft.inArray(e, s, n)) > -1; )
                        s.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(t) {
                return t ? ft.inArray(t, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return i = a = [],
                s = n = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return i = !0,
                n || c.disable(),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(t, n) {
                return i || (n = [t, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                e || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
    ,
    ft.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", ft.Callbacks("once memory"), "resolved"], ["reject", "fail", ft.Callbacks("once memory"), "rejected"], ["notify", "progress", ft.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return ft.Deferred(function(n) {
                        ft.each(e, function(e, o) {
                            var s = ft.isFunction(t[e]) && t[e];
                            i[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && ft.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? ft.extend(t, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            ft.each(e, function(t, o) {
                var s = o[2]
                  , a = o[3];
                r[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = s.fireWith
            }),
            r.promise(i),
            t && t.call(i, i),
            i
        },
        when: function(t) {
            var e, n, r, i = 0, o = it.call(arguments), s = o.length, a = 1 !== s || t && ft.isFunction(t.promise) ? s : 0, u = 1 === a ? t : ft.Deferred(), l = function(t, n, r) {
                return function(i) {
                    n[t] = this,
                    r[t] = arguments.length > 1 ? it.call(arguments) : i,
                    r === e ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1)
                for (e = new Array(s),
                n = new Array(s),
                r = new Array(s); i < s; i++)
                    o[i] && ft.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, e)).done(l(i, r, o)).fail(u.reject) : --a;
            return a || u.resolveWith(r, o),
            u.promise()
        }
    }),
    ft.fn.ready = function(t) {
        return ft.ready.promise().done(t),
        this
    }
    ,
    ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0,
            !0 !== t && --ft.readyWait > 0 || (Lt.resolveWith(rt, [ft]),
            ft.fn.triggerHandler && (ft(rt).triggerHandler("ready"),
            ft(rt).off("ready"))))
        }
    }),
    ft.ready.promise = function(e) {
        if (!Lt)
            if (Lt = ft.Deferred(),
            "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll)
                t.setTimeout(ft.ready);
            else if (rt.addEventListener)
                rt.addEventListener("DOMContentLoaded", a),
                t.addEventListener("load", a);
            else {
                rt.attachEvent("onreadystatechange", a),
                t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && rt.documentElement
                } catch (r) {}
                n && n.doScroll && function i() {
                    if (!ft.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (r) {
                            return t.setTimeout(i, 50)
                        }
                        s(),
                        ft.ready()
                    }
                }()
            }
        return Lt.promise(e)
    }
    ,
    ft.ready.promise(),
    ft(dt))
        break;
    dt.ownFirst = "0" === Nt,
    dt.inlineBlockNeedsLayout = !1,
    ft(function() {
        var t, e, n, r;
        (n = rt.getElementsByTagName("body")[0]) && n.style && (e = rt.createElement("div"),
        (r = rt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(r).appendChild(e),
        "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth,
        t && (n.style.zoom = 1)),
        n.removeChild(r))
    }),
    function() {
        var t = rt.createElement("div");
        dt.deleteExpando = !0;
        try {
            delete t.test
        } catch (e) {
            dt.deleteExpando = !1
        }
        t = null
    }();
    var Rt, jt = function(t) {
        var e = ft.noData[(t.nodeName + " ").toLowerCase()]
          , n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
    }, qt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Pt = /([A-Z])/g;
    ft.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando]) && !l(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }),
    ft.fn.extend({
        data: function(t, e) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (t === undefined) {
                if (this.length && (i = ft.data(o),
                1 === o.nodeType && !ft._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (r = s[n].name).indexOf("data-") && u(o, r = ft.camelCase(r.slice(5)), i[r]);
                    ft._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function() {
                ft.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                ft.data(this, t, e)
            }) : o ? u(o, t, ft.data(o, t)) : undefined
        },
        removeData: function(t) {
            return this.each(function() {
                ft.removeData(this, t)
            })
        }
    }),
    ft.extend({
        queue: function(t, e, n) {
            var r;
            if (t)
                return e = (e || "fx") + "queue",
                r = ft._data(t, e),
                n && (!r || ft.isArray(n) ? r = ft._data(t, e, ft.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ft.queue(t, e)
              , r = n.length
              , i = n.shift()
              , o = ft._queueHooks(t, e)
              , s = function() {
                ft.dequeue(t, e)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            i.call(t, s, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ft._data(t, n) || ft._data(t, n, {
                empty: ft.Callbacks("once memory").add(function() {
                    ft._removeData(t, e + "queue"),
                    ft._removeData(t, n)
                })
            })
        }
    }),
    ft.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            n--),
            arguments.length < n ? ft.queue(this[0], t) : e === undefined ? this : this.each(function() {
                var n = ft.queue(this, t, e);
                ft._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ft.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1, i = ft.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t,
            t = undefined),
            t = t || "fx"; s--; )
                (n = ft._data(o[s], t + "queueHooks")) && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(e)
        }
    }),
    dt.shrinkWrapBlocks = function() {
        return null != Rt ? Rt : (Rt = !1,
        (e = rt.getElementsByTagName("body")[0]) && e.style ? (t = rt.createElement("div"),
        (n = rt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        e.appendChild(n).appendChild(t),
        "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
        t.appendChild(rt.createElement("div")).style.width = "5px",
        Rt = 3 !== t.offsetWidth),
        e.removeChild(n),
        Rt) : void 0);
        var t, e, n
    }
    ;
    var Ht, Mt, It, Ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Bt = new RegExp("^(?:([+-])=|)(" + Ft + ")([a-z%]*)$","i"), _t = ["Top", "Right", "Bottom", "Left"], Ot = function(t, e) {
        return t = e || t,
        "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
    }, Wt = function(t, e, n, r, i, o, s) {
        var a = 0
          , u = t.length
          , l = null == n;
        if ("object" === ft.type(n))
            for (a in i = !0,
            n)
                Wt(t, e, a, n[a], !0, o, s);
        else if (r !== undefined && (i = !0,
        ft.isFunction(r) || (s = !0),
        l && (s ? (e.call(t, r),
        e = null) : (l = e,
        e = function(t, e, n) {
            return l.call(ft(t), n)
        }
        )),
        e))
            for (; a < u; a++)
                e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
        return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
    }, $t = /^(?:checkbox|radio)$/i, zt = /<([\w:-]+)/, Vt = /^$|\/(?:java|ecma)script/i, Ut = /^\s+/, Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    Ht = rt.createElement("div"),
    Mt = rt.createDocumentFragment(),
    It = rt.createElement("input"),
    Ht.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    dt.leadingWhitespace = 3 === Ht.firstChild.nodeType,
    dt.tbody = !Ht.getElementsByTagName("tbody").length,
    dt.htmlSerialize = !!Ht.getElementsByTagName("link").length,
    dt.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML,
    It.type = "checkbox",
    It.checked = !0,
    Mt.appendChild(It),
    dt.appendChecked = It.checked,
    Ht.innerHTML = "<textarea>x</textarea>",
    dt.noCloneChecked = !!Ht.cloneNode(!0).lastChild.defaultValue,
    Mt.appendChild(Ht),
    (It = rt.createElement("input")).setAttribute("type", "radio"),
    It.setAttribute("checked", "checked"),
    It.setAttribute("name", "t"),
    Ht.appendChild(It),
    dt.checkClone = Ht.cloneNode(!0).cloneNode(!0).lastChild.checked,
    dt.noCloneEvent = !!Ht.addEventListener,
    Ht[ft.expando] = 1,
    dt.attributes = !Ht.getAttribute(ft.expando);
    var Qt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Qt.optgroup = Qt.option,
    Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead,
    Qt.th = Qt.td;
    var Kt = /<|&#?\w+;/
      , Jt = /<tbody/i;
    !function() {
        var e, n, r = rt.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + e,
            (dt[e] = n in t) || (r.setAttribute(n, "t"),
            dt[e] = !1 === r.attributes[n].expando);
        r = null
    }();
    var Gt = /^(?:input|select|textarea)$/i
      , Yt = /^key/
      , Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , te = /^(?:focusinfocus|focusoutblur)$/
      , ee = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, l, c, d, p, f, h, m, g = ft._data(t);
            if (g) {
                for (n.handler && (n = (u = n).handler,
                i = u.selector),
                n.guid || (n.guid = ft.guid++),
                (s = g.events) || (s = g.events = {}),
                (c = g.handle) || ((c = g.handle = function(t) {
                    return void 0 === ft || t && ft.event.triggered === t.type ? undefined : ft.event.dispatch.apply(c.elem, arguments)
                }
                ).elem = t),
                a = (e = (e || "").match(Dt) || [""]).length; a--; )
                    f = m = (o = ee.exec(e[a]) || [])[1],
                    h = (o[2] || "").split(".").sort(),
                    f && (l = ft.event.special[f] || {},
                    f = (i ? l.delegateType : l.bindType) || f,
                    l = ft.event.special[f] || {},
                    d = ft.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ft.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, u),
                    (p = s[f]) || ((p = s[f] = []).delegateCount = 0,
                    l.setup && !1 !== l.setup.call(t, r, h, c) || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))),
                    l.add && (l.add.call(t, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    ft.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, r, i) {
            var o, s, a, u, l, c, d, p, f, h, m, g = ft.hasData(t) && ft._data(t);
            if (g && (c = g.events)) {
                for (l = (e = (e || "").match(Dt) || [""]).length; l--; )
                    if (f = m = (a = ee.exec(e[l]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    f) {
                        for (d = ft.event.special[f] || {},
                        p = c[f = (r ? d.delegateType : d.bindType) || f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        u = o = p.length; o--; )
                            s = p[o],
                            !i && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (p.splice(o, 1),
                            s.selector && p.delegateCount--,
                            d.remove && d.remove.call(t, s));
                        u && !p.length && (d.teardown && !1 !== d.teardown.call(t, h, g.handle) || ft.removeEvent(t, f, g.handle),
                        delete c[f])
                    } else
                        for (f in c)
                            ft.event.remove(t, f + e[l], n, r, !0);
                ft.isEmptyObject(c) && (delete g.handle,
                ft._removeData(t, "events"))
            }
        },
        trigger: function(e, n, r, i) {
            var o, s, a, u, l, c, d, p = [r || rt], f = ct.call(e, "type") ? e.type : e, h = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = r = r || rt,
            3 !== r.nodeType && 8 !== r.nodeType && !te.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (f = (h = f.split(".")).shift(),
            h.sort()),
            s = f.indexOf(":") < 0 && "on" + f,
            (e = e[ft.expando] ? e : new ft.Event(f,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = undefined,
            e.target || (e.target = r),
            n = null == n ? [e] : ft.makeArray(n, [e]),
            l = ft.event.special[f] || {},
            i || !l.trigger || !1 !== l.trigger.apply(r, n))) {
                if (!i && !l.noBubble && !ft.isWindow(r)) {
                    for (u = l.delegateType || f,
                    te.test(u + f) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        c = a;
                    c === (r.ownerDocument || rt) && p.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0; (a = p[d++]) && !e.isPropagationStopped(); )
                    e.type = d > 1 ? u : l.bindType || f,
                    (o = (ft._data(a, "events") || {})[e.type] && ft._data(a, "handle")) && o.apply(a, n),
                    (o = s && a[s]) && o.apply && jt(a) && (e.result = o.apply(a, n),
                    !1 === e.result && e.preventDefault());
                if (e.type = f,
                !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), n)) && jt(r) && s && r[f] && !ft.isWindow(r)) {
                    (c = r[s]) && (r[s] = null),
                    ft.event.triggered = f;
                    try {
                        r[f]()
                    } catch (m) {}
                    ft.event.triggered = undefined,
                    c && (r[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = ft.event.fix(t);
            var e, n, r, i, o, s = [], a = it.call(arguments), u = (ft._data(this, "events") || {})[t.type] || [], l = ft.event.special[t.type] || {};
            if (a[0] = t,
            t.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                for (s = ft.event.handlers.call(this, t, u),
                e = 0; (i = s[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o,
                        t.data = o.data,
                        (r = ((ft.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) !== undefined && !1 === (t.result = r) && (t.preventDefault(),
                        t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, s = [], a = e.delegateCount, u = t.target;
            if (a && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== t.type)) {
                        for (r = [],
                        n = 0; n < a; n++)
                            r[i = (o = e[n]).selector + " "] === undefined && (r[i] = o.needsContext ? ft(i, this).index(u) > -1 : ft.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }),
            s
        },
        fix: function(t) {
            if (t[ft.expando])
                return t;
            var e, n, r, i = t.type, o = t, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Zt.test(i) ? this.mouseHooks : Yt.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            t = new ft.Event(o),
            e = r.length; e--; )
                t[n = r[e]] = o[n];
            return t.target || (t.target = o.srcElement || rt),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, i, o = e.button, s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = (r = t.target.ownerDocument || rt).documentElement,
                n = r.body,
                t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s),
                t.which || o === undefined || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (ft.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                        !1
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var r = ft.extend(new ft.Event, n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(r, null, e),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    ft.removeEvent = rt.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    : function(t, e, n) {
        var r = "on" + e;
        t.detachEvent && ("undefined" == typeof t[r] && (t[r] = null),
        t.detachEvent(r, n))
    }
    ,
    ft.Event = function(t, e) {
        if (!(this instanceof ft.Event))
            return new ft.Event(t,e);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? v : b) : this.type = t,
        e && ft.extend(this, e),
        this.timeStamp = t && t.timeStamp || ft.now(),
        this[ft.expando] = !0
    }
    ,
    ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = v,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = v,
            t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(),
            t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = v,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = this, i = t.relatedTarget, o = t.handleObj;
                return i && (i === r || ft.contains(r, i)) || (t.type = o.origType,
                n = o.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    dt.submit || (ft.event.special.submit = {
        setup: function() {
            if (ft.nodeName(this, "form"))
                return !1;
            ft.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target
                  , n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : undefined;
                n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }),
                ft._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble,
            this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            if (ft.nodeName(this, "form"))
                return !1;
            ft.event.remove(this, "._submit")
        }
    }),
    dt.change || (ft.event.special.change = {
        setup: function() {
            if (Gt.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                }),
                ft.event.add(this, "click._change", function(t) {
                    this._justChanged && !t.isTrigger && (this._justChanged = !1),
                    ft.event.simulate("change", this, t)
                })),
                !1;
            ft.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Gt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                }),
                ft._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)
                return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return ft.event.remove(this, "._change"),
            !Gt.test(this.nodeName)
        }
    }),
    dt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = ft._data(r, e);
                i || r.addEventListener(t, n, !0),
                ft._data(r, e, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = ft._data(r, e) - 1;
                i ? ft._data(r, e, i) : (r.removeEventListener(t, n, !0),
                ft._removeData(r, e))
            }
        }
    }),
    ft.fn.extend({
        on: function(t, e, n, r) {
            return w(this, t, e, n, r)
        },
        one: function(t, e, n, r) {
            return w(this, t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj)
                return r = t.handleObj,
                ft(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof t) {
                for (i in t)
                    this.off(i, e, t[i]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e,
            e = undefined),
            !1 === n && (n = b),
            this.each(function() {
                ft.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n)
                return ft.event.trigger(t, e, n, !0)
        }
    });
    var ne = / jQuery\d+="(?:null|\d+)"/g
      , re = new RegExp("<(?:" + Xt + ")[\\s/>]","i")
      , ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , oe = /<script|<style|<link/i
      , se = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ae = /^true\/(.*)/
      , ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , le = f(rt).appendChild(rt.createElement("div"));
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(ie, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var r, i, o, s, a, u = ft.contains(t.ownerDocument, t);
            if (dt.html5Clone || ft.isXMLDoc(t) || !re.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (le.innerHTML = t.outerHTML,
            le.removeChild(o = le.firstChild)),
            !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (r = h(o),
                a = h(t),
                s = 0; null != (i = a[s]); ++s)
                    r[s] && E(i, r[s]);
            if (e)
                if (n)
                    for (a = a || h(t),
                    r = r || h(o),
                    s = 0; null != (i = a[s]); s++)
                        C(i, r[s]);
                else
                    C(t, o);
            return (r = h(o, "script")).length > 0 && m(r, !u && h(t, "script")),
            r = a = i = null,
            o
        },
        cleanData: function(t, e) {
            for (var n, r, i, o, s = 0, a = ft.expando, u = ft.cache, l = dt.attributes, c = ft.event.special; null != (n = t[s]); s++)
                if ((e || jt(n)) && (o = (i = n[a]) && u[i])) {
                    if (o.events)
                        for (r in o.events)
                            c[r] ? ft.event.remove(n, r) : ft.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i],
                    l || "undefined" == typeof n.removeAttribute ? n[a] = undefined : n.removeAttribute(a),
                    nt.push(i))
                }
        }
    }),
    ft.fn.extend({
        domManip: A,
        detach: function(t) {
            return L(this, t, !0)
        },
        remove: function(t) {
            return L(this, t)
        },
        text: function(t) {
            return Wt(this, function(t) {
                return t === undefined ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return A(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return A(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return A(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return A(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ft.cleanData(h(t, !1)); t.firstChild; )
                    t.removeChild(t.firstChild);
                t.options && ft.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return ft.clone(this, t, e)
            })
        },
        html: function(t) {
            return Wt(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (t === undefined)
                    return 1 === e.nodeType ? e.innerHTML.replace(ne, "") : undefined;
                if ("string" == typeof t && !oe.test(t) && (dt.htmlSerialize || !re.test(t)) && (dt.leadingWhitespace || !Ut.test(t)) && !Qt[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; n < r; n++)
                            1 === (e = this[n] || {}).nodeType && (ft.cleanData(h(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (i) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return A(this, arguments, function(e) {
                var n = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(h(this)),
                n && n.replaceChild(e, this))
            }, t)
        }
    }),
    ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ft.fn[t] = function(t) {
            for (var n, r = 0, i = [], o = ft(t), s = o.length - 1; r <= s; r++)
                n = r === s ? this : this.clone(!0),
                ft(o[r])[e](n),
                st.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ce, de = {
        HTML: "block",
        BODY: "block"
    }, pe = /^margin/, fe = new RegExp("^(" + Ft + ")(?!px)[a-z%]+$","i"), he = function(t, e, n, r) {
        var i, o, s = {};
        for (o in e)
            s[o] = t.style[o],
            t.style[o] = e[o];
        for (o in i = n.apply(t, r || []),
        e)
            t.style[o] = s[o];
        return i
    }, me = rt.documentElement;
    !function() {
        function e() {
            var e, c, d = rt.documentElement;
            d.appendChild(u),
            l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = i = a = !1,
            r = s = !0,
            t.getComputedStyle && (c = t.getComputedStyle(l),
            n = "1%" !== (c || {}).top,
            a = "2px" === (c || {}).marginLeft,
            i = "4px" === (c || {
                width: "4px"
            }).width,
            l.style.marginRight = "50%",
            r = "4px" === (c || {
                marginRight: "4px"
            }).marginRight,
            (e = l.appendChild(rt.createElement("div"))).style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            e.style.marginRight = e.style.width = "0",
            l.style.width = "1px",
            s = !parseFloat((t.getComputedStyle(e) || {}).marginRight),
            l.removeChild(e)),
            l.style.display = "none",
            (o = 0 === l.getClientRects().length) && (l.style.display = "",
            l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            l.childNodes[0].style.borderCollapse = "separate",
            (e = l.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            (o = 0 === e[0].offsetHeight) && (e[0].style.display = "",
            e[1].style.display = "none",
            o = 0 === e[0].offsetHeight)),
            d.removeChild(u)
        }
        var n, r, i, o, s, a, u = rt.createElement("div"), l = rt.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5",
        dt.opacity = "0.5" === l.style.opacity,
        dt.cssFloat = !!l.style.cssFloat,
        l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        dt.clearCloneStyle = "content-box" === l.style.backgroundClip,
        (u = rt.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        l.innerHTML = "",
        u.appendChild(l),
        dt.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing,
        ft.extend(dt, {
            reliableHiddenOffsets: function() {
                return null == n && e(),
                o
            },
            boxSizingReliable: function() {
                return null == n && e(),
                i
            },
            pixelMarginRight: function() {
                return null == n && e(),
                r
            },
            pixelPosition: function() {
                return null == n && e(),
                n
            },
            reliableMarginRight: function() {
                return null == n && e(),
                s
            },
            reliableMarginLeft: function() {
                return null == n && e(),
                a
            }
        }))
    }();
    var ge, ye, ve = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ge = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(e)
    }
    ,
    ye = function(t, e, n) {
        var r, i, o, s, a = t.style;
        return "" !== (s = (n = n || ge(t)) ? n.getPropertyValue(e) || n[e] : undefined) && s !== undefined || ft.contains(t.ownerDocument, t) || (s = ft.style(t, e)),
        n && !dt.pixelMarginRight() && fe.test(s) && pe.test(e) && (r = a.width,
        i = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = r,
        a.minWidth = i,
        a.maxWidth = o),
        s === undefined ? s : s + ""
    }
    ) : me.currentStyle && (ge = function(t) {
        return t.currentStyle
    }
    ,
    ye = function(t, e, n) {
        var r, i, o, s, a = t.style;
        return null == (s = (n = n || ge(t)) ? n[e] : undefined) && a && a[e] && (s = a[e]),
        fe.test(s) && !ve.test(e) && (r = a.left,
        (o = (i = t.runtimeStyle) && i.left) && (i.left = t.currentStyle.left),
        a.left = "fontSize" === e ? "1em" : s,
        s = a.pixelLeft + "px",
        a.left = r,
        o && (i.left = o)),
        s === undefined ? s : s + "" || "auto"
    }
    );
    var be = /alpha\([^)]*\)/i
      , xe = /opacity\s*=\s*([^)]*)/i
      , we = /^(none|table(?!-c[ea]).+)/
      , Te = new RegExp("^(" + Ft + ")(.*)$","i")
      , ke = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Se = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ce = ["Webkit", "O", "Moz", "ms"]
      , Ee = rt.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ye(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
        cssProps: {
            "float": dt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, s, a = ft.camelCase(e), u = t.style;
                if (e = ft.cssProps[a] || (ft.cssProps[a] = j(a) || a),
                s = ft.cssHooks[e] || ft.cssHooks[a],
                n === undefined)
                    return s && "get"in s && (i = s.get(t, !1, r)) !== undefined ? i : u[e];
                if ("string" === (o = typeof n) && (i = Bt.exec(n)) && i[1] && (n = p(t, e, i),
                o = "number"),
                null != n && n == n && ("number" === o && (n += i && i[3] || (ft.cssNumber[a] ? "" : "px")),
                dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                !(s && "set"in s && (n = s.set(t, n, r)) === undefined)))
                    try {
                        u[e] = n
                    } catch (l) {}
            }
        },
        css: function(t, e, n, r) {
            var i, o, s, a = ft.camelCase(e);
            return e = ft.cssProps[a] || (ft.cssProps[a] = j(a) || a),
            (s = ft.cssHooks[e] || ft.cssHooks[a]) && "get"in s && (o = s.get(t, !0, n)),
            o === undefined && (o = ye(t, e, r)),
            "normal" === o && e in Se && (o = Se[e]),
            "" === n || n ? (i = parseFloat(o),
            !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }),
    ft.each(["height", "width"], function(t, e) {
        ft.cssHooks[e] = {
            get: function(t, n, r) {
                if (n)
                    return we.test(ft.css(t, "display")) && 0 === t.offsetWidth ? he(t, ke, function() {
                        return M(t, e, r)
                    }) : M(t, e, r)
            },
            set: function(t, n, r) {
                var i = r && ge(t);
                return P(t, n, r ? H(t, e, r, dt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    dt.opacity || (ft.cssHooks.opacity = {
        get: function(t, e) {
            return xe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style
              , r = t.currentStyle
              , i = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (e >= 1 || "" === e) && "" === ft.trim(o.replace(be, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === e || r && !r.filter) || (n.filter = be.test(o) ? o.replace(be, i) : o + " " + i)
        }
    }),
    ft.cssHooks.marginRight = R(dt.reliableMarginRight, function(t, e) {
        if (e)
            return he(t, {
                display: "inline-block"
            }, ye, [t, "marginRight"])
    }),
    ft.cssHooks.marginLeft = R(dt.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat(ye(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - he(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            }) : 0)) + "px"
    }),
    ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ft.cssHooks[t + e] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[t + _t[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        pe.test(t) || (ft.cssHooks[t + e].set = P)
    }),
    ft.fn.extend({
        css: function(t, e) {
            return Wt(this, function(t, e, n) {
                var r, i, o = {}, s = 0;
                if (ft.isArray(e)) {
                    for (r = ge(t),
                    i = e.length; s < i; s++)
                        o[e[s]] = ft.css(t, e[s], !1, r);
                    return o
                }
                return n !== undefined ? ft.style(t, e, n) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return q(this, !0)
        },
        hide: function() {
            return q(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ot(this) ? ft(this).show() : ft(this).hide()
            })
        }
    }),
    ft.Tween = I,
    I.prototype = {
        constructor: I,
        init: function(t, e, n, r, i, o) {
            this.elem = t,
            this.prop = n,
            this.easing = i || ft.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ft.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = I.propHooks[this.prop];
            return t && t.get ? t.get(this) : I.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : I.propHooks._default.set(this),
            this
        }
    },
    I.prototype.init.prototype = I.prototype,
    I.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    ft.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    ft.fx = I.prototype.init,
    ft.fx.step = {};
    var Ae, Le, Ne, De, Re, je, qe, Pe = /^(?:toggle|show|hide)$/, He = /queueHooks$/;
    ft.Animation = ft.extend($, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return p(n.elem, t, Bt.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            ft.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.match(Dt);
            for (var n, r = 0, i = t.length; r < i; r++)
                n = t[r],
                $.tweeners[n] = $.tweeners[n] || [],
                $.tweeners[n].unshift(e)
        },
        prefilters: [O],
        prefilter: function(t, e) {
            e ? $.prefilters.unshift(t) : $.prefilters.push(t)
        }
    }),
    ft.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? ft.extend({}, t) : {
            complete: n || !n && e || ft.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ft.isFunction(e) && e
        };
        return r.duration = ft.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ft.fx.speeds ? ft.fx.speeds[r.duration] : ft.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            ft.isFunction(r.old) && r.old.call(this),
            r.queue && ft.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    ft.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(Ot).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function(t, e, n, r) {
            var i = ft.isEmptyObject(t)
              , o = ft.speed(e, n, r)
              , s = function() {
                var e = $(this, ft.extend({}, t), o);
                (i || ft._data(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e,
            e = t,
            t = undefined),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , i = null != t && t + "queueHooks"
                  , o = ft.timers
                  , s = ft._data(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s)
                        s[i] && s[i].stop && He.test(i) && r(s[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n),
                    e = !1,
                    o.splice(i, 1));
                !e && n || ft.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, n = ft._data(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = ft.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                ft.queue(this, t, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; e < s; e++)
                    r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    ft.each(["toggle", "show", "hide"], function(t, e) {
        var n = ft.fn[e];
        ft.fn[e] = function(t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, r, i)
        }
    }),
    ft.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ft.fn[t] = function(t, n, r) {
            return this.animate(e, t, n, r)
        }
    }),
    ft.timers = [],
    ft.fx.tick = function() {
        var t, e = ft.timers, n = 0;
        for (Ae = ft.now(); n < e.length; n++)
            (t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || ft.fx.stop(),
        Ae = undefined
    }
    ,
    ft.fx.timer = function(t) {
        ft.timers.push(t),
        t() ? ft.fx.start() : ft.timers.pop()
    }
    ,
    ft.fx.interval = 13,
    ft.fx.start = function() {
        Le || (Le = t.setInterval(ft.fx.tick, ft.fx.interval))
    }
    ,
    ft.fx.stop = function() {
        t.clearInterval(Le),
        Le = null
    }
    ,
    ft.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ft.fn.delay = function(e, n) {
        return e = ft.fx && ft.fx.speeds[e] || e,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = t.setTimeout(n, e);
            r.stop = function() {
                t.clearTimeout(i)
            }
        })
    }
    ,
    De = rt.createElement("input"),
    Re = rt.createElement("div"),
    je = rt.createElement("select"),
    qe = je.appendChild(rt.createElement("option")),
    (Re = rt.createElement("div")).setAttribute("className", "t"),
    Re.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    Ne = Re.getElementsByTagName("a")[0],
    De.setAttribute("type", "checkbox"),
    Re.appendChild(De),
    (Ne = Re.getElementsByTagName("a")[0]).style.cssText = "top:1px",
    dt.getSetAttribute = "t" !== Re.className,
    dt.style = /top/.test(Ne.getAttribute("style")),
    dt.hrefNormalized = "/a" === Ne.getAttribute("href"),
    dt.checkOn = !!De.value,
    dt.optSelected = qe.selected,
    dt.enctype = !!rt.createElement("form").enctype,
    je.disabled = !0,
    dt.optDisabled = !qe.disabled,
    (De = rt.createElement("input")).setAttribute("value", ""),
    dt.input = "" === De.getAttribute("value"),
    De.value = "t",
    De.setAttribute("type", "radio"),
    dt.radioValue = "t" === De.value;
    var Me = /\r/g
      , Ie = /[\x20\t\r\n\f]+/g;
    ft.fn.extend({
        val: function(t) {
            var e, n, r, i = this[0];
            return arguments.length ? (r = ft.isFunction(t),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? t.call(this, n, ft(this).val()) : t) ? i = "" : "number" == typeof i ? i += "" : ft.isArray(i) && (i = ft.map(i, function(t) {
                    return null == t ? "" : t + ""
                })),
                (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set"in e && e.set(this, i, "value") !== undefined || (this.value = i))
            })) : i ? (e = ft.valHooks[i.type] || ft.valHooks[i.nodeName.toLowerCase()]) && "get"in e && (n = e.get(i, "value")) !== undefined ? n : "string" == typeof (n = i.value) ? n.replace(Me, "") : null == n ? "" : n : void 0
        }
    }),
    ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : ft.trim(ft.text(t)).replace(Ie, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (((n = r[u]).selected || u === i) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(),
                            o)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, r, i = t.options, o = ft.makeArray(e), s = i.length; s--; )
                        if (r = i[s],
                        ft.inArray(ft.valHooks.option.get(r), o) > -1)
                            try {
                                r.selected = n = !0
                            } catch (a) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (t.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    ft.each(["radio", "checkbox"], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                if (ft.isArray(e))
                    return t.checked = ft.inArray(ft(t).val(), e) > -1
            }
        },
        dt.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var Fe, Be, _e = ft.expr.attrHandle, Oe = /^(?:checked|selected)$/i, We = dt.getSetAttribute, $e = dt.input;
    ft.fn.extend({
        attr: function(t, e) {
            return Wt(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t)
            })
        }
    }),
    ft.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === o && ft.isXMLDoc(t) || (e = e.toLowerCase(),
                i = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? Be : Fe)),
                n !== undefined ? null === n ? void ft.removeAttr(t, e) : i && "set"in i && (r = i.set(t, n, e)) !== undefined ? r : (t.setAttribute(e, n + ""),
                n) : i && "get"in i && null !== (r = i.get(t, e)) ? r : null == (r = ft.find.attr(t, e)) ? undefined : r)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, r, i = 0, o = e && e.match(Dt);
            if (o && 1 === t.nodeType)
                for (; n = o[i++]; )
                    r = ft.propFix[n] || n,
                    ft.expr.match.bool.test(n) ? $e && We || !Oe.test(n) ? t[r] = !1 : t[ft.camelCase("default-" + n)] = t[r] = !1 : ft.attr(t, n, ""),
                    t.removeAttribute(We ? n : r)
        }
    }),
    Be = {
        set: function(t, e, n) {
            return !1 === e ? ft.removeAttr(t, n) : $e && We || !Oe.test(n) ? t.setAttribute(!We && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = _e[e] || ft.find.attr;
        $e && We || !Oe.test(e) ? _e[e] = function(t, e, r) {
            var i, o;
            return r || (o = _e[e],
            _e[e] = i,
            i = null != n(t, e, r) ? e.toLowerCase() : null,
            _e[e] = o),
            i
        }
        : _e[e] = function(t, e, n) {
            if (!n)
                return t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    $e && We || (ft.attrHooks.value = {
        set: function(t, e, n) {
            if (!ft.nodeName(t, "input"))
                return Fe && Fe.set(t, e, n);
            t.defaultValue = e
        }
    }),
    We || (Fe = {
        set: function(t, e, n) {
            var r = t.getAttributeNode(n);
            if (r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)),
            r.value = e += "",
            "value" === n || e === t.getAttribute(n))
                return e
        }
    },
    _e.id = _e.name = _e.coords = function(t, e, n) {
        var r;
        if (!n)
            return (r = t.getAttributeNode(e)) && "" !== r.value ? r.value : null
    }
    ,
    ft.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified)
                return n.value
        },
        set: Fe.set
    },
    ft.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Fe.set(t, "" !== e && e, n)
        }
    },
    ft.each(["width", "height"], function(t, e) {
        ft.attrHooks[e] = {
            set: function(t, n) {
                if ("" === n)
                    return t.setAttribute(e, "auto"),
                    n
            }
        }
    })),
    dt.style || (ft.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || undefined
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var ze = /^(?:input|select|textarea|button|object)$/i
      , Ve = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return Wt(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ft.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = undefined,
                    delete this[t]
                } catch (e) {}
            })
        }
    }),
    ft.extend({
        prop: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ft.isXMLDoc(t) || (e = ft.propFix[e] || e,
                i = ft.propHooks[e]),
                n !== undefined ? i && "set"in i && (r = i.set(t, n, e)) !== undefined ? r : t[e] = n : i && "get"in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ze.test(t.nodeName) || Ve.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    dt.hrefNormalized || ft.each(["href", "src"], function(t, e) {
        ft.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    dt.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex),
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ft.propFix[this.toLowerCase()] = this
    }),
    dt.enctype || (ft.propFix.enctype = "encoding");
    var Ue = /[\t\r\n\f]/g;
    ft.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (ft.isFunction(t))
                return this.each(function(e) {
                    ft(this).addClass(t.call(this, e, z(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(Dt) || []; n = this[u++]; )
                    if (i = z(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(Ue, " ")) {
                        for (s = 0; o = e[s++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = ft.trim(r)) && ft.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (ft.isFunction(t))
                return this.each(function(e) {
                    ft(this).removeClass(t.call(this, e, z(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Dt) || []; n = this[u++]; )
                    if (i = z(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(Ue, " ")) {
                        for (s = 0; o = e[s++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        i !== (a = ft.trim(r)) && ft.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                ft(this).toggleClass(t.call(this, n, z(this), e), e)
            }) : this.each(function() {
                var e, r, i, o;
                if ("string" === n)
                    for (r = 0,
                    i = ft(this),
                    o = t.match(Dt) || []; e = o[r++]; )
                        i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else
                    t !== undefined && "boolean" !== n || ((e = z(this)) && ft._data(this, "__className__", e),
                    ft.attr(this, "class", e || !1 === t ? "" : ft._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + z(n) + " ").replace(Ue, " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    }),
    ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ft.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Xe = t.location
      , Qe = ft.now()
      , Ke = /\?/
      , Je = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ft.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n, r = null, i = ft.trim(e + "");
        return i && !ft.trim(i.replace(Je, function(t, e, i, o) {
            return n && e && (r = 0),
            0 === r ? t : (n = i || e,
            r += !o - !i,
            "")
        })) ? Function("return " + i)() : ft.error("Invalid JSON: " + e)
    }
    ,
    ft.parseXML = function(e) {
        var n, r;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (r = new t.DOMParser,
            n = r.parseFromString(e, "text/xml")) : ((n = new t.ActiveXObject("Microsoft.XMLDOM")).async = "false",
            n.loadXML(e))
        } catch (i) {
            n = undefined
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e),
        n
    }
    ;
    var Ge = /#.*$/
      , Ye = /([?&])_=[^&]*/
      , Ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , tn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , en = /^(?:GET|HEAD)$/
      , nn = /^\/\//
      , rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , on = {}
      , sn = {}
      , an = "*/".concat("*")
      , un = Xe.href
      , ln = rn.exec(un.toLowerCase()) || [];
    ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: un,
            type: "GET",
            isLocal: tn.test(ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": an,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ft.parseJSON,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? X(X(t, ft.ajaxSettings), e) : X(ft.ajaxSettings, t)
        },
        ajaxPrefilter: V(on),
        ajaxTransport: V(sn),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, d, v, b, w, k = n;
                2 !== x && (x = 2,
                u && t.clearTimeout(u),
                c = undefined,
                a = i || "",
                T.readyState = e > 0 ? 4 : 0,
                o = e >= 200 && e < 300 || 304 === e,
                r && (b = Q(p, T, r)),
                b = K(p, b, T, o),
                o ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (ft.lastModified[s] = w),
                (w = T.getResponseHeader("etag")) && (ft.etag[s] = w)),
                204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state,
                d = b.data,
                o = !(v = b.error))) : (v = k,
                !e && k || (k = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (n || k) + "",
                o ? m.resolveWith(f, [d, k, T]) : m.rejectWith(f, [T, k, v]),
                T.statusCode(y),
                y = undefined,
                l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, p, o ? d : v]),
                g.fireWith(f, [T, k]),
                l && (h.trigger("ajaxComplete", [T, p]),
                --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e,
            e = undefined),
            n = n || {};
            var i, o, s, a, u, l, c, d, p = ft.ajaxSetup({}, n), f = p.context || p, h = p.context && (f.nodeType || f.jquery) ? ft(f) : ft.event, m = ft.Deferred(), g = ft.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === x) {
                        if (!d)
                            for (d = {}; e = Ze.exec(a); )
                                d[e[1].toLowerCase()] = e[2];
                        e = d[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return x || (t = b[n] = b[n] || t,
                    v[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return x || (p.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (x < 2)
                            for (e in t)
                                y[e] = [y[e], t[e]];
                        else
                            T.always(t[T.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return c && c.abort(e),
                    r(0, e),
                    this
                }
            };
            if (m.promise(T).complete = g.add,
            T.success = T.done,
            T.error = T.fail,
            p.url = ((e || p.url || un) + "").replace(Ge, "").replace(nn, ln[1] + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = ft.trim(p.dataType || "*").toLowerCase().match(Dt) || [""],
            null == p.crossDomain && (i = rn.exec(p.url.toLowerCase()),
            p.crossDomain = !(!i || i[1] === ln[1] && i[2] === ln[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (ln[3] || ("http:" === ln[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = ft.param(p.data, p.traditional)),
            U(on, p, n, T),
            2 === x)
                return T;
            for (o in (l = ft.event && p.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !en.test(p.type),
            s = p.url,
            p.hasContent || (p.data && (s = p.url += (Ke.test(s) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (p.url = Ye.test(s) ? s.replace(Ye, "$1_=" + Qe++) : s + (Ke.test(s) ? "&" : "?") + "_=" + Qe++)),
            p.ifModified && (ft.lastModified[s] && T.setRequestHeader("If-Modified-Since", ft.lastModified[s]),
            ft.etag[s] && T.setRequestHeader("If-None-Match", ft.etag[s])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType),
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + an + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                T.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, T, p) || 2 === x))
                return T.abort();
            for (o in w = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                T[o](p[o]);
            if (c = U(sn, p, n, T)) {
                if (T.readyState = 1,
                l && h.trigger("ajaxSend", [T, p]),
                2 === x)
                    return T;
                p.async && p.timeout > 0 && (u = t.setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    x = 1,
                    c.send(v, r)
                } catch (k) {
                    if (!(x < 2))
                        throw k;
                    r(-1, k)
                }
            } else
                r(-1, "No Transport");
            return T
        },
        getJSON: function(t, e, n) {
            return ft.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ft.get(t, undefined, e, "script")
        }
    }),
    ft.each(["get", "post"], function(t, e) {
        ft[e] = function(t, n, r, i) {
            return ft.isFunction(n) && (i = i || r,
            r = n,
            n = undefined),
            ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            }, ft.isPlainObject(t) && t))
        }
    }),
    ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    ft.fn.extend({
        wrapAll: function(t) {
            if (ft.isFunction(t))
                return this.each(function(e) {
                    ft(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = ft(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return ft.isFunction(t) ? this.each(function(e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ft(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ft.isFunction(t);
            return this.each(function(n) {
                ft(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ft.expr.filters.hidden = function(t) {
        return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : G(t)
    }
    ,
    ft.expr.filters.visible = function(t) {
        return !ft.expr.filters.hidden(t)
    }
    ;
    var cn = /%20/g
      , dn = /\[\]$/
      , pn = /\r?\n/g
      , fn = /^(?:submit|button|image|reset|file)$/i
      , hn = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var n, r = [], i = function(t, e) {
            e = ft.isFunction(e) ? e() : null == e ? "" : e,
            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (e === undefined && (e = ft.ajaxSettings && ft.ajaxSettings.traditional),
        ft.isArray(t) || t.jquery && !ft.isPlainObject(t))
            ft.each(t, function() {
                i(this.name, this.value)
            });
        else
            for (n in t)
                Y(n, t[n], e, i);
        return r.join("&").replace(cn, "+")
    }
    ,
    ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && hn.test(this.nodeName) && !fn.test(t) && (this.checked || !$t.test(t))
            }).map(function(t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(pn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(pn, "\r\n")
                }
            }).get()
        }
    }),
    ft.ajaxSettings.xhr = t.ActiveXObject !== undefined ? function() {
        return this.isLocal ? tt() : rt.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    }
    : Z;
    var mn = 0
      , gn = {}
      , yn = ft.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in gn)
            gn[t](undefined, !0)
    }),
    dt.cors = !!yn && "withCredentials"in yn,
    (yn = dt.ajax = !!yn) && ft.ajaxTransport(function(e) {
        var n;
        if (!e.crossDomain || dt.cors)
            return {
                send: function(r, i) {
                    var o, s = e.xhr(), a = ++mn;
                    if (s.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (o in e.xhrFields)
                            s[o] = e.xhrFields[o];
                    for (o in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                    e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                    r)
                        r[o] !== undefined && s.setRequestHeader(o, r[o] + "");
                    s.send(e.hasContent && e.data || null),
                    n = function(t, r) {
                        var o, u, l;
                        if (n && (r || 4 === s.readyState))
                            if (delete gn[a],
                            n = undefined,
                            s.onreadystatechange = ft.noop,
                            r)
                                4 !== s.readyState && s.abort();
                            else {
                                l = {},
                                o = s.status,
                                "string" == typeof s.responseText && (l.text = s.responseText);
                                try {
                                    u = s.statusText
                                } catch (c) {
                                    u = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                            }
                        l && i(o, u, l, s.getAllResponseHeaders())
                    }
                    ,
                    e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = gn[a] = n : n()
                },
                abort: function() {
                    n && n(undefined, !0)
                }
            }
    }),
    ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t),
                t
            }
        }
    }),
    ft.ajaxPrefilter("script", function(t) {
        t.cache === undefined && (t.cache = !1),
        t.crossDomain && (t.type = "GET",
        t.global = !1)
    }),
    ft.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = rt.head || ft("head")[0] || rt.documentElement;
            return {
                send: function(r, i) {
                    (e = rt.createElement("script")).async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null,
                        e.parentNode && e.parentNode.removeChild(e),
                        e = null,
                        n || i(200, "success"))
                    }
                    ,
                    n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(undefined, !0)
                }
            }
        }
    });
    var vn = []
      , bn = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = vn.pop() || ft.expando + "_" + Qe++;
            return this[t] = !0,
            t
        }
    }),
    ft.ajaxPrefilter("json jsonp", function(e, n, r) {
        var i, o, s, a = !1 !== e.jsonp && (bn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(bn, "$1" + i) : !1 !== e.jsonp && (e.url += (Ke.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return s || ft.error(i + " was not called"),
                s[0]
            }
            ,
            e.dataTypes[0] = "json",
            o = t[i],
            t[i] = function() {
                s = arguments
            }
            ,
            r.always(function() {
                o === undefined ? ft(t).removeProp(i) : t[i] = o,
                e[i] && (e.jsonpCallback = n.jsonpCallback,
                vn.push(i)),
                s && ft.isFunction(o) && o(s[0]),
                s = o = undefined
            }),
            "script"
    }),
    ft.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e,
        e = !1),
        e = e || rt;
        var r = Tt.exec(t)
          , i = !n && [];
        return r ? [e.createElement(r[1])] : (r = y([t], e, i),
        i && i.length && ft(i).remove(),
        ft.merge([], r.childNodes))
    }
    ;
    var xn = ft.fn.load;
    ft.fn.load = function(t, e, n) {
        if ("string" != typeof t && xn)
            return xn.apply(this, arguments);
        var r, i, o, s = this, a = t.indexOf(" ");
        return a > -1 && (r = ft.trim(t.slice(a, t.length)),
        t = t.slice(0, a)),
        ft.isFunction(e) ? (n = e,
        e = undefined) : e && "object" == typeof e && (i = "POST"),
        s.length > 0 && ft.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            s.html(r ? ft("<div>").append(ft.parseHTML(t)).find(r) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ft.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    ft.expr.filters.animated = function(t) {
        return ft.grep(ft.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    ft.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, s, a, u, l = ft.css(t, "position"), c = ft(t), d = {};
            "static" === l && (t.style.position = "relative"),
            a = c.offset(),
            o = ft.css(t, "top"),
            u = ft.css(t, "left"),
            ("absolute" === l || "fixed" === l) && ft.inArray("auto", [o, u]) > -1 ? (s = (r = c.position()).top,
            i = r.left) : (s = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))),
            null != e.top && (d.top = e.top - a.top + s),
            null != e.left && (d.left = e.left - a.left + i),
            "using"in e ? e.using.call(t, d) : c.css(d)
        }
    },
    ft.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return t === undefined ? this : this.each(function(e) {
                    ft.offset.setOffset(this, t, e)
                });
            var e, n, r = {
                top: 0,
                left: 0
            }, i = this[0], o = i && i.ownerDocument;
            return o ? (e = o.documentElement,
            ft.contains(e, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()),
            n = et(o),
            {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === ft.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                ft.nodeName(t[0], "html") || (n = t.offset()),
                n.top += ft.css(t[0], "borderTopWidth", !0),
                n.left += ft.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - n.top - ft.css(r, "marginTop", !0),
                    left: e.left - n.left - ft.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position"); )
                    t = t.offsetParent;
                return t || me
            })
        }
    }),
    ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        ft.fn[t] = function(r) {
            return Wt(this, function(t, r, i) {
                var o = et(t);
                if (i === undefined)
                    return o ? e in o ? o[e] : o.document.documentElement[r] : t[r];
                o ? o.scrollTo(n ? ft(o).scrollLeft() : i, n ? i : ft(o).scrollTop()) : t[r] = i
            }, t, r, arguments.length, null)
        }
    }),
    ft.each(["top", "left"], function(t, e) {
        ft.cssHooks[e] = R(dt.pixelPosition, function(t, n) {
            if (n)
                return n = ye(t, e),
                fe.test(n) ? ft(t).position()[e] + "px" : n
        })
    }),
    ft.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, r) {
            ft.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , s = n || (!0 === r || !0 === i ? "margin" : "border");
                return Wt(this, function(e, n, r) {
                    var i;
                    return ft.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : r === undefined ? ft.css(e, n, s) : ft.style(e, n, r, s)
                }, e, o ? r : undefined, o, null)
            }
        })
    }),
    ft.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    ft.fn.size = function() {
        return this.length
    }
    ,
    ft.fn.andSelf = ft.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ft
    });
    var wn = t.jQuery
      , Tn = t.$;
    return ft.noConflict = function(e) {
        return t.$ === ft && (t.$ = Tn),
        e && t.jQuery === ft && (t.jQuery = wn),
        ft
    }
    ,
    e || (t.jQuery = t.$ = ft),
    ft
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    return t.ui = t.ui || {},
    t.ui.version = "1.12.1"
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
}(function(t) {
    var e, n = "ui-effects-", r = "ui-effects-style", i = "ui-effects-animated", o = t;
    return t.effects = {
        effect: {}
    },
    function(t, e) {
        function n(t, e, n) {
            var r = d[e.type] || {};
            return null == t ? n || !e.def ? null : e.def : (t = r.floor ? ~~t : parseFloat(t),
            isNaN(t) ? e.def : r.mod ? (t + r.mod) % r.mod : 0 > t ? 0 : r.max < t ? r.max : t)
        }
        function r(e) {
            var n = l()
              , r = n._rgba = [];
            return e = e.toLowerCase(),
            h(u, function(t, i) {
                var o, s = i.re.exec(e), a = s && i.parse(s), u = i.space || "rgba";
                if (a)
                    return o = n[u](a),
                    n[c[u].cache] = o[c[u].cache],
                    r = n._rgba = o._rgba,
                    !1
            }),
            r.length ? ("0,0,0,0" === r.join() && t.extend(r, o.transparent),
            n) : o[e]
        }
        function i(t, e, n) {
            return 6 * (n = (n + 1) % 1) < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
        }
        var o, s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", a = /^([\-+])=\s*(\d+\.?\d*)/, u = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }], l = t.Color = function(e, n, r, i) {
            return new t.Color.fn.parse(e,n,r,i)
        }
        , c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, d = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, p = l.support = {}, f = t("<p>")[0], h = t.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)",
        p.rgba = f.style.backgroundColor.indexOf("rgba") > -1,
        h(c, function(t, e) {
            e.cache = "_" + t,
            e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        l.fn = t.extend(l.prototype, {
            parse: function(i, s, a, u) {
                if (i === e)
                    return this._rgba = [null, null, null, null],
                    this;
                (i.jquery || i.nodeType) && (i = t(i).css(s),
                s = e);
                var d = this
                  , p = t.type(i)
                  , f = this._rgba = [];
                return s !== e && (i = [i, s, a, u],
                p = "array"),
                "string" === p ? this.parse(r(i) || o._default) : "array" === p ? (h(c.rgba.props, function(t, e) {
                    f[e.idx] = n(i[e.idx], e)
                }),
                this) : "object" === p ? (h(c, i instanceof l ? function(t, e) {
                    i[e.cache] && (d[e.cache] = i[e.cache].slice())
                }
                : function(e, r) {
                    var o = r.cache;
                    h(r.props, function(t, e) {
                        if (!d[o] && r.to) {
                            if ("alpha" === t || null == i[t])
                                return;
                            d[o] = r.to(d._rgba)
                        }
                        d[o][e.idx] = n(i[t], e, !0)
                    }),
                    d[o] && t.inArray(null, d[o].slice(0, 3)) < 0 && (d[o][3] = 1,
                    r.from && (d._rgba = r.from(d[o])))
                }
                ),
                this) : void 0
            },
            is: function(t) {
                var e = l(t)
                  , n = !0
                  , r = this;
                return h(c, function(t, i) {
                    var o, s = e[i.cache];
                    return s && (o = r[i.cache] || i.to && i.to(r._rgba) || [],
                    h(i.props, function(t, e) {
                        if (null != s[e.idx])
                            return n = s[e.idx] === o[e.idx]
                    })),
                    n
                }),
                n
            },
            _space: function() {
                var t = []
                  , e = this;
                return h(c, function(n, r) {
                    e[r.cache] && t.push(n)
                }),
                t.pop()
            },
            transition: function(t, e) {
                var r = l(t)
                  , i = r._space()
                  , o = c[i]
                  , s = 0 === this.alpha() ? l("transparent") : this
                  , a = s[o.cache] || o.to(s._rgba)
                  , u = a.slice();
                return r = r[o.cache],
                h(o.props, function(t, i) {
                    var o = i.idx
                      , s = a[o]
                      , l = r[o]
                      , c = d[i.type] || {};
                    null !== l && (null === s ? u[o] = l : (c.mod && (l - s > c.mod / 2 ? s += c.mod : s - l > c.mod / 2 && (s -= c.mod)),
                    u[o] = n((l - s) * e + s, i)))
                }),
                this[i](u)
            },
            blend: function(e) {
                if (1 === this._rgba[3])
                    return this;
                var n = this._rgba.slice()
                  , r = n.pop()
                  , i = l(e)._rgba;
                return l(t.map(n, function(t, e) {
                    return (1 - r) * i[e] + r * t
                }))
            },
            toRgbaString: function() {
                var e = "rgba("
                  , n = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === n[3] && (n.pop(),
                e = "rgb("),
                e + n.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla("
                  , n = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0),
                    e && e < 3 && (t = Math.round(100 * t) + "%"),
                    t
                });
                return 1 === n[3] && (n.pop(),
                e = "hsl("),
                e + n.join() + ")"
            },
            toHexString: function(e) {
                var n = this._rgba.slice()
                  , r = n.pop();
                return e && n.push(~~(255 * r)),
                "#" + t.map(n, function(t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }),
        l.fn.parse.prototype = l.fn,
        c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e, n, r = t[0] / 255, i = t[1] / 255, o = t[2] / 255, s = t[3], a = Math.max(r, i, o), u = Math.min(r, i, o), l = a - u, c = a + u, d = .5 * c;
            return e = u === a ? 0 : r === a ? 60 * (i - o) / l + 360 : i === a ? 60 * (o - r) / l + 120 : 60 * (r - i) / l + 240,
            n = 0 === l ? 0 : d <= .5 ? l / c : l / (2 - c),
            [Math.round(e) % 360, n, d, null == s ? 1 : s]
        }
        ,
        c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e = t[0] / 360
              , n = t[1]
              , r = t[2]
              , o = t[3]
              , s = r <= .5 ? r * (1 + n) : r + n - r * n
              , a = 2 * r - s;
            return [Math.round(255 * i(a, s, e + 1 / 3)), Math.round(255 * i(a, s, e)), Math.round(255 * i(a, s, e - 1 / 3)), o]
        }
        ,
        h(c, function(r, i) {
            var o = i.props
              , s = i.cache
              , u = i.to
              , c = i.from;
            l.fn[r] = function(r) {
                if (u && !this[s] && (this[s] = u(this._rgba)),
                r === e)
                    return this[s].slice();
                var i, a = t.type(r), d = "array" === a || "object" === a ? r : arguments, p = this[s].slice();
                return h(o, function(t, e) {
                    var r = d["object" === a ? t : e.idx];
                    null == r && (r = p[e.idx]),
                    p[e.idx] = n(r, e)
                }),
                c ? ((i = l(c(p)))[s] = p,
                i) : l(p)
            }
            ,
            h(o, function(e, n) {
                l.fn[e] || (l.fn[e] = function(i) {
                    var o, s = t.type(i), u = "alpha" === e ? this._hsla ? "hsla" : "rgba" : r, l = this[u](), c = l[n.idx];
                    return "undefined" === s ? c : ("function" === s && (i = i.call(this, c),
                    s = t.type(i)),
                    null == i && n.empty ? this : ("string" === s && (o = a.exec(i)) && (i = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)),
                    l[n.idx] = i,
                    this[u](l)))
                }
                )
            })
        }),
        l.hook = function(e) {
            var n = e.split(" ");
            h(n, function(e, n) {
                t.cssHooks[n] = {
                    set: function(e, i) {
                        var o, s, a = "";
                        if ("transparent" !== i && ("string" !== t.type(i) || (o = r(i)))) {
                            if (i = l(o || i),
                            !p.rgba && 1 !== i._rgba[3]) {
                                for (s = "backgroundColor" === n ? e.parentNode : e; ("" === a || "transparent" === a) && s && s.style; )
                                    try {
                                        a = t.css(s, "backgroundColor"),
                                        s = s.parentNode
                                    } catch (u) {}
                                i = i.blend(a && "transparent" !== a ? a : "_default")
                            }
                            i = i.toRgbaString()
                        }
                        try {
                            e.style[n] = i
                        } catch (u) {}
                    }
                },
                t.fx.step[n] = function(e) {
                    e.colorInit || (e.start = l(e.elem, n),
                    e.end = l(e.end),
                    e.colorInit = !0),
                    t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }
        ,
        l.hook(s),
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return h(["Top", "Right", "Bottom", "Left"], function(n, r) {
                    e["border" + r + "Color"] = t
                }),
                e
            }
        },
        o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(o),
    function() {
        function e(e) {
            var n, r, i = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (i && i.length && i[0] && i[i[0]])
                for (r = i.length; r--; )
                    "string" == typeof i[n = i[r]] && (o[t.camelCase(n)] = i[n]);
            else
                for (n in i)
                    "string" == typeof i[n] && (o[n] = i[n]);
            return o
        }
        function n(e, n) {
            var r, i, o = {};
            for (r in n)
                i = n[r],
                e[r] !== i && (u[r] || !t.fx.step[r] && isNaN(parseFloat(i)) || (o[r] = i));
            return o
        }
        var r, i, s, a = ["add", "remove", "toggle"], u = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, n) {
            t.fx.step[n] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (o.style(t.elem, n, t.end),
                t.setAttr = !0)
            }
        }),
        t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
        ),
        t.effects.animateClass = function(r, i, o, s) {
            var u = t.speed(i, o, s);
            return this.queue(function() {
                var i, o = t(this), s = o.attr("class") || "", l = u.children ? o.find("*").addBack() : o;
                l = l.map(function() {
                    return {
                        el: t(this),
                        start: e(this)
                    }
                }),
                (i = function() {
                    t.each(a, function(t, e) {
                        r[e] && o[e + "Class"](r[e])
                    })
                }
                )(),
                l = l.map(function() {
                    return this.end = e(this.el[0]),
                    this.diff = n(this.start, this.end),
                    this
                }),
                o.attr("class", s),
                l = l.map(function() {
                    var e = this
                      , n = t.Deferred()
                      , r = t.extend({}, u, {
                        queue: !1,
                        complete: function() {
                            n.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, r),
                    n.promise()
                }),
                t.when.apply(t, l.get()).done(function() {
                    i(),
                    t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "")
                        })
                    }),
                    u.complete.call(o[0])
                })
            })
        }
        ,
        t.fn.extend({
            addClass: (s = t.fn.addClass,
            function(e, n, r, i) {
                return n ? t.effects.animateClass.call(this, {
                    add: e
                }, n, r, i) : s.apply(this, arguments)
            }
            ),
            removeClass: (i = t.fn.removeClass,
            function(e, n, r, o) {
                return arguments.length > 1 ? t.effects.animateClass.call(this, {
                    remove: e
                }, n, r, o) : i.apply(this, arguments)
            }
            ),
            toggleClass: (r = t.fn.toggleClass,
            function(e, n, i, o, s) {
                return "boolean" == typeof n || n === undefined ? i ? t.effects.animateClass.call(this, n ? {
                    add: e
                } : {
                    remove: e
                }, i, o, s) : r.apply(this, arguments) : t.effects.animateClass.call(this, {
                    toggle: e
                }, n, i, o)
            }
            ),
            switchClass: function(e, n, r, i, o) {
                return t.effects.animateClass.call(this, {
                    add: n,
                    remove: e
                }, r, i, o)
            }
        })
    }(),
    function() {
        function e(e, n, r, i) {
            return t.isPlainObject(e) && (n = e,
            e = e.effect),
            e = {
                effect: e
            },
            null == n && (n = {}),
            t.isFunction(n) && (i = n,
            r = null,
            n = {}),
            ("number" == typeof n || t.fx.speeds[n]) && (i = r,
            r = n,
            n = {}),
            t.isFunction(r) && (i = r,
            r = null),
            n && t.extend(e, n),
            r = r || n.duration,
            e.duration = t.fx.off ? 0 : "number" == typeof r ? r : r in t.fx.speeds ? t.fx.speeds[r] : t.fx.speeds._default,
            e.complete = i || n.complete,
            e
        }
        function o(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
        }
        function s(t, e) {
            var n = e.outerWidth()
              , r = e.outerHeight()
              , i = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, n, r, 0];
            return {
                top: parseFloat(i[1]) || 0,
                right: "auto" === i[2] ? n : parseFloat(i[2]),
                bottom: "auto" === i[3] ? r : parseFloat(i[3]),
                left: parseFloat(i[4]) || 0
            }
        }
        var a, u, l, c;
        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = (a = t.expr.filters.animated,
        function(e) {
            return !!t(e).data(i) || a(e)
        }
        )),
        !1 !== t.uiBackCompat && t.extend(t.effects, {
            save: function(t, e) {
                for (var r = 0, i = e.length; r < i; r++)
                    null !== e[r] && t.data(n + e[r], t[0].style[e[r]])
            },
            restore: function(t, e) {
                for (var r, i = 0, o = e.length; i < o; i++)
                    null !== e[i] && (r = t.data(n + e[i]),
                    t.css(e[i], r))
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
                e
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper"))
                    return e.parent();
                var n = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    "float": e.css("float")
                }
                  , r = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , i = {
                    width: e.width(),
                    height: e.height()
                }
                  , o = document.activeElement;
                try {
                    o.id
                } catch (s) {
                    o = document.body
                }
                return e.wrap(r),
                (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"),
                r = e.parent(),
                "static" === e.css("position") ? (r.css({
                    position: "relative"
                }),
                e.css({
                    position: "relative"
                })) : (t.extend(n, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }),
                t.each(["top", "left", "bottom", "right"], function(t, r) {
                    n[r] = e.css(r),
                    isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                }),
                e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                e.css(i),
                r.css(n).show()
            },
            removeWrapper: function(e) {
                var n = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e),
                (e[0] === n || t.contains(e[0], n)) && t(n).trigger("focus")),
                e
            }
        }),
        t.extend(t.effects, {
            version: "1.12.1",
            define: function(e, n, r) {
                return r || (r = n,
                n = "effect"),
                t.effects.effect[e] = r,
                t.effects.effect[e].mode = n,
                r
            },
            scaledDimensions: function(t, e, n) {
                if (0 === e)
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                var r = "horizontal" !== n ? (e || 100) / 100 : 1
                  , i = "vertical" !== n ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * i,
                    width: t.width() * r,
                    outerHeight: t.outerHeight() * i,
                    outerWidth: t.outerWidth() * r
                }
            },
            clipToBox: function(t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                }
            },
            unshift: function(t, e, n) {
                var r = t.queue();
                e > 1 && r.splice.apply(r, [1, 0].concat(r.splice(e, n))),
                t.dequeue()
            },
            saveStyle: function(t) {
                t.data(r, t[0].style.cssText)
            },
            restoreStyle: function(t) {
                t[0].style.cssText = t.data(r) || "",
                t.removeData(r)
            },
            mode: function(t, e) {
                var n = t.is(":hidden");
                return "toggle" === e && (e = n ? "show" : "hide"),
                (n ? "hide" === e : "show" === e) && (e = "none"),
                e
            },
            getBaseline: function(t, e) {
                var n, r;
                switch (t[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = t[0] / e.height
                }
                switch (t[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = t[1] / e.width
                }
                return {
                    x: r,
                    y: n
                }
            },
            createPlaceholder: function(e) {
                var r, i = e.css("position"), o = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),
                /^(static|relative)/.test(i) && (i = "absolute",
                r = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    "float": e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),
                e.data(n + "placeholder", r)),
                e.css({
                    position: i,
                    left: o.left,
                    top: o.top
                }),
                r
            },
            removePlaceholder: function(t) {
                var e = n + "placeholder"
                  , r = t.data(e);
                r && (r.remove(),
                t.removeData(e))
            },
            cleanUp: function(e) {
                t.effects.restoreStyle(e),
                t.effects.removePlaceholder(e)
            },
            setTransition: function(e, n, r, i) {
                return i = i || {},
                t.each(n, function(t, n) {
                    var o = e.cssUnit(n);
                    o[0] > 0 && (i[n] = o[0] * r + o[1])
                }),
                i
            }
        }),
        t.fn.extend({
            effect: function() {
                function n(e) {
                    function n() {
                        u.removeData(i),
                        t.effects.cleanUp(u),
                        "hide" === r.mode && u.hide(),
                        a()
                    }
                    function a() {
                        t.isFunction(l) && l.call(u[0]),
                        t.isFunction(e) && e()
                    }
                    var u = t(this);
                    r.mode = d.shift(),
                    !1 === t.uiBackCompat || s ? "none" === r.mode ? (u[c](),
                    a()) : o.call(u[0], r, n) : (u.is(":hidden") ? "hide" === c : "show" === c) ? (u[c](),
                    a()) : o.call(u[0], r, a)
                }
                var r = e.apply(this, arguments)
                  , o = t.effects.effect[r.effect]
                  , s = o.mode
                  , a = r.queue
                  , u = a || "fx"
                  , l = r.complete
                  , c = r.mode
                  , d = []
                  , p = function(e) {
                    var n = t(this)
                      , r = t.effects.mode(n, c) || s;
                    n.data(i, !0),
                    d.push(r),
                    s && ("show" === r || r === s && "hide" === r) && n.show(),
                    s && "none" === r || t.effects.saveStyle(n),
                    t.isFunction(e) && e()
                };
                return t.fx.off || !o ? c ? this[c](r.duration, l) : this.each(function() {
                    l && l.call(this)
                }) : !1 === a ? this.each(p).each(n) : this.queue(u, p).queue(u, n)
            },
            show: (c = t.fn.show,
            function(t) {
                if (o(t))
                    return c.apply(this, arguments);
                var n = e.apply(this, arguments);
                return n.mode = "show",
                this.effect.call(this, n)
            }
            ),
            hide: (l = t.fn.hide,
            function(t) {
                if (o(t))
                    return l.apply(this, arguments);
                var n = e.apply(this, arguments);
                return n.mode = "hide",
                this.effect.call(this, n)
            }
            ),
            toggle: (u = t.fn.toggle,
            function(t) {
                if (o(t) || "boolean" == typeof t)
                    return u.apply(this, arguments);
                var n = e.apply(this, arguments);
                return n.mode = "toggle",
                this.effect.call(this, n)
            }
            ),
            cssUnit: function(e) {
                var n = this.css(e)
                  , r = [];
                return t.each(["em", "px", "%", "pt"], function(t, e) {
                    n.indexOf(e) > 0 && (r = [parseFloat(n), e])
                }),
                r
            },
            cssClip: function(t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
            },
            transfer: function(e, n) {
                var r = t(this)
                  , i = t(e.to)
                  , o = "fixed" === i.css("position")
                  , s = t("body")
                  , a = o ? s.scrollTop() : 0
                  , u = o ? s.scrollLeft() : 0
                  , l = i.offset()
                  , c = {
                    top: l.top - a,
                    left: l.left - u,
                    height: i.innerHeight(),
                    width: i.innerWidth()
                }
                  , d = r.offset()
                  , p = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                    top: d.top - a,
                    left: d.left - u,
                    height: r.innerHeight(),
                    width: r.innerWidth(),
                    position: o ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing, function() {
                    p.remove(),
                    t.isFunction(n) && n()
                })
            }
        }),
        t.fx.step.clip = function(e) {
            e.clipInit || (e.start = t(e.elem).cssClip(),
            "string" == typeof e.end && (e.end = s(e.end, e.elem)),
            e.clipInit = !0),
            t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            })
        }
    }(),
    e = {},
    t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, n) {
        e[n] = function(e) {
            return Math.pow(e, t + 2)
        }
    }),
    t.extend(e, {
        Sine: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        Circ: function(t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        Elastic: function(t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(t) {
            return t * t * (3 * t - 2)
        },
        Bounce: function(t) {
            for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11; )
                ;
            return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
    }),
    t.each(e, function(e, n) {
        t.easing["easeIn" + e] = n,
        t.easing["easeOut" + e] = function(t) {
            return 1 - n(1 - t)
        }
        ,
        t.easing["easeInOut" + e] = function(t) {
            return t < .5 ? n(2 * t) / 2 : 1 - n(-2 * t + 2) / 2
        }
    }),
    t.effects
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
}(function(t) {
    return t.effects.define("blind", "hide", function(e, n) {
        var r = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , i = t(this)
          , o = e.direction || "up"
          , s = i.cssClip()
          , a = {
            clip: t.extend({}, s)
        }
          , u = t.effects.createPlaceholder(i);
        a.clip[r[o][0]] = a.clip[r[o][1]],
        "show" === e.mode && (i.cssClip(a.clip),
        u && u.css(t.effects.clipToBox(a)),
        a.clip = s),
        u && u.animate(t.effects.clipToBox(a), e.duration, e.easing),
        i.animate(a, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: n
        })
    })
}),
function() {
    var t = this;
    (function() {
        (function() {
            this.Rails = {
                linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
                buttonClickSelector: {
                    selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                    exclude: "form button"
                },
                inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
                formSubmitSelector: "form",
                formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
                formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
                formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
                fileInputSelector: "input[name][type=file]:not([disabled])",
                linkDisableSelector: "a[data-disable-with], a[data-disable]",
                buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
            }
        }
        ).call(this)
    }
    ).call(t);
    var e = t.Rails;
    (function() {
        (function() {
            var t, n;
            n = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector,
            e.matches = function(t, e) {
                return null != e.exclude ? n.call(t, e.selector) && !n.call(t, e.exclude) : n.call(t, e)
            }
            ,
            t = "_ujsData",
            e.getData = function(e, n) {
                var r;
                return null != (r = e[t]) ? r[n] : void 0
            }
            ,
            e.setData = function(e, n, r) {
                return null == e[t] && (e[t] = {}),
                e[t][n] = r
            }
            ,
            e.$ = function(t) {
                return Array.prototype.slice.call(document.querySelectorAll(t))
            }
        }
        ).call(this),
        function() {
            var t, n, r;
            t = e.$,
            r = e.csrfToken = function() {
                var t;
                return (t = document.querySelector("meta[name=csrf-token]")) && t.content
            }
            ,
            n = e.csrfParam = function() {
                var t;
                return (t = document.querySelector("meta[name=csrf-param]")) && t.content
            }
            ,
            e.CSRFProtection = function(t) {
                var e;
                if (null != (e = r()))
                    return t.setRequestHeader("X-CSRF-Token", e)
            }
            ,
            e.refreshCSRFTokens = function() {
                var e, i;
                if (i = r(),
                e = n(),
                null != i && null != e)
                    return t('form input[name="' + e + '"]').forEach(function(t) {
                        return t.value = i
                    })
            }
        }
        .call(this),
        function() {
            var t, n, r;
            r = e.matches,
            "function" != typeof (t = window.CustomEvent) && ((t = function(t, e) {
                var n;
                return (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
                n
            }
            ).prototype = window.Event.prototype),
            n = e.fire = function(e, n, r) {
                var i;
                return i = new t(n,{
                    bubbles: !0,
                    cancelable: !0,
                    detail: r
                }),
                e.dispatchEvent(i),
                !i.defaultPrevented
            }
            ,
            e.stopEverything = function(t) {
                return n(t.target, "ujs:everythingStopped"),
                t.preventDefault(),
                t.stopPropagation(),
                t.stopImmediatePropagation()
            }
            ,
            e.delegate = function(t, e, n, i) {
                return t.addEventListener(n, function(t) {
                    var n;
                    for (n = t.target; n instanceof Element && !r(n, e); )
                        n = n.parentNode;
                    if (n instanceof Element && !1 === i.call(n, t))
                        return t.preventDefault(),
                        t.stopPropagation()
                })
            }
        }
        .call(this),
        function() {
            var t, n, r, i, o, s;
            n = e.CSRFProtection,
            i = e.fire,
            t = {
                "*": "*/*",
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            e.ajax = function(t) {
                var e;
                return t = o(t),
                e = r(t, function() {
                    var n;
                    return n = s(e.response, e.getResponseHeader("Content-Type")),
                    2 === Math.floor(e.status / 100) ? "function" == typeof t.success && t.success(n, e.statusText, e) : "function" == typeof t.error && t.error(n, e.statusText, e),
                    "function" == typeof t.complete ? t.complete(e, e.statusText) : void 0
                }),
                "function" == typeof t.beforeSend && t.beforeSend(e, t),
                e.readyState === XMLHttpRequest.OPENED ? e.send(t.data) : i(document, "ajaxStop")
            }
            ,
            o = function(e) {
                return e.url = e.url || location.href,
                e.type = e.type.toUpperCase(),
                "GET" === e.type && e.data && (e.url.indexOf("?") < 0 ? e.url += "?" + e.data : e.url += "&" + e.data),
                null == t[e.dataType] && (e.dataType = "*"),
                e.accept = t[e.dataType],
                "*" !== e.dataType && (e.accept += ", */*; q=0.01"),
                e
            }
            ,
            r = function(t, e) {
                var r;
                return (r = new XMLHttpRequest).open(t.type, t.url, !0),
                r.setRequestHeader("Accept", t.accept),
                "string" == typeof t.data && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                t.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                n(r),
                r.withCredentials = !!t.withCredentials,
                r.onreadystatechange = function() {
                    if (r.readyState === XMLHttpRequest.DONE)
                        return e(r)
                }
                ,
                r
            }
            ,
            s = function(t, e) {
                var n, r;
                if ("string" == typeof t && "string" == typeof e)
                    if (e.match(/\bjson\b/))
                        try {
                            t = JSON.parse(t)
                        } catch (i) {}
                    else if (e.match(/\b(?:java|ecma)script\b/))
                        (r = document.createElement("script")).text = t,
                        document.head.appendChild(r).parentNode.removeChild(r);
                    else if (e.match(/\b(xml|html|svg)\b/)) {
                        n = new DOMParser,
                        e = e.replace(/;.+/, "");
                        try {
                            t = n.parseFromString(t, e)
                        } catch (i) {}
                    }
                return t
            }
            ,
            e.href = function(t) {
                return t.href
            }
            ,
            e.isCrossDomain = function(t) {
                var e, n;
                (e = document.createElement("a")).href = location.href,
                n = document.createElement("a");
                try {
                    return n.href = t,
                    !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                } catch (r) {
                    return r,
                    !0
                }
            }
        }
        .call(this),
        function() {
            var t, n;
            t = e.matches,
            n = function(t) {
                return Array.prototype.slice.call(t)
            }
            ,
            e.serializeElement = function(e, r) {
                var i, o;
                return i = [e],
                t(e, "form") && (i = n(e.elements)),
                o = [],
                i.forEach(function(e) {
                    if (e.name)
                        return t(e, "select") ? n(e.options).forEach(function(t) {
                            if (t.selected)
                                return o.push({
                                    name: e.name,
                                    value: t.value
                                })
                        }) : e.checked || -1 === ["radio", "checkbox", "submit"].indexOf(e.type) ? o.push({
                            name: e.name,
                            value: e.value
                        }) : void 0
                }),
                r && o.push(r),
                o.map(function(t) {
                    return null != t.name ? encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value) : t
                }).join("&")
            }
            ,
            e.formElements = function(e, r) {
                return t(e, "form") ? n(e.elements).filter(function(e) {
                    return t(e, r)
                }) : n(e.querySelectorAll(r))
            }
        }
        .call(this),
        function() {
            var t, n, r;
            n = e.fire,
            r = e.stopEverything,
            e.handleConfirm = function(e) {
                if (!t(this))
                    return r(e)
            }
            ,
            t = function(t) {
                var e, r, i;
                if (!(i = t.getAttribute("data-confirm")))
                    return !0;
                if (e = !1,
                n(t, "confirm")) {
                    try {
                        e = confirm(i)
                    } catch (o) {}
                    r = n(t, "confirm:complete", [e])
                }
                return e && r
            }
        }
        .call(this),
        function() {
            var t, n, r, i, o, s, a, u, l, c, d;
            l = e.matches,
            u = e.getData,
            c = e.setData,
            d = e.stopEverything,
            a = e.formElements,
            e.handleDisabledElement = function(t) {
                if (this.disabled)
                    return d(t)
            }
            ,
            e.enableElement = function(t) {
                var n;
                return n = t instanceof Event ? t.target : t,
                l(n, e.linkDisableSelector) ? s(n) : l(n, e.buttonDisableSelector) || l(n, e.formEnableSelector) ? i(n) : l(n, e.formSubmitSelector) ? o(n) : void 0
            }
            ,
            e.disableElement = function(i) {
                var o;
                return o = i instanceof Event ? i.target : i,
                l(o, e.linkDisableSelector) ? r(o) : l(o, e.buttonDisableSelector) || l(o, e.formDisableSelector) ? t(o) : l(o, e.formSubmitSelector) ? n(o) : void 0
            }
            ,
            r = function(t) {
                var e;
                return null != (e = t.getAttribute("data-disable-with")) && (c(t, "ujs:enable-with", t.innerHTML),
                t.innerHTML = e),
                t.addEventListener("click", d),
                c(t, "ujs:disabled", !0)
            }
            ,
            s = function(t) {
                var e;
                return null != (e = u(t, "ujs:enable-with")) && (t.innerHTML = e,
                c(t, "ujs:enable-with", null)),
                t.removeEventListener("click", d),
                c(t, "ujs:disabled", null)
            }
            ,
            n = function(n) {
                return a(n, e.formDisableSelector).forEach(t)
            }
            ,
            t = function(t) {
                var e;
                return null != (e = t.getAttribute("data-disable-with")) && (l(t, "button") ? (c(t, "ujs:enable-with", t.innerHTML),
                t.innerHTML = e) : (c(t, "ujs:enable-with", t.value),
                t.value = e)),
                t.disabled = !0,
                c(t, "ujs:disabled", !0)
            }
            ,
            o = function(t) {
                return a(t, e.formEnableSelector).forEach(i)
            }
            ,
            i = function(t) {
                var e;
                return null != (e = u(t, "ujs:enable-with")) && (l(t, "button") ? t.innerHTML = e : t.value = e,
                c(t, "ujs:enable-with", null)),
                t.disabled = !1,
                c(t, "ujs:disabled", null)
            }
        }
        .call(this),
        function() {
            var t;
            t = e.stopEverything,
            e.handleMethod = function(n) {
                var r, i, o, s, a, u, l;
                if (l = (u = this).getAttribute("data-method"))
                    return a = e.href(u),
                    i = e.csrfToken(),
                    r = e.csrfParam(),
                    o = document.createElement("form"),
                    s = "<input name='_method' value='" + l + "' type='hidden' />",
                    null == r || null == i || e.isCrossDomain(a) || (s += "<input name='" + r + "' value='" + i + "' type='hidden' />"),
                    s += '<input type="submit" />',
                    o.method = "post",
                    o.action = a,
                    o.target = u.target,
                    o.innerHTML = s,
                    o.style.display = "none",
                    document.body.appendChild(o),
                    o.querySelector('[type="submit"]').click(),
                    t(n)
            }
        }
        .call(this),
        function() {
            var t, n, r, i, o, s, a, u, l, c = [].slice;
            s = e.matches,
            r = e.getData,
            u = e.setData,
            n = e.fire,
            l = e.stopEverything,
            t = e.ajax,
            i = e.isCrossDomain,
            a = e.serializeElement,
            o = function(t) {
                var e;
                return null != (e = t.getAttribute("data-remote")) && "false" !== e
            }
            ,
            e.handleRemote = function(d) {
                var p, f, h, m, g, y, v;
                return !o(m = this) || (n(m, "ajax:before") ? (v = m.getAttribute("data-with-credentials"),
                h = m.getAttribute("data-type") || "script",
                s(m, e.formSubmitSelector) ? (p = r(m, "ujs:submit-button"),
                g = r(m, "ujs:submit-button-formmethod") || m.method,
                y = r(m, "ujs:submit-button-formaction") || m.getAttribute("action") || location.href,
                "GET" === g.toUpperCase() && (y = y.replace(/\?.*$/, "")),
                "multipart/form-data" === m.enctype ? (f = new FormData(m),
                null != p && f.append(p.name, p.value)) : f = a(m, p),
                u(m, "ujs:submit-button", null),
                u(m, "ujs:submit-button-formmethod", null),
                u(m, "ujs:submit-button-formaction", null)) : s(m, e.buttonClickSelector) || s(m, e.inputChangeSelector) ? (g = m.getAttribute("data-method"),
                y = m.getAttribute("data-url"),
                f = a(m, m.getAttribute("data-params"))) : (g = m.getAttribute("data-method"),
                y = e.href(m),
                f = m.getAttribute("data-params")),
                t({
                    type: g || "GET",
                    url: y,
                    data: f,
                    dataType: h,
                    beforeSend: function(t, e) {
                        return n(m, "ajax:beforeSend", [t, e]) ? n(m, "ajax:send", [t]) : (n(m, "ajax:stopped"),
                        t.abort())
                    },
                    success: function() {
                        var t;
                        return t = 1 <= arguments.length ? c.call(arguments, 0) : [],
                        n(m, "ajax:success", t)
                    },
                    error: function() {
                        var t;
                        return t = 1 <= arguments.length ? c.call(arguments, 0) : [],
                        n(m, "ajax:error", t)
                    },
                    complete: function() {
                        var t;
                        return t = 1 <= arguments.length ? c.call(arguments, 0) : [],
                        n(m, "ajax:complete", t)
                    },
                    crossDomain: i(y),
                    withCredentials: null != v && "false" !== v
                }),
                l(d)) : (n(m, "ajax:stopped"),
                !1))
            }
            ,
            e.formSubmitButtonClick = function() {
                var t, e;
                if (e = (t = this).form)
                    return t.name && u(e, "ujs:submit-button", {
                        name: t.name,
                        value: t.value
                    }),
                    u(e, "ujs:formnovalidate-button", t.formNoValidate),
                    u(e, "ujs:submit-button-formaction", t.getAttribute("formaction")),
                    u(e, "ujs:submit-button-formmethod", t.getAttribute("formmethod"))
            }
            ,
            e.handleMetaClick = function(t) {
                var e, n, r;
                if (r = ((n = this).getAttribute("data-method") || "GET").toUpperCase(),
                e = n.getAttribute("data-params"),
                (t.metaKey || t.ctrlKey) && "GET" === r && !e)
                    return t.stopImmediatePropagation()
            }
        }
        .call(this),
        function() {
            var t, n, r, i, o, s, a, u, l, c, d, p, f, h;
            s = e.fire,
            r = e.delegate,
            u = e.getData,
            t = e.$,
            h = e.refreshCSRFTokens,
            n = e.CSRFProtection,
            o = e.enableElement,
            i = e.disableElement,
            c = e.handleDisabledElement,
            l = e.handleConfirm,
            f = e.handleRemote,
            a = e.formSubmitButtonClick,
            d = e.handleMetaClick,
            p = e.handleMethod,
            "undefined" == typeof jQuery || null === jQuery || null == jQuery.ajax || jQuery.rails || (jQuery.rails = e,
            jQuery.ajaxPrefilter(function(t, e, r) {
                if (!t.crossDomain)
                    return n(r)
            })),
            e.start = function() {
                if (window._rails_loaded)
                    throw new Error("rails-ujs has already been loaded!");
                return window.addEventListener("pageshow", function() {
                    return t(e.formEnableSelector).forEach(function(t) {
                        if (u(t, "ujs:disabled"))
                            return o(t)
                    }),
                    t(e.linkDisableSelector).forEach(function(t) {
                        if (u(t, "ujs:disabled"))
                            return o(t)
                    })
                }),
                r(document, e.linkDisableSelector, "ajax:complete", o),
                r(document, e.linkDisableSelector, "ajax:stopped", o),
                r(document, e.buttonDisableSelector, "ajax:complete", o),
                r(document, e.buttonDisableSelector, "ajax:stopped", o),
                r(document, e.linkClickSelector, "click", c),
                r(document, e.linkClickSelector, "click", l),
                r(document, e.linkClickSelector, "click", d),
                r(document, e.linkClickSelector, "click", i),
                r(document, e.linkClickSelector, "click", f),
                r(document, e.linkClickSelector, "click", p),
                r(document, e.buttonClickSelector, "click", c),
                r(document, e.buttonClickSelector, "click", l),
                r(document, e.buttonClickSelector, "click", i),
                r(document, e.buttonClickSelector, "click", f),
                r(document, e.inputChangeSelector, "change", c),
                r(document, e.inputChangeSelector, "change", l),
                r(document, e.inputChangeSelector, "change", f),
                r(document, e.formSubmitSelector, "submit", c),
                r(document, e.formSubmitSelector, "submit", l),
                r(document, e.formSubmitSelector, "submit", f),
                r(document, e.formSubmitSelector, "submit", function(t) {
                    return setTimeout(function() {
                        return i(t)
                    }, 13)
                }),
                r(document, e.formSubmitSelector, "ajax:send", i),
                r(document, e.formSubmitSelector, "ajax:complete", o),
                r(document, e.formInputClickSelector, "click", c),
                r(document, e.formInputClickSelector, "click", l),
                r(document, e.formInputClickSelector, "click", a),
                document.addEventListener("DOMContentLoaded", h),
                window._rails_loaded = !0
            }
            ,
            window.Rails === e && s(document, "rails:attachBindings") && e.start()
        }
        .call(this)
    }
    ).call(this),
    "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
}
.call(this),
function() {
    this.Turbolinks = {
        supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
        visit: function(t, e) {
            return Turbolinks.controller.visit(t, e)
        },
        clearCache: function() {
            return Turbolinks.controller.clearCache()
        },
        setProgressBarDelay: function(t) {
            return Turbolinks.controller.setProgressBarDelay(t)
        }
    }
}
.call(this),
function() {
    var t, e, n, r, i, o, s, a, u, l = [].slice;
    Turbolinks.copyObject = function(t) {
        var e, n, r;
        for (e in n = {},
        t)
            r = t[e],
            n[e] = r;
        return n
    }
    ,
    Turbolinks.closest = function(e, n) {
        return t.call(e, n)
    }
    ,
    t = null != (u = document.documentElement.closest) ? u : function(t) {
        var n;
        for (n = this; n; ) {
            if (n.nodeType === Node.ELEMENT_NODE && e.call(n, t))
                return n;
            n = n.parentNode
        }
    }
    ,
    Turbolinks.defer = function(t) {
        return setTimeout(t, 1)
    }
    ,
    Turbolinks.throttle = function(t) {
        var e;
        return e = null,
        function() {
            var n, r;
            return n = 1 <= arguments.length ? l.call(arguments, 0) : [],
            null != e ? e : e = requestAnimationFrame((r = this,
            function() {
                return e = null,
                t.apply(r, n)
            }
            ))
        }
    }
    ,
    Turbolinks.dispatch = function(t, e) {
        var r, i, o, s, a, u;
        return u = (a = null != e ? e : {}).target,
        r = a.cancelable,
        i = a.data,
        (o = document.createEvent("Events")).initEvent(t, !0, !0 === r),
        o.data = null != i ? i : {},
        o.cancelable && !n && (s = o.preventDefault,
        o.preventDefault = function() {
            return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                get: function() {
                    return !0
                }
            }),
            s.call(this)
        }
        ),
        (null != u ? u : document).dispatchEvent(o),
        o
    }
    ,
    (a = document.createEvent("Events")).initEvent("test", !0, !0),
    a.preventDefault(),
    n = a.defaultPrevented,
    Turbolinks.match = function(t, n) {
        return e.call(t, n)
    }
    ,
    e = null != (i = null != (o = null != (s = (r = document.documentElement).matchesSelector) ? s : r.webkitMatchesSelector) ? o : r.msMatchesSelector) ? i : r.mozMatchesSelector,
    Turbolinks.uuid = function() {
        var t, e, n;
        for (n = "",
        t = e = 1; 36 >= e; t = ++e)
            n += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        return n
    }
}
.call(this),
function() {
    Turbolinks.Location = function() {
        function t(t) {
            var e, n;
            null == t && (t = ""),
            (n = document.createElement("a")).href = t.toString(),
            this.absoluteURL = n.href,
            2 > (e = n.hash.length) ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e),
            this.anchor = n.hash.slice(1))
        }
        var e, n, r, i;
        return t.wrap = function(t) {
            return t instanceof this ? t : new this(t)
        }
        ,
        t.prototype.getOrigin = function() {
            return this.absoluteURL.split("/", 3).join("/")
        }
        ,
        t.prototype.getPath = function() {
            var t, e;
            return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/"
        }
        ,
        t.prototype.getPathComponents = function() {
            return this.getPath().split("/").slice(1)
        }
        ,
        t.prototype.getLastPathComponent = function() {
            return this.getPathComponents().slice(-1)[0]
        }
        ,
        t.prototype.getExtension = function() {
            var t, e;
            return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : ""
        }
        ,
        t.prototype.isHTML = function() {
            return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
        }
        ,
        t.prototype.isPrefixedBy = function(t) {
            var e;
            return e = n(t),
            this.isEqualTo(t) || i(this.absoluteURL, e)
        }
        ,
        t.prototype.isEqualTo = function(t) {
            return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
        }
        ,
        t.prototype.toCacheKey = function() {
            return this.requestURL
        }
        ,
        t.prototype.toJSON = function() {
            return this.absoluteURL
        }
        ,
        t.prototype.toString = function() {
            return this.absoluteURL
        }
        ,
        t.prototype.valueOf = function() {
            return this.absoluteURL
        }
        ,
        n = function(t) {
            return e(t.getOrigin() + t.getPath())
        }
        ,
        e = function(t) {
            return r(t, "/") ? t : t + "/"
        }
        ,
        i = function(t, e) {
            return t.slice(0, e.length) === e
        }
        ,
        r = function(t, e) {
            return t.slice(-e.length) === e
        }
        ,
        t
    }()
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.HttpRequest = function() {
        function e(e, n, r) {
            this.delegate = e,
            this.requestCanceled = t(this.requestCanceled, this),
            this.requestTimedOut = t(this.requestTimedOut, this),
            this.requestFailed = t(this.requestFailed, this),
            this.requestLoaded = t(this.requestLoaded, this),
            this.requestProgressed = t(this.requestProgressed, this),
            this.url = Turbolinks.Location.wrap(n).requestURL,
            this.referrer = Turbolinks.Location.wrap(r).absoluteURL,
            this.createXHR()
        }
        return e.NETWORK_FAILURE = 0,
        e.TIMEOUT_FAILURE = -1,
        e.timeout = 60,
        e.prototype.send = function() {
            var t;
            return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(),
            this.setProgress(0),
            this.xhr.send(),
            this.sent = !0,
            "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0
        }
        ,
        e.prototype.cancel = function() {
            return this.xhr && this.sent ? this.xhr.abort() : void 0
        }
        ,
        e.prototype.requestProgressed = function(t) {
            return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
        }
        ,
        e.prototype.requestLoaded = function() {
            return this.endRequest((t = this,
            function() {
                var e;
                return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0,
                t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText))
            }
            ));
            var t
        }
        ,
        e.prototype.requestFailed = function() {
            return this.endRequest((t = this,
            function() {
                return t.failed = !0,
                t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
            }
            ));
            var t
        }
        ,
        e.prototype.requestTimedOut = function() {
            return this.endRequest((t = this,
            function() {
                return t.failed = !0,
                t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
            }
            ));
            var t
        }
        ,
        e.prototype.requestCanceled = function() {
            return this.endRequest()
        }
        ,
        e.prototype.notifyApplicationBeforeRequestStart = function() {
            return Turbolinks.dispatch("turbolinks:request-start", {
                data: {
                    url: this.url,
                    xhr: this.xhr
                }
            })
        }
        ,
        e.prototype.notifyApplicationAfterRequestEnd = function() {
            return Turbolinks.dispatch("turbolinks:request-end", {
                data: {
                    url: this.url,
                    xhr: this.xhr
                }
            })
        }
        ,
        e.prototype.createXHR = function() {
            return this.xhr = new XMLHttpRequest,
            this.xhr.open("GET", this.url, !0),
            this.xhr.timeout = 1e3 * this.constructor.timeout,
            this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"),
            this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer),
            this.xhr.onprogress = this.requestProgressed,
            this.xhr.onload = this.requestLoaded,
            this.xhr.onerror = this.requestFailed,
            this.xhr.ontimeout = this.requestTimedOut,
            this.xhr.onabort = this.requestCanceled
        }
        ,
        e.prototype.endRequest = function(t) {
            return this.xhr ? (this.notifyApplicationAfterRequestEnd(),
            null != t && t.call(this),
            this.destroy()) : void 0
        }
        ,
        e.prototype.setProgress = function(t) {
            var e;
            return this.progress = t,
            "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0
        }
        ,
        e.prototype.destroy = function() {
            var t;
            return this.setProgress(1),
            "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(),
            this.delegate = null,
            this.xhr = null
        }
        ,
        e
    }()
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.ProgressBar = function() {
        function e() {
            this.trickle = t(this.trickle, this),
            this.stylesheetElement = this.createStylesheetElement(),
            this.progressElement = this.createProgressElement()
        }
        var n;
        return n = 300,
        e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",
        e.prototype.show = function() {
            return this.visible ? void 0 : (this.visible = !0,
            this.installStylesheetElement(),
            this.installProgressElement(),
            this.startTrickling())
        }
        ,
        e.prototype.hide = function() {
            return this.visible && !this.hiding ? (this.hiding = !0,
            this.fadeProgressElement((t = this,
            function() {
                return t.uninstallProgressElement(),
                t.stopTrickling(),
                t.visible = !1,
                t.hiding = !1
            }
            ))) : void 0;
            var t
        }
        ,
        e.prototype.setValue = function(t) {
            return this.value = t,
            this.refresh()
        }
        ,
        e.prototype.installStylesheetElement = function() {
            return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
        }
        ,
        e.prototype.installProgressElement = function() {
            return this.progressElement.style.width = 0,
            this.progressElement.style.opacity = 1,
            document.documentElement.insertBefore(this.progressElement, document.body),
            this.refresh()
        }
        ,
        e.prototype.fadeProgressElement = function(t) {
            return this.progressElement.style.opacity = 0,
            setTimeout(t, 1.5 * n)
        }
        ,
        e.prototype.uninstallProgressElement = function() {
            return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
        }
        ,
        e.prototype.startTrickling = function() {
            return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
        }
        ,
        e.prototype.stopTrickling = function() {
            return clearInterval(this.trickleInterval),
            this.trickleInterval = null
        }
        ,
        e.prototype.trickle = function() {
            return this.setValue(this.value + Math.random() / 100)
        }
        ,
        e.prototype.refresh = function() {
            return requestAnimationFrame((t = this,
            function() {
                return t.progressElement.style.width = 10 + 90 * t.value + "%"
            }
            ));
            var t
        }
        ,
        e.prototype.createStylesheetElement = function() {
            var t;
            return (t = document.createElement("style")).type = "text/css",
            t.textContent = this.constructor.defaultCSS,
            t
        }
        ,
        e.prototype.createProgressElement = function() {
            var t;
            return (t = document.createElement("div")).className = "turbolinks-progress-bar",
            t
        }
        ,
        e
    }()
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.BrowserAdapter = function() {
        function e(e) {
            this.controller = e,
            this.showProgressBar = t(this.showProgressBar, this),
            this.progressBar = new Turbolinks.ProgressBar
        }
        var n, r, i;
        return i = Turbolinks.HttpRequest,
        n = i.NETWORK_FAILURE,
        r = i.TIMEOUT_FAILURE,
        e.prototype.visitProposedToLocationWithAction = function(t, e) {
            return this.controller.startVisitToLocationWithAction(t, e)
        }
        ,
        e.prototype.visitStarted = function(t) {
            return t.issueRequest(),
            t.changeHistory(),
            t.loadCachedSnapshot()
        }
        ,
        e.prototype.visitRequestStarted = function(t) {
            return this.progressBar.setValue(0),
            t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
        }
        ,
        e.prototype.visitRequestProgressed = function(t) {
            return this.progressBar.setValue(t.progress)
        }
        ,
        e.prototype.visitRequestCompleted = function(t) {
            return t.loadResponse()
        }
        ,
        e.prototype.visitRequestFailedWithStatusCode = function(t, e) {
            switch (e) {
            case n:
            case r:
                return this.reload();
            default:
                return t.loadResponse()
            }
        }
        ,
        e.prototype.visitRequestFinished = function() {
            return this.hideProgressBar()
        }
        ,
        e.prototype.visitCompleted = function(t) {
            return t.followRedirect()
        }
        ,
        e.prototype.pageInvalidated = function() {
            return this.reload()
        }
        ,
        e.prototype.showProgressBarAfterDelay = function() {
            return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
        }
        ,
        e.prototype.showProgressBar = function() {
            return this.progressBar.show()
        }
        ,
        e.prototype.hideProgressBar = function() {
            return this.progressBar.hide(),
            clearTimeout(this.progressBarTimeout)
        }
        ,
        e.prototype.reload = function() {
            return window.location.reload()
        }
        ,
        e
    }()
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.History = function() {
        function e(e) {
            this.delegate = e,
            this.onPageLoad = t(this.onPageLoad, this),
            this.onPopState = t(this.onPopState, this)
        }
        return e.prototype.start = function() {
            return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1),
            addEventListener("load", this.onPageLoad, !1),
            this.started = !0)
        }
        ,
        e.prototype.stop = function() {
            return this.started ? (removeEventListener("popstate", this.onPopState, !1),
            removeEventListener("load", this.onPageLoad, !1),
            this.started = !1) : void 0
        }
        ,
        e.prototype.push = function(t, e) {
            return t = Turbolinks.Location.wrap(t),
            this.update("push", t, e)
        }
        ,
        e.prototype.replace = function(t, e) {
            return t = Turbolinks.Location.wrap(t),
            this.update("replace", t, e)
        }
        ,
        e.prototype.onPopState = function(t) {
            var e, n, r, i;
            return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (e = Turbolinks.Location.wrap(window.location),
            r = i.restorationIdentifier,
            this.delegate.historyPoppedToLocationWithRestorationIdentifier(e, r)) : void 0
        }
        ,
        e.prototype.onPageLoad = function() {
            return Turbolinks.defer((t = this,
            function() {
                return t.pageLoaded = !0
            }
            ));
            var t
        }
        ,
        e.prototype.shouldHandlePopState = function() {
            return this.pageIsLoaded()
        }
        ,
        e.prototype.pageIsLoaded = function() {
            return this.pageLoaded || "complete" === document.readyState
        }
        ,
        e.prototype.update = function(t, e, n) {
            var r;
            return r = {
                turbolinks: {
                    restorationIdentifier: n
                }
            },
            history[t + "State"](r, null, e)
        }
        ,
        e
    }()
}
.call(this),
function() {
    Turbolinks.Snapshot = function() {
        function t(t) {
            var e, n;
            n = t.head,
            e = t.body,
            this.head = null != n ? n : document.createElement("head"),
            this.body = null != e ? e : document.createElement("body")
        }
        return t.wrap = function(t) {
            return t instanceof this ? t : this.fromHTML(t)
        }
        ,
        t.fromHTML = function(t) {
            var e;
            return (e = document.createElement("html")).innerHTML = t,
            this.fromElement(e)
        }
        ,
        t.fromElement = function(t) {
            return new this({
                head: t.querySelector("head"),
                body: t.querySelector("body")
            })
        }
        ,
        t.prototype.clone = function() {
            return new t({
                head: this.head.cloneNode(!0),
                body: this.body.cloneNode(!0)
            })
        }
        ,
        t.prototype.getRootLocation = function() {
            var t, e;
            return e = null != (t = this.getSetting("root")) ? t : "/",
            new Turbolinks.Location(e)
        }
        ,
        t.prototype.getCacheControlValue = function() {
            return this.getSetting("cache-control")
        }
        ,
        t.prototype.getElementForAnchor = function(t) {
            try {
                return this.body.querySelector("[id='" + t + "'], a[name='" + t + "']")
            } catch (e) {}
        }
        ,
        t.prototype.hasAnchor = function(t) {
            return null != this.getElementForAnchor(t)
        }
        ,
        t.prototype.isPreviewable = function() {
            return "no-preview" !== this.getCacheControlValue()
        }
        ,
        t.prototype.isCacheable = function() {
            return "no-cache" !== this.getCacheControlValue()
        }
        ,
        t.prototype.isVisitable = function() {
            return "reload" !== this.getSetting("visit-control")
        }
        ,
        t.prototype.getSetting = function(t) {
            var e, n;
            return null != (e = (n = this.head.querySelectorAll("meta[name='turbolinks-" + t + "']"))[n.length - 1]) ? e.getAttribute("content") : void 0
        }
        ,
        t
    }()
}
.call(this),
function() {
    var t = [].slice;
    Turbolinks.Renderer = function() {
        function e() {}
        var n;
        return e.render = function() {
            var e, n, r;
            return n = arguments[0],
            e = arguments[1],
            (r = function(t, e, n) {
                n.prototype = t.prototype;
                var r = new n
                  , i = t.apply(r, e);
                return Object(i) === i ? i : r
            }(this, 3 <= arguments.length ? t.call(arguments, 2) : [], function() {})).delegate = n,
            r.render(e),
            r
        }
        ,
        e.prototype.renderView = function(t) {
            return this.delegate.viewWillRender(this.newBody),
            t(),
            this.delegate.viewRendered(this.newBody)
        }
        ,
        e.prototype.invalidateView = function() {
            return this.delegate.viewInvalidated()
        }
        ,
        e.prototype.createScriptElement = function(t) {
            var e;
            return "false" === t.getAttribute("data-turbolinks-eval") ? t : ((e = document.createElement("script")).textContent = t.textContent,
            e.async = !1,
            n(e, t),
            e)
        }
        ,
        n = function(t, e) {
            var n, r, i, o, s, a, u;
            for (a = [],
            n = 0,
            r = (o = e.attributes).length; r > n; n++)
                i = (s = o[n]).name,
                u = s.value,
                a.push(t.setAttribute(i, u));
            return a
        }
        ,
        e
    }()
}
.call(this),
function() {
    Turbolinks.HeadDetails = function() {
        function t(t) {
            var e, n, o, s, a, u;
            for (this.element = t,
            this.elements = {},
            o = 0,
            a = (u = this.element.childNodes).length; a > o; o++)
                (n = u[o]).nodeType === Node.ELEMENT_NODE && (s = n.outerHTML,
                (null != (e = this.elements)[s] ? e[s] : e[s] = {
                    type: i(n),
                    tracked: r(n),
                    elements: []
                }).elements.push(n))
        }
        var e, n, r, i;
        return t.prototype.hasElementWithKey = function(t) {
            return t in this.elements
        }
        ,
        t.prototype.getTrackedElementSignature = function() {
            var t;
            return function() {
                var e, n;
                for (t in n = [],
                e = this.elements)
                    e[t].tracked && n.push(t);
                return n
            }
            .call(this).join("")
        }
        ,
        t.prototype.getScriptElementsNotInDetails = function(t) {
            return this.getElementsMatchingTypeNotInDetails("script", t)
        }
        ,
        t.prototype.getStylesheetElementsNotInDetails = function(t) {
            return this.getElementsMatchingTypeNotInDetails("stylesheet", t)
        }
        ,
        t.prototype.getElementsMatchingTypeNotInDetails = function(t, e) {
            var n, r, i, o, s, a;
            for (r in s = [],
            i = this.elements)
                a = (o = i[r]).type,
                n = o.elements,
                a !== t || e.hasElementWithKey(r) || s.push(n[0]);
            return s
        }
        ,
        t.prototype.getProvisionalElements = function() {
            var t, e, n, r, i, o, s;
            for (e in n = [],
            r = this.elements)
                s = (i = r[e]).type,
                o = i.tracked,
                t = i.elements,
                null != s || o ? t.length > 1 && n.push.apply(n, t.slice(1)) : n.push.apply(n, t);
            return n
        }
        ,
        i = function(t) {
            return e(t) ? "script" : n(t) ? "stylesheet" : void 0
        }
        ,
        r = function(t) {
            return "reload" === t.getAttribute("data-turbolinks-track")
        }
        ,
        e = function(t) {
            return "script" === t.tagName.toLowerCase()
        }
        ,
        n = function(t) {
            var e;
            return "style" === (e = t.tagName.toLowerCase()) || "link" === e && "stylesheet" === t.getAttribute("rel")
        }
        ,
        t
    }()
}
.call(this),
function() {
    var t = function(t, n) {
        function r() {
            this.constructor = t
        }
        for (var i in n)
            e.call(n, i) && (t[i] = n[i]);
        return r.prototype = n.prototype,
        t.prototype = new r,
        t.__super__ = n.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Turbolinks.SnapshotRenderer = function(e) {
        function n(t, e, n) {
            this.currentSnapshot = t,
            this.newSnapshot = e,
            this.isPreview = n,
            this.currentHeadDetails = new Turbolinks.HeadDetails(this.currentSnapshot.head),
            this.newHeadDetails = new Turbolinks.HeadDetails(this.newSnapshot.head),
            this.newBody = this.newSnapshot.body
        }
        return t(n, e),
        n.prototype.render = function(t) {
            return this.shouldRender() ? (this.mergeHead(),
            this.renderView((e = this,
            function() {
                return e.replaceBody(),
                e.isPreview || e.focusFirstAutofocusableElement(),
                t()
            }
            ))) : this.invalidateView();
            var e
        }
        ,
        n.prototype.mergeHead = function() {
            return this.copyNewHeadStylesheetElements(),
            this.copyNewHeadScriptElements(),
            this.removeCurrentHeadProvisionalElements(),
            this.copyNewHeadProvisionalElements()
        }
        ,
        n.prototype.replaceBody = function() {
            return this.activateBodyScriptElements(),
            this.importBodyPermanentElements(),
            this.assignNewBody()
        }
        ,
        n.prototype.shouldRender = function() {
            return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
        }
        ,
        n.prototype.trackedElementsAreIdentical = function() {
            return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
        }
        ,
        n.prototype.copyNewHeadStylesheetElements = function() {
            var t, e, n, r, i;
            for (i = [],
            e = 0,
            n = (r = this.getNewHeadStylesheetElements()).length; n > e; e++)
                t = r[e],
                i.push(document.head.appendChild(t));
            return i
        }
        ,
        n.prototype.copyNewHeadScriptElements = function() {
            var t, e, n, r, i;
            for (i = [],
            e = 0,
            n = (r = this.getNewHeadScriptElements()).length; n > e; e++)
                t = r[e],
                i.push(document.head.appendChild(this.createScriptElement(t)));
            return i
        }
        ,
        n.prototype.removeCurrentHeadProvisionalElements = function() {
            var t, e, n, r, i;
            for (i = [],
            e = 0,
            n = (r = this.getCurrentHeadProvisionalElements()).length; n > e; e++)
                t = r[e],
                i.push(document.head.removeChild(t));
            return i
        }
        ,
        n.prototype.copyNewHeadProvisionalElements = function() {
            var t, e, n, r, i;
            for (i = [],
            e = 0,
            n = (r = this.getNewHeadProvisionalElements()).length; n > e; e++)
                t = r[e],
                i.push(document.head.appendChild(t));
            return i
        }
        ,
        n.prototype.importBodyPermanentElements = function() {
            var t, e, n, r, i, o;
            for (o = [],
            e = 0,
            n = (r = this.getNewBodyPermanentElements()).length; n > e; e++)
                i = r[e],
                (t = this.findCurrentBodyPermanentElement(i)) ? o.push(i.parentNode.replaceChild(t, i)) : o.push(void 0);
            return o
        }
        ,
        n.prototype.activateBodyScriptElements = function() {
            var t, e, n, r, i, o;
            for (o = [],
            e = 0,
            n = (r = this.getNewBodyScriptElements()).length; n > e; e++)
                i = r[e],
                t = this.createScriptElement(i),
                o.push(i.parentNode.replaceChild(t, i));
            return o
        }
        ,
        n.prototype.assignNewBody = function() {
            return document.body = this.newBody
        }
        ,
        n.prototype.focusFirstAutofocusableElement = function() {
            var t;
            return null != (t = this.findFirstAutofocusableElement()) ? t.focus() : void 0
        }
        ,
        n.prototype.getNewHeadStylesheetElements = function() {
            return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
        }
        ,
        n.prototype.getNewHeadScriptElements = function() {
            return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
        }
        ,
        n.prototype.getCurrentHeadProvisionalElements = function() {
            return this.currentHeadDetails.getProvisionalElements()
        }
        ,
        n.prototype.getNewHeadProvisionalElements = function() {
            return this.newHeadDetails.getProvisionalElements()
        }
        ,
        n.prototype.getNewBodyPermanentElements = function() {
            return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")
        }
        ,
        n.prototype.findCurrentBodyPermanentElement = function(t) {
            return document.body.querySelector("#" + t.id + "[data-turbolinks-permanent]")
        }
        ,
        n.prototype.getNewBodyScriptElements = function() {
            return this.newBody.querySelectorAll("script")
        }
        ,
        n.prototype.findFirstAutofocusableElement = function() {
            return document.body.querySelector("[autofocus]")
        }
        ,
        n
    }(Turbolinks.Renderer)
}
.call(this),
function() {
    var t = function(t, n) {
        function r() {
            this.constructor = t
        }
        for (var i in n)
            e.call(n, i) && (t[i] = n[i]);
        return r.prototype = n.prototype,
        t.prototype = new r,
        t.__super__ = n.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Turbolinks.ErrorRenderer = function(e) {
        function n(t) {
            this.html = t
        }
        return t(n, e),
        n.prototype.render = function(t) {
            return this.renderView((e = this,
            function() {
                return e.replaceDocumentHTML(),
                e.activateBodyScriptElements(),
                t()
            }
            ));
            var e
        }
        ,
        n.prototype.replaceDocumentHTML = function() {
            return document.documentElement.innerHTML = this.html
        }
        ,
        n.prototype.activateBodyScriptElements = function() {
            var t, e, n, r, i, o;
            for (o = [],
            e = 0,
            n = (r = this.getScriptElements()).length; n > e; e++)
                i = r[e],
                t = this.createScriptElement(i),
                o.push(i.parentNode.replaceChild(t, i));
            return o
        }
        ,
        n.prototype.getScriptElements = function() {
            return document.documentElement.querySelectorAll("script")
        }
        ,
        n
    }(Turbolinks.Renderer)
}
.call(this),
function() {
    Turbolinks.View = function() {
        function t(t) {
            this.delegate = t,
            this.element = document.documentElement
        }
        return t.prototype.getRootLocation = function() {
            return this.getSnapshot().getRootLocation()
        }
        ,
        t.prototype.getElementForAnchor = function(t) {
            return this.getSnapshot().getElementForAnchor(t)
        }
        ,
        t.prototype.getSnapshot = function() {
            return Turbolinks.Snapshot.fromElement(this.element)
        }
        ,
        t.prototype.render = function(t, e) {
            var n, r, i;
            return i = t.snapshot,
            n = t.error,
            r = t.isPreview,
            this.markAsPreview(r),
            null != i ? this.renderSnapshot(i, r, e) : this.renderError(n, e)
        }
        ,
        t.prototype.markAsPreview = function(t) {
            return t ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview")
        }
        ,
        t.prototype.renderSnapshot = function(t, e, n) {
            return Turbolinks.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), Turbolinks.Snapshot.wrap(t), e)
        }
        ,
        t.prototype.renderError = function(t, e) {
            return Turbolinks.ErrorRenderer.render(this.delegate, e, t)
        }
        ,
        t
    }()
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.ScrollManager = function() {
        function e(e) {
            this.delegate = e,
            this.onScroll = t(this.onScroll, this),
            this.onScroll = Turbolinks.throttle(this.onScroll)
        }
        return e.prototype.start = function() {
            return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1),
            this.onScroll(),
            this.started = !0)
        }
        ,
        e.prototype.stop = function() {
            return this.started ? (removeEventListener("scroll", this.onScroll, !1),
            this.started = !1) : void 0
        }
        ,
        e.prototype.scrollToElement = function(t) {
            return t.scrollIntoView()
        }
        ,
        e.prototype.scrollToPosition = function(t) {
            var e, n;
            return e = t.x,
            n = t.y,
            window.scrollTo(e, n)
        }
        ,
        e.prototype.onScroll = function() {
            return this.updatePosition({
                x: window.pageXOffset,
                y: window.pageYOffset
            })
        }
        ,
        e.prototype.updatePosition = function(t) {
            var e;
            return this.position = t,
            null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0
        }
        ,
        e
    }()
}
.call(this),
function() {
    Turbolinks.SnapshotCache = function() {
        function t(t) {
            this.size = t,
            this.keys = [],
            this.snapshots = {}
        }
        var e;
        return t.prototype.has = function(t) {
            return e(t)in this.snapshots
        }
        ,
        t.prototype.get = function(t) {
            var e;
            if (this.has(t))
                return e = this.read(t),
                this.touch(t),
                e
        }
        ,
        t.prototype.put = function(t, e) {
            return this.write(t, e),
            this.touch(t),
            e
        }
        ,
        t.prototype.read = function(t) {
            var n;
            return n = e(t),
            this.snapshots[n]
        }
        ,
        t.prototype.write = function(t, n) {
            var r;
            return r = e(t),
            this.snapshots[r] = n
        }
        ,
        t.prototype.touch = function(t) {
            var n, r;
            return r = e(t),
            (n = this.keys.indexOf(r)) > -1 && this.keys.splice(n, 1),
            this.keys.unshift(r),
            this.trim()
        }
        ,
        t.prototype.trim = function() {
            var t, e, n, r, i;
            for (i = [],
            t = 0,
            n = (r = this.keys.splice(this.size)).length; n > t; t++)
                e = r[t],
                i.push(delete this.snapshots[e]);
            return i
        }
        ,
        e = function(t) {
            return Turbolinks.Location.wrap(t).toCacheKey()
        }
        ,
        t
    }()
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.Visit = function() {
        function e(e, n, r) {
            this.controller = e,
            this.action = r,
            this.performScroll = t(this.performScroll, this),
            this.identifier = Turbolinks.uuid(),
            this.location = Turbolinks.Location.wrap(n),
            this.adapter = this.controller.adapter,
            this.state = "initialized",
            this.timingMetrics = {}
        }
        var n;
        return e.prototype.start = function() {
            return "initialized" === this.state ? (this.recordTimingMetric("visitStart"),
            this.state = "started",
            this.adapter.visitStarted(this)) : void 0
        }
        ,
        e.prototype.cancel = function() {
            var t;
            return "started" === this.state ? (null != (t = this.request) && t.cancel(),
            this.cancelRender(),
            this.state = "canceled") : void 0
        }
        ,
        e.prototype.complete = function() {
            var t;
            return "started" === this.state ? (this.recordTimingMetric("visitEnd"),
            this.state = "completed",
            "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this),
            this.controller.visitCompleted(this)) : void 0
        }
        ,
        e.prototype.fail = function() {
            var t;
            return "started" === this.state ? (this.state = "failed",
            "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0
        }
        ,
        e.prototype.changeHistory = function() {
            var t, e;
            return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action,
            e = n(t),
            this.controller[e](this.location, this.restorationIdentifier),
            this.historyChanged = !0)
        }
        ,
        e.prototype.issueRequest = function() {
            return this.shouldIssueRequest() && null == this.request ? (this.progress = 0,
            this.request = new Turbolinks.HttpRequest(this,this.location,this.referrer),
            this.request.send()) : void 0
        }
        ,
        e.prototype.getCachedSnapshot = function() {
            var t;
            return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t
        }
        ,
        e.prototype.hasCachedSnapshot = function() {
            return null != this.getCachedSnapshot()
        }
        ,
        e.prototype.loadCachedSnapshot = function() {
            var t, e;
            return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(),
            this.render(function() {
                var n;
                return this.cacheSnapshot(),
                this.controller.render({
                    snapshot: e,
                    isPreview: t
                }, this.performScroll),
                "function" == typeof (n = this.adapter).visitRendered && n.visitRendered(this),
                t ? void 0 : this.complete()
            })) : void 0
        }
        ,
        e.prototype.loadResponse = function() {
            return null != this.response ? this.render(function() {
                var t, e;
                return this.cacheSnapshot(),
                this.request.failed ? (this.controller.render({
                    error: this.response
                }, this.performScroll),
                "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this),
                this.fail()) : (this.controller.render({
                    snapshot: this.response
                }, this.performScroll),
                "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this),
                this.complete())
            }) : void 0
        }
        ,
        e.prototype.followRedirect = function() {
            return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation,
            this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier),
            this.followedRedirect = !0) : void 0
        }
        ,
        e.prototype.requestStarted = function() {
            var t;
            return this.recordTimingMetric("requestStart"),
            "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0
        }
        ,
        e.prototype.requestProgressed = function(t) {
            var e;
            return this.progress = t,
            "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0
        }
        ,
        e.prototype.requestCompletedWithResponse = function(t, e) {
            return this.response = t,
            null != e && (this.redirectedToLocation = Turbolinks.Location.wrap(e)),
            this.adapter.visitRequestCompleted(this)
        }
        ,
        e.prototype.requestFailedWithStatusCode = function(t, e) {
            return this.response = e,
            this.adapter.visitRequestFailedWithStatusCode(this, t)
        }
        ,
        e.prototype.requestFinished = function() {
            var t;
            return this.recordTimingMetric("requestEnd"),
            "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0
        }
        ,
        e.prototype.performScroll = function() {
            return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(),
            this.scrolled = !0)
        }
        ,
        e.prototype.scrollToRestoredPosition = function() {
            var t, e;
            return null != (t = null != (e = this.restorationData) ? e.scrollPosition : void 0) ? (this.controller.scrollToPosition(t),
            !0) : void 0
        }
        ,
        e.prototype.scrollToAnchor = function() {
            return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor),
            !0) : void 0
        }
        ,
        e.prototype.scrollToTop = function() {
            return this.controller.scrollToPosition({
                x: 0,
                y: 0
            })
        }
        ,
        e.prototype.recordTimingMetric = function(t) {
            var e;
            return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime()
        }
        ,
        e.prototype.getTimingMetrics = function() {
            return Turbolinks.copyObject(this.timingMetrics)
        }
        ,
        n = function(t) {
            switch (t) {
            case "replace":
                return "replaceHistoryWithLocationAndRestorationIdentifier";
            case "advance":
            case "restore":
                return "pushHistoryWithLocationAndRestorationIdentifier"
            }
        }
        ,
        e.prototype.shouldIssueRequest = function() {
            return "restore" !== this.action || !this.hasCachedSnapshot()
        }
        ,
        e.prototype.cacheSnapshot = function() {
            return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(),
            this.snapshotCached = !0)
        }
        ,
        e.prototype.render = function(t) {
            return this.cancelRender(),
            this.frame = requestAnimationFrame((e = this,
            function() {
                return e.frame = null,
                t.call(e)
            }
            ));
            var e
        }
        ,
        e.prototype.cancelRender = function() {
            return this.frame ? cancelAnimationFrame(this.frame) : void 0
        }
        ,
        e
    }()
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.Controller = function() {
        function e() {
            this.clickBubbled = t(this.clickBubbled, this),
            this.clickCaptured = t(this.clickCaptured, this),
            this.pageLoaded = t(this.pageLoaded, this),
            this.history = new Turbolinks.History(this),
            this.view = new Turbolinks.View(this),
            this.scrollManager = new Turbolinks.ScrollManager(this),
            this.restorationData = {},
            this.clearCache(),
            this.setProgressBarDelay(500)
        }
        return e.prototype.start = function() {
            return Turbolinks.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0),
            addEventListener("DOMContentLoaded", this.pageLoaded, !1),
            this.scrollManager.start(),
            this.startHistory(),
            this.started = !0,
            this.enabled = !0) : void 0
        }
        ,
        e.prototype.disable = function() {
            return this.enabled = !1
        }
        ,
        e.prototype.stop = function() {
            return this.started ? (removeEventListener("click", this.clickCaptured, !0),
            removeEventListener("DOMContentLoaded", this.pageLoaded, !1),
            this.scrollManager.stop(),
            this.stopHistory(),
            this.started = !1) : void 0
        }
        ,
        e.prototype.clearCache = function() {
            return this.cache = new Turbolinks.SnapshotCache(10)
        }
        ,
        e.prototype.visit = function(t, e) {
            var n, r;
            return null == e && (e = {}),
            t = Turbolinks.Location.wrap(t),
            this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (r = e.action) ? r : "advance",
            this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0
        }
        ,
        e.prototype.startVisitToLocationWithAction = function(t, e, n) {
            var r;
            return Turbolinks.supported ? (r = this.getRestorationDataForIdentifier(n),
            this.startVisit(t, e, {
                restorationData: r
            })) : window.location = t
        }
        ,
        e.prototype.setProgressBarDelay = function(t) {
            return this.progressBarDelay = t
        }
        ,
        e.prototype.startHistory = function() {
            return this.location = Turbolinks.Location.wrap(window.location),
            this.restorationIdentifier = Turbolinks.uuid(),
            this.history.start(),
            this.history.replace(this.location, this.restorationIdentifier)
        }
        ,
        e.prototype.stopHistory = function() {
            return this.history.stop()
        }
        ,
        e.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(t, e) {
            return this.restorationIdentifier = e,
            this.location = Turbolinks.Location.wrap(t),
            this.history.push(this.location, this.restorationIdentifier)
        }
        ,
        e.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(t, e) {
            return this.restorationIdentifier = e,
            this.location = Turbolinks.Location.wrap(t),
            this.history.replace(this.location, this.restorationIdentifier)
        }
        ,
        e.prototype.historyPoppedToLocationWithRestorationIdentifier = function(t, e) {
            var n;
            return this.restorationIdentifier = e,
            this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier),
            this.startVisit(t, "restore", {
                restorationIdentifier: this.restorationIdentifier,
                restorationData: n,
                historyChanged: !0
            }),
            this.location = Turbolinks.Location.wrap(t)) : this.adapter.pageInvalidated()
        }
        ,
        e.prototype.getCachedSnapshotForLocation = function(t) {
            var e;
            return (e = this.cache.get(t)) ? e.clone() : void 0
        }
        ,
        e.prototype.shouldCacheSnapshot = function() {
            return this.view.getSnapshot().isCacheable()
        }
        ,
        e.prototype.cacheSnapshot = function() {
            var t;
            return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(),
            t = this.view.getSnapshot(),
            this.cache.put(this.lastRenderedLocation, t.clone())) : void 0
        }
        ,
        e.prototype.scrollToAnchor = function(t) {
            var e;
            return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
                x: 0,
                y: 0
            })
        }
        ,
        e.prototype.scrollToElement = function(t) {
            return this.scrollManager.scrollToElement(t)
        }
        ,
        e.prototype.scrollToPosition = function(t) {
            return this.scrollManager.scrollToPosition(t)
        }
        ,
        e.prototype.scrollPositionChanged = function(t) {
            return this.getCurrentRestorationData().scrollPosition = t
        }
        ,
        e.prototype.render = function(t, e) {
            return this.view.render(t, e)
        }
        ,
        e.prototype.viewInvalidated = function() {
            return this.adapter.pageInvalidated()
        }
        ,
        e.prototype.viewWillRender = function(t) {
            return this.notifyApplicationBeforeRender(t)
        }
        ,
        e.prototype.viewRendered = function() {
            return this.lastRenderedLocation = this.currentVisit.location,
            this.notifyApplicationAfterRender()
        }
        ,
        e.prototype.pageLoaded = function() {
            return this.lastRenderedLocation = this.location,
            this.notifyApplicationAfterPageLoad()
        }
        ,
        e.prototype.clickCaptured = function() {
            return removeEventListener("click", this.clickBubbled, !1),
            addEventListener("click", this.clickBubbled, !1)
        }
        ,
        e.prototype.clickBubbled = function(t) {
            var e, n, r;
            return this.enabled && this.clickEventIsSignificant(t) && (n = this.getVisitableLinkForNode(t.target)) && (r = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, r) ? (t.preventDefault(),
            e = this.getActionForLink(n),
            this.visit(r, {
                action: e
            })) : void 0
        }
        ,
        e.prototype.applicationAllowsFollowingLinkToLocation = function(t, e) {
            return !this.notifyApplicationAfterClickingLinkToLocation(t, e).defaultPrevented
        }
        ,
        e.prototype.applicationAllowsVisitingLocation = function(t) {
            return !this.notifyApplicationBeforeVisitingLocation(t).defaultPrevented
        }
        ,
        e.prototype.notifyApplicationAfterClickingLinkToLocation = function(t, e) {
            return Turbolinks.dispatch("turbolinks:click", {
                target: t,
                data: {
                    url: e.absoluteURL
                },
                cancelable: !0
            })
        }
        ,
        e.prototype.notifyApplicationBeforeVisitingLocation = function(t) {
            return Turbolinks.dispatch("turbolinks:before-visit", {
                data: {
                    url: t.absoluteURL
                },
                cancelable: !0
            })
        }
        ,
        e.prototype.notifyApplicationAfterVisitingLocation = function(t) {
            return Turbolinks.dispatch("turbolinks:visit", {
                data: {
                    url: t.absoluteURL
                }
            })
        }
        ,
        e.prototype.notifyApplicationBeforeCachingSnapshot = function() {
            return Turbolinks.dispatch("turbolinks:before-cache")
        }
        ,
        e.prototype.notifyApplicationBeforeRender = function(t) {
            return Turbolinks.dispatch("turbolinks:before-render", {
                data: {
                    newBody: t
                }
            })
        }
        ,
        e.prototype.notifyApplicationAfterRender = function() {
            return Turbolinks.dispatch("turbolinks:render")
        }
        ,
        e.prototype.notifyApplicationAfterPageLoad = function(t) {
            return null == t && (t = {}),
            Turbolinks.dispatch("turbolinks:load", {
                data: {
                    url: this.location.absoluteURL,
                    timing: t
                }
            })
        }
        ,
        e.prototype.startVisit = function(t, e, n) {
            var r;
            return null != (r = this.currentVisit) && r.cancel(),
            this.currentVisit = this.createVisit(t, e, n),
            this.currentVisit.start(),
            this.notifyApplicationAfterVisitingLocation(t)
        }
        ,
        e.prototype.createVisit = function(t, e, n) {
            var r, i, o, s, a;
            return s = (i = null != n ? n : {}).restorationIdentifier,
            o = i.restorationData,
            r = i.historyChanged,
            (a = new Turbolinks.Visit(this,t,e)).restorationIdentifier = null != s ? s : Turbolinks.uuid(),
            a.restorationData = Turbolinks.copyObject(o),
            a.historyChanged = r,
            a.referrer = this.location,
            a
        }
        ,
        e.prototype.visitCompleted = function(t) {
            return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
        }
        ,
        e.prototype.clickEventIsSignificant = function(t) {
            return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
        }
        ,
        e.prototype.getVisitableLinkForNode = function(t) {
            return this.nodeIsVisitable(t) ? Turbolinks.closest(t, "a[href]:not([target]):not([download])") : void 0
        }
        ,
        e.prototype.getVisitableLocationForLink = function(t) {
            var e;
            return e = new Turbolinks.Location(t.getAttribute("href")),
            this.locationIsVisitable(e) ? e : void 0
        }
        ,
        e.prototype.getActionForLink = function(t) {
            var e;
            return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance"
        }
        ,
        e.prototype.nodeIsVisitable = function(t) {
            var e;
            return !(e = Turbolinks.closest(t, "[data-turbolinks]")) || "false" !== e.getAttribute("data-turbolinks")
        }
        ,
        e.prototype.locationIsVisitable = function(t) {
            return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
        }
        ,
        e.prototype.getCurrentRestorationData = function() {
            return this.getRestorationDataForIdentifier(this.restorationIdentifier)
        }
        ,
        e.prototype.getRestorationDataForIdentifier = function(t) {
            var e;
            return null != (e = this.restorationData)[t] ? e[t] : e[t] = {}
        }
        ,
        e
    }()
}
.call(this),
function() {
    !function() {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning"))
            for (; t = t.parentNode; )
                if (t === document.body)
                    return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML)
    }()
}
.call(this),
function() {
    var t, e, n;
    Turbolinks.start = function() {
        return e() ? (null == Turbolinks.controller && (Turbolinks.controller = t()),
        Turbolinks.controller.start()) : void 0
    }
    ,
    e = function() {
        return null == window.Turbolinks && (window.Turbolinks = Turbolinks),
        n()
    }
    ,
    t = function() {
        var t;
        return (t = new Turbolinks.Controller).adapter = new Turbolinks.BrowserAdapter(t),
        t
    }
    ,
    (n = function() {
        return window.Turbolinks === Turbolinks
    }
    )() && Turbolinks.start()
}
.call(this),
function() {
    var t = this;
    (function() {
        (function() {
            var t = [].slice;
            this.ActionCable = {
                INTERNAL: {
                    message_types: {
                        welcome: "welcome",
                        ping: "ping",
                        confirmation: "confirm_subscription",
                        rejection: "reject_subscription"
                    },
                    default_mount_path: "/cable",
                    protocols: ["actioncable-v1-json", "actioncable-unsupported"]
                },
                WebSocket: window.WebSocket,
                logger: window.console,
                createConsumer: function(t) {
                    var n;
                    return null == t && (t = null != (n = this.getConfig("url")) ? n : this.INTERNAL.default_mount_path),
                    new e.Consumer(this.createWebSocketURL(t))
                },
                getConfig: function(t) {
                    var e;
                    return null != (e = document.head.querySelector("meta[name='action-cable-" + t + "']")) ? e.getAttribute("content") : void 0
                },
                createWebSocketURL: function(t) {
                    var e;
                    return t && !/^wss?:/i.test(t) ? ((e = document.createElement("a")).href = t,
                    e.href = e.href,
                    e.protocol = e.protocol.replace("http", "ws"),
                    e.href) : t
                },
                startDebugging: function() {
                    return this.debugging = !0
                },
                stopDebugging: function() {
                    return this.debugging = null
                },
                log: function() {
                    var e, n;
                    if (e = 1 <= arguments.length ? t.call(arguments, 0) : [],
                    this.debugging)
                        return e.push(Date.now()),
                        (n = this.logger).log.apply(n, ["[ActionCable]"].concat(t.call(e)))
                }
            }
        }
        ).call(this)
    }
    ).call(t);
    var e = t.ActionCable;
    (function() {
        (function() {
            var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            e.ConnectionMonitor = function() {
                function n(e) {
                    this.connection = e,
                    this.visibilityDidChange = t(this.visibilityDidChange, this),
                    this.reconnectAttempts = 0
                }
                var r, i, o;
                return n.pollInterval = {
                    min: 3,
                    max: 30
                },
                n.staleThreshold = 6,
                n.prototype.start = function() {
                    if (!this.isRunning())
                        return this.startedAt = i(),
                        delete this.stoppedAt,
                        this.startPolling(),
                        document.addEventListener("visibilitychange", this.visibilityDidChange),
                        e.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms")
                }
                ,
                n.prototype.stop = function() {
                    if (this.isRunning())
                        return this.stoppedAt = i(),
                        this.stopPolling(),
                        document.removeEventListener("visibilitychange", this.visibilityDidChange),
                        e.log("ConnectionMonitor stopped")
                }
                ,
                n.prototype.isRunning = function() {
                    return null != this.startedAt && null == this.stoppedAt
                }
                ,
                n.prototype.recordPing = function() {
                    return this.pingedAt = i()
                }
                ,
                n.prototype.recordConnect = function() {
                    return this.reconnectAttempts = 0,
                    this.recordPing(),
                    delete this.disconnectedAt,
                    e.log("ConnectionMonitor recorded connect")
                }
                ,
                n.prototype.recordDisconnect = function() {
                    return this.disconnectedAt = i(),
                    e.log("ConnectionMonitor recorded disconnect")
                }
                ,
                n.prototype.startPolling = function() {
                    return this.stopPolling(),
                    this.poll()
                }
                ,
                n.prototype.stopPolling = function() {
                    return clearTimeout(this.pollTimeout)
                }
                ,
                n.prototype.poll = function() {
                    return this.pollTimeout = setTimeout((t = this,
                    function() {
                        return t.reconnectIfStale(),
                        t.poll()
                    }
                    ), this.getPollInterval());
                    var t
                }
                ,
                n.prototype.getPollInterval = function() {
                    var t, e, n, i;
                    return n = (i = this.constructor.pollInterval).min,
                    e = i.max,
                    t = 5 * Math.log(this.reconnectAttempts + 1),
                    Math.round(1e3 * r(t, n, e))
                }
                ,
                n.prototype.reconnectIfStale = function() {
                    if (this.connectionIsStale())
                        return e.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + o(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s"),
                        this.reconnectAttempts++,
                        this.disconnectedRecently() ? e.log("ConnectionMonitor skipping reopening recent disconnect") : (e.log("ConnectionMonitor reopening"),
                        this.connection.reopen())
                }
                ,
                n.prototype.connectionIsStale = function() {
                    var t;
                    return o(null != (t = this.pingedAt) ? t : this.startedAt) > this.constructor.staleThreshold
                }
                ,
                n.prototype.disconnectedRecently = function() {
                    return this.disconnectedAt && o(this.disconnectedAt) < this.constructor.staleThreshold
                }
                ,
                n.prototype.visibilityDidChange = function() {
                    if ("visible" === document.visibilityState)
                        return setTimeout((t = this,
                        function() {
                            if (t.connectionIsStale() || !t.connection.isOpen())
                                return e.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState),
                                t.connection.reopen()
                        }
                        ), 200);
                    var t
                }
                ,
                i = function() {
                    return (new Date).getTime()
                }
                ,
                o = function(t) {
                    return (i() - t) / 1e3
                }
                ,
                r = function(t, e, n) {
                    return Math.max(e, Math.min(n, t))
                }
                ,
                n
            }()
        }
        ).call(this),
        function() {
            var t, n, r, i, o, s = [].slice, a = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }, u = [].indexOf || function(t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (e in this && this[e] === t)
                        return e;
                return -1
            }
            ;
            i = e.INTERNAL,
            n = i.message_types,
            r = i.protocols,
            o = 2 <= r.length ? s.call(r, 0, t = r.length - 1) : (t = 0,
            []),
            r[t++],
            e.Connection = function() {
                function t(t) {
                    this.consumer = t,
                    this.open = a(this.open, this),
                    this.subscriptions = this.consumer.subscriptions,
                    this.monitor = new e.ConnectionMonitor(this),
                    this.disconnected = !0
                }
                return t.reopenDelay = 500,
                t.prototype.send = function(t) {
                    return !!this.isOpen() && (this.webSocket.send(JSON.stringify(t)),
                    !0)
                }
                ,
                t.prototype.open = function() {
                    return this.isActive() ? (e.log("Attempted to open WebSocket, but existing socket is " + this.getState()),
                    !1) : (e.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + r),
                    null != this.webSocket && this.uninstallEventHandlers(),
                    this.webSocket = new e.WebSocket(this.consumer.url,r),
                    this.installEventHandlers(),
                    this.monitor.start(),
                    !0)
                }
                ,
                t.prototype.close = function(t) {
                    var e;
                    if ((null != t ? t : {
                        allowReconnect: !0
                    }).allowReconnect || this.monitor.stop(),
                    this.isActive())
                        return null != (e = this.webSocket) ? e.close() : void 0
                }
                ,
                t.prototype.reopen = function() {
                    var t;
                    if (e.log("Reopening WebSocket, current state is " + this.getState()),
                    !this.isActive())
                        return this.open();
                    try {
                        return this.close()
                    } catch (n) {
                        return t = n,
                        e.log("Failed to reopen WebSocket", t)
                    } finally {
                        e.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms"),
                        setTimeout(this.open, this.constructor.reopenDelay)
                    }
                }
                ,
                t.prototype.getProtocol = function() {
                    var t;
                    return null != (t = this.webSocket) ? t.protocol : void 0
                }
                ,
                t.prototype.isOpen = function() {
                    return this.isState("open")
                }
                ,
                t.prototype.isActive = function() {
                    return this.isState("open", "connecting")
                }
                ,
                t.prototype.isProtocolSupported = function() {
                    var t;
                    return t = this.getProtocol(),
                    u.call(o, t) >= 0
                }
                ,
                t.prototype.isState = function() {
                    var t, e;
                    return e = 1 <= arguments.length ? s.call(arguments, 0) : [],
                    t = this.getState(),
                    u.call(e, t) >= 0
                }
                ,
                t.prototype.getState = function() {
                    var t, e;
                    for (e in WebSocket)
                        if (WebSocket[e] === (null != (t = this.webSocket) ? t.readyState : void 0))
                            return e.toLowerCase();
                    return null
                }
                ,
                t.prototype.installEventHandlers = function() {
                    var t, e;
                    for (t in this.events)
                        e = this.events[t].bind(this),
                        this.webSocket["on" + t] = e
                }
                ,
                t.prototype.uninstallEventHandlers = function() {
                    var t;
                    for (t in this.events)
                        this.webSocket["on" + t] = function() {}
                }
                ,
                t.prototype.events = {
                    message: function(t) {
                        var e, r, i;
                        if (this.isProtocolSupported())
                            switch (e = (i = JSON.parse(t.data)).identifier,
                            r = i.message,
                            i.type) {
                            case n.welcome:
                                return this.monitor.recordConnect(),
                                this.subscriptions.reload();
                            case n.ping:
                                return this.monitor.recordPing();
                            case n.confirmation:
                                return this.subscriptions.notify(e, "connected");
                            case n.rejection:
                                return this.subscriptions.reject(e);
                            default:
                                return this.subscriptions.notify(e, "received", r)
                            }
                    },
                    open: function() {
                        if (e.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol"),
                        this.disconnected = !1,
                        !this.isProtocolSupported())
                            return e.log("Protocol is unsupported. Stopping monitor and disconnecting."),
                            this.close({
                                allowReconnect: !1
                            })
                    },
                    close: function() {
                        if (e.log("WebSocket onclose event"),
                        !this.disconnected)
                            return this.disconnected = !0,
                            this.monitor.recordDisconnect(),
                            this.subscriptions.notifyAll("disconnected", {
                                willAttemptReconnect: this.monitor.isRunning()
                            })
                    },
                    error: function() {
                        return e.log("WebSocket onerror event")
                    }
                },
                t
            }()
        }
        .call(this),
        function() {
            var t = [].slice;
            e.Subscriptions = function() {
                function n(t) {
                    this.consumer = t,
                    this.subscriptions = []
                }
                return n.prototype.create = function(t, n) {
                    var r, i, o;
                    return i = "object" == typeof (r = t) ? r : {
                        channel: r
                    },
                    o = new e.Subscription(this.consumer,i,n),
                    this.add(o)
                }
                ,
                n.prototype.add = function(t) {
                    return this.subscriptions.push(t),
                    this.consumer.ensureActiveConnection(),
                    this.notify(t, "initialized"),
                    this.sendCommand(t, "subscribe"),
                    t
                }
                ,
                n.prototype.remove = function(t) {
                    return this.forget(t),
                    this.findAll(t.identifier).length || this.sendCommand(t, "unsubscribe"),
                    t
                }
                ,
                n.prototype.reject = function(t) {
                    var e, n, r, i, o;
                    for (i = [],
                    e = 0,
                    n = (r = this.findAll(t)).length; e < n; e++)
                        o = r[e],
                        this.forget(o),
                        this.notify(o, "rejected"),
                        i.push(o);
                    return i
                }
                ,
                n.prototype.forget = function(t) {
                    var e;
                    return this.subscriptions = function() {
                        var n, r, i, o;
                        for (o = [],
                        n = 0,
                        r = (i = this.subscriptions).length; n < r; n++)
                            (e = i[n]) !== t && o.push(e);
                        return o
                    }
                    .call(this),
                    t
                }
                ,
                n.prototype.findAll = function(t) {
                    var e, n, r, i, o;
                    for (i = [],
                    e = 0,
                    n = (r = this.subscriptions).length; e < n; e++)
                        (o = r[e]).identifier === t && i.push(o);
                    return i
                }
                ,
                n.prototype.reload = function() {
                    var t, e, n, r, i;
                    for (r = [],
                    t = 0,
                    e = (n = this.subscriptions).length; t < e; t++)
                        i = n[t],
                        r.push(this.sendCommand(i, "subscribe"));
                    return r
                }
                ,
                n.prototype.notifyAll = function() {
                    var e, n, r, i, o, s, a;
                    for (n = arguments[0],
                    e = 2 <= arguments.length ? t.call(arguments, 1) : [],
                    s = [],
                    r = 0,
                    i = (o = this.subscriptions).length; r < i; r++)
                        a = o[r],
                        s.push(this.notify.apply(this, [a, n].concat(t.call(e))));
                    return s
                }
                ,
                n.prototype.notify = function() {
                    var e, n, r, i, o, s, a;
                    for (s = arguments[0],
                    n = arguments[1],
                    e = 3 <= arguments.length ? t.call(arguments, 2) : [],
                    o = [],
                    r = 0,
                    i = (a = "string" == typeof s ? this.findAll(s) : [s]).length; r < i; r++)
                        s = a[r],
                        o.push("function" == typeof s[n] ? s[n].apply(s, e) : void 0);
                    return o
                }
                ,
                n.prototype.sendCommand = function(t, e) {
                    var n;
                    return n = t.identifier,
                    this.consumer.send({
                        command: e,
                        identifier: n
                    })
                }
                ,
                n
            }()
        }
        .call(this),
        function() {
            e.Subscription = function() {
                function t(t, n, r) {
                    this.consumer = t,
                    null == n && (n = {}),
                    this.identifier = JSON.stringify(n),
                    e(this, r)
                }
                var e;
                return t.prototype.perform = function(t, e) {
                    return null == e && (e = {}),
                    e.action = t,
                    this.send(e)
                }
                ,
                t.prototype.send = function(t) {
                    return this.consumer.send({
                        command: "message",
                        identifier: this.identifier,
                        data: JSON.stringify(t)
                    })
                }
                ,
                t.prototype.unsubscribe = function() {
                    return this.consumer.subscriptions.remove(this)
                }
                ,
                e = function(t, e) {
                    var n, r;
                    if (null != e)
                        for (n in e)
                            r = e[n],
                            t[n] = r;
                    return t
                }
                ,
                t
            }()
        }
        .call(this),
        function() {
            e.Consumer = function() {
                function t(t) {
                    this.url = t,
                    this.subscriptions = new e.Subscriptions(this),
                    this.connection = new e.Connection(this)
                }
                return t.prototype.send = function(t) {
                    return this.connection.send(t)
                }
                ,
                t.prototype.connect = function() {
                    return this.connection.open()
                }
                ,
                t.prototype.disconnect = function() {
                    return this.connection.close({
                        allowReconnect: !1
                    })
                }
                ,
                t.prototype.ensureActiveConnection = function() {
                    if (!this.connection.isActive())
                        return this.connection.open()
                }
                ,
                t
            }()
        }
        .call(this)
    }
    ).call(this),
    "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
}
.call(this),
function() {
    this.App || (this.App = {}),
    App.cable = ActionCable.createConsumer()
}
.call(this),
function() {
    $(document).on("turbolinks:load", function() {
        var t;
        if (App.rooms && (App.cable.subscriptions.remove(App.rooms),
        App.rooms = null),
        (t = $("[data-room-name]")).length)
            return App.rooms = App.cable.subscriptions.create({
                channel: "RoomsChannel",
                room_name: t.data("room-name")
            }, {
                connected: function() {
                    return jQuery.ajax({
                        url: "/rooms/" + t.data("room-name"),
                        type: "GET",
                        data: {
                            update: "true"
                        },
                        dataType: "html",
                        success: function(t) {
                            $("#roomSkillChecksDiv").html(t)
                        }
                    })
                },
                disconnected: function() {},
                received: function(t) {
                    return $("#roomSkillChecksDiv").html(t.html),
                    $("#currentCheck").hide(),
                    $("#currentCheck").show("blind")
                }
            })
    })
}
.call(this),
function() {}
.call(this),
function() {}
.call(this),
function() {
    this.addDie = function(t) {
        var e, n, r;
        if (e = document.getElementById("die_count_" + t),
        (r = parseInt(e.value)) <= 7)
            for (r += 1,
            e.value = r,
            n = document.getElementById("dicePreviewDiv").firstElementChild; null !== n; ) {
                if (n.dataset.dieType === t && n.classList.contains("hidden-die")) {
                    n.parentNode.appendChild(n),
                    n.classList.remove("hidden-die");
                    break
                }
                n = n.nextElementSibling
            }
    }
    ,
    this.removeDie = function(t, e) {
        var n, r;
        n = document.getElementById("die_count_" + t),
        (r = parseInt(n.value)) >= 1 && (r -= 1,
        n.value = r,
        e.classList.add("hidden-die"))
    }
    ,
    $(document).on("change", "#diceSetChoice", function() {
        var t;
        t = [t = [location.protocol, "//", location.host, location.pathname].join(""), "?", "dice_set=", $(this).val()].join(""),
        window.location = t
    }),
    $(document).on("focusout", "#player", function() {
        return jQuery.ajax({
            url: "/welcome/",
            type: "PATCH",
            data: {
                player: this.value
            },
            dataType: "text",
            success: function(t) {
                $("#player").val(t)
            }
        })
    }),
    $(document).on("keypress", "#player", function(t) {
        var e;
        if ("U+000A" === (e = t.keyIdentifier) || "Enter" === e || 13 === t.keyCode)
            return t.preventDefault(),
            $("#player").blur()
    })
}
.call(this),
function() {}
.call(this),
function() {}
.call(this);
