# 🎨 Dycoder Website Styling Guide

Complete customization guide for your animated background and loading screen.

---

## 📁 File Structure

```
src/
├── ParticleBackground.jsx    # Animated stars, moon & shooting stars
├── components/
│   └── CoderLoader.jsx       # Custom loading screen with explosion
├── App.jsx                   # Main app with loader integration
└── App.css                   # Root CSS variables
```

---

## 🌙 Part 1: Particle Background (ParticleBackground.jsx)

### 📍 Location
Find the `CONFIG` object at the **top of the component** (around line 12-35)

### ⚙️ Configuration Options

#### ⭐ **Regular Stars**
```javascript
starCount: 150,              // Total twinkling stars on screen
                            // 🔧 Adjust: 50-300
                            // Lower = Better performance
                            // Higher = More magical sky

starMaxRadius: 1.5,          // Maximum star size in pixels
                            // 🔧 Adjust: 0.5-3
                            // 0.5 = Tiny dots
                            // 3 = Large, prominent stars

starSpeed: 0.05,             // How fast stars drift downward
                            // 🔧 Adjust: 0.01-0.2
                            // 0.01 = Barely moving (subtle)
                            // 0.2 = Fast falling stars

starTwinkleSpeed: 0.03,      // How fast stars blink
                            // 🔧 Adjust: 0.01-0.08
                            // 0.01 = Slow, relaxed twinkle
                            // 0.08 = Fast, energetic sparkle
```

#### 🖱️ **Mouse Interaction**
```javascript
mouseInteractionRadius: 120, // Distance (px) mouse affects stars
                            // 🔧 Adjust: 0-300
                            // 0 = Disable interaction
                            // 300 = Large interaction zone

mouseInteractionStrength: 0.02, // How much stars move
                               // 🔧 Adjust: 0.01-0.1
                               // 0.01 = Subtle nudge
                               // 0.1 = Strong push/pull
```

#### 🌙 **Moon Settings**
```javascript
moonRadius: 50,              // Moon size in pixels
                            // 🔧 Adjust: 30-100
                            // 30 = Small, subtle moon
                            // 100 = Large, dominant moon

moonGlowSpeed: 0.02,         // Breathing/pulse speed
                            // 🔧 Adjust: 0.005-0.05
                            // 0.005 = Slow, calm pulse
                            // 0.05 = Fast, energetic pulse
```

**Moon Position:**
- Small screens (< 768px): Top-right corner at `(width - 80, 80)`
- Large screens (≥ 768px): At `(width * 0.85, height * 0.15)`
- To change: Edit the `getMoonPosition()` function (line 47-54)

#### 💫 **Shooting Stars**
```javascript
shootingStarFrequency: 0.995, // How often they appear
                             // 🔧 Adjust: 0.990-0.999
                             // 0.990 = Very frequent (every few seconds)
                             // 0.999 = Very rare (once per minute)
                             // Formula: Higher = Rarer

shootingStarMinLength: 60,    // Shortest trail length (px)
                             // 🔧 Adjust: 30-100

shootingStarMaxLength: 120,   // Longest trail length (px)
                             // 🔧 Adjust: 80-250

shootingStarMinSpeed: 4,      // Slowest speed
                             // 🔧 Adjust: 2-10

shootingStarMaxSpeed: 7,      // Fastest speed
                             // 🔧 Adjust: 5-20

shootingStarFadeSpeed: 0.008, // How quickly they disappear
                             // 🔧 Adjust: 0.005-0.02
                             // 0.005 = Slow fade (longer trails)
                             // 0.02 = Quick fade (short-lived)
```

**Shooting Star Behavior:**
- Spawn from the moon position
- Travel LEFT across the screen
- Slight downward angle (30% vertical movement)
- To change direction: Edit `angle: Math.PI` in `createShootingStar()` (line 41)
  - `Math.PI` = Left (←)
  - `0` = Right (→)
  - `Math.PI / 2` = Down (↓)
  - `Math.PI * 1.5` = Up (↑)

### 🎨 **Color Customization**

