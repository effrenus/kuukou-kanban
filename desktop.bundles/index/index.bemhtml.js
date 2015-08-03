(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            } else if (__$t === "js") {
                var __$r = __$b2(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            }
        } else if (__$t === "board") {
            var __$t = $$elem;
            if (__$t === "radio") {
                return {
                    type: "radio",
                    value: __$ctx.ctx.value,
                    id: __$ctx.ctx.id || __$ctx.ctx.name,
                    name: __$ctx.ctx.name
                };
            } else if (__$t === "checkbox") {
                return {
                    type: "checkbox",
                    value: __$ctx.ctx.value || "",
                    id: __$ctx.ctx.name,
                    name: __$ctx.ctx.name
                };
            } else if (__$t === "label") {
                return {
                    "for": __$ctx.ctx.for
                };
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 1) === 0) {
                return [ function __$lb__$0() {
                    var __$r__$1;
                    var __$l0__$2 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1;
                    __$r__$1 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$2;
                    return __$r__$1;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "flight-details") {
            if ($$elem && $$elem.match(/time|destination|flight|boarding|counter|gate|remarks|description/)) {
                var __$r = __$b36(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if (!$$elem) {
                var __$r = Object.keys(__$ctx.ctx.data).map(function(name) {
                    return {
                        elem: name,
                        mix: {
                            elem: "row"
                        },
                        content: this.ctx.data[name]
                    };
                }.bind(__$wrapThis(__$ctx)));
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "board") {
            if ($$elem && $$elem.match(/time|destination|flight|boarding|counter|gate|remarks/)) {
                var __$r = __$b38(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$t = $$elem;
            if (__$t === "row") {
                return [ {
                    elem: "label",
                    "for": "row" + __$ctx.ctx.num,
                    content: [ __$ctx.ctx.content, {
                        block: "flight-details",
                        mix: {
                            block: "board",
                            elem: "description"
                        },
                        data: __$ctx.ctx.data
                    } ]
                } ];
            } else if (__$t === "col-title") {
                var __$r = __$b40(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            } else if (__$t === "rows") {
                return [ {
                    elem: "checkbox",
                    name: "f_delayed",
                    value: 1
                }, __$ctx.ctx.content ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b44(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 4) === 0) {
                            var __$r = __$b45(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b46(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
        }
        var __$r = __$b47(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        if ($$block === "board" && !$$elem) {
            return true;
        }
        return undefined;
    } else if (__$t === "mix") {
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 8) === 0) {
            var __$r = __$b52(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b53(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b55(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b56(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_ieCommented"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b2(__$ctx, __$ref) {
    var attrs__$15 = {};
    if (__$ctx.ctx.url) {
        attrs__$15.src = __$ctx.ctx.url;
    } else if (__$ctx._nonceCsp) {
        attrs__$15.nonce = __$ctx._nonceCsp;
    }
    return attrs__$15;
}

function __$b36(__$ctx, __$ref) {
    var titles__$11 = {
        time: "Время вылета",
        destination: "Пункт назначения",
        flight: "Рейс",
        boarding: "Время посадки",
        counter: "Стойка регистрации",
        gate: "Выход",
        remarks: "Примечания",
        description: "Описание"
    };
    if (!__$ctx.ctx.content) {
        return;
    }
    return [ {
        elem: "title",
        content: titles__$11[$$elem] + ":"
    }, {
        elem: "content",
        content: __$ctx.ctx.content
    } ];
}

function __$b38(__$ctx, __$ref) {
    var MAX_LETTERS__$12 = 5;
    switch ($$elem) {
      case "time":
      case "counter":
      case "boarding":
        MAX_LETTERS__$12 = 5;
        break;

      case "destination":
      case "remarks":
        MAX_LETTERS__$12 = 11;
        break;

      case "flight":
        MAX_LETTERS__$12 = 8;
        break;

      case "gate":
      default:
        MAX_LETTERS__$12 = 3;
    }
    var letters__$13 = String(__$ctx.ctx.content).split("").slice(0, MAX_LETTERS__$12);
    letters__$13 = letters__$13.concat(new Array(MAX_LETTERS__$12 - letters__$13.length + 1).join("-").split("-"));
    return letters__$13.map(function(letter) {
        return {
            elem: "cell",
            content: {
                elem: "letter",
                content: letter
            }
        };
    });
}

function __$b40(__$ctx, __$ref) {
    var content__$14 = __$ctx.ctx.content;
    if (typeof __$ctx.ctx.content === "object") {
        content__$14 = content__$14.map(function(item, i) {
            return {
                elem: "subtitle",
                mods: {
                    main: i == content__$14.length - 1
                },
                content: item
            };
        });
    }
    return content__$14;
}

function __$b44(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx;
    __$ctx._nonceCsp = ctx__$3.nonce;
    var __$r__$5;
    var __$l0__$6 = $$mode;
    $$mode = "";
    var __$l1__$7 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$3.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, ctx__$3.uaCompatible === false ? "" : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: ctx__$3.uaCompatible || "IE=edge"
                }
            }, {
                tag: "title",
                content: ctx__$3.title
            }, {
                block: "ua",
                attrs: {
                    nonce: ctx__$3.nonce
                }
            }, ctx__$3.head, ctx__$3.styles, ctx__$3.favicon ? {
                elem: "favicon",
                url: ctx__$3.favicon
            } : "" ]
        }, ctx__$3 ]
    } ];
    var __$r__$9;
    var __$l2__$10 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$9 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$10;
    __$r__$5 = __$r__$9;
    $$mode = __$l0__$6;
    __$ctx.ctx = __$l1__$7;
    return;
}

function __$b45(__$ctx, __$ref) {
    var url__$16 = __$ctx.ctx.url;
    var __$r__$18;
    var __$l0__$19 = $$mode;
    $$mode = "";
    var __$l1__$20 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$16 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$22;
    var __$l2__$23 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$22 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$23;
    __$r__$18 = __$r__$22;
    $$mode = __$l0__$19;
    __$ctx.ctx = __$l1__$20;
    return;
}

function __$b46(__$ctx, __$ref) {
    var ie__$24 = __$ctx.ctx.ie, hideRule__$25 = !ie__$24 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$24 === "!IE" ? [ ie__$24, "<!-->", "<!--" ] : [ ie__$24, "", "" ];
    var __$r__$27;
    var __$l0__$28 = $$mode;
    $$mode = "";
    var __$l3__$29 = __$ctx.ctx;
    var __$l1__$30 = __$l3__$29._ieCommented;
    __$l3__$29._ieCommented = true;
    var __$l2__$31 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$25[0] + "]>" + hideRule__$25[1], __$ctx.ctx, hideRule__$25[2] + "<![endif]-->" ];
    __$r__$27 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$28;
    __$l3__$29._ieCommented = __$l1__$30;
    __$ctx.ctx = __$l2__$31;
    return;
}

function __$b47(__$ctx, __$ref) {
    var BEM_INTERNAL__$32 = __$ctx.BEM.INTERNAL, ctx__$33 = __$ctx.ctx, isBEM__$34, tag__$35, res__$36;
    var __$r__$38;
    var __$l0__$39 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$40 = $$block;
    var __$r__$42;
    var __$l1__$43 = $$mode;
    $$mode = "tag";
    __$r__$42 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$43;
    tag__$35 = __$r__$42;
    typeof tag__$35 !== "undefined" || (tag__$35 = ctx__$33.tag);
    typeof tag__$35 !== "undefined" || (tag__$35 = "div");
    if (tag__$35) {
        var jsParams__$44, js__$45;
        if (vBlock__$40 && ctx__$33.js !== false) {
            var __$r__$46;
            var __$l2__$47 = $$mode;
            $$mode = "js";
            __$r__$46 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$47;
            js__$45 = __$r__$46;
            js__$45 = js__$45 ? __$ctx.extend(ctx__$33.js, js__$45 === true ? {} : js__$45) : ctx__$33.js === true ? {} : ctx__$33.js;
            js__$45 && ((jsParams__$44 = {})[BEM_INTERNAL__$32.buildClass(vBlock__$40, ctx__$33.elem)] = js__$45);
        }
        __$ctx._str += "<" + tag__$35;
        var __$r__$48;
        var __$l3__$49 = $$mode;
        $$mode = "bem";
        __$r__$48 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$49;
        isBEM__$34 = __$r__$48;
        typeof isBEM__$34 !== "undefined" || (isBEM__$34 = typeof ctx__$33.bem !== "undefined" ? ctx__$33.bem : ctx__$33.block || ctx__$33.elem);
        var __$r__$51;
        var __$l4__$52 = $$mode;
        $$mode = "cls";
        __$r__$51 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$52;
        var cls__$50 = __$r__$51;
        cls__$50 || (cls__$50 = ctx__$33.cls);
        var addJSInitClass__$53 = ctx__$33.block && jsParams__$44 && !ctx__$33.elem;
        if (isBEM__$34 || cls__$50) {
            __$ctx._str += ' class="';
            if (isBEM__$34) {
                __$ctx._str += BEM_INTERNAL__$32.buildClasses(vBlock__$40, ctx__$33.elem, ctx__$33.elemMods || ctx__$33.mods);
                var __$r__$55;
                var __$l5__$56 = $$mode;
                $$mode = "mix";
                __$r__$55 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$56;
                var mix__$54 = __$r__$55;
                ctx__$33.mix && (mix__$54 = mix__$54 ? [].concat(mix__$54, ctx__$33.mix) : ctx__$33.mix);
                if (mix__$54) {
                    var visited__$57 = {}, visitedKey__$58 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$57[visitedKey__$58(vBlock__$40, $$elem)] = true;
                    __$ctx.isArray(mix__$54) || (mix__$54 = [ mix__$54 ]);
                    for (var i__$59 = 0; i__$59 < mix__$54.length; i__$59++) {
                        var mixItem__$60 = mix__$54[i__$59], hasItem__$61 = mixItem__$60.block && (vBlock__$40 !== ctx__$33.block || mixItem__$60.block !== vBlock__$40) || mixItem__$60.elem, mixBlock__$62 = mixItem__$60.block || mixItem__$60._block || $$block, mixElem__$63 = mixItem__$60.elem || mixItem__$60._elem || $$elem;
                        hasItem__$61 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$32[hasItem__$61 ? "buildClasses" : "buildModsClasses"](mixBlock__$62, mixItem__$60.elem || mixItem__$60._elem || (mixItem__$60.block ? undefined : $$elem), mixItem__$60.elemMods || mixItem__$60.mods);
                        if (mixItem__$60.js) {
                            (jsParams__$44 || (jsParams__$44 = {}))[BEM_INTERNAL__$32.buildClass(mixBlock__$62, mixItem__$60.elem)] = mixItem__$60.js === true ? {} : mixItem__$60.js;
                            addJSInitClass__$53 || (addJSInitClass__$53 = mixBlock__$62 && !mixItem__$60.elem);
                        }
                        if (hasItem__$61 && !visited__$57[visitedKey__$58(mixBlock__$62, mixElem__$63)]) {
                            visited__$57[visitedKey__$58(mixBlock__$62, mixElem__$63)] = true;
                            var __$r__$65;
                            var __$l6__$66 = $$mode;
                            $$mode = "mix";
                            var __$l7__$67 = $$block;
                            $$block = mixBlock__$62;
                            var __$l8__$68 = $$elem;
                            $$elem = mixElem__$63;
                            __$r__$65 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$66;
                            $$block = __$l7__$67;
                            $$elem = __$l8__$68;
                            var nestedMix__$64 = __$r__$65;
                            if (nestedMix__$64) {
                                for (var j__$69 = 0; j__$69 < nestedMix__$64.length; j__$69++) {
                                    var nestedItem__$70 = nestedMix__$64[j__$69];
                                    if (!nestedItem__$70.block && !nestedItem__$70.elem || !visited__$57[visitedKey__$58(nestedItem__$70.block, nestedItem__$70.elem)]) {
                                        nestedItem__$70._block = mixBlock__$62;
                                        nestedItem__$70._elem = mixElem__$63;
                                        mix__$54.splice(i__$59 + 1, 0, nestedItem__$70);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$50 && (__$ctx._str += isBEM__$34 ? " " + cls__$50 : cls__$50);
            __$ctx._str += addJSInitClass__$53 ? ' i-bem"' : '"';
        }
        if (isBEM__$34 && jsParams__$44) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$44)) + '"';
        }
        var __$r__$72;
        var __$l9__$73 = $$mode;
        $$mode = "attrs";
        __$r__$72 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$73;
        var attrs__$71 = __$r__$72;
        attrs__$71 = __$ctx.extend(attrs__$71, ctx__$33.attrs);
        if (attrs__$71) {
            var name__$74, attr__$75;
            for (name__$74 in attrs__$71) {
                attr__$75 = attrs__$71[name__$74];
                if (typeof attr__$75 === "undefined") continue;
                __$ctx._str += " " + name__$74 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$75) ? attr__$75 : __$ctx.reapply(attr__$75)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$35)) {
        __$ctx._str += "/>";
    } else {
        tag__$35 && (__$ctx._str += ">");
        var __$r__$77;
        var __$l10__$78 = $$mode;
        $$mode = "content";
        __$r__$77 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$78;
        var content__$76 = __$r__$77;
        if (content__$76 || content__$76 === 0) {
            isBEM__$34 = vBlock__$40 || $$elem;
            var __$r__$79;
            var __$l11__$80 = $$mode;
            $$mode = "";
            var __$l12__$81 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$82 = __$ctx.position;
            __$ctx.position = isBEM__$34 ? 1 : __$ctx.position;
            var __$l14__$83 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$34 ? 1 : __$ctx._listLength;
            var __$l15__$84 = __$ctx.ctx;
            __$ctx.ctx = content__$76;
            __$r__$79 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$80;
            __$ctx._notNewList = __$l12__$81;
            __$ctx.position = __$l13__$82;
            __$ctx._listLength = __$l14__$83;
            __$ctx.ctx = __$l15__$84;
        }
        tag__$35 && (__$ctx._str += "</" + tag__$35 + ">");
    }
    res__$36 = __$ctx._str;
    __$r__$38 = undefined;
    __$ctx._str = __$l0__$39;
    __$ctx._buf.push(res__$36);
    return;
}

function __$b52(__$ctx, __$ref) {
    var __$r__$86;
    var __$l0__$87 = $$mode;
    $$mode = "";
    var __$l1__$88 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$90;
    var __$l2__$91 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$90 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$91;
    __$r__$86 = __$r__$90;
    $$mode = __$l0__$87;
    __$ctx.ctx = __$l1__$88;
    return;
}

function __$b53(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$92 = __$ctx.ctx;
    if (ctx__$92 && ctx__$92 !== true || ctx__$92 === 0) {
        __$ctx._str += ctx__$92 + "";
    }
    return;
}

function __$b54(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b55(__$ctx, __$ref) {
    var ctx__$93 = __$ctx.ctx, len__$94 = ctx__$93.length, i__$95 = 0, prevPos__$96 = __$ctx.position, prevNotNewList__$97 = __$ctx._notNewList;
    if (prevNotNewList__$97) {
        __$ctx._listLength += len__$94 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$94;
    }
    __$ctx._notNewList = true;
    while (i__$95 < len__$94) (function __$lb__$98() {
        var __$r__$99;
        var __$l0__$100 = __$ctx.ctx;
        __$ctx.ctx = ctx__$93[i__$95++];
        __$r__$99 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$100;
        return __$r__$99;
    })();
    prevNotNewList__$97 || (__$ctx.position = prevPos__$96);
    return;
}

function __$b56(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$101 = __$ctx.ctx.block, vElem__$102 = __$ctx.ctx.elem, block__$103 = __$ctx._currBlock || $$block;
    var __$r__$105;
    var __$l0__$106 = $$mode;
    $$mode = "default";
    var __$l1__$107 = $$block;
    $$block = vBlock__$101 || (vElem__$102 ? block__$103 : undefined);
    var __$l2__$108 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$101 || vElem__$102 ? undefined : block__$103;
    var __$l3__$109 = $$elem;
    $$elem = vElem__$102;
    var __$l4__$110 = $$mods;
    $$mods = vBlock__$101 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$111 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$105 = undefined;
    $$mode = __$l0__$106;
    $$block = __$l1__$107;
    __$ctx._currBlock = __$l2__$108;
    $$elem = __$l3__$109;
    $$mods = __$l4__$110;
    $$elemMods = __$l5__$111;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "favicon") {
            return "link";
        } else if (__$t === "link") {
            return "link";
        } else if (__$t === "meta") {
            return "meta";
        } else if (__$t === "head") {
            return "head";
        }
        if (!$$elem) {
            return "body";
        }
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        }
    } else if (__$t === "flight-details") {
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "board") {
        if ($$elem && $$elem.match(/time|destination|flight|boarding|counter|gate|remarks/)) {
            return "span";
        }
        var __$t = $$elem;
        if (__$t === "letter") {
            return "i";
        } else if (__$t === "row") {
            return "span";
        } else if (__$t === "radio") {
            return "input";
        } else if (__$t === "checkbox") {
            return "input";
        } else if (__$t === "label") {
            return "label";
        } else if (__$t === "header") {
            return "header";
        }
        if (!$$elem) {
            return "section";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    }
    return undefined;
    return __$ref;
}

function __$wrapThis(ctx) {
    ctx._mode = $$mode;
    ctx.block = $$block;
    ctx.elem = $$elem;
    ctx.elemMods = $$elemMods;
    ctx.mods = $$mods;
    return ctx;
}

;
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);