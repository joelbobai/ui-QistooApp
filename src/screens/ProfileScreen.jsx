import { useState } from 'react';
import { C } from '../tokens';
import { IslamicStar } from '../components/IslamicStar';
import { BottomNav } from '../components/BottomNav';

const gi = (color, size=16) => ({ stroke:color, strokeWidth:'2', strokeLinecap:'round', fill:'none', width:size, height:size });
const Icons = {
  user:     c => <svg viewBox="0 0 24 24" {...gi(c)}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  shield:   c => <svg viewBox="0 0 24 24" {...gi(c)}><path d="M12 2l8 4v6c0 5-3.5 9.5-8 11C7.5 21.5 4 17 4 12V6l8-4z"/></svg>,
  bank:     c => <svg viewBox="0 0 24 24" {...gi(c)}><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
  lock:     c => <svg viewBox="0 0 24 24" {...gi(c)}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>,
  bell:     c => <svg viewBox="0 0 24 24" {...gi(c)}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  globe:    c => <svg viewBox="0 0 24 24" {...gi(c)}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  finger:   c => <svg viewBox="0 0 24 24" {...gi(c)}><path d="M12 4C8.13 4 5 7.13 5 11v5M12 4c3.87 0 7 3.13 7 7v5"/><path d="M8 11c0-2.21 1.79-4 4-4s4 1.79 4 4v5"/><line x1="12" y1="15" x2="12" y2="19"/></svg>,
  help:     c => <svg viewBox="0 0 24 24" {...gi(c)}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  chat:     c => <svg viewBox="0 0 24 24" {...gi(c)}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  star:     c => <svg viewBox="0 0 24 24" {...gi(c)}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  doc:      c => <svg viewBox="0 0 24 24" {...gi(c)}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  cert:     c => <svg viewBox="0 0 24 24" {...gi(c)}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  chevron:  c => <svg viewBox="0 0 24 24" {...gi(c, 14)}><path d="M9 18l6-6-6-6"/></svg>,
  download: c => <svg viewBox="0 0 24 24" {...gi(c)}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  logout:   c => <svg viewBox="0 0 24 24" {...gi(c, 20)}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
};

const MenuRow = ({ iconBg, icon, title, sub, right, isLast, subGreen }) => (
  <div style={{ display:'flex', alignItems:'center', gap:12, padding:'13px 16px', position:'relative', cursor:'pointer' }}>
    <div style={{ width:36, height:36, borderRadius:10, background:iconBg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{icon}</div>
    <div style={{ flex:1 }}>
      <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:14, color:C.charcoal }}>{title}</div>
      {sub && <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:subGreen?C.emerald:C.midGrey, marginTop:1 }}>{sub}</div>}
    </div>
    {right}
    {!isLast && <div style={{ position:'absolute', bottom:0, left:64, right:16, height:1, background:'#F2F2F2' }} />}
  </div>
);

const SectionLabel = ({ label }) => (
  <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:11, color:C.midGrey, letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:10, marginTop:20 }}>{label}</div>
);

const Toggle = ({ on, onToggle }) => (
  <button onClick={onToggle} style={{ width:44, height:24, borderRadius:12, border:'none', cursor:'pointer', background:on?C.emerald:'#D9D9D9', position:'relative', flexShrink:0 }}>
    <div style={{ width:18, height:18, borderRadius:'50%', background:'white', position:'absolute', top:3, left:on?23:3, transition:'left 0.3s', boxShadow:'0 1px 4px rgba(0,0,0,0.2)' }} />
  </button>
);

