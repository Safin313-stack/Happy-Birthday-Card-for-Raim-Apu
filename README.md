<div align="center">

<br/>

# 🖤💜 Happy Birthday Card — Raim Apu

**A hand-crafted, Kuromi-themed interactive birthday card built with pure HTML, CSS & JavaScript**

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Made with Love](https://img.shields.io/badge/Made%20with-%F0%9F%96%A4%20Love-9333ea)]()
[![Status](https://img.shields.io/badge/Status-Delivered%20with%20Magic-c084fc)]()

<br/>

> *Not just a webpage — a heartfelt gift written in code. Built for my favourite cousin, Fowzia Hassan Raim, with love, sparkles, and Kuromi's blessing.* 🎀☠️

<br/>

</div>

---

## 🌙 About This Project

This is a fully animated, interactive birthday card dedicated to **Fowzia Hassan Raim (Raim Apu)** — my favourite cousin. Instead of a plain message, I built her an entire experience: a **Kuromi-themed card** complete with a custom SVG illustration drawn entirely in code, floating confetti, a custom cursor trail, sparkles, and a heartfelt message.

Every pixel was placed with intention. Every animation was written by hand. No libraries. No templates. Just code and love. 🖤

---

## ✨ What's Inside

| Feature | Description |
|---|---|
| 🎨 **Custom Kuromi SVG** | A fully hand-coded Kuromi illustration — no images, pure SVG paths |
| 🌟 **Animated Stars & Background** | Dynamic starfield and gradient atmosphere |
| 🎉 **Confetti Burst** | JavaScript-powered confetti explosion on load |
| 🖱️ **Custom Cursor Trail** | Glowing cursor with a trailing dot effect |
| 🫧 **Floating Floaties** | Animated floating elements across the screen |
| 💜 **Glow Effects** | SVG filters and CSS glows for that magical dark aesthetic |
| 🏅 **Personality Badges** | Stat cards and badges celebrating the birthday person |
| 📱 **Responsive Design** | Looks beautiful on mobile and desktop |

---

## 🖥️ Card Preview

```
┌─────────────────────────────────────────────────────────┐
│   ✦ ☠️ Kuromi's Magical Birthday Wishes ☠️ ✦            │
│                                                         │
│              [ Kuromi SVG Illustration ]                │
│           (hand-coded in pure SVG — no images)          │
│                                                         │
│            🖤  Happy Birthday  🖤                       │
│              Fowzia Hassan Raim                         │
│                                                         │
│  ━━━━━━━━━━  💜 ☠️ 🎀 ☠️ 💜  ━━━━━━━━━━               │
│                                                         │
│   [ Heartfelt personal message with glowing highlights ]│
│                                                         │
│   👑 Fav Cousin  🌙 Moonlight Queen  💜 Infinite ∞     │
│                                                         │
│  🖤 Best Elder Cousin  💜 Super Helpful  ✨ My Fav      │
└─────────────────────────────────────────────────────────┘
         🎊 confetti raining • cursor glowing 🎊
```

---

## 🎨 Design Highlights

### Hand-coded Kuromi in SVG
The centrepiece of the card is a full Kuromi character drawn entirely using SVG primitives — `ellipse`, `path`, `polygon`, `rect`, and `circle`. No external images were used.

```html
<!-- Example: Kuromi's iconic bow with skull -->
<circle cx="100" cy="52" r="9.5" fill="#c084fc" filter="url(#glow)"/>
<circle cx="100" cy="52" r="6.5" fill="#e879f9"/>
<circle cx="100" cy="51" r="4.5" fill="#1a0030"/>
<circle cx="97.3" cy="50" r="1.3" fill="#fff"/>  <!-- left eye of skull -->
<circle cx="102.7" cy="50" r="1.3" fill="#fff"/> <!-- right eye of skull -->
```

### Custom Cursor Trail
```js
// Cursor main + trail + dot — three-layer custom cursor
document.addEventListener('mousemove', (e) => {
  cursorMain.style.left = e.clientX + 'px';
  cursorMain.style.top  = e.clientY + 'px';
  // trail follows with a delay via requestAnimationFrame
});
```

### CSS Glow & Dark Aesthetic
```css
/* Purple glow effect on key elements */
filter: url(#glow);   /* SVG glow filter */

/* Dark + magical colour palette */
--bg-dark:      #09090f;
--purple-main:  #9333ea;
--purple-light: #c084fc;
--accent-pink:  #e879f9;
```

---

## 📁 Project Structure

```
Happy-Birthday-Card-for-my-cousin/
│
├── index.html    ← Card structure, Kuromi SVG, message, badges, layout
├── style.css     ← Dark theme, animations, glow effects, responsiveness
└── script.js     ← Confetti, floating elements, cursor trail, star field
```

---

## 🚀 View It

```bash
# Clone the repo
git clone https://github.com/Safin313-stack/Happy-Birthday-Card-for-my-cousin.git

# Open in browser
open index.html
```

Or just open `index.html` directly — no server needed. ✅

---

## 🎨 Tech & Tools

```
Frontend Only — Zero Dependencies
─────────────────────────────────
  HTML5        →  Card structure & inline SVG illustration
  CSS3         →  Animations, glow, dark theme, responsiveness
  JavaScript   →  Confetti, stars, cursor trail, floaties
  SVG          →  Entire Kuromi character drawn in code
  Google Fonts →  Fredoka One + Nunito
```

---

## 💜 A Note from the Developer

This project started as a simple birthday wish — but it turned into something I'm genuinely proud of as a developer. Drawing Kuromi entirely in SVG, making the confetti burst just right, getting the glow to feel magical rather than cheap — it all took real effort and a lot of heart.

> *"Even Kuromi herself would bow down — because you are truly one of a kind."* — from the card 🖤

Happy Birthday, Raim Apu. 🎀

---

## 👤 Developer

<div align="center">

**Saharia Hassan Safin**
*Little cousin. Big code. Bigger love.* 🖤

[![GitHub](https://img.shields.io/badge/GitHub-Safin313--stack-181717?style=flat&logo=github)](https://github.com/Safin313-stack)

</div>

---

## 📜 License

```
MIT License — Free to use, modify, and share.
© 2025 Saharia Hassan Safin
```

---

<div align="center">

🖤 **Built with code. Sent with love.** 💜

⭐ Star this repo if it made you smile!

</div>
