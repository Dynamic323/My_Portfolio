import { useState, useEffect } from "react";

const CoderLoader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [exploding, setExploding] = useState(false);
  const [particles, setParticles] = useState([]);

  const loadingSteps = [
    "Initializing Dycoder system...",
    "Loading creative modules...",
    "Compiling code artifacts...",
    "Establishing connections...",
    "Optimizing performance...",
    "System ready. Welcome!"
  ];

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    // Smooth progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Trigger explosion after completion
          setTimeout(() => {
            setExploding(true);
            createExplosion();
            setTimeout(() => {
              onLoadComplete && onLoadComplete();
            }, 1200);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 8 + 2; // Smoother increments
      });
    }, 150);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(progressInterval);
    };
  }, [onLoadComplete]);

  useEffect(() => {
    const stepIndex = Math.floor((progress / 100) * loadingSteps.length);
    if (stepIndex < loadingSteps.length) {
      const text = loadingSteps[stepIndex];
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setLoadingText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 30); // Faster typing for smoothness

      return () => clearInterval(typeInterval);
    }
  }, [Math.floor((progress / 100) * loadingSteps.length)]);

  const createExplosion = () => {
    const newParticles = [];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Create 200 particles for massive explosion effect
    for (let i = 0; i < 200; i++) {
      const angle = (Math.PI * 2 * i) / 200;
      const velocity = Math.random() * 12 + 6;
      const size = Math.random() * 12 + 4;
      newParticles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: size,
        opacity: 1,
        color: ['#ffd966', '#6b9bd1', '#8b7bdb', '#fffef0', '#ffffff'][Math.floor(Math.random() * 5)],
        glow: size * 3
      });
    }
    setParticles(newParticles);
  };

  useEffect(() => {
    if (!exploding) return;

    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.15, // Gravity
          opacity: p.opacity - 0.015,
          glow: p.glow * 0.98
        })).filter(p => p.opacity > 0)
      );
    };

    const animationInterval = setInterval(animateParticles, 16);
    return () => clearInterval(animationInterval);
  }, [exploding]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1633 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      fontFamily: "'Fira Code', 'Courier New', monospace",
      opacity: exploding ? 0 : 1,
      transition: 'opacity 1.2s ease-out',
      pointerEvents: exploding ? 'none' : 'auto'
    }}>
      
      {/* Animated grid background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(200, 220, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200, 220, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: exploding ? 0 : 0.5,
        animation: 'gridMove 20s linear infinite',
        transition: 'opacity 0.5s ease-out'
      }} />

      {/* Explosion particles */}
      {exploding && particles.map((particle, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: particle.x,
          top: particle.y,
          width: particle.size,
          height: particle.size,
          borderRadius: '50%',
          background: particle.color,
          opacity: particle.opacity,
          boxShadow: `0 0 ${particle.glow}px ${particle.color}, 0 0 ${particle.glow * 1.5}px ${particle.color}`,
          pointerEvents: 'none',
          filter: `brightness(${1.5 + particle.opacity * 0.5})`
        }} />
      ))}

      {/* Main loader container */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '600px',
        padding: '40px',
        transform: exploding ? 'scale(1.1)' : 'scale(1)',
        opacity: exploding ? 0 : 1,
        transition: 'all 0.5s ease-out'
      }}>
        
        {/* Terminal-style header */}
        <div style={{
          background: 'rgba(26, 34, 57, 0.8)',
          border: '1px solid rgba(200, 220, 255, 0.2)',
          borderRadius: '12px 12px 0 0',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '-1px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#ff5f56',
            transition: 'all 0.3s ease'
          }} />
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#ffbd2e',
            transition: 'all 0.3s ease'
          }} />
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: progress === 100 ? '#27c93f' : '#8892a6',
            transition: 'all 0.3s ease'
          }} />
          <span style={{
            marginLeft: 'auto',
            color: '#8892a6',
            fontSize: '12px'
          }}>dycoder.init</span>
        </div>

        {/* Terminal content */}
        <div style={{
          background: 'rgba(18, 24, 41, 0.9)',
          border: '1px solid rgba(200, 220, 255, 0.2)',
          borderRadius: '0 0 12px 12px',
          padding: '40px',
          boxShadow: '0 8px 32px rgba(10, 14, 39, 0.8), 0 0 40px rgba(255, 217, 102, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          
          {/* DYCODER ASCII Logo */}
          <pre style={{
            color: '#ffd966',
            fontSize: '9px',
            lineHeight: '1.2',
            marginBottom: '30px',
            textShadow: '0 0 10px rgba(255, 217, 102, 0.5)',
            filter: 'drop-shadow(0 0 8px rgba(255, 217, 102, 0.3))',
            whiteSpace: 'pre',
            fontFamily: 'monospace'
          }}>
{`  ██████╗ ██╗   ██╗ ██████╗ ██████╗ ██████╗ ███████╗██████╗ 
  ██╔══██╗╚██╗ ██╔╝██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗
  ██║  ██║ ╚████╔╝ ██║     ██║   ██║██║  ██║█████╗  ██████╔╝
  ██║  ██║  ╚██╔╝  ██║     ██║   ██║██║  ██║██╔══╝  ██╔══██╗
  ██████╔╝   ██║   ╚██████╗╚██████╔╝██████╔╝███████╗██║  ██║
  ╚═════╝    ╚═╝    ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝`}
          </pre>

          {/* Loading text with typing effect */}
          <div style={{
            color: '#e8edf4',
            fontSize: '16px',
            marginBottom: '24px',
            minHeight: '24px',
            textAlign: 'left',
            fontFamily: "'Fira Code', monospace"
          }}>
            <span style={{ color: '#6b9bd1' }}>$</span> {loadingText}
            <span style={{
              opacity: cursorVisible ? 1 : 0,
              color: '#ffd966',
              marginLeft: '2px',
              transition: 'opacity 0.1s'
            }}>▊</span>
          </div>

          {/* Progress bar */}
          <div style={{
            width: '100%',
            height: '6px',
            background: 'rgba(200, 220, 255, 0.1)',
            borderRadius: '3px',
            overflow: 'hidden',
            marginBottom: '16px',
            border: '1px solid rgba(200, 220, 255, 0.2)'
          }}>
            <div style={{
              height: '100%',
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #6b9bd1, #ffd966)',
              boxShadow: '0 0 10px rgba(255, 217, 102, 0.5)',
              transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: '3px'
            }} />
          </div>

          {/* Progress percentage */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#8892a6',
            fontSize: '12px'
          }}>
            <span>{Math.floor(progress)}%</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: progress > 0 ? '#27c93f' : '#8892a6',
                animation: progress < 100 && progress > 0 ? 'pulse 1s ease-in-out infinite' : 'none',
                transition: 'background 0.3s'
              }} />
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: progress > 33 ? '#27c93f' : '#8892a6',
                animation: progress < 100 && progress > 33 ? 'pulse 1s ease-in-out infinite 0.2s' : 'none',
                transition: 'background 0.3s'
              }} />
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: progress > 66 ? '#27c93f' : '#8892a6',
                animation: progress < 100 && progress > 66 ? 'pulse 1s ease-in-out infinite 0.4s' : 'none',
                transition: 'background 0.3s'
              }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
};

export default CoderLoader;