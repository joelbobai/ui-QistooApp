import { useState } from 'react';
import { C } from '../tokens';

export function AppStatusScreen({ onBack }) {
  const [notifOn, setNotifOn] = useState(true);
  const steps = [
    { done:true,  active:false, label:'Application Submitted', sub:'Mon, Oct 28 • 10:42 AM' },
    { done:true,  active:false, label:'KYC Verified',           sub:'Mon, Oct 28 • 11:15 AM' },
    { done:false, active:true,  label:'Credit Assessment',      sub:'In progress – estimated 2 hours' },
    { done:false, active:false, label:'Shariah Review',         sub:'Pending' },
    { done:false, active:false, label:'Disbursement',           sub:'Funds released to your wallet' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: C.cream, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 24 }}>
        <div style={{ background: C.white, padding: '10px 20px 12px', borderBottom: `1px solid ${C.lightGrey}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: C.charcoal, display: 'flex' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
            </button>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 17, color: C.charcoal }}>Application Status</span>
            <div style={{ width: 30 }} />
          </div>
        </div>
        <div style={{ padding: '16px 16px 0' }}>
          <div style={{ background: C.white, borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: 12, overflow: 'hidden' }}>
            {[{l:'Application ID',r:'#ECH-20245',bold:true},{l:'Financing Type',r:'Murabaha',green:true},{l:'Amount Requested',r:'₦ 150,000',bold:true}].map((row,i) => (
              <div key={i}>
                {i>0 && <div style={{ height: 1, background: C.lightGrey, margin: '0 16px' }} />}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px' }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey }}>{row.l}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: row.green?600:700, fontSize: 13, color: row.green?C.emerald:C.charcoal }}>{row.r}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#EBF5FB', borderRadius: 16, borderLeft: '4px solid #3498DB', padding: '14px 16px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
            <svg className="spinning" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3498DB" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2v4M19.07 4.93l-2.83 2.83M22 12h-4M19.07 19.07l-2.83-2.83M12 22v-4M4.93 19.07l2.83-2.83M2 12h4M4.93 4.93l2.83 2.83" strokeOpacity="0.3"/>
              <path d="M12 2v4" stroke="#3498DB" strokeWidth="2.5"/>
              <path d="M19.07 4.93l-2.83 2.83" stroke="#3498DB" strokeWidth="2.5"/>
              <path d="M22 12h-4" stroke="#3498DB" strokeWidth="2.5"/>
            </svg>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, color: '#3498DB', marginBottom: 2 }}>Under Review</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.midGrey }}>Your application is being assessed by our team</div>
            </div>
          </div>
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 16, color: C.charcoal, marginBottom: 16 }}>Application Progress</div>
          <div style={{ paddingLeft: 8 }}>
            {steps.map((step,i) => (
              <div key={i} style={{ display: 'flex', gap: 16, position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  {step.done
                    ? <div style={{ width: 32, height: 32, borderRadius: '50%', background: C.emerald, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M5 13l4 4L19 7"/></svg></div>
                    : step.active
                    ? <div className="blue-pulse" style={{ width: 32, height: 32, borderRadius: '50%', border: '2.5px solid #3498DB', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg className="spinning" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#EBF5FB" strokeWidth="3"/><path d="M12 3a9 9 0 019 9" stroke="#3498DB" strokeWidth="3" strokeLinecap="round"/></svg></div>
                    : <div style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #D9D9D9', background: 'white' }} />
                  }
                  {i<steps.length-1 && <div style={{ width: 2, flex: 1, minHeight: 32, background: step.done?C.emerald:'#D9D9D9', marginTop: 4, marginBottom: 4 }} />}
                </div>
                <div style={{ paddingBottom: i<steps.length-1?24:0, paddingTop: 4 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 15, color: step.active?'#3498DB':step.done?C.charcoal:C.midGrey, marginBottom: 3 }}>{step.label}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: step.active?'rgba(52,152,219,0.7)':C.midGrey, marginBottom: step.active?6:0 }}>{step.sub}</div>
                  {step.active && <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 10, color: '#3498DB', background: '#EBF5FB', padding: '2px 10px', borderRadius: 100 }}>In Progress</span>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#FFF8E1', borderRadius: 12, padding: '14px 16px', marginTop: 16, marginBottom: 12, border: '1px solid #F5E5A0', display: 'flex', gap: 10 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.richGold} strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.charcoal }}><span style={{ fontWeight: 700, color: C.richGold }}>Estimated Completion: </span>Within 24 hours</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey, marginTop: 3 }}>You will be notified via SMS and app notification</div>
            </div>
          </div>
          <div style={{ background: C.white, borderRadius: 12, padding: '14px 16px', marginBottom: 16, boxShadow: '0 2px 10px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 14, color: C.charcoal }}>Get Notified on Updates</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey }}>Push notifications {notifOn?'enabled':'disabled'}</div>
            </div>
            <button onClick={() => setNotifOn(n => !n)} style={{ width: 46, height: 26, borderRadius: 13, border: 'none', cursor: 'pointer', background: notifOn?C.emerald:'#D9D9D9', position: 'relative', flexShrink: 0 }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'white', position: 'absolute', top: 3, left: notifOn?22:3, transition: 'left 0.3s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }} />
            </button>
          </div>
          <button style={{ width: '100%', height: 56, borderRadius: 12, background: C.forest, border: 'none', color: 'white', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: `0 4px 16px rgba(26,107,60,0.25)`, marginBottom: 12 }}>View Full Details</button>
          <button style={{ width: '100%', height: 56, borderRadius: 12, background: 'white', border: '1.5px solid #D9D9D9', color: C.charcoal, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, cursor: 'pointer', marginBottom: 10 }}>Contact Support</button>
          <div style={{ textAlign: 'center', fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.midGrey }}>Application reference: #ECH-20245</div>
        </div>
      </div>
    </div>
  );
}
