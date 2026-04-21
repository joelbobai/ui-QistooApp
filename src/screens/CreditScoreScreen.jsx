import { useState, useEffect } from 'react';
import { C } from '../tokens';

function ScoreGauge({ score = 742, max = 850 }) {
  const [displayed, setDisplayed] = useState(0);
  useEffect(() => {
    let start = null;
    const duration = 1400;
    const animate = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplayed(Math.round(ease * score));
      if (p < 1) requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [score]);

  const R = 86, cx = 100, cy = 100;
  const startAngle = -210, sweepTotal = 240;
  const toRad = d => d * Math.PI / 180;
  const polarXY = (angle, r) => [cx + r * Math.cos(toRad(angle)), cy + r * Math.sin(toRad(angle))];
  const describeArc = (start, end, r) => {
    const [x1,y1] = polarXY(start, r);
    const [x2,y2] = polarXY(end, r);
    return `M ${x1} ${y1} A ${r} ${r} 0 ${end-start>180?1:0} 1 ${x2} ${y2}`;
  };
  const currentAngle = startAngle + sweepTotal * (displayed / max);
  const [hx, hy] = polarXY(currentAngle, R);
  const segments = [
    {from:0,to:0.25,color:'#E74C3C'},
    {from:0.25,to:0.5,color:'#F39C12'},
    {from:0.5,to:0.75,color:'#27AE60'},
    {from:0.75,to:1.0,color:'#1A6B3C'},
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <path d={describeArc(startAngle, startAngle+sweepTotal, R)} fill="none" stroke="#F0F0F0" strokeWidth="12" strokeLinecap="round"/>
        {segments.map((seg,i) => {
          const segStart = startAngle + sweepTotal*seg.from;
          const segEnd   = startAngle + sweepTotal*seg.to;
          const fillEnd  = startAngle + sweepTotal*(displayed/max);
          if (fillEnd<=segStart) return null;
          return <path key={i} d={describeArc(segStart, Math.min(segEnd,fillEnd), R)} fill="none" stroke={seg.color} strokeWidth="12" strokeLinecap="round"/>;
        })}
        <circle cx={hx} cy={hy} r="8" fill={C.richGold} stroke="white" strokeWidth="2.5"/>
        <text x={cx} y={cy-8} textAnchor="middle" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="700" fontSize="42" fill={C.charcoal}>{displayed}</text>
        <text x={cx} y={cy+16} textAnchor="middle" fontFamily="'Inter',sans-serif" fontSize="13" fill={C.midGrey}>out of 850</text>
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: 192, marginTop: -18 }}>
        {[['Poor','#E74C3C'],['Fair','#F39C12'],['Good','#27AE60'],['Excellent','#1A6B3C']].map(([l,c]) => (
          <span key={l} style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, color: c }}>{l}</span>
        ))}
      </div>
    </div>
  );
}

export function CreditScoreScreen({ onBack, onProceed }) {
  const factors = [
    { icon:'check', color:C.emerald, iconBg:'#E8F5E9', title:'Transaction History', desc:'Consistent payment behaviour detected', pill:'Strong', pillBg:'#E8F5E9', pillColor:C.emerald },
    { icon:'check', color:C.emerald, iconBg:'#E8F5E9', title:'Mobile Usage Pattern', desc:'Regular and stable usage history', pill:'Good', pillBg:'#E8F5E9', pillColor:C.emerald },
    { icon:'warn',  color:'#F39C12', iconBg:'#FFF3CD', title:'Utility Bill Regularity', desc:'Some irregular payments detected', pill:'Fair', pillBg:'#FFF3CD', pillColor:'#F39C12' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: C.cream, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 20 }}>
        <div style={{ background: C.white, padding: '10px 20px 12px', borderBottom: `1px solid ${C.lightGrey}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: C.charcoal, display: 'flex' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
            </button>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 17, color: C.charcoal }}>Credit Assessment</span>
            <div style={{ width: 30 }} />
          </div>
        </div>
        <div style={{ textAlign: 'center', padding: '22px 20px 0' }}>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.midGrey, marginBottom: 4 }}>Your EthiCash Credit Score</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 18, color: C.charcoal }}>AI Assessment Complete</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}><ScoreGauge score={742} max={850} /></div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, background: '#E8F5E9', border: `1.5px solid ${C.emerald}`, borderRadius: 20, padding: '7px 16px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill={C.emerald}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14, color: C.emerald }}>GOOD STANDING</span>
          </div>
        </div>
        <div style={{ padding: '24px 16px 0' }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 16, color: C.charcoal, marginBottom: 3 }}>Score Breakdown</div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey, marginBottom: 14 }}>Based on your alternative data profile</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {factors.map((f,i) => (
              <div key={i} style={{ background: C.white, borderRadius: 12, padding: '14px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: f.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {f.icon==='check'
                    ? <svg width="16" height="16" viewBox="0 0 24 24" fill={f.color}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    : <svg width="16" height="16" viewBox="0 0 24 24" fill={f.color}><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
                  }
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 14, color: C.charcoal, marginBottom: 2 }}>{f.title}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey }}>{f.desc}</div>
                </div>
                <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 11, color: f.pillColor, background: f.pillBg, padding: '3px 10px', borderRadius: 100, flexShrink: 0 }}>{f.pill}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ margin: '16px 16px 0', background: '#FFF8E1', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, border: '1px solid #F5E5A0' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.richGold} strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}><path d="M9 18h6M12 2a7 7 0 017 7c0 2.7-1.5 5-3.7 6.3V17H8.7V15.3A7 7 0 015 9a7 7 0 017-7z"/></svg>
          <div style={{ flex: 1, fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.charcoal, lineHeight: '18px' }}>
            <span style={{ fontWeight: 700, color: C.richGold }}>Tip: </span>Pay utility bills consistently to improve your score by up to 40 points
          </div>
        </div>
        <div style={{ padding: '16px 16px 8px' }}>
          <button onClick={onProceed} style={{ width: '100%', height: 56, borderRadius: 12, background: C.forest, border: 'none', color: 'white', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: `0 4px 16px rgba(26,107,60,0.28)`, marginBottom: 12 }}>Proceed to Apply</button>
          <button style={{ width: '100%', height: 56, borderRadius: 12, background: 'white', border: `1.5px solid ${C.richGold}`, color: C.richGold, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Improve My Score</button>
          <div style={{ textAlign: 'center', marginTop: 10, fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.midGrey }}>Score is valid for 30 days from today</div>
        </div>
      </div>
    </div>
  );
}
