import { useState } from 'react';
import { C } from '../tokens';

const NotifIcon = ({ type, color }) => {
  const icons = {
    trend:  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    doc:    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>,
    star:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    bell:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
    shield: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><path d="M12 2l8 4v6c0 5-3.5 9.5-8 11C7.5 21.5 4 17 4 12V6l8-4z"/></svg>,
    check:  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    wallet: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><path d="M20 12V8H6a2 2 0 01-2-2V4a2 2 0 012-2h14v4"/><path d="M4 6v12a2 2 0 002 2h14v-4"/></svg>,
  };
  return icons[type] || null;
};

export function NotificationsScreen({ onBack }) {
  const [showEmpty, setShowEmpty] = useState(false);
  const [notifications, setNotifications] = useState([
    { id:1, unread:true, borderColor:C.emerald, bg:'#F0FFF4', iconBg:'#E8F5E9', iconColor:C.emerald, dotColor:C.emerald, icon:'trend',  title:'Profit Distributed',       desc:'₦ 12,500 profit from your Mudarabah investment has been credited to your wallet', time:'10:30 AM' },
    { id:2, unread:true, borderColor:'#3498DB', bg:'#EBF5FB', iconBg:'#EBF5FB', iconColor:'#3498DB', dotColor:'#3498DB', icon:'doc',    title:'Application Under Review',  desc:'Your Murabaha application #ECH-20245 is currently being assessed by our team', time:'09:15 AM' },
    { id:3, unread:true, borderColor:C.richGold, bg:'#FFF8E1', iconBg:'#FFF8E1', iconColor:C.richGold, dotColor:C.richGold, icon:'star', title:'Investment Milestone',      desc:'Kano Rice Farm project is now 78% funded. Your investment is performing well', time:'08:00 AM' },
    { id:4, unread:true, borderColor:'#E74C3C', bg:'#FEF9F9', iconBg:'#FDEDEC', iconColor:'#E74C3C', dotColor:'#E74C3C', icon:'bell',  title:'Payment Due Tomorrow',      desc:'Your Murabaha repayment of ₦ 15,000 is due on Nov 5. Ensure your wallet is funded', time:'07:30 AM' },
  ]);
  const weekNotifs = [
    { id:5, unread:false, borderColor:C.emerald, bg:'white', iconBg:'#E8F5E9', iconColor:C.emerald,  icon:'shield', title:'Takaful Contribution Deducted',   desc:'Monthly Health Takaful contribution of ₦ 3,000 has been processed successfully', time:'Monday • 9:00 AM' },
    { id:6, unread:false, borderColor:C.emerald, bg:'white', iconBg:'#E8F5E9', iconColor:C.emerald,  icon:'check',  title:'Identity Verified Successfully',    desc:'Your BVN and NIN verification was completed. Your account is fully active', time:'Sunday • 2:15 PM' },
    { id:7, unread:false, borderColor:C.emerald, bg:'white', iconBg:'#E8F5E9', iconColor:C.emerald,  icon:'wallet', title:'Wallet Funded Successfully',        desc:'₦ 50,000 has been added to your EthiCash wallet via Paystack', time:'Saturday • 11:45 AM' },
  ];
  const unreadCount = notifications.filter(n => n.unread).length;
  const markAllRead = () => setNotifications(ns => ns.map(n => ({...n, unread:false, bg:'white'})));

  const NotifRow = ({ n }) => (
    <div style={{ background:n.bg, borderRadius:12, boxShadow:'0px 4px 16px rgba(0,0,0,0.07)', borderLeft:`4px solid ${n.borderColor}`, padding:'12px 12px 12px 0', display:'flex', alignItems:'flex-start', gap:10 }}>
      <div style={{ paddingLeft:12, flexShrink:0 }}>
        <div style={{ width:44, height:44, borderRadius:'50%', background:n.iconBg, display:'flex', alignItems:'center', justifyContent:'center' }}><NotifIcon type={n.icon} color={n.iconColor}/></div>
      </div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:14, color:C.charcoal, marginBottom:3 }}>{n.title}</div>
        <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:C.midGrey, lineHeight:'17px', marginBottom:3, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{n.desc}</div>
        <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.midGrey }}>{n.time}</div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8, flexShrink:0, paddingTop:2, paddingRight:4 }}>
        {n.unread && <div style={{ width:8, height:8, borderRadius:'50%', background:n.dotColor }} />}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    </div>
  );

  return (
    <div style={{ width:'100%', height:'100%', background:C.cream, display:'flex', flexDirection:'column', overflow:'hidden' }}>
      <div style={{ background:'white', padding:'10px 20px 12px', borderBottom:`1px solid ${C.lightGrey}`, flexShrink:0 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <button onClick={onBack} style={{ background:'none', border:'none', cursor:'pointer', padding:4, color:C.charcoal, display:'flex' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
          </button>
          <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:17, color:C.charcoal }}>Notifications</span>
          <button onClick={markAllRead} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:13, color:C.richGold }}>Mark All Read</button>
        </div>
      </div>
      {showEmpty ? (
        <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'0 32px' }}>
          <div style={{ width:120, height:120, borderRadius:'50%', background:'#E8F5E9', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:24 }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="1.5" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
          </div>
          <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:22, color:C.charcoal, marginBottom:10, textAlign:'center' }}>All Caught Up!</div>
          <div style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:C.midGrey, textAlign:'center', lineHeight:'22px', marginBottom:32 }}>You have no new notifications right now.</div>
          <button onClick={onBack} style={{ width:'100%', height:56, borderRadius:12, background:C.forest, border:'none', color:'white', fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:16, cursor:'pointer' }}>Go to Home</button>
        </div>
      ) : (
        <div style={{ flex:1, overflowY:'auto', paddingBottom:24 }}>
          <div style={{ display:'flex', justifyContent:'center', padding:'10px 0 0' }}>
            <button onClick={() => setShowEmpty(e => !e)} style={{ fontFamily:"'Inter',sans-serif", fontSize:10, color:C.midGrey, background:'none', border:'1px solid #E0E0E0', borderRadius:100, padding:'3px 12px', cursor:'pointer' }}>Toggle empty state</button>
          </div>
          {unreadCount>0 && (
            <div style={{ display:'flex', justifyContent:'center', marginTop:10 }}>
              <div style={{ display:'flex', alignItems:'center', gap:6, background:'#FFF8E1', border:`1px solid ${C.richGold}`, borderRadius:20, padding:'6px 14px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.richGold} strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
                <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:13, color:C.richGold }}>{unreadCount} unread notification{unreadCount!==1?'s':''}</span>
              </div>
            </div>
          )}
          <div style={{ padding:'0 16px' }}>
            <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:13, color:C.midGrey, marginTop:20, marginBottom:10 }}>Today</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:0 }}>{notifications.map(n => <NotifRow key={n.id} n={n}/>)}</div>
            <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:13, color:C.midGrey, marginTop:20, marginBottom:10 }}>This Week</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>{weekNotifs.map(n => <NotifRow key={n.id} n={n}/>)}</div>
          </div>
        </div>
      )}
    </div>
  );
}