export function ProfileScreen({ onBack, onNavigate }) {
  const [bioOn, setBioOn] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const handleNav = (id) => { setActiveTab(id); if (onNavigate) onNavigate(id); };
  const Chev = () => Icons.chevron(C.midGrey);

  return (
    <div style={{ width:'100%', height:'100%', background:C.cream, display:'flex', flexDirection:'column', overflow:'hidden', position:'relative' }}>
      <div style={{ flex:1, overflowY:'auto', paddingBottom:88 }}>
        <div style={{ background:'white', padding:'14px 20px 12px', borderBottom:`1px solid ${C.lightGrey}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:22, color:C.charcoal }}>Profile</span>
          <button style={{ background:'none', border:'none', cursor:'pointer', color:C.midGrey, display:'flex' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
          </button>
        </div>
        <div style={{ padding:'16px 16px 0' }}>
          <div style={{ borderRadius:20, background:`linear-gradient(135deg, ${C.forest} 0%, ${C.emerald} 100%)`, padding:'24px 20px 20px', boxShadow:'0px 8px 24px rgba(26,107,60,0.25)', position:'relative', overflow:'hidden', marginBottom:12 }}>
            <div style={{ position:'absolute', right:-16, top:-16, opacity:0.08 }}><IslamicStar size={140} color="white"/></div>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
              <div style={{ position:'relative', marginBottom:12 }}>
                <div style={{ width:72, height:72, borderRadius:'50%', background:C.forest, border:'3px solid white', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:24, color:'white' }}>AM</span>
                </div>
                <div style={{ position:'absolute', bottom:0, right:0, width:22, height:22, borderRadius:'50%', background:C.richGold, display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid white' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </div>
              </div>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:20, color:'white', marginBottom:3 }}>Aminu Musa</div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:'rgba(255,255,255,0.7)', marginBottom:10 }}>+234 801 234 5678</div>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 2l8 4v6c0 5-3.5 9.5-8 11C7.5 21.5 4 17 4 12V6l8-4z"/></svg>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:12, color:'white' }}>Verified Account</span>
                </div>
                <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, color:'white', background:C.richGold, padding:'3px 10px', borderRadius:8 }}>Credit Score: 742</span>
              </div>
            </div>
          </div>
          <div style={{ background:'white', borderRadius:12, boxShadow:'0px 2px 10px rgba(0,0,0,0.07)', display:'flex', height:72, marginBottom:0, overflow:'hidden' }}>
            {[{l:'Active Financing',v:'2',c:C.emerald},{l:'Investments',v:'4',c:C.richGold},{l:'Takaful Plans',v:'2',c:C.emerald}].map((s,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', flex:1 }}>
                {i>0 && <div style={{ width:1, background:'#F2F2F2', alignSelf:'stretch' }} />}
                <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:3 }}>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey }}>{s.l}</span>
                  <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:20, color:s.c }}>{s.v}</span>
                </div>
              </div>
            ))}
          </div>
          <SectionLabel label="Account" />
          <div style={{ background:'white', borderRadius:16, boxShadow:'0px 2px 12px rgba(0,0,0,0.07)', overflow:'hidden' }}>
            <MenuRow iconBg="#E8F5E9" icon={Icons.user(C.forest)} title="Edit Profile" sub="Update your personal information" right={<Chev/>}/>
            <MenuRow iconBg="#E8F5E9" icon={Icons.shield(C.forest)} title="KYC Status" sub="Fully verified" subGreen right={<span style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, color:C.emerald, background:'#E8F5E9', padding:'3px 8px', borderRadius:8 }}>✓ Verified</span>}/>
            <MenuRow iconBg="#FFF8E1" icon={Icons.bank(C.richGold)} title="Bank Accounts" sub="2 accounts linked" right={<Chev/>}/>
            <MenuRow iconBg="#E8F5E9" icon={Icons.lock(C.forest)} title="Security Settings" sub="PIN, biometrics, 2FA" right={<Chev/>} isLast/>
          </div>
          <SectionLabel label="Preferences" />
          <div style={{ background:'white', borderRadius:16, boxShadow:'0px 2px 12px rgba(0,0,0,0.07)', overflow:'hidden' }}>
            <MenuRow iconBg="#FFF8E1" icon={Icons.bell(C.richGold)} title="Notifications" sub="Manage your alert preferences" right={<Chev/>}/>
            <MenuRow iconBg="#E8F5E9" icon={Icons.globe(C.forest)} title="Language" sub="English" right={<Chev/>}/>
            <MenuRow iconBg="#E8F5E9" icon={Icons.finger(C.forest)} title="Biometric Login" sub="Fingerprint enabled" right={<Toggle on={bioOn} onToggle={() => setBioOn(b => !b)}/>} isLast/>
          </div>
          <SectionLabel label="Support" />
          <div style={{ background:'white', borderRadius:16, boxShadow:'0px 2px 12px rgba(0,0,0,0.07)', overflow:'hidden' }}>
            <MenuRow iconBg="#EBF5FB" icon={Icons.help('#3498DB')} title="Help Center" sub="FAQs and guides" right={<Chev/>}/>
            <MenuRow iconBg="#E8F5E9" icon={Icons.chat(C.forest)} title="Contact Us" sub="Chat, email or call support" right={<Chev/>}/>
            <MenuRow iconBg="#FFF8E1" icon={Icons.star(C.richGold)} title="Rate EthiCash" sub="Share your feedback on the app store" right={<Chev/>} isLast/>
          </div>
          <SectionLabel label="Legal" />
          <div style={{ background:'white', borderRadius:16, boxShadow:'0px 2px 12px rgba(0,0,0,0.07)', overflow:'hidden' }}>
            <MenuRow iconBg={C.lightGrey} icon={Icons.doc(C.midGrey)} title="Privacy Policy" right={<Chev/>}/>
            <MenuRow iconBg={C.lightGrey} icon={Icons.doc(C.midGrey)} title="Terms of Service" right={<Chev/>}/>
            <MenuRow iconBg="#E8F5E9" icon={Icons.cert(C.forest)} title="Shariah Compliance Report" sub="Download latest audit report" right={Icons.download(C.emerald)} isLast/>
          </div>
          <button style={{ width:'100%', height:56, borderRadius:12, background:'white', border:'1.5px solid #E74C3C', color:'#E74C3C', fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:15, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginTop:20, marginBottom:14 }}>
            {Icons.logout('#E74C3C')} Log Out
          </button>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4, marginBottom:32 }}>
            <IslamicStar size={20} color={C.richGold}/>
            <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey }}>EthiCash v1.0.0 • Powered by Upscale Strategy</div>
          </div>
        </div>
      </div>
      <BottomNav active={activeTab} onNavigate={handleNav}/>
    </div>
  );
}
