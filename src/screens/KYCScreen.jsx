import { useState } from 'react';
import { C } from '../tokens';

export function KYCScreen({ onBack, onContinue }) {
  const [selected, setSelected] = useState(0);
  const [faqOpen, setFaqOpen] = useState(false);

  const options = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.forest} strokeWidth="2" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="3"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="6" y1="15" x2="10" y2="15"/><line x1="14" y1="15" x2="18" y2="15"/></svg>,
      iconBg: '#E8F5E9', borderColor: C.forest,
      title: 'BVN Verification', subtitle: 'Bank Verification Number',
      badge: { label: 'Recommended', bg: '#FFF3CD', color: C.richGold }
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2" strokeLinecap="round"><path d="M12 2a5 5 0 015 5v1a5 5 0 01-10 0V7a5 5 0 015-5z"/><path d="M8 13c-2.5 1-4 3-4 5h16c0-2-1.5-4-4-5"/></svg>,
      iconBg: '#E8F5E9', borderColor: C.emerald,
      title: 'NIN Verification', subtitle: 'National Identity Number',
      badge: null
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.richGold} strokeWidth="2" strokeLinecap="round"><path d="M4 12l4 4 12-12"/><circle cx="12" cy="12" r="10" strokeOpacity="0.3"/></svg>,
      iconBg: '#FFF8E1', borderColor: C.softGold,
      title: 'Cooperative Membership', subtitle: 'For farmers and group members',
      badge: null
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%', background: C.white, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ padding: '8px 20px 0', overflowY: 'auto', paddingBottom: 120 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: C.charcoal, display: 'flex' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
          </button>
          <div style={{ flex: 1, display: 'flex', gap: 4 }}>
            {[1,2,3].map(s => <div key={s} style={{ flex: 1, height: 4, borderRadius: 100, background: s<=2?C.emerald:'#D9D9D9' }} />)}
          </div>
        </div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey, fontWeight: 500, marginBottom: 18 }}>Step 2 of 3 — Identity Verification</div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 26, color: C.charcoal, lineHeight: '34px', marginBottom: 6 }}>Verify Your Identity</div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.midGrey, marginBottom: 22 }}>Required for CBN compliance and account security</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {options.map((opt, i) => (
            <button key={i} onClick={() => setSelected(i)} style={{ display: 'flex', alignItems: 'center', gap: 12, background: C.white, borderRadius: 16, padding: '14px 14px 14px 0', boxShadow: '0px 4px 16px rgba(0,0,0,0.08)', border: 'none', cursor: 'pointer', textAlign: 'left', borderLeft: `4px solid ${opt.borderColor}`, outline: selected===i?`2px solid ${opt.borderColor}`:'2px solid transparent', transition: 'all 0.2s' }}>
              <div style={{ paddingLeft: 14, flexShrink: 0 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: opt.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{opt.icon}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, color: C.charcoal }}>{opt.title}</span>
                  {opt.badge && <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 10, color: opt.badge.color, background: opt.badge.bg, padding: '2px 8px', borderRadius: 100 }}>{opt.badge.label}</span>}
                </div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.midGrey }}>{opt.subtitle}</div>
              </div>
              <svg width="8" height="14" viewBox="0 0 8 14" style={{ flexShrink: 0, marginRight: 4 }} fill="none" stroke={selected===i?opt.borderColor:'#CCC'} strokeWidth="2.2" strokeLinecap="round"><path d="M1 1l6 6-6 6"/></svg>
            </button>
          ))}
        </div>
        <div style={{ marginTop: 16 }}>
          <button onClick={() => setFaqOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, background: C.cream, borderRadius: 10, padding: '12px 14px', border: 'none', cursor: 'pointer' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#E8E8E8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, color: C.midGrey }}>?</span>
            </div>
            <span style={{ flex: 1, fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13, color: C.midGrey, textAlign: 'left' }}>Why do we need this information?</span>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round" style={{ transition: 'transform 0.3s', transform: faqOpen?'rotate(180deg)':'rotate(0deg)' }}><path d="M1 1l6 6 6-6"/></svg>
          </button>
          {faqOpen && (
            <div style={{ background: C.cream, borderRadius: '0 0 10px 10px', padding: '0 14px 14px 52px', marginTop: -4, fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey, lineHeight: '18px' }}>
              We collect identity information to comply with the Central Bank of Nigeria (CBN) KYC regulations and to protect both lenders and borrowers on our platform.
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 12 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey }}>Your data is encrypted and never shared</span>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px 32px', background: 'linear-gradient(to top, white 70%, transparent)' }}>
        <button onClick={onContinue} style={{ width: '100%', height: 56, borderRadius: 12, background: C.forest, border: 'none', color: C.white, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: `0 4px 16px rgba(26,107,60,0.3)` }}>
          Continue
        </button>
      </div>
    </div>
  );
}
