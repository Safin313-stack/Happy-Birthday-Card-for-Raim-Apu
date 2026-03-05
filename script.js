
  // ---- Custom cursor ----
  const curMain  = document.getElementById('cursorMain');
  const curTrail = document.getElementById('cursorTrail');
  const curDot   = document.getElementById('cursorDot');
  let mx=0,my=0,tx=0,ty=0;

  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    curMain.style.left=mx+'px'; curMain.style.top=my+'px';
    curDot.style.left=mx+'px';  curDot.style.top=my+'px';
  });

  (function animTrail(){
    tx += (mx-tx)*.12; ty += (my-ty)*.12;
    curTrail.style.left=tx+'px'; curTrail.style.top=ty+'px';
    requestAnimationFrame(animTrail);
  })();

  // Grow cursor on hover over interactive elements
  document.querySelectorAll('.badge,.stat-card,.message-box,.kuromi-wrap,.late-note').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ curMain.style.width='36px';curMain.style.height='36px'; });
    el.addEventListener('mouseleave',()=>{ curMain.style.width='22px';curMain.style.height='22px'; });
  });

  // Click sparkle burst
  const sparks = ['✦','✧','💜','🖤','🎀','✨','☠️','💫','🌸'];
  document.addEventListener('click', e=>{
    for(let i=0;i<8;i++){
      const s = document.createElement('div');
      s.className = 'sparkle-dot';
      s.textContent = sparks[Math.floor(Math.random()*sparks.length)];
      s.style.left = e.clientX+'px'; s.style.top = e.clientY+'px';
      const angle = (Math.PI*2/8)*i;
      const dist  = 55+Math.random()*40;
      s.style.setProperty('--dx', Math.cos(angle)*dist+'px');
      s.style.setProperty('--dy', Math.sin(angle)*dist+'px');
      s.style.animationDuration = (.7+Math.random()*.5)+'s';
      document.body.appendChild(s);
      setTimeout(()=>s.remove(),1200);
    }
  });

  // Kuromi tilt on mousemove
  const kw = document.getElementById('kuromiWrap');
  kw.addEventListener('mousemove', e=>{
    const r  = kw.getBoundingClientRect();
    const rx = (e.clientX - (r.left+r.width/2))  / (r.width/2);
    const ry = (e.clientY - (r.top+r.height/2))  / (r.height/2);
    kw.style.transform = `rotate(${rx*10}deg) scale(1.08) translateY(${ry*-6}px)`;
    kw.style.filter    = 'drop-shadow(0 0 32px #f0abfccc)';
  });
  kw.addEventListener('mouseleave', ()=>{
    kw.style.transform=''; kw.style.filter='';
  });

  // ---- Stars ----
  const starsEl = document.getElementById('stars');
  for(let i=0;i<120;i++){
    const s=document.createElement('div'); s.className='star';
    const sz=Math.random()*3+.8;
    s.style.cssText=`width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;
      animation-delay:${Math.random()*4}s;animation-duration:${1.5+Math.random()*2.5}s;
      background:${Math.random()>.5?'#c084fc':'#f0abfc'};`;
    starsEl.appendChild(s);
  }

  // ---- Floaties ----
  const emojis=['🖤','💜','✦','🎀','☠️','🌙','✨','🎂','💫','🌸','⭐','🦋','🌷'];
  const floatiesEl=document.getElementById('floaties');
  for(let i=0;i<20;i++){
    const f=document.createElement('div'); f.className='floaty';
    f.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    f.style.cssText=`left:${Math.random()*100}%;animation-delay:${Math.random()*7}s;
      animation-duration:${5+Math.random()*5}s;font-size:${.8+Math.random()*1.2}rem;`;
    floatiesEl.appendChild(f);
  }

  // ---- Confetti ----
  const colors=['#c084fc','#f0abfc','#9333ea','#ff79c6','#e879f9','#fce7ff','#a855f7','#7c3aed'];
  const confEl=document.getElementById('confetti');
  for(let i=0;i<55;i++){
    const c=document.createElement('div'); c.className='confetti-piece';
    c.style.cssText=`left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-delay:${Math.random()*5}s;animation-duration:${3+Math.random()*3}s;
      width:${5+Math.random()*8}px;height:${8+Math.random()*12}px;
      border-radius:${Math.random()>.5?'50%':'2px'};opacity:0;`;
    confEl.appendChild(c);
  }