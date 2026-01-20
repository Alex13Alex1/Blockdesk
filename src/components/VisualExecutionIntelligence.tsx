import { Pill } from './Pill';

export const VisualExecutionIntelligence = () => (
  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white">
    <div className="p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        <Pill>Execution Intelligence Layer</Pill>
        <Pill>Best execution</Pill>
        <Pill>Smart RFQ routing</Pill>
      </div>

      <svg viewBox="0 0 920 280" className="h-auto w-full">
        <rect x="320" y="60" width="280" height="160" rx="22" fill="#ffffff" stroke="#cbd5e1" />
        <text x="350" y="105" fontSize="16" fill="#0f172a" fontWeight="900">
          Execution Intelligence
        </text>
        <text x="350" y="135" fontSize="12" fill="#475569">
          • Best-execution logic
        </text>
        <text x="350" y="155" fontSize="12" fill="#475569">
          • RFQ routing & counterparty selection
        </text>
        <text x="350" y="175" fontSize="12" fill="#475569">
          • Slippage control & consistency
        </text>
        <text x="350" y="195" fontSize="12" fill="#475569">
          • Audit-ready reporting signals
        </text>

        {[
          { x: 70, y: 70, title: "Client Intent", sub: "size, urgency, constraints" },
          { x: 70, y: 170, title: "Market State", sub: "depth, volatility, spreads" },
          { x: 740, y: 70, title: "LP Universe", sub: "quotes, limits, reliability" },
          { x: 740, y: 170, title: "Compliance Signals", sub: "KYT, risk, rules" },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width="190" height="78" rx="18" fill="#f8fafc" stroke="#cbd5e1" />
            <text x={b.x + 16} y={b.y + 28} fontSize="13" fill="#0f172a" fontWeight="800">
              {b.title}
            </text>
            <text x={b.x + 16} y={b.y + 52} fontSize="11.5" fill="#475569">
              {b.sub}
            </text>
          </g>
        ))}

        <path d="M260 108 H315" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M315 108 l-12 -8 v16 z" fill="#94a3b8" />
        <path d="M260 208 H315" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M315 208 l-12 -8 v16 z" fill="#94a3b8" />

        <path d="M600 108 H725" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M725 108 l-12 -8 v16 z" fill="#94a3b8" />
        <path d="M600 208 H725" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M725 208 l-12 -8 v16 z" fill="#94a3b8" />
      </svg>
    </div>
  </div>
);
