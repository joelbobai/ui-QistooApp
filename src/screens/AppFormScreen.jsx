import { useState } from 'react';
import { C } from '../tokens';

export function AppFormScreen({ onBack, onNext }) {
  const [amount, setAmount] = useState(150000);
  const [duration, setDuration] = useState(12);
  const [purpose, setPurpose] = useState('');
  const markup = Math.round(amount * 0.12);
  const total  = amount + markup;
  const fmt = n => n.toLocaleString('en-NG');

  const ReadonlyField = ({ label, value }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13, color: C.charcoal, marginBottom: 5 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'center', background: '#F0FFF4', border: `1.5px solid ${C.emerald}`, borderRadius: 10, height: 56, padding: '0 14px' }}>
        <span style={{ flex: 1, fontFamily: "'Inter',sans-serif", fontSize: 14, color: C.charcoal }}>{value}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.emerald} strokeWidth="2" strokeLinecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
      </div>
    </div>
  );

  const UploadBox = ({ label, optional }) => (
    <div style={{ border: '1.5px dashed #D9D9D9', borderRadius: 12, height: 80, display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12, marginBottom: 12, cursor: 'pointer', background: C.white }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={optional?C.midGrey:C.emerald} strokeWidth="2" strokeLinecap="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>
      <span style={{ flex: 1, fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13, color: C.midGrey }}>{label}</span>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: optional?C.lightGrey:C.forest, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>
    </div>
  );

  return (
    <div style={{ width: '100%', height: '100%', background: C.cream, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100 }}>
        <div style={{ background: C.white, padding: '10px 20px 12px', borderBottom: `1px solid ${C.lightGrey}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: C.charcoal, display: 'flex' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
            </button>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 17, color: C.charcoal }}>Murabaha Application</span>
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13, color: C.richGold, cursor: 'pointer' }}>Save Draft</span>
          </div>
        </div>
        <div style={{ background: C.white, padding: '16px 24px 14px', borderBottom: `1px solid ${C.lightGrey}` }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            {[{n:1,label:'Personal Info',active:true},{n:2,label:'Financing Details',active:false},{n:3,label:'Documents',active:false}].map((s,i,arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i<arr.length-1?1:undefined }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: s.active?C.forest:C.lightGrey, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 12, color: s.active?'white':C.midGrey }}>{s.n}</span>
                  </div>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 10, color: s.active?C.forest:C.midGrey, whiteSpace: 'nowrap' }}>{s.label}</span>
                </div>
                {i<arr.length-1 && <div style={{ flex: 1, height: 2, background: C.lightGrey, marginTop: -14, marginLeft: 6, marginRight: 6, borderRadius: 100 }} />}
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '0 16px' }}>
          <div style={{ marginTop: 20, marginBottom: 4 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 15, color: C.charcoal }}>Personal Information</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey, marginTop: 2, marginBottom: 14 }}>Auto-filled from your KYC profile</div>
          </div>
          <ReadonlyField label="Full Name" value="Aminu Musa" />
          <ReadonlyField label="Phone Number" value="+234 801 234 5678" />
          <ReadonlyField label="BVN" value="••••••••123" />
          <div style={{ marginTop: 20, marginBottom: 14 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 15, color: C.charcoal }}>Financing Details</div>
          </div>
          <div style={{ marginBottom: 6 }}>
            <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13, color: C.charcoal, marginBottom: 5 }}>How much do you need?</div>
            <div style={{ display: 'flex', alignItems: 'center', background: C.white, border: `1.5px solid ${C.emerald}`, borderRadius: 10, height: 64, padding: '0 16px', gap: 8, marginBottom: 10 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 20, color: C.emerald }}>₦</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 20, color: C.charcoal }}>{fmt(amount)}</span>
            </div>
            <input type="range" min={10000} max={500000} step={5000} value={amount} onChange={e => setAmount(+e.target.value)} style={{ width: '100%', accentColor: C.forest, cursor: 'pointer', marginBottom: 4 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.midGrey }}>Min ₦10,000</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.midGrey }}>Max ₦500,000</span>
            </div>
          </div>
          <div style={{ marginBottom: 14, marginTop: 14 }}>
            <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13, color: C.charcoal, marginBottom: 5 }}>Purpose</div>
            <div style={{ display: 'flex', alignItems: 'center', background: C.white, border: '1.5px solid #E0E0E0', borderRadius: 10, height: 56, padding: '0 14px' }}>
              <select value={purpose} onChange={e => setPurpose(e.target.value)} style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontFamily: "'Inter',sans-serif", fontSize: 14, color: purpose?C.charcoal:C.midGrey, cursor: 'pointer' }}>
                <option value="">Select purpose...</option>
                <option value="equipment">Equipment Purchase</option>
                <option value="inventory">Business Inventory</option>
                <option value="vehicle">Vehicle</option>
                <option value="education">Education</option>
                <option value="medical">Medical</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13, color: C.charcoal, marginBottom: 8 }}>Duration</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[3,6,12,24].map(m => (
                <button key={m} onClick={() => setDuration(m)} style={{ flex: 1, height: 40, borderRadius: 20, border: duration===m?'none':`1.5px solid #E8E8E8`, cursor: 'pointer', background: duration===m?C.forest:C.white, color: duration===m?'white':C.midGrey, fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 12, transition: 'all 0.2s' }}>
                  {m} mo
                </button>
              ))}
            </div>
          </div>
          <div style={{ background: '#FFF8E1', borderRadius: 16, padding: '14px 16px', marginBottom: 20, border: '1px solid #F5E5A0' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 14, color: C.richGold, marginBottom: 12 }}>Estimated Summary</div>
            {[{label:'Financing Amount',value:`₦ ${fmt(amount)}`},{label:'Markup Fee (12%)',value:`₦ ${fmt(markup)}`},{label:'Total Repayable',value:`₦ ${fmt(total)}`,green:true}].map((row,i) => (
              <div key={i}>
                {i>0 && <div style={{ height: 1, background: 'rgba(201,146,26,0.2)', margin: '8px 0' }} />}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.midGrey }}>{row.label}</span>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: row.green?14:13, color: row.green?C.emerald:C.charcoal }}>{row.value}</span>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 10, fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.midGrey, textAlign: 'center' }}>All charges are fixed and disclosed upfront. No hidden fees.</div>
          </div>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 15, color: C.charcoal, marginBottom: 12 }}>Supporting Documents</div>
            <UploadBox label="Upload Business Registration" />
            <UploadBox label="Upload Bank Statement (3 months)" />
            <UploadBox label="Upload Collateral Document (optional)" optional />
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, white 60%, transparent)', padding: '16px 16px 24px' }}>
        <button onClick={onNext} style={{ width: '100%', height: 56, borderRadius: 12, background: C.forest, border: 'none', color: 'white', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: `0 4px 16px rgba(26,107,60,0.28)`, marginBottom: 10 }}>
          Next → Step 2 of 3
        </button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={C.midGrey} strokeWidth="2" strokeLinecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: C.midGrey }}>Your information is protected with 256-bit encryption</span>
        </div>
      </div>
    </div>
  );
}
