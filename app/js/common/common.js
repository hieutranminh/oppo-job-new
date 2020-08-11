! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";

    function c(a, b, c) {
        var d, e = (b = b || ga).createElement("script");
        if (e.text = a, c)
            for (d in ua) c[d] && (e[d] = c[d]);
        b.head.appendChild(e).parentNode.removeChild(e)
    }

    function d(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ma[na.call(a)] || "object" : typeof a
    }

    function e(a) {
        var b = !!a && "length" in a && a.length,
            c = d(a);
        return !sa(a) && !ta(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function f(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }

    function g(a, b, c) {
        return sa(b) ? va.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? va.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? va.grep(a, function(a) {
            return la.call(b, a) > -1 !== c
        }) : va.filter(b, a, c)
    }

    function h(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function i(a) {
        var b = {};
        return va.each(a.match(Ga) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function j(a) {
        return a
    }

    function k(a) {
        throw a
    }

    function l(a, b, c, d) {
        var e;
        try {
            a && sa(e = a.promise) ? e.call(a).done(b).fail(c) : a && sa(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }

    function m() {
        ga.removeEventListener("DOMContentLoaded", m), a.removeEventListener("load", m), va.ready()
    }

    function n(a, b) {
        return b.toUpperCase()
    }

    function o(a) {
        return a.replace(Ka, "ms-").replace(La, n)
    }

    function p() {
        this.expando = va.expando + p.uid++
    }

    function q(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Pa.test(a) ? JSON.parse(a) : a)
    }

    function r(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Qa, "-$&").toLowerCase(), "string" == typeof(c = a.getAttribute(d))) {
                try {
                    c = q(c)
                } catch (a) {}
                Oa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function s(a, b, c, d) {
        var e, f, g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return va.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (va.cssNumber[b] ? "" : "px"),
            k = (va.cssNumber[b] || "px" !== j && +i) && Sa.exec(va.css(a, b));
        if (k && k[3] !== j) {
            for (i /= 2, j = j || k[3], k = +i || 1; g--;) va.style(a, b, k + j), (1 - f) * (1 - (f = h() / i || .5)) <= 0 && (g = 0), k /= f;
            k *= 2, va.style(a, b, k + j), c = c || []
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function t(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = Wa[d];
        return e || (b = c.body.appendChild(c.createElement(d)), e = va.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Wa[d] = e, e)
    }

    function u(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)(d = a[f]).style && (c = d.style.display, b ? ("none" === c && (e[f] = Na.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Ua(d) && (e[f] = t(d))) : "none" !== c && (e[f] = "none", Na.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }

    function v(a, b) {
        var c;
        return c = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && f(a, b) ? va.merge([a], c) : c
    }

    function w(a, b) {
        for (var c = 0, d = a.length; c < d; c++) Na.set(a[c], "globalEval", !b || Na.get(b[c], "globalEval"))
    }

    function x(a, b, c, e, f) {
        for (var g, h, i, j, k, l, m = b.createDocumentFragment(), n = [], o = 0, p = a.length; o < p; o++)
            if ((g = a[o]) || 0 === g)
                if ("object" === d(g)) va.merge(n, g.nodeType ? [g] : g);
                else if (_a.test(g)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (Ya.exec(g) || ["", ""])[1].toLowerCase(), j = $a[i] || $a._default, h.innerHTML = j[1] + va.htmlPrefilter(g) + j[2], l = j[0]; l--;) h = h.lastChild;
                    va.merge(n, h.childNodes), (h = m.firstChild).textContent = ""
                } else n.push(b.createTextNode(g));
        for (m.textContent = "", o = 0; g = n[o++];)
            if (e && va.inArray(g, e) > -1) f && f.push(g);
            else if (k = va.contains(g.ownerDocument, g), h = v(m.appendChild(g), "script"), k && w(h), c)
                for (l = 0; g = h[l++];) Za.test(g.type || "") && c.push(g);
        return m
    }

    function y() {
        return !0
    }

    function z() {
        return !1
    }

    function A() {
        try {
            return ga.activeElement
        } catch (a) {}
    }

    function B(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) B(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = z;
        else if (!e) return a;
        return 1 === f && (g = e, (e = function(a) {
            return va().off(a), g.apply(this, arguments)
        }).guid = g.guid || (g.guid = va.guid++)), a.each(function() {
            va.event.add(this, b, e, d, c)
        })
    }

    function C(a, b) {
        return f(a, "table") && f(11 !== b.nodeType ? b : b.firstChild, "tr") ? va(a).children("tbody")[0] || a : a
    }

    function D(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function E(a) {
        return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), a
    }

    function F(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (Na.hasData(a) && (f = Na.access(a), g = Na.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) va.event.add(b, e, j[e][c])
            }
            Oa.hasData(a) && (h = Oa.access(a), i = va.extend({}, h), Oa.set(b, i))
        }
    }

    function G(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Xa.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function H(a, b, d, e) {
        b = ja.apply([], b);
        var f, g, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            o = b[0],
            p = sa(o);
        if (p || m > 1 && "string" == typeof o && !ra.checkClone && gb.test(o)) return a.each(function(c) {
            var f = a.eq(c);
            p && (b[0] = o.call(this, c, f.html())), H(f, b, d, e)
        });
        if (m && (f = x(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
            for (i = (h = va.map(v(f, "script"), D)).length; l < m; l++) j = f, l !== n && (j = va.clone(j, !0, !0), i && va.merge(h, v(j, "script"))), d.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, va.map(h, E), l = 0; l < i; l++) j = h[l], Za.test(j.type || "") && !Na.access(j, "globalEval") && va.contains(k, j) && (j.src && "module" !== (j.type || "").toLowerCase() ? va._evalUrl && va._evalUrl(j.src) : c(j.textContent.replace(hb, ""), k, j))
        }
        return a
    }

    function I(a, b, c) {
        for (var d, e = b ? va.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || va.cleanData(v(d)), d.parentNode && (c && va.contains(d.ownerDocument, d) && w(v(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function J(a, b, c) {
        var d, e, f, g, h = a.style;
        return (c = c || jb(a)) && ("" !== (g = c.getPropertyValue(b) || c[b]) || va.contains(a.ownerDocument, a) || (g = va.style(a, b)), !ra.pixelBoxStyles() && ib.test(g) && kb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function K(a, b) {
        return {
            get: function() {
                if (!a()) return (this.get = b).apply(this, arguments);
                delete this.get
            }
        }
    }

    function L(a) {
        if (a in qb) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = pb.length; c--;)
            if ((a = pb[c] + b) in qb) return a
    }

    function M(a) {
        var b = va.cssProps[a];
        return b || (b = va.cssProps[a] = L(a) || a), b
    }

    function N(a, b, c) {
        var d = Sa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function O(a, b, c, d, e, f) {
        var g = "width" === b ? 1 : 0,
            h = 0,
            i = 0;
        if (c === (d ? "border" : "content")) return 0;
        for (; g < 4; g += 2) "margin" === c && (i += va.css(a, c + Ta[g], !0, e)), d ? ("content" === c && (i -= va.css(a, "padding" + Ta[g], !0, e)), "margin" !== c && (i -= va.css(a, "border" + Ta[g] + "Width", !0, e))) : (i += va.css(a, "padding" + Ta[g], !0, e), "padding" !== c ? i += va.css(a, "border" + Ta[g] + "Width", !0, e) : h += va.css(a, "border" + Ta[g] + "Width", !0, e));
        return !d && f >= 0 && (i += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - f - i - h - .5))), i
    }

    function P(a, b, c) {
        var d = jb(a),
            e = J(a, b, d),
            f = "border-box" === va.css(a, "boxSizing", !1, d),
            g = f;
        if (ib.test(e)) {
            if (!c) return e;
            e = "auto"
        }
        return g = g && (ra.boxSizingReliable() || e === a.style[b]), ("auto" === e || !parseFloat(e) && "inline" === va.css(a, "display", !1, d)) && (e = a["offset" + b[0].toUpperCase() + b.slice(1)], g = !0), (e = parseFloat(e) || 0) + O(a, b, c || (f ? "border" : "content"), g, d, e) + "px"
    }

    function Q(a, b, c, d, e) {
        return new Q.prototype.init(a, b, c, d, e)
    }

    function R() {
        sb && (!1 === ga.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(R) : a.setTimeout(R, va.fx.interval), va.fx.tick())
    }

    function S() {
        return a.setTimeout(function() {
            rb = void 0
        }), rb = Date.now()
    }

    function T(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) e["margin" + (c = Ta[d])] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function U(a, b, c) {
        for (var d, e = (X.tweeners[b] || []).concat(X.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function V(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && Ua(a),
            q = Na.get(a, "fxshow");
        c.queue || (null == (g = va._queueHooks(a, "fx")).unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, va.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], tb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || va.style(a, d)
            } if ((i = !va.isEmptyObject(b)) || !va.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], null == (j = q && q.display) && (j = Na.get(a, "display")), "none" === (k = va.css(a, "display")) && (j ? k = j : (u([a], !0), j = a.style.display || j, k = va.css(a, "display"), u([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === va.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = Na.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && u([a], !0), m.done(function() {
                p || u([a]), Na.remove(a, "fxshow");
                for (d in n) va.style(a, d, n[d])
            })), i = U(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function W(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = o(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = va.cssHooks[d]) && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function X(a, b, c) {
        var d, e, f = 0,
            g = X.prefilters.length,
            h = va.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = rb || S(), c = Math.max(0, j.startTime + j.duration - b), d = 1 - (c / j.duration || 0), f = 0, g = j.tweens.length; f < g; f++) j.tweens[f].run(d);
                return h.notifyWith(a, [j, d, c]), d < 1 && g ? c : (g || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: va.extend({}, b),
                opts: va.extend(!0, {
                    specialEasing: {},
                    easing: va.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: rb || S(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = va.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (W(k, j.opts.specialEasing); f < g; f++)
            if (d = X.prefilters[f].call(j, a, k, j.opts)) return sa(d.stop) && (va._queueHooks(j.elem, j.opts.queue).stop = d.stop.bind(d)), d;
        return va.map(k, U, j), sa(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), va.fx.timer(va.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j
    }

    function Y(a) {
        return (a.match(Ga) || []).join(" ")
    }

    function Z(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function $(a) {
        return Array.isArray(a) ? a : "string" == typeof a ? a.match(Ga) || [] : []
    }

    function _(a, b, c, e) {
        var f;
        if (Array.isArray(b)) va.each(b, function(b, d) {
            c || Fb.test(a) ? e(a, d) : _(a + "[" + ("object" == typeof d && null != d ? b : "") + "]", d, c, e)
        });
        else if (c || "object" !== d(b)) e(a, b);
        else
            for (f in b) _(a + "[" + f + "]", b[f], c, e)
    }

    function aa(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(Ga) || [];
            if (sa(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function ba(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, va.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Rb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function ca(a, b) {
        var c, d, e = va.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && va.extend(!0, a, d), a
    }

    function da(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
             "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function ea(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (!(g = j[i + " " + f] || j["* " + f]))
                        for (e in j)
                            if ((h = e.split(" "))[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                                break
                            } if (!0 !== g)
                        if (g && a.throws) b = g(b);
                        else try {
                            b = g(b)
                        } catch (a) {
                            return {
                                state: "parsererror",
                                error: g ? a : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }
    var fa = [],
        ga = a.document,
        ha = Object.getPrototypeOf,
        ia = fa.slice,
        ja = fa.concat,
        ka = fa.push,
        la = fa.indexOf,
        ma = {},
        na = ma.toString,
        oa = ma.hasOwnProperty,
        pa = oa.toString,
        qa = pa.call(Object),
        ra = {},
        sa = function(a) {
            return "function" == typeof a && "number" != typeof a.nodeType
        },
        ta = function(a) {
            return null != a && a === a.window
        },
        ua = {
            type: !0,
            src: !0,
            noModule: !0
        },
        va = function(a, b) {
            return new va.fn.init(a, b)
        },
        wa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    va.fn = va.prototype = {
        jquery: "3.3.1",
        constructor: va,
        length: 0,
        toArray: function() {
            return ia.call(this)
        },
        get: function(a) {
            return null == a ? ia.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = va.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return va.each(this, a)
        },
        map: function(a) {
            return this.pushStack(va.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(ia.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ka,
        sort: fa.sort,
        splice: fa.splice
    }, va.extend = va.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || sa(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], g !== (d = a[b]) && (j && d && (va.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && va.isPlainObject(c) ? c : {}, g[b] = va.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, va.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== na.call(a) || (b = ha(a)) && ("function" != typeof(c = oa.call(b, "constructor") && b.constructor) || pa.call(c) !== qa))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        globalEval: function(a) {
            c(a)
        },
        each: function(a, b) {
            var c, d = 0;
            if (e(a))
                for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++);
            else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(wa, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (e(Object(a)) ? va.merge(c, "string" == typeof a ? [a] : a) : ka.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : la.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, f = a.length, g = !c; e < f; e++) !b(a[e], e) !== g && d.push(a[e]);
            return d
        },
        map: function(a, b, c) {
            var d, f, g = 0,
                h = [];
            if (e(a))
                for (d = a.length; g < d; g++) null != (f = b(a[g], g, c)) && h.push(f);
            else
                for (g in a) null != (f = b(a[g], g, c)) && h.push(f);
            return ja.apply([], h)
        },
        guid: 1,
        support: ra
    }), "function" == typeof Symbol && (va.fn[Symbol.iterator] = fa[Symbol.iterator]), va.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        ma["[object " + b + "]"] = b.toLowerCase()
    });
    var xa = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, k, m = b && b.ownerDocument,
                o = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
            if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
                if (11 !== o && (i = ra.exec(a)))
                    if (e = i[1]) {
                        if (9 === o) {
                            if (!(g = b.getElementById(e))) return c;
                            if (g.id === e) return c.push(g), c
                        } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c
                    } else {
                        if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                    } if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                    if (1 !== o) m = b, k = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), f = (j = A(a)).length; f--;) j[f] = "#" + h + " " + n(j[f]);
                        k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
                    }
                    if (k) try {
                        return $.apply(c, m.querySelectorAll(k)), c
                    } catch (a) {} finally {
                        h === O && b.removeAttribute("id")
                    }
                }
            }
            return C(a.replace(ha, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[O] = !0, a
        }

        function e(a) {
            var b = H.createElement("fieldset");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return function(b) {
                return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function k(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function l(a) {
            return a && void 0 !== a.getElementsByTagName && a
        }

        function m() {}

        function n(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function o(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = R++;
            return b.first ? function(b, c, e) {
                for (; b = b[d];)
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [Q, h];
                if (i) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || g)
                            if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function q(a, c, d) {
            for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
            return d
        }

        function r(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function s(a, b, c, e, f, g) {
            return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = d || q(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? p : r(p, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function t(a) {
            for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                return a === b
            }, g, !0), j = o(function(a) {
                return aa(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e
            }]; h < e; h++)
                if (c = x.relative[a[h].type]) k = [o(p(k), c)];
                else {
                    if ((c = x.filter[a[h].type].apply(null, a[h].matches))[O]) {
                        for (d = ++h; d < e && !x.relative[a[d].type]; d++);
                        return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ha, "$1"), c, h < d && t(a.slice(h, d)), d < e && t(a = a.slice(d)), d < e && n(a))
                    }
                    k.push(c)
                } return p(k)
        }

        function u(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        q = [],
                        s = D,
                        t = d || f && x.find.TAG("*", j),
                        u = Q += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];)
                                if (m(k, g || H, h)) {
                                    i.push(k);
                                    break
                                } j && (Q = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, q, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
                            q = r(q)
                        }
                        $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (Q = u, D = s), p
                };
            return e ? d(g) : g
        }
        var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date,
            P = a.document,
            Q = 0,
            R = 0,
            S = c(),
            T = c(),
            U = c(),
            V = function(a, b) {
                return a === b && (F = !0), 0
            },
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
            fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
            ga = new RegExp(ca + "+", "g"),
            ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"),
            ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            la = new RegExp(fa),
            ma = new RegExp("^" + da + "$"),
            na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da + "|[*])"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + fa),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            oa = /^(?:input|select|textarea|button)$/i,
            pa = /^h\d$/i,
            qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sa = /[+~]/,
            ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            ua = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            wa = function(a, b) {
                return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            xa = function() {
                G()
            },
            ya = o(function(a) {
                return !0 === a.disabled && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
        } catch (a) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        w = b.support = {}, z = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, G = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : P;
            return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), w.getElementsByTagName = e(function(a) {
                return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
            }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function(a) {
                return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
            }), w.getById ? (x.filter.ID = function(a) {
                var b = a.replace(ta, ua);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }, x.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && J) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (x.filter.ID = function(a) {
                var b = a.replace(ta, ua);
                return function(a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, x.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && J) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if ((c = f.getAttributeNode("id")) && c.value === a) return [f];
                        for (e = b.getElementsByName(a), d = 0; f = e[d++];)
                            if ((c = f.getAttributeNode("id")) && c.value === a) return [f]
                    }
                    return []
                }
            }), x.find.TAG = w.getElementsByTagName ? function(a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, x.find.CLASS = w.getElementsByClassName && function(a, b) {
                if (void 0 !== b.getElementsByClassName && J) return b.getElementsByClassName(a)
            }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function(a) {
                I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
            }), e(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = H.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
            })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function(a) {
                w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa)
            }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, V = b ? function(a, b) {
                if (a === b) return F = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c || (1 & (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return F = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
            }, H) : H
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
                var d = M.call(a, c);
                if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (a) {}
            return b(c, H, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== H && G(a), N(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== H && G(a);
            var c = x.attrHandle[b.toLowerCase()],
                d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
            return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.escape = function(a) {
            return (a + "").replace(va, wa)
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return E = null, a
        }, y = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += y(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += y(b);
            return c
        }, (x = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ta, ua).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = S[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (t = (n = (j = (k = (l = (m = q)[O] || (m[O] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] || [])[0] === Q && j[1]) && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [Q, n, t];
                                        break
                                    }
                            } else if (s && (t = n = (j = (k = (l = (m = b)[O] || (m[O] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] || [])[0] === Q && j[1]), !1 === t)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && ((k = (l = m[O] || (m[O] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] = [Q, t]), m !== b)););
                            return (t -= e) === d || t % d == 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) a[d = aa(a, e[g])] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = B(a.replace(ha, "$1"));
                    return e[O] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(ta, ua),
                        function(b) {
                            return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === I
                },
                focus: function(a) {
                    return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: j(!1),
                disabled: j(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !x.pseudos.empty(a)
                },
                header: function(a) {
                    return pa.test(a.nodeName)
                },
                input: function(a) {
                    return oa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: k(function() {
                    return [0]
                }),
                last: k(function(a, b) {
                    return [b - 1]
                }),
                eq: k(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: k(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: k(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: k(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: k(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }).pseudos.nth = x.pseudos.eq;
        for (v in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[v] = h(v);
        for (v in {
            submit: !0,
            reset: !0
        }) x.pseudos[v] = i(v);
        return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = T[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = x.preFilter; h;) {
                d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
        }, B = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = U[a + " "];
            if (!f) {
                for (b || (b = A(a)), c = b.length; c--;)(f = t(b[c]))[O] ? d.push(f) : e.push(f);
                (f = U(a, u(e, d))).selector = a
            }
            return f
        }, C = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                k = !d && A(a = j.selector || a);
            if (c = c || [], 1 === k.length) {
                if ((f = k[0] = k[0].slice(0)).length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
                    if (!(b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0])) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);)
                    if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
                        if (f.splice(e, 1), !(a = d.length && n(f))) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
        }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), w.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    va.find = xa, va.expr = xa.selectors, va.expr[":"] = va.expr.pseudos, va.uniqueSort = va.unique = xa.uniqueSort, va.text = xa.getText, va.isXMLDoc = xa.isXML, va.contains = xa.contains, va.escapeSelector = xa.escape;
    var ya = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                 (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && va(a).is(c)) break;
                    d.push(a)
                } return d
        },
        za = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        Aa = va.expr.match.needsContext,
        Ba = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    va.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? va.find.matchesSelector(d, a) ? [d] : [] : va.find.matches(a, va.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, va.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(va(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (va.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) va.find(a, e[b], c);
            return d > 1 ? va.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(g(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(g(this, a || [], !0))
        },
        is: function(a) {
            return !!g(this, "string" == typeof a && Aa.test(a) ? va(a) : a || [], !1).length
        }
    });
    var Ca, Da = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (va.fn.init = function(a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || Ca, "string" == typeof a) {
            if (!(d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : Da.exec(a)) || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof va ? b[0] : b, va.merge(this, va.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ga, !0)), Ba.test(d[1]) && va.isPlainObject(b))
                    for (d in b) sa(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this
            }
            return (e = ga.getElementById(d[2])) && (this[0] = e, this.length = 1), this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : sa(a) ? void 0 !== c.ready ? c.ready(a) : a(va) : va.makeArray(a, this)
    }).prototype = va.fn, Ca = va(ga);
    var Ea = /^(?:parents|prev(?:Until|All))/,
        Fa = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    va.fn.extend({
        has: function(a) {
            var b = va(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (va.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && va(a);
            if (!Aa.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && va.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        } return this.pushStack(f.length > 1 ? va.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? la.call(va(a), this[0]) : la.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(va.uniqueSort(va.merge(this.get(), va(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), va.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return ya(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ya(a, "parentNode", c)
        },
        next: function(a) {
            return h(a, "nextSibling")
        },
        prev: function(a) {
            return h(a, "previousSibling")
        },
        nextAll: function(a) {
            return ya(a, "nextSibling")
        },
        prevAll: function(a) {
            return ya(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ya(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ya(a, "previousSibling", c)
        },
        siblings: function(a) {
            return za((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return za(a.firstChild)
        },
        contents: function(a) {
            return f(a, "iframe") ? a.contentDocument : (f(a, "template") && (a = a.content || a), va.merge([], a.childNodes))
        }
    }, function(a, b) {
        va.fn[a] = function(c, d) {
            var e = va.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = va.filter(d, e)), this.length > 1 && (Fa[a] || va.uniqueSort(e), Ea.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var Ga = /[^\x20\t\r\n\f]+/g;
    va.Callbacks = function(a) {
        a = "string" == typeof a ? i(a) : va.extend({}, a);
        var b, c, e, f, g = [],
            h = [],
            j = -1,
            k = function() {
                for (f = f || a.once, e = b = !0; h.length; j = -1)
                    for (c = h.shift(); ++j < g.length;) !1 === g[j].apply(c[0], c[1]) && a.stopOnFalse && (j = g.length, c = !1);
                a.memory || (c = !1), b = !1, f && (g = c ? [] : "")
            },
            l = {
                add: function() {
                    return g && (c && !b && (j = g.length - 1, h.push(c)), function b(c) {
                        va.each(c, function(c, e) {
                            sa(e) ? a.unique && l.has(e) || g.push(e) : e && e.length && "string" !== d(e) && b(e)
                        })
                    }(arguments), c && !b && k()), this
                },
                remove: function() {
                    return va.each(arguments, function(a, b) {
                        for (var c;
                             (c = va.inArray(b, g, c)) > -1;) g.splice(c, 1), c <= j && j--
                    }), this
                },
                has: function(a) {
                    return a ? va.inArray(a, g) > -1 : g.length > 0
                },
                empty: function() {
                    return g && (g = []), this
                },
                disable: function() {
                    return f = h = [], g = c = "", this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return f = h = [], c || b || (g = c = ""), this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(a, c) {
                    return f || (c = [a, (c = c || []).slice ? c.slice() : c], h.push(c), b || k()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return l
    }, va.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", va.Callbacks("memory"), va.Callbacks("memory"), 2],
                    ["resolve", "done", va.Callbacks("once memory"), va.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", va.Callbacks("once memory"), va.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    catch: function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return va.Deferred(function(b) {
                            va.each(c, function(c, d) {
                                var e = sa(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && sa(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        function f(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    l = function() {
                                        var a, l;
                                        if (!(b < g)) {
                                            if ((a = d.apply(h, i)) === c.promise()) throw new TypeError("Thenable self-resolution");
                                            l = a && ("object" == typeof a || "function" == typeof a) && a.then, sa(l) ? e ? l.call(a, f(g, c, j, e), f(g, c, k, e)) : (g++, l.call(a, f(g, c, j, e), f(g, c, k, e), f(g, c, j, c.notifyWith))) : (d !== j && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    m = e ? l : function() {
                                        try {
                                            l()
                                        } catch (a) {
                                            va.Deferred.exceptionHook && va.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== k && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? m() : (va.Deferred.getStackHook && (m.stackTrace = va.Deferred.getStackHook()), a.setTimeout(m))
                            }
                        }
                        var g = 0;
                        return va.Deferred(function(a) {
                            c[0][3].add(f(0, a, sa(e) ? e : j, a.notifyWith)), c[1][3].add(f(0, a, sa(b) ? b : j)), c[2][3].add(f(0, a, sa(d) ? d : k))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? va.extend(a, e) : e
                    }
                },
                f = {};
            return va.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[3 - a][3].disable, c[0][2].lock, c[0][3].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = ia.call(arguments),
                f = va.Deferred(),
                g = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? ia.call(arguments) : c, --b || f.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (l(a, f.done(g(c)).resolve, f.reject, !b), "pending" === f.state() || sa(e[c] && e[c].then))) return f.then();
            for (; c--;) l(e[c], g(c), f.reject);
            return f.promise()
        }
    });
    var Ha = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    va.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && Ha.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, va.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var Ia = va.Deferred();
    va.fn.ready = function(a) {
        return Ia.then(a).catch(function(a) {
            va.readyException(a)
        }), this
    }, va.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (!0 === a ? --va.readyWait : va.isReady) || (va.isReady = !0, !0 !== a && --va.readyWait > 0 || Ia.resolveWith(ga, [va]))
        }
    }), va.ready.then = Ia.then, "complete" === ga.readyState || "loading" !== ga.readyState && !ga.documentElement.doScroll ? a.setTimeout(va.ready) : (ga.addEventListener("DOMContentLoaded", m), a.addEventListener("load", m));
    var Ja = function(a, b, c, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == c;
            if ("object" === d(c)) {
                f = !0;
                for (i in c) Ja(a, b, i, c[i], !0, g, h)
            } else if (void 0 !== e && (f = !0, sa(e) || (h = !0), k && (h ? (b.call(a, e), b = null) : (k = b, b = function(a, b, c) {
                return k.call(va(a), c)
            })), b))
                for (; i < j; i++) b(a[i], c, h ? e : e.call(a[i], i, b(a[i], c)));
            return f ? a : k ? b.call(a) : j ? b(a[0], c) : g
        },
        Ka = /^-ms-/,
        La = /-([a-z])/g,
        Ma = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    p.uid = 1, p.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, Ma(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[o(b)] = c;
            else
                for (d in b) e[o(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][o(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    c = (b = Array.isArray(b) ? b.map(o) : (b = o(b)) in d ? [b] : b.match(Ga) || []).length;
                    for (; c--;) delete d[b[c]]
                }(void 0 === b || va.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !va.isEmptyObject(b)
        }
    };
    var Na = new p,
        Oa = new p,
        Pa = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Qa = /[A-Z]/g;
    va.extend({
        hasData: function(a) {
            return Oa.hasData(a) || Na.hasData(a)
        },
        data: function(a, b, c) {
            return Oa.access(a, b, c)
        },
        removeData: function(a, b) {
            Oa.remove(a, b)
        },
        _data: function(a, b, c) {
            return Na.access(a, b, c)
        },
        _removeData: function(a, b) {
            Na.remove(a, b)
        }
    }), va.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Oa.get(f), 1 === f.nodeType && !Na.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && 0 === (d = g[c].name).indexOf("data-") && (d = o(d.slice(5)), r(f, d, e[d]));
                    Na.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                Oa.set(this, a)
            }) : Ja(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (void 0 !== (c = Oa.get(f, a))) return c;
                    if (void 0 !== (c = r(f, a))) return c
                } else this.each(function() {
                    Oa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                Oa.remove(this, a)
            })
        }
    }), va.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = Na.get(a, b), c && (!d || Array.isArray(c) ? d = Na.access(a, b, va.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = va.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = va._queueHooks(a, b),
                g = function() {
                    va.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return Na.get(a, c) || Na.access(a, c, {
                empty: va.Callbacks("once memory").add(function() {
                    Na.remove(a, [b + "queue", c])
                })
            })
        }
    }), va.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? va.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = va.queue(this, a, b);
                va._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && va.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                va.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = va.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = Na.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Ra = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Sa = new RegExp("^(?:([+-])=|)(" + Ra + ")([a-z%]*)$", "i"),
        Ta = ["Top", "Right", "Bottom", "Left"],
        Ua = function(a, b) {
            return "none" === (a = b || a).style.display || "" === a.style.display && va.contains(a.ownerDocument, a) && "none" === va.css(a, "display")
        },
        Va = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Wa = {};
    va.fn.extend({
        show: function() {
            return u(this, !0)
        },
        hide: function() {
            return u(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ua(this) ? va(this).show() : va(this).hide()
            })
        }
    });
    var Xa = /^(?:checkbox|radio)$/i,
        Ya = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Za = /^$|^module$|\/(?:java|ecma)script/i,
        $a = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $a.optgroup = $a.option, $a.tbody = $a.tfoot = $a.colgroup = $a.caption = $a.thead, $a.th = $a.td;
    var _a = /<|&#?\w+;/;
    ! function() {
        var a = ga.createDocumentFragment().appendChild(ga.createElement("div")),
            b = ga.createElement("input");
        b.setAttribute("type", "radio"), b.setAttribute("checked", "checked"), b.setAttribute("name", "t"), a.appendChild(b), ra.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "<textarea>x</textarea>", ra.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    }();
    var ab = ga.documentElement,
        bb = /^key/,
        cb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        db = /^([^.]*)(?:\.(.+)|)/;
    va.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Na.get(a);
            if (q)
                for (c.handler && (c = (f = c).handler, e = f.selector), e && va.find.matchesSelector(ab, e), c.guid || (c.guid = va.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return void 0 !== va && va.event.triggered !== b.type ? va.event.dispatch.apply(a, arguments) : void 0
                }), j = (b = (b || "").match(Ga) || [""]).length; j--;) n = p = (h = db.exec(b[j]) || [])[1], o = (h[2] || "").split(".").sort(), n && (l = va.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = va.event.special[n] || {}, k = va.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && va.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || ((m = i[n] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), va.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Na.hasData(a) && Na.get(a);
            if (q && (i = q.events)) {
                for (j = (b = (b || "").match(Ga) || [""]).length; j--;)
                    if (h = db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = va.event.special[n] || {}, m = i[n = (d ? l.delegateType : l.bindType) || n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || va.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) va.event.remove(a, n + b[j], c, d, !0);
                va.isEmptyObject(i) && Na.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b, c, d, e, f, g, h = va.event.fix(a),
                i = new Array(arguments.length),
                j = (Na.get(this, "events") || {})[h.type] || [],
                k = va.event.special[h.type] || {};
            for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
            if (h.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, h)) {
                for (g = va.event.handlers.call(this, h, j), b = 0;
                     (e = g[b++]) && !h.isPropagationStopped();)
                    for (h.currentTarget = e.elem, c = 0;
                         (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();) h.rnamespace && !h.rnamespace.test(f.namespace) || (h.handleObj = f, h.data = f.data, void 0 !== (d = ((va.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i)) && !1 === (h.result = d) && (h.preventDefault(), h.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, h), h.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || !0 !== j.disabled)) {
                        for (f = [], g = {}, c = 0; c < i; c++) void 0 === g[e = (d = b[c]).selector + " "] && (g[e] = d.needsContext ? va(e, this).index(j) > -1 : va.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    } return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(va.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: sa(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[va.expando] ? a : new va.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== A() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === A() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && f(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return f(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, va.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, va.Event = function(a, b) {
        if (!(this instanceof va.Event)) return new va.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? y : z, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && va.extend(this, b), this.timeStamp = a && a.timeStamp || Date.now(), this[va.expando] = !0
    }, va.Event.prototype = {
        constructor: va.Event,
        isDefaultPrevented: z,
        isPropagationStopped: z,
        isImmediatePropagationStopped: z,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = y, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = y, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = y, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, va.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && bb.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && cb.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, va.event.addProp), va.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        va.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || va.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), va.fn.extend({
        on: function(a, b, c, d) {
            return B(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return B(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, va(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = z), this.each(function() {
                va.event.remove(this, a, c, b)
            })
        }
    });
    var eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        fb = /<script|<style|<link/i,
        gb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    va.extend({
        htmlPrefilter: function(a) {
            return a.replace(eb, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = va.contains(a.ownerDocument, a);
            if (!(ra.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || va.isXMLDoc(a)))
                for (g = v(h), d = 0, e = (f = v(a)).length; d < e; d++) G(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || v(a), g = g || v(h), d = 0, e = f.length; d < e; d++) F(f[d], g[d]);
                else F(a, h);
            return (g = v(h, "script")).length > 0 && w(g, !i && v(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = va.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (Ma(c)) {
                    if (b = c[Na.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? va.event.remove(c, d) : va.removeEvent(c, d, b.handle);
                        c[Na.expando] = void 0
                    }
                    c[Oa.expando] && (c[Oa.expando] = void 0)
                }
        }
    }), va.fn.extend({
        detach: function(a) {
            return I(this, a, !0)
        },
        remove: function(a) {
            return I(this, a)
        },
        text: function(a) {
            return Ja(this, function(a) {
                return void 0 === a ? va.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return H(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || C(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return H(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = C(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return H(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return H(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (va.cleanData(v(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return va.clone(this, a, b)
            })
        },
        html: function(a) {
            return Ja(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !fb.test(a) && !$a[(Ya.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = va.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) 1 === (b = this[c] || {}).nodeType && (va.cleanData(v(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return H(this, arguments, function(b) {
                var c = this.parentNode;
                va.inArray(this, a) < 0 && (va.cleanData(v(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), va.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        va.fn[a] = function(a) {
            for (var c, d = [], e = va(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), va(e[g])[b](c), ka.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var ib = new RegExp("^(" + Ra + ")(?!px)[a-z%]+$", "i"),
        jb = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        kb = new RegExp(Ta.join("|"), "i");
    ! function() {
        function b() {
            if (j) {
                i.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", j.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ab.appendChild(i).appendChild(j);
                var b = a.getComputedStyle(j);
                d = "1%" !== b.top, h = 12 === c(b.marginLeft), j.style.right = "60%", g = 36 === c(b.right), e = 36 === c(b.width), j.style.position = "absolute", f = 36 === j.offsetWidth || "absolute", ab.removeChild(i), j = null
            }
        }

        function c(a) {
            return Math.round(parseFloat(a))
        }
        var d, e, f, g, h, i = ga.createElement("div"),
            j = ga.createElement("div");
        j.style && (j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", ra.clearCloneStyle = "content-box" === j.style.backgroundClip, va.extend(ra, {
            boxSizingReliable: function() {
                return b(), e
            },
            pixelBoxStyles: function() {
                return b(), g
            },
            pixelPosition: function() {
                return b(), d
            },
            reliableMarginLeft: function() {
                return b(), h
            },
            scrollboxSize: function() {
                return b(), f
            }
        }))
    }();
    var lb = /^(none|table(?!-c[ea]).+)/,
        mb = /^--/,
        nb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ob = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pb = ["Webkit", "Moz", "ms"],
        qb = ga.createElement("div").style;
    va.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = J(a, "opacity");
                        return "" === c ? "1" : c
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
        cssProps: {},
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = o(b),
                    i = mb.test(b),
                    j = a.style;
                if (i || (b = M(h)), g = va.cssHooks[b] || va.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b];
                "string" == (f = typeof c) && (e = Sa.exec(c)) && e[1] && (c = s(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (va.cssNumber[h] ? "" : "px")), ra.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = o(b);
            return mb.test(b) || (b = M(h)), (g = va.cssHooks[b] || va.cssHooks[h]) && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = J(a, b, d)), "normal" === e && b in ob && (e = ob[b]), "" === c || c ? (f = parseFloat(e), !0 === c || isFinite(f) ? f || 0 : e) : e
        }
    }), va.each(["height", "width"], function(a, b) {
        va.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !lb.test(va.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? P(a, b, d) : Va(a, nb, function() {
                    return P(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = jb(a),
                    g = "border-box" === va.css(a, "boxSizing", !1, f),
                    h = d && O(a, b, d, g, f);
                return g && ra.scrollboxSize() === f.position && (h -= Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(f[b]) - O(a, b, "border", !1, f) - .5)), h && (e = Sa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = va.css(a, b)), N(a, c, h)
            }
        }
    }), va.cssHooks.marginLeft = K(ra.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(J(a, "marginLeft")) || a.getBoundingClientRect().left - Va(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    }), va.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        va.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + Ta[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, "margin" !== a && (va.cssHooks[a + b].set = N)
    }), va.fn.extend({
        css: function(a, b) {
            return Ja(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (Array.isArray(b)) {
                    for (d = jb(a), e = b.length; g < e; g++) f[b[g]] = va.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? va.style(a, b, c) : va.css(a, b)
            }, a, b, arguments.length > 1)
        }
    }), va.Tween = Q, Q.prototype = {
        constructor: Q,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || va.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (va.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Q.propHooks[this.prop];
            return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Q.propHooks[this.prop];
            return this.options.duration ? this.pos = b = va.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Q.propHooks._default.set(this), this
        }
    }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = va.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0
            },
            set: function(a) {
                va.fx.step[a.prop] ? va.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[va.cssProps[a.prop]] && !va.cssHooks[a.prop] ? a.elem[a.prop] = a.now : va.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, va.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, va.fx = Q.prototype.init, va.fx.step = {};
    var rb, sb, tb = /^(?:toggle|show|hide)$/,
        ub = /queueHooks$/;
    va.Animation = va.extend(X, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return s(c.elem, a, Sa.exec(b), c), c
            }]
        },
        tweener: function(a, b) {
            sa(a) ? (b = a, a = ["*"]) : a = a.match(Ga);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], X.tweeners[c] = X.tweeners[c] || [], X.tweeners[c].unshift(b)
        },
        prefilters: [V],
        prefilter: function(a, b) {
            b ? X.prefilters.unshift(a) : X.prefilters.push(a)
        }
    }), va.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? va.extend({}, a) : {
            complete: c || !c && b || sa(a) && a,
            duration: a,
            easing: c && b || b && !sa(b) && b
        };
        return va.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in va.fx.speeds ? d.duration = va.fx.speeds[d.duration] : d.duration = va.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            sa(d.old) && d.old.call(this), d.queue && va.dequeue(this, d.queue)
        }, d
    }, va.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Ua).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = va.isEmptyObject(a),
                f = va.speed(b, c, d),
                g = function() {
                    var b = X(this, va.extend({}, a), f);
                    (e || Na.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = va.timers,
                    g = Na.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && ub.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || va.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, c = Na.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = va.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, va.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), va.each(["toggle", "show", "hide"], function(a, b) {
        var c = va.fn[b];
        va.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(T(b, !0), a, d, e)
        }
    }), va.each({
        slideDown: T("show"),
        slideUp: T("hide"),
        slideToggle: T("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        va.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), va.timers = [], va.fx.tick = function() {
        var a, b = 0,
            c = va.timers;
        for (rb = Date.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
        c.length || va.fx.stop(), rb = void 0
    }, va.fx.timer = function(a) {
        va.timers.push(a), va.fx.start()
    }, va.fx.interval = 13, va.fx.start = function() {
        sb || (sb = !0, R())
    }, va.fx.stop = function() {
        sb = null
    }, va.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, va.fn.delay = function(b, c) {
        return b = va.fx ? va.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    },
        function() {
            var a = ga.createElement("input"),
                b = ga.createElement("select").appendChild(ga.createElement("option"));
            a.type = "checkbox", ra.checkOn = "" !== a.value, ra.optSelected = b.selected, (a = ga.createElement("input")).value = "t", a.type = "radio", ra.radioValue = "t" === a.value
        }();
    var vb, wb = va.expr.attrHandle;
    va.fn.extend({
        attr: function(a, b) {
            return Ja(this, va.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                va.removeAttr(this, a)
            })
        }
    }), va.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? va.prop(a, b, c) : (1 === f && va.isXMLDoc(a) || (e = va.attrHooks[b.toLowerCase()] || (va.expr.match.bool.test(b) ? vb : void 0)), void 0 !== c ? null === c ? void va.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : null == (d = va.find.attr(a, b)) ? void 0 : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!ra.radioValue && "radio" === b && f(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(Ga);
            if (e && 1 === a.nodeType)
                for (; c = e[d++];) a.removeAttribute(c)
        }
    }), vb = {
        set: function(a, b, c) {
            return !1 === b ? va.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, va.each(va.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = wb[b] || va.find.attr;
        wb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = wb[g], wb[g] = e, e = null != c(a, b, d) ? g : null, wb[g] = f), e
        }
    });
    var xb = /^(?:input|select|textarea|button)$/i,
        yb = /^(?:a|area)$/i;
    va.fn.extend({
        prop: function(a, b) {
            return Ja(this, va.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[va.propFix[a] || a]
            })
        }
    }), va.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && va.isXMLDoc(a) || (b = va.propFix[b] || b, e = va.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = va.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : xb.test(a.nodeName) || yb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ra.optSelected || (va.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), va.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        va.propFix[this.toLowerCase()] = this
    }), va.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (sa(a)) return this.each(function(b) {
                va(this).addClass(a.call(this, b, Z(this)))
            });
            if ((b = $(a)).length)
                for (; c = this[i++];)
                    if (e = Z(c), d = 1 === c.nodeType && " " + Y(e) + " ") {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        e !== (h = Y(d)) && c.setAttribute("class", h)
                    } return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (sa(a)) return this.each(function(b) {
                va(this).removeClass(a.call(this, b, Z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((b = $(a)).length)
                for (; c = this[i++];)
                    if (e = Z(c), d = 1 === c.nodeType && " " + Y(e) + " ") {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        e !== (h = Y(d)) && c.setAttribute("class", h)
                    } return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "string" === c || Array.isArray(a);
            return "boolean" == typeof b && d ? b ? this.addClass(a) : this.removeClass(a) : sa(a) ? this.each(function(c) {
                va(this).toggleClass(a.call(this, c, Z(this), b), b)
            }) : this.each(function() {
                var b, e, f, g;
                if (d)
                    for (e = 0, f = va(this), g = $(a); b = g[e++];) f.hasClass(b) ? f.removeClass(b) : f.addClass(b);
                else void 0 !== a && "boolean" !== c || ((b = Z(this)) && Na.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : Na.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + Y(Z(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var zb = /\r/g;
    va.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = sa(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (null == (e = d ? a.call(this, c, va(this).val()) : a) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = va.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), (b = va.valHooks[this.type] || va.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = va.valHooks[e.type] || va.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : "string" == typeof(c = e.value) ? c.replace(zb, "") : null == c ? "" : c : void 0
        }
    }), va.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = va.find.attr(a, "value");
                    return null != b ? b : Y(va.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        g = a.selectedIndex,
                        h = "select-one" === a.type,
                        i = h ? null : [],
                        j = h ? g + 1 : e.length;
                    for (d = g < 0 ? j : h ? g : 0; d < j; d++)
                        if (((c = e[d]).selected || d === g) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
                            if (b = va(c).val(), h) return b;
                            i.push(b)
                        } return i
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = va.makeArray(b), g = e.length; g--;)((d = e[g]).selected = va.inArray(va.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), va.each(["radio", "checkbox"], function() {
        va.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = va.inArray(va(a).val(), b) > -1
            }
        }, ra.checkOn || (va.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), ra.focusin = "onfocusin" in a;
    var Ab = /^(?:focusinfocus|focusoutblur)$/,
        Bb = function(a) {
            a.stopPropagation()
        };
    va.extend(va.event, {
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m, n = [d || ga],
                o = oa.call(b, "type") ? b.type : b,
                p = oa.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = m = h = d = d || ga, 3 !== d.nodeType && 8 !== d.nodeType && !Ab.test(o + va.event.triggered) && (o.indexOf(".") > -1 && (o = (p = o.split(".")).shift(), p.sort()), j = o.indexOf(":") < 0 && "on" + o, b = b[va.expando] ? b : new va.Event(o, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = p.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : va.makeArray(c, [b]), l = va.event.special[o] || {}, e || !l.trigger || !1 !== l.trigger.apply(d, c))) {
                if (!e && !l.noBubble && !ta(d)) {
                    for (i = l.delegateType || o, Ab.test(i + o) || (g = g.parentNode); g; g = g.parentNode) n.push(g), h = g;
                    h === (d.ownerDocument || ga) && n.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                     (g = n[f++]) && !b.isPropagationStopped();) m = g, b.type = f > 1 ? i : l.bindType || o, (k = (Na.get(g, "events") || {})[b.type] && Na.get(g, "handle")) && k.apply(g, c), (k = j && g[j]) && k.apply && Ma(g) && (b.result = k.apply(g, c), !1 === b.result && b.preventDefault());
                return b.type = o, e || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(n.pop(), c) || !Ma(d) || j && sa(d[o]) && !ta(d) && ((h = d[j]) && (d[j] = null), va.event.triggered = o, b.isPropagationStopped() && m.addEventListener(o, Bb), d[o](), b.isPropagationStopped() && m.removeEventListener(o, Bb), va.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = va.extend(new va.Event, c, {
                type: a,
                isSimulated: !0
            });
            va.event.trigger(d, null, b)
        }
    }), va.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                va.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return va.event.trigger(a, b, c, !0)
        }
    }), ra.focusin || va.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            va.event.simulate(b, a.target, va.event.fix(a))
        };
        va.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = Na.access(d, b);
                e || d.addEventListener(a, c, !0), Na.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = Na.access(d, b) - 1;
                e ? Na.access(d, b, e) : (d.removeEventListener(a, c, !0), Na.remove(d, b))
            }
        }
    });
    var Cb = a.location,
        Db = Date.now(),
        Eb = /\?/;
    va.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (a) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || va.error("Invalid XML: " + b), c
    };
    var Fb = /\[\]$/,
        Gb = /\r?\n/g,
        Hb = /^(?:submit|button|image|reset|file)$/i,
        Ib = /^(?:input|select|textarea|keygen)/i;
    va.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = sa(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (Array.isArray(a) || a.jquery && !va.isPlainObject(a)) va.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) _(c, a[c], b, e);
        return d.join("&")
    }, va.fn.extend({
        serialize: function() {
            return va.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = va.prop(this, "elements");
                return a ? va.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !va(this).is(":disabled") && Ib.test(this.nodeName) && !Hb.test(a) && (this.checked || !Xa.test(a))
            }).map(function(a, b) {
                var c = va(this).val();
                return null == c ? null : Array.isArray(c) ? va.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Gb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Gb, "\r\n")
                }
            }).get()
        }
    });
    var Jb = /%20/g,
        Kb = /#.*$/,
        Lb = /([?&])_=[^&]*/,
        Mb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Nb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ob = /^(?:GET|HEAD)$/,
        Pb = /^\/\//,
        Qb = {},
        Rb = {},
        Sb = "*/".concat("*"),
        Tb = ga.createElement("a");
    Tb.href = Cb.href, va.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Cb.href,
            type: "GET",
            isLocal: Nb.test(Cb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
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
                "text json": JSON.parse,
                "text xml": va.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? ca(ca(a, va.ajaxSettings), b) : ca(va.ajaxSettings, a)
        },
        ajaxPrefilter: aa(Qb),
        ajaxTransport: aa(Rb),
        ajax: function(b, c) {
            function d(b, c, d, h) {
                var j, m, n, u, v, w = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (u = da(o, x, d)), u = ea(o, u, x, j), j ? (o.ifModified && ((v = x.getResponseHeader("Last-Modified")) && (va.lastModified[f] = v), (v = x.getResponseHeader("etag")) && (va.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, j = !(n = u.error))) : (n = w, !b && w || (w = "error", b < 0 && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --va.active || va.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = va.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? va(p) : va.event,
                r = va.Deferred(),
                s = va.Callbacks("once memory"),
                t = o.statusCode || {},
                u = {},
                v = {},
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h)
                                for (h = {}; b = Mb.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) x.always(a[x.status]);
                            else
                                for (b in a) t[b] = [t[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), d(0, b), this
                    }
                };
            if (r.promise(x), o.url = ((b || o.url || Cb.href) + "").replace(Pb, Cb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ga) || [""], null == o.crossDomain) {
                j = ga.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Tb.protocol + "//" + Tb.host != j.protocol + "//" + j.host
                } catch (a) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = va.param(o.data, o.traditional)), ba(Qb, o, c, x), k) return x;
            (l = va.event && o.global) && 0 == va.active++ && va.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Ob.test(o.type), f = o.url.replace(Kb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Jb, "+")) : (n = o.url.slice(f.length), o.data && (o.processData || "string" == typeof o.data) && (f += (Eb.test(f) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (f = f.replace(Lb, "$1"), n = (Eb.test(f) ? "&" : "?") + "_=" + Db++ + n), o.url = f + n), o.ifModified && (va.lastModified[f] && x.setRequestHeader("If-Modified-Since", va.lastModified[f]), va.etag[f] && x.setRequestHeader("If-None-Match", va.etag[f])), (o.data && o.hasContent && !1 !== o.contentType || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (!1 === o.beforeSend.call(p, x, o) || k)) return x.abort();
            if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = ba(Rb, o, c, x)) {
                if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k) return x;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(u, d)
                } catch (a) {
                    if (k) throw a;
                    d(-1, a)
                }
            } else d(-1, "No Transport");
            return x
        },
        getJSON: function(a, b, c) {
            return va.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return va.get(a, void 0, b, "script")
        }
    }), va.each(["get", "post"], function(a, b) {
        va[b] = function(a, c, d, e) {
            return sa(c) && (e = e || d, d = c, c = void 0), va.ajax(va.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, va.isPlainObject(a) && a))
        }
    }), va._evalUrl = function(a) {
        return va.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, va.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (sa(a) && (a = a.call(this[0])), b = va(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return sa(a) ? this.each(function(b) {
                va(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = va(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = sa(a);
            return this.each(function(c) {
                va(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                va(this).replaceWith(this.childNodes)
            }), this
        }
    }), va.expr.pseudos.hidden = function(a) {
        return !va.expr.pseudos.visible(a)
    }, va.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, va.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (a) {}
    };
    var Ub = {
            0: 200,
            1223: 204
        },
        Vb = va.ajaxSettings.xhr();
    ra.cors = !!Vb && "withCredentials" in Vb, ra.ajax = Vb = !!Vb, va.ajaxTransport(function(b) {
        var c, d;
        if (ra.cors || Vb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ub[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = h.ontimeout = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (a) {
                    if (c) throw a
                }
            },
            abort: function() {
                c && c()
            }
        }
    }), va.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), va.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return va.globalEval(a), a
            }
        }
    }), va.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), va.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = va("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), ga.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Wb = [],
        Xb = /(=)\?(?=&|$)|\?\?/;
    va.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Wb.pop() || va.expando + "_" + Db++;
            return this[a] = !0, a
        }
    }), va.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (Xb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Xb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = sa(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Xb, "$1" + e) : !1 !== b.jsonp && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || va.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? va(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Wb.push(e)), g && sa(f) && f(g[0]), g = f = void 0
        }), "script"
    }), ra.createHTMLDocument = function() {
        var a = ga.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), va.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var d, e, f;
        return b || (ra.createHTMLDocument ? ((d = (b = ga.implementation.createHTMLDocument("")).createElement("base")).href = ga.location.href, b.head.appendChild(d)) : b = ga), e = Ba.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = x([a], b, f), f && f.length && va(f).remove(), va.merge([], e.childNodes))
    }, va.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = Y(a.slice(h)), a = a.slice(0, h)), sa(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && va.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? va("<div>").append(va.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, va.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        va.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), va.expr.pseudos.animated = function(a) {
        return va.grep(va.timers, function(b) {
            return a === b.elem
        }).length
    }, va.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j = va.css(a, "position"),
                k = va(a),
                l = {};
            "static" === j && (a.style.position = "relative"), h = k.offset(), f = va.css(a, "top"), i = va.css(a, "left"), ("absolute" === j || "fixed" === j) && (f + i).indexOf("auto") > -1 ? (g = (d = k.position()).top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), sa(b) && (b = b.call(a, c, va.extend({}, h))), null != b.top && (l.top = b.top - h.top + g), null != b.left && (l.left = b.left - h.left + e), "using" in b ? b.using.call(a, l) : k.css(l)
        }
    }, va.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                va.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0];
            return d ? d.getClientRects().length ? (b = d.getBoundingClientRect(), c = d.ownerDocument.defaultView, {
                top: b.top + c.pageYOffset,
                left: b.left + c.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === va.css(d, "position")) b = d.getBoundingClientRect();
                else {
                    for (b = this.offset(), c = d.ownerDocument, a = d.offsetParent || c.documentElement; a && (a === c.body || a === c.documentElement) && "static" === va.css(a, "position");) a = a.parentNode;
                    a && a !== d && 1 === a.nodeType && ((e = va(a).offset()).top += va.css(a, "borderTopWidth", !0), e.left += va.css(a, "borderLeftWidth", !0))
                }
                return {
                    top: b.top - e.top - va.css(d, "marginTop", !0),
                    left: b.left - e.left - va.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === va.css(a, "position");) a = a.offsetParent;
                return a || ab
            })
        }
    }), va.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        va.fn[a] = function(d) {
            return Ja(this, function(a, d, e) {
                var f;
                if (ta(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e) return f ? f[b] : a[d];
                f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e
            }, a, d, arguments.length)
        }
    }), va.each(["top", "left"], function(a, b) {
        va.cssHooks[b] = K(ra.pixelPosition, function(a, c) {
            if (c) return c = J(a, b), ib.test(c) ? va(a).position()[b] + "px" : c
        })
    }), va.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        va.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            va.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (!0 === e || !0 === f ? "margin" : "border");
                return Ja(this, function(b, c, e) {
                    var f;
                    return ta(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? va.css(b, c, h) : va.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), va.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        va.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), va.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), va.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), va.proxy = function(a, b) {
        var c, d, e;
        if ("string" == typeof b && (c = a[b], b = a, a = c), sa(a)) return d = ia.call(arguments, 2), e = function() {
            return a.apply(b || this, d.concat(ia.call(arguments)))
        }, e.guid = a.guid = a.guid || va.guid++, e
    }, va.holdReady = function(a) {
        a ? va.readyWait++ : va.ready(!0)
    }, va.isArray = Array.isArray, va.parseJSON = JSON.parse, va.nodeName = f, va.isFunction = sa, va.isWindow = ta, va.camelCase = o, va.type = d, va.now = Date.now, va.isNumeric = function(a) {
        var b = va.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return va
    });
    var Yb = a.jQuery,
        Zb = a.$;
    return va.noConflict = function(b) {
        return a.$ === va && (a.$ = Zb), b && a.jQuery === va && (a.jQuery = Yb), va
    }, b || (a.jQuery = a.$ = va), va
}), ! function() {
    "use strict";
    var a, b = function(c, d) {
        function e(a) {
            return Math.floor(a)
        }

        function f() {
            var a = u.params.autoplay,
                b = u.slides.eq(u.activeIndex);
            b.attr("data-swiper-autoplay") && (a = b.attr("data-swiper-autoplay") || u.params.autoplay), u.autoplayTimeoutId = setTimeout(function() {
                u.params.loop ? (u.fixLoop(), u._slideNext(), u.emit("onAutoplay", u)) : u.isEnd ? d.autoplayStopOnLast ? u.stopAutoplay() : (u._slideTo(0), u.emit("onAutoplay", u)) : (u._slideNext(), u.emit("onAutoplay", u))
            }, a)
        }

        function g(b, c) {
            var d = a(b.target);
            if (!d.is(c))
                if ("string" == typeof c) d = d.parents(c);
                else if (c.nodeType) {
                    var e;
                    return d.parents().each(function(a, b) {
                        b === c && (e = c)
                    }), e ? c : void 0
                }
            if (0 !== d.length) return d[0]
        }

        function h(a, b) {
            b = b || {};
            var c = window.MutationObserver || window.WebkitMutationObserver,
                d = new c(function(a) {
                    a.forEach(function(a) {
                        u.onResize(!0), u.emit("onObserverUpdate", u, a)
                    })
                });
            d.observe(a, {
                attributes: void 0 === b.attributes || b.attributes,
                childList: void 0 === b.childList || b.childList,
                characterData: void 0 === b.characterData || b.characterData
            }), u.observers.push(d)
        }

        function i(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.keyCode || a.charCode;
            if (!u.params.allowSwipeToNext && (u.isHorizontal() && 39 === b || !u.isHorizontal() && 40 === b)) return !1;
            if (!u.params.allowSwipeToPrev && (u.isHorizontal() && 37 === b || !u.isHorizontal() && 38 === b)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === b || 39 === b || 38 === b || 40 === b) {
                    var c = !1;
                    if (u.container.parents("." + u.params.slideClass).length > 0 && 0 === u.container.parents("." + u.params.slideActiveClass).length) return;
                    var d = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        e = window.innerWidth,
                        f = window.innerHeight,
                        g = u.container.offset();
                    u.rtl && (g.left = g.left - u.container[0].scrollLeft);
                    for (var h = [
                        [g.left, g.top],
                        [g.left + u.width, g.top],
                        [g.left, g.top + u.height],
                        [g.left + u.width, g.top + u.height]
                    ], i = 0; i < h.length; i++) {
                        var j = h[i];
                        j[0] >= d.left && j[0] <= d.left + e && j[1] >= d.top && j[1] <= d.top + f && (c = !0)
                    }
                    if (!c) return
                }
                u.isHorizontal() ? (37 !== b && 39 !== b || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === b && !u.rtl || 37 === b && u.rtl) && u.slideNext(), (37 === b && !u.rtl || 39 === b && u.rtl) && u.slidePrev()) : (38 !== b && 40 !== b || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && u.slideNext(), 38 === b && u.slidePrev()), u.emit("onKeyPress", u, b)
            }
        }

        function j(a) {
            var b = 0,
                c = 0,
                d = 0,
                e = 0;
            return "detail" in a && (c = a.detail), "wheelDelta" in a && (c = -a.wheelDelta / 120), "wheelDeltaY" in a && (c = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (b = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (b = c, c = 0), d = 10 * b, e = 10 * c, "deltaY" in a && (e = a.deltaY), "deltaX" in a && (d = a.deltaX), (d || e) && a.deltaMode && (1 === a.deltaMode ? (d *= 40, e *= 40) : (d *= 800, e *= 800)), d && !b && (b = d < 1 ? -1 : 1), e && !c && (c = e < 1 ? -1 : 1), {
                spinX: b,
                spinY: c,
                pixelX: d,
                pixelY: e
            }
        }

        function k(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = 0,
                c = u.rtl ? -1 : 1,
                d = j(a);
            if (u.params.mousewheelForceToAxis)
                if (u.isHorizontal()) {
                    if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return;
                    b = d.pixelX * c
                } else {
                    if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return;
                    b = d.pixelY
                }
            else b = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * c : -d.pixelY;
            if (0 !== b) {
                if (u.params.mousewheelInvert && (b = -b), u.params.freeMode) {
                    var e = u.getWrapperTranslate() + b * u.params.mousewheelSensitivity,
                        f = u.isBeginning,
                        g = u.isEnd;
                    if (e >= u.minTranslate() && (e = u.minTranslate()), e <= u.maxTranslate() && (e = u.maxTranslate()), u.setWrapperTransition(0), u.setWrapperTranslate(e), u.updateProgress(), u.updateActiveIndex(), (!f && u.isBeginning || !g && u.isEnd) && u.updateClasses(), u.params.freeModeSticky ? (clearTimeout(u.mousewheel.timeout), u.mousewheel.timeout = setTimeout(function() {
                        u.slideReset()
                    }, 300)) : u.params.lazyLoading && u.lazy && u.lazy.load(), u.emit("onScroll", u, a), u.params.autoplay && u.params.autoplayDisableOnInteraction && u.stopAutoplay(), 0 === e || e === u.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - u.mousewheel.lastScrollTime > 60)
                        if (b < 0)
                            if (u.isEnd && !u.params.loop || u.animating) {
                                if (u.params.mousewheelReleaseOnEdges) return !0
                            } else u.slideNext(), u.emit("onScroll", u, a);
                        else if (u.isBeginning && !u.params.loop || u.animating) {
                            if (u.params.mousewheelReleaseOnEdges) return !0
                        } else u.slidePrev(), u.emit("onScroll", u, a);
                    u.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
            }
        }

        function l(b, c) {
            b = a(b);
            var d, e, f, g = u.rtl ? -1 : 1;
            d = b.attr("data-swiper-parallax") || "0", e = b.attr("data-swiper-parallax-x"), f = b.attr("data-swiper-parallax-y"), e || f ? (e = e || "0", f = f || "0") : u.isHorizontal() ? (e = d, f = "0") : (f = d, e = "0"), e = e.indexOf("%") >= 0 ? parseInt(e, 10) * c * g + "%" : e * c * g + "px", f = f.indexOf("%") >= 0 ? parseInt(f, 10) * c + "%" : f * c + "px", b.transform("translate3d(" + e + ", " + f + ",0px)")
        }

        function m(a) {
            return 0 !== a.indexOf("on") && (a = a[0] !== a[0].toUpperCase() ? "on" + a[0].toUpperCase() + a.substring(1) : "on" + a), a
        }
        if (!(this instanceof b)) return new b(c, d);
        var n = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                zoom: !1,
                zoomMax: 3,
                zoomMin: 1,
                zoomToggle: !0,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                mousewheelEventsTarged: "container",
                hashnav: !1,
                hashnavWatchState: !1,
                history: !1,
                replaceState: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                normalizeSlideIndex: !0,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                paginationClickableClass: "swiper-pagination-clickable",
                paginationModifierClass: "swiper-pagination-",
                lazyLoadingClass: "swiper-lazy",
                lazyStatusLoadingClass: "swiper-lazy-loading",
                lazyStatusLoadedClass: "swiper-lazy-loaded",
                lazyPreloaderClass: "swiper-lazy-preloader",
                notificationClass: "swiper-notification",
                preloaderClass: "preloader",
                zoomContainerClass: "swiper-zoom-container",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            o = d && d.virtualTranslate;
        d = d || {};
        var p = {};
        for (var q in d)
            if ("object" != typeof d[q] || null === d[q] || d[q].nodeType || d[q] === window || d[q] === document || "undefined" != typeof Dom7 && d[q] instanceof Dom7 || "undefined" != typeof jQuery && d[q] instanceof jQuery) p[q] = d[q];
            else {
                p[q] = {};
                for (var r in d[q]) p[q][r] = d[q][r]
            } for (var s in n)
            if (void 0 === d[s]) d[s] = n[s];
            else if ("object" == typeof d[s])
                for (var t in n[s]) void 0 === d[s][t] && (d[s][t] = n[s][t]);
        var u = this;
        if (u.params = d, u.originalParams = p, u.classNames = [], void 0 !== a && "undefined" != typeof Dom7 && (a = Dom7), (void 0 !== a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (u.$ = a, u.currentBreakpoint = void 0, u.getActiveBreakpoint = function() {
            if (!u.params.breakpoints) return !1;
            var a, b = !1,
                c = [];
            for (a in u.params.breakpoints) u.params.breakpoints.hasOwnProperty(a) && c.push(a);
            c.sort(function(a, b) {
                return parseInt(a, 10) > parseInt(b, 10)
            });
            for (var d = 0; d < c.length; d++)(a = c[d]) >= window.innerWidth && !b && (b = a);
            return b || "max"
        }, u.setBreakpoint = function() {
            var a = u.getActiveBreakpoint();
            if (a && u.currentBreakpoint !== a) {
                var b = a in u.params.breakpoints ? u.params.breakpoints[a] : u.originalParams,
                    c = u.params.loop && b.slidesPerView !== u.params.slidesPerView;
                for (var d in b) u.params[d] = b[d];
                u.currentBreakpoint = a, c && u.destroyLoop && u.reLoop(!0)
            }
        }, u.params.breakpoints && u.setBreakpoint(), u.container = a(c), 0 !== u.container.length)) {
            if (u.container.length > 1) {
                var v = [];
                return u.container.each(function() {
                    v.push(new b(this, d))
                }), v
            }
            u.container[0].swiper = u, u.container.data("swiper", u), u.classNames.push(u.params.containerModifierClass + u.params.direction), u.params.freeMode && u.classNames.push(u.params.containerModifierClass + "free-mode"), u.support.flexbox || (u.classNames.push(u.params.containerModifierClass + "no-flexbox"), u.params.slidesPerColumn = 1), u.params.autoHeight && u.classNames.push(u.params.containerModifierClass + "autoheight"), (u.params.parallax || u.params.watchSlidesVisibility) && (u.params.watchSlidesProgress = !0), u.params.touchReleaseOnEdges && (u.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(u.params.effect) >= 0 && (u.support.transforms3d ? (u.params.watchSlidesProgress = !0, u.classNames.push(u.params.containerModifierClass + "3d")) : u.params.effect = "slide"), "slide" !== u.params.effect && u.classNames.push(u.params.containerModifierClass + u.params.effect), "cube" === u.params.effect && (u.params.resistanceRatio = 0, u.params.slidesPerView = 1, u.params.slidesPerColumn = 1, u.params.slidesPerGroup = 1, u.params.centeredSlides = !1, u.params.spaceBetween = 0, u.params.virtualTranslate = !0), "fade" !== u.params.effect && "flip" !== u.params.effect || (u.params.slidesPerView = 1, u.params.slidesPerColumn = 1, u.params.slidesPerGroup = 1, u.params.watchSlidesProgress = !0, u.params.spaceBetween = 0, void 0 === o && (u.params.virtualTranslate = !0)), u.params.grabCursor && u.support.touch && (u.params.grabCursor = !1), u.wrapper = u.container.children("." + u.params.wrapperClass), u.params.pagination && (u.paginationContainer = a(u.params.pagination), u.params.uniqueNavElements && "string" == typeof u.params.pagination && u.paginationContainer.length > 1 && 1 === u.container.find(u.params.pagination).length && (u.paginationContainer = u.container.find(u.params.pagination)), "bullets" === u.params.paginationType && u.params.paginationClickable ? u.paginationContainer.addClass(u.params.paginationModifierClass + "clickable") : u.params.paginationClickable = !1, u.paginationContainer.addClass(u.params.paginationModifierClass + u.params.paginationType)), (u.params.nextButton || u.params.prevButton) && (u.params.nextButton && (u.nextButton = a(u.params.nextButton), u.params.uniqueNavElements && "string" == typeof u.params.nextButton && u.nextButton.length > 1 && 1 === u.container.find(u.params.nextButton).length && (u.nextButton = u.container.find(u.params.nextButton))), u.params.prevButton && (u.prevButton = a(u.params.prevButton), u.params.uniqueNavElements && "string" == typeof u.params.prevButton && u.prevButton.length > 1 && 1 === u.container.find(u.params.prevButton).length && (u.prevButton = u.container.find(u.params.prevButton)))), u.isHorizontal = function() {
                return "horizontal" === u.params.direction
            }, u.rtl = u.isHorizontal() && ("rtl" === u.container[0].dir.toLowerCase() || "rtl" === u.container.css("direction")), u.rtl && u.classNames.push(u.params.containerModifierClass + "rtl"), u.rtl && (u.wrongRTL = "-webkit-box" === u.wrapper.css("display")), u.params.slidesPerColumn > 1 && u.classNames.push(u.params.containerModifierClass + "multirow"), u.device.android && u.classNames.push(u.params.containerModifierClass + "android"), u.container.addClass(u.classNames.join(" ")), u.translate = 0, u.progress = 0, u.velocity = 0, u.lockSwipeToNext = function() {
                u.params.allowSwipeToNext = !1, !1 === u.params.allowSwipeToPrev && u.params.grabCursor && u.unsetGrabCursor()
            }, u.lockSwipeToPrev = function() {
                u.params.allowSwipeToPrev = !1, !1 === u.params.allowSwipeToNext && u.params.grabCursor && u.unsetGrabCursor()
            }, u.lockSwipes = function() {
                u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !1, u.params.grabCursor && u.unsetGrabCursor()
            }, u.unlockSwipeToNext = function() {
                u.params.allowSwipeToNext = !0, !0 === u.params.allowSwipeToPrev && u.params.grabCursor && u.setGrabCursor()
            }, u.unlockSwipeToPrev = function() {
                u.params.allowSwipeToPrev = !0, !0 === u.params.allowSwipeToNext && u.params.grabCursor && u.setGrabCursor()
            }, u.unlockSwipes = function() {
                u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !0, u.params.grabCursor && u.setGrabCursor()
            }, u.setGrabCursor = function(a) {
                u.container[0].style.cursor = "move", u.container[0].style.cursor = a ? "-webkit-grabbing" : "-webkit-grab", u.container[0].style.cursor = a ? "-moz-grabbin" : "-moz-grab", u.container[0].style.cursor = a ? "grabbing" : "grab"
            }, u.unsetGrabCursor = function() {
                u.container[0].style.cursor = ""
            }, u.params.grabCursor && u.setGrabCursor(), u.imagesToLoad = [], u.imagesLoaded = 0, u.loadImage = function(a, b, c, d, e, f) {
                function g() {
                    f && f()
                }
                var h;
                a.complete && e ? g() : b ? (h = new window.Image, h.onload = g, h.onerror = g, d && (h.sizes = d), c && (h.srcset = c), b && (h.src = b)) : g()
            }, u.preloadImages = function() {
                function a() {
                    void 0 !== u && null !== u && u && (void 0 !== u.imagesLoaded && u.imagesLoaded++, u.imagesLoaded === u.imagesToLoad.length && (u.params.updateOnImagesReady && u.update(), u.emit("onImagesReady", u)))
                }
                u.imagesToLoad = u.container.find("img");
                for (var b = 0; b < u.imagesToLoad.length; b++) u.loadImage(u.imagesToLoad[b], u.imagesToLoad[b].currentSrc || u.imagesToLoad[b].getAttribute("src"), u.imagesToLoad[b].srcset || u.imagesToLoad[b].getAttribute("srcset"), u.imagesToLoad[b].sizes || u.imagesToLoad[b].getAttribute("sizes"), !0, a)
            }, u.autoplayTimeoutId = void 0, u.autoplaying = !1, u.autoplayPaused = !1, u.startAutoplay = function() {
                return void 0 === u.autoplayTimeoutId && !!u.params.autoplay && !u.autoplaying && (u.autoplaying = !0, u.emit("onAutoplayStart", u), void f())
            }, u.stopAutoplay = function(a) {
                u.autoplayTimeoutId && (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId), u.autoplaying = !1, u.autoplayTimeoutId = void 0, u.emit("onAutoplayStop", u))
            }, u.pauseAutoplay = function(a) {
                u.autoplayPaused || (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId), u.autoplayPaused = !0, 0 === a ? (u.autoplayPaused = !1, f()) : u.wrapper.transitionEnd(function() {
                    u && (u.autoplayPaused = !1, u.autoplaying ? f() : u.stopAutoplay())
                }))
            }, u.minTranslate = function() {
                return -u.snapGrid[0]
            }, u.maxTranslate = function() {
                return -u.snapGrid[u.snapGrid.length - 1]
            }, u.updateAutoHeight = function() {
                var a, b = [],
                    c = 0;
                if ("auto" !== u.params.slidesPerView && u.params.slidesPerView > 1)
                    for (a = 0; a < Math.ceil(u.params.slidesPerView); a++) {
                        var d = u.activeIndex + a;
                        if (d > u.slides.length) break;
                        b.push(u.slides.eq(d)[0])
                    } else b.push(u.slides.eq(u.activeIndex)[0]);
                for (a = 0; a < b.length; a++)
                    if (void 0 !== b[a]) {
                        var e = b[a].offsetHeight;
                        c = e > c ? e : c
                    } c && u.wrapper.css("height", c + "px")
            }, u.updateContainerSize = function() {
                var a, b;
                a = void 0 !== u.params.width ? u.params.width : u.container[0].clientWidth, b = void 0 !== u.params.height ? u.params.height : u.container[0].clientHeight, 0 === a && u.isHorizontal() || 0 === b && !u.isHorizontal() || (a = a - parseInt(u.container.css("padding-left"), 10) - parseInt(u.container.css("padding-right"), 10), b = b - parseInt(u.container.css("padding-top"), 10) - parseInt(u.container.css("padding-bottom"), 10), u.width = a, u.height = b, u.size = u.isHorizontal() ? u.width : u.height)
            }, u.updateSlidesSize = function() {
                u.slides = u.wrapper.children("." + u.params.slideClass), u.snapGrid = [], u.slidesGrid = [], u.slidesSizesGrid = [];
                var a, b = u.params.spaceBetween,
                    c = -u.params.slidesOffsetBefore,
                    d = 0,
                    f = 0;
                if (void 0 !== u.size) {
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * u.size), u.virtualSize = -b, u.rtl ? u.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : u.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var g;
                    u.params.slidesPerColumn > 1 && (g = Math.floor(u.slides.length / u.params.slidesPerColumn) === u.slides.length / u.params.slidesPerColumn ? u.slides.length : Math.ceil(u.slides.length / u.params.slidesPerColumn) * u.params.slidesPerColumn, "auto" !== u.params.slidesPerView && "row" === u.params.slidesPerColumnFill && (g = Math.max(g, u.params.slidesPerView * u.params.slidesPerColumn)));
                    var h, i = u.params.slidesPerColumn,
                        j = g / i,
                        k = j - (u.params.slidesPerColumn * j - u.slides.length);
                    for (a = 0; a < u.slides.length; a++) {
                        h = 0;
                        var l = u.slides.eq(a);
                        if (u.params.slidesPerColumn > 1) {
                            var m, n, o;
                            "column" === u.params.slidesPerColumnFill ? (n = Math.floor(a / i), o = a - n * i, (n > k || n === k && o === i - 1) && ++o >= i && (o = 0, n++), m = n + o * g / i, l.css({
                                "-webkit-box-ordinal-group": m,
                                "-moz-box-ordinal-group": m,
                                "-ms-flex-order": m,
                                "-webkit-order": m,
                                order: m
                            })) : (o = Math.floor(a / j), n = a - o * j), l.css("margin-" + (u.isHorizontal() ? "top" : "left"), 0 !== o && u.params.spaceBetween && u.params.spaceBetween + "px").attr("data-swiper-column", n).attr("data-swiper-row", o)
                        }
                        "none" !== l.css("display") && ("auto" === u.params.slidesPerView ? (h = u.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0), u.params.roundLengths && (h = e(h))) : (h = (u.size - (u.params.slidesPerView - 1) * b) / u.params.slidesPerView, u.params.roundLengths && (h = e(h)), u.isHorizontal() ? u.slides[a].style.width = h + "px" : u.slides[a].style.height = h + "px"), u.slides[a].swiperSlideSize = h, u.slidesSizesGrid.push(h), u.params.centeredSlides ? (c = c + h / 2 + d / 2 + b, 0 === d && 0 !== a && (c = c - u.size / 2 - b), 0 === a && (c = c - u.size / 2 - b), Math.abs(c) < .001 && (c = 0), f % u.params.slidesPerGroup == 0 && u.snapGrid.push(c), u.slidesGrid.push(c)) : (f % u.params.slidesPerGroup == 0 && u.snapGrid.push(c), u.slidesGrid.push(c), c = c + h + b), u.virtualSize += h + b, d = h, f++)
                    }
                    u.virtualSize = Math.max(u.virtualSize, u.size) + u.params.slidesOffsetAfter;
                    var p;
                    if (u.rtl && u.wrongRTL && ("slide" === u.params.effect || "coverflow" === u.params.effect) && u.wrapper.css({
                        width: u.virtualSize + u.params.spaceBetween + "px"
                    }), u.support.flexbox && !u.params.setWrapperSize || (u.isHorizontal() ? u.wrapper.css({
                        width: u.virtualSize + u.params.spaceBetween + "px"
                    }) : u.wrapper.css({
                        height: u.virtualSize + u.params.spaceBetween + "px"
                    })), u.params.slidesPerColumn > 1 && (u.virtualSize = (h + u.params.spaceBetween) * g, u.virtualSize = Math.ceil(u.virtualSize / u.params.slidesPerColumn) - u.params.spaceBetween, u.isHorizontal() ? u.wrapper.css({
                        width: u.virtualSize + u.params.spaceBetween + "px"
                    }) : u.wrapper.css({
                        height: u.virtualSize + u.params.spaceBetween + "px"
                    }), u.params.centeredSlides)) {
                        for (p = [], a = 0; a < u.snapGrid.length; a++) u.snapGrid[a] < u.virtualSize + u.snapGrid[0] && p.push(u.snapGrid[a]);
                        u.snapGrid = p
                    }
                    if (!u.params.centeredSlides) {
                        for (p = [], a = 0; a < u.snapGrid.length; a++) u.snapGrid[a] <= u.virtualSize - u.size && p.push(u.snapGrid[a]);
                        u.snapGrid = p, Math.floor(u.virtualSize - u.size) - Math.floor(u.snapGrid[u.snapGrid.length - 1]) > 1 && u.snapGrid.push(u.virtualSize - u.size)
                    }
                    0 === u.snapGrid.length && (u.snapGrid = [0]), 0 !== u.params.spaceBetween && (u.isHorizontal() ? u.rtl ? u.slides.css({
                        marginLeft: b + "px"
                    }) : u.slides.css({
                        marginRight: b + "px"
                    }) : u.slides.css({
                        marginBottom: b + "px"
                    })), u.params.watchSlidesProgress && u.updateSlidesOffset()
                }
            }, u.updateSlidesOffset = function() {
                for (var a = 0; a < u.slides.length; a++) u.slides[a].swiperSlideOffset = u.isHorizontal() ? u.slides[a].offsetLeft : u.slides[a].offsetTop
            }, u.currentSlidesPerView = function() {
                var a, b, c = 1;
                if (u.params.centeredSlides) {
                    var d, e = u.slides[u.activeIndex].swiperSlideSize;
                    for (a = u.activeIndex + 1; a < u.slides.length; a++) u.slides[a] && !d && (e += u.slides[a].swiperSlideSize, c++, e > u.size && (d = !0));
                    for (b = u.activeIndex - 1; b >= 0; b--) u.slides[b] && !d && (e += u.slides[b].swiperSlideSize, c++, e > u.size && (d = !0))
                } else
                    for (a = u.activeIndex + 1; a < u.slides.length; a++) u.slidesGrid[a] - u.slidesGrid[u.activeIndex] < u.size && c++;
                return c
            }, u.updateSlidesProgress = function(a) {
                if (void 0 === a && (a = u.translate || 0), 0 !== u.slides.length) {
                    void 0 === u.slides[0].swiperSlideOffset && u.updateSlidesOffset();
                    var b = -a;
                    u.rtl && (b = a), u.slides.removeClass(u.params.slideVisibleClass);
                    for (var c = 0; c < u.slides.length; c++) {
                        var d = u.slides[c],
                            e = (b + (u.params.centeredSlides ? u.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + u.params.spaceBetween);
                        if (u.params.watchSlidesVisibility) {
                            var f = -(b - d.swiperSlideOffset),
                                g = f + u.slidesSizesGrid[c];
                            (f >= 0 && f < u.size || g > 0 && g <= u.size || f <= 0 && g >= u.size) && u.slides.eq(c).addClass(u.params.slideVisibleClass)
                        }
                        d.progress = u.rtl ? -e : e
                    }
                }
            }, u.updateProgress = function(a) {
                void 0 === a && (a = u.translate || 0);
                var b = u.maxTranslate() - u.minTranslate(),
                    c = u.isBeginning,
                    d = u.isEnd;
                0 === b ? (u.progress = 0, u.isBeginning = u.isEnd = !0) : (u.progress = (a - u.minTranslate()) / b, u.isBeginning = u.progress <= 0, u.isEnd = u.progress >= 1), u.isBeginning && !c && u.emit("onReachBeginning", u), u.isEnd && !d && u.emit("onReachEnd", u), u.params.watchSlidesProgress && u.updateSlidesProgress(a), u.emit("onProgress", u, u.progress)
            }, u.updateActiveIndex = function() {
                var a, b, c, d = u.rtl ? u.translate : -u.translate;
                for (b = 0; b < u.slidesGrid.length; b++) void 0 !== u.slidesGrid[b + 1] ? d >= u.slidesGrid[b] && d < u.slidesGrid[b + 1] - (u.slidesGrid[b + 1] - u.slidesGrid[b]) / 2 ? a = b : d >= u.slidesGrid[b] && d < u.slidesGrid[b + 1] && (a = b + 1) : d >= u.slidesGrid[b] && (a = b);
                u.params.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), c = Math.floor(a / u.params.slidesPerGroup), c >= u.snapGrid.length && (c = u.snapGrid.length - 1), a !== u.activeIndex && (u.snapIndex = c, u.previousIndex = u.activeIndex, u.activeIndex = a, u.updateClasses(), u.updateRealIndex())
            }, u.updateRealIndex = function() {
                u.realIndex = parseInt(u.slides.eq(u.activeIndex).attr("data-swiper-slide-index") || u.activeIndex, 10)
            }, u.updateClasses = function() {
                u.slides.removeClass(u.params.slideActiveClass + " " + u.params.slideNextClass + " " + u.params.slidePrevClass + " " + u.params.slideDuplicateActiveClass + " " + u.params.slideDuplicateNextClass + " " + u.params.slideDuplicatePrevClass);
                var b = u.slides.eq(u.activeIndex);
                b.addClass(u.params.slideActiveClass), d.loop && (b.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + u.realIndex + '"]').addClass(u.params.slideDuplicateActiveClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + u.realIndex + '"]').addClass(u.params.slideDuplicateActiveClass));
                var c = b.next("." + u.params.slideClass).addClass(u.params.slideNextClass);
                u.params.loop && 0 === c.length && (c = u.slides.eq(0), c.addClass(u.params.slideNextClass));
                var e = b.prev("." + u.params.slideClass).addClass(u.params.slidePrevClass);
                if (u.params.loop && 0 === e.length && (e = u.slides.eq(-1), e.addClass(u.params.slidePrevClass)), d.loop && (c.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicateNextClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicateNextClass), e.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + e.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicatePrevClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + e.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicatePrevClass)), u.paginationContainer && u.paginationContainer.length > 0) {
                    var f, g = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length;
                    if (u.params.loop ? (f = Math.ceil((u.activeIndex - u.loopedSlides) / u.params.slidesPerGroup), f > u.slides.length - 1 - 2 * u.loopedSlides && (f -= u.slides.length - 2 * u.loopedSlides), f > g - 1 && (f -= g), f < 0 && "bullets" !== u.params.paginationType && (f = g + f)) : f = void 0 !== u.snapIndex ? u.snapIndex : u.activeIndex || 0, "bullets" === u.params.paginationType && u.bullets && u.bullets.length > 0 && (u.bullets.removeClass(u.params.bulletActiveClass), u.paginationContainer.length > 1 ? u.bullets.each(function() {
                        a(this).index() === f && a(this).addClass(u.params.bulletActiveClass)
                    }) : u.bullets.eq(f).addClass(u.params.bulletActiveClass)), "fraction" === u.params.paginationType && (u.paginationContainer.find("." + u.params.paginationCurrentClass).text(f + 1), u.paginationContainer.find("." + u.params.paginationTotalClass).text(g)), "progress" === u.params.paginationType) {
                        var h = (f + 1) / g,
                            i = h,
                            j = 1;
                        u.isHorizontal() || (j = h, i = 1), u.paginationContainer.find("." + u.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + i + ") scaleY(" + j + ")").transition(u.params.speed)
                    }
                    "custom" === u.params.paginationType && u.params.paginationCustomRender && (u.paginationContainer.html(u.params.paginationCustomRender(u, f + 1, g)), u.emit("onPaginationRendered", u, u.paginationContainer[0]))
                }
                u.params.loop || (u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.isBeginning ? (u.prevButton.addClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.disable(u.prevButton)) : (u.prevButton.removeClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.enable(u.prevButton))), u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.isEnd ? (u.nextButton.addClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.disable(u.nextButton)) : (u.nextButton.removeClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.enable(u.nextButton))))
            }, u.updatePagination = function() {
                if (u.params.pagination && u.paginationContainer && u.paginationContainer.length > 0) {
                    var a = "";
                    if ("bullets" === u.params.paginationType) {
                        for (var b = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length, c = 0; c < b; c++) a += u.params.paginationBulletRender ? u.params.paginationBulletRender(u, c, u.params.bulletClass) : "<" + u.params.paginationElement + ' class="' + u.params.bulletClass + '"></' + u.params.paginationElement + ">";
                        u.paginationContainer.html(a), u.bullets = u.paginationContainer.find("." + u.params.bulletClass), u.params.paginationClickable && u.params.a11y && u.a11y && u.a11y.initPagination()
                    }
                    "fraction" === u.params.paginationType && (a = u.params.paginationFractionRender ? u.params.paginationFractionRender(u, u.params.paginationCurrentClass, u.params.paginationTotalClass) : '<span class="' + u.params.paginationCurrentClass + '"></span> / <span class="' + u.params.paginationTotalClass + '"></span>', u.paginationContainer.html(a)), "progress" === u.params.paginationType && (a = u.params.paginationProgressRender ? u.params.paginationProgressRender(u, u.params.paginationProgressbarClass) : '<span class="' + u.params.paginationProgressbarClass + '"></span>', u.paginationContainer.html(a)), "custom" !== u.params.paginationType && u.emit("onPaginationRendered", u, u.paginationContainer[0])
                }
            }, u.update = function(a) {
                function b() {
                    u.rtl, u.translate, c = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate()), u.setWrapperTranslate(c), u.updateActiveIndex(), u.updateClasses()
                }
                if (u) {
                    u.updateContainerSize(), u.updateSlidesSize(), u.updateProgress(), u.updatePagination(), u.updateClasses(), u.params.scrollbar && u.scrollbar && u.scrollbar.set();
                    var c;
                    a ? (u.controller && u.controller.spline && (u.controller.spline = void 0), u.params.freeMode ? (b(), u.params.autoHeight && u.updateAutoHeight()) : (("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0)) || b()) : u.params.autoHeight && u.updateAutoHeight()
                }
            }, u.onResize = function(a) {
                u.params.onBeforeResize && u.params.onBeforeResize(u), u.params.breakpoints && u.setBreakpoint();
                var b = u.params.allowSwipeToPrev,
                    c = u.params.allowSwipeToNext;
                u.params.allowSwipeToPrev = u.params.allowSwipeToNext = !0, u.updateContainerSize(), u.updateSlidesSize(), ("auto" === u.params.slidesPerView || u.params.freeMode || a) && u.updatePagination(), u.params.scrollbar && u.scrollbar && u.scrollbar.set(), u.controller && u.controller.spline && (u.controller.spline = void 0);
                var d = !1;
                if (u.params.freeMode) {
                    var e = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate());
                    u.setWrapperTranslate(e), u.updateActiveIndex(), u.updateClasses(), u.params.autoHeight && u.updateAutoHeight()
                } else u.updateClasses(), d = ("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0);
                u.params.lazyLoading && !d && u.lazy && u.lazy.load(), u.params.allowSwipeToPrev = b, u.params.allowSwipeToNext = c, u.params.onAfterResize && u.params.onAfterResize(u)
            }, u.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? u.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (u.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), u.touchEvents = {
                start: u.support.touch || !u.params.simulateTouch ? "touchstart" : u.touchEventsDesktop.start,
                move: u.support.touch || !u.params.simulateTouch ? "touchmove" : u.touchEventsDesktop.move,
                end: u.support.touch || !u.params.simulateTouch ? "touchend" : u.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === u.params.touchEventsTarget ? u.container : u.wrapper).addClass("swiper-wp8-" + u.params.direction), u.initEvents = function(a) {
                var b = a ? "off" : "on",
                    c = a ? "removeEventListener" : "addEventListener",
                    e = "container" === u.params.touchEventsTarget ? u.container[0] : u.wrapper[0],
                    f = u.support.touch ? e : document,
                    g = !!u.params.nested;
                if (u.browser.ie) e[c](u.touchEvents.start, u.onTouchStart, !1), f[c](u.touchEvents.move, u.onTouchMove, g), f[c](u.touchEvents.end, u.onTouchEnd, !1);
                else {
                    if (u.support.touch) {
                        var h = !("touchstart" !== u.touchEvents.start || !u.support.passiveListener || !u.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        e[c](u.touchEvents.start, u.onTouchStart, h), e[c](u.touchEvents.move, u.onTouchMove, g), e[c](u.touchEvents.end, u.onTouchEnd, h)
                    }(d.simulateTouch && !u.device.ios && !u.device.android || d.simulateTouch && !u.support.touch && u.device.ios) && (e[c]("mousedown", u.onTouchStart, !1), document[c]("mousemove", u.onTouchMove, g), document[c]("mouseup", u.onTouchEnd, !1))
                }
                window[c]("resize", u.onResize), u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.nextButton[b]("click", u.onClickNext), u.params.a11y && u.a11y && u.nextButton[b]("keydown", u.a11y.onEnterKey)), u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.prevButton[b]("click", u.onClickPrev), u.params.a11y && u.a11y && u.prevButton[b]("keydown", u.a11y.onEnterKey)), u.params.pagination && u.params.paginationClickable && (u.paginationContainer[b]("click", "." + u.params.bulletClass, u.onClickIndex), u.params.a11y && u.a11y && u.paginationContainer[b]("keydown", "." + u.params.bulletClass, u.a11y.onEnterKey)), (u.params.preventClicks || u.params.preventClicksPropagation) && e[c]("click", u.preventClicks, !0)
            }, u.attachEvents = function() {
                u.initEvents()
            }, u.detachEvents = function() {
                u.initEvents(!0)
            }, u.allowClick = !0, u.preventClicks = function(a) {
                u.allowClick || (u.params.preventClicks && a.preventDefault(), u.params.preventClicksPropagation && u.animating && (a.stopPropagation(), a.stopImmediatePropagation()))
            }, u.onClickNext = function(a) {
                a.preventDefault(), u.isEnd && !u.params.loop || u.slideNext()
            }, u.onClickPrev = function(a) {
                a.preventDefault(), u.isBeginning && !u.params.loop || u.slidePrev()
            }, u.onClickIndex = function(b) {
                b.preventDefault();
                var c = a(this).index() * u.params.slidesPerGroup;
                u.params.loop && (c += u.loopedSlides), u.slideTo(c)
            }, u.updateClickedSlide = function(b) {
                var c = g(b, "." + u.params.slideClass),
                    d = !1;
                if (c)
                    for (var e = 0; e < u.slides.length; e++) u.slides[e] === c && (d = !0);
                if (!c || !d) return u.clickedSlide = void 0, void(u.clickedIndex = void 0);
                if (u.clickedSlide = c, u.clickedIndex = a(c).index(), u.params.slideToClickedSlide && void 0 !== u.clickedIndex && u.clickedIndex !== u.activeIndex) {
                    var f, h = u.clickedIndex,
                        i = "auto" === u.params.slidesPerView ? u.currentSlidesPerView() : u.params.slidesPerView;
                    if (u.params.loop) {
                        if (u.animating) return;
                        f = parseInt(a(u.clickedSlide).attr("data-swiper-slide-index"), 10), u.params.centeredSlides ? h < u.loopedSlides - i / 2 || h > u.slides.length - u.loopedSlides + i / 2 ? (u.fixLoop(), h = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.' + u.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                            u.slideTo(h)
                        }, 0)) : u.slideTo(h) : h > u.slides.length - i ? (u.fixLoop(), h = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.' + u.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                            u.slideTo(h)
                        }, 0)) : u.slideTo(h)
                    } else u.slideTo(h)
                }
            };
            var w, x, y, z, A, B, C, D, E, F, G = "input, select, textarea, button, video",
                H = Date.now(),
                I = [];
            u.animating = !1, u.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var J, K;
            u.onTouchStart = function(b) {
                if (b.originalEvent && (b = b.originalEvent), (J = "touchstart" === b.type) || !("which" in b) || 3 !== b.which) {
                    if (u.params.noSwiping && g(b, "." + u.params.noSwipingClass)) return void(u.allowClick = !0);
                    if (!u.params.swipeHandler || g(b, u.params.swipeHandler)) {
                        var c = u.touches.currentX = "touchstart" === b.type ? b.targetTouches[0].pageX : b.pageX,
                            d = u.touches.currentY = "touchstart" === b.type ? b.targetTouches[0].pageY : b.pageY;
                        if (!(u.device.ios && u.params.iOSEdgeSwipeDetection && c <= u.params.iOSEdgeSwipeThreshold)) {
                            if (w = !0, x = !1, y = !0, A = void 0, K = void 0, u.touches.startX = c, u.touches.startY = d, z = Date.now(), u.allowClick = !0, u.updateContainerSize(), u.swipeDirection = void 0, u.params.threshold > 0 && (D = !1), "touchstart" !== b.type) {
                                var e = !0;
                                a(b.target).is(G) && (e = !1), document.activeElement && a(document.activeElement).is(G) && document.activeElement.blur(), e && b.preventDefault()
                            }
                            u.emit("onTouchStart", u, b)
                        }
                    }
                }
            }, u.onTouchMove = function(b) {
                if (b.originalEvent && (b = b.originalEvent), !J || "mousemove" !== b.type) {
                    if (b.preventedByNestedSwiper) return u.touches.startX = "touchmove" === b.type ? b.targetTouches[0].pageX : b.pageX, void(u.touches.startY = "touchmove" === b.type ? b.targetTouches[0].pageY : b.pageY);
                    if (u.params.onlyExternal) return u.allowClick = !1, void(w && (u.touches.startX = u.touches.currentX = "touchmove" === b.type ? b.targetTouches[0].pageX : b.pageX, u.touches.startY = u.touches.currentY = "touchmove" === b.type ? b.targetTouches[0].pageY : b.pageY, z = Date.now()));
                    if (J && u.params.touchReleaseOnEdges && !u.params.loop)
                        if (u.isHorizontal()) {
                            if (u.touches.currentX < u.touches.startX && u.translate <= u.maxTranslate() || u.touches.currentX > u.touches.startX && u.translate >= u.minTranslate()) return
                        } else if (u.touches.currentY < u.touches.startY && u.translate <= u.maxTranslate() || u.touches.currentY > u.touches.startY && u.translate >= u.minTranslate()) return;
                    if (J && document.activeElement && b.target === document.activeElement && a(b.target).is(G)) return x = !0, void(u.allowClick = !1);
                    if (y && u.emit("onTouchMove", u, b), !(b.targetTouches && b.targetTouches.length > 1)) {
                        if (u.touches.currentX = "touchmove" === b.type ? b.targetTouches[0].pageX : b.pageX, u.touches.currentY = "touchmove" === b.type ? b.targetTouches[0].pageY : b.pageY, void 0 === A) {
                            var c;
                            u.isHorizontal() && u.touches.currentY === u.touches.startY || !u.isHorizontal() && u.touches.currentX === u.touches.startX ? A = !1 : (c = 180 * Math.atan2(Math.abs(u.touches.currentY - u.touches.startY), Math.abs(u.touches.currentX - u.touches.startX)) / Math.PI, A = u.isHorizontal() ? c > u.params.touchAngle : 90 - c > u.params.touchAngle)
                        }
                        if (A && u.emit("onTouchMoveOpposite", u, b), void 0 === K && (u.touches.currentX === u.touches.startX && u.touches.currentY === u.touches.startY || (K = !0)), w) {
                            if (A) return void(w = !1);
                            if (K) {
                                u.allowClick = !1, u.emit("onSliderMove", u, b), b.preventDefault(), u.params.touchMoveStopPropagation && !u.params.nested && b.stopPropagation(), x || (d.loop && u.fixLoop(), C = u.getWrapperTranslate(), u.setWrapperTransition(0), u.animating && u.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), u.params.autoplay && u.autoplaying && (u.params.autoplayDisableOnInteraction ? u.stopAutoplay() : u.pauseAutoplay()), F = !1, !u.params.grabCursor || !0 !== u.params.allowSwipeToNext && !0 !== u.params.allowSwipeToPrev || u.setGrabCursor(!0)), x = !0;
                                var e = u.touches.diff = u.isHorizontal() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY;
                                e *= u.params.touchRatio, u.rtl && (e = -e), u.swipeDirection = e > 0 ? "prev" : "next", B = e + C;
                                var f = !0;
                                if (e > 0 && B > u.minTranslate() ? (f = !1, u.params.resistance && (B = u.minTranslate() - 1 + Math.pow(-u.minTranslate() + C + e, u.params.resistanceRatio))) : e < 0 && B < u.maxTranslate() && (f = !1, u.params.resistance && (B = u.maxTranslate() + 1 - Math.pow(u.maxTranslate() - C - e, u.params.resistanceRatio))), f && (b.preventedByNestedSwiper = !0), !u.params.allowSwipeToNext && "next" === u.swipeDirection && B < C && (B = C), !u.params.allowSwipeToPrev && "prev" === u.swipeDirection && B > C && (B = C), u.params.threshold > 0) {
                                    if (!(Math.abs(e) > u.params.threshold || D)) return void(B = C);
                                    if (!D) return D = !0, u.touches.startX = u.touches.currentX, u.touches.startY = u.touches.currentY, B = C, void(u.touches.diff = u.isHorizontal() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY)
                                }
                                u.params.followFinger && ((u.params.freeMode || u.params.watchSlidesProgress) && u.updateActiveIndex(), u.params.freeMode && (0 === I.length && I.push({
                                    position: u.touches[u.isHorizontal() ? "startX" : "startY"],
                                    time: z
                                }), I.push({
                                    position: u.touches[u.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })), u.updateProgress(B), u.setWrapperTranslate(B))
                            }
                        }
                    }
                }
            }, u.onTouchEnd = function(b) {
                if (b.originalEvent && (b = b.originalEvent), y && u.emit("onTouchEnd", u, b), y = !1, w) {
                    u.params.grabCursor && x && w && (!0 === u.params.allowSwipeToNext || !0 === u.params.allowSwipeToPrev) && u.setGrabCursor(!1);
                    var c = Date.now(),
                        d = c - z;
                    if (u.allowClick && (u.updateClickedSlide(b), u.emit("onTap", u, b), d < 300 && c - H > 300 && (E && clearTimeout(E), E = setTimeout(function() {
                        u && (u.params.paginationHide && u.paginationContainer.length > 0 && !a(b.target).hasClass(u.params.bulletClass) && u.paginationContainer.toggleClass(u.params.paginationHiddenClass), u.emit("onClick", u, b))
                    }, 300)), d < 300 && c - H < 300 && (E && clearTimeout(E), u.emit("onDoubleTap", u, b))), H = Date.now(), setTimeout(function() {
                        u && (u.allowClick = !0)
                    }, 0), !w || !x || !u.swipeDirection || 0 === u.touches.diff || B === C) return void(w = x = !1);
                    w = x = !1;
                    var e;
                    if (e = u.params.followFinger ? u.rtl ? u.translate : -u.translate : -B, u.params.freeMode) {
                        if (e < -u.minTranslate()) return void u.slideTo(u.activeIndex);
                        if (e > -u.maxTranslate()) return void(u.slides.length < u.snapGrid.length ? u.slideTo(u.snapGrid.length - 1) : u.slideTo(u.slides.length - 1));
                        if (u.params.freeModeMomentum) {
                            if (I.length > 1) {
                                var f = I.pop(),
                                    g = I.pop(),
                                    h = f.position - g.position,
                                    i = f.time - g.time;
                                u.velocity = h / i, u.velocity = u.velocity / 2, Math.abs(u.velocity) < u.params.freeModeMinimumVelocity && (u.velocity = 0), (i > 150 || (new window.Date).getTime() - f.time > 300) && (u.velocity = 0)
                            } else u.velocity = 0;
                            u.velocity = u.velocity * u.params.freeModeMomentumVelocityRatio, I.length = 0;
                            var j = 1e3 * u.params.freeModeMomentumRatio,
                                k = u.velocity * j,
                                l = u.translate + k;
                            u.rtl && (l = -l);
                            var m, n = !1,
                                o = 20 * Math.abs(u.velocity) * u.params.freeModeMomentumBounceRatio;
                            if (l < u.maxTranslate()) u.params.freeModeMomentumBounce ? (l + u.maxTranslate() < -o && (l = u.maxTranslate() - o), m = u.maxTranslate(), n = !0, F = !0) : l = u.maxTranslate();
                            else if (l > u.minTranslate()) u.params.freeModeMomentumBounce ? (l - u.minTranslate() > o && (l = u.minTranslate() + o), m = u.minTranslate(), n = !0, F = !0) : l = u.minTranslate();
                            else if (u.params.freeModeSticky) {
                                var p, q = 0;
                                for (q = 0; q < u.snapGrid.length; q += 1)
                                    if (u.snapGrid[q] > -l) {
                                        p = q;
                                        break
                                    } l = Math.abs(u.snapGrid[p] - l) < Math.abs(u.snapGrid[p - 1] - l) || "next" === u.swipeDirection ? u.snapGrid[p] : u.snapGrid[p - 1], u.rtl || (l = -l)
                            }
                            if (0 !== u.velocity) j = u.rtl ? Math.abs((-l - u.translate) / u.velocity) : Math.abs((l - u.translate) / u.velocity);
                            else if (u.params.freeModeSticky) return void u.slideReset();
                            u.params.freeModeMomentumBounce && n ? (u.updateProgress(m), u.setWrapperTransition(j), u.setWrapperTranslate(l), u.onTransitionStart(), u.animating = !0, u.wrapper.transitionEnd(function() {
                                u && F && (u.emit("onMomentumBounce", u), u.setWrapperTransition(u.params.speed), u.setWrapperTranslate(m), u.wrapper.transitionEnd(function() {
                                    u && u.onTransitionEnd()
                                }))
                            })) : u.velocity ? (u.updateProgress(l), u.setWrapperTransition(j), u.setWrapperTranslate(l), u.onTransitionStart(), u.animating || (u.animating = !0, u.wrapper.transitionEnd(function() {
                                u && u.onTransitionEnd()
                            }))) : u.updateProgress(l), u.updateActiveIndex()
                        }
                        return void((!u.params.freeModeMomentum || d >= u.params.longSwipesMs) && (u.updateProgress(), u.updateActiveIndex()))
                    }
                    var r, s = 0,
                        t = u.slidesSizesGrid[0];
                    for (r = 0; r < u.slidesGrid.length; r += u.params.slidesPerGroup) void 0 !== u.slidesGrid[r + u.params.slidesPerGroup] ? e >= u.slidesGrid[r] && e < u.slidesGrid[r + u.params.slidesPerGroup] && (s = r, t = u.slidesGrid[r + u.params.slidesPerGroup] - u.slidesGrid[r]) : e >= u.slidesGrid[r] && (s = r, t = u.slidesGrid[u.slidesGrid.length - 1] - u.slidesGrid[u.slidesGrid.length - 2]);
                    var v = (e - u.slidesGrid[s]) / t;
                    if (d > u.params.longSwipesMs) {
                        if (!u.params.longSwipes) return void u.slideTo(u.activeIndex);
                        "next" === u.swipeDirection && (v >= u.params.longSwipesRatio ? u.slideTo(s + u.params.slidesPerGroup) : u.slideTo(s)), "prev" === u.swipeDirection && (v > 1 - u.params.longSwipesRatio ? u.slideTo(s + u.params.slidesPerGroup) : u.slideTo(s))
                    } else {
                        if (!u.params.shortSwipes) return void u.slideTo(u.activeIndex);
                        "next" === u.swipeDirection && u.slideTo(s + u.params.slidesPerGroup), "prev" === u.swipeDirection && u.slideTo(s)
                    }
                }
            }, u._slideTo = function(a, b) {
                return u.slideTo(a, b, !0, !0)
            }, u.slideTo = function(a, b, c, d) {
                void 0 === c && (c = !0), void 0 === a && (a = 0), a < 0 && (a = 0), u.snapIndex = Math.floor(a / u.params.slidesPerGroup), u.snapIndex >= u.snapGrid.length && (u.snapIndex = u.snapGrid.length - 1);
                var e = -u.snapGrid[u.snapIndex];
                if (u.params.autoplay && u.autoplaying && (d || !u.params.autoplayDisableOnInteraction ? u.pauseAutoplay(b) : u.stopAutoplay()), u.updateProgress(e), u.params.normalizeSlideIndex)
                    for (var f = 0; f < u.slidesGrid.length; f++) - Math.floor(100 * e) >= Math.floor(100 * u.slidesGrid[f]) && (a = f);
                return !(!u.params.allowSwipeToNext && e < u.translate && e < u.minTranslate() || !u.params.allowSwipeToPrev && e > u.translate && e > u.maxTranslate() && (u.activeIndex || 0) !== a || (void 0 === b && (b = u.params.speed), u.previousIndex = u.activeIndex || 0, u.activeIndex = a, u.updateRealIndex(), u.rtl && -e === u.translate || !u.rtl && e === u.translate ? (u.params.autoHeight && u.updateAutoHeight(), u.updateClasses(), "slide" !== u.params.effect && u.setWrapperTranslate(e), 1) : (u.updateClasses(), u.onTransitionStart(c), 0 === b || u.browser.lteIE9 ? (u.setWrapperTranslate(e), u.setWrapperTransition(0), u.onTransitionEnd(c)) : (u.setWrapperTranslate(e), u.setWrapperTransition(b), u.animating || (u.animating = !0, u.wrapper.transitionEnd(function() {
                    u && u.onTransitionEnd(c)
                }))), 0)))
            }, u.onTransitionStart = function(a) {
                void 0 === a && (a = !0), u.params.autoHeight && u.updateAutoHeight(), u.lazy && u.lazy.onTransitionStart(), a && (u.emit("onTransitionStart", u), u.activeIndex !== u.previousIndex && (u.emit("onSlideChangeStart", u), u.activeIndex > u.previousIndex ? u.emit("onSlideNextStart", u) : u.emit("onSlidePrevStart", u)))
            }, u.onTransitionEnd = function(a) {
                u.animating = !1, u.setWrapperTransition(0), void 0 === a && (a = !0), u.lazy && u.lazy.onTransitionEnd(), a && (u.emit("onTransitionEnd", u), u.activeIndex !== u.previousIndex && (u.emit("onSlideChangeEnd", u), u.activeIndex > u.previousIndex ? u.emit("onSlideNextEnd", u) : u.emit("onSlidePrevEnd", u))), u.params.history && u.history && u.history.setHistory(u.params.history, u.activeIndex), u.params.hashnav && u.hashnav && u.hashnav.setHash()
            }, u.slideNext = function(a, b, c) {
                return u.params.loop ? !u.animating && (u.fixLoop(), u.container[0].clientLeft, u.slideTo(u.activeIndex + u.params.slidesPerGroup, b, a, c)) : u.slideTo(u.activeIndex + u.params.slidesPerGroup, b, a, c)
            }, u._slideNext = function(a) {
                return u.slideNext(!0, a, !0)
            }, u.slidePrev = function(a, b, c) {
                return u.params.loop ? !u.animating && (u.fixLoop(), u.container[0].clientLeft, u.slideTo(u.activeIndex - 1, b, a, c)) : u.slideTo(u.activeIndex - 1, b, a, c)
            }, u._slidePrev = function(a) {
                return u.slidePrev(!0, a, !0)
            }, u.slideReset = function(a, b, c) {
                return u.slideTo(u.activeIndex, b, a)
            }, u.disableTouchControl = function() {
                return u.params.onlyExternal = !0, !0
            }, u.enableTouchControl = function() {
                return u.params.onlyExternal = !1, !0
            }, u.setWrapperTransition = function(a, b) {
                u.wrapper.transition(a), "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTransition(a), u.params.parallax && u.parallax && u.parallax.setTransition(a), u.params.scrollbar && u.scrollbar && u.scrollbar.setTransition(a), u.params.control && u.controller && u.controller.setTransition(a, b), u.emit("onSetTransition", u, a)
            }, u.setWrapperTranslate = function(a, b, c) {
                var d = 0,
                    f = 0;
                u.isHorizontal() ? d = u.rtl ? -a : a : f = a, u.params.roundLengths && (d = e(d), f = e(f)), u.params.virtualTranslate || (u.support.transforms3d ? u.wrapper.transform("translate3d(" + d + "px, " + f + "px, 0px)") : u.wrapper.transform("translate(" + d + "px, " + f + "px)")), u.translate = u.isHorizontal() ? d : f;
                var g, h = u.maxTranslate() - u.minTranslate();
                g = 0 === h ? 0 : (a - u.minTranslate()) / h, g !== u.progress && u.updateProgress(a), b && u.updateActiveIndex(), "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTranslate(u.translate), u.params.parallax && u.parallax && u.parallax.setTranslate(u.translate), u.params.scrollbar && u.scrollbar && u.scrollbar.setTranslate(u.translate), u.params.control && u.controller && u.controller.setTranslate(u.translate, c), u.emit("onSetTranslate", u, u.translate)
            }, u.getTranslate = function(a, b) {
                var c, d, e, f;
                return void 0 === b && (b = "x"), u.params.virtualTranslate ? u.rtl ? -u.translate : u.translate : (e = window.getComputedStyle(a, null), window.WebKitCSSMatrix ? (d = e.transform || e.webkitTransform, d.split(",").length > 6 && (d = d.split(", ").map(function(a) {
                    return a.replace(",", ".")
                }).join(", ")), f = new window.WebKitCSSMatrix("none" === d ? "" : d)) : (f = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), c = f.toString().split(",")), "x" === b && (d = window.WebKitCSSMatrix ? f.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), "y" === b && (d = window.WebKitCSSMatrix ? f.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), u.rtl && d && (d = -d), d || 0)
            }, u.getWrapperTranslate = function(a) {
                return void 0 === a && (a = u.isHorizontal() ? "x" : "y"), u.getTranslate(u.wrapper[0], a)
            }, u.observers = [], u.initObservers = function() {
                if (u.params.observeParents)
                    for (var a = u.container.parents(), b = 0; b < a.length; b++) h(a[b]);
                h(u.container[0], {
                    childList: !1
                }), h(u.wrapper[0], {
                    attributes: !1
                })
            }, u.disconnectObservers = function() {
                for (var a = 0; a < u.observers.length; a++) u.observers[a].disconnect();
                u.observers = []
            }, u.createLoop = function() {
                u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove();
                var b = u.wrapper.children("." + u.params.slideClass);
                "auto" !== u.params.slidesPerView || u.params.loopedSlides || (u.params.loopedSlides = b.length), u.loopedSlides = parseInt(u.params.loopedSlides || u.params.slidesPerView, 10), u.loopedSlides = u.loopedSlides + u.params.loopAdditionalSlides, u.loopedSlides > b.length && (u.loopedSlides = b.length);
                var c, d = [],
                    e = [];
                for (b.each(function(c, f) {
                    var g = a(this);
                    c < u.loopedSlides && e.push(f), c < b.length && c >= b.length - u.loopedSlides && d.push(f), g.attr("data-swiper-slide-index", c)
                }), c = 0; c < e.length; c++) u.wrapper.append(a(e[c].cloneNode(!0)).addClass(u.params.slideDuplicateClass));
                for (c = d.length - 1; c >= 0; c--) u.wrapper.prepend(a(d[c].cloneNode(!0)).addClass(u.params.slideDuplicateClass))
            }, u.destroyLoop = function() {
                u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove(), u.slides.removeAttr("data-swiper-slide-index")
            }, u.reLoop = function(a) {
                var b = u.activeIndex - u.loopedSlides;
                u.destroyLoop(), u.createLoop(), u.updateSlidesSize(), a && u.slideTo(b + u.loopedSlides, 0, !1)
            }, u.fixLoop = function() {
                var a;
                u.activeIndex < u.loopedSlides ? (a = u.slides.length - 3 * u.loopedSlides + u.activeIndex, a += u.loopedSlides, u.slideTo(a, 0, !1, !0)) : ("auto" === u.params.slidesPerView && u.activeIndex >= 2 * u.loopedSlides || u.activeIndex > u.slides.length - 2 * u.params.slidesPerView) && (a = -u.slides.length + u.activeIndex + u.loopedSlides, a += u.loopedSlides, u.slideTo(a, 0, !1, !0))
            }, u.appendSlide = function(a) {
                if (u.params.loop && u.destroyLoop(), "object" == typeof a && a.length)
                    for (var b = 0; b < a.length; b++) a[b] && u.wrapper.append(a[b]);
                else u.wrapper.append(a);
                u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0)
            }, u.prependSlide = function(a) {
                u.params.loop && u.destroyLoop();
                var b = u.activeIndex + 1;
                if ("object" == typeof a && a.length) {
                    for (var c = 0; c < a.length; c++) a[c] && u.wrapper.prepend(a[c]);
                    b = u.activeIndex + a.length
                } else u.wrapper.prepend(a);
                u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0), u.slideTo(b, 0, !1)
            }, u.removeSlide = function(a) {
                u.params.loop && (u.destroyLoop(), u.slides = u.wrapper.children("." + u.params.slideClass));
                var b, c = u.activeIndex;
                if ("object" == typeof a && a.length) {
                    for (var d = 0; d < a.length; d++) b = a[d], u.slides[b] && u.slides.eq(b).remove(), b < c && c--;
                    c = Math.max(c, 0)
                } else b = a, u.slides[b] && u.slides.eq(b).remove(), b < c && c--, c = Math.max(c, 0);
                u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0), u.params.loop ? u.slideTo(c + u.loopedSlides, 0, !1) : u.slideTo(c, 0, !1)
            }, u.removeAllSlides = function() {
                for (var a = [], b = 0; b < u.slides.length; b++) a.push(b);
                u.removeSlide(a)
            }, u.effects = {
                fade: {
                    setTranslate: function() {
                        for (var a = 0; a < u.slides.length; a++) {
                            var b = u.slides.eq(a),
                                c = b[0].swiperSlideOffset,
                                d = -c;
                            u.params.virtualTranslate || (d -= u.translate);
                            var e = 0;
                            u.isHorizontal() || (e = d, d = 0);
                            var f = u.params.fade.crossFade ? Math.max(1 - Math.abs(b[0].progress), 0) : 1 + Math.min(Math.max(b[0].progress, -1), 0);
                            b.css({
                                opacity: f
                            }).transform("translate3d(" + d + "px, " + e + "px, 0px)")
                        }
                    },
                    setTransition: function(a) {
                        if (u.slides.transition(a), u.params.virtualTranslate && 0 !== a) {
                            var b = !1;
                            u.slides.transitionEnd(function() {
                                if (!b && u) {
                                    b = !0, u.animating = !1;
                                    for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], c = 0; c < a.length; c++) u.wrapper.trigger(a[c])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var b = 0; b < u.slides.length; b++) {
                            var c = u.slides.eq(b),
                                d = c[0].progress;
                            u.params.flip.limitRotation && (d = Math.max(Math.min(c[0].progress, 1), -1));
                            var e = c[0].swiperSlideOffset,
                                f = -180 * d,
                                g = f,
                                h = 0,
                                i = -e,
                                j = 0;
                            if (u.isHorizontal() ? u.rtl && (g = -g) : (j = i, i = 0, h = -g, g = 0), c[0].style.zIndex = -Math.abs(Math.round(d)) + u.slides.length, u.params.flip.slideShadows) {
                                var k = u.isHorizontal() ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top"),
                                    l = u.isHorizontal() ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
                                0 === k.length && (k = a('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"></div>'), c.append(k)), 0 === l.length && (l = a('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"></div>'), c.append(l)), k.length && (k[0].style.opacity = Math.max(-d, 0)), l.length && (l[0].style.opacity = Math.max(d, 0))
                            }
                            c.transform("translate3d(" + i + "px, " + j + "px, 0px) rotateX(" + h + "deg) rotateY(" + g + "deg)")
                        }
                    },
                    setTransition: function(b) {
                        if (u.slides.transition(b).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(b), u.params.virtualTranslate && 0 !== b) {
                            var c = !1;
                            u.slides.eq(u.activeIndex).transitionEnd(function() {
                                if (!c && u && a(this).hasClass(u.params.slideActiveClass)) {
                                    c = !0, u.animating = !1;
                                    for (var b = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], d = 0; d < b.length; d++) u.wrapper.trigger(b[d])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var b, c = 0;
                        u.params.cube.shadow && (u.isHorizontal() ? (b = u.wrapper.find(".swiper-cube-shadow"), 0 === b.length && (b = a('<div class="swiper-cube-shadow"></div>'), u.wrapper.append(b)), b.css({
                            height: u.width + "px"
                        })) : (b = u.container.find(".swiper-cube-shadow"), 0 === b.length && (b = a('<div class="swiper-cube-shadow"></div>'), u.container.append(b))));
                        for (var d = 0; d < u.slides.length; d++) {
                            var e = u.slides.eq(d),
                                f = 90 * d,
                                g = Math.floor(f / 360);
                            u.rtl && (f = -f, g = Math.floor(-f / 360));
                            var h = Math.max(Math.min(e[0].progress, 1), -1),
                                i = 0,
                                j = 0,
                                k = 0;
                            d % 4 == 0 ? (i = 4 * -g * u.size, k = 0) : (d - 1) % 4 == 0 ? (i = 0, k = 4 * -g * u.size) : (d - 2) % 4 == 0 ? (i = u.size + 4 * g * u.size, k = u.size) : (d - 3) % 4 == 0 && (i = -u.size, k = 3 * u.size + 4 * u.size * g), u.rtl && (i = -i), u.isHorizontal() || (j = i, i = 0);
                            var l = "rotateX(" + (u.isHorizontal() ? 0 : -f) + "deg) rotateY(" + (u.isHorizontal() ? f : 0) + "deg) translate3d(" + i + "px, " + j + "px, " + k + "px)";
                            if (h <= 1 && h > -1 && (c = 90 * d + 90 * h, u.rtl && (c = 90 * -d - 90 * h)), e.transform(l), u.params.cube.slideShadows) {
                                var m = u.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                    n = u.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                                0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"></div>'), e.append(m)), 0 === n.length && (n = a('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"></div>'), e.append(n)), m.length && (m[0].style.opacity = Math.max(-h, 0)), n.length && (n[0].style.opacity = Math.max(h, 0))
                            }
                        }
                        if (u.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + u.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + u.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + u.size / 2 + "px",
                            "transform-origin": "50% 50% -" + u.size / 2 + "px"
                        }), u.params.cube.shadow)
                            if (u.isHorizontal()) b.transform("translate3d(0px, " + (u.width / 2 + u.params.cube.shadowOffset) + "px, " + -u.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.params.cube.shadowScale + ")");
                            else {
                                var o = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                                    p = 1.5 - (Math.sin(2 * o * Math.PI / 360) / 2 + Math.cos(2 * o * Math.PI / 360) / 2),
                                    q = u.params.cube.shadowScale,
                                    r = u.params.cube.shadowScale / p,
                                    s = u.params.cube.shadowOffset;
                                b.transform("scale3d(" + q + ", 1, " + r + ") translate3d(0px, " + (u.height / 2 + s) + "px, " + -u.height / 2 / r + "px) rotateX(-90deg)")
                            } var t = u.isSafari || u.isUiWebView ? -u.size / 2 : 0;
                        u.wrapper.transform("translate3d(0px,0," + t + "px) rotateX(" + (u.isHorizontal() ? 0 : c) + "deg) rotateY(" + (u.isHorizontal() ? -c : 0) + "deg)")
                    },
                    setTransition: function(a) {
                        u.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), u.params.cube.shadow && !u.isHorizontal() && u.container.find(".swiper-cube-shadow").transition(a)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var b = u.translate, c = u.isHorizontal() ? -b + u.width / 2 : -b + u.height / 2, d = u.isHorizontal() ? u.params.coverflow.rotate : -u.params.coverflow.rotate, e = u.params.coverflow.depth, f = 0, g = u.slides.length; f < g; f++) {
                            var h = u.slides.eq(f),
                                i = u.slidesSizesGrid[f],
                                j = h[0].swiperSlideOffset,
                                k = (c - j - i / 2) / i * u.params.coverflow.modifier,
                                l = u.isHorizontal() ? d * k : 0,
                                m = u.isHorizontal() ? 0 : d * k,
                                n = -e * Math.abs(k),
                                o = u.isHorizontal() ? 0 : u.params.coverflow.stretch * k,
                                p = u.isHorizontal() ? u.params.coverflow.stretch * k : 0;
                            Math.abs(p) < .001 && (p = 0), Math.abs(o) < .001 && (o = 0), Math.abs(n) < .001 && (n = 0), Math.abs(l) < .001 && (l = 0), Math.abs(m) < .001 && (m = 0);
                            var q = "translate3d(" + p + "px," + o + "px," + n + "px)  rotateX(" + m + "deg) rotateY(" + l + "deg)";
                            if (h.transform(q), h[0].style.zIndex = 1 - Math.abs(Math.round(k)), u.params.coverflow.slideShadows) {
                                var r = u.isHorizontal() ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                                    s = u.isHorizontal() ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                                0 === r.length && (r = a('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"></div>'), h.append(r)), 0 === s.length && (s = a('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"></div>'), h.append(s)), r.length && (r[0].style.opacity = k > 0 ? k : 0), s.length && (s[0].style.opacity = -k > 0 ? -k : 0)
                            }
                        }
                        u.browser.ie && (u.wrapper[0].style.perspectiveOrigin = c + "px 50%")
                    },
                    setTransition: function(a) {
                        u.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a)
                    }
                }
            }, u.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(b, c) {
                    if (void 0 !== b && (void 0 === c && (c = !0), 0 !== u.slides.length)) {
                        var d = u.slides.eq(b),
                            e = d.find("." + u.params.lazyLoadingClass + ":not(." + u.params.lazyStatusLoadedClass + "):not(." + u.params.lazyStatusLoadingClass + ")");
                        !d.hasClass(u.params.lazyLoadingClass) || d.hasClass(u.params.lazyStatusLoadedClass) || d.hasClass(u.params.lazyStatusLoadingClass) || (e = e.add(d[0])), 0 !== e.length && e.each(function() {
                            var b = a(this);
                            b.addClass(u.params.lazyStatusLoadingClass);
                            var e = b.attr("data-background"),
                                f = b.attr("data-src"),
                                g = b.attr("data-srcset"),
                                h = b.attr("data-sizes");
                            u.loadImage(b[0], f || e, g, h, !1, function() {
                                if (void 0 !== u && null !== u && u) {
                                    if (e ? (b.css("background-image", 'url("' + e + '")'), b.removeAttr("data-background")) : (g && (b.attr("srcset", g), b.removeAttr("data-srcset")), h && (b.attr("sizes", h), b.removeAttr("data-sizes")), f && (b.attr("src", f), b.removeAttr("data-src"))), b.addClass(u.params.lazyStatusLoadedClass).removeClass(u.params.lazyStatusLoadingClass), d.find("." + u.params.lazyPreloaderClass + ", ." + u.params.preloaderClass).remove(), u.params.loop && c) {
                                        var a = d.attr("data-swiper-slide-index");
                                        if (d.hasClass(u.params.slideDuplicateClass)) {
                                            var i = u.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + u.params.slideDuplicateClass + ")");
                                            u.lazy.loadImageInSlide(i.index(), !1)
                                        } else {
                                            var j = u.wrapper.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                            u.lazy.loadImageInSlide(j.index(), !1)
                                        }
                                    }
                                    u.emit("onLazyImageReady", u, d[0], b[0])
                                }
                            }), u.emit("onLazyImageLoad", u, d[0], b[0])
                        })
                    }
                },
                load: function() {
                    var b, c = u.params.slidesPerView;
                    if ("auto" === c && (c = 0), u.lazy.initialImageLoaded || (u.lazy.initialImageLoaded = !0), u.params.watchSlidesVisibility) u.wrapper.children("." + u.params.slideVisibleClass).each(function() {
                        u.lazy.loadImageInSlide(a(this).index())
                    });
                    else if (c > 1)
                        for (b = u.activeIndex; b < u.activeIndex + c; b++) u.slides[b] && u.lazy.loadImageInSlide(b);
                    else u.lazy.loadImageInSlide(u.activeIndex);
                    if (u.params.lazyLoadingInPrevNext)
                        if (c > 1 || u.params.lazyLoadingInPrevNextAmount && u.params.lazyLoadingInPrevNextAmount > 1) {
                            var d = u.params.lazyLoadingInPrevNextAmount,
                                e = c,
                                f = Math.min(u.activeIndex + e + Math.max(d, e), u.slides.length),
                                g = Math.max(u.activeIndex - Math.max(e, d), 0);
                            for (b = u.activeIndex + c; b < f; b++) u.slides[b] && u.lazy.loadImageInSlide(b);
                            for (b = g; b < u.activeIndex; b++) u.slides[b] && u.lazy.loadImageInSlide(b)
                        } else {
                            var h = u.wrapper.children("." + u.params.slideNextClass);
                            h.length > 0 && u.lazy.loadImageInSlide(h.index());
                            var i = u.wrapper.children("." + u.params.slidePrevClass);
                            i.length > 0 && u.lazy.loadImageInSlide(i.index())
                        }
                },
                onTransitionStart: function() {
                    u.params.lazyLoading && (u.params.lazyLoadingOnTransitionStart || !u.params.lazyLoadingOnTransitionStart && !u.lazy.initialImageLoaded) && u.lazy.load()
                },
                onTransitionEnd: function() {
                    u.params.lazyLoading && !u.params.lazyLoadingOnTransitionStart && u.lazy.load()
                }
            }, u.scrollbar = {
                isTouched: !1,
                setDragPosition: function(a) {
                    var b = u.scrollbar,
                        c = u.isHorizontal() ? "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX || a.clientX : "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY || a.clientY,
                        d = c - b.track.offset()[u.isHorizontal() ? "left" : "top"] - b.dragSize / 2,
                        e = -u.minTranslate() * b.moveDivider,
                        f = -u.maxTranslate() * b.moveDivider;
                    d < e ? d = e : d > f && (d = f), d = -d / b.moveDivider, u.updateProgress(d), u.setWrapperTranslate(d, !0)
                },
                dragStart: function(a) {
                    var b = u.scrollbar;
                    b.isTouched = !0, a.preventDefault(), a.stopPropagation(), b.setDragPosition(a), clearTimeout(b.dragTimeout), b.track.transition(0), u.params.scrollbarHide && b.track.css("opacity", 1), u.wrapper.transition(100), b.drag.transition(100), u.emit("onScrollbarDragStart", u)
                },
                dragMove: function(a) {
                    var b = u.scrollbar;
                    b.isTouched && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.setDragPosition(a), u.wrapper.transition(0), b.track.transition(0), b.drag.transition(0), u.emit("onScrollbarDragMove", u))
                },
                dragEnd: function(a) {
                    var b = u.scrollbar;
                    b.isTouched && (b.isTouched = !1, u.params.scrollbarHide && (clearTimeout(b.dragTimeout), b.dragTimeout = setTimeout(function() {
                        b.track.css("opacity", 0), b.track.transition(400)
                    }, 1e3)), u.emit("onScrollbarDragEnd", u), u.params.scrollbarSnapOnRelease && u.slideReset())
                },
                draggableEvents: function() {
                    return !1 !== u.params.simulateTouch || u.support.touch ? u.touchEvents : u.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var b = u.scrollbar,
                        c = u.support.touch ? b.track : document;
                    a(b.track).on(b.draggableEvents.start, b.dragStart), a(c).on(b.draggableEvents.move, b.dragMove), a(c).on(b.draggableEvents.end, b.dragEnd)
                },
                disableDraggable: function() {
                    var b = u.scrollbar,
                        c = u.support.touch ? b.track : document;
                    a(b.track).off(b.draggableEvents.start, b.dragStart), a(c).off(b.draggableEvents.move, b.dragMove), a(c).off(b.draggableEvents.end, b.dragEnd)
                },
                set: function() {
                    if (u.params.scrollbar) {
                        var b = u.scrollbar;
                        b.track = a(u.params.scrollbar), u.params.uniqueNavElements && "string" == typeof u.params.scrollbar && b.track.length > 1 && 1 === u.container.find(u.params.scrollbar).length && (b.track = u.container.find(u.params.scrollbar)), b.drag = b.track.find(".swiper-scrollbar-drag"), 0 === b.drag.length && (b.drag = a('<div class="swiper-scrollbar-drag"></div>'), b.track.append(b.drag)), b.drag[0].style.width = "", b.drag[0].style.height = "", b.trackSize = u.isHorizontal() ? b.track[0].offsetWidth : b.track[0].offsetHeight, b.divider = u.size / u.virtualSize, b.moveDivider = b.divider * (b.trackSize / u.size), b.dragSize = b.trackSize * b.divider, u.isHorizontal() ? b.drag[0].style.width = b.dragSize + "px" : b.drag[0].style.height = b.dragSize + "px", b.divider >= 1 ? b.track[0].style.display = "none" : b.track[0].style.display = "", u.params.scrollbarHide && (b.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (u.params.scrollbar) {
                        var a, b = u.scrollbar,
                            c = (u.translate, b.dragSize);
                        a = (b.trackSize - b.dragSize) * u.progress, u.rtl && u.isHorizontal() ? (a = -a, a > 0 ? (c = b.dragSize - a, a = 0) : -a + b.dragSize > b.trackSize && (c = b.trackSize + a)) : a < 0 ? (c = b.dragSize + a, a = 0) : a + b.dragSize > b.trackSize && (c = b.trackSize - a), u.isHorizontal() ? (u.support.transforms3d ? b.drag.transform("translate3d(" + a + "px, 0, 0)") : b.drag.transform("translateX(" + a + "px)"), b.drag[0].style.width = c + "px") : (u.support.transforms3d ? b.drag.transform("translate3d(0px, " + a + "px, 0)") : b.drag.transform("translateY(" + a + "px)"), b.drag[0].style.height = c + "px"), u.params.scrollbarHide && (clearTimeout(b.timeout), b.track[0].style.opacity = 1, b.timeout = setTimeout(function() {
                            b.track[0].style.opacity = 0, b.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(a) {
                    u.params.scrollbar && u.scrollbar.drag.transition(a)
                }
            }, u.controller = {
                LinearSpline: function(a, b) {
                    var c = function() {
                        var a, b, c;
                        return function(d, e) {
                            for (b = -1, a = d.length; a - b > 1;) d[c = a + b >> 1] <= e ? b = c : a = c;
                            return a
                        }
                    }();
                    this.x = a, this.y = b, this.lastIndex = a.length - 1;
                    var d, e;
                    this.x.length, this.interpolate = function(a) {
                        return a ? (e = c(this.x, a), d = e - 1, (a - this.x[d]) * (this.y[e] - this.y[d]) / (this.x[e] - this.x[d]) + this.y[d]) : 0
                    }
                },
                getInterpolateFunction: function(a) {
                    u.controller.spline || (u.controller.spline = u.params.loop ? new u.controller.LinearSpline(u.slidesGrid, a.slidesGrid) : new u.controller.LinearSpline(u.snapGrid, a.snapGrid))
                },
                setTranslate: function(a, c) {
                    function d(b) {
                        a = b.rtl && "horizontal" === b.params.direction ? -u.translate : u.translate, "slide" === u.params.controlBy && (u.controller.getInterpolateFunction(b), f = -u.controller.spline.interpolate(-a)), f && "container" !== u.params.controlBy || (e = (b.maxTranslate() - b.minTranslate()) / (u.maxTranslate() - u.minTranslate()), f = (a - u.minTranslate()) * e + b.minTranslate()), u.params.controlInverse && (f = b.maxTranslate() - f), b.updateProgress(f), b.setWrapperTranslate(f, !1, u), b.updateActiveIndex()
                    }
                    var e, f, g = u.params.control;
                    if (Array.isArray(g))
                        for (var h = 0; h < g.length; h++) g[h] !== c && g[h] instanceof b && d(g[h]);
                    else g instanceof b && c !== g && d(g)
                },
                setTransition: function(a, c) {
                    function d(b) {
                        b.setWrapperTransition(a, u), 0 !== a && (b.onTransitionStart(), b.wrapper.transitionEnd(function() {
                            f && (b.params.loop && "slide" === u.params.controlBy && b.fixLoop(), b.onTransitionEnd())
                        }))
                    }
                    var e, f = u.params.control;
                    if (Array.isArray(f))
                        for (e = 0; e < f.length; e++) f[e] !== c && f[e] instanceof b && d(f[e]);
                    else f instanceof b && c !== f && d(f)
                }
            }, u.hashnav = {
                onHashCange: function(a, b) {
                    var c = document.location.hash.replace("#", "");
                    c !== u.slides.eq(u.activeIndex).attr("data-hash") && u.slideTo(u.wrapper.children("." + u.params.slideClass + '[data-hash="' + c + '"]').index())
                },
                attachEvents: function(b) {
                    var c = b ? "off" : "on";
                    a(window)[c]("hashchange", u.hashnav.onHashCange)
                },
                setHash: function() {
                    if (u.hashnav.initialized && u.params.hashnav)
                        if (u.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + u.slides.eq(u.activeIndex).attr("data-hash") || "");
                        else {
                            var a = u.slides.eq(u.activeIndex),
                                b = a.attr("data-hash") || a.attr("data-history");
                            document.location.hash = b || ""
                        }
                },
                init: function() {
                    if (u.params.hashnav && !u.params.history) {
                        u.hashnav.initialized = !0;
                        var a = document.location.hash.replace("#", "");
                        if (a)
                            for (var b = 0, c = u.slides.length; b < c; b++) {
                                var d = u.slides.eq(b),
                                    e = d.attr("data-hash") || d.attr("data-history");
                                if (e === a && !d.hasClass(u.params.slideDuplicateClass)) {
                                    var f = d.index();
                                    u.slideTo(f, 0, u.params.runCallbacksOnInit, !0)
                                }
                            }
                        u.params.hashnavWatchState && u.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    u.params.hashnavWatchState && u.hashnav.attachEvents(!0)
                }
            }, u.history = {
                init: function() {
                    if (u.params.history) {
                        if (!window.history || !window.history.pushState) return u.params.history = !1, void(u.params.hashnav = !0);
                        u.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, u.params.runCallbacksOnInit), u.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    u.history.paths = u.history.getPathValues(), u.history.scrollToSlide(u.params.speed, u.history.paths.value, !1)
                },
                getPathValues: function() {
                    var a = window.location.pathname.slice(1).split("/"),
                        b = a.length;
                    return {
                        key: a[b - 2],
                        value: a[b - 1]
                    }
                },
                setHistory: function(a, b) {
                    if (u.history.initialized && u.params.history) {
                        var c = u.slides.eq(b),
                            d = this.slugify(c.attr("data-history"));
                        window.location.pathname.includes(a) || (d = a + "/" + d), u.params.replaceState ? window.history.replaceState(null, null, d) : window.history.pushState(null, null, d)
                    }
                },
                slugify: function(a) {
                    return a.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(a, b, c) {
                    if (b)
                        for (var d = 0, e = u.slides.length; d < e; d++) {
                            var f = u.slides.eq(d),
                                g = this.slugify(f.attr("data-history"));
                            if (g === b && !f.hasClass(u.params.slideDuplicateClass)) {
                                var h = f.index();
                                u.slideTo(h, a, c)
                            }
                        } else u.slideTo(0, a, c)
                }
            }, u.disableKeyboardControl = function() {
                u.params.keyboardControl = !1, a(document).off("keydown", i)
            }, u.enableKeyboardControl = function() {
                u.params.keyboardControl = !0, a(document).on("keydown", i)
            }, u.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            }, u.params.mousewheelControl && (u.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var a = "onwheel" in document;
                if (!a) {
                    var b = document.createElement("div");
                    b.setAttribute("onwheel", "return;"), a = "function" == typeof b.onwheel
                }
                return !a && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a
            }() ? "wheel" : "mousewheel"), u.disableMousewheelControl = function() {
                if (!u.mousewheel.event) return !1;
                var b = u.container;
                return "container" !== u.params.mousewheelEventsTarged && (b = a(u.params.mousewheelEventsTarged)), b.off(u.mousewheel.event, k), u.params.mousewheelControl = !1, !0
            }, u.enableMousewheelControl = function() {
                if (!u.mousewheel.event) return !1;
                var b = u.container;
                return "container" !== u.params.mousewheelEventsTarged && (b = a(u.params.mousewheelEventsTarged)), b.on(u.mousewheel.event, k), u.params.mousewheelControl = !0, !0
            }, u.parallax = {
                setTranslate: function() {
                    u.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        l(this, u.progress)
                    }), u.slides.each(function() {
                        var b = a(this);
                        b.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            l(this, Math.min(Math.max(b[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(b) {
                    void 0 === b && (b = u.params.speed), u.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var c = a(this),
                            d = parseInt(c.attr("data-swiper-parallax-duration"), 10) || b;
                        0 === b && (d = 0), c.transition(d)
                    })
                }
            }, u.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: u.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(a) {
                    if (a.targetTouches.length < 2) return 1;
                    var b = a.targetTouches[0].pageX,
                        c = a.targetTouches[0].pageY,
                        d = a.targetTouches[1].pageX,
                        e = a.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(d - b, 2) + Math.pow(e - c, 2))
                },
                onGestureStart: function(b) {
                    var c = u.zoom;
                    if (!u.support.gestures) {
                        if ("touchstart" !== b.type || "touchstart" === b.type && b.targetTouches.length < 2) return;
                        c.gesture.scaleStart = c.getDistanceBetweenTouches(b)
                    }
                    if (!(c.gesture.slide && c.gesture.slide.length || (c.gesture.slide = a(this), 0 === c.gesture.slide.length && (c.gesture.slide = u.slides.eq(u.activeIndex)), c.gesture.image = c.gesture.slide.find("img, svg, canvas"), c.gesture.imageWrap = c.gesture.image.parent("." + u.params.zoomContainerClass), c.gesture.zoomMax = c.gesture.imageWrap.attr("data-swiper-zoom") || u.params.zoomMax, 0 !== c.gesture.imageWrap.length))) return void(c.gesture.image = void 0);
                    c.gesture.image.transition(0), c.isScaling = !0
                },
                onGestureChange: function(a) {
                    var b = u.zoom;
                    if (!u.support.gestures) {
                        if ("touchmove" !== a.type || "touchmove" === a.type && a.targetTouches.length < 2) return;
                        b.gesture.scaleMove = b.getDistanceBetweenTouches(a)
                    }
                    b.gesture.image && 0 !== b.gesture.image.length && (u.support.gestures ? b.scale = a.scale * b.currentScale : b.scale = b.gesture.scaleMove / b.gesture.scaleStart * b.currentScale, b.scale > b.gesture.zoomMax && (b.scale = b.gesture.zoomMax - 1 + Math.pow(b.scale - b.gesture.zoomMax + 1, .5)), b.scale < u.params.zoomMin && (b.scale = u.params.zoomMin + 1 - Math.pow(u.params.zoomMin - b.scale + 1, .5)), b.gesture.image.transform("translate3d(0,0,0) scale(" + b.scale + ")"))
                },
                onGestureEnd: function(a) {
                    var b = u.zoom;
                    !u.support.gestures && ("touchend" !== a.type || "touchend" === a.type && a.changedTouches.length < 2) || b.gesture.image && 0 !== b.gesture.image.length && (b.scale = Math.max(Math.min(b.scale, b.gesture.zoomMax), u.params.zoomMin), b.gesture.image.transition(u.params.speed).transform("translate3d(0,0,0) scale(" + b.scale + ")"), b.currentScale = b.scale, b.isScaling = !1, 1 === b.scale && (b.gesture.slide = void 0))
                },
                onTouchStart: function(a, b) {
                    var c = a.zoom;
                    c.gesture.image && 0 !== c.gesture.image.length && (c.image.isTouched || ("android" === a.device.os && b.preventDefault(), c.image.isTouched = !0, c.image.touchesStart.x = "touchstart" === b.type ? b.targetTouches[0].pageX : b.pageX, c.image.touchesStart.y = "touchstart" === b.type ? b.targetTouches[0].pageY : b.pageY))
                },
                onTouchMove: function(a) {
                    var b = u.zoom;
                    if (b.gesture.image && 0 !== b.gesture.image.length && (u.allowClick = !1, b.image.isTouched && b.gesture.slide)) {
                        b.image.isMoved || (b.image.width = b.gesture.image[0].offsetWidth, b.image.height = b.gesture.image[0].offsetHeight, b.image.startX = u.getTranslate(b.gesture.imageWrap[0], "x") || 0, b.image.startY = u.getTranslate(b.gesture.imageWrap[0], "y") || 0, b.gesture.slideWidth = b.gesture.slide[0].offsetWidth, b.gesture.slideHeight = b.gesture.slide[0].offsetHeight, b.gesture.imageWrap.transition(0), u.rtl && (b.image.startX = -b.image.startX), u.rtl && (b.image.startY = -b.image.startY));
                        var c = b.image.width * b.scale,
                            d = b.image.height * b.scale;
                        if (!(c < b.gesture.slideWidth && d < b.gesture.slideHeight)) {
                            if (b.image.minX = Math.min(b.gesture.slideWidth / 2 - c / 2, 0), b.image.maxX = -b.image.minX, b.image.minY = Math.min(b.gesture.slideHeight / 2 - d / 2, 0), b.image.maxY = -b.image.minY, b.image.touchesCurrent.x = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, b.image.touchesCurrent.y = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, !b.image.isMoved && !b.isScaling) {
                                if (u.isHorizontal() && Math.floor(b.image.minX) === Math.floor(b.image.startX) && b.image.touchesCurrent.x < b.image.touchesStart.x || Math.floor(b.image.maxX) === Math.floor(b.image.startX) && b.image.touchesCurrent.x > b.image.touchesStart.x) return void(b.image.isTouched = !1);
                                if (!u.isHorizontal() && Math.floor(b.image.minY) === Math.floor(b.image.startY) && b.image.touchesCurrent.y < b.image.touchesStart.y || Math.floor(b.image.maxY) === Math.floor(b.image.startY) && b.image.touchesCurrent.y > b.image.touchesStart.y) return void(b.image.isTouched = !1)
                            }
                            a.preventDefault(), a.stopPropagation(), b.image.isMoved = !0, b.image.currentX = b.image.touchesCurrent.x - b.image.touchesStart.x + b.image.startX, b.image.currentY = b.image.touchesCurrent.y - b.image.touchesStart.y + b.image.startY, b.image.currentX < b.image.minX && (b.image.currentX = b.image.minX + 1 - Math.pow(b.image.minX - b.image.currentX + 1, .8)), b.image.currentX > b.image.maxX && (b.image.currentX = b.image.maxX - 1 + Math.pow(b.image.currentX - b.image.maxX + 1, .8)), b.image.currentY < b.image.minY && (b.image.currentY = b.image.minY + 1 - Math.pow(b.image.minY - b.image.currentY + 1, .8)), b.image.currentY > b.image.maxY && (b.image.currentY = b.image.maxY - 1 + Math.pow(b.image.currentY - b.image.maxY + 1, .8)), b.velocity.prevPositionX || (b.velocity.prevPositionX = b.image.touchesCurrent.x), b.velocity.prevPositionY || (b.velocity.prevPositionY = b.image.touchesCurrent.y), b.velocity.prevTime || (b.velocity.prevTime = Date.now()), b.velocity.x = (b.image.touchesCurrent.x - b.velocity.prevPositionX) / (Date.now() - b.velocity.prevTime) / 2, b.velocity.y = (b.image.touchesCurrent.y - b.velocity.prevPositionY) / (Date.now() - b.velocity.prevTime) / 2, Math.abs(b.image.touchesCurrent.x - b.velocity.prevPositionX) < 2 && (b.velocity.x = 0), Math.abs(b.image.touchesCurrent.y - b.velocity.prevPositionY) < 2 && (b.velocity.y = 0), b.velocity.prevPositionX = b.image.touchesCurrent.x, b.velocity.prevPositionY = b.image.touchesCurrent.y, b.velocity.prevTime = Date.now(), b.gesture.imageWrap.transform("translate3d(" + b.image.currentX + "px, " + b.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function(a, b) {
                    var c = a.zoom;
                    if (c.gesture.image && 0 !== c.gesture.image.length) {
                        if (!c.image.isTouched || !c.image.isMoved) return c.image.isTouched = !1, void(c.image.isMoved = !1);
                        c.image.isTouched = !1, c.image.isMoved = !1;
                        var d = 300,
                            e = 300,
                            f = c.velocity.x * d,
                            g = c.image.currentX + f,
                            h = c.velocity.y * e,
                            i = c.image.currentY + h;
                        0 !== c.velocity.x && (d = Math.abs((g - c.image.currentX) / c.velocity.x)), 0 !== c.velocity.y && (e = Math.abs((i - c.image.currentY) / c.velocity.y));
                        var j = Math.max(d, e);
                        c.image.currentX = g, c.image.currentY = i;
                        var k = c.image.width * c.scale,
                            l = c.image.height * c.scale;
                        c.image.minX = Math.min(c.gesture.slideWidth / 2 - k / 2, 0), c.image.maxX = -c.image.minX, c.image.minY = Math.min(c.gesture.slideHeight / 2 - l / 2, 0), c.image.maxY = -c.image.minY, c.image.currentX = Math.max(Math.min(c.image.currentX, c.image.maxX), c.image.minX), c.image.currentY = Math.max(Math.min(c.image.currentY, c.image.maxY), c.image.minY), c.gesture.imageWrap.transition(j).transform("translate3d(" + c.image.currentX + "px, " + c.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(a) {
                    var b = a.zoom;
                    b.gesture.slide && a.previousIndex !== a.activeIndex && (b.gesture.image.transform("translate3d(0,0,0) scale(1)"), b.gesture.imageWrap.transform("translate3d(0,0,0)"), b.gesture.slide = b.gesture.image = b.gesture.imageWrap = void 0, b.scale = b.currentScale = 1)
                },
                toggleZoom: function(b, c) {
                    var d = b.zoom;
                    if (d.gesture.slide || (d.gesture.slide = b.clickedSlide ? a(b.clickedSlide) : b.slides.eq(b.activeIndex), d.gesture.image = d.gesture.slide.find("img, svg, canvas"), d.gesture.imageWrap = d.gesture.image.parent("." + b.params.zoomContainerClass)), d.gesture.image && 0 !== d.gesture.image.length) {
                        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
                        void 0 === d.image.touchesStart.x && c ? (e = "touchend" === c.type ? c.changedTouches[0].pageX : c.pageX, f = "touchend" === c.type ? c.changedTouches[0].pageY : c.pageY) : (e = d.image.touchesStart.x, f = d.image.touchesStart.y), d.scale && 1 !== d.scale ? (d.scale = d.currentScale = 1, d.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), d.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), d.gesture.slide = void 0) : (d.scale = d.currentScale = d.gesture.imageWrap.attr("data-swiper-zoom") || b.params.zoomMax, c ? (u = d.gesture.slide[0].offsetWidth, v = d.gesture.slide[0].offsetHeight, g = d.gesture.slide.offset().left, h = d.gesture.slide.offset().top, i = g + u / 2 - e, j = h + v / 2 - f, m = d.gesture.image[0].offsetWidth, n = d.gesture.image[0].offsetHeight, o = m * d.scale, p = n * d.scale, q = Math.min(u / 2 - o / 2, 0), r = Math.min(v / 2 - p / 2, 0), s = -q, t = -r, k = i * d.scale, l = j * d.scale, k < q && (k = q), k > s && (k = s), l < r && (l = r), l > t && (l = t)) : (k = 0, l = 0), d.gesture.imageWrap.transition(300).transform("translate3d(" + k + "px, " + l + "px,0)"), d.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + d.scale + ")"))
                    }
                },
                attachEvents: function(b) {
                    var c = b ? "off" : "on";
                    if (u.params.zoom) {
                        var d = (u.slides, !("touchstart" !== u.touchEvents.start || !u.support.passiveListener || !u.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        u.support.gestures ? (u.slides[c]("gesturestart", u.zoom.onGestureStart, d), u.slides[c]("gesturechange", u.zoom.onGestureChange, d), u.slides[c]("gestureend", u.zoom.onGestureEnd, d)) : "touchstart" === u.touchEvents.start && (u.slides[c](u.touchEvents.start, u.zoom.onGestureStart, d), u.slides[c](u.touchEvents.move, u.zoom.onGestureChange, d), u.slides[c](u.touchEvents.end, u.zoom.onGestureEnd, d)), u[c]("touchStart", u.zoom.onTouchStart), u.slides.each(function(b, d) {
                            a(d).find("." + u.params.zoomContainerClass).length > 0 && a(d)[c](u.touchEvents.move, u.zoom.onTouchMove)
                        }), u[c]("touchEnd", u.zoom.onTouchEnd), u[c]("transitionEnd", u.zoom.onTransitionEnd), u.params.zoomToggle && u.on("doubleTap", u.zoom.toggleZoom)
                    }
                },
                init: function() {
                    u.zoom.attachEvents()
                },
                destroy: function() {
                    u.zoom.attachEvents(!0)
                }
            }, u._plugins = [];
            for (var L in u.plugins) {
                var M = u.plugins[L](u, u.params[L]);
                M && u._plugins.push(M)
            }
            return u.callPlugins = function(a) {
                for (var b = 0; b < u._plugins.length; b++) a in u._plugins[b] && u._plugins[b][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, u.emitterEventListeners = {}, u.emit = function(a) {
                u.params[a] && u.params[a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var b;
                if (u.emitterEventListeners[a])
                    for (b = 0; b < u.emitterEventListeners[a].length; b++) u.emitterEventListeners[a][b](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                u.callPlugins && u.callPlugins(a, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, u.on = function(a, b) {
                return a = m(a), u.emitterEventListeners[a] || (u.emitterEventListeners[a] = []), u.emitterEventListeners[a].push(b), u
            }, u.off = function(a, b) {
                var c;
                if (a = m(a), void 0 === b) return u.emitterEventListeners[a] = [], u;
                if (u.emitterEventListeners[a] && 0 !== u.emitterEventListeners[a].length) {
                    for (c = 0; c < u.emitterEventListeners[a].length; c++) u.emitterEventListeners[a][c] === b && u.emitterEventListeners[a].splice(c, 1);
                    return u
                }
            }, u.once = function(a, b) {
                a = m(a);
                var c = function() {
                    b(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), u.off(a, c)
                };
                return u.on(a, c), u
            }, u.a11y = {
                makeFocusable: function(a) {
                    return a.attr("tabIndex", "0"), a
                },
                addRole: function(a, b) {
                    return a.attr("role", b), a
                },
                addLabel: function(a, b) {
                    return a.attr("aria-label", b), a
                },
                disable: function(a) {
                    return a.attr("aria-disabled", !0), a
                },
                enable: function(a) {
                    return a.attr("aria-disabled", !1), a
                },
                onEnterKey: function(b) {
                    13 === b.keyCode && (a(b.target).is(u.params.nextButton) ? (u.onClickNext(b), u.isEnd ? u.a11y.notify(u.params.lastSlideMessage) : u.a11y.notify(u.params.nextSlideMessage)) : a(b.target).is(u.params.prevButton) && (u.onClickPrev(b), u.isBeginning ? u.a11y.notify(u.params.firstSlideMessage) : u.a11y.notify(u.params.prevSlideMessage)), a(b.target).is("." + u.params.bulletClass) && a(b.target)[0].click())
                },
                liveRegion: a('<span class="' + u.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(a) {
                    var b = u.a11y.liveRegion;
                    0 !== b.length && (b.html(""), b.html(a))
                },
                init: function() {
                    u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.a11y.makeFocusable(u.nextButton), u.a11y.addRole(u.nextButton, "button"), u.a11y.addLabel(u.nextButton, u.params.nextSlideMessage)), u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.a11y.makeFocusable(u.prevButton), u.a11y.addRole(u.prevButton, "button"), u.a11y.addLabel(u.prevButton, u.params.prevSlideMessage)), a(u.container).append(u.a11y.liveRegion)
                },
                initPagination: function() {
                    u.params.pagination && u.params.paginationClickable && u.bullets && u.bullets.length && u.bullets.each(function() {
                        var b = a(this);
                        u.a11y.makeFocusable(b), u.a11y.addRole(b, "button"), u.a11y.addLabel(b, u.params.paginationBulletMessage.replace(/{{index}}/, b.index() + 1))
                    })
                },
                destroy: function() {
                    u.a11y.liveRegion && u.a11y.liveRegion.length > 0 && u.a11y.liveRegion.remove()
                }
            }, u.init = function() {
                u.params.loop && u.createLoop(), u.updateContainerSize(), u.updateSlidesSize(), u.updatePagination(), u.params.scrollbar && u.scrollbar && (u.scrollbar.set(), u.params.scrollbarDraggable && u.scrollbar.enableDraggable()), "slide" !== u.params.effect && u.effects[u.params.effect] && (u.params.loop || u.updateProgress(), u.effects[u.params.effect].setTranslate()), u.params.loop ? u.slideTo(u.params.initialSlide + u.loopedSlides, 0, u.params.runCallbacksOnInit) : (u.slideTo(u.params.initialSlide, 0, u.params.runCallbacksOnInit), 0 === u.params.initialSlide && (u.parallax && u.params.parallax && u.parallax.setTranslate(), u.lazy && u.params.lazyLoading && (u.lazy.load(), u.lazy.initialImageLoaded = !0))), u.attachEvents(), u.params.observer && u.support.observer && u.initObservers(), u.params.preloadImages && !u.params.lazyLoading && u.preloadImages(), u.params.zoom && u.zoom && u.zoom.init(), u.params.autoplay && u.startAutoplay(), u.params.keyboardControl && u.enableKeyboardControl && u.enableKeyboardControl(), u.params.mousewheelControl && u.enableMousewheelControl && u.enableMousewheelControl(), u.params.hashnavReplaceState && (u.params.replaceState = u.params.hashnavReplaceState), u.params.history && u.history && u.history.init(), u.params.hashnav && u.hashnav && u.hashnav.init(), u.params.a11y && u.a11y && u.a11y.init(), u.emit("onInit", u)
            }, u.cleanupStyles = function() {
                u.container.removeClass(u.classNames.join(" ")).removeAttr("style"), u.wrapper.removeAttr("style"), u.slides && u.slides.length && u.slides.removeClass([u.params.slideVisibleClass, u.params.slideActiveClass, u.params.slideNextClass, u.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), u.paginationContainer && u.paginationContainer.length && u.paginationContainer.removeClass(u.params.paginationHiddenClass), u.bullets && u.bullets.length && u.bullets.removeClass(u.params.bulletActiveClass), u.params.prevButton && a(u.params.prevButton).removeClass(u.params.buttonDisabledClass), u.params.nextButton && a(u.params.nextButton).removeClass(u.params.buttonDisabledClass), u.params.scrollbar && u.scrollbar && (u.scrollbar.track && u.scrollbar.track.length && u.scrollbar.track.removeAttr("style"), u.scrollbar.drag && u.scrollbar.drag.length && u.scrollbar.drag.removeAttr("style"))
            }, u.destroy = function(a, b) {
                u.detachEvents(), u.stopAutoplay(), u.params.scrollbar && u.scrollbar && u.params.scrollbarDraggable && u.scrollbar.disableDraggable(), u.params.loop && u.destroyLoop(), b && u.cleanupStyles(), u.disconnectObservers(), u.params.zoom && u.zoom && u.zoom.destroy(), u.params.keyboardControl && u.disableKeyboardControl && u.disableKeyboardControl(), u.params.mousewheelControl && u.disableMousewheelControl && u.disableMousewheelControl(), u.params.a11y && u.a11y && u.a11y.destroy(), u.params.history && !u.params.replaceState && window.removeEventListener("popstate", u.history.setHistoryPopState), u.params.hashnav && u.hashnav && u.hashnav.destroy(), u.emit("onDestroy"), !1 !== a && (u = null)
            }, u.init(), u
        }
    };
    b.prototype = {
        isSafari: function() {
            var a = window.navigator.userAgent.toLowerCase();
            return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(a) {
            return "[object Array]" === Object.prototype.toString.apply(a)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var a = document.createElement("div");
                return a.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === a.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var a = window.navigator.userAgent,
                b = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = a.match(/(iPad).*OS\s([\d_]+)/),
                d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                e = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: c || e || d,
                android: b
            }
        }(),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                var a = document.createElement("div").style;
                return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
            }(),
            flexbox: function() {
                for (var a = document.createElement("div").style, b = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), c = 0; c < b.length; c++)
                    if (b[c] in a) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }(),
            passiveListener: function() {
                var a = !1;
                try {
                    var b = Object.defineProperty({}, "passive", {
                        get: function() {
                            a = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, b)
                } catch (a) {}
                return a
            }(),
            gestures: function() {
                return "ongesturestart" in window
            }()
        },
        plugins: {}
    };
    for (var c = ["jQuery", "Zepto", "Dom7"], d = 0; d < c.length; d++) window[c[d]] && function(a) {
        a.fn.swiper = function(c) {
            var d;
            return a(this).each(function() {
                var a = new b(this, c);
                d || (d = a)
            }), d
        }
    }(window[c[d]]);
    var e;
    e = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, e && ("transitionEnd" in e.fn || (e.fn.transitionEnd = function(a) {
        function b(f) {
            if (f.target === this)
                for (a.call(this, f), c = 0; c < d.length; c++) e.off(d[c], b)
        }
        var c, d = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            e = this;
        if (a)
            for (c = 0; c < d.length; c++) e.on(d[c], b);
        return this
    }), "transform" in e.fn || (e.fn.transform = function(a) {
        for (var b = 0; b < this.length; b++) {
            var c = this[b].style;
            c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a
        }
        return this
    }), "transition" in e.fn || (e.fn.transition = function(a) {
        "string" != typeof a && (a += "ms");
        for (var b = 0; b < this.length; b++) {
            var c = this[b].style;
            c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a
        }
        return this
    }), "outerWidth" in e.fn || (e.fn.outerWidth = function(a) {
        return this.length > 0 ? a ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    })), window.Swiper = b
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
}),
    function(a) {
        function b(d) {
            if (c[d]) return c[d].exports;
            var e = c[d] = {
                i: d,
                l: !1,
                exports: {}
            };
            return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports
        }
        var c = {};
        b.m = a, b.c = c, b.d = function(a, c, d) {
            b.o(a, c) || Object.defineProperty(a, c, {
                configurable: !1,
                enumerable: !0,
                get: d
            })
        }, b.r = function(a) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            })
        }, b.n = function(a) {
            var c = a && a.__esModule ? function() {
                return a.default
            } : function() {
                return a
            };
            return b.d(c, "a", c), c
        }, b.o = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }, b.p = "../", b(b.s = 25)
    }([function(a, b) {
        a.exports = $
    }, function(a, b, c) {
        "use strict";
        (function(a) {
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.default = function(b) {
                var c = "string" == typeof b ? a(b) : b;
                return !!(c && c.length > 0)
            }
        }).call(this, c(0))
    }, function(a, b, c) {
        "use strict";
        var d, e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        };
        d = function() {
            return this
        }();
        try {
            d = d || Function("return this")() || (0, eval)("this")
        } catch (a) {
            "object" === ("undefined" == typeof window ? "undefined" : e(window)) && (d = window)
        }
        a.exports = d
    }, function(a, b, c) {
        "use strict";
        a.exports = function() {
            return {
                platform: function() {
                    return Modernizr.mobile || !1
                },
                screen: function() {
                    return Modernizr.mq("(max-width: 1080px)")
                },
                touch: function() {
                    return Modernizr.touchevents || !1
                }
            }
        }
    }, function(a, b, c) {
        "use strict";
        var d = {
            utf8: {
                stringToBytes: function(a) {
                    return d.bin.stringToBytes(unescape(encodeURIComponent(a)))
                },
                bytesToString: function(a) {
                    return decodeURIComponent(escape(d.bin.bytesToString(a)))
                }
            },
            bin: {
                stringToBytes: function(a) {
                    for (var b = [], c = 0; c < a.length; c++) b.push(255 & a.charCodeAt(c));
                    return b
                },
                bytesToString: function(a) {
                    for (var b = [], c = 0; c < a.length; c++) b.push(String.fromCharCode(a[c]));
                    return b.join("")
                }
            }
        };
        a.exports = d
    }, function(a, b, c) {
        "use strict";
        (function(c) {
            var d, e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            };
            ! function(c, f) {
                var g = {},
                    h = c.document,
                    i = c.GreenSockGlobals = c.GreenSockGlobals || c;
                if (!i.TweenLite) {
                    var j, k, l, m, n, o, p, q = function(a) {
                            var b, c = a.split("."),
                                d = i;
                            for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                            return d
                        },
                        r = q("com.greensock"),
                        s = function(a) {
                            var b, c = [],
                                d = a.length;
                            for (b = 0; b !== d; c.push(a[b++]));
                            return c
                        },
                        t = function() {},
                        u = (o = Object.prototype.toString, p = o.call([]), function(a) {
                            return null != a && (a instanceof Array || "object" === (void 0 === a ? "undefined" : e(a)) && !!a.push && o.call(a) === p)
                        }),
                        v = {},
                        w = c._gsDefine = function(c, e, f, h) {
                            return new function c(e, f, h, j) {
                                this.sc = v[e] ? v[e].sc : [], v[e] = this, this.gsClass = null, this.func = h;
                                var k = [];
                                this.check = function(l) {
                                    for (var m, n, o, p, r = f.length, s = r; --r > -1;)(m = v[f[r]] || new c(f[r], [])).gsClass ? (k[r] = m.gsClass, s--) : l && m.sc.push(this);
                                    if (0 === s && h) {
                                        if (o = (n = ("com.greensock." + e).split(".")).pop(), p = q(n.join("."))[o] = this.gsClass = h.apply(h, k), j)
                                            if (i[o] = g[o] = p, void 0 !== a && a.exports)
                                                if ("TweenLite" === e)
                                                    for (r in a.exports = g.TweenLite = p, g) p[r] = g[r];
                                                else g.TweenLite && (g.TweenLite[o] = p);
                                            else void 0 === (d = function() {
                                                return p
                                            }.apply(b, [])) || (a.exports = d);
                                        for (r = 0; r < this.sc.length; r++) this.sc[r].check()
                                    }
                                }, this.check(!0)
                            }(c, e, f, h)
                        },
                        x = r._class = function(a, b, c) {
                            return b = b || function() {}, w(a, [], function() {
                                return b
                            }, c), b
                        };
                    w.globals = i;
                    var y = [0, 0, 1, 1],
                        z = x("easing.Ease", function(a, b, c, d) {
                            this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? y.concat(b) : y
                        }, !0),
                        A = z.map = {},
                        B = z.register = function(a, b, c, d) {
                            for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                                for (f = i[j], e = d ? x("easing." + f, null, !0) : r.easing[f] || {}, g = k.length; --g > -1;) h = k[g], A[f + "." + h] = A[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                        };
                    for ((l = z.prototype)._calcEnd = !1, l.getRatio = function(a) {
                        if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                        var b = this._type,
                            c = this._power,
                            d = 1 === b ? 1 - a : 2 === b ? a : a < .5 ? 2 * a : 2 * (1 - a);
                        return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : a < .5 ? d / 2 : 1 - d / 2
                    }, k = (j = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --k > -1;) l = j[k] + ",Power" + k, B(new z(null, null, 1, k), l, "easeOut", !0), B(new z(null, null, 2, k), l, "easeIn" + (0 === k ? ",easeNone" : "")), B(new z(null, null, 3, k), l, "easeInOut");
                    A.linear = r.easing.Linear.easeIn, A.swing = r.easing.Quad.easeInOut;
                    var C = x("events.EventDispatcher", function(a) {
                        this._listeners = {}, this._eventTarget = a || this
                    });
                    (l = C.prototype).addEventListener = function(a, b, c, d, e) {
                        e = e || 0;
                        var f, g, h = this._listeners[a],
                            i = 0;
                        for (this !== m || n || m.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;)(f = h[g]).c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
                        h.splice(i, 0, {
                            c: b,
                            s: c,
                            up: d,
                            pr: e
                        })
                    }, l.removeEventListener = function(a, b) {
                        var c, d = this._listeners[a];
                        if (d)
                            for (c = d.length; --c > -1;)
                                if (d[c].c === b) return void d.splice(c, 1)
                    }, l.dispatchEvent = function(a) {
                        var b, c, d, e = this._listeners[a];
                        if (e)
                            for ((b = e.length) > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;)(d = e[b]) && (d.up ? d.c.call(d.s || c, {
                                type: a,
                                target: c
                            }) : d.c.call(d.s || c))
                    };
                    var D = c.requestAnimationFrame,
                        E = c.cancelAnimationFrame,
                        F = Date.now || function() {
                            return (new Date).getTime()
                        },
                        G = F();
                    for (k = (j = ["ms", "moz", "webkit", "o"]).length; --k > -1 && !D;) D = c[j[k] + "RequestAnimationFrame"], E = c[j[k] + "CancelAnimationFrame"] || c[j[k] + "CancelRequestAnimationFrame"];
                    x("Ticker", function(a, b) {
                        var c, d, e, f, g, i = this,
                            j = F(),
                            k = !(!1 === b || !D) && "auto",
                            l = 500,
                            o = 33,
                            p = function a(b) {
                                var h, k, m = F() - G;
                                m > l && (j += m - o), G += m, i.time = (G - j) / 1e3, h = i.time - g, (!c || h > 0 || !0 === b) && (i.frame++, g += h + (h >= f ? .004 : f - h), k = !0), !0 !== b && (e = d(a)), k && i.dispatchEvent("tick")
                            };
                        C.call(i), i.time = i.frame = 0, i.tick = function() {
                            p(!0)
                        }, i.lagSmoothing = function(a, b) {
                            if (!arguments.length) return l < 1e10;
                            l = a || 1e10, o = Math.min(b, l, 0)
                        }, i.sleep = function() {
                            null != e && (k && E ? E(e) : clearTimeout(e), d = t, e = null, i === m && (n = !1))
                        }, i.wake = function(a) {
                            null !== e ? i.sleep() : a ? j += -G + (G = F()) : i.frame > 10 && (G = F() - l + 5), d = 0 === c ? t : k && D ? D : function(a) {
                                return setTimeout(a, 1e3 * (g - i.time) + 1 | 0)
                            }, i === m && (n = !0), p(2)
                        }, i.fps = function(a) {
                            if (!arguments.length) return c;
                            f = 1 / ((c = a) || 60), g = this.time + f, i.wake()
                        }, i.useRAF = function(a) {
                            if (!arguments.length) return k;
                            i.sleep(), k = a, i.fps(c)
                        }, i.fps(a), setTimeout(function() {
                            "auto" === k && i.frame < 5 && "hidden" !== (h || {}).visibilityState && i.useRAF(!1)
                        }, 1500)
                    }), (l = r.Ticker.prototype = new r.events.EventDispatcher).constructor = r.Ticker;
                    var H = x("core.Animation", function(a, b) {
                        if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, Z) {
                            n || m.wake();
                            var c = this.vars.useFrames ? Y : Z;
                            c.add(this, c._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    m = H.ticker = new r.Ticker, (l = H.prototype)._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1, ! function a() {
                        n && F() - G > 2e3 && ("hidden" !== (h || {}).visibilityState || !m.lagSmoothing()) && m.wake();
                        var b = setTimeout(a, 2e3);
                        b.unref && b.unref()
                    }(), l.play = function(a, b) {
                        return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
                    }, l.pause = function(a, b) {
                        return null != a && this.seek(a, b), this.paused(!0)
                    }, l.resume = function(a, b) {
                        return null != a && this.seek(a, b), this.paused(!1)
                    }, l.seek = function(a, b) {
                        return this.totalTime(Number(a), !1 !== b)
                    }, l.restart = function(a, b) {
                        return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
                    }, l.reverse = function(a, b) {
                        return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
                    }, l.render = function(a, b, c) {}, l.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, l.isActive = function() {
                        var a, b = this._timeline,
                            c = this._startTime;
                        return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7
                    }, l._enabled = function(a, b) {
                        return n || m.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
                    }, l._kill = function(a, b) {
                        return this._enabled(!1, !1)
                    }, l.kill = function(a, b) {
                        return this._kill(a, b), this
                    }, l._uncache = function(a) {
                        for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                        return this
                    }, l._swapSelfInParams = function(a) {
                        for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                        return c
                    }, l._callback = function(a) {
                        var b = this.vars,
                            c = b[a],
                            d = b[a + "Params"],
                            e = b[a + "Scope"] || b.callbackScope || this;
                        switch (d ? d.length : 0) {
                            case 0:
                                c.call(e);
                                break;
                            case 1:
                                c.call(e, d[0]);
                                break;
                            case 2:
                                c.call(e, d[0], d[1]);
                                break;
                            default:
                                c.apply(e, d)
                        }
                    }, l.eventCallback = function(a, b, c, d) {
                        if ("on" === (a || "").substr(0, 2)) {
                            var e = this.vars;
                            if (1 === arguments.length) return e[a];
                            null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = u(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                        }
                        return this
                    }, l.delay = function(a) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
                    }, l.duration = function(a) {
                        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, l.totalDuration = function(a) {
                        return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
                    }, l.time = function(a, b) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
                    }, l.totalTime = function(a, b, c) {
                        if (n || m.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (a < 0 && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var d = this._totalDuration,
                                    e = this._timeline;
                                if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                                    for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === a && 0 !== this._duration || (L.length && _(), this.render(a, b, !1), L.length && _())
                        }
                        return this
                    }, l.progress = l.totalProgress = function(a, b) {
                        var c = this.duration();
                        return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
                    }, l.startTime = function(a) {
                        return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
                    }, l.endTime = function(a) {
                        return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
                    }, l.timeScale = function(a) {
                        if (!arguments.length) return this._timeScale;
                        var b, c;
                        for (a = a || 1e-10, this._timeline && this._timeline.smoothChildTiming && (c = (b = this._pauseTime) || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) c._dirty = !0, c.totalDuration(), c = c.timeline;
                        return this
                    }, l.reversed = function(a) {
                        return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, l.paused = function(a) {
                        if (!arguments.length) return this._paused;
                        var b, c, d = this._timeline;
                        return a != this._paused && d && (n || a || m.wake(), c = (b = d.rawTime()) - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
                    };
                    var I = x("core.SimpleTimeline", function(a) {
                        H.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    (l = I.prototype = new H).constructor = I, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function(a, b, c, d) {
                        var e, f;
                        if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                            for (f = a._startTime; e && e._startTime > f;) e = e._prev;
                        return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
                    }, l._remove = function(a, b) {
                        return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, l.render = function(a, b, c) {
                        var d, e = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
                    }, l.rawTime = function() {
                        return n || m.wake(), this._totalTime
                    };
                    var J = x("TweenLite", function(a, b, d) {
                            if (H.call(this, b, d), this.render = J.prototype.render, null == a) throw "Cannot tween a null target.";
                            this.target = a = "string" != typeof a ? a : J.selector(a) || a;
                            var e, f, g, h = a.jquery || a.length && a !== c && a[0] && (a[0] === c || a[0].nodeType && a[0].style && !a.nodeType),
                                i = this.vars.overwrite;
                            if (this._overwrite = i = null == i ? X[J.defaultOverwrite] : "number" == typeof i ? i >> 0 : X[i], (h || a instanceof Array || a.push && u(a)) && "number" != typeof a[0])
                                for (this._targets = g = s(a), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++)(f = g[e]) ? "string" != typeof f ? f.length && f !== c && f[0] && (f[0] === c || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(s(f))) : (this._siblings[e] = aa(f, this, !1), 1 === i && this._siblings[e].length > 1 && ca(f, this, null, 1, this._siblings[e])) : "string" == typeof(f = g[e--] = J.selector(f)) && g.splice(e + 1, 1) : g.splice(e--, 1);
                            else this._propLookup = {}, this._siblings = aa(a, this, !1), 1 === i && this._siblings.length > 1 && ca(a, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === b && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        K = function(a) {
                            return a && a.length && a !== c && a[0] && (a[0] === c || a[0].nodeType && a[0].style && !a.nodeType)
                        };
                    (l = J.prototype = new H).constructor = J, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, J.version = "1.20.4", J.defaultEase = l._ease = new z(null, null, 1, 1), J.defaultOverwrite = "auto", J.ticker = m, J.autoSleep = 120, J.lagSmoothing = function(a, b) {
                        m.lagSmoothing(a, b)
                    }, J.selector = c.$ || c.jQuery || function(a) {
                        var b = c.$ || c.jQuery;
                        return b ? (J.selector = b, b(a)) : void 0 === h ? a : h.querySelectorAll ? h.querySelectorAll(a) : h.getElementById("#" === a.charAt(0) ? a.substr(1) : a)
                    };
                    var L = [],
                        M = {},
                        N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        O = /[\+-]=-?[\.\d]/,
                        P = function(a) {
                            for (var b, c = this._firstPT; c;) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : b < 1e-6 && b > -1e-6 && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
                        },
                        Q = function(a, b, c, d) {
                            var e, f, g, h, i, j, k, l = [],
                                m = 0,
                                n = "",
                                o = 0;
                            for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(N) || [], f = b.match(N) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; h < i; h++) k = f[h], n += (j = b.substr(m, b.indexOf(k, m) - m)) || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                                _next: l._firstPT,
                                t: l,
                                p: l.length - 1,
                                s: g,
                                c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                                f: 0,
                                m: o && o < 4 ? Math.round : 0
                            }), m += k.length;
                            return (n += b.substr(m)) && l.push(n), l.setRatio = P, O.test(b) && (l.end = null), l
                        },
                        R = function(a, b, c, d, f, g, h, i, j) {
                            "function" == typeof d && (d = d(j || 0, a));
                            var k = e(a[b]),
                                l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                                m = "get" !== c ? c : l ? h ? a[l](h) : a[l]() : a[b],
                                n = "string" == typeof d && "=" === d.charAt(1),
                                o = {
                                    t: a,
                                    p: b,
                                    s: m,
                                    f: "function" === k,
                                    pg: 0,
                                    n: f || b,
                                    m: g ? "function" == typeof g ? g : Math.round : 0,
                                    pr: 0,
                                    c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
                                };
                            if (("number" != typeof m || "number" != typeof d && !n) && (h || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = h, o = {
                                t: Q(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, i || J.defaultStringFilter, o),
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: f || b,
                                pr: 0,
                                m: 0
                            }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c) return (o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o
                        },
                        S = J._internals = {
                            isArray: u,
                            isSelector: K,
                            lazyTweens: L,
                            blobDif: Q
                        },
                        T = J._plugins = {},
                        U = S.tweenLookup = {},
                        V = 0,
                        W = S.reservedProps = {
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
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1
                        },
                        X = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        Y = H._rootFramesTimeline = new I,
                        Z = H._rootTimeline = new I,
                        $ = 30,
                        _ = S.lazyRender = function() {
                            var a, b = L.length;
                            for (M = {}; --b > -1;)(a = L[b]) && !1 !== a._lazy && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                            L.length = 0
                        };
                    Z._startTime = m.time, Y._startTime = m.frame, Z._active = Y._active = !0, setTimeout(_, 1), H._updateRoot = J.render = function() {
                        var a, b, c;
                        if (L.length && _(), Z.render((m.time - Z._startTime) * Z._timeScale, !1, !1), Y.render((m.frame - Y._startTime) * Y._timeScale, !1, !1), L.length && _(), m.frame >= $) {
                            for (c in $ = m.frame + (parseInt(J.autoSleep, 10) || 120), U) {
                                for (a = (b = U[c].tweens).length; --a > -1;) b[a]._gc && b.splice(a, 1);
                                0 === b.length && delete U[c]
                            }
                            if ((!(c = Z._first) || c._paused) && J.autoSleep && !Y._first && 1 === m._listeners.tick.length) {
                                for (; c && c._paused;) c = c._next;
                                c || m.sleep()
                            }
                        }
                    }, m.addEventListener("tick", H._updateRoot);
                    var aa = function(a, b, c) {
                            var d, e, f = a._gsTweenID;
                            if (U[f || (a._gsTweenID = f = "t" + V++)] || (U[f] = {
                                target: a,
                                tweens: []
                            }), b && ((d = U[f].tweens)[e = d.length] = b, c))
                                for (; --e > -1;) d[e] === b && d.splice(e, 1);
                            return U[f].tweens
                        },
                        ba = function(a, b, c, d) {
                            var e, f, g = a.vars.onOverwrite;
                            return g && (e = g(a, b, c, d)), (g = J.onOverwrite) && (f = g(a, b, c, d)), !1 !== e && !1 !== f
                        },
                        ca = function(a, b, c, d, e) {
                            var f, g, h, i;
                            if (1 === d || d >= 4) {
                                for (i = e.length, f = 0; f < i; f++)
                                    if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                                    else if (5 === d) break;
                                return g
                            }
                            var j, k = b._startTime + 1e-10,
                                l = [],
                                m = 0,
                                n = 0 === b._duration;
                            for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || da(b, 0, n), 0 === da(h, j, n) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((n || !h._initted) && k - h._startTime <= 2e-10 || (l[m++] = h)));
                            for (f = m; --f > -1;)
                                if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                                    if (2 !== d && !ba(h, b)) continue;
                                    h._enabled(!1, !1) && (g = !0)
                                } return g
                        },
                        da = function(a, b, c) {
                            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                                if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                                d = d._timeline
                            }
                            return (f /= e) > b ? f - b : c && f === b || !a._initted && f - b < 2e-10 ? 1e-10 : (f += a.totalDuration() / a._timeScale / e) > b + 1e-10 ? 0 : f - b - 1e-10
                        };
                    l._init = function() {
                        var a, b, c, d, e, f, g = this.vars,
                            h = this._overwrittenProps,
                            i = this._duration,
                            j = !!g.immediateRender,
                            k = g.ease;
                        if (g.startAt) {
                            for (d in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {}, g.startAt) e[d] = g.startAt[d];
                            if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && !1 !== g.lazy, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = J.to(this.target, 0, e), j)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== i) return
                        } else if (g.runBackwards && 0 !== i)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                for (d in 0 !== this._time && (j = !1), c = {}, g) W[d] && "autoCSS" !== d || (c[d] = g[d]);
                                if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && !1 !== g.lazy, c.immediateRender = j, this._startAt = J.to(this.target, 0, c), j) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            } if (this._ease = k = k ? k instanceof z ? k : "function" == typeof k ? new z(k, g.easeParams) : A[k] || J.defaultEase : J.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (f = this._targets.length, a = 0; a < f; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
                        else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
                        if (b && J._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                            for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                        this._onUpdate = g.onUpdate, this._initted = !0
                    }, l._initProps = function(a, b, d, e, f) {
                        var g, h, i, j, k, l;
                        if (null == a) return !1;
                        for (g in M[a._gsTweenID] && _(), this.vars.css || a.style && a !== c && a.nodeType && T.css && !1 !== this.vars.autoCSS && function(a, b) {
                            var c, d = {};
                            for (c in a) W[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!T[c] || T[c] && T[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                            a.css = d
                        }(this.vars, a), this.vars)
                            if (l = this.vars[g], W[g]) l && (l instanceof Array || l.push && u(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                            else if (T[g] && (j = new T[g])._onInitTween(a, this.vars[g], this, f)) {
                                for (this._firstPT = k = {
                                    _next: this._firstPT,
                                    t: j,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: g,
                                    pg: 1,
                                    pr: j._priority,
                                    m: 0
                                }, h = j._overwriteProps.length; --h > -1;) b[j._overwriteProps[h]] = this._firstPT;
                                (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
                            } else b[g] = R.call(this, a, g, "get", l, g, 0, null, this.vars.stringFilter, f);
                        return e && this._kill(e, a) ? this._initProps(a, b, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ca(a, this, b, this._overwrite, d) ? (this._kill(b, a), this._initProps(a, b, d, e, f)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (M[a._gsTweenID] = !0), i)
                    }, l.render = function(a, b, c) {
                        var d, e, f, g, h = this._time,
                            i = this._duration,
                            j = this._rawPrevTime;
                        if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (j < 0 || a <= 0 && a >= -1e-7 || 1e-10 === j && "isPause" !== this.data) && j !== a && (c = !0, j > 1e-10 && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : 1e-10);
                        else if (a < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), a < 0 && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (1e-10 !== j || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);
                        else if (this._totalTime = this._time = a, this._easeType) {
                            var k = a / i,
                                l = this._easeType,
                                m = this._easePower;
                            (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), this.ratio = 1 === l ? 1 - k : 2 === l ? k : a / i < .5 ? k / 2 : 1 - k / 2
                        } else this.ratio = this._ease.getRatio(a / i);
                        if (this._time !== h || c) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, L.push(this), void(this._lazy = [a, b]);
                                this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== i || b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                            this._onUpdate && (a < 0 && this._startAt && -1e-4 !== a && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (this._gc && !c || (a < 0 && this._startAt && !this._onUpdate && -1e-4 !== a && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && 1e-10 === this._rawPrevTime && 1e-10 !== g && (this._rawPrevTime = 0)))
                        }
                    }, l._kill = function(a, b, c) {
                        if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        b = "string" != typeof b ? b || this._targets || this.target : J.selector(b) || b;
                        var d, f, g, h, i, j, k, l, m, n = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
                        if ((u(b) || K(b)) && "number" != typeof b[0])
                            for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (j = !0);
                        else {
                            if (this._targets) {
                                for (d = this._targets.length; --d > -1;)
                                    if (b === this._targets[d]) {
                                        i = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], f = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                                        break
                                    }
                            } else {
                                if (b !== this.target) return !1;
                                i = this._propLookup, f = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                            }
                            if (i) {
                                if (k = a || i, l = a !== f && "all" !== f && a !== i && ("object" !== (void 0 === a ? "undefined" : e(a)) || !a._tempKill), c && (J.onOverwrite || this.vars.onOverwrite)) {
                                    for (g in k) i[g] && (m || (m = []), m.push(g));
                                    if ((m || !a) && !ba(this, c, b, m)) return !1
                                }
                                for (g in k)(h = i[g]) && (n && (h.f ? h.t[h.p](h.s) : h.t[h.p] = h.s, j = !0), h.pg && h.t._kill(k) && (j = !0), h.pg && 0 !== h.t._overwriteProps.length || (h._prev ? h._prev._next = h._next : h === this._firstPT && (this._firstPT = h._next), h._next && (h._next._prev = h._prev), h._next = h._prev = null), delete i[g]), l && (f[g] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return j
                    }, l.invalidate = function() {
                        return this._notifyPluginsOfEnabled && J._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], H.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
                    }, l._enabled = function(a, b) {
                        if (n || m.wake(), a && this._gc) {
                            var c, d = this._targets;
                            if (d)
                                for (c = d.length; --c > -1;) this._siblings[c] = aa(d[c], this, !0);
                            else this._siblings = aa(this.target, this, !0)
                        }
                        return H.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && J._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
                    }, J.to = function(a, b, c) {
                        return new J(a, b, c)
                    }, J.from = function(a, b, c) {
                        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new J(a, b, c)
                    }, J.fromTo = function(a, b, c, d) {
                        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new J(a, b, d)
                    }, J.delayedCall = function(a, b, c, d, e) {
                        return new J(b, 0, {
                            delay: a,
                            onComplete: b,
                            onCompleteParams: c,
                            callbackScope: d,
                            onReverseComplete: b,
                            onReverseCompleteParams: c,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: e,
                            overwrite: 0
                        })
                    }, J.set = function(a, b) {
                        return new J(a, 0, b)
                    }, J.getTweensOf = function(a, b) {
                        if (null == a) return [];
                        var c, d, e, f;
                        if (a = "string" != typeof a ? a : J.selector(a) || a, (u(a) || K(a)) && "number" != typeof a[0]) {
                            for (c = a.length, d = []; --c > -1;) d = d.concat(J.getTweensOf(a[c], b));
                            for (c = d.length; --c > -1;)
                                for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                        } else if (a._gsTweenID)
                            for (c = (d = aa(a).concat()).length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                        return d || []
                    }, J.killTweensOf = J.killDelayedCallsTo = function(a, b, c) {
                        "object" === (void 0 === b ? "undefined" : e(b)) && (c = b, b = !1);
                        for (var d = J.getTweensOf(a, b), f = d.length; --f > -1;) d[f]._kill(c, a)
                    };
                    var ea = x("plugins.TweenPlugin", function(a, b) {
                        this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ea.prototype
                    }, !0);
                    if (l = ea.prototype, ea.version = "1.19.0", ea.API = 2, l._firstPT = null, l._addTween = R, l.setRatio = P, l._kill = function(a) {
                        var b, c = this._overwriteProps,
                            d = this._firstPT;
                        if (null != a[this._propName]) this._overwriteProps = [];
                        else
                            for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                        for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                        return !1
                    }, l._mod = l._roundProps = function(a) {
                        for (var b, c = this._firstPT; c;)(b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
                    }, J._onPluginEvent = function(a, b) {
                        var c, d, e, f, g, h = b._firstPT;
                        if ("_onInitAllProps" === a) {
                            for (; h;) {
                                for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                                (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                            }
                            h = b._firstPT = e
                        }
                        for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                        return c
                    }, ea.activate = function(a) {
                        for (var b = a.length; --b > -1;) a[b].API === ea.API && (T[(new a[b])._propName] = a[b]);
                        return !0
                    }, w.plugin = function(a) {
                        if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                        var b, c = a.propName,
                            d = a.priority || 0,
                            e = a.overwriteProps,
                            f = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_mod",
                                mod: "_mod",
                                initAll: "_onInitAllProps"
                            },
                            g = x("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                                ea.call(this, c, d), this._overwriteProps = e || []
                            }, !0 === a.global),
                            h = g.prototype = new ea(c);
                        for (b in h.constructor = g, g.API = a.API, f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                        return g.version = a.version, ea.activate([g]), g
                    }, j = c._gsQueue) {
                        for (k = 0; k < j.length; k++) j[k]();
                        for (l in v) v[l].func || c.console.log("GSAP encountered missing dependency: " + l)
                    }
                    n = !1
                }
            }(void 0 !== a && a.exports && void 0 !== c ? c : window)
        }).call(this, c(2))
    }, , , function(a, b, c) {
        "use strict";
        (function(b) {
            var d, e = c(1),
                f = (d = e) && d.__esModule ? d : {
                    default: d
                },
                g = void 0;
            a.exports = function(a, c) {
                var d = b(document),
                    e = b(window),
                    h = b("html"),
                    i = c || "oc-noscroll",
                    j = b("#oc-wrapper"),
                    k = a ? e.scrollTop() : g,
                    l = d.height();
                a ? (h.addClass(i), (0, f.default)(j) && j.css({
                    height: l,
                    marginTop: -k
                }), e.scrollTop(0)) : (h.removeClass(i), (0, f.default)(j) && j.css({
                    height: "",
                    marginTop: ""
                }), e.scrollTop(k)), a && (g = k)
            }
        }).call(this, c(0))
    }, function(a, b, c) {
        "use strict";
        (function(b) {
            var d, e = c(1),
                f = (d = e) && d.__esModule ? d : {
                    default: d
                };
            a.exports = function(a) {
                var c = b("html");
                (0, f.default)(b("#oc-top-mask")) || c.find("body").append('<i id="oc-top-mask" />'), setTimeout(function(b) {
                    a ? !c.hasClass("show-mask") && c.addClass("show-mask") : c.hasClass("show-mask") && c.removeClass("show-mask")
                })
            }
        }).call(this, c(0))
    }, function(a, b, c) {
        "use strict";
        (function(b) {
            a.exports = function(a, c) {
                var d = "string" == typeof a ? b(a) : a,
                    e = b(document);
                d.on("click.stop", function(a) {
                    a.stopPropagation()
                }), e.on("click.outside", function(a) {
                    "function" == typeof c && d.is(":visible") && c()
                })
            }
        }).call(this, c(0))
    }, function(a, b, c) {
        "use strict";
        (function(a) {
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.default = function(b) {
                return !!("string" == typeof b ? a(b) : b).is(":visible")
            }
        }).call(this, c(0))
    }, function(a, b, c) {
        "use strict";
        (function(a) {
            function b(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }
            b(c(11)), b(c(10));
            var d = b(c(9)),
                e = b(c(8));
            a(function() {
                var b = a("#address-province .select-input"),
                    c = a("#address-province .select-dropdown"),
                    f = a("#address-city .select-input"),
                    g = a("#address-city .select-dropdown"),
                    h = a("#shop-type .select-input"),
                    i = a("#shop-type .select-dropdown"),
                    j = (a(".select-dropdown-item"), a(".view-map"));
                b.click(function() {
                    return c.toggle(), g.hide(), i.hide(), !1
                }), f.click(function() {
                    return g.toggle(), c.hide(), i.hide(), !1
                }), h.click(function() {
                    return i.toggle(), c.hide(), g.hide(), !1
                }), a("body").click(function() {
                    a(".select-dropdown").hide()
                }), a(".select-dropdown").click(function() {
                    return a(this).show(), !1
                }), c.find(".item-text").click(function() {
                    var d = a(this).html();
                    b.find(".select-input-text").html(d), c.hide();
                    var e = a(this).parent().data("href");
                    return e && (window.location.href = e), !1
                }), g.find(".item-text").click(function() {
                    var b = a(this).html();
                    f.find(".select-input-text").html(b), g.hide();
                    var c = a(this).parent().data("href");
                    return c && (window.location.href = c), !1
                }), i.find(".select-dropdown-item").length && a("#shop-type").removeClass("hide"), i.find(".item-text").click(function() {
                    var b = a(this).html();
                    h.find(".select-input-text").html(b).css("color", "#333"), i.hide();
                    var c = a(this).data("type");
                    return c && (a(".map-address-item").addClass("hide"), a(".map-address").find("[data-type=" + c + "]").removeClass("hide")), a("#shops .map-address-item:visible").length ? a("#shops .search-error").addClass("hide") : a("#shops .search-error").removeClass("hide"), !1
                });
                var k = null;
                j.click(function() {
                    var b = a(this).data("marker"),
                        c = {
                            center: new google.maps.LatLng({
                                lat: b.lat,
                                lng: b.lng
                            }),
                            zoom: b.zoom || 10,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                    k = new google.maps.Map(document.getElementById("map_canvas"), c),
                        function(a) {
                            var b = new google.maps.LatLng(a.lat, a.lng),
                                c = new google.maps.Marker({
                                    position: b,
                                    map: k,
                                    title: a.name,
                                    html: "<div style='padding:.32rem;'><h3 style='font-size:.32rem;'>" + a.name + "</h3><br /> <br/>" + a.address + "<br /><br />  " + a.phone_number + "</div>"
                                }),
                                d = new google.maps.InfoWindow({
                                    content: c.html
                                });
                            google.maps.event.addListener(c, "click", function() {
                                d.close(), d.setContent(this.html), d.open(k, this)
                            })
                        }(b), a("#map-model").show(), (0, d.default)(!0), (0, e.default)(!0)
                }), a("#oc-top-mask, #map-model .close-btn").click(function() {
                    a("#map-model").hide(), (0, d.default)(!1), (0, e.default)(!1)
                })
            })
        }).call(this, c(0))
    }, function(a, b, c) {
        "use strict";
        (function(a) {
            function d(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var e = d(c(3)),
                f = d(c(1));
            b.default = function() {
                var b = {},
                    c = void 0,
                    d = function() {
                        var a = b,
                            d = a.pc,
                            e = a.mobile;
                        c.screen() ? (void 0 === e && (g(), b.mobile = !0), b.ismobile = !0, h(!0)) : (void 0 === d && (b.pc = !0), b.ismobile = !1, h(!1))
                    },
                    g = function() {
                        function c(c) {
                            c.preventDefault(), this.isopen ? (a(this).parent().removeClass("active"), this.isopen = !1) : (a(this).parent().addClass("active"), this.isopen = !0, b.$directory = a(this))
                        }
                        b.$footer.find(".of-nav").find(".of-directory dl").each(function(b, d) {
                            a(this).find("dt").on("click.open", c)
                        })
                    },
                    h = function(a) {
                        var c = b.$directory;
                        a || c && c[0].isopen && c.trigger("click.open"), c = null
                    };
                return function() {
                    c = (0, e.default)();
                    var g = a("#oc-footer");
                    if (!(0, f.default)(g)) return !1;
                    b = {
                        $footer: g
                    }, d(), window.addEventListener("resize", d, !0)
                }()
            }
        }).call(this, c(0))
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            return !!a.constructor && "function" == typeof a.constructor.isBuffer && a.constructor.isBuffer(a)
        }
        a.exports = function(a) {
            return null != a && (d(a) || function(a) {
                return "function" == typeof a.readFloatLE && "function" == typeof a.slice && d(a.slice(0, 0))
            }(a) || !!a._isBuffer)
        }
    }, function(a, b, c) {
        "use strict";
        var d, e;
        d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = {
            rotl: function(a, b) {
                return a << b | a >>> 32 - b
            },
            rotr: function(a, b) {
                return a << 32 - b | a >>> b
            },
            endian: function(a) {
                if (a.constructor == Number) return 16711935 & e.rotl(a, 8) | 4278255360 & e.rotl(a, 24);
                for (var b = 0; b < a.length; b++) a[b] = e.endian(a[b]);
                return a
            },
            randomBytes: function(a) {
                for (var b = []; a > 0; a--) b.push(Math.floor(256 * Math.random()));
                return b
            },
            bytesToWords: function(a) {
                for (var b = [], c = 0, d = 0; c < a.length; c++, d += 8) b[d >>> 5] |= a[c] << 24 - d % 32;
                return b
            },
            wordsToBytes: function(a) {
                for (var b = [], c = 0; c < 32 * a.length; c += 8) b.push(a[c >>> 5] >>> 24 - c % 32 & 255);
                return b
            },
            bytesToHex: function(a) {
                for (var b = [], c = 0; c < a.length; c++) b.push((a[c] >>> 4).toString(16)), b.push((15 & a[c]).toString(16));
                return b.join("")
            },
            hexToBytes: function(a) {
                for (var b = [], c = 0; c < a.length; c += 2) b.push(parseInt(a.substr(c, 2), 16));
                return b
            },
            bytesToBase64: function(a) {
                for (var b = [], c = 0; c < a.length; c += 3)
                    for (var e = a[c] << 16 | a[c + 1] << 8 | a[c + 2], f = 0; f < 4; f++) 8 * c + 6 * f <= 8 * a.length ? b.push(d.charAt(e >>> 6 * (3 - f) & 63)) : b.push("=");
                return b.join("")
            },
            base64ToBytes: function(a) {
                a = a.replace(/[^A-Z0-9+\/]/gi, "");
                for (var b = [], c = 0, e = 0; c < a.length; e = ++c % 4) 0 != e && b.push((d.indexOf(a.charAt(c - 1)) & Math.pow(2, -2 * e + 8) - 1) << 2 * e | d.indexOf(a.charAt(c)) >>> 6 - 2 * e);
                return b
            }
        }, a.exports = e
    }, function(a, b, c) {
        "use strict";
        var d, e, f, g, h;
        d = c(15), e = c(4).utf8, f = c(14), g = c(4).bin, (h = function a(b, c) {
            b.constructor == String ? b = c && "binary" === c.encoding ? g.stringToBytes(b) : e.stringToBytes(b) : f(b) ? b = Array.prototype.slice.call(b, 0) : Array.isArray(b) || (b = b.toString());
            for (var h = d.bytesToWords(b), i = 8 * b.length, j = 1732584193, k = -271733879, l = -1732584194, m = 271733878, n = 0; n < h.length; n++) h[n] = 16711935 & (h[n] << 8 | h[n] >>> 24) | 4278255360 & (h[n] << 24 | h[n] >>> 8);
            h[i >>> 5] |= 128 << i % 32, h[14 + (i + 64 >>> 9 << 4)] = i;
            var o = a._ff,
                p = a._gg,
                q = a._hh,
                r = a._ii;
            for (n = 0; n < h.length; n += 16) {
                var s = j,
                    t = k,
                    u = l,
                    v = m;
                k = r(k = r(k = r(k = r(k = q(k = q(k = q(k = q(k = p(k = p(k = p(k = p(k = o(k = o(k = o(k = o(k, l = o(l, m = o(m, j = o(j, k, l, m, h[n + 0], 7, -680876936), k, l, h[n + 1], 12, -389564586), j, k, h[n + 2], 17, 606105819), m, j, h[n + 3], 22, -1044525330), l = o(l, m = o(m, j = o(j, k, l, m, h[n + 4], 7, -176418897), k, l, h[n + 5], 12, 1200080426), j, k, h[n + 6], 17, -1473231341), m, j, h[n + 7], 22, -45705983), l = o(l, m = o(m, j = o(j, k, l, m, h[n + 8], 7, 1770035416), k, l, h[n + 9], 12, -1958414417), j, k, h[n + 10], 17, -42063), m, j, h[n + 11], 22, -1990404162), l = o(l, m = o(m, j = o(j, k, l, m, h[n + 12], 7, 1804603682), k, l, h[n + 13], 12, -40341101), j, k, h[n + 14], 17, -1502002290), m, j, h[n + 15], 22, 1236535329), l = p(l, m = p(m, j = p(j, k, l, m, h[n + 1], 5, -165796510), k, l, h[n + 6], 9, -1069501632), j, k, h[n + 11], 14, 643717713), m, j, h[n + 0], 20, -373897302), l = p(l, m = p(m, j = p(j, k, l, m, h[n + 5], 5, -701558691), k, l, h[n + 10], 9, 38016083), j, k, h[n + 15], 14, -660478335), m, j, h[n + 4], 20, -405537848), l = p(l, m = p(m, j = p(j, k, l, m, h[n + 9], 5, 568446438), k, l, h[n + 14], 9, -1019803690), j, k, h[n + 3], 14, -187363961), m, j, h[n + 8], 20, 1163531501), l = p(l, m = p(m, j = p(j, k, l, m, h[n + 13], 5, -1444681467), k, l, h[n + 2], 9, -51403784), j, k, h[n + 7], 14, 1735328473), m, j, h[n + 12], 20, -1926607734), l = q(l, m = q(m, j = q(j, k, l, m, h[n + 5], 4, -378558), k, l, h[n + 8], 11, -2022574463), j, k, h[n + 11], 16, 1839030562), m, j, h[n + 14], 23, -35309556), l = q(l, m = q(m, j = q(j, k, l, m, h[n + 1], 4, -1530992060), k, l, h[n + 4], 11, 1272893353), j, k, h[n + 7], 16, -155497632), m, j, h[n + 10], 23, -1094730640), l = q(l, m = q(m, j = q(j, k, l, m, h[n + 13], 4, 681279174), k, l, h[n + 0], 11, -358537222), j, k, h[n + 3], 16, -722521979), m, j, h[n + 6], 23, 76029189), l = q(l, m = q(m, j = q(j, k, l, m, h[n + 9], 4, -640364487), k, l, h[n + 12], 11, -421815835), j, k, h[n + 15], 16, 530742520), m, j, h[n + 2], 23, -995338651), l = r(l, m = r(m, j = r(j, k, l, m, h[n + 0], 6, -198630844), k, l, h[n + 7], 10, 1126891415), j, k, h[n + 14], 15, -1416354905), m, j, h[n + 5], 21, -57434055), l = r(l, m = r(m, j = r(j, k, l, m, h[n + 12], 6, 1700485571), k, l, h[n + 3], 10, -1894986606), j, k, h[n + 10], 15, -1051523), m, j, h[n + 1], 21, -2054922799), l = r(l, m = r(m, j = r(j, k, l, m, h[n + 8], 6, 1873313359), k, l, h[n + 15], 10, -30611744), j, k, h[n + 6], 15, -1560198380), m, j, h[n + 13], 21, 1309151649), l = r(l, m = r(m, j = r(j, k, l, m, h[n + 4], 6, -145523070), k, l, h[n + 11], 10, -1120210379), j, k, h[n + 2], 15, 718787259), m, j, h[n + 9], 21, -343485551), j = j + s >>> 0, k = k + t >>> 0, l = l + u >>> 0, m = m + v >>> 0
            }
            return d.endian([j, k, l, m])
        })._ff = function(a, b, c, d, e, f, g) {
            var h = a + (b & c | ~b & d) + (e >>> 0) + g;
            return (h << f | h >>> 32 - f) + b
        }, h._gg = function(a, b, c, d, e, f, g) {
            var h = a + (b & d | c & ~d) + (e >>> 0) + g;
            return (h << f | h >>> 32 - f) + b
        }, h._hh = function(a, b, c, d, e, f, g) {
            var h = a + (b ^ c ^ d) + (e >>> 0) + g;
            return (h << f | h >>> 32 - f) + b
        }, h._ii = function(a, b, c, d, e, f, g) {
            var h = a + (c ^ (b | ~d)) + (e >>> 0) + g;
            return (h << f | h >>> 32 - f) + b
        }, h._blocksize = 16, h._digestsize = 16, a.exports = function(a, b) {
            if (void 0 === a || null === a) throw new Error("Illegal argument " + a);
            var c = d.wordsToBytes(h(a, b));
            return b && b.asBytes ? c : b && b.asString ? g.bytesToString(c) : d.bytesToHex(c)
        }
    }, function(a, b, c) {
        "use strict";
        (function(a) {
            function d(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var e = d(c(16)),
                f = d(c(3)),
                g = d(c(1));
            b.default = function() {
                var b = {},
                    c = void 0,
                    d = ["white", "black"],
                    h = {},
                    i = function() {
                        var a = b,
                            d = a.mobile,
                            e = a.pc,
                            f = a.$wrap,
                            g = a.$navList,
                            i = a.$menuBtn;
                        a.$productsLinkItem, a.$bagBtn, a.$header, c.screen() ? (void 0 === d && (h.navProductsWap(), b.mobile = !0), b.ismobile = !0, h.domReset(!0), g.css("display", "none")) : (void 0 === e && (h.navProducts(), b.pc = !0), b.ismobile = !1, h.domReset(!1), i && i[0].isopen && i.trigger("click.list"), g.is(":hidden") && g.css("display", "")), void 0 === d && void 0 === e && (b.main = !!f.hasClass("main"))
                    };
                h.navProducts = function() {
                    function a(c) {
                        b.ismobile ? j.find("a").css({
                            height: ""
                        }) : l.is(":visible") && l.width() > 100 ? j.find("a").css({
                            height: l.width()
                        }) : setTimeout(a)
                    }
                    var c = b,
                        d = c.$win,
                        e = c.$header,
                        f = c.$navList,
                        g = c.$productsLink,
                        h = c.$productsMenu,
                        i = c.$queue,
                        j = (c.$wrap, f.find("ul li")),
                        l = j.first().find("a").find("img").first();
                    f.css("display", "");
                    var m = new TimelineMax({
                        paused: !0
                    });
                    m.from(h, .3, {
                        autoAlpha: 0
                    }).staggerFrom(i, .5, {
                        autoAlpha: 0,
                        y: 13,
                        ease: Cubic.easeOut
                    }, .05, "-=.1"), m.eventCallback("onReverseComplete", function() {
                        TweenMax.set(h, {
                            display: ""
                        }), g[0].isopen = !1
                    });
                    var n = !1,
                        o = function(a) {
                            n || (!b.ismobile && m.timeScale(2).reverse(), k(!1), void 0 !== b.productsList && b.productsList.out(), e.removeClass("oh-productslist-show"))
                        };
                    g.children("a").on({
                        mouseenter: function(c) {
                            b.ismobile || g[0].isopen || (n = !0, g[0].isopen = !0, TweenMax.set(h, {
                                display: "block"
                            }), setTimeout(function() {
                                m.timeScale(1).seek(0).play(), k(!0), a()
                            }, 10), e.addClass("oh-productslist-show"), void 0 !== b.productsList && b.productsList.in())
                        },
                        mouseleave: function(a) {
                            n = !1, setTimeout(o)
                        },
                        click: function(a) {}
                    }), h.find(".oh-navpro-content").on({
                        mouseenter: function(a) {
                            n = !0
                        },
                        mouseleave: function(a) {
                            n = !1, setTimeout(o)
                        }
                    }), d.on("resize.imgresize", a), b.animate = m
                }, h.navProductsWap = function() {
                    var c = a.trigger("open:navList@mobile"),
                        d = b,
                        e = d.$mask,
                        f = d.$header,
                        g = (d.$nav, d.$navList),
                        i = d.$productsLink,
                        j = i.find(".oh-navitem-link");
                    f.on("touchstart touchmove", function(a) {
                        a.stopPropagation()
                    }), c.on("click.list", function(b) {
                        b.preventDefault(), g.is(":hidden") && g.css("display", ""), setTimeout(function(b) {
                            return a(".oh-navlist-wrapper").scrollTop(0)
                        }, 500), this.isopen ? (f.removeClass("openHeaderMenu"), this.isopen = !1, k(!1), l(!1), j && j[0].isopen && j.trigger("click.menu"), h.showNotice(!0)) : (f.addClass("openHeaderMenu"), this.isopen = !0, k(!0), l(!0), h.showNotice(!1), e.off("click").on("click.navmenulayer", function(a) {
                            c.trigger("click")
                        }))
                    }), j.on("click.menu", function(a) {
                        a.preventDefault(), this.isopen ? (i.removeClass("active"), this.isopen = !1) : (i.addClass("active"), this.isopen = !0)
                    }), b.$menuBtn = c
                }, h.navBag = function() {
                    var a = b,
                        c = a.$header,
                        d = a.$nav,
                        e = (a.$bagBtn, d.find("#oh-navpopup-bag")),
                        f = !1,
                        g = null;
                    void 0 === b.$bagBtn && (b.$bagBtn = d.find(".oh-nav-link")), b.$bagBtn.on("mouseenter.open mouseleave.open", function(a) {
                        if (a.preventDefault(), !b.ismobile) {
                            var d = this;
                            d.isopen ? (f = !1, g && clearTimeout(g), g = setTimeout(function() {
                                !f && (c.removeClass("openNavBag"), d.isopen = !1)
                            }, 100)) : (g && clearTimeout(g), c.addClass("openNavBag"), d.isopen = !0, e[0].isopen = !1, f = !0)
                        }
                    }).on("click.show", function(a) {
                        !b.ismobile && a.preventDefault()
                    }), e.on("mouseenter.show mouseleave.show", function(a) {
                        var d = this;
                        b.ismobile || (d.isopen ? (f = !1, g && clearTimeout(g), g = setTimeout(function() {
                            !f && (c.removeClass("openNavBag"), d.isopen = !1)
                        }, 100)) : (g && clearTimeout(g), d.isopen = !0, b.$bagBtn[0].isopen = !1, f = !0))
                    })
                }, h.navBagWap = function() {
                    function a(a) {
                        b.$bagBtn[0].isopen && b.$bagBtn.trigger("click.open")
                    }
                    var d = b,
                        e = d.$header,
                        f = d.$nav,
                        g = (d.$bagBtn, d.$mask);
                    void 0 === b.$bagBtn && (b.$bagBtn = f.find(".oh-nav-link")), m("#oh-navpopup-bag", function(b) {
                        a()
                    }), b.$bagBtn.on("touchstart.open click.open", function(d) {
                        d.preventDefault(), !c.platform() && d.stopPropagation(), b.$menuBtn && b.$menuBtn[0].isopen && b.$menuBtn.trigger("click.list"), this.isopen ? (e.removeClass("openNavBag"), this.isopen = !1, h.showNotice(!0), b.ismobile && k(!1)) : (e.addClass("openNavBag"), this.isopen = !0, h.showNotice(!1), b.ismobile && k(!0), g.off("click").on("click.closeBag", a))
                    }), document.addEventListener("scroll", a)
                }, h.notice = function(a) {
                    var c = !1,
                        d = b.$notice,
                        f = (new Date).getTime() / 1e3,
                        h = d.data("start-time"),
                        i = d.data("end-time");
                    if ((0, g.default)(d) && !n((0, e.default)("oc_notice_id" + d.data("id"))) && f > h && f < i) {
                        d[0].isshow = !0;
                        var j = d.find(".ont-close"),
                            k = d.find(".ont-layer"),
                            l = b.ismobile ? 44 : 55,
                            m = b.main ? Cubic.easeInOut : Ease.easeLinear,
                            p = b.main ? .8 : .5;
                        d.show(), TweenMax.from(k, p, {
                            y: -l,
                            delay: 1,
                            ease: m,
                            onComplete: function() {
                                setTimeout(function(a) {
                                    d.addClass("show-notice")
                                }, 100), c = !0
                            }
                        }), b.main || (d.css({
                            height: 0
                        }), setTimeout(function(a) {
                            TweenMax.to(d, p, {
                                height: l,
                                delay: 1,
                                ease: m,
                                onComplete: function() {}
                            })
                        })), j.off(".close").on("click.close", function(a) {
                            if (a.preventDefault(), c) {
                                var f = {
                                    autoAlpha: 0
                                };
                                b.main || (f = {
                                    height: 0
                                }), TweenMax.to(d, .5, {
                                    css: f,
                                    onComplete: function() {
                                        d.hide(), d[0].isshow = !1
                                    }
                                }), o((0, e.default)("oc_notice_id" + d.data("id")), !0), j.off(".close")
                            }
                        })
                    }
                }, h.showNotice = function(a) {
                    var c = b.$notice;
                    (0, g.default)(c) && (a ? c[0].isshow && c.is(":hidden") && b.main && b.ismobile && c.show() : c[0].isshow && c.is(":visible") && b.main && b.ismobile && c.hide())
                }, h.utmsource = function() {
                    var a = p("utm_source"),
                        b = p("utm_medium");
                    b || (b = ""), a && o("utm_source", encodeURIComponent(a + ":" + b), 15)
                }, h.domReset = function(a) {
                    var c = b,
                        d = c.$queue,
                        e = c.$productsMenu,
                        f = c.animate;
                    a ? [d, e].forEach(function(a) {
                        return a.removeAttr("style")
                    }) : f && [d].forEach(function(a) {
                        return a.css("opacity", 0)
                    })
                };
                var j = function(a) {
                        var c = b,
                            d = c.$header,
                            e = c.$mask,
                            f = c.$win;
                        c.$html.hasClass("oc-noscroll") ? e.css({
                            top: ""
                        }) : d.hasClass("show-mask") && f.scrollTop() <= d.height() ? e.css({
                            top: d.height() - f.scrollTop()
                        }) : e.css({
                            top: ""
                        })
                    },
                    k = function(a) {
                        var c = b.$header;
                        a ? !c.hasClass("show-mask") && c.addClass("show-mask") : c.hasClass("show-mask") && c.removeClass("show-mask")
                    },
                    l = function(a, c) {
                        var d = b,
                            e = d.$doc,
                            f = d.$win,
                            g = d.$html,
                            h = d.$wrap,
                            i = (d.$header, d._winTop, c || "oc-noscroll"),
                            j = a ? f.scrollTop() : b._winTop,
                            k = e.height();
                        a ? (g.addClass(i), h.length > 0 && TweenMax.set(h, {
                            height: k,
                            marginTop: -j
                        }), f.scrollTop(0)) : (g.removeClass(i), h.length > 0 && TweenMax.set(h, {
                            height: "",
                            marginTop: ""
                        }), f.scrollTop(j)), a && (b._winTop = j)
                    },
                    m = function(b, c) {
                        var d = "string" == typeof b ? a(b) : b;
                        d.on("click.stop", function(a) {
                            a.stopPropagation()
                        }), a(document).on("click.outside", function(a) {
                            void 0 !== c && d.is(":visible") && c()
                        })
                    },
                    n = function(a) {
                        return Cookies(a)
                    },
                    o = function(a, b) {
                        var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                            d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : location.hostname.indexOf("oppo") > -1 ? "." + location.hostname : location.hostname,
                            e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "/";
                        Cookies.set(a, b, {
                            expires: c,
                            domain: d,
                            path: e
                        })
                    },
                    p = function(a) {
                        var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"),
                            c = window.location.search.substr(1).match(b);
                        return null != c ? unescape(c[2]) : null
                    };
                return function() {
                    c = (0, f.default)();
                    var d = a("#oc-header"),
                        e = d.find(".oh-nav"),
                        h = e.find(".oh-nav-list"),
                        k = h.find(".oh-item-products"),
                        l = a("#oh-navpopup-products"),
                        m = l.find("._queue");
                    if (!(0, g.default)(d)) return !1;
                    d.after('<i id="oc-mask" />');
                    var n = a("#oc-mask");
                    b = {
                        $doc: a(document),
                        $win: a(window),
                        $html: a("html"),
                        $notice: a("#oc-notice"),
                        $wrap: a("#oc-wrapper"),
                        $header: d,
                        $nav: e,
                        $navList: h,
                        $productsLink: k,
                        $productsMenu: l,
                        $queue: m,
                        $mask: n
                    }, i(), window.addEventListener("resize", i), window.addEventListener("scroll", j)
                }(), {
                    changeNavTheme: function(a) {
                        var c = b.$header;
                        if ((0, g.default)(c)) return c.hasClass("oh-theme-" + a) || c.addClass("oh-theme-" + a), d.forEach(function(b) {
                            b !== a && c.removeClass("oh-theme-" + b)
                        }), !0
                    },
                    openMask: k,
                    openTopMask: function(c) {
                        var d = b.$wrap;
                        d.length < 1 || (a("#oc-top-mask").length < 1 && d.append('<i id="oc-top-mask" />'), c ? !d.hasClass("show-mask") && d.addClass("show-mask") : d.hasClass("show-mask") && d.removeClass("show-mask"))
                    },
                    noscroll: l,
                    outsideScope: m,
                    getCookies: n,
                    setCookies: o,
                    getQueryString: p
                }
            }
        }).call(this, c(0))
    }, function(a, b, c) {
        "use strict";
        (function(a) {
            ! function(a) {
                a.fn.scrollUnique = function() {
                    return a(this).each(function() {
                        var b = "mousewheel";
                        void 0 !== document.mozHidden && (b = "DOMMouseScroll"), a(this).on(b, function(a) {
                            var b = this.scrollTop,
                                c = this.scrollHeight,
                                d = this.clientHeight,
                                e = a.originalEvent.wheelDelta ? a.originalEvent.wheelDelta : -(a.originalEvent.detail || 0);
                            (e > 0 && b <= e || e < 0 && c - d - b <= -1 * e) && (this.scrollTop = e > 0 ? 0 : c, a.preventDefault())
                        })
                    })
                }, a.extend({
                    trigger: function(b) {
                        return a(b && "*" !== b ? '[data-trigger*="' + b + '"]' : "[data-trigger]")
                    }
                });
                var b = window.navigator.userAgent,
                    c = 999,
                    d = void 0,
                    e = void 0;
                b.indexOf("Edge") > -1 && (d = "edge", c = b.match(/Edge\/([\d.]+)/)), b.indexOf("Safari") > -1 && (d = "safari", c = b.match(/Version\/([\d.]+).*Safari/) ? b.match(/Version\/([\d.]+).*Safari/) : b.match(/Safari\/([\d.]+)/)), b.indexOf("Chrome") > -1 && (d = "chrome", c = b.match(/Chrome\/([\d.]+)/)), b.indexOf("Firefox") > -1 && (d = "firefox", c = b.match(/Firefox\/([\d.]+)/)), b.indexOf("Opera") > -1 && (d = "opera", c = b.match(/Opera.([\d.]+)/)), b.indexOf("UBrowser") > -1 && (d = "uc", c = b.match(/UBrowser\/([\d.]+)/)), b.indexOf("UCBrowser") > -1 && (d = "uc", c = b.match(/UCBrowser\/([\d.]+)/)), b.indexOf("HUAWEI") > -1 && (d = "huawei", c = b.match(/Version\/([\d.]+)/)), b.indexOf("Windows") > -1 && (e = "win"), b.indexOf("Mac OS") > -1 && (e = "mac"), b.indexOf("Linux") > -1 && (e = "linux"), b.indexOf("MSIE") > -1 && (c = b.match(/MSIE (\d+)./), d = "ie"), b.indexOf("Trident/7") > -1 && (d = "ie");
                var f = {
                        ios: !!b.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                        android: b.indexOf("Android") > -1 || b.indexOf("Linux") > -1,
                        mobile: !!b.match(/AppleWebKit.*Mobile.*/) || !!b.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || b.indexOf("Android") > -1 || !!b.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
                        weixin: "MicroMessenger" == !!b.match(/MicroMessenger/i),
                        hd: !!(window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)").matches),
                        aliapp: b.indexOf("AliApp") > -1
                    },
                    g = function(a) {
                        f[a] && Modernizr.addTest(a, function() {
                            return f[a]
                        })
                    };
                for (var h in f) g(h);
                d && Modernizr.addTest(d, function() {
                    return !0
                }), e && Modernizr.addTest(e, function() {
                    return !0
                }), "ie" == d && c[1] <= 10 && Modernizr.addTest("lt-10", function() {
                    return !0
                }), "ie" == d && c[1] < 10 && Modernizr.addTest("lt-9", function() {
                    return !0
                }), c && (Modernizr.browserVersion = c[1]), Modernizr.browserName = d
            }(a)
        }).call(this, c(0))
    }, function(a, b, c) {
        "use strict";
        (function(c) {
            var d, e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                    return typeof a
                } : function(a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                },
                f = void 0 !== a && a.exports && void 0 !== c ? c : window;
            (f._gsQueue || (f._gsQueue = [])).push(function() {
                var a, b, c, d, g, h, i, j, k, l, m, n, o, p;
                f._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                    var d = function(a) {
                            var b, c = [],
                                d = a.length;
                            for (b = 0; b !== d; c.push(a[b++]));
                            return c
                        },
                        e = function(a, b, c) {
                            var d, e, f = a.cycle;
                            for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                            delete a.cycle
                        },
                        f = function a(b, d, e) {
                            c.call(this, b, d, e), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = a.prototype.render
                        },
                        g = c._internals,
                        h = g.isSelector,
                        i = g.isArray,
                        j = f.prototype = c.to({}, .1, {}),
                        k = [];
                    f.version = "1.20.4", j.constructor = f, j.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, j.invalidate = function() {
                        return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this)
                    }, j.updateTo = function(a, b) {
                        var d, e = this.ratio,
                            f = this.vars.immediateRender || a.immediateRender;
                        for (d in b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), a) this.vars[d] = a[d];
                        if (this._initted || f)
                            if (b) this._initted = !1, f && this.render(0, !0, !0);
                            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                var g = this._totalTime;
                                this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1)
                            } else if (this._initted = !1, this._init(), this._time > 0 || f)
                                for (var h, i = 1 / (1 - e), j = this._firstPT; j;) h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
                        return this
                    }, j.render = function(a, b, d) {
                        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                        var e, f, h, i, j, k, l, m, n, o = this._dirty ? this.totalDuration() : this._totalDuration,
                            p = this._time,
                            q = this._totalTime,
                            r = this._cycle,
                            s = this._duration,
                            t = this._rawPrevTime;
                        if (a >= o - 1e-7 && a >= 0 ? (this._totalTime = o, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = s, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, f = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === s && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0), (t < 0 || a <= 0 && a >= -1e-7 || 1e-10 === t && "isPause" !== this.data) && t !== a && (d = !0, t > 1e-10 && (f = "onReverseComplete")), this._rawPrevTime = m = !b || a || t === a ? a : 1e-10)) : a < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== q || 0 === s && t > 0) && (f = "onReverseComplete", e = this._reversed), a < 0 && (this._active = !1, 0 === s && (this._initted || !this.vars.lazy || d) && (t >= 0 && (d = !0), this._rawPrevTime = m = !b || a || t === a ? a : 1e-10)), this._initted || (d = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (i = s + this._repeatDelay, this._cycle = this._totalTime / i >> 0, 0 !== this._cycle && this._cycle === this._totalTime / i && q <= a && this._cycle--, this._time = this._totalTime - this._cycle * i, this._yoyo && 0 != (1 & this._cycle) && (this._time = s - this._time, (n = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== n || this._initted ? this._yoyoEase = n = !0 === n ? this._ease : n instanceof Ease ? n : Ease.map[n] : (n = this.vars.ease, this._yoyoEase = n = n ? n instanceof Ease ? n : "function" == typeof n ? new Ease(n, this.vars.easeParams) : Ease.map[n] || c.defaultEase : c.defaultEase)), this.ratio = n ? 1 - n.getRatio((s - this._time) / s) : 0)), this._time > s ? this._time = s : this._time < 0 && (this._time = 0)), this._easeType && !n ? (j = this._time / s, k = this._easeType, l = this._easePower, (1 === k || 3 === k && j >= .5) && (j = 1 - j), 3 === k && (j *= 2), 1 === l ? j *= j : 2 === l ? j *= j * j : 3 === l ? j *= j * j * j : 4 === l && (j *= j * j * j * j), 1 === k ? this.ratio = 1 - j : 2 === k ? this.ratio = j : this._time / s < .5 ? this.ratio = j / 2 : this.ratio = 1 - j / 2) : n || (this.ratio = this._ease.getRatio(this._time / s))), p !== this._time || d || r !== this._cycle) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!d && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = q, this._rawPrevTime = t, this._cycle = r, g.lazyTweens.push(this), void(this._lazy = [a, b]);
                                !this._time || e || n ? e && this._ease._calcEnd && !n && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / s)
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== p && a >= 0 && (this._active = !0), 0 === q && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== s || b || this._callback("onStart"))), h = this._firstPT; h;) h.f ? h.t[h.p](h.c * this.ratio + h.s) : h.t[h.p] = h.c * this.ratio + h.s, h = h._next;
                            this._onUpdate && (a < 0 && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || (this._totalTime !== q || f) && this._callback("onUpdate")), this._cycle !== r && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), f && (this._gc && !d || (a < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[f] && this._callback(f), 0 === s && 1e-10 === this._rawPrevTime && 1e-10 !== m && (this._rawPrevTime = 0)))
                        } else q !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate"))
                    }, f.to = function(a, b, c) {
                        return new f(a, b, c)
                    }, f.from = function(a, b, c) {
                        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c)
                    }, f.fromTo = function(a, b, c, d) {
                        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d)
                    }, f.staggerTo = f.allTo = function(a, b, g, j, l, m, n) {
                        j = j || 0;
                        var o, p, q, r, s = 0,
                            t = [],
                            u = function() {
                                g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), l.apply(n || g.callbackScope || this, m || k)
                            },
                            v = g.cycle,
                            w = g.startAt && g.startAt.cycle;
                        for (i(a) || ("string" == typeof a && (a = c.selector(a) || a), h(a) && (a = d(a))), a = a || [], j < 0 && ((a = d(a)).reverse(), j *= -1), o = a.length - 1, q = 0; q <= o; q++) {
                            for (r in p = {}, g) p[r] = g[r];
                            if (v && (e(p, a, q), null != p.duration && (b = p.duration, delete p.duration)), w) {
                                for (r in w = p.startAt = {}, g.startAt) w[r] = g.startAt[r];
                                e(p.startAt, a, q)
                            }
                            p.delay = s + (p.delay || 0), q === o && l && (p.onComplete = u), t[q] = new f(a[q], b, p), s += j
                        }
                        return t
                    }, f.staggerFrom = f.allFrom = function(a, b, c, d, e, g, h) {
                        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h)
                    }, f.staggerFromTo = f.allFromTo = function(a, b, c, d, e, g, h, i) {
                        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i)
                    }, f.delayedCall = function(a, b, c, d, e) {
                        return new f(b, 0, {
                            delay: a,
                            onComplete: b,
                            onCompleteParams: c,
                            callbackScope: d,
                            onReverseComplete: b,
                            onReverseCompleteParams: c,
                            immediateRender: !1,
                            useFrames: e,
                            overwrite: 0
                        })
                    }, f.set = function(a, b) {
                        return new f(a, 0, b)
                    }, f.isTweening = function(a) {
                        return c.getTweensOf(a, !0).length > 0
                    };
                    var l = function a(b, d) {
                            for (var e = [], f = 0, g = b._first; g;) g instanceof c ? e[f++] = g : (d && (e[f++] = g), f = (e = e.concat(a(g, d))).length), g = g._next;
                            return e
                        },
                        m = f.getAllTweens = function(b) {
                            return l(a._rootTimeline, b).concat(l(a._rootFramesTimeline, b))
                        };
                    f.killAll = function(a, c, d, e) {
                        null == c && (c = !0), null == d && (d = !0);
                        var f, g, h, i = m(0 != e),
                            j = i.length,
                            k = c && d && e;
                        for (h = 0; h < j; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
                    }, f.killChildTweensOf = function(a, b) {
                        if (null != a) {
                            var e, j, k, l, m, n = g.tweenLookup;
                            if ("string" == typeof a && (a = c.selector(a) || a), h(a) && (a = d(a)), i(a))
                                for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b);
                            else {
                                for (k in e = [], n)
                                    for (j = n[k].target.parentNode; j;) j === a && (e = e.concat(n[k].tweens)), j = j.parentNode;
                                for (m = e.length, l = 0; l < m; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
                            }
                        }
                    };
                    var n = function(a, c, d, e) {
                        c = !1 !== c, d = !1 !== d;
                        for (var f, g, h = m(e = !1 !== e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                    };
                    return f.pauseAll = function(a, b, c) {
                        n(!0, a, b, c)
                    }, f.resumeAll = function(a, b, c) {
                        n(!1, a, b, c)
                    }, f.globalTimeScale = function(b) {
                        var d = a._rootTimeline,
                            e = c.ticker.time;
                        return arguments.length ? (b = b || 1e-10, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                    }, j.progress = function(a, b) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
                    }, j.totalProgress = function(a, b) {
                        return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
                    }, j.time = function(a, b) {
                        return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 != (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                    }, j.duration = function(b) {
                        return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                    }, j.totalDuration = function(a) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                    }, j.repeat = function(a) {
                        return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                    }, j.repeatDelay = function(a) {
                        return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                    }, j.yoyo = function(a) {
                        return arguments.length ? (this._yoyo = a, this) : this._yoyo
                    }, f
                }, !0), f._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                    var d = function(a) {
                            b.call(this, a), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                            var c, d, e = this.vars;
                            for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                            i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
                        },
                        e = c._internals,
                        g = d._internals = {},
                        h = e.isSelector,
                        i = e.isArray,
                        j = e.lazyTweens,
                        k = e.lazyRender,
                        l = f._gsDefine.globals,
                        m = function(a) {
                            var b, c = {};
                            for (b in a) c[b] = a[b];
                            return c
                        },
                        n = function(a, b, c) {
                            var d, e, f = a.cycle;
                            for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                            delete a.cycle
                        },
                        o = g.pauseCallback = function() {},
                        p = function(a) {
                            var b, c = [],
                                d = a.length;
                            for (b = 0; b !== d; c.push(a[b++]));
                            return c
                        },
                        q = d.prototype = new b;
                    return d.version = "1.20.4", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function(a, b, d, e) {
                        var f = d.repeat && l.TweenMax || c;
                        return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
                    }, q.from = function(a, b, d, e) {
                        return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
                    }, q.fromTo = function(a, b, d, e, f) {
                        var g = e.repeat && l.TweenMax || c;
                        return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
                    }, q.staggerTo = function(a, b, e, f, g, i, j, k) {
                        var l, o, q = new d({
                                onComplete: i,
                                onCompleteParams: j,
                                callbackScope: k,
                                smoothChildTiming: this.smoothChildTiming
                            }),
                            r = e.cycle;
                        for ("string" == typeof a && (a = c.selector(a) || a), h(a = a || []) && (a = p(a)), (f = f || 0) < 0 && ((a = p(a)).reverse(), f *= -1), o = 0; o < a.length; o++)(l = m(e)).startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);
                        return this.add(q, g)
                    }, q.staggerFrom = function(a, b, c, d, e, f, g, h) {
                        return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                    }, q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
                        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                    }, q.call = function(a, b, d, e) {
                        return this.add(c.delayedCall(0, a, b, d), e)
                    }, q.set = function(a, b, d) {
                        return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                    }, d.exportRoot = function(a, b) {
                        null == (a = a || {}).smoothChildTiming && (a.smoothChildTiming = !0);
                        var e, f, g, h, i = new d(a),
                            j = i._timeline;
                        for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || ((f = g._startTime - g._delay) < 0 && (e = 1), i.add(g, f)), g = h;
                        return j.add(i, 0), e && i.totalDuration(), i
                    }, q.add = function(e, f, g, h) {
                        var j, k, l, m, n, o;
                        if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                            if (e instanceof Array || e && e.push && i(e)) {
                                for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; l < k; l++) i(m = e[l]) && (m = new d({
                                    tweens: m
                                })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof e) return this.addLabel(e, f);
                            if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                            e = c.delayedCall(0, e)
                        }
                        if (b.prototype.add.call(this, e, f), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                            for (o = (n = this).rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
                        return this
                    }, q.remove = function(b) {
                        if (b instanceof a) {
                            this._remove(b, !1);
                            var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                            return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this
                        }
                        if (b instanceof Array || b && b.push && i(b)) {
                            for (var d = b.length; --d > -1;) this.remove(b[d]);
                            return this
                        }
                        return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                    }, q._remove = function(a, c) {
                        return b.prototype._remove.call(this, a, c), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                    }, q.append = function(a, b) {
                        return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                    }, q.insert = q.insertMultiple = function(a, b, c, d) {
                        return this.add(a, b || 0, c, d)
                    }, q.appendMultiple = function(a, b, c, d) {
                        return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                    }, q.addLabel = function(a, b) {
                        return this._labels[a] = this._parseTimeOrLabel(b), this
                    }, q.addPause = function(a, b, d, e) {
                        var f = c.delayedCall(0, o, d, e || this);
                        return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a)
                    }, q.removeLabel = function(a) {
                        return delete this._labels[a], this
                    }, q.getLabelTime = function(a) {
                        return null != this._labels[a] ? this._labels[a] : -1
                    }, q._parseTimeOrLabel = function(b, c, d, e) {
                        var f, g;
                        if (e instanceof a && e.timeline === this) this.remove(e);
                        else if (e && (e instanceof Array || e.push && i(e)))
                            for (g = e.length; --g > -1;) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
                        if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
                        if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);
                        else {
                            if (-1 === (g = b.indexOf("="))) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                            c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f
                        }
                        return Number(b) + c
                    }, q.seek = function(a, b) {
                        return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== b)
                    }, q.stop = function() {
                        return this.paused(!0)
                    }, q.gotoAndPlay = function(a, b) {
                        return this.play(a, b)
                    }, q.gotoAndStop = function(a, b) {
                        return this.pause(a, b)
                    }, q.render = function(a, b, c) {
                        this._gc && this._enabled(!0, !1);
                        var d, e, f, g, h, i, l, m = this._time,
                            n = this._dirty ? this.totalDuration() : this._totalDuration,
                            o = this._startTime,
                            p = this._timeScale,
                            q = this._paused;
                        if (m !== this._time && (a += this._time - m), a >= n - 1e-7 && a >= 0) this._totalTime = this._time = n, this._reversed || this._hasPausedChild() || (e = !0, g = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (a <= 0 && a >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== a && this._first && (h = !0, this._rawPrevTime > 1e-10 && (g = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : 1e-10, a = n + 1e-4;
                        else if (a < 1e-7)
                            if (this._totalTime = this._time = 0, (0 !== m || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || a < 0 && this._rawPrevTime >= 0)) && (g = "onReverseComplete", e = this._reversed), a < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = e = !0, g = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = a;
                            else {
                                if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : 1e-10, 0 === a && e)
                                    for (d = this._first; d && 0 === d._startTime;) d._duration || (e = !1), d = d._next;
                                a = 0, this._initted || (h = !0)
                            }
                        else {
                            if (this._hasPause && !this._forcingPlayhead && !b) {
                                if (a >= m)
                                    for (d = this._first; d && d._startTime <= a && !i;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (i = d), d = d._next;
                                else
                                    for (d = this._last; d && d._startTime >= a && !i;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (i = d), d = d._prev;
                                i && (this._time = a = i._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            this._totalTime = this._time = this._rawPrevTime = a
                        }
                        if (this._time !== m && this._first || c || h || i) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== m && a > 0 && (this._active = !0), 0 === m && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), (l = this._time) >= m)
                                for (d = this._first; d && (f = d._next, l === this._time && (!this._paused || q));)(d._active || d._startTime <= l && !d._paused && !d._gc) && (i === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = f;
                            else
                                for (d = this._last; d && (f = d._prev, l === this._time && (!this._paused || q));) {
                                    if (d._active || d._startTime <= m && !d._paused && !d._gc) {
                                        if (i === d) {
                                            for (i = d._prev; i && i.endTime() > this._time;) i.render(i._reversed ? i.totalDuration() - (a - i._startTime) * i._timeScale : (a - i._startTime) * i._timeScale, b, c), i = i._prev;
                                            i = null, this.pause()
                                        }
                                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                    }
                                    d = f
                                }
                            this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), g && (this._gc || o !== this._startTime && p === this._timeScale || (0 === this._time || n >= this.totalDuration()) && (e && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[g] && this._callback(g)))
                        }
                    }, q._hasPausedChild = function() {
                        for (var a = this._first; a;) {
                            if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                            a = a._next
                        }
                        return !1
                    }, q.getChildren = function(a, b, d, e) {
                        e = e || -9999999999;
                        for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? !1 !== b && (f[h++] = g) : (!1 !== d && (f[h++] = g), !1 !== a && (h = (f = f.concat(g.getChildren(!0, b, d))).length))), g = g._next;
                        return f
                    }, q.getTweensOf = function(a, b) {
                        var d, e, f = this._gc,
                            g = [],
                            h = 0;
                        for (f && this._enabled(!0, !0), e = (d = c.getTweensOf(a)).length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                        return f && this._enabled(!1, !0), g
                    }, q.recent = function() {
                        return this._recent
                    }, q._contains = function(a) {
                        for (var b = a.timeline; b;) {
                            if (b === this) return !0;
                            b = b.timeline
                        }
                        return !1
                    }, q.shiftChildren = function(a, b, c) {
                        c = c || 0;
                        for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                        if (b)
                            for (d in f) f[d] >= c && (f[d] += a);
                        return this._uncache(!0)
                    }, q._kill = function(a, b) {
                        if (!a && !b) return this._enabled(!1, !1);
                        for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                        return e
                    }, q.clear = function(a) {
                        var b = this.getChildren(!1, !0, !0),
                            c = b.length;
                        for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                        return !1 !== a && (this._labels = {}), this._uncache(!0)
                    }, q.invalidate = function() {
                        for (var b = this._first; b;) b.invalidate(), b = b._next;
                        return a.prototype.invalidate.call(this)
                    }, q._enabled = function(a, c) {
                        if (a === this._gc)
                            for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                        return b.prototype._enabled.call(this, a, c)
                    }, q.totalTime = function(b, c, d) {
                        this._forcingPlayhead = !0;
                        var e = a.prototype.totalTime.apply(this, arguments);
                        return this._forcingPlayhead = !1, e
                    }, q.duration = function(a) {
                        return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                    }, q.totalDuration = function(a) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(e, e._startTime - e._delay), this._calculatingDuration = 0) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale, this._time -= e._startTime, this._totalTime -= e._startTime, this._rawPrevTime -= e._startTime), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), (c = e._startTime + e._totalDuration / e._timeScale) > d && (d = c), e = b;
                                this._duration = this._totalDuration = d, this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
                    }, q.paused = function(b) {
                        if (!b)
                            for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
                        return a.prototype.paused.apply(this, arguments)
                    }, q.usesFrames = function() {
                        for (var b = this._timeline; b._timeline;) b = b._timeline;
                        return b === a._rootFramesTimeline
                    }, q.rawTime = function(a) {
                        return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale
                    }, d
                }, !0), f._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
                    var d = function(b) {
                            a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                        },
                        e = b._internals,
                        g = e.lazyTweens,
                        h = e.lazyRender,
                        i = f._gsDefine.globals,
                        j = new c(null, null, 1, 0),
                        k = d.prototype = new a;
                    return k.constructor = d, k.kill()._gc = !1, d.version = "1.20.4", k.invalidate = function() {
                        return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                    }, k.addCallback = function(a, c, d, e) {
                        return this.add(b.delayedCall(0, a, d, e), c)
                    }, k.removeCallback = function(a, b) {
                        if (a)
                            if (null == b) this._kill(null, a);
                            else
                                for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                        return this
                    }, k.removePause = function(b) {
                        return this.removeCallback(a._internals.pauseCallback, b)
                    }, k.tweenTo = function(a, c) {
                        c = c || {};
                        var d, e, f, g = {
                                ease: j,
                                useFrames: this.usesFrames(),
                                immediateRender: !1,
                                lazy: !1
                            },
                            h = c.repeat && i.TweenMax || b;
                        for (e in c) g[e] = c[e];
                        return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function() {
                            f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || [])
                        }, f
                    }, k.tweenFromTo = function(a, b, c) {
                        c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [a],
                            callbackScope: this
                        }, c.immediateRender = !1 !== c.immediateRender;
                        var d = this.tweenTo(b, c);
                        return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                    }, k.render = function(a, b, c) {
                        this._gc && this._enabled(!0, !1);
                        var d, e, f, i, j, k, l, m, n = this._time,
                            o = this._dirty ? this.totalDuration() : this._totalDuration,
                            p = this._duration,
                            q = this._totalTime,
                            r = this._startTime,
                            s = this._timeScale,
                            t = this._rawPrevTime,
                            u = this._paused,
                            v = this._cycle;
                        if (n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0) this._locked || (this._totalTime = o, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (e = !0, i = "onComplete", j = !!this._timeline.autoRemoveChildren, 0 === this._duration && (a <= 0 && a >= -1e-7 || t < 0 || 1e-10 === t) && t !== a && this._first && (j = !0, t > 1e-10 && (i = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = a = 0 : (this._time = p, a = p + 1e-4);
                        else if (a < 1e-7)
                            if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== n || 0 === p && 1e-10 !== t && (t > 0 || a < 0 && t >= 0) && !this._locked) && (i = "onReverseComplete", e = this._reversed), a < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (j = e = !0, i = "onReverseComplete") : t >= 0 && this._first && (j = !0), this._rawPrevTime = a;
                            else {
                                if (this._rawPrevTime = p || !b || a || this._rawPrevTime === a ? a : 1e-10, 0 === a && e)
                                    for (d = this._first; d && 0 === d._startTime;) d._duration || (e = !1), d = d._next;
                                a = 0, this._initted || (j = !0)
                            }
                        else if (0 === p && t < 0 && (j = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (k = p + this._repeatDelay, this._cycle = this._totalTime / k >> 0, 0 !== this._cycle && this._cycle === this._totalTime / k && q <= a && this._cycle--, this._time = this._totalTime - this._cycle * k, this._yoyo && 0 != (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, a = p + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b) {
                            if ((a = this._time) >= n || this._repeat && v !== this._cycle)
                                for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
                            else
                                for (d = this._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                            l && l._startTime < p && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        if (this._cycle !== v && !this._locked) {
                            var w = this._yoyo && 0 != (1 & v),
                                x = w === (this._yoyo && 0 != (1 & this._cycle)),
                                y = this._totalTime,
                                z = this._cycle,
                                A = this._rawPrevTime,
                                B = this._time;
                            if (this._totalTime = v * p, this._cycle < v ? w = !w : this._totalTime += p, this._time = n, this._rawPrevTime = 0 === p ? t - 1e-4 : t, this._cycle = v, this._locked = !0, n = w ? 0 : p, this.render(n, b, 0 === p), b || this._gc || this.vars.onRepeat && (this._cycle = z, this._locked = !1, this._callback("onRepeat")), n !== this._time) return;
                            if (x && (this._cycle = v, this._locked = !0, n = w ? p + 1e-4 : -1e-4, this.render(n, !0, !1)), this._locked = !1, this._paused && !u) return;
                            this._time = B, this._totalTime = y, this._cycle = z, this._rawPrevTime = A
                        }
                        if (this._time !== n && this._first || c || j || l) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== q && a > 0 && (this._active = !0), 0 === q && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), (m = this._time) >= n)
                                for (d = this._first; d && (f = d._next, m === this._time && (!this._paused || u));)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = f;
                            else
                                for (d = this._last; d && (f = d._prev, m === this._time && (!this._paused || u));) {
                                    if (d._active || d._startTime <= n && !d._paused && !d._gc) {
                                        if (l === d) {
                                            for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                                            l = null, this.pause()
                                        }
                                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                    }
                                    d = f
                                }
                            this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), i && (this._locked || this._gc || r !== this._startTime && s === this._timeScale || (0 === this._time || o >= this.totalDuration()) && (e && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[i] && this._callback(i)))
                        } else q !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate"))
                    }, k.getActive = function(a, b, c) {
                        null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                        var d, e, f = [],
                            g = this.getChildren(a, b, c),
                            h = 0,
                            i = g.length;
                        for (d = 0; d < i; d++)(e = g[d]).isActive() && (f[h++] = e);
                        return f
                    }, k.getLabelAfter = function(a) {
                        a || 0 !== a && (a = this._time);
                        var b, c = this.getLabelsArray(),
                            d = c.length;
                        for (b = 0; b < d; b++)
                            if (c[b].time > a) return c[b].name;
                        return null
                    }, k.getLabelBefore = function(a) {
                        null == a && (a = this._time);
                        for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                            if (b[c].time < a) return b[c].name;
                        return null
                    }, k.getLabelsArray = function() {
                        var a, b = [],
                            c = 0;
                        for (a in this._labels) b[c++] = {
                            time: this._labels[a],
                            name: a
                        };
                        return b.sort(function(a, b) {
                            return a.time - b.time
                        }), b
                    }, k.invalidate = function() {
                        return this._locked = !1, a.prototype.invalidate.call(this)
                    }, k.progress = function(a, b) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0
                    }, k.totalProgress = function(a, b) {
                        return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0
                    }, k.totalDuration = function(b) {
                        return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                    }, k.time = function(a, b) {
                        return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 != (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                    }, k.repeat = function(a) {
                        return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                    }, k.repeatDelay = function(a) {
                        return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                    }, k.yoyo = function(a) {
                        return arguments.length ? (this._yoyo = a, this) : this._yoyo
                    }, k.currentLabel = function(a) {
                        return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                    }, d
                }, !0), a = 180 / Math.PI, b = [], c = [], d = [], g = {}, h = f._gsDefine.globals, i = function(a, b, c, d) {
                    c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                }, j = function(a, b, c, d) {
                    var e = {
                            a: a
                        },
                        f = {},
                        g = {},
                        h = {
                            c: d
                        },
                        i = (a + b) / 2,
                        j = (b + c) / 2,
                        k = (c + d) / 2,
                        l = (i + j) / 2,
                        m = (j + k) / 2,
                        n = (m - l) / 8;
                    return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                }, k = function(a, e, f, g, h) {
                    var i, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                        x = 0,
                        y = a[0].a;
                    for (i = 0; i < w; i++) k = (n = a[x]).a, l = n.d, m = a[x + 1].d, h ? (t = b[i], v = ((u = c[i]) + t) * e * .25 / (g ? .5 : d[i] || .5), q = l - ((o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0)) + (((p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0)) - o) * (3 * t / (t + u) + .5) / 4 || 0))) : q = l - ((o = l - (l - k) * e * .5) + (p = l + (m - l) * e * .5)) / 2, o += q, p += q, n.c = r = o, n.b = 0 !== i ? y : y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = j(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                    (n = a[x]).b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = j(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                }, l = function(a, d, e, f) {
                    var g, h, j, k, l, m, n = [];
                    if (f)
                        for (h = (a = [f].concat(a)).length; --h > -1;) "string" == typeof(m = a[h][d]) && "=" === m.charAt(1) && (a[h][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                    if ((g = a.length - 2) < 0) return n[0] = new i(a[0][d], 0, 0, a[0][d]), n;
                    for (h = 0; h < g; h++) j = a[h][d], k = a[h + 1][d], n[h] = new i(j, 0, 0, k), e && (l = a[h + 2][d], b[h] = (b[h] || 0) + (k - j) * (k - j), c[h] = (c[h] || 0) + (l - k) * (l - k));
                    return n[h] = new i(a[h][d], 0, 0, a[h + 1][d]), n
                }, m = function(a, e, f, h, i, j) {
                    var m, n, o, p, q, r, s, t, u = {},
                        v = [],
                        w = j || a[0];
                    for (n in i = "string" == typeof i ? "," + i + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), a[0]) v.push(n);
                    if (a.length > 1) {
                        for (t = a[a.length - 1], s = !0, m = v.length; --m > -1;)
                            if (n = v[m], Math.abs(w[n] - t[n]) > .05) {
                                s = !1;
                                break
                            } s && (a = a.concat(), j && a.unshift(j), a.push(a[1]), j = a[a.length - 3])
                    }
                    for (b.length = c.length = d.length = 0, m = v.length; --m > -1;) n = v[m], g[n] = -1 !== i.indexOf("," + n + ","), u[n] = l(a, n, g[n], j);
                    for (m = b.length; --m > -1;) b[m] = Math.sqrt(b[m]), c[m] = Math.sqrt(c[m]);
                    if (!h) {
                        for (m = v.length; --m > -1;)
                            if (g[n])
                                for (r = (o = u[v[m]]).length - 1, p = 0; p < r; p++) q = o[p + 1].da / c[p] + o[p].da / b[p] || 0, d[p] = (d[p] || 0) + q * q;
                        for (m = d.length; --m > -1;) d[m] = Math.sqrt(d[m])
                    }
                    for (m = v.length, p = f ? 4 : 1; --m > -1;) o = u[n = v[m]], k(o, e, f, h, g[n]), s && (o.splice(0, p), o.splice(o.length - p, p));
                    return u
                }, n = function(a, b, c) {
                    for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                        for (f = (m = a[p]).a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; k <= c; k++) d = e - (e = ((j = o * k) * j * g + 3 * (l = 1 - j) * (j * h + l * i)) * j), b[n = p * c + k - 1] = (b[n] || 0) + d * d
                }, o = f._gsDefine.plugin({
                    propName: "bezier",
                    priority: -1,
                    version: "1.3.8",
                    API: 2,
                    global: !0,
                    init: function(a, b, c) {
                        this._target = a, b instanceof Array && (b = {
                            values: b
                        }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                        var d, e, f, g, h, j = b.values || [],
                            k = {},
                            l = j[0],
                            o = b.autoRotate || c.vars.orientToBezier;
                        for (d in this._autoRotate = o ? o instanceof Array ? o : [
                            ["x", "y", "rotation", !0 === o ? 0 : Number(o) || 0]
                        ] : null, l) this._props.push(d);
                        for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], k[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || k[d] !== j[0][d] && (h = k);
                        if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? m(j, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : function(a, b, c) {
                            var d, e, f, g, h, j, k, l, m, n, o, p = {},
                                q = "cubic" === (b = b || "soft") ? 3 : 2,
                                r = "soft" === b,
                                s = [];
                            if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
                            for (m in a[0]) s.push(m);
                            for (j = s.length; --j > -1;) {
                                for (p[m = s[j]] = h = [], n = 0, l = a.length, k = 0; k < l; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && k < l - 1 && (h[n++] = (d + h[n - 2]) / 2), h[n++] = d;
                                for (l = n - q + 1, n = 0, k = 0; k < l; k += q) d = h[k], e = h[k + 1], f = h[k + 2], g = 2 === q ? 0 : h[k + 3], h[n++] = o = 3 === q ? new i(d, e, f, g) : new i(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                                h.length = n
                            }
                            return p
                        }(j, b.type, k), this._segCount = this._beziers[d].length, this._timeRes) {
                            var p = function(a, b) {
                                var c, d, e, f, g = [],
                                    h = [],
                                    i = 0,
                                    j = 0,
                                    k = (b = b >> 0 || 6) - 1,
                                    l = [],
                                    m = [];
                                for (c in a) n(a[c], g, b);
                                for (e = g.length, d = 0; d < e; d++) i += Math.sqrt(g[d]), m[f = d % b] = i, f === k && (j += i, l[f = d / b >> 0] = m, h[f] = j, i = 0, m = []);
                                return {
                                    length: j,
                                    lengths: h,
                                    segments: l
                                }
                            }(this._beziers, this._timeRes);
                            this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                        }
                        if (o = this._autoRotate)
                            for (this._initialRotations = [], o[0] instanceof Array || (this._autoRotate = o = [o]), f = o.length; --f > -1;) {
                                for (g = 0; g < 3; g++) d = o[f][g], this._func[d] = "function" == typeof a[d] && a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)];
                                d = o[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d)
                            }
                        return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                    },
                    set: function(b) {
                        var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                            n = this._func,
                            o = this._target,
                            p = b !== this._startRatio;
                        if (this._timeRes) {
                            if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && e < m - 1) {
                                for (j = m - 1; e < j && (this._l2 = k[++e]) <= b;);
                                this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                            } else if (b < this._l1 && e > 0) {
                                for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                            }
                            if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                                for (j = l.length - 1; e < j && (this._s2 = l[++e]) <= b;);
                                this._s1 = l[e - 1], this._si = e
                            } else if (b < this._s1 && e > 0) {
                                for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                            }
                            h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                        } else h = (b - (c = b < 0 ? 0 : b >= 1 ? m - 1 : m * b >> 0) * (1 / m)) * m;
                        for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], i = (h * h * (g = this._beziers[f][c]).da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i;
                        if (this._autoRotate) {
                            var q, r, s, t, u, v, w, x = this._autoRotate;
                            for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = !0 === x[e][4] ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, r += ((t = g.b + (g.c - g.b) * h) - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, s += ((u = q.b + (q.c - q.b) * h) - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i)
                        }
                    }
                }), p = o.prototype, o.bezierThrough = m, o.cubicToQuadratic = j, o._autoCSS = !0, o.quadraticToCubic = function(a, b, c) {
                    return new i(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, o._cssRegister = function() {
                    var a = h.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function(a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }), i = new o;
                                var j, k, l, m = b.values,
                                    n = m.length - 1,
                                    p = [],
                                    q = {};
                                if (n < 0) return h;
                                for (j = 0; j <= n; j++) l = c(a, m[j], g, h, i, n !== j), p[j] = l.end;
                                for (k in b) q[k] = b[k];
                                return q.values = p, (h = new e(a, "bezier", 0, 0, l.pt, 2)).data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = !0 === q.autoRotate ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                                    ["left", "top", "rotation", j, !1]
                                ] : null != l.end.x && [
                                    ["x", "y", "rotation", j, !1]
                                ]), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h
                            }
                        })
                    }
                }, p._mod = function(a) {
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1;)(b = a[c[d]]) && "function" == typeof b && (this._mod[c[d]] = b)
                }, p._kill = function(a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    if (d = this._autoRotate)
                        for (c = d.length; --c > -1;) a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }, f._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
                    var c, d, g, h, i = function b() {
                            a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = b.prototype.setRatio
                        },
                        j = f._gsDefine.globals,
                        k = {},
                        l = i.prototype = new a("css");
                    l.constructor = i, i.version = "1.20.4", i.API = 2, i.defaultTransformPerspective = 0, i.defaultSkewType = "compensated", i.defaultSmoothOrigin = !0, i.suffixMap = {
                        top: l = "px",
                        right: l,
                        bottom: l,
                        left: l,
                        width: l,
                        height: l,
                        fontSize: l,
                        padding: l,
                        margin: l,
                        perspective: l,
                        lineHeight: ""
                    };
                    var m, n, o, p, q, r, s, t, u = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                        v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                        w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                        x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                        y = /(?:\d|\-|\+|=|#|\.)*/g,
                        z = /opacity *= *([^)]*)/i,
                        A = /opacity:([^;]*)/i,
                        B = /alpha\(opacity *=.+?\)/i,
                        C = /^(rgb|hsl)/,
                        D = /([A-Z])/g,
                        E = /-([a-z])/gi,
                        F = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                        G = function(a, b) {
                            return b.toUpperCase()
                        },
                        H = /(?:Left|Right|Width)/i,
                        I = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                        J = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        K = /,(?=[^\)]*(?:\(|$))/gi,
                        L = /[\s,\(]/i,
                        M = Math.PI / 180,
                        N = 180 / Math.PI,
                        O = {},
                        P = {
                            style: {}
                        },
                        Q = f.document || {
                            createElement: function() {
                                return P
                            }
                        },
                        R = function(a, b) {
                            return Q.createElementNS ? Q.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : Q.createElement(a)
                        },
                        S = R("div"),
                        T = R("img"),
                        U = i._internals = {
                            _specialProps: k
                        },
                        V = (f.navigator || {}).userAgent || "",
                        W = function() {
                            var a = V.indexOf("Android"),
                                b = R("a");
                            return o = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === a || parseFloat(V.substr(a + 8, 2)) > 3), q = o && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, p = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (r = parseFloat(RegExp.$1)), !!b && (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity))
                        }(),
                        X = function(a) {
                            return z.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                        },
                        Y = function(a) {
                            f.console
                        },
                        Z = "",
                        $ = "",
                        _ = function(a, b) {
                            var c, d, e = (b = b || S).style;
                            if (void 0 !== e[a]) return a;
                            for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                            return d >= 0 ? (Z = "-" + ($ = 3 === d ? "ms" : c[d]).toLowerCase() + "-", $ + a) : null
                        },
                        aa = Q.defaultView ? Q.defaultView.getComputedStyle : function() {},
                        ba = i.getStyle = function(a, b, c, d, e) {
                            var f;
                            return W || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || aa(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(D, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : X(a)
                        },
                        ca = U.convertToPixels = function(a, c, d, e, f) {
                            if ("px" === e || !e && "lineHeight" !== c) return d;
                            if ("auto" === e || !d) return 0;
                            var g, h, j, k = H.test(c),
                                l = a,
                                m = S.style,
                                n = d < 0,
                                o = 1 === d;
                            if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e)
                                if ("%" === e && -1 !== c.indexOf("border")) g = d / 100 * (k ? a.clientWidth : a.clientHeight);
                                else {
                                    if (m.cssText = "border:0 solid red;position:" + ba(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                    else {
                                        if (l = a.parentNode || Q.body, -1 !== ba(l, "display").indexOf("flex") && (m.position = "absolute"), h = l._gsCache, j = b.ticker.frame, h && k && h.time === j) return h.width * d / 100;
                                        m[k ? "width" : "height"] = d + e
                                    }
                                    l.appendChild(S), g = parseFloat(S[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(S), k && "%" === e && !1 !== i.cacheWidths && ((h = l._gsCache = l._gsCache || {}).time = j, h.width = g / d * 100), 0 !== g || f || (g = ca(a, c, d, e, !0))
                                }
                            else h = aa(a).lineHeight, a.style.lineHeight = d, g = parseFloat(aa(a).lineHeight), a.style.lineHeight = h;
                            return o && (g /= 100), n ? -g : g
                        },
                        da = U.calculateOffset = function(a, b, c) {
                            if ("absolute" !== ba(a, "position", c)) return 0;
                            var d = "left" === b ? "Left" : "Top",
                                e = ba(a, "margin" + d, c);
                            return a["offset" + d] - (ca(a, b, parseFloat(e), e.replace(y, "")) || 0)
                        },
                        ea = function(a, b) {
                            var c, d, e, f = {};
                            if (b = b || aa(a, null))
                                if (c = b.length)
                                    for (; --c > -1;) - 1 !== (e = b[c]).indexOf("-transform") && Ja !== e || (f[e.replace(E, G)] = b.getPropertyValue(e));
                                else
                                    for (c in b) - 1 !== c.indexOf("Transform") && Ia !== c || (f[c] = b[c]);
                            else if (b = a.currentStyle || a.style)
                                for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(E, G)] = b[c]);
                            return W || (f.opacity = X(a)), d = Wa(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, La && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
                        },
                        fa = function(a, b, c, d, e) {
                            var f, g, h, i = {},
                                j = a.style;
                            for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" != typeof f && "string" != typeof f || (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(x, "") ? f : 0 : da(a, g), void 0 !== j[g] && (h = new ua(j, g, j[g], h))));
                            if (d)
                                for (g in d) "className" !== g && (i[g] = d[g]);
                            return {
                                difs: i,
                                firstMPT: h
                            }
                        },
                        ga = {
                            width: ["Left", "Right"],
                            height: ["Top", "Bottom"]
                        },
                        ha = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                        ia = function(a, b, c) {
                            if ("svg" === (a.nodeName + "").toLowerCase()) return (c || aa(a))[b] || 0;
                            if (a.getCTM && Ta(a)) return a.getBBox()[b] || 0;
                            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                                e = ga[b],
                                f = e.length;
                            for (c = c || aa(a, null); --f > -1;) d -= parseFloat(ba(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(ba(a, "border" + e[f] + "Width", c, !0)) || 0;
                            return d
                        },
                        ja = function a(b, c) {
                            if ("contain" === b || "auto" === b || "auto auto" === b) return b + " ";
                            null != b && "" !== b || (b = "0 0");
                            var d, e = b.split(" "),
                                f = -1 !== b.indexOf("left") ? "0%" : -1 !== b.indexOf("right") ? "100%" : e[0],
                                g = -1 !== b.indexOf("top") ? "0%" : -1 !== b.indexOf("bottom") ? "100%" : e[1];
                            if (e.length > 3 && !c) {
                                for (e = b.split(", ").join(",").split(","), b = [], d = 0; d < e.length; d++) b.push(a(e[d]));
                                return b.join(",")
                            }
                            return null == g ? g = "center" === f ? "50%" : "0" : "center" === g && (g = "50%"), ("center" === f || isNaN(parseFloat(f)) && -1 === (f + "").indexOf("=")) && (f = "50%"), b = f + " " + g + (e.length > 2 ? " " + e[2] : ""), c && (c.oxp = -1 !== f.indexOf("%"), c.oyp = -1 !== g.indexOf("%"), c.oxr = "=" === f.charAt(1), c.oyr = "=" === g.charAt(1), c.ox = parseFloat(f.replace(x, "")), c.oy = parseFloat(g.replace(x, "")), c.v = b), c || b
                        },
                        ka = function(a, b) {
                            return "function" == typeof a && (a = a(t, s)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
                        },
                        la = function(a, b) {
                            return "function" == typeof a && (a = a(t, s)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
                        },
                        ma = function(a, b, c, d) {
                            var e, f, g, h, i;
                            return "function" == typeof a && (a = a(t, s)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), g = ((i = "=" === a.charAt(1)) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : N) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e) != g % (e / 2) && (g = g < 0 ? g + e : g - e), -1 !== a.indexOf("_cw") && g < 0 ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), h < 1e-6 && h > -1e-6 && (h = 0), h
                        },
                        na = {
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
                        },
                        oa = function(a, b, c) {
                            return 255 * (6 * (a = a < 0 ? a + 1 : a > 1 ? a - 1 : a) < 1 ? b + (c - b) * a * 6 : a < .5 ? c : 3 * a < 2 ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                        },
                        pa = i.parseColor = function(a, b) {
                            var c, d, e, f, g, h, i, j, k, l, m;
                            if (a)
                                if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                                else {
                                    if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), na[a]) c = na[a];
                                    else if ("#" === a.charAt(0)) 4 === a.length && (a = "#" + (d = a.charAt(1)) + d + (e = a.charAt(2)) + e + (f = a.charAt(3)) + f), c = [(a = parseInt(a.substr(1), 16)) >> 16, a >> 8 & 255, 255 & a];
                                    else if ("hsl" === a.substr(0, 3))
                                        if (c = m = a.match(u), b) {
                                            if (-1 !== a.indexOf("=")) return a.match(v)
                                        } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, d = 2 * (i = Number(c[2]) / 100) - (e = i <= .5 ? i * (h + 1) : i + h - i * h), c.length > 3 && (c[3] = Number(c[3])), c[0] = oa(g + 1 / 3, d, e), c[1] = oa(g, d, e), c[2] = oa(g - 1 / 3, d, e);
                                    else c = a.match(u) || na.transparent;
                                    c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                                }
                            else c = na.black;
                            return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, i = ((j = Math.max(d, e, f)) + (k = Math.min(d, e, f))) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (e < f ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
                        },
                        qa = function(a, b) {
                            var c, d, e, f = a.match(ra) || [],
                                g = 0,
                                h = "";
                            if (!f.length) return a;
                            for (c = 0; c < f.length; c++) d = f[c], g += (e = a.substr(g, a.indexOf(d, g) - g)).length + d.length, 3 === (d = pa(d, b)).length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                            return h + a.substr(g)
                        },
                        ra = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (l in na) ra += "|" + l + "\\b";
                    ra = new RegExp(ra + ")", "gi"), i.colorStringFilter = function(a) {
                        var b, c = a[0] + " " + a[1];
                        ra.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = qa(a[0], b), a[1] = qa(a[1], b)), ra.lastIndex = 0
                    }, b.defaultStringFilter || (b.defaultStringFilter = i.colorStringFilter);
                    var sa = function(a, b, c, d) {
                            if (null == a) return function(a) {
                                return a
                            };
                            var e, f = b ? (a.match(ra) || [""])[0] : "",
                                g = a.split(f).join("").match(w) || [],
                                h = a.substr(0, a.indexOf(g[0])),
                                i = ")" === a.charAt(a.length - 1) ? ")" : "",
                                j = -1 !== a.indexOf(" ") ? " " : ",",
                                k = g.length,
                                l = k > 0 ? g[0].replace(u, "") : "";
                            return k ? e = b ? function(a) {
                                var b, m, n, o;
                                if ("number" == typeof a) a += l;
                                else if (d && K.test(a)) {
                                    for (o = a.replace(K, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                                    return o.join(",")
                                }
                                if (b = (a.match(ra) || [f])[0], n = (m = a.split(b).join("").match(w) || []).length, k > n--)
                                    for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                            } : function(a) {
                                var b, f, m;
                                if ("number" == typeof a) a += l;
                                else if (d && K.test(a)) {
                                    for (f = a.replace(K, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                                    return f.join(",")
                                }
                                if (m = (b = a.match(w) || []).length, k > m--)
                                    for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                                return h + b.join(j) + i
                            } : function(a) {
                                return a
                            }
                        },
                        ta = function(a) {
                            return a = a.split(","),
                                function(b, c, d, e, f, g, h) {
                                    var i, j = (c + "").split(" ");
                                    for (h = {}, i = 0; i < 4; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                    return e.parse(b, h, f, g)
                                }
                        },
                        ua = (U._setPluginRatio = function(a) {
                            this.plugin.setRatio(a);
                            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT; i;) b = h[i.v], i.r ? b = Math.round(b) : b < 1e-6 && b > -1e-6 && (b = 0), i.t[i.p] = b, i = i._next;
                            if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a)
                                for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                                    if ((c = i.t).type) {
                                        if (1 === c.type) {
                                            for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                            c[f] = e
                                        }
                                    } else c[f] = c.s + c.xs0;
                                    i = i._next
                                }
                        }, function(a, b, c, d, e) {
                            this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                        }),
                        va = (U._parseToProxy = function(a, b, c, d, e, f) {
                            var g, h, i, j, k, l = d,
                                m = {},
                                n = {},
                                o = c._transform,
                                p = O;
                            for (c._transform = null, O = b, d = k = c.parse(a, b, d, e), O = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                                if (d.type <= 1 && (n[h = d.p] = d.s + d.c, m[h] = d.s, f || (j = new ua(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                    for (g = d.l; --g > 0;) i = "xn" + g, n[h = d.p + "_" + i] = d.data[i], m[h] = d[i], f || (j = new ua(d, i, h, j, d.rxp[i]));
                                d = d._next
                            }
                            return {
                                proxy: m,
                                end: n,
                                firstMPT: j,
                                pt: k
                            }
                        }, U.CSSPropTween = function(a, b, d, e, f, g, i, j, k, l, m) {
                            this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof va || h.push(this.n), this.r = j, this.type = g || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, f && (this._next = f, f._prev = this)
                        }),
                        wa = function(a, b, c, d, e, f) {
                            var g = new va(a, b, c, d - c, e, -1, f);
                            return g.b = c, g.e = g.xs0 = d, g
                        },
                        xa = i.parseComplex = function(a, b, c, d, e, f, g, h, j, k) {
                            c = c || f || "", "function" == typeof d && (d = d(t, s)), g = new va(a, b, 0, 0, g, k ? 2 : 1, null, !1, h, c, d), d += "", e && ra.test(d + c) && (i.colorStringFilter(d = [c, d]), c = d[0], d = d[1]);
                            var l, n, o, p, q, r, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                                E = d.split(", ").join(",").split(" "),
                                F = D.length,
                                G = !1 !== m;
                            for (-1 === d.indexOf(",") && -1 === c.indexOf(",") || (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(K, ", ").split(" "), E = E.join(" ").replace(K, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (F = (D = (f || "").split(" ")).length), g.plugin = j, g.setRatio = k, ra.lastIndex = 0, l = 0; l < F; l++)
                                if (p = D[l], q = E[l], (x = parseFloat(p)) || 0 === x) g.appendXtra("", x, ka(q, x), q.replace(v, ""), G && -1 !== q.indexOf("px"), !0);
                                else if (e && ra.test(p)) B = ")" + ((B = q.indexOf(")") + 1) ? q.substr(B) : ""), C = -1 !== q.indexOf("hsl") && W, z = q, p = pa(p, C), q = pa(q, C), (y = p.length + q.length > 6) && !W && 0 === q[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(E[l]).join("transparent")) : (W || (y = !1), C ? g.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ka(q[0], p[0]), ",", !1, !0).appendXtra("", p[1], ka(q[1], p[1]), "%,", !1).appendXtra("", p[2], ka(q[2], p[2]), y ? "%," : "%" + B, !1) : g.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], q[0] - p[0], ",", !0, !0).appendXtra("", p[1], q[1] - p[1], ",", !0).appendXtra("", p[2], q[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], g.appendXtra("", p, (q.length < 4 ? 1 : q[3]) - p, B, !1))), ra.lastIndex = 0;
                                else if (r = p.match(u)) {
                                    if (!(w = q.match(v)) || w.length !== r.length) return g;
                                    for (o = 0, n = 0; n < r.length; n++) A = r[n], z = p.indexOf(A, o), g.appendXtra(p.substr(o, z - o), Number(A), ka(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
                                    g["xs" + g.l] += p.substr(o)
                                } else g["xs" + g.l] += g.l || g["xs" + g.l] ? " " + q : q;
                            if (-1 !== d.indexOf("=") && g.data) {
                                for (B = g.xs0 + g.data.s, l = 1; l < g.l; l++) B += g["xs" + l] + g.data["xn" + l];
                                g.e = B + g["xs" + l]
                            }
                            return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
                        },
                        ya = 9;
                    for ((l = va.prototype).l = l.pr = 0; --ya > 0;) l["xn" + ya] = 0, l["xs" + ya] = "";
                    l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(a, b, c, d, e, f) {
                        var g = this,
                            h = g.l;
                        return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new va(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                            s: b + c
                        }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                    };
                    var za = function(a, b) {
                            b = b || {}, this.p = b.prefix && _(a) || a, k[a] = k[this.p] = this, this.format = b.formatter || sa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                        },
                        Aa = U._registerComplexSpecialProp = function(a, b, c) {
                            "object" !== (void 0 === b ? "undefined" : e(b)) && (b = {
                                parser: c
                            });
                            var d, f = a.split(","),
                                g = b.defaultValue;
                            for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, new za(f[d], b)
                        },
                        Ba = U._registerPluginProp = function(a) {
                            if (!k[a]) {
                                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                                Aa(a, {
                                    parser: function(a, c, d, e, f, g, h) {
                                        var i = j.com.greensock.plugins[b];
                                        return i ? (i._cssRegister(), k[d].parse(a, c, d, e, f, g, h)) : (Y(), f)
                                    }
                                })
                            }
                        };
                    (l = za.prototype).parseComplex = function(a, b, c, d, e, f) {
                        var g, h, i, j, k, l, m = this.keyword;
                        if (this.multi && (K.test(c) || K.test(b) ? (h = b.replace(K, "|").split("|"), i = c.replace(K, "|").split("|")) : m && (h = [b], i = [c])), i) {
                            for (j = i.length > h.length ? i.length : h.length, g = 0; g < j; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m)) !== (l = c.indexOf(m)) && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m));
                            b = h.join(", "), c = i.join(", ")
                        }
                        return xa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                    }, l.parse = function(a, b, c, d, e, f, h) {
                        return this.parseComplex(a.style, this.format(ba(a, this.p, g, !1, this.dflt)), this.format(b), e, f)
                    }, i.registerSpecialProp = function(a, b, c) {
                        Aa(a, {
                            parser: function(a, d, e, f, g, h, i) {
                                var j = new va(a, e, 0, 0, g, 2, e, !1, c);
                                return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                            },
                            priority: c
                        })
                    }, i.useSVGTransformAttr = !0;
                    var Ca, Da, Ea, Fa, Ga, Ha = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                        Ia = _("transform"),
                        Ja = Z + "transform",
                        Ka = _("transformOrigin"),
                        La = null !== _("perspective"),
                        Ma = U.Transform = function() {
                            this.perspective = parseFloat(i.defaultTransformPerspective) || 0, this.force3D = !(!1 === i.defaultForce3D || !La) && (i.defaultForce3D || "auto")
                        },
                        Na = f.SVGElement,
                        Oa = function(a, b, c) {
                            var d, e = Q.createElementNS("http://www.w3.org/2000/svg", a),
                                f = /([a-z])([A-Z])/g;
                            for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                            return b.appendChild(e), e
                        },
                        Pa = Q.documentElement || {},
                        Qa = (Ga = r || /Android/i.test(V) && !f.chrome, Q.createElementNS && !Ga && (Da = Oa("svg", Pa), Fa = (Ea = Oa("rect", Da, {
                            width: 100,
                            height: 50,
                            x: 100
                        })).getBoundingClientRect().width, Ea.style[Ka] = "50% 50%", Ea.style[Ia] = "scaleX(0.5)", Ga = Fa === Ea.getBoundingClientRect().width && !(p && La), Pa.removeChild(Da)), Ga),
                        Ra = function(a, b, c, d, e, f) {
                            var g, h, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                                w = Va(a, !0);
                            v && (t = v.xOrigin, u = v.yOrigin), (!d || (g = d.split(" ")).length < 2) && (0 === (n = a.getBBox()).x && 0 === n.y && n.width + n.height === 0 && (n = {
                                x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                                y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                                width: 0,
                                height: 0
                            }), g = [(-1 !== (b = ja(b).split(" "))[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(g[0]), c.yOrigin = l = parseFloat(g[1]), d && w !== Ua && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], (s = m * p - n * o) && (h = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = g[0] = h, l = c.yOrigin = g[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || !1 !== e && !1 !== i.defaultSmoothOrigin ? (h = k - t, j = l - u, v.xOffset += h * w[0] + j * w[2] - h, v.yOffset += h * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", g.join(" "))
                        },
                        Sa = function(a) {
                            try {
                                return a.getBBox()
                            } catch (b) {
                                return function a(b) {
                                    var c, d = R("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                        e = this.parentNode,
                                        f = this.nextSibling,
                                        g = this.style.cssText;
                                    if (Pa.appendChild(d), d.appendChild(this), this.style.display = "block", b) try {
                                        c = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = a
                                    } catch (a) {} else this._originalGetBBox && (c = this._originalGetBBox());
                                    return f ? e.insertBefore(this, f) : e.appendChild(this), Pa.removeChild(d), this.style.cssText = g, c
                                }.call(a, !0)
                            }
                        },
                        Ta = function(a) {
                            return !(!Na || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Sa(a))
                        },
                        Ua = [1, 0, 0, 1, 0, 0],
                        Va = function(a, b) {
                            var c, d, e, f, g, h, i = a._gsTransform || new Ma,
                                j = a.style;
                            if (Ia ? d = ba(a, Ja, null, !0) : a.currentStyle && (d = (d = a.currentStyle.filter.match(I)) && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ia || !(h = !aa(a) || "none" === aa(a).display) && a.parentNode || (h && (f = j.display, j.display = "block"), a.parentNode || (g = 1, Pa.appendChild(a)), c = !(d = ba(a, Ja, null, !0)) || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? j.display = f : h && $a(j, "display"), g && Pa.removeChild(a)), (i.svg || a.getCTM && Ta(a)) && (c && -1 !== (j[Ia] + "").indexOf("matrix") && (d = j[Ia], c = 0), e = a.getAttribute("transform"), c && e && (d = "matrix(" + (e = a.transform.baseVal.consolidate().matrix).a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Ua;
                            for (e = (d || "").match(u) || [], ya = e.length; --ya > -1;) f = Number(e[ya]), e[ya] = (g = f - (f |= 0)) ? (1e5 * g + (g < 0 ? -.5 : .5) | 0) / 1e5 + f : f;
                            return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                        },
                        Wa = U.getTransform = function(a, c, d, e) {
                            if (a._gsTransform && d && !e) return a._gsTransform;
                            var f, g, h, j, k, l, m = d && a._gsTransform || new Ma,
                                n = m.scaleX < 0,
                                o = La && (parseFloat(ba(a, Ka, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin) || 0,
                                p = parseFloat(i.defaultTransformPerspective) || 0;
                            if (m.svg = !(!a.getCTM || !Ta(a)), m.svg && (Ra(a, ba(a, Ka, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Ca = i.useSVGTransformAttr || Qa), (f = Va(a)) !== Ua) {
                                if (16 === f.length) {
                                    var q, r, s, t, u, v = f[0],
                                        w = f[1],
                                        x = f[2],
                                        y = f[3],
                                        z = f[4],
                                        A = f[5],
                                        B = f[6],
                                        C = f[7],
                                        D = f[8],
                                        E = f[9],
                                        F = f[10],
                                        G = f[12],
                                        H = f[13],
                                        I = f[14],
                                        J = f[11],
                                        K = Math.atan2(B, F);
                                    m.zOrigin && (G = D * (I = -m.zOrigin) - f[12], H = E * I - f[13], I = F * I + m.zOrigin - f[14]), m.rotationX = K * N, K && (q = z * (t = Math.cos(-K)) + D * (u = Math.sin(-K)), r = A * t + E * u, s = B * t + F * u, D = z * -u + D * t, E = A * -u + E * t, F = B * -u + F * t, J = C * -u + J * t, z = q, A = r, B = s), K = Math.atan2(-x, F), m.rotationY = K * N, K && (r = w * (t = Math.cos(-K)) - E * (u = Math.sin(-K)), s = x * t - F * u, E = w * u + E * t, F = x * u + F * t, J = y * u + J * t, v = q = v * t - D * u, w = r, x = s), K = Math.atan2(w, v), m.rotation = K * N, K && (q = v * (t = Math.cos(K)) + w * (u = Math.sin(K)), r = z * t + A * u, s = D * t + E * u, w = w * t - v * u, A = A * t - z * u, E = E * t - D * u, v = q, z = r, D = s), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), K = Math.atan2(z, A), m.scaleX = (1e5 * Math.sqrt(v * v + w * w + x * x) + .5 | 0) / 1e5, m.scaleY = (1e5 * Math.sqrt(A * A + B * B) + .5 | 0) / 1e5, m.scaleZ = (1e5 * Math.sqrt(D * D + E * E + F * F) + .5 | 0) / 1e5, v /= m.scaleX, z /= m.scaleY, w /= m.scaleX, A /= m.scaleY, Math.abs(K) > 2e-5 ? (m.skewX = K * N, z = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(K))) : m.skewX = 0, m.perspective = J ? 1 / (J < 0 ? -J : J) : 0, m.x = G, m.y = H, m.z = I, m.svg && (m.x -= m.xOrigin - (m.xOrigin * v - m.yOrigin * z), m.y -= m.yOrigin - (m.yOrigin * w - m.xOrigin * A))
                                } else if (!La || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                                    var L = f.length >= 6,
                                        M = L ? f[0] : 1,
                                        O = f[1] || 0,
                                        P = f[2] || 0,
                                        Q = L ? f[3] : 1;
                                    m.x = f[4] || 0, m.y = f[5] || 0, h = Math.sqrt(M * M + O * O), j = Math.sqrt(Q * Q + P * P), k = M || O ? Math.atan2(O, M) * N : m.rotation || 0, l = P || Q ? Math.atan2(P, Q) * N + k : m.skewX || 0, m.scaleX = h, m.scaleY = j, m.rotation = k, m.skewX = l, La && (m.rotationX = m.rotationY = m.z = 0, m.perspective = p, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * M + m.yOrigin * P), m.y -= m.yOrigin - (m.xOrigin * O + m.yOrigin * Q))
                                }
                                for (g in Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = o, m) m[g] < 2e-5 && m[g] > -2e-5 && (m[g] = 0)
                            }
                            return d && (a._gsTransform = m, m.svg && (Ca && a.style[Ia] ? b.delayedCall(.001, function() {
                                $a(a.style, Ia)
                            }) : !Ca && a.getAttribute("transform") && b.delayedCall(.001, function() {
                                a.removeAttribute("transform")
                            }))), m
                        },
                        Xa = function(a) {
                            var b, c, d = this.data,
                                e = -d.rotation * M,
                                f = e + d.skewX * M,
                                g = (Math.cos(e) * d.scaleX * 1e5 | 0) / 1e5,
                                h = (Math.sin(e) * d.scaleX * 1e5 | 0) / 1e5,
                                i = (Math.sin(f) * -d.scaleY * 1e5 | 0) / 1e5,
                                j = (Math.cos(f) * d.scaleY * 1e5 | 0) / 1e5,
                                k = this.t.style,
                                l = this.t.currentStyle;
                            if (l) {
                                c = h, h = -i, i = -c, b = l.filter, k.filter = "";
                                var m, n, o = this.t.offsetWidth,
                                    p = this.t.offsetHeight,
                                    q = "absolute" !== l.position,
                                    s = "progid:DXImageTransform.Microsoft.Matrix(M11=" + g + ", M12=" + h + ", M21=" + i + ", M22=" + j,
                                    t = d.x + o * d.xPercent / 100,
                                    u = d.y + p * d.yPercent / 100;
                                if (null != d.ox && (t += (m = (d.oxp ? o * d.ox * .01 : d.ox) - o / 2) - (m * g + (n = (d.oyp ? p * d.oy * .01 : d.oy) - p / 2) * h), u += n - (m * i + n * j)), s += q ? ", Dx=" + ((m = o / 2) - (m * g + (n = p / 2) * h) + t) + ", Dy=" + (n - (m * i + n * j) + u) + ")" : ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? k.filter = b.replace(J, s) : k.filter = s + " " + b, 0 !== a && 1 !== a || 1 === g && 0 === h && 0 === i && 1 === j && (q && -1 === s.indexOf("Dx=0, Dy=0") || z.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && k.removeAttribute("filter")), !q) {
                                    var v, w, x, A = r < 8 ? 1 : -1;
                                    for (m = d.ieOffsetX || 0, n = d.ieOffsetY || 0, d.ieOffsetX = Math.round((o - ((g < 0 ? -g : g) * o + (h < 0 ? -h : h) * p)) / 2 + t), d.ieOffsetY = Math.round((p - ((j < 0 ? -j : j) * p + (i < 0 ? -i : i) * o)) / 2 + u), ya = 0; ya < 4; ya++) x = (c = -1 !== (v = l[w = ha[ya]]).indexOf("px") ? parseFloat(v) : ca(this.t, w, parseFloat(v), v.replace(y, "")) || 0) !== d[w] ? ya < 2 ? -d.ieOffsetX : -d.ieOffsetY : ya < 2 ? m - d.ieOffsetX : n - d.ieOffsetY, k[w] = (d[w] = Math.round(c - x * (0 === ya || 2 === ya ? 1 : A))) + "px"
                                }
                            }
                        },
                        Ya = U.set3DTransformRatio = U.setTransformRatio = function(a) {
                            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, q, r, s, t, u, v, w, x = this.data,
                                y = this.t.style,
                                z = x.rotation,
                                A = x.rotationX,
                                B = x.rotationY,
                                C = x.scaleX,
                                D = x.scaleY,
                                E = x.scaleZ,
                                F = x.x,
                                G = x.y,
                                H = x.z,
                                I = x.svg,
                                J = x.perspective,
                                K = x.force3D,
                                L = x.skewY,
                                N = x.skewX;
                            if (L && (N += L, z += L), !((1 !== a && 0 !== a || "auto" !== K || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && K || H || J || B || A || 1 !== E) || Ca && I || !La) z || N || I ? (z *= M, v = N * M, w = 1e5, c = Math.cos(z) * C, f = Math.sin(z) * C, d = Math.sin(z - v) * -D, g = Math.cos(z - v) * D, v && "simple" === x.skewType && (b = Math.tan(v - L * M), d *= b = Math.sqrt(1 + b * b), g *= b, L && (b = Math.tan(L * M), c *= b = Math.sqrt(1 + b * b), f *= b)), I && (F += x.xOrigin - (x.xOrigin * c + x.yOrigin * d) + x.xOffset, G += x.yOrigin - (x.xOrigin * f + x.yOrigin * g) + x.yOffset, Ca && (x.xPercent || x.yPercent) && (q = this.t.getBBox(), F += .01 * x.xPercent * q.width, G += .01 * x.yPercent * q.height), F < (q = 1e-6) && F > -q && (F = 0), G < q && G > -q && (G = 0)), u = (c * w | 0) / w + "," + (f * w | 0) / w + "," + (d * w | 0) / w + "," + (g * w | 0) / w + "," + F + "," + G + ")", I && Ca ? this.t.setAttribute("transform", "matrix(" + u) : y[Ia] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + u) : y[Ia] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + F + "," + G + ")";
                            else {
                                if (p && (C < (q = 1e-4) && C > -q && (C = E = 2e-5), D < q && D > -q && (D = E = 2e-5), !J || x.z || x.rotationX || x.rotationY || (J = 0)), z || N) z *= M, r = c = Math.cos(z), s = f = Math.sin(z), N && (z -= N * M, r = Math.cos(z), s = Math.sin(z), "simple" === x.skewType && (b = Math.tan((N - L) * M), r *= b = Math.sqrt(1 + b * b), s *= b, x.skewY && (b = Math.tan(L * M), c *= b = Math.sqrt(1 + b * b), f *= b))), d = -s, g = r;
                                else {
                                    if (!(B || A || 1 !== E || J || I)) return void(y[Ia] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + G + "px," + H + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""));
                                    c = g = 1, d = f = 0
                                }
                                k = 1, e = h = i = j = l = m = 0, n = J ? -1 / J : 0, o = x.zOrigin, q = 1e-6, (z = B * M) && (r = Math.cos(z), i = -(s = Math.sin(z)), l = n * -s, e = c * s, h = f * s, k = r, n *= r, c *= r, f *= r), (z = A * M) && (b = d * (r = Math.cos(z)) + e * (s = Math.sin(z)), t = g * r + h * s, j = k * s, m = n * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, n *= r, d = b, g = t), 1 !== E && (e *= E, h *= E, k *= E, n *= E), 1 !== D && (d *= D, g *= D, j *= D, m *= D), 1 !== C && (c *= C, f *= C, i *= C, l *= C), (o || I) && (o && (F += e * -o, G += h * -o, H += k * -o + o), I && (F += x.xOrigin - (x.xOrigin * c + x.yOrigin * d) + x.xOffset, G += x.yOrigin - (x.xOrigin * f + x.yOrigin * g) + x.yOffset), F < q && F > -q && (F = "0"), G < q && G > -q && (G = "0"), H < q && H > -q && (H = 0)), u = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d(", u += (c < q && c > -q ? "0" : c) + "," + (f < q && f > -q ? "0" : f) + "," + (i < q && i > -q ? "0" : i), u += "," + (l < q && l > -q ? "0" : l) + "," + (d < q && d > -q ? "0" : d) + "," + (g < q && g > -q ? "0" : g), A || B || 1 !== E ? (u += "," + (j < q && j > -q ? "0" : j) + "," + (m < q && m > -q ? "0" : m) + "," + (e < q && e > -q ? "0" : e), u += "," + (h < q && h > -q ? "0" : h) + "," + (k < q && k > -q ? "0" : k) + "," + (n < q && n > -q ? "0" : n) + ",") : u += ",0,0,0,0,1,0,", u += F + "," + G + "," + H + "," + (J ? 1 + -H / J : 1) + ")", y[Ia] = u
                            }
                        };
                    (l = Ma.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function(a, b, c, d, f, h, j) {
                            if (d._lastParsedTransform === j) return f;
                            d._lastParsedTransform = j;
                            var k, l = j.scale && "function" == typeof j.scale ? j.scale : 0;
                            "function" == typeof j[c] && (k = j[c], j[c] = b), l && (j.scale = l(t, a));
                            var m, n, o, p, q, r, u, v, w, x = a._gsTransform,
                                y = a.style,
                                z = Ha.length,
                                A = j,
                                B = {},
                                C = Wa(a, g, !0, A.parseTransform),
                                D = A.transform && ("function" == typeof A.transform ? A.transform(t, s) : A.transform);
                            if (C.skewType = A.skewType || C.skewType || i.defaultSkewType, d._transform = C, D && "string" == typeof D && Ia)(n = S.style)[Ia] = D, n.display = "block", n.position = "absolute", Q.body.appendChild(S), m = Wa(S, null, !1), "simple" === C.skewType && (m.scaleY *= Math.cos(m.skewX * M)), C.svg && (r = C.xOrigin, u = C.yOrigin, m.x -= C.xOffset, m.y -= C.yOffset, (A.transformOrigin || A.svgOrigin) && (D = {}, Ra(a, ja(A.transformOrigin), D, A.svgOrigin, A.smoothOrigin, !0), r = D.xOrigin, u = D.yOrigin, m.x -= D.xOffset - C.xOffset, m.y -= D.yOffset - C.yOffset), (r || u) && (v = Va(S, !0), m.x -= r - (r * v[0] + u * v[2]), m.y -= u - (r * v[1] + u * v[3]))), Q.body.removeChild(S), m.perspective || (m.perspective = C.perspective), null != A.xPercent && (m.xPercent = la(A.xPercent, C.xPercent)), null != A.yPercent && (m.yPercent = la(A.yPercent, C.yPercent));
                            else if ("object" === (void 0 === A ? "undefined" : e(A))) {
                                if (m = {
                                    scaleX: la(null != A.scaleX ? A.scaleX : A.scale, C.scaleX),
                                    scaleY: la(null != A.scaleY ? A.scaleY : A.scale, C.scaleY),
                                    scaleZ: la(A.scaleZ, C.scaleZ),
                                    x: la(A.x, C.x),
                                    y: la(A.y, C.y),
                                    z: la(A.z, C.z),
                                    xPercent: la(A.xPercent, C.xPercent),
                                    yPercent: la(A.yPercent, C.yPercent),
                                    perspective: la(A.transformPerspective, C.perspective)
                                }, null != (q = A.directionalRotation))
                                    if ("object" === (void 0 === q ? "undefined" : e(q)))
                                        for (n in q) A[n] = q[n];
                                    else A.rotation = q;
                                "string" == typeof A.x && -1 !== A.x.indexOf("%") && (m.x = 0, m.xPercent = la(A.x, C.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (m.y = 0, m.yPercent = la(A.y, C.yPercent)), m.rotation = ma("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : C.rotation, C.rotation, "rotation", B), La && (m.rotationX = ma("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", B), m.rotationY = ma("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", B)), m.skewX = ma(A.skewX, C.skewX), m.skewY = ma(A.skewY, C.skewY)
                            }
                            for (La && null != A.force3D && (C.force3D = A.force3D, p = !0), (o = C.force3D || C.z || C.rotationX || C.rotationY || m.z || m.rotationX || m.rotationY || m.perspective) || null == A.scale || (m.scaleZ = 1); --z > -1;)((D = m[w = Ha[z]] - C[w]) > 1e-6 || D < -1e-6 || null != A[w] || null != O[w]) && (p = !0, f = new va(C, w, C[w], D, f), w in B && (f.e = B[w]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                            return D = A.transformOrigin, C.svg && (D || A.svgOrigin) && (r = C.xOffset, u = C.yOffset, Ra(a, ja(D), m, A.svgOrigin, A.smoothOrigin), f = wa(C, "xOrigin", (x ? C : m).xOrigin, m.xOrigin, f, "transformOrigin"), f = wa(C, "yOrigin", (x ? C : m).yOrigin, m.yOrigin, f, "transformOrigin"), r === C.xOffset && u === C.yOffset || (f = wa(C, "xOffset", x ? r : C.xOffset, C.xOffset, f, "transformOrigin"), f = wa(C, "yOffset", x ? u : C.yOffset, C.yOffset, f, "transformOrigin")), D = "0px 0px"), (D || La && o && C.zOrigin) && (Ia ? (p = !0, w = Ka, D = (D || ba(a, w, g, !1, "50% 50%")) + "", (f = new va(y, w, 0, 0, f, -1, "transformOrigin")).b = y[w], f.plugin = h, La ? (n = C.zOrigin, D = D.split(" "), C.zOrigin = (D.length > 2 && (0 === n || "0px" !== D[2]) ? parseFloat(D[2]) : n) || 0, f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px", (f = new va(C, "zOrigin", 0, 0, f, -1, f.n)).b = n, f.xs0 = f.e = C.zOrigin) : f.xs0 = f.e = D) : ja(D + "", C)), p && (d._transformType = C.svg && Ca || !o && 3 !== this._transformType ? 2 : 3), k && (j[c] = k), l && (j.scale = l), f
                        },
                        prefix: !0
                    }), Aa("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }), Aa("borderRadius", {
                        defaultValue: "0px",
                        parser: function(a, b, c, e, f, h) {
                            b = this.format(b);
                            var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                z = a.style;
                            for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = _(y[j])), -1 !== (m = l = ba(a, y[j], g, !1, "0px")).indexOf(" ") && (m = (l = m.split(" "))[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), (u = "=" === n.charAt(1)) ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = ca(a, "borderLeft", o, t), w = ca(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (m = v / (x = ca(a, "borderLeft", 1, "em")) + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), f = xa(z, y[j], m + " " + l, n + " " + k, !1, "0px", f);
                            return f
                        },
                        prefix: !0,
                        formatter: sa("0px 0px 0px 0px", !1, !0)
                    }), Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function(a, b, c, d, e, f) {
                            return xa(a.style, c, this.format(ba(a, c, g, !1, "0px 0px")), this.format(b), !1, "0px", e)
                        },
                        prefix: !0,
                        formatter: sa("0px 0px", !1, !0)
                    }), Aa("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(a, b, c, d, e, f) {
                            var h, i, j, k, l, m, n = "background-position",
                                o = g || aa(a, null),
                                p = this.format((o ? r ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                                q = this.format(b);
                            if (-1 !== p.indexOf("%") != (-1 !== q.indexOf("%")) && q.split(",").length < 2 && (m = ba(a, "backgroundImage").replace(F, "")) && "none" !== m) {
                                for (h = p.split(" "), i = q.split(" "), T.setAttribute("src", m), j = 2; --j > -1;)(k = -1 !== (p = h[j]).indexOf("%")) != (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - T.width : a.offsetHeight - T.height, h[j] = k ? parseFloat(p) / 100 * l + "px" : parseFloat(p) / l * 100 + "%");
                                p = h.join(" ")
                            }
                            return this.parseComplex(a.style, p, q, e, f)
                        },
                        formatter: ja
                    }), Aa("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function(a) {
                            return ja(-1 === (a += "").indexOf(" ") ? a + " " + a : a)
                        }
                    }), Aa("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }), Aa("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }), Aa("transformStyle", {
                        prefix: !0
                    }), Aa("backfaceVisibility", {
                        prefix: !0
                    }), Aa("userSelect", {
                        prefix: !0
                    }), Aa("margin", {
                        parser: ta("marginTop,marginRight,marginBottom,marginLeft")
                    }), Aa("padding", {
                        parser: ta("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }), Aa("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function(a, b, c, d, e, f) {
                            var h, i, j;
                            return r < 9 ? (i = a.currentStyle, j = r < 8 ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(ba(a, this.p, g, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, e, f)
                        }
                    }), Aa("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }), Aa("autoRound,strictUnits", {
                        parser: function(a, b, c, d, e) {
                            return e
                        }
                    }), Aa("border", {
                        defaultValue: "0px solid #000",
                        parser: function(a, b, c, d, e, f) {
                            var h = ba(a, "borderTopWidth", g, !1, "0px"),
                                i = this.format(b).split(" "),
                                j = i[0].replace(y, "");
                            return "px" !== j && (h = parseFloat(h) / ca(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + ba(a, "borderTopStyle", g, !1, "solid") + " " + ba(a, "borderTopColor", g, !1, "#000")), i.join(" "), e, f)
                        },
                        color: !0,
                        formatter: function(a) {
                            var b = a.split(" ");
                            return b[0] + " " + (b[1] || "solid") + " " + (a.match(ra) || ["#000"])[0]
                        }
                    }), Aa("borderWidth", {
                        parser: ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }), Aa("float,cssFloat,styleFloat", {
                        parser: function(a, b, c, d, e, f) {
                            var g = a.style,
                                h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                            return new va(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                        }
                    });
                    var Za = function(a) {
                        var b, c = this.t,
                            d = c.filter || ba(this.data, "filter") || "",
                            e = this.s + this.c * a | 0;
                        100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !ba(this.data, "filter")) : (c.filter = d.replace(B, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(z, "opacity=" + e))
                    };
                    Aa("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(a, b, c, d, e, f) {
                            var h = parseFloat(ba(a, "opacity", g, !1, "1")),
                                i = a.style,
                                j = "autoAlpha" === c;
                            return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === ba(a, "visibility", g) && 0 !== b && (h = 0), W ? e = new va(i, "opacity", h, b - h, e) : ((e = new va(i, "opacity", 100 * h, 100 * (b - h), e)).xn1 = j ? 1 : 0, i.zoom = 1, e.type = 2, e.b = "alpha(opacity=" + e.s + ")", e.e = "alpha(opacity=" + (e.s + e.c) + ")", e.data = a, e.plugin = f, e.setRatio = Za), j && ((e = new va(i, "visibility", 0, 0, e, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit")).xs0 = "inherit", d._overwriteProps.push(e.n), d._overwriteProps.push(c)), e
                        }
                    });
                    var $a = function(a, b) {
                            b && (a.removeProperty ? ("ms" !== b.substr(0, 2) && "webkit" !== b.substr(0, 6) || (b = "-" + b), a.removeProperty(b.replace(D, "-$1").toLowerCase())) : a.removeAttribute(b))
                        },
                        _a = function(a) {
                            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                                for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : $a(c, b.p), b = b._next;
                                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                        };
                    Aa("className", {
                        parser: function(a, b, d, e, f, h, i) {
                            var j, k, l, m, n, o = a.getAttribute("class") || "",
                                p = a.style.cssText;
                            if ((f = e._classNamePT = new va(a, d, 0, 0, f, 2)).setRatio = _a, f.pr = -11, c = !0, f.b = o, k = ea(a, g), l = a._gsClassPT) {
                                for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                                l.setRatio(1)
                            }
                            return a._gsClassPT = f, f.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", f.e), j = fa(a, k, ea(a), i, m), a.setAttribute("class", o), f.data = j.firstMPT, a.style.cssText = p, f = f.xfirst = e.parse(a, j.difs, f, h)
                        }
                    });
                    var ab = function(a) {
                        if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var b, c, d, e, f, g = this.t.style,
                                h = k.transform.parse;
                            if ("all" === this.e) g.cssText = "", e = !0;
                            else
                                for (d = (b = this.e.split(" ").join("").split(",")).length; --d > -1;) c = b[d], k[c] && (k[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ka : k[c].p), $a(g, c);
                            e && ($a(g, Ia), (f = this.t._gsTransform) && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                        }
                    };
                    for (Aa("clearProps", {
                        parser: function(a, b, d, e, f) {
                            return (f = new va(a, d, 0, 0, f, 2)).setRatio = ab, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ya = l.length; ya--;) Ba(l[ya]);
                    (l = i.prototype)._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(a, b, e, f) {
                        if (!a.nodeType) return !1;
                        this._target = s = a, this._tween = e, this._vars = b, t = f, m = b.autoRound, c = !1, d = b.suffixMap || i.suffixMap, g = aa(a, ""), h = this._overwriteProps;
                        var j, l, p, r, u, v, w, x, y, z = a.style;
                        if (n && "" === z.zIndex && ("auto" !== (j = ba(a, "zIndex", g)) && "" !== j || this._addLazySet(z, "zIndex", 0)), "string" == typeof b && (r = z.cssText, j = ea(a, g), z.cssText = r + ";" + b, j = fa(a, j, ea(a)).difs, !W && A.test(b) && (j.opacity = parseFloat(RegExp.$1)), b = j, z.cssText = r), b.className ? this._firstPT = l = k.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = l = this.parse(a, b, null), this._transformType) {
                            for (y = 3 === this._transformType, Ia ? o && (n = !0, "" === z.zIndex && ("auto" !== (w = ba(a, "zIndex", g)) && "" !== w || this._addLazySet(z, "zIndex", 0)), q && this._addLazySet(z, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (y ? "visible" : "hidden"))) : z.zoom = 1, p = l; p && p._next;) p = p._next;
                            x = new va(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, p), x.setRatio = Ia ? Ya : Xa, x.data = this._transform || Wa(a, g, !0), x.tween = e, x.pr = -1, h.pop()
                        }
                        if (c) {
                            for (; l;) {
                                for (v = l._next, p = r; p && p.pr > l.pr;) p = p._next;
                                (l._prev = p ? p._prev : u) ? l._prev._next = l: r = l, (l._next = p) ? p._prev = l : u = l, l = v
                            }
                            this._firstPT = r
                        }
                        return !0
                    }, l.parse = function(a, b, c, e) {
                        var f, h, i, j, l, n, o, p, q, r, u = a.style;
                        for (f in b) {
                            if ("function" == typeof(n = b[f]) && (n = n(t, s)), h = k[f]) c = h.parse(a, n, f, this, c, e, b);
                            else {
                                if ("--" === f.substr(0, 2)) {
                                    this._tween._propLookup[f] = this._addTween.call(this._tween, a.style, "setProperty", aa(a).getPropertyValue(f) + "", n + "", f, !1, f);
                                    continue
                                }
                                l = ba(a, f, g) + "", q = "string" == typeof n, "color" === f || "fill" === f || "stroke" === f || -1 !== f.indexOf("Color") || q && C.test(n) ? (q || (n = ((n = pa(n)).length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = xa(u, f, l, n, !0, "transparent", c, 0, e)) : q && L.test(n) ? c = xa(u, f, l, n, !0, null, c, 0, e) : (o = (i = parseFloat(l)) || 0 === i ? l.substr((i + "").length) : "", "" !== l && "auto" !== l || ("width" === f || "height" === f ? (i = ia(a, f, g), o = "px") : "left" === f || "top" === f ? (i = da(a, f, g), o = "px") : (i = "opacity" !== f ? 0 : 1, o = "")), (r = q && "=" === n.charAt(1)) ? (j = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), j *= parseFloat(n), p = n.replace(y, "")) : (j = parseFloat(n), p = q ? n.replace(y, "") : ""), "" === p && (p = f in d ? d[f] : o), n = j || 0 === j ? (r ? j + i : j) + p : b[f], o !== p && ("" === p && "lineHeight" !== f || (j || 0 === j) && i && (i = ca(a, f, i, o), "%" === p ? (i /= ca(a, f, 100, "%") / 100, !0 !== b.strictUnits && (l = i + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? i /= ca(a, f, 1, p) : "px" !== p && (j = ca(a, f, j, p), p = "px"), r && (j || 0 === j) && (n = j + i + p))), r && (j += i), !i && 0 !== i || !j && 0 !== j ? void 0 !== u[f] && (n || n + "" != "NaN" && null != n) ? (c = new va(u, f, j || i || 0, 0, c, -1, f, !1, 0, l, n)).xs0 = "none" !== n || "display" !== f && -1 === f.indexOf("Style") ? n : l : Y(b[f]) : (c = new va(u, f, i, j - i, c, 0, f, !1 !== m && ("px" === p || "zIndex" === f), 0, l, n)).xs0 = p)
                            }
                            e && c && !c.plugin && (c.plugin = e)
                        }
                        return c
                    }, l.setRatio = function(a) {
                        var b, c, d, e = this._firstPT;
                        if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                                for (; e;) {
                                    if (b = e.c * a + e.s, e.r ? b = Math.round(b) : b < 1e-6 && b > -1e-6 && (b = 0), e.type)
                                        if (1 === e.type)
                                            if (2 === (d = e.l)) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                            else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                            else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                            else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                            else {
                                                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c
                                            } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                    else e.t[e.p] = b + e.xs0;
                                    e = e._next
                                } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (b = Math.round(e.s + e.c), e.type) {
                                            if (1 === e.type) {
                                                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c
                                            }
                                        } else e.t[e.p] = b + e.xs0;
                                    else e.t[e.p] = e.e;
                                else e.setRatio(a);
                                e = e._next
                            }
                    }, l._enableTransforms = function(a) {
                        this._transform = this._transform || Wa(this._target, g, !0), this._transformType = this._transform.svg && Ca || !a && 3 !== this._transformType ? 2 : 3
                    };
                    var bb = function(a) {
                        this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                    };
                    l._addLazySet = function(a, b, c) {
                        var d = this._firstPT = new va(a, b, 0, 0, this._firstPT, 2);
                        d.e = c, d.setRatio = bb, d.data = this
                    }, l._linkCSSP = function(a, b, c, d) {
                        return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
                    }, l._mod = function(a) {
                        for (var b = this._firstPT; b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next
                    }, l._kill = function(b) {
                        var c, d, e, f = b;
                        if (b.autoAlpha || b.alpha) {
                            for (d in f = {}, b) f[d] = b[d];
                            f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                        }
                        for (b.className && (c = this._classNamePT) && ((e = c.xfirst) && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
                        return a.prototype._kill.call(this, f)
                    };
                    var cb = function a(b, c, d) {
                        var e, f, g, h;
                        if (b.slice)
                            for (f = b.length; --f > -1;) a(b[f], c, d);
                        else
                            for (f = (e = b.childNodes).length; --f > -1;) h = (g = e[f]).type, g.style && (c.push(ea(g)), d && d.push(g)), 1 !== h && 9 !== h && 11 !== h || !g.childNodes.length || a(g, c, d)
                    };
                    return i.cascadeTo = function(a, c, d) {
                        var e, f, g, h, i = b.to(a, c, d),
                            j = [i],
                            k = [],
                            l = [],
                            m = [],
                            n = b._internals.reservedProps;
                        for (a = i._targets || i.target, cb(a, k, m), i.render(c, !0, !0), cb(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                            if ((f = fa(m[e], k[e], l[e])).firstMPT) {
                                for (g in f = f.difs, d) n[g] && (f[g] = d[g]);
                                for (g in h = {}, f) h[g] = k[e][g];
                                j.push(b.fromTo(m[e], c, h, f))
                            } return j
                    }, a.activate([i]), i
                }, !0),
                    function() {
                        var a = function(a) {
                                for (; a;) a.f || a.blob || (a.m = Math.round), a = a._next
                            },
                            b = f._gsDefine.plugin({
                                propName: "roundProps",
                                version: "1.6.0",
                                priority: -1,
                                API: 2,
                                init: function(a, b, c) {
                                    return this._tween = c, !0
                                }
                            }).prototype;
                        b._onInitAllProps = function() {
                            for (var b, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1;) h[f[g]] = Math.round;
                            for (g = f.length; --g > -1;)
                                for (b = f[g], c = e._firstPT; c;) d = c._next, c.pg ? c.t._mod(h) : c.n === b && (2 === c.f && c.t ? a(c.t._firstPT) : (this._add(c.t, b, c.s, c.c), d && (d._prev = c._prev), c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d), c._next = c._prev = null, e._propLookup[b] = i)), c = d;
                            return !1
                        }, b._add = function(a, b, c, d) {
                            this._addTween(a, b, c, c + d, b, Math.round), this._overwriteProps.push(b)
                        }
                    }(), f._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(a, b, c, d) {
                        var e, f;
                        if ("function" != typeof a.setAttribute) return !1;
                        for (e in b) "function" == typeof(f = b[e]) && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                        return !0
                    }
                }), f._gsDefine.plugin({
                    propName: "directionalRotation",
                    version: "0.3.1",
                    API: 2,
                    init: function(a, b, c, d) {
                        "object" !== (void 0 === b ? "undefined" : e(b)) && (b = {
                            rotation: b
                        }), this.finals = {};
                        var f, g, h, i, j, k, l = !0 === b.useRadians ? 2 * Math.PI : 360;
                        for (f in b) "useRadians" !== f && ("function" == typeof(i = b[f]) && (i = i(d, a)), g = (k = (i + "").split("_"))[0], h = parseFloat("function" != typeof a[f] ? a[f] : a[f.indexOf("set") || "function" != typeof a["get" + f.substr(3)] ? f : "get" + f.substr(3)]()), j = (i = this.finals[f] = "string" == typeof g && "=" === g.charAt(1) ? h + parseInt(g.charAt(0) + "1", 10) * Number(g.substr(2)) : Number(g) || 0) - h, k.length && (-1 !== (g = k.join("_")).indexOf("short") && (j %= l) != j % (l / 2) && (j = j < 0 ? j + l : j - l), -1 !== g.indexOf("_cw") && j < 0 ? j = (j + 9999999999 * l) % l - (j / l | 0) * l : -1 !== g.indexOf("ccw") && j > 0 && (j = (j - 9999999999 * l) % l - (j / l | 0) * l)), (j > 1e-6 || j < -1e-6) && (this._addTween(a, f, h, h + j, f), this._overwriteProps.push(f)));
                        return !0
                    },
                    set: function(a) {
                        var b;
                        if (1 !== a) this._super.setRatio.call(this, a);
                        else
                            for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                    }
                })._autoCSS = !0, f._gsDefine("easing.Back", ["easing.Ease"], function(a) {
                    var b, c, d, e, g = f.GreenSockGlobals || f,
                        h = g.com.greensock,
                        i = 2 * Math.PI,
                        j = Math.PI / 2,
                        k = h._class,
                        l = function(b, c) {
                            var d = k("easing." + b, function() {}, !0),
                                e = d.prototype = new a;
                            return e.constructor = d, e.getRatio = c, d
                        },
                        m = a.register || function() {},
                        n = function(a, b, c, d, e) {
                            var f = k("easing." + a, {
                                easeOut: new b,
                                easeIn: new c,
                                easeInOut: new d
                            }, !0);
                            return m(f, a), f
                        },
                        o = function(a, b, c) {
                            this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                        },
                        p = function(b, c) {
                            var d = k("easing." + b, function(a) {
                                    this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                                }, !0),
                                e = d.prototype = new a;
                            return e.constructor = d, e.getRatio = c, e.config = function(a) {
                                return new d(a)
                            }, d
                        },
                        q = n("Back", p("BackOut", function(a) {
                            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                        }), p("BackIn", function(a) {
                            return a * a * ((this._p1 + 1) * a - this._p1)
                        }), p("BackInOut", function(a) {
                            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                        })),
                        r = k("easing.SlowMo", function(a, b, c) {
                            b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === c
                        }, !0),
                        s = r.prototype = new a;
                    return s.constructor = r, s.getRatio = function(a) {
                        var b = a + (.5 - a) * this._p;
                        return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                    }, r.ease = new r(.7, .7), s.config = r.config = function(a, b, c) {
                        return new r(a, b, c)
                    }, (s = (b = k("easing.SteppedEase", function(a, b) {
                        a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0
                    }, !0)).prototype = new a).constructor = b, s.getRatio = function(a) {
                        return a < 0 ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1
                    }, s.config = b.config = function(a, c) {
                        return new b(a, c)
                    }, (s = (c = k("easing.ExpoScaleEase", function(a, b, c) {
                        this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c
                    }, !0)).prototype = new a).constructor = c, s.getRatio = function(a) {
                        return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2
                    }, s.config = c.config = function(a, b, d) {
                        return new c(a, b, d)
                    }, (s = (d = k("easing.RoughEase", function(b) {
                        for (var c, d, e, f, g, h, i = (b = b || {}).taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, n = !1 !== b.randomize, p = !0 === b.clamp, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;) c = n ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, e = "none" === i ? r : "out" === i ? (f = 1 - c) * f * r : "in" === i ? c * c * r : c < .5 ? (f = 2 * c) * f * .5 * r : (f = 2 * (1 - c)) * f * .5 * r, n ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : d < 0 && (d = 0)), j[k++] = {
                            x: c,
                            y: d
                        };
                        for (j.sort(function(a, b) {
                            return a.x - b.x
                        }), h = new o(1, 1, null), m = l; --m > -1;) g = j[m], h = new o(g.x, g.y, h);
                        this._prev = new o(0, 0, 0 !== h.t ? h : h.next)
                    }, !0)).prototype = new a).constructor = d, s.getRatio = function(a) {
                        var b = this._prev;
                        if (a > b.t) {
                            for (; b.next && a >= b.t;) b = b.next;
                            b = b.prev
                        } else
                            for (; b.prev && a <= b.t;) b = b.prev;
                        return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                    }, s.config = function(a) {
                        return new d(a)
                    }, d.ease = new d, n("Bounce", l("BounceOut", function(a) {
                        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                    }), l("BounceIn", function(a) {
                        return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : a < 2 / 2.75 ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : a < 2.5 / 2.75 ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                    }), l("BounceInOut", function(a) {
                        var b = a < .5;
                        return (a = b ? 1 - 2 * a : 2 * a - 1) < 1 / 2.75 ? a *= 7.5625 * a : a = a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                    })), n("Circ", l("CircOut", function(a) {
                        return Math.sqrt(1 - (a -= 1) * a)
                    }), l("CircIn", function(a) {
                        return -(Math.sqrt(1 - a * a) - 1)
                    }), l("CircInOut", function(a) {
                        return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                    })), n("Elastic", (e = function(b, c, d) {
                        var e = k("easing." + b, function(a, b) {
                                this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (a < 1 ? a : 1), this._p3 = this._p2 / i * (Math.asin(1 / this._p1) || 0), this._p2 = i / this._p2
                            }, !0),
                            f = e.prototype = new a;
                        return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                            return new e(a, b)
                        }, e
                    })("ElasticOut", function(a) {
                        return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
                    }, .3), e("ElasticIn", function(a) {
                        return -this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)
                    }, .3), e("ElasticInOut", function(a) {
                        return (a *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
                    }, .45)), n("Expo", l("ExpoOut", function(a) {
                        return 1 - Math.pow(2, -10 * a)
                    }), l("ExpoIn", function(a) {
                        return Math.pow(2, 10 * (a - 1)) - .001
                    }), l("ExpoInOut", function(a) {
                        return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                    })), n("Sine", l("SineOut", function(a) {
                        return Math.sin(a * j)
                    }), l("SineIn", function(a) {
                        return 1 - Math.cos(a * j)
                    }), l("SineInOut", function(a) {
                        return -.5 * (Math.cos(Math.PI * a) - 1)
                    })), k("easing.EaseLookup", {
                        find: function(b) {
                            return a.map[b]
                        }
                    }, !0), m(g.SlowMo, "SlowMo", "ease,"), m(d, "RoughEase", "ease,"), m(b, "SteppedEase", "ease,"), q
                }, !0)
            }), f._gsDefine && f._gsQueue.pop()(),
                function(c, f) {
                    var g = {},
                        h = c.document,
                        i = c.GreenSockGlobals = c.GreenSockGlobals || c;
                    if (!i.TweenLite) {
                        var j, k, l, m, n, o, p, q = function(a) {
                                var b, c = a.split("."),
                                    d = i;
                                for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                                return d
                            },
                            r = q("com.greensock"),
                            s = function(a) {
                                var b, c = [],
                                    d = a.length;
                                for (b = 0; b !== d; c.push(a[b++]));
                                return c
                            },
                            t = function() {},
                            u = (o = Object.prototype.toString, p = o.call([]), function(a) {
                                return null != a && (a instanceof Array || "object" === (void 0 === a ? "undefined" : e(a)) && !!a.push && o.call(a) === p)
                            }),
                            v = {},
                            w = c._gsDefine = function(c, e, f, h) {
                                return new function c(e, f, h, j) {
                                    this.sc = v[e] ? v[e].sc : [], v[e] = this, this.gsClass = null, this.func = h;
                                    var k = [];
                                    this.check = function(l) {
                                        for (var m, n, o, p, r = f.length, s = r; --r > -1;)(m = v[f[r]] || new c(f[r], [])).gsClass ? (k[r] = m.gsClass, s--) : l && m.sc.push(this);
                                        if (0 === s && h) {
                                            if (o = (n = ("com.greensock." + e).split(".")).pop(), p = q(n.join("."))[o] = this.gsClass = h.apply(h, k), j)
                                                if (i[o] = g[o] = p, void 0 !== a && a.exports)
                                                    if ("TweenMax" === e)
                                                        for (r in a.exports = g.TweenMax = p, g) p[r] = g[r];
                                                    else g.TweenMax && (g.TweenMax[o] = p);
                                                else void 0 === (d = function() {
                                                    return p
                                                }.apply(b, [])) || (a.exports = d);
                                            for (r = 0; r < this.sc.length; r++) this.sc[r].check()
                                        }
                                    }, this.check(!0)
                                }(c, e, f, h)
                            },
                            x = r._class = function(a, b, c) {
                                return b = b || function() {}, w(a, [], function() {
                                    return b
                                }, c), b
                            };
                        w.globals = i;
                        var y = [0, 0, 1, 1],
                            z = x("easing.Ease", function(a, b, c, d) {
                                this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? y.concat(b) : y
                            }, !0),
                            A = z.map = {},
                            B = z.register = function(a, b, c, d) {
                                for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                                    for (f = i[j], e = d ? x("easing." + f, null, !0) : r.easing[f] || {}, g = k.length; --g > -1;) h = k[g], A[f + "." + h] = A[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                            };
                        for ((l = z.prototype)._calcEnd = !1, l.getRatio = function(a) {
                            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                            var b = this._type,
                                c = this._power,
                                d = 1 === b ? 1 - a : 2 === b ? a : a < .5 ? 2 * a : 2 * (1 - a);
                            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : a < .5 ? d / 2 : 1 - d / 2
                        }, k = (j = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --k > -1;) l = j[k] + ",Power" + k, B(new z(null, null, 1, k), l, "easeOut", !0), B(new z(null, null, 2, k), l, "easeIn" + (0 === k ? ",easeNone" : "")), B(new z(null, null, 3, k), l, "easeInOut");
                        A.linear = r.easing.Linear.easeIn, A.swing = r.easing.Quad.easeInOut;
                        var C = x("events.EventDispatcher", function(a) {
                            this._listeners = {}, this._eventTarget = a || this
                        });
                        (l = C.prototype).addEventListener = function(a, b, c, d, e) {
                            e = e || 0;
                            var f, g, h = this._listeners[a],
                                i = 0;
                            for (this !== m || n || m.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;)(f = h[g]).c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
                            h.splice(i, 0, {
                                c: b,
                                s: c,
                                up: d,
                                pr: e
                            })
                        }, l.removeEventListener = function(a, b) {
                            var c, d = this._listeners[a];
                            if (d)
                                for (c = d.length; --c > -1;)
                                    if (d[c].c === b) return void d.splice(c, 1)
                        }, l.dispatchEvent = function(a) {
                            var b, c, d, e = this._listeners[a];
                            if (e)
                                for ((b = e.length) > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;)(d = e[b]) && (d.up ? d.c.call(d.s || c, {
                                    type: a,
                                    target: c
                                }) : d.c.call(d.s || c))
                        };
                        var D = c.requestAnimationFrame,
                            E = c.cancelAnimationFrame,
                            F = Date.now || function() {
                                return (new Date).getTime()
                            },
                            G = F();
                        for (k = (j = ["ms", "moz", "webkit", "o"]).length; --k > -1 && !D;) D = c[j[k] + "RequestAnimationFrame"], E = c[j[k] + "CancelAnimationFrame"] || c[j[k] + "CancelRequestAnimationFrame"];
                        x("Ticker", function(a, b) {
                            var c, d, e, f, g, i = this,
                                j = F(),
                                k = !(!1 === b || !D) && "auto",
                                l = 500,
                                o = 33,
                                p = function a(b) {
                                    var h, k, m = F() - G;
                                    m > l && (j += m - o), G += m, i.time = (G - j) / 1e3, h = i.time - g, (!c || h > 0 || !0 === b) && (i.frame++, g += h + (h >= f ? .004 : f - h), k = !0), !0 !== b && (e = d(a)), k && i.dispatchEvent("tick")
                                };
                            C.call(i), i.time = i.frame = 0, i.tick = function() {
                                p(!0)
                            }, i.lagSmoothing = function(a, b) {
                                if (!arguments.length) return l < 1e10;
                                l = a || 1e10, o = Math.min(b, l, 0)
                            }, i.sleep = function() {
                                null != e && (k && E ? E(e) : clearTimeout(e), d = t, e = null, i === m && (n = !1))
                            }, i.wake = function(a) {
                                null !== e ? i.sleep() : a ? j += -G + (G = F()) : i.frame > 10 && (G = F() - l + 5), d = 0 === c ? t : k && D ? D : function(a) {
                                    return setTimeout(a, 1e3 * (g - i.time) + 1 | 0)
                                }, i === m && (n = !0), p(2)
                            }, i.fps = function(a) {
                                if (!arguments.length) return c;
                                f = 1 / ((c = a) || 60), g = this.time + f, i.wake()
                            }, i.useRAF = function(a) {
                                if (!arguments.length) return k;
                                i.sleep(), k = a, i.fps(c)
                            }, i.fps(a), setTimeout(function() {
                                "auto" === k && i.frame < 5 && "hidden" !== (h || {}).visibilityState && i.useRAF(!1)
                            }, 1500)
                        }), (l = r.Ticker.prototype = new r.events.EventDispatcher).constructor = r.Ticker;
                        var H = x("core.Animation", function(a, b) {
                            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, Z) {
                                n || m.wake();
                                var c = this.vars.useFrames ? Y : Z;
                                c.add(this, c._time), this.vars.paused && this.paused(!0)
                            }
                        });
                        m = H.ticker = new r.Ticker, (l = H.prototype)._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1, ! function a() {
                            n && F() - G > 2e3 && ("hidden" !== (h || {}).visibilityState || !m.lagSmoothing()) && m.wake();
                            var b = setTimeout(a, 2e3);
                            b.unref && b.unref()
                        }(), l.play = function(a, b) {
                            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
                        }, l.pause = function(a, b) {
                            return null != a && this.seek(a, b), this.paused(!0)
                        }, l.resume = function(a, b) {
                            return null != a && this.seek(a, b), this.paused(!1)
                        }, l.seek = function(a, b) {
                            return this.totalTime(Number(a), !1 !== b)
                        }, l.restart = function(a, b) {
                            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
                        }, l.reverse = function(a, b) {
                            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
                        }, l.render = function(a, b, c) {}, l.invalidate = function() {
                            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                        }, l.isActive = function() {
                            var a, b = this._timeline,
                                c = this._startTime;
                            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7
                        }, l._enabled = function(a, b) {
                            return n || m.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
                        }, l._kill = function(a, b) {
                            return this._enabled(!1, !1)
                        }, l.kill = function(a, b) {
                            return this._kill(a, b), this
                        }, l._uncache = function(a) {
                            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                            return this
                        }, l._swapSelfInParams = function(a) {
                            for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                            return c
                        }, l._callback = function(a) {
                            var b = this.vars,
                                c = b[a],
                                d = b[a + "Params"],
                                e = b[a + "Scope"] || b.callbackScope || this;
                            switch (d ? d.length : 0) {
                                case 0:
                                    c.call(e);
                                    break;
                                case 1:
                                    c.call(e, d[0]);
                                    break;
                                case 2:
                                    c.call(e, d[0], d[1]);
                                    break;
                                default:
                                    c.apply(e, d)
                            }
                        }, l.eventCallback = function(a, b, c, d) {
                            if ("on" === (a || "").substr(0, 2)) {
                                var e = this.vars;
                                if (1 === arguments.length) return e[a];
                                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = u(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                            }
                            return this
                        }, l.delay = function(a) {
                            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
                        }, l.duration = function(a) {
                            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
                        }, l.totalDuration = function(a) {
                            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
                        }, l.time = function(a, b) {
                            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
                        }, l.totalTime = function(a, b, c) {
                            if (n || m.wake(), !arguments.length) return this._totalTime;
                            if (this._timeline) {
                                if (a < 0 && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                                    this._dirty && this.totalDuration();
                                    var d = this._totalDuration,
                                        e = this._timeline;
                                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                                        for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                                }
                                this._gc && this._enabled(!0, !1), this._totalTime === a && 0 !== this._duration || (L.length && _(), this.render(a, b, !1), L.length && _())
                            }
                            return this
                        }, l.progress = l.totalProgress = function(a, b) {
                            var c = this.duration();
                            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
                        }, l.startTime = function(a) {
                            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
                        }, l.endTime = function(a) {
                            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
                        }, l.timeScale = function(a) {
                            if (!arguments.length) return this._timeScale;
                            var b, c;
                            for (a = a || 1e-10, this._timeline && this._timeline.smoothChildTiming && (c = (b = this._pauseTime) || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) c._dirty = !0, c.totalDuration(), c = c.timeline;
                            return this
                        }, l.reversed = function(a) {
                            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                        }, l.paused = function(a) {
                            if (!arguments.length) return this._paused;
                            var b, c, d = this._timeline;
                            return a != this._paused && d && (n || a || m.wake(), c = (b = d.rawTime()) - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
                        };
                        var I = x("core.SimpleTimeline", function(a) {
                            H.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
                        });
                        (l = I.prototype = new H).constructor = I, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function(a, b, c, d) {
                            var e, f;
                            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                                for (f = a._startTime; e && e._startTime > f;) e = e._prev;
                            return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
                        }, l._remove = function(a, b) {
                            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                        }, l.render = function(a, b, c) {
                            var d, e = this._first;
                            for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
                        }, l.rawTime = function() {
                            return n || m.wake(), this._totalTime
                        };
                        var J = x("TweenLite", function(a, b, d) {
                                if (H.call(this, b, d), this.render = J.prototype.render, null == a) throw "Cannot tween a null target.";
                                this.target = a = "string" != typeof a ? a : J.selector(a) || a;
                                var e, f, g, h = a.jquery || a.length && a !== c && a[0] && (a[0] === c || a[0].nodeType && a[0].style && !a.nodeType),
                                    i = this.vars.overwrite;
                                if (this._overwrite = i = null == i ? X[J.defaultOverwrite] : "number" == typeof i ? i >> 0 : X[i], (h || a instanceof Array || a.push && u(a)) && "number" != typeof a[0])
                                    for (this._targets = g = s(a), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++)(f = g[e]) ? "string" != typeof f ? f.length && f !== c && f[0] && (f[0] === c || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(s(f))) : (this._siblings[e] = aa(f, this, !1), 1 === i && this._siblings[e].length > 1 && ca(f, this, null, 1, this._siblings[e])) : "string" == typeof(f = g[e--] = J.selector(f)) && g.splice(e + 1, 1) : g.splice(e--, 1);
                                else this._propLookup = {}, this._siblings = aa(a, this, !1), 1 === i && this._siblings.length > 1 && ca(a, this, null, 1, this._siblings);
                                (this.vars.immediateRender || 0 === b && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                            }, !0),
                            K = function(a) {
                                return a && a.length && a !== c && a[0] && (a[0] === c || a[0].nodeType && a[0].style && !a.nodeType)
                            };
                        (l = J.prototype = new H).constructor = J, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, J.version = "1.20.4", J.defaultEase = l._ease = new z(null, null, 1, 1), J.defaultOverwrite = "auto", J.ticker = m, J.autoSleep = 120, J.lagSmoothing = function(a, b) {
                            m.lagSmoothing(a, b)
                        }, J.selector = c.$ || c.jQuery || function(a) {
                            var b = c.$ || c.jQuery;
                            return b ? (J.selector = b, b(a)) : void 0 === h ? a : h.querySelectorAll ? h.querySelectorAll(a) : h.getElementById("#" === a.charAt(0) ? a.substr(1) : a)
                        };
                        var L = [],
                            M = {},
                            N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                            O = /[\+-]=-?[\.\d]/,
                            P = function(a) {
                                for (var b, c = this._firstPT; c;) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : b < 1e-6 && b > -1e-6 && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
                            },
                            Q = function(a, b, c, d) {
                                var e, f, g, h, i, j, k, l = [],
                                    m = 0,
                                    n = "",
                                    o = 0;
                                for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(N) || [], f = b.match(N) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; h < i; h++) k = f[h], n += (j = b.substr(m, b.indexOf(k, m) - m)) || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                                    _next: l._firstPT,
                                    t: l,
                                    p: l.length - 1,
                                    s: g,
                                    c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                                    f: 0,
                                    m: o && o < 4 ? Math.round : 0
                                }), m += k.length;
                                return (n += b.substr(m)) && l.push(n), l.setRatio = P, O.test(b) && (l.end = null), l
                            },
                            R = function(a, b, c, d, f, g, h, i, j) {
                                "function" == typeof d && (d = d(j || 0, a));
                                var k = e(a[b]),
                                    l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                                    m = "get" !== c ? c : l ? h ? a[l](h) : a[l]() : a[b],
                                    n = "string" == typeof d && "=" === d.charAt(1),
                                    o = {
                                        t: a,
                                        p: b,
                                        s: m,
                                        f: "function" === k,
                                        pg: 0,
                                        n: f || b,
                                        m: g ? "function" == typeof g ? g : Math.round : 0,
                                        pr: 0,
                                        c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
                                    };
                                if (("number" != typeof m || "number" != typeof d && !n) && (h || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = h, o = {
                                    t: Q(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, i || J.defaultStringFilter, o),
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: f || b,
                                    pr: 0,
                                    m: 0
                                }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c) return (o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o
                            },
                            S = J._internals = {
                                isArray: u,
                                isSelector: K,
                                lazyTweens: L,
                                blobDif: Q
                            },
                            T = J._plugins = {},
                            U = S.tweenLookup = {},
                            V = 0,
                            W = S.reservedProps = {
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
                                onOverwrite: 1,
                                callbackScope: 1,
                                stringFilter: 1,
                                id: 1,
                                yoyoEase: 1
                            },
                            X = {
                                none: 0,
                                all: 1,
                                auto: 2,
                                concurrent: 3,
                                allOnStart: 4,
                                preexisting: 5,
                                true: 1,
                                false: 0
                            },
                            Y = H._rootFramesTimeline = new I,
                            Z = H._rootTimeline = new I,
                            $ = 30,
                            _ = S.lazyRender = function() {
                                var a, b = L.length;
                                for (M = {}; --b > -1;)(a = L[b]) && !1 !== a._lazy && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                                L.length = 0
                            };
                        Z._startTime = m.time, Y._startTime = m.frame, Z._active = Y._active = !0, setTimeout(_, 1), H._updateRoot = J.render = function() {
                            var a, b, c;
                            if (L.length && _(), Z.render((m.time - Z._startTime) * Z._timeScale, !1, !1), Y.render((m.frame - Y._startTime) * Y._timeScale, !1, !1), L.length && _(), m.frame >= $) {
                                for (c in $ = m.frame + (parseInt(J.autoSleep, 10) || 120), U) {
                                    for (a = (b = U[c].tweens).length; --a > -1;) b[a]._gc && b.splice(a, 1);
                                    0 === b.length && delete U[c]
                                }
                                if ((!(c = Z._first) || c._paused) && J.autoSleep && !Y._first && 1 === m._listeners.tick.length) {
                                    for (; c && c._paused;) c = c._next;
                                    c || m.sleep()
                                }
                            }
                        }, m.addEventListener("tick", H._updateRoot);
                        var aa = function(a, b, c) {
                                var d, e, f = a._gsTweenID;
                                if (U[f || (a._gsTweenID = f = "t" + V++)] || (U[f] = {
                                    target: a,
                                    tweens: []
                                }), b && ((d = U[f].tweens)[e = d.length] = b, c))
                                    for (; --e > -1;) d[e] === b && d.splice(e, 1);
                                return U[f].tweens
                            },
                            ba = function(a, b, c, d) {
                                var e, f, g = a.vars.onOverwrite;
                                return g && (e = g(a, b, c, d)), (g = J.onOverwrite) && (f = g(a, b, c, d)), !1 !== e && !1 !== f
                            },
                            ca = function(a, b, c, d, e) {
                                var f, g, h, i;
                                if (1 === d || d >= 4) {
                                    for (i = e.length, f = 0; f < i; f++)
                                        if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                                        else if (5 === d) break;
                                    return g
                                }
                                var j, k = b._startTime + 1e-10,
                                    l = [],
                                    m = 0,
                                    n = 0 === b._duration;
                                for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || da(b, 0, n), 0 === da(h, j, n) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((n || !h._initted) && k - h._startTime <= 2e-10 || (l[m++] = h)));
                                for (f = m; --f > -1;)
                                    if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                                        if (2 !== d && !ba(h, b)) continue;
                                        h._enabled(!1, !1) && (g = !0)
                                    } return g
                            },
                            da = function(a, b, c) {
                                for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                                    if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                                    d = d._timeline
                                }
                                return (f /= e) > b ? f - b : c && f === b || !a._initted && f - b < 2e-10 ? 1e-10 : (f += a.totalDuration() / a._timeScale / e) > b + 1e-10 ? 0 : f - b - 1e-10
                            };
                        l._init = function() {
                            var a, b, c, d, e, f, g = this.vars,
                                h = this._overwrittenProps,
                                i = this._duration,
                                j = !!g.immediateRender,
                                k = g.ease;
                            if (g.startAt) {
                                for (d in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {}, g.startAt) e[d] = g.startAt[d];
                                if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && !1 !== g.lazy, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = J.to(this.target, 0, e), j)
                                    if (this._time > 0) this._startAt = null;
                                    else if (0 !== i) return
                            } else if (g.runBackwards && 0 !== i)
                                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                                else {
                                    for (d in 0 !== this._time && (j = !1), c = {}, g) W[d] && "autoCSS" !== d || (c[d] = g[d]);
                                    if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && !1 !== g.lazy, c.immediateRender = j, this._startAt = J.to(this.target, 0, c), j) {
                                        if (0 === this._time) return
                                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                                } if (this._ease = k = k ? k instanceof z ? k : "function" == typeof k ? new z(k, g.easeParams) : A[k] || J.defaultEase : J.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                                for (f = this._targets.length, a = 0; a < f; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
                            else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
                            if (b && J._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                            this._onUpdate = g.onUpdate, this._initted = !0
                        }, l._initProps = function(a, b, d, e, f) {
                            var g, h, i, j, k, l;
                            if (null == a) return !1;
                            for (g in M[a._gsTweenID] && _(), this.vars.css || a.style && a !== c && a.nodeType && T.css && !1 !== this.vars.autoCSS && function(a, b) {
                                var c, d = {};
                                for (c in a) W[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!T[c] || T[c] && T[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                                a.css = d
                            }(this.vars, a), this.vars)
                                if (l = this.vars[g], W[g]) l && (l instanceof Array || l.push && u(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                                else if (T[g] && (j = new T[g])._onInitTween(a, this.vars[g], this, f)) {
                                    for (this._firstPT = k = {
                                        _next: this._firstPT,
                                        t: j,
                                        p: "setRatio",
                                        s: 0,
                                        c: 1,
                                        f: 1,
                                        n: g,
                                        pg: 1,
                                        pr: j._priority,
                                        m: 0
                                    }, h = j._overwriteProps.length; --h > -1;) b[j._overwriteProps[h]] = this._firstPT;
                                    (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
                                } else b[g] = R.call(this, a, g, "get", l, g, 0, null, this.vars.stringFilter, f);
                            return e && this._kill(e, a) ? this._initProps(a, b, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ca(a, this, b, this._overwrite, d) ? (this._kill(b, a), this._initProps(a, b, d, e, f)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (M[a._gsTweenID] = !0), i)
                        }, l.render = function(a, b, c) {
                            var d, e, f, g, h = this._time,
                                i = this._duration,
                                j = this._rawPrevTime;
                            if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (j < 0 || a <= 0 && a >= -1e-7 || 1e-10 === j && "isPause" !== this.data) && j !== a && (c = !0, j > 1e-10 && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : 1e-10);
                            else if (a < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), a < 0 && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (1e-10 !== j || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);
                            else if (this._totalTime = this._time = a, this._easeType) {
                                var k = a / i,
                                    l = this._easeType,
                                    m = this._easePower;
                                (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), this.ratio = 1 === l ? 1 - k : 2 === l ? k : a / i < .5 ? k / 2 : 1 - k / 2
                            } else this.ratio = this._ease.getRatio(a / i);
                            if (this._time !== h || c) {
                                if (!this._initted) {
                                    if (this._init(), !this._initted || this._gc) return;
                                    if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, L.push(this), void(this._lazy = [a, b]);
                                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                                }
                                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== i || b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                                this._onUpdate && (a < 0 && this._startAt && -1e-4 !== a && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (this._gc && !c || (a < 0 && this._startAt && !this._onUpdate && -1e-4 !== a && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && 1e-10 === this._rawPrevTime && 1e-10 !== g && (this._rawPrevTime = 0)))
                            }
                        }, l._kill = function(a, b, c) {
                            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                            b = "string" != typeof b ? b || this._targets || this.target : J.selector(b) || b;
                            var d, f, g, h, i, j, k, l, m, n = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
                            if ((u(b) || K(b)) && "number" != typeof b[0])
                                for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (j = !0);
                            else {
                                if (this._targets) {
                                    for (d = this._targets.length; --d > -1;)
                                        if (b === this._targets[d]) {
                                            i = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], f = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                                            break
                                        }
                                } else {
                                    if (b !== this.target) return !1;
                                    i = this._propLookup, f = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                                }
                                if (i) {
                                    if (k = a || i, l = a !== f && "all" !== f && a !== i && ("object" !== (void 0 === a ? "undefined" : e(a)) || !a._tempKill), c && (J.onOverwrite || this.vars.onOverwrite)) {
                                        for (g in k) i[g] && (m || (m = []), m.push(g));
                                        if ((m || !a) && !ba(this, c, b, m)) return !1
                                    }
                                    for (g in k)(h = i[g]) && (n && (h.f ? h.t[h.p](h.s) : h.t[h.p] = h.s, j = !0), h.pg && h.t._kill(k) && (j = !0), h.pg && 0 !== h.t._overwriteProps.length || (h._prev ? h._prev._next = h._next : h === this._firstPT && (this._firstPT = h._next), h._next && (h._next._prev = h._prev), h._next = h._prev = null), delete i[g]), l && (f[g] = 1);
                                    !this._firstPT && this._initted && this._enabled(!1, !1)
                                }
                            }
                            return j
                        }, l.invalidate = function() {
                            return this._notifyPluginsOfEnabled && J._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], H.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
                        }, l._enabled = function(a, b) {
                            if (n || m.wake(), a && this._gc) {
                                var c, d = this._targets;
                                if (d)
                                    for (c = d.length; --c > -1;) this._siblings[c] = aa(d[c], this, !0);
                                else this._siblings = aa(this.target, this, !0)
                            }
                            return H.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && J._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
                        }, J.to = function(a, b, c) {
                            return new J(a, b, c)
                        }, J.from = function(a, b, c) {
                            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new J(a, b, c)
                        }, J.fromTo = function(a, b, c, d) {
                            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new J(a, b, d)
                        }, J.delayedCall = function(a, b, c, d, e) {
                            return new J(b, 0, {
                                delay: a,
                                onComplete: b,
                                onCompleteParams: c,
                                callbackScope: d,
                                onReverseComplete: b,
                                onReverseCompleteParams: c,
                                immediateRender: !1,
                                lazy: !1,
                                useFrames: e,
                                overwrite: 0
                            })
                        }, J.set = function(a, b) {
                            return new J(a, 0, b)
                        }, J.getTweensOf = function(a, b) {
                            if (null == a) return [];
                            var c, d, e, f;
                            if (a = "string" != typeof a ? a : J.selector(a) || a, (u(a) || K(a)) && "number" != typeof a[0]) {
                                for (c = a.length, d = []; --c > -1;) d = d.concat(J.getTweensOf(a[c], b));
                                for (c = d.length; --c > -1;)
                                    for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                            } else if (a._gsTweenID)
                                for (c = (d = aa(a).concat()).length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                            return d || []
                        }, J.killTweensOf = J.killDelayedCallsTo = function(a, b, c) {
                            "object" === (void 0 === b ? "undefined" : e(b)) && (c = b, b = !1);
                            for (var d = J.getTweensOf(a, b), f = d.length; --f > -1;) d[f]._kill(c, a)
                        };
                        var ea = x("plugins.TweenPlugin", function(a, b) {
                            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ea.prototype
                        }, !0);
                        if (l = ea.prototype, ea.version = "1.19.0", ea.API = 2, l._firstPT = null, l._addTween = R, l.setRatio = P, l._kill = function(a) {
                            var b, c = this._overwriteProps,
                                d = this._firstPT;
                            if (null != a[this._propName]) this._overwriteProps = [];
                            else
                                for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                            for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                            return !1
                        }, l._mod = l._roundProps = function(a) {
                            for (var b, c = this._firstPT; c;)(b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
                        }, J._onPluginEvent = function(a, b) {
                            var c, d, e, f, g, h = b._firstPT;
                            if ("_onInitAllProps" === a) {
                                for (; h;) {
                                    for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                                    (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                                }
                                h = b._firstPT = e
                            }
                            for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                            return c
                        }, ea.activate = function(a) {
                            for (var b = a.length; --b > -1;) a[b].API === ea.API && (T[(new a[b])._propName] = a[b]);
                            return !0
                        }, w.plugin = function(a) {
                            if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                            var b, c = a.propName,
                                d = a.priority || 0,
                                e = a.overwriteProps,
                                f = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                g = x("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                                    ea.call(this, c, d), this._overwriteProps = e || []
                                }, !0 === a.global),
                                h = g.prototype = new ea(c);
                            for (b in h.constructor = g, g.API = a.API, f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                            return g.version = a.version, ea.activate([g]), g
                        }, j = c._gsQueue) {
                            for (k = 0; k < j.length; k++) j[k]();
                            for (l in v) v[l].func || c.console.log("GSAP encountered missing dependency: " + l)
                        }
                        n = !1
                    }
                }(void 0 !== a && a.exports && void 0 !== c ? c : window)
        }).call(this, c(2))
    }, function(a, b, c) {
        "use strict";
        var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        };
        ! function(a, b, c) {
            function e(a, b) {
                return (void 0 === a ? "undefined" : d(a)) === b
            }

            function f(a) {
                var b = x.className,
                    c = v._config.classPrefix || "";
                if (y && (b = b.baseVal), v._config.enableJSClass) {
                    var d = new RegExp("(^|\\s)" + c + "no-js(\\s|$)");
                    b = b.replace(d, "$1" + c + "js$2")
                }
                v._config.enableClasses && (b += " " + c + a.join(" " + c), y ? x.className.baseVal = b : x.className = b)
            }

            function g(a, b) {
                if ("object" == (void 0 === a ? "undefined" : d(a)))
                    for (var c in a) w(a, c) && g(c, a[c]);
                else {
                    var e = (a = a.toLowerCase()).split("."),
                        h = v[e[0]];
                    if (2 == e.length && (h = h[e[1]]), void 0 !== h) return v;
                    b = "function" == typeof b ? b() : b, 1 == e.length ? v[e[0]] = b : (!v[e[0]] || v[e[0]] instanceof Boolean || (v[e[0]] = new Boolean(v[e[0]])), v[e[0]][e[1]] = b), f([(b && 0 != b ? "" : "no-") + e.join("-")]), v._trigger(a, b)
                }
                return v
            }

            function h() {
                return "function" != typeof b.createElement ? b.createElement(arguments[0]) : y ? b.createElementNS.call(b, "http://www.w3.org/2000/svg", arguments[0]) : b.createElement.apply(b, arguments)
            }

            function i(a, c, d, e) {
                var f, g, i, j, k = "modernizr",
                    l = h("div"),
                    m = function() {
                        var a = b.body;
                        return a || ((a = h(y ? "svg" : "body")).fake = !0), a
                    }();
                if (parseInt(d, 10))
                    for (; d--;)(i = h("div")).id = e ? e[d] : k + (d + 1), l.appendChild(i);
                return (f = h("style")).type = "text/css", f.id = "s" + k, (m.fake ? m : l).appendChild(f), m.appendChild(l), f.styleSheet ? f.styleSheet.cssText = a : f.appendChild(b.createTextNode(a)), l.id = k, m.fake && (m.style.background = "", m.style.overflow = "hidden", j = x.style.overflow, x.style.overflow = "hidden", x.appendChild(m)), g = c(l, a), m.fake ? (m.parentNode.removeChild(m), x.style.overflow = j, x.offsetHeight) : l.parentNode.removeChild(l), !!g
            }

            function j(a, b) {
                return !!~("" + a).indexOf(b)
            }

            function k(a) {
                return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
                    return b + c.toUpperCase()
                }).replace(/^-/, "")
            }

            function l(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            }

            function m(a) {
                return a.replace(/([A-Z])/g, function(a, b) {
                    return "-" + b.toLowerCase()
                }).replace(/^ms-/, "-ms-")
            }

            function n(b, c, d) {
                var e;
                if ("getComputedStyle" in a) {
                    e = getComputedStyle.call(a, b, c);
                    var f = a.console;
                    null !== e ? d && (e = e.getPropertyValue(d)) : f && f[f.error ? "error" : "log"].call(f, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                } else e = !c && b.currentStyle && b.currentStyle[d];
                return e
            }

            function o(b, d) {
                var e = b.length;
                if ("CSS" in a && "supports" in a.CSS) {
                    for (; e--;)
                        if (a.CSS.supports(m(b[e]), d)) return !0;
                    return !1
                }
                if ("CSSSupportsRule" in a) {
                    for (var f = []; e--;) f.push("(" + m(b[e]) + ":" + d + ")");
                    return i("@supports (" + (f = f.join(" or ")) + ") { #modernizr { position: absolute; } }", function(a) {
                        return "absolute" == n(a, null, "position")
                    })
                }
                return c
            }

            function p(a, b, d, f) {
                function g() {
                    l && (delete I.style, delete I.modElem)
                }
                if (f = !e(f, "undefined") && f, !e(d, "undefined")) {
                    var i = o(a, d);
                    if (!e(i, "undefined")) return i
                }
                for (var l, m, n, p, q, r = ["modernizr", "tspan", "samp"]; !I.style && r.length;) l = !0, I.modElem = h(r.shift()), I.style = I.modElem.style;
                for (n = a.length, m = 0; n > m; m++)
                    if (p = a[m], q = I.style[p], j(p, "-") && (p = k(p)), I.style[p] !== c) {
                        if (f || e(d, "undefined")) return g(), "pfx" != b || p;
                        try {
                            I.style[p] = d
                        } catch (a) {}
                        if (I.style[p] != q) return g(), "pfx" != b || p
                    } return g(), !1
            }

            function q(a, b, c, d, f) {
                var g = a.charAt(0).toUpperCase() + a.slice(1),
                    h = (a + " " + F.join(g + " ") + g).split(" ");
                return e(b, "string") || e(b, "undefined") ? p(h, b, d, f) : function(a, b, c) {
                    var d;
                    for (var f in a)
                        if (a[f] in b) return !1 === c ? a[f] : e(d = b[a[f]], "function") ? l(d, c || b) : d;
                    return !1
                }(h = (a + " " + G.join(g + " ") + g).split(" "), b, c)
            }

            function r(a, b, d) {
                return q(a, c, c, b, d)
            }
            var s = [],
                t = [],
                u = {
                    _version: "3.6.0",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(a, b) {
                        var c = this;
                        setTimeout(function() {
                            b(c[a])
                        }, 0)
                    },
                    addTest: function(a, b, c) {
                        t.push({
                            name: a,
                            fn: b,
                            options: c
                        })
                    },
                    addAsyncTest: function(a) {
                        t.push({
                            name: null,
                            fn: a
                        })
                    }
                },
                v = function() {};
            v.prototype = u, (v = new v).addTest("svg", !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
            var w, x = b.documentElement,
                y = "svg" === x.nodeName.toLowerCase();
            ! function() {
                var a = {}.hasOwnProperty;
                w = e(a, "undefined") || e(a.call, "undefined") ? function(a, b) {
                    return b in a && e(a.constructor.prototype[b], "undefined")
                } : function(b, c) {
                    return a.call(b, c)
                }
            }(), u._l = {}, u.on = function(a, b) {
                this._l[a] || (this._l[a] = []), this._l[a].push(b), v.hasOwnProperty(a) && setTimeout(function() {
                    v._trigger(a, v[a])
                }, 0)
            }, u._trigger = function(a, b) {
                if (this._l[a]) {
                    var c = this._l[a];
                    setTimeout(function() {
                        var a;
                        for (a = 0; a < c.length; a++)(0, c[a])(b)
                    }, 0), delete this._l[a]
                }
            }, v._q.push(function() {
                u.addTest = g
            }), v.addTest("svgasimg", b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")), v.addTest("canvas", function() {
                var a = h("canvas");
                return !(!a.getContext || !a.getContext("2d"))
            }), v.addTest("video", function() {
                var a = h("video"),
                    b = !1;
                try {
                    (b = !!a.canPlayType) && ((b = new Boolean(b)).ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), b.vp9 = a.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), b.hls = a.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
                } catch (a) {}
                return b
            }), v.addTest("inlinesvg", function() {
                var a = h("div");
                return a.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && a.firstChild && a.firstChild.namespaceURI)
            });
            var z = u._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            u._prefixes = z;
            var A = "CSS" in a && "supports" in a.CSS,
                B = "supportsCSS" in a;
            v.addTest("supports", A || B);
            var C = function() {
                var b = a.matchMedia || a.msMatchMedia;
                return b ? function(a) {
                    var c = b(a);
                    return c && c.matches || !1
                } : function(b) {
                    var c = !1;
                    return i("@media " + b + " { #modernizr { position: absolute; } }", function(b) {
                        c = "absolute" == (a.getComputedStyle ? a.getComputedStyle(b, null) : b.currentStyle).position
                    }), c
                }
            }();
            u.mq = C;
            var D = u.testStyles = i;
            v.addTest("touchevents", function() {
                var c;
                if ("ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch) c = !0;
                else {
                    var d = ["@media (", z.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                    D(d, function(a) {
                        c = 9 === a.offsetTop
                    })
                }
                return c
            });
            var E = "Moz O ms Webkit",
                F = u._config.usePrefixes ? E.split(" ") : [];
            u._cssomPrefixes = F;
            var G = u._config.usePrefixes ? E.toLowerCase().split(" ") : [];
            u._domPrefixes = G;
            var H = {
                elem: h("modernizr")
            };
            v._q.push(function() {
                delete H.elem
            });
            var I = {
                style: H.elem.style
            };
            v._q.unshift(function() {
                delete I.style
            }), u.testAllProps = q, u.testAllProps = r, v.addTest("cssmask", r("maskRepeat", "repeat-x", !0)), v.addTest("csstransforms", function() {
                return -1 === navigator.userAgent.indexOf("Android 2.") && r("transform", "scale(1)", !0)
            }), v.addTest("csstransforms3d", function() {
                return !!r("perspective", "1px", !0)
            }), v.addTest("csstransitions", r("transition", "all", !0)),
                function() {
                    var a, b, c, d, f, g;
                    for (var h in t)
                        if (t.hasOwnProperty(h)) {
                            if (a = [], (b = t[h]).name && (a.push(b.name.toLowerCase()), b.options && b.options.aliases && b.options.aliases.length))
                                for (c = 0; c < b.options.aliases.length; c++) a.push(b.options.aliases[c].toLowerCase());
                            for (d = e(b.fn, "function") ? b.fn() : b.fn, f = 0; f < a.length; f++) 1 === (g = a[f].split(".")).length ? v[g[0]] = d : (!v[g[0]] || v[g[0]] instanceof Boolean || (v[g[0]] = new Boolean(v[g[0]])), v[g[0]][g[1]] = d), s.push((d ? "" : "no-") + g.join("-"))
                        }
                }(), f(s), delete u.addTest, delete u.addAsyncTest;
            for (var J = 0; J < v._q.length; J++) v._q[J]();
            a.Modernizr = v
        }(window, document)
    }, function(a, b, c) {
        "use strict";
        (function(d) {
            var e, f, g, h, i = void 0 !== a && a.exports && void 0 !== d ? d : window;
            (i._gsQueue || (i._gsQueue = [])).push(function() {
                i._gsDefine("easing.CustomEase", ["easing.Ease"], function(a) {
                    var b = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        c = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        d = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                        e = /[cLlsS]/g,
                        f = "CustomEase only accepts Cubic Bezier data.",
                        g = function a(b, c, d, e, f, g, h, i, j, k, l) {
                            var m, n = (b + d) / 2,
                                o = (c + e) / 2,
                                p = (d + f) / 2,
                                q = (e + g) / 2,
                                r = (f + h) / 2,
                                s = (g + i) / 2,
                                t = (n + p) / 2,
                                u = (o + q) / 2,
                                v = (p + r) / 2,
                                w = (q + s) / 2,
                                x = (t + v) / 2,
                                y = (u + w) / 2,
                                z = h - b,
                                A = i - c,
                                B = Math.abs((d - h) * A - (e - i) * z),
                                C = Math.abs((f - h) * A - (g - i) * z);
                            return k || (k = [{
                                x: b,
                                y: c
                            }, {
                                x: h,
                                y: i
                            }], l = 1), k.splice(l || k.length - 1, 0, {
                                x: x,
                                y: y
                            }), (B + C) * (B + C) > j * (z * z + A * A) && (m = k.length, a(b, c, n, o, t, u, x, y, j, k, l), a(x, y, v, w, r, s, h, i, j, k, l + 1 + (k.length - m))), k
                        },
                        h = function(a) {
                            var b = this.lookup[a * this.l | 0] || this.lookup[this.l - 1];
                            return b.nx < a && (b = b.n), b.y + (a - b.x) / b.cx * b.cy
                        },
                        i = function(b, c, d) {
                            this._calcEnd = !0, this.id = b, b && (a.map[b] = this), this.getRatio = h, this.setData(c, d)
                        },
                        j = i.prototype = new a;
                    return j.constructor = i, j.setData = function(a, h) {
                        var i, j, k, l, m, n, o, p, q, r, s = (a = a || "0,0,1,1").match(b),
                            t = 1,
                            u = [];
                        if (r = (h = h || {}).precision || 1, this.data = a, this.lookup = [], this.points = u, this.fast = r <= 1, (e.test(a) || -1 !== a.indexOf("M") && -1 === a.indexOf("C")) && (s = function(a) {
                            var b, e, g, h, i, j, k, l, m, n, o, p = (a + "").replace(d, function(a) {
                                    var b = +a;
                                    return b < 1e-4 && b > -1e-4 ? 0 : b
                                }).match(c) || [],
                                q = [],
                                r = 0,
                                s = 0,
                                t = p.length,
                                u = 2;
                            for (b = 0; b < t; b++)
                                if (m = h, isNaN(p[b]) ? i = (h = p[b].toUpperCase()) !== p[b] : b--, e = +p[b + 1], g = +p[b + 2], i && (e += r, g += s), b || (k = e, l = g), "M" === h) j && j.length < 8 && (q.length -= 1, u = 0), r = k = e, s = l = g, j = [e, g], u = 2, q.push(j), b += 2, h = "L";
                                else if ("C" === h) j || (j = [0, 0]), j[u++] = e, j[u++] = g, i || (r = s = 0), j[u++] = r + 1 * p[b + 3], j[u++] = s + 1 * p[b + 4], j[u++] = r += 1 * p[b + 5], j[u++] = s += 1 * p[b + 6], b += 6;
                                else if ("S" === h) "C" === m || "S" === m ? (n = r - j[u - 4], o = s - j[u - 3], j[u++] = r + n, j[u++] = s + o) : (j[u++] = r, j[u++] = s), j[u++] = e, j[u++] = g, i || (r = s = 0), j[u++] = r += 1 * p[b + 3], j[u++] = s += 1 * p[b + 4], b += 4;
                                else {
                                    if ("L" !== h && "Z" !== h) throw f;
                                    "Z" === h && (e = k, g = l, j.closed = !0), ("L" === h || Math.abs(r - e) > .5 || Math.abs(s - g) > .5) && (j[u++] = r + (e - r) / 3, j[u++] = s + (g - s) / 3, j[u++] = r + 2 * (e - r) / 3, j[u++] = s + 2 * (g - s) / 3, j[u++] = e, j[u++] = g, "L" === h && (b += 2)), r = e, s = g
                                }
                            return q[0]
                        }(a)), 4 === (i = s.length)) s.unshift(0, 0), s.push(1, 1), i = 8;
                        else if ((i - 2) % 6) throw f;
                        for (0 == +s[0] && 1 == +s[i - 2] || function(a, b, c) {
                            c || 0 === c || (c = Math.max(+a[a.length - 1], +a[1]));
                            var d, e = -1 * +a[0],
                                f = -c,
                                g = a.length,
                                h = 1 / (+a[g - 2] + e),
                                i = -b || (Math.abs(+a[g - 1] - +a[1]) < .01 * (+a[g - 2] - +a[0]) ? function(a) {
                                    var b, c = a.length,
                                        d = 999999999999;
                                    for (b = 1; b < c; b += 6) + a[b] < d && (d = +a[b]);
                                    return d
                                }(a) + f : +a[g - 1] + f);
                            for (i = i ? 1 / i : -h, d = 0; d < g; d += 2) a[d] = (+a[d] + e) * h, a[d + 1] = (+a[d + 1] + f) * i
                        }(s, h.height, h.originY), this.rawBezier = s, l = 2; l < i; l += 6) j = {
                            x: +s[l - 2],
                            y: +s[l - 1]
                        }, k = {
                            x: +s[l + 4],
                            y: +s[l + 5]
                        }, u.push(j, k), g(j.x, j.y, +s[l], +s[l + 1], +s[l + 2], +s[l + 3], k.x, k.y, 1 / (2e5 * r), u, u.length - 1);
                        for (i = u.length, l = 0; l < i; l++) o = u[l], p = u[l - 1] || o, o.x > p.x || p.y !== o.y && p.x === o.x || o === p ? (p.cx = o.x - p.x, p.cy = o.y - p.y, p.n = o, p.nx = o.x, this.fast && l > 1 && Math.abs(p.cy / p.cx - u[l - 2].cy / u[l - 2].cx) > 2 && (this.fast = !1), p.cx < t && (p.cx ? t = p.cx : (p.cx = .001, l === i - 1 && (p.x -= .001, t = Math.min(t, .001), this.fast = !1)))) : (u.splice(l--, 1), i--);
                        if (i = 1 / t + 1 | 0, this.l = i, m = 1 / i, n = 0, o = u[0], this.fast) {
                            for (l = 0; l < i; l++) q = l * m, o.nx < q && (o = u[++n]), j = o.y + (q - o.x) / o.cx * o.cy, this.lookup[l] = {
                                x: q,
                                cx: m,
                                y: j,
                                cy: 0,
                                nx: 9
                            }, l && (this.lookup[l - 1].cy = j - this.lookup[l - 1].y);
                            this.lookup[i - 1].cy = u[u.length - 1].y - j
                        } else {
                            for (l = 0; l < i; l++) o.nx < l * m && (o = u[++n]), this.lookup[l] = o;
                            n < u.length - 1 && (this.lookup[l - 1] = u[u.length - 2])
                        }
                        return this._calcEnd = 1 !== u[u.length - 1].y || 0 !== u[0].y, this
                    }, j.getRatio = h, j.getSVGData = function(a) {
                        return i.getSVGData(this, a)
                    }, i.create = function(a, b, c) {
                        return new i(a, b, c)
                    }, i.version = "0.2.1", i.bezierToPoints = g, i.get = function(b) {
                        return a.map[b]
                    }, i.getSVGData = function(b, c) {
                        var d, e, f, g, h, i, j, k, l, m, n = (c = c || {}).width || 100,
                            o = c.height || 100,
                            p = c.x || 0,
                            q = (c.y || 0) + o,
                            r = c.path;
                        if (c.invert && (o = -o, q = 0), (b = b.getRatio ? b : a.map[b] || void 0).rawBezier) {
                            for (d = [], j = b.rawBezier.length, f = 0; f < j; f += 2) d.push((1e3 * (p + b.rawBezier[f] * n) | 0) / 1e3 + "," + (1e3 * (q + b.rawBezier[f + 1] * -o) | 0) / 1e3);
                            d[0] = "M" + d[0], d[1] = "C" + d[1]
                        } else
                            for (d = ["M" + p + "," + q], g = 1 / (j = Math.max(5, 200 * (c.precision || 1))), k = 5 / (j += 2), l = (1e3 * (p + g * n) | 0) / 1e3, e = ((m = (1e3 * (q + b.getRatio(g) * -o) | 0) / 1e3) - q) / (l - p), f = 2; f < j; f++) h = (1e3 * (p + f * g * n) | 0) / 1e3, i = (1e3 * (q + b.getRatio(f * g) * -o) | 0) / 1e3, (Math.abs((i - m) / (h - l) - e) > k || f === j - 1) && (d.push(l + "," + m), e = (i - m) / (h - l)), l = h, m = i;
                        return r && ("string" == typeof r ? document.querySelector(r) : r).setAttribute("d", d.join(" ")), d.join(" ")
                    }, i
                }, !0)
            }), i._gsDefine && i._gsQueue.pop()(), h = function() {
                return (i.GreenSockGlobals || i).CustomEase
            }, void 0 !== a && a.exports ? (c(5), a.exports = h()) : (f = [c(5)], void 0 === (g = "function" == typeof(e = h) ? e.apply(b, f) : e) || (a.exports = g))
        }).call(this, c(2))
    }, function(a, b, c) {
        "use strict";
        a.exports = function(a) {
            return a.webpackPolyfill || (a.deprecate = function() {}, a.paths = [], a.children || (a.children = []), Object.defineProperty(a, "loaded", {
                enumerable: !0,
                get: function() {
                    return a.l
                }
            }), Object.defineProperty(a, "id", {
                enumerable: !0,
                get: function() {
                    return a.i
                }
            }), a.webpackPolyfill = 1), a
        }
    }, function(a, b, c) {
        "use strict";
        (function(a) {
            var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            };
            ! function(c, d) {
                var e = function(a, b) {
                    if (b.getElementsByClassName) {
                        var c, d, e, f, g, h, i, j, k, l = b.documentElement,
                            m = a.Date,
                            n = a.HTMLPictureElement,
                            o = a.addEventListener,
                            p = a.setTimeout,
                            q = a.requestAnimationFrame || p,
                            r = a.requestIdleCallback,
                            s = /^picture$/i,
                            t = ["load", "error", "lazyincluded", "_lazyloaded"],
                            u = {},
                            v = Array.prototype.forEach,
                            w = function(a, b) {
                                return u[b] || (u[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), u[b].test(a.getAttribute("class") || "") && u[b]
                            },
                            x = function(a, b) {
                                w(a, b) || a.setAttribute("class", (a.getAttribute("class") || "").trim() + " " + b)
                            },
                            y = function(a, b) {
                                var c;
                                (c = w(a, b)) && a.setAttribute("class", (a.getAttribute("class") || "").replace(c, " "))
                            },
                            z = function a(b, c, d) {
                                var e = d ? "addEventListener" : "removeEventListener";
                                d && a(b, c), t.forEach(function(a) {
                                    b[e](a, c)
                                })
                            },
                            A = function(a, d, e, f, g) {
                                var h = b.createEvent("CustomEvent");
                                return e || (e = {}), e.instance = c, h.initCustomEvent(d, !f, !g, e), a.dispatchEvent(h), h
                            },
                            B = function(b, c) {
                                var e;
                                !n && (e = a.picturefill || d.pf) ? e({
                                    reevaluate: !0,
                                    elements: [b]
                                }) : c && c.src && (b.src = c.src)
                            },
                            C = function(a, b) {
                                return (getComputedStyle(a, null) || {})[b]
                            },
                            D = function(a, b, c) {
                                for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) c = b.offsetWidth, b = b.parentNode;
                                return c
                            },
                            E = (g = [], h = [], i = g, j = function() {
                                var a = i;
                                for (i = g.length ? h : g, e = !0, f = !1; a.length;) a.shift()();
                                e = !1
                            }, k = function(a, c) {
                                e && !c ? a.apply(this, arguments) : (i.push(a), f || (f = !0, (b.hidden ? p : q)(j)))
                            }, k._lsFlush = j, k),
                            F = function(a, b) {
                                return b ? function() {
                                    E(a)
                                } : function() {
                                    var b = this,
                                        c = arguments;
                                    E(function() {
                                        a.apply(b, c)
                                    })
                                }
                            },
                            G = function(a) {
                                var b, c, d = function() {
                                        b = null, a()
                                    },
                                    e = function a() {
                                        var b = m.now() - c;
                                        b < 99 ? p(a, 99 - b) : (r || d)(d)
                                    };
                                return function() {
                                    c = m.now(), b || (b = p(e, 99))
                                }
                            };
                        ! function() {
                            var b, c = {
                                lazyClass: "lazyload",
                                loadedClass: "lazyloaded",
                                loadingClass: "lazyloading",
                                preloadClass: "lazypreload",
                                errorClass: "lazyerror",
                                autosizesClass: "lazyautosizes",
                                srcAttr: "data-src",
                                srcsetAttr: "data-srcset",
                                sizesAttr: "data-sizes",
                                minSize: 40,
                                customMedia: {},
                                init: !0,
                                expFactor: 1.5,
                                hFac: .8,
                                loadMode: 2,
                                loadHidden: !0,
                                ricTimeout: 0,
                                throttleDelay: 125
                            };
                            for (b in d = a.lazySizesConfig || a.lazysizesConfig || {}, c) b in d || (d[b] = c[b]);
                            a.lazySizesConfig = d, p(function() {
                                d.init && N()
                            })
                        }();
                        var H, I, J, K, L = function() {
                                var e, f, g, h, i, j, k, n, q, t, u, D, H, I, J, K, L, N, O, P, Q, R = /^img$/i,
                                    S = /^iframe$/i,
                                    T = "onscroll" in a && !/glebot/.test(navigator.userAgent),
                                    U = 0,
                                    V = 0,
                                    W = -1,
                                    X = function a(b) {
                                        V--, b && b.target && z(b.target, a), (!b || V < 0 || !b.target) && (V = 0)
                                    },
                                    Y = function(a, c) {
                                        var d, e = a,
                                            f = "hidden" == C(b.body, "visibility") || "hidden" != C(a, "visibility");
                                        for (n -= c, u += c, q -= c, t += c; f && (e = e.offsetParent) && e != b.body && e != l;)(f = (C(e, "opacity") || 1) > 0) && "visible" != C(e, "overflow") && (d = e.getBoundingClientRect(), f = t > d.left && q < d.right && u > d.top - 1 && n < d.bottom + 1);
                                        return f
                                    },
                                    Z = function() {
                                        var a, g, i, m, o, p, r, s, v, w = c.elements;
                                        if ((h = d.loadMode) && V < 8 && (a = w.length)) {
                                            g = 0, W++, null == H && ("expand" in d || (d.expand = l.clientHeight > 500 && l.clientWidth > 500 ? 500 : 370), D = d.expand, H = D * d.expFactor), U < H && V < 1 && W > 2 && h > 2 && !b.hidden ? (U = H, W = 0) : U = h > 1 && W > 1 && V < 6 ? D : 0;
                                            for (; g < a; g++)
                                                if (w[g] && !w[g]._lazyRace)
                                                    if (T)
                                                        if ((s = w[g].getAttribute("data-expand")) && (p = 1 * s) || (p = U), v !== p && (j = innerWidth + p * I, k = innerHeight + p, r = -1 * p, v = p), i = w[g].getBoundingClientRect(), (u = i.bottom) >= r && (n = i.top) <= k && (t = i.right) >= r * I && (q = i.left) <= j && (u || t || q || n) && (d.loadHidden || "hidden" != C(w[g], "visibility")) && (f && V < 3 && !s && (h < 3 || W < 4) || Y(w[g], p))) {
                                                            if (ea(w[g]), o = !0, V > 9) break
                                                        } else !o && f && !m && V < 4 && W < 4 && h > 2 && (e[0] || d.preloadAfterLoad) && (e[0] || !s && (u || t || q || n || "auto" != w[g].getAttribute(d.sizesAttr))) && (m = e[0] || w[g]);
                                                    else ea(w[g]);
                                            m && !o && ea(m)
                                        }
                                    },
                                    $ = (J = Z, L = 0, N = d.throttleDelay, O = d.ricTimeout, P = function() {
                                        K = !1, L = m.now(), J()
                                    }, Q = r && O > 49 ? function() {
                                        r(P, {
                                            timeout: O
                                        }), O !== d.ricTimeout && (O = d.ricTimeout)
                                    } : F(function() {
                                        p(P)
                                    }, !0), function(a) {
                                        var b;
                                        (a = !0 === a) && (O = 33), K || (K = !0, (b = N - (m.now() - L)) < 0 && (b = 0), a || b < 9 ? Q() : p(Q, b))
                                    }),
                                    _ = function(a) {
                                        x(a.target, d.loadedClass), y(a.target, d.loadingClass), z(a.target, ba), A(a.target, "lazyloaded")
                                    },
                                    aa = F(_),
                                    ba = function(a) {
                                        aa({
                                            target: a.target
                                        })
                                    },
                                    ca = function(a) {
                                        var b, c = a.getAttribute(d.srcsetAttr);
                                        (b = d.customMedia[a.getAttribute("data-media") || a.getAttribute("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c)
                                    },
                                    da = F(function(a, b, c, e, f) {
                                        var h, i, j, k, l, m;
                                        (l = A(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? x(a, d.autosizesClass) : a.setAttribute("sizes", e)), i = a.getAttribute(d.srcsetAttr), h = a.getAttribute(d.srcAttr), f && (j = a.parentNode, k = j && s.test(j.nodeName || "")), m = b.firesLoad || "src" in a && (i || h || k), l = {
                                            target: a
                                        }, m && (z(a, X, !0), clearTimeout(g), g = p(X, 2500), x(a, d.loadingClass), z(a, ba, !0)), k && v.call(j.getElementsByTagName("source"), ca), i ? a.setAttribute("srcset", i) : h && !k && (S.test(a.nodeName) ? function(a, b) {
                                            try {
                                                a.contentWindow.location.replace(b)
                                            } catch (c) {
                                                a.src = b
                                            }
                                        }(a, h) : a.src = h), f && (i || k) && B(a, {
                                            src: h
                                        })), a._lazyRace && delete a._lazyRace, y(a, d.lazyClass), E(function() {
                                            (!m || a.complete && a.naturalWidth > 1) && (m ? X(l) : V--, _(l))
                                        }, !0)
                                    }),
                                    ea = function(a) {
                                        var b, c = R.test(a.nodeName),
                                            e = c && (a.getAttribute(d.sizesAttr) || a.getAttribute("sizes")),
                                            g = "auto" == e;
                                        (!g && f || !c || !a.getAttribute("src") && !a.srcset || a.complete || w(a, d.errorClass) || !w(a, d.lazyClass)) && (b = A(a, "lazyunveilread").detail, g && M.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, V++, da(a, b, g, e, c))
                                    },
                                    fa = function a() {
                                        if (!f)
                                            if (m.now() - i < 999) p(a, 999);
                                            else {
                                                var b = G(function() {
                                                    d.loadMode = 3, $()
                                                });
                                                f = !0, d.loadMode = 3, $(), o("scroll", function() {
                                                    3 == d.loadMode && (d.loadMode = 2), b()
                                                }, !0)
                                            }
                                    };
                                return {
                                    _: function() {
                                        i = m.now(), c.elements = b.getElementsByClassName(d.lazyClass), e = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), I = d.hFac, o("scroll", $, !0), o("resize", $, !0), a.MutationObserver ? new MutationObserver($).observe(l, {
                                            childList: !0,
                                            subtree: !0,
                                            attributes: !0
                                        }) : (l.addEventListener("DOMNodeInserted", $, !0), l.addEventListener("DOMAttrModified", $, !0), setInterval($, 999)), o("hashchange", $, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(a) {
                                            b.addEventListener(a, $, !0)
                                        }), /d$|^c/.test(b.readyState) ? fa() : (o("load", fa), b.addEventListener("DOMContentLoaded", $), p(fa, 2e4)), c.elements.length ? (Z(), E._lsFlush()) : $()
                                    },
                                    checkElems: $,
                                    unveil: ea
                                }
                            }(),
                            M = (I = F(function(a, b, c, d) {
                                var e, f, g;
                                if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), s.test(b.nodeName || ""))
                                    for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++) e[f].setAttribute("sizes", d);
                                c.detail.dataAttr || B(a, c.detail)
                            }), J = function(a, b, c) {
                                var d, e = a.parentNode;
                                e && (c = D(a, e, c), (d = A(a, "lazybeforesizes", {
                                    width: c,
                                    dataAttr: !!b
                                })).defaultPrevented || (c = d.detail.width) && c !== a._lazysizesWidth && I(a, e, d, c))
                            }, K = G(function() {
                                var a, b = H.length;
                                if (b)
                                    for (a = 0; a < b; a++) J(H[a])
                            }), {
                                _: function() {
                                    H = b.getElementsByClassName(d.autosizesClass), o("resize", K)
                                },
                                checkElems: K,
                                updateElem: J
                            }),
                            N = function a() {
                                a.i || (a.i = !0, M._(), L._())
                            };
                        return c = {
                            cfg: d,
                            autoSizer: M,
                            loader: L,
                            init: N,
                            uP: B,
                            aC: x,
                            rC: y,
                            hC: w,
                            fire: A,
                            gW: D,
                            rAF: E
                        }
                    }
                }(c, c.document);
                c.lazySizes = e, "object" == b(a) && a.exports && (a.exports = e)
            }(window)
        }).call(this, c(22)(a))
    }, function(a, b) {}, function(a, b, c) {
        "use strict";
        (function(a) {
            function b(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }
            b(c(24)), c(23), c(21), c(20), c(19), c(18);
            var d = b(c(17)),
                e = b(c(13));
            c(12), a(function() {
                function b() {
                    var b = a(window).width(),
                        c = 100 * b / (b <= 1080 ? 1080 : 2560);
                    a("html").css({
                        fontSize: c / parseFloat(defaultSize) * 100 + "%"
                    })
                }
                window.navigator.userAgent, b(),
                    function() {
                        var b = a(window).width();
                        if (a("#product-nav").length > 0 && (a("#product-nav .nav-arrow").on("click", function() {
                            a("#product-nav").hasClass("openNav") ? a("#product-nav").removeClass("openNav") : a("#product-nav").addClass("openNav")
                        }), a("#product-specs .specs-group").each(function(b, c) {
                            a(this).find(".specs-group-item").length || a(this).hide()
                        })), a("#product-medias").length > 0) {
                            var c = a("#product-medias .swiper-pagination"),
                                d = a("#product-medias .swiper-container .swiper-slide").length,
                                e = new Swiper("#product-medias .swiper-container", {
                                    pagination: ".swiper-pagination",
                                    paginationClickable: !0,
                                    slidesPerView: b <= 1080 ? 1 : d < 4 ? d : 4,
                                    spaceBetween: b <= 1080 ? 0 : 40,
                                    speed: 2500,
                                    loop: !0,
                                    autoplay: 2500,
                                    observer: !0,
                                    observeParents: !0,
                                    autoplayDisableOnInteraction: !1,
                                    onSlideChangeStart: function(a) {
                                        c.find(".pagination-item").eq(a.realIndex).addClass("active").siblings().removeClass("active")
                                    },
                                    paginationBulletRender: function(a, b, c) {
                                        return '<li class="pagination-item" data-index=' + b + '>\n                        <a href="#' + b + '">\n                            <b></b>\n                            <i>\n                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"preserveAspectRatio="none"><circle cx="7" cy="7" r="6"/></svg>\n                            </i>\n                        </a>\n                        </li>'
                                    },
                                    onAutoplayStart: function(a) {
                                        setTimeout(function(b) {
                                            return c.find(".pagination-item").eq(a.realIndex).addClass("active")
                                        }, 100)
                                    },
                                    onAfterResize: function(a) {
                                        setTimeout(function(b) {
                                            return c.find(".pagination-item").eq(a.realIndex).addClass("active")
                                        })
                                    }
                                });
                            a("#product-medias").on("click", ".pagination-item", function() {
                                e.slideTo(a(this).data("index"))
                            })
                        }
                    }(), new d.default, new e.default, a(window).resize(function() {
                    b()
                }), a(window).on("scroll", function() {
                    ! function() {
                        a("#oc-container");
                        var b = a("#oc-header").height();
                        a(document).scrollTop() >= b ? a("#product-nav").addClass("fixed") : a("#product-nav").removeClass("fixed")
                    }()
                }), a("#subscribeform").length > 0 && a("#subscribeform").on("submit", function(b) {
                    return a(".of-service .msg").html(""), a(".of-service input").val() ? (a.ajax({
                        headers: {
                            "X-XSRF-TOKEN": getCookie("XSRF-TOKEN")
                        },
                        type: "POST",
                        url: "/" + siteCode + "/newsletter/subscribe/",
                        timeout: 8e3,
                        data: a("#subscribeform").serializeArray()
                    }).done(function(b) {
                        (b = JSON.parse(b)).result ? (a(".of-service input").val(""), a(".of-service .msg").removeClass("error").html(b.msg)) : a(".of-service .msg").addClass("error").html(b.msg)
                    }).fail(function() {
                        a(".of-service .msg").addClass("error").html("system error")
                    }), !1) : (a(".of-service input").addClass("warning"), !1)
                })
            })
        }).call(this, c(0))
    }]);