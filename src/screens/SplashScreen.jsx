import { useEffect, useState } from 'react';
import { C } from '../tokens';
import { IslamicStar, CornerPattern } from '../components/IslamicStar';

function LoadingBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setP(v => { if (v >= 100) { clearInterval(id); return 100; } return v + 1.5; }), 28);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ width: 120, height: 3, borderRadius: 100, background: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
      <div style={{ width: `${p}%`, height: '100%', background: C.softGold, borderRadius: 100, boxShadow: `0 0 8px ${C.softGold}80`, transition: 'width 28ms linear' }} />
    </div>
  );
}

export function SplashScreen({ onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 3200); return () => clearTimeout(t); }, [onDone]);
  return (
    <div style={{ width: '100%', height: '100%', background: C.forest, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: -30, right: -30, pointerEvents: 'none' }}><CornerPattern /></div>
      <div style={{ position: 'absolute', bottom: -30, left: -30, pointerEvents: 'none' }}><CornerPattern flip /></div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-55%)', width: 260, height: 260, borderRadius: '50%', background: `radial-gradient(circle, rgba(201,146,26,0.13) 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 18 }}><IslamicStar size={108} color={C.richGold} /></div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 38, color: C.white, letterSpacing: '-0.5px', lineHeight: 1, marginBottom: 10 }}>
          Ethi<span style={{ color: C.softGold }}>Cash</span>
        </div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontStyle: 'italic', fontWeight: 400, fontSize: 16, color: C.white, opacity: 0.7, letterSpacing: '0.3px' }}>
          Finance with Purpose
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <LoadingBar />
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.white, opacity: 0.4, letterSpacing: '0.2px' }}>Powered by Upscale Strategy</div>
      </div>
    </div>
  );
}
