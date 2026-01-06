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
]);

//# sourceMappingURL=frontend_src_5bc71388._.js.map