import { C } from '../tokens';

const NAV_TABS = [
  { id: 'home',     label: 'Home',    icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { id: 'finance',  label: 'Finance', icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> },
  { id: 'invest',   label: 'Invest',  icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
  { id: 'takaful',  label: 'Takaful', icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M12 2l8 4v6c0 5-3.5 9.5-8 11C7.5 21.5 4 17 4 12V6l8-4z"/></svg> },
  { id: 'profile',  label: 'Profile', icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
];

export function BottomNav({ active, onNavigate }) {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: C.white, borderTop: `1px solid ${C.lightGrey}`, display: 'flex', alignItems: 'flex-start', paddingTop: 8, zIndex: 50 }}>
      {NAV_TABS.map((tab) => {
        const isActive = active === tab.id;
        const color = isActive ? C.emerald : C.midGrey;
        return (
          <button key={tab.id} onClick={() => onNavigate(tab.id)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, background: 'none', border: 'none', cursor: 'pointer', color, position: 'relative', paddingTop: 4 }}>
            {isActive && <div style={{ position: 'absolute', top: -2, width: 20, height: 3, borderRadius: 100, background: C.emerald }} />}
            {tab.icon(color)}
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 10 }}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
