!(function t(e, n, i) {
  function o(a, s) {
    if (!n[a]) {
      if (!e[a]) {
        var l = "function" == typeof require && require;
        if (!s && l) return l(a, !0);
        if (r) return r(a, !0);
        throw new Error("Cannot find module '" + a + "'");
      }
      var c = (n[a] = { exports: {} });
      e[a][0].call(
        c.exports,
        function (t) {
          var n = e[a][1][t];
          return o(n ? n : t);
        },
        c,
        c.exports,
        t,
        e,
        n,
        i
      );
    }
    return n[a].exports;
  }
  for (
    var r = "function" == typeof require && require, a = 0;
    a < i.length;
    a++
  )
    o(i[a]);
  return o;
})(
  {
    1: [
      function (t, e) {
        (window.L.Icon.Default.imagePath =
          "//api.tiles.mapbox.com/mapbox.js/v" +
          t("./package.json").version +
          "/images"),
          (L.mapbox = e.exports =
            {
              VERSION: t("./package.json").version,
              geocoder: t("./src/geocoder"),
              marker: t("./src/marker"),
              tileLayer: t("./src/tile_layer"),
              infoControl: t("./src/info_control"),
              shareControl: t("./src/share_control"),
              legendControl: t("./src/legend_control"),
              geocoderControl: t("./src/geocoder_control"),
              gridControl: t("./src/grid_control"),
              gridLayer: t("./src/grid_layer"),
              markerLayer: t("./src/marker_layer"),
              map: t("./src/map"),
              config: t("./src/config"),
              sanitize: t("sanitize-caja"),
              template: t("mustache").to_html,
            });
      },
      {
        "./package.json": 7,
        "./src/config": 8,
        "./src/geocoder": 9,
        "./src/geocoder_control": 10,
        "./src/grid_control": 12,
        "./src/grid_layer": 13,
        "./src/info_control": 14,
        "./src/legend_control": 15,
        "./src/map": 17,
        "./src/marker": 18,
        "./src/marker_layer": 19,
        "./src/share_control": 21,
        "./src/tile_layer": 22,
        mustache: 4,
        "sanitize-caja": 5,
      },
    ],
    2: [
      function (t, e) {
        function n(t, e, n) {
          function i(t) {
            return (t >= 200 && 300 > t) || 304 === t;
          }
          function o() {
            void 0 === s.status || i(s.status)
              ? e.call(s, null, s)
              : e.call(s, s, null);
          }
          var r = !1;
          if ("undefined" == typeof window.XMLHttpRequest)
            return e(Error("Browser not supported"));
          if ("undefined" == typeof n) {
            var a = t.match(/^\s*https?:\/\/[^\/]*/);
            n =
              a &&
              a[0] !==
                location.protocol +
                  "//" +
                  location.domain +
                  (location.port ? ":" + location.port : "");
          }
          var s;
          if (
            !n ||
            ("object" != typeof window.XDomainRequest &&
              "function" != typeof window.XDomainRequest)
          )
            s = new window.XMLHttpRequest();
          else {
            s = new window.XDomainRequest();
            var l = e;
            e = function () {
              if (r) l.apply(this, arguments);
              else {
                var t = this,
                  e = arguments;
                setTimeout(function () {
                  l.apply(t, e);
                }, 0);
              }
            };
          }
          return (
            "onload" in s
              ? (s.onload = o)
              : (s.onreadystatechange = function () {
                  4 === s.readyState && o();
                }),
            (s.onerror = function (t) {
              e.call(this, t || !0, null), (e = function () {});
            }),
            (s.onprogress = function () {}),
            (s.ontimeout = function (t) {
              e.call(this, t, null), (e = function () {});
            }),
            (s.onabort = function (t) {
              e.call(this, t, null), (e = function () {});
            }),
            s.open("GET", t, !0),
            s.send(null),
            (r = !0),
            s
          );
        }
        "undefined" != typeof e && (e.exports = n);
      },
      {},
    ],
    3: [
      function (t, e, n) {
        !(function (t) {
          function e(t) {
            if ("bug-string-char-index" == t) return "a" != "a"[0];
            var e,
              n = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',
              i = "json" == t;
            if (i || "json-stringify" == t || "json-parse" == t) {
              if ("json-stringify" == t || i) {
                var o = l.stringify,
                  s = "function" == typeof o && c;
                if (s) {
                  (e = function () {
                    return 1;
                  }).toJSON = e;
                  try {
                    s =
                      "0" === o(0) &&
                      "0" === o(new Number()) &&
                      '""' == o(new String()) &&
                      o(a) === r &&
                      o(r) === r &&
                      o() === r &&
                      "1" === o(e) &&
                      "[1]" == o([e]) &&
                      "[null]" == o([r]) &&
                      "null" == o(null) &&
                      "[null,null,null]" == o([r, a, null]) &&
                      o({ a: [e, !0, !1, null, "\x00\b\n\f\r	"] }) == n &&
                      "1" === o(null, e) &&
                      "[\n 1,\n 2\n]" == o([1, 2], null, 1) &&
                      '"-271821-04-20T00:00:00.000Z"' == o(new Date(-864e13)) &&
                      '"+275760-09-13T00:00:00.000Z"' == o(new Date(864e13)) &&
                      '"-000001-01-01T00:00:00.000Z"' ==
                        o(new Date(-621987552e5)) &&
                      '"1969-12-31T23:59:59.999Z"' == o(new Date(-1));
                  } catch (u) {
                    s = !1;
                  }
                }
                if (!i) return s;
              }
              if ("json-parse" == t || i) {
                var h = l.parse;
                if ("function" == typeof h)
                  try {
                    if (0 === h("0") && !h(!1)) {
                      e = h(n);
                      var p = 5 == e.a.length && 1 === e.a[0];
                      if (p) {
                        try {
                          p = !h('"	"');
                        } catch (u) {}
                        if (p)
                          try {
                            p = 1 !== h("01");
                          } catch (u) {}
                      }
                    }
                  } catch (u) {
                    p = !1;
                  }
                if (!i) return p;
              }
              return s && p;
            }
          }
          var i,
            o,
            r,
            a = {}.toString,
            s = "function" == typeof define && define.amd,
            l = "object" == typeof n && n;
          l || s
            ? "object" == typeof JSON && JSON
              ? l
                ? ((l.stringify = JSON.stringify), (l.parse = JSON.parse))
                : (l = JSON)
              : s && (l = t.JSON = {})
            : (l = t.JSON || (t.JSON = {}));
          var c = new Date(-0xc782b5b800cec);
          try {
            c =
              -109252 == c.getUTCFullYear() &&
              0 === c.getUTCMonth() &&
              1 === c.getUTCDate() &&
              10 == c.getUTCHours() &&
              37 == c.getUTCMinutes() &&
              6 == c.getUTCSeconds() &&
              708 == c.getUTCMilliseconds();
          } catch (u) {}
          if (!e("json")) {
            var h = "[object Function]",
              p = "[object Date]",
              f = "[object Number]",
              m = "[object String]",
              d = "[object Array]",
              g = "[object Boolean]",
              _ = e("bug-string-char-index");
            if (!c)
              var L = Math.floor,
                v = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                b = function (t, e) {
                  return (
                    v[e] +
                    365 * (t - 1970) +
                    L((t - 1969 + (e = +(e > 1))) / 4) -
                    L((t - 1901 + e) / 100) +
                    L((t - 1601 + e) / 400)
                  );
                };
            (i = {}.hasOwnProperty) ||
              (i = function (t) {
                var e,
                  n = {};
                return (
                  ((n.__proto__ = null), (n.__proto__ = { toString: 1 }), n)
                    .toString != a
                    ? (i = function (t) {
                        var e = this.__proto__,
                          n = t in ((this.__proto__ = null), this);
                        return (this.__proto__ = e), n;
                      })
                    : ((e = n.constructor),
                      (i = function (t) {
                        var n = (this.constructor || e).prototype;
                        return t in this && !(t in n && this[t] === n[t]);
                      })),
                  (n = null),
                  i.call(this, t)
                );
              });
            var y = { boolean: 1, number: 1, string: 1, undefined: 1 },
              T = function (t, e) {
                var n = typeof t[e];
                return "object" == n ? !!t[e] : !y[n];
              };
            if (
              ((o = function (t, e) {
                var n,
                  o,
                  r,
                  s,
                  l = 0;
                ((n = function () {
                  this.valueOf = 0;
                }).prototype.valueOf = 0),
                  (o = new n());
                for (r in o) i.call(o, r) && l++;
                return (
                  (n = o = null),
                  l
                    ? (s =
                        2 == l
                          ? function (t, e) {
                              var n,
                                o = {},
                                r = a.call(t) == h;
                              for (n in t)
                                (r && "prototype" == n) ||
                                  i.call(o, n) ||
                                  !(o[n] = 1) ||
                                  !i.call(t, n) ||
                                  e(n);
                            }
                          : function (t, e) {
                              var n,
                                o,
                                r = a.call(t) == h;
                              for (n in t)
                                (r && "prototype" == n) ||
                                  !i.call(t, n) ||
                                  (o = "constructor" === n) ||
                                  e(n);
                              (o || i.call(t, (n = "constructor"))) && e(n);
                            })
                    : ((o = [
                        "valueOf",
                        "toString",
                        "toLocaleString",
                        "propertyIsEnumerable",
                        "isPrototypeOf",
                        "hasOwnProperty",
                        "constructor",
                      ]),
                      (s = function (t, e) {
                        var n,
                          r,
                          s = a.call(t) == h,
                          l =
                            !s &&
                            "function" != typeof t.constructor &&
                            T(t, "hasOwnProperty")
                              ? t.hasOwnProperty
                              : i;
                        for (n in t)
                          (s && "prototype" == n) || !l.call(t, n) || e(n);
                        for (r = o.length; (n = o[--r]); l.call(t, n) && e(n));
                      })),
                  s(t, e)
                );
              }),
              !e("json-stringify"))
            ) {
              var E = {
                  92: "\\\\",
                  34: '\\"',
                  8: "\\b",
                  12: "\\f",
                  10: "\\n",
                  13: "\\r",
                  9: "\\t",
                },
                w = "000000",
                C = function (t, e) {
                  return (w + (e || 0)).slice(-t);
                },
                M = "\\u00",
                x = function (t) {
                  var e,
                    n = '"',
                    i = 0,
                    o = t.length,
                    r = o > 10 && _;
                  for (r && (e = t.split("")); o > i; i++) {
                    var a = t.charCodeAt(i);
                    switch (a) {
                      case 8:
                      case 9:
                      case 10:
                      case 12:
                      case 13:
                      case 34:
                      case 92:
                        n += E[a];
                        break;
                      default:
                        if (32 > a) {
                          n += M + C(2, a.toString(16));
                          break;
                        }
                        n += r ? e[i] : _ ? t.charAt(i) : t[i];
                    }
                  }
                  return n + '"';
                },
                S = function (t, e, n, s, l, c, u) {
                  var h,
                    _,
                    v,
                    y,
                    T,
                    E,
                    w,
                    M,
                    k,
                    D,
                    H,
                    A,
                    R,
                    O,
                    U,
                    P,
                    j = e[t];
                  try {
                    j = e[t];
                  } catch (N) {}
                  if ("object" == typeof j && j)
                    if (((h = a.call(j)), h != p || i.call(j, "toJSON")))
                      "function" == typeof j.toJSON &&
                        ((h != f && h != m && h != d) || i.call(j, "toJSON")) &&
                        (j = j.toJSON(t));
                    else if (j > -1 / 0 && 1 / 0 > j) {
                      if (b) {
                        for (
                          y = L(j / 864e5), _ = L(y / 365.2425) + 1970 - 1;
                          b(_ + 1, 0) <= y;
                          _++
                        );
                        for (
                          v = L((y - b(_, 0)) / 30.42);
                          b(_, v + 1) <= y;
                          v++
                        );
                        (y = 1 + y - b(_, v)),
                          (T = ((j % 864e5) + 864e5) % 864e5),
                          (E = L(T / 36e5) % 24),
                          (w = L(T / 6e4) % 60),
                          (M = L(T / 1e3) % 60),
                          (k = T % 1e3);
                      } else
                        (_ = j.getUTCFullYear()),
                          (v = j.getUTCMonth()),
                          (y = j.getUTCDate()),
                          (E = j.getUTCHours()),
                          (w = j.getUTCMinutes()),
                          (M = j.getUTCSeconds()),
                          (k = j.getUTCMilliseconds());
                      j =
                        (0 >= _ || _ >= 1e4
                          ? (0 > _ ? "-" : "+") + C(6, 0 > _ ? -_ : _)
                          : C(4, _)) +
                        "-" +
                        C(2, v + 1) +
                        "-" +
                        C(2, y) +
                        "T" +
                        C(2, E) +
                        ":" +
                        C(2, w) +
                        ":" +
                        C(2, M) +
                        "." +
                        C(3, k) +
                        "Z";
                    } else j = null;
                  if ((n && (j = n.call(e, t, j)), null === j)) return "null";
                  if (((h = a.call(j)), h == g)) return "" + j;
                  if (h == f) return j > -1 / 0 && 1 / 0 > j ? "" + j : "null";
                  if (h == m) return x("" + j);
                  if ("object" == typeof j) {
                    for (R = u.length; R--; ) if (u[R] === j) throw TypeError();
                    if ((u.push(j), (D = []), (O = c), (c += l), h == d)) {
                      for (A = 0, R = j.length; R > A; U || (U = !0), A++)
                        (H = S(A, j, n, s, l, c, u)),
                          D.push(H === r ? "null" : H);
                      P = U
                        ? l
                          ? "[\n" + c + D.join(",\n" + c) + "\n" + O + "]"
                          : "[" + D.join(",") + "]"
                        : "[]";
                    } else
                      o(s || j, function (t) {
                        var e = S(t, j, n, s, l, c, u);
                        e !== r && D.push(x(t) + ":" + (l ? " " : "") + e),
                          U || (U = !0);
                      }),
                        (P = U
                          ? l
                            ? "{\n" + c + D.join(",\n" + c) + "\n" + O + "}"
                            : "{" + D.join(",") + "}"
                          : "{}");
                    return u.pop(), P;
                  }
                };
              l.stringify = function (t, e, n) {
                var i, o, r;
                if ("function" == typeof e || ("object" == typeof e && e))
                  if (a.call(e) == h) o = e;
                  else if (a.call(e) == d) {
                    r = {};
                    for (
                      var s, l = 0, c = e.length;
                      c > l;
                      s = e[l++],
                        (a.call(s) == m || a.call(s) == f) && (r[s] = 1)
                    );
                  }
                if (n)
                  if (a.call(n) == f) {
                    if ((n -= n % 1) > 0)
                      for (i = "", n > 10 && (n = 10); i.length < n; i += " ");
                  } else
                    a.call(n) == m && (i = n.length <= 10 ? n : n.slice(0, 10));
                return S("", ((s = {}), (s[""] = t), s), o, r, i, "", []);
              };
            }
            if (!e("json-parse")) {
              var k,
                D,
                H = String.fromCharCode,
                A = {
                  92: "\\",
                  34: '"',
                  47: "/",
                  98: "\b",
                  116: "	",
                  110: "\n",
                  102: "\f",
                  114: "\r",
                },
                R = function () {
                  throw ((k = D = null), SyntaxError());
                },
                O = function () {
                  for (var t, e, n, i, o, r = D, a = r.length; a > k; )
                    switch ((o = r.charCodeAt(k))) {
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        k++;
                        break;
                      case 123:
                      case 125:
                      case 91:
                      case 93:
                      case 58:
                      case 44:
                        return (t = _ ? r.charAt(k) : r[k]), k++, t;
                      case 34:
                        for (t = "@", k++; a > k; )
                          if (((o = r.charCodeAt(k)), 32 > o)) R();
                          else if (92 == o)
                            switch ((o = r.charCodeAt(++k))) {
                              case 92:
                              case 34:
                              case 47:
                              case 98:
                              case 116:
                              case 110:
                              case 102:
                              case 114:
                                (t += A[o]), k++;
                                break;
                              case 117:
                                for (e = ++k, n = k + 4; n > k; k++)
                                  (o = r.charCodeAt(k)),
                                    (o >= 48 && 57 >= o) ||
                                      (o >= 97 && 102 >= o) ||
                                      (o >= 65 && 70 >= o) ||
                                      R();
                                t += H("0x" + r.slice(e, k));
                                break;
                              default:
                                R();
                            }
                          else {
                            if (34 == o) break;
                            for (
                              o = r.charCodeAt(k), e = k;
                              o >= 32 && 92 != o && 34 != o;

                            )
                              o = r.charCodeAt(++k);
                            t += r.slice(e, k);
                          }
                        if (34 == r.charCodeAt(k)) return k++, t;
                        R();
                      default:
                        if (
                          ((e = k),
                          45 == o && ((i = !0), (o = r.charCodeAt(++k))),
                          o >= 48 && 57 >= o)
                        ) {
                          for (
                            48 == o &&
                              ((o = r.charCodeAt(k + 1)), o >= 48 && 57 >= o) &&
                              R(),
                              i = !1;
                            a > k &&
                            ((o = r.charCodeAt(k)), o >= 48 && 57 >= o);
                            k++
                          );
                          if (46 == r.charCodeAt(k)) {
                            for (
                              n = ++k;
                              a > n &&
                              ((o = r.charCodeAt(n)), o >= 48 && 57 >= o);
                              n++
                            );
                            n == k && R(), (k = n);
                          }
                          if (((o = r.charCodeAt(k)), 101 == o || 69 == o)) {
                            for (
                              o = r.charCodeAt(++k),
                                (43 == o || 45 == o) && k++,
                                n = k;
                              a > n &&
                              ((o = r.charCodeAt(n)), o >= 48 && 57 >= o);
                              n++
                            );
                            n == k && R(), (k = n);
                          }
                          return +r.slice(e, k);
                        }
                        if ((i && R(), "true" == r.slice(k, k + 4)))
                          return (k += 4), !0;
                        if ("false" == r.slice(k, k + 5)) return (k += 5), !1;
                        if ("null" == r.slice(k, k + 4)) return (k += 4), null;
                        R();
                    }
                  return "$";
                },
                U = function (t) {
                  var e, n;
                  if (("$" == t && R(), "string" == typeof t)) {
                    if ("@" == (_ ? t.charAt(0) : t[0])) return t.slice(1);
                    if ("[" == t) {
                      for (e = []; (t = O()), "]" != t; n || (n = !0))
                        n && ("," == t ? ((t = O()), "]" == t && R()) : R()),
                          "," == t && R(),
                          e.push(U(t));
                      return e;
                    }
                    if ("{" == t) {
                      for (e = {}; (t = O()), "}" != t; n || (n = !0))
                        n && ("," == t ? ((t = O()), "}" == t && R()) : R()),
                          ("," == t ||
                            "string" != typeof t ||
                            "@" != (_ ? t.charAt(0) : t[0]) ||
                            ":" != O()) &&
                            R(),
                          (e[t.slice(1)] = U(O()));
                      return e;
                    }
                    R();
                  }
                  return t;
                },
                P = function (t, e, n) {
                  var i = j(t, e, n);
                  i === r ? delete t[e] : (t[e] = i);
                },
                j = function (t, e, n) {
                  var i,
                    r = t[e];
                  if ("object" == typeof r && r)
                    if (a.call(r) == d) for (i = r.length; i--; ) P(r, i, n);
                    else
                      o(r, function (t) {
                        P(r, t, n);
                      });
                  return n.call(t, e, r);
                };
              l.parse = function (t, e) {
                var n, i;
                return (
                  (k = 0),
                  (D = "" + t),
                  (n = U(O())),
                  "$" != O() && R(),
                  (k = D = null),
                  e && a.call(e) == h ? j(((i = {}), (i[""] = n), i), "", e) : n
                );
              };
            }
          }
          s &&
            define(function () {
              return l;
            });
        })(this);
      },
      {},
    ],
    4: [
      function (t, e, n) {
        !(function (t, e) {
          if ("object" == typeof n && n) e(n);
          else {
            var i = {};
            e(i),
              "function" == typeof define && define.amd
                ? define(i)
                : (t.Mustache = i);
          }
        })(this, function (t) {
          function e(t, e) {
            return b.call(t, e);
          }
          function n(t) {
            return !e(g, t);
          }
          function i(t) {
            return "function" == typeof t;
          }
          function o(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
          }
          function r(t) {
            return String(t).replace(/[&<>"'\/]/g, function (t) {
              return E[t];
            });
          }
          function a(t) {
            (this.string = t), (this.tail = t), (this.pos = 0);
          }
          function s(t, e) {
            (this.view = null == t ? {} : t),
              (this.parent = e),
              (this._cache = { ".": this.view });
          }
          function l() {
            this.clearCache();
          }
          function c(e, n, o, r) {
            function a(t) {
              return n.render(t, o);
            }
            for (var s, l, u, h = "", p = 0, f = e.length; f > p; ++p)
              switch (((s = e[p]), (l = s[1]), s[0])) {
                case "#":
                  if (
                    ((u = o.lookup(l)),
                    "object" == typeof u || "string" == typeof u)
                  )
                    if (T(u))
                      for (var m = 0, d = u.length; d > m; ++m)
                        h += c(s[4], n, o.push(u[m]), r);
                    else u && (h += c(s[4], n, o.push(u), r));
                  else if (i(u)) {
                    var g = null == r ? null : r.slice(s[3], s[5]);
                    (u = u.call(o.view, g, a)), null != u && (h += u);
                  } else u && (h += c(s[4], n, o, r));
                  break;
                case "^":
                  (u = o.lookup(l)),
                    (!u || (T(u) && 0 === u.length)) && (h += c(s[4], n, o, r));
                  break;
                case ">":
                  (u = n.getPartial(l)), i(u) && (h += u(o));
                  break;
                case "&":
                  (u = o.lookup(l)), null != u && (h += u);
                  break;
                case "name":
                  (u = o.lookup(l)), null != u && (h += t.escape(u));
                  break;
                case "text":
                  h += l;
              }
            return h;
          }
          function u(t) {
            for (var e, n = [], i = n, o = [], r = 0, a = t.length; a > r; ++r)
              switch (((e = t[r]), e[0])) {
                case "#":
                case "^":
                  o.push(e), i.push(e), (i = e[4] = []);
                  break;
                case "/":
                  var s = o.pop();
                  (s[5] = e[2]), (i = o.length > 0 ? o[o.length - 1][4] : n);
                  break;
                default:
                  i.push(e);
              }
            return n;
          }
          function h(t) {
            for (var e, n, i = [], o = 0, r = t.length; r > o; ++o)
              (e = t[o]),
                e &&
                  ("text" === e[0] && n && "text" === n[0]
                    ? ((n[1] += e[1]), (n[3] = e[3]))
                    : ((n = e), i.push(e)));
            return i;
          }
          function p(t) {
            return [new RegExp(o(t[0]) + "\\s*"), new RegExp("\\s*" + o(t[1]))];
          }
          function f(e, i) {
            function r() {
              if (M && !x) for (; C.length; ) delete w[C.pop()];
              else C = [];
              (M = !1), (x = !1);
            }
            if (
              ((e = e || ""),
              (i = i || t.tags),
              "string" == typeof i && (i = i.split(d)),
              2 !== i.length)
            )
              throw new Error("Invalid tags: " + i.join(", "));
            for (
              var s,
                l,
                c,
                f,
                g,
                b,
                y = p(i),
                T = new a(e),
                E = [],
                w = [],
                C = [],
                M = !1,
                x = !1;
              !T.eos();

            ) {
              if (((s = T.pos), (c = T.scanUntil(y[0]))))
                for (var S = 0, k = c.length; k > S; ++S)
                  (f = c.charAt(S)),
                    n(f) ? C.push(w.length) : (x = !0),
                    w.push(["text", f, s, s + 1]),
                    (s += 1),
                    "\n" == f && r();
              if (!T.scan(y[0])) break;
              if (
                ((M = !0),
                (l = T.scan(v) || "name"),
                T.scan(m),
                "=" === l
                  ? ((c = T.scanUntil(_)), T.scan(_), T.scanUntil(y[1]))
                  : "{" === l
                  ? ((c = T.scanUntil(new RegExp("\\s*" + o("}" + i[1])))),
                    T.scan(L),
                    T.scanUntil(y[1]),
                    (l = "&"))
                  : (c = T.scanUntil(y[1])),
                !T.scan(y[1]))
              )
                throw new Error("Unclosed tag at " + T.pos);
              if (((g = [l, c, s, T.pos]), w.push(g), "#" === l || "^" === l))
                E.push(g);
              else if ("/" === l) {
                if (((b = E.pop()), !b))
                  throw new Error('Unopened section "' + c + '" at ' + s);
                if (b[1] !== c)
                  throw new Error('Unclosed section "' + b[1] + '" at ' + s);
              } else if ("name" === l || "{" === l || "&" === l) x = !0;
              else if ("=" === l) {
                if (((i = c.split(d)), 2 !== i.length))
                  throw new Error("Invalid tags at " + s + ": " + i.join(", "));
                y = p(i);
              }
            }
            if ((b = E.pop()))
              throw new Error('Unclosed section "' + b[1] + '" at ' + T.pos);
            return u(h(w));
          }
          var m = /\s*/,
            d = /\s+/,
            g = /\S/,
            _ = /\s*=/,
            L = /\s*\}/,
            v = /#|\^|\/|>|\{|&|=|!/,
            b = RegExp.prototype.test,
            y = Object.prototype.toString,
            T =
              Array.isArray ||
              function (t) {
                return "[object Array]" === y.call(t);
              },
            E = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "/": "&#x2F;",
            };
          (a.prototype.eos = function () {
            return "" === this.tail;
          }),
            (a.prototype.scan = function (t) {
              var e = this.tail.match(t);
              if (e && 0 === e.index) {
                var n = e[0];
                return (
                  (this.tail = this.tail.substring(n.length)),
                  (this.pos += n.length),
                  n
                );
              }
              return "";
            }),
            (a.prototype.scanUntil = function (t) {
              var e,
                n = this.tail.search(t);
              switch (n) {
                case -1:
                  (e = this.tail), (this.tail = "");
                  break;
                case 0:
                  e = "";
                  break;
                default:
                  (e = this.tail.substring(0, n)),
                    (this.tail = this.tail.substring(n));
              }
              return (this.pos += e.length), e;
            }),
            (s.make = function (t) {
              return t instanceof s ? t : new s(t);
            }),
            (s.prototype.push = function (t) {
              return new s(t, this);
            }),
            (s.prototype.lookup = function (t) {
              var e;
              if (t in this._cache) e = this._cache[t];
              else {
                for (var n = this; n; ) {
                  if (t.indexOf(".") > 0) {
                    e = n.view;
                    for (
                      var o = t.split("."), r = 0;
                      null != e && r < o.length;

                    )
                      e = e[o[r++]];
                  } else e = n.view[t];
                  if (null != e) break;
                  n = n.parent;
                }
                this._cache[t] = e;
              }
              return i(e) && (e = e.call(this.view)), e;
            }),
            (l.prototype.clearCache = function () {
              (this._cache = {}), (this._partialCache = {});
            }),
            (l.prototype.compile = function (e, n) {
              var i = this._cache[e];
              if (!i) {
                var o = t.parse(e, n);
                i = this._cache[e] = this.compileTokens(o, e);
              }
              return i;
            }),
            (l.prototype.compilePartial = function (t, e, n) {
              var i = this.compile(e, n);
              return (this._partialCache[t] = i), i;
            }),
            (l.prototype.getPartial = function (t) {
              return (
                t in this._partialCache ||
                  !this._loadPartial ||
                  this.compilePartial(t, this._loadPartial(t)),
                this._partialCache[t]
              );
            }),
            (l.prototype.compileTokens = function (t, e) {
              var n = this;
              return function (o, r) {
                if (r)
                  if (i(r)) n._loadPartial = r;
                  else for (var a in r) n.compilePartial(a, r[a]);
                return c(t, n, s.make(o), e);
              };
            }),
            (l.prototype.render = function (t, e, n) {
              return this.compile(t)(e, n);
            }),
            (t.name = "mustache.js"),
            (t.version = "0.7.3"),
            (t.tags = ["{{", "}}"]),
            (t.Scanner = a),
            (t.Context = s),
            (t.Writer = l),
            (t.parse = f),
            (t.escape = r);
          var w = new l();
          (t.clearCache = function () {
            return w.clearCache();
          }),
            (t.compile = function (t, e) {
              return w.compile(t, e);
            }),
            (t.compilePartial = function (t, e, n) {
              return w.compilePartial(t, e, n);
            }),
            (t.compileTokens = function (t, e) {
              return w.compileTokens(t, e);
            }),
            (t.render = function (t, e, n) {
              return w.render(t, e, n);
            }),
            (t.to_html = function (e, n, o, r) {
              var a = t.render(e, n, o);
              return i(r) ? (r(a), void 0) : a;
            });
        });
      },
      {},
    ],
    5: [
      function (t, e) {
        function n(t) {
          "use strict";
          return /^https?/.test(t.getScheme())
            ? t.toString()
            : "data" == t.getScheme() && /^image/.test(t.getPath())
            ? t.toString()
            : void 0;
        }
        function i(t) {
          return t;
        }
        var o = t("./sanitizer-bundle.js");
        e.exports = function (t) {
          return t ? o(t, n, i) : "";
        };
      },
      { "./sanitizer-bundle.js": 6 },
    ],
    6: [
      function (t, e) {
        var n = (function () {
            function t(t) {
              var e = ("" + t).match(f);
              return e
                ? new l(
                    c(e[1]),
                    c(e[2]),
                    c(e[3]),
                    c(e[4]),
                    c(e[5]),
                    c(e[6]),
                    c(e[7])
                  )
                : null;
            }
            function e(t, e, r, a, s, c, u) {
              var h = new l(
                i(t, m),
                i(e, m),
                n(r),
                a > 0 ? a.toString() : null,
                i(s, d),
                null,
                n(u)
              );
              return (
                c &&
                  ("string" == typeof c
                    ? h.setRawQuery(c.replace(/[^?&=0-9A-Za-z_\-~.%]/g, o))
                    : h.setAllParameters(c)),
                h
              );
            }
            function n(t) {
              return "string" == typeof t ? encodeURIComponent(t) : null;
            }
            function i(t, e) {
              return "string" == typeof t ? encodeURI(t).replace(e, o) : null;
            }
            function o(t) {
              var e = t.charCodeAt(0);
              return (
                "%" +
                "0123456789ABCDEF".charAt((e >> 4) & 15) +
                "0123456789ABCDEF".charAt(15 & e)
              );
            }
            function r(t) {
              return t
                .replace(/(^|\/)\.(?:\/|$)/g, "$1")
                .replace(/\/{2,}/g, "/");
            }
            function a(t) {
              if (null === t) return null;
              for (
                var e, n = r(t), i = h;
                (e = n.replace(i, "$1")) != n;
                n = e
              );
              return n;
            }
            function s(t, e) {
              var n = t.clone(),
                i = e.hasScheme();
              i ? n.setRawScheme(e.getRawScheme()) : (i = e.hasCredentials()),
                i
                  ? n.setRawCredentials(e.getRawCredentials())
                  : (i = e.hasDomain()),
                i ? n.setRawDomain(e.getRawDomain()) : (i = e.hasPort());
              var o = e.getRawPath(),
                r = a(o);
              if (i) n.setPort(e.getPort()), (r = r && r.replace(p, ""));
              else if ((i = !!o)) {
                if (47 !== r.charCodeAt(0)) {
                  var s = a(n.getRawPath() || "").replace(p, ""),
                    l = s.lastIndexOf("/") + 1;
                  r = a((l ? s.substring(0, l) : "") + a(o)).replace(p, "");
                }
              } else (r = r && r.replace(p, "")), r !== o && n.setRawPath(r);
              return (
                i ? n.setRawPath(r) : (i = e.hasQuery()),
                i ? n.setRawQuery(e.getRawQuery()) : (i = e.hasFragment()),
                i && n.setRawFragment(e.getRawFragment()),
                n
              );
            }
            function l(t, e, n, i, o, r, a) {
              (this.scheme_ = t),
                (this.credentials_ = e),
                (this.domain_ = n),
                (this.port_ = i),
                (this.path_ = o),
                (this.query_ = r),
                (this.fragment_ = a),
                (this.paramCache_ = null);
            }
            function c(t) {
              return "string" == typeof t && t.length > 0 ? t : null;
            }
            var u = new RegExp(
                "(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"
              ),
              h = new RegExp(u),
              p = /^(?:\.\.\/)*(?:\.\.$)?/;
            (l.prototype.toString = function () {
              var t = [];
              return (
                null !== this.scheme_ && t.push(this.scheme_, ":"),
                null !== this.domain_ &&
                  (t.push("//"),
                  null !== this.credentials_ && t.push(this.credentials_, "@"),
                  t.push(this.domain_),
                  null !== this.port_ && t.push(":", this.port_.toString())),
                null !== this.path_ && t.push(this.path_),
                null !== this.query_ && t.push("?", this.query_),
                null !== this.fragment_ && t.push("#", this.fragment_),
                t.join("")
              );
            }),
              (l.prototype.clone = function () {
                return new l(
                  this.scheme_,
                  this.credentials_,
                  this.domain_,
                  this.port_,
                  this.path_,
                  this.query_,
                  this.fragment_
                );
              }),
              (l.prototype.getScheme = function () {
                return (
                  this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase()
                );
              }),
              (l.prototype.getRawScheme = function () {
                return this.scheme_;
              }),
              (l.prototype.setScheme = function (t) {
                return (this.scheme_ = i(t, m)), this;
              }),
              (l.prototype.setRawScheme = function (t) {
                return (this.scheme_ = t ? t : null), this;
              }),
              (l.prototype.hasScheme = function () {
                return null !== this.scheme_;
              }),
              (l.prototype.getCredentials = function () {
                return (
                  this.credentials_ && decodeURIComponent(this.credentials_)
                );
              }),
              (l.prototype.getRawCredentials = function () {
                return this.credentials_;
              }),
              (l.prototype.setCredentials = function (t) {
                return (this.credentials_ = i(t, m)), this;
              }),
              (l.prototype.setRawCredentials = function (t) {
                return (this.credentials_ = t ? t : null), this;
              }),
              (l.prototype.hasCredentials = function () {
                return null !== this.credentials_;
              }),
              (l.prototype.getDomain = function () {
                return this.domain_ && decodeURIComponent(this.domain_);
              }),
              (l.prototype.getRawDomain = function () {
                return this.domain_;
              }),
              (l.prototype.setDomain = function (t) {
                return this.setRawDomain(t && encodeURIComponent(t));
              }),
              (l.prototype.setRawDomain = function (t) {
                return (
                  (this.domain_ = t ? t : null), this.setRawPath(this.path_)
                );
              }),
              (l.prototype.hasDomain = function () {
                return null !== this.domain_;
              }),
              (l.prototype.getPort = function () {
                return this.port_ && decodeURIComponent(this.port_);
              }),
              (l.prototype.setPort = function (t) {
                if (t) {
                  if (((t = Number(t)), t !== (65535 & t)))
                    throw new Error("Bad port number " + t);
                  this.port_ = "" + t;
                } else this.port_ = null;
                return this;
              }),
              (l.prototype.hasPort = function () {
                return null !== this.port_;
              }),
              (l.prototype.getPath = function () {
                return this.path_ && decodeURIComponent(this.path_);
              }),
              (l.prototype.getRawPath = function () {
                return this.path_;
              }),
              (l.prototype.setPath = function (t) {
                return this.setRawPath(i(t, d));
              }),
              (l.prototype.setRawPath = function (t) {
                return (
                  t
                    ? ((t = String(t)),
                      (this.path_ =
                        !this.domain_ || /^\//.test(t) ? t : "/" + t))
                    : (this.path_ = null),
                  this
                );
              }),
              (l.prototype.hasPath = function () {
                return null !== this.path_;
              }),
              (l.prototype.getQuery = function () {
                return (
                  this.query_ &&
                  decodeURIComponent(this.query_).replace(/\+/g, " ")
                );
              }),
              (l.prototype.getRawQuery = function () {
                return this.query_;
              }),
              (l.prototype.setQuery = function (t) {
                return (this.paramCache_ = null), (this.query_ = n(t)), this;
              }),
              (l.prototype.setRawQuery = function (t) {
                return (
                  (this.paramCache_ = null), (this.query_ = t ? t : null), this
                );
              }),
              (l.prototype.hasQuery = function () {
                return null !== this.query_;
              }),
              (l.prototype.setAllParameters = function (t) {
                if (
                  "object" == typeof t &&
                  !(t instanceof Array) &&
                  (t instanceof Object ||
                    "[object Array]" !== Object.prototype.toString.call(t))
                ) {
                  var e = [],
                    n = -1;
                  for (var i in t) {
                    var o = t[i];
                    "string" == typeof o && ((e[++n] = i), (e[++n] = o));
                  }
                  t = e;
                }
                this.paramCache_ = null;
                for (var r = [], a = "", s = 0; s < t.length; ) {
                  var i = t[s++],
                    o = t[s++];
                  r.push(a, encodeURIComponent(i.toString())),
                    (a = "&"),
                    o && r.push("=", encodeURIComponent(o.toString()));
                }
                return (this.query_ = r.join("")), this;
              }),
              (l.prototype.checkParameterCache_ = function () {
                if (!this.paramCache_) {
                  var t = this.query_;
                  if (t) {
                    for (
                      var e = t.split(/[&\?]/), n = [], i = -1, o = 0;
                      o < e.length;
                      ++o
                    ) {
                      var r = e[o].match(/^([^=]*)(?:=(.*))?$/);
                      (n[++i] = decodeURIComponent(r[1]).replace(/\+/g, " ")),
                        (n[++i] = decodeURIComponent(r[2] || "").replace(
                          /\+/g,
                          " "
                        ));
                    }
                    this.paramCache_ = n;
                  } else this.paramCache_ = [];
                }
              }),
              (l.prototype.setParameterValues = function (t, e) {
                "string" == typeof e && (e = [e]), this.checkParameterCache_();
                for (
                  var n = 0, i = this.paramCache_, o = [], r = 0;
                  r < i.length;
                  r += 2
                )
                  t === i[r]
                    ? n < e.length && o.push(t, e[n++])
                    : o.push(i[r], i[r + 1]);
                for (; n < e.length; ) o.push(t, e[n++]);
                return this.setAllParameters(o), this;
              }),
              (l.prototype.removeParameter = function (t) {
                return this.setParameterValues(t, []);
              }),
              (l.prototype.getAllParameters = function () {
                return (
                  this.checkParameterCache_(),
                  this.paramCache_.slice(0, this.paramCache_.length)
                );
              }),
              (l.prototype.getParameterValues = function (t) {
                this.checkParameterCache_();
                for (var e = [], n = 0; n < this.paramCache_.length; n += 2)
                  t === this.paramCache_[n] && e.push(this.paramCache_[n + 1]);
                return e;
              }),
              (l.prototype.getParameterMap = function () {
                this.checkParameterCache_();
                for (var t = {}, e = 0; e < this.paramCache_.length; e += 2) {
                  var n = this.paramCache_[e++],
                    i = this.paramCache_[e++];
                  n in t ? t[n].push(i) : (t[n] = [i]);
                }
                return t;
              }),
              (l.prototype.getParameterValue = function (t) {
                this.checkParameterCache_();
                for (var e = 0; e < this.paramCache_.length; e += 2)
                  if (t === this.paramCache_[e]) return this.paramCache_[e + 1];
                return null;
              }),
              (l.prototype.getFragment = function () {
                return this.fragment_ && decodeURIComponent(this.fragment_);
              }),
              (l.prototype.getRawFragment = function () {
                return this.fragment_;
              }),
              (l.prototype.setFragment = function (t) {
                return (
                  (this.fragment_ = t ? encodeURIComponent(t) : null), this
                );
              }),
              (l.prototype.setRawFragment = function (t) {
                return (this.fragment_ = t ? t : null), this;
              }),
              (l.prototype.hasFragment = function () {
                return null !== this.fragment_;
              });
            var f = new RegExp(
                "^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"
              ),
              m = /[#\/\?@]/g,
              d = /[\#\?]/g;
            return (
              (l.parse = t),
              (l.create = e),
              (l.resolve = s),
              (l.collapse_dots = a),
              (l.utils = {
                mimeTypeOf: function (e) {
                  var n = t(e);
                  return /\.html$/.test(n.getPath())
                    ? "text/html"
                    : "application/javascript";
                },
                resolve: function (e, n) {
                  return e ? s(t(e), t(n)).toString() : "" + n;
                },
              }),
              l
            );
          })(),
          i = {};
        if (
          ((i.atype = {
            NONE: 0,
            URI: 1,
            URI_FRAGMENT: 11,
            SCRIPT: 2,
            STYLE: 3,
            HTML: 12,
            ID: 4,
            IDREF: 5,
            IDREFS: 6,
            GLOBAL_NAME: 7,
            LOCAL_NAME: 8,
            CLASSES: 9,
            FRAME_TARGET: 10,
            MEDIA_QUERY: 13,
          }),
          (i.atype = i.atype),
          (i.ATTRIBS = {
            "*::class": 9,
            "*::dir": 0,
            "*::draggable": 0,
            "*::hidden": 0,
            "*::id": 4,
            "*::inert": 0,
            "*::itemprop": 0,
            "*::itemref": 6,
            "*::itemscope": 0,
            "*::lang": 0,
            "*::onblur": 2,
            "*::onchange": 2,
            "*::onclick": 2,
            "*::ondblclick": 2,
            "*::onfocus": 2,
            "*::onkeydown": 2,
            "*::onkeypress": 2,
            "*::onkeyup": 2,
            "*::onload": 2,
            "*::onmousedown": 2,
            "*::onmousemove": 2,
            "*::onmouseout": 2,
            "*::onmouseover": 2,
            "*::onmouseup": 2,
            "*::onreset": 2,
            "*::onscroll": 2,
            "*::onselect": 2,
            "*::onsubmit": 2,
            "*::onunload": 2,
            "*::spellcheck": 0,
            "*::style": 3,
            "*::title": 0,
            "*::translate": 0,
            "a::accesskey": 0,
            "a::coords": 0,
            "a::href": 1,
            "a::hreflang": 0,
            "a::name": 7,
            "a::onblur": 2,
            "a::onfocus": 2,
            "a::shape": 0,
            "a::tabindex": 0,
            "a::target": 10,
            "a::type": 0,
            "area::accesskey": 0,
            "area::alt": 0,
            "area::coords": 0,
            "area::href": 1,
            "area::nohref": 0,
            "area::onblur": 2,
            "area::onfocus": 2,
            "area::shape": 0,
            "area::tabindex": 0,
            "area::target": 10,
            "audio::controls": 0,
            "audio::loop": 0,
            "audio::mediagroup": 5,
            "audio::muted": 0,
            "audio::preload": 0,
            "bdo::dir": 0,
            "blockquote::cite": 1,
            "br::clear": 0,
            "button::accesskey": 0,
            "button::disabled": 0,
            "button::name": 8,
            "button::onblur": 2,
            "button::onfocus": 2,
            "button::tabindex": 0,
            "button::type": 0,
            "button::value": 0,
            "canvas::height": 0,
            "canvas::width": 0,
            "caption::align": 0,
            "col::align": 0,
            "col::char": 0,
            "col::charoff": 0,
            "col::span": 0,
            "col::valign": 0,
            "col::width": 0,
            "colgroup::align": 0,
            "colgroup::char": 0,
            "colgroup::charoff": 0,
            "colgroup::span": 0,
            "colgroup::valign": 0,
            "colgroup::width": 0,
            "command::checked": 0,
            "command::command": 5,
            "command::disabled": 0,
            "command::icon": 1,
            "command::label": 0,
            "command::radiogroup": 0,
            "command::type": 0,
            "data::value": 0,
            "del::cite": 1,
            "del::datetime": 0,
            "details::open": 0,
            "dir::compact": 0,
            "div::align": 0,
            "dl::compact": 0,
            "fieldset::disabled": 0,
            "font::color": 0,
            "font::face": 0,
            "font::size": 0,
            "form::accept": 0,
            "form::action": 1,
            "form::autocomplete": 0,
            "form::enctype": 0,
            "form::method": 0,
            "form::name": 7,
            "form::novalidate": 0,
            "form::onreset": 2,
            "form::onsubmit": 2,
            "form::target": 10,
            "h1::align": 0,
            "h2::align": 0,
            "h3::align": 0,
            "h4::align": 0,
            "h5::align": 0,
            "h6::align": 0,
            "hr::align": 0,
            "hr::noshade": 0,
            "hr::size": 0,
            "hr::width": 0,
            "iframe::align": 0,
            "iframe::frameborder": 0,
            "iframe::height": 0,
            "iframe::marginheight": 0,
            "iframe::marginwidth": 0,
            "iframe::width": 0,
            "img::align": 0,
            "img::alt": 0,
            "img::border": 0,
            "img::height": 0,
            "img::hspace": 0,
            "img::ismap": 0,
            "img::name": 7,
            "img::src": 1,
            "img::usemap": 11,
            "img::vspace": 0,
            "img::width": 0,
            "input::accept": 0,
            "input::accesskey": 0,
            "input::align": 0,
            "input::alt": 0,
            "input::autocomplete": 0,
            "input::checked": 0,
            "input::disabled": 0,
            "input::inputmode": 0,
            "input::ismap": 0,
            "input::list": 5,
            "input::max": 0,
            "input::maxlength": 0,
            "input::min": 0,
            "input::multiple": 0,
            "input::name": 8,
            "input::onblur": 2,
            "input::onchange": 2,
            "input::onfocus": 2,
            "input::onselect": 2,
            "input::placeholder": 0,
            "input::readonly": 0,
            "input::required": 0,
            "input::size": 0,
            "input::src": 1,
            "input::step": 0,
            "input::tabindex": 0,
            "input::type": 0,
            "input::usemap": 11,
            "input::value": 0,
            "ins::cite": 1,
            "ins::datetime": 0,
            "label::accesskey": 0,
            "label::for": 5,
            "label::onblur": 2,
            "label::onfocus": 2,
            "legend::accesskey": 0,
            "legend::align": 0,
            "li::type": 0,
            "li::value": 0,
            "map::name": 7,
            "menu::compact": 0,
            "menu::label": 0,
            "menu::type": 0,
            "meter::high": 0,
            "meter::low": 0,
            "meter::max": 0,
            "meter::min": 0,
            "meter::value": 0,
            "ol::compact": 0,
            "ol::reversed": 0,
            "ol::start": 0,
            "ol::type": 0,
            "optgroup::disabled": 0,
            "optgroup::label": 0,
            "option::disabled": 0,
            "option::label": 0,
            "option::selected": 0,
            "option::value": 0,
            "output::for": 6,
            "output::name": 8,
            "p::align": 0,
            "pre::width": 0,
            "progress::max": 0,
            "progress::min": 0,
            "progress::value": 0,
            "q::cite": 1,
            "select::autocomplete": 0,
            "select::disabled": 0,
            "select::multiple": 0,
            "select::name": 8,
            "select::onblur": 2,
            "select::onchange": 2,
            "select::onfocus": 2,
            "select::required": 0,
            "select::size": 0,
            "select::tabindex": 0,
            "source::type": 0,
            "table::align": 0,
            "table::bgcolor": 0,
            "table::border": 0,
            "table::cellpadding": 0,
            "table::cellspacing": 0,
            "table::frame": 0,
            "table::rules": 0,
            "table::summary": 0,
            "table::width": 0,
            "tbody::align": 0,
            "tbody::char": 0,
            "tbody::charoff": 0,
            "tbody::valign": 0,
            "td::abbr": 0,
            "td::align": 0,
            "td::axis": 0,
            "td::bgcolor": 0,
            "td::char": 0,
            "td::charoff": 0,
            "td::colspan": 0,
            "td::headers": 6,
            "td::height": 0,
            "td::nowrap": 0,
            "td::rowspan": 0,
            "td::scope": 0,
            "td::valign": 0,
            "td::width": 0,
            "textarea::accesskey": 0,
            "textarea::autocomplete": 0,
            "textarea::cols": 0,
            "textarea::disabled": 0,
            "textarea::inputmode": 0,
            "textarea::name": 8,
            "textarea::onblur": 2,
            "textarea::onchange": 2,
            "textarea::onfocus": 2,
            "textarea::onselect": 2,
            "textarea::placeholder": 0,
            "textarea::readonly": 0,
            "textarea::required": 0,
            "textarea::rows": 0,
            "textarea::tabindex": 0,
            "textarea::wrap": 0,
            "tfoot::align": 0,
            "tfoot::char": 0,
            "tfoot::charoff": 0,
            "tfoot::valign": 0,
            "th::abbr": 0,
            "th::align": 0,
            "th::axis": 0,
            "th::bgcolor": 0,
            "th::char": 0,
            "th::charoff": 0,
            "th::colspan": 0,
            "th::headers": 6,
            "th::height": 0,
            "th::nowrap": 0,
            "th::rowspan": 0,
            "th::scope": 0,
            "th::valign": 0,
            "th::width": 0,
            "thead::align": 0,
            "thead::char": 0,
            "thead::charoff": 0,
            "thead::valign": 0,
            "tr::align": 0,
            "tr::bgcolor": 0,
            "tr::char": 0,
            "tr::charoff": 0,
            "tr::valign": 0,
            "track::default": 0,
            "track::kind": 0,
            "track::label": 0,
            "track::srclang": 0,
            "ul::compact": 0,
            "ul::type": 0,
            "video::controls": 0,
            "video::height": 0,
            "video::loop": 0,
            "video::mediagroup": 5,
            "video::muted": 0,
            "video::poster": 1,
            "video::preload": 0,
            "video::width": 0,
          }),
          (i.ATTRIBS = i.ATTRIBS),
          (i.eflags = {
            OPTIONAL_ENDTAG: 1,
            EMPTY: 2,
            CDATA: 4,
            RCDATA: 8,
            UNSAFE: 16,
            FOLDABLE: 32,
            SCRIPT: 64,
            STYLE: 128,
            VIRTUALIZED: 256,
          }),
          (i.eflags = i.eflags),
          (i.ELEMENTS = {
            a: 0,
            abbr: 0,
            acronym: 0,
            address: 0,
            applet: 272,
            area: 2,
            article: 0,
            aside: 0,
            audio: 0,
            b: 0,
            base: 274,
            basefont: 274,
            bdi: 0,
            bdo: 0,
            big: 0,
            blockquote: 0,
            body: 305,
            br: 2,
            button: 0,
            canvas: 0,
            caption: 0,
            center: 0,
            cite: 0,
            code: 0,
            col: 2,
            colgroup: 1,
            command: 2,
            data: 0,
            datalist: 0,
            dd: 1,
            del: 0,
            details: 0,
            dfn: 0,
            dialog: 272,
            dir: 0,
            div: 0,
            dl: 0,
            dt: 1,
            em: 0,
            fieldset: 0,
            figcaption: 0,
            figure: 0,
            font: 0,
            footer: 0,
            form: 0,
            frame: 274,
            frameset: 272,
            h1: 0,
            h2: 0,
            h3: 0,
            h4: 0,
            h5: 0,
            h6: 0,
            head: 305,
            header: 0,
            hgroup: 0,
            hr: 2,
            html: 305,
            i: 0,
            iframe: 4,
            img: 2,
            input: 2,
            ins: 0,
            isindex: 274,
            kbd: 0,
            keygen: 274,
            label: 0,
            legend: 0,
            li: 1,
            link: 274,
            map: 0,
            mark: 0,
            menu: 0,
            meta: 274,
            meter: 0,
            nav: 0,
            nobr: 0,
            noembed: 276,
            noframes: 276,
            noscript: 276,
            object: 272,
            ol: 0,
            optgroup: 0,
            option: 1,
            output: 0,
            p: 1,
            param: 274,
            pre: 0,
            progress: 0,
            q: 0,
            s: 0,
            samp: 0,
            script: 84,
            section: 0,
            select: 0,
            small: 0,
            source: 2,
            span: 0,
            strike: 0,
            strong: 0,
            style: 148,
            sub: 0,
            summary: 0,
            sup: 0,
            table: 0,
            tbody: 1,
            td: 1,
            textarea: 8,
            tfoot: 1,
            th: 1,
            thead: 1,
            time: 0,
            title: 280,
            tr: 1,
            track: 2,
            tt: 0,
            u: 0,
            ul: 0,
            var: 0,
            video: 0,
            wbr: 2,
          }),
          (i.ELEMENTS = i.ELEMENTS),
          (i.ELEMENT_DOM_INTERFACES = {
            a: "HTMLAnchorElement",
            abbr: "HTMLElement",
            acronym: "HTMLElement",
            address: "HTMLElement",
            applet: "HTMLAppletElement",
            area: "HTMLAreaElement",
            article: "HTMLElement",
            aside: "HTMLElement",
            audio: "HTMLAudioElement",
            b: "HTMLElement",
            base: "HTMLBaseElement",
            basefont: "HTMLBaseFontElement",
            bdi: "HTMLElement",
            bdo: "HTMLElement",
            big: "HTMLElement",
            blockquote: "HTMLQuoteElement",
            body: "HTMLBodyElement",
            br: "HTMLBRElement",
            button: "HTMLButtonElement",
            canvas: "HTMLCanvasElement",
            caption: "HTMLTableCaptionElement",
            center: "HTMLElement",
            cite: "HTMLElement",
            code: "HTMLElement",
            col: "HTMLTableColElement",
            colgroup: "HTMLTableColElement",
            command: "HTMLCommandElement",
            data: "HTMLElement",
            datalist: "HTMLDataListElement",
            dd: "HTMLElement",
            del: "HTMLModElement",
            details: "HTMLDetailsElement",
            dfn: "HTMLElement",
            dialog: "HTMLDialogElement",
            dir: "HTMLDirectoryElement",
            div: "HTMLDivElement",
            dl: "HTMLDListElement",
            dt: "HTMLElement",
            em: "HTMLElement",
            fieldset: "HTMLFieldSetElement",
            figcaption: "HTMLElement",
            figure: "HTMLElement",
            font: "HTMLFontElement",
            footer: "HTMLElement",
            form: "HTMLFormElement",
            frame: "HTMLFrameElement",
            frameset: "HTMLFrameSetElement",
            h1: "HTMLHeadingElement",
            h2: "HTMLHeadingElement",
            h3: "HTMLHeadingElement",
            h4: "HTMLHeadingElement",
            h5: "HTMLHeadingElement",
            h6: "HTMLHeadingElement",
            head: "HTMLHeadElement",
            header: "HTMLElement",
            hgroup: "HTMLElement",
            hr: "HTMLHRElement",
            html: "HTMLHtmlElement",
            i: "HTMLElement",
            iframe: "HTMLIFrameElement",
            img: "HTMLImageElement",
            input: "HTMLInputElement",
            ins: "HTMLModElement",
            isindex: "HTMLUnknownElement",
            kbd: "HTMLElement",
            keygen: "HTMLKeygenElement",
            label: "HTMLLabelElement",
            legend: "HTMLLegendElement",
            li: "HTMLLIElement",
            link: "HTMLLinkElement",
            map: "HTMLMapElement",
            mark: "HTMLElement",
            menu: "HTMLMenuElement",
            meta: "HTMLMetaElement",
            meter: "HTMLMeterElement",
            nav: "HTMLElement",
            nobr: "HTMLElement",
            noembed: "HTMLElement",
            noframes: "HTMLElement",
            noscript: "HTMLElement",
            object: "HTMLObjectElement",
            ol: "HTMLOListElement",
            optgroup: "HTMLOptGroupElement",
            option: "HTMLOptionElement",
            output: "HTMLOutputElement",
            p: "HTMLParagraphElement",
            param: "HTMLParamElement",
            pre: "HTMLPreElement",
            progress: "HTMLProgressElement",
            q: "HTMLQuoteElement",
            s: "HTMLElement",
            samp: "HTMLElement",
            script: "HTMLScriptElement",
            section: "HTMLElement",
            select: "HTMLSelectElement",
            small: "HTMLElement",
            source: "HTMLSourceElement",
            span: "HTMLSpanElement",
            strike: "HTMLElement",
            strong: "HTMLElement",
            style: "HTMLStyleElement",
            sub: "HTMLElement",
            summary: "HTMLElement",
            sup: "HTMLElement",
            table: "HTMLTableElement",
            tbody: "HTMLTableSectionElement",
            td: "HTMLTableDataCellElement",
            textarea: "HTMLTextAreaElement",
            tfoot: "HTMLTableSectionElement",
            th: "HTMLTableHeaderCellElement",
            thead: "HTMLTableSectionElement",
            time: "HTMLTimeElement",
            title: "HTMLTitleElement",
            tr: "HTMLTableRowElement",
            track: "HTMLTrackElement",
            tt: "HTMLElement",
            u: "HTMLElement",
            ul: "HTMLUListElement",
            var: "HTMLElement",
            video: "HTMLVideoElement",
            wbr: "HTMLElement",
          }),
          (i.ELEMENT_DOM_INTERFACES = i.ELEMENT_DOM_INTERFACES),
          (i.ueffects = { NOT_LOADED: 0, SAME_DOCUMENT: 1, NEW_DOCUMENT: 2 }),
          (i.ueffects = i.ueffects),
          (i.URIEFFECTS = {
            "a::href": 2,
            "area::href": 2,
            "blockquote::cite": 0,
            "command::icon": 1,
            "del::cite": 0,
            "form::action": 2,
            "img::src": 1,
            "input::src": 1,
            "ins::cite": 0,
            "q::cite": 0,
            "video::poster": 1,
          }),
          (i.URIEFFECTS = i.URIEFFECTS),
          (i.ltypes = { UNSANDBOXED: 2, SANDBOXED: 1, DATA: 0 }),
          (i.ltypes = i.ltypes),
          (i.LOADERTYPES = {
            "a::href": 2,
            "area::href": 2,
            "blockquote::cite": 2,
            "command::icon": 1,
            "del::cite": 2,
            "form::action": 2,
            "img::src": 1,
            "input::src": 1,
            "ins::cite": 2,
            "q::cite": 2,
            "video::poster": 1,
          }),
          (i.LOADERTYPES = i.LOADERTYPES),
          "i" !== "I".toLowerCase())
        )
          throw "I/i problem";
        var o = (function (t) {
            function e(t) {
              if (H.hasOwnProperty(t)) return H[t];
              var e = t.match(A);
              if (e) return String.fromCharCode(parseInt(e[1], 10));
              if ((e = t.match(R)))
                return String.fromCharCode(parseInt(e[1], 16));
              if (U && O.test(t)) {
                U.innerHTML = "&" + t + ";";
                var n = U.textContent;
                return (H[t] = n), n;
              }
              return "&" + t + ";";
            }
            function i(t, n) {
              return e(n);
            }
            function o(t) {
              return t.replace(P, "");
            }
            function r(t) {
              return t.replace(j, i);
            }
            function a(t) {
              return ("" + t)
                .replace(I, "&amp;")
                .replace(q, "&lt;")
                .replace(F, "&gt;")
                .replace(B, "&#34;");
            }
            function s(t) {
              return t
                .replace(z, "&amp;$1")
                .replace(q, "&lt;")
                .replace(F, "&gt;");
            }
            function l(t) {
              var e = {
                cdata: t.cdata || t.cdata,
                comment: t.comment || t.comment,
                endDoc: t.endDoc || t.endDoc,
                endTag: t.endTag || t.endTag,
                pcdata: t.pcdata || t.pcdata,
                rcdata: t.rcdata || t.rcdata,
                startDoc: t.startDoc || t.startDoc,
                startTag: t.startTag || t.startTag,
              };
              return function (t, n) {
                return c(t, e, n);
              };
            }
            function c(t, e, n) {
              var i = p(t),
                o = { noMoreGT: !1, noMoreEndComments: !1 };
              h(e, i, 0, o, n);
            }
            function u(t, e, n, i, o) {
              return function () {
                h(t, e, n, i, o);
              };
            }
            function h(e, n, i, o, r) {
              try {
                e.startDoc && 0 == i && e.startDoc(r);
                for (var a, s, l, c = i, h = n.length; h > c; ) {
                  var p = n[c++],
                    g = n[c];
                  switch (p) {
                    case "&":
                      N.test(g)
                        ? (e.pcdata &&
                            e.pcdata("&" + g, r, Z, u(e, n, c, o, r)),
                          c++)
                        : e.pcdata && e.pcdata("&amp;", r, Z, u(e, n, c, o, r));
                      break;
                    case "</":
                      (a = /^([-\w:]+)[^\'\"]*/.exec(g))
                        ? a[0].length === g.length && ">" === n[c + 1]
                          ? ((c += 2),
                            (l = a[1].toLowerCase()),
                            e.endTag && e.endTag(l, r, Z, u(e, n, c, o, r)))
                          : (c = f(n, c, e, r, Z, o))
                        : e.pcdata && e.pcdata("&lt;/", r, Z, u(e, n, c, o, r));
                      break;
                    case "<":
                      if ((a = /^([-\w:]+)\s*\/?/.exec(g)))
                        if (a[0].length === g.length && ">" === n[c + 1]) {
                          (c += 2),
                            (l = a[1].toLowerCase()),
                            e.startTag &&
                              e.startTag(l, [], r, Z, u(e, n, c, o, r));
                          var _ = t.ELEMENTS[l];
                          if (_ & $) {
                            var L = { name: l, next: c, eflags: _ };
                            c = d(n, L, e, r, Z, o);
                          }
                        } else c = m(n, c, e, r, Z, o);
                      else e.pcdata && e.pcdata("&lt;", r, Z, u(e, n, c, o, r));
                      break;
                    case "<!--":
                      if (!o.noMoreEndComments) {
                        for (
                          s = c + 1;
                          h > s && (">" !== n[s] || !/--$/.test(n[s - 1]));
                          s++
                        );
                        if (h > s) {
                          if (e.comment) {
                            var v = n.slice(c, s).join("");
                            e.comment(
                              v.substr(0, v.length - 2),
                              r,
                              Z,
                              u(e, n, s + 1, o, r)
                            );
                          }
                          c = s + 1;
                        } else o.noMoreEndComments = !0;
                      }
                      o.noMoreEndComments &&
                        e.pcdata &&
                        e.pcdata("&lt;!--", r, Z, u(e, n, c, o, r));
                      break;
                    case "<!":
                      if (/^\w/.test(g)) {
                        if (!o.noMoreGT) {
                          for (s = c + 1; h > s && ">" !== n[s]; s++);
                          h > s ? (c = s + 1) : (o.noMoreGT = !0);
                        }
                        o.noMoreGT &&
                          e.pcdata &&
                          e.pcdata("&lt;!", r, Z, u(e, n, c, o, r));
                      } else
                        e.pcdata && e.pcdata("&lt;!", r, Z, u(e, n, c, o, r));
                      break;
                    case "<?":
                      if (!o.noMoreGT) {
                        for (s = c + 1; h > s && ">" !== n[s]; s++);
                        h > s ? (c = s + 1) : (o.noMoreGT = !0);
                      }
                      o.noMoreGT &&
                        e.pcdata &&
                        e.pcdata("&lt;?", r, Z, u(e, n, c, o, r));
                      break;
                    case ">":
                      e.pcdata && e.pcdata("&gt;", r, Z, u(e, n, c, o, r));
                      break;
                    case "":
                      break;
                    default:
                      e.pcdata && e.pcdata(p, r, Z, u(e, n, c, o, r));
                  }
                }
                e.endDoc && e.endDoc(r);
              } catch (b) {
                if (b !== Z) throw b;
              }
            }
            function p(t) {
              var e = /(<\/|<\!--|<[!?]|[&<>])/g;
              if (((t += ""), G)) return t.split(e);
              for (var n, i = [], o = 0; null !== (n = e.exec(t)); )
                i.push(t.substring(o, n.index)),
                  i.push(n[0]),
                  (o = n.index + n[0].length);
              return i.push(t.substring(o)), i;
            }
            function f(t, e, n, i, o, r) {
              var a = g(t, e);
              return a
                ? (n.endTag && n.endTag(a.name, i, o, u(n, t, e, r, i)), a.next)
                : t.length;
            }
            function m(t, e, n, i, o, r) {
              var a = g(t, e);
              return a
                ? (n.startTag &&
                    n.startTag(a.name, a.attrs, i, o, u(n, t, a.next, r, i)),
                  a.eflags & $ ? d(t, a, n, i, o, r) : a.next)
                : t.length;
            }
            function d(e, n, i, o, r, a) {
              var l = e.length;
              Y.hasOwnProperty(n.name) ||
                (Y[n.name] = new RegExp("^" + n.name + "(?:[\\s\\/]|$)", "i"));
              for (
                var c = Y[n.name], h = n.next, p = n.next + 1;
                l > p && ("</" !== e[p - 1] || !c.test(e[p]));
                p++
              );
              l > p && (p -= 1);
              var f = e.slice(h, p).join("");
              if (n.eflags & t.eflags.CDATA)
                i.cdata && i.cdata(f, o, r, u(i, e, p, a, o));
              else {
                if (!(n.eflags & t.eflags.RCDATA)) throw new Error("bug");
                i.rcdata && i.rcdata(s(f), o, r, u(i, e, p, a, o));
              }
              return p;
            }
            function g(e, n) {
              var i = /^([-\w:]+)/.exec(e[n]),
                o = {};
              (o.name = i[1].toLowerCase()), (o.eflags = t.ELEMENTS[o.name]);
              for (
                var r = e[n].substr(i[0].length), a = n + 1, s = e.length;
                s > a && ">" !== e[a];
                a++
              )
                r += e[a];
              if (a >= s) return void 0;
              for (var l = []; "" !== r; )
                if ((i = J.exec(r))) {
                  if ((i[4] && !i[5]) || (i[6] && !i[7])) {
                    for (
                      var c = i[4] || i[6], u = !1, h = [r, e[a++]];
                      s > a;
                      a++
                    ) {
                      if (u) {
                        if (">" === e[a]) break;
                      } else 0 <= e[a].indexOf(c) && (u = !0);
                      h.push(e[a]);
                    }
                    if (a >= s) break;
                    r = h.join("");
                    continue;
                  }
                  var p = i[1].toLowerCase(),
                    f = i[2] ? _(i[3]) : "";
                  l.push(p, f), (r = r.substr(i[0].length));
                } else r = r.replace(/^[\s\S][^a-z\s]*/, "");
              return (o.attrs = l), (o.next = a + 1), o;
            }
            function _(t) {
              var e = t.charCodeAt(0);
              return (
                (34 === e || 39 === e) && (t = t.substr(1, t.length - 2)),
                r(o(t))
              );
            }
            function L(e) {
              var n,
                i,
                o = function (t, e) {
                  i || e.push(t);
                };
              return l({
                startDoc: function () {
                  (n = []), (i = !1);
                },
                startTag: function (o, r, s) {
                  if (!i && t.ELEMENTS.hasOwnProperty(o)) {
                    var l = t.ELEMENTS[o];
                    if (!(l & t.eflags.FOLDABLE)) {
                      var c = e(o, r);
                      if (!c) return (i = !(l & t.eflags.EMPTY)), void 0;
                      if ("object" != typeof c)
                        throw new Error(
                          "tagPolicy did not return object (old API?)"
                        );
                      if (!("attribs" in c))
                        throw new Error("tagPolicy gave no attribs");
                      r = c.attribs;
                      var u, h;
                      if (
                        ("tagName" in c
                          ? ((h = c.tagName), (u = t.ELEMENTS[h]))
                          : ((h = o), (u = l)),
                        l & t.eflags.OPTIONAL_ENDTAG)
                      ) {
                        var p = n[n.length - 1];
                        !p ||
                          p.orig !== o ||
                          (p.rep === h && o === h) ||
                          s.push("</", p.rep, ">");
                      }
                      l & t.eflags.EMPTY || n.push({ orig: o, rep: h }),
                        s.push("<", h);
                      for (var f = 0, m = r.length; m > f; f += 2) {
                        var d = r[f],
                          g = r[f + 1];
                        null !== g &&
                          void 0 !== g &&
                          s.push(" ", d, '="', a(g), '"');
                      }
                      s.push(">"),
                        l & t.eflags.EMPTY &&
                          !(u & t.eflags.EMPTY) &&
                          s.push("</", h, ">");
                    }
                  }
                },
                endTag: function (e, o) {
                  if (i) return (i = !1), void 0;
                  if (t.ELEMENTS.hasOwnProperty(e)) {
                    var r = t.ELEMENTS[e];
                    if (!(r & (t.eflags.EMPTY | t.eflags.FOLDABLE))) {
                      var a;
                      if (r & t.eflags.OPTIONAL_ENDTAG)
                        for (a = n.length; --a >= 0; ) {
                          var s = n[a].orig;
                          if (s === e) break;
                          if (!(t.ELEMENTS[s] & t.eflags.OPTIONAL_ENDTAG))
                            return;
                        }
                      else for (a = n.length; --a >= 0 && n[a].orig !== e; );
                      if (0 > a) return;
                      for (var l = n.length; --l > a; ) {
                        var c = n[l].rep;
                        t.ELEMENTS[c] & t.eflags.OPTIONAL_ENDTAG ||
                          o.push("</", c, ">");
                      }
                      a < n.length && (e = n[a].rep),
                        (n.length = a),
                        o.push("</", e, ">");
                    }
                  }
                },
                pcdata: o,
                rcdata: o,
                cdata: o,
                endDoc: function (t) {
                  for (; n.length; n.length--)
                    t.push("</", n[n.length - 1].rep, ">");
                },
              });
            }
            function v(t, e, i, o, r) {
              if (!r) return null;
              try {
                var a = n.parse("" + t);
                if (a && (!a.hasScheme() || Q.test(a.getScheme()))) {
                  var s = r(a, e, i, o);
                  return s ? s.toString() : null;
                }
              } catch (l) {
                return null;
              }
              return null;
            }
            function b(t, e, n, i, o) {
              if (
                (n || t(e + " removed", { change: "removed", tagName: e }),
                i !== o)
              ) {
                var r = "changed";
                i && !o ? (r = "removed") : !i && o && (r = "added"),
                  t(e + "." + n + " " + r, {
                    change: r,
                    tagName: e,
                    attribName: n,
                    oldValue: i,
                    newValue: o,
                  });
              }
            }
            function y(t, e, n) {
              var i;
              return (
                (i = e + "::" + n),
                t.hasOwnProperty(i)
                  ? t[i]
                  : ((i = "*::" + n), t.hasOwnProperty(i) ? t[i] : void 0)
              );
            }
            function T(e, n) {
              return y(t.LOADERTYPES, e, n);
            }
            function E(e, n) {
              return y(t.URIEFFECTS, e, n);
            }
            function w(e, n, i, o, r) {
              for (var a = 0; a < n.length; a += 2) {
                var s,
                  l = n[a],
                  c = n[a + 1],
                  u = c,
                  h = null;
                if (
                  ((s = e + "::" + l),
                  (t.ATTRIBS.hasOwnProperty(s) ||
                    ((s = "*::" + l), t.ATTRIBS.hasOwnProperty(s))) &&
                    (h = t.ATTRIBS[s]),
                  null !== h)
                )
                  switch (h) {
                    case t.atype.NONE:
                      break;
                    case t.atype.SCRIPT:
                      (c = null), r && b(r, e, l, u, c);
                      break;
                    case t.atype.STYLE:
                      if ("undefined" == typeof S) {
                        (c = null), r && b(r, e, l, u, c);
                        break;
                      }
                      var p = [];
                      S(c, {
                        declaration: function (e, n) {
                          var o = e.toLowerCase(),
                            r = D[o];
                          r &&
                            (k(
                              o,
                              r,
                              n,
                              i
                                ? function (e) {
                                    return v(
                                      e,
                                      t.ueffects.SAME_DOCUMENT,
                                      t.ltypes.SANDBOXED,
                                      { TYPE: "CSS", CSS_PROP: o },
                                      i
                                    );
                                  }
                                : null
                            ),
                            p.push(e + ": " + n.join(" ")));
                        },
                      }),
                        (c = p.length > 0 ? p.join(" ; ") : null),
                        r && b(r, e, l, u, c);
                      break;
                    case t.atype.ID:
                    case t.atype.IDREF:
                    case t.atype.IDREFS:
                    case t.atype.GLOBAL_NAME:
                    case t.atype.LOCAL_NAME:
                    case t.atype.CLASSES:
                      (c = o ? o(c) : c), r && b(r, e, l, u, c);
                      break;
                    case t.atype.URI:
                      (c = v(
                        c,
                        E(e, l),
                        T(e, l),
                        { TYPE: "MARKUP", XML_ATTR: l, XML_TAG: e },
                        i
                      )),
                        r && b(r, e, l, u, c);
                      break;
                    case t.atype.URI_FRAGMENT:
                      c && "#" === c.charAt(0)
                        ? ((c = c.substring(1)),
                          (c = o ? o(c) : c),
                          null !== c && void 0 !== c && (c = "#" + c))
                        : (c = null),
                        r && b(r, e, l, u, c);
                      break;
                    default:
                      (c = null), r && b(r, e, l, u, c);
                  }
                else (c = null), r && b(r, e, l, u, c);
                n[a + 1] = c;
              }
              return n;
            }
            function C(e, n, i) {
              return function (o, r) {
                return t.ELEMENTS[o] & t.eflags.UNSAFE
                  ? (i && b(i, o, void 0, void 0, void 0), void 0)
                  : { attribs: w(o, r, e, n, i) };
              };
            }
            function M(t, e) {
              var n = [];
              return L(e)(t, n), n.join("");
            }
            function x(t, e, n, i) {
              var o = C(e, n, i);
              return M(t, o);
            }
            var S, k, D;
            "undefined" != typeof window &&
              ((S = window.parseCssDeclarations),
              (k = window.sanitizeCssProperty),
              (D = window.cssSchema));
            var H = {
                lt: "<",
                LT: "<",
                gt: ">",
                GT: ">",
                amp: "&",
                AMP: "&",
                quot: '"',
                apos: "'",
                nbsp: " ",
              },
              A = /^#(\d+)$/,
              R = /^#x([0-9A-Fa-f]+)$/,
              O = /^[A-Za-z][A-za-z0-9]+$/,
              U =
                "undefined" != typeof window && window.document
                  ? window.document.createElement("textarea")
                  : null,
              P = /\0/g,
              j = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,
              N = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,
              I = /&/g,
              z = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
              q = /[<]/g,
              F = />/g,
              B = /\"/g,
              J = new RegExp(
                "^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?",
                "i"
              ),
              G = 3 === "a,b".split(/(,)/).length,
              $ = t.eflags.CDATA | t.eflags.RCDATA,
              Z = {},
              Y = {},
              Q = /^(?:https?|mailto|data)$/i,
              V = {};
            return (
              (V.escapeAttrib = V.escapeAttrib = a),
              (V.makeHtmlSanitizer = V.makeHtmlSanitizer = L),
              (V.makeSaxParser = V.makeSaxParser = l),
              (V.makeTagPolicy = V.makeTagPolicy = C),
              (V.normalizeRCData = V.normalizeRCData = s),
              (V.sanitize = V.sanitize = x),
              (V.sanitizeAttribs = V.sanitizeAttribs = w),
              (V.sanitizeWithPolicy = V.sanitizeWithPolicy = M),
              (V.unescapeEntities = V.unescapeEntities = r),
              V
            );
          })(i),
          r = o.sanitize;
        (i.ATTRIBS["*::style"] = 0),
          (i.ELEMENTS.style = 0),
          (i.ATTRIBS["a::target"] = 0),
          (i.ELEMENTS.video = 0),
          (i.ATTRIBS["video::src"] = 0),
          (i.ATTRIBS["video::poster"] = 0),
          (i.ATTRIBS["video::controls"] = 0),
          (i.ELEMENTS.audio = 0),
          (i.ATTRIBS["audio::src"] = 0),
          (i.ATTRIBS["video::autoplay"] = 0),
          (i.ATTRIBS["video::controls"] = 0),
          "undefined" != typeof e && (e.exports = r);
      },
      {},
    ],
    7: [
      function (t, e) {
        e.exports = {
          author: "Mapbox",
          name: "mapbox.js",
          description: "mapbox javascript api",
          version: "1.5.1",
          homepage: "http://mapbox.com/",
          repository: {
            type: "git",
            url: "git://github.com/mapbox/mapbox.js.git",
          },
          main: "index.js",
          dependencies: {
            leaflet: "0.7.1",
            mustache: "0.7.3",
            corslite: "0.0.5",
            json3: "git://github.com/bestiejs/json3.git#v3.2.5a",
            "sanitize-caja": "0.0.0",
            "leaflet-hash": "~0.2.1",
          },
          scripts: {
            test: "jshint src/*.js && mocha-phantomjs test/index.html",
          },
          devDependencies: {
            "leaflet-hash":
              "git://github.com/mlevans/leaflet-hash.git#b039a3aa4e2492a5c7448075172ac26769e601d6",
            "leaflet-fullscreen": "0.0.0",
            "uglify-js": "2.4.3",
            mocha: "1.14.0",
            "expect.js": "0.2.0",
            sinon: "1.7.3",
            "mocha-phantomjs": "3.1.6",
            happen: "0.1.3",
            browserify: "2.35.4",
            jshint: "2.3.0",
          },
          optionalDependencies: {},
          engines: { node: "*" },
        };
      },
      {},
    ],
    8: [
      function (t, e) {
        "use strict";
        e.exports = {
          HTTP_URLS: [
            "http://a.tiles.mapbox.com/v3/",
            "http://b.tiles.mapbox.com/v3/",
            "http://c.tiles.mapbox.com/v3/",
            "http://d.tiles.mapbox.com/v3/",
          ],
          FORCE_HTTPS: !1,
          HTTPS_URLS: [
            "https://a.tiles.mapbox.com/v3/",
            "https://b.tiles.mapbox.com/v3/",
            "https://c.tiles.mapbox.com/v3/",
            "https://d.tiles.mapbox.com/v3/",
          ],
        };
      },
      {},
    ],
    9: [
      function (t, e) {
        "use strict";
        var n = t("./util"),
          i = t("./url"),
          o = t("./request");
        e.exports = function (t) {
          var e,
            r = {};
          return (
            (r.getURL = function () {
              return e;
            }),
            (r.setURL = function (t) {
              return (e = i.jsonify(t)), r;
            }),
            (r.setID = function (t) {
              return (
                n.strict(t, "string"),
                r.setURL(i.base() + t + "/geocode/{query}.json"),
                r
              );
            }),
            (r.setTileJSON = function (t) {
              return n.strict(t, "object"), r.setURL(t.geocoder), r;
            }),
            (r.queryURL = function (t) {
              if ((n.strict(t, "string"), !r.getURL()))
                throw new Error("Geocoding map ID not set");
              return L.Util.template(r.getURL(), {
                query: encodeURIComponent(t),
              });
            }),
            (r.query = function (t, e) {
              return (
                n.strict(t, "string"),
                n.strict(e, "function"),
                o(r.queryURL(t), function (t, i) {
                  if (i && i.results && i.results.length) {
                    var o = {
                      results: i.results,
                      latlng: [i.results[0][0].lat, i.results[0][0].lon],
                    };
                    void 0 !== i.results[0][0].bounds &&
                      ((o.bounds = i.results[0][0].bounds),
                      (o.lbounds = n.lbounds(o.bounds))),
                      e(null, o);
                  } else e(t || !0);
                }),
                r
              );
            }),
            (r.reverseQuery = function (t, e) {
              function n(t) {
                return void 0 !== t.lat && void 0 !== t.lng
                  ? t.lng + "," + t.lat
                  : void 0 !== t.lat && void 0 !== t.lon
                  ? t.lon + "," + t.lat
                  : t[0] + "," + t[1];
              }
              var i = "";
              if (t.length && t[0].length) {
                for (var a = 0, s = []; a < t.length; a++) s.push(n(t[a]));
                i = s.join(";");
              } else i = n(t);
              return (
                o(r.queryURL(i), function (t, n) {
                  e(t, n);
                }),
                r
              );
            }),
            "string" == typeof t
              ? -1 == t.indexOf("/")
                ? r.setID(t)
                : r.setURL(t)
              : "object" == typeof t && r.setTileJSON(t),
            r
          );
        };
      },
      { "./request": 20, "./url": 23, "./util": 24 },
    ],
    10: [
      function (t, e) {
        "use strict";
        var n = t("./geocoder"),
          i = L.Control.extend({
            includes: L.Mixin.Events,
            options: { position: "topleft", keepOpen: !1 },
            initialize: function (t, e) {
              L.Util.setOptions(this, e), (this.geocoder = n(t));
            },
            setURL: function (t) {
              return this.geocoder.setURL(t), this;
            },
            getURL: function () {
              return this.geocoder.getURL();
            },
            setID: function (t) {
              return this.geocoder.setID(t), this;
            },
            setTileJSON: function (t) {
              return this.geocoder.setTileJSON(t), this;
            },
            _toggle: function (t) {
              t && L.DomEvent.stop(t),
                L.DomUtil.hasClass(this._container, "active")
                  ? (L.DomUtil.removeClass(this._container, "active"),
                    (this._results.innerHTML = ""),
                    this._input.blur())
                  : (L.DomUtil.addClass(this._container, "active"),
                    this._input.focus(),
                    this._input.select());
            },
            _closeIfOpen: function () {
              L.DomUtil.hasClass(this._container, "active") &&
                !this.options.keepOpen &&
                (L.DomUtil.removeClass(this._container, "active"),
                (this._results.innerHTML = ""),
                this._input.blur());
            },
            onAdd: function (t) {
              var e = L.DomUtil.create(
                  "div",
                  "leaflet-control-mapbox-geocoder leaflet-bar leaflet-control"
                ),
                n = L.DomUtil.create(
                  "a",
                  "leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder",
                  e
                ),
                i = L.DomUtil.create(
                  "div",
                  "leaflet-control-mapbox-geocoder-results",
                  e
                ),
                o = L.DomUtil.create(
                  "div",
                  "leaflet-control-mapbox-geocoder-wrap",
                  e
                ),
                r = L.DomUtil.create(
                  "form",
                  "leaflet-control-mapbox-geocoder-form",
                  o
                ),
                a = L.DomUtil.create("input", "", r);
              return (
                (n.href = "#"),
                (n.innerHTML = "&nbsp;"),
                (a.type = "text"),
                a.setAttribute("placeholder", "Search"),
                L.DomEvent.addListener(r, "submit", this._geocode, this),
                L.DomEvent.disableClickPropagation(e),
                (this._map = t),
                (this._results = i),
                (this._input = a),
                (this._form = r),
                this.options.keepOpen
                  ? L.DomUtil.addClass(e, "active")
                  : (this._map.on("click", this._closeIfOpen, this),
                    L.DomEvent.addListener(n, "click", this._toggle, this)),
                e
              );
            },
            _geocode: function (t) {
              L.DomEvent.preventDefault(t),
                L.DomUtil.addClass(this._container, "searching");
              var e = this._map,
                n = L.bind(function (t, n) {
                  if (
                    (L.DomUtil.removeClass(this._container, "searching"),
                    !t && n && n.results && n.results.length)
                  ) {
                    if (
                      ((this._results.innerHTML = ""),
                      1 === n.results.length && n.lbounds)
                    )
                      this._map.fitBounds(n.lbounds), this._closeIfOpen();
                    else {
                      for (
                        var i = 0, o = Math.min(n.results.length, 5);
                        o > i;
                        i++
                      ) {
                        for (var r = [], a = 0; a < n.results[i].length; a++)
                          n.results[i][a].name && r.push(n.results[i][a].name);
                        if (r.length) {
                          var s = L.DomUtil.create("a", "", this._results);
                          (s.innerHTML = r.join(", ")),
                            (s.href = "#"),
                            (function (t) {
                              L.DomEvent.addListener(s, "click", function (n) {
                                var i = t[0].bounds;
                                e.fitBounds(
                                  L.latLngBounds([
                                    [i[1], i[0]],
                                    [i[3], i[2]],
                                  ])
                                ),
                                  L.DomEvent.stop(n);
                              });
                            })(n.results[i]);
                        }
                      }
                      if (n.results.length > 5) {
                        var l = L.DomUtil.create("span", "", this._results);
                        l.innerHTML =
                          "Top 5 of " + n.results.length + "  results";
                      }
                    }
                    this.fire("found", n);
                  } else this.fire("error", { error: t });
                }, this);
              this.geocoder.query(this._input.value, n);
            },
          });
        e.exports = function (t, e) {
          return new i(t, e);
        };
      },
      { "./geocoder": 9 },
    ],
    11: [
      function (t, e) {
        "use strict";
        function n(t) {
          return t >= 93 && t--, t >= 35 && t--, t - 32;
        }
        e.exports = function (t) {
          return function (e, i) {
            if (t) {
              var o = n(t.grid[i].charCodeAt(e)),
                r = t.keys[o];
              return t.data[r];
            }
          };
        };
      },
      {},
    ],
    12: [
      function (t, e) {
        "use strict";
        var n = t("./util"),
          i = t("mustache"),
          o = L.Control.extend({
            options: {
              pinnable: !0,
              follow: !1,
              sanitizer: t("sanitize-caja"),
              touchTeaser: !0,
              location: !0,
            },
            _currentContent: "",
            _pinned: !1,
            initialize: function (t, e) {
              L.Util.setOptions(this, e),
                n.strict_instance(t, L.Class, "L.mapbox.gridLayer"),
                (this._layer = t);
            },
            setTemplate: function (t) {
              return n.strict(t, "string"), (this.options.template = t), this;
            },
            _template: function (t, e) {
              if (e) {
                var n =
                  this.options.template || this._layer.getTileJSON().template;
                if (n) {
                  var o = {};
                  return (
                    (o["__" + t + "__"] = !0),
                    this.options.sanitizer(i.to_html(n, L.extend(o, e)))
                  );
                }
              }
            },
            _show: function (t, e) {
              t !== this._currentContent &&
                ((this._currentContent = t),
                this.options.follow
                  ? (this._popup.setContent(t).setLatLng(e.latLng),
                    this._map._popup !== this._popup &&
                      this._popup.openOn(this._map))
                  : ((this._container.style.display = "block"),
                    (this._contentWrapper.innerHTML = t)));
            },
            hide: function () {
              return (
                (this._pinned = !1),
                (this._currentContent = ""),
                this._map.closePopup(),
                (this._container.style.display = "none"),
                (this._contentWrapper.innerHTML = ""),
                L.DomUtil.removeClass(this._container, "closable"),
                this
              );
            },
            _mouseover: function (t) {
              if (
                (t.data
                  ? L.DomUtil.addClass(this._map._container, "map-clickable")
                  : L.DomUtil.removeClass(
                      this._map._container,
                      "map-clickable"
                    ),
                !this._pinned)
              ) {
                var e = this._template("teaser", t.data);
                e ? this._show(e, t) : this.hide();
              }
            },
            _mousemove: function (t) {
              this._pinned ||
                (this.options.follow && this._popup.setLatLng(t.latLng));
            },
            _navigateTo: function (t) {
              window.top.location.href = t;
            },
            _click: function (t) {
              var e = this._template("location", t.data);
              if (this.options.location && e && 0 === e.search(/^https?:/))
                return this._navigateTo(this._template("location", t.data));
              if (this.options.pinnable) {
                var n = this._template("full", t.data);
                !n &&
                  this.options.touchTeaser &&
                  L.Browser.touch &&
                  (n = this._template("teaser", t.data)),
                  n
                    ? (L.DomUtil.addClass(this._container, "closable"),
                      (this._pinned = !0),
                      this._show(n, t))
                    : this._pinned &&
                      (L.DomUtil.removeClass(this._container, "closable"),
                      (this._pinned = !1),
                      this.hide());
              }
            },
            _onPopupClose: function () {
              (this._currentContent = null), (this._pinned = !1);
            },
            _createClosebutton: function (t, e) {
              var n = L.DomUtil.create("a", "close", t);
              return (
                (n.innerHTML = "close"),
                (n.href = "#"),
                (n.title = "close"),
                L.DomEvent.on(n, "click", L.DomEvent.stopPropagation)
                  .on(n, "mousedown", L.DomEvent.stopPropagation)
                  .on(n, "dblclick", L.DomEvent.stopPropagation)
                  .on(n, "click", L.DomEvent.preventDefault)
                  .on(n, "click", e, this),
                n
              );
            },
            onAdd: function (t) {
              this._map = t;
              var e = "leaflet-control-grid map-tooltip",
                n = L.DomUtil.create("div", e),
                i = L.DomUtil.create("div", "map-tooltip-content");
              return (
                (n.style.display = "none"),
                this._createClosebutton(n, this.hide),
                n.appendChild(i),
                (this._contentWrapper = i),
                (this._popup = new L.Popup({ autoPan: !1, closeOnClick: !1 })),
                t.on("popupclose", this._onPopupClose, this),
                L.DomEvent.disableClickPropagation(n).addListener(
                  n,
                  "mousewheel",
                  L.DomEvent.stopPropagation
                ),
                this._layer
                  .on("mouseover", this._mouseover, this)
                  .on("mousemove", this._mousemove, this)
                  .on("click", this._click, this),
                n
              );
            },
            onRemove: function (t) {
              t.off("popupclose", this._onPopupClose, this),
                this._layer
                  .off("mouseover", this._mouseover, this)
                  .off("mousemove", this._mousemove, this)
                  .off("click", this._click, this);
            },
          });
        e.exports = function (t, e) {
          return new o(t, e);
        };
      },
      { "./util": 24, mustache: 4, "sanitize-caja": 5 },
    ],
    13: [
      function (t, e) {
        "use strict";
        var n = t("./util"),
          i = (t("./url"), t("./request")),
          o = t("./grid"),
          r = L.Class.extend({
            includes: [L.Mixin.Events, t("./load_tilejson")],
            options: {
              template: function () {
                return "";
              },
            },
            _mouseOn: null,
            _tilejson: {},
            _cache: {},
            initialize: function (t, e) {
              L.Util.setOptions(this, e), this._loadTileJSON(t);
            },
            _setTileJSON: function (t) {
              return (
                n.strict(t, "object"),
                L.extend(this.options, {
                  grids: t.grids,
                  minZoom: t.minzoom,
                  maxZoom: t.maxzoom,
                  bounds: t.bounds && n.lbounds(t.bounds),
                }),
                (this._tilejson = t),
                (this._cache = {}),
                this._update(),
                this
              );
            },
            getTileJSON: function () {
              return this._tilejson;
            },
            active: function () {
              return !!(
                this._map &&
                this.options.grids &&
                this.options.grids.length
              );
            },
            addTo: function (t) {
              return t.addLayer(this), this;
            },
            onAdd: function (t) {
              (this._map = t),
                this._update(),
                this._map
                  .on("click", this._click, this)
                  .on("mousemove", this._move, this)
                  .on("moveend", this._update, this);
            },
            onRemove: function () {
              this._map
                .off("click", this._click, this)
                .off("mousemove", this._move, this)
                .off("moveend", this._update, this);
            },
            getData: function (t, e) {
              if (this.active()) {
                var n = this._map,
                  i = n.project(t.wrap()),
                  o = 256,
                  r = 4,
                  a = Math.floor(i.x / o),
                  s = Math.floor(i.y / o),
                  l = n.options.crs.scale(n.getZoom()) / o;
                return (
                  (a = (a + l) % l),
                  (s = (s + l) % l),
                  this._getTile(n.getZoom(), a, s, function (t) {
                    var n = Math.floor((i.x - a * o) / r),
                      l = Math.floor((i.y - s * o) / r);
                    e(t(n, l));
                  }),
                  this
                );
              }
            },
            _click: function (t) {
              this.getData(
                t.latlng,
                L.bind(function (e) {
                  this.fire("click", { latLng: t.latlng, data: e });
                }, this)
              );
            },
            _move: function (t) {
              this.getData(
                t.latlng,
                L.bind(function (e) {
                  e !== this._mouseOn
                    ? (this._mouseOn &&
                        this.fire("mouseout", {
                          latLng: t.latlng,
                          data: this._mouseOn,
                        }),
                      this.fire("mouseover", { latLng: t.latlng, data: e }),
                      (this._mouseOn = e))
                    : this.fire("mousemove", { latLng: t.latlng, data: e });
                }, this)
              );
            },
            _getTileURL: function (t) {
              var e = this.options.grids,
                n = (t.x + t.y) % e.length,
                i = e[n];
              return L.Util.template(i, t);
            },
            _update: function () {
              if (this.active()) {
                var t = this._map.getPixelBounds(),
                  e = this._map.getZoom(),
                  n = 256;
                if (!(e > this.options.maxZoom || e < this.options.minZoom))
                  for (
                    var i = new L.Point(
                        Math.floor(t.min.x / n),
                        Math.floor(t.min.y / n)
                      ),
                      o = new L.Point(
                        Math.floor(t.max.x / n),
                        Math.floor(t.max.y / n)
                      ),
                      r = this._map.options.crs.scale(e) / n,
                      a = i.x;
                    a <= o.x;
                    a++
                  )
                    for (var s = i.y; s <= o.y; s++) {
                      var l = (a + r) % r,
                        c = (s + r) % r;
                      this._getTile(e, l, c);
                    }
              }
            },
            _getTile: function (t, e, n, r) {
              var a = t + "_" + e + "_" + n,
                s = L.point(e, n);
              if (((s.z = t), this._tileShouldBeLoaded(s))) {
                if (a in this._cache) {
                  if (!r) return;
                  return (
                    "function" == typeof this._cache[a]
                      ? r(this._cache[a])
                      : this._cache[a].push(r),
                    void 0
                  );
                }
                (this._cache[a] = []),
                  r && this._cache[a].push(r),
                  i(
                    this._getTileURL(s),
                    L.bind(function (t, e) {
                      var n = this._cache[a];
                      this._cache[a] = o(e);
                      for (var i = 0; i < n.length; ++i) n[i](this._cache[a]);
                    }, this)
                  );
              }
            },
            _tileShouldBeLoaded: function (t) {
              if (t.z > this.options.maxZoom || t.z < this.options.minZoom)
                return !1;
              if (this.options.bounds) {
                var e = 256,
                  n = t.multiplyBy(e),
                  i = n.add(new L.Point(e, e)),
                  o = this._map.unproject(n),
                  r = this._map.unproject(i),
                  a = new L.LatLngBounds([o, r]);
                if (!this.options.bounds.intersects(a)) return !1;
              }
              return !0;
            },
          });
        e.exports = function (t, e) {
          return new r(t, e);
        };
      },
      {
        "./grid": 11,
        "./load_tilejson": 16,
        "./request": 20,
        "./url": 23,
        "./util": 24,
      },
    ],
    14: [
      function (t, e) {
        "use strict";
        var n = L.Control.extend({
          options: {
            position: "bottomright",
            sanitizer: t("sanitize-caja"),
            editLink: !1,
          },
          initialize: function (t) {
            L.setOptions(this, t), (this._info = {});
          },
          onAdd: function (t) {
            (this._container = L.DomUtil.create(
              "div",
              "mapbox-control-info mapbox-small"
            )),
              (this._content = L.DomUtil.create(
                "div",
                "map-info-container",
                this._container
              )),
              ("bottomright" === this.options.position ||
                "topright" === this.options.position) &&
                (this._container.className += " mapbox-control-info-right");
            var e = L.DomUtil.create(
              "a",
              "mapbox-info-toggle mapbox-icon mapbox-icon-info",
              this._container
            );
            (e.href = "#"),
              L.DomEvent.addListener(e, "click", this._showInfo, this),
              L.DomEvent.disableClickPropagation(this._container);
            for (var n in t._layers)
              t._layers[n].getAttribution &&
                this.addInfo(t._layers[n].getAttribution());
            return (
              t
                .on("layeradd", this._onLayerAdd, this)
                .on("layerremove", this._onLayerRemove, this),
              this._update(),
              this._container
            );
          },
          onRemove: function (t) {
            t.off("layeradd", this._onLayerAdd).off(
              "layerremove",
              this._onLayerRemove
            );
          },
          addInfo: function (t) {
            return t
              ? (this._info[t] || (this._info[t] = 0),
                this._info[t]++,
                this._update())
              : this;
          },
          removeInfo: function (t) {
            return t
              ? (this._info[t] && this._info[t]--, this._update())
              : this;
          },
          _showInfo: function (t) {
            return (
              L.DomEvent.preventDefault(t),
              this._active === !0
                ? this._hidecontent()
                : (L.DomUtil.addClass(this._container, "active"),
                  (this._active = !0),
                  this._update(),
                  void 0)
            );
          },
          _hidecontent: function () {
            (this._content.innerHTML = ""),
              (this._active = !1),
              L.DomUtil.removeClass(this._container, "active");
          },
          _update: function () {
            if (!this._map) return this;
            this._content.innerHTML = "";
            var t = "none",
              e = [];
            for (var n in this._info)
              this._info.hasOwnProperty(n) &&
                this._info[n] &&
                (e.push(this.options.sanitizer(n)), (t = "block"));
            if (
              ((this._content.innerHTML += e.join(" | ")),
              this.options.editLink && !L.Browser.mobile)
            ) {
              this._content.innerHTML += e.length ? " | " : "";
              var i = L.DomUtil.create("a", "", this._content);
              (i.href = "#"),
                (i.innerHTML = "Improve this map"),
                (i.title = "Edit in OpenStreetMap"),
                L.DomEvent.on(i, "click", L.bind(this._osmlink, this), this);
            }
            return (this._container.style.display = t), this;
          },
          _osmlink: function () {
            var t = this._map.getCenter(),
              e = this._map.getZoom();
            window.open(
              "http://www.openstreetmap.org/edit?zoom=" +
                e +
                "&lat=" +
                t.lat +
                "&lon=" +
                t.lng
            );
          },
          _onLayerAdd: function (t) {
            t.layer.getAttribution && this.addInfo(t.layer.getAttribution()),
              "on" in t.layer &&
                t.layer.getAttribution &&
                t.layer.on(
                  "ready",
                  L.bind(function () {
                    this.addInfo(t.layer.getAttribution());
                  }, this)
                );
          },
          _onLayerRemove: function (t) {
            t.layer.getAttribution && this.removeInfo(t.layer.getAttribution());
          },
        });
        e.exports = function (t) {
          return new n(t);
        };
      },
      { "sanitize-caja": 5 },
    ],
    15: [
      function (t, e) {
        "use strict";
        var n = L.Control.extend({
          options: { position: "bottomright", sanitizer: t("sanitize-caja") },
          initialize: function (t) {
            L.setOptions(this, t), (this._legends = {});
          },
          onAdd: function () {
            return (
              (this._container = L.DomUtil.create(
                "div",
                "map-legends wax-legends"
              )),
              L.DomEvent.disableClickPropagation(this._container),
              this._update(),
              this._container
            );
          },
          addLegend: function (t) {
            return t
              ? (this._legends[t] || (this._legends[t] = 0),
                this._legends[t]++,
                this._update())
              : this;
          },
          removeLegend: function (t) {
            return t
              ? (this._legends[t] && this._legends[t]--, this._update())
              : this;
          },
          _update: function () {
            if (!this._map) return this;
            this._container.innerHTML = "";
            var t = "none";
            for (var e in this._legends)
              if (this._legends.hasOwnProperty(e) && this._legends[e]) {
                var n = L.DomUtil.create(
                  "div",
                  "map-legend wax-legend",
                  this._container
                );
                (n.innerHTML = this.options.sanitizer(e)), (t = "block");
              }
            return (this._container.style.display = t), this;
          },
        });
        e.exports = function (t) {
          return new n(t);
        };
      },
      { "sanitize-caja": 5 },
    ],
    16: [
      function (t, e) {
        "use strict";
        var n = t("./request"),
          i = t("./url"),
          o = t("./util");
        e.exports = {
          _loadTileJSON: function (t) {
            "string" == typeof t
              ? (-1 == t.indexOf("/") && (t = i.base() + t + ".json"),
                n(
                  i.secureFlag(t),
                  L.bind(function (e, n) {
                    e
                      ? (o.log("could not load TileJSON at " + t),
                        this.fire("error", { error: e }))
                      : n && (this._setTileJSON(n), this.fire("ready"));
                  }, this)
                ))
              : t && "object" == typeof t && this._setTileJSON(t);
          },
        };
      },
      { "./request": 20, "./url": 23, "./util": 24 },
    ],
    17: [
      function (t, e) {
        "use strict";
        var n = (t("./util"), t("./tile_layer")),
          i = t("./marker_layer"),
          o = t("./grid_layer"),
          r = t("./grid_control"),
          a = t("./info_control"),
          s = t("./share_control"),
          l = t("./legend_control"),
          c = L.Map.extend({
            includes: [t("./load_tilejson")],
            options: {
              tileLayer: {},
              markerLayer: {},
              gridLayer: {},
              legendControl: {},
              gridControl: {},
              infoControl: {},
              attributionControl: !1,
              shareControl: !1,
            },
            _tilejson: {},
            initialize: function (t, e, c) {
              L.Map.prototype.initialize.call(this, t, c),
                this.attributionControl &&
                  this.attributionControl.setPrefix(""),
                this.options.tileLayer &&
                  ((this.tileLayer = n(void 0, this.options.tileLayer)),
                  this.addLayer(this.tileLayer)),
                this.options.markerLayer &&
                  ((this.markerLayer = i(void 0, this.options.markerLayer)),
                  this.addLayer(this.markerLayer)),
                this.options.gridLayer &&
                  ((this.gridLayer = o(void 0, this.options.gridLayer)),
                  this.addLayer(this.gridLayer)),
                this.options.gridLayer &&
                  this.options.gridControl &&
                  ((this.gridControl = r(
                    this.gridLayer,
                    this.options.gridControl
                  )),
                  this.addControl(this.gridControl)),
                this.options.infoControl &&
                  ((this.infoControl = a(this.options.infoControl)),
                  this.addControl(this.infoControl)),
                this.options.legendControl &&
                  ((this.legendControl = l(this.options.legendControl)),
                  this.addControl(this.legendControl)),
                this.options.shareControl &&
                  ((this.shareControl = s(this.options.shareControl)),
                  this.addControl(this.shareControl)),
                this._loadTileJSON(e);
            },
            addLayer: function (t) {
              return (
                "on" in t &&
                  t.on(
                    "ready",
                    L.bind(function () {
                      this._updateLayer(t);
                    }, this)
                  ),
                L.Map.prototype.addLayer.call(this, t)
              );
            },
            _setTileJSON: function (t) {
              return (this._tilejson = t), this._initialize(t), this;
            },
            getTileJSON: function () {
              return this._tilejson;
            },
            _initialize: function (t) {
              if (
                (this.tileLayer &&
                  (this.tileLayer._setTileJSON(t),
                  this._updateLayer(this.tileLayer)),
                this.markerLayer &&
                  !this.markerLayer.getGeoJSON() &&
                  t.data &&
                  t.data[0] &&
                  this.markerLayer.loadURL(t.data[0]),
                this.gridLayer &&
                  (this.gridLayer._setTileJSON(t),
                  this._updateLayer(this.gridLayer)),
                this.infoControl &&
                  t.attribution &&
                  this.infoControl.addInfo(t.attribution),
                this.legendControl &&
                  t.legend &&
                  this.legendControl.addLegend(t.legend),
                this.shareControl && this.shareControl._setTileJSON(t),
                !this._loaded)
              ) {
                var e = t.center[2],
                  n = L.latLng(t.center[1], t.center[0]);
                this.setView(n, e);
              }
            },
            _updateLayer: function (t) {
              t.options &&
                (this.infoControl &&
                  this._loaded &&
                  this.infoControl.addInfo(t.options.infoControl),
                L.stamp(t) in this._zoomBoundLayers ||
                  (!t.options.maxZoom && !t.options.minZoom) ||
                  (this._zoomBoundLayers[L.stamp(t)] = t),
                this._updateZoomLevels());
            },
          });
        e.exports = function (t, e, n) {
          return new c(t, e, n);
        };
      },
      {
        "./grid_control": 12,
        "./grid_layer": 13,
        "./info_control": 14,
        "./legend_control": 15,
        "./load_tilejson": 16,
        "./marker_layer": 19,
        "./share_control": 21,
        "./tile_layer": 22,
        "./util": 24,
      },
    ],
    18: [
      function (t, e) {
        "use strict";
        function n(t) {
          t = t || {};
          var e = { small: [20, 50], medium: [30, 70], large: [35, 90] },
            n = t["marker-size"] || "medium",
            i = t["marker-symbol"] ? "-" + t["marker-symbol"] : "",
            o = (t["marker-color"] || "7e7e7e").replace("#", "");
          return L.icon({
            iconUrl:
              r.base() +
              "marker/pin-" +
              n.charAt(0) +
              i +
              "+" +
              o +
              (L.Browser.retina ? "@2x" : "") +
              ".png",
            iconSize: e[n],
            iconAnchor: [e[n][0] / 2, e[n][1] / 2],
            popupAnchor: [0, -e[n][1] / 2],
          });
        }
        function i(t, e) {
          return L.marker(e, {
            icon: n(t.properties),
            title: a.strip_tags(s((t.properties && t.properties.title) || "")),
          });
        }
        function o(t, e) {
          if (!t || !t.properties) return "";
          var n = "";
          return (
            t.properties.title &&
              (n +=
                '<div class="marker-title">' + t.properties.title + "</div>"),
            t.properties.description &&
              (n +=
                '<div class="marker-description">' +
                t.properties.description +
                "</div>"),
            (e || s)(n)
          );
        }
        var r = t("./url"),
          a = t("./util"),
          s = t("sanitize-caja");
        e.exports = { icon: n, style: i, createPopup: o };
      },
      { "./url": 23, "./util": 24, "sanitize-caja": 5 },
    ],
    19: [
      function (t, e) {
        "use strict";
        var n = t("./util"),
          i = t("./url"),
          o = t("./request"),
          r = t("./marker"),
          a = L.FeatureGroup.extend({
            options: {
              filter: function () {
                return !0;
              },
              sanitizer: t("sanitize-caja"),
            },
            initialize: function (t, e) {
              L.setOptions(this, e),
                (this._layers = {}),
                "string" == typeof t
                  ? n.idUrl(t, this)
                  : t && "object" == typeof t && this.setGeoJSON(t);
            },
            setGeoJSON: function (t) {
              return (
                (this._geojson = t),
                this.clearLayers(),
                this._initialize(t),
                this
              );
            },
            getGeoJSON: function () {
              return this._geojson;
            },
            loadURL: function (t) {
              return (
                this._request &&
                  "abort" in this._request &&
                  this._request.abort(),
                (t = i.jsonify(t)),
                (this._request = o(
                  t,
                  L.bind(function (e, i) {
                    (this._request = null),
                      e && "abort" !== e.type
                        ? (n.log("could not load markers at " + t),
                          this.fire("error", { error: e }))
                        : i && (this.setGeoJSON(i), this.fire("ready"));
                  }, this)
                )),
                this
              );
            },
            loadID: function (t) {
              return this.loadURL(i.base() + t + "/markers.geojson");
            },
            setFilter: function (t) {
              return (
                (this.options.filter = t),
                this._geojson &&
                  (this.clearLayers(), this._initialize(this._geojson)),
                this
              );
            },
            getFilter: function () {
              return this.options.filter;
            },
            _initialize: function (t) {
              var e,
                n,
                i = L.Util.isArray(t) ? t : t.features;
              if (i)
                for (e = 0, n = i.length; n > e; e++)
                  (i[e].geometries || i[e].geometry || i[e].features) &&
                    this._initialize(i[e]);
              else if (this.options.filter(t)) {
                var o = L.GeoJSON.geometryToLayer(t, r.style),
                  a = r.createPopup(t, this.options.sanitizer);
                (o.feature = t),
                  a && o.bindPopup(a, { closeButton: !1 }),
                  this.addLayer(o);
              }
            },
          });
        e.exports = function (t, e) {
          return new a(t, e);
        };
      },
      {
        "./marker": 18,
        "./request": 20,
        "./url": 23,
        "./util": 24,
        "sanitize-caja": 5,
      },
    ],
    20: [
      function (t, e) {
        var n = t("corslite"),
          i = t("json3"),
          o = t("./util").strict;
        e.exports = function (t, e) {
          "use strict";
          function r(t, n) {
            !t &&
              n &&
              (n =
                "g" == n.responseText[0]
                  ? i.parse(
                      n.responseText.substring(5, n.responseText.length - 2)
                    )
                  : i.parse(n.responseText)),
              e(t, n);
          }
          return o(t, "string"), o(e, "function"), n(t, r);
        };
      },
      { "./util": 24, corslite: 2, json3: 3 },
    ],
    21: [
      function (t, e) {
        "use strict";
        var n = t("./url"),
          i = L.Control.extend({
            includes: [t("./load_tilejson")],
            options: { position: "topleft", url: "" },
            initialize: function (t, e) {
              L.setOptions(this, e), this._loadTileJSON(t);
            },
            _setTileJSON: function (t) {
              this._tilejson = t;
            },
            onAdd: function (t) {
              (this._map = t), (this._url = n);
              var e = L.DomUtil.create(
                  "div",
                  "leaflet-control-mapbox-share leaflet-bar"
                ),
                i = L.DomUtil.create(
                  "a",
                  "mapbox-share mapbox-icon mapbox-icon-share",
                  e
                );
              return (
                (i.href = "#"),
                (this._modal = t._createPane(
                  "mapbox-modal",
                  this._map._container
                )),
                (this._mask = t._createPane("mapbox-modal-mask", this._modal)),
                (this._content = t._createPane(
                  "mapbox-modal-content",
                  this._modal
                )),
                L.DomEvent.addListener(i, "click", this._shareClick, this),
                L.DomEvent.disableClickPropagation(e),
                this._map.on("mousedown", this._clickOut, this),
                e
              );
            },
            _clickOut: function (t) {
              return this._sharing
                ? (L.DomEvent.preventDefault(t),
                  L.DomUtil.removeClass(this._modal, "active"),
                  (this._content.innerHTML = ""),
                  (this._sharing = null),
                  void 0)
                : void 0;
            },
            _shareClick: function (t) {
              if ((L.DomEvent.stop(t), this._sharing)) return this._clickOut(t);
              var e = this._tilejson || this._map._tilejson || {},
                n = encodeURIComponent(
                  this.options.url || e.webpage || window.location
                ),
                i = encodeURIComponent(e.name),
                o =
                  this._url.base() +
                  e.id +
                  "/" +
                  this._map.getCenter().lng +
                  "," +
                  this._map.getCenter().lat +
                  "," +
                  this._map.getZoom() +
                  "/600x600.png",
                r = "//twitter.com/intent/tweet?status=" + i + " " + n,
                a =
                  "//www.facebook.com/sharer.php?u=" +
                  n +
                  "&t=" +
                  encodeURIComponent(e.name),
                s =
                  "//www.pinterest.com/pin/create/button/?url=" +
                  n +
                  "&media=" +
                  o +
                  "&description=" +
                  e.name,
                l =
                  "<h3>Share this map</h3><div class='mapbox-share-buttons'><a class='mapbox-button mapbox-button-icon mapbox-icon-facebook' target='_blank' href='{{facebook}}'>Facebook</a><a class='mapbox-button mapbox-button-icon mapbox-icon-twitter' target='_blank' href='{{twitter}}'>Twitter</a><a class='mapbox-button mapbox-button-icon mapbox-icon-pinterest' target='_blank' href='{{pinterest}}'>Pinterest</a></div>"
                    .replace("{{twitter}}", r)
                    .replace("{{facebook}}", a)
                    .replace("{{pinterest}}", s),
                c =
                  '<iframe width="100%" height="500px" frameBorder="0" src="{{embed}}"></iframe>'.replace(
                    "{{embed}}",
                    e.embed || window.location
                  ),
                u =
                  "Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.";
              L.DomUtil.addClass(this._modal, "active"),
                (this._sharing = this._map._createPane(
                  "mapbox-modal-body",
                  this._content
                )),
                (this._sharing.innerHTML = l);
              var h = L.DomUtil.create("input", "mapbox-embed", this._sharing);
              (h.type = "text"), (h.value = c);
              var p = L.DomUtil.create(
                "label",
                "mapbox-embed-description",
                this._sharing
              );
              p.innerHTML = u;
              var f = L.DomUtil.create(
                "a",
                "leaflet-popup-close-button",
                this._sharing
              );
              (f.href = "#"),
                L.DomEvent.disableClickPropagation(this._sharing),
                L.DomEvent.addListener(f, "click", this._clickOut, this),
                L.DomEvent.addListener(h, "click", function (t) {
                  t.target.focus(), t.target.select();
                });
            },
          });
        e.exports = function (t, e) {
          return new i(t, e);
        };
      },
      { "./load_tilejson": 16, "./url": 23 },
    ],
    22: [
      function (t, e) {
        "use strict";
        var n = t("./util"),
          i =
            (t("./url"),
            L.TileLayer.extend({
              includes: [t("./load_tilejson")],
              options: { format: "png" },
              formats: [
                "png",
                "png32",
                "png64",
                "png128",
                "png256",
                "jpg70",
                "jpg80",
                "jpg90",
              ],
              scalePrefix: "@2x.",
              initialize: function (t, e) {
                L.TileLayer.prototype.initialize.call(this, void 0, e),
                  (this._tilejson = {}),
                  e &&
                    e.detectRetina &&
                    L.Browser.retina &&
                    e.retinaVersion &&
                    (t = e.retinaVersion),
                  e && e.format && n.strict_oneof(e.format, this.formats),
                  this._loadTileJSON(t);
              },
              setFormat: function (t) {
                return (
                  n.strict(t, "string"),
                  (this.options.format = t),
                  this.redraw(),
                  this
                );
              },
              _autoScale: function () {
                return (
                  this.options &&
                  L.Browser.retina &&
                  this.options.detectRetina &&
                  !this.options.retinaVersion &&
                  this.options.autoscale
                );
              },
              setUrl: null,
              _setTileJSON: function (t) {
                return (
                  n.strict(t, "object"),
                  L.extend(this.options, {
                    tiles: t.tiles,
                    attribution: t.attribution,
                    minZoom: t.minzoom,
                    maxZoom: t.maxzoom,
                    autoscale: t.autoscale || !1,
                    tms: "tms" === t.scheme,
                    bounds: t.bounds && n.lbounds(t.bounds),
                  }),
                  (this._tilejson = t),
                  this.redraw(),
                  this
                );
              },
              getTileJSON: function () {
                return this._tilejson;
              },
              getTileUrl: function (t) {
                var e = this.options.tiles,
                  n = Math.floor(Math.abs(t.x + t.y) % e.length),
                  i = e[n],
                  o = L.Util.template(i, t);
                return o
                  ? o.replace(
                      ".png",
                      (this._autoScale() ? this.scalePrefix : ".") +
                        this.options.format
                    )
                  : o;
              },
              _update: function () {
                this.options.tiles && L.TileLayer.prototype._update.call(this);
              },
            }));
        e.exports = function (t, e) {
          return new i(t, e);
        };
      },
      { "./load_tilejson": 16, "./url": 23, "./util": 24 },
    ],
    23: [
      function (t, e) {
        "use strict";
        var n = t("./config");
        e.exports = {
          isSSL: function () {
            return "https:" === document.location.protocol || n.FORCE_HTTPS;
          },
          base: function (t) {
            var e = this.isSSL() ? n.HTTPS_URLS : n.HTTP_URLS;
            return void 0 === t || "number" != typeof t
              ? e[0]
              : e[t % e.length];
          },
          secureFlag: function (t) {
            return this.isSSL()
              ? t.match(/(\?|&)secure/)
                ? t
                : -1 !== t.indexOf("?")
                ? t + "&secure"
                : t + "?secure"
              : t;
          },
          jsonify: function (t) {
            return t.replace(/\.(geo)?jsonp(?=$|\?)/, ".$1json");
          },
        };
      },
      { "./config": 8 },
    ],
    24: [
      function (t, e) {
        "use strict";
        e.exports = {
          idUrl: function (t, e) {
            -1 == t.indexOf("/") ? e.loadID(t) : e.loadURL(t);
          },
          log: function (t) {
            console && "function" == typeof console.error && console.error(t);
          },
          strict: function (t, e) {
            if (typeof t !== e)
              throw new Error("Invalid argument: " + e + " expected");
          },
          strict_instance: function (t, e, n) {
            if (!(t instanceof e))
              throw new Error("Invalid argument: " + n + " expected");
          },
          strict_oneof: function (t, e) {
            if (-1 == e.indexOf(t))
              throw new Error(
                "Invalid argument: " +
                  t +
                  " given, valid values are " +
                  e.join(", ")
              );
          },
          strip_tags: function (t) {
            return t.replace(/<[^<]+>/g, "");
          },
          lbounds: function (t) {
            return new L.LatLngBounds([
              [t[1], t[0]],
              [t[3], t[2]],
            ]);
          },
        };
      },
      {},
    ],
  },
  {},
  [1]
);
