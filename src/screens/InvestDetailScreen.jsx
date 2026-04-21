import { useState } from 'react';
import { C } from '../tokens';
import { IslamicStar } from '../components/IslamicStar';

export function InvestDetailScreen({ onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [investAmount, setInvestAmount] = useState('10,000');
  const tabs = ['Overview','Financials','Team','Documents'];
  return (
    <div style={{ width:'100%', height:'100%', background:C.cream, display:'flex', flexDirection:'column', overflow:'hidden', position:'relative' }}>
      <div style={{ flex:1, overflowY:'auto', paddingBottom:172 }}>
        <div style={{ height:220, background:`linear-gradient(135deg, ${C.forest} 0%, #2D8B50 50%, #388E3C 100%)`, position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', right:-20, top:-20, opacity:0.1 }}><IslamicStar size={180} color="white"/></div>
          <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'55%', background:'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)' }} />
          <div style={{ position:'absolute', top:16, left:16, right:16, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <button onClick={onBack} style={{ width:36, height:36, borderRadius:'50%', background:'white', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.15)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
            </button>
            <div style={{ display:'flex', gap:8 }}>
              <button style={{ width:36, height:36, borderRadius:'50%', background:'white', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg></button>
              <button style={{ width:36, height:36, borderRadius:'50%', background:'white', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button>
            </div>
          </div>
          <div style={{ position:'absolute', bottom:16, left:16 }}>
            <div style={{ display:'flex', gap:8, marginBottom:8 }}>
              <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:11, color:'white', background:C.emerald, padding:'3px 10px', borderRadius:8 }}>✓ Shariah Compliant</span>
              <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:11, color:'white', background:C.richGold, padding:'3px 10px', borderRadius:8 }}>⭐ Featured</span>
            </div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:22, color:'white', marginBottom:3 }}>Kano Rice Farm Cooperative</div>
            <div style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:'rgba(255,255,255,0.8)' }}>Agriculture • Kano State, Nigeria</div>
          </div>
        </div>
        <div style={{ margin:'16px 16px 0', background:C.white, borderRadius:16, boxShadow:'0px 4px 16px rgba(0,0,0,0.08)', display:'flex', height:80 }}>
          {[{label:'Min. Investment',value:'₦ 10,000',gold:false},{label:'Expected ROI',value:'22%',gold:true},{label:'Duration',value:'12 Months',gold:false}].map((s,i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', flex:1 }}>
              {i>0 && <div style={{ width:1, background:'#F0F0F0', margin:'14px 0' }} />}
              <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:4 }}>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey }}>{s.label}</span>
                <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:16, color:s.gold?C.richGold:C.charcoal }}>{s.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin:'14px 16px 0', background:C.white, borderRadius:12, display:'flex', overflow:'hidden', border:'1px solid #F0F0F0' }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab.toLowerCase())} style={{ flex:1, height:44, border:'none', cursor:'pointer', background:'none', fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:13, color:activeTab===tab.toLowerCase()?C.emerald:C.midGrey, borderBottom:activeTab===tab.toLowerCase()?`2.5px solid ${C.emerald}`:'2.5px solid transparent' }}>{tab}</button>
          ))}
        </div>
        {activeTab==='overview' && (
          <div style={{ padding:'20px 16px 0' }}>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:16, color:C.charcoal, marginBottom:10 }}>About This Project</div>
            <div style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:C.charcoal, lineHeight:'22px', marginBottom:6 }}>
              The Kano Rice Farm Cooperative brings together 200 smallholder farmers across Kano State to modernize rice farming through ethical financing. Funds will be used to purchase irrigation equipment, improved seeds, and storage facilities.
            </div>
            <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:13, color:C.emerald, cursor:'pointer' }}>Read More</span>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:16 }}>
              <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:13, color:C.midGrey }}>Risk Level</span>
              <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, color:C.emerald, background:'#E8F5E9', padding:'4px 12px', borderRadius:20 }}>Low Risk</span>
            </div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:16, color:C.charcoal, marginTop:20, marginBottom:10 }}>Funding Progress</div>
            <div style={{ height:10, borderRadius:5, background:'#F2F2F2', overflow:'hidden', marginBottom:8 }}>
              <div style={{ width:'78%', height:'100%', background:C.emerald, borderRadius:5 }} />
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
              <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:13, color:C.emerald }}>₦ 7,800,000</span>
              <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:13, color:C.midGrey }}>₦ 10,000,000</span>
            </div>
            <div style={{ textAlign:'center', fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey, marginBottom:16 }}>78% funded • 47 investors</div>
            <div style={{ display:'flex', gap:10 }}>
              {[
                {iconBg:'#E8F5E9',val:'200 Farmers',label:'Beneficiaries'},
                {iconBg:'#FFF8E1',val:'Dec 2025',label:'Expected Return'},
                {iconBg:'#E8F5E9',val:'CBN',label:'Regulated'},
              ].map((h,i) => (
                <div key={i} style={{ flex:1, background:C.white, borderRadius:10, padding:'12px 8px', boxShadow:'0 2px 8px rgba(0,0,0,0.06)', display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:13, color:C.charcoal }}>{h.val}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey }}>{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab!=='overview' && (
          <div style={{ padding:'40px 16px', textAlign:'center', color:C.midGrey, fontFamily:"'Inter',sans-serif", fontSize:14 }}>
            {activeTab.charAt(0).toUpperCase()+activeTab.slice(1)} content coming soon
          </div>
        )}
      </div>
      <div style={{ position:'absolute', bottom:0, left:0, right:0, background:C.white, borderTop:`1px solid ${C.lightGrey}`, padding:'14px 16px 24px', zIndex:50 }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey }}>Investment Amount</span>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey }}>Available: ₦ 245,800</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', background:C.white, border:`1.5px solid ${C.emerald}`, borderRadius:10, height:52, padding:'0 14px', gap:8, marginBottom:12 }}>
          <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:20, color:C.emerald }}>₦</span>
          <input value={investAmount} onChange={e => setInvestAmount(e.target.value)} style={{ flex:1, background:'transparent', border:'none', outline:'none', fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:22, color:C.charcoal }} />
        </div>
        <button style={{ width:'100%', height:52, borderRadius:12, background:C.forest, border:'none', color:'white', fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:16, cursor:'pointer', boxShadow:`0 4px 16px rgba(26,107,60,0.28)`, marginBottom:6 }}>Invest Now</button>
        <div style={{ textAlign:'center', fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey }}>Profit distributed monthly to your wallet</div>
      </div>
    </div>
  );
}
