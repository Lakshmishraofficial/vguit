(function(t) {
    function e(e) {
        for (var i, r, a = e[0], c = e[1], l = e[2], u = 0, d = []; u < a.length; u++) r = a[u], o[r] && d.push(o[r][0]), o[r] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        h && h(e);
        while (d.length) d.shift()();
        return n.push.apply(n, l || []), s()
    }

    function s() {
        for (var t, e = 0; e < n.length; e++) {
            for (var s = n[e], i = !0, a = 1; a < s.length; a++) {
                var c = s[a];
                0 !== o[c] && (i = !1)
            }
            i && (n.splice(e--, 1), t = r(r.s = s[0]))
        }
        return t
    }
    var i = {},
        o = {
            app: 0
        },
        n = [];

    function r(e) {
        if (i[e]) return i[e].exports;
        var s = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, r), s.l = !0, s.exports
    }
    r.m = t, r.c = i, r.d = function(t, e, s) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (r.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(s, i, function(e) {
                return t[e]
            }.bind(null, i));
        return s
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "";
    var a = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = a.push.bind(a);
    a.push = e, a = a.slice();
    for (var l = 0; l < a.length; l++) e(a[l]);
    var h = c;
    n.push([0, "chunk-vendors"]), s()
})({
    0: function(t, e, s) {
        t.exports = s("56d7")
    },
    "01ab": function(t, e, s) {
        "use strict";
        var i = s("7004"),
            o = s.n(i);
        o.a
    },
    "0865": function(t, e, s) {
        "use strict";
        var i = s("34be"),
            o = s.n(i);
        o.a
    },
    "211d": function(t, e, s) {
        "use strict";
        var i = s("d41a"),
            o = s.n(i);
        o.a
    },
    "345c": function(t, e, s) {},
    "34be": function(t, e, s) {},
    "56d7": function(t, e, s) {
        "use strict";
        s.r(e);
        s("cadf"), s("551c"), s("f751"), s("097d");
        var i = s("2b0e"),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "classic-guitar"
                }, [s("div", {
                    staticClass: "buttons-wrap"
                }, [s("Buttons")], 1), s("Neck")], 1)
            },
            n = [],
            r = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "buttons-module"
                }, [s("div", {
                    staticClass: "buttons-module-inner"
                }, [s("button", {
                    class: {
                        active: t.isActiveButtons.isActiveMark
                    },
                    on: {
                        click: function(e) {
                            return t.mark()
                        }
                    }
                }, [t._v("\n      " + t._s(t.buttonMarkName) + "\n    ")]), s("Controls"), s("button", {
                    attrs: {
                        disabled: t.isActiveButtons.isActivePlayAll
                    },
                    on: {
                        click: function(e) {
                            return t.playAllStrings()
                        }
                    }
                }, [t._v("\n      " + t._s(t.buttonPlayName) + "\n    ")]), s("button", {
                    staticClass: "button-tuner",
                    class: {
                        active: t.isActiveButtons.isActiveTuner
                    },
                    on: {
                        click: function(e) {
                            return t.tuner()
                        }
                    }
                }, [t._v("\n      " + t._s(t.buttonTunerName) + "\n    ")]), s("div", {
                    ref: "dropdownMenu",
                    staticClass: "dropdown",
                    on: {
                        mouseover: function(e) {
                            t.toggleMenu = !0
                        },
                        mouseleave: function(e) {
                            t.toggleMenu = !1
                        }
                    }
                }, [s("button", {
                    staticClass: "dropbtn",
                    on: {
                        touchstart: function(e) {
                            t.toggleMenu = !t.toggleMenu
                        }
                    }
                }, [t._v("\n        " + t._s(t.soundsButton) + "\n      ")]), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.toggleMenu,
                        expression: "toggleMenu"
                    }],
                    staticClass: "dropdown-content"
                }, [s("ul", [s("li", {
                    on: {
                        click: function(e) {
                            return t.soundSwitch("steel", t.countryGuitarButton)
                        }
                    }
                }, [t._v("\n            " + t._s(t.countryGuitarButton) + "\n          ")]), s("li", {
                    on: {
                        click: function(e) {
                            return t.soundSwitch("classical", t.acousticGuitarButton)
                        }
                    }
                }, [t._v("\n            " + t._s(t.acousticGuitarButton) + "\n          ")]), s("li", {
                    on: {
                        click: function(e) {
                            return t.soundSwitch("electric", t.electricGuitarButton)
                        }
                    }
                }, [t._v("\n            " + t._s(t.electricGuitarButton) + "\n          ")])])])]), t.isActiveButtons.isActiveReset ? s("button", {
                    on: {
                        click: function(e) {
                            return t.resetNotes()
                        }
                    }
                }, [t._v("\n      " + t._s(t.resetButton) + "\n    ")]) : t._e()], 1)])
            },
            a = [],
            c = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "controls-dropdown"
                }, [s("div", {
                    ref: "dropdownMenu",
                    staticClass: "dropdown",
                    on: {
                        mouseover: function(e) {
                            t.toggleMenu = !0
                        },
                        mouseleave: function(e) {
                            t.toggleMenu = !1
                        }
                    }
                }, [s("button", {
                    staticClass: "dropbtn",
                    on: {
                        touchstart: function(e) {
                            t.toggleMenu = !t.toggleMenu
                        }
                    }
                }, [t._v("\n      " + t._s(t.buttonName) + "\n    ")]), s("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.toggleMenu,
                        expression: "toggleMenu"
                    }],
                    staticClass: "dropdown-content"
                }, [s("li", {
                    class: {
                        active: "c" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-c"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.c))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.c, "c")
                        }
                    }
                }), s("div", {
                    staticClass: "group--notes"
                }, [s("li", {
                    class: {
                        active: "cis" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-c"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.cis))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.cis, "cis")
                        }
                    }
                }), s("li", {
                    class: {
                        active: "des" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-d"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.des))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.des, "des")
                        }
                    }
                })]), s("li", {
                    class: {
                        active: "d" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-d"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.d))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.d, "d")
                        }
                    }
                }), s("div", {
                    staticClass: "group--notes"
                }, [s("li", {
                    class: {
                        active: "dis" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-d"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.dis))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.dis, "dis")
                        }
                    }
                }), s("li", {
                    class: {
                        active: "es" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-e"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.es))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.es, "es")
                        }
                    }
                })]), s("li", {
                    class: {
                        active: "e" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-e"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.e))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.e, "e")
                        }
                    }
                }), s("li", {
                    class: {
                        active: "f" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-f"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.f))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.f, "f")
                        }
                    }
                }), s("div", {
                    staticClass: "group--notes"
                }, [s("li", {
                    class: {
                        active: "fis" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-f"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.fis))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.fis, "fis")
                        }
                    }
                }), s("li", {
                    class: {
                        active: "ges" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-g"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.ges))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.ges, "ges")
                        }
                    }
                })]), s("li", {
                    class: {
                        active: "g" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-g"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.g))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.g, "g")
                        }
                    }
                }), s("div", {
                    staticClass: "group--notes"
                }, [s("li", {
                    class: {
                        active: "gis" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-g"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.gis))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.gis, "gis")
                        }
                    }
                }), s("li", {
                    class: {
                        active: "as" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-a"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.as))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.as, "as")
                        }
                    }
                })]), s("li", {
                    class: {
                        active: "a" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-a"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.a))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.a, "a")
                        }
                    }
                }), s("div", {
                    staticClass: "group--notes"
                }, [s("li", {
                    class: {
                        active: "ais" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-a"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.ais))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.ais, "ais")
                        }
                    }
                }), s("li", {
                    class: {
                        active: "b" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-h"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.b))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.b, "b")
                        }
                    }
                })]), s("li", {
                    class: {
                        active: "h" == t.selected
                    },
                    attrs: {
                        "data-note-color": "sort-h"
                    },
                    domProps: {
                        innerHTML: t._s(t.noteShowObjectValueHTML(t.h))
                    },
                    on: {
                        click: function(e) {
                            return t.showNotes(t.selectedNotes.h, "h")
                        }
                    }
                })])])])
            },
            l = [],
            h = s("db0c"),
            u = s.n(h),
            d = s("a4bb"),
            f = s.n(d),
            g = {
                name: "Controls",
                data: function() {
                    var t = languageSetup,
                        e = t.classicGuitar,
                        s = e.buttonsNames.highlightButton,
                        i = e.noteData,
                        o = i.c,
                        n = i.cis,
                        r = i.des,
                        a = i.d,
                        c = i.dis,
                        l = i.es,
                        h = i.e,
                        u = i.f,
                        d = i.fis,
                        f = i.ges,
                        g = i.g,
                        v = i.gis,
                        w = i.as,
                        b = i.a,
                        m = i.ais,
                        p = i.b,
                        N = i.h;
                    return {
                        selected: null,
                        c: o,
                        cis: n,
                        des: r,
                        d: a,
                        dis: c,
                        es: l,
                        e: h,
                        f: u,
                        fis: d,
                        ges: f,
                        g: g,
                        gis: v,
                        as: w,
                        a: b,
                        ais: m,
                        b: p,
                        h: N,
                        selectedNotes: {
                            c: ["h2", "a4", "g6", "f9", "e9", "d11", "h14"],
                            cis: ["h3", "a5", "g7", "f10", "e10", "d12"],
                            des: ["h3", "a5", "g7", "f10", "e10", "d12"],
                            d: ["d1", "h4", "a6", "g8", "f11", "e11", "d13"],
                            dis: ["d2", "h5", "a7", "g9", "f12", "e12", "d14"],
                            es: ["d2", "h5", "a7", "g9", "f12", "e12", "d14"],
                            e: ["f1", "e1", "d3", "h6", "a8", "g10", "f13", "e13"],
                            f: ["f2", "e2", "d4", "h7", "a9", "g11", "f14", "e14"],
                            fis: ["f3", "e3", "d5", "h8", "a10", "g12"],
                            ges: ["f3", "e3", "d5", "h8", "a10", "g12"],
                            g: ["f4", "g1", "e4", "d6", "h9", "a11", "g13"],
                            gis: ["g2", "f5", "e5", "d7", "h10", "a12", "g14"],
                            as: ["g2", "f5", "e5", "d7", "h10", "a12", "g14"],
                            a: ["a1", "g3", "f6", "e6", "d8", "h11", "a13"],
                            ais: ["a2", "g4", "f7", "e7", "d9", "h12", "a14"],
                            b: ["a2", "g4", "f7", "e7", "d9", "h12", "a14"],
                            h: ["h1", "a3", "g5", "f8", "e8", "d10", "h13"]
                        },
                        buttonName: s,
                        toggleMenu: !1,
                        touchMove: !1
                    }
                },
                created: function() {
                    document.addEventListener("touchend", this.handleOutsideClick), document.addEventListener("touchmove", this.handleOutsideTouchMove)
                },
                destroyed: function() {
                    document.removeEventListener("touchend", this.handleOutsideClick), document.removeEventListener("touchmove", this.handleOutsideTouchMove)
                },
                methods: {
                    showNotes: function(t, e) {
                        this.selected === e ? (this.selected = !1, mt.$emit("clearNotesFromControl")) : (this.selected = e, mt.$emit("showNotesFromControl", t, e)), this.toggleMenu = !this.toggleMenu
                    },
                    noteShowObjectKey: function(t) {
                        return f()(t)[0]
                    },
                    noteShowObjectValueHTML: function(t) {
                        return u()(t)[0].html
                    },
                    handleOutsideClick: function(t) {
                        var e = this.$refs.dropdownMenu,
                            s = t.target;
                        e === s || e.contains(s) || this.touchMove || (this.toggleMenu = !1), this.touchMove = !1
                    },
                    handleOutsideTouchMove: function(t) {
                        this.touchMove = !0
                    }
                }
            },
            v = g,
            w = (s("8f5a"), s("2877")),
            b = Object(w["a"])(v, c, l, !1, null, "10ee02a2", null),
            m = b.exports,
            p = {
                name: "Buttons",
                components: {
                    Controls: m
                },
                data: function() {
                    var t = languageSetup,
                        e = t.classicGuitar.buttonsNames,
                        s = e.markButton,
                        i = e.resetButton,
                        o = e.tunerButton,
                        n = e.playButton,
                        r = e.soundsDropDown,
                        a = r.defaultButton,
                        c = r.countryGuitarButton,
                        l = r.acousticGuitarButton,
                        h = r.electricGuitarButton;
                    return {
                        isActiveButtons: {
                            isActiveMark: !1,
                            isActiveReset: !1,
                            isActiveTuner: !1,
                            isActivePlayAll: !1
                        },
                        buttonMarkName: s,
                        buttonResetName: i,
                        buttonTunerName: o,
                        buttonPlayName: n,
                        soundsButton: a,
                        resetButton: i,
                        countryGuitarButton: c,
                        acousticGuitarButton: l,
                        electricGuitarButton: h,
                        toggleMenu: !1,
                        touchMove: !1
                    }
                },
                updated: function() {
                    mt.$emit("buttonsHandle", this.isActiveButtons)
                },
                mounted: function() {
                    mt.$emit("buttonsHandle", this.isActiveButtons)
                },
                created: function() {
                    var t = this;
                    mt.$on("resetButtonToggle", (function(e) {
                        t.isActiveButtons.isActiveReset = e.isActiveReset
                    })), document.addEventListener("touchend", this.handleOutsideClick), document.addEventListener("touchmove", this.handleOutsideTouchMove)
                },
                destroyed: function() {
                    document.removeEventListener("touchend", this.handleOutsideClick)
                },
                methods: {
                    mark: function() {
                        this.isActiveButtons.isActiveMark = !this.isActiveButtons.isActiveMark, this.isActiveButtons.isActivePlayAll = !1, this.isActiveButtons.isActiveTuner && mt.$emit("clearNotesArray"), this.isActiveButtons.isActiveTuner = !1
                    },
                    resetNotes: function() {
                        this.isActiveButtons.isActiveReset = !1, mt.$emit("clearNotesArray")
                    },
                    tuner: function() {
                        this.isActiveButtons.isActiveReset = !1, this.isActiveButtons.isActiveMark = !1, this.isActiveButtons.isActivePlayAll = !this.isActiveButtons.isActivePlayAll, this.isActiveButtons.isActiveTuner = !this.isActiveButtons.isActiveTuner, mt.$emit("clearNotesArray")
                    },
                    playAllStrings: function() {
                        mt.$emit("playAllStrings")
                    },
                    soundSwitch: function(t, e) {
                        this.soundsButton = e, mt.$emit("soundSwitch", t), this.toggleMenu = !this.toggleMenu
                    },
                    handleOutsideClick: function(t) {
                        var e = this.$refs.dropdownMenu,
                            s = t.target;
                        e === s || e.contains(s) || this.touchMove || (this.toggleMenu = !1), this.touchMove = !1
                    },
                    handleOutsideTouchMove: function(t) {
                        this.touchMove = !0
                    }
                }
            },
            N = p,
            O = (s("0865"), Object(w["a"])(N, r, a, !1, null, "31f61516", null)),
            j = O.exports,
            y = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "guitar-neck-new"
                }, [s("ul", [s("Headstock"), t._l(t.notesArr, (function(e, i) {
                    return s("li", {
                        key: i
                    }, [0 == i ? s("ul", {
                        staticClass: "fret--first"
                    }, t._l(e, (function(e, i, o) {
                        return s("li", {
                            key: o
                        }, [t._v("\n          " + t._s(t.extractHTML(e)) + "\n        ")])
                    })), 0) : t._e(), 3 == i || 5 == i || 7 == i || 9 == i ? s("div", {
                        staticClass: "dots"
                    }) : t._e(), 12 == i ? s("div", {
                        staticClass: "dots-double"
                    }, [s("span"), s("span")]) : t._e(), t._l(e, (function(e, o, n) {
                        return s("span", {
                            key: n,
                            class: {
                                "active--note": t.isActiveNote.filter((function(t) {
                                    return t === o
                                }))[0], "show--note": t.activeNoteWhite.filter((function(t) {
                                    return t === o
                                }))[0]
                            },
                            attrs: {
                                note: e
                            },
                            on: {
                                click: [function(s) {
                                    if (s.ctrlKey || s.shiftKey || s.altKey || s.metaKey) return null;
                                    t.clickHandle(o, t.activeNoteWhite.filter((function(t) {
                                        return t == o
                                    }))[0], e, t.notesCollection[i][o])
                                }, function(s) {
                                    if (!s.altKey) return null;
                                    t.shiftHandle(o, t.activeNoteWhite.filter((function(t) {
                                        return t == o
                                    }))[0], e)
                                }]
                            }
                        }, [(t.activeNotesURL.filter((function(t) {
                            return t == o
                        }))[0], s("i", {
                            staticClass: "note-name",
                            domProps: {
                                innerHTML: t._s(t.extractHTML(e))
                            }
                        }))])
                    }))], 2)
                })), s("Strings"), s("SoundStorage")], 2)])
            },
            A = [],
            k = (s("6762"), s("2fdb"), s("14b9"), s("0cd8"), s("e814")),
            S = s.n(k),
            M = (s("55dd"), s("57e7"), s("0a0d")),
            L = s.n(M),
            T = s("bd86"),
            _ = s("cebc"),
            C = s("2d1f"),
            x = s.n(C),
            G = (s("6d67"), s("d25f"), s("f3e2"), s("28a5"), function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("ul", {
                    staticClass: "strings"
                }, [s("li", [s("span", {
                    staticClass: "string-left",
                    style: {
                        flexGrow: t.strings.f.flexGrowLeft
                    }
                }), s("span", {
                    ref: "string_f",
                    staticClass: "string-right",
                    style: {
                        flexGrow: t.strings.f.flexGrowRight
                    }
                })]), s("li", [s("span", {
                    staticClass: "string-left",
                    style: {
                        flexGrow: t.strings.h.flexGrowLeft
                    }
                }), s("span", {
                    ref: "string_h",
                    staticClass: "string-right",
                    style: {
                        flexGrow: t.strings.h.flexGrowRight
                    }
                })]), s("li", [s("span", {
                    staticClass: "string-left",
                    style: {
                        flexGrow: t.strings.g.flexGrowLeft
                    }
                }), s("span", {
                    ref: "string_g",
                    staticClass: "string-right",
                    style: {
                        flexGrow: t.strings.g.flexGrowRight
                    }
                })]), s("li", [s("span", {
                    staticClass: "string-left",
                    style: {
                        flexGrow: t.strings.d.flexGrowLeft
                    }
                }), s("span", {
                    ref: "string_d",
                    staticClass: "string-right",
                    style: {
                        flexGrow: t.strings.d.flexGrowRight
                    }
                })]), s("li", [s("span", {
                    staticClass: "string-left",
                    style: {
                        flexGrow: t.strings.a.flexGrowLeft
                    }
                }), s("span", {
                    ref: "string_a",
                    staticClass: "string-right",
                    style: {
                        flexGrow: t.strings.a.flexGrowRight
                    }
                })]), s("li", [s("span", {
                    staticClass: "string-left",
                    style: {
                        flexGrow: t.strings.e.flexGrowLeft
                    }
                }), s("span", {
                    ref: "string_e",
                    staticClass: "string-right",
                    style: {
                        flexGrow: t.strings.e.flexGrowRight
                    }
                })])])
            }),
            H = [],
            B = (s("cffa"), {
                name: "Strings",
                data: function() {
                    return {
                        strings: {
                            f: {
                                flexGrowLeft: 11.5,
                                flexGrowRight: .5
                            },
                            h: {
                                flexGrowLeft: 11.5,
                                flexGrowRight: .5
                            },
                            g: {
                                flexGrowLeft: 11.5,
                                flexGrowRight: .5
                            },
                            d: {
                                flexGrowLeft: 11.5,
                                flexGrowRight: .5
                            },
                            a: {
                                flexGrowLeft: 11.5,
                                flexGrowRight: .5
                            },
                            e: {
                                flexGrowLeft: 11.5,
                                flexGrowRight: .5
                            }
                        }
                    }
                },
                updated: function() {},
                created: function() {
                    var t = this;
                    mt.$on("shakeString", (function(e) {
                        t.noteString = e, t.shakeStringFunc(e)
                    }))
                },
                methods: {
                    shakeStringFunc: function(t) {
                        var e, s = this.$refs.string_f,
                            i = this.$refs.string_h,
                            o = this.$refs.string_g,
                            n = this.$refs.string_d,
                            r = this.$refs.string_a,
                            a = this.$refs.string_e,
                            c = t.slice(0, 1),
                            l = S()(t.slice(1) - 1 + .5);
                        switch (e = l > 5 ? 1.5 : 1, c) {
                            case "f":
                                this.strings.f.flexGrowLeft = l, this.strings.f.flexGrowRight = 14 - l, TweenLite.fromTo(s, 4, {
                                    rotation: e
                                }, {
                                    rotation: 0,
                                    ease: Elastic.easeOut.config(e, .02)
                                });
                                break;
                            case "h":
                                this.strings.h.flexGrowLeft = l, this.strings.h.flexGrowRight = 14 - l, TweenLite.fromTo(i, 4, {
                                    rotation: e
                                }, {
                                    rotation: 0,
                                    ease: Elastic.easeOut.config(e, .02)
                                });
                                break;
                            case "g":
                                this.strings.g.flexGrowLeft = l, this.strings.g.flexGrowRight = 14 - l, TweenLite.fromTo(o, 4, {
                                    rotation: e
                                }, {
                                    rotation: 0,
                                    ease: Elastic.easeOut.config(e, .02)
                                });
                                break;
                            case "d":
                                this.strings.d.flexGrowLeft = l, this.strings.d.flexGrowRight = 14 - l, TweenLite.fromTo(n, 4, {
                                    rotation: e
                                }, {
                                    rotation: 0,
                                    ease: Elastic.easeOut.config(e, .02)
                                });
                                break;
                            case "a":
                                this.strings.a.flexGrowLeft = l, this.strings.a.flexGrowRight = 14 - l, TweenLite.fromTo(r, 4, {
                                    rotation: e
                                }, {
                                    rotation: 0,
                                    ease: Elastic.easeOut.config(e, .02)
                                });
                                break;
                            case "e":
                                this.strings.e.flexGrowLeft = l, this.strings.e.flexGrowRight = 14 - l, TweenLite.fromTo(a, 4, {
                                    rotation: e
                                }, {
                                    rotation: 0,
                                    ease: Elastic.easeOut.config(e, .02)
                                });
                                break
                        }
                    }
                }
            }),
            P = B,
            $ = (s("6599"), Object(w["a"])(P, G, H, !1, null, "64bf88e6", null)),
            R = $.exports,
            E = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div")
            },
            U = [],
            V = s("f499"),
            F = s.n(V),
            D = s("5176"),
            W = s.n(D),
            q = (s("ac6a"), s("06db"), s("1e5c")),
            I = languageSetup,
            K = I.classicGuitar,
            J = K.noteData,
            Q = K.pathToSoundFile,
            z = K.keys,
            X = {
                name: "SoundStorage",
                data: function() {
                    var t = {
                        c: {
                            notes: ["h2", "a4", "g6", "f9", "e9", "d11", "h14"],
                            toggle: !1,
                            noteName: "c"
                        },
                        cis: {
                            notes: ["h3", "a5", "g7", "f10", "e10", "d12"],
                            toggle: !0,
                            noteName: "cis"
                        },
                        des: {
                            notes: ["h3", "a5", "g7", "f10", "e10", "d12"],
                            toggle: !0,
                            noteName: "cis"
                        },
                        d: {
                            notes: ["d1", "h4", "a6", "g8", "f11", "e11", "d13"],
                            toggle: !1,
                            noteName: "d"
                        },
                        dis: {
                            notes: ["d2", "h5", "a7", "g9", "f12", "e12", "d14"],
                            toggle: !0,
                            noteName: "dis"
                        },
                        es: {
                            notes: ["d2", "h5", "a7", "g9", "f12", "e12", "d14"],
                            toggle: !0,
                            noteName: "dis"
                        },
                        e: {
                            notes: ["f1", "e1", "d3", "h6", "a8", "g10", "f13", "e13"],
                            toggle: !1,
                            noteName: "e"
                        },
                        f: {
                            notes: ["f2", "e2", "d4", "h7", "a9", "g11", "f14", "e14"],
                            toggle: !1,
                            noteName: "f"
                        },
                        fis: {
                            notes: ["f3", "e3", "d5", "h8", "a10", "g12", "f14"],
                            toggle: !0,
                            noteName: "fis"
                        },
                        ges: {
                            notes: ["f3", "e3", "d5", "h8", "a10", "g12", "f14"],
                            toggle: !0,
                            noteName: "fis"
                        },
                        g: {
                            notes: ["g1", "e4", "d6", "h9", "a11", "g13"],
                            toggle: !1,
                            noteName: "g"
                        },
                        gis: {
                            notes: ["g2", "f5", "e5", "d7", "h10", "a12", "g14"],
                            toggle: !0,
                            noteName: "gis"
                        },
                        as: {
                            notes: ["g2", "f5", "e5", "d7", "h10", "a12", "g14"],
                            toggle: !0,
                            noteName: "gis"
                        },
                        a: {
                            notes: ["a1", "g3", "f6", "e6", "d8", "h11", "a13"],
                            toggle: !1,
                            noteName: "a"
                        },
                        ais: {
                            notes: ["a2", "g4", "f7", "e7", "d9", "h12", "a14"],
                            toggle: !0,
                            noteName: "ais"
                        },
                        b: {
                            notes: ["a2", "g4", "f7", "e7", "d9", "h12", "a14"],
                            toggle: !0,
                            noteName: "ais"
                        },
                        h: {
                            notes: ["h1", "a3", "g5", "f8", "e8", "d10", "h13"],
                            toggle: !1,
                            noteName: "h"
                        }
                    };
                    x()(t).map((function(t, e) {
                        var s = t[1],
                            i = u()(J[t[0]])[0];
                        return W()(s, i), t[1]
                    }));
                    var e = [{
                        f1: "e",
                        h1: "h",
                        g1: "g",
                        d1: "d",
                        a1: "a",
                        e1: "e"
                    }, {
                        f2: "f",
                        h2: "c",
                        g2: "as",
                        d2: "es",
                        a2: "b",
                        e2: "f"
                    }, {
                        f3: "ges",
                        h3: "des",
                        g3: "a",
                        d3: "e",
                        a3: "h",
                        e3: "ges"
                    }, {
                        f4: "g",
                        h4: "d",
                        g4: "b",
                        d4: "f",
                        a4: "c",
                        e4: "g"
                    }, {
                        f5: "as",
                        h5: "es",
                        g5: "h",
                        d5: "ges",
                        a5: "des",
                        e5: "as"
                    }, {
                        f6: "a",
                        h6: "e",
                        g6: "c",
                        d6: "g",
                        a6: "d",
                        e6: "a"
                    }, {
                        f7: "b",
                        h7: "f",
                        g7: "des",
                        d7: "as",
                        a7: "es",
                        e7: "b"
                    }, {
                        f8: "h",
                        h8: "ges",
                        g8: "d",
                        d8: "a",
                        a8: "e",
                        e8: "h"
                    }, {
                        f9: "c",
                        h9: "g",
                        g9: "es",
                        d9: "b",
                        a9: "f",
                        e9: "c"
                    }, {
                        f10: "des",
                        h10: "as",
                        g10: "e",
                        d10: "h",
                        a10: "ges",
                        e10: "des"
                    }, {
                        f11: "d",
                        h11: "a",
                        g11: "f",
                        d11: "c",
                        a11: "g",
                        e11: "d"
                    }, {
                        f12: "es",
                        h12: "b",
                        g12: "ges",
                        d12: "des",
                        a12: "as",
                        e12: "es"
                    }, {
                        f13: "e",
                        h13: "h",
                        g13: "g",
                        d13: "d",
                        a13: "a",
                        e13: "e"
                    }, {
                        f14: "f",
                        h14: "c",
                        g14: "as",
                        d14: "es",
                        a14: "b",
                        e14: "f"
                    }];
                    return {
                        howlerObject: {},
                        notesHowler: ["f0", "f1", "f2", "f3", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "h0", "h1", "h2", "h3", "h4", "h5", "h9", "g0", "g1", "g2", "g3", "g4", "d0", "d1", "d2", "d3", "d4", "d5", "a0", "a1", "a2", "a3", "a4", "a5", "e0", "e1", "e2", "e3", "e4", "e5"],
                        itemsArr: JSON.parse(F()(e)),
                        notesCollection: JSON.parse(F()(e)),
                        selectedNotes: W()({}, t),
                        itemsObj: {},
                        keyPressShiftHandle: W()({}, z.keyPressShiftHandle),
                        keyPressHandle: W()({}, z.keyPressHandle)
                    }
                },
                created: function() {
                    var t = this;
                    mt.$on("soundChange", (function(e) {
                        t.howlerDefine(e), mt.$emit("loadSoundFiles", t.itemsObj, e)
                    })), this.objectSounds()
                },
                methods: {
                    howlerDefine: function(t) {
                        for (var e = 0; e < this.notesHowler.length; e++) {
                            var s = this.notesHowler[e];
                            this.howlerObject[s] = new q["Howl"]({
                                src: ["".concat(Q).concat(t, "/") + s + ".mp3", "".concat(Q).concat(t, "/") + s + ".ogg"]
                            })
                        }
                        this.itemsObj = {
                            f0: this.howlerObject.f0,
                            f1: this.howlerObject.f1,
                            f2: this.howlerObject.f2,
                            f3: this.howlerObject.f3,
                            f4: this.howlerObject.h9,
                            f5: this.howlerObject.f5,
                            f6: this.howlerObject.f6,
                            f7: this.howlerObject.f7,
                            f8: this.howlerObject.f8,
                            f9: this.howlerObject.f9,
                            f10: this.howlerObject.f10,
                            f11: this.howlerObject.f11,
                            f12: this.howlerObject.f12,
                            f13: this.howlerObject.f13,
                            f14: this.howlerObject.f14,
                            h0: this.howlerObject.h0,
                            h1: this.howlerObject.h1,
                            h2: this.howlerObject.h2,
                            h3: this.howlerObject.h3,
                            h4: this.howlerObject.h4,
                            h5: this.howlerObject.h5,
                            h6: this.howlerObject.f1,
                            h7: this.howlerObject.f2,
                            h8: this.howlerObject.f3,
                            h9: this.howlerObject.h9,
                            h10: this.howlerObject.f5,
                            h11: this.howlerObject.f6,
                            h12: this.howlerObject.f7,
                            h13: this.howlerObject.f8,
                            h14: this.howlerObject.f9,
                            g0: this.howlerObject.g0,
                            g1: this.howlerObject.g1,
                            g2: this.howlerObject.g2,
                            g3: this.howlerObject.g3,
                            g4: this.howlerObject.g4,
                            g5: this.howlerObject.h1,
                            g6: this.howlerObject.h2,
                            g7: this.howlerObject.h3,
                            g8: this.howlerObject.h4,
                            g9: this.howlerObject.h5,
                            g10: this.howlerObject.f1,
                            g11: this.howlerObject.f2,
                            g12: this.howlerObject.f3,
                            g13: this.howlerObject.h9,
                            g14: this.howlerObject.f5,
                            d0: this.howlerObject.d0,
                            d1: this.howlerObject.d1,
                            d2: this.howlerObject.d2,
                            d3: this.howlerObject.d3,
                            d4: this.howlerObject.d4,
                            d5: this.howlerObject.d5,
                            d6: this.howlerObject.g1,
                            d7: this.howlerObject.g2,
                            d8: this.howlerObject.g3,
                            d9: this.howlerObject.g4,
                            d10: this.howlerObject.h1,
                            d11: this.howlerObject.h2,
                            d12: this.howlerObject.h3,
                            d13: this.howlerObject.h4,
                            d14: this.howlerObject.h5,
                            a0: this.howlerObject.a0,
                            a1: this.howlerObject.a1,
                            a2: this.howlerObject.a2,
                            a3: this.howlerObject.a3,
                            a4: this.howlerObject.a4,
                            a5: this.howlerObject.a5,
                            a6: this.howlerObject.d1,
                            a7: this.howlerObject.d2,
                            a8: this.howlerObject.d3,
                            a9: this.howlerObject.d4,
                            a10: this.howlerObject.d5,
                            a11: this.howlerObject.g1,
                            a12: this.howlerObject.g2,
                            a13: this.howlerObject.g3,
                            a14: this.howlerObject.g4,
                            e0: this.howlerObject.e0,
                            e1: this.howlerObject.e1,
                            e2: this.howlerObject.e2,
                            e3: this.howlerObject.e3,
                            e4: this.howlerObject.e4,
                            e5: this.howlerObject.e5,
                            e6: this.howlerObject.a1,
                            e7: this.howlerObject.a2,
                            e8: this.howlerObject.a3,
                            e9: this.howlerObject.a4,
                            e10: this.howlerObject.a5,
                            e11: this.howlerObject.d1,
                            e12: this.howlerObject.d2,
                            e13: this.howlerObject.d3,
                            e14: this.howlerObject.d4
                        }
                    },
                    objectSounds: function() {
                        this.howlerDefine("steel"), mt.$emit("loadSoundFiles", this.itemsObj)
                    }
                }
            },
            Y = X,
            Z = Object(w["a"])(Y, E, U, !1, null, null, null),
            tt = Z.exports,
            et = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            st = [function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "headstock-wrap"
                }, [s("div", {
                    staticClass: "headstock"
                }, [s("span", {
                    staticClass: "headstock-circel-one"
                }), s("span", {
                    staticClass: "headstock-circel-two"
                }), s("ul", {
                    staticClass: "headstock-strings"
                }, [s("li", {
                    staticClass: "headstock-string-f"
                }), s("li", {
                    staticClass: "headstock-string-h"
                }), s("li", {
                    staticClass: "headstock-string-g"
                }), s("li", {
                    staticClass: "headstock-string-d"
                }), s("li", {
                    staticClass: "headstock-string-a"
                }), s("li", {
                    staticClass: "headstock-string-e"
                })])])])
            }],
            it = {
                name: "Headstock"
            },
            ot = it,
            nt = (s("01ab"), Object(w["a"])(ot, et, st, !1, null, null, null)),
            rt = nt.exports,
            at = tt.data(),
            ct = {
                name: "Neck",
                components: {
                    Strings: R,
                    SoundStorage: tt,
                    Headstock: rt
                },
                data: function() {
                    var t = languageSetup,
                        e = t.classicGuitar,
                        s = e.url,
                        i = e.noteData;
                    return {
                        url: s,
                        intervalVar: null,
                        isActiveNote: [],
                        activeNoteWhite: [],
                        activeNoteWhiteChar: "",
                        activeNotesURL: [],
                        activeNoteNamesUrl: {},
                        previousStateURL: "",
                        activeNoteNamesSecondStateURL: {},
                        isActiveButtons: {
                            isActiveMark: !1,
                            isActiveReset: !1,
                            isActiveTuner: !1,
                            isActivePlayAll: !0
                        },
                        notesArr: at.itemsArr,
                        notesCollection: at.notesCollection,
                        notesHTML: i,
                        noteObj: at.itemsObj,
                        currentSoundVersion: "classical",
                        keyPressHandle: at.keyPressHandle,
                        keyPressShiftHandle: at.keyPressShiftHandle,
                        notesObj: {
                            f: "",
                            h: "",
                            g: "",
                            d: "",
                            a: "",
                            e: ""
                        },
                        similarNotesArr: [],
                        previousPlayingSound: 0,
                        previousPlayingSoundId: null,
                        previousSoundsArrStorage: [],
                        startTimer: 0,
                        tunerNote: null
                    }
                },
                beforeMount: function() {
                    var t = this;
                    if (this.$route.query.notes && (this.isActiveNote = this.$route.query.notes.split(".")), this.$route.query.inverted) {
                        var e = this.$route.query.inverted.split(".");
                        e.forEach((function(t) {
                            at.notesCollection.filter((function(e, s) {
                                e[t] && (at.itemsArr[s][t] = at.selectedNotes[e[t]].noteName)
                            }))
                        }))
                    }
                    if (this.$route.query.highlighted) {
                        var s = this.$route.query.highlighted.split(".");
                        s.forEach((function(e) {
                            var s = at.selectedNotes[e].notes;
                            t.activeNoteWhiteChar = e, t.notesArr.map((function(t) {
                                return x()(t).forEach((function(i) {
                                    var o = i[0];
                                    i[1];
                                    s.forEach((function(s) {
                                        s === o && (t[o] = e)
                                    }))
                                })), t
                            })), t.toggleNoteNames(e)
                        }))
                    }
                },
                beforeDestroy: function() {
                    document.removeEventListener("keydown", this.keyDown), window.removeEventListener("popstate", this.backButtonFunctionalityURL)
                },
                mounted: function() {
                    this.isActiveNote.length >= 1 && (this.isActiveButtons.isActiveReset = !0, mt.$emit("resetButtonToggle", this.isActiveButtons)), document.addEventListener("keydown", this.keyDown), window.addEventListener("popstate", this.backButtonFunctionalityURL, !1)
                },
                created: function() {
                    var t = this;
                    mt.$on("buttonsHandle", (function(e) {
                        t.isActiveMark = e.isActiveMark, t.isActiveButtons.isActiveMark = e.isActiveMark, t.isActiveButtons.isActiveReset = e.isActiveReset, t.isActiveButtons.isActiveTuner = e.isActiveTuner, t.isActiveButtons.isActivePlayAll = e.isActivePlayAll
                    })), mt.$on("clearNotesArray", (function() {
                        t.isActiveNote = [], t.activeNotesURL = [], clearInterval(t.intervalVar), jQuery.ajax({
                            url: t.url,
                            type: "GET",
                            success: function() {
                                window.history.pushState("", "", this.url + "")
                            },
                            error: function() {
                                console.log("There was a problem with the request.")
                            }
                        })
                    })), mt.$on("playAllStrings", (function() {
                        t.playAllStrings()
                    })), mt.$on("showNotesFromControl", (function(e, s) {
                        t.activeNotesURL = e, t.activeNoteWhite = e, t.activeNoteWhiteChar = s, t.notesArr.map((function(t) {
                            return x()(t).forEach((function(i) {
                                var o = i[0];
                                i[1];
                                e.forEach((function(e) {
                                    e === o && (t[o] = s)
                                }))
                            })), t
                        })), t.toggleNoteNames(s), jQuery.ajax({
                            url: "".concat(t.url, "?notes=").concat(t.isActiveNote.join("."), "&highlighted=").concat(f()(t.activeNoteNamesUrl).join("."), "&inverted=").concat(f()(t.activeNoteNamesSecondStateURL).join(".")),
                            type: "GET",
                            success: function(t) {
                                window.history.pushState("", "", this.url + "")
                            },
                            error: function() {
                                console.log("There was a problem with the request.")
                            }
                        })
                    })), mt.$on("clearNotesFromControl", (function() {
                        t.activeNotesURL = [], t.activeNoteWhite = [], t.activeNoteWhiteChar = ""
                    })), mt.$on("soundSwitch", (function(e) {
                        mt.$emit("soundChange", e), t.isActiveButtons.isActiveTuner && t.playSound(t.tunerNote)
                    })), mt.$on("loadSoundFiles", (function(e, s) {
                        t.noteObj = e, t.currentSoundVersion = s
                    }))
                },
                methods: {
                    clickHandle: function(t, e, s, i) {
                        var o = this.activeNoteNamesUrl[s];
                        s === i || o || (this.isActiveNote.filter((function(e) {
                            return e == t
                        }))[0] == t || e || this.notesArr.map((function(e) {
                            return x()(e).forEach((function(s) {
                                var o = s[0];
                                t === o && (e[o] = i)
                            })), e
                        })), delete this.activeNoteNamesSecondStateURL[t]), this.playSound(t, e, s)
                    },
                    shiftHandle: function(t, e, s) {
                        var i = at.selectedNotes[s].noteName,
                            o = at.selectedNotes[s].toggle;
                        this.isActiveNote.filter((function(e) {
                            return e == t
                        }))[0] == t || e || (this.notesArr.map((function(e) {
                            return x()(e).forEach((function(s) {
                                var o = s[0];
                                t === o && (e[o] = i)
                            })), e
                        })), o && (this.activeNoteNamesSecondStateURL = Object(_["a"])({}, Object(T["a"])({}, t, t), this.activeNoteNamesSecondStateURL))), this.playSound(t, e, i)
                    },
                    updateSingleNoteName: function(t, e) {
                        var s = at.selectedNotes[e].noteName;
                        this.notesArr.map((function(e) {
                            return x()(e).forEach((function(i) {
                                var o = i[0];
                                i[1];
                                t === o && (e[o] = s)
                            })), e
                        }))
                    },
                    playSound: function(t, e, s) {
                        var i = this.noteObj[t],
                            o = this.isActiveNote,
                            n = t.substr(0, 1) + 0,
                            r = this.noteObj[n];
                        if (this.tunerNote = n, this.isActiveButtons.isActiveTuner) {
                            clearInterval(this.intervalVar), this.isActiveNote.splice(0, this.isActiveNote.length);
                            var a = r.play();
                            this.previousPlayingSoundId && this.previousPlayingSound.fade(1, 0, 10, this.previousPlayingSoundId), this.previousPlayingSoundId = a, this.previousPlayingSound = i, mt.$emit("shakeString", n), o.push(t.substr(0, 1) + 1);
                            var c = this;
                            this.intervalVar = setInterval((function() {
                                a = r.play(), c.previousPlayingSoundId = a, c.previousPlayingSound = i, mt.$emit("shakeString", n)
                            }), 3150)
                        } else L()() - this.startTimer > 100 && this.previousPlayingSound && this.previousPlayingSound.fade(1, 0, 10, this.previousPlayingSoundId), this.startTimer = L()(), this.previousPlayingSoundId = i.play(), mt.$emit("shakeString", t), this.previousPlayingSound = i;
                        this.isActiveButtons.isActiveMark && (o.filter((function(e) {
                            return e == t
                        }))[0] !== t ? (o.push(t), void 0 !== e && this.toggleNoteNames(s)) : (o.splice(o.indexOf(t), 1), void 0 !== e && this.isMarkedRemoved(s)), this.isActiveNote.length >= 1 ? (this.isActiveButtons.isActiveReset = !0, this.isActiveButtons.isActivePlayAll = !0, jQuery.ajax({
                            url: "".concat(this.url, "?notes=").concat(o.join("."), "&highlighted=").concat(f()(this.activeNoteNamesUrl).join("."), "&inverted=").concat(f()(this.activeNoteNamesSecondStateURL).join(".")),
                            type: "GET",
                            success: function(t) {
                                window.history.pushState("", "", this.url + "")
                            },
                            error: function() {
                                console.log("There was a problem with the request.")
                            }
                        })) : (this.isActiveButtons.isActiveReset = !1, this.isActiveButtons.isActivePlayAll = !1, jQuery.ajax({
                            url: this.url,
                            type: "GET",
                            success: function() {
                                window.history.pushState("", "", this.url + "")
                            },
                            error: function() {
                                console.log("There was a problem with the request.")
                            }
                        })), mt.$emit("resetButtonToggle", this.isActiveButtons))
                    },
                    playAllStrings: function() {
                        var t = this.currentSoundVersion,
                            e = this.isActiveNote,
                            s = this.notesObj = {
                                f: "",
                                h: "",
                                g: "",
                                d: "",
                                a: "",
                                e: ""
                            };

                        function i(t) {
                            var i = e.filter((function(e) {
                                return e.slice(0, 1) === t.slice(0, 1)
                            }));
                            i.sort((function(t, e) {
                                return S()(t.slice(1)) - S()(e.slice(1))
                            })), s[t.slice(0, 1)] = i.pop()
                        }
                        e.reduce((function(t, e) {
                            return i(e), t
                        }), []), this.similarNotesArr = u()(s);
                        var o = this.similarNotesArr.filter((function(t) {
                                return "" !== t
                            })),
                            n = this.noteObj;
                        0 === o.length && (o = ["f1", "h1", "g1", "d1", "a1", "e1"]), o.reverse().forEach((function(e, s, i) {
                            var o = n[e];
                            setTimeout((function() {
                                var s = o.play();
                                mt.$emit("shakeString", e), "electric" === t ? (o.fade(1, .7, 100, s), setTimeout((function() {
                                    o.fade(.7, 0, 3e3, s)
                                }), 100)) : o.fade(1, 0, 3e3, s)
                            }), 50 * s)
                        }))
                    },
                    keyDown: function(t) {
                        t.preventDefault(), t.repeat || !this.keyPressHandle[t.keyCode] || t.shiftKey ? !t.repeat && this.keyPressHandle[t.keyCode] && t.shiftKey ? this.keyPressShiftHandle[t.keyCode] ? this.playSound(this.keyPressShiftHandle[t.keyCode]) : this.keyPressShiftHandle[t.code] && this.playSound(this.keyPressShiftHandle[t.code]) : 32 === t.keyCode && (t.preventDefault(), this.playAllStrings()) : this.playSound(this.keyPressHandle[t.keyCode])
                    },
                    toggleNoteNames: function(t) {
                        var e = this;
                        switch (t) {
                            case "des":
                                delete this.activeNoteNamesUrl["cis"];
                                break;
                            case "es":
                                delete this.activeNoteNamesUrl["dis"];
                                break;
                            case "as":
                                delete this.activeNoteNamesUrl["gis"];
                                break;
                            case "ges":
                                delete this.activeNoteNamesUrl["fis"];
                                break;
                            case "b":
                                delete this.activeNoteNamesUrl["ais"];
                                break;
                            case "cis":
                            case "dis":
                            case "gis":
                            case "fis":
                            case "ais":
                                this.isActiveNote.map((function(s) {
                                    e.notesArr.map((function(i) {
                                        x()(i).forEach((function(i) {
                                            var o = i[0],
                                                n = i[1];
                                            o === s && n === t && (e.activeNoteNamesUrl = Object(_["a"])({}, Object(T["a"])({}, t, t), e.activeNoteNamesUrl))
                                        }))
                                    }))
                                }));
                                break;
                            default:
                                break
                        }
                    },
                    isMarkedRemoved: function(t) {
                        var e = this,
                            s = this.isActiveNote.filter((function(t) {
                                return e.activeNoteWhite.includes(t)
                            }));
                        s.length < 1 && delete this.activeNoteNamesUrl[t]
                    },
                    extractHTML: function(t) {
                        var e = u()(this.notesHTML[t]).map((function(t) {
                            return t.html
                        }))[0];
                        return e
                    },
                    backButtonFunctionalityURL: function() {
                        window.location.href = document.referrer
                    }
                }
            },
            lt = ct,
            ht = (s("211d"), Object(w["a"])(lt, y, A, !1, null, null, null)),
            ut = ht.exports,
            dt = {
                name: "App",
                components: {
                    Neck: ut,
                    Buttons: j
                }
            },
            ft = dt,
            gt = (s("5c0b"), Object(w["a"])(ft, o, n, !1, null, null, null)),
            vt = gt.exports,
            wt = s("9483");
        Object(wt["a"])(languageSetup.classicGuitar.pathServiceWorkers, {
            ready: function() {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            },
            cached: function() {
                console.log("Content has been cached for offline use.")
            },
            updated: function() {
                console.log("New content is available; please refresh.")
            },
            offline: function() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function(t) {
                console.error("Error during service worker registration:", t)
            }
        });
        var bt = s("8c4f");
        s.d(e, "serverBus", (function() {
            return mt
        })), i["a"].use(bt["a"]), i["a"].config.productionTip = !1;
        var mt = new i["a"],
            pt = new bt["a"]({
                mode: "history",
                path: "*"
            });
        new i["a"]({
            router: pt,
            render: function(t) {
                return t(vt)
            }
        }).$mount("#classicGuitar")
    },
    "5c0b": function(t, e, s) {
        "use strict";
        var i = s("5e27"),
            o = s.n(i);
        o.a
    },
    "5e27": function(t, e, s) {},
    "607f": function(t, e, s) {},
    6599: function(t, e, s) {
        "use strict";
        var i = s("345c"),
            o = s.n(i);
        o.a
    },
    7004: function(t, e, s) {},
    "8f5a": function(t, e, s) {
        "use strict";
        var i = s("607f"),
            o = s.n(i);
        o.a
    },
    d41a: function(t, e, s) {}
});