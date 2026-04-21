import { useState } from 'react';
import { C } from '../tokens';
import { IslamicStar } from '../components/IslamicStar';
import { BottomNav } from '../components/BottomNav';

export function InvestScreen({ onSelectProject, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('invest');
  const filters = ['All','Agriculture','SME','Real Estate','Tech','Healthcare'];
  const projects = [
    { featured:true, sectorLabel:'⭐ Featured', sectorBg:C.richGold, title:'Kano Rice Farm Cooperative', sector:'Agriculture • Kano, Nigeria', minInvest:'₦ 10,000', roi:'22%', duration:'12 months', progress:78, raised:'₦ 7,800,000', target:'₦ 10,000,000', urgency:null, gradient:`linear-gradient(135deg, #1A6B3C 0%, #2D8B50 100%)` },
    { featured:false, sectorLabel:'SME',         sectorBg:'#3498DB',  title:'Lagos Food Processing SME',   sector:'SME • Lagos, Nigeria',        minInvest:'₦ 25,000', roi:'18%', duration:'6 months',  progress:45, raised:'₦ 2,250,000', target:'₦ 5,000,000',  urgency:null, gradient:'linear-gradient(135deg, #1a5276 0%, #2471A3 100%)' },
    { featured:false, sectorLabel:'Real Estate',  sectorBg:C.richGold, title:'Abuja Affordable Housing Fund',sector:'Real Estate • Abuja, Nigeria',   minInvest:'₦ 50,000', roi:'25%', duration:'24 months', progress:92, raised:'₦ 46,000,000',target:'₦ 50,000,000', urgency:'🔥 Almost Full', gradient:'linear-gradient(135deg, #7D3C00 0%, #BA6808 100%)' },
  ];
  const handleNav = (id) => { setActiveTab(id); if (onNavigate) onNavigate(id); };
  return (
    <div style={{ width:'100%', height:'100%', background:C.cream, display:'flex', flexDirection:'column', overflow:'hidden', position:'relative' }}>
      <div style={{ flex:1, overflowY:'auto', paddingBottom:88 }}>
        <div style={{ background:C.white, padding:'14px 20px 12px', borderBottom:`1px solid ${C.lightGrey}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:22, color:C.charcoal }}>Invest</span>
          <div style={{ display:'flex', gap:14, alignItems:'center' }}>
            <button style={{ background:'none', border:'none', cursor:'pointer', color:C.midGrey, display:'flex' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
            <button style={{ background:'none', border:'none', cursor:'pointer', color:C.emerald, display:'flex' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/></svg></button>
          </div>
        </div>
        <div style={{ padding:'16px 16px 0' }}>
          <div style={{ borderRadius:16, background:`linear-gradient(135deg, ${C.forest} 0%, ${C.emerald} 100%)`, padding:'18px 20px', boxShadow:'0px 8px 24px rgba(26,107,60,0.25)', position:'relative', overflow:'hidden', height:100, display:'flex', alignItems:'center', marginBottom:0 }}>
            <div style={{ position:'absolute', right:-16, top:-16, opacity:0.08 }}><IslamicStar size={130} color="white"/></div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'rgba(255,255,255,0.7)', marginBottom:4 }}>Total Invested</div>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:24, color:'white', marginBottom:2 }}>₦ 380,000</div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:'rgba(255,255,255,0.6)' }}>Across 4 active projects</div>
            </div>
            <div style={{ width:1, height:64, background:'rgba(255,255,255,0.2)', marginRight:20 }} />
            <div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'rgba(255,255,255,0.7)', marginBottom:4 }}>Total Returns</div>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:24, color:C.softGold, marginBottom:2 }}>₦ 52,400</div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:'rgba(255,255,255,0.6)' }}>+13.8% avg ROI</div>
            </div>
          </div>
          <div style={{ display:'flex', gap:8, marginTop:18, marginBottom:0, overflowX:'auto', paddingBottom:4 }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{ height:36, borderRadius:20, border:activeFilter===f?'none':'1px solid #D9D9D9', cursor:'pointer', padding:'0 14px', whiteSpace:'nowrap', flexShrink:0, background:activeFilter===f?C.forest:'white', color:activeFilter===f?'white':C.midGrey, fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:12 }}>{f}</button>
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:18, marginBottom:14 }}>
            <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:17, color:C.charcoal }}>Featured Projects</span>
            <div style={{ display:'flex', alignItems:'center', gap:4 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill={C.emerald}><path d="M12 2l8 4v6c0 5-3.5 9.5-8 11C7.5 21.5 4 17 4 12V6l8-4z"/></svg>
              <span style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey }}>All verified Shariah-compliant</span>
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {projects.map((p,i) => (
              <div key={i} style={{ background:C.white, borderRadius:16, boxShadow:'0px 4px 16px rgba(0,0,0,0.08)', overflow:'hidden', cursor:'pointer' }} onClick={onSelectProject}>
                <div style={{ height:p.featured?140:120, background:p.gradient, position:'relative', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'12px 14px' }}>
                  <div style={{ position:'absolute', top:12, left:14 }}><span style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, color:'white', background:p.sectorBg, padding:'3px 10px', borderRadius:10 }}>{p.sectorLabel}</span></div>
                  <div style={{ position:'absolute', top:12, right:14 }}><span style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, color:'white', background:C.emerald, padding:'3px 10px', borderRadius:10 }}>✓ Shariah</span></div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:p.featured?16:15, color:'white', marginBottom:2 }}>{p.title}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'rgba(255,255,255,0.8)' }}>{p.sector}</div>
                </div>
                <div style={{ padding:'14px 16px' }}>
                  <div style={{ display:'flex', marginBottom:12 }}>
                    {[{l:'Min. Invest',v:p.minInvest,gold:false},{l:'ROI',v:p.roi,gold:true},{l:'Duration',v:p.duration,gold:false}].map((s,j) => (
                      <div key={j} style={{ display:'flex', alignItems:'center', flex:1 }}>
                        {j>0 && <div style={{ width:1, background:'#F0F0F0', margin:'0 10px', alignSelf:'stretch' }} />}
                        <div style={{ flex:1, textAlign:'center' }}>
                          <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey, marginBottom:3 }}>{s.l}</div>
                          <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:14, color:s.gold?C.richGold:C.charcoal }}>{s.v}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                    <span style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey }}>Funding Progress</span>
                    <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:12, color:C.emerald }}>{p.progress}% funded</span>
                  </div>
                  <div style={{ height:6, borderRadius:3, background:'#F2F2F2', overflow:'hidden', marginBottom:10 }}>
                    <div style={{ width:`${p.progress}%`, height:'100%', background:p.progress>90?'#E74C3C':C.emerald, borderRadius:3 }} />
                  </div>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div>
                      <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey }}>{p.raised} raised of {p.target}</div>
                      {p.urgency && <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:10, color:'#E74C3C', background:'#FDEDEC', padding:'2px 8px', borderRadius:100, marginTop:4, display:'inline-block' }}>{p.urgency}</span>}
                    </div>
                    <button style={{ background:C.emerald, border:'none', color:'white', fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:13, borderRadius:10, height:36, padding:'0 14px', cursor:'pointer', flexShrink:0 }}>Invest Now →</button>
                  </div>
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