**Background Gradient** (line 77-80):
```javascript
gradient.addColorStop(0, "#0a0e27");    // Top color (navy)
gradient.addColorStop(0.5, "#121829");  // Middle (dark blue)
gradient.addColorStop(1, "#1a1633");    // Bottom (purple)
```

**Moon Colors** (line 91-94):
```javascript
"rgba(255, 250, 230, 0.8)" // Warm cream glow
"#fffef0"                  // Moon surface (ivory white)
"rgba(220, 220, 210, 0.3)" // Moon craters (subtle gray)
```

**Star Colors** (line 134-136):
```javascript
"rgba(255, 255, 255, ...)"  // Core white
"rgba(200, 220, 255, ...)"  // Blue-tinted glow
```

### ⚡ **Performance Optimization**

If your site feels slow or laggy:

1. **Reduce star count**
   ```javascript
   starCount: 80,  // Instead of 150
   ```

2. **Make shooting stars rarer**
   ```javascript
   shootingStarFrequency: 0.998,  // Instead of 0.995
   ```

3. **Disable mouse interaction**
   ```javascript
   mouseInteractionRadius: 0,  // Completely disable
   ```

4. **Reduce star size**
   ```javascript
   starMaxRadius: 1,  // Instead of 1.5
   ```

---

## 💻 Part 2: Coder Loader (CoderLoader.jsx)

### 📍 What to Customize

#### 🎯 **Loading Messages**
**Location:** Line 10-17

```javascript
const loadingSteps = [
  "Initializing Dycoder system...",     // Step 1 (0-16%)
  "Loading creative modules...",        // Step 2 (17-33%)
  "Compiling code artifacts...",        // Step 3 (34-50%)
  "Establishing connections...",        // Step 4 (51-66%)
  "Optimizing performance...",          // Step 5 (67-83%)
  "System ready. Welcome!"              // Step 6 (84-100%)
];
```

**How to change:**
- Edit any message text
- Add more steps (will auto-distribute across progress)
- Keep messages under 50 characters for best display

#### 🎨 **ASCII Logo**
**Location:** Line 204-211

Current logo says "DYCODER". To change:

**Option 1: Use a generator**
- Visit: https://patorjk.com/software/taag/
- Font: "ANSI Shadow" (current) or try others
- Paste your text, copy result
- Replace the text between the backticks

**Option 2: Change existing logo**
```javascript
// Just replace this entire section with your generated ASCII art
{`  ██████╗ ██╗   ██╗ ██████╗ ██████╗ ██████╗ ███████╗██████╗ 
  // ... rest of logo
`}
```

#### ⏱️ **Loading Speed**
**Location:** Line 20-33

```javascript
// Progress speed
const progressInterval = setInterval(() => {
  setProgress(prev => {
    // ...
    return prev + Math.random() * 8 + 2; // Add 2-10% each tick
  });
}, 150); // Every 150ms
```

**To make it faster:**
```javascript
return prev + Math.random() * 15 + 5;  // Add 5-20% each tick
}, 100); // Every 100ms = Faster
```

**To make it slower:**
```javascript
return prev + Math.random() * 5 + 1;  // Add 1-6% each tick
}, 250); // Every 250ms = Slower
```

**Typing speed** (line 42):
```javascript
}, 30); // 30ms between characters (fast)
```
- Lower number = Faster typing
- Higher number = Slower typing
- Try: 50ms for slower, 15ms for faster

#### 💥 **Explosion Effect**

**Particle Count** (line 55):
```javascript
for (let i = 0; i < 200; i++) {  // 200 particles
```
🔧 Adjust: 50-400
- 50 = Small burst
- 200 = Big explosion (current)
- 400 = Massive, intense blast (may lag on slow devices)

**Explosion Speed** (line 57):
```javascript
const velocity = Math.random() * 12 + 6;  // Speed: 6-18
```
🔧 Adjust ranges:
- Slow: `Math.random() * 6 + 3` (3-9 speed)
- Medium: `Math.random() * 12 + 6` (6-18 speed) - current
- Fast: `Math.random() * 20 + 10` (10-30 speed)

