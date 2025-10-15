import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // ===== CONFIGURATION SECTION =====
    const CONFIG = {
      // Star settings
      starCount: 150,              // Total number of twinkling stars (reduce if laggy)
      starMaxRadius: 1.5,          // Maximum star size
      starSpeed: 0.05,             // How fast stars drift down (lower = slower)
      starTwinkleSpeed: 0.03,      // How fast stars twinkle (lower = slower)
      
      // Mouse interaction
      mouseInteractionRadius: 120, // Distance stars react to mouse
      mouseInteractionStrength: 0.02, // How much stars move toward/away from mouse
      
      // Moon settings
      moonRadius: 50,              // Moon size
      moonGlowSpeed: 0.02,         // How fast moon pulses (lower = slower)
      
      // Shooting star settings
      // shootingStarFrequency: 0.995, // Higher = less frequent (0.99 = more, 0.999 = less)
      // shootingStarMinLength: 60,   // Minimum trail length
      // shootingStarMaxLength: 120,  // Maximum trail length
      // shootingStarMinSpeed: 4,     // Minimum speed
      // shootingStarMaxSpeed: 7,     // Maximum speed
      // shootingStarFadeSpeed: 0.008, // How fast they fade (higher = faster fade)
      
      // Performance
      useRequestAnimationFrame: true, // Set to false if experiencing lag
    };
    // ===== END CONFIGURATION =====

    // Create stars with twinkle properties
    const stars = Array.from({ length: CONFIG.starCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * CONFIG.starMaxRadius,
      speed: Math.random() * CONFIG.starSpeed + 0.01,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * CONFIG.starTwinkleSpeed + 0.01,
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
    const getMoonPosition = () => {
      if (width < 768) {
        return { x: width - 80, y: 80 };
      } else {
        return { x: width * 0.85, y: height * 0.15 };
      }
    };

    const moon = {
      ...getMoonPosition(),
      radius: CONFIG.moonRadius,
      glow: 0,
      glowDirection: 1,
    };

    const mouse = { x: null, y: null };
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        mouse.x = e.x;
        mouse.y = e.y;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
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
      const glowGradient = ctx.createRadialGradient(
        moon.x,
        moon.y,
        moon.radius * 0.5,
        moon.x,
        moon.y,
        moon.radius * (2 + moon.glow * 0.3)
      );
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
      for (let star of stars) {
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
        const starGlow = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.radius * 3
        );
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

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newPos = getMoonPosition();
      moon.x = newPos.x;
      moon.y = newPos.y;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "linear-gradient(to bottom right, #0a0e27, #1a1633)",
      }}
    />
  );
};

export default ParticleBackground;