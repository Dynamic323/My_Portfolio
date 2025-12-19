module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/ParticleBackground.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ParticleBackground = ()=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        }).map(()=>({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * CONFIG.starMaxRadius,
                speed: Math.random() * CONFIG.starSpeed + 0.01,
                twinkle: Math.random() * Math.PI * 2,
                twinkleSpeed: Math.random() * CONFIG.starTwinkleSpeed + 0.01
            }));
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
        const getMoonPosition = ()=>{
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
        };
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
        const handleMouseMove = (e)=>{
            if (window.innerWidth > 768) {
                mouse.x = e.x;
                mouse.y = e.y;
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        const draw = ()=>{
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
        };
        draw();
        const handleResize = ()=>{
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            const newPos = getMoonPosition();
            moon.x = newPos.x;
            moon.y = newPos.y;
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
        fileName: "[project]/src/ParticleBackground.jsx",
        lineNumber: 259,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ParticleBackground;
}),
"[project]/public/images/avarta_profile.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/avarta_profile.86047843.png");}),
"[project]/public/images/avarta_profile.png.mjs { IMAGE => \"[project]/public/images/avarta_profile.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$avarta_profile$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/avarta_profile.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$avarta_profile$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABA0lEQVR42k2Ov0sCYQBA78d393V3cFlIKgRelAaGdC1RFxVXSltE1EGdaXFCCoII6iInDjqIoJM4+WNycnN0clJHJxdB/A8EJ0H4dJDTNz7e8DBsA8PunzgvPekLUdYgZHlsF4Ik92yCWL959C1//Mn5tfRaBoBijYCmocXtcA1T6jtqlbLoT/GNGIazGcEBA+0hz92oGFRQK5dAVT02PjabzowAEAS8PxdCleDbrJOPzr690j+kANxO4DjOcbwQeJIGeuCjd2i22NcK3wwC2uq8/T190HqiN7z4StQWqt7si7KikYCiMc5kdTte4tMrtYjkSA19ZtrIX+ii50hjwh8JrhXApz8X0ER3AgAAAABJRU5ErkJggg=="
};
}),
"[project]/public/images/Movieo/preview2.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/preview2.e51650c0.jpg");}),
"[project]/public/images/Movieo/preview2.jpg.mjs { IMAGE => \"[project]/public/images/Movieo/preview2.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/Movieo/preview2.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1590,
    height: 767,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzmSCAW+RAgbAO7nP86iN+5o0ux//Z"
};
}),
"[project]/public/images/Movieo/preview1.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/preview1.0136f03f.jpg");}),
"[project]/public/images/Movieo/preview1.jpg.mjs { IMAGE => \"[project]/public/images/Movieo/preview1.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/Movieo/preview1.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1590,
    height: 767,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzGOTEDR7Exsz05zkc1jJe8mbR2a8j/9k="
};
}),
"[project]/public/images/Movieo/preview3.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/preview3.d4989940.jpg");}),
"[project]/public/images/Movieo/preview3.jpg.mjs { IMAGE => \"[project]/public/images/Movieo/preview3.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/Movieo/preview3.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1590,
    height: 767,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDkYtPhjsJZFyG8nPb+79KUPfg2+g5+7UjFdT//2Q=="
};
}),
"[project]/public/images/Movieo/preview4.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/preview4.65ce1eb1.jpg");}),
"[project]/public/images/Movieo/preview4.jpg.mjs { IMAGE => \"[project]/public/images/Movieo/preview4.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview4$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/Movieo/preview4.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview4$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1590,
    height: 767,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDi4wE0WQgL80QJyoP9KmPvTafQ1fuwVup//9k="
};
}),
"[project]/public/images/Movieo/preview5.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/preview5.e502467b.jpg");}),
"[project]/public/images/Movieo/preview5.jpg.mjs { IMAGE => \"[project]/public/images/Movieo/preview5.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview5$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/Movieo/preview5.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview5$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1590,
    height: 767,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzi4mAjWAQxAbFO4J83T1p9B7H/9k="
};
}),
"[project]/public/images/Movieo/preview6.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/preview6.2b6ad5a4.jpg");}),
"[project]/public/images/Movieo/preview6.jpg.mjs { IMAGE => \"[project]/public/images/Movieo/preview6.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview6$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/Movieo/preview6.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview6$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1590,
    height: 767,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzweUdOVTbxl8E+Zg7jx9aLa3Kv7trH//Z"
};
}),
"[project]/public/images/Movieo/preview7.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/preview7.4f2dce3d.jpg");}),
"[project]/public/images/Movieo/preview7.jpg.mjs { IMAGE => \"[project]/public/images/Movieo/preview7.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview7$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/Movieo/preview7.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview7$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1590,
    height: 767,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDUilMfimULuH+l7f8AWv8A3vTOKUPfg2+g5vlnGK6n/9k="
};
}),
"[project]/public/images/Movieo/preview8.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/preview8.b7a1bdd5.jpg");}),
"[project]/public/images/Movieo/preview8.jpg.mjs { IMAGE => \"[project]/public/images/Movieo/preview8.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/Movieo/preview8.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1590,
    height: 767,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDvVt7hdT3f2ldlPMz5RZdvXp93OPxqbmvKrXP/2Q=="
};
}),
"[project]/public/images/netdownloader/netdownloader1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/netdownloader1.2b00d593.png");}),
"[project]/public/images/netdownloader/netdownloader1.png.mjs { IMAGE => \"[project]/public/images/netdownloader/netdownloader1.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/netdownloader/netdownloader1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1587,
    height: 779,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAZklEQVR42k2LvQ6CMBgAeQqi9fuJ1YqxJQw6uDg4sBJG3v9FjqQMMNxyuWuC3zh/vrT/wnt6svyU+WKM7YkkQhNCoGKKvDq65JhsTo5Buj8ofU/OhRhjdaq6B+ZXvAx4HhC1epsZK5VILMiWqYDnAAAAAElFTkSuQmCC"
};
}),
"[project]/public/images/netdownloader/netdownloader2.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/netdownloader2.25ab7bde.jpg");}),
"[project]/public/images/netdownloader/netdownloader2.jpg.mjs { IMAGE => \"[project]/public/images/netdownloader/netdownloader2.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/netdownloader/netdownloader2.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 783,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzMIAqmgD/2Q=="
};
}),
"[project]/public/images/mexant/mexant1.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/mexant1.dc23503e.jpg");}),
"[project]/public/images/mexant/mexant1.jpg.mjs { IMAGE => \"[project]/public/images/mexant/mexant1.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/mexant/mexant1.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 785,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDyy5k8yaD5ETCKPlGM+9exFI543s9T/9k="
};
}),
"[project]/public/images/mexant/mexant2.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/mexant2.d3457b3c.jpg");}),
"[project]/public/images/mexant/mexant2.jpg.mjs { IMAGE => \"[project]/public/images/mexant/mexant2.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/mexant/mexant2.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 786,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDgrOANCpLycp/eI7CuxRTgct/eP//Z"
};
}),
"[project]/public/images/mexant/mexant3.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/mexant3.153d5a87.jpg");}),
"[project]/public/images/mexant/mexant3.jpg.mjs { IMAGE => \"[project]/public/images/mexant/mexant3.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/mexant/mexant3.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 786,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1wooHApgf/9k="
};
}),
"[project]/public/images/joycaring/joycaring1.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/joycaring1.45a39160.jpg");}),
"[project]/public/images/joycaring/joycaring1.jpg.mjs { IMAGE => \"[project]/public/images/joycaring/joycaring1.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/joycaring/joycaring1.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 786,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCn4fmmshBfQzSea82xgzkqRgdvxrTERV+Yyw0tFE//2Q=="
};
}),
"[project]/public/images/joycaring/joycaring2.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/joycaring2.51e85c41.jpg");}),
"[project]/public/images/joycaring/joycaring2.jpg.mjs { IMAGE => \"[project]/public/images/joycaring/joycaring2.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/joycaring/joycaring2.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 786,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDuYLFxrqub+8ZVkJ8syDbyScdOnNbxlZWscs43adz/2Q=="
};
}),
"[project]/public/images/html_css/portfoliody.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/portfoliody.e9187432.png");}),
"[project]/public/images/html_css/portfoliody.png.mjs { IMAGE => \"[project]/public/images/html_css/portfoliody.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$html_css$2f$portfoliody$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/html_css/portfoliody.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$html_css$2f$portfoliody$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1585,
    height: 771,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfUlEQVR42h2LuwrCMAAA821+nYiPjk4KDvoHLi7FRUQR1A+ILqEBCYiJTdKE02a46e5EHKyJd01KiRgjsevQTcNDSkIIiPflyUtpjDF478k5s6hmHHfbMgn5L5VSWGvLEdqW1XJDXR9Qny/COVdEX/fczicmw4rxdM5of+UHLMRzBk+dgXcAAAAASUVORK5CYII="
};
}),
"[project]/public/images/html_css/Glass form effects.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Glass form effects.ce75bb18.png");}),
"[project]/public/images/html_css/Glass form effects.png.mjs { IMAGE => \"[project]/public/images/html_css/Glass form effects.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$html_css$2f$Glass__form__effects$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/html_css/Glass form effects.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$html_css$2f$Glass__form__effects$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 988,
    height: 754,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAArUlEQVR42jWNvQqCcADE3Wwqa/ALUkH9a5iBYUb2JYVEhVPQEtVWT9ArNDQ51Cj4QNErXeq/hjs47scdowl9PNkH0todmuChLuqVGpJRyARD+AAZmyIXXxiaMZoyoaX4AziJwOFHmFsbGJ0AbeJB1nvgirICSiuD60/hh0sMwgWS8QyR7aBVrFFANhHFCXb7I66HMz63C96nLVyjS4H/SvmtKBayVYh8PYGq2vgCp5xMBZp5Ug8AAAAASUVORK5CYII="
};
}),
"[project]/public/images/laravel/laravel blog.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/laravel blog.402134e8.jpg");}),
"[project]/public/images/laravel/laravel blog.jpg.mjs { IMAGE => \"[project]/public/images/laravel/laravel blog.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$laravel__blog$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/laravel/laravel blog.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$laravel__blog$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 785,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDQksYTpbS5cOkO8EMeTjvWnUyTdj//2Q=="
};
}),
"[project]/public/images/laravel/myclasslist1.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/myclasslist1.2b4181ff.jpg");}),
"[project]/public/images/laravel/myclasslist1.jpg.mjs { IMAGE => \"[project]/public/images/laravel/myclasslist1.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/laravel/myclasslist1.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 785,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1/wApfOLZ69uMU7ka33P/2Q=="
};
}),
"[project]/public/images/laravel/myclasslist2.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/myclasslist2.58c0d05b.jpg");}),
"[project]/public/images/laravel/myclasslist2.jpg.mjs { IMAGE => \"[project]/public/images/laravel/myclasslist2.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/laravel/myclasslist2.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 785,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1hmO5B6nB/KmB/9k="
};
}),
"[project]/public/images/sunwave/sunwavve_clone.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/sunwavve_clone.34b73f5b.png");}),
"[project]/public/images/sunwave/sunwavve_clone.png.mjs { IMAGE => \"[project]/public/images/sunwave/sunwavve_clone.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwavve_clone$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/sunwave/sunwavve_clone.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwavve_clone$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1586,
    height: 789,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAg0lEQVR42hXKsQqCQACAYR+kwUjLMyuCizDBQISgUi5Dj4K22hqyJpegKWjolX+99eOzHBEgw4iZXOCKCXG64f58cdAn+kMfy+kwL0qO+sxqnVBcL6imRma7LggTxuxVxDaPmS9DHp+a2/dNoitsE8wSU49R4GG7AlVWNP8fgyylJ3xacnI4zxQFJ8gAAAAASUVORK5CYII="
};
}),
"[project]/public/images/sunwave/sunwaveclone2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/sunwaveclone2.0bc01a68.png");}),
"[project]/public/images/sunwave/sunwaveclone2.png.mjs { IMAGE => \"[project]/public/images/sunwave/sunwaveclone2.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/sunwave/sunwaveclone2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1586,
    height: 783,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/ACt/sP8xgrH/K36v/yh7rv8vfa3/VYeq/0qFrf8qfbD/ACGXpf84oK7/L52r/yKYpv8diJP/SHVy/zl4e/8WkJ//AB+ojf8roIr/IZ2D/yWqhv8moYj/VH95/0WIfP8aqYz/ACu6jf9FpYb/R6aF/1XFjP84vJH/j6yl/2mrmP8dwIz/UWRMcunrEvEAAAAASUVORK5CYII="
};
}),
"[project]/public/images/sunwave/sunwaveclone3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/sunwaveclone3.e5ef9d35.png");}),
"[project]/public/images/sunwave/sunwaveclone3.png.mjs { IMAGE => \"[project]/public/images/sunwave/sunwaveclone3.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/sunwave/sunwaveclone3.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1585,
    height: 829,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhklEQVR42h2NywqCQAAA9ysivFiWkomyPpK8WG1CUeAmBUUSdOggXfuHPqAfnhZvcxhmxCRbYG9XDKsSZ1kQrRXRRuEZdmWGGAQBo7vGak84MkHtjhSlIkxyxt4cYaUp3e9L/XkzNcL18eR8a/HD2Ag+wjaLqnuRNxo3ijnoC/u6YRbKvvAHovY2S0pGqzQAAAAASUVORK5CYII="
};
}),
"[project]/public/images/php/crud.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/crud.928f088e.jpg");}),
"[project]/public/images/php/crud.jpg.mjs { IMAGE => \"[project]/public/images/php/crud.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$php$2f$crud$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/php/crud.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$php$2f$crud$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 785,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2PYMg5IwaAP/Z"
};
}),
"[project]/public/images/dyshare/dysharex.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dysharex.242ce0ec.jpeg");}),
"[project]/public/images/dyshare/dysharex.jpeg.mjs { IMAGE => \"[project]/public/images/dyshare/dysharex.jpeg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dysharex$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/dyshare/dysharex.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dysharex$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 900,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzMAGIDvnOa6TJs//Z"
};
}),
"[project]/public/images/dyshare/dyshare2.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dyshare2.779d474e.jpeg");}),
"[project]/public/images/dyshare/dyshare2.jpeg.mjs { IMAGE => \"[project]/public/images/dyshare/dyshare2.jpeg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/dyshare/dyshare2.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 316,
    height: 360,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAcDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDhBEqReZL58cjdFxxjjn+daN9kNRt8Wh//2Q=="
};
}),
"[project]/public/images/dyshare/dyshare3.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dyshare3.68a409d9.jpeg");}),
"[project]/public/images/dyshare/dyshare3.jpeg.mjs { IMAGE => \"[project]/public/images/dyshare/dyshare3.jpeg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare3$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/dyshare/dyshare3.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare3$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 360,
    height: 203,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDznaI3DjJb3NbvYzW5/9k="
};
}),
"[project]/public/images/instantly/instantly.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/instantly.518afac4.png");}),
"[project]/public/images/instantly/instantly.png.mjs { IMAGE => \"[project]/public/images/instantly/instantly.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$instantly$2f$instantly$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/instantly/instantly.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$instantly$2f$instantly$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 680,
    height: 383,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAf0lEQVR42jWOSwoCMRBE59KCK8/jxlMoqDtXgogyuxmE8YMxJulOP2N0Ch50F29RTf80RBTNGffyOOdR1R+layiJMZGSkEQI5X6HUP9vqtA+jP0Au4uy7TKbzuicYaOwOCqztTBdJSZLqcwPSsx/YfBKew+croHzLVZ6l8oG4wOEtpe9FzT8DQAAAABJRU5ErkJggg=="
};
}),
"[project]/public/images/app/opay react native.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/opay react native.9cb86458.png");}),
"[project]/public/images/app/opay react native.png.mjs { IMAGE => \"[project]/public/images/app/opay react native.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$app$2f$opay__react__native$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/app/opay react native.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$app$2f$opay__react__native$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 296,
    height: 673,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAeUlEQVR42i3FOwrCQBRA0bc9tXJ/rsAmiCgiuIWQQit1An7AYGJmMj+nuo5icTgyO1bM1Z6iPrDIy7TaMC7XjMoVk7wUD8X2eWHXXlk2NXLSLWfd/SjzQu6Dpvmyhpvpkc47eqMZnMOGgOjgsdbivSfGiNiUeGfp7wMsenMXjbVl7wAAAABJRU5ErkJggg=="
};
}),
"[project]/public/images/replico.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/replico.447882df.jpeg");}),
"[project]/public/images/replico.jpeg.mjs { IMAGE => \"[project]/public/images/replico.jpeg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$replico$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/replico.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$replico$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 858,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzVciLGa6jnP/Z"
};
}),
"[project]/public/images/cocobase/cocobase.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cocobase.e5785fbe.png");}),
"[project]/public/images/cocobase/cocobase.png.mjs { IMAGE => \"[project]/public/images/cocobase/cocobase.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$cocobase$2f$cocobase$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/cocobase/cocobase.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$cocobase$2f$cocobase$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1581,
    height: 827,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAg0lEQVR42iXLQQqCQABAUe/Zrm0XCYIiyE2HCJLoGBWWM00puSgjCAl1Rmycfka7t/jfE6eYzS5ku48Io4iDlBzVGdVZqBivad6kUvBIL7zynGC5YurPWQRrKm3wrLVck4TsllFWmtFkRq8/YDj2/8HHOdzzTlsb2s7aGIqixJia3/wFy8dxVPiQc4QAAAAASUVORK5CYII="
};
}),
"[project]/public/images/coco-mailer/cocomailer.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cocomailer.0052dd3d.png");}),
"[project]/public/images/coco-mailer/cocomailer.png.mjs { IMAGE => \"[project]/public/images/coco-mailer/cocomailer.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/coco-mailer/cocomailer.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1581,
    height: 827,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAd0lEQVR42jXKwQqCQBRAUT/BzCKDUqjnTAzj2AjRLtwESdtatWjb/3/A7aG4uJvLSfK9Z1s5yoNjd2wppaUPJ4x41lUgSTeWTIvhwmsYeGuNi2SFZaF/BKvC0DeW7/3M7+G5eSHXl85gqbqrDZ+r8Iw1nRF9E/gDD7QvcwRmQIIAAAAASUVORK5CYII="
};
}),
"[project]/public/images/coco-mailer/cocomailer2.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cocomailer2.d525b98d.jpeg");}),
"[project]/public/images/coco-mailer/cocomailer2.jpeg.mjs { IMAGE => \"[project]/public/images/coco-mailer/cocomailer2.jpeg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/coco-mailer/cocomailer2.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 360,
    height: 195,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDylpWG4Z5J655roIP/2Q=="
};
}),
"[project]/public/images/coco-mailer/cocomailer3.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cocomailer3.c35bfbbc.jpeg");}),
"[project]/public/images/coco-mailer/cocomailer3.jpeg.mjs { IMAGE => \"[project]/public/images/coco-mailer/cocomailer3.jpeg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer3$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/coco-mailer/cocomailer3.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer3$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 360,
    height: 195,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzSQlbBWH3icZ/OukxW5//2Q=="
};
}),
"[project]/public/images/xpay/xpay.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/xpay.849a5dd4.png");}),
"[project]/public/images/xpay/xpay.png.mjs { IMAGE => \"[project]/public/images/xpay/xpay.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$xpay$2f$xpay$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/xpay/xpay.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$xpay$2f$xpay$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1581,
    height: 827,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/AMzT2f/H0Nf/x8/W/8fP1f/Hz9X/y9HX/7fG2P/EzNX/ANLe7P/D0d//xdXk/8jU4f+yrKf/y8vL/9LV2v/I0N3/AKO61/+Yss//lLLS/5Szz/+Nf3b/ppyT/8DCxv+VpsH/AGyPvf9ojLv/Xoq8/2OPvP+Nfnj/mYZ7/6afnf9acpz/Iq5j0r2OAkoAAAAASUVORK5CYII="
};
}),
"[project]/public/images/xpay/xpay2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/xpay2.628c974c.png");}),
"[project]/public/images/xpay/xpay2.png.mjs { IMAGE => \"[project]/public/images/xpay/xpay2.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$xpay$2f$xpay2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/xpay/xpay2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$xpay$2f$xpay2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1581,
    height: 827,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAf0lEQVR42h3LsQrCMBjE8Tyqz+GruDq6OukgKBStYGONxQhCEFohFtoQUzv9/XD4wXHHqaO5kmsjLhTm9ldWllNZsdkaVB8T7z7hRRtEN9BKfjSR/dmhYhpllDJ8cT5xr6McBuyzY7bIUOEzoq0nty/WRcPyULPTjlVmmUzn/ADJxHJ6aemEVQAAAABJRU5ErkJggg=="
};
}),
"[project]/public/images/seasonalWishes/s1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/s1.afdf41ff.png");}),
"[project]/public/images/seasonalWishes/s1.png.mjs { IMAGE => \"[project]/public/images/seasonalWishes/s1.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/seasonalWishes/s1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1588,
    height: 785,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/APSPhv/yk33/6Jh2/+aeb//kpGf/6K1h//OzUv/zwVP/APh3a//4f2L/8YZY/+yHTf/skUT/8qM8//qwMv/4uCr/APmbnv/5pJn/+q6X//mxkP/6t4v/+r6E//vDf//4wHb/APvQ6P/24Ov/+evz//Xn7//66/P/9ujv//rl8P/4zuX/7chmPESyQ/AAAAAASUVORK5CYII="
};
}),
"[project]/public/images/seasonalWishes/s2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/s2.2b33ca1b.png");}),
"[project]/public/images/seasonalWishes/s2.png.mjs { IMAGE => \"[project]/public/images/seasonalWishes/s2.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/seasonalWishes/s2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1588,
    height: 785,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAh0lEQVR42gWAvQqCQACA75F7gYZCImsJoihCMHEPsrm0oX/ElKgtB88bDBVEqJZPRB0qqiCl9BXlKaY4vMnOkvyaUN1TxNeNSXSfh/ai6BqozgpzlrEZV+SeQvy2TwptRDzs4Zg60aDPzV5ynITkO4n4exH1tI20WhhrC3ducHEWuHbAZy9pAOxuaWxD8ZnDAAAAAElFTkSuQmCC"
};
}),
"[project]/public/images/em_Investment/em1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/em1.9b9775bf.png");}),
"[project]/public/images/em_Investment/em1.png.mjs { IMAGE => \"[project]/public/images/em_Investment/em1.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/em_Investment/em1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 900,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoElEQVR42i3GTQvBcADA4f9n9CWUi4sUx5W85CU1RQ4IGWHZWpu0Fm0OWtPKd0CStHH9iRyeeoQbhLjBCdcPGUym1Fpt5obFTNMZKgpiuFwxXhmoaxvD2SGPJlQ6XbKFIul8DlHqG0g9m7qyp697NNpdpKZMrlwlkUwh1I2DufXw/CPuwUczLUYLFbk3ICMVENHrTfx3uz9+vn9GMefLlQ+3c3zEI9fjuwAAAABJRU5ErkJggg=="
};
}),
"[project]/public/images/em_Investment/em2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/em2.4c163671.png");}),
"[project]/public/images/em_Investment/em2.png.mjs { IMAGE => \"[project]/public/images/em_Investment/em2.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/em_Investment/em2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 900,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAkUlEQVR42h3IMQuCQABA4fvdDTUFQU0R1BDNLa31K0K0wRoKoqBMPTP0jLvzXmfDx4MnWucolaXRDgfY1mFs61mqqkIYY9EdbahqRe1pY+h+WX4QtWq43m+cjgeiYM8ljjjHIWEQkEuJyN8lm+2OxXzKcjphPRuxGvcZDnokzwdCNV+STJLlBalvLguk90qzf38/F5G7xISqVwAAAABJRU5ErkJggg=="
};
}),
"[project]/public/images/em_Investment/em3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/em3.afa78336.png");}),
"[project]/public/images/em_Investment/em3.png.mjs { IMAGE => \"[project]/public/images/em_Investment/em3.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/em_Investment/em3.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 900,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoUlEQVR42jXDuw7BUACA4fN8NqvBIGFwbUgaUSLRSoioW0mXlpZWwtBFYrF5GNHq0GL+TYZP+AeXy9njfg24BT6qIjMb9lkv54wmOqLVqDJWJExN5rjqM+mUGLfLyI06mWwOUWxq5GsqkqJjGBv0ToVlV2Kh9sgXKoit42DbFvudxcm18cwFzkzDGA0YDKeI9+fLXxjFRK+YNE1JkpTHM+QHRmxx0N4FjK0AAAAASUVORK5CYII="
};
}),
"[project]/public/images/dp-removebg-preview.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dp-removebg-preview.adaf8527.png");}),
"[project]/public/images/dp-removebg-preview.png.mjs { IMAGE => \"[project]/public/images/dp-removebg-preview.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dp$2d$removebg$2d$preview$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/dp-removebg-preview.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dp$2d$removebg$2d$preview$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 400,
    height: 400,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+UlEQVR42k2OTUsCURiFZ7zXO83NmBALapU2YnecaXLGJsfKCQbsgwojhKBFtTCCoBDEpf9C8Ae4deHOhXvdKK5c+UtEff1AxbN9Hs45HLcRItBwRE3W5LD2y/M82mScx4OQf3fvI8LsoaLadYTw1hqKPulYP3crpmIOWDA6CsmxMsaEroWDkPanZvJjw34G4yoLJ4mXviDuHC4gQogw/bqaeC+Bk/kHJZUD2XzqYa8QWB4T/bqVbsXdTzh1vyFoZYFZD21CBGkheDHe1mJOk93mIP5aAPPuZ+LcPHZ8lO6vJii7uG+k34pwNmuIpr7Gl0ayG5CkozmfAswWNmpdyb1XAAAAAElFTkSuQmCC"
};
}),
"[project]/public/testdp-removebg-preview.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/testdp-removebg-preview.422bad9d.png");}),
"[project]/public/testdp-removebg-preview.png.mjs { IMAGE => \"[project]/public/testdp-removebg-preview.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$testdp$2d$removebg$2d$preview$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/testdp-removebg-preview.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$testdp$2d$removebg$2d$preview$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 433,
    height: 577,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAwUlEQVR42k2NMQqCYACFzf/XocLE0pAsCsqhQRAijLACEcElMh0aQhSKli4QEVFeQBqC7tANukPQ1hxIB2gNqx+K3vT4Ph4Pw75JJHAcwOSnYf9haE6tlOUDDgj6BwGERFtqLAxFOwIcrd4QQLKumGun798sa3ZhhVoLiVSaynfczdme72Pd2z2LYtNDIscVJHO8ijQ/jFV7+eCFqo4Ey/Ky4W3v+jSMh4PJlaEyJSToLC91R0GkOEEs9twTJEh0/gLOMiXZbrQPcwAAAABJRU5ErkJggg=="
};
}),
"[project]/src/assets/images.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$avarta_profile$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$avarta_profile$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/avarta_profile.png.mjs { IMAGE => "[project]/public/images/avarta_profile.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
//
// Movieo
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Movieo/preview2.jpg.mjs { IMAGE => "[project]/public/images/Movieo/preview2.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Movieo/preview1.jpg.mjs { IMAGE => "[project]/public/images/Movieo/preview1.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Movieo/preview3.jpg.mjs { IMAGE => "[project]/public/images/Movieo/preview3.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview4$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview4$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Movieo/preview4.jpg.mjs { IMAGE => "[project]/public/images/Movieo/preview4.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview5$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview5$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Movieo/preview5.jpg.mjs { IMAGE => "[project]/public/images/Movieo/preview5.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview6$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview6$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Movieo/preview6.jpg.mjs { IMAGE => "[project]/public/images/Movieo/preview6.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview7$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview7$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Movieo/preview7.jpg.mjs { IMAGE => "[project]/public/images/Movieo/preview7.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview8$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Movieo/preview8.jpg.mjs { IMAGE => "[project]/public/images/Movieo/preview8.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// import movie9 from "../../public/images/Movieo/preview19.jpg";
// Netdownloader
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/netdownloader/netdownloader1.png.mjs { IMAGE => "[project]/public/images/netdownloader/netdownloader1.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/netdownloader/netdownloader2.jpg.mjs { IMAGE => "[project]/public/images/netdownloader/netdownloader2.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// Mexant
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$mexant$2f$mexant1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/mexant/mexant1.jpg.mjs { IMAGE => "[project]/public/images/mexant/mexant1.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$mexant$2f$mexant2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/mexant/mexant2.jpg.mjs { IMAGE => "[project]/public/images/mexant/mexant2.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$mexant$2f$mexant3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/mexant/mexant3.jpg.mjs { IMAGE => "[project]/public/images/mexant/mexant3.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// Joycaring
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/joycaring/joycaring1.jpg.mjs { IMAGE => "[project]/public/images/joycaring/joycaring1.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/joycaring/joycaring2.jpg.mjs { IMAGE => "[project]/public/images/joycaring/joycaring2.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// Html, css
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$html_css$2f$portfoliody$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$html_css$2f$portfoliody$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/html_css/portfoliody.png.mjs { IMAGE => "[project]/public/images/html_css/portfoliody.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$html_css$2f$Glass__form__effects$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$html_css$2f$Glass__form__effects$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/html_css/Glass form effects.png.mjs { IMAGE => "[project]/public/images/html_css/Glass form effects.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// laravel;
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$laravel__blog$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$laravel$2f$laravel__blog$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/laravel/laravel blog.jpg.mjs { IMAGE => "[project]/public/images/laravel/laravel blog.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/laravel/myclasslist1.jpg.mjs { IMAGE => "[project]/public/images/laravel/myclasslist1.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/laravel/myclasslist2.jpg.mjs { IMAGE => "[project]/public/images/laravel/myclasslist2.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// Sunwave;
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwavve_clone$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwavve_clone$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/sunwave/sunwavve_clone.png.mjs { IMAGE => "[project]/public/images/sunwave/sunwavve_clone.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/sunwave/sunwaveclone2.png.mjs { IMAGE => "[project]/public/images/sunwave/sunwaveclone2.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/sunwave/sunwaveclone3.png.mjs { IMAGE => "[project]/public/images/sunwave/sunwaveclone3.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// php;
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$php$2f$crud$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$php$2f$crud$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/php/crud.jpg.mjs { IMAGE => "[project]/public/images/php/crud.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// App
// Dyshare
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dysharex$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$dyshare$2f$dysharex$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/dyshare/dysharex.jpeg.mjs { IMAGE => "[project]/public/images/dyshare/dysharex.jpeg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare2$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/dyshare/dyshare2.jpeg.mjs { IMAGE => "[project]/public/images/dyshare/dyshare2.jpeg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare3$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare3$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/dyshare/dyshare3.jpeg.mjs { IMAGE => "[project]/public/images/dyshare/dyshare3.jpeg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$instantly$2f$instantly$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$instantly$2f$instantly$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/instantly/instantly.png.mjs { IMAGE => "[project]/public/images/instantly/instantly.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$app$2f$opay__react__native$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$app$2f$opay__react__native$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/app/opay react native.png.mjs { IMAGE => "[project]/public/images/app/opay react native.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$replico$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$replico$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/replico.jpeg.mjs { IMAGE => "[project]/public/images/replico.jpeg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$cocobase$2f$cocobase$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$cocobase$2f$cocobase$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/cocobase/cocobase.png.mjs { IMAGE => "[project]/public/images/cocobase/cocobase.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/coco-mailer/cocomailer.png.mjs { IMAGE => "[project]/public/images/coco-mailer/cocomailer.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer2$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/coco-mailer/cocomailer2.jpeg.mjs { IMAGE => "[project]/public/images/coco-mailer/cocomailer2.jpeg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer3$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer3$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/coco-mailer/cocomailer3.jpeg.mjs { IMAGE => "[project]/public/images/coco-mailer/cocomailer3.jpeg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$xpay$2f$xpay$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$xpay$2f$xpay$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/xpay/xpay.png.mjs { IMAGE => "[project]/public/images/xpay/xpay.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$xpay$2f$xpay2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$xpay$2f$xpay2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/xpay/xpay2.png.mjs { IMAGE => "[project]/public/images/xpay/xpay2.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/seasonalWishes/s1.png.mjs { IMAGE => "[project]/public/images/seasonalWishes/s1.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/seasonalWishes/s2.png.mjs { IMAGE => "[project]/public/images/seasonalWishes/s2.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$em_Investment$2f$em1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/em_Investment/em1.png.mjs { IMAGE => "[project]/public/images/em_Investment/em1.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$em_Investment$2f$em2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/em_Investment/em2.png.mjs { IMAGE => "[project]/public/images/em_Investment/em2.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$em_Investment$2f$em3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/em_Investment/em3.png.mjs { IMAGE => "[project]/public/images/em_Investment/em3.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dp$2d$removebg$2d$preview$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$dp$2d$removebg$2d$preview$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/dp-removebg-preview.png.mjs { IMAGE => "[project]/public/images/dp-removebg-preview.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$testdp$2d$removebg$2d$preview$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$testdp$2d$removebg$2d$preview$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/testdp-removebg-preview.png.mjs { IMAGE => "[project]/public/testdp-removebg-preview.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = {
    dysharex1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dysharex$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$dyshare$2f$dysharex$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    dysharex2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare2$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    dysharex3: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare3$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$dyshare$2f$dyshare3$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    instantly: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$instantly$2f$instantly$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$instantly$2f$instantly$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    cocobase1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$cocobase$2f$cocobase$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$cocobase$2f$cocobase$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    seasonalW1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    seasonalW2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$seasonalWishes$2f$s2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    cocomailer: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    cocomailer2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer2$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    cocomailer3: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer3$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$coco$2d$mailer$2f$cocomailer3$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    replico1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$replico$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$replico$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    profile: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$avarta_profile$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$avarta_profile$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    movie1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    movie2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    movie3: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    movie4: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview4$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview4$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    movie5: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview5$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview5$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    movie6: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview6$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview6$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    movie7: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview7$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview7$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    movie8: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Movieo$2f$preview8$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Movieo$2f$preview8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    emialuge1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$em_Investment$2f$em1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    emialuge2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$em_Investment$2f$em2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    emialuge3: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$em_Investment$2f$em3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$em_Investment$2f$em3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    dp: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dp$2d$removebg$2d$preview$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$dp$2d$removebg$2d$preview$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    dp_test: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$testdp$2d$removebg$2d$preview$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$testdp$2d$removebg$2d$preview$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    xpay: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$xpay$2f$xpay$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$xpay$2f$xpay$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    xpay2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$xpay$2f$xpay2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$xpay$2f$xpay2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    mexant1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$mexant$2f$mexant1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    mexant2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$mexant$2f$mexant2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    mexant3: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$mexant$2f$mexant3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$mexant$2f$mexant3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    net_downloader1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    net_downloader2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$netdownloader$2f$netdownloader2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    joycaring1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    joycaring2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$joycaring$2f$joycaring2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    portfoliody: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$html_css$2f$portfoliody$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$html_css$2f$portfoliody$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    Glass_effects: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$html_css$2f$Glass__form__effects$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$html_css$2f$Glass__form__effects$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    laravelblog: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$laravel__blog$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$laravel$2f$laravel__blog$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    crud: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$php$2f$crud$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$php$2f$crud$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    myclasslist1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    myclasslist2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$laravel$2f$myclasslist2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    opayclone: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$app$2f$opay__react__native$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$app$2f$opay__react__native$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    sunwaveclone1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwavve_clone$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwavve_clone$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    sunwaveclone2: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    sunwaveclone3: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$sunwave$2f$sunwaveclone3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
};
}),
"[project]/public/icons/icon-design.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon-design.68ee87b3.svg");}),
"[project]/public/icons/icon-design.svg.mjs { IMAGE => \"[project]/public/icons/icon-design.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$design$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/icons/icon-design.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$design$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 42,
    height: 42,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/public/icons/icon-dev.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon-dev.ac5642b6.svg");}),
"[project]/public/icons/icon-dev.svg.mjs { IMAGE => \"[project]/public/icons/icon-dev.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$dev$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/icons/icon-dev.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$dev$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 40,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/public/icons/icon-app.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon-app.c2af34e8.svg");}),
"[project]/public/icons/icon-app.svg.mjs { IMAGE => \"[project]/public/icons/icon-app.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$app$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/icons/icon-app.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$app$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 40,
    height: 40,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/public/icons/icon-photo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon-photo.c43ad776.svg");}),
"[project]/public/icons/icon-photo.svg.mjs { IMAGE => \"[project]/public/icons/icon-photo.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$photo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/icons/icon-photo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$photo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 42,
    height: 32,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/assets/icons.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$design$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$icon$2d$design$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/icon-design.svg.mjs { IMAGE => "[project]/public/icons/icon-design.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$dev$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$icon$2d$dev$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/icon-dev.svg.mjs { IMAGE => "[project]/public/icons/icon-dev.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$app$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$icon$2d$app$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/icon-app.svg.mjs { IMAGE => "[project]/public/icons/icon-app.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$photo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$icon$2d$photo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/icon-photo.svg.mjs { IMAGE => "[project]/public/icons/icon-photo.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
;
;
;
;
const __TURBOPACK__default__export__ = {
    design: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$design$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$icon$2d$design$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    dev: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$dev$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$icon$2d$dev$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    app: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$app$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$icon$2d$app$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    photo: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$icon$2d$photo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$icon$2d$photo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
};
}),
"[project]/src/assets/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/icons.js [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/src/assets/images.js [app-ssr] (ecmascript) <export default as images>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "images",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/images.js [app-ssr] (ecmascript)");
}),
"[project]/src/components/Layout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/assets/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__ = __turbopack_context__.i("[project]/src/assets/images.js [app-ssr] (ecmascript) <export default as images>");
"use client";
;
;
;
function Layout({ children }) {
    const sidebarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sidebarBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sidebar = sidebarRef.current;
        const sidebarBtn = sidebarBtnRef.current;
        if (sidebar && sidebarBtn) {
            const elementToggleFunc = (elem)=>{
                elem.classList.toggle("active");
            };
            sidebarBtn.addEventListener("click", ()=>{
                elementToggleFunc(sidebar);
            });
            // Cleanup event listener when the component unmounts
            return ()=>{
                sidebarBtn.removeEventListener("click", ()=>{
                    elementToggleFunc(sidebar);
                });
            };
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar",
                "data-sidebar": true,
                ref: sidebarRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "avatar-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__images$3e$__["images"].dp,
                                    alt: "Richard Hanrick",
                                    width: "80"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.jsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "info-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "name",
                                        title: "Richard Hanrick",
                                        children: "Dy coderx"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "title",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            style: {
                                                backgroundColor: "transparent",
                                                color: "white"
                                            },
                                            href: "https://drive.google.com/file/d/10yxOwOi6UnWG1tpcttzrmik6L-OLl-II/view?usp=sharing",
                                            children: "Acess Cv"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout.jsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "info_more-btn",
                                "data-sidebar-btn": true,
                                ref: sidebarBtnRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Show Contacts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-chevron-down"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-info_more"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "separator"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "contacts-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "contact-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-envelope"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout.jsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "contact-title",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.jsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:dycoderx70@gmail.com",
                                                className: "contact-link",
                                                children: "dycoderx70@gmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.jsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "contact-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-phone-alt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout.jsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "contact-title",
                                                children: "Phone"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.jsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+2349161712483",
                                                className: "contact-link",
                                                children: "+234 91 6171 24 83"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.jsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "contact-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-calendar-alt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout.jsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "contact-title",
                                                children: "Birthday"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.jsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                dateTime: "2005-10-08",
                                                children: "October 8, 2005"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.jsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "contact-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-map-marker-alt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout.jsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "contact-title",
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.jsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                children: "Benin, Edo-state, Nigeria"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout.jsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "separator"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "social-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "social-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://web.facebook.com/tina.otamere.9",
                                    className: "social-link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fab fa-facebook-f"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.jsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "social-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://x.com/IsraelOtam69481",
                                    className: "social-link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fab fa-twitter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.jsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "social-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.instagram.com/tina.otamere.9/",
                                    className: "social-link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fab fa-instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "social-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/Dynamic323/",
                                    className: "social-link",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fab fa-github"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout.jsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout.jsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-content",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Layout.jsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layout.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Layout;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d991e1c8._.js.map