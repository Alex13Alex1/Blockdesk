import { Pill } from './Pill';

export const VisualPartners = () => (
  <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-4 flex flex-wrap gap-2">
      <Pill>Partner-ready</Pill>
      <Pill>API-first</Pill>
      <Pill>White-label friendly</Pill>
    </div>

    <svg viewBox="0 0 920 240" className="h-auto w-full">
      <rect x="350" y="70" width="220" height="100" rx="20" fill="#eef2ff" stroke="#cbd5e1" />
      <text x="380" y="115" fontSize="15" fill="#0f172a" fontWeight="900">
        Blockdesk Platform
      </text>
      <text x="380" y="140" fontSize="12" fill="#475569">
        Integration & alignment layer
      </text>

      {[
        { x: 60, y: 40, title: "Banks", sub: "Compliant execution layer" },
        { x: 60, y: 140, title: "EMIs", sub: "Fiat settlement orchestration" },
        { x: 660, y: 40, title: "PSP & Fintech", sub: "Externalize OTC execution" },
        { x: 660, y: 140, title: "Exchanges & Brokers", sub: "Regulated EU settlement" },
      ].map((n, i) => (
        <g key={i}>
          <rect x={n.x} y={n.y} width="220" height="70" rx="18" fill="#f8fafc" stroke="#cbd5e1" />
          <text x={n.x + 16} y={n.y + 28} fontSize="13" fill="#0f172a" fontWeight="800">
            {n.title}
          </text>
          <text x={n.x + 16} y={n.y + 50} fontSize="11.5" fill="#475569">
            {n.sub}
          </text>
        </g>
      ))}

      <line x1="280" y1="75" x2="350" y2="105" stroke="#94a3b8" strokeWidth="2.5" />
      <line x1="280" y1="175" x2="350" y2="135" stroke="#94a3b8" strokeWidth="2.5" />
      <line x1="570" y1="105" x2="660" y2="75" stroke="#94a3b8" strokeWidth="2.5" />
      <line x1="570" y1="135" x2="660" y2="175" stroke="#94a3b8" strokeWidth="2.5" />

      <text x="60" y="220" fontSize="12" fill="#64748b">
        Designed to complement existing players — not disintermediate them.
      </text>
    </svg>
  </div>
);