**Particle Size** (line 58):
```javascript
const size = Math.random() * 12 + 4;  // Size: 4-16px
```
🔧 Adjust:
- Small: `Math.random() * 6 + 2` (2-8px)
- Large: `Math.random() * 20 + 8` (8-28px)

**Explosion Duration** (line 31):
```javascript
setTimeout(() => {
  onLoadComplete && onLoadComplete();
}, 1200); // 1.2 seconds
```
🔧 Adjust: 800-2000ms
- 800 = Quick explosion
- 1200 = Current
- 2000 = Long, dramatic explosion

**Particle Colors** (line 64):
```javascript
color: ['#ffd966', '#6b9bd1', '#8b7bdb', '#fffef0', '#ffffff']
       // Gold      Blue       Purple     Cream      White
```
Add/remove colors from this array

**Glow Intensity** (line 65):
```javascript
glow: size * 3  // Glow = 3x particle size
```
🔧 Adjust multiplier:
- `size * 1.5` = Subtle glow
- `size * 3` = Current (bright)
- `size * 5` = Intense, blinding glow

#### 🎨 **Color Scheme**

**Terminal Window** (line 119-126):
```javascript
background: 'rgba(26, 34, 57, 0.8)',        // Header bar
border: '1px solid rgba(200, 220, 255, 0.2)', // Border
```

**Traffic Light Buttons** (line 130-149):
```javascript
background: '#ff5f56'  // Red
background: '#ffbd2e'  // Yellow
background: '#27c93f'  // Green (when complete)
```

**Terminal Content** (line 155):
```javascript
background: 'rgba(18, 24, 41, 0.9)',     // Main background
boxShadow: '0 8px 32px rgba(10, 14, 39, 0.8)', // Shadow
```

**Text Colors** (line 201):
```javascript
color: '#ffd966',  // Logo color (gold)
```

**Command Prompt** (line 215):
```javascript
color: '#6b9bd1'  // Blue $ symbol
color: '#e8edf4'  // White text
color: '#ffd966'  // Gold cursor
```

**Progress Bar** (line 238):
```javascript
background: 'linear-gradient(90deg, #6b9bd1, #ffd966)'
// Blue to Gold gradient
```

### 🎭 **Animation Tweaks**

**Cursor Blink Speed** (line 21):
```javascript
setCursorVisible(prev => !prev);
}, 500); // 500ms = 0.5 seconds
```
- 300ms = Fast blink
- 500ms = Current (medium)
- 800ms = Slow blink

**Grid Animation Speed** (line 97):
```javascript
animation: 'gridMove 20s linear infinite'
```
- `10s` = Fast grid scroll
- `20s` = Current (medium)
- `40s` = Slow, subtle scroll

**Fade Out Speed** (line 93):
```javascript
transition: 'opacity 1.2s ease-out'
```
- `0.5s` = Quick fade
- `1.2s` = Current (smooth)
- `2s` = Slow, dramatic fade

---

## 🎨 Part 3: Root CSS Variables (App.css)

### Color System

```css
:root {
  /* Background Colors */
  --bg-primary: #0a0e27;      /* Main background */
  --bg-secondary: #121829;    /* Secondary surfaces */
  --bg-tertiary: #1a1633;     /* Tertiary surfaces */
  --bg-card: rgba(26, 34, 57, 0.6);        /* Card backgrounds */
  --bg-card-hover: rgba(32, 42, 70, 0.8);  /* Card hover state */
  
  /* Text Colors */
  --text-primary: #e8edf4;    /* Main text (light gray) */
  --text-secondary: #b8c5d6;  /* Secondary text */
  --text-muted: #8892a6;      /* Muted/disabled text */
  --text-accent: #fff9e6;     /* Accent text (cream) */
  
  /* Accent Colors */
  --accent-moon: #fffef0;     /* Moon white */
  --accent-glow: #ffd966;     /* Gold/yellow glow */
  --accent-star: #c8dcff;     /* Star blue */
  --accent-purple: #8b7bdb;   /* Purple accent */
  --accent-blue: #6b9bd1;     /* Blue accent */
  
  /* Borders */
  --border-color: rgba(200, 220, 255, 0.1);  /* Subtle border */
  --border-hover: rgba(200, 220, 255, 0.3);  /* Hover border */
  
  /* Shadows & Glows */
  --shadow-sm: 0 2px 8px rgba(10, 14, 39, 0.4);
  --shadow-md: 0 4px 16px rgba(10, 14, 39, 0.6);
  --shadow-lg: 0 8px 32px rgba(10, 14, 39, 0.8);
  --glow-subtle: 0 0 20px rgba(255, 250, 240, 0.1);
  --glow-accent: 0 0 30px rgba(255, 217, 102, 0.3);
}
```

