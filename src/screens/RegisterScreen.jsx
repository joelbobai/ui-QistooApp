import { useState } from 'react';
import { C } from '../tokens';
import { IslamicStar } from '../components/IslamicStar';

function InputField({ label, placeholder, type = 'text', prefix, optional = false }) {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const inputType = type === 'password' && show ? 'text' : type;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 13, color: C.charcoal }}>
        {label}{optional && <span style={{ color: C.midGrey, fontWeight: 400 }}> (Optional)</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', background: C.lightGrey, borderRadius: 10, height: 56, border: focused ? `1.5px solid ${C.emerald}` : '1.5px solid transparent', transition: 'border 0.2s', overflow: 'hidden', boxShadow: focused ? `0 0 0 3px rgba(39,174,96,0.1)` : 'none' }}>
        {prefix && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 10px 0 14px', borderRight: '1px solid #E0E0E0', height: '60%', flexShrink: 0 }}>
            <span style={{ fontSize: 16 }}>🇳🇬</span>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: C.charcoal, fontWeight: 500 }}>+234</span>
          </div>
        )}
        <input type={inputType} placeholder={placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ flex: 1, height: '100%', background: 'transparent', border: 'none', outline: 'none', padding: prefix ? '0 12px' : '0 16px', fontFamily: "'Inter',sans-serif", fontSize: 14, color: C.charcoal }} />
        {type === 'password' && (
          <button onClick={() => setShow(s => !s)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 14px', color: C.midGrey, display: 'flex', alignItems: 'center' }}>
            {show
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            }
          </button>
        )}
      </div>
    </div>
  );
}

export function RegisterScreen({ onContinue, onLogin }) {
  return (
    <div style={{ width: '100%', height: '100%', background: C.white, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
      <div style={{ padding: '12px 24px 24px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20, paddingTop: 4 }}>
          <IslamicStar size={28} color={C.richGold} />
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 20, color: C.charcoal }}>
            Ethi<span style={{ color: C.richGold }}>Cash</span>
          </span>
        </div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 26, color: C.charcoal, marginBottom: 6, lineHeight: '34px' }}>Create Your Account</div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: 13, color: C.midGrey, marginBottom: 24 }}>Join thousands accessing ethical finance</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <InputField label="Full Name" placeholder="Enter your full name" />
          <InputField label="Phone Number" placeholder="0801 234 5678" prefix type="tel" />
          <InputField label="Email Address" placeholder="you@example.com" optional type="email" />
          <InputField label="Password" placeholder="Create a strong password" type="password" />
          <InputField label="Confirm Password" placeholder="Re-enter your password" type="password" />
        </div>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey, textAlign: 'center', marginTop: 14, lineHeight: '18px' }}>
          By continuing you agree to our{' '}
          <span style={{ color: C.emerald, fontWeight: 500, cursor: 'pointer' }}>Terms of Service</span>
          {' '}and{' '}
          <span style={{ color: C.emerald, fontWeight: 500, cursor: 'pointer' }}>Privacy Policy</span>
        </div>
        <button onClick={onContinue} style={{ width: '100%', height: 56, borderRadius: 12, background: C.forest, border: 'none', color: C.white, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, cursor: 'pointer', marginTop: 18, boxShadow: `0 4px 16px rgba(26,107,60,0.3)` }}>
          Continue
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0' }}>
          <div style={{ flex: 1, height: 1, background: '#E8E8E8' }} />
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: C.midGrey, whiteSpace: 'nowrap' }}>or sign up with</span>
          <div style={{ flex: 1, height: 1, background: '#E8E8E8' }} />
        </div>
        <button style={{ width: '100%', height: 56, borderRadius: 12, background: C.white, border: '1.5px solid #D9D9D9', color: C.charcoal, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 15, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Continue with Google
        </button>
        <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 8, fontFamily: "'Inter',sans-serif", fontSize: 14, color: C.midGrey }}>
          Already have an account?{' '}
          <span onClick={onLogin} style={{ color: C.emerald, fontWeight: 700, cursor: 'pointer' }}>Log In</span>
        </div>
      </div>
    </div>
  );
}
