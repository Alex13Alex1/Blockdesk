import { Pill } from './Pill';

export const VisualHowItWorks = () => (
  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50">
    <div className="p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        <Pill>RFQ</Pill>
        <Pill>OTC Execution</Pill>
        <Pill>Crypto ↔ Fiat Settlement</Pill>
        <Pill>Reporting</Pill>
      </div>

      <svg viewBox="0 0 920 300" className="h-auto w-full">
        <g>
          <rect x="30" y="90" width="190" height="120" rx="18" fill="#ffffff" stroke="#cbd5e1" />
          <text x="55" y="125" fontSize="14" fill="#0f172a" fontWeight="700">
            Client
          </text>
          <text x="55" y="150" fontSize="12" fill="#475569">
            Bank / PSP / Broker
          </text>
          <text x="55" y="175" fontSize="12" fill="#475569">
            Treasury / Exchange
          </text>
        </g>

        <g>
          <rect x="260" y="60" width="220" height="180" rx="18" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="285" y="95" fontSize="14" fill="#0f172a" fontWeight="800">
            Blockdesk Core
          </text>
          <text x="285" y="125" fontSize="12" fill="#475569">
            1) RFQ request
          </text>
          <text x="285" y="150" fontSize="12" fill="#475569">
            2) Quote & execution
          </text>
          <text x="285" y="175" fontSize="12" fill="#475569">
            3) Compliance checks
          </text>
          <text x="285" y="200" fontSize="12" fill="#475569">
            4) Settlement orchestration
          </text>
        </g>

        <g>
          <rect x="520" y="60" width="180" height="180" rx="18" fill="#ffffff" stroke="#cbd5e1" />
          <text x="545" y="95" fontSize="14" fill="#0f172a" fontWeight="700">
            Liquidity
          </text>
          <text x="545" y="125" fontSize="12" fill="#475569">
            Aggregated LPs
          </text>
          <text x="545" y="150" fontSize="12" fill="#475569">
            Market makers
          </text>
          <text x="545" y="175" fontSize="12" fill="#475569">
            Prime sources
          </text>
        </g>

        <g>
          <rect x="735" y="90" width="165" height="120" rx="18" fill="#ffffff" stroke="#cbd5e1" />
          <text x="760" y="125" fontSize="14" fill="#0f172a" fontWeight="700">
            Settlement
          </text>
          <text x="760" y="150" fontSize="12" fill="#475569">
            EUR → IBAN/SEPA
          </text>
          <text x="760" y="175" fontSize="12" fill="#475569">
            Crypto delivery
          </text>
        </g>

        <path d="M220 150 H255" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M255 150 l-12 -8 v16 z" fill="#94a3b8" />

        <path d="M480 150 H515" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M515 150 l-12 -8 v16 z" fill="#94a3b8" />

        <path d="M700 150 H730" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M730 150 l-12 -8 v16 z" fill="#94a3b8" />

        <rect x="260" y="250" width="640" height="34" rx="17" fill="#eef2ff" stroke="#e2e8f0" />
        <text x="280" y="272" fontSize="12" fill="#0f172a" fontWeight="600">
          Non-directional, volume-driven. Predictable execution and auditable settlement.
        </text>
      </svg>
    </div>
  </div>
);
