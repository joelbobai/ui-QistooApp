import { useState } from 'react';
import { C } from './tokens';
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { KYCScreen } from './screens/KYCScreen';
import { BiometricScreen } from './screens/BiometricScreen';
import { HomeScreen } from './screens/HomeScreen';
import { FinancingScreen } from './screens/FinancingScreen';
import { AppFormScreen } from './screens/AppFormScreen';
import { CreditScoreScreen } from './screens/CreditScoreScreen';
import { AppStatusScreen } from './screens/AppStatusScreen';
import { WalletScreen } from './screens/WalletScreen';
import { InvestScreen } from './screens/InvestScreen';
import { InvestDetailScreen } from './screens/InvestDetailScreen';
import { TakafulScreen } from './screens/TakafulScreen';
import { ClaimScreen } from './screens/ClaimScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const NAV = [
  { id: 'splash',        label: 'Splash' },
  { id: 'onboarding',    label: 'Onboarding' },
  { id: 'register',      label: 'Register' },
  { id: 'kyc',           label: 'KYC' },
  { id: 'biometric',     label: 'Biometric' },
  { id: 'home',          label: 'Home' },
  { id: 'financing',     label: 'Financing' },
  { id: 'appform',       label: 'App Form' },
  { id: 'creditscore',   label: 'Credit Score' },
  { id: 'appstatus',     label: 'App Status' },
  { id: 'wallet',        label: 'Wallet' },
  { id: 'invest',        label: 'Invest' },
  { id: 'investdetail',  label: 'Invest Detail' },
  { id: 'takaful',       label: 'Takaful' },
  { id: 'claim',         label: 'Claim' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'profile',       label: 'Profile' },
];

function IOSDevice({ children }) {
  return (
    <div style={{
      width: 402, height: 874,
      background: '#111',
      borderRadius: 54,
      boxShadow: '0 0 0 2px #3a3a3a, 0 0 0 6px #1a1a1a, 0 30px 80px rgba(0,0,0,0.6)',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Status bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 54,
        zIndex: 100,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        padding: '0 28px 6px', pointerEvents: 'none',
      }}>
        <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 15, color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>9:41</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="white" opacity=".9">
            <rect x="0" y="8" width="3" height="4" rx="1"/>
            <rect x="4.5" y="5" width="3" height="7" rx="1"/>
            <rect x="9" y="2" width="3" height="10" rx="1"/>
            <rect x="13.5" y="0" width="3" height="12" rx="1"/>
          </svg>
          <svg width="16" height="12" viewBox="0 0 24 18" fill="white" opacity=".9">
            <path d="M12 14a2 2 0 110 4 2 2 0 010-4z"/>
            <path d="M12 8c3.3 0 6.2 1.5 8.2 3.8L22 10c-2.5-2.9-6.1-4.7-10-4.7S2.5 7.1 0 10l1.8 1.8C3.8 9.5 6.7 8 10 8z"/>
            <path d="M12 2C17.5 2 22.4 4.5 25.6 8.4L27.3 6.7C23.7 2.5 18.2 0 12 0S.3 2.5-3.3 6.7L-1.6 8.4C1.6 4.5 6.5 2 12 2z"/>
          </svg>
          <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <div style={{ width: 25, height: 12, border: '1.5px solid rgba(255,255,255,0.9)', borderRadius: 3, padding: '1.5px', display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '80%', height: '100%', background: 'white', borderRadius: 1.5 }} />
            </div>
            <div style={{ width: 2.5, height: 6, background: 'rgba(255,255,255,0.6)', borderRadius: '0 1px 1px 0' }} />
          </div>
        </div>
      </div>
      {/* Dynamic Island */}
      <div style={{
        position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
        width: 126, height: 37, background: '#000', borderRadius: 20, zIndex: 101,
      }} />
      {/* Screen content */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: 54, overflow: 'hidden' }}>
        {children}
      </div>
      {/* Home indicator */}
      <div style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        width: 134, height: 5, background: 'rgba(255,255,255,0.35)', borderRadius: 3, zIndex: 100,
        pointerEvents: 'none',
      }} />
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState('splash');

  const go = (id) => setScreen(id);

  const renderScreen = () => {
    switch (screen) {
      case 'splash':        return <SplashScreen onDone={() => go('onboarding')} />;
      case 'onboarding':    return <OnboardingScreen onGetStarted={() => go('register')} onLogin={() => go('home')} />;
      case 'register':      return <RegisterScreen onBack={() => go('onboarding')} onContinue={() => go('kyc')} />;
      case 'kyc':           return <KYCScreen onBack={() => go('register')} onContinue={() => go('biometric')} />;
      case 'biometric':     return <BiometricScreen onBack={() => go('kyc')} onSuccess={() => go('home')} />;
      case 'home':          return <HomeScreen onNavigate={go} onNotifications={() => go('notifications')} />;
      case 'financing':     return <FinancingScreen onNavigate={go} />;
      case 'appform':       return <AppFormScreen onBack={() => go('financing')} onNext={() => go('creditscore')} />;
      case 'creditscore':   return <CreditScoreScreen onBack={() => go('appform')} onProceed={() => go('appstatus')} />;
      case 'appstatus':     return <AppStatusScreen onBack={() => go('home')} onNavigate={go} />;
      case 'wallet':        return <WalletScreen onNavigate={go} />;
      case 'invest':        return <InvestScreen onNavigate={go} onViewDetail={() => go('investdetail')} />;
      case 'investdetail':  return <InvestDetailScreen onBack={() => go('invest')} />;
      case 'takaful':       return <TakafulScreen onFileClaim={() => go('claim')} onNavigate={go} />;
      case 'claim':         return <ClaimScreen onBack={() => go('takaful')} />;
      case 'notifications': return <NotificationsScreen onBack={() => go('home')} />;
      case 'profile':       return <ProfileScreen onNavigate={go} />;
      default:              return <SplashScreen onDone={() => go('onboarding')} />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0d1710',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '32px 20px 24px',
      gap: 24,
    }}>
      <IOSDevice>
        {renderScreen()}
      </IOSDevice>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        justifyContent: 'center',
        maxWidth: 520,
      }}>
        {NAV.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => go(id)}
            style={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: screen === id ? 700 : 500,
              fontSize: 11,
              padding: '5px 12px',
              borderRadius: 20,
              border: `1.5px solid ${screen === id ? C.emerald : 'rgba(255,255,255,0.15)'}`,
              background: screen === id ? C.emerald : 'rgba(255,255,255,0.06)',
              color: screen === id ? 'white' : 'rgba(255,255,255,0.55)',
              cursor: 'pointer',
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
