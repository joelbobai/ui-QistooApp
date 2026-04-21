import { useState } from 'react';
import { C } from '../tokens';
import { IslamicStar } from '../components/IslamicStar';
import { BottomNav } from '../components/BottomNav';

export function FinancingScreen({ onBack, onNavigate }) {
  const [activeTab, setActiveTab] = useState('finance');

  const cards = [
    { featured: true, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.richGold} strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, iconBg: 'rgba(201,146,26,0.2)', title: 'Mudarabah', desc: 'You work, investor funds. Profits shared by agreement.', badge: 'Most Popular', tag: 'Profit Sharing' },
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.richGold} strokeWidth="2" strokeLinecap="round"><path d="M6 9v12M18 9v12M3 9h18M3 15h18M9 9V7a3 3 0 016 0v2"/></svg>, iconBg: '#FFF8E1', title: 'Musharakah', desc: 'Joint partnership. Both parties invest capital and share profits.', tag: 'Joint Partnership' },
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.forest} strokeWidth="2" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>, iconBg: '#E8F5E9', title: 'Murabaha', desc: 'We buy the asset. You repay us at an agreed markup price.', tag: 'Asset Purchase' },
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.forest} strokeWidth="2" strokeLinecap="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>, iconBg: '#E8F5E9', title: 'Ijarah', desc: 'Lease an asset and own it fully at the end of the term.', tag: 'Lease to Own' },
  ];

  const handleNav = (id) => { setActiveTab(id); if (id !== 'finance') onNavigate(id); };

  return (
    <div style={{ width: '100%', height: '100%', background: C.cream, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 88 }}>
        <div style={{ background: C.white, padding: '10px 20px 12px', borderBottom: `1px solid ${C.lightGrey}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: C.charcoal, display: 'flex' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
            </button>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 17, color: C.charcoal }}>Choose Financing</span>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: C.midGrey, display: 'flex' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            </button>
          </div>
        </div>
        <div style={{ padding: '20px 20px 16px' }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 20, color: C.charcoal, marginBottom: 6 }}>What type of financing do you need?</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill={C.emerald}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.midGrey }}>All options are Shariah-compliant and interest-free</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 16px' }}>
          {cards.map((card, i) => card.featured ? (
            <div key={i} onClick={() => onNavigate('appform')} style={{ background: C.forest, borderRadius: 16, padding: '16px', boxShadow: '0px 8px 24px rgba(26,107,60,0.25)', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ position: 'absolute', right: -20, top: -20, opacity: 0.08 }}><IslamicStar size={120} color="white" /></div>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 0, height: 0, borderStyle: 'solid', borderWidth: '0 52px 52px 0', borderColor: `transparent ${C.richGold} transparent transparent` }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(201,146,26,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{card.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 17, color: 'white', marginBottom: 4 }}>{card.title}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.75)', lineHeight: '18px' }}>{card.desc}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14 }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 10, color: C.charcoal, background: C.richGold, padding: '3px 10px', borderRadius: 8 }}>{card.badge}</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13, color: 'white' }}>Apply Now →</span>
              </div>
            </div>
          ) : (
            <div key={i} onClick={() => onNavigate('appform')} style={{ background: C.white, borderRadius: 16, padding: '16px', boxShadow: '0px 4px 16px rgba(0,0,0,0.07)', cursor: 'pointer', border: '1px solid #F0F0F0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: card.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{card.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 17, color: C.charcoal, marginBottom: 4 }}>{card.title}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey, lineHeight: '18px' }}>{card.desc}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 500, color: C.midGrey, background: C.lightGrey, padding: '3px 10px', borderRadius: 100 }}>{card.tag}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin: '16px 16px 8px', background: '#E8F5E9', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M9 18h6M12 2a7 7 0 017 7c0 2.7-1.5 5-3.7 6.3V17H8.7V15.3A7 7 0 015 9a7 7 0 017-7z"/></svg>
          <div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.charcoal, lineHeight: '19px', marginBottom: 5 }}>Not sure which to choose? Our advisor can help you decide.</div>
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 13, color: C.emerald, cursor: 'pointer' }}>Talk to an Advisor →</span>
          </div>
        </div>
      </div>
      <BottomNav active={activeTab} onNavigate={handleNav} />
    </div>
  );
}
