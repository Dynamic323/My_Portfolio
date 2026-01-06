(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/frontend/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}),
"[project]/frontend/node_modules/next/dist/client/script.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if (typeof window !== 'undefined') {
        let head = document.head;
        stylesheets.forEach((stylesheet)=>{
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = stylesheet;
            head.appendChild(link);
        });
    }
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    let { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    // if a nonce is explicitly passed to the script tag, favor that over the automatic handling
    nonce = restProps.nonce || nonce;
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps,
                    nonce
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript({
                ...props,
                nonce
            });
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map
}),
"[project]/frontend/node_modules/ua-parser-js/src/main/ua-parser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UAParser",
    ()=>UAParser
]);
// Generated ESM version of ua-parser-js
// DO NOT EDIT THIS FILE!
// Source: /src/main/ua-parser.js
/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v2.0.7
   Copyright © 2012-2025 Faisal Salman <f@faisalman.com>
   AGPLv3 License */ /*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://uaparser.dev
   Source : https://github.com/faisalman/ua-parser-js */ /////////////////////////////////////////////////////////////////////////////////
/* jshint esversion: 6 */ /* globals window */ //////////////
// Constants
/////////////
var LIBVERSION = '2.0.7', UA_MAX_LENGTH = 500, USER_AGENT = 'user-agent', EMPTY = '', UNKNOWN = '?', TYPEOF = {
    FUNCTION: 'function',
    OBJECT: 'object',
    STRING: 'string',
    UNDEFINED: 'undefined'
}, // properties
BROWSER = 'browser', CPU = 'cpu', DEVICE = 'device', ENGINE = 'engine', OS = 'os', RESULT = 'result', NAME = 'name', TYPE = 'type', VENDOR = 'vendor', VERSION = 'version', ARCHITECTURE = 'architecture', MAJOR = 'major', MODEL = 'model', // device types
CONSOLE = 'console', MOBILE = 'mobile', TABLET = 'tablet', SMARTTV = 'smarttv', WEARABLE = 'wearable', XR = 'xr', EMBEDDED = 'embedded', // browser types
INAPP = 'inapp', // client hints
BRANDS = 'brands', FORMFACTORS = 'formFactors', FULLVERLIST = 'fullVersionList', PLATFORM = 'platform', PLATFORMVER = 'platformVersion', BITNESS = 'bitness', CH = 'sec-ch-ua', CH_FULL_VER_LIST = CH + '-full-version-list', CH_ARCH = CH + '-arch', CH_BITNESS = CH + '-' + BITNESS, CH_FORM_FACTORS = CH + '-form-factors', CH_MOBILE = CH + '-' + MOBILE, CH_MODEL = CH + '-' + MODEL, CH_PLATFORM = CH + '-' + PLATFORM, CH_PLATFORM_VER = CH_PLATFORM + '-version', CH_ALL_VALUES = [
    BRANDS,
    FULLVERLIST,
    MOBILE,
    MODEL,
    PLATFORM,
    PLATFORMVER,
    ARCHITECTURE,
    FORMFACTORS,
    BITNESS
], // device vendors
AMAZON = 'Amazon', APPLE = 'Apple', ASUS = 'ASUS', BLACKBERRY = 'BlackBerry', GOOGLE = 'Google', HUAWEI = 'Huawei', LENOVO = 'Lenovo', HONOR = 'Honor', LG = 'LG', MICROSOFT = 'Microsoft', MOTOROLA = 'Motorola', NVIDIA = 'Nvidia', ONEPLUS = 'OnePlus', OPPO = 'OPPO', SAMSUNG = 'Samsung', SHARP = 'Sharp', SONY = 'Sony', XIAOMI = 'Xiaomi', ZEBRA = 'Zebra', // browsers
CHROME = 'Chrome', CHROMIUM = 'Chromium', CHROMECAST = 'Chromecast', EDGE = 'Edge', FIREFOX = 'Firefox', OPERA = 'Opera', FACEBOOK = 'Facebook', SOGOU = 'Sogou', PREFIX_MOBILE = 'Mobile ', SUFFIX_BROWSER = ' Browser', // os
WINDOWS = 'Windows';
var isWindow = typeof window !== TYPEOF.UNDEFINED, NAVIGATOR = isWindow && window.navigator ? window.navigator : undefined, NAVIGATOR_UADATA = NAVIGATOR && NAVIGATOR.userAgentData ? NAVIGATOR.userAgentData : undefined;
///////////
// Helper
//////////
var extend = function(defaultRgx, extensions) {
    var mergedRgx = {};
    var extraRgx = extensions;
    if (!isExtensions(extensions)) {
        extraRgx = {};
        for(var i in extensions){
            for(var j in extensions[i]){
                extraRgx[j] = extensions[i][j].concat(extraRgx[j] ? extraRgx[j] : []);
            }
        }
    }
    for(var k in defaultRgx){
        mergedRgx[k] = extraRgx[k] && extraRgx[k].length % 2 === 0 ? extraRgx[k].concat(defaultRgx[k]) : defaultRgx[k];
    }
    return mergedRgx;
}, enumerize = function(arr) {
    var enums = {};
    for(var i = 0; i < arr.length; i++){
        enums[arr[i].toUpperCase()] = arr[i];
    }
    return enums;
}, has = function(str1, str2) {
    if (typeof str1 === TYPEOF.OBJECT && str1.length > 0) {
        for(var i in str1){
            if (lowerize(str2) == lowerize(str1[i])) return true;
        }
        return false;
    }
    return isString(str1) ? lowerize(str2) == lowerize(str1) : false;
}, isExtensions = function(obj, deep) {
    for(var prop in obj){
        return /^(browser|cpu|device|engine|os)$/.test(prop) || (deep ? isExtensions(obj[prop]) : false);
    }
}, isString = function(val) {
    return typeof val === TYPEOF.STRING;
}, itemListToArray = function(header) {
    if (!header) return undefined;
    var arr = [];
    var tokens = strip(/\\?\"/g, header).split(',');
    for(var i = 0; i < tokens.length; i++){
        if (tokens[i].indexOf(';') > -1) {
            var token = trim(tokens[i]).split(';v=');
            arr[i] = {
                brand: token[0],
                version: token[1]
            };
        } else {
            arr[i] = trim(tokens[i]);
        }
    }
    return arr;
}, lowerize = function(str) {
    return isString(str) ? str.toLowerCase() : str;
}, majorize = function(version) {
    return isString(version) ? strip(/[^\d\.]/g, version).split('.')[0] : undefined;
}, setProps = function(arr) {
    for(var i in arr){
        if (!arr.hasOwnProperty(i)) continue;
        var propName = arr[i];
        if (typeof propName == TYPEOF.OBJECT && propName.length == 2) {
            this[propName[0]] = propName[1];
        } else {
            this[propName] = undefined;
        }
    }
    return this;
}, strip = function(pattern, str) {
    return isString(str) ? str.replace(pattern, EMPTY) : str;
}, stripQuotes = function(str) {
    return strip(/\\?\"/g, str);
}, trim = function(str, len) {
    str = strip(/^\s\s*/, String(str));
    return typeof len === TYPEOF.UNDEFINED ? str : str.substring(0, len);
};
///////////////
// Map helper
//////////////
var rgxMapper = function(ua, arrays) {
    if (!ua || !arrays) return;
    var i = 0, j, k, p, q, matches, match;
    // loop through all regexes maps
    while(i < arrays.length && !matches){
        var regex = arrays[i], props = arrays[i + 1]; // odd sequence (1,3,5,..)
        j = k = 0;
        // try matching uastring with regexes
        while(j < regex.length && !matches){
            if (!regex[j]) {
                break;
            }
            matches = regex[j++].exec(ua);
            if (!!matches) {
                for(p = 0; p < props.length; p++){
                    match = matches[++k];
                    q = props[p];
                    // check if given property is actually array
                    if (typeof q === TYPEOF.OBJECT && q.length > 0) {
                        if (q.length === 2) {
                            if (typeof q[1] == TYPEOF.FUNCTION) {
                                // assign modified match
                                this[q[0]] = q[1].call(this, match);
                            } else {
                                // assign given value, ignore regex match
                                this[q[0]] = q[1];
                            }
                        } else if (q.length >= 3) {
                            // Check whether q[1] FUNCTION or REGEX
                            if (typeof q[1] === TYPEOF.FUNCTION && !(q[1].exec && q[1].test)) {
                                if (q.length > 3) {
                                    this[q[0]] = match ? q[1].apply(this, q.slice(2)) : undefined;
                                } else {
                                    // call function (usually string mapper)
                                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                }
                            } else {
                                if (q.length == 3) {
                                    // sanitize match using given regex
                                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                } else if (q.length == 4) {
                                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                } else if (q.length > 4) {
                                    this[q[0]] = match ? q[3].apply(this, [
                                        match.replace(q[1], q[2])
                                    ].concat(q.slice(4))) : undefined;
                                }
                            }
                        }
                    } else {
                        this[q] = match ? match : undefined;
                    }
                }
            }
        }
        i += 2;
    }
}, strMapper = function(str, map) {
    for(var i in map){
        // check if current value is array
        if (typeof map[i] === TYPEOF.OBJECT && map[i].length > 0) {
            for(var j = 0; j < map[i].length; j++){
                if (has(map[i][j], str)) {
                    return i === UNKNOWN ? undefined : i;
                }
            }
        } else if (has(map[i], str)) {
            return i === UNKNOWN ? undefined : i;
        }
    }
    return map.hasOwnProperty('*') ? map['*'] : str;
};
///////////////
// String map
//////////////
var windowsVersionMap = {
    'ME': '4.90',
    'NT 3.51': '3.51',
    'NT 4.0': '4.0',
    '2000': [
        '5.0',
        '5.01'
    ],
    'XP': [
        '5.1',
        '5.2'
    ],
    'Vista': '6.0',
    '7': '6.1',
    '8': '6.2',
    '8.1': '6.3',
    '10': [
        '6.4',
        '10.0'
    ],
    'NT': ''
}, formFactorsMap = {
    'embedded': 'Automotive',
    'mobile': 'Mobile',
    'tablet': [
        'Tablet',
        'EInk'
    ],
    'smarttv': 'TV',
    'wearable': 'Watch',
    'xr': [
        'VR',
        'XR'
    ],
    '?': [
        'Desktop',
        'Unknown'
    ],
    '*': undefined
}, browserHintsMap = {
    'Chrome': 'Google Chrome',
    'Edge': 'Microsoft Edge',
    'Edge WebView2': 'Microsoft Edge WebView2',
    'Chrome WebView': 'Android WebView',
    'Chrome Headless': 'HeadlessChrome',
    'Huawei Browser': 'HuaweiBrowser',
    'MIUI Browser': 'Miui Browser',
    'Opera Mobi': 'OperaMobile',
    'Yandex': 'YaBrowser'
};
//////////////
// Regex map
/////////////
var defaultRegexes = {
    browser: [
        [
            // Most common regardless engine
            /\b(?:crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
        ],
        [
            VERSION,
            [
                NAME,
                PREFIX_MOBILE + 'Chrome'
            ]
        ],
        [
            /webview.+edge\/([\w\.]+)/i // Microsoft Edge
        ],
        [
            VERSION,
            [
                NAME,
                EDGE + ' WebView'
            ]
        ],
        [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
        ],
        [
            VERSION,
            [
                NAME,
                'Edge'
            ]
        ],
        [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i // Opera
        ],
        [
            NAME,
            VERSION
        ],
        [
            /opios[\/ ]+([\w\.]+)/i // Opera mini on iphone >= 8.0
        ],
        [
            VERSION,
            [
                NAME,
                OPERA + ' Mini'
            ]
        ],
        [
            /\bop(?:rg)?x\/([\w\.]+)/i // Opera GX
        ],
        [
            VERSION,
            [
                NAME,
                OPERA + ' GX'
            ]
        ],
        [
            /\bopr\/([\w\.]+)/i // Opera Webkit
        ],
        [
            VERSION,
            [
                NAME,
                OPERA
            ]
        ],
        [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i // Baidu
        ],
        [
            VERSION,
            [
                NAME,
                'Baidu'
            ]
        ],
        [
            /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i // Maxthon
        ],
        [
            VERSION,
            [
                NAME,
                'Maxthon'
            ]
        ],
        [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
            // Trident based
            /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon/LG Browser/Otter/qutebrowser/Dooble/Palemoon
            /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser|palemoon)\/([-\w\.]+)/i,
            // Atlas/Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
            /(heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
            /(qwant)(?:ios|mobile)\/([\d\.]+)/i,
            /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i // Ecosia/Weibo
        ],
        [
            NAME,
            VERSION
        ],
        [
            /quark(?:pc)?\/([-\w\.]+)/i // Quark
        ],
        [
            VERSION,
            [
                NAME,
                'Quark'
            ]
        ],
        [
            /\bddg\/([\w\.]+)/i // DuckDuckGo
        ],
        [
            VERSION,
            [
                NAME,
                'DuckDuckGo'
            ]
        ],
        [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i // UCBrowser
        ],
        [
            VERSION,
            [
                NAME,
                'UCBrowser'
            ]
        ],
        [
            /microm.+\bqbcore\/([\w\.]+)/i,
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i // WeChat
        ],
        [
            VERSION,
            [
                NAME,
                'WeChat'
            ]
        ],
        [
            /konqueror\/([\w\.]+)/i // Konqueror
        ],
        [
            VERSION,
            [
                NAME,
                'Konqueror'
            ]
        ],
        [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i // IE11
        ],
        [
            VERSION,
            [
                NAME,
                'IE'
            ]
        ],
        [
            /ya(?:search)?browser\/([\w\.]+)/i // Yandex
        ],
        [
            VERSION,
            [
                NAME,
                'Yandex'
            ]
        ],
        [
            /slbrowser\/([\w\.]+)/i // Smart Lenovo Browser
        ],
        [
            VERSION,
            [
                NAME,
                'Smart ' + LENOVO + SUFFIX_BROWSER
            ]
        ],
        [
            /(avast|avg)\/([\w\.]+)/i // Avast/AVG Secure Browser
        ],
        [
            [
                NAME,
                /(.+)/,
                '$1 Secure' + SUFFIX_BROWSER
            ],
            VERSION
        ],
        [
            /\bfocus\/([\w\.]+)/i // Firefox Focus
        ],
        [
            VERSION,
            [
                NAME,
                FIREFOX + ' Focus'
            ]
        ],
        [
            /\bopt\/([\w\.]+)/i // Opera Touch
        ],
        [
            VERSION,
            [
                NAME,
                OPERA + ' Touch'
            ]
        ],
        [
            /coc_coc\w+\/([\w\.]+)/i // Coc Coc Browser
        ],
        [
            VERSION,
            [
                NAME,
                'Coc Coc'
            ]
        ],
        [
            /dolfin\/([\w\.]+)/i // Dolphin
        ],
        [
            VERSION,
            [
                NAME,
                'Dolphin'
            ]
        ],
        [
            /coast\/([\w\.]+)/i // Opera Coast
        ],
        [
            VERSION,
            [
                NAME,
                OPERA + ' Coast'
            ]
        ],
        [
            /miuibrowser\/([\w\.]+)/i // MIUI Browser
        ],
        [
            VERSION,
            [
                NAME,
                'MIUI' + SUFFIX_BROWSER
            ]
        ],
        [
            /fxios\/([\w\.-]+)/i // Firefox for iOS
        ],
        [
            VERSION,
            [
                NAME,
                PREFIX_MOBILE + FIREFOX
            ]
        ],
        [
            /\bqihoobrowser\/?([\w\.]*)/i // 360
        ],
        [
            VERSION,
            [
                NAME,
                '360'
            ]
        ],
        [
            /\b(qq)\/([\w\.]+)/i // QQ
        ],
        [
            [
                NAME,
                /(.+)/,
                '$1Browser'
            ],
            VERSION
        ],
        [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
        ],
        [
            [
                NAME,
                /(.+)/,
                '$1' + SUFFIX_BROWSER
            ],
            VERSION
        ],
        [
            /samsungbrowser\/([\w\.]+)/i // Samsung Internet
        ],
        [
            VERSION,
            [
                NAME,
                SAMSUNG + ' Internet'
            ]
        ],
        [
            /metasr[\/ ]?([\d\.]+)/i // Sogou Explorer
        ],
        [
            VERSION,
            [
                NAME,
                SOGOU + ' Explorer'
            ]
        ],
        [
            /(sogou)mo\w+\/([\d\.]+)/i // Sogou Mobile
        ],
        [
            [
                NAME,
                SOGOU + ' Mobile'
            ],
            VERSION
        ],
        [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i // QQ/2345
        ],
        [
            NAME,
            VERSION
        ],
        [
            /(lbbrowser|rekonq|steam(?= (clie|tenf|gameo)))/i // LieBao Browser/Rekonq/Steam
        ],
        [
            NAME
        ],
        [
            /ome\/([\w\.]+) \w* ?(iron) saf/i,
            /ome\/([\w\.]+).+qihu (360)[es]e/i // 360
        ],
        [
            VERSION,
            NAME
        ],
        [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i // Facebook App for iOS & Android
        ],
        [
            [
                NAME,
                FACEBOOK
            ],
            VERSION,
            [
                TYPE,
                INAPP
            ]
        ],
        [
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            /(daum)apps[\/ ]([\w\.]+)/i,
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(alipay)client\/([\w\.]+)/i,
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            /(bing)(?:web|sapphire)\/([\w\.]+)/i,
            /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i // Instagram/Snapchat/Klarna
        ],
        [
            NAME,
            VERSION,
            [
                TYPE,
                INAPP
            ]
        ],
        [
            /\bgsa\/([\w\.]+) .*safari\//i // Google Search Appliance on iOS
        ],
        [
            VERSION,
            [
                NAME,
                'GSA'
            ],
            [
                TYPE,
                INAPP
            ]
        ],
        [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i // TikTok
        ],
        [
            VERSION,
            [
                NAME,
                'TikTok'
            ],
            [
                TYPE,
                INAPP
            ]
        ],
        [
            /\[(linkedin)app\]/i // LinkedIn App for iOS & Android
        ],
        [
            NAME,
            [
                TYPE,
                INAPP
            ]
        ],
        [
            /(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i // Zalo 
        ],
        [
            [
                NAME,
                /(.+)/,
                'Zalo'
            ],
            VERSION,
            [
                TYPE,
                INAPP
            ]
        ],
        [
            /(chromium)[\/ ]([-\w\.]+)/i // Chromium
        ],
        [
            NAME,
            VERSION
        ],
        [
            /headlesschrome(?:\/([\w\.]+)| )/i // Chrome Headless
        ],
        [
            VERSION,
            [
                NAME,
                CHROME + ' Headless'
            ]
        ],
        [
            /wv\).+chrome\/([\w\.]+).+edgw\//i // Edge WebView2
        ],
        [
            VERSION,
            [
                NAME,
                EDGE + ' WebView2'
            ]
        ],
        [
            / wv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
        ],
        [
            [
                NAME,
                CHROME + ' WebView'
            ],
            VERSION
        ],
        [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i // Android Browser
        ],
        [
            VERSION,
            [
                NAME,
                'Android' + SUFFIX_BROWSER
            ]
        ],
        [
            /chrome\/([\w\.]+) mobile/i // Chrome Mobile
        ],
        [
            VERSION,
            [
                NAME,
                PREFIX_MOBILE + 'Chrome'
            ]
        ],
        [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia
        ],
        [
            NAME,
            VERSION
        ],
        [
            /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i // Safari Mobile
        ],
        [
            VERSION,
            [
                NAME,
                PREFIX_MOBILE + 'Safari'
            ]
        ],
        [
            /iphone .*mobile(?:\/\w+ | ?)safari/i
        ],
        [
            [
                NAME,
                PREFIX_MOBILE + 'Safari'
            ]
        ],
        [
            /version\/([\w\.\,]+) .*(safari)/i // Safari
        ],
        [
            VERSION,
            NAME
        ],
        [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
        ],
        [
            NAME,
            [
                VERSION,
                '1'
            ]
        ],
        [
            /(webkit|khtml)\/([\w\.]+)/i
        ],
        [
            NAME,
            VERSION
        ],
        [
            // Gecko based
            /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i // Firefox Mobile
        ],
        [
            [
                NAME,
                PREFIX_MOBILE + FIREFOX
            ],
            VERSION
        ],
        [
            /(navigator|netscape\d?)\/([-\w\.]+)/i // Netscape
        ],
        [
            [
                NAME,
                'Netscape'
            ],
            VERSION
        ],
        [
            /(wolvic|librewolf)\/([\w\.]+)/i // Wolvic/LibreWolf
        ],
        [
            NAME,
            VERSION
        ],
        [
            /mobile vr; rv:([\w\.]+)\).+firefox/i // Firefox Reality
        ],
        [
            VERSION,
            [
                NAME,
                FIREFOX + ' Reality'
            ]
        ],
        [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
            // Other
            /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
            /\b(links) \(([\w\.]+)/i // Links
        ],
        [
            NAME,
            [
                VERSION,
                /_/g,
                '.'
            ]
        ],
        [
            /(cobalt)\/([\w\.]+)/i // Cobalt
        ],
        [
            NAME,
            [
                VERSION,
                /[^\d\.]+./,
                EMPTY
            ]
        ]
    ],
    cpu: [
        [
            /\b((amd|x|x86[-_]?|wow|win)64)\b/i // AMD64 (x64)
        ],
        [
            [
                ARCHITECTURE,
                'amd64'
            ]
        ],
        [
            /(ia32(?=;))/i,
            /\b((i[346]|x)86)(pc)?\b/i // IA32 (x86)
        ],
        [
            [
                ARCHITECTURE,
                'ia32'
            ]
        ],
        [
            /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i // ARM64
        ],
        [
            [
                ARCHITECTURE,
                'arm64'
            ]
        ],
        [
            /\b(arm(v[67])?ht?n?[fl]p?)\b/i // ARMHF
        ],
        [
            [
                ARCHITECTURE,
                'armhf'
            ]
        ],
        [
            // PocketPC mistakenly identified as PowerPC
            /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
        ],
        [
            [
                ARCHITECTURE,
                'arm'
            ]
        ],
        [
            / sun4\w[;\)]/i // SPARC
        ],
        [
            [
                ARCHITECTURE,
                'sparc'
            ]
        ],
        [
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
            /((ppc|powerpc)(64)?)( mac|;|\))/i,
            /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i // Alpha
        ],
        [
            [
                ARCHITECTURE,
                /ower/,
                EMPTY,
                lowerize
            ]
        ],
        [
            /mc680.0/i
        ],
        [
            [
                ARCHITECTURE,
                '68k'
            ]
        ],
        [
            /winnt.+\[axp/i
        ],
        [
            [
                ARCHITECTURE,
                'alpha'
            ]
        ]
    ],
    device: [
        [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                SAMSUNG
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
            /sec-(sgh\w+)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                SAMSUNG
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i // iPod/iPhone
        ],
        [
            MODEL,
            [
                VENDOR,
                APPLE
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
            /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i
        ],
        [
            MODEL,
            [
                VENDOR,
                APPLE
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /(macintosh);/i
        ],
        [
            MODEL,
            [
                VENDOR,
                APPLE
            ]
        ],
        [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                SHARP
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Honor
            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                HONOR
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /honor([-\w ]+)[;\)]/i
        ],
        [
            MODEL,
            [
                VENDOR,
                HONOR
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Huawei
            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                HUAWEI
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /(?:huawei) ?([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                HUAWEI
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Xiaomi
            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
            /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i // Mi Pad tablets
        ],
        [
            [
                MODEL,
                /_/g,
                ' '
            ],
            [
                VENDOR,
                XIAOMI
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Redmi / POCO / Black Shark / Qin
            /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
            // Xiaomi Mi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
            / ([\w ]+) miui\/v?\d/i
        ],
        [
            [
                MODEL,
                /_/g,
                ' '
            ],
            [
                VENDOR,
                XIAOMI
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // OnePlus
            /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                ONEPLUS
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
        ],
        [
            MODEL,
            [
                VENDOR,
                OPPO
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            /\b(opd2(\d{3}a?))(?: bui|\))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                strMapper,
                {
                    'OnePlus': [
                        '203',
                        '304',
                        '403',
                        '404',
                        '413',
                        '415'
                    ],
                    '*': OPPO
                }
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            // BLU
            /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i // Vivo series
        ],
        [
            MODEL,
            [
                VENDOR,
                'BLU'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Vivo
            /; vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Vivo'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Realme'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Lenovo
            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                LENOVO
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                LENOVO
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
            /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                MOTOROLA
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
        ],
        [
            MODEL,
            [
                VENDOR,
                MOTOROLA
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
        ],
        [
            MODEL,
            [
                VENDOR,
                LG
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
            /\blg-?([\d\w]+) bui/i
        ],
        [
            MODEL,
            [
                VENDOR,
                LG
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Nokia
            /(nokia) (t[12][01])/i
        ],
        [
            VENDOR,
            MODEL,
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
            /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i
        ],
        [
            [
                MODEL,
                /_/g,
                ' '
            ],
            [
                TYPE,
                MOBILE
            ],
            [
                VENDOR,
                'Nokia'
            ]
        ],
        [
            // Google
            /(pixel (c|tablet))\b/i // Google Pixel C/Tablet
        ],
        [
            MODEL,
            [
                VENDOR,
                GOOGLE
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            // Google Pixel
            /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                GOOGLE
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            /(google) (pixelbook( go)?)/i
        ],
        [
            VENDOR,
            MODEL
        ],
        [
            // Sony
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                SONY
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
        ],
        [
            [
                MODEL,
                'Xperia Tablet'
            ],
            [
                VENDOR,
                SONY
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i // Kindle Fire HD
        ],
        [
            MODEL,
            [
                VENDOR,
                AMAZON
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i // Fire Phone
        ],
        [
            [
                MODEL,
                /(.+)/g,
                'Fire Phone $1'
            ],
            [
                VENDOR,
                AMAZON
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i // BlackBerry PlayBook
        ],
        [
            MODEL,
            VENDOR,
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /(?:blackberry|\(bb10;) (\w+)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                BLACKBERRY
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
        ],
        [
            MODEL,
            [
                VENDOR,
                ASUS
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
        ],
        [
            MODEL,
            [
                VENDOR,
                ASUS
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // HTC
            /(nexus 9)/i // HTC Nexus 9
        ],
        [
            MODEL,
            [
                VENDOR,
                'HTC'
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
        ],
        [
            VENDOR,
            [
                MODEL,
                /_/g,
                ' '
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // TCL
            /tcl (xess p17aa)/i,
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'TCL'
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'TCL'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // itel
            /(itel) ((\w+))/i
        ],
        [
            [
                VENDOR,
                lowerize
            ],
            MODEL,
            [
                TYPE,
                strMapper,
                {
                    'tablet': [
                        'p10001l',
                        'w7001'
                    ],
                    '*': 'mobile'
                }
            ]
        ],
        [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Acer'
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Meizu'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Ulefone'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Energizer
            /; (energy ?\w+)(?: bui|\))/i,
            /; energizer ([\w ]+)(?: bui|\))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Energizer'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Cat
            /; cat (b35);/i,
            /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Cat'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Smartfren
            /((?:new )?andromax[\w- ]+)(?: bui|\))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Smartfren'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Nothing
            /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Nothing'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // Archos
            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Archos'
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /archos ([\w ]+)( b|\))/i,
            /; (ac[3-6]\d\w{2,8})( b|\))/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'Archos'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // HMD
            /; (n159v)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                'HMD'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            // MIXED
            /(imo) (tab \w+)/i,
            /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i // Infinix XPad / Tecno
        ],
        [
            VENDOR,
            MODEL,
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Tecno/Micromax/Advan
            // BLU/HMD/IMO/Infinix/Lava/OnePlus/TCL/Wiko
            /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
            /(hp) ([\w ]+\w)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(oppo) ?([\w ]+) bui/i,
            /(hisense) ([ehv][\w ]+)\)/i,
            /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i // Philips
        ],
        [
            VENDOR,
            MODEL,
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            /(kobo)\s(ereader|touch)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i // Kindle
        ],
        [
            VENDOR,
            MODEL,
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /(surface duo)/i // Surface Duo
        ],
        [
            MODEL,
            [
                VENDOR,
                MICROSOFT
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i // Fairphone
        ],
        [
            MODEL,
            [
                VENDOR,
                'Fairphone'
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i // Nvidia Tablets
        ],
        [
            MODEL,
            [
                VENDOR,
                NVIDIA
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /(sprint) (\w+)/i // Sprint Phones
        ],
        [
            VENDOR,
            MODEL,
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            /(kin\.[onetw]{3})/i // Microsoft Kin
        ],
        [
            [
                MODEL,
                /\./g,
                ' '
            ],
            [
                VENDOR,
                MICROSOFT
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i // Zebra
        ],
        [
            MODEL,
            [
                VENDOR,
                ZEBRA
            ],
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                ZEBRA
            ],
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /(philips)[\w ]+tv/i,
            /smart-tv.+(samsung)/i // Samsung
        ],
        [
            VENDOR,
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /hbbtv.+maple;(\d+)/i
        ],
        [
            [
                MODEL,
                /^/,
                'SmartTV'
            ],
            [
                VENDOR,
                SAMSUNG
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /(vizio)(?: |.+model\/)(\w+-\w+)/i,
            /tcast.+(lg)e?. ([-\w]+)/i // LG SmartTV
        ],
        [
            VENDOR,
            MODEL,
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
        ],
        [
            [
                VENDOR,
                LG
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /(apple) ?tv/i // Apple TV
        ],
        [
            VENDOR,
            [
                MODEL,
                APPLE + ' TV'
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /crkey.*devicetype\/chromecast/i // Google Chromecast Third Generation
        ],
        [
            [
                MODEL,
                CHROMECAST + ' Third Generation'
            ],
            [
                VENDOR,
                GOOGLE
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /crkey.*devicetype\/([^/]*)/i // Google Chromecast with specific device type
        ],
        [
            [
                MODEL,
                /^/,
                'Chromecast '
            ],
            [
                VENDOR,
                GOOGLE
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /fuchsia.*crkey/i // Google Chromecast Nest Hub
        ],
        [
            [
                MODEL,
                CHROMECAST + ' Nest Hub'
            ],
            [
                VENDOR,
                GOOGLE
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /crkey/i // Google Chromecast, Linux-based or unknown
        ],
        [
            [
                MODEL,
                CHROMECAST
            ],
            [
                VENDOR,
                GOOGLE
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /(portaltv)/i // Facebook Portal TV
        ],
        [
            MODEL,
            [
                VENDOR,
                FACEBOOK
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /droid.+aft(\w+)( bui|\))/i // Fire TV
        ],
        [
            MODEL,
            [
                VENDOR,
                AMAZON
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /(shield \w+ tv)/i // Nvidia Shield TV
        ],
        [
            MODEL,
            [
                VENDOR,
                NVIDIA
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i // Sharp
        ],
        [
            MODEL,
            [
                VENDOR,
                SHARP
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /(bravia[\w ]+)( bui|\))/i // Sony
        ],
        [
            MODEL,
            [
                VENDOR,
                SONY
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /(mi(tv|box)-?\w+) bui/i // Xiaomi
        ],
        [
            MODEL,
            [
                VENDOR,
                XIAOMI
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /Hbbtv.*(technisat) (.*);/i // TechniSAT
        ],
        [
            VENDOR,
            MODEL,
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i // HbbTV devices
        ],
        [
            [
                VENDOR,
                /.+\/(\w+)/,
                '$1',
                strMapper,
                {
                    'LG': 'lge'
                }
            ],
            [
                MODEL,
                trim
            ],
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(playstation \w+)/i // Playstation
        ],
        [
            MODEL,
            [
                VENDOR,
                SONY
            ],
            [
                TYPE,
                CONSOLE
            ]
        ],
        [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i // Microsoft Xbox
        ],
        [
            MODEL,
            [
                VENDOR,
                MICROSOFT
            ],
            [
                TYPE,
                CONSOLE
            ]
        ],
        [
            /(ouya)/i,
            /(nintendo) (\w+)/i,
            /(retroid) (pocket ([^\)]+))/i,
            /(valve).+(steam deck)/i,
            /droid.+; ((shield|rgcube|gr0006))( bui|\))/i // Nvidia Portable/Anbernic/Logitech
        ],
        [
            [
                VENDOR,
                strMapper,
                {
                    'Nvidia': 'Shield',
                    'Anbernic': 'RGCUBE',
                    'Logitech': 'GR0006'
                }
            ],
            MODEL,
            [
                TYPE,
                CONSOLE
            ]
        ],
        [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i // Samsung Galaxy Watch
        ],
        [
            MODEL,
            [
                VENDOR,
                SAMSUNG
            ],
            [
                TYPE,
                WEARABLE
            ]
        ],
        [
            /((pebble))app/i,
            /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i // Asus ZenWatch / LG Watch / Pixel Watch / Xiaomi Watch
        ],
        [
            VENDOR,
            MODEL,
            [
                TYPE,
                WEARABLE
            ]
        ],
        [
            /(ow(?:19|20)?we?[1-3]{1,3})/i // Oppo Watch
        ],
        [
            MODEL,
            [
                VENDOR,
                OPPO
            ],
            [
                TYPE,
                WEARABLE
            ]
        ],
        [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i // Apple Watch
        ],
        [
            MODEL,
            [
                VENDOR,
                APPLE
            ],
            [
                TYPE,
                WEARABLE
            ]
        ],
        [
            /(opwwe\d{3})/i // OnePlus Watch
        ],
        [
            MODEL,
            [
                VENDOR,
                ONEPLUS
            ],
            [
                TYPE,
                WEARABLE
            ]
        ],
        [
            /(moto 360)/i // Motorola 360
        ],
        [
            MODEL,
            [
                VENDOR,
                MOTOROLA
            ],
            [
                TYPE,
                WEARABLE
            ]
        ],
        [
            /(smartwatch 3)/i // Sony SmartWatch
        ],
        [
            MODEL,
            [
                VENDOR,
                SONY
            ],
            [
                TYPE,
                WEARABLE
            ]
        ],
        [
            /(g watch r)/i // LG G Watch R
        ],
        [
            MODEL,
            [
                VENDOR,
                LG
            ],
            [
                TYPE,
                WEARABLE
            ]
        ],
        [
            /droid.+; (wt63?0{2,3})\)/i
        ],
        [
            MODEL,
            [
                VENDOR,
                ZEBRA
            ],
            [
                TYPE,
                WEARABLE
            ]
        ],
        [
            ///////////////////
            // XR
            ///////////////////
            /droid.+; (glass) \d/i // Google Glass
        ],
        [
            MODEL,
            [
                VENDOR,
                GOOGLE
            ],
            [
                TYPE,
                XR
            ]
        ],
        [
            /(pico) ([\w ]+) os\d/i // Pico
        ],
        [
            VENDOR,
            MODEL,
            [
                TYPE,
                XR
            ]
        ],
        [
            /(quest( \d| pro)?s?).+vr/i // Meta Quest
        ],
        [
            MODEL,
            [
                VENDOR,
                FACEBOOK
            ],
            [
                TYPE,
                XR
            ]
        ],
        [
            /mobile vr; rv.+firefox/i // Unidentifiable VR device using Firefox Reality / Wolvic
        ],
        [
            [
                TYPE,
                XR
            ]
        ],
        [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i // Tesla
        ],
        [
            VENDOR,
            [
                TYPE,
                EMBEDDED
            ]
        ],
        [
            /(aeobc)\b/i // Echo Dot
        ],
        [
            MODEL,
            [
                VENDOR,
                AMAZON
            ],
            [
                TYPE,
                EMBEDDED
            ]
        ],
        [
            /(homepod).+mac os/i // Apple HomePod
        ],
        [
            MODEL,
            [
                VENDOR,
                APPLE
            ],
            [
                TYPE,
                EMBEDDED
            ]
        ],
        [
            /windows iot/i // Unidentifiable embedded device using Windows IoT
        ],
        [
            [
                TYPE,
                EMBEDDED
            ]
        ],
        [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i // Unidentifiable SmartTV
        ],
        [
            MODEL,
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
        ],
        [
            [
                TYPE,
                SMARTTV
            ]
        ],
        [
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
        ],
        [
            MODEL,
            [
                TYPE,
                strMapper,
                {
                    'mobile': 'Mobile',
                    'xr': 'VR',
                    '*': TABLET
                }
            ]
        ],
        [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i // Unidentifiable Tablet
        ],
        [
            [
                TYPE,
                TABLET
            ]
        ],
        [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i // Unidentifiable Mobile
        ],
        [
            [
                TYPE,
                MOBILE
            ]
        ],
        [
            /droid .+?; ([\w\. -]+)( bui|\))/i // Generic Android Device
        ],
        [
            MODEL,
            [
                VENDOR,
                'Generic'
            ]
        ]
    ],
    engine: [
        [
            /windows.+ edge\/([\w\.]+)/i // EdgeHTML
        ],
        [
            VERSION,
            [
                NAME,
                EDGE + 'HTML'
            ]
        ],
        [
            /(arkweb)\/([\w\.]+)/i // ArkWeb
        ],
        [
            NAME,
            VERSION
        ],
        [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i // Blink
        ],
        [
            VERSION,
            [
                NAME,
                'Blink'
            ]
        ],
        [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            /\b(libweb)/i // LibWeb
        ],
        [
            NAME,
            VERSION
        ],
        [
            /ladybird\//i
        ],
        [
            [
                NAME,
                'LibWeb'
            ]
        ],
        [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i // Gecko
        ],
        [
            VERSION,
            NAME
        ]
    ],
    os: [
        [
            // Windows
            /(windows nt) (6\.[23]); arm/i // Windows RT
        ],
        [
            [
                NAME,
                /N/,
                'R'
            ],
            [
                VERSION,
                strMapper,
                windowsVersionMap
            ]
        ],
        [
            /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
            // Windows NT/3.1/95/98/ME/2000/XP/Vista/7/8/8.1/10/11
            /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
        ],
        [
            NAME,
            VERSION
        ],
        [
            /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
            /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
        ],
        [
            [
                VERSION,
                /(;|\))/g,
                '',
                strMapper,
                windowsVersionMap
            ],
            [
                NAME,
                WINDOWS
            ]
        ],
        [
            /(windows ce)\/?([\d\.]*)/i // Windows CE
        ],
        [
            NAME,
            VERSION
        ],
        [
            // iOS/macOS
            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
            /\btvos ?([\w\.]+)/i,
            /cfnetwork\/.+darwin/i
        ],
        [
            [
                VERSION,
                /_/g,
                '.'
            ],
            [
                NAME,
                'iOS'
            ]
        ],
        [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i // Mac OS
        ],
        [
            [
                NAME,
                'macOS'
            ],
            [
                VERSION,
                /_/g,
                '.'
            ]
        ],
        [
            // Google Chromecast
            /android ([\d\.]+).*crkey/i // Google Chromecast, Android-based
        ],
        [
            VERSION,
            [
                NAME,
                CHROMECAST + ' Android'
            ]
        ],
        [
            /fuchsia.*crkey\/([\d\.]+)/i // Google Chromecast, Fuchsia-based
        ],
        [
            VERSION,
            [
                NAME,
                CHROMECAST + ' Fuchsia'
            ]
        ],
        [
            /crkey\/([\d\.]+).*devicetype\/smartspeaker/i // Google Chromecast, Linux-based Smart Speaker
        ],
        [
            VERSION,
            [
                NAME,
                CHROMECAST + ' SmartSpeaker'
            ]
        ],
        [
            /linux.*crkey\/([\d\.]+)/i // Google Chromecast, Legacy Linux-based
        ],
        [
            VERSION,
            [
                NAME,
                CHROMECAST + ' Linux'
            ]
        ],
        [
            /crkey\/([\d\.]+)/i // Google Chromecast, unknown
        ],
        [
            VERSION,
            [
                NAME,
                CHROMECAST
            ]
        ],
        [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86)/i // Android-x86
        ],
        [
            VERSION,
            NAME
        ],
        [
            /(ubuntu) ([\w\.]+) like android/i // Ubuntu Touch
        ],
        [
            [
                NAME,
                /(.+)/,
                '$1 Touch'
            ],
            VERSION
        ],
        [
            /(harmonyos)[\/ ]?([\d\.]*)/i,
            // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
        ],
        [
            NAME,
            VERSION
        ],
        [
            /\(bb(10);/i // BlackBerry 10
        ],
        [
            VERSION,
            [
                NAME,
                BLACKBERRY
            ]
        ],
        [
            /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i // Symbian
        ],
        [
            VERSION,
            [
                NAME,
                'Symbian'
            ]
        ],
        [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
        ],
        [
            VERSION,
            [
                NAME,
                FIREFOX + ' OS'
            ]
        ],
        [
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
            /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
        ],
        [
            VERSION,
            [
                NAME,
                'webOS'
            ]
        ],
        [
            /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
        ],
        [
            [
                VERSION,
                strMapper,
                {
                    '25': '120',
                    '24': '108',
                    '23': '94',
                    '22': '87',
                    '6': '79',
                    '5': '68',
                    '4': '53',
                    '3': '38',
                    '2': '538',
                    '1': '537',
                    '*': 'TV'
                }
            ],
            [
                NAME,
                'webOS'
            ]
        ],
        [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i // watchOS
        ],
        [
            VERSION,
            [
                NAME,
                'watchOS'
            ]
        ],
        [
            // Google ChromeOS
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i // Chromium OS
        ],
        [
            [
                NAME,
                "Chrome OS"
            ],
            VERSION
        ],
        [
            // Smart TVs
            /panasonic;(viera)/i,
            /(netrange)mmh/i,
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // Console
            /(nintendo|playstation) (\w+)/i,
            /(xbox); +xbox ([^\);]+)/i,
            /(pico) .+os([\w\.]+)/i,
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            /linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
            /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire/Knoppix
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            /\b(aix)[; ]([1-9\.]{0,4})/i,
            /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
            /(gnu) ?([\w\.]*)/i,
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku) ?(r\d)?/i // Haiku
        ],
        [
            NAME,
            VERSION
        ],
        [
            /(sunos) ?([\d\.]*)/i // Solaris
        ],
        [
            [
                NAME,
                'Solaris'
            ],
            VERSION
        ],
        [
            /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
            /(unix) ?([\w\.]*)/i // UNIX
        ],
        [
            NAME,
            VERSION
        ]
    ]
};
/////////////////
// Factories
////////////////
var defaultProps = function() {
    var props = {
        init: {},
        isIgnore: {},
        isIgnoreRgx: {},
        toString: {}
    };
    setProps.call(props.init, [
        [
            BROWSER,
            [
                NAME,
                VERSION,
                MAJOR,
                TYPE
            ]
        ],
        [
            CPU,
            [
                ARCHITECTURE
            ]
        ],
        [
            DEVICE,
            [
                TYPE,
                MODEL,
                VENDOR
            ]
        ],
        [
            ENGINE,
            [
                NAME,
                VERSION
            ]
        ],
        [
            OS,
            [
                NAME,
                VERSION
            ]
        ]
    ]);
    setProps.call(props.isIgnore, [
        [
            BROWSER,
            [
                VERSION,
                MAJOR
            ]
        ],
        [
            ENGINE,
            [
                VERSION
            ]
        ],
        [
            OS,
            [
                VERSION
            ]
        ]
    ]);
    setProps.call(props.isIgnoreRgx, [
        [
            BROWSER,
            / ?browser$/i
        ],
        [
            OS,
            / ?os$/i
        ]
    ]);
    setProps.call(props.toString, [
        [
            BROWSER,
            [
                NAME,
                VERSION
            ]
        ],
        [
            CPU,
            [
                ARCHITECTURE
            ]
        ],
        [
            DEVICE,
            [
                VENDOR,
                MODEL
            ]
        ],
        [
            ENGINE,
            [
                NAME,
                VERSION
            ]
        ],
        [
            OS,
            [
                NAME,
                VERSION
            ]
        ]
    ]);
    return props;
}();
var createIData = function(item, itemType) {
    var init_props = defaultProps.init[itemType], is_ignoreProps = defaultProps.isIgnore[itemType] || 0, is_ignoreRgx = defaultProps.isIgnoreRgx[itemType] || 0, toString_props = defaultProps.toString[itemType] || 0;
    function IData() {
        setProps.call(this, init_props);
    }
    IData.prototype.getItem = function() {
        return item;
    };
    IData.prototype.withClientHints = function() {
        // nodejs / non-client-hints browsers
        if (!NAVIGATOR_UADATA) {
            return item.parseCH().get();
        }
        // browsers based on chromium 85+
        return NAVIGATOR_UADATA.getHighEntropyValues(CH_ALL_VALUES).then(function(res) {
            return item.setCH(new UACHData(res, false)).parseCH().get();
        });
    };
    IData.prototype.withFeatureCheck = function() {
        return item.detectFeature().get();
    };
    if (itemType != RESULT) {
        IData.prototype.is = function(strToCheck) {
            var is = false;
            for(var i in this){
                if (this.hasOwnProperty(i) && !has(is_ignoreProps, i) && lowerize(is_ignoreRgx ? strip(is_ignoreRgx, this[i]) : this[i]) == lowerize(is_ignoreRgx ? strip(is_ignoreRgx, strToCheck) : strToCheck)) {
                    is = true;
                    if (strToCheck != TYPEOF.UNDEFINED) break;
                } else if (strToCheck == TYPEOF.UNDEFINED && is) {
                    is = !is;
                    break;
                }
            }
            return is;
        };
        IData.prototype.toString = function() {
            var str = EMPTY;
            for(var i in toString_props){
                if (typeof this[toString_props[i]] !== TYPEOF.UNDEFINED) {
                    str += (str ? ' ' : EMPTY) + this[toString_props[i]];
                }
            }
            return str || TYPEOF.UNDEFINED;
        };
    }
    IData.prototype.then = function(cb) {
        var that = this;
        var IDataResolve = function() {
            for(var prop in that){
                if (that.hasOwnProperty(prop)) {
                    this[prop] = that[prop];
                }
            }
        };
        IDataResolve.prototype = {
            is: IData.prototype.is,
            toString: IData.prototype.toString,
            withClientHints: IData.prototype.withClientHints,
            withFeatureCheck: IData.prototype.withFeatureCheck
        };
        var resolveData = new IDataResolve();
        cb(resolveData);
        return resolveData;
    };
    return new IData();
};
/////////////////
// Constructor
////////////////
function UACHData(uach, isHttpUACH) {
    uach = uach || {};
    setProps.call(this, CH_ALL_VALUES);
    if (isHttpUACH) {
        setProps.call(this, [
            [
                BRANDS,
                itemListToArray(uach[CH])
            ],
            [
                FULLVERLIST,
                itemListToArray(uach[CH_FULL_VER_LIST])
            ],
            [
                MOBILE,
                /\?1/.test(uach[CH_MOBILE])
            ],
            [
                MODEL,
                stripQuotes(uach[CH_MODEL])
            ],
            [
                PLATFORM,
                stripQuotes(uach[CH_PLATFORM])
            ],
            [
                PLATFORMVER,
                stripQuotes(uach[CH_PLATFORM_VER])
            ],
            [
                ARCHITECTURE,
                stripQuotes(uach[CH_ARCH])
            ],
            [
                FORMFACTORS,
                itemListToArray(uach[CH_FORM_FACTORS])
            ],
            [
                BITNESS,
                stripQuotes(uach[CH_BITNESS])
            ]
        ]);
    } else {
        for(var prop in uach){
            if (this.hasOwnProperty(prop) && typeof uach[prop] !== TYPEOF.UNDEFINED) this[prop] = uach[prop];
        }
    }
}
function UAItem(itemType, ua, rgxMap, uaCH) {
    setProps.call(this, [
        [
            'itemType',
            itemType
        ],
        [
            'ua',
            ua
        ],
        [
            'uaCH',
            uaCH
        ],
        [
            'rgxMap',
            rgxMap
        ],
        [
            'data',
            createIData(this, itemType)
        ]
    ]);
    return this;
}
UAItem.prototype.get = function(prop) {
    if (!prop) return this.data;
    return this.data.hasOwnProperty(prop) ? this.data[prop] : undefined;
};
UAItem.prototype.set = function(prop, val) {
    this.data[prop] = val;
    return this;
};
UAItem.prototype.setCH = function(ch) {
    this.uaCH = ch;
    return this;
};
UAItem.prototype.detectFeature = function() {
    if (NAVIGATOR && NAVIGATOR.userAgent == this.ua) {
        switch(this.itemType){
            case BROWSER:
                // Brave-specific detection
                if (NAVIGATOR.brave && typeof NAVIGATOR.brave.isBrave == TYPEOF.FUNCTION) {
                    this.set(NAME, 'Brave');
                }
                break;
            case DEVICE:
                // Chrome-specific detection: check for 'mobile' value of navigator.userAgentData
                if (!this.get(TYPE) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[MOBILE]) {
                    this.set(TYPE, MOBILE);
                }
                // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
                if (this.get(MODEL) == 'Macintosh' && NAVIGATOR && typeof NAVIGATOR.standalone !== TYPEOF.UNDEFINED && NAVIGATOR.maxTouchPoints && NAVIGATOR.maxTouchPoints > 2) {
                    this.set(MODEL, 'iPad').set(TYPE, TABLET);
                }
                break;
            case OS:
                // Chrome-specific detection: check for 'platform' value of navigator.userAgentData
                if (!this.get(NAME) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[PLATFORM]) {
                    this.set(NAME, NAVIGATOR_UADATA[PLATFORM]);
                }
                break;
            case RESULT:
                var data = this.data;
                var detect = function(itemType) {
                    return data[itemType].getItem().detectFeature().get();
                };
                this.set(BROWSER, detect(BROWSER)).set(CPU, detect(CPU)).set(DEVICE, detect(DEVICE)).set(ENGINE, detect(ENGINE)).set(OS, detect(OS));
        }
    }
    return this;
};
UAItem.prototype.parseUA = function() {
    if (this.itemType != RESULT) {
        rgxMapper.call(this.data, this.ua, this.rgxMap);
    }
    switch(this.itemType){
        case BROWSER:
            this.set(MAJOR, majorize(this.get(VERSION)));
            break;
        case OS:
            if (this.get(NAME) == 'iOS' && this.get(VERSION) == '18.6') {
                // Based on the assumption that iOS version is tightly coupled with Safari version
                var realVersion = /\) Version\/([\d\.]+)/.exec(this.ua); // Get Safari version
                if (realVersion && parseInt(realVersion[1].substring(0, 2), 10) >= 26) {
                    this.set(VERSION, realVersion[1]); // Set as iOS version
                }
            }
            break;
    }
    return this;
};
UAItem.prototype.parseCH = function() {
    var uaCH = this.uaCH, rgxMap = this.rgxMap;
    switch(this.itemType){
        case BROWSER:
        case ENGINE:
            var brands = uaCH[FULLVERLIST] || uaCH[BRANDS], prevName;
            if (brands) {
                for(var i = 0; i < brands.length; i++){
                    var brandName = brands[i].brand || brands[i], brandVersion = brands[i].version;
                    if (this.itemType == BROWSER && !/not.a.brand/i.test(brandName) && (!prevName || /Chrom/.test(prevName) && brandName != CHROMIUM || prevName == EDGE && /WebView2/.test(brandName))) {
                        brandName = strMapper(brandName, browserHintsMap);
                        prevName = this.get(NAME);
                        if (!(prevName && !/Chrom/.test(prevName) && /Chrom/.test(brandName))) {
                            this.set(NAME, brandName).set(VERSION, brandVersion).set(MAJOR, majorize(brandVersion));
                        }
                        prevName = brandName;
                    }
                    if (this.itemType == ENGINE && brandName == CHROMIUM) {
                        this.set(VERSION, brandVersion);
                    }
                }
            }
            break;
        case CPU:
            var archName = uaCH[ARCHITECTURE];
            if (archName) {
                if (archName && uaCH[BITNESS] == '64') archName += '64';
                rgxMapper.call(this.data, archName + ';', rgxMap);
            }
            break;
        case DEVICE:
            if (uaCH[MOBILE]) {
                this.set(TYPE, MOBILE);
            }
            if (uaCH[MODEL]) {
                this.set(MODEL, uaCH[MODEL]);
                if (!this.get(TYPE) || !this.get(VENDOR)) {
                    var reParse = {};
                    rgxMapper.call(reParse, 'droid 9; ' + uaCH[MODEL] + ')', rgxMap);
                    if (!this.get(TYPE) && !!reParse.type) {
                        this.set(TYPE, reParse.type);
                    }
                    if (!this.get(VENDOR) && !!reParse.vendor) {
                        this.set(VENDOR, reParse.vendor);
                    }
                }
            }
            if (uaCH[FORMFACTORS]) {
                var ff;
                if (typeof uaCH[FORMFACTORS] !== 'string') {
                    var idx = 0;
                    while(!ff && idx < uaCH[FORMFACTORS].length){
                        ff = strMapper(uaCH[FORMFACTORS][idx++], formFactorsMap);
                    }
                } else {
                    ff = strMapper(uaCH[FORMFACTORS], formFactorsMap);
                }
                this.set(TYPE, ff);
            }
            break;
        case OS:
            var osName = uaCH[PLATFORM];
            if (osName) {
                var osVersion = uaCH[PLATFORMVER];
                if (osName == WINDOWS) osVersion = parseInt(majorize(osVersion), 10) >= 13 ? '11' : '10';
                this.set(NAME, osName).set(VERSION, osVersion);
            }
            // Xbox-Specific Detection
            if (this.get(NAME) == WINDOWS && uaCH[MODEL] == 'Xbox') {
                this.set(NAME, 'Xbox').set(VERSION, undefined);
            }
            break;
        case RESULT:
            var data = this.data;
            var parse = function(itemType) {
                return data[itemType].getItem().setCH(uaCH).parseCH().get();
            };
            this.set(BROWSER, parse(BROWSER)).set(CPU, parse(CPU)).set(DEVICE, parse(DEVICE)).set(ENGINE, parse(ENGINE)).set(OS, parse(OS));
    }
    return this;
};
function UAParser(ua, extensions, headers) {
    if (typeof ua === TYPEOF.OBJECT) {
        if (isExtensions(ua, true)) {
            if (typeof extensions === TYPEOF.OBJECT) {
                headers = extensions; // case UAParser(extensions, headers)           
            }
            extensions = ua; // case UAParser(extensions)
        } else {
            headers = ua; // case UAParser(headers)
            extensions = undefined;
        }
        ua = undefined;
    } else if (typeof ua === TYPEOF.STRING && !isExtensions(extensions, true)) {
        headers = extensions; // case UAParser(ua, headers)
        extensions = undefined;
    }
    if (headers) {
        if (typeof headers.append === TYPEOF.FUNCTION) {
            // Convert Headers object into a plain object
            var kv = {};
            headers.forEach(function(v, k) {
                kv[String(k).toLowerCase()] = v;
            });
            headers = kv;
        } else {
            // Normalize headers field name into lowercase
            var normalized = {};
            for(var header in headers){
                if (headers.hasOwnProperty(header)) {
                    normalized[String(header).toLowerCase()] = headers[header];
                }
            }
            headers = normalized;
        }
    }
    if (!(this instanceof UAParser)) {
        return new UAParser(ua, extensions, headers).getResult();
    }
    var userAgent = typeof ua === TYPEOF.STRING ? ua : headers && headers[USER_AGENT] ? headers[USER_AGENT] : NAVIGATOR && NAVIGATOR.userAgent ? NAVIGATOR.userAgent : EMPTY, httpUACH = new UACHData(headers, true), regexMap = extensions ? extend(defaultRegexes, extensions) : defaultRegexes, createItemFunc = function(itemType) {
        if (itemType == RESULT) {
            return function() {
                return new UAItem(itemType, userAgent, regexMap, httpUACH).set('ua', userAgent).set(BROWSER, this.getBrowser()).set(CPU, this.getCPU()).set(DEVICE, this.getDevice()).set(ENGINE, this.getEngine()).set(OS, this.getOS()).get();
            };
        } else {
            return function() {
                return new UAItem(itemType, userAgent, regexMap[itemType], httpUACH).parseUA().get();
            };
        }
    };
    // public methods
    setProps.call(this, [
        [
            'getBrowser',
            createItemFunc(BROWSER)
        ],
        [
            'getCPU',
            createItemFunc(CPU)
        ],
        [
            'getDevice',
            createItemFunc(DEVICE)
        ],
        [
            'getEngine',
            createItemFunc(ENGINE)
        ],
        [
            'getOS',
            createItemFunc(OS)
        ],
        [
            'getResult',
            createItemFunc(RESULT)
        ],
        [
            'getUA',
            function() {
                return userAgent;
            }
        ],
        [
            'setUA',
            function(ua) {
                if (isString(ua)) userAgent = trim(ua, UA_MAX_LENGTH);
                return this;
            }
        ]
    ]).setUA(userAgent);
    return this;
}
UAParser.VERSION = LIBVERSION;
UAParser.BROWSER = enumerize([
    NAME,
    VERSION,
    MAJOR,
    TYPE
]);
UAParser.CPU = enumerize([
    ARCHITECTURE
]);
UAParser.DEVICE = enumerize([
    MODEL,
    VENDOR,
    TYPE,
    CONSOLE,
    MOBILE,
    SMARTTV,
    TABLET,
    WEARABLE,
    EMBEDDED
]);
UAParser.ENGINE = UAParser.OS = enumerize([
    NAME,
    VERSION
]);
;
}),
"[project]/frontend/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
const _warnonce = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function disableSmoothScrollDuringRouteTransition(fn, options = {}) {
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            (0, _warnonce.warnOnce)('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=disable-smooth-scroll.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bfcache.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ "default", {
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _bfcache = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return document.getElementById(hashFragment) ?? // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (domNode.parentElement?.localName === 'head') {
                        // TODO: We enter this state when metadata was rendered as part of the page or via Next.js.
                        // This is always a bug in Next.js and caused by React hoisting metadata.
                        // We need to replace `findDOMNode` in favor of Fragment Refs (when available) so that we can skip over metadata.
                        }
                    }
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        ;
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        // Scroll into view doesn't scroll horizontally by default when not needed
                        ;
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler({ segmentPath, children }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter({ tree, segmentPath, debugNameContext, cacheNode: maybeCacheNode, params, url, isActive }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const cacheNode = maybeCacheNode !== null ? maybeCacheNode : // This should only be reachable for inactive/hidden segments, during
    // prerendering The active segment should always be consistent with the
    // CacheNode tree. Regardless, if we don't have a matching CacheNode, we
    // must suspend rather than render nothing, to prevent showing an
    // inconsistent route.
    (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    let resolvedRsc;
    if ((0, _pprnavigations.isDeferredRsc)(rsc)) {
        const unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    let navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createNestedLayoutNavigationPromises } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)");
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    let children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            parentParams: params,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ name, loading, children }) {
    // If loading is a promise, unwrap it. This happens in cases where we haven't
    // yet received the loading data from the server — which includes whether or
    // not this layout has a loading component at all.
    //
    // It's OK to suspend here instead of inside the fallback because this
    // promise will resolve simultaneously with the data for the segment itself.
    // So it will never suspend for longer than it would have if we didn't use
    // a Suspense fallback at all.
    let loadingModuleData;
    if (typeof loading === 'object' && loading !== null && typeof loading.then === 'function') {
        const promiseForLoading = loading;
        loadingModuleData = (0, _react.use)(promiseForLoading);
    } else {
        loadingModuleData = loading;
    }
    if (loadingModuleData) {
        const loadingRsc = loadingModuleData[0];
        const loadingStyles = loadingModuleData[1];
        const loadingScripts = loadingModuleData[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, parentParams, url, isActive, debugNameContext } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentParallelRoutes = parentCacheNode.parallelRoutes;
    let segmentMap = parentParallelRoutes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!segmentMap) {
        segmentMap = new Map();
        parentParallelRoutes.set(parallelRouterKey, segmentMap);
    }
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    if (activeTree === undefined) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    const activeSegment = activeTree[0];
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcache.useRouterBFCache)(activeTree, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        // Read segment path from the parallel router cache node.
        const cacheNode = segmentMap.get(cacheKey) ?? null;
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        let params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            const paramName = segment[0];
            const paramCacheKey = segment[1];
            const paramType = segment[2];
            const paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = {
                    ...parentParams,
                    [paramName]: paramValue
                };
            }
        }
        const debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        const childDebugNameContext = debugName ?? debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        const isVirtual = debugName === undefined;
        const debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        // TODO: The loading module data for a segment is stored on the parent, then
        // applied to each of that parent segment's parallel route slots. In the
        // simple case where there's only one parallel route (the `children` slot),
        // this is no different from if the loading module data where stored on the
        // child directly. But I'm not sure this actually makes sense when there are
        // multiple parallel routes. It's not a huge issue because you always have
        // the option to define a narrower loading boundary for a particular slot. But
        // this sort of smells like an implementation accident to me.
        const loadingModuleData = parentCacheNode.loading;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndFocusHandler, {
                segmentPath: segmentPath,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                        errorComponent: error,
                        errorStyles: errorStyles,
                        errorScripts: errorScripts,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                            name: debugNameToDisplay,
                            loading: loadingModuleData,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                                notFound: notFound,
                                forbidden: forbidden,
                                unauthorized: unauthorized,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                            url: url,
                                            tree: tree,
                                            params: params,
                                            cacheNode: cacheNode,
                                            segmentPath: segmentPath,
                                            debugNameContext: childDebugNameContext,
                                            isActive: isActive && stateKey === activeStateKey
                                        }),
                                        segmentBoundaryTriggerNode
                                    ]
                                })
                            })
                        })
                    }),
                    segmentViewStateNode
                ]
            }),
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    const paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// in a more special way instead of checking the name, to distinguish them
    // from app-defined groups.
    segment === '(slot)');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map
}),
"[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule'
]); //# sourceMappingURL=reflect-utils.js.map
}),
"[project]/frontend/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A searchParam property was accessed directly with ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForSyncSpread() {
    console.error(`The keys of \`searchParams\` were accessed directly. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.browser.dev.js.map
}),
"[project]/frontend/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.browser.js.map
}),
"[project]/frontend/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A param property was accessed directly with ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForEnumeration() {
    console.error(`params are being enumerated. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=params.browser.dev.js.map
}),
"[project]/frontend/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=params.browser.js.map
}),
"[project]/frontend/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}),
"[project]/frontend/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return afterTaskAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=after-task-async-storage-instance.js.map
}),
"[project]/frontend/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorage", {
    enumerable: true,
    get: function() {
        return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
    }
});
const _aftertaskasyncstorageinstance = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=after-task-async-storage.external.js.map
}),
"[project]/frontend/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
const _staticgenerationbailout = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
const _aftertaskasyncstorageexternal = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)");
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    workStore.invalidDynamicUsageError ??= error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function() {
        return RenderStage;
    },
    StagedRenderingController: function() {
        return StagedRenderingController;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-client] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Before"] = 1] = "Before";
    RenderStage[RenderStage["Static"] = 2] = "Static";
    RenderStage[RenderStage["Runtime"] = 3] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 4] = "Dynamic";
    RenderStage[RenderStage["Abandoned"] = 5] = "Abandoned";
    return RenderStage;
}({});
class StagedRenderingController {
    constructor(abortSignal = null, hasRuntimePrefetch){
        this.abortSignal = abortSignal;
        this.hasRuntimePrefetch = hasRuntimePrefetch;
        this.currentStage = 1;
        this.staticInterruptReason = null;
        this.runtimeInterruptReason = null;
        this.staticStageEndTime = Infinity;
        this.runtimeStageEndTime = Infinity;
        this.runtimeStageListeners = [];
        this.dynamicStageListeners = [];
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.mayAbandon = false;
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                const { reason } = abortSignal;
                if (this.currentStage < 3) {
                    this.runtimeStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.runtimeStagePromise.reject(reason);
                }
                if (this.currentStage < 4 || this.currentStage === 5) {
                    this.dynamicStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.dynamicStagePromise.reject(reason);
                }
            }, {
                once: true
            });
            this.mayAbandon = true;
        }
    }
    onStage(stage, callback) {
        if (this.currentStage >= stage) {
            callback();
        } else if (stage === 3) {
            this.runtimeStageListeners.push(callback);
        } else if (stage === 4) {
            this.dynamicStageListeners.push(callback);
        } else {
            // This should never happen
            throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                value: "E881",
                enumerable: false,
                configurable: true
            });
        }
    }
    canSyncInterrupt() {
        // If we haven't started the render yet, it can't be interrupted.
        if (this.currentStage === 1) {
            return false;
        }
        const boundaryStage = this.hasRuntimePrefetch ? 4 : 3;
        return this.currentStage < boundaryStage;
    }
    syncInterruptCurrentStageWithReason(reason) {
        if (this.currentStage === 1) {
            return;
        }
        // If Sync IO occurs during the initial (abandonable) render, we'll retry it,
        // so we want a slightly different flow.
        // See the implementation of `abandonRenderImpl` for more explanation.
        if (this.mayAbandon) {
            return this.abandonRenderImpl();
        }
        // If we're in the final render, we cannot abandon it. We need to advance to the Dynamic stage
        // and capture the interruption reason.
        switch(this.currentStage){
            case 2:
                {
                    this.staticInterruptReason = reason;
                    this.advanceStage(4);
                    return;
                }
            case 3:
                {
                    // We only error for Sync IO in the runtime stage if the route
                    // is configured to use runtime prefetching.
                    // We do this to reflect the fact that during a runtime prefetch,
                    // Sync IO aborts aborts the render.
                    // Note that `canSyncInterrupt` should prevent us from getting here at all
                    // if runtime prefetching isn't enabled.
                    if (this.hasRuntimePrefetch) {
                        this.runtimeInterruptReason = reason;
                        this.advanceStage(4);
                    }
                    return;
                }
            case 4:
            case 5:
            default:
        }
    }
    getStaticInterruptReason() {
        return this.staticInterruptReason;
    }
    getRuntimeInterruptReason() {
        return this.runtimeInterruptReason;
    }
    getStaticStageEndTime() {
        return this.staticStageEndTime;
    }
    getRuntimeStageEndTime() {
        return this.runtimeStageEndTime;
    }
    abandonRender() {
        if (!this.mayAbandon) {
            throw Object.defineProperty(new _invarianterror.InvariantError('`abandonRender` called on a stage controller that cannot be abandoned.'), "__NEXT_ERROR_CODE", {
                value: "E938",
                enumerable: false,
                configurable: true
            });
        }
        this.abandonRenderImpl();
    }
    abandonRenderImpl() {
        // In staged rendering, only the initial render is abandonable.
        // We can abandon the initial render if
        //   1. We notice a cache miss, and need to wait for caches to fill
        //   2. A sync IO error occurs, and the render should be interrupted
        //      (this might be a lazy intitialization of a module,
        //       so we still want to restart in this case and see if it still occurs)
        // In either case, we'll be doing another render after this one,
        // so we only want to unblock the Runtime stage, not Dynamic, because
        // unblocking the dynamic stage would likely lead to wasted (uncached) IO.
        const { currentStage } = this;
        switch(currentStage){
            case 2:
                {
                    this.currentStage = 5;
                    this.resolveRuntimeStage();
                    return;
                }
            case 3:
                {
                    this.currentStage = 5;
                    return;
                }
            case 4:
            case 1:
            case 5:
                break;
            default:
                {
                    currentStage;
                }
        }
    }
    advanceStage(stage) {
        // If we're already at the target stage or beyond, do nothing.
        // (this can happen e.g. if sync IO advanced us to the dynamic stage)
        if (stage <= this.currentStage) {
            return;
        }
        let currentStage = this.currentStage;
        this.currentStage = stage;
        if (currentStage < 3 && stage >= 3) {
            this.staticStageEndTime = performance.now() + performance.timeOrigin;
            this.resolveRuntimeStage();
        }
        if (currentStage < 4 && stage >= 4) {
            this.runtimeStageEndTime = performance.now() + performance.timeOrigin;
            this.resolveDynamicStage();
            return;
        }
    }
    /** Fire the `onStage` listeners for the runtime stage and unblock any promises waiting for it. */ resolveRuntimeStage() {
        const runtimeListeners = this.runtimeStageListeners;
        for(let i = 0; i < runtimeListeners.length; i++){
            runtimeListeners[i]();
        }
        runtimeListeners.length = 0;
        this.runtimeStagePromise.resolve();
    }
    /** Fire the `onStage` listeners for the dynamic stage and unblock any promises waiting for it. */ resolveDynamicStage() {
        const dynamicListeners = this.dynamicStageListeners;
        for(let i = 0; i < dynamicListeners.length; i++){
            dynamicListeners[i]();
        }
        dynamicListeners.length = 0;
        this.dynamicStagePromise.resolve();
    }
    getStagePromise(stage) {
        switch(stage){
            case 3:
                {
                    return this.runtimeStagePromise.promise;
                }
            case 4:
                {
                    return this.dynamicStagePromise.promise;
                }
            default:
                {
                    stage;
                    throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
} //# sourceMappingURL=staged-rendering.js.map
}),
"[project]/frontend/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createPrerenderSearchParamsForClientPage: null,
    createSearchParamsFromClient: null,
    createServerSearchParamsForMetadata: null,
    createServerSearchParamsForServerPage: null,
    makeErroringSearchParamsForUseCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrerenderSearchParamsForClientPage: function() {
        return createPrerenderSearchParamsForClientPage;
    },
    createSearchParamsFromClient: function() {
        return createSearchParamsFromClient;
    },
    createServerSearchParamsForMetadata: function() {
        return createServerSearchParamsForMetadata;
    },
    createServerSearchParamsForServerPage: function() {
        return createServerSearchParamsForServerPage;
    },
    makeErroringSearchParamsForUseCache: function() {
        return makeErroringSearchParamsForUseCache;
    }
});
const _reflect = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function createSearchParamsFromClient(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E769",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E739",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                return createRenderSearchParams(underlyingSearchParams, workStore, workUnitStore);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
const createServerSearchParamsForMetadata = createServerSearchParamsForServerPage;
function createServerSearchParamsForServerPage(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerSearchParamsForServerPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E747",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore);
            case 'request':
                return createRenderSearchParams(underlyingSearchParams, workStore, workUnitStore);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderSearchParamsForClientPage(workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                // We're prerendering in a mode that aborts (cacheComponents) and should stall
                // the promise to ensure the RSC side is considered dynamic
                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`searchParams`');
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E768",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E746",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
                return Promise.resolve({});
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createStaticPrerenderSearchParams(workStore, prerenderStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            // We are in a cacheComponents (PPR or otherwise) prerender
            return makeHangingSearchParams(workStore, prerenderStore);
        case 'prerender-ppr':
        case 'prerender-legacy':
            // We are in a legacy static generation and need to interrupt the
            // prerender when search params are accessed.
            return makeErroringSearchParams(workStore, prerenderStore);
        default:
            return prerenderStore;
    }
}
function createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore) {
    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedSearchParams(underlyingSearchParams));
}
function createRenderSearchParams(underlyingSearchParams, workStore, requestStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            // Semantically we only need the dev tracking when running in `next dev`
            // but since you would never use next dev with production NODE_ENV we use this
            // as a proxy so we can statically exclude this code from production builds.
            return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams, workStore, requestStore);
        } else //TURBOPACK unreachable
        ;
    }
}
const CachedSearchParams = new WeakMap();
const CachedSearchParamsForUseCache = new WeakMap();
function makeHangingSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(prerenderStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`searchParams`');
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                default:
                    {
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        }
    });
    CachedSearchParams.set(prerenderStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const underlyingSearchParams = {};
    // For search params we don't construct a ReactPromise because we want to interrupt
    // rendering on any property access that was not set from outside and so we only want
    // to have properties like value and status if React sets them.
    const promise = Promise.resolve(underlyingSearchParams);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && prop === 'then') {
                const expression = '`await searchParams`, `searchParams.then`, or similar';
                if (workStore.dynamicShouldError) {
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                } else if (prerenderStore.type === 'prerender-ppr') {
                    // PPR Prerender (no cacheComponents)
                    (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                    // Legacy Prerender
                    (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    CachedSearchParams.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringSearchParamsForUseCache(workStore) {
    const cachedSearchParams = CachedSearchParamsForUseCache.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve({});
    const proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it. We know it
                // isn't a dynamic access because it can only be something that was
                // previously written to the promise and thus not an underlying
                // searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore, get);
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    CachedSearchParamsForUseCache.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeUntrackedSearchParams(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    return promise;
}
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams, workStore, requestStore) {
    if (requestStore.asyncApiPromises) {
        // Do not cache the resulting promise. If we do, we'll only show the first "awaited at"
        // across all segments that receive searchParams.
        return makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore);
    } else {
        const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
        if (cachedSearchParams) {
            return cachedSearchParams;
        }
        const promise = makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore);
        CachedSearchParams.set(requestStore, promise);
        return promise;
    }
}
function makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore) {
    const promiseInitialized = {
        current: false
    };
    const proxiedUnderlying = instrumentSearchParamsObjectWithDevWarnings(underlyingSearchParams, workStore, promiseInitialized);
    let promise;
    if (requestStore.asyncApiPromises) {
        // We wrap each instance of searchParams in a `new Promise()`.
        // This is important when all awaits are in third party which would otherwise
        // track all the way to the internal params.
        const sharedSearchParamsParent = requestStore.asyncApiPromises.sharedSearchParamsParent;
        promise = new Promise((resolve, reject)=>{
            sharedSearchParamsParent.then(()=>resolve(proxiedUnderlying), reject);
        });
        // @ts-expect-error
        promise.displayName = 'searchParams';
    } else {
        promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(proxiedUnderlying, requestStore, _stagedrendering.RenderStage.Runtime);
    }
    promise.then(()=>{
        promiseInitialized.current = true;
    }, // is aborted before it can reach the runtime stage.
    // In that case, we have to prevent an unhandled rejection from the promise
    // created by this `.then()` call.
    // This does not affect the `promiseInitialized` logic above,
    // because `proxiedUnderlying` will not be used to resolve the promise,
    // so there's no risk of any of its properties being accessed and triggering
    // an undesireable warning.
    ignoreReject);
    return instrumentSearchParamsPromiseWithDevWarnings(underlyingSearchParams, promise, workStore);
}
function ignoreReject() {}
function instrumentSearchParamsObjectWithDevWarnings(underlyingSearchParams, workStore, promiseInitialized) {
    // We have an unfortunate sequence of events that requires this initialization logic. We want to instrument the underlying
    // searchParams object to detect if you are accessing values in dev. This is used for warnings and for things like the static prerender
    // indicator. However when we pass this proxy to our Promise.resolve() below the VM checks if the resolved value is a promise by looking
    // at the `.then` property. To our dynamic tracking logic this is indistinguishable from a `then` searchParam and so we would normally trigger
    // dynamic tracking. However we know that this .then is not real dynamic access, it's just how thenables resolve in sequence. So we introduce
    // this initialization concept so we omit the dynamic check until after we've constructed our resolved promise.
    return new Proxy(underlyingSearchParams, {
        get (target, prop, receiver) {
            if (typeof prop === 'string' && promiseInitialized.current) {
                if (workStore.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (workStore.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            if (workStore.dynamicShouldError) {
                const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            }
            return Reflect.ownKeys(target);
        }
    });
}
function instrumentSearchParamsPromiseWithDevWarnings(underlyingSearchParams, promise, workStore) {
    // Track which properties we should warn for.
    const proxiedProperties = new Set();
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    return new Proxy(promise, {
        get (target, prop, receiver) {
            if (prop === 'then' && workStore.dynamicShouldError) {
                const expression = '`searchParams.then`';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            }
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            const expression = '`Object.keys(searchParams)` or similar';
            warnForSyncAccess(workStore.route, expression);
            return Reflect.ownKeys(target);
        }
    });
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createSearchAccessError);
function createSearchAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E848",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=search-params.js.map
}),
"[project]/frontend/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return dynamicAccessAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const dynamicAccessAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=dynamic-access-async-storage-instance.js.map
}),
"[project]/frontend/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorage", {
    enumerable: true,
    get: function() {
        return _dynamicaccessasyncstorageinstance.dynamicAccessAsyncStorageInstance;
    }
});
const _dynamicaccessasyncstorageinstance = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=dynamic-access-async-storage.external.js.map
}),
"[project]/frontend/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createParamsFromClient: null,
    createPrerenderParamsForClientSegment: null,
    createServerParamsForMetadata: null,
    createServerParamsForRoute: null,
    createServerParamsForServerSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createParamsFromClient: function() {
        return createParamsFromClient;
    },
    createPrerenderParamsForClientSegment: function() {
        return createPrerenderParamsForClientSegment;
    },
    createServerParamsForMetadata: function() {
        return createServerParamsForMetadata;
    },
    createServerParamsForRoute: function() {
        return createServerParamsForRoute;
    },
    createServerParamsForServerSegment: function() {
        return createServerParamsForServerSegment;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
const _dynamicaccessasyncstorageexternal = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function createParamsFromClient(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E736",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E770",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore, workUnitStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
const createServerParamsForMetadata = createServerParamsForServerSegment;
function createServerParamsForRoute(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForRoute should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E738",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderParams(underlyingParams, workUnitStore);
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore, workUnitStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerParamsForServerSegment(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForServerSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E743",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderParams(underlyingParams, workUnitStore);
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore, workUnitStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderParamsForClientSegment(underlyingParams) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing workStore in createPrerenderParamsForClientSegment'), "__NEXT_ERROR_CODE", {
            value: "E773",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                const fallbackParams = workUnitStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(let key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`params`');
                        }
                    }
                }
                break;
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderParamsForClientSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E734",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'prerender-runtime':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // We're prerendering in a mode that does not abort. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve(underlyingParams);
}
function createStaticPrerenderParams(underlyingParams, workStore, prerenderStore) {
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(const key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return makeHangingParams(underlyingParams, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-ppr':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(const key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            return makeErroringParams(underlyingParams, fallbackParams, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-legacy':
            break;
        default:
            prerenderStore;
    }
    return makeUntrackedParams(underlyingParams);
}
function createRuntimePrerenderParams(underlyingParams, workUnitStore) {
    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedParams(underlyingParams));
}
function createRenderParamsInProd(underlyingParams) {
    return makeUntrackedParams(underlyingParams);
}
function createRenderParamsInDev(underlyingParams, devFallbackParams, workStore, requestStore) {
    let hasFallbackParams = false;
    if (devFallbackParams) {
        for(let key in underlyingParams){
            if (devFallbackParams.has(key)) {
                hasFallbackParams = true;
                break;
            }
        }
    }
    return makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams, hasFallbackParams, workStore, requestStore);
}
const CachedParams = new WeakMap();
const fallbackParamsProxyHandler = {
    get: function get(target, prop, receiver) {
        if (prop === 'then' || prop === 'catch' || prop === 'finally') {
            const originalMethod = _reflect.ReflectAdapter.get(target, prop, receiver);
            return ({
                [prop]: (...args)=>{
                    const store = _dynamicaccessasyncstorageexternal.dynamicAccessAsyncStorage.getStore();
                    if (store) {
                        store.abortController.abort(Object.defineProperty(new Error(`Accessed fallback \`params\` during prerendering.`), "__NEXT_ERROR_CODE", {
                            value: "E691",
                            enumerable: false,
                            configurable: true
                        }));
                    }
                    return new Proxy(originalMethod.apply(target, args), fallbackParamsProxyHandler);
                }
            })[prop];
        }
        return _reflect.ReflectAdapter.get(target, prop, receiver);
    }
};
function makeHangingParams(underlyingParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = new Proxy((0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`params`'), fallbackParamsProxyHandler);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeErroringParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const augmentedUnderlying = {
        ...underlyingParams
    };
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(augmentedUnderlying);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when cacheComponents is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    enumerable: true
                });
            }
        }
    });
    return promise;
}
function makeUntrackedParams(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams, hasFallbackParams, workStore, requestStore) {
    if (requestStore.asyncApiPromises && hasFallbackParams) {
        // We wrap each instance of params in a `new Promise()`, because deduping
        // them across requests doesn't work anyway and this let us show each
        // await a different set of values. This is important when all awaits
        // are in third party which would otherwise track all the way to the
        // internal params.
        const sharedParamsParent = requestStore.asyncApiPromises.sharedParamsParent;
        const promise = new Promise((resolve, reject)=>{
            sharedParamsParent.then(()=>resolve(underlyingParams), reject);
        });
        // @ts-expect-error
        promise.displayName = 'params';
        return instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore);
    }
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = hasFallbackParams ? (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingParams, requestStore, _stagedrendering.RenderStage.Runtime) : Promise.resolve(underlyingParams);
    const proxiedPromise = instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore);
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore) {
    // Track which properties we should warn for.
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    return new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            warnForSyncAccess(workStore.route, expression);
            return Reflect.ownKeys(target);
        }
    });
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createParamsAccessError);
function createParamsAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E834",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=params.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
function ClientPageRoot({ Component, serverProvidedParams }) {
    let searchParams;
    let params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    if (typeof window === 'undefined') {
        const { workAsyncStorage } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
        let clientSearchParams;
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling searchParams in a client Page.'), "__NEXT_ERROR_CODE", {
                value: "E564",
                enumerable: false,
                configurable: true
            });
        }
        const { createSearchParamsFromClient } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)");
        clientSearchParams = createSearchParamsFromClient(searchParams, store);
        const { createParamsFromClient } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)");
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    } else {
        const { createRenderSearchParamsFromClient } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
        const clientSearchParams = createRenderSearchParamsFromClient(searchParams);
        const { createRenderParamsFromClient } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-page.js.map
}),
"[project]/frontend/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function ClientSegmentRoot({ Component, slots, serverProvidedParams }) {
    let params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    if (typeof window === 'undefined') {
        const { workAsyncStorage } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling params in a client segment such as a Layout or Template.'), "__NEXT_ERROR_CODE", {
                value: "E600",
                enumerable: false,
                configurable: true
            });
        }
        const { createParamsFromClient } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)");
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    } else {
        const { createRenderParamsFromClient } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-segment.js.map
}),
"[project]/frontend/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
}; //# sourceMappingURL=icon-mark.js.map
}),
]);

//# sourceMappingURL=9e883_3a2f2795._.js.map