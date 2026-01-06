(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/ParticleBackground.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ParticleBackground = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            let width = canvas.width = window.innerWidth;
            let height = canvas.height = window.innerHeight;
            // ===== CONFIGURATION SECTION =====
            const CONFIG = {
                // Star settings
                starCount: 150,
                starMaxRadius: 1.5,
                starSpeed: 0.05,
                starTwinkleSpeed: 0.03,
                // Mouse interaction
                mouseInteractionRadius: 120,
                mouseInteractionStrength: 0.02,
                // Moon settings
                moonRadius: 50,
                moonGlowSpeed: 0.02,
                // Shooting star settings
                // shootingStarFrequency: 0.995, // Higher = less frequent (0.99 = more, 0.999 = less)
                // shootingStarMinLength: 60,   // Minimum trail length
                // shootingStarMaxLength: 120,  // Maximum trail length
                // shootingStarMinSpeed: 4,     // Minimum speed
                // shootingStarMaxSpeed: 7,     // Maximum speed
                // shootingStarFadeSpeed: 0.008, // How fast they fade (higher = faster fade)
                // Performance
                useRequestAnimationFrame: true
            };
            // ===== END CONFIGURATION =====
            // Create stars with twinkle properties
            const stars = Array.from({
                length: CONFIG.starCount
            }).map({
                "ParticleBackground.useEffect.stars": ()=>({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        radius: Math.random() * CONFIG.starMaxRadius,
                        speed: Math.random() * CONFIG.starSpeed + 0.01,
                        twinkle: Math.random() * Math.PI * 2,
                        twinkleSpeed: Math.random() * CONFIG.starTwinkleSpeed + 0.01
                    })
            }["ParticleBackground.useEffect.stars"]);
            // Shooting stars array
            // const shootingStars = [];
            // Create shooting star from moon position
            // const createShootingStar = () => {
            //   if (Math.random() > CONFIG.shootingStarFrequency) {
            //     const moonPos = getMoonPosition();
            //     shootingStars.push({
            //       x: moonPos.x,
            //       y: moonPos.y,
            //       length: Math.random() * (CONFIG.shootingStarMaxLength - CONFIG.shootingStarMinLength) + CONFIG.shootingStarMinLength,
            //       speed: Math.random() * (CONFIG.shootingStarMaxSpeed - CONFIG.shootingStarMinSpeed) + CONFIG.shootingStarMinSpeed,
            //       opacity: 1,
            //       angle: Math.PI, // Shooting left
            //     });
            //   }
            // };
            // Moon properties - responsive positioning
            const getMoonPosition = {
                "ParticleBackground.useEffect.getMoonPosition": ()=>{
                    if (width < 768) {
                        return {
                            x: width - 80,
                            y: 80
                        };
                    } else {
                        return {
                            x: width * 0.85,
                            y: height * 0.15
                        };
                    }
                }
            }["ParticleBackground.useEffect.getMoonPosition"];
            const moon = {
                ...getMoonPosition(),
                radius: CONFIG.moonRadius,
                glow: 0,
                glowDirection: 1
            };
            const mouse = {
                x: null,
                y: null
            };
            const handleMouseMove = {
                "ParticleBackground.useEffect.handleMouseMove": (e)=>{
                    if (window.innerWidth > 768) {
                        mouse.x = e.x;
                        mouse.y = e.y;
                    }
                }
            }["ParticleBackground.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            const draw = {
                "ParticleBackground.useEffect.draw": ()=>{
                    // Rich deep gradient background (navy to deep purple)
                    const gradient = ctx.createLinearGradient(0, 0, width, height);
                    gradient.addColorStop(0, "#0a0e27");
                    gradient.addColorStop(0.5, "#121829");
                    gradient.addColorStop(1, "#1a1633");
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, height);
                    // Draw glowing moon
                    moon.glow += CONFIG.moonGlowSpeed * moon.glowDirection;
                    if (moon.glow > 1) moon.glowDirection = -1;
                    if (moon.glow < 0) moon.glowDirection = 1;
                    // Moon glow
                    const glowGradient = ctx.createRadialGradient(moon.x, moon.y, moon.radius * 0.5, moon.x, moon.y, moon.radius * (2 + moon.glow * 0.3));
                    glowGradient.addColorStop(0, "rgba(255, 250, 230, 0.8)");
                    glowGradient.addColorStop(0.3, "rgba(255, 250, 200, 0.4)");
                    glowGradient.addColorStop(0.6, "rgba(200, 210, 255, 0.2)");
                    glowGradient.addColorStop(1, "rgba(150, 180, 255, 0)");
                    ctx.fillStyle = glowGradient;
                    ctx.beginPath();
                    ctx.arc(moon.x, moon.y, moon.radius * 2.5, 0, Math.PI * 2);
                    ctx.fill();
                    // Moon surface
                    ctx.fillStyle = "#fffef0";
                    ctx.beginPath();
                    ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
                    ctx.fill();
                    // Moon craters (subtle texture)
                    ctx.fillStyle = "rgba(220, 220, 210, 0.3)";
                    ctx.beginPath();
                    ctx.arc(moon.x - 15, moon.y - 10, 8, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(moon.x + 10, moon.y + 5, 6, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(moon.x + 5, moon.y - 20, 5, 0, Math.PI * 2);
                    ctx.fill();
                    // Draw twinkling stars
                    for (let star of stars){
                        const dx = star.x - mouse.x;
                        const dy = star.y - mouse.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        // Slight movement if near cursor
                        if (distance < CONFIG.mouseInteractionRadius && window.innerWidth > 768) {
                            star.x += dx * CONFIG.mouseInteractionStrength;
                            star.y += dy * CONFIG.mouseInteractionStrength;
                        }
                        // Calculate twinkle opacity
                        star.twinkle += star.twinkleSpeed;
                        const opacity = (Math.sin(star.twinkle) + 1) / 2;
                        // Draw star with glow
                        const starGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3);
                        starGlow.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
                        starGlow.addColorStop(0.5, `rgba(200, 220, 255, ${opacity * 0.5})`);
                        starGlow.addColorStop(1, "rgba(150, 180, 255, 0)");
                        ctx.fillStyle = starGlow;
                        ctx.beginPath();
                        ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
                        ctx.fill();
                        // Solid star center
                        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.beginPath();
                        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                        ctx.fill();
                        // Move down slowly
                        star.y += star.speed;
                        if (star.y > height) {
                            star.y = 0;
                            star.x = Math.random() * width;
                        }
                    }
                    // Create new shooting stars occasionally
                    // createShootingStar();
                    // Draw and update shooting stars
                    // for (let i = shootingStars.length - 1; i >= 0; i--) {
                    //   const s = shootingStars[i];
                    //   // Calculate tail end position
                    //   const tailX = s.x - Math.cos(s.angle) * s.length;
                    //   const tailY = s.y - Math.sin(s.angle) * s.length;
                    //   // Draw shooting star trail
                    //   const trailGradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
                    //   trailGradient.addColorStop(0, `rgba(255, 255, 255, ${s.opacity * 0.9})`);
                    //   trailGradient.addColorStop(0.3, `rgba(200, 220, 255, ${s.opacity * 0.6})`);
                    //   trailGradient.addColorStop(1, `rgba(200, 220, 255, 0)`);
                    //   ctx.strokeStyle = trailGradient;
                    //   ctx.lineWidth = 2;
                    //   ctx.lineCap = 'round';
                    //   ctx.beginPath();
                    //   ctx.moveTo(s.x, s.y);
                    //   ctx.lineTo(tailX, tailY);
                    //   ctx.stroke();
                    //   // Draw bright head
                    //   ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
                    //   ctx.beginPath();
                    //   ctx.arc(s.x, s.y, 2.5, 0, Math.PI * 2);
                    //   ctx.fill();
                    //   // Update position (moving left)
                    //   s.x += Math.cos(s.angle) * s.speed;
                    //   s.y += Math.sin(s.angle) * s.speed * 0.3; // Slight downward angle
                    //   s.opacity -= CONFIG.shootingStarFadeSpeed;
                    //   // Remove if faded or off screen
                    //   if (s.opacity <= 0 || s.x < -s.length) {
                    //     shootingStars.splice(i, 1);
                    //   }
                    // }
                    if (CONFIG.useRequestAnimationFrame) {
                        requestAnimationFrame(draw);
                    }
                }
            }["ParticleBackground.useEffect.draw"];
            draw();
            const handleResize = {
                "ParticleBackground.useEffect.handleResize": ()=>{
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                    const newPos = getMoonPosition();
                    moon.x = newPos.x;
                    moon.y = newPos.y;
                }
            }["ParticleBackground.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "ParticleBackground.useEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                    window.removeEventListener("mousemove", handleMouseMove);
                }
            })["ParticleBackground.useEffect"];
        }
    }["ParticleBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            background: "linear-gradient(to bottom right, #0a0e27, #1a1633)"
        }
    }, void 0, false, {
        fileName: "[project]/frontend/src/ParticleBackground.jsx",
        lineNumber: 259,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ParticleBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = ParticleBackground;
const __TURBOPACK__default__export__ = ParticleBackground;
var _c;
__turbopack_context__.k.register(_c, "ParticleBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/images.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const profile = "/images/avarta_profile.png";
//
// Movieo
const movie2 = "/images/Movieo/preview2.jpg";
const movie1 = "/images/Movieo/preview1.jpg";
const movie3 = "/images/Movieo/preview3.jpg";
const movie4 = "/images/Movieo/preview4.jpg";
const movie5 = "/images/Movieo/preview5.jpg";
const movie6 = "/images/Movieo/preview6.jpg";
const movie7 = "/images/Movieo/preview7.jpg";
const movie8 = "/images/Movieo/preview8.jpg";
// const movie9 = "/images/Movieo/preview19.jpg";
// Netdownloader
const net_downloader1 = "/images/netdownloader/netdownloader1.png";
const net_downloader2 = "/images/netdownloader/netdownloader2.jpg";
// Mexant
const mexant1 = "/images/mexant/mexant1.jpg";
const mexant2 = "/images/mexant/mexant2.jpg";
const mexant3 = "/images/mexant/mexant3.jpg";
// Joycaring
const joycaring1 = "/images/joycaring/joycaring1.jpg";
const joycaring2 = "/images/joycaring/joycaring2.jpg";
// Html, css
const portfoliody = "/images/html_css/portfoliody.png";
const Glass_effects = "/images/html_css/Glass form effects.png";
// laravel;
const laravelblog = "/images/laravel/laravel blog.jpg";
const myclasslist1 = "/images/laravel/myclasslist1.jpg";
const myclasslist2 = "/images/laravel/myclasslist2.jpg";
// Sunwave;
const sunwaveclone1 = "/images/sunwave/sunwavve_clone.png";
const sunwaveclone2 = "/images/sunwave/sunwaveclone2.png";
const sunwaveclone3 = "/images/sunwave/sunwaveclone3.png";
// php;
const crud = "/images/php/crud.jpg";
// App
// Dyshare
const dysharex1 = "/images/dyshare/dysharex.jpeg";
const dysharex2 = "/images/dyshare/dyshare2.jpeg";
const dysharex3 = "/images/dyshare/dyshare3.jpeg";
const instantly = "/images/instantly/instantly.png";
const opayclone = "/images/app/opay react native.png";
const replico1 = "/images/replico.jpeg";
const cocobase1 = "/images/cocobase/cocobase.png";
const cocomailer = "/images/coco-mailer/cocomailer.png";
const cocomailer2 = "/images/coco-mailer/cocomailer2.jpeg";
const cocomailer3 = "/images/coco-mailer/cocomailer3.jpeg";
const xpay = "/images/xpay/xpay.png";
const xpay2 = "/images/xpay/xpay2.png";
const seasonalW1 = "/images/seasonalWishes/s1.png";
const seasonalW2 = "/images/seasonalWishes/s2.png";
const emialuge1 = "/images/em_Investment/em1.png";
const emialuge2 = "/images/em_Investment/em2.png";
const emialuge3 = "/images/em_Investment/em3.png";
const dp = "/images/dp-removebg-preview.png";
const dp_test = "/testdp-removebg-preview.png";
const __TURBOPACK__default__export__ = {
    dysharex1,
    dysharex2,
    dysharex3,
    instantly,
    cocobase1,
    seasonalW1,
    seasonalW2,
    cocomailer,
    cocomailer2,
    cocomailer3,
    replico1,
    profile,
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    movie6,
    movie7,
    movie8,
    emialuge1,
    emialuge2,
    emialuge3,
    dp,
    dp_test,
    xpay,
    xpay2,
    mexant1,
    mexant2,
    mexant3,
    net_downloader1,
    net_downloader2,
    joycaring1,
    joycaring2,
    portfoliody,
    Glass_effects,
    laravelblog,
    crud,
    myclasslist1,
    myclasslist2,
    opayclone,
    sunwaveclone1,
    sunwaveclone2,
    sunwaveclone3
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/icons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const design = "/icons/icon-design.svg";
const dev = "/icons/icon-dev.svg";
const app = "/icons/icon-app.svg";
const photo = "/icons/icon-photo.svg";
const __TURBOPACK__default__export__ = {
    design,
    dev,
    app,
    photo
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/images.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/icons.js [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/images.js [app-client] (ecmascript) <export default as images>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "images",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/images.js [app-client] (ecmascript)");
}),
"[project]/frontend/src/components/Layout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/src/assets/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__ = __turbopack_context__.i("[project]/frontend/src/assets/images.js [app-client] (ecmascript) <export default as images>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Layout({ children }) {
    _s();
    const sidebarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sidebarBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Layout.useEffect": ()=>{
            const sidebar = sidebarRef.current;
            const sidebarBtn = sidebarBtnRef.current;
            if (sidebar && sidebarBtn) {
                const elementToggleFunc = {
                    "Layout.useEffect.elementToggleFunc": (elem)=>{
                        elem.classList.toggle("active");
                    }
                }["Layout.useEffect.elementToggleFunc"];
                sidebarBtn.addEventListener("click", {
                    "Layout.useEffect": ()=>{
                        elementToggleFunc(sidebar);
                    }
                }["Layout.useEffect"]);
                // Cleanup event listener when the component unmounts
                return ({
                    "Layout.useEffect": ()=>{
                        sidebarBtn.removeEventListener("click", {
                            "Layout.useEffect": ()=>{
                                elementToggleFunc(sidebar);
                            }
                        }["Layout.useEffect"]);
                    }
                })["Layout.useEffect"];
            }
        }
    }["Layout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar",
                "data-sidebar": true,
                ref: sidebarRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "avatar-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].dp,
                                    alt: "Richard Hanrick",
                                    width: "80"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Layout.jsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "info-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "name",
                                        title: "Richard Hanrick",
                                        children: "Dy coderx"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "title",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            style: {
                                                backgroundColor: "transparent",
                                                color: "white"
                                            },
                                            href: "https://drive.google.com/file/d/10yxOwOi6UnWG1tpcttzrmik6L-OLl-II/view?usp=sharing",
                                            children: "Acess Cv"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Layout.jsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "info_more-btn",
                                "data-sidebar-btn": true,
                                ref: sidebarBtnRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Show Contacts"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-chevron-down"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Layout.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-info_more"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Layout.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "separator"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Layout.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "contacts-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "contact-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-envelope"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Layout.jsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "contact-title",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:otamereisrael8@gmail.com",
                                                className: "contact-link",
                                                children: "otamereisrael8@gmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "contact-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-phone-alt"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Layout.jsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "contact-title",
                                                children: "Phone"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+2349161712483",
                                                className: "contact-link",
                                                children: "+234 91 6171 24 83"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "contact-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-calendar-alt"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Layout.jsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "contact-title",
                                                children: "Birthday"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                dateTime: "2005-10-08",
                                                children: "October 8, 2005"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "contact-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-map-marker-alt"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Layout.jsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "contact-title",
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                children: "Benin, Edo-state, Nigeria"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Layout.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "separator"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Layout.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "social-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "social-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://web.facebook.com/tina.otamere.9",
                                    className: "social-link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fab fa-facebook-f"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Layout.jsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "social-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://x.com/IsraelOtam69481",
                                    className: "social-link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fab fa-twitter"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Layout.jsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "social-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.instagram.com/tina.otamere.9/",
                                    className: "social-link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fab fa-instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Layout.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "social-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/Dynamic323/",
                                    className: "social-link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fab fa-github"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Layout.jsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Layout.jsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Layout.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Layout.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Layout.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-content",
                children: children
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Layout.jsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Layout.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Layout, "KmUwIYdYZjVY3PM8QT4/VZ05tX8=");
_c = Layout;
const __TURBOPACK__default__export__ = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/VisitorNotifier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisitorNotifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ua$2d$parser$2d$js$2f$src$2f$main$2f$ua$2d$parser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ua-parser-js/src/main/ua-parser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function VisitorNotifier() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisitorNotifier.useEffect": ()=>{
            const collectVisitorInfo = {
                "VisitorNotifier.useEffect.collectVisitorInfo": async ()=>{
                    try {
                        const ipRes = await fetch("https://api.ipify.org?format=json");
                        const { ip } = await ipRes.json();
                        const locRes = await fetch(`https://ipwho.is/${ip}`);
                        const { city, region: regionName, country, continent } = await locRes.json();
                        const location = `${city}, ${regionName}, ${country}`;
                        const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ua$2d$parser$2d$js$2f$src$2f$main$2f$ua$2d$parser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UAParser"]();
                        const { browser, os, device } = parser.getResult();
                        const deviceName = device.vendor && device.model ? `${device.vendor} ${device.model}` : `${browser.name} (${os.name})`;
                        const text = `
🚨 *New Visitor*
━━━━━━━━━━━━━━━
 *Page*: ${window.location.pathname}
🌍 *Location*: ${location}
📱 *Device*: ${deviceName}
 *IP*: ${ip}
 *Time*: ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━
        `;
                        await fetch("/api/telegram", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                text
                            })
                        });
                    } catch (err) {
                        console.error("Telegram notify error:", err);
                    }
                }
            }["VisitorNotifier.useEffect.collectVisitorInfo"];
            collectVisitorInfo();
        }
    }["VisitorNotifier.useEffect"], []);
    return null;
}
_s(VisitorNotifier, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = VisitorNotifier;
var _c;
__turbopack_context__.k.register(_c, "VisitorNotifier");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
]);

//# sourceMappingURL=frontend_c1fb2dae._.js.map