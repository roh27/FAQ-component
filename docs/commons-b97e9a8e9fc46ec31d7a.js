(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        "/Cf1": function (e, t, n) {},
        "2rMq": function (e, t, n) {
            let r;
            !(function () {
                
                const o = !(
                        "undefined" == typeof window ||
                        !window.document ||
                        !window.document.createElement
                    ),
                    a = {
                        canUseDOM: o,
                        canUseWorkers: "undefined" != typeof Worker,
                        canUseEventListeners:
                            o && !(!window.addEventListener && !window.attachEvent),
                        canUseViewport: o && !!window.screen,
                    };
                void 0 ===
                    (r = function () {
                        return a;
                    }.call(t, n, t, e)) || (e.exports = r);
            })();
        },
        "51K9": function (e) {
            e.exports = JSON.parse(
                '{"data":{"site":{"siteMetadata":{"title":"react-faq-component","description":"An accessible react package to render FAQ(frequently asked questions) in your React web app. Supports configurable parameters to customize as per requirement.","author":"@swain_binod"}}}}',
            );
        },
        "8+s/": function (e, t, n) {
            
            function r(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e;
            }
            const o = n("q1tI"),
                a = r(o),
                i = r(n("2rMq")),
                s = r(n("Gytx"));
            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function c(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
            }
            e.exports = function (e, t, n) {
                if ("function" != typeof e)
                    throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t)
                    throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== n && "function" != typeof n)
                    throw new Error(
                        "Expected mapStateOnServer to either be undefined or a function.",
                    );
                return function (r) {
                    if ("function" != typeof r)
                        throw new Error("Expected WrappedComponent to be a React component.");
                    let u = [],
                        f = void 0;
                    function p() {
                        (f = e(
                            u.map(function (e) {
                                return e.props;
                            }),
                        )),
                        d.canUseDOM ? t(f) : n && (f = n(f));
                    }
                    var d = (function (e) {
                        function t() {
                            return l(this, t), c(this, e.apply(this, arguments));
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError(
                                        "Super expression must either be null or a function, not " +
                                            typeof t,
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                t &&
                                        (Object.setPrototypeOf
                                            ? Object.setPrototypeOf(e, t)
                                            : (e.__proto__ = t));
                            })(t, e),
                            (t.peek = function () {
                                return f;
                            }),
                            (t.rewind = function () {
                                if (t.canUseDOM)
                                    throw new Error(
                                        "You may only call rewind() on the server. Call peek() to read the current state.",
                                    );
                                const e = f;
                                return (f = void 0), (u = []), e;
                            }),
                            (t.prototype.shouldComponentUpdate = function (e) {
                                return !s(e, this.props);
                            }),
                            (t.prototype.componentWillMount = function () {
                                u.push(this), p();
                            }),
                            (t.prototype.componentDidUpdate = function () {
                                p();
                            }),
                            (t.prototype.componentWillUnmount = function () {
                                const e = u.indexOf(this);
                                u.splice(e, 1), p();
                            }),
                            (t.prototype.render = function () {
                                return a.createElement(r, this.props);
                            }),
                            t
                        );
                    })(o.Component);
                    return (
                        (d.displayName =
                            "SideEffect(" +
                            (function (e) {
                                return e.displayName || e.name || "Component";
                            })(r) +
                            ")"),
                        (d.canUseDOM = i.canUseDOM),
                        d
                    );
                };
            };
        },
        "85O/": function (e, t) {
            Prism.languages.json = {
                property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
                string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
                comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
                number: /-?\d+\.?\d*(?:e[+-]?\d+)?/i,
                punctuation: /[{}[\],]/,
                operator: /:/,
                boolean: /\b(?:true|false)\b/,
                null: { pattern: /\bnull\b/, alias: "keyword" },
            };
        },
        "8ypT": function (e, t, n) {},
        "9EFL": function (e, t, n) {
            
            e.exports = n("R1wR");
        },
        Bl7J: function (e, t, n) {
            
            const r = n("q1tI"),
                o = n.n(r);
            n("8ypT"), n("/Cf1");
            t.a = function (e) {
                const t = e.children;
                return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                        "div",
                        {
                            style: {
                                margin: "0 auto",
                                maxWidth: 960,
                                padding: "0px 1.0875rem 1.45rem",
                                paddingTop: 0,
                            },
                        },
                        o.a.createElement("main", null, t),
                    ),
                );
            };
        },
        CjHp: function (e, t) {
            !(function (e) {
                const t = e.util.clone(e.languages.javascript);
                (e.languages.jsx = e.languages.extend("markup", t)),
                (e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i),
                (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
                (e.languages.jsx.tag.inside[
                    "attr-value"
                ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
                (e.languages.jsx.tag.inside.tag.inside[
                    "class-name"
                ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
                e.languages.insertBefore(
                    "inside",
                    "attr-name",
                    {
                        spread: {
                            pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
                            inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ },
                        },
                    },
                    e.languages.jsx.tag,
                ),
                e.languages.insertBefore(
                    "inside",
                    "attr-value",
                    {
                        script: {
                            pattern: /=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                            inside: {
                                "script-punctuation": {
                                    pattern: /^=(?={)/,
                                    alias: "punctuation",
                                },
                                rest: e.languages.jsx,
                            },
                            alias: "language-javascript",
                        },
                    },
                    e.languages.jsx.tag,
                );
                const n = function e(t) {
                    return t
                        ? "string" == typeof t
                            ? t
                            : "string" == typeof t.content
                                ? t.content
                                : t.content.map(e).join("")
                        : "";
                };
                e.hooks.add("after-tokenize", function (t) {
                    ("jsx" !== t.language && "tsx" !== t.language) ||
                        (function t(r) {
                            for (let o = [], a = 0; a < r.length; a++) {
                                let i = r[a],
                                    s = !1;
                                if (
                                    ("string" != typeof i &&
                                        ("tag" === i.type &&
                                        i.content[0] &&
                                        "tag" === i.content[0].type
                                            ? "</" === i.content[0].content[0].content
                                                ? o.length > 0 &&
                                                  o[o.length - 1].tagName ===
                                                      n(i.content[0].content[1]) &&
                                                  o.pop()
                                                : "/>" ===
                                                      i.content[i.content.length - 1].content ||
                                                  o.push({
                                                      tagName: n(i.content[0].content[1]),
                                                      openedBraces: 0,
                                                  })
                                            : o.length > 0 &&
                                              "punctuation" === i.type &&
                                              "{" === i.content
                                                ? o[o.length - 1].openedBraces++
                                                : o.length > 0 &&
                                              o[o.length - 1].openedBraces > 0 &&
                                              "punctuation" === i.type &&
                                              "}" === i.content
                                                    ? o[o.length - 1].openedBraces--
                                                    : (s = !0)),
                                    (s || "string" == typeof i) &&
                                        o.length > 0 &&
                                        0 === o[o.length - 1].openedBraces)
                                ) {
                                    let l = n(i);
                                    a < r.length - 1 &&
                                        ("string" == typeof r[a + 1] ||
                                            "plain-text" === r[a + 1].type) &&
                                        ((l += n(r[a + 1])), r.splice(a + 1, 1)),
                                    a > 0 &&
                                            ("string" == typeof r[a - 1] ||
                                                "plain-text" === r[a - 1].type) &&
                                            ((l = n(r[a - 1]) + l), r.splice(a - 1, 1), a--),
                                    (r[a] = new e.Token("plain-text", l, null, l));
                                }
                                i.content && "string" != typeof i.content && t(i.content);
                            }
                        })(t.tokens);
                });
            })(Prism);
        },
        Gytx: function (e, t) {
            e.exports = function (e, t, n, r) {
                let o = n ? n.call(r, e, t) : void 0;
                if (void 0 !== o) return !!o;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                const a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (let s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
                    const c = a[l];
                    if (!s(c)) return !1;
                    const u = e[c],
                        f = t[c];
                    if (!1 === (o = n ? n.call(r, u, f, c) : void 0) || (void 0 === o && u !== f))
                        return !1;
                }
                return !0;
            };
        },
        QWvX: function (e, t) {
            (Prism.languages.javascript = Prism.languages.extend("clike", {
                "class-name": [
                    Prism.languages.clike["class-name"],
                    {
                        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                        lookbehind: !0,
                    },
                ],
                keyword: [
                    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
                    {
                        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                        lookbehind: !0,
                    },
                ],
                number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/,
            })),
            (Prism.languages.javascript[
                "class-name"
            ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
            Prism.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                    lookbehind: !0,
                    greedy: !0,
                },
                "function-variable": {
                    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
                    alias: "function",
                },
                parameter: [
                    {
                        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                        lookbehind: !0,
                        inside: Prism.languages.javascript,
                    },
                    {
                        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                        inside: Prism.languages.javascript,
                    },
                    {
                        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                        lookbehind: !0,
                        inside: Prism.languages.javascript,
                    },
                    {
                        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                        lookbehind: !0,
                        inside: Prism.languages.javascript,
                    },
                ],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
            }),
            Prism.languages.insertBefore("javascript", "string", {
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                            lookbehind: !0,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^\${|}$/,
                                    alias: "punctuation",
                                },
                                rest: Prism.languages.javascript,
                            },
                        },
                        string: /[\s\S]+/,
                    },
                },
            }),
            Prism.languages.markup &&
                    Prism.languages.markup.tag.addInlined("script", "javascript"),
            (Prism.languages.js = Prism.languages.javascript);
        },
        R1wR: function (e, t, n) {
            
            const r = n("6qGY"),
                o = "function" == typeof Symbol && Symbol.for,
                a = o ? Symbol.for("react.element") : 60103,
                i = o ? Symbol.for("react.portal") : 60106,
                s = o ? Symbol.for("react.fragment") : 60107,
                l = o ? Symbol.for("react.strict_mode") : 60108,
                c = o ? Symbol.for("react.profiler") : 60114,
                u = o ? Symbol.for("react.provider") : 60109,
                f = o ? Symbol.for("react.context") : 60110,
                p = o ? Symbol.for("react.forward_ref") : 60112,
                d = o ? Symbol.for("react.suspense") : 60113,
                y = o ? Symbol.for("react.memo") : 60115,
                g = o ? Symbol.for("react.lazy") : 60116,
                _ = "function" == typeof Symbol && Symbol.iterator;
            function h(e) {
                for (
                    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
                    n < arguments.length;
                    n++
                )
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return (
                    "Minified React error #" +
                    e +
                    "; visit " +
                    t +
                    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                );
            }
            const m = {
                    isMounted: function () {
                        return !1;
                    },
                    enqueueForceUpdate: function () {},
                    enqueueReplaceState: function () {},
                    enqueueSetState: function () {},
                },
                w = {};
            function v(e, t, n) {
                (this.props = e), (this.context = t), (this.refs = w), (this.updater = n || m);
            }
            function T() {}
            function b(e, t, n) {
                (this.props = e), (this.context = t), (this.refs = w), (this.updater = n || m);
            }
            (v.prototype.isReactComponent = {}),
            (v.prototype.setState = function (e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e)
                    throw Error(h(85));
                this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (v.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (T.prototype = v.prototype);
            const E = (b.prototype = new T());
            (E.constructor = b), r(E, v.prototype), (E.isPureReactComponent = !0);
            const A = { current: null },
                S = Object.prototype.hasOwnProperty,
                P = { key: !0, ref: !0, __self: !0, __source: !0 };
            function x(e, t, n) {
                let r,
                    o = {},
                    i = null,
                    s = null;
                if (null != t)
                    for (r in (void 0 !== t.ref && (s = t.ref),
                    void 0 !== t.key && (i = "" + t.key),
                    t))
                        S.call(t, r) && !P.hasOwnProperty(r) && (o[r] = t[r]);
                let l = arguments.length - 2;
                if (1 === l) o.children = n;
                else if (1 < l) {
                    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
                    o.children = c;
                }
                if (e && e.defaultProps)
                    for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
                return { $$typeof: a, type: e, key: i, ref: s, props: o, _owner: A.current };
            }
            function O(e) {
                return "object" == typeof e && null !== e && e.$$typeof === a;
            }
            const C = /\/+/g,
                R = [];
            function k(e, t, n, r) {
                if (R.length) {
                    const o = R.pop();
                    return (
                        (o.result = e),
                        (o.keyPrefix = t),
                        (o.func = n),
                        (o.context = r),
                        (o.count = 0),
                        o
                    );
                }
                return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
            }
            function M(e) {
                (e.result = null),
                (e.keyPrefix = null),
                (e.func = null),
                (e.context = null),
                (e.count = 0),
                10 > R.length && R.push(e);
            }
            function N(e, t, n) {
                return null == e
                    ? 0
                    : (function e(t, n, r, o) {
                        let s = typeof t;
                        ("undefined" !== s && "boolean" !== s) || (t = null);
                        let l = !1;
                        if (null === t) l = !0;
                        else
                            switch (s) {
                                case "string":
                                case "number":
                                    l = !0;
                                    break;
                                case "object":
                                    switch (t.$$typeof) {
                                        case a:
                                        case i:
                                            l = !0;
                                    }
                            }
                        if (l) return r(o, t, "" === n ? "." + F(t, 0) : n), 1;
                        if (((l = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                            for (var c = 0; c < t.length; c++) {
                                var u = n + F((s = t[c]), c);
                                l += e(s, u, r, o);
                            }
                        else if (
                            (null === t || "object" != typeof t
                                ? (u = null)
                                : (u =
                                        "function" == typeof (u = (_ && t[_]) || t["@@iterator"])
                                            ? u
                                            : null),
                            "function" == typeof u)
                        )
                            for (t = u.call(t), c = 0; !(s = t.next()).done; )
                                l += e((s = s.value), (u = n + F(s, c++)), r, o);
                        else if ("object" === s)
                            throw (
                                ((r = "" + t),
                                Error(
                                    h(
                                        31,
                                        "[object Object]" === r
                                            ? "object with keys {" +
                                                    Object.keys(t).join(", ") +
                                                    "}"
                                            : r,
                                        "",
                                    ),
                                ))
                            );
                        return l;
                    })(e, "", t, n);
            }
            function F(e, t) {
                return "object" == typeof e && null !== e && null != e.key
                    ? (function (e) {
                        const t = { "=": "=0", ":": "=2" };
                        return (
                            "$" +
                              ("" + e).replace(/[=:]/g, function (e) {
                                  return t[e];
                              })
                        );
                    })(e.key)
                    : t.toString(36);
            }
            function j(e, t) {
                e.func.call(e.context, t, e.count++);
            }
            function I(e, t, n) {
                const r = e.result,
                    o = e.keyPrefix;
                (e = e.func.call(e.context, t, e.count++)),
                Array.isArray(e)
                    ? L(e, r, n, function (e) {
                        return e;
                    })
                    : null != e &&
                          (O(e) &&
                              (e = (function (e, t) {
                                  return {
                                      $$typeof: a,
                                      type: e.type,
                                      key: t,
                                      ref: e.ref,
                                      props: e.props,
                                      _owner: e._owner,
                                  };
                              })(
                                  e,
                                  o +
                                      (!e.key || (t && t.key === e.key)
                                          ? ""
                                          : ("" + e.key).replace(C, "$&/") + "/") +
                                      n,
                              )),
                          r.push(e));
            }
            function L(e, t, n, r, o) {
                let a = "";
                null != n && (a = ("" + n).replace(C, "$&/") + "/"),
                N(e, I, (t = k(t, a, r, o))),
                M(t);
            }
            const G = { current: null };
            function q() {
                const e = G.current;
                if (null === e) throw Error(h(321));
                return e;
            }
            const H = {
                ReactCurrentDispatcher: G,
                ReactCurrentBatchConfig: { suspense: null },
                ReactCurrentOwner: A,
                IsSomeRendererActing: { current: !1 },
                assign: r,
            };
            (t.Children = {
                map: function (e, t, n) {
                    if (null == e) return e;
                    const r = [];
                    return L(e, r, null, t, n), r;
                },
                forEach: function (e, t, n) {
                    if (null == e) return e;
                    N(e, j, (t = k(null, null, t, n))), M(t);
                },
                count: function (e) {
                    return N(
                        e,
                        function () {
                            return null;
                        },
                        null,
                    );
                },
                toArray: function (e) {
                    const t = [];
                    return (
                        L(e, t, null, function (e) {
                            return e;
                        }),
                        t
                    );
                },
                only: function (e) {
                    if (!O(e)) throw Error(h(143));
                    return e;
                },
            }),
            (t.Component = v),
            (t.Fragment = s),
            (t.Profiler = c),
            (t.PureComponent = b),
            (t.StrictMode = l),
            (t.Suspense = d),
            (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
            (t.cloneElement = function (e, t, n) {
                if (null == e) throw Error(h(267, e));
                let o = r({}, e.props),
                    i = e.key,
                    s = e.ref,
                    l = e._owner;
                if (null != t) {
                    if (
                        (void 0 !== t.ref && ((s = t.ref), (l = A.current)),
                        void 0 !== t.key && (i = "" + t.key),
                        e.type && e.type.defaultProps)
                    )
                        var c = e.type.defaultProps;
                    for (u in t)
                        S.call(t, u) &&
                                !P.hasOwnProperty(u) &&
                                (o[u] = void 0 === t[u] && void 0 !== c ? c[u] : t[u]);
                }
                var u = arguments.length - 2;
                if (1 === u) o.children = n;
                else if (1 < u) {
                    c = Array(u);
                    for (let f = 0; f < u; f++) c[f] = arguments[f + 2];
                    o.children = c;
                }
                return { $$typeof: a, type: e.type, key: i, ref: s, props: o, _owner: l };
            }),
            (t.createContext = function (e, t) {
                return (
                    void 0 === t && (t = null),
                    ((e = {
                        $$typeof: f,
                        _calculateChangedBits: t,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                    }).Provider = { $$typeof: u, _context: e }),
                    (e.Consumer = e)
                );
            }),
            (t.createElement = x),
            (t.createFactory = function (e) {
                const t = x.bind(null, e);
                return (t.type = e), t;
            }),
            (t.createRef = function () {
                return { current: null };
            }),
            (t.forwardRef = function (e) {
                return { $$typeof: p, render: e };
            }),
            (t.isValidElement = O),
            (t.lazy = function (e) {
                return { $$typeof: g, _ctor: e, _status: -1, _result: null };
            }),
            (t.memo = function (e, t) {
                return { $$typeof: y, type: e, compare: void 0 === t ? null : t };
            }),
            (t.useCallback = function (e, t) {
                return q().useCallback(e, t);
            }),
            (t.useContext = function (e, t) {
                return q().useContext(e, t);
            }),
            (t.useDebugValue = function () {}),
            (t.useEffect = function (e, t) {
                return q().useEffect(e, t);
            }),
            (t.useImperativeHandle = function (e, t, n) {
                return q().useImperativeHandle(e, t, n);
            }),
            (t.useLayoutEffect = function (e, t) {
                return q().useLayoutEffect(e, t);
            }),
            (t.useMemo = function (e, t) {
                return q().useMemo(e, t);
            }),
            (t.useReducer = function (e, t, n) {
                return q().useReducer(e, t, n);
            }),
            (t.useRef = function (e) {
                return q().useRef(e);
            }),
            (t.useState = function (e) {
                return q().useState(e);
            }),
            (t.version = "16.13.1");
        },
        TJpk: function (e, t, n) {
            (t.__esModule = !0), (t.Helmet = void 0);
            const r =
                    Object.assign ||
                    function (e) {
                        for (let t = 1; t < arguments.length; t++) {
                            const n = arguments[t];
                            for (const r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    },
                o = (function () {
                    function e(e, t) {
                        for (let n = 0; n < t.length; n++) {
                            const r = t[n];
                            (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                    };
                })(),
                a = f(n("q1tI")),
                i = f(n("17x9")),
                s = f(n("8+s/")),
                l = f(n("bmMU")),
                c = n("v1p5"),
                u = n("hFT/");
            function f(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function p(e, t) {
                const n = {};
                for (const r in e)
                    t.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                return n;
            }
            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function y(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
            }
            let g,
                _,
                h,
                m = (0, s.default)(
                    c.reducePropsToState,
                    c.handleClientStateChange,
                    c.mapStateOnServer,
                )(function () {
                    return null;
                }),
                w =
                    ((g = m),
                    (h = _ = (function (e) {
                        function t() {
                            return d(this, t), y(this, e.apply(this, arguments));
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError(
                                        "Super expression must either be null or a function, not " +
                                            typeof t,
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                t &&
                                        (Object.setPrototypeOf
                                            ? Object.setPrototypeOf(e, t)
                                            : (e.__proto__ = t));
                            })(t, e),
                            (t.prototype.shouldComponentUpdate = function (e) {
                                return !(0, l.default)(this.props, e);
                            }),
                            (t.prototype.mapNestedChildrenToProps = function (e, t) {
                                if (!t) return null;
                                switch (e.type) {
                                    case u.TAG_NAMES.SCRIPT:
                                    case u.TAG_NAMES.NOSCRIPT:
                                        return { innerHTML: t };
                                    case u.TAG_NAMES.STYLE:
                                        return { cssText: t };
                                }
                                throw new Error(
                                    "<" +
                                        e.type +
                                        " /> elements are self-closing and can not contain children. Refer to our API for more information.",
                                );
                            }),
                            (t.prototype.flattenArrayTypeChildren = function (e) {
                                let t,
                                    n = e.child,
                                    o = e.arrayTypeChildren,
                                    a = e.newChildProps,
                                    i = e.nestedChildren;
                                return r(
                                    {},
                                    o,
                                    (((t = {})[n.type] = [].concat(o[n.type] || [], [
                                        r({}, a, this.mapNestedChildrenToProps(n, i)),
                                    ])),
                                    t),
                                );
                            }),
                            (t.prototype.mapObjectTypeChildren = function (e) {
                                let t,
                                    n,
                                    o = e.child,
                                    a = e.newProps,
                                    i = e.newChildProps,
                                    s = e.nestedChildren;
                                switch (o.type) {
                                    case u.TAG_NAMES.TITLE:
                                        return r(
                                            {},
                                            a,
                                            (((t = {})[o.type] = s),
                                            (t.titleAttributes = r({}, i)),
                                            t),
                                        );
                                    case u.TAG_NAMES.BODY:
                                        return r({}, a, { bodyAttributes: r({}, i) });
                                    case u.TAG_NAMES.HTML:
                                        return r({}, a, { htmlAttributes: r({}, i) });
                                }
                                return r({}, a, (((n = {})[o.type] = r({}, i)), n));
                            }),
                            (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                                let n = r({}, t);
                                return (
                                    Object.keys(e).forEach(function (t) {
                                        let o;
                                        n = r({}, n, (((o = {})[t] = e[t]), o));
                                    }),
                                    n
                                );
                            }),
                            (t.prototype.warnOnInvalidChildren = function (e, t) {
                                return !0;
                            }),
                            (t.prototype.mapChildrenToProps = function (e, t) {
                                let n = this,
                                    r = {};
                                return (
                                    a.default.Children.forEach(e, function (e) {
                                        if (e && e.props) {
                                            const o = e.props,
                                                a = o.children,
                                                i = p(o, ["children"]),
                                                s = (0, c.convertReactPropstoHtmlAttributes)(i);
                                            switch ((n.warnOnInvalidChildren(e, a), e.type)) {
                                                case u.TAG_NAMES.LINK:
                                                case u.TAG_NAMES.META:
                                                case u.TAG_NAMES.NOSCRIPT:
                                                case u.TAG_NAMES.SCRIPT:
                                                case u.TAG_NAMES.STYLE:
                                                    r = n.flattenArrayTypeChildren({
                                                        child: e,
                                                        arrayTypeChildren: r,
                                                        newChildProps: s,
                                                        nestedChildren: a,
                                                    });
                                                    break;
                                                default:
                                                    t = n.mapObjectTypeChildren({
                                                        child: e,
                                                        newProps: t,
                                                        newChildProps: s,
                                                        nestedChildren: a,
                                                    });
                                            }
                                        }
                                    }),
                                    (t = this.mapArrayTypeChildrenToProps(r, t))
                                );
                            }),
                            (t.prototype.render = function () {
                                let e = this.props,
                                    t = e.children,
                                    n = p(e, ["children"]),
                                    o = r({}, n);
                                return (
                                    t && (o = this.mapChildrenToProps(t, o)),
                                    a.default.createElement(g, o)
                                );
                            }),
                            o(t, null, [
                                {
                                    key: "canUseDOM",
                                    set: function (e) {
                                        g.canUseDOM = e;
                                    },
                                },
                            ]),
                            t
                        );
                    })(a.default.Component)),
                    (_.propTypes = {
                        base: i.default.object,
                        bodyAttributes: i.default.object,
                        children: i.default.oneOfType([
                            i.default.arrayOf(i.default.node),
                            i.default.node,
                        ]),
                        defaultTitle: i.default.string,
                        defer: i.default.bool,
                        encodeSpecialCharacters: i.default.bool,
                        htmlAttributes: i.default.object,
                        link: i.default.arrayOf(i.default.object),
                        meta: i.default.arrayOf(i.default.object),
                        noscript: i.default.arrayOf(i.default.object),
                        onChangeClientState: i.default.func,
                        script: i.default.arrayOf(i.default.object),
                        style: i.default.arrayOf(i.default.object),
                        title: i.default.string,
                        titleAttributes: i.default.object,
                        titleTemplate: i.default.string,
                    }),
                    (_.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
                    (_.peek = g.peek),
                    (_.rewind = function () {
                        let e = g.rewind();
                        return (
                            e ||
                                (e = (0, c.mapStateOnServer)({
                                    baseTag: [],
                                    bodyAttributes: {},
                                    encodeSpecialCharacters: !0,
                                    htmlAttributes: {},
                                    linkTags: [],
                                    metaTags: [],
                                    noscriptTags: [],
                                    scriptTags: [],
                                    styleTags: [],
                                    title: "",
                                    titleAttributes: {},
                                })),
                            e
                        );
                    }),
                    h);
            (w.renderStatic = w.rewind), (t.Helmet = w), (t.default = w);
        },
        TwNY: function (e, t, n) {
            
            const r = n("9EFL"),
                o = n.n(r);
            t.a = function () {
                return o.a.createElement(
                    "a",
                    {
                        href: "https://github.com/binodswain/react-faq-component",
                        class: "github-corner",
                        "aria-label": "View source on GitHub",
                    },
                    o.a.createElement(
                        "svg",
                        {
                            width: "80",
                            height: "80",
                            viewBox: "0 0 250 250",
                            style: {
                                fill: "#5000ca",
                                color: "#fff",
                                position: "absolute",
                                top: 0,
                                border: 0,
                                right: 0,
                            },
                            "aria-hidden": "true",
                        },
                        o.a.createElement("path", {
                            d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",
                        }),
                        o.a.createElement("path", {
                            d:
                                "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
                            fill: "currentColor",
                            style: { transformOrigin: "130px 106px" },
                            class: "octo-arm",
                        }),
                        o.a.createElement("path", {
                            d:
                                "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
                            fill: "currentColor",
                            class: "octo-body",
                        }),
                    ),
                );
            };
        },
        "W/9C": function (e, t, n) {
            
            const r = n("q1tI"),
                o = n.n(r),
                a = function () {
                    return o.a.createElement(
                        "footer",
                        { className: "footer-sec" },
                        o.a.createElement(
                            "div",
                            { style: { margin: "0 auto", maxWidth: 960, padding: "1.0875rem" } },
                            o.a.createElement(
                                "h4",
                                { style: { margin: 0 } },
                                "MIT ©",
                                " ",
                                o.a.createElement(
                                    "a",
                                    {
                                        href: "https://github.com/binodswain",
                                        target: "_blank",
                                        rel: "noreferrer",
                                    },
                                    "Binod Swain",
                                ),
                            ),
                        ),
                    );
                };
            (a.defaultProps = { siteTitle: "" }), (t.a = a);
        },
        ZgVT: function (e, t) {
            !(function (e) {
                const t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                (e.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
                        inside: {
                            rule: /^@[\w-]+/,
                            "selector-function-argument": {
                                pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
                                lookbehind: !0,
                                alias: "selector",
                            },
                        },
                    },
                    url: {
                        pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
                        greedy: !0,
                        inside: { function: /^url/i, punctuation: /^\(|\)$/ },
                    },
                    selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
                    string: { pattern: t, greedy: !0 },
                    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
                    important: /!important\b/i,
                    function: /[-a-z0-9]+(?=\()/i,
                    punctuation: /[(){};:,]/,
                }),
                (e.languages.css.atrule.inside.rest = e.languages.css);
                const n = e.languages.markup;
                n &&
                    (n.tag.addInlined("style", "css"),
                    e.languages.insertBefore(
                        "inside",
                        "attr-value",
                        {
                            "style-attr": {
                                pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                                inside: {
                                    "attr-name": { pattern: /^\s*style/i, inside: n.tag.inside },
                                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                                    "attr-value": { pattern: /.+/i, inside: e.languages.css },
                                },
                                alias: "language-css",
                            },
                        },
                        n.tag,
                    ));
            })(Prism);
        },
        bPOv: function (e, t) {
            (Prism.languages.markup = {
                comment: /<!--[\s\S]*?-->/,
                prolog: /<\?[\s\S]+?\?>/,
                doctype: {
                    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
                    greedy: !0,
                },
                cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
                    greedy: !0,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/i,
                            inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
                        },
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                            inside: {
                                punctuation: [
                                    /^=/,
                                    { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                                ],
                            },
                        },
                        punctuation: /\/?>/,
                        "attr-name": {
                            pattern: /[^\s>\/]+/,
                            inside: { namespace: /^[^\s>\/:]+:/ },
                        },
                    },
                },
                entity: /&#?[\da-z]{1,8};/i,
            }),
            (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
                    Prism.languages.markup.entity),
            Prism.hooks.add("wrap", function (e) {
                "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
            }),
            Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
                value: function (e, t) {
                    const n = {};
                    (n["language-" + t] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: Prism.languages[t],
                    }),
                    (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
                    const r = {
                        "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n },
                    };
                    r["language-" + t] = { pattern: /[\s\S]+/, inside: Prism.languages[t] };
                    const o = {};
                    (o[e] = {
                        pattern: RegExp(
                            /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
                                /__/g,
                                function () {
                                    return e;
                                },
                            ),
                            "i",
                        ),
                        lookbehind: !0,
                        greedy: !0,
                        inside: r,
                    }),
                    Prism.languages.insertBefore("markup", "cdata", o);
                },
            }),
            (Prism.languages.xml = Prism.languages.extend("markup", {})),
            (Prism.languages.html = Prism.languages.markup),
            (Prism.languages.mathml = Prism.languages.markup),
            (Prism.languages.svg = Prism.languages.markup);
        },
        bmMU: function (e, t, n) {
            
            const r = Array.isArray,
                o = Object.keys,
                a = Object.prototype.hasOwnProperty,
                i = "undefined" != typeof Element;
            e.exports = function (e, t) {
                try {
                    return (function e(t, n) {
                        if (t === n) return !0;
                        if (t && n && "object" == typeof t && "object" == typeof n) {
                            let s,
                                l,
                                c,
                                u = r(t),
                                f = r(n);
                            if (u && f) {
                                if ((l = t.length) != n.length) return !1;
                                for (s = l; 0 != s--; ) if (!e(t[s], n[s])) return !1;
                                return !0;
                            }
                            if (u != f) return !1;
                            const p = t instanceof Date,
                                d = n instanceof Date;
                            if (p != d) return !1;
                            if (p && d) return t.getTime() == n.getTime();
                            const y = t instanceof RegExp,
                                g = n instanceof RegExp;
                            if (y != g) return !1;
                            if (y && g) return t.toString() == n.toString();
                            const _ = o(t);
                            if ((l = _.length) !== o(n).length) return !1;
                            for (s = l; 0 != s--; ) if (!a.call(n, _[s])) return !1;
                            if (i && t instanceof Element && n instanceof Element) return t === n;
                            for (s = l; 0 != s--; )
                                if (!(("_owner" === (c = _[s]) && t.$$typeof) || e(t[c], n[c])))
                                    return !1;
                            return !0;
                        }
                        return t != t && n != n;
                    })(e, t);
                } catch (n) {
                    if (
                        (n.message && n.message.match(/stack|recursion/i)) ||
                        -2146828260 === n.number
                    )
                        return (
                            console.warn(
                                "Warning: react-fast-compare does not handle circular references.",
                                n.name,
                                n.message,
                            ),
                            !1
                        );
                    throw n;
                }
            };
        },
        "hFT/": function (e, t) {
            t.__esModule = !0;
            t.ATTRIBUTE_NAMES = {
                BODY: "bodyAttributes",
                HTML: "htmlAttributes",
                TITLE: "titleAttributes",
            };
            const n = (t.TAG_NAMES = {
                    BASE: "base",
                    BODY: "body",
                    HEAD: "head",
                    HTML: "html",
                    LINK: "link",
                    META: "meta",
                    NOSCRIPT: "noscript",
                    SCRIPT: "script",
                    STYLE: "style",
                    TITLE: "title",
                }),
                r =
                    ((t.VALID_TAG_NAMES = Object.keys(n).map(function (e) {
                        return n[e];
                    })),
                    (t.TAG_PROPERTIES = {
                        CHARSET: "charset",
                        CSS_TEXT: "cssText",
                        HREF: "href",
                        HTTPEQUIV: "http-equiv",
                        INNER_HTML: "innerHTML",
                        ITEM_PROP: "itemprop",
                        NAME: "name",
                        PROPERTY: "property",
                        REL: "rel",
                        SRC: "src",
                    }),
                    (t.REACT_TAG_MAP = {
                        accesskey: "accessKey",
                        charset: "charSet",
                        class: "className",
                        contenteditable: "contentEditable",
                        contextmenu: "contextMenu",
                        "http-equiv": "httpEquiv",
                        itemprop: "itemProp",
                        tabindex: "tabIndex",
                    }));
            (t.HELMET_PROPS = {
                DEFAULT_TITLE: "defaultTitle",
                DEFER: "defer",
                ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
                ON_CHANGE_CLIENT_STATE: "onChangeClientState",
                TITLE_TEMPLATE: "titleTemplate",
            }),
            (t.HTML_TAG_MAP = Object.keys(r).reduce(function (e, t) {
                return (e[r[t]] = t), e;
            }, {})),
            (t.SELF_CLOSING_TAGS = [n.NOSCRIPT, n.SCRIPT, n.STYLE]),
            (t.HELMET_ATTRIBUTE = "data-react-helmet");
        },
        "hL/g": function (e, t, n) {},
        jHpe: function (e, t, n) {
            (function (t) {
                const n = (function (e) {
                    var t = /\blang(?:uage)?-([\w-]+)\b/i,
                        n = 0,
                        r = {
                            manual: e.Prism && e.Prism.manual,
                            disableWorkerMessageHandler:
                                e.Prism && e.Prism.disableWorkerMessageHandler,
                            util: {
                                encode: function e(t) {
                                    return t instanceof o
                                        ? new o(t.type, e(t.content), t.alias)
                                        : Array.isArray(t)
                                            ? t.map(e)
                                            : t
                                                .replace(/&/g, "&amp;")
                                                .replace(/</g, "&lt;")
                                                .replace(/\u00a0/g, " ");
                                },
                                type: function (e) {
                                    return Object.prototype.toString.call(e).slice(8, -1);
                                },
                                objId: function (e) {
                                    return (
                                        e.__id || Object.defineProperty(e, "__id", { value: ++n }),
                                        e.__id
                                    );
                                },
                                clone: function e(t, n) {
                                    let o,
                                        a,
                                        i = r.util.type(t);
                                    switch (((n = n || {}), i)) {
                                        case "Object":
                                            if (((a = r.util.objId(t)), n[a])) return n[a];
                                            for (const s in ((o = {}), (n[a] = o), t))
                                                t.hasOwnProperty(s) && (o[s] = e(t[s], n));
                                            return o;
                                        case "Array":
                                            return (
                                                (a = r.util.objId(t)),
                                                n[a]
                                                    ? n[a]
                                                    : ((o = []),
                                                    (n[a] = o),
                                                    t.forEach(function (t, r) {
                                                        o[r] = e(t, n);
                                                    }),
                                                    o)
                                            );
                                        default:
                                            return t;
                                    }
                                },
                                getLanguage: function (e) {
                                    for (; e && !t.test(e.className); ) e = e.parentElement;
                                    return e
                                        ? (e.className.match(t) || [, "none"])[1].toLowerCase()
                                        : "none";
                                },
                                currentScript: function () {
                                    if ("undefined" == typeof document) return null;
                                    if ("currentScript" in document) return document.currentScript;
                                    try {
                                        throw new Error();
                                    } catch (r) {
                                        const e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack) ||
                                            [])[1];
                                        if (e) {
                                            const t = document.getElementsByTagName("script");
                                            for (const n in t) if (t[n].src == e) return t[n];
                                        }
                                        return null;
                                    }
                                },
                            },
                            languages: {
                                extend: function (e, t) {
                                    const n = r.util.clone(r.languages[e]);
                                    for (const o in t) n[o] = t[o];
                                    return n;
                                },
                                insertBefore: function (e, t, n, o) {
                                    const a = (o = o || r.languages)[e],
                                        i = {};
                                    for (const s in a)
                                        if (a.hasOwnProperty(s)) {
                                            if (s == t)
                                                for (const l in n)
                                                    n.hasOwnProperty(l) && (i[l] = n[l]);
                                            n.hasOwnProperty(s) || (i[s] = a[s]);
                                        }
                                    const c = o[e];
                                    return (
                                        (o[e] = i),
                                        r.languages.DFS(r.languages, function (t, n) {
                                            n === c && t != e && (this[t] = i);
                                        }),
                                        i
                                    );
                                },
                                DFS: function e(t, n, o, a) {
                                    a = a || {};
                                    const i = r.util.objId;
                                    for (const s in t)
                                        if (t.hasOwnProperty(s)) {
                                            n.call(t, s, t[s], o || s);
                                            const l = t[s],
                                                c = r.util.type(l);
                                            "Object" !== c || a[i(l)]
                                                ? "Array" !== c ||
                                                  a[i(l)] ||
                                                  ((a[i(l)] = !0), e(l, n, s, a))
                                                : ((a[i(l)] = !0), e(l, n, null, a));
                                        }
                                },
                            },
                            plugins: {},
                            highlightAll: function (e, t) {
                                r.highlightAllUnder(document, e, t);
                            },
                            highlightAllUnder: function (e, t, n) {
                                const o = {
                                    callback: n,
                                    container: e,
                                    selector:
                                        'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                                };
                                r.hooks.run("before-highlightall", o),
                                (o.elements = Array.prototype.slice.apply(
                                    o.container.querySelectorAll(o.selector),
                                )),
                                r.hooks.run("before-all-elements-highlight", o);
                                for (var a, i = 0; (a = o.elements[i++]); )
                                    r.highlightElement(a, !0 === t, o.callback);
                            },
                            highlightElement: function (n, o, a) {
                                const i = r.util.getLanguage(n),
                                    s = r.languages[i];
                                n.className =
                                    n.className.replace(t, "").replace(/\s+/g, " ") +
                                    " language-" +
                                    i;
                                const l = n.parentNode;
                                l &&
                                    "pre" === l.nodeName.toLowerCase() &&
                                    (l.className =
                                        l.className.replace(t, "").replace(/\s+/g, " ") +
                                        " language-" +
                                        i);
                                const c = {
                                    element: n,
                                    language: i,
                                    grammar: s,
                                    code: n.textContent,
                                };
                                function u(e) {
                                    (c.highlightedCode = e),
                                    r.hooks.run("before-insert", c),
                                    (c.element.innerHTML = c.highlightedCode),
                                    r.hooks.run("after-highlight", c),
                                    r.hooks.run("complete", c),
                                    a && a.call(c.element);
                                }
                                if ((r.hooks.run("before-sanity-check", c), !c.code))
                                    return (
                                        r.hooks.run("complete", c), void (a && a.call(c.element))
                                    );
                                if ((r.hooks.run("before-highlight", c), c.grammar))
                                    if (o && e.Worker) {
                                        const f = new Worker(r.filename);
                                        (f.onmessage = function (e) {
                                            u(e.data);
                                        }),
                                        f.postMessage(
                                            JSON.stringify({
                                                language: c.language,
                                                code: c.code,
                                                immediateClose: !0,
                                            }),
                                        );
                                    } else u(r.highlight(c.code, c.grammar, c.language));
                                else u(r.util.encode(c.code));
                            },
                            highlight: function (e, t, n) {
                                const a = { code: e, grammar: t, language: n };
                                return (
                                    r.hooks.run("before-tokenize", a),
                                    (a.tokens = r.tokenize(a.code, a.grammar)),
                                    r.hooks.run("after-tokenize", a),
                                    o.stringify(r.util.encode(a.tokens), a.language)
                                );
                            },
                            tokenize: function (e, t) {
                                const n = t.rest;
                                if (n) {
                                    for (const l in n) t[l] = n[l];
                                    delete t.rest;
                                }
                                const c = new a();
                                return (
                                    i(c, c.head, e),
                                    (function e(t, n, a, l, c, u, f) {
                                        for (const p in a)
                                            if (a.hasOwnProperty(p) && a[p]) {
                                                let d = a[p];
                                                d = Array.isArray(d) ? d : [d];
                                                for (let y = 0; y < d.length; ++y) {
                                                    if (f && f == p + "," + y) return;
                                                    let g = d[y],
                                                        _ = g.inside,
                                                        h = !!g.lookbehind,
                                                        m = !!g.greedy,
                                                        w = 0,
                                                        v = g.alias;
                                                    if (m && !g.pattern.global) {
                                                        const T = g.pattern
                                                            .toString()
                                                            .match(/[imsuy]*$/)[0];
                                                        g.pattern = RegExp(
                                                            g.pattern.source,
                                                            T + "g",
                                                        );
                                                    }
                                                    g = g.pattern || g;
                                                    for (
                                                        let b = l.next, E = c;
                                                        b !== n.tail;
                                                        E += b.value.length, b = b.next
                                                    ) {
                                                        let A = b.value;
                                                        if (n.length > t.length) return;
                                                        if (!(A instanceof o)) {
                                                            let S = 1;
                                                            if (m && b != n.tail.prev) {
                                                                if (
                                                                    ((g.lastIndex = E),
                                                                    !(R = g.exec(t)))
                                                                )
                                                                    break;
                                                                var P =
                                                                        R.index +
                                                                        (h && R[1]
                                                                            ? R[1].length
                                                                            : 0),
                                                                    x = R.index + R[0].length,
                                                                    O = E;
                                                                for (O += b.value.length; P >= O; )
                                                                    (b = b.next),
                                                                    (O += b.value.length);
                                                                if (
                                                                    ((O -= b.value.length),
                                                                    (E = O),
                                                                    b.value instanceof o)
                                                                )
                                                                    continue;
                                                                for (
                                                                    let C = b;
                                                                    C !== n.tail &&
                                                                    (O < x ||
                                                                        ("string" ==
                                                                            typeof C.value &&
                                                                            !C.prev.value.greedy));
                                                                    C = C.next
                                                                )
                                                                    S++, (O += C.value.length);
                                                                S--,
                                                                (A = t.slice(E, O)),
                                                                (R.index -= E);
                                                            } else {
                                                                g.lastIndex = 0;
                                                                var R = g.exec(A);
                                                            }
                                                            if (R) {
                                                                h && (w = R[1] ? R[1].length : 0);
                                                                (P = R.index + w),
                                                                (R = R[0].slice(w)),
                                                                (x = P + R.length);
                                                                let k = A.slice(0, P),
                                                                    M = A.slice(x),
                                                                    N = b.prev;
                                                                k &&
                                                                    ((N = i(n, N, k)),
                                                                    (E += k.length)),
                                                                s(n, N, S);
                                                                const F = new o(
                                                                    p,
                                                                    _ ? r.tokenize(R, _) : R,
                                                                    v,
                                                                    R,
                                                                    m,
                                                                );
                                                                if (
                                                                    ((b = i(n, N, F)),
                                                                    M && i(n, b, M),
                                                                    S > 1 &&
                                                                        e(
                                                                            t,
                                                                            n,
                                                                            a,
                                                                            b.prev,
                                                                            E,
                                                                            !0,
                                                                            p + "," + y,
                                                                        ),
                                                                    u)
                                                                )
                                                                    break;
                                                            } else if (u) break;
                                                        }
                                                    }
                                                }
                                            }
                                    })(e, c, t, c.head, 0),
                                    (function (e) {
                                        let t = [],
                                            n = e.head.next;
                                        for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                                        return t;
                                    })(c)
                                );
                            },
                            hooks: {
                                all: {},
                                add: function (e, t) {
                                    const n = r.hooks.all;
                                    (n[e] = n[e] || []), n[e].push(t);
                                },
                                run: function (e, t) {
                                    const n = r.hooks.all[e];
                                    if (n && n.length) for (var o, a = 0; (o = n[a++]); ) o(t);
                                },
                            },
                            Token: o,
                        };
                    function o(e, t, n, r, o) {
                        (this.type = e),
                        (this.content = t),
                        (this.alias = n),
                        (this.length = 0 | (r || "").length),
                        (this.greedy = !!o);
                    }
                    function a() {
                        const e = { value: null, prev: null, next: null },
                            t = { value: null, prev: e, next: null };
                        (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
                    }
                    function i(e, t, n) {
                        const r = t.next,
                            o = { value: n, prev: t, next: r };
                        return (t.next = o), (r.prev = o), e.length++, o;
                    }
                    function s(e, t, n) {
                        for (var r = t.next, o = 0; o < n && r !== e.tail; o++) r = r.next;
                        (t.next = r), (r.prev = t), (e.length -= o);
                    }
                    if (
                        ((e.Prism = r),
                        (o.stringify = function e(t, n) {
                            if ("string" == typeof t) return t;
                            if (Array.isArray(t)) {
                                let o = "";
                                return (
                                    t.forEach(function (t) {
                                        o += e(t, n);
                                    }),
                                    o
                                );
                            }
                            const a = {
                                    type: t.type,
                                    content: e(t.content, n),
                                    tag: "span",
                                    classes: ["token", t.type],
                                    attributes: {},
                                    language: n,
                                },
                                i = t.alias;
                            i &&
                                (Array.isArray(i)
                                    ? Array.prototype.push.apply(a.classes, i)
                                    : a.classes.push(i)),
                            r.hooks.run("wrap", a);
                            let s = "";
                            for (const l in a.attributes)
                                s +=
                                    " " +
                                    l +
                                    '="' +
                                    (a.attributes[l] || "").replace(/"/g, "&quot;") +
                                    '"';
                            return (
                                "<" +
                                a.tag +
                                ' class="' +
                                a.classes.join(" ") +
                                '"' +
                                s +
                                ">" +
                                a.content +
                                "</" +
                                a.tag +
                                ">"
                            );
                        }),
                        !e.document)
                    )
                        return e.addEventListener
                            ? (r.disableWorkerMessageHandler ||
                                  e.addEventListener(
                                      "message",
                                      function (t) {
                                          const n = JSON.parse(t.data),
                                              o = n.language,
                                              a = n.code,
                                              i = n.immediateClose;
                                          e.postMessage(r.highlight(a, r.languages[o], o)),
                                          i && e.close();
                                      },
                                      !1,
                                  ),
                            r)
                            : r;
                    const l = r.util.currentScript();
                    function c() {
                        r.manual || r.highlightAll();
                    }
                    if (
                        (l &&
                            ((r.filename = l.src),
                            l.hasAttribute("data-manual") && (r.manual = !0)),
                        !r.manual)
                    ) {
                        const u = document.readyState;
                        "loading" === u || ("interactive" === u && l && l.defer)
                            ? document.addEventListener("DOMContentLoaded", c)
                            : window.requestAnimationFrame
                                ? window.requestAnimationFrame(c)
                                : window.setTimeout(c, 16);
                    }
                    return r;
                })(
                    "undefined" != typeof window
                        ? window
                        : "undefined" != typeof WorkerGlobalScope &&
                          self instanceof WorkerGlobalScope
                            ? self
                            : {},
                );
                e.exports && (e.exports = n), void 0 !== t && (t.Prism = n);
            }.call(this, n("yLpj")));
        },
        tHFp: function (e, t, n) {
            
            const r = n("mXGw"),
                o = n.n(r),
                a = n("W0B4"),
                i = n.n(a);
            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l(e, t) {
                for (let n = 0; n < t.length; n++) {
                    const r = t[n];
                    (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
            }
            function c(e, t, n) {
                return t && l(e.prototype, t), n && l(e, n), e;
            }
            function u(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                        })
                        : (e[t] = n),
                    e
                );
            }
            function f() {
                return (f =
                    Object.assign ||
                    function (e) {
                        for (let t = 1; t < arguments.length; t++) {
                            const n = arguments[t];
                            for (const r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function p(e, t) {
                const n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    let r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                    n.push.apply(n, r);
                }
                return n;
            }
            function d(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                t &&
                        (function (e, t) {
                            (
                                Object.setPrototypeOf ||
                                function (e, t) {
                                    return (e.__proto__ = t), e;
                                }
                            )(e, t);
                        })(e, t);
            }
            function y(e) {
                return (y = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
            }
            function g(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return e;
            }
            function _(e, t) {
                return !t || ("object" != typeof t && "function" != typeof t) ? g(e) : t;
            }
            function h(e) {
                const t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {}),
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    let n,
                        r = y(e);
                    if (t) {
                        const o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return _(this, n);
                };
            }
            const m = {
                return: 13,
                arrowLeft: 37,
                arrowUp: 38,
                arrowRight: 39,
                arrowDown: 40,
                space: 32,
            };
            m.keyCodes = Object.keys(m).reduce(function (e, t) {
                return (e[m[t]] = t), e;
            }, {});
            const w = {
                "faq-row-wrapper": "styles_faq-row-wrapper__3vA1D",
                "faq-row": "styles_faq-row__2YF3c",
                "row-body": "styles_row-body__1NvUo",
                "row-title": "styles_row-title__1YiiY",
                "no-tabfocus": "styles_no-tabfocus__1HmyD",
                "row-title-text": "styles_row-title-text__1MuhU",
                "icon-wrapper": "styles_icon-wrapper__2cftw",
                closed: "styles_closed__39w54",
                "row-content": "styles_row-content__QOGZd",
                animate: "styles_animate__3ecdr",
                static: "styles_static__3chYW",
                expanded: "styles_expanded__3elPy",
                expanding: "styles_expanding__2OAFB",
                "row-content-text": "styles_row-content-text__2sgAB",
            };
            !(function (e, t) {
                void 0 === t && (t = {});
                const n = t.insertAt;
                if ("undefined" != typeof document) {
                    const r = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    (o.type = "text/css"),
                    "top" === n && r.firstChild
                        ? r.insertBefore(o, r.firstChild)
                        : r.appendChild(o),
                    o.styleSheet
                        ? (o.styleSheet.cssText = e)
                        : o.appendChild(document.createTextNode(e));
                }
            })(
                ".styles_faq-row-wrapper__3vA1D {\n  background-color: var(--faq-bg-color, white); }\n  .styles_faq-row-wrapper__3vA1D h2 {\n    margin: 0;\n    color: var(--title-text-color, black);\n    font-size: var(--title-text-size, 30px); }\n  .styles_faq-row-wrapper__3vA1D .styles_faq-row__2YF3c {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 0;\n    border-bottom: 1px solid #ccc; }\n  .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c {\n    flex-direction: column;\n    position: relative; }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY {\n      padding: 10px 0;\n      display: flex;\n      justify-content: space-between;\n      color: var(--row-title-color, black);\n      font-size: var(--row-title-text-size, large);\n      cursor: pointer;\n      align-items: center; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_no-tabfocus__1HmyD {\n        outline: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_row-title-text__1MuhU {\n        padding-right: 3em; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw {\n        max-width: 25px;\n        max-height: 25px;\n        margin: 0;\n        padding: 0;\n        color: var(--arrow-color, black);\n        transform: rotate(0deg);\n        transition: transform var(--transition-duration, 0.3s);\n        position: absolute;\n        top: 13px;\n        right: 12px; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          width: 100%;\n          height: 100%; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          fill: var(--arrow-color, black); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd {\n        visibility: hidden; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_animate__3ecdr {\n          opacity: 0;\n          transition: height var(--transition-duration, 0.3s); }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd {\n        visibility: visible; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: block; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanding__2OAFB .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd {\n      overflow: hidden;\n      transition: height var(--transition-duration, 0.3s);\n      transition-timing-function: var(--timing-function, ease); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd .styles_row-content-text__2sgAB {\n        color: var(--row-content-color, black);\n        font-size: var(--row-content-text-size, medium);\n        padding: var(--row-content-padding-top, 0) var(--row-content-padding-right, 0) var(--row-content-padding-bottom, 0) var(--row-content-padding-left, 0); }\n",
            );
            const v = (function (e) {
                d(n, r.PureComponent);
                const t = h(n);
                function n() {
                    let e;
                    s(this, n);
                    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
                        a[i] = arguments[i];
                    return (
                        u(g((e = t.call.apply(t, [this].concat(a)))), "state", {
                            isExpanded: !1,
                            ref: o.a.createRef(),
                            rowRef: o.a.createRef(),
                            height: 0,
                            rowClassName: "closed",
                        }),
                        u(g(e), "finishTransition", function () {
                            const t = e.state.isExpanded;
                            e.setState({ rowClassName: t ? "expanded" : "closed" });
                        }),
                        u(g(e), "toggle", function (t) {
                            e.setState(function () {
                                return { isExpanded: t };
                            });
                        }),
                        u(g(e), "expand", function () {
                            e.setState(function (e) {
                                return { isExpanded: !e.isExpanded };
                            });
                        }),
                        u(g(e), "keyPress", function (t) {
                            const n = t.keyCode ? t.keyCode : t.which;
                            switch (m.keyCodes[n]) {
                                case "space":
                                case "return":
                                    t.preventDefault(), t.stopPropagation(), e.expand();
                            }
                        }),
                        u(g(e), "setHeight", function () {
                            const t = e.state,
                                n = t.ref,
                                r = t.isExpanded,
                                o = n.current.scrollHeight;
                            e.setState({ height: r ? o : 0 });
                        }),
                        e
                    );
                }
                return (
                    c(n, [
                        {
                            key: "getSnapshotBeforeUpdate",
                            value: function (e, t) {
                                let n = t.isExpanded,
                                    r = this.state.isExpanded,
                                    o = this.props.config,
                                    a = (o = void 0 === o ? {} : o).animate,
                                    i = void 0 === a || a;
                                return r !== n
                                    ? {
                                        rowClassName: r
                                            ? i
                                                ? "expanding"
                                                : "expanded"
                                            : i
                                                ? "closing"
                                                : "closed",
                                    }
                                    : null;
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function (e, t, n) {
                                let r = this.props.config,
                                    o = (r = void 0 === r ? {} : r).animate,
                                    a = void 0 === o || o;
                                null !== n &&
                                    this.setState(
                                        (function (e) {
                                            for (let t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2
                                                    ? p(Object(n), !0).forEach(function (t) {
                                                        u(e, t, n[t]);
                                                    })
                                                    : Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                            e,
                                                            Object.getOwnPropertyDescriptors(n),
                                                        )
                                                        : p(Object(n)).forEach(function (t) {
                                                            Object.defineProperty(
                                                                e,
                                                                t,
                                                                Object.getOwnPropertyDescriptor(n, t),
                                                            );
                                                        });
                                            }
                                            return e;
                                        })({}, n),
                                        a ? this.setHeight : void 0,
                                    );
                            },
                        },
                        {
                            key: "componentDidMount",
                            value: function () {
                                const e = this,
                                    t = this.state.rowRef;
                                if (this.props.getRowOptions) {
                                    const n = {
                                        expand: function () {
                                            e.toggle(!0);
                                        },
                                        close: function () {
                                            e.toggle(!1);
                                        },
                                        scrollIntoView: function (e) {
                                            e
                                                ? t.current.scrollIntoView(e)
                                                : t.current.scrollIntoView();
                                        },
                                    };
                                    this.props.getRowOptions(n);
                                }
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                let e = this.props,
                                    t = e.data,
                                    n = t.title,
                                    r = t.content,
                                    a = e.config,
                                    i = (a = void 0 === a ? {} : a).animate,
                                    s = void 0 === i || i,
                                    l = a.arrowIcon,
                                    c = a.tabFocus,
                                    u = void 0 !== c && c,
                                    p = this.state,
                                    d = p.isExpanded,
                                    y = p.ref,
                                    g = p.height,
                                    _ = p.rowClassName,
                                    h = p.rowRef,
                                    m = {
                                        onClick: this.expand,
                                        role: "button",
                                        "aria-expanded": d,
                                        "aria-controls": "react-faq-rowcontent-".concat(
                                            this.props.rowid,
                                        ),
                                        onKeyPress: this.keyPress,
                                        onKeyDown: this.keyPress,
                                    };
                                u && (m.tabIndex = 0);
                                const v = {
                                    role: "region",
                                    id: "react-faq-rowcontent-".concat(this.props.rowid),
                                    "aria-expanded": d,
                                    "aria-hidden": !d,
                                    onTransitionEnd: this.finishTransition,
                                };
                                s && (v.style = { height: g });
                                const T = [
                                        "row-title",
                                        _,
                                        w["row-title"],
                                        w[_],
                                        u ? "" : w["no-tabfocus"],
                                    ]
                                        .filter(Boolean)
                                        .join(" "),
                                    b =
                                        l ||
                                        o.a.createElement("div", {
                                            dangerouslySetInnerHTML: {
                                                __html:
                                                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>',
                                            },
                                            className: "arrow-image ".concat(w["arrow-image"]),
                                            alt: "Expand arrow",
                                        }),
                                    E = [
                                        w["row-content"],
                                        "row-content",
                                        s ? w.animate : w.static,
                                    ].join(" "),
                                    A = [w["row-content-text"], "row-content-text"].join(" "),
                                    S =
                                        r && "string" == typeof r
                                            ? o.a.createElement("div", {
                                                className: A,
                                                dangerouslySetInnerHTML: { __html: r },
                                            })
                                            : o.a.createElement("div", { className: A }, r);
                                return o.a.createElement(
                                    "section",
                                    {
                                        className: "faq-row ".concat(w["faq-row"]),
                                        role: "listitem",
                                        ref: h,
                                    },
                                    o.a.createElement(
                                        "div",
                                        f({ className: T }, m),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className: "row-title-text ".concat(
                                                    w["row-title-text"],
                                                ),
                                            },
                                            n,
                                        ),
                                        o.a.createElement(
                                            "span",
                                            {
                                                className: "icon-wrapper ".concat(
                                                    w["icon-wrapper"],
                                                ),
                                                "aria-hidden": "true",
                                            },
                                            b,
                                        ),
                                    ),
                                    o.a.createElement("div", f({ className: E }, v, { ref: y }), S),
                                );
                            },
                        },
                    ]),
                    n
                );
            })();
            u(v, "propTypes", {
                config: i.a.object,
                data: i.a.object,
                rowid: i.a.number,
                getRowOptions: i.a.func,
            });
            const T = (function (e) {
                d(n, r.PureComponent);
                const t = h(n);
                function n() {
                    let e;
                    s(this, n);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                        o[a] = arguments[a];
                    return (
                        u(g((e = t.call.apply(t, [this].concat(o)))), "state", { rowsOption: [] }),
                        e
                    );
                }
                return (
                    c(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.getRowOptions &&
                                    this.props.getRowOptions(this.state.rowsOption);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                let e = this,
                                    t = this.props.data || {},
                                    n = t.title,
                                    r = t.rows,
                                    a = void 0 === r ? [] : r,
                                    i = this.props,
                                    s = i.styles,
                                    l = void 0 === s ? {} : s,
                                    c = i.config,
                                    u =
                                        ((c = void 0 === c ? {} : c).animate,
                                        {
                                            "--faq-bg-color": l.bgColor,
                                            "--title-text-color": l.titleTextColor,
                                            "--title-text-size": l.titleTextSize,
                                            "--row-title-color": l.rowTitleColor,
                                            "--row-title-text-size": l.rowTitleTextSize,
                                            "--row-content-color": l.rowContentColor,
                                            "--row-content-text-size": l.rowContentTextSize,
                                            "--row-content-padding-top": l.rowContentPaddingTop,
                                            "--row-content-padding-bottom":
                                                l.rowContentPaddingBottom,
                                            "--row-content-padding-right": l.rowContentPaddingRight,
                                            "--row-content-padding-left": l.rowContentPaddingLeft,
                                            "--arrow-color": l.arrowColor,
                                            "--transition-duration": l.transitionDuration,
                                            "--timing-function": l.timingFunc,
                                        }),
                                    f = "faq-row-wrapper ".concat(w["faq-row-wrapper"]),
                                    p = "faq-title ".concat(w["faq-row"]),
                                    d = "faq-body ".concat(w["row-body"]);
                                return o.a.createElement(
                                    "div",
                                    { className: f, style: u },
                                    n
                                        ? o.a.createElement(
                                            "section",
                                            { className: p },
                                            o.a.createElement("h2", null, n),
                                        )
                                        : null,
                                    a.length
                                        ? o.a.createElement(
                                            "section",
                                            { className: d, role: "list" },
                                            a.map(function (t, n) {
                                                return o.a.createElement(v, {
                                                    data: t,
                                                    key: n,
                                                    rowid: n + 1,
                                                    config: e.props.config,
                                                    getRowOptions: function (t) {
                                                        return (e.state.rowsOption[n] = t);
                                                    },
                                                });
                                            }),
                                        )
                                        : null,
                                );
                            },
                        },
                    ]),
                    n
                );
            })();
            u(T, "propTypes", {
                data: i.a.object,
                styles: i.a.object,
                config: i.a.object,
                getRowOptions: i.a.func,
            }),
            (t.a = T);
        },
        v1p5: function (e, t, n) {
            (function (e) {
                (t.__esModule = !0),
                (t.warn = t.requestAnimationFrame = t.reducePropsToState = t.mapStateOnServer = t.handleClientStateChange = t.convertReactPropstoHtmlAttributes = void 0);
                const r =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e;
                            }
                            : function (e) {
                                return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                    ? "symbol"
                                    : typeof e;
                            },
                    o =
                        Object.assign ||
                        function (e) {
                            for (let t = 1; t < arguments.length; t++) {
                                const n = arguments[t];
                                for (const r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        },
                    a = l(n("q1tI")),
                    i = l(n("6qGY")),
                    s = n("hFT/");
                function l(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var c,
                    u = function (e) {
                        const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return !1 === t
                            ? String(e)
                            : String(e)
                                .replace(/&/g, "&amp;")
                                .replace(/</g, "&lt;")
                                .replace(/>/g, "&gt;")
                                .replace(/"/g, "&quot;")
                                .replace(/'/g, "&#x27;");
                    },
                    f = function (e) {
                        const t = _(e, s.TAG_NAMES.TITLE),
                            n = _(e, s.HELMET_PROPS.TITLE_TEMPLATE);
                        if (n && t)
                            return n.replace(/%s/g, function () {
                                return t;
                            });
                        const r = _(e, s.HELMET_PROPS.DEFAULT_TITLE);
                        return t || r || void 0;
                    },
                    p = function (e) {
                        return _(e, s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
                    },
                    d = function (e, t) {
                        return t
                            .filter(function (t) {
                                return void 0 !== t[e];
                            })
                            .map(function (t) {
                                return t[e];
                            })
                            .reduce(function (e, t) {
                                return o({}, e, t);
                            }, {});
                    },
                    y = function (e, t) {
                        return t
                            .filter(function (e) {
                                return void 0 !== e[s.TAG_NAMES.BASE];
                            })
                            .map(function (e) {
                                return e[s.TAG_NAMES.BASE];
                            })
                            .reverse()
                            .reduce(function (t, n) {
                                if (!t.length)
                                    for (let r = Object.keys(n), o = 0; o < r.length; o++) {
                                        const a = r[o].toLowerCase();
                                        if (-1 !== e.indexOf(a) && n[a]) return t.concat(n);
                                    }
                                return t;
                            }, []);
                    },
                    g = function (e, t, n) {
                        const o = {};
                        return n
                            .filter(function (t) {
                                return (
                                    !!Array.isArray(t[e]) ||
                                    (void 0 !== t[e] &&
                                        T(
                                            "Helmet: " +
                                                e +
                                                ' should be of type "Array". Instead found type "' +
                                                r(t[e]) +
                                                '"',
                                        ),
                                    !1)
                                );
                            })
                            .map(function (t) {
                                return t[e];
                            })
                            .reverse()
                            .reduce(function (e, n) {
                                const r = {};
                                n.filter(function (e) {
                                    for (
                                        var n = void 0, a = Object.keys(e), i = 0;
                                        i < a.length;
                                        i++
                                    ) {
                                        const l = a[i],
                                            c = l.toLowerCase();
                                        -1 === t.indexOf(c) ||
                                            (n === s.TAG_PROPERTIES.REL &&
                                                "canonical" === e[n].toLowerCase()) ||
                                            (c === s.TAG_PROPERTIES.REL &&
                                                "stylesheet" === e[c].toLowerCase()) ||
                                            (n = c),
                                        -1 === t.indexOf(l) ||
                                                (l !== s.TAG_PROPERTIES.INNER_HTML &&
                                                    l !== s.TAG_PROPERTIES.CSS_TEXT &&
                                                    l !== s.TAG_PROPERTIES.ITEM_PROP) ||
                                                (n = l);
                                    }
                                    if (!n || !e[n]) return !1;
                                    const u = e[n].toLowerCase();
                                    return (
                                        o[n] || (o[n] = {}),
                                        r[n] || (r[n] = {}),
                                        !o[n][u] && ((r[n][u] = !0), !0)
                                    );
                                })
                                    .reverse()
                                    .forEach(function (t) {
                                        return e.push(t);
                                    });
                                for (let a = Object.keys(r), l = 0; l < a.length; l++) {
                                    const c = a[l],
                                        u = (0, i.default)({}, o[c], r[c]);
                                    o[c] = u;
                                }
                                return e;
                            }, [])
                            .reverse();
                    },
                    _ = function (e, t) {
                        for (let n = e.length - 1; n >= 0; n--) {
                            const r = e[n];
                            if (r.hasOwnProperty(t)) return r[t];
                        }
                        return null;
                    },
                    h =
                        ((c = Date.now()),
                        function (e) {
                            const t = Date.now();
                            t - c > 16
                                ? ((c = t), e(t))
                                : setTimeout(function () {
                                    h(e);
                                }, 0);
                        }),
                    m = function (e) {
                        return clearTimeout(e);
                    },
                    w =
                        "undefined" != typeof window
                            ? window.requestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              h
                            : e.requestAnimationFrame || h,
                    v =
                        "undefined" != typeof window
                            ? window.cancelAnimationFrame ||
                              window.webkitCancelAnimationFrame ||
                              window.mozCancelAnimationFrame ||
                              m
                            : e.cancelAnimationFrame || m,
                    T = function (e) {
                        return console && "function" == typeof console.warn && console.warn(e);
                    },
                    b = null,
                    E = function (e, t) {
                        const n = e.baseTag,
                            r = e.bodyAttributes,
                            o = e.htmlAttributes,
                            a = e.linkTags,
                            i = e.metaTags,
                            l = e.noscriptTags,
                            c = e.onChangeClientState,
                            u = e.scriptTags,
                            f = e.styleTags,
                            p = e.title,
                            d = e.titleAttributes;
                        P(s.TAG_NAMES.BODY, r), P(s.TAG_NAMES.HTML, o), S(p, d);
                        const y = {
                                baseTag: x(s.TAG_NAMES.BASE, n),
                                linkTags: x(s.TAG_NAMES.LINK, a),
                                metaTags: x(s.TAG_NAMES.META, i),
                                noscriptTags: x(s.TAG_NAMES.NOSCRIPT, l),
                                scriptTags: x(s.TAG_NAMES.SCRIPT, u),
                                styleTags: x(s.TAG_NAMES.STYLE, f),
                            },
                            g = {},
                            _ = {};
                        Object.keys(y).forEach(function (e) {
                            const t = y[e],
                                n = t.newTags,
                                r = t.oldTags;
                            n.length && (g[e] = n), r.length && (_[e] = y[e].oldTags);
                        }),
                        t && t(),
                        c(e, g, _);
                    },
                    A = function (e) {
                        return Array.isArray(e) ? e.join("") : e;
                    },
                    S = function (e, t) {
                        void 0 !== e && document.title !== e && (document.title = A(e)),
                        P(s.TAG_NAMES.TITLE, t);
                    },
                    P = function (e, t) {
                        const n = document.getElementsByTagName(e)[0];
                        if (n) {
                            for (
                                var r = n.getAttribute(s.HELMET_ATTRIBUTE),
                                    o = r ? r.split(",") : [],
                                    a = [].concat(o),
                                    i = Object.keys(t),
                                    l = 0;
                                l < i.length;
                                l++
                            ) {
                                const c = i[l],
                                    u = t[c] || "";
                                n.getAttribute(c) !== u && n.setAttribute(c, u),
                                -1 === o.indexOf(c) && o.push(c);
                                const f = a.indexOf(c);
                                -1 !== f && a.splice(f, 1);
                            }
                            for (let p = a.length - 1; p >= 0; p--) n.removeAttribute(a[p]);
                            o.length === a.length
                                ? n.removeAttribute(s.HELMET_ATTRIBUTE)
                                : n.getAttribute(s.HELMET_ATTRIBUTE) !== i.join(",") &&
                                  n.setAttribute(s.HELMET_ATTRIBUTE, i.join(","));
                        }
                    },
                    x = function (e, t) {
                        let n = document.head || document.querySelector(s.TAG_NAMES.HEAD),
                            r = n.querySelectorAll(e + "[" + s.HELMET_ATTRIBUTE + "]"),
                            o = Array.prototype.slice.call(r),
                            a = [],
                            i = void 0;
                        return (
                            t &&
                                t.length &&
                                t.forEach(function (t) {
                                    const n = document.createElement(e);
                                    for (const r in t)
                                        if (t.hasOwnProperty(r))
                                            if (r === s.TAG_PROPERTIES.INNER_HTML)
                                                n.innerHTML = t.innerHTML;
                                            else if (r === s.TAG_PROPERTIES.CSS_TEXT)
                                                n.styleSheet
                                                    ? (n.styleSheet.cssText = t.cssText)
                                                    : n.appendChild(
                                                        document.createTextNode(t.cssText),
                                                    );
                                            else {
                                                const l = void 0 === t[r] ? "" : t[r];
                                                n.setAttribute(r, l);
                                            }
                                    n.setAttribute(s.HELMET_ATTRIBUTE, "true"),
                                    o.some(function (e, t) {
                                        return (i = t), n.isEqualNode(e);
                                    })
                                        ? o.splice(i, 1)
                                        : a.push(n);
                                }),
                            o.forEach(function (e) {
                                return e.parentNode.removeChild(e);
                            }),
                            a.forEach(function (e) {
                                return n.appendChild(e);
                            }),
                            { oldTags: o, newTags: a }
                        );
                    },
                    O = function (e) {
                        return Object.keys(e).reduce(function (t, n) {
                            const r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
                            return t ? t + " " + r : r;
                        }, "");
                    },
                    C = function (e) {
                        const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object.keys(e).reduce(function (t, n) {
                            return (t[s.REACT_TAG_MAP[n] || n] = e[n]), t;
                        }, t);
                    },
                    R = function (e, t, n) {
                        switch (e) {
                            case s.TAG_NAMES.TITLE:
                                return {
                                    toComponent: function () {
                                        return (
                                            (e = t.title),
                                            (n = t.titleAttributes),
                                            ((r = { key: e })[s.HELMET_ATTRIBUTE] = !0),
                                            (o = C(n, r)),
                                            [a.default.createElement(s.TAG_NAMES.TITLE, o, e)]
                                        );
                                        let e, n, r, o;
                                    },
                                    toString: function () {
                                        return (function (e, t, n, r) {
                                            const o = O(n),
                                                a = A(t);
                                            return o
                                                ? "<" +
                                                      e +
                                                      " " +
                                                      s.HELMET_ATTRIBUTE +
                                                      '="true" ' +
                                                      o +
                                                      ">" +
                                                      u(a, r) +
                                                      "</" +
                                                      e +
                                                      ">"
                                                : "<" +
                                                      e +
                                                      " " +
                                                      s.HELMET_ATTRIBUTE +
                                                      '="true">' +
                                                      u(a, r) +
                                                      "</" +
                                                      e +
                                                      ">";
                                        })(e, t.title, t.titleAttributes, n);
                                    },
                                };
                            case s.ATTRIBUTE_NAMES.BODY:
                            case s.ATTRIBUTE_NAMES.HTML:
                                return {
                                    toComponent: function () {
                                        return C(t);
                                    },
                                    toString: function () {
                                        return O(t);
                                    },
                                };
                            default:
                                return {
                                    toComponent: function () {
                                        return (function (e, t) {
                                            return t.map(function (t, n) {
                                                let r,
                                                    o =
                                                        (((r = { key: n })[
                                                            s.HELMET_ATTRIBUTE
                                                        ] = !0),
                                                        r);
                                                return (
                                                    Object.keys(t).forEach(function (e) {
                                                        const n = s.REACT_TAG_MAP[e] || e;
                                                        if (
                                                            n === s.TAG_PROPERTIES.INNER_HTML ||
                                                            n === s.TAG_PROPERTIES.CSS_TEXT
                                                        ) {
                                                            const r = t.innerHTML || t.cssText;
                                                            o.dangerouslySetInnerHTML = {
                                                                __html: r,
                                                            };
                                                        } else o[n] = t[e];
                                                    }),
                                                    a.default.createElement(e, o)
                                                );
                                            });
                                        })(e, t);
                                    },
                                    toString: function () {
                                        return (function (e, t, n) {
                                            return t.reduce(function (t, r) {
                                                const o = Object.keys(r)
                                                        .filter(function (e) {
                                                            return !(
                                                                e === s.TAG_PROPERTIES.INNER_HTML ||
                                                                e === s.TAG_PROPERTIES.CSS_TEXT
                                                            );
                                                        })
                                                        .reduce(function (e, t) {
                                                            const o =
                                                                void 0 === r[t]
                                                                    ? t
                                                                    : t + '="' + u(r[t], n) + '"';
                                                            return e ? e + " " + o : o;
                                                        }, ""),
                                                    a = r.innerHTML || r.cssText || "",
                                                    i = -1 === s.SELF_CLOSING_TAGS.indexOf(e);
                                                return (
                                                    t +
                                                    "<" +
                                                    e +
                                                    " " +
                                                    s.HELMET_ATTRIBUTE +
                                                    '="true" ' +
                                                    o +
                                                    (i ? "/>" : ">" + a + "</" + e + ">")
                                                );
                                            }, "");
                                        })(e, t, n);
                                    },
                                };
                        }
                    };
                (t.convertReactPropstoHtmlAttributes = function (e) {
                    const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce(function (t, n) {
                        return (t[s.HTML_TAG_MAP[n] || n] = e[n]), t;
                    }, t);
                }),
                (t.handleClientStateChange = function (e) {
                    b && v(b),
                    e.defer
                        ? (b = w(function () {
                            E(e, function () {
                                b = null;
                            });
                        }))
                        : (E(e), (b = null));
                }),
                (t.mapStateOnServer = function (e) {
                    const t = e.baseTag,
                        n = e.bodyAttributes,
                        r = e.encode,
                        o = e.htmlAttributes,
                        a = e.linkTags,
                        i = e.metaTags,
                        l = e.noscriptTags,
                        c = e.scriptTags,
                        u = e.styleTags,
                        f = e.title,
                        p = void 0 === f ? "" : f,
                        d = e.titleAttributes;
                    return {
                        base: R(s.TAG_NAMES.BASE, t, r),
                        bodyAttributes: R(s.ATTRIBUTE_NAMES.BODY, n, r),
                        htmlAttributes: R(s.ATTRIBUTE_NAMES.HTML, o, r),
                        link: R(s.TAG_NAMES.LINK, a, r),
                        meta: R(s.TAG_NAMES.META, i, r),
                        noscript: R(s.TAG_NAMES.NOSCRIPT, l, r),
                        script: R(s.TAG_NAMES.SCRIPT, c, r),
                        style: R(s.TAG_NAMES.STYLE, u, r),
                        title: R(s.TAG_NAMES.TITLE, { title: p, titleAttributes: d }, r),
                    };
                }),
                (t.reducePropsToState = function (e) {
                    return {
                        baseTag: y([s.TAG_PROPERTIES.HREF], e),
                        bodyAttributes: d(s.ATTRIBUTE_NAMES.BODY, e),
                        defer: _(e, s.HELMET_PROPS.DEFER),
                        encode: _(e, s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
                        htmlAttributes: d(s.ATTRIBUTE_NAMES.HTML, e),
                        linkTags: g(
                            s.TAG_NAMES.LINK,
                            [s.TAG_PROPERTIES.REL, s.TAG_PROPERTIES.HREF],
                            e,
                        ),
                        metaTags: g(
                            s.TAG_NAMES.META,
                            [
                                s.TAG_PROPERTIES.NAME,
                                s.TAG_PROPERTIES.CHARSET,
                                s.TAG_PROPERTIES.HTTPEQUIV,
                                s.TAG_PROPERTIES.PROPERTY,
                                s.TAG_PROPERTIES.ITEM_PROP,
                            ],
                            e,
                        ),
                        noscriptTags: g(s.TAG_NAMES.NOSCRIPT, [s.TAG_PROPERTIES.INNER_HTML], e),
                        onChangeClientState: p(e),
                        scriptTags: g(
                            s.TAG_NAMES.SCRIPT,
                            [s.TAG_PROPERTIES.SRC, s.TAG_PROPERTIES.INNER_HTML],
                            e,
                        ),
                        styleTags: g(s.TAG_NAMES.STYLE, [s.TAG_PROPERTIES.CSS_TEXT], e),
                        title: f(e),
                        titleAttributes: d(s.ATTRIBUTE_NAMES.TITLE, e),
                    };
                }),
                (t.requestAnimationFrame = w),
                (t.warn = T);
            }.call(this, n("yLpj")));
        },
        vrFN: function (e, t, n) {
            
            const r = n("51K9"),
                o = n("q1tI"),
                a = n.n(o),
                i = n("TJpk"),
                s = n.n(i);
            function l(e) {
                const t = e.description,
                    n = e.lang,
                    o = e.meta,
                    i = e.title,
                    l = r.data.site,
                    c = t || l.siteMetadata.description;
                return a.a.createElement(s.a, {
                    htmlAttributes: { lang: n },
                    title: i,
                    titleTemplate: "" + l.siteMetadata.title,
                    meta: [
                        { name: "description", content: c },
                        { property: "og:title", content: i },
                        { property: "og:description", content: c },
                        { property: "og:type", content: "website" },
                        { name: "twitter:card", content: "summary" },
                        { name: "twitter:creator", content: l.siteMetadata.author },
                        { name: "twitter:title", content: i },
                        { name: "twitter:description", content: c },
                    ].concat(o),
                });
            }
            (l.defaultProps = { lang: "en", meta: [], description: "" }), (t.a = l);
        },
        y1X9: function (e, t) {
            Prism.languages.clike = {
                comment: [
                    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
                    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                ],
                string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
                "class-name": {
                    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: !0,
                    inside: { punctuation: /[.\\]/ },
                },
                keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                boolean: /\b(?:true|false)\b/,
                function: /\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/,
            };
        },
        yLpj: function (e, t) {
            let n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (r) {
                "object" == typeof window && (n = window);
            }
            e.exports = n;
        },
    },
]);
//# sourceMappingURL=commons-b97e9a8e9fc46ec31d7a.js.map
