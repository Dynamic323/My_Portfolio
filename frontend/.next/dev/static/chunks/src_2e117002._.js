(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Navbar = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const navItems = [
        {
            name: "About",
            path: "/",
            icon: "fa-user"
        },
        {
            name: "Resume",
            path: "/resume",
            icon: "fa-file-alt"
        },
        {
            name: "Portfolio",
            path: "/portfolio",
            icon: "fa-briefcase"
        },
        {
            name: "Blog",
            path: "/blog",
            icon: "fa-blog"
        },
        {
            name: "Contact",
            path: "/contact",
            icon: "fa-paper-plane"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "navbar floating-nav",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "navbar-list",
            children: navItems.map((item)=>{
                const isActive = pathname === item.path;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "navbar-item",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.path,
                        className: `navbar-link ${isActive ? "active" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "desktop-nav-label",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 26,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "nav-icon-container",
                                whileTap: {
                                    scale: 0.9
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10
                                },
                                children: [
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                layoutId: "active-pill",
                                                className: "active-indicator",
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.jsx",
                                                lineNumber: 34,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: -35
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                className: "active-label",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.jsx",
                                                lineNumber: 39,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "icon-wrapper",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: `fas ${item.icon}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 50,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 49,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 27,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 25,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, item.name, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 24,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Pagebg.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function Pagebg({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "about  active",
        "data-page": "about",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "h2 article-title",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/Pagebg.jsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Pagebg.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Pagebg.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Pagebg;
const __TURBOPACK__default__export__ = Pagebg;
var _c;
__turbopack_context__.k.register(_c, "Pagebg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function Modal({ project, onClose }) {
    _s();
    if (!project) return null;
    const [mainImage, setMainImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(project.imgSrc);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "close-button",
                    onClick: onClose,
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.jsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "main-image-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: mainImage,
                                    alt: project.alt,
                                    className: "main-image",
                                    onLoad: (e)=>e.target.classList.add("loaded"),
                                    onError: (e)=>e.target.classList.add("loaded")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modal.jsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skeleton-loader"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modal.jsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modal.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "project-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "modal-title",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modal.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "modal-category",
                                    children: project.category
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modal.jsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "modal-description",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modal.jsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "languages-container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Languages used:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modal.jsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "languages-list",
                                            children: project.languages.map((lang, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "language-tag",
                                                    children: lang
                                                }, index, false, {
                                                    fileName: "[project]/src/components/Modal.jsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modal.jsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Modal.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "button-container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.url === "" || !project.url ? "https://dy-commingsoon.vercel.app" : project.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "project-button visit-button",
                                            children: [
                                                "Visit Project",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Modal.jsx",
                                                            lineNumber: 61,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "15 3 21 3 21 9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Modal.jsx",
                                                            lineNumber: 62,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "10",
                                                            y1: "14",
                                                            x2: "21",
                                                            y2: "3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Modal.jsx",
                                                            lineNumber: 63,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Modal.jsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Modal.jsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.githubUrl === "" || !project.githubUrl ? "https://github.com/Dynamic323" : project.githubUrl,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "project-button github-button",
                                            children: [
                                                "View on GitHub",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modal.jsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Modal.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Modal.jsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Modal.jsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Modal.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modal.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                project.additionalImages && project.additionalImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "additional-images",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Project Screenshots:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.jsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "image-scroll-container",
                            children: project.additionalImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        overflow: "hidden"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: image,
                                            alt: `Screenshot ${index + 1}`,
                                            onClick: ()=>setMainImage(image),
                                            className: "gallery-image",
                                            onLoad: (e)=>e.target.classList.add("loaded"),
                                            onError: (e)=>e.target.classList.add("loaded")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modal.jsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skeleton-loader"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modal.jsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/Modal.jsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.jsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modal.jsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modal.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Modal.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(Modal, "AkhY7Z5UV5zJSS8a078TVhOe5uY=");
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Project_data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/assets/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__ = __turbopack_context__.i("[project]/src/assets/images.js [app-client] (ecmascript) <export default as images>");
;
const portfolio = [
    "All",
    "Frontend",
    "Backend",
    "Mobile",
    "Fullstack"
];
const projects = [
    {
        title: "Coco Mailer",
        category: "Fullstack",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].cocomailer,
        url: "https://coco-mailer.vercel.app/",
        alt: "Coco Mailer",
        description: "An email delivery and automation tool under the CocoBase ecosystem. My Role was redesign the UI We Had before to this curent version, and fix  some bugs to improve Smooth connections.",
        languages: [
            "React",
            "Fast Api",
            "Tailwind CSS"
        ],
        additionalImages: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].cocomailer,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].cocomailer2,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].cocomailer3
        ]
    },
    {
        title: "Movieo",
        category: "Fullstack",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].movie1,
        alt: "movieo",
        description: "A full-stack movie website built with React and Laravel, allowing users to stream trailers and download the latest movies. It also include an Admin pannel where Admin can Post Movies that will be shown on the website. ",
        languages: [
            "React",
            "Laravel",
            "HTML",
            "Tailwind CSS"
        ],
        githubUrl: "https://github.com/Dynamic323/Dy_Em-movie",
        additionalImages: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].movie1,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].movie2,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].movie3,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].movie4,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].movie5,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].movie6,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].movie7,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].movie8
        ]
    },
    {
        title: "DyshareX",
        category: "Fullstack",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].dysharex1,
        alt: "DyshareX",
        url: "https://dysharex.pxxl.click/",
        description: "A modern file and code sharing platform with instant link generation, privacy controls, analytics, and custom slugs.",
        languages: [
            "React",
            "Node.js",
            "Firebase",
            "Tailwind CSS"
        ],
        additionalImages: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].dysharex1,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].dysharex2,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].dysharex3
        ]
    },
    {
        title: "Net Downloader",
        category: "Frontend",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].net_downloader1,
        alt: "netdownloader",
        url: "https://net-downloader-em.vercel.app/",
        description: "A React web app that lets users download videos from YouTube, Facebook, ig, and TikTok. Supports batch downloads via pasted URLs.",
        languages: [
            "React",
            "CSS"
        ],
        additionalImages: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].net_downloader1,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].net_downloader2
        ]
    },
    {
        title: "Replico",
        category: "Fullstack",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].replico1,
        alt: "Replico",
        description: "A website downloader powered by Puppeteer. Allows users to download entire websites easily with authentication via Firebase.",
        languages: [
            "React",
            "Node.js",
            "Express",
            "Coco Base"
        ]
    },
    {
        title: "CocoBase",
        category: "Fullstack",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].cocobase1,
        url: "https://cocobaselanding.pxxl.click/",
        alt: "CocoBase",
        // description:
        //   "A Backend-as-a-Service (BaaS) platform. I worked as co-founder and front-end engineer, integrating frontend with backend and building stunning visuals.",
        description: "A Backend-as-a-Service (BaaS) platform. I'm working as front-end engineer, integrating frontend with backend and building stunning visuals.",
        languages: [
            "Next.js",
            "Node.js",
            "Firebase",
            "Tailwind CSS"
        ]
    },
    {
        title: "X-Payee",
        category: "Fullstack",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].xpay,
        alt: "X-Payee",
        url: "https://www.x-payee.com/",
        description: "An investment and payment platform built in collaboration with senior backend developer Ace. Implemented complex investment logic and a seamless UI.",
        languages: [
            "React",
            "Express",
            "Node.js",
            "MongoDB"
        ],
        additionalImages: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].xpay,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].xpay2
        ]
    },
    // {
    //   title: "Theograph",
    //   category: "Backend",
    //   imgSrc: images.theograph1,
    //   alt: "Theograph",
    //   description:
    //     "An automation tool that generates GitHub contribution graph commits automatically. Built for developers to keep their graph consistent.",
    //   languages: ["Node.js", "Express", "GitHub API"],
    // },
    {
        title: "Instantly Analytics Dashboard",
        category: "Fullstack",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].instantly,
        url: "https://instantly-analytics-project.vercel.app/",
        alt: "Instantly Analytics",
        description: "A React + Node.js analytics dashboard visualizing API data and complex metrics. Focused on handling large datasets and dynamic UI updates.",
        languages: [
            "React",
            "Node.js",
            "Chart.js",
            "Tailwind CSS"
        ]
    },
    {
        title: "Seasonal Greetings",
        category: "Fullstack",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].seasonalW1,
        alt: "Seasonal Greetings",
        url: "https://seeasonal-wishes-fnd.vercel.app/",
        description: "A scheduling platform where users can create personalized festival greetings that unlock automatically on the event date.",
        languages: [
            "React",
            "Firebase",
            "Tailwind CSS"
        ],
        additionalImages: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].seasonalW1,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].seasonalW2
        ]
    },
    {
        title: "Emi Aluge Investment",
        category: "Frontend",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].emialuge3,
        alt: "Emi Aluge Investment",
        url: "https://emialugeinvestment.com/",
        description: "Official website for Emi Aluge Investment — a company specializing in Pure Water and Premium Bakery Water products.",
        languages: [
            "React",
            "CSS",
            "HTML"
        ],
        additionalImages: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].emialuge1,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].emialuge2,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].emialuge3
        ]
    },
    {
        title: "Sunwave Clone",
        category: "Fullstack",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].sunwaveclone1,
        alt: "Sunwave Clone",
        githubUrl: "https://github.com/Dynamic323/",
        description: "A Sunwave clone web app recreated using PHP for learning and practice.",
        languages: [
            "PHP",
            "HTML",
            "CSS"
        ],
        additionalImages: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].sunwaveclone1,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].sunwaveclone2,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].sunwaveclone3
        ]
    },
    {
        title: "Blog Website",
        category: "Backend",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].laravelblog,
        alt: "Blog",
        githubUrl: "https://github.com/Dynamic323/laravel_blog-web",
        description: "A Laravel blog website built while learning the framework. Implements authentication and CRUD features.",
        languages: [
            "Laravel",
            "Tailwind CSS"
        ]
    },
    {
        title: "CRUD with PHP",
        category: "Frontend",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].crud,
        alt: "CRUD App",
        description: "A simple CRUD application built using pure PHP and Bootstrap.",
        languages: [
            "HTML",
            "PHP",
            "Bootstrap"
        ]
    },
    {
        title: "MyClassList",
        category: "Fullstack",
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].myclasslist1,
        alt: "MyClassList",
        description: "A student management platform where users can manage their own student lists securely, with authentication and CRUD features.",
        languages: [
            "Laravel",
            "Tailwind CSS"
        ],
        additionalImages: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].myclasslist1,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].myclasslist2
        ]
    }
];
const __TURBOPACK__default__export__ = projects;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Portfolio.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagebg$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Pagebg.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/assets/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Project_data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Project_data.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Portfolio() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDropdownVisible, setIsDropdownVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleDropdown = ()=>{
        setIsDropdownVisible(!isDropdownVisible);
    };
    const handleCurrent = (category)=>{
        setCurrent(category);
    };
    const handelModal = (item)=>{
        setSelectedProject(item);
    };
    const portfolio = [
        "All",
        "Frontend",
        "Fullstack",
        "Mobile",
        "Backend"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/Portfolio.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagebg$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Portfolio",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "projects",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "filter-list",
                                children: portfolio.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "filter-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: current === item ? "active" : "",
                                            onClick: ()=>handleCurrent(item),
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Portfolio.jsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this)
                                    }, item, false, {
                                        fileName: "[project]/src/pages/Portfolio.jsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Portfolio.jsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-select-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `filter-select ${isDropdownVisible ? "active" : ""}`,
                                        onClick: toggleDropdown,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "select-value",
                                                children: current
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Portfolio.jsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "select-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ion-icon", {
                                                    name: "chevron-down"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Portfolio.jsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Portfolio.jsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Portfolio.jsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "select-list",
                                        children: portfolio.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "select-item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleCurrent(item),
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Portfolio.jsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this)
                                            }, item, false, {
                                                fileName: "[project]/src/pages/Portfolio.jsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/Portfolio.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/Portfolio.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "project-list",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Project_data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].filter((project)=>current === "All" || project.category === current).map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "project-item active",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                    className: "project-img",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handelModal(project),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "project-item-icon-box",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ion-icon", {
                                                                    name: "eye-outline"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/Portfolio.jsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/Portfolio.jsx",
                                                                lineNumber: 75,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Portfolio.jsx",
                                                            lineNumber: 74,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: `${project.imgSrc}`,
                                                            alt: project.alt,
                                                            loading: "lazy",
                                                            onLoad: (e)=>e.target.classList.add("loaded"),
                                                            onError: (e)=>e.target.classList.add("loaded")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Portfolio.jsx",
                                                            lineNumber: 79,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "project-skeleton-loader"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Portfolio.jsx",
                                                            lineNumber: 86,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Portfolio.jsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "project-title",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Portfolio.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `project-description  `,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            project.description.split(" ").slice(0, 5).join(" "),
                                                            "...",
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/Portfolio.jsx",
                                                        lineNumber: 91,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Portfolio.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/Portfolio.jsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/src/pages/Portfolio.jsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Portfolio.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Project_data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].filter((project)=>current === "All" || project.category === current).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "no-projects",
                                children: "No projects found for the selected category."
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Portfolio.jsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Portfolio.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        project: selectedProject,
                        onClose: ()=>setSelectedProject(null)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Portfolio.jsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/Portfolio.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Portfolio, "bBch17QXfPBbYGdOwYtWpgTnMxY=");
_c = Portfolio;
const __TURBOPACK__default__export__ = Portfolio;
var _c;
__turbopack_context__.k.register(_c, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2e117002._.js.map