import { useState } from 'react';
import { C } from '../tokens';
import { IslamicStar } from '../components/IslamicStar';

function FingerprintIcon({ color = 'white', size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 8C15.16 8 8 15.16 8 24" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 8c8.84 0 16 7.16 16 16" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M14 24c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M14 24c0 4 1.6 7.6 4.2 10.2" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M34 24c0 4-1.6 7.6-4.2 10.2" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M19 24c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M19 24v2c0 3.86 2.16 7.22 5.34 8.94" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M29 26c-.18 3.04-1.86 5.68-4.32 7.24" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

function FaceIDIcon({ color = 'white', size = 48 }) {
  const s = size, p = s * 0.12;
  return (
    <svg width={s} height={s} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      <path d={`M${p} ${p*2.5} L${p} ${p} L${p*2.5} ${p}`}/>
      <path d={`M${s-p*2.5} ${p} L${s-p} ${p} L${s-p} ${p*2.5}`}/>
      <path d={`M${p} ${s-p*2.5} L${p} ${s-p} L${p*2.5} ${s-p}`}/>
      <path d={`M${s-p*2.5} ${s-p} L${s-p} ${s-p} L${s-p} ${s-p*2.5}`}/>
      <circle cx="18" cy="21" r="1.5" fill={color} stroke="none"/>
      <circle cx="30" cy="21" r="1.5" fill={color} stroke="none"/>
      <path d="M24 21v4"/>
      <path d="M19 30c1.5 2 8.5 2 10 0" strokeLinejoin="round"/>
    </svg>
  );
}

export function BiometricScreen({ onBack }) {
  const [mode, setMode] = useState('fingerprint');
  const isError = mode === 'error';
  const isFace  = mode === 'faceid';
  const ringColor   = isError ? '#E74C3C' : C.richGold;
  const circleColor = isError ? '#E74C3C' : C.forest;

  return (
    <div style={{ width: '100%', height: '100%', background: C.white, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.06, pointerEvents: 'none' }}><IslamicStar size={160} color={C.richGold} /></div>
      <div style={{ position: 'absolute', top: 6, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6, zIndex: 10 }}>
        {[['fingerprint','Fingerprint'],['faceid','Face ID'],['error','Error']].map(([id,lbl]) => (
          <button key={id} onClick={() => setMode(id)} style={{ fontSize: 10, padding: '3px 10px', borderRadius: 100, border: 'none', cursor: 'pointer', fontFamily: 'Inter,sans-serif', fontWeight: 500, background: mode===id?C.forest:'#F0F0F0', color: mode===id?'white':C.midGrey }}>{lbl}</button>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 44, marginBottom: 18 }}>
        <IslamicStar size={26} color={C.richGold} />
        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 19, color: C.charcoal }}>Ethi<span style={{ color: C.richGold }}>Cash</span></span>
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 28, color: C.charcoal, marginBottom: 4 }}>Welcome Back</div>
      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 18, color: C.emerald, marginBottom: 16 }}>Aminu Musa</div>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: C.forest, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 44 }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 18, color: 'white' }}>AM</span>
      </div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
        {!isError && <>
          <div className="ep1" style={{ position: 'absolute', width: 160, height: 160, borderRadius: '50%', border: `2px solid ${ringColor}`, opacity: 0.4 }} />
          <div className="ep2" style={{ position: 'absolute', width: 184, height: 184, borderRadius: '50%', border: `1.5px solid ${ringColor}`, opacity: 0.2 }} />
        </>}
        <div style={{ width: 136, height: 136, borderRadius: '50%', border: `3px solid ${isError?'#FFCDD2':'#C8E6C9'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 112, height: 112, borderRadius: '50%', background: circleColor, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 32px ${circleColor}55`, transition: 'all 0.3s' }}>
            {isFace ? <FaceIDIcon color="white" size={50} /> : <FingerprintIcon color="white" size={50} />}
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: isError?'#E74C3C':C.midGrey, marginBottom: isError?4:0 }}>
        {isFace ? 'Look at your screen to log in' : 'Touch the sensor to log in'}
      </div>
      {isError && <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: '#E74C3C' }}>Fingerprint not recognised. Try again.</div>}
      <div style={{ width: '100%', padding: '0 28px', marginTop: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <div style={{ flex: 1, height: 1, background: '#EEE' }} />
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey }}>or</span>
          <div style={{ flex: 1, height: 1, background: '#EEE' }} />
        </div>
        <button style={{ display: 'block', margin: '0 auto 14px', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 15, color: C.emerald, background: isError?'white':'none', border: isError?`1.5px solid ${C.emerald}`:'none', borderRadius: isError?10:0, padding: isError?'10px 24px':'0', cursor: 'pointer', textDecoration: isError?'none':'underline' }}>
          Use PIN Instead
        </button>
        <button onClick={() => setMode('faceid')} style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '0 auto', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 15, color: C.emerald, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
          <FaceIDIcon color={C.emerald} size={16} />
          Use Face ID Instead
        </button>
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.midGrey }}>
          Not you? <span style={{ color: C.emerald, fontWeight: 700, cursor: 'pointer' }}>Switch Account</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.midGrey }}>Secured with 256-bit encryption</span>
        </div>
      </div>
    </div>
  );
}
