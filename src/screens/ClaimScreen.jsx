import { useState } from 'react';
import { C } from '../tokens';

export function ClaimScreen({ onBack }) {
  const [declared, setDeclared] = useState(false);
  const [desc, setDesc] = useState('');

  const FieldRow = ({ label, leftIcon, value, placeholder, rightIcon }) => (
    <div style={{ marginBottom:14 }}>
      <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:13, color:C.charcoal, marginBottom:5 }}>{label}</div>
      <div style={{ display:'flex', alignItems:'center', background:'white', border:'1.5px solid #D9D9D9', borderRadius:10, height:56, padding:'0 14px', gap:10 }}>
        {leftIcon && <div style={{ flexShrink:0 }}>{leftIcon}</div>}
        {value
          ? <span style={{ flex:1, fontFamily:"'Inter',sans-serif", fontSize:14, color:C.charcoal }}>{value}</span>
          : <span style={{ flex:1, fontFamily:"'Inter',sans-serif", fontSize:14, color:C.midGrey }}>{placeholder}</span>
        }
        {rightIcon && <div style={{ flexShrink:0 }}>{rightIcon}</div>}
      </div>
    </div>
  );

  return (
    <div style={{ width:'100%', height:'100%', background:C.cream, display:'flex', flexDirection:'column', overflow:'hidden' }}>
      <div style={{ flex:1, overflowY:'auto', paddingBottom:160 }}>
        <div style={{ background:'white', padding:'10px 20px 12px', borderBottom:`1px solid ${C.lightGrey}` }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <button onClick={onBack} style={{ background:'none', border:'none', cursor:'pointer', padding:4, color:C.charcoal, display:'flex' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
            </button>
            <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:17, color:C.charcoal }}>File a Claim</span>
            <div style={{ width:30 }} />
          </div>
        </div>
        <div style={{ background:'white', padding:'16px 24px 14px', borderBottom:`1px solid ${C.lightGrey}` }}>
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'center' }}>
            {[{n:1,label:'Claim Info',active:true},{n:2,label:'Evidence',active:false},{n:3,label:'Review',active:false}].map((s,i,arr) => (
              <div key={i} style={{ display:'flex', alignItems:'center', flex:i<arr.length-1?1:undefined }}>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
                  <div style={{ width:28, height:28, borderRadius:'50%', background:s.active?C.forest:C.lightGrey, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:12, color:s.active?'white':C.midGrey }}>{s.n}</span>
                  </div>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:10, color:s.active?C.forest:C.midGrey }}>{s.label}</span>
                </div>
                {i<arr.length-1 && <div style={{ flex:1, height:2, background:C.lightGrey, marginTop:-14, marginLeft:6, marginRight:6, borderRadius:100 }} />}
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding:'20px 16px 0' }}>
          <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:22, color:C.charcoal, marginBottom:5 }}>Tell Us What Happened</div>
          <div style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:C.midGrey, marginBottom:22, lineHeight:'19px' }}>Provide accurate details to speed up your claim review</div>
          <FieldRow label="Claim Type"
            leftIcon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.richGold} strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>}
            value="Medical / Health Claim"
            rightIcon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>}/>
          <FieldRow label="Coverage Plan"
            leftIcon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2" strokeLinecap="round"><path d="M12 2l8 4v6c0 5-3.5 9.5-8 11C7.5 21.5 4 17 4 12V6l8-4z"/></svg>}
            value="Health Takaful"
            rightIcon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>}/>
          <FieldRow label="Date of Incident"
            leftIcon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
            value="October 25, 2025"
            rightIcon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}/>
          <div style={{ marginBottom:14 }}>
            <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:13, color:C.charcoal, marginBottom:5 }}>Estimated Claim Amount</div>
            <div style={{ display:'flex', alignItems:'center', background:'white', border:`1.5px solid ${C.emerald}`, borderRadius:10, height:56, padding:'0 14px', gap:8, boxShadow:`0 0 0 3px rgba(39,174,96,0.1)` }}>
              <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:18, color:C.emerald }}>₦</span>
              <span style={{ flex:1, fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:18, color:C.charcoal }}>45,000</span>
            </div>
            <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey, marginTop:4 }}>Maximum claimable: ₦ 3,000,000</div>
          </div>
          <div style={{ marginBottom:14 }}>
            <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:13, color:C.charcoal, marginBottom:5 }}>Describe What Happened</div>
            <div style={{ position:'relative' }}>
              <textarea value={desc} onChange={e => setDesc(e.target.value)} maxLength={500}
                placeholder="Provide a clear description of the incident..."
                style={{ width:'100%', height:120, background:'white', border:'1.5px solid #D9D9D9', borderRadius:10, padding:'12px 14px', fontFamily:"'Inter',sans-serif", fontSize:13, color:C.charcoal, resize:'none', outline:'none', boxSizing:'border-box' }}/>
              <div style={{ position:'absolute', bottom:8, right:10, fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey }}>{desc.length} / 500</div>
            </div>
          </div>
          <FieldRow label="Hospital or Service Provider"
            leftIcon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
            placeholder="Enter name of hospital or provider"
            rightIcon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>}/>
          <div style={{ marginBottom:16 }}>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:15, color:C.charcoal, marginBottom:3 }}>Upload Evidence</div>
            <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey, marginBottom:10 }}>Step 2 will allow full uploads — add a quick photo now (optional)</div>
            <div style={{ display:'flex', gap:8 }}>
              <div style={{ flex:1, height:80, borderRadius:10, background:'#E8F5E9', position:'relative', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:4 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill={C.emerald}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:11, color:C.emerald }}>Receipt.jpg</span>
              </div>
              {[0,1].map(k => (
                <div key={k} style={{ flex:1, height:80, borderRadius:10, background:'white', border:'1.5px dashed #D9D9D9', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:4, cursor:'pointer' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey }}>Add Photo</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background:'#EBF5FB', borderRadius:12, padding:'14px 16px', marginBottom:14, display:'flex', gap:10 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498DB" strokeWidth="2" strokeLinecap="round" style={{ flexShrink:0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:C.charcoal, lineHeight:'19px', marginBottom:3 }}><span style={{ fontWeight:700, color:'#3498DB' }}>Processing Time: </span>All claims are reviewed within 3–5 business days</div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey }}>You will receive SMS and app updates at every stage</div>
            </div>
          </div>
          <button onClick={() => setDeclared(d => !d)} style={{ display:'flex', alignItems:'flex-start', gap:10, background:'none', border:'none', cursor:'pointer', padding:0, textAlign:'left', marginBottom:4 }}>
            <div style={{ width:20, height:20, borderRadius:4, background:declared?C.forest:'white', border:`1.5px solid ${declared?C.forest:'#D9D9D9'}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
              {declared && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M5 13l4 4L19 7"/></svg>}
            </div>
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:C.charcoal, lineHeight:'19px' }}>I confirm that all information provided is accurate and truthful to the best of my knowledge</span>
          </button>
        </div>
      </div>
      <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(to top, white 65%, transparent)', padding:'16px 16px 24px' }}>
        <button style={{ width:'100%', height:56, borderRadius:12, background:declared?C.forest:'#B0C9BA', border:'none', color:'white', fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:16, cursor:'pointer', marginBottom:12, boxShadow:declared?`0 4px 16px rgba(26,107,60,0.28)`:'none' }}>
          Next → Step 2 of 3
        </button>
        <button style={{ width:'100%', height:56, borderRadius:12, background:'white', border:'1.5px solid #D9D9D9', color:C.charcoal, fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:16, cursor:'pointer', marginBottom:10 }}>
          Save &amp; Continue Later
        </button>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:5 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey }}>Your claim details are saved securely and encrypted</span>
        </div>
      </div>
    </div>
  );
}
