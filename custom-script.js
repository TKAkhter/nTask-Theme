$ = window.jQuery;
// $(document).on("click", 'a[href^="#"]', function (event) {
// 	event.preventDefault();

// 	$("html, body").animate(
// 		{
// 			scrollTop: $($.attr(this, "href")).offset().top,
// 		},
// 		500
// 	);
// });
/*! Conditionizr v4.3.0 | (c) 2014 @toddmotto, @markgdyr | MIT license | conditionizr.com */
!function(a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b : a.conditionizr = b()
}(this, function() {
    "use strict";
    var a, b = {}, c = document.head || document.getElementsByTagName("head")[0], d = function(b, d, e) {
        var f = e ? b : a + b + ("style" === d ? ".css" : ".js");
        switch (d) {
        case "script":
            var g = document.createElement("script");
            g.src = f,
            c.appendChild(g);
            break;
        case "style":
            var h = document.createElement("link");
            h.href = f,
            h.rel = "stylesheet",
            c.appendChild(h);
            break;
        case "class":
            document.documentElement.className += " " + b
        }
    };
    return b.config = function(c) {
        var e = c || {}
          , f = e.tests;
        a = e.assets || "";
        for (var g in f) {
            var h = g.toLowerCase();
            if (b[h])
                for (var i = f[g], j = i.length; j--; )
                    d(h, i[j])
        }
    }
    ,
    b.add = function(a, c, e) {
        var f = a.toLowerCase();
        if (b[f] = e(),
        b[f])
            for (var g = c.length; g--; )
                d(f, c[g])
    }
    ,
    b.on = function(a, c) {
        var d = /^\!/;
        (b[a.toLowerCase()] || d.test(a) && !b[a.replace(d, "")]) && c()
    }
    ,
    b.load = b.polyfill = function(a, c) {
        for (var e = /\.js$/.test(a) ? "script" : "style", f = c.length; f--; )
            b[c[f].toLowerCase()] && d(a, e, !0)
    }
    ,
    b
});
window.Modernizr = function(a, b, c) {
    function C(a) {
        j.cssText = a
    }
    function D(a, b) {
        return C(n.join(a + ";") + (b || ""))
    }
    function E(a, b) {
        return typeof a === b
    }
    function F(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function G(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!F(e, "-") && j[e] !== c)
                return "pfx" == b ? e : !0
        }
        return !1
    }
    function H(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function I(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , e = (a + " " + p.join(d + " ") + d).split(" ");
        return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "),
        H(e, b, c))
    }
    function J() {
        e.input = function(c) {
            for (var d = 0, e = c.length; e > d; d++)
                u[c[d]] = !!(c[d]in k);
            return u.list && (u.list = !(!b.createElement("datalist") || !a.HTMLDataListElement)),
            u
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        e.inputtypes = function(a) {
            for (var e, f, h, d = 0, i = a.length; i > d; d++)
                k.setAttribute("type", f = a[d]),
                e = "text" !== k.type,
                e && (k.value = l,
                k.style.cssText = "position:absolute;visibility:hidden;",
                /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k),
                h = b.defaultView,
                e = h.getComputedStyle && "textfield" !== h.getComputedStyle(k, null).WebkitAppearance && 0 !== k.offsetHeight,
                g.removeChild(k)) : /^(search|tel)$/.test(f) || (e = /^(url|email)$/.test(f) ? k.checkValidity && k.checkValidity() === !1 : k.value != l)),
                t[a[d]] = !!e;
            return t
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var x, B, d = "2.7.1", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {
        svg: "http://www.w3.org/2000/svg"
    }, s = {}, t = {}, u = {}, v = [], w = v.slice, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            for (; d--; )
                j = b.createElement("div"),
                j.id = e ? e[d] : h + (d + 1),
                l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l : n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "",
        n.style.overflow = "hidden",
        k = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n),
        g.style.overflow = k),
        !!i
    }, z = function() {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"),
            d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")),
            e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""),
            f = E(e[d], "function"),
            E(e[d], "undefined") || (e[d] = c),
            e.removeAttribute(d))),
            e = null,
            f
        }
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return d
    }(), A = {}.hasOwnProperty;
    B = E(A, "undefined") || E(A.call, "undefined") ? function(a, b) {
        return b in a && E(a.constructor.prototype[b], "undefined")
    }
    : function(a, b) {
        return A.call(a, b)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b)
            throw new TypeError;
        var c = w.call(arguments, 1)
          , d = function() {
            if (this instanceof d) {
                var e = function() {};
                e.prototype = b.prototype;
                var f = new e
                  , g = b.apply(f, c.concat(w.call(arguments)));
                return Object(g) === g ? g : f
            }
            return b.apply(a, c.concat(w.call(arguments)))
        };
        return d
    }
    ),
    s.flexbox = function() {
        return I("flexWrap")
    }
    ,
    s.canvas = function() {
        var a = b.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }
    ,
    s.canvastext = function() {
        return !(!e.canvas || !E(b.createElement("canvas").getContext("2d").fillText, "function"))
    }
    ,
    s.webgl = function() {
        return !!a.WebGLRenderingContext
    }
    ,
    s.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = 9 === a.offsetTop
        }),
        c
    }
    ,
    s.geolocation = function() {
        return "geolocation"in navigator
    }
    ,
    s.postmessage = function() {
        return !!a.postMessage
    }
    ,
    s.websqldatabase = function() {
        return !!a.openDatabase
    }
    ,
    s.indexedDB = function() {
        return !!I("indexedDB", a)
    }
    ,
    s.hashchange = function() {
        return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }
    ,
    s.history = function() {
        return !(!a.history || !history.pushState)
    }
    ,
    s.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable"in a || "ondragstart"in a && "ondrop"in a
    }
    ,
    s.websockets = function() {
        return "WebSocket"in a || "MozWebSocket"in a
    }
    ,
    s.rgba = function() {
        return C("background-color:rgba(150,255,150,.5)"),
        F(j.backgroundColor, "rgba")
    }
    ,
    s.hsla = function() {
        return C("background-color:hsla(120,40%,100%,.5)"),
        F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
    }
    ,
    s.multiplebgs = function() {
        return C("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(j.background)
    }
    ,
    s.backgroundsize = function() {
        return I("backgroundSize")
    }
    ,
    s.borderimage = function() {
        return I("borderImage")
    }
    ,
    s.borderradius = function() {
        return I("borderRadius")
    }
    ,
    s.boxshadow = function() {
        return I("boxShadow")
    }
    ,
    s.textshadow = function() {
        return "" === b.createElement("div").style.textShadow
    }
    ,
    s.opacity = function() {
        return D("opacity:.55"),
        /^0.55$/.test(j.opacity)
    }
    ,
    s.cssanimations = function() {
        return I("animationName")
    }
    ,
    s.csscolumns = function() {
        return I("columnCount")
    }
    ,
    s.cssgradients = function() {
        var a = "background-image:"
          , b = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , c = "linear-gradient(left top,#9f9, white);";
        return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)),
        F(j.backgroundImage, "gradient")
    }
    ,
    s.cssreflections = function() {
        return I("boxReflect")
    }
    ,
    s.csstransforms = function() {
        return !!I("transform")
    }
    ,
    s.csstransforms3d = function() {
        var a = !!I("perspective");
        return a && "webkitPerspective"in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }),
        a
    }
    ,
    s.csstransitions = function() {
        return I("transition")
    }
    ,
    s.fontface = function() {
        var a;
        return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr")
              , f = e.sheet || e.styleSheet
              , g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
        }),
        a
    }
    ,
    s.generatedcontent = function() {
        var a;
        return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }),
        a
    }
    ,
    s.video = function() {
        var a = b.createElement("video")
          , c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c),
            c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (d) {}
        return c
    }
    ,
    s.audio = function() {
        var a = b.createElement("audio")
          , c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c),
            c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (d) {}
        return c
    }
    ,
    s.localstorage = function() {
        try {
            return localStorage.setItem(h, h),
            localStorage.removeItem(h),
            !0
        } catch (a) {
            return !1
        }
    }
    ,
    s.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h),
            sessionStorage.removeItem(h),
            !0
        } catch (a) {
            return !1
        }
    }
    ,
    s.webworkers = function() {
        return !!a.Worker
    }
    ,
    s.applicationcache = function() {
        return !!a.applicationCache
    }
    ,
    s.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
    }
    ,
    s.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>",
        (a.firstChild && a.firstChild.namespaceURI) == r.svg
    }
    ,
    s.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    }
    ,
    s.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    }
    ;
    for (var K in s)
        B(s, K) && (x = K.toLowerCase(),
        e[x] = s[K](),
        v.push((e[x] ? "" : "no-") + x));
    return e.input || J(),
    e.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var d in a)
                B(a, d) && e.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(),
            e[a] !== c)
                return e;
            b = "function" == typeof b ? b() : b,
            "undefined" != typeof f && f && (g.className += " " + (b ? "" : "no-") + a),
            e[a] = b
        }
        return e
    }
    ,
    C(""),
    i = k = null,
    function(a, b) {
        function l(a, b) {
            var c = a.createElement("p")
              , d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function m() {
            var a = s.elements;
            return "string" == typeof a ? a.split(" ") : a
        }
        function n(a) {
            var b = j[a[h]];
            return b || (b = {},
            i++,
            a[h] = i,
            j[i] = b),
            b
        }
        function o(a, c, d) {
            if (c || (c = b),
            k)
                return c.createElement(a);
            d || (d = n(c));
            var g;
            return g = d.cache[a] ? d.cache[a].cloneNode() : f.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a),
            !g.canHaveChildren || e.test(a) || g.tagUrn ? g : d.frag.appendChild(g)
        }
        function p(a, c) {
            if (a || (a = b),
            k)
                return a.createDocumentFragment();
            c = c || n(a);
            for (var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length; g > e; e++)
                d.createElement(f[e]);
            return d
        }
        function q(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement,
            b.createFrag = a.createDocumentFragment,
            b.frag = b.createFrag()),
            a.createElement = function(c) {
                return s.shivMethods ? o(c, a, b) : b.createElem(c)
            }
            ,
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }
        function r(a) {
            a || (a = b);
            var c = n(a);
            return !s.shivCSS || g || c.hasCSS || (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            k || q(a, c),
            a
        }
        var g, k, c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h = "_html5shiv", i = 0, j = {};
        !function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                g = "hidden"in a,
                k = 1 == a.childNodes.length || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                }()
            } catch (c) {
                g = !0,
                k = !0
            }
        }();
        var s = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: c,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: r,
            createElement: o,
            createDocumentFragment: p
        };
        a.html5 = s,
        r(b)
    }(this, b),
    e._version = d,
    e._prefixes = n,
    e._domPrefixes = q,
    e._cssomPrefixes = p,
    e.hasEvent = z,
    e.testProp = function(a) {
        return G([a])
    }
    ,
    e.testAllProps = I,
    e.testStyles = y,
    e.prefixed = function(a, b, c) {
        return b ? I(a, b, c) : I(a, "pfx")
    }
    ,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""),
    e
}(this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(),
        h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1,
            !q && h(),
            l.onload = l.onreadystatechange = null,
            b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout
          , l = b.createElement(a)
          , o = 0
          , r = 0
          , u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1,
        y[c] = []),
        "object" == a ? l.data = c : (l.src = c,
        l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }
        ,
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n),
        m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a),
        1 == p.length && h()),
        this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var A, B, l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
    }
    , x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    };
    B = function(a) {
        function b(a) {
            var e, f, g, a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            };
            for (f = 0; d > f; f++)
                g = a[f].split("="),
                (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; b > f; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a)
              , j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1,
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout),
            (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a),
                            l()
                        }
                        ),
                        g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var c, b = 0;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                            return b
                        }(),
                        a)
                            a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a),
                                l()
                            }
                            : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b),
                                    l()
                                }
                            }(k[n])),
                            g(a[n], j, b, n, h))
                } else
                    !c && l()
            }
            var m, n, h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f;
            c(h ? a.yep : a.nope, !!i),
            i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i],
                e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }
    ,
    B.addPrefix = function(a, b) {
        z[a] = b
    }
    ,
    B.addFilter = function(a) {
        x.push(a)
    }
    ,
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading",
    b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    }
    , 0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var l, o, k = b.createElement("script"), e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f,
        k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1,
            c(),
            k.onload = k.onreadystatechange = null)
        }
        ,
        m(function() {
            l || (l = 1,
            c(1))
        }, e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    }
    ,
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var j, e = b.createElement("link"), c = i ? h : c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n),
        m(c, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
;
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).firebase = t()
}(this, function() {
    "use strict";
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        )(e, t)
    };
    var n = function() {
        return (n = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        ).apply(this, arguments)
    };
    function v(e, t) {
        if (!(t instanceof Object))
            return t;
        switch (t.constructor) {
        case Date:
            return new Date(t.getTime());
        case Object:
            void 0 === e && (e = {});
            break;
        case Array:
            e = [];
            break;
        default:
            return t
        }
        for (var r in t)
            t.hasOwnProperty(r) && (e[r] = v(e[r], t[r]));
        return e
    }
    var e, t, i, f = (i = Error,
    r(e = s, t = i),
    void (e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
    new o)),
    s);
    function o() {
        this.constructor = e
    }
    function s(e, t) {
        var r = i.call(this, t) || this;
        return r.code = e,
        r.name = "FirebaseError",
        Object.setPrototypeOf(r, s.prototype),
        Error.captureStackTrace && Error.captureStackTrace(r, a.prototype.create),
        r
    }
    var a = (c.prototype.create = function(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        for (var n = t[0] || {}, i = this.service + "/" + e, o = this.errors[e], s = o ? function(e, n) {
            return e.replace(h, function(e, t) {
                var r = n[t];
                return null != r ? r.toString() : "<" + t + "?>"
            })
        }(o, n) : "Error", a = this.serviceName + ": " + s + " (" + i + ").", c = new f(i,a), l = 0, p = Object.keys(n); l < p.length; l++) {
            var u = p[l];
            "_" !== u.slice(-1) && (u in c && console.warn('Overwriting FirebaseError base field "' + u + '" can cause unexpected behavior.'),
            c[u] = n[u])
        }
        return c
    }
    ,
    c);
    function c(e, t, r) {
        this.service = e,
        this.serviceName = t,
        this.errors = r
    }
    var h = /\{\$([^}]+)}/g;
    function d(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function l(e, t) {
        var r = new b(e,t);
        return r.subscribe.bind(r)
    }
    var p, u, b = (y.prototype.next = function(t) {
        this.forEachObserver(function(e) {
            e.next(t)
        })
    }
    ,
    y.prototype.error = function(t) {
        this.forEachObserver(function(e) {
            e.error(t)
        }),
        this.close(t)
    }
    ,
    y.prototype.complete = function() {
        this.forEachObserver(function(e) {
            e.complete()
        }),
        this.close()
    }
    ,
    y.prototype.subscribe = function(e, t, r) {
        var n, i = this;
        if (void 0 === e && void 0 === t && void 0 === r)
            throw new Error("Missing Observer.");
        void 0 === (n = function(e, t) {
            if ("object" != typeof e || null === e)
                return !1;
            for (var r = 0, n = t; r < n.length; r++) {
                var i = n[r];
                if (i in e && "function" == typeof e[i])
                    return !0
            }
            return !1
        }(e, ["next", "error", "complete"]) ? e : {
            next: e,
            error: t,
            complete: r
        }).next && (n.next = g),
        void 0 === n.error && (n.error = g),
        void 0 === n.complete && (n.complete = g);
        var o = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then(function() {
            try {
                i.finalError ? n.error(i.finalError) : n.complete()
            } catch (e) {}
        }),
        this.observers.push(n),
        o
    }
    ,
    y.prototype.unsubscribeOne = function(e) {
        void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e],
        this.observerCount -= 1,
        0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
    }
    ,
    y.prototype.forEachObserver = function(e) {
        if (!this.finalized)
            for (var t = 0; t < this.observers.length; t++)
                this.sendOne(t, e)
    }
    ,
    y.prototype.sendOne = function(e, t) {
        var r = this;
        this.task.then(function() {
            if (void 0 !== r.observers && void 0 !== r.observers[e])
                try {
                    t(r.observers[e])
                } catch (e) {
                    "undefined" != typeof console && console.error && console.error(e)
                }
        })
    }
    ,
    y.prototype.close = function(e) {
        var t = this;
        this.finalized || (this.finalized = !0,
        void 0 !== e && (this.finalError = e),
        this.task.then(function() {
            t.observers = void 0,
            t.onNoObservers = void 0
        }))
    }
    ,
    y);
    function y(e, t) {
        var r = this;
        this.observers = [],
        this.unsubscribes = [],
        this.observerCount = 0,
        this.task = Promise.resolve(),
        this.finalized = !1,
        this.onNoObservers = t,
        this.task.then(function() {
            e(r)
        }).catch(function(e) {
            r.error(e)
        })
    }
    function g() {}
    function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
            e += arguments[t].length;
        var n = Array(e)
          , i = 0;
        for (t = 0; t < r; t++)
            for (var o = arguments[t], s = 0, a = o.length; s < a; s++,
            i++)
                n[i] = o[s];
        return n
    }
    (u = p = p || {})[u.DEBUG = 0] = "DEBUG",
    u[u.VERBOSE = 1] = "VERBOSE",
    u[u.INFO = 2] = "INFO",
    u[u.WARN = 3] = "WARN",
    u[u.ERROR = 4] = "ERROR",
    u[u.SILENT = 5] = "SILENT";
    function _(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
        if (!(t < e.logLevel)) {
            var i = (new Date).toISOString();
            switch (t) {
            case p.DEBUG:
            case p.VERBOSE:
                console.log.apply(console, m(["[" + i + "]  " + e.name + ":"], r));
                break;
            case p.INFO:
                console.info.apply(console, m(["[" + i + "]  " + e.name + ":"], r));
                break;
            case p.WARN:
                console.warn.apply(console, m(["[" + i + "]  " + e.name + ":"], r));
                break;
            case p.ERROR:
                console.error.apply(console, m(["[" + i + "]  " + e.name + ":"], r));
                break;
            default:
                throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")")
            }
        }
    }
    var E, N = p.INFO, O = (Object.defineProperty(A.prototype, "logLevel", {
        get: function() {
            return this._logLevel
        },
        set: function(e) {
            if (!(e in p))
                throw new TypeError("Invalid value assigned to `logLevel`");
            this._logLevel = e
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(A.prototype, "logHandler", {
        get: function() {
            return this._logHandler
        },
        set: function(e) {
            if ("function" != typeof e)
                throw new TypeError("Value assigned to `logHandler` must be a function");
            this._logHandler = e
        },
        enumerable: !0,
        configurable: !0
    }),
    A.prototype.debug = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._logHandler.apply(this, m([this, p.DEBUG], e))
    }
    ,
    A.prototype.log = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._logHandler.apply(this, m([this, p.VERBOSE], e))
    }
    ,
    A.prototype.info = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._logHandler.apply(this, m([this, p.INFO], e))
    }
    ,
    A.prototype.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._logHandler.apply(this, m([this, p.WARN], e))
    }
    ,
    A.prototype.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._logHandler.apply(this, m([this, p.ERROR], e))
    }
    ,
    A);
    function A(e) {
        this.name = e,
        this._logLevel = N,
        this._logHandler = _
    }
    var k = ((E = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    E["bad-app-name"] = "Illegal App name: '{$appName}",
    E["duplicate-app"] = "Firebase App named '{$appName}' already exists",
    E["app-deleted"] = "Firebase App named '{$appName}' already deleted",
    E["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    E)
      , w = new a("app","Firebase",k)
      , R = "[DEFAULT]"
      , L = (Object.defineProperty(T.prototype, "automaticDataCollectionEnabled", {
        get: function() {
            return this.checkDestroyed_(),
            this.automaticDataCollectionEnabled_
        },
        set: function(e) {
            this.checkDestroyed_(),
            this.automaticDataCollectionEnabled_ = e
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(T.prototype, "name", {
        get: function() {
            return this.checkDestroyed_(),
            this.name_
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(T.prototype, "options", {
        get: function() {
            return this.checkDestroyed_(),
            this.options_
        },
        enumerable: !0,
        configurable: !0
    }),
    T.prototype.delete = function() {
        var a = this;
        return new Promise(function(e) {
            a.checkDestroyed_(),
            e()
        }
        ).then(function() {
            a.firebase_.INTERNAL.removeApp(a.name_);
            for (var e = [], t = 0, r = Object.keys(a.services_); t < r.length; t++)
                for (var n = r[t], i = 0, o = Object.keys(a.services_[n]); i < o.length; i++) {
                    var s = o[i];
                    e.push(a.services_[n][s])
                }
            return Promise.all(e.filter(function(e) {
                return "INTERNAL"in e
            }).map(function(e) {
                return e.INTERNAL.delete()
            }))
        }).then(function() {
            a.isDeleted_ = !0,
            a.services_ = {}
        })
    }
    ,
    T.prototype._getService = function(e, t) {
        if (void 0 === t && (t = R),
        this.checkDestroyed_(),
        this.services_[e] || (this.services_[e] = {}),
        !this.services_[e][t]) {
            var r = t !== R ? t : void 0
              , n = this.firebase_.INTERNAL.factories[e](this, this.extendApp.bind(this), r);
            this.services_[e][t] = n
        }
        return this.services_[e][t]
    }
    ,
    T.prototype._removeServiceInstance = function(e, t) {
        void 0 === t && (t = R),
        this.services_[e] && this.services_[e][t] && delete this.services_[e][t]
    }
    ,
    T.prototype.extendApp = function(e) {
        if (v(this, e),
        e.INTERNAL) {
            if (e.INTERNAL.addAuthTokenListener) {
                for (var t = 0, r = this.tokenListeners_; t < r.length; t++) {
                    var n = r[t];
                    this.INTERNAL.addAuthTokenListener(n)
                }
                this.tokenListeners_ = []
            }
            if (e.INTERNAL.analytics) {
                for (var i = 0, o = this.analyticsEventRequests_; i < o.length; i++) {
                    var s = o[i];
                    this.INTERNAL.analytics.logEvent.apply(void 0, s)
                }
                this.analyticsEventRequests_ = []
            }
        }
    }
    ,
    T.prototype.checkDestroyed_ = function() {
        if (this.isDeleted_)
            throw w.create("app-deleted", {
                appName: this.name_
            })
    }
    ,
    T);
    function T(e, t, r) {
        var n = this;
        this.firebase_ = r,
        this.isDeleted_ = !1,
        this.services_ = {},
        this.tokenListeners_ = [],
        this.analyticsEventRequests_ = [],
        this.name_ = t.name,
        this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1,
        this.options_ = function(e) {
            return v(void 0, e)
        }(e);
        var i = this;
        this.INTERNAL = {
            getUid: function() {
                return null
            },
            getToken: function() {
                return Promise.resolve(null)
            },
            addAuthTokenListener: function(e) {
                n.tokenListeners_.push(e),
                setTimeout(function() {
                    return e(null)
                }, 0)
            },
            removeAuthTokenListener: function(t) {
                n.tokenListeners_ = n.tokenListeners_.filter(function(e) {
                    return e !== t
                })
            },
            analytics: {
                logEvent: function() {
                    i.analyticsEventRequests_.push(arguments)
                }
            }
        }
    }
    L.prototype.name && L.prototype.options || L.prototype.delete || console.log("dc");
    var I = "7.3.0"
      , j = new O("@firebase/app");
    function D(s) {
        var o = {}
          , a = {}
          , c = {}
          , l = {
            __esModule: !0,
            initializeApp: function(e, t) {
                void 0 === t && (t = {});
                if ("object" != typeof t || null === t) {
                    t = {
                        name: t
                    }
                }
                var r = t;
                void 0 === r.name && (r.name = R);
                var n = r.name;
                if ("string" != typeof n || !n)
                    throw w.create("bad-app-name", {
                        appName: String(n)
                    });
                if (d(o, n))
                    throw w.create("duplicate-app", {
                        appName: n
                    });
                var i = new s(e,r,l);
                return f(o[n] = i, "create"),
                i
            },
            app: p,
            apps: null,
            SDK_VERSION: I,
            INTERNAL: {
                registerService: function(r, e, t, n, i) {
                    void 0 === i && (i = !1);
                    if (a[r])
                        return j.debug("There were multiple attempts to register service " + r + "."),
                        l[r];
                    a[r] = e,
                    n && (c[r] = n,
                    u().forEach(function(e) {
                        n("create", e)
                    }));
                    function o(e) {
                        if (void 0 === e && (e = p()),
                        "function" != typeof e[r])
                            throw w.create("invalid-app-argument", {
                                appName: r
                            });
                        return e[r]()
                    }
                    void 0 !== t && v(o, t);
                    return l[r] = o,
                    s.prototype[r] = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        return this._getService.bind(this, r).apply(this, i ? e : [])
                    }
                    ,
                    o
                },
                removeApp: function(e) {
                    f(o[e], "delete"),
                    delete o[e]
                },
                factories: a,
                useAsService: h
            }
        };
        function p(e) {
            if (!d(o, e = e || R))
                throw w.create("no-app", {
                    appName: e
                });
            return o[e]
        }
        function u() {
            return Object.keys(o).map(function(e) {
                return o[e]
            })
        }
        function f(e, t) {
            for (var r = 0, n = Object.keys(a); r < n.length; r++) {
                var i = h(e, n[r]);
                if (null === i)
                    return;
                c[i] && c[i](t, e)
            }
        }
        function h(e, t) {
            return "serverAuth" === t ? null : t
        }
        return l.default = l,
        Object.defineProperty(l, "apps", {
            get: u
        }),
        p.App = s,
        l
    }
    if ("object" == typeof self && self.self === self && void 0 !== self.firebase) {
        j.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
        var F = self.firebase.SDK_VERSION;
        F && 0 <= F.indexOf("LITE") && j.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
    }
    var S = function e() {
        var t = D(L);
        return t.INTERNAL = n(n({}, t.INTERNAL), {
            createFirebaseNamespace: e,
            extendNamespace: function(e) {
                v(t, e)
            },
            createSubscribe: l,
            ErrorFactory: a,
            deepExtend: v
        }),
        t
    }()
      , P = S.initializeApp;
    return S.initializeApp = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return function() {
            try {
                return "[object process]" === Object.prototype.toString.call(global.process)
            } catch (e) {
                return !1
            }
        }() && j.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),
        P.apply(void 0, e)
    }
    ,
    S
});
//# sourceMappingURL=firebase-app.js.map
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase)
}(this, function(fl) {
    "use strict";
    try {
        (function() {
            fl = fl && fl.hasOwnProperty("default") ? fl.default : fl,
            function() {
                var t, o = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
                    t != Array.prototype && t != Object.prototype && (t[e] = n.value)
                }
                , a = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
                function c(t) {
                    var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
                    return e ? e.call(t) : {
                        next: function(t) {
                            var e = 0;
                            return function() {
                                return e < t.length ? {
                                    done: !1,
                                    value: t[e++]
                                } : {
                                    done: !0
                                }
                            }
                        }(t)
                    }
                }
                !function(t, e) {
                    if (e) {
                        var n = a;
                        t = t.split(".");
                        for (var i = 0; i < t.length - 1; i++) {
                            var r = t[i];
                            r in n || (n[r] = {}),
                            n = n[r]
                        }
                        (e = e(i = n[t = t[t.length - 1]])) != i && null != e && o(n, t, {
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                }("Promise", function(t) {
                    function s(t) {
                        this.b = 0,
                        this.c = void 0,
                        this.a = [];
                        var e = this.f();
                        try {
                            t(e.resolve, e.reject)
                        } catch (t) {
                            e.reject(t)
                        }
                    }
                    function e() {
                        this.a = null
                    }
                    function u(e) {
                        return e instanceof s ? e : new s(function(t) {
                            t(e)
                        }
                        )
                    }
                    if (t)
                        return t;
                    e.prototype.b = function(t) {
                        if (null == this.a) {
                            this.a = [];
                            var e = this;
                            this.c(function() {
                                e.g()
                            })
                        }
                        this.a.push(t)
                    }
                    ;
                    var n = a.setTimeout;
                    e.prototype.c = function(t) {
                        n(t, 0)
                    }
                    ,
                    e.prototype.g = function() {
                        for (; this.a && this.a.length; ) {
                            var t = this.a;
                            this.a = [];
                            for (var e = 0; e < t.length; ++e) {
                                var n = t[e];
                                t[e] = null;
                                try {
                                    n()
                                } catch (t) {
                                    this.f(t)
                                }
                            }
                        }
                        this.a = null
                    }
                    ,
                    e.prototype.f = function(t) {
                        this.c(function() {
                            throw t
                        })
                    }
                    ,
                    s.prototype.f = function() {
                        function t(e) {
                            return function(t) {
                                i || (i = !0,
                                e.call(n, t))
                            }
                        }
                        var n = this
                          , i = !1;
                        return {
                            resolve: t(this.m),
                            reject: t(this.g)
                        }
                    }
                    ,
                    s.prototype.m = function(t) {
                        if (t === this)
                            this.g(new TypeError("A Promise cannot resolve to itself"));
                        else if (t instanceof s)
                            this.o(t);
                        else {
                            t: switch (typeof t) {
                            case "object":
                                var e = null != t;
                                break t;
                            case "function":
                                e = !0;
                                break t;
                            default:
                                e = !1
                            }
                            e ? this.u(t) : this.h(t)
                        }
                    }
                    ,
                    s.prototype.u = function(t) {
                        var e = void 0;
                        try {
                            e = t.then
                        } catch (t) {
                            return void this.g(t)
                        }
                        "function" == typeof e ? this.v(e, t) : this.h(t)
                    }
                    ,
                    s.prototype.g = function(t) {
                        this.i(2, t)
                    }
                    ,
                    s.prototype.h = function(t) {
                        this.i(1, t)
                    }
                    ,
                    s.prototype.i = function(t, e) {
                        if (0 != this.b)
                            throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.b);
                        this.b = t,
                        this.c = e,
                        this.l()
                    }
                    ,
                    s.prototype.l = function() {
                        if (null != this.a) {
                            for (var t = 0; t < this.a.length; ++t)
                                r.b(this.a[t]);
                            this.a = null
                        }
                    }
                    ;
                    var r = new e;
                    return s.prototype.o = function(t) {
                        var e = this.f();
                        t.Ja(e.resolve, e.reject)
                    }
                    ,
                    s.prototype.v = function(t, e) {
                        var n = this.f();
                        try {
                            t.call(e, n.resolve, n.reject)
                        } catch (t) {
                            n.reject(t)
                        }
                    }
                    ,
                    s.prototype.then = function(t, e) {
                        function n(e, t) {
                            return "function" == typeof e ? function(t) {
                                try {
                                    i(e(t))
                                } catch (t) {
                                    r(t)
                                }
                            }
                            : t
                        }
                        var i, r, o = new s(function(t, e) {
                            i = t,
                            r = e
                        }
                        );
                        return this.Ja(n(t, i), n(e, r)),
                        o
                    }
                    ,
                    s.prototype.catch = function(t) {
                        return this.then(void 0, t)
                    }
                    ,
                    s.prototype.Ja = function(t, e) {
                        function n() {
                            switch (i.b) {
                            case 1:
                                t(i.c);
                                break;
                            case 2:
                                e(i.c);
                                break;
                            default:
                                throw Error("Unexpected state: " + i.b)
                            }
                        }
                        var i = this;
                        null == this.a ? r.b(n) : this.a.push(n)
                    }
                    ,
                    s.resolve = u,
                    s.reject = function(n) {
                        return new s(function(t, e) {
                            e(n)
                        }
                        )
                    }
                    ,
                    s.race = function(r) {
                        return new s(function(t, e) {
                            for (var n = c(r), i = n.next(); !i.done; i = n.next())
                                u(i.value).Ja(t, e)
                        }
                        )
                    }
                    ,
                    s.all = function(t) {
                        var o = c(t)
                          , a = o.next();
                        return a.done ? u([]) : new s(function(n, t) {
                            function e(e) {
                                return function(t) {
                                    i[e] = t,
                                    0 == --r && n(i)
                                }
                            }
                            for (var i = [], r = 0; i.push(void 0),
                            r++,
                            u(a.value).Ja(e(i.length - 1), t),
                            !(a = o.next()).done; )
                                ;
                        }
                        )
                    }
                    ,
                    s
                });
                var u = u || {}
                  , l = this || self;
                function h(t) {
                    return "string" == typeof t
                }
                function n(t) {
                    return "boolean" == typeof t
                }
                var s = /^[\w+/_-]+[=]{0,2}$/
                  , f = null;
                function d() {}
                function i(t) {
                    var e = typeof t;
                    if ("object" == e) {
                        if (!t)
                            return "null";
                        if (t instanceof Array)
                            return "array";
                        if (t instanceof Object)
                            return e;
                        var n = Object.prototype.toString.call(t);
                        if ("[object Window]" == n)
                            return "object";
                        if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice"))
                            return "array";
                        if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call"))
                            return "function"
                    } else if ("function" == e && void 0 === t.call)
                        return "object";
                    return e
                }
                function r(t) {
                    return null === t
                }
                function p(t) {
                    return "array" == i(t)
                }
                function v(t) {
                    var e = i(t);
                    return "array" == e || "object" == e && "number" == typeof t.length
                }
                function m(t) {
                    return "function" == i(t)
                }
                function g(t) {
                    var e = typeof t;
                    return "object" == e && null != t || "function" == e
                }
                var e = "closure_uid_" + (1e9 * Math.random() >>> 0)
                  , b = 0;
                function y(t, e, n) {
                    return t.call.apply(t.bind, arguments)
                }
                function w(e, n, t) {
                    if (!e)
                        throw Error();
                    if (2 < arguments.length) {
                        var i = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var t = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(t, i),
                            e.apply(n, t)
                        }
                    }
                    return function() {
                        return e.apply(n, arguments)
                    }
                }
                function I(t, e, n) {
                    return (I = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? y : w).apply(null, arguments)
                }
                function T(e, t) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var t = n.slice();
                        return t.push.apply(t, arguments),
                        e.apply(this, t)
                    }
                }
                var E = Date.now || function() {
                    return +new Date
                }
                ;
                function k(t, o) {
                    function e() {}
                    e.prototype = o.prototype,
                    t.qb = o.prototype,
                    t.prototype = new e,
                    (t.prototype.constructor = t).fd = function(t, e, n) {
                        for (var i = Array(arguments.length - 2), r = 2; r < arguments.length; r++)
                            i[r - 2] = arguments[r];
                        return o.prototype[e].apply(t, i)
                    }
                }
                function A(t) {
                    if (!t)
                        return !1;
                    try {
                        return !!t.$goog_Thenable
                    } catch (t) {
                        return !1
                    }
                }
                function S(t) {
                    if (Error.captureStackTrace)
                        Error.captureStackTrace(this, S);
                    else {
                        var e = Error().stack;
                        e && (this.stack = e)
                    }
                    t && (this.message = String(t))
                }
                function N(t, e) {
                    for (var n = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++)
                        n += t[r] + (r < e.length ? e[r] : "%s");
                    S.call(this, n + t[i])
                }
                function O(t, e) {
                    throw new N("Failure" + (t ? ": " + t : ""),Array.prototype.slice.call(arguments, 1))
                }
                function _(t, e) {
                    this.c = t,
                    this.f = e,
                    this.b = 0,
                    this.a = null
                }
                function P(t, e) {
                    t.f(e),
                    t.b < 100 && (t.b++,
                    e.next = t.a,
                    t.a = e)
                }
                function R() {
                    this.b = this.a = null
                }
                k(S, Error),
                S.prototype.name = "CustomError",
                k(N, S),
                N.prototype.name = "AssertionError",
                _.prototype.get = function() {
                    if (0 < this.b) {
                        this.b--;
                        var t = this.a;
                        this.a = t.next,
                        t.next = null
                    } else
                        t = this.c();
                    return t
                }
                ;
                var D = new _(function() {
                    return new C
                }
                ,function(t) {
                    t.reset()
                }
                );
                function C() {
                    this.next = this.b = this.a = null
                }
                function L(t, e) {
                    t: {
                        try {
                            var n = t && t.ownerDocument
                              , i = n && (n.defaultView || n.parentWindow);
                            if ((i = i || l).Element && i.Location) {
                                var r = i;
                                break t
                            }
                        } catch (t) {}
                        r = null
                    }
                    if (r && void 0 !== r[e] && (!t || !(t instanceof r[e]) && (t instanceof r.Location || t instanceof r.Element))) {
                        if (g(t))
                            try {
                                var o = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t)
                            } catch (t) {
                                o = "<object could not be stringified>"
                            }
                        else
                            o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
                        O("Argument is not a %s (or a non-Element, non-Location mock); got: %s", e, o)
                    }
                }
                R.prototype.add = function(t, e) {
                    var n = D.get();
                    n.set(t, e),
                    this.b ? this.b.next = n : this.a = n,
                    this.b = n
                }
                ,
                C.prototype.set = function(t, e) {
                    this.a = t,
                    this.b = e,
                    this.next = null
                }
                ,
                C.prototype.reset = function() {
                    this.next = this.b = this.a = null
                }
                ;
                var x = Array.prototype.indexOf ? function(t, e) {
                    return Array.prototype.indexOf.call(t, e, void 0)
                }
                : function(t, e) {
                    if (h(t))
                        return h(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                    for (var n = 0; n < t.length; n++)
                        if (n in t && t[n] === e)
                            return n;
                    return -1
                }
                  , M = Array.prototype.forEach ? function(t, e, n) {
                    Array.prototype.forEach.call(t, e, n)
                }
                : function(t, e, n) {
                    for (var i = t.length, r = h(t) ? t.split("") : t, o = 0; o < i; o++)
                        o in r && e.call(n, r[o], o, t)
                }
                ;
                var j = Array.prototype.map ? function(t, e) {
                    return Array.prototype.map.call(t, e, void 0)
                }
                : function(t, e) {
                    for (var n = t.length, i = Array(n), r = h(t) ? t.split("") : t, o = 0; o < n; o++)
                        o in r && (i[o] = e.call(void 0, r[o], o, t));
                    return i
                }
                  , U = Array.prototype.some ? function(t, e) {
                    return Array.prototype.some.call(t, e, void 0)
                }
                : function(t, e) {
                    for (var n = t.length, i = h(t) ? t.split("") : t, r = 0; r < n; r++)
                        if (r in i && e.call(void 0, i[r], r, t))
                            return !0;
                    return !1
                }
                ;
                function V(t, e) {
                    return 0 <= x(t, e)
                }
                function F(t, e) {
                    var n;
                    return (n = 0 <= (e = x(t, e))) && Array.prototype.splice.call(t, e, 1),
                    n
                }
                function K(n, i) {
                    !function(t, e) {
                        for (var n = h(t) ? t.split("") : t, i = t.length - 1; 0 <= i; --i)
                            i in n && e.call(void 0, n[i], i, t)
                    }(n, function(t, e) {
                        i.call(void 0, t, e, n) && 1 == Array.prototype.splice.call(n, e, 1).length && 0
                    })
                }
                function q(t) {
                    return Array.prototype.concat.apply([], arguments)
                }
                function H(t) {
                    var e = t.length;
                    if (0 < e) {
                        for (var n = Array(e), i = 0; i < e; i++)
                            n[i] = t[i];
                        return n
                    }
                    return []
                }
                function B(t, e) {
                    for (var n in t)
                        e.call(void 0, t[n], n, t)
                }
                function G(t) {
                    for (var e in t)
                        return !1;
                    return !0
                }
                function W(t) {
                    var e, n = {};
                    for (e in t)
                        n[e] = t[e];
                    return n
                }
                var X = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
                function J(t, e) {
                    for (var n, i, r = 1; r < arguments.length; r++) {
                        for (n in i = arguments[r])
                            t[n] = i[n];
                        for (var o = 0; o < X.length; o++)
                            n = X[o],
                            Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                }
                function Y(t, e) {
                    this.a = t === Z && e || "",
                    this.b = $
                }
                function z(t) {
                    return t instanceof Y && t.constructor === Y && t.b === $ ? t.a : (O("expected object of type Const, got '" + t + "'"),
                    "type_error:Const")
                }
                Y.prototype.qa = !0,
                Y.prototype.pa = function() {
                    return this.a
                }
                ,
                Y.prototype.toString = function() {
                    return "Const{" + this.a + "}"
                }
                ;
                var $ = {}
                  , Z = {}
                  , Q = new Y(Z,"");
                function tt() {
                    this.a = "",
                    this.b = ot
                }
                function et(t) {
                    return t instanceof tt && t.constructor === tt && t.b === ot ? t.a : (O("expected object of type TrustedResourceUrl, got '" + t + "' of type " + i(t)),
                    "type_error:TrustedResourceUrl")
                }
                function nt(t, n) {
                    var i = z(t);
                    if (!rt.test(i))
                        throw Error("Invalid TrustedResourceUrl format: " + i);
                    return at(t = i.replace(it, function(t, e) {
                        if (!Object.prototype.hasOwnProperty.call(n, e))
                            throw Error('Found marker, "' + e + '", in format string, "' + i + '", but no valid label mapping found in args: ' + JSON.stringify(n));
                        return (t = n[e])instanceof Y ? z(t) : encodeURIComponent(String(t))
                    }))
                }
                tt.prototype.qa = !0,
                tt.prototype.pa = function() {
                    return this.a.toString()
                }
                ,
                tt.prototype.toString = function() {
                    return "TrustedResourceUrl{" + this.a + "}"
                }
                ;
                var it = /%{(\w+)}/g
                  , rt = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
                  , ot = {};
                function at(t) {
                    var e = new tt;
                    return e.a = t,
                    e
                }
                var st = String.prototype.trim ? function(t) {
                    return t.trim()
                }
                : function(t) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
                }
                  , ut = /&/g
                  , ct = /</g
                  , ht = />/g
                  , lt = /"/g
                  , ft = /'/g
                  , dt = /\x00/g
                  , pt = /[\x00&<>"']/;
                function vt(t, e) {
                    return -1 != t.indexOf(e)
                }
                function mt(t, e) {
                    return t < e ? -1 : e < t ? 1 : 0
                }
                function gt() {
                    this.a = "",
                    this.b = Tt
                }
                function bt(t) {
                    return t instanceof gt && t.constructor === gt && t.b === Tt ? t.a : (O("expected object of type SafeUrl, got '" + t + "' of type " + i(t)),
                    "type_error:SafeUrl")
                }
                gt.prototype.qa = !0,
                gt.prototype.pa = function() {
                    return this.a.toString()
                }
                ,
                gt.prototype.toString = function() {
                    return "SafeUrl{" + this.a + "}"
                }
                ;
                var yt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
                function wt(t) {
                    return t instanceof gt ? t : (t = "object" == typeof t && t.qa ? t.pa() : String(t),
                    yt.test(t) || (t = "about:invalid#zClosurez"),
                    Et(t))
                }
                var It, Tt = {};
                function Et(t) {
                    var e = new gt;
                    return e.a = t,
                    e
                }
                Et("about:blank");
                t: {
                    var kt = l.navigator;
                    if (kt) {
                        var At = kt.userAgent;
                        if (At) {
                            It = At;
                            break t
                        }
                    }
                    It = ""
                }
                function St(t) {
                    return vt(It, t)
                }
                function Nt() {
                    this.a = "",
                    this.b = _t
                }
                function Ot(t) {
                    return t instanceof Nt && t.constructor === Nt && t.b === _t ? t.a : (O("expected object of type SafeHtml, got '" + t + "' of type " + i(t)),
                    "type_error:SafeHtml")
                }
                Nt.prototype.qa = !0,
                Nt.prototype.pa = function() {
                    return this.a.toString()
                }
                ,
                Nt.prototype.toString = function() {
                    return "SafeHtml{" + this.a + "}"
                }
                ;
                var _t = {};
                function Pt(t) {
                    var e = new Nt;
                    return e.a = t,
                    e
                }
                Pt("<!DOCTYPE html>");
                var Rt, Dt, Ct = Pt("");
                function Lt(t, e) {
                    for (var n = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length; )
                        i += n.shift() + r.shift();
                    return i + n.join("%s")
                }
                function xt(t) {
                    return pt.test(t) && (-1 != t.indexOf("&") && (t = t.replace(ut, "&amp;")),
                    -1 != t.indexOf("<") && (t = t.replace(ct, "&lt;")),
                    -1 != t.indexOf(">") && (t = t.replace(ht, "&gt;")),
                    -1 != t.indexOf('"') && (t = t.replace(lt, "&quot;")),
                    -1 != t.indexOf("'") && (t = t.replace(ft, "&#39;")),
                    -1 != t.indexOf("\0") && (t = t.replace(dt, "&#0;"))),
                    t
                }
                function Mt(t) {
                    l.setTimeout(function() {
                        throw t
                    }, 0)
                }
                function jt() {
                    var t = l.MessageChannel;
                    if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !St("Presto") && (t = function() {
                        var t = document.createElement("IFRAME");
                        t.style.display = "none",
                        function(t) {
                            var e = at(z(Q));
                            L(t, "HTMLIFrameElement"),
                            t.src = et(e).toString()
                        }(t),
                        document.documentElement.appendChild(t);
                        var e = t.contentWindow;
                        (t = e.document).open(),
                        t.write(Ot(Ct)),
                        t.close();
                        var n = "callImmediate" + Math.random()
                          , i = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                        t = I(function(t) {
                            "*" != i && t.origin != i || t.data != n || this.port1.onmessage()
                        }, this),
                        e.addEventListener("message", t, !1),
                        this.port1 = {},
                        this.port2 = {
                            postMessage: function() {
                                e.postMessage(n, i)
                            }
                        }
                    }
                    ),
                    void 0 === t || St("Trident") || St("MSIE"))
                        return "undefined" != typeof document && "onreadystatechange"in document.createElement("SCRIPT") ? function(t) {
                            var e = document.createElement("SCRIPT");
                            e.onreadystatechange = function() {
                                e.onreadystatechange = null,
                                e.parentNode.removeChild(e),
                                e = null,
                                t(),
                                t = null
                            }
                            ,
                            document.documentElement.appendChild(e)
                        }
                        : function(t) {
                            l.setTimeout(t, 0)
                        }
                        ;
                    var e = new t
                      , n = {}
                      , i = n;
                    return e.port1.onmessage = function() {
                        if (void 0 !== n.next) {
                            var t = (n = n.next).yb;
                            n.yb = null,
                            t()
                        }
                    }
                    ,
                    function(t) {
                        i.next = {
                            yb: t
                        },
                        i = i.next,
                        e.port2.postMessage(0)
                    }
                }
                function Ut(t, e) {
                    Dt || function() {
                        if (l.Promise && l.Promise.resolve) {
                            var t = l.Promise.resolve(void 0);
                            Dt = function() {
                                t.then(Kt)
                            }
                        } else
                            Dt = function() {
                                var t = Kt;
                                !m(l.setImmediate) || l.Window && l.Window.prototype && !St("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Rt = Rt || jt())(t) : l.setImmediate(t)
                            }
                    }(),
                    Vt || (Dt(),
                    Vt = !0),
                    Ft.add(t, e)
                }
                Pt("<br>");
                var Vt = !1
                  , Ft = new R;
                function Kt() {
                    for (var t; n = e = void 0,
                    n = null,
                    (e = Ft).a && (n = e.a,
                    e.a = e.a.next,
                    e.a || (e.b = null),
                    n.next = null),
                    t = n; ) {
                        try {
                            t.a.call(t.b)
                        } catch (t) {
                            Mt(t)
                        }
                        P(D, t)
                    }
                    var e, n;
                    Vt = !1
                }
                function qt(t, e) {
                    if (this.a = Ht,
                    this.i = void 0,
                    this.f = this.b = this.c = null,
                    this.g = this.h = !1,
                    t != d)
                        try {
                            var n = this;
                            t.call(e, function(t) {
                                ee(n, Bt, t)
                            }, function(t) {
                                if (!(t instanceof ue))
                                    try {
                                        if (t instanceof Error)
                                            throw t;
                                        throw Error("Promise rejected.")
                                    } catch (t) {}
                                ee(n, Gt, t)
                            })
                        } catch (t) {
                            ee(this, Gt, t)
                        }
                }
                var Ht = 0
                  , Bt = 2
                  , Gt = 3;
                function Wt() {
                    this.next = this.f = this.b = this.g = this.a = null,
                    this.c = !1
                }
                Wt.prototype.reset = function() {
                    this.f = this.b = this.g = this.a = null,
                    this.c = !1
                }
                ;
                var Xt = new _(function() {
                    return new Wt
                }
                ,function(t) {
                    t.reset()
                }
                );
                function Jt(t, e, n) {
                    var i = Xt.get();
                    return i.g = t,
                    i.b = e,
                    i.f = n,
                    i
                }
                function Yt(t) {
                    if (t instanceof qt)
                        return t;
                    var e = new qt(d);
                    return ee(e, Bt, t),
                    e
                }
                function zt(n) {
                    return new qt(function(t, e) {
                        e(n)
                    }
                    )
                }
                function $t(t, e, n) {
                    ne(t, e, n, null) || Ut(T(e, t))
                }
                function Zt(n) {
                    return new qt(function(i) {
                        var r = n.length
                          , o = [];
                        if (r)
                            for (var t = function(t, e, n) {
                                r--,
                                o[t] = e ? {
                                    Gb: !0,
                                    value: n
                                } : {
                                    Gb: !1,
                                    reason: n
                                },
                                0 == r && i(o)
                            }, e = 0; e < n.length; e++)
                                $t(n[e], T(t, e, !0), T(t, e, !1));
                        else
                            i(o)
                    }
                    )
                }
                function Qt(t, e) {
                    t.b || t.a != Bt && t.a != Gt || ie(t),
                    t.f ? t.f.next = e : t.b = e,
                    t.f = e
                }
                function te(t, r, o, a) {
                    var e = Jt(null, null, null);
                    return e.a = new qt(function(n, i) {
                        e.g = r ? function(t) {
                            try {
                                var e = r.call(a, t);
                                n(e)
                            } catch (t) {
                                i(t)
                            }
                        }
                        : n,
                        e.b = o ? function(t) {
                            try {
                                var e = o.call(a, t);
                                void 0 === e && t instanceof ue ? i(t) : n(e)
                            } catch (t) {
                                i(t)
                            }
                        }
                        : i
                    }
                    ),
                    Qt(e.a.c = t, e),
                    e.a
                }
                function ee(t, e, n) {
                    t.a == Ht && (t === n && (e = Gt,
                    n = new TypeError("Promise cannot resolve to itself")),
                    t.a = 1,
                    ne(n, t.Oc, t.Pc, t) || (t.i = n,
                    t.a = e,
                    t.c = null,
                    ie(t),
                    e != Gt || n instanceof ue || function(t, e) {
                        t.g = !0,
                        Ut(function() {
                            t.g && se.call(null, e)
                        })
                    }(t, n)))
                }
                function ne(t, e, n, i) {
                    if (t instanceof qt)
                        return Qt(t, Jt(e || d, n || null, i)),
                        !0;
                    if (A(t))
                        return t.then(e, n, i),
                        !0;
                    if (g(t))
                        try {
                            var r = t.then;
                            if (m(r))
                                return function(t, e, n, i, r) {
                                    function o(t) {
                                        a || (a = !0,
                                        i.call(r, t))
                                    }
                                    var a = !1;
                                    try {
                                        e.call(t, function(t) {
                                            a || (a = !0,
                                            n.call(r, t))
                                        }, o)
                                    } catch (t) {
                                        o(t)
                                    }
                                }(t, r, e, n, i),
                                !0
                        } catch (t) {
                            return n.call(i, t),
                            !0
                        }
                    return !1
                }
                function ie(t) {
                    t.h || (t.h = !0,
                    Ut(t.Zb, t))
                }
                function re(t) {
                    var e = null;
                    return t.b && (e = t.b,
                    t.b = e.next,
                    e.next = null),
                    t.b || (t.f = null),
                    e
                }
                function oe(t, e, n, i) {
                    if (n == Gt && e.b && !e.c)
                        for (; t && t.g; t = t.c)
                            t.g = !1;
                    if (e.a)
                        e.a.c = null,
                        ae(e, n, i);
                    else
                        try {
                            e.c ? e.g.call(e.f) : ae(e, n, i)
                        } catch (t) {
                            se.call(null, t)
                        }
                    P(Xt, e)
                }
                function ae(t, e, n) {
                    e == Bt ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n)
                }
                qt.prototype.then = function(t, e, n) {
                    return te(this, m(t) ? t : null, m(e) ? e : null, n)
                }
                ,
                qt.prototype.$goog_Thenable = !0,
                (t = qt.prototype).ka = function(t, e) {
                    return (t = Jt(t, t, e)).c = !0,
                    Qt(this, t),
                    this
                }
                ,
                t.s = function(t, e) {
                    return te(this, null, t, e)
                }
                ,
                t.cancel = function(t) {
                    this.a == Ht && Ut(function() {
                        !function t(e, n) {
                            if (e.a == Ht)
                                if (e.c) {
                                    var i = e.c;
                                    if (i.b) {
                                        for (var r = 0, o = null, a = null, s = i.b; s && (s.c || (r++,
                                        s.a == e && (o = s),
                                        !(o && 1 < r))); s = s.next)
                                            o || (a = s);
                                        o && (i.a == Ht && 1 == r ? t(i, n) : (a ? ((r = a).next == i.f && (i.f = r),
                                        r.next = r.next.next) : re(i),
                                        oe(i, o, Gt, n)))
                                    }
                                    e.c = null
                                } else
                                    ee(e, Gt, n)
                        }(this, new ue(t))
                    }, this)
                }
                ,
                t.Oc = function(t) {
                    this.a = Ht,
                    ee(this, Bt, t)
                }
                ,
                t.Pc = function(t) {
                    this.a = Ht,
                    ee(this, Gt, t)
                }
                ,
                t.Zb = function() {
                    for (var t; t = re(this); )
                        oe(this, t, this.a, this.i);
                    this.h = !1
                }
                ;
                var se = Mt;
                function ue(t) {
                    S.call(this, t)
                }
                function ce() {
                    this.ta = this.ta,
                    this.la = this.la
                }
                k(ue, S);
                var he = 0;
                function le(t) {
                    if (!t.ta && (t.ta = !0,
                    t.xa(),
                    0 != he))
                        t[e] || (t[e] = ++b)
                }
                function fe(t) {
                    return fe[" "](t),
                    t
                }
                ce.prototype.ta = !(ue.prototype.name = "cancel"),
                ce.prototype.xa = function() {
                    if (this.la)
                        for (; this.la.length; )
                            this.la.shift()()
                }
                ,
                fe[" "] = d;
                var de, pe, ve = St("Opera"), me = St("Trident") || St("MSIE"), ge = St("Edge"), be = ge || me, ye = St("Gecko") && !(vt(It.toLowerCase(), "webkit") && !St("Edge")) && !(St("Trident") || St("MSIE")) && !St("Edge"), we = vt(It.toLowerCase(), "webkit") && !St("Edge");
                function Ie() {
                    var t = l.document;
                    return t ? t.documentMode : void 0
                }
                t: {
                    var Te = ""
                      , Ee = (pe = It,
                    ye ? /rv:([^\);]+)(\)|;)/.exec(pe) : ge ? /Edge\/([\d\.]+)/.exec(pe) : me ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(pe) : we ? /WebKit\/(\S+)/.exec(pe) : ve ? /(?:Version)[ \/]?(\S+)/.exec(pe) : void 0);
                    if (Ee && (Te = Ee ? Ee[1] : ""),
                    me) {
                        var ke = Ie();
                        if (null != ke && ke > parseFloat(Te)) {
                            de = String(ke);
                            break t
                        }
                    }
                    de = Te
                }
                var Ae, Se = {};
                function Ne(s) {
                    return function(t, e) {
                        var n = Se;
                        return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
                    }(s, function() {
                        for (var t = 0, e = st(String(de)).split("."), n = st(String(s)).split("."), i = Math.max(e.length, n.length), r = 0; 0 == t && r < i; r++) {
                            var o = e[r] || ""
                              , a = n[r] || "";
                            do {
                                if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""],
                                a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""],
                                0 == o[0].length && 0 == a[0].length)
                                    break;
                                t = mt(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || mt(0 == o[2].length, 0 == a[2].length) || mt(o[2], a[2]),
                                o = o[3],
                                a = a[3]
                            } while (0 == t)
                        }
                        return 0 <= t
                    })
                }
                Ae = l.document && me ? Ie() : void 0;
                var Oe = Object.freeze || function(t) {
                    return t
                }
                  , _e = !me || 9 <= Number(Ae)
                  , Pe = me && !Ne("9")
                  , Re = function() {
                    if (!l.addEventListener || !Object.defineProperty)
                        return !1;
                    var t = !1
                      , e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    try {
                        l.addEventListener("test", d, e),
                        l.removeEventListener("test", d, e)
                    } catch (t) {}
                    return t
                }();
                function De(t, e) {
                    this.type = t,
                    this.b = this.target = e,
                    this.Mb = !0
                }
                function Ce(t, e) {
                    if (De.call(this, t ? t.type : ""),
                    this.relatedTarget = this.b = this.target = null,
                    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0,
                    this.key = "",
                    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1,
                    this.pointerId = 0,
                    this.pointerType = "",
                    this.a = null,
                    t) {
                        var n = this.type = t.type
                          , i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                        if (this.target = t.target || t.srcElement,
                        this.b = e,
                        e = t.relatedTarget) {
                            if (ye) {
                                t: {
                                    try {
                                        fe(e.nodeName);
                                        var r = !0;
                                        break t
                                    } catch (t) {}
                                    r = !1
                                }
                                r || (e = null)
                            }
                        } else
                            "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                        this.relatedTarget = e,
                        i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX,
                        this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY,
                        this.screenX = i.screenX || 0,
                        this.screenY = i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX,
                        this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY,
                        this.screenX = t.screenX || 0,
                        this.screenY = t.screenY || 0),
                        this.button = t.button,
                        this.key = t.key || "",
                        this.ctrlKey = t.ctrlKey,
                        this.altKey = t.altKey,
                        this.shiftKey = t.shiftKey,
                        this.metaKey = t.metaKey,
                        this.pointerId = t.pointerId || 0,
                        this.pointerType = h(t.pointerType) ? t.pointerType : Le[t.pointerType] || "",
                        (this.a = t).defaultPrevented && this.preventDefault()
                    }
                }
                De.prototype.preventDefault = function() {
                    this.Mb = !1
                }
                ,
                k(Ce, De);
                var Le = Oe({
                    2: "touch",
                    3: "pen",
                    4: "mouse"
                });
                Ce.prototype.preventDefault = function() {
                    Ce.qb.preventDefault.call(this);
                    var t = this.a;
                    if (t.preventDefault)
                        t.preventDefault();
                    else if (t.returnValue = !1,
                    Pe)
                        try {
                            (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1)
                        } catch (t) {}
                }
                ,
                Ce.prototype.f = function() {
                    return this.a
                }
                ;
                var xe = "closure_listenable_" + (1e6 * Math.random() | 0)
                  , Me = 0;
                function je(t, e, n, i, r) {
                    this.listener = t,
                    this.proxy = null,
                    this.src = e,
                    this.type = n,
                    this.capture = !!i,
                    this.Na = r,
                    this.key = ++Me,
                    this.ra = this.Ia = !1
                }
                function Ue(t) {
                    t.ra = !0,
                    t.listener = null,
                    t.proxy = null,
                    t.src = null,
                    t.Na = null
                }
                function Ve(t) {
                    this.src = t,
                    this.a = {},
                    this.b = 0
                }
                function Fe(t, e) {
                    var n = e.type;
                    n in t.a && F(t.a[n], e) && (Ue(e),
                    0 == t.a[n].length && (delete t.a[n],
                    t.b--))
                }
                function Ke(t, e, n, i) {
                    for (var r = 0; r < t.length; ++r) {
                        var o = t[r];
                        if (!o.ra && o.listener == e && o.capture == !!n && o.Na == i)
                            return r
                    }
                    return -1
                }
                Ve.prototype.add = function(t, e, n, i, r) {
                    var o = t.toString();
                    (t = this.a[o]) || (t = this.a[o] = [],
                    this.b++);
                    var a = Ke(t, e, i, r);
                    return -1 < a ? (e = t[a],
                    n || (e.Ia = !1)) : ((e = new je(e,this.src,o,!!i,r)).Ia = n,
                    t.push(e)),
                    e
                }
                ;
                var qe = "closure_lm_" + (1e6 * Math.random() | 0)
                  , He = {};
                function Be(t, e, n, i, r) {
                    if (i && i.once)
                        We(t, e, n, i, r);
                    else if (p(e))
                        for (var o = 0; o < e.length; o++)
                            Be(t, e[o], n, i, r);
                    else
                        n = en(n),
                        t && t[xe] ? rn(t, e, n, g(i) ? !!i.capture : !!i, r) : Ge(t, e, n, !1, i, r)
                }
                function Ge(t, e, n, i, r, o) {
                    if (!e)
                        throw Error("Invalid event type");
                    var a = g(r) ? !!r.capture : !!r
                      , s = Qe(t);
                    if (s || (t[qe] = s = new Ve(t)),
                    !(n = s.add(e, n, i, a, o)).proxy)
                        if (i = function() {
                            var e = Ze
                              , n = _e ? function(t) {
                                return e.call(n.src, n.listener, t)
                            }
                            : function(t) {
                                if (!(t = e.call(n.src, n.listener, t)))
                                    return t
                            }
                            ;
                            return n
                        }(),
                        (n.proxy = i).src = t,
                        i.listener = n,
                        t.addEventListener)
                            Re || (r = a),
                            void 0 === r && (r = !1),
                            t.addEventListener(e.toString(), i, r);
                        else if (t.attachEvent)
                            t.attachEvent(Ye(e.toString()), i);
                        else {
                            if (!t.addListener || !t.removeListener)
                                throw Error("addEventListener and attachEvent are unavailable.");
                            t.addListener(i)
                        }
                }
                function We(t, e, n, i, r) {
                    if (p(e))
                        for (var o = 0; o < e.length; o++)
                            We(t, e[o], n, i, r);
                    else
                        n = en(n),
                        t && t[xe] ? on(t, e, n, g(i) ? !!i.capture : !!i, r) : Ge(t, e, n, !0, i, r)
                }
                function Xe(t, e, n, i, r) {
                    if (p(e))
                        for (var o = 0; o < e.length; o++)
                            Xe(t, e[o], n, i, r);
                    else
                        i = g(i) ? !!i.capture : !!i,
                        n = en(n),
                        t && t[xe] ? (t = t.u,
                        (e = String(e).toString())in t.a && (-1 < (n = Ke(o = t.a[e], n, i, r)) && (Ue(o[n]),
                        Array.prototype.splice.call(o, n, 1),
                        0 == o.length && (delete t.a[e],
                        t.b--)))) : (t = t && Qe(t)) && (e = t.a[e.toString()],
                        t = -1,
                        e && (t = Ke(e, n, i, r)),
                        (n = -1 < t ? e[t] : null) && Je(n))
                }
                function Je(t) {
                    if ("number" != typeof t && t && !t.ra) {
                        var e = t.src;
                        if (e && e[xe])
                            Fe(e.u, t);
                        else {
                            var n = t.type
                              , i = t.proxy;
                            e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(Ye(n), i) : e.addListener && e.removeListener && e.removeListener(i),
                            (n = Qe(e)) ? (Fe(n, t),
                            0 == n.b && (n.src = null,
                            e[qe] = null)) : Ue(t)
                        }
                    }
                }
                function Ye(t) {
                    return t in He ? He[t] : He[t] = "on" + t
                }
                function ze(t, e, n, i) {
                    var r = !0;
                    if ((t = Qe(t)) && (e = t.a[e.toString()]))
                        for (e = e.concat(),
                        t = 0; t < e.length; t++) {
                            var o = e[t];
                            o && o.capture == n && !o.ra && (o = $e(o, i),
                            r = r && !1 !== o)
                        }
                    return r
                }
                function $e(t, e) {
                    var n = t.listener
                      , i = t.Na || t.src;
                    return t.Ia && Je(t),
                    n.call(i, e)
                }
                function Ze(t, e) {
                    if (t.ra)
                        return !0;
                    if (_e)
                        return $e(t, new Ce(e,this));
                    if (!e)
                        t: {
                            e = ["window", "event"];
                            for (var n = l, i = 0; i < e.length; i++)
                                if (null == (n = n[e[i]])) {
                                    e = null;
                                    break t
                                }
                            e = n
                        }
                    if (e = new Ce(i = e,this),
                    n = !0,
                    !(i.keyCode < 0 || null != i.returnValue)) {
                        t: {
                            var r = !1;
                            if (0 == i.keyCode)
                                try {
                                    i.keyCode = -1;
                                    break t
                                } catch (t) {
                                    r = !0
                                }
                            !r && null != i.returnValue || (i.returnValue = !0)
                        }
                        for (i = [],
                        r = e.b; r; r = r.parentNode)
                            i.push(r);
                        for (t = t.type,
                        r = i.length - 1; 0 <= r; r--) {
                            e.b = i[r];
                            var o = ze(i[r], t, !0, e);
                            n = n && o
                        }
                        for (r = 0; r < i.length; r++)
                            e.b = i[r],
                            o = ze(i[r], t, !1, e),
                            n = n && o
                    }
                    return n
                }
                function Qe(t) {
                    return (t = t[qe])instanceof Ve ? t : null
                }
                var tn = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
                function en(e) {
                    return m(e) ? e : (e[tn] || (e[tn] = function(t) {
                        return e.handleEvent(t)
                    }
                    ),
                    e[tn])
                }
                function nn() {
                    ce.call(this),
                    this.u = new Ve(this),
                    (this.Sb = this).Wa = null
                }
                function rn(t, e, n, i, r) {
                    t.u.add(String(e), n, !1, i, r)
                }
                function on(t, e, n, i, r) {
                    t.u.add(String(e), n, !0, i, r)
                }
                function an(t, e, n, i) {
                    if (!(e = t.u.a[String(e)]))
                        return !0;
                    e = e.concat();
                    for (var r = !0, o = 0; o < e.length; ++o) {
                        var a = e[o];
                        if (a && !a.ra && a.capture == n) {
                            var s = a.listener
                              , u = a.Na || a.src;
                            a.Ia && Fe(t.u, a),
                            r = !1 !== s.call(u, i) && r
                        }
                    }
                    return r && 0 != i.Mb
                }
                function sn(t, e, n) {
                    if (m(t))
                        n && (t = I(t, n));
                    else {
                        if (!t || "function" != typeof t.handleEvent)
                            throw Error("Invalid listener argument");
                        t = I(t.handleEvent, t)
                    }
                    return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0)
                }
                function un(n) {
                    var i = null;
                    return new qt(function(t, e) {
                        -1 == (i = sn(function() {
                            t(void 0)
                        }, n)) && e(Error("Failed to schedule timer."))
                    }
                    ).s(function(t) {
                        throw l.clearTimeout(i),
                        t
                    })
                }
                function cn(t) {
                    if (t.U && "function" == typeof t.U)
                        return t.U();
                    if (h(t))
                        return t.split("");
                    if (v(t)) {
                        for (var e = [], n = t.length, i = 0; i < n; i++)
                            e.push(t[i]);
                        return e
                    }
                    for (i in e = [],
                    n = 0,
                    t)
                        e[n++] = t[i];
                    return e
                }
                function hn(t) {
                    if (t.X && "function" == typeof t.X)
                        return t.X();
                    if (!t.U || "function" != typeof t.U) {
                        if (v(t) || h(t)) {
                            var e = [];
                            t = t.length;
                            for (var n = 0; n < t; n++)
                                e.push(n);
                            return e
                        }
                        for (var i in e = [],
                        n = 0,
                        t)
                            e[n++] = i;
                        return e
                    }
                }
                function ln(t, e) {
                    this.b = {},
                    this.a = [],
                    this.c = 0;
                    var n = arguments.length;
                    if (1 < n) {
                        if (n % 2)
                            throw Error("Uneven number of arguments");
                        for (var i = 0; i < n; i += 2)
                            this.set(arguments[i], arguments[i + 1])
                    } else if (t)
                        if (t instanceof ln)
                            for (n = t.X(),
                            i = 0; i < n.length; i++)
                                this.set(n[i], t.get(n[i]));
                        else
                            for (i in t)
                                this.set(i, t[i])
                }
                function fn(t) {
                    if (t.c != t.a.length) {
                        for (var e = 0, n = 0; e < t.a.length; ) {
                            var i = t.a[e];
                            dn(t.b, i) && (t.a[n++] = i),
                            e++
                        }
                        t.a.length = n
                    }
                    if (t.c != t.a.length) {
                        var r = {};
                        for (n = e = 0; e < t.a.length; )
                            dn(r, i = t.a[e]) || (r[t.a[n++] = i] = 1),
                            e++;
                        t.a.length = n
                    }
                }
                function dn(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                k(nn, ce),
                nn.prototype[xe] = !0,
                nn.prototype.addEventListener = function(t, e, n, i) {
                    Be(this, t, e, n, i)
                }
                ,
                nn.prototype.removeEventListener = function(t, e, n, i) {
                    Xe(this, t, e, n, i)
                }
                ,
                nn.prototype.dispatchEvent = function(t) {
                    var e, n = this.Wa;
                    if (n)
                        for (e = []; n; n = n.Wa)
                            e.push(n);
                    n = this.Sb;
                    var i = t.type || t;
                    if (h(t))
                        t = new De(t,n);
                    else if (t instanceof De)
                        t.target = t.target || n;
                    else {
                        var r = t;
                        J(t = new De(i,n), r)
                    }
                    if (r = !0,
                    e)
                        for (var o = e.length - 1; 0 <= o; o--) {
                            var a = t.b = e[o];
                            r = an(a, i, !0, t) && r
                        }
                    if (r = an(a = t.b = n, i, !0, t) && r,
                    r = an(a, i, !1, t) && r,
                    e)
                        for (o = 0; o < e.length; o++)
                            r = an(a = t.b = e[o], i, !1, t) && r;
                    return r
                }
                ,
                nn.prototype.xa = function() {
                    if (nn.qb.xa.call(this),
                    this.u) {
                        var t, e = this.u;
                        for (t in e.a) {
                            for (var n = e.a[t], i = 0; i < n.length; i++)
                                Ue(n[i]);
                            delete e.a[t],
                            e.b--
                        }
                    }
                    this.Wa = null
                }
                ,
                (t = ln.prototype).U = function() {
                    fn(this);
                    for (var t = [], e = 0; e < this.a.length; e++)
                        t.push(this.b[this.a[e]]);
                    return t
                }
                ,
                t.X = function() {
                    return fn(this),
                    this.a.concat()
                }
                ,
                t.clear = function() {
                    this.b = {},
                    this.c = this.a.length = 0
                }
                ,
                t.get = function(t, e) {
                    return dn(this.b, t) ? this.b[t] : e
                }
                ,
                t.set = function(t, e) {
                    dn(this.b, t) || (this.c++,
                    this.a.push(t)),
                    this.b[t] = e
                }
                ,
                t.forEach = function(t, e) {
                    for (var n = this.X(), i = 0; i < n.length; i++) {
                        var r = n[i]
                          , o = this.get(r);
                        t.call(e, o, r, this)
                    }
                }
                ;
                var pn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
                function vn(t, e) {
                    var n;
                    this.b = this.i = this.f = "",
                    this.l = null,
                    this.g = this.c = "",
                    this.h = !1,
                    t instanceof vn ? (this.h = void 0 !== e ? e : t.h,
                    mn(this, t.f),
                    this.i = t.i,
                    this.b = t.b,
                    gn(this, t.l),
                    this.c = t.c,
                    bn(this, jn(t.a)),
                    this.g = t.g) : t && (n = String(t).match(pn)) ? (this.h = !!e,
                    mn(this, n[1] || "", !0),
                    this.i = En(n[2] || ""),
                    this.b = En(n[3] || "", !0),
                    gn(this, n[4]),
                    this.c = En(n[5] || "", !0),
                    bn(this, n[6] || "", !0),
                    this.g = En(n[7] || "")) : (this.h = !!e,
                    this.a = new Rn(null,this.h))
                }
                function mn(t, e, n) {
                    t.f = n ? En(e, !0) : e,
                    t.f && (t.f = t.f.replace(/:$/, ""))
                }
                function gn(t, e) {
                    if (e) {
                        if (e = Number(e),
                        isNaN(e) || e < 0)
                            throw Error("Bad port number " + e);
                        t.l = e
                    } else
                        t.l = null
                }
                function bn(t, e, n) {
                    e instanceof Rn ? (t.a = e,
                    function(t, e) {
                        e && !t.f && (Dn(t),
                        t.c = null,
                        t.a.forEach(function(t, e) {
                            var n = e.toLowerCase();
                            e != n && (Ln(this, e),
                            Mn(this, n, t))
                        }, t)),
                        t.f = e
                    }(t.a, t.h)) : (n || (e = kn(e, _n)),
                    t.a = new Rn(e,t.h))
                }
                function yn(t, e, n) {
                    t.a.set(e, n)
                }
                function wn(t, e) {
                    return t.a.get(e)
                }
                function In(t) {
                    return t instanceof vn ? new vn(t) : new vn(t,void 0)
                }
                function Tn(t, e) {
                    var n = new vn(null,void 0);
                    return mn(n, "https"),
                    t && (n.b = t),
                    e && (n.c = e),
                    n
                }
                function En(t, e) {
                    return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
                }
                function kn(t, e, n) {
                    return h(t) ? (t = encodeURI(t).replace(e, An),
                    n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                    t) : null
                }
                function An(t) {
                    return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
                }
                vn.prototype.toString = function() {
                    var t = []
                      , e = this.f;
                    e && t.push(kn(e, Sn, !0), ":");
                    var n = this.b;
                    return !n && "file" != e || (t.push("//"),
                    (e = this.i) && t.push(kn(e, Sn, !0), "@"),
                    t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                    null != (n = this.l) && t.push(":", String(n))),
                    (n = this.c) && (this.b && "/" != n.charAt(0) && t.push("/"),
                    t.push(kn(n, "/" == n.charAt(0) ? On : Nn, !0))),
                    (n = this.a.toString()) && t.push("?", n),
                    (n = this.g) && t.push("#", kn(n, Pn)),
                    t.join("")
                }
                ,
                vn.prototype.resolve = function(t) {
                    var e = new vn(this)
                      , n = !!t.f;
                    n ? mn(e, t.f) : n = !!t.i,
                    n ? e.i = t.i : n = !!t.b,
                    n ? e.b = t.b : n = null != t.l;
                    var i = t.c;
                    if (n)
                        gn(e, t.l);
                    else if (n = !!t.c) {
                        if ("/" != i.charAt(0))
                            if (this.b && !this.c)
                                i = "/" + i;
                            else {
                                var r = e.c.lastIndexOf("/");
                                -1 != r && (i = e.c.substr(0, r + 1) + i)
                            }
                        if (".." == (r = i) || "." == r)
                            i = "";
                        else if (vt(r, "./") || vt(r, "/.")) {
                            i = 0 == r.lastIndexOf("/", 0),
                            r = r.split("/");
                            for (var o = [], a = 0; a < r.length; ) {
                                var s = r[a++];
                                "." == s ? i && a == r.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(),
                                i && a == r.length && o.push("")) : (o.push(s),
                                i = !0)
                            }
                            i = o.join("/")
                        } else
                            i = r
                    }
                    return n ? e.c = i : n = "" !== t.a.toString(),
                    n ? bn(e, jn(t.a)) : n = !!t.g,
                    n && (e.g = t.g),
                    e
                }
                ;
                var Sn = /[#\/\?@]/g
                  , Nn = /[#\?:]/g
                  , On = /[#\?]/g
                  , _n = /[#\?@]/g
                  , Pn = /#/g;
                function Rn(t, e) {
                    this.b = this.a = null,
                    this.c = t || null,
                    this.f = !!e
                }
                function Dn(n) {
                    n.a || (n.a = new ln,
                    n.b = 0,
                    n.c && function(t, e) {
                        if (t) {
                            t = t.split("&");
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n].indexOf("=")
                                  , r = null;
                                if (0 <= i) {
                                    var o = t[n].substring(0, i);
                                    r = t[n].substring(i + 1)
                                } else
                                    o = t[n];
                                e(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
                            }
                        }
                    }(n.c, function(t, e) {
                        n.add(decodeURIComponent(t.replace(/\+/g, " ")), e)
                    }))
                }
                function Cn(t) {
                    var e = hn(t);
                    if (void 0 === e)
                        throw Error("Keys are undefined");
                    var n = new Rn(null,void 0);
                    t = cn(t);
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i]
                          , o = t[i];
                        p(o) ? Mn(n, r, o) : n.add(r, o)
                    }
                    return n
                }
                function Ln(t, e) {
                    Dn(t),
                    e = Un(t, e),
                    dn(t.a.b, e) && (t.c = null,
                    t.b -= t.a.get(e).length,
                    dn((t = t.a).b, e) && (delete t.b[e],
                    t.c--,
                    t.a.length > 2 * t.c && fn(t)))
                }
                function xn(t, e) {
                    return Dn(t),
                    e = Un(t, e),
                    dn(t.a.b, e)
                }
                function Mn(t, e, n) {
                    Ln(t, e),
                    0 < n.length && (t.c = null,
                    t.a.set(Un(t, e), H(n)),
                    t.b += n.length)
                }
                function jn(t) {
                    var e = new Rn;
                    return e.c = t.c,
                    t.a && (e.a = new ln(t.a),
                    e.b = t.b),
                    e
                }
                function Un(t, e) {
                    return e = String(e),
                    t.f && (e = e.toLowerCase()),
                    e
                }
                (t = Rn.prototype).add = function(t, e) {
                    Dn(this),
                    this.c = null,
                    t = Un(this, t);
                    var n = this.a.get(t);
                    return n || this.a.set(t, n = []),
                    n.push(e),
                    this.b += 1,
                    this
                }
                ,
                t.clear = function() {
                    this.a = this.c = null,
                    this.b = 0
                }
                ,
                t.forEach = function(n, i) {
                    Dn(this),
                    this.a.forEach(function(t, e) {
                        M(t, function(t) {
                            n.call(i, t, e, this)
                        }, this)
                    }, this)
                }
                ,
                t.X = function() {
                    Dn(this);
                    for (var t = this.a.U(), e = this.a.X(), n = [], i = 0; i < e.length; i++)
                        for (var r = t[i], o = 0; o < r.length; o++)
                            n.push(e[i]);
                    return n
                }
                ,
                t.U = function(t) {
                    Dn(this);
                    var e = [];
                    if (h(t))
                        xn(this, t) && (e = q(e, this.a.get(Un(this, t))));
                    else {
                        t = this.a.U();
                        for (var n = 0; n < t.length; n++)
                            e = q(e, t[n])
                    }
                    return e
                }
                ,
                t.set = function(t, e) {
                    return Dn(this),
                    this.c = null,
                    xn(this, t = Un(this, t)) && (this.b -= this.a.get(t).length),
                    this.a.set(t, [e]),
                    this.b += 1,
                    this
                }
                ,
                t.get = function(t, e) {
                    return t && 0 < (t = this.U(t)).length ? String(t[0]) : e
                }
                ,
                t.toString = function() {
                    if (this.c)
                        return this.c;
                    if (!this.a)
                        return "";
                    for (var t = [], e = this.a.X(), n = 0; n < e.length; n++) {
                        var i = e[n]
                          , r = encodeURIComponent(String(i));
                        i = this.U(i);
                        for (var o = 0; o < i.length; o++) {
                            var a = r;
                            "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))),
                            t.push(a)
                        }
                    }
                    return this.c = t.join("&")
                }
                ;
                var Vn = !me || 9 <= Number(Ae);
                function Fn(t) {
                    var e = document;
                    return h(t) ? e.getElementById(t) : t
                }
                function Kn(n, t) {
                    B(t, function(t, e) {
                        t && "object" == typeof t && t.qa && (t = t.pa()),
                        "style" == e ? n.style.cssText = t : "class" == e ? n.className = t : "for" == e ? n.htmlFor = t : qn.hasOwnProperty(e) ? n.setAttribute(qn[e], t) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? n.setAttribute(e, t) : n[e] = t
                    })
                }
                var qn = {
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    colspan: "colSpan",
                    frameborder: "frameBorder",
                    height: "height",
                    maxlength: "maxLength",
                    nonce: "nonce",
                    role: "role",
                    rowspan: "rowSpan",
                    type: "type",
                    usemap: "useMap",
                    valign: "vAlign",
                    width: "width"
                };
                function Hn(t, e, n) {
                    var i = arguments
                      , r = document
                      , o = String(i[0])
                      , a = i[1];
                    if (!Vn && a && (a.name || a.type)) {
                        if (o = ["<", o],
                        a.name && o.push(' name="', xt(a.name), '"'),
                        a.type) {
                            o.push(' type="', xt(a.type), '"');
                            var s = {};
                            J(s, a),
                            delete s.type,
                            a = s
                        }
                        o.push(">"),
                        o = o.join("")
                    }
                    return o = r.createElement(o),
                    a && (h(a) ? o.className = a : p(a) ? o.className = a.join(" ") : Kn(o, a)),
                    2 < i.length && function(e, n, t) {
                        function i(t) {
                            t && n.appendChild(h(t) ? e.createTextNode(t) : t)
                        }
                        for (var r = 2; r < t.length; r++) {
                            var o = t[r];
                            !v(o) || g(o) && 0 < o.nodeType ? i(o) : M(Bn(o) ? H(o) : o, i)
                        }
                    }(r, o, i),
                    o
                }
                function Bn(t) {
                    if (t && "number" == typeof t.length) {
                        if (g(t))
                            return "function" == typeof t.item || "string" == typeof t.item;
                        if (m(t))
                            return "function" == typeof t.item
                    }
                    return !1
                }
                function Gn(t) {
                    var e = [];
                    return function t(e, n, i) {
                        if (null == n)
                            i.push("null");
                        else {
                            if ("object" == typeof n) {
                                if (p(n)) {
                                    var r = n;
                                    n = r.length,
                                    i.push("[");
                                    for (var o = "", a = 0; a < n; a++)
                                        i.push(o),
                                        t(e, r[a], i),
                                        o = ",";
                                    return void i.push("]")
                                }
                                if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
                                    for (r in i.push("{"),
                                    o = "",
                                    n)
                                        Object.prototype.hasOwnProperty.call(n, r) && ("function" != typeof (a = n[r]) && (i.push(o),
                                        Yn(r, i),
                                        i.push(":"),
                                        t(e, a, i),
                                        o = ","));
                                    return void i.push("}")
                                }
                                n = n.valueOf()
                            }
                            switch (typeof n) {
                            case "string":
                                Yn(n, i);
                                break;
                            case "number":
                                i.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
                                break;
                            case "boolean":
                                i.push(String(n));
                                break;
                            case "function":
                                i.push("null");
                                break;
                            default:
                                throw Error("Unknown type: " + typeof n)
                            }
                        }
                    }(new Wn, t, e),
                    e.join("")
                }
                function Wn() {}
                var Xn = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "/": "\\/",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t",
                    "\v": "\\u000b"
                }
                  , Jn = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
                function Yn(t, e) {
                    e.push('"', t.replace(Jn, function(t) {
                        var e = Xn[t];
                        return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1),
                        Xn[t] = e),
                        e
                    }), '"')
                }
                function zn() {
                    var t = vi();
                    return me && !!Ae && 11 == Ae || /Edge\/\d+/.test(t)
                }
                function $n() {
                    return l.window && l.window.location.href || self && self.location && self.location.href || ""
                }
                function Zn(t, e) {
                    e = e || l.window;
                    var n = "about:blank";
                    t && (n = bt(wt(t)).toString()),
                    e.location.href = n
                }
                function Qn(t) {
                    return !!((t = (t || vi()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/))
                }
                function ti(t) {
                    t = t || l.window;
                    try {
                        t.close()
                    } catch (t) {}
                }
                function ei(t, e, n) {
                    var i = Math.floor(1e9 * Math.random()).toString();
                    e = e || 500,
                    n = n || 600;
                    var r = (window.screen.availHeight - n) / 2
                      , o = (window.screen.availWidth - e) / 2;
                    for (a in e = {
                        width: e,
                        height: n,
                        top: 0 < r ? r : 0,
                        left: 0 < o ? o : 0,
                        location: !0,
                        resizable: !0,
                        statusbar: !0,
                        toolbar: !1
                    },
                    n = vi().toLowerCase(),
                    i && (e.target = i,
                    vt(n, "crios/") && (e.target = "_blank")),
                    fi(vi()) == hi && (t = t || "http://localhost",
                    e.scrollbars = !0),
                    n = t || "",
                    (t = e) || (t = {}),
                    i = window,
                    e = n instanceof gt ? n : wt(void 0 !== n.href ? n.href : String(n)),
                    n = t.target || n.target,
                    r = [],
                    t)
                        switch (a) {
                        case "width":
                        case "height":
                        case "top":
                        case "left":
                            r.push(a + "=" + t[a]);
                            break;
                        case "target":
                        case "noopener":
                        case "noreferrer":
                            break;
                        default:
                            r.push(a + "=" + (t[a] ? 1 : 0))
                        }
                    var a = r.join(",");
                    if ((St("iPhone") && !St("iPod") && !St("iPad") || St("iPad") || St("iPod")) && i.navigator && i.navigator.standalone && n && "_self" != n ? (L(a = i.document.createElement("A"), "HTMLAnchorElement"),
                    e instanceof gt || e instanceof gt || (e = "object" == typeof e && e.qa ? e.pa() : String(e),
                    yt.test(e) || (e = "about:invalid#zClosurez"),
                    e = Et(e)),
                    a.href = bt(e),
                    a.setAttribute("target", n),
                    t.noreferrer && a.setAttribute("rel", "noreferrer"),
                    (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, i, 1),
                    a.dispatchEvent(t),
                    a = {}) : t.noreferrer ? (a = i.open("", n, a),
                    t = bt(e).toString(),
                    a && (be && vt(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"),
                    a.opener = null,
                    t = Pt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + xt(t) + '">'),
                    a.document.write(Ot(t)),
                    a.document.close())) : (a = i.open(bt(e).toString(), n, a)) && t.noopener && (a.opener = null),
                    a)
                        try {
                            a.focus()
                        } catch (t) {}
                    return a
                }
                var ni = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
                  , ii = /^[^@]+@[^@]+$/;
                function ri() {
                    var e = null;
                    return new qt(function(t) {
                        "complete" == l.document.readyState ? t() : (e = function() {
                            t()
                        }
                        ,
                        We(window, "load", e))
                    }
                    ).s(function(t) {
                        throw Xe(window, "load", e),
                        t
                    })
                }
                function oi(t) {
                    return t = t || vi(),
                    !("file:" !== wi() || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
                }
                function ai() {
                    var t = l.window;
                    try {
                        return !(!t || t == t.top)
                    } catch (t) {
                        return !1
                    }
                }
                function si() {
                    return void 0 !== l.WorkerGlobalScope && "function" == typeof l.importScripts
                }
                function ui() {
                    return fl.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : fl.INTERNAL.hasOwnProperty("node") ? "Node" : si() ? "Worker" : "Browser"
                }
                function ci() {
                    var t = ui();
                    return "ReactNative" === t || "Node" === t
                }
                var hi = "Firefox"
                  , li = "Chrome";
                function fi(t) {
                    var e = t.toLowerCase();
                    return vt(e, "opera/") || vt(e, "opr/") || vt(e, "opios/") ? "Opera" : vt(e, "iemobile") ? "IEMobile" : vt(e, "msie") || vt(e, "trident/") ? "IE" : vt(e, "edge/") ? "Edge" : vt(e, "firefox/") ? hi : vt(e, "silk/") ? "Silk" : vt(e, "blackberry") ? "Blackberry" : vt(e, "webos") ? "Webos" : !vt(e, "safari/") || vt(e, "chrome/") || vt(e, "crios/") || vt(e, "android") ? !vt(e, "chrome/") && !vt(e, "crios/") || vt(e, "edge/") ? vt(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : li : "Safari"
                }
                var di = {
                    Vc: "FirebaseCore-web",
                    Xc: "FirebaseUI-web"
                };
                function pi(t, e) {
                    e = e || [];
                    var n, i = [], r = {};
                    for (n in di)
                        r[di[n]] = !0;
                    for (n = 0; n < e.length; n++)
                        void 0 !== r[e[n]] && (delete r[e[n]],
                        i.push(e[n]));
                    return i.sort(),
                    (e = i).length || (e = ["FirebaseCore-web"]),
                    "Browser" === (i = ui()) ? i = fi(r = vi()) : "Worker" === i && (i = fi(r = vi()) + "-" + i),
                    i + "/JsCore/" + t + "/" + e.join(",")
                }
                function vi() {
                    return l.navigator && l.navigator.userAgent || ""
                }
                function mi(t, e) {
                    t = t.split("."),
                    e = e || l;
                    for (var n = 0; n < t.length && "object" == typeof e && null != e; n++)
                        e = e[t[n]];
                    return n != t.length && (e = void 0),
                    e
                }
                function gi() {
                    try {
                        var t = l.localStorage
                          , e = Ai();
                        if (t)
                            return t.setItem(e, "1"),
                            t.removeItem(e),
                            !zn() || !!l.indexedDB
                    } catch (t) {
                        return si() && !!l.indexedDB
                    }
                    return !1
                }
                function bi() {
                    return (yi() || "chrome-extension:" === wi() || oi()) && !ci() && gi() && !si()
                }
                function yi() {
                    return "http:" === wi() || "https:" === wi()
                }
                function wi() {
                    return l.location && l.location.protocol || null
                }
                function Ii(t) {
                    return !Qn(t = t || vi()) && fi(t) != hi
                }
                function Ti(t) {
                    return void 0 === t ? null : Gn(t)
                }
                function Ei(t) {
                    var e, n = {};
                    for (e in t)
                        t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]);
                    return n
                }
                function ki(t) {
                    if (null !== t)
                        return JSON.parse(t)
                }
                function Ai(t) {
                    return t || Math.floor(1e9 * Math.random()).toString()
                }
                function Si(t) {
                    return "Safari" != fi(t = t || vi()) && !t.toLowerCase().match(/iphone|ipad|ipod/)
                }
                function Ni() {
                    var t = l.___jsl;
                    if (t && t.H)
                        for (var e in t.H)
                            if (t.H[e].r = t.H[e].r || [],
                            t.H[e].L = t.H[e].L || [],
                            t.H[e].r = t.H[e].L.concat(),
                            t.CP)
                                for (var n = 0; n < t.CP.length; n++)
                                    t.CP[n] = null
                }
                function Oi(t, e) {
                    if (e < t)
                        throw Error("Short delay should be less than long delay!");
                    this.a = t,
                    this.c = e,
                    t = vi(),
                    e = ui(),
                    this.b = Qn(t) || "ReactNative" === e
                }
                function _i() {
                    var t = l.document;
                    return !t || void 0 === t.visibilityState || "visible" == t.visibilityState
                }
                function Pi(t) {
                    try {
                        var e = new Date(parseInt(t, 10));
                        if (!isNaN(e.getTime()) && !/[^0-9]/.test(t))
                            return e.toUTCString()
                    } catch (t) {}
                    return null
                }
                function Ri() {
                    return !(!mi("fireauth.oauthhelper", l) && !mi("fireauth.iframe", l))
                }
                Oi.prototype.get = function() {
                    var t = l.navigator;
                    return !t || "boolean" != typeof t.onLine || !yi() && "chrome-extension:" !== wi() && void 0 === t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a)
                }
                ;
                var Di, Ci = {};
                function Li(t) {
                    Ci[t] || (Ci[t] = !0,
                    "undefined" != typeof console && "function" == typeof console.warn && console.warn(t))
                }
                try {
                    var xi = {};
                    Object.defineProperty(xi, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 1
                    }),
                    Object.defineProperty(xi, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 2
                    }),
                    Di = 2 == xi.abcd
                } catch (t) {
                    Di = !1
                }
                function Mi(t, e, n) {
                    Di ? Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    }) : t[e] = n
                }
                function ji(t, e) {
                    if (e)
                        for (var n in e)
                            e.hasOwnProperty(n) && Mi(t, n, e[n])
                }
                function Ui(t) {
                    var e = {};
                    return ji(e, t),
                    e
                }
                function Vi(t) {
                    var e = t;
                    if ("object" == typeof t && null != t)
                        for (var n in e = "length"in t ? [] : {},
                        t)
                            Mi(e, n, Vi(t[n]));
                    return e
                }
                function Fi(t) {
                    var e = {}
                      , n = t[qi]
                      , i = t[Hi];
                    if (!(t = t[Bi]) || t != Ki && !n)
                        throw Error("Invalid provider user info!");
                    e[Wi] = i || null,
                    e[Gi] = n || null,
                    Mi(this, Ji, t),
                    Mi(this, Xi, Vi(e))
                }
                var Ki = "EMAIL_SIGNIN"
                  , qi = "email"
                  , Hi = "newEmail"
                  , Bi = "requestType"
                  , Gi = "email"
                  , Wi = "fromEmail"
                  , Xi = "data"
                  , Ji = "operation";
                function Yi(t, e) {
                    this.code = $i + t,
                    this.message = e || Zi[t] || ""
                }
                function zi(t) {
                    var e = t && t.code;
                    return e ? new Yi(e.substring($i.length),t.message) : null
                }
                k(Yi, Error),
                Yi.prototype.A = function() {
                    return {
                        code: this.code,
                        message: this.message
                    }
                }
                ,
                Yi.prototype.toJSON = function() {
                    return this.A()
                }
                ;
                var $i = "auth/"
                  , Zi = {
                    "admin-restricted-operation": "This operation is restricted to administrators only.",
                    "argument-error": "",
                    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                    "cordova-not-ready": "Cordova framework is not ready.",
                    "cors-unsupported": "This browser is not supported.",
                    "credential-already-in-use": "This credential is already associated with a different user account.",
                    "custom-token-mismatch": "The custom token corresponds to a different audience.",
                    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                    "email-already-in-use": "The email address is already in use by another account.",
                    "expired-action-code": "The action code has expired. ",
                    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                    "internal-error": "An internal error has occurred.",
                    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                    "invalid-auth-event": "An internal error has occurred.",
                    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
                    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                    "invalid-email": "The email address is badly formatted.",
                    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                    "invalid-credential": "The supplied auth credential is malformed or has expired.",
                    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                    "wrong-password": "The password is invalid or the user does not have a password.",
                    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                    "invalid-provider-id": "The specified provider ID is invalid.",
                    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                    "missing-continue-uri": "A continue URL must be provided in the request.",
                    "missing-iframe-start": "An internal error has occurred.",
                    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                    "missing-or-invalid-nonce": "The OIDC ID token requires a valid unhashed nonce.",
                    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                    "app-deleted": "This instance of FirebaseApp has been deleted.",
                    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
                    "no-auth-event": "An internal error has occurred.",
                    "no-such-provider": "User was not linked to an account with the given provider.",
                    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                    "provider-already-linked": "User can only be linked to one identity for the given provider.",
                    "quota-exceeded": "The project's quota for this operation has been exceeded.",
                    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                    "rejected-credential": "The request contains malformed or mismatching credentials.",
                    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                    timeout: "The operation has timed out.",
                    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                    "user-cancelled": "User did not grant your application the permissions it requested.",
                    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                    "user-disabled": "The user account has been disabled by an administrator.",
                    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                    "user-signed-out": "",
                    "weak-password": "The password must be 6 characters long or more.",
                    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
                };
                function Qi(t) {
                    var e = wn(t = In(t), tr) || null
                      , n = wn(t, er) || null
                      , i = wn(t, rr) || null;
                    if (i = i && ar[i] || null,
                    !e || !n || !i)
                        throw new Yi("argument-error",tr + ", " + er + "and " + rr + " are required in a valid action code URL.");
                    ji(this, {
                        apiKey: e,
                        operation: i,
                        code: n,
                        continueUrl: wn(t, nr) || null,
                        languageCode: wn(t, ir) || null,
                        tenantId: wn(t, or) || null
                    })
                }
                var tr = "apiKey"
                  , er = "oobCode"
                  , nr = "continueUrl"
                  , ir = "languageCode"
                  , rr = "mode"
                  , or = "tenantId"
                  , ar = {
                    recoverEmail: "RECOVER_EMAIL",
                    resetPassword: "PASSWORD_RESET",
                    signIn: Ki,
                    verifyEmail: "VERIFY_EMAIL"
                };
                function sr(t) {
                    try {
                        return new Qi(t)
                    } catch (t) {
                        return null
                    }
                }
                function ur(t) {
                    var e = t[dr];
                    if (void 0 === e)
                        throw new Yi("missing-continue-uri");
                    if ("string" != typeof e || "string" == typeof e && !e.length)
                        throw new Yi("invalid-continue-uri");
                    this.h = e,
                    this.b = this.a = null,
                    this.g = !1;
                    var n = t[cr];
                    if (n && "object" == typeof n) {
                        e = n[mr];
                        var i = n[pr];
                        if (n = n[vr],
                        "string" == typeof e && e.length) {
                            if (this.a = e,
                            void 0 !== i && "boolean" != typeof i)
                                throw new Yi("argument-error",pr + " property must be a boolean when specified.");
                            if (this.g = !!i,
                            void 0 !== n && ("string" != typeof n || "string" == typeof n && !n.length))
                                throw new Yi("argument-error",vr + " property must be a non empty string when specified.");
                            this.b = n || null
                        } else {
                            if (void 0 !== e)
                                throw new Yi("argument-error",mr + " property must be a non empty string when specified.");
                            if (void 0 !== i || void 0 !== n)
                                throw new Yi("missing-android-pkg-name")
                        }
                    } else if (void 0 !== n)
                        throw new Yi("argument-error",cr + " property must be a non null object when specified.");
                    if (this.f = null,
                    (e = t[fr]) && "object" == typeof e) {
                        if ("string" == typeof (e = e[gr]) && e.length)
                            this.f = e;
                        else if (void 0 !== e)
                            throw new Yi("argument-error",gr + " property must be a non empty string when specified.")
                    } else if (void 0 !== e)
                        throw new Yi("argument-error",fr + " property must be a non null object when specified.");
                    if (void 0 !== (e = t[lr]) && "boolean" != typeof e)
                        throw new Yi("argument-error",lr + " property must be a boolean when specified.");
                    if (this.c = !!e,
                    void 0 !== (t = t[hr]) && ("string" != typeof t || "string" == typeof t && !t.length))
                        throw new Yi("argument-error",hr + " property must be a non empty string when specified.");
                    this.i = t || null
                }
                var cr = "android"
                  , hr = "dynamicLinkDomain"
                  , lr = "handleCodeInApp"
                  , fr = "iOS"
                  , dr = "url"
                  , pr = "installApp"
                  , vr = "minimumVersion"
                  , mr = "packageName"
                  , gr = "bundleId";
                function br(t) {
                    var e = {};
                    for (var n in e.continueUrl = t.h,
                    e.canHandleCodeInApp = t.c,
                    (e.androidPackageName = t.a) && (e.androidMinimumVersion = t.b,
                    e.androidInstallApp = t.g),
                    e.iOSBundleId = t.f,
                    e.dynamicLinkDomain = t.i,
                    e)
                        null === e[n] && delete e[n];
                    return e
                }
                var yr = null
                  , wr = null;
                function Ir(t) {
                    var e = "";
                    return function(i, t) {
                        function e(t) {
                            for (; r < i.length; ) {
                                var e = i.charAt(r++)
                                  , n = wr[e];
                                if (null != n)
                                    return n;
                                if (!/^[\s\xa0]*$/.test(e))
                                    throw Error("Unknown base64 encoding at char: " + e)
                            }
                            return t
                        }
                        !function() {
                            if (!yr) {
                                yr = {},
                                wr = {};
                                for (var t = 0; t < 65; t++)
                                    yr[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t),
                                    62 <= (wr[yr[t]] = t) && (wr["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)] = t)
                            }
                        }();
                        for (var r = 0; ; ) {
                            var n = e(-1)
                              , o = e(0)
                              , a = e(64)
                              , s = e(64);
                            if (64 === s && -1 === n)
                                break;
                            t(n << 2 | o >> 4),
                            64 != a && (t(o << 4 & 240 | a >> 2),
                            64 != s && t(a << 6 & 192 | s))
                        }
                    }(t, function(t) {
                        e += String.fromCharCode(t)
                    }),
                    e
                }
                function Tr(t) {
                    this.f = t.sub,
                    this.a = t.provider_id || t.firebase && t.firebase.sign_in_provider || null,
                    this.c = t.firebase && t.firebase.tenant || null,
                    this.b = !!t.is_anonymous || "anonymous" == this.a
                }
                function Er(t) {
                    return (t = kr(t)) && t.sub && t.iss && t.aud && t.exp ? new Tr(t) : null
                }
                function kr(t) {
                    if (!t)
                        return null;
                    if (3 != (t = t.split(".")).length)
                        return null;
                    for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++)
                        t += ".";
                    try {
                        return JSON.parse(Ir(t))
                    } catch (t) {}
                    return null
                }
                Tr.prototype.R = function() {
                    return this.c
                }
                ,
                Tr.prototype.g = function() {
                    return this.b
                }
                ;
                var Ar, Sr = {
                    ad: {
                        bb: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                        ib: "https://securetoken.googleapis.com/v1/token",
                        id: "p"
                    },
                    cd: {
                        bb: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                        ib: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                        id: "s"
                    },
                    dd: {
                        bb: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                        ib: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                        id: "t"
                    }
                };
                function Nr(t) {
                    for (var e in Sr)
                        if (Sr[e].id === t)
                            return {
                                firebaseEndpoint: (t = Sr[e]).bb,
                                secureTokenEndpoint: t.ib
                            };
                    return null
                }
                Ar = Nr("__EID__") ? "__EID__" : void 0;
                var Or = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
                  , _r = ["client_id", "response_type", "scope", "redirect_uri", "state"]
                  , Pr = {
                    Wc: {
                        Oa: "locale",
                        Da: 500,
                        Ca: 600,
                        Pa: "facebook.com",
                        hb: _r
                    },
                    Yc: {
                        Oa: null,
                        Da: 500,
                        Ca: 620,
                        Pa: "github.com",
                        hb: _r
                    },
                    Zc: {
                        Oa: "hl",
                        Da: 515,
                        Ca: 680,
                        Pa: "google.com",
                        hb: _r
                    },
                    ed: {
                        Oa: "lang",
                        Da: 485,
                        Ca: 705,
                        Pa: "twitter.com",
                        hb: Or
                    }
                };
                function Rr(t) {
                    for (var e in Pr)
                        if (Pr[e].Pa == t)
                            return Pr[e];
                    return null
                }
                function Dr(t) {
                    var e = {};
                    e["facebook.com"] = jr,
                    e["google.com"] = Vr,
                    e["github.com"] = Ur,
                    e["twitter.com"] = Fr;
                    var n = t && t[Lr];
                    try {
                        if (n)
                            return e[n] ? new e[n](t) : new Mr(t);
                        if (void 0 !== t[Cr])
                            return new xr(t)
                    } catch (t) {}
                    return null
                }
                var Cr = "idToken"
                  , Lr = "providerId";
                function xr(t) {
                    var e = t[Lr];
                    if (!e && t[Cr]) {
                        var n = Er(t[Cr]);
                        n && n.a && (e = n.a)
                    }
                    if (!e)
                        throw Error("Invalid additional user info!");
                    "anonymous" != e && "custom" != e || (e = null),
                    n = !1,
                    void 0 !== t.isNewUser ? n = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (n = !0),
                    Mi(this, "providerId", e),
                    Mi(this, "isNewUser", n)
                }
                function Mr(t) {
                    xr.call(this, t),
                    Mi(this, "profile", Vi((t = ki(t.rawUserInfo || "{}")) || {}))
                }
                function jr(t) {
                    if (Mr.call(this, t),
                    "facebook.com" != this.providerId)
                        throw Error("Invalid provider ID!")
                }
                function Ur(t) {
                    if (Mr.call(this, t),
                    "github.com" != this.providerId)
                        throw Error("Invalid provider ID!");
                    Mi(this, "username", this.profile && this.profile.login || null)
                }
                function Vr(t) {
                    if (Mr.call(this, t),
                    "google.com" != this.providerId)
                        throw Error("Invalid provider ID!")
                }
                function Fr(t) {
                    if (Mr.call(this, t),
                    "twitter.com" != this.providerId)
                        throw Error("Invalid provider ID!");
                    Mi(this, "username", t.screenName || null)
                }
                function Kr(t) {
                    var e = In(t)
                      , n = wn(e, "link")
                      , i = wn(In(n), "link");
                    return wn(In(e = wn(e, "deep_link_id")), "link") || e || i || n || t
                }
                function qr() {}
                function Hr(t, n) {
                    return t.then(function(t) {
                        if (t[Da]) {
                            var e = Er(t[Da]);
                            if (!e || n != e.f)
                                throw new Yi("user-mismatch");
                            return t
                        }
                        throw new Yi("user-mismatch")
                    }).s(function(t) {
                        throw t && t.code && t.code == $i + "user-not-found" ? new Yi("user-mismatch") : t
                    })
                }
                function Br(t, e) {
                    if (!e)
                        throw new Yi("internal-error","failed to construct a credential");
                    this.a = e,
                    Mi(this, "providerId", t),
                    Mi(this, "signInMethod", t)
                }
                function Gr(t) {
                    return {
                        pendingToken: t.a,
                        requestUri: "http://localhost"
                    }
                }
                function Wr(t) {
                    if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken)
                        try {
                            return new Br(t.providerId,t.pendingToken)
                        } catch (t) {}
                    return null
                }
                function Xr(t, e, n) {
                    if (this.a = null,
                    e.idToken || e.accessToken)
                        e.idToken && Mi(this, "idToken", e.idToken),
                        e.accessToken && Mi(this, "accessToken", e.accessToken),
                        e.nonce && !e.pendingToken && Mi(this, "nonce", e.nonce),
                        e.pendingToken && (this.a = e.pendingToken);
                    else {
                        if (!e.oauthToken || !e.oauthTokenSecret)
                            throw new Yi("internal-error","failed to construct a credential");
                        Mi(this, "accessToken", e.oauthToken),
                        Mi(this, "secret", e.oauthTokenSecret)
                    }
                    Mi(this, "providerId", t),
                    Mi(this, "signInMethod", n)
                }
                function Jr(t) {
                    var e = {};
                    return t.idToken && (e.id_token = t.idToken),
                    t.accessToken && (e.access_token = t.accessToken),
                    t.secret && (e.oauth_token_secret = t.secret),
                    e.providerId = t.providerId,
                    t.nonce && !t.a && (e.nonce = t.nonce),
                    e = {
                        postBody: Cn(e).toString(),
                        requestUri: "http://localhost"
                    },
                    t.a && (delete e.postBody,
                    e.pendingToken = t.a),
                    e
                }
                function Yr(t) {
                    if (t && t.providerId && t.signInMethod) {
                        var e = {
                            idToken: t.oauthIdToken,
                            accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                            oauthTokenSecret: t.oauthTokenSecret,
                            oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                            nonce: t.nonce,
                            pendingToken: t.pendingToken
                        };
                        try {
                            return new Xr(t.providerId,e,t.signInMethod)
                        } catch (t) {}
                    }
                    return null
                }
                function zr(t, e) {
                    this.Fc = e || [],
                    ji(this, {
                        providerId: t,
                        isOAuthProvider: !0
                    }),
                    this.zb = {},
                    this.cb = (Rr(t) || {}).Oa || null,
                    this.ab = null
                }
                function $r(t) {
                    if ("string" != typeof t || 0 != t.indexOf("saml."))
                        throw new Yi("argument-error",'SAML provider IDs must be prefixed with "saml."');
                    zr.call(this, t, [])
                }
                function Zr(t) {
                    zr.call(this, t, _r),
                    this.a = []
                }
                function Qr() {
                    Zr.call(this, "facebook.com")
                }
                function to(t) {
                    if (!t)
                        throw new Yi("argument-error","credential failed: expected 1 argument (the OAuth access token).");
                    var e = t;
                    return g(t) && (e = t.accessToken),
                    (new Qr).credential({
                        accessToken: e
                    })
                }
                function eo() {
                    Zr.call(this, "github.com")
                }
                function no(t) {
                    if (!t)
                        throw new Yi("argument-error","credential failed: expected 1 argument (the OAuth access token).");
                    var e = t;
                    return g(t) && (e = t.accessToken),
                    (new eo).credential({
                        accessToken: e
                    })
                }
                function io() {
                    Zr.call(this, "google.com"),
                    this.wa("profile")
                }
                function ro(t, e) {
                    var n = t;
                    return g(t) && (n = t.idToken,
                    e = t.accessToken),
                    (new io).credential({
                        idToken: n,
                        accessToken: e
                    })
                }
                function oo() {
                    zr.call(this, "twitter.com", Or)
                }
                function ao(t, e) {
                    var n = t;
                    if (g(n) || (n = {
                        oauthToken: t,
                        oauthTokenSecret: e
                    }),
                    !n.oauthToken || !n.oauthTokenSecret)
                        throw new Yi("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");
                    return new Xr("twitter.com",n,"twitter.com")
                }
                function so(t, e, n) {
                    this.a = t,
                    this.c = e,
                    Mi(this, "providerId", "password"),
                    Mi(this, "signInMethod", n === co.EMAIL_LINK_SIGN_IN_METHOD ? co.EMAIL_LINK_SIGN_IN_METHOD : co.EMAIL_PASSWORD_SIGN_IN_METHOD)
                }
                function uo(t) {
                    return t && t.email && t.password ? new so(t.email,t.password,t.signInMethod) : null
                }
                function co() {
                    ji(this, {
                        providerId: "password",
                        isOAuthProvider: !1
                    })
                }
                function ho(t, e) {
                    if (!(e = lo(e)))
                        throw new Yi("argument-error","Invalid email link!");
                    return new so(t,e.code,co.EMAIL_LINK_SIGN_IN_METHOD)
                }
                function lo(t) {
                    return (t = sr(t = Kr(t))) && t.operation === Ki ? t : null
                }
                function fo(t) {
                    if (!(t.Ua && t.Ta || t.Fa && t.ba))
                        throw new Yi("internal-error");
                    this.a = t,
                    Mi(this, "providerId", "phone"),
                    Mi(this, "signInMethod", "phone")
                }
                function po(e) {
                    if (e && "phone" === e.providerId && (e.verificationId && e.verificationCode || e.temporaryProof && e.phoneNumber)) {
                        var n = {};
                        return M(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(t) {
                            e[t] && (n[t] = e[t])
                        }),
                        new fo(n)
                    }
                    return null
                }
                function vo(t) {
                    return t.a.Fa && t.a.ba ? {
                        temporaryProof: t.a.Fa,
                        phoneNumber: t.a.ba
                    } : {
                        sessionInfo: t.a.Ua,
                        code: t.a.Ta
                    }
                }
                function mo(t) {
                    try {
                        this.a = t || fl.auth()
                    } catch (t) {
                        throw new Yi("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
                    }
                    ji(this, {
                        providerId: "phone",
                        isOAuthProvider: !1
                    })
                }
                function go(t, e) {
                    if (!t)
                        throw new Yi("missing-verification-id");
                    if (!e)
                        throw new Yi("missing-verification-code");
                    return new fo({
                        Ua: t,
                        Ta: e
                    })
                }
                function bo(t) {
                    if (t.temporaryProof && t.phoneNumber)
                        return new fo({
                            Fa: t.temporaryProof,
                            ba: t.phoneNumber
                        });
                    var e = t && t.providerId;
                    if (!e || "password" === e)
                        return null;
                    var n = t && t.oauthAccessToken
                      , i = t && t.oauthTokenSecret
                      , r = t && t.nonce
                      , o = t && t.oauthIdToken
                      , a = t && t.pendingToken;
                    try {
                        switch (e) {
                        case "google.com":
                            return ro(o, n);
                        case "facebook.com":
                            return to(n);
                        case "github.com":
                            return no(n);
                        case "twitter.com":
                            return ao(n, i);
                        default:
                            return n || i || o || a ? a ? 0 == e.indexOf("saml.") ? new Br(e,a) : new Xr(e,{
                                pendingToken: a,
                                idToken: t.oauthIdToken,
                                accessToken: t.oauthAccessToken
                            },e) : new Zr(e).credential({
                                idToken: o,
                                accessToken: n,
                                rawNonce: r
                            }) : null
                        }
                    } catch (t) {
                        return null
                    }
                }
                function yo(t) {
                    if (!t.isOAuthProvider)
                        throw new Yi("invalid-oauth-provider")
                }
                function wo(t, e, n, i, r, o, a) {
                    if (this.c = t,
                    this.b = e || null,
                    this.g = n || null,
                    this.f = i || null,
                    this.i = o || null,
                    this.h = a || null,
                    this.a = r || null,
                    !this.g && !this.a)
                        throw new Yi("invalid-auth-event");
                    if (this.g && this.a)
                        throw new Yi("invalid-auth-event");
                    if (this.g && !this.f)
                        throw new Yi("invalid-auth-event")
                }
                function Io(t) {
                    return (t = t || {}).type ? new wo(t.type,t.eventId,t.urlResponse,t.sessionId,t.error && zi(t.error),t.postBody,t.tenantId) : null
                }
                function To() {
                    this.b = null,
                    this.a = []
                }
                k(Mr, xr),
                k(jr, Mr),
                k(Ur, Mr),
                k(Vr, Mr),
                k(Fr, Mr),
                Br.prototype.na = function(t) {
                    return za(t, Gr(this))
                }
                ,
                Br.prototype.b = function(t, e) {
                    var n = Gr(this);
                    return n.idToken = e,
                    $a(t, n)
                }
                ,
                Br.prototype.f = function(t, e) {
                    return Hr(Za(t, Gr(this)), e)
                }
                ,
                Br.prototype.A = function() {
                    return {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod,
                        pendingToken: this.a
                    }
                }
                ,
                Xr.prototype.na = function(t) {
                    return za(t, Jr(this))
                }
                ,
                Xr.prototype.b = function(t, e) {
                    var n = Jr(this);
                    return n.idToken = e,
                    $a(t, n)
                }
                ,
                Xr.prototype.f = function(t, e) {
                    return Hr(Za(t, Jr(this)), e)
                }
                ,
                Xr.prototype.A = function() {
                    var t = {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod
                    };
                    return this.idToken && (t.oauthIdToken = this.idToken),
                    this.accessToken && (t.oauthAccessToken = this.accessToken),
                    this.secret && (t.oauthTokenSecret = this.secret),
                    this.nonce && (t.nonce = this.nonce),
                    this.a && (t.pendingToken = this.a),
                    t
                }
                ,
                zr.prototype.Ea = function(t) {
                    return this.zb = W(t),
                    this
                }
                ,
                k($r, zr),
                k(Zr, zr),
                Zr.prototype.wa = function(t) {
                    return V(this.a, t) || this.a.push(t),
                    this
                }
                ,
                Zr.prototype.Hb = function() {
                    return H(this.a)
                }
                ,
                Zr.prototype.credential = function(t, e) {
                    var n;
                    if (!(n = g(t) ? {
                        idToken: t.idToken || null,
                        accessToken: t.accessToken || null,
                        nonce: t.rawNonce || null
                    } : {
                        idToken: t || null,
                        accessToken: e || null
                    }).idToken && !n.accessToken)
                        throw new Yi("argument-error","credential failed: must provide the ID token and/or the access token.");
                    return new Xr(this.providerId,n,this.providerId)
                }
                ,
                k(Qr, Zr),
                Mi(Qr, "PROVIDER_ID", "facebook.com"),
                Mi(Qr, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"),
                k(eo, Zr),
                Mi(eo, "PROVIDER_ID", "github.com"),
                Mi(eo, "GITHUB_SIGN_IN_METHOD", "github.com"),
                k(io, Zr),
                Mi(io, "PROVIDER_ID", "google.com"),
                Mi(io, "GOOGLE_SIGN_IN_METHOD", "google.com"),
                k(oo, zr),
                Mi(oo, "PROVIDER_ID", "twitter.com"),
                Mi(oo, "TWITTER_SIGN_IN_METHOD", "twitter.com"),
                so.prototype.na = function(t) {
                    return this.signInMethod == co.EMAIL_LINK_SIGN_IN_METHOD ? Ns(t, as, {
                        email: this.a,
                        oobCode: this.c
                    }) : Ns(t, Es, {
                        email: this.a,
                        password: this.c
                    })
                }
                ,
                so.prototype.b = function(t, e) {
                    return this.signInMethod == co.EMAIL_LINK_SIGN_IN_METHOD ? Ns(t, ss, {
                        idToken: e,
                        email: this.a,
                        oobCode: this.c
                    }) : Ns(t, gs, {
                        idToken: e,
                        email: this.a,
                        password: this.c
                    })
                }
                ,
                so.prototype.f = function(t, e) {
                    return Hr(this.na(t), e)
                }
                ,
                so.prototype.A = function() {
                    return {
                        email: this.a,
                        password: this.c,
                        signInMethod: this.signInMethod
                    }
                }
                ,
                ji(co, {
                    PROVIDER_ID: "password"
                }),
                ji(co, {
                    EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
                }),
                ji(co, {
                    EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
                }),
                fo.prototype.na = function(t) {
                    return t.Va(vo(this))
                }
                ,
                fo.prototype.b = function(t, e) {
                    var n = vo(this);
                    return n.idToken = e,
                    Ns(t, As, n)
                }
                ,
                fo.prototype.f = function(t, e) {
                    var n = vo(this);
                    return n.operation = "REAUTH",
                    Hr(t = Ns(t, Ss, n), e)
                }
                ,
                fo.prototype.A = function() {
                    var t = {
                        providerId: "phone"
                    };
                    return this.a.Ua && (t.verificationId = this.a.Ua),
                    this.a.Ta && (t.verificationCode = this.a.Ta),
                    this.a.Fa && (t.temporaryProof = this.a.Fa),
                    this.a.ba && (t.phoneNumber = this.a.ba),
                    t
                }
                ,
                mo.prototype.Va = function(e, n) {
                    var i = this.a.b;
                    return Yt(n.verify()).then(function(t) {
                        if (!h(t))
                            throw new Yi("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                        switch (n.type) {
                        case "recaptcha":
                            return function(t, e) {
                                return Ns(t, vs, e)
                            }(i, {
                                phoneNumber: e,
                                recaptchaToken: t
                            }).then(function(t) {
                                return "function" == typeof n.reset && n.reset(),
                                t
                            }, function(t) {
                                throw "function" == typeof n.reset && n.reset(),
                                t
                            });
                        default:
                            throw new Yi("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
                        }
                    })
                }
                ,
                ji(mo, {
                    PROVIDER_ID: "phone"
                }),
                ji(mo, {
                    PHONE_SIGN_IN_METHOD: "phone"
                }),
                wo.prototype.getUid = function() {
                    var t = [];
                    return t.push(this.c),
                    this.b && t.push(this.b),
                    this.f && t.push(this.f),
                    this.h && t.push(this.h),
                    t.join("-")
                }
                ,
                wo.prototype.R = function() {
                    return this.h
                }
                ,
                wo.prototype.A = function() {
                    return {
                        type: this.c,
                        eventId: this.b,
                        urlResponse: this.g,
                        sessionId: this.f,
                        postBody: this.i,
                        tenantId: this.h,
                        error: this.a && this.a.A()
                    }
                }
                ;
                var Eo, ko = null;
                function Ao(t) {
                    var e = "unauthorized-domain"
                      , n = void 0
                      , i = In(t);
                    t = i.b,
                    "chrome-extension" == (i = i.f) ? n = Lt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? n = Lt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment",
                    Yi.call(this, e, n)
                }
                function So(t, e, n) {
                    Yi.call(this, t, n),
                    (t = e || {}).Ab && Mi(this, "email", t.Ab),
                    t.ba && Mi(this, "phoneNumber", t.ba),
                    t.credential && Mi(this, "credential", t.credential),
                    t.Qb && Mi(this, "tenantId", t.Qb)
                }
                function No(t) {
                    if (t.code) {
                        var e = t.code || "";
                        0 == e.indexOf($i) && (e = e.substring($i.length));
                        var n = {
                            credential: bo(t),
                            Qb: t.tenantId
                        };
                        if (t.email)
                            n.Ab = t.email;
                        else if (t.phoneNumber)
                            n.ba = t.phoneNumber;
                        else if (!n.credential)
                            return new Yi(e,t.message || void 0);
                        return new So(e,n,t.message)
                    }
                    return null
                }
                function Oo() {}
                function _o(t) {
                    return t.c || (t.c = t.b())
                }
                function Po() {}
                function Ro(t) {
                    if (t.f || "undefined" != typeof XMLHttpRequest || "undefined" == typeof ActiveXObject)
                        return t.f;
                    for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) {
                        var i = e[n];
                        try {
                            return new ActiveXObject(i),
                            t.f = i
                        } catch (t) {}
                    }
                    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                }
                function Do() {}
                function Co() {
                    this.a = new XDomainRequest,
                    this.readyState = 0,
                    this.onreadystatechange = null,
                    this.responseType = this.responseText = this.response = "",
                    this.status = -1,
                    this.statusText = "",
                    this.a.onload = I(this.fc, this),
                    this.a.onerror = I(this.Ib, this),
                    this.a.onprogress = I(this.gc, this),
                    this.a.ontimeout = I(this.kc, this)
                }
                function Lo(t, e) {
                    t.readyState = e,
                    t.onreadystatechange && t.onreadystatechange()
                }
                function xo(t, e, n) {
                    this.reset(t, e, n, void 0, void 0)
                }
                function Mo(t) {
                    this.f = t,
                    this.b = this.c = this.a = null
                }
                function jo(t, e) {
                    this.name = t,
                    this.value = e
                }
                k(Ao, Yi),
                k(So, Yi),
                So.prototype.A = function() {
                    var t = {
                        code: this.code,
                        message: this.message
                    };
                    this.email && (t.email = this.email),
                    this.phoneNumber && (t.phoneNumber = this.phoneNumber),
                    this.tenantId && (t.tenantId = this.tenantId);
                    var e = this.credential && this.credential.A();
                    return e && J(t, e),
                    t
                }
                ,
                So.prototype.toJSON = function() {
                    return this.A()
                }
                ,
                Oo.prototype.c = null,
                k(Po, Oo),
                Po.prototype.a = function() {
                    var t = Ro(this);
                    return t ? new ActiveXObject(t) : new XMLHttpRequest
                }
                ,
                Po.prototype.b = function() {
                    var t = {};
                    return Ro(this) && (t[0] = !0,
                    t[1] = !0),
                    t
                }
                ,
                Eo = new Po,
                k(Do, Oo),
                Do.prototype.a = function() {
                    var t = new XMLHttpRequest;
                    if ("withCredentials"in t)
                        return t;
                    if ("undefined" != typeof XDomainRequest)
                        return new Co;
                    throw Error("Unsupported browser")
                }
                ,
                Do.prototype.b = function() {
                    return {}
                }
                ,
                (t = Co.prototype).open = function(t, e, n) {
                    if (null != n && !n)
                        throw Error("Only async requests are supported.");
                    this.a.open(t, e)
                }
                ,
                t.send = function(t) {
                    if (t) {
                        if ("string" != typeof t)
                            throw Error("Only string data is supported");
                        this.a.send(t)
                    } else
                        this.a.send()
                }
                ,
                t.abort = function() {
                    this.a.abort()
                }
                ,
                t.setRequestHeader = function() {}
                ,
                t.getResponseHeader = function(t) {
                    return "content-type" == t.toLowerCase() ? this.a.contentType : ""
                }
                ,
                t.fc = function() {
                    this.status = 200,
                    this.response = this.responseText = this.a.responseText,
                    Lo(this, 4)
                }
                ,
                t.Ib = function() {
                    this.status = 500,
                    this.response = this.responseText = "",
                    Lo(this, 4)
                }
                ,
                t.kc = function() {
                    this.Ib()
                }
                ,
                t.gc = function() {
                    this.status = 200,
                    Lo(this, 1)
                }
                ,
                t.getAllResponseHeaders = function() {
                    return "content-type: " + this.a.contentType
                }
                ,
                xo.prototype.a = null,
                xo.prototype.reset = function(t, e, n, i, r) {
                    delete this.a
                }
                ,
                jo.prototype.toString = function() {
                    return this.name
                }
                ;
                var Uo = new jo("SEVERE",1e3)
                  , Vo = new jo("WARNING",900)
                  , Fo = new jo("CONFIG",700)
                  , Ko = new jo("FINE",500);
                Mo.prototype.log = function(t, e, n) {
                    if (t.value >= function t(e) {
                        return e.c ? e.c : e.a ? t(e.a) : (O("Root logger has no level set."),
                        null)
                    }(this).value)
                        for (m(e) && (e = e()),
                        t = new xo(t,String(e),this.f),
                        n && (t.a = n),
                        n = this; n; )
                            n = n.a
                }
                ;
                var qo, Ho = {}, Bo = null;
                function Go(t) {
                    var e;
                    if (Bo || (Bo = new Mo(""),
                    (Ho[""] = Bo).c = Fo),
                    !(e = Ho[t])) {
                        e = new Mo(t);
                        var n = t.lastIndexOf(".")
                          , i = t.substr(n + 1);
                        (n = Go(t.substr(0, n))).b || (n.b = {}),
                        (n.b[i] = e).a = n,
                        Ho[t] = e
                    }
                    return e
                }
                function Wo(t, e) {
                    t && t.log(Ko, e, void 0)
                }
                function Xo(t) {
                    this.f = t
                }
                function Jo(t) {
                    nn.call(this),
                    this.o = t,
                    this.readyState = Yo,
                    this.status = 0,
                    this.responseType = this.responseText = this.response = this.statusText = "",
                    this.onreadystatechange = null,
                    this.i = new Headers,
                    this.b = null,
                    this.m = "GET",
                    this.g = "",
                    this.a = !1,
                    this.h = Go("goog.net.FetchXmlHttp"),
                    this.l = this.c = this.f = null
                }
                k(Xo, Oo),
                Xo.prototype.a = function() {
                    return new Jo(this.f)
                }
                ,
                Xo.prototype.b = (qo = {},
                function() {
                    return qo
                }
                ),
                k(Jo, nn);
                var Yo = 0;
                function zo(t) {
                    t.c.read().then(t.ec.bind(t)).catch(t.Ma.bind(t))
                }
                function $o(t, e) {
                    e && t.f && (t.status = t.f.status,
                    t.statusText = t.f.statusText),
                    t.readyState = 4,
                    t.f = null,
                    t.c = null,
                    t.l = null,
                    Zo(t)
                }
                function Zo(t) {
                    t.onreadystatechange && t.onreadystatechange.call(t)
                }
                function Qo(t) {
                    nn.call(this),
                    this.headers = new ln,
                    this.B = t || null,
                    this.c = !1,
                    this.w = this.a = null,
                    this.h = this.O = this.l = "",
                    this.f = this.J = this.i = this.I = !1,
                    this.g = 0,
                    this.o = null,
                    this.m = ta,
                    this.v = this.P = !1
                }
                (t = Jo.prototype).open = function(t, e) {
                    if (this.readyState != Yo)
                        throw this.abort(),
                        Error("Error reopening a connection");
                    this.m = t,
                    this.g = e,
                    this.readyState = 1,
                    Zo(this)
                }
                ,
                t.send = function(t) {
                    if (1 != this.readyState)
                        throw this.abort(),
                        Error("need to call open() first. ");
                    this.a = !0;
                    var e = {
                        headers: this.i,
                        method: this.m,
                        credentials: void 0,
                        cache: void 0
                    };
                    t && (e.body = t),
                    this.o.fetch(new Request(this.g,e)).then(this.jc.bind(this), this.Ma.bind(this))
                }
                ,
                t.abort = function() {
                    this.response = this.responseText = "",
                    this.i = new Headers,
                    this.status = 0,
                    this.c && this.c.cancel("Request was aborted."),
                    1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1,
                    $o(this, !1)),
                    this.readyState = Yo
                }
                ,
                t.jc = function(t) {
                    this.a && (this.f = t,
                    this.b || (this.b = t.headers,
                    this.readyState = 2,
                    Zo(this)),
                    this.a && (this.readyState = 3,
                    Zo(this),
                    this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.hc.bind(this), this.Ma.bind(this)) : void 0 !== l.ReadableStream && "body"in t ? (this.response = this.responseText = "",
                    this.c = t.body.getReader(),
                    this.l = new TextDecoder,
                    zo(this)) : t.text().then(this.ic.bind(this), this.Ma.bind(this)))))
                }
                ,
                t.ec = function(t) {
                    if (this.a) {
                        var e = this.l.decode(t.value ? t.value : new Uint8Array(0), {
                            stream: !t.done
                        });
                        e && (this.response = this.responseText += e),
                        t.done ? $o(this, !0) : Zo(this),
                        3 == this.readyState && zo(this)
                    }
                }
                ,
                t.ic = function(t) {
                    this.a && (this.response = this.responseText = t,
                    $o(this, !0))
                }
                ,
                t.hc = function(t) {
                    this.a && (this.response = t,
                    $o(this, !0))
                }
                ,
                t.Ma = function(t) {
                    var e = this.h;
                    e && e.log(Vo, "Failed to fetch url " + this.g, t instanceof Error ? t : Error(t)),
                    this.a && $o(this, !0)
                }
                ,
                t.setRequestHeader = function(t, e) {
                    this.i.append(t, e)
                }
                ,
                t.getResponseHeader = function(t) {
                    return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.h) && t.log(Vo, "Attempting to get response header but no headers have been received for url: " + this.g, void 0),
                    "")
                }
                ,
                t.getAllResponseHeaders = function() {
                    if (!this.b) {
                        var t = this.h;
                        return t && t.log(Vo, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0),
                        ""
                    }
                    t = [];
                    for (var e = this.b.entries(), n = e.next(); !n.done; )
                        n = n.value,
                        t.push(n[0] + ": " + n[1]),
                        n = e.next();
                    return t.join("\r\n")
                }
                ,
                k(Qo, nn);
                var ta = "";
                Qo.prototype.b = Go("goog.net.XhrIo");
                var ea = /^https?$/i
                  , na = ["POST", "PUT"];
                function ia(e, t, n, i, r) {
                    if (e.a)
                        throw Error("[goog.net.XhrIo] Object is active with another request=" + e.l + "; newUri=" + t);
                    n = n ? n.toUpperCase() : "GET",
                    e.l = t,
                    e.h = "",
                    e.O = n,
                    e.I = !1,
                    e.c = !0,
                    e.a = e.B ? e.B.a() : Eo.a(),
                    e.w = e.B ? _o(e.B) : _o(Eo),
                    e.a.onreadystatechange = I(e.Lb, e);
                    try {
                        Wo(e.b, fa(e, "Opening Xhr")),
                        e.J = !0,
                        e.a.open(n, String(t), !0),
                        e.J = !1
                    } catch (t) {
                        return Wo(e.b, fa(e, "Error opening Xhr: " + t.message)),
                        void oa(e, t)
                    }
                    t = i || "";
                    var o = new ln(e.headers);
                    r && function(t, e) {
                        if (t.forEach && "function" == typeof t.forEach)
                            t.forEach(e, void 0);
                        else if (v(t) || h(t))
                            M(t, e, void 0);
                        else
                            for (var n = hn(t), i = cn(t), r = i.length, o = 0; o < r; o++)
                                e.call(void 0, i[o], n && n[o], t)
                    }(r, function(t, e) {
                        o.set(e, t)
                    }),
                    r = function(t) {
                        t: {
                            for (var e = ra, n = t.length, i = h(t) ? t.split("") : t, r = 0; r < n; r++)
                                if (r in i && e.call(void 0, i[r], r, t)) {
                                    e = r;
                                    break t
                                }
                            e = -1
                        }
                        return e < 0 ? null : h(t) ? t.charAt(e) : t[e]
                    }(o.X()),
                    i = l.FormData && t instanceof l.FormData,
                    !V(na, n) || r || i || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"),
                    o.forEach(function(t, e) {
                        this.a.setRequestHeader(e, t)
                    }, e),
                    e.m && (e.a.responseType = e.m),
                    "withCredentials"in e.a && e.a.withCredentials !== e.P && (e.a.withCredentials = e.P);
                    try {
                        ca(e),
                        0 < e.g && (e.v = function(t) {
                            return me && Ne(9) && "number" == typeof t.timeout && void 0 !== t.ontimeout
                        }(e.a),
                        Wo(e.b, fa(e, "Will abort after " + e.g + "ms if incomplete, xhr2 " + e.v)),
                        e.v ? (e.a.timeout = e.g,
                        e.a.ontimeout = I(e.Ga, e)) : e.o = sn(e.Ga, e.g, e)),
                        Wo(e.b, fa(e, "Sending request")),
                        e.i = !0,
                        e.a.send(t),
                        e.i = !1
                    } catch (t) {
                        Wo(e.b, fa(e, "Send error: " + t.message)),
                        oa(e, t)
                    }
                }
                function ra(t) {
                    return "content-type" == t.toLowerCase()
                }
                function oa(t, e) {
                    t.c = !1,
                    t.a && (t.f = !0,
                    t.a.abort(),
                    t.f = !1),
                    t.h = e,
                    aa(t),
                    ua(t)
                }
                function aa(t) {
                    t.I || (t.I = !0,
                    t.dispatchEvent("complete"),
                    t.dispatchEvent("error"))
                }
                function sa(e) {
                    if (e.c && void 0 !== u)
                        if (e.w[1] && 4 == ha(e) && 2 == la(e))
                            Wo(e.b, fa(e, "Local request error detected and ignored"));
                        else if (e.i && 4 == ha(e))
                            sn(e.Lb, 0, e);
                        else if (e.dispatchEvent("readystatechange"),
                        4 == ha(e)) {
                            Wo(e.b, fa(e, "Request complete")),
                            e.c = !1;
                            try {
                                var t, n = la(e);
                                t: switch (n) {
                                case 200:
                                case 201:
                                case 202:
                                case 204:
                                case 206:
                                case 304:
                                case 1223:
                                    var i = !0;
                                    break t;
                                default:
                                    i = !1
                                }
                                if (!(t = i)) {
                                    var r;
                                    if (r = 0 === n) {
                                        var o = String(e.l).match(pn)[1] || null;
                                        if (!o && l.self && l.self.location) {
                                            var a = l.self.location.protocol;
                                            o = a.substr(0, a.length - 1)
                                        }
                                        r = !ea.test(o ? o.toLowerCase() : "")
                                    }
                                    t = r
                                }
                                if (t)
                                    e.dispatchEvent("complete"),
                                    e.dispatchEvent("success");
                                else {
                                    try {
                                        var s = 2 < ha(e) ? e.a.statusText : ""
                                    } catch (t) {
                                        Wo(e.b, "Can not get status: " + t.message),
                                        s = ""
                                    }
                                    e.h = s + " [" + la(e) + "]",
                                    aa(e)
                                }
                            } finally {
                                ua(e)
                            }
                        }
                }
                function ua(e, t) {
                    if (e.a) {
                        ca(e);
                        var n = e.a
                          , i = e.w[0] ? d : null;
                        e.a = null,
                        e.w = null,
                        t || e.dispatchEvent("ready");
                        try {
                            n.onreadystatechange = i
                        } catch (t) {
                            (e = e.b) && e.log(Uo, "Problem encountered resetting onreadystatechange: " + t.message, void 0)
                        }
                    }
                }
                function ca(t) {
                    t.a && t.v && (t.a.ontimeout = null),
                    t.o && (l.clearTimeout(t.o),
                    t.o = null)
                }
                function ha(t) {
                    return t.a ? t.a.readyState : 0
                }
                function la(t) {
                    try {
                        return 2 < ha(t) ? t.a.status : -1
                    } catch (t) {
                        return -1
                    }
                }
                function fa(t, e) {
                    return e + " [" + t.O + " " + t.l + " " + la(t) + "]"
                }
                function da(t) {
                    var e = ka;
                    this.g = [],
                    this.v = e,
                    this.o = t || null,
                    this.f = this.a = !1,
                    this.c = void 0,
                    this.u = this.w = this.i = !1,
                    this.h = 0,
                    this.b = null,
                    this.l = 0
                }
                function pa(t, e, n) {
                    t.a = !0,
                    t.c = n,
                    t.f = !e,
                    ba(t)
                }
                function va(t) {
                    if (t.a) {
                        if (!t.u)
                            throw new ya(t);
                        t.u = !1
                    }
                }
                function ma(t, e, n, i) {
                    t.g.push([e, n, i]),
                    t.a && ba(t)
                }
                function ga(t) {
                    return U(t.g, function(t) {
                        return m(t[1])
                    })
                }
                function ba(e) {
                    if (e.h && e.a && ga(e)) {
                        var n = e.h
                          , i = Ta[n];
                        i && (l.clearTimeout(i.a),
                        delete Ta[n]),
                        e.h = 0
                    }
                    e.b && (e.b.l--,
                    delete e.b),
                    n = e.c;
                    for (var t = i = !1; e.g.length && !e.i; ) {
                        var r = e.g.shift()
                          , o = r[0]
                          , a = r[1];
                        if (r = r[2],
                        o = e.f ? a : o)
                            try {
                                var s = o.call(r || e.o, n);
                                void 0 !== s && (e.f = e.f && (s == n || s instanceof Error),
                                e.c = n = s),
                                (A(n) || "function" == typeof l.Promise && n instanceof l.Promise) && (t = !0,
                                e.i = !0)
                            } catch (t) {
                                n = t,
                                e.f = !0,
                                ga(e) || (i = !0)
                            }
                    }
                    e.c = n,
                    t && (s = I(e.m, e, !0),
                    t = I(e.m, e, !1),
                    n instanceof da ? (ma(n, s, t),
                    n.w = !0) : n.then(s, t)),
                    i && (n = new Ia(n),
                    Ta[n.a] = n,
                    e.h = n.a)
                }
                function ya() {
                    S.call(this)
                }
                function wa() {
                    S.call(this)
                }
                function Ia(t) {
                    this.a = l.setTimeout(I(this.c, this), 0),
                    this.b = t
                }
                (t = Qo.prototype).Ga = function() {
                    void 0 !== u && this.a && (this.h = "Timed out after " + this.g + "ms, aborting",
                    Wo(this.b, fa(this, this.h)),
                    this.dispatchEvent("timeout"),
                    this.abort(8))
                }
                ,
                t.abort = function() {
                    this.a && this.c && (Wo(this.b, fa(this, "Aborting")),
                    this.c = !1,
                    this.f = !0,
                    this.a.abort(),
                    this.f = !1,
                    this.dispatchEvent("complete"),
                    this.dispatchEvent("abort"),
                    ua(this))
                }
                ,
                t.xa = function() {
                    this.a && (this.c && (this.c = !1,
                    this.f = !0,
                    this.a.abort(),
                    this.f = !1),
                    ua(this, !0)),
                    Qo.qb.xa.call(this)
                }
                ,
                t.Lb = function() {
                    this.ta || (this.J || this.i || this.f ? sa(this) : this.yc())
                }
                ,
                t.yc = function() {
                    sa(this)
                }
                ,
                t.getResponse = function() {
                    try {
                        if (!this.a)
                            return null;
                        if ("response"in this.a)
                            return this.a.response;
                        switch (this.m) {
                        case ta:
                        case "text":
                            return this.a.responseText;
                        case "arraybuffer":
                            if ("mozResponseArrayBuffer"in this.a)
                                return this.a.mozResponseArrayBuffer
                        }
                        var t = this.b;
                        return t && t.log(Uo, "Response type " + this.m + " is not supported on this browser", void 0),
                        null
                    } catch (t) {
                        return Wo(this.b, "Can not get response: " + t.message),
                        null
                    }
                }
                ,
                da.prototype.cancel = function(t) {
                    if (this.a)
                        this.c instanceof da && this.c.cancel();
                    else {
                        if (this.b) {
                            var e = this.b;
                            delete this.b,
                            t ? e.cancel(t) : (e.l--,
                            e.l <= 0 && e.cancel())
                        }
                        this.v ? this.v.call(this.o, this) : this.u = !0,
                        this.a || (t = new wa(this),
                        va(this),
                        pa(this, !1, t))
                    }
                }
                ,
                da.prototype.m = function(t, e) {
                    this.i = !1,
                    pa(this, t, e)
                }
                ,
                da.prototype.then = function(t, e, n) {
                    var i, r, o = new qt(function(t, e) {
                        i = t,
                        r = e
                    }
                    );
                    return ma(this, i, function(t) {
                        t instanceof wa ? o.cancel() : r(t)
                    }),
                    o.then(t, e, n)
                }
                ,
                da.prototype.$goog_Thenable = !0,
                k(ya, S),
                ya.prototype.message = "Deferred has already fired",
                ya.prototype.name = "AlreadyCalledError",
                k(wa, S),
                wa.prototype.message = "Deferred was canceled",
                wa.prototype.name = "CanceledError",
                Ia.prototype.c = function() {
                    throw delete Ta[this.a],
                    this.b
                }
                ;
                var Ta = {};
                function Ea(t) {
                    var e, n = document, i = et(t).toString(), r = document.createElement("SCRIPT"), o = {
                        Nb: r,
                        Ga: void 0
                    }, a = new da(o);
                    return e = window.setTimeout(function() {
                        Aa(r, !0);
                        var t = new Oa(Na,"Timeout reached for loading script " + i);
                        va(a),
                        pa(a, !1, t)
                    }, 5e3),
                    o.Ga = e,
                    r.onload = r.onreadystatechange = function() {
                        r.readyState && "loaded" != r.readyState && "complete" != r.readyState || (Aa(r, !1, e),
                        va(a),
                        pa(a, !0, null))
                    }
                    ,
                    r.onerror = function() {
                        Aa(r, !0, e);
                        var t = new Oa(Sa,"Error while loading script " + i);
                        va(a),
                        pa(a, !1, t)
                    }
                    ,
                    J(o = {}, {
                        type: "text/javascript",
                        charset: "UTF-8"
                    }),
                    Kn(r, o),
                    function(t, e) {
                        L(t, "HTMLScriptElement"),
                        t.src = et(e),
                        null === f && (f = (e = (e = l.document).querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && s.test(e) ? e : ""),
                        (e = f) && t.setAttribute("nonce", e)
                    }(r, t),
                    function(t) {
                        var e;
                        return (e = (t || document).getElementsByTagName("HEAD")) && 0 != e.length ? e[0] : t.documentElement
                    }(n).appendChild(r),
                    a
                }
                function ka() {
                    if (this && this.Nb) {
                        var t = this.Nb;
                        t && "SCRIPT" == t.tagName && Aa(t, !0, this.Ga)
                    }
                }
                function Aa(t, e, n) {
                    null != n && l.clearTimeout(n),
                    t.onload = d,
                    t.onerror = d,
                    t.onreadystatechange = d,
                    e && window.setTimeout(function() {
                        t && t.parentNode && t.parentNode.removeChild(t)
                    }, 0)
                }
                var Sa = 0
                  , Na = 1;
                function Oa(t, e) {
                    var n = "Jsloader error (code #" + t + ")";
                    e && (n += ": " + e),
                    S.call(this, n),
                    this.code = t
                }
                function _a(t) {
                    this.f = t
                }
                function Pa(t, e, n) {
                    if (this.c = t,
                    t = e || {},
                    this.l = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token",
                    this.u = t.secureTokenTimeout || Ca,
                    this.g = W(t.secureTokenHeaders || La),
                    this.h = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                    this.i = t.firebaseTimeout || xa,
                    this.a = W(t.firebaseHeaders || Ma),
                    n && (this.a["X-Client-Version"] = n,
                    this.g["X-Client-Version"] = n),
                    n = "Node" == ui(),
                    !(n = l.XMLHttpRequest || n && fl.INTERNAL.node && fl.INTERNAL.node.XMLHttpRequest) && !si())
                        throw new Yi("internal-error","The XMLHttpRequest compatibility library was not found.");
                    this.f = void 0,
                    si() ? this.f = new Xo(self) : ci() ? this.f = new _a(n) : this.f = new Do,
                    this.b = null
                }
                k(Oa, S),
                k(_a, Oo),
                _a.prototype.a = function() {
                    return new this.f
                }
                ,
                _a.prototype.b = function() {
                    return {}
                }
                ;
                var Ra, Da = "idToken", Ca = new Oi(3e4,6e4), La = {
                    "Content-Type": "application/x-www-form-urlencoded"
                }, xa = new Oi(3e4,6e4), Ma = {
                    "Content-Type": "application/json"
                };
                function ja(t, e) {
                    e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"]
                }
                function Ua(t, e) {
                    e ? (t.a["X-Client-Version"] = e,
                    t.g["X-Client-Version"] = e) : (delete t.a["X-Client-Version"],
                    delete t.g["X-Client-Version"])
                }
                function Va(t, e, n, i, r, o, a) {
                    (t = function() {
                        var t = vi();
                        return !((t = fi(t) != li ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null) && t < 30) && (!me || !Ae || 9 < Ae)
                    }() || si() ? I(t.o, t) : (Ra = Ra || new qt(function(t, e) {
                        !function(t, e) {
                            if (((window.gapi || {}).client || {}).request)
                                t();
                            else {
                                l[Ka] = function() {
                                    ((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED"))
                                }
                                ,
                                function(t, e) {
                                    ma(t, null, e, void 0)
                                }(Ea(nt(Fa, {
                                    onload: Ka
                                })), function() {
                                    e(Error("CORS_UNSUPPORTED"))
                                })
                            }
                        }(t, e)
                    }
                    ),
                    I(t.m, t)))(e, n, i, r, o, a)
                }
                Pa.prototype.R = function() {
                    return this.b
                }
                ,
                Pa.prototype.o = function(t, n, e, i, r, o) {
                    if (si() && (void 0 === l.fetch || void 0 === l.Headers || void 0 === l.Request))
                        throw new Yi("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
                    var a = new Qo(this.f);
                    if (o) {
                        a.g = Math.max(0, o);
                        var s = setTimeout(function() {
                            a.dispatchEvent("timeout")
                        }, o)
                    }
                    rn(a, "complete", function() {
                        s && clearTimeout(s);
                        var e = null;
                        try {
                            e = JSON.parse(function(e) {
                                try {
                                    return e.a ? e.a.responseText : ""
                                } catch (t) {
                                    return Wo(e.b, "Can not get responseText: " + t.message),
                                    ""
                                }
                            }(this)) || null
                        } catch (t) {
                            e = null
                        }
                        n && n(e)
                    }),
                    on(a, "ready", function() {
                        s && clearTimeout(s),
                        le(this)
                    }),
                    on(a, "timeout", function() {
                        s && clearTimeout(s),
                        le(this),
                        n && n(null)
                    }),
                    ia(a, t, e, i, r)
                }
                ;
                var Fa = new Y(Z,"https://apis.google.com/js/client.js?onload=%{onload}")
                  , Ka = "__fcb" + Math.floor(1e6 * Math.random()).toString();
                function qa(t) {
                    if (!h(t = t.email) || !ii.test(t))
                        throw new Yi("invalid-email")
                }
                function Ha(t) {
                    "email"in t && qa(t)
                }
                function Ba(t) {
                    if (!t[Da])
                        throw new Yi("internal-error")
                }
                function Ga(t) {
                    if (t.phoneNumber || t.temporaryProof) {
                        if (!t.phoneNumber || !t.temporaryProof)
                            throw new Yi("internal-error")
                    } else {
                        if (!t.sessionInfo)
                            throw new Yi("missing-verification-id");
                        if (!t.code)
                            throw new Yi("missing-verification-code")
                    }
                }
                Pa.prototype.m = function(t, n, i, r, o) {
                    var a = this;
                    Ra.then(function() {
                        window.gapi.client.setApiKey(a.c);
                        var e = window.gapi.auth.getToken();
                        window.gapi.auth.setToken(null),
                        window.gapi.client.request({
                            path: t,
                            method: i,
                            body: r,
                            headers: o,
                            authType: "none",
                            callback: function(t) {
                                window.gapi.auth.setToken(e),
                                n && n(t)
                            }
                        })
                    }).s(function(t) {
                        n && n({
                            error: {
                                message: t && t.message || "CORS_UNSUPPORTED"
                            }
                        })
                    })
                }
                ,
                Pa.prototype.ob = function() {
                    return Ns(this, bs, {})
                }
                ,
                Pa.prototype.rb = function(t, e) {
                    return Ns(this, ms, {
                        idToken: t,
                        email: e
                    })
                }
                ,
                Pa.prototype.sb = function(t, e) {
                    return Ns(this, gs, {
                        idToken: t,
                        password: e
                    })
                }
                ;
                var Wa = {
                    displayName: "DISPLAY_NAME",
                    photoUrl: "PHOTO_URL"
                };
                function Xa(t) {
                    if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken)
                        throw new Yi("internal-error")
                }
                function Ja(t, e) {
                    return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (xn(t = new Rn(t.postBody), "nonce") && (e.nonce = t.get("nonce")))),
                    e
                }
                function Ya(t) {
                    var e = null;
                    if (t.needConfirmation ? (t.code = "account-exists-with-different-credential",
                    e = No(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use",
                    e = No(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use",
                    e = No(t)) : t.errorMessage && (e = Os(t.errorMessage)),
                    e)
                        throw e;
                    if (!t[Da])
                        throw new Yi("internal-error")
                }
                function za(t, e) {
                    return e.returnIdpCredential = !0,
                    Ns(t, ys, e)
                }
                function $a(t, e) {
                    return e.returnIdpCredential = !0,
                    Ns(t, Is, e)
                }
                function Za(t, e) {
                    return e.returnIdpCredential = !0,
                    e.autoCreate = !1,
                    Ns(t, ws, e)
                }
                function Qa(t) {
                    if (!t.oobCode)
                        throw new Yi("invalid-action-code")
                }
                (t = Pa.prototype).tb = function(t, i) {
                    var r = {
                        idToken: t
                    }
                      , o = [];
                    return B(Wa, function(t, e) {
                        var n = i[e];
                        null === n ? o.push(t) : e in i && (r[e] = n)
                    }),
                    o.length && (r.deleteAttribute = o),
                    Ns(this, ms, r)
                }
                ,
                t.kb = function(t, e) {
                    return J(t = {
                        requestType: "PASSWORD_RESET",
                        email: t
                    }, e),
                    Ns(this, ls, t)
                }
                ,
                t.lb = function(t, e) {
                    return J(t = {
                        requestType: "EMAIL_SIGNIN",
                        email: t
                    }, e),
                    Ns(this, cs, t)
                }
                ,
                t.jb = function(t, e) {
                    return J(t = {
                        requestType: "VERIFY_EMAIL",
                        idToken: t
                    }, e),
                    Ns(this, hs, t)
                }
                ,
                t.Va = function(t) {
                    return Ns(this, ks, t)
                }
                ,
                t.$a = function(t, e) {
                    return Ns(this, ps, {
                        oobCode: t,
                        newPassword: e
                    })
                }
                ,
                t.Ka = function(t) {
                    return Ns(this, es, {
                        oobCode: t
                    })
                }
                ,
                t.Xa = function(t) {
                    return Ns(this, ts, {
                        oobCode: t
                    })
                }
                ;
                var ts = {
                    endpoint: "setAccountInfo",
                    D: Qa,
                    fa: "email",
                    F: !0
                }
                  , es = {
                    endpoint: "resetPassword",
                    D: Qa,
                    K: function(t) {
                        var e = t.requestType;
                        if (!e || !t.email && "EMAIL_SIGNIN" != e)
                            throw new Yi("internal-error")
                    },
                    F: !0
                }
                  , ns = {
                    endpoint: "signupNewUser",
                    D: function(t) {
                        if (qa(t),
                        !t.password)
                            throw new Yi("weak-password")
                    },
                    K: Ba,
                    T: !0,
                    F: !0
                }
                  , is = {
                    endpoint: "createAuthUri",
                    F: !0
                }
                  , rs = {
                    endpoint: "deleteAccount",
                    V: ["idToken"]
                }
                  , os = {
                    endpoint: "setAccountInfo",
                    V: ["idToken", "deleteProvider"],
                    D: function(t) {
                        if (!p(t.deleteProvider))
                            throw new Yi("internal-error")
                    }
                }
                  , as = {
                    endpoint: "emailLinkSignin",
                    V: ["email", "oobCode"],
                    D: qa,
                    K: Ba,
                    T: !0,
                    F: !0
                }
                  , ss = {
                    endpoint: "emailLinkSignin",
                    V: ["idToken", "email", "oobCode"],
                    D: qa,
                    K: Ba,
                    T: !0
                }
                  , us = {
                    endpoint: "getAccountInfo"
                }
                  , cs = {
                    endpoint: "getOobConfirmationCode",
                    V: ["requestType"],
                    D: function(t) {
                        if ("EMAIL_SIGNIN" != t.requestType)
                            throw new Yi("internal-error");
                        qa(t)
                    },
                    fa: "email",
                    F: !0
                }
                  , hs = {
                    endpoint: "getOobConfirmationCode",
                    V: ["idToken", "requestType"],
                    D: function(t) {
                        if ("VERIFY_EMAIL" != t.requestType)
                            throw new Yi("internal-error")
                    },
                    fa: "email",
                    F: !0
                }
                  , ls = {
                    endpoint: "getOobConfirmationCode",
                    V: ["requestType"],
                    D: function(t) {
                        if ("PASSWORD_RESET" != t.requestType)
                            throw new Yi("internal-error");
                        qa(t)
                    },
                    fa: "email",
                    F: !0
                }
                  , fs = {
                    wb: !0,
                    endpoint: "getProjectConfig",
                    Kb: "GET"
                }
                  , ds = {
                    wb: !0,
                    endpoint: "getRecaptchaParam",
                    Kb: "GET",
                    K: function(t) {
                        if (!t.recaptchaSiteKey)
                            throw new Yi("internal-error")
                    }
                }
                  , ps = {
                    endpoint: "resetPassword",
                    D: Qa,
                    fa: "email",
                    F: !0
                }
                  , vs = {
                    endpoint: "sendVerificationCode",
                    V: ["phoneNumber", "recaptchaToken"],
                    fa: "sessionInfo",
                    F: !0
                }
                  , ms = {
                    endpoint: "setAccountInfo",
                    V: ["idToken"],
                    D: Ha,
                    T: !0
                }
                  , gs = {
                    endpoint: "setAccountInfo",
                    V: ["idToken"],
                    D: function(t) {
                        if (Ha(t),
                        !t.password)
                            throw new Yi("weak-password")
                    },
                    K: Ba,
                    T: !0
                }
                  , bs = {
                    endpoint: "signupNewUser",
                    K: Ba,
                    T: !0,
                    F: !0
                }
                  , ys = {
                    endpoint: "verifyAssertion",
                    D: Xa,
                    Qa: Ja,
                    K: Ya,
                    T: !0,
                    F: !0
                }
                  , ws = {
                    endpoint: "verifyAssertion",
                    D: Xa,
                    Qa: Ja,
                    K: function(t) {
                        if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage)
                            throw new Yi("user-not-found");
                        if (t.errorMessage)
                            throw Os(t.errorMessage);
                        if (!t[Da])
                            throw new Yi("internal-error")
                    },
                    T: !0,
                    F: !0
                }
                  , Is = {
                    endpoint: "verifyAssertion",
                    D: function(t) {
                        if (Xa(t),
                        !t.idToken)
                            throw new Yi("internal-error")
                    },
                    Qa: Ja,
                    K: Ya,
                    T: !0
                }
                  , Ts = {
                    endpoint: "verifyCustomToken",
                    D: function(t) {
                        if (!t.token)
                            throw new Yi("invalid-custom-token")
                    },
                    K: Ba,
                    T: !0,
                    F: !0
                }
                  , Es = {
                    endpoint: "verifyPassword",
                    D: function(t) {
                        if (qa(t),
                        !t.password)
                            throw new Yi("wrong-password")
                    },
                    K: Ba,
                    T: !0,
                    F: !0
                }
                  , ks = {
                    endpoint: "verifyPhoneNumber",
                    D: Ga,
                    K: Ba,
                    F: !0
                }
                  , As = {
                    endpoint: "verifyPhoneNumber",
                    D: function(t) {
                        if (!t.idToken)
                            throw new Yi("internal-error");
                        Ga(t)
                    },
                    K: function(t) {
                        if (t.temporaryProof)
                            throw t.code = "credential-already-in-use",
                            No(t);
                        Ba(t)
                    }
                }
                  , Ss = {
                    Yb: {
                        USER_NOT_FOUND: "user-not-found"
                    },
                    endpoint: "verifyPhoneNumber",
                    D: Ga,
                    K: Ba,
                    F: !0
                };
                function Ns(t, e, n) {
                    if (!function(t, e) {
                        if (!e || !e.length)
                            return !0;
                        if (!t)
                            return !1;
                        for (var n = 0; n < e.length; n++) {
                            var i = t[e[n]];
                            if (null == i || "" === i)
                                return !1
                        }
                        return !0
                    }(n, e.V))
                        return zt(new Yi("internal-error"));
                    var i, r = e.Kb || "POST";
                    return Yt(n).then(e.D).then(function() {
                        return e.T && (n.returnSecureToken = !0),
                        e.F && t.b && void 0 === n.tenantId && (n.tenantId = t.b),
                        function(t, e, i, r, o, n) {
                            var a = In(t.h + e);
                            yn(a, "key", t.c),
                            n && yn(a, "cb", E().toString());
                            var s = "GET" == i;
                            if (s)
                                for (var u in r)
                                    r.hasOwnProperty(u) && yn(a, u, r[u]);
                            return new qt(function(e, n) {
                                Va(t, a.toString(), function(t) {
                                    t ? t.error ? n(_s(t, o || {})) : e(t) : n(new Yi("network-request-failed"))
                                }, i, s ? void 0 : Gn(Ei(r)), t.a, t.i.get())
                            }
                            )
                        }(t, e.endpoint, r, n, e.Yb, e.wb || !1)
                    }).then(function(t) {
                        return i = t,
                        e.Qa ? e.Qa(n, i) : i
                    }).then(e.K).then(function() {
                        if (!e.fa)
                            return i;
                        if (!(e.fa in i))
                            throw new Yi("internal-error");
                        return i[e.fa]
                    })
                }
                function Os(t) {
                    return _s({
                        error: {
                            errors: [{
                                message: t
                            }],
                            code: 400,
                            message: t
                        }
                    })
                }
                function _s(t, e) {
                    var n = (t.error && t.error.errors && t.error.errors[0] || {}).reason || ""
                      , i = {
                        keyInvalid: "invalid-api-key",
                        ipRefererBlocked: "app-not-authorized"
                    };
                    if (n = i[n] ? new Yi(i[n]) : null)
                        return n;
                    for (var r in n = t.error && t.error.message || "",
                    J(i = {
                        INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                        CREDENTIAL_MISMATCH: "custom-token-mismatch",
                        MISSING_CUSTOM_TOKEN: "internal-error",
                        INVALID_IDENTIFIER: "invalid-email",
                        MISSING_CONTINUE_URI: "internal-error",
                        INVALID_EMAIL: "invalid-email",
                        INVALID_PASSWORD: "wrong-password",
                        USER_DISABLED: "user-disabled",
                        MISSING_PASSWORD: "internal-error",
                        EMAIL_EXISTS: "email-already-in-use",
                        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                        INVALID_IDP_RESPONSE: "invalid-credential",
                        INVALID_PENDING_TOKEN: "invalid-credential",
                        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                        MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                        INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                        INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                        INVALID_SENDER: "invalid-sender",
                        EMAIL_NOT_FOUND: "user-not-found",
                        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                        EXPIRED_OOB_CODE: "expired-action-code",
                        INVALID_OOB_CODE: "invalid-action-code",
                        MISSING_OOB_CODE: "internal-error",
                        INVALID_PROVIDER_ID: "invalid-provider-id",
                        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                        INVALID_ID_TOKEN: "invalid-user-token",
                        TOKEN_EXPIRED: "user-token-expired",
                        USER_NOT_FOUND: "user-token-expired",
                        CORS_UNSUPPORTED: "cors-unsupported",
                        DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                        INVALID_APP_ID: "invalid-app-id",
                        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                        WEAK_PASSWORD: "weak-password",
                        OPERATION_NOT_ALLOWED: "operation-not-allowed",
                        USER_CANCELLED: "user-cancelled",
                        CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                        INVALID_APP_CREDENTIAL: "invalid-app-credential",
                        INVALID_CODE: "invalid-verification-code",
                        INVALID_PHONE_NUMBER: "invalid-phone-number",
                        INVALID_SESSION_INFO: "invalid-verification-id",
                        INVALID_TEMPORARY_PROOF: "invalid-credential",
                        MISSING_APP_CREDENTIAL: "missing-app-credential",
                        MISSING_CODE: "missing-verification-code",
                        MISSING_PHONE_NUMBER: "missing-phone-number",
                        MISSING_SESSION_INFO: "missing-verification-id",
                        QUOTA_EXCEEDED: "quota-exceeded",
                        SESSION_EXPIRED: "code-expired",
                        REJECTED_CREDENTIAL: "rejected-credential",
                        INVALID_CONTINUE_URI: "invalid-continue-uri",
                        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                        MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                        INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                        INVALID_CERT_HASH: "invalid-cert-hash",
                        UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                        INVALID_TENANT_ID: "invalid-tenant-id",
                        ADMIN_ONLY_OPERATION: "admin-restricted-operation"
                    }, e || {}),
                    e = (e = n.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < e.length ? e[1] : void 0,
                    i)
                        if (0 === n.indexOf(r))
                            return new Yi(i[r],e);
                    return !e && t && (e = Ti(t)),
                    new Yi("internal-error",e)
                }
                function Ps(t) {
                    this.b = t,
                    this.a = null,
                    this.fb = function(o) {
                        return (Ls = Ls || new qt(function(t, e) {
                            function n() {
                                Ni(),
                                mi("gapi.load")("gapi.iframes", {
                                    callback: t,
                                    ontimeout: function() {
                                        Ni(),
                                        e(Error("Network Error"))
                                    },
                                    timeout: Ds.get()
                                })
                            }
                            if (mi("gapi.iframes.Iframe"))
                                t();
                            else if (mi("gapi.load"))
                                n();
                            else {
                                var i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
                                l[i] = function() {
                                    mi("gapi.load") ? n() : e(Error("Network Error"))
                                }
                                ,
                                Yt(Ea(i = nt(Rs, {
                                    onload: i
                                }))).s(function() {
                                    e(Error("Network Error"))
                                })
                            }
                        }
                        ).s(function(t) {
                            throw Ls = null,
                            t
                        })).then(function() {
                            return new qt(function(i, r) {
                                mi("gapi.iframes.getContext")().open({
                                    where: document.body,
                                    url: o.b,
                                    messageHandlersFilter: mi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                                    attributes: {
                                        style: {
                                            position: "absolute",
                                            top: "-100px",
                                            width: "1px",
                                            height: "1px"
                                        }
                                    },
                                    dontclear: !0
                                }, function(t) {
                                    function e() {
                                        clearTimeout(n),
                                        i()
                                    }
                                    o.a = t,
                                    o.a.restyle({
                                        setHideOnLeave: !1
                                    });
                                    var n = setTimeout(function() {
                                        r(Error("Network Error"))
                                    }, Cs.get());
                                    t.ping(e).then(e, function() {
                                        r(Error("Network Error"))
                                    })
                                })
                            }
                            )
                        })
                    }(this)
                }
                var Rs = new Y(Z,"https://apis.google.com/js/api.js?onload=%{onload}")
                  , Ds = new Oi(3e4,6e4)
                  , Cs = new Oi(5e3,15e3)
                  , Ls = null;
                function xs(t, e, n) {
                    this.i = t,
                    this.g = e,
                    this.h = n,
                    this.f = null,
                    this.a = Tn(this.i, "/__/auth/iframe"),
                    yn(this.a, "apiKey", this.g),
                    yn(this.a, "appName", this.h),
                    this.b = null,
                    this.c = []
                }
                function Ms(t, e, n, i, r) {
                    this.o = t,
                    this.m = e,
                    this.c = n,
                    this.u = i,
                    this.i = this.g = this.l = null,
                    this.a = r,
                    this.h = this.f = null
                }
                function js(t) {
                    try {
                        return fl.app(t).auth().Aa()
                    } catch (t) {
                        return []
                    }
                }
                function Us(t, e, n, i, r) {
                    this.u = t,
                    this.f = e,
                    this.b = n,
                    this.c = i || null,
                    this.h = r || null,
                    this.m = this.o = this.v = null,
                    this.g = [],
                    this.l = this.a = null
                }
                function Vs(t) {
                    var s = $n();
                    return function(t) {
                        return Ns(t, fs, {}).then(function(t) {
                            return t.authorizedDomains || []
                        })
                    }(t).then(function(t) {
                        t: {
                            var e = In(s)
                              , n = e.f;
                            e = e.b;
                            for (var i = 0; i < t.length; i++) {
                                var r = t[i]
                                  , o = e
                                  , a = n;
                                if (o = 0 == r.indexOf("chrome-extension://") ? In(r).b == o && "chrome-extension" == a : ("http" == a || "https" == a) && (ni.test(r) ? o == r : (r = r.split(".").join("\\."),
                                new RegExp("^(.+\\." + r + "|" + r + ")$","i").test(o)))) {
                                    t = !0;
                                    break t
                                }
                            }
                            t = !1
                        }
                        if (!t)
                            throw new Ao($n())
                    })
                }
                function Fs(r) {
                    return r.l || (r.l = ri().then(function() {
                        if (!r.o) {
                            var t = r.c
                              , e = r.h
                              , n = js(r.b)
                              , i = new xs(r.u,r.f,r.b);
                            i.f = t,
                            i.b = e,
                            i.c = H(n || []),
                            r.o = i.toString()
                        }
                        r.i = new Ps(r.o),
                        function(i) {
                            if (!i.i)
                                throw Error("IfcHandler must be initialized!");
                            !function(t, e) {
                                t.fb.then(function() {
                                    t.a.register("authEvent", e, mi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                })
                            }(i.i, function(t) {
                                var e = {};
                                if (t && t.authEvent) {
                                    var n = !1;
                                    for (t = Io(t.authEvent),
                                    e = 0; e < i.g.length; e++)
                                        n = i.g[e](t) || n;
                                    return (e = {}).status = n ? "ACK" : "ERROR",
                                    Yt(e)
                                }
                                return e.status = "ERROR",
                                Yt(e)
                            })
                        }(r)
                    })),
                    r.l
                }
                function Ks(t) {
                    return t.m || (t.v = t.c ? pi(t.c, js(t.b)) : null,
                    t.m = new Pa(t.f,Nr(t.h),t.v)),
                    t.m
                }
                function qs(t, e, n, i, r, o, a, s, u, c, h) {
                    return (t = new Ms(t,e,n,i,r)).l = o,
                    t.g = a,
                    t.i = s,
                    t.b = W(u || null),
                    t.f = c,
                    t.nb(h).toString()
                }
                function Hs(t) {
                    if (this.a = t || fl.INTERNAL.reactNative && fl.INTERNAL.reactNative.AsyncStorage,
                    !this.a)
                        throw new Yi("internal-error","The React Native compatibility library was not found.");
                    this.type = "asyncStorage"
                }
                function Bs(t) {
                    this.b = t,
                    this.a = {},
                    this.f = I(this.c, this)
                }
                xs.prototype.toString = function() {
                    return this.f ? yn(this.a, "v", this.f) : Ln(this.a.a, "v"),
                    this.b ? yn(this.a, "eid", this.b) : Ln(this.a.a, "eid"),
                    this.c.length ? yn(this.a, "fw", this.c.join(",")) : Ln(this.a.a, "fw"),
                    this.a.toString()
                }
                ,
                Ms.prototype.nb = function(t) {
                    return this.h = t,
                    this
                }
                ,
                Ms.prototype.toString = function() {
                    var t = Tn(this.o, "/__/auth/handler");
                    if (yn(t, "apiKey", this.m),
                    yn(t, "appName", this.c),
                    yn(t, "authType", this.u),
                    this.a.isOAuthProvider) {
                        var e = this.a;
                        try {
                            var n = fl.app(this.c).auth().ha()
                        } catch (t) {
                            n = null
                        }
                        for (var i in e.ab = n,
                        yn(t, "providerId", this.a.providerId),
                        n = Ei((e = this.a).zb))
                            n[i] = n[i].toString();
                        i = e.Fc,
                        n = W(n);
                        for (var r = 0; r < i.length; r++) {
                            var o = i[r];
                            o in n && delete n[o]
                        }
                        e.cb && e.ab && !n[e.cb] && (n[e.cb] = e.ab),
                        G(n) || yn(t, "customParameters", Ti(n))
                    }
                    if ("function" == typeof this.a.Hb && ((e = this.a.Hb()).length && yn(t, "scopes", e.join(","))),
                    this.l ? yn(t, "redirectUrl", this.l) : Ln(t.a, "redirectUrl"),
                    this.g ? yn(t, "eventId", this.g) : Ln(t.a, "eventId"),
                    this.i ? yn(t, "v", this.i) : Ln(t.a, "v"),
                    this.b)
                        for (var a in this.b)
                            this.b.hasOwnProperty(a) && !wn(t, a) && yn(t, a, this.b[a]);
                    return this.h ? yn(t, "tid", this.h) : Ln(t.a, "tid"),
                    this.f ? yn(t, "eid", this.f) : Ln(t.a, "eid"),
                    (a = js(this.c)).length && yn(t, "fw", a.join(",")),
                    t.toString()
                }
                ,
                (t = Us.prototype).Fb = function(e, n, t) {
                    var i = new Yi("popup-closed-by-user")
                      , r = new Yi("web-storage-unsupported")
                      , o = this
                      , a = !1;
                    return this.ia().then(function() {
                        (function(t) {
                            var e = {
                                type: "webStorageSupport"
                            };
                            return Fs(t).then(function() {
                                return function(e, n) {
                                    return e.fb.then(function() {
                                        return new qt(function(t) {
                                            e.a.send(n.type, n, t, mi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                        }
                                        )
                                    })
                                }(t.i, e)
                            }).then(function(t) {
                                if (t && t.length && void 0 !== t[0].webStorageSupport)
                                    return t[0].webStorageSupport;
                                throw Error()
                            })
                        }
                        )(o).then(function(t) {
                            t || (e && ti(e),
                            n(r),
                            a = !0)
                        })
                    }).s(function() {}).then(function() {
                        if (!a)
                            return function(n) {
                                return new qt(function(e) {
                                    return function t() {
                                        un(2e3).then(function() {
                                            if (n && !n.closed)
                                                return t();
                                            e()
                                        })
                                    }()
                                }
                                )
                            }(e)
                    }).then(function() {
                        if (!a)
                            return un(t).then(function() {
                                n(i)
                            })
                    })
                }
                ,
                t.Ob = function() {
                    var t = vi();
                    return !Ii(t) && !Si(t)
                }
                ,
                t.Jb = function() {
                    return !1
                }
                ,
                t.Db = function(e, t, n, i, r, o, a, s) {
                    if (!e)
                        return zt(new Yi("popup-blocked"));
                    if (a && !Ii())
                        return this.ia().s(function(t) {
                            ti(e),
                            r(t)
                        }),
                        i(),
                        Yt();
                    this.a || (this.a = Vs(Ks(this)));
                    var u = this;
                    return this.a.then(function() {
                        var t = u.ia().s(function(t) {
                            throw ti(e),
                            r(t),
                            t
                        });
                        return i(),
                        t
                    }).then(function() {
                        yo(n),
                        a || Zn(qs(u.u, u.f, u.b, t, n, null, o, u.c, void 0, u.h, s), e)
                    }).s(function(t) {
                        throw "auth/network-request-failed" == t.code && (u.a = null),
                        t
                    })
                }
                ,
                t.Eb = function(t, e, n, i) {
                    this.a || (this.a = Vs(Ks(this)));
                    var r = this;
                    return this.a.then(function() {
                        yo(e),
                        Zn(qs(r.u, r.f, r.b, t, e, $n(), n, r.c, void 0, r.h, i))
                    }).s(function(t) {
                        throw "auth/network-request-failed" == t.code && (r.a = null),
                        t
                    })
                }
                ,
                t.ia = function() {
                    var t = this;
                    return Fs(this).then(function() {
                        return t.i.fb
                    }).s(function() {
                        throw t.a = null,
                        new Yi("network-request-failed")
                    })
                }
                ,
                t.Rb = function() {
                    return !0
                }
                ,
                t.ya = function(t) {
                    this.g.push(t)
                }
                ,
                t.La = function(e) {
                    K(this.g, function(t) {
                        return t == e
                    })
                }
                ,
                (t = Hs.prototype).get = function(t) {
                    return Yt(this.a.getItem(t)).then(function(t) {
                        return t && ki(t)
                    })
                }
                ,
                t.set = function(t, e) {
                    return Yt(this.a.setItem(t, Ti(e)))
                }
                ,
                t.S = function(t) {
                    return Yt(this.a.removeItem(t))
                }
                ,
                t.$ = function() {}
                ,
                t.ea = function() {}
                ;
                var Gs, Ws = [];
                function Xs(t, e, n) {
                    G(t.a) && t.b.addEventListener("message", t.f),
                    void 0 === t.a[e] && (t.a[e] = []),
                    t.a[e].push(n)
                }
                function Js(t) {
                    this.a = t
                }
                function Ys(t) {
                    this.c = t,
                    this.b = !1,
                    this.a = []
                }
                function zs(i, t, e, n) {
                    var r, o, a, s, u = e || {}, c = null;
                    if (i.b)
                        return zt(Error("connection_unavailable"));
                    var h = n ? 800 : 50
                      , l = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                    return new qt(function(e, n) {
                        l ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(),
                        l.port1.start(),
                        a = setTimeout(function() {
                            n(Error("unsupported_event"))
                        }, h),
                        c = {
                            messageChannel: l,
                            onMessage: o = function(t) {
                                t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a),
                                s = setTimeout(function() {
                                    n(Error("timeout"))
                                }, 3e3)) : "done" === t.data.status ? (clearTimeout(s),
                                void 0 !== t.data.response ? e(t.data.response) : n(Error("unknown_error"))) : (clearTimeout(a),
                                clearTimeout(s),
                                n(Error("invalid_response"))))
                            }
                        },
                        i.a.push(c),
                        l.port1.addEventListener("message", o),
                        i.c.postMessage({
                            eventType: t,
                            eventId: r,
                            data: u
                        }, [l.port2])) : n(Error("connection_unavailable"))
                    }
                    ).then(function(t) {
                        return $s(i, c),
                        t
                    }).s(function(t) {
                        throw $s(i, c),
                        t
                    })
                }
                function $s(t, e) {
                    if (e) {
                        var n = e.messageChannel
                          , i = e.onMessage;
                        n && (n.port1.removeEventListener("message", i),
                        n.port1.close()),
                        K(t.a, function(t) {
                            return t == e
                        })
                    }
                }
                function Zs() {
                    if (!eu())
                        throw new Yi("web-storage-unsupported");
                    this.c = {},
                    this.a = [],
                    this.b = 0,
                    this.u = l.indexedDB,
                    this.type = "indexedDB",
                    this.g = this.l = this.f = this.i = null,
                    this.o = !1,
                    this.h = null;
                    var i = this;
                    si() && self ? (this.l = function() {
                        var e = si() ? self : null;
                        if (M(Ws, function(t) {
                            t.b == e && (n = t)
                        }),
                        !n) {
                            var n = new Bs(e);
                            Ws.push(n)
                        }
                        return n
                    }(),
                    Xs(this.l, "keyChanged", function(t, n) {
                        return au(i).then(function(e) {
                            return 0 < e.length && M(i.a, function(t) {
                                t(e)
                            }),
                            {
                                keyProcessed: V(e, n.key)
                            }
                        })
                    }),
                    Xs(this.l, "ping", function() {
                        return Yt(["keyChanged"])
                    })) : function() {
                        var t = l.navigator;
                        return t && t.serviceWorker ? Yt().then(function() {
                            return t.serviceWorker.ready
                        }).then(function(t) {
                            return t.active || null
                        }).s(function() {
                            return null
                        }) : Yt(null)
                    }().then(function(t) {
                        (i.h = t) && (i.g = new Ys(new Js(t)),
                        zs(i.g, "ping", null, !0).then(function(t) {
                            t[0].fulfilled && V(t[0].value, "keyChanged") && (i.o = !0)
                        }).s(function() {}))
                    })
                }
                function Qs(i) {
                    return new qt(function(e, n) {
                        var t = i.u.open("firebaseLocalStorageDb", 1);
                        t.onerror = function(t) {
                            try {
                                t.preventDefault()
                            } catch (t) {}
                            n(Error(t.target.error))
                        }
                        ,
                        t.onupgradeneeded = function(t) {
                            t = t.target.result;
                            try {
                                t.createObjectStore("firebaseLocalStorage", {
                                    keyPath: "fbase_key"
                                })
                            } catch (t) {
                                n(t)
                            }
                        }
                        ,
                        t.onsuccess = function(t) {
                            (t = t.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(t) : function(i) {
                                return new qt(function(t, e) {
                                    var n = i.u.deleteDatabase("firebaseLocalStorageDb");
                                    n.onsuccess = function() {
                                        t()
                                    }
                                    ,
                                    n.onerror = function(t) {
                                        e(Error(t.target.error))
                                    }
                                }
                                )
                            }(i).then(function() {
                                return Qs(i)
                            }).then(function(t) {
                                e(t)
                            }).s(function(t) {
                                n(t)
                            })
                        }
                    }
                    )
                }
                function tu(t) {
                    return t.m || (t.m = Qs(t)),
                    t.m
                }
                function eu() {
                    try {
                        return !!l.indexedDB
                    } catch (t) {
                        return !1
                    }
                }
                function nu(t) {
                    return t.objectStore("firebaseLocalStorage")
                }
                function iu(t, e) {
                    return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly")
                }
                function ru(t) {
                    return new qt(function(e, n) {
                        t.onsuccess = function(t) {
                            t && t.target ? e(t.target.result) : e()
                        }
                        ,
                        t.onerror = function(t) {
                            n(t.target.error)
                        }
                    }
                    )
                }
                function ou(t, e) {
                    return t.g && t.h && function() {
                        var t = l.navigator;
                        return t && t.serviceWorker && t.serviceWorker.controller || null
                    }() === t.h ? zs(t.g, "keyChanged", {
                        key: e
                    }, t.o).then(function() {}).s(function() {}) : Yt()
                }
                function au(i) {
                    return tu(i).then(function(t) {
                        var r = nu(iu(t, !1));
                        return r.getAll ? ru(r.getAll()) : new qt(function(e, n) {
                            var i = []
                              , t = r.openCursor();
                            t.onsuccess = function(t) {
                                (t = t.target.result) ? (i.push(t.value),
                                t.continue()) : e(i)
                            }
                            ,
                            t.onerror = function(t) {
                                n(t.target.error)
                            }
                        }
                        )
                    }).then(function(t) {
                        var e = {}
                          , n = [];
                        if (0 == i.b) {
                            for (n = 0; n < t.length; n++)
                                e[t[n].fbase_key] = t[n].value;
                            n = function t(e, n) {
                                var i, r = [];
                                for (i in e)
                                    i in n ? typeof e[i] != typeof n[i] ? r.push(i) : "object" == typeof e[i] && null != e[i] && null != n[i] ? 0 < t(e[i], n[i]).length && r.push(i) : e[i] !== n[i] && r.push(i) : r.push(i);
                                for (i in n)
                                    i in e || r.push(i);
                                return r
                            }(i.c, e),
                            i.c = e
                        }
                        return n
                    })
                }
                function su(t) {
                    t.i && t.i.cancel("STOP_EVENT"),
                    t.f && (clearTimeout(t.f),
                    t.f = null)
                }
                function uu(t) {
                    var i = this
                      , r = null;
                    this.a = [],
                    this.type = "indexedDB",
                    this.c = t,
                    this.b = Yt().then(function() {
                        if (eu()) {
                            var e = Ai()
                              , n = "__sak" + e;
                            return Gs = Gs || new Zs,
                            (r = Gs).set(n, e).then(function() {
                                return r.get(n)
                            }).then(function(t) {
                                if (t !== e)
                                    throw Error("indexedDB not supported!");
                                return r.S(n)
                            }).then(function() {
                                return r
                            }).s(function() {
                                return i.c
                            })
                        }
                        return i.c
                    }).then(function(t) {
                        return i.type = t.type,
                        t.$(function(e) {
                            M(i.a, function(t) {
                                t(e)
                            })
                        }),
                        t
                    })
                }
                function cu() {
                    this.a = {},
                    this.type = "inMemory"
                }
                function hu() {
                    if (!function() {
                        var t = "Node" == ui();
                        if (!(t = lu() || t && fl.INTERNAL.node && fl.INTERNAL.node.localStorage))
                            return !1;
                        try {
                            return t.setItem("__sak", "1"),
                            t.removeItem("__sak"),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }()) {
                        if ("Node" == ui())
                            throw new Yi("internal-error","The LocalStorage compatibility library was not found.");
                        throw new Yi("web-storage-unsupported")
                    }
                    this.a = lu() || fl.INTERNAL.node.localStorage,
                    this.type = "localStorage"
                }
                function lu() {
                    try {
                        var t = l.localStorage
                          , e = Ai();
                        return t && (t.setItem(e, "1"),
                        t.removeItem(e)),
                        t
                    } catch (t) {
                        return null
                    }
                }
                function fu() {
                    this.type = "nullStorage"
                }
                function du() {
                    if (!function() {
                        var t = "Node" == ui();
                        if (!(t = pu() || t && fl.INTERNAL.node && fl.INTERNAL.node.sessionStorage))
                            return !1;
                        try {
                            return t.setItem("__sak", "1"),
                            t.removeItem("__sak"),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }()) {
                        if ("Node" == ui())
                            throw new Yi("internal-error","The SessionStorage compatibility library was not found.");
                        throw new Yi("web-storage-unsupported")
                    }
                    this.a = pu() || fl.INTERNAL.node.sessionStorage,
                    this.type = "sessionStorage"
                }
                function pu() {
                    try {
                        var t = l.sessionStorage
                          , e = Ai();
                        return t && (t.setItem(e, "1"),
                        t.removeItem(e)),
                        t
                    } catch (t) {
                        return null
                    }
                }
                function vu() {
                    var t = {};
                    t.Browser = bu,
                    t.Node = yu,
                    t.ReactNative = wu,
                    t.Worker = Iu,
                    this.a = t[ui()]
                }
                Bs.prototype.c = function(n) {
                    var i = n.data.eventType
                      , r = n.data.eventId
                      , t = this.a[i];
                    if (t && 0 < t.length) {
                        n.ports[0].postMessage({
                            status: "ack",
                            eventId: r,
                            eventType: i,
                            response: null
                        });
                        var e = [];
                        M(t, function(t) {
                            e.push(Yt().then(function() {
                                return t(n.origin, n.data.data)
                            }))
                        }),
                        Zt(e).then(function(t) {
                            var e = [];
                            M(t, function(t) {
                                e.push({
                                    fulfilled: t.Gb,
                                    value: t.value,
                                    reason: t.reason ? t.reason.message : void 0
                                })
                            }),
                            M(e, function(t) {
                                for (var e in t)
                                    void 0 === t[e] && delete t[e]
                            }),
                            n.ports[0].postMessage({
                                status: "done",
                                eventId: r,
                                eventType: i,
                                response: e
                            })
                        })
                    }
                }
                ,
                Js.prototype.postMessage = function(t, e) {
                    this.a.postMessage(t, e)
                }
                ,
                Ys.prototype.close = function() {
                    for (; 0 < this.a.length; )
                        $s(this, this.a[0]);
                    this.b = !0
                }
                ,
                (t = Zs.prototype).set = function(n, i) {
                    var r, o = !1, a = this;
                    return tu(this).then(function(t) {
                        return ru((t = nu(iu(r = t, !0))).get(n))
                    }).then(function(t) {
                        var e = nu(iu(r, !0));
                        return t ? (t.value = i,
                        ru(e.put(t))) : (a.b++,
                        o = !0,
                        (t = {}).fbase_key = n,
                        t.value = i,
                        ru(e.add(t)))
                    }).then(function() {
                        return a.c[n] = i,
                        ou(a, n)
                    }).ka(function() {
                        o && a.b--
                    })
                }
                ,
                t.get = function(e) {
                    return tu(this).then(function(t) {
                        return ru(nu(iu(t, !1)).get(e))
                    }).then(function(t) {
                        return t && t.value
                    })
                }
                ,
                t.S = function(e) {
                    var n = !1
                      , i = this;
                    return tu(this).then(function(t) {
                        return n = !0,
                        i.b++,
                        ru(nu(iu(t, !0)).delete(e))
                    }).then(function() {
                        return delete i.c[e],
                        ou(i, e)
                    }).ka(function() {
                        n && i.b--
                    })
                }
                ,
                t.$ = function(t) {
                    0 == this.a.length && function(t) {
                        su(t),
                        function e() {
                            t.f = setTimeout(function() {
                                t.i = au(t).then(function(e) {
                                    0 < e.length && M(t.a, function(t) {
                                        t(e)
                                    })
                                }).then(function() {
                                    e()
                                }).s(function(t) {
                                    "STOP_EVENT" != t.message && e()
                                })
                            }, 800)
                        }()
                    }(this),
                    this.a.push(t)
                }
                ,
                t.ea = function(e) {
                    K(this.a, function(t) {
                        return t == e
                    }),
                    0 == this.a.length && su(this)
                }
                ,
                (t = uu.prototype).get = function(e) {
                    return this.b.then(function(t) {
                        return t.get(e)
                    })
                }
                ,
                t.set = function(e, n) {
                    return this.b.then(function(t) {
                        return t.set(e, n)
                    })
                }
                ,
                t.S = function(e) {
                    return this.b.then(function(t) {
                        return t.S(e)
                    })
                }
                ,
                t.$ = function(t) {
                    this.a.push(t)
                }
                ,
                t.ea = function(e) {
                    K(this.a, function(t) {
                        return t == e
                    })
                }
                ,
                (t = cu.prototype).get = function(t) {
                    return Yt(this.a[t])
                }
                ,
                t.set = function(t, e) {
                    return this.a[t] = e,
                    Yt()
                }
                ,
                t.S = function(t) {
                    return delete this.a[t],
                    Yt()
                }
                ,
                t.$ = function() {}
                ,
                t.ea = function() {}
                ,
                (t = hu.prototype).get = function(t) {
                    var e = this;
                    return Yt().then(function() {
                        return ki(e.a.getItem(t))
                    })
                }
                ,
                t.set = function(e, n) {
                    var i = this;
                    return Yt().then(function() {
                        var t = Ti(n);
                        null === t ? i.S(e) : i.a.setItem(e, t)
                    })
                }
                ,
                t.S = function(t) {
                    var e = this;
                    return Yt().then(function() {
                        e.a.removeItem(t)
                    })
                }
                ,
                t.$ = function(t) {
                    l.window && Be(l.window, "storage", t)
                }
                ,
                t.ea = function(t) {
                    l.window && Xe(l.window, "storage", t)
                }
                ,
                (t = fu.prototype).get = function() {
                    return Yt(null)
                }
                ,
                t.set = function() {
                    return Yt()
                }
                ,
                t.S = function() {
                    return Yt()
                }
                ,
                t.$ = function() {}
                ,
                t.ea = function() {}
                ,
                (t = du.prototype).get = function(t) {
                    var e = this;
                    return Yt().then(function() {
                        return ki(e.a.getItem(t))
                    })
                }
                ,
                t.set = function(e, n) {
                    var i = this;
                    return Yt().then(function() {
                        var t = Ti(n);
                        null === t ? i.S(e) : i.a.setItem(e, t)
                    })
                }
                ,
                t.S = function(t) {
                    var e = this;
                    return Yt().then(function() {
                        e.a.removeItem(t)
                    })
                }
                ,
                t.$ = function() {}
                ,
                t.ea = function() {}
                ;
                var mu, gu, bu = {
                    C: hu,
                    Sa: du
                }, yu = {
                    C: hu,
                    Sa: du
                }, wu = {
                    C: Hs,
                    Sa: fu
                }, Iu = {
                    C: hu,
                    Sa: fu
                }, Tu = {
                    $c: "local",
                    NONE: "none",
                    bd: "session"
                };
                function Eu() {
                    var t = !(Si(vi()) || !ai())
                      , e = Ii()
                      , n = gi();
                    this.m = t,
                    this.h = e,
                    this.l = n,
                    this.a = {},
                    t = mu = mu || new vu;
                    try {
                        this.g = !zn() && Ri() || !l.indexedDB ? new t.a.C : new uu(si() ? new cu : new t.a.C)
                    } catch (t) {
                        this.g = new cu,
                        this.h = !0
                    }
                    try {
                        this.i = new t.a.Sa
                    } catch (t) {
                        this.i = new cu
                    }
                    this.u = new cu,
                    this.f = I(this.Pb, this),
                    this.b = {}
                }
                function ku() {
                    return gu = gu || new Eu
                }
                function Au(t, e) {
                    switch (e) {
                    case "session":
                        return t.i;
                    case "none":
                        return t.u;
                    default:
                        return t.g
                    }
                }
                function Su(t, e) {
                    return "firebase:" + t.name + (e ? ":" + e : "")
                }
                function Nu(t, e, n) {
                    return n = Su(e, n),
                    "local" == e.C && (t.b[n] = null),
                    Au(t, e.C).S(n)
                }
                function Ou(t) {
                    t.c && (clearInterval(t.c),
                    t.c = null)
                }
                function _u(t) {
                    this.a = t,
                    this.b = ku()
                }
                (t = Eu.prototype).get = function(t, e) {
                    return Au(this, t.C).get(Su(t, e))
                }
                ,
                t.set = function(e, t, n) {
                    var i = Su(e, n)
                      , r = this
                      , o = Au(this, e.C);
                    return o.set(i, t).then(function() {
                        return o.get(i)
                    }).then(function(t) {
                        "local" == e.C && (r.b[i] = t)
                    })
                }
                ,
                t.addListener = function(t, e, n) {
                    t = Su(t, e),
                    this.l && (this.b[t] = l.localStorage.getItem(t)),
                    G(this.a) && (Au(this, "local").$(this.f),
                    this.h || (zn() || !Ri()) && l.indexedDB || !this.l || function(i) {
                        Ou(i),
                        i.c = setInterval(function() {
                            for (var t in i.a) {
                                var e = l.localStorage.getItem(t)
                                  , n = i.b[t];
                                e != n && (i.b[t] = e,
                                e = new Ce({
                                    type: "storage",
                                    key: t,
                                    target: window,
                                    oldValue: n,
                                    newValue: e,
                                    a: !0
                                }),
                                i.Pb(e))
                            }
                        }, 1e3)
                    }(this)),
                    this.a[t] || (this.a[t] = []),
                    this.a[t].push(n)
                }
                ,
                t.removeListener = function(t, e, n) {
                    t = Su(t, e),
                    this.a[t] && (K(this.a[t], function(t) {
                        return t == n
                    }),
                    0 == this.a[t].length && delete this.a[t]),
                    G(this.a) && (Au(this, "local").ea(this.f),
                    Ou(this))
                }
                ,
                t.Pb = function(t) {
                    if (t && t.f) {
                        var e = t.a.key;
                        if (null == e)
                            for (var n in this.a) {
                                var i = this.b[n];
                                void 0 === i && (i = null);
                                var r = l.localStorage.getItem(n);
                                r !== i && (this.b[n] = r,
                                this.Za(n))
                            }
                        else if (0 == e.indexOf("firebase:") && this.a[e]) {
                            if (void 0 !== t.a.a ? Au(this, "local").ea(this.f) : Ou(this),
                            this.m)
                                if (n = l.localStorage.getItem(e),
                                (i = t.a.newValue) !== n)
                                    null !== i ? l.localStorage.setItem(e, i) : l.localStorage.removeItem(e);
                                else if (this.b[e] === i && void 0 === t.a.a)
                                    return;
                            var o = this;
                            n = function() {
                                void 0 === t.a.a && o.b[e] === l.localStorage.getItem(e) || (o.b[e] = l.localStorage.getItem(e),
                                o.Za(e))
                            }
                            ,
                            me && Ae && 10 == Ae && l.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n()
                        }
                    } else
                        M(t, I(this.Za, this))
                }
                ,
                t.Za = function(t) {
                    this.a[t] && M(this.a[t], function(t) {
                        t()
                    })
                }
                ;
                var Pu, Ru = {
                    name: "authEvent",
                    C: "local"
                };
                function Du() {
                    this.a = ku()
                }
                function Cu(t, e) {
                    this.b = Lu,
                    this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b),
                    this.g = this.c = 0,
                    this.a = [],
                    this.i = t,
                    this.h = e,
                    this.l = l.Int32Array ? new Int32Array(64) : Array(64),
                    void 0 !== Pu || (Pu = l.Int32Array ? new Int32Array(Ku) : Ku),
                    this.reset()
                }
                k(Cu, function() {
                    this.b = -1
                });
                for (var Lu = 64, xu = Lu - 1, Mu = [], ju = 0; ju < xu; ju++)
                    Mu[ju] = 0;
                var Uu = q(128, Mu);
                function Vu(t) {
                    for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length; )
                        n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3],
                        r = 4 * i;
                    for (e = 16; e < 64; e++) {
                        r = 0 | n[e - 15],
                        i = 0 | n[e - 2];
                        var o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0
                          , a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
                        n[e] = o + a | 0
                    }
                    i = 0 | t.a[0],
                    r = 0 | t.a[1];
                    var s = 0 | t.a[2]
                      , u = 0 | t.a[3]
                      , c = 0 | t.a[4]
                      , h = 0 | t.a[5]
                      , l = 0 | t.a[6];
                    for (o = 0 | t.a[7],
                    e = 0; e < 64; e++) {
                        var f = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
                        a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & l) + (0 | Pu[e]) | 0) + (0 | n[e]) | 0) | 0,
                        o = l,
                        l = h,
                        h = c,
                        c = u + a | 0,
                        u = s,
                        s = r,
                        r = i,
                        i = a + f | 0
                    }
                    t.a[0] = t.a[0] + i | 0,
                    t.a[1] = t.a[1] + r | 0,
                    t.a[2] = t.a[2] + s | 0,
                    t.a[3] = t.a[3] + u | 0,
                    t.a[4] = t.a[4] + c | 0,
                    t.a[5] = t.a[5] + h | 0,
                    t.a[6] = t.a[6] + l | 0,
                    t.a[7] = t.a[7] + o | 0
                }
                function Fu(t, e, n) {
                    void 0 === n && (n = e.length);
                    var i = 0
                      , r = t.c;
                    if (h(e))
                        for (; i < n; )
                            t.f[r++] = e.charCodeAt(i++),
                            r == t.b && (Vu(t),
                            r = 0);
                    else {
                        if (!v(e))
                            throw Error("message must be string or array");
                        for (; i < n; ) {
                            var o = e[i++];
                            if (!("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o)))
                                throw Error("message must be a byte array");
                            t.f[r++] = o,
                            r == t.b && (Vu(t),
                            r = 0)
                        }
                    }
                    t.c = r,
                    t.g += n
                }
                Cu.prototype.reset = function() {
                    this.g = this.c = 0,
                    this.a = l.Int32Array ? new Int32Array(this.h) : H(this.h)
                }
                ;
                var Ku = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
                function qu() {
                    Cu.call(this, 8, Hu)
                }
                k(qu, Cu);
                var Hu = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
                function Bu(t, e, n, i, r) {
                    this.u = t,
                    this.i = e,
                    this.l = n,
                    this.m = i || null,
                    this.o = r || null,
                    this.h = e + ":" + n,
                    this.v = new Du,
                    this.g = new _u(this.h),
                    this.f = null,
                    this.b = [],
                    this.a = this.c = null
                }
                function Gu(t) {
                    return new Yi("invalid-cordova-configuration",t)
                }
                function Wu(t) {
                    var e = new qu;
                    Fu(e, t),
                    t = [];
                    var n = 8 * e.g;
                    e.c < 56 ? Fu(e, Uu, 56 - e.c) : Fu(e, Uu, e.b - (e.c - 56));
                    for (var i = 63; 56 <= i; i--)
                        e.f[i] = 255 & n,
                        n /= 256;
                    for (Vu(e),
                    i = n = 0; i < e.i; i++)
                        for (var r = 24; 0 <= r; r -= 8)
                            t[n++] = e.a[i] >> r & 255;
                    return function(t) {
                        return j(t, function(t) {
                            return 1 < (t = t.toString(16)).length ? t : "0" + t
                        }).join("")
                    }(t)
                }
                function Xu(t, e) {
                    for (var n = 0; n < t.b.length; n++)
                        try {
                            t.b[n](e)
                        } catch (t) {}
                }
                function Ju(i) {
                    return i.f || (i.f = i.ia().then(function() {
                        return new qt(function(n) {
                            i.ya(function t(e) {
                                return n(e),
                                i.La(t),
                                !1
                            }),
                            function(r) {
                                function e(i) {
                                    t = !0,
                                    n && n.cancel(),
                                    Yu(r).then(function(t) {
                                        var e = o;
                                        if (t && i && i.url) {
                                            var n = null;
                                            -1 != (e = Kr(i.url)).indexOf("/__/auth/callback") && (n = (n = "object" == typeof (n = ki(wn(n = In(e), "firebaseError") || null)) ? zi(n) : null) ? new wo(t.c,t.b,null,null,n,null,t.R()) : new wo(t.c,t.b,e,t.f,null,null,t.R())),
                                            e = n || o
                                        }
                                        Xu(r, e)
                                    })
                                }
                                var o = new wo("unknown",null,null,null,new Yi("no-auth-event"))
                                  , t = !1
                                  , n = un(500).then(function() {
                                    return Yu(r).then(function() {
                                        t || Xu(r, o)
                                    })
                                })
                                  , i = l.handleOpenURL;
                                l.handleOpenURL = function(t) {
                                    if (0 == t.toLowerCase().indexOf(mi("BuildInfo.packageName", l).toLowerCase() + "://") && e({
                                        url: t
                                    }),
                                    "function" == typeof i)
                                        try {
                                            i(t)
                                        } catch (t) {
                                            console.error(t)
                                        }
                                }
                                ,
                                ko = ko || new To,
                                function(t) {
                                    var n = ko;
                                    n.a.push(t),
                                    n.b || (n.b = function(t) {
                                        for (var e = 0; e < n.a.length; e++)
                                            n.a[e](t)
                                    }
                                    ,
                                    "function" == typeof (t = mi("universalLinks.subscribe", l)) && t(null, n.b))
                                }(e)
                            }(i)
                        }
                        )
                    })),
                    i.f
                }
                function Yu(e) {
                    var n = null;
                    return function(t) {
                        return t.b.get(Ru, t.a).then(function(t) {
                            return Io(t)
                        })
                    }(e.g).then(function(t) {
                        return n = t,
                        Nu((t = e.g).b, Ru, t.a)
                    }).then(function() {
                        return n
                    })
                }
                function zu(t) {
                    this.a = t,
                    this.b = ku()
                }
                (t = Bu.prototype).ia = function() {
                    return this.Ba ? this.Ba : this.Ba = (oi(void 0) ? ri().then(function() {
                        return new qt(function(t, e) {
                            var n = l.document
                              , i = setTimeout(function() {
                                e(Error("Cordova framework is not ready."))
                            }, 1e3);
                            n.addEventListener("deviceready", function() {
                                clearTimeout(i),
                                t()
                            }, !1)
                        }
                        )
                    }) : zt(Error("Cordova must run in an Android or iOS file scheme."))).then(function() {
                        if ("function" != typeof mi("universalLinks.subscribe", l))
                            throw Gu("cordova-universal-links-plugin-fix is not installed");
                        if (void 0 === mi("BuildInfo.packageName", l))
                            throw Gu("cordova-plugin-buildinfo is not installed");
                        if ("function" != typeof mi("cordova.plugins.browsertab.openUrl", l))
                            throw Gu("cordova-plugin-browsertab is not installed");
                        if ("function" != typeof mi("cordova.InAppBrowser.open", l))
                            throw Gu("cordova-plugin-inappbrowser is not installed")
                    }, function() {
                        throw new Yi("cordova-not-ready")
                    })
                }
                ,
                t.Fb = function(t, e) {
                    return e(new Yi("operation-not-supported-in-this-environment")),
                    Yt()
                }
                ,
                t.Db = function() {
                    return zt(new Yi("operation-not-supported-in-this-environment"))
                }
                ,
                t.Rb = function() {
                    return !1
                }
                ,
                t.Ob = function() {
                    return !0
                }
                ,
                t.Jb = function() {
                    return !0
                }
                ,
                t.Eb = function(t, e, n, i) {
                    if (this.c)
                        return zt(new Yi("redirect-operation-pending"));
                    var r = this
                      , o = l.document
                      , a = null
                      , s = null
                      , u = null
                      , c = null;
                    return this.c = Yt().then(function() {
                        return yo(e),
                        Ju(r)
                    }).then(function() {
                        return function(n, t, e, i, r) {
                            var o = function() {
                                for (var t = 20, e = []; 0 < t; )
                                    e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                                    t--;
                                return e.join("")
                            }()
                              , a = new wo(t,i,null,o,new Yi("no-auth-event"),null,r)
                              , s = mi("BuildInfo.packageName", l);
                            if ("string" != typeof s)
                                throw new Yi("invalid-cordova-configuration");
                            var u = mi("BuildInfo.displayName", l)
                              , c = {};
                            if (vi().toLowerCase().match(/iphone|ipad|ipod/))
                                c.ibi = s;
                            else {
                                if (!vi().toLowerCase().match(/android/))
                                    return zt(new Yi("operation-not-supported-in-this-environment"));
                                c.apn = s
                            }
                            u && (c.appDisplayName = u),
                            o = Wu(o),
                            c.sessionId = o;
                            var h = qs(n.u, n.i, n.l, t, e, null, i, n.m, c, n.o, r);
                            return n.ia().then(function() {
                                var t = n.h;
                                return n.v.a.set(Ru, a.A(), t)
                            }).then(function() {
                                var t = mi("cordova.plugins.browsertab.isAvailable", l);
                                if ("function" != typeof t)
                                    throw new Yi("invalid-cordova-configuration");
                                var e = null;
                                t(function(t) {
                                    if (t) {
                                        if ("function" != typeof (e = mi("cordova.plugins.browsertab.openUrl", l)))
                                            throw new Yi("invalid-cordova-configuration");
                                        e(h)
                                    } else {
                                        if ("function" != typeof (e = mi("cordova.InAppBrowser.open", l)))
                                            throw new Yi("invalid-cordova-configuration");
                                        t = vi(),
                                        n.a = e(h, t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || t.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes")
                                    }
                                })
                            })
                        }(r, t, e, n, i)
                    }).then(function() {
                        return new qt(function(e, t) {
                            s = function() {
                                var t = mi("cordova.plugins.browsertab.close", l);
                                return e(),
                                "function" == typeof t && t(),
                                r.a && "function" == typeof r.a.close && (r.a.close(),
                                r.a = null),
                                !1
                            }
                            ,
                            r.ya(s),
                            u = function() {
                                a = a || un(2e3).then(function() {
                                    t(new Yi("redirect-cancelled-by-user"))
                                })
                            }
                            ,
                            c = function() {
                                _i() && u()
                            }
                            ,
                            o.addEventListener("resume", u, !1),
                            vi().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", c, !1)
                        }
                        ).s(function(t) {
                            return Yu(r).then(function() {
                                throw t
                            })
                        })
                    }).ka(function() {
                        u && o.removeEventListener("resume", u, !1),
                        c && o.removeEventListener("visibilitychange", c, !1),
                        a && a.cancel(),
                        s && r.La(s),
                        r.c = null
                    })
                }
                ,
                t.ya = function(e) {
                    this.b.push(e),
                    Ju(this).s(function(t) {
                        "auth/invalid-cordova-configuration" === t.code && (t = new wo("unknown",null,null,null,new Yi("no-auth-event")),
                        e(t))
                    })
                }
                ,
                t.La = function(e) {
                    K(this.b, function(t) {
                        return t == e
                    })
                }
                ;
                var $u = {
                    name: "pendingRedirect",
                    C: "session"
                };
                function Zu(t) {
                    return Nu(t.b, $u, t.a)
                }
                function Qu(t, e, n) {
                    this.i = {},
                    this.v = 0,
                    this.B = t,
                    this.u = e,
                    this.m = n,
                    this.h = [],
                    this.f = !1,
                    this.l = I(this.o, this),
                    this.b = new dc,
                    this.w = new bc,
                    this.g = new zu(this.u + ":" + this.m),
                    this.c = {},
                    this.c.unknown = this.b,
                    this.c.signInViaRedirect = this.b,
                    this.c.linkViaRedirect = this.b,
                    this.c.reauthViaRedirect = this.b,
                    this.c.signInViaPopup = this.w,
                    this.c.linkViaPopup = this.w,
                    this.c.reauthViaPopup = this.w,
                    this.a = tc(this.B, this.u, this.m, Ar)
                }
                function tc(t, e, n, i) {
                    var r = fl.SDK_VERSION || null;
                    return oi() ? new Bu(t,e,n,r,i) : new Us(t,e,n,r,i)
                }
                function ec(e) {
                    e.f || (e.f = !0,
                    e.a.ya(e.l));
                    var n = e.a;
                    return e.a.ia().s(function(t) {
                        throw e.a == n && e.reset(),
                        t
                    })
                }
                function nc(n) {
                    n.a.Ob() && ec(n).s(function(t) {
                        var e = new wo("unknown",null,null,null,new Yi("operation-not-supported-in-this-environment"));
                        uc(t) && n.o(e)
                    }),
                    n.a.Jb() || pc(n.b)
                }
                function ic(n, t) {
                    V(n.h, t) || n.h.push(t),
                    n.f || function(t) {
                        return t.b.get($u, t.a).then(function(t) {
                            return "pending" == t
                        })
                    }(n.g).then(function(t) {
                        t ? Zu(n.g).then(function() {
                            ec(n).s(function(t) {
                                var e = new wo("unknown",null,null,null,new Yi("operation-not-supported-in-this-environment"));
                                uc(t) && n.o(e)
                            })
                        }) : nc(n)
                    }).s(function() {
                        nc(n)
                    })
                }
                function rc(t, e) {
                    K(t.h, function(t) {
                        return t == e
                    })
                }
                Qu.prototype.reset = function() {
                    this.f = !1,
                    this.a.La(this.l),
                    this.a = tc(this.B, this.u, this.m),
                    this.i = {}
                }
                ,
                Qu.prototype.o = function(t) {
                    if (!t)
                        throw new Yi("invalid-auth-event");
                    if (6e5 <= E() - this.v && (this.i = {},
                    this.v = 0),
                    t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
                        return !1;
                    for (var e = !1, n = 0; n < this.h.length; n++) {
                        var i = this.h[n];
                        if (i.xb(t.c, t.b)) {
                            (e = this.c[t.c]) && (e.h(t, i),
                            t && (t.f || t.b) && (this.i[t.getUid()] = !0,
                            this.v = E())),
                            e = !0;
                            break
                        }
                    }
                    return pc(this.b),
                    e
                }
                ;
                var oc = new Oi(2e3,1e4)
                  , ac = new Oi(3e4,6e4);
                function sc(t, e, n, i, r, o, a) {
                    return t.a.Db(e, n, i, function() {
                        t.f || (t.f = !0,
                        t.a.ya(t.l))
                    }, function() {
                        t.reset()
                    }, r, o, a)
                }
                function uc(t) {
                    return !(!t || "auth/cordova-not-ready" != t.code)
                }
                function cc(e, t, n, i, r) {
                    var o;
                    return function(t) {
                        return t.b.set($u, "pending", t.a)
                    }(e.g).then(function() {
                        return e.a.Eb(t, n, i, r).s(function(t) {
                            if (uc(t))
                                throw new Yi("operation-not-supported-in-this-environment");
                            return o = t,
                            Zu(e.g).then(function() {
                                throw o
                            })
                        }).then(function() {
                            return e.a.Rb() ? new qt(function() {}
                            ) : Zu(e.g).then(function() {
                                return e.oa()
                            }).then(function() {}).s(function() {})
                        })
                    })
                }
                function hc(t, e, n, i, r) {
                    return t.a.Fb(i, function(t) {
                        e.ja(n, null, t, r)
                    }, oc.get())
                }
                Qu.prototype.oa = function() {
                    return this.b.oa()
                }
                ;
                var lc = {};
                function fc(t, e, n) {
                    var i = e + ":" + n;
                    return lc[i] || (lc[i] = new Qu(t,e,n)),
                    lc[i]
                }
                function dc() {
                    this.b = null,
                    this.f = [],
                    this.c = [],
                    this.a = null,
                    this.i = this.g = !1
                }
                function pc(t) {
                    t.g || (t.g = !0,
                    gc(t, !1, null, null))
                }
                function vc(t) {
                    t.g && !t.i && gc(t, !1, null, null)
                }
                function mc(t, e) {
                    if (t.b = function() {
                        return Yt(e)
                    }
                    ,
                    t.f.length)
                        for (var n = 0; n < t.f.length; n++)
                            t.f[n](e)
                }
                function gc(t, e, n, i) {
                    e ? i ? function(t, e) {
                        if (t.b = function() {
                            return zt(e)
                        }
                        ,
                        t.c.length)
                            for (var n = 0; n < t.c.length; n++)
                                t.c[n](e)
                    }(t, i) : mc(t, n) : mc(t, {
                        user: null
                    }),
                    t.f = [],
                    t.c = []
                }
                function bc() {}
                function yc() {
                    this.vb = !1,
                    Object.defineProperty(this, "appVerificationDisabled", {
                        get: function() {
                            return this.vb
                        },
                        set: function(t) {
                            this.vb = t
                        },
                        enumerable: !1
                    })
                }
                function wc(t, e) {
                    this.a = e,
                    Mi(this, "verificationId", t)
                }
                function Ic(t, e, n, i) {
                    return new mo(t).Va(e, n).then(function(t) {
                        return new wc(t,i)
                    })
                }
                function Tc(t) {
                    var e = kr(t);
                    if (!(e && e.exp && e.auth_time && e.iat))
                        throw new Yi("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                    ji(this, {
                        token: t,
                        expirationTime: Pi(1e3 * e.exp),
                        authTime: Pi(1e3 * e.auth_time),
                        issuedAtTime: Pi(1e3 * e.iat),
                        signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null,
                        claims: e
                    })
                }
                function Ec(t, e, n) {
                    if (this.h = t,
                    this.i = e,
                    this.g = n,
                    this.c = 3e4,
                    this.f = 96e4,
                    this.b = null,
                    this.a = this.c,
                    this.f < this.c)
                        throw Error("Proactive refresh lower bound greater than upper bound!")
                }
                function kc(t, e) {
                    return e ? (t.a = t.c,
                    t.g()) : (e = t.a,
                    t.a *= 2,
                    t.a > t.f && (t.a = t.f),
                    e)
                }
                function Ac(t) {
                    this.f = t,
                    this.b = this.a = null,
                    this.c = 0
                }
                function Sc(t, e) {
                    var n = e[Da]
                      , i = e.refreshToken;
                    e = Nc(e.expiresIn),
                    t.b = n,
                    t.c = e,
                    t.a = i
                }
                function Nc(t) {
                    return E() + 1e3 * parseInt(t, 10)
                }
                function Oc(e, t) {
                    return function(t, i) {
                        return new qt(function(e, n) {
                            "refresh_token" == i.grant_type && i.refresh_token || "authorization_code" == i.grant_type && i.code ? Va(t, t.l + "?key=" + encodeURIComponent(t.c), function(t) {
                                t ? t.error ? n(_s(t)) : t.access_token && t.refresh_token ? e(t) : n(new Yi("internal-error")) : n(new Yi("network-request-failed"))
                            }, "POST", Cn(i).toString(), t.g, t.u.get()) : n(new Yi("internal-error"))
                        }
                        )
                    }(e.f, t).then(function(t) {
                        return e.b = t.access_token,
                        e.c = Nc(t.expires_in),
                        e.a = t.refresh_token,
                        {
                            accessToken: e.b,
                            expirationTime: e.c,
                            refreshToken: e.a
                        }
                    }).s(function(t) {
                        throw "auth/user-token-expired" == t.code && (e.a = null),
                        t
                    })
                }
                function _c(t, e) {
                    this.a = t || null,
                    this.b = e || null,
                    ji(this, {
                        lastSignInTime: Pi(e || null),
                        creationTime: Pi(t || null)
                    })
                }
                function Pc(t, e, n, i, r, o) {
                    ji(this, {
                        uid: t,
                        displayName: i || null,
                        photoURL: r || null,
                        email: n || null,
                        phoneNumber: o || null,
                        providerId: e
                    })
                }
                function Rc(t, e) {
                    for (var n in De.call(this, t),
                    e)
                        this[n] = e[n]
                }
                function Dc(t, e, n) {
                    this.I = [],
                    this.l = t.apiKey,
                    this.m = t.appName,
                    this.o = t.authDomain || null,
                    t = fl.SDK_VERSION ? pi(fl.SDK_VERSION) : null,
                    this.a = new Pa(this.l,Nr(Ar),t),
                    this.b = new Ac(this.a),
                    Vc(this, e[Da]),
                    Sc(this.b, e),
                    Mi(this, "refreshToken", this.b.a),
                    qc(this, n || {}),
                    nn.call(this),
                    this.J = !1,
                    this.o && bi() && (this.i = fc(this.o, this.l, this.m)),
                    this.O = [],
                    this.h = null,
                    this.w = function(e) {
                        return new Ec(function() {
                            return e.G(!0)
                        }
                        ,function(t) {
                            return !(!t || "auth/network-request-failed" != t.code)
                        }
                        ,function() {
                            var t = e.b.c - E() - 3e5;
                            return 0 < t ? t : 0
                        }
                        )
                    }(this),
                    this.W = I(this.Ha, this);
                    var i = this;
                    this.ga = null,
                    this.va = function(t) {
                        i.sa(t.g)
                    }
                    ,
                    this.Z = null,
                    this.P = [],
                    this.ua = function(t) {
                        Lc(i, t.c)
                    }
                    ,
                    this.Y = null
                }
                function Cc(t, e) {
                    t.Z && Xe(t.Z, "languageCodeChanged", t.va),
                    (t.Z = e) && Be(e, "languageCodeChanged", t.va)
                }
                function Lc(t, e) {
                    t.P = e,
                    Ua(t.a, fl.SDK_VERSION ? pi(fl.SDK_VERSION, t.P) : null)
                }
                function xc(t, e) {
                    t.Y && Xe(t.Y, "frameworkChanged", t.ua),
                    (t.Y = e) && Be(e, "frameworkChanged", t.ua)
                }
                function Mc(e) {
                    try {
                        return fl.app(e.m).auth()
                    } catch (t) {
                        throw new Yi("internal-error","No firebase.auth.Auth instance is available for the Firebase App '" + e.m + "'!")
                    }
                }
                function jc(t) {
                    t.B || t.w.b || (t.w.start(),
                    Xe(t, "tokenChanged", t.W),
                    Be(t, "tokenChanged", t.W))
                }
                function Uc(t) {
                    Xe(t, "tokenChanged", t.W),
                    t.w.stop()
                }
                function Vc(t, e) {
                    t.ma = e,
                    Mi(t, "_lat", e)
                }
                function Fc(t) {
                    for (var e = [], n = 0; n < t.O.length; n++)
                        e.push(t.O[n](t));
                    return Zt(e).then(function() {
                        return t
                    })
                }
                function Kc(t) {
                    t.i && !t.J && (t.J = !0,
                    ic(t.i, t))
                }
                function qc(t, e) {
                    ji(t, {
                        uid: e.uid,
                        displayName: e.displayName || null,
                        photoURL: e.photoURL || null,
                        email: e.email || null,
                        emailVerified: e.emailVerified || !1,
                        phoneNumber: e.phoneNumber || null,
                        isAnonymous: e.isAnonymous || !1,
                        tenantId: e.tenantId || null,
                        metadata: new _c(e.createdAt,e.lastLoginAt),
                        providerData: []
                    }),
                    t.a.b = t.tenantId
                }
                function Hc() {}
                function Bc(t) {
                    return Yt().then(function() {
                        if (t.B)
                            throw new Yi("app-deleted")
                    })
                }
                function Gc(t) {
                    return j(t.providerData, function(t) {
                        return t.providerId
                    })
                }
                function Wc(t, e) {
                    e && (Xc(t, e.providerId),
                    t.providerData.push(e))
                }
                function Xc(t, e) {
                    K(t.providerData, function(t) {
                        return t.providerId == e
                    })
                }
                function Jc(t, e, n) {
                    ("uid" != e || n) && t.hasOwnProperty(e) && Mi(t, e, n)
                }
                function Yc(e, t) {
                    e != t && (ji(e, {
                        uid: t.uid,
                        displayName: t.displayName,
                        photoURL: t.photoURL,
                        email: t.email,
                        emailVerified: t.emailVerified,
                        phoneNumber: t.phoneNumber,
                        isAnonymous: t.isAnonymous,
                        tenantId: t.tenantId,
                        providerData: []
                    }),
                    t.metadata ? Mi(e, "metadata", function(t) {
                        return new _c(t.a,t.b)
                    }(t.metadata)) : Mi(e, "metadata", new _c),
                    M(t.providerData, function(t) {
                        Wc(e, t)
                    }),
                    function(t, e) {
                        t.b = e.b,
                        t.a = e.a,
                        t.c = e.c
                    }(e.b, t.b),
                    Mi(e, "refreshToken", e.b.a))
                }
                function zc(n) {
                    return n.G().then(function(t) {
                        var e = n.isAnonymous;
                        return function(t, e) {
                            return Ns(t.a, us, {
                                idToken: e
                            }).then(I(t.zc, t))
                        }(n, t).then(function() {
                            return e || Jc(n, "isAnonymous", !1),
                            t
                        })
                    })
                }
                function $c(t, e) {
                    e[Da] && t.ma != e[Da] && (Sc(t.b, e),
                    t.dispatchEvent(new Rc("tokenChanged")),
                    Vc(t, e[Da]),
                    Jc(t, "refreshToken", t.b.a))
                }
                function Zc(t, e) {
                    return zc(t).then(function() {
                        if (V(Gc(t), e))
                            return Fc(t).then(function() {
                                throw new Yi("provider-already-linked")
                            })
                    })
                }
                function Qc(t, e, n) {
                    return Ui({
                        user: t,
                        credential: bo(e),
                        additionalUserInfo: e = Dr(e),
                        operationType: n
                    })
                }
                function th(t, e) {
                    return $c(t, e),
                    t.reload().then(function() {
                        return t
                    })
                }
                function eh(n, i, t, e, r) {
                    if (!bi())
                        return zt(new Yi("operation-not-supported-in-this-environment"));
                    if (n.h && !r)
                        return zt(n.h);
                    var o = Rr(t.providerId)
                      , a = Ai(n.uid + ":::")
                      , s = null;
                    (!Ii() || ai()) && n.o && t.isOAuthProvider && (s = qs(n.o, n.l, n.m, i, t, null, a, fl.SDK_VERSION || null, null, null, n.tenantId));
                    var u = ei(s, o && o.Da, o && o.Ca);
                    return e = e().then(function() {
                        if (ih(n),
                        !r)
                            return n.G().then(function() {})
                    }).then(function() {
                        return sc(n.i, u, i, t, a, !!s, n.tenantId)
                    }).then(function() {
                        return new qt(function(t, e) {
                            n.ja(i, null, new Yi("cancelled-popup-request"), n.g || null),
                            n.f = t,
                            n.v = e,
                            n.g = a,
                            n.c = hc(n.i, n, i, u, a)
                        }
                        )
                    }).then(function(t) {
                        return u && ti(u),
                        t ? Ui(t) : null
                    }).s(function(t) {
                        throw u && ti(u),
                        t
                    }),
                    rh(n, e, r)
                }
                function nh(e, t, n, i, r) {
                    if (!bi())
                        return zt(new Yi("operation-not-supported-in-this-environment"));
                    if (e.h && !r)
                        return zt(e.h);
                    var o = null
                      , a = Ai(e.uid + ":::");
                    return i = i().then(function() {
                        if (ih(e),
                        !r)
                            return e.G().then(function() {})
                    }).then(function() {
                        return e.ca = a,
                        Fc(e)
                    }).then(function(t) {
                        return e.da && (t = (t = e.da).b.set(sh, e.A(), t.a)),
                        t
                    }).then(function() {
                        return cc(e.i, t, n, a, e.tenantId)
                    }).s(function(t) {
                        if (o = t,
                        e.da)
                            return uh(e.da);
                        throw o
                    }).then(function() {
                        if (o)
                            throw o
                    }),
                    rh(e, i, r)
                }
                function ih(t) {
                    if (!t.i || !t.J) {
                        if (t.i && !t.J)
                            throw new Yi("internal-error");
                        throw new Yi("auth-domain-config-required")
                    }
                }
                function rh(t, e, n) {
                    var i = function(e, t, n) {
                        return e.h && !n ? (t.cancel(),
                        zt(e.h)) : t.s(function(t) {
                            throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (e.h || e.dispatchEvent(new Rc("userInvalidated")),
                            e.h = t),
                            t
                        })
                    }(t, e, n);
                    return t.I.push(i),
                    i.ka(function() {
                        F(t.I, i)
                    }),
                    i
                }
                function oh(t) {
                    if (!t.apiKey)
                        return null;
                    var e = {
                        apiKey: t.apiKey,
                        authDomain: t.authDomain,
                        appName: t.appName
                    }
                      , n = {};
                    if (!(t.stsTokenManager && t.stsTokenManager.accessToken && t.stsTokenManager.expirationTime))
                        return null;
                    n[Da] = t.stsTokenManager.accessToken,
                    n.refreshToken = t.stsTokenManager.refreshToken || null,
                    n.expiresIn = (t.stsTokenManager.expirationTime - E()) / 1e3;
                    var i = new Dc(e,n,t);
                    return t.providerData && M(t.providerData, function(t) {
                        t && Wc(i, Ui(t))
                    }),
                    t.redirectEventId && (i.ca = t.redirectEventId),
                    i
                }
                function ah(t) {
                    this.a = t,
                    this.b = ku()
                }
                dc.prototype.reset = function() {
                    this.b = null,
                    this.a && (this.a.cancel(),
                    this.a = null)
                }
                ,
                dc.prototype.h = function(t, e) {
                    if (t) {
                        this.reset(),
                        this.g = !0;
                        var n = t.c
                          , i = t.b
                          , r = t.a && "auth/web-storage-unsupported" == t.a.code
                          , o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
                        this.i = !(!r && !o),
                        "unknown" != n || r || o ? t.a ? (gc(this, !0, null, t.a),
                        Yt()) : e.za(n, i) ? function(e, t, n) {
                            n = n.za(t.c, t.b);
                            var i = t.g
                              , r = t.f
                              , o = t.i
                              , a = t.R()
                              , s = !!t.c.match(/Redirect$/);
                            n(i, r, a, o).then(function(t) {
                                gc(e, s, t, null)
                            }).s(function(t) {
                                gc(e, s, null, t)
                            })
                        }(this, t, e) : zt(new Yi("invalid-auth-event")) : (gc(this, !1, null, null),
                        Yt())
                    } else
                        zt(new Yi("invalid-auth-event"))
                }
                ,
                dc.prototype.oa = function() {
                    var n = this;
                    return new qt(function(t, e) {
                        n.b ? n.b().then(t, e) : (n.f.push(t),
                        n.c.push(e),
                        function(t) {
                            var e = new Yi("timeout");
                            t.a && t.a.cancel(),
                            t.a = un(ac.get()).then(function() {
                                t.b || (t.g = !0,
                                gc(t, !0, null, e))
                            })
                        }(n))
                    }
                    )
                }
                ,
                bc.prototype.h = function(t, e) {
                    if (t) {
                        var n = t.c
                          , i = t.b;
                        t.a ? (e.ja(t.c, null, t.a, t.b),
                        Yt()) : e.za(n, i) ? function(t, e) {
                            var n = t.b
                              , i = t.c;
                            e.za(i, n)(t.g, t.f, t.R(), t.i).then(function(t) {
                                e.ja(i, t, null, n)
                            }).s(function(t) {
                                e.ja(i, null, t, n)
                            })
                        }(t, e) : zt(new Yi("invalid-auth-event"))
                    } else
                        zt(new Yi("invalid-auth-event"))
                }
                ,
                wc.prototype.confirm = function(t) {
                    return t = go(this.verificationId, t),
                    this.a(t)
                }
                ,
                Ec.prototype.start = function() {
                    this.a = this.c,
                    function e(n, t) {
                        n.stop();
                        n.b = un(kc(n, t)).then(function() {
                            return e = l.document,
                            n = null,
                            _i() || !e ? Yt() : new qt(function(t) {
                                n = function() {
                                    _i() && (e.removeEventListener("visibilitychange", n, !1),
                                    t())
                                }
                                ,
                                e.addEventListener("visibilitychange", n, !1)
                            }
                            ).s(function(t) {
                                throw e.removeEventListener("visibilitychange", n, !1),
                                t
                            });
                            var e, n
                        }).then(function() {
                            return n.h()
                        }).then(function() {
                            e(n, !0)
                        }).s(function(t) {
                            n.i(t) && e(n, !1)
                        })
                    }(this, !0)
                }
                ,
                Ec.prototype.stop = function() {
                    this.b && (this.b.cancel(),
                    this.b = null)
                }
                ,
                Ac.prototype.A = function() {
                    return {
                        apiKey: this.f.c,
                        refreshToken: this.a,
                        accessToken: this.b,
                        expirationTime: this.c
                    }
                }
                ,
                Ac.prototype.getToken = function(t) {
                    return t = !!t,
                    this.b && !this.a ? zt(new Yi("user-token-expired")) : t || !this.b || E() > this.c - 3e4 ? this.a ? Oc(this, {
                        grant_type: "refresh_token",
                        refresh_token: this.a
                    }) : Yt(null) : Yt({
                        accessToken: this.b,
                        expirationTime: this.c,
                        refreshToken: this.a
                    })
                }
                ,
                _c.prototype.A = function() {
                    return {
                        lastLoginAt: this.b,
                        createdAt: this.a
                    }
                }
                ,
                k(Rc, De),
                k(Dc, nn),
                Dc.prototype.sa = function(t) {
                    this.ga = t,
                    ja(this.a, t)
                }
                ,
                Dc.prototype.ha = function() {
                    return this.ga
                }
                ,
                Dc.prototype.Aa = function() {
                    return H(this.P)
                }
                ,
                Dc.prototype.Ha = function() {
                    this.w.b && (this.w.stop(),
                    this.w.start())
                }
                ,
                Mi(Dc.prototype, "providerId", "firebase"),
                (t = Dc.prototype).reload = function() {
                    var t = this;
                    return rh(this, Bc(this).then(function() {
                        return zc(t).then(function() {
                            return Fc(t)
                        }).then(Hc)
                    }))
                }
                ,
                t.dc = function(t) {
                    return this.G(t).then(function(t) {
                        return new Tc(t)
                    })
                }
                ,
                t.G = function(t) {
                    var e = this;
                    return rh(this, Bc(this).then(function() {
                        return e.b.getToken(t)
                    }).then(function(t) {
                        if (!t)
                            throw new Yi("internal-error");
                        return t.accessToken != e.ma && (Vc(e, t.accessToken),
                        e.dispatchEvent(new Rc("tokenChanged"))),
                        Jc(e, "refreshToken", t.refreshToken),
                        t.accessToken
                    }))
                }
                ,
                t.zc = function(t) {
                    if (!(t = t.users) || !t.length)
                        throw new Yi("internal-error");
                    qc(this, {
                        uid: (t = t[0]).localId,
                        displayName: t.displayName,
                        photoURL: t.photoUrl,
                        email: t.email,
                        emailVerified: !!t.emailVerified,
                        phoneNumber: t.phoneNumber,
                        lastLoginAt: t.lastLoginAt,
                        createdAt: t.createdAt,
                        tenantId: t.tenantId
                    });
                    for (var e = function(t) {
                        return (t = t.providerUserInfo) && t.length ? j(t, function(t) {
                            return new Pc(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)
                        }) : []
                    }(t), n = 0; n < e.length; n++)
                        Wc(this, e[n]);
                    Jc(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length))
                }
                ,
                t.Ac = function(t) {
                    return Li("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),
                    this.gb(t)
                }
                ,
                t.gb = function(t) {
                    var e = this
                      , n = null;
                    return rh(this, t.f(this.a, this.uid).then(function(t) {
                        return $c(e, t),
                        n = Qc(e, t, "reauthenticate"),
                        e.h = null,
                        e.reload()
                    }).then(function() {
                        return n
                    }), !0)
                }
                ,
                t.rc = function(t) {
                    return Li("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),
                    this.eb(t)
                }
                ,
                t.eb = function(e) {
                    var n = this
                      , i = null;
                    return rh(this, Zc(this, e.providerId).then(function() {
                        return n.G()
                    }).then(function(t) {
                        return e.b(n.a, t)
                    }).then(function(t) {
                        return i = Qc(n, t, "link"),
                        th(n, t)
                    }).then(function() {
                        return i
                    }))
                }
                ,
                t.sc = function(t, e) {
                    var n = this;
                    return rh(this, Zc(this, "phone").then(function() {
                        return Ic(Mc(n), t, e, I(n.eb, n))
                    }))
                }
                ,
                t.Bc = function(t, e) {
                    var n = this;
                    return rh(this, Yt().then(function() {
                        return Ic(Mc(n), t, e, I(n.gb, n))
                    }), !0)
                }
                ,
                t.rb = function(e) {
                    var n = this;
                    return rh(this, this.G().then(function(t) {
                        return n.a.rb(t, e)
                    }).then(function(t) {
                        return $c(n, t),
                        n.reload()
                    }))
                }
                ,
                t.Sc = function(e) {
                    var n = this;
                    return rh(this, this.G().then(function(t) {
                        return e.b(n.a, t)
                    }).then(function(t) {
                        return $c(n, t),
                        n.reload()
                    }))
                }
                ,
                t.sb = function(e) {
                    var n = this;
                    return rh(this, this.G().then(function(t) {
                        return n.a.sb(t, e)
                    }).then(function(t) {
                        return $c(n, t),
                        n.reload()
                    }))
                }
                ,
                t.tb = function(e) {
                    if (void 0 === e.displayName && void 0 === e.photoURL)
                        return Bc(this);
                    var n = this;
                    return rh(this, this.G().then(function(t) {
                        return n.a.tb(t, {
                            displayName: e.displayName,
                            photoUrl: e.photoURL
                        })
                    }).then(function(t) {
                        return $c(n, t),
                        Jc(n, "displayName", t.displayName || null),
                        Jc(n, "photoURL", t.photoUrl || null),
                        M(n.providerData, function(t) {
                            "password" === t.providerId && (Mi(t, "displayName", n.displayName),
                            Mi(t, "photoURL", n.photoURL))
                        }),
                        Fc(n)
                    }).then(Hc))
                }
                ,
                t.Qc = function(e) {
                    var n = this;
                    return rh(this, zc(this).then(function(t) {
                        return V(Gc(n), e) ? function(t, e, n) {
                            return Ns(t, os, {
                                idToken: e,
                                deleteProvider: n
                            })
                        }(n.a, t, [e]).then(function(t) {
                            var e = {};
                            return M(t.providerUserInfo || [], function(t) {
                                e[t.providerId] = !0
                            }),
                            M(Gc(n), function(t) {
                                e[t] || Xc(n, t)
                            }),
                            e[mo.PROVIDER_ID] || Mi(n, "phoneNumber", null),
                            Fc(n)
                        }) : Fc(n).then(function() {
                            throw new Yi("no-such-provider")
                        })
                    }))
                }
                ,
                t.delete = function() {
                    var e = this;
                    return rh(this, this.G().then(function(t) {
                        return Ns(e.a, rs, {
                            idToken: t
                        })
                    }).then(function() {
                        e.dispatchEvent(new Rc("userDeleted"))
                    })).then(function() {
                        for (var t = 0; t < e.I.length; t++)
                            e.I[t].cancel("app-deleted");
                        Cc(e, null),
                        xc(e, null),
                        e.I = [],
                        e.B = !0,
                        Uc(e),
                        Mi(e, "refreshToken", null),
                        e.i && rc(e.i, e)
                    })
                }
                ,
                t.xb = function(t, e) {
                    return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.ca || null) == e || "reauthViaRedirect" == t && (this.ca || null) == e)
                }
                ,
                t.ja = function(t, e, n, i) {
                    "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
                    this.c && (this.c.cancel(),
                    this.c = null),
                    delete this.f,
                    delete this.v)
                }
                ,
                t.za = function(t, e) {
                    return "linkViaPopup" == t && e == (this.g || null) ? I(this.Bb, this) : "reauthViaPopup" == t && e == (this.g || null) ? I(this.Cb, this) : "linkViaRedirect" == t && (this.ca || null) == e ? I(this.Bb, this) : "reauthViaRedirect" == t && (this.ca || null) == e ? I(this.Cb, this) : null
                }
                ,
                t.tc = function(t) {
                    var e = this;
                    return eh(this, "linkViaPopup", t, function() {
                        return Zc(e, t.providerId).then(function() {
                            return Fc(e)
                        })
                    }, !1)
                }
                ,
                t.Cc = function(t) {
                    return eh(this, "reauthViaPopup", t, function() {
                        return Yt()
                    }, !0)
                }
                ,
                t.uc = function(t) {
                    var e = this;
                    return nh(this, "linkViaRedirect", t, function() {
                        return Zc(e, t.providerId)
                    }, !1)
                }
                ,
                t.Dc = function(t) {
                    return nh(this, "reauthViaRedirect", t, function() {
                        return Yt()
                    }, !0)
                }
                ,
                t.Bb = function(e, n, t, i) {
                    var r = this;
                    this.c && (this.c.cancel(),
                    this.c = null);
                    var o = null;
                    return t = this.G().then(function(t) {
                        return $a(r.a, {
                            requestUri: e,
                            postBody: i,
                            sessionId: n,
                            idToken: t
                        })
                    }).then(function(t) {
                        return o = Qc(r, t, "link"),
                        th(r, t)
                    }).then(function() {
                        return o
                    }),
                    rh(this, t)
                }
                ,
                t.Cb = function(t, e, n, i) {
                    var r = this;
                    this.c && (this.c.cancel(),
                    this.c = null);
                    var o = null;
                    return rh(this, Yt().then(function() {
                        return Hr(Za(r.a, {
                            requestUri: t,
                            sessionId: e,
                            postBody: i,
                            tenantId: n
                        }), r.uid)
                    }).then(function(t) {
                        return o = Qc(r, t, "reauthenticate"),
                        $c(r, t),
                        r.h = null,
                        r.reload()
                    }).then(function() {
                        return o
                    }), !0)
                }
                ,
                t.jb = function(e) {
                    var n = this
                      , i = null;
                    return rh(this, this.G().then(function(t) {
                        return i = t,
                        void 0 === e || G(e) ? {} : br(new ur(e))
                    }).then(function(t) {
                        return n.a.jb(i, t)
                    }).then(function(t) {
                        if (n.email != t)
                            return n.reload()
                    }).then(function() {}))
                }
                ,
                t.toJSON = function() {
                    return this.A()
                }
                ,
                t.A = function() {
                    var e = {
                        uid: this.uid,
                        displayName: this.displayName,
                        photoURL: this.photoURL,
                        email: this.email,
                        emailVerified: this.emailVerified,
                        phoneNumber: this.phoneNumber,
                        isAnonymous: this.isAnonymous,
                        tenantId: this.tenantId,
                        providerData: [],
                        apiKey: this.l,
                        appName: this.m,
                        authDomain: this.o,
                        stsTokenManager: this.b.A(),
                        redirectEventId: this.ca || null
                    };
                    return this.metadata && J(e, this.metadata.A()),
                    M(this.providerData, function(t) {
                        e.providerData.push(function(t) {
                            var e, n = {};
                            for (e in t)
                                t.hasOwnProperty(e) && (n[e] = t[e]);
                            return n
                        }(t))
                    }),
                    e
                }
                ;
                var sh = {
                    name: "redirectUser",
                    C: "session"
                };
                function uh(t) {
                    return Nu(t.b, sh, t.a)
                }
                function ch(t) {
                    this.a = t,
                    this.b = ku(),
                    this.c = null,
                    this.f = function(e) {
                        var n = fh("local")
                          , i = fh("session")
                          , r = fh("none");
                        return function(n, i, r) {
                            var o = Su(i, r)
                              , a = Au(n, i.C);
                            return n.get(i, r).then(function(t) {
                                var e = null;
                                try {
                                    e = ki(l.localStorage.getItem(o))
                                } catch (t) {}
                                if (e && !t)
                                    return l.localStorage.removeItem(o),
                                    n.set(i, e, r);
                                e && t && "localStorage" != a.type && l.localStorage.removeItem(o)
                            })
                        }(e.b, n, e.a).then(function() {
                            return e.b.get(i, e.a)
                        }).then(function(t) {
                            return t ? i : e.b.get(r, e.a).then(function(t) {
                                return t ? r : e.b.get(n, e.a).then(function(t) {
                                    return t ? n : e.b.get(lh, e.a).then(function(t) {
                                        return t ? fh(t) : n
                                    })
                                })
                            })
                        }).then(function(t) {
                            return e.c = t,
                            hh(e, t.C)
                        }).s(function() {
                            e.c || (e.c = n)
                        })
                    }(this),
                    this.b.addListener(fh("local"), this.a, I(this.g, this))
                }
                function hh(t, e) {
                    var n, i = [];
                    for (n in Tu)
                        Tu[n] !== e && i.push(Nu(t.b, fh(Tu[n]), t.a));
                    return i.push(Nu(t.b, lh, t.a)),
                    function(s) {
                        return new qt(function(n, e) {
                            var i = s.length
                              , r = [];
                            if (i)
                                for (var t = function(t, e) {
                                    i--,
                                    r[t] = e,
                                    0 == i && n(r)
                                }, o = function(t) {
                                    e(t)
                                }, a = 0; a < s.length; a++)
                                    $t(s[a], T(t, a), o);
                            else
                                n(r)
                        }
                        )
                    }(i)
                }
                ch.prototype.g = function() {
                    var e = this
                      , n = fh("local");
                    mh(this, function() {
                        return Yt().then(function() {
                            return e.c && "local" != e.c.C ? e.b.get(n, e.a) : null
                        }).then(function(t) {
                            if (t)
                                return hh(e, "local").then(function() {
                                    e.c = n
                                })
                        })
                    })
                }
                ;
                var lh = {
                    name: "persistence",
                    C: "session"
                };
                function fh(t) {
                    return {
                        name: "authUser",
                        C: t
                    }
                }
                function dh(t, e) {
                    return mh(t, function() {
                        return t.b.set(t.c, e.A(), t.a)
                    })
                }
                function ph(t) {
                    return mh(t, function() {
                        return Nu(t.b, t.c, t.a)
                    })
                }
                function vh(t, e) {
                    return mh(t, function() {
                        return t.b.get(t.c, t.a).then(function(t) {
                            return t && e && (t.authDomain = e),
                            oh(t || {})
                        })
                    })
                }
                function mh(t, e) {
                    return t.f = t.f.then(e, e),
                    t.f
                }
                function gh(t) {
                    if (this.l = !1,
                    Mi(this, "settings", new yc),
                    Mi(this, "app", t),
                    !Ah(this).options || !Ah(this).options.apiKey)
                        throw new Yi("invalid-api-key");
                    t = fl.SDK_VERSION ? pi(fl.SDK_VERSION) : null,
                    this.b = new Pa(Ah(this).options && Ah(this).options.apiKey,Nr(Ar),t),
                    this.O = [],
                    this.m = [],
                    this.J = [],
                    this.Ub = fl.INTERNAL.createSubscribe(I(this.oc, this)),
                    this.W = void 0,
                    this.Vb = fl.INTERNAL.createSubscribe(I(this.pc, this)),
                    Eh(this, null),
                    this.h = new ch(Ah(this).options.apiKey + ":" + Ah(this).name),
                    this.w = new ah(Ah(this).options.apiKey + ":" + Ah(this).name),
                    this.Y = _h(this, function(n) {
                        var t = Ah(n).options.authDomain
                          , e = function(e) {
                            var t = function(t, e) {
                                return t.b.get(sh, t.a).then(function(t) {
                                    return t && e && (t.authDomain = e),
                                    oh(t || {})
                                })
                            }(e.w, Ah(e).options.authDomain).then(function(t) {
                                return (e.B = t) && (t.da = e.w),
                                uh(e.w)
                            });
                            return _h(e, t)
                        }(n).then(function() {
                            return vh(n.h, t)
                        }).then(function(e) {
                            return e ? (e.da = n.w,
                            n.B && (n.B.ca || null) == (e.ca || null) ? e : e.reload().then(function() {
                                return dh(n.h, e).then(function() {
                                    return e
                                })
                            }).s(function(t) {
                                return "auth/network-request-failed" == t.code ? e : ph(n.h)
                            })) : null
                        }).then(function(t) {
                            Eh(n, t || null)
                        });
                        return _h(n, e)
                    }(this)),
                    this.i = _h(this, function(e) {
                        return e.Y.then(function() {
                            return Ih(e)
                        }).s(function() {}).then(function() {
                            if (!e.l)
                                return e.ma()
                        }).s(function() {}).then(function() {
                            if (!e.l) {
                                e.ga = !0;
                                var t = e.h;
                                t.b.addListener(fh("local"), t.a, e.ma)
                            }
                        })
                    }(this)),
                    this.ga = !1,
                    this.ma = I(this.Nc, this),
                    this.ub = I(this.aa, this),
                    this.ua = I(this.bc, this),
                    this.va = I(this.mc, this),
                    this.Ha = I(this.nc, this),
                    this.a = null,
                    function(e) {
                        var n = Ah(e).options.authDomain
                          , i = Ah(e).options.apiKey;
                        n && bi() && (e.Tb = e.Y.then(function() {
                            if (!e.l) {
                                if (e.a = fc(n, i, Ah(e).name),
                                ic(e.a, e),
                                Sh(e) && Kc(Sh(e)),
                                e.B) {
                                    Kc(e.B);
                                    var t = e.B;
                                    t.sa(e.ha()),
                                    Cc(t, e),
                                    Lc(t = e.B, e.I),
                                    xc(t, e),
                                    e.B = null
                                }
                                return e.a
                            }
                        }))
                    }(this),
                    this.INTERNAL = {},
                    this.INTERNAL.delete = I(this.delete, this),
                    this.INTERNAL.logFramework = I(this.vc, this),
                    this.o = 0,
                    nn.call(this),
                    function(t) {
                        Object.defineProperty(t, "lc", {
                            get: function() {
                                return this.ha()
                            },
                            set: function(t) {
                                this.sa(t)
                            },
                            enumerable: !1
                        }),
                        t.Z = null,
                        Object.defineProperty(t, "ti", {
                            get: function() {
                                return this.R()
                            },
                            set: function(t) {
                                this.nb(t)
                            },
                            enumerable: !1
                        }),
                        t.P = null
                    }(this),
                    this.I = []
                }
                function bh(t) {
                    De.call(this, "languageCodeChanged"),
                    this.g = t
                }
                function yh(t) {
                    De.call(this, "frameworkChanged"),
                    this.c = t
                }
                function wh(t) {
                    return t.Tb || zt(new Yi("auth-domain-config-required"))
                }
                function Ih(t) {
                    if (!bi())
                        return zt(new Yi("operation-not-supported-in-this-environment"));
                    var e = wh(t).then(function() {
                        return t.a.oa()
                    }).then(function(t) {
                        return t ? Ui(t) : null
                    });
                    return _h(t, e)
                }
                function Th(e, t) {
                    var n = {};
                    return n.apiKey = Ah(e).options.apiKey,
                    n.authDomain = Ah(e).options.authDomain,
                    n.appName = Ah(e).name,
                    e.Y.then(function() {
                        return function(t, e, n, i) {
                            var r = new Dc(t,e);
                            return n && (r.da = n),
                            i && Lc(r, i),
                            r.reload().then(function() {
                                return r
                            })
                        }(n, t, e.w, e.Aa())
                    }).then(function(t) {
                        return Sh(e) && t.uid == Sh(e).uid ? Yc(Sh(e), t) : (Eh(e, t),
                        Kc(t)),
                        e.aa(t)
                    }).then(function() {
                        Oh(e)
                    })
                }
                function Eh(t, e) {
                    Sh(t) && (function(t, e) {
                        K(t.O, function(t) {
                            return t == e
                        })
                    }(Sh(t), t.ub),
                    Xe(Sh(t), "tokenChanged", t.ua),
                    Xe(Sh(t), "userDeleted", t.va),
                    Xe(Sh(t), "userInvalidated", t.Ha),
                    Uc(Sh(t))),
                    e && (e.O.push(t.ub),
                    Be(e, "tokenChanged", t.ua),
                    Be(e, "userDeleted", t.va),
                    Be(e, "userInvalidated", t.Ha),
                    0 < t.o && jc(e)),
                    Mi(t, "currentUser", e),
                    e && (e.sa(t.ha()),
                    Cc(e, t),
                    Lc(e, t.I),
                    xc(e, t))
                }
                function kh(e, t) {
                    var n = null
                      , i = null;
                    return _h(e, t.then(function(t) {
                        return n = bo(t),
                        i = Dr(t),
                        Th(e, t)
                    }).then(function() {
                        return Ui({
                            user: Sh(e),
                            credential: n,
                            additionalUserInfo: i,
                            operationType: "signIn"
                        })
                    }))
                }
                function Ah(t) {
                    return t.app
                }
                function Sh(t) {
                    return t.currentUser
                }
                function Nh(t) {
                    return Sh(t) && Sh(t)._lat || null
                }
                function Oh(t) {
                    if (t.ga) {
                        for (var e = 0; e < t.m.length; e++)
                            t.m[e] && t.m[e](Nh(t));
                        if (t.W !== t.getUid() && t.J.length)
                            for (t.W = t.getUid(),
                            e = 0; e < t.J.length; e++)
                                t.J[e] && t.J[e](Nh(t))
                    }
                }
                function _h(t, e) {
                    return t.O.push(e),
                    e.ka(function() {
                        F(t.O, e)
                    }),
                    e
                }
                function Ph() {}
                function Rh() {
                    this.a = {},
                    this.b = 1e12
                }
                ch.prototype.mb = function(e) {
                    var n = null
                      , i = this;
                    return function(t) {
                        var e = new Yi("invalid-persistence-type")
                          , n = new Yi("unsupported-persistence-type");
                        t: {
                            for (i in Tu)
                                if (Tu[i] == t) {
                                    var i = !0;
                                    break t
                                }
                            i = !1
                        }
                        if (!i || "string" != typeof t)
                            throw e;
                        switch (ui()) {
                        case "ReactNative":
                            if ("session" === t)
                                throw n;
                            break;
                        case "Node":
                            if ("none" !== t)
                                throw n;
                            break;
                        default:
                            if (!gi() && "none" !== t)
                                throw n
                        }
                    }(e),
                    mh(this, function() {
                        return e != i.c.C ? i.b.get(i.c, i.a).then(function(t) {
                            return n = t,
                            hh(i, e)
                        }).then(function() {
                            if (i.c = fh(e),
                            n)
                                return i.b.set(i.c, n, i.a)
                        }) : Yt()
                    })
                }
                ,
                k(gh, nn),
                k(bh, De),
                k(yh, De),
                (t = gh.prototype).mb = function(t) {
                    return t = this.h.mb(t),
                    _h(this, t)
                }
                ,
                t.sa = function(t) {
                    this.Z === t || this.l || (this.Z = t,
                    ja(this.b, this.Z),
                    this.dispatchEvent(new bh(this.ha())))
                }
                ,
                t.ha = function() {
                    return this.Z
                }
                ,
                t.Tc = function() {
                    var t = l.navigator;
                    this.sa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null)
                }
                ,
                t.vc = function(t) {
                    this.I.push(t),
                    Ua(this.b, fl.SDK_VERSION ? pi(fl.SDK_VERSION, this.I) : null),
                    this.dispatchEvent(new yh(this.I))
                }
                ,
                t.Aa = function() {
                    return H(this.I)
                }
                ,
                t.nb = function(t) {
                    this.P === t || this.l || (this.P = t,
                    this.b.b = this.P)
                }
                ,
                t.R = function() {
                    return this.P
                }
                ,
                t.toJSON = function() {
                    return {
                        apiKey: Ah(this).options.apiKey,
                        authDomain: Ah(this).options.authDomain,
                        appName: Ah(this).name,
                        currentUser: Sh(this) && Sh(this).A()
                    }
                }
                ,
                t.xb = function(t, e) {
                    switch (t) {
                    case "unknown":
                    case "signInViaRedirect":
                        return !0;
                    case "signInViaPopup":
                        return this.g == e && !!this.f;
                    default:
                        return !1
                    }
                }
                ,
                t.ja = function(t, e, n, i) {
                    "signInViaPopup" == t && this.g == i && (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
                    this.c && (this.c.cancel(),
                    this.c = null),
                    delete this.f,
                    delete this.v)
                }
                ,
                t.za = function(t, e) {
                    return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? I(this.ac, this) : null
                }
                ,
                t.ac = function(t, e, n, i) {
                    var r = this;
                    t = {
                        requestUri: t,
                        postBody: i,
                        sessionId: e,
                        tenantId: n
                    },
                    this.c && (this.c.cancel(),
                    this.c = null);
                    var o = null
                      , a = null
                      , s = za(r.b, t).then(function(t) {
                        return o = bo(t),
                        a = Dr(t),
                        t
                    });
                    return _h(this, t = r.Y.then(function() {
                        return s
                    }).then(function(t) {
                        return Th(r, t)
                    }).then(function() {
                        return Ui({
                            user: Sh(r),
                            credential: o,
                            additionalUserInfo: a,
                            operationType: "signIn"
                        })
                    }))
                }
                ,
                t.Lc = function(e) {
                    if (!bi())
                        return zt(new Yi("operation-not-supported-in-this-environment"));
                    var n = this
                      , t = Rr(e.providerId)
                      , i = Ai()
                      , r = null;
                    (!Ii() || ai()) && Ah(this).options.authDomain && e.isOAuthProvider && (r = qs(Ah(this).options.authDomain, Ah(this).options.apiKey, Ah(this).name, "signInViaPopup", e, null, i, fl.SDK_VERSION || null, null, null, this.R()));
                    var o = ei(r, t && t.Da, t && t.Ca);
                    return _h(this, t = wh(this).then(function(t) {
                        return sc(t, o, "signInViaPopup", e, i, !!r, n.R())
                    }).then(function() {
                        return new qt(function(t, e) {
                            n.ja("signInViaPopup", null, new Yi("cancelled-popup-request"), n.g),
                            n.f = t,
                            n.v = e,
                            n.g = i,
                            n.c = hc(n.a, n, "signInViaPopup", o, i)
                        }
                        )
                    }).then(function(t) {
                        return o && ti(o),
                        t ? Ui(t) : null
                    }).s(function(t) {
                        throw o && ti(o),
                        t
                    }))
                }
                ,
                t.Mc = function(t) {
                    if (!bi())
                        return zt(new Yi("operation-not-supported-in-this-environment"));
                    var e = this;
                    return _h(this, wh(this).then(function() {
                        return function(t) {
                            return mh(t, function() {
                                return t.b.set(lh, t.c.C, t.a)
                            })
                        }(e.h)
                    }).then(function() {
                        return cc(e.a, "signInViaRedirect", t, void 0, e.R())
                    }))
                }
                ,
                t.oa = function() {
                    var e = this;
                    return Ih(this).then(function(t) {
                        return e.a && vc(e.a.b),
                        t
                    }).s(function(t) {
                        throw e.a && vc(e.a.b),
                        t
                    })
                }
                ,
                t.Rc = function(t) {
                    if (!t)
                        return zt(new Yi("null-user"));
                    if (this.P != t.tenantId)
                        return zt(new Yi("tenant-id-mismatch"));
                    var e = this
                      , n = {};
                    n.apiKey = Ah(this).options.apiKey,
                    n.authDomain = Ah(this).options.authDomain,
                    n.appName = Ah(this).name;
                    var i = function(t, e, n, i) {
                        e = e || {
                            apiKey: t.l,
                            authDomain: t.o,
                            appName: t.m
                        };
                        var r = t.b
                          , o = {};
                        return o[Da] = r.b,
                        o.refreshToken = r.a,
                        o.expiresIn = (r.c - E()) / 1e3,
                        e = new Dc(e,o),
                        n && (e.da = n),
                        i && Lc(e, i),
                        Yc(e, t),
                        e
                    }(t, n, e.w, e.Aa());
                    return _h(this, this.i.then(function() {
                        if (Ah(e).options.apiKey != t.l)
                            return i.reload()
                    }).then(function() {
                        return Sh(e) && t.uid == Sh(e).uid ? (Yc(Sh(e), t),
                        e.aa(t)) : (Eh(e, i),
                        Kc(i),
                        e.aa(i))
                    }).then(function() {
                        Oh(e)
                    }))
                }
                ,
                t.pb = function() {
                    var t = this
                      , e = this.i.then(function() {
                        return t.a && vc(t.a.b),
                        Sh(t) ? (Eh(t, null),
                        ph(t.h).then(function() {
                            Oh(t)
                        })) : Yt()
                    });
                    return _h(this, e)
                }
                ,
                t.Nc = function() {
                    var i = this;
                    return vh(this.h, Ah(this).options.authDomain).then(function(t) {
                        if (!i.l) {
                            var e;
                            if (e = Sh(i) && t) {
                                e = Sh(i).uid;
                                var n = t.uid;
                                e = null != e && "" !== e && null != n && "" !== n && e == n
                            }
                            if (e)
                                return Yc(Sh(i), t),
                                Sh(i).G();
                            (Sh(i) || t) && (Eh(i, t),
                            t && (Kc(t),
                            t.da = i.w),
                            i.a && ic(i.a, i),
                            Oh(i))
                        }
                    })
                }
                ,
                t.aa = function(t) {
                    return dh(this.h, t)
                }
                ,
                t.bc = function() {
                    Oh(this),
                    this.aa(Sh(this))
                }
                ,
                t.mc = function() {
                    this.pb()
                }
                ,
                t.nc = function() {
                    this.pb()
                }
                ,
                t.oc = function(t) {
                    var e = this;
                    this.addAuthTokenListener(function() {
                        t.next(Sh(e))
                    })
                }
                ,
                t.pc = function(t) {
                    var e = this;
                    !function(t, e) {
                        t.J.push(e),
                        _h(t, t.i.then(function() {
                            !t.l && V(t.J, e) && t.W !== t.getUid() && (t.W = t.getUid(),
                            e(Nh(t)))
                        }))
                    }(this, function() {
                        t.next(Sh(e))
                    })
                }
                ,
                t.xc = function(t, e, n) {
                    var i = this;
                    return this.ga && Promise.resolve().then(function() {
                        m(t) ? t(Sh(i)) : m(t.next) && t.next(Sh(i))
                    }),
                    this.Ub(t, e, n)
                }
                ,
                t.wc = function(t, e, n) {
                    var i = this;
                    return this.ga && Promise.resolve().then(function() {
                        i.W = i.getUid(),
                        m(t) ? t(Sh(i)) : m(t.next) && t.next(Sh(i))
                    }),
                    this.Vb(t, e, n)
                }
                ,
                t.cc = function(t) {
                    var e = this
                      , n = this.i.then(function() {
                        return Sh(e) ? Sh(e).G(t).then(function(t) {
                            return {
                                accessToken: t
                            }
                        }) : null
                    });
                    return _h(this, n)
                }
                ,
                t.Hc = function(t) {
                    var n = this;
                    return this.i.then(function() {
                        return kh(n, Ns(n.b, Ts, {
                            token: t
                        }))
                    }).then(function(t) {
                        var e = t.user;
                        return Jc(e, "isAnonymous", !1),
                        n.aa(e),
                        t
                    })
                }
                ,
                t.Ic = function(t, e) {
                    var n = this;
                    return this.i.then(function() {
                        return kh(n, Ns(n.b, Es, {
                            email: t,
                            password: e
                        }))
                    })
                }
                ,
                t.Xb = function(t, e) {
                    var n = this;
                    return this.i.then(function() {
                        return kh(n, Ns(n.b, ns, {
                            email: t,
                            password: e
                        }))
                    })
                }
                ,
                t.Ra = function(t) {
                    var e = this;
                    return this.i.then(function() {
                        return kh(e, t.na(e.b))
                    })
                }
                ,
                t.Gc = function(t) {
                    return Li("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),
                    this.Ra(t)
                }
                ,
                t.ob = function() {
                    var n = this;
                    return this.i.then(function() {
                        var t = Sh(n);
                        return t && t.isAnonymous ? Ui({
                            user: t,
                            credential: null,
                            additionalUserInfo: Ui({
                                providerId: null,
                                isNewUser: !1
                            }),
                            operationType: "signIn"
                        }) : kh(n, n.b.ob()).then(function(t) {
                            var e = t.user;
                            return Jc(e, "isAnonymous", !0),
                            n.aa(e),
                            t
                        })
                    })
                }
                ,
                t.getUid = function() {
                    return Sh(this) && Sh(this).uid || null
                }
                ,
                t.Wb = function(t) {
                    this.addAuthTokenListener(t),
                    this.o++,
                    0 < this.o && Sh(this) && jc(Sh(this))
                }
                ,
                t.Ec = function(e) {
                    var n = this;
                    M(this.m, function(t) {
                        t == e && n.o--
                    }),
                    this.o < 0 && (this.o = 0),
                    0 == this.o && Sh(this) && Uc(Sh(this)),
                    this.removeAuthTokenListener(e)
                }
                ,
                t.addAuthTokenListener = function(t) {
                    var e = this;
                    this.m.push(t),
                    _h(this, this.i.then(function() {
                        e.l || V(e.m, t) && t(Nh(e))
                    }))
                }
                ,
                t.removeAuthTokenListener = function(e) {
                    K(this.m, function(t) {
                        return t == e
                    })
                }
                ,
                t.delete = function() {
                    this.l = !0;
                    for (var t = 0; t < this.O.length; t++)
                        this.O[t].cancel("app-deleted");
                    return this.O = [],
                    this.h && (t = this.h).b.removeListener(fh("local"), t.a, this.ma),
                    this.a && (rc(this.a, this),
                    vc(this.a.b)),
                    Promise.resolve()
                }
                ,
                t.$b = function(t) {
                    return _h(this, function(t, e) {
                        return Ns(t, is, {
                            identifier: e,
                            continueUri: yi() ? $n() : "http://localhost"
                        }).then(function(t) {
                            return t.signinMethods || []
                        })
                    }(this.b, t))
                }
                ,
                t.qc = function(t) {
                    return !!lo(t)
                }
                ,
                t.lb = function(e, n) {
                    var i = this;
                    return _h(this, Yt().then(function() {
                        var t = new ur(n);
                        if (!t.c)
                            throw new Yi("argument-error",lr + " must be true when sending sign in link to email");
                        return br(t)
                    }).then(function(t) {
                        return i.b.lb(e, t)
                    }).then(function() {}))
                }
                ,
                t.Uc = function(t) {
                    return this.Ka(t).then(function(t) {
                        return t.data.email
                    })
                }
                ,
                t.$a = function(t, e) {
                    return _h(this, this.b.$a(t, e).then(function() {}))
                }
                ,
                t.Ka = function(t) {
                    return _h(this, this.b.Ka(t).then(function(t) {
                        return new Fi(t)
                    }))
                }
                ,
                t.Xa = function(t) {
                    return _h(this, this.b.Xa(t).then(function() {}))
                }
                ,
                t.kb = function(e, t) {
                    var n = this;
                    return _h(this, Yt().then(function() {
                        return void 0 === t || G(t) ? {} : br(new ur(t))
                    }).then(function(t) {
                        return n.b.kb(e, t)
                    }).then(function() {}))
                }
                ,
                t.Kc = function(t, e) {
                    return _h(this, Ic(this, t, e, I(this.Ra, this)))
                }
                ,
                t.Jc = function(n, i) {
                    var r = this;
                    return _h(this, Yt().then(function() {
                        var t = i || $n()
                          , e = ho(n, t);
                        if (!(t = lo(t)))
                            throw new Yi("argument-error","Invalid email link!");
                        if (t.tenantId !== r.R())
                            throw new Yi("tenant-id-mismatch");
                        return r.Ra(e)
                    }))
                }
                ,
                Ph.prototype.render = function() {}
                ,
                Ph.prototype.reset = function() {}
                ,
                Ph.prototype.getResponse = function() {}
                ,
                Ph.prototype.execute = function() {}
                ;
                var Dh = null;
                function Ch(t, e) {
                    return (e = Lh(e)) && t.a[e] || null
                }
                function Lh(t) {
                    return (t = void 0 === t ? 1e12 : t) ? t.toString() : null
                }
                function xh(t, e) {
                    this.g = !1,
                    this.c = e,
                    this.a = this.b = null,
                    this.h = "invisible" !== this.c.size,
                    this.f = Fn(t);
                    var n = this;
                    this.i = function() {
                        n.execute()
                    }
                    ,
                    this.h ? this.execute() : Be(this.f, "click", this.i)
                }
                function Mh(t) {
                    if (t.g)
                        throw Error("reCAPTCHA mock was already deleted!")
                }
                function jh() {}
                Rh.prototype.render = function(t, e) {
                    return this.a[this.b.toString()] = new xh(t,e),
                    this.b++
                }
                ,
                Rh.prototype.reset = function(t) {
                    var e = Ch(this, t);
                    t = Lh(t),
                    e && t && (e.delete(),
                    delete this.a[t])
                }
                ,
                Rh.prototype.getResponse = function(t) {
                    return (t = Ch(this, t)) ? t.getResponse() : null
                }
                ,
                Rh.prototype.execute = function(t) {
                    (t = Ch(this, t)) && t.execute()
                }
                ,
                xh.prototype.getResponse = function() {
                    return Mh(this),
                    this.b
                }
                ,
                xh.prototype.execute = function() {
                    Mh(this);
                    var n = this;
                    this.a || (this.a = setTimeout(function() {
                        n.b = function() {
                            for (var t = 50, e = []; 0 < t; )
                                e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                                t--;
                            return e.join("")
                        }();
                        var t = n.c.callback
                          , e = n.c["expired-callback"];
                        if (t)
                            try {
                                t(n.b)
                            } catch (t) {}
                        n.a = setTimeout(function() {
                            if (n.a = null,
                            n.b = null,
                            e)
                                try {
                                    e()
                                } catch (t) {}
                            n.h && n.execute()
                        }, 6e4)
                    }, 500))
                }
                ,
                xh.prototype.delete = function() {
                    Mh(this),
                    this.g = !0,
                    clearTimeout(this.a),
                    this.a = null,
                    Xe(this.f, "click", this.i)
                }
                ,
                jh.prototype.g = function() {
                    return Yt(Dh = Dh || new Rh)
                }
                ,
                jh.prototype.c = function() {}
                ;
                var Uh = null;
                function Vh() {
                    this.b = l.grecaptcha ? 1 / 0 : 0,
                    this.f = null,
                    this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
                }
                var Fh = new Y(Z,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}")
                  , Kh = new Oi(3e4,6e4);
                Vh.prototype.g = function(r) {
                    var o = this;
                    return new qt(function(t, e) {
                        var i = setTimeout(function() {
                            e(new Yi("network-request-failed"))
                        }, Kh.get());
                        !l.grecaptcha || r !== o.f && !o.b ? (l[o.a] = function() {
                            if (l.grecaptcha) {
                                o.f = r;
                                var n = l.grecaptcha.render;
                                l.grecaptcha.render = function(t, e) {
                                    return t = n(t, e),
                                    o.b++,
                                    t
                                }
                                ,
                                clearTimeout(i),
                                t(l.grecaptcha)
                            } else
                                clearTimeout(i),
                                e(new Yi("internal-error"));
                            delete l[o.a]
                        }
                        ,
                        Yt(Ea(nt(Fh, {
                            onload: o.a,
                            hl: r || ""
                        }))).s(function() {
                            clearTimeout(i),
                            e(new Yi("internal-error","Unable to load external reCAPTCHA dependencies!"))
                        })) : (clearTimeout(i),
                        t(l.grecaptcha))
                    }
                    )
                }
                ,
                Vh.prototype.c = function() {
                    this.b--
                }
                ;
                var qh = null;
                function Hh(t, e, n, i, r, o, a) {
                    if (Mi(this, "type", "recaptcha"),
                    this.c = this.f = null,
                    this.B = !1,
                    this.u = e,
                    this.g = null,
                    a = a ? Uh = Uh || new jh : qh = qh || new Vh,
                    this.m = a,
                    this.a = n || {
                        theme: "light",
                        type: "image"
                    },
                    this.h = [],
                    this.a[Wh])
                        throw new Yi("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                    if (this.i = "invisible" === this.a[Xh],
                    !l.document)
                        throw new Yi("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
                    if (!Fn(e) || !this.i && Fn(e).hasChildNodes())
                        throw new Yi("argument-error","reCAPTCHA container is either not found or already contains inner elements!");
                    this.o = new Pa(t,o || null,r || null),
                    this.v = i || function() {
                        return null
                    }
                    ;
                    var s = this;
                    this.l = [];
                    var u = this.a[Bh];
                    this.a[Bh] = function(t) {
                        if (Jh(s, t),
                        "function" == typeof u)
                            u(t);
                        else if ("string" == typeof u) {
                            var e = mi(u, l);
                            "function" == typeof e && e(t)
                        }
                    }
                    ;
                    var c = this.a[Gh];
                    this.a[Gh] = function() {
                        if (Jh(s, null),
                        "function" == typeof c)
                            c();
                        else if ("string" == typeof c) {
                            var t = mi(c, l);
                            "function" == typeof t && t()
                        }
                    }
                }
                var Bh = "callback"
                  , Gh = "expired-callback"
                  , Wh = "sitekey"
                  , Xh = "size";
                function Jh(t, e) {
                    for (var n = 0; n < t.l.length; n++)
                        try {
                            t.l[n](e)
                        } catch (t) {}
                }
                function Yh(t, e) {
                    return t.h.push(e),
                    e.ka(function() {
                        F(t.h, e)
                    }),
                    e
                }
                function zh(t) {
                    if (t.B)
                        throw new Yi("internal-error","RecaptchaVerifier instance has been destroyed.")
                }
                function $h(t, e, n) {
                    var i = !1;
                    try {
                        this.b = n || fl.app()
                    } catch (t) {
                        throw new Yi("argument-error","No firebase.app.App instance is currently initialized.")
                    }
                    if (!this.b.options || !this.b.options.apiKey)
                        throw new Yi("invalid-api-key");
                    n = this.b.options.apiKey;
                    var r = this
                      , o = null;
                    try {
                        o = this.b.auth().Aa()
                    } catch (t) {}
                    try {
                        i = this.b.auth().settings.appVerificationDisabledForTesting
                    } catch (t) {}
                    o = fl.SDK_VERSION ? pi(fl.SDK_VERSION, o) : null,
                    Hh.call(this, n, t, e, function() {
                        try {
                            var e = r.b.auth().ha()
                        } catch (t) {
                            e = null
                        }
                        return e
                    }, o, Nr(Ar), i)
                }
                function Zh(t, e, n, i) {
                    t: {
                        n = Array.prototype.slice.call(n);
                        for (var r = 0, o = !1, a = 0; a < e.length; a++)
                            if (e[a].optional)
                                o = !0;
                            else {
                                if (o)
                                    throw new Yi("internal-error","Argument validator encountered a required argument after an optional argument.");
                                r++
                            }
                        if (o = e.length,
                        n.length < r || o < n.length)
                            i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + n.length + ".";
                        else {
                            for (r = 0; r < n.length; r++)
                                if (o = e[r].optional && void 0 === n[r],
                                !e[r].N(n[r]) && !o) {
                                    if (e = e[r],
                                    r < 0 || r >= Qh.length)
                                        throw new Yi("internal-error","Argument validator received an unsupported number of arguments.");
                                    n = Qh[r],
                                    i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.M + ".";
                                    break t
                                }
                            i = null
                        }
                    }
                    if (i)
                        throw new Yi("argument-error",t + " failed: " + i)
                }
                (t = Hh.prototype).Ba = function() {
                    var e = this;
                    return this.f ? this.f : this.f = Yh(this, Yt().then(function() {
                        if (yi() && !si())
                            return ri();
                        throw new Yi("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
                    }).then(function() {
                        return e.m.g(e.v())
                    }).then(function(t) {
                        return e.g = t,
                        Ns(e.o, ds, {})
                    }).then(function(t) {
                        e.a[Wh] = t.recaptchaSiteKey
                    }).s(function(t) {
                        throw e.f = null,
                        t
                    }))
                }
                ,
                t.render = function() {
                    zh(this);
                    var n = this;
                    return Yh(this, this.Ba().then(function() {
                        if (null === n.c) {
                            var t = n.u;
                            if (!n.i) {
                                var e = Fn(t);
                                t = Hn("DIV"),
                                e.appendChild(t)
                            }
                            n.c = n.g.render(t, n.a)
                        }
                        return n.c
                    }))
                }
                ,
                t.verify = function() {
                    zh(this);
                    var r = this;
                    return Yh(this, this.render().then(function(i) {
                        return new qt(function(e) {
                            var t = r.g.getResponse(i);
                            if (t)
                                e(t);
                            else {
                                var n = function(t) {
                                    t && (function(t, e) {
                                        K(t.l, function(t) {
                                            return t == e
                                        })
                                    }(r, n),
                                    e(t))
                                };
                                r.l.push(n),
                                r.i && r.g.execute(r.c)
                            }
                        }
                        )
                    }))
                }
                ,
                t.reset = function() {
                    zh(this),
                    null !== this.c && this.g.reset(this.c)
                }
                ,
                t.clear = function() {
                    zh(this),
                    this.B = !0,
                    this.m.c();
                    for (var t = 0; t < this.h.length; t++)
                        this.h[t].cancel("RecaptchaVerifier instance has been destroyed.");
                    if (!this.i) {
                        t = Fn(this.u);
                        for (var e; e = t.firstChild; )
                            t.removeChild(e)
                    }
                }
                ,
                k($h, Hh);
                var Qh = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");
                function tl(t, e) {
                    return {
                        name: t || "",
                        M: "a valid string",
                        optional: !!e,
                        N: h
                    }
                }
                function el(t, e) {
                    return {
                        name: t || "",
                        M: "a boolean",
                        optional: !!e,
                        N: n
                    }
                }
                function nl(t, e) {
                    return {
                        name: t || "",
                        M: "a valid object",
                        optional: !!e,
                        N: g
                    }
                }
                function il(t, e) {
                    return {
                        name: t || "",
                        M: "a function",
                        optional: !!e,
                        N: m
                    }
                }
                function rl(t, e) {
                    return {
                        name: t || "",
                        M: "null",
                        optional: !!e,
                        N: r
                    }
                }
                function ol(n) {
                    return {
                        name: n ? n + "Credential" : "credential",
                        M: n ? "a valid " + n + " credential" : "a valid credential",
                        optional: !1,
                        N: function(t) {
                            if (!t)
                                return !1;
                            var e = !n || t.providerId === n;
                            return !(!t.na || !e)
                        }
                    }
                }
                function al() {
                    return {
                        name: "applicationVerifier",
                        M: "an implementation of firebase.auth.ApplicationVerifier",
                        optional: !1,
                        N: function(t) {
                            return !!(t && h(t.type) && m(t.verify))
                        }
                    }
                }
                function sl(e, n, t, i) {
                    return {
                        name: t || "",
                        M: e.M + " or " + n.M,
                        optional: !!i,
                        N: function(t) {
                            return e.N(t) || n.N(t)
                        }
                    }
                }
                function ul(t, e) {
                    for (var n in e) {
                        var i = e[n].name;
                        t[i] = ll(i, t[n], e[n].j)
                    }
                }
                function cl(t, e) {
                    for (var n in e) {
                        var i = e[n].name;
                        i !== n && Object.defineProperty(t, i, {
                            get: T(function(t) {
                                return this[t]
                            }, n),
                            set: T(function(t, e, n, i) {
                                Zh(t, [n], [i], !0),
                                this[e] = i
                            }, i, n, e[n].Ya),
                            enumerable: !0
                        })
                    }
                }
                function hl(t, e, n, i) {
                    t[e] = ll(e, n, i)
                }
                function ll(t, e, n) {
                    function i() {
                        var t = Array.prototype.slice.call(arguments);
                        return Zh(o, n, t),
                        e.apply(this, t)
                    }
                    if (!n)
                        return e;
                    var r, o = function(t) {
                        return (t = t.split("."))[t.length - 1]
                    }(t);
                    for (r in e)
                        i[r] = e[r];
                    for (r in e.prototype)
                        i.prototype[r] = e.prototype[r];
                    return i
                }
                ul(gh.prototype, {
                    Xa: {
                        name: "applyActionCode",
                        j: [tl("code")]
                    },
                    Ka: {
                        name: "checkActionCode",
                        j: [tl("code")]
                    },
                    $a: {
                        name: "confirmPasswordReset",
                        j: [tl("code"), tl("newPassword")]
                    },
                    Xb: {
                        name: "createUserWithEmailAndPassword",
                        j: [tl("email"), tl("password")]
                    },
                    $b: {
                        name: "fetchSignInMethodsForEmail",
                        j: [tl("email")]
                    },
                    oa: {
                        name: "getRedirectResult",
                        j: []
                    },
                    qc: {
                        name: "isSignInWithEmailLink",
                        j: [tl("emailLink")]
                    },
                    wc: {
                        name: "onAuthStateChanged",
                        j: [sl(nl(), il(), "nextOrObserver"), il("opt_error", !0), il("opt_completed", !0)]
                    },
                    xc: {
                        name: "onIdTokenChanged",
                        j: [sl(nl(), il(), "nextOrObserver"), il("opt_error", !0), il("opt_completed", !0)]
                    },
                    kb: {
                        name: "sendPasswordResetEmail",
                        j: [tl("email"), sl(nl("opt_actionCodeSettings", !0), rl(null, !0), "opt_actionCodeSettings", !0)]
                    },
                    lb: {
                        name: "sendSignInLinkToEmail",
                        j: [tl("email"), nl("actionCodeSettings")]
                    },
                    mb: {
                        name: "setPersistence",
                        j: [tl("persistence")]
                    },
                    Gc: {
                        name: "signInAndRetrieveDataWithCredential",
                        j: [ol()]
                    },
                    ob: {
                        name: "signInAnonymously",
                        j: []
                    },
                    Ra: {
                        name: "signInWithCredential",
                        j: [ol()]
                    },
                    Hc: {
                        name: "signInWithCustomToken",
                        j: [tl("token")]
                    },
                    Ic: {
                        name: "signInWithEmailAndPassword",
                        j: [tl("email"), tl("password")]
                    },
                    Jc: {
                        name: "signInWithEmailLink",
                        j: [tl("email"), tl("emailLink", !0)]
                    },
                    Kc: {
                        name: "signInWithPhoneNumber",
                        j: [tl("phoneNumber"), al()]
                    },
                    Lc: {
                        name: "signInWithPopup",
                        j: [{
                            name: "authProvider",
                            M: "a valid Auth provider",
                            optional: !1,
                            N: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Mc: {
                        name: "signInWithRedirect",
                        j: [{
                            name: "authProvider",
                            M: "a valid Auth provider",
                            optional: !1,
                            N: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Rc: {
                        name: "updateCurrentUser",
                        j: [sl({
                            name: "user",
                            M: "an instance of Firebase User",
                            optional: !1,
                            N: function(t) {
                                return !!(t && t instanceof Dc)
                            }
                        }, rl(), "user")]
                    },
                    pb: {
                        name: "signOut",
                        j: []
                    },
                    toJSON: {
                        name: "toJSON",
                        j: [tl(null, !0)]
                    },
                    Tc: {
                        name: "useDeviceLanguage",
                        j: []
                    },
                    Uc: {
                        name: "verifyPasswordResetCode",
                        j: [tl("code")]
                    }
                }),
                cl(gh.prototype, {
                    lc: {
                        name: "languageCode",
                        Ya: sl(tl(), rl(), "languageCode")
                    },
                    ti: {
                        name: "tenantId",
                        Ya: sl(tl(), rl(), "tenantId")
                    }
                }),
                (gh.Persistence = Tu).LOCAL = "local",
                gh.Persistence.SESSION = "session",
                gh.Persistence.NONE = "none",
                ul(Dc.prototype, {
                    delete: {
                        name: "delete",
                        j: []
                    },
                    dc: {
                        name: "getIdTokenResult",
                        j: [el("opt_forceRefresh", !0)]
                    },
                    G: {
                        name: "getIdToken",
                        j: [el("opt_forceRefresh", !0)]
                    },
                    rc: {
                        name: "linkAndRetrieveDataWithCredential",
                        j: [ol()]
                    },
                    eb: {
                        name: "linkWithCredential",
                        j: [ol()]
                    },
                    sc: {
                        name: "linkWithPhoneNumber",
                        j: [tl("phoneNumber"), al()]
                    },
                    tc: {
                        name: "linkWithPopup",
                        j: [{
                            name: "authProvider",
                            M: "a valid Auth provider",
                            optional: !1,
                            N: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    uc: {
                        name: "linkWithRedirect",
                        j: [{
                            name: "authProvider",
                            M: "a valid Auth provider",
                            optional: !1,
                            N: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Ac: {
                        name: "reauthenticateAndRetrieveDataWithCredential",
                        j: [ol()]
                    },
                    gb: {
                        name: "reauthenticateWithCredential",
                        j: [ol()]
                    },
                    Bc: {
                        name: "reauthenticateWithPhoneNumber",
                        j: [tl("phoneNumber"), al()]
                    },
                    Cc: {
                        name: "reauthenticateWithPopup",
                        j: [{
                            name: "authProvider",
                            M: "a valid Auth provider",
                            optional: !1,
                            N: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Dc: {
                        name: "reauthenticateWithRedirect",
                        j: [{
                            name: "authProvider",
                            M: "a valid Auth provider",
                            optional: !1,
                            N: function(t) {
                                return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    reload: {
                        name: "reload",
                        j: []
                    },
                    jb: {
                        name: "sendEmailVerification",
                        j: [sl(nl("opt_actionCodeSettings", !0), rl(null, !0), "opt_actionCodeSettings", !0)]
                    },
                    toJSON: {
                        name: "toJSON",
                        j: [tl(null, !0)]
                    },
                    Qc: {
                        name: "unlink",
                        j: [tl("provider")]
                    },
                    rb: {
                        name: "updateEmail",
                        j: [tl("email")]
                    },
                    sb: {
                        name: "updatePassword",
                        j: [tl("password")]
                    },
                    Sc: {
                        name: "updatePhoneNumber",
                        j: [ol("phone")]
                    },
                    tb: {
                        name: "updateProfile",
                        j: [nl("profile")]
                    }
                }),
                ul(Rh.prototype, {
                    execute: {
                        name: "execute"
                    },
                    render: {
                        name: "render"
                    },
                    reset: {
                        name: "reset"
                    },
                    getResponse: {
                        name: "getResponse"
                    }
                }),
                ul(Ph.prototype, {
                    execute: {
                        name: "execute"
                    },
                    render: {
                        name: "render"
                    },
                    reset: {
                        name: "reset"
                    },
                    getResponse: {
                        name: "getResponse"
                    }
                }),
                ul(qt.prototype, {
                    ka: {
                        name: "finally"
                    },
                    s: {
                        name: "catch"
                    },
                    then: {
                        name: "then"
                    }
                }),
                cl(yc.prototype, {
                    appVerificationDisabled: {
                        name: "appVerificationDisabledForTesting",
                        Ya: el("appVerificationDisabledForTesting")
                    }
                }),
                ul(wc.prototype, {
                    confirm: {
                        name: "confirm",
                        j: [tl("verificationCode")]
                    }
                }),
                hl(qr, "fromJSON", function(t) {
                    t = h(t) ? JSON.parse(t) : t;
                    for (var e, n = [Yr, uo, po, Wr], i = 0; i < n.length; i++)
                        if (e = n[i](t))
                            return e;
                    return null
                }, [sl(tl(), nl(), "json")]),
                hl(co, "credential", function(t, e) {
                    return new so(t,e)
                }, [tl("email"), tl("password")]),
                ul(so.prototype, {
                    A: {
                        name: "toJSON",
                        j: [tl(null, !0)]
                    }
                }),
                ul(Qr.prototype, {
                    wa: {
                        name: "addScope",
                        j: [tl("scope")]
                    },
                    Ea: {
                        name: "setCustomParameters",
                        j: [nl("customOAuthParameters")]
                    }
                }),
                hl(Qr, "credential", to, [sl(tl(), nl(), "token")]),
                hl(co, "credentialWithLink", ho, [tl("email"), tl("emailLink")]),
                ul(eo.prototype, {
                    wa: {
                        name: "addScope",
                        j: [tl("scope")]
                    },
                    Ea: {
                        name: "setCustomParameters",
                        j: [nl("customOAuthParameters")]
                    }
                }),
                hl(eo, "credential", no, [sl(tl(), nl(), "token")]),
                ul(io.prototype, {
                    wa: {
                        name: "addScope",
                        j: [tl("scope")]
                    },
                    Ea: {
                        name: "setCustomParameters",
                        j: [nl("customOAuthParameters")]
                    }
                }),
                hl(io, "credential", ro, [sl(tl(), sl(nl(), rl()), "idToken"), sl(tl(), rl(), "accessToken", !0)]),
                ul(oo.prototype, {
                    Ea: {
                        name: "setCustomParameters",
                        j: [nl("customOAuthParameters")]
                    }
                }),
                hl(oo, "credential", ao, [sl(tl(), nl(), "token"), tl("secret", !0)]),
                ul(Zr.prototype, {
                    wa: {
                        name: "addScope",
                        j: [tl("scope")]
                    },
                    credential: {
                        name: "credential",
                        j: [sl(tl(), sl(nl(), rl()), "optionsOrIdToken"), sl(tl(), rl(), "accessToken", !0)]
                    },
                    Ea: {
                        name: "setCustomParameters",
                        j: [nl("customOAuthParameters")]
                    }
                }),
                ul(Xr.prototype, {
                    A: {
                        name: "toJSON",
                        j: [tl(null, !0)]
                    }
                }),
                ul(Br.prototype, {
                    A: {
                        name: "toJSON",
                        j: [tl(null, !0)]
                    }
                }),
                hl(mo, "credential", go, [tl("verificationId"), tl("verificationCode")]),
                ul(mo.prototype, {
                    Va: {
                        name: "verifyPhoneNumber",
                        j: [tl("phoneNumber"), al()]
                    }
                }),
                ul(fo.prototype, {
                    A: {
                        name: "toJSON",
                        j: [tl(null, !0)]
                    }
                }),
                ul(Yi.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [tl(null, !0)]
                    }
                }),
                ul(So.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [tl(null, !0)]
                    }
                }),
                ul(Ao.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [tl(null, !0)]
                    }
                }),
                ul($h.prototype, {
                    clear: {
                        name: "clear",
                        j: []
                    },
                    render: {
                        name: "render",
                        j: []
                    },
                    verify: {
                        name: "verify",
                        j: []
                    }
                }),
                hl(Qi, "parseLink", sr, [tl("link")]),
                function() {
                    if (void 0 === fl || !fl.INTERNAL || !fl.INTERNAL.registerService)
                        throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                    var t = {
                        ActionCodeInfo: {
                            Operation: {
                                EMAIL_SIGNIN: Ki,
                                PASSWORD_RESET: "PASSWORD_RESET",
                                RECOVER_EMAIL: "RECOVER_EMAIL",
                                VERIFY_EMAIL: "VERIFY_EMAIL"
                            }
                        },
                        Auth: gh,
                        AuthCredential: qr,
                        Error: Yi
                    };
                    hl(t, "EmailAuthProvider", co, []),
                    hl(t, "FacebookAuthProvider", Qr, []),
                    hl(t, "GithubAuthProvider", eo, []),
                    hl(t, "GoogleAuthProvider", io, []),
                    hl(t, "TwitterAuthProvider", oo, []),
                    hl(t, "OAuthProvider", Zr, [tl("providerId")]),
                    hl(t, "SAMLAuthProvider", $r, [tl("providerId")]),
                    hl(t, "PhoneAuthProvider", mo, [{
                        name: "auth",
                        M: "an instance of Firebase Auth",
                        optional: !0,
                        N: function(t) {
                            return !!(t && t instanceof gh)
                        }
                    }]),
                    hl(t, "RecaptchaVerifier", $h, [sl(tl(), {
                        name: "",
                        M: "an HTML element",
                        optional: !1,
                        N: function(t) {
                            return !!(t && t instanceof Element)
                        }
                    }, "recaptchaContainer"), nl("recaptchaParameters", !0), {
                        name: "app",
                        M: "an instance of Firebase App",
                        optional: !0,
                        N: function(t) {
                            return !!(t && t instanceof fl.app.App)
                        }
                    }]),
                    hl(t, "ActionCodeURL", Qi, []),
                    fl.INTERNAL.registerService("auth", function(t, e) {
                        return e({
                            INTERNAL: {
                                getUid: I((t = new gh(t)).getUid, t),
                                getToken: I(t.cc, t),
                                addAuthTokenListener: I(t.Wb, t),
                                removeAuthTokenListener: I(t.Ec, t)
                            }
                        }),
                        t
                    }, t, function(t, e) {
                        if ("create" === t)
                            try {
                                e.auth()
                            } catch (t) {}
                    }),
                    fl.INTERNAL.extendNamespace({
                        User: Dc
                    })
                }()
            }
            .apply("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        ).apply(this, arguments)
    } catch (t) {
        throw console.error(t),
        new Error("Cannot instantiate firebase-auth - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-auth.js.map

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , E = C.document
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.concat
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1"
      , k = function(e, t) {
        return new k.fn.init(e,t)
    }
      , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (d(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes),
            t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","),
                        f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[k] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : m;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = k,
                !C.getElementsByName || !C.getElementsByName(k).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", $)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && T(e),
            d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    A(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [S, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace(B, "$1"));
                    return s[k] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)),
            y && !y[k] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = N[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument === C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = k.split("").sort(D).join("") === k,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    k.find = h,
    k.expr = h.selectors,
    k.expr[":"] = k.expr.pseudos,
    k.uniqueSort = k.unique = h.uniqueSort,
    k.text = h.getText,
    k.isXMLDoc = h.isXML,
    k.contains = h.contains,
    k.escapeSelector = h.escape;
    var T = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && k(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , N = k.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    k.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(k(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (k.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t,
                k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                D.test(r[1]) && k.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }
    ).prototype = k.fn,
    q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length && (O[r] || k.uniqueSort(n),
            H.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function I(e) {
        throw e
    }
    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        k.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }),
        n) : k.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    k.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return k.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = k.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < k.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    k.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return k.Deferred(function(r) {
                        k.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++,
                                    t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== I && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return k.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : M)),
                        o[2][3].add(l(0, e, m(n) ? n : I))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? k.extend(e, a) : a
                }
            }
              , s = {};
            return k.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = k.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = k.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }),
        this
    }
    ,
    k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }),
    k.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                _(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(k(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , z = /^-ms-/
      , U = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[V(t)] = n;
            else
                for (r in t)
                    i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in r ? [t] : t.match(R) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y
      , J = new Y
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
    k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o),
                1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)),
                        ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }),
    k.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Q.get(e, t),
                n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                k.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , re = ["Top", "Right", "Bottom", "Left"]
      , ie = E.documentElement
      , oe = function(e) {
        return k.contains(e.ownerDocument, e)
    }
      , ae = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    }
    );
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
    }
      , ue = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    };
    function le(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return k.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                k.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            k.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ce = {};
    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Q.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = k.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ce[s] = u)))) : "none" !== n && (l[c] = "none",
            Q.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;
    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    k.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r))
                i && i.push(o);
            else if (l = oe(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
    me.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/
      , Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ee = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0
    }
    function Se() {
        return !1
    }
    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Se;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return k().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = k.guid++)),
        e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }
    function De(e, i, o) {
        o ? (Q.set(e, i, !1),
        k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Q.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Q.set(this, i, {
                        value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && k.find.matchesSelector(ie, i),
                n.guid || (n.guid = k.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(R) || [""]).length;
                while (l--)
                    d = g = (s = Ee.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = k.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = k.event.special[d] || {},
                    c = k.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && k.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = k.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l),
                t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    k.Event = function(e, t) {
        if (!(this instanceof k.Event))
            return new k.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && k.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[k.expando] = !0
    }
    ,
    k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    k.each({
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
        "char": !0,
        code: !0,
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp),
    k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne),
                !1
            },
            trigger: function() {
                return De(this, e),
                !0
            },
            delegateType: t
        }
    }),
    k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Se),
            this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , qe = /<script|<style|<link/i
      , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e),
            a = Q.set(t, o),
            l = o.events))
                for (i in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e),
            u = k.extend({}, s),
            J.set(t, u))
        }
    }
    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Ie(t, r, i, o)
            });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
                u = e,
                c !== p && (u = k.clone(u, !0, !0),
                s && k.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                k.map(a, Re),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }
    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || k.cleanData(ve(r)),
            r.parentNode && (n && oe(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Me(o[r], a[r]);
                else
                    Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }),
    k.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (k.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                k(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
      , Fe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Be = new RegExp(re.join("|"),"i");
    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)),
        !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top,
                a = 12 === t(e.marginLeft),
                u.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                u.style.position = "absolute",
                i = 12 === t(u.offsetWidth / 3),
                ie.removeChild(s),
                u = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === u.style.backgroundClip,
        k.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                a
            },
            scrollboxSize: function() {
                return e(),
                i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"]
      , Xe = E.createElement("div").style
      , Ve = {};
    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t)in Xe)
                    return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/
      , Qe = /^--/
      , Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += k.css(e, n + re[a], !0, i)),
            r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i),
            "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function tt(e, t, n) {
        var r = Fe(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r)
          , o = i
          , a = _e(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e,t,n,r,i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
                if (u || (t = Ge(s)),
                a = k.cssHooks[t] || k.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)),
            (a = k.cssHooks[t] || k.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = _e(e, t, r)),
            "normal" === i && t in Ke && (i = Ke[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                        return tt(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)),
                s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = k.css(e, u)),
                Ze(0, t, s)
            }
        }
    }),
    k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }),
    k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || k.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : nt.propHooks._default.set(this),
            this
        }
    }).init.prototype = nt.prototype,
    (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    k.fx = nt.prototype.init,
    k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval),
        k.fx.tick())
    }
    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }),
        rt = Date.now()
    }
    function ft(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function dt(o, e, t) {
        var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: rt || ct(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = V(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = k.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return k.map(c, pt, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                dt.tweeners[n] = dt.tweeners[n] || [],
                dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    k.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                st.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Q.get(e, "display")),
                "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0),
                l = e.style.display || l,
                c = k.css(e, "display"),
                fe([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && fe([e], !0),
                    p.done(function() {
                        for (r in g || fe([e]),
                        Q.remove(e, "fxshow"),
                        d)
                            k.style(e, r, d[r])
                    })),
                    u = pt(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }),
    k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && k.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t)
              , o = k.speed(e, n, r)
              , a = function() {
                var e = dt(this, k.extend({}, t), o);
                (i || Q.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = k.timers
                  , r = Q.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }),
    k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    k.timers = [],
    k.fx.tick = function() {
        var e, t = 0, n = k.timers;
        for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(),
        rt = void 0
    }
    ,
    k.fx.timer = function(e) {
        k.timers.push(e),
        k.fx.start()
    }
    ,
    k.fx.interval = 13,
    k.fx.start = function() {
        it || (it = !0,
        lt())
    }
    ,
    k.fx.stop = function() {
        it = null
    }
    ,
    k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    ot = E.createElement("input"),
    at = E.createElement("select").appendChild(E.createElement("option")),
    ot.type = "checkbox",
    y.checkOn = "" !== ot.value,
    y.optSelected = at.selected,
    (ot = E.createElement("input")).value = "t",
    ot.type = "radio",
    y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }),
    k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)),
                void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o],
            gt[o] = r,
            r = null != a(e, t, n) ? o : null,
            gt[o] = i),
            r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(R) || []).join(" ")
    }
    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }),
    k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t,
                i = k.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }),
    k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    k(this).addClass(t.call(this, e, xt(this)))
                });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n),
                    r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    k(this).removeClass(t.call(this, e, xt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n),
                    r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = k(this),
                    r = bt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }),
    k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        },
        y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/
      , Ct = function(e) {
        e.stopPropagation()
    };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[k.expando] ? e : new k.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : k.makeArray(t, [e]),
            c = k.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                k.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, Ct),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, Ct),
                k.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }),
    k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return k.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r);
                t || e.addEventListener(n, i, !0),
                Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Q.remove(e, r))
            }
        }
    });
    var Et = C.location
      , kt = Date.now()
      , St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e),
        t
    }
    ;
    var Nt = /\[\]$/
      , At = /\r?\n/g
      , Dt = /^(?:submit|button|image|reset|file)$/i
      , jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            k.each(e, function(e, t) {
                r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e))
            k.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                qt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g
      , Ht = /#.*$/
      , Ot = /([?&])_=[^&]*/
      , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Rt = /^(?:GET|HEAD)$/
      , Mt = /^\/\//
      , It = {}
      , Wt = {}
      , $t = "*/".concat("*")
      , Ft = E.createElement("a");
    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function _t(t, i, o, a) {
        var s = {}
          , u = t === Wt;
        function l(e) {
            var r;
            return s[e] = !0,
            k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r),
        e
    }
    Ft.href = Et.href,
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
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
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Pt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)),
            _t(It, v, t, T),
            h)
                return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Rt.test(v.type),
            f = v.url.replace(Ht, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Ot, "$1"),
            o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o),
            v.url = f + o),
            v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
            k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = _t(Wt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }),
    k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }),
    k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t)
            }
        })
    }
    ,
    k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = k(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }
    ,
    k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ut = {
        0: 200,
        1223: 204
    }
      , Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials"in Xt,
    y.ajax = Xt = !!Xt,
    k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e),
                e
            }
        }
    }),
    k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = k("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0,
            e
        }
    }),
    k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || k.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? k(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Gt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Vt.childNodes.length),
    k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o),
        o && o.length && k(o).remove(),
        k.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    k.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = k.css(e, "top"),
            u = k.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, k.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    k.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    k.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === k.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0),
                    i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position"))
                    e = e.offsetParent;
                return e || ie
            })
        }
    }),
    k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t)
                return t = _e(e, n),
                $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }),
    k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || k.guid++,
            i
    }
    ,
    k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }
    ,
    k.isArray = Array.isArray,
    k.parseJSON = JSON.parse,
    k.nodeName = A,
    k.isFunction = m,
    k.isWindow = x,
    k.camelCase = V,
    k.type = w,
    k.now = Date.now,
    k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery
      , Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt),
        e && C.jQuery === k && (C.jQuery = Qt),
        k
    }
    ,
    e || (C.jQuery = C.$ = k),
    k
});
/* axios v0.21.1 | (c) 2020 by Matt Zabriskie */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.axios = t() : e.axios = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t),
            o.loaded = !0,
            o.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
    }([function(e, t, n) {
        e.exports = n(1)
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            var t = new i(e)
              , n = s(i.prototype.request, t);
            return o.extend(n, i.prototype, t),
            o.extend(n, t),
            n
        }
        var o = n(2)
          , s = n(3)
          , i = n(4)
          , a = n(22)
          , u = n(10)
          , c = r(u);
        c.Axios = i,
        c.create = function(e) {
            return r(a(c.defaults, e))
        }
        ,
        c.Cancel = n(23),
        c.CancelToken = n(24),
        c.isCancel = n(9),
        c.all = function(e) {
            return Promise.all(e)
        }
        ,
        c.spread = n(25),
        c.isAxiosError = n(26),
        e.exports = c,
        e.exports.default = c
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            return "[object Array]" === R.call(e)
        }
        function o(e) {
            return "undefined" == typeof e
        }
        function s(e) {
            return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        function i(e) {
            return "[object ArrayBuffer]" === R.call(e)
        }
        function a(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }
        function u(e) {
            var t;
            return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }
        function c(e) {
            return "string" == typeof e
        }
        function f(e) {
            return "number" == typeof e
        }
        function p(e) {
            return null !== e && "object" == typeof e
        }
        function d(e) {
            if ("[object Object]" !== R.call(e))
                return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }
        function l(e) {
            return "[object Date]" === R.call(e)
        }
        function h(e) {
            return "[object File]" === R.call(e)
        }
        function m(e) {
            return "[object Blob]" === R.call(e)
        }
        function y(e) {
            return "[object Function]" === R.call(e)
        }
        function g(e) {
            return p(e) && y(e.pipe)
        }
        function v(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }
        function x(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
        function w() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        }
        function b(e, t) {
            if (null !== e && "undefined" != typeof e)
                if ("object" != typeof e && (e = [e]),
                r(e))
                    for (var n = 0, o = e.length; n < o; n++)
                        t.call(null, e[n], n, e);
                else
                    for (var s in e)
                        Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e)
        }
        function E() {
            function e(e, n) {
                d(t[n]) && d(e) ? t[n] = E(t[n], e) : d(e) ? t[n] = E({}, e) : r(e) ? t[n] = e.slice() : t[n] = e
            }
            for (var t = {}, n = 0, o = arguments.length; n < o; n++)
                b(arguments[n], e);
            return t
        }
        function j(e, t, n) {
            return b(t, function(t, r) {
                n && "function" == typeof t ? e[r] = S(t, n) : e[r] = t
            }),
            e
        }
        function C(e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
            e
        }
        var S = n(3)
          , R = Object.prototype.toString;
        e.exports = {
            isArray: r,
            isArrayBuffer: i,
            isBuffer: s,
            isFormData: a,
            isArrayBufferView: u,
            isString: c,
            isNumber: f,
            isObject: p,
            isPlainObject: d,
            isUndefined: o,
            isDate: l,
            isFile: h,
            isBlob: m,
            isFunction: y,
            isStream: g,
            isURLSearchParams: v,
            isStandardBrowserEnv: w,
            forEach: b,
            merge: E,
            extend: j,
            trim: x,
            stripBOM: C
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                    n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            this.defaults = e,
            this.interceptors = {
                request: new i,
                response: new i
            }
        }
        var o = n(2)
          , s = n(5)
          , i = n(6)
          , a = n(7)
          , u = n(22);
        r.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {},
            e.url = arguments[0]) : e = e || {},
            e = u(this.defaults, e),
            e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [a, void 0]
              , n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected)
            }),
            this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length; )
                n = n.then(t.shift(), t.shift());
            return n
        }
        ,
        r.prototype.getUri = function(e) {
            return e = u(this.defaults, e),
            s(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }
        ,
        o.forEach(["delete", "get", "head", "options"], function(e) {
            r.prototype[e] = function(t, n) {
                return this.request(u(n || {}, {
                    method: e,
                    url: t,
                    data: (n || {}).data
                }))
            }
        }),
        o.forEach(["post", "put", "patch"], function(e) {
            r.prototype[e] = function(t, n, r) {
                return this.request(u(r || {}, {
                    method: e,
                    url: t,
                    data: n
                }))
            }
        }),
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        var o = n(2);
        e.exports = function(e, t, n) {
            if (!t)
                return e;
            var s;
            if (n)
                s = n(t);
            else if (o.isURLSearchParams(t))
                s = t.toString();
            else {
                var i = [];
                o.forEach(t, function(e, t) {
                    null !== e && "undefined" != typeof e && (o.isArray(e) ? t += "[]" : e = [e],
                    o.forEach(e, function(e) {
                        o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)),
                        i.push(r(t) + "=" + r(e))
                    }))
                }),
                s = i.join("&")
            }
            if (s) {
                var a = e.indexOf("#");
                a !== -1 && (e = e.slice(0, a)),
                e += (e.indexOf("?") === -1 ? "?" : "&") + s
            }
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        function r() {
            this.handlers = []
        }
        var o = n(2);
        r.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }),
            this.handlers.length - 1
        }
        ,
        r.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }
        ,
        r.prototype.forEach = function(e) {
            o.forEach(this.handlers, function(t) {
                null !== t && e(t)
            })
        }
        ,
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        var o = n(2)
          , s = n(8)
          , i = n(9)
          , a = n(10);
        e.exports = function(e) {
            r(e),
            e.headers = e.headers || {},
            e.data = s(e.data, e.headers, e.transformRequest),
            e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
            o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                delete e.headers[t]
            });
            var t = e.adapter || a.adapter;
            return t(e).then(function(t) {
                return r(e),
                t.data = s(t.data, t.headers, e.transformResponse),
                t
            }, function(t) {
                return i(t) || (r(e),
                t && t.response && (t.response.data = s(t.response.data, t.response.headers, e.transformResponse))),
                Promise.reject(t)
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function(e, t, n) {
            return r.forEach(n, function(n) {
                e = n(e, t)
            }),
            e
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    }
    , function(e, t, n) {
        "use strict";
        function r(e, t) {
            !s.isUndefined(e) && s.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        function o() {
            var e;
            return "undefined" != typeof XMLHttpRequest ? e = n(12) : "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) && (e = n(12)),
            e
        }
        var s = n(2)
          , i = n(11)
          , a = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
          , u = {
            adapter: o(),
            transformRequest: [function(e, t) {
                return i(t, "Accept"),
                i(t, "Content-Type"),
                s.isFormData(e) || s.isArrayBuffer(e) || s.isBuffer(e) || s.isStream(e) || s.isFile(e) || s.isBlob(e) ? e : s.isArrayBufferView(e) ? e.buffer : s.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"),
                e.toString()) : s.isObject(e) ? (r(t, "application/json;charset=utf-8"),
                JSON.stringify(e)) : e
            }
            ],
            transformResponse: [function(e) {
                if ("string" == typeof e)
                    try {
                        e = JSON.parse(e)
                    } catch (e) {}
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            }
        };
        u.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        },
        s.forEach(["delete", "get", "head"], function(e) {
            u.headers[e] = {}
        }),
        s.forEach(["post", "put", "patch"], function(e) {
            u.headers[e] = s.merge(a)
        }),
        e.exports = u
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function(e, t) {
            r.forEach(e, function(n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
                delete e[r])
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(13)
          , s = n(16)
          , i = n(5)
          , a = n(17)
          , u = n(20)
          , c = n(21)
          , f = n(14);
        e.exports = function(e) {
            return new Promise(function(t, n) {
                var p = e.data
                  , d = e.headers;
                r.isFormData(p) && delete d["Content-Type"];
                var l = new XMLHttpRequest;
                if (e.auth) {
                    var h = e.auth.username || ""
                      , m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    d.Authorization = "Basic " + btoa(h + ":" + m)
                }
                var y = a(e.baseURL, e.url);
                if (l.open(e.method.toUpperCase(), i(y, e.params, e.paramsSerializer), !0),
                l.timeout = e.timeout,
                l.onreadystatechange = function() {
                    if (l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:"))) {
                        var r = "getAllResponseHeaders"in l ? u(l.getAllResponseHeaders()) : null
                          , s = e.responseType && "text" !== e.responseType ? l.response : l.responseText
                          , i = {
                            data: s,
                            status: l.status,
                            statusText: l.statusText,
                            headers: r,
                            config: e,
                            request: l
                        };
                        o(t, n, i),
                        l = null
                    }
                }
                ,
                l.onabort = function() {
                    l && (n(f("Request aborted", e, "ECONNABORTED", l)),
                    l = null)
                }
                ,
                l.onerror = function() {
                    n(f("Network Error", e, null, l)),
                    l = null
                }
                ,
                l.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(f(t, e, "ECONNABORTED", l)),
                    l = null
                }
                ,
                r.isStandardBrowserEnv()) {
                    var g = (e.withCredentials || c(y)) && e.xsrfCookieName ? s.read(e.xsrfCookieName) : void 0;
                    g && (d[e.xsrfHeaderName] = g)
                }
                if ("setRequestHeader"in l && r.forEach(d, function(e, t) {
                    "undefined" == typeof p && "content-type" === t.toLowerCase() ? delete d[t] : l.setRequestHeader(t, e)
                }),
                r.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials),
                e.responseType)
                    try {
                        l.responseType = e.responseType
                    } catch (t) {
                        if ("json" !== e.responseType)
                            throw t
                    }
                "function" == typeof e.onDownloadProgress && l.addEventListener("progress", e.onDownloadProgress),
                "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", e.onUploadProgress),
                e.cancelToken && e.cancelToken.promise.then(function(e) {
                    l && (l.abort(),
                    n(e),
                    l = null)
                }),
                p || (p = null),
                l.send(p)
            }
            )
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(14);
        e.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function(e, t, n, o, s) {
            var i = new Error(e);
            return r(i, t, n, o, s)
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e, t, n, r, o) {
            return e.config = t,
            n && (e.code = n),
            e.request = r,
            e.response = o,
            e.isAxiosError = !0,
            e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }
            ,
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = r.isStandardBrowserEnv() ? function() {
            return {
                write: function(e, t, n, o, s, i) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)),
                    r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                    r.isString(o) && a.push("path=" + o),
                    r.isString(s) && a.push("domain=" + s),
                    i === !0 && a.push("secure"),
                    document.cookie = a.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            }
        }() : function() {
            return {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        }()
    }
    , function(e, t, n) {
        "use strict";
        var r = n(18)
          , o = n(19);
        e.exports = function(e, t) {
            return e && !r(t) ? o(e, t) : t
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, s, i = {};
            return e ? (r.forEach(e.split("\n"), function(e) {
                if (s = e.indexOf(":"),
                t = r.trim(e.substr(0, s)).toLowerCase(),
                n = r.trim(e.substr(s + 1)),
                t) {
                    if (i[t] && o.indexOf(t) >= 0)
                        return;
                    "set-cookie" === t ? i[t] = (i[t] ? i[t] : []).concat([n]) : i[t] = i[t] ? i[t] + ", " + n : n
                }
            }),
            i) : i
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = r.isStandardBrowserEnv() ? function() {
            function e(e) {
                var t = e;
                return n && (o.setAttribute("href", t),
                t = o.href),
                o.setAttribute("href", t),
                {
                    href: o.href,
                    protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                    host: o.host,
                    search: o.search ? o.search.replace(/^\?/, "") : "",
                    hash: o.hash ? o.hash.replace(/^#/, "") : "",
                    hostname: o.hostname,
                    port: o.port,
                    pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                }
            }
            var t, n = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
            return t = e(window.location.href),
            function(n) {
                var o = r.isString(n) ? e(n) : n;
                return o.protocol === t.protocol && o.host === t.host
            }
        }() : function() {
            return function() {
                return !0
            }
        }()
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function(e, t) {
            function n(e, t) {
                return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
            }
            function o(o) {
                r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (s[o] = n(void 0, e[o])) : s[o] = n(e[o], t[o])
            }
            t = t || {};
            var s = {}
              , i = ["url", "method", "data"]
              , a = ["headers", "auth", "proxy", "params"]
              , u = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"]
              , c = ["validateStatus"];
            r.forEach(i, function(e) {
                r.isUndefined(t[e]) || (s[e] = n(void 0, t[e]))
            }),
            r.forEach(a, o),
            r.forEach(u, function(o) {
                r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (s[o] = n(void 0, e[o])) : s[o] = n(void 0, t[o])
            }),
            r.forEach(c, function(r) {
                r in t ? s[r] = n(e[r], t[r]) : r in e && (s[r] = n(void 0, e[r]))
            });
            var f = i.concat(a).concat(u).concat(c)
              , p = Object.keys(e).concat(Object.keys(t)).filter(function(e) {
                return f.indexOf(e) === -1
            });
            return r.forEach(p, o),
            s
        }
    }
    , function(e, t) {
        "use strict";
        function n(e) {
            this.message = e
        }
        n.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }
        ,
        n.prototype.__CANCEL__ = !0,
        e.exports = n
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            if ("function" != typeof e)
                throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function(e) {
                t = e
            }
            );
            var n = this;
            e(function(e) {
                n.reason || (n.reason = new o(e),
                t(n.reason))
            })
        }
        var o = n(23);
        r.prototype.throwIfRequested = function() {
            if (this.reason)
                throw this.reason
        }
        ,
        r.source = function() {
            var e, t = new r(function(t) {
                e = t
            }
            );
            return {
                token: t,
                cancel: e
            }
        }
        ,
        e.exports = r
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e) {
            return "object" == typeof e && e.isAxiosError === !0
        }
    }
    ])
});
//# sourceMappingURL=axios.min.map
!function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            i.extend(n, n.initials),
            n.activeBreakpoint = null,
            n.animType = null,
            n.animProp = null,
            n.breakpoints = [],
            n.breakpointSettings = [],
            n.cssTransitions = !1,
            n.focussed = !1,
            n.interrupted = !1,
            n.hidden = "hidden",
            n.paused = !0,
            n.positionProp = null,
            n.respondTo = null,
            n.rowCount = 1,
            n.shouldClick = !0,
            n.$slider = i(t),
            n.$slidesCache = null,
            n.transformType = null,
            n.transitionType = null,
            n.visibilityChange = "visibilitychange",
            n.windowWidth = 0,
            n.windowTimer = null,
            s = i(t).data("slick") || {},
            n.options = i.extend({}, n.defaults, o, s),
            n.currentSlide = n.options.initialSlide,
            n.originalSettings = n.options,
            void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
            n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
            n.visibilityChange = "webkitvisibilitychange"),
            n.autoPlay = i.proxy(n.autoPlay, n),
            n.autoPlayClear = i.proxy(n.autoPlayClear, n),
            n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
            n.changeSlide = i.proxy(n.changeSlide, n),
            n.clickHandler = i.proxy(n.clickHandler, n),
            n.selectHandler = i.proxy(n.selectHandler, n),
            n.setPosition = i.proxy(n.setPosition, n),
            n.swipeHandler = i.proxy(n.swipeHandler, n),
            n.dragHandler = i.proxy(n.dragHandler, n),
            n.keyHandler = i.proxy(n.keyHandler, n),
            n.instanceUid = e++,
            n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            n.registerBreakpoints(),
            n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t)
            o = t,
            t = null;
        else if (t < 0 || t >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, t) {
        var o = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i),
                !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(),
        e = Math.ceil(e),
        !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
        s.$slideTrack.css(o),
        t && setTimeout(function() {
            s.disableTransition(),
            t.call()
        }, s.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)),
        t
    }
    ,
    e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(i) {
        var e = this
          , t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var i = this
          , e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
        i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0; e <= o.getDotCount(); e += 1)
                t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots),
            o.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(),
        n = l.$slider.children(),
        l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o),
            l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints)
                r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            l = s),
            e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }
    ,
    e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        n = r.slideCount % r.options.slidesToScroll != 0,
        o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
            break;
        case "next":
            s = 0 === o ? r.options.slidesToScroll : o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
            break;
        case "index":
            var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(),
        t = 0,
        i > e[e.length - 1])
            i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i))
    }
    ,
    e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(),
        i.stopPropagation(),
        i.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    e.prototype.disableTransition = function(i) {
        var e = this
          , t = {};
        t[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }),
        t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
        t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }),
        e && setTimeout(function() {
            t.disableTransition(i),
            e.call()
        }, t.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i),
        e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var i = this
          , e = 0
          , t = 0
          , o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow)
                ++o;
            else
                for (; e < i.slideCount; )
                    ++o,
                    e = t + i.options.slidesToScroll,
                    t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode)
            o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount; )
                ++o,
                e = t + i.options.slidesToScroll,
                t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else
            o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }
    ,
    e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0,
        t = n.$slides.first().outerHeight(!0),
        !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
        s = -1,
        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
        r = t * n.options.slidesToShow * s),
        n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
        r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
        r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
        r = (i + n.options.slidesToShow - n.slideCount) * t),
        n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
        r = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
        e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
        !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        e += (n.$list.width() - o.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
        o = -1 * e.options.slidesToScroll,
        i = 2 * e.slideCount); t < i; )
            s.push(t),
            t = o + e.options.slidesToScroll,
            o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return e = n,
                !1
        }),
        Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , t = Math.ceil(e.slideCount / e.options.slidesToShow)
          , o = e.getNavigableIndexes().filter(function(i) {
            return i >= 0 && i < e.slideCount
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }),
            -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }),
        e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }),
            i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
            e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide),
        !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
        i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
        i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this)
                  , t = i(this).attr("data-lazy")
                  , o = i(this).attr("data-srcset")
                  , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                  , r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o),
                        s && e.attr("sizes", s)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }
                ,
                r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, e, t])
                }
                ,
                r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        s = Math.ceil(o + n.options.slidesToShow),
        !0 === n.options.fade && (o > 0 && o--,
        s <= n.slideCount && s++)),
        t = n.$slider.find(".slick-slide").slice(o, s),
        "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                r < 0 && (r = n.slideCount - 1),
                t = (t = t.add(d.eq(r))).add(d.eq(l)),
                r--,
                l++;
        e(t),
        n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(),
        i.$slideTrack.css({
            opacity: 1
        }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(),
        i.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(),
        i.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(),
        i.options.autoplay = !0,
        i.paused = !1,
        i.focussed = !1,
        i.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(),
        o = t.attr("data-lazy"),
        s = t.attr("data-srcset"),
        n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
        (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s),
            n && t.attr("sizes", n)),
            t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === l.options.adaptiveHeight && l.setPosition(),
            l.$slider.trigger("lazyLoaded", [l, t, o]),
            l.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            l.$slider.trigger("lazyLoadError", [l, t, o]),
            l.progressiveLazyLoad())
        }
        ,
        r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }
    ,
    e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        t = s.currentSlide,
        s.destroy(!0),
        i.extend(s, s.initials, {
            currentSlide: t
        }),
        s.init(),
        e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1,
                n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0; )
                        s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                        o--;
                    s.breakpoints.push(t),
                    s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
            return !1;
        o.unload(),
        !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i),
        e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        s[o.positionProp] = i,
        !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
        !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
        o.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })),
        i.listWidth = i.$list.width(),
        i.listHeight = i.$list.height(),
        !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1,
            !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }),
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0],
        l = arguments[1],
        n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
        s = arguments[1],
        l = arguments[2],
        "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
            r.options[o] = s;
        else if ("multiple" === n)
            i.each(o, function(i, e) {
                r.options[i] = e
            });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive))
                    r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0; )
                        r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(),
        r.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i])
    }
    ,
    e.prototype.setProps = function() {
        var i = this
          , e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left",
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
        void 0 !== e.OTransform && (i.animType = "OTransform",
        i.transformType = "-o-transform",
        i.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform && (i.animType = "MozTransform",
        i.transformType = "-moz-transform",
        i.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
        i.transformType = "-webkit-transform",
        i.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform && (i.animType = "msTransform",
        i.transformType = "-ms-transform",
        i.transitionType = "msTransition",
        void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
        i.transformType = "transform",
        i.transitionType = "transition"),
        i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }
    ,
    e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2),
            !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
            t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center")
        } else
            i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
            o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (t = null,
        s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            e = s.slideCount; e > s.slideCount - o; e -= 1)
                t = e - 1,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1)
                t = e,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(),
        e.interrupted = i
    }
    ,
    e.prototype.selectHandler = function(e) {
        var t = this
          , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
          , s = parseInt(o.attr("data-slick-index"));
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1,
        !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i),
            o = i,
            d = a.getLeft(o),
            r = a.getLeft(a.currentSlide),
            a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
            !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                a.animating = !0,
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                n = a.currentSlide,
                a.currentSlide = s,
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
                    return !0 !== t ? (a.fadeSlideOut(n),
                    a.fadeSlide(s, function() {
                        a.postSlide(s)
                    })) : a.postSlide(s),
                    void a.animateHeight();
                !0 !== t ? a.animateSlide(d, function() {
                    a.postSlide(s)
                }) : a.postSlide(s)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
        i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        t = Math.atan2(e, i),
        (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1,
        o.swiping = !1,
        o.scrolling)
            return o.scrolling = !1,
            !1;
        if (o.interrupted = !1,
        o.shouldClick = !(o.touchObject.swipeLength > 10),
        void 0 === o.touchObject.curX)
            return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
            case "left":
            case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                o.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e),
            o.touchObject = {},
            o.$slider.trigger("swipe", [o, t]))
        } else
            o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
            o.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
            }
    }
    ,
    e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
        !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
        l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
        l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
        l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
        !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
        !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
        t = l.swipeDirection(),
        void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
        i.preventDefault()),
        s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
        o = l.touchObject.swipeLength,
        l.touchObject.edgeHit = !1,
        !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
        l.touchObject.edgeHit = !0),
        !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
        !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
        !1) : void l.setCSS(l.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0,
        1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
            return t.touchObject = {},
            !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
        t.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }
    ,
    i.fn.slick = function() {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
            void 0 !== t)
                return t;
        return o
    }
});
/**default.js */

function toggleSignIn(loginProvider) {
  if (!firebase.auth().currentUser) {
    var provider =
      loginProvider == "facebook"
        ? new firebase.auth.FacebookAuthProvider()
        : loginProvider == "Twitter"
        ? new firebase.auth.TwitterAuthProvider()
        : loginProvider == "Google"
        ? new firebase.auth.GoogleAuthProvider()
        : null;
    if (loginProvider == "Google") {
      provider.addScope("https://www.googleapis.com/auth/userinfo.email");
    }
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        axios
          .post("https://app.ntaskmanager.com/api/account/sociallogin", {
            provider: loginProvider,
            token: result.credential.accessToken,
            tokenSecret: result.credential.secret,
          })
          .then((response) => {
            if (response.data.isRegistered) {
              window.location.href =
                "https://app.ntaskmanager.com/sociallogin?token=" +
                response.data.data.access_token;
            } else {
              window.location.href =
                "https://app.ntaskmanager.com/welcome/" +
                response.data.url +
                "&tempToken=" +
                response.data.data.access_token;
            }
          })
          .catch((error) => {});
        var token = result.credential.accessToken;
        var user = result.user;
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode);
        if (errorCode == "auth/popup-blocked") {
          auth.signInWithRedirect(provider);
        }
        if (errorCode === "auth/account-exists-with-different-credential") {
          alert(
            "You have already signed up with a different auth provider for that email."
          );
        } else {
          console.error(error);
        }
      });
  } else {
    firebase.auth().signOut();
  }
}

function initApp() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
    }
  });
  var facebookExistCondition = setInterval(function () {
    if ($("#btnFacebookHeader").length) {
      console.log("Exists!");
      clearInterval(facebookExistCondition);
      var hfb = document.getElementById("btnFacebookHeader");
      if (hfb) {
        hfb.addEventListener(
          "click",
          function () {
            toggleSignIn("facebook");
          },
          false
        );
      }
    }
  }, 100);
  var googeExistCondition = setInterval(function () {
    if ($("#btnGoogleHeader").length) {
        console.log("Exists!");
      clearInterval(googeExistCondition);
    var hgl = document.getElementById("btnGoogleHeader");
    if (hgl) {
      hgl.addEventListener(
        "click",
        function () {
          toggleSignIn("Google");
        },
        false
      );
    }
    }
  }, 100);
  var twitterExistCondition = setInterval(function () {
    if ($("#btnTwitterHeader").length) {
        console.log("Exists!");
      clearInterval(twitterExistCondition);
        var htw = document.getElementById("btnTwitterHeader");
        if (htw) {
            htw.addEventListener(
                "click",
                function () {
                toggleSignIn("Twitter");
                },
                false
            );
        }
    }
  }, 100);
}

function initApp1() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
    }
  });

  var fb = document.getElementById("btnFacebook");
  if (fb) {
    fb.addEventListener(
      "click",
      function () {
        toggleSignIn("facebook");
      },
      false
    );
  }
  var gl = document.getElementById("btnGoogle");
  if (gl) {
    gl.addEventListener(
      "click",
      function () {
        toggleSignIn("Google");
      },
      false
    );
  }
  var tw = document.getElementById("btnTwitter");
  if (tw) {
    tw.addEventListener(
      "click",
      function () {
        toggleSignIn("Twitter");
      },
      false
    );
  }
}

var firebaseConfig = {
  apiKey: "AIzaSyAwnlnUeILfPIKJG2fUl9JGwhWXa_Dc1bo",
  authDomain: "ntask-ed738.firebaseapp.com",
  databaseURL: "https://ntask-ed738.firebaseio.com",
  projectId: "ntask-ed738",
  storageBucket: "ntask-ed738.appspot.com",
  messagingSenderId: "224589479402",
  appId: "1:224589479402:web:3bdb058b9694b300",
};
firebase.initializeApp(firebaseConfig);
$(window).bind("scroll click touchstart", function () {
  if ($("#awesome").length == 0) {
    $("head").append(
      '<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" id="awesome"/>'
    );
  }
});

initApp();
// initApp1();

$(function() {

    $(document).delegate(".bar_menu", "click", function(e) {
        $('.mobile_nav').addClass("oppenned"),
        e.stopPropagation()
    });
    $(".close").click(function(e) {
        $('.open').removeClass("oppenned"),
        e.stopPropagation();
        $('.mobile_nav').removeClass("oppenned"),
        e.stopPropagation();
    });

});