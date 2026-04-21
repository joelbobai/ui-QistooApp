import { useState, useRef } from 'react';
import { C } from '../tokens';
import { IslamicStar } from '../components/IslamicStar';

function IllustrationPeople() {
  return (
    <svg viewBox="0 0 320 290" width="320" height="290">
      <ellipse cx="160" cy="268" rx="130" ry="14" fill="#E8F5EE" />
      <g transform="translate(40,40)">
        <rect x="18" y="90" width="44" height="62" rx="8" fill="#2D8B50" />
        <circle cx="40" cy="72" r="28" fill="#8B5E3C" />
        <ellipse cx="40" cy="50" rx="36" ry="7" fill={C.richGold} />
        <rect x="22" y="38" width="36" height="18" rx="6" fill={C.softGold} />
        <rect x="20" y="148" width="18" height="40" rx="6" fill="#1A6B3C" />
        <rect x="42" y="148" width="18" height="40" rx="6" fill="#1A6B3C" />
        <rect x="0" y="92" width="18" height="36" rx="7" fill="#8B5E3C" transform="rotate(-15,9,92)" />
        <rect x="62" y="92" width="18" height="36" rx="7" fill="#8B5E3C" transform="rotate(15,71,92)" />
        <rect x="72" y="80" width="4" height="60" rx="2" fill="#8B6914" />
        <rect x="64" y="78" width="18" height="8" rx="2" fill="#C9921A" transform="rotate(-30,73,82)" />
      </g>
      <g transform="translate(118,20)">
        <rect x="18" y="94" width="48" height="68" rx="9" fill="#F0C040" />
        <circle cx="42" cy="74" r="30" fill="#C68642" />
        <ellipse cx="42" cy="50" rx="30" ry="14" fill={C.richGold} />
        <rect x="18" y="44" width="48" height="20" rx="10" fill="#C9921A" />
        <rect x="54" y="40" width="16" height="24" rx="8" fill={C.richGold} transform="rotate(30,62,52)" />
        <rect x="20" y="158" width="18" height="40" rx="6" fill="#E8A020" />
        <rect x="44" y="158" width="18" height="40" rx="6" fill="#E8A020" />
        <rect x="0" y="96" width="18" height="38" rx="7" fill="#C68642" transform="rotate(-10,9,96)" />
        <rect x="66" y="96" width="18" height="38" rx="7" fill="#C68642" transform="rotate(10,75,96)" />
        <ellipse cx="8" cy="134" rx="12" ry="9" fill={C.richGold} />
        <rect x="0" y="128" width="24" height="12" rx="5" fill="#E8A020" />
      </g>
      <g transform="translate(208,50)">
        <rect x="16" y="90" width="48" height="62" rx="8" fill="#1A3A5C" />
        <circle cx="40" cy="70" r="28" fill="#4A2C0A" />
        <rect x="30" y="90" width="20" height="30" rx="2" fill="white" opacity="0.8" />
        <polygon points="40,92 36,110 40,114 44,110" fill={C.richGold} />
        <rect x="18" y="148" width="18" height="42" rx="6" fill="#122840" />
        <rect x="40" y="148" width="18" height="42" rx="6" fill="#122840" />
        <rect x="0" y="92" width="16" height="36" rx="7" fill="#4A2C0A" transform="rotate(-8,8,92)" />
        <rect x="64" y="92" width="16" height="36" rx="7" fill="#4A2C0A" transform="rotate(8,72,92)" />
        <rect x="68" y="118" width="14" height="22" rx="3" fill="#27AE60" />
        <rect x="70" y="121" width="10" height="16" rx="2" fill="white" opacity="0.9" />
      </g>
    </svg>
  );
}

