import React from "react";
import { DynamicVisualization } from "./components/DynamicVisualization";
import { PlatformOverviewImage } from "./components/PlatformOverviewImage";
import { InfrastructureDiagram } from "./components/InfrastructureDiagram";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { ScrollReveal } from "./components/ScrollReveal";

/* 
 * VISUAL ENHANCEMENTS - Can be reverted by removing imports above and restoring original classes
 * Added: ParticlesBackground, ScrollReveal, enhanced styling
 */

/**
 * Blockdesk Landing (clean TSX)
 * - No external assets
 * - No code statements inside SVG
 * - All visuals are inline SVG
 * - Tailwind classes (if Tailwind подключен — будет красиво; если нет — всё равно отрендерится)
 */

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 md:px-8">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  // ENHANCED: Added glassmorphism and hover effects
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {children}
    </div>
  );
}

function SectionTitle({
  overline,
  title,
  subtitle,
}: {
  overline?: string;
  title: string;
  subtitle?: string;
}) {
  // ENHANCED: Improved typography hierarchy with better contrast
  return (
    <div className="space-y-3">
      {overline ? <Pill>{overline}</Pill> : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

/* -------------------- Visuals (SVG) -------------------- */

function VisualMarketShift() {
  // ENHANCED: Comparison cards instead of simple table
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          <Pill>MiCA</Pill>
          <Pill>Institutional Demand</Pill>
          <Pill>Settlement Certainty</Pill>
        </div>

        {/* ENHANCED: Comparison cards layout */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Legacy Column */}
          <div className="rounded-xl border-2 border-red-200/50 bg-slate-100/50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <h3 className="text-lg font-bold text-slate-700">Legacy</h3>
            </div>
            <ul className="space-y-3">
              {["Manual processes", "Banking friction", "Slippage & uncertainty", "Compliance fragmentation"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Infrastructure Column */}
          <div className="rounded-xl border-2 border-green-500/50 bg-green-50/30 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-lg font-bold text-slate-900">Our Infrastructure</h3>
            </div>
            <ul className="space-y-3 relative z-10">
              {["RFQ-based OTC execution", "Integrated fiat settlement", "Reporting & controls", "MiCA-native posture"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <svg viewBox="0 0 900 260" className="h-auto w-full hidden" role="img" aria-label="Market shift diagram">
          <defs>
            <linearGradient id="bd_g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#0ea5e9" stopOpacity="0.18" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0.12" />
            </linearGradient>
          </defs>

          <rect x="20" y="40" width="250" height="180" rx="18" fill="url(#bd_g1)" stroke="#cbd5e1" />
          <text x="45" y="75" fontSize="16" fill="#0f172a" fontWeight="600">
            Fragmented Venues
          </text>
          <text x="45" y="105" fontSize="13" fill="#475569">
            • Manual processes
          </text>
          <text x="45" y="130" fontSize="13" fill="#475569">
            • Banking friction
          </text>
          <text x="45" y="155" fontSize="13" fill="#475569">
            • Slippage & uncertainty
          </text>
          <text x="45" y="180" fontSize="13" fill="#475569">
            • Compliance fragmentation
          </text>

          <path
            d="M310 130 C 380 130, 420 130, 490 130"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M490 130 l-18 -10 v20 z" fill="#94a3b8" />

          <rect x="520" y="40" width="360" height="180" rx="18" fill="#ffffff" stroke="#cbd5e1" />
          <text x="545" y="75" fontSize="16" fill="#0f172a" fontWeight="600">
            Infrastructure Phase
          </text>
          <text x="545" y="105" fontSize="13" fill="#475569">
            • RFQ-based OTC execution
          </text>
          <text x="545" y="130" fontSize="13" fill="#475569">
            • Integrated fiat settlement
          </text>
          <text x="545" y="155" fontSize="13" fill="#475569">
            • Reporting & controls
          </text>
          <text x="545" y="180" fontSize="13" fill="#475569">
            • MiCA-native posture
          </text>

          <rect x="560" y="195" width="260" height="34" rx="17" fill="#f1f5f9" stroke="#e2e8f0" />
          <text x="575" y="217" fontSize="13" fill="#0f172a" fontWeight="600">
            Structural shift, not a trend
          </text>
        </svg>
      </div>
    </div>
  );
}

function VisualGap() {
  const cols = [
    { x: 20, title: "Retrofitted Compliance", items: ["Not MiCA-native", "Patchwork controls"] },
    { x: 320, title: "Settlement Weakness", items: ["Banking friction", "Unclear rails"] },
    { x: 620, title: "Non-Scalable Ops", items: ["Manual brokering", "High marginal cost"] },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap gap-2">
        <Pill>Why many OTC desks break</Pill>
        <Pill>Manual ops</Pill>
        <Pill>External dependencies</Pill>
      </div>

      <svg viewBox="0 0 900 240" className="h-auto w-full" role="img" aria-label="Market gap diagram">
        {cols.map((c, i) => (
          <g key={i}>
            <rect x={c.x} y="30" width="260" height="180" rx="18" fill="#f8fafc" stroke="#cbd5e1" />
            <text x={c.x + 20} y="65" fontSize="15" fill="#0f172a" fontWeight="700">
              {c.title}
            </text>
            <text x={c.x + 20} y="95" fontSize="13" fill="#475569">
              • {c.items[0]}
            </text>
            <text x={c.x + 20} y="120" fontSize="13" fill="#475569">
              • {c.items[1]}
            </text>
            <circle cx={c.x + 230} cy="60" r="8" fill="#ef4444" opacity="0.9" />
          </g>
        ))}
        <text x="20" y="225" fontSize="13" fill="#64748b">
          Blockdesk is built as infrastructure first — not a manual trading desk.
        </text>
      </svg>
    </div>
  );
}

function VisualHowItWorks() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <Pill>RFQ</Pill>
          <Pill>OTC Execution</Pill>
          <Pill>Crypto ↔ Fiat Settlement</Pill>
          <Pill>Reporting</Pill>
        </div>

        <svg viewBox="0 0 920 300" className="h-auto w-full" role="img" aria-label="How it works">
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
}

function VisualFiatLayerRoadmap() {
  const phases = [
    { x: 140, title: "Phase 1 — Launch", sub: "Tightly-coupled EMI partnership" },
    { x: 460, title: "Phase 2 — Scale", sub: "Equity-linked structure / options" },
    { x: 780, title: "Phase 3 — Moat", sub: "Internalized settlement control" },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap gap-2">
        <Pill>Fiat Settlement Layer</Pill>
        <Pill>Control roadmap</Pill>
        <Pill>Dependency risk ↓</Pill>
      </div>

      <svg viewBox="0 0 920 260" className="h-auto w-full" role="img" aria-label="Fiat roadmap">
        <line x1="60" y1="120" x2="860" y2="120" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
        {phases.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy="120" r="16" fill="#0ea5e9" opacity="0.85" />
            <rect x={p.x - 140} y="35" width="280" height="70" rx="16" fill="#f8fafc" stroke="#cbd5e1" />
            <text x={p.x - 120} y="63" fontSize="14" fill="#0f172a" fontWeight="800">
              {p.title}
            </text>
            <text x={p.x - 120} y="86" fontSize="12" fill="#475569">
              {p.sub}
            </text>
          </g>
        ))}

        <text x="60" y="210" fontSize="12" fill="#64748b">
          Fiat rails are designed as a first-class layer of the ecosystem — not an external add-on.
        </text>
      </svg>
    </div>
  );
}

function VisualExecutionIntelligence() {
  const inputs = [
    { x: 70, y: 70, title: "Client Intent", sub: "size, urgency, constraints" },
    { x: 70, y: 170, title: "Market State", sub: "depth, volatility, spreads" },
    { x: 740, y: 70, title: "LP Universe", sub: "quotes, limits, reliability" },
    { x: 740, y: 170, title: "Compliance Signals", sub: "KYT, risk, rules" },
  ];

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <Pill>Execution Intelligence Layer</Pill>
          <Pill>Best execution</Pill>
          <Pill>Smart RFQ routing</Pill>
        </div>

        <svg viewBox="0 0 920 280" className="h-auto w-full" role="img" aria-label="Execution intelligence">
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

          {inputs.map((b, i) => (
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
}

function VisualPartners() {
  const partners = [
    { x: 60, y: 40, title: "Banks", sub: "Compliant execution layer" },
    { x: 60, y: 140, title: "EMIs", sub: "Fiat settlement orchestration" },
    { x: 660, y: 40, title: "PSP & Fintech", sub: "Externalize OTC execution" },
    { x: 660, y: 140, title: "Exchanges & Brokers", sub: "Regulated EU settlement" },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap gap-2">
        <Pill>Partner-ready</Pill>
        <Pill>API-first</Pill>
        <Pill>White-label friendly</Pill>
      </div>

      <svg viewBox="0 0 920 240" className="h-auto w-full" role="img" aria-label="Partners map">
        <rect x="350" y="70" width="220" height="100" rx="20" fill="#eef2ff" stroke="#cbd5e1" />
        <text x="380" y="115" fontSize="15" fill="#0f172a" fontWeight="900">
          Blockdesk Platform
        </text>
        <text x="380" y="140" fontSize="12" fill="#475569">
          Integration & alignment layer
        </text>

        {partners.map((n, i) => (
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
}

function VisualStatus() {
  const items = [
    { title: "Architecture Defined", desc: "Core modules and interfaces mapped.", icon: "⚙️" },
    { title: "Regulatory Pathways", desc: "Jurisdictions and compliance route clarified.", icon: "📋" },
    { title: "Partner Discussions", desc: "EMI, banking and liquidity dialogues active.", icon: "💬" },
    { title: "MiCA Timing", desc: "Execution plan aligned with market window.", icon: "⏱️" },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap gap-2">
        <Pill>Status</Pill>
        <Pill>Structured execution planning</Pill>
        <Pill>MiCA-aligned</Pill>
      </div>

      {/* ENHANCED: Glassmorphism cards with hover effects and icon glow */}
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((s, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-green-500/50"
          >
            <div className="mb-2 text-2xl">{s.icon}</div>
            <div className="text-sm font-semibold text-slate-900">{s.title}</div>
            <div className="mt-1 text-sm text-slate-600">{s.desc}</div>
            {/* Subtle green glow on hover */}
            <div className="mt-2 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- Page -------------------- */

export default function BlockdeskLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white shadow-sm">
                BD
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Blockdesk</div>
                <div className="text-xs text-slate-500">MiCA-native OTC & settlement infrastructure</div>
              </div>
            </div>

            <nav className="hidden items-center gap-6 md:flex">
              <a href="#what" className="text-sm text-slate-600 hover:text-slate-900">
                What
              </a>
              <a href="#how" className="text-sm text-slate-600 hover:text-slate-900">
                How it works
              </a>
              <a href="#fiat" className="text-sm text-slate-600 hover:text-slate-900">
                Fiat layer
              </a>
              <a href="#partners" className="text-sm text-slate-600 hover:text-slate-900">
                Partners
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Request access
              </a>
            </nav>
          </div>
        </Container>
      </header>

      {/* Hero - ENHANCED: Added dark background with particles and gradient title */}
      <section className="relative pt-14 md:pt-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <ParticlesBackground />
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center relative z-10">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Pill>Europe</Pill>
                  <Pill>MiCA-native</Pill>
                  <Pill>Institutional OTC</Pill>
                  <Pill>Fiat Settlement</Pill>
                </div>

                {/* ENHANCED: Added gradient to title */}
                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl text-gradient">
                  The regulated execution & settlement stack for institutional crypto flows in Europe.
                </h1>

                <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                  Blockdesk is building a MiCA-native OTC and crypto–fiat settlement platform for banks, PSPs, fintechs,
                  brokers, exchanges, and institutional treasuries — with predictable execution, auditable reporting, and
                  fiat rails designed as a first-class layer of the ecosystem.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600 transition-all duration-300 glow-green-soft"
                  >
                    Start a strategic conversation
                  </a>
                  <a
                    href="#how"
                    className="inline-flex items-center justify-center rounded-xl border border-green-500/50 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-green-500/10 transition-all duration-300"
                  >
                    See how it works
                  </a>
                </div>

                {/* ENHANCED: Status badge with improved styling */}
                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 backdrop-blur-sm">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                    <div className="relative w-2 h-2 rounded-full bg-green-500 glow-green-soft"></div>
                  </div>
                  <span className="text-xs font-medium text-green-400">14 Active Institutional Clients Integrated</span>
                </div>

                <p className="text-xs text-slate-400">
                  Built as infrastructure (non-directional, volume-driven) — not a retail trading product.
                </p>
              </div>

              <div>
                {/* ENHANCED: Glassmorphism card */}
                <div className="rounded-2xl glassmorphism-dark border border-green-500/20 p-6 shadow-lg">
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-white">At a glance</div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        ["OTC RFQ Execution", "Self-service RFQ workflow for institutional size."],
                        ["Institutional Liquidity", "Aggregated LPs and counterparty optimization."],
                        ["Crypto ↔ Fiat Settlement", "EUR settlement to IBAN/SEPA via ecosystem fiat layer."],
                        ["Compliance & Reporting", "MiCA-aligned posture, KYT/AML signals, audit-ready reporting."],
                      ].map((x, i) => (
                        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-green-500/30">
                          <div className="text-sm font-semibold text-white">{x[0]}</div>
                          <div className="mt-1 text-sm text-slate-300">{x[1]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <VisualMarketShift />
          </ScrollReveal>
        </Container>
      </section>

      {/* Infrastructure Diagram - BRANDING: Replaced image with interactive SVG, Blockvis → Blockdesk */}
      <section className="py-14 md:py-20 bg-slate-50" id="platform-overview-image">
        <Container>
          <ScrollReveal>
            <InfrastructureDiagram />
          </ScrollReveal>
        </Container>
      </section>

      {/* Dynamic Visualization from Backend - ENHANCED: Added scroll reveal */}
      <section className="py-14 md:py-20" id="overview">
        <Container>
          <ScrollReveal>
            <SectionTitle
              overline="Platform Overview"
              title="MiCA-Native OTC & Settlement Platform for Europe"
              subtitle="A comprehensive infrastructure solution connecting market context, strategic partners, and foundational elements through a unified settlement layer."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <DynamicVisualization />
          </ScrollReveal>
        </Container>
      </section>

      {/* Context - ENHANCED: Alternating background */}
      <section className="py-14 md:py-20 bg-slate-50" id="context">
        <Container>
          <ScrollReveal>
            <SectionTitle
              overline="Context"
              title="Europe is moving from fragmented venues to regulated financial plumbing."
              subtitle="With MiCA, institutions optimize for compliance, execution quality, and settlement certainty. The winners treat crypto like infrastructure — not experimentation."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <VisualGap />
          </ScrollReveal>
        </Container>
      </section>

      {/* What - ENHANCED: Added scroll reveal */}
      <section className="py-14 md:py-20" id="what">
        <Container>
          <ScrollReveal>
            <SectionTitle
              overline="What we're building"
              title="A MiCA-native OTC & settlement platform designed for recurring institutional flows."
              subtitle="Blockdesk combines RFQ OTC execution, institutional liquidity aggregation, crypto–crypto and crypto–fiat settlement, and compliance-first reporting — with fiat rails as a core ecosystem layer."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <VisualHowItWorks />
          </ScrollReveal>
        </Container>
      </section>

      {/* Fiat Layer - ENHANCED: Alternating background */}
      <section className="py-14 md:py-20 bg-slate-50" id="fiat">
        <Container>
          <ScrollReveal>
            <SectionTitle
              overline="Fiat Settlement Layer"
              title="Fiat rails are a first-class layer of the ecosystem — not an external dependency."
              subtitle="We design settlement to reduce dependency risk while increasing long-term control and resilience. The roadmap supports tightly integrated EMI partnerships at launch and deeper internalization as the platform scales."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <VisualFiatLayerRoadmap />
          </ScrollReveal>
        </Container>
      </section>

      {/* Execution Intelligence - ENHANCED: Added scroll reveal */}
      <section className="py-14 md:py-20" id="how">
        <Container>
          <ScrollReveal>
            <SectionTitle
              overline="Execution Intelligence"
              title="Beyond OTC: own the execution logic."
              subtitle="Blockdesk evolves an execution intelligence layer: smart RFQ routing, counterparty optimization, best-execution logic, and consistency controls — turning execution into a defensible infrastructure capability."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <VisualExecutionIntelligence />
          </ScrollReveal>
        </Container>
      </section>

      {/* Partners - ENHANCED: Alternating background */}
      <section className="py-14 md:py-20 bg-slate-50" id="partners">
        <Container>
          <ScrollReveal>
            <SectionTitle
              overline="Strategic relevance"
              title="Built to complement banks, EMIs, PSPs, fintechs, brokers, and exchanges."
              subtitle="Blockdesk is API-first and partnership-friendly by design. It enables regulated execution and settlement without forcing partners to rebuild trading infrastructure internally."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <VisualPartners />
          </ScrollReveal>
        </Container>
      </section>

      {/* Status - ENHANCED: Added scroll reveal */}
      <section className="py-14 md:py-20" id="status">
        <Container>
          <ScrollReveal>
            <SectionTitle
              overline="Status"
              title="Structured execution planning — aligned with MiCA market timing."
              subtitle="We're transitioning from architecture to implementation with regulatory pathways mapped and partner discussions active across settlement and liquidity layers."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <VisualStatus />
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA - ENHANCED: Green accent button and scroll reveal */}
      <section className="pb-20 bg-slate-50" id="contact">
        <Container>
          <ScrollReveal>
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm md:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="space-y-3">
                  <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    Strategic conversations
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Exploring aligned collaboration across liquidity, settlement, or distribution?
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80 md:text-base">
                    If you operate institutional crypto flows in Europe — banking, EMI, PSP, brokerage, or exchange
                    infrastructure — we're open to discussing integration and long-term alignment.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      // Replace with your backend / CRM submit
                      alert("Form submitted (demo). Connect this to your backend/CRM.");
                    }}
                    className="grid gap-3"
                  >
                    <input
                      className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/40"
                      placeholder="Name"
                      required
                    />
                    <input
                      className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/40"
                      placeholder="Work email"
                      type="email"
                      required
                    />
                    <input
                      className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/40"
                      placeholder="Company"
                      required
                    />
                    <textarea
                      className="min-h-[92px] rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/40"
                      placeholder="What are you exploring? (settlement / liquidity / integration / distribution)"
                    />
                    {/* ENHANCED: Green accent button instead of white */}
                    <button
                      type="submit"
                      className="mt-1 inline-flex items-center justify-center rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 transition-all duration-300 glow-green shadow-lg"
                    >
                      Request Strategic Access
                    </button>
                    <div className="text-xs text-white/60">
                      No fundraising language needed — we focus on infrastructure alignment.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <footer className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
            <div className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Blockdesk</span> — MiCA-native OTC & settlement
              infrastructure for Europe.
            </div>
            <div className="text-sm text-slate-500">© {new Date().getFullYear()} Blockdesk. All rights reserved.</div>
          </footer>
        </Container>
      </section>
    </div>
  );
}
