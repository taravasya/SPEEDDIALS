! function(e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(a, r, function(t) {
                return e[t]
            }.bind(null, r));
        return a
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 417)
}([function(e, t, n) {
    "use strict";
    e.exports = n(259)
}, function(e, t, n) {
    "use strict";
    (function(e, a) {
        n.d(t, "a", (function() {
            return Me
        })), n.d(t, "b", (function() {
            return Fe
        })), n.d(t, "c", (function() {
            return Z
        })), n.d(t, "d", (function() {
            return Ye
        })), n.d(t, "e", (function() {
            return Je
        })), n.d(t, "f", (function() {
            return et
        })), n.d(t, "g", (function() {
            return Q
        })), n.d(t, "h", (function() {
            return ze
        })), n.d(t, "i", (function() {
            return Be
        })), n.d(t, "j", (function() {
            return ct
        })), n.d(t, "k", (function() {
            return lt
        }));
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        };
        var o = function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };

        function i(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator],
                n = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && n >= e.length && (e = void 0), {
                        value: e && e[n++],
                        done: !e
                    }
                }
            }
        }

        function c(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var a, r, o = n.call(e),
                i = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(a = o.next()).done;) i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r) throw r.error
                }
            }
            return i
        }
        var s = [];
        Object.freeze(s);
        var l = {};

        function u() {
            return ++Ee.mobxGuid
        }

        function d(e) {
            throw p(!1, e), "X"
        }

        function p(e, t) {
            if (!e) throw new Error("[mobx] " + (t || "An invariant failed, however the error is obfuscated because this is an production build."))
        }
        Object.freeze(l);

        function f(e) {
            var t = !1;
            return function() {
                if (!t) return t = !0, e.apply(this, arguments)
            }
        }
        var m = function() {};

        function h(e) {
            return null !== e && "object" == typeof e
        }

        function b(e) {
            if (null === e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            return t === Object.prototype || null === t
        }

        function g(e, t, n) {
            Object.defineProperty(e, t, {
                enumerable: !1,
                writable: !0,
                configurable: !0,
                value: n
            })
        }

        function v(e, t) {
            var n = "isMobX" + e;
            return t.prototype[n] = !0,
                function(e) {
                    return h(e) && !0 === e[n]
                }
        }

        function y(e) {
            return e instanceof Map
        }

        function S(e) {
            return e instanceof Set
        }

        function w(e) {
            var t = new Set;
            for (var n in e) t.add(n);
            return Object.getOwnPropertySymbols(e).forEach((function(n) {
                Object.getOwnPropertyDescriptor(e, n).enumerable && t.add(n)
            })), Array.from(t)
        }

        function k(e) {
            return e && e.toString ? e.toString() : new String(e).toString()
        }

        function E(e) {
            return null === e ? null : "object" == typeof e ? "" + e : e
        }
        var O = Symbol("mobx administration"),
            C = function() {
                function e(e) {
                    void 0 === e && (e = "Atom@" + u()), this.name = e, this.isPendingUnobservation = !1, this.isBeingObserved = !1, this.observers = new Set, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = re.NOT_TRACKING
                }
                return e.prototype.onBecomeObserved = function() {
                    this.onBecomeObservedListeners && this.onBecomeObservedListeners.forEach((function(e) {
                        return e()
                    }))
                }, e.prototype.onBecomeUnobserved = function() {
                    this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners.forEach((function(e) {
                        return e()
                    }))
                }, e.prototype.reportObserved = function() {
                    return Te(this)
                }, e.prototype.reportChanged = function() {
                    _e(),
                        function(e) {
                            if (e.lowestObserverState === re.STALE) return;
                            e.lowestObserverState = re.STALE, e.observers.forEach((function(t) {
                                t.dependenciesState === re.UP_TO_DATE && (t.isTracing !== oe.NONE && Pe(t, e), t.onBecomeStale()), t.dependenciesState = re.STALE
                            }))
                        }(this), Ie()
                }, e.prototype.toString = function() {
                    return this.name
                }, e
            }(),
            x = v("Atom", C);

        function j(e, t, n) {
            void 0 === t && (t = m), void 0 === n && (n = m);
            var a, r = new C(e);
            return t !== m && Qe("onBecomeObserved", r, t, a), n !== m && function(e, t, n) {
                Qe("onBecomeUnobserved", e, t, n)
            }(r, n), r
        }
        var _ = {
                identity: function(e, t) {
                    return e === t
                },
                structural: function(e, t) {
                    return Wt(e, t)
                },
                default: function(e, t) {
                    return Object.is(e, t)
                }
            },
            I = Symbol("mobx did run lazy initializers"),
            T = Symbol("mobx pending decorators"),
            P = {},
            M = {};

        function N(e, t) {
            var n = t ? P : M;
            return n[e] || (n[e] = {
                configurable: !0,
                enumerable: t,
                get: function() {
                    return L(this), this[e]
                },
                set: function(t) {
                    L(this), this[e] = t
                }
            })
        }

        function L(e) {
            if (!0 !== e[I]) {
                var t = e[T];
                if (t)
                    for (var n in g(e, I, !0), t) {
                        var a = t[n];
                        a.propertyCreator(e, a.prop, a.descriptor, a.decoratorTarget, a.decoratorArguments)
                    }
            }
        }

        function R(e, t) {
            return function() {
                var n, a = function(a, r, i, c) {
                    if (!0 === c) return t(a, r, i, a, n), null;
                    if (!Object.prototype.hasOwnProperty.call(a, T)) {
                        var s = a[T];
                        g(a, T, o({}, s))
                    }
                    return a[T][r] = {
                        prop: r,
                        propertyCreator: t,
                        descriptor: i,
                        decoratorTarget: a,
                        decoratorArguments: n
                    }, N(r, e)
                };
                return D(arguments) ? (n = s, a.apply(null, arguments)) : (n = Array.prototype.slice.call(arguments), a)
            }
        }

        function D(e) {
            return (2 === e.length || 3 === e.length) && "string" == typeof e[1] || 4 === e.length && !0 === e[3]
        }

        function A(e, t, n) {
            return at(e) ? e : Array.isArray(e) ? Q.array(e, {
                name: n
            }) : b(e) ? Q.object(e, void 0, {
                name: n
            }) : y(e) ? Q.map(e, {
                name: n
            }) : S(e) ? Q.set(e, {
                name: n
            }) : e
        }

        function B(e) {
            return e
        }

        function G(t) {
            p(t);
            var n = R(!0, (function(e, n, a, r, o) {
                    var i = a ? a.initializer ? a.initializer.call(e) : a.value : void 0;
                    Rt(e).addObservableProp(n, i, t)
                })),
                a = (void 0 !== e && e.env, n);
            return a.enhancer = t, a
        }
        var U = {
            deep: !0,
            name: void 0,
            defaultDecorator: void 0,
            proxy: !0
        };

        function V(e) {
            return null == e ? U : "string" == typeof e ? {
                name: e,
                deep: !0,
                proxy: !0
            } : e
        }
        Object.freeze(U);
        var F = G(A),
            z = G((function(e, t, n) {
                return null == e || Ut(e) || xt(e) || Tt(e) || Nt(e) ? e : Array.isArray(e) ? Q.array(e, {
                    name: n,
                    deep: !1
                }) : b(e) ? Q.object(e, void 0, {
                    name: n,
                    deep: !1
                }) : y(e) ? Q.map(e, {
                    name: n,
                    deep: !1
                }) : S(e) ? Q.set(e, {
                    name: n,
                    deep: !1
                }) : d(!1)
            })),
            W = G(B),
            H = G((function(e, t, n) {
                return Wt(e, t) ? t : e
            }));

        function q(e) {
            return e.defaultDecorator ? e.defaultDecorator.enhancer : !1 === e.deep ? B : A
        }
        var K = {
                box: function(e, t) {
                    arguments.length > 2 && Y("box");
                    var n = V(t);
                    return new ie(e, q(n), n.name, !0, n.equals)
                },
                array: function(e, t) {
                    arguments.length > 2 && Y("array");
                    var n = V(t);
                    return wt(e, q(n), n.name)
                },
                map: function(e, t) {
                    arguments.length > 2 && Y("map");
                    var n = V(t);
                    return new It(e, q(n), n.name)
                },
                set: function(e, t) {
                    arguments.length > 2 && Y("set");
                    var n = V(t);
                    return new Mt(e, q(n), n.name)
                },
                object: function(e, t, n) {
                    "string" == typeof arguments[1] && Y("object");
                    var a = V(n);
                    if (!1 === a.proxy) return Xe({}, e, t, a);
                    var r = Ze(a),
                        o = Xe({}, void 0, void 0, a),
                        i = ft(o);
                    return $e(i, e, t, r), i
                },
                ref: W,
                shallow: z,
                deep: F,
                struct: H
            },
            Q = function(e, t, n) {
                if ("string" == typeof arguments[1]) return F.apply(null, arguments);
                if (at(e)) return e;
                var a = b(e) ? Q.object(e, t, n) : Array.isArray(e) ? Q.array(e, t) : y(e) ? Q.map(e, t) : S(e) ? Q.set(e, t) : e;
                if (a !== e) return a;
                d(!1)
            };

        function Y(e) {
            d("Expected one or two arguments to observable." + e + ". Did you accidentally try to use observable." + e + " as decorator?")
        }
        Object.keys(K).forEach((function(e) {
            return Q[e] = K[e]
        }));
        var J = R(!1, (function(e, t, n, a, r) {
                var i = n.get,
                    c = n.set,
                    s = r[0] || {};
                Rt(e).addComputedProp(e, t, o({
                    get: i,
                    set: c,
                    context: e
                }, s))
            })),
            X = J({
                equals: _.structural
            }),
            Z = function(e, t, n) {
                if ("string" == typeof t) return J.apply(null, arguments);
                if (null !== e && "object" == typeof e && 1 === arguments.length) return J.apply(null, arguments);
                var a = "object" == typeof t ? t : {};
                return a.get = e, a.set = "function" == typeof t ? t : a.set, a.name = a.name || e.name || "", new se(a)
            };

        function $(e, t, n) {
            var a = function() {
                return ee(e, t, n || this, arguments)
            };
            return a.isMobxAction = !0, a
        }

        function ee(e, t, n, a) {
            var r = function(e, t, n, a) {
                    var r = 0;
                    var o = ge();
                    _e();
                    var i = ne(!0);
                    return {
                        prevDerivation: o,
                        prevAllowStateChanges: i,
                        notifySpy: !1,
                        startTime: r
                    }
                }(),
                o = !0;
            try {
                var i = t.apply(n, a);
                return o = !1, i
            } finally {
                o ? (Ee.suppressReactionErrors = o, te(r), Ee.suppressReactionErrors = !1) : te(r)
            }
        }

        function te(e) {
            ae(e.prevAllowStateChanges), Ie(), ve(e.prevDerivation), e.notifySpy
        }

        function ne(e) {
            var t = Ee.allowStateChanges;
            return Ee.allowStateChanges = e, t
        }

        function ae(e) {
            Ee.allowStateChanges = e
        }
        Z.struct = X;
        var re, oe, ie = function(e) {
                function t(t, n, a, r, o) {
                    void 0 === a && (a = "ObservableValue@" + u()), void 0 === r && (r = !0), void 0 === o && (o = _.default);
                    var i = e.call(this, a) || this;
                    return i.enhancer = n, i.name = a, i.equals = o, i.hasUnreportedChange = !1, i.value = n(t, void 0, a), i
                }
                return function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }(t, e), t.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, t.prototype.set = function(e) {
                    this.value;
                    if ((e = this.prepareNewValue(e)) !== Ee.UNCHANGED) {
                        0,
                        this.setNewValue(e)
                    }
                }, t.prototype.prepareNewValue = function(e) {
                    if (fe(this), mt(this)) {
                        var t = bt(this, {
                            object: this,
                            type: "update",
                            newValue: e
                        });
                        if (!t) return Ee.UNCHANGED;
                        e = t.newValue
                    }
                    return e = this.enhancer(e, this.value, this.name), this.equals(this.value, e) ? Ee.UNCHANGED : e
                }, t.prototype.setNewValue = function(e) {
                    var t = this.value;
                    this.value = e, this.reportChanged(), gt(this) && yt(this, {
                        type: "update",
                        object: this,
                        newValue: e,
                        oldValue: t
                    })
                }, t.prototype.get = function() {
                    return this.reportObserved(), this.dehanceValue(this.value)
                }, t.prototype.intercept = function(e) {
                    return ht(this, e)
                }, t.prototype.observe = function(e, t) {
                    return t && e({
                        object: this,
                        type: "update",
                        newValue: this.value,
                        oldValue: void 0
                    }), vt(this, e)
                }, t.prototype.toJSON = function() {
                    return this.get()
                }, t.prototype.toString = function() {
                    return this.name + "[" + this.value + "]"
                }, t.prototype.valueOf = function() {
                    return E(this.get())
                }, t.prototype[Symbol.toPrimitive] = function() {
                    return this.valueOf()
                }, t
            }(C),
            ce = v("ObservableValue", ie),
            se = function() {
                function e(e) {
                    this.dependenciesState = re.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isBeingObserved = !1, this.isPendingUnobservation = !1, this.observers = new Set, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = re.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + u(), this.value = new ue(null), this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = oe.NONE, this.derivation = e.get, this.name = e.name || "ComputedValue@" + u(), e.set && (this.setter = $(this.name + "-setter", e.set)), this.equals = e.equals || (e.compareStructural || e.struct ? _.structural : _.default), this.scope = e.context, this.requiresReaction = !!e.requiresReaction, this.keepAlive = !!e.keepAlive
                }
                return e.prototype.onBecomeStale = function() {
                    ! function(e) {
                        if (e.lowestObserverState !== re.UP_TO_DATE) return;
                        e.lowestObserverState = re.POSSIBLY_STALE, e.observers.forEach((function(t) {
                            t.dependenciesState === re.UP_TO_DATE && (t.dependenciesState = re.POSSIBLY_STALE, t.isTracing !== oe.NONE && Pe(t, e), t.onBecomeStale())
                        }))
                    }(this)
                }, e.prototype.onBecomeObserved = function() {
                    this.onBecomeObservedListeners && this.onBecomeObservedListeners.forEach((function(e) {
                        return e()
                    }))
                }, e.prototype.onBecomeUnobserved = function() {
                    this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners.forEach((function(e) {
                        return e()
                    }))
                }, e.prototype.get = function() {
                    this.isComputing && d("Cycle detected in computation " + this.name + ": " + this.derivation), 0 !== Ee.inBatch || 0 !== this.observers.size || this.keepAlive ? (Te(this), pe(this) && this.trackAndCompute() && function(e) {
                        if (e.lowestObserverState === re.STALE) return;
                        e.lowestObserverState = re.STALE, e.observers.forEach((function(t) {
                            t.dependenciesState === re.POSSIBLY_STALE ? t.dependenciesState = re.STALE : t.dependenciesState === re.UP_TO_DATE && (e.lowestObserverState = re.UP_TO_DATE)
                        }))
                    }(this)) : pe(this) && (this.warnAboutUntrackedRead(), _e(), this.value = this.computeValue(!1), Ie());
                    var e = this.value;
                    if (de(e)) throw e.cause;
                    return e
                }, e.prototype.peek = function() {
                    var e = this.computeValue(!1);
                    if (de(e)) throw e.cause;
                    return e
                }, e.prototype.set = function(e) {
                    if (this.setter) {
                        p(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
                        try {
                            this.setter.call(this.scope, e)
                        } finally {
                            this.isRunningSetter = !1
                        }
                    } else p(!1, !1)
                }, e.prototype.trackAndCompute = function() {
                    var e = this.value,
                        t = this.dependenciesState === re.NOT_TRACKING,
                        n = this.computeValue(!0),
                        a = t || de(e) || de(n) || !this.equals(e, n);
                    return a && (this.value = n), a
                }, e.prototype.computeValue = function(e) {
                    var t;
                    if (this.isComputing = !0, Ee.computationDepth++, e) t = me(this, this.derivation, this.scope);
                    else if (!0 === Ee.disableErrorBoundaries) t = this.derivation.call(this.scope);
                    else try {
                        t = this.derivation.call(this.scope)
                    } catch (e) {
                        t = new ue(e)
                    }
                    return Ee.computationDepth--, this.isComputing = !1, t
                }, e.prototype.suspend = function() {
                    this.keepAlive || (he(this), this.value = void 0)
                }, e.prototype.observe = function(e, t) {
                    var n = this,
                        a = !0,
                        r = void 0;
                    return He((function() {
                        var o = n.get();
                        if (!a || t) {
                            var i = ge();
                            e({
                                type: "update",
                                object: n,
                                newValue: o,
                                oldValue: r
                            }), ve(i)
                        }
                        a = !1, r = o
                    }))
                }, e.prototype.warnAboutUntrackedRead = function() {}, e.prototype.toJSON = function() {
                    return this.get()
                }, e.prototype.toString = function() {
                    return this.name + "[" + this.derivation.toString() + "]"
                }, e.prototype.valueOf = function() {
                    return E(this.get())
                }, e.prototype[Symbol.toPrimitive] = function() {
                    return this.valueOf()
                }, e
            }(),
            le = v("ComputedValue", se);
        ! function(e) {
            e[e.NOT_TRACKING = -1] = "NOT_TRACKING", e[e.UP_TO_DATE = 0] = "UP_TO_DATE", e[e.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", e[e.STALE = 2] = "STALE"
        }(re || (re = {})),
        function(e) {
            e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK"
        }(oe || (oe = {}));
        var ue = function(e) {
            this.cause = e
        };

        function de(e) {
            return e instanceof ue
        }

        function pe(e) {
            switch (e.dependenciesState) {
                case re.UP_TO_DATE:
                    return !1;
                case re.NOT_TRACKING:
                case re.STALE:
                    return !0;
                case re.POSSIBLY_STALE:
                    for (var t = ge(), n = e.observing, a = n.length, r = 0; r < a; r++) {
                        var o = n[r];
                        if (le(o)) {
                            if (Ee.disableErrorBoundaries) o.get();
                            else try {
                                o.get()
                            } catch (e) {
                                return ve(t), !0
                            }
                            if (e.dependenciesState === re.STALE) return ve(t), !0
                        }
                    }
                    return ye(e), ve(t), !1
            }
        }

        function fe(e) {
            var t = e.observers.size > 0;
            Ee.computationDepth > 0 && t && d(!1), Ee.allowStateChanges || !t && "strict" !== Ee.enforceActions || d(!1)
        }

        function me(e, t, n) {
            ye(e), e.newObserving = new Array(e.observing.length + 100), e.unboundDepsCount = 0, e.runId = ++Ee.runId;
            var a, r = Ee.trackingDerivation;
            if (Ee.trackingDerivation = e, !0 === Ee.disableErrorBoundaries) a = t.call(n);
            else try {
                a = t.call(n)
            } catch (e) {
                a = new ue(e)
            }
            return Ee.trackingDerivation = r,
                function(e) {
                    for (var t = e.observing, n = e.observing = e.newObserving, a = re.UP_TO_DATE, r = 0, o = e.unboundDepsCount, i = 0; i < o; i++) {
                        0 === (c = n[i]).diffValue && (c.diffValue = 1, r !== i && (n[r] = c), r++), c.dependenciesState > a && (a = c.dependenciesState)
                    }
                    n.length = r, e.newObserving = null, o = t.length;
                    for (; o--;) {
                        0 === (c = t[o]).diffValue && xe(c, e), c.diffValue = 0
                    }
                    for (; r--;) {
                        var c;
                        1 === (c = n[r]).diffValue && (c.diffValue = 0, Ce(c, e))
                    }
                    a !== re.UP_TO_DATE && (e.dependenciesState = a, e.onBecomeStale())
                }(e), a
        }

        function he(e) {
            var t = e.observing;
            e.observing = [];
            for (var n = t.length; n--;) xe(t[n], e);
            e.dependenciesState = re.NOT_TRACKING
        }

        function be(e) {
            var t = ge();
            try {
                return e()
            } finally {
                ve(t)
            }
        }

        function ge() {
            var e = Ee.trackingDerivation;
            return Ee.trackingDerivation = null, e
        }

        function ve(e) {
            Ee.trackingDerivation = e
        }

        function ye(e) {
            if (e.dependenciesState !== re.UP_TO_DATE) {
                e.dependenciesState = re.UP_TO_DATE;
                for (var t = e.observing, n = t.length; n--;) t[n].lowestObserverState = re.UP_TO_DATE
            }
        }
        var Se = function() {
                this.version = 5, this.UNCHANGED = {}, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.enforceActions = !1, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1
            },
            we = !0,
            ke = !1,
            Ee = function() {
                var e = Oe();
                return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (we = !1), e.__mobxGlobals && e.__mobxGlobals.version !== (new Se).version && (we = !1), we ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = new Se) : (setTimeout((function() {
                    ke || d("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`")
                }), 1), new Se)
            }();

        function Oe() {
            return "undefined" != typeof window ? window : a
        }

        function Ce(e, t) {
            e.observers.add(t), e.lowestObserverState > t.dependenciesState && (e.lowestObserverState = t.dependenciesState)
        }

        function xe(e, t) {
            e.observers.delete(t), 0 === e.observers.size && je(e)
        }

        function je(e) {
            !1 === e.isPendingUnobservation && (e.isPendingUnobservation = !0, Ee.pendingUnobservations.push(e))
        }

        function _e() {
            Ee.inBatch++
        }

        function Ie() {
            if (0 == --Ee.inBatch) {
                Le();
                for (var e = Ee.pendingUnobservations, t = 0; t < e.length; t++) {
                    var n = e[t];
                    n.isPendingUnobservation = !1, 0 === n.observers.size && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBecomeUnobserved()), n instanceof se && n.suspend())
                }
                Ee.pendingUnobservations = []
            }
        }

        function Te(e) {
            var t = Ee.trackingDerivation;
            return null !== t ? (t.runId !== e.lastAccessedBy && (e.lastAccessedBy = t.runId, t.newObserving[t.unboundDepsCount++] = e, e.isBeingObserved || (e.isBeingObserved = !0, e.onBecomeObserved())), !0) : (0 === e.observers.size && Ee.inBatch > 0 && je(e), !1)
        }

        function Pe(e, t) {
            if (console.log("[mobx.trace] '" + e.name + "' is invalidated due to a change in: '" + t.name + "'"), e.isTracing === oe.BREAK) {
                var n = [];
                ! function e(t, n, a) {
                    if (n.length >= 1e3) return void n.push("(and many more)");
                    n.push("" + new Array(a).join("\t") + t.name), t.dependencies && t.dependencies.forEach((function(t) {
                        return e(t, n, a + 1)
                    }))
                }(et(e), n, 1), new Function("debugger;\n/*\nTracing '" + e.name + "'\n\nYou are entering this break point because derivation '" + e.name + "' is being traced and '" + t.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (e instanceof se ? e.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")()
            }
        }
        var Me = function() {
            function e(e, t, n) {
                void 0 === e && (e = "Reaction@" + u()), this.name = e, this.onInvalidate = t, this.errorHandler = n, this.observing = [], this.newObserving = [], this.dependenciesState = re.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + u(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1, this.isTracing = oe.NONE
            }
            return e.prototype.onBecomeStale = function() {
                this.schedule()
            }, e.prototype.schedule = function() {
                this._isScheduled || (this._isScheduled = !0, Ee.pendingReactions.push(this), Le())
            }, e.prototype.isScheduled = function() {
                return this._isScheduled
            }, e.prototype.runReaction = function() {
                if (!this.isDisposed) {
                    if (_e(), this._isScheduled = !1, pe(this)) {
                        this._isTrackPending = !0;
                        try {
                            this.onInvalidate(), this._isTrackPending
                        } catch (e) {
                            this.reportExceptionInDerivation(e)
                        }
                    }
                    Ie()
                }
            }, e.prototype.track = function(e) {
                if (!this.isDisposed) {
                    _e();
                    0, this._isRunning = !0;
                    var t = me(this, e, void 0);
                    this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && he(this), de(t) && this.reportExceptionInDerivation(t.cause), Ie()
                }
            }, e.prototype.reportExceptionInDerivation = function(e) {
                var t = this;
                if (this.errorHandler) this.errorHandler(e, this);
                else {
                    if (Ee.disableErrorBoundaries) throw e;
                    var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
                    Ee.suppressReactionErrors ? console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)") : console.error(n, e), Ee.globalReactionErrorHandlers.forEach((function(n) {
                        return n(e, t)
                    }))
                }
            }, e.prototype.dispose = function() {
                this.isDisposed || (this.isDisposed = !0, this._isRunning || (_e(), he(this), Ie()))
            }, e.prototype.getDisposer = function() {
                var e = this.dispose.bind(this);
                return e[O] = this, e
            }, e.prototype.toString = function() {
                return "Reaction[" + this.name + "]"
            }, e.prototype.trace = function(e) {
                void 0 === e && (e = !1),
                    function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = !1;
                        "boolean" == typeof e[e.length - 1] && (n = e.pop());
                        var a = st(e);
                        if (!a) return d(!1);
                        a.isTracing === oe.NONE && console.log("[mobx.trace] '" + a.name + "' tracing enabled");
                        a.isTracing = n ? oe.BREAK : oe.LOG
                    }(this, e)
            }, e
        }();
        var Ne = function(e) {
            return e()
        };

        function Le() {
            Ee.inBatch > 0 || Ee.isRunningReactions || Ne(Re)
        }

        function Re() {
            Ee.isRunningReactions = !0;
            for (var e = Ee.pendingReactions, t = 0; e.length > 0;) {
                100 == ++t && (console.error("Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: " + e[0]), e.splice(0));
                for (var n = e.splice(0), a = 0, r = n.length; a < r; a++) n[a].runReaction()
            }
            Ee.isRunningReactions = !1
        }
        var De = v("Reaction", Me);

        function Ae(e) {
            var t = Ne;
            Ne = function(n) {
                return e((function() {
                    return t(n)
                }))
            }
        }

        function Be(e) {
            return console.warn("[mobx.spy] Is a no-op in production builds"),
                function() {}
        }

        function Ge() {
            d(!1)
        }

        function Ue(e) {
            return function(t, n, a) {
                if (a) {
                    if (a.value) return {
                        value: $(e, a.value),
                        enumerable: !1,
                        configurable: !0,
                        writable: !0
                    };
                    var r = a.initializer;
                    return {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        initializer: function() {
                            return $(e, r.call(this))
                        }
                    }
                }
                return Ve(e).apply(this, arguments)
            }
        }

        function Ve(e) {
            return function(t, n, a) {
                Object.defineProperty(t, n, {
                    configurable: !0,
                    enumerable: !1,
                    get: function() {},
                    set: function(t) {
                        g(this, n, Fe(e, t))
                    }
                })
            }
        }
        var Fe = function(e, t, n, a) {
            return 1 === arguments.length && "function" == typeof e ? $(e.name || "<unnamed action>", e) : 2 === arguments.length && "function" == typeof t ? $(e, t) : 1 === arguments.length && "string" == typeof e ? Ue(e) : !0 !== a ? Ue(t).apply(null, arguments) : void g(e, t, $(e.name || t, n.value, this))
        };

        function ze(e, t) {
            "string" == typeof e || e.name;
            return ee(0, "function" == typeof e ? e : t, this, void 0)
        }

        function We(e, t, n) {
            g(e, t, $(t, n.bind(e)))
        }

        function He(e, t) {
            void 0 === t && (t = l);
            var n, a = t && t.name || e.name || "Autorun@" + u();
            if (!t.scheduler && !t.delay) n = new Me(a, (function() {
                this.track(i)
            }), t.onError);
            else {
                var r = Ke(t),
                    o = !1;
                n = new Me(a, (function() {
                    o || (o = !0, r((function() {
                        o = !1, n.isDisposed || n.track(i)
                    })))
                }), t.onError)
            }

            function i() {
                e(n)
            }
            return n.schedule(), n.getDisposer()
        }
        Fe.bound = function(e, t, n, a) {
            return !0 === a ? (We(e, t, n.value), null) : n ? {
                configurable: !0,
                enumerable: !1,
                get: function() {
                    return We(this, t, n.value || n.initializer.call(this)), this[t]
                },
                set: Ge
            } : {
                enumerable: !1,
                configurable: !0,
                set: function(e) {
                    We(this, t, e)
                },
                get: function() {}
            }
        };
        var qe = function(e) {
            return e()
        };

        function Ke(e) {
            return e.scheduler ? e.scheduler : e.delay ? function(t) {
                return setTimeout(t, e.delay)
            } : qe
        }

        function Qe(e, t, n, a) {
            var r = "string" == typeof n ? Vt(t, n) : Vt(t),
                o = "string" == typeof n ? a : n,
                i = e + "Listeners";
            return r[i] ? r[i].add(o) : r[i] = new Set([o]), "function" != typeof r[e] ? d(!1) : function() {
                var e = r[i];
                e && (e.delete(o), 0 === e.size && delete r[i])
            }
        }

        function Ye(e) {
            var t = e.enforceActions,
                n = e.computedRequiresReaction,
                a = e.disableErrorBoundaries,
                r = e.reactionScheduler;
            if (!0 === e.isolateGlobalState && ((Ee.pendingReactions.length || Ee.inBatch || Ee.isRunningReactions) && d("isolateGlobalState should be called before MobX is running any reactions"), ke = !0, we && (0 == --Oe().__mobxInstanceCount && (Oe().__mobxGlobals = void 0), Ee = new Se)), void 0 !== t) {
                var o = void 0;
                switch (t) {
                    case !0:
                    case "observed":
                        o = !0;
                        break;
                    case !1:
                    case "never":
                        o = !1;
                        break;
                    case "strict":
                    case "always":
                        o = "strict";
                        break;
                    default:
                        d("Invalid value for 'enforceActions': '" + t + "', expected 'never', 'always' or 'observed'")
                }
                Ee.enforceActions = o, Ee.allowStateChanges = !0 !== o && "strict" !== o
            }
            void 0 !== n && (Ee.computedRequiresReaction = !!n), void 0 !== a && (!0 === a && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), Ee.disableErrorBoundaries = !!a), r && Ae(r)
        }

        function Je(e, t) {
            var n = "function" == typeof e ? e.prototype : e,
                a = function(e) {
                    var a = t[e];
                    Array.isArray(a) || (a = [a]);
                    var r = Object.getOwnPropertyDescriptor(n, e),
                        o = a.reduce((function(t, a) {
                            return a(n, e, t)
                        }), r);
                    o && Object.defineProperty(n, e, o)
                };
            for (var r in t) a(r);
            return e
        }

        function Xe(e, t, n, a) {
            var r = Ze(a = V(a));
            return L(e), Rt(e, a.name, r.enhancer), t && $e(e, t, n, r), e
        }

        function Ze(e) {
            return e.defaultDecorator || (!1 === e.deep ? W : F)
        }

        function $e(e, t, n, a) {
            _e();
            try {
                var r = w(t);
                for (var o in r) {
                    var i = r[o],
                        c = Object.getOwnPropertyDescriptor(t, i);
                    0;
                    var s = (n && i in n ? n[i] : c.get ? J : a)(e, i, c, !0);
                    s && Object.defineProperty(e, i, s)
                }
            } finally {
                Ie()
            }
        }

        function et(e, t) {
            return tt(Vt(e, t))
        }

        function tt(e) {
            var t, n, a = {
                name: e.name
            };
            return e.observing && e.observing.length > 0 && (a.dependencies = (t = e.observing, n = [], t.forEach((function(e) {
                -1 === n.indexOf(e) && n.push(e)
            })), n).map(tt)), a
        }

        function nt(e, t) {
            return null != e && (void 0 !== t ? !!Ut(e) && e[O].values.has(t) : Ut(e) || !!e[O] || x(e) || De(e) || le(e))
        }

        function at(e) {
            return 1 !== arguments.length && d(!1), nt(e)
        }

        function rt(e) {
            return Ut(e) ? e[O].getKeys() : Tt(e) || Nt(e) ? Array.from(e.keys()) : xt(e) ? e.map((function(e, t) {
                return t
            })) : d(!1)
        }
        var ot = {
            detectCycles: !0,
            exportMapsAsObjects: !0,
            recurseEverything: !1
        };

        function it(e, t, n, a) {
            return a.detectCycles && e.set(t, n), n
        }

        function ct(e, t) {
            var n;
            return "boolean" == typeof t && (t = {
                    detectCycles: t
                }), t || (t = ot), t.detectCycles = void 0 === t.detectCycles ? !0 === t.recurseEverything : !0 === t.detectCycles, t.detectCycles && (n = new Map),
                function e(t, n, a) {
                    if (!n.recurseEverything && !at(t)) return t;
                    if ("object" != typeof t) return t;
                    if (null === t) return null;
                    if (t instanceof Date) return t;
                    if (ce(t)) return e(t.get(), n, a);
                    if (at(t) && rt(t), !0 === n.detectCycles && null !== t && a.has(t)) return a.get(t);
                    if (xt(t) || Array.isArray(t)) {
                        var r = it(a, t, [], n),
                            o = t.map((function(t) {
                                return e(t, n, a)
                            }));
                        r.length = o.length;
                        for (var i = 0, c = o.length; i < c; i++) r[i] = o[i];
                        return r
                    }
                    if (Nt(t) || Object.getPrototypeOf(t) === Set.prototype) {
                        if (!1 === n.exportMapsAsObjects) {
                            var s = it(a, t, new Set, n);
                            return t.forEach((function(t) {
                                s.add(e(t, n, a))
                            })), s
                        }
                        var l = it(a, t, [], n);
                        return t.forEach((function(t) {
                            l.push(e(t, n, a))
                        })), l
                    }
                    if (Tt(t) || Object.getPrototypeOf(t) === Map.prototype) {
                        if (!1 === n.exportMapsAsObjects) {
                            var u = it(a, t, new Map, n);
                            return t.forEach((function(t, r) {
                                u.set(r, e(t, n, a))
                            })), u
                        }
                        var d = it(a, t, {}, n);
                        return t.forEach((function(t, r) {
                            d[r] = e(t, n, a)
                        })), d
                    }
                    var p = it(a, t, {}, n);
                    return w(t).forEach((function(r) {
                        p[r] = e(t[r], n, a)
                    })), p
                }(e, t, n)
        }

        function st(e) {
            switch (e.length) {
                case 0:
                    return Ee.trackingDerivation;
                case 1:
                    return Vt(e[0]);
                case 2:
                    return Vt(e[0], e[1])
            }
        }

        function lt(e, t) {
            void 0 === t && (t = void 0), _e();
            try {
                return e.apply(t)
            } finally {
                Ie()
            }
        }

        function ut(e) {
            return e[O]
        }

        function dt(e) {
            return "string" == typeof e || "number" == typeof e || "symbol" == typeof e
        }
        var pt = {
            has: function(e, t) {
                if (t === O || "constructor" === t || t === I) return !0;
                var n = ut(e);
                return dt(t) ? n.has(t) : t in e
            },
            get: function(e, t) {
                if (t === O || "constructor" === t || t === I) return e[t];
                var n = ut(e),
                    a = n.values.get(t);
                if (a instanceof C) {
                    var r = a.get();
                    return void 0 === r && n.has(t), r
                }
                return dt(t) && n.has(t), e[t]
            },
            set: function(e, t, n) {
                return !!dt(t) && (function e(t, n, a) {
                    if (2 !== arguments.length || Nt(t))
                        if (Ut(t)) {
                            var r = t[O],
                                o = r.values.get(n);
                            o ? r.write(n, a) : r.addObservableProp(n, a, r.defaultEnhancer)
                        } else if (Tt(t)) t.set(n, a);
                    else if (Nt(t)) t.add(n);
                    else {
                        if (!xt(t)) return d(!1);
                        "number" != typeof n && (n = parseInt(n, 10)), p(n >= 0, "Not a valid index: '" + n + "'"), _e(), n >= t.length && (t.length = n + 1), t[n] = a, Ie()
                    } else {
                        _e();
                        var i = n;
                        try {
                            for (var c in i) e(t, c, i[c])
                        } finally {
                            Ie()
                        }
                    }
                }(e, t, n), !0)
            },
            deleteProperty: function(e, t) {
                return !!dt(t) && (ut(e).remove(t), !0)
            },
            ownKeys: function(e) {
                return ut(e).keysAtom.reportObserved(), Reflect.ownKeys(e)
            },
            preventExtensions: function(e) {
                return d("Dynamic observable objects cannot be frozen"), !1
            }
        };

        function ft(e) {
            var t = new Proxy(e, pt);
            return e[O].proxy = t, t
        }

        function mt(e) {
            return void 0 !== e.interceptors && e.interceptors.length > 0
        }

        function ht(e, t) {
            var n = e.interceptors || (e.interceptors = []);
            return n.push(t), f((function() {
                var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            }))
        }

        function bt(e, t) {
            var n = ge();
            try {
                var a = e.interceptors;
                if (a)
                    for (var r = 0, o = a.length; r < o && (p(!(t = a[r](t)) || t.type, "Intercept handlers should return nothing or a change object"), t); r++);
                return t
            } finally {
                ve(n)
            }
        }

        function gt(e) {
            return void 0 !== e.changeListeners && e.changeListeners.length > 0
        }

        function vt(e, t) {
            var n = e.changeListeners || (e.changeListeners = []);
            return n.push(t), f((function() {
                var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            }))
        }

        function yt(e, t) {
            var n = ge(),
                a = e.changeListeners;
            if (a) {
                for (var r = 0, o = (a = a.slice()).length; r < o; r++) a[r](t);
                ve(n)
            }
        }
        var St = {
            get: function(e, t) {
                return t === O ? e[O] : "length" === t ? e[O].getArrayLength() : "number" == typeof t ? Et.get.call(e, t) : "string" != typeof t || isNaN(t) ? Et.hasOwnProperty(t) ? Et[t] : e[t] : Et.get.call(e, parseInt(t))
            },
            set: function(e, t, n) {
                return "length" === t ? (e[O].setArrayLength(n), !0) : "number" == typeof t ? (Et.set.call(e, t, n), !0) : !isNaN(t) && (Et.set.call(e, parseInt(t), n), !0)
            },
            preventExtensions: function(e) {
                return d("Observable arrays cannot be frozen"), !1
            }
        };

        function wt(e, t, n, a) {
            void 0 === n && (n = "ObservableArray@" + u()), void 0 === a && (a = !1);
            var r, o, i, c = new kt(n, t, a);
            r = c.values, o = O, i = c, Object.defineProperty(r, o, {
                enumerable: !1,
                writable: !1,
                configurable: !0,
                value: i
            });
            var s = new Proxy(c.values, St);
            if (c.proxy = s, e && e.length) {
                var l = ne(!0);
                c.spliceWithArray(0, 0, e), ae(l)
            }
            return s
        }
        var kt = function() {
                function e(e, t, n) {
                    this.owned = n, this.values = [], this.proxy = void 0, this.lastKnownLength = 0, this.atom = new C(e || "ObservableArray@" + u()), this.enhancer = function(n, a) {
                        return t(n, a, e + "[..]")
                    }
                }
                return e.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.dehanceValues = function(e) {
                    return void 0 !== this.dehancer && e.length > 0 ? e.map(this.dehancer) : e
                }, e.prototype.intercept = function(e) {
                    return ht(this, e)
                }, e.prototype.observe = function(e, t) {
                    return void 0 === t && (t = !1), t && e({
                        object: this.proxy,
                        type: "splice",
                        index: 0,
                        added: this.values.slice(),
                        addedCount: this.values.length,
                        removed: [],
                        removedCount: 0
                    }), vt(this, e)
                }, e.prototype.getArrayLength = function() {
                    return this.atom.reportObserved(), this.values.length
                }, e.prototype.setArrayLength = function(e) {
                    if ("number" != typeof e || e < 0) throw new Error("[mobx.array] Out of range: " + e);
                    var t = this.values.length;
                    if (e !== t)
                        if (e > t) {
                            for (var n = new Array(e - t), a = 0; a < e - t; a++) n[a] = void 0;
                            this.spliceWithArray(t, 0, n)
                        } else this.spliceWithArray(e, t - e)
                }, e.prototype.updateArrayLength = function(e, t) {
                    if (e !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
                    this.lastKnownLength += t
                }, e.prototype.spliceWithArray = function(e, t, n) {
                    var a = this;
                    fe(this.atom);
                    var r = this.values.length;
                    if (void 0 === e ? e = 0 : e > r ? e = r : e < 0 && (e = Math.max(0, r + e)), t = 1 === arguments.length ? r - e : null == t ? 0 : Math.max(0, Math.min(t, r - e)), void 0 === n && (n = s), mt(this)) {
                        var o = bt(this, {
                            object: this.proxy,
                            type: "splice",
                            index: e,
                            removedCount: t,
                            added: n
                        });
                        if (!o) return s;
                        t = o.removedCount, n = o.added
                    }
                    n = 0 === n.length ? n : n.map((function(e) {
                        return a.enhancer(e, void 0)
                    }));
                    var i = this.spliceItemsIntoValues(e, t, n);
                    return 0 === t && 0 === n.length || this.notifyArraySplice(e, n, i), this.dehanceValues(i)
                }, e.prototype.spliceItemsIntoValues = function(e, t, n) {
                    var a;
                    if (n.length < 1e4) return (a = this.values).splice.apply(a, function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
                        return e
                    }([e, t], n));
                    var r = this.values.slice(e, e + t);
                    return this.values = this.values.slice(0, e).concat(n, this.values.slice(e + t)), r
                }, e.prototype.notifyArrayChildUpdate = function(e, t, n) {
                    var a = !this.owned && !1,
                        r = gt(this),
                        o = r || a ? {
                            object: this.proxy,
                            type: "update",
                            index: e,
                            newValue: t,
                            oldValue: n
                        } : null;
                    this.atom.reportChanged(), r && yt(this, o)
                }, e.prototype.notifyArraySplice = function(e, t, n) {
                    var a = !this.owned && !1,
                        r = gt(this),
                        o = r || a ? {
                            object: this.proxy,
                            type: "splice",
                            index: e,
                            removed: n,
                            added: t,
                            removedCount: n.length,
                            addedCount: t.length
                        } : null;
                    this.atom.reportChanged(), r && yt(this, o)
                }, e
            }(),
            Et = {
                intercept: function(e) {
                    return this[O].intercept(e)
                },
                observe: function(e, t) {
                    return void 0 === t && (t = !1), this[O].observe(e, t)
                },
                clear: function() {
                    return this.splice(0)
                },
                replace: function(e) {
                    var t = this[O];
                    return t.spliceWithArray(0, t.values.length, e)
                },
                toJS: function() {
                    return this.slice()
                },
                toJSON: function() {
                    return this.toJS()
                },
                splice: function(e, t) {
                    for (var n = [], a = 2; a < arguments.length; a++) n[a - 2] = arguments[a];
                    var r = this[O];
                    switch (arguments.length) {
                        case 0:
                            return [];
                        case 1:
                            return r.spliceWithArray(e);
                        case 2:
                            return r.spliceWithArray(e, t)
                    }
                    return r.spliceWithArray(e, t, n)
                },
                spliceWithArray: function(e, t, n) {
                    return this[O].spliceWithArray(e, t, n)
                },
                push: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this[O];
                    return n.spliceWithArray(n.values.length, 0, e), n.values.length
                },
                pop: function() {
                    return this.splice(Math.max(this[O].values.length - 1, 0), 1)[0]
                },
                shift: function() {
                    return this.splice(0, 1)[0]
                },
                unshift: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this[O];
                    return n.spliceWithArray(0, 0, e), n.values.length
                },
                reverse: function() {
                    var e = this.slice();
                    return e.reverse.apply(e, arguments)
                },
                sort: function(e) {
                    var t = this.slice();
                    return t.sort.apply(t, arguments)
                },
                remove: function(e) {
                    var t = this[O],
                        n = t.dehanceValues(t.values).indexOf(e);
                    return n > -1 && (this.splice(n, 1), !0)
                },
                get: function(e) {
                    var t = this[O];
                    if (t) {
                        if (e < t.values.length) return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
                        console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + t.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
                    }
                },
                set: function(e, t) {
                    var n = this[O],
                        a = n.values;
                    if (e < a.length) {
                        fe(n.atom);
                        var r = a[e];
                        if (mt(n)) {
                            var o = bt(n, {
                                type: "update",
                                object: n.proxy,
                                index: e,
                                newValue: t
                            });
                            if (!o) return;
                            t = o.newValue
                        }(t = n.enhancer(t, r)) !== r && (a[e] = t, n.notifyArrayChildUpdate(e, t, r))
                    } else {
                        if (e !== a.length) throw new Error("[mobx.array] Index out of bounds, " + e + " is larger than " + a.length);
                        n.spliceWithArray(e, 0, [t])
                    }
                }
            };
        ["concat", "every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach((function(e) {
            Et[e] = function() {
                var t = this[O];
                t.atom.reportObserved();
                var n = t.dehanceValues(t.values);
                return n[e].apply(n, arguments)
            }
        }));
        var Ot, Ct = v("ObservableArrayAdministration", kt);

        function xt(e) {
            return h(e) && Ct(e[O])
        }
        var jt, _t = {},
            It = function() {
                function e(e, t, n) {
                    if (void 0 === t && (t = A), void 0 === n && (n = "ObservableMap@" + u()), this.enhancer = t, this.name = n, this[Ot] = _t, this._keysAtom = j(this.name + ".keys()"), this[Symbol.toStringTag] = "Map", "function" != typeof Map) throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
                    this._data = new Map, this._hasMap = new Map, this.merge(e)
                }
                return e.prototype._has = function(e) {
                    return this._data.has(e)
                }, e.prototype.has = function(e) {
                    return this._hasMap.has(e) ? this._hasMap.get(e).get() : this._updateHasMapEntry(e, !1).get()
                }, e.prototype.set = function(e, t) {
                    var n = this._has(e);
                    if (mt(this)) {
                        var a = bt(this, {
                            type: n ? "update" : "add",
                            object: this,
                            newValue: t,
                            name: e
                        });
                        if (!a) return this;
                        t = a.newValue
                    }
                    return n ? this._updateValue(e, t) : this._addValue(e, t), this
                }, e.prototype.delete = function(e) {
                    var t = this;
                    if (mt(this) && !(a = bt(this, {
                            type: "delete",
                            object: this,
                            name: e
                        }))) return !1;
                    if (this._has(e)) {
                        var n = gt(this),
                            a = n ? {
                                type: "delete",
                                object: this,
                                oldValue: this._data.get(e).value,
                                name: e
                            } : null;
                        return lt((function() {
                            t._keysAtom.reportChanged(), t._updateHasMapEntry(e, !1), t._data.get(e).setNewValue(void 0), t._data.delete(e)
                        })), n && yt(this, a), !0
                    }
                    return !1
                }, e.prototype._updateHasMapEntry = function(e, t) {
                    var n = this._hasMap.get(e);
                    return n ? n.setNewValue(t) : (n = new ie(t, B, this.name + "." + k(e) + "?", !1), this._hasMap.set(e, n)), n
                }, e.prototype._updateValue = function(e, t) {
                    var n = this._data.get(e);
                    if ((t = n.prepareNewValue(t)) !== Ee.UNCHANGED) {
                        var a = gt(this),
                            r = a ? {
                                type: "update",
                                object: this,
                                oldValue: n.value,
                                name: e,
                                newValue: t
                            } : null;
                        0, n.setNewValue(t), a && yt(this, r)
                    }
                }, e.prototype._addValue = function(e, t) {
                    var n = this;
                    fe(this._keysAtom), lt((function() {
                        var a = new ie(t, n.enhancer, n.name + "." + k(e), !1);
                        n._data.set(e, a), t = a.value, n._updateHasMapEntry(e, !0), n._keysAtom.reportChanged()
                    }));
                    var a = gt(this),
                        r = a ? {
                            type: "add",
                            object: this,
                            name: e,
                            newValue: t
                        } : null;
                    a && yt(this, r)
                }, e.prototype.get = function(e) {
                    return this.has(e) ? this.dehanceValue(this._data.get(e).get()) : this.dehanceValue(void 0)
                }, e.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.keys = function() {
                    return this._keysAtom.reportObserved(), this._data.keys()
                }, e.prototype.values = function() {
                    var e = this,
                        t = 0,
                        n = Array.from(this.keys());
                    return Qt({
                        next: function() {
                            return t < n.length ? {
                                value: e.get(n[t++]),
                                done: !1
                            } : {
                                done: !0
                            }
                        }
                    })
                }, e.prototype.entries = function() {
                    var e = this,
                        t = 0,
                        n = Array.from(this.keys());
                    return Qt({
                        next: function() {
                            if (t < n.length) {
                                var a = n[t++];
                                return {
                                    value: [a, e.get(a)],
                                    done: !1
                                }
                            }
                            return {
                                done: !0
                            }
                        }
                    })
                }, e.prototype[(Ot = O, Symbol.iterator)] = function() {
                    return this.entries()
                }, e.prototype.forEach = function(e, t) {
                    var n, a;
                    try {
                        for (var r = i(this), o = r.next(); !o.done; o = r.next()) {
                            var s = c(o.value, 2),
                                l = s[0],
                                u = s[1];
                            e.call(t, u, l, this)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (a = r.return) && a.call(r)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }, e.prototype.merge = function(e) {
                    var t = this;
                    return Tt(e) && (e = e.toJS()), lt((function() {
                        b(e) ? w(e).forEach((function(n) {
                            return t.set(n, e[n])
                        })) : Array.isArray(e) ? e.forEach((function(e) {
                            var n = c(e, 2),
                                a = n[0],
                                r = n[1];
                            return t.set(a, r)
                        })) : y(e) ? (e.constructor !== Map && d("Cannot initialize from classes that inherit from Map: " + e.constructor.name), e.forEach((function(e, n) {
                            return t.set(n, e)
                        }))) : null != e && d("Cannot initialize map from " + e)
                    })), this
                }, e.prototype.clear = function() {
                    var e = this;
                    lt((function() {
                        be((function() {
                            var t, n;
                            try {
                                for (var a = i(e.keys()), r = a.next(); !r.done; r = a.next()) {
                                    var o = r.value;
                                    e.delete(o)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    r && !r.done && (n = a.return) && n.call(a)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }))
                    }))
                }, e.prototype.replace = function(e) {
                    var t = this;
                    return lt((function() {
                        var n, a = b(n = e) ? Object.keys(n) : Array.isArray(n) ? n.map((function(e) {
                            return c(e, 1)[0]
                        })) : y(n) || Tt(n) ? Array.from(n.keys()) : d("Cannot get keys from '" + n + "'");
                        Array.from(t.keys()).filter((function(e) {
                            return -1 === a.indexOf(e)
                        })).forEach((function(e) {
                            return t.delete(e)
                        })), t.merge(e)
                    })), this
                }, Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this._keysAtom.reportObserved(), this._data.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.toPOJO = function() {
                    var e, t, n = {};
                    try {
                        for (var a = i(this), r = a.next(); !r.done; r = a.next()) {
                            var o = c(r.value, 2),
                                s = o[0],
                                l = o[1];
                            n["symbol" == typeof s ? s : k(s)] = l
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (t = a.return) && t.call(a)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return n
                }, e.prototype.toJS = function() {
                    return new Map(this)
                }, e.prototype.toJSON = function() {
                    return this.toPOJO()
                }, e.prototype.toString = function() {
                    var e = this;
                    return this.name + "[{ " + Array.from(this.keys()).map((function(t) {
                        return k(t) + ": " + e.get(t)
                    })).join(", ") + " }]"
                }, e.prototype.observe = function(e, t) {
                    return vt(this, e)
                }, e.prototype.intercept = function(e) {
                    return ht(this, e)
                }, e
            }(),
            Tt = v("ObservableMap", It),
            Pt = {},
            Mt = function() {
                function e(e, t, n) {
                    if (void 0 === t && (t = A), void 0 === n && (n = "ObservableSet@" + u()), this.name = n, this[jt] = Pt, this._data = new Set, this._atom = j(this.name), this[Symbol.toStringTag] = "Set", "function" != typeof Set) throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
                    this.enhancer = function(e, a) {
                        return t(e, a, n)
                    }, e && this.replace(e)
                }
                return e.prototype.dehanceValue = function(e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.clear = function() {
                    var e = this;
                    lt((function() {
                        be((function() {
                            var t, n;
                            try {
                                for (var a = i(e._data.values()), r = a.next(); !r.done; r = a.next()) {
                                    var o = r.value;
                                    e.delete(o)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    r && !r.done && (n = a.return) && n.call(a)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }))
                    }))
                }, e.prototype.forEach = function(e, t) {
                    var n, a;
                    try {
                        for (var r = i(this), o = r.next(); !o.done; o = r.next()) {
                            var c = o.value;
                            e.call(t, c, c, this)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (a = r.return) && a.call(r)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }, Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this._atom.reportObserved(), this._data.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.add = function(e) {
                    var t = this;
                    if ((fe(this._atom), mt(this)) && !(a = bt(this, {
                            type: "add",
                            object: this,
                            newValue: e
                        }))) return this;
                    if (!this.has(e)) {
                        lt((function() {
                            t._data.add(t.enhancer(e, void 0)), t._atom.reportChanged()
                        }));
                        var n = gt(this),
                            a = n ? {
                                type: "add",
                                object: this,
                                newValue: e
                            } : null;
                        0, n && yt(this, a)
                    }
                    return this
                }, e.prototype.delete = function(e) {
                    var t = this;
                    if (mt(this) && !(a = bt(this, {
                            type: "delete",
                            object: this,
                            oldValue: e
                        }))) return !1;
                    if (this.has(e)) {
                        var n = gt(this),
                            a = n ? {
                                type: "delete",
                                object: this,
                                oldValue: e
                            } : null;
                        return lt((function() {
                            t._atom.reportChanged(), t._data.delete(e)
                        })), n && yt(this, a), !0
                    }
                    return !1
                }, e.prototype.has = function(e) {
                    return this._atom.reportObserved(), this._data.has(this.dehanceValue(e))
                }, e.prototype.entries = function() {
                    var e = 0,
                        t = Array.from(this.keys()),
                        n = Array.from(this.values());
                    return Qt({
                        next: function() {
                            var a = e;
                            return e += 1, a < n.length ? {
                                value: [t[a], n[a]],
                                done: !1
                            } : {
                                done: !0
                            }
                        }
                    })
                }, e.prototype.keys = function() {
                    return this.values()
                }, e.prototype.values = function() {
                    this._atom.reportObserved();
                    var e = this,
                        t = 0,
                        n = Array.from(this._data.values());
                    return Qt({
                        next: function() {
                            return t < n.length ? {
                                value: e.dehanceValue(n[t++]),
                                done: !1
                            } : {
                                done: !0
                            }
                        }
                    })
                }, e.prototype.replace = function(e) {
                    var t = this;
                    return Nt(e) && (e = e.toJS()), lt((function() {
                        Array.isArray(e) || S(e) ? (t.clear(), e.forEach((function(e) {
                            return t.add(e)
                        }))) : null != e && d("Cannot initialize set from " + e)
                    })), this
                }, e.prototype.observe = function(e, t) {
                    return vt(this, e)
                }, e.prototype.intercept = function(e) {
                    return ht(this, e)
                }, e.prototype.toJS = function() {
                    return new Set(this)
                }, e.prototype.toString = function() {
                    return this.name + "[ " + Array.from(this).join(", ") + " ]"
                }, e.prototype[(jt = O, Symbol.iterator)] = function() {
                    return this.values()
                }, e
            }(),
            Nt = v("ObservableSet", Mt),
            Lt = function() {
                function e(e, t, n, a) {
                    void 0 === t && (t = new Map), this.target = e, this.values = t, this.name = n, this.defaultEnhancer = a, this.keysAtom = new C(n + ".keys")
                }
                return e.prototype.read = function(e) {
                    return this.values.get(e).get()
                }, e.prototype.write = function(e, t) {
                    var n = this.target,
                        a = this.values.get(e);
                    if (a instanceof se) a.set(t);
                    else {
                        if (mt(this)) {
                            if (!(o = bt(this, {
                                    type: "update",
                                    object: this.proxy || n,
                                    name: e,
                                    newValue: t
                                }))) return;
                            t = o.newValue
                        }
                        if ((t = a.prepareNewValue(t)) !== Ee.UNCHANGED) {
                            var r = gt(this),
                                o = r ? {
                                    type: "update",
                                    object: this.proxy || n,
                                    oldValue: a.value,
                                    name: e,
                                    newValue: t
                                } : null;
                            0, a.setNewValue(t), r && yt(this, o)
                        }
                    }
                }, e.prototype.has = function(e) {
                    var t = this.pendingKeys || (this.pendingKeys = new Map),
                        n = t.get(e);
                    if (n) return n.get();
                    var a = !!this.values.get(e);
                    return n = new ie(a, B, this.name + "." + k(e) + "?", !1), t.set(e, n), n.get()
                }, e.prototype.addObservableProp = function(e, t, n) {
                    void 0 === n && (n = this.defaultEnhancer);
                    var a = this.target;
                    if (mt(this)) {
                        var r = bt(this, {
                            object: this.proxy || a,
                            name: e,
                            type: "add",
                            newValue: t
                        });
                        if (!r) return;
                        t = r.newValue
                    }
                    var o = new ie(t, n, this.name + "." + k(e), !1);
                    this.values.set(e, o), t = o.value, Object.defineProperty(a, e, function(e) {
                        return Dt[e] || (Dt[e] = {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return this[O].read(e)
                            },
                            set: function(t) {
                                this[O].write(e, t)
                            }
                        })
                    }(e)), this.notifyPropertyAddition(e, t)
                }, e.prototype.addComputedProp = function(e, t, n) {
                    var a, r, o, i = this.target;
                    n.name = n.name || this.name + "." + k(t), this.values.set(t, new se(n)), (e === i || (a = e, r = t, !(o = Object.getOwnPropertyDescriptor(a, r)) || !1 !== o.configurable && !1 !== o.writable)) && Object.defineProperty(e, t, function(e) {
                        return At[e] || (At[e] = {
                            configurable: !1,
                            enumerable: !1,
                            get: function() {
                                return Bt(this).read(e)
                            },
                            set: function(t) {
                                Bt(this).write(e, t)
                            }
                        })
                    }(t))
                }, e.prototype.remove = function(e) {
                    if (this.values.has(e)) {
                        var t = this.target;
                        if (mt(this))
                            if (!(i = bt(this, {
                                    object: this.proxy || t,
                                    name: e,
                                    type: "remove"
                                }))) return;
                        try {
                            _e();
                            var n = gt(this),
                                a = this.values.get(e),
                                r = a && a.get();
                            if (a && a.set(void 0), this.keysAtom.reportChanged(), this.values.delete(e), this.pendingKeys) {
                                var o = this.pendingKeys.get(e);
                                o && o.set(!1)
                            }
                            delete this.target[e];
                            var i = n ? {
                                type: "remove",
                                object: this.proxy || t,
                                oldValue: r,
                                name: e
                            } : null;
                            0, n && yt(this, i)
                        } finally {
                            Ie()
                        }
                    }
                }, e.prototype.illegalAccess = function(e, t) {
                    console.warn("Property '" + t + "' of '" + e + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner")
                }, e.prototype.observe = function(e, t) {
                    return vt(this, e)
                }, e.prototype.intercept = function(e) {
                    return ht(this, e)
                }, e.prototype.notifyPropertyAddition = function(e, t) {
                    var n = gt(this),
                        a = n ? {
                            type: "add",
                            object: this.proxy || this.target,
                            name: e,
                            newValue: t
                        } : null;
                    if (n && yt(this, a), this.pendingKeys) {
                        var r = this.pendingKeys.get(e);
                        r && r.set(!0)
                    }
                    this.keysAtom.reportChanged()
                }, e.prototype.getKeys = function() {
                    var e, t;
                    this.keysAtom.reportObserved();
                    var n = [];
                    try {
                        for (var a = i(this.values), r = a.next(); !r.done; r = a.next()) {
                            var o = c(r.value, 2),
                                s = o[0];
                            o[1] instanceof ie && n.push(s)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (t = a.return) && t.call(a)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return n
                }, e
            }();

        function Rt(e, t, n) {
            if (void 0 === t && (t = ""), void 0 === n && (n = A), Object.prototype.hasOwnProperty.call(e, O)) return e[O];
            b(e) || (t = (e.constructor.name || "ObservableObject") + "@" + u()), t || (t = "ObservableObject@" + u());
            var a = new Lt(e, new Map, k(t), n);
            return g(e, O, a), a
        }
        var Dt = Object.create(null),
            At = Object.create(null);

        function Bt(e) {
            var t = e[O];
            return t || (L(e), e[O])
        }
        var Gt = v("ObservableObjectAdministration", Lt);

        function Ut(e) {
            return !!h(e) && (L(e), Gt(e[O]))
        }

        function Vt(e, t) {
            if ("object" == typeof e && null !== e) {
                if (xt(e)) return void 0 !== t && d(!1), e[O].atom;
                if (Nt(e)) return e[O];
                if (Tt(e)) {
                    var n = e;
                    return void 0 === t ? n._keysAtom : ((a = n._data.get(t) || n._hasMap.get(t)) || d(!1), a)
                }
                var a;
                if (L(e), t && !e[O] && e[t], Ut(e)) return t ? ((a = e[O].values.get(t)) || d(!1), a) : d(!1);
                if (x(e) || le(e) || De(e)) return e
            } else if ("function" == typeof e && De(e[O])) return e[O];
            return d(!1)
        }

        function Ft(e, t) {
            return e || d("Expecting some object"), void 0 !== t ? Ft(Vt(e, t)) : x(e) || le(e) || De(e) || Tt(e) || Nt(e) ? e : (L(e), e[O] ? e[O] : void d(!1))
        }
        var zt = Object.prototype.toString;

        function Wt(e, t) {
            return Ht(e, t)
        }

        function Ht(e, t, n, a) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return !1;
            if (e != e) return t != t;
            var r = typeof e;
            return ("function" === r || "object" === r || "object" == typeof t) && function(e, t, n, a) {
                e = qt(e), t = qt(t);
                var r = zt.call(e);
                if (r !== zt.call(t)) return !1;
                switch (r) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + e == "" + t;
                    case "[object Number]":
                        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t;
                    case "[object Symbol]":
                        return "undefined" != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
                }
                var o = "[object Array]" === r;
                if (!o) {
                    if ("object" != typeof e || "object" != typeof t) return !1;
                    var i = e.constructor,
                        c = t.constructor;
                    if (i !== c && !("function" == typeof i && i instanceof i && "function" == typeof c && c instanceof c) && "constructor" in e && "constructor" in t) return !1
                }
                a = a || [];
                var s = (n = n || []).length;
                for (; s--;)
                    if (n[s] === e) return a[s] === t;
                if (n.push(e), a.push(t), o) {
                    if ((s = e.length) !== t.length) return !1;
                    for (; s--;)
                        if (!Ht(e[s], t[s], n, a)) return !1
                } else {
                    var l = Object.keys(e),
                        u = void 0;
                    if (s = l.length, Object.keys(t).length !== s) return !1;
                    for (; s--;)
                        if (u = l[s], !Kt(t, u) || !Ht(e[u], t[u], n, a)) return !1
                }
                return n.pop(), a.pop(), !0
            }(e, t, n, a)
        }

        function qt(e) {
            return xt(e) ? e.slice() : y(e) || Tt(e) || S(e) || Nt(e) ? Array.from(e.entries()) : e
        }

        function Kt(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function Qt(e) {
            return e[Symbol.iterator] = Yt, e
        }

        function Yt() {
            return this
        }
        if ("undefined" == typeof Proxy || "undefined" == typeof Symbol) throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: Be,
            extras: {
                getDebugName: function(e, t) {
                    return (void 0 !== t ? Vt(e, t) : Ut(e) || Tt(e) || Nt(e) ? Ft(e) : Vt(e)).name
                }
            },
            $mobx: O
        })
    }).call(this, n(107), n(108))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return m
    }));
    var a = n(1),
        r = n(0);
    if (!r.useState) throw new Error("mobx-react-lite requires React with Hooks support");
    if (!a.i) throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
    var o = !1;

    function i() {
        return o
    }
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var c = function() {
        return (c = Object.assign || function(e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function s(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var a, r, o = n.call(e),
            i = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(a = o.next()).done;) i.push(a.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (n = o.return) && n.call(o)
            } finally {
                if (r) throw r.error
            }
        }
        return i
    }

    function l(e) {
        return e.current ? Object(a.f)(e.current) : "<unknown>"
    }
    var u = [];

    function d() {
        var e = s(Object(r.useState)(0), 2)[1];
        return Object(r.useCallback)((function() {
            e((function(e) {
                return e + 1
            }))
        }), [])
    }
    var p = {};

    function f(e, t, n) {
        if (void 0 === t && (t = "observed"), void 0 === n && (n = p), i()) return e();
        var o = (n.useForceUpdate || d)(),
            c = Object(r.useRef)(null);
        c.current || (c.current = new a.a("observer(" + t + ")", (function() {
            o()
        })));
        var s, f, m = function() {
            c.current && !c.current.isDisposed && c.current.dispose()
        };
        if (Object(r.useDebugValue)(c, l), function(e) {
                Object(r.useEffect)((function() {
                    return e
                }), u)
            }((function() {
                m()
            })), c.current.track((function() {
                try {
                    s = e()
                } catch (e) {
                    f = e
                }
            })), f) throw m(), f;
        return s
    }

    function m(e, t) {
        if (i()) return e;
        var n, a, o, s = c({
                forwardRef: !1
            }, t),
            l = e.displayName || e.name,
            u = function(t, n) {
                return f((function() {
                    return e(t, n)
                }), l)
            };
        return u.displayName = l, n = s.forwardRef ? Object(r.memo)(Object(r.forwardRef)(u)) : Object(r.memo)(u), a = e, o = n, Object.keys(a).forEach((function(e) {
            a.hasOwnProperty(e) && !h[e] && Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
        })), n.displayName = l, n
    }
    var h = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0
    };

    function b(e) {
        var t = e.children,
            n = e.render,
            a = t || n;
        return "function" != typeof a ? null : f(a)
    }

    function g(e, t, n, a, r) {
        var o = "children" === t ? "render" : "children",
            i = "function" == typeof e[t],
            c = "function" == typeof e[o];
        return i && c ? new Error("MobX Observer: Do not use children and render in the same time in`" + n) : i || c ? null : new Error("Invalid prop `" + r + "` of type `" + typeof e[t] + "` supplied to `" + n + "`, expected `function`.")
    }
    b.propTypes = {
        children: g,
        render: g
    }, b.displayName = "Observer"
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return chrome.i18n.getMessage(e, t)
    }

    function r() {
        return chrome.i18n.getUILanguage()
    }

    function o() {
        return "zh-CN" === r()
    }
    n.d(t, "a", (function() {
        return a
    })), n.d(t, "b", (function() {
        return r
    })), n.d(t, "c", (function() {
        return o
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "lb", (function() {
        return c
    })), n.d(t, "X", (function() {
        return s
    })), n.d(t, "mc", (function() {
        return l
    })), n.d(t, "a", (function() {
        return u
    })), n.d(t, "Gb", (function() {
        return d
    })), n.d(t, "Cb", (function() {
        return p
    })), n.d(t, "lc", (function() {
        return f
    })), n.d(t, "ub", (function() {
        return m
    })), n.d(t, "hc", (function() {
        return h
    })), n.d(t, "Wb", (function() {
        return b
    })), n.d(t, "S", (function() {
        return g
    })), n.d(t, "O", (function() {
        return v
    })), n.d(t, "hb", (function() {
        return y
    })), n.d(t, "ib", (function() {
        return S
    })), n.d(t, "pb", (function() {
        return w
    })), n.d(t, "Q", (function() {
        return k
    })), n.d(t, "R", (function() {
        return E
    })), n.d(t, "Kb", (function() {
        return O
    })), n.d(t, "Mb", (function() {
        return C
    })), n.d(t, "ab", (function() {
        return x
    })), n.d(t, "db", (function() {
        return j
    })), n.d(t, "Nb", (function() {
        return _
    })), n.d(t, "Ob", (function() {
        return I
    })), n.d(t, "wb", (function() {
        return T
    })), n.d(t, "xb", (function() {
        return P
    })), n.d(t, "zb", (function() {
        return M
    })), n.d(t, "Bb", (function() {
        return N
    })), n.d(t, "L", (function() {
        return L
    })), n.d(t, "M", (function() {
        return R
    })), n.d(t, "Ib", (function() {
        return D
    })), n.d(t, "Jb", (function() {
        return A
    })), n.d(t, "ic", (function() {
        return B
    })), n.d(t, "kc", (function() {
        return G
    })), n.d(t, "cc", (function() {
        return U
    })), n.d(t, "dc", (function() {
        return V
    })), n.d(t, "ac", (function() {
        return F
    })), n.d(t, "bc", (function() {
        return z
    })), n.d(t, "qb", (function() {
        return W
    })), n.d(t, "tb", (function() {
        return H
    })), n.d(t, "Ub", (function() {
        return q
    })), n.d(t, "Vb", (function() {
        return K
    })), n.d(t, "Eb", (function() {
        return Q
    })), n.d(t, "Fb", (function() {
        return Y
    })), n.d(t, "Y", (function() {
        return J
    })), n.d(t, "Z", (function() {
        return X
    })), n.d(t, "rb", (function() {
        return Z
    })), n.d(t, "bb", (function() {
        return $
    })), n.d(t, "nb", (function() {
        return ee
    })), n.d(t, "fb", (function() {
        return te
    })), n.d(t, "eb", (function() {
        return ne
    })), n.d(t, "Xb", (function() {
        return ae
    })), n.d(t, "t", (function() {
        return re
    })), n.d(t, "u", (function() {
        return oe
    })), n.d(t, "v", (function() {
        return ie
    })), n.d(t, "l", (function() {
        return ce
    })), n.d(t, "m", (function() {
        return se
    })), n.d(t, "n", (function() {
        return le
    })), n.d(t, "o", (function() {
        return ue
    })), n.d(t, "g", (function() {
        return de
    })), n.d(t, "h", (function() {
        return pe
    })), n.d(t, "i", (function() {
        return fe
    })), n.d(t, "j", (function() {
        return me
    })), n.d(t, "k", (function() {
        return he
    })), n.d(t, "p", (function() {
        return be
    })), n.d(t, "q", (function() {
        return ge
    })), n.d(t, "r", (function() {
        return ve
    })), n.d(t, "s", (function() {
        return ye
    })), n.d(t, "c", (function() {
        return Se
    })), n.d(t, "d", (function() {
        return we
    })), n.d(t, "e", (function() {
        return ke
    })), n.d(t, "f", (function() {
        return Ee
    })), n.d(t, "B", (function() {
        return Oe
    })), n.d(t, "C", (function() {
        return Ce
    })), n.d(t, "D", (function() {
        return xe
    })), n.d(t, "E", (function() {
        return je
    })), n.d(t, "F", (function() {
        return _e
    })), n.d(t, "G", (function() {
        return Ie
    })), n.d(t, "H", (function() {
        return Te
    })), n.d(t, "I", (function() {
        return Pe
    })), n.d(t, "J", (function() {
        return Me
    })), n.d(t, "w", (function() {
        return Ne
    })), n.d(t, "x", (function() {
        return Le
    })), n.d(t, "y", (function() {
        return Re
    })), n.d(t, "z", (function() {
        return De
    })), n.d(t, "A", (function() {
        return Ae
    })), n.d(t, "P", (function() {
        return Be
    })), n.d(t, "T", (function() {
        return Ge
    })), n.d(t, "fc", (function() {
        return Ue
    })), n.d(t, "K", (function() {
        return Ve
    })), n.d(t, "gc", (function() {
        return Fe
    })), n.d(t, "ec", (function() {
        return ze
    })), n.d(t, "Ab", (function() {
        return We
    })), n.d(t, "yb", (function() {
        return He
    })), n.d(t, "ob", (function() {
        return qe
    })), n.d(t, "gb", (function() {
        return Ke
    })), n.d(t, "V", (function() {
        return Qe
    })), n.d(t, "Pb", (function() {
        return Ye
    })), n.d(t, "Rb", (function() {
        return Je
    })), n.d(t, "Sb", (function() {
        return Xe
    })), n.d(t, "Qb", (function() {
        return Ze
    })), n.d(t, "Tb", (function() {
        return $e
    })), n.d(t, "U", (function() {
        return et
    })), n.d(t, "jb", (function() {
        return tt
    })), n.d(t, "b", (function() {
        return nt
    })), n.d(t, "W", (function() {
        return at
    })), n.d(t, "kb", (function() {
        return rt
    })), n.d(t, "Hb", (function() {
        return ot
    })), n.d(t, "N", (function() {
        return it
    })), n.d(t, "Lb", (function() {
        return ct
    })), n.d(t, "vb", (function() {
        return st
    })), n.d(t, "mb", (function() {
        return lt
    })), n.d(t, "cb", (function() {
        return ut
    })), n.d(t, "sb", (function() {
        return dt
    })), n.d(t, "jc", (function() {
        return pt
    })), n.d(t, "Db", (function() {
        return ft
    })), n.d(t, "Yb", (function() {
        return mt
    })), n.d(t, "Zb", (function() {
        return ht
    }));
    var a = n(3),
        r = n(19),
        o = n(5),
        i = n(11);
    const c = navigator.platform.toLowerCase().includes("mac"),
        s = chrome.runtime.id,
        l = "https://www.monknow.com",
        u = "https://dynamic-api.monknow.com",
        d = "https://static.monknow.com",
        p = "https://static-api.monknow.com",
        f = "wss://socket.monknow.com",
        m = "https://search-api.monknow.com",
        h = "https://weather-api.monknow.com",
        b = 200,
        g = "app__dark-theme",
        v = "app__bright-theme",
        y = 120,
        S = "--icon__size",
        w = 72,
        k = "commonStore",
        E = 1,
        O = "tempCommonStore",
        C = 1,
        x = "iconsStore",
        j = 6,
        _ = "tempIconsStore",
        I = 1,
        T = "sidebarStore",
        P = 2,
        M = "standbyPageStore",
        N = 1,
        L = "backgroundStore",
        R = 1,
        D = "tempBackgroundStore",
        A = 1,
        B = "weatherStore",
        G = 1,
        U = "userStore",
        V = 2,
        F = "userNeedBackupFlagsStore",
        z = 2,
        W = "searcherStore",
        H = 6,
        q = "todosStore",
        K = 1,
        Q = "staticCleanerStore",
        Y = 1,
        J = "gaStore",
        X = 1,
        Z = "searcherUpdaterStore",
        $ = "iconsUpdaterStore",
        ee = [{
            text: Object(a.a)("current_tab"),
            value: r.a.CurrentTab
        }, {
            text: Object(a.a)("new_tab"),
            value: r.a.NewTab
        }, {
            text: Object(a.a)("background_tab"),
            value: r.a.BackgroundTab
        }],
        te = [{
            text: Object(a.a)("popular"),
            value: 24
        }, {
            text: Object(a.a)("shopping"),
            value: 9
        }, {
            text: Object(a.a)("social"),
            value: 10
        }, {
            text: Object(a.a)("entertainment"),
            value: 26
        }, {
            text: Object(a.a)("news_and_reading"),
            value: 13
        }, {
            text: Object(a.a)("productivity"),
            value: 14
        }, {
            text: Object(a.a)("internal_app"),
            value: 25
        }, {
            text: Object(a.a)("graphic"),
            value: 15
        }, {
            text: Object(a.a)("lifestyle"),
            value: 16
        }, {
            text: Object(a.a)("travel"),
            value: 17
        }, {
            text: Object(a.a)("technology_and_education"),
            value: 19
        }, {
            text: Object(a.a)("finance"),
            value: 20
        }],
        ne = {
            text: Object(a.a)("add_manually"),
            value: -1
        },
        ae = "long",
        re = "app__searcher__0",
        oe = "app__searcher__1",
        ie = "app__searcher__2",
        ce = "app__particular-icon__label__0",
        se = "app__particular-icon__label__1",
        le = "app__particular-icon__label__2",
        ue = "app__particular-icon__label__3",
        de = "app__particular-icon__desc__0",
        pe = "app__particular-icon__desc__1",
        fe = "app__particular-icon__desc__2",
        me = "app__particular-icon__desc__3",
        he = "app__particular-icon__desc__4",
        be = "app__particular-icon__space__0",
        ge = "app__particular-icon__space__1",
        ve = "app__particular-icon__space__2",
        ye = "app__particular-icon__space__3",
        Se = "app__particular-icon__badge__0",
        we = "app__particular-icon__badge__1",
        ke = "app__particular-icon__badge__2",
        Ee = "app__particular-icon__badge__3",
        Oe = "app__simple-icon__label__0",
        Ce = "app__simple-icon__label__1",
        xe = "app__simple-icon__label__2",
        je = "app__simple-icon__label__3",
        _e = "app__simple-icon__label__4",
        Ie = "app__simple-icon__space__0",
        Te = "app__simple-icon__space__1",
        Pe = "app__simple-icon__space__2",
        Me = "app__simple-icon__space__3",
        Ne = "app__simple-icon__badge__0",
        Le = "app__simple-icon__badge__1",
        Re = "app__simple-icon__badge__2",
        De = "app__simple-icon__badge__3",
        Ae = "app__simple-icon__badge__4",
        Be = {
            type: o.a.Pure,
            data: "#808080"
        },
        Ge = {
            type: o.a.Pure,
            data: "#333436"
        },
        Ue = [{
            text: Object(a.a)("natural"),
            value: 8
        }, {
            text: Object(a.a)("people"),
            value: 11
        }, {
            text: Object(a.a)("animal"),
            value: 12
        }, {
            text: Object(a.a)("architecture"),
            value: 13
        }, {
            text: Object(a.a)("anime"),
            value: 9
        }],
        Ve = [{
            text: Object(a.a)("never"),
            value: 0
        }, {
            text: 30 + Object(a.a)("minute_unit"),
            value: 1800
        }, {
            text: 1 + Object(a.a)("hour_unit"),
            value: 3600
        }, {
            text: 6 + Object(a.a)("hour_unit"),
            value: 21600
        }, {
            text: 12 + Object(a.a)("hour_unit"),
            value: 43200
        }, {
            text: 24 + Object(a.a)("hour_unit"),
            value: 86400
        }],
        Fe = {
            width: 210,
            height: 120
        },
        ze = 40,
        We = 600,
        He = [{
            text: Object(a.a)("never"),
            value: 0
        }, {
            text: 30 + Object(a.a)("second_unit"),
            value: 30
        }, {
            text: 1 + Object(a.a)("minute_unit"),
            value: 60
        }, {
            text: 5 + Object(a.a)("minute_unit"),
            value: 300
        }, {
            text: 10 + Object(a.a)("minute_unit"),
            value: 600
        }, {
            text: 30 + Object(a.a)("minute_unit"),
            value: 1800
        }, {
            text: 1 + Object(a.a)("hour_unit"),
            value: 3600
        }],
        qe = [{
            type: o.a.Pure,
            data: "#ee3b3b"
        }, {
            type: o.a.Pure,
            data: "#fcb138"
        }, {
            type: o.a.Pure,
            data: "#85d724"
        }, {
            type: o.a.Pure,
            data: "#16d9c4"
        }, {
            type: o.a.Pure,
            data: "#276ce6"
        }, {
            type: o.a.Pure,
            data: "#9326e9"
        }, {
            type: o.a.Pure,
            data: "#333333"
        }, Object(i.b)()],
        Ke = [d + "/newtab/icon-group/61df5dde-0afd-4104-9b87-418bd62f95df.svg", d + "/newtab/icon-group/5664820e-0e6e-4040-9fa8-7a7491a5f2b8.svg", d + "/newtab/icon-group/dcc802e4-874f-4ac5-bbe0-dbda5428265d.svg", d + "/newtab/icon-group/9ac2df78-617e-4090-85ea-e68caf566a47.svg", d + "/newtab/icon-group/69e6f555-cff1-42fe-9f8e-677381c04cd3.svg", d + "/newtab/icon-group/3cea0df9-aa97-4d00-9a7a-a576c6805c6b.svg", d + "/newtab/icon-group/15cb3663-ba77-44f6-91ab-2ded15fdec30.svg", d + "/newtab/icon-group/989dee8d-8d2d-4bef-bb5a-ff4c10499353.svg", d + "/newtab/icon-group/abb98f16-8bd4-4c76-9c30-55c91afad96b.svg", d + "/newtab/icon-group/e38a7f4d-b22e-4ee5-8220-b236ac317756.svg"],
        Qe = [{
            text: Object(a.a)("celsius") + "°C",
            value: !1
        }, {
            text: Object(a.a)("fahrenheit") + "°F",
            value: !0
        }],
        Ye = {
            text: Object(a.a)("all"),
            value: 1
        },
        Je = {
            text: Object(a.a)("important"),
            value: 2
        },
        Xe = {
            text: Object(a.a)("uncompleted"),
            value: 3
        },
        Ze = {
            text: Object(a.a)("completed"),
            value: 4
        },
        $e = 255,
        et = "Guest",
        tt = 50,
        nt = 1e4,
        at = 6e5,
        rt = 5e3,
        ot = 4e3,
        it = 3e3,
        ct = 432e5,
        st = 800,
        lt = 3e3,
        ut = 288e5,
        dt = 288e5,
        pt = 216e5,
        ft = 5e3,
        mt = 1e4,
        ht = 432e5
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Pure = "pure"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Image = "image", e.Text = "text"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Png = "image/png", e.Jpeg = "image/jpeg", e.Svg = "image/svg+xml", e.Gif = "image/gif"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    var a = n(145),
        r = n(146);
    e.exports = function(e, t, n) {
        var o = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var i = (e = e || {}).random || (e.rng || a)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
            for (var c = 0; c < 16; ++c) t[o + c] = i[c];
        return t || r(i)
    }
}, function(e, t, n) {
    var a;
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function r() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var a = arguments[t];
                if (a) {
                    var o = typeof a;
                    if ("string" === o || "number" === o) e.push(a);
                    else if (Array.isArray(a) && a.length) {
                        var i = r.apply(null, a);
                        i && e.push(i)
                    } else if ("object" === o)
                        for (var c in a) n.call(a, c) && a[c] && e.push(c)
                }
            }
            return e.join(" ")
        }
        e.exports ? (r.default = r, e.exports = r) : void 0 === (a = function() {
            return r
        }.apply(t, [])) || (e.exports = a)
    }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "l", (function() {
        return a
    })), n.d(t, "B", (function() {
        return r
    })), n.d(t, "t", (function() {
        return o
    })), n.d(t, "N", (function() {
        return i
    })), n.d(t, "J", (function() {
        return c
    })), n.d(t, "O", (function() {
        return s
    })), n.d(t, "j", (function() {
        return l
    })), n.d(t, "b", (function() {
        return u
    })), n.d(t, "z", (function() {
        return d
    })), n.d(t, "q", (function() {
        return p
    })), n.d(t, "G", (function() {
        return f
    })), n.d(t, "i", (function() {
        return m
    })), n.d(t, "a", (function() {
        return h
    })), n.d(t, "y", (function() {
        return b
    })), n.d(t, "x", (function() {
        return g
    })), n.d(t, "p", (function() {
        return v
    })), n.d(t, "F", (function() {
        return y
    })), n.d(t, "m", (function() {
        return S
    })), n.d(t, "d", (function() {
        return w
    })), n.d(t, "C", (function() {
        return k
    })), n.d(t, "k", (function() {
        return E
    })), n.d(t, "c", (function() {
        return O
    })), n.d(t, "A", (function() {
        return C
    })), n.d(t, "r", (function() {
        return x
    })), n.d(t, "M", (function() {
        return j
    })), n.d(t, "H", (function() {
        return _
    })), n.d(t, "u", (function() {
        return I
    })), n.d(t, "K", (function() {
        return T
    })), n.d(t, "s", (function() {
        return P
    })), n.d(t, "g", (function() {
        return M
    })), n.d(t, "I", (function() {
        return N
    })), n.d(t, "o", (function() {
        return L
    })), n.d(t, "f", (function() {
        return R
    })), n.d(t, "E", (function() {
        return D
    })), n.d(t, "n", (function() {
        return A
    })), n.d(t, "e", (function() {
        return B
    })), n.d(t, "D", (function() {
        return G
    })), n.d(t, "w", (function() {
        return U
    })), n.d(t, "v", (function() {
        return V
    })), n.d(t, "h", (function() {
        return F
    })), n.d(t, "L", (function() {
        return z
    }));
    const a = "getInitialModel",
        r = "reloadInitialModel",
        o = "getUserModel",
        i = "backupUserModel",
        c = "reloadUserModel",
        s = "websocketBroadcastUserBasicDataUpdated",
        l = "getCommonModel",
        u = "backupCommonModel",
        d = "reloadCommonModel",
        p = "getTempCommonModel",
        f = "reloadTempCommonModel",
        m = "getBackgroundModel",
        h = "backupBackgroundModel",
        b = "reloadBackgroundModel",
        g = "nextLibBackgroundWallpaper",
        v = "getTempBackgroundModel",
        y = "reloadTempBackgroundModel",
        S = "getSearcherModel",
        w = "backupSearcherModel",
        k = "reloadSearcherModel",
        E = "getIconsModel",
        O = "backupIconsModel",
        C = "reloadIconsModel",
        x = "getTempIconsModel",
        j = "setTempIconsModel",
        _ = "reloadTempIconsModel",
        I = "getWeatherModel",
        T = "reloadWeatherModel",
        P = "getTodosModel",
        M = "backupTodosModel",
        N = "reloadTodosModel",
        L = "getStandbyPageModel",
        R = "backupStandbyPageModel",
        D = "reloadStandbyPageModel",
        A = "getSidebarModel",
        B = "backupSidebarModel",
        G = "reloadSidebarModel",
        U = "logout",
        V = "login",
        F = "deleteUserStatics",
        z = "sendGaEvent"
}, function(e, t, n) {
    "use strict";
    n.d(t, "g", (function() {
        return i
    })), n.d(t, "h", (function() {
        return c
    })), n.d(t, "k", (function() {
        return s
    })), n.d(t, "m", (function() {
        return l
    })), n.d(t, "c", (function() {
        return u
    })), n.d(t, "e", (function() {
        return d
    })), n.d(t, "a", (function() {
        return p
    })), n.d(t, "n", (function() {
        return f
    })), n.d(t, "i", (function() {
        return m
    })), n.d(t, "j", (function() {
        return h
    })), n.d(t, "b", (function() {
        return b
    })), n.d(t, "f", (function() {
        return g
    })), n.d(t, "l", (function() {
        return v
    })), n.d(t, "d", (function() {
        return y
    }));
    var a = n(5),
        r = n(4),
        o = n(54);

    function i(e, t, n) {
        return `rgba(${e}, ${(t.minPercentage+(t.maxPercentage-t.minPercentage)*n/100)/100})`
    }

    function c(e, t) {
        const n = e.slice(1),
            a = n.length;
        let r = null;
        if (3 === a ? r = [n[0] + n[0], n[1] + n[1], n[2] + n[2]] : 6 === a && (r = [n[0] + n[1], n[2] + n[3], n[4] + n[5]]), null !== r) return `rgba(${parseInt(r[0],16)}, ${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${t}%)`
    }

    function s(e) {
        return e.type === a.a.Pure && l(e.data)
    }

    function l(e) {
        return "transparent" === e
    }

    function u(e) {
        const t = {};
        switch (e.type) {
            case a.a.Pure:
                t.backgroundColor = e.data
        }
        return t
    }

    function d(e) {
        return e.type === a.a.Pure ? e.data : "transparent"
    }

    function p(e) {
        let t;
        switch (e.type) {
            case a.a.Pure:
                t = {
                    type: a.a.Pure,
                    data: e.data
                };
                break;
            default:
                t = Object(o.a)(e)
        }
        return t
    }

    function f() {
        const e = r.ob.length;
        for (;;) {
            const t = Math.floor(Math.random() * e),
                n = r.ob[t];
            if (!s(n)) return p(n)
        }
    }

    function m(e) {
        return e.type === a.a.Pure && void 0 !== r.ob.find(t => t.data === e.data)
    }

    function h(e, t) {
        return e.type === t.type && e.type === a.a.Pure && e.data === t.data
    }

    function b() {
        return {
            type: a.a.Pure,
            data: "transparent"
        }
    }

    function g(e) {
        return e.type !== a.a.Pure ? "" : e.data
    }

    function v(e) {
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
            type: a.a.Pure,
            data: t
        };
        switch (e.startsWith("#") && (e = e.slice(1)), e.length) {
            case 3:
                if (/^[0-9a-f]{3}$/.test(e)) return {
                    type: a.a.Pure,
                    data: `#${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`
                };
                break;
            case 6:
                if (/^[0-9a-f]{6}$/.test(e)) return {
                    type: a.a.Pure,
                    data: "#" + e
                }
        }
        return null
    }
}, function(e, t, n) {
    "use strict";
    async function a({
        command: e,
        data: t,
        hasResponse: n
    }) {
        const a = {
            command: e,
            data: t
        };
        if (n) return new Promise(e => {
            chrome.runtime.sendMessage(a, e)
        });
        chrome.runtime.sendMessage(a)
    }
    n.d(t, "a", (function() {
        return a
    }))
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Inputting = "inputting", e.Submitting = "submitting", e.Successed = "successed", e.Failed = "failed"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return r
    })), n.d(t, "c", (function() {
        return o
    })), n.d(t, "b", (function() {
        return i
    })), n.d(t, "f", (function() {
        return c
    })), n.d(t, "h", (function() {
        return s
    })), n.d(t, "a", (function() {
        return l
    })), n.d(t, "g", (function() {
        return u
    })), n.d(t, "e", (function() {
        return d
    }));
    var a = n(24);

    function r(e) {
        return e.uploaded ? e.data : `data:${e.mimeType};base64,${e.data}`
    }

    function o(e) {
        const t = /^data:(.+)(?=;base64,)/.exec(e);
        if (null === t || 2 !== t.length) throw new a.a(500, "convert dataUrl to image failed");
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
        return t.setAttribute("crossorigin", "anonymous"), t.style.cssText = "postion: absolute; opacity: 0; pointer-events: none;", t.src = r(e), document.body.appendChild(t), await new Promise(e => {
            t.addEventListener("load", e, {
                once: !0
            })
        }), t
    }
    async function s(e, t, n) {
        const {
            mimeType: r
        } = e, i = await c(e), s = i.width, l = i.height;
        let u, d;
        if ("stretch" === t) u = s, d = l;
        else {
            if (void 0 === n.width || void 0 === n.height) throw new a.a(500, t + " resize need both width and height");
            const e = n.width / s,
                r = n.height / l;
            let o;
            o = "cover" === t ? Math.max(e, r) : Math.min(e, r), u = Math.ceil(s * o), d = Math.ceil(l * o)
        }
        const p = document.createElement("canvas");
        p.width = u, p.height = d;
        const f = p.getContext("2d");
        if (null === f) throw new a.a(500, "can not get canvas context");
        return f.drawImage(i, 0, 0, u, d), document.body.removeChild(i), o(p.toDataURL(r))
    }
    async function l(e, t) {
        const {
            mimeType: n
        } = e, r = await c(e), i = r.offsetWidth, s = r.offsetHeight, l = document.createElement("canvas");
        l.width = i, l.height = s;
        const u = l.getContext("2d");
        if (null === u) throw new a.a(500, "can not get canvas context");
        return u.filter = `blur(${t}px)`, u.drawImage(r, -t, -t, i + 2 * t, s + 2 * t), document.body.removeChild(r), o(l.toDataURL(n))
    }

    function u(e) {
        const t = atob(e.data),
            n = [];
        for (var a = 0; a < t.length; a++) n.push(t.charCodeAt(a));
        return new Blob([new Uint8Array(n)], {
            type: e.mimeType
        })
    }

    function d(e) {
        return e.uploaded && !e.isOfficial ? [e.data] : []
    }
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(9),
        c = n.n(i),
        s = n(153),
        l = n.n(s);
    t.a = Object(o.a)((function({
        className: e,
        src: t,
        onClick: n
    }) {
        const a = c()(l.a.main, e);
        let o = {};
        const i = `url(${t})`;
        return o.WebkitMaskImage = i, r.a.createElement("i", {
            className: a,
            style: o,
            onClick: n
        })
    }))
}, function(e, t, n) {
    e.exports = n(129)
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Bright = "bright", e.Dark = "dark", e.Auto = "auto"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return c
    }));
    var a = n(20),
        r = n(27),
        o = n(4);

    function i(e) {
        let t;
        if (e.data.type === a.a.Visitor) {
            if (null === e.data.token) throw Object(r.b)();
            t = e.data.token
        } else t = e.data.token;
        return t
    }

    function c(e) {
        let t;
        switch (e.data.type) {
            case a.a.Visitor:
                t = {
                    lastBackupCommonTime: e.data.lastBackupCommonTime,
                    lastBackupBackgroundTime: e.data.lastBackupBackgroundTime,
                    lastBackupIconsTime: e.data.lastBackupIconsTime,
                    lastBackupStandbyPageTime: e.data.lastBackupStandbyPageTime,
                    lastBackupSidebarTime: e.data.lastBackupSidebarTime,
                    lastBackupSearcherTime: e.data.lastBackupSearcherTime,
                    lastBackupTodosTime: e.data.lastBackupTodosTime,
                    type: a.a.Visitor,
                    nickname: e.data.nickname,
                    token: e.data.token,
                    portraitSrc: e.data.portraitSrc,
                    inited: e.data.inited
                };
                break;
            case a.a.Email:
                t = {
                    lastBackupCommonTime: e.data.lastBackupCommonTime,
                    lastBackupBackgroundTime: e.data.lastBackupBackgroundTime,
                    lastBackupIconsTime: e.data.lastBackupIconsTime,
                    lastBackupStandbyPageTime: e.data.lastBackupStandbyPageTime,
                    lastBackupSidebarTime: e.data.lastBackupSidebarTime,
                    lastBackupSearcherTime: e.data.lastBackupSearcherTime,
                    lastBackupTodosTime: e.data.lastBackupTodosTime,
                    type: a.a.Email,
                    nickname: e.data.nickname,
                    token: e.data.token,
                    portraitSrc: e.data.portraitSrc,
                    email: e.data.email
                }
        }
        return {
            version: o.dc,
            data: t
        }
    }
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.CurrentTab = "currentTab", e.NewTab = "newTab", e.BackgroundTab = "backgroundTab", e.NewWindow = "newWindow", e.NewIncognitoWindow = "newIncognitoWindow"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Visitor = "visitor", e.Email = "email", e.Weixin = "weixin"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Common = "common", e.Background = "background", e.Icons = "icons", e.StandbyPage = "standby", e.Sidebar = "sidebar", e.Searcher = "searcher", e.Todos = "todos"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return {
            errored: !1,
            value: e,
            errorMessage: "",
            touched: !1
        }
    }

    function r(e, t) {
        e.errored = !1, e.value = t, e.touched = !1
    }
    n.d(t, "a", (function() {
        return a
    })), n.d(t, "b", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Color = "color", e.Local = "local", e.Lib = "lib"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    class a extends Error {
        constructor(e, t) {
            super(t), this.code = e
        }
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1DzzHnyr0PWan_yx7BH2PK",
        customizeImageDisabledMain: "_1jdzH-sABp15RD3RFAdat3",
        item: "_3PfKW0F5zNGZ0_i5b4OFjU",
        disabledItem: "WkIpsNeP0ZxODgh2JMfZP",
        itemBtn: "_1abmwnCj-IqFvZZT3_DZy0",
        itemBtnIcon: "_8I2Ulirx-Jm_Z7awa8hNT",
        itemBtnText: "_3S0-dbBnjI9E9YrUHuOejg",
        itemLabel: "_22Bk9qKmv1hfgT0avgvLPU",
        loadingItem: "_3WHstWb7cJ6y4LOIBPQ7Xh",
        selectedItem: "_2qCGdIES8h5Dv1NO1w4FXP"
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "m", (function() {
        return g
    })), n.d(t, "a", (function() {
        return v
    })), n.d(t, "x", (function() {
        return y
    })), n.d(t, "y", (function() {
        return S
    })), n.d(t, "k", (function() {
        return w
    })), n.d(t, "n", (function() {
        return k
    })), n.d(t, "l", (function() {
        return E
    })), n.d(t, "q", (function() {
        return C
    })), n.d(t, "o", (function() {
        return x
    })), n.d(t, "r", (function() {
        return j
    })), n.d(t, "v", (function() {
        return _
    })), n.d(t, "u", (function() {
        return I
    })), n.d(t, "t", (function() {
        return T
    })), n.d(t, "w", (function() {
        return P
    })), n.d(t, "c", (function() {
        return N
    })), n.d(t, "b", (function() {
        return L
    })), n.d(t, "d", (function() {
        return R
    })), n.d(t, "g", (function() {
        return D
    })), n.d(t, "f", (function() {
        return A
    })), n.d(t, "e", (function() {
        return B
    })), n.d(t, "h", (function() {
        return G
    })), n.d(t, "s", (function() {
        return U
    })), n.d(t, "A", (function() {
        return V
    })), n.d(t, "z", (function() {
        return F
    })), n.d(t, "B", (function() {
        return z
    })), n.d(t, "p", (function() {
        return W
    })), n.d(t, "j", (function() {
        return H
    })), n.d(t, "C", (function() {
        return q
    })), n.d(t, "i", (function() {
        return K
    }));
    var a = n(16),
        r = n.n(a),
        o = n(4),
        i = n(21),
        c = n(18),
        s = n(24),
        l = n(59),
        u = n(20),
        d = n(96),
        p = n(64),
        f = n(42),
        m = n(97),
        h = n(98),
        b = n(79);
    async function g() {
        return {
            version: o.dc,
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
    async function v(e) {
        const {
            version: t
        } = e;
        return t < o.dc && t <= 1 && void 0 === e.data.lastBackupTodosTime && (e.data.lastBackupTodosTime = 0), e.version = o.dc, e
    }
    async function y() {
        return (await r()({
            url: o.a + "/home/setup",
            method: "get"
        })).data.data.secret
    }
    async function S(e, {
        email: t,
        password: n
    }, a) {
        await r()({
            url: o.a + "/user/register",
            method: "post",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                email: t,
                password: n,
                key: a.token,
                captcha: a.code
            }
        })
    }
    async function w(e, t) {
        await r()({
            url: o.a + "/home/sendmail",
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
    async function k(e, {
        email: t,
        password: n
    }) {
        const a = (await r()({
            url: o.a + "/user/login",
            method: "post",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                email: t,
                password: n
            }
        })).data;
        return {
            needBackup: 0 === a.data.isBackup,
            user: {
                token: a.data.secret,
                nickname: a.data.name,
                portraitSrc: a.data.avatar || null,
                email: t
            }
        }
    }
    async function E(e, t, n) {
        const a = (await r()({
            url: o.a + "/user/data/fullbackup",
            method: "post",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                secret: t,
                name: e.data.nickname,
                common: JSON.stringify(n.common),
                background: JSON.stringify(n.background),
                searcher: JSON.stringify(n.searcher),
                icons: JSON.stringify(n.icons),
                standby: JSON.stringify(n.standbyPage),
                sidebar: JSON.stringify(n.sidebar),
                todos: JSON.stringify(n.todos)
            }
        })).data;
        return {
            common: {
                lastBackupTime: 1e3 * a.data.commonUpdatedAt,
                data: n.common
            },
            background: {
                lastBackupTime: 1e3 * a.data.backgroundUpdatedAt,
                data: n.background
            },
            searcher: {
                lastBackupTime: 1e3 * a.data.searcherUpdatedAt,
                data: n.searcher
            },
            icons: {
                lastBackupTime: 1e3 * a.data.iconsUpdatedAt,
                data: n.icons
            },
            sidebar: {
                lastBackupTime: 1e3 * a.data.sidebarUpdatedAt,
                data: n.sidebar
            },
            standbyPage: {
                lastBackupTime: 1e3 * a.data.standbyUpdatedAt,
                data: n.standbyPage
            },
            todos: {
                lastBackupTime: 1e3 * a.data.todosUpdatedAt,
                data: n.todos
            }
        }
    }
    async function O(e, t) {
        let n;
        n = "string" == typeof e ? e : Object(c.b)(e);
        const a = (await r()({
            url: o.a + "/user/data/info",
            method: "get",
            headers: {
                secret: n
            },
            params: {
                type: t
            }
        })).data;
        if (void 0 === a.data.updatedAt || void 0 === a.data.data) throw new s.a(404, "not found");
        return {
            lastBackupTime: 1e3 * a.data.updatedAt,
            data: JSON.parse(a.data.data)
        }
    }
    async function C(e) {
        const t = await O(e, i.a.Common);
        return t.data = await Object(d.a)(t.data), t
    }
    async function x(e) {
        const t = await O(e, i.a.Background);
        return t.data = await Object(p.a)(t.data), t
    }
    async function j(e) {
        const t = await O(e, i.a.Icons);
        return t.data = await Object(f.a)(t.data), t
    }
    async function _(e) {
        const t = await O(e, i.a.StandbyPage);
        return t.data = await Object(m.a)(t.data), t
    }
    async function I(e) {
        const t = await O(e, i.a.Sidebar);
        return t.data = await Object(h.a)(t.data), t
    }
    async function T(e) {
        const t = await O(e, i.a.Searcher);
        return t.data = await Object(l.a)(t.data), t
    }
    async function P(e) {
        let t;
        try {
            t = await O(e, i.a.Todos), t.data = await Object(b.a)(t.data)
        } catch (e) {
            if (!(e instanceof s.a && 404 === e.code)) throw e;
            t = {
                lastBackupTime: 0,
                data: await Object(b.b)()
            }
        }
        return t
    }
    async function M(e, t, n) {
        return 1e3 * (await r()({
            url: o.a + "/user/data/update",
            method: "put",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                type: t,
                data: JSON.stringify(n)
            }
        })).data.data.updatedAt
    }
    async function N(e, t) {
        return M(e, i.a.Common, t)
    }
    async function L(e, t) {
        return M(e, i.a.Background, t)
    }
    async function R(e, t) {
        return M(e, i.a.Icons, t)
    }
    async function D(e, t) {
        return M(e, i.a.StandbyPage, t)
    }
    async function A(e, t) {
        return M(e, i.a.Sidebar, t)
    }
    async function B(e, t) {
        return M(e, i.a.Searcher, t)
    }
    async function G(e, t) {
        return M(e, i.a.Todos, t)
    }
    async function U(e) {
        const t = (await r()({
                url: o.a + "/user/data/all",
                method: "get",
                headers: {
                    secret: Object(c.b)(e)
                }
            })).data,
            n = {};
        for (const e of t.data) n[e.type] = 1e3 * e.updatedAt;
        return {
            common: n[i.a.Common] || 0,
            background: n[i.a.Background] || 0,
            icons: n[i.a.Icons] || 0,
            standbyPage: n[i.a.StandbyPage] || 0,
            sidebar: n[i.a.Sidebar] || 0,
            searcher: n[i.a.Searcher] || 0,
            todos: n[i.a.Todos] || 0
        }
    }
    async function V(e, t) {
        await r()({
            url: o.a + "/user/changename",
            method: "put",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                name: t
            }
        })
    }
    async function F(e, t, n) {
        await r()({
            url: o.a + "/user/changepwd",
            method: "put",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                old: t,
                new: n
            }
        })
    }
    async function z(e, t) {
        if (!t.uploaded) throw new s.a(500, "image not uploaded");
        await r()({
            url: o.a + "/user/changeavatar",
            method: "put",
            headers: {
                secret: Object(c.b)(e)
            },
            data: {
                avatar: t.data
            }
        })
    }
    async function W(e) {
        const t = (await r()({
            url: o.a + "/user/info",
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
    async function H(e, t) {
        await r()({
            url: o.a + "/home/s3del",
            method: "delete",
            headers: {
                secret: e
            },
            data: {
                key: t
            }
        })
    }
    async function q(e) {
        e.data.type === u.a.Visitor && await r()({
            url: o.a + "/user/visitAt",
            method: "post",
            headers: {
                secret: Object(c.b)(e)
            }
        })
    }
    async function K(e) {
        e.data.type === u.a.Visitor && await r()({
            url: o.a + "/user/data/del",
            method: "delete",
            headers: {
                secret: Object(c.b)(e)
            }
        })
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return c
    })), n.d(t, "c", (function() {
        return s
    })), n.d(t, "d", (function() {
        return l
    }));
    var a = n(24),
        r = n(3),
        o = n(4);

    function i() {
        return new a.a(400, "user token missing")
    }

    function c() {
        return new a.a(400, "location missing")
    }

    function s(e) {
        let t = null;
        if (e instanceof a.a) {
            t = e.code
        } else if (!0 === e.isAxiosError) {
            const n = e;
            if (void 0 !== n.response) {
                const {
                    response: e
                } = n;
                t = e.status;
                const {
                    url: a
                } = n.config;
                void 0 !== a && a.startsWith(o.a) && "number" == typeof e.data.code && 0 !== e.data.code && (t = e.data.code)
            }
        }
        return t
    }

    function l(e, t) {
        const n = s(e);
        if (null === n) return Object(r.a)("network_error");
        return Object.assign({
            500: Object(r.a)("server_error")
        }, t)[n] || Object(r.a)("server_error")
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return null != e && "object" == typeof e && 1 === e.nodeType
    }

    function r(e, t) {
        return (!t || "hidden" !== e) && ("visible" !== e && "clip" !== e)
    }

    function o(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
            var n = getComputedStyle(e, null);
            return r(n.overflowY, t) || r(n.overflowX, t) || function(e) {
                var t = function(e) {
                    if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                    try {
                        return e.ownerDocument.defaultView.frameElement
                    } catch (e) {
                        return null
                    }
                }(e);
                return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
            }(e)
        }
        return !1
    }

    function i(e, t, n, a, r, o, i, c) {
        return o < e && i > t || o > e && i < t ? 0 : o <= e && c <= n || i >= t && c >= n ? o - e - a : i > t && c < n || o < e && c > n ? i - t + r : 0
    }
    var c = function(e, t) {
        var n = t.scrollMode,
            r = t.block,
            c = t.inline,
            s = t.boundary,
            l = t.skipOverflowHiddenElements,
            u = "function" == typeof s ? s : function(e) {
                return e !== s
            };
        if (!a(e)) throw new TypeError("Invalid target");
        for (var d = document.scrollingElement || document.documentElement, p = [], f = e; a(f) && u(f);) {
            if ((f = f.parentNode) === d) {
                p.push(f);
                break
            }
            f === document.body && o(f) && !o(document.documentElement) || o(f, l) && p.push(f)
        }
        for (var m = window.visualViewport ? visualViewport.width : innerWidth, h = window.visualViewport ? visualViewport.height : innerHeight, b = window.scrollX || pageXOffset, g = window.scrollY || pageYOffset, v = e.getBoundingClientRect(), y = v.height, S = v.width, w = v.top, k = v.right, E = v.bottom, O = v.left, C = "start" === r || "nearest" === r ? w : "end" === r ? E : w + y / 2, x = "center" === c ? O + S / 2 : "end" === c ? k : O, j = [], _ = 0; _ < p.length; _++) {
            var I = p[_],
                T = I.getBoundingClientRect(),
                P = T.height,
                M = T.width,
                N = T.top,
                L = T.right,
                R = T.bottom,
                D = T.left;
            if ("if-needed" === n && w >= 0 && O >= 0 && E <= h && k <= m && w >= N && E <= R && O >= D && k <= L) return j;
            var A = getComputedStyle(I),
                B = parseInt(A.borderLeftWidth, 10),
                G = parseInt(A.borderTopWidth, 10),
                U = parseInt(A.borderRightWidth, 10),
                V = parseInt(A.borderBottomWidth, 10),
                F = 0,
                z = 0,
                W = "offsetWidth" in I ? I.offsetWidth - I.clientWidth - B - U : 0,
                H = "offsetHeight" in I ? I.offsetHeight - I.clientHeight - G - V : 0;
            if (d === I) F = "start" === r ? C : "end" === r ? C - h : "nearest" === r ? i(g, g + h, h, G, V, g + C, g + C + y, y) : C - h / 2, z = "start" === c ? x : "center" === c ? x - m / 2 : "end" === c ? x - m : i(b, b + m, m, B, U, b + x, b + x + S, S), F = Math.max(0, F + g), z = Math.max(0, z + b);
            else {
                F = "start" === r ? C - N - G : "end" === r ? C - R + V + H : "nearest" === r ? i(N, R, P, G, V + H, C, C + y, y) : C - (N + P / 2) + H / 2, z = "start" === c ? x - D - B : "center" === c ? x - (D + M / 2) + W / 2 : "end" === c ? x - L + U + W : i(D, L, M, B, U + W, x, x + S, S);
                var q = I.scrollLeft,
                    K = I.scrollTop;
                C += K - (F = Math.max(0, Math.min(K + F, I.scrollHeight - P + H))), x += q - (z = Math.max(0, Math.min(q + z, I.scrollWidth - M + W)))
            }
            j.push({
                el: I,
                top: F,
                left: z
            })
        }
        return j
    };

    function s(e) {
        return e === Object(e) && 0 !== Object.keys(e).length
    }
    var l = function(e, t) {
        var n = !e.ownerDocument.documentElement.contains(e);
        if (s(t) && "function" == typeof t.behavior) return t.behavior(n ? [] : c(e, t));
        if (!n) {
            var a = function(e) {
                return !1 === e ? {
                    block: "end",
                    inline: "nearest"
                } : s(e) ? e : {
                    block: "start",
                    inline: "nearest"
                }
            }(t);
            return function(e, t) {
                void 0 === t && (t = "auto");
                var n = "scrollBehavior" in document.body.style;
                e.forEach((function(e) {
                    var a = e.el,
                        r = e.top,
                        o = e.left;
                    a.scroll && n ? a.scroll({
                        top: r,
                        left: o,
                        behavior: t
                    }) : (a.scrollTop = r, a.scrollLeft = o)
                }))
            }(c(e, a), a.behavior)
        }
    };

    function u(e, t) {
        window.setTimeout(() => {
            const n = document.getElementById(e);
            null !== n && l(n, void 0 === t ? {
                skipOverflowHiddenElements: !0
            } : {
                behavior: t.behavior,
                block: t.block,
                inline: t.inline,
                skipOverflowHiddenElements: !0
            })
        }, 0)
    }

    function d(e) {
        return e
    }

    function p(e) {
        return e instanceof HTMLInputElement && ("text" === e.type || "search" === e.type) || e instanceof HTMLTextAreaElement
    }
    n.d(t, "d", (function() {
        return u
    })), n.d(t, "c", (function() {
        return d
    })), n.d(t, "a", (function() {
        return p
    })), n.d(t, "b", (function() {
        return y
    }));
    let f = !1,
        m = !1;
    const h = [];

    function b(e) {
        if (m || "Escape" !== e.key) return;
        e.preventDefault();
        const {
            length: t
        } = h;
        h[t - 1]()
    }

    function g() {
        m = !0
    }

    function v() {
        m = !1
    }

    function y(e) {
        return f || (f = !0, document.addEventListener("compositionstart", g), document.addEventListener("compositionend", v), document.addEventListener("keydown", b)), h.push(e), () => {
            h.splice(h.indexOf(e), 1), 0 === h.length && (f = !1, m = !1, document.removeEventListener("compositionstart", g), document.removeEventListener("compositionend", v), document.removeEventListener("keydown", b))
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(88),
        r = n(130),
        o = Object.prototype.toString;

    function i(e) {
        return "[object Array]" === o.call(e)
    }

    function c(e) {
        return null !== e && "object" == typeof e
    }

    function s(e) {
        return "[object Function]" === o.call(e)
    }

    function l(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), i(e))
                for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
            else
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
    }
    e.exports = {
        isArray: i,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === o.call(e)
        },
        isBuffer: r,
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
            return "[object Date]" === o.call(e)
        },
        isFile: function(e) {
            return "[object File]" === o.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === o.call(e)
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
        forEach: l,
        merge: function e() {
            var t = {};

            function n(n, a) {
                "object" == typeof t[a] && "object" == typeof n ? t[a] = e(t[a], n) : t[a] = n
            }
            for (var a = 0, r = arguments.length; a < r; a++) l(arguments[a], n);
            return t
        },
        deepMerge: function e() {
            var t = {};

            function n(n, a) {
                "object" == typeof t[a] && "object" == typeof n ? t[a] = e(t[a], n) : t[a] = "object" == typeof n ? e({}, n) : n
            }
            for (var a = 0, r = arguments.length; a < r; a++) l(arguments[a], n);
            return t
        },
        extend: function(e, t, n) {
            return l(t, (function(t, r) {
                e[r] = n && "function" == typeof t ? a(t, n) : t
            })), e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(61),
        c = n.n(i),
        s = n(73);
    t.a = Object(o.a)((function({
        errored: e = !1,
        errorMessage: t,
        label: n,
        children: a
    }) {
        return r.a.createElement("div", {
            className: c.a.main
        }, r.a.createElement("div", {
            className: c.a.label
        }, r.a.createElement("div", {
            className: c.a.labelText
        }, n), e && r.a.createElement("div", {
            className: c.a.errorMessage
        }, r.a.createElement(s.a, null, t))), r.a.createElement("div", {
            className: c.a.content
        }, a))
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return s
    })), n.d(t, "f", (function() {
        return l
    })), n.d(t, "a", (function() {
        return u
    })), n.d(t, "b", (function() {
        return d
    })), n.d(t, "d", (function() {
        return p
    })), n.d(t, "e", (function() {
        return f
    })), n.d(t, "g", (function() {
        return m
    }));
    var a = n(11),
        r = n(17),
        o = n(6),
        i = n(14),
        c = n(54);

    function s(e) {
        const {
            groups: t
        } = e.data;
        return 0 === t.length ? null : t[0]
    }

    function l(e, t) {
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
            case o.a.Image:
                t = {
                    uuid: e.uuid,
                    type: e.type,
                    icoSrc: Object(i.b)(e.icoSrc),
                    icoScalePercentage: e.icoScalePercentage,
                    url: e.url,
                    label: e.label,
                    id: e.id,
                    desc: e.desc,
                    backgroundColor: Object(a.a)(e.backgroundColor)
                };
                break;
            case o.a.Text:
                t = {
                    uuid: e.uuid,
                    type: e.type,
                    icoText: e.icoText,
                    url: e.url,
                    label: e.label,
                    id: e.id,
                    desc: e.desc,
                    backgroundColor: Object(a.a)(e.backgroundColor)
                };
                break;
            default:
                t = Object(c.a)(e)
        }
        return t
    }

    function d(e) {
        return {
            uuid: e.uuid,
            label: e.label,
            icoSrc: e.icoSrc,
            data: e.data.slice(0)
        }
    }

    function p(e, t, n) {
        const o = Object(a.e)(t);
        let i, c = void 0;
        switch (e) {
            case r.a.Bright:
                i = !Object(a.m)(o) && "#fff" !== o && "#ffffff" !== o;
                break;
            case r.a.Dark:
                i = !Object(a.m)(o)
        }
        return i && o.startsWith("#") && (c = Object(a.h)(o, n)), c
    }

    function f(e) {
        return e.type === o.a.Image ? Object(i.e)(e.icoSrc) : []
    }

    function m(e) {
        const {
            groupDict: t,
            iconDict: n
        } = e.data;
        for (const e in t) {
            const a = t[e];
            a.data = a.data.filter(e => void 0 !== n[e])
        }
    }
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Simple = "simple", e.Particular = "particular"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    "use strict";

    function a() {}
    n.d(t, "a", (function() {
        return a
    }))
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(53),
        c = n.n(i),
        s = n(58),
        l = n(4);

    function u() {
        return (u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }).apply(this, arguments)
    }
    t.a = Object(o.a)((function({
        entered: e,
        ...t
    }) {
        return r.a.createElement(s.a, u({
            in: e,
            timeout: l.Wb,
            unmountOnExit: !0,
            classNames: {
                appear: c.a.enter,
                appearActive: c.a.enterActive,
                enter: c.a.enter,
                enterActive: c.a.enterActive,
                exit: c.a.exit,
                exitActive: c.a.exitActive
            }
        }, t))
    }))
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(60),
        c = n.n(i),
        s = n(9),
        l = n.n(s),
        u = n(67),
        d = n(28);
    t.a = Object(o.a)((function({
        type: e = "normal",
        width: t,
        onClick: n,
        loading: a = !1,
        children: o
    }) {
        const i = l()(c.a.main, {
                primary: c.a.primaryTypeMain,
                normal: c.a.normalTypeMain
            } [e], {
                [c.a.loadingMain]: a
            }),
            s = {};
        return void 0 !== t && (s.width = Object(d.c)(t)), r.a.createElement("div", {
            className: i,
            onClick: a ? void 0 : n,
            style: s
        }, r.a.createElement("div", {
            className: c.a.content
        }, o), r.a.createElement(u.a, {
            opened: a
        }))
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return o
    })), n.d(t, "b", (function() {
        return i
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "a", (function() {
        return s
    }));
    var a = n(17),
        r = n(4);

    function o(e) {
        let t;
        switch (e) {
            case a.a.Bright:
                t = r.O;
                break;
            case a.a.Dark:
                t = r.S
        }
        return t
    }

    function i(e) {
        let t;
        switch (e) {
            case a.a.Bright:
                t = 1;
                break;
            case a.a.Dark:
                t = 2
        }
        return t
    }

    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? a.a.Dark : a.a.Bright
    }

    function s(e, t) {
        switch (e) {
            case a.a.Bright:
            case a.a.Dark:
                return e;
            case a.a.Auto:
                return void 0 === t ? c() : t;
            default:
                return a.a.Bright
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(38),
        c = n.n(i),
        s = n(9),
        l = n.n(s),
        u = n(15);
    t.a = Object(o.a)((function({
        autoFocus: e = !1,
        type: t = "text",
        errored: n = !1,
        prefixIcoSrc: a,
        suffixIcoSrc: o,
        suffixIcoClickable: i = !1,
        onClickSuffixIco: s,
        width: d,
        value: p,
        onChange: f,
        placeholder: m,
        onFocus: h,
        onBlur: b,
        onKeyDown: g
    }) {
        let v = null;
        void 0 !== a && (v = r.a.createElement(u.a, {
            src: a,
            className: `${c.a.icon} ${c.a.prefixIcon}`
        }));
        let y = null;
        void 0 !== o && (y = r.a.createElement(u.a, {
            src: o,
            className: l()(c.a.icon, c.a.suffixIcon, i && c.a.clickableIcon),
            onClick: i ? s : void 0
        }));
        const S = l()(c.a.input, {
            [c.a.inputtedInput]: p.length > 0,
            [c.a.erroredInput]: n,
            [c.a.prefixedInput]: void 0 !== a,
            [c.a.suffixedInput]: void 0 !== o
        });
        return r.a.createElement("div", {
            className: c.a.main
        }, r.a.createElement("input", {
            autoFocus: e,
            className: S,
            style: {
                width: d
            },
            type: t,
            placeholder: m,
            value: p,
            onChange: e => {
                f(e.target.value)
            },
            onFocus: h,
            onBlur: b,
            onKeyDown: g
        }), v, y)
    }))
}, function(e, t, n) {
    e.exports = {
        main: "_2Qw9GQrELlNBso6ylXey5q",
        input: "_14fkLEpRMg0Ecl_52-p6dU",
        prefixedInput: "_1BW2B_CPjPZvEpK8T828En",
        suffixedInput: "StyDEKVcGD8_2nQzQG6fI",
        inputtedInput: "_2TYwBQxs3apdXRmlR3lTM1",
        erroredInput: "_12NvmjbJavwyH57y_fF7pt",
        icon: "_1dDpo2lEO8wpm5dQbwJ_iq",
        clickableIcon: "_3gAQ7S8CrCut3QCedGkbRY",
        prefixIcon: "hE11IJUWW7Ftv9FGFYGsV",
        suffixIcon: "_3N8xgO3Wp4UAjgAPYvvmXo"
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(265)),
        o = a(n(266)),
        i = a(n(267)),
        c = a(n(269)),
        s = a(n(270)),
        l = a(n(148)),
        u = a(n(272)),
        d = a(n(274)),
        p = a(n(0));
    a(n(49)), a(n(277));
    var f, m = (f = null, function() {
            if (null !== f) return f;
            var e, t, n, a = !1;
            try {
                window.addEventListener("test", null, (e = {}, t = "passive", n = {
                    get: function() {
                        a = !0
                    }
                }, Object.defineProperty(e, t, n)))
            } catch (e) {}
            return f = a, a
        }()),
        h = {
            capture: !1,
            passive: !1
        };

    function b(e) {
        return d({}, h, e)
    }

    function g(e, t, n) {
        var a = [e, t];
        return a.push(m ? n : n.capture), a
    }

    function v(e, t, n, a) {
        e.addEventListener.apply(e, g(t, n, a))
    }

    function y(e, t, n, a) {
        e.removeEventListener.apply(e, g(t, n, a))
    }

    function S(e, t) {
        e.children, e.target;
        var n = u(e, ["children", "target"]);
        Object.keys(n).forEach((function(e) {
            if ("on" === e.substring(0, 2)) {
                var a = n[e],
                    r = l(a),
                    o = "object" === r;
                if (o || "function" === r) {
                    var i = "capture" === e.substr(-7).toLowerCase(),
                        c = e.substring(2).toLowerCase();
                    c = i ? c.substring(0, c.length - 7) : c, o ? t(c, a.handler, a.options) : t(c, a, b({
                        capture: i
                    }))
                }
            }
        }))
    }
    var w = function(e) {
        function t() {
            return r(this, t), i(this, c(t).apply(this, arguments))
        }
        return s(t, e), o(t, [{
            key: "componentDidMount",
            value: function() {
                this.applyListeners(v)
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                this.applyListeners(y, e), this.applyListeners(v)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.applyListeners(y)
            }
        }, {
            key: "applyListeners",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.props,
                    n = t.target;
                if (n) {
                    var a = n;
                    "string" == typeof n && (a = window[n]), S(t, e.bind(null, a))
                }
            }
        }, {
            key: "render",
            value: function() {
                return this.props.children || null
            }
        }]), t
    }(p.PureComponent);
    w.propTypes = {}, t.withOptions = function(e, t) {
        return {
            handler: e,
            options: b(t)
        }
    }, t.default = w
}, function(e, t, n) {
    (function(t) {
        var n = /^\s+|\s+$/g,
            a = /^[-+]0x[0-9a-f]+$/i,
            r = /^0b[01]+$/i,
            o = /^0o[0-7]+$/i,
            i = parseInt,
            c = "object" == typeof t && t && t.Object === Object && t,
            s = "object" == typeof self && self && self.Object === Object && self,
            l = c || s || Function("return this")(),
            u = Object.prototype.toString,
            d = Math.max,
            p = Math.min,
            f = function() {
                return l.Date.now()
            };

        function m(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function h(e) {
            if ("number" == typeof e) return e;
            if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return !!e && "object" == typeof e
                    }(e) && "[object Symbol]" == u.call(e)
                }(e)) return NaN;
            if (m(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = m(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(n, "");
            var c = r.test(e);
            return c || o.test(e) ? i(e.slice(2), c ? 2 : 8) : a.test(e) ? NaN : +e
        }
        e.exports = function(e, t, n) {
            var a, r, o, i, c, s, l = 0,
                u = !1,
                b = !1,
                g = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");

            function v(t) {
                var n = a,
                    o = r;
                return a = r = void 0, l = t, i = e.apply(o, n)
            }

            function y(e) {
                return l = e, c = setTimeout(w, t), u ? v(e) : i
            }

            function S(e) {
                var n = e - s;
                return void 0 === s || n >= t || n < 0 || b && e - l >= o
            }

            function w() {
                var e = f();
                if (S(e)) return k(e);
                c = setTimeout(w, function(e) {
                    var n = t - (e - s);
                    return b ? p(n, o - (e - l)) : n
                }(e))
            }

            function k(e) {
                return c = void 0, g && a ? v(e) : (a = r = void 0, i)
            }

            function E() {
                var e = f(),
                    n = S(e);
                if (a = arguments, r = this, s = e, n) {
                    if (void 0 === c) return y(s);
                    if (b) return c = setTimeout(w, t), v(s)
                }
                return void 0 === c && (c = setTimeout(w, t)), i
            }
            return t = h(t) || 0, m(n) && (u = !!n.leading, o = (b = "maxWait" in n) ? d(h(n.maxWait) || 0, t) : o, g = "trailing" in n ? !!n.trailing : g), E.cancel = function() {
                void 0 !== c && clearTimeout(c), l = 0, a = s = r = c = void 0
            }, E.flush = function() {
                return void 0 === c ? i : k(f())
            }, E
        }
    }).call(this, n(108))
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Left = "left", e.Right = "right"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return v
    })), n.d(t, "a", (function() {
        return y
    })), n.d(t, "c", (function() {
        return S
    })), n.d(t, "d", (function() {
        return w
    })), n.d(t, "f", (function() {
        return k
    })), n.d(t, "e", (function() {
        return E
    })), n.d(t, "g", (function() {
        return O
    })), n.d(t, "h", (function() {
        return C
    }));
    var a = n(5),
        r = n(7),
        o = n(16),
        i = n.n(o),
        c = n(4),
        s = n(18),
        l = n(8),
        u = n.n(l),
        d = n(6),
        p = n(19),
        f = n(32),
        m = n(46),
        h = n(3),
        b = n(27),
        g = n(31);
    async function v() {
        const e = Object(h.c)(),
            t = screen.width,
            n = {},
            o = u()(),
            i = [],
            s = {
                uuid: o,
                label: e ? "主页" : "Home",
                icoSrc: c.Gb + "/newtab/icon-group/61df5dde-0afd-4104-9b87-418bd62f95df.svg",
                data: i
            },
            l = u()(),
            m = [],
            b = {
                uuid: l,
                label: e ? "社交" : "Social",
                icoSrc: c.Gb + "/newtab/icon-group/9ac2df78-617e-4090-85ea-e68caf566a47.svg",
                data: m
            },
            g = u()(),
            v = [],
            y = {
                uuid: g,
                label: e ? "工具" : "Tool",
                icoSrc: c.Gb + "/newtab/icon-group/5664820e-0e6e-4040-9fa8-7a7491a5f2b8.svg",
                data: v
            }; {
            (e ? [{
                backgroundColor: {
                    data: "#e6162b",
                    type: a.a.Pure
                },
                desc: "随时随地发现新鲜事！",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/0e3b119f42ba105262c52885adf032f1.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 16,
                label: "微博",
                type: d.a.Image,
                url: "https://weibo.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#1aad19",
                    type: a.a.Pure
                },
                desc: "使用手机微信扫码登录",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/e760bb47e6988e068f6d44c9f3109bb2.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1982,
                label: "微信网页版",
                type: d.a.Image,
                url: "https://wx.qq.com/?lang=zh_CN",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00aefd",
                    type: a.a.Pure
                },
                desc: "bilibili是国内知名的视频弹幕网站。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/b88213b97677a97e45cb9f12d80ad328.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 299,
                label: "Bilibili",
                type: d.a.Image,
                url: "https://www.bilibili.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#dd4843",
                    type: a.a.Pure
                },
                desc: "阿里巴巴旗下潮流导购网站",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/62decccfc76a4da384686b01e7abffd0.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1723,
                label: "爱淘宝",
                type: d.a.Image,
                url: "https://ai.taobao.com?pid=mm_1042050059_1426300057_110172600194&union_lens=lensId%3APUB%401585387134%400b0af5b7_0e21_171206fdf73_047b%4001",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ed2c20",
                    type: a.a.Pure
                },
                desc: "专业的综合网上购物商城",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/61589568063efc2ebbfdac364bfb641b.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 64,
                label: "京东",
                type: d.a.Image,
                url: c.mc + "/clicks/jd",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#007ce7",
                    type: a.a.Pure
                },
                desc: "有问题，上知乎。可信赖的问答社区。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/d485e51391e9a96b80caa34516bd00be.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 498,
                label: "知乎",
                type: d.a.Image,
                url: "https://www.zhihu.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00b51d",
                    type: a.a.Pure
                },
                desc: "提供图书、电影、音乐唱片的推荐、评论和价格比较，以及城市独特的文化生活",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/0358c64952350ca5e46e9f3b645f688c.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 9,
                label: "豆瓣",
                type: d.a.Image,
                url: "https://www.douban.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00a82d",
                    type: a.a.Pure
                },
                desc: "登录使用印象笔记网页版",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/be162f5b969fbb1c28d209b0773557cf.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 2003,
                label: "印象笔记网页版",
                type: d.a.Image,
                url: "https://app.yinxiang.com/Home.action",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#479f05",
                    type: a.a.Pure
                },
                desc: "大型视频网站，专业的网络视频播放平台。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/49d02ac31b2efd6c6da10ad9ffa3d909.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 120,
                label: "爱奇艺",
                type: d.a.Image,
                url: "https://www.iqiyi.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ce0025",
                    type: a.a.Pure
                },
                desc: "中文邮箱第一品牌。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/32b3bcd5782d3ae416c506eeeec28ecf.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 964,
                label: "163网易邮箱",
                type: d.a.Image,
                url: "https://mail.163.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: a.a.Pure
                },
                desc: "58同城，专业的分类信息网。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/289d6000cfb0bb35124dca1f948af822.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 960,
                label: "58同城",
                type: d.a.Image,
                url: "https://www.58.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#fd6533",
                    type: a.a.Pure
                },
                desc: "推荐吃喝玩乐优惠信息，帮您选到满意商家",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/1353e0e5e6cf12ba5a4d596fb9c23ac6.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 993,
                label: "大众点评",
                type: d.a.Image,
                url: "https://www.dianping.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#287dfa",
                    type: a.a.Pure
                },
                desc: "中国领先的在线旅行服务公司，为您的出行提供全方位旅行服务",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/8a65194bb0f11289441f61a1d26737eb.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1095,
                label: "携程",
                type: d.a.Image,
                url: "https://www.ctrip.com/?AllianceID=1212032&sid=2814163&ouid=&app=0101F00",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: a.a.Pure
                },
                desc: "今日头条为您推荐有价值的、个性化的信息",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/18d469f739518a6636bde9da8bd6d93b.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 11,
                label: "今日头条",
                type: d.a.Image,
                url: "https://www.toutiao.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#e20000",
                    type: a.a.Pure
                },
                desc: "一款专注于发现与分享的音乐产品",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/156950db51a3c93f877f9c00a121e548.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1087,
                label: "网易云音乐",
                type: d.a.Image,
                url: "https://music.163.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00c658",
                    type: a.a.Pure
                },
                desc: "国家精品课程在线学习平台",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/276366d9d8e7c8b3ee2c8e8f301b5fe6.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1958,
                label: "中国大学MOOC",
                type: d.a.Image,
                url: "https://www.icourse163.org",
                uuid: u()()
            }] : [{
                backgroundColor: {
                    data: "#d92529",
                    type: a.a.Pure
                },
                desc: "Enjoy the videos and music you love.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/3d868f26e7e2b68dba9e65542723195c.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 497,
                label: "YouTube",
                type: d.a.Image,
                url: "https://www.youtube.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#1776f3",
                    type: a.a.Pure
                },
                desc: "Connect with friends, family and other people you know.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/616dbf76f91dc4bbec7c59f472780706.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 383,
                label: "Facebook",
                type: d.a.Image,
                url: "https://www.facebook.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#10c0ff",
                    type: a.a.Pure
                },
                desc: "Get the full story with all the live commentary.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/ff7dff20166b4adfcc23b34c58b554a2.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 432,
                label: "Twitter",
                type: d.a.Image,
                url: "https://twitter.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#262626",
                    type: a.a.Pure
                },
                desc: "Share photos, videos & messages with friends & family.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/6e8afbac865ca8ca36c339ce6a4f93e7.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 496,
                label: "Instagram",
                type: d.a.Image,
                url: "https://www.instagram.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: a.a.Pure
                },
                desc: "Enjoy latest Android apps, games, music, movies, TV, books, magazines & more.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/99ef8f229d7f26ca008850ec4ef8071c.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 463,
                label: "Google Play",
                type: d.a.Image,
                url: "https://play.google.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: a.a.Pure
                },
                desc: "Gmail is email that's intuitive, efficient, and useful.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/cff9e11e03f9dc94ec43491552c805fd.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 400,
                label: "Gmail",
                type: d.a.Image,
                url: "https://mail.google.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#232f3e",
                    type: a.a.Pure
                },
                desc: "Online shopping from the earth.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/ff4eab09a63efab55580278c02f84797.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 56,
                label: "Amazon",
                type: d.a.Image,
                url: "https://www.amazon.com?&_encoding=UTF8&tag=monknow08-20&linkCode=ur2&linkId=b2a834974bdde41172822cbc4c64944e&camp=1789&creative=9325",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#f7f7f7",
                    type: a.a.Pure
                },
                desc: "The world's online marketplace.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/13445fd0c1965f52f3969dadd63ab2e2.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 368,
                label: "eBay",
                type: d.a.Image,
                url: "http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575571435&toolid=10001&campid=5338656927&customid=ebay&mpre=https%3A%2F%2Fwww.ebay.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00a82d",
                    type: a.a.Pure
                },
                desc: "Use Evernote on Web",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/c48be1b7bbbd4f3d4958acf548974fa6.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 2005,
                label: "Evernote for Web",
                type: d.a.Image,
                url: "https://www.evernote.com/client/web",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#0070e0",
                    type: a.a.Pure
                },
                desc: "A modern workspace designed to reduce busywork.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/2c0dc989624651d76f56a6bd7ddb6d8e.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 362,
                label: "Dropbox",
                type: d.a.Image,
                url: "https://www.dropbox.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#000000",
                    type: a.a.Pure
                },
                desc: "A free online encyclopedia.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/3d6bedfa1c80d4901e10ed41ad2975bd.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 448,
                label: "Wikipedia",
                type: d.a.Image,
                url: "https://www.wikipedia.org",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#000000",
                    type: a.a.Pure
                },
                desc: "Help you find compelling ideas, knowledge, and perspectives.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/07585d4a3e9ab96ca54813e2affe1f2b.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 142,
                label: "Medium",
                type: d.a.Image,
                url: "https://www.medium.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#171a21",
                    type: a.a.Pure
                },
                desc: "At Valve we make games, Steam, and hardware.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/672f454515b74192d65a4688f3edd0e7.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 223,
                label: "Steam",
                type: d.a.Image,
                url: "https://www.steampowered.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#002973",
                    type: a.a.Pure
                },
                desc: "Big savings on hotels in 120,000 destinations worldwide.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/a299a5f96e4c3115d1002de3042b7315.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 304,
                label: "Booking",
                type: d.a.Image,
                url: "https://www.booking.com/index.html?aid=1900924",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#262626",
                    type: a.a.Pure
                },
                desc: "The market leader in drones and aerial photography systems.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/d7f467dbe215f94425166256a3174d75.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1710,
                label: "DJI",
                type: d.a.Image,
                url: "https://click.dji.com/AKKPQXj00manV7D3kfFG?as=0001&pm=custom",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#000000",
                    type: a.a.Pure
                },
                desc: "Watch TV Shows Online, Watch Movies Online",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/f2cb53dc8f8ea1b15f1fab3c9e0d8d71.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 159,
                label: "NETFLIX",
                type: d.a.Image,
                url: "https://www.netflix.com",
                uuid: u()()
            }]).forEach(e => {
                i.push(e.uuid), n[e.uuid] = e
            });
            (e ? [{
                backgroundColor: {
                    data: "#187bfe",
                    type: a.a.Pure
                },
                desc: "全球最大的中文社区，让志同道合的人相聚",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/90a733c0f32ba7c9a12e7fd2c56547f2.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 6,
                label: "百度贴吧",
                type: d.a.Image,
                url: "https://tieba.baidu.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: a.a.Pure
                },
                desc: "猫扑网络流行文化发源地，为用户推荐最热门的流行资讯。",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/75453cb3953ae6c01da736bab1455e7d.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 961,
                label: "猫扑",
                type: d.a.Image,
                url: "https://www.mop.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#c01d2f",
                    type: a.a.Pure
                },
                desc: "一个认真而有趣的社区",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/6f03a0a6d4cb6e41d03e51742d855ae1.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1848,
                label: "虎扑",
                type: d.a.Image,
                url: "https://www.hupu.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#ffffff",
                    type: a.a.Pure
                },
                desc: "以游戏直播为主的弹幕式互动直播平台",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/6415d7a931bfd5beb70745b00a90863c.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1014,
                label: "虎牙直播",
                type: d.a.Image,
                url: "https://www.huya.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#f9620e",
                    type: a.a.Pure
                },
                desc: "提供高清、快捷、流畅的视频直播和游戏赛事直播服务",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/678f9088e261c1e9d3a9feefa02f428b.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 8,
                label: "斗鱼",
                type: d.a.Image,
                url: "https://www.douyu.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#0071c0",
                    type: a.a.Pure
                },
                desc: "为亿万用户提供高效稳定便捷的电子邮件服务",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/86157ca96a781b2a88a7aec7f0f51b13.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1161,
                label: "QQ邮箱",
                type: d.a.Image,
                url: "https://mail.qq.com",
                uuid: u()()
            }] : [{
                backgroundColor: {
                    data: "#123033",
                    type: a.a.Pure
                },
                desc: "Use WhatsApp on Web",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/cffe1039a634e610ed0bc63a162704b2.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1971,
                label: "WhatsApp for Web",
                type: d.a.Image,
                url: "https://web.whatsapp.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#00aff0",
                    type: a.a.Pure
                },
                desc: "Use Skype on Web",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/b44adc20a09bf6de425ec6cee836add0.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 2002,
                label: "Skype For Web",
                type: d.a.Image,
                url: "https://web.skype.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#1aad19",
                    type: a.a.Pure
                },
                desc: "Use WeChat on Web",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/05206c763734f9f8e50e5ca089c7f279.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 1969,
                label: "WeChat for Web",
                type: d.a.Image,
                url: "https://wx.qq.com/?lang=en_US",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#0068a7",
                    type: a.a.Pure
                },
                desc: "Build and engage with your professional network.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/1d137c1aa8fbbfa58ab969528bb4b0a1.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 332,
                label: "Linkedin",
                type: d.a.Image,
                url: "https://www.linkedin.com",
                uuid: u()()
            }, {
                backgroundColor: {
                    data: "#333333",
                    type: a.a.Pure
                },
                desc: "The world's leading live streaming platform for gamers and the things we love.",
                icoScalePercentage: 100,
                icoSrc: {
                    data: "https://static.monknow.com/newtab/icon/b52ec4d35f1446978008da04b0f9218b.png",
                    isOfficial: !0,
                    mimeType: r.a.Png,
                    uploaded: !0
                },
                id: 431,
                label: "Twitch",
                type: d.a.Image,
                url: "https://www.twitch.tv",
                uuid: u()()
            }]).forEach(e => {
                m.push(e.uuid), n[e.uuid] = e
            });
            const t = [{
                id: 1820,
                uuid: u()(),
                label: "MONKNOW",
                type: d.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: r.a.Png,
                    data: c.Gb + "/newtab/icon/f7365f50ea753205a8dbeb24bb8dcd2e.png"
                },
                desc: e ? "MONKNOW 官方网站" : "MONKNOW official website",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: a.a.Pure,
                    data: "#188fff"
                },
                url: "https://www.monknow.com"
            }, {
                id: 554,
                uuid: u()(),
                label: e ? "壁纸库" : "Wallpaper Lib",
                type: d.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: r.a.Png,
                    data: c.Gb + "/newtab/icon/70381b0dbcca06e2eb30679040c6dcfa.png"
                },
                desc: e ? "MONKNOW 官方壁纸库" : "MONKNOW official wallpaper library",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: a.a.Pure,
                    data: "#71ce47"
                },
                url: "internal://wallpaper-lib"
            }, {
                id: 2954,
                uuid: u()(),
                label: e ? "待办事项" : "ToDo",
                type: d.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: r.a.Png,
                    data: c.Gb + "/newtab/icon/030a4276f1d10e30cc0c50f017e96417.png"
                },
                desc: e ? "待办事项让您随时保持专注" : "To Do gives you focus",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: a.a.Pure,
                    data: "#16d9c2"
                },
                url: "internal://todos"
            }, {
                id: 2006,
                uuid: u()(),
                label: e ? "小恐龙" : "Chrome Dino",
                type: d.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: r.a.Png,
                    data: c.Gb + "/newtab/icon/9884c390fef75337f4606f2dc48c0f11.png"
                },
                desc: e ? "Chrome 彩蛋小游戏" : "A hidden Chrome dinosaur game",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: a.a.Pure,
                    data: "#ffffff"
                },
                url: "internal://dino"
            }];
            let o = [];
            o = o.concat([{
                id: 1709,
                uuid: u()(),
                label: e ? "书签管理" : "Bookmarks",
                type: d.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: r.a.Png,
                    data: c.Gb + "/newtab/icon/629a51cf5304c1855cc1da0e8287903f.png"
                },
                desc: e ? "浏览器书签管理" : "Browser bookmarks",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: a.a.Pure,
                    data: "#ee3b3b"
                },
                url: "internal://bookmarks"
            }, {
                id: 1708,
                uuid: u()(),
                label: e ? "扩展管理" : "Extensions",
                type: d.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: r.a.Png,
                    data: c.Gb + "/newtab/icon/8413ddc9362f03a6902200356f3500df.png"
                },
                desc: e ? "浏览器扩展管理" : "Browser extensions",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: a.a.Pure,
                    data: "#1a73e8"
                },
                url: "internal://extensions"
            }, {
                id: 1707,
                uuid: u()(),
                label: e ? "历史记录" : "History",
                type: d.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: r.a.Png,
                    data: c.Gb + "/newtab/icon/2305d028ff04720a3b114e80c90caad3.png"
                },
                desc: e ? "浏览器历史记录" : "Browser history",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: a.a.Pure,
                    data: "#fcb138"
                },
                url: "internal://history"
            }]), o = o.concat([{
                id: 1993,
                uuid: u()(),
                label: e ? "下载记录" : "Downloads",
                type: d.a.Image,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: r.a.Png,
                    data: c.Gb + "/newtab/icon/d0359c6069b4b274fe4bb5b9ab326fb2.png"
                },
                desc: e ? "浏览器下载记录" : "Browser downloads",
                icoScalePercentage: 100,
                backgroundColor: {
                    type: a.a.Pure,
                    data: "#9226e9"
                },
                url: "internal://downloads"
            }]), t.splice(3, 0, ...o), t.forEach(e => {
                v.push(e.uuid), n[e.uuid] = e
            })
        }
        return {
            version: c.db,
            updaterVersion: 0,
            setting: {
                openTarget: p.a.CurrentTab,
                rowGapPercentage: t < 1800 ? 26 : 40,
                columnGapPercentage: t < 1800 ? 34 : 50,
                iconLayout: f.a.Particular,
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
                groups: [o, l, g],
                groupDict: {
                    [o]: s,
                    [l]: b,
                    [g]: y
                },
                iconDict: n
            }
        }
    }
    async function y(e) {
        const {
            version: t
        } = e;
        return t < c.db && (t <= 1 && void 0 === e.setting.displayAddBtn && (e.setting.displayAddBtn = !0), t <= 2 && void 0 === e.updaterVersion && (e.updaterVersion = 0), t <= 3 && void 0 === e.setting.displayNotificationBadge && (e.setting.displayNotificationBadge = !0), t <= 4 && void 0 === e.setting.rememberLastVisitedGroup && (e.setting.rememberLastVisitedGroup = !0), t <= 5 && (void 0 === e.setting.scrollToSwitchGroup && (e.setting.scrollToSwitchGroup = !0), Object(g.g)(e))), e.version = c.db, e
    }
    async function S() {
        return {
            version: 0,
            data: {
                updater: {}
            }
        }
    }
    async function w() {
        return (await i()({
            url: c.Cb + "/newtab/icons.json",
            method: "get"
        })).data.data
    }
    async function k(e, t) {
        const n = (await i()({
                url: c.a + "/icon/batchurl",
                method: "post",
                headers: {
                    secret: Object(s.b)(e)
                },
                data: {
                    urls: t
                }
            })).data,
            r = {};
        return Object.keys(n.data).forEach(e => {
            const t = n.data[e];
            r[e] = null === t ? null : {
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
                    type: a.a.Pure,
                    data: t.bgColor
                },
                url: t.url
            }
        }), r
    }
    async function E(e, t) {
        try {
            {
                const e = Object(m.c)(t);
                if (0 === e.length || "w" === e || "ww" === e || "www" === e || "www." === e) return null
            }
            const n = (await i()({
                url: c.a + "/icon/byurl",
                method: "get",
                headers: {
                    secret: Object(s.b)(e)
                },
                params: {
                    url: t
                }
            })).data;
            return null === n.data.icon ? null : {
                id: n.data.icon.udId,
                label: n.data.icon.title,
                icoSrc: {
                    isOfficial: !0,
                    uploaded: !0,
                    mimeType: n.data.icon.mimeType,
                    data: n.data.icon.imgUrl
                },
                desc: n.data.icon.description,
                icoScalePercentage: 100,
                backgroundColor: {
                    type: a.a.Pure,
                    data: n.data.icon.bgColor
                },
                url: n.data.icon.url
            }
        } catch (e) {
            return null
        }
    }
    async function O(e, t) {
        const n = (await i()({
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
            data: n.data.list.map(e => ({
                id: e.udId,
                label: e.title,
                icoSrc: {
                    uploaded: !0,
                    isOfficial: !0,
                    mimeType: e.mimeType,
                    data: e.imgUrl
                },
                backgroundColor: {
                    type: a.a.Pure,
                    data: e.bgColor
                },
                desc: e.description,
                icoScalePercentage: 100,
                url: e.url
            })),
            hasMore: 10 === n.data.list.length,
            max: n.data.next_query.max,
            language: n.data.next_query.lang
        }
    }
    async function C(e, t) {
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
            if (null === Object(b.c)(e)) throw e
        }
    }
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        if (null == e) return {};
        var n, a, r = {},
            o = Object.keys(e);
        for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
    }
    n.d(t, "a", (function() {
        return a
    }))
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e.Color = "color", e.Image = "image"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    e.exports = {
        main: "_3P6Uge-rO_QBuVuegVrtVD",
        selectedMain: "_10e-egnkeJJZNQpw76WKvL",
        iconWrapper: "_2oncI-qSXnIDDSPwcuWJQf",
        tileIcon: "_3p_RzauxlyxuunmP6p-g0O",
        icon: "_1wOl16VhgP9QVXK_rj9CcM",
        colorfulIcon: "_2DW_xrhZ4mGpVg9VZVU1i7",
        text: "_3tewRzAu8IOSI-MpaQ9sAW",
        normalText: "rEO8ydj8HSKNB10v8DcB9",
        emphasisText: "_2WcG0eglpA_CQP9A6PinSP"
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if ("htt" === e || "http" === e || "https" === e || "http:" === e || "https:" === e) return "";
        const t = e.indexOf(":/");
        if (-1 === t) return e;
        const n = t + ":/".length,
            a = e.codePointAt(n);
        return void 0 === a ? "" : e.slice(n + (a === "/".codePointAt(0) ? 1 : 0))
    }

    function r(e) {
        return e.startsWith("internal://")
    }

    function o(e) {
        return !(!r(e) || "internal://bookmarks" === e || "internal://extensions" === e || "internal://history" === e || "internal://downloads" === e || "internal://dino" === e)
    }
    n.d(t, "c", (function() {
        return a
    })), n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return o
    }))
}, function(e, t, n) {
    e.exports = {
        main: "_1FRpjcyLiMztGcUcVyk9k",
        text: "_3nkKPl8jiULV_MnMXwbtlt",
        prefixIcon: "_3B3xLkDJ09Kb8e23qhYoLf",
        suffixIcon: "_8syFJom-yKPMqHXQ5OAr7",
        icon: "_3hjyUIBMp6Y6qSmaU4bhnb",
        borderedMain: "_2hrQlTQQ43IoepBPA4XBkY"
    }
}, function(e, t, n) {
    e.exports = {
        invisible: "-dMJODznbAQ8yZwx8bJrd",
        main: "_23iTxehpuKCSRKgV0aOAPx",
        collapsedMain: "_35OXotYDmhncDz0RA56_DA",
        expandedMain: "_39QXm5akKTFQdvIxRl5-pP",
        selectedMain: "SMJtoHo8L-XHKS71IqKYD",
        icon: "_2ZJqv3L35HrOZ6mL-8Ff--",
        collapsedIcon: "T_ihUXAWFyfdBvFCcoUzi",
        expandedIcon: "_hz3N8-QVTia8lPGRSnz0",
        label: "TO34FrU8-hEdYix6Tsody",
        collapsedLabel: "PPquDbnUnxDDL8ZzkV9aG",
        expandedBadgeWrapper: "amDrfR3j4EI-pYPyF5FTD",
        badge: "_3JKDkXzywEqFk7067suYL2",
        collapsedBadge: "_3dwtJOz5KRSABIiZWkcPiM",
        expandedBadge: "_3Loyu2YFuHaSrgcUL5VJtf"
    }
}, function(e, t, n) {
    e.exports = n(275)()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    var a = n(19);

    function r({
        url: e,
        openTarget: t
    }) {
        switch (t) {
            case a.a.NewWindow:
                chrome.windows.create({
                    url: e,
                    incognito: !1
                });
                break;
            case a.a.NewIncognitoWindow:
                chrome.windows.create({
                    url: e,
                    incognito: !0
                });
                break;
            case a.a.BackgroundTab:
                chrome.tabs.create({
                    url: e,
                    active: !1
                });
                break;
            case a.a.CurrentTab:
                chrome.tabs.update({
                    url: e
                });
                break;
            case a.a.NewTab:
            default:
                chrome.tabs.create({
                    url: e,
                    active: !0
                })
        }
    }
}, function(e, t, n) {
    "use strict";
    var a;
    ! function(e) {
        e[e.Server = 1] = "Server", e[e.Icon = 2] = "Icon"
    }(a || (a = {})), t.a = a
}, function(e, t, n) {
    e.exports = {
        main: "_2uTkjqja8kE0tCA6ap1OPo",
        dots: "_26qpWp1z60AUFLsDtsIVA6",
        dot: "_3O62hYgWcUKPTJWA_PEGRs",
        animation: "fBBs0fYyt4lEHdCd6-iQz",
        reversedMain: "_3mqSnTXRDN2TvCrCqFS1Vn",
        text: "_34blG5i1JSDa3nQK6zhfTl"
    }
}, function(e, t, n) {
    e.exports = {
        enter: "iITPw8PwP_AXzTk2ugPIU",
        enterActive: "_3yaon4Vf77dnlLIx_HZlZn",
        exit: "YnRhgwf7xVktbLPxBQJoG",
        exitActive: "_1sDbnnqi7OGIGxgga7tCLP"
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return JSON.parse(JSON.stringify(e))
    }
    n.d(t, "a", (function() {
        return a
    }))
}, function(e, t, n) {
    e.exports = {
        main: "_3Y79ZuN3G6YI3Oek_3y5Lz",
        draggingMain: "_1CU_P44loCYYEiErTXCZ-x",
        isDragTargetMain: "_2dS5ywplefYkaTAFTLssuk",
        boxShadowedWrapper: "_37KZsVZXdlcopQp8aog8lU",
        dropShadowedWrapper: "_2tlnqQA-jX3tIRhYPb19UU"
    }
}, function(e, t, n) {
    "use strict";
    ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            0;
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (e) {
                console.error(e)
            }
        }
    }(), e.exports = n(258)
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(52),
        c = n.n(i),
        s = n(9),
        l = n.n(s),
        u = n(3);
    t.a = Object(o.a)((function({
        reversed: e = !1,
        displayText: t = !1,
        text: n
    }) {
        const a = l()(c.a.main, {
            [c.a.reversedMain]: e
        });
        return t && void 0 === n && (n = Object(u.a)("loading")), r.a.createElement("div", {
            className: a
        }, r.a.createElement("div", {
            className: c.a.dots
        }, r.a.createElement("div", {
            className: c.a.dot
        }), r.a.createElement("div", {
            className: c.a.dot
        })), t && r.a.createElement("div", {
            className: c.a.text
        }, n))
    }))
}, function(e, t, n) {
    "use strict";
    var a = n(68),
        r = n(43);

    function o(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
    }
    n(49);
    var i = n(158),
        c = n.n(i),
        s = n(159),
        l = n.n(s),
        u = n(0),
        d = n.n(u),
        p = n(56),
        f = n.n(p),
        m = !1,
        h = d.a.createContext(null),
        b = "entering",
        g = "entered",
        v = function(e) {
            function t(t, n) {
                var a;
                a = e.call(this, t, n) || this;
                var r, o = n && !n.isMounting ? t.enter : t.appear;
                return a.appearStatus = null, t.in ? o ? (r = "exited", a.appearStatus = b) : r = g : r = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited", a.state = {
                    status: r
                }, a.nextCallback = null, a
            }
            o(t, e), t.getDerivedStateFromProps = function(e, t) {
                return e.in && "unmounted" === t.status ? {
                    status: "exited"
                } : null
            };
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.updateStatus(!0, this.appearStatus)
            }, n.componentDidUpdate = function(e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== b && n !== g && (t = b) : n !== b && n !== g || (t = "exiting")
                }
                this.updateStatus(!1, t)
            }, n.componentWillUnmount = function() {
                this.cancelNextCallback()
            }, n.getTimeouts = function() {
                var e, t, n, a = this.props.timeout;
                return e = t = n = a, null != a && "number" != typeof a && (e = a.exit, t = a.enter, n = void 0 !== a.appear ? a.appear : t), {
                    exit: e,
                    enter: t,
                    appear: n
                }
            }, n.updateStatus = function(e, t) {
                if (void 0 === e && (e = !1), null !== t) {
                    this.cancelNextCallback();
                    var n = f.a.findDOMNode(this);
                    t === b ? this.performEnter(n, e) : this.performExit(n)
                } else this.props.unmountOnExit && "exited" === this.state.status && this.setState({
                    status: "unmounted"
                })
            }, n.performEnter = function(e, t) {
                var n = this,
                    a = this.props.enter,
                    r = this.context ? this.context.isMounting : t,
                    o = this.getTimeouts(),
                    i = r ? o.appear : o.enter;
                !t && !a || m ? this.safeSetState({
                    status: g
                }, (function() {
                    n.props.onEntered(e)
                })) : (this.props.onEnter(e, r), this.safeSetState({
                    status: b
                }, (function() {
                    n.props.onEntering(e, r), n.onTransitionEnd(e, i, (function() {
                        n.safeSetState({
                            status: g
                        }, (function() {
                            n.props.onEntered(e, r)
                        }))
                    }))
                })))
            }, n.performExit = function(e) {
                var t = this,
                    n = this.props.exit,
                    a = this.getTimeouts();
                n && !m ? (this.props.onExit(e), this.safeSetState({
                    status: "exiting"
                }, (function() {
                    t.props.onExiting(e), t.onTransitionEnd(e, a.exit, (function() {
                        t.safeSetState({
                            status: "exited"
                        }, (function() {
                            t.props.onExited(e)
                        }))
                    }))
                }))) : this.safeSetState({
                    status: "exited"
                }, (function() {
                    t.props.onExited(e)
                }))
            }, n.cancelNextCallback = function() {
                null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
            }, n.safeSetState = function(e, t) {
                t = this.setNextCallback(t), this.setState(e, t)
            }, n.setNextCallback = function(e) {
                var t = this,
                    n = !0;
                return this.nextCallback = function(a) {
                    n && (n = !1, t.nextCallback = null, e(a))
                }, this.nextCallback.cancel = function() {
                    n = !1
                }, this.nextCallback
            }, n.onTransitionEnd = function(e, t, n) {
                this.setNextCallback(n);
                var a = null == t && !this.props.addEndListener;
                e && !a ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t)) : setTimeout(this.nextCallback, 0)
            }, n.render = function() {
                var e = this.state.status;
                if ("unmounted" === e) return null;
                var t = this.props,
                    n = t.children,
                    a = Object(r.a)(t, ["children"]);
                if (delete a.in, delete a.mountOnEnter, delete a.unmountOnExit, delete a.appear, delete a.enter, delete a.exit, delete a.timeout, delete a.addEndListener, delete a.onEnter, delete a.onEntering, delete a.onEntered, delete a.onExit, delete a.onExiting, delete a.onExited, "function" == typeof n) return d.a.createElement(h.Provider, {
                    value: null
                }, n(e, a));
                var o = d.a.Children.only(n);
                return d.a.createElement(h.Provider, {
                    value: null
                }, d.a.cloneElement(o, a))
            }, t
        }(d.a.Component);

    function y() {}
    v.contextType = h, v.propTypes = {}, v.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: y,
        onEntering: y,
        onEntered: y,
        onExit: y,
        onExiting: y,
        onExited: y
    }, v.UNMOUNTED = 0, v.EXITED = 1, v.ENTERING = 2, v.ENTERED = 3, v.EXITING = 4;
    var S = v,
        w = function(e, t) {
            return e && t && t.split(" ").forEach((function(t) {
                return l()(e, t)
            }))
        },
        k = function(e) {
            function t() {
                for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(a)) || this).appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {}
                }, t.onEnter = function(e, n) {
                    t.removeClasses(e, "exit"), t.addClass(e, n ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n)
                }, t.onEntering = function(e, n) {
                    var a = n ? "appear" : "enter";
                    t.addClass(e, a, "active"), t.props.onEntering && t.props.onEntering(e, n)
                }, t.onEntered = function(e, n) {
                    var a = n ? "appear" : "enter";
                    t.removeClasses(e, a), t.addClass(e, a, "done"), t.props.onEntered && t.props.onEntered(e, n)
                }, t.onExit = function(e) {
                    t.removeClasses(e, "appear"), t.removeClasses(e, "enter"), t.addClass(e, "exit", "base"), t.props.onExit && t.props.onExit(e)
                }, t.onExiting = function(e) {
                    t.addClass(e, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
                }, t.onExited = function(e) {
                    t.removeClasses(e, "exit"), t.addClass(e, "exit", "done"), t.props.onExited && t.props.onExited(e)
                }, t.getClassNames = function(e) {
                    var n = t.props.classNames,
                        a = "string" == typeof n,
                        r = a ? "" + (a && n ? n + "-" : "") + e : n[e];
                    return {
                        baseClassName: r,
                        activeClassName: a ? r + "-active" : n[e + "Active"],
                        doneClassName: a ? r + "-done" : n[e + "Done"]
                    }
                }, t
            }
            o(t, e);
            var n = t.prototype;
            return n.addClass = function(e, t, n) {
                var a = this.getClassNames(t)[n + "ClassName"];
                "appear" === t && "done" === n && (a += " " + this.getClassNames("enter").doneClassName), "active" === n && e && e.scrollTop, this.appliedClasses[t][n] = a,
                    function(e, t) {
                        e && t && t.split(" ").forEach((function(t) {
                            return c()(e, t)
                        }))
                    }(e, a)
            }, n.removeClasses = function(e, t) {
                var n = this.appliedClasses[t],
                    a = n.base,
                    r = n.active,
                    o = n.done;
                this.appliedClasses[t] = {}, a && w(e, a), r && w(e, r), o && w(e, o)
            }, n.render = function() {
                var e = this.props,
                    t = (e.classNames, Object(r.a)(e, ["classNames"]));
                return d.a.createElement(S, Object(a.a)({}, t, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                }))
            }, t
        }(d.a.Component);
    k.defaultProps = {
        classNames: ""
    }, k.propTypes = {};
    var E = k;

    function O(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function C(e, t) {
        var n = Object.create(null);
        return e && u.Children.map(e, (function(e) {
            return e
        })).forEach((function(e) {
            n[e.key] = function(e) {
                return t && Object(u.isValidElement)(e) ? t(e) : e
            }(e)
        })), n
    }

    function x(e, t, n) {
        return null != n[t] ? n[t] : e.props[t]
    }

    function j(e, t, n) {
        var a = C(e.children),
            r = function(e, t) {
                function n(n) {
                    return n in t ? t[n] : e[n]
                }
                e = e || {}, t = t || {};
                var a, r = Object.create(null),
                    o = [];
                for (var i in e) i in t ? o.length && (r[i] = o, o = []) : o.push(i);
                var c = {};
                for (var s in t) {
                    if (r[s])
                        for (a = 0; a < r[s].length; a++) {
                            var l = r[s][a];
                            c[r[s][a]] = n(l)
                        }
                    c[s] = n(s)
                }
                for (a = 0; a < o.length; a++) c[o[a]] = n(o[a]);
                return c
            }(t, a);
        return Object.keys(r).forEach((function(o) {
            var i = r[o];
            if (Object(u.isValidElement)(i)) {
                var c = o in t,
                    s = o in a,
                    l = t[o],
                    d = Object(u.isValidElement)(l) && !l.props.in;
                !s || c && !d ? s || !c || d ? s && c && Object(u.isValidElement)(l) && (r[o] = Object(u.cloneElement)(i, {
                    onExited: n.bind(null, i),
                    in: l.props.in,
                    exit: x(i, "exit", e),
                    enter: x(i, "enter", e)
                })) : r[o] = Object(u.cloneElement)(i, {
                    in: !1
                }) : r[o] = Object(u.cloneElement)(i, {
                    onExited: n.bind(null, i),
                    in: !0,
                    exit: x(i, "exit", e),
                    enter: x(i, "enter", e)
                })
            }
        })), r
    }
    var _ = Object.values || function(e) {
            return Object.keys(e).map((function(t) {
                return e[t]
            }))
        },
        I = function(e) {
            function t(t, n) {
                var a, r = (a = e.call(this, t, n) || this).handleExited.bind(O(O(a)));
                return a.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: r,
                    firstRender: !0
                }, a
            }
            o(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.mounted = !0, this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                })
            }, n.componentWillUnmount = function() {
                this.mounted = !1
            }, t.getDerivedStateFromProps = function(e, t) {
                var n, a, r = t.children,
                    o = t.handleExited;
                return {
                    children: t.firstRender ? (n = e, a = o, C(n.children, (function(e) {
                        return Object(u.cloneElement)(e, {
                            onExited: a.bind(null, e),
                            in: !0,
                            appear: x(e, "appear", n),
                            enter: x(e, "enter", n),
                            exit: x(e, "exit", n)
                        })
                    }))) : j(e, r, o),
                    firstRender: !1
                }
            }, n.handleExited = function(e, t) {
                var n = C(this.props.children);
                e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
                    var n = Object(a.a)({}, t.children);
                    return delete n[e.key], {
                        children: n
                    }
                })))
            }, n.render = function() {
                var e = this.props,
                    t = e.component,
                    n = e.childFactory,
                    a = Object(r.a)(e, ["component", "childFactory"]),
                    o = this.state.contextValue,
                    i = _(this.state.children).map(n);
                return delete a.appear, delete a.enter, delete a.exit, null === t ? d.a.createElement(h.Provider, {
                    value: o
                }, i) : d.a.createElement(h.Provider, {
                    value: o
                }, d.a.createElement(t, a, i))
            }, t
        }(d.a.Component);
    I.propTypes = {}, I.defaultProps = {
        component: "div",
        childFactory: function(e) {
            return e
        }
    };
    var T = I,
        P = function(e) {
            function t() {
                for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(a)) || this).handleEnter = function() {
                    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    return t.handleLifecycle("onEnter", 0, n)
                }, t.handleEntering = function() {
                    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    return t.handleLifecycle("onEntering", 0, n)
                }, t.handleEntered = function() {
                    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    return t.handleLifecycle("onEntered", 0, n)
                }, t.handleExit = function() {
                    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    return t.handleLifecycle("onExit", 1, n)
                }, t.handleExiting = function() {
                    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    return t.handleLifecycle("onExiting", 1, n)
                }, t.handleExited = function() {
                    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    return t.handleLifecycle("onExited", 1, n)
                }, t
            }
            o(t, e);
            var n = t.prototype;
            return n.handleLifecycle = function(e, t, n) {
                var a, r = this.props.children,
                    o = d.a.Children.toArray(r)[t];
                o.props[e] && (a = o.props)[e].apply(a, n), this.props[e] && this.props[e](f.a.findDOMNode(this))
            }, n.render = function() {
                var e = this.props,
                    t = e.children,
                    n = e.in,
                    a = Object(r.a)(e, ["children", "in"]),
                    o = d.a.Children.toArray(t),
                    i = o[0],
                    c = o[1];
                return delete a.onEnter, delete a.onEntering, delete a.onEntered, delete a.onExit, delete a.onExiting, delete a.onExited, d.a.createElement(T, a, n ? d.a.cloneElement(i, {
                    key: "first",
                    onEnter: this.handleEnter,
                    onEntering: this.handleEntering,
                    onEntered: this.handleEntered
                }) : d.a.cloneElement(c, {
                    key: "second",
                    onEnter: this.handleExit,
                    onEntering: this.handleExiting,
                    onEntered: this.handleExited
                }))
            }, t
        }(d.a.Component);
    P.propTypes = {};
    var M, N;
    var L = "out-in",
        R = "in-out",
        D = function(e, t, n) {
            return function() {
                var a;
                e.props[t] && (a = e.props)[t].apply(a, arguments), n()
            }
        },
        A = ((M = {})[L] = function(e) {
            var t = e.current,
                n = e.changeState;
            return d.a.cloneElement(t, {
                in: !1,
                onExited: D(t, "onExited", (function() {
                    n(b, null)
                }))
            })
        }, M[R] = function(e) {
            var t = e.current,
                n = e.changeState,
                a = e.children;
            return [t, d.a.cloneElement(a, {
                in: !0,
                onEntered: D(a, "onEntered", (function() {
                    n(b)
                }))
            })]
        }, M),
        B = ((N = {})[L] = function(e) {
            var t = e.children,
                n = e.changeState;
            return d.a.cloneElement(t, {
                in: !0,
                onEntered: D(t, "onEntered", (function() {
                    n(g, d.a.cloneElement(t, {
                        in: !0
                    }))
                }))
            })
        }, N[R] = function(e) {
            var t = e.current,
                n = e.children,
                a = e.changeState;
            return [d.a.cloneElement(t, {
                in: !1,
                onExited: D(t, "onExited", (function() {
                    a(g, d.a.cloneElement(n, {
                        in: !0
                    }))
                }))
            }), d.a.cloneElement(n, {
                in: !0
            })]
        }, N),
        G = function(e) {
            function t() {
                for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(a)) || this).state = {
                    status: g,
                    current: null
                }, t.appeared = !1, t.changeState = function(e, n) {
                    void 0 === n && (n = t.state.current), t.setState({
                        status: e,
                        current: n
                    })
                }, t
            }
            o(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.appeared = !0
            }, t.getDerivedStateFromProps = function(e, t) {
                return null == e.children ? {
                    current: null
                } : t.status === b && e.mode === R ? {
                    status: b
                } : !t.current || (n = t.current, a = e.children, n === a || d.a.isValidElement(n) && d.a.isValidElement(a) && null != n.key && n.key === a.key) ? {
                    current: d.a.cloneElement(e.children, {
                        in: !0
                    })
                } : {
                    status: "exiting"
                };
                var n, a
            }, n.render = function() {
                var e, t = this.props,
                    n = t.children,
                    a = t.mode,
                    r = this.state,
                    o = r.status,
                    i = r.current,
                    c = {
                        children: n,
                        current: i,
                        changeState: this.changeState,
                        status: o
                    };
                switch (o) {
                    case b:
                        e = B[a](c);
                        break;
                    case "exiting":
                        e = A[a](c);
                        break;
                    case g:
                        e = i
                }
                return d.a.createElement(h.Provider, {
                    value: {
                        isMounting: !this.appeared
                    }
                }, e)
            }, t
        }(d.a.Component);
    G.propTypes = {}, G.defaultProps = {
        mode: L
    };
    var U = G;
    n.d(t, "a", (function() {
        return E
    })), n.d(t, "b", (function() {
        return U
    })), n.d(t, "c", (function() {
        return T
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return f
    })), n.d(t, "a", (function() {
        return m
    })), n.d(t, "c", (function() {
        return h
    })), n.d(t, "e", (function() {
        return b
    })), n.d(t, "d", (function() {
        return g
    }));
    var a = n(16),
        r = n.n(a),
        o = n(8),
        i = n.n(o),
        c = n(4),
        s = n(7),
        l = n(19),
        u = n(3),
        d = n(51),
        p = n(18);
    async function f() {
        const e = screen.width;
        return {
            version: c.tb,
            updaterVersion: 0,
            setting: {
                openTarget: l.a.CurrentTab,
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

    function m(e) {
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
    async function h() {
        return {
            version: 0,
            data: {
                updater: {}
            }
        }
    }
    async function b() {
        return (await r()({
            url: c.Cb + "/newtab/searcher.json",
            method: "get"
        })).data.data
    }
    async function g(e, t) {
        return (await r()({
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
            type: d.a.Server,
            keyword: t,
            text: e
        }))
    }
}, function(e, t, n) {
    e.exports = {
        main: "_23Qz6-4Y2hUJHp0Es5xyR-",
        primaryTypeMain: "_1PfGgJ23REmbsuVkc3zJ5p",
        loadingMain: "_2pY225SKg2V9-EPRnqL3cb",
        normalTypeMain: "GNthfAeujmmwMluEo26M",
        content: "_2ThUBZT-14wv-QnxA0RrvO"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2vzpK9mY7RhpcNBydlvrVe",
        label: "_2Q6Kgk0huSJTJr9P_vboFT",
        labelText: "Mi5AUKXFXLwAeT6nijgs-",
        errorMessage: "zQlf6TQ6gUxNOKTB_FIgl"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3fhkC-E0LvR16BwEw1ZOhv",
        icon: "_3rJ4g8YZBeOEMxNva9C8NM",
        text: "DQA2iKjQbZQJj2IoNwb38",
        nmSizeText: "_31GsnUmdzQGomkaOfbPwXu",
        lgSizeText: "pePQopJfdSXyWClfanK7Y"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2BrALJMItz0AbriwNKbWNV",
        atTopMain: "_2Z_LfduHLDhhqdeYnsF7xb",
        atBottomMain: "_1ciZy63umAfUZDifHcl140",
        borderedMain: "_2XklxOR4ULG-JbQCa-w4W1",
        borderlessMain: "_3wNtcPw6CCSmBcLTUJO28q"
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return p
    })), n.d(t, "a", (function() {
        return f
    })), n.d(t, "d", (function() {
        return m
    })), n.d(t, "c", (function() {
        return h
    }));
    var a = n(16),
        r = n.n(a),
        o = n(4),
        i = n(18),
        c = n(7),
        s = n(23),
        l = n(44),
        u = n(5),
        d = n(36);
    async function p() {
        return {
            version: o.M,
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
                        type: l.a.Color,
                        data: {
                            type: u.a.Pure,
                            data: "#276ce6"
                        }
                    },
                    [s.a.Local]: {
                        id: 509,
                        uuid: s.a.Local,
                        type: l.a.Image,
                        data: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: c.a.Jpeg,
                            data: o.Gb + "/newtab/wallpaper/940eb6f157fc49095c8d1c8597639a73.jpg"
                        },
                        blurredData: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: c.a.Jpeg,
                            data: o.Gb + "/newtab/wallpaper/blur/940eb6f157fc49095c8d1c8597639a73.jpg"
                        },
                        overviewData: {
                            uploaded: !0,
                            isOfficial: !0,
                            mimeType: c.a.Jpeg,
                            data: o.Gb + "/newtab/wallpaper/overview/940eb6f157fc49095c8d1c8597639a73.jpg"
                        }
                    }
                }
            }
        }
    }
    async function f(e) {
        return e.version = o.M, e
    }
    async function m(e, t, n) {
        const a = (await r()({
            url: o.a + "/wallpaper/random",
            method: "get",
            headers: {
                secret: Object(i.b)(e)
            },
            params: {
                cate_id: n,
                theme: Object(d.b)(t)
            }
        })).data;
        return null === a.data.wallpaper ? null : {
            id: a.data.wallpaper.udId,
            data: {
                uploaded: !0,
                isOfficial: !0,
                mimeType: a.data.wallpaper.mimeType,
                data: a.data.wallpaper.url
            },
            blurredData: {
                uploaded: !0,
                isOfficial: !0,
                mimeType: a.data.wallpaper.mimeType,
                data: a.data.wallpaper.blurUrl
            },
            overviewData: {
                uploaded: !0,
                isOfficial: !0,
                mimeType: a.data.wallpaper.mimeType,
                data: a.data.wallpaper.overviewUrl
            }
        }
    }
    async function h(e, t) {
        const n = (await r()({
            url: o.a + "/wallpaper/list",
            method: "get",
            headers: {
                secret: Object(i.b)(e)
            },
            params: {
                theme: Object(d.b)(t.themeType),
                cate_id: t.categoryValue,
                keyword: t.keyword,
                max: t.max,
                size: 12
            }
        })).data;
        return {
            data: n.data.list.map(e => ({
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
            hasMore: 12 === n.data.list.length,
            max: n.data.next_query.max
        }
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3324dBBGfsopbXoqw-yl7p",
        loadingMain: "_2n6KXh2zR917F5d_yhQN5D",
        loadedMain: "_3YZdmugUDqaLkjzUC2xmE6",
        iconWrapper: "_3SC4TQcKz12FhPYg6EE1vC",
        icon: "VtTUFhzR9pDNXKbQ6vow0",
        item: "_29ODJ5taOxEZ2tkGgUeoaX",
        currentTemperature: "_1x3P0F4EdD0-C31uBV6L5m",
        label: "eSCcosDkkSvU3_FC_5EPx"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3Yc6JTIkCd8Tc-DGMoBr3l",
        input: "_1xJCPEzBOA3jCr-orhrkdO",
        prefixedInput: "_2GzlJRRaiPVHPQDo17AFi6",
        suffixedInput: "_3f-tTdpN7N-wKEBDMgx-0t",
        inputtedInput: "_1Q_U25EA4Y6DaUSBz_scOo",
        erroredInput: "_3Qr3c_fibKn8FACn5oe_la",
        icon: "_2W1KnrA4bumF5kec48DzkI",
        clickableIcon: "gI4PiKcDWhwidTaJP-sU-",
        suffixIcon: "_30c5TaU0YZlm5mz76skz5G",
        prefixIcon: "_890NJQ3kOd6Vh95BEzRZD"
    }
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(151),
        c = n.n(i),
        s = n(57);
    t.a = Object(o.a)((function({
        opened: e
    }) {
        return e ? r.a.createElement("div", {
            className: c.a.main
        }, r.a.createElement(s.a, null)) : null
    }))
}, function(e, t, n) {
    "use strict";

    function a() {
        return (a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }).apply(this, arguments)
    }
    n.d(t, "a", (function() {
        return a
    }))
}, function(e, t, n) {
    e.exports = {
        boxshadowedViewport: "_3puvG1Rm8leu3D79_Eej9G",
        scroller: "_1klMwLO4NljPpgikNY8H6P",
        noWrapScroller: "_2EGGVELvzC4olNenT5PCac",
        boxshadowedScroller: "_3DAx-mqTSWSXG2f_JwVpQf"
    }
}, function(e, t, n) {
    e.exports = {
        main: "DArwLoKTVitMeWL8-JxmW",
        icon: "_2Ks-7w7qqaGZumDsTIK1",
        textContent: "_1frmQSGbXzdh8hX7K1Cqq-",
        title: "_22lLNjacsLjJgs1HATZCkW",
        desc: "_17306SjsE3EF9cGlwkHn5V",
        btns: "_1ZuT_A_EKUgReyq9CaVFd2"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/plusIcon.da95f240.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_1UKdQncn8LuWqPzAqYM_VQ",
        icon: "jWS9jxvDvvZGyxBnpJLRX",
        text: "_1Oh-KydUVbyebgATTcnYEA",
        labelWrapper: "_6Ic9DM5mOu0uQ_OSEm0gh",
        label: "_3FObhxQfvuy8-0zHPQY-Zu",
        badgeWrapper: "_3JdktSZerNTP1HO5u6QA4R",
        badge: "_3ylclRqlNTtqBlYd7SLHrN",
        desc: "_10h_VZnukdWgYVZH8jmlxH",
        backgroundedIcon: "_3nQOawN387rHhPJQu2EAdj"
    }
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(9),
        c = n.n(i),
        s = n(62),
        l = n.n(s);
    t.a = Object(o.a)((function({
        size: e = "nm",
        children: t
    }) {
        const n = c()(l.a.text, {
            nm: l.a.nmSizeText,
            lg: l.a.lgSizeText
        } [e]);
        return r.a.createElement("div", {
            className: l.a.main
        }, r.a.createElement("i", {
            className: l.a.icon
        }), r.a.createElement("div", {
            className: n
        }, t))
    }))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var a = n(24),
        r = n(14);
    const o = (() => {
        let e, t;
        const n = document.createElement("input");
        return n.type = "file", n.addEventListener("change", async n => {
                if (!(n.target instanceof HTMLInputElement)) return;
                const {
                    files: o
                } = n.target;
                if (null === o) return;
                const i = o[0];
                if (void 0 !== t && i.size > t) return void e(new a.a(400, "size too large"), null);
                const c = await new Promise(e => {
                    const t = new FileReader;
                    t.readAsDataURL(i), t.onload = () => e(t.result)
                });
                e(null, Object(r.c)(c))
            }),
            function(a) {
                e = a.callback, t = a.sizeLimitByte, n.accept = a.accpets.join(","), n.value = "", n.click()
            }
    })()
}, function(e, t, n) {
    e.exports = n.p + "asset/media/caretDownIcon.e58e156d.svg"
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(115),
        c = n.n(i),
        s = n(81),
        l = n.n(s),
        u = n(9),
        d = n.n(u),
        p = n(163),
        f = n.n(p);
    var m = Object(o.a)((function({
            selected: e,
            model: t,
            onClick: n
        }) {
            const a = {},
                o = d()(l.a.main, {
                    [l.a.selectedMain]: e,
                    [l.a.disabledMain]: null === t
                });
            return null !== t && ("transparent" === t.data ? a.backgroundImage = `url(${f.a})` : ("#ffffff" !== t.data && (a.color = t.data), a.backgroundColor = t.data)), r.a.createElement("div", {
                className: o,
                style: a,
                onClick: null === t ? void 0 : () => {
                    n(t)
                }
            })
        })),
        h = n(4),
        b = n(5),
        g = n(11),
        v = n(37);
    var y = Object(o.a)((function({
        value: e,
        onChange: t
    }) {
        const n = Object(g.f)(e),
            [o, i] = Object(a.useState)(null);
        return r.a.createElement(v.a, {
            placeholder: "#",
            value: null === o ? n : o,
            onChange: e => {
                const n = Object(g.d)(e);
                null !== n && t(n), i(e)
            },
            onFocus: () => {
                i(n)
            },
            onBlur: () => {
                i(null)
            },
            onKeyDown: e => {
                "Backspace" === e.key && null !== o && Object(g.l)(o) && (e.preventDefault(), i(""))
            }
        })
    }));
    t.a = Object(o.a)((function({
        defaultCustomColor: e = null,
        value: t,
        onChange: n
    }) {
        let a = null;
        Object(g.i)(t) || null !== e && Object(g.j)(e, t) || t.type === b.a.Pure && (a = t), null === a && null !== e && e.type === b.a.Pure && (a = e);
        const o = null !== a && Object(g.j)(a, t);
        return r.a.createElement("div", {
            className: c.a.main
        }, r.a.createElement("div", {
            className: c.a.options
        }, r.a.createElement(m, {
            selected: o,
            model: a,
            onClick: n
        }), h.ob.map(e => r.a.createElement(m, {
            key: e.data,
            selected: Object(g.j)(e, t),
            model: e,
            onClick: n
        }))), r.a.createElement("div", null, r.a.createElement(y, {
            value: t,
            onChange: n
        })))
    }))
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(69),
        c = n.n(i),
        s = n(80),
        l = n.n(s),
        u = n(15);
    var d = Object(o.a)((function({
            model: e,
            onClick: t
        }) {
            const {
                icoSrc: n
            } = e;
            return r.a.createElement("div", {
                className: l.a.main,
                onClick: () => {
                    t(e.value)
                }
            }, void 0 !== n && r.a.createElement(u.a, {
                src: n,
                className: l.a.icon
            }), r.a.createElement("div", {
                className: l.a.text
            }, e.text))
        })),
        p = n(9),
        f = n.n(p),
        m = n(78),
        h = n(162),
        b = n.n(h);
    var g = Object(o.a)((function() {
        return r.a.createElement("div", {
            className: b.a.main
        })
    }));
    t.a = Object(o.a)((function({
        displayAllOptions: e = !1,
        noWrap: t = !1,
        boxshadowed: n,
        options: a,
        onClick: o
    }) {
        const i = f()(n && c.a.boxshadowedViewport),
            s = f()(!e && c.a.scroller, t && c.a.noWrapScroller, n && c.a.boxshadowedScroller);
        return r.a.createElement(m.a, {
            viewportClassName: i,
            scrollerClassName: s
        }, a.map(e => "hr" === e.text ? r.a.createElement(g, {
            key: String(e.value)
        }) : r.a.createElement(d, {
            key: String(e.value),
            model: e,
            onClick: o
        })))
    }))
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(112),
        c = n.n(i),
        s = n(9),
        l = n.n(s),
        u = n(113),
        d = n.n(u),
        p = n(34),
        f = n(160),
        m = n.n(f),
        h = n(15);
    var b = Object(o.a)((function({
            display: e,
            onTopScroll: t
        }) {
            const [n, o] = Object(a.useState)(!1);
            return Object(a.useEffect)(() => {
                !e && n && o(!1)
            }, [e, n]), Object(a.useEffect)(() => {
                if (!n) return;
                const e = window.setInterval(() => {
                    t()
                }, 10);
                return () => {
                    window.clearInterval(e)
                }
            }, [n, t]), r.a.createElement(p.a, {
                entered: e
            }, r.a.createElement("div", {
                className: d.a.main,
                onMouseEnter: () => {
                    o(!0)
                },
                onMouseLeave: () => {
                    o(!1)
                }
            }, r.a.createElement(h.a, {
                className: d.a.icon,
                src: m.a
            })))
        })),
        g = n(114),
        v = n.n(g),
        y = n(161),
        S = n.n(y);
    var w = Object(o.a)((function({
        display: e,
        onBottomScroll: t
    }) {
        const [n, o] = Object(a.useState)(!1);
        return Object(a.useEffect)(() => {
            !e && n && o(!1)
        }, [e, n]), Object(a.useEffect)(() => {
            if (!n) return;
            const e = window.setInterval(() => {
                t()
            }, 10);
            return () => {
                window.clearInterval(e)
            }
        }, [n, t]), r.a.createElement(p.a, {
            entered: e
        }, r.a.createElement("div", {
            className: v.a.main,
            onMouseEnter: () => {
                o(!0)
            },
            onMouseLeave: () => {
                o(!1)
            }
        }, r.a.createElement(h.a, {
            className: v.a.icon,
            src: S.a
        })))
    }));
    t.a = Object(o.a)((function({
        autoScrollDisabled: e = !1,
        viewportClassName: t,
        scrollerClassName: n,
        onMouseEnter: o,
        onMouseMove: i,
        onMouseLeave: s,
        onScroll: u,
        children: d,
        scrollerChildren: p
    }, f) {
        const m = Object(a.useRef)(null),
            [h, g] = Object(a.useState)(0),
            [v, y] = Object(a.useState)(0),
            [S, k] = Object(a.useState)(0);
        Object(a.useImperativeHandle)(f, () => ({
            increaseScrollTop(e) {
                null !== m.current && (m.current.scrollTop += e)
            }
        }), [m]);
        const E = Object(a.useCallback)(e => {
                e.target instanceof HTMLElement && g(e.target.scrollTop), void 0 !== u && u(e)
            }, [u]),
            O = Object(a.useCallback)(() => {
                e || null === m.current || (m.current.scrollTop -= 1)
            }, [m, e]),
            C = Object(a.useCallback)(() => {
                e || null === m.current || (m.current.scrollTop += 1)
            }, [m, e]);
        Object(a.useEffect)(() => {
            if (null === m.current) return;
            y(m.current.offsetHeight);
            const e = new ResizeObserver(() => {
                null !== m.current && (y(m.current.offsetHeight), k(m.current.scrollHeight))
            });
            return e.observe(m.current), () => {
                e.disconnect()
            }
        }, [m]), Object(a.useEffect)(() => {
            null !== m.current && k(m.current.scrollHeight)
        }, [d]);
        const x = l()(c.a.viewport, t),
            j = l()(c.a.scroller, n),
            _ = 0 !== v && 0 !== S && S > v;
        return r.a.createElement("div", {
            className: x,
            onMouseEnter: o,
            onMouseMove: i,
            onMouseLeave: s
        }, r.a.createElement("div", {
            ref: m,
            onScroll: E,
            className: j
        }, d), p, r.a.createElement(b, {
            display: _ && h > 0,
            onTopScroll: O
        }), r.a.createElement(w, {
            display: _ && h + v <= S - 1,
            onBottomScroll: C
        }))
    }), {
        forwardRef: !0
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return c
    })), n.d(t, "a", (function() {
        return s
    }));
    var a = n(4),
        r = n(8),
        o = n.n(r),
        i = n(3);
    async function c() {
        const e = Date.now();
        let t = {
            uuid: o()(),
            data: "",
            isImportant: !1,
            completed: !1,
            createTime: e,
            lastUpdateTime: e
        };
        return Object(i.c)() ? t.data = "开始你的计划😃" : t.data = "Start your plan😃", {
            version: a.Vb,
            setting: {},
            data: {
                todoDict: {
                    [t.uuid]: t
                }
            }
        }
    }
    async function s(e) {
        return e.version = a.Vb, e
    }
}, function(e, t, n) {
    e.exports = {
        main: "_29X1ZUwmQmPGA95pAAwrBL",
        icon: "_3Avr0e43v37goE_AXuiLHK",
        text: "_1M09qmchZPg9CSlNLdZeBm"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1I__Z51NLCHD_QUyodxUDB",
        selectedMain: "_3_RO9U_XAYO6wKgYvFCoQv",
        disabledMain: "_1JWuYlQLYripMJMjPfu4ez"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1qyiVSL-pf9XGUOuA64jv3",
        title: "_2P2b32yzsl-H2VzXQ9nEMg",
        btns: "_1bsaCklgY7QpBKK3IPW6dT"
    }
}, function(e, t, n) {
    e.exports = {
        btn: "_3qjk4kk20zuAbCc0LcpaZ8",
        collapsedMain: "_1LhcCWKF7U_TE1tp6-2dXW",
        expandedMain: "_3SD8fE_hRUxK__h9xBuV-W",
        portrait: "_15n1K38Qih_j3sqFVm0hvY",
        collapsedPortrait: "_2EJszfNuzCLm6vE58983TJ",
        expandedPortrait: "_1Zl1d8hG4-WcmvvGiHnYuz",
        anchor: "_32N_WWWGm8mTeM0yEz_b_F",
        nickname: "_1bhVmum_ZeiCcnnGxGZogN"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1czvLl-wutbXqLpZ3IIk7b",
        icon: "_16Y-2OEU_i-ZD14oRxv_7w",
        collapsedMain: "_16H5lsiK88i7ZnRs1MOAGw",
        expandedMain: "_34lAFLabDhJ-2iG8pNsuFa",
        expandedIcon: "_3gZD-hpRkclA_lhVAQ1-CF",
        label: "_2R9y5vxwSdKyb_aP9GCkyh",
        selectedMain: "_1cRfE8ilvGw3HWg-TtK7w5"
    }
}, function(e, t, n) {
    e.exports = {
        iconWrapper: "_1dYoByMzutlIqK2HrpKRoh",
        particularIconWrapper: "_1p5MfbvSAJuPKpJxlir_IF",
        simpleIconWrapper: "_2BzhjJD5kKlQfW8jbyRvL_",
        icon: "_2VQzjSUm08_6iRcrTj5oiP",
        main: "vn79LHALkJthhYfUX_K3J"
    }
}, function(e, t, n) {
    e.exports = {
        loadingMain: "_1xD7xx55RDkVEA4aTo8yUO",
        loadedMain: "_1MTLXd_GIpNFMAYfk280DV",
        currentTemperature: "-JZe5KXGjW2xYxnGbfD1g",
        currentTemperatureUnit: "_1lWJFYV3GVqUNBUhHiQzDS",
        weather: "_1yyXGBxq8ic75HbN44ojj3",
        iconWrapper: "_1GI_Zz3wb47QxdL1MQubVq",
        icon: "_4UmixawDbKcgEttMk1Wio",
        text: "AdExlQmpHaJP-lkwmQKnR"
    }
}, function(e, t, n) {
    e.exports = {
        hide: "pRRgiBFbhpU_XFfVEKmc4",
        main: "_2sCeuaxH_38ohqVfRvrt3_",
        checkbox: "_2r4yq0LglqhBAc4YwJ6EFG",
        toggleBtn: "_1XO5AUGuKMBRhxgMZSjJx8",
        icon: "_3Y1xVObrH64z3uB8_FnS4U",
        label: "woO54ZM_w_muRWkPNfOdK",
        selectedLabel: "_32Kf5lEblmhUCXKwfPL8kj",
        children: "S5PUvVSv1fq1l61gJscrP"
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), a = 0; a < n.length; a++) n[a] = arguments[a];
            return e.apply(t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(29);

    function r(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
        if (!t) return e;
        var o;
        if (n) o = n(t);
        else if (a.isURLSearchParams(t)) o = t.toString();
        else {
            var i = [];
            a.forEach(t, (function(e, t) {
                null != e && (a.isArray(e) ? t += "[]" : e = [e], a.forEach(e, (function(e) {
                    a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)), i.push(r(t) + "=" + r(e))
                })))
            })), o = i.join("&")
        }
        if (o) {
            var c = e.indexOf("#"); - 1 !== c && (e = e.slice(0, c)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
        }
        return e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var a = n(29),
            r = n(135),
            o = {
                "Content-Type": "application/x-www-form-urlencoded"
            };

        function i(e, t) {
            !a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var c, s = {
            adapter: ((void 0 !== t && "[object process]" === Object.prototype.toString.call(t) || "undefined" != typeof XMLHttpRequest) && (c = n(92)), c),
            transformRequest: [function(e, t) {
                return r(t, "Accept"), r(t, "Content-Type"), a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : a.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
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
        }, a.forEach(["delete", "get", "head"], (function(e) {
            s.headers[e] = {}
        })), a.forEach(["post", "put", "patch"], (function(e) {
            s.headers[e] = a.merge(o)
        })), e.exports = s
    }).call(this, n(107))
}, function(e, t, n) {
    "use strict";
    var a = n(29),
        r = n(136),
        o = n(89),
        i = n(138),
        c = n(139),
        s = n(93);
    e.exports = function(e) {
        return new Promise((function(t, l) {
            var u = e.data,
                d = e.headers;
            a.isFormData(u) && delete d["Content-Type"];
            var p = new XMLHttpRequest;
            if (e.auth) {
                var f = e.auth.username || "",
                    m = e.auth.password || "";
                d.Authorization = "Basic " + btoa(f + ":" + m)
            }
            if (p.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
                    if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in p ? i(p.getAllResponseHeaders()) : null,
                            a = {
                                data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                status: p.status,
                                statusText: p.statusText,
                                headers: n,
                                config: e,
                                request: p
                            };
                        r(t, l, a), p = null
                    }
                }, p.onabort = function() {
                    p && (l(s("Request aborted", e, "ECONNABORTED", p)), p = null)
                }, p.onerror = function() {
                    l(s("Network Error", e, null, p)), p = null
                }, p.ontimeout = function() {
                    l(s("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
                }, a.isStandardBrowserEnv()) {
                var h = n(140),
                    b = (e.withCredentials || c(e.url)) && e.xsrfCookieName ? h.read(e.xsrfCookieName) : void 0;
                b && (d[e.xsrfHeaderName] = b)
            }
            if ("setRequestHeader" in p && a.forEach(d, (function(e, t) {
                    void 0 === u && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
                })), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                p.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                p && (p.abort(), l(e), p = null)
            })), void 0 === u && (u = null), p.send(u)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var a = n(137);
    e.exports = function(e, t, n, r, o) {
        var i = new Error(e);
        return a(i, t, n, r, o)
    }
}, function(e, t, n) {
    "use strict";
    var a = n(29);
    e.exports = function(e, t) {
        t = t || {};
        var n = {};
        return a.forEach(["url", "method", "params", "data"], (function(e) {
            void 0 !== t[e] && (n[e] = t[e])
        })), a.forEach(["headers", "auth", "proxy"], (function(r) {
            a.isObject(t[r]) ? n[r] = a.deepMerge(e[r], t[r]) : void 0 !== t[r] ? n[r] = t[r] : a.isObject(e[r]) ? n[r] = a.deepMerge(e[r]) : void 0 !== e[r] && (n[r] = e[r])
        })), a.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], (function(a) {
            void 0 !== t[a] ? n[a] = t[a] : void 0 !== e[a] && (n[a] = e[a])
        })), n
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        this.message = e
    }
    a.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, a.prototype.__CANCEL__ = !0, e.exports = a
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return c
    }));
    var a = n(4),
        r = n(17),
        o = n(3);
    async function i() {
        return {
            version: a.R,
            setting: {
                themeType: r.a.Auto,
                widthPercentage: 100,
                location: null,
                enable24HourSystem: !1,
                enableImperialUnits: "en-US" === Object(o.b)()
            }
        }
    }
    async function c(e) {
        return e.version = a.R, e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return o
    }));
    var a = n(4);
    async function r() {
        return {
            version: a.Bb,
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
    async function o(e) {
        return e.version = a.Bb, e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return o
    })), n.d(t, "a", (function() {
        return i
    }));
    var a = n(4),
        r = n(41);
    async function o() {
        return {
            version: a.xb,
            setting: {
                autoHide: !1,
                collapsed: !0,
                side: r.a.Left
            }
        }
    }
    async function i(e) {
        const {
            version: t
        } = e;
        return t < a.xb && t <= 1 && void 0 === e.setting.side && (e.setting.side = r.a.Left), e.version = a.xb, e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "d", (function() {
        return l
    })), n.d(t, "b", (function() {
        return u
    })), n.d(t, "c", (function() {
        return d
    }));
    var a = n(16),
        r = n.n(a),
        o = n(3),
        i = n(4),
        c = n(18);
    async function s() {
        return {
            version: i.kc,
            data: {
                woeid: null,
                observation: null
            }
        }
    }
    async function l(e) {
        const t = (await r()({
                url: "https://api.ipify.org?format=json",
                method: "get"
            })).data,
            {
                ip: n
            } = t,
            a = (await r()({
                url: "http://ip-api.com/json/" + n,
                method: "get",
                params: "fields=status,city,regionName,country"
            })).data;
        if ("success" !== a.status) return null;
        const o = await u(e, `${a.city},${a.regionName},${a.country}`);
        return 0 === o.length ? null : o[0]
    }
    async function u(e, t) {
        return (await r()({
            url: i.hc + "/home/locations",
            method: "get",
            headers: {
                secret: Object(c.b)(e)
            },
            params: {
                keyword: t,
                lang: Object(o.b)()
            }
        })).data.data.locations.map(e => ({
            woeid: e.woeid,
            latitude: e.lat,
            longtitude: e.lon,
            fullname: e.qualifiedName,
            shortname: e.city
        }))
    }
    async function d(e, t) {
        const n = (await r()({
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
        return null === n.data.weather ? null : {
            lastUpdateTime: Date.now(),
            currentTemperatureFahrenheit: n.data.weather.currentFahrenheit,
            lowTemperatureFahrenheit: n.data.weather.lowFahrenheit,
            highTemperatureFahrenheit: n.data.weather.highFahrenheit,
            yahooConditionCode: n.data.weather.conditionCode
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return Qe
    })), n.d(t, "c", (function() {
        return Ye
    })), n.d(t, "a", (function() {
        return Je
    }));
    var a = n(27),
        r = n(3),
        o = n(165),
        i = n.n(o),
        c = n(166),
        s = n.n(c),
        l = n(167),
        u = n.n(l),
        d = n(168),
        p = n.n(d),
        f = n(169),
        m = n.n(f),
        h = n(170),
        b = n.n(h),
        g = n(171),
        v = n.n(g),
        y = n(172),
        S = n.n(y),
        w = n(173),
        k = n.n(w),
        E = n(174),
        O = n.n(E),
        C = n(175),
        x = n.n(C),
        j = n(176),
        _ = n.n(j),
        I = n(177),
        T = n.n(I),
        P = n(178),
        M = n.n(P),
        N = n(179),
        L = n.n(N),
        R = n(180),
        D = n.n(R),
        A = n(181),
        B = n.n(A),
        G = n(182),
        U = n.n(G),
        V = n(183),
        F = n.n(V),
        z = n(184),
        W = n.n(z),
        H = n(185),
        q = n.n(H),
        K = n(186),
        Q = n.n(K),
        Y = n(187),
        J = n.n(Y),
        X = n(188),
        Z = n.n(X),
        $ = n(189),
        ee = n.n($),
        te = n(190),
        ne = n.n(te),
        ae = n(191),
        re = n.n(ae),
        oe = n(192),
        ie = n.n(oe),
        ce = n(193),
        se = n.n(ce),
        le = n(194),
        ue = n.n(le),
        de = n(195),
        pe = n.n(de),
        fe = n(196),
        me = n.n(fe),
        he = n(197),
        be = n.n(he),
        ge = n(198),
        ve = n.n(ge),
        ye = n(199),
        Se = n.n(ye),
        we = n(200),
        ke = n.n(we),
        Ee = n(201),
        Oe = n.n(Ee),
        Ce = n(202),
        xe = n.n(Ce),
        je = n(203),
        _e = n.n(je),
        Ie = n(204),
        Te = n.n(Ie),
        Pe = n(205),
        Me = n.n(Pe),
        Ne = n(206),
        Le = n.n(Ne),
        Re = n(207),
        De = n.n(Re),
        Ae = n(208),
        Be = n.n(Ae),
        Ge = n(116),
        Ue = n.n(Ge),
        Ve = n(209),
        Fe = n.n(Ve),
        ze = n(210),
        We = n.n(ze),
        He = n(211),
        qe = n.n(He);
    const Ke = {
        0: i.a,
        1: s.a,
        2: u.a,
        3: p.a,
        4: m.a,
        5: b.a,
        6: v.a,
        7: S.a,
        8: k.a,
        9: O.a,
        10: x.a,
        11: _.a,
        12: T.a,
        13: M.a,
        14: L.a,
        15: D.a,
        16: B.a,
        17: U.a,
        18: F.a,
        19: W.a,
        20: q.a,
        21: Q.a,
        22: J.a,
        23: Z.a,
        24: ee.a,
        25: ne.a,
        26: re.a,
        27: ie.a,
        28: se.a,
        29: ue.a,
        30: pe.a,
        31: me.a,
        32: be.a,
        33: ve.a,
        34: Se.a,
        35: ke.a,
        36: Oe.a,
        37: xe.a,
        38: _e.a,
        39: Te.a,
        40: Me.a,
        41: Le.a,
        42: De.a,
        43: Be.a,
        44: Ue.a,
        45: Fe.a,
        46: We.a,
        47: qe.a
    };

    function Qe(e, t) {
        return t ? e : Math.round(5 * (e - 32) / 9)
    }

    function Ye(e) {
        return {
            icoSrc: Ke[e] || Ue.a,
            label: Object(r.a)("yahoo_condition_code_desc_" + e)
        }
    }

    function Je(e) {
        if (null === e.setting.location) throw Object(a.a)();
        return e.setting.location
    }
}, function(e, t, n) {
    e.exports = {
        main: "_35dCfZIA7i6CH_ivGE63h",
        iconWrapper: "_32Rscb04SIoyKJsmPKArIc",
        label: "_1m4Q8YFAff1ah1goK1VuX5",
        boxShadowedLabel: "_33f55HESQKUV9S8XUNrlM8",
        badge: "_1mR-bQzqLgls3nOXfbKSoM"
    }
}, function(e, t, n) {
    e.exports = {
        viewport: "_1uAqa6J4T5wT94leGF4HlV",
        scroller: "_1GhCYQL4mMFQtoDhSyZmo2",
        content: "rC9ceEb0QSZ1ThXc7e5o-",
        contentMain: "_1ZOjpXAGXwHKPIrtqJKySs",
        contentAside: "_1M0ifBGdSojE18IgrxfoNG"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_29FCwnSyT8prowO53G4pbk",
        rightSideMain: "_2AmeVi1bPSCjmTTlircmui",
        autoHideMain: "Hm--OaW9zylTfu8rqazZU",
        leftSideMain: "rFNMd5ZY2_LT9JKrbr6ro",
        enteredMain: "_1eMQWAEuJZdO2PDGza0EeK",
        collapsedMain: "_2T6pngi71zP0E_QROkE8ZI",
        expandedMain: "_16P-cYJ-EdmpiYv7pqgq46"
    }
}, function(e, t, n) {
    e.exports = {
        main: "B9d3uZR-Aj70Gq3NnB1S8",
        loadingMain: "_1PfDUKY4Lm8-mZXUP3tbHM",
        image: "_3Jmh1LL6LqA3XS__wzZX6S",
        title: "_43TH-GpAwIZ_IsMYQGE0-",
        grayImage: "_2ptQU-TVA6lXKloScvJS2P",
        selectedMain: "_1G2tVh7yHdfou5CZ7EiWHW",
        disabledMain: "_3_fygYnhTNSYrW7wPmryfe"
    }
}, function(e, t, n) {
    e.exports = {
        wrapper: "_1tG6e_vjLXEAJRqy9lCuis",
        focusedWrapper: "cK_rnweRTN242ryRgL9SO",
        clickableWrapper: "_1hDT1i3YJj7Paa-XNYZl-M",
        main: "_3fAL5aiD6-Mj4BHjBQhcTS",
        prefixContent: "BghKsfcDzw8S1Cj8qfES_",
        suffixContent: "_3A0uanE4ENzcSHLGtd7fZ7",
        content: "_3tcJKGv_TNkFwkevtqKYNb"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2Epca96Go1sTpUw7JQ_e0h",
        checkbox: "_1tC4D2vOY34fKuewcNCEo5",
        iconWrapper: "_1_9MLisGHvtqXmU-gu3KeZ",
        icon: "_2kx_Jih9jke0cu9wSR8VZh",
        placeholderIcon: "_1TccNJHKaNP_T59UH88evD",
        label: "_1hosXE5prbSVCb5p-36fsP",
        selectedLabel: "_17Y2QTk7d2nxEd8qx9Dj4_"
    }
}, function(e, t) {
    var n, a, r = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function c(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            a = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            a = i
        }
    }();
    var s, l = [],
        u = !1,
        d = -1;

    function p() {
        u && s && (u = !1, s.length ? l = s.concat(l) : d = -1, l.length && f())
    }

    function f() {
        if (!u) {
            var e = c(p);
            u = !0;
            for (var t = l.length; t;) {
                for (s = l, l = []; ++d < t;) s && s[d].run();
                d = -1, t = l.length
            }
            s = null, u = !1,
                function(e) {
                    if (a === clearTimeout) return clearTimeout(e);
                    if ((a === i || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e);
                    try {
                        a(e)
                    } catch (t) {
                        try {
                            return a.call(null, e)
                        } catch (t) {
                            return a.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function m(e, t) {
        this.fun = e, this.array = t
    }

    function h() {}
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new m(e, t)), 1 !== l.length || u || c(f)
    }, m.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(e) {
        return []
    }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function() {
        return "/"
    }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function() {
        return 0
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        r = n(6),
        o = n(11),
        i = n(14),
        c = n(13),
        s = n(42),
        l = n(3),
        u = n(8),
        d = n.n(u),
        p = n(24),
        f = n(40),
        m = n.n(f),
        h = n(4),
        b = n(33),
        g = n(22);
    class v {
        constructor({
            getUser: e,
            icon: t,
            onError: n = b.a,
            forceAsNew: a = !1
        }) {
            this.getUser = e, this.onError = n, this.tabValue = "main", this.originIcon = void 0 === t ? null : t;
            const s = {
                id: null,
                uuid: null,
                url: Object(g.a)(""),
                label: Object(g.a)(""),
                type: Object(g.a)(r.a.Image),
                desc: Object(g.a)(""),
                backgroundColor: Object(g.a)(Object(o.b)()),
                icoSrc: Object(g.a)(null),
                icoScalePercentage: 100,
                icoText: Object(g.a)("")
            };
            if (this.customBackgroundColor = null, this.officialImageIcon = null, this.officialImageIconSearchStatus = c.a.Inputting, this.officialImageIconRequestId = 0, this.delayUpdateOfficialImageIconFromServer = m()(this.updateOfficialImageIconFromServer, h.vb), t) switch (s.id = t.id, s.uuid = t.uuid, s.url.value = t.url, (!a || s.url.value.length > 0) && (s.url.touched = !0), s.label.value = t.label, (!a || s.label.value.length > 0) && (s.label.touched = !0), a || (s.type.value = t.type), s.desc.value = t.desc, (!a || s.desc.value.length > 0) && (s.desc.touched = !0), a || (s.backgroundColor.value = Object(o.a)(t.backgroundColor), s.backgroundColor.touched = !0, Object(o.i)(s.backgroundColor.value) || (this.customBackgroundColor = Object(o.a)(s.backgroundColor.value))), t.type) {
                case r.a.Image:
                    a || (s.icoSrc.value = Object(i.b)(t.icoSrc), s.icoScalePercentage = t.icoScalePercentage, s.icoSrc.value.isOfficial ? (this.officialImageIconSearchStatus = c.a.Successed, this.officialImageIcon = {
                        id: -1,
                        label: "",
                        icoSrc: Object(i.b)(s.icoSrc.value),
                        desc: "",
                        icoScalePercentage: s.icoScalePercentage,
                        backgroundColor: Object(o.a)(s.backgroundColor.value),
                        url: ""
                    }) : s.type.touched = !0);
                    break;
                case r.a.Text:
                    a || (s.type.touched = !0), s.icoText.value = t.icoText, (!a || s.icoText.value.length > 0) && (s.icoText.touched = !0)
            }
            this.model = s, void 0 === t || !a && t.type === r.a.Image && t.icoSrc.isOfficial || (this.officialImageIconSearchStatus = c.a.Submitting, this.updateOfficialImageIcon())
        }
        goMainTab() {
            this.tabValue = "main"
        }
        updateCustomBackgroundColor() {
            const {
                model: e,
                officialImageIcon: t
            } = this;
            !Object(o.i)(e.backgroundColor.value) && e.backgroundColor.touched || (null !== this.customBackgroundColor && Object(o.j)(e.backgroundColor.value, this.customBackgroundColor) && (e.type.value === r.a.Text ? e.backgroundColor.value = Object(o.n)() : e.backgroundColor.value = Object(o.b)()), null === t || Object(o.i)(t.backgroundColor) ? this.customBackgroundColor = null : this.customBackgroundColor = Object(o.a)(t.backgroundColor))
        }
        validateUrl() {
            const {
                model: e
            } = this, {
                url: t
            } = e;
            return 0 === t.value.length ? (t.errored = !0, t.errorMessage = Object(l.a)("required")) : t.errored = !1, !t.errored
        }
        setUrl(e) {
            const {
                model: t
            } = this;
            t.url.value = e, t.url.touched = !0, this.validateUrl(), this.updateOfficialImageIcon()
        }
        validateLabel() {
            const {
                model: e
            } = this, {
                label: t
            } = e;
            return 0 === t.value.length ? (t.errored = !0, t.errorMessage = Object(l.a)("required")) : t.errored = !1, !t.errored
        }
        setLabel(e) {
            const {
                model: t
            } = this;
            t.label.touched = !0, t.label.value = e, this.validateLabel(), t.type.value !== r.a.Text || t.icoText.touched || (t.icoText.value = t.label.value.slice(0, 2))
        }
        setTypeAsTextIcon() {
            const {
                model: e
            } = this;
            e.type.value = r.a.Text, e.type.touched = !0, e.backgroundColor.touched = !0, e.icoText.touched || (e.icoText.value = e.label.value.slice(0, 2)), this.validateIcoSrc()
        }
        setDesc(e) {
            const {
                model: t
            } = this;
            t.desc.touched = !0, t.desc.value = e
        }
        setBackgroundColor(e) {
            const {
                model: t
            } = this;
            t.backgroundColor.touched = !0, t.backgroundColor.value = Object(o.a)(e), this.updateCustomBackgroundColor()
        }
        validateIcoText() {
            const {
                model: e
            } = this, {
                icoText: t,
                type: n
            } = e;
            return n.value === r.a.Text && 0 === t.value.length ? (t.errored = !0, t.errorMessage = Object(l.a)("required")) : t.errored = !1, !t.errored
        }
        setIcoText(e) {
            const {
                model: t
            } = this;
            t.type.touched = !0, t.backgroundColor.touched = !0, t.icoText.value = e, t.icoText.touched = !0, this.validateIcoText()
        }
        validateIcoSrc() {
            const {
                model: e
            } = this, {
                icoSrc: t,
                type: n
            } = e;
            return n.value === r.a.Image && null === t.value ? (t.errored = !0, t.errorMessage = Object(l.a)("required")) : t.errored = !1, !t.errored
        }
        validate() {
            let e = !0;
            return e = this.validateUrl() && e, e = this.validateLabel() && e, e = this.validateIcoText() && e, e = this.validateIcoSrc() && e, e
        }
        toJs() {
            let e;
            const {
                model: t
            } = this;
            let n = t.url.value;
            n.startsWith("://") ? n = "https" + n : n.startsWith("//") ? n = "https:" + n : n.startsWith("/") && (n = "https:/" + n);
            try {
                new URL(n)
            } catch (e) {
                n = "https://" + n
            }
            if (t.type.value === r.a.Image) {
                if (null === t.icoSrc.value) throw new p.a(500, "icoSrc is null");
                e = {
                    id: t.id,
                    uuid: t.uuid || d()(),
                    url: n,
                    label: t.label.value,
                    type: r.a.Image,
                    desc: t.desc.value,
                    backgroundColor: Object(o.a)(t.backgroundColor.value),
                    icoSrc: Object(i.b)(t.icoSrc.value),
                    icoScalePercentage: t.icoScalePercentage
                };
                const {
                    originIcon: a
                } = this;
                null !== a && a.url !== e.url && (e.id = null)
            } else e = {
                id: null,
                uuid: t.uuid || d()(),
                url: n,
                label: t.label.value,
                type: r.a.Text,
                desc: t.desc.value,
                backgroundColor: Object(o.a)(t.backgroundColor.value),
                icoText: t.icoText.value
            };
            return e
        }
        startCustomizeImage(e) {
            this.customImageSrc = Object(i.b)(e), this.customImageBackgroundColor = Object(o.a)(this.model.backgroundColor.value), this.tabValue = "customImage", this.customImageScalePercentage = 100
        }
        endCustomizeImage() {
            const {
                model: e
            } = this;
            e.type.value = r.a.Image, e.type.touched = !0, e.icoSrc.value = Object(i.b)(this.customImageSrc), e.icoScalePercentage = this.customImageScalePercentage, e.backgroundColor.value = Object(o.a)(this.customImageBackgroundColor), e.backgroundColor.touched = !0, this.validateIcoSrc(), this.validateIcoText(), this.tabValue = "main"
        }
        setCustomImageBackgroundColor(e) {
            this.customImageBackgroundColor = Object(o.a)(e)
        }
        increseCustomImageScalePercentage() {
            this.customImageScalePercentage += 10
        }
        decreseCustomImageScalePercentage() {
            this.customImageScalePercentage -= 10
        }
        resetCustomImageScalePercentage() {
            this.customImageScalePercentage = 100
        }
        updateUntouchedFields() {
            const {
                officialImageIcon: e,
                model: t
            } = this;
            null === e ? (t.label.touched || (t.label.value = ""), t.desc.touched || (t.desc.value = ""), t.icoText.touched || (t.icoText.value = t.label.value.slice(0, 2))) : (t.label.touched || (t.label.value = e.label, t.icoText.touched || (t.icoText.value = e.label.slice(0, 2))), t.desc.touched || (t.desc.value = e.desc)), t.backgroundColor.touched || null !== e && (t.backgroundColor.value = Object(o.a)(e.backgroundColor))
        }
        async updateOfficialImageIcon() {
            this.officialImageIconRequestId++, this.delayUpdateOfficialImageIconFromServer.cancel(), this.model.type.touched || (this.model.icoSrc.value = null), this.officialImageIcon = null;
            if (0 === this.model.url.value.trim().length) return this.officialImageIconSearchStatus = c.a.Inputting, this.updateCustomBackgroundColor(), void this.updateUntouchedFields();
            this.officialImageIconSearchStatus = c.a.Submitting, this.delayUpdateOfficialImageIconFromServer()
        }
        async updateOfficialImageIconFromServer() {
            const {
                officialImageIconRequestId: e
            } = this, t = await Object(s.e)(this.getUser(), this.model.url.value.trim());
            e === this.officialImageIconRequestId && Object(a.h)(() => {
                null === t ? this.officialImageIconSearchStatus = c.a.Failed : (this.officialImageIcon = t, this.officialImageIconSearchStatus = c.a.Successed), this.updateCustomBackgroundColor(), this.updateUntouchedFields(), this.model.type.touched || (null === t ? (this.model.backgroundColor.touched || this.model.type.value === r.a.Text || (this.model.backgroundColor.value = Object(o.n)()), this.model.type.value = r.a.Text) : this.pickOfficialImage())
            })
        }
        pickOfficialImage() {
            const {
                officialImageIcon: e
            } = this;
            if (null === e) return;
            const {
                model: t
            } = this;
            t.type.touched = !1, t.type.value = r.a.Image, t.icoSrc.value = Object(i.b)(e.icoSrc), t.icoScalePercentage = e.icoScalePercentage, this.validateIcoText(), this.validateIcoSrc()
        }
    }
    Object(a.e)(v, {
        tabValue: a.g,
        goMainTab: a.b.bound,
        model: a.g,
        customBackgroundColor: a.g.ref,
        updateCustomBackgroundColor: a.b,
        setUrl: a.b.bound,
        validateUrl: a.b.bound,
        validateLabel: a.b.bound,
        setLabel: a.b.bound,
        setTypeAsTextIcon: a.b.bound,
        setDesc: a.b.bound,
        setBackgroundColor: a.b.bound,
        validateIcoText: a.b.bound,
        setIcoText: a.b.bound,
        validateIcoSrc: a.b,
        validate: a.b,
        updateUntouchedFields: a.b,
        officialImageIconSearchStatus: a.g,
        officialImageIcon: a.g.ref,
        updateOfficialImageIcon: a.b,
        pickOfficialImage: a.b.bound,
        customImageSrc: a.g.ref,
        customImageBackgroundColor: a.g.ref,
        customImageScalePercentage: a.g,
        startCustomizeImage: a.b,
        endCustomizeImage: a.b.bound,
        setCustomImageBackgroundColor: a.b.bound,
        increseCustomImageScalePercentage: a.b.bound,
        decreseCustomImageScalePercentage: a.b.bound,
        resetCustomImageScalePercentage: a.b.bound
    }), t.a = v
}, function(e, t, n) {
    "use strict";

    function a(e) {
        e.stopPropagation()
    }
    n.d(t, "a", (function() {
        return a
    }))
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(156),
        c = n.n(i),
        s = n(47),
        l = n.n(s),
        u = n(3),
        d = n(157),
        p = n.n(d),
        f = n(75),
        m = n.n(f),
        h = n(15),
        b = n(9),
        g = n.n(b);
    var v = Object(o.a)((function({
            bordered: e,
            value: t,
            options: n
        }) {
            const a = n.find(e => e.value === t),
                o = a ? a.text : Object(u.a)("unknown"),
                i = g()(l.a.main, {
                    [l.a.borderedMain]: e
                });
            return r.a.createElement("div", {
                className: i
            }, void 0 !== a && void 0 !== a.icoSrc && r.a.createElement(h.a, {
                className: `${l.a.prefixIcon} ${l.a.icon}`,
                src: a.icoSrc
            }), r.a.createElement("div", {
                className: l.a.text
            }, o), r.a.createElement(h.a, {
                className: `${l.a.icon} ${l.a.suffixIcon}`,
                src: e ? m.a : p.a
            }))
        })),
        y = n(63),
        S = n.n(y),
        w = n(110),
        k = n(39),
        E = n.n(k),
        O = n(77),
        C = n(34);
    var x = Object(o.a)((function({
            bordered: e,
            popupPosition: t,
            onClose: n,
            opened: a,
            options: o,
            value: i,
            onChange: c
        }) {
            const s = g()(S.a.main, e ? S.a.borderedMain : S.a.borderlessMain, {
                top: S.a.atTopMain,
                bottom: S.a.atBottomMain
            } [t]);
            return r.a.createElement(C.a, {
                entered: a
            }, r.a.createElement("div", {
                className: s,
                onClick: w.a
            }, r.a.createElement(O.a, {
                boxshadowed: !0,
                options: o,
                onClick: c
            }), r.a.createElement(E.a, {
                target: document,
                onClick: n
            })))
        })),
        j = n(28);
    t.a = Object(o.a)((function({
        bordered: e = !0,
        popupPosition: t = "bottom",
        picking: n,
        value: o,
        options: i,
        onChange: s,
        onClose: l
    }) {
        const [u, d] = Object(a.useState)(!1), p = Object(a.useCallback)(() => {
            d(e => !e)
        }, [d]), f = Object(a.useCallback)(() => {
            d(!1)
        }, [d]);
        return Object(a.useEffect)(() => {
            if (void 0 === n) {
                if (u) return Object(j.b)(() => {
                    d(!1)
                })
            } else if (void 0 !== l && n) return Object(j.b)(l)
        }, [n, l, u, d]), r.a.createElement("div", {
            className: c.a.main,
            onClick: void 0 === n ? p : void 0
        }, r.a.createElement(v, {
            bordered: e,
            value: o,
            options: i
        }), r.a.createElement(x, {
            bordered: e,
            popupPosition: t,
            value: o,
            opened: void 0 === n ? u : n,
            options: i,
            onChange: s,
            onClose: void 0 === l ? f : l
        }))
    }))
}, function(e, t, n) {
    e.exports = {
        viewport: "_37o9zR64NjIVg5mC6WDd0v",
        scroller: "eMjyuSoK2uUVQrgvlge72"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1u5plgnBKe8p9WVlOJ6bxh",
        icon: "_1V2TZgBCiJ3-AqIcMy5bPM"
    }
}, function(e, t, n) {
    e.exports = {
        main: "vzF93xUj6l8NH4yaB8Kjg",
        icon: "bCsHAfXxlLcoGIVVzypwj"
    }
}, function(e, t, n) {
    e.exports = {
        options: "_2GjZm44mJP_UN4V6YkeUxb"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon44.91e1b157.svg"
}, function(e, t, n) {
    e.exports = {
        viewport: "pkdFF8HNpG0BkaUDzNwgY",
        main: "GI3R6q3ExtDVkcOtigFFb",
        upExitedMain: "ndhjzOQNkvMmzN6CbkITT",
        downExitedMain: "_28Yr_K2UNI65j46lCAGERq",
        fadedMain: "_30b25cuZRTbe4vE5u9SqB2"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_26LQE52Eipn15IT_CnzzCY",
        progress: "_3zAP2YGcSPh5XsalQHrGIh",
        progressValue: "kOpdvVwWVkQlrEzKXpi2",
        input: "faUH2iAadbradOQ4WR3-q",
        markerWrapper: "xlAHI2juM-dQw3vLUjfoS",
        marker: "_3MlnSCUb0_Y2lLDjDo7thv"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2TEa-arrgIOzAb8ePeHQKb",
        a: "_1GxfniSHj2rNaB4NXf1KPk",
        b: "_325oRW0s-lze6pNOS69G8N",
        c: "_1Y1lc_MTx1rpZf4IwpYA_a",
        d: "_1TJrfCWDcsy2YFluozh0XP",
        e: "_1jtfhQCR8_dN4wb8RmZHW8"
    }
}, function(e, t, n) {
    e.exports = {
        main: "VknDqRp-6NC4oqU38uep2",
        icon: "q8YrPMpl9JwO38m9PQDOR",
        text: "_2JZC8xWICxVr0r205LBzRr",
        textContent: "_2hFdxiC2ChSe3uKqjcVOt3",
        label: "bWkIte7uzYU59KtfeZuqE",
        desc: "_1XanfDMqFOM6uye3GHUamb"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_32PDq4rHnehKmTvSuBK77h",
        failedMain: "_3UUwZ2COLUPWT3dldKCRIC",
        successedMain: "_1LEKF8J8k53FjdF_0lLX-l",
        normalMain: "_1el31FpNMzmvtOvoIDMYLH",
        icon: "Y_AcXD3nszRyowNUWWcXl"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/mailIcon.38f6e390.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_1tdZ15uzkrezQaiAGw_Lpw",
        colorContent: "_1WxbE4H0GI6A58R8yBbzdU",
        colorContentMain: "_2EK0aiUP56uOh3zJFvswEY",
        imageContent: "_2AGqujrro67HEkospBh9mO"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2wxKI4UYt-9oJT6J4Em8BI",
        childrenOnlyMain: "_1ZYpe02dEpfgqBBABPt1HU",
        hoveringMain: "_1ddfLUdGpr0rUeXqlnRAek",
        label: "_1tgUa23wc09USu2FcLAibN"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2rYzHqKP7yeGfUEgkmsDFD",
        portrait: "_15_jtDi7QfxhNpIsbPkYYJ",
        portraitImage: "_12h0bnOAp7YJhuSM4s-AXG",
        nickname: "_15YSS751sGYMfh22SygkGx",
        username: "YiN0mk2VvHQq7cOBIn2W2"
    }
}, function(e, t, n) {
    e.exports = {
        main: "XVkQlAlmKAJcMo4PRNXtc",
        mosaicBackground: "b34EhjuOMZ9XvB5jDFX9A",
        image: "_15kK8W75fa1uQn56lt4dVE",
        overlay: "_2bvf8W8Xxuq1OfFw-7_ILQ",
        viewport: "_2k_H169GvMoMkZAXUXv9aE"
    }
}, function(e, t, n) {
    e.exports = {
        main: "jNZpokyE_tO8fMQe8LXXa",
        enter: "_2ocqQD-MDoqHTTwMhhVCvF",
        enterActive: "_1-KwcR7pKMaVYFPAUsM8MA",
        exit: "_29adjZDfXxGKbId8LuuLxt",
        exitActive: "_1iFucoTtgsVQpZc1Pn-IRK"
    }
}, function(e, t, n) {
    e.exports = {
        main: "nNslcHZc6KW3IBpdNcXMP",
        content: "_2lwo3ACAm1g4kpeMaGIXCt",
        primaryTypeMain: "_1dOht0kC-c1YZazhUArSf5",
        normalTypeMain: "_3gJbnVVZbtaOnJpq34DzkU",
        loadingMain: "_35jg2j--xEFjE421Lo2mxW"
    }
}, function(e, t, n) {
    "use strict";
    var a = n(29),
        r = n(88),
        o = n(131),
        i = n(94);

    function c(e) {
        var t = new o(e),
            n = r(o.prototype.request, t);
        return a.extend(n, o.prototype, t), a.extend(n, t), n
    }
    var s = c(n(91));
    s.Axios = o, s.create = function(e) {
        return c(i(s.defaults, e))
    }, s.Cancel = n(95), s.CancelToken = n(143), s.isCancel = n(90), s.all = function(e) {
        return Promise.all(e)
    }, s.spread = n(144), e.exports = s, e.exports.default = s
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
}, function(e, t, n) {
    "use strict";
    var a = n(29),
        r = n(89),
        o = n(132),
        i = n(133),
        c = n(94);

    function s(e) {
        this.defaults = e, this.interceptors = {
            request: new o,
            response: new o
        }
    }
    s.prototype.request = function(e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = c(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
        var t = [i, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach((function(e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function(e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, s.prototype.getUri = function(e) {
        return e = c(this.defaults, e), r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, a.forEach(["delete", "get", "head", "options"], (function(e) {
        s.prototype[e] = function(t, n) {
            return this.request(a.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    })), a.forEach(["post", "put", "patch"], (function(e) {
        s.prototype[e] = function(t, n, r) {
            return this.request(a.merge(r || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    })), e.exports = s
}, function(e, t, n) {
    "use strict";
    var a = n(29);

    function r() {
        this.handlers = []
    }
    r.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, r.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, r.prototype.forEach = function(e) {
        a.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }))
    }, e.exports = r
}, function(e, t, n) {
    "use strict";
    var a = n(29),
        r = n(134),
        o = n(90),
        i = n(91),
        c = n(141),
        s = n(142);

    function l(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
        return l(e), e.baseURL && !c(e.url) && (e.url = s(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
            delete e.headers[t]
        })), (e.adapter || i.adapter)(e).then((function(t) {
            return l(e), t.data = r(t.data, t.headers, e.transformResponse), t
        }), (function(t) {
            return o(t) || (l(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var a = n(29);
    e.exports = function(e, t, n) {
        return a.forEach(n, (function(n) {
            e = n(e, t)
        })), e
    }
}, function(e, t, n) {
    "use strict";
    var a = n(29);
    e.exports = function(e, t) {
        a.forEach(e, (function(n, a) {
            a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[a])
        }))
    }
}, function(e, t, n) {
    "use strict";
    var a = n(93);
    e.exports = function(e, t, n) {
        var r = n.config.validateStatus;
        !r || r(n.status) ? e(n) : t(a("Request failed with status code " + n.status, n.config, null, n.request, n))
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, a, r) {
        return e.config = t, n && (e.code = n), e.request = a, e.response = r, e.isAxiosError = !0, e.toJSON = function() {
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
}, function(e, t, n) {
    "use strict";
    var a = n(29),
        r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, o, i = {};
        return e ? (a.forEach(e.split("\n"), (function(e) {
            if (o = e.indexOf(":"), t = a.trim(e.substr(0, o)).toLowerCase(), n = a.trim(e.substr(o + 1)), t) {
                if (i[t] && r.indexOf(t) >= 0) return;
                i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
            }
        })), i) : i
    }
}, function(e, t, n) {
    "use strict";
    var a = n(29);
    e.exports = a.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");

        function r(e) {
            var a = e;
            return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = r(window.location.href),
            function(t) {
                var n = a.isString(t) ? r(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
    }() : function() {
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var a = n(29);
    e.exports = a.isStandardBrowserEnv() ? {
        write: function(e, t, n, r, o, i) {
            var c = [];
            c.push(e + "=" + encodeURIComponent(t)), a.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()), a.isString(r) && c.push("path=" + r), a.isString(o) && c.push("domain=" + o), !0 === i && c.push("secure"), document.cookie = c.join("; ")
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
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, n) {
    "use strict";
    var a = n(95);

    function r(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function(e) {
            t = e
        }));
        var n = this;
        e((function(e) {
            n.reason || (n.reason = new a(e), t(n.reason))
        }))
    }
    r.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, r.source = function() {
        var e;
        return {
            token: new r((function(t) {
                e = t
            })),
            cancel: e
        }
    }, e.exports = r
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
        var a = new Uint8Array(16);
        e.exports = function() {
            return n(a), a
        }
    } else {
        var r = new Array(16);
        e.exports = function() {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
            return r
        }
    }
}, function(e, t) {
    for (var n = [], a = 0; a < 256; ++a) n[a] = (a + 256).toString(16).substr(1);
    e.exports = function(e, t) {
        var a = t || 0,
            r = n;
        return [r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]]].join("")
    }
}, function(e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var a = Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;

    function i(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                    return t[e]
                })).join("")) return !1;
            var a = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                a[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, a)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, c, s = i(e), l = 1; l < arguments.length; l++) {
            for (var u in n = Object(arguments[l])) r.call(n, u) && (s[u] = n[u]);
            if (a) {
                c = a(n);
                for (var d = 0; d < c.length; d++) o.call(n, c[d]) && (s[c[d]] = n[c[d]])
            }
        }
        return s
    }
}, function(e, t) {
    function n(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
            return typeof e
        } : e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(t)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(9),
        c = n.n(i),
        s = n(150),
        l = n.n(s);
    t.a = Object(o.a)((function({
        className: e,
        children: t
    }) {
        const n = c()(l.a.main, e);
        return r.a.createElement("div", {
            className: n
        }, t)
    }))
}, function(e, t, n) {
    e.exports = {
        main: "_31If06yejS-2aKXXrvyFTg"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3xQ0VDFCDekAjUgRY04aYa"
    }
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n(2),
        o = n(36);
    t.a = Object(r.a)((function({
        onChange: e
    }) {
        return Object(a.useEffect)(() => {
            const t = window.matchMedia("(prefers-color-scheme: dark)"),
                n = () => {
                    e(Object(o.c)())
                };
            return t.addListener(n), () => {
                t.removeListener(n)
            }
        }, [e]), null
    }))
}, function(e, t, n) {
    e.exports = {
        main: "_1m_1Ndh-76GYq6ueql8Mww"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/uiIconFormPreviewerMkIcon.f5da1b96.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/uiIconFormPreviewerPlusIcon.0627fd9d.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_1GOWq_095gIi8ZC4XybskC"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/caretUpDownIcon.c8fa2cf2.svg"
}, function(e, t, n) {
    "use strict";
    var a = n(278);
    t.__esModule = !0, t.default = function(e, t) {
        e.classList ? e.classList.add(t) : (0, r.default)(e, t) || ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
    };
    var r = a(n(279));
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
    }
    e.exports = function(e, t) {
        e.classList ? e.classList.remove(t) : "string" == typeof e.className ? e.className = a(e.className, t) : e.setAttribute("class", a(e.className && e.className.baseVal || "", t))
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/uiBarlessScrollerDoubleUpIcon.8466d69c.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/uiBarlessScrollerDoubleDownIcon.64375286.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_1o2yYhU6Q8nz6p-x_gvIJB"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/mosaicImage.1daad151.svg"
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(82),
        c = n.n(i);
    t.a = Object(o.a)((function({
        title: e,
        children: t
    }) {
        return r.a.createElement("div", {
            className: c.a.main
        }, r.a.createElement("div", {
            className: c.a.title
        }, e), t && r.a.createElement("div", {
            className: c.a.btns
        }, t))
    }))
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon0.d37f3f7b.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon1.2a38e0f2.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon2.8e413838.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon3.4033b3ed.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon4.54de64c1.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon5.5da6bac2.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon6.cdab6fd9.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon7.8033e597.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon8.22f5cbee.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon9.94d3c631.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon10.cd9f873d.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon11.a7463b6a.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon12.6ed49d8f.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon13.aed8b276.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon14.a285cb1b.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon15.ca9114da.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon16.74c9a1d0.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon17.e0f2c496.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon18.fa4db942.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon19.b8c647bf.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon20.6b687102.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon21.23e01200.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon22.23668ce8.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon23.914da766.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon24.940b7b0d.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon25.a0eb642c.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon26.a7fea625.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon27.c727508c.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon28.0c45601c.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon29.f860988c.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon30.d9cec3b0.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon31.0056fd9b.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon32.3f456abf.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon33.f0253edd.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon34.9d0b3025.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon35.5a7f64db.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon36.d2f5c069.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon37.9b13220a.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon38.4ca39f43.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon39.4b0beb2d.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon40.9c1ef78d.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon41.a37c874d.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon42.21f17a24.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon43.ee52cd24.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon45.2058ea72.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon46.7c1c9a0c.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/yahooConditionCodeIcon47.9d1f82f7.svg"
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n(25),
        c = n.n(i),
        s = n(3),
        l = n(15),
        u = n(9),
        d = n.n(u),
        p = n(154),
        f = n.n(p),
        m = n(11),
        h = n(14),
        b = n(13),
        g = n(6);
    var v = Object(o.a)((function({
        form: e
    }) {
        const {
            model: t,
            officialImageIconSearchStatus: n,
            officialImageIcon: a
        } = e;
        let o, i = null;
        const u = {};
        switch (n) {
            case b.a.Submitting:
                o = Object(s.a)("searching");
                break;
            case b.a.Successed:
                o = Object(s.a)("official");
                break;
            case b.a.Failed:
                o = Object(s.a)("not_found");
                break;
            case b.a.Inputting:
                o = Object(s.a)("official")
        }
        null === a ? i = r.a.createElement(l.a, {
            className: c.a.itemBtnIcon,
            src: f.a
        }) : (u.backgroundImage = `url(${Object(h.d)(a.icoSrc)})`, u.backgroundSize = a.icoScalePercentage + "% auto", Object.assign(u, Object(m.c)(t.backgroundColor.value)));
        const p = n !== b.a.Successed,
            v = d()(c.a.item, {
                [c.a.loadingItem]: n === b.a.Submitting,
                [c.a.selectedItem]: t.type.value === g.a.Image && !t.type.touched && null !== t.icoSrc.value,
                [c.a.disabledItem]: p
            });
        return r.a.createElement("div", {
            className: v,
            onClick: p ? void 0 : e.pickOfficialImage
        }, r.a.createElement("div", {
            className: c.a.itemBtn,
            style: u
        }, i), r.a.createElement("div", {
            className: c.a.itemLabel
        }, o))
    }));
    var y = Object(o.a)((function({
            form: e
        }) {
            const t = e.model.type.value === g.a.Text,
                n = {};
            t && Object.assign(n, Object(m.c)(e.model.backgroundColor.value));
            const a = d()(c.a.item, {
                [c.a.selectedItem]: t
            });
            return r.a.createElement("div", {
                className: a,
                onClick: e.setTypeAsTextIcon
            }, r.a.createElement("div", {
                className: c.a.itemBtn,
                style: n
            }, r.a.createElement("div", {
                className: c.a.itemBtnText
            }, r.a.createElement("span", null, t ? e.model.icoText.value : "A"))), r.a.createElement("div", {
                className: c.a.itemLabel
            }, Object(s.a)("text")))
        })),
        S = n(155),
        w = n.n(S),
        k = n(74),
        E = n(7);
    var O = Object(o.a)((function({
        form: e
    }) {
        const {
            type: t
        } = e.model;
        let n = null,
            a = !1;
        const o = {};
        t.value === g.a.Image && t.touched && null !== e.model.icoSrc.value ? (a = !0, o.backgroundImage = `url(${Object(h.d)(e.model.icoSrc.value)})`, o.backgroundSize = e.model.icoScalePercentage + "% auto", Object.assign(o, Object(m.c)(e.model.backgroundColor.value))) : n = r.a.createElement(l.a, {
            className: c.a.itemBtnIcon,
            src: w.a
        });
        const i = d()(c.a.item, {
            [c.a.selectedItem]: a
        });
        return r.a.createElement("div", {
            className: i,
            onClick: () => {
                Object(k.a)({
                    accpets: [E.a.Png, E.a.Jpeg, E.a.Svg, E.a.Gif],
                    sizeLimitByte: 460800,
                    callback(t, n) {
                        t || null === n ? e.onError(Object(s.a)("image_size_can_not_exceed", ["450kb"])) : e.startCustomizeImage(n)
                    }
                })
            }
        }, r.a.createElement("div", {
            className: c.a.itemBtn,
            style: o
        }, n), r.a.createElement("div", {
            className: c.a.itemLabel
        }, Object(s.a)("upload")))
    }));
    t.a = Object(o.a)((function({
        form: e,
        customizeImageDisabled: t = !1
    }) {
        const n = d()(c.a.main, {
            [c.a.customizeImageDisabledMain]: t
        });
        return r.a.createElement("div", {
            className: n
        }, r.a.createElement(v, {
            form: e
        }), r.a.createElement(y, {
            form: e
        }), !t && r.a.createElement(O, {
            form: e
        }))
    }))
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return new Promise(t => {
            setTimeout(t, e)
        })
    }
    var r = n(12),
        o = n(10);
    async function i() {
        let e = null;
        for (; e = await new Promise(e => {
                chrome.runtime.getBackgroundPage(e)
            }), null == e;) await a(300);
        await e.ready;
        let t = null;
        for (; t = await Object(r.a)({
                command: o.l,
                hasResponse: !0
            }), null == t;) await a(300);
        return t
    }
    n.d(t, "a", (function() {
        return i
    }))
}, function(e, t, n) {
    e.exports = {
        main: "_1DLXu9US2nBV_veLgb3-E5",
        icon: "_2R8sNmuVa3aT50lAIWbWeh",
        dropDownIcon: "_1RXl0U6xLhw5v81tr7IhZl",
        hoveringMain: "pl2j4JJWseDI4WmrgzHQ2"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1Wv5fVAxB3G69vIl8kYoYh",
        title: "w9aG5RVc807N1f-QeJth2",
        viewport: "_3b-br_eGHJ3T_G93K6Yqwg",
        scroller: "oXmxxyLmOZqT-OgayXSyk"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1vxa_eOkF6nQLp03OWathH",
        content: "_1QfR1aKuwUj934vAMNMg8L",
        suffixContent: "gHZbr3X75P1HvNslfZcvr",
        selectedMain: "_39OyxGjyySRgH0h5S1XIXg"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3PBYmmuv_PLMoS19Vb5m8S",
        btn: "AYOugO8tLHM206sQJFvPn",
        btnIcon: "X_C1PRuzOpHDMgPRJwcVz",
        text: "_2ysm6AociXO6TiNqdUf29y"
    }
}, function(e, t, n) {
    e.exports = {
        banner: "_1UAQzf5j6QDw2OV6M2UnPh",
        content: "_2G90AA7Fw-k4e45khPRtPK",
        btn: "sFMiPWqiFKJnoomDsf-B2",
        slogan: "SpJc70x_AqVPIk-sBJwpT"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2Fapoo1yZNTdE6xUarM4OO",
        btn: "_2neyMITHpJ2xKx2kZ3ifHN"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_9zp1wDVlcpkAfVHGQ2rWE",
        backgroundedIcon: "_2OhwUopylY7a5808SNvH_k",
        label: "_3q8ya2SSYtLuo6EpFZUO7I",
        icon: "fLyQJ6ZbzeounK7Lp_3Xl"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_26KXSDUqkFsJJRgaZqlpmS",
        iconWrapper: "_3OeiH8nwsUXGcBFt3isxRx",
        icon: "rZBae3s84ZmUVCRj2Cjor",
        text: "_3vHc3zzxRl-HiyChZsxCIO"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_38RnPRWXw1ZcN4PAVMH0v0",
        title: "_3b6zefLFY_PEkilgQvPzC_",
        content: "_1zaPHpmCdkDIxm8F4nbAyp",
        hasTitleContent: "_3rJcsdCGCjEc6mVC33r0Zt"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3SwS4RAOLeVnx9a5-5l13Q",
        failedMain: "_1uY7Tc89BMQkyanJiEigHf",
        successedMain: "LCU7uc7IeyISQYa1mlL-d",
        normalMain: "_1WekZj68jxgyoGY-3kaCK0"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2DNqOuoAJGrpneQ3rRrQCs",
        icon: "_1rIJdMOMSfkUnHox_qQLld",
        checkedMain: "_3ES9pVriRdCvao4NhyUU8P",
        checkedIcon: "_1Z4-oVCuBmL3aPpaj-K26I"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2RxKMr2KvSuEAZMHIywrdN",
        content: "_2CQOtHYTSF86d_aWT-Vhzt",
        prefixContent: "_2WPR-Afi3aPMBlujbUU1G5",
        suffixContent: "_2N9mBK5aYzdMLR-cBxmG10"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3fmoXysp9hjXolxvjYJJau",
        primaryTypeMain: "_3QlMJW3Zyo8I3YaeLgp9WB",
        normalTypeMain: "_1Okir9_C-koHuUbSlBSMtJ",
        secondaryTypeMain: "_2nIdYLQobL0S-zNRvCupE"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2ajzH0qlWl8iIHIV2SZR71",
        checkedMain: "_2698OP3M6ixp4vpPzF3NOm",
        icon: "_3hll8Dk8w8k_CL6qhM8mII",
        checkedIcon: "_1S_1ZNihK1ME05cZ-9aU6H"
    }
}, function(e, t, n) {
    e.exports = {
        main: "yLBBaQf3HZCrgELoOdCds",
        icon: "mj1rUqlu1H0-sLBNOrHTV",
        content: "_3N9bZqhlwMsg2nj9b2Egaa",
        btns: "J7IGYOuJ_kiik4i2iudCq"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/monknowImage.17c2dcaa.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/magnifierIcon.9d616890.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/closeIcon.48863cbd.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/caretRightIcon.c790b619.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppSettingModalGeneralPanelVisitorUserCardBannerImage.f8f4a5a7.png"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/eyeIcon.e10e4d07.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/invisibleEyeIcon.9119cab2.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/checkIcon.e31778bd.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/minusIcon.bf0a72d0.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/lockIcon.c0df1af5.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_1Po8KrhFCdbBxEnn6RDZwu",
        icon: "_2m-d5yYtMm-wff-wITlERY",
        btns: "cXuXclpsMrEujbAnSW8jx"
    }
}, function(e, t, n) {
    e.exports = {
        scroller: "v6PVsVd-8WxbqPBggjCGd",
        verticalScrollbarAtLeftSideScroller: "_1gtuxJy-Yuja0fZySbgS18",
        content: "_1FEVrqHtvaA2UMAaTzQ8Er"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1ffzd5cK5Z09KRzVn9LAup",
        collapsedMain: "_1v7eIEoph3LEr6a1e3foXj",
        expandedMain: "_1ay0dDidCCfrW-R9QiTIoW"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3kJa9dJToKgfwtohAv5gUe",
        draggingMain: "_1pndA5iP4CzmAH7m3PQh1-",
        isDragTargetMain: "_2ay15uZ-sPY6Ctj-ertzJ4"
    }
}, function(e, t, n) {
    e.exports = {
        viewport: "_3RPT29ccloFVX7YMJbK-Is",
        scroller: "_28K4p-o8SuMU0SZNQBC8Ez",
        main: "_153cLzwkQ30t4mleHAcx8C"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_35ZSPmXcg1eRnxpuTFjWTQ",
        simpleIconLayout: "_1j5tURJrt8ALRZiRDdO8ui",
        particularIconLayout: "_2gCY52JjoWmYpewpJrbT0B"
    }
}, function(e, t, n) {
    e.exports = {
        main: "DJ6ogbk0cPgq2lsv3r392",
        boxShadowedMain: "d0bLDL_hFWB9xzTTmY_sn",
        focusedMain: "_1btuhw7q8l5iQNZNPORgst"
    }
}, function(e, t, n) {
    e.exports = {
        main: "Rvw67uGLeC562qdn6_K8V",
        iconDraggingMain: "_2t_Bf-mwjr54oPgzLO1iPc",
        content: "_1Y-JXImSCICU2ltbFZI2GI"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3xSStsfQrVmFeitz319qsD",
        content: "xPo1JE_E26Ty85F2t4gnE",
        modal: "_8tQeAPfcyTpd85RDZI0FA"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1VJlXiH9mkTcFn0bf1p_IJ",
        btns: "_3TSEUGPwF92CbF6w16XB87"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_23RfOprsViHZVc49WhTA3r",
        content: "_1yFgVrcsUTqrvhvoxFIRC-",
        column: "_2hnD737D6s2A0MSSjKOvJA"
    }
}, function(e, t, n) {
    e.exports = {
        main: "oF8AgPhkd9eEg_ykKfMcX",
        text: "P99wHE5H5s7Kttr2M99lD",
        icon: "_38RvL3CASAJQlOAxytQZMf"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2UM8xGohvA2626IBYsMdI0",
        overlay: "_2Y8PVtCDMIG7WPvUA7YQDy",
        content: "YirP69x5EEEnnQvAEYS6W"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3GNSfrC9VCP_RcAYK4o4Qu",
        icon: "_3ekiYwTZLzgzHLzwGuTKu2",
        selectedMain: "_1hfkgm6BOMZj2ufMrtvHGP"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2SsCopb8iq-NifX9hIAs_d",
        content: "_3DknZK_wFcba4n3V1SltOx",
        aside: "_2SOHgAuK7OJockWuKw-eSZ"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_20Jr6zTzsbk8foh5q7iWr5",
        prefixContent: "_2XA2gnH_-mfh6miGTzASwA",
        content: "_327NVunY6GXEPWV8K8-DGf"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3TJ1yNSY2HX_-COXx3FBst",
        completedMain: "QwFeWHMLVg-OI-oRyyawK",
        importantMain: "_2Ti8-FVpiZRrckvChsKHDB"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3phMr8PCFzqaHFPw5TdgWB",
        input: "s22ynsyKlMa96nDWd7C4O",
        captcha: "_2M9a_Aq1UT8NXgjnLuiDcl"
    }
}, function(e, t, n) {
    e.exports = {
        main: "yZJ5wnUw6UkVdmXlzKmhg",
        viewport: "_1vUSLSVHq3770kBZ9Upiph",
        aside: "_15HTAHMIkRjyiaB1GtGmiF"
    }
}, function(e, t, n) {
    "use strict";
    /** @license React v16.9.0
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var a = n(0),
        r = n(147),
        o = n(260);

    function i(e) {
        for (var t = e.message, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, a = 1; a < arguments.length; a++) n += "&args[]=" + encodeURIComponent(arguments[a]);
        return e.message = "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e
    }
    if (!a) throw i(Error(227));
    var c = null,
        s = {};

    function l() {
        if (c)
            for (var e in s) {
                var t = s[e],
                    n = c.indexOf(e);
                if (!(-1 < n)) throw i(Error(96), e);
                if (!d[n]) {
                    if (!t.extractEvents) throw i(Error(97), e);
                    for (var a in d[n] = t, n = t.eventTypes) {
                        var r = void 0,
                            o = n[a],
                            l = t,
                            f = a;
                        if (p.hasOwnProperty(f)) throw i(Error(99), f);
                        p[f] = o;
                        var m = o.phasedRegistrationNames;
                        if (m) {
                            for (r in m) m.hasOwnProperty(r) && u(m[r], l, f);
                            r = !0
                        } else o.registrationName ? (u(o.registrationName, l, f), r = !0) : r = !1;
                        if (!r) throw i(Error(98), a, e)
                    }
                }
            }
    }

    function u(e, t, n) {
        if (f[e]) throw i(Error(100), e);
        f[e] = t, m[e] = t.eventTypes[n].dependencies
    }
    var d = [],
        p = {},
        f = {},
        m = {};

    function h(e, t, n, a, r, o, i, c, s) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, l)
        } catch (e) {
            this.onError(e)
        }
    }
    var b = !1,
        g = null,
        v = !1,
        y = null,
        S = {
            onError: function(e) {
                b = !0, g = e
            }
        };

    function w(e, t, n, a, r, o, i, c, s) {
        b = !1, g = null, h.apply(S, arguments)
    }
    var k = null,
        E = null,
        O = null;

    function C(e, t, n) {
        var a = e.type || "unknown-event";
        e.currentTarget = O(n),
            function(e, t, n, a, r, o, c, s, l) {
                if (w.apply(this, arguments), b) {
                    if (!b) throw i(Error(198));
                    var u = g;
                    b = !1, g = null, v || (v = !0, y = u)
                }
            }(a, t, void 0, e), e.currentTarget = null
    }

    function x(e, t) {
        if (null == t) throw i(Error(30));
        return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function j(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }
    var _ = null;

    function I(e) {
        if (e) {
            var t = e._dispatchListeners,
                n = e._dispatchInstances;
            if (Array.isArray(t))
                for (var a = 0; a < t.length && !e.isPropagationStopped(); a++) C(e, t[a], n[a]);
            else t && C(e, t, n);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }

    function T(e) {
        if (null !== e && (_ = x(_, e)), e = _, _ = null, e) {
            if (j(e, I), _) throw i(Error(95));
            if (v) throw e = y, v = !1, y = null, e
        }
    }
    var P = {
        injectEventPluginOrder: function(e) {
            if (c) throw i(Error(101));
            c = Array.prototype.slice.call(e), l()
        },
        injectEventPluginsByName: function(e) {
            var t, n = !1;
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    var a = e[t];
                    if (!s.hasOwnProperty(t) || s[t] !== a) {
                        if (s[t]) throw i(Error(102), t);
                        s[t] = a, n = !0
                    }
                } n && l()
        }
    };

    function M(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var a = k(n);
        if (!a) return null;
        n = a[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                (a = !a.disabled) || (a = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !a;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw i(Error(231), t, typeof n);
        return n
    }
    var N = Math.random().toString(36).slice(2),
        L = "__reactInternalInstance$" + N,
        R = "__reactEventHandlers$" + N;

    function D(e) {
        if (e[L]) return e[L];
        for (; !e[L];) {
            if (!e.parentNode) return null;
            e = e.parentNode
        }
        return 5 === (e = e[L]).tag || 6 === e.tag ? e : null
    }

    function A(e) {
        return !(e = e[L]) || 5 !== e.tag && 6 !== e.tag ? null : e
    }

    function B(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw i(Error(33))
    }

    function G(e) {
        return e[R] || null
    }

    function U(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function V(e, t, n) {
        (t = M(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = x(n._dispatchListeners, t), n._dispatchInstances = x(n._dispatchInstances, e))
    }

    function F(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t;) n.push(t), t = U(t);
            for (t = n.length; 0 < t--;) V(n[t], "captured", e);
            for (t = 0; t < n.length; t++) V(n[t], "bubbled", e)
        }
    }

    function z(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = M(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = x(n._dispatchListeners, t), n._dispatchInstances = x(n._dispatchInstances, e))
    }

    function W(e) {
        e && e.dispatchConfig.registrationName && z(e._targetInst, null, e)
    }

    function H(e) {
        j(e, F)
    }
    var q = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement);

    function K(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var Q = {
            animationend: K("Animation", "AnimationEnd"),
            animationiteration: K("Animation", "AnimationIteration"),
            animationstart: K("Animation", "AnimationStart"),
            transitionend: K("Transition", "TransitionEnd")
        },
        Y = {},
        J = {};

    function X(e) {
        if (Y[e]) return Y[e];
        if (!Q[e]) return e;
        var t, n = Q[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in J) return Y[e] = n[t];
        return e
    }
    q && (J = document.createElement("div").style, "AnimationEvent" in window || (delete Q.animationend.animation, delete Q.animationiteration.animation, delete Q.animationstart.animation), "TransitionEvent" in window || delete Q.transitionend.transition);
    var Z = X("animationend"),
        $ = X("animationiteration"),
        ee = X("animationstart"),
        te = X("transitionend"),
        ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        ae = null,
        re = null,
        oe = null;

    function ie() {
        if (oe) return oe;
        var e, t, n = re,
            a = n.length,
            r = "value" in ae ? ae.value : ae.textContent,
            o = r.length;
        for (e = 0; e < a && n[e] === r[e]; e++);
        var i = a - e;
        for (t = 1; t <= i && n[a - t] === r[o - t]; t++);
        return oe = r.slice(e, 1 < t ? 1 - t : void 0)
    }

    function ce() {
        return !0
    }

    function se() {
        return !1
    }

    function le(e, t, n, a) {
        for (var r in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(r) && ((t = e[r]) ? this[r] = t(n) : "target" === r ? this.target = a : this[r] = n[r]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? ce : se, this.isPropagationStopped = se, this
    }

    function ue(e, t, n, a) {
        if (this.eventPool.length) {
            var r = this.eventPool.pop();
            return this.call(r, e, t, n, a), r
        }
        return new this(e, t, n, a)
    }

    function de(e) {
        if (!(e instanceof this)) throw i(Error(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function pe(e) {
        e.eventPool = [], e.getPooled = ue, e.release = de
    }
    r(le.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = ce)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = ce)
        },
        persist: function() {
            this.isPersistent = ce
        },
        isPersistent: se,
        destructor: function() {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = se, this._dispatchInstances = this._dispatchListeners = null
        }
    }), le.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    }, le.extend = function(e) {
        function t() {}

        function n() {
            return a.apply(this, arguments)
        }
        var a = this;
        t.prototype = a.prototype;
        var o = new t;
        return r(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = r({}, a.Interface, e), n.extend = a.extend, pe(n), n
    }, pe(le);
    var fe = le.extend({
            data: null
        }),
        me = le.extend({
            data: null
        }),
        he = [9, 13, 27, 32],
        be = q && "CompositionEvent" in window,
        ge = null;
    q && "documentMode" in document && (ge = document.documentMode);
    var ve = q && "TextEvent" in window && !ge,
        ye = q && (!be || ge && 8 < ge && 11 >= ge),
        Se = String.fromCharCode(32),
        we = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        ke = !1;

    function Ee(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== he.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function Oe(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
    }
    var Ce = !1;
    var xe = {
            eventTypes: we,
            extractEvents: function(e, t, n, a) {
                var r = void 0,
                    o = void 0;
                if (be) e: {
                    switch (e) {
                        case "compositionstart":
                            r = we.compositionStart;
                            break e;
                        case "compositionend":
                            r = we.compositionEnd;
                            break e;
                        case "compositionupdate":
                            r = we.compositionUpdate;
                            break e
                    }
                    r = void 0
                }
                else Ce ? Ee(e, n) && (r = we.compositionEnd) : "keydown" === e && 229 === n.keyCode && (r = we.compositionStart);
                return r ? (ye && "ko" !== n.locale && (Ce || r !== we.compositionStart ? r === we.compositionEnd && Ce && (o = ie()) : (re = "value" in (ae = a) ? ae.value : ae.textContent, Ce = !0)), r = fe.getPooled(r, t, n, a), o ? r.data = o : null !== (o = Oe(n)) && (r.data = o), H(r), o = r) : o = null, (e = ve ? function(e, t) {
                    switch (e) {
                        case "compositionend":
                            return Oe(t);
                        case "keypress":
                            return 32 !== t.which ? null : (ke = !0, Se);
                        case "textInput":
                            return (e = t.data) === Se && ke ? null : e;
                        default:
                            return null
                    }
                }(e, n) : function(e, t) {
                    if (Ce) return "compositionend" === e || !be && Ee(e, t) ? (e = ie(), oe = re = ae = null, Ce = !1, e) : null;
                    switch (e) {
                        case "paste":
                            return null;
                        case "keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length) return t.char;
                                if (t.which) return String.fromCharCode(t.which)
                            }
                            return null;
                        case "compositionend":
                            return ye && "ko" !== t.locale ? null : t.data;
                        default:
                            return null
                    }
                }(e, n)) ? ((t = me.getPooled(we.beforeInput, t, n, a)).data = e, H(t)) : t = null, null === o ? t : null === t ? o : [o, t]
            }
        },
        je = null,
        _e = null,
        Ie = null;

    function Te(e) {
        if (e = E(e)) {
            if ("function" != typeof je) throw i(Error(280));
            var t = k(e.stateNode);
            je(e.stateNode, e.type, t)
        }
    }

    function Pe(e) {
        _e ? Ie ? Ie.push(e) : Ie = [e] : _e = e
    }

    function Me() {
        if (_e) {
            var e = _e,
                t = Ie;
            if (Ie = _e = null, Te(e), t)
                for (e = 0; e < t.length; e++) Te(t[e])
        }
    }

    function Ne(e, t) {
        return e(t)
    }

    function Le(e, t, n, a) {
        return e(t, n, a)
    }

    function Re() {}
    var De = Ne,
        Ae = !1;

    function Be() {
        null === _e && null === Ie || (Re(), Me())
    }
    var Ge = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Ue(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Ge[e.type] : "textarea" === t
    }

    function Ve(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function Fe(e) {
        if (!q) return !1;
        var t = (e = "on" + e) in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
    }

    function ze(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function We(e) {
        e._valueTracker || (e._valueTracker = function(e) {
            var t = ze(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                a = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var r = n.get,
                    o = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return r.call(this)
                    },
                    set: function(e) {
                        a = "" + e, o.call(this, e)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return a
                    },
                    setValue: function(e) {
                        a = "" + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }(e))
    }

    function He(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            a = "";
        return e && (a = ze(e) ? e.checked ? "true" : "false" : e.value), (e = a) !== n && (t.setValue(e), !0)
    }
    var qe = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    qe.hasOwnProperty("ReactCurrentDispatcher") || (qe.ReactCurrentDispatcher = {
        current: null
    }), qe.hasOwnProperty("ReactCurrentBatchConfig") || (qe.ReactCurrentBatchConfig = {
        suspense: null
    });
    var Ke = /^(.*)[\\\/]/,
        Qe = "function" == typeof Symbol && Symbol.for,
        Ye = Qe ? Symbol.for("react.element") : 60103,
        Je = Qe ? Symbol.for("react.portal") : 60106,
        Xe = Qe ? Symbol.for("react.fragment") : 60107,
        Ze = Qe ? Symbol.for("react.strict_mode") : 60108,
        $e = Qe ? Symbol.for("react.profiler") : 60114,
        et = Qe ? Symbol.for("react.provider") : 60109,
        tt = Qe ? Symbol.for("react.context") : 60110,
        nt = Qe ? Symbol.for("react.concurrent_mode") : 60111,
        at = Qe ? Symbol.for("react.forward_ref") : 60112,
        rt = Qe ? Symbol.for("react.suspense") : 60113,
        ot = Qe ? Symbol.for("react.suspense_list") : 60120,
        it = Qe ? Symbol.for("react.memo") : 60115,
        ct = Qe ? Symbol.for("react.lazy") : 60116;
    Qe && Symbol.for("react.fundamental"), Qe && Symbol.for("react.responder");
    var st = "function" == typeof Symbol && Symbol.iterator;

    function lt(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = st && e[st] || e["@@iterator"]) ? e : null
    }

    function ut(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case Xe:
                return "Fragment";
            case Je:
                return "Portal";
            case $e:
                return "Profiler";
            case Ze:
                return "StrictMode";
            case rt:
                return "Suspense";
            case ot:
                return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case tt:
                return "Context.Consumer";
            case et:
                return "Context.Provider";
            case at:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case it:
                return ut(e.type);
            case ct:
                if (e = 1 === e._status ? e._result : null) return ut(e)
        }
        return null
    }

    function dt(e) {
        var t = "";
        do {
            e: switch (e.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var n = "";
                    break e;
                default:
                    var a = e._debugOwner,
                        r = e._debugSource,
                        o = ut(e.type);
                    n = null, a && (n = ut(a.type)), a = o, o = "", r ? o = " (at " + r.fileName.replace(Ke, "") + ":" + r.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (a || "Unknown") + o
            }
            t += n,
            e = e.return
        } while (e);
        return t
    }
    var pt = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        ft = Object.prototype.hasOwnProperty,
        mt = {},
        ht = {};

    function bt(e, t, n, a, r, o) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = a, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o
    }
    var gt = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
        gt[e] = new bt(e, 0, !1, e, null, !1)
    })), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach((function(e) {
        var t = e[0];
        gt[t] = new bt(t, 1, !1, e[1], null, !1)
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
        gt[e] = new bt(e, 2, !1, e.toLowerCase(), null, !1)
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
        gt[e] = new bt(e, 2, !1, e, null, !1)
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
        gt[e] = new bt(e, 3, !1, e.toLowerCase(), null, !1)
    })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
        gt[e] = new bt(e, 3, !0, e, null, !1)
    })), ["capture", "download"].forEach((function(e) {
        gt[e] = new bt(e, 4, !1, e, null, !1)
    })), ["cols", "rows", "size", "span"].forEach((function(e) {
        gt[e] = new bt(e, 6, !1, e, null, !1)
    })), ["rowSpan", "start"].forEach((function(e) {
        gt[e] = new bt(e, 5, !1, e.toLowerCase(), null, !1)
    }));
    var vt = /[\-:]([a-z])/g;

    function yt(e) {
        return e[1].toUpperCase()
    }

    function St(e, t, n, a) {
        var r = gt.hasOwnProperty(t) ? gt[t] : null;
        (null !== r ? 0 === r.type : !a && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, a) {
            if (null == t || function(e, t, n, a) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !a && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                    }
                }(e, t, n, a)) return !0;
            if (a) return !1;
            if (null !== n) switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }(t, n, r, a) && (n = null), a || null === r ? function(e) {
            return !!ft.call(ht, e) || !ft.call(mt, e) && (pt.test(e) ? ht[e] = !0 : (mt[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = null === n ? 3 !== r.type && "" : n : (t = r.attributeName, a = r.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (r = r.type) || 4 === r && !0 === n ? "" : "" + n, a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))))
    }

    function wt(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return ""
        }
    }

    function kt(e, t) {
        var n = t.checked;
        return r({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }

    function Et(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
            a = null != t.checked ? t.checked : t.defaultChecked;
        n = wt(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: a,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function Ot(e, t) {
        null != (t = t.checked) && St(e, "checked", t, !1)
    }

    function Ct(e, t) {
        Ot(e, t);
        var n = wt(t.value),
            a = t.type;
        if (null != n) "number" === a ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === a || "reset" === a) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? jt(e, t.type, n) : t.hasOwnProperty("defaultValue") && jt(e, t.type, wt(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function xt(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var a = t.type;
            if (!("submit" !== a && "reset" !== a || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
    }

    function jt(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
        var t = e.replace(vt, yt);
        gt[t] = new bt(t, 1, !1, e, null, !1)
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
        var t = e.replace(vt, yt);
        gt[t] = new bt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
        var t = e.replace(vt, yt);
        gt[t] = new bt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
    })), ["tabIndex", "crossOrigin"].forEach((function(e) {
        gt[e] = new bt(e, 1, !1, e.toLowerCase(), null, !1)
    })), gt.xlinkHref = new bt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
        gt[e] = new bt(e, 1, !1, e.toLowerCase(), null, !0)
    }));
    var _t = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function It(e, t, n) {
        return (e = le.getPooled(_t.change, e, t, n)).type = "change", Pe(n), H(e), e
    }
    var Tt = null,
        Pt = null;

    function Mt(e) {
        T(e)
    }

    function Nt(e) {
        if (He(B(e))) return e
    }

    function Lt(e, t) {
        if ("change" === e) return t
    }
    var Rt = !1;

    function Dt() {
        Tt && (Tt.detachEvent("onpropertychange", At), Pt = Tt = null)
    }

    function At(e) {
        if ("value" === e.propertyName && Nt(Pt))
            if (e = It(Pt, e, Ve(e)), Ae) T(e);
            else {
                Ae = !0;
                try {
                    Ne(Mt, e)
                } finally {
                    Ae = !1, Be()
                }
            }
    }

    function Bt(e, t, n) {
        "focus" === e ? (Dt(), Pt = n, (Tt = t).attachEvent("onpropertychange", At)) : "blur" === e && Dt()
    }

    function Gt(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Nt(Pt)
    }

    function Ut(e, t) {
        if ("click" === e) return Nt(t)
    }

    function Vt(e, t) {
        if ("input" === e || "change" === e) return Nt(t)
    }
    q && (Rt = Fe("input") && (!document.documentMode || 9 < document.documentMode));
    var Ft = {
            eventTypes: _t,
            _isInputEventSupported: Rt,
            extractEvents: function(e, t, n, a) {
                var r = t ? B(t) : window,
                    o = void 0,
                    i = void 0,
                    c = r.nodeName && r.nodeName.toLowerCase();
                if ("select" === c || "input" === c && "file" === r.type ? o = Lt : Ue(r) ? Rt ? o = Vt : (o = Gt, i = Bt) : (c = r.nodeName) && "input" === c.toLowerCase() && ("checkbox" === r.type || "radio" === r.type) && (o = Ut), o && (o = o(e, t))) return It(o, n, a);
                i && i(e, r, t), "blur" === e && (e = r._wrapperState) && e.controlled && "number" === r.type && jt(r, "number", r.value)
            }
        },
        zt = le.extend({
            view: null,
            detail: null
        }),
        Wt = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Ht(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Wt[e]) && !!t[e]
    }

    function qt() {
        return Ht
    }
    var Kt = 0,
        Qt = 0,
        Yt = !1,
        Jt = !1,
        Xt = zt.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: qt,
            button: null,
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            movementX: function(e) {
                if ("movementX" in e) return e.movementX;
                var t = Kt;
                return Kt = e.screenX, Yt ? "mousemove" === e.type ? e.screenX - t : 0 : (Yt = !0, 0)
            },
            movementY: function(e) {
                if ("movementY" in e) return e.movementY;
                var t = Qt;
                return Qt = e.screenY, Jt ? "mousemove" === e.type ? e.screenY - t : 0 : (Jt = !0, 0)
            }
        }),
        Zt = Xt.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }),
        $t = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        },
        en = {
            eventTypes: $t,
            extractEvents: function(e, t, n, a) {
                var r = "mouseover" === e || "pointerover" === e,
                    o = "mouseout" === e || "pointerout" === e;
                if (r && (n.relatedTarget || n.fromElement) || !o && !r) return null;
                if (r = a.window === a ? a : (r = a.ownerDocument) ? r.defaultView || r.parentWindow : window, o ? (o = t, t = (t = n.relatedTarget || n.toElement) ? D(t) : null) : o = null, o === t) return null;
                var i = void 0,
                    c = void 0,
                    s = void 0,
                    l = void 0;
                "mouseout" === e || "mouseover" === e ? (i = Xt, c = $t.mouseLeave, s = $t.mouseEnter, l = "mouse") : "pointerout" !== e && "pointerover" !== e || (i = Zt, c = $t.pointerLeave, s = $t.pointerEnter, l = "pointer");
                var u = null == o ? r : B(o);
                if (r = null == t ? r : B(t), (e = i.getPooled(c, o, n, a)).type = l + "leave", e.target = u, e.relatedTarget = r, (n = i.getPooled(s, t, n, a)).type = l + "enter", n.target = r, n.relatedTarget = u, a = t, o && a) e: {
                    for (r = a, l = 0, i = t = o; i; i = U(i)) l++;
                    for (i = 0, s = r; s; s = U(s)) i++;
                    for (; 0 < l - i;) t = U(t),
                    l--;
                    for (; 0 < i - l;) r = U(r),
                    i--;
                    for (; l--;) {
                        if (t === r || t === r.alternate) break e;
                        t = U(t), r = U(r)
                    }
                    t = null
                }
                else t = null;
                for (r = t, t = []; o && o !== r && (null === (l = o.alternate) || l !== r);) t.push(o), o = U(o);
                for (o = []; a && a !== r && (null === (l = a.alternate) || l !== r);) o.push(a), a = U(a);
                for (a = 0; a < t.length; a++) z(t[a], "bubbled", e);
                for (a = o.length; 0 < a--;) z(o[a], "captured", n);
                return [e, n]
            }
        };

    function tn(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    }
    var nn = Object.prototype.hasOwnProperty;

    function an(e, t) {
        if (tn(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            a = Object.keys(t);
        if (n.length !== a.length) return !1;
        for (a = 0; a < n.length; a++)
            if (!nn.call(t, n[a]) || !tn(e[n[a]], t[n[a]])) return !1;
        return !0
    }

    function rn(e, t) {
        return {
            responder: e,
            props: t
        }
    }

    function on(e) {
        var t = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            if (0 != (2 & t.effectTag)) return 1;
            for (; t.return;)
                if (0 != (2 & (t = t.return).effectTag)) return 1
        }
        return 3 === t.tag ? 2 : 3
    }

    function cn(e) {
        if (2 !== on(e)) throw i(Error(188))
    }

    function sn(e) {
        if (!(e = function(e) {
                var t = e.alternate;
                if (!t) {
                    if (3 === (t = on(e))) throw i(Error(188));
                    return 1 === t ? null : e
                }
                for (var n = e, a = t;;) {
                    var r = n.return;
                    if (null === r) break;
                    var o = r.alternate;
                    if (null === o) {
                        if (null !== (a = r.return)) {
                            n = a;
                            continue
                        }
                        break
                    }
                    if (r.child === o.child) {
                        for (o = r.child; o;) {
                            if (o === n) return cn(r), e;
                            if (o === a) return cn(r), t;
                            o = o.sibling
                        }
                        throw i(Error(188))
                    }
                    if (n.return !== a.return) n = r, a = o;
                    else {
                        for (var c = !1, s = r.child; s;) {
                            if (s === n) {
                                c = !0, n = r, a = o;
                                break
                            }
                            if (s === a) {
                                c = !0, a = r, n = o;
                                break
                            }
                            s = s.sibling
                        }
                        if (!c) {
                            for (s = o.child; s;) {
                                if (s === n) {
                                    c = !0, n = o, a = r;
                                    break
                                }
                                if (s === a) {
                                    c = !0, a = o, n = r;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!c) throw i(Error(189))
                        }
                    }
                    if (n.alternate !== a) throw i(Error(190))
                }
                if (3 !== n.tag) throw i(Error(188));
                return n.stateNode.current === n ? e : t
            }(e))) return null;
        for (var t = e;;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child;
            else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }
    new Map, new Map, new Set, new Map;
    var ln = le.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        un = le.extend({
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        dn = zt.extend({
            relatedTarget: null
        });

    function pn(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }
    for (var fn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, mn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, hn = zt.extend({
            key: function(e) {
                if (e.key) {
                    var t = fn[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = pn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? mn[e.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: qt,
            charCode: function(e) {
                return "keypress" === e.type ? pn(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? pn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        }), bn = Xt.extend({
            dataTransfer: null
        }), gn = zt.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: qt
        }), vn = le.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }), yn = Xt.extend({
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }), Sn = [
            ["blur", "blur", 0],
            ["cancel", "cancel", 0],
            ["click", "click", 0],
            ["close", "close", 0],
            ["contextmenu", "contextMenu", 0],
            ["copy", "copy", 0],
            ["cut", "cut", 0],
            ["auxclick", "auxClick", 0],
            ["dblclick", "doubleClick", 0],
            ["dragend", "dragEnd", 0],
            ["dragstart", "dragStart", 0],
            ["drop", "drop", 0],
            ["focus", "focus", 0],
            ["input", "input", 0],
            ["invalid", "invalid", 0],
            ["keydown", "keyDown", 0],
            ["keypress", "keyPress", 0],
            ["keyup", "keyUp", 0],
            ["mousedown", "mouseDown", 0],
            ["mouseup", "mouseUp", 0],
            ["paste", "paste", 0],
            ["pause", "pause", 0],
            ["play", "play", 0],
            ["pointercancel", "pointerCancel", 0],
            ["pointerdown", "pointerDown", 0],
            ["pointerup", "pointerUp", 0],
            ["ratechange", "rateChange", 0],
            ["reset", "reset", 0],
            ["seeked", "seeked", 0],
            ["submit", "submit", 0],
            ["touchcancel", "touchCancel", 0],
            ["touchend", "touchEnd", 0],
            ["touchstart", "touchStart", 0],
            ["volumechange", "volumeChange", 0],
            ["drag", "drag", 1],
            ["dragenter", "dragEnter", 1],
            ["dragexit", "dragExit", 1],
            ["dragleave", "dragLeave", 1],
            ["dragover", "dragOver", 1],
            ["mousemove", "mouseMove", 1],
            ["mouseout", "mouseOut", 1],
            ["mouseover", "mouseOver", 1],
            ["pointermove", "pointerMove", 1],
            ["pointerout", "pointerOut", 1],
            ["pointerover", "pointerOver", 1],
            ["scroll", "scroll", 1],
            ["toggle", "toggle", 1],
            ["touchmove", "touchMove", 1],
            ["wheel", "wheel", 1],
            ["abort", "abort", 2],
            [Z, "animationEnd", 2],
            [$, "animationIteration", 2],
            [ee, "animationStart", 2],
            ["canplay", "canPlay", 2],
            ["canplaythrough", "canPlayThrough", 2],
            ["durationchange", "durationChange", 2],
            ["emptied", "emptied", 2],
            ["encrypted", "encrypted", 2],
            ["ended", "ended", 2],
            ["error", "error", 2],
            ["gotpointercapture", "gotPointerCapture", 2],
            ["load", "load", 2],
            ["loadeddata", "loadedData", 2],
            ["loadedmetadata", "loadedMetadata", 2],
            ["loadstart", "loadStart", 2],
            ["lostpointercapture", "lostPointerCapture", 2],
            ["playing", "playing", 2],
            ["progress", "progress", 2],
            ["seeking", "seeking", 2],
            ["stalled", "stalled", 2],
            ["suspend", "suspend", 2],
            ["timeupdate", "timeUpdate", 2],
            [te, "transitionEnd", 2],
            ["waiting", "waiting", 2]
        ], wn = {}, kn = {}, En = 0; En < Sn.length; En++) {
        var On = Sn[En],
            Cn = On[0],
            xn = On[1],
            jn = On[2],
            _n = "on" + (xn[0].toUpperCase() + xn.slice(1)),
            In = {
                phasedRegistrationNames: {
                    bubbled: _n,
                    captured: _n + "Capture"
                },
                dependencies: [Cn],
                eventPriority: jn
            };
        wn[xn] = In, kn[Cn] = In
    }
    var Tn = {
            eventTypes: wn,
            getEventPriority: function(e) {
                return void 0 !== (e = kn[e]) ? e.eventPriority : 2
            },
            extractEvents: function(e, t, n, a) {
                var r = kn[e];
                if (!r) return null;
                switch (e) {
                    case "keypress":
                        if (0 === pn(n)) return null;
                    case "keydown":
                    case "keyup":
                        e = hn;
                        break;
                    case "blur":
                    case "focus":
                        e = dn;
                        break;
                    case "click":
                        if (2 === n.button) return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        e = Xt;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        e = bn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        e = gn;
                        break;
                    case Z:
                    case $:
                    case ee:
                        e = ln;
                        break;
                    case te:
                        e = vn;
                        break;
                    case "scroll":
                        e = zt;
                        break;
                    case "wheel":
                        e = yn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        e = un;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        e = Zt;
                        break;
                    default:
                        e = le
                }
                return H(t = e.getPooled(r, t, n, a)), t
            }
        },
        Pn = Tn.getEventPriority,
        Mn = [];

    function Nn(e) {
        var t = e.targetInst,
            n = t;
        do {
            if (!n) {
                e.ancestors.push(n);
                break
            }
            var a;
            for (a = n; a.return;) a = a.return;
            if (!(a = 3 !== a.tag ? null : a.stateNode.containerInfo)) break;
            e.ancestors.push(n), n = D(a)
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var r = Ve(e.nativeEvent);
            a = e.topLevelType;
            for (var o = e.nativeEvent, i = null, c = 0; c < d.length; c++) {
                var s = d[c];
                s && (s = s.extractEvents(a, t, o, r)) && (i = x(i, s))
            }
            T(i)
        }
    }
    var Ln = !0;

    function Rn(e, t) {
        Dn(t, e, !1)
    }

    function Dn(e, t, n) {
        switch (Pn(t)) {
            case 0:
                var a = An.bind(null, t, 1);
                break;
            case 1:
                a = Bn.bind(null, t, 1);
                break;
            default:
                a = Gn.bind(null, t, 1)
        }
        n ? e.addEventListener(t, a, !0) : e.addEventListener(t, a, !1)
    }

    function An(e, t, n) {
        Ae || Re();
        var a = Gn,
            r = Ae;
        Ae = !0;
        try {
            Le(a, e, t, n)
        } finally {
            (Ae = r) || Be()
        }
    }

    function Bn(e, t, n) {
        Gn(e, t, n)
    }

    function Gn(e, t, n) {
        if (Ln) {
            if (null === (t = D(t = Ve(n))) || "number" != typeof t.tag || 2 === on(t) || (t = null), Mn.length) {
                var a = Mn.pop();
                a.topLevelType = e, a.nativeEvent = n, a.targetInst = t, e = a
            } else e = {
                topLevelType: e,
                nativeEvent: n,
                targetInst: t,
                ancestors: []
            };
            try {
                if (n = e, Ae) Nn(n);
                else {
                    Ae = !0;
                    try {
                        De(Nn, n, void 0)
                    } finally {
                        Ae = !1, Be()
                    }
                }
            } finally {
                e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > Mn.length && Mn.push(e)
            }
        }
    }
    var Un = new("function" == typeof WeakMap ? WeakMap : Map);

    function Vn(e) {
        var t = Un.get(e);
        return void 0 === t && (t = new Set, Un.set(e, t)), t
    }

    function Fn(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function zn(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Wn(e, t) {
        var n, a = zn(e);
        for (e = 0; a;) {
            if (3 === a.nodeType) {
                if (n = e + a.textContent.length, e <= t && n >= t) return {
                    node: a,
                    offset: t - e
                };
                e = n
            }
            e: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = zn(a)
        }
    }

    function Hn() {
        for (var e = window, t = Fn(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (e) {
                n = !1
            }
            if (!n) break;
            t = Fn((e = t.contentWindow).document)
        }
        return t
    }

    function qn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var Kn = q && "documentMode" in document && 11 >= document.documentMode,
        Qn = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        Yn = null,
        Jn = null,
        Xn = null,
        Zn = !1;

    function $n(e, t) {
        var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return Zn || null == Yn || Yn !== Fn(n) ? null : ("selectionStart" in (n = Yn) && qn(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }, Xn && an(Xn, n) ? null : (Xn = n, (e = le.getPooled(Qn.select, Jn, e, t)).type = "select", e.target = Yn, H(e), e))
    }
    var ea = {
        eventTypes: Qn,
        extractEvents: function(e, t, n, a) {
            var r, o = a.window === a ? a.document : 9 === a.nodeType ? a : a.ownerDocument;
            if (!(r = !o)) {
                e: {
                    o = Vn(o),
                    r = m.onSelect;
                    for (var i = 0; i < r.length; i++)
                        if (!o.has(r[i])) {
                            o = !1;
                            break e
                        } o = !0
                }
                r = !o
            }
            if (r) return null;
            switch (o = t ? B(t) : window, e) {
                case "focus":
                    (Ue(o) || "true" === o.contentEditable) && (Yn = o, Jn = t, Xn = null);
                    break;
                case "blur":
                    Xn = Jn = Yn = null;
                    break;
                case "mousedown":
                    Zn = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    return Zn = !1, $n(n, a);
                case "selectionchange":
                    if (Kn) break;
                case "keydown":
                case "keyup":
                    return $n(n, a)
            }
            return null
        }
    };

    function ta(e, t) {
        return e = r({
            children: void 0
        }, t), (t = function(e) {
            var t = "";
            return a.Children.forEach(e, (function(e) {
                null != e && (t += e)
            })), t
        }(t.children)) && (e.children = t), e
    }

    function na(e, t, n, a) {
        if (e = e.options, t) {
            t = {};
            for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
            for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && a && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + wt(n), t = null, r = 0; r < e.length; r++) {
                if (e[r].value === n) return e[r].selected = !0, void(a && (e[r].defaultSelected = !0));
                null !== t || e[r].disabled || (t = e[r])
            }
            null !== t && (t.selected = !0)
        }
    }

    function aa(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw i(Error(91));
        return r({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function ra(e, t) {
        var n = t.value;
        if (null == n) {
            if (n = t.defaultValue, null != (t = t.children)) {
                if (null != n) throw i(Error(92));
                if (Array.isArray(t)) {
                    if (!(1 >= t.length)) throw i(Error(93));
                    t = t[0]
                }
                n = t
            }
            null == n && (n = "")
        }
        e._wrapperState = {
            initialValue: wt(n)
        }
    }

    function oa(e, t) {
        var n = wt(t.value),
            a = wt(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != a && (e.defaultValue = "" + a)
    }

    function ia(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && (e.value = t)
    }
    P.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), k = G, E = A, O = B, P.injectEventPluginsByName({
        SimpleEventPlugin: Tn,
        EnterLeaveEventPlugin: en,
        ChangeEventPlugin: Ft,
        SelectEventPlugin: ea,
        BeforeInputEventPlugin: xe
    });
    var ca = "http://www.w3.org/1999/xhtml",
        sa = "http://www.w3.org/2000/svg";

    function la(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function ua(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? la(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var da = void 0,
        pa = function(e) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, a, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return e(t, n)
                }))
            } : e
        }((function(e, t) {
            if (e.namespaceURI !== sa || "innerHTML" in e) e.innerHTML = t;
            else {
                for ((da = da || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>", t = da.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.firstChild;) e.appendChild(t.firstChild)
            }
        }));

    function fa(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
    }
    var ma = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        ha = ["Webkit", "ms", "Moz", "O"];

    function ba(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || ma.hasOwnProperty(e) && ma[e] ? ("" + t).trim() : t + "px"
    }

    function ga(e, t) {
        for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var a = 0 === n.indexOf("--"),
                    r = ba(n, t[n], a);
                "float" === n && (n = "cssFloat"), a ? e.setProperty(n, r) : e[n] = r
            }
    }
    Object.keys(ma).forEach((function(e) {
        ha.forEach((function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), ma[t] = ma[e]
        }))
    }));
    var va = r({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function ya(e, t) {
        if (t) {
            if (va[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw i(Error(137), e, "");
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw i(Error(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw i(Error(61))
            }
            if (null != t.style && "object" != typeof t.style) throw i(Error(62), "")
        }
    }

    function Sa(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function wa(e, t) {
        var n = Vn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = m[t];
        for (var a = 0; a < t.length; a++) {
            var r = t[a];
            if (!n.has(r)) {
                switch (r) {
                    case "scroll":
                        Dn(e, "scroll", !0);
                        break;
                    case "focus":
                    case "blur":
                        Dn(e, "focus", !0), Dn(e, "blur", !0), n.add("blur"), n.add("focus");
                        break;
                    case "cancel":
                    case "close":
                        Fe(r) && Dn(e, r, !0);
                        break;
                    case "invalid":
                    case "submit":
                    case "reset":
                        break;
                    default:
                        -1 === ne.indexOf(r) && Rn(r, e)
                }
                n.add(r)
            }
        }
    }

    function ka() {}
    var Ea = null,
        Oa = null;

    function Ca(e, t) {
        switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!t.autoFocus
        }
        return !1
    }

    function xa(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var ja = "function" == typeof setTimeout ? setTimeout : void 0,
        _a = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function Ia(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break
        }
        return e
    }
    new Set;
    var Ta = [],
        Pa = -1;

    function Ma(e) {
        0 > Pa || (e.current = Ta[Pa], Ta[Pa] = null, Pa--)
    }

    function Na(e, t) {
        Pa++, Ta[Pa] = e.current, e.current = t
    }
    var La = {},
        Ra = {
            current: La
        },
        Da = {
            current: !1
        },
        Aa = La;

    function Ba(e, t) {
        var n = e.type.contextTypes;
        if (!n) return La;
        var a = e.stateNode;
        if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
        var r, o = {};
        for (r in n) o[r] = t[r];
        return a && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
    }

    function Ga(e) {
        return null != (e = e.childContextTypes)
    }

    function Ua(e) {
        Ma(Da), Ma(Ra)
    }

    function Va(e) {
        Ma(Da), Ma(Ra)
    }

    function Fa(e, t, n) {
        if (Ra.current !== La) throw i(Error(168));
        Na(Ra, t), Na(Da, n)
    }

    function za(e, t, n) {
        var a = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof a.getChildContext) return n;
        for (var o in a = a.getChildContext())
            if (!(o in e)) throw i(Error(108), ut(t) || "Unknown", o);
        return r({}, n, a)
    }

    function Wa(e) {
        var t = e.stateNode;
        return t = t && t.__reactInternalMemoizedMergedChildContext || La, Aa = Ra.current, Na(Ra, t), Na(Da, Da.current), !0
    }

    function Ha(e, t, n) {
        var a = e.stateNode;
        if (!a) throw i(Error(169));
        n ? (t = za(e, t, Aa), a.__reactInternalMemoizedMergedChildContext = t, Ma(Da), Ma(Ra), Na(Ra, t)) : Ma(Da), Na(Da, n)
    }
    var qa = o.unstable_runWithPriority,
        Ka = o.unstable_scheduleCallback,
        Qa = o.unstable_cancelCallback,
        Ya = o.unstable_shouldYield,
        Ja = o.unstable_requestPaint,
        Xa = o.unstable_now,
        Za = o.unstable_getCurrentPriorityLevel,
        $a = o.unstable_ImmediatePriority,
        er = o.unstable_UserBlockingPriority,
        tr = o.unstable_NormalPriority,
        nr = o.unstable_LowPriority,
        ar = o.unstable_IdlePriority,
        rr = {},
        or = void 0 !== Ja ? Ja : function() {},
        ir = null,
        cr = null,
        sr = !1,
        lr = Xa(),
        ur = 1e4 > lr ? Xa : function() {
            return Xa() - lr
        };

    function dr() {
        switch (Za()) {
            case $a:
                return 99;
            case er:
                return 98;
            case tr:
                return 97;
            case nr:
                return 96;
            case ar:
                return 95;
            default:
                throw i(Error(332))
        }
    }

    function pr(e) {
        switch (e) {
            case 99:
                return $a;
            case 98:
                return er;
            case 97:
                return tr;
            case 96:
                return nr;
            case 95:
                return ar;
            default:
                throw i(Error(332))
        }
    }

    function fr(e, t) {
        return e = pr(e), qa(e, t)
    }

    function mr(e, t, n) {
        return e = pr(e), Ka(e, t, n)
    }

    function hr(e) {
        return null === ir ? (ir = [e], cr = Ka($a, gr)) : ir.push(e), rr
    }

    function br() {
        null !== cr && Qa(cr), gr()
    }

    function gr() {
        if (!sr && null !== ir) {
            sr = !0;
            var e = 0;
            try {
                var t = ir;
                fr(99, (function() {
                    for (; e < t.length; e++) {
                        var n = t[e];
                        do {
                            n = n(!0)
                        } while (null !== n)
                    }
                })), ir = null
            } catch (t) {
                throw null !== ir && (ir = ir.slice(e + 1)), Ka($a, br), t
            } finally {
                sr = !1
            }
        }
    }

    function vr(e, t) {
        return 1073741823 === t ? 99 : 1 === t ? 95 : 0 >= (e = 10 * (1073741821 - t) - 10 * (1073741821 - e)) ? 99 : 250 >= e ? 98 : 5250 >= e ? 97 : 95
    }

    function yr(e, t) {
        if (e && e.defaultProps)
            for (var n in t = r({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t
    }
    var Sr = {
            current: null
        },
        wr = null,
        kr = null,
        Er = null;

    function Or() {
        Er = kr = wr = null
    }

    function Cr(e, t) {
        var n = e.type._context;
        Na(Sr, n._currentValue), n._currentValue = t
    }

    function xr(e) {
        var t = Sr.current;
        Ma(Sr), e.type._context._currentValue = t
    }

    function jr(e, t) {
        for (; null !== e;) {
            var n = e.alternate;
            if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
            else {
                if (!(null !== n && n.childExpirationTime < t)) break;
                n.childExpirationTime = t
            }
            e = e.return
        }
    }

    function _r(e, t) {
        wr = e, Er = kr = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (ti = !0), e.firstContext = null)
    }

    function Ir(e, t) {
        if (Er !== e && !1 !== t && 0 !== t)
            if ("number" == typeof t && 1073741823 !== t || (Er = e, t = 1073741823), t = {
                    context: e,
                    observedBits: t,
                    next: null
                }, null === kr) {
                if (null === wr) throw i(Error(308));
                kr = t, wr.dependencies = {
                    expirationTime: 0,
                    firstContext: t,
                    responders: null
                }
            } else kr = kr.next = t;
        return e._currentValue
    }
    var Tr = !1;

    function Pr(e) {
        return {
            baseState: e,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function Mr(e) {
        return {
            baseState: e.baseState,
            firstUpdate: e.firstUpdate,
            lastUpdate: e.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function Nr(e, t) {
        return {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
        }
    }

    function Lr(e, t) {
        null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
    }

    function Rr(e, t) {
        var n = e.alternate;
        if (null === n) {
            var a = e.updateQueue,
                r = null;
            null === a && (a = e.updateQueue = Pr(e.memoizedState))
        } else a = e.updateQueue, r = n.updateQueue, null === a ? null === r ? (a = e.updateQueue = Pr(e.memoizedState), r = n.updateQueue = Pr(n.memoizedState)) : a = e.updateQueue = Mr(r) : null === r && (r = n.updateQueue = Mr(a));
        null === r || a === r ? Lr(a, t) : null === a.lastUpdate || null === r.lastUpdate ? (Lr(a, t), Lr(r, t)) : (Lr(a, t), r.lastUpdate = t)
    }

    function Dr(e, t) {
        var n = e.updateQueue;
        null === (n = null === n ? e.updateQueue = Pr(e.memoizedState) : Ar(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
    }

    function Ar(e, t) {
        var n = e.alternate;
        return null !== n && t === n.updateQueue && (t = e.updateQueue = Mr(t)), t
    }

    function Br(e, t, n, a, o, i) {
        switch (n.tag) {
            case 1:
                return "function" == typeof(e = n.payload) ? e.call(i, a, o) : e;
            case 3:
                e.effectTag = -2049 & e.effectTag | 64;
            case 0:
                if (null == (o = "function" == typeof(e = n.payload) ? e.call(i, a, o) : e)) break;
                return r({}, a, o);
            case 2:
                Tr = !0
        }
        return a
    }

    function Gr(e, t, n, a, r) {
        Tr = !1;
        for (var o = (t = Ar(e, t)).baseState, i = null, c = 0, s = t.firstUpdate, l = o; null !== s;) {
            var u = s.expirationTime;
            u < r ? (null === i && (i = s, o = l), c < u && (c = u)) : (wc(u, s.suspenseConfig), l = Br(e, 0, s, l, n, a), null !== s.callback && (e.effectTag |= 32, s.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = s : (t.lastEffect.nextEffect = s, t.lastEffect = s))), s = s.next
        }
        for (u = null, s = t.firstCapturedUpdate; null !== s;) {
            var d = s.expirationTime;
            d < r ? (null === u && (u = s, null === i && (o = l)), c < d && (c = d)) : (l = Br(e, 0, s, l, n, a), null !== s.callback && (e.effectTag |= 32, s.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = s : (t.lastCapturedEffect.nextEffect = s, t.lastCapturedEffect = s))), s = s.next
        }
        null === i && (t.lastUpdate = null), null === u ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === i && null === u && (o = l), t.baseState = o, t.firstUpdate = i, t.firstCapturedUpdate = u, e.expirationTime = c, e.memoizedState = l
    }

    function Ur(e, t, n) {
        null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), Vr(t.firstEffect, n), t.firstEffect = t.lastEffect = null, Vr(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
    }

    function Vr(e, t) {
        for (; null !== e;) {
            var n = e.callback;
            if (null !== n) {
                e.callback = null;
                var a = t;
                if ("function" != typeof n) throw i(Error(191), n);
                n.call(a)
            }
            e = e.nextEffect
        }
    }
    var Fr = qe.ReactCurrentBatchConfig,
        zr = (new a.Component).refs;

    function Wr(e, t, n, a) {
        n = null == (n = n(a, t = e.memoizedState)) ? t : r({}, t, n), e.memoizedState = n, null !== (a = e.updateQueue) && 0 === e.expirationTime && (a.baseState = n)
    }
    var Hr = {
        isMounted: function(e) {
            return !!(e = e._reactInternalFiber) && 2 === on(e)
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternalFiber;
            var a = sc(),
                r = Fr.suspense;
            (r = Nr(a = lc(a, e, r), r)).payload = t, null != n && (r.callback = n), Rr(e, r), dc(e, a)
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternalFiber;
            var a = sc(),
                r = Fr.suspense;
            (r = Nr(a = lc(a, e, r), r)).tag = 1, r.payload = t, null != n && (r.callback = n), Rr(e, r), dc(e, a)
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternalFiber;
            var n = sc(),
                a = Fr.suspense;
            (a = Nr(n = lc(n, e, a), a)).tag = 2, null != t && (a.callback = t), Rr(e, a), dc(e, n)
        }
    };

    function qr(e, t, n, a, r, o, i) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(a, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!an(n, a) || !an(r, o))
    }

    function Kr(e, t, n) {
        var a = !1,
            r = La,
            o = t.contextType;
        return "object" == typeof o && null !== o ? o = Ir(o) : (r = Ga(t) ? Aa : Ra.current, o = (a = null != (a = t.contextTypes)) ? Ba(e, r) : La), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Hr, e.stateNode = t, t._reactInternalFiber = e, a && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = o), t
    }

    function Qr(e, t, n, a) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, a), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Hr.enqueueReplaceState(t, t.state, null)
    }

    function Yr(e, t, n, a) {
        var r = e.stateNode;
        r.props = n, r.state = e.memoizedState, r.refs = zr;
        var o = t.contextType;
        "object" == typeof o && null !== o ? r.context = Ir(o) : (o = Ga(t) ? Aa : Ra.current, r.context = Ba(e, o)), null !== (o = e.updateQueue) && (Gr(e, o, n, r, a), r.state = e.memoizedState), "function" == typeof(o = t.getDerivedStateFromProps) && (Wr(e, t, o, n), r.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof r.getSnapshotBeforeUpdate || "function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount || (t = r.state, "function" == typeof r.componentWillMount && r.componentWillMount(), "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), t !== r.state && Hr.enqueueReplaceState(r, r.state, null), null !== (o = e.updateQueue) && (Gr(e, o, n, r, a), r.state = e.memoizedState)), "function" == typeof r.componentDidMount && (e.effectTag |= 4)
    }
    var Jr = Array.isArray;

    function Xr(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                n = n._owner;
                var a = void 0;
                if (n) {
                    if (1 !== n.tag) throw i(Error(309));
                    a = n.stateNode
                }
                if (!a) throw i(Error(147), e);
                var r = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === r ? t.ref : ((t = function(e) {
                    var t = a.refs;
                    t === zr && (t = a.refs = {}), null === e ? delete t[r] : t[r] = e
                })._stringRef = r, t)
            }
            if ("string" != typeof e) throw i(Error(284));
            if (!n._owner) throw i(Error(290), e)
        }
        return e
    }

    function Zr(e, t) {
        if ("textarea" !== e.type) throw i(Error(31), "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
    }

    function $r(e) {
        function t(t, n) {
            if (e) {
                var a = t.lastEffect;
                null !== a ? (a.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, a) {
            if (!e) return null;
            for (; null !== a;) t(n, a), a = a.sibling;
            return null
        }

        function a(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function r(e, t, n) {
            return (e = Bc(e, t)).index = 0, e.sibling = null, e
        }

        function o(t, n, a) {
            return t.index = a, e ? null !== (a = t.alternate) ? (a = a.index) < n ? (t.effectTag = 2, n) : a : (t.effectTag = 2, n) : n
        }

        function c(t) {
            return e && null === t.alternate && (t.effectTag = 2), t
        }

        function s(e, t, n, a) {
            return null === t || 6 !== t.tag ? ((t = Vc(n, e.mode, a)).return = e, t) : ((t = r(t, n)).return = e, t)
        }

        function l(e, t, n, a) {
            return null !== t && t.elementType === n.type ? ((a = r(t, n.props)).ref = Xr(e, t, n), a.return = e, a) : ((a = Gc(n.type, n.key, n.props, null, e.mode, a)).ref = Xr(e, t, n), a.return = e, a)
        }

        function u(e, t, n, a) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Fc(n, e.mode, a)).return = e, t) : ((t = r(t, n.children || [])).return = e, t)
        }

        function d(e, t, n, a, o) {
            return null === t || 7 !== t.tag ? ((t = Uc(n, e.mode, a, o)).return = e, t) : ((t = r(t, n)).return = e, t)
        }

        function p(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return (t = Vc("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case Ye:
                        return (n = Gc(t.type, t.key, t.props, null, e.mode, n)).ref = Xr(e, null, t), n.return = e, n;
                    case Je:
                        return (t = Fc(t, e.mode, n)).return = e, t
                }
                if (Jr(t) || lt(t)) return (t = Uc(t, e.mode, n, null)).return = e, t;
                Zr(e, t)
            }
            return null
        }

        function f(e, t, n, a) {
            var r = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== r ? null : s(e, t, "" + n, a);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case Ye:
                        return n.key === r ? n.type === Xe ? d(e, t, n.props.children, a, r) : l(e, t, n, a) : null;
                    case Je:
                        return n.key === r ? u(e, t, n, a) : null
                }
                if (Jr(n) || lt(n)) return null !== r ? null : d(e, t, n, a, null);
                Zr(e, n)
            }
            return null
        }

        function m(e, t, n, a, r) {
            if ("string" == typeof a || "number" == typeof a) return s(t, e = e.get(n) || null, "" + a, r);
            if ("object" == typeof a && null !== a) {
                switch (a.$$typeof) {
                    case Ye:
                        return e = e.get(null === a.key ? n : a.key) || null, a.type === Xe ? d(t, e, a.props.children, r, a.key) : l(t, e, a, r);
                    case Je:
                        return u(t, e = e.get(null === a.key ? n : a.key) || null, a, r)
                }
                if (Jr(a) || lt(a)) return d(t, e = e.get(n) || null, a, r, null);
                Zr(t, a)
            }
            return null
        }

        function h(r, i, c, s) {
            for (var l = null, u = null, d = i, h = i = 0, b = null; null !== d && h < c.length; h++) {
                d.index > h ? (b = d, d = null) : b = d.sibling;
                var g = f(r, d, c[h], s);
                if (null === g) {
                    null === d && (d = b);
                    break
                }
                e && d && null === g.alternate && t(r, d), i = o(g, i, h), null === u ? l = g : u.sibling = g, u = g, d = b
            }
            if (h === c.length) return n(r, d), l;
            if (null === d) {
                for (; h < c.length; h++) null !== (d = p(r, c[h], s)) && (i = o(d, i, h), null === u ? l = d : u.sibling = d, u = d);
                return l
            }
            for (d = a(r, d); h < c.length; h++) null !== (b = m(d, r, h, c[h], s)) && (e && null !== b.alternate && d.delete(null === b.key ? h : b.key), i = o(b, i, h), null === u ? l = b : u.sibling = b, u = b);
            return e && d.forEach((function(e) {
                return t(r, e)
            })), l
        }

        function b(r, c, s, l) {
            var u = lt(s);
            if ("function" != typeof u) throw i(Error(150));
            if (null == (s = u.call(s))) throw i(Error(151));
            for (var d = u = null, h = c, b = c = 0, g = null, v = s.next(); null !== h && !v.done; b++, v = s.next()) {
                h.index > b ? (g = h, h = null) : g = h.sibling;
                var y = f(r, h, v.value, l);
                if (null === y) {
                    null === h && (h = g);
                    break
                }
                e && h && null === y.alternate && t(r, h), c = o(y, c, b), null === d ? u = y : d.sibling = y, d = y, h = g
            }
            if (v.done) return n(r, h), u;
            if (null === h) {
                for (; !v.done; b++, v = s.next()) null !== (v = p(r, v.value, l)) && (c = o(v, c, b), null === d ? u = v : d.sibling = v, d = v);
                return u
            }
            for (h = a(r, h); !v.done; b++, v = s.next()) null !== (v = m(h, r, b, v.value, l)) && (e && null !== v.alternate && h.delete(null === v.key ? b : v.key), c = o(v, c, b), null === d ? u = v : d.sibling = v, d = v);
            return e && h.forEach((function(e) {
                return t(r, e)
            })), u
        }
        return function(e, a, o, s) {
            var l = "object" == typeof o && null !== o && o.type === Xe && null === o.key;
            l && (o = o.props.children);
            var u = "object" == typeof o && null !== o;
            if (u) switch (o.$$typeof) {
                case Ye:
                    e: {
                        for (u = o.key, l = a; null !== l;) {
                            if (l.key === u) {
                                if (7 === l.tag ? o.type === Xe : l.elementType === o.type) {
                                    n(e, l.sibling), (a = r(l, o.type === Xe ? o.props.children : o.props)).ref = Xr(e, l, o), a.return = e, e = a;
                                    break e
                                }
                                n(e, l);
                                break
                            }
                            t(e, l), l = l.sibling
                        }
                        o.type === Xe ? ((a = Uc(o.props.children, e.mode, s, o.key)).return = e, e = a) : ((s = Gc(o.type, o.key, o.props, null, e.mode, s)).ref = Xr(e, a, o), s.return = e, e = s)
                    }
                    return c(e);
                case Je:
                    e: {
                        for (l = o.key; null !== a;) {
                            if (a.key === l) {
                                if (4 === a.tag && a.stateNode.containerInfo === o.containerInfo && a.stateNode.implementation === o.implementation) {
                                    n(e, a.sibling), (a = r(a, o.children || [])).return = e, e = a;
                                    break e
                                }
                                n(e, a);
                                break
                            }
                            t(e, a), a = a.sibling
                        }(a = Fc(o, e.mode, s)).return = e,
                        e = a
                    }
                    return c(e)
            }
            if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== a && 6 === a.tag ? (n(e, a.sibling), (a = r(a, o)).return = e, e = a) : (n(e, a), (a = Vc(o, e.mode, s)).return = e, e = a), c(e);
            if (Jr(o)) return h(e, a, o, s);
            if (lt(o)) return b(e, a, o, s);
            if (u && Zr(e, o), void 0 === o && !l) switch (e.tag) {
                case 1:
                case 0:
                    throw e = e.type, i(Error(152), e.displayName || e.name || "Component")
            }
            return n(e, a)
        }
    }
    var eo = $r(!0),
        to = $r(!1),
        no = {},
        ao = {
            current: no
        },
        ro = {
            current: no
        },
        oo = {
            current: no
        };

    function io(e) {
        if (e === no) throw i(Error(174));
        return e
    }

    function co(e, t) {
        Na(oo, t), Na(ro, e), Na(ao, no);
        var n = t.nodeType;
        switch (n) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ua(null, "");
                break;
            default:
                t = ua(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
        }
        Ma(ao), Na(ao, t)
    }

    function so(e) {
        Ma(ao), Ma(ro), Ma(oo)
    }

    function lo(e) {
        io(oo.current);
        var t = io(ao.current),
            n = ua(t, e.type);
        t !== n && (Na(ro, e), Na(ao, n))
    }

    function uo(e) {
        ro.current === e && (Ma(ao), Ma(ro))
    }
    var po = {
        current: 0
    };

    function fo(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                if (null !== t.memoizedState) return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (64 & t.effectTag)) return t
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var mo = qe.ReactCurrentDispatcher,
        ho = 0,
        bo = null,
        go = null,
        vo = null,
        yo = null,
        So = null,
        wo = null,
        ko = 0,
        Eo = null,
        Oo = 0,
        Co = !1,
        xo = null,
        jo = 0;

    function _o() {
        throw i(Error(321))
    }

    function Io(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!tn(e[n], t[n])) return !1;
        return !0
    }

    function To(e, t, n, a, r, o) {
        if (ho = o, bo = t, vo = null !== e ? e.memoizedState : null, mo.current = null === vo ? zo : Wo, t = n(a, r), Co) {
            do {
                Co = !1, jo += 1, vo = null !== e ? e.memoizedState : null, wo = yo, Eo = So = go = null, mo.current = Wo, t = n(a, r)
            } while (Co);
            xo = null, jo = 0
        }
        if (mo.current = Fo, (e = bo).memoizedState = yo, e.expirationTime = ko, e.updateQueue = Eo, e.effectTag |= Oo, e = null !== go && null !== go.next, ho = 0, wo = So = yo = vo = go = bo = null, ko = 0, Eo = null, Oo = 0, e) throw i(Error(300));
        return t
    }

    function Po() {
        mo.current = Fo, ho = 0, wo = So = yo = vo = go = bo = null, ko = 0, Eo = null, Oo = 0, Co = !1, xo = null, jo = 0
    }

    function Mo() {
        var e = {
            memoizedState: null,
            baseState: null,
            queue: null,
            baseUpdate: null,
            next: null
        };
        return null === So ? yo = So = e : So = So.next = e, So
    }

    function No() {
        if (null !== wo) wo = (So = wo).next, vo = null !== (go = vo) ? go.next : null;
        else {
            if (null === vo) throw i(Error(310));
            var e = {
                memoizedState: (go = vo).memoizedState,
                baseState: go.baseState,
                queue: go.queue,
                baseUpdate: go.baseUpdate,
                next: null
            };
            So = null === So ? yo = e : So.next = e, vo = go.next
        }
        return So
    }

    function Lo(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function Ro(e) {
        var t = No(),
            n = t.queue;
        if (null === n) throw i(Error(311));
        if (n.lastRenderedReducer = e, 0 < jo) {
            var a = n.dispatch;
            if (null !== xo) {
                var r = xo.get(n);
                if (void 0 !== r) {
                    xo.delete(n);
                    var o = t.memoizedState;
                    do {
                        o = e(o, r.action), r = r.next
                    } while (null !== r);
                    return tn(o, t.memoizedState) || (ti = !0), t.memoizedState = o, t.baseUpdate === n.last && (t.baseState = o), n.lastRenderedState = o, [o, a]
                }
            }
            return [t.memoizedState, a]
        }
        a = n.last;
        var c = t.baseUpdate;
        if (o = t.baseState, null !== c ? (null !== a && (a.next = null), a = c.next) : a = null !== a ? a.next : null, null !== a) {
            var s = r = null,
                l = a,
                u = !1;
            do {
                var d = l.expirationTime;
                d < ho ? (u || (u = !0, s = c, r = o), d > ko && (ko = d)) : (wc(d, l.suspenseConfig), o = l.eagerReducer === e ? l.eagerState : e(o, l.action)), c = l, l = l.next
            } while (null !== l && l !== a);
            u || (s = c, r = o), tn(o, t.memoizedState) || (ti = !0), t.memoizedState = o, t.baseUpdate = s, t.baseState = r, n.lastRenderedState = o
        }
        return [t.memoizedState, n.dispatch]
    }

    function Do(e, t, n, a) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: a,
            next: null
        }, null === Eo ? (Eo = {
            lastEffect: null
        }).lastEffect = e.next = e : null === (t = Eo.lastEffect) ? Eo.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, Eo.lastEffect = e), e
    }

    function Ao(e, t, n, a) {
        var r = Mo();
        Oo |= e, r.memoizedState = Do(t, n, void 0, void 0 === a ? null : a)
    }

    function Bo(e, t, n, a) {
        var r = No();
        a = void 0 === a ? null : a;
        var o = void 0;
        if (null !== go) {
            var i = go.memoizedState;
            if (o = i.destroy, null !== a && Io(a, i.deps)) return void Do(0, n, o, a)
        }
        Oo |= e, r.memoizedState = Do(t, n, o, a)
    }

    function Go(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function() {
            t(null)
        }) : null != t ? (e = e(), t.current = e, function() {
            t.current = null
        }) : void 0
    }

    function Uo() {}

    function Vo(e, t, n) {
        if (!(25 > jo)) throw i(Error(301));
        var a = e.alternate;
        if (e === bo || null !== a && a === bo)
            if (Co = !0, e = {
                    expirationTime: ho,
                    suspenseConfig: null,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                }, null === xo && (xo = new Map), void 0 === (n = xo.get(t))) xo.set(t, e);
            else {
                for (t = n; null !== t.next;) t = t.next;
                t.next = e
            }
        else {
            var r = sc(),
                o = Fr.suspense;
            o = {
                expirationTime: r = lc(r, e, o),
                suspenseConfig: o,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            };
            var c = t.last;
            if (null === c) o.next = o;
            else {
                var s = c.next;
                null !== s && (o.next = s), c.next = o
            }
            if (t.last = o, 0 === e.expirationTime && (null === a || 0 === a.expirationTime) && null !== (a = t.lastRenderedReducer)) try {
                var l = t.lastRenderedState,
                    u = a(l, n);
                if (o.eagerReducer = a, o.eagerState = u, tn(u, l)) return
            } catch (e) {}
            dc(e, r)
        }
    }
    var Fo = {
            readContext: Ir,
            useCallback: _o,
            useContext: _o,
            useEffect: _o,
            useImperativeHandle: _o,
            useLayoutEffect: _o,
            useMemo: _o,
            useReducer: _o,
            useRef: _o,
            useState: _o,
            useDebugValue: _o,
            useResponder: _o
        },
        zo = {
            readContext: Ir,
            useCallback: function(e, t) {
                return Mo().memoizedState = [e, void 0 === t ? null : t], e
            },
            useContext: Ir,
            useEffect: function(e, t) {
                return Ao(516, 192, e, t)
            },
            useImperativeHandle: function(e, t, n) {
                return n = null != n ? n.concat([e]) : null, Ao(4, 36, Go.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return Ao(4, 36, e, t)
            },
            useMemo: function(e, t) {
                var n = Mo();
                return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var a = Mo();
                return t = void 0 !== n ? n(t) : t, a.memoizedState = a.baseState = t, e = (e = a.queue = {
                    last: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }).dispatch = Vo.bind(null, bo, e), [a.memoizedState, e]
            },
            useRef: function(e) {
                return e = {
                    current: e
                }, Mo().memoizedState = e
            },
            useState: function(e) {
                var t = Mo();
                return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                    last: null,
                    dispatch: null,
                    lastRenderedReducer: Lo,
                    lastRenderedState: e
                }).dispatch = Vo.bind(null, bo, e), [t.memoizedState, e]
            },
            useDebugValue: Uo,
            useResponder: rn
        },
        Wo = {
            readContext: Ir,
            useCallback: function(e, t) {
                var n = No();
                t = void 0 === t ? null : t;
                var a = n.memoizedState;
                return null !== a && null !== t && Io(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e)
            },
            useContext: Ir,
            useEffect: function(e, t) {
                return Bo(516, 192, e, t)
            },
            useImperativeHandle: function(e, t, n) {
                return n = null != n ? n.concat([e]) : null, Bo(4, 36, Go.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return Bo(4, 36, e, t)
            },
            useMemo: function(e, t) {
                var n = No();
                t = void 0 === t ? null : t;
                var a = n.memoizedState;
                return null !== a && null !== t && Io(t, a[1]) ? a[0] : (e = e(), n.memoizedState = [e, t], e)
            },
            useReducer: Ro,
            useRef: function() {
                return No().memoizedState
            },
            useState: function(e) {
                return Ro(Lo)
            },
            useDebugValue: Uo,
            useResponder: rn
        },
        Ho = null,
        qo = null,
        Ko = !1;

    function Qo(e, t) {
        var n = Dc(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }

    function Yo(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            case 13:
            default:
                return !1
        }
    }

    function Jo(e) {
        if (Ko) {
            var t = qo;
            if (t) {
                var n = t;
                if (!Yo(e, t)) {
                    if (!(t = Ia(n.nextSibling)) || !Yo(e, t)) return e.effectTag |= 2, Ko = !1, void(Ho = e);
                    Qo(Ho, n)
                }
                Ho = e, qo = Ia(t.firstChild)
            } else e.effectTag |= 2, Ko = !1, Ho = e
        }
    }

    function Xo(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 18 !== e.tag;) e = e.return;
        Ho = e
    }

    function Zo(e) {
        if (e !== Ho) return !1;
        if (!Ko) return Xo(e), Ko = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !xa(t, e.memoizedProps))
            for (t = qo; t;) Qo(e, t), t = Ia(t.nextSibling);
        return Xo(e), qo = Ho ? Ia(e.stateNode.nextSibling) : null, !0
    }

    function $o() {
        qo = Ho = null, Ko = !1
    }
    var ei = qe.ReactCurrentOwner,
        ti = !1;

    function ni(e, t, n, a) {
        t.child = null === e ? to(t, null, n, a) : eo(t, e.child, n, a)
    }

    function ai(e, t, n, a, r) {
        n = n.render;
        var o = t.ref;
        return _r(t, r), a = To(e, t, n, a, o, r), null === e || ti ? (t.effectTag |= 1, ni(e, t, a, r), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= r && (e.expirationTime = 0), hi(e, t, r))
    }

    function ri(e, t, n, a, r, o) {
        if (null === e) {
            var i = n.type;
            return "function" != typeof i || Ac(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Gc(n.type, null, a, null, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, oi(e, t, i, a, r, o))
        }
        return i = e.child, r < o && (r = i.memoizedProps, (n = null !== (n = n.compare) ? n : an)(r, a) && e.ref === t.ref) ? hi(e, t, o) : (t.effectTag |= 1, (e = Bc(i, a)).ref = t.ref, e.return = t, t.child = e)
    }

    function oi(e, t, n, a, r, o) {
        return null !== e && an(e.memoizedProps, a) && e.ref === t.ref && (ti = !1, r < o) ? hi(e, t, o) : ci(e, t, n, a, o)
    }

    function ii(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
    }

    function ci(e, t, n, a, r) {
        var o = Ga(n) ? Aa : Ra.current;
        return o = Ba(t, o), _r(t, r), n = To(e, t, n, a, o, r), null === e || ti ? (t.effectTag |= 1, ni(e, t, n, r), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= r && (e.expirationTime = 0), hi(e, t, r))
    }

    function si(e, t, n, a, r) {
        if (Ga(n)) {
            var o = !0;
            Wa(t)
        } else o = !1;
        if (_r(t, r), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Kr(t, n, a), Yr(t, n, a, r), a = !0;
        else if (null === e) {
            var i = t.stateNode,
                c = t.memoizedProps;
            i.props = c;
            var s = i.context,
                l = n.contextType;
            "object" == typeof l && null !== l ? l = Ir(l) : l = Ba(t, l = Ga(n) ? Aa : Ra.current);
            var u = n.getDerivedStateFromProps,
                d = "function" == typeof u || "function" == typeof i.getSnapshotBeforeUpdate;
            d || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (c !== a || s !== l) && Qr(t, i, a, l), Tr = !1;
            var p = t.memoizedState;
            s = i.state = p;
            var f = t.updateQueue;
            null !== f && (Gr(t, f, a, i, r), s = t.memoizedState), c !== a || p !== s || Da.current || Tr ? ("function" == typeof u && (Wr(t, n, u, a), s = t.memoizedState), (c = Tr || qr(t, n, c, a, p, s, l)) ? (d || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), t.memoizedProps = a, t.memoizedState = s), i.props = a, i.state = s, i.context = l, a = c) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), a = !1)
        } else i = t.stateNode, c = t.memoizedProps, i.props = t.type === t.elementType ? c : yr(t.type, c), s = i.context, "object" == typeof(l = n.contextType) && null !== l ? l = Ir(l) : l = Ba(t, l = Ga(n) ? Aa : Ra.current), (d = "function" == typeof(u = n.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (c !== a || s !== l) && Qr(t, i, a, l), Tr = !1, s = t.memoizedState, p = i.state = s, null !== (f = t.updateQueue) && (Gr(t, f, a, i, r), p = t.memoizedState), c !== a || s !== p || Da.current || Tr ? ("function" == typeof u && (Wr(t, n, u, a), p = t.memoizedState), (u = Tr || qr(t, n, c, a, s, p, l)) ? (d || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(a, p, l), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(a, p, l)), "function" == typeof i.componentDidUpdate && (t.effectTag |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof i.componentDidUpdate || c === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || c === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = a, t.memoizedState = p), i.props = a, i.state = p, i.context = l, a = u) : ("function" != typeof i.componentDidUpdate || c === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || c === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256), a = !1);
        return li(e, t, n, a, o, r)
    }

    function li(e, t, n, a, r, o) {
        ii(e, t);
        var i = 0 != (64 & t.effectTag);
        if (!a && !i) return r && Ha(t, n, !1), hi(e, t, o);
        a = t.stateNode, ei.current = t;
        var c = i && "function" != typeof n.getDerivedStateFromError ? null : a.render();
        return t.effectTag |= 1, null !== e && i ? (t.child = eo(t, e.child, null, o), t.child = eo(t, null, c, o)) : ni(e, t, c, o), t.memoizedState = a.state, r && Ha(t, n, !0), t.child
    }

    function ui(e) {
        var t = e.stateNode;
        t.pendingContext ? Fa(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Fa(0, t.context, !1), co(e, t.containerInfo)
    }
    var di = {};

    function pi(e, t, n) {
        var a, r = t.mode,
            o = t.pendingProps,
            i = po.current,
            c = null,
            s = !1;
        if ((a = 0 != (64 & t.effectTag)) || (a = 0 != (2 & i) && (null === e || null !== e.memoizedState)), a ? (c = di, s = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (i |= 1), Na(po, i &= 1), null === e)
            if (s) {
                if (o = o.fallback, (e = Uc(null, r, 0, null)).return = t, 0 == (2 & t.mode))
                    for (s = null !== t.memoizedState ? t.child.child : t.child, e.child = s; null !== s;) s.return = e, s = s.sibling;
                (n = Uc(o, r, n, null)).return = t, e.sibling = n, r = e
            } else r = n = to(t, null, o.children, n);
        else {
            if (null !== e.memoizedState)
                if (r = (i = e.child).sibling, s) {
                    if (o = o.fallback, (n = Bc(i, i.pendingProps)).return = t, 0 == (2 & t.mode) && (s = null !== t.memoizedState ? t.child.child : t.child) !== i.child)
                        for (n.child = s; null !== s;) s.return = n, s = s.sibling;
                    (o = Bc(r, o, r.expirationTime)).return = t, n.sibling = o, r = n, n.childExpirationTime = 0, n = o
                } else r = n = eo(t, i.child, o.children, n);
            else if (i = e.child, s) {
                if (s = o.fallback, (o = Uc(null, r, 0, null)).return = t, o.child = i, null !== i && (i.return = o), 0 == (2 & t.mode))
                    for (i = null !== t.memoizedState ? t.child.child : t.child, o.child = i; null !== i;) i.return = o, i = i.sibling;
                (n = Uc(s, r, n, null)).return = t, o.sibling = n, n.effectTag |= 2, r = o, o.childExpirationTime = 0
            } else n = r = eo(t, i, o.children, n);
            t.stateNode = e.stateNode
        }
        return t.memoizedState = c, t.child = r, n
    }

    function fi(e, t, n, a, r) {
        var o = e.memoizedState;
        null === o ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            last: a,
            tail: n,
            tailExpiration: 0,
            tailMode: r
        } : (o.isBackwards = t, o.rendering = null, o.last = a, o.tail = n, o.tailExpiration = 0, o.tailMode = r)
    }

    function mi(e, t, n) {
        var a = t.pendingProps,
            r = a.revealOrder,
            o = a.tail;
        if (ni(e, t, a.children, n), 0 != (2 & (a = po.current))) a = 1 & a | 2, t.effectTag |= 64;
        else {
            if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
                if (13 === e.tag) {
                    if (null !== e.memoizedState) {
                        e.expirationTime < n && (e.expirationTime = n);
                        var i = e.alternate;
                        null !== i && i.expirationTime < n && (i.expirationTime = n), jr(e.return, n)
                    }
                } else if (null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            a &= 1
        }
        if (Na(po, a), 0 == (2 & t.mode)) t.memoizedState = null;
        else switch (r) {
            case "forwards":
                for (n = t.child, r = null; null !== n;) null !== (a = n.alternate) && null === fo(a) && (r = n), n = n.sibling;
                null === (n = r) ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), fi(t, !1, r, n, o);
                break;
            case "backwards":
                for (n = null, r = t.child, t.child = null; null !== r;) {
                    if (null !== (a = r.alternate) && null === fo(a)) {
                        t.child = r;
                        break
                    }
                    a = r.sibling, r.sibling = n, n = r, r = a
                }
                fi(t, !0, n, null, o);
                break;
            case "together":
                fi(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function hi(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), t.childExpirationTime < n) return null;
        if (null !== e && t.child !== e.child) throw i(Error(153));
        if (null !== t.child) {
            for (n = Bc(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Bc(e, e.pendingProps, e.expirationTime)).return = t;
            n.sibling = null
        }
        return t.child
    }

    function bi(e) {
        e.effectTag |= 4
    }
    var gi, vi, yi;

    function Si(e, t) {
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                null === n ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var a = null; null !== n;) null !== n.alternate && (a = n), n = n.sibling;
                null === a ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : a.sibling = null
        }
    }

    function wi(e) {
        switch (e.tag) {
            case 1:
                Ga(e.type) && Ua();
                var t = e.effectTag;
                return 2048 & t ? (e.effectTag = -2049 & t | 64, e) : null;
            case 3:
                if (so(), Va(), 0 != (64 & (t = e.effectTag))) throw i(Error(285));
                return e.effectTag = -2049 & t | 64, e;
            case 5:
                return uo(e), null;
            case 13:
                return Ma(po), 2048 & (t = e.effectTag) ? (e.effectTag = -2049 & t | 64, e) : null;
            case 18:
                return null;
            case 19:
                return Ma(po), null;
            case 4:
                return so(), null;
            case 10:
                return xr(e), null;
            default:
                return null
        }
    }

    function ki(e, t) {
        return {
            value: e,
            source: t,
            stack: dt(t)
        }
    }
    gi = function(e, t) {
        for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (20 === n.tag) e.appendChild(n.stateNode.instance);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, vi = function(e, t, n, a, o) {
        var i = e.memoizedProps;
        if (i !== a) {
            var c = t.stateNode;
            switch (io(ao.current), e = null, n) {
                case "input":
                    i = kt(c, i), a = kt(c, a), e = [];
                    break;
                case "option":
                    i = ta(c, i), a = ta(c, a), e = [];
                    break;
                case "select":
                    i = r({}, i, {
                        value: void 0
                    }), a = r({}, a, {
                        value: void 0
                    }), e = [];
                    break;
                case "textarea":
                    i = aa(c, i), a = aa(c, a), e = [];
                    break;
                default:
                    "function" != typeof i.onClick && "function" == typeof a.onClick && (c.onclick = ka)
            }
            ya(n, a), c = n = void 0;
            var s = null;
            for (n in i)
                if (!a.hasOwnProperty(n) && i.hasOwnProperty(n) && null != i[n])
                    if ("style" === n) {
                        var l = i[n];
                        for (c in l) l.hasOwnProperty(c) && (s || (s = {}), s[c] = "")
                    } else "dangerouslySetInnerHTML" !== n && "children" !== n && "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && "autoFocus" !== n && (f.hasOwnProperty(n) ? e || (e = []) : (e = e || []).push(n, null));
            for (n in a) {
                var u = a[n];
                if (l = null != i ? i[n] : void 0, a.hasOwnProperty(n) && u !== l && (null != u || null != l))
                    if ("style" === n)
                        if (l) {
                            for (c in l) !l.hasOwnProperty(c) || u && u.hasOwnProperty(c) || (s || (s = {}), s[c] = "");
                            for (c in u) u.hasOwnProperty(c) && l[c] !== u[c] && (s || (s = {}), s[c] = u[c])
                        } else s || (e || (e = []), e.push(n, s)), s = u;
                else "dangerouslySetInnerHTML" === n ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (e = e || []).push(n, "" + u)) : "children" === n ? l === u || "string" != typeof u && "number" != typeof u || (e = e || []).push(n, "" + u) : "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && (f.hasOwnProperty(n) ? (null != u && wa(o, n), e || l === u || (e = [])) : (e = e || []).push(n, u))
            }
            s && (e = e || []).push("style", s), o = e, (t.updateQueue = o) && bi(t)
        }
    }, yi = function(e, t, n, a) {
        n !== a && bi(t)
    };
    var Ei = "function" == typeof WeakSet ? WeakSet : Set;

    function Oi(e, t) {
        var n = t.source,
            a = t.stack;
        null === a && null !== n && (a = dt(n)), null !== n && ut(n.type), t = t.value, null !== e && 1 === e.tag && ut(e.type);
        try {
            console.error(t)
        } catch (e) {
            setTimeout((function() {
                throw e
            }))
        }
    }

    function Ci(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" == typeof t) try {
                t(null)
            } catch (t) {
                Ic(e, t)
            } else t.current = null
    }

    function xi(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var a = n = n.next;
            do {
                if (0 != (a.tag & e)) {
                    var r = a.destroy;
                    a.destroy = void 0, void 0 !== r && r()
                }
                0 != (a.tag & t) && (r = a.create, a.destroy = r()), a = a.next
            } while (a !== n)
        }
    }

    function ji(e, t) {
        switch ("function" == typeof Lc && Lc(e), e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                var n = e.updateQueue;
                if (null !== n && null !== (n = n.lastEffect)) {
                    var a = n.next;
                    fr(97 < t ? 97 : t, (function() {
                        var t = a;
                        do {
                            var n = t.destroy;
                            if (void 0 !== n) {
                                var r = e;
                                try {
                                    n()
                                } catch (e) {
                                    Ic(r, e)
                                }
                            }
                            t = t.next
                        } while (t !== a)
                    }))
                }
                break;
            case 1:
                Ci(e), "function" == typeof(t = e.stateNode).componentWillUnmount && function(e, t) {
                    try {
                        t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                    } catch (t) {
                        Ic(e, t)
                    }
                }(e, t);
                break;
            case 5:
                Ci(e);
                break;
            case 4:
                Pi(e, t)
        }
    }

    function _i(e, t) {
        for (var n = e;;)
            if (ji(n, t), null !== n.child && 4 !== n.tag) n.child.return = n, n = n.child;
            else {
                if (n === e) break;
                for (; null === n.sibling;) {
                    if (null === n.return || n.return === e) return;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
    }

    function Ii(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function Ti(e) {
        e: {
            for (var t = e.return; null !== t;) {
                if (Ii(t)) {
                    var n = t;
                    break e
                }
                t = t.return
            }
            throw i(Error(160))
        }
        switch (t = n.stateNode, n.tag) {
            case 5:
                var a = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo, a = !0;
                break;
            default:
                throw i(Error(161))
        }
        16 & n.effectTag && (fa(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
            for (; null === n.sibling;) {
                if (null === n.return || Ii(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (2 & n.effectTag) continue t;
                if (null === n.child || 4 === n.tag) continue t;
                n.child.return = n, n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break e
            }
        }
        for (var r = e;;) {
            var o = 5 === r.tag || 6 === r.tag;
            if (o || 20 === r.tag) {
                var c = o ? r.stateNode : r.stateNode.instance;
                if (n)
                    if (a) {
                        var s = c;
                        c = n, 8 === (o = t).nodeType ? o.parentNode.insertBefore(s, c) : o.insertBefore(s, c)
                    } else t.insertBefore(c, n);
                else a ? (8 === (s = t).nodeType ? (o = s.parentNode).insertBefore(c, s) : (o = s).appendChild(c), null != (s = s._reactRootContainer) || null !== o.onclick || (o.onclick = ka)) : t.appendChild(c)
            } else if (4 !== r.tag && null !== r.child) {
                r.child.return = r, r = r.child;
                continue
            }
            if (r === e) break;
            for (; null === r.sibling;) {
                if (null === r.return || r.return === e) return;
                r = r.return
            }
            r.sibling.return = r.return, r = r.sibling
        }
    }

    function Pi(e, t) {
        for (var n = e, a = !1, r = void 0, o = void 0;;) {
            if (!a) {
                a = n.return;
                e: for (;;) {
                    if (null === a) throw i(Error(160));
                    switch (r = a.stateNode, a.tag) {
                        case 5:
                            o = !1;
                            break e;
                        case 3:
                        case 4:
                            r = r.containerInfo, o = !0;
                            break e
                    }
                    a = a.return
                }
                a = !0
            }
            if (5 === n.tag || 6 === n.tag)
                if (_i(n, t), o) {
                    var c = r,
                        s = n.stateNode;
                    8 === c.nodeType ? c.parentNode.removeChild(s) : c.removeChild(s)
                } else r.removeChild(n.stateNode);
            else if (20 === n.tag) s = n.stateNode.instance, _i(n, t), o ? 8 === (c = r).nodeType ? c.parentNode.removeChild(s) : c.removeChild(s) : r.removeChild(s);
            else if (4 === n.tag) {
                if (null !== n.child) {
                    r = n.stateNode.containerInfo, o = !0, n.child.return = n, n = n.child;
                    continue
                }
            } else if (ji(n, t), null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === e) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === e) return;
                4 === (n = n.return).tag && (a = !1)
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }

    function Mi(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                xi(4, 8, t);
                break;
            case 1:
                break;
            case 5:
                var n = t.stateNode;
                if (null != n) {
                    var a = t.memoizedProps,
                        r = null !== e ? e.memoizedProps : a;
                    e = t.type;
                    var o = t.updateQueue;
                    if (t.updateQueue = null, null !== o) {
                        for (n[R] = a, "input" === e && "radio" === a.type && null != a.name && Ot(n, a), Sa(e, r), t = Sa(e, a), r = 0; r < o.length; r += 2) {
                            var c = o[r],
                                s = o[r + 1];
                            "style" === c ? ga(n, s) : "dangerouslySetInnerHTML" === c ? pa(n, s) : "children" === c ? fa(n, s) : St(n, c, s, t)
                        }
                        switch (e) {
                            case "input":
                                Ct(n, a);
                                break;
                            case "textarea":
                                oa(n, a);
                                break;
                            case "select":
                                t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!a.multiple, null != (e = a.value) ? na(n, !!a.multiple, e, !1) : t !== !!a.multiple && (null != a.defaultValue ? na(n, !!a.multiple, a.defaultValue, !0) : na(n, !!a.multiple, a.multiple ? [] : "", !1))
                        }
                    }
                }
                break;
            case 6:
                if (null === t.stateNode) throw i(Error(162));
                t.stateNode.nodeValue = t.memoizedProps;
                break;
            case 3:
            case 12:
                break;
            case 13:
                if (n = t, null === t.memoizedState ? a = !1 : (a = !0, n = t.child, Yi = ur()), null !== n) e: for (e = n;;) {
                    if (5 === e.tag) o = e.stateNode, a ? "function" == typeof(o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = e.stateNode, r = null != (r = e.memoizedProps.style) && r.hasOwnProperty("display") ? r.display : null, o.style.display = ba("display", r));
                    else if (6 === e.tag) e.stateNode.nodeValue = a ? "" : e.memoizedProps;
                    else {
                        if (13 === e.tag && null !== e.memoizedState) {
                            (o = e.child.sibling).return = e, e = o;
                            continue
                        }
                        if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                    }
                    if (e === n) break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === n) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                Ni(t);
                break;
            case 19:
                Ni(t);
                break;
            case 17:
            case 20:
                break;
            default:
                throw i(Error(163))
        }
    }

    function Ni(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ei), t.forEach((function(t) {
                var a = Pc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(a, a))
            }))
        }
    }
    var Li = "function" == typeof WeakMap ? WeakMap : Map;

    function Ri(e, t, n) {
        (n = Nr(n, null)).tag = 3, n.payload = {
            element: null
        };
        var a = t.value;
        return n.callback = function() {
            Xi || (Xi = !0, Zi = a), Oi(e, t)
        }, n
    }

    function Di(e, t, n) {
        (n = Nr(n, null)).tag = 3;
        var a = e.type.getDerivedStateFromError;
        if ("function" == typeof a) {
            var r = t.value;
            n.payload = function() {
                return Oi(e, t), a(r)
            }
        }
        var o = e.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
            "function" != typeof a && (null === $i ? $i = new Set([this]) : $i.add(this), Oi(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: null !== n ? n : ""
            })
        }), n
    }
    var Ai = Math.ceil,
        Bi = qe.ReactCurrentDispatcher,
        Gi = qe.ReactCurrentOwner,
        Ui = 0,
        Vi = null,
        Fi = null,
        zi = 0,
        Wi = 0,
        Hi = 1073741823,
        qi = 1073741823,
        Ki = null,
        Qi = !1,
        Yi = 0,
        Ji = null,
        Xi = !1,
        Zi = null,
        $i = null,
        ec = !1,
        tc = null,
        nc = 90,
        ac = 0,
        rc = null,
        oc = 0,
        ic = null,
        cc = 0;

    function sc() {
        return 0 != (48 & Ui) ? 1073741821 - (ur() / 10 | 0) : 0 !== cc ? cc : cc = 1073741821 - (ur() / 10 | 0)
    }

    function lc(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var a = dr();
        if (0 == (4 & t)) return 99 === a ? 1073741823 : 1073741822;
        if (0 != (16 & Ui)) return zi;
        if (null !== n) e = 1073741821 - 25 * (1 + ((1073741821 - e + (0 | n.timeoutMs || 5e3) / 10) / 25 | 0));
        else switch (a) {
            case 99:
                e = 1073741823;
                break;
            case 98:
                e = 1073741821 - 10 * (1 + ((1073741821 - e + 15) / 10 | 0));
                break;
            case 97:
            case 96:
                e = 1073741821 - 25 * (1 + ((1073741821 - e + 500) / 25 | 0));
                break;
            case 95:
                e = 1;
                break;
            default:
                throw i(Error(326))
        }
        return null !== Vi && e === zi && --e, e
    }
    var uc = 0;

    function dc(e, t) {
        if (50 < oc) throw oc = 0, ic = null, i(Error(185));
        if (null !== (e = pc(e, t))) {
            e.pingTime = 0;
            var n = dr();
            if (1073741823 === t)
                if (0 != (8 & Ui) && 0 == (48 & Ui))
                    for (var a = Sc(e, 1073741823, !0); null !== a;) a = a(!0);
                else fc(e, 99, 1073741823), 0 === Ui && br();
            else fc(e, n, t);
            0 == (4 & Ui) || 98 !== n && 99 !== n || (null === rc ? rc = new Map([
                [e, t]
            ]) : (void 0 === (n = rc.get(e)) || n > t) && rc.set(e, t))
        }
    }

    function pc(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var a = e.return,
            r = null;
        if (null === a && 3 === e.tag) r = e.stateNode;
        else
            for (; null !== a;) {
                if (n = a.alternate, a.childExpirationTime < t && (a.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === a.return && 3 === a.tag) {
                    r = a.stateNode;
                    break
                }
                a = a.return
            }
        return null !== r && (t > r.firstPendingTime && (r.firstPendingTime = t), 0 === (e = r.lastPendingTime) || t < e) && (r.lastPendingTime = t), r
    }

    function fc(e, t, n) {
        if (e.callbackExpirationTime < n) {
            var a = e.callbackNode;
            null !== a && a !== rr && Qa(a), e.callbackExpirationTime = n, 1073741823 === n ? e.callbackNode = hr(mc.bind(null, e, Sc.bind(null, e, n))) : (a = null, 1 !== n && (a = {
                timeout: 10 * (1073741821 - n) - ur()
            }), e.callbackNode = mr(t, mc.bind(null, e, Sc.bind(null, e, n)), a))
        }
    }

    function mc(e, t, n) {
        var a = e.callbackNode,
            r = null;
        try {
            return null !== (r = t(n)) ? mc.bind(null, e, r) : null
        } finally {
            null === r && a === e.callbackNode && (e.callbackNode = null, e.callbackExpirationTime = 0)
        }
    }

    function hc() {
        0 == (49 & Ui) && (function() {
            if (null !== rc) {
                var e = rc;
                rc = null, e.forEach((function(e, t) {
                    hr(Sc.bind(null, t, e))
                })), br()
            }
        }(), xc())
    }

    function bc(e, t) {
        var n = Ui;
        Ui |= 1;
        try {
            return e(t)
        } finally {
            0 === (Ui = n) && br()
        }
    }

    function gc(e, t, n, a) {
        var r = Ui;
        Ui |= 4;
        try {
            return fr(98, e.bind(null, t, n, a))
        } finally {
            0 === (Ui = r) && br()
        }
    }

    function vc(e, t) {
        var n = Ui;
        Ui &= -2, Ui |= 8;
        try {
            return e(t)
        } finally {
            0 === (Ui = n) && br()
        }
    }

    function yc(e, t) {
        e.finishedWork = null, e.finishedExpirationTime = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, _a(n)), null !== Fi)
            for (n = Fi.return; null !== n;) {
                var a = n;
                switch (a.tag) {
                    case 1:
                        var r = a.type.childContextTypes;
                        null != r && Ua();
                        break;
                    case 3:
                        so(), Va();
                        break;
                    case 5:
                        uo(a);
                        break;
                    case 4:
                        so();
                        break;
                    case 13:
                    case 19:
                        Ma(po);
                        break;
                    case 10:
                        xr(a)
                }
                n = n.return
            }
        Vi = e, Fi = Bc(e.current, null), zi = t, Wi = 0, qi = Hi = 1073741823, Ki = null, Qi = !1
    }

    function Sc(e, t, n) {
        if (0 != (48 & Ui)) throw i(Error(327));
        if (e.firstPendingTime < t) return null;
        if (n && e.finishedExpirationTime === t) return Oc.bind(null, e);
        if (xc(), e !== Vi || t !== zi) yc(e, t);
        else if (3 === Wi)
            if (Qi) yc(e, t);
            else {
                var a = e.lastPendingTime;
                if (a < t) return Sc.bind(null, e, a)
            } if (null !== Fi) {
            a = Ui, Ui |= 16;
            var r = Bi.current;
            if (null === r && (r = Fo), Bi.current = Fo, n) {
                if (1073741823 !== t) {
                    var o = sc();
                    if (o < t) return Ui = a, Or(), Bi.current = r, Sc.bind(null, e, o)
                }
            } else cc = 0;
            for (;;) try {
                if (n)
                    for (; null !== Fi;) Fi = kc(Fi);
                else
                    for (; null !== Fi && !Ya();) Fi = kc(Fi);
                break
            } catch (n) {
                if (Or(), Po(), null === (o = Fi) || null === o.return) throw yc(e, t), Ui = a, n;
                e: {
                    var c = e,
                        s = o.return,
                        l = o,
                        u = n,
                        d = zi;
                    if (l.effectTag |= 1024, l.firstEffect = l.lastEffect = null, null !== u && "object" == typeof u && "function" == typeof u.then) {
                        var p = u,
                            f = 0 != (1 & po.current);
                        u = s;
                        do {
                            var m;
                            if ((m = 13 === u.tag) && (null !== u.memoizedState ? m = !1 : m = void 0 !== (m = u.memoizedProps).fallback && (!0 !== m.unstable_avoidThisFallback || !f)), m) {
                                if (null === (s = u.updateQueue) ? ((s = new Set).add(p), u.updateQueue = s) : s.add(p), 0 == (2 & u.mode)) {
                                    u.effectTag |= 64, l.effectTag &= -1957, 1 === l.tag && (null === l.alternate ? l.tag = 17 : ((d = Nr(1073741823, null)).tag = 2, Rr(l, d))), l.expirationTime = 1073741823;
                                    break e
                                }
                                l = c, c = d, null === (f = l.pingCache) ? (f = l.pingCache = new Li, s = new Set, f.set(p, s)) : void 0 === (s = f.get(p)) && (s = new Set, f.set(p, s)), s.has(c) || (s.add(c), l = Tc.bind(null, l, p, c), p.then(l, l)), u.effectTag |= 2048, u.expirationTime = d;
                                break e
                            }
                            u = u.return
                        } while (null !== u);
                        u = Error((ut(l.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + dt(l))
                    }
                    4 !== Wi && (Wi = 1),
                    u = ki(u, l),
                    l = s;do {
                        switch (l.tag) {
                            case 3:
                                l.effectTag |= 2048, l.expirationTime = d, Dr(l, d = Ri(l, u, d));
                                break e;
                            case 1:
                                if (p = u, c = l.type, s = l.stateNode, 0 == (64 & l.effectTag) && ("function" == typeof c.getDerivedStateFromError || null !== s && "function" == typeof s.componentDidCatch && (null === $i || !$i.has(s)))) {
                                    l.effectTag |= 2048, l.expirationTime = d, Dr(l, d = Di(l, p, d));
                                    break e
                                }
                        }
                        l = l.return
                    } while (null !== l)
                }
                Fi = Ec(o)
            }
            if (Ui = a, Or(), Bi.current = r, null !== Fi) return Sc.bind(null, e, t)
        }
        if (e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, function(e, t) {
                var n = e.firstBatch;
                return !!(null !== n && n._defer && n._expirationTime >= t) && (mr(97, (function() {
                    return n._onComplete(), null
                })), !0)
            }(e, t)) return null;
        switch (Vi = null, Wi) {
            case 0:
                throw i(Error(328));
            case 1:
                return (a = e.lastPendingTime) < t ? Sc.bind(null, e, a) : n ? Oc.bind(null, e) : (yc(e, t), hr(Sc.bind(null, e, t)), null);
            case 2:
                return 1073741823 === Hi && !n && 10 < (n = Yi + 500 - ur()) ? Qi ? (yc(e, t), Sc.bind(null, e, t)) : (a = e.lastPendingTime) < t ? Sc.bind(null, e, a) : (e.timeoutHandle = ja(Oc.bind(null, e), n), null) : Oc.bind(null, e);
            case 3:
                if (!n) {
                    if (Qi) return yc(e, t), Sc.bind(null, e, t);
                    if ((n = e.lastPendingTime) < t) return Sc.bind(null, e, n);
                    if (1073741823 !== qi ? n = 10 * (1073741821 - qi) - ur() : 1073741823 === Hi ? n = 0 : (n = 10 * (1073741821 - Hi) - 5e3, 0 > (n = (a = ur()) - n) && (n = 0), (t = 10 * (1073741821 - t) - a) < (n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Ai(n / 1960)) - n) && (n = t)), 10 < n) return e.timeoutHandle = ja(Oc.bind(null, e), n), null
                }
                return Oc.bind(null, e);
            case 4:
                return !n && 1073741823 !== Hi && null !== Ki && (a = Hi, 0 >= (t = 0 | (r = Ki).busyMinDurationMs) ? t = 0 : (n = 0 | r.busyDelayMs, t = (a = ur() - (10 * (1073741821 - a) - (0 | r.timeoutMs || 5e3))) <= n ? 0 : n + t - a), 10 < t) ? (e.timeoutHandle = ja(Oc.bind(null, e), t), null) : Oc.bind(null, e);
            default:
                throw i(Error(329))
        }
    }

    function wc(e, t) {
        e < Hi && 1 < e && (Hi = e), null !== t && e < qi && 1 < e && (qi = e, Ki = t)
    }

    function kc(e) {
        var t = Mc(e.alternate, e, zi);
        return e.memoizedProps = e.pendingProps, null === t && (t = Ec(e)), Gi.current = null, t
    }

    function Ec(e) {
        Fi = e;
        do {
            var t = Fi.alternate;
            if (e = Fi.return, 0 == (1024 & Fi.effectTag)) {
                e: {
                    var n = t,
                        a = zi,
                        o = (t = Fi).pendingProps;
                    switch (t.tag) {
                        case 2:
                        case 16:
                            break;
                        case 15:
                        case 0:
                            break;
                        case 1:
                            Ga(t.type) && Ua();
                            break;
                        case 3:
                            so(), Va(), (a = t.stateNode).pendingContext && (a.context = a.pendingContext, a.pendingContext = null), null !== n && null !== n.child || (Zo(t), t.effectTag &= -3);
                            break;
                        case 5:
                            uo(t), a = io(oo.current);
                            var c = t.type;
                            if (null !== n && null != t.stateNode) vi(n, t, c, o, a), n.ref !== t.ref && (t.effectTag |= 128);
                            else if (o) {
                                var s = io(ao.current);
                                if (Zo(t)) {
                                    o = void 0, c = (n = t).stateNode;
                                    var l = n.type,
                                        u = n.memoizedProps;
                                    switch (c[L] = n, c[R] = u, l) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Rn("load", c);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (var d = 0; d < ne.length; d++) Rn(ne[d], c);
                                            break;
                                        case "source":
                                            Rn("error", c);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Rn("error", c), Rn("load", c);
                                            break;
                                        case "form":
                                            Rn("reset", c), Rn("submit", c);
                                            break;
                                        case "details":
                                            Rn("toggle", c);
                                            break;
                                        case "input":
                                            Et(c, u), Rn("invalid", c), wa(a, "onChange");
                                            break;
                                        case "select":
                                            c._wrapperState = {
                                                wasMultiple: !!u.multiple
                                            }, Rn("invalid", c), wa(a, "onChange");
                                            break;
                                        case "textarea":
                                            ra(c, u), Rn("invalid", c), wa(a, "onChange")
                                    }
                                    for (o in ya(l, u), d = null, u) u.hasOwnProperty(o) && (s = u[o], "children" === o ? "string" == typeof s ? c.textContent !== s && (d = ["children", s]) : "number" == typeof s && c.textContent !== "" + s && (d = ["children", "" + s]) : f.hasOwnProperty(o) && null != s && wa(a, o));
                                    switch (l) {
                                        case "input":
                                            We(c), xt(c, u, !0);
                                            break;
                                        case "textarea":
                                            We(c), ia(c);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof u.onClick && (c.onclick = ka)
                                    }
                                    a = d, n.updateQueue = a, null !== a && bi(t)
                                } else {
                                    u = c, n = o, l = t, d = 9 === a.nodeType ? a : a.ownerDocument, s === ca && (s = la(u)), s === ca ? "script" === u ? ((u = d.createElement("div")).innerHTML = "<script><\/script>", d = u.removeChild(u.firstChild)) : "string" == typeof n.is ? d = d.createElement(u, {
                                        is: n.is
                                    }) : (d = d.createElement(u), "select" === u && (u = d, n.multiple ? u.multiple = !0 : n.size && (u.size = n.size))) : d = d.createElementNS(s, u), (u = d)[L] = l, u[R] = n, gi(n = u, t), l = n;
                                    var p = a,
                                        m = Sa(c, o);
                                    switch (c) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Rn("load", l), a = o;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < ne.length; a++) Rn(ne[a], l);
                                            a = o;
                                            break;
                                        case "source":
                                            Rn("error", l), a = o;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Rn("error", l), Rn("load", l), a = o;
                                            break;
                                        case "form":
                                            Rn("reset", l), Rn("submit", l), a = o;
                                            break;
                                        case "details":
                                            Rn("toggle", l), a = o;
                                            break;
                                        case "input":
                                            Et(l, o), a = kt(l, o), Rn("invalid", l), wa(p, "onChange");
                                            break;
                                        case "option":
                                            a = ta(l, o);
                                            break;
                                        case "select":
                                            l._wrapperState = {
                                                wasMultiple: !!o.multiple
                                            }, a = r({}, o, {
                                                value: void 0
                                            }), Rn("invalid", l), wa(p, "onChange");
                                            break;
                                        case "textarea":
                                            ra(l, o), a = aa(l, o), Rn("invalid", l), wa(p, "onChange");
                                            break;
                                        default:
                                            a = o
                                    }
                                    ya(c, a), u = void 0, d = c, s = l;
                                    var h = a;
                                    for (u in h)
                                        if (h.hasOwnProperty(u)) {
                                            var b = h[u];
                                            "style" === u ? ga(s, b) : "dangerouslySetInnerHTML" === u ? null != (b = b ? b.__html : void 0) && pa(s, b) : "children" === u ? "string" == typeof b ? ("textarea" !== d || "" !== b) && fa(s, b) : "number" == typeof b && fa(s, "" + b) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (f.hasOwnProperty(u) ? null != b && wa(p, u) : null != b && St(s, u, b, m))
                                        } switch (c) {
                                        case "input":
                                            We(l), xt(l, o, !1);
                                            break;
                                        case "textarea":
                                            We(l), ia(l);
                                            break;
                                        case "option":
                                            null != o.value && l.setAttribute("value", "" + wt(o.value));
                                            break;
                                        case "select":
                                            a = l, l = o, a.multiple = !!l.multiple, null != (u = l.value) ? na(a, !!l.multiple, u, !1) : null != l.defaultValue && na(a, !!l.multiple, l.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof a.onClick && (l.onclick = ka)
                                    }
                                    Ca(c, o) && bi(t), t.stateNode = n
                                }
                                null !== t.ref && (t.effectTag |= 128)
                            } else if (null === t.stateNode) throw i(Error(166));
                            break;
                        case 6:
                            if (n && null != t.stateNode) yi(0, t, n.memoizedProps, o);
                            else {
                                if ("string" != typeof o && null === t.stateNode) throw i(Error(166));
                                n = io(oo.current), io(ao.current), Zo(t) ? (a = t.stateNode, n = t.memoizedProps, a[L] = t, a.nodeValue !== n && bi(t)) : (a = t, (n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(o))[L] = t, a.stateNode = n)
                            }
                            break;
                        case 11:
                            break;
                        case 13:
                            if (Ma(po), o = t.memoizedState, 0 != (64 & t.effectTag)) {
                                t.expirationTime = a;
                                break e
                            }
                            a = null !== o, o = !1, null === n ? Zo(t) : (o = null !== (c = n.memoizedState), a || null === c || null !== (c = n.child.sibling) && (null !== (l = t.firstEffect) ? (t.firstEffect = c, c.nextEffect = l) : (t.firstEffect = t.lastEffect = c, c.nextEffect = null), c.effectTag = 8)), a && !o && 0 != (2 & t.mode) && (null === n && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & po.current) ? 0 === Wi && (Wi = 2) : 0 !== Wi && 2 !== Wi || (Wi = 3)), (a || o) && (t.effectTag |= 4);
                            break;
                        case 7:
                        case 8:
                        case 12:
                            break;
                        case 4:
                            so();
                            break;
                        case 10:
                            xr(t);
                            break;
                        case 9:
                        case 14:
                            break;
                        case 17:
                            Ga(t.type) && Ua();
                            break;
                        case 18:
                            break;
                        case 19:
                            if (Ma(po), null === (o = t.memoizedState)) break;
                            if (c = 0 != (64 & t.effectTag), null === (l = o.rendering)) {
                                if (c) Si(o, !1);
                                else if (0 !== Wi || null !== n && 0 != (64 & n.effectTag))
                                    for (n = t.child; null !== n;) {
                                        if (null !== (l = fo(n))) {
                                            for (t.effectTag |= 64, Si(o, !1), null !== (n = l.updateQueue) && (t.updateQueue = n, t.effectTag |= 4), t.firstEffect = t.lastEffect = null, n = t.child; null !== n;) c = a, (o = n).effectTag &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (l = o.alternate) ? (o.childExpirationTime = 0, o.expirationTime = c, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null) : (o.childExpirationTime = l.childExpirationTime, o.expirationTime = l.expirationTime, o.child = l.child, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, c = l.dependencies, o.dependencies = null === c ? null : {
                                                expirationTime: c.expirationTime,
                                                firstContext: c.firstContext,
                                                responders: c.responders
                                            }), n = n.sibling;
                                            Na(po, 1 & po.current | 2), t = t.child;
                                            break e
                                        }
                                        n = n.sibling
                                    }
                            } else {
                                if (!c)
                                    if (null !== (n = fo(l))) {
                                        if (t.effectTag |= 64, c = !0, Si(o, !0), null === o.tail && "hidden" === o.tailMode) {
                                            null !== (a = n.updateQueue) && (t.updateQueue = a, t.effectTag |= 4), null !== (t = t.lastEffect = o.lastEffect) && (t.nextEffect = null);
                                            break
                                        }
                                    } else ur() > o.tailExpiration && 1 < a && (t.effectTag |= 64, c = !0, Si(o, !1), t.expirationTime = t.childExpirationTime = a - 1);
                                o.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (a = o.last) ? a.sibling = l : t.child = l, o.last = l)
                            }
                            if (null !== o.tail) {
                                0 === o.tailExpiration && (o.tailExpiration = ur() + 500), a = o.tail, o.rendering = a, o.tail = a.sibling, o.lastEffect = t.lastEffect, a.sibling = null, n = po.current, Na(po, n = c ? 1 & n | 2 : 1 & n), t = a;
                                break e
                            }
                            break;
                        case 20:
                            break;
                        default:
                            throw i(Error(156))
                    }
                    t = null
                }
                if (a = Fi, 1 === zi || 1 !== a.childExpirationTime) {
                    for (n = 0, o = a.child; null !== o;)(c = o.expirationTime) > n && (n = c), (l = o.childExpirationTime) > n && (n = l), o = o.sibling;
                    a.childExpirationTime = n
                }
                if (null !== t) return t;null !== e && 0 == (1024 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Fi.firstEffect), null !== Fi.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Fi.firstEffect), e.lastEffect = Fi.lastEffect), 1 < Fi.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Fi : e.firstEffect = Fi, e.lastEffect = Fi))
            }
            else {
                if (null !== (t = wi(Fi))) return t.effectTag &= 1023, t;
                null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 1024)
            }
            if (null !== (t = Fi.sibling)) return t;
            Fi = e
        } while (null !== Fi);
        return 0 === Wi && (Wi = 4), null
    }

    function Oc(e) {
        var t = dr();
        return fr(99, Cc.bind(null, e, t)), null !== tc && mr(97, (function() {
            return xc(), null
        })), null
    }

    function Cc(e, t) {
        if (xc(), 0 != (48 & Ui)) throw i(Error(327));
        var n = e.finishedWork,
            a = e.finishedExpirationTime;
        if (null === n) return null;
        if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw i(Error(177));
        e.callbackNode = null, e.callbackExpirationTime = 0;
        var r = n.expirationTime,
            o = n.childExpirationTime;
        if (r = o > r ? o : r, e.firstPendingTime = r, r < e.lastPendingTime && (e.lastPendingTime = r), e === Vi && (Fi = Vi = null, zi = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
            o = Ui, Ui |= 32, Gi.current = null, Ea = Ln;
            var c = Hn();
            if (qn(c)) {
                if ("selectionStart" in c) var s = {
                    start: c.selectionStart,
                    end: c.selectionEnd
                };
                else e: {
                    var l = (s = (s = c.ownerDocument) && s.defaultView || window).getSelection && s.getSelection();
                    if (l && 0 !== l.rangeCount) {
                        s = l.anchorNode;
                        var u = l.anchorOffset,
                            d = l.focusNode;
                        l = l.focusOffset;
                        try {
                            s.nodeType, d.nodeType
                        } catch (e) {
                            s = null;
                            break e
                        }
                        var p = 0,
                            f = -1,
                            m = -1,
                            h = 0,
                            b = 0,
                            g = c,
                            v = null;
                        t: for (;;) {
                            for (var y; g !== s || 0 !== u && 3 !== g.nodeType || (f = p + u), g !== d || 0 !== l && 3 !== g.nodeType || (m = p + l), 3 === g.nodeType && (p += g.nodeValue.length), null !== (y = g.firstChild);) v = g, g = y;
                            for (;;) {
                                if (g === c) break t;
                                if (v === s && ++h === u && (f = p), v === d && ++b === l && (m = p), null !== (y = g.nextSibling)) break;
                                v = (g = v).parentNode
                            }
                            g = y
                        }
                        s = -1 === f || -1 === m ? null : {
                            start: f,
                            end: m
                        }
                    } else s = null
                }
                s = s || {
                    start: 0,
                    end: 0
                }
            } else s = null;
            Oa = {
                focusedElem: c,
                selectionRange: s
            }, Ln = !1, Ji = r;
            do {
                try {
                    for (; null !== Ji;) {
                        if (0 != (256 & Ji.effectTag)) {
                            var S = Ji.alternate;
                            switch ((c = Ji).tag) {
                                case 0:
                                case 11:
                                case 15:
                                    xi(2, 0, c);
                                    break;
                                case 1:
                                    if (256 & c.effectTag && null !== S) {
                                        var w = S.memoizedProps,
                                            k = S.memoizedState,
                                            E = c.stateNode,
                                            O = E.getSnapshotBeforeUpdate(c.elementType === c.type ? w : yr(c.type, w), k);
                                        E.__reactInternalSnapshotBeforeUpdate = O
                                    }
                                    break;
                                case 3:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw i(Error(163))
                            }
                        }
                        Ji = Ji.nextEffect
                    }
                } catch (e) {
                    if (null === Ji) throw i(Error(330));
                    Ic(Ji, e), Ji = Ji.nextEffect
                }
            } while (null !== Ji);
            Ji = r;
            do {
                try {
                    for (S = t; null !== Ji;) {
                        var C = Ji.effectTag;
                        if (16 & C && fa(Ji.stateNode, ""), 128 & C) {
                            var x = Ji.alternate;
                            if (null !== x) {
                                var j = x.ref;
                                null !== j && ("function" == typeof j ? j(null) : j.current = null)
                            }
                        }
                        switch (14 & C) {
                            case 2:
                                Ti(Ji), Ji.effectTag &= -3;
                                break;
                            case 6:
                                Ti(Ji), Ji.effectTag &= -3, Mi(Ji.alternate, Ji);
                                break;
                            case 4:
                                Mi(Ji.alternate, Ji);
                                break;
                            case 8:
                                Pi(w = Ji, S), w.return = null, w.child = null, w.memoizedState = null, w.updateQueue = null, w.dependencies = null;
                                var _ = w.alternate;
                                null !== _ && (_.return = null, _.child = null, _.memoizedState = null, _.updateQueue = null, _.dependencies = null)
                        }
                        Ji = Ji.nextEffect
                    }
                } catch (e) {
                    if (null === Ji) throw i(Error(330));
                    Ic(Ji, e), Ji = Ji.nextEffect
                }
            } while (null !== Ji);
            if (j = Oa, x = Hn(), C = j.focusedElem, S = j.selectionRange, x !== C && C && C.ownerDocument && function e(t, n) {
                    return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
                }(C.ownerDocument.documentElement, C)) {
                null !== S && qn(C) && (x = S.start, void 0 === (j = S.end) && (j = x), "selectionStart" in C ? (C.selectionStart = x, C.selectionEnd = Math.min(j, C.value.length)) : (j = (x = C.ownerDocument || document) && x.defaultView || window).getSelection && (j = j.getSelection(), w = C.textContent.length, _ = Math.min(S.start, w), S = void 0 === S.end ? _ : Math.min(S.end, w), !j.extend && _ > S && (w = S, S = _, _ = w), w = Wn(C, _), k = Wn(C, S), w && k && (1 !== j.rangeCount || j.anchorNode !== w.node || j.anchorOffset !== w.offset || j.focusNode !== k.node || j.focusOffset !== k.offset) && ((x = x.createRange()).setStart(w.node, w.offset), j.removeAllRanges(), _ > S ? (j.addRange(x), j.extend(k.node, k.offset)) : (x.setEnd(k.node, k.offset), j.addRange(x))))), x = [];
                for (j = C; j = j.parentNode;) 1 === j.nodeType && x.push({
                    element: j,
                    left: j.scrollLeft,
                    top: j.scrollTop
                });
                for ("function" == typeof C.focus && C.focus(), C = 0; C < x.length; C++)(j = x[C]).element.scrollLeft = j.left, j.element.scrollTop = j.top
            }
            Oa = null, Ln = !!Ea, Ea = null, e.current = n, Ji = r;
            do {
                try {
                    for (C = a; null !== Ji;) {
                        var I = Ji.effectTag;
                        if (36 & I) {
                            var T = Ji.alternate;
                            switch (j = C, (x = Ji).tag) {
                                case 0:
                                case 11:
                                case 15:
                                    xi(16, 32, x);
                                    break;
                                case 1:
                                    var P = x.stateNode;
                                    if (4 & x.effectTag)
                                        if (null === T) P.componentDidMount();
                                        else {
                                            var M = x.elementType === x.type ? T.memoizedProps : yr(x.type, T.memoizedProps);
                                            P.componentDidUpdate(M, T.memoizedState, P.__reactInternalSnapshotBeforeUpdate)
                                        } var N = x.updateQueue;
                                    null !== N && Ur(0, N, P);
                                    break;
                                case 3:
                                    var L = x.updateQueue;
                                    if (null !== L) {
                                        if (_ = null, null !== x.child) switch (x.child.tag) {
                                            case 5:
                                                _ = x.child.stateNode;
                                                break;
                                            case 1:
                                                _ = x.child.stateNode
                                        }
                                        Ur(0, L, _)
                                    }
                                    break;
                                case 5:
                                    var R = x.stateNode;
                                    null === T && 4 & x.effectTag && (j = R, Ca(x.type, x.memoizedProps) && j.focus());
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                    break;
                                case 13:
                                case 19:
                                case 17:
                                case 20:
                                    break;
                                default:
                                    throw i(Error(163))
                            }
                        }
                        if (128 & I) {
                            var D = Ji.ref;
                            if (null !== D) {
                                var A = Ji.stateNode;
                                switch (Ji.tag) {
                                    case 5:
                                        var B = A;
                                        break;
                                    default:
                                        B = A
                                }
                                "function" == typeof D ? D(B) : D.current = B
                            }
                        }
                        512 & I && (ec = !0), Ji = Ji.nextEffect
                    }
                } catch (e) {
                    if (null === Ji) throw i(Error(330));
                    Ic(Ji, e), Ji = Ji.nextEffect
                }
            } while (null !== Ji);
            Ji = null, or(), Ui = o
        } else e.current = n;
        if (ec) ec = !1, tc = e, ac = a, nc = t;
        else
            for (Ji = r; null !== Ji;) t = Ji.nextEffect, Ji.nextEffect = null, Ji = t;
        if (0 !== (t = e.firstPendingTime) ? fc(e, I = vr(I = sc(), t), t) : $i = null, "function" == typeof Nc && Nc(n.stateNode, a), 1073741823 === t ? e === ic ? oc++ : (oc = 0, ic = e) : oc = 0, Xi) throw Xi = !1, e = Zi, Zi = null, e;
        return 0 != (8 & Ui) || br(), null
    }

    function xc() {
        if (null === tc) return !1;
        var e = tc,
            t = ac,
            n = nc;
        return tc = null, ac = 0, nc = 90, fr(97 < n ? 97 : n, jc.bind(null, e, t))
    }

    function jc(e) {
        if (0 != (48 & Ui)) throw i(Error(331));
        var t = Ui;
        for (Ui |= 32, e = e.current.firstEffect; null !== e;) {
            try {
                var n = e;
                if (0 != (512 & n.effectTag)) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        xi(128, 0, n), xi(0, 64, n)
                }
            } catch (t) {
                if (null === e) throw i(Error(330));
                Ic(e, t)
            }
            n = e.nextEffect, e.nextEffect = null, e = n
        }
        return Ui = t, br(), !0
    }

    function _c(e, t, n) {
        Rr(e, t = Ri(e, t = ki(n, t), 1073741823)), null !== (e = pc(e, 1073741823)) && fc(e, 99, 1073741823)
    }

    function Ic(e, t) {
        if (3 === e.tag) _c(e, e, t);
        else
            for (var n = e.return; null !== n;) {
                if (3 === n.tag) {
                    _c(n, e, t);
                    break
                }
                if (1 === n.tag) {
                    var a = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof a.componentDidCatch && (null === $i || !$i.has(a))) {
                        Rr(n, e = Di(n, e = ki(t, e), 1073741823)), null !== (n = pc(n, 1073741823)) && fc(n, 99, 1073741823);
                        break
                    }
                }
                n = n.return
            }
    }

    function Tc(e, t, n) {
        var a = e.pingCache;
        null !== a && a.delete(t), Vi === e && zi === n ? 3 === Wi || 2 === Wi && 1073741823 === Hi && ur() - Yi < 500 ? yc(e, zi) : Qi = !0 : e.lastPendingTime < n || (0 !== (t = e.pingTime) && t < n || (e.pingTime = n, e.finishedExpirationTime === n && (e.finishedExpirationTime = 0, e.finishedWork = null), fc(e, t = vr(t = sc(), n), n)))
    }

    function Pc(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t), n = vr(n = sc(), t = lc(n, e, null)), null !== (e = pc(e, t)) && fc(e, n, t)
    }
    var Mc = void 0;
    Mc = function(e, t, n) {
        var a = t.expirationTime;
        if (null !== e) {
            var r = t.pendingProps;
            if (e.memoizedProps !== r || Da.current) ti = !0;
            else if (a < n) {
                switch (ti = !1, t.tag) {
                    case 3:
                        ui(t), $o();
                        break;
                    case 5:
                        if (lo(t), 4 & t.mode && 1 !== n && r.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                        break;
                    case 1:
                        Ga(t.type) && Wa(t);
                        break;
                    case 4:
                        co(t, t.stateNode.containerInfo);
                        break;
                    case 10:
                        Cr(t, t.memoizedProps.value);
                        break;
                    case 13:
                        if (null !== t.memoizedState) return 0 !== (a = t.child.childExpirationTime) && a >= n ? pi(e, t, n) : (Na(po, 1 & po.current), null !== (t = hi(e, t, n)) ? t.sibling : null);
                        Na(po, 1 & po.current);
                        break;
                    case 19:
                        if (a = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                            if (a) return mi(e, t, n);
                            t.effectTag |= 64
                        }
                        if (null !== (r = t.memoizedState) && (r.rendering = null, r.tail = null), Na(po, po.current), !a) return null
                }
                return hi(e, t, n)
            }
        } else ti = !1;
        switch (t.expirationTime = 0, t.tag) {
            case 2:
                if (a = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, r = Ba(t, Ra.current), _r(t, n), r = To(null, t, a, e, r, n), t.effectTag |= 1, "object" == typeof r && null !== r && "function" == typeof r.render && void 0 === r.$$typeof) {
                    if (t.tag = 1, Po(), Ga(a)) {
                        var o = !0;
                        Wa(t)
                    } else o = !1;
                    t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null;
                    var c = a.getDerivedStateFromProps;
                    "function" == typeof c && Wr(t, a, c, e), r.updater = Hr, t.stateNode = r, r._reactInternalFiber = t, Yr(t, a, e, n), t = li(null, t, a, !0, o, n)
                } else t.tag = 0, ni(null, t, r, n), t = t.child;
                return t;
            case 16:
                switch (r = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, r = function(e) {
                        var t = e._result;
                        switch (e._status) {
                            case 1:
                                return t;
                            case 2:
                            case 0:
                                throw t;
                            default:
                                switch (e._status = 0, (t = (t = e._ctor)()).then((function(t) {
                                        0 === e._status && (t = t.default, e._status = 1, e._result = t)
                                    }), (function(t) {
                                        0 === e._status && (e._status = 2, e._result = t)
                                    })), e._status) {
                                    case 1:
                                        return e._result;
                                    case 2:
                                        throw e._result
                                }
                                throw e._result = t, t
                        }
                    }(r), t.type = r, o = t.tag = function(e) {
                        if ("function" == typeof e) return Ac(e) ? 1 : 0;
                        if (null != e) {
                            if ((e = e.$$typeof) === at) return 11;
                            if (e === it) return 14
                        }
                        return 2
                    }(r), e = yr(r, e), o) {
                    case 0:
                        t = ci(null, t, r, e, n);
                        break;
                    case 1:
                        t = si(null, t, r, e, n);
                        break;
                    case 11:
                        t = ai(null, t, r, e, n);
                        break;
                    case 14:
                        t = ri(null, t, r, yr(r.type, e), a, n);
                        break;
                    default:
                        throw i(Error(306), r, "")
                }
                return t;
            case 0:
                return a = t.type, r = t.pendingProps, ci(e, t, a, r = t.elementType === a ? r : yr(a, r), n);
            case 1:
                return a = t.type, r = t.pendingProps, si(e, t, a, r = t.elementType === a ? r : yr(a, r), n);
            case 3:
                if (ui(t), null === (a = t.updateQueue)) throw i(Error(282));
                return r = null !== (r = t.memoizedState) ? r.element : null, Gr(t, a, t.pendingProps, null, n), (a = t.memoizedState.element) === r ? ($o(), t = hi(e, t, n)) : (r = t.stateNode, (r = (null === e || null === e.child) && r.hydrate) && (qo = Ia(t.stateNode.containerInfo.firstChild), Ho = t, r = Ko = !0), r ? (t.effectTag |= 2, t.child = to(t, null, a, n)) : (ni(e, t, a, n), $o()), t = t.child), t;
            case 5:
                return lo(t), null === e && Jo(t), a = t.type, r = t.pendingProps, o = null !== e ? e.memoizedProps : null, c = r.children, xa(a, r) ? c = null : null !== o && xa(a, o) && (t.effectTag |= 16), ii(e, t), 4 & t.mode && 1 !== n && r.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (ni(e, t, c, n), t = t.child), t;
            case 6:
                return null === e && Jo(t), null;
            case 13:
                return pi(e, t, n);
            case 4:
                return co(t, t.stateNode.containerInfo), a = t.pendingProps, null === e ? t.child = eo(t, null, a, n) : ni(e, t, a, n), t.child;
            case 11:
                return a = t.type, r = t.pendingProps, ai(e, t, a, r = t.elementType === a ? r : yr(a, r), n);
            case 7:
                return ni(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return ni(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (a = t.type._context, r = t.pendingProps, c = t.memoizedProps, Cr(t, o = r.value), null !== c) {
                        var s = c.value;
                        if (0 === (o = tn(s, o) ? 0 : 0 | ("function" == typeof a._calculateChangedBits ? a._calculateChangedBits(s, o) : 1073741823))) {
                            if (c.children === r.children && !Da.current) {
                                t = hi(e, t, n);
                                break e
                            }
                        } else
                            for (null !== (s = t.child) && (s.return = t); null !== s;) {
                                var l = s.dependencies;
                                if (null !== l) {
                                    c = s.child;
                                    for (var u = l.firstContext; null !== u;) {
                                        if (u.context === a && 0 != (u.observedBits & o)) {
                                            1 === s.tag && ((u = Nr(n, null)).tag = 2, Rr(s, u)), s.expirationTime < n && (s.expirationTime = n), null !== (u = s.alternate) && u.expirationTime < n && (u.expirationTime = n), jr(s.return, n), l.expirationTime < n && (l.expirationTime = n);
                                            break
                                        }
                                        u = u.next
                                    }
                                } else c = 10 === s.tag && s.type === t.type ? null : s.child;
                                if (null !== c) c.return = s;
                                else
                                    for (c = s; null !== c;) {
                                        if (c === t) {
                                            c = null;
                                            break
                                        }
                                        if (null !== (s = c.sibling)) {
                                            s.return = c.return, c = s;
                                            break
                                        }
                                        c = c.return
                                    }
                                s = c
                            }
                    }
                    ni(e, t, r.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return r = t.type, a = (o = t.pendingProps).children, _r(t, n), a = a(r = Ir(r, o.unstable_observedBits)), t.effectTag |= 1, ni(e, t, a, n), t.child;
            case 14:
                return o = yr(r = t.type, t.pendingProps), ri(e, t, r, o = yr(r.type, o), a, n);
            case 15:
                return oi(e, t, t.type, t.pendingProps, a, n);
            case 17:
                return a = t.type, r = t.pendingProps, r = t.elementType === a ? r : yr(a, r), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, Ga(a) ? (e = !0, Wa(t)) : e = !1, _r(t, n), Kr(t, a, r), Yr(t, a, r, n), li(null, t, a, !0, e, n);
            case 19:
                return mi(e, t, n)
        }
        throw i(Error(156))
    };
    var Nc = null,
        Lc = null;

    function Rc(e, t, n, a) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function Dc(e, t, n, a) {
        return new Rc(e, t, n, a)
    }

    function Ac(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Bc(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Dc(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function Gc(e, t, n, a, r, o) {
        var c = 2;
        if (a = e, "function" == typeof e) Ac(e) && (c = 1);
        else if ("string" == typeof e) c = 5;
        else e: switch (e) {
            case Xe:
                return Uc(n.children, r, o, t);
            case nt:
                c = 8, r |= 7;
                break;
            case Ze:
                c = 8, r |= 1;
                break;
            case $e:
                return (e = Dc(12, n, t, 8 | r)).elementType = $e, e.type = $e, e.expirationTime = o, e;
            case rt:
                return (e = Dc(13, n, t, r)).type = rt, e.elementType = rt, e.expirationTime = o, e;
            case ot:
                return (e = Dc(19, n, t, r)).elementType = ot, e.expirationTime = o, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case et:
                        c = 10;
                        break e;
                    case tt:
                        c = 9;
                        break e;
                    case at:
                        c = 11;
                        break e;
                    case it:
                        c = 14;
                        break e;
                    case ct:
                        c = 16, a = null;
                        break e
                }
                throw i(Error(130), null == e ? e : typeof e, "")
        }
        return (t = Dc(c, n, t, r)).elementType = e, t.type = a, t.expirationTime = o, t
    }

    function Uc(e, t, n, a) {
        return (e = Dc(7, e, a, t)).expirationTime = n, e
    }

    function Vc(e, t, n) {
        return (e = Dc(6, e, null, t)).expirationTime = n, e
    }

    function Fc(e, t, n) {
        return (t = Dc(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function zc(e, t, n) {
        this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = this.firstBatch = null, this.pingTime = this.lastPendingTime = this.firstPendingTime = this.callbackExpirationTime = 0
    }

    function Wc(e, t, n) {
        return e = new zc(e, t, n), t = Dc(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), e.current = t, t.stateNode = e
    }

    function Hc(e, t, n, a, r, o) {
        var c = t.current;
        e: if (n) {
            t: {
                if (2 !== on(n = n._reactInternalFiber) || 1 !== n.tag) throw i(Error(170));
                var s = n;do {
                    switch (s.tag) {
                        case 3:
                            s = s.stateNode.context;
                            break t;
                        case 1:
                            if (Ga(s.type)) {
                                s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                    }
                    s = s.return
                } while (null !== s);
                throw i(Error(171))
            }
            if (1 === n.tag) {
                var l = n.type;
                if (Ga(l)) {
                    n = za(n, l, s);
                    break e
                }
            }
            n = s
        }
        else n = La;
        return null === t.context ? t.context = n : t.pendingContext = n, t = o, (r = Nr(a, r)).payload = {
            element: e
        }, null !== (t = void 0 === t ? null : t) && (r.callback = t), Rr(c, r), dc(c, a), a
    }

    function qc(e, t, n, a) {
        var r = t.current,
            o = sc(),
            i = Fr.suspense;
        return Hc(e, t, n, r = lc(o, r, i), i, a)
    }

    function Kc(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function Qc(e, t, n) {
        var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: Je,
            key: null == a ? null : "" + a,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function Yc(e) {
        var t = 1073741821 - 25 * (1 + ((1073741821 - sc() + 500) / 25 | 0));
        t <= uc && --t, this._expirationTime = uc = t, this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
    }

    function Jc() {
        this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
    }

    function Xc(e, t, n) {
        this._internalRoot = Wc(e, t, n)
    }

    function Zc(e, t) {
        this._internalRoot = Wc(e, 2, t)
    }

    function $c(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function es(e, t, n, a, r) {
        var o = n._reactRootContainer,
            i = void 0;
        if (o) {
            if (i = o._internalRoot, "function" == typeof r) {
                var c = r;
                r = function() {
                    var e = Kc(i);
                    c.call(e)
                }
            }
            qc(t, i, e, r)
        } else {
            if (o = n._reactRootContainer = function(e, t) {
                    if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                        for (var n; n = e.lastChild;) e.removeChild(n);
                    return new Xc(e, 0, t)
                }(n, a), i = o._internalRoot, "function" == typeof r) {
                var s = r;
                r = function() {
                    var e = Kc(i);
                    s.call(e)
                }
            }
            vc((function() {
                qc(t, i, e, r)
            }))
        }
        return Kc(i)
    }

    function ts(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!$c(t)) throw i(Error(200));
        return Qc(e, t, null, n)
    }
    je = function(e, t, n) {
        switch (t) {
            case "input":
                if (Ct(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var a = n[t];
                        if (a !== e && a.form === e.form) {
                            var r = G(a);
                            if (!r) throw i(Error(90));
                            He(a), Ct(a, r)
                        }
                    }
                }
                break;
            case "textarea":
                oa(e, n);
                break;
            case "select":
                null != (t = n.value) && na(e, !!n.multiple, t, !1)
        }
    }, Yc.prototype.render = function(e) {
        if (!this._defer) throw i(Error(250));
        this._hasChildren = !0, this._children = e;
        var t = this._root._internalRoot,
            n = this._expirationTime,
            a = new Jc;
        return Hc(e, t, null, n, null, a._onCommit), a
    }, Yc.prototype.then = function(e) {
        if (this._didComplete) e();
        else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e)
        }
    }, Yc.prototype.commit = function() {
        var e = this._root._internalRoot,
            t = e.firstBatch;
        if (!this._defer || null === t) throw i(Error(251));
        if (this._hasChildren) {
            var n = this._expirationTime;
            if (t !== this) {
                this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children));
                for (var a = null, r = t; r !== this;) a = r, r = r._next;
                if (null === a) throw i(Error(251));
                a._next = r._next, this._next = t, e.firstBatch = this
            }
            if (this._defer = !1, t = n, 0 != (48 & Ui)) throw i(Error(253));
            hr(Sc.bind(null, e, t)), br(), t = this._next, this._next = null, null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
        } else this._next = null, this._defer = !1
    }, Yc.prototype._onComplete = function() {
        if (!this._didComplete) {
            this._didComplete = !0;
            var e = this._callbacks;
            if (null !== e)
                for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }, Jc.prototype.then = function(e) {
        if (this._didCommit) e();
        else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e)
        }
    }, Jc.prototype._onCommit = function() {
        if (!this._didCommit) {
            this._didCommit = !0;
            var e = this._callbacks;
            if (null !== e)
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if ("function" != typeof n) throw i(Error(191), n);
                    n()
                }
        }
    }, Zc.prototype.render = Xc.prototype.render = function(e, t) {
        var n = this._internalRoot,
            a = new Jc;
        return null !== (t = void 0 === t ? null : t) && a.then(t), qc(e, n, null, a._onCommit), a
    }, Zc.prototype.unmount = Xc.prototype.unmount = function(e) {
        var t = this._internalRoot,
            n = new Jc;
        return null !== (e = void 0 === e ? null : e) && n.then(e), qc(null, t, null, n._onCommit), n
    }, Zc.prototype.createBatch = function() {
        var e = new Yc(this),
            t = e._expirationTime,
            n = this._internalRoot,
            a = n.firstBatch;
        if (null === a) n.firstBatch = e, e._next = null;
        else {
            for (n = null; null !== a && a._expirationTime >= t;) n = a, a = a._next;
            e._next = a, null !== n && (n._next = e)
        }
        return e
    }, Ne = bc, Le = gc, Re = hc, De = function(e, t) {
        var n = Ui;
        Ui |= 2;
        try {
            return e(t)
        } finally {
            0 === (Ui = n) && br()
        }
    };
    var ns, as, rs = {
        createPortal: ts,
        findDOMNode: function(e) {
            if (null == e) e = null;
            else if (1 !== e.nodeType) {
                var t = e._reactInternalFiber;
                if (void 0 === t) {
                    if ("function" == typeof e.render) throw i(Error(188));
                    throw i(Error(268), Object.keys(e))
                }
                e = null === (e = sn(t)) ? null : e.stateNode
            }
            return e
        },
        hydrate: function(e, t, n) {
            if (!$c(t)) throw i(Error(200));
            return es(null, e, t, !0, n)
        },
        render: function(e, t, n) {
            if (!$c(t)) throw i(Error(200));
            return es(null, e, t, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(e, t, n, a) {
            if (!$c(n)) throw i(Error(200));
            if (null == e || void 0 === e._reactInternalFiber) throw i(Error(38));
            return es(e, t, n, !1, a)
        },
        unmountComponentAtNode: function(e) {
            if (!$c(e)) throw i(Error(40));
            return !!e._reactRootContainer && (vc((function() {
                es(null, null, e, !1, (function() {
                    e._reactRootContainer = null
                }))
            })), !0)
        },
        unstable_createPortal: function() {
            return ts.apply(void 0, arguments)
        },
        unstable_batchedUpdates: bc,
        unstable_interactiveUpdates: function(e, t, n, a) {
            return hc(), gc(e, t, n, a)
        },
        unstable_discreteUpdates: gc,
        unstable_flushDiscreteUpdates: hc,
        flushSync: function(e, t) {
            if (0 != (48 & Ui)) throw i(Error(187));
            var n = Ui;
            Ui |= 1;
            try {
                return fr(99, e.bind(null, t))
            } finally {
                Ui = n, br()
            }
        },
        unstable_createRoot: function(e, t) {
            if (!$c(e)) throw i(Error(299), "unstable_createRoot");
            return new Zc(e, null != t && !0 === t.hydrate)
        },
        unstable_createSyncRoot: function(e, t) {
            if (!$c(e)) throw i(Error(299), "unstable_createRoot");
            return new Xc(e, 1, null != t && !0 === t.hydrate)
        },
        unstable_flushControlled: function(e) {
            var t = Ui;
            Ui |= 1;
            try {
                fr(99, e)
            } finally {
                0 === (Ui = t) && br()
            }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [A, B, G, P.injectEventPluginsByName, p, H, function(e) {
                j(e, W)
            }, Pe, Me, Gn, T, xc, {
                current: !1
            }]
        }
    };
    as = (ns = {
            findFiberByHostInstance: D,
            bundleType: 0,
            version: "16.9.0",
            rendererPackageName: "react-dom"
        }).findFiberByHostInstance,
        function(e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
                var n = t.inject(e);
                Nc = function(e) {
                    try {
                        t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                    } catch (e) {}
                }, Lc = function(e) {
                    try {
                        t.onCommitFiberUnmount(n, e)
                    } catch (e) {}
                }
            } catch (e) {}
        }(r({}, ns, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: qe.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return null === (e = sn(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: function(e) {
                return as ? as(e) : null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        }));
    var os = {
            default: rs
        },
        is = os && rs || os;
    e.exports = is.default || is
}, function(e, t, n) {
    "use strict";
    /** @license React v16.9.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var a = n(147),
        r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        c = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        l = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        d = r ? Symbol.for("react.context") : 60110,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        f = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        h = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116;
    r && Symbol.for("react.fundamental"), r && Symbol.for("react.responder");
    var g = "function" == typeof Symbol && Symbol.iterator;

    function v(e) {
        for (var t = e.message, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, a = 1; a < arguments.length; a++) n += "&args[]=" + encodeURIComponent(arguments[a]);
        return e.message = "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e
    }
    var y = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        S = {};

    function w(e, t, n) {
        this.props = e, this.context = t, this.refs = S, this.updater = n || y
    }

    function k() {}

    function E(e, t, n) {
        this.props = e, this.context = t, this.refs = S, this.updater = n || y
    }
    w.prototype.isReactComponent = {}, w.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw v(Error(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, k.prototype = w.prototype;
    var O = E.prototype = new k;
    O.constructor = E, a(O, w.prototype), O.isPureReactComponent = !0;
    var C = {
            current: null
        },
        x = {
            suspense: null
        },
        j = {
            current: null
        },
        _ = Object.prototype.hasOwnProperty,
        I = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function T(e, t, n) {
        var a = void 0,
            r = {},
            i = null,
            c = null;
        if (null != t)
            for (a in void 0 !== t.ref && (c = t.ref), void 0 !== t.key && (i = "" + t.key), t) _.call(t, a) && !I.hasOwnProperty(a) && (r[a] = t[a]);
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
            for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
            r.children = l
        }
        if (e && e.defaultProps)
            for (a in s = e.defaultProps) void 0 === r[a] && (r[a] = s[a]);
        return {
            $$typeof: o,
            type: e,
            key: i,
            ref: c,
            props: r,
            _owner: j.current
        }
    }

    function P(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }
    var M = /\/+/g,
        N = [];

    function L(e, t, n, a) {
        if (N.length) {
            var r = N.pop();
            return r.result = e, r.keyPrefix = t, r.func = n, r.context = a, r.count = 0, r
        }
        return {
            result: e,
            keyPrefix: t,
            func: n,
            context: a,
            count: 0
        }
    }

    function R(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > N.length && N.push(e)
    }

    function D(e, t, n) {
        return null == e ? 0 : function e(t, n, a, r) {
            var c = typeof t;
            "undefined" !== c && "boolean" !== c || (t = null);
            var s = !1;
            if (null === t) s = !0;
            else switch (c) {
                case "string":
                case "number":
                    s = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case o:
                        case i:
                            s = !0
                    }
            }
            if (s) return a(r, t, "" === n ? "." + A(t, 0) : n), 1;
            if (s = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
                for (var l = 0; l < t.length; l++) {
                    var u = n + A(c = t[l], l);
                    s += e(c, u, a, r)
                } else if (null === t || "object" != typeof t ? u = null : u = "function" == typeof(u = g && t[g] || t["@@iterator"]) ? u : null, "function" == typeof u)
                    for (t = u.call(t), l = 0; !(c = t.next()).done;) s += e(c = c.value, u = n + A(c, l++), a, r);
                else if ("object" === c) throw a = "" + t, v(Error(31), "[object Object]" === a ? "object with keys {" + Object.keys(t).join(", ") + "}" : a, "");
            return s
        }(e, "", t, n)
    }

    function A(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, (function(e) {
                return t[e]
            }))
        }(e.key) : t.toString(36)
    }

    function B(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function G(e, t, n) {
        var a = e.result,
            r = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? U(e, a, n, (function(e) {
            return e
        })) : null != e && (P(e) && (e = function(e, t) {
            return {
                $$typeof: o,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(e, r + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(M, "$&/") + "/") + n)), a.push(e))
    }

    function U(e, t, n, a, r) {
        var o = "";
        null != n && (o = ("" + n).replace(M, "$&/") + "/"), D(e, G, t = L(t, o, a, r)), R(t)
    }

    function V() {
        var e = C.current;
        if (null === e) throw v(Error(321));
        return e
    }
    var F = {
            Children: {
                map: function(e, t, n) {
                    if (null == e) return e;
                    var a = [];
                    return U(e, a, null, t, n), a
                },
                forEach: function(e, t, n) {
                    if (null == e) return e;
                    D(e, B, t = L(null, null, t, n)), R(t)
                },
                count: function(e) {
                    return D(e, (function() {
                        return null
                    }), null)
                },
                toArray: function(e) {
                    var t = [];
                    return U(e, t, null, (function(e) {
                        return e
                    })), t
                },
                only: function(e) {
                    if (!P(e)) throw v(Error(143));
                    return e
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: w,
            PureComponent: E,
            createContext: function(e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: d,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: u,
                    _context: e
                }, e.Consumer = e
            },
            forwardRef: function(e) {
                return {
                    $$typeof: p,
                    render: e
                }
            },
            lazy: function(e) {
                return {
                    $$typeof: b,
                    _ctor: e,
                    _status: -1,
                    _result: null
                }
            },
            memo: function(e, t) {
                return {
                    $$typeof: h,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            },
            useCallback: function(e, t) {
                return V().useCallback(e, t)
            },
            useContext: function(e, t) {
                return V().useContext(e, t)
            },
            useEffect: function(e, t) {
                return V().useEffect(e, t)
            },
            useImperativeHandle: function(e, t, n) {
                return V().useImperativeHandle(e, t, n)
            },
            useDebugValue: function() {},
            useLayoutEffect: function(e, t) {
                return V().useLayoutEffect(e, t)
            },
            useMemo: function(e, t) {
                return V().useMemo(e, t)
            },
            useReducer: function(e, t, n) {
                return V().useReducer(e, t, n)
            },
            useRef: function(e) {
                return V().useRef(e)
            },
            useState: function(e) {
                return V().useState(e)
            },
            Fragment: c,
            Profiler: l,
            StrictMode: s,
            Suspense: f,
            unstable_SuspenseList: m,
            createElement: T,
            cloneElement: function(e, t, n) {
                if (null == e) throw v(Error(267), e);
                var r = void 0,
                    i = a({}, e.props),
                    c = e.key,
                    s = e.ref,
                    l = e._owner;
                if (null != t) {
                    void 0 !== t.ref && (s = t.ref, l = j.current), void 0 !== t.key && (c = "" + t.key);
                    var u = void 0;
                    for (r in e.type && e.type.defaultProps && (u = e.type.defaultProps), t) _.call(t, r) && !I.hasOwnProperty(r) && (i[r] = void 0 === t[r] && void 0 !== u ? u[r] : t[r])
                }
                if (1 === (r = arguments.length - 2)) i.children = n;
                else if (1 < r) {
                    u = Array(r);
                    for (var d = 0; d < r; d++) u[d] = arguments[d + 2];
                    i.children = u
                }
                return {
                    $$typeof: o,
                    type: e.type,
                    key: c,
                    ref: s,
                    props: i,
                    _owner: l
                }
            },
            createFactory: function(e) {
                var t = T.bind(null, e);
                return t.type = e, t
            },
            isValidElement: P,
            version: "16.9.0",
            unstable_withSuspenseConfig: function(e, t) {
                var n = x.suspense;
                x.suspense = void 0 === t ? null : t;
                try {
                    e()
                } finally {
                    x.suspense = n
                }
            },
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: C,
                ReactCurrentBatchConfig: x,
                ReactCurrentOwner: j,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: a
            }
        },
        z = {
            default: F
        },
        W = z && F || z;
    e.exports = W.default || W
}, function(e, t, n) {
    "use strict";
    e.exports = n(261)
}, function(e, t, n) {
    "use strict";
    /** @license React v0.15.0
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = void 0,
        r = void 0,
        o = void 0,
        i = void 0,
        c = void 0;
    if (t.unstable_now = void 0, t.unstable_forceFrameRate = void 0, "undefined" == typeof window || "function" != typeof MessageChannel) {
        var s = null,
            l = null,
            u = function() {
                if (null !== s) try {
                    var e = t.unstable_now();
                    s(!0, e), s = null
                } catch (e) {
                    throw setTimeout(u, 0), e
                }
            };
        t.unstable_now = function() {
            return Date.now()
        }, a = function(e) {
            null !== s ? setTimeout(a, 0, e) : (s = e, setTimeout(u, 0))
        }, r = function(e, t) {
            l = setTimeout(e, t)
        }, o = function() {
            clearTimeout(l)
        }, i = function() {
            return !1
        }, c = t.unstable_forceFrameRate = function() {}
    } else {
        var d = window.performance,
            p = window.Date,
            f = window.setTimeout,
            m = window.clearTimeout,
            h = window.requestAnimationFrame,
            b = window.cancelAnimationFrame;
        "undefined" != typeof console && ("function" != typeof h && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof b && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")), t.unstable_now = "object" == typeof d && "function" == typeof d.now ? function() {
            return d.now()
        } : function() {
            return p.now()
        };
        var g = !1,
            v = null,
            y = -1,
            S = -1,
            w = 33.33,
            k = -1,
            E = -1,
            O = 0,
            C = !1;
        i = function() {
            return t.unstable_now() >= O
        }, c = function() {}, t.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : 0 < e ? (w = Math.floor(1e3 / e), C = !0) : (w = 33.33, C = !1)
        };
        var x = function() {
                if (null !== v) {
                    var e = t.unstable_now(),
                        n = 0 < O - e;
                    try {
                        v(n, e) || (v = null)
                    } catch (e) {
                        throw _.postMessage(null), e
                    }
                }
            },
            j = new MessageChannel,
            _ = j.port2;
        j.port1.onmessage = x;
        var I = function(e) {
            if (null === v) E = k = -1, g = !1;
            else {
                g = !0, h((function(e) {
                    m(y), I(e)
                }));
                var n = function() {
                    O = t.unstable_now() + w / 2, x(), y = f(n, 3 * w)
                };
                if (y = f(n, 3 * w), -1 !== k && .1 < e - k) {
                    var a = e - k;
                    !C && -1 !== E && a < w && E < w && (8.33 > (w = a < E ? E : a) && (w = 8.33)), E = a
                }
                k = e, O = e + w, _.postMessage(null)
            }
        };
        a = function(e) {
            v = e, g || (g = !0, h((function(e) {
                I(e)
            })))
        }, r = function(e, n) {
            S = f((function() {
                e(t.unstable_now())
            }), n)
        }, o = function() {
            m(S), S = -1
        }
    }
    var T = null,
        P = null,
        M = null,
        N = 3,
        L = !1,
        R = !1,
        D = !1;

    function A(e, t) {
        var n = e.next;
        if (n === e) T = null;
        else {
            e === T && (T = n);
            var a = e.previous;
            a.next = n, n.previous = a
        }
        e.next = e.previous = null, n = e.callback, a = N;
        var r = M;
        N = e.priorityLevel, M = e;
        try {
            var o = e.expirationTime <= t;
            switch (N) {
                case 1:
                    var i = n(o);
                    break;
                case 2:
                case 3:
                case 4:
                    i = n(o);
                    break;
                case 5:
                    i = n(o)
            }
        } catch (e) {
            throw e
        } finally {
            N = a, M = r
        }
        if ("function" == typeof i)
            if (t = e.expirationTime, e.callback = i, null === T) T = e.next = e.previous = e;
            else {
                i = null, o = T;
                do {
                    if (t <= o.expirationTime) {
                        i = o;
                        break
                    }
                    o = o.next
                } while (o !== T);
                null === i ? i = T : i === T && (T = e), (t = i.previous).next = i.previous = e, e.next = i, e.previous = t
            }
    }

    function B(e) {
        if (null !== P && P.startTime <= e)
            do {
                var t = P,
                    n = t.next;
                if (t === n) P = null;
                else {
                    P = n;
                    var a = t.previous;
                    a.next = n, n.previous = a
                }
                t.next = t.previous = null, F(t, t.expirationTime)
            } while (null !== P && P.startTime <= e)
    }

    function G(e) {
        D = !1, B(e), R || (null !== T ? (R = !0, a(U)) : null !== P && r(G, P.startTime - e))
    }

    function U(e, n) {
        R = !1, D && (D = !1, o()), B(n), L = !0;
        try {
            if (e) {
                if (null !== T)
                    do {
                        A(T, n), B(n = t.unstable_now())
                    } while (null !== T && !i())
            } else
                for (; null !== T && T.expirationTime <= n;) A(T, n), B(n = t.unstable_now());
            return null !== T || (null !== P && r(G, P.startTime - n), !1)
        } finally {
            L = !1
        }
    }

    function V(e) {
        switch (e) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1e4;
            default:
                return 5e3
        }
    }

    function F(e, t) {
        if (null === T) T = e.next = e.previous = e;
        else {
            var n = null,
                a = T;
            do {
                if (t < a.expirationTime) {
                    n = a;
                    break
                }
                a = a.next
            } while (a !== T);
            null === n ? n = T : n === T && (T = e), (t = n.previous).next = n.previous = e, e.next = n, e.previous = t
        }
    }
    var z = c;
    t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = N;
        N = e;
        try {
            return t()
        } finally {
            N = n
        }
    }, t.unstable_next = function(e) {
        switch (N) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = N
        }
        var n = N;
        N = t;
        try {
            return e()
        } finally {
            N = n
        }
    }, t.unstable_scheduleCallback = function(e, n, i) {
        var c = t.unstable_now();
        if ("object" == typeof i && null !== i) {
            var s = i.delay;
            s = "number" == typeof s && 0 < s ? c + s : c, i = "number" == typeof i.timeout ? i.timeout : V(e)
        } else i = V(e), s = c;
        if (e = {
                callback: n,
                priorityLevel: e,
                startTime: s,
                expirationTime: i = s + i,
                next: null,
                previous: null
            }, s > c) {
            if (i = s, null === P) P = e.next = e.previous = e;
            else {
                n = null;
                var l = P;
                do {
                    if (i < l.startTime) {
                        n = l;
                        break
                    }
                    l = l.next
                } while (l !== P);
                null === n ? n = P : n === P && (P = e), (i = n.previous).next = n.previous = e, e.next = n, e.previous = i
            }
            null === T && P === e && (D ? o() : D = !0, r(G, s - c))
        } else F(e, i), R || L || (R = !0, a(U));
        return e
    }, t.unstable_cancelCallback = function(e) {
        var t = e.next;
        if (null !== t) {
            if (e === t) e === T ? T = null : e === P && (P = null);
            else {
                e === T ? T = t : e === P && (P = t);
                var n = e.previous;
                n.next = t, t.previous = n
            }
            e.next = e.previous = null
        }
    }, t.unstable_wrapCallback = function(e) {
        var t = N;
        return function() {
            var n = N;
            N = t;
            try {
                return e.apply(this, arguments)
            } finally {
                N = n
            }
        }
    }, t.unstable_getCurrentPriorityLevel = function() {
        return N
    }, t.unstable_shouldYield = function() {
        var e = t.unstable_now();
        return B(e), null !== M && null !== T && T.startTime <= e && T.expirationTime < M.expirationTime || i()
    }, t.unstable_requestPaint = z, t.unstable_continueExecution = function() {
        R || L || (R = !0, a(U))
    }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() {
        return T
    }
}, function(e, t, n) {
    "use strict";
    n(263), n(264)
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    e.exports = function(e, t, a) {
        return t && n(e.prototype, t), a && n(e, a), e
    }
}, function(e, t, n) {
    var a = n(148),
        r = n(268);
    e.exports = function(e, t) {
        return !t || "object" !== a(t) && "function" != typeof t ? r(e) : t
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function(e, t) {
    function n(t) {
        return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(t)
    }
    e.exports = n
}, function(e, t, n) {
    var a = n(271);
    e.exports = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && a(e, t)
    }
}, function(e, t) {
    function n(t, a) {
        return e.exports = n = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, n(t, a)
    }
    e.exports = n
}, function(e, t, n) {
    var a = n(273);
    e.exports = function(e, t) {
        if (null == e) return {};
        var n, r, o = a(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if (null == e) return {};
        var n, a, r = {},
            o = Object.keys(e);
        for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
    }
}, function(e, t) {
    function n() {
        return e.exports = n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }, n.apply(this, arguments)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var a = n(276);

    function r() {}

    function o() {}
    o.resetWarningCache = r, e.exports = function() {
        function e(e, t, n, r, o, i) {
            if (i !== a) {
                var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw c.name = "Invariant Violation", c
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: r
        };
        return n.PropTypes = n, n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
    "use strict";
    var a = function() {};
    e.exports = a
}, function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
    }, e.exports = t.default
}, function(e, t, n) {
    e.exports = {
        main: "Q1z9AR7Cr2d5GGWa5LLQh",
        item: "_1hChcAfHTkzCWLl8UD9quV"
    }
}, function(e, t, n) {
    e.exports = {
        viewport: "c7tzvc5_Fi6ZLrY-B-ovm",
        scroller: "agsszp1u2RxhZvYm45bnh"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3JJJNxNPguGPw2Vgmw3v-X",
        content: "tSDwAq115oh2kYqnGlKi6"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3A7JFM-Pq431WAno66rOUf",
        boxShadowedMain: "pp8QjZkoAi6BxS4PcZlD-"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2zA_9TCUzAlV2FvLEhCenf",
        btn: "_2Vmvbvv9T6XDhLirHvqr1Q"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3_8ZloBRnBRCV3kzw72hKT",
        content: "_1J9OFHPr79y-2FMt0156yY"
    }
}, function(e, t, n) {
    e.exports = {
        main: "a99hNtbjjpN1vhre3n634",
        onlyMain: "_3uhpkH5TNK4PWr5SNJyFfN"
    }
}, function(e, t, n) {
    e.exports = {
        viewport: "_2Slc_ItN_H4KLW42aqcyZ3",
        scroller: "_2GIIFYQcvv3EvjDQOWjrVb"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2sf_i1ccBjZxoRwOmbJatP",
        title: "_1lqkmrBWSxdI_6TCUn0jA0"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2XeVl9R5Gce9yztGbNgHnN",
        checkedMain: "_377NaIHu78-7sXT6RV9B-i"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3lysqh2cFe-ObL1dB1oZo9",
        content: "E78HJE1-TlQsS5HycKdXe"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2nHVYG_IilIst5R-IyHdyN",
        closeBtn: "_3a-1HwKBDPQXHD8Usv9ZYu"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1J4zPYkztU39CKzcn34shu",
        icon: "_37KSZAlIraHxywReHeSsZv"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2KtTHA0MZEbIyIE3s_Th4D",
        content: "_3xsL36rjq1c9PWdlTOSHxR"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2eiZbjOaOJ_94p4e82rN0B",
        inputtedMain: "_3KPHUQj0sZLBCzWRz4fVM0"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1MefIG3tDGOceWFVl7-cwW",
        content: "_3zJ3nVzLHgVdL4anjoFM6r"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3ZYp5IYz_5cxY3pTtt-Dwz",
        content: "_1wMZbXh_xCuWVIL6g71d6R"
    }
}, function(e, t, n) {
    e.exports = {
        main: "GghFTPguKx5RjRVQGTsHF",
        periodText: "_3Pj_jk6JUGsNqgiD3h3Yzl"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_eN_luj0A0qzaipDUV41q",
        content: "QLtJBfx_ODKE4wSQFUqXe"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3HEXG0KCO3kkmipWxvTUuv",
        content: "_2BfMudfHL1DYQzZJMsRgcZ"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3ZrCotOD1StNxY3D1EViQy",
        content: "ggFUN4VJDkzZ-JqN7wbYp"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3lhahqzxvKOu0caNuWZGt0",
        enabledMain: "_1hDItEuvdSlCeo3e85xPyE"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1e4BXM40elNaH27VWgfXDl",
        checkedMain: "qBqLMg2kmSJANtvS_2Dja"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3MSBROldVmuCGwg_Mi3172"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1AdBi01T2hgqUQX0JbEqcT",
        erroredLabel: "_1C33c1d0pb0g9jvKK0YLH_"
    }
}, , , function(e, t, n) {
    e.exports = {
        main: "_35HhIvtSJXNkUdZfljbXFS"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3uiK5BPafoq-BseRkYSXKn"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3P1bSogdK_Q_8gQkfTgntg"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3q9feXVY5yLuzJ8gb-sbtg"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1o7QBiiJrL4IlvIH87bNz3"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2hGw0_MjZckoBS4oefCqMx"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1MJY-Ge91mnubhpsQ5UndO"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_25G7kX1KOo74KPj9kDtWNd"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3M-Z9eAYOid3fRN59qtR3b"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_23RWBubtMNGaToPlLiaXY4"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/gearIcon.7438a962.svg"
}, function(e, t, n) {
    e.exports = {
        main: "OwCFtBp9fwkRVyrpep9zh"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2BQmCzCZYqi4c2trb1ak_-"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2ICPMN9XVmU18Y_JJZ9c4e"
    }
}, function(e, t, n) {
    e.exports = {
        main: "qWUcxLl6TU59iRwOsEziL"
    }
}, function(e, t, n) {
    e.exports = {
        main: "CPTJfZkQrmnat4M21pLLC"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1kZUZZF5XKjSS0KCKH5fah"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2enky6tOXQjksSbcrXucdU"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1PhtasvB5B52gTUT4V7bj7"
    }
}, function(e, t, n) {
    e.exports = {
        main: "HLjnN6SM0J0fMHI9_Wef1"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/leftIcon.c76486a1.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_2y_D1MyLwypPOWipdevf9s"
    }
}, function(e, t, n) {
    e.exports = {
        main: "iyj3QVDmBd94gyacaR22n"
    }
}, function(e, t, n) {
    e.exports = {
        main: "q423iDHIrcFDsqyDk_28s",
        content: "_1ne7cuQiq1EUREaQ0GWaTp"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3L0wuOfdIJvI6afMPdH8Jj"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/appSettingModalThemeAndWallpaperPanelThemeCardBrightThemeImage.36cb3ece.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/appSettingModalThemeAndWallpaperPanelThemeCardDarkThemeImage.d5761242.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppSettingModalThemeAndWallpaperPanelSidebarCardLeftSideCollapsedSidebarLayoutImage.42a4a35a.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppSettingModalThemeAndWallpaperPanelSidebarCardLeftSideSidebarLayoutImage.d4f0d971.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppSettingModalThemeAndWallpaperPanelSidebarCardRightSideCollapsedSidebarLayoutImage.992c7476.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppSettingModalThemeAndWallpaperPanelSidebarCardRightSideSidebarLayoutImage.992ffd31.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppSettingModalThemeAndWallpaperPanelSidebarCardLeftSideCollapsedSidebarLayoutImage.da49a426.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppSettingModalThemeAndWallpaperPanelSidebarCardLeftSideSidebarLayoutImage.950bd2ff.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppSettingModalThemeAndWallpaperPanelSidebarCardRightSideCollapsedSidebarLayoutImage.c9e89207.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppSettingModalThemeAndWallpaperPanelSidebarCardRightSideSidebarLayoutImage.a778c316.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppSettingModalThemeAndWallpaperPanelWallpaperCardLibBackgroundPlaceholderImage.af7f214e.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppSettingModalThemeAndWallpaperPanelWallpaperCardLibBackgroundPlaceholderImage.dc738b7c.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_1coYB-b3i5qDnq0_hJU67x",
        content: "_16ACMQot6MtM8ThGhjhPIh"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppSettingModalAppearancePanelMainViewCardPresetLayout0Image.a94836dc.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppSettingModalAppearancePanelMainViewCardPresetLayout1Image.5ce367a1.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppSettingModalAppearancePanelMainViewCardPresetLayout2Image.a7e73b8f.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppSettingModalAppearancePanelMainViewCardPresetLayout3Image.2d589647.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppSettingModalAppearancePanelMainViewCardPresetLayout0Image.7b1285b1.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppSettingModalAppearancePanelMainViewCardPresetLayout1Image.d109736e.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppSettingModalAppearancePanelMainViewCardPresetLayout2Image.9c3b8b78.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppSettingModalAppearancePanelMainViewCardPresetLayout3Image.84e26717.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_1_TcPtQvzlziv2HNnjDehZ"
    }
}, function(e, t, n) {
    e.exports = {
        main: "FBWU9Sgr0prlvPqRKTXfe"
    }
}, function(e, t, n) {
    e.exports = {
        main: "itBTDQSmNx8sb2015A2Jz"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2palDra2IMV87vWiDktFck"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2vUxZUR0KXbvKADNzRFEqR"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2MIbHqd_qD2ziATbFZ-e_D",
        content: "Hjo20FVnpvziBBSGhJr7M"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_7vOsQnmuhQHdwrN6bLYFN"
    }
}, function(e, t, n) {
    e.exports = {
        modal: "_2ZUtEDwbpud6p9MqL_BOCu"
    }
}, function(e, t, n) {
    e.exports = {
        main: "FiZiEyqCk6qUF66miXe2S"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3egj9UYtpAXXsZ_KK4K0xw"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/appAdjustIconsViewModalSimpleIconLayoutImage.a82f507c.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/appAdjustIconsViewModalParticularIconLayoutImage.4d095bbe.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_1gp8OAZQDZznjU02bZISug"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2M6IcNxrFiGnOavVkZIgps"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1xwO4D95Y8PgwKPCG60pNJ"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/zoomInIcon.a1b1f310.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/zoomOutIcon.20f2ec3b.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/resetIcon.7a1d8c1e.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_3AkX42bdesjkXr89_nCw6F"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_15UQlbS5F9a9kvTGbD4UGR"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3QtDimtNT_5XJRvb79HdOO"
    }
}, function(e, t, n) {
    e.exports = {
        main: "hXBqkM3f2U20a399cwaEh"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2Tie_0hhXm89jOOpN32zjN"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1RxYZLIVyS908zVVMO9MLv"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3JPL7GunzVPPQMBP1vrnb9"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3gWiPsoloyXm9jiQcuMDac"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2SrEsk1x-mTlhZlwozGhCZ"
    }
}, function(e, t, n) {
    e.exports = {
        main: "sLK48928GRA1SmL5zIhgO"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_32enUatZBQ1z4rUtwkBgh8"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3fMEjBdFrIqnNfPCUvcRMo"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/mouseIcon.2c2bac8d.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_2HFY8pdCrD8sLi9iIvmtC5"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_19v6IuhQY_kwbPXQI0Z1TB"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3R44nQqDvZMDAF0lpLhiY3"
    }
}, function(e, t, n) {
    e.exports = {
        main: "JQLYWawzc7wOSFKY20wJR"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_1HoxssV2AUdUedpP9ToPr7"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/uiMessagesCheckIcon.116ae41a.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/uiMessagesExclamationIcon.41d56716.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/uiMessagesInfoIcon.9035c5e5.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_3kOnzN8M5xX5R-MP3Jxk0n"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_23FZBYGHc9fIdeT2DYCWOl"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3huPJBnhOOK4g6ISW3zv0S"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3fzROqILopd7tSnX9RoUKk"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_2VDwSQ8aNp6hlGTRxxD5u7"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/starOutlinedIcon.916d7b67.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/starFilledIcon.d62ef958.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppTodosModalEmptyImage.45128bcf.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppTodosModalEmptyImage.8b94497f.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/brightThemeAppTodosModalImportantEmptyImage.6efd89d3.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/darkThemeAppTodosModalImportantEmptyImage.ceae86ef.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/dustbinIcon.797ef6fd.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_2sFLuyQRxBBdP205bc68xK"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_26xbdurq1aYY-GYN2d970-"
    }
}, function(e, t, n) {
    e.exports = {
        main: "uVyoTKKLFFW2sfl5FA-G2"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_37KCIJZ8_2TT0eScqFTpAB"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/sheildIcon.107e9cc8.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_3ED-lXjXByDXqUZK2Oe0cI"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3rK65oS67oGft2gHt__M4V"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3kJsPFzFF4xAKAVkhKz3ui",
        scroller: "_1-DAt4-fohMLDNwggbePCF"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3KEDYxuDYcla5BY2Wf1nlv"
    }
}, function(e, t, n) {
    e.exports = n.p + "asset/media/folderIcon.e17b83e1.svg"
}, function(e, t, n) {
    e.exports = n.p + "asset/media/windowIcon.660f1767.svg"
}, function(e, t, n) {
    e.exports = {
        main: "_16zFJXjdnWlTk3gZtmPEt_"
    }
}, function(e, t, n) {
    e.exports = {
        main: "_3_f3Sxycscht8eFFIu-6eM"
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var a, r = n(1),
        o = n(41);
    ! function(e) {
        e[e.PresetLayout0 = 0] = "PresetLayout0", e[e.PresetLayout1 = 1] = "PresetLayout1", e[e.PresetLayout2 = 2] = "PresetLayout2", e[e.PresetLayout3 = 3] = "PresetLayout3"
    }(a || (a = {}));
    var i = a,
        c = n(32);

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }).apply(this, arguments)
    }

    function l(e, t) {
        if (e.length !== t.length) throw new Error("vectors must be same length");
        return e.map((function(e, n) {
            return e + t[n]
        }))
    }

    function u(e) {
        return Math.max.apply(Math, e.map(Math.abs))
    }

    function d(e) {
        return Object.freeze(e), Object.values(e).forEach((function(e) {
            null === e || "object" != typeof e || Object.isFrozen(e) || d(e)
        })), e
    }
    var p = [1, 18, "undefined" != typeof window && window.innerHeight || 800];
    var f = [-1, -1, -1];
    var m = function(e) {
            return s({}, e, {
                axisDelta: e.axisDelta.map((function(e) {
                    return t = e, n = -700, a = 700, Math.min(Math.max(n, t), a);
                    var t, n, a
                }))
            })
        },
        h = d({
            preventWheelAction: !0,
            reverseSign: [!0, !0, !1]
        });
    var b, g = function(e) {
        void 0 === e && (e = {});
        var t, n, a, r = function() {
                var e = {};

                function t(t, n) {
                    e[t] = (e[t] || []).filter((function(e) {
                        return e !== n
                    }))
                }
                return d({
                    on: function(n, a) {
                        return e[n] = (e[n] || []).concat(a),
                            function() {
                                return t(n, a)
                            }
                    },
                    off: t,
                    dispatch: function(t, n) {
                        t in e && e[t].forEach((function(e) {
                            return e(n)
                        }))
                    }
                })
            }(),
            o = r.on,
            i = r.off,
            c = r.dispatch,
            b = h,
            g = {
                isStarted: !1,
                isStartPublished: !1,
                isMomentum: !1,
                startTime: 0,
                lastAbsDelta: 1 / 0,
                axisMovement: [0, 0, 0],
                axisVelocity: [0, 0, 0],
                accelerationFactors: [],
                scrollPoints: [],
                scrollPointsToMerge: [],
                willEndTimeout: 400
            },
            v = !1,
            y = function(e) {
                Array.isArray(e) ? e.forEach((function(e) {
                    return k(e)
                })) : k(e)
            },
            S = function(e) {
                return void 0 === e && (e = {}), Object.values(e).some((function(e) {
                    return null == e
                })) ? b : b = d(s({}, h, {}, b, {}, e))
            },
            w = function(e) {
                var a = s({
                    event: t,
                    isStart: !1,
                    isEnding: !1,
                    isMomentumCancel: !1,
                    isMomentum: g.isMomentum,
                    axisDelta: [0, 0, 0],
                    axisVelocity: g.axisVelocity,
                    axisMovement: g.axisMovement,
                    get axisMovementProjection() {
                        return l(a.axisMovement, a.axisVelocity.map((function(e) {
                            return void 0 === t && (t = .996), e * t / (1 - t);
                            var t
                        })))
                    }
                }, e);
                c("wheel", s({}, a, {
                    previous: n
                })), n = a
            },
            k = function(e) {
                var n, a, r, o, i = m(function(e, t) {
                        if (!t) return e;
                        var n = !0 === t ? f : t.map((function(e) {
                            return e ? -1 : 1
                        }));
                        return s({}, e, {
                            axisDelta: e.axisDelta.map((function(e, t) {
                                return e * n[t]
                            }))
                        })
                    }((a = (n = e).deltaX * p[n.deltaMode], r = n.deltaY * p[n.deltaMode], o = (n.deltaZ || 0) * p[n.deltaMode], {
                        timeStamp: n.timeStamp,
                        axisDelta: [a, r, o]
                    }), b.reverseSign)),
                    c = i.axisDelta,
                    d = i.timeStamp,
                    h = u(c);
                e.preventDefault && function(e, t) {
                    var n = b.preventWheelAction,
                        a = t[0],
                        r = t[1],
                        o = t[2];
                    if ("boolean" == typeof n) return n;
                    switch (n) {
                        case "x":
                            return Math.abs(a) >= e;
                        case "y":
                            return Math.abs(r) >= e;
                        case "z":
                            return Math.abs(o) >= e;
                        default:
                            return !1
                    }
                }(h, c) && e.preventDefault(), g.isStarted ? g.isMomentum && h > Math.max(2, 2 * g.lastAbsDelta) && (M(!0), T()) : T(), 0 === h && Object.is && Object.is(e.deltaX, -0) ? v = !0 : (t = e, g.axisMovement = l(g.axisMovement, c), g.lastAbsDelta = h, g.scrollPointsToMerge.push({
                    axisDelta: c,
                    timeStamp: d
                }), E(), w({
                    axisDelta: c,
                    isStart: !g.isStartPublished
                }), g.isStartPublished = !0, P())
            },
            E = function() {
                var e;
                2 === g.scrollPointsToMerge.length ? (g.scrollPoints.unshift({
                    axisDeltaSum: g.scrollPointsToMerge.map((function(e) {
                        return e.axisDelta
                    })).reduce(l),
                    timeStamp: (e = g.scrollPointsToMerge.map((function(e) {
                        return e.timeStamp
                    })), e.reduce((function(e, t) {
                        return e + t
                    })) / e.length)
                }), C(), g.scrollPointsToMerge.length = 0, g.scrollPoints.length = 1, g.isMomentum || _()) : g.isStartPublished || O()
            },
            O = function() {
                var e;
                g.axisVelocity = (e = g.scrollPointsToMerge, e[e.length - 1]).axisDelta.map((function(e) {
                    return e / g.willEndTimeout
                }))
            },
            C = function() {
                var e = g.scrollPoints,
                    t = e[0],
                    n = e[1];
                if (n && t) {
                    var a = t.timeStamp - n.timeStamp;
                    if (!(a <= 0)) {
                        var r = t.axisDeltaSum.map((function(e) {
                                return e / a
                            })),
                            o = r.map((function(e, t) {
                                return e / (g.axisVelocity[t] || 1)
                            }));
                        g.axisVelocity = r, g.accelerationFactors.push(o), x(a)
                    }
                }
            },
            x = function(e) {
                var t = 10 * Math.ceil(e / 10) * 1.2;
                g.isMomentum || (t = Math.max(100, 2 * t)), g.willEndTimeout = Math.min(1e3, Math.round(t))
            },
            j = function(e) {
                return 0 === e || e <= .96 && e >= .6
            },
            _ = function() {
                if (g.accelerationFactors.length >= 5) {
                    if (v && (v = !1, u(g.axisVelocity) >= .2)) return void I();
                    var e = g.accelerationFactors.slice(-5);
                    e.every((function(e) {
                        var t = !!e.reduce((function(e, t) {
                                return e && e < 1 && e === t ? 1 : 0
                            })),
                            n = e.filter(j).length === e.length;
                        return t || n
                    })) && I(), g.accelerationFactors = e
                }
            },
            I = function() {
                g.isMomentum = !0
            },
            T = function() {
                (g = {
                    isStarted: !1,
                    isStartPublished: !1,
                    isMomentum: !1,
                    startTime: 0,
                    lastAbsDelta: 1 / 0,
                    axisMovement: [0, 0, 0],
                    axisVelocity: [0, 0, 0],
                    accelerationFactors: [],
                    scrollPoints: [],
                    scrollPointsToMerge: [],
                    willEndTimeout: 400
                }).isStarted = !0, g.startTime = Date.now(), n = void 0, v = !1
            },
            P = function() {
                clearTimeout(a), a = setTimeout(M, g.willEndTimeout)
            },
            M = function(e) {
                void 0 === e && (e = !1), g.isStarted && (g.isMomentum && e ? w({
                    isEnding: !0,
                    isMomentumCancel: !0
                }) : w({
                    isEnding: !0
                }), g.isMomentum = !1, g.isStarted = !1)
            },
            N = function(e) {
                var t = [],
                    n = function(n) {
                        n.removeEventListener("wheel", e), t = t.filter((function(e) {
                            return e !== n
                        }))
                    };
                return d({
                    observe: function(a) {
                        return a.addEventListener("wheel", e, {
                                passive: !1
                            }), t.push(a),
                            function() {
                                return n(a)
                            }
                    },
                    unobserve: n,
                    disconnect: function() {
                        t.forEach(n)
                    }
                })
            }(y),
            L = N.observe,
            R = N.unobserve,
            D = N.disconnect;
        return S(e), d({
            on: o,
            off: i,
            observe: L,
            unobserve: R,
            disconnect: D,
            feedWheel: y,
            updateOptions: S
        })
    };
    ! function(e) {
        e[e.Up = 0] = "Up", e[e.Down = 1] = "Down"
    }(b || (b = {}));
    var v = b;
    const y = new Intl.DateTimeFormat(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
    });
    class S {
        constructor(e) {
            this.rootStore = e, this.width = window.innerWidth, this.time = Date.now(), this.lastActiveTime = Date.now(), this.appContextMenuOpened = !1, this.appContextMenuTriggerClientPosition = {
                top: 0,
                left: 0
            }, window.addEventListener("resize", this.updateSize);
            const t = g({
                preventWheelAction: !1
            });
            t.on("wheel", this.checkSlide), this.slideChecker = t
        }
        updateSize() {
            this.width = window.innerWidth
        }
        get mainViewportSpace() {
            const {
                rootStore: e
            } = this, {
                sidebarStore: t
            } = e, {
                model: n
            } = t;
            let a, r;
            if (n.setting.autoHide) a = 0, r = 0;
            else {
                const {
                    width: e
                } = t;
                n.setting.side === o.a.Right ? (a = 0, r = e) : (a = e, r = 0)
            }
            return {
                top: 0,
                left: a,
                right: r,
                bottom: 0
            }
        }
        get presetLayout() {
            const {
                iconsStore: e
            } = this.rootStore, {
                iconLayout: t,
                sizePercentage: n
            } = e.model.setting;
            switch (t) {
                case c.a.Particular:
                    return n <= 80 ? i.PresetLayout1 : i.PresetLayout0;
                case c.a.Simple:
                default:
                    return n <= 80 ? i.PresetLayout3 : i.PresetLayout2
            }
        }
        setPresetLayout(e) {
            const {
                iconsStore: t,
                searcherStore: n,
                commonStore: a
            } = this.rootStore;
            switch (e) {
                case i.PresetLayout0:
                    a.model.setting.widthPercentage = 100, t.model.setting.rowGapPercentage = 40, t.model.setting.columnGapPercentage = 50, n.model.setting.widthPercentage = 59, n.model.setting.heightPercentage = 100, n.model.setting.borderRadiusPercentage = 20, n.model.setting.opacityPercentage = 90, n.model.setting.displayShadow = !0, t.model.setting.iconLayout = c.a.Particular, t.model.setting.borderRadiusPercentage = 20, t.model.setting.sizePercentage = 100, t.model.setting.opacityPercentage = 100, t.model.setting.displayShadow = !0;
                    break;
                case i.PresetLayout1:
                    a.model.setting.widthPercentage = 100, t.model.setting.rowGapPercentage = 26, t.model.setting.columnGapPercentage = 34, n.model.setting.widthPercentage = 59, n.model.setting.heightPercentage = 80, n.model.setting.borderRadiusPercentage = 20, n.model.setting.opacityPercentage = 90, n.model.setting.displayShadow = !0, t.model.setting.iconLayout = c.a.Particular, t.model.setting.borderRadiusPercentage = 20, t.model.setting.sizePercentage = 80, t.model.setting.opacityPercentage = 100, t.model.setting.displayShadow = !0;
                    break;
                case i.PresetLayout2:
                    a.model.setting.widthPercentage = 80, t.model.setting.rowGapPercentage = 40, t.model.setting.columnGapPercentage = 70, n.model.setting.widthPercentage = 64, n.model.setting.heightPercentage = 100, n.model.setting.borderRadiusPercentage = 40, n.model.setting.opacityPercentage = 90, n.model.setting.displayShadow = !0, t.model.setting.iconLayout = c.a.Simple, t.model.setting.borderRadiusPercentage = 40, t.model.setting.sizePercentage = 100, t.model.setting.opacityPercentage = 100, t.model.setting.displayShadow = !0;
                    break;
                case i.PresetLayout3:
                    a.model.setting.widthPercentage = 80, t.model.setting.rowGapPercentage = 30, t.model.setting.columnGapPercentage = 70, n.model.setting.widthPercentage = 64, n.model.setting.heightPercentage = 80, n.model.setting.borderRadiusPercentage = 40, n.model.setting.opacityPercentage = 90, n.model.setting.displayShadow = !0, t.model.setting.iconLayout = c.a.Simple, t.model.setting.borderRadiusPercentage = 40, t.model.setting.sizePercentage = 80, t.model.setting.opacityPercentage = 100, t.model.setting.displayShadow = !0
            }
            a.backupModel(), t.backupModel(), n.backupModel()
        }
        get date() {
            return new Date(this.time)
        }
        get periodText() {
            return this.date.getHours() < 12 ? "AM" : "PM"
        }
        get timeText() {
            const {
                rootStore: e,
                date: t
            } = this, {
                commonStore: n
            } = e, a = t.getHours(), {
                enable24HourSystem: r
            } = n.model.setting;
            let o;
            o = r ? a.toString().padStart(2, "0") : String(a > 12 ? a - 12 : a);
            return `${o}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`
        }
        get dateText() {
            return y.format(this.date)
        }
        updateTime() {
            this.time = Date.now(), this.rootStore.standbyPageStore.checkIfNeedOpen()
        }
        startTickTime() {
            setInterval(this.updateTime, 500)
        }
        updateLastActiveTime() {
            this.lastActiveTime = Date.now()
        }
        openAppContextMenu(e) {
            this.appContextMenuOpened = !0, this.appContextMenuTriggerClientPosition = {
                left: e.left,
                top: e.top
            }
        }
        closeAppContextMenu() {
            this.appContextMenuOpened = !1
        }
        closeContextMenus() {
            this.closeContextMenusInMain(), this.closeContextMenusInSidebar()
        }
        closeContextMenusInMain() {
            const {
                rootStore: e
            } = this, {
                iconsStore: t
            } = e;
            this.closeAppContextMenu(), t.closeAddIconBtnContextMenu(), t.closeIconContextMenu()
        }
        closeContextMenusInSidebar() {
            const {
                rootStore: e
            } = this, {
                iconsStore: t
            } = e;
            t.closeIconGroupContextMenu()
        }
        checkSlide(e) {
            if (!e.isStart) return;
            const {
                rootStore: t
            } = this, {
                standbyPageStore: n
            } = t;
            if (n.opened) n.close();
            else {
                this.updateLastActiveTime(), this.closeContextMenusInMain();
                const {
                    iconsStore: n
                } = t;
                if (!n.model.setting.scrollToSwitchGroup) return;
                const a = e.axisDelta[1];
                a > 0 ? n.slide(v.Down) : a < 0 && n.slide(v.Up)
            }
        }
    }
    Object(r.e)(S, {
        width: r.g,
        updateSize: r.b.bound,
        mainViewportSpace: r.c,
        presetLayout: r.c,
        setPresetLayout: r.b.bound,
        time: r.g,
        date: r.c,
        periodText: r.c,
        timeText: r.c,
        dateText: r.c,
        updateTime: r.b.bound,
        updateLastActiveTime: r.b.bound,
        appContextMenuOpened: r.g,
        appContextMenuTriggerClientPosition: r.g.ref,
        openAppContextMenu: r.b,
        closeAppContextMenu: r.b.bound,
        closeContextMenus: r.b,
        closeContextMenusInMain: r.b,
        closeContextMenusInSidebar: r.b,
        checkSlide: r.b.bound
    });
    var w = S;
    var k = n(12),
        E = n(10),
        O = n(36);
    class C {
        constructor(e) {
            this.rootStore = e, this.systemThemeType = Object(O.c)()
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            const t = this.model;
            if (this.model = e, this.model.setting.themeType !== t.setting.themeType) {
                const {
                    wallpaperLibModalStore: e
                } = this.rootStore;
                e.wallpapersLoadedOnce && e.reloadWallpapers()
            }
        }
        async backupModel() {
            await Object(k.a)({
                command: E.b,
                data: Object(r.j)(this.model),
                hasResponse: !0
            }), Object(k.a)({
                command: E.z,
                hasResponse: !1
            })
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.j,
                hasResponse: !0
            });
            this.setModel(e)
        }
        setSystemThemeType(e) {
            this.systemThemeType = e
        }
        get themeType() {
            return Object(O.a)(this.model.setting.themeType, this.systemThemeType)
        }
        setThemeType(e) {
            this.model.setting.themeType = e;
            const {
                wallpaperLibModalStore: t
            } = this.rootStore;
            t.wallpapersLoadedOnce && t.reloadWallpapers(), this.backupModel()
        }
        setWidthPercentage(e) {
            this.model.setting.widthPercentage = e, this.backupModel()
        }
        setEnable24HourSystemSetting(e) {
            this.model.setting.enable24HourSystem = e, this.backupModel()
        }
        setEnableImperialUnitsSetting(e) {
            this.model.setting.enableImperialUnits = e, this.backupModel()
        }
        setLocation(e) {
            this.model.setting.location = function(e) {
                return {
                    woeid: e.woeid,
                    shortname: e.shortname,
                    fullname: e.fullname,
                    latitude: e.latitude,
                    longtitude: e.longtitude
                }
            }(e), this.backupModel()
        }
    }
    Object(r.e)(C, {
        model: r.g,
        init: r.b,
        setModel: r.b,
        systemThemeType: r.g,
        setSystemThemeType: r.b.bound,
        themeType: r.c,
        setThemeType: r.b.bound,
        setWidthPercentage: r.b.bound,
        setEnable24HourSystemSetting: r.b.bound,
        setEnableImperialUnitsSetting: r.b.bound,
        setLocation: r.b
    });
    var x = C;
    class j {
        constructor(e) {
            this.rootStore = e
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            this.model = e
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.q,
                hasResponse: !0
            });
            this.setModel(e)
        }
    }
    Object(r.e)(j, {
        model: r.g,
        init: r.b,
        setModel: r.b
    });
    var _ = j,
        I = n(23),
        T = n(44),
        P = n(14),
        M = n(11),
        N = n(74),
        L = n(8),
        R = n.n(L),
        D = n(4),
        A = n(16),
        B = n.n(A),
        G = n(18);
    async function U(e, t) {
        const n = new FormData;
        return Object.keys(e.input).forEach(t => {
            n.append(t, e.input[t])
        }), n.append("file", Object(P.g)(t)), await B()({
            url: e.attribute.action,
            method: e.attribute.method,
            data: n
        }), `${D.Gb}/${e.input.key}`
    }
    async function V(e, t) {
        if (t.uploaded) return t;
        const n = (await B()({
                url: D.a + "/home/s3sign",
                method: "get",
                headers: {
                    secret: Object(G.b)(e)
                },
                params: {
                    type: "icon",
                    mime: t.mimeType
                }
            })).data,
            a = await U(n.data.normal, t);
        return {
            uploaded: !0,
            isOfficial: !1,
            mimeType: t.mimeType,
            data: a
        }
    }
    var F, z = n(7);
    ! function(e) {
        e.Failed = "failed", e.Successed = "successed", e.Normal = "normal", e.Warning = "warning"
    }(F || (F = {}));
    var W = F,
        H = n(3),
        q = n(27);

    function K(e) {
        return Object(P.e)(e.data).concat(Object(P.e)(e.blurredData)).concat(Object(P.e)(e.overviewData))
    }
    class Q {
        constructor(e) {
            this.rootStore = e, this.localBackgroundLoading = !1, this.downloadWallpaper = this.downloadWallpaper.bind(this)
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            this.model = e
        }
        async backupModel() {
            await Object(k.a)({
                command: E.a,
                data: Object(r.j)(this.model),
                hasResponse: !0
            }), Object(k.a)({
                command: E.y,
                hasResponse: !1
            })
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.i,
                hasResponse: !0
            });
            this.setModel(e)
        }
        get currentWallpaper() {
            const {
                data: e,
                setting: t
            } = this.model, {
                value: n
            } = t;
            let a;
            return a = n === I.a.Color ? e.wallpaperDict[t.value] : n === I.a.Lib && null !== this.rootStore.tempBackgroundStore.model.data.wallpaper ? this.rootStore.tempBackgroundStore.model.data.wallpaper : e.wallpaperDict[I.a.Local], a
        }
        setValueSetting(e) {
            this.model.setting.value = e, this.backupModel()
        }
        setBlurredSetting(e) {
            this.model.setting.blurred = e, this.backupModel()
        }
        setSlideIntervalSecondsSetting(e) {
            this.model.setting.slideIntervalSeconds = e, this.backupModel()
        }
        setLibCategoriesSetting(e) {
            this.model.setting.libCategories = [e], this.backupModel()
        }
        pickLocalBackground() {
            Object(N.a)({
                sizeLimitByte: 2621440,
                accpets: [z.a.Jpeg, z.a.Png],
                callback: (e, t) => {
                    e || null === t ? this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(H.a)("image_size_can_not_exceed", ["2.5mb"])
                    }) : this.setLocalBackground(t)
                }
            })
        }
        async setLocalBackground(e) {
            this.localBackgroundLoading = !0;
            try {
                const t = this.rootStore.userStore.model.data.token,
                    n = await async function(e, t) {
                        const n = (await B()({
                                url: D.a + "/home/s3sign",
                                method: "get",
                                headers: {
                                    secret: Object(G.b)(e)
                                },
                                params: {
                                    type: "wallpaper",
                                    mime: t.mimeType
                                }
                            })).data,
                            a = await Object(P.h)(t, "cover", D.gc),
                            r = await Object(P.a)(t, D.ec),
                            [o, i, c] = await Promise.all([U(n.data.normal, t), U(n.data.blur, r), U(n.data.overview, a)]);
                        return {
                            id: null,
                            uuid: R()(),
                            type: T.a.Image,
                            data: {
                                uploaded: !0,
                                isOfficial: !1,
                                mimeType: t.mimeType,
                                data: o
                            },
                            blurredData: {
                                uploaded: !0,
                                isOfficial: !1,
                                mimeType: r.mimeType,
                                data: i
                            },
                            overviewData: {
                                uploaded: !0,
                                isOfficial: !1,
                                mimeType: a.mimeType,
                                data: c
                            }
                        }
                    }(this.rootStore.userStore.model, e);
                if (t !== this.rootStore.userStore.model.data.token) return void Object(r.h)(() => {
                    this.rootStore.staticCleanerStore.deleteUserStatics(t, K(n)), this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(H.a)("user_changed")
                    }), this.localBackgroundLoading = !1
                });
                Object(r.h)(() => {
                    const e = this.model.data.wallpaperDict[I.a.Local];
                    this.rootStore.staticCleanerStore.deleteUserStatics(this.rootStore.userStore.model.data.token, K(e)), this.model.data.wallpaperDict[I.a.Local] = {
                        id: null,
                        uuid: I.a.Local,
                        type: T.a.Image,
                        data: Object(P.b)(n.data),
                        blurredData: Object(P.b)(n.blurredData),
                        overviewData: Object(P.b)(n.overviewData)
                    }, this.localBackgroundLoading = !1, this.backupModel()
                })
            } catch (e) {
                Object(r.h)(() => {
                    this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(q.d)(e)
                    }), this.localBackgroundLoading = !1
                })
            }
        }
        setLocalBackgroundWithOfficialImageWallpaper(e) {
            const {
                model: t
            } = this, {
                setting: n,
                data: a
            } = t, r = this.model.data.wallpaperDict[I.a.Local];
            this.rootStore.staticCleanerStore.deleteUserStatics(this.rootStore.userStore.model.data.token, K(r)), n.value = I.a.Local, a.wallpaperDict[I.a.Local] = {
                id: e.id,
                uuid: I.a.Local,
                type: T.a.Image,
                data: Object(P.b)(e.data),
                blurredData: Object(P.b)(e.blurredData),
                overviewData: Object(P.b)(e.overviewData)
            }, this.backupModel()
        }
        setColorBackground(e) {
            const {
                model: t
            } = this;
            t.data.wallpaperDict[I.a.Color] = {
                id: null,
                uuid: I.a.Color,
                type: T.a.Color,
                data: Object(M.a)(e)
            }, this.backupModel()
        }
        nextLibBackgroundWallpaper() {
            Object(k.a)({
                command: E.x,
                hasResponse: !1
            })
        }
        async downloadWallpaper() {
            const {
                currentWallpaper: e
            } = this;
            if (e.type == T.a.Image) {
                const t = Object(P.b)(e.data),
                    n = await Object(P.f)(t),
                    a = document.createElement("canvas");
                a.width = n.width, a.height = n.height;
                const r = a.getContext("2d");
                if (null === r) return;
                r.drawImage(n, 0, 0, n.width, n.height);
                const o = a.toDataURL(t.mimeType),
                    i = document.createElement("a");
                i.download = "wallpaper." + function(e) {
                    switch (e) {
                        case z.a.Png:
                            return "png";
                        case z.a.Jpeg:
                            return "jpg";
                        case z.a.Svg:
                            return "svg";
                        case z.a.Gif:
                            return "gif";
                        default:
                            return ""
                    }
                }(t.mimeType), i.href = o, i.click()
            }
        }
    }
    Object(r.e)(Q, {
        model: r.g,
        init: r.b,
        setModel: r.b,
        currentWallpaper: r.c,
        setValueSetting: r.b.bound,
        setBlurredSetting: r.b.bound,
        setSlideIntervalSecondsSetting: r.b.bound,
        setLibCategoriesSetting: r.b.bound,
        localBackgroundLoading: r.g,
        pickLocalBackground: r.b.bound,
        setLocalBackground: r.b.bound,
        setLocalBackgroundWithOfficialImageWallpaper: r.b,
        setColorBackground: r.b.bound,
        nextLibBackgroundWallpaper: r.b.bound
    });
    var Y = Q;
    class J {
        constructor(e) {
            this.rootStore = e
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            this.model = e
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.p,
                hasResponse: !0
            });
            this.setModel(e)
        }
    }
    Object(r.e)(J, {
        model: r.g,
        init: r.b,
        setModel: r.b
    });
    var X, Z = J,
        $ = n(6),
        ee = n(50),
        te = n(31),
        ne = n(28),
        ae = n(46),
        re = n(0),
        oe = n.n(re),
        ie = n(2),
        ce = n(9),
        se = n.n(ce),
        le = n(117),
        ue = n.n(le);
    ! function(e) {
        e[e.UpExited = 0] = "UpExited", e[e.Normal = 1] = "Normal", e[e.DownExited = 2] = "DownExited", e[e.Faded = 3] = "Faded"
    }(X || (X = {}));
    var de = Object(ie.a)((function({
        status: e,
        viewportClassName: t,
        transitionKey: n,
        children: a
    }) {
        const r = se()(ue.a.viewport, t),
            o = se()(ue.a.main, {
                [X.UpExited]: ue.a.upExitedMain,
                [X.Normal]: ue.a.normalMain,
                [X.DownExited]: ue.a.downExitedMain,
                [X.Faded]: ue.a.fadedMain
            } [e]);
        return oe.a.createElement("div", {
            className: r
        }, oe.a.createElement("div", {
            className: o,
            key: n
        }, a))
    }));
    class pe {
        constructor(e) {
            this.rootStore = e, this.sidebarIconGroupsScrollerClientRect = null, this.tempIconGroups = [], this.draggingIconUuid = null, this.draggingIconClientPosition = null, this.sidebarIconGroupsScrollerScrollTop = 0, this.draggingIconGroupUuid = null, this.draggingIconGroupInitRelativePosition = null, this.draggingIconGroupInitClientPosition = null, this.draggingIconGroupClientPosition = null, this.currentIconGroupUuid = null, this.currentIconGroupScroller = null, this.setCurrentIconGroupScroller = this.setCurrentIconGroupScroller.bind(this), this.carouselStatus = X.Normal, this.carouselAnimating = !1, this.carouselSlideTimeoutId = null, this.iconContextMenuOpened = !1, this.iconContextMenuIcon = null, this.iconContextMenuTriggerClientPosition = {
                left: 0,
                top: 0
            }, this.iconGroupContextMenuOpened = !1, this.iconGroupContextMenuIconGroup = null, this.iconGroupContextMenuIconCount = 0, this.iconGroupContextMenuTriggerClientPosition = {
                left: 0,
                top: 0
            }, this.iconGroupContextMenuTriggerDom = document.createElement("div"), this.iconGroupDeleteConfirmationOpened = !1, this.addIconBtnContextMenuOpened = !1, this.addIconBtnContextMenuTriggerClientPosition = {
                left: 0,
                top: 0
            }
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            const {
                rootStore: t
            } = this;
            this.slideReset(), null !== this.draggingIconGroupUuid && this.endDragIconGroup(), this.endDragIcon(), this.closeIconGroupContextMenu(), t.iconGroupPopupStore.cancel(), this.cancelIconGroupDeleteConfirmation(), this.closeIconContextMenu(), t.editIconModalStore.cancel(), this.closeAddIconBtnContextMenu(), this.model = e, null !== this.currentIconGroupUuid && void 0 === this.model.data.groupDict[this.currentIconGroupUuid] && (this.selectFirstIconGroup(), this.scrollSelectedIconGroupIntoView(!0))
        }
        async backupModel() {
            await Object(k.a)({
                command: E.c,
                data: Object(r.j)(this.model),
                hasResponse: !0
            }), Object(k.a)({
                command: E.A,
                hasResponse: !1
            })
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.k,
                hasResponse: !0
            });
            this.setModel(e)
        }
        get iconGroups() {
            const {
                groupDict: e,
                groups: t
            } = this.model.data;
            let n = t;
            const {
                draggingIconGroupUuid: a
            } = this;
            if (null !== a && null !== this.sidebarIconGroupsScrollerClientRect && null !== this.draggingIconGroupInitRelativePosition && null !== this.draggingIconGroupInitClientPosition && null !== this.draggingIconGroupClientPosition) {
                const {
                    sidebarIconGroupsScrollerScrollTop: e,
                    iconGroupSize: t,
                    sidebarIconGroupsScrollerClientRect: r
                } = this, o = t.height;
                n = this.tempIconGroups;
                const i = n.indexOf(a),
                    c = Math.min(i, Math.ceil(e / o)),
                    s = Math.max(i, Math.floor((e + r.height) / o) - 1),
                    l = this.draggingIconGroupRelativePositionTop + e;
                let u = Math.floor(l / o);
                l % o > .5 * o && (u += 1);
                const d = Math.min(Math.max(c, u), s);
                n.splice(i, 1), n.splice(d, 0, a)
            }
            return n.map(t => e[t])
        }
        scrollSelectedIconGroupIntoView(e) {
            void 0 === e && (e = !1);
            const {
                currentIconGroupUuid: t
            } = this;
            if (null === t) return;
            const n = {
                behavior: e ? "smooth" : "auto",
                block: "nearest"
            };
            Object(ne.d)(t, n)
        }
        selectFirstIconGroup() {
            this.currentIconGroupUuid = Object(te.c)(this.model)
        }
        selectLastSelectIconGroup() {
            this.currentIconGroupUuid = Object(te.f)(this.rootStore.tempIconsStore.model, this.model)
        }
        selectLastSelectIconGroupIfNotSelected() {
            null === this.currentIconGroupUuid && this.selectLastSelectIconGroup()
        }
        selectLastSelectIconGroupThenScrollIntoViewIfNotSelected(e) {
            null === this.currentIconGroupUuid && (this.selectLastSelectIconGroup(), this.scrollSelectedIconGroupIntoView(e))
        }
        get draggingIcon() {
            const {
                draggingIconUuid: e
            } = this;
            return null === e ? null : this.model.data.iconDict[e]
        }
        startDragIcon(e, t) {
            this.draggingIconUuid = e.uuid, this.draggingIconClientPosition = {
                left: t.left,
                top: t.top
            }
        }
        endDragIcon() {
            this.draggingIconUuid = null, this.draggingIconClientPosition = null
        }
        endDragIconThenBackupModel() {
            this.endDragIcon(), this.backupModel()
        }
        setDraggingIconClientPosition(e) {
            this.draggingIconClientPosition = {
                top: e.top,
                left: e.left
            }
        }
        moveDraggingIcon(e, t) {
            const {
                draggingIconUuid: n
            } = this;
            if (null === n || null === this.currentIconGroupUuid) return;
            void 0 === t && (t = {
                resetSlide: !0,
                appendTo: "top"
            });
            const {
                data: a
            } = this.model, r = a.groupDict[this.currentIconGroupUuid];
            r.data.splice(r.data.indexOf(n), 1);
            const o = a.groupDict[e];
            "top" === t.appendTo ? o.data.unshift(n) : o.data.push(n), this.setCurrentIconGroupUuid(e, t.resetSlide)
        }
        moveDraggingIconInGroup(e) {
            const {
                draggingIconUuid: t
            } = this;
            if (null === t || null === this.currentIconGroupUuid) return;
            const {
                model: n
            } = this, {
                data: a
            } = n, r = a.groupDict[this.currentIconGroupUuid].data, o = r.indexOf(e.uuid), i = r.indexOf(t);
            r.splice(i, 1), r.splice(o, 0, t)
        }
        get iconGroupSize() {
            const {
                collapsed: e
            } = this.rootStore.sidebarStore;
            return e ? {
                width: 72,
                height: 64
            } : {
                width: 212,
                height: 66
            }
        }
        setSidebarIconGroupsScrollerScrollTop(e) {
            this.sidebarIconGroupsScrollerScrollTop = e
        }
        get draggingIconGroup() {
            const {
                draggingIconGroupUuid: e
            } = this;
            return null === e ? null : this.model.data.groupDict[e]
        }
        get draggingIconGroupRelativePositionTop() {
            if (null === this.sidebarIconGroupsScrollerClientRect || null === this.draggingIconGroupInitRelativePosition || null === this.draggingIconGroupInitClientPosition || null === this.draggingIconGroupClientPosition) return 0;
            const {
                iconGroupSize: e,
                sidebarIconGroupsScrollerScrollTop: t,
                draggingIconGroupInitRelativePosition: n,
                draggingIconGroupInitClientPosition: a,
                draggingIconGroupClientPosition: r
            } = this, {
                groups: o
            } = this.model.data, i = n.top + (r.top - a.top);
            return Math.min(Math.max(i, -t), (o.length - 1) * e.height - t)
        }
        get draggingIconGroupRelativePositionTopStyle() {
            return this.draggingIconGroupRelativePositionTop + "px"
        }
        startDragIconGroup(e, t, n, a, r) {
            this.draggingIconGroupUuid = e.uuid, this.draggingIconGroupInitRelativePosition = {
                left: n.left,
                top: n.top
            }, this.draggingIconGroupInitClientPosition = {
                left: a.left,
                top: a.top
            }, this.draggingIconGroupClientPosition = {
                left: r.left,
                top: r.top
            }, this.sidebarIconGroupsScrollerClientRect = t, this.tempIconGroups = this.model.data.groups.slice(0), this.setCurrentIconGroupUuid(e.uuid)
        }
        endDragIconGroup() {
            this.draggingIconGroupUuid = null, this.draggingIconGroupInitRelativePosition = null, this.draggingIconGroupInitClientPosition = null, this.draggingIconGroupClientPosition = null, this.sidebarIconGroupsScrollerClientRect = null, this.model.data.groups = this.tempIconGroups, this.tempIconGroups = []
        }
        endDragIconGroupThenBackupModel() {
            this.endDragIconGroup(), this.backupModel()
        }
        setDraggingIconGroupClientPosition(e) {
            this.draggingIconGroupClientPosition = {
                left: e.left,
                top: e.top
            }
        }
        get prevIconGroupUuid() {
            const {
                currentIconGroupUuid: e
            } = this;
            if (null === e) return null;
            const {
                groups: t
            } = this.model.data;
            if (1 === t.length) return null;
            const n = t.indexOf(e);
            return 0 === n ? t[t.length - 1] : t[n - 1]
        }
        get nextIconGroupUuid() {
            const {
                currentIconGroupUuid: e
            } = this;
            if (null === e) return null;
            const {
                groups: t
            } = this.model.data;
            if (1 === t.length) return null;
            const n = t.indexOf(e);
            return n === t.length - 1 ? t[0] : t[n + 1]
        }
        get currentIconGroup() {
            return null === this.currentIconGroupUuid ? null : this.model.data.groupDict[this.currentIconGroupUuid]
        }
        get currentIconGroupIcons() {
            const {
                iconDict: e
            } = this.model.data;
            return null === this.currentIconGroup ? null : this.currentIconGroup.data.map(t => e[t])
        }
        setCurrentIconGroupUuid(e, t = !0) {
            this.currentIconGroupUuid = e, this.rootStore.tempIconsStore.setLastSelectIconGroupUuid(e), t && this.slideReset()
        }
        setCurrentIconGroupScroller(e) {
            this.currentIconGroupScroller = e
        }
        slide(e) {
            const {
                carouselStatus: t
            } = this, {
                currentIconGroupScroller: n
            } = this;
            if (null === n) return;
            const {
                carouselAnimating: a
            } = this;
            if (!a)
                if (e === v.Down) switch (t) {
                    case X.Normal:
                        n.checkIfAtTop() && null !== this.prevIconGroupUuid && this.startConfirmSlideToPrev()
                } else if (e === v.Up) switch (t) {
                    case X.Normal:
                        n.checkIfAtBottom() && this.nextIconGroupUuid && this.startConfirmSlideToNext()
                }
        }
        startConfirmSlideToPrev() {
            this.carouselAnimating = !0, this.carouselStatus = X.DownExited, this.carouselSlideTimeoutId = window.setTimeout(this.endConfirmSlideToPrev, D.Wb)
        }
        endConfirmSlideToPrev() {
            const {
                prevIconGroupUuid: e
            } = this;
            this.carouselStatus = X.Faded, null !== e && (null === this.draggingIconUuid ? this.setCurrentIconGroupUuid(e, !1) : this.moveDraggingIcon(e, {
                resetSlide: !1,
                appendTo: "bottom"
            }), this.scrollSelectedIconGroupIntoView(!0)), this.carouselSlideTimeoutId = window.setTimeout(this.startSlideEnterPrev, 0)
        }
        startSlideEnterPrev() {
            this.carouselStatus = X.Normal, null !== this.currentIconGroupScroller && this.currentIconGroupScroller.scrollToBottom(), this.disableSlide(D.Wb)
        }
        startConfirmSlideToNext() {
            this.carouselAnimating = !0, this.carouselStatus = X.UpExited, this.carouselSlideTimeoutId = window.setTimeout(this.endConfirmSlideToNext, D.Wb)
        }
        endConfirmSlideToNext() {
            this.carouselStatus = X.Faded;
            const {
                nextIconGroupUuid: e
            } = this;
            null !== e && (null === this.draggingIconUuid ? this.setCurrentIconGroupUuid(e, !1) : this.moveDraggingIcon(e, {
                resetSlide: !1,
                appendTo: "top"
            }), this.scrollSelectedIconGroupIntoView(!0)), this.carouselSlideTimeoutId = window.setTimeout(this.startSlideEnterNext, 0)
        }
        startSlideEnterNext() {
            this.carouselStatus = X.Normal, this.disableSlide(D.Wb)
        }
        disableSlide(e) {
            this.carouselAnimating = !0, this.carouselSlideTimeoutId = window.setTimeout(() => {
                this.carouselAnimating = !1, this.carouselSlideTimeoutId = null
            }, e)
        }
        slideReset() {
            this.carouselStatus = X.Normal, this.carouselAnimating = !1;
            const {
                carouselSlideTimeoutId: e
            } = this;
            null !== e && (window.clearTimeout(e), this.carouselSlideTimeoutId = null)
        }
        setOpenTargetSetting(e) {
            this.model.setting.openTarget = e, this.backupModel()
        }
        setScrollToSwitchGroupSetting(e) {
            this.model.setting.scrollToSwitchGroup = e, this.backupModel()
        }
        setRememberLastVisitedGroupSetting(e) {
            this.model.setting.rememberLastVisitedGroup = e, this.backupModel()
        }
        get particularIconLabelClassName() {
            const {
                sizePercentage: e
            } = this.model.setting;
            return e < 60 ? D.l : e < 70 ? D.m : e < 90 ? D.l : e < 110 ? D.m : e < 130 ? D.n : D.o
        }
        get particularIconDescClassName() {
            const {
                sizePercentage: e
            } = this.model.setting;
            return e < 70 ? D.g : e < 100 ? D.h : e < 120 ? D.i : e < 140 ? D.j : D.k
        }
        get particularIconSpaceClassName() {
            const {
                sizePercentage: e
            } = this.model.setting;
            return e < 90 ? D.p : e < 120 ? D.q : e < 140 ? D.r : D.s
        }
        get particularIconBadgeClassName() {
            const {
                sizePercentage: e
            } = this.model.setting;
            return e < 60 ? D.c : e < 70 ? D.d : e < 90 ? D.c : e < 110 ? D.d : e < 130 ? D.e : D.f
        }
        get simpleIconLabelClassName() {
            const {
                sizePercentage: e
            } = this.model.setting;
            return e < 70 ? D.B : e < 90 ? D.C : e < 110 ? D.D : e < 140 ? D.E : D.F
        }
        get simpleIconSpaceClassName() {
            const {
                sizePercentage: e
            } = this.model.setting;
            return e < 70 ? D.G : e < 110 ? D.H : e < 140 ? D.I : D.J
        }
        get simpleIconBadgeClassName() {
            const {
                sizePercentage: e
            } = this.model.setting;
            return e < 70 ? D.w : e < 90 ? D.x : e < 110 ? D.y : e < 140 ? D.z : D.A
        }
        get iconClassName() {
            const {
                iconLayout: e
            } = this.model.setting;
            switch (e) {
                case c.a.Particular:
                    return `${this.particularIconLabelClassName} ${this.particularIconDescClassName} ${this.particularIconSpaceClassName} ${this.particularIconBadgeClassName}`;
                default:
                case c.a.Simple:
                    return `${this.simpleIconLabelClassName} ${this.simpleIconSpaceClassName} ${this.simpleIconBadgeClassName}`
            }
        }
        get iconRowGap() {
            const {
                rowGapPercentage: e
            } = this.model.setting;
            return 120 * e / 100
        }
        get iconRowGapStyle() {
            return Math.floor(this.iconRowGap) + "px"
        }
        setRowGapPercentageSetting(e) {
            this.model.setting.rowGapPercentage = e, this.backupModel()
        }
        get iconColumnGap() {
            const {
                columnGapPercentage: e
            } = this.model.setting;
            return 120 * e / 100
        }
        get iconColumnGapStyle() {
            return Math.floor(this.iconColumnGap) + "px"
        }
        setColumnGapPercentageSetting(e) {
            this.model.setting.columnGapPercentage = e, this.backupModel()
        }
        get iconOpacityStyle() {
            return this.model.setting.opacityPercentage / 100
        }
        get currentIconGroupPaddingBottomStyle() {
            return Math.floor(this.scaledIconSize + this.iconRowGap) + "px"
        }
        get iconBorderRadiusStyle() {
            return Math.ceil(this.scaledIconSize * this.model.setting.borderRadiusPercentage / 200) + "px"
        }
        get simpleIconBadgeHeight() {
            const {
                simpleIconBadgeClassName: e
            } = this;
            let t = 0;
            switch (e) {
                case D.w:
                    t = 18;
                    break;
                case D.x:
                    t = 24;
                    break;
                case D.y:
                    t = 28;
                    break;
                case D.z:
                    t = 32;
                    break;
                case D.A:
                    t = 36
            }
            return t
        }
        get simpleIconBadgeRadiusStyle() {
            const {
                simpleIconBadgeHeight: e
            } = this, {
                borderRadiusPercentage: t
            } = this.model.setting;
            return Math.ceil(e * t / 200) + "px"
        }
        get simpleIconBadgeRadiusTransformStyle() {
            const {
                borderRadiusPercentage: e
            } = this.model.setting, t = (100 - e) / 2;
            return `translate(${t}%, -${t}%)`
        }
        get particularIconBadgeRadiusStyle() {
            const {
                particularIconBadgeClassName: e
            } = this, {
                borderRadiusPercentage: t
            } = this.model.setting;
            let n = 0;
            switch (e) {
                case D.c:
                    n = 18;
                    break;
                case D.d:
                    n = 20;
                    break;
                case D.e:
                    n = 24;
                    break;
                case D.f:
                    n = 28
            }
            return Math.ceil(n * t / 200) + "px"
        }
        setBorderRadiusPercentageSetting(e) {
            this.model.setting.borderRadiusPercentage = e, this.backupModel()
        }
        get scaledIconSize() {
            return D.hb * this.model.setting.sizePercentage / 100
        }
        get scaledIconSizeStyle() {
            return Math.floor(this.scaledIconSize) + "px"
        }
        setSizePercentageSetting(e) {
            this.model.setting.sizePercentage = e, this.backupModel()
        }
        setOpacityPercentageSetting(e) {
            this.model.setting.opacityPercentage = e, this.backupModel()
        }
        setDisplayShadowSetting(e) {
            this.model.setting.displayShadow = e, this.backupModel()
        }
        setIconLayoutSetting(e) {
            this.model.setting.iconLayout = e, this.backupModel()
        }
        setDisplayAddBtnSetting(e) {
            this.model.setting.displayAddBtn = e, this.backupModel()
        }
        setDisplayNotificationBadge(e) {
            this.model.setting.displayNotificationBadge = e, this.backupModel()
        }
        openIconContextMenu(e, t) {
            this.iconContextMenuOpened = !0, this.iconContextMenuIcon = Object(te.a)(e), this.iconContextMenuTriggerClientPosition = {
                left: t.left,
                top: t.top
            }
        }
        closeIconContextMenu() {
            this.iconContextMenuOpened = !1
        }
        openIconGroupContextMenu(e, t, n) {
            this.iconGroupContextMenuOpened = !0, this.iconGroupContextMenuIconGroup = Object(te.b)(e);
            let a = 0;
            const {
                iconDict: r
            } = this.model.data;
            for (const t of e.data) {
                const e = r[t];
                Object(ae.a)(e.url) || a++
            }
            this.iconGroupContextMenuIconCount = a, this.iconGroupContextMenuTriggerClientPosition = {
                left: t.left,
                top: t.top
            }, this.iconGroupContextMenuTriggerDom = n
        }
        closeIconGroupContextMenu() {
            this.iconGroupContextMenuOpened = !1
        }
        openIconGroupDeleteConfirmation() {
            this.iconGroupDeleteConfirmationOpened = !0
        }
        cancelIconGroupDeleteConfirmation() {
            this.iconGroupDeleteConfirmationOpened = !1
        }
        confirmIconGroupDeleteConfirmation() {
            this.iconGroupDeleteConfirmationOpened = !1;
            const {
                iconGroupContextMenuIconGroup: e
            } = this;
            null !== e && this.deleteIconGroup(e.uuid)
        }
        openAddIconBtnContextMenu(e) {
            this.addIconBtnContextMenuOpened = !0, this.addIconBtnContextMenuTriggerClientPosition = {
                left: e.left,
                top: e.top
            }
        }
        closeAddIconBtnContextMenu() {
            this.addIconBtnContextMenuOpened = !1
        }
        addOrUpdateIconGroup(e) {
            const {
                model: t
            } = this, {
                data: n
            } = t;
            if (null === e.uuid) {
                const t = {
                    uuid: R()(),
                    label: e.label.value,
                    icoSrc: e.icoSrc,
                    data: []
                };
                n.groupDict[t.uuid] = t, n.groups.push(t.uuid)
            } else {
                const t = n.groupDict[e.uuid];
                if (void 0 === t) return;
                t.label = e.label.value, t.icoSrc = e.icoSrc
            }
            this.backupModel(), this.rootStore.messagesStore.notificateMessage({
                status: W.Successed,
                content: Object(H.a)(null === e.uuid ? "add_successful" : "modify_successful")
            })
        }
        deleteIconGroup(e) {
            const {
                model: t
            } = this, {
                groupDict: n,
                iconDict: a,
                groups: r
            } = t.data, o = n[e];
            if (void 0 !== o) {
                let t = [];
                for (const e of o.data) {
                    void 0 !== a[e] && (t = t.concat(Object(te.e)(a[e]))), delete a[e]
                }
                this.rootStore.staticCleanerStore.deleteUserStatics(this.rootStore.userStore.model.data.token, t), delete n[e]
            }
            r.splice(r.indexOf(e), 1), Object(te.g)(t), this.backupModel(), this.currentIconGroupUuid === e && (this.selectFirstIconGroup(), this.scrollSelectedIconGroupIntoView(!0))
        }
        openIconByModel(e, t) {
            this.openIconByUrl(e.url, t)
        }
        openIconByUrl(e, t) {
            let n;
            const {
                model: a
            } = this;
            if (this.rootStore.gaStore.sendEvent({
                    category: "icons",
                    action: "open",
                    label: e
                }), Object(ae.b)(e)) switch (e) {
                case "internal://wallpaper-lib":
                    return void this.rootStore.wallpaperLibModalStore.open();
                case "internal://todos":
                    return void this.rootStore.todosStore.open();
                case "internal://bookmarks":
                    n = "chrome://bookmarks";
                    break;
                case "internal://extensions":
                    n = "chrome://extensions";
                    break;
                case "internal://history":
                    n = "chrome://history";
                    break;
                case "internal://downloads":
                    n = "chrome://downloads";
                    break;
                case "internal://dino":
                    n = "chrome://dino";
                    break;
                default:
                    return void this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(H.a)("not_recognized")
                    })
            } else n = e;
            void 0 === t && (t = a.setting.openTarget), Object(ee.a)({
                url: n,
                openTarget: t
            })
        }
        addIcon(e) {
            const {
                currentIconGroupUuid: t
            } = this;
            if (null === t) return void this.rootStore.staticCleanerStore.deleteUserStatics(this.rootStore.userStore.model.data.token, Object(te.e)(e));
            const {
                data: n
            } = this.model, {
                iconDict: a
            } = n, r = e.uuid, {
                groupDict: o
            } = n;
            o[t].data.push(r), a[r] = e, this.backupModel(), this.rootStore.messagesStore.notificateMessage({
                status: W.Successed,
                content: Object(H.a)("add_successful")
            }), Object(ne.d)(r, {
                behavior: "smooth"
            })
        }
        addOfficialImageIcon(e) {
            const t = {
                id: e.id,
                uuid: R()(),
                url: e.url,
                label: e.label,
                type: $.a.Image,
                desc: e.desc,
                backgroundColor: Object(M.a)(e.backgroundColor),
                icoSrc: Object(P.b)(e.icoSrc),
                icoScalePercentage: e.icoScalePercentage
            };
            this.addIcon(t)
        }
        updateIcon(e) {
            const {
                data: t
            } = this.model, {
                iconDict: n
            } = t, a = e.uuid, r = n[a];
            if (void 0 === r) return void this.rootStore.staticCleanerStore.deleteUserStatics(this.rootStore.userStore.model.data.token, Object(te.e)(e));
            let o = !1;
            r.type === $.a.Image && (e.type === $.a.Image ? r.icoSrc.data !== e.icoSrc.data && (o = !0) : o = !0, o && this.rootStore.staticCleanerStore.deleteUserStatics(this.rootStore.userStore.model.data.token, Object(te.e)(r))), n[a] = e, this.backupModel(), this.rootStore.messagesStore.notificateMessage({
                status: W.Successed,
                content: Object(H.a)("modify_successful")
            })
        }
        deleteIcon(e) {
            const {
                model: t
            } = this, {
                iconDict: n
            } = t.data, a = n[e];
            if (void 0 !== a) {
                delete n[e];
                const t = Object(te.e)(a);
                this.rootStore.staticCleanerStore.deleteUserStatics(this.rootStore.userStore.model.data.token, t)
            }
            Object(te.g)(t), this.backupModel()
        }
        get existDict() {
            const {
                iconDict: e,
                groups: t,
                groupDict: n
            } = this.model.data, a = {}, r = {};
            for (const o of t) {
                const t = n[o].data,
                    i = {
                        todos: !1
                    };
                a[o] = i;
                for (const n of t) {
                    "internal://todos" === e[n].url && (i.todos = !0, r[n] = !0)
                }
            }
            return {
                existInIconGroup: a,
                isTodosIcon: r
            }
        }
        get existInIconGroup() {
            return this.existDict.existInIconGroup
        }
        get isTodosIcon() {
            return this.existDict.isTodosIcon
        }
    }
    Object(r.e)(pe, {
        model: r.g,
        init: r.b,
        setModel: r.b,
        sidebarIconGroupsScrollerClientRect: r.g.ref,
        iconGroups: r.c,
        selectFirstIconGroup: r.b,
        selectLastSelectIconGroup: r.b,
        selectLastSelectIconGroupIfNotSelected: r.b,
        selectLastSelectIconGroupThenScrollIntoViewIfNotSelected: r.b,
        draggingIconUuid: r.g,
        draggingIconClientPosition: r.g.ref,
        draggingIcon: r.c,
        startDragIcon: r.b,
        endDragIcon: r.b,
        endDragIconThenBackupModel: r.b.bound,
        setDraggingIconClientPosition: r.b,
        moveDraggingIcon: r.b,
        moveDraggingIconInGroup: r.b,
        iconGroupSize: r.c,
        sidebarIconGroupsScrollerScrollTop: r.g,
        setSidebarIconGroupsScrollerScrollTop: r.b,
        draggingIconGroupUuid: r.g,
        draggingIconGroupInitClientPosition: r.g.ref,
        draggingIconGroupInitRelativePosition: r.g.ref,
        draggingIconGroupClientPosition: r.g.ref,
        draggingIconGroup: r.c,
        draggingIconGroupRelativePositionTop: r.c,
        draggingIconGroupRelativePositionTopStyle: r.c,
        startDragIconGroup: r.b,
        endDragIconGroup: r.b,
        endDragIconGroupThenBackupModel: r.b.bound,
        setDraggingIconGroupClientPosition: r.b,
        currentIconGroupUuid: r.g,
        prevIconGroupUuid: r.c,
        nextIconGroupUuid: r.c,
        currentIconGroup: r.c,
        currentIconGroupIcons: r.c,
        setCurrentIconGroupUuid: r.b,
        carouselStatus: r.g,
        slide: r.b.bound,
        startConfirmSlideToPrev: r.b,
        endConfirmSlideToPrev: r.b.bound,
        startSlideEnterPrev: r.b.bound,
        startConfirmSlideToNext: r.b,
        endConfirmSlideToNext: r.b.bound,
        startSlideEnterNext: r.b.bound,
        slideReset: r.b,
        setOpenTargetSetting: r.b.bound,
        setScrollToSwitchGroupSetting: r.b.bound,
        setRememberLastVisitedGroupSetting: r.b.bound,
        iconRowGap: r.c,
        iconRowGapStyle: r.c,
        setRowGapPercentageSetting: r.b.bound,
        iconColumnGap: r.c,
        iconColumnGapStyle: r.c,
        setColumnGapPercentageSetting: r.b.bound,
        particularIconLabelClassName: r.c,
        particularIconDescClassName: r.c,
        particularIconSpaceClassName: r.c,
        particularIconBadgeClassName: r.c,
        simpleIconLabelClassName: r.c,
        simpleIconSpaceClassName: r.c,
        simpleIconBadgeClassName: r.c,
        iconClassName: r.c,
        iconOpacityStyle: r.c,
        currentIconGroupPaddingBottomStyle: r.c,
        simpleIconBadgeHeight: r.c,
        simpleIconBadgeRadiusStyle: r.c,
        simpleIconBadgeRadiusTransformStyle: r.c,
        particularIconBadgeRadiusStyle: r.c,
        iconBorderRadiusStyle: r.c,
        setBorderRadiusPercentageSetting: r.b.bound,
        scaledIconSize: r.c,
        scaledIconSizeStyle: r.c,
        setSizePercentageSetting: r.b.bound,
        setOpacityPercentageSetting: r.b.bound,
        setDisplayShadowSetting: r.b.bound,
        setIconLayoutSetting: r.b.bound,
        setDisplayAddBtnSetting: r.b.bound,
        setDisplayNotificationBadge: r.b.bound,
        iconContextMenuOpened: r.g,
        iconContextMenuIcon: r.g,
        iconContextMenuTriggerClientPosition: r.g.ref,
        openIconContextMenu: r.b,
        closeIconContextMenu: r.b.bound,
        iconGroupContextMenuOpened: r.g,
        iconGroupContextMenuIconGroup: r.g,
        iconGroupContextMenuIconCount: r.g,
        iconGroupContextMenuTriggerClientPosition: r.g.ref,
        iconGroupContextMenuTriggerDom: r.g.ref,
        openIconGroupContextMenu: r.b,
        closeIconGroupContextMenu: r.b.bound,
        iconGroupDeleteConfirmationOpened: r.g,
        openIconGroupDeleteConfirmation: r.b,
        cancelIconGroupDeleteConfirmation: r.b.bound,
        confirmIconGroupDeleteConfirmation: r.b.bound,
        addIconBtnContextMenuOpened: r.g,
        addIconBtnContextMenuTriggerClientPosition: r.g.ref,
        openAddIconBtnContextMenu: r.b,
        closeAddIconBtnContextMenu: r.b.bound,
        addOrUpdateIconGroup: r.b,
        deleteIconGroup: r.b,
        addIcon: r.b,
        addOfficialImageIcon: r.b,
        updateIcon: r.b,
        deleteIcon: r.b,
        existDict: r.c,
        existInIconGroup: r.c,
        isTodosIcon: r.c
    });
    var fe = pe;
    var me = class {
            constructor(e) {
                this.rootStore = e
            }
            init(e) {
                this.model = e
            }
            setModel(e) {
                this.model = e
            }
            async saveModel() {
                await Object(k.a)({
                    command: E.M,
                    data: this.model,
                    hasResponse: !0
                }), Object(k.a)({
                    command: E.H,
                    hasResponse: !1
                })
            }
            async reloadModel() {
                const e = await Object(k.a)({
                    command: E.r,
                    hasResponse: !0
                });
                this.setModel(e)
            }
            setLastSelectIconGroupUuid(e) {
                this.model.data.lastSelectIconGroupUuid = e, this.saveModel()
            }
        },
        he = n(100);
    class be {
        constructor(e) {
            this.rootStore = e
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            this.model = e
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.u,
                hasResponse: !0
            });
            this.setModel(e)
        }
        get temperatureUnit() {
            const {
                rootStore: e
            } = this, {
                commonStore: t
            } = e, {
                enableImperialUnits: n
            } = t.model.setting;
            return n ? "°F" : "°C"
        }
        get weatherObservation() {
            const {
                model: e
            } = this, {
                observation: t
            } = e.data;
            if (null === t) return null;
            const {
                rootStore: n
            } = this, {
                commonStore: a
            } = n, {
                enableImperialUnits: r
            } = a.model.setting, o = Object(he.c)(t.yahooConditionCode);
            return {
                highTemperature: Object(he.b)(t.highTemperatureFahrenheit, r),
                lowTemperature: Object(he.b)(t.lowTemperatureFahrenheit, r),
                currentTemperature: Object(he.b)(t.currentTemperatureFahrenheit, r),
                weatherIcoSrc: o.icoSrc,
                weatherLabel: o.label
            }
        }
    }
    Object(r.e)(be, {
        model: r.g,
        init: r.b,
        setModel: r.b,
        temperatureUnit: r.c,
        weatherObservation: r.c
    });
    var ge = be,
        ve = n(20);
    class ye {
        constructor(e) {
            this.rootStore = e, this.opened = !1
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            this.model = e
        }
        async backupModel() {
            await Object(k.a)({
                command: E.f,
                data: Object(r.j)(this.model),
                hasResponse: !0
            }), Object(k.a)({
                command: E.E,
                hasResponse: !1
            })
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.o,
                hasResponse: !0
            });
            this.setModel(e)
        }
        open() {
            this.opened = !0
        }
        close() {
            this.opened = !1;
            const {
                uiStore: e,
                iconsStore: t
            } = this.rootStore;
            e.updateLastActiveTime(), t.selectLastSelectIconGroupThenScrollIntoViewIfNotSelected(!0), t.disableSlide(D.Ab)
        }
        checkIfNeedOpen() {
            if (this.opened) return;
            const {
                rootStore: e
            } = this, {
                userStore: t
            } = e;
            if (t.model.data.type === ve.a.Visitor && !t.model.data.inited) return;
            const {
                model: n
            } = this;
            if (!n.setting.display) return;
            if (e.guidePagesStore.opened || e.searcherStore.searcherSuggestionsOpened || e.settingModalStore.opened || e.wallpaperLibModalStore.opened || e.addIconModalStore.opened || e.editIconModalStore.opened || e.iconGroupPopupStore.opened || e.searcherStore.searchEnginePickerOpened || e.uiStore.appContextMenuOpened || e.iconsStore.iconContextMenuOpened || e.iconsStore.iconGroupContextMenuOpened || e.iconsStore.iconGroupDeleteConfirmationOpened || e.todosStore.opened) return;
            const {
                openAfterAppInactiveDelaySeconds: a
            } = n.setting;
            if (0 === a) return;
            const {
                uiStore: r
            } = e, {
                lastActiveTime: o,
                time: i
            } = r;
            i - o > 1e3 * a && this.open()
        }
        setDisplaySetting(e) {
            this.model.setting.display = e, this.backupModel()
        }
        setOpenAfterAppReadySetting(e) {
            this.model.setting.openAfterAppReady = e, this.backupModel()
        }
        setOpenAfterAppInactiveDelaySecondsSetting(e) {
            this.model.setting.openAfterAppInactiveDelaySeconds = e, this.backupModel()
        }
        setBlurredBackgroundSetting(e) {
            this.model.setting.blurredBackground = e, this.backupModel()
        }
        setDisplayClockSetting(e) {
            this.model.setting.displayClock = e, this.backupModel()
        }
        setDisplayWeatherSetting(e) {
            this.model.setting.displayWeather = e, this.backupModel()
        }
    }
    Object(r.e)(ye, {
        model: r.g,
        init: r.b,
        setModel: r.b,
        opened: r.g,
        open: r.b,
        close: r.b.bound,
        checkIfNeedOpen: r.b,
        setDisplaySetting: r.b.bound,
        setOpenAfterAppReadySetting: r.b.bound,
        setOpenAfterAppInactiveDelaySecondsSetting: r.b.bound,
        setBlurredBackgroundSetting: r.b.bound,
        setDisplayClockSetting: r.b.bound,
        setDisplayWeatherSetting: r.b.bound
    });
    var Se = ye;
    class we {
        constructor(e) {
            this.rootStore = e, this.entered = !1
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            this.model = e, this.entered = !1
        }
        async backupModel() {
            await Object(k.a)({
                command: E.e,
                data: Object(r.j)(this.model),
                hasResponse: !0
            }), Object(k.a)({
                command: E.D,
                hasResponse: !1
            })
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.n,
                hasResponse: !0
            });
            this.setModel(e)
        }
        get collapsed() {
            const {
                collapsed: e
            } = this.model.setting;
            return e || this.rootStore.uiStore.width < 900
        }
        get width() {
            return this.collapsed ? 72 : 212
        }
        setEntered(e) {
            this.entered = e
        }
        setAutoHideSetting(e) {
            this.model.setting.autoHide = e, this.backupModel()
        }
        setCollapsedSetting(e) {
            this.model.setting.collapsed = e, this.backupModel()
        }
        setSideSetting(e) {
            this.model.setting.side = e, this.backupModel()
        }
    }
    Object(r.e)(we, {
        model: r.g,
        init: r.b,
        setModel: r.b,
        collapsed: r.c,
        width: r.c,
        entered: r.g,
        setEntered: r.b,
        setAutoHideSetting: r.b.bound,
        setCollapsedSetting: r.b.bound,
        setSideSetting: r.b.bound
    });
    var ke = we;
    class Ee {
        constructor(e) {
            this.rootStore = e
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            const {
                rootStore: t
            } = this;
            t.editUserNicknameCardStore.cancel(), t.editEmailUserPasswordCardStore.cancel(), this.model = e
        }
        async saveModel() {
            await Object(k.a)({
                command: E.N,
                data: Object(r.j)(this.model),
                hasResponse: !0
            }), Object(k.a)({
                command: E.J,
                hasResponse: !1
            })
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.t,
                hasResponse: !0
            });
            this.setModel(e)
        }
        setVisitorUserNickname(e) {
            const {
                data: t
            } = this.model;
            t.type === ve.a.Visitor && (t.nickname = e, t.inited = !0, this.saveModel())
        }
        setNickname(e) {
            const {
                data: t
            } = this.model;
            t.nickname = e, t.type !== ve.a.Visitor && Object(k.a)({
                command: E.O,
                hasResponse: !1
            }), this.saveModel()
        }
        setPortraitSrc(e) {
            const {
                data: t
            } = this.model;
            t.portraitSrc = e, t.type !== ve.a.Visitor && Object(k.a)({
                command: E.O,
                hasResponse: !1
            }), this.saveModel()
        }
        logout() {
            this.rootStore.settingModalStore.close(), Object(k.a)({
                command: E.w,
                hasResponse: !1
            })
        }
    }
    Object(r.e)(Ee, {
        model: r.g,
        init: r.b,
        setModel: r.b,
        setVisitorUserNickname: r.b,
        setNickname: r.b,
        setPortraitSrc: r.b,
        logout: r.b.bound
    });
    var Oe = Ee,
        Ce = n(19),
        xe = n(59),
        je = n(51);

    function _e(e) {
        let t;
        switch (e.type) {
            case je.a.Server:
                t = Ie(e);
                break;
            case je.a.Icon:
                t = Te(e)
        }
        return t
    }

    function Ie(e) {
        return e.text
    }

    function Te(e) {
        return e.data.label
    }
    var Pe = n(40),
        Me = n.n(Pe);
    class Ne {
        constructor(e) {
            this.rootStore = e, this.searchEnginePickerOpened = !1, this.input = null, this.setInput = this.setInput.bind(this), this.keyword = "", this.searcherSuggestionsOpened = !1, this.searcherSuggestionsRequestId = 0, this.currentSearcherSuggestionsIndex = -1, this.serverSearcherSuggestions = [], this.delayUpdateServerSearcherSuggestions = Me()(this.updateServerSearcherSuggestions, D.vb), this.iconSearcherSuggestions = []
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            this.model = e
        }
        async backupModel() {
            await Object(k.a)({
                command: E.d,
                data: Object(r.j)(this.model),
                hasResponse: !0
            }), Object(k.a)({
                command: E.C,
                hasResponse: !1
            })
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.m,
                hasResponse: !0
            });
            this.setModel(e)
        }
        get searcherInputScaledHeight() {
            const {
                heightPercentage: e
            } = this.model.setting;
            return D.pb * e / 100
        }
        get searcherInputScaledHeightStyle() {
            return Math.floor(this.searcherInputScaledHeight) + "px"
        }
        get searcherClassName() {
            const {
                heightPercentage: e
            } = this.model.setting;
            let t;
            return t = e < 90 ? D.t : e < 110 ? D.u : D.v, t
        }
        get currentSearcherEngine() {
            const {
                model: e
            } = this;
            return e.data.dict[e.setting.value]
        }
        get officialSearcherEngines() {
            const {
                model: e
            } = this, {
                dict: t,
                officials: n
            } = e.data;
            return n.map(e => t[e])
        }
        get officialSearcherEngineOptions() {
            const {
                officialSearcherEngines: e
            } = this;
            return e.map(e => ({
                value: e.uuid,
                text: e.title
            }))
        }
        setOpenTargetSetting(e) {
            this.model.setting.openTarget = e, this.backupModel()
        }
        setValueSetting(e) {
            this.model.setting.value = e, this.backupModel()
        }
        setWidthPercentageSetting(e) {
            this.model.setting.widthPercentage = e, this.backupModel()
        }
        setHeightPercentageSetting(e) {
            this.model.setting.heightPercentage = e, this.backupModel()
        }
        get searcherInputBorderRadiusStyle() {
            const {
                borderRadiusPercentage: e
            } = this.model.setting, {
                searcherInputScaledHeight: t
            } = this;
            return Math.ceil(t / 2 * e / 100) + "px"
        }
        get searcherIconBorderRadiusStyle() {
            const {
                borderRadiusPercentage: e
            } = this.model.setting;
            return e / 2 + "%"
        }
        setBorderRadiusPercentageSetting(e) {
            this.model.setting.borderRadiusPercentage = e, this.backupModel()
        }
        setOpacityPercentageSetting(e) {
            this.model.setting.opacityPercentage = e, this.backupModel()
        }
        setDisplayShadowSetting(e) {
            this.model.setting.displayShadow = e, this.backupModel()
        }
        openSearchEnginePicker() {
            this.searchEnginePickerOpened = !0
        }
        closeSearchEnginePicker() {
            this.searchEnginePickerOpened = !1
        }
        setInput(e) {
            this.input = e
        }
        focusInput() {
            const {
                input: e
            } = this;
            null !== e && e.focus()
        }
        get focused() {
            return this.searcherSuggestionsOpened || this.keyword.length > 0
        }
        get trimmedKeyword() {
            return this.keyword.trim().toLowerCase()
        }
        setKeyword(e) {
            this.keyword = e, this.updateSearcherSuggestions()
        }
        clearKeyword() {
            this.keyword = "", this.updateSearcherSuggestions()
        }
        openSearcherSuggestions() {
            this.searcherSuggestionsOpened = !0
        }
        closeSearcherSuggestions() {
            this.searcherSuggestionsOpened = !1
        }
        get searcherSuggestions() {
            return this.iconSearcherSuggestions.concat(this.serverSearcherSuggestions)
        }
        updateSearcherSuggestions() {
            if (this.searcherSuggestionsRequestId++, this.delayUpdateServerSearcherSuggestions.cancel(), this.currentSearcherSuggestionsIndex = -1, 0 === this.trimmedKeyword.length) return this.serverSearcherSuggestions = [], void(this.iconSearcherSuggestions = []);
            this.delayUpdateServerSearcherSuggestions(), this.updateIconSearcherSuggestions()
        }
        pickSearcherSuggestion(e) {
            this.keyword = _e(e), this.currentSearcherSuggestionsIndex = this.searcherSuggestions.indexOf(e), this.search()
        }
        pickPrevSearcherSuggestion() {
            const {
                searcherSuggestions: e,
                currentSearcherSuggestionsIndex: t
            } = this, n = e.length;
            0 !== n && (t >= 0 ? (this.currentSearcherSuggestionsIndex = t - 1, -1 !== this.currentSearcherSuggestionsIndex && (this.keyword = _e(e[this.currentSearcherSuggestionsIndex]))) : this.currentSearcherSuggestionsIndex = n - 1)
        }
        pickNextSearcherSuggestion() {
            const {
                searcherSuggestions: e,
                currentSearcherSuggestionsIndex: t
            } = this, n = e.length;
            0 !== n && (t < n - 1 ? (this.currentSearcherSuggestionsIndex = t + 1, this.keyword = _e(e[this.currentSearcherSuggestionsIndex])) : this.currentSearcherSuggestionsIndex = -1)
        }
        async updateServerSearcherSuggestions() {
            const {
                searcherSuggestionsRequestId: e
            } = this, t = this.keyword.trim(), n = await Object(xe.d)(this.rootStore.userStore.model, t);
            e === this.searcherSuggestionsRequestId && Object(r.h)(() => {
                this.serverSearcherSuggestions = n;
                const {
                    currentSearcherSuggestionsIndex: e
                } = this;
                e >= this.iconSearcherSuggestions.length && (this.currentSearcherSuggestionsIndex = -1)
            })
        }
        updateIconSearcherSuggestions() {
            const e = this.trimmedKeyword,
                {
                    rootStore: t
                } = this,
                {
                    iconsStore: n
                } = t,
                a = [],
                {
                    groups: r,
                    groupDict: o,
                    iconDict: i
                } = n.model.data,
                {
                    currentIconGroupUuid: c
                } = n;
            let s = !1;
            if (null !== c) {
                const t = o[c].data;
                for (let n = 0, r = t.length; n < r; n++) {
                    const r = i[t[n]];
                    if (r.label.toLowerCase().startsWith(e)) {
                        s = !0;
                        const t = {
                            uuid: r.uuid,
                            type: je.a.Icon,
                            data: Object(te.a)(r),
                            keyword: e
                        };
                        a.push(t);
                        break
                    }
                }
            }
            if (!s) {
                const t = null === c ? -1 : r.indexOf(c);
                for (let n = 0, c = r.length; n < c; n++) {
                    if (n === t) continue;
                    const c = o[r[n]].data;
                    for (let t = 0, n = c.length; t < n; t++) {
                        const n = i[c[t]];
                        if (n.label.toLowerCase().startsWith(e)) {
                            s = !0;
                            const t = {
                                uuid: n.uuid,
                                type: je.a.Icon,
                                data: Object(te.a)(n),
                                keyword: e
                            };
                            a.push(t);
                            break
                        }
                    }
                    if (s) break
                }
            }
            this.iconSearcherSuggestions = a
        }
        search() {
            const {
                model: e,
                currentSearcherSuggestionsIndex: t
            } = this;
            let {
                keyword: n
            } = this;
            const {
                openTarget: a
            } = e.setting;
            if (-1 !== t) {
                const e = this.searcherSuggestions[t];
                if (e.type === je.a.Icon) {
                    const {
                        url: t
                    } = e.data;
                    return (a !== Ce.a.CurrentTab || Object(ae.b)(t)) && this.clearKeyword(), void this.rootStore.iconsStore.openIconByUrl(t, a)
                }
            }
            if (n = n.trim(), 0 === n.length) return;
            const {
                currentSearcherEngine: r
            } = this;
            a !== Ce.a.CurrentTab && this.clearKeyword();
            let {
                url: o
            } = r;
            4 === r.id && 1 !== this.rootStore.tempCommonStore.model.data.region && (o = "https://www.baidu.com/s?ie=utf-8&wd=%s"), this.rootStore.gaStore.sendEvent({
                category: "searcher",
                action: "search",
                label: o
            }), Object(ee.a)({
                url: o.replace("%s", encodeURIComponent(n)),
                openTarget: a
            })
        }
    }
    Object(r.e)(Ne, {
        model: r.g,
        init: r.b,
        setModel: r.b,
        searcherInputScaledHeight: r.c,
        searcherInputScaledHeightStyle: r.c,
        searcherClassName: r.c,
        currentSearcherEngine: r.c,
        officialSearcherEngines: r.c,
        officialSearcherEngineOptions: r.c,
        setOpenTargetSetting: r.b.bound,
        setValueSetting: r.b.bound,
        setWidthPercentageSetting: r.b.bound,
        setHeightPercentageSetting: r.b.bound,
        searcherInputBorderRadiusStyle: r.c,
        searcherIconBorderRadiusStyle: r.c,
        setBorderRadiusPercentageSetting: r.b.bound,
        setOpacityPercentageSetting: r.b.bound,
        setDisplayShadowSetting: r.b.bound,
        searchEnginePickerOpened: r.g,
        openSearchEnginePicker: r.b,
        closeSearchEnginePicker: r.b.bound,
        focused: r.c,
        keyword: r.g,
        trimmedKeyword: r.c,
        setKeyword: r.b,
        clearKeyword: r.b.bound,
        searcherSuggestionsOpened: r.g,
        openSearcherSuggestions: r.b.bound,
        closeSearcherSuggestions: r.b.bound,
        searcherSuggestions: r.c,
        currentSearcherSuggestionsIndex: r.g,
        updateSearcherSuggestions: r.b,
        pickSearcherSuggestion: r.b,
        pickPrevSearcherSuggestion: r.b,
        pickNextSearcherSuggestion: r.b,
        serverSearcherSuggestions: r.g.ref,
        iconSearcherSuggestions: r.g.ref,
        updateIconSearcherSuggestions: r.b,
        search: r.b
    });
    var Le, Re = Ne;
    ! function(e) {
        e.General = "general", e.ThemeAndWallpaper = "themeAndWallpaper", e.Appearance = "appearance", e.Others = "others"
    }(Le || (Le = {}));
    class De {
        constructor(e) {
            this.rootStore = e, this.opened = !1, this.tabs = [{
                text: Object(H.a)("general"),
                value: Le.General
            }, {
                text: Object(H.a)("theme_and_wallpaper"),
                value: Le.ThemeAndWallpaper
            }, {
                text: Object(H.a)("appearance"),
                value: Le.Appearance
            }, {
                text: Object(H.a)("feedback_and_others"),
                value: Le.Others
            }], this.tabValue = Le.General, this.mainViewAdjusting = !1, this.searcherViewAdjusting = !1, this.iconsViewAdjusting = !1
        }
        open() {
            this.opened = !0
        }
        openThenSwitchToGeneral() {
            this.opened = !0, this.reset()
        }
        close() {
            this.opened = !1
        }
        setTabValue(e) {
            this.tabValue = e;
            const {
                rootStore: t
            } = this;
            t.editLocationCardStore.cancel(), t.editUserNicknameCardStore.cancel(), t.editEmailUserPasswordCardStore.cancel()
        }
        startAdjustMainView() {
            this.mainViewAdjusting = !0
        }
        endAdjustMainView() {
            this.mainViewAdjusting = !1
        }
        startAdjustSearcherView() {
            this.searcherViewAdjusting = !0
        }
        endAdjustSearcherView() {
            this.searcherViewAdjusting = !1
        }
        startAdjustIconsView() {
            this.iconsViewAdjusting = !0
        }
        endAdjustIconsView() {
            this.iconsViewAdjusting = !1
        }
        get title() {
            const {
                tabValue: e
            } = this, t = this.tabs.find(t => t.value === e);
            return t ? t.text : null
        }
        reset() {
            const {
                rootStore: e
            } = this;
            this.tabValue = Le.General, this.mainViewAdjusting = !1, this.iconsViewAdjusting = !1, this.searcherViewAdjusting = !1, e.editEmailUserPasswordCardStore.cancel(), e.editUserNicknameCardStore.cancel()
        }
    }
    Object(r.e)(De, {
        opened: r.g,
        open: r.b.bound,
        openThenSwitchToGeneral: r.b.bound,
        close: r.b.bound,
        tabValue: r.g,
        setTabValue: r.b,
        mainViewAdjusting: r.g,
        startAdjustMainView: r.b.bound,
        endAdjustMainView: r.b.bound,
        searcherViewAdjusting: r.g,
        startAdjustSearcherView: r.b.bound,
        endAdjustSearcherView: r.b.bound,
        iconsViewAdjusting: r.g,
        startAdjustIconsView: r.b.bound,
        endAdjustIconsView: r.b.bound,
        title: r.c,
        reset: r.b
    });
    var Ae = De,
        Be = n(109),
        Ge = n(307),
        Ue = n.n(Ge),
        Ve = n(308),
        Fe = n.n(Ve),
        ze = n(239),
        We = n.n(ze);
    var He = Object(ie.a)((function({
            icoSrc: e,
            onClick: t,
            children: n,
            btns: a
        }) {
            return oe.a.createElement("div", {
                className: We.a.main,
                onClick: t
            }, void 0 !== e && oe.a.createElement("img", {
                className: We.a.icon,
                src: e
            }), n, void 0 !== a && oe.a.createElement("div", {
                className: We.a.btns
            }, a))
        })),
        qe = n(309),
        Ke = n.n(qe),
        Qe = n(73);
    var Ye = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", {
                className: Ke.a.main
            }, oe.a.createElement(Qe.a, null, e))
        })),
        Je = n(57),
        Xe = n(310),
        Ze = n.n(Xe);
    var $e = Object(ie.a)((function({
        children: e
    }) {
        return oe.a.createElement("div", {
            className: Ze.a.main
        }, e)
    }));
    var et, tt = Object(ie.a)((function({
            status: e,
            emptyIcoSrc: t,
            emptyMessage: n,
            notFoundMessage: a,
            notFoundBtns: r,
            reloadErrorMessage: o,
            onReload: i
        }) {
            const c = e === st.Reloading,
                s = e === st.ReloadErrored;
            let l = void 0,
                u = void 0,
                d = void 0;
            if (c) u = oe.a.createElement(Je.a, {
                reversed: !0,
                displayText: !0
            });
            else switch (e) {
                case st.Empty:
                    l = t, u = oe.a.createElement($e, null, n);
                    break;
                case st.NotFound:
                    u = oe.a.createElement(Ye, null, a), d = r;
                    break;
                case st.ReloadErrored:
                    u = oe.a.createElement(Ye, null, o)
            }
            return oe.a.createElement("div", {
                className: Fe.a.main,
                onClick: s ? i : void 0
            }, oe.a.createElement(He, {
                icoSrc: l,
                btns: d
            }, u))
        })),
        nt = n(102),
        at = n.n(nt),
        rt = n(240),
        ot = n.n(rt);
    ! function(e) {
        e.Left = "left", e.Right = "right"
    }(et || (et = {}));
    var it = et;
    var ct = Object(ie.a)((function({
        verticalScrollbarSide: e = it.Right,
        viewportClassName: t,
        scrollerClassName: n,
        contentClassName: a,
        onMouseEnter: r,
        onMouseMove: o,
        onMouseLeave: i,
        onMouseUp: c,
        onScroll: s,
        onContextMenu: l,
        paddingLeft: u = 16,
        paddingRight: d = 16,
        children: p
    }, f) {
        const m = Object(re.useRef)(null),
            h = e === it.Left,
            b = ((h ? u : d) - 6) / 2;
        Object(re.useImperativeHandle)(f, () => ({
            increaseScrollTop(e) {
                null !== m.current && (m.current.scrollTop += e)
            },
            checkIfAtTop: () => null === m.current || 0 === m.current.scrollTop,
            checkIfAtBottom: () => null === m.current || m.current.scrollTop + m.current.clientHeight + 1 >= m.current.scrollHeight,
            scrollToBottom() {
                null !== m.current && (m.current.scrollTop = m.current.scrollHeight - m.current.clientHeight)
            }
        }), [m]);
        const g = se()(ot.a.scroller, n, h && ot.a.verticalScrollbarAtLeftSideScroller),
            v = se()(ot.a.content, a);
        return oe.a.createElement("div", {
            className: t,
            style: {
                paddingLeft: h ? b + "px" : void 0,
                paddingRight: h ? void 0 : b + "px"
            },
            onMouseEnter: r,
            onMouseMove: o,
            onMouseLeave: i,
            onMouseUp: c,
            onContextMenu: l
        }, oe.a.createElement("div", {
            className: g,
            ref: m,
            onScroll: s
        }, oe.a.createElement("div", {
            className: v,
            style: {
                paddingLeft: (h ? b : u) + "px",
                paddingRight: (h ? d : b) + "px"
            }
        }, p)))
    }), {
        forwardRef: !0
    });
    var st, lt = Object(ie.a)((function({
        status: e,
        nextLoadErrorMessage: t,
        onNextLoad: n,
        onScroll: a,
        children: r
    }) {
        const o = Object(re.useCallback)(e => {
            a && a(e);
            const t = e.currentTarget;
            t.scrollTop + t.offsetHeight < t.scrollHeight - 98 || n()
        }, [n, a]);
        return oe.a.createElement(ct, {
            viewportClassName: at.a.viewport,
            scrollerClassName: at.a.scroller,
            contentClassName: at.a.content,
            onScroll: e === st.HasMore ? o : a
        }, oe.a.createElement("div", {
            className: at.a.contentMain
        }, r), (e === st.HasMore || e === st.NextLoading) && oe.a.createElement("div", {
            className: at.a.contentAside
        }, oe.a.createElement(He, null, oe.a.createElement(Je.a, {
            reversed: !0,
            displayText: !0
        }))), e === st.NextLoadErrored && oe.a.createElement("div", {
            className: at.a.contentAside
        }, oe.a.createElement(He, {
            onClick: n
        }, oe.a.createElement(Ye, null, t))), e === st.Ended && oe.a.createElement("div", {
            className: at.a.contentAside
        }, oe.a.createElement(He, null, oe.a.createElement($e, null, Object(H.a)("the_end")))))
    }));
    ! function(e) {
        e[e.Reloading = 0] = "Reloading", e[e.NotFound = 1] = "NotFound", e[e.ReloadErrored = 2] = "ReloadErrored", e[e.NextLoading = 3] = "NextLoading", e[e.NextLoadErrored = 4] = "NextLoadErrored", e[e.HasMore = 5] = "HasMore", e[e.Ended = 6] = "Ended", e[e.Empty = 7] = "Empty"
    }(st || (st = {}));
    var ut = Object(ie.a)((function({
            status: e,
            emptyIcoSrc: t,
            emptyMessage: n = "",
            notFoundMessage: a = Object(H.a)("not_found"),
            notFoundBtns: r,
            reloadErrorMessage: o = "",
            nextLoadErrorMessage: i = "",
            children: c,
            onNextLoad: s,
            onReload: l,
            onScroll: u
        }) {
            let d;
            return d = e === st.Reloading || e === st.NotFound || e === st.ReloadErrored || e === st.Empty ? oe.a.createElement(tt, {
                status: e,
                emptyIcoSrc: t,
                emptyMessage: n,
                notFoundMessage: a,
                notFoundBtns: r,
                reloadErrorMessage: o,
                onReload: l
            }) : oe.a.createElement(lt, {
                status: e,
                nextLoadErrorMessage: i,
                onNextLoad: s,
                onScroll: u
            }, c), oe.a.createElement("div", {
                className: Ue.a.main
            }, d)
        })),
        dt = n(13),
        pt = n(42),
        ft = n(22);
    class mt {
        constructor(e) {
            this.rootStore = e, this.opened = !1, this.categoryValue = D.fb[0].value, this.keyword = "", this.iconsLoadedOnce = !1, this.iconsLanguage = null, this.iconsMax = null, this.iconsStatus = st.Reloading, this.iconsReloadErrorMessage = "", this.iconsNextLoadErrorMessage = "", this.iconsRequestId = 0, this.icons = [], this.delayReloadIcons = Me()(this.reloadIcons, D.vb), this.missingIconSubmitRequestId = 0, this.missingIconReporting = !1, this.missingIconSubmitting = !1, this.missingIconUrl = Object(ft.a)(""), this.iconFormStatus = dt.a.Inputting
        }
        open() {
            this.opened = !0, this.resetIconForm(), this.iconsLoadedOnce || this.reloadIcons()
        }
        close() {
            this.opened = !1
        }
        get categories() {
            let e = [];
            return e = e.concat(D.eb), e = e.concat(D.fb), e
        }
        setCategoryValue(e) {
            this.categoryValue = e, this.keyword = "", this.missingIconReporting = !1, e !== D.eb.value && this.reloadIcons()
        }
        setKeyword(e) {
            this.keyword = e, this.missingIconReporting = !1, 0 === (e = e.trim()).length ? this.categoryValue !== D.fb[0].value && (this.categoryValue = D.fb[0].value, this.reloadIcons()) : (this.iconsRequestId++, this.delayReloadIcons.cancel(), this.iconsStatus = st.Reloading, this.categoryValue = null, this.delayReloadIcons())
        }
        reloadPopularIcons() {
            this.setKeyword("")
        }
        reloadIcons() {
            this.iconsLoadedOnce = !0, this.iconsLanguage = null, this.iconsMax = null, this.iconsStatus = st.Reloading, this.icons = [], this.loadIcons()
        }
        nextLoadIcons() {
            this.iconsStatus = st.NextLoading, this.loadIcons()
        }
        async loadIcons() {
            this.delayReloadIcons.cancel();
            const e = ++this.iconsRequestId,
                {
                    rootStore: t
                } = this;
            try {
                const n = await Object(pt.g)(t.userStore.model, {
                    categoryValue: this.categoryValue,
                    language: this.iconsLanguage,
                    keyword: this.keyword.trim(),
                    max: this.iconsMax
                });
                if (e !== this.iconsRequestId) return;
                Object(r.h)(() => {
                    0 === n.data.length ? 0 === this.icons.length ? this.iconsStatus = st.NotFound : this.iconsStatus = st.Ended : (this.iconsStatus = n.hasMore ? st.HasMore : st.Ended, this.icons = this.icons.concat(n.data), this.iconsMax = n.max, this.iconsLanguage = n.language)
                })
            } catch (t) {
                if (e !== this.iconsRequestId) return;
                Object(r.h)(() => {
                    const e = Object(q.d)(t);
                    this.iconsStatus === st.Reloading ? (this.iconsStatus = st.ReloadErrored, this.iconsReloadErrorMessage = e) : (this.iconsStatus = st.NextLoadErrored, this.iconsNextLoadErrorMessage = e)
                })
            }
        }
        validateMissingIconUrl() {
            const {
                missingIconUrl: e
            } = this;
            return 0 === e.value.length ? (e.errored = !0, e.errorMessage = Object(H.a)("required")) : e.errored = !1, !e.errored
        }
        setMissingIconUrl(e) {
            const {
                missingIconUrl: t
            } = this;
            t.touched = !0, t.value = e, this.validateMissingIconUrl()
        }
        validateMissingIcon() {
            let e = !0;
            return e = this.validateMissingIconUrl() && e, e
        }
        async submitReportMissingIcon() {
            if (!this.validateMissingIcon()) return;
            const e = ++this.missingIconSubmitRequestId;
            try {
                this.missingIconSubmitting = !0;
                const {
                    rootStore: t
                } = this;
                if (await Object(pt.h)(t.userStore.model, this.missingIconUrl.value), this.missingIconSubmitRequestId !== e) return;
                Object(r.h)(() => {
                    this.rootStore.messagesStore.notificateMessage({
                        status: W.Successed,
                        content: Object(H.a)("request_for_inclusion_successful")
                    }), this.reloadPopularIcons()
                })
            } catch (t) {
                if (this.missingIconSubmitRequestId !== e) return;
                Object(r.h)(() => {
                    this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(q.d)(t)
                    }), this.missingIconSubmitting = !1
                })
            }
        }
        startReportMissingIcon() {
            this.missingIconReporting = !0, this.missingIconSubmitting = !1, this.keyword = "", Object(ft.b)(this.missingIconUrl, "")
        }
        cancelReportMissingIcon() {
            ++this.missingIconSubmitRequestId, this.reloadPopularIcons()
        }
        resetIconForm() {
            this.iconForm = new Be.a({
                getUser: () => this.rootStore.userStore.model,
                onError: e => {
                    this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: e
                    })
                }
            })
        }
        async submitIconForm() {
            const {
                iconForm: e
            } = this;
            if (!e.validate()) return !1;
            this.iconFormStatus = dt.a.Submitting;
            const t = e.toJs();
            if (t.type === $.a.Image && !t.icoSrc.uploaded) try {
                const e = this.rootStore.userStore.model.data.token;
                if (t.icoSrc = await V(this.rootStore.userStore.model, t.icoSrc), e !== this.rootStore.userStore.model.data.token) return Object(r.h)(() => {
                    this.rootStore.staticCleanerStore.deleteUserStatics(e, Object(te.e)(t)), this.iconFormStatus = dt.a.Inputting, this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(H.a)("user_changed")
                    })
                }), !1
            } catch (e) {
                return Object(r.h)(() => {
                    this.iconFormStatus = dt.a.Inputting, this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(q.d)(e)
                    })
                }), !1
            }
            return Object(r.h)(() => {
                this.rootStore.iconsStore.addIcon(t), this.iconFormStatus = dt.a.Inputting
            }), !0
        }
        async submitIconFormThenClose() {
            await this.submitIconForm() && Object(r.h)(() => {
                this.close()
            })
        }
        async submitIconFormThenContinue() {
            await this.submitIconForm() && Object(r.h)(() => {
                this.resetIconForm()
            })
        }
    }
    Object(r.e)(mt, {
        opened: r.g,
        open: r.b.bound,
        close: r.b.bound,
        categories: r.c,
        categoryValue: r.g,
        setCategoryValue: r.b,
        keyword: r.g,
        setKeyword: r.b.bound,
        iconsStatus: r.g,
        iconsReloadErrorMessage: r.g,
        iconsNextLoadErrorMessage: r.g,
        icons: r.g.ref,
        reloadPopularIcons: r.b.bound,
        reloadIcons: r.b.bound,
        nextLoadIcons: r.b.bound,
        missingIconReporting: r.g,
        missingIconSubmitting: r.g,
        missingIconUrl: r.g,
        validateMissingIconUrl: r.b.bound,
        setMissingIconUrl: r.b.bound,
        validateMissingIcon: r.b,
        startReportMissingIcon: r.b.bound,
        submitReportMissingIcon: r.b.bound,
        cancelReportMissingIcon: r.b.bound,
        iconForm: r.g.ref,
        iconFormStatus: r.g,
        resetIconForm: r.b,
        submitIconForm: r.b,
        submitIconFormThenClose: r.b.bound,
        submitIconFormThenContinue: r.b.bound
    });
    var ht = mt;
    class bt {
        constructor(e) {
            this.rootStore = e, this.opened = !1, this.formStatus = dt.a.Inputting
        }
        startEdit(e) {
            const {
                iconsStore: t
            } = this.rootStore, {
                iconDict: n
            } = t.model.data, a = n[e];
            void 0 !== a && (this.opened = !0, this.form = new Be.a({
                icon: a,
                getUser: () => this.rootStore.userStore.model,
                onError: e => {
                    this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: e
                    })
                }
            }))
        }
        async submit() {
            const {
                form: e
            } = this;
            if (!e.validate()) return;
            this.formStatus = dt.a.Submitting;
            const t = e.toJs();
            if (t.type === $.a.Image && !t.icoSrc.uploaded) try {
                const e = this.rootStore.userStore.model.data.token;
                if (t.icoSrc = await V(this.rootStore.userStore.model, t.icoSrc), e !== this.rootStore.userStore.model.data.token) return void Object(r.h)(() => {
                    this.rootStore.staticCleanerStore.deleteUserStatics(e, Object(te.e)(t)), this.formStatus = dt.a.Inputting, this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(H.a)("user_changed")
                    })
                })
            } catch (e) {
                return void Object(r.h)(() => {
                    this.formStatus = dt.a.Inputting, this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(q.d)(e)
                    })
                })
            }
            Object(r.h)(() => {
                this.rootStore.iconsStore.updateIcon(t), this.formStatus = dt.a.Inputting, this.opened = !1
            })
        }
        cancel() {
            this.opened = !1
        }
    }
    Object(r.e)(bt, {
        opened: r.g,
        form: r.g.ref,
        formStatus: r.g,
        startEdit: r.b,
        submit: r.b.bound,
        cancel: r.b.bound
    });
    var gt = bt;
    class vt {
        constructor(e) {
            const t = {
                uuid: null,
                label: Object(ft.a)(""),
                icoSrc: D.gb[0]
            };
            e && (t.uuid = e.uuid, t.label.value = e.label, t.icoSrc = e.icoSrc), this.model = t
        }
        validateLabel() {
            const {
                model: e
            } = this, {
                label: t
            } = e;
            return 0 === t.value.length ? (t.errored = !0, t.errorMessage = Object(H.a)("required")) : t.errored = !1, !t.errored
        }
        setLabel(e) {
            const {
                model: t
            } = this;
            t.label.touched = !0, t.label.value = e, this.validateLabel()
        }
        setIcoSrc(e) {
            this.model.icoSrc = e
        }
        validate() {
            let e = !0;
            return e = this.validateLabel() && e, e
        }
    }
    Object(r.e)(vt, {
        model: r.g,
        validateLabel: r.b.bound,
        setLabel: r.b.bound,
        setIcoSrc: r.b.bound,
        validate: r.b
    });
    var yt = vt;
    class St {
        constructor(e) {
            this.rootStore = e, this.opened = !1, this.triggerDom = document.createElement("div")
        }
        startCreate(e) {
            this.opened = !0, this.form = new yt, this.triggerDom = e
        }
        startEdit(e, t) {
            this.opened = !0, this.form = new yt(e), this.triggerDom = t
        }
        submit() {
            this.form.validate() && (this.opened = !1, this.rootStore.iconsStore.addOrUpdateIconGroup(this.form.model))
        }
        cancel() {
            this.opened = !1
        }
    }
    Object(r.e)(St, {
        opened: r.g,
        form: r.g.ref,
        triggerDom: r.g.ref,
        startCreate: r.b,
        startEdit: r.b,
        submit: r.b.bound,
        cancel: r.b.bound
    });
    var wt = St,
        kt = n(64);
    class Et {
        constructor(e) {
            this.rootStore = e, this.opened = !1, this.categoryValue = D.fc[0].value, this.keyword = "", this.wallpapersLoadedOnce = !1, this.wallpapersMax = null, this.wallpapersStatus = st.Reloading, this.wallpapersReloadErrorMessage = "", this.wallpapersNextLoadErrorMessage = "", this.wallpapersRequestId = 0, this.wallpapers = [], this.delayReloadWallpapers = Me()(this.reloadWallpapers, D.vb)
        }
        open() {
            this.opened = !0, this.wallpapersLoadedOnce || this.reloadWallpapers()
        }
        close() {
            this.opened = !1
        }
        get categories() {
            let e = [];
            return e = e.concat(D.fc), e
        }
        setCategoryValue(e) {
            this.categoryValue = e, this.keyword = "", this.reloadWallpapers()
        }
        setKeyword(e) {
            this.keyword = e, 0 === (e = e.trim()).length ? this.categoryValue !== D.fc[0].value && (this.categoryValue = D.fc[0].value, this.reloadWallpapers()) : (this.wallpapersRequestId++, this.delayReloadWallpapers.cancel(), this.wallpapersStatus = st.Reloading, this.categoryValue = null, this.delayReloadWallpapers())
        }
        reloadWallpapers() {
            this.wallpapersLoadedOnce = !0, this.wallpapersMax = null, this.wallpapersStatus = st.Reloading, this.wallpapers = [], this.loadWallpapers()
        }
        nextLoadWallpapers() {
            this.wallpapersStatus = st.NextLoading, this.loadWallpapers()
        }
        async loadWallpapers() {
            this.delayReloadWallpapers.cancel();
            const e = ++this.wallpapersRequestId,
                {
                    rootStore: t
                } = this;
            try {
                const n = await Object(kt.c)(t.userStore.model, {
                    themeType: this.rootStore.commonStore.themeType,
                    categoryValue: this.categoryValue,
                    keyword: this.keyword.trim(),
                    max: this.wallpapersMax
                });
                if (e !== this.wallpapersRequestId) return;
                Object(r.h)(() => {
                    0 === n.data.length ? 0 === this.wallpapers.length ? this.wallpapersStatus = st.NotFound : this.wallpapersStatus = st.Ended : (this.wallpapersStatus = n.hasMore ? st.HasMore : st.Ended, this.wallpapers = this.wallpapers.concat(n.data), this.wallpapersMax = n.max)
                })
            } catch (t) {
                if (e !== this.wallpapersRequestId) return;
                Object(r.h)(() => {
                    const e = Object(q.d)(t);
                    this.wallpapersStatus === st.Reloading ? (this.wallpapersStatus = st.ReloadErrored, this.wallpapersReloadErrorMessage = e) : (this.wallpapersStatus = st.NextLoadErrored, this.wallpapersNextLoadErrorMessage = e)
                })
            }
        }
    }
    Object(r.e)(Et, {
        opened: r.g,
        open: r.b,
        close: r.b.bound,
        categories: r.c,
        categoryValue: r.g,
        setCategoryValue: r.b,
        keyword: r.g,
        setKeyword: r.b.bound,
        wallpapersStatus: r.g,
        wallpapersReloadErrorMessage: r.g,
        wallpapersNextLoadErrorMessage: r.g,
        wallpapers: r.g.ref,
        reloadWallpapers: r.b.bound,
        nextLoadWallpapers: r.b.bound
    });
    var Ot, Ct = Et;
    ! function(e) {
        e.Nickname = "nickname", e.Register = "register", e.Login = "login", e.FindPassword = "findPassword", e.Import = "import"
    }(Ot || (Ot = {}));
    class xt {
        constructor(e) {
            this.rootStore = e, this.opened = !1, this.welcoming = !1, this.tabValue = Ot.Nickname, this.importGuiding = !1, this.registerGuiding = !1, this.loginGuiding = !1
        }
        close() {
            this.opened = !1
        }
        startGuide() {
            this.opened = !0, this.welcoming = !0, this.switchToNickname(), setTimeout(Object(r.b)(() => {
                this.welcoming = !1
            }), 1e3)
        }
        endGuide() {
            const {
                rootStore: e
            } = this, {
                guidePagesImportPageStore: t
            } = e;
            t.commit()
        }
        endGuideThenEnter() {
            this.endGuide(), this.close()
        }
        backToNickname() {
            this.tabValue = Ot.Nickname
        }
        switchToNickname() {
            this.backToNickname(), this.rootStore.guidePagesNicknamePageStore.reset()
        }
        switchToLogin() {
            this.tabValue = Ot.Login, this.loginGuiding = !1, this.rootStore.guidePagesLoginPageStore.reset()
        }
        switchToGuideLogin() {
            this.tabValue = Ot.Login, this.loginGuiding = !0, this.rootStore.guidePagesLoginPageStore.reset()
        }
        switchToRegister() {
            this.tabValue = Ot.Register, this.registerGuiding = !1, this.rootStore.guidePagesRegisterPageStore.reset()
        }
        switchToGuideRegister() {
            this.tabValue = Ot.Register, this.registerGuiding = !0, this.rootStore.guidePagesRegisterPageStore.reset()
        }
        switchToFindPassword() {
            this.tabValue = Ot.FindPassword, this.rootStore.guidePagesFindPasswordPageStore.reset()
        }
        backToImport() {
            this.tabValue = Ot.Import
        }
        switchToImport() {
            this.backToImport(), this.importGuiding = !1, this.rootStore.guidePagesImportPageStore.reset()
        }
        switchToGuideImport() {
            this.backToImport(), this.importGuiding = !0, this.rootStore.guidePagesImportPageStore.reset()
        }
        startLogin() {
            this.opened = !0, this.switchToLogin()
        }
        startImport() {
            this.opened = !0, this.switchToImport()
        }
    }
    Object(r.e)(xt, {
        opened: r.g,
        welcoming: r.g,
        tabValue: r.g,
        importGuiding: r.g,
        registerGuiding: r.g,
        loginGuiding: r.g,
        close: r.b.bound,
        startGuide: r.b,
        endGuide: r.b,
        endGuideThenEnter: r.b.bound,
        backToNickname: r.b,
        switchToNickname: r.b,
        switchToLogin: r.b.bound,
        switchToGuideLogin: r.b.bound,
        switchToRegister: r.b.bound,
        switchToGuideRegister: r.b.bound,
        switchToFindPassword: r.b.bound,
        backToImport: r.b,
        switchToImport: r.b,
        switchToGuideImport: r.b,
        startLogin: r.b.bound,
        startImport: r.b.bound
    });
    var jt = xt;
    class _t {
        constructor(e) {
            this.rootStore = e, this.status = dt.a.Inputting, this.errorMessage = "", this.nickname = Object(ft.a)("")
        }
        get formErrored() {
            return this.status === dt.a.Failed
        }
        get formErrorMessage() {
            return this.status === dt.a.Failed ? this.errorMessage : ""
        }
        setNickname(e) {
            this.nickname.touched = !0, this.nickname.value = e
        }
        validate() {
            return !0
        }
        reset() {
            const {
                nickname: e
            } = this;
            Object(ft.b)(e, "")
        }
        submit() {
            const {
                rootStore: e
            } = this;
            if (!this.validate()) return;
            let t = this.nickname.value.trim();
            0 === t.length && (t = D.U);
            const {
                userStore: n,
                guidePagesStore: a
            } = e;
            n.setVisitorUserNickname(t), a.switchToGuideImport()
        }
        skipCurrentStep() {
            const {
                rootStore: e
            } = this;
            this.reset();
            const {
                userStore: t,
                guidePagesStore: n
            } = e;
            t.setVisitorUserNickname(D.U), n.switchToGuideImport()
        }
        skipGuideThenLogin() {
            const {
                rootStore: e
            } = this, {
                userStore: t,
                guidePagesStore: n
            } = e;
            t.setVisitorUserNickname(D.U), n.switchToLogin()
        }
        skipGuideThenEnter() {
            const {
                rootStore: e
            } = this, {
                userStore: t,
                guidePagesStore: n
            } = e;
            t.setVisitorUserNickname(D.U), n.close()
        }
    }
    Object(r.e)(_t, {
        status: r.g,
        errorMessage: r.g,
        formErrored: r.c,
        formErrorMessage: r.c,
        nickname: r.g,
        setNickname: r.b.bound,
        reset: r.b,
        submit: r.b.bound,
        skipCurrentStep: r.b.bound,
        skipGuideThenLogin: r.b.bound,
        skipGuideThenEnter: r.b.bound
    });
    var It = _t;
    var Tt = n(26);
    class Pt {
        constructor(e) {
            this.rootStore = e, this.status = dt.a.Inputting, this.errorMessage = "", this.email = Object(ft.a)(""), this.password = Object(ft.a)(""), this.captcha = null, this.captchaReloading = !1, this.captchaCode = Object(ft.a)("")
        }
        get formErrored() {
            return this.email.errored || this.password.errored || this.status === dt.a.Failed
        }
        get formErrorMessage() {
            const {
                email: e
            } = this;
            if (e.errored) return e.errorMessage;
            const {
                password: t
            } = this;
            if (t.errored) return t.errorMessage;
            const {
                captchaCode: n
            } = this;
            return n.errored ? n.errorMessage : this.status === dt.a.Failed ? this.errorMessage : ""
        }
        validateEmail() {
            const {
                email: e
            } = this;
            return 0 === e.value.length ? (e.errored = !0, e.errorMessage = Object(H.a)("please_complete_form")) : e.errored = !1, !e.errored
        }
        setEmail(e) {
            this.email.value = e, this.email.touched = !0, this.validateEmail()
        }
        validatePassword() {
            const {
                password: e
            } = this;
            return 0 === e.value.length ? (e.errored = !0, e.errorMessage = Object(H.a)("please_complete_form")) : e.errored = !1, !e.errored
        }
        setPassword(e) {
            this.password.value = e, this.password.touched = !0, this.validatePassword()
        }
        async reloadCaptcha() {
            const e = await async function(e, t, n) {
                const a = (await B()({
                    url: D.a + "/home/captcha",
                    method: "get",
                    headers: {
                        secret: Object(G.b)(e)
                    },
                    params: {
                        len: t,
                        width: n.width,
                        height: n.height
                    }
                })).data;
                return {
                    token: a.data.key,
                    imageSrc: Object(P.c)(a.data.base64)
                }
            }(this.rootStore.userStore.model, 4, {
                width: 170,
                height: 62
            });
            Object(r.h)(() => {
                this.captcha = e
            })
        }
        validateCaptchaCode() {
            const {
                captchaCode: e
            } = this;
            return 0 === e.value.length ? (e.errored = !0, e.errorMessage = Object(H.a)("please_complete_form")) : e.errored = !1, !e.errored
        }
        setCaptchaCode(e) {
            this.captchaCode.value = e, this.captchaCode.touched = !0, this.validateCaptchaCode()
        }
        validate() {
            let e = !0;
            return e = this.validateEmail() && e, e = this.validatePassword() && e, e = this.validateCaptchaCode() && e, e
        }
        reset() {
            const {
                email: e,
                password: t,
                captchaCode: n
            } = this;
            this.status = dt.a.Inputting, Object(ft.b)(e, ""), Object(ft.b)(t, ""), Object(ft.b)(n, ""), this.reloadCaptcha()
        }
        async submit() {
            if (null !== this.captcha && this.validate()) try {
                this.status = dt.a.Submitting;
                const e = this.email.value;
                await Object(Tt.y)(this.rootStore.userStore.model, {
                    email: e,
                    password: this.password.value
                }, {
                    token: this.captcha.token,
                    code: this.captchaCode.value
                }), Object(r.h)(() => {
                    this.status = dt.a.Successed;
                    const {
                        guidePagesStore: t
                    } = this.rootStore;
                    t.registerGuiding ? (t.endGuide(), t.switchToGuideLogin()) : t.switchToLogin(), this.rootStore.guidePagesLoginPageStore.fulfillEmail(e)
                })
            } catch (e) {
                Object(r.h)(() => {
                    this.status = dt.a.Failed, this.errorMessage = Object(q.d)(e, {
                        422: Object(H.a)("email_format_invalid"),
                        1001: Object(H.a)("captcha_expired"),
                        1002: Object(H.a)("captcha_invalid"),
                        1003: Object(H.a)("email_registered")
                    }), this.reloadCaptcha()
                })
            }
        }
        goPrevStep() {
            this.rootStore.guidePagesStore.backToImport()
        }
    }
    Object(r.e)(Pt, {
        status: r.g,
        errorMessage: r.g,
        formErrored: r.c,
        formErrorMessage: r.c,
        email: r.g,
        validateEmail: r.b.bound,
        setEmail: r.b.bound,
        password: r.g,
        validatePassword: r.b.bound,
        setPassword: r.b.bound,
        captcha: r.g.ref,
        captchaReloading: r.g,
        reloadCaptcha: r.b.bound,
        captchaCode: r.g,
        validateCaptchaCode: r.b.bound,
        setCaptchaCode: r.b.bound,
        submit: r.b.bound,
        reset: r.b,
        goPrevStep: r.b.bound
    });
    var Mt = Pt;
    class Nt {
        constructor(e) {
            this.rootStore = e, this.status = dt.a.Inputting, this.errorMessage = "", this.emailFulfilled = !1, this.email = Object(ft.a)(""), this.password = Object(ft.a)("")
        }
        get formErrored() {
            return this.email.errored || this.password.errored || this.status === dt.a.Failed
        }
        get formErrorMessage() {
            const {
                email: e
            } = this;
            if (e.errored) return e.errorMessage;
            const {
                password: t
            } = this;
            return t.errored ? t.errorMessage : this.status === dt.a.Failed ? this.errorMessage : ""
        }
        fulfillEmail(e) {
            this.emailFulfilled = !0, this.email.value = e
        }
        validateEmail() {
            const {
                email: e
            } = this;
            return 0 === e.value.length ? (e.errored = !0, e.errorMessage = Object(H.a)("please_complete_form")) : e.errored = !1, !e.errored
        }
        setEmail(e) {
            this.email.touched = !0, this.email.value = e, this.validateEmail()
        }
        validatePassword() {
            const {
                password: e
            } = this;
            return 0 === e.value.length ? (e.errored = !0, e.errorMessage = Object(H.a)("please_complete_form")) : e.errored = !1, !e.errored
        }
        setPassword(e) {
            this.password.touched = !0, this.password.value = e, this.validatePassword()
        }
        validate() {
            let e = !0;
            return e = this.validateEmail() && e, e = this.validatePassword() && e, e
        }
        reset() {
            this.status = dt.a.Inputting, this.emailFulfilled = !1, Object(ft.b)(this.email, ""), Object(ft.b)(this.password, "")
        }
        async submit() {
            if (!this.validate()) return;
            let e;
            this.status = dt.a.Submitting;
            try {
                const t = this.email.value,
                    n = this.password.value;
                e = await Object(Tt.n)(this.rootStore.userStore.model, {
                    email: t,
                    password: n
                })
            } catch (e) {
                return void Object(r.h)(() => {
                    this.status = dt.a.Failed, this.errorMessage = Object(q.d)(e, {
                        404: Object(H.a)("email_not_exists"),
                        422: Object(H.a)("email_or_password_invalid"),
                        1004: Object(H.a)("email_or_password_invalid")
                    })
                })
            }
            try {
                const {
                    needBackup: t,
                    user: n
                } = e;
                let a, o, i, c, s, l, u;
                const {
                    rootStore: d
                } = this;
                if (t) {
                    const e = await Object(Tt.l)(d.userStore.model, n.token, {
                        common: Object(r.j)(d.commonStore.model),
                        background: Object(r.j)(d.backgroundStore.model),
                        icons: Object(r.j)(d.iconsStore.model),
                        standbyPage: Object(r.j)(d.standbyPageStore.model),
                        sidebar: Object(r.j)(d.sidebarStore.model),
                        searcher: Object(r.j)(d.searcherStore.model),
                        todos: Object(r.j)(d.todosStore.model)
                    });
                    a = e.common, o = e.background, i = e.icons, c = e.standbyPage, s = e.sidebar, l = e.searcher, u = e.todos
                } else {
                    const e = Object(G.a)(d.userStore.model),
                        {
                            token: t
                        } = n,
                        r = await Promise.all([Object(Tt.q)(t), Object(Tt.o)(t), Object(Tt.r)(t), Object(Tt.v)(t), Object(Tt.u)(t), Object(Tt.t)(t), Object(Tt.w)(t)]);
                    a = r[0], o = r[1], i = r[2], c = r[3], s = r[4], l = r[5], u = r[6];
                    try {
                        await Object(Tt.i)(e)
                    } catch (e) {
                        0
                    }
                }
                const p = {
                    user: {
                        version: D.dc,
                        data: {
                            lastBackupCommonTime: a.lastBackupTime,
                            lastBackupBackgroundTime: o.lastBackupTime,
                            lastBackupIconsTime: i.lastBackupTime,
                            lastBackupStandbyPageTime: c.lastBackupTime,
                            lastBackupSidebarTime: s.lastBackupTime,
                            lastBackupSearcherTime: l.lastBackupTime,
                            lastBackupTodosTime: u.lastBackupTime,
                            type: ve.a.Email,
                            token: n.token,
                            portraitSrc: n.portraitSrc,
                            email: n.email,
                            nickname: n.nickname
                        }
                    },
                    common: a.data,
                    background: o.data,
                    icons: i.data,
                    standbyPage: c.data,
                    sidebar: s.data,
                    searcher: l.data,
                    todos: u.data
                };
                Object(k.a)({
                    command: E.v,
                    hasResponse: !1,
                    data: p
                })
            } catch (e) {
                0,
                Object(r.h)(() => {
                    this.status = dt.a.Failed, this.errorMessage = Object(q.d)(e)
                })
            }
        }
    }
    Object(r.e)(Nt, {
        status: r.g,
        errorMessage: r.g,
        formErrored: r.c,
        formErrorMessage: r.c,
        emailFulfilled: r.g,
        fulfillEmail: r.b,
        email: r.g,
        validateEmail: r.b.bound,
        setEmail: r.b.bound,
        password: r.g,
        validatePassword: r.b.bound,
        setPassword: r.b.bound,
        validate: r.b,
        submit: r.b.bound
    });
    var Lt = Nt;
    class Rt {
        constructor(e) {
            this.rootStore = e, this.status = dt.a.Inputting, this.errorMessage = "", this.email = Object(ft.a)("")
        }
        get formErrored() {
            return this.email.errored || this.status === dt.a.Failed
        }
        get formErrorMessage() {
            const {
                email: e
            } = this;
            return e.errored ? e.errorMessage : this.status === dt.a.Failed ? this.errorMessage : ""
        }
        validateEmail() {
            const {
                email: e
            } = this;
            return 0 === e.value.length ? (e.errored = !0, e.errorMessage = Object(H.a)("please_complete_form")) : e.errored = !1, !e.errored
        }
        setEmail(e) {
            this.email.touched = !0, this.email.value = e, this.validateEmail()
        }
        validate() {
            let e = !0;
            return e = this.validateEmail() && e, e
        }
        reset() {
            const {
                email: e
            } = this;
            this.status = dt.a.Inputting, Object(ft.b)(e, "")
        }
        async submit() {
            if (this.validate()) try {
                this.status = dt.a.Submitting;
                const e = this.email.value;
                await Object(Tt.k)(this.rootStore.userStore.model, e), Object(r.h)(() => {
                    this.status = dt.a.Successed, this.email.value = e
                })
            } catch (e) {
                Object(r.h)(() => {
                    this.status = dt.a.Failed, this.errorMessage = Object(q.d)(e, {
                        404: Object(H.a)("email_not_exists")
                    })
                })
            }
        }
    }
    Object(r.e)(Rt, {
        status: r.g,
        errorMessage: r.g,
        formErrored: r.c,
        formErrorMessage: r.c,
        email: r.g,
        validateEmail: r.b.bound,
        setEmail: r.b.bound,
        validate: r.b,
        reset: r.b,
        submit: r.b.bound
    });
    var Dt = Rt;
    class At {
        constructor(e) {
            this.rootStore = e, this.loading = !1
        }
        pick() {
            Object(N.a)({
                sizeLimitByte: 819200,
                accpets: [z.a.Jpeg, z.a.Png],
                callback: (e, t) => {
                    e || null === t ? this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(H.a)("image_size_can_not_exceed", ["800kb"])
                    }) : this.setUserPortrait(t)
                }
            })
        }
        async setUserPortrait(e) {
            let t;
            this.loading = !0;
            const n = this.rootStore.userStore.model.data.token;
            try {
                if (t = await async function(e, t) {
                        if (t.uploaded) return t;
                        const n = (await B()({
                                url: D.a + "/home/s3sign",
                                method: "get",
                                headers: {
                                    secret: Object(G.b)(e)
                                },
                                params: {
                                    type: "avatar",
                                    mime: t.mimeType
                                }
                            })).data,
                            a = await U(n.data.normal, t);
                        return {
                            uploaded: !0,
                            isOfficial: !1,
                            mimeType: t.mimeType,
                            data: a
                        }
                    }(this.rootStore.userStore.model, e), n !== this.rootStore.userStore.model.data.token) return void Object(r.h)(() => {
                    this.rootStore.staticCleanerStore.deleteUserStatics(n, Object(P.e)(t)), this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(H.a)("user_changed")
                    }), this.loading = !1
                })
            } catch (e) {
                return void Object(r.h)(() => {
                    this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(q.d)(e)
                    }), this.loading = !1
                })
            }
            try {
                const e = this.rootStore.userStore.model,
                    {
                        portraitSrc: a
                    } = e.data;
                await Object(Tt.B)(e, t), Object(r.h)(() => {
                    null !== a && this.rootStore.staticCleanerStore.deleteUserStatics(n, [a]), this.rootStore.userStore.setPortraitSrc(t.data), this.loading = !1
                })
            } catch (e) {
                Object(r.h)(() => {
                    this.rootStore.staticCleanerStore.deleteUserStatics(n, Object(P.e)(t)), this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(q.d)(e)
                    }), this.loading = !1
                })
            }
        }
    }
    Object(r.e)(At, {
        loading: r.g,
        pick: r.b.bound,
        setUserPortrait: r.b
    });
    var Bt = At;
    class Gt {
        constructor(e) {
            this.rootStore = e, this.editing = !1, this.nickname = Object(ft.a)(""), this.loading = !1
        }
        startEdit() {
            this.editing = !0;
            const {
                nickname: e
            } = this;
            Object(ft.b)(e, "")
        }
        cancel() {
            this.editing = !1
        }
        validateNickname() {
            const {
                nickname: e
            } = this;
            return 0 === e.value.length ? (e.errored = !0, e.errorMessage = Object(H.a)("required")) : e.errored = !1, !e.errored
        }
        setNickName(e) {
            this.nickname.touched = !0, this.nickname.value = e, this.validateNickname()
        }
        validate() {
            let e = !0;
            return e = this.validateNickname() && e, e
        }
        async submit() {
            if (!this.validate()) return;
            const {
                rootStore: e
            } = this, {
                userStore: t
            } = e;
            this.loading = !0;
            const n = this.nickname.value;
            try {
                await Object(Tt.A)(t.model, n), Object(r.h)(() => {
                    e.userStore.setNickname(n), this.loading = !1, this.editing = !1
                })
            } catch (e) {
                Object(r.h)(() => {
                    this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(q.d)(e)
                    }), this.loading = !1
                })
            }
        }
    }
    Object(r.e)(Gt, {
        editing: r.g,
        startEdit: r.b.bound,
        cancel: r.b.bound,
        nickname: r.g,
        validateNickname: r.b.bound,
        setNickName: r.b.bound,
        validate: r.b,
        loading: r.g,
        submit: r.b.bound
    });
    var Ut = Gt;
    class Vt {
        constructor(e) {
            this.rootStore = e, this.editing = !1, this.loading = !1, this.oldPassword = Object(ft.a)(""), this.newPassword = Object(ft.a)(""), this.confirmNewPassword = Object(ft.a)("")
        }
        startEdit() {
            this.editing = !0;
            const {
                oldPassword: e,
                newPassword: t,
                confirmNewPassword: n
            } = this;
            Object(ft.b)(e, ""), Object(ft.b)(t, ""), Object(ft.b)(n, "")
        }
        cancel() {
            this.editing = !1
        }
        validateOldPassword() {
            const {
                oldPassword: e
            } = this;
            return 0 === e.value.length ? (e.errored = !0, e.errorMessage = Object(H.a)("required")) : e.errored = !1, !e.errored
        }
        setOldPassword(e) {
            this.oldPassword.touched = !0, this.oldPassword.value = e, this.validateOldPassword()
        }
        validateNewPassword() {
            const {
                newPassword: e
            } = this;
            return 0 === e.value.length ? (e.errored = !0, e.errorMessage = Object(H.a)("required")) : e.errored = !1, !e.errored
        }
        setNewPassword(e) {
            this.newPassword.touched = !0, this.newPassword.value = e, this.validateNewPassword()
        }
        validateConfirmNewPassword() {
            const {
                confirmNewPassword: e
            } = this;
            return this.newPassword.value !== e.value ? (e.errored = !0, e.errorMessage = Object(H.a)("inconsistent")) : e.errored = !1, !e.errored
        }
        setConfirmNewPassword(e) {
            this.confirmNewPassword.touched = !0, this.confirmNewPassword.value = e, this.validateConfirmNewPassword()
        }
        validate() {
            let e = !0;
            return e = this.validateOldPassword() && e, e = this.validateNewPassword() && e, e = this.validateConfirmNewPassword() && e, e
        }
        async submit() {
            if (!this.validate()) return;
            this.loading = !0;
            const {
                userStore: e
            } = this.rootStore;
            if (e.model.data.type === ve.a.Email) try {
                await Object(Tt.z)(e.model, this.oldPassword.value, this.newPassword.value), Object(r.h)(() => {
                    this.loading = !1, this.editing = !1
                })
            } catch (e) {
                Object(r.h)(() => {
                    this.rootStore.messagesStore.notificateMessage({
                        status: W.Failed,
                        content: Object(q.d)(e, {
                            1006: Object(H.a)("old_password_not_match")
                        })
                    }), this.loading = !1
                })
            }
        }
    }
    Object(r.e)(Vt, {
        editing: r.g,
        startEdit: r.b.bound,
        cancel: r.b.bound,
        oldPassword: r.g,
        validateOldPassword: r.b.bound,
        setOldPassword: r.b.bound,
        newPassword: r.g,
        validateNewPassword: r.b.bound,
        setNewPassword: r.b.bound,
        confirmNewPassword: r.g,
        validateConfirmNewPassword: r.b.bound,
        setConfirmNewPassword: r.b.bound,
        validate: r.b,
        loading: r.g,
        submit: r.b.bound
    });
    var Ft = Vt,
        zt = n(99);
    class Wt {
        constructor(e) {
            this.rootStore = e, this.editing = !1, this.keyword = "", this.suggestions = [], this.requestId = 0, this.delayUpdateSuggestion = Me()(this.updateSuggestions, D.vb)
        }
        startEdit() {
            this.editing = !0
        }
        cancel() {
            this.editing = !1
        }
        setKeyword(e) {
            this.keyword = e, this.requestId++, this.delayUpdateSuggestion.cancel(), 0 === (e = e.trim()).length ? this.suggestions = [] : this.delayUpdateSuggestion()
        }
        get suggestionOptions() {
            return this.suggestions.map(e => ({
                text: e.fullname,
                value: e.woeid
            }))
        }
        async updateSuggestions() {
            const {
                requestId: e
            } = this, t = this.keyword.trim(), n = await Object(zt.b)(this.rootStore.userStore.model, t);
            e === this.requestId && Object(r.h)(() => {
                this.suggestions = n
            })
        }
        submit(e) {
            const t = this.suggestions.find(t => t.woeid === e);
            void 0 !== t && this.rootStore.commonStore.setLocation(t), this.editing = !1
        }
    }
    Object(r.e)(Wt, {
        editing: r.g,
        startEdit: r.b.bound,
        cancel: r.b.bound,
        keyword: r.g,
        suggestions: r.g.ref,
        suggestionOptions: r.c,
        setKeyword: r.b.bound,
        submit: r.b.bound
    });
    var Ht, qt = Wt;
    ! function(e) {
        e.Notification = "notification"
    }(Ht || (Ht = {}));
    var Kt = Ht;
    class Qt {
        constructor(e) {
            this.rootStore = e, this.model = []
        }
        notificateMessage(e) {
            let t = null;
            const n = {
                uuid: R()(),
                type: Kt.Notification,
                status: e.status,
                content: e.content,
                onClose: Object(r.b)(() => {
                    null !== t && (window.clearTimeout(t), t = null);
                    const e = this.model.findIndex(e => e.uuid === n.uuid); - 1 !== e && this.model.splice(e, 1)
                })
            };
            if (this.model.push(n), t = window.setTimeout(() => {
                    t = null, n.onClose()
                }, D.mb), this.model.length > 2) {
                const e = this.model.shift();
                void 0 !== e && e.onClose()
            }
        }
    }
    Object(r.e)(Qt, {
        model: r.g,
        notificateMessage: r.b
    });
    var Yt, Jt = Qt;
    class Xt {
        constructor(e) {
            this.rootStore = e
        }
        deleteUserStatics(e, t) {
            null !== e && 0 !== t.length && Object(k.a)({
                hasResponse: !1,
                command: E.h,
                data: {
                    token: e,
                    statics: t
                }
            })
        }
    }! function(e) {
        e[e.Group = 1] = "Group", e[e.Website = 2] = "Website"
    }(Yt || (Yt = {}));
    var Zt = Yt,
        $t = n(71),
        en = n.n($t);
    class tn {
        constructor(e) {
            this.rootStore = e, this.status = dt.a.Inputting, this.errorMessage = "", this.iconGroupData = [], this.bookmarksPermissionAuthorized = Object(ft.a)(!1), this.targetIconGroupLabel = Object(ft.a)(""), this.selectedSiteBookmarksCount = Object(ft.a)(0), this.bookmarksValue = {}, this.bookmarksStatus = st.Reloading, this.groupBookmarkDescendantsDict = {}, this.bookmarkOrderDict = {}, this.bookmarkDict = {}, this.rootBookmarkId = null, this.submitRequestId = 0
        }
        get formErrored() {
            return this.selectedSiteBookmarksCount.errored || this.status === dt.a.Failed
        }
        get formErrorMessage() {
            const {
                selectedSiteBookmarksCount: e
            } = this;
            return e.errored ? e.errorMessage : this.status === dt.a.Failed ? this.errorMessage : ""
        }
        requestBookmarksPermission() {
            chrome.permissions.request({
                permissions: ["bookmarks"]
            }, e => {
                e && this.reloadBookmarks()
            })
        }
        get iconGroupOptions() {
            const {
                iconsStore: e
            } = this.rootStore, {
                data: t
            } = e.model, {
                groupDict: n
            } = t, a = t.groups.map(e => {
                const t = n[e];
                return {
                    value: e,
                    text: t.label,
                    icoSrc: t.icoSrc
                }
            });
            return a.push({
                value: "add",
                text: Object(H.a)("add"),
                icoSrc: en.a
            }), a
        }
        setTargetIconGroupUuid(e) {
            this.targetIconGroupUuid = e, "add" !== e && this.validateTargetIconGroupLabel()
        }
        validateTargetIconGroupLabel() {
            const {
                targetIconGroupUuid: e,
                targetIconGroupLabel: t
            } = this;
            return "add" === e && 0 === t.value.length ? (t.errored = !0, t.errorMessage = Object(H.a)("required")) : t.errored = !1, !t.errored
        }
        setTargetIconGroupLabel(e) {
            const {
                targetIconGroupLabel: t
            } = this;
            t.touched = !0, t.value = e, this.validateTargetIconGroupLabel()
        }
        validateSelectedSiteBookmarksCount() {
            const {
                selectedSiteBookmarksCount: e
            } = this;
            return e.value > D.jb ? (e.errored = !0, e.errorMessage = Object(H.a)("import_from_bookmarks_error")) : e.errored = !1, !e.errored
        }
        validate() {
            let e = !0;
            return e = this.validateTargetIconGroupLabel() && e, e = this.validateSelectedSiteBookmarksCount() && e, e
        }
        bookmarkSelectedChangeHandler(e, t) {
            const n = this.bookmarkDict[e];
            if (void 0 === n) return;
            const {
                bookmarksValue: a,
                selectedSiteBookmarksCount: r
            } = this;
            let o = 0;
            switch (n.type) {
                case Zt.Website:
                    o = 1, a[e] = t;
                    break;
                case Zt.Group:
                    this.groupBookmarkDescendantsDict[e].forEach(e => {
                        a[e] !== t && (a[e] = t, o++)
                    })
            }
            r.value = r.value + (t ? 1 : -1) * o, this.validateSelectedSiteBookmarksCount()
        }
        groupBookmarkCollapsedChangeHandler(e, t) {
            const n = this.bookmarkDict[e];
            void 0 !== n && n.type === Zt.Group && (n.collapsed = t)
        }
        async reloadBookmarks() {
            if (!await new Promise(e => {
                    chrome.permissions.contains({
                        permissions: ["bookmarks"]
                    }, e)
                })) return;
            const e = await new Promise(e => {
                chrome.bookmarks.getTree(e)
            });
            let t = 1;
            const n = {},
                a = {},
                o = {},
                i = {};
            Object(r.h)(() => {
                if (this.bookmarksPermissionAuthorized.value = !0, e.length > 0) {
                    const r = e[0];
                    if (function e(r) {
                            const {
                                id: c
                            } = r;
                            let s = [],
                                l = null;
                            if (void 0 === r.children) void 0 !== r.url && (n[c] = !1, o[c] = t++, s.push(c), l = {
                                id: c,
                                type: Zt.Website,
                                title: r.title,
                                url: r.url
                            });
                            else {
                                const t = [];
                                r.children.forEach(n => {
                                    const a = e(n);
                                    a.length > 0 && (s = s.concat(a), t.push(n.id))
                                }), l = {
                                    id: r.id,
                                    type: Zt.Group,
                                    title: r.title,
                                    collapsed: !1,
                                    data: t
                                }, s.length > 0 && (i[c] = s)
                            }
                            return null !== l && s.length > 0 && (a[c] = l), s
                        }(r).length > 0) {
                        const e = r.id;
                        a[e].title = Object(H.a)("all_bookmarks"), this.bookmarksValue = n, this.bookmarksStatus = st.Ended, this.bookmarkDict = a, this.bookmarkOrderDict = o, this.groupBookmarkDescendantsDict = i, this.rootBookmarkId = e
                    } else this.bookmarksStatus = st.ReloadErrored
                } else this.bookmarksStatus = st.ReloadErrored
            })
        }
        resetInputs() {
            if (!this.bookmarksPermissionAuthorized.value) return;
            const {
                rootStore: e
            } = this, {
                iconsStore: t,
                guidePagesStore: n
            } = e;
            this.status = dt.a.Inputting, this.iconGroupData = [];
            const a = n.importGuiding ? Object(te.c)(t.model) : t.currentIconGroupUuid;
            this.targetIconGroupUuid = null === a ? "add" : a, Object(ft.b)(this.targetIconGroupLabel, ""), Object(ft.b)(this.selectedSiteBookmarksCount, 0);
            const {
                bookmarksValue: r
            } = this;
            Object.keys(r).forEach(e => {
                r[e] = !1
            })
        }
        reset() {
            const {
                rootStore: e
            } = this, {
                guidePagesStore: t,
                iconsStore: n
            } = e;
            this.status = dt.a.Inputting, this.iconGroupData = [], Object(ft.b)(this.bookmarksPermissionAuthorized, !1);
            const a = t.importGuiding ? Object(te.c)(n.model) : n.currentIconGroupUuid;
            this.targetIconGroupUuid = null === a ? "add" : a, Object(ft.b)(this.targetIconGroupLabel, ""), Object(ft.b)(this.selectedSiteBookmarksCount, 0), this.bookmarksValue = {}, this.bookmarksStatus = st.Reloading, this.bookmarkDict = {}, this.bookmarkOrderDict = {}, this.groupBookmarkDescendantsDict = {}, this.rootBookmarkId = null, this.reloadBookmarks()
        }
        async submit() {
            if (!this.validate()) return;
            const e = ++this.submitRequestId;
            try {
                this.status = dt.a.Submitting;
                const {
                    bookmarksValue: t,
                    bookmarkDict: n,
                    bookmarkOrderDict: a
                } = this, o = [], i = {}, c = [], s = [];
                if (Object.keys(t).forEach(e => {
                        if (!0 === t[e]) {
                            const t = n[e];
                            if (t.type === Zt.Website) {
                                const n = t.url;
                                o.push(e), i[e] = n, c.push(n)
                            }
                        }
                    }), o.sort((e, t) => a[e] - a[t]), c.length > 0) {
                    const t = await Object(pt.f)(this.rootStore.userStore.model, c);
                    if (e !== this.submitRequestId) return;
                    o.forEach(e => {
                        const a = i[e],
                            r = n[e].title,
                            o = t[a];
                        let c;
                        c = null === o ? {
                            id: null,
                            uuid: R()(),
                            url: a,
                            label: r,
                            type: $.a.Text,
                            desc: "",
                            backgroundColor: Object(M.n)(),
                            icoText: r.slice(0, 2)
                        } : {
                            id: null,
                            uuid: R()(),
                            url: a,
                            label: r,
                            type: $.a.Image,
                            desc: o.desc,
                            icoSrc: Object(P.b)(o.icoSrc),
                            icoScalePercentage: o.icoScalePercentage,
                            backgroundColor: Object(M.a)(o.backgroundColor)
                        }, s.push(c)
                    })
                }
                Object(r.h)(() => {
                    this.status = dt.a.Successed, this.iconGroupData = s;
                    const {
                        guidePagesStore: e
                    } = this.rootStore;
                    if (e.importGuiding) e.switchToGuideRegister();
                    else {
                        const t = this.commit();
                        this.rootStore.messagesStore.notificateMessage({
                            status: W.Successed,
                            content: Object(H.a)("import_successful")
                        }), e.close(), null !== t && this.rootStore.iconsStore.setCurrentIconGroupUuid(t), window.setTimeout(() => {
                            this.rootStore.iconsStore.scrollSelectedIconGroupIntoView(!0)
                        }, 2 * D.Wb)
                    }
                })
            } catch (t) {
                if (e !== this.submitRequestId) return;
                Object(r.h)(() => {
                    this.status = dt.a.Failed, this.errorMessage = Object(q.d)(t)
                })
            }
        }
        commit() {
            const {
                rootStore: e,
                iconGroupData: t
            } = this;
            if (0 === t.length) return null;
            let {
                targetIconGroupUuid: n
            } = this;
            const {
                iconsStore: a
            } = e;
            if ("add" === n) {
                n = R()();
                const e = {
                    uuid: n,
                    label: this.targetIconGroupLabel.value,
                    icoSrc: D.gb[0],
                    data: []
                };
                a.model.data.groupDict[n] = e, a.model.data.groups.push(n)
            }
            const r = a.model.data.groupDict[n];
            return void 0 === r ? null : (t.forEach(e => {
                const {
                    uuid: t
                } = e;
                a.model.data.iconDict[t] = e, r.data.push(t)
            }), a.backupModel(), r.uuid)
        }
        cancel() {
            ++this.submitRequestId;
            const {
                guidePagesStore: e,
                iconsStore: t
            } = this.rootStore;
            e.close(), window.setTimeout(() => {
                t.scrollSelectedIconGroupIntoView(!0)
            }, 2 * D.Wb)
        }
        goPrevStep() {
            ++this.submitRequestId, this.rootStore.guidePagesStore.backToNickname()
        }
        skipCurrentStep() {
            ++this.submitRequestId, this.resetInputs(), this.rootStore.guidePagesStore.switchToGuideRegister()
        }
    }
    Object(r.e)(tn, {
        status: r.g,
        errorMessage: r.g,
        formErrored: r.c,
        formErrorMessage: r.c,
        bookmarksPermissionAuthorized: r.g,
        requestBookmarksPermission: r.b.bound,
        targetIconGroupUuid: r.g,
        iconGroupOptions: r.c,
        setTargetIconGroupUuid: r.b.bound,
        targetIconGroupLabel: r.g,
        validateTargetIconGroupLabel: r.b,
        setTargetIconGroupLabel: r.b.bound,
        selectedSiteBookmarksCount: r.g,
        validateSelectedSiteBookmarksCount: r.b,
        validate: r.b,
        bookmarksValue: r.g,
        bookmarksStatus: r.g,
        bookmarkDict: r.g,
        groupBookmarkDescendantsDict: r.g.ref,
        rootBookmarkId: r.g,
        bookmarkSelectedChangeHandler: r.b.bound,
        groupBookmarkCollapsedChangeHandler: r.b.bound,
        reloadBookmarks: r.b,
        resetInputs: r.b,
        reset: r.b,
        submit: r.b.bound,
        commit: r.b,
        cancel: r.b.bound,
        goPrevStep: r.b.bound,
        skipCurrentStep: r.b.bound
    });
    var nn = tn;
    class an {
        constructor(e) {
            this.rootStore = e
        }
        sendEvent(e) {
            Object(k.a)({
                command: E.L,
                data: e,
                hasResponse: !1
            })
        }
    }
    class rn {
        constructor(e) {
            this.rootStore = e, this.opened = !1, this.categoryValue = D.Pb.value, this.keyword = "", this.todosCleanConfirmationOpened = !1, this.todosStatus = st.Empty, this.todoUuids = [], this.todoContextMenuOpened = !1, this.todoContextMenuTodoUuid = null, this.todoContextMenuEditHandler = null, this.todoContextMenuTriggerClientPosition = {
                top: 0,
                left: 0
            }
        }
        init(e) {
            this.model = e
        }
        setModel(e) {
            this.model = e, this.opened && this.search(), this.cancelTodosCleanConfirmation(), this.closeTodoContextMenu()
        }
        async backupModel() {
            await Object(k.a)({
                command: E.g,
                data: Object(r.j)(this.model),
                hasResponse: !0
            }), Object(k.a)({
                command: E.I,
                hasResponse: !1
            })
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.s,
                hasResponse: !0
            });
            this.setModel(e)
        }
        open() {
            this.opened = !0, this.search()
        }
        close() {
            this.opened = !1
        }
        get categories() {
            return [D.Pb, D.Rb, D.Sb, D.Qb]
        }
        setCategoryValue(e) {
            this.categoryValue = e, this.keyword = "", this.search()
        }
        setKeyworkd(e) {
            this.keyword = e, 0 === (e = e.trim()).length ? this.categoryValue !== D.Pb.value && (this.categoryValue = D.Pb.value, this.search()) : (this.categoryValue = null, this.search())
        }
        get todos() {
            const {
                todoDict: e
            } = this.model.data, {
                todoUuids: t
            } = this, n = [];
            for (const a of t) {
                const t = e[a];
                void 0 !== t && n.push(t)
            }
            return n
        }
        get todoCountDict() {
            const {
                todoDict: e
            } = this.model.data, t = {
                [D.Pb.value]: 0,
                [D.Rb.value]: 0,
                [D.Sb.value]: 0,
                [D.Qb.value]: 0
            };
            for (const n in e) {
                const a = e[n];
                t[D.Pb.value] += 1, a.isImportant && (t[D.Rb.value] += 1), a.completed ? t[D.Qb.value] += 1 : t[D.Sb.value] += 1
            }
            return t
        }
        search() {
            const e = this.keyword.trim(),
                {
                    model: t
                } = this,
                {
                    todoDict: n
                } = t.data;
            let a = [];
            if (0 === e.length) {
                const {
                    categoryValue: e
                } = this;
                if (null !== e)
                    for (let t in n) {
                        const r = n[t];
                        switch (e) {
                            case D.Pb.value:
                                a.push(t);
                                break;
                            case D.Rb.value:
                                r.isImportant && a.push(t);
                                break;
                            case D.Sb.value:
                                r.completed || a.push(t);
                                break;
                            case D.Qb.value:
                                r.completed && a.push(t)
                        }
                    }
            } else
                for (let t in n) {
                    n[t].data.indexOf(e) > -1 && a.push(t)
                }
            a.sort((e, t) => {
                const a = n[e],
                    r = n[t];
                return a.completed !== r.completed ? Number(a.completed) - Number(r.completed) : a.isImportant !== r.isImportant ? Number(r.isImportant) - Number(a.isImportant) : a.lastUpdateTime !== r.lastUpdateTime ? r.lastUpdateTime - a.lastUpdateTime : 0
            }), 0 === a.length ? 0 === e.length ? this.todosStatus = st.Empty : this.todosStatus = st.NotFound : this.todosStatus = st.Ended, this.todoUuids = a
        }
        addTodo(e) {
            const {
                model: t
            } = this, {
                todoDict: n
            } = t.data, a = Date.now(), r = {
                uuid: R()(),
                data: e,
                createTime: a,
                lastUpdateTime: a,
                isImportant: this.categoryValue === D.Rb.value,
                completed: !1
            }, o = r.uuid;
            n[o] = r, this.todoUuids.unshift(o), this.todosStatus = st.Ended, this.backupModel(), Object(ne.d)(o, {
                behavior: "smooth"
            })
        }
        setTodoCompleted(e, t) {
            const n = this.model.data.todoDict[e];
            n.completed = t, n.lastUpdateTime = Date.now(), this.backupModel()
        }
        setTodoIsImportant(e, t) {
            const n = this.model.data.todoDict[e];
            n.isImportant = t, n.lastUpdateTime = Date.now(), this.backupModel()
        }
        setTodoData(e, t) {
            const n = this.model.data.todoDict[e];
            n.data = t, n.lastUpdateTime = Date.now(), this.backupModel()
        }
        deleteTodo(e) {
            const {
                todoUuids: t
            } = this, n = t.indexOf(e); - 1 !== n && t.splice(n, 1), 0 === t.length && (0 === this.keyword.trim().length ? this.todosStatus = st.Empty : this.todosStatus = st.NotFound), delete this.model.data.todoDict[e], this.backupModel()
        }
        openTodosCleanConfirmation() {
            this.todosCleanConfirmationOpened = !0
        }
        cancelTodosCleanConfirmation() {
            this.todosCleanConfirmationOpened = !1
        }
        confirmTodosCleanConfirmation() {
            this.todosCleanConfirmationOpened = !1;
            const {
                todoUuids: e
            } = this, {
                todoDict: t
            } = this.model.data;
            for (const n of e) delete t[n];
            this.search(), this.backupModel()
        }
        openTodoContextMenu({
            model: e,
            onEdit: t,
            triggerClientPosition: n
        }) {
            this.todoContextMenuOpened = !0, this.todoContextMenuTodoUuid = e.uuid, this.todoContextMenuEditHandler = t, this.todoContextMenuTriggerClientPosition = {
                left: n.left,
                top: n.top
            }
        }
        closeTodoContextMenu() {
            this.todoContextMenuOpened = !1, this.todoContextMenuTodoUuid = null, this.todoContextMenuEditHandler = null
        }
    }
    Object(r.e)(rn, {
        model: r.g,
        init: r.b,
        setModel: r.b,
        opened: r.g,
        open: r.b,
        close: r.b.bound,
        categories: r.c,
        categoryValue: r.g,
        setCategoryValue: r.b.bound,
        keyword: r.g,
        setKeyworkd: r.b.bound,
        todosStatus: r.g,
        todoUuids: r.g,
        todoCountDict: r.c,
        todos: r.c,
        search: r.b,
        addTodo: r.b,
        setTodoCompleted: r.b,
        setTodoIsImportant: r.b,
        setTodoData: r.b,
        deleteTodo: r.b,
        todosCleanConfirmationOpened: r.g,
        openTodosCleanConfirmation: r.b.bound,
        cancelTodosCleanConfirmation: r.b.bound,
        confirmTodosCleanConfirmation: r.b.bound,
        todoContextMenuOpened: r.g,
        todoContextMenuTriggerClientPosition: r.g.ref,
        openTodoContextMenu: r.b,
        closeTodoContextMenu: r.b.bound
    });
    var on = rn;
    class cn {
        constructor() {
            this.staticCleanerStore = new Xt(this), this.gaStore = new an(this), this.uiStore = new w(this), this.messagesStore = new Jt(this), this.commonStore = new x(this), this.tempCommonStore = new _(this), this.backgroundStore = new Y(this), this.tempBackgroundStore = new Z(this), this.iconsStore = new fe(this), this.tempIconsStore = new me(this), this.weatherStore = new ge(this), this.todosStore = new on(this), this.standbyPageStore = new Se(this), this.sidebarStore = new ke(this), this.userStore = new Oe(this), this.searcherStore = new Re(this), this.guidePagesStore = new jt(this), this.guidePagesNicknamePageStore = new It(this), this.guidePagesImportPageStore = new nn(this), this.guidePagesLoginPageStore = new Lt(this), this.guidePagesRegisterPageStore = new Mt(this), this.guidePagesFindPasswordPageStore = new Dt(this), this.iconGroupPopupStore = new wt(this), this.addIconModalStore = new ht(this), this.editIconModalStore = new gt(this), this.wallpaperLibModalStore = new Ct(this), this.settingModalStore = new Ae(this), this.editLocationCardStore = new qt(this), this.editUserPortraitCardStore = new Bt(this), this.editUserNicknameCardStore = new Ut(this), this.editEmailUserPasswordCardStore = new Ft(this)
        }
        init(e) {
            this.commonStore.init(e.common), this.tempCommonStore.init(e.tempCommon), this.backgroundStore.init(e.background), this.tempBackgroundStore.init(e.tempBackground), this.iconsStore.init(e.icons), this.tempIconsStore.init(e.tempIcons), this.weatherStore.init(e.weather), this.todosStore.init(e.todos), this.standbyPageStore.init(e.standbyPage), this.sidebarStore.init(e.sidebar), this.userStore.init(e.user), this.searcherStore.init(e.searcher);
            const {
                uiStore: t
            } = this;
            t.startTickTime();
            const {
                userStore: n
            } = this, a = n.model.data;
            if (a.type !== ve.a.Visitor || a.inited) {
                const {
                    standbyPageStore: e
                } = this, t = e.model.setting;
                t.display && t.openAfterAppReady ? e.open() : (this.iconsStore.selectLastSelectIconGroup(), this.iconsStore.scrollSelectedIconGroupIntoView())
            } else this.guidePagesStore.startGuide(), this.iconsStore.selectFirstIconGroup()
        }
        beforeSetModel() {
            this.guidePagesStore.close(), this.standbyPageStore.close(), this.settingModalStore.close(), this.wallpaperLibModalStore.close(), this.addIconModalStore.close(), this.todosStore.close()
        }
        setModel(e) {
            this.beforeSetModel(), this.commonStore.setModel(e.common), this.tempCommonStore.setModel(e.tempCommon), this.backgroundStore.setModel(e.background), this.tempBackgroundStore.setModel(e.tempBackground), this.iconsStore.setModel(e.icons), this.weatherStore.setModel(e.weather), this.todosStore.setModel(e.todos), this.standbyPageStore.setModel(e.standbyPage), this.sidebarStore.setModel(e.sidebar), this.userStore.setModel(e.user), this.searcherStore.setModel(e.searcher), this.todosStore.setModel(e.todos), this.afterSetModel()
        }
        afterSetModel() {
            const {
                userStore: e
            } = this, t = e.model.data;
            t.type !== ve.a.Visitor || t.inited || this.guidePagesStore.startGuide(), this.iconsStore.selectFirstIconGroup()
        }
        async reloadModel() {
            const e = await Object(k.a)({
                command: E.l,
                hasResponse: !0
            });
            this.setModel(e)
        }
    }
    Object(r.e)(cn, {
        init: r.b,
        beforeSetModel: r.b,
        setModel: r.b,
        afterSetModel: r.b
    });
    var sn = cn,
        ln = n(56),
        un = oe.a.createContext({}),
        dn = (n(262), n(311)),
        pn = n.n(dn),
        fn = n(39),
        mn = n.n(fn),
        hn = n(312),
        bn = n.n(hn),
        gn = n(123),
        vn = n.n(gn);
    var yn = Object(ie.a)((function({
            src: e,
            onLoad: t
        }) {
            return Object(re.useLayoutEffect)(() => {
                const n = document.createElement("img");
                return n.src = e, n.addEventListener("load", t, {
                    once: !0
                }), () => {
                    n.removeEventListener("load", t)
                }
            }, [e, t]), null
        })),
        Sn = n(34);
    var wn = Object(ie.a)((function({
            src: e,
            placeholderChildren: t,
            children: n
        }) {
            const [a, r] = Object(re.useState)(!0), [o, i] = Object(re.useState)(null);
            Object(re.useEffect)(() => {
                const e = window.setTimeout(() => {
                    r(!1)
                }, 100);
                return () => {
                    window.clearTimeout(e)
                }
            }, [r]);
            const c = Object(re.useCallback)(() => {
                i(e)
            }, [i, e]);
            return oe.a.createElement(oe.a.Fragment, null, oe.a.createElement(yn, {
                src: e,
                onLoad: c
            }), !a && t, oe.a.createElement(Sn.a, {
                entered: a || o === e
            }, n(null === o ? e : o)))
        })),
        kn = n(313),
        En = n.n(kn);
    var On = Object(ie.a)((function() {
        return oe.a.createElement("div", {
            className: En.a.main
        })
    }));
    var Cn = Object(ie.a)((function({
        model: e,
        blurred: t
    }) {
        let n;
        switch (e.type) {
            case T.a.Color:
                n = oe.a.createElement("div", {
                    className: vn.a.colorContent
                }, oe.a.createElement("div", {
                    className: "" + vn.a.colorContentMain,
                    style: Object(M.c)(e.data)
                }));
                break;
            case T.a.Image:
                n = oe.a.createElement(wn, {
                    src: Object(P.d)(t ? e.blurredData : e.data),
                    placeholderChildren: oe.a.createElement(On, null)
                }, e => oe.a.createElement("div", {
                    className: vn.a.imageContent,
                    style: {
                        backgroundImage: `url(${e})`
                    }
                }));
                break;
            default:
                n = oe.a.createElement("div", {
                    className: vn.a.colorContent
                })
        }
        return oe.a.createElement("div", {
            className: vn.a.main
        }, n)
    }));
    var xn = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    backgroundStore: t
                } = e,
                {
                    currentWallpaper: n
                } = t,
                {
                    blurred: a
                } = t.model.setting;
            return oe.a.createElement("div", {
                className: bn.a.main
            }, oe.a.createElement(Cn, {
                blurred: a,
                model: n
            }))
        })),
        jn = n(241),
        _n = n.n(jn),
        In = n(83),
        Tn = n.n(In),
        Pn = n(229),
        Mn = n.n(Pn);
    var Nn = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                sidebarStore: t,
                userStore: n
            } = e,
            {
                collapsed: a
            } = t,
            r = a ? Tn.a.collapsedMain : Tn.a.expandedMain,
            o = se()(Tn.a.portrait, a ? Tn.a.collapsedPortrait : Tn.a.expandedPortrait),
            i = n.model,
            {
                portraitSrc: c,
                type: s
            } = i.data,
            l = s !== ve.a.Visitor;
        let u;
        return u = l ? oe.a.createElement("div", {
            key: "logined",
            className: Tn.a.nickname
        }, i.data.nickname) : oe.a.createElement("div", {
            key: "unlogined",
            className: Tn.a.anchor
        }, Object(H.a)("login")), oe.a.createElement("div", {
            className: r
        }, oe.a.createElement("div", {
            className: Tn.a.btn,
            onClick: l ? e.settingModalStore.openThenSwitchToGeneral : e.guidePagesStore.startLogin
        }, oe.a.createElement("i", {
            className: o,
            style: {
                backgroundImage: `url(${null===c?Mn.a:c})`
            }
        }), u))
    }));
    var Ln = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    sidebarStore: t
                } = e,
                n = se()(_n.a.main, t.collapsed ? _n.a.collapsedMain : _n.a.expandedMain);
            return oe.a.createElement("div", {
                className: n
            }, oe.a.createElement(Nn, null))
        })),
        Rn = n(314),
        Dn = n.n(Rn),
        An = n(242),
        Bn = n.n(An),
        Gn = n(48),
        Un = n.n(Gn),
        Vn = n(15),
        Fn = n(315),
        zn = n.n(Fn);
    var Wn = Object(ie.a)((function({
        style: e,
        className: t,
        count: n
    }) {
        if (0 === n) return null;
        const a = String(Math.min(n, 99)),
            r = a.length,
            o = se()(zn.a.main, t, r > 1 && D.Xb);
        return oe.a.createElement("div", {
            className: o,
            style: e
        }, a)
    }));
    var Hn = Object(ie.a)((function({
        visible: e = !0,
        selected: t = !1,
        model: n,
        onClick: a
    }) {
        const r = Object(re.useContext)(un),
            {
                sidebarStore: o,
                iconsStore: i
            } = r,
            {
                collapsed: c
            } = o,
            {
                displayNotificationBadge: s
            } = i.model.setting,
            l = se()(Un.a.main, {
                [Un.a.invisible]: !e,
                [Un.a.selectedMain]: t
            }, c ? Un.a.collapsedMain : Un.a.expandedMain),
            u = se()(Un.a.icon, c ? Un.a.collapsedIcon : Un.a.expandedIcon),
            d = se()(Un.a.label, c ? Un.a.collapsedLabel : Un.a.expandedLabel);
        let p = null;
        if (s) {
            const e = i.existInIconGroup[n.uuid];
            if (void 0 !== e && e.todos) {
                const {
                    todosStore: e
                } = r, t = se()(Un.a.badge, c ? Un.a.collapsedBadge : Un.a.expandedBadge);
                p = oe.a.createElement(Wn, {
                    className: t,
                    count: e.todoCountDict[D.Sb.value]
                }), c || (p = oe.a.createElement("div", {
                    className: Un.a.expandedBadgeWrapper
                }, p))
            }
        }
        return oe.a.createElement("div", {
            className: l,
            onClick: a
        }, oe.a.createElement(Vn.a, {
            className: u,
            src: n.icoSrc
        }), oe.a.createElement("div", {
            className: d
        }, n.label), p)
    }));
    var qn = Object(ie.a)((function({
            model: e
        }) {
            const t = Object(re.useContext)(un),
                [n, a] = Object(re.useState)(!1),
                r = Object(re.useRef)(null),
                o = Object(re.useRef)(null),
                {
                    iconsStore: i
                } = t,
                {
                    currentIconGroupUuid: c,
                    draggingIconUuid: s,
                    draggingIconGroupUuid: l
                } = i,
                u = c === e.uuid,
                d = null !== l,
                p = l === e.uuid,
                f = Object(re.useCallback)(() => {
                    t.iconsStore.setCurrentIconGroupUuid(e.uuid)
                }, [t, e]),
                m = se()(Bn.a.main, {
                    [Bn.a.draggingMain]: d,
                    [Bn.a.isDragTargetMain]: p
                }),
                h = Object(re.useCallback)(() => {
                    a(!1)
                }, [a]),
                b = Object(re.useCallback)(n => {
                    if (null !== o.current && Math.abs(o.current.clientPosition.top - n.clientY) > 3) {
                        a(!1);
                        const {
                            iconsStore: r
                        } = t;
                        r.startDragIconGroup(e, o.current.sidebarIconGroupsScrollerClientRect, o.current.relativePosition, o.current.clientPosition, {
                            left: n.clientX,
                            top: n.clientY
                        })
                    }
                }, [o, t, e, a]),
                g = Object(re.useCallback)(() => {
                    if (null === o.current) return;
                    a(!1);
                    const {
                        iconsStore: n
                    } = t;
                    n.startDragIconGroup(e, o.current.sidebarIconGroupsScrollerClientRect, o.current.relativePosition, o.current.clientPosition, o.current.clientPosition)
                }, [o, t, e, a]);
            return oe.a.createElement("div", {
                id: e.uuid,
                ref: r,
                className: m,
                onContextMenu: t => {
                    null !== r.current && (t.stopPropagation(), t.preventDefault(), i.openIconGroupContextMenu(e, {
                        left: t.clientX,
                        top: t.clientY
                    }, r.current))
                },
                onMouseEnter: null === s ? void 0 : () => {
                    if (u) return;
                    const {
                        iconsStore: n
                    } = t;
                    n.moveDraggingIcon(e.uuid)
                },
                onMouseDown: e => {
                    0 === e.button && null !== r.current && null !== r.current.offsetParent && (t.uiStore.closeContextMenus(), a(!0), o.current = {
                        sidebarIconGroupsScrollerClientRect: r.current.offsetParent.getBoundingClientRect(),
                        relativePosition: {
                            left: r.current.offsetLeft,
                            top: r.current.offsetTop - r.current.offsetParent.scrollTop
                        },
                        clientPosition: {
                            left: e.clientX,
                            top: e.clientY
                        }
                    })
                }
            }, oe.a.createElement(Hn, {
                visible: !p,
                model: e,
                selected: u,
                onClick: f
            }), n && oe.a.createElement(mn.a, {
                target: document,
                onMouseUp: h,
                onMouseMove: b,
                onWheel: g
            }))
        })),
        Kn = n(280),
        Qn = n.n(Kn);
    var Yn = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    iconsStore: t
                } = e,
                {
                    draggingIconGroup: n
                } = t;
            if (null === n) return null;
            const {
                draggingIconGroupRelativePositionTopStyle: a
            } = t;
            return oe.a.createElement("div", {
                className: Qn.a.main
            }, oe.a.createElement("div", {
                className: Qn.a.item,
                style: {
                    top: a
                }
            }, oe.a.createElement(Hn, {
                model: n,
                selected: !0
            })))
        })),
        Jn = n(281),
        Xn = n.n(Jn),
        Zn = n(84),
        $n = n.n(Zn);
    var ea = Object(ie.a)((function() {
            const e = Object(re.useRef)(null),
                t = Object(re.useContext)(un),
                {
                    sidebarStore: n
                } = t,
                {
                    collapsed: a
                } = n;
            let o;
            const i = Object(re.useCallback)(() => {
                Object(r.h)(() => {
                    null !== e.current && (t.iconsStore.selectLastSelectIconGroupIfNotSelected(), t.iconGroupPopupStore.startCreate(e.current))
                })
            }, [t, e]);
            return o = a ? oe.a.createElement("div", {
                ref: e,
                key: "collapsed",
                className: `${$n.a.main} ${$n.a.collapsedMain}`,
                onClick: i
            }, oe.a.createElement(Vn.a, {
                src: en.a,
                className: $n.a.icon
            })) : oe.a.createElement("div", {
                ref: e,
                key: "expanded",
                className: `${$n.a.main} ${$n.a.expandedMain}`,
                onClick: i
            }, oe.a.createElement(Vn.a, {
                src: en.a,
                className: `${$n.a.icon} ${$n.a.expandedIcon}`
            }), oe.a.createElement("div", {
                className: $n.a.label
            }, Object(H.a)("add"))), o
        })),
        ta = n(78);
    var na = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            t = Object(re.useRef)(null),
            {
                iconsStore: n
            } = e,
            {
                iconGroups: a,
                draggingIconGroupUuid: o,
                draggingIconUuid: i
            } = n,
            [c, s] = Object(re.useState)(0),
            l = null === o && null === i;
        Object(re.useEffect)(() => {
            l && 0 !== c && s(0)
        }, [l, c]), Object(re.useEffect)(() => {
            if (null === t.current || 0 === c) return;
            const e = window.setInterval(() => {
                null !== t.current && t.current.increaseScrollTop(c)
            }, 10);
            return () => {
                window.clearInterval(e)
            }
        }, [c, t]);
        const u = Object(re.useCallback)(n => {
                if (null === t.current || null === e.iconsStore.sidebarIconGroupsScrollerClientRect) return;
                const a = {
                        top: n.clientY,
                        left: n.clientX
                    },
                    {
                        iconsStore: r
                    } = e,
                    {
                        iconGroupSize: o,
                        sidebarIconGroupsScrollerClientRect: i
                    } = e.iconsStore;
                a.top < i.top + o.height ? -1 !== c && s(-1) : a.top > i.bottom - o.height ? 1 !== c && s(1) : 0 !== c && s(0), r.setDraggingIconGroupClientPosition(a)
            }, [t, e, s, c]),
            d = Object(re.useCallback)(t => {
                const n = t.currentTarget.getBoundingClientRect(),
                    {
                        iconsStore: a
                    } = e,
                    {
                        iconGroupSize: r
                    } = a;
                t.clientY - n.top < r.height ? s(-1) : n.bottom - t.clientY < r.height ? s(1) : s(0)
            }, [s, e]),
            p = Object(re.useCallback)(() => {
                s(0)
            }, [s]),
            f = Object(re.useCallback)(t => {
                Object(r.h)(() => {
                    const {
                        uiStore: n,
                        iconsStore: a
                    } = e;
                    n.closeContextMenusInSidebar();
                    const r = t.target;
                    r instanceof HTMLElement && a.setSidebarIconGroupsScrollerScrollTop(r.scrollTop)
                })
            }, [e]);
        return oe.a.createElement(ta.a, {
            ref: t,
            viewportClassName: Xn.a.viewport,
            scrollerClassName: Xn.a.scroller,
            onScroll: f,
            onMouseMove: null === i ? void 0 : d,
            onMouseLeave: null === i ? void 0 : p,
            autoScrollDisabled: !l,
            scrollerChildren: oe.a.createElement(Yn, null)
        }, a.map(e => oe.a.createElement(qn, {
            key: e.uuid,
            model: e
        })), oe.a.createElement(ea, {
            key: "add"
        }), null !== o && oe.a.createElement(mn.a, {
            target: document,
            onMouseMove: u,
            onMouseUp: e.iconsStore.endDragIconGroupThenBackupModel
        }))
    }));
    var aa = Object(ie.a)((function() {
            return oe.a.createElement("div", {
                className: Dn.a.main
            }, oe.a.createElement(na, null))
        })),
        ra = n(316),
        oa = n.n(ra),
        ia = n(317),
        ca = n.n(ia);
    var sa = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    settingModalStore: t
                } = e,
                {
                    opened: n
                } = t;
            return oe.a.createElement("div", {
                className: oa.a.main
            }, oe.a.createElement(Hn, {
                selected: n,
                onClick: t.open,
                model: {
                    uuid: "1",
                    label: Object(H.a)("settings"),
                    icoSrc: ca.a,
                    data: []
                }
            }))
        })),
        la = n(103),
        ua = n.n(la);
    var da = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    sidebarStore: t,
                    iconsStore: n,
                    iconGroupPopupStore: a
                } = e,
                {
                    collapsed: r
                } = t,
                i = t.model.setting,
                {
                    autoHide: c,
                    side: s
                } = i,
                l = se()(ua.a.main, r ? ua.a.collapsedMain : ua.a.expandedMain, s === o.a.Right ? ua.a.rightSideMain : ua.a.leftSideMain, {
                    [ua.a.autoHideMain]: c,
                    [ua.a.enteredMain]: c && (null !== n.draggingIconGroupUuid || n.iconGroupContextMenuOpened || a.opened || t.entered)
                }),
                u = Object(re.useCallback)(t => {
                    const {
                        sidebarStore: n
                    } = e, {
                        width: a,
                        entered: r
                    } = n, {
                        side: i
                    } = n.model.setting, {
                        clientX: c
                    } = t;
                    switch (i) {
                        case o.a.Right: {
                            const t = e.uiStore.width;
                            r ? c < t - Math.floor(1.1 * a) && n.setEntered(!1) : c >= t - 32 && n.setEntered(!0)
                        }
                        break;
                    case o.a.Left:
                    default:
                        r ? c > Math.floor(1.1 * a) && n.setEntered(!1) : c <= 32 && n.setEntered(!0)
                    }
                }, [e]);
            return oe.a.createElement("div", {
                className: l
            }, oe.a.createElement(Ln, null), oe.a.createElement(aa, null), oe.a.createElement(sa, null), c && oe.a.createElement(mn.a, {
                target: document,
                onMouseMove: u
            }))
        })),
        pa = n(243),
        fa = n.n(pa),
        ma = n(244),
        ha = n.n(ma),
        ba = n(55),
        ga = n.n(ba),
        va = n(282),
        ya = n.n(va);
    var Sa = Object(ie.a)((function({
            model: e
        }) {
            return oe.a.createElement("div", {
                className: ya.a.main,
                style: Object(M.c)(e.backgroundColor)
            }, oe.a.createElement("div", {
                className: ya.a.content,
                style: {
                    backgroundImage: `url(${Object(P.d)(e.icoSrc)})`,
                    backgroundSize: e.icoScalePercentage + "% auto"
                }
            }))
        })),
        wa = n(318),
        ka = n.n(wa);
    var Ea = Object(ie.a)((function({
            model: e
        }) {
            return oe.a.createElement("div", {
                className: ka.a.main,
                style: Object(M.c)(e.backgroundColor)
            }, e.icoText)
        })),
        Oa = n(72),
        Ca = n.n(Oa);
    var xa = Object(ie.a)((function({
            displayFullBackground: e,
            label: t,
            desc: n,
            icon: a,
            badgeCount: r
        }) {
            const o = Object(re.useContext)(un),
                {
                    iconsStore: i
                } = o,
                {
                    iconBorderRadiusStyle: c
                } = i,
                {
                    displayShadow: s
                } = i.model.setting,
                l = se()(Ca.a.main, s && ga.a.boxShadowedWrapper),
                u = se()(Ca.a.icon, e && Ca.a.backgroundedIcon);
            return oe.a.createElement("div", {
                className: l,
                style: {
                    borderRadius: c
                }
            }, oe.a.createElement("div", {
                className: u,
                style: {
                    borderTopLeftRadius: c,
                    borderBottomLeftRadius: c
                }
            }, a), oe.a.createElement("div", {
                className: Ca.a.text,
                style: {
                    borderTopRightRadius: c,
                    borderBottomRightRadius: c
                }
            }, oe.a.createElement("div", {
                className: Ca.a.labelWrapper
            }, oe.a.createElement("div", {
                className: Ca.a.label
            }, t), void 0 !== r && oe.a.createElement("div", {
                className: Ca.a.badgeWrapper
            }, oe.a.createElement(Wn, {
                style: {
                    borderRadius: i.particularIconBadgeRadiusStyle
                },
                className: Ca.a.badge,
                count: r
            }))), oe.a.createElement("div", {
                className: Ca.a.desc
            }, n)))
        })),
        ja = n(101),
        _a = n.n(ja);
    var Ia = Object(ie.a)((function({
        dropShadowed: e,
        label: t,
        icon: n,
        badgeCount: a
    }) {
        const r = Object(re.useContext)(un),
            {
                iconsStore: o
            } = r,
            {
                iconBorderRadiusStyle: i
            } = o,
            {
                displayShadow: c
            } = o.model.setting,
            s = se()(_a.a.iconWrapper, c && (e ? ga.a.dropShadowedWrapper : ga.a.boxShadowedWrapper)),
            l = se()(_a.a.label, c && _a.a.boxShadowedLabel);
        return oe.a.createElement("div", {
            className: _a.a.main
        }, oe.a.createElement("div", {
            className: s,
            style: {
                borderRadius: i
            }
        }, n), oe.a.createElement("div", {
            className: l
        }, t), void 0 !== a && oe.a.createElement(Wn, {
            style: {
                borderRadius: o.simpleIconBadgeRadiusStyle,
                transform: o.simpleIconBadgeRadiusTransformStyle
            },
            className: _a.a.badge,
            count: a
        }))
    }));
    var Ta = Object(ie.a)((function({
            model: e
        }) {
            const t = Object(re.useContext)(un),
                [n, a] = Object(re.useState)(!1),
                r = Object(re.useRef)(null),
                o = Object(re.useRef)(!1),
                i = Object(re.useCallback)(() => {
                    const {
                        iconsStore: n
                    } = t;
                    n.moveDraggingIconInGroup(e)
                }, [t, e]),
                s = Object(re.useRef)(null),
                {
                    commonStore: l,
                    iconsStore: u
                } = t,
                {
                    themeType: d
                } = l,
                p = Object(te.d)(d, e.backgroundColor, 40),
                {
                    draggingIconUuid: f,
                    iconOpacityStyle: m
                } = u,
                {
                    iconLayout: h,
                    displayNotificationBadge: b
                } = u.model.setting;
            let g = void 0;
            if (b) {
                const {
                    isTodosIcon: n
                } = u;
                if (n[e.uuid]) {
                    const {
                        todosStore: e
                    } = t, {
                        todoCountDict: n
                    } = e;
                    g = n[D.Sb.value]
                }
            }
            const v = null != f,
                y = f === e.uuid,
                S = v && !y,
                w = se()(ga.a.main, {
                    [ga.a.isDragTargetMain]: y,
                    [ga.a.draggingMain]: v
                });
            let k, E;
            switch (e.type) {
                case $.a.Image:
                    k = oe.a.createElement(Sa, {
                        model: e
                    });
                    break;
                case $.a.Text:
                default:
                    k = oe.a.createElement(Ea, {
                        model: e
                    })
            }
            const O = Object(M.k)(e.backgroundColor);
            switch (h) {
                case c.a.Particular:
                    E = oe.a.createElement(xa, {
                        displayFullBackground: O,
                        icon: k,
                        label: e.label,
                        desc: e.desc,
                        badgeCount: g
                    });
                    break;
                case c.a.Simple:
                default:
                    E = oe.a.createElement(Ia, {
                        dropShadowed: O,
                        icon: k,
                        label: e.label,
                        badgeCount: g
                    })
            }
            const C = Object(re.useCallback)(() => {
                    a(!1)
                }, [a]),
                x = Object(re.useCallback)(n => {
                    if (null !== s.current && (Math.abs(s.current.left - n.clientX) > 3 || Math.abs(s.current.top - n.clientY) > 3)) {
                        a(!1), o.current = !1;
                        const {
                            iconsStore: r
                        } = t;
                        r.startDragIcon(e, {
                            left: n.clientX,
                            top: n.clientY
                        })
                    }
                }, [s, t, a, e]),
                j = Object(re.useCallback)(() => {
                    if (null === s.current) return;
                    a(!1), o.current = !1;
                    const {
                        iconsStore: n
                    } = t;
                    n.startDragIcon(e, s.current)
                }, [s, a, t, e]);
            return oe.a.createElement("div", {
                id: e.uuid,
                className: w,
                ref: r,
                style: {
                    color: p,
                    opacity: m
                },
                onClick: n => {
                    o.current && (n.shiftKey ? t.iconsStore.openIconByModel(e, Ce.a.NewWindow) : D.lb && n.metaKey || !D.lb && n.ctrlKey ? t.iconsStore.openIconByModel(e, Ce.a.BackgroundTab) : t.iconsStore.openIconByModel(e))
                },
                onMouseDown: n => {
                    0 === n.button ? (t.uiStore.closeContextMenus(), o.current = !0, a(!0), s.current = {
                        left: n.clientX,
                        top: n.clientY
                    }) : 1 === n.button && t.iconsStore.openIconByModel(e, Ce.a.BackgroundTab)
                },
                onMouseEnter: S ? i : void 0,
                onContextMenu: n => {
                    n.stopPropagation(), n.preventDefault(), t.iconsStore.openIconContextMenu(e, {
                        left: n.clientX,
                        top: n.clientY
                    })
                }
            }, E, n && oe.a.createElement(mn.a, {
                target: document,
                onMouseUp: C,
                onMouseMove: x,
                onWheel: j
            }))
        })),
        Pa = n(85),
        Ma = n.n(Pa);
    var Na = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                iconsStore: t,
                addIconModalStore: n
            } = e,
            {
                iconBorderRadiusStyle: a
            } = t,
            {
                setting: r
            } = t.model,
            {
                iconLayout: o,
                displayShadow: i
            } = r,
            {
                open: s
            } = n;
        let l;
        const u = t => {
            t.stopPropagation(), t.preventDefault(), e.iconsStore.openAddIconBtnContextMenu({
                left: t.clientX,
                top: t.clientY
            })
        };
        switch (o) {
            case c.a.Particular:
                l = oe.a.createElement("div", {
                    key: "particular",
                    onClick: s,
                    onContextMenu: u,
                    className: `${ga.a.main} ${Ma.a.main}`
                }, oe.a.createElement("div", {
                    className: se()(Ma.a.iconWrapper, Ma.a.particularIconWrapper, i && ga.a.boxShadowedWrapper),
                    style: {
                        borderRadius: a
                    }
                }, oe.a.createElement(Vn.a, {
                    src: en.a,
                    className: Ma.a.icon
                })));
                break;
            case c.a.Simple:
            default:
                l = oe.a.createElement("div", {
                    key: "simple",
                    onClick: s,
                    onContextMenu: u,
                    className: `${Ma.a.main} ${ga.a.main}`
                }, oe.a.createElement("div", {
                    className: se()(Ma.a.iconWrapper, Ma.a.simpleIconWrapper, i && ga.a.boxShadowedWrapper),
                    style: {
                        borderRadius: a
                    }
                }, oe.a.createElement(Vn.a, {
                    src: en.a,
                    className: Ma.a.icon
                })), oe.a.createElement("div", {
                    className: _a.a.label
                }, Object(H.a)("add")))
        }
        return l
    }));
    var La = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    iconsStore: t
                } = e,
                {
                    currentIconGroupIcons: n
                } = t;
            if (null === n) return null;
            const {
                displayAddBtn: a
            } = t.model.setting;
            return oe.a.createElement(oe.a.Fragment, null, n.map(e => oe.a.createElement(Ta, {
                key: e.uuid,
                model: e
            })), a && oe.a.createElement(Na, {
                key: "add"
            }))
        })),
        Ra = n(245),
        Da = n.n(Ra),
        Aa = n(17);
    var Ba = Object(ie.a)((function() {
            const e = Object(re.useRef)(!1),
                t = Object(re.useContext)(un),
                {
                    commonStore: n,
                    searcherStore: a
                } = t,
                {
                    themeType: r
                } = n,
                {
                    focused: o,
                    keyword: i,
                    searcherInputBorderRadiusStyle: c
                } = a,
                {
                    opacityPercentage: s,
                    displayShadow: l
                } = a.model.setting,
                u = se()(Da.a.main, l && Da.a.boxShadowedMain, o && Da.a.focusedMain),
                d = r === Aa.a.Dark ? "32, 33, 36" : "255, 255, 255",
                p = {
                    opacity: Math.max(20, s) + "%",
                    borderRadius: c,
                    backgroundColor: Object(M.g)(d, {
                        minPercentage: 0,
                        maxPercentage: 90
                    }, s < 20 ? s / 20 * 100 : 100)
                };
            return oe.a.createElement("input", {
                ref: a.setInput,
                type: "text",
                className: u,
                style: p,
                placeholder: Object(H.a)("search"),
                value: i,
                onChange: e => {
                    a.setKeyword(e.target.value)
                },
                onFocus: a.openSearcherSuggestions,
                onBlur: a.closeSearcherSuggestions,
                onCompositionStart: () => {
                    e.current = !0
                },
                onCompositionEnd: () => {
                    e.current = !1
                },
                onKeyDown: t => {
                    if (!e.current) switch (t.key) {
                        case "Enter":
                            a.search();
                            break;
                        case "ArrowDown":
                            a.pickNextSearcherSuggestion();
                            break;
                        case "ArrowUp":
                            t.preventDefault(), a.pickPrevSearcherSuggestion()
                    }
                }
            })
        })),
        Ga = n(246),
        Ua = n.n(Ga),
        Va = n(214),
        Fa = n.n(Va),
        za = n(75),
        Wa = n.n(za);
    var Ha = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    searcherStore: t,
                    commonStore: n
                } = e,
                {
                    themeType: a
                } = n,
                {
                    searcherIconBorderRadiusStyle: r,
                    searchEnginePickerOpened: o,
                    currentSearcherEngine: i
                } = t,
                {
                    opacityPercentage: c
                } = t.model.setting,
                s = se()(Fa.a.main, o && Fa.a.hoveringMain),
                l = {
                    borderRadius: r,
                    "--background-color_hovering": a === Aa.a.Dark ? Object(M.g)("255, 255, 255", {
                        minPercentage: 4,
                        maxPercentage: 8
                    }, c) : Object(M.g)("245, 245, 245", {
                        minPercentage: 50,
                        maxPercentage: 100
                    }, c)
                };
            return oe.a.createElement("div", {
                className: s,
                style: l,
                onMouseDown: o ? void 0 : e => {
                    0 === e.button && t.openSearchEnginePicker()
                }
            }, oe.a.createElement("img", {
                className: Fa.a.icon,
                src: Object(P.d)(i.icoSrc)
            }), oe.a.createElement(Vn.a, {
                className: Fa.a.dropDownIcon,
                src: Wa.a
            }))
        })),
        qa = n(45),
        Ka = n.n(qa),
        Qa = n(230),
        Ya = n.n(Qa);
    var Ja = Object(ie.a)((function({
            model: e,
            selected: t
        }) {
            const n = Object(re.useContext)(un),
                {
                    keyword: a
                } = e,
                r = a.length,
                o = [];
            let i, c = 0;
            switch (e.type) {
                case je.a.Server: {
                    const t = Ie(e),
                        n = t.toLowerCase(),
                        i = t.length;
                    for (;;) {
                        const e = n.indexOf(a, c);
                        if (-1 === e) {
                            o.push({
                                isKeyword: !1,
                                text: t.slice(c)
                            });
                            break
                        }
                        if (e !== c && o.push({
                                isKeyword: !1,
                                text: t.slice(c, e)
                            }), o.push({
                                isKeyword: !0,
                                text: t.slice(e, e + r)
                            }), c = e + r, c === i) break
                    }
                }
                i = oe.a.createElement("div", {
                    key: "server",
                    className: Ka.a.iconWrapper
                }, oe.a.createElement(Vn.a, {
                    src: Ya.a,
                    className: Ka.a.icon
                }));
                break;
            case je.a.Icon: {
                const t = Te(e),
                    n = a.length;
                o.push({
                    isKeyword: !0,
                    text: t.slice(0, n)
                }), n < t.length && o.push({
                    isKeyword: !1,
                    text: t.slice(n)
                })
            } {
                const {
                    data: t
                } = e, n = Object(M.c)(t.backgroundColor);
                switch (t.type) {
                    case $.a.Image: {
                        const e = {
                            backgroundImage: `url(${Object(P.d)(t.icoSrc)})`,
                            backgroundSize: t.icoScalePercentage + "% auto"
                        };
                        i = oe.a.createElement("div", {
                            key: "imageIcon",
                            className: `${Ka.a.iconWrapper} ${Ka.a.tileIcon}`,
                            style: Object.assign(e, n)
                        })
                    }
                    break;
                case $.a.Text:
                default:
                    i = oe.a.createElement("div", {
                        key: "textIcon",
                        className: `${Ka.a.iconWrapper} ${Ka.a.tileIcon}`,
                        style: n
                    }, t.icoText)
                }
            }
            }
            const s = se()(Ka.a.main, {
                [Ka.a.selectedMain]: t
            });
            return oe.a.createElement("div", {
                className: s,
                onMouseDown: t => {
                    0 === t.button && n.searcherStore.pickSearcherSuggestion(e)
                }
            }, i, oe.a.createElement("div", {
                className: Ka.a.text
            }, o.map((e, t) => oe.a.createElement("span", {
                key: `${t}${e}`,
                className: e.isKeyword ? Ka.a.emphasisText : Ka.a.normalText
            }, e.text))))
        })),
        Xa = n(283),
        Za = n.n(Xa);
    var $a = Object(ie.a)((function({
        children: e
    }) {
        const t = Object(re.useContext)(un),
            {
                searcherStore: n
            } = t,
            {
                displayShadow: a
            } = n.model.setting,
            r = se()(Za.a.main, a && Za.a.boxShadowedMain);
        return oe.a.createElement("div", {
            className: r
        }, e)
    }));
    var er = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                searcherStore: t
            } = e,
            {
                searcherSuggestionsOpened: n,
                searcherSuggestions: a
            } = t;
        if (!n || 0 === a.length) return null;
        const {
            currentSearcherSuggestionsIndex: r
        } = t;
        return oe.a.createElement($a, null, a.map((e, t) => oe.a.createElement(Ja, {
            key: e.uuid,
            model: e,
            selected: t === r
        })))
    }));
    var tr = Object(ie.a)((function({
        uuid: e
    }) {
        const t = Object(re.useContext)(un),
            {
                searcherStore: n
            } = t,
            a = n.model.data.dict[e],
            {
                icoSrc: r,
                title: o
            } = a;
        return oe.a.createElement("div", {
            className: Ka.a.main,
            onMouseDown: t => {
                0 === t.button && (t.preventDefault(), n.setValueSetting(e), n.focusInput())
            }
        }, oe.a.createElement("div", {
            className: Ka.a.iconWrapper
        }, oe.a.createElement("img", {
            src: Object(P.d)(r),
            className: Ka.a.colorfulIcon
        })), oe.a.createElement("div", {
            className: Ka.a.text
        }, oe.a.createElement("span", {
            className: Ka.a.emphasisText
        }, o)))
    }));
    var nr = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    searcherStore: t
                } = e,
                {
                    searchEnginePickerOpened: n
                } = t;
            if (Object(re.useEffect)(() => {
                    if (n) return Object(ne.b)(() => {
                        e.searcherStore.closeSearchEnginePicker()
                    })
                }, [n, e]), !n) return null;
            const {
                officials: a
            } = t.model.data;
            return oe.a.createElement($a, null, a.map(e => oe.a.createElement(tr, {
                key: e,
                uuid: e
            })), oe.a.createElement(mn.a, {
                target: document,
                onMouseDown: t.closeSearchEnginePicker
            }))
        })),
        ar = n(319),
        rr = n.n(ar),
        or = n(231),
        ir = n.n(or);
    var cr = Object(ie.a)((function({
            className: e,
            onClick: t
        }) {
            const n = se()(rr.a.main, e);
            return oe.a.createElement(Vn.a, {
                src: ir.a,
                className: n,
                onClick: t
            })
        })),
        sr = n(284),
        lr = n.n(sr);
    var ur = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                searcherStore: t
            } = e,
            {
                keyword: n
            } = t,
            a = Object(re.useCallback)(() => {
                const {
                    searcherStore: t
                } = e;
                t.clearKeyword(), t.focusInput()
            }, [e]);
        return 0 === n.length ? null : oe.a.createElement("div", {
            className: lr.a.main
        }, oe.a.createElement(cr, {
            className: lr.a.btn,
            onClick: a
        }))
    }));
    var dr = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                searcherStore: t,
                iconsStore: n
            } = e,
            {
                widthPercentage: a
            } = t.model.setting,
            {
                searcherClassName: r,
                searcherInputScaledHeightStyle: o
            } = t,
            i = null !== n.draggingIconUuid,
            c = se()(Ua.a.main, r, i && Ua.a.iconDraggingMain);
        return oe.a.createElement("div", {
            className: c
        }, oe.a.createElement("div", {
            className: Ua.a.content,
            style: {
                width: a + "%",
                height: o
            }
        }, oe.a.createElement(Ba, null), oe.a.createElement(Ha, null), oe.a.createElement(ur, null), oe.a.createElement(er, null), oe.a.createElement(nr, null)))
    }));
    var pr = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                iconsStore: t,
                commonStore: n
            } = e,
            {
                widthPercentage: a
            } = n.model.setting;
        let r;
        switch (t.model.setting.iconLayout) {
            case c.a.Particular:
                r = ha.a.particularIconLayout;
                break;
            case c.a.Simple:
            default:
                r = ha.a.simpleIconLayout
        }
        const o = se()(ha.a.main, r),
            i = {
                rowGap: t.iconRowGapStyle,
                columnGap: t.iconColumnGapStyle,
                [D.ib]: t.scaledIconSizeStyle,
                width: a + "%",
                paddingBottom: t.currentIconGroupPaddingBottomStyle
            };
        return oe.a.createElement("div", {
            className: o,
            style: i
        }, oe.a.createElement(dr, null), oe.a.createElement(La, null))
    }));
    var fr = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    iconsStore: t,
                    sidebarStore: n
                } = e,
                {
                    side: a
                } = n.model.setting,
                {
                    draggingIconUuid: r,
                    iconClassName: i
                } = t,
                c = null === r,
                [s, l] = Object(re.useState)(0);
            Object(re.useEffect)(() => {
                c && 0 !== s && l(0)
            }, [c, s]), Object(re.useEffect)(() => {
                if (0 === s) return;
                const t = window.setInterval(() => {
                    const t = e.iconsStore.currentIconGroupScroller;
                    null !== t && t.increaseScrollTop(s)
                }, 10);
                return () => {
                    window.clearInterval(t)
                }
            }, [s, e]);
            const u = Object(re.useCallback)(() => {
                    const {
                        uiStore: t
                    } = e;
                    t.closeContextMenusInMain()
                }, [e]),
                d = Object(re.useCallback)(e => {
                    const t = e.currentTarget.getBoundingClientRect();
                    e.clientY < 120 ? -1 !== s && l(-1) : t.bottom - e.clientY < 120 ? 1 !== s && l(1) : 0 !== s && l(0)
                }, [l, s]),
                p = Object(re.useCallback)(t => {
                    Object(ne.a)(t.target) || (t.stopPropagation(), t.preventDefault(), e.uiStore.openAppContextMenu({
                        left: t.clientX,
                        top: t.clientY
                    }))
                }, [e]),
                f = Object(re.useCallback)(() => {
                    l(0)
                }, [l]);
            return oe.a.createElement(ct, {
                verticalScrollbarSide: a === o.a.Right ? it.Left : it.Right,
                ref: t.setCurrentIconGroupScroller,
                viewportClassName: fa.a.viewport,
                scrollerClassName: fa.a.scroller,
                paddingLeft: 6,
                paddingRight: 6,
                onMouseMove: c ? void 0 : d,
                onMouseLeave: 0 === s ? void 0 : f,
                onMouseUp: 0 === s ? void 0 : f,
                onScroll: u,
                onContextMenu: p
            }, oe.a.createElement("div", {
                className: `${fa.a.main} ${i}`
            }, oe.a.createElement(pr, null)))
        })),
        mr = n(320),
        hr = n.n(mr);
    var br = Object(ie.a)((function() {
            const e = Object(re.useRef)(null),
                t = Object(re.useContext)(un),
                {
                    iconsStore: n
                } = t,
                {
                    currentIconGroupUuid: a,
                    carouselStatus: r
                } = n;
            return Object(re.useEffect)(() => {
                const n = e.current;
                if (null === n) return;
                const {
                    slideChecker: a
                } = t.uiStore;
                return a.observe(n), () => {
                    a.unobserve(n)
                }
            }, [e, t]), oe.a.createElement("div", {
                className: hr.a.main,
                ref: e
            }, oe.a.createElement(de, {
                transitionKey: null === a ? "null" : a,
                status: r
            }, oe.a.createElement(fr, null)))
        })),
        gr = n(285),
        vr = n.n(gr),
        yr = n(247),
        Sr = n.n(yr),
        wr = n(321),
        kr = n.n(wr);
    var Er = Object(ie.a)((function({
        className: e
    }) {
        const t = se()(kr.a.main, e);
        return oe.a.createElement("div", {
            className: t
        })
    }));
    var Or = Object(ie.a)((function({
            opened: e,
            modalClassName: t,
            space: n = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            },
            onPressEsc: a,
            children: r
        }) {
            Object(re.useEffect)(() => {
                if (void 0 !== a && e) return Object(ne.b)(a)
            }, [e, a]);
            const o = se()(Sr.a.modal, t),
                i = {
                    left: n.left + "px",
                    top: n.top + "px",
                    right: n.right + "px",
                    bottom: n.bottom + "px"
                };
            return oe.a.createElement(Sn.a, {
                entered: e
            }, oe.a.createElement("div", {
                className: Sr.a.main
            }, oe.a.createElement(Er, null), oe.a.createElement("div", {
                className: Sr.a.content,
                style: i
            }, oe.a.createElement("div", {
                className: o
            }, r))))
        })),
        Cr = n(322),
        xr = n.n(Cr);
    var jr = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", {
                className: xr.a.main
            }, e)
        })),
        _r = n(215),
        Ir = n.n(_r);
    var Tr = Object(ie.a)((function({
        title: e,
        children: t
    }) {
        return oe.a.createElement("div", {
            className: Ir.a.main
        }, oe.a.createElement("div", {
            className: Ir.a.title
        }, e), oe.a.createElement(ta.a, {
            viewportClassName: Ir.a.viewport,
            scrollerClassName: Ir.a.scroller
        }, t))
    }));
    var Pr = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", null, e)
        })),
        Mr = n(216),
        Nr = n.n(Mr);
    var Lr = Object(ie.a)((function({
        selected: e,
        children: t,
        suffixChildren: n,
        onClick: a
    }) {
        const r = se()(Nr.a.main, {
            [Nr.a.selectedMain]: e
        });
        return oe.a.createElement("div", {
            className: r,
            onClick: a
        }, oe.a.createElement("div", {
            className: Nr.a.content
        }, t), void 0 !== n && oe.a.createElement("div", {
            className: Nr.a.suffixContent
        }, n))
    }));
    var Rr = Object(ie.a)((function({
        model: e
    }) {
        const t = Object(re.useContext)(un),
            {
                settingModalStore: n
            } = t,
            {
                tabValue: a
            } = n,
            r = Object(re.useCallback)(() => {
                n.setTabValue(e.value)
            }, [n, e]);
        return oe.a.createElement(Lr, {
            selected: a === e.value,
            onClick: r
        }, e.text)
    }));
    var Dr = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    settingModalStore: t
                } = e,
                {
                    tabs: n
                } = t;
            return oe.a.createElement(Tr, {
                title: Object(H.a)("settings")
            }, oe.a.createElement(Pr, null, n.map(e => oe.a.createElement(Rr, {
                key: e.value,
                model: e
            }))))
        })),
        Ar = n(286),
        Br = n.n(Ar);
    var Gr = Object(ie.a)((function({
            only: e = !1,
            children: t
        }) {
            const n = se()(Br.a.main, {
                [Br.a.onlyMain]: e
            });
            return oe.a.createElement("div", {
                className: n
            }, t)
        })),
        Ur = n(323),
        Vr = n.n(Ur);
    var Fr = Object(ie.a)((function({
            className: e,
            children: t
        }) {
            const n = se()(Vr.a.main, e);
            return oe.a.createElement("div", {
                className: n
            }, t)
        })),
        zr = n(324),
        Wr = n.n(zr),
        Hr = n(325),
        qr = n.n(Hr);
    var Kr = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", {
                className: qr.a.main
            }, e)
        })),
        Qr = n(326),
        Yr = n.n(Qr);
    var Jr = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", {
                className: Yr.a.main
            }, e)
        })),
        Xr = n(248),
        Zr = n.n(Xr),
        $r = n(217),
        eo = n.n($r),
        to = n(327),
        no = n.n(to);
    var ao = Object(ie.a)((function({
        onGoPrev: e,
        children: t
    }) {
        return oe.a.createElement("div", {
            className: eo.a.main
        }, oe.a.createElement("div", {
            className: eo.a.btn,
            onClick: e
        }, oe.a.createElement(Vn.a, {
            className: eo.a.btnIcon,
            src: no.a
        })), oe.a.createElement("div", {
            className: eo.a.text
        }, t))
    }));
    var ro = Object(ie.a)((function({
            onGoPrev: e,
            title: t,
            children: n
        }) {
            return oe.a.createElement("div", {
                className: Zr.a.main
            }, oe.a.createElement("div", {
                className: Zr.a.title
            }, void 0 !== t && void 0 !== e && oe.a.createElement(ao, {
                onGoPrev: e
            }, t)), oe.a.createElement("div", {
                className: Zr.a.btns
            }, n))
        })),
        oo = n(35);
    var io = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                editLocationCardStore: t
            } = e;
        if (t.editing) return oe.a.createElement(ro, {
            key: "location",
            title: Object(H.a)("location"),
            onGoPrev: t.cancel
        });
        const {
            editUserNicknameCardStore: n
        } = e;
        if (n.editing) return oe.a.createElement(ro, {
            key: "nickname",
            title: Object(H.a)("modify_nickname"),
            onGoPrev: n.cancel
        }, oe.a.createElement(oo.a, {
            onClick: n.cancel,
            width: "fit-content"
        }, Object(H.a)("cancel")), oe.a.createElement(oo.a, {
            type: "primary",
            loading: n.loading,
            onClick: n.submit,
            width: "fit-content"
        }, Object(H.a)("modify")));
        const {
            editEmailUserPasswordCardStore: a
        } = e;
        return a.editing ? oe.a.createElement(ro, {
            key: "password",
            title: Object(H.a)("modify_password"),
            onGoPrev: a.cancel
        }, oe.a.createElement(oo.a, {
            onClick: a.cancel,
            width: "fit-content"
        }, Object(H.a)("cancel")), oe.a.createElement(oo.a, {
            type: "primary",
            loading: a.loading,
            onClick: a.submit,
            width: "fit-content"
        }, Object(H.a)("modify"))) : null
    }));
    var co = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    settingModalStore: t
                } = e,
                {
                    title: n
                } = t;
            return oe.a.createElement(oe.a.Fragment, null, oe.a.createElement(Jr, null, n), oe.a.createElement(io, null))
        })),
        so = n(287),
        lo = n.n(so);
    var uo = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement(ct, {
                viewportClassName: lo.a.viewport,
                scrollerClassName: lo.a.scroller
            }, e)
        })),
        po = n(249),
        fo = n.n(po),
        mo = n(288),
        ho = n.n(mo);
    var bo = Object(ie.a)((function({
            domId: e,
            className: t,
            contentClassName: n,
            title: a,
            children: r,
            onClick: o,
            onContextMenu: i
        }) {
            const c = se()(ho.a.main, t);
            return oe.a.createElement("div", {
                id: e,
                className: c,
                onClick: o,
                onContextMenu: i
            }, void 0 !== a && oe.a.createElement("div", {
                className: ho.a.title
            }, a), oe.a.createElement("div", {
                className: n
            }, r))
        })),
        go = n(124),
        vo = n.n(go);
    var yo = Object(ie.a)((function({
            hovering: e = !1,
            label: t,
            children: n,
            onClick: a
        }) {
            if (void 0 === t) return oe.a.createElement("div", {
                className: vo.a.childrenOnlyMain
            }, n);
            const r = se()(vo.a.main, {
                [vo.a.hoveringMain]: e
            });
            return oe.a.createElement("div", {
                className: r,
                onClick: a
            }, oe.a.createElement("div", {
                className: vo.a.label
            }, t), oe.a.createElement("div", {
                className: vo.a.content
            }, n))
        })),
        So = n(111);
    var wo = Object(ie.a)((function({
            popupPosition: e,
            label: t,
            value: n,
            onChange: a,
            options: r
        }) {
            const [o, i] = Object(re.useState)(!1), c = Object(re.useCallback)(() => {
                i(e => !e)
            }, [i]), s = Object(re.useCallback)(() => {
                i(!1)
            }, [i]);
            return oe.a.createElement(yo, {
                label: t,
                hovering: o,
                onClick: c
            }, oe.a.createElement(So.a, {
                bordered: !1,
                popupPosition: e,
                value: n,
                onChange: a,
                options: r,
                picking: o,
                onClose: s
            }))
        })),
        ko = n(328),
        Eo = n.n(ko);
    var Oo = Object(ie.a)((function({
        children: e
    }) {
        return oe.a.createElement("div", {
            className: Eo.a.main
        }, e)
    }));
    var Co = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                iconsStore: t,
                searcherStore: n
            } = e,
            {
                setting: a
            } = t.model,
            {
                setting: r
            } = n.model;
        return oe.a.createElement(bo, {
            title: Object(H.a)("open_method")
        }, oe.a.createElement(Oo, null, oe.a.createElement(wo, {
            label: Object(H.a)("icon"),
            options: D.nb,
            value: a.openTarget,
            onChange: t.setOpenTargetSetting
        }), oe.a.createElement(wo, {
            label: Object(H.a)("search_result"),
            options: D.nb,
            value: r.openTarget,
            onChange: n.setOpenTargetSetting
        })))
    }));
    var xo = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    searcherStore: t
                } = e,
                {
                    model: n,
                    officialSearcherEngineOptions: a
                } = t,
                {
                    setting: r
                } = n;
            return oe.a.createElement(bo, {
                title: Object(H.a)("search")
            }, oe.a.createElement(Oo, null, oe.a.createElement(wo, {
                label: Object(H.a)("search_engine"),
                value: r.value,
                options: a,
                onChange: t.setValueSetting
            })))
        })),
        jo = n(125),
        _o = n.n(jo),
        Io = n(250),
        To = n.n(Io),
        Po = n(232),
        Mo = n.n(Po);
    var No = Object(ie.a)((function({
            text: e,
            onClick: t
        }) {
            return oe.a.createElement("div", {
                className: To.a.main,
                onClick: t
            }, void 0 !== e && oe.a.createElement("div", {
                className: To.a.text
            }, e), oe.a.createElement(Vn.a, {
                className: To.a.icon,
                src: Mo.a
            }))
        })),
        Lo = n(33);
    var Ro = Object(ie.a)((function({
            label: e,
            onGoNext: t,
            text: n
        }) {
            return oe.a.createElement(yo, {
                label: e,
                onClick: t
            }, oe.a.createElement(No, {
                text: n,
                onClick: Lo.a
            }))
        })),
        Do = n(329),
        Ao = n.n(Do);
    var Bo = Object(ie.a)((function() {
            return oe.a.createElement("div", {
                className: Ao.a.main
            })
        })),
        Go = n(67);
    var Uo = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    editUserNicknameCardStore: t,
                    editUserPortraitCardStore: n,
                    editEmailUserPasswordCardStore: a,
                    userStore: r
                } = e,
                o = r.model.data;
            return oe.a.createElement(bo, null, oe.a.createElement("div", {
                className: _o.a.main
            }, oe.a.createElement("div", {
                className: _o.a.portrait
            }, oe.a.createElement("i", {
                className: _o.a.portraitImage,
                style: {
                    backgroundImage: `url(${null===o.portraitSrc?Mn.a:o.portraitSrc})`
                }
            }), oe.a.createElement(Go.a, {
                opened: e.editUserPortraitCardStore.loading
            })), oe.a.createElement("div", {
                className: _o.a.nickname
            }, o.nickname), o.type === ve.a.Email && oe.a.createElement("div", {
                className: _o.a.username
            }, o.email)), oe.a.createElement(Oo, null, oe.a.createElement(Bo, null), oe.a.createElement(Ro, {
                label: Object(H.a)("modify_nickname"),
                onGoNext: t.startEdit
            }), oe.a.createElement(Ro, {
                label: Object(H.a)("modify_portrait"),
                onGoNext: n.pick
            }), o.type === ve.a.Email && oe.a.createElement(Ro, {
                label: Object(H.a)("modify_password"),
                onGoNext: a.startEdit
            }), oe.a.createElement(Ro, {
                label: Object(H.a)("logout"),
                onGoNext: r.logout
            })))
        })),
        Vo = n(218),
        Fo = n.n(Vo),
        zo = n(233),
        Wo = n.n(zo);
    var Ho = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                guidePagesStore: t,
                commonStore: n
            } = e,
            {
                themeType: a
            } = n;
        let r;
        switch (a) {
            case Aa.a.Bright:
            case Aa.a.Dark:
                r = Wo.a
        }
        return oe.a.createElement(bo, null, oe.a.createElement("img", {
            className: Fo.a.banner,
            src: r
        }), oe.a.createElement("div", {
            className: Fo.a.content
        }, oe.a.createElement("div", {
            className: Fo.a.slogan
        }, oe.a.createElement("div", null, Object(H.a)("visitor_slogan_1")), oe.a.createElement("div", null, Object(H.a)("visitor_slogan_2"))), oe.a.createElement("div", {
            className: Fo.a.btn,
            onClick: t.startLogin
        }, Object(H.a)("login_right_now"))))
    }));
    var qo = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    userStore: t
                } = e,
                {
                    type: n
                } = t.model.data;
            let a;
            switch (n) {
                case ve.a.Email:
                    a = oe.a.createElement(Uo, null);
                    break;
                case ve.a.Visitor:
                default:
                    a = oe.a.createElement(Ho, null)
            }
            return a
        })),
        Ko = n(289),
        Qo = n.n(Ko);
    var Yo = Object(ie.a)((function({
        value: e,
        onChange: t
    }) {
        const n = se()(Qo.a.main, {
            [Qo.a.checkedMain]: e
        });
        return oe.a.createElement("div", {
            className: n,
            onClick: () => {
                t(!e)
            }
        })
    }));
    var Jo = Object(ie.a)((function({
        label: e,
        value: t,
        onChange: n
    }) {
        const a = Object(re.useRef)(null);
        Object(re.useEffect)(() => {
            a.current = t
        }, [a, t]);
        const r = Object(re.useCallback)(() => {
            null !== a.current && n(!a.current)
        }, [a, n]);
        return oe.a.createElement(yo, {
            label: e,
            onClick: r
        }, oe.a.createElement(Yo, {
            value: t,
            onChange: Lo.a
        }))
    }));
    var Xo = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                iconsStore: t,
                guidePagesStore: n
            } = e,
            {
                scrollToSwitchGroup: a,
                rememberLastVisitedGroup: r
            } = t.model.setting;
        return oe.a.createElement(bo, {
            title: Object(H.a)("icon")
        }, oe.a.createElement(Oo, null, oe.a.createElement(Ro, {
            label: Object(H.a)("import_from_bookmarks"),
            onGoNext: n.startImport
        }), oe.a.createElement(Jo, {
            label: Object(H.a)("scroll_to_switch_the_group"),
            value: a,
            onChange: t.setScrollToSwitchGroupSetting
        }), oe.a.createElement(Jo, {
            label: Object(H.a)("remember_the_last_visited_group"),
            value: r,
            onChange: t.setRememberLastVisitedGroupSetting
        })))
    }));
    var Zo = Object(ie.a)((function() {
            return oe.a.createElement(uo, null, oe.a.createElement("div", {
                className: fo.a.main
            }, oe.a.createElement("div", {
                className: fo.a.column
            }, oe.a.createElement(qo, null)), oe.a.createElement("div", {
                className: fo.a.column
            }, oe.a.createElement(Co, null), oe.a.createElement(xo, null), oe.a.createElement(Xo, null))))
        })),
        $o = n(330),
        ei = n.n($o),
        ti = n(331),
        ni = n.n(ti);
    var ai = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", {
                className: ni.a.main
            }, e)
        })),
        ri = n(104),
        oi = n.n(ri);
    var ii = Object(ie.a)((function({
            loading: e = !1,
            disabled: t = !1,
            value: n,
            title: a,
            selected: r,
            src: o,
            backgroundColor: i,
            onClick: c,
            grayWhenUnselected: s = !1
        }) {
            let l = {};
            void 0 !== o && (l.backgroundImage = `url(${Object(P.d)(o)})`), void 0 !== i && (l = Object.assign(l, Object(M.c)(i)));
            const u = se()(oi.a.main, {
                    [oi.a.selectedMain]: r,
                    [oi.a.disabledMain]: t,
                    [oi.a.loadingMain]: e
                }),
                d = se()(oi.a.image, {
                    [oi.a.grayImage]: s && !r
                });
            return oe.a.createElement("div", {
                className: u,
                onClick: e || t ? void 0 : () => {
                    c(n)
                }
            }, oe.a.createElement("div", {
                className: d,
                style: l
            }, oe.a.createElement(Go.a, {
                opened: e
            })), oe.a.createElement("div", {
                className: oi.a.title
            }, a))
        })),
        ci = n(332),
        si = n.n(ci),
        li = n(333),
        ui = n.n(li);
    const di = {
            isOfficial: !0,
            uploaded: !0,
            data: si.a,
            mimeType: z.a.Svg
        },
        pi = {
            isOfficial: !0,
            uploaded: !0,
            data: ui.a,
            mimeType: z.a.Svg
        };
    var fi = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    commonStore: t
                } = e,
                {
                    themeType: n
                } = t.model.setting,
                a = t.themeType,
                {
                    setThemeType: r
                } = t,
                o = Object(re.useCallback)(() => {
                    const {
                        commonStore: t
                    } = e, {
                        themeType: n
                    } = t.model.setting;
                    n === Aa.a.Auto ? t.setThemeType(Object(O.c)()) : t.setThemeType(Aa.a.Auto)
                }, [e]),
                i = n === Aa.a.Auto;
            return oe.a.createElement(bo, {
                title: Object(H.a)("theme")
            }, oe.a.createElement(Oo, null, oe.a.createElement(yo, null, oe.a.createElement(ai, null, oe.a.createElement(ii, {
                value: Aa.a.Bright,
                title: Object(H.a)("brightness_color"),
                selected: a === Aa.a.Bright,
                onClick: r,
                src: di,
                disabled: i
            }), oe.a.createElement(ii, {
                value: Aa.a.Dark,
                title: Object(H.a)("darkness_color"),
                selected: a === Aa.a.Dark,
                onClick: r,
                src: pi,
                disabled: i
            }))), oe.a.createElement(Bo, null), oe.a.createElement(Jo, {
                label: Object(H.a)("follow_the_system"),
                onChange: o,
                value: n === Aa.a.Auto
            })))
        })),
        mi = n(334),
        hi = n.n(mi),
        bi = n(335),
        gi = n.n(bi),
        vi = n(336),
        yi = n.n(vi),
        Si = n(337),
        wi = n.n(Si),
        ki = n(338),
        Ei = n.n(ki),
        Oi = n(339),
        Ci = n.n(Oi),
        xi = n(340),
        ji = n.n(xi),
        _i = n(341),
        Ii = n.n(_i);
    const Ti = {
            isOfficial: !0,
            uploaded: !0,
            data: hi.a,
            mimeType: z.a.Svg
        },
        Pi = {
            isOfficial: !0,
            uploaded: !0,
            data: gi.a,
            mimeType: z.a.Svg
        },
        Mi = {
            isOfficial: !0,
            uploaded: !0,
            data: yi.a,
            mimeType: z.a.Svg
        },
        Ni = {
            isOfficial: !0,
            uploaded: !0,
            data: wi.a,
            mimeType: z.a.Svg
        },
        Li = {
            isOfficial: !0,
            uploaded: !0,
            data: Ei.a,
            mimeType: z.a.Svg
        },
        Ri = {
            isOfficial: !0,
            uploaded: !0,
            data: Ci.a,
            mimeType: z.a.Svg
        },
        Di = {
            isOfficial: !0,
            uploaded: !0,
            data: ji.a,
            mimeType: z.a.Svg
        },
        Ai = {
            isOfficial: !0,
            uploaded: !0,
            data: Ii.a,
            mimeType: z.a.Svg
        };
    var Bi = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    commonStore: t,
                    sidebarStore: n
                } = e,
                {
                    themeType: a
                } = t,
                {
                    setting: r
                } = n.model,
                {
                    autoHide: i,
                    collapsed: c,
                    side: s
                } = r,
                {
                    setAutoHideSetting: l,
                    setCollapsedSetting: u,
                    setSideSetting: d
                } = n;
            let p, f;
            switch (a) {
                case Aa.a.Bright:
                    c ? (p = Ti, f = Mi) : (p = Pi, f = Ni);
                    break;
                case Aa.a.Dark:
                    c ? (p = Li, f = Di) : (p = Ri, f = Ai)
            }
            return oe.a.createElement(bo, {
                title: Object(H.a)("sidebar")
            }, oe.a.createElement(Oo, null, oe.a.createElement(yo, null, oe.a.createElement(ai, null, oe.a.createElement(ii, {
                value: o.a.Left,
                title: Object(H.a)("left_side"),
                selected: s === o.a.Left,
                onClick: d,
                src: p,
                grayWhenUnselected: !0
            }), oe.a.createElement(ii, {
                value: o.a.Right,
                title: Object(H.a)("right_side"),
                selected: s === o.a.Right,
                onClick: d,
                src: f,
                grayWhenUnselected: !0
            }))), oe.a.createElement(Bo, null), oe.a.createElement(Jo, {
                label: Object(H.a)("auto_hide"),
                value: i,
                onChange: l
            }), oe.a.createElement(Jo, {
                label: Object(H.a)("narrow_menu"),
                value: c,
                onChange: u
            })))
        })),
        Gi = n(30),
        Ui = n(76),
        Vi = n(342),
        Fi = n.n(Vi),
        zi = n(343),
        Wi = n.n(zi);
    const Hi = {
            uploaded: !0,
            isOfficial: !0,
            mimeType: z.a.Svg,
            data: Fi.a
        },
        qi = {
            uploaded: !0,
            isOfficial: !0,
            mimeType: z.a.Svg,
            data: Wi.a
        };
    var Ki = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                backgroundStore: t,
                tempBackgroundStore: n,
                commonStore: a
            } = e,
            {
                setting: r,
                data: o
            } = t.model,
            {
                value: i
            } = r,
            {
                wallpaperDict: c
            } = o,
            {
                localBackgroundLoading: s,
                setValueSetting: l
            } = t,
            u = n.model.data.wallpaper;
        let d;
        if (null === u) switch (a.themeType) {
            case Aa.a.Bright:
                d = Hi;
                break;
            case Aa.a.Dark:
                d = qi
        } else d = u.overviewData;
        return oe.a.createElement(bo, {
            title: Object(H.a)("wallpaper")
        }, oe.a.createElement(Oo, null, oe.a.createElement(yo, null, oe.a.createElement(ai, null, oe.a.createElement(ii, {
            grayWhenUnselected: null !== u,
            src: d,
            title: Object(H.a)("official_lib"),
            selected: i === I.a.Lib,
            onClick: l,
            value: I.a.Lib
        }), oe.a.createElement(ii, {
            grayWhenUnselected: !0,
            loading: s,
            title: Object(H.a)("local"),
            selected: i === I.a.Local,
            src: c[I.a.Local].overviewData,
            onClick: l,
            value: I.a.Local
        }), oe.a.createElement(ii, {
            grayWhenUnselected: !0,
            title: Object(H.a)("pure_color"),
            selected: i === I.a.Color,
            backgroundColor: c[I.a.Color].data,
            onClick: l,
            value: I.a.Color
        }))), oe.a.createElement(Bo, null), i === I.a.Color && oe.a.createElement(yo, null, oe.a.createElement(Gi.a, {
            label: Object(H.a)("background_color")
        }, oe.a.createElement(Ui.a, {
            defaultCustomColor: a.themeType === Aa.a.Dark ? D.T : D.P,
            value: c[I.a.Color].data,
            onChange: t.setColorBackground
        }))), i === I.a.Local && oe.a.createElement(Ro, {
            label: Object(H.a)("replace"),
            onGoNext: t.pickLocalBackground
        }), i === I.a.Lib && oe.a.createElement(wo, {
            popupPosition: "top",
            label: Object(H.a)("category"),
            value: r.libCategories[0],
            onChange: t.setLibCategoriesSetting,
            options: D.fc
        }), i === I.a.Lib && oe.a.createElement(Ro, {
            label: Object(H.a)("next_one"),
            onGoNext: t.nextLibBackgroundWallpaper
        }), i === I.a.Lib && oe.a.createElement(wo, {
            popupPosition: "top",
            label: Object(H.a)("replace_frequency"),
            value: r.slideIntervalSeconds,
            onChange: t.setSlideIntervalSecondsSetting,
            options: D.K
        }), (i === I.a.Local || i === I.a.Lib) && oe.a.createElement(Jo, {
            label: Object(H.a)("blur"),
            value: r.blurred,
            onChange: t.setBlurredSetting
        }), (i === I.a.Local || i === I.a.Lib) && oe.a.createElement(Ro, {
            label: Object(H.a)("download"),
            onGoNext: t.downloadWallpaper
        })))
    }));
    var Qi = Object(ie.a)((function() {
            return oe.a.createElement(uo, null, oe.a.createElement("div", {
                className: ei.a.main
            }, oe.a.createElement("div", null, oe.a.createElement(fi, null), oe.a.createElement(Bi, null)), oe.a.createElement("div", null, oe.a.createElement(Ki, null))))
        })),
        Yi = n(344),
        Ji = n.n(Yi),
        Xi = n(345),
        Zi = n.n(Xi),
        $i = n(346),
        ec = n.n($i),
        tc = n(347),
        nc = n.n(tc),
        ac = n(348),
        rc = n.n(ac),
        oc = n(349),
        ic = n.n(oc),
        cc = n(350),
        sc = n.n(cc),
        lc = n(351),
        uc = n.n(lc),
        dc = n(352),
        pc = n.n(dc);
    const fc = {
            isOfficial: !0,
            uploaded: !0,
            data: Zi.a,
            mimeType: z.a.Svg
        },
        mc = {
            isOfficial: !0,
            uploaded: !0,
            data: ec.a,
            mimeType: z.a.Svg
        },
        hc = {
            isOfficial: !0,
            uploaded: !0,
            data: nc.a,
            mimeType: z.a.Svg
        },
        bc = {
            isOfficial: !0,
            uploaded: !0,
            data: rc.a,
            mimeType: z.a.Svg
        },
        gc = {
            isOfficial: !0,
            uploaded: !0,
            data: ic.a,
            mimeType: z.a.Svg
        },
        vc = {
            isOfficial: !0,
            uploaded: !0,
            data: sc.a,
            mimeType: z.a.Svg
        },
        yc = {
            isOfficial: !0,
            uploaded: !0,
            data: uc.a,
            mimeType: z.a.Svg
        },
        Sc = {
            isOfficial: !0,
            uploaded: !0,
            data: pc.a,
            mimeType: z.a.Svg
        };
    var wc = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                settingModalStore: t,
                iconsStore: n,
                uiStore: a,
                commonStore: r
            } = e,
            {
                startAdjustMainView: o,
                startAdjustSearcherView: c,
                startAdjustIconsView: s
            } = t,
            {
                displayNotificationBadge: l,
                displayAddBtn: u
            } = n.model.setting,
            {
                setDisplayNotificationBadge: d,
                setDisplayAddBtnSetting: p
            } = n,
            {
                presetLayout: f,
                setPresetLayout: m
            } = a,
            {
                themeType: h
            } = r;
        return oe.a.createElement(bo, {
            title: Object(H.a)("main_view")
        }, oe.a.createElement(Oo, null, oe.a.createElement(yo, null, oe.a.createElement(ai, null, oe.a.createElement(ii, {
            value: i.PresetLayout0,
            title: Object(H.a)("classic"),
            selected: f === i.PresetLayout0,
            onClick: m,
            src: h === Aa.a.Dark ? gc : fc,
            grayWhenUnselected: !0
        }), oe.a.createElement(ii, {
            value: i.PresetLayout1,
            title: Object(H.a)("efficient"),
            selected: f === i.PresetLayout1,
            onClick: m,
            src: h === Aa.a.Dark ? vc : mc,
            grayWhenUnselected: !0
        }), oe.a.createElement(ii, {
            value: i.PresetLayout2,
            title: Object(H.a)("impressive"),
            selected: f === i.PresetLayout2,
            onClick: m,
            src: h === Aa.a.Dark ? yc : hc,
            grayWhenUnselected: !0
        }), oe.a.createElement(ii, {
            value: i.PresetLayout3,
            title: Object(H.a)("lightweight"),
            selected: f === i.PresetLayout3,
            onClick: m,
            src: h === Aa.a.Dark ? Sc : bc,
            grayWhenUnselected: !0
        }))), oe.a.createElement(Bo, null), oe.a.createElement(Ro, {
            label: Object(H.a)("display_width"),
            onGoNext: o
        }), oe.a.createElement(Ro, {
            label: Object(H.a)("search_box"),
            onGoNext: c
        }), oe.a.createElement(Ro, {
            label: Object(H.a)("icon"),
            onGoNext: s
        }), oe.a.createElement(Jo, {
            label: Object(H.a)("display_notification_badge"),
            value: l,
            onChange: d
        }), oe.a.createElement(Jo, {
            label: Object(H.a)("display_add_btn"),
            value: u,
            onChange: p
        })))
    }));
    var kc = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                standbyPageStore: t
            } = e,
            {
                setting: n
            } = t.model,
            {
                display: a,
                openAfterAppReady: r,
                openAfterAppInactiveDelaySeconds: o
            } = n,
            {
                setDisplaySetting: i,
                setOpenAfterAppReadySetting: c,
                setOpenAfterAppInactiveDelaySecondsSetting: s
            } = t;
        return oe.a.createElement(bo, {
            title: Object(H.a)("standby_page")
        }, oe.a.createElement(Oo, null, oe.a.createElement(Jo, {
            label: Object(H.a)("enable_standby_page"),
            value: a,
            onChange: i
        }), a && oe.a.createElement(Jo, {
            label: Object(H.a)("enter_when_new_tab_opened"),
            value: r,
            onChange: c
        }), a && oe.a.createElement(wo, {
            popupPosition: "top",
            label: Object(H.a)("enter_when_inactive"),
            value: o,
            onChange: s,
            options: D.yb
        })))
    }));
    var Ec = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                standbyPageStore: t
            } = e,
            {
                blurredBackground: n
            } = t.model.setting;
        return oe.a.createElement(bo, {
            title: Object(H.a)("standby_page_background")
        }, oe.a.createElement(Oo, null, oe.a.createElement(Jo, {
            label: Object(H.a)("blur"),
            value: n,
            onChange: t.setBlurredBackgroundSetting
        })))
    }));
    var Oc = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                standbyPageStore: t,
                commonStore: n
            } = e,
            {
                displayClock: a
            } = t.model.setting,
            {
                enable24HourSystem: r
            } = n.model.setting;
        return oe.a.createElement(bo, {
            title: Object(H.a)("standby_page_clock")
        }, oe.a.createElement(Oo, null, oe.a.createElement(Jo, {
            label: Object(H.a)("enable_clock"),
            value: a,
            onChange: t.setDisplayClockSetting
        }), oe.a.createElement(Jo, {
            label: Object(H.a)("24_hour_system"),
            value: r,
            onChange: n.setEnable24HourSystemSetting
        })))
    }));
    var Cc = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                standbyPageStore: t,
                commonStore: n,
                editLocationCardStore: a
            } = e,
            {
                displayWeather: r
            } = t.model.setting,
            {
                location: o,
                enableImperialUnits: i
            } = n.model.setting;
        return oe.a.createElement(bo, {
            title: Object(H.a)("standby_page_weather")
        }, oe.a.createElement(Oo, null, oe.a.createElement(Jo, {
            label: Object(H.a)("enable_weather"),
            value: r,
            onChange: t.setDisplayWeatherSetting
        }), oe.a.createElement(wo, {
            popupPosition: "top",
            label: Object(H.a)("temperature_unit"),
            value: i,
            options: D.V,
            onChange: n.setEnableImperialUnitsSetting
        }), oe.a.createElement(Ro, {
            label: Object(H.a)("location"),
            text: null === o ? Object(H.a)("locating") : o.shortname,
            onGoNext: a.startEdit
        })))
    }));
    var xc = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    standbyPageStore: t
                } = e,
                {
                    display: n
                } = t.model.setting;
            return oe.a.createElement(uo, null, oe.a.createElement("div", {
                className: Ji.a.main
            }, oe.a.createElement("div", null, oe.a.createElement(wc, null)), oe.a.createElement("div", null, oe.a.createElement(kc, null), n && oe.a.createElement(Ec, null), n && oe.a.createElement(Oc, null), n && oe.a.createElement(Cc, null))))
        })),
        jc = n(353),
        _c = n.n(jc),
        Ic = n(37);
    var Tc = Object(ie.a)((function({
            autoFocus: e,
            width: t,
            value: n,
            onChange: a
        }) {
            return oe.a.createElement(Ic.a, {
                autoFocus: e,
                prefixIcoSrc: Ya.a,
                width: t,
                value: n,
                onChange: a
            })
        })),
        Pc = n(354),
        Mc = n.n(Pc);
    var Nc = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", {
                className: Mc.a.main
            }, e)
        })),
        Lc = n(355),
        Rc = n.n(Lc),
        Dc = n(77);
    var Ac = Object(ie.a)((function({
        options: e,
        onClick: t
    }) {
        return 0 === e.length ? null : oe.a.createElement("div", {
            className: Rc.a.main
        }, oe.a.createElement(Dc.a, {
            boxshadowed: !1,
            options: e,
            onClick: t
        }))
    }));
    var Bc = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                editLocationCardStore: t
            } = e,
            {
                keyword: n,
                suggestionOptions: a
            } = t;
        return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(Gi.a, {
            label: Object(H.a)("replace_location")
        }, oe.a.createElement(Tc, {
            value: n,
            onChange: t.setKeyword
        }), oe.a.createElement(Ac, {
            options: a,
            onClick: t.submit
        }))))
    }));
    var Gc = Object(ie.a)((function() {
            const e = Object(re.useContext)(un);
            return Object(re.useEffect)(() => Object(ne.b)(() => {
                e.editLocationCardStore.cancel()
            }), [e]), oe.a.createElement(uo, null, oe.a.createElement("div", {
                className: _c.a.main
            }, oe.a.createElement("div", null, oe.a.createElement(Bc, null)), oe.a.createElement("div", null)))
        })),
        Uc = n(356),
        Vc = n.n(Uc);
    var Fc = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                editUserNicknameCardStore: t
            } = e,
            {
                nickname: n
            } = t;
        return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(Gi.a, {
            label: Object(H.a)("new_nickname"),
            errored: n.errored,
            errorMessage: n.errorMessage
        }, oe.a.createElement(Ic.a, {
            placeholder: Object(H.a)("nickname"),
            autoFocus: !0,
            value: n.value,
            errored: n.errored,
            onChange: t.setNickName,
            onBlur: t.validateNickname
        }))))
    }));
    var zc = Object(ie.a)((function() {
            const e = Object(re.useContext)(un);
            return Object(re.useEffect)(() => Object(ne.b)(() => {
                e.editUserNicknameCardStore.cancel()
            }), [e]), oe.a.createElement(uo, null, oe.a.createElement("div", {
                className: Vc.a.main
            }, oe.a.createElement("div", null, oe.a.createElement(Fc, null)), oe.a.createElement("div", null)))
        })),
        Wc = n(357),
        Hc = n.n(Wc),
        qc = n(234),
        Kc = n.n(qc),
        Qc = n(235),
        Yc = n.n(Qc);
    var Jc = Object(ie.a)((function({
        autoFocus: e,
        prefixIcoSrc: t,
        errored: n,
        value: a,
        onChange: r,
        placeholder: o,
        onBlur: i
    }) {
        const [c, s] = Object(re.useState)(!1), l = Object(re.useCallback)(() => {
            s(e => !e)
        }, [s]);
        return oe.a.createElement(Ic.a, {
            autoFocus: e,
            type: c ? "text" : "password",
            prefixIcoSrc: t,
            suffixIcoSrc: c ? Yc.a : Kc.a,
            onClickSuffixIco: l,
            suffixIcoClickable: !0,
            errored: n,
            value: a,
            onChange: r,
            placeholder: o,
            onBlur: i
        })
    }));
    var Xc = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                editEmailUserPasswordCardStore: t
            } = e,
            {
                oldPassword: n,
                newPassword: a,
                confirmNewPassword: r
            } = t;
        return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(Gi.a, {
            label: Object(H.a)("old_password"),
            errored: n.errored,
            errorMessage: n.errorMessage
        }, oe.a.createElement(Jc, {
            placeholder: Object(H.a)("password"),
            value: n.value,
            errored: n.errored,
            onChange: t.setOldPassword,
            onBlur: t.validateOldPassword,
            autoFocus: !0
        })), oe.a.createElement(Gi.a, {
            label: Object(H.a)("new_password"),
            errored: a.errored,
            errorMessage: a.errorMessage
        }, oe.a.createElement(Jc, {
            placeholder: Object(H.a)("password"),
            value: a.value,
            errored: a.errored,
            onChange: t.setNewPassword,
            onBlur: t.validateNewPassword
        })), oe.a.createElement(Gi.a, {
            label: Object(H.a)("confirm_new_password"),
            errored: r.errored,
            errorMessage: r.errorMessage
        }, oe.a.createElement(Jc, {
            placeholder: Object(H.a)("password"),
            value: r.value,
            errored: r.errored,
            onChange: t.setConfirmNewPassword,
            onBlur: t.validateConfirmNewPassword
        }))))
    }));
    var Zc = Object(ie.a)((function() {
            const e = Object(re.useContext)(un);
            return Object(re.useEffect)(() => Object(ne.b)(() => {
                e.editEmailUserPasswordCardStore.cancel()
            }), [e]), oe.a.createElement(uo, null, oe.a.createElement("div", {
                className: Hc.a.main
            }, oe.a.createElement("div", null, oe.a.createElement(Xc, null)), oe.a.createElement("div", null)))
        })),
        $c = n(358),
        es = n.n($c);
    var ts = Object(ie.a)((function() {
        return oe.a.createElement(bo, {
            title: Object(H.a)("feedback_and_rate")
        }, oe.a.createElement(Oo, null, oe.a.createElement(Ro, {
            label: Object(H.a)("feedback"),
            onGoNext: () => {
                Object(ee.a)({
                    url: Object(H.a)("feedback_url"),
                    openTarget: Ce.a.NewTab
                })
            }
        }), oe.a.createElement(Ro, {
            label: Object(H.a)("rate_five_stars"),
            onGoNext: () => {
                Object(ee.a)({
                    url: "https://chrome.google.com/webstore/detail/" + D.X,
                    openTarget: Ce.a.NewTab
                })
            }
        })))
    }));
    var ns = Object(ie.a)((function() {
        return oe.a.createElement(bo, {
            title: Object(H.a)("about_us")
        }, oe.a.createElement(Oo, null, oe.a.createElement(Ro, {
            label: Object(H.a)("homepage"),
            onGoNext: () => {
                Object(ee.a)({
                    url: `${D.mc}${Object(H.a)("homepage_url_path")}`,
                    openTarget: Ce.a.NewTab
                })
            }
        }), oe.a.createElement(Ro, {
            label: Object(H.a)("contact"),
            onGoNext: () => {
                Object(ee.a)({
                    url: `${D.mc}${Object(H.a)("contact_url_path")}`,
                    openTarget: Ce.a.NewTab
                })
            }
        }), oe.a.createElement(Ro, {
            label: Object(H.a)("privacy_policy"),
            onGoNext: () => {
                Object(ee.a)({
                    url: `${D.mc}${Object(H.a)("privacy_policy_url_path")}`,
                    openTarget: Ce.a.NewTab
                })
            }
        }), oe.a.createElement(Ro, {
            label: Object(H.a)("terms_of_use"),
            onGoNext: () => {
                Object(ee.a)({
                    url: `${D.mc}${Object(H.a)("terms_of_use_url_path")}`,
                    openTarget: Ce.a.NewTab
                })
            }
        })))
    }));
    var as = Object(ie.a)((function() {
        return oe.a.createElement(uo, null, oe.a.createElement("div", {
            className: es.a.main
        }, oe.a.createElement("div", null, oe.a.createElement(ts, null)), oe.a.createElement("div", null, oe.a.createElement(ns, null))))
    }));
    var rs = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                settingModalStore: t,
                editLocationCardStore: n,
                editUserNicknameCardStore: a,
                editEmailUserPasswordCardStore: r
            } = e;
        if (n.editing) return oe.a.createElement(Gc, null);
        if (a.editing) return oe.a.createElement(zc, null);
        if (r.editing) return oe.a.createElement(Zc, null);
        const {
            tabValue: o
        } = t;
        let i;
        switch (o) {
            case Le.ThemeAndWallpaper:
                i = oe.a.createElement(Qi, null);
                break;
            case Le.Appearance:
                i = oe.a.createElement(xc, null);
                break;
            case Le.Others:
                i = oe.a.createElement(as, null);
                break;
            case Le.General:
                i = oe.a.createElement(Zo, null)
        }
        return i
    }));
    var os = Object(ie.a)((function() {
            return oe.a.createElement(Gr, null, oe.a.createElement(Fr, {
                className: Wr.a.main
            }, oe.a.createElement(Kr, null, oe.a.createElement(co, null)), oe.a.createElement(rs, null)))
        })),
        is = n(359),
        cs = n.n(is);
    var ss = Object(ie.a)((function({
        onClick: e
    }) {
        return oe.a.createElement("div", {
            className: cs.a.main
        }, oe.a.createElement(cr, {
            onClick: e
        }))
    }));
    var ls = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    settingModalStore: t,
                    uiStore: n
                } = e,
                {
                    opened: a,
                    close: r
                } = t,
                {
                    mainViewportSpace: o
                } = n;
            return oe.a.createElement(Or, {
                opened: a && !t.mainViewAdjusting && !t.searcherViewAdjusting && !t.iconsViewAdjusting,
                onPressEsc: r,
                space: o
            }, oe.a.createElement(jr, null, oe.a.createElement(Dr, null), oe.a.createElement(os, null)), oe.a.createElement(ss, {
                onClick: r
            }))
        })),
        us = n(360),
        ds = n.n(us),
        ps = n(290),
        fs = n.n(ps),
        ms = n(291),
        hs = n.n(ms),
        bs = n(292),
        gs = n.n(bs);
    var vs = Object(ie.a)((function({
        onClick: e
    }) {
        return oe.a.createElement("div", {
            className: gs.a.main,
            onClick: e
        }, oe.a.createElement(Vn.a, {
            className: gs.a.icon,
            src: ir.a
        }))
    }));
    var ys = Object(ie.a)((function({
        title: e,
        onClose: t
    }) {
        return oe.a.createElement("div", {
            className: hs.a.main
        }, oe.a.createElement(ao, {
            onGoPrev: t
        }, e), oe.a.createElement("div", {
            className: hs.a.closeBtn
        }, oe.a.createElement(vs, {
            onClick: t
        })))
    }));
    var Ss = Object(ie.a)((function({
        title: e,
        onClose: t,
        children: n
    }) {
        return oe.a.createElement("div", {
            className: fs.a.main
        }, oe.a.createElement(ys, {
            title: e,
            onClose: t
        }), oe.a.createElement("div", {
            className: fs.a.content
        }, n))
    }));
    var ws = Object(ie.a)((function({
            opened: e,
            title: t,
            onClose: n,
            onPressEsc: a,
            space: r,
            children: o
        }) {
            return oe.a.createElement(Or, {
                opened: e,
                modalClassName: ds.a.modal,
                space: r,
                onPressEsc: a
            }, oe.a.createElement(Ss, {
                title: t,
                onClose: n
            }, o))
        })),
        ks = n(361),
        Es = n.n(ks),
        Os = n(118),
        Cs = n.n(Os);

    function xs(e) {
        return String(e)
    }
    var js = Object(ie.a)((function({
        value: e,
        min: t = 0,
        max: n = 100,
        step: a = 1,
        markerFormatter: r = xs,
        onChange: o
    }) {
        const i = Math.max(Math.min((e - t) / (n - t) * 100, 100), 0);
        return oe.a.createElement("div", {
            className: Cs.a.main
        }, oe.a.createElement("div", {
            className: Cs.a.progress
        }, oe.a.createElement("i", {
            className: Cs.a.progressValue,
            style: {
                width: i + "%"
            }
        })), oe.a.createElement("input", {
            className: Cs.a.input,
            type: "range",
            min: t,
            max: n,
            step: a,
            value: e,
            onChange: e => {
                const t = Number(e.target.value);
                o(t)
            }
        }), oe.a.createElement("div", {
            className: Cs.a.markerWrapper
        }, oe.a.createElement("div", {
            className: Cs.a.marker,
            style: {
                left: i + "%"
            }
        }, r(e, t, n))))
    }));
    var _s = Object(ie.a)((function({
        label: e,
        min: t,
        max: n,
        step: a,
        value: r,
        onChange: o,
        markerFormatter: i
    }) {
        return oe.a.createElement(yo, {
            label: e
        }, oe.a.createElement(js, {
            min: t,
            max: n,
            step: a,
            value: r,
            onChange: o,
            markerFormatter: i
        }))
    }));

    function Is(e) {
        return e + "%"
    }
    var Ts = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    settingModalStore: t,
                    commonStore: n,
                    iconsStore: a,
                    uiStore: r
                } = e,
                {
                    mainViewAdjusting: o,
                    endAdjustMainView: i
                } = t,
                {
                    widthPercentage: c
                } = n.model.setting,
                {
                    setWidthPercentage: s
                } = n,
                l = a.model.setting,
                {
                    rowGapPercentage: u,
                    columnGapPercentage: d
                } = l,
                {
                    setRowGapPercentageSetting: p,
                    setColumnGapPercentageSetting: f
                } = a,
                {
                    mainViewportSpace: m
                } = r;
            return oe.a.createElement(ws, {
                opened: o,
                title: Object(H.a)("display_width"),
                space: m,
                onClose: i,
                onPressEsc: i
            }, oe.a.createElement("div", {
                className: Es.a.main
            }, oe.a.createElement("div", null, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(_s, {
                label: Object(H.a)("display_width"),
                value: c,
                min: 40,
                onChange: s,
                markerFormatter: Is
            })))), oe.a.createElement("div", null), oe.a.createElement("div", null, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(_s, {
                label: Object(H.a)("row_gap"),
                value: u,
                onChange: p,
                markerFormatter: Is,
                min: 20,
                max: 100
            })))), oe.a.createElement("div", null, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(_s, {
                label: Object(H.a)("column_gap"),
                value: d,
                onChange: f,
                markerFormatter: Is,
                min: 20,
                max: 100
            }))))))
        })),
        Ps = n(362),
        Ms = n.n(Ps);
    var Ns = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    settingModalStore: t,
                    searcherStore: n,
                    uiStore: a
                } = e,
                {
                    searcherViewAdjusting: r,
                    endAdjustSearcherView: o
                } = t,
                {
                    setWidthPercentageSetting: i,
                    setHeightPercentageSetting: c,
                    setBorderRadiusPercentageSetting: s,
                    setOpacityPercentageSetting: l,
                    setDisplayShadowSetting: u
                } = n,
                {
                    setting: d
                } = n.model,
                {
                    widthPercentage: p,
                    heightPercentage: f,
                    borderRadiusPercentage: m,
                    opacityPercentage: h,
                    displayShadow: b
                } = d,
                {
                    mainViewportSpace: g
                } = a;
            return oe.a.createElement(ws, {
                opened: r,
                title: Object(H.a)("search_box"),
                onClose: o,
                onPressEsc: o,
                space: g
            }, oe.a.createElement("div", {
                className: Ms.a.main
            }, oe.a.createElement("div", null, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(_s, {
                min: 50,
                label: Object(H.a)("width"),
                value: p,
                onChange: i,
                markerFormatter: Is
            })))), oe.a.createElement("div", null, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(_s, {
                min: 70,
                max: 130,
                label: Object(H.a)("height"),
                value: f,
                onChange: c,
                markerFormatter: Is
            })))), oe.a.createElement("div", null, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(_s, {
                label: Object(H.a)("opacity"),
                value: h,
                onChange: l,
                markerFormatter: Is
            })))), oe.a.createElement("div", null, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(_s, {
                label: Object(H.a)("border_radius"),
                value: m,
                onChange: s,
                markerFormatter: Is
            })))), oe.a.createElement("div", null, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(Jo, {
                label: Object(H.a)("shadow"),
                value: b,
                onChange: u
            }))))))
        })),
        Ls = n(119),
        Rs = n.n(Ls),
        Ds = n(363),
        As = n.n(Ds),
        Bs = n(364),
        Gs = n.n(Bs);
    const Us = {
            isOfficial: !0,
            uploaded: !0,
            data: As.a,
            mimeType: z.a.Svg
        },
        Vs = {
            isOfficial: !0,
            uploaded: !0,
            data: Gs.a,
            mimeType: z.a.Svg
        };
    var Fs = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                settingModalStore: t,
                iconsStore: n,
                uiStore: a
            } = e,
            {
                iconsViewAdjusting: r,
                endAdjustIconsView: o
            } = t,
            {
                setIconLayoutSetting: i,
                setBorderRadiusPercentageSetting: s,
                setSizePercentageSetting: l,
                setOpacityPercentageSetting: u,
                setDisplayShadowSetting: d
            } = n,
            {
                setting: p
            } = n.model,
            {
                iconLayout: f,
                borderRadiusPercentage: m,
                sizePercentage: h,
                displayShadow: b,
                opacityPercentage: g
            } = p,
            {
                mainViewportSpace: v
            } = a;
        return oe.a.createElement(ws, {
            opened: r,
            title: Object(H.a)("icon"),
            onClose: o,
            onPressEsc: o,
            space: v
        }, oe.a.createElement("div", {
            className: Rs.a.main
        }, oe.a.createElement("div", {
            className: Rs.a.a
        }, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(yo, null, oe.a.createElement(ai, null, oe.a.createElement(ii, {
            grayWhenUnselected: !0,
            title: Object(H.a)("simple"),
            selected: f === c.a.Simple,
            value: c.a.Simple,
            onClick: i,
            src: Us
        }), oe.a.createElement(ii, {
            grayWhenUnselected: !0,
            title: Object(H.a)("particular"),
            selected: f === c.a.Particular,
            value: c.a.Particular,
            onClick: i,
            src: Vs
        })))))), oe.a.createElement("div", {
            className: Rs.a.b
        }, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(_s, {
            label: Object(H.a)("border_radius"),
            value: m,
            onChange: s,
            markerFormatter: Is
        })))), oe.a.createElement("div", {
            className: Rs.a.c
        }, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(_s, {
            label: Object(H.a)("size"),
            value: h,
            min: 50,
            max: 150,
            onChange: l,
            markerFormatter: Is
        })))), oe.a.createElement("div", {
            className: Rs.a.d
        }, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(Jo, {
            label: Object(H.a)("shadow"),
            value: b,
            onChange: d
        })))), oe.a.createElement("div", {
            className: Rs.a.e
        }, oe.a.createElement(bo, null, oe.a.createElement(Oo, null, oe.a.createElement(_s, {
            label: Object(H.a)("opacity"),
            value: g,
            onChange: u,
            markerFormatter: Is
        }))))))
    }));
    var zs = Object(ie.a)((function({
        model: e
    }) {
        const t = Object(re.useContext)(un),
            {
                addIconModalStore: n
            } = t,
            {
                categoryValue: a
            } = n,
            r = Object(re.useCallback)(() => {
                t.addIconModalStore.setCategoryValue(e.value)
            }, [t, e]);
        return oe.a.createElement(Lr, {
            onClick: r,
            selected: e.value === a
        }, e.text)
    }));
    var Ws = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    addIconModalStore: t
                } = e,
                {
                    categories: n
                } = t;
            return oe.a.createElement(Tr, {
                title: Object(H.a)("add_icon")
            }, oe.a.createElement(Pr, null, n.map(e => oe.a.createElement(zs, {
                key: e.value,
                model: e
            }))))
        })),
        Hs = n(365),
        qs = n.n(Hs),
        Ks = n(366),
        Qs = n.n(Ks),
        Ys = n(367),
        Js = n.n(Ys),
        Xs = n(126),
        Zs = n.n(Xs);
    var $s = Object(ie.a)((function({
            form: e
        }) {
            const {
                customImageBackgroundColor: t,
                customImageSrc: n,
                customImageScalePercentage: a
            } = e, r = {
                backgroundImage: `url(${Object(P.d)(n)})`,
                backgroundSize: .5 * a + "% auto"
            };
            return Object.assign(r, Object(M.c)(t)), oe.a.createElement("div", {
                className: Zs.a.main
            }, Object(M.k)(t) && oe.a.createElement("div", {
                className: Zs.a.mosaicBackground
            }), oe.a.createElement("div", {
                className: Zs.a.image,
                style: r
            }), oe.a.createElement("div", {
                className: Zs.a.overlay
            }), oe.a.createElement("div", {
                className: Zs.a.viewport
            }))
        })),
        el = n(219),
        tl = n.n(el),
        nl = n(368),
        al = n.n(nl),
        rl = n(369),
        ol = n.n(rl),
        il = n(370),
        cl = n.n(il);
    var sl = Object(ie.a)((function({
        form: e
    }) {
        return oe.a.createElement("div", {
            className: tl.a.main
        }, oe.a.createElement(Vn.a, {
            src: al.a,
            className: tl.a.btn,
            onClick: e.increseCustomImageScalePercentage
        }), oe.a.createElement(Vn.a, {
            src: ol.a,
            className: tl.a.btn,
            onClick: e.decreseCustomImageScalePercentage
        }), oe.a.createElement(Vn.a, {
            src: cl.a,
            className: tl.a.btn,
            onClick: e.resetCustomImageScalePercentage
        }))
    }));
    var ll = Object(ie.a)((function({
        form: e
    }) {
        return oe.a.createElement("div", {
            className: Js.a.main
        }, oe.a.createElement($s, {
            form: e
        }), oe.a.createElement(sl, {
            form: e
        }))
    }));
    var ul = Object(ie.a)((function({
            form: e
        }) {
            return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(ll, {
                form: e
            })))
        })),
        dl = n(293),
        pl = n.n(dl);
    var fl = Object(ie.a)((function({
        form: e
    }) {
        const {
            customImageSrc: t,
            customImageBackgroundColor: n,
            customImageScalePercentage: a
        } = e, r = {
            backgroundImage: `url(${Object(P.d)(t)})`,
            backgroundSize: a + "% auto"
        };
        return Object.assign(r, Object(M.c)(n)), oe.a.createElement("div", {
            className: pl.a.main
        }, oe.a.createElement("div", {
            className: pl.a.content,
            style: r
        }))
    }));
    var ml = Object(ie.a)((function({
        form: e
    }) {
        return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(Gi.a, {
            label: Object(H.a)("preview")
        }, oe.a.createElement(fl, {
            form: e
        }))))
    }));
    var hl = Object(ie.a)((function({
        form: e
    }) {
        const {
            customImageBackgroundColor: t,
            customBackgroundColor: n
        } = e;
        return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(Gi.a, {
            label: Object(H.a)("background_color")
        }, oe.a.createElement(Ui.a, {
            defaultCustomColor: n,
            value: t,
            onChange: e.setCustomImageBackgroundColor
        }))))
    }));
    var bl = Object(ie.a)((function({
            form: e
        }) {
            return Object(re.useEffect)(() => Object(ne.b)(() => {
                e.goMainTab()
            }), [e]), oe.a.createElement("div", {
                className: Qs.a.main
            }, oe.a.createElement("div", null, oe.a.createElement(ul, {
                form: e
            })), oe.a.createElement("div", null, oe.a.createElement(ml, {
                form: e
            }), oe.a.createElement(hl, {
                form: e
            })))
        })),
        gl = n(371),
        vl = n.n(gl),
        yl = n(294),
        Sl = n.n(yl);
    var wl = Object(ie.a)((function({
        width: e,
        value: t,
        placeholder: n,
        onChange: a,
        rows: r
    }) {
        const o = Object(re.useRef)(!1),
            i = se()(Sl.a.main, {
                [Sl.a.inputtedMain]: t.length > 0
            });
        return oe.a.createElement("textarea", {
            className: i,
            style: {
                width: e
            },
            placeholder: n,
            onChange: e => {
                a(e.target.value)
            },
            onCompositionStart: () => {
                o.current = !0
            },
            onCompositionEnd: () => {
                o.current = !1
            },
            onKeyDown: e => {
                o.current || "Enter" === e.key && e.preventDefault()
            },
            rows: r,
            value: t
        })
    }));
    var kl = Object(ie.a)((function({
            form: e
        }) {
            return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(Gi.a, {
                label: Object(H.a)("address"),
                errored: e.model.url.errored,
                errorMessage: e.model.url.errorMessage
            }, oe.a.createElement(Ic.a, {
                errored: e.model.url.errored,
                value: e.model.url.value,
                onBlur: e.validateUrl,
                onChange: e.setUrl,
                placeholder: "https://"
            })), oe.a.createElement(Gi.a, {
                label: Object(H.a)("name"),
                errored: e.model.label.errored,
                errorMessage: e.model.label.errorMessage
            }, oe.a.createElement(Ic.a, {
                errored: e.model.label.errored,
                value: e.model.label.value,
                onBlur: e.validateLabel,
                onChange: e.setLabel,
                placeholder: Object(H.a)("website_name")
            })), oe.a.createElement(Gi.a, {
                label: Object(H.a)("desc")
            }, oe.a.createElement(wl, {
                rows: 3,
                value: e.model.desc.value,
                onChange: e.setDesc,
                placeholder: `${Object(H.a)("website_desc")}(${Object(H.a)("optional")})`
            }))))
        })),
        El = n(212);
    var Ol = Object(ie.a)((function({
        form: e
    }) {
        const {
            icoSrc: t
        } = e.model;
        return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(Gi.a, {
            label: Object(H.a)("preview"),
            errored: t.errored,
            errorMessage: t.errorMessage
        }, oe.a.createElement(El.a, {
            form: e
        }))))
    }));
    var Cl = Object(ie.a)((function({
        form: e
    }) {
        return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(Gi.a, {
            label: Object(H.a)("background_color")
        }, oe.a.createElement(Ui.a, {
            defaultCustomColor: e.customBackgroundColor,
            value: e.model.backgroundColor.value,
            onChange: e.setBackgroundColor
        }))))
    }));
    var xl = Object(ie.a)((function({
        form: e
    }) {
        const {
            icoText: t
        } = e.model;
        return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(Gi.a, {
            label: Object(H.a)("icon_text"),
            errored: t.errored,
            errorMessage: t.errorMessage
        }, oe.a.createElement(Ic.a, {
            errored: t.errored,
            onBlur: e.validateIcoText,
            value: e.model.icoText.value,
            onChange: e.setIcoText,
            placeholder: Object(H.a)("icon_text")
        }))))
    }));
    var jl = Object(ie.a)((function({
        form: e
    }) {
        return oe.a.createElement("div", {
            className: vl.a.main
        }, oe.a.createElement("div", null, oe.a.createElement(kl, {
            form: e
        })), oe.a.createElement("div", null, oe.a.createElement(Ol, {
            form: e
        }), e.model.type.value === $.a.Text && oe.a.createElement(xl, {
            form: e
        }), oe.a.createElement(Cl, {
            form: e
        })))
    }));
    var _l = Object(ie.a)((function({
        form: e
    }) {
        return "customImage" === e.tabValue ? oe.a.createElement(bl, {
            form: e
        }) : oe.a.createElement(jl, {
            form: e
        })
    }));
    var Il = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    addIconModalStore: t
                } = e,
                {
                    iconForm: n
                } = t;
            return oe.a.createElement(uo, null, oe.a.createElement(_l, {
                form: n
            }))
        })),
        Tl = n(372),
        Pl = n.n(Tl);
    var Ml = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", {
                className: Pl.a.main
            }, e)
        })),
        Nl = n(373),
        Ll = n.n(Nl),
        Rl = n(120),
        Dl = n.n(Rl);
    var Al = Object(ie.a)((function({
        model: e
    }) {
        const t = {
            backgroundImage: `url(${Object(P.d)(e.icoSrc)})`,
            backgroundSize: e.icoScalePercentage + "% auto"
        };
        Object.assign(t, Object(M.c)(e.backgroundColor));
        const n = Object(re.useContext)(un),
            {
                commonStore: a
            } = n,
            {
                themeType: r
            } = a,
            o = Object(re.useCallback)(() => {
                n.iconsStore.addOfficialImageIcon(e)
            }, [n, e]);
        return oe.a.createElement("div", {
            className: Dl.a.main,
            style: {
                color: Object(te.d)(r, e.backgroundColor, 20)
            },
            onClick: o
        }, oe.a.createElement("div", {
            className: Dl.a.icon,
            style: t
        }), oe.a.createElement("div", {
            className: Dl.a.text
        }, oe.a.createElement("div", {
            className: Dl.a.textContent
        }, oe.a.createElement("div", {
            className: Dl.a.label,
            onClick: t => {
                t.stopPropagation(), n.iconsStore.openIconByUrl(e.url, Ce.a.NewTab)
            }
        }, e.label), oe.a.createElement("div", {
            className: Dl.a.desc
        }, e.desc))))
    }));
    var Bl = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                addIconModalStore: t
            } = e,
            {
                icons: n
            } = t;
        return oe.a.createElement("div", {
            className: Ll.a.main
        }, n.map(e => oe.a.createElement(Al, {
            key: e.id,
            model: e
        })))
    }));
    var Gl = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    addIconModalStore: t
                } = e,
                {
                    iconsStatus: n,
                    iconsReloadErrorMessage: a,
                    iconsNextLoadErrorMessage: r
                } = t;
            return oe.a.createElement(Ml, null, oe.a.createElement(ut, {
                status: n,
                reloadErrorMessage: a,
                nextLoadErrorMessage: r,
                notFoundBtns: oe.a.createElement(oo.a, {
                    type: "primary",
                    onClick: t.startReportMissingIcon
                }, Object(H.a)("request_for_inclusion")),
                onReload: t.reloadIcons,
                onNextLoad: t.nextLoadIcons
            }, oe.a.createElement(Bl, null)))
        })),
        Ul = n(374),
        Vl = n.n(Ul);
    var Fl = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                addIconModalStore: t
            } = e,
            {
                missingIconUrl: n
            } = t;
        return oe.a.createElement(bo, null, oe.a.createElement(Nc, null, oe.a.createElement(Gi.a, {
            label: Object(H.a)("address"),
            errored: n.errored,
            errorMessage: n.errorMessage
        }, oe.a.createElement(Ic.a, {
            errored: n.errored,
            value: n.value,
            onBlur: t.validateMissingIconUrl,
            onChange: t.setMissingIconUrl,
            placeholder: "https://",
            autoFocus: !0
        }))))
    }));
    var zl = Object(ie.a)((function() {
        const e = Object(re.useContext)(un);
        return Object(re.useEffect)(() => Object(ne.b)(() => {
            e.addIconModalStore.cancelReportMissingIcon()
        }), [e]), oe.a.createElement(uo, null, oe.a.createElement("div", {
            className: Vl.a.main
        }, oe.a.createElement("div", null, oe.a.createElement(Fl, null)), oe.a.createElement("div", null)))
    }));
    var Wl = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    addIconModalStore: t
                } = e,
                {
                    missingIconReporting: n
                } = t;
            if (n) return oe.a.createElement(zl, null);
            const {
                categoryValue: a
            } = t;
            return a === D.eb.value ? oe.a.createElement(Il, null) : oe.a.createElement(Gl, null)
        })),
        Hl = n(375),
        ql = n.n(Hl);
    var Kl = Object(ie.a)((function({
        autoFocus: e,
        value: t,
        onChange: n
    }) {
        return oe.a.createElement("div", {
            className: ql.a.main
        }, oe.a.createElement(Tc, {
            autoFocus: e,
            width: "224px",
            value: t,
            onChange: n
        }))
    }));
    var Ql = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                addIconModalStore: t
            } = e,
            {
                missingIconReporting: n
            } = t;
        if (n) return oe.a.createElement(ro, {
            title: Object(H.a)("request_for_inclusion"),
            onGoPrev: t.cancelReportMissingIcon
        }, oe.a.createElement(oo.a, {
            onClick: t.cancelReportMissingIcon,
            width: "fit-content"
        }, Object(H.a)("cancel")), oe.a.createElement(oo.a, {
            type: "primary",
            loading: t.missingIconSubmitting,
            onClick: t.submitReportMissingIcon,
            width: "fit-content"
        }, Object(H.a)("confirm")));
        const {
            categoryValue: a
        } = t;
        if (a !== D.eb.value) return null;
        const {
            iconForm: r
        } = t, {
            tabValue: o
        } = r, i = "main" === o, c = "customImage" === o;
        return oe.a.createElement(ro, {
            title: Object(H.a)(c ? "upload_icon" : "add_manually"),
            onGoPrev: c ? r.goMainTab : t.reloadPopularIcons
        }, oe.a.createElement(oo.a, {
            onClick: c ? r.goMainTab : t.close,
            width: "fit-content"
        }, Object(H.a)("cancel")), i && oe.a.createElement(oo.a, {
            onClick: t.submitIconFormThenContinue,
            width: "fit-content",
            loading: t.iconFormStatus === dt.a.Submitting
        }, Object(H.a)("add_and_continue")), i && oe.a.createElement(oo.a, {
            onClick: t.submitIconFormThenClose,
            type: "primary",
            width: "fit-content",
            loading: t.iconFormStatus === dt.a.Submitting
        }, Object(H.a)("add")), c && oe.a.createElement(oo.a, {
            onClick: r.endCustomizeImage,
            width: "fit-content",
            type: "primary"
        }, Object(H.a)("confirm")))
    }));
    var Yl = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                addIconModalStore: t
            } = e,
            {
                keyword: n
            } = t;
        return oe.a.createElement(oe.a.Fragment, null, oe.a.createElement(Kl, {
            value: n,
            onChange: t.setKeyword,
            autoFocus: !0
        }), oe.a.createElement(Ql, null))
    }));
    var Jl = Object(ie.a)((function() {
        return oe.a.createElement(Gr, null, oe.a.createElement(Fr, {
            className: qs.a.main
        }, oe.a.createElement(Kr, null, oe.a.createElement(Yl, null)), oe.a.createElement(Wl, null)))
    }));
    var Xl = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    addIconModalStore: t,
                    uiStore: n
                } = e,
                {
                    opened: a,
                    close: r
                } = t,
                {
                    mainViewportSpace: o
                } = n;
            return oe.a.createElement(Or, {
                opened: a,
                space: o,
                onPressEsc: r
            }, oe.a.createElement(jr, null, oe.a.createElement(Ws, null), oe.a.createElement(Jl, null)), oe.a.createElement(ss, {
                onClick: r
            }))
        })),
        Zl = n(376),
        $l = n.n(Zl);
    var eu = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                editIconModalStore: t
            } = e,
            {
                cancel: n,
                form: a
            } = t,
            {
                tabValue: r
            } = a,
            o = "main" === r,
            i = "customImage" === r;
        return oe.a.createElement(oe.a.Fragment, null, oe.a.createElement(ys, {
            title: Object(H.a)("edit_icon"),
            onClose: n
        }), oe.a.createElement(ro, null, oe.a.createElement(oo.a, {
            onClick: i ? a.goMainTab : n,
            width: "fit-content"
        }, Object(H.a)("cancel")), o && oe.a.createElement(oo.a, {
            onClick: t.submit,
            type: "primary",
            width: "fit-content",
            loading: t.formStatus === dt.a.Submitting
        }, Object(H.a)("modify")), i && oe.a.createElement(oo.a, {
            onClick: a.endCustomizeImage,
            width: "fit-content",
            type: "primary"
        }, Object(H.a)("confirm"))))
    }));
    var tu = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                editIconModalStore: t
            } = e,
            {
                form: n
            } = t;
        return oe.a.createElement(_l, {
            form: n
        })
    }));
    var nu = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                editIconModalStore: t,
                uiStore: n
            } = e,
            {
                opened: a,
                cancel: r
            } = t,
            {
                mainViewportSpace: o
            } = n;
        return oe.a.createElement(Or, {
            opened: a,
            space: o,
            onPressEsc: r
        }, oe.a.createElement(jr, null, oe.a.createElement(Gr, {
            only: !0
        }, oe.a.createElement(Fr, {
            className: $l.a.main
        }, oe.a.createElement(Kr, null, oe.a.createElement(eu, null)), oe.a.createElement(uo, null, oe.a.createElement(tu, null))))))
    }));
    var au = Object(ie.a)((function({
        model: e
    }) {
        const t = Object(re.useContext)(un),
            {
                wallpaperLibModalStore: n
            } = t,
            {
                categoryValue: a
            } = n,
            r = Object(re.useCallback)(() => {
                t.wallpaperLibModalStore.setCategoryValue(e.value)
            }, [t, e]);
        return oe.a.createElement(Lr, {
            onClick: r,
            selected: e.value === a
        }, e.text)
    }));
    var ru = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    wallpaperLibModalStore: t
                } = e,
                {
                    categories: n
                } = t;
            return oe.a.createElement(Tr, {
                title: Object(H.a)("wallpaper")
            }, oe.a.createElement(Pr, null, n.map(e => oe.a.createElement(au, {
                key: e.value,
                model: e
            }))))
        })),
        ou = n(377),
        iu = n.n(ou);
    var cu = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    wallpaperLibModalStore: t
                } = e,
                {
                    keyword: n
                } = t;
            return oe.a.createElement(Kl, {
                value: n,
                onChange: t.setKeyword,
                autoFocus: !0
            })
        })),
        su = n(378),
        lu = n.n(su),
        uu = n(379),
        du = n.n(uu);
    var pu = Object(ie.a)((function({
        model: e
    }) {
        const t = Object(re.useContext)(un),
            {
                overviewData: n
            } = e;
        return oe.a.createElement("div", {
            className: du.a.main,
            style: {
                backgroundImage: `url(${Object(P.d)(n)})`
            },
            onClick: () => {
                t.backgroundStore.setLocalBackgroundWithOfficialImageWallpaper(e)
            }
        })
    }));
    var fu = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                wallpaperLibModalStore: t
            } = e,
            {
                wallpapers: n
            } = t;
        return oe.a.createElement("div", {
            className: lu.a.main
        }, n.map(e => oe.a.createElement(pu, {
            key: e.id,
            model: e
        })))
    }));
    var mu = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                wallpaperLibModalStore: t
            } = e,
            {
                wallpapersStatus: n,
                wallpapersReloadErrorMessage: a,
                wallpapersNextLoadErrorMessage: r
            } = t;
        return oe.a.createElement(Ml, null, oe.a.createElement(ut, {
            status: n,
            reloadErrorMessage: a,
            nextLoadErrorMessage: r,
            onReload: t.reloadWallpapers,
            onNextLoad: t.nextLoadWallpapers
        }, oe.a.createElement(fu, null)))
    }));
    var hu = Object(ie.a)((function() {
        return oe.a.createElement(Gr, null, oe.a.createElement(Fr, {
            className: iu.a.main
        }, oe.a.createElement(Kr, null, oe.a.createElement(cu, null)), oe.a.createElement(mu, null)))
    }));
    var bu = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    wallpaperLibModalStore: t,
                    uiStore: n
                } = e,
                {
                    opened: a,
                    close: r
                } = t,
                {
                    mainViewportSpace: o
                } = n;
            return oe.a.createElement(Or, {
                opened: a,
                space: o,
                onPressEsc: r
            }, oe.a.createElement(jr, null, oe.a.createElement(ru, null), oe.a.createElement(hu, null)), oe.a.createElement(ss, {
                onClick: r
            }))
        })),
        gu = n(295),
        vu = n.n(gu),
        yu = n(220),
        Su = n.n(yu);
    var wu = Object(ie.a)((function({
        model: e
    }) {
        let t;
        const {
            backgroundColor: n
        } = e, a = Object(M.k)(n), r = se()(Su.a.icon, a && Su.a.backgroundedIcon), o = a ? {} : Object(M.c)(e.backgroundColor);
        switch (e.type) {
            case $.a.Image:
                t = oe.a.createElement("div", {
                    className: r,
                    style: Object.assign(o, {
                        backgroundImage: `url(${Object(P.d)(e.icoSrc)})`,
                        backgroundSize: e.icoScalePercentage + "% auto"
                    })
                });
                break;
            case $.a.Text:
            default:
                t = oe.a.createElement("div", {
                    className: r,
                    style: o
                }, e.icoText)
        }
        return oe.a.createElement("div", {
            className: Su.a.main
        }, t, oe.a.createElement("div", {
            className: Su.a.label
        }, e.label))
    }));
    var ku = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    iconsStore: t
                } = e,
                {
                    draggingIcon: n,
                    draggingIconClientPosition: a
                } = t,
                r = Object(re.useCallback)(t => {
                    e.iconsStore.setDraggingIconClientPosition({
                        top: t.clientY,
                        left: t.clientX
                    })
                }, [e]);
            return null === n || null === a ? null : oe.a.createElement("div", {
                className: vu.a.main
            }, oe.a.createElement("div", {
                className: vu.a.content,
                style: {
                    left: a.left + "px",
                    top: a.top + "px"
                }
            }, oe.a.createElement(wu, {
                model: n
            })), oe.a.createElement(mn.a, {
                target: document,
                onMouseMove: r,
                onMouseUp: t.endDragIconThenBackupModel
            }))
        })),
        Eu = n(251),
        Ou = n.n(Eu);
    var Cu = Object(ie.a)((function({
        horizontalSide: e = it.Right,
        opened: t,
        trigger: n,
        children: a,
        displayOverlay: r = !0,
        onPressEsc: o
    }) {
        const i = Object(re.useRef)(null),
            [c, s] = Object(re.useState)({
                top: 0,
                left: 0
            });
        return Object(re.useEffect)(() => {
            if (void 0 !== o && t) return Object(ne.b)(o)
        }, [o, t]), Object(re.useEffect)(() => {
            if (!i.current) return;
            const t = window.innerWidth,
                a = window.innerHeight,
                r = i.current.offsetWidth,
                o = i.current.offsetHeight;
            let c, l, u;
            switch (n instanceof HTMLElement ? (c = !0, l = n.getBoundingClientRect()) : (c = !1, l = {
                    top: n.top,
                    bottom: n.top,
                    left: n.left,
                    right: n.left,
                    width: 0,
                    height: 0
                }), e) {
                case it.Left:
                    u = {
                        left: l.left - r,
                        top: l.top
                    }, c && (u.left = u.left - 12), u.left < 0 && (u.left = 0);
                    break;
                case it.Right:
                    u = {
                        left: l.right,
                        top: l.top
                    }, c && (u.left = u.left + 12), u.left + r > t && (u.left = t - r)
            }
            u.top + o > a && (u.top = a - o), s(u)
        }, [i, t, a, n, s, e]), oe.a.createElement(Sn.a, {
            entered: t
        }, oe.a.createElement("div", {
            className: Ou.a.main
        }, r && oe.a.createElement(Er, {
            className: Ou.a.overlay
        }), oe.a.createElement("div", {
            ref: i,
            className: Ou.a.content,
            style: {
                left: c.left + "px",
                top: c.top + "px"
            }
        }, a)))
    }));
    var xu = Object(ie.a)((function({
        opened: e,
        trigger: t,
        options: n,
        onClick: a,
        onClose: r
    }) {
        const o = Object(re.useCallback)(e => {
                a(e)
            }, [a]),
            i = Object(re.useCallback)(e => {
                0 !== e.button && r()
            }, [r]);
        return oe.a.createElement(Cu, {
            opened: e,
            trigger: t,
            displayOverlay: !1,
            onPressEsc: r
        }, oe.a.createElement(Dc.a, {
            boxshadowed: !0,
            displayAllOptions: !0,
            noWrap: !0,
            onClick: o,
            options: n
        }), oe.a.createElement(mn.a, {
            target: document,
            onClick: r,
            onMouseDown: i
        }))
    }));
    var ju = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                uiStore: t,
                iconsStore: n,
                backgroundStore: a
            } = e,
            {
                appContextMenuOpened: r,
                appContextMenuTriggerClientPosition: o
            } = t,
            {
                currentIconGroupUuid: i
            } = n,
            c = Object(re.useCallback)(t => {
                switch (t) {
                    case 1:
                        e.addIconModalStore.open();
                        break;
                    case 2:
                        e.backgroundStore.nextLibBackgroundWallpaper();
                        break;
                    case 3:
                        e.backgroundStore.downloadWallpaper();
                        break;
                    case 4:
                        e.settingModalStore.open()
                }
            }, [e]);
        let s = [];
        return null !== i && (s = s.concat([{
            value: 1,
            text: Object(H.a)("add_icon")
        }, {
            value: -1,
            text: "hr"
        }])), a.model.setting.value === I.a.Lib && (s = s.concat([{
            value: 2,
            text: Object(H.a)("next_wallpaper")
        }])), a.model.setting.value !== I.a.Lib && a.model.setting.value !== I.a.Local || (s = s.concat([{
            value: 3,
            text: Object(H.a)("download_wallpaper")
        }, {
            value: -2,
            text: "hr"
        }])), s = s.concat([{
            value: 4,
            text: Object(H.a)("settings")
        }]), oe.a.createElement(xu, {
            opened: r,
            onClose: t.closeAppContextMenu,
            options: s,
            trigger: o,
            onClick: c
        })
    }));
    var _u = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                iconsStore: t
            } = e,
            {
                iconContextMenuOpened: n,
                iconContextMenuIcon: a,
                iconContextMenuTriggerClientPosition: r
            } = t,
            o = Object(re.useCallback)(t => {
                if (null !== a) switch (t) {
                    case 1:
                        e.editIconModalStore.startEdit(a.uuid);
                        break;
                    case 2:
                        e.iconsStore.deleteIcon(a.uuid);
                        break;
                    case 3:
                        e.iconsStore.openIconByModel(a, Ce.a.NewTab);
                        break;
                    case 4:
                        e.iconsStore.openIconByModel(a, Ce.a.BackgroundTab);
                        break;
                    case 5:
                        e.iconsStore.openIconByModel(a, Ce.a.NewIncognitoWindow)
                }
            }, [e, a]);
        let i = [{
            text: "hr",
            value: -1
        }, {
            text: Object(H.a)("edit"),
            value: 1
        }, {
            text: Object(H.a)("delete"),
            value: 2
        }];
        if (null !== a)
            if (Object(ae.a)(a.url)) i = [{
                text: Object(H.a)("open"),
                value: 3
            }].concat(i);
            else {
                let e = [{
                    text: Object(H.a)("open_in_new_tab"),
                    value: 3
                }, {
                    text: Object(H.a)("open_in_background_tab"),
                    value: 4
                }];
                e = e.concat([{
                    text: Object(H.a)("open_in_incognito_window"),
                    value: 5
                }]), i = e.concat(i)
            } return oe.a.createElement(xu, {
            opened: n,
            onClose: t.closeIconContextMenu,
            options: i,
            trigger: r,
            onClick: o
        })
    }));
    var Iu = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    iconsStore: t
                } = e,
                {
                    iconGroupContextMenuOpened: n,
                    iconGroupContextMenuIconGroup: a,
                    iconGroupContextMenuIconCount: r,
                    iconGroupContextMenuTriggerClientPosition: o,
                    iconGroups: i
                } = t,
                c = Object(re.useCallback)(t => {
                    if (null !== a) switch (t) {
                        case 1: {
                            const t = e.iconsStore.model.data.groupDict[a.uuid];
                            e.iconGroupPopupStore.startEdit(t, e.iconsStore.iconGroupContextMenuTriggerDom)
                        }
                        break;
                    case 2:
                        e.iconsStore.openIconGroupDeleteConfirmation();
                        break;
                    case 3: {
                        const {
                            iconsStore: t
                        } = e, n = t.model.data.groupDict[a.uuid], {
                            iconDict: r
                        } = t.model.data;
                        for (const e of n.data) {
                            const {
                                url: n
                            } = r[e];
                            Object(ae.a)(n) || t.openIconByUrl(n, Ce.a.BackgroundTab)
                        }
                    }
                    }
                }, [e, a]);
            let s = [{
                text: Object(H.a)("edit"),
                value: 1
            }];
            return r > 0 && (s = [{
                text: `${Object(H.a)("open_all")} (${r})`,
                value: 3
            }, {
                text: "hr",
                value: 4
            }].concat(s)), i.length > 1 && (s = s.concat([{
                text: Object(H.a)("delete"),
                value: 2
            }])), oe.a.createElement(xu, {
                opened: n,
                onClose: t.closeIconGroupContextMenu,
                options: s,
                trigger: o,
                onClick: c
            })
        })),
        Tu = n(149),
        Pu = n(164),
        Mu = n(380),
        Nu = n.n(Mu);
    var Lu = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", {
                className: Nu.a.main
            }, e)
        })),
        Ru = n(381),
        Du = n.n(Ru),
        Au = n(252),
        Bu = n.n(Au);
    var Gu = Object(ie.a)((function({
        selected: e,
        value: t,
        onClick: n
    }) {
        const a = se()(Bu.a.main, {
            [Bu.a.selectedMain]: e
        });
        return oe.a.createElement("div", {
            className: a,
            onClick: () => {
                n(t)
            }
        }, oe.a.createElement(Vn.a, {
            src: t,
            className: Bu.a.icon
        }))
    }));
    var Uu = Object(ie.a)((function({
        value: e,
        onChange: t
    }) {
        return oe.a.createElement("div", {
            className: Du.a.main
        }, D.gb.map(n => oe.a.createElement(Gu, {
            key: n,
            selected: e === n,
            value: n,
            onClick: t
        })))
    }));
    var Vu = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                iconGroupPopupStore: t
            } = e,
            {
                form: n
            } = t,
            {
                uuid: a,
                icoSrc: r,
                label: o
            } = n.model,
            i = null === a;
        return oe.a.createElement(Tu.a, null, oe.a.createElement(Pu.a, {
            title: Object(H.a)(i ? "add_group" : "edit_group")
        }), oe.a.createElement(ss, {
            onClick: t.cancel
        }), oe.a.createElement(Gi.a, {
            label: Object(H.a)("icon")
        }, oe.a.createElement(Uu, {
            value: r,
            onChange: n.setIcoSrc
        })), oe.a.createElement(Gi.a, {
            label: Object(H.a)("name"),
            errored: o.errored,
            errorMessage: o.errorMessage
        }, oe.a.createElement(Ic.a, {
            placeholder: Object(H.a)("name"),
            value: o.value,
            onChange: n.setLabel,
            onBlur: n.validateLabel,
            errored: o.errored
        })), oe.a.createElement(Lu, null, oe.a.createElement(oo.a, {
            type: "primary",
            onClick: t.submit
        }, Object(H.a)(i ? "add" : "modify")), oe.a.createElement(oo.a, {
            onClick: t.cancel
        }, Object(H.a)("cancel"))))
    }));
    var Fu = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    iconGroupPopupStore: t,
                    sidebarStore: n
                } = e,
                {
                    side: a
                } = n.model.setting,
                {
                    opened: r,
                    triggerDom: i,
                    cancel: c
                } = t;
            return oe.a.createElement(Cu, {
                horizontalSide: a === o.a.Right ? it.Left : it.Right,
                opened: r,
                trigger: i,
                onPressEsc: c
            }, oe.a.createElement(Vu, null))
        })),
        zu = n(127),
        Wu = n.n(zu),
        Hu = n(58),
        qu = n(382),
        Ku = n.n(qu),
        Qu = n(221),
        Yu = n.n(Qu),
        Ju = n(383),
        Xu = n.n(Ju),
        Zu = n(296),
        $u = n.n(Zu);
    var ed = Object(ie.a)((function({
        children: e
    }) {
        return oe.a.createElement("div", {
            className: $u.a.main
        }, oe.a.createElement("div", {
            className: $u.a.content
        }, e))
    }));
    var td = Object(ie.a)((function() {
            return oe.a.createElement(ed, null, oe.a.createElement("div", {
                className: Yu.a.main
            }, oe.a.createElement("div", {
                className: Yu.a.iconWrapper
            }, oe.a.createElement(Vn.a, {
                src: Xu.a,
                className: Yu.a.icon
            })), oe.a.createElement("div", {
                className: Yu.a.text
            }, Object(H.a)("scroll_or_click"))))
        })),
        nd = n(384),
        ad = n.n(nd),
        rd = n(385),
        od = n.n(rd);
    var id = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    uiStore: t
                } = e,
                {
                    dateText: n
                } = t;
            return oe.a.createElement("div", {
                className: od.a.main
            }, n)
        })),
        cd = n(297),
        sd = n.n(cd);
    var ld = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                uiStore: t,
                commonStore: n
            } = e,
            {
                timeText: a
            } = t,
            {
                enable24HourSystem: r
            } = n.model.setting;
        return oe.a.createElement("div", {
            className: sd.a.main
        }, oe.a.createElement("span", null, a), !r && oe.a.createElement("span", {
            className: sd.a.periodText
        }, t.periodText))
    }));
    var ud = Object(ie.a)((function() {
            return oe.a.createElement("div", {
                className: ad.a.main
            }, oe.a.createElement(ld, null), oe.a.createElement(id, null))
        })),
        dd = n(65),
        pd = n.n(dd);
    var fd = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    weatherStore: t
                } = e,
                {
                    weatherObservation: n
                } = t;
            if (null == n) return oe.a.createElement("div", {
                key: "loading",
                className: `${pd.a.main} ${pd.a.loadingMain}`
            }, oe.a.createElement(Je.a, {
                key: "loading",
                displayText: !0
            })); {
                const {
                    temperatureUnit: e
                } = t;
                return oe.a.createElement("div", {
                    key: "loaded",
                    className: `${pd.a.main} ${pd.a.loadedMain}`
                }, oe.a.createElement("div", {
                    className: pd.a.item
                }, oe.a.createElement("div", {
                    className: pd.a.iconWrapper
                }, oe.a.createElement(Vn.a, {
                    src: n.weatherIcoSrc,
                    className: pd.a.icon
                })), oe.a.createElement("div", {
                    className: pd.a.label
                }, n.weatherLabel)), oe.a.createElement("div", {
                    className: pd.a.item
                }, oe.a.createElement("div", {
                    className: pd.a.currentTemperature
                }, n.currentTemperature + "°"), oe.a.createElement("div", {
                    className: pd.a.label
                }, `${n.lowTemperature}~${n.highTemperature}${e}`)))
            }
        })),
        md = n(86),
        hd = n.n(md);
    var bd = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                weatherStore: t
            } = e,
            {
                weatherObservation: n,
                temperatureUnit: a
            } = t;
        return null === n ? oe.a.createElement("div", {
            key: "loading",
            className: hd.a.loadingMain
        }, oe.a.createElement(Je.a, {
            key: "loading",
            displayText: !0
        })) : oe.a.createElement("div", {
            key: "loaded",
            className: hd.a.loadedMain
        }, oe.a.createElement("div", {
            className: hd.a.currentTemperature
        }, n.currentTemperature, oe.a.createElement("div", {
            className: hd.a.currentTemperatureUnit
        }, "°")), oe.a.createElement("div", {
            className: hd.a.weather
        }, oe.a.createElement("div", {
            className: hd.a.iconWrapper
        }, oe.a.createElement(Vn.a, {
            src: n.weatherIcoSrc,
            className: hd.a.icon
        })), oe.a.createElement("div", {
            className: hd.a.text
        }, `${n.weatherLabel}, ${n.lowTemperature}~${n.highTemperature}${a}`)))
    }));
    var gd = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    standbyPageStore: t
                } = e,
                {
                    displayClock: n
                } = t.model.setting;
            return n ? oe.a.createElement(fd, null) : oe.a.createElement(bd, null)
        })),
        vd = n(222),
        yd = n.n(vd);
    var Sd = Object(ie.a)((function({
            title: e,
            children: t
        }) {
            const n = void 0 !== e,
                a = se()(yd.a.content, n && yd.a.hasTitleContent);
            return oe.a.createElement("div", {
                className: yd.a.main
            }, n && oe.a.createElement("div", {
                className: yd.a.title
            }, e), void 0 !== t && oe.a.createElement("div", {
                className: a
            }, t))
        })),
        wd = n(386),
        kd = n.n(wd);
    var Ed = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    standbyPageStore: t
                } = e,
                {
                    displayClock: n,
                    displayWeather: a
                } = t.model.setting;
            return oe.a.createElement(Sd, null, oe.a.createElement("div", {
                className: kd.a.main
            }, n && oe.a.createElement(ud, null), a && oe.a.createElement(gd, null)))
        })),
        Od = n(387),
        Cd = n.n(Od);
    var xd = Object(ie.a)((function({
        children: e
    }) {
        const t = 1 === oe.a.Children.count(e) && oe.a.createElement(ed, null);
        return oe.a.createElement("div", {
            className: Cd.a.main
        }, e, t)
    }));
    var jd = Object(ie.a)((function() {
            const e = Object(re.useRef)(null),
                t = Object(re.useContext)(un),
                {
                    standbyPageStore: n,
                    uiStore: a
                } = t,
                {
                    opened: r,
                    close: o
                } = n,
                {
                    mainViewportSpace: i
                } = a,
                c = {
                    left: i.left + "px",
                    top: i.top + "px",
                    bottom: i.bottom + "px",
                    right: i.right + "px"
                };
            return Object(re.useEffect)(() => {
                const n = e.current;
                if (null === n) return;
                const {
                    slideChecker: a
                } = t.uiStore;
                return a.observe(n), () => {
                    a.unobserve(n)
                }
            }, [e, t]), oe.a.createElement("div", {
                ref: e,
                className: Ku.a.main,
                style: c
            }, oe.a.createElement(xd, null, oe.a.createElement(Ed, null), oe.a.createElement(td, null)), oe.a.createElement(mn.a, {
                target: document,
                onClick: o
            }))
        })),
        _d = n(388),
        Id = n.n(_d);
    var Td = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                backgroundStore: t,
                standbyPageStore: n
            } = e,
            {
                currentWallpaper: a
            } = t,
            {
                blurredBackground: r
            } = n.model.setting;
        return oe.a.createElement("div", {
            className: Id.a.main
        }, oe.a.createElement(Cn, {
            blurred: r,
            model: a
        }))
    }));
    var Pd = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    standbyPageStore: t
                } = e,
                {
                    opened: n
                } = t;
            return oe.a.createElement(Hu.a, {
                in: n,
                unmountOnExit: !0,
                timeout: D.Ab,
                classNames: {
                    enter: Wu.a.enter,
                    enterActive: Wu.a.enterActive,
                    exit: Wu.a.exit,
                    exitActive: Wu.a.exitActive
                }
            }, oe.a.createElement("div", {
                className: Wu.a.main
            }, oe.a.createElement(Td, null), oe.a.createElement(jd, null)))
        })),
        Md = n(298),
        Nd = n.n(Md),
        Ld = n(299),
        Rd = n.n(Ld),
        Dd = n(70),
        Ad = n.n(Dd),
        Bd = n(121),
        Gd = n.n(Bd),
        Ud = n(389),
        Vd = n.n(Ud),
        Fd = n(390),
        zd = n.n(Fd),
        Wd = n(391),
        Hd = n.n(Wd);
    var qd = Object(ie.a)((function({
        className: e,
        status: t
    }) {
        let n;
        switch (t) {
            case W.Failed:
            case W.Warning:
                n = zd.a;
                break;
            case W.Successed:
                n = Vd.a;
                break;
            case W.Normal:
                n = Hd.a
        }
        const a = se()(Gd.a.main, e, {
            [W.Failed]: Gd.a.failedMain,
            [W.Successed]: Gd.a.successedMain,
            [W.Normal]: Gd.a.normalMain,
            [W.Warning]: Gd.a.failedMain
        } [t]);
        return oe.a.createElement("div", {
            className: a
        }, oe.a.createElement(Vn.a, {
            className: Gd.a.icon,
            src: n
        }))
    }));
    var Kd = Object(ie.a)((function({
        className: e,
        style: t,
        status: n,
        desc: a,
        btns: r
    }) {
        let o;
        switch (n) {
            case W.Failed:
                o = Object(H.a)("fail");
                break;
            case W.Successed:
                o = Object(H.a)("success");
                break;
            case W.Normal:
                o = Object(H.a)("info");
                break;
            case W.Warning:
                o = Object(H.a)("warning")
        }
        const i = se()(Ad.a.main, e, {
            [W.Failed]: Ad.a.failedMain,
            [W.Successed]: Ad.a.successedMain,
            [W.Normal]: Ad.a.normalMain,
            [W.Warning]: Ad.a.failedMain
        } [n]);
        return oe.a.createElement("div", {
            className: i,
            style: t
        }, oe.a.createElement(qd, {
            className: Ad.a.icon,
            status: n
        }), oe.a.createElement("div", {
            className: Ad.a.textContent
        }, oe.a.createElement("div", {
            className: Ad.a.title
        }, o), oe.a.createElement("div", {
            className: Ad.a.desc
        }, a)), void 0 !== r && oe.a.createElement("div", {
            className: Ad.a.btns
        }, r))
    }));
    var Qd = Object(ie.a)((function({
        index: e,
        model: t
    }) {
        const {
            content: n,
            status: a
        } = t;
        return oe.a.createElement("div", {
            className: Rd.a.main
        }, oe.a.createElement(Kd, {
            status: a,
            className: Rd.a.content,
            style: {
                top: 96 * e + "px"
            },
            desc: n,
            btns: oe.a.createElement(cr, {
                onClick: t.onClose
            })
        }))
    }));
    var Yd = Object(ie.a)((function({
        model: e,
        space: t
    }) {
        const n = {};
        return void 0 !== t ? (n.paddingTop = t.top + 18 + "px", n.paddingLeft = t.left + "px", n.paddingRight = t.right + "px", n.paddingBottom = t.bottom + "px") : n.paddingTop = "18px", oe.a.createElement("div", {
            className: Nd.a.main,
            style: n
        }, oe.a.createElement(Hu.c, {
            className: Nd.a.content
        }, e.map((e, t) => oe.a.createElement(Sn.a, {
            key: e.uuid
        }, oe.a.createElement(Qd, {
            index: t,
            model: e
        })))))
    }));
    const Jd = [{
        text: Object(H.a)("hide"),
        value: 1
    }];
    var Xd = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    iconsStore: t
                } = e,
                {
                    addIconBtnContextMenuOpened: n,
                    addIconBtnContextMenuTriggerClientPosition: a,
                    closeAddIconBtnContextMenu: r
                } = t,
                o = Object(re.useCallback)(t => {
                    switch (t) {
                        case 1:
                            e.iconsStore.setDisplayAddBtnSetting(!1)
                    }
                }, [e]);
            return oe.a.createElement(xu, {
                opened: n,
                onClose: r,
                trigger: a,
                options: Jd,
                onClick: o
            })
        })),
        Zd = n(300),
        $d = n.n(Zd),
        ep = n(392),
        tp = n.n(ep),
        np = n(393),
        ap = n.n(np);
    var rp = Object(ie.a)((function({
        className: e,
        onClick: t,
        children: n
    }) {
        const a = se()(ap.a.main, e);
        return oe.a.createElement("div", {
            className: a,
            onClick: t
        }, n)
    }));
    var op = Object(ie.a)((function({
            onClick: e
        }) {
            return oe.a.createElement(rp, {
                className: tp.a.main,
                onClick: e
            }, Object(H.a)("cancel"))
        })),
        ip = n(223),
        cp = n.n(ip);
    var sp = Object(ie.a)((function({
        status: e,
        onClick: t
    }) {
        let n;
        switch (e) {
            case W.Failed:
            case W.Warning:
                n = cp.a.failedMain;
                break;
            case W.Successed:
                n = cp.a.successedMain;
                break;
            case W.Normal:
                n = cp.a.normalMain
        }
        const a = se()(cp.a.main, n);
        return oe.a.createElement(rp, {
            className: a,
            onClick: t
        }, Object(H.a)("confirm"))
    }));
    var lp = Object(ie.a)((function({
        space: e,
        desc: t,
        onConfirm: n,
        onCancel: a
    }) {
        const r = W.Warning,
            o = {};
        return void 0 !== e ? (o.paddingTop = e.top + 18 + "px", o.paddingLeft = e.left + "px", o.paddingRight = e.right + "px", o.paddingBottom = e.bottom + "px") : o.paddingTop = "18px", oe.a.createElement("div", {
            className: $d.a.main,
            style: o
        }, oe.a.createElement(Er, null), oe.a.createElement("div", {
            className: $d.a.content
        }, oe.a.createElement(Kd, {
            status: r,
            desc: t,
            btns: oe.a.createElement(oe.a.Fragment, null, oe.a.createElement(op, {
                onClick: a
            }), oe.a.createElement(sp, {
                status: r,
                onClick: n
            }))
        })))
    }));
    var up = Object(ie.a)((function({
        space: e,
        opened: t,
        desc: n,
        onConfirm: a,
        onCancel: r
    }) {
        return Object(re.useEffect)(() => {
            if (t) return Object(ne.b)(r)
        }, [t, r]), oe.a.createElement(Sn.a, {
            entered: t
        }, oe.a.createElement(lp, {
            space: e,
            desc: n,
            onConfirm: a,
            onCancel: r
        }))
    }));
    var dp = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                iconsStore: t,
                uiStore: n
            } = e,
            {
                iconGroupDeleteConfirmationOpened: a
            } = t,
            {
                mainViewportSpace: r
            } = n;
        return oe.a.createElement(up, {
            opened: a,
            space: r,
            desc: Object(H.a)("delete_confirmation"),
            onCancel: t.cancelIconGroupDeleteConfirmation,
            onConfirm: t.confirmIconGroupDeleteConfirmation
        })
    }));
    var pp = Object(ie.a)((function({
        model: e
    }) {
        const t = Object(re.useContext)(un),
            {
                todosStore: n
            } = t,
            {
                categoryValue: a,
                todoCountDict: r
            } = n,
            o = Object(re.useCallback)(() => {
                t.todosStore.setCategoryValue(e.value)
            }, [t, e]);
        return oe.a.createElement(Lr, {
            selected: a === e.value,
            onClick: o,
            suffixChildren: r[e.value]
        }, e.text)
    }));
    var fp = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    todosStore: t
                } = e,
                {
                    categories: n
                } = t;
            return oe.a.createElement(Tr, {
                title: Object(H.a)("to_do")
            }, oe.a.createElement(Pr, null, n.map(e => oe.a.createElement(pp, {
                key: e.value,
                model: e
            }))))
        })),
        mp = n(394),
        hp = n.n(mp);
    var bp = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    todosStore: t
                } = e,
                {
                    keyword: n
                } = t;
            return oe.a.createElement(Kl, {
                value: n,
                onChange: t.setKeyworkd,
                autoFocus: !0
            })
        })),
        gp = n(253),
        vp = n.n(gp);
    var yp = Object(ie.a)((function({
            status: e,
            emptyIcoSrc: t,
            emptyMessage: n,
            children: a,
            asideChildren: r,
            onScroll: o
        }) {
            return oe.a.createElement("div", {
                className: vp.a.main
            }, oe.a.createElement("div", {
                className: vp.a.content
            }, oe.a.createElement(ut, {
                status: e,
                emptyIcoSrc: t,
                emptyMessage: n,
                onNextLoad: Lo.a,
                onReload: Lo.a,
                onScroll: o
            }, a)), oe.a.createElement("div", {
                className: vp.a.aside
            }, r))
        })),
        Sp = n(105),
        wp = n.n(Sp);
    var kp = Object(ie.a)((function({
            domId: e,
            focused: t = !1,
            prefixChildren: n,
            children: a,
            suffixChildren: r,
            clickable: o = !1,
            onClick: i = Lo.a,
            onDoubleClick: c = Lo.a,
            onContextMenu: s
        }) {
            const l = se()(wp.a.wrapper, t && wp.a.focusedWrapper, o && wp.a.clickableWrapper),
                [u, d] = Object(re.useState)(!1);
            Object(re.useEffect)(() => {
                if (u) {
                    const e = window.setTimeout(() => {
                        d(!1), i()
                    }, 250);
                    return () => {
                        window.clearTimeout(e)
                    }
                }
            }, [u, i]);
            const p = Object(re.useCallback)(() => {
                u ? (c(), d(!1)) : d(!0)
            }, [u, d, c]);
            return oe.a.createElement(bo, {
                domId: e,
                className: l,
                contentClassName: wp.a.main,
                onClick: o ? p : void 0,
                onContextMenu: s
            }, oe.a.createElement("div", {
                className: wp.a.prefixContent
            }, n), oe.a.createElement("div", {
                className: wp.a.content
            }, a), oe.a.createElement("div", {
                className: wp.a.suffixContent
            }, r))
        })),
        Ep = n(395),
        Op = n.n(Ep),
        Cp = n(396),
        xp = n.n(Cp),
        jp = n(68),
        _p = n(43),
        Ip = re.useLayoutEffect,
        Tp = function(e) {
            var t = Object(re.useRef)(e);
            return Ip((function() {
                t.current = e
            })), t
        },
        Pp = function(e, t) {
            "function" != typeof e ? e.current = t : e(t)
        },
        Mp = function(e, t) {
            var n = Object(re.useRef)();
            return Object(re.useCallback)((function(a) {
                e.current = a, n.current && Pp(n.current, null), n.current = t, t && Pp(t, a)
            }), [t])
        },
        Np = {
            "min-height": "0",
            "max-height": "none",
            height: "0",
            visibility: "hidden",
            overflow: "hidden",
            position: "absolute",
            "z-index": "-1000",
            top: "0",
            right: "0"
        },
        Lp = function(e) {
            Object.keys(Np).forEach((function(t) {
                e.style.setProperty(t, Np[t], "important")
            }))
        },
        Rp = null;
    var Dp = function() {},
        Ap = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width"],
        Bp = !!document.documentElement.currentStyle,
        Gp = function(e, t) {
            var n = e.cacheMeasurements,
                a = e.maxRows,
                r = e.minRows,
                o = e.onChange,
                i = void 0 === o ? Dp : o,
                c = e.onHeightChange,
                s = void 0 === c ? Dp : c,
                l = Object(_p.a)(e, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);
            var u, d = void 0 !== l.value,
                p = Object(re.useRef)(null),
                f = Mp(p, t),
                m = Object(re.useRef)(0),
                h = Object(re.useRef)(),
                b = function() {
                    var e = p.current,
                        t = n && h.current ? h.current : function(e) {
                            var t = window.getComputedStyle(e);
                            if (null === t) return null;
                            var n, a = (n = t, Ap.reduce((function(e, t) {
                                    return e[t] = n[t], e
                                }), {})),
                                r = a.boxSizing;
                            return "" === r ? null : (Bp && "border-box" === r && (a.width = parseFloat(a.width) + parseFloat(a.borderRightWidth) + parseFloat(a.borderLeftWidth) + parseFloat(a.paddingRight) + parseFloat(a.paddingLeft) + "px"), {
                                sizingStyle: a,
                                paddingSize: parseFloat(a.paddingBottom) + parseFloat(a.paddingTop),
                                borderSize: parseFloat(a.borderBottomWidth) + parseFloat(a.borderTopWidth)
                            })
                        }(e);
                    if (t) {
                        h.current = t;
                        var o = function(e, t, n, a) {
                                void 0 === n && (n = 1), void 0 === a && (a = 1 / 0), Rp || ((Rp = document.createElement("textarea")).setAttribute("tab-index", "-1"), Rp.setAttribute("aria-hidden", "true"), Lp(Rp)), null === Rp.parentNode && document.body.appendChild(Rp);
                                var r = e.paddingSize,
                                    o = e.borderSize,
                                    i = e.sizingStyle,
                                    c = i.boxSizing;
                                Object.keys(i).forEach((function(e) {
                                    var t = e;
                                    Rp.style[t] = i[t]
                                })), Lp(Rp), Rp.value = t;
                                var s = function(e, t) {
                                    var n = e.scrollHeight;
                                    return "border-box" === t.sizingStyle.boxSizing ? n + t.borderSize : n - t.paddingSize
                                }(Rp, e);
                                Rp.value = "x";
                                var l = Rp.scrollHeight - r,
                                    u = l * n;
                                "border-box" === c && (u = u + r + o), s = Math.max(u, s);
                                var d = l * a;
                                return "border-box" === c && (d = d + r + o), [s = Math.min(d, s), l]
                            }(t, e.value || e.placeholder || "x", r, a),
                            i = o[0],
                            c = o[1];
                        m.current !== i && (m.current = i, e.style.setProperty("height", i + "px", "important"), s(i, {
                            rowHeight: c
                        }))
                    }
                };
            return Object(re.useLayoutEffect)(b), u = Tp(b), Object(re.useEffect)((function() {
                var e = function(e) {
                    u.current(e)
                };
                return window.addEventListener("resize", e),
                    function() {
                        window.removeEventListener("resize", e)
                    }
            }), []), Object(re.createElement)("textarea", Object(jp.a)({}, l, {
                onChange: function(e) {
                    d || b(), i(e)
                },
                ref: f
            }))
        },
        Up = Object(re.forwardRef)(Gp);
    var Vp = Object(ie.a)((function({
        className: e,
        autoFocus: t = !1,
        value: n,
        placeholder: a,
        maxLength: r,
        onChange: o,
        onBlur: i,
        onPressEnter: c
    }) {
        const s = se()(xp.a.main, e),
            l = Object(re.useRef)(null),
            u = Object(re.useRef)(!1),
            d = Object(re.useCallback)(e => {
                o(e.target.value)
            }, [o]),
            p = Object(re.useCallback)(e => {
                u.current || "Enter" === e.key && (e.preventDefault(), c && c())
            }, [c, u]);
        return Object(re.useEffect)(() => {
            if (!t || null === l.current) return;
            l.current.focus();
            const {
                length: e
            } = l.current.value;
            l.current.setSelectionRange(e, e)
        }, [t, l]), oe.a.createElement(Up, {
            ref: l,
            className: s,
            onChange: d,
            onBlur: i,
            onCompositionStart: () => {
                u.current = !0
            },
            onCompositionEnd: () => {
                u.current = !1
            },
            onKeyDown: p,
            value: n,
            placeholder: a,
            maxLength: r
        })
    }));
    var Fp = Object(ie.a)((function({
            maxLength: e,
            placeholder: t,
            value: n,
            onChange: a,
            onBlur: r,
            onPressEnter: o
        }) {
            return oe.a.createElement(Vp, {
                className: Op.a.main,
                autoFocus: !0,
                placeholder: t,
                maxLength: e,
                value: n,
                onChange: a,
                onBlur: r,
                onPressEnter: o
            })
        })),
        zp = n(301),
        Wp = n.n(zp);
    var Hp = Object(ie.a)((function({
        src: e,
        enabled: t = !1,
        onClick: n
    }) {
        const a = se()(Wp.a.main, t && Wp.a.enabledMain);
        return oe.a.createElement(Vn.a, {
            className: a,
            onClick: t ? n : void 0,
            src: e
        })
    }));
    var qp = Object(ie.a)((function({
        enabled: e,
        onClick: t
    }) {
        return oe.a.createElement(Hp, {
            src: en.a,
            enabled: e,
            onClick: t
        })
    }));
    var Kp = Object(ie.a)((function({
            onEndCreate: e
        }) {
            const t = Object(re.useContext)(un),
                [n, a] = Object(re.useState)(""),
                r = 0 === n.trim().length,
                o = r ? void 0 : () => {
                    t.todosStore.addTodo(n.trim()), e()
                };
            return Object(re.useEffect)(() => Object(ne.b)(e)), oe.a.createElement(kp, {
                focused: !0,
                prefixChildren: oe.a.createElement(qp, {
                    enabled: !r,
                    onClick: o
                }),
                suffixChildren: oe.a.createElement(cr, {
                    onClick: e
                })
            }, oe.a.createElement(Fp, {
                maxLength: D.Tb,
                placeholder: Object(H.a)("add_task"),
                value: n,
                onChange: a,
                onPressEnter: o
            }))
        })),
        Qp = n(254),
        Yp = n.n(Qp);
    var Jp = Object(ie.a)((function({
        prefixChildren: e,
        children: t,
        onClick: n
    }) {
        return oe.a.createElement(bo, null, oe.a.createElement("div", {
            className: Yp.a.main,
            onClick: n
        }, oe.a.createElement("div", {
            className: Yp.a.prefixContent
        }, e), oe.a.createElement("div", {
            className: Yp.a.content
        }, t)))
    }));
    var Xp = Object(ie.a)((function() {
            const [e, t] = Object(re.useState)(!1), n = Object(re.useCallback)(() => {
                t(!0)
            }, []), a = Object(re.useCallback)(() => {
                t(!1)
            }, []);
            return e ? oe.a.createElement(Kp, {
                onEndCreate: a
            }) : oe.a.createElement(Jp, {
                prefixChildren: oe.a.createElement(qp, null),
                onClick: n
            }, Object(H.a)("add_task"))
        })),
        Zp = n(224),
        $p = n.n(Zp),
        ef = n(236),
        tf = n.n(ef),
        nf = n(237),
        af = n.n(nf);
    var rf = Object(ie.a)((function({
            checked: e,
            indeterminate: t = !1,
            onChange: n = Lo.a
        }) {
            const a = se()($p.a.main, e && $p.a.checkedMain),
                r = se()($p.a.icon, e && $p.a.checkedIcon);
            return oe.a.createElement("div", {
                className: a,
                onClick: () => {
                    n(!e)
                }
            }, oe.a.createElement(Vn.a, {
                className: r,
                src: t ? af.a : tf.a
            }))
        })),
        of = n(255),
        cf = n.n( of );
    var sf = Object(ie.a)((function({
            completed: e = !1,
            isImportant: t = !1,
            children: n,
            onClick: a = Lo.a
        }) {
            const r = se()(cf.a.main, e && cf.a.completedMain, t && cf.a.importantMain);
            return oe.a.createElement("div", {
                className: r,
                onClick: a
            }, n)
        })),
        lf = n(302),
        uf = n.n(lf),
        df = n(397),
        pf = n.n(df),
        ff = n(398),
        mf = n.n(ff);
    var hf = Object(ie.a)((function({
            checked: e,
            onChange: t = Lo.a,
            onClick: n = Lo.a
        }) {
            const a = se()(uf.a.main, e && uf.a.checkedMain);
            return oe.a.createElement(Vn.a, {
                className: a,
                src: e ? mf.a : pf.a,
                onClick: a => {
                    n(a), t(!e)
                }
            })
        })),
        bf = n(110);
    var gf = Object(ie.a)((function({
            model: e
        }) {
            const t = Object(re.useContext)(un),
                [n, a] = Object(re.useState)(!1),
                [r, o] = Object(re.useState)(""),
                {
                    completed: i,
                    data: c,
                    isImportant: s
                } = e,
                l = Object(re.useCallback)(() => {
                    a(!0), o(e.data)
                }, [a, o, e]),
                u = Object(re.useCallback)(() => {
                    a(!1);
                    const n = r.trim();
                    0 !== n.length && t.todosStore.setTodoData(e.uuid, n)
                }, [a, r, t, e]),
                d = Object(re.useCallback)(() => {
                    t.todosStore.setTodoCompleted(e.uuid, !e.completed)
                }, [t, e]),
                p = Object(re.useCallback)(n => {
                    t.todosStore.setTodoIsImportant(e.uuid, n)
                }, [t, e]);
            Object(re.useEffect)(() => {
                if (n) return Object(ne.b)(u)
            }, [n, u]);
            const f = Object(re.useCallback)(n => {
                t.todosStore.openTodoContextMenu({
                    model: e,
                    onEdit: l,
                    triggerClientPosition: {
                        left: n.clientX,
                        top: n.clientY
                    }
                })
            }, [t, e, l]);
            return oe.a.createElement(kp, {
                domId: e.uuid,
                prefixChildren: oe.a.createElement(rf, {
                    checked: i
                }),
                suffixChildren: oe.a.createElement(hf, {
                    checked: s,
                    onChange: p,
                    onClick: bf.a
                }),
                focused: n,
                clickable: !n,
                onClick: d,
                onDoubleClick: l,
                onContextMenu: n ? void 0 : f
            }, n ? oe.a.createElement(Fp, {
                maxLength: D.Tb,
                value: r,
                onChange: o,
                onBlur: u,
                onPressEnter: u
            }) : oe.a.createElement(sf, {
                completed: i,
                isImportant: s
            }, c))
        })),
        vf = n(399),
        yf = n.n(vf),
        Sf = n(400),
        wf = n.n(Sf),
        kf = n(401),
        Ef = n.n(kf),
        Of = n(402),
        Cf = n.n(Of),
        xf = n(403),
        jf = n.n(xf);
    var _f = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                todosStore: t
            } = e;
        return oe.a.createElement(Jp, {
            prefixChildren: oe.a.createElement(Hp, {
                src: jf.a
            }),
            onClick: t.openTodosCleanConfirmation
        }, Object(H.a)("delete_all_completed_tasks"))
    }));
    var If = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                todosStore: t,
                commonStore: n
            } = e,
            {
                categoryValue: a,
                todosStatus: r,
                todos: o,
                todoContextMenuOpened: i
            } = t,
            c = a === D.Rb.value,
            {
                themeType: s
            } = n;
        let l = void 0,
            u = void 0;
        switch (l = c ? s === Aa.a.Dark ? Cf.a : Ef.a : s === Aa.a.Dark ? wf.a : yf.a, a) {
            case D.Pb.value:
                u = Object(H.a)("any_plans");
                break;
            case D.Rb.value:
                u = Object(H.a)("any_important_plans");
                break;
            case D.Qb.value:
                u = Object(H.a)("it_is_empty");
                break;
            case D.Sb.value:
                u = Object(H.a)("any_plans")
        }
        return oe.a.createElement(Ml, null, oe.a.createElement(yp, {
            status: r,
            emptyIcoSrc: l,
            emptyMessage: u,
            onScroll: i ? t.closeTodoContextMenu : void 0,
            asideChildren: a === D.Qb.value ? 0 === t.todoCountDict[D.Qb.value] ? void 0 : oe.a.createElement(_f, null) : oe.a.createElement(Xp, null)
        }, o.map(e => oe.a.createElement(gf, {
            key: e.uuid,
            model: e
        }))))
    }));
    var Tf = Object(ie.a)((function() {
        return oe.a.createElement(Gr, null, oe.a.createElement(Fr, {
            className: hp.a.main
        }, oe.a.createElement(Kr, null, oe.a.createElement(bp, null)), oe.a.createElement(If, null)))
    }));
    var Pf = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                todosStore: t,
                uiStore: n
            } = e,
            {
                opened: a,
                close: r
            } = t,
            {
                mainViewportSpace: o
            } = n;
        return oe.a.createElement(Or, {
            opened: a,
            space: o,
            onPressEsc: r
        }, oe.a.createElement(jr, null, oe.a.createElement(fp, null), oe.a.createElement(Tf, null)), oe.a.createElement(ss, {
            onClick: r
        }))
    }));
    var Mf = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                todosStore: t,
                uiStore: n
            } = e,
            {
                todosCleanConfirmationOpened: a
            } = t,
            {
                mainViewportSpace: r
            } = n;
        return oe.a.createElement(up, {
            opened: a,
            space: r,
            desc: Object(H.a)("delete_all_completed_tasks_confirmation"),
            onCancel: t.cancelTodosCleanConfirmation,
            onConfirm: t.confirmTodosCleanConfirmation
        })
    }));
    const Nf = [{
        text: Object(H.a)("edit"),
        value: 1
    }, {
        text: Object(H.a)("delete"),
        value: 2
    }];
    var Lf = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                todosStore: t
            } = e,
            {
                todoContextMenuOpened: n,
                todoContextMenuTriggerClientPosition: a
            } = t,
            r = Object(re.useCallback)(t => {
                const {
                    todosStore: n
                } = e;
                switch (t) {
                    case 1:
                        const {
                            todoContextMenuEditHandler: e
                        } = n;
                        null !== e && e();
                        break;
                    case 2:
                        const {
                            todoContextMenuTodoUuid: t
                        } = n;
                        null !== t && n.deleteTodo(t)
                }
            }, [e]);
        return oe.a.createElement(xu, {
            opened: n,
            onClose: t.closeTodoContextMenu,
            options: Nf,
            trigger: a,
            onClick: r
        })
    }));
    var Rf = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    commonStore: t,
                    messagesStore: n,
                    uiStore: a,
                    sidebarStore: r
                } = e,
                {
                    themeType: o
                } = t,
                i = se()(vr.a.main, Object(O.d)(o)),
                {
                    side: c
                } = r.model.setting;
            return oe.a.createElement("div", {
                className: i
            }, oe.a.createElement(xn, null), oe.a.createElement("div", {
                className: vr.a.content
            }, oe.a.createElement(da, {
                key: c
            }), oe.a.createElement(br, null)), oe.a.createElement(Pd, null), oe.a.createElement(ls, null), oe.a.createElement(Xl, null), oe.a.createElement(nu, null), oe.a.createElement(bu, null), oe.a.createElement(Pf, null), oe.a.createElement(Ts, null), oe.a.createElement(Ns, null), oe.a.createElement(Fs, null), oe.a.createElement(ku, null), oe.a.createElement(Xd, null), oe.a.createElement(_u, null), oe.a.createElement(Iu, null), oe.a.createElement(Lf, null), oe.a.createElement(ju, null), oe.a.createElement(Fu, null), oe.a.createElement(Yd, {
                model: n.model,
                space: a.mainViewportSpace
            }), oe.a.createElement(dp, null), oe.a.createElement(Mf, null))
        })),
        Df = n(404),
        Af = n.n(Df),
        Bf = n(303),
        Gf = n.n(Bf),
        Uf = n(405),
        Vf = n.n(Uf);
    var Ff = Object(ie.a)((function({
        children: e
    }) {
        return oe.a.createElement("div", {
            className: Vf.a.main
        }, oe.a.createElement(Qe.a, {
            size: "lg"
        }, e))
    }));
    var zf = Object(ie.a)((function({
            errored: e,
            errorMessage: t,
            children: n
        }) {
            return oe.a.createElement("div", {
                className: Gf.a.main
            }, e && oe.a.createElement(Ff, null, t), oe.a.createElement("div", {
                className: Gf.a.content
            }, n))
        })),
        Wf = n(406),
        Hf = n.n(Wf);
    var qf = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", {
                className: Hf.a.main
            }, e)
        })),
        Kf = n(66),
        Qf = n.n(Kf);
    var Yf = Object(ie.a)((function({
            autoFocus: e = !1,
            type: t = "text",
            placeholder: n,
            onBlur: a,
            errored: r = !1,
            value: o,
            onChange: i,
            prefixIcoSrc: c,
            suffixIcoSrc: s,
            suffixIcoClickable: l = !1,
            onClickSuffixIco: u,
            onPressEnter: d
        }) {
            const p = se()(Qf.a.input, {
                [Qf.a.erroredInput]: r,
                [Qf.a.inputtedInput]: o.length > 0,
                [Qf.a.prefixedInput]: void 0 !== c,
                [Qf.a.suffixedInput]: void 0 !== s
            });
            let f = null;
            void 0 !== c && (f = oe.a.createElement(Vn.a, {
                src: c,
                className: se()(Qf.a.icon, Qf.a.prefixIcon)
            }));
            let m = null;
            void 0 !== s && (m = oe.a.createElement(Vn.a, {
                src: s,
                className: se()(Qf.a.icon, Qf.a.suffixIcon, l && Qf.a.clickableIcon),
                onClick: l ? u : void 0
            }));
            const h = Object(re.useRef)(!1);
            return oe.a.createElement("div", {
                className: Qf.a.main
            }, oe.a.createElement("input", {
                autoFocus: e,
                className: p,
                type: t,
                value: o,
                onChange: e => {
                    i(e.target.value)
                },
                onBlur: a,
                placeholder: n,
                onCompositionStart: () => {
                    h.current = !0
                },
                onCompositionEnd: () => {
                    h.current = !1
                },
                onKeyDown: e => {
                    h.current || "Enter" === e.key && d && d()
                }
            }), f, m)
        })),
        Jf = n(225),
        Xf = n.n(Jf);
    var Zf = Object(ie.a)((function({
            prefixChildren: e,
            children: t,
            suffixChildren: n
        }) {
            return oe.a.createElement("div", {
                className: Xf.a.main
            }, oe.a.createElement("div", {
                className: Xf.a.prefixContent
            }, e), oe.a.createElement("div", {
                className: Xf.a.content
            }, t), oe.a.createElement("div", {
                className: Xf.a.suffixContent
            }, n))
        })),
        $f = n(128),
        em = n.n($f);
    var tm = Object(ie.a)((function({
            type: e = "normal",
            loading: t = !1,
            children: n,
            onClick: a
        }) {
            const r = se()(em.a.main, {
                primary: em.a.primaryTypeMain,
                normal: em.a.normalTypeMain
            } [e], {
                [em.a.loadingMain]: t
            });
            return oe.a.createElement("div", {
                className: r,
                onClick: t ? void 0 : a
            }, oe.a.createElement("div", {
                className: em.a.content
            }, n), oe.a.createElement(Go.a, {
                opened: t
            }))
        })),
        nm = n(226),
        am = n.n(nm);
    var rm = Object(ie.a)((function({
            type: e = "normal",
            children: t,
            onClick: n
        }) {
            const a = se()(am.a.main, {
                primary: am.a.primaryTypeMain,
                normal: am.a.normalTypeMain,
                secondary: am.a.secondaryTypeMain
            } [e]);
            return oe.a.createElement("div", {
                className: a,
                onClick: n
            }, t)
        })),
        om = n(407),
        im = n.n(om);
    var cm = Object(ie.a)((function({
        children: e
    }) {
        return oe.a.createElement("div", {
            className: im.a.main
        }, e)
    }));
    var sm = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    guidePagesNicknamePageStore: t
                } = e,
                {
                    formErrored: n,
                    nickname: a,
                    submit: r
                } = t;
            return oe.a.createElement(xd, null, oe.a.createElement(Sd, {
                title: Object(H.a)("set_nickname_first")
            }, oe.a.createElement(zf, {
                errored: n,
                errorMessage: t.formErrorMessage
            }, oe.a.createElement(qf, null, oe.a.createElement(Yf, {
                autoFocus: !0,
                placeholder: Object(H.a)("nickname"),
                errored: a.errored,
                value: a.value,
                onChange: t.setNickname,
                onPressEnter: r
            }))), oe.a.createElement(Zf, {
                suffixChildren: oe.a.createElement(rm, {
                    type: "secondary",
                    onClick: t.skipCurrentStep
                }, Object(H.a)("skip"))
            }, oe.a.createElement(tm, {
                type: "primary",
                onClick: r
            }, Object(H.a)("next_step")))), oe.a.createElement(ed, null, oe.a.createElement(cm, null, oe.a.createElement(rm, {
                type: "primary",
                onClick: t.skipGuideThenLogin
            }, Object(H.a)("have_account_login_right_now")), oe.a.createElement(rm, {
                type: "secondary",
                onClick: t.skipGuideThenEnter
            }, Object(H.a)("skip_guide_enter_right_now")))))
        })),
        lm = n(122),
        um = n.n(lm),
        dm = n(238),
        pm = n.n(dm),
        fm = n(408),
        mm = n.n(fm);
    var hm = Object(ie.a)((function({
            autoFocus: e = !1,
            prefixIcoSrc: t,
            errored: n,
            value: a,
            onChange: r,
            placeholder: o,
            onBlur: i,
            onPressEnter: c
        }) {
            const [s, l] = Object(re.useState)(!1), u = Object(re.useCallback)(() => {
                l(e => !e)
            }, [l]);
            return oe.a.createElement(Yf, {
                autoFocus: e,
                type: s ? "text" : "password",
                prefixIcoSrc: t,
                suffixIcoSrc: s ? Yc.a : Kc.a,
                onClickSuffixIco: u,
                suffixIcoClickable: !0,
                errored: n,
                value: a,
                onChange: r,
                placeholder: o,
                onBlur: i,
                onPressEnter: c
            })
        })),
        bm = n(256),
        gm = n.n(bm);
    var vm = Object(ie.a)((function({
        value: e,
        onChange: t,
        prefixIcoSrc: n,
        errored: a,
        onBlur: r,
        onPressEnter: o,
        onReloadCaptcha: i,
        placeholder: c,
        captchaReloading: s,
        captcha: l
    }) {
        const u = {};
        return null !== l && (u.backgroundImage = `url(${Object(P.d)(l.imageSrc)})`), oe.a.createElement("div", {
            className: gm.a.main
        }, oe.a.createElement("div", {
            className: gm.a.input
        }, oe.a.createElement(Yf, {
            prefixIcoSrc: n,
            errored: a,
            onBlur: r,
            onPressEnter: o,
            value: e,
            onChange: t,
            placeholder: c
        })), oe.a.createElement("i", {
            className: gm.a.captcha,
            style: u,
            onClick: s ? void 0 : i
        }))
    }));
    var ym = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    guidePagesStore: t,
                    guidePagesRegisterPageStore: n
                } = e,
                {
                    registerGuiding: a
                } = t,
                {
                    status: r,
                    formErrored: o,
                    email: i,
                    password: c,
                    captcha: s,
                    captchaReloading: l,
                    captchaCode: u,
                    submit: d
                } = n,
                p = r === dt.a.Submitting,
                f = p ? void 0 : d;
            return oe.a.createElement(xd, null, oe.a.createElement(Sd, {
                title: Object(H.a)("register_to_sync_your_data")
            }, oe.a.createElement(zf, {
                errored: o,
                errorMessage: n.formErrorMessage
            }, oe.a.createElement(qf, null, oe.a.createElement(Yf, {
                errored: i.errored,
                prefixIcoSrc: um.a,
                placeholder: Object(H.a)("email"),
                value: i.value,
                onChange: n.setEmail,
                onBlur: n.validateEmail,
                onPressEnter: f,
                autoFocus: !0
            })), oe.a.createElement(qf, null, oe.a.createElement(hm, {
                errored: c.errored,
                prefixIcoSrc: pm.a,
                placeholder: Object(H.a)("password"),
                value: c.value,
                onChange: n.setPassword,
                onBlur: n.validatePassword,
                onPressEnter: f
            })), oe.a.createElement(qf, null, oe.a.createElement(vm, {
                errored: u.errored,
                prefixIcoSrc: mm.a,
                placeholder: Object(H.a)("captcha"),
                captcha: s,
                captchaReloading: l,
                onReloadCaptcha: n.reloadCaptcha,
                value: u.value,
                onChange: n.setCaptchaCode,
                onBlur: n.validateCaptchaCode,
                onPressEnter: f
            }))), oe.a.createElement(Zf, {
                prefixChildren: a && oe.a.createElement(rm, {
                    type: "secondary",
                    onClick: n.goPrevStep
                }, Object(H.a)("prev_step"))
            }, oe.a.createElement(tm, {
                type: "primary",
                loading: p,
                onClick: d
            }, Object(H.a)(a ? "next_step" : "register")))), oe.a.createElement(ed, null, oe.a.createElement(cm, null, !a && oe.a.createElement(rm, {
                type: "primary",
                onClick: t.switchToLogin
            }, Object(H.a)("have_account_login_right_now")), a && oe.a.createElement(rm, {
                type: "secondary",
                onClick: t.endGuideThenEnter
            }, Object(H.a)("skip_registration_enter_right_now")))))
        })),
        Sm = n(409),
        wm = n.n(Sm);
    var km = Object(ie.a)((function({
        children: e
    }) {
        return oe.a.createElement("div", {
            className: wm.a.main
        }, e)
    }));
    var Em = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    guidePagesStore: t,
                    guidePagesLoginPageStore: n
                } = e,
                {
                    loginGuiding: a
                } = t,
                {
                    status: r,
                    formErrored: o,
                    email: i,
                    password: c,
                    submit: s,
                    emailFulfilled: l
                } = n,
                u = r === dt.a.Submitting,
                d = u ? void 0 : s;
            return oe.a.createElement(xd, null, oe.a.createElement(Sd, {
                title: a ? `${Object(H.a)("visitor_slogan_1")}${Object(H.a)("visitor_slogan_2")}` : Object(H.a)("welcome_back")
            }, oe.a.createElement(zf, {
                errored: o,
                errorMessage: n.formErrorMessage
            }, oe.a.createElement(qf, null, oe.a.createElement(Yf, {
                autoFocus: !l,
                prefixIcoSrc: um.a,
                placeholder: Object(H.a)("email"),
                errored: i.errored,
                value: i.value,
                onChange: n.setEmail,
                onBlur: n.validateEmail,
                onPressEnter: d
            })), oe.a.createElement(qf, null, oe.a.createElement(hm, {
                autoFocus: l,
                prefixIcoSrc: pm.a,
                placeholder: Object(H.a)("password"),
                errored: c.errored,
                value: c.value,
                onChange: n.setPassword,
                onBlur: n.validatePassword,
                onPressEnter: d
            }))), oe.a.createElement(km, null, oe.a.createElement(rm, {
                onClick: t.switchToFindPassword
            }, Object(H.a)("forgot_password"))), oe.a.createElement(Zf, null, oe.a.createElement(tm, {
                type: "primary",
                onClick: s,
                loading: u
            }, Object(H.a)("login")))), oe.a.createElement(ed, null, oe.a.createElement(cm, null, a && oe.a.createElement(rm, {
                type: "primary",
                onClick: t.switchToRegister
            }, Object(H.a)("register_again")), a && oe.a.createElement(rm, {
                type: "secondary",
                onClick: t.close
            }, Object(H.a)("skip_login_enter_right_now")), !a && oe.a.createElement(rm, {
                type: "primary",
                onClick: t.switchToRegister
            }, Object(H.a)("not_have_account_register_right_now")), !a && oe.a.createElement(rm, {
                type: "secondary",
                onClick: t.close
            }, Object(H.a)("stay_logged_out")))))
        })),
        Om = n(410),
        Cm = n.n(Om);
    var xm = Object(ie.a)((function({
        children: e
    }) {
        return oe.a.createElement("div", {
            className: Cm.a.main
        }, e)
    }));
    var jm = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                guidePagesStore: t,
                guidePagesFindPasswordPageStore: n
            } = e,
            {
                email: a
            } = n;
        return oe.a.createElement(xd, null, oe.a.createElement(Sd, {
            title: Object(H.a)("find_password")
        }, oe.a.createElement(xm, null, Object(H.a)("find_password_successful", [a.value])), oe.a.createElement(Zf, null, oe.a.createElement(tm, {
            type: "primary",
            onClick: t.switchToLogin
        }, Object(H.a)("login_right_now")))))
    }));
    var _m = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                guidePagesStore: t,
                guidePagesFindPasswordPageStore: n
            } = e,
            {
                status: a,
                formErrored: r,
                email: o,
                submit: i
            } = n,
            c = a === dt.a.Submitting,
            s = c ? void 0 : i;
        return oe.a.createElement(xd, null, oe.a.createElement(Sd, {
            title: Object(H.a)("find_password")
        }, oe.a.createElement(zf, {
            errored: r,
            errorMessage: n.formErrorMessage
        }, oe.a.createElement(qf, null, oe.a.createElement(Yf, {
            autoFocus: !0,
            placeholder: Object(H.a)("email"),
            prefixIcoSrc: um.a,
            errored: o.errored,
            value: o.value,
            onChange: n.setEmail,
            onBlur: n.validateEmail,
            onPressEnter: s
        }))), oe.a.createElement(Zf, null, oe.a.createElement(tm, {
            type: "primary",
            onClick: i,
            loading: c
        }, Object(H.a)("next_step")))), oe.a.createElement(ed, null, oe.a.createElement(cm, null, oe.a.createElement(rm, {
            type: "primary",
            onClick: t.switchToLogin
        }, Object(H.a)("have_account_login_right_now")))))
    }));
    var Im = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    guidePagesFindPasswordPageStore: t
                } = e,
                {
                    status: n
                } = t;
            return n === dt.a.Successed ? oe.a.createElement(jm, null) : oe.a.createElement(_m, null)
        })),
        Tm = n(411),
        Pm = n.n(Tm);
    var Mm = Object(ie.a)((function({
            children: e
        }) {
            return oe.a.createElement("div", {
                className: Pm.a.main
            }, e)
        })),
        Nm = n(257),
        Lm = n.n(Nm);
    var Rm = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    guidePagesImportPageStore: t
                } = e,
                {
                    targetIconGroupUuid: n,
                    iconGroupOptions: a,
                    targetIconGroupLabel: r
                } = t;
            return oe.a.createElement("div", null, oe.a.createElement(Gi.a, {
                label: Object(H.a)("target_group")
            }, oe.a.createElement(So.a, {
                value: n,
                options: a,
                onChange: t.setTargetIconGroupUuid
            })), "add" === n && oe.a.createElement(Gi.a, {
                label: Object(H.a)("add_group"),
                errored: r.errored,
                errorMessage: r.errorMessage
            }, oe.a.createElement(Ic.a, {
                errored: r.errored,
                placeholder: Object(H.a)("name"),
                value: r.value,
                onChange: t.setTargetIconGroupLabel
            })))
        })),
        Dm = n(412),
        Am = n.n(Dm),
        Bm = n(87),
        Gm = n.n(Bm),
        Um = n(413),
        Vm = n.n(Um),
        Fm = n(227),
        zm = n.n(Fm);
    var Wm = Object(ie.a)((function({
        checked: e,
        indeterminate: t = !1
    }) {
        const n = se()(zm.a.main, e && zm.a.checkedMain),
            a = se()(zm.a.icon, e && zm.a.checkedIcon);
        return oe.a.createElement("div", {
            className: n
        }, oe.a.createElement(Vn.a, {
            className: a,
            src: t ? af.a : tf.a
        }))
    }));
    var Hm = Object(ie.a)((function({
            value: e,
            model: t,
            bookmarkDict: n,
            groupBookmarkDescendantsDict: a,
            onGroupBookmarkCollapsedChange: r,
            onBookmarkSelectedChange: o
        }) {
            const {
                id: i
            } = t;
            let c = 0;
            const s = a[i];
            s.forEach(t => {
                !0 === e[t] && c++
            });
            const l = c > 0,
                u = c !== s.length,
                {
                    collapsed: d
                } = t,
                p = se()(Gm.a.children, d && Gm.a.hide),
                f = Object(re.useCallback)(() => {
                    r(t.id, !t.collapsed)
                }, [t, r]);
            return oe.a.createElement("div", null, oe.a.createElement("div", {
                className: Gm.a.main,
                onClick: f
            }, oe.a.createElement("div", {
                className: Gm.a.checkbox,
                onClick: e => {
                    e.stopPropagation(), o(i, !(l && !u))
                }
            }, oe.a.createElement(Wm, {
                checked: l,
                indeterminate: u
            })), oe.a.createElement(Vn.a, {
                src: d ? Mo.a : Wa.a,
                className: Gm.a.toggleBtn
            }), oe.a.createElement(Vn.a, {
                src: Vm.a,
                className: Gm.a.icon
            }), oe.a.createElement("div", {
                className: se()(Gm.a.label, l && Gm.a.selectedLabel)
            }, t.title)), oe.a.createElement("div", {
                className: p
            }, t.data.map(t => oe.a.createElement(Zm, {
                key: t,
                value: e,
                model: n[t],
                bookmarkDict: n,
                groupBookmarkDescendantsDict: a,
                onGroupBookmarkCollapsedChange: r,
                onBookmarkSelectedChange: o
            }))))
        })),
        qm = n(106),
        Km = n.n(qm);
    var Qm = Object(ie.a)((function({
            src: e,
            placeholderChildren: t,
            children: n
        }) {
            const [a, r] = Object(re.useState)(null), o = Object(re.useCallback)(() => {
                r(e)
            }, [r, e]), i = a === e;
            return oe.a.createElement(oe.a.Fragment, null, oe.a.createElement(yn, {
                src: e,
                onLoad: o
            }), i ? n(e) : t)
        })),
        Ym = n(414),
        Jm = n.n(Ym);
    var Xm = Object(ie.a)((function({
        value: e,
        model: t,
        onBookmarkSelectedChange: n
    }) {
        const {
            id: a
        } = t, r = !0 === e[a];
        return oe.a.createElement("div", {
            className: Km.a.main,
            onClick: () => {
                n(a, !r)
            }
        }, oe.a.createElement("div", {
            className: Km.a.checkbox
        }, oe.a.createElement(Wm, {
            checked: r
        })), oe.a.createElement("div", {
            className: Km.a.iconWrapper
        }, oe.a.createElement(Qm, {
            src: "https://www.google.com/s2/favicons?domain=" + encodeURIComponent(t.url),
            placeholderChildren: oe.a.createElement(Vn.a, {
                className: Km.a.placeholderIcon,
                src: Jm.a
            }),
            children: e => oe.a.createElement("img", {
                className: Km.a.icon,
                src: e
            })
        })), oe.a.createElement("div", {
            className: se()(Km.a.label, r && Km.a.selectedLabel)
        }, t.title))
    }));
    var Zm = Object(ie.a)((function({
        value: e,
        model: t,
        bookmarkDict: n,
        groupBookmarkDescendantsDict: a,
        onGroupBookmarkCollapsedChange: r,
        onBookmarkSelectedChange: o
    }) {
        return t.type === Zt.Group ? oe.a.createElement(Hm, {
            value: e,
            model: t,
            bookmarkDict: n,
            groupBookmarkDescendantsDict: a,
            onGroupBookmarkCollapsedChange: r,
            onBookmarkSelectedChange: o
        }) : oe.a.createElement(Xm, {
            value: e,
            model: t,
            onBookmarkSelectedChange: o
        })
    }));
    var $m = Object(ie.a)((function({
        value: e,
        root: t,
        bookmarkDict: n,
        groupBookmarkDescendantsDict: a,
        onGroupBookmarkCollapsedChange: r,
        onBookmarkSelectedChange: o
    }) {
        return oe.a.createElement("div", null, oe.a.createElement(Zm, {
            value: e,
            model: t,
            bookmarkDict: n,
            groupBookmarkDescendantsDict: a,
            onGroupBookmarkCollapsedChange: r,
            onBookmarkSelectedChange: o
        }))
    }));
    var eh = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                guidePagesImportPageStore: t
            } = e,
            {
                bookmarksStatus: n,
                rootBookmarkId: a
            } = t;
        return oe.a.createElement(ut, {
            status: n,
            reloadErrorMessage: Object(H.a)("not_found"),
            onReload: Lo.a,
            onNextLoad: Lo.a
        }, null !== a && oe.a.createElement($m, {
            value: t.bookmarksValue,
            root: t.bookmarkDict[a],
            bookmarkDict: t.bookmarkDict,
            groupBookmarkDescendantsDict: t.groupBookmarkDescendantsDict,
            onGroupBookmarkCollapsedChange: t.groupBookmarkCollapsedChangeHandler,
            onBookmarkSelectedChange: t.bookmarkSelectedChangeHandler
        }))
    }));
    var th = Object(ie.a)((function() {
        return oe.a.createElement("div", {
            className: Am.a.main
        }, oe.a.createElement(eh, null))
    }));
    var nh = Object(ie.a)((function() {
            return oe.a.createElement("div", {
                className: Lm.a.main
            }, oe.a.createElement("div", {
                className: Lm.a.viewport
            }, oe.a.createElement(th, null)), oe.a.createElement("div", {
                className: Lm.a.aside
            }, oe.a.createElement(Rm, null)))
        })),
        ah = n(415),
        rh = n.n(ah),
        oh = n(228),
        ih = n.n(oh);
    var ch = Object(ie.a)((function({
        onConfirm: e,
        confirmText: t,
        onCancel: n,
        cancelText: a,
        children: r
    }) {
        return oe.a.createElement("div", {
            className: ih.a.main
        }, oe.a.createElement(qd, {
            status: W.Normal,
            className: ih.a.icon
        }), oe.a.createElement("div", {
            className: ih.a.content
        }, r), oe.a.createElement("div", {
            className: ih.a.btns
        }, oe.a.createElement(oo.a, {
            onClick: n,
            width: "fit-content"
        }, a), oe.a.createElement(oo.a, {
            type: "primary",
            onClick: e,
            width: "fit-content"
        }, t)))
    }));
    var sh = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                guidePagesStore: t,
                guidePagesImportPageStore: n
            } = e,
            {
                importGuiding: a
            } = t;
        return oe.a.createElement("div", {
            className: rh.a.main
        }, oe.a.createElement(ch, {
            cancelText: Object(H.a)(a ? "skip" : "cancel"),
            onCancel: a ? t.switchToGuideRegister : n.cancel,
            confirmText: Object(H.a)("authorize"),
            onConfirm: n.requestBookmarksPermission
        }, Object(H.a)("need_bookmarks_permission")))
    }));
    var lh = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    guidePagesImportPageStore: t
                } = e,
                {
                    bookmarksPermissionAuthorized: n
                } = t;
            return oe.a.createElement(Mm, null, n.value ? oe.a.createElement(nh, null) : oe.a.createElement(sh, null))
        })),
        uh = n(304),
        dh = n.n(uh);
    var ph = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                guidePagesStore: t,
                guidePagesImportPageStore: n
            } = e,
            {
                importGuiding: a
            } = t,
            {
                status: r,
                formErrored: o,
                selectedSiteBookmarksCount: i
            } = n;
        return Object(re.useEffect)(() => {
            if (!a) return Object(ne.b)(() => {
                e.guidePagesImportPageStore.cancel()
            })
        }, [a, e]), oe.a.createElement(xd, null, oe.a.createElement(Sd, {
            title: oe.a.createElement(oe.a.Fragment, null, Object(H.a)("pick_bookmarks_you_want_to_import") + " ", "( ", oe.a.createElement("span", {
                className: se()(i.errored && dh.a.erroredLabel)
            }, i.value), "/", D.jb, " )")
        }, oe.a.createElement("div", {
            className: dh.a.main
        }, o && oe.a.createElement(Ff, null, n.formErrorMessage), oe.a.createElement(lh, null), oe.a.createElement(Zf, {
            prefixChildren: a && oe.a.createElement(rm, {
                type: "secondary",
                onClick: n.goPrevStep
            }, Object(H.a)("prev_step")),
            suffixChildren: a && oe.a.createElement(rm, {
                type: "secondary",
                onClick: n.skipCurrentStep
            }, Object(H.a)("skip"))
        }, !a && oe.a.createElement(tm, {
            type: "normal",
            onClick: n.cancel
        }, Object(H.a)("cancel")), oe.a.createElement(tm, {
            type: "primary",
            loading: r === dt.a.Submitting,
            onClick: n.submit
        }, Object(H.a)(a ? "next_step" : "confirm"))))))
    }));
    var fh = Object(ie.a)((function() {
            const e = Object(re.useContext)(un),
                {
                    guidePagesStore: t
                } = e,
                {
                    tabValue: n
                } = t;
            let a;
            switch (n) {
                case Ot.Nickname:
                    a = sm;
                    break;
                case Ot.Login:
                    a = Em;
                    break;
                case Ot.FindPassword:
                    a = Im;
                    break;
                case Ot.Import:
                    a = ph;
                    break;
                case Ot.Register:
                    a = ym
            }
            return oe.a.createElement("div", {
                className: `${Af.a.main} ${D.O}`
            }, oe.a.createElement(Hu.b, null, oe.a.createElement(Sn.a, {
                key: n
            }, oe.a.createElement(a, null))))
        })),
        mh = n(416),
        hh = n.n(mh);
    var bh = Object(ie.a)((function() {
            return oe.a.createElement(xd, null, oe.a.createElement(Sd, {
                title: oe.a.createElement("span", {
                    className: hh.a.main
                }, Object(H.a)("welcome_to_monknow_new_tab"))
            }))
        })),
        gh = n(152);
    var vh = Object(ie.a)((function() {
        const e = Object(re.useContext)(un),
            {
                commonStore: t,
                guidePagesStore: n,
                uiStore: a
            } = e,
            {
                opened: r
            } = n,
            {
                updateLastActiveTime: o
            } = a;
        let i, c;
        return r ? n.welcoming ? (i = "WelcomePage", c = bh) : (i = "GuidePages", c = fh) : (i = "Content", c = Rf), oe.a.createElement("div", {
            className: pn.a.main,
            onContextMenu: e => {
                Object(ne.a)(e.target) || e.preventDefault()
            }
        }, oe.a.createElement(gh.a, {
            onChange: t.setSystemThemeType
        }), oe.a.createElement(Hu.b, null, oe.a.createElement(Sn.a, {
            key: i,
            appear: !0
        }, oe.a.createElement(c, null))), oe.a.createElement(mn.a, {
            target: document,
            onMouseMove: o,
            onMouseDown: o
        }))
    }));
    var yh = n(213);
    (async () => {
        document.title = Object(H.a)("new_tab"), Object(r.d)({
            enforceActions: "observed"
        });
        const e = await Object(yh.a)(),
            t = new sn;
        t.init(e),
            function(e) {
                chrome.runtime.onMessage.addListener(({
                    command: t,
                    data: n
                }, a, r) => {
                    switch (t) {
                        case E.J:
                            e.userStore.reloadModel();
                            break;
                        case E.z:
                            e.commonStore.reloadModel();
                            break;
                        case E.G:
                            e.tempCommonStore.reloadModel();
                            break;
                        case E.y:
                            e.backgroundStore.reloadModel();
                            break;
                        case E.F:
                            e.tempBackgroundStore.reloadModel();
                            break;
                        case E.C:
                            e.searcherStore.reloadModel();
                            break;
                        case E.A:
                            e.iconsStore.reloadModel();
                            break;
                        case E.H:
                            e.tempIconsStore.reloadModel();
                            break;
                        case E.K:
                            e.weatherStore.reloadModel();
                            break;
                        case E.E:
                            e.standbyPageStore.reloadModel();
                            break;
                        case E.D:
                            e.sidebarStore.reloadModel();
                            break;
                        case E.I:
                            e.todosStore.reloadModel();
                            break;
                        case E.B:
                            e.reloadModel()
                    }
                })
            }(t),
            function(e) {
                Object(ln.render)(oe.a.createElement(un.Provider, {
                    value: e
                }, oe.a.createElement(vh, null)), document.getElementById("app"))
            }(t)
    })()
}]);
