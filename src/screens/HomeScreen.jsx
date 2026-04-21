import { useState } from 'react';
import { C } from '../tokens';
import { IslamicStar } from '../components/IslamicStar';
import { BottomNav } from '../components/BottomNav';

export function HomeScreen({ onNavigate }) {
  const [balanceHidden, setBalanceHidden] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const quickActions = [
    { icon: '↑', label: 'Send' },
    { icon: '↓', label: 'Receive' },
    { icon: '⚡', label: 'Pay' },
    { icon: '+', label: 'Top Up' },
  ];

  const finCards = [
    { bg: C.forest, iconBg: 'rgba(240,192,64,0.2)', icon: '★', iconColor: C.softGold, title: 'Mudarabah', sub: 'Profit Sharing', badge: 'Most Popular', light: true },
    { bg: C.white, iconBg: '#E8F5E9', icon: '🏠', iconColor: C.forest, title: 'Murabaha', sub: 'Asset Purchase', badge: null, light: false },
    { bg: C.white, iconBg: '#FFF8E1', icon: '🤝', iconColor: C.richGold, title: 'Musharakah', sub: 'Joint Partnership', badge: null, light: false },
    { bg: C.white, iconBg: '#E8F5E9', icon: '📋', iconColor: C.forest, title: 'Ijarah', sub: 'Lease to Own', badge: null, light: false },
  ];

  const handleNav = (id) => {
    setActiveTab(id);
    if (id !== 'home') onNavigate(id);
  };

  return (
    <div style={{ width: '100%', height: '100%', background: C.cream, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 88, margin: '6px 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '14px 20px 10px', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.midGrey, marginBottom: 2 }}>Good Morning 👋</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 18, color: C.charcoal }}>Aminu Musa</div>
          </div>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => onNavigate('notifications')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.charcoal} strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            <div style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, borderRadius: '50%', background: C.richGold, border: '1.5px solid white' }} />
          </div>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.forest, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }} onClick={() => onNavigate('profile')}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14, color: 'white' }}>AM</span>
          </div>
        </div>

        <div style={{ margin: '4px 16px 20px', borderRadius: 20, background: `linear-gradient(135deg, ${C.forest} 0%, ${C.emerald} 100%)`, padding: '20px 20px 16px', boxShadow: '0px 8px 24px rgba(26,107,60,0.28)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -30, top: -30, opacity: 0.08, pointerEvents: 'none' }}><IslamicStar size={160} color="white" /></div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>Total Wallet Balance</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 32, color: 'white', letterSpacing: '-0.5px' }}>
              {balanceHidden ? '₦ ••••••' : '₦ 245,800.00'}
            </div>
            <button onClick={() => setBalanceHidden(h => !h)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', paddingTop: 2 }}>
              {balanceHidden
                ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              }
            </button>
          </div>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 18 }}>EthiCash Wallet • **** 4521</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {quickActions.map(a => (
              <button key={a.label} style={{ flex: 1, background: 'rgba(255,255,255,0.18)', borderRadius: 10, border: 'none', padding: '8px 4px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <span style={{ fontSize: 14, color: 'white', fontWeight: 700 }}>{a.icon}</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, color: 'white' }}>{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ padding: '0 20px', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 17, color: C.charcoal }}>Financing</span>
            <span onClick={() => onNavigate('financing')} style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13, color: C.richGold, cursor: 'pointer' }}>See All</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingLeft: 20, paddingRight: 20, paddingBottom: 4, marginBottom: 22 }}>
          {finCards.map((fc, i) => (
            <div key={i} onClick={() => onNavigate('financing')} style={{ flexShrink: 0, width: 152, height: 108, borderRadius: 16, background: fc.bg, padding: '14px', boxShadow: fc.light?'none':'0px 4px 16px rgba(0,0,0,0.08)', position: 'relative', overflow: 'hidden', cursor: 'pointer', border: fc.light?'none':'1px solid #F0F0F0' }}>
              {fc.light && <div style={{ position: 'absolute', right: -16, bottom: -16, opacity: 0.08 }}><IslamicStar size={80} color="white" /></div>}
              <div style={{ width: 32, height: 32, borderRadius: 10, background: fc.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                <span style={{ color: fc.iconColor, fontSize: 14, fontWeight: 700 }}>{fc.icon}</span>
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14, color: fc.light?'white':C.charcoal, marginBottom: 2 }}>{fc.title}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: fc.light?'rgba(255,255,255,0.7)':C.midGrey }}>{fc.sub}</div>
              {fc.badge && (
                <div style={{ display: 'inline-block', background: 'rgba(240,192,64,0.25)', borderRadius: 100, padding: '2px 8px', marginTop: 4 }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 700, color: C.softGold }}>{fc.badge}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: '0 16px' }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 17, color: C.charcoal, marginBottom: 12 }}>Active Financing</div>
          <div style={{ background: C.white, borderRadius: 16, padding: '16px', boxShadow: '0px 4px 16px rgba(0,0,0,0.07)', border: '1px solid #F5F5F5' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.forest} strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 15, color: C.charcoal, marginBottom: 3 }}>Murabaha — Laptop Purchase</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey }}>Next repayment: Nov 5, 2025</div>
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, color: C.emerald, flexShrink: 0 }}>₦ 15,000</div>
            </div>
            <div style={{ height: 5, borderRadius: 100, background: '#F0F0F0', overflow: 'hidden', marginBottom: 4 }}>
              <div style={{ width: '65%', height: '100%', background: C.emerald, borderRadius: 100 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.midGrey }}>65% repaid</span>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active={activeTab} onNavigate={handleNav} />
    </div>
  );
}
