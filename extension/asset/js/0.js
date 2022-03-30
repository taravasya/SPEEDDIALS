! function(e) {
    var t = {};

    function a(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, o) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (a.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) a.d(o, n, function(t) {
                return e[t]
            }.bind(null, n));
        return o
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "/", a(a.s = 418)
}([, , , function(e, t, a) {
    "use strict";

    function o(e, t) {
        return chrome.i18n.getMessage(e, t)
    }

    function n() {
        return chrome.i18n.getUILanguage()
    }

    function r() {
        return "zh-CN" === n()
    }
    a.d(t, "a", (function() {
        return o
    })), a.d(t, "b", (function() {
        return n
    })), a.d(t, "c", (function() {
        return r
    }))
}, function(e, t, a) {
    "use strict";
    a.d(t, "lb", (function() {
        return c
    })), a.d(t, "X", (function() {
        return s
    })), a.d(t, "mc", (function() {
        return d
    })), a.d(t, "a", (function() {
        return u
    })), a.d(t, "Gb", (function() {
        return l
    })), a.d(t, "Cb", (function() {
        return p
    })), a.d(t, "lc", (function() {
        return h
    })), a.d(t, "ub", (function() {
        return f
    })), a.d(t, "hc", (function() {
        return b
    })), a.d(t, "Wb", (function() {
        return m
    })), a.d(t, "S", (function() {
        return g
    })), a.d(t, "O", (function() {
        return k
    })), a.d(t, "hb", (function() {
        return y
    })), a.d(t, "ib", (function() {
        return w
    })), a.d(t, "pb", (function() {
        return S
    })), a.d(t, "Q", (function() {
        return v
    })), a.d(t, "R", (function() {
        return T
    })), a.d(t, "Kb", (function() {
        return I
    })), a.d(t, "Mb", (function() {
        return B
    })), a.d(t, "ab", (function() {
        return O
    })), a.d(t, "db", (function() {
        return P
    })), a.d(t, "Nb", (function() {
        return C
    })), a.d(t, "Ob", (function() {
        return _
    })), a.d(t, "wb", (function() {
        return M
    })), a.d(t, "xb", (function() {
        return j
    })), a.d(t, "zb", (function() {
        return R
    })), a.d(t, "Bb", (function() {
        return x
    })), a.d(t, "L", (function() {
        return N
    })), a.d(t, "M", (function() {
        return U
    })), a.d(t, "Ib", (function() {
        return q
    })), a.d(t, "Jb", (function() {
        return A
    })), a.d(t, "ic", (function() {
        return D
    })), a.d(t, "kc", (function() {
        return L
    })), a.d(t, "cc", (function() {
        return E
    })), a.d(t, "dc", (function() {
        return V
    })), a.d(t, "ac", (function() {
        return G
    })), a.d(t, "bc", (function() {
        return F
    })), a.d(t, "qb", (function() {
        return J
    })), a.d(t, "tb", (function() {
        return W
    })), a.d(t, "Ub", (function() {
        return $
    })), a.d(t, "Vb", (function() {
        return z
    })), a.d(t, "Eb", (function() {
        return H
    })), a.d(t, "Fb", (function() {
        return K
    })), a.d(t, "Y", (function() {
        return X
    })), a.d(t, "Z", (function() {
        return Y
    })), a.d(t, "rb", (function() {
        return Q
    })), a.d(t, "bb", (function() {
        return Z
    })), a.d(t, "nb", (function() {
        return ee
    })), a.d(t, "fb", (function() {
        return te
    })), a.d(t, "eb", (function() {
        return ae
    })), a.d(t, "Xb", (function() {
        return oe
    })), a.d(t, "t", (function() {
        return ne
    })), a.d(t, "u", (function() {
        return re
    })), a.d(t, "v", (function() {
        return ie
    })), a.d(t, "l", (function() {
        return ce
    })), a.d(t, "m", (function() {
        return se
    })), a.d(t, "n", (function() {
        return de
    })), a.d(t, "o", (function() {
        return ue
    })), a.d(t, "g", (function() {
        return le
    })), a.d(t, "h", (function() {
        return pe
    })), a.d(t, "i", (function() {
        return he
    })), a.d(t, "j", (function() {
        return fe
    })), a.d(t, "k", (function() {
        return be
    })), a.d(t, "p", (function() {
        return me
    })), a.d(t, "q", (function() {
        return ge
    })), a.d(t, "r", (function() {
        return ke
    })), a.d(t, "s", (function() {
        return ye
    })), a.d(t, "c", (function() {
        return we
    })), a.d(t, "d", (function() {
        return Se
    })), a.d(t, "e", (function() {
        return ve
    })), a.d(t, "f", (function() {
        return Te
    })), a.d(t, "B", (function() {
        return Ie
    })), a.d(t, "C", (function() {
        return Be
    })), a.d(t, "D", (function() {
        return Oe
    })), a.d(t, "E", (function() {
        return Pe
    })), a.d(t, "F", (function() {
        return Ce
    })), a.d(t, "G", (function() {
        return _e
    })), a.d(t, "H", (function() {
        return Me
    })), a.d(t, "I", (function() {
        return je
    })), a.d(t, "J", (function() {
        return Re
    })), a.d(t, "w", (function() {
        return xe
    })), a.d(t, "x", (function() {
        return Ne
    })), a.d(t, "y", (function() {
        return Ue
    })), a.d(t, "z", (function() {
        return qe
    })), a.d(t, "A", (function() {
        return Ae
    })), a.d(t, "P", (function() {
        return De
    })), a.d(t, "T", (function() {
        return Le
    })), a.d(t, "fc", (function() {
        return Ee
    })), a.d(t, "K", (function() {
        return Ve
    })), a.d(t, "gc", (function() {
        return Ge
    })), a.d(t, "ec", (function() {
        return Fe
    })), a.d(t, "Ab", (function() {
        return Je
    })), a.d(t, "yb", (function() {
        return We
    })), a.d(t, "ob", (function() {
        return $e
    })), a.d(t, "gb", (function() {
        return ze
    })), a.d(t, "V", (function() {
        return He
    })), a.d(t, "Pb", (function() {
        return Ke
    })), a.d(t, "Rb", (function() {
        return Xe
    })), a.d(t, "Sb", (function() {
        return Ye
    })), a.d(t, "Qb", (function() {
        return Qe
    })), a.d(t, "Tb", (function() {
        return Ze
    })), a.d(t, "U", (function() {
        return et
    })), a.d(t, "jb", (function() {
        return tt
    })), a.d(t, "b", (function() {
        return at
    })), a.d(t, "W", (function() {
        return ot
    })), a.d(t, "kb", (function() {
        return nt
    })), a.d(t, "Hb", (function() {
        return rt
    })), a.d(t, "N", (function() {
        return it
    })), a.d(t, "Lb", (function() {
        return ct
    })), a.d(t, "vb", (function() {
        return st
    })), a.d(t, "mb", (function() {
        return dt
    })), a.d(t, "cb", (function() {
        return ut
    })), a.d(t, "sb", (function() {
        return lt
    })), a.d(t, "jc", (function() {
        return pt
    })), a.d(t, "Db", (function() {
        return ht
    })), a.d(t, "Yb", (function() {
        return ft
    })), a.d(t, "Zb", (function() {
        return bt
    }));
    var o = a(3),
        n = a(19),
        r = a(5),
        i = a(11);
    const c = navigator.platform.toLowerCase().includes("mac"),
        s = chrome.runtime.id,
        d = "https://www.monknow.com",
        u = "https://dynamic-api.monknow.com",
        l = "https://static.monknow.com",
        p = "https://static-api.monknow.com",
        h = "wss://socket.monknow.com",
        f = "https://search-api.monknow.com",
        b = "https://weather-api.monknow.com",
        m = 200,
        g = "app__dark-theme",
        k = "app__bright-theme",
        y = 120,
        w = "--icon__size",
        S = 72,
        v = "commonStore",
        T = 1,
        I = "tempCommonStore",
        B = 1,
        O = "iconsStore",
        P = 6,
        C = "tempIconsStore",
        _ = 1,
        M = "sidebarStore",
        j = 2,
        R = "standbyPageStore",
        x = 1,
        N = "backgroundStore",
        U = 1,
        q = "tempBackgroundStore",
        A = 1,
        D = "weatherStore",
        L = 1,
        E = "userStore",
        V = 2,
        G = "userNeedBackupFlagsStore",
        F = 2,
        J = "searcherStore",
        W = 6,
        $ = "todosStore",
        z = 1,
        H = "staticCleanerStore",
        K = 1,
        X = "gaStore",
        Y = 1,
        Q = "searcherUpdaterStore",
        Z = "iconsUpdaterStore",
        ee = [{
            text: Object(o.a)("current_tab"),
            value: n.a.CurrentTab
        }, {
            text: Object(o.a)("new_tab"),
            value: n.a.NewTab
        }, {
            text: Object(o.a)("background_tab"),
            value: n.a.BackgroundTab
        }],
        te = [{
            text: Object(o.a)("popular"),
            value: 24
        }, {
            text: Object(o.a)("shopping"),
            value: 9
        }, {
            text: Object(o.a)("social"),
            value: 10
        }, {
            text: Object(o.a)("entertainment"),
            value: 26
        }, {
            text: Object(o.a)("news_and_reading"),
            value: 13
        }, {
            text: Object(o.a)("productivity"),
            value: 14
        }, {
            text: Object(o.a)("internal_app"),
            value: 25
        }, {
            text: Object(o.a)("graphic"),
            value: 15
        }, {
            text: Object(o.a)("lifestyle"),
            value: 16
        }, {
            text: Object(o.a)("travel"),
            value: 17
        }, {
            text: Object(o.a)("technology_and_education"),
            value: 19
        }, {
            text: Object(o.a)("finance"),
            value: 20
        }],
        ae = {
            text: Object(o.a)("add_manually"),
            value: -1
        },
        oe = "long",
        ne = "app__searcher__0",
        re = "app__searcher__1",
        ie = "app__searcher__2",
        ce = "app__particular-icon__label__0",
        se = "app__particular-icon__label__1",
        de = "app__particular-icon__label__2",
        ue = "app__particular-icon__label__3",
        le = "app__particular-icon__desc__0",
        pe = "app__particular-icon__desc__1",
        he = "app__particular-icon__desc__2",
        fe = "app__particular-icon__desc__3",
        be = "app__particular-icon__desc__4",
        me = "app__particular-icon__space__0",
        ge = "app__particular-icon__space__1",
        ke = "app__particular-icon__space__2",
        ye = "app__particular-icon__space__3",
        we = "app__particular-icon__badge__0",
        Se = "app__particular-icon__badge__1",
        ve = "app__particular-icon__badge__2",
        Te = "app__particular-icon__badge__3",
        Ie = "app__simple-icon__label__0",
        Be = "app__simple-icon__label__1",
        Oe = "app__simple-icon__label__2",
        Pe = "app__simple-icon__label__3",
        Ce = "app__simple-icon__label__4",
        _e = "app__simple-icon__space__0",
        Me = "app__simple-icon__space__1",
        je = "app__simple-icon__space__2",
        Re = "app__simple-icon__space__3",
        xe = "app__simple-icon__badge__0",
        Ne = "app__simple-icon__badge__1",
        Ue = "app__simple-icon__badge__2",
        qe = "app__simple-icon__badge__3",
        Ae = "app__simple-icon__badge__4",
        De = {
            type: r.a.Pure,
            data: "#808080"
        },
        Le = {
            type: r.a.Pure,
            data: "#333436"
        },
        Ee = [{
            text: Object(o.a)("natural"),
            value: 8
        }, {
            text: Object(o.a)("people"),
            value: 11
        }, {
            text: Object(o.a)("animal"),
            value: 12
        }, {
            text: Object(o.a)("architecture"),
            value: 13
        }, {
            text: Object(o.a)("anime"),
            value: 9
        }],
        Ve = [{
            text: Object(o.a)("never"),
            value: 0
        }, {
            text: 30 + Object(o.a)("minute_unit"),
            value: 1800
        }, {
            text: 1 + Object(o.a)("hour_unit"),
            value: 3600
        }, {
            text: 6 + Object(o.a)("hour_unit"),
            value: 21600
        }, {
            text: 12 + Object(o.a)("hour_unit"),
            value: 43200
        }, {
            text: 24 + Object(o.a)("hour_unit"),
            value: 86400
        }],
        Ge = {
            width: 210,
            height: 120
        },
        Fe = 40,
        Je = 600,
        We = [{
            text: Object(o.a)("never"),
            value: 0
        }, {
            text: 30 + Object(o.a)("second_unit"),
            value: 30
        }, {
            text: 1 + Object(o.a)("minute_unit"),
            value: 60
        }, {
            text: 5 + Object(o.a)("minute_unit"),
            value: 300
        }, {
            text: 10 + Object(o.a)("minute_unit"),
            value: 600
        }, {
            text: 30 + Object(o.a)("minute_unit"),
            value: 1800
        }, {
            text: 1 + Object(o.a)("hour_unit"),
            value: 3600
        }],
        $e = [{
            type: r.a.Pure,
            data: "#ee3b3b"
        }, {
            type: r.a.Pure,
            data: "#fcb138"
        }, {
            type: r.a.Pure,
            data: "#85d724"
        }, {
            type: r.a.Pure,
            data: "#16d9c4"
        }, {
            type: r.a.Pure,
            data: "#276ce6"
        }, {
            type: r.a.Pure,
            data: "#9326e9"
        }, {
            type: r.a.Pure,
            data: "#333333"
        }, Object(i.b)()],
        ze = [l + "/newtab/icon-group/61df5dde-0afd-4104-9b87-418bd62f95df.svg", l + "/newtab/icon-group/5664820e-0e6e-4040-9fa8-7a7491a5f2b8.svg", l + "/newtab/icon-group/dcc802e4-874f-4ac5-bbe0-dbda5428265d.svg", l + "/newtab/icon-group/9ac2df78-617e-4090-85ea-e68caf566a47.svg", l + "/newtab/icon-group/69e6f555-cff1-42fe-9f8e-677381c04cd3.svg", l + "/newtab/icon-group/3cea0df9-aa97-4d00-9a7a-a576c6805c6b.svg", l + "/newtab/icon-group/15cb3663-ba77-44f6-91ab-2ded15fdec30.svg", l + "/newtab/icon-group/989dee8d-8d2d-4bef-bb5a-ff4c10499353.svg", l + "/newtab/icon-group/abb98f16-8bd4-4c76-9c30-55c91afad96b.svg", l + "/newtab/icon-group/e38a7f4d-b22e-4ee5-8220-b236ac317756.svg"],
        He = [{
            text: Object(o.a)("celsius") + "°C",
            value: !1
        }, {
            text: Object(o.a)("fahrenheit") + "°F",
            value: !0
        }],
        Ke = {
            text: Object(o.a)("all"),
            value: 1
        },
        Xe = {
            text: Object(o.a)("important"),
            value: 2
        },
        Ye = {
            text: Object(o.a)("uncompleted"),
            value: 3
        },
        Qe = {
            text: Object(o.a)("completed"),
            value: 4
        },
        Ze = 255,
        et = "Guest",
        tt = 50,
        at = 1e4,
        ot = 6e5,
        nt = 5e3,
        rt = 4e3,
        it = 3e3,
        ct = 432e5,
        st = 800,
        dt = 3e3,
        ut = 288e5,
        lt = 288e5,
        pt = 216e5,
        ht = 5e3,
        ft = 1e4,
        bt = 432e5
}, function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.Pure = "pure"
    }(o || (o = {})), t.a = o
}, function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.Image = "image", e.Text = "text"
    }(o || (o = {})), t.a = o
}, function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.Png = "image/png", e.Jpeg = "image/jpeg", e.Svg = "image/svg+xml", e.Gif = "image/gif"
    }(o || (o = {})), t.a = o
}, function(e, t, a) {
    var o = a(145),
        n = a(146);
    e.exports = function(e, t, a) {
        var r = t && a || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var i = (e = e || {}).random || (e.rng || o)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
            for (var c = 0; c < 16; ++c) t[r + c] = i[c];
        return t || n(i)
    }
}, , function(e, t, a) {
    "use strict";
    a.d(t, "l", (function() {
        return o
    })), a.d(t, "B", (function() {
        return n
    })), a.d(t, "t", (function() {
        return r
    })), a.d(t, "N", (function() {
        return i
    })), a.d(t, "J", (function() {
        return c
    })), a.d(t, "O", (function() {
        return s
    })), a.d(t, "j", (function() {
        return d
    })), a.d(t, "b", (function() {
        return u
    })), a.d(t, "z", (function() {
        return l
    })), a.d(t, "q", (function() {
        return p
    })), a.d(t, "G", (function() {
        return h
    })), a.d(t, "i", (function() {
        return f
    })), a.d(t, "a", (function() {
        return b
    })), a.d(t, "y", (function() {
        return m
    })), a.d(t, "x", (function() {
        return g
    })), a.d(t, "p", (function() {
        return k
    })), a.d(t, "F", (function() {
        return y
    })), a.d(t, "m", (function() {
        return w
    })), a.d(t, "d", (function() {
        return S
    })), a.d(t, "C", (function() {
        return v
    })), a.d(t, "k", (function() {
        return T
    })), a.d(t, "c", (function() {
        return I
    })), a.d(t, "A", (function() {
        return B
    })), a.d(t, "r", (function() {
        return O
    })), a.d(t, "M", (function() {
        return P
    })), a.d(t, "H", (function() {
        return C
    })), a.d(t, "u", (function() {
        return _
    })), a.d(t, "K", (function() {
        return M
    })), a.d(t, "s", (function() {
        return j
    })), a.d(t, "g", (function() {
        return R
    })), a.d(t, "I", (function() {
        return x
    })), a.d(t, "o", (function() {
        return N
    })), a.d(t, "f", (function() {
        return U
    })), a.d(t, "E", (function() {
        return q
    })), a.d(t, "n", (function() {
        return A
    })), a.d(t, "e", (function() {
        return D
    })), a.d(t, "D", (function() {
        return L
    })), a.d(t, "w", (function() {
        return E
    })), a.d(t, "v", (function() {
        return V
    })), a.d(t, "h", (function() {
        return G
    })), a.d(t, "L", (function() {
        return F
    }));
    const o = "getInitialModel",
        n = "reloadInitialModel",
        r = "getUserModel",
        i = "backupUserModel",
        c = "reloadUserModel",
        s = "websocketBroadcastUserBasicDataUpdated",
        d = "getCommonModel",
        u = "backupCommonModel",
        l = "reloadCommonModel",
        p = "getTempCommonModel",
        h = "reloadTempCommonModel",
        f = "getBackgroundModel",
        b = "backupBackgroundModel",
        m = "reloadBackgroundModel",
        g = "nextLibBackgroundWallpaper",
        k = "getTempBackgroundModel",
        y = "reloadTempBackgroundModel",
        w = "getSearcherModel",
        S = "backupSearcherModel",
        v = "reloadSearcherModel",
        T = "getIconsModel",
        I = "backupIconsModel",
        B = "reloadIconsModel",
        O = "getTempIconsModel",
        P = "setTempIconsModel",
        C = "reloadTempIconsModel",
        _ = "getWeatherModel",
        M = "reloadWeatherModel",
        j = "getTodosModel",
        R = "backupTodosModel",
        x = "reloadTodosModel",
        N = "getStandbyPageModel",
        U = "backupStandbyPageModel",
        q = "reloadStandbyPageModel",
        A = "getSidebarModel",
        D = "backupSidebarModel",
        L = "reloadSidebarModel",
        E = "logout",
        V = "login",
        G = "deleteUserStatics",
        F = "sendGaEvent"
}, function(e, t, a) {
    "use strict";
    a.d(t, "g", (function() {
        return i
    })), a.d(t, "h", (function() {
        return c
    })), a.d(t, "k", (function() {
        return s
    })), a.d(t, "m", (function() {
        return d
    })), a.d(t, "c", (function() {
        return u
    })), a.d(t, "e", (function() {
        return l
    })), a.d(t, "a", (function() {
        return p
    })), a.d(t, "n", (function() {
        return h
    })), a.d(t, "i", (function() {
        return f
    })), a.d(t, "j", (function() {
        return b
    })), a.d(t, "b", (function() {
        return m
    })), a.d(t, "f", (function() {
        return g
    })), a.d(t, "l", (function() {
        return k
    })), a.d(t, "d", (function() {
        return y
    }));
    var o = a(5),
        n = a(4),
        r = a(54);

    function i(e, t, a) {
        return `rgba(${e}, ${(t.minPercentage+(t.maxPercentage-t.minPercentage)*a/100)/100})`
    }

    function c(e, t) {
        const a = e.slice(1),
            o = a.length;
        let n = null;
        if (3 === o ? n = [a[0] + a[0], a[1] + a[1], a[2] + a[2]] : 6 === o && (n = [a[0] + a[1], a[2] + a[3], a[4] + a[5]]), null !== n) return `rgba(${parseInt(n[0],16)}, ${parseInt(n[1],16)}, ${parseInt(n[2],16)}, ${t}%)`
    }

    function s(e) {
        return e.type === o.a.Pure && d(e.data)
    }

    function d(e) {
        return "transparent" === e
    }

    function u(e) {
        const t = {};
        switch (e.type) {
            case o.a.Pure:
                t.backgroundColor = e.data
        }
        return t
    }

    function l(e) {
        return e.type === o.a.Pure ? e.data : "transparent"
    }

    function p(e) {
        let t;
        switch (e.type) {
            case o.a.Pure:
                t = {
                    type: o.a.Pure,
                    data: e.data
                };
                break;
            default:
                t = Object(r.a)(e)
        }
        return t
    }

    function h() {
        const e = n.ob.length;
        for (;;) {
            const t = Math.floor(Math.random() * e),
                a = n.ob[t];
            if (!s(a)) return p(a)
        }
    }

    function f(e) {
        return e.type === o.a.Pure && void 0 !== n.ob.find(t => t.data === e.data)
    }

    function b(e, t) {
        return e.type === t.type && e.type === o.a.Pure && e.data === t.data
    }

    function m() {
        return {
            type: o.a.Pure,
            data: "transparent"
        }
    }

    function g(e) {
        return e.type !== o.a.Pure ? "" : e.data
    }

    function k(e) {
        switch (e) {
            case "tran":
            case "trans":
            case "transp":
            case "transpa":
            case "transpar":
            case "transpare":
            case "transparen":
            case "transparent":
                return !0;
            default:
                return !1
        }
    }

    function y(e) {
        let t = null;
        switch (e = e.toLowerCase()) {
            case "tran":
            case "trans":
            case "transp":
            case "transpa":
            case "transpar":
            case "transpare":
            case "transparen":
            case "transparent":
                t = "transparent";
                break;
            case "alice blue":
            case "aliceblue":
                t = "#f0f8ff";
                break;
            case "antique white":
            case "antiquewhite":
                t = "#faebd7";
                break;
            case "aqua":
                t = "#00ffff";
                break;
            case "aquamarine":
                t = "#7fffd4";
                break;
            case "azure":
                t = "#f0ffff";
                break;
            case "beige":
                t = "#f5f5dc";
                break;
            case "bisque":
                t = "#ffe4c4";
                break;
            case "black":
                t = "#000000";
                break;
            case "blanched almond":
            case "blanchedalmond":
                t = "#ffebcd";
                break;
            case "blue":
                t = "#0000ff";
                break;
            case "blue violet":
            case "blueviolet":
                t = "#8a2be2";
                break;
            case "brown":
                t = "#a52a2a";
                break;
            case "burlywood":
                t = "#deb887";
                break;
            case "cadet blue":
            case "cadetblue":
                t = "#5f9ea0";
                break;
            case "chartreuse":
                t = "#7fff00";
                break;
            case "chocolate":
                t = "#d2691e";
                break;
            case "coral":
                t = "#ff7f50";
                break;
            case "cornflower blue":
            case "cornflowerblue":
                t = "#6495ed";
                break;
            case "cornsilk":
                t = "#fff8dc";
                break;
            case "crimson":
                t = "#dc143c";
                break;
            case "cyan":
                t = "#00ffff";
                break;
            case "dark blue":
            case "darkblue":
                t = "#00008b";
                break;
            case "dark cyan":
            case "darkcyan":
                t = "#008b8b";
                break;
            case "dark goldenrod":
            case "darkgoldenrod":
                t = "#b8860b";
                break;
            case "dark gray":
            case "darkgray":
                t = "#a9a9a9";
                break;
            case "dark green":
            case "darkgreen":
                t = "#006400";
                break;
            case "dark khaki":
            case "darkkhaki":
                t = "#bdb76b";
                break;
            case "dark magenta":
            case "darkmagenta":
                t = "#8b008b";
                break;
            case "dark olive green":
            case "darkolivegreen":
                t = "#556b2f";
                break;
            case "dark orange":
            case "darkorange":
                t = "#ff8c00";
                break;
            case "dark orchid":
            case "darkorchid":
                t = "#9932cc";
                break;
            case "dark red":
            case "darkred":
                t = "#8b0000";
                break;
            case "dark salmon":
            case "darksalmon":
                t = "#e9967a";
                break;
            case "dark sea green":
            case "darkseagreen":
                t = "#8fbc8f";
                break;
            case "dark slate blue":
            case "darkslateblue":
                t = "#483d8b";
                break;
            case "dark slate gray":
            case "darkslategray":
                t = "#2f4f4f";
                break;
            case "dark turquoise":
            case "darkturquoise":
                t = "#00ced1";
                break;
            case "dark violet":
            case "darkviolet":
                t = "#9400d3";
                break;
            case "deep pink":
            case "deeppink":
                t = "#ff1493";
                break;
            case "deep sky blue":
            case "deepskyblue":
                t = "#00bfff";
                break;
            case "dim gray":
            case "dimgray":
                t = "#696969";
                break;
            case "dodger blue":
            case "dodgerblue":
                t = "#1e90ff";
                break;
            case "firebrick":
                t = "#b22222";
                break;
            case "floral white":
            case "floralwhite":
                t = "#fffaf0";
                break;
            case "forest green":
            case "forestgreen":
                t = "#228b22";
                break;
            case "fuchsia":
                t = "#ff00ff";
                break;
            case "gainsboro":
                t = "#dcdcdc";
                break;
            case "ghost white":
            case "ghostwhite":
                t = "#f8f8ff";
                break;
            case "gold":
                t = "#ffd700";
                break;
            case "goldenrod":
                t = "#daa520";
                break;
            case "gray":
                t = "#bebebe";
                break;
            case "web gray":
            case "webgray":
                t = "#808080";
                break;
            case "green":
                t = "#00ff00";
                break;
            case "web green":
            case "webgreen":
                t = "#008000";
                break;
            case "green yellow":
            case "greenyellow":
                t = "#adff2f";
                break;
            case "honeydew":
                t = "#f0fff0";
                break;
            case "hot pink":
            case "hotpink":
                t = "#ff69b4";
                break;
            case "indian red":
            case "indianred":
                t = "#cd5c5c";
                break;
            case "indigo":
                t = "#4b0082";
                break;
            case "ivory":
                t = "#fffff0";
                break;
            case "khaki":
                t = "#f0e68c";
                break;
            case "lavender":
                t = "#e6e6fa";
                break;
            case "lavender blush":
            case "lavenderblush":
                t = "#fff0f5";
                break;
            case "lawn green":
            case "lawngreen":
                t = "#7cfc00";
                break;
            case "lemon chiffon":
            case "lemonchiffon":
                t = "#fffacd";
                break;
            case "light blue":
            case "lightblue":
                t = "#add8e6";
                break;
            case "light coral":
            case "lightcoral":
                t = "#f08080";
                break;
            case "light cyan":
            case "lightcyan":
                t = "#e0ffff";
                break;
            case "light goldenrod":
            case "lightgoldenrod":
                t = "#fafad2";
                break;
            case "light gray":
            case "lightgray":
                t = "#d3d3d3";
                break;
            case "light green":
            case "lightgreen":
                t = "#90ee90";
                break;
            case "light pink":
            case "lightpink":
                t = "#ffb6c1";
                break;
            case "light salmon":
            case "lightsalmon":
                t = "#ffa07a";
                break;
            case "light sea green":
            case "lightseagreen":
                t = "#20b2aa";
                break;
            case "light sky blue":
            case "lightskyblue":
                t = "#87cefa";
                break;
            case "light slate gray":
            case "lightslategray":
                t = "#778899";
                break;
            case "light steel blue":
            case "lightsteelblue":
                t = "#b0c4de";
                break;
            case "light yellow":
            case "lightyellow":
                t = "#ffffe0";
                break;
            case "lime":
                t = "#00ff00";
                break;
            case "lime green":
            case "limegreen":
                t = "#32cd32";
                break;
            case "linen":
                t = "#faf0e6";
                break;
            case "magenta":
                t = "#ff00ff";
                break;
            case "maroon":
                t = "#b03060";
                break;
            case "web maroon":
            case "webmaroon":
                t = "#800000";
                break;
            case "medium aquamarine":
            case "mediumaquamarine":
                t = "#66cdaa";
                break;
            case "medium blue":
            case "mediumblue":
                t = "#0000cd";
                break;
            case "medium orchid":
            case "mediumorchid":
                t = "#ba55d3";
                break;
            case "medium purple":
            case "mediumpurple":
                t = "#9370db";
                break;
            case "medium sea green":
            case "mediumseagreen":
                t = "#3cb371";
                break;
            case "medium slate blue":
            case "mediumslateblue":
                t = "#7b68ee";
                break;
            case "medium spring green":
            case "mediumspringgreen":
                t = "#00fa9a";
                break;
            case "medium turquoise":
            case "mediumturquoise":
                t = "#48d1cc";
                break;
            case "medium violet red":
            case "mediumvioletred":
                t = "#c71585";
                break;
            case "midnight blue":
            case "midnightblue":
                t = "#191970";
                break;
            case "mint cream":
            case "mintcream":
                t = "#f5fffa";
                break;
            case "misty rose":
            case "mistyrose":
                t = "#ffe4e1";
                break;
            case "moccasin":
                t = "#ffe4b5";
                break;
            case "navajo white":
            case "navajowhite":
                t = "#ffdead";
                break;
            case "navy blue":
            case "navyblue":
                t = "#000080";
                break;
            case "old lace":
            case "oldlace":
                t = "#fdf5e6";
                break;
            case "olive":
                t = "#808000";
                break;
            case "olive drab":
            case "olivedrab":
                t = "#6b8e23";
                break;
            case "orange":
                t = "#ffa500";
                break;
            case "orange red":
            case "orangered":
                t = "#ff4500";
                break;
            case "orchid":
                t = "#da70d6";
                break;
            case "pale goldenrod":
            case "palegoldenrod":
                t = "#eee8aa";
                break;
            case "pale green":
            case "palegreen":
                t = "#98fb98";
                break;
            case "pale turquoise":
            case "paleturquoise":
                t = "#afeeee";
                break;
            case "pale violet red":
            case "palevioletred":
                t = "#db7093";
                break;
            case "papaya whip":
            case "papayawhip":
                t = "#ffefd5";
                break;
            case "peach puff":
            case "peachpuff":
                t = "#ffdab9";
                break;
            case "peru":
                t = "#cd853f";
                break;
            case "pink":
                t = "#ffc0cb";
                break;
            case "plum":
                t = "#dda0dd";
                break;
            case "powder blue":
            case "powderblue":
                t = "#b0e0e6";
                break;
            case "purple":
                t = "#a020f0";
                break;
            case "web purple":
            case "webpurple":
                t = "#800080";
                break;
            case "rebecca purple":
            case "rebeccapurple":
                t = "#663399";
                break;
            case "red":
                t = "#ff0000";
                break;
            case "rosy brown":
            case "rosybrown":
                t = "#bc8f8f";
                break;
            case "royal blue":
            case "royalblue":
                t = "#4169e1";
                break;
            case "saddle brown":
            case "saddlebrown":
                t = "#8b4513";
                break;
            case "salmon":
                t = "#fa8072";
                break;
            case "sandy brown":
            case "sandybrown":
                t = "#f4a460";
                break;
            case "sea green":
            case "seagreen":
                t = "#2e8b57";
                break;
            case "seashell":
                t = "#fff5ee";
                break;
            case "sienna":
                t = "#a0522d";
                break;
            case "silver":
                t = "#c0c0c0";
                break;
            case "sky blue":
            case "skyblue":
                t = "#87ceeb";
                break;
            case "slate blue":
            case "slateblue":
                t = "#6a5acd";
                break;
            case "slate gray":
            case "slategray":
                t = "#708090";
                break;
            case "snow":
                t = "#fffafa";
                break;
            case "spring green":
            case "springgreen":
                t = "#00ff7f";
                break;
            case "steel blue":
            case "steelblue":
                t = "#4682b4";
                break;
            case "tan":
                t = "#d2b48c";
                break;
            case "teal":
                t = "#008080";
                break;
            case "thistle":
                t = "#d8bfd8";
                break;
            case "tomato":
                t = "#ff6347";
                break;
            case "turquoise":
                t = "#40e0d0";
                break;
            case "violet":
                t = "#ee82ee";
                break;
            case "wheat":
                t = "#f5deb3";
                break;
            case "white":
                t = "#ffffff";
                break;
            case "white smoke":
            case "whitesmoke":
                t = "#f5f5f5";
                break;
            case "yellow":
                t = "#ffff00";
                break;
            case "yellow green":
            case "yellowgreen":
                t = "#9acd32"
        }
        if (null !== t) return {
            type: o.a.Pure,
            data: t
        };
        switch (e.startsWith("#") && (e = e.slice(1)), e.length) {
            case 3:
                if (/^[0-9a-f]{3}$/.test(e)) return {
                    type: o.a.Pure,
                    data: `#${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`
                };
                break;
            case 6:
                if (/^[0-9a-f]{6}$/.test(e)) return {
                    type: o.a.Pure,
                    data: "#" + e
                }
        }
        return null
    }
}, function(e, t, a) {
    "use strict";
    async function o({
        command: e,
        data: t,
        hasResponse: a
    }) {
        const o = {
            command: e,
            data: t
        };
        if (a) return new Promise(e => {
            chrome.runtime.sendMessage(o, e)
        });
        chrome.runtime.sendMessage(o)
    }
    a.d(t, "a", (function() {
        return o
    }))
}, , function(e, t, a) {
    "use strict";
    a.d(t, "d", (function() {
        return n
    })), a.d(t, "c", (function() {
        return r
    })), a.d(t, "b", (function() {
        return i
    })), a.d(t, "f", (function() {
        return c
    })), a.d(t, "h", (function() {
        return s
    })), a.d(t, "a", (function() {
        return d
    })), a.d(t, "g", (function() {
        return u
    })), a.d(t, "e", (function() {
        return l
    }));
    var o = a(24);

    function n(e) {
        return e.uploaded ? e.data : `data:${e.mimeType};base64,${e.data}`
    }

    function r(e) {
        const t = /^data:(.+)(?=;base64,)/.exec(e);
        if (null === t || 2 !== t.length) throw new o.a(500, "convert dataUrl to image failed");
        return {
            uploaded: !1,
            isOfficial: !1,
            mimeType: t[1],
            data: e.slice(t[0].length + ";base64,".length)
        }
    }

    function i(e) {
        return {
            isOfficial: e.isOfficial,
            uploaded: e.uploaded,
            mimeType: e.mimeType,
            data: e.data
        }
    }
    async function c(e) {
        const t = document.createElement("img");
        return t.setAttribute("crossorigin", "anonymous"), t.style.cssText = "postion: absolute; opacity: 0; pointer-events: none;", t.src = n(e), document.body.appendChild(t), await new Promise(e => {
            t.addEventListener("load", e, {
                once: !0
            })
        }), t
    }
    async function s(e, t, a) {
        const {
            mimeType: n
        } = e, i = await c(e), s = i.width, d = i.height;
        let u, l;
        if ("stretch" === t) u = s, l = d;
        else {
            if (void 0 === a.width || void 0 === a.height) throw new o.a(500, t + " resize need both width and height");
            const e = a.width / s,
                n = a.height / d;
            let r;
            r = "cover" === t ? Math.max(e, n) : Math.min(e, n), u = Math.ceil(s * r), l = Math.ceil(d * r)
        }
        const p = document.createElement("canvas");
        p.width = u, p.height = l;
        const h = p.getContext("2d");
        if (null === h) throw new o.a(500, "can not get canvas context");
        return h.drawImage(i, 0, 0, u, l), document.body.removeChild(i), r(p.toDataURL(n))
    }
    async function d(e, t) {
        const {
            mimeType: a
        } = e, n = await c(e), i = n.offsetWidth, s = n.offsetHeight, d = document.createElement("canvas");
        d.width = i, d.height = s;
        const u = d.getContext("2d");
        if (null === u) throw new o.a(500, "can not get canvas context");
        return u.filter = `blur(${t}px)`, u.drawImage(n, -t, -t, i + 2 * t, s + 2 * t), document.body.removeChild(n), r(d.toDataURL(a))
    }

    function u(e) {
        const t = atob(e.data),
            a = [];
        for (var o = 0; o < t.length; o++) a.push(t.charCodeAt(o));
        return new Blob([new Uint8Array(a)], {
            type: e.mimeType
        })
    }

    function l(e) {
        return e.uploaded && !e.isOfficial ? [e.data] : []
    }
}, , function(e, t, a) {
    e.exports = a(129)
}, function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.Bright = "bright", e.Dark = "dark", e.Auto = "auto"
    }(o || (o = {})), t.a = o
}, function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return i
    })), a.d(t, "a", (function() {
        return c
    }));
    var o = a(20),
        n = a(27),
        r = a(4);

    function i(e) {
        let t;
        if (e.data.type === o.a.Visitor) {
            if (null === e.data.token) throw Object(n.b)();
            t = e.data.token
        } else t = e.data.token;
        return t
    }

    function c(e) {
        let t;
        switch (e.data.type) {
            case o.a.Visitor:
                t = {
                    lastBackupCommonTime: e.data.lastBackupCommonTime,
                    lastBackupBackgroundTime: e.data.lastBackupBackgroundTime,
                    lastBackupIconsTime: e.data.lastBackupIconsTime,
                    lastBackupStandbyPageTime: e.data.lastBackupStandbyPageTime,
                    lastBackupSidebarTime: e.data.lastBackupSidebarTime,
                    lastBackupSearcherTime: e.data.lastBackupSearcherTime,
                    lastBackupTodosTime: e.data.lastBackupTodosTime,
                    type: o.a.Visitor,
                    nickname: e.data.nickname,
                    token: e.data.token,
                    portraitSrc: e.data.portraitSrc,
                    inited: e.data.inited
                };
                break;
            case o.a.Email:
                t = {
                    lastBackupCommonTime: e.data.lastBackupCommonTime,
                    lastBackupBackgroundTime: e.data.lastBackupBackgroundTime,
                    lastBackupIconsTime: e.data.lastBackupIconsTime,
                    lastBackupStandbyPageTime: e.data.lastBackupStandbyPageTime,
                    lastBackupSidebarTime: e.data.lastBackupSidebarTime,
                    lastBackupSearcherTime: e.data.lastBackupSearcherTime,
                    lastBackupTodosTime: e.data.lastBackupTodosTime,
                    type: o.a.Email,
                    nickname: e.data.nickname,
                    token: e.data.token,
                    portraitSrc: e.data.portraitSrc,
                    email: e.data.email
                }
        }
        return {
            version: r.dc,
            data: t
        }
    }
}, function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.CurrentTab = "currentTab", e.NewTab = "newTab", e.BackgroundTab = "backgroundTab", e.NewWindow = "newWindow", e.NewIncognitoWindow = "newIncognitoWindow"
    }(o || (o = {})), t.a = o
}, function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.Visitor = "visitor", e.Email = "email", e.Weixin = "weixin"
    }(o || (o = {})), t.a = o
}, function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.Common = "common", e.Background = "background", e.Icons = "icons", e.StandbyPage = "standby", e.Sidebar = "sidebar", e.Searcher = "searcher", e.Todos = "todos"
    }(o || (o = {})), t.a = o
}, , function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.Color = "color", e.Local = "local", e.Lib = "lib"
    }(o || (o = {})), t.a = o
}, function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return o
    }));
    class o extends Error {
        constructor(e, t) {
            super(t), this.code = e
        }
    }
}, , function(e, t, a) {
    "use strict";
    a.d(t, "m", (function() {
        return g
    })), a.d(t, "a", (function() {
        return k
    })), a.d(t, "x", (function() {
        return y
    })), a.d(t, "y", (function() {
        return w
    })), a.d(t, "k", (function() {
        return S
    })), a.d(t, "n", (function() {
        return v
    })), a.d(t, "l", (function() {
        return T
    })), a.d(t, "q", (function() {
        return B
    })), a.d(t, "o", (function() {
        return O
    })), a.d(t, "r", (function() {
        return P
    })), a.d(t, "v", (function() {
        return C
    })), a.d(t, "u", (function() {
        return _
    })), a.d(t, "t", (function() {
        return M
    })), a.d(t, "w", (function() {
        return j
    })), a.d(t, "c", (function() {
        return x
    })), a.d(t, "b", (function() {
        return N
    })), a.d(t, "d", (function() {
        return U
    })), a.d(t, "g", (function() {
        return q
    })), a.d(t, "f", (function() {
        return A
    })), a.d(t, "e", (function() {
        return D
    })), a.d(t, "h", (function() {
        return L
    })), a.d(t, "s", (function() {
        return E
    })), a.d(t, "A", (function() {
        return V
    })), a.d(t, "z", (function() {
        return G
    })), a.d(t, "B", (function() {
        return F
    })), a.d(t, "p", (function() {
        return J
    })), a.d(t, "j", (function() {
        return W
    })), a.d(t, "C", (function() {
        return $
    })), a.d(t, "i", (function() {
        return z
    }));
    var o = a(16),
        n = a.n(o),
        r = a(4),
        i = a(21),
        c = a(18),
        s = a(24),
        d = a(59),
        u = a(20),
        l = a(96),
        p = a(64),
        h = a(42),
        f = a(97),
        b = a(98),
        m = a(79);
    async function g() {
        return {
            version: r.dc,
            data: {
                lastBackupCommonTime: 0,
                lastBackupBackgroundTime: 0,
                lastBackupIconsTime: 0,
                lastBackupStandbyPageTime: 0,
                lastBackupSidebarTime: 0,
                lastBackupSearcherTime: 0,
                lastBackupTodosTime: 0,
                inited: !1,
                type: u.a.Visitor,
                nickname: "",
                portraitSrc: null,
                token: null
            }
        }
    }
    async function k(e) {
        const {
            version: t
        } = e;
        return t < r.dc && t <= 1 && void 0 === e.data.lastBackupTodosTime && (e.data.lastBackupTodosTime = 0), e.version = r.dc, e
    }
    async function y() {
        return (await n()({
            url: r.a + "/home/setup",
            method: "get"
        })).data.data.secret
    }
    async function w(e, {
        email: t,
        password: a
    }, o) {
        await n()({
            url: r.a + "/user/register",
            method: "post",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                email: t,
                password: a,
                key: o.token,
                captcha: o.code
            }
        })
    }
    async function S(e, t) {
        await n()({
            url: r.a + "/home/sendmail",
            method: "get",
            headers: {
                secret: Object(c.b)(e)
            },
            params: {
                email: t,
                event: "resetPwd"
            }
        })
    }
    async function v(e, {
        email: t,
        password: a
    }) {
        const o = (await n()({
            url: r.a + "/user/login",
            method: "post",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                email: t,
                password: a
            }
        })).data;
        return {
            needBackup: 0 === o.data.isBackup,
            user: {
                token: o.data.secret,
                nickname: o.data.name,
                portraitSrc: o.data.avatar || null,
                email: t
            }
        }
    }
    async function T(e, t, a) {
        const o = (await n()({
            url: r.a + "/user/data/fullbackup",
            method: "post",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                secret: t,
                name: e.data.nickname,
                common: JSON.stringify(a.common),
                background: JSON.stringify(a.background),
                searcher: JSON.stringify(a.searcher),
                icons: JSON.stringify(a.icons),
                standby: JSON.stringify(a.standbyPage),
                sidebar: JSON.stringify(a.sidebar),
                todos: JSON.stringify(a.todos)
            }
        })).data;
        return {
            common: {
                lastBackupTime: 1e3 * o.data.commonUpdatedAt,
                data: a.common
            },
            background: {
                lastBackupTime: 1e3 * o.data.backgroundUpdatedAt,
                data: a.background
            },
            searcher: {
                lastBackupTime: 1e3 * o.data.searcherUpdatedAt,
                data: a.searcher
            },
            icons: {
                lastBackupTime: 1e3 * o.data.iconsUpdatedAt,
                data: a.icons
            },
            sidebar: {
                lastBackupTime: 1e3 * o.data.sidebarUpdatedAt,
                data: a.sidebar
            },
            standbyPage: {
                lastBackupTime: 1e3 * o.data.standbyUpdatedAt,
                data: a.standbyPage
            },
            todos: {
                lastBackupTime: 1e3 * o.data.todosUpdatedAt,
                data: a.todos
            }
        }
    }
    async function I(e, t) {
        let a;
        a = "string" == typeof e ? e : Object(c.b)(e);
        const o = (await n()({
            url: r.a + "/user/data/info",
            method: "get",
            headers: {
                secret: a
            },
            params: {
                type: t
            }
        })).data;
        if (void 0 === o.data.updatedAt || void 0 === o.data.data) throw new s.a(404, "not found");
        return {
            lastBackupTime: 1e3 * o.data.updatedAt,
            data: JSON.parse(o.data.data)
        }
    }
    async function B(e) {
        const t = await I(e, i.a.Common);
        return t.data = await Object(l.a)(t.data), t
    }
    async function O(e) {
        const t = await I(e, i.a.Background);
        return t.data = await Object(p.a)(t.data), t
    }
    async function P(e) {
        const t = await I(e, i.a.Icons);
        return t.data = await Object(h.a)(t.data), t
    }
    async function C(e) {
        const t = await I(e, i.a.StandbyPage);
        return t.data = await Object(f.a)(t.data), t
    }
    async function _(e) {
        const t = await I(e, i.a.Sidebar);
        return t.data = await Object(b.a)(t.data), t
    }
    async function M(e) {
        const t = await I(e, i.a.Searcher);
        return t.data = await Object(d.a)(t.data), t
    }
    async function j(e) {
        let t;
        try {
            t = await I(e, i.a.Todos), t.data = await Object(m.a)(t.data)
        } catch (e) {
            if (!(e instanceof s.a && 404 === e.code)) throw e;
            t = {
                lastBackupTime: 0,
                data: await Object(m.b)()
            }
        }
        return t
    }
    async function R(e, t, a) {
        return 1e3 * (await n()({
            url: r.a + "/user/data/update",
            method: "put",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                type: t,
                data: JSON.stringify(a)
            }
        })).data.data.updatedAt
    }
    async function x(e, t) {
        return R(e, i.a.Common, t)
    }
    async function N(e, t) {
        return R(e, i.a.Background, t)
    }
    async function U(e, t) {
        return R(e, i.a.Icons, t)
    }
    async function q(e, t) {
        return R(e, i.a.StandbyPage, t)
    }
    async function A(e, t) {
        return R(e, i.a.Sidebar, t)
    }
    async function D(e, t) {
        return R(e, i.a.Searcher, t)
    }
    async function L(e, t) {
        return R(e, i.a.Todos, t)
    }
    async function E(e) {
        const t = (await n()({
                url: r.a + "/user/data/all",
                method: "get",
                headers: {
                    secret: Object(c.b)(e)
                }
            })).data,
            a = {};
        for (const e of t.data) a[e.type] = 1e3 * e.updatedAt;
        return {
            common: a[i.a.Common] || 0,
            background: a[i.a.Background] || 0,
            icons: a[i.a.Icons] || 0,
            standbyPage: a[i.a.StandbyPage] || 0,
            sidebar: a[i.a.Sidebar] || 0,
            searcher: a[i.a.Searcher] || 0,
            todos: a[i.a.Todos] || 0
        }
    }
    async function V(e, t) {
        await n()({
            url: r.a + "/user/changename",
            method: "put",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                name: t
            }
        })
    }
    async function G(e, t, a) {
        await n()({
            url: r.a + "/user/changepwd",
            method: "put",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                old: t,
                new: a
            }
        })
    }
    async function F(e, t) {
        if (!t.uploaded) throw new s.a(500, "image not uploaded");
        await n()({
            url: r.a + "/user/changeavatar",
            method: "put",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                avatar: t.data
            }
        })
    }
    async function J(e) {
        const t = (await n()({
            url: r.a + "/user/info",
            method: "get",
            headers: {
                secret: Object(c.b)(e)
            }
        })).data;
        return {
            nickname: t.data.name,
            portraitSrc: t.data.avatar || null
        }
    }
    async function W(e, t) {
        await n()({
            url: r.a + "/home/s3del",
            method: "delete",
            headers: {
                secret: e
            },
            data: {
                key: t
            }
        })
    }
    async function $(e) {
        e.data.type === u.a.Visitor && await n()({
            url: r.a + "/user/visitAt",
            method: "post",
            headers: {
                secret: Object(c.b)(e)
            }
        })
    }
    async function z(e) {
        e.data.type === u.a.Visitor && await n()({
            url: r.a + "/user/data/del",
            method: "delete",
            headers: {
                secret: Object(c.b)(e)
            }
        })
    }
}, function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return i
    })), a.d(t, "a", (function() {
        return c
    })), a.d(t, "c", (function() {
        return s
    })), a.d(t, "d", (function() {
        return d
    }));
    var o = a(24),
        n = a(3),
        r = a(4);

    function i() {
        return new o.a(400, "user token missing")
    }

    function c() {
        return new o.a(400, "location missing")
    }

    function s(e) {
        let t = null;
        if (e instanceof o.a) {
            t = e.code
        } else if (!0 === e.isAxiosError) {
            const a = e;
            if (void 0 !== a.response) {
                const {
                    response: e
                } = a;
                t = e.status;
                const {
                    url: o
                } = a.config;
                void 0 !== o && o.startsWith(r.a) && "number" == typeof e.data.code && 0 !== e.data.code && (t = e.data.code)
            }
        }
        return t
    }

    function d(e, t) {
        const a = s(e);
        if (null === a) return Object(n.a)("network_error");
        return Object.assign({
            500: Object(n.a)("server_error")
        }, t)[a] || Object(n.a)("server_error")
    }
}, , function(e, t, a) {
    "use strict";
    var o = a(88),
        n = a(130),
        r = Object.prototype.toString;

    function i(e) {
        return "[object Array]" === r.call(e)
    }

    function c(e) {
        return null !== e && "object" == typeof e
    }

    function s(e) {
        return "[object Function]" === r.call(e)
    }

    function d(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), i(e))
                for (var a = 0, o = e.length; a < o; a++) t.call(null, e[a], a, e);
            else
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
    }
    e.exports = {
        isArray: i,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === r.call(e)
        },
        isBuffer: n,
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: c,
        isUndefined: function(e) {
            return void 0 === e
        },
        isDate: function(e) {
            return "[object Date]" === r.call(e)
        },
        isFile: function(e) {
            return "[object File]" === r.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === r.call(e)
        },
        isFunction: s,
        isStream: function(e) {
            return c(e) && s(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: d,
        merge: function e() {
            var t = {};

            function a(a, o) {
                "object" == typeof t[o] && "object" == typeof a ? t[o] = e(t[o], a) : t[o] = a
            }
            for (var o = 0, n = arguments.length; o < n; o++) d(arguments[o], a);
            return t
        },
        deepMerge: function e() {
            var t = {};

            function a(a, o) {
                "object" == typeof t[o] && "object" == typeof a ? t[o] = e(t[o], a) : t[o] = "object" == typeof a ? e({}, a) : a
            }
            for (var o = 0, n = arguments.length; o < n; o++) d(arguments[o], a);
            return t
        },
        extend: function(e, t, a) {
            return d(t, (function(t, n) {
                e[n] = a && "function" == typeof t ? o(t, a) : t
            })), e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, , function(e, t, a) {
    "use strict";
    a.d(t, "c", (function() {
        return s
    })), a.d(t, "f", (function() {
        return d
    })), a.d(t, "a", (function() {
        return u
    })), a.d(t, "b", (function() {
        return l
    })), a.d(t, "d", (function() {
        return p
    })), a.d(t, "e", (function() {
        return h
    })), a.d(t, "g", (function() {
        return f
    }));
    var o = a(11),
        n = a(17),
        r = a(6),
        i = a(14),
        c = a(54);

    function s(e) {
        const {
            groups: t
        } = e.data;
        return 0 === t.length ? null : t[0]
    }

    function d(e, t) {
        if (t.setting.rememberLastVisitedGroup) {
            const {
                lastSelectIconGroupUuid: t
            } = e.data;
            if (null !== t) return t
        }
        return s(t)
    }

    function u(e) {
        let t;
        switch (e.type) {
            case r.a.Image:
                t = {
                    uuid: e.uuid,
                    type: e.type,
                    icoSrc: Object(i.b)(e.icoSrc),
                    icoScalePercentage: e.icoScalePercentage,
                    url: e.url,
                    label: e.label,
                    id: e.id,
                    desc: e.desc,
                    backgroundColor: Object(o.a)(e.backgroundColor)
                };
                break;
            case r.a.Text:
                t = {
                    uuid: e.uuid,
                    type: e.type,
                    icoText: e.icoText,
                    url: e.url,
                    label: e.label,
                    id: e.id,
                    desc: e.desc,
                    backgroundColor: Object(o.a)(e.backgroundColor)
                };
                break;
            default:
                t = Object(c.a)(e)
        }
        return t
    }

    function l(e) {
        return {
            uuid: e.uuid,
            label: e.label,
            icoSrc: e.icoSrc,
            data: e.data.slice(0)
        }
    }

    function p(e, t, a) {
        const r = Object(o.e)(t);
        let i, c = void 0;
        switch (e) {
            case n.a.Bright:
                i = !Object(o.m)(r) && "#fff" !== r && "#ffffff" !== r;
                break;
            case n.a.Dark:
                i = !Object(o.m)(r)
        }
        return i && r.startsWith("#") && (c = Object(o.h)(r, a)), c
    }

    function h(e) {
        return e.type === r.a.Image ? Object(i.e)(e.icoSrc) : []
    }

    function f(e) {
        const {
            groupDict: t,
            iconDict: a
        } = e.data;
        for (const e in t) {
            const o = t[e];
            o.data = o.data.filter(e => void 0 !== a[e])
        }
    }
}, function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.Simple = "simple", e.Particular = "particular"
    }(o || (o = {})), t.a = o
}, function(e, t, a) {
    "use strict";

    function o() {}
    a.d(t, "a", (function() {
        return o
    }))
}, , , function(e, t, a) {
    "use strict";
    a.d(t, "d", (function() {
        return r
    })), a.d(t, "b", (function() {
        return i
    })), a.d(t, "c", (function() {
        return c
    })), a.d(t, "a", (function() {
        return s
    }));
    var o = a(17),
        n = a(4);

    function r(e) {
        let t;
        switch (e) {
            case o.a.Bright:
                t = n.O;
                break;
            case o.a.Dark:
                t = n.S
        }
        return t
    }

    function i(e) {
        let t;
        switch (e) {
            case o.a.Bright:
                t = 1;
                break;
            case o.a.Dark:
                t = 2
        }
        return t
    }

    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? o.a.Dark : o.a.Bright
    }

    function s(e, t) {
        switch (e) {
            case o.a.Bright:
            case o.a.Dark:
                return e;
            case o.a.Auto:
                return void 0 === t ? c() : t;
            default:
                return o.a.Bright
        }
    }
}, , , , function(e, t, a) {
    (function(t) {
        var a = /^\s+|\s+$/g,
            o = /^[-+]0x[0-9a-f]+$/i,
            n = /^0b[01]+$/i,
            r = /^0o[0-7]+$/i,
            i = parseInt,
            c = "object" == typeof t && t && t.Object === Object && t,
            s = "object" == typeof self && self && self.Object === Object && self,
            d = c || s || Function("return this")(),
            u = Object.prototype.toString,
            l = Math.max,
            p = Math.min,
            h = function() {
                return d.Date.now()
            };

        function f(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function b(e) {
            if ("number" == typeof e) return e;
            if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return !!e && "object" == typeof e
                    }(e) && "[object Symbol]" == u.call(e)
                }(e)) return NaN;
            if (f(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = f(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(a, "");
            var c = n.test(e);
            return c || r.test(e) ? i(e.slice(2), c ? 2 : 8) : o.test(e) ? NaN : +e
        }
        e.exports = function(e, t, a) {
            var o, n, r, i, c, s, d = 0,
                u = !1,
                m = !1,
                g = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");

            function k(t) {
                var a = o,
                    r = n;
                return o = n = void 0, d = t, i = e.apply(r, a)
            }

            function y(e) {
                return d = e, c = setTimeout(S, t), u ? k(e) : i
            }

            function w(e) {
                var a = e - s;
                return void 0 === s || a >= t || a < 0 || m && e - d >= r
            }

            function S() {
                var e = h();
                if (w(e)) return v(e);
                c = setTimeout(S, function(e) {
                    var a = t - (e - s);
                    return m ? p(a, r - (e - d)) : a
                }(e))
            }

            function v(e) {
                return c = void 0, g && o ? k(e) : (o = n = void 0, i)
            }

            function T() {
                var e = h(),
                    a = w(e);
                if (o = arguments, n = this, s = e, a) {
                    if (void 0 === c) return y(s);
                    if (m) return c = setTimeout(S, t), k(s)
                }
                return void 0 === c && (c = setTimeout(S, t)), i
            }
            return t = b(t) || 0, f(a) && (u = !!a.leading, r = (m = "maxWait" in a) ? l(b(a.maxWait) || 0, t) : r, g = "trailing" in a ? !!a.trailing : g), T.cancel = function() {
                void 0 !== c && clearTimeout(c), d = 0, o = s = n = c = void 0
            }, T.flush = function() {
                return void 0 === c ? i : v(h())
            }, T
        }
    }).call(this, a(108))
}, function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.Left = "left", e.Right = "right"
    }(o || (o = {})), t.a = o
}, function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return k
    })), a.d(t, "a", (function() {
        return y
    })), a.d(t, "c", (function() {
        return w
    })), a.d(t, "d", (function() {
        return S
    })), a.d(t, "f", (function() {
        return v
    })), a.d(t, "e", (function() {
        return T
    })), a.d(t, "g", (function() {
        return I
    })), a.d(t, "h", (function() {
        return B
    }));
    var o = a(5),
        n = a(7),
        r = a(16),
        i = a.n(r),
        c = a(4),
        s = a(18),
        d = a(8),
        u = a.n(d),
        l = a(6),
        p = a(19),
        h = a(32),
        f = a(46),
        b = a(3),
        m = a(27),
        g = a(31);
    async function k() {
        const e = Object(b.c)(),
            t = screen.width,
            a = {},
            r = u()(),
            i = [],
            s = {
                uuid: r,
                label: e ? "主页" : "Home",
                icoSrc: c.Gb + "/newtab/icon-group/61df5dde-0afd-4104-9b87-418bd62f95df.svg",
                data: i
            },
            d = u()(),
            f = [],
            m = {
                uuid: d,
                label: e ? "社交" : "Social",
                icoSrc: c.Gb + "/newtab/icon-group/9ac2df78-617e-4090-85ea-e68caf566a47.svg",
                data: f
            },
            g = u()(),
            k = [],
            y = {
                uuid: g,
                label: e ? "工具" : "Tool",
                icoSrc: c.Gb + "/newtab/icon-group/5664820e-0e6e-4040-9fa8-7a7491a5f2b8.svg",
                data: k
            }; {
            (e ? [{
                backgroundColor: {
                    data: "#e6162b",
                    type: o.a.Pure
                },
                desc: "随时随地发现新鲜事！",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/0e3b119f42ba105262c52885adf032f1.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 16,
                label: "微博",
                type: l.a.Image,
                url: "https://weibo.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#1aad19",
                    type: o.a.Pure
                },
                desc: "使用手机微信扫码登录",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/e760bb47e6988e068f6d44c9f3109bb2.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1982,
                label: "微信网页版",
                type: l.a.Image,
                url: "https://wx.qq.com/?lang=zh_CN",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00aefd",
                    type: o.a.Pure
                },
                desc: "bilibili是国内知名的视频弹幕网站。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/b88213b97677a97e45cb9f12d80ad328.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 299,
                label: "Bilibili",
                type: l.a.Image,
                url: "https://www.bilibili.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#dd4843",
                    type: o.a.Pure
                },
                desc: "阿里巴巴旗下潮流导购网站",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/62decccfc76a4da384686b01e7abffd0.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1723,
                label: "爱淘宝",
                type: l.a.Image,
                url: "https://ai.taobao.com?pid=mm_1042050059_1426300057_110172600194&union_lens=lensId%3APUB%401585387134%400b0af5b7_0e21_171206fdf73_047b%4001",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ed2c20",
                    type: o.a.Pure
                },
                desc: "专业的综合网上购物商城",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/61589568063efc2ebbfdac364bfb641b.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 64,
                label: "京东",
                type: l.a.Image,
                url: c.mc + "/clicks/jd",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#007ce7",
                    type: o.a.Pure
                },
                desc: "有问题，上知乎。可信赖的问答社区。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/d485e51391e9a96b80caa34516bd00be.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 498,
                label: "知乎",
                type: l.a.Image,
                url: "https://www.zhihu.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00b51d",
                    type: o.a.Pure
                },
                desc: "提供图书、电影、音乐唱片的推荐、评论和价格比较，以及城市独特的文化生活",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/0358c64952350ca5e46e9f3b645f688c.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 9,
                label: "豆瓣",
                type: l.a.Image,
                url: "https://www.douban.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00a82d",
                    type: o.a.Pure
                },
                desc: "登录使用印象笔记网页版",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/be162f5b969fbb1c28d209b0773557cf.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 2003,
                label: "印象笔记网页版",
                type: l.a.Image,
                url: "https://app.yinxiang.com/Home.action",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#479f05",
                    type: o.a.Pure
                },
                desc: "大型视频网站，专业的网络视频播放平台。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/49d02ac31b2efd6c6da10ad9ffa3d909.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 120,
                label: "爱奇艺",
                type: l.a.Image,
                url: "https://www.iqiyi.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ce0025",
                    type: o.a.Pure
                },
                desc: "中文邮箱第一品牌。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/32b3bcd5782d3ae416c506eeeec28ecf.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 964,
                label: "163网易邮箱",
                type: l.a.Image,
                url: "https://mail.163.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: o.a.Pure
                },
                desc: "58同城，专业的分类信息网。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/289d6000cfb0bb35124dca1f948af822.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 960,
                label: "58同城",
                type: l.a.Image,
                url: "https://www.58.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#fd6533",
                    type: o.a.Pure
                },
                desc: "推荐吃喝玩乐优惠信息，帮您选到满意商家",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/1353e0e5e6cf12ba5a4d596fb9c23ac6.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 993,
                label: "大众点评",
                type: l.a.Image,
                url: "https://www.dianping.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#287dfa",
                    type: o.a.Pure
                },
                desc: "中国领先的在线旅行服务公司，为您的出行提供全方位旅行服务",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/8a65194bb0f11289441f61a1d26737eb.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1095,
                label: "携程",
                type: l.a.Image,
                url: "https://www.ctrip.com/?AllianceID=1212032&sid=2814163&ouid=&app=0101F00",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: o.a.Pure
                },
                desc: "今日头条为您推荐有价值的、个性化的信息",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/18d469f739518a6636bde9da8bd6d93b.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 11,
                label: "今日头条",
                type: l.a.Image,
                url: "https://www.toutiao.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#e20000",
                    type: o.a.Pure
                },
                desc: "一款专注于发现与分享的音乐产品",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/156950db51a3c93f877f9c00a121e548.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1087,
                label: "网易云音乐",
                type: l.a.Image,
                url: "https://music.163.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00c658",
                    type: o.a.Pure
                },
                desc: "国家精品课程在线学习平台",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/276366d9d8e7c8b3ee2c8e8f301b5fe6.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1958,
                label: "中国大学MOOC",
                type: l.a.Image,
                url: "https://www.icourse163.org",
                uuid: u()()
            }] : [{
                backgroundColor: {
                    data: "#d92529",
                    type: o.a.Pure
                },
                desc: "Enjoy the videos and music you love.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/3d868f26e7e2b68dba9e65542723195c.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 497,
                label: "YouTube",
                type: l.a.Image,
                url: "https://www.youtube.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#1776f3",
                    type: o.a.Pure
                },
                desc: "Connect with friends, family and other people you know.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/616dbf76f91dc4bbec7c59f472780706.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 383,
                label: "Facebook",
                type: l.a.Image,
                url: "https://www.facebook.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#10c0ff",
                    type: o.a.Pure
                },
                desc: "Get the full story with all the live commentary.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/ff7dff20166b4adfcc23b34c58b554a2.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 432,
                label: "Twitter",
                type: l.a.Image,
                url: "https://twitter.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#262626",
                    type: o.a.Pure
                },
                desc: "Share photos, videos & messages with friends & family.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/6e8afbac865ca8ca36c339ce6a4f93e7.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 496,
                label: "Instagram",
                type: l.a.Image,
                url: "https://www.instagram.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: o.a.Pure
                },
                desc: "Enjoy latest Android apps, games, music, movies, TV, books, magazines & more.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/99ef8f229d7f26ca008850ec4ef8071c.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 463,
                label: "Google Play",
                type: l.a.Image,
                url: "https://play.google.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: o.a.Pure
                },
                desc: "Gmail is email that's intuitive, efficient, and useful.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/cff9e11e03f9dc94ec43491552c805fd.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 400,
                label: "Gmail",
                type: l.a.Image,
                url: "https://mail.google.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#232f3e",
                    type: o.a.Pure
                },
                desc: "Online shopping from the earth.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/ff4eab09a63efab55580278c02f84797.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 56,
                label: "Amazon",
                type: l.a.Image,
                url: "https://www.amazon.com?&_encoding=UTF8&tag=monknow08-20&linkCode=ur2&linkId=b2a834974bdde41172822cbc4c64944e&camp=1789&creative=9325",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#f7f7f7",
                    type: o.a.Pure
                },
                desc: "The world's online marketplace.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/13445fd0c1965f52f3969dadd63ab2e2.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 368,
                label: "eBay",
                type: l.a.Image,
                url: "http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575571435&toolid=10001&campid=5338656927&customid=ebay&mpre=https%3A%2F%2Fwww.ebay.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00a82d",
                    type: o.a.Pure
                },
                desc: "Use Evernote on Web",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/c48be1b7bbbd4f3d4958acf548974fa6.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 2005,
                label: "Evernote for Web",
                type: l.a.Image,
                url: "https://www.evernote.com/client/web",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#0070e0",
                    type: o.a.Pure
                },
                desc: "A modern workspace designed to reduce busywork.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/2c0dc989624651d76f56a6bd7ddb6d8e.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 362,
                label: "Dropbox",
                type: l.a.Image,
                url: "https://www.dropbox.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#000000",
                    type: o.a.Pure
                },
                desc: "A free online encyclopedia.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/3d6bedfa1c80d4901e10ed41ad2975bd.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 448,
                label: "Wikipedia",
                type: l.a.Image,
                url: "https://www.wikipedia.org",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#000000",
                    type: o.a.Pure
                },
                desc: "Help you find compelling ideas, knowledge, and perspectives.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/07585d4a3e9ab96ca54813e2affe1f2b.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 142,
                label: "Medium",
                type: l.a.Image,
                url: "https://www.medium.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#171a21",
                    type: o.a.Pure
                },
                desc: "At Valve we make games, Steam, and hardware.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/672f454515b74192d65a4688f3edd0e7.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 223,
                label: "Steam",
                type: l.a.Image,
                url: "https://www.steampowered.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#002973",
                    type: o.a.Pure
                },
                desc: "Big savings on hotels in 120,000 destinations worldwide.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/a299a5f96e4c3115d1002de3042b7315.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 304,
                label: "Booking",
                type: l.a.Image,
                url: "https://www.booking.com/index.html?aid=1900924",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#262626",
                    type: o.a.Pure
                },
                desc: "The market leader in drones and aerial photography systems.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/d7f467dbe215f94425166256a3174d75.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1710,
                label: "DJI",
                type: l.a.Image,
                url: "https://click.dji.com/AKKPQXj00manV7D3kfFG?as=0001&pm=custom",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#000000",
                    type: o.a.Pure
                },
                desc: "Watch TV Shows Online, Watch Movies Online",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/f2cb53dc8f8ea1b15f1fab3c9e0d8d71.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 159,
                label: "NETFLIX",
                type: l.a.Image,
                url: "https://www.netflix.com",
                uuid: u()()
            }]).forEach(e => {
                i.push(e.uuid), a[e.uuid] = e
            });
            (e ? [{
                backgroundColor: {
                    data: "#187bfe",
                    type: o.a.Pure
                },
                desc: "全球最大的中文社区，让志同道合的人相聚",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/90a733c0f32ba7c9a12e7fd2c56547f2.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 6,
                label: "百度贴吧",
                type: l.a.Image,
                url: "https://tieba.baidu.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: o.a.Pure
                },
                desc: "猫扑网络流行文化发源地，为用户推荐最热门的流行资讯。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/75453cb3953ae6c01da736bab1455e7d.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 961,
                label: "猫扑",
                type: l.a.Image,
                url: "https://www.mop.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#c01d2f",
                    type: o.a.Pure
                },
                desc: "一个认真而有趣的社区",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/6f03a0a6d4cb6e41d03e51742d855ae1.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1848,
                label: "虎扑",
                type: l.a.Image,
                url: "https://www.hupu.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: o.a.Pure
                },
                desc: "以游戏直播为主的弹幕式互动直播平台",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/6415d7a931bfd5beb70745b00a90863c.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1014,
                label: "虎牙直播",
                type: l.a.Image,
                url: "https://www.huya.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#f9620e",
                    type: o.a.Pure
                },
                desc: "提供高清、快捷、流畅的视频直播和游戏赛事直播服务",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/678f9088e261c1e9d3a9feefa02f428b.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 8,
                label: "斗鱼",
                type: l.a.Image,
                url: "https://www.douyu.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#0071c0",
                    type: o.a.Pure
                },
                desc: "为亿万用户提供高效稳定便捷的电子邮件服务",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/86157ca96a781b2a88a7aec7f0f51b13.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1161,
                label: "QQ邮箱",
                type: l.a.Image,
                url: "https://mail.qq.com",
                uuid: u()()
            }] : [{
                backgroundColor: {
                    data: "#123033",
                    type: o.a.Pure
                },
                desc: "Use WhatsApp on Web",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/cffe1039a634e610ed0bc63a162704b2.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1971,
                label: "WhatsApp for Web",
                type: l.a.Image,
                url: "https://web.whatsapp.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00aff0",
                    type: o.a.Pure
                },
                desc: "Use Skype on Web",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/b44adc20a09bf6de425ec6cee836add0.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 2002,
                label: "Skype For Web",
                type: l.a.Image,
                url: "https://web.skype.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#1aad19",
                    type: o.a.Pure
                },
                desc: "Use WeChat on Web",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/05206c763734f9f8e50e5ca089c7f279.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 1969,
                label: "WeChat for Web",
                type: l.a.Image,
                url: "https://wx.qq.com/?lang=en_US",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#0068a7",
                    type: o.a.Pure
                },
                desc: "Build and engage with your professional network.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/1d137c1aa8fbbfa58ab969528bb4b0a1.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 332,
                label: "Linkedin",
                type: l.a.Image,
                url: "https://www.linkedin.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#333333",
                    type: o.a.Pure
                },
                desc: "The world's leading live streaming platform for gamers and the things we love.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/b52ec4d35f1446978008da04b0f9218b.png",
                    isOfficial: !0,
                    mimeType: n.a.Png,
                    uploaded: !0
                },
                id: 431,
                label: "Twitch",
                type: l.a.Image,
                url: "https://www.twitch.tv",
                uuid: u()()
            }]).forEach(e => {
                f.push(e.uuid), a[e.uuid] = e
            });
            const t = [{
                id: 1820,
                uuid: u()(),
                label: "MONKNOW",
                type: l.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: n.a.Png,
                    data: c.Gb + "/newtab/icon/f7365f50ea753205a8dbeb24bb8dcd2e.png"
                },
                desc: e ? "MONKNOW 官方网站" : "MONKNOW official website",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: o.a.Pure,
                    data: "#188fff"
                },
                url: "https://www.monknow.com"
            }, {
                id: 554,
                uuid: u()(),
                label: e ? "壁纸库" : "Wallpaper Lib",
                type: l.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: n.a.Png,
                    data: c.Gb + "/newtab/icon/70381b0dbcca06e2eb30679040c6dcfa.png"
                },
                desc: e ? "MONKNOW 官方壁纸库" : "MONKNOW official wallpaper library",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: o.a.Pure,
                    data: "#71ce47"
                },
                url: "internal://wallpaper-lib"
            }, {
                id: 2954,
                uuid: u()(),
                label: e ? "待办事项" : "ToDo",
                type: l.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: n.a.Png,
                    data: c.Gb + "/newtab/icon/030a4276f1d10e30cc0c50f017e96417.png"
                },
                desc: e ? "待办事项让您随时保持专注" : "To Do gives you focus",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: o.a.Pure,
                    data: "#16d9c2"
                },
                url: "internal://todos"
            }, {
                id: 2006,
                uuid: u()(),
                label: e ? "小恐龙" : "Chrome Dino",
                type: l.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: n.a.Png,
                    data: c.Gb + "/newtab/icon/9884c390fef75337f4606f2dc48c0f11.png"
                },
                desc: e ? "Chrome 彩蛋小游戏" : "A hidden Chrome dinosaur game",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: o.a.Pure,
                    data: "#ffffff"
                },
                url: "internal://dino"
            }];
            let r = [];
            r = r.concat([{
                id: 1709,
                uuid: u()(),
                label: e ? "书签管理" : "Bookmarks",
                type: l.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: n.a.Png,
                    data: c.Gb + "/newtab/icon/629a51cf5304c1855cc1da0e8287903f.png"
                },
                desc: e ? "浏览器书签管理" : "Browser bookmarks",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: o.a.Pure,
                    data: "#ee3b3b"
                },
                url: "internal://bookmarks"
            }, {
                id: 1708,
                uuid: u()(),
                label: e ? "扩展管理" : "Extensions",
                type: l.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: n.a.Png,
                    data: c.Gb + "/newtab/icon/8413ddc9362f03a6902200356f3500df.png"
                },
                desc: e ? "浏览器扩展管理" : "Browser extensions",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: o.a.Pure,
                    data: "#1a73e8"
                },
                url: "internal://extensions"
            }, {
                id: 1707,
                uuid: u()(),
                label: e ? "历史记录" : "History",
                type: l.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: n.a.Png,
                    data: c.Gb + "/newtab/icon/2305d028ff04720a3b114e80c90caad3.png"
                },
                desc: e ? "浏览器历史记录" : "Browser history",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: o.a.Pure,
                    data: "#fcb138"
                },
                url: "internal://history"
            }]), r = r.concat([{
                id: 1993,
                uuid: u()(),
                label: e ? "下载记录" : "Downloads",
                type: l.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: n.a.Png,
                    data: c.Gb + "/newtab/icon/d0359c6069b4b274fe4bb5b9ab326fb2.png"
                },
                desc: e ? "浏览器下载记录" : "Browser downloads",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: o.a.Pure,
                    data: "#9226e9"
                },
                url: "internal://downloads"
            }]), t.splice(3, 0, ...r), t.forEach(e => {
                k.push(e.uuid), a[e.uuid] = e
            })
        }
        return {
            version: c.db,
            updaterVersion: 0,
            setting: {
                openTarget: p.a.CurrentTab,
                rowGapPercentage: t < 1800 ? 26 : 40,
                columnGapPercentage: t < 1800 ? 34 : 50,
                iconLayout: h.a.Particular,
                borderRadiusPercentage: 20,
                opacityPercentage: 100,
                sizePercentage: t < 1800 ? 80 : 100,
                displayShadow: !0,
                displayNotificationBadge: !0,
                displayAddBtn: !0,
                rememberLastVisitedGroup: !1,
                scrollToSwitchGroup: !0
            },
            data: {
                groups: [r, d, g],
                groupDict: {
                    [r]: s,
                    [d]: m,
                    [g]: y
                },
                iconDict: a
            }
        }
    }
    async function y(e) {
        const {
            version: t
        } = e;
        return t < c.db && (t <= 1 && void 0 === e.setting.displayAddBtn && (e.setting.displayAddBtn = !0), t <= 2 && void 0 === e.updaterVersion && (e.updaterVersion = 0), t <= 3 && void 0 === e.setting.displayNotificationBadge && (e.setting.displayNotificationBadge = !0), t <= 4 && void 0 === e.setting.rememberLastVisitedGroup && (e.setting.rememberLastVisitedGroup = !0), t <= 5 && (void 0 === e.setting.scrollToSwitchGroup && (e.setting.scrollToSwitchGroup = !0), Object(g.g)(e))), e.version = c.db, e
    }
    async function w() {
        return {
            version: 0,
            data: {
                updater: {}
            }
        }
    }
    async function S() {
        return (await i()({
            url: c.Cb + "/newtab/icons.json",
            method: "get"
        })).data.data
    }
    async function v(e, t) {
        const a = (await i()({
                url: c.a + "/icon/batchurl",
                method: "post",
                headers: {
                    secret: Object(s.b)(e)
                },
                data: {
                    urls: t
                }
            })).data,
            n = {};
        return Object.keys(a.data).forEach(e => {
            const t = a.data[e];
            n[e] = null === t ? null : {
                id: t.udId,
                label: t.title,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: t.mimeType,
                    data: t.imgUrl
                },
                desc: t.description,
                icoScalePercentage: 100,
                backgroundColor: {
                    type: o.a.Pure,
                    data: t.bgColor
                },
                url: t.url
            }
        }), n
    }
    async function T(e, t) {
        try {
            {
                const e = Object(f.c)(t);
                if (0 === e.length || "w" === e || "ww" === e || "www" === e || "www." === e) return null
            }
            const a = (await i()({
                url: c.a + "/icon/byurl",
                method: "get",
                headers: {
                    secret: Object(s.b)(e)
                },
                params: {
                    url: t
                }
            })).data;
            return null === a.data.icon ? null : {
                id: a.data.icon.udId,
                label: a.data.icon.title,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: a.data.icon.mimeType,
                    data: a.data.icon.imgUrl
                },
                desc: a.data.icon.description,
                icoScalePercentage: 100,
                backgroundColor: {
                    type: o.a.Pure,
                    data: a.data.icon.bgColor
                },
                url: a.data.icon.url
            }
        } catch (e) {
            return null
        }
    }
    async function I(e, t) {
        const a = (await i()({
            url: c.a + "/icon/list",
            method: "get",
            headers: {
                secret: Object(s.b)(e)
            },
            params: {
                cate_id: t.categoryValue,
                lang: t.language,
                keyword: t.keyword,
                max: t.max,
                size: 10
            }
        })).data;
        return {
            data: a.data.list.map(e => ({
                id: e.udId,
                label: e.title,
                icoSrc: {
                    uploaded: !0,
                    isOfficial: !0,
                    mimeType: e.mimeType,
                    data: e.imgUrl
                },
                backgroundColor: {
                    type: o.a.Pure,
                    data: e.bgColor
                },
                desc: e.description,
                icoScalePercentage: 100,
                url: e.url
            })),
            hasMore: 10 === a.data.list.length,
            max: a.data.next_query.max,
            language: a.data.next_query.lang
        }
    }
    async function B(e, t) {
        if (0 !== (t = t.trim()).length) try {
            await i()({
                url: c.a + "/icon/exists",
                method: "get",
                headers: {
                    secret: Object(s.b)(e)
                },
                params: {
                    url: t
                }
            })
        } catch (e) {
            if (null === Object(m.c)(e)) throw e
        }
    }
}, , function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e.Color = "color", e.Image = "image"
    }(o || (o = {})), t.a = o
}, , function(e, t, a) {
    "use strict";

    function o(e) {
        if ("htt" === e || "http" === e || "https" === e || "http:" === e || "https:" === e) return "";
        const t = e.indexOf(":/");
        if (-1 === t) return e;
        const a = t + ":/".length,
            o = e.codePointAt(a);
        return void 0 === o ? "" : e.slice(a + (o === "/".codePointAt(0) ? 1 : 0))
    }

    function n(e) {
        return e.startsWith("internal://")
    }

    function r(e) {
        return !(!n(e) || "internal://bookmarks" === e || "internal://extensions" === e || "internal://history" === e || "internal://downloads" === e || "internal://dino" === e)
    }
    a.d(t, "c", (function() {
        return o
    })), a.d(t, "b", (function() {
        return n
    })), a.d(t, "a", (function() {
        return r
    }))
}, , , , function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return n
    }));
    var o = a(19);

    function n({
        url: e,
        openTarget: t
    }) {
        switch (t) {
            case o.a.NewWindow:
                chrome.windows.create({
                    url: e,
                    incognito: !1
                });
                break;
            case o.a.NewIncognitoWindow:
                chrome.windows.create({
                    url: e,
                    incognito: !0
                });
                break;
            case o.a.BackgroundTab:
                chrome.tabs.create({
                    url: e,
                    active: !1
                });
                break;
            case o.a.CurrentTab:
                chrome.tabs.update({
                    url: e
                });
                break;
            case o.a.NewTab:
            default:
                chrome.tabs.create({
                    url: e,
                    active: !0
                })
        }
    }
}, function(e, t, a) {
    "use strict";
    var o;
    ! function(e) {
        e[e.Server = 1] = "Server", e[e.Icon = 2] = "Icon"
    }(o || (o = {})), t.a = o
}, , , function(e, t, a) {
    "use strict";

    function o(e) {
        return JSON.parse(JSON.stringify(e))
    }
    a.d(t, "a", (function() {
        return o
    }))
}, , , , , function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return h
    })), a.d(t, "a", (function() {
        return f
    })), a.d(t, "c", (function() {
        return b
    })), a.d(t, "e", (function() {
        return m
    })), a.d(t, "d", (function() {
        return g
    }));
    var o = a(16),
        n = a.n(o),
        r = a(8),
        i = a.n(r),
        c = a(4),
        s = a(7),
        d = a(19),
        u = a(3),
        l = a(51),
        p = a(18);
    async function h() {
        const e = screen.width;
        return {
            version: c.tb,
            updaterVersion: 0,
            setting: {
                openTarget: d.a.CurrentTab,
                value: Object(u.c)() ? "0eb43a90-b4c7-43ce-9c73-ab110945f47d" : "e58b5a00-74fe-4319-af0a-d4999565dd71",
                widthPercentage: 59,
                heightPercentage: e < 1800 ? 80 : 100,
                opacityPercentage: 90,
                borderRadiusPercentage: 20,
                displayShadow: !0
            },
            data: {
                officials: ["e58b5a00-74fe-4319-af0a-d4999565dd71", "ceb6c985-d09c-4fdc-b0ea-b304f1ee0f2d", "2a5e69d9-bf13-4188-8da2-004551a913a0", "0eb43a90-b4c7-43ce-9c73-ab110945f47d", "118f7463-4411-4856-873f-2851faa3b543", "259d8e2b-340e-4690-8046-88a0b130cbd0"],
                dict: {
                    "e58b5a00-74fe-4319-af0a-d4999565dd71": {
                        id: 1,
                        uuid: "e58b5a00-74fe-4319-af0a-d4999565dd71",
                        title: "Google",
                        icoSrc: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: s.a.Svg,
                            data: c.Gb + "/newtab/searcher/e58b5a00-74fe-4319-af0a-d4999565dd71.svg"
                        },
                        url: "https://www.google.com/search?ie=utf-8&q=%s"
                    },
                    "ceb6c985-d09c-4fdc-b0ea-b304f1ee0f2d": {
                        id: 2,
                        uuid: "ceb6c985-d09c-4fdc-b0ea-b304f1ee0f2d",
                        title: "Bing",
                        icoSrc: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: s.a.Svg,
                            data: c.Gb + "/newtab/searcher/ceb6c985-d09c-4fdc-b0ea-b304f1ee0f2d.svg"
                        },
                        url: "https://www.bing.com/search?q=%s"
                    },
                    "2a5e69d9-bf13-4188-8da2-004551a913a0": {
                        id: 3,
                        uuid: "2a5e69d9-bf13-4188-8da2-004551a913a0",
                        title: "Yahoo",
                        icoSrc: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: s.a.Svg,
                            data: c.Gb + "/newtab/searcher/2a5e69d9-bf13-4188-8da2-004551a913a0.svg"
                        },
                        url: "https://search.yahoo.com/search?ei=UTF-8&p=%s"
                    },
                    "0eb43a90-b4c7-43ce-9c73-ab110945f47d": {
                        id: 4,
                        uuid: "0eb43a90-b4c7-43ce-9c73-ab110945f47d",
                        title: "Baidu",
                        icoSrc: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: s.a.Svg,
                            data: c.Gb + "/newtab/searcher/0eb43a90-b4c7-43ce-9c73-ab110945f47d.svg"
                        },
                        url: "https://www.baidu.com/s?ie=utf-8&wd=%s"
                    },
                    "118f7463-4411-4856-873f-2851faa3b543": {
                        id: 5,
                        uuid: "118f7463-4411-4856-873f-2851faa3b543",
                        title: "Yandex",
                        icoSrc: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: s.a.Svg,
                            data: c.Gb + "/newtab/searcher/118f7463-4411-4856-873f-2851faa3b543.svg"
                        },
                        url: "https://yandex.ru/search/?text=%s"
                    },
                    "259d8e2b-340e-4690-8046-88a0b130cbd0": {
                        id: 6,
                        uuid: "259d8e2b-340e-4690-8046-88a0b130cbd0",
                        title: "DuckDuckGo",
                        icoSrc: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: s.a.Svg,
                            data: c.Gb + "/newtab/searcher/259d8e2b-340e-4690-8046-88a0b130cbd0.svg"
                        },
                        url: "https://duckduckgo.com/?q=%s"
                    }
                }
            }
        }
    }

    function f(e) {
        const {
            version: t
        } = e;
        return t < c.tb && (t <= 3 && void 0 === e.updaterVersion && (e.updaterVersion = 0), t <= 5 && (void 0 === e.setting.heightPercentage && (e.setting.heightPercentage = 100), e.data.officials.includes("0eb43a90-b4c7-43ce-9c73-ab110945f47d") || e.data.officials.push("0eb43a90-b4c7-43ce-9c73-ab110945f47d"), void 0 === e.data.dict["0eb43a90-b4c7-43ce-9c73-ab110945f47d"] && (e.data.dict["0eb43a90-b4c7-43ce-9c73-ab110945f47d"] = {
            id: 4,
            uuid: "0eb43a90-b4c7-43ce-9c73-ab110945f47d",
            title: "Baidu",
            icoSrc: {
                uploaded: !0,
                isOfficial: !0,
                mimeType: s.a.Svg,
                data: c.Gb + "/newtab/searcher/0eb43a90-b4c7-43ce-9c73-ab110945f47d.svg"
            },
            url: "https://www.baidu.com/s?ie=utf-8&wd=%s"
        }), e.data.officials.includes("118f7463-4411-4856-873f-2851faa3b543") || e.data.officials.push("118f7463-4411-4856-873f-2851faa3b543"), void 0 === e.data.dict["118f7463-4411-4856-873f-2851faa3b543"] && (e.data.dict["118f7463-4411-4856-873f-2851faa3b543"] = {
            id: 5,
            uuid: "118f7463-4411-4856-873f-2851faa3b543",
            title: "Yandex",
            icoSrc: {
                uploaded: !0,
                isOfficial: !0,
                mimeType: s.a.Svg,
                data: c.Gb + "/newtab/searcher/118f7463-4411-4856-873f-2851faa3b543.svg"
            },
            url: "https://yandex.ru/search/?text=%s"
        }), e.data.officials.includes("259d8e2b-340e-4690-8046-88a0b130cbd0") || e.data.officials.push("259d8e2b-340e-4690-8046-88a0b130cbd0"), void 0 === e.data.dict["259d8e2b-340e-4690-8046-88a0b130cbd0"] && (e.data.dict["259d8e2b-340e-4690-8046-88a0b130cbd0"] = {
            id: 6,
            uuid: "259d8e2b-340e-4690-8046-88a0b130cbd0",
            title: "DuckDuckGo",
            icoSrc: {
                uploaded: !0,
                isOfficial: !0,
                mimeType: s.a.Svg,
                data: c.Gb + "/newtab/searcher/259d8e2b-340e-4690-8046-88a0b130cbd0.svg"
            },
            url: "https://duckduckgo.com/?q=%s"
        }))), e.version = c.tb, e
    }
    async function b() {
        return {
            version: 0,
            data: {
                updater: {}
            }
        }
    }
    async function m() {
        return (await n()({
            url: c.Cb + "/newtab/searcher.json",
            method: "get"
        })).data.data
    }
    async function g(e, t) {
        return (await n()({
            url: c.ub + "/home/search",
            method: "get",
            headers: {
                secret: Object(p.b)(e)
            },
            params: {
                keyword: t
            },
            timeout: 5e3
        })).data.data.search.slice(0, 6).map(e => ({
            uuid: i()(),
            type: l.a.Server,
            keyword: t,
            text: e
        }))
    }
}, , , , , function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return p
    })), a.d(t, "a", (function() {
        return h
    })), a.d(t, "d", (function() {
        return f
    })), a.d(t, "c", (function() {
        return b
    }));
    var o = a(16),
        n = a.n(o),
        r = a(4),
        i = a(18),
        c = a(7),
        s = a(23),
        d = a(44),
        u = a(5),
        l = a(36);
    async function p() {
        return {
            version: r.M,
            setting: {
                value: s.a.Lib,
                blurred: !1,
                slideIntervalSeconds: 86400,
                libCategories: [8]
            },
            data: {
                wallpaperDict: {
                    [s.a.Color]: {
                        id: null,
                        uuid: s.a.Color,
                        type: d.a.Color,
                        data: {
                            type: u.a.Pure,
                            data: "#276ce6"
                        }
                    },
                    [s.a.Local]: {
                        id: 509,
                        uuid: s.a.Local,
                        type: d.a.Image,
                        data: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: c.a.Jpeg,
                            data: r.Gb + "/newtab/wallpaper/940eb6f157fc49095c8d1c8597639a73.jpg"
                        },
                        blurredData: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: c.a.Jpeg,
                            data: r.Gb + "/newtab/wallpaper/blur/940eb6f157fc49095c8d1c8597639a73.jpg"
                        },
                        overviewData: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: c.a.Jpeg,
                            data: r.Gb + "/newtab/wallpaper/overview/940eb6f157fc49095c8d1c8597639a73.jpg"
                        }
                    }
                }
            }
        }
    }
    async function h(e) {
        return e.version = r.M, e
    }
    async function f(e, t, a) {
        const o = (await n()({
            url: r.a + "/wallpaper/random",
            method: "get",
            headers: {
                secret: Object(i.b)(e)
            },
            params: {
                cate_id: a,
                theme: Object(l.b)(t)
            }
        })).data;
        return null === o.data.wallpaper ? null : {
            id: o.data.wallpaper.udId,
            data: {
                uploaded: !0,
                isOfficial: !0,
                mimeType: o.data.wallpaper.mimeType,
                data: o.data.wallpaper.url
            },
            blurredData: {
                uploaded: !0,
                isOfficial: !0,
                mimeType: o.data.wallpaper.mimeType,
                data: o.data.wallpaper.blurUrl
            },
            overviewData: {
                uploaded: !0,
                isOfficial: !0,
                mimeType: o.data.wallpaper.mimeType,
                data: o.data.wallpaper.overviewUrl
            }
        }
    }
    async function b(e, t) {
        const a = (await n()({
            url: r.a + "/wallpaper/list",
            method: "get",
            headers: {
                secret: Object(i.b)(e)
            },
            params: {
                theme: Object(l.b)(t.themeType),
                cate_id: t.categoryValue,
                keyword: t.keyword,
                max: t.max,
                size: 12
            }
        })).data;
        return {
            data: a.data.list.map(e => ({
                id: e.udId,
                data: {
                    uploaded: !0,
                    isOfficial: !0,
                    mimeType: e.mimeType,
                    data: e.url
                },
                blurredData: {
                    uploaded: !0,
                    isOfficial: !0,
                    mimeType: e.mimeType,
                    data: e.blurUrl
                },
                overviewData: {
                    uploaded: !0,
                    isOfficial: !0,
                    mimeType: e.mimeType,
                    data: e.overviewUrl
                }
            })),
            hasMore: 12 === a.data.list.length,
            max: a.data.next_query.max
        }
    }
}, , , , , , , , , , , , , , , function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return c
    })), a.d(t, "a", (function() {
        return s
    }));
    var o = a(4),
        n = a(8),
        r = a.n(n),
        i = a(3);
    async function c() {
        const e = Date.now();
        let t = {
            uuid: r()(),
            data: "",
            isImportant: !1,
            completed: !1,
            createTime: e,
            lastUpdateTime: e
        };
        return Object(i.c)() ? t.data = "开始你的计划😃" : t.data = "Start your plan😃", {
            version: o.Vb,
            setting: {},
            data: {
                todoDict: {
                    [t.uuid]: t
                }
            }
        }
    }
    async function s(e) {
        return e.version = o.Vb, e
    }
}, , , , , , , , , function(e, t, a) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var a = new Array(arguments.length), o = 0; o < a.length; o++) a[o] = arguments[o];
            return e.apply(t, a)
        }
    }
}, function(e, t, a) {
    "use strict";
    var o = a(29);

    function n(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, a) {
        if (!t) return e;
        var r;
        if (a) r = a(t);
        else if (o.isURLSearchParams(t)) r = t.toString();
        else {
            var i = [];
            o.forEach(t, (function(e, t) {
                null != e && (o.isArray(e) ? t += "[]" : e = [e], o.forEach(e, (function(e) {
                    o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), i.push(n(t) + "=" + n(e))
                })))
            })), r = i.join("&")
        }
        if (r) {
            var c = e.indexOf("#"); - 1 !== c && (e = e.slice(0, c)), e += (-1 === e.indexOf("?") ? "?" : "&") + r
        }
        return e
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, a) {
    "use strict";
    (function(t) {
        var o = a(29),
            n = a(135),
            r = {
                "Content-Type": "application/x-www-form-urlencoded"
            };

        function i(e, t) {
            !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var c, s = {
            adapter: ((void 0 !== t && "[object process]" === Object.prototype.toString.call(t) || "undefined" != typeof XMLHttpRequest) && (c = a(92)), c),
            transformRequest: [function(e, t) {
                return n(t, "Accept"), n(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : o.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            }
        };
        s.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, o.forEach(["delete", "get", "head"], (function(e) {
            s.headers[e] = {}
        })), o.forEach(["post", "put", "patch"], (function(e) {
            s.headers[e] = o.merge(r)
        })), e.exports = s
    }).call(this, a(107))
}, function(e, t, a) {
    "use strict";
    var o = a(29),
        n = a(136),
        r = a(89),
        i = a(138),
        c = a(139),
        s = a(93);
    e.exports = function(e) {
        return new Promise((function(t, d) {
            var u = e.data,
                l = e.headers;
            o.isFormData(u) && delete l["Content-Type"];
            var p = new XMLHttpRequest;
            if (e.auth) {
                var h = e.auth.username || "",
                    f = e.auth.password || "";
                l.Authorization = "Basic " + btoa(h + ":" + f)
            }
            if (p.open(e.method.toUpperCase(), r(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
                    if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var a = "getAllResponseHeaders" in p ? i(p.getAllResponseHeaders()) : null,
                            o = {
                                data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                status: p.status,
                                statusText: p.statusText,
                                headers: a,
                                config: e,
                                request: p
                            };
                        n(t, d, o), p = null
                    }
                }, p.onabort = function() {
                    p && (d(s("Request aborted", e, "ECONNABORTED", p)), p = null)
                }, p.onerror = function() {
                    d(s("Network Error", e, null, p)), p = null
                }, p.ontimeout = function() {
                    d(s("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
                }, o.isStandardBrowserEnv()) {
                var b = a(140),
                    m = (e.withCredentials || c(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
                m && (l[e.xsrfHeaderName] = m)
            }
            if ("setRequestHeader" in p && o.forEach(l, (function(e, t) {
                    void 0 === u && "content-type" === t.toLowerCase() ? delete l[t] : p.setRequestHeader(t, e)
                })), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                p.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                p && (p.abort(), d(e), p = null)
            })), void 0 === u && (u = null), p.send(u)
        }))
    }
}, function(e, t, a) {
    "use strict";
    var o = a(137);
    e.exports = function(e, t, a, n, r) {
        var i = new Error(e);
        return o(i, t, a, n, r)
    }
}, function(e, t, a) {
    "use strict";
    var o = a(29);
    e.exports = function(e, t) {
        t = t || {};
        var a = {};
        return o.forEach(["url", "method", "params", "data"], (function(e) {
            void 0 !== t[e] && (a[e] = t[e])
        })), o.forEach(["headers", "auth", "proxy"], (function(n) {
            o.isObject(t[n]) ? a[n] = o.deepMerge(e[n], t[n]) : void 0 !== t[n] ? a[n] = t[n] : o.isObject(e[n]) ? a[n] = o.deepMerge(e[n]) : void 0 !== e[n] && (a[n] = e[n])
        })), o.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], (function(o) {
            void 0 !== t[o] ? a[o] = t[o] : void 0 !== e[o] && (a[o] = e[o])
        })), a
    }
}, function(e, t, a) {
    "use strict";

    function o(e) {
        this.message = e
    }
    o.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, o.prototype.__CANCEL__ = !0, e.exports = o
}, function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return i
    })), a.d(t, "a", (function() {
        return c
    }));
    var o = a(4),
        n = a(17),
        r = a(3);
    async function i() {
        return {
            version: o.R,
            setting: {
                themeType: n.a.Auto,
                widthPercentage: 100,
                location: null,
                enable24HourSystem: !1,
                enableImperialUnits: "en-US" === Object(r.b)()
            }
        }
    }
    async function c(e) {
        return e.version = o.R, e
    }
}, function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return n
    })), a.d(t, "a", (function() {
        return r
    }));
    var o = a(4);
    async function n() {
        return {
            version: o.Bb,
            setting: {
                display: !0,
                openAfterAppReady: !1,
                openAfterAppInactiveDelaySeconds: 30,
                blurredBackground: !0,
                displayClock: !0,
                displayWeather: !0
            }
        }
    }
    async function r(e) {
        return e.version = o.Bb, e
    }
}, function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return r
    })), a.d(t, "a", (function() {
        return i
    }));
    var o = a(4),
        n = a(41);
    async function r() {
        return {
            version: o.xb,
            setting: {
                autoHide: !1,
                collapsed: !0,
                side: n.a.Left
            }
        }
    }
    async function i(e) {
        const {
            version: t
        } = e;
        return t < o.xb && t <= 1 && void 0 === e.setting.side && (e.setting.side = n.a.Left), e.version = o.xb, e
    }
}, function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return s
    })), a.d(t, "d", (function() {
        return d
    })), a.d(t, "b", (function() {
        return u
    })), a.d(t, "c", (function() {
        return l
    }));
    var o = a(16),
        n = a.n(o),
        r = a(3),
        i = a(4),
        c = a(18);
    async function s() {
        return {
            version: i.kc,
            data: {
                woeid: null,
                observation: null
            }
        }
    }
    async function d(e) {
        const t = (await n()({
                url: "https://api.ipify.org?format=json",
                method: "get"
            })).data,
            {
                ip: a
            } = t,
            o = (await n()({
                url: "http://ip-api.com/json/" + a,
                method: "get",
                params: "fields=status,city,regionName,country"
            })).data;
        if ("success" !== o.status) return null;
        const r = await u(e, `${o.city},${o.regionName},${o.country}`);
        return 0 === r.length ? null : r[0]
    }
    async function u(e, t) {
        return (await n()({
            url: i.hc + "/home/locations",
            method: "get",
            headers: {
                secret: Object(c.b)(e)
            },
            params: {
                keyword: t,
                lang: Object(r.b)()
            }
        })).data.data.locations.map(e => ({
            woeid: e.woeid,
            latitude: e.lat,
            longtitude: e.lon,
            fullname: e.qualifiedName,
            shortname: e.city
        }))
    }
    async function l(e, t) {
        const a = (await n()({
            url: i.hc + "/home/weather",
            method: "get",
            headers: {
                secret: Object(c.b)(e)
            },
            params: {
                woeid: t.woeid,
                lat: t.latitude,
                lon: t.longtitude
            }
        })).data;
        return null === a.data.weather ? null : {
            lastUpdateTime: Date.now(),
            currentTemperatureFahrenheit: a.data.weather.currentFahrenheit,
            lowTemperatureFahrenheit: a.data.weather.lowFahrenheit,
            highTemperatureFahrenheit: a.data.weather.highFahrenheit,
            yahooConditionCode: a.data.weather.conditionCode
        }
    }
}, function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return He
    })), a.d(t, "c", (function() {
        return Ke
    })), a.d(t, "a", (function() {
        return Xe
    }));
    var o = a(27),
        n = a(3),
        r = a(165),
        i = a.n(r),
        c = a(166),
        s = a.n(c),
        d = a(167),
        u = a.n(d),
        l = a(168),
        p = a.n(l),
        h = a(169),
        f = a.n(h),
        b = a(170),
        m = a.n(b),
        g = a(171),
        k = a.n(g),
        y = a(172),
        w = a.n(y),
        S = a(173),
        v = a.n(S),
        T = a(174),
        I = a.n(T),
        B = a(175),
        O = a.n(B),
        P = a(176),
        C = a.n(P),
        _ = a(177),
        M = a.n(_),
        j = a(178),
        R = a.n(j),
        x = a(179),
        N = a.n(x),
        U = a(180),
        q = a.n(U),
        A = a(181),
        D = a.n(A),
        L = a(182),
        E = a.n(L),
        V = a(183),
        G = a.n(V),
        F = a(184),
        J = a.n(F),
        W = a(185),
        $ = a.n(W),
        z = a(186),
        H = a.n(z),
        K = a(187),
        X = a.n(K),
        Y = a(188),
        Q = a.n(Y),
        Z = a(189),
        ee = a.n(Z),
        te = a(190),
        ae = a.n(te),
        oe = a(191),
        ne = a.n(oe),
        re = a(192),
        ie = a.n(re),
        ce = a(193),
        se = a.n(ce),
        de = a(194),
        ue = a.n(de),
        le = a(195),
        pe = a.n(le),
        he = a(196),
        fe = a.n(he),
        be = a(197),
        me = a.n(be),
        ge = a(198),
        ke = a.n(ge),
        ye = a(199),
        we = a.n(ye),
        Se = a(200),
        ve = a.n(Se),
        Te = a(201),
        Ie = a.n(Te),
        Be = a(202),
        Oe = a.n(Be),
        Pe = a(203),
        Ce = a.n(Pe),
        _e = a(204),
        Me = a.n(_e),
        je = a(205),
        Re = a.n(je),
        xe = a(206),
        Ne = a.n(xe),
        Ue = a(207),
        qe = a.n(Ue),
        Ae = a(208),
        De = a.n(Ae),
        Le = a(116),
        Ee = a.n(Le),
        Ve = a(209),
        Ge = a.n(Ve),
        Fe = a(210),
        Je = a.n(Fe),
        We = a(211),
        $e = a.n(We);
    const ze = {
        0: i.a,
        1: s.a,
        2: u.a,
        3: p.a,
        4: f.a,
        5: m.a,
        6: k.a,
        7: w.a,
        8: v.a,
        9: I.a,
        10: O.a,
        11: C.a,
        12: M.a,
        13: R.a,
        14: N.a,
        15: q.a,
        16: D.a,
        17: E.a,
        18: G.a,
        19: J.a,
        20: $.a,
        21: H.a,
        22: X.a,
        23: Q.a,
        24: ee.a,
        25: ae.a,
        26: ne.a,
        27: ie.a,
        28: se.a,
        29: ue.a,
        30: pe.a,
        31: fe.a,
        32: me.a,
        33: ke.a,
        34: we.a,
        35: ve.a,
        36: Ie.a,
        37: Oe.a,
        38: Ce.a,
        39: Me.a,
        40: Re.a,
        41: Ne.a,
        42: qe.a,
        43: De.a,
        44: Ee.a,
        45: Ge.a,
        46: Je.a,
        47: $e.a
    };

    function He(e, t) {
        return t ? e : Math.round(5 * (e - 32) / 9)
    }

    function Ke(e) {
        return {
            icoSrc: ze[e] || Ee.a,
            label: Object(n.a)("yahoo_condition_code_desc_" + e)
        }
    }

    function Xe(e) {
        if (null === e.setting.location) throw Object(o.a)();
        return e.setting.location
    }
}, , , , , , , function(e, t) {
    var a, o, n = e.exports = {};

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function c(e) {
        if (a === setTimeout) return setTimeout(e, 0);
        if ((a === r || !a) && setTimeout) return a = setTimeout, setTimeout(e, 0);
        try {
            return a(e, 0)
        } catch (t) {
            try {
                return a.call(null, e, 0)
            } catch (t) {
                return a.call(this, e, 0)
            }
        }
    }! function() {
        try {
            a = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            a = r
        }
        try {
            o = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            o = i
        }
    }();
    var s, d = [],
        u = !1,
        l = -1;

    function p() {
        u && s && (u = !1, s.length ? d = s.concat(d) : l = -1, d.length && h())
    }

    function h() {
        if (!u) {
            var e = c(p);
            u = !0;
            for (var t = d.length; t;) {
                for (s = d, d = []; ++l < t;) s && s[l].run();
                l = -1, t = d.length
            }
            s = null, u = !1,
                function(e) {
                    if (o === clearTimeout) return clearTimeout(e);
                    if ((o === i || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                    try {
                        o(e)
                    } catch (t) {
                        try {
                            return o.call(null, e)
                        } catch (t) {
                            return o.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function f(e, t) {
        this.fun = e, this.array = t
    }

    function b() {}
    n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
        d.push(new f(e, t)), 1 !== d.length || u || c(h)
    }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = b, n.addListener = b, n.once = b, n.off = b, n.removeListener = b, n.removeAllListeners = b, n.emit = b, n.prependListener = b, n.prependOnceListener = b, n.listeners = function(e) {
        return []
    }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, n.cwd = function() {
        return "/"
    }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, n.umask = function() {
        return 0
    }
}, function(e, t) {
    var a;
    a = function() {
        return this
    }();
    try {
        a = a || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (a = window)
    }
    e.exports = a
}, , , , , , , , function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon44.91e1b157.svg"
}, , , , , , , , , , , , , function(e, t, a) {
    "use strict";
    var o = a(29),
        n = a(88),
        r = a(131),
        i = a(94);

    function c(e) {
        var t = new r(e),
            a = n(r.prototype.request, t);
        return o.extend(a, r.prototype, t), o.extend(a, t), a
    }
    var s = c(a(91));
    s.Axios = r, s.create = function(e) {
        return c(i(s.defaults, e))
    }, s.Cancel = a(95), s.CancelToken = a(143), s.isCancel = a(90), s.all = function(e) {
        return Promise.all(e)
    }, s.spread = a(144), e.exports = s, e.exports.default = s
}, function(e, t) {
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function(e) {
        return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
}, function(e, t, a) {
    "use strict";
    var o = a(29),
        n = a(89),
        r = a(132),
        i = a(133),
        c = a(94);

    function s(e) {
        this.defaults = e, this.interceptors = {
            request: new r,
            response: new r
        }
    }
    s.prototype.request = function(e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = c(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
        var t = [i, void 0],
            a = Promise.resolve(e);
        for (this.interceptors.request.forEach((function(e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function(e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) a = a.then(t.shift(), t.shift());
        return a
    }, s.prototype.getUri = function(e) {
        return e = c(this.defaults, e), n(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, o.forEach(["delete", "get", "head", "options"], (function(e) {
        s.prototype[e] = function(t, a) {
            return this.request(o.merge(a || {}, {
                method: e,
                url: t
            }))
        }
    })), o.forEach(["post", "put", "patch"], (function(e) {
        s.prototype[e] = function(t, a, n) {
            return this.request(o.merge(n || {}, {
                method: e,
                url: t,
                data: a
            }))
        }
    })), e.exports = s
}, function(e, t, a) {
    "use strict";
    var o = a(29);

    function n() {
        this.handlers = []
    }
    n.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, n.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, n.prototype.forEach = function(e) {
        o.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }))
    }, e.exports = n
}, function(e, t, a) {
    "use strict";
    var o = a(29),
        n = a(134),
        r = a(90),
        i = a(91),
        c = a(141),
        s = a(142);

    function d(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
        return d(e), e.baseURL && !c(e.url) && (e.url = s(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = n(e.data, e.headers, e.transformRequest), e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
            delete e.headers[t]
        })), (e.adapter || i.adapter)(e).then((function(t) {
            return d(e), t.data = n(t.data, t.headers, e.transformResponse), t
        }), (function(t) {
            return r(t) || (d(e), t && t.response && (t.response.data = n(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        }))
    }
}, function(e, t, a) {
    "use strict";
    var o = a(29);
    e.exports = function(e, t, a) {
        return o.forEach(a, (function(a) {
            e = a(e, t)
        })), e
    }
}, function(e, t, a) {
    "use strict";
    var o = a(29);
    e.exports = function(e, t) {
        o.forEach(e, (function(a, o) {
            o !== t && o.toUpperCase() === t.toUpperCase() && (e[t] = a, delete e[o])
        }))
    }
}, function(e, t, a) {
    "use strict";
    var o = a(93);
    e.exports = function(e, t, a) {
        var n = a.config.validateStatus;
        !n || n(a.status) ? e(a) : t(o("Request failed with status code " + a.status, a.config, null, a.request, a))
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e, t, a, o, n) {
        return e.config = t, a && (e.code = a), e.request = o, e.response = n, e.isAxiosError = !0, e.toJSON = function() {
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
        }, e
    }
}, function(e, t, a) {
    "use strict";
    var o = a(29),
        n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, a, r, i = {};
        return e ? (o.forEach(e.split("\n"), (function(e) {
            if (r = e.indexOf(":"), t = o.trim(e.substr(0, r)).toLowerCase(), a = o.trim(e.substr(r + 1)), t) {
                if (i[t] && n.indexOf(t) >= 0) return;
                i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([a]) : i[t] ? i[t] + ", " + a : a
            }
        })), i) : i
    }
}, function(e, t, a) {
    "use strict";
    var o = a(29);
    e.exports = o.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            a = document.createElement("a");

        function n(e) {
            var o = e;
            return t && (a.setAttribute("href", o), o = a.href), a.setAttribute("href", o), {
                href: a.href,
                protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
                host: a.host,
                search: a.search ? a.search.replace(/^\?/, "") : "",
                hash: a.hash ? a.hash.replace(/^#/, "") : "",
                hostname: a.hostname,
                port: a.port,
                pathname: "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname
            }
        }
        return e = n(window.location.href),
            function(t) {
                var a = o.isString(t) ? n(t) : t;
                return a.protocol === e.protocol && a.host === e.host
            }
    }() : function() {
        return !0
    }
}, function(e, t, a) {
    "use strict";
    var o = a(29);
    e.exports = o.isStandardBrowserEnv() ? {
        write: function(e, t, a, n, r, i) {
            var c = [];
            c.push(e + "=" + encodeURIComponent(t)), o.isNumber(a) && c.push("expires=" + new Date(a).toGMTString()), o.isString(n) && c.push("path=" + n), o.isString(r) && c.push("domain=" + r), !0 === i && c.push("secure"), document.cookie = c.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, a) {
    "use strict";
    var o = a(95);

    function n(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function(e) {
            t = e
        }));
        var a = this;
        e((function(e) {
            a.reason || (a.reason = new o(e), t(a.reason))
        }))
    }
    n.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, n.source = function() {
        var e;
        return {
            token: new n((function(t) {
                e = t
            })),
            cancel: e
        }
    }, e.exports = n
}, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t) {
    var a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (a) {
        var o = new Uint8Array(16);
        e.exports = function() {
            return a(o), o
        }
    } else {
        var n = new Array(16);
        e.exports = function() {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), n[t] = e >>> ((3 & t) << 3) & 255;
            return n
        }
    }
}, function(e, t) {
    for (var a = [], o = 0; o < 256; ++o) a[o] = (o + 256).toString(16).substr(1);
    e.exports = function(e, t) {
        var o = t || 0,
            n = a;
        return [n[e[o++]], n[e[o++]], n[e[o++]], n[e[o++]], "-", n[e[o++]], n[e[o++]], "-", n[e[o++]], n[e[o++]], "-", n[e[o++]], n[e[o++]], "-", n[e[o++]], n[e[o++]], n[e[o++]], n[e[o++]], n[e[o++]], n[e[o++]]].join("")
    }
}, , , , , , , , , , , , , , , , , , , function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon0.d37f3f7b.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon1.2a38e0f2.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon2.8e413838.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon3.4033b3ed.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon4.54de64c1.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon5.5da6bac2.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon6.cdab6fd9.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon7.8033e597.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon8.22f5cbee.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon9.94d3c631.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon10.cd9f873d.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon11.a7463b6a.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon12.6ed49d8f.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon13.aed8b276.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon14.a285cb1b.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon15.ca9114da.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon16.74c9a1d0.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon17.e0f2c496.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon18.fa4db942.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon19.b8c647bf.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon20.6b687102.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon21.23e01200.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon22.23668ce8.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon23.914da766.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon24.940b7b0d.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon25.a0eb642c.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon26.a7fea625.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon27.c727508c.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon28.0c45601c.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon29.f860988c.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon30.d9cec3b0.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon31.0056fd9b.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon32.3f456abf.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon33.f0253edd.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon34.9d0b3025.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon35.5a7f64db.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon36.d2f5c069.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon37.9b13220a.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon38.4ca39f43.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon39.4b0beb2d.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon40.9c1ef78d.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon41.a37c874d.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon42.21f17a24.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon43.ee52cd24.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon45.2058ea72.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon46.7c1c9a0c.svg"
}, function(e, t, a) {
    e.exports = a.p + "asset/media/yahooConditionCodeIcon47.9d1f82f7.svg"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
    "use strict";
    a.r(t);
    class o {
        constructor(e) {
            this.config = e
        }
        async get() {
            const {
                config: e
            } = this, {
                key: t
            } = e;
            let a, o = null;
            return o = e.large ? await
            function(e) {
                return new Promise(t => {
                    chrome.storage.local.get(e, a => {
                        t(a[e])
                    })
                })
            }(t): function(e) {
                let t = localStorage.getItem(e);
                if (null !== t) try {
                    t = JSON.parse(t)
                } catch (e) {}
                return t
            }(t), a = null == o ? await e.defaultModelGetter() : e.modelAdjuster ? await e.modelAdjuster(o) : o, a
        }
        async set(e) {
            const {
                config: t
            } = this;
            var a, o;
            t.large ? await (a = t.key, o = e, new Promise(e => {
                null != o ? chrome.storage.local.set({
                    [a]: o
                }, e) : chrome.storage.local.remove(a, e)
            })) : function(e, t) {
                null != t ? localStorage.setItem(e, JSON.stringify(t)) : localStorage.removeItem(e)
            }(t.key, e)
        }
        async reset() {
            const {
                config: e
            } = this, t = await e.defaultModelGetter();
            return await this.set(t), t
        }
    }
    var n = a(4),
        r = a(99),
        i = a(12),
        c = a(10),
        s = a(96);
    const d = new o({
        key: n.Q,
        defaultModelGetter: s.b,
        modelAdjuster: s.a,
        large: !0
    });
    class u {
        constructor(e) {
            this.rootStore = e, this.updateLocationRequestId = 0, this.updateLocationTimeoutId = null
        }
        async init() {
            this.model = await d.get()
        }
        async resetModel() {
            this.model = await d.reset()
        }
        saveModel() {
            d.set(this.model)
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        backupModel(e) {
            const t = this.model;
            this.setModel(e), this.diffModel(t, e), this.rootStore.userStore.checkIfNeedBackupCommon()
        }
        diffModel(e, t) {
            const {
                rootStore: a
            } = this;
            null !== t.setting.location && (null === e.setting.location && this.stopUpdateLocation(), null !== e.setting.location && t.setting.location.woeid === e.setting.location.woeid || (a.weatherStore.stopUpdate(), a.weatherStore.checkIfNeedUpdate()))
        }
        stopUpdateLocation() {
            null !== this.updateLocationTimeoutId && (window.clearTimeout(this.updateLocationTimeoutId), this.updateLocationTimeoutId = null), this.updateLocationRequestId++
        }
        checkIfNeedUpdateLocation() {
            const {
                model: e
            } = this;
            null === e.setting.location && this.updateLocation()
        }
        async updateLocation() {
            const {
                updateLocationRequestId: e
            } = this;
            try {
                const t = await Object(r.d)(this.rootStore.userStore.model);
                if (e !== this.updateLocationRequestId) return;
                this.model.setting.location = t, this.saveModel(), Object(i.a)({
                    command: c.z,
                    hasResponse: !1
                }), this.rootStore.weatherStore.stopUpdate(), this.rootStore.weatherStore.checkIfNeedUpdate()
            } catch (t) {
                if (e !== this.updateLocationRequestId) return;
                this.updateLocationTimeoutId = window.setTimeout(() => {
                    this.updateLocationTimeoutId = null, this.updateLocation()
                }, n.b)
            }
        }
        checkJobs() {
            const {
                rootStore: e
            } = this;
            this.checkIfNeedUpdateLocation(), e.weatherStore.checkIfNeedUpdate()
        }
        stopJobs() {
            const {
                rootStore: e
            } = this;
            this.stopUpdateLocation(), e.weatherStore.stopUpdate()
        }
    }
    var l = a(16),
        p = a.n(l);
    const h = new o({
        key: n.Kb,
        defaultModelGetter: async function() {
            return {
                version: n.Mb,
                data: {
                    region: 0
                }
            }
        },
        large: !0
    });
    class f {
        constructor(e) {
            this.rootStore = e, this.update = this.update.bind(this)
        }
        async init() {
            this.model = await h.get()
        }
        async resetModel() {
            this.model = await h.reset()
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        saveModel() {
            h.set(this.model)
        }
        async update() {
            try {
                const e = await async function() {
                    const e = (await p()({
                        url: n.a + "/home/region",
                        method: "get"
                    })).data;
                    return null == e.data.region ? 0 : e.data.region
                }();
                this.model.data.region = e, this.saveModel(), Object(i.a)({
                    command: c.G,
                    hasResponse: !1
                }), window.setTimeout(this.update, n.Lb)
            } catch (e) {
                window.setTimeout(this.update, n.W)
            }
        }
    }
    var b = a(23),
        m = a(64);
    const g = new o({
        key: n.L,
        defaultModelGetter: m.b,
        modelAdjuster: m.a,
        large: !0
    });
    class k {
        constructor(e) {
            this.rootStore = e
        }
        async init() {
            this.model = await g.get()
        }
        async resetModel() {
            this.model = await g.reset()
        }
        saveModel() {
            g.set(this.model)
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        backupModel(e) {
            const t = this.model;
            this.setModel(e), this.diffModel(t, e), this.rootStore.userStore.checkIfNeedBackupBackground()
        }
        diffModel(e, t) {
            const {
                tempBackgroundStore: a
            } = this.rootStore;
            t.setting.value === b.a.Lib ? e.setting.value === b.a.Lib && e.setting.libCategories[0] === t.setting.libCategories[0] && e.setting.slideIntervalSeconds === t.setting.slideIntervalSeconds || (a.stopUpdate(), a.checkIfNeedUpdate()) : e.setting.value === b.a.Lib && a.stopUpdate()
        }
        checkJobs() {
            this.rootStore.tempBackgroundStore.checkIfNeedUpdate()
        }
        stopJobs() {
            this.rootStore.tempBackgroundStore.stopUpdate()
        }
    }
    var y = a(44),
        w = a(8),
        S = a.n(w);
    var v = a(36);
    const T = new o({
        key: n.Ib,
        defaultModelGetter: async function() {
            return {
                version: n.Jb,
                data: {
                    lastUpdateTime: null,
                    categoryValue: null,
                    wallpaper: null
                }
            }
        },
        large: !0
    });
    class I {
        constructor(e) {
            this.rootStore = e, this.updateRequestId = 0, this.updateTimeoutId = null
        }
        async init() {
            this.model = await T.get()
        }
        async resetModel() {
            this.model = await T.reset()
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        saveModel() {
            T.set(this.model)
        }
        stopUpdate() {
            null !== this.updateTimeoutId && (window.clearTimeout(this.updateTimeoutId), this.updateTimeoutId = null), this.updateRequestId++
        }
        checkIfNeedUpdate() {
            const {
                setting: e
            } = this.rootStore.backgroundStore.model;
            if (e.value === b.a.Lib)
                if (null === this.model.data.lastUpdateTime || e.libCategories[0] !== this.model.data.categoryValue) this.update();
                else {
                    if (0 === e.slideIntervalSeconds) return;
                    const t = 1e3 * e.slideIntervalSeconds - Math.max(Date.now() - this.model.data.lastUpdateTime, 0);
                    t < n.kb ? this.update() : this.updateTimeoutId = window.setTimeout(() => {
                        this.updateTimeoutId = null, this.update()
                    }, t)
                }
        }
        async update() {
            const {
                updateRequestId: e
            } = this;
            try {
                const t = this.rootStore.backgroundStore.model.setting.libCategories[0],
                    a = await Object(m.d)(this.rootStore.userStore.model, Object(v.a)(this.rootStore.commonStore.model.setting.themeType), t);
                if (e !== this.updateRequestId) return;
                const o = null === a ? null : {
                    id: a.id,
                    uuid: S()(),
                    type: y.a.Image,
                    data: a.data,
                    blurredData: a.blurredData,
                    overviewData: a.overviewData
                };
                this.model.data.lastUpdateTime = Date.now(), this.model.data.categoryValue = t, this.model.data.wallpaper = o, this.saveModel(), Object(i.a)({
                    command: c.F,
                    hasResponse: !1
                });
                const {
                    slideIntervalSeconds: n
                } = this.rootStore.backgroundStore.model.setting;
                0 !== n && (this.updateTimeoutId = window.setTimeout(() => {
                    this.updateTimeoutId = null, this.update()
                }, 1e3 * n))
            } catch (t) {
                if (e !== this.updateRequestId) return;
                this.updateTimeoutId = window.setTimeout(() => {
                    this.updateTimeoutId = null, this.update()
                }, n.b)
            }
        }
        nextOne() {
            this.stopUpdate(), this.update()
        }
    }
    var B = a(42);
    const O = new o({
        key: n.ab,
        defaultModelGetter: B.b,
        modelAdjuster: B.a,
        large: !0
    });
    class P {
        constructor(e) {
            this.rootStore = e
        }
        async init() {
            this.model = this.rootStore.iconsUpdaterStore.adjustIcons(await O.get())
        }
        async resetModel() {
            this.model = this.rootStore.iconsUpdaterStore.adjustIcons(await O.reset())
        }
        saveModel() {
            O.set(this.model)
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        backupModel(e) {
            const t = this.model;
            this.setModel(e), this.diffModel(t, e), this.rootStore.userStore.checkIfNeedBackupIcons()
        }
        diffModel(e, t) {
            this.rootStore.tempIconsStore.checkIfNeedUpdate()
        }
        checkJobs() {
            this.rootStore.tempIconsStore.checkIfNeedUpdate()
        }
    }
    var C = a(100);
    const _ = new o({
        key: n.ic,
        defaultModelGetter: r.a,
        large: !0
    });
    class M {
        constructor(e) {
            this.rootStore = e, this.updateObservationRequestId = 0, this.updateObservationTimeoutId = null
        }
        async init() {
            this.model = await _.get()
        }
        async resetModel() {
            this.model = await _.reset()
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        saveModel() {
            _.set(this.model)
        }
        stopUpdate() {
            this.stopUpdateObservation()
        }
        checkIfNeedUpdate() {
            const {
                rootStore: e
            } = this;
            if (null !== e.commonStore.model.setting.location)
                if (this.model.data.woeid === e.commonStore.model.setting.location.woeid)
                    if (null === this.model.data.observation) this.updateObservation();
                    else {
                        const e = n.jc - Math.max(Date.now() - this.model.data.observation.lastUpdateTime, 0);
                        e < n.kb ? this.updateObservation() : this.updateObservationTimeoutId = window.setTimeout(() => {
                            this.updateObservationTimeoutId = null, this.updateObservation()
                        }, e)
                    }
            else this.model.data.woeid = e.commonStore.model.setting.location.woeid, this.model.data.observation = null, this.saveModel(), this.updateObservation()
        }
        stopUpdateObservation() {
            null !== this.updateObservationTimeoutId && (window.clearTimeout(this.updateObservationTimeoutId), this.updateObservationTimeoutId = null), this.updateObservationRequestId++
        }
        async updateObservation() {
            const {
                updateObservationRequestId: e
            } = this;
            try {
                const t = await Object(r.c)(this.rootStore.userStore.model, Object(C.a)(this.rootStore.commonStore.model));
                if (e !== this.updateObservationRequestId) return;
                this.model.data.observation = t, this.saveModel(), Object(i.a)({
                    command: c.K,
                    hasResponse: !1
                }), this.updateObservationTimeoutId = window.setTimeout(() => {
                    this.updateObservationTimeoutId = null, this.updateObservation()
                }, n.jc)
            } catch (t) {
                if (e !== this.updateObservationRequestId) return;
                this.updateObservationTimeoutId = window.setTimeout(() => {
                    this.updateObservationTimeoutId = null, this.updateObservation()
                }, n.W)
            }
        }
    }
    var j = a(97);
    const R = new o({
        key: n.zb,
        defaultModelGetter: j.b,
        modelAdjuster: j.a,
        large: !0
    });
    class x {
        constructor(e) {
            this.rootStore = e
        }
        async init() {
            this.model = await R.get()
        }
        async resetModel() {
            this.model = await R.reset()
        }
        saveModel() {
            R.set(this.model)
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        backupModel(e) {
            this.setModel(e), this.rootStore.userStore.checkIfNeedBackupStandbyPage()
        }
    }
    var N = a(98);
    const U = new o({
        key: n.wb,
        defaultModelGetter: N.b,
        modelAdjuster: N.a,
        large: !0
    });
    class q {
        constructor(e) {
            this.rootStore = e
        }
        async init() {
            this.model = await U.get()
        }
        async resetModel() {
            this.model = await U.reset()
        }
        saveModel() {
            U.set(this.model)
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        backupModel(e) {
            this.setModel(e), this.rootStore.userStore.checkIfNeedBackupSidebar()
        }
    }
    var A = a(20),
        D = a(26),
        L = a(33);
    class E {
        constructor(e) {
            this.config = Object.assign({
                pingTimeout: 2e4,
                pongTimeout: 1e4,
                reconnectTimeout: 4e3,
                pingMessage: "2",
                repeatLimit: 1 / 0
            }, e), this.onopen = L.a, this.onmessage = L.a, this.onreconnect = L.a, this.repeat = 0, this.forbidReconnect = !1, this.pingTimeoutId = NaN, this.pongTimeoutId = NaN, this.createWebSocket()
        }
        createWebSocket() {
            try {
                this.ws = new WebSocket(this.config.url), this.initEventHandle()
            } catch (e) {
                0,
                this.reconnect()
            }
        }
        initEventHandle() {
            this.ws.onclose = () => {
                this.reconnect()
            }, this.ws.onerror = () => {
                this.reconnect()
            }, this.ws.onopen = () => {
                this.repeat = 0;
                try {
                    this.onopen()
                } catch (e) {
                    0
                }
                this.heartCheck()
            }, this.ws.onmessage = e => {
                try {
                    this.onmessage(e)
                } catch (e) {
                    0
                }
                this.heartCheck()
            }
        }
        destroyWebSocket() {
            void 0 !== this.ws && (this.ws.onclose = null, this.ws.onerror = null, this.ws.onopen = null, this.ws.onmessage = null, this.ws.close())
        }
        send(e) {
            void 0 !== this.ws && this.ws.readyState === WebSocket.OPEN && this.ws.send(e)
        }
        heartCheck() {
            this.heartReset(), this.heartStart()
        }
        heartReset() {
            window.clearTimeout(this.pingTimeoutId), window.clearTimeout(this.pongTimeoutId)
        }
        heartStart() {
            this.forbidReconnect || (this.pingTimeoutId = window.setTimeout(() => {
                this.send(this.config.pingMessage), this.pongTimeoutId = window.setTimeout(() => {
                    this.reconnect()
                }, this.config.pongTimeout)
            }, this.config.pingTimeout))
        }
        reconnect() {
            if (!(this.forbidReconnect || this.repeat > this.config.repeatLimit)) {
                this.repeat++;
                try {
                    this.onreconnect()
                } catch (e) {
                    0
                }
                this.heartReset(), this.destroyWebSocket(), window.setTimeout(() => {
                    this.createWebSocket()
                }, this.config.reconnectTimeout)
            }
        }
        close() {
            this.forbidReconnect = !0, this.heartReset(), this.destroyWebSocket()
        }
    }
    var V = a(40),
        G = a.n(V),
        F = a(21),
        J = a(18);
    const W = new o({
        key: n.cc,
        defaultModelGetter: D.m,
        modelAdjuster: D.a,
        large: !0
    });
    class $ {
        constructor(e) {
            this.rootStore = e, this.updateVisitorUserTokenRequestId = 0, this.updateVisitorUserTokenTimeoutId = null, this.websocket = null, this.syncRequestId = 0, this.syncTimeoutId = null, this.delaySync = G()(this.sync, n.Hb), this.recoverUserBasicDataRequestId = 0, this.recoverUserBasicDataTimeoutId = null, this.recoverCommonRequestId = 0, this.recoverCommonTimeoutId = null, this.recoverIconsRequestId = 0, this.recoverIconsTimeoutId = null, this.recoverStandbyPageRequestId = 0, this.recoverStandbyPageTimeoutId = null, this.recoverBackgroundRequestId = 0, this.recoverBackgroundTimeoutId = null, this.recoverSidebarRequestId = 0, this.recoverSidebarTimeoutId = null, this.recoverSearcherRequestId = 0, this.recoverSearcherTimeoutId = null, this.recoverTodosRequestId = 0, this.recoverTodosTimeoutId = null, this.backupCommonRequestId = 0, this.backupCommonTimeoutId = null, this.delayBackupCommon = G()(this.backupCommon, n.N), this.backupBackgroundRequestId = 0, this.backupBackgroundTimeoutId = null, this.delayBackupBackground = G()(this.backupBackground, n.N), this.backupIconsRequestId = 0, this.backupIconsTimeoutId = null, this.delayBackupIcons = G()(this.backupIcons, n.N), this.backupStandbyPageRequestId = 0, this.backupStandbyPageTimeoutId = null, this.delayBackupStandbyPage = G()(this.backupStandbyPage, n.N), this.backupSidebarRequestId = 0, this.backupSidebarTimeoutId = null, this.delayBackupSidebar = G()(this.backupSidebar, n.N), this.backupSearcherRequestId = 0, this.backupSearcherTimeoutId = null, this.delayBackupSearcher = G()(this.backupSearcher, n.N), this.backupTodosRequestId = 0, this.backupTodosTimeoutId = null, this.delayBackupTodos = G()(this.backupTodos, n.N)
        }
        async init() {
            this.model = await W.get()
        }
        async resetModel() {
            this.model = await W.reset()
        }
        saveModel() {
            W.set(this.model)
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        stopUpdateVisitorUserToken() {
            null !== this.updateVisitorUserTokenTimeoutId && (window.clearTimeout(this.updateVisitorUserTokenTimeoutId), this.updateVisitorUserTokenTimeoutId = null), this.updateVisitorUserTokenRequestId++
        }
        checkIfNeedUpdateVisitorUserToken() {
            const {
                model: e
            } = this;
            e.data.type === A.a.Visitor && null === e.data.token && this.updateVisitorUserToken()
        }
        async updateVisitorUserToken() {
            const {
                updateVisitorUserTokenRequestId: e
            } = this;
            try {
                const t = await Object(D.x)();
                if (e !== this.updateVisitorUserTokenRequestId) return;
                this.model.data.token = t, this.saveModel();
                const {
                    userNeedBackupFlagsStore: a
                } = this.rootStore;
                a.model.data.needBackupIcons && this.backupIcons(), a.model.data.needBackupBackground && this.backupBackground(), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (e !== this.updateVisitorUserTokenRequestId) return;
                this.updateVisitorUserTokenTimeoutId = window.setTimeout(() => {
                    this.updateVisitorUserTokenTimeoutId = null, this.updateVisitorUserToken()
                }, n.b)
            }
        }
        delayUpdateUserLastVisitTime() {
            window.setTimeout(() => {
                this.updateUserLastVisitTime()
            }, n.Yb)
        }
        async updateUserLastVisitTime() {
            try {
                const {
                    model: e
                } = this.rootStore.userStore;
                await Object(D.C)(e), window.setTimeout(() => {
                    this.updateUserLastVisitTime()
                }, n.Zb)
            } catch (e) {
                window.setTimeout(() => {
                    this.updateUserLastVisitTime()
                }, n.b)
            }
        }
        async login(e) {
            this.rootStore.beforeSetModel(), this.rootStore.userStore.setModel(e.user), this.rootStore.commonStore.setModel(e.common), this.rootStore.backgroundStore.setModel(e.background), this.rootStore.searcherStore.setModel(this.rootStore.searcherUpdaterStore.adjustSearcher(e.searcher)), this.rootStore.iconsStore.setModel(this.rootStore.iconsUpdaterStore.adjustIcons(e.icons)), this.rootStore.standbyPageStore.setModel(e.standbyPage), this.rootStore.sidebarStore.setModel(e.sidebar), this.rootStore.todosStore.setModel(e.todos), await Promise.all([this.rootStore.weatherStore.resetModel(), this.rootStore.tempBackgroundStore.resetModel(), this.rootStore.tempIconsStore.resetModel()]), this.rootStore.afterSetModel(), Object(i.a)({
                command: c.B,
                hasResponse: !1
            })
        }
        async logout() {
            await this.rootStore.resetModel(), Object(i.a)({
                command: c.B,
                hasResponse: !1
            })
        }
        checkIfNeedSync() {
            const {
                model: e
            } = this;
            e.data.type !== A.a.Visitor && (this.syncRequestId++, null === this.syncTimeoutId && this.delaySync())
        }
        stopSync() {
            this.delaySync.cancel(), null !== this.syncTimeoutId && (window.clearTimeout(this.syncTimeoutId), this.syncTimeoutId = null), this.syncRequestId++
        }
        async sync() {
            const {
                syncRequestId: e
            } = this;
            try {
                const {
                    model: t
                } = this, a = await Object(D.s)(t);
                if (this.syncRequestId !== e) return;
                this.stopRecoverUserBasicData(), this.recoverUserBasicData();
                const {
                    needBackupCommon: o,
                    needBackupBackground: n,
                    needBackupIcons: r,
                    needBackupStandbyPage: i,
                    needBackupSidebar: c,
                    needBackupSearcher: s,
                    needBackupTodos: d
                } = this.rootStore.userNeedBackupFlagsStore.model.data, {
                    lastBackupCommonTime: u,
                    lastBackupBackgroundTime: l,
                    lastBackupIconsTime: p,
                    lastBackupStandbyPageTime: h,
                    lastBackupSidebarTime: f,
                    lastBackupSearcherTime: b,
                    lastBackupTodosTime: m
                } = this.model.data;
                this.stopBackupCommon(), this.stopRecoverCommon(), u === a.common ? o && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupCommon(!0), this.backupCommon()) : this.recoverCommon(), this.stopBackupBackground(), this.stopRecoverBackground(), l === a.background ? n && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupBackground(!0), this.backupBackground()) : this.recoverBackground(), this.stopBackupIcons(), this.stopRecoverIcons(), p === a.icons ? r && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupIcons(!0), this.backupIcons()) : this.recoverIcons(), this.stopBackupStandbyPage(), this.stopRecoverStandbyPage(), h === a.standbyPage ? i && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupStandbyPage(!0), this.backupStandbyPage()) : this.recoverStandbyPage(), this.stopBackupSidebar(), this.stopRecoverSidebar(), f === a.sidebar ? c && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupSidebar(!0), this.backupSidebar()) : this.recoverSidebar(), this.stopBackupSearcher(), this.stopRecoverSearcher(), b === a.searcher ? s && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupSearcher(!0), this.backupSearcher()) : this.recoverSearcher(), this.stopBackupTodos(), this.stopRecoverTodos(), m === a.todos ? d && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupTodos(!0), this.backupTodos()) : this.recoverTodos()
            } catch (t) {
                if (this.syncRequestId !== e) return;
                this.syncTimeoutId = window.setTimeout(() => {
                    this.syncTimeoutId = null, this.sync()
                }, n.b)
            }
        }
        checkIfNeedOpenWebsocket() {
            const {
                model: e
            } = this;
            if (e.data.type === A.a.Visitor) {
                const {
                    needBackupBackground: e,
                    needBackupIcons: t
                } = this.rootStore.userNeedBackupFlagsStore.model.data;
                e && this.backupBackground(), t && this.backupIcons()
            } else {
                const e = new E({
                    url: n.lc
                });
                this.websocket = e, e.onopen = () => {
                    if (this.websocket !== e) return;
                    const {
                        model: t
                    } = this, a = Object(J.b)(t);
                    e.send(JSON.stringify({
                        action: "login",
                        secret: a
                    })), this.stopSync(), this.sync()
                }, e.onmessage = t => {
                    if (this.websocket !== e) return;
                    const a = t.data;
                    if ("3" === a) return;
                    const o = JSON.parse(a);
                    switch (o.event) {
                        case "user_basic_data":
                            this.stopRecoverUserBasicData(), this.recoverUserBasicData();
                            break;
                        case "websocket_opts":
                            Object.assign(this.websocket.config, o.data);
                            break;
                        case F.a.Common:
                            this.stopRecoverCommon(), this.stopBackupCommon(), this.recoverCommon();
                            break;
                        case F.a.Background:
                            this.stopRecoverBackground(), this.stopBackupBackground(), this.recoverBackground();
                            break;
                        case F.a.Icons:
                            this.stopRecoverIcons(), this.stopBackupIcons(), this.recoverIcons();
                            break;
                        case F.a.Searcher:
                            this.stopRecoverSearcher(), this.stopBackupSearcher(), this.recoverSearcher();
                            break;
                        case F.a.Sidebar:
                            this.stopRecoverSidebar(), this.stopBackupSidebar(), this.recoverSidebar();
                            break;
                        case F.a.StandbyPage:
                            this.stopRecoverStandbyPage(), this.stopBackupStandbyPage(), this.recoverStandbyPage();
                            break;
                        case F.a.Todos:
                            this.stopRecoverTodos(), this.stopBackupTodos(), this.recoverTodos()
                    }
                }
            }
        }
        closeWebsocket() {
            null !== this.websocket && (this.websocket.close(), this.stopSync(), this.websocket = null)
        }
        webscoketBroadcastEvent(e) {
            const {
                websocket: t
            } = this;
            null !== t && t.send(JSON.stringify({
                action: "push_user_group",
                secret: Object(J.b)(this.model),
                event: e
            }))
        }
        stopRecoverUserBasicData() {
            null !== this.recoverUserBasicDataTimeoutId && (window.clearTimeout(this.recoverUserBasicDataTimeoutId), this.recoverUserBasicDataTimeoutId = null), this.recoverUserBasicDataRequestId++
        }
        async recoverUserBasicData() {
            const {
                recoverUserBasicDataRequestId: e
            } = this;
            try {
                const t = await Object(D.p)(this.model);
                if (this.recoverUserBasicDataRequestId !== e) return;
                this.model.data.portraitSrc = t.portraitSrc, this.model.data.nickname = t.nickname, this.saveModel(), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (this.recoverUserBasicDataRequestId !== e) return;
                this.recoverUserBasicDataTimeoutId = window.setTimeout(() => {
                    this.recoverUserBasicDataTimeoutId = null, this.recoverUserBasicData()
                }, n.b)
            }
        }
        stopRecoverCommon() {
            null !== this.recoverCommonTimeoutId && (window.clearTimeout(this.recoverCommonTimeoutId), this.recoverCommonTimeoutId = null), this.recoverCommonRequestId++
        }
        async recoverCommon() {
            const {
                recoverCommonRequestId: e
            } = this;
            try {
                const t = await Object(D.q)(this.model);
                if (this.recoverCommonRequestId !== e) return;
                const a = this.rootStore.commonStore.model,
                    o = t.data;
                this.rootStore.commonStore.setModel(o), this.model.data.lastBackupCommonTime = t.lastBackupTime, this.saveModel(), this.rootStore.commonStore.diffModel(a, o), Object(i.a)({
                    command: c.z,
                    hasResponse: !1
                }), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (this.recoverCommonRequestId !== e) return;
                this.recoverCommonTimeoutId = window.setTimeout(() => {
                    this.recoverCommonTimeoutId = null, this.recoverCommon()
                }, n.b)
            }
        }
        stopRecoverIcons() {
            null !== this.recoverIconsTimeoutId && (window.clearTimeout(this.recoverIconsTimeoutId), this.recoverIconsTimeoutId = null), this.recoverIconsRequestId++
        }
        async recoverIcons() {
            const {
                recoverIconsRequestId: e
            } = this;
            try {
                const t = await Object(D.r)(this.model);
                if (this.recoverIconsRequestId !== e) return;
                const a = this.rootStore.iconsStore.model,
                    o = t.data;
                this.rootStore.iconsStore.setModel(this.rootStore.iconsUpdaterStore.adjustIcons(o)), this.model.data.lastBackupIconsTime = t.lastBackupTime, this.saveModel(), this.rootStore.iconsStore.diffModel(a, o), Object(i.a)({
                    command: c.A,
                    hasResponse: !1
                }), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (this.recoverIconsRequestId !== e) return;
                this.recoverIconsTimeoutId = window.setTimeout(() => {
                    this.recoverIconsTimeoutId = null, this.recoverIcons()
                }, n.b)
            }
        }
        stopRecoverStandbyPage() {
            null !== this.recoverStandbyPageTimeoutId && (window.clearTimeout(this.recoverStandbyPageTimeoutId), this.recoverStandbyPageTimeoutId = null), this.recoverStandbyPageRequestId++
        }
        async recoverStandbyPage() {
            const {
                recoverStandbyPageRequestId: e
            } = this;
            try {
                const t = await Object(D.v)(this.model);
                if (this.recoverStandbyPageRequestId !== e) return;
                this.rootStore.standbyPageStore.setModel(t.data), this.model.data.lastBackupStandbyPageTime = t.lastBackupTime, this.saveModel(), Object(i.a)({
                    command: c.E,
                    hasResponse: !1
                }), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (this.recoverStandbyPageRequestId !== e) return;
                this.recoverStandbyPageTimeoutId = window.setTimeout(() => {
                    this.recoverStandbyPageTimeoutId = null, this.recoverStandbyPage()
                }, n.b)
            }
        }
        stopRecoverBackground() {
            null !== this.recoverBackgroundTimeoutId && (window.clearTimeout(this.recoverBackgroundTimeoutId), this.recoverBackgroundTimeoutId = null), this.recoverBackgroundRequestId++
        }
        async recoverBackground() {
            const {
                recoverBackgroundRequestId: e
            } = this;
            try {
                const t = await Object(D.o)(this.model);
                if (this.recoverBackgroundRequestId !== e) return;
                const a = this.rootStore.backgroundStore.model,
                    o = t.data;
                this.rootStore.backgroundStore.setModel(o), this.model.data.lastBackupBackgroundTime = t.lastBackupTime, this.saveModel(), this.rootStore.backgroundStore.diffModel(a, o), Object(i.a)({
                    command: c.y,
                    hasResponse: !1
                }), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (this.recoverBackgroundRequestId !== e) return;
                this.recoverBackgroundTimeoutId = window.setTimeout(() => {
                    this.recoverBackgroundTimeoutId = null, this.recoverBackground()
                }, n.b)
            }
        }
        stopRecoverSidebar() {
            null !== this.recoverSidebarTimeoutId && (window.clearTimeout(this.recoverSidebarTimeoutId), this.recoverSidebarTimeoutId = null), this.recoverSidebarRequestId++
        }
        async recoverSidebar() {
            const {
                recoverSidebarRequestId: e
            } = this;
            try {
                const t = await Object(D.u)(this.model);
                if (this.recoverSidebarRequestId !== e) return;
                this.rootStore.sidebarStore.setModel(t.data), this.model.data.lastBackupSidebarTime = t.lastBackupTime, this.saveModel(), Object(i.a)({
                    command: c.D,
                    hasResponse: !1
                }), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (this.recoverSidebarRequestId !== e) return;
                this.recoverSidebarTimeoutId = window.setTimeout(() => {
                    this.recoverSidebarTimeoutId = null, this.recoverSidebar()
                }, n.b)
            }
        }
        stopRecoverSearcher() {
            null !== this.recoverSearcherTimeoutId && (window.clearTimeout(this.recoverSearcherTimeoutId), this.recoverSearcherTimeoutId = null), this.recoverSearcherRequestId++
        }
        async recoverSearcher() {
            const {
                recoverSearcherRequestId: e
            } = this;
            try {
                const t = await Object(D.t)(this.model);
                if (this.recoverSearcherRequestId !== e) return;
                this.rootStore.searcherStore.setModel(this.rootStore.searcherUpdaterStore.adjustSearcher(t.data)), this.model.data.lastBackupSearcherTime = t.lastBackupTime, this.saveModel(), Object(i.a)({
                    command: c.C,
                    hasResponse: !1
                }), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (this.recoverSearcherRequestId !== e) return;
                this.recoverSearcherTimeoutId = window.setTimeout(() => {
                    this.recoverSearcherTimeoutId = null, this.recoverSearcher()
                }, n.b)
            }
        }
        stopRecoverTodos() {
            null !== this.recoverTodosTimeoutId && (window.clearTimeout(this.recoverTodosTimeoutId), this.recoverTodosTimeoutId = null), this.recoverTodosRequestId++
        }
        async recoverTodos() {
            const {
                recoverTodosRequestId: e
            } = this;
            try {
                const t = await Object(D.w)(this.model);
                if (this.recoverTodosRequestId !== e) return;
                this.rootStore.todosStore.setModel(t.data), this.model.data.lastBackupTodosTime = t.lastBackupTime, this.saveModel(), Object(i.a)({
                    command: c.I,
                    hasResponse: !1
                }), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (this.recoverTodosRequestId !== e) return;
                this.recoverTodosTimeoutId = window.setTimeout(() => {
                    this.recoverTodosTimeoutId = null, this.recoverTodos()
                }, n.b)
            }
        }
        checkIfNeedBackupCommon() {
            const {
                model: e
            } = this;
            e.data.type !== A.a.Visitor && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupCommon(!0), this.backupCommonRequestId++, null === this.backupCommonTimeoutId && this.delayBackupCommon())
        }
        stopBackupCommon() {
            this.delayBackupCommon.cancel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupCommon(!1), null !== this.backupCommonTimeoutId && (window.clearTimeout(this.backupCommonTimeoutId), this.backupCommonTimeoutId = null), this.backupCommonRequestId++
        }
        async backupCommon() {
            const {
                backupCommonRequestId: e
            } = this;
            try {
                const t = await Object(D.c)(this.model, this.rootStore.commonStore.model);
                if (e !== this.backupCommonRequestId) return;
                this.model.data.lastBackupCommonTime = t, this.saveModel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupCommon(!1), this.webscoketBroadcastEvent(F.a.Common), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (e !== this.backupCommonRequestId) return;
                this.backupCommonTimeoutId = window.setTimeout(() => {
                    this.backupCommonTimeoutId = null, this.backupCommon()
                }, n.b)
            }
        }
        checkIfNeedBackupBackground() {
            this.rootStore.userNeedBackupFlagsStore.setNeedBackupBackground(!0);
            const {
                model: e
            } = this;
            e.data.type === A.a.Visitor && null === e.data.token || (this.backupBackgroundRequestId++, null === this.backupBackgroundTimeoutId && this.delayBackupBackground())
        }
        stopBackupBackground() {
            this.delayBackupBackground.cancel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupBackground(!1), null !== this.backupBackgroundTimeoutId && (window.clearTimeout(this.backupBackgroundTimeoutId), this.backupBackgroundTimeoutId = null), this.backupBackgroundRequestId++
        }
        async backupBackground() {
            const {
                backupBackgroundRequestId: e
            } = this;
            try {
                const t = await Object(D.b)(this.model, this.rootStore.backgroundStore.model);
                if (e !== this.backupBackgroundRequestId) return;
                this.model.data.lastBackupBackgroundTime = t, this.saveModel(), this.webscoketBroadcastEvent(F.a.Background), this.rootStore.userNeedBackupFlagsStore.setNeedBackupBackground(!1), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (e !== this.backupBackgroundRequestId) return;
                this.backupBackgroundTimeoutId = window.setTimeout(() => {
                    this.backupBackgroundTimeoutId = null, this.backupBackground()
                }, n.b)
            }
        }
        checkIfNeedBackupIcons() {
            this.rootStore.userNeedBackupFlagsStore.setNeedBackupIcons(!0);
            const {
                model: e
            } = this;
            e.data.type === A.a.Visitor && null === e.data.token || (this.backupIconsRequestId++, null === this.backupIconsTimeoutId && this.delayBackupIcons())
        }
        stopBackupIcons() {
            this.delayBackupIcons.cancel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupIcons(!1), null !== this.backupIconsTimeoutId && (window.clearTimeout(this.backupIconsTimeoutId), this.backupIconsTimeoutId = null), this.backupIconsRequestId++
        }
        async backupIcons() {
            const {
                backupIconsRequestId: e
            } = this;
            try {
                const t = await Object(D.d)(this.model, this.rootStore.iconsStore.model);
                if (e !== this.backupIconsRequestId) return;
                this.model.data.lastBackupIconsTime = t, this.saveModel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupIcons(!1), this.webscoketBroadcastEvent(F.a.Icons), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (e !== this.backupIconsRequestId) return;
                this.backupIconsTimeoutId = window.setTimeout(() => {
                    this.backupIconsTimeoutId = null, this.backupIcons()
                }, n.b)
            }
        }
        checkIfNeedBackupStandbyPage() {
            const {
                model: e
            } = this;
            e.data.type !== A.a.Visitor && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupStandbyPage(!0), this.backupStandbyPageRequestId++, null === this.backupStandbyPageTimeoutId && this.delayBackupStandbyPage())
        }
        stopBackupStandbyPage() {
            this.delayBackupStandbyPage.cancel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupStandbyPage(!1), null !== this.backupStandbyPageTimeoutId && (window.clearTimeout(this.backupStandbyPageTimeoutId), this.backupStandbyPageTimeoutId = null), this.backupStandbyPageRequestId++
        }
        async backupStandbyPage() {
            const {
                backupStandbyPageRequestId: e
            } = this;
            try {
                const t = await Object(D.g)(this.model, this.rootStore.standbyPageStore.model);
                if (e !== this.backupStandbyPageRequestId) return;
                this.model.data.lastBackupStandbyPageTime = t, this.saveModel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupStandbyPage(!1), this.webscoketBroadcastEvent(F.a.StandbyPage), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (e !== this.backupStandbyPageRequestId) return;
                this.backupStandbyPageTimeoutId = window.setTimeout(() => {
                    this.backupStandbyPageTimeoutId = null, this.backupStandbyPage()
                }, n.b)
            }
        }
        checkIfNeedBackupSidebar() {
            const {
                model: e
            } = this;
            e.data.type !== A.a.Visitor && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupSidebar(!0), this.backupSidebarRequestId++, null === this.backupSidebarTimeoutId && this.delayBackupSidebar())
        }
        stopBackupSidebar() {
            this.delayBackupSidebar.cancel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupSidebar(!1), null !== this.backupSidebarTimeoutId && (window.clearTimeout(this.backupSidebarTimeoutId), this.backupSidebarTimeoutId = null), this.backupSidebarRequestId++
        }
        async backupSidebar() {
            const {
                backupSidebarRequestId: e
            } = this;
            try {
                const t = await Object(D.f)(this.model, this.rootStore.sidebarStore.model);
                if (e !== this.backupSidebarRequestId) return;
                this.model.data.lastBackupSidebarTime = t, this.saveModel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupSidebar(!1), this.webscoketBroadcastEvent(F.a.Sidebar), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (e !== this.backupSidebarRequestId) return;
                this.backupSidebarTimeoutId = window.setTimeout(() => {
                    this.backupSidebarTimeoutId = null, this.backupSidebar()
                }, n.b)
            }
        }
        checkIfNeedBackupSearcher() {
            const {
                model: e
            } = this;
            e.data.type !== A.a.Visitor && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupSearcher(!0), this.backupSearcherRequestId++, null === this.backupSearcherTimeoutId && this.delayBackupSearcher())
        }
        stopBackupSearcher() {
            this.delayBackupSearcher.cancel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupSearcher(!1), null !== this.backupSearcherTimeoutId && (window.clearTimeout(this.backupSearcherTimeoutId), this.backupSearcherTimeoutId = null), this.backupSearcherRequestId++
        }
        async backupSearcher() {
            const {
                backupSearcherRequestId: e
            } = this;
            try {
                const t = await Object(D.e)(this.model, this.rootStore.searcherStore.model);
                if (e !== this.backupSearcherRequestId) return;
                this.model.data.lastBackupSearcherTime = t, this.saveModel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupSearcher(!1), this.webscoketBroadcastEvent(F.a.Searcher), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (e !== this.backupSearcherRequestId) return;
                this.backupSearcherTimeoutId = window.setTimeout(() => {
                    this.backupSearcherTimeoutId = null, this.backupSearcher()
                }, n.b)
            }
        }
        checkIfNeedBackupTodos() {
            const {
                model: e
            } = this;
            e.data.type !== A.a.Visitor && (this.rootStore.userNeedBackupFlagsStore.setNeedBackupTodos(!0), this.backupTodosRequestId++, null === this.backupTodosTimeoutId && this.delayBackupTodos())
        }
        stopBackupTodos() {
            this.delayBackupTodos.cancel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupTodos(!1), null !== this.backupTodosTimeoutId && (window.clearTimeout(this.backupTodosTimeoutId), this.backupTodosTimeoutId = null), this.backupTodosRequestId++
        }
        async backupTodos() {
            const {
                backupTodosRequestId: e
            } = this;
            try {
                const t = await Object(D.h)(this.model, this.rootStore.todosStore.model);
                if (e !== this.backupTodosRequestId) return;
                this.model.data.lastBackupTodosTime = t, this.saveModel(), this.rootStore.userNeedBackupFlagsStore.setNeedBackupTodos(!1), this.webscoketBroadcastEvent(F.a.Todos), Object(i.a)({
                    command: c.J,
                    hasResponse: !1
                })
            } catch (t) {
                if (e !== this.backupTodosRequestId) return;
                this.backupTodosTimeoutId = window.setTimeout(() => {
                    this.backupTodosTimeoutId = null, this.backupTodos()
                }, n.b)
            }
        }
        checkJobs() {
            this.checkIfNeedUpdateVisitorUserToken(), this.checkIfNeedOpenWebsocket()
        }
        stopJobs() {
            this.closeWebsocket(), this.stopRecoverUserBasicData(), this.stopUpdateVisitorUserToken(), this.stopRecoverCommon(), this.stopRecoverIcons(), this.stopRecoverSearcher(), this.stopRecoverBackground(), this.stopRecoverSidebar(), this.stopRecoverStandbyPage(), this.stopBackupCommon(), this.stopBackupIcons(), this.stopBackupSearcher(), this.stopBackupBackground(), this.stopBackupStandbyPage(), this.stopBackupSidebar(), this.stopBackupStandbyPage()
        }
    }
    const z = new o({
        key: n.ac,
        defaultModelGetter: async function() {
            return {
                version: n.bc,
                data: {
                    needBackupCommon: !1,
                    needBackupBackground: !1,
                    needBackupIcons: !1,
                    needBackupStandbyPage: !1,
                    needBackupSidebar: !1,
                    needBackupSearcher: !1,
                    needBackupTodos: !1
                }
            }
        },
        modelAdjuster: async function(e) {
            const {
                version: t
            } = e;
            return t < n.bc && t <= 1 && void 0 === e.data.needBackupTodos && (e.data.needBackupTodos = !1), e.version = n.bc, e
        },
        large: !0
    });
    class H {
        constructor(e) {
            this.rootStore = e
        }
        async init() {
            this.model = await z.get()
        }
        async resetModel() {
            this.model = await z.reset()
        }
        saveModel() {
            z.set(this.model)
        }
        setNeedBackupCommon(e) {
            this.model.data.needBackupCommon = e, this.saveModel()
        }
        setNeedBackupBackground(e) {
            this.model.data.needBackupBackground = e, this.saveModel()
        }
        setNeedBackupIcons(e) {
            this.model.data.needBackupIcons = e, this.saveModel()
        }
        setNeedBackupStandbyPage(e) {
            this.model.data.needBackupStandbyPage = e, this.saveModel()
        }
        setNeedBackupSidebar(e) {
            this.model.data.needBackupSidebar = e, this.saveModel()
        }
        setNeedBackupSearcher(e) {
            this.model.data.needBackupSearcher = e, this.saveModel()
        }
        setNeedBackupTodos(e) {
            this.model.data.needBackupTodos = e, this.saveModel()
        }
    }
    var K = a(59);
    const X = new o({
        key: n.qb,
        defaultModelGetter: K.b,
        modelAdjuster: K.a,
        large: !0
    });
    class Y {
        constructor(e) {
            this.rootStore = e
        }
        async init() {
            this.model = this.rootStore.searcherUpdaterStore.adjustSearcher(await X.get())
        }
        async resetModel() {
            this.model = this.rootStore.searcherUpdaterStore.adjustSearcher(await X.reset())
        }
        saveModel() {
            X.set(this.model)
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        backupModel(e) {
            this.setModel(e), this.rootStore.userStore.checkIfNeedBackupSearcher()
        }
    }
    const Q = new o({
        key: n.Eb,
        defaultModelGetter: async function() {
            return {
                version: n.Fb,
                data: {
                    jobDict: {}
                }
            }
        },
        large: !0
    });
    class Z {
        constructor(e) {
            this.rootStore = e, this.running = !1, this.run = this.run.bind(this)
        }
        async init() {
            this.model = await Q.get()
        }
        async resetModel() {
            this.model = await Q.reset()
        }
        saveModel() {
            Q.set(this.model)
        }
        checkIfNeedRun() {
            this.running || (this.running = !0, this.run())
        }
        async run() {
            try {
                const {
                    jobDict: e
                } = this.model.data, t = Object.keys(e)[0], a = e[t], o = Object.keys(a.data);
                await Object(D.j)(t, o); {
                    const {
                        jobDict: e
                    } = this.model.data, a = e[t];
                    void 0 !== a && (o.forEach(e => {
                        delete a.data[e]
                    }), 0 === Object.keys(a.data).length && delete e[t]), this.saveModel(), 0 === Object.keys(e).length ? this.running = !1 : window.setTimeout(this.run, n.Db)
                }
            } catch (e) {
                window.setTimeout(this.run, n.b)
            }
        }
        addJob(e, t) {
            const {
                jobDict: a
            } = this.model.data;
            void 0 === a[e] && (a[e] = {
                token: e,
                data: {}
            });
            const o = a[e];
            t.forEach(e => {
                o.data[e] = !0
            }), this.saveModel(), this.checkIfNeedRun()
        }
    }
    const ee = new o({
        key: n.bb,
        defaultModelGetter: B.c,
        large: !0
    });
    class te {
        constructor(e) {
            this.rootStore = e, this.update = this.update.bind(this)
        }
        async init() {
            this.model = await ee.get()
        }
        saveModel() {
            ee.set(this.model)
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        async update() {
            try {
                const e = await Object(B.d)();
                e.version > this.model.version && this.setModel(e), window.setTimeout(this.update, n.cb)
            } catch (e) {
                window.setTimeout(this.update, n.b)
            }
        }
        adjustIcons(e) {
            const {
                model: t
            } = this;
            if (t.version <= e.updaterVersion) return e;
            const a = e.data;
            return Object.keys(a.iconDict).forEach(e => {
                const o = a.iconDict[e];
                null !== o.id && void 0 !== t.data.updater[o.id] && (o.url = t.data.updater[o.id])
            }), e.updaterVersion = t.version, e
        }
    }
    const ae = new o({
        key: n.rb,
        defaultModelGetter: K.c,
        large: !0
    });
    class oe {
        constructor(e) {
            this.rootStore = e, this.update = this.update.bind(this)
        }
        async init() {
            this.model = await ae.get()
        }
        saveModel() {
            ae.set(this.model)
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        async update() {
            try {
                const e = await Object(K.e)();
                e.version > this.model.version && this.setModel(e), window.setTimeout(this.update, n.sb)
            } catch (e) {
                window.setTimeout(this.update, n.b)
            }
        }
        adjustSearcher(e) {
            const {
                model: t
            } = this;
            if (t.version <= e.updaterVersion) return e;
            const a = e.data;
            return a.officials.forEach(e => {
                const o = a.dict[e];
                null !== o.id && void 0 !== t.data.updater[o.id] && (o.url = t.data.updater[o.id])
            }), e.updaterVersion = t.version, e
        }
    }
    var ne = a(31);
    const re = new o({
        key: n.Nb,
        defaultModelGetter: async function() {
            return {
                version: n.Ob,
                data: {
                    lastSelectIconGroupUuid: null
                }
            }
        },
        large: !0
    });
    class ie {
        constructor(e) {
            this.rootStore = e
        }
        async init() {
            this.model = await re.get()
        }
        async resetModel() {
            this.model = await re.reset()
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        saveModel() {
            re.set(this.model)
        }
        checkIfNeedUpdate() {
            const {
                iconsStore: e
            } = this.rootStore, {
                groupDict: t
            } = e.model.data, {
                lastSelectIconGroupUuid: a
            } = this.model.data;
            if (null === a || void 0 === t[a]) {
                const t = Object(ne.c)(e.model);
                t !== a && (this.model.data.lastSelectIconGroupUuid = t, this.saveModel(), Object(i.a)({
                    command: c.H,
                    hasResponse: !1
                }))
            }
        }
    }
    const ce = new o({
        key: n.Y,
        defaultModelGetter: async function() {
            return {
                version: n.Z,
                data: {
                    clientId: S()()
                }
            }
        },
        large: !0
    });
    class se {
        constructor(e) {
            this.rootStore = e
        }
        async init() {
            this.model = await ce.get(), this.saveModel()
        }
        async resetModel() {
            this.model = await ce.reset()
        }
        saveModel() {
            ce.set(this.model)
        }
        sendEvent(e) {
            ! function(e, t) {
                const a = new XMLHttpRequest,
                    o = new URLSearchParams;
                o.append("v", "1"), o.append("aip", "1"), o.append("ds", "add-on"), o.append("tid", "UA-158613104-1"), o.append("cid", e), o.append("sr", `${screen.width}x${screen.height}`), o.append("sd", screen.colorDepth + "-bits"), o.append("ul", navigator.language), o.append("t", "event"), o.append("ec", t.category), o.append("ea", t.action), void 0 !== t.label && o.append("el", t.label), a.open("POST", "https://www.google-analytics.com/collect", !0), a.send(o)
            }(this.model.data.clientId, e)
        }
    }
    var de = a(79);
    const ue = new o({
        key: n.Ub,
        defaultModelGetter: de.b,
        large: !0
    });
    class le {
        constructor(e) {
            this.rootStore = e
        }
        async init() {
            this.model = await ue.get()
        }
        async resetModel() {
            this.model = await ue.reset()
        }
        saveModel() {
            ue.set(this.model)
        }
        setModel(e) {
            this.model = e, this.saveModel()
        }
        backupModel(e) {
            this.setModel(e), this.rootStore.userStore.checkIfNeedBackupTodos()
        }
    }
    var pe = a(50),
        he = a(19),
        fe = a(3);
    chrome.runtime.onInstalled.addListener(e => {
        chrome.runtime.setUninstallURL(Object(fe.a)("uninstall_reason_feedback_url")), "install" === e.reason && Object(pe.a)({
            openTarget: he.a.NewTab
        })
    });
    const be = new class {
        constructor() {
            this.commonStore = new u(this), this.tempCommonStore = new f(this), this.backgroundStore = new k(this), this.tempBackgroundStore = new I(this), this.iconsStore = new P(this), this.tempIconsStore = new ie(this), this.iconsUpdaterStore = new te(this), this.weatherStore = new M(this), this.todosStore = new le(this), this.standbyPageStore = new x(this), this.sidebarStore = new q(this), this.userStore = new $(this), this.userNeedBackupFlagsStore = new H(this), this.searcherStore = new Y(this), this.searcherUpdaterStore = new oe(this), this.staticCleanerStore = new Z(this), this.gaStore = new se(this)
        }
        async init() {
            await Promise.all([this.searcherUpdaterStore.init(), this.iconsUpdaterStore.init()]), await Promise.all([this.userStore.init(), this.userNeedBackupFlagsStore.init(), this.commonStore.init(), this.tempCommonStore.init(), this.backgroundStore.init(), this.tempBackgroundStore.init(), this.searcherStore.init(), this.iconsStore.init(), this.tempIconsStore.init(), this.standbyPageStore.init(), this.sidebarStore.init(), this.weatherStore.init(), this.todosStore.init(), this.staticCleanerStore.init(), this.gaStore.init()]), this.afterSetModel(), this.tempCommonStore.update(), this.iconsUpdaterStore.update(), this.searcherUpdaterStore.update(), this.userStore.delayUpdateUserLastVisitTime(), this.staticCleanerStore.checkIfNeedRun()
        }
        beforeSetModel() {
            this.userStore.stopJobs(), this.commonStore.stopJobs(), this.backgroundStore.stopJobs()
        }
        async resetModel() {
            this.beforeSetModel(), await Promise.all([this.userStore.resetModel(), this.userNeedBackupFlagsStore.resetModel(), this.commonStore.resetModel(), this.backgroundStore.resetModel(), this.tempBackgroundStore.resetModel(), this.searcherStore.resetModel(), this.iconsStore.resetModel(), this.tempIconsStore.resetModel(), this.standbyPageStore.resetModel(), this.sidebarStore.resetModel(), this.weatherStore.resetModel(), this.todosStore.resetModel()]), this.afterSetModel()
        }
        afterSetModel() {
            this.userStore.checkJobs(), this.commonStore.checkJobs(), this.backgroundStore.checkJobs(), this.iconsStore.checkJobs()
        }
        getInitialModel() {
            return {
                user: this.userStore.model,
                common: this.commonStore.model,
                tempCommon: this.tempCommonStore.model,
                background: this.backgroundStore.model,
                tempBackground: this.tempBackgroundStore.model,
                searcher: this.searcherStore.model,
                icons: this.iconsStore.model,
                tempIcons: this.tempIconsStore.model,
                standbyPage: this.standbyPageStore.model,
                sidebar: this.sidebarStore.model,
                weather: this.weatherStore.model,
                todos: this.todosStore.model
            }
        }
    };
    window.ready = be.init().then(() => {
        var e;
        e = be, window.addEventListener("online", () => {
            const {
                userStore: t
            } = e;
            t.checkIfNeedSync()
        }), chrome.runtime.onMessage.addListener(({
            command: t,
            data: a
        }, o, n) => {
            switch (t) {
                case c.v:
                    e.userStore.login(a);
                    break;
                case c.w:
                    e.userStore.logout();
                    break;
                case c.l:
                    n(e.getInitialModel());
                    break;
                case c.t:
                    n(e.userStore.model);
                    break;
                case c.N:
                    e.userStore.setModel(a), n();
                    break;
                case c.O:
                    e.userStore.webscoketBroadcastEvent("user_basic_data");
                    break;
                case c.j:
                    n(e.commonStore.model);
                    break;
                case c.b:
                    e.commonStore.backupModel(a), n();
                    break;
                case c.q:
                    n(e.tempCommonStore.model);
                    break;
                case c.i:
                    n(e.backgroundStore.model);
                    break;
                case c.a:
                    e.backgroundStore.backupModel(a), n();
                    break;
                case c.p:
                    n(e.tempBackgroundStore.model);
                    break;
                case c.m:
                    n(e.searcherStore.model);
                    break;
                case c.d:
                    e.searcherStore.backupModel(a), n();
                    break;
                case c.x:
                    e.tempBackgroundStore.nextOne();
                    break;
                case c.k:
                    n(e.iconsStore.model);
                    break;
                case c.c:
                    e.iconsStore.backupModel(a), n();
                    break;
                case c.r:
                    n(e.tempIconsStore.model);
                    break;
                case c.M:
                    e.tempIconsStore.setModel(a), n();
                    break;
                case c.u:
                    n(e.weatherStore.model);
                    break;
                case c.o:
                    n(e.standbyPageStore.model);
                    break;
                case c.f:
                    e.standbyPageStore.backupModel(a), n();
                    break;
                case c.n:
                    n(e.sidebarStore.model);
                    break;
                case c.e:
                    e.sidebarStore.backupModel(a), n();
                    break;
                case c.h:
                    e.staticCleanerStore.addJob(a.token, a.statics);
                    break;
                case c.s:
                    n(e.todosStore.model);
                    break;
                case c.g:
                    e.todosStore.backupModel(a), n();
                    break;
                case c.L:
                    e.gaStore.sendEvent(a)
            }
        })
    })
}]);