### Usage Examples

```css
/* Card Component */
.card {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-hover);
  box-shadow: var(--glow-accent);
}

/* Button */
.button-primary {
  background: var(--accent-glow);
  color: var(--bg-primary);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
}

/* Text */
.heading {
  color: var(--text-primary);
  font-size: var(--fs-1);
}

.subtext {
  color: var(--text-muted);
  font-size: var(--fs-6);
}
```

---

## 🚀 Quick Start Guide

### Step 1: Install Components

```bash
# Make sure you have these files:
src/ParticleBackground.jsx
src/components/CoderLoader.jsx
src/App.jsx
```

### Step 2: Update App.jsx

```javascript
import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";
import CoderLoader from "./components/CoderLoader";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <CoderLoader onLoadComplete={handleLoadComplete} />}
      <ParticleBackground />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
```

### Step 3: Customize!

1. Open `ParticleBackground.jsx`
2. Find the `CONFIG` object (top of file)
3. Change values and save
4. Refresh browser to see changes

---

## 🐛 Troubleshooting

### Problem: Site is slow/laggy

**Solution:**
```javascript
// In ParticleBackground.jsx CONFIG:
starCount: 80,                    // Reduce stars
shootingStarFrequency: 0.998,     // Less shooting stars
mouseInteractionRadius: 0,        // Disable mouse effects

// In CoderLoader.jsx:
for (let i = 0; i < 100; i++) {   // Fewer explosion particles
```

### Problem: Loader is too fast/slow

**Solution:**
```javascript
// In CoderLoader.jsx line 28:
return prev + Math.random() * X + Y;
// Increase X and Y = Faster
// Decrease X and Y = Slower
```

### Problem: Moon is in wrong position

**Solution:**
```javascript
// In ParticleBackground.jsx, edit getMoonPosition():
if (width < 768) {
  return { x: YOUR_X, y: YOUR_Y };  // Mobile position
} else {
  return { x: YOUR_X, y: YOUR_Y };  // Desktop position
}
```

### Problem: Want to skip loader

**Solution:**
```javascript
// In App.jsx:
const [loading, setLoading] = useState(false); // Change to false
```

---

## 💡 Pro Tips

1. **Test on multiple devices** - Performance varies on phones vs. desktops
2. **Use browser DevTools** - Check FPS and performance
3. **Start conservative** - Begin with lower values, increase gradually
4. **Keep backups** - Copy original CONFIG before major changes
5. **Refresh browser** - Some changes need hard refresh (Ctrl+Shift+R)

---

## 📞 Need Help?

**Common Issues:**
- Stars not showing → Check `starCount` isn't 0
- No shooting stars → Lower `shootingStarFrequency` to 0.990
- Explosion too subtle → Increase particle count and velocity
- Colors look wrong → Check CSS variable names match exactly

**Best Practices:**
- Change one thing at a time
- Test after each change
- Keep notes on what works
- Use version control (git)

---

## 🎉 You're All Set!

Your Dycoder website now has:
- ✨ Animated starry background with twinkling stars
- 🌙 Glowing, pulsing moon
- 💫 Shooting stars from the moon
- 💻 Custom branded loader
- 💥 Epic explosion reveal
- 🎨 Complete theme system

**Enjoy customizing your cosmic website!** 🚀✨

---

*Last Updated: 2025*
*Dycoder Styling System v1.0*