function IllustrationPlant() {
  return (
    <svg viewBox="0 0 320 290" width="320" height="290">
      <circle cx="160" cy="210" r="52" fill={C.softGold} opacity="0.2" />
      <circle cx="160" cy="210" r="44" fill={C.softGold} opacity="0.35" />
      <circle cx="160" cy="210" r="36" fill={C.richGold} />
      <circle cx="160" cy="210" r="28" fill={C.softGold} />
      <text x="160" y="217" textAnchor="middle" fill={C.richGold} fontSize="18" fontWeight="800" fontFamily="'Plus Jakarta Sans',sans-serif">₦</text>
      <path d="M160 210 Q158 170 160 130 Q162 90 160 60" stroke={C.emerald} strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="145" cy="155" rx="28" ry="13" fill={C.forest} transform="rotate(-35,145,155)" />
      <ellipse cx="175" cy="120" rx="28" ry="13" fill={C.emerald} transform="rotate(35,175,120)" />
      <ellipse cx="143" cy="90" rx="22" ry="10" fill={C.forest} transform="rotate(-40,143,90)" />
      <ellipse cx="160" cy="55" rx="18" ry="30" fill={C.emerald} opacity="0.9" />
      <ellipse cx="140" cy="62" rx="14" ry="22" fill={C.forest} transform="rotate(-25,140,62)" />
      <ellipse cx="180" cy="62" rx="14" ry="22" fill={C.forest} transform="rotate(25,180,62)" />
      {[60,130,210,270].map((x,i) => (
        <g key={i} transform={`translate(${x},${40+i*18})`} opacity={0.7-i*0.1}>
          <polygon points="12,0 0,18 8,18 8,32 16,32 16,18 24,18" fill={i%2===0?C.richGold:C.emerald} opacity="0.8" />
        </g>
      ))}
      {[[80,80],[240,60],[90,180],[250,150]].map(([x,y],i) => (
        <g key={i} transform={`translate(${x},${y})`} opacity="0.5">
          <line x1="0" y1="-8" x2="0" y2="8" stroke={C.softGold} strokeWidth="2" strokeLinecap="round" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke={C.softGold} strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

function IllustrationShield() {
  return (
    <svg viewBox="0 0 320 290" width="320" height="290">
      <ellipse cx="160" cy="155" rx="110" ry="105" fill={C.softGold} opacity="0.08" />
      <path d="M160 28 L258 72 L258 154 Q258 220 160 262 Q62 220 62 154 L62 72 Z" fill={C.forest} />
      <path d="M160 44 L244 82 L244 154 Q244 210 160 248 Q76 210 76 154 L76 82 Z" fill={C.emerald} />
      <path d="M160 60 L230 92 L230 150 Q230 196 160 230 Q90 196 90 150 L90 92 Z" fill="none" stroke={C.softGold} strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="160" cy="138" r="18" fill={C.softGold} />
      <rect x="148" y="155" width="24" height="30" rx="8" fill={C.richGold} />
      <circle cx="122" cy="145" r="13" fill="white" opacity="0.85" />
      <rect x="113" y="158" width="18" height="22" rx="6" fill="white" opacity="0.7" />
      <circle cx="198" cy="145" r="13" fill="white" opacity="0.85" />
      <rect x="189" y="158" width="18" height="22" rx="6" fill="white" opacity="0.7" />
      <path d="M148 192 L156 200 L174 184" stroke={C.softGold} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="160,44 163,54 173,54 165,61 168,71 160,65 152,71 155,61 147,54 157,54" fill={C.softGold} opacity="0.9" />
      {Array.from({length:8},(_,i) => {
        const a = i*45*Math.PI/180;
        return <line key={i} x1={160+96*Math.cos(a)} y1={155+92*Math.sin(a)} x2={160+112*Math.cos(a)} y2={155+108*Math.sin(a)} stroke={C.softGold} strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" />;
      })}
    </svg>
  );
}

const SLIDES = [
  { Illustration: IllustrationPeople, title: 'Finance Without Interest', subtitle: 'Access ethical Shariah-compliant financing designed for real people and real businesses.' },
  { Illustration: IllustrationPlant,  title: 'Grow With Profit-Sharing', subtitle: 'Partner with investors through Mudarabah and Musharakah — no interest, just shared success.' },
  { Illustration: IllustrationShield, title: 'Protected by Takaful',     subtitle: 'Ethical insurance that protects your business, health, and assets through community contribution.' },
];

export function OnboardingScreen({ onGetStarted, onLogin }) {
  const [slide, setSlide] = useState(0);
  const touchStart = useRef(null);

  const goTo = (idx) => setSlide(idx);
  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const dx = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) {
      if (dx > 0 && slide < 2) goTo(slide + 1);
      else if (dx < 0 && slide > 0) goTo(slide - 1);
    }
    touchStart.current = null;
  };

  const { Illustration, title, subtitle } = SLIDES[slide];

  return (
    <div style={{ width: '100%', height: '100%', background: C.white, display: 'flex', flexDirection: 'column', userSelect: 'none' }}
      onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div style={{ flex: '0 0 52%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #F0FFF7 0%, #FFFFFF 100%)' }}>
        <div style={{ position: 'absolute', top: 10, right: 10, opacity: 0.07 }}><IslamicStar size={70} color={C.richGold} /></div>
        <div style={{ position: 'absolute', bottom: -8, left: 10, opacity: 0.05 }}><IslamicStar size={56} color={C.richGold} /></div>
        <Illustration />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 28px 0' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: i===slide?24:8, height: 8, borderRadius: 100, background: i===slide?C.richGold:'#D9D9D9', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease' }} />
          ))}
        </div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 26, color: C.charcoal, textAlign: 'center', lineHeight: '34px', marginBottom: 12 }}>{title}</div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: 14, color: C.midGrey, textAlign: 'center', lineHeight: '22px', marginBottom: 28, maxWidth: 300 }}>{subtitle}</div>
        <button onClick={onGetStarted} style={{ width: '100%', height: 56, borderRadius: 12, background: C.forest, border: 'none', color: C.white, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: '0.3px', cursor: 'pointer', marginBottom: 12, boxShadow: `0 4px 16px rgba(26,107,60,0.35)` }}>
          Get Started
        </button>
        <button onClick={onLogin} style={{ width: '100%', height: 56, borderRadius: 12, background: 'transparent', border: `1.5px solid ${C.emerald}`, color: C.emerald, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: '0.3px', cursor: 'pointer', marginBottom: 16 }}>
          Log In
        </button>
        <button onClick={onGetStarted} style={{ background: 'none', border: 'none', color: C.midGrey, fontFamily: "'Inter',sans-serif", fontSize: 13, cursor: 'pointer' }}>Skip</button>
      </div>
    </div>
  );
}
