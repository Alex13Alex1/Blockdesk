import React from 'react';

/**
 * Interactive Infrastructure Diagram Component
 * Based on the official Blockdesk infographic
 * BRANDING: Uses "Blockdesk" consistently (replaced Blockvis)
 * 
 * Shows: Market Context → Solution → Strategic Partners
 * With Fiat Settlement Layer and Foundational Elements
 */
export function InfrastructureDiagram() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8 shadow-lg">
      <svg 
        viewBox="0 0 1000 600" 
        className="h-auto w-full" 
        role="img" 
        aria-label="Blockdesk Infrastructure Diagram"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blue/Purple gradient for panels */}
          <linearGradient id="panelGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3b82f6" stopOpacity="0.25" />
            <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.15" />
          </linearGradient>
          
          {/* Green gradient for solution circle */}
          <linearGradient id="solutionGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22c55e" stopOpacity="0.4" />
            <stop offset="1" stopColor="#10b981" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Arrow marker */}
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 10 3, 0 6" fill="#60a5fa" />
          </marker>
        </defs>

        {/* Background circuit pattern (subtle) */}
        <g opacity="0.1">
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={i * 50}
              y1="0"
              x2={i * 50 + 30}
              y2="600"
              stroke="#60a5fa"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Title - BRANDING: Blockdesk */}
        <text 
          x="500" 
          y="35" 
          fontSize="22" 
          fill="#ffffff" 
          fontWeight="800" 
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5px"
        >
          Blockdesk - MiCA-Native OTC &amp; Settlement Platform for Europe
        </text>

        {/* Market Context - Left Panel */}
        <g className="transition-all duration-300 hover:opacity-100" style={{ opacity: 0.95 }}>
          <rect 
            x="20" 
            y="70" 
            width="210" 
            height="190" 
            rx="18" 
            fill="url(#panelGradient)" 
            stroke="#60a5fa" 
            strokeWidth="2.5" 
            filter="url(#glow)"
          />
          <text x="40" y="105" fontSize="17" fill="#e0e7ff" fontWeight="700" fontFamily="system-ui">Market Context</text>
          <text x="40" y="135" fontSize="14" fill="#cbd5e1" fontFamily="system-ui">• MiCA Regulation</text>
          <text x="40" y="160" fontSize="14" fill="#cbd5e1" fontFamily="system-ui">• Institutional Demand</text>
          <text x="40" y="185" fontSize="14" fill="#cbd5e1" fontFamily="system-ui">• Shift Towards Compliance &amp; Settlement</text>
        </g>

        {/* Arrow from Market Context to Solution */}
        <path 
          d="M230 165 Q350 165, 380 250" 
          stroke="#60a5fa" 
          strokeWidth="4" 
          fill="none" 
          filter="url(#glow)"
          markerEnd="url(#arrowhead)"
        />

        {/* Solution - Central Circle with 4 Quadrants */}
        <g>
          {/* Outer circle with glow */}
          <circle 
            cx="500" 
            cy="250" 
            r="125" 
            fill="url(#solutionGradient)" 
            stroke="#22c55e" 
            strokeWidth="3.5" 
            opacity="0.95" 
            filter="url(#glow)"
            className="transition-all duration-300 hover:opacity-100"
          />
          
          {/* Center label */}
          <text x="500" y="195" fontSize="19" fill="#ffffff" fontWeight="800" textAnchor="middle" fontFamily="system-ui">Solution</text>
          
          {/* Dividing lines for quadrants */}
          <line x1="500" y1="130" x2="500" y2="370" stroke="#22c55e" strokeWidth="2" opacity="0.3" />
          <line x1="375" y1="250" x2="625" y2="250" stroke="#22c55e" strokeWidth="2" opacity="0.3" />
          
          {/* Top Left: RFQ OTC Execution */}
          <g className="hover:opacity-100 transition-opacity" style={{ opacity: 0.95 }}>
            <rect x="390" y="140" width="110" height="110" rx="12" fill="#1e40af" opacity="0.5" stroke="#22c55e" strokeWidth="2" />
            {/* Document icon */}
            <rect x="420" y="160" width="25" height="30" rx="3" fill="#e0e7ff" opacity="0.9" />
            <line x1="425" y1="170" x2="440" y2="170" stroke="#1e40af" strokeWidth="2" />
            <line x1="425" y1="177" x2="440" y2="177" stroke="#1e40af" strokeWidth="2" />
            <line x1="425" y1="184" x2="438" y2="184" stroke="#1e40af" strokeWidth="2" />
            {/* Pen icon */}
            <circle cx="450" cy="175" r="4" fill="#f59e0b" />
            <line x1="450" y1="175" x2="455" y2="185" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <text x="445" y="230" fontSize="12" fill="#e0e7ff" fontWeight="600" textAnchor="middle" fontFamily="system-ui">RFQ OTC Execution</text>
          </g>

          {/* Top Right: Crypto↔Fiat Settlement */}
          <g className="hover:opacity-100 transition-opacity" style={{ opacity: 0.95 }}>
            <rect x="500" y="140" width="110" height="110" rx="12" fill="#1e40af" opacity="0.5" stroke="#22c55e" strokeWidth="2" />
            {/* Bitcoin icon */}
            <circle cx="530" cy="175" r="12" fill="#f59e0b" />
            <text x="530" y="181" fontSize="11" fill="#1e40af" fontWeight="700" textAnchor="middle">₿</text>
            {/* Exchange arrows */}
            <text x="550" y="178" fontSize="16" fill="#e0e7ff">↔</text>
            {/* Euro icon */}
            <circle cx="570" cy="175" r="12" fill="#22c55e" />
            <text x="570" y="181" fontSize="11" fill="#ffffff" fontWeight="700" textAnchor="middle">€</text>
            <text x="555" y="230" fontSize="12" fill="#e0e7ff" fontWeight="600" textAnchor="middle" fontFamily="system-ui">Crypto↔Fiat Settlement</text>
          </g>

          {/* Bottom Left: Institutional Liquidity */}
          <g className="hover:opacity-100 transition-opacity" style={{ opacity: 0.95 }}>
            <rect x="390" y="250" width="110" height="110" rx="12" fill="#1e40af" opacity="0.5" stroke="#22c55e" strokeWidth="2" />
            {/* Bank building icon */}
            <rect x="420" y="270" width="35" height="28" rx="3" fill="#e0e7ff" opacity="0.9" />
            <rect x="425" y="275" width="7" height="7" fill="#1e40af" />
            <rect x="435" y="275" width="7" height="7" fill="#1e40af" />
            <rect x="445" y="275" width="7" height="7" fill="#1e40af" />
            <rect x="425" y="285" width="7" height="7" fill="#1e40af" />
            <rect x="435" y="285" width="7" height="7" fill="#1e40af" />
            <rect x="445" y="285" width="7" height="7" fill="#1e40af" />
            <polygon points="420,270 437.5,260 455,270" fill="#e0e7ff" opacity="0.9" />
            <text x="445" y="340" fontSize="12" fill="#e0e7ff" fontWeight="600" textAnchor="middle" fontFamily="system-ui">Institutional Liquidity</text>
          </g>

          {/* Bottom Right: Compliance & Reporting */}
          <g className="hover:opacity-100 transition-opacity" style={{ opacity: 0.95 }}>
            <rect x="500" y="250" width="110" height="110" rx="12" fill="#1e40af" opacity="0.5" stroke="#22c55e" strokeWidth="2" />
            {/* Clipboard icon */}
            <rect x="525" y="270" width="25" height="30" rx="3" fill="#e0e7ff" opacity="0.9" />
            <rect x="528" y="273" width="19" height="4" rx="1" fill="#1e40af" />
            {/* Checkmark */}
            <path d="M530 290 L538 298 L550 285" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="555" y="340" fontSize="12" fill="#e0e7ff" fontWeight="600" textAnchor="middle" fontFamily="system-ui">Compliance &amp; Reporting</text>
          </g>
        </g>

        {/* Arrow from Solution to Strategic Partners */}
        <path 
          d="M625 250 Q750 250, 780 165" 
          stroke="#60a5fa" 
          strokeWidth="4" 
          fill="none" 
          filter="url(#glow)"
          markerEnd="url(#arrowhead)"
        />

        {/* Strategic Partners - Right Panel */}
        <g className="transition-all duration-300 hover:opacity-100" style={{ opacity: 0.95 }}>
          <rect 
            x="790" 
            y="70" 
            width="190" 
            height="190" 
            rx="18" 
            fill="url(#panelGradient)" 
            stroke="#60a5fa" 
            strokeWidth="2.5" 
            filter="url(#glow)"
          />
          <text x="810" y="105" fontSize="17" fill="#e0e7ff" fontWeight="700" fontFamily="system-ui">Strategic Partners</text>
          
          {/* Banks */}
          <g>
            <rect x="815" y="120" width="22" height="18" rx="2" fill="#e0e7ff" opacity="0.9" />
            <rect x="818" y="123" width="5" height="5" fill="#1e40af" />
            <rect x="826" y="123" width="5" height="5" fill="#1e40af" />
            <rect x="834" y="123" width="5" height="5" fill="#1e40af" />
            <polygon points="815,120 826,115 837,120" fill="#e0e7ff" opacity="0.9" />
            <text x="845" y="133" fontSize="14" fill="#cbd5e1" fontFamily="system-ui">Banks</text>
          </g>
          
          {/* PSP & Fintech */}
          <g>
            <rect x="818" y="145" width="15" height="12" rx="1" fill="#e0e7ff" opacity="0.9" />
            <circle cx="822" cy="150" r="2.5" fill="#1e40af" />
            <circle cx="829" cy="150" r="2.5" fill="#1e40af" />
            <text x="845" y="158" fontSize="14" fill="#cbd5e1" fontFamily="system-ui">PSP &amp; Fintech</text>
          </g>
          
          {/* Exchanges & Brokers */}
          <g>
            <rect x="818" y="170" width="4" height="10" fill="#e0e7ff" opacity="0.9" />
            <rect x="825" y="167" width="4" height="13" fill="#e0e7ff" opacity="0.9" />
            <rect x="832" y="172" width="4" height="8" fill="#e0e7ff" opacity="0.9" />
            <rect x="839" y="165" width="4" height="15" fill="#e0e7ff" opacity="0.9" />
            <text x="845" y="183" fontSize="14" fill="#cbd5e1" fontFamily="system-ui">Exchanges &amp; Brokers</text>
          </g>
        </g>

        {/* Fiat Settlement Layer - Middle Bottom Platform */}
        <g className="transition-all duration-300 hover:opacity-100" style={{ opacity: 0.95 }}>
          <rect 
            x="280" 
            y="380" 
            width="440" 
            height="110" 
            rx="22" 
            fill="#1e3a8a" 
            opacity="0.75" 
            stroke="#22c55e" 
            strokeWidth="3" 
            filter="url(#glow)"
          />
          <text x="500" y="415" fontSize="20" fill="#ffffff" fontWeight="800" textAnchor="middle" fontFamily="system-ui">Fiat Settlement Layer</text>
          <text x="320" y="445" fontSize="14" fill="#cbd5e1" fontFamily="system-ui">EMI Partnership</text>
          <text x="620" y="445" fontSize="14" fill="#cbd5e1" fontFamily="system-ui">Internal Integration</text>
        </g>

        {/* Foundational Elements - Bottom Hexagons */}
        
        {/* Architecture Defined */}
        <g className="hover:opacity-100 transition-opacity cursor-pointer" style={{ opacity: 0.9 }}>
          <polygon points="50,500 85,480 120,500 85,520" fill="#1e40af" opacity="0.6" stroke="#22c55e" strokeWidth="2.5" filter="url(#glow)" />
          {/* Gears icon */}
          <circle cx="85" cy="495" r="10" fill="#e0e7ff" opacity="0.9" />
          <circle cx="85" cy="495" r="6" fill="#1e40af" />
          <circle cx="78" cy="488" r="4" fill="#e0e7ff" opacity="0.9" />
          <circle cx="92" cy="488" r="4" fill="#e0e7ff" opacity="0.9" />
          <circle cx="78" cy="502" r="4" fill="#e0e7ff" opacity="0.9" />
          <circle cx="92" cy="502" r="4" fill="#e0e7ff" opacity="0.9" />
          <text x="85" y="535" fontSize="12" fill="#cbd5e1" textAnchor="middle" fontFamily="system-ui" fontWeight="600">Architecture Defined</text>
        </g>

        {/* Regulatory Pathways */}
        <g className="hover:opacity-100 transition-opacity cursor-pointer" style={{ opacity: 0.9 }}>
          <polygon points="250,500 285,480 320,500 285,520" fill="#1e40af" opacity="0.6" stroke="#22c55e" strokeWidth="2.5" filter="url(#glow)" />
          {/* Document with scale icon */}
          <rect x="270" y="485" width="30" height="20" rx="2" fill="#e0e7ff" opacity="0.9" />
          <line x1="275" y1="490" x2="295" y2="490" stroke="#1e40af" strokeWidth="1.5" />
          {/* Balance scale */}
          <circle cx="275" cy="495" r="2.5" fill="#1e40af" />
          <circle cx="295" cy="495" r="2.5" fill="#1e40af" />
          <text x="285" y="535" fontSize="12" fill="#cbd5e1" textAnchor="middle" fontFamily="system-ui" fontWeight="600">Regulatory Pathways</text>
        </g>

        {/* Partner Discussions */}
        <g className="hover:opacity-100 transition-opacity cursor-pointer" style={{ opacity: 0.9 }}>
          <polygon points="450,500 485,480 520,500 485,520" fill="#1e40af" opacity="0.6" stroke="#22c55e" strokeWidth="2.5" filter="url(#glow)" />
          {/* Speech bubbles */}
          <ellipse cx="475" cy="490" rx="8" ry="6" fill="#e0e7ff" opacity="0.9" />
          <ellipse cx="495" cy="490" rx="8" ry="6" fill="#e0e7ff" opacity="0.9" />
          <path d="M475 496 Q485 500 495 496" stroke="#1e40af" strokeWidth="2" fill="none" />
          <text x="485" y="535" fontSize="12" fill="#cbd5e1" textAnchor="middle" fontFamily="system-ui" fontWeight="600">Partner Discussions</text>
        </g>

        {/* Execution aligned with MiCA */}
        <g className="hover:opacity-100 transition-opacity cursor-pointer" style={{ opacity: 0.9 }}>
          <polygon points="650,500 685,480 720,500 685,520" fill="#1e40af" opacity="0.6" stroke="#22c55e" strokeWidth="2.5" filter="url(#glow)" />
          {/* Intersecting arrows */}
          <path d="M670 485 L680 495 L690 485" stroke="#e0e7ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M680 495 L680 505" stroke="#e0e7ff" strokeWidth="2.5" />
          <path d="M700 485 L690 495 L700 505" stroke="#e0e7ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M690 495 L680 495" stroke="#e0e7ff" strokeWidth="2.5" />
          <text x="685" y="535" fontSize="12" fill="#cbd5e1" textAnchor="middle" fontFamily="system-ui" fontWeight="600">Execution aligned with MiCA</text>
        </g>
      </svg>
    </div>
  );
}
