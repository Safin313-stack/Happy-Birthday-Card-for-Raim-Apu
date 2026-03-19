<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a0030,50:3b0764,100:6b21a8&height=200&section=header&text=Happy%20Birthday%20Raim%20Apu%20%F0%9F%96%A4&fontSize=42&fontColor=ffffff&fontAlignY=38&desc=A%20hand-crafted%20Kuromi-themed%20interactive%20birthday%20card&descAlignY=60&descSize=15&descColor=d8b4fe" width="100%"/>

<br/>

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![SVG Art](https://img.shields.io/badge/SVG-Hand--Coded%20Art-9333ea?style=flat-square&logo=svg&logoColor=white)]()
[![MIT License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![Deployed](https://img.shields.io/badge/Deployed-GitHub%20Pages-0ea5e9?style=flat-square&logo=github)](https://safin313-stack.github.io/Happy-Birthday-Card-for-my-cousin/)
[![Made with Love](https://img.shields.io/badge/Made%20with-🖤%20Love-6b21a8?style=flat-square)]()

<br/>

<a href="https://safin313-stack.github.io/Happy-Birthday-Card-for-my-cousin/">
  <img src="https://img.shields.io/badge/-%F0%9F%8E%80%20%20LIVE%20DEMO%20%20%E2%86%92-3b0764?style=for-the-badge&logoColor=white" alt="Live Demo" height="42"/>
</a>

<br/>
<sub>✦ No login &nbsp;·&nbsp; No install &nbsp;·&nbsp; Opens instantly in your browser ✦</sub>

<br/><br/>

</div>

---

<div align="center">

### 🖤 What's Inside

| 🎨 Kuromi SVG | 🌟 Star Field | 🎉 Confetti | 🖱️ Cursor Trail | 💜 Glow Effects | 📱 Responsive |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Full character drawn in pure SVG — zero images | Animated dynamic starfield background | JS-powered confetti explosion on load | Three-layer custom glowing cursor | SVG filters + CSS magic for dark aesthetic | Beautiful on mobile & desktop |

</div>

---

## 🖥️ Card Preview

```
╔══════════════════════════════════════════════════════════╗
║   ✦ ☠️  Kuromi's Magical Birthday Wishes  ☠️ ✦          ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║              [ Kuromi SVG Illustration ]                 ║
║         hand-coded with ellipse · path · polygon         ║
║              no images · pure SVG code                   ║
║                                                          ║
║            🖤  Happy Birthday  🖤                        ║
║              Fowzia Hassan Raim                          ║
║                                                          ║
║  ══════  💜 ☠️ 🎀 ☠️ 💜  ══════                        ║
║                                                          ║
║   To my dearest Apu Raim... you are truly one of        ║
║   a kind. My favourite cousin, my guide 💜               ║
║                                                          ║
║   👑 Fav Cousin   🌙 Moonlight Queen   💜 Infinite ∞    ║
║                                                          ║
║  🖤 Best Elder Cousin  ·  ✨ My Fav  ·  🎀 Kuromi Approved ║
╚══════════════════════════════════════════════════════════╝
       🎊 confetti raining  ·  cursor glowing  🎊
```

---

## 🎨 Design & Code Highlights

### Hand-coded Kuromi in Pure SVG

> The entire Kuromi character is drawn using SVG primitives — `ellipse`, `path`, `polygon`, `rect`, `circle`. Not a single external image was used.

```html
<!-- Kuromi's iconic bow with skull — all in code -->
<circle cx="100" cy="52" r="9.5" fill="#c084fc" filter="url(#glow)"/>
<circle cx="100" cy="52" r="6.5" fill="#e879f9"/>
<circle cx="100" cy="51" r="4.5" fill="#1a0030"/>
<circle cx="97.3" cy="50" r="1.3" fill="#fff"/>   <!-- skull left eye  -->
<circle cx="102.7" cy="50" r="1.3" fill="#fff"/>  <!-- skull right eye -->
<rect   x="97.3"  y="53" width="5.4" height="2.2" rx="1.1" fill="#fff"/>
```

### JavaScript — Confetti Burst on Load

```js
function launchConfetti() {
  for (let i = 0; i < 120; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left   = Math.random() * 100 + 'vw';
    piece.style.animationDelay    = Math.random() * 3 + 's';
    piece.style.backgroundColor   = ['#c084fc','#e879f9','#9333ea','#f0abfc'][Math.floor(Math.random()*4)];
    document.getElementById('confetti').appendChild(piece);
  }
}
```

### Three-Layer Custom Cursor Trail

```js
document.addEventListener('mousemove', (e) => {
  cursorMain.style.left  = e.clientX + 'px';
  cursorMain.style.top   = e.clientY + 'px';
  // cursorTrail follows with RAF delay
  // cursorDot snaps instantly for precision
});
```

### CSS Glow & Dark Aesthetic

```css
/* SVG glow filter — applied to bow, sparkles, highlights */
filter: url(#glow);

/* Dark magical colour palette */
--bg-dark:      #09090f;
--purple-deep:  #1a0030;
--purple-main:  #9333ea;
--purple-light: #c084fc;
--accent-pink:  #e879f9;
```

---

## 📁 Project Structure

```
Happy-Birthday-Card-for-my-cousin/
│
├── 📄 index.html    ← Card layout · Kuromi SVG · message · badges · stats
├── 🎨 style.css     ← Dark theme · animations · glow · responsive design
└── ⚙️  script.js    ← Confetti · star field · cursor trail · floaties
```

---

## 🚀 View It Live

**Option 1 — Live (instant, no setup)**

> 🔗 **[https://safin313-stack.github.io/Happy-Birthday-Card-for-my-cousin/](https://safin313-stack.github.io/Happy-Birthday-Card-for-my-cousin/)**

**Option 2 — Clone & open locally**

```bash
git clone https://github.com/Safin313-stack/Happy-Birthday-Card-for-my-cousin.git
cd Happy-Birthday-Card-for-my-cousin
open index.html
```

**Option 3 — VS Code Live Server**

```
1. Install Live Server extension
2. Right-click index.html → Open with Live Server
3. Card opens at localhost:5500 ✅
```

---

## 🛠️ Tech Stack

```
┌──────────────────────────────────────────────┐
│          Frontend · Zero Dependencies        │
├───────────────┬──────────────────────────────┤
│  HTML5        │  Card structure & SVG art    │
│  CSS3         │  Animations · glow · dark    │
│  JavaScript   │  Confetti · stars · cursor   │
│  SVG          │  Full Kuromi drawn in code   │
│  Google Fonts │  Fredoka One + Nunito        │
└───────────────┴──────────────────────────────┘
```

---

## 💜 A Note from the Developer

This started as a birthday wish — but turned into something I'm genuinely proud of as a developer. Drawing Kuromi entirely in SVG, making the confetti burst feel magical, perfecting the glow — every detail took real effort and a lot of heart.

> *"Even Kuromi herself would bow down — because you are truly one of a kind."* — from the card 🖤

**Happy Birthday, Raim Apu.** 🎀

---

<div align="center">

## 👤 Developer

<br/>

**Saharia Hassan Safin**
*Little cousin. Big code. Bigger love.* 🖤

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Safin313--stack-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Safin313-stack)
&nbsp;
[![Live Project](https://img.shields.io/badge/Live%20Card-Visit%20Now-6b21a8?style=for-the-badge&logo=vercel&logoColor=white)](https://safin313-stack.github.io/Happy-Birthday-Card-for-my-cousin/)

<br/>

*"Built with code. Sent with love."* 🖤💜

<br/>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6b21a8,50:3b0764,100:1a0030&height=120&section=footer" width="100%"/>

<sub>MIT License · © 2025 Saharia Hassan Safin · ⭐ Star this repo if it made you smile!</sub>

</div>
