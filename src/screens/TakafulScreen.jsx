import { useState } from 'react';
import { C } from '../tokens';
import { IslamicStar } from '../components/IslamicStar';
import { BottomNav } from '../components/BottomNav';

const CoverIcon = ({ type, color, size = 20 }) => {
  if (type==='health')    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>;
  if (type==='business')  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>;
  if (type==='asset')     return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>;
  if (type==='shield')    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><path d="M12 2l8 4v6c0 5-3.5 9.5-8 11C7.5 21.5 4 17 4 12V6l8-4z"/></svg>;
  if (type==='briefcase') return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>;
  return null;
};

export function TakafulScreen({ onFileClaim, onNavigate }) {
  const [activeTab, setActiveTab] = useState('takaful');
  const coverageCards = [
    { active:true,  borderColor:C.forest, iconBg:'#E8F5E9', iconColor:C.forest, icon:'health',   title:'Health Takaful',   desc:'Covers medical bills, hospitalization, surgery',       price:'₦ 3,000 / month' },
    { active:true,  borderColor:C.forest, iconBg:'#FFF8E1', iconColor:C.richGold, icon:'business', title:'Business Takaful', desc:'Covers business interruption, fire, theft',            price:'₦ 5,000 / month' },
    { active:false, borderColor:'#D9D9D9', iconBg:C.lightGrey, iconColor:C.midGrey, icon:'asset',  title:'Asset Takaful',    desc:'Covers electronics, vehicles, property damage',        price:'From ₦ 2,000 / month' },
  ];
  const historyRows = [
    { iconBg:'#E8F5E9', iconColor:C.forest,  icon:'shield',    title:'Health Takaful',   sub:'Oct 2025 contribution',   amount:'-₦ 3,000',  amountColor:'#E74C3C', date:'Oct 1'  },
    { iconBg:'#FFF8E1', iconColor:C.richGold, icon:'briefcase', title:'Business Takaful', sub:'Oct 2025 contribution',   amount:'-₦ 5,000',  amountColor:'#E74C3C', date:'Oct 1'  },
    { iconBg:'#E8F5E9', iconColor:C.emerald,  icon:'shield',    title:'Claim Payout',     sub:'Medical claim approved',  amount:'+₦ 45,000', amountColor:C.emerald, date:'Sep 15' },
  ];
  const handleNav = (id) => { setActiveTab(id); if (onNavigate) onNavigate(id); };
  return (
    <div style={{ width:'100%', height:'100%', background:C.cream, display:'flex', flexDirection:'column', overflow:'hidden', position:'relative' }}>
      <div style={{ flex:1, overflowY:'auto', paddingBottom:88 }}>
        <div style={{ background:C.white, padding:'14px 20px 12px', borderBottom:`1px solid ${C.lightGrey}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:22, color:C.charcoal }}>Takaful</span>
          <div style={{ display:'flex', gap:14, alignItems:'center' }}>
            <button style={{ background:'none', border:'none', cursor:'pointer', color:C.midGrey, display:'flex' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></button>
            <button style={{ background:'none', border:'none', cursor:'pointer', color:C.charcoal, position:'relative', display:'flex' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
              <div style={{ position:'absolute', top:-2, right:-2, width:8, height:8, borderRadius:'50%', background:C.richGold, border:'1.5px solid white' }} />
            </button>
          </div>
        </div>
        <div style={{ padding:'16px 16px 0' }}>
          <div style={{ borderRadius:20, background:`linear-gradient(135deg, ${C.forest} 0%, ${C.emerald} 100%)`, padding:'18px 20px', boxShadow:'0px 8px 24px rgba(26,107,60,0.30)', position:'relative', overflow:'hidden', height:200, display:'flex', flexDirection:'column', justifyContent:'space-between', marginBottom:16 }}>
            <div style={{ position:'absolute', right:-20, top:-20, opacity:0.08 }}><IslamicStar size={160} color="white"/></div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'rgba(255,255,255,0.7)' }}>Active Coverage</span>
              <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:'#4CD964' }} />
                <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:12, color:'white' }}>Active</span>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              <div style={{ width:56, height:56, borderRadius:'50%', background:'rgba(255,255,255,0.15)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 2l8 4v6c0 5-3.5 9.5-8 11C7.5 21.5 4 17 4 12V6l8-4z"/><path d="M9 12l2 2 4-4" stroke={C.softGold} strokeWidth="2.5"/></svg>
              </div>
              <div>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:18, color:'white', marginBottom:3 }}>Business Takaful</div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'rgba(255,255,255,0.7)' }}>Comprehensive business protection</div>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'center' }}>
              {[{l:'Coverage Amount',v:'₦ 5,000,000'},{l:'Monthly Contribution',v:'₦ 5,000'},{l:'Renewal',v:'Jan 2026'}].map((s,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', flex:1 }}>
                  {i>0 && <div style={{ width:1, height:36, background:'rgba(255,255,255,0.2)', marginRight:12 }} />}
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:"'Inter',sans-serif", fontSize:10, color:'rgba(255,255,255,0.65)', marginBottom:3 }}>{s.l}</div>
                    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:13, color:'white' }}>{s.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display:'flex', gap:10, marginBottom:24 }}>
            <button onClick={onFileClaim} style={{ flex:1, height:56, borderRadius:12, background:C.richGold, border:'none', color:'white', cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:3, boxShadow:'0 4px 14px rgba(201,146,26,0.35)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:12 }}>File a Claim</span>
            </button>
            <button style={{ flex:1, height:56, borderRadius:12, background:'white', border:`1.5px solid ${C.emerald}`, color:C.emerald, cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:3 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:12 }}>Add Coverage</span>
            </button>
            <button style={{ flex:1, height:56, borderRadius:12, background:'white', border:'1.5px solid #D9D9D9', color:C.charcoal, cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:3 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:12 }}>View Policy</span>
            </button>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:4 }}>
            <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:17, color:C.charcoal }}>Coverage Plans</span>
            <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:13, color:C.richGold, cursor:'pointer' }}>See All</span>
          </div>
          <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey, marginBottom:14 }}>Choose additional protection for your needs</div>
          <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:24 }}>
            {coverageCards.map((card,i) => (
              <div key={i} style={{ background:C.white, borderRadius:16, boxShadow:'0px 4px 14px rgba(0,0,0,0.07)', borderLeft:`4px solid ${card.borderColor}`, padding:'14px 14px 14px 0', display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ paddingLeft:14, flexShrink:0 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:card.iconBg, display:'flex', alignItems:'center', justifyContent:'center' }}><CoverIcon type={card.icon} color={card.iconColor} size={22}/></div>
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:15, color:C.charcoal, marginBottom:2 }}>{card.title}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey, marginBottom:3 }}>{card.desc}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:13, color:card.active?C.emerald:C.midGrey }}>{card.price}</div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8, marginRight:4 }}>
                  {card.active
                    ? <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, color:C.emerald, background:'#E8F5E9', padding:'3px 8px', borderRadius:8 }}>Active</span>
                    : <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, color:C.midGrey, background:C.lightGrey, padding:'3px 8px', borderRadius:8 }}>Inactive</span>
                  }
                  {card.active
                    ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
                    : <button style={{ background:C.richGold, border:'none', color:'white', fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:11, borderRadius:8, height:28, padding:'0 10px', cursor:'pointer' }}>Add +</button>
                  }
                </div>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
            <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:17, color:C.charcoal }}>Contribution History</span>
            <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:13, color:C.richGold, cursor:'pointer' }}>See All</span>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {historyRows.map((row,i) => (
              <div key={i} style={{ background:C.white, borderRadius:12, padding:'12px 14px', display:'flex', alignItems:'center', gap:12, boxShadow:'0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ width:40, height:40, borderRadius:'50%', background:row.iconBg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}><CoverIcon type={row.icon} color={row.iconColor} size={18}/></div>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:14, color:row.amountColor===C.emerald?C.emerald:C.charcoal, marginBottom:2 }}>{row.title}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey }}>{row.sub}</div>
                </div>
                <div style={{ textAlign:'right', flexShrink:0 }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:14, color:row.amountColor }}>{row.amount}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey, marginTop:2 }}>{row.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active={activeTab} onNavigate={handleNav}/>
    </div>
  );
}
