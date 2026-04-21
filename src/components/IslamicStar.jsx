import { C } from '../tokens';

export function IslamicStar({ size = 110, color = C.richGold, opacity = 1 }) {
  const s = size / 2;
  const outerR = s * 0.9;
  const innerR = s * 0.37;
  const pts = Array.from({ length: 8 }, (_, i) => {
    const o   = (i * 45 - 90) * Math.PI / 180;
    const inn = ((i + 0.5) * 45 - 90) * Math.PI / 180;
    return `${s + outerR * Math.cos(o)},${s + outerR * Math.sin(o)} ${s + innerR * Math.cos(inn)},${s + innerR * Math.sin(inn)}`;
  }).join(' ');
  const oct = Array.from({ length: 8 }, (_, i) => {
    const a = (i * 45 - 22.5) * Math.PI / 180;
    return `${s + s * 0.4 * Math.cos(a)},${s + s * 0.4 * Math.sin(a)}`;
  }).join(' ');
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ opacity }}>
      <circle cx={s} cy={s} r={s * 0.94} fill="none" stroke={color} strokeWidth="0.6" strokeOpacity="0.25" />
      <polygon points={pts} fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1" />
      <polygon points={oct} fill={color} fillOpacity="0.22" stroke={color} strokeWidth="0.8" />
      <circle cx={s} cy={s} r={s * 0.16} fill={color} fillOpacity="0.55" />
      <circle cx={s} cy={s} r={s * 0.07} fill={color} />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * 45 - 90) * Math.PI / 180;
        return <line key={i} x1={s} y1={s} x2={s + outerR * 0.68 * Math.cos(a)} y2={s + outerR * 0.68 * Math.sin(a)} stroke={color} strokeWidth="0.5" strokeOpacity="0.35" />;
      })}
    </svg>
  );
}

export function CornerPattern({ size = 240, color = C.richGold, opacity = 0.08, flip = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ opacity, transform: flip ? 'rotate(180deg)' : 'none' }}>
      {[[-20,-20],[60,-20],[140,-20],[-20,60],[60,60],[140,60],[-20,140],[60,140],[140,140]].map(([x,y],i) => {
        const r = 34, ir = 13;
        const p = Array.from({ length: 8 }, (_, k) => {
          const o   = (k * 45 - 90) * Math.PI / 180;
          const inn = ((k + 0.5) * 45 - 90) * Math.PI / 180;
          return `${x + r * Math.cos(o)},${y + r * Math.sin(o)} ${x + ir * Math.cos(inn)},${y + ir * Math.sin(inn)}`;
        }).join(' ');
        return <polygon key={i} points={p} fill={color} stroke={color} strokeWidth="0.5" strokeOpacity="0.4" fillOpacity="0.35" />;
      })}
    </svg>
  );
}
