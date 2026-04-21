import { useState } from 'react';
import { C } from '../tokens';
import { IslamicStar } from '../components/IslamicStar';
import { BottomNav } from '../components/BottomNav';

export function WalletScreen({ onNavigate }) {
  const [balanceHidden, setBalanceHidden] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('home');

  const filters = ['All','Today','This Week','This Month'];
  const actions = [
    { label:'Add Money', bg:'#E8F5E9', iconColor:C.emerald, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg> },
    { label:'Send',      bg:'#E8F5E9', iconColor:C.emerald, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg> },
    { label:'Withdraw',  bg:'#FFF8E1', iconColor:C.richGold, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> },
    { label:'QR Pay',    bg:'#E8F5E9', iconColor:C.emerald, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
  ];
  const todayTxns = [
    { type:'credit', label:'Profit Distribution',  sub:'Mudarabah Return • 10:30 AM', amount:'+₦ 12,500', iconBg:'#E8F5E9', iconColor:C.emerald, icon:'up' },
    { type:'debit',  label:'Murabaha Repayment',   sub:'Auto-debit • 09:00 AM',      amount:'-₦ 15,000', iconBg:'#FDEDEC', iconColor:'#E74C3C', icon:'down' },
    { type:'credit', label:'Wallet Top Up',         sub:'Via Paystack • 08:15 AM',    amount:'+₦ 50,000', iconBg:'#FFF8E1', iconColor:C.richGold, icon:'plus' },
  ];
  const yesterdayTxns = [
    { type:'debit',  label:'Takaful Contribution',  sub:'Monthly contribution • Yesterday', amount:'-₦ 5,000', iconBg:'#EBF5FB', iconColor:'#3498DB', icon:'shield' },
    { type:'credit', label:'Investment Return',      sub:'AgriTech Project • Yesterday',     amount:'+₦ 8,750', iconBg:'#E8F5E9', iconColor:C.emerald, icon:'chart' },
  ];
  const txnIcons = {
    up:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>,
    down:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>,
    plus:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    shield: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2l8 4v6c0 5-3.5 9.5-8 11C7.5 21.5 4 17 4 12V6l8-4z"/></svg>,
    chart:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>,
  };
  const TxnRow = ({tx}) => (
    <div style={{ background:C.white, borderRadius:12, padding:'12px 14px', display:'flex', alignItems:'center', gap:12, boxShadow:'0 2px 8px rgba(0,0,0,0.06)' }}>
      <div style={{ width:44, height:44, borderRadius:'50%', background:tx.iconBg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:tx.iconColor }}>{txnIcons[tx.icon]}</div>
      <div style={{ flex:1 }}>
        <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:14, color:C.charcoal, marginBottom:2 }}>{tx.label}</div>
        <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey }}>{tx.sub}</div>
      </div>
      <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:15, color:tx.type==='credit'?C.emerald:'#E74C3C', flexShrink:0 }}>{tx.amount}</div>
    </div>
  );

  const handleNav = (id) => { setActiveTab(id); if (onNavigate) onNavigate(id); };

  return (
    <div style={{ width:'100%', height:'100%', background:C.cream, display:'flex', flexDirection:'column', overflow:'hidden', position:'relative' }}>
      <div style={{ flex:1, overflowY:'auto', paddingBottom:88 }}>
        <div style={{ background:C.white, padding:'14px 20px 12px', borderBottom:`1px solid ${C.lightGrey}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:22, color:C.charcoal }}>My Wallet</span>
          <div style={{ display:'flex', gap:12, alignItems:'center' }}>
            <button style={{ background:'none', border:'none', cursor:'pointer', color:C.midGrey, display:'flex' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></button>
            <button style={{ background:'none', border:'none', cursor:'pointer', color:C.emerald, display:'flex' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></button>
          </div>
        </div>
        <div style={{ padding:'16px 16px 0' }}>
          <div style={{ borderRadius:20, background:`linear-gradient(135deg, ${C.forest} 0%, ${C.emerald} 100%)`, padding:'20px', boxShadow:'0px 8px 24px rgba(26,107,60,0.30)', position:'relative', overflow:'hidden', height:180, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
            <div style={{ position:'absolute', right:-24, top:-24, opacity:0.08, pointerEvents:'none' }}><IslamicStar size={160} color="white"/></div>
            <div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:'rgba(255,255,255,0.7)' }}>Available Balance</span>
                <button onClick={() => setBalanceHidden(h=>!h)} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.7)', display:'flex' }}>
                  {balanceHidden
                    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:36, color:'white', letterSpacing:'-0.5px', marginBottom:4 }}>
                {balanceHidden ? '₦ ••••••' : '₦ 245,800.00'}
              </div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'rgba(255,255,255,0.6)' }}>EthiCash Wallet</div>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'rgba(255,255,255,0.7)' }}>Acc: **** **** 4521</span>
            </div>
          </div>
          <div style={{ display:'flex', gap:10, marginTop:20 }}>
            {actions.map(a => (
              <button key={a.label} style={{ flex:1, background:C.white, borderRadius:12, border:'none', cursor:'pointer', padding:'12px 6px', boxShadow:'0 2px 10px rgba(0,0,0,0.07)', display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
                <div style={{ width:44, height:44, borderRadius:'50%', background:a.bg, display:'flex', alignItems:'center', justifyContent:'center', color:a.iconColor }}>{a.icon}</div>
                <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:11, color:C.charcoal }}>{a.label}</span>
              </button>
            ))}
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:24, marginBottom:12 }}>
            <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:17, color:C.charcoal }}>Transactions</span>
            <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:13, color:C.richGold, cursor:'pointer' }}>See All</span>
          </div>
          <div style={{ display:'flex', gap:8, marginBottom:18, overflowX:'auto', paddingBottom:4 }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{ height:32, borderRadius:20, border:activeFilter===f?'none':'1px solid #E8E8E8', cursor:'pointer', padding:'0 14px', whiteSpace:'nowrap', background:activeFilter===f?C.forest:'white', color:activeFilter===f?'white':C.midGrey, fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:12, flexShrink:0 }}>{f}</button>
            ))}
          </div>
          <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:13, color:C.midGrey, marginBottom:10 }}>Today</div>
          <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:16 }}>{todayTxns.map((tx,i) => <TxnRow key={i} tx={tx}/>)}</div>
          <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:13, color:C.midGrey, marginBottom:10 }}>Yesterday</div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>{yesterdayTxns.map((tx,i) => <TxnRow key={i} tx={tx}/>)}</div>
        </div>
      </div>
      <button style={{ position:'absolute', bottom:100, right:20, width:56, height:56, borderRadius:'50%', background:C.richGold, border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0px 4px 16px rgba(201,146,26,0.40)', zIndex:60 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      </button>
      <BottomNav active={activeTab} onNavigate={handleNav}/>
    </div>
  );
